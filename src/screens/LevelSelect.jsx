import LevelCard from "../components/LevelCard";

const worldDetails = {
  "World 1": {
    title: "World 1: AI Basics",
    description: "Learn to spot AI patterns, factual slips, and reasoning style.",
  },
  "World 2": {
    title: "World 2: Prompt Skills",
    description: "Practice clearer prompts, stronger structure, and better follow-up questions.",
  },
  "World 3": {
    title: "World 3: Trust & Safety",
    description: "Build judgment around sources, privacy, and fairness.",
  },
};

export default function LevelSelect({
  levels,
  startLevel,
  goHome,
}) {
  const worlds = levels.reduce((groups, level) => {
    const worldLevels = groups[level.world] ?? [];

    return {
      ...groups,
      [level.world]: [...worldLevels, level],
    };
  }, {});

  return (
    <div className="app-screen min-h-screen p-4 py-6 text-white">
      
      <div className="max-w-md mx-auto">
        
        <button
          onClick={goHome}
          className="app-back-button mb-4"
        >
          &lt; Back
        </button>

        <div className="app-panel mb-5 rounded-2xl p-5">
          <p className="app-kicker mb-2 text-xs font-bold uppercase">
            Learning Path
          </p>

          <h1 className="text-3xl font-bold mb-2 leading-tight">
            Select Level
          </h1>

          <p className="text-slate-300 leading-relaxed">
            Progress unlocks one challenge at a time. Replay completed
            levels to improve your best XP and stars.
          </p>
        </div>

        <div className="space-y-6">
          {Object.entries(worlds).map(([world, worldLevels]) => (
            <section key={world}>
              <div className="mb-3">
                <h2 className="app-human-kicker text-sm font-bold uppercase">
                  {worldDetails[world]?.title ?? world}
                </h2>

                {worldDetails[world]?.description && (
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">
                    {worldDetails[world].description}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                {worldLevels.map((level) => (
                  <LevelCard
                    key={level.id}
                    level={level}
                    startLevel={startLevel}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
