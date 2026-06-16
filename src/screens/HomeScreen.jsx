import { BrainCircuit, RotateCcw } from "lucide-react";

const FEEDBACK_URL = "https://forms.gle/Y4RE3SGALJJzw9bo6";

export default function HomeScreen({
  goToLevels,
  totalXp,
  completedCount,
  levelCount,
  resetProgress,
}) {
  const hasProgress = totalXp > 0 || completedCount > 0;

  const confirmReset = () => {
    if (!hasProgress) return;

    const shouldReset = window.confirm(
      "Reset all saved XP, stars, and unlocked levels?"
    );

    if (shouldReset) resetProgress();
  };

  return (
    <div className="app-screen min-h-screen flex items-center justify-center p-4 py-8 text-white">
      <div className="app-panel w-full max-w-md rounded-2xl p-6 sm:p-7">
        
        <p className="mb-3 text-xs font-bold uppercase text-cyan-300">
          Prototype Alpha
        </p>

        <h1 className="text-4xl font-bold mb-3 leading-tight">
          AI Adventure Lab
        </h1>

        <p className="text-slate-300 mb-4 leading-relaxed">
          A short AI literacy game prototype. Play bite-size
          challenges, get feedback after each choice, and learn how to
          spot AI patterns, hallucinations, and stronger prompts.
        </p>

        <div className="grid grid-cols-3 gap-2 mb-6 text-center">
          <div className="app-inset-surface rounded-xl p-3">
            <p className="text-[11px] font-bold uppercase text-slate-500">
              Modes
            </p>
            <p className="mt-1 text-lg font-bold">4</p>
          </div>

          <div className="app-inset-surface rounded-xl p-3">
            <p className="text-[11px] font-bold uppercase text-slate-500">
              Levels
            </p>
            <p className="mt-1 text-lg font-bold">{levelCount}</p>
          </div>

          <div className="app-inset-surface rounded-xl p-3">
            <p className="text-[11px] font-bold uppercase text-slate-500">
              Saved
            </p>
            <p className="mt-1 text-lg font-bold">Local</p>
          </div>
        </div>

        <div className="app-surface rounded-2xl p-4 mb-6">
          <p className="text-sm text-slate-400">
            Total XP
          </p>

          <h2 className="text-3xl font-bold text-white">
            {totalXp} XP
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            {completedCount}/{levelCount} levels complete
          </p>
        </div>

        <button
          onClick={goToLevels}
          className="app-button app-button-primary text-lg"
        >
          <BrainCircuit size={28} aria-hidden="true" />
          <span>Start Learning -&gt;</span>
        </button>

        <button
          disabled={!hasProgress}
          onClick={confirmReset}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-950/40 p-3 text-sm font-bold text-slate-400 transition hover:border-cyan-400/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:border-slate-700/80 disabled:hover:text-slate-400"
        >
          <RotateCcw size={16} aria-hidden="true" />
          Reset Progress
        </button>

        <a
          href={FEEDBACK_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-3 flex w-full items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-sm font-bold text-cyan-200 transition hover:border-cyan-300/50 hover:bg-cyan-400/15 hover:text-white"
        >
          Send Feedback
        </a>
      </div>
    </div>
  );
}
