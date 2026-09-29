import {
  ArrowLeft,
  BrainCircuit,
  BriefcaseBusiness,
  GraduationCap,
  House,
  BookOpenCheck,
  Route,
  Settings,
  Sparkles,
  Users,
} from "lucide-react";
import SkillProgress from "../components/SkillProgress";

const trackIcons = {
  everyday: House,
  "job-seeker": BriefcaseBusiness,
  "small-business": Users,
  student: GraduationCap,
  workplace: BriefcaseBusiness,
};

export default function HomeScreen({
  skillProgress,
  activePath,
  activeTrack,
  dashboardGuidance,
  followDashboardGuidance,
  goToIntro,
  goToSettings,
  goToReviewHub,
  selectTrack,
  tracks,
  totalXp,
  completedCount,
  levelCount,
}) {
  const progressPercent =
    levelCount > 0 ? Math.round((completedCount / levelCount) * 100) : 0;

  return (
    <div className="app-screen min-h-screen p-4 py-8 text-white">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-5 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1.1fr_0.9fr]">
        <section className="app-panel rounded-2xl p-6 sm:p-8">
          <button
            aria-label="Back to intro screen"
            onClick={goToIntro}
            className="app-back-button mb-5"
          >
            <ArrowLeft className="inline-block" size={16} aria-hidden="true" />
            <span className="ml-1">Intro</span>
          </button>

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1">
            <Sparkles size={14} aria-hidden="true" className="text-cyan-200" />
            <p className="app-kicker text-xs font-bold uppercase">
              Prototype Alpha
            </p>
          </div>

          <h1 className="mb-3 text-4xl font-bold leading-tight sm:text-5xl">
            Learning Dashboard
          </h1>

          <p className="mb-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Choose a path, continue your progress, or switch between the
            playable AI literacy practice areas.
          </p>

          <button
            onClick={() => selectTrack(activeTrack.id)}
            disabled={!activeTrack.isAvailable}
            className="app-button app-button-primary mb-4 text-lg"
          >
            <BrainCircuit size={28} aria-hidden="true" />
            <span>Choose Focus -&gt;</span>
          </button>

          <div className="mb-6 rounded-2xl border border-cyan-300/16 bg-slate-950/30 p-4">
            <div className="mb-3 flex items-end justify-between gap-3">
              <div>
                <p className="app-kicker text-xs font-bold uppercase">
                  Current Path
                </p>

                <h2 className="mt-1 text-xl font-bold text-white">
                  {activeTrack.title}
                  {activePath?.id !== activeTrack.id
                    ? `: ${activePath.title}`
                    : ""}
                </h2>
              </div>

              <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-100">
                Active
              </span>
            </div>

            <p className="mb-4 text-sm leading-relaxed text-slate-400">
              Pick the broad audience path first. Each path opens a focus menu
              with grade ranges, categories, or planned practice areas.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {tracks.map((track) => {
                const Icon = trackIcons[track.id] ?? BrainCircuit;
                const isActive = track.id === activeTrack.id;
                const canOpenTrack =
                  track.isAvailable || track.gradeBands || track.focusAreas;

                return (
                  <button
                    aria-pressed={isActive}
                    aria-label={`${track.title}: ${track.label}`}
                    key={track.id}
                    disabled={!canOpenTrack}
                    onClick={() => selectTrack(track.id)}
                    className={`rounded-xl border p-4 text-left transition ${
                      isActive
                        ? "border-cyan-300/70 bg-cyan-300/12 shadow-[0_0_24px_rgba(103,232,249,0.16)]"
                        : "border-slate-700/70 bg-slate-950/35 hover:border-cyan-300/35"
                    } ${
                      canOpenTrack
                        ? "text-white"
                        : "cursor-not-allowed opacity-55"
                    }`}
                  >
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <Icon
                        size={20}
                        aria-hidden="true"
                        className={isActive ? "text-cyan-100" : "text-slate-300"}
                      />

                      <span className="rounded-full border border-slate-600/70 px-2 py-0.5 text-[10px] font-black uppercase text-slate-300">
                        {track.label}
                      </span>
                    </div>

                    <p className="font-bold">{track.title}</p>

                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {track.description}
                    </p>
                  </button>
                );
              })}
            </div>

          </div>

          <div className="mb-6 grid grid-cols-3 gap-2 text-center">
            <div className="app-inset-surface rounded-xl p-3">
              <p className="text-[11px] font-bold uppercase text-slate-500">
                Skills practiced
              </p>
              <p className="mt-1 text-lg font-bold">{skillProgress.practiced}/{skillProgress.total}</p>
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

          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <button
              onClick={goToReviewHub}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-amber-300/30 bg-amber-300/10 p-3 text-sm font-bold text-amber-100 transition hover:bg-amber-300/20"
            >
              <BookOpenCheck size={16} aria-hidden="true" />
              Review Hub
            </button>

            <button
              onClick={goToSettings}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-950/40 p-3 text-sm font-bold text-slate-400 transition hover:border-cyan-400/40 hover:text-white"
            >
              <Settings size={16} aria-hidden="true" />
              Settings & About
            </button>
          </div>
        </section>

        <aside className="app-panel rounded-2xl p-5 sm:p-6">
          <SkillProgress summary={skillProgress} goToReviewHub={goToReviewHub} />
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
                  width: `${progressPercent}%`,
                }}
              />
            </div>
          </div>

          {dashboardGuidance && (
            <div className="mt-4 app-surface rounded-2xl border border-cyan-300/20 p-4">
              <p className="app-kicker text-xs font-bold uppercase">
                Suggested Next Step
              </p>

              <h2 className="mt-2 text-xl font-bold text-white">
                {dashboardGuidance.title}
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {dashboardGuidance.message}
              </p>

              <button
                onClick={followDashboardGuidance}
                className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-300/10 px-4 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/20"
              >
                {dashboardGuidance.buttonLabel}
              </button>
            </div>
          )}

        </aside>
      </div>
    </div>
  );
}
