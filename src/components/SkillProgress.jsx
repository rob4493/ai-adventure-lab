export default function SkillProgress({ summary, goToReviewHub }) {
  const renderSkill = (skill) => (
    <li key={skill.topic} className="app-inset-surface rounded-xl p-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-bold text-white">{skill.topic}</h3>
        <span className="text-xs font-bold text-cyan-100">{skill.status}</span>
      </div>
      <p className="mt-2 text-sm text-slate-300">{skill.takeaway}</p>
      {skill.attempts > 0 && <p className="mt-2 text-sm text-emerald-200">{skill.strong} strong answers · {skill.review} answers to revisit</p>}
      {skill.practice && <p className="mt-1 text-sm text-cyan-100">Latest skill practice: {skill.practice.strong} of {skill.practice.total} strong on the first try.</p>}
    </li>
  );
  return (
    <section className="app-surface mt-4 rounded-2xl p-4" aria-labelledby="skills-heading">
      <p className="app-kicker text-xs font-bold uppercase">Beyond XP</p>
      <h2 id="skills-heading" className="mt-1 text-xl font-bold">Your growing skills</h2>
      <p className="mt-2 text-slate-200">{summary.practiced} of {summary.total} skills practiced in this focus.</p>
      <p className="mt-2 text-sm text-slate-300">{summary.attempts
        ? `${summary.strong} strong answers across ${summary.attempts} completed rounds. Mistakes show you what to practice next.`
        : "Complete a scored lesson to see the skills you’re building here."}</p>
      <ul className="mt-4 space-y-3">{summary.skills.slice(0, 3).map(renderSkill)}</ul>
      {summary.skills.length > 3 && <details className="mt-3">
        <summary className="min-h-11 cursor-pointer py-3 font-bold text-cyan-100">See all {summary.total} skills</summary>
        <ul className="space-y-3">{summary.skills.slice(3).map(renderSkill)}</ul>
      </details>}
      <p className="mt-3 text-xs leading-relaxed text-slate-400">Counts include completed lessons, replays, and skill practice. Strong means a correct first attempt or a completed guided answer; it isn’t a mastery rating. Older saves may have fewer details.</p>
      {summary.practiced > 0 && <button className="app-button app-button-secondary mt-4" onClick={goToReviewHub}>Choose a skill to practice</button>}
    </section>
  );
}
