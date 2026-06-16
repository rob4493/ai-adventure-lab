import { useState } from "react";
import {
  getQuizRoundScore,
  getStarsFromScore,
} from "../utils/scoring";

export default function HallucinationHunt({
  level,
  goBack,
  finishLevel,
}) {
  const [roundIndex, setRoundIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [pendingScore, setPendingScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const {
    instructions,
    options,
    rounds,
    scoring,
  } = level.content;

  const round = rounds[roundIndex];
  const maxScore = rounds.length * scoring.correctScore;

  const chooseAnswer = (answer) => {
    const isCorrect = answer === round.correctAnswer;
    const roundScore = getQuizRoundScore(
      isCorrect,
      attempts,
      scoring
    );

    setCorrect(isCorrect);
    setPendingScore(roundScore);
    setAnswered(true);
  };

  const tryAgain = () => {
    setAttempts((currentAttempts) => currentAttempts + 1);
    setAnswered(false);
    setCorrect(false);
    setPendingScore(0);
  };

  const continueLevel = () => {
    const nextScore = totalScore + pendingScore;

    if (roundIndex === rounds.length - 1) {
      finishLevel(
        nextScore,
        getStarsFromScore(nextScore, maxScore),
        maxScore
      );
      return;
    }

    setTotalScore(nextScore);
    setRoundIndex((currentIndex) => currentIndex + 1);
    setAnswered(false);
    setCorrect(false);
    setAttempts(0);
    setPendingScore(0);
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
            {instructions}
          </p>
        </div>

        <div className="p-5">

          <div className="app-surface rounded-2xl p-5 mb-5">
            <p className="text-lg leading-relaxed">
              "{round.fact}"
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">

            {options.map((option) => (
              <button
                key={option.label}
                disabled={answered}
                onClick={() => chooseAnswer(option.value)}
                className={`rounded-2xl ${option.className} p-4 font-bold`}
              >
                {option.label}
              </button>
            ))}

          </div>

          {answered && (
            <div className="app-surface mt-5 rounded-2xl p-4 text-center">

              <h2 className="text-2xl font-bold mb-2">
                {correct ? "Correct!" : "Not Quite"}
              </h2>

              <p className="text-slate-300 mb-3">
                {correct
                  ? round.feedback.correct
                  : round.feedback.incorrect}
              </p>

              <div className="app-inset-surface rounded-xl p-3 text-left">
                <p className="text-xs font-bold uppercase text-rose-300">
                  Concept
                </p>

                <p className="text-sm text-slate-300">
                  {round.concept}
                </p>
              </div>

              <div className="mt-4 grid gap-3">
                {!correct && (
                  <button
                    onClick={tryAgain}
                    className="app-button app-button-secondary"
                  >
                    Try Again
                  </button>
                )}

                <button
                  onClick={continueLevel}
                  className="app-button app-button-primary"
                >
                  {roundIndex === rounds.length - 1
                    ? "Finish Level"
                    : "Next Round"}
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
