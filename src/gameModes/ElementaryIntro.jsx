import { motion } from "framer-motion";
import {
  BrainCircuit,
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  SearchCheck,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useState } from "react";
import ElementaryGuideCard from "../components/ElementaryGuideCard";
import MissionHeader from "../components/MissionHeader";

const lessonIcons = {
  brain: BrainCircuit,
  help: Lightbulb,
  limits: SearchCheck,
  people: Users,
};

export default function ElementaryIntro({ level, goBack, finishLevel }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const { practice, steps } = level.content;
  const isPractice = stepIndex === steps.length;
  const totalParts = steps.length + 1;
  const step = steps[stepIndex];
  const selectedOption = practice.options.find(
    (option) => option.id === selectedChoice
  );
  const practiceComplete = selectedChoice === practice.correctAnswer;

  // This guided level rewards completion without turning a child's first AI lesson into a scored test.
  const completeTutorial = () => {
    const conceptResult = {
      concept:
        "AI can help with ideas and explanations, but people check answers and make real-world decisions.",
      status: "strong",
      topic: "Getting to know AI",
    };

    finishLevel(50, 3, 50, {
      conceptResults: [conceptResult],
      didWell: [conceptResult.concept],
      needsReview: [],
      reviewTopics: [],
      replayRecommended: false,
      strongTopics: [conceptResult.topic],
    });
  };

  return (
    <div className="app-screen elementary-theme min-h-screen p-4 py-8 text-white">
      <div className="app-panel mx-auto w-full max-w-md overflow-hidden rounded-2xl">
        <MissionHeader level={level} round={stepIndex + 1} total={totalParts} guided goBack={goBack} />
        <div className="app-mode-header hidden p-5 sm:block">
          <button
            aria-label="Back to level select"
            onClick={goBack}
            className="app-back-button mb-4"
          >
            &lt; Back
          </button>

          <p className="text-xs font-black uppercase text-cyan-100">
            Guided Introduction
          </p>

          <h1 className="mt-1 text-2xl font-bold">{level.title}</h1>

          <p className="mt-1 text-sm text-white/70">
            Part {stepIndex + 1} of {totalParts} - no wrong-answer penalty
          </p>

          <div
            aria-label={`Tutorial progress: part ${stepIndex + 1} of ${totalParts}`}
            className="mt-4 flex gap-2"
            role="progressbar"
            aria-valuemin="1"
            aria-valuemax={totalParts}
            aria-valuenow={stepIndex + 1}
          >
            {Array.from({ length: totalParts }, (part, index) => (
              <span
                aria-hidden="true"
                className={`h-2 flex-1 rounded-full transition ${
                  index <= stepIndex ? "bg-cyan-200" : "bg-white/15"
                }`}
                key={index}
              />
            ))}
          </div>
        </div>

        <div className="p-5">
          {!isPractice ? (
            <LessonStep step={step} />
          ) : (
            <GuidedPractice
              practice={practice}
              selectedChoice={selectedChoice}
              selectedOption={selectedOption}
              practiceComplete={practiceComplete}
              chooseOption={setSelectedChoice}
            />
          )}

          <div className="mt-5 grid grid-cols-2 gap-3">
            <button
              onClick={() =>
                stepIndex === 0
                  ? goBack()
                  : setStepIndex((current) => current - 1)
              }
              className="app-button app-button-secondary"
            >
              {stepIndex === 0 ? "Back to Levels" : "Previous"}
            </button>

            {isPractice ? (
              <button
                disabled={!practiceComplete}
                onClick={completeTutorial}
                className="app-button app-button-primary disabled:cursor-not-allowed disabled:opacity-45"
              >
                Finish Tutorial
              </button>
            ) : (
              <button
                onClick={() => setStepIndex((current) => current + 1)}
                className="app-button app-button-primary"
              >
                {stepIndex === steps.length - 1
                  ? "Try It Together"
                  : "Next"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function LessonStep({ step }) {
  const Icon = lessonIcons[step.icon] ?? BrainCircuit;

  return (
    <motion.section
      key={step.heading}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="app-surface rounded-2xl p-5"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-100">
        <Icon size={26} aria-hidden="true" />
      </div>

      <p className="text-xs font-black uppercase text-cyan-200">
        {step.eyebrow}
      </p>

      <h2 className="mt-1 text-2xl font-black text-white">
        {step.heading}
      </h2>

      <p className="mt-3 text-base leading-relaxed text-slate-200">
        {step.body}
      </p>

      <ul className="mt-5 grid gap-3">
        {step.points.map((point) => (
          <li
            className="app-inset-surface flex items-start gap-3 rounded-xl p-3 text-sm leading-relaxed text-slate-200"
            key={point}
          >
            <CheckCircle2
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-emerald-300"
              size={18}
            />
            {point}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}

function GuidedPractice({
  chooseOption,
  practice,
  practiceComplete,
  selectedChoice,
  selectedOption,
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="app-surface rounded-2xl p-5">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-sky-300/30 bg-sky-300/10 text-sky-100">
          <HelpCircle size={26} aria-hidden="true" />
        </div>

        <p className="text-xs font-black uppercase text-sky-200">
          Let&apos;s Try One Together
        </p>

        <h2 className="mt-1 text-xl font-black text-white">
          {practice.heading}
        </h2>

        <div className="app-inset-surface mt-4 rounded-xl border border-cyan-300/25 p-3">
          <p className="text-xs font-black uppercase text-cyan-200">
            What Maya Asked
          </p>
          <p className="mt-1 text-sm leading-relaxed text-slate-200">
            &quot;{practice.studentPrompt}&quot;
          </p>
        </div>

        <div className="app-inset-surface mt-3 rounded-xl border border-rose-300/25 p-3">
          <p className="text-xs font-black uppercase text-rose-200">
            What AI Said
          </p>
          <p className="mt-1 text-sm leading-relaxed text-slate-200">
            &quot;{practice.aiResponse}&quot;
          </p>
        </div>

        <p className="mt-4 font-bold text-white">{practice.prompt}</p>
      </div>

      <div className="mt-4 grid gap-3">
        {practice.options.map((option) => {
          const isSelected = selectedChoice === option.id;
          const isCorrect = option.id === practice.correctAnswer;

          // Wrong choices remain available until the guided answer is found.
          return (
            <button
              aria-pressed={isSelected}
              className={`rounded-2xl border p-4 text-left text-sm font-bold leading-relaxed transition ${
                isSelected && isCorrect
                  ? "border-emerald-300/70 bg-emerald-300/15 text-white"
                  : isSelected
                    ? "border-rose-300/60 bg-rose-300/10 text-white"
                    : "app-inset-surface border-slate-700/70 text-slate-100 hover:border-cyan-300/45"
              }`}
              disabled={practiceComplete}
              key={option.id}
              onClick={() => chooseOption(option.id)}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {selectedOption && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 rounded-2xl border p-4 ${
            practiceComplete
              ? "border-emerald-300/30 bg-emerald-300/10"
              : "border-rose-300/30 bg-rose-300/10"
          }`}
        >
          <div className="flex items-start gap-3">
            {practiceComplete ? (
              <ShieldCheck
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-emerald-200"
                size={22}
              />
            ) : (
              <Lightbulb
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-rose-200"
                size={22}
              />
            )}
            <div>
              <p className="font-black text-white">
                {practiceComplete ? "Good thinking!" : "Good try - think again."}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-200">
                {selectedOption.feedback}
              </p>
            </div>
          </div>

          {practiceComplete && (
            // End the first tutorial with the same fox guidance used in later missions.
            <ElementaryGuideCard className="mt-4" label="Remember">
              {practice.remember}
            </ElementaryGuideCard>
          )}
        </motion.div>
      )}
    </motion.section>
  );
}
