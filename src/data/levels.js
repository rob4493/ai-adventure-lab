import {
  aiOrHumanContent,
  hallucinationHuntContent,
  promptBuilderContent,
  promptFixContent,
} from "./content";

const levels = [
  {
    id: 1,
    title: "AI vs Human",
    world: "World 1",
    unlocked: true,
    stars: 0,
    type: "ai_or_human",
    content: aiOrHumanContent.aiVsHuman,
  },
  {
    id: 2,
    title: "Hallucination Hunt",
    world: "World 1",
    unlocked: false,
    stars: 0,
    type: "hallucination",
    content: hallucinationHuntContent.australiaCapital,
  },
  {
    id: 3,
    title: "Pattern Prediction",
    world: "World 1",
    unlocked: false,
    stars: 0,
    type: "ai_or_human",
    content: aiOrHumanContent.patternPrediction,
  },
  {
    id: 4,
    title: "Prompt Fix",
    world: "World 2",
    unlocked: false,
    stars: 0,
    type: "prompt_fix",
    content: promptFixContent.dogPrompt,
  },
  {
    id: 5,
    title: "Prompt Builder",
    world: "World 2",
    unlocked: false,
    stars: 0,
    type: "prompt_builder",
    content: promptBuilderContent.blockBuilder,
  },
];

export default levels;
