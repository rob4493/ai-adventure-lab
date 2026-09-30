import BackgroundDetails from "../components/BackgroundDetails";
import { getTheme } from "../data/pathThemes";

export default function ReviewScreen({
  level,
  goLevels,
  replayLevel,
}) {
  const reviewSummary = level?.reviewSummary;
  const theme = getTheme(level?.theme);
  const elementary = level?.theme === "elementary";
  const screenClass = `app-screen min-h-screen flex items-center justify-center p-4 py-8 text-white ${elementary ? "elementary-theme" : ""}`;

  if (!level || !reviewSummary) {
    return (
      <div className={screenClass}>
        <div className="app-panel w-full max-w-sm rounded-2xl p-5">
          <button
            aria-label="Back to level select"
            onClick={goLevels}
            className="app-back-button mb-4"
          >
            &lt; Back
          </button>

          <h1 className="text-2xl font-bold">
            Review Not Available
          </h1>

          <p className="mt-2 text-slate-300">
            Complete this level once to generate a review summary.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={screenClass}>
      <div className="app-panel w-full max-w-md overflow-hidden rounded-2xl">
        <header className={`reviewHeader ${theme ? "pathHeader" : "app-mode-header"}`}>
          {theme && <BackgroundDetails path={theme.id} />}
          <div className="pathHeaderContent">
            <button aria-label={elementary ? "Back to missions" : "Back to level select"}
              onClick={goLevels} className="app-back-button min-h-11">&lt; Back</button>
            <p className={theme ? "pathBrand" : "app-kicker mt-2 text-xs font-bold uppercase"}>
              {elementary ? "AI Detective · Mission Review" : theme ? `${theme.title} · Level Review` : "Level Review"}
            </p>
            <h1 className="mt-2 text-2xl font-bold leading-tight">{level.title}</h1>
            <p className={theme ? "pathSkill" : "mt-2 text-sm text-cyan-100"}>
              {elementary ? "Look back at what you learned." : "Your latest completed run."}
            </p>
          </div>
        </header>

        <div className="p-5">
          <div className="app-surface mb-4 rounded-2xl p-4">
            <p className="text-xs font-bold uppercase text-emerald-300">
              You Did Well
            </p>

            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-300">
              {reviewSummary.didWell.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <div className="app-surface mb-4 rounded-2xl border border-amber-300/20 p-4">
            <p className="text-xs font-bold uppercase text-amber-200">
              Concepts To Review
            </p>

            {reviewSummary.reviewTopics?.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {reviewSummary.reviewTopics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-amber-300/25 bg-amber-300/10 px-2 py-1 text-[11px] font-bold text-amber-100"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}

            {reviewSummary.needsReview.length > 0 ? (
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-300">
                {reviewSummary.needsReview.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {level.completionOnly ? "You completed this introduction. Replay whenever you want a reminder." : "No concepts need another look from this run. Replay whenever you want more practice."}
              </p>
            )}
          </div>

          {reviewSummary.replayRecommended && (
            <div className="app-inset-surface mb-4 rounded-xl border border-cyan-300/20 p-3">
              <p className="text-sm font-bold text-cyan-200">
                Replay recommended
              </p>

              <p className="mt-1 text-sm leading-relaxed text-slate-300">
                This level has concepts worth strengthening before you
                move too far ahead.
              </p>
            </div>
          )}

          <div className="grid gap-3">
            <button
              aria-label={`Replay ${level.title}`}
              onClick={() => replayLevel(level)}
              className="app-button app-button-primary"
            >
              {elementary ? "Replay Mission" : "Replay Level"}
            </button>

            <button
              aria-label="Back to level select"
              onClick={goLevels}
              className="app-button app-button-secondary"
            >
              {elementary ? "Back to Missions" : "Back to Levels"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
