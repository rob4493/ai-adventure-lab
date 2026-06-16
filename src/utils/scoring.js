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

export const getQuizRoundScore = (isCorrect, attempts, scoring) => {
  if (!isCorrect) return scoring.incorrectScore;

  return attempts === 0
    ? scoring.correctScore
    : scoring.retryCorrectScore;
};

export const getMatchedCriteria = (prompt, criteria) => {
  const normalizedPrompt = prompt.toLowerCase();

  return criteria.filter((criterion) =>
    normalizedPrompt.includes(criterion.phrase.toLowerCase())
  );
};

export const getCriteriaScore = (criteria) =>
  criteria.reduce(
    (total, criterion) => total + criterion.points,
    0
  );

export const getSelectedOptions = (categories, selectedBlocks) =>
  categories
    .map((category) =>
      category.options.find(
        (option) => option.id === selectedBlocks[category.id]
      )
    )
    .filter(Boolean);

export const getPromptBuilderRoundScore = (selectedOptions) =>
  selectedOptions.reduce(
    (score, option) => score + option.points,
    0
  );

export const getPromptBuilderMaxRoundScore = (categories) =>
  categories.reduce(
    (score, category) =>
      score +
      Math.max(...category.options.map((option) => option.points)),
    0
  );
