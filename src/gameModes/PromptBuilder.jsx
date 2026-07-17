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
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedBlocks, setSelectedBlocks] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const {
    instructions,
    rounds,
    starThresholds,
    submitLabel,
  } = level.content;

  const round = rounds[roundIndex];
  const currentCategory = round.categories[stepIndex];
  const currentSelection = selectedBlocks[currentCategory.id];
  const selectedOptions = useMemo(
    () => getSelectedOptions(round.categories, selectedBlocks),
    [round.categories, selectedBlocks]
  );
  const strongestOptions = useMemo(
    () =>
      round.categories.map((category) =>
        category.options.reduce((bestOption, option) =>
          option.points > bestOption.points ? option : bestOption
        )
      ),
    [round.categories]
  );
  const previewRows = round.categories.map((category) => ({
    category,
    option: category.options.find(
      (option) => option.id === selectedBlocks[category.id]
    ),
  }));
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
  const strongestPromptPreview = strongestOptions
    .map((option) => option.text)
    .join(" ");
  const readyToSubmit =
    selectedOptions.length === round.categories.length;
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === round.categories.length - 1;
  const currentStepComplete = Boolean(currentSelection);

  const selectBlock = (categoryId, optionId) => {
    if (submitted) return;

    setSelectedBlocks((currentBlocks) => ({
      ...currentBlocks,
      [categoryId]: optionId,
    }));
  };

  const goToPreviousStep = () => {
    if (submitted || isFirstStep) return;

    setStepIndex((currentIndex) => currentIndex - 1);
  };

  const goToNextStep = () => {
    if (submitted || !currentStepComplete || isLastStep) return;

    setStepIndex((currentIndex) => currentIndex + 1);
  };

  const submitPrompt = () => {
    if (!readyToSubmit) return;

    setSubmitted(true);
  };

  const tryAgain = () => {
    setSubmitted(false);
    setStepIndex(0);
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
    setStepIndex(0);
    setSelectedBlocks({});
    setSubmitted(false);
  };

  return (
    <div className="app-screen min-h-screen flex items-center justify-center p-4 py-8 text-white">
      <div className="app-panel w-full max-w-md overflow-hidden rounded-2xl lg:max-w-5xl">
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

        <div className="p-5 lg:p-6">
          <div className="app-surface mb-4 rounded-2xl p-4">
            <p className="mb-2 text-xs font-bold uppercase text-cyan-300">
              Goal
            </p>

            <p className="text-slate-200">
              {round.goal}
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)] lg:items-start">
            <div className="app-surface rounded-2xl p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase text-cyan-300">
                    Step {stepIndex + 1} of {round.categories.length}
                  </p>

                  <h2 className="mt-1 text-xl font-black text-white">
                    Choose {currentCategory.label}
                  </h2>
                </div>

                <div className="flex gap-1.5">
                  {round.categories.map((category, index) => (
                    <span
                      key={category.id}
                      className={`h-2.5 w-2.5 rounded-full ${
                        index === stepIndex
                          ? "bg-cyan-200"
                          : selectedBlocks[category.id]
                            ? "bg-emerald-300"
                            : "bg-slate-700"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid gap-2">
                {currentCategory.options.map((option) => {
                  const selected = currentSelection === option.id;

                  return (
                    <motion.button
                      key={option.id}
                      type="button"
                      disabled={submitted}
                      onClick={() =>
                        selectBlock(currentCategory.id, option.id)
                      }
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

              <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  disabled={isFirstStep || submitted}
                  onClick={goToPreviousStep}
                  className="app-button app-button-secondary disabled:cursor-not-allowed disabled:opacity-45"
                >
                  Back
                </button>

                {!isLastStep ? (
                  <button
                    type="button"
                    disabled={!currentStepComplete || submitted}
                    onClick={goToNextStep}
                    className="app-button app-button-primary disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={!readyToSubmit || submitted}
                    onClick={submitPrompt}
                    className="app-button app-button-primary disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    {submitLabel}
                  </button>
                )}
              </div>
            </div>

            <div className="app-inset-surface rounded-2xl p-4 lg:sticky lg:top-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase text-violet-300">
                  Live Prompt Preview
                </p>

                <p className="text-xs font-bold text-slate-500">
                  {selectedOptions.length}/{round.categories.length} blocks
                </p>
              </div>

              <div className="space-y-2">
                {previewRows.map(({ category, option }) => (
                  <motion.div
                    key={category.id}
                    layout
                    className={`rounded-xl border p-3 ${
                      option
                        ? "border-cyan-300/25 bg-cyan-300/10"
                        : "border-slate-700/60 bg-slate-950/25"
                    }`}
                  >
                    <p className="mb-1 text-[11px] font-bold uppercase text-slate-500">
                      {category.label}
                    </p>

                    <AnimatePresence mode="wait">
                      <motion.p
                        key={option?.id ?? `${category.id}-empty`}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.16 }}
                        className={`text-sm leading-relaxed ${
                          option ? "text-slate-100" : "text-slate-600"
                        }`}
                      >
                        {option?.text ?? `[Choose ${category.label.toLowerCase()}]`}
                      </motion.p>
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {selectedOptions.length > 0 && (
                <div className="mt-3 rounded-xl border border-violet-300/20 bg-violet-300/10 p-3">
                  <p className="mb-1 text-[11px] font-bold uppercase text-violet-200">
                    Assembled Prompt
                  </p>

                  <p className="text-sm leading-relaxed text-slate-200">
                    {promptPreview}
                  </p>
                </div>
              )}
            </div>
          </div>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24 }}
              className="app-surface mt-5 rounded-2xl p-4"
            >
              <div className="mb-4 grid gap-3 lg:grid-cols-2">
                <div className="app-inset-surface rounded-xl border border-amber-300/20 p-3">
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <p className="text-xs font-bold uppercase text-amber-200">
                      Your Prompt
                    </p>

                    <p className="shrink-0 text-lg font-black text-white">
                      {roundScore}/{maxRoundScore}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-300">
                    {promptPreview}
                  </p>
                </div>

                {roundScore < maxRoundScore && (
                  <div className="app-inset-surface rounded-xl border border-emerald-300/25 p-3">
                    <p className="text-xs font-bold uppercase text-emerald-300">
                      Stronger Prompt
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-slate-200">
                      {strongestPromptPreview}
                    </p>
                  </div>
                )}
              </div>

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
