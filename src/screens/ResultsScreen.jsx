import { motion } from "framer-motion";
import { Sparkles, Trophy } from "lucide-react";
import StarRating from "../components/StarRating";

const FEEDBACK_URL = "https://forms.gle/Y4RE3SGALJJzw9bo6";

export default function ResultsScreen({
  level,
  score,
  maxScore,
  stars,
  previousBest,
  isNewBest,
  replayLevel,
  nextLevel,
  canAdvanceToNextLevel,
  goLevels,
}) {
  const improvement = score - previousBest;
  const hasPreviousBest = previousBest > 0;

  return (
    <div className="app-screen min-h-screen flex items-center justify-center p-4 py-8 text-white">
      
      <div className="app-panel w-full max-w-sm rounded-2xl overflow-hidden">

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
            <div className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-200/40 bg-cyan-200/15 px-3 py-1 text-sm font-bold text-white">
              <Sparkles size={16} aria-hidden="true" />
              New Best
            </div>
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
              {score}/{maxScore}
            </h2>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-3">
            <div className="app-inset-surface rounded-xl p-3 text-center">
              <p className="text-[11px] font-bold uppercase text-slate-500">
                XP This Run
              </p>

              <p className="mt-1 text-xl font-bold text-white">
                {score}
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
      </div>
    </div>
  );
}
