import { motion } from "framer-motion";
import {
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  MessageSquare,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";
import ElementaryGuideCard from "../components/ElementaryGuideCard";
import {
  getQuizRoundScore,
  getStarsFromScore,
} from "../utils/scoring";
import { createLevelReviewSummary } from "../utils/reviewSummary";

const optionStyles = [
  {
    accent: "text-cyan-200",
    glow: "rgba(103, 232, 249, 0.34)",
    ring: "border-cyan-300/45",
    selected: "border-cyan-300/80 bg-cyan-300/15",
  },
  {
    accent: "text-violet-200",
    glow: "rgba(196, 181, 253, 0.32)",
    ring: "border-violet-300/45",
    selected: "border-violet-300/80 bg-violet-300/15",
  },
  {
    accent: "text-amber-200",
    glow: "rgba(251, 191, 36, 0.3)",
    ring: "border-amber-300/45",
    selected: "border-amber-300/80 bg-amber-300/15",
  },
];

// Elementary keeps the same choice behavior with its own cyan, mint, and coral palette.
const elementaryOptionStyles = [
  {
    accent: "text-cyan-100",
    glow: "rgba(34, 211, 238, 0.34)",
    ring: "border-cyan-300/45",
    selected: "border-cyan-300/80 bg-cyan-300/15",
  },
  {
    accent: "text-emerald-100",
    glow: "rgba(110, 231, 183, 0.32)",
    ring: "border-emerald-300/45",
    selected: "border-emerald-300/80 bg-emerald-300/15",
  },
  {
    accent: "text-rose-100",
    glow: "rgba(251, 113, 133, 0.3)",
    ring: "border-rose-300/45",
    selected: "border-rose-300/80 bg-rose-300/15",
  },
];

export default function QuestionChoice({
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
  const [showGuidance, setShowGuidance] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [roundReviews, setRoundReviews] = useState([]);

  const {
    aiResponseLabel = "AI Response",
    conceptLabel = "Concept",
    guidance = null,
    guidanceLabel = "Guide Tip",
    guidedFirstRound = false,
    instructions,
    initialPromptLabel = "Initial Prompt",
    rounds,
    scoring,
    retryTitle = "Try Again",
    scenarioLabel = "Scenario",
    successTitle = "Correct!",
  } = level.content;

  const round = rounds[roundIndex];
  const isElementaryTheme = level.theme === "elementary";
  const isGuidedRound = guidedFirstRound && roundIndex === 0;
  const roundGuidance = round.guidance ?? guidance;
  // The first round teaches the interaction; later rounds reveal help on request.
  const guidanceVisible =
    Boolean(roundGuidance) && (isGuidedRound || showGuidance);
  const selectedOption = round.options.find(
    (option) => option.id === selectedAnswer
  );
  const visibleOptions =
    answered && correct && selectedAnswer
      ? round.options.filter((option) => option.id === selectedAnswer)
      : round.options;
  const maxScore = rounds.length * scoring.correctScore;

  // Score is held pending until the player continues, so retries do not double-count.
  const chooseAnswer = (answer) => {
    const isCorrect = answer === round.correctAnswer;
    // Guided first rounds teach the interaction before retries begin affecting score.
    const roundScore = getQuizRoundScore(
      isCorrect,
      isGuidedRound ? 0 : attempts,
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

  // Each completed round records both score and concept strength for later review.
  const continueLevel = () => {
    const nextScore = totalScore + pendingScore;
    const nextRoundReviews = [
      ...roundReviews,
      {
        concept: round.concept,
        status:
          correct && (attempts === 0 || isGuidedRound)
            ? "strong"
            : "review",
        topic: round.topic ?? level.skill,
      },
    ];

    if (roundIndex === rounds.length - 1) {
      finishLevel(
        nextScore,
        getStarsFromScore(nextScore, maxScore),
        maxScore,
        createLevelReviewSummary({
          maxScore,
          roundReviews: nextRoundReviews,
          score: nextScore,
        })
      );
      return;
    }

    setTotalScore(nextScore);
    setRoundReviews(nextRoundReviews);
    setRoundIndex((currentIndex) => currentIndex + 1);
    setAnswered(false);
    setCorrect(false);
    setAttempts(0);
    setSelectedAnswer(null);
    setPendingScore(0);
    setShowGuidance(false);
  };

  return (
    <div className={`app-screen min-h-screen flex items-center justify-center p-4 py-8 text-white ${
      isElementaryTheme ? "elementary-theme" : ""
    }`}>

      <div className="app-panel w-full max-w-md rounded-2xl overflow-hidden">

        <div className="app-mode-header p-5">

          <button
            aria-label="Back to level select"
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

          {isGuidedRound && (
            <p className="mt-1 text-sm font-bold text-cyan-100">
              Guided round - try again without losing points.
            </p>
          )}

          <p className="text-white/70">
            {instructions}
          </p>
        </div>

        <div className="p-5">

          <div className="app-surface rounded-2xl p-5 mb-5">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
              <MessageSquare size={23} aria-hidden="true" />
            </div>

            <p className="text-sm font-bold uppercase text-cyan-200">
              {scenarioLabel}
            </p>

            <p className="mt-2 text-lg leading-relaxed text-white">
              "{round.scenario}"
            </p>

            {round.initialPrompt && (
              <div className="app-inset-surface mt-4 rounded-xl border border-cyan-300/25 p-3 text-left">
                <p className="text-xs font-bold uppercase text-cyan-200">
                  {round.initialPromptLabel ?? initialPromptLabel}
                </p>

                <p className="mt-1 text-sm leading-relaxed text-slate-200">
                  "{round.initialPrompt}"
                </p>
              </div>
            )}

            {round.aiResponse && (
              <div className={`app-inset-surface mt-4 rounded-xl border p-3 text-left ${
                isElementaryTheme ? "border-rose-300/25" : "border-amber-300/25"
              }`}>
                <p className={`text-xs font-bold uppercase ${
                  isElementaryTheme ? "text-rose-200" : "text-amber-200"
                }`}>
                  {aiResponseLabel}
                </p>

                <p className="mt-1 text-sm leading-relaxed text-slate-200">
                  "{round.aiResponse}"
                </p>
              </div>
            )}

            {guidanceVisible && (
              isElementaryTheme ? (
                <ElementaryGuideCard className="mt-4" label={guidanceLabel}>
                  {roundGuidance}
                </ElementaryGuideCard>
              ) : (
                <div className="mt-4 rounded-xl border border-violet-300/25 bg-violet-300/10 p-3 text-left">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase text-violet-200">
                    <Lightbulb size={15} aria-hidden="true" />
                    {guidanceLabel}
                  </p>

                  <p className="mt-1 text-sm leading-relaxed text-slate-200">
                    {roundGuidance}
                  </p>
                </div>
              )
            )}

            <p className="mt-4 text-base font-bold text-white">
              {round.prompt}
            </p>
          </div>

          {roundGuidance && !guidanceVisible && !answered && (
            <button
              onClick={() => setShowGuidance(true)}
              className="app-button app-button-ghost mb-4"
            >
              <Lightbulb size={17} aria-hidden="true" />
              Need a Hint?
            </button>
          )}

          <div className="grid gap-3">

            {visibleOptions.map((option, index) => {
              // Theme-specific styles avoid changing the shared mode for older audiences.
              const styles = isElementaryTheme
                ? elementaryOptionStyles
                : optionStyles;
              const style = styles[index % styles.length];
              const isSelected = selectedAnswer === option.id;

              return (
                <motion.button
                  key={option.id}
                  aria-pressed={isSelected}
                  disabled={answered}
                  onClick={() => chooseAnswer(option.id)}
                  whileHover={!answered ? { y: -2 } : undefined}
                  whileTap={!answered ? { scale: 0.99 } : undefined}
                  animate={
                    isSelected
                      ? {
                          scale: [1, 1.02, 1],
                          boxShadow: correct
                            ? [
                                "0 0 0 rgba(52, 211, 153, 0)",
                                "0 0 24px rgba(52, 211, 153, 0.45)",
                                "0 0 10px rgba(52, 211, 153, 0.2)",
                              ]
                            : [
                                "0 0 0 rgba(251, 191, 36, 0)",
                                `0 0 22px ${style.glow}`,
                                `0 0 10px ${style.glow}`,
                              ],
                        }
                      : { scale: 1 }
                  }
                  transition={{ duration: 0.32 }}
                  className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition disabled:cursor-not-allowed ${
                    isSelected
                      ? style.selected
                      : `app-inset-surface ${style.ring} hover:bg-slate-900/70`
                  } ${answered && !isSelected ? "opacity-55" : ""}`}
                >
                  <span
                    className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at 18% 20%, ${style.glow}, transparent 58%)`,
                    }}
                  />

                  <span className="relative flex items-start gap-3">
                    <span
                      className={`mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 ${style.accent}`}
                    >
                      <HelpCircle size={19} aria-hidden="true" />
                    </span>

                    <span className="text-base font-bold leading-snug text-white">
                      {option.label}
                    </span>
                  </span>
                </motion.button>
              );
            })}

          </div>

          {answered && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="app-surface mt-5 rounded-2xl p-4 text-center"
            >

              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-300/25 bg-emerald-300/10 text-emerald-100">
                {correct ? (
                  <CheckCircle2 size={23} aria-hidden="true" />
                ) : (
                  <RotateCcw size={22} aria-hidden="true" />
                )}
              </div>

              <h2 className="text-2xl font-bold mb-2">
                {correct ? successTitle : retryTitle}
              </h2>

              <p className="text-slate-300 mb-3">
                {selectedOption?.feedback}
              </p>

              {correct && round.betterResponse && (
                <div className="app-inset-surface mb-3 rounded-xl border border-emerald-300/25 p-3 text-left">
                  <p className="text-xs font-bold uppercase text-emerald-300">
                    AI Should Have Responded
                  </p>

                  <p className="mt-1 text-sm leading-relaxed text-slate-200">
                    "{round.betterResponse}"
                  </p>
                </div>
              )}

              <div className="app-inset-surface rounded-xl p-3 text-left">
                <p className="text-xs font-bold uppercase text-cyan-300">
                  {conceptLabel}
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
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}
