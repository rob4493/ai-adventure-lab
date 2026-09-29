import PathHeader from "../components/PathHeader";
import MissionHeader from "../components/MissionHeader";
import RetryFeedback from "../components/RetryFeedback";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  SearchCheck,
  ShieldQuestion,
} from "lucide-react";
import { useState } from "react";
import ElementaryGuideCard from "../components/ElementaryGuideCard";
import {
  getQuizRoundScore,
  getStarsFromScore,
} from "../utils/scoring";
import { createLevelReviewSummary } from "../utils/reviewSummary";

// Map answer labels to visual cues because this mode reuses true/false and reliable/risky choices.
const getAnswerTileStyle = (option, isElementaryTheme) => {
  const label = option.label.toLowerCase();

  if (label === "true" || label === "matches") {
    return {
      Icon: CheckCircle2,
      accent: "text-emerald-200",
      glow: "rgba(52, 211, 153, 0.32)",
      ring: "border-emerald-300/45",
      selected: "border-emerald-300/80 bg-emerald-300/15",
      subtitle: "Supported by the facts",
    };
  }

  if (label === "false" || label === "doesn't match") {
    if (isElementaryTheme) {
      return {
        Icon: AlertTriangle,
        accent: "text-rose-200",
        glow: "rgba(251, 113, 133, 0.32)",
        ring: "border-rose-300/45",
        selected: "border-rose-300/80 bg-rose-300/15",
        subtitle: "A clue that does not match",
      };
    }

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
  const [showGuidance, setShowGuidance] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [roundReviews, setRoundReviews] = useState([]);

  const {
    aiResponseLabel = "AI Response",
    alwaysShowGuidance = false,
    conceptLabel = "Concept",
    guidance = null,
    guidanceLabel = "Guide Tip",
    guidedFirstRound = false,
    instructions,
    options,
    rounds,
    scoring,
    studentPromptLabel = "Student Prompt",
  } = level.content;

  const round = rounds[roundIndex];
  const isGuidedRound = guidedFirstRound && roundIndex === 0;
  const roundGuidance = round.guidance ?? guidance;
  const isElementaryTheme = level.theme === "elementary";
  // Fact-check clues stay visible; optional hints appear only when requested.
  const guidanceVisible =
    Boolean(roundGuidance) &&
    (alwaysShowGuidance || isGuidedRound || showGuidance);
  const hasPromptResponse = Boolean(
    round.studentPrompt || round.aiResponse
  );
  const maxScore = rounds.length * scoring.correctScore;

  // Store the round result until the player reads feedback and continues.
  const chooseAnswer = (answer) => {
    const isCorrect = answer === round.correctAnswer;
    // The first guided round keeps full credit after a retry so exploration is not punished.
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
    setAttempts((tries) => tries + 1);
    setAnswered(false);
    setCorrect(false);
    setSelectedAnswer(null);
    setPendingScore(0);
  };

  // First-try correct answers become strengths; retries or misses become review items.
  const continueLevel = () => {
    const nextScore = totalScore + pendingScore;
    const nextReviews = [
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
          roundReviews: nextReviews,
          score: nextScore,
        })
      );
      return;
    }

    setTotalScore(nextScore);
    setRoundReviews(nextReviews);
    setRoundIndex((index) => index + 1);
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

      <div className="app-panel w-full max-w-sm rounded-2xl overflow-hidden">

        {isElementaryTheme && <MissionHeader level={level} round={roundIndex + 1} total={rounds.length} guided={isGuidedRound} goBack={goBack} />}
        {["middle", "high", "college"].includes(level.theme) ? (
          <PathHeader level={level} round={roundIndex + 1} total={rounds.length} goBack={goBack} />
        ) : (
        <div className={`app-mode-header p-5 ${isElementaryTheme ? "hidden sm:block" : ""}`}>

          <button
            aria-label={level.isPractice ? "Back to Review Hub" : "Back to level select"}
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
        )}

        <div className="p-5">

          <div className="app-surface rounded-2xl p-5 mb-5">
            {hasPromptResponse ? (
              <div className="space-y-4">
                <div className="app-inset-surface rounded-xl border border-cyan-300/25 p-3 text-left">
                  <p className="text-xs font-bold uppercase text-cyan-200">
                    {studentPromptLabel}
                  </p>

                  <p className="mt-1 text-sm leading-relaxed text-slate-200">
                    "{round.studentPrompt}"
                  </p>
                </div>

                <div className={`app-inset-surface rounded-xl border p-3 text-left ${
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

                {guidanceVisible && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97, y: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className={isElementaryTheme
                      ? ""
                      : "rounded-xl border border-violet-300/25 bg-violet-300/10 p-3 text-left"
                    }
                  >
                    {isElementaryTheme ? (
                      // Elementary guidance uses the shared fox card; older paths keep their own styling.
                      <ElementaryGuideCard
                        label={guidanceLabel}
                        source={round.guidanceSource}
                      >
                        {roundGuidance}
                      </ElementaryGuideCard>
                    ) : (
                      <>
                        <p className="flex items-center gap-2 text-xs font-black uppercase text-violet-200">
                          <Lightbulb size={15} aria-hidden="true" />
                          {guidanceLabel}
                        </p>

                        {round.guidanceSource && (
                          <p className="mt-2 inline-flex rounded-full border border-violet-200/20 bg-white/10 px-2 py-1 text-[11px] font-black text-violet-100">
                            Source: {round.guidanceSource}
                          </p>
                        )}

                        <p className="mt-2 text-sm font-bold leading-relaxed text-slate-200">
                          {roundGuidance}
                        </p>
                      </>
                    )}
                  </motion.div>
                )}

                <p className="text-base font-bold text-white">
                  {round.prompt ?? "Is the AI response true or false?"}
                </p>
              </div>
            ) : (
              <p className="text-lg leading-relaxed">
                "{round.fact}"
              </p>
            )}
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

          <div className="grid grid-cols-2 gap-3">

            {options.map((option) => {
              const style = getAnswerTileStyle(option, isElementaryTheme);
              const Icon = style.Icon;
              const isSelected = selectedAnswer === option.value;

              return (
                <motion.button
                  key={option.label}
                  aria-pressed={isSelected}
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

              <div>{correct ? <p className="text-slate-300 mb-3">{round.feedback.correct}</p> : <RetryFeedback round={round} level={level} explanation={round.feedback.incorrect} />}</div>

              <div className="app-inset-surface rounded-xl p-3 text-left">
                <p className="text-xs font-bold uppercase text-rose-300">
                  {correct ? conceptLabel : "Next time"}
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
                    ? (level.isPractice ? "Continue Practice" : "Finish Level")
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
