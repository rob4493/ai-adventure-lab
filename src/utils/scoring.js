export const defaultStarThresholds = [
  {
    minPercent: 85,
    stars: 3,
  },
  {
    minPercent: 50,
    stars: 2,
  },
  {
    minPercent: 1,
    stars: 1,
  },
];

// Convert raw score into stars using percentage thresholds per level type.
export const getStarsFromScore = (
  score,
  maxScore,
  thresholds = defaultStarThresholds
) => {
  if (maxScore <= 0) return 0;

  const percent = (score / maxScore) * 100;

  return (
    thresholds.find((threshold) => percent >= threshold.minPercent)
      ?.stars ?? 0
  );
};

// Retry wins earn partial credit so trying again still matters.
export const getQuizRoundScore = (isCorrect, attempts, scoring) => {
  if (!isCorrect) return scoring.incorrectScore;

  return attempts === 0
    ? scoring.correctScore
    : scoring.retryCorrectScore;
};

// Turn selected block ids into full option objects for scoring and previews.
export const getSelectedOptions = (categories, selectedBlocks) =>
  categories
    .map((category) =>
      category.options.find(
        (option) => option.id === selectedBlocks[category.id]
      )
    )
    .filter(Boolean);

export const getPromptScore = (selectedOptions) =>
  selectedOptions.reduce(
    (score, option) => score + option.points,
    0
  );

export const getMaxPromptScore = (categories) =>
  categories.reduce(
    (score, category) =>
      score +
      Math.max(...category.options.map((option) => option.points)),
    0
  );
