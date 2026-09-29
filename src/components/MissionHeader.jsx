export default function MissionHeader({ level, round, total, guided, goBack }) {
  const isIntro = level.type === "elementaryIntro";
  const instructions = level.content.instructions ??
    "Read each part, then try the final activity. Use Back and Next to move at your own pace.";
  return (
    <header className="missionHeader p-4 sm:hidden">
      <div className="flex items-center justify-between gap-3">
        <button className="app-back-button min-h-11" onClick={goBack}
          aria-label={level.isPractice ? "Back to Review Hub" : "Back to missions"}>&lt; Back</button>
        <span aria-label={`${isIntro ? "Part" : "Round"} ${round} of ${total}`} className="rounded-full bg-slate-950/80 px-3 py-1 text-xs font-bold text-cyan-100">{round} / {total}</span>
      </div>
      <h1 className="mt-1 text-xl font-bold leading-tight text-white">{level.title}</h1>
      {guided && <p className="mt-2 text-xs font-bold text-emerald-100">{isIntro ? "Learn at your pace · No penalties" : "Guided round · Try again freely"}</p>}
      <details className="mt-1 text-sm text-white">
        <summary className="flex min-h-11 cursor-pointer items-center font-semibold text-cyan-100">How to play +</summary>
        <p className="rounded-lg bg-slate-950/85 p-3 leading-relaxed">{instructions}</p>
      </details>
    </header>
  );
}
