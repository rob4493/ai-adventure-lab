// Counts describe completed attempts, not mastery or a prediction of ability.
export const createSkillProgress = (levels, progress) => {
  const topics = new Map();
  for (const level of levels) {
    if (level.type === "elementaryIntro") continue;
    for (const round of level.content?.rounds ?? []) {
      const topic = round.topic ?? level.skill;
      if (topic && !topics.has(topic)) topics.set(topic, round.concept);
    }
  }
  const skills = [...topics].map(([topic, takeaway]) => {
    const stats = progress.conceptStatsByTopic?.[topic] ?? {};
    const strong = stats.strong ?? 0;
    const review = stats.review ?? 0;
    const attempts = strong + review;
    const practice = progress.practiceByTopic?.[topic];
    return {
      topic, takeaway, strong, review, attempts, practice,
      status: !attempts ? "Not started" : strong === 0 ? "Building understanding" : "Showing strengths",
    };
  });
  return {
    skills: skills.sort((a, b) => Number(b.attempts > 0) - Number(a.attempts > 0) || b.review - a.review || a.topic.localeCompare(b.topic)),
    practiced: skills.filter((skill) => skill.attempts > 0).length,
    total: skills.length,
    strong: skills.reduce((sum, skill) => sum + skill.strong, 0),
    attempts: skills.reduce((sum, skill) => sum + skill.attempts, 0),
  };
};
