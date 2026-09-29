export const createInitialProgress = () => ({
  practiceByTopic: {},
  conceptStatsByTopic: {},
  completedLevelIds: [],
  reviewSummariesByLevelId: {},
  starsByLevelId: {},
  scoresByLevelId: {},
});

// Convert a level review into counts the Review Hub can aggregate over time.
export const getConceptStats = (reviewSummary) =>
  (reviewSummary?.conceptResults ?? []).reduce((stats, result) => {
    const topic = result.topic ?? "General AI literacy";
    const currentStats = stats[topic] ?? {
      review: 0,
      strong: 0,
    };
    const status = result.status === "strong" ? "strong" : "review";

    return {
      ...stats,
      [topic]: {
        ...currentStats,
        [status]: currentStats[status] + 1,
      },
    };
  }, {});

// Keep concept history additive so replays can reveal persistent weak spots.
export const mergeConceptStats = (currentStats, nextStats) =>
  Object.entries(nextStats).reduce(
    (mergedStats, [topic, stats]) => {
      const existingStats = mergedStats[topic] ?? {
        review: 0,
        strong: 0,
      };

      return {
        ...mergedStats,
        [topic]: {
          review: existingStats.review + (stats.review ?? 0),
          strong: existingStats.strong + (stats.strong ?? 0),
        },
      };
    },
    {
      ...(currentStats ?? {}),
    }
  );

export const isLevelUnlocked = (levels, levelIndex, completedLevelIds) => {
  if (levelIndex === 0) return true;

  return completedLevelIds.includes(levels[levelIndex - 1].id);
};

const getUniqueValues = (values) => [...new Set(values.filter(Boolean))];

// Completed older levels may not have saved review details, so build a useful fallback.
export const createFallbackReviewSummary = (level) => {
  const rounds = level.content?.rounds ?? [];
  const conceptResults = rounds.map((round) => ({
    concept:
      round.concept ??
      level.takeaway ??
      `Review the core skill: ${level.skill}.`,
    status: "review",
    topic: round.topic ?? level.skill ?? "General AI literacy",
  }));

  const reviewTopics = getUniqueValues(
    conceptResults.map((result) => result.topic)
  ).slice(0, 3);
  const needsReview = getUniqueValues(
    conceptResults.map((result) => result.concept)
  ).slice(0, 3);

  return {
    conceptResults,
    didWell: [
      level.takeaway ??
        `You completed this level and practiced ${level.skill}.`,
    ],
    needsReview:
      needsReview.length > 0
        ? needsReview
        : [`Replay this level to generate a personalized review.`],
    reviewTopics:
      reviewTopics.length > 0
        ? reviewTopics
        : [level.skill ?? "General AI literacy"],
    strongTopics: [],
    replayRecommended: true,
  };
};

// Merge static level data with the current player state for rendering.
export const getLevelsWithProgress = (levels, progress) =>
  levels.map((level, index) => ({
    ...level,
    unlocked: isLevelUnlocked(
      levels,
      index,
      progress.completedLevelIds
    ),
    reviewSummary:
      progress.reviewSummariesByLevelId[level.id] ??
      (progress.completedLevelIds.includes(level.id)
        ? createFallbackReviewSummary(level)
        : null),
    stars: progress.starsByLevelId[level.id] ?? 0,
    score: progress.scoresByLevelId[level.id] ?? 0,
    completed: progress.completedLevelIds.includes(level.id),
  }));

export const getTotalXp = (levels, progress) =>
  levels.reduce(
    (total, level) => total + (progress.scoresByLevelId[level.id] ?? 0),
    0
  );

// Store best scores while preserving review details from the latest completed run.
export const applyLevelResult = (
  progress,
  levelId,
  score,
  stars,
  reviewSummary = null
) => ({
  ...progress,
  completedLevelIds: [
    ...new Set([
      ...progress.completedLevelIds,
      levelId,
    ]),
  ],
  conceptStatsByTopic: mergeConceptStats(
    progress.conceptStatsByTopic ?? {},
    getConceptStats(reviewSummary)
  ),
  reviewSummariesByLevelId: {
    ...(progress.reviewSummariesByLevelId ?? {}),
    ...(reviewSummary ? { [levelId]: reviewSummary } : {}),
  },
  starsByLevelId: {
    ...(progress.starsByLevelId ?? {}),
    [levelId]: Math.max(
      progress.starsByLevelId?.[levelId] ?? 0,
      stars
    ),
  },
  scoresByLevelId: {
    ...(progress.scoresByLevelId ?? {}),
    [levelId]: Math.max(
      progress.scoresByLevelId?.[levelId] ?? 0,
      score
    ),
  },
});
