const unique = (values) => [...new Set(values.filter(Boolean))];

const getConceptStats = (conceptStatsByTopic, topic) =>
  conceptStatsByTopic[topic] ?? {
    review: 0,
    strong: 0,
  };

// Build the Review Hub model from completed levels and lifetime concept stats.
export const createReviewHubSummary = (levels, conceptStatsByTopic = {}) => {
  const completedLevels = levels.filter((level) => level.completed);
  const levelReviews = completedLevels.map((level) => {
    const summary = level.reviewSummary;
    const concepts = summary?.needsReview ?? [];
    const topics = summary?.reviewTopics ?? [];

    return {
      concepts,
      level,
      needsAttention:
        Boolean(summary?.replayRecommended) || concepts.length > 0,
      topics,
    };
  });
  const needsAttention = levelReviews.filter((review) => review.needsAttention);
  const goingWell = levelReviews.filter((review) => !review.needsAttention);
  const topicsToReview = unique(
    needsAttention.flatMap((review) => review.topics)
  );
  // Prioritize topics that repeatedly need review across completed levels.
  const targetedPractice = topicsToReview
    .map((topic) => {
      const stats = getConceptStats(conceptStatsByTopic, topic);
      const matchingLevels = needsAttention.filter((review) =>
        review.topics.includes(topic)
      );
      const concepts = unique(
        matchingLevels.flatMap((review) => {
          const results = review.level.reviewSummary?.conceptResults;
          return results
            ? results.filter((result) => result.topic === topic && result.status === "review").map((result) => result.concept)
            : review.concepts;
        })
      ).slice(0, 3);

      return {
        concepts,
        level: matchingLevels[0]?.level ?? null,
        reviewCount: stats.review ?? 0,
        strongCount: stats.strong ?? 0,
        topic,
      };
    })
    .sort(
      (a, b) =>
        b.reviewCount - a.reviewCount ||
        a.strongCount - b.strongCount ||
        a.topic.localeCompare(b.topic)
    )
    .slice(0, 4);
  const lifetimeRounds = Object.values(conceptStatsByTopic).reduce(
    (total, stats) => total + (stats.strong ?? 0) + (stats.review ?? 0),
    0
  );

  return {
    completedCount: completedLevels.length,
    goingWell,
    lifetimeRounds,
    needsAttention,
    strongTopics: unique(
      completedLevels.flatMap(
        (level) => level.reviewSummary?.strongTopics ?? []
      )
    ),
    targetedPractice,
    topicsToReview,
  };
};
