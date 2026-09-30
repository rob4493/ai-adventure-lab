import tracks, { getSubPaths, getProgressKey } from "../data/tracks";
import { getTotalXp } from "../utils/progress";

export default function ProfileScreen({ profile, progress, goBack, signOut }) {
  const paths = tracks.flatMap((track) => (getSubPaths(track) ?? [track])
    .filter((path) => path.isAvailable).map((path) => {
      const saved = progress.progressByPathId[getProgressKey(track.id, path === track ? null : path.id)];
      return { title: `${track.title}: ${path.title}`, key: `${track.id}:${path.id}`,
        completed: path.levels.filter((level) => saved?.completedLevelIds.includes(level.id)).length,
        total: path.levels.length, xp: saved ? getTotalXp(path.levels, saved) : 0,
        stars: path.levels.reduce((sum, level) => sum + (saved?.starsByLevelId[level.id] ?? 0), 0),
        strong: Object.values(saved?.conceptStatsByTopic ?? {}).reduce((sum, stats) => sum + (stats.strong ?? 0), 0),
        review: Object.values(saved?.conceptStatsByTopic ?? {}).reduce((sum, stats) => sum + (stats.review ?? 0), 0) };
    }));
  return <div className="app-screen min-h-screen p-4 py-8 text-white"><main className="app-panel mx-auto max-w-2xl rounded-2xl p-6">
    <button className="app-back-button" onClick={goBack}>&lt; Back to learning</button>
    <p className="app-kicker mt-5 text-xs font-bold uppercase">My progress</p>
    <h1 className="mt-2 text-3xl font-bold">{profile.username}</h1>
    <p className="mt-2 text-sm text-slate-300">{profile.managed ? "Parent-managed learner profile" : "Your personal learning profile"}</p>
    <div className="my-5 grid grid-cols-3 gap-2 text-center">{[
      ["Activities", paths.reduce((sum, path) => sum + path.completed, 0)],
      ["XP", paths.reduce((sum, path) => sum + path.xp, 0)],
      ["Stars", paths.reduce((sum, path) => sum + path.stars, 0)],
    ].map(([label, value]) => <div key={label} className="app-surface rounded-xl p-3"><p className="text-2xl font-bold">{value}</p><p className="text-sm">{label}</p></div>)}</div>
    <h2 className="text-xl font-bold">Progress by focus</h2>
    <div className="mt-4 grid gap-3">{paths.map((path) => <section key={path.key} className="app-surface rounded-xl p-4">
      <h3 className="font-bold">{path.title}</h3><p className="mt-2 text-sm">{path.completed}/{path.total} completed · {path.xp} XP · {path.stars} stars</p>
      <progress className="mt-2 w-full" aria-label={`${path.title} completed`} value={path.completed} max={path.total} />
      <p className="mt-2 text-sm text-slate-300">{path.strong} strong answers · {path.review} answers to revisit</p>
    </section>)}</div>
    <p className="my-4 text-xs text-slate-300">Answer counts include completed attempts and practice. They are not mastery ratings.</p>
    <button className="app-button app-button-secondary" onClick={signOut}>Sign out</button>
  </main></div>;
}
