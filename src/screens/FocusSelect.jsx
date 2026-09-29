import {
  ArrowLeft,
  BookOpenCheck,
  BrainCircuit,
  BriefcaseBusiness,
  House,
  Lock,
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
    <div className="app-screen min-h-screen p-4 py-8 text-white">
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

              return (
                <button
                  aria-pressed={isActive}
                  aria-label={`${subPath.title}: ${subPath.label}`}
                  key={subPath.id}
                  disabled={!subPath.isAvailable}
                  onClick={() => selectTrackPath(track.id, subPath.id)}
                  className={`rounded-2xl border p-4 text-left transition ${
                    isActive
                      ? "border-cyan-300/70 bg-cyan-300/12 shadow-[0_0_24px_rgba(103,232,249,0.16)]"
                      : "border-slate-700/70 bg-slate-950/35 hover:border-cyan-300/35"
                  } ${
                    subPath.isAvailable
                      ? "text-white"
                      : "cursor-not-allowed opacity-55"
                  } ${subPath.id === "elementary" ? "focus-card-elementary" : ""}`}
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="font-bold">{subPath.title}</p>

                    <span className="inline-flex items-center gap-1 rounded-full border border-slate-600/70 px-2 py-0.5 text-[10px] font-black uppercase text-slate-300">
                      {!subPath.isAvailable && (
                        <Lock size={11} aria-hidden="true" />
                      )}
                      {subPath.label}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-400">
                    {subPath.description}
                  </p>

                  {subPath.isAvailable && (
                    <p className="mt-3 text-xs font-bold uppercase text-cyan-200">
                      {subPath.levels.length} level
                      {subPath.levels.length === 1 ? "" : "s"}
                    </p>
                  )}
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
