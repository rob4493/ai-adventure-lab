import {
  aiOrHumanContent,
  hallucinationHuntContent,
  promptBuilderContent,
  questionChoiceContent,
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
    description:
      "Spot signals that make writing feel AI-generated or personally human.",
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
    description:
      "Judge AI-style factual claims and watch for confident mistakes.",
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
    description:
      "Compare polished explanations with messy, human thinking patterns.",
    takeaway:
      "You practiced comparing polished AI-style explanations with human uncertainty, scratch work, and self-correction.",
    content: aiOrHumanContent.patternPrediction,
  },
  {
    id: 4,
    title: "Prompt Builder",
    world: "World 2",
    unlocked: false,
    stars: 0,
    type: "prompt_builder",
    skill: "Prompt structure",
    description:
      "Learn prompt building blocks, then assemble stronger complete prompts.",
    takeaway:
      "You practiced building prompts from role, task, context, constraints, format, and examples.",
    content: promptBuilderContent.blockBuilder,
  },
  {
    id: 5,
    title: "Ask Better Questions",
    world: "World 2",
    unlocked: false,
    stars: 0,
    type: "question_choice",
    skill: "Clarifying questions",
    description:
      "Choose the best follow-up question for short real-world scenarios.",
    takeaway:
      "You practiced pausing before advice, spotting missing context, and choosing useful next questions.",
    content: questionChoiceContent.askBetterQuestions,
  },
  {
    id: 6,
    title: "Source Scanner",
    world: "World 3",
    unlocked: false,
    stars: 0,
    type: "question_choice",
    skill: "Source checking",
    description:
      "Inspect AI-provided source details and decide whether they are reliable or risky.",
    takeaway:
      "You practiced checking authorship, dates, evidence, independence, and whether a claim deserves trust.",
    content: questionChoiceContent.sourceScanner,
  },
  {
    id: 7,
    title: "Privacy Shield",
    world: "World 3",
    unlocked: false,
    stars: 0,
    type: "question_choice",
    skill: "Privacy and safety",
    description:
      "Choose safer ways to ask AI for help without oversharing private details.",
    takeaway:
      "You practiced keeping AI requests useful while protecting names, addresses, routines, contact details, and private messages.",
    content: questionChoiceContent.privacyShield,
  },
  {
    id: 8,
    title: "Bias Lens",
    world: "World 3",
    unlocked: false,
    stars: 0,
    type: "question_choice",
    skill: "Bias and fairness",
    description:
      "Spot unfair shortcuts and choose more balanced AI responses.",
    takeaway:
      "You practiced using consistent criteria, checking missing perspectives, and avoiding unfair assumptions.",
    content: questionChoiceContent.biasLens,
  },
];

export default levels;
