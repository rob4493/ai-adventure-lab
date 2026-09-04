import {
  ArrowLeft,
  BookOpenCheck,
  CheckCircle2,
  RotateCcw,
  Target,
} from "lucide-react";

import { createReviewHubSummary } from "../utils/reviewHub";

export default function ReviewHubScreen({
  conceptStatsByTopic,
  goBack,
  learningPath,
  levels,
  replayLevel,
  track,
}) {
  // The hub is derived from saved level summaries rather than separate review state.
  const review = createReviewHubSummary(levels, conceptStatsByTopic);
  const pathTitle = learningPath?.id !== track.id
    ? `${track.title}: ${learningPath.title}`
    : track.title;

  return (
    <div className="app-screen min-h-screen p-4 py-8 text-white">
      <main className="mx-auto w-full max-w-3xl">
        <button
          aria-label="Back to previous screen"
          onClick={goBack}
          className="app-back-button mb-4"
        >
          <ArrowLeft className="inline-block" size={16} aria-hidden="true" />
          <span className="ml-1">Back</span>
        </button>

        <header className="app-panel mb-5 rounded-2xl p-5 sm:p-6">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
            <BookOpenCheck size={25} aria-hidden="true" />
          </div>
          <p className="app-kicker text-xs font-bold uppercase">Review Hub</p>
          <h1 className="mt-1 text-3xl font-bold">Your Learning Check-In</h1>
          <p className="mt-2 max-w-2xl leading-relaxed text-slate-300">
            See what is clicking, find concepts worth another look, and replay
            the levels that will help most in {pathTitle}.
          </p>

          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            <div className="app-inset-surface rounded-xl p-3">
              <p className="text-[11px] font-bold uppercase text-slate-500">Reviewed</p>
              <p className="mt-1 text-xl font-bold">{review.completedCount}</p>
            </div>
            <div className="app-inset-surface rounded-xl p-3">
              <p className="text-[11px] font-bold uppercase text-slate-500">Practice</p>
              <p className="mt-1 text-xl font-bold text-amber-200">{review.needsAttention.length}</p>
            </div>
            <div className="app-inset-surface rounded-xl p-3">
              <p className="text-[11px] font-bold uppercase text-slate-500">Answers</p>
              <p className="mt-1 text-xl font-bold text-cyan-100">{review.lifetimeRounds}</p>
            </div>
          </div>
        </header>

        {review.completedCount === 0 ? (
          <section className="app-panel rounded-2xl p-6 text-center">
            <Target className="mx-auto text-cyan-200" size={36} aria-hidden="true" />
            <h2 className="mt-3 text-xl font-bold">Your review hub is ready</h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-300">
              Complete your first level and this page will organize your
              strengths, missed concepts, and recommended replays.
            </p>
          </section>
        ) : (
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <section>
              {/* Targeted practice groups repeated misses by concept topic. */}
              {review.targetedPractice.length > 0 && (
                <div className="mb-5">
                  <div className="mb-3 flex items-center gap-2">
                    <Target className="text-cyan-200" size={20} aria-hidden="true" />
                    <h2 className="text-xl font-bold">Practice These Skills</h2>
                  </div>

                  <div className="space-y-3">
                    {review.targetedPractice.map(
                      ({
                        concepts,
                        level,
                        reviewCount,
                        strongCount,
                        topic,
                      }) => (
                        <article
                          key={topic}
                          className="app-panel rounded-2xl border border-cyan-300/20 p-4"
                        >
                          <div className="flex flex-wrap items-start justify-between gap-3">
                            <div>
                              <p className="text-xs font-bold uppercase text-cyan-200">
                                Practice Topic
                              </p>
                              <h3 className="mt-1 font-bold text-white">
                                {topic}
                              </h3>
                              <p className="mt-1 text-xs text-slate-400">
                                Review hits: {reviewCount} | Strong hits: {strongCount}
                              </p>
                            </div>

                            {level && (
                              <button
                                aria-label={`Practice ${topic} by replaying ${level.title}`}
                                onClick={() => replayLevel(level)}
                                className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-cyan-300/35 bg-cyan-300/10 px-3 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/20"
                              >
                                <RotateCcw size={15} aria-hidden="true" />
                                Practice
                              </button>
                            )}
                          </div>

                          {level && (
                            <p className="mt-3 text-sm leading-relaxed text-slate-300">
                              Best replay: <span className="font-bold text-white">{level.title}</span>
                            </p>
                          )}

                          {concepts.length > 0 && (
                            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-300">
                              {concepts.map((concept) => (
                                <li key={concept}>- {concept}</li>
                              ))}
                            </ul>
                          )}
                        </article>
                      )
                    )}
                  </div>
                </div>
              )}

              <div className="mb-3 flex items-center gap-2">
                <Target className="text-amber-200" size={20} aria-hidden="true" />
                <h2 className="text-xl font-bold">Replay These Levels</h2>
              </div>

              {review.needsAttention.length > 0 ? (
                <div className="space-y-3">
                  {review.needsAttention.map(({ concepts, level, topics }) => (
                    <article key={level.id} className="app-surface rounded-2xl border border-amber-300/20 p-4">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="font-bold">{level.title}</h3>
                          <p className="mt-1 text-xs text-slate-400">{level.score} XP earned</p>
                        </div>
                        <button
                          aria-label={`Replay ${level.title}`}
                          onClick={() => replayLevel(level)}
                          className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-cyan-300/35 bg-cyan-300/10 px-3 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/20"
                        >
                          <RotateCcw size={15} aria-hidden="true" />
                          Replay
                        </button>
                      </div>

                      {topics.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {topics.map((topic) => (
                            <span key={topic} className="rounded-full border border-amber-300/25 bg-amber-300/10 px-2 py-1 text-[11px] font-bold text-amber-100">
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}

                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-300">
                        {concepts.slice(0, 3).map((concept) => (
                          <li key={concept}>- {concept}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="app-surface rounded-2xl border border-emerald-300/20 p-5">
                  <p className="font-bold text-emerald-200">Nothing urgent to review</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">
                    Your latest completed runs did not flag any weak concepts.
                  </p>
                </div>
              )}
            </section>

            <aside>
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 className="text-emerald-300" size={20} aria-hidden="true" />
                <h2 className="text-xl font-bold">Going Well</h2>
              </div>

              <div className="app-panel rounded-2xl p-4">
                {review.strongTopics.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {review.strongTopics.map((topic) => (
                      <span key={topic} className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 text-xs font-bold text-emerald-100">
                        {topic}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm leading-relaxed text-slate-300">
                    Strong concepts will appear here as you answer rounds
                    correctly on the first try.
                  </p>
                )}

                {review.goingWell.length > 0 && (
                  <div className="mt-4 border-t border-slate-700/70 pt-4">
                    <p className="text-xs font-bold uppercase text-slate-500">Strong Latest Runs</p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {review.goingWell.map(({ level }) => (
                        <li key={level.id} className="flex items-center gap-2">
                          <CheckCircle2 className="shrink-0 text-emerald-300" size={15} aria-hidden="true" />
                          {level.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}
