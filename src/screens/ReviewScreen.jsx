import { BookOpenCheck } from "lucide-react";

export default function ReviewScreen({
  level,
  goLevels,
  replayLevel,
}) {
  const reviewSummary = level?.reviewSummary;

  if (!level || !reviewSummary) {
    return (
      <div className="app-screen min-h-screen flex items-center justify-center p-4 py-8 text-white">
        <div className="app-panel w-full max-w-sm rounded-2xl p-5">
          <button
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
    <div className="app-screen min-h-screen flex items-center justify-center p-4 py-8 text-white">
      <div className="app-panel w-full max-w-md overflow-hidden rounded-2xl">
        <div className="app-mode-header p-5">
          <button
            onClick={goLevels}
            className="app-back-button mb-4"
          >
            &lt; Back
          </button>

          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
            <BookOpenCheck size={25} aria-hidden="true" />
          </div>

          <p className="text-xs font-bold uppercase text-cyan-100">
            Level Review
          </p>

          <h1 className="mt-1 text-2xl font-bold">
            {level.title}
          </h1>

          <p className="mt-2 text-white/70">
            Revisit the concepts from your latest completed run.
          </p>
        </div>

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
                Nothing urgent showed up in your latest run. Replay later
                if you want to improve your score.
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
              onClick={() => replayLevel(level)}
              className="app-button app-button-primary"
            >
              Replay Level
            </button>

            <button
              onClick={goLevels}
              className="app-button app-button-secondary"
            >
              Back to Levels
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
