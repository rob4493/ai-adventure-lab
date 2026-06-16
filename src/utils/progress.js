export const createInitialProgress = () => ({
  completedLevelIds: [],
  starsByLevelId: {},
  scoresByLevelId: {},
});

export const isLevelUnlocked = (levels, levelIndex, completedLevelIds) => {
  if (levelIndex === 0) return true;

  return completedLevelIds.includes(levels[levelIndex - 1].id);
};

export const getLevelsWithProgress = (levels, progress) =>
  levels.map((level, index) => ({
    ...level,
    unlocked: isLevelUnlocked(
      levels,
      index,
      progress.completedLevelIds
    ),
    stars: progress.starsByLevelId[level.id] ?? 0,
    score: progress.scoresByLevelId[level.id] ?? 0,
    completed: progress.completedLevelIds.includes(level.id),
  }));

export const getTotalXp = (levels, progress) =>
  levels.reduce(
    (total, level) => total + (progress.scoresByLevelId[level.id] ?? 0),
    0
  );

export const applyLevelResult = (progress, levelId, score, stars) => ({
  completedLevelIds: [
    ...new Set([
      ...progress.completedLevelIds,
      levelId,
    ]),
  ],
  starsByLevelId: {
    ...progress.starsByLevelId,
    [levelId]: Math.max(progress.starsByLevelId[levelId] ?? 0, stars),
  },
  scoresByLevelId: {
    ...progress.scoresByLevelId,
    [levelId]: Math.max(progress.scoresByLevelId[levelId] ?? 0, score),
  },
});
