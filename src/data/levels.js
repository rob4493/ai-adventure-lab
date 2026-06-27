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
    skill: "AI voice detection",
    takeaway:
      "You practiced spotting signals like lived detail, generic phrasing, disclaimers, and personal memory.",
    content: aiOrHumanContent.aiVsHuman,
  },
  {
    id: 2,
    title: "Hallucination Hunt",
    world: "World 1",
    unlocked: false,
    stars: 0,
    type: "hallucination",
    skill: "Fact checking",
    takeaway:
      "You practiced checking the exact claim, not just whether a familiar name or idea sounds right.",
    content: hallucinationHuntContent.australiaCapital,
  },
  {
    id: 3,
    title: "Pattern Prediction",
    world: "World 1",
    unlocked: false,
    stars: 0,
    type: "ai_or_human",
    skill: "Reasoning style",
    takeaway:
      "You practiced comparing polished AI-style explanations with human uncertainty, scratch work, and self-correction.",
    content: aiOrHumanContent.patternPrediction,
  },
  {
    id: 4,
    title: "Prompt Fix",
    world: "World 2",
    unlocked: false,
    stars: 0,
    type: "prompt_fix",
    skill: "Prompt improvement",
    takeaway:
      "You practiced turning vague requests into prompts with audience, task, constraints, and output expectations.",
    content: promptFixContent.dogPrompt,
  },
  {
    id: 5,
    title: "Prompt Builder",
    world: "World 2",
    unlocked: false,
    stars: 0,
    type: "prompt_builder",
    skill: "Prompt structure",
    takeaway:
      "You practiced building complete prompts from role, task, context, constraints, format, and examples.",
    content: promptBuilderContent.blockBuilder,
  },
];

export default levels;
