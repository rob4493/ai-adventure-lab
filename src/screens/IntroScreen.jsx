import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Handshake,
  Lightbulb,
  Settings,
  Sparkles,
} from "lucide-react";

export default function IntroScreen({
  goToHome,
  goToLevels,
  goToSettings,
  hasStarted,
}) {
  return (
    <div className="app-screen min-h-screen p-4 py-8 text-white">
      <main className="mx-auto grid w-full max-w-5xl items-center gap-5 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1.05fr_0.95fr]">
        <section className="app-panel rounded-2xl p-6 sm:p-8">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1">
            <Sparkles size={14} aria-hidden="true" className="text-cyan-200" />
            <p className="app-kicker text-xs font-bold uppercase">
              Prototype Alpha
            </p>
          </div>

          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl">
            AI Adventure Lab
          </h1>

          <p className="mb-4 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
            AI is powerful, but it works best when people stay curious,
            careful, and in control. This lab is built around one simple idea:
            humans and AI should work together, not replace each other.
          </p>

          <p className="mb-6 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
            You will play short challenges that practice real judgment skills:
            asking better questions, checking sources, protecting privacy,
            spotting bias, and knowing when an AI answer needs a second look.
          </p>

          <button
            aria-label={hasStarted ? "Continue learning" : "Start learning"}
            onClick={goToLevels}
            className="app-button app-button-primary text-lg"
          >
            <BrainCircuit size={28} aria-hidden="true" />
            <span>{hasStarted ? "Continue Learning" : "Start Learning"}</span>
            <ArrowRight size={22} aria-hidden="true" />
          </button>

          <button
            aria-label="Choose a learning path"
            onClick={goToHome}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-sm font-bold text-cyan-100 transition hover:border-cyan-300/45 hover:text-white"
          >
            Choose Path
          </button>

          <button
            aria-label="Open settings and about"
            onClick={goToSettings}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-950/40 p-3 text-sm font-bold text-slate-400 transition hover:border-cyan-400/40 hover:text-white"
          >
            <Settings size={16} aria-hidden="true" />
            Settings & About
          </button>
        </section>

        <aside className="grid gap-4">
          <div className="app-hero-orb">
            <Handshake
              className="app-hero-icon"
              size={104}
              strokeWidth={1.45}
              aria-hidden="true"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="app-surface rounded-xl p-4">
              <BrainCircuit className="mb-3 text-cyan-200" size={22} aria-hidden="true" />
              <p className="text-sm font-bold text-white">Use AI Well</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">
                Learn what AI can help with and where it can go wrong.
              </p>
            </div>

            <div className="app-surface app-human-surface rounded-xl p-4">
              <Lightbulb className="mb-3 text-amber-300" size={22} aria-hidden="true" />
              <p className="text-sm font-bold text-white">Keep Judgment</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">
                Practice when to trust, question, verify, or revise.
              </p>
            </div>

            <div className="app-surface rounded-xl p-4">
              <CheckCircle2 className="mb-3 text-emerald-300" size={22} aria-hidden="true" />
              <p className="text-sm font-bold text-white">Build Better Habits</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">
                Learn through choices, feedback, and replayable lessons.
              </p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
