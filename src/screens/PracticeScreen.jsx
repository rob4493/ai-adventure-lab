import { useState } from "react";
import GameplayScreen from "./GameplayScreen";

export default function PracticeScreen({ session, goBack, finishPractice }) {
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [done, setDone] = useState(false);

  const completeRound = (...result) => {
    // Shared gameplay returns score, stars, max score, then the review.
    const summary = result[3];
    const nextResults = [...results, ...summary.conceptResults];
    setResults(nextResults);
    if (index + 1 === session.rounds.length) {
      finishPractice(session.topic, nextResults);
      setDone(true);
    } else setIndex(index + 1);
  };

  if (done) return (
    <main className="app-screen min-h-screen p-6 text-white">
      <section className="app-panel mx-auto max-w-md rounded-2xl p-6">
        <h1 className="text-2xl font-bold">Practice complete</h1>
        <p className="mt-3">{session.topic}</p>
        <p className="mt-3">{results.filter((result) => result.status === "strong").length} of {results.length} rounds strong on the first try.</p>
        <p className="mt-3 text-slate-300">Every attempt helps you learn. Your level scores and unlocks stay the same.</p>
        <ul className="my-4 space-y-2">{[...new Set(results.map((result) => result.concept))].map((concept) => <li key={concept}>{concept}</li>)}</ul>
        <button className="app-button app-button-primary" onClick={goBack}>Back to Review Hub</button>
      </section>
    </main>
  );

  return (
    <>
      <div className="bg-slate-950 p-3 text-center text-white" role="status">
        Skill practice · {index + 1} of {session.rounds.length} · No XP or stars.
        <p className="text-sm">Finish the session to save your practice results.</p>
      </div>
      <GameplayScreen key={index} level={session.rounds[index]} goBack={goBack} finishLevel={completeRound} />
    </>
  );
}
