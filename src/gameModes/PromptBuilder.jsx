import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  getPromptBuilderMaxRoundScore,
  getPromptBuilderRoundScore,
  getSelectedOptions,
  getStarsFromScore,
} from "../utils/scoring";

export default function PromptBuilder({
  level,
  goBack,
  finishLevel,
}) {
  const [roundIndex, setRoundIndex] = useState(0);
  const [selectedBlocks, setSelectedBlocks] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const {
    instructions,
    placeholder,
    rounds,
    starThresholds,
    submitLabel,
  } = level.content;

  const round = rounds[roundIndex];
  const selectedOptions = useMemo(
    () => getSelectedOptions(round.categories, selectedBlocks),
    [round.categories, selectedBlocks]
  );
  const roundScore = getPromptBuilderRoundScore(selectedOptions);
  const maxRoundScore = getPromptBuilderMaxRoundScore(round.categories);
  const maxScore = rounds.reduce(
    (total, currentRound) =>
      total + getPromptBuilderMaxRoundScore(currentRound.categories),
    0
  );
  const promptPreview = selectedOptions
    .map((option) => option.text)
    .join(" ");
  const readyToSubmit =
    selectedOptions.length === round.categories.length;

  const selectBlock = (categoryId, optionId) => {
    if (submitted) return;

    setSelectedBlocks((currentBlocks) => ({
      ...currentBlocks,
      [categoryId]: optionId,
    }));
  };

  const submitPrompt = () => {
    if (!readyToSubmit) return;

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
    setSelectedBlocks({});
    setSubmitted(false);
  };

  return (
    <div className="app-screen min-h-screen flex items-center justify-center p-4 py-8 text-white">
      <div className="app-panel w-full max-w-md rounded-2xl overflow-hidden">
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
          <div className="app-surface mb-4 rounded-2xl p-4">
            <p className="mb-2 text-xs font-bold uppercase text-cyan-300">
              Goal
            </p>

            <p className="text-slate-200">
              {round.goal}
            </p>
          </div>

          <div className="app-inset-surface mb-5 rounded-2xl p-4">
            <p className="mb-2 text-xs font-bold uppercase text-violet-300">
              Prompt Preview
            </p>

            <AnimatePresence mode="popLayout">
              {selectedOptions.length > 0 ? (
                <motion.p
                  key={promptPreview}
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="text-sm leading-relaxed text-slate-200"
                >
                  {promptPreview}
                </motion.p>
              ) : (
                <motion.p
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-slate-500"
                >
                  {placeholder}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-4">
            {round.categories.map((category) => (
              <div key={category.id}>
                <p className="mb-2 text-xs font-bold uppercase text-slate-400">
                  {category.label}
                </p>

                <div className="grid gap-2">
                  {category.options.map((option) => {
                    const selected =
                      selectedBlocks[category.id] === option.id;

                    return (
                      <motion.button
                        key={option.id}
                        type="button"
                        disabled={submitted}
                        onClick={() => selectBlock(category.id, option.id)}
                        whileTap={{ scale: 0.98 }}
                        animate={
                          selected
                            ? {
                                scale: [1, 1.015, 1],
                                boxShadow:
                                  "0 0 18px rgba(103, 232, 249, 0.22)",
                              }
                            : { scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" }
                        }
                        transition={{ duration: 0.2 }}
                        className={`rounded-xl border p-3 text-left text-sm transition ${
                          selected
                            ? "border-cyan-300/70 bg-cyan-300/15 text-white"
                            : "border-slate-700/80 bg-slate-950/35 text-slate-300 hover:border-cyan-300/35"
                        }`}
                      >
                        <span className="block font-bold">
                          {option.label}
                        </span>
                        <span className="mt-1 block leading-relaxed">
                          {option.text}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <button
            disabled={!readyToSubmit || submitted}
            onClick={submitPrompt}
            className="app-button app-button-primary mt-5"
          >
            {submitLabel}
          </button>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24 }}
              className="app-surface mt-5 rounded-2xl p-4"
            >
              <h2 className="mb-2 text-2xl font-bold">
                {roundScore}/{maxRoundScore} points
              </h2>

              <p className="mb-3 text-slate-300">
                {round.concept}
              </p>

              <div className="space-y-2">
                {selectedOptions.map((option) => (
                  <div
                    key={option.id}
                    className="app-inset-surface rounded-xl p-3"
                  >
                    <p className="text-sm font-bold text-cyan-200">
                      {option.label}
                    </p>

                    <p className="mt-1 text-sm text-slate-300">
                      {option.feedback}
                    </p>
                  </div>
                ))}
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
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
