import { CheckCircle2, Circle, Sparkles } from "lucide-react";

export default function SkillProgress({ summary, goToReviewHub }) {
  const renderSkill = (skill) => (
    <li key={skill.topic} className="dashboard-skill-row">
      <span className={`dashboard-skill-icon ${skill.attempts > 0 ? "practiced" : ""}`}>
        {skill.attempts > 0 ? <CheckCircle2 size={18} aria-hidden="true" /> : <Circle size={18} aria-hidden="true" />}
      </span>
      <div className="dashboard-skill-copy">
        <div className="dashboard-skill-heading">
          <h3>{skill.topic}</h3>
          <span>{skill.status}</span>
        </div>
        <p>{skill.takeaway}</p>
        {skill.attempts > 0 && (
          <div className="dashboard-skill-meter" aria-label={`${skill.strong} strong answers out of ${skill.attempts} attempts`}>
            <span style={{ width: `${Math.round((skill.strong / skill.attempts) * 100)}%` }} />
          </div>
        )}
        {skill.practice && <p className="dashboard-skill-practice">Latest practice: {skill.practice.strong} of {skill.practice.total} strong on the first try.</p>}
      </div>
    </li>
  );
  return (
    <section className="dashboard-skills" aria-labelledby="skills-heading">
      <p className="app-kicker flex items-center gap-2 text-xs font-bold uppercase"><Sparkles size={14} aria-hidden="true" />Beyond XP</p>
      <h2 id="skills-heading" className="mt-1 text-xl font-bold">Your growing skills</h2>
      <p className="mt-2 text-sm text-slate-300">{summary.attempts
        ? `${summary.strong} strong answers across ${summary.attempts} completed rounds. Mistakes show you what to practice next.`
        : "Complete a scored lesson to see the skills you’re building here."}</p>
      <ul className="dashboard-skill-list">{summary.skills.slice(0, 3).map(renderSkill)}</ul>
      {summary.skills.length > 3 && <details className="dashboard-skill-details">
        <summary>View all {summary.total} skills</summary>
        <ul className="dashboard-skill-list dashboard-skill-list-expanded">{summary.skills.slice(3).map(renderSkill)}</ul>
      </details>}
      {summary.practiced > 0 && <button className="dashboard-skills-button" onClick={goToReviewHub}>Choose a skill to practice</button>}
    </section>
  );
}
