import LevelCard from "../components/LevelCard";
import { SearchCheck } from "lucide-react";
export default function LevelSelect({
  learningPath,
  levels,
  reviewLevel,
  startLevel,
  track,
  goToHome,
  goToReviewHub,
}) {
  const worldDetails = learningPath.worlds ?? track.worlds ?? {};
  const isElementaryPath = learningPath.id === "elementary";
  // Group levels under their world headers while preserving the level order inside each world.
  const worlds = levels.reduce((groups, level) => {
    const worldLevels = groups[level.world] ?? [];

    return {
      ...groups,
      [level.world]: [...worldLevels, level],
    };
  }, {});

  return (
    <div className={`app-screen min-h-screen p-4 py-6 text-white ${
      isElementaryPath ? "elementary-theme" : ""
    }`}>
      
      <div className="max-w-md mx-auto">
        
        <button
          aria-label="Back to learning dashboard"
          onClick={goToHome}
          className="app-back-button mb-4"
        >
          &lt; Back
        </button>

        <div className="app-panel mb-5 rounded-2xl p-5">
          <p className="app-kicker mb-2 flex items-center gap-2 text-xs font-bold uppercase">
            {isElementaryPath && <SearchCheck size={16} aria-hidden="true" />}
            {isElementaryPath ? "AI Detective Path" : "Learning Path"}
          </p>

          <h1 className="text-3xl font-bold mb-2 leading-tight">
            {track.title}
            {learningPath?.id !== track.id ? `: ${learningPath.title}` : ""}
          </h1>

          <p className="text-slate-300 leading-relaxed">
            {learningPath.description}
          </p>

          <p className="mt-3 text-sm text-slate-400">
            {isElementaryPath
              ? "Complete one mission at a time. Guided rounds and clues are here whenever you need them."
              : "Progress unlocks one challenge at a time. Replay completed levels to improve your best XP and stars."}
          </p>

          <button
            aria-label="Open review hub"
            onClick={goToReviewHub}
            className="mt-4 w-full rounded-xl border border-amber-300/30 bg-amber-300/10 px-4 py-3 text-sm font-bold text-amber-100 transition hover:bg-amber-300/20"
          >
            Open Review Hub
          </button>
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

              <div className="space-y-3">
                {worldLevels.map((level) => (
                  <LevelCard
                    key={level.id}
                    level={level}
                    reviewLevel={reviewLevel}
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
