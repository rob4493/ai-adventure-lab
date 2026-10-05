import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Lightbulb,
  Settings,
  Sparkles,
} from "lucide-react";
import pixelGuide from "../assets/pixel-guide.webp";

export default function IntroScreen({
  goToHome,
  goToLevels,
  goToSettings,
  hasStarted,
}) {
  return (
    <div className="app-screen intro-screen min-h-screen p-4 py-8 text-white">
      <main className="intro-layout mx-auto w-full max-w-6xl">
        <section className="intro-copy">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1">
            <Sparkles size={14} aria-hidden="true" className="text-cyan-200" />
            <p className="app-kicker text-xs font-bold uppercase">
              Prototype Alpha
            </p>
          </div>

          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl">
            AI Adventure Lab
          </h1>

          <p className="mb-4 max-w-xl text-base leading-relaxed text-slate-100 sm:text-lg">
            AI is powerful, but it works best when people stay curious,
            careful, and in control. Humans and AI should work together,
            not replace each other.
          </p>

          <p className="mb-7 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Explore short challenges about better questions, trustworthy
            sources, privacy, bias, and knowing when an AI answer needs a
            second look.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <button
              aria-label={hasStarted ? "Continue learning" : "Start learning"}
              onClick={goToLevels}
              className="app-button app-button-primary text-base"
            >
              <BrainCircuit size={24} aria-hidden="true" />
              <span>{hasStarted ? "Continue Learning" : "Start Learning"}</span>
              <ArrowRight size={20} aria-hidden="true" />
            </button>

            <button
              aria-label="Choose a learning path"
              onClick={goToHome}
              className="app-button app-button-secondary text-base"
            >
              Choose Your Path
              <ArrowRight size={19} aria-hidden="true" />
            </button>
          </div>

          <button
            aria-label="Open settings and about"
            onClick={goToSettings}
            className="intro-settings mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-slate-400 transition hover:text-white"
          >
            <Settings size={16} aria-hidden="true" />
            Settings & About
          </button>
        </section>

        <aside className="intro-guide" aria-label="Meet Pixel, your AI literacy guide">
          <div className="pixel-stage">
            <div className="pixel-introduction">
              <p className="app-kicker text-xs font-black uppercase">Meet Pixel</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-200">
                Your guide for exploring AI with curiosity and good judgment.
              </p>
            </div>
            <img
              className="pixel-mascot"
              src={pixelGuide}
              alt="Pixel, a friendly blue circuit fox with glasses and a colorful digital tail"
            />
          </div>

          <div className="intro-principles grid gap-3 sm:grid-cols-3">
            <div className="intro-principle">
              <BrainCircuit size={21} aria-hidden="true" />
              <div><p className="font-bold">Use AI Well</p><p>Know what it can and cannot do.</p></div>
            </div>
            <div className="intro-principle intro-principle-human">
              <Lightbulb size={21} aria-hidden="true" />
              <div><p className="font-bold">Keep Judgment</p><p>Pause, question, and verify.</p></div>
            </div>
            <div className="intro-principle intro-principle-success">
              <CheckCircle2 size={21} aria-hidden="true" />
              <div><p className="font-bold">Build Habits</p><p>Practice through real choices.</p></div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
