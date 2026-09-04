// Decide the dashboard's single best next action from progress and concept history.
export const createDashboardGuidance = (
  levels,
  conceptStatsByTopic = {}
) => {
  const completedLevels = levels.filter((level) => level.completed);
  const nextLevel = levels.find(
    (level) => level.unlocked && !level.completed
  );
  // A topic becomes weak when review hits outnumber strong first-try hits.
  const weakTopic = Object.entries(conceptStatsByTopic)
    .map(([topic, stats]) => ({
      review: stats.review ?? 0,
      strong: stats.strong ?? 0,
      topic,
    }))
    .filter((stats) => stats.review > stats.strong)
    .sort((a, b) => b.review - a.review || a.strong - b.strong)[0];
  const lowScoreLevel = completedLevels
    .filter((level) => (level.stars ?? 0) < 3)
    .sort(
      (a, b) =>
        (a.stars ?? 0) - (b.stars ?? 0) ||
        (a.score ?? 0) - (b.score ?? 0)
    )[0];

  if (completedLevels.length === 0 && nextLevel) {
    return {
      action: "start-level",
      buttonLabel: "Start First Level",
      level: nextLevel,
      title: "Start your first challenge",
      message:
        "Begin with the first unlocked level so the app can start building your review recommendations.",
    };
  }

  if (weakTopic) {
    return {
      action: "review-hub",
      buttonLabel: "Open Review Hub",
      title: `Practice ${weakTopic.topic}`,
      message:
        "Your recent answers show this concept could use another look. The Review Hub will point you to the best replay.",
      topic: weakTopic.topic,
    };
  }

  if (nextLevel) {
    return {
      action: "start-level",
      buttonLabel: "Continue Learning",
      level: nextLevel,
      title: `Continue with ${nextLevel.title}`,
      message:
        "Your next unlocked level is ready. Keep going while the earlier ideas are fresh.",
    };
  }

  if (lowScoreLevel) {
    return {
      action: "start-level",
      buttonLabel: "Replay Level",
      level: lowScoreLevel,
      title: `Replay ${lowScoreLevel.title}`,
      message:
        "You finished the path. Replaying a lower-star level is the best way to raise your score.",
    };
  }

  return {
    action: "review-hub",
    buttonLabel: "Open Review Hub",
    title: "Review your strengths",
    message:
      "You are caught up on this path. Use the Review Hub to see what is going well and what to revisit later.",
  };
};
