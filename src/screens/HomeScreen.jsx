import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  BriefcaseBusiness,
  GraduationCap,
  House,
  Settings,
  Sparkles,
  Users,
} from "lucide-react";
import SkillProgress from "../components/SkillProgress";
import pixelGuide from "../assets/pixel-guide.webp";
import { getElementaryLevelArt } from "../data/elementaryLevelArt";

const trackPresentation = {
  everyday: { className: "path-card-everyday", kicker: "Daily decisions", promise: "Check claims, scams, and everyday AI advice." },
  "job-seeker": { className: "path-card-job", kicker: "Career growth", promise: "Build stronger applications and prepare with purpose." },
  "small-business": { className: "path-card-business", kicker: "Business tools", promise: "Create, compare, and protect sensitive information." },
  student: { className: "path-card-student", kicker: "School & study", promise: "Learn with AI while keeping your own voice." },
  workplace: { className: "path-card-workplace", kicker: "Workplace skills", promise: "Communicate clearly and make fairer decisions." },
};

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
  const progressPercent = levelCount > 0 ? Math.round((completedCount / levelCount) * 100) : 0;
  const activeTitle = `${activeTrack.title}${activePath?.id !== activeTrack.id ? `: ${activePath.title}` : ""}`;
  const activePathId = activePath?.id ?? activeTrack.id;
  const isElementaryDashboard = activePathId === "elementary";
  // Elementary recommendations reuse each mission's Pixel pose; other paths use the main guide art.
  const guidanceArt = isElementaryDashboard
    ? getElementaryLevelArt(dashboardGuidance?.level?.title) ?? pixelGuide
    : pixelGuide;
  const guidanceTitle = dashboardGuidance?.level?.title ?? dashboardGuidance?.title;
  const guidanceButtonLabel = isElementaryDashboard
    ? dashboardGuidance?.buttonLabel?.replace(/Level/g, "Mission")
    : dashboardGuidance?.buttonLabel;
  const guidanceMessage = isElementaryDashboard
    ? dashboardGuidance?.message?.replace(/\blevels\b/gi, "missions").replace(/\blevel\b/gi, "mission")
    : dashboardGuidance?.message;

  return (
    <div className="app-screen dashboard-screen min-h-screen p-4 py-7 text-white">
      <main className="dashboard-shell mx-auto w-full max-w-7xl">
        <header className="dashboard-hero">
          <div className="dashboard-hero-copy">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <button aria-label="Back to intro screen" onClick={goToIntro} className="app-back-button min-h-11">
                <ArrowLeft className="inline-block" size={16} aria-hidden="true" />
                <span className="ml-1">Intro</span>
              </button>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1">
                <Sparkles size={14} aria-hidden="true" className="text-cyan-200" />
                <p className="app-kicker text-xs font-bold uppercase">Prototype Alpha</p>
              </div>
            </div>

            <p className="app-kicker text-xs font-black uppercase">Learning Dashboard</p>
            <h1 className="mt-2 text-4xl font-bold leading-tight sm:text-5xl">Choose your adventure.</h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              Pick where AI shows up in your life. Each path changes the situations
              you practice while building the same core judgment skills.
            </p>
          </div>

          <div className="dashboard-pixel-wrap">
            <div className="dashboard-pixel-tip">
              <strong>Pixel&apos;s tip:</strong> Start with the path that matches the choices you make most often.
            </div>
            <img className="dashboard-pixel" src={pixelGuide} alt="Pixel, the AI Adventure Lab circuit fox guide" />
          </div>
        </header>

        <div className="dashboard-content-grid">
          <section className="dashboard-path-section" aria-labelledby="path-heading">
            <div className="dashboard-section-heading">
              <div>
                <p className="app-kicker text-xs font-black uppercase">Choose a path</p>
                <h2 id="path-heading" className="mt-1 text-2xl font-bold sm:text-3xl">Where will you use AI?</h2>
              </div>
              <div className="current-path-chip"><span>Current</span><strong>{activeTitle}</strong></div>
            </div>

            <div className="path-card-grid">
              {tracks.map((track) => {
                const Icon = trackIcons[track.id] ?? BrainCircuit;
                const presentation = trackPresentation[track.id] ?? { className: "path-card-default", kicker: "AI literacy", promise: track.description };
                const isActive = track.id === activeTrack.id;
                const canOpenTrack = track.isAvailable || track.gradeBands || track.focusAreas;
                const actionLabel = track.isAvailable ? (isActive ? "Continue path" : "Explore path") : "Preview path";

                return (
                  <button
                    aria-pressed={isActive}
                    aria-label={`${track.title}: ${track.label}. ${actionLabel}`}
                    key={track.id}
                    disabled={!canOpenTrack}
                    onClick={() => selectTrack(track.id)}
                    className={`path-card ${presentation.className} ${isActive ? "path-card-active" : ""}`}
                  >
                    <div className="path-card-topline">
                      <span className="path-card-icon"><Icon size={24} aria-hidden="true" /></span>
                      <span className="path-card-status">{isActive ? "Current" : track.label}</span>
                    </div>
                    <p className="path-card-kicker">{presentation.kicker}</p>
                    <h3>{track.title}</h3>
                    <p className="path-card-promise">{presentation.promise}</p>
                    <span className="path-card-action">{actionLabel}<ArrowRight size={17} aria-hidden="true" /></span>
                  </button>
                );
              })}
            </div>

            <div className="dashboard-utility-actions">
              <button onClick={goToReviewHub} className="dashboard-utility-button review">
                <BookOpenCheck size={18} aria-hidden="true" />Review Hub
              </button>
              <button onClick={goToSettings} className="dashboard-utility-button">
                <Settings size={18} aria-hidden="true" />Settings & About
              </button>
            </div>
          </section>

          <aside className="dashboard-sidebar" aria-label="Current learning progress">
            <section className="dashboard-progress-card" aria-labelledby="mission-control-heading">
              <div className="dashboard-progress-heading">
                <div>
                  <p className="app-kicker text-xs font-black uppercase">Mission Control</p>
                  <h2 id="mission-control-heading" className="mt-1 text-lg font-bold">{activePath?.title ?? activeTrack.title}</h2>
                </div>
                <span className="dashboard-human-ai">Human + AI</span>
              </div>

              <div className="dashboard-progress-console">
                <div
                  className="dashboard-progress-ring"
                  role="img"
                  aria-label={`${progressPercent}% of levels complete`}
                  style={{ "--dashboard-progress": `${progressPercent * 3.6}deg` }}
                >
                  <div><strong>{totalXp}</strong><span>XP</span></div>
                </div>

                <div className="dashboard-stat-grid">
                  <div><strong>{skillProgress.practiced}/{skillProgress.total}</strong><span>Skills practiced</span></div>
                  <div><strong>{completedCount}/{levelCount}</strong><span>Missions complete</span></div>
                  <div><strong>{progressPercent}%</strong><span>Path progress</span></div>
                  <div><strong>Local</strong><span>Progress saved</span></div>
                </div>
              </div>
            </section>

            {dashboardGuidance && (
              <section className="dashboard-next-card">
                <div className="dashboard-next-copy">
                  <p className="app-kicker text-xs font-black uppercase">
                    {dashboardGuidance.action === "start-level" ? (isElementaryDashboard ? "Next mission" : "Recommended next step") : "Review recommendation"}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold">{guidanceTitle}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">{guidanceMessage}</p>
                  <button onClick={followDashboardGuidance} className="dashboard-next-button">
                    {guidanceButtonLabel}<ArrowRight size={18} aria-hidden="true" />
                  </button>
                </div>

                <img className="dashboard-next-pixel" src={guidanceArt} alt="" aria-hidden="true" />
              </section>
            )}

            <SkillProgress summary={skillProgress} goToReviewHub={goToReviewHub} />
          </aside>
        </div>
      </main>
    </div>
  );
}
