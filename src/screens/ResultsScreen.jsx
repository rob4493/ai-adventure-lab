import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles, Trophy } from "lucide-react";
import StarRating from "../components/StarRating";

const FEEDBACK_URL = "https://forms.gle/Y4RE3SGALJJzw9bo6";

function CountUp({ value, duration = 850 }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let animationFrame;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;

      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrame);
  }, [duration, value]);

  return displayValue;
}

export default function ResultsScreen({
  level,
  score,
  maxScore,
  stars,
  previousBest,
  isNewBest,
  worldSummary,
  reviewSummary,
  replayLevel,
  nextLevel,
  canAdvanceToNextLevel,
  goLevels,
}) {
  const improvement = score - previousBest;
  const hasPreviousBest = previousBest > 0;

  return (
    <div className="app-screen min-h-screen flex items-center justify-center p-4 py-8 text-white">
      
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
        className="app-panel w-full max-w-sm rounded-2xl overflow-hidden"
      >

        <div className="app-mode-header p-6 text-center">

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Trophy size={64} className="mx-auto mb-4 text-yellow-300" />
          </motion.div>

          <h1 className="text-3xl font-bold mb-2">
            Level Complete!
          </h1>

          <p className="text-white/75">
            {level?.title}
          </p>

          {isNewBest && (
            <motion.div
              initial={{ scale: 0.88, boxShadow: "0 0 0 rgba(103, 232, 249, 0)" }}
              animate={{
                scale: [0.88, 1.08, 1],
                boxShadow: [
                  "0 0 0 rgba(103, 232, 249, 0)",
                  "0 0 28px rgba(251, 191, 36, 0.45)",
                  "0 0 14px rgba(103, 232, 249, 0.18)",
                ],
              }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-200/40 bg-cyan-200/15 px-3 py-1 text-sm font-bold text-white"
            >
              <Sparkles size={16} aria-hidden="true" />
              New Best
            </motion.div>
          )}
        </div>

        <div className="p-6">

          <div className="mb-6">
            <StarRating stars={stars} size="large" animated />
          </div>

          <div className="app-surface rounded-2xl p-4 mb-6 text-center">
            <p className="text-sm text-slate-400 mb-1">
              Final Score
            </p>

            <h2 className="text-4xl font-bold">
              <CountUp value={score} />/{maxScore}
            </h2>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-3">
            <div className="app-inset-surface rounded-xl p-3 text-center">
              <p className="text-[11px] font-bold uppercase text-slate-500">
                XP This Run
              </p>

              <p className="mt-1 text-xl font-bold text-white">
                <CountUp value={score} />
              </p>
            </div>

            <div className="app-inset-surface rounded-xl p-3 text-center">
              <p className="text-[11px] font-bold uppercase text-slate-500">
                Previous Best
              </p>

              <p className="mt-1 text-xl font-bold text-white">
                {hasPreviousBest ? previousBest : "New"}
              </p>
            </div>
          </div>

          <div className="app-surface mb-6 rounded-2xl p-4">
            <p className="app-kicker mb-2 text-xs font-bold uppercase">
              What You Practiced
            </p>

            <h2 className="mb-2 text-lg font-bold text-white">
              {level?.skill}
            </h2>

            <p className="text-sm leading-relaxed text-slate-300">
              {level?.takeaway}
            </p>

            <p className="mt-3 text-sm font-bold text-amber-200">
              {isNewBest
                ? hasPreviousBest
                  ? `Improved by ${improvement} XP.`
                  : "First completion recorded."
                : "Replay this level to improve your best score."}
            </p>
          </div>

          {worldSummary && (
            <div className="app-surface mb-6 rounded-2xl border border-emerald-300/25 p-4">
              <p className="text-xs font-bold uppercase text-emerald-300">
                World Complete
              </p>

              <h2 className="mt-1 text-lg font-bold text-white">
                {worldSummary.summaryTitle}
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {worldSummary.summary}
              </p>

              <p className="mt-3 text-sm font-bold text-cyan-200">
                {worldSummary.nextFocus}
              </p>
            </div>
          )}

          {reviewSummary && (
            <div className="app-surface mb-6 rounded-2xl p-4">
              <p className="app-kicker mb-3 text-xs font-bold uppercase">
                Review Summary
              </p>

              <div className="grid gap-3">
                <div className="app-inset-surface rounded-xl border border-emerald-300/20 p-3">
                  <p className="text-xs font-bold uppercase text-emerald-300">
                    You Did Well
                  </p>

                  <ul className="mt-2 space-y-2 text-sm leading-relaxed text-slate-300">
                    {reviewSummary.didWell.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="app-inset-surface rounded-xl border border-amber-300/20 p-3">
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
                    <ul className="mt-2 space-y-2 text-sm leading-relaxed text-slate-300">
                      {reviewSummary.needsReview.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      Nothing urgent. Replay later to sharpen your score.
                    </p>
                  )}
                </div>
              </div>

              {reviewSummary.replayRecommended && (
                <p className="mt-3 text-sm font-bold text-cyan-200">
                  Replay this level if you want to strengthen the review
                  concepts before moving on.
                </p>
              )}
            </div>
          )}

          <div className="space-y-3">

            {canAdvanceToNextLevel && (
              <button
                onClick={nextLevel}
                className="app-button app-button-primary"
              >
                Next Level -&gt;
              </button>
            )}

            <button
              onClick={replayLevel}
              className="app-button app-button-secondary"
            >
              Replay Level
            </button>

            <button
              onClick={goLevels}
              className="app-button app-button-ghost"
            >
              Back to Levels
            </button>

            <a
              href={FEEDBACK_URL}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-sm font-bold text-cyan-200 transition hover:border-cyan-300/50 hover:bg-cyan-400/15 hover:text-white"
            >
              Send Feedback
            </a>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
