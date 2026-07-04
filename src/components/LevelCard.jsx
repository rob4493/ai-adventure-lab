import { motion } from "framer-motion";
import { CheckCircle, Lock } from "lucide-react";
import StarRating from "./StarRating";

export default function LevelCard({ level, startLevel }) {
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
