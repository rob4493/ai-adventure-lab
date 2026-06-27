import {
  Database,
  ExternalLink,
  Info,
  MessageSquare,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

const FEEDBACK_URL = "https://forms.gle/Y4RE3SGALJJzw9bo6";

export default function SettingsScreen({
  completedCount,
  goHome,
  levelCount,
  resetProgress,
  totalXp,
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
    <div className="app-screen min-h-screen p-4 py-6 text-white">
      <div className="mx-auto max-w-md">
        <button
          onClick={goHome}
          className="app-back-button mb-4"
        >
          &lt; Back
        </button>

        <div className="app-panel rounded-2xl p-6 sm:p-7">
          <p className="app-kicker mb-3 text-xs font-bold uppercase">
            Settings
          </p>

          <h1 className="mb-3 text-3xl font-bold leading-tight">
            About AI Adventure Lab
          </h1>

          <p className="mb-6 leading-relaxed text-slate-300">
            AI Adventure Lab is a prototype alpha for learning AI
            literacy through short game-like challenges, feedback, and
            prompt practice.
          </p>

          <div className="mb-5 grid grid-cols-2 gap-3">
            <div className="app-inset-surface rounded-xl p-3">
              <p className="text-[11px] font-bold uppercase text-slate-500">
                Progress
              </p>

              <p className="mt-1 text-lg font-bold">
                {completedCount}/{levelCount}
              </p>

              <p className="text-xs text-slate-500">
                levels complete
              </p>
            </div>

            <div className="app-inset-surface rounded-xl p-3">
              <p className="text-[11px] font-bold uppercase text-slate-500">
                Total XP
              </p>

              <p className="mt-1 text-lg font-bold">
                {totalXp}
              </p>

              <p className="text-xs text-slate-500">
                best-score XP
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="app-surface rounded-2xl p-4">
              <div className="mb-2 flex items-center gap-2 text-cyan-200">
                <Info size={18} aria-hidden="true" />
                <h2 className="font-bold">Prototype Version</h2>
              </div>

              <p className="text-sm leading-relaxed text-slate-300">
                This build is meant for early testing. Content, scoring,
                and visuals may change as tester feedback comes in.
              </p>
            </div>

            <div className="app-surface rounded-2xl p-4">
              <div className="mb-2 flex items-center gap-2 text-amber-200">
                <Database size={18} aria-hidden="true" />
                <h2 className="font-bold">Progress Storage</h2>
              </div>

              <p className="text-sm leading-relaxed text-slate-300">
                Progress is saved only in this browser on this device.
                Clearing browser data or using another device starts
                fresh.
              </p>
            </div>

            <div className="app-surface rounded-2xl p-4">
              <div className="mb-2 flex items-center gap-2 text-cyan-200">
                <ShieldCheck size={18} aria-hidden="true" />
                <h2 className="font-bold">Privacy Note</h2>
              </div>

              <p className="text-sm leading-relaxed text-slate-300">
                The app does not use accounts or upload gameplay
                progress. The feedback form opens separately if you
                choose to send comments.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <a
              href={FEEDBACK_URL}
              target="_blank"
              rel="noreferrer"
              className="app-button app-button-secondary"
            >
              <MessageSquare size={20} aria-hidden="true" />
              <span>Send Feedback</span>
              <ExternalLink size={16} aria-hidden="true" />
            </a>

            <button
              disabled={!hasProgress}
              onClick={confirmReset}
              className="app-button app-button-ghost"
            >
              <RotateCcw size={18} aria-hidden="true" />
              <span>Reset Progress</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
