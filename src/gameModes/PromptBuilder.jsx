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
    () =>
      getSelectedOptions(round.categories, selectedBlocks),
    [round.categories, selectedBlocks]
  );

  const promptPreview = selectedOptions
    .map((option) => option.text)
    .join(" ");

  const roundScore = getPromptBuilderRoundScore(selectedOptions);

  const maxRoundScore = getPromptBuilderMaxRoundScore(round.categories);

  const maxScore = rounds.reduce(
    (score, currentRound) =>
      score + getPromptBuilderMaxRoundScore(currentRound.categories),
    0
  );

  const allCategoriesSelected =
    selectedOptions.length === round.categories.length;

  const selectBlock = (categoryId, optionId) => {
    if (submitted) return;

    setSelectedBlocks((currentBlocks) => ({
      ...currentBlocks,
      [categoryId]: optionId,
    }));
  };

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

          <div className="app-surface rounded-2xl p-4 mb-4">
            <p className="text-sm text-cyan-300 mb-2">
              Goal
            </p>

            <p>
              {round.goal}
            </p>
          </div>

          <div className="space-y-4">
            {round.categories.map((category) => (
              <div key={category.id}>
                <p className="text-sm font-bold text-slate-300 mb-2">
                  {category.label}
                </p>

                <div className="grid gap-2">
                  {category.options.map((option) => {
                    const selected =
                      selectedBlocks[category.id] === option.id;

                    return (
                      <button
                        key={option.id}
                        disabled={submitted}
                        onClick={() =>
                          selectBlock(category.id, option.id)
                        }
                        className={`rounded-xl border p-3 text-left ${
                          selected
                            ? "border-cyan-300 bg-cyan-500/20 text-white"
                            : "border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300"
                        }`}
                      >
                        <span className="block font-bold">
                          {option.label}
                        </span>
                        <span className="block text-sm text-slate-400">
                          {option.text}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="app-inset-surface rounded-2xl p-4 mt-5 mb-4">
            <p className="text-sm text-cyan-300 mb-2">
              Prompt Preview
            </p>

            <p className="text-slate-300">
              {promptPreview || placeholder}
            </p>
          </div>

          <button
            disabled={!allCategoriesSelected || submitted}
            onClick={submitPrompt}
            className="app-button app-button-primary"
          >
            {submitLabel}
          </button>

          {submitted && (
            <div className="app-surface mt-5 rounded-2xl p-4">
              <h2 className="text-2xl font-bold mb-2">
                {roundScore}/{maxRoundScore} points
              </h2>

              <p className="text-slate-300 mb-3">
                {round.concept}
              </p>

              <div className="space-y-2">
                {round.categories.map((category) => {
                  const selectedOption = category.options.find(
                    (option) =>
                      option.id === selectedBlocks[category.id]
                  );

                  return (
                    <div
                      key={category.id}
                      className="app-inset-surface rounded-xl p-3"
                    >
                      <p className="text-xs font-bold uppercase text-cyan-300">
                        {category.label}
                      </p>

                      <p className="text-sm text-slate-300">
                        {selectedOption.feedback}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 grid gap-3">
                {roundScore < maxRoundScore && (
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
