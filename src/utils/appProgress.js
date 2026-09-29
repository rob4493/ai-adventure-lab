import { defaultTrackId, defaultGradeId, getProgressKey, getTrackById, getSubPaths } from "../data/tracks.js";
import { createInitialProgress } from "./progress.js";

const defaultProgressKey = getProgressKey(
  defaultTrackId,
  defaultGradeId
);

export const createAppProgress = () => ({
  activePathIdByTrackId: {
    [defaultTrackId]: defaultGradeId,
  },
  activeTrackId: defaultTrackId,
  progressByPathId: {
    [defaultProgressKey]: createInitialProgress(),
  },
});

// Fill in missing fields so older saved progress still works after app updates.
const asRecord = (value) => value && typeof value === "object" && !Array.isArray(value) ? value : {};

const normalizeProgress = (progress = {}) => {
  const record = asRecord(progress);
  const result = { ...createInitialProgress(), ...record };
  result.completedLevelIds = Array.isArray(record.completedLevelIds) ? record.completedLevelIds : [];
  for (const key of ["scoresByLevelId", "starsByLevelId", "reviewSummariesByLevelId", "conceptStatsByTopic", "practiceByTopic"]) {
    result[key] = asRecord(record[key]);
  }
  return result;
};

// Earlier Everyday saves used one track key. Populate the matching focuses once,
// retaining the original record and never replacing a newer focus (including resets).
const migratePaths = (records) => {
  const result = Object.fromEntries(Object.entries(asRecord(records)).map(
    ([key, progress]) => [key === defaultTrackId ? defaultProgressKey : key, normalizeProgress(progress)]
  ));
  const legacy = result.everyday;
  if (!legacy) return result;
  for (const path of getSubPaths(getTrackById("everyday"))) {
    if (!path.isAvailable) continue;
    const key = getProgressKey("everyday", path.id);
    if (Object.hasOwn(result, key)) continue;
    const ids = new Set(path.levels.map((level) => String(level.id)));
    const topics = new Set(path.levels.flatMap((level) => level.content.rounds.map((round) => round.topic ?? level.skill)));
    const select = (record, keys) => Object.fromEntries(Object.entries(record).filter(([id]) => keys.has(id)));
    result[key] = {
      ...legacy,
      completedLevelIds: legacy.completedLevelIds.filter((id) => ids.has(String(id))),
      scoresByLevelId: select(legacy.scoresByLevelId, ids),
      starsByLevelId: select(legacy.starsByLevelId, ids),
      reviewSummariesByLevelId: select(legacy.reviewSummariesByLevelId, ids),
      conceptStatsByTopic: select(legacy.conceptStatsByTopic, topics),
      practiceByTopic: select(legacy.practiceByTopic, topics),
    };
  }
  return result;
};

export const normalizeSave = (savedProgress) => {
  const initialAppProgress = createAppProgress();

  // Current storage shape keeps separate progress for each playable path.
  if (savedProgress?.progressByPathId) {
    const activeTrack = getTrackById(savedProgress.activeTrackId);

    return {
      activePathIdByTrackId: {
        ...initialAppProgress.activePathIdByTrackId,
        ...(savedProgress.activePathIdByTrackId ?? {}),
      },
      activeTrackId: activeTrack?.id ?? defaultTrackId,
      progressByPathId: {
        ...initialAppProgress.progressByPathId,
        ...migratePaths(savedProgress.progressByPathId),
      },
    };
  }

  // Legacy migration from the earlier track-only progress structure.
  if (savedProgress?.progressByTrackId) {
    const activeTrack = getTrackById(savedProgress.activeTrackId);

    return {
      activePathIdByTrackId: {
        ...initialAppProgress.activePathIdByTrackId,
      },
      activeTrackId: activeTrack?.id ?? defaultTrackId,
      progressByPathId: {
        ...initialAppProgress.progressByPathId,
        ...migratePaths(savedProgress.progressByTrackId),
      },
    };
  }

  return {
    ...initialAppProgress,
    progressByPathId: {
      [defaultProgressKey]: normalizeProgress(savedProgress),
    },
  };
};
