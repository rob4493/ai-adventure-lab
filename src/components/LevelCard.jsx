import { CheckCircle, Lock } from "lucide-react";
import StarRating from "./StarRating";

export default function LevelCard({ level, startLevel }) {
  return (
    <div
      className={`rounded-2xl p-4 border transition ${
        level.unlocked
          ? "app-surface border-slate-700/70"
          : "bg-slate-950/50 border-slate-800/80 opacity-70"
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase text-violet-300">
            {level.world}
          </p>

          <h3 className="text-lg font-bold text-white leading-snug">
            {level.title}
          </h3>
        </div>

        {level.completed && (
          <CheckCircle className="text-emerald-300" size={20} />
        )}

        {!level.completed && !level.unlocked && (
          <Lock className="text-slate-500" size={18} />
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
    </div>
  );
}
