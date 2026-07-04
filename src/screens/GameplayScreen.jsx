import PromptFix from "../gameModes/PromptFix";
import AiOrHuman from "../gameModes/AiOrHuman";
import HallucinationHunt from "../gameModes/HallucinationHunt";
import PromptBuilder from "../gameModes/PromptBuilder";
import QuestionChoice from "../gameModes/QuestionChoice";

export default function GameplayScreen({
  level,
  goBack,
  finishLevel,
}) {
  if (!level) return null;

  return (
    <>
      {level.type === "prompt_fix" && (
        <PromptFix
          level={level}
          goBack={goBack}
          finishLevel={finishLevel}
        />
      )}

      {level.type === "ai_or_human" && (
        <AiOrHuman
          level={level}
          goBack={goBack}
          finishLevel={finishLevel}
        />
      )}

      {level.type === "hallucination" && (
        <HallucinationHunt
          level={level}
          goBack={goBack}
          finishLevel={finishLevel}
        />
      )}

      {level.type === "prompt_builder" && (
        <PromptBuilder
          level={level}
          goBack={goBack}
          finishLevel={finishLevel}
        />
      )}

      {level.type === "question_choice" && (
        <QuestionChoice
          level={level}
          goBack={goBack}
          finishLevel={finishLevel}
        />
      )}
    </>
  );
}
