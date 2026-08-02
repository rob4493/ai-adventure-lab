import { useMemo, useState } from "react";

import HomeScreen from "./screens/HomeScreen";
import LevelSelect from "./screens/LevelSelect";
import GameplayScreen from "./screens/GameplayScreen";
import ResultsScreen from "./screens/ResultsScreen";
import ReviewScreen from "./screens/ReviewScreen";
import SettingsScreen from "./screens/SettingsScreen";

import audienceTracks, {
  DEFAULT_TRACK_ID,
  DEFAULT_STUDENT_GRADE_BAND_ID,
  getDefaultPathIdForTrack,
  getProgressKey,
  getTrackById,
  getTrackPathById,
} from "./data/tracks";
import {
  applyLevelResult,
  createInitialProgress,
  getLevelsWithProgress,
  getTotalXp,
} from "./utils/progress";

const STORAGE_KEY = "ai-learning-progress";
const EMPTY_LEVELS = [];
const DEFAULT_PROGRESS_KEY = getProgressKey(
  DEFAULT_TRACK_ID,
  DEFAULT_STUDENT_GRADE_BAND_ID
);

const createInitialAppProgress = () => ({
  activePathIdByTrackId: {
    [DEFAULT_TRACK_ID]: DEFAULT_STUDENT_GRADE_BAND_ID,
  },
  activeTrackId: DEFAULT_TRACK_ID,
  progressByPathId: {
    [DEFAULT_PROGRESS_KEY]: createInitialProgress(),
  },
});

const normalizeTrackProgress = (progress = {}) => ({
  ...createInitialProgress(),
  ...(progress ?? {}),
});

const normalizeSavedProgress = (savedProgress) => {
  const initialAppProgress = createInitialAppProgress();

  if (savedProgress?.progressByPathId) {
    const activeTrack = getTrackById(savedProgress.activeTrackId);

    return {
      activePathIdByTrackId: {
        ...initialAppProgress.activePathIdByTrackId,
        ...(savedProgress.activePathIdByTrackId ?? {}),
      },
      activeTrackId: activeTrack?.id ?? DEFAULT_TRACK_ID,
      progressByPathId: {
        ...initialAppProgress.progressByPathId,
        ...Object.fromEntries(
          Object.entries(savedProgress.progressByPathId).map(
            ([pathId, pathProgress]) => [
              pathId,
              normalizeTrackProgress(pathProgress),
            ]
          )
        ),
      },
    };
  }

  if (savedProgress?.progressByTrackId) {
    const activeTrack = getTrackById(savedProgress.activeTrackId);
    const legacyStudentProgress =
      savedProgress.progressByTrackId[DEFAULT_TRACK_ID];

    return {
      activePathIdByTrackId: {
        ...initialAppProgress.activePathIdByTrackId,
      },
      activeTrackId: activeTrack?.id ?? DEFAULT_TRACK_ID,
      progressByPathId: {
        ...initialAppProgress.progressByPathId,
        ...(legacyStudentProgress
          ? {
              [DEFAULT_PROGRESS_KEY]:
                normalizeTrackProgress(legacyStudentProgress),
            }
          : {}),
      },
    };
  }

  return {
    ...initialAppProgress,
    progressByPathId: {
      [DEFAULT_PROGRESS_KEY]: normalizeTrackProgress(savedProgress),
    },
  };
};

const loadProgress = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return createInitialAppProgress();

    return normalizeSavedProgress(JSON.parse(saved));
  } catch {
    return createInitialAppProgress();
  }
};

const saveProgress = (progress) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export default function App() {
  const [screen, setScreen] = useState("home");

  const [selectedLevel, setSelectedLevel] = useState(null);

  const [appProgress, setAppProgress] = useState(loadProgress);

  const [lastScore, setLastScore] = useState(0);
  const [lastMaxScore, setLastMaxScore] = useState(40);
  const [lastStars, setLastStars] = useState(0);
  const [lastPreviousBest, setLastPreviousBest] = useState(0);
  const [lastIsNewBest, setLastIsNewBest] = useState(false);
  const [lastWorldSummary, setLastWorldSummary] = useState(null);
  const [lastReviewSummary, setLastReviewSummary] = useState(null);

  const activeTrack = useMemo(
    () => getTrackById(appProgress.activeTrackId),
    [appProgress.activeTrackId]
  );
  const activePathId =
    appProgress.activePathIdByTrackId?.[activeTrack.id] ??
    getDefaultPathIdForTrack(activeTrack);
  const activePath = getTrackPathById(activeTrack, activePathId);
  const progressKey = getProgressKey(
    activeTrack.id,
    activeTrack.gradeBands ? activePath?.id : null
  );
  const activeLevels = activePath?.levels ?? EMPTY_LEVELS;
  const activeWorldDetails = activePath?.worlds ?? activeTrack.worlds;
  const progress =
    appProgress.progressByPathId[progressKey] ??
    createInitialProgress();

  const completedCount = activeLevels.filter((level) =>
    progress.completedLevelIds.includes(level.id)
  ).length;

  const levelsWithProgress = useMemo(
    () =>
      getLevelsWithProgress(activeLevels, progress),
    [activeLevels, progress]
  );

  const totalXp = useMemo(
    () => getTotalXp(activeLevels, progress),
    [activeLevels, progress]
  );

  const saveAppProgress = (nextAppProgress) => {
    saveProgress(nextAppProgress);
    setAppProgress(nextAppProgress);
  };

  const saveTrackProgress = (nextTrackProgress) => {
    saveAppProgress({
      ...appProgress,
      progressByPathId: {
        ...appProgress.progressByPathId,
        [progressKey]: nextTrackProgress,
      },
    });
  };

  const goToLevels = () => {
    setScreen("levels");
  };

  const goToSettings = () => {
    setScreen("settings");
  };

  const selectTrack = (trackId) => {
    const nextTrack = getTrackById(trackId);

    if (!nextTrack?.isAvailable) return;

    saveAppProgress({
      ...appProgress,
      activeTrackId: nextTrack.id,
      activePathIdByTrackId: {
        ...appProgress.activePathIdByTrackId,
        [nextTrack.id]: getDefaultPathIdForTrack(nextTrack),
      },
      progressByPathId: {
        ...appProgress.progressByPathId,
        [getProgressKey(nextTrack.id, getDefaultPathIdForTrack(nextTrack))]:
          appProgress.progressByPathId[
            getProgressKey(nextTrack.id, getDefaultPathIdForTrack(nextTrack))
          ] ??
          createInitialProgress(),
      },
    });
    setSelectedLevel(null);
    setLastWorldSummary(null);
    setLastReviewSummary(null);
  };

  const selectTrackPath = (trackId, pathId) => {
    const track = getTrackById(trackId);
    const path = getTrackPathById(track, pathId);

    if (!track?.isAvailable || !path?.isAvailable) return;

    const nextProgressKey = getProgressKey(track.id, path.id);

    saveAppProgress({
      ...appProgress,
      activePathIdByTrackId: {
        ...appProgress.activePathIdByTrackId,
        [track.id]: path.id,
      },
      activeTrackId: track.id,
      progressByPathId: {
        ...appProgress.progressByPathId,
        [nextProgressKey]:
          appProgress.progressByPathId[nextProgressKey] ??
          createInitialProgress(),
      },
    });
    setSelectedLevel(null);
    setLastWorldSummary(null);
    setLastReviewSummary(null);
  };

  const startLevel = (level) => {
    if (!level.unlocked) return;

    setSelectedLevel(level);
    setScreen("gameplay");
  };

  const reviewLevel = (level) => {
    if (!level.completed || !level.reviewSummary) return;

    setSelectedLevel(level);
    setScreen("review");
  };

  const finishLevel = (
    score,
    stars,
    maxScore = 40,
    reviewSummary = null
  ) => {
    if (!selectedLevel) return;

    const previousBest =
      progress.scoresByLevelId[selectedLevel.id] ?? 0;
    const isNewBest = score > previousBest;

    setLastScore(score);
    setLastMaxScore(maxScore);
    setLastStars(stars);
    setLastPreviousBest(previousBest);
    setLastIsNewBest(isNewBest);
    setLastReviewSummary(reviewSummary);

    const nextProgress = applyLevelResult(
      progress,
      selectedLevel.id,
      score,
      stars,
      reviewSummary
    );
    const worldLevels = activeLevels.filter(
      (level) => level.world === selectedLevel.world
    );
    const isFinalWorldLevel =
      worldLevels[worldLevels.length - 1]?.id === selectedLevel.id;
    const completedWorld =
      isFinalWorldLevel &&
      worldLevels.every((level) =>
        nextProgress.completedLevelIds.includes(level.id)
      );

    setLastWorldSummary(
      completedWorld
        ? {
            ...activeWorldDetails[selectedLevel.world],
            levelCount: worldLevels.length,
          }
        : null
    );

    saveTrackProgress(nextProgress);

    setScreen("results");
  };

  const nextPlayableLevel = useMemo(() => {
    if (!selectedLevel) return null;

    const currentIndex = levelsWithProgress.findIndex(
      (level) => level.id === selectedLevel.id
    );

    return levelsWithProgress[currentIndex + 1] ?? null;
  }, [levelsWithProgress, selectedLevel]);

  const canAdvanceToNextLevel = Boolean(
    nextPlayableLevel?.unlocked
  );

  const replayLevel = () => {
    setScreen("gameplay");
  };

  const replaySpecificLevel = (level) => {
    if (!level.unlocked) return;

    setSelectedLevel(level);
    setScreen("gameplay");
  };

  const nextLevel = () => {
    if (canAdvanceToNextLevel) {
      setSelectedLevel(nextPlayableLevel);
      setScreen("gameplay");
    } else {
      setScreen("levels");
    }
  };

  const goHome = () => {
    setScreen("home");
  };

  const resetProgress = () => {
    const nextProgress = createInitialProgress();

    saveTrackProgress(nextProgress);
    setSelectedLevel(null);
    setLastScore(0);
    setLastMaxScore(40);
    setLastStars(0);
    setLastPreviousBest(0);
    setLastIsNewBest(false);
    setLastWorldSummary(null);
    setLastReviewSummary(null);
    setScreen("home");
  };

  return (
    <>
      {screen === "home" && (
        <HomeScreen
          goToLevels={goToLevels}
          activeTrack={activeTrack}
          activePath={activePath}
          tracks={audienceTracks}
          selectTrack={selectTrack}
          selectTrackPath={selectTrackPath}
          totalXp={totalXp}
          completedCount={completedCount}
          levelCount={activeLevels.length}
          goToSettings={goToSettings}
        />
      )}

      {screen === "settings" && (
        <SettingsScreen
          completedCount={completedCount}
          activeTrack={activeTrack}
          activePath={activePath}
          goHome={goHome}
          levelCount={activeLevels.length}
          resetProgress={resetProgress}
          totalXp={totalXp}
        />
      )}

      {screen === "levels" && (
        <LevelSelect
          levels={levelsWithProgress}
          track={activeTrack}
          learningPath={activePath}
          startLevel={startLevel}
          reviewLevel={reviewLevel}
          goHome={goHome}
        />
      )}

      {screen === "review" && (
        <ReviewScreen
          level={selectedLevel}
          goLevels={() => setScreen("levels")}
          replayLevel={replaySpecificLevel}
        />
      )}

      {screen === "gameplay" && (
        <GameplayScreen
          level={selectedLevel}
          goBack={() => setScreen("levels")}
          finishLevel={finishLevel}
        />
      )}

      {screen === "results" && (
        <ResultsScreen
          level={selectedLevel}
          score={lastScore}
          maxScore={lastMaxScore}
          stars={lastStars}
          previousBest={lastPreviousBest}
          isNewBest={lastIsNewBest}
          worldSummary={lastWorldSummary}
          reviewSummary={lastReviewSummary}
          replayLevel={replayLevel}
          nextLevel={nextLevel}
          canAdvanceToNextLevel={canAdvanceToNextLevel}
          goLevels={() => setScreen("levels")}
        />
      )}
    </>
  );
}
