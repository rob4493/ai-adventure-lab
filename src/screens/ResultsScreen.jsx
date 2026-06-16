import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import StarRating from "../components/StarRating";

const FEEDBACK_URL = "https://forms.gle/Y4RE3SGALJJzw9bo6";

export default function ResultsScreen({
  level,
  score,
  maxScore,
  stars,
  replayLevel,
  nextLevel,
  canAdvanceToNextLevel,
  goLevels,
}) {
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
