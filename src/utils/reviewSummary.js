const unique = (items) => [...new Set(items.filter(Boolean))];

export const getReviewStatus = (review) =>
  review.status === "strong" ? "strong" : "review";

export const createLevelReviewSummary = ({
  maxReviewItems = 3,
  maxStrongItems = 2,
  maxScore,
  roundReviews,
  score,
}) => {
  const percent = maxScore > 0 ? (score / maxScore) * 100 : 0;
  const conceptResults = roundReviews.map((review) => ({
    concept: review.concept,
    status: getReviewStatus(review),
    topic: review.topic ?? "General AI literacy",
  }));
  const strongConcepts = unique(
    conceptResults
      .filter((review) => review.status === "strong")
      .map((review) => review.concept)
  ).slice(0, maxStrongItems);
  const reviewConcepts = unique(
    conceptResults
      .filter((review) => review.status === "review")
      .map((review) => review.concept)
  ).slice(0, maxReviewItems);
  const reviewTopics = unique(
    conceptResults
      .filter((review) => review.status === "review")
      .map((review) => review.topic)
  ).slice(0, maxReviewItems);
  const strongTopics = unique(
    conceptResults
      .filter((review) => review.status === "strong")
      .map((review) => review.topic)
  ).slice(0, maxStrongItems);

  return {
    conceptResults,
    didWell:
      strongConcepts.length > 0
        ? strongConcepts
        : ["You completed the full lesson and practiced the core skill."],
    needsReview: reviewConcepts,
    reviewTopics,
    replayRecommended: percent < 85 || reviewConcepts.length > 0,
    strongTopics,
  };
};
