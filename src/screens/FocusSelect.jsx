import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Compass,
  House,
  Library,
  Lock,
  Newspaper,
  RadioTower,
  SearchCheck,
  ShieldAlert,
  ShieldCheck,
  Users,
} from "lucide-react";
import { getSubPaths } from "../data/tracks";

// Icons are tied to audience paths, not individual focus areas.
const focusIcons = {
  everyday: House,
  "job-seeker": BriefcaseBusiness,
  "small-business": Users,
  student: BookOpenCheck,
  workplace: BriefcaseBusiness,
};

const getFocusLabel = (track) =>
  track.gradeBands ? "Choose Grade Range" : "Choose Focus Area";

// Icons give non-student focus cards a recognizable visual cue at a glance.
const focusPresentation = {
  "ai-best-practices": BrainCircuit,
  "news-social": Newspaper,
  "privacy-safety": ShieldCheck,
  scams: ShieldAlert,
};

// Grade cards preview the visual identity learners will see inside that path.
const gradePresentation = {
  elementary: {
    action: "Enter Discovery Lab",
    className: "grade-card-elementary",
    Icon: SearchCheck,
    label: "AI Detective Path",
    summary: "Guided clues, safe choices, and short fact checks.",
  },
  "middle-school": {
    action: "Enter Explorer Lab",
    className: "grade-card-middle",
    Icon: Compass,
    label: "AI Explorer Lab",
    summary: "Explore homework, sources, privacy, and fair choices.",
  },
  "high-school": {
    action: "Enter Signal Studio",
    className: "grade-card-high",
    Icon: RadioTower,
    label: "Signal Studio",
    summary: "Practice stronger research, prompting, and real-world judgment.",
  },
  college: {
    action: "Enter Research Studio",
    className: "grade-card-college",
    Icon: Library,
    label: "AI Research Studio",
    summary: "Evaluate academic claims, evidence, and responsible research use.",
  },
};

export default function FocusSelect({
  activePath,
  activeTrack,
  goToHome,
  selectTrackPath,
  track,
}) {
  const subPaths = getSubPaths(track) ?? [];
  const Icon = focusIcons[track.id] ?? BrainCircuit;
  const isActiveTrack = track.id === activeTrack.id;
  // The same screen handles grades for students and focus areas for other paths.

  return (
    <div className="app-screen focus-select-screen min-h-screen p-4 py-8 text-white">
      <div className="mx-auto w-full max-w-3xl">
        <button
          aria-label="Back to learning dashboard"
          onClick={goToHome}
          className="app-back-button mb-5"
        >
          <ArrowLeft className="inline-block" size={16} aria-hidden="true" />
          <span className="ml-1">Dashboard</span>
        </button>

        <section className="app-panel rounded-2xl p-6 sm:p-8">
          <div className="mb-5 flex items-start gap-4">
            <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
              <Icon size={24} aria-hidden="true" />
            </div>

            <div>
              <p className="app-kicker text-xs font-bold uppercase">
                {track.title}
              </p>

              <h1 className="mt-1 text-3xl font-bold leading-tight">
                {getFocusLabel(track)}
              </h1>

              <p className="mt-2 max-w-2xl leading-relaxed text-slate-300">
                {track.description}
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {subPaths.map((subPath) => {
              const isActive =
                isActiveTrack && activePath?.id === subPath.id;
              const grade = track.gradeBands
                ? gradePresentation[subPath.id]
                : null;
              const GradeIcon = grade?.Icon;
              const FocusIcon = grade ? null : focusPresentation[subPath.id];

              return (
                <button
                  aria-pressed={isActive}
                  aria-label={`${subPath.title}: ${subPath.label}`}
                  key={subPath.id}
                  disabled={!subPath.isAvailable}
                  onClick={() => selectTrackPath(track.id, subPath.id)}
                  className={`${grade ? `grade-card ${grade.className}` : `focus-area-card focus-card-${subPath.id} rounded-2xl border p-4 text-left transition`} ${
                    isActive
                      ? grade ? "grade-card-active" : "border-cyan-300/70 bg-cyan-300/12 shadow-[0_0_24px_rgba(103,232,249,0.16)]"
                      : grade ? "" : "border-slate-700/70 bg-slate-950/35 hover:border-cyan-300/35"
                  } ${
                    subPath.isAvailable
                      ? "text-white"
                      : "cursor-not-allowed opacity-55"
                  }`}
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    {GradeIcon ? (
                      <span className="grade-card-icon"><GradeIcon size={22} aria-hidden="true" /></span>
                    ) : FocusIcon ? (
                      <span className="focus-card-title"><span className="focus-card-icon"><FocusIcon size={19} aria-hidden="true" /></span><span>{subPath.title}</span></span>
                    ) : (
                      <p className="font-bold">{subPath.title}</p>
                    )}

                    <span className={grade ? "grade-card-status" : "inline-flex items-center gap-1 rounded-full border border-slate-600/70 px-2 py-0.5 text-[10px] font-black uppercase text-slate-300"}>
                      {!subPath.isAvailable && (
                        <Lock size={11} aria-hidden="true" />
                      )}
                      {isActive ? "Current" : subPath.label}
                    </span>
                  </div>

                  {grade ? <>
                    <p className="grade-card-label">{grade.label}</p>
                    <h2>{subPath.title}</h2>
                    <p className="grade-card-summary">{grade.summary}</p>
                  </> : <p className="text-sm leading-relaxed text-slate-400">{subPath.description}</p>}

                  {subPath.isAvailable && (grade ? (
                    <div className="grade-card-footer">
                      <span>{subPath.levels.length} level{subPath.levels.length === 1 ? "" : "s"}</span>
                      <span>{grade.action}<ArrowRight size={15} aria-hidden="true" /></span>
                    </div>
                  ) : (
                    <p className="mt-3 text-xs font-bold uppercase text-cyan-200">{subPath.levels.length} level{subPath.levels.length === 1 ? "" : "s"}</p>
                  ))}
                </button>
              );
            })}
          </div>

          {!track.isAvailable && (
            <div className="mt-5 rounded-2xl border border-amber-300/25 bg-amber-300/10 p-4 text-sm leading-relaxed text-amber-100">
              This path is mapped for future content, but the levels are not
              playable yet.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
