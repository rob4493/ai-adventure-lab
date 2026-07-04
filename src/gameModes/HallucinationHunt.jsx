import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  SearchCheck,
  ShieldQuestion,
} from "lucide-react";
import { useState } from "react";
import {
  getQuizRoundScore,
  getStarsFromScore,
} from "../utils/scoring";

const getAnswerTileStyle = (option) => {
  const label = option.label.toLowerCase();

  if (label === "true") {
    return {
      Icon: CheckCircle2,
      accent: "text-emerald-200",
      glow: "rgba(52, 211, 153, 0.32)",
      ring: "border-emerald-300/45",
      selected: "border-emerald-300/80 bg-emerald-300/15",
      subtitle: "Supported by the facts",
    };
  }

  if (label === "false") {
    return {
      Icon: AlertTriangle,
      accent: "text-amber-200",
      glow: "rgba(251, 191, 36, 0.32)",
      ring: "border-amber-300/45",
      selected: "border-amber-300/80 bg-amber-300/15",
      subtitle: "A claim to challenge",
    };
  }

  if (label === "reliable") {
    return {
      Icon: SearchCheck,
      accent: "text-cyan-200",
      glow: "rgba(103, 232, 249, 0.34)",
      ring: "border-cyan-300/45",
      selected: "border-cyan-300/80 bg-cyan-300/15",
      subtitle: "Good evidence signals",
    };
  }

  return {
    Icon: ShieldQuestion,
    accent: "text-rose-200",
    glow: "rgba(251, 113, 133, 0.3)",
    ring: "border-rose-300/45",
    selected: "border-rose-300/80 bg-rose-300/15",
    subtitle: "Needs more checking",
  };
};

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
  const [selectedAnswer, setSelectedAnswer] = useState(null);
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

    setSelectedAnswer(answer);
    setCorrect(isCorrect);
    setPendingScore(roundScore);
    setAnswered(true);
  };

  const tryAgain = () => {
    setAttempts((currentAttempts) => currentAttempts + 1);
    setAnswered(false);
    setCorrect(false);
    setSelectedAnswer(null);
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
    setSelectedAnswer(null);
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

            {options.map((option) => {
              const style = getAnswerTileStyle(option);
              const Icon = style.Icon;
              const isSelected = selectedAnswer === option.value;

              return (
                <motion.button
                  key={option.label}
                  disabled={answered}
                  onClick={() => chooseAnswer(option.value)}
                  whileHover={!answered ? { y: -2 } : undefined}
                  whileTap={!answered ? { scale: 0.98 } : undefined}
                  animate={
                    isSelected
                      ? {
                          scale: [1, 1.035, 1],
                          boxShadow: correct
                            ? [
                                "0 0 0 rgba(52, 211, 153, 0)",
                                "0 0 24px rgba(52, 211, 153, 0.45)",
                                "0 0 10px rgba(52, 211, 153, 0.2)",
                              ]
                            : [
                                "0 0 0 rgba(251, 191, 36, 0)",
                                `0 0 24px ${style.glow}`,
                                `0 0 10px ${style.glow}`,
                              ],
                        }
                      : { scale: 1 }
                  }
                  transition={{ duration: 0.32 }}
                  className={`group relative min-h-32 overflow-hidden rounded-2xl border p-4 text-left transition disabled:cursor-not-allowed ${
                    isSelected
                      ? style.selected
                      : `app-inset-surface ${style.ring} hover:bg-slate-900/70`
                  } ${answered && !isSelected ? "opacity-55" : ""}`}
                >
                  <span
                    className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at 35% 20%, ${style.glow}, transparent 60%)`,
                    }}
                  />

                  <span className="relative flex h-full flex-col justify-between gap-3">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 ${style.accent}`}
                    >
                      <Icon size={22} aria-hidden="true" />
                    </span>

                    <span>
                      <span className="block text-xl font-black text-white">
                        {option.label}
                      </span>

                      <span className="mt-1 block text-xs font-semibold leading-relaxed text-slate-400">
                        {style.subtitle}
                      </span>
                    </span>
                  </span>
                </motion.button>
              );
            })}

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
