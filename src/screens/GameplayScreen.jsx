import AiOrHuman from "../gameModes/AiOrHuman";
import ElementaryIntro from "../gameModes/ElementaryIntro";
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
      {level.type === "elementaryIntro" && (
        <ElementaryIntro
          level={level}
          goBack={goBack}
          finishLevel={finishLevel}
        />
      )}

      {level.type === "aiOrHuman" && (
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

      {level.type === "promptBuilder" && (
        <PromptBuilder
          level={level}
          goBack={goBack}
          finishLevel={finishLevel}
        />
      )}

      {level.type === "questionChoice" && (
        <QuestionChoice
          level={level}
          goBack={goBack}
          finishLevel={finishLevel}
        />
      )}
    </>
  );
}
