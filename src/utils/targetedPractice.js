import { getConceptStats, mergeConceptStats } from "./progress.js";

// Reuse completed lessons, putting missed concepts first without unlocking new content.
export const createPracticeRounds = (levels, topic) => levels
  .filter((level) => level.completed && level.unlocked && level.type !== "elementaryIntro")
  .flatMap((level) => (level.content?.rounds ?? [])
    .filter((round) => (round.topic ?? level.skill) === topic)
    .map((round) => ({
      level,
      round,
      missed: level.reviewSummary?.conceptResults?.some((result) =>
        result.topic === topic && result.concept === round.concept && result.status === "review"),
    })))
  .sort((a, b) => Number(Boolean(b.missed)) - Number(Boolean(a.missed)))
  .slice(0, 3)
  .map(({ level, round }) => ({
    ...level,
    title: `Practice: ${topic}`,
    isPractice: true,
    content: { ...level.content, guidedFirstRound: false, rounds: [round] },
  }));

// Practice updates evidence only; full-lesson scores and unlocks remain untouched.
export const applyPracticeResult = (progress, topic, conceptResults) => ({
  ...progress,
  conceptStatsByTopic: mergeConceptStats(progress.conceptStatsByTopic,
    getConceptStats({ conceptResults })),
  practiceByTopic: {
    ...progress.practiceByTopic,
    [topic]: {
      total: conceptResults.length,
      strong: conceptResults.filter((result) => result.status === "strong").length,
    },
  },
});
