import { motion } from "framer-motion";
import { CheckCircle, Lock } from "lucide-react";
import StarRating from "./StarRating";

export default function LevelCard({ level, startLevel }) {
  if (level.completed) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
        className="app-surface rounded-2xl border border-emerald-300/20 p-3"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-full border border-emerald-300/30 bg-emerald-300/10 p-1">
            <CheckCircle className="text-emerald-300" size={17} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-base font-bold leading-snug text-white">
                {level.title}
              </h3>

              <p className="text-xs font-semibold text-slate-400">
                {level.score} XP
              </p>
            </div>

            <div className="mt-1">
              <StarRating stars={level.stars} />
            </div>
          </div>

          <button
            onClick={() => startLevel(level)}
            className="shrink-0 rounded-xl border border-cyan-300/35 bg-cyan-300/10 px-3 py-2 text-xs font-black text-cyan-100 transition hover:bg-cyan-300/20"
          >
            Replay
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: 0,
        boxShadow:
          level.unlocked && !level.completed
            ? [
                "0 0 0 rgba(103, 232, 249, 0)",
                "0 0 26px rgba(103, 232, 249, 0.18)",
                "0 0 0 rgba(103, 232, 249, 0)",
              ]
            : "0 0 0 rgba(103, 232, 249, 0)",
      }}
      transition={{ duration: 0.34 }}
      className={`app-level-card rounded-2xl border p-4 pl-5 transition ${
        level.unlocked
          ? "app-surface border-slate-700/70"
          : "app-level-card-locked bg-slate-950/50 border-slate-800/80 opacity-70"
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-white leading-snug">
            {level.title}
          </h3>

          {level.description && (
            <p className="mt-1 text-sm leading-relaxed text-slate-400">
              {level.description}
            </p>
          )}
        </div>

        {level.completed && (
          <div className="rounded-full border border-emerald-300/30 bg-emerald-300/10 p-1">
            <CheckCircle className="text-emerald-300" size={18} />
          </div>
        )}

        {!level.completed && !level.unlocked && (
          <div className="rounded-full border border-slate-700 bg-slate-950/70 p-1">
            <Lock className="text-slate-500" size={16} />
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-3 mb-4">
        <StarRating stars={level.stars} />

        <p className="shrink-0 text-sm text-slate-400">
          {level.completed ? `${level.score} XP` : "Not completed"}
        </p>
      </div>

      {!level.unlocked && (
        <p className="mb-3 text-sm text-slate-500">
          Complete the previous level to unlock this challenge.
        </p>
      )}

      <button
        disabled={!level.unlocked}
        onClick={() => startLevel(level)}
        className={`app-button ${
          level.unlocked ? "app-button-primary" : "app-button-ghost"
        }`}
      >
        {level.unlocked
          ? level.completed
            ? "Replay Level"
            : "Play Level"
          : "Locked"}
      </button>
    </motion.div>
  );
}
