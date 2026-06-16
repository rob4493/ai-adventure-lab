import { useMemo, useState } from "react";
import {
  getCriteriaScore,
  getMatchedCriteria,
  getStarsFromScore,
} from "../utils/scoring";

export default function PromptFix({
  level,
  goBack,
  finishLevel,
}) {
  const [roundIndex, setRoundIndex] = useState(0);
  const [prompt, setPrompt] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const {
    missionLabel,
    placeholder,
    rounds,
    starThresholds,
  } = level.content;

  const round = rounds[roundIndex];
  const maxRoundScore = getCriteriaScore(round.criteria);
  const maxScore = rounds.reduce(
    (total, currentRound) =>
      total + getCriteriaScore(currentRound.criteria),
    0
  );

  const matchedCriteria = useMemo(() => {
    return getMatchedCriteria(prompt, round.criteria);
  }, [prompt, round.criteria]);

  const roundScore = matchedCriteria.reduce(
    (total, criterion) => total + criterion.points,
    0
  );

  const submitPrompt = () => {
    setSubmitted(true);
  };

  const tryAgain = () => {
    setSubmitted(false);
  };

  const continueLevel = () => {
    const nextScore = totalScore + roundScore;

    if (roundIndex === rounds.length - 1) {
      finishLevel(
        nextScore,
        getStarsFromScore(nextScore, maxScore, starThresholds),
        maxScore
      );
      return;
    }

    setTotalScore(nextScore);
    setRoundIndex((currentIndex) => currentIndex + 1);
    setPrompt("");
    setSubmitted(false);
  };

  return (
    <div className="app-screen min-h-screen flex items-center justify-center p-4 py-8 text-white">

      <div className="app-panel w-full max-w-sm rounded-2xl overflow-hidden">

        <div className="app-mode-header p-5">

          <button
            onClick={goBack}
            className="app-back-button mb-4"
          >
            &lt; Back
          </button>

          <h1 className="text-2xl font-bold">
            {level.title}
          </h1>

          <p className="text-white/60 text-sm">
            Round {roundIndex + 1} of {rounds.length}
          </p>

          <p className="text-white/70">
            {level.world}
          </p>
        </div>

        <div className="p-5">

          <div className="app-surface rounded-2xl p-4 mb-4">

            <p className="text-sm text-slate-400 mb-2">
              {missionLabel}
            </p>

            <p>
              {round.instructions}
            </p>

            <div className="app-inset-surface rounded-xl p-3 mt-3">
              "{round.originalPrompt}"
            </div>
          </div>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={placeholder}
            disabled={submitted}
            className="w-full min-h-36 rounded-2xl bg-slate-950/60 border border-slate-700/90 p-3 mb-4 text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
          />

          <button
            disabled={submitted}
            onClick={submitPrompt}
            className="app-button app-button-primary"
          >
            Submit Prompt
          </button>

          {submitted && (
            <div className="app-surface mt-5 rounded-2xl p-4">
              <h2 className="text-2xl font-bold mb-2">
                {roundScore}/{maxRoundScore} points
              </h2>

              <p className="text-slate-300 mb-3">
                {round.concept}
              </p>

              <div className="app-inset-surface mb-3 rounded-xl p-3">
                <p className="text-xs font-bold uppercase text-violet-300">
                  What This Teaches
                </p>

                <p className="text-sm text-slate-300">
                  Strong prompts give the AI a clear task, context,
                  constraints, and output format.
                </p>
              </div>

              <div className="mb-3 rounded-xl bg-violet-500/10 border border-violet-400/30 p-3">
                <p className="text-xs font-bold uppercase text-violet-300">
                  40/40 Example
                </p>

                <p className="text-sm text-slate-200">
                  "{round.examplePrompt}"
                </p>
              </div>

              <div className="space-y-2">
                {round.criteria.map((criterion) => {
                  const matched = matchedCriteria.includes(criterion);

                  return (
                    <div
                      key={criterion.phrase}
                      className={
                        matched ? "text-emerald-300" : "text-slate-400"
                      }
                    >
                      {matched ? "Included: " : "Missing: "}
                      {criterion.label}
                    </div>
                  );
                })}
              </div>

              <button
                onClick={continueLevel}
                className="app-button app-button-primary mt-4"
              >
                {roundIndex === rounds.length - 1
                  ? "Finish Level"
                  : "Next Round"}
              </button>

              {roundScore < maxRoundScore && (
                <button
                  onClick={tryAgain}
                  className="app-button app-button-secondary mt-3"
                >
                  Try Again
                </button>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
