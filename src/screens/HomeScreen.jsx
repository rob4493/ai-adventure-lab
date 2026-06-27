import {
  BrainCircuit,
  FlaskConical,
  Handshake,
  Route,
  Settings,
  Sparkles,
} from "lucide-react";

export default function HomeScreen({
  goToLevels,
  goToSettings,
  totalXp,
  completedCount,
  levelCount,
}) {
  return (
    <div className="app-screen min-h-screen p-4 py-8 text-white">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-5 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1.1fr_0.9fr]">
        <section className="app-panel rounded-2xl p-6 sm:p-8">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1">
            <Sparkles size={14} aria-hidden="true" className="text-cyan-200" />
            <p className="app-kicker text-xs font-bold uppercase">
              Prototype Alpha
            </p>
          </div>

          <h1 className="mb-3 text-4xl font-bold leading-tight sm:text-5xl">
            AI Adventure Lab
          </h1>

          <p className="mb-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Learn how people and AI can work together. Play bite-size
            challenges, get feedback after each choice, and practice the
            judgment skills behind better prompts and safer AI use.
          </p>

          <div className="mb-6 grid gap-3 sm:grid-cols-3">
            <div className="app-surface rounded-xl p-4">
              <BrainCircuit className="mb-3 text-cyan-200" size={22} aria-hidden="true" />
              <p className="text-sm font-bold text-white">AI Patterns</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">
                Spot signals, limits, and machine-written clues.
              </p>
            </div>

            <div className="app-surface app-human-surface rounded-xl p-4">
              <Handshake className="mb-3 text-amber-300" size={22} aria-hidden="true" />
              <p className="text-sm font-bold text-white">Human Judgment</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">
                Decide what to trust, question, and improve.
              </p>
            </div>

            <div className="app-surface rounded-xl p-4">
              <FlaskConical className="mb-3 text-violet-200" size={22} aria-hidden="true" />
              <p className="text-sm font-bold text-white">Prompt Lab</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">
                Build stronger requests through guided practice.
              </p>
            </div>
          </div>

          <div className="mb-6 grid grid-cols-3 gap-2 text-center">
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

          <button
            onClick={goToLevels}
            className="app-button app-button-primary text-lg"
          >
            <BrainCircuit size={28} aria-hidden="true" />
            <span>Start Learning -&gt;</span>
          </button>

          <button
            onClick={goToSettings}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-950/40 p-3 text-sm font-bold text-slate-400 transition hover:border-cyan-400/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:border-slate-700/80 disabled:hover:text-slate-400"
          >
            <Settings size={16} aria-hidden="true" />
            Settings & About
          </button>
        </section>

        <aside className="app-panel rounded-2xl p-5 sm:p-6">
          <div className="app-hero-orb mb-5">
            <Route className="app-hero-icon" size={96} strokeWidth={1.5} aria-hidden="true" />
          </div>

          <div className="app-surface rounded-2xl p-4">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">
                  Total XP
                </p>

                <h2 className="text-4xl font-bold text-white">
                  {totalXp} XP
                </h2>
              </div>

              <div className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-bold text-amber-200">
                Human + AI
              </div>
            </div>

            <p className="text-sm text-slate-400">
              {completedCount}/{levelCount} levels complete
            </p>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-950/70">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-violet-300 to-amber-300"
                style={{
                  width: `${Math.round((completedCount / levelCount) * 100)}%`,
                }}
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
