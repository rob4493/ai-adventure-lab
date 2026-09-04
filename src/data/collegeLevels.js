import {
  aiOrHumanContent,
  hallucinationHuntContent,
  questionChoiceContent,
} from "./content";

// College path uses familiar mechanics with higher-stakes academic and adult-life scenarios.
const collegeLevels = [
  {
    id: 1,
    title: "AI vs Human: College Voice",
    world: "World 1",
    unlocked: true,
    stars: 0,
    type: "ai_or_human",
    skill: "Academic voice detection",
    description:
      "Spot generic AI polish versus specific college reflection and experience.",
    takeaway:
      "You practiced noticing whether college writing uses concrete evidence, course moments, and real experience.",
    content: aiOrHumanContent.collegeVoice,
  },
  {
    id: 2,
    title: "Hallucination Hunt: Academic Claims",
    world: "World 1",
    unlocked: false,
    stars: 0,
    type: "hallucination",
    skill: "Academic fact checking",
    description:
      "Catch fake citations, exaggerated research claims, and policy assumptions.",
    takeaway:
      "You practiced checking exact academic claims, source fit, and changing course or campus rules.",
    content: hallucinationHuntContent.collegeAcademicClaims,
  },
  {
    id: 3,
    title: "Better College Prompts",
    world: "World 2",
    unlocked: false,
    stars: 0,
    type: "question_choice",
    skill: "College prompt clarity",
    description:
      "Replace vague college prompts with prompts that include task boundaries, evidence, and academic rules.",
    takeaway:
      "You practiced asking for support that improves thinking without replacing your final work.",
    content: questionChoiceContent.betterCollegePrompts,
  },
  {
    id: 4,
    title: "Source Scanner: Research Edition",
    world: "World 2",
    unlocked: false,
    stars: 0,
    type: "question_choice",
    skill: "Research source checking",
    description:
      "Judge whether AI-provided research sources are verifiable, relevant, and specific enough to use.",
    takeaway:
      "You practiced checking source names, dates, authors, DOI-style details, and whether a source supports the claim.",
    content: questionChoiceContent.collegeSourceScanner,
  },
  {
    id: 5,
    title: "Privacy Shield: Campus Life",
    world: "World 3",
    unlocked: false,
    stars: 0,
    type: "question_choice",
    skill: "Campus privacy",
    description:
      "Ask AI for help with campus life, health, money, and forms without exposing sensitive details.",
    takeaway:
      "You practiced redacting names, IDs, accounts, financial details, health details, and identity information.",
    content: questionChoiceContent.collegePrivacyShield,
  },
  {
    id: 6,
    title: "Bias Lens: Fair Decisions",
    world: "World 3",
    unlocked: false,
    stars: 0,
    type: "question_choice",
    skill: "Fair decision-making",
    description:
      "Spot biased shortcuts in recommendations about people, leadership, applications, and access.",
    takeaway:
      "You practiced replacing popularity, prestige, stereotypes, and majority-only summaries with fairer criteria.",
    content: questionChoiceContent.collegeBiasLens,
  },
  {
    id: 7,
    title: "Research Assistant Check",
    world: "World 3",
    unlocked: false,
    stars: 0,
    type: "question_choice",
    skill: "Research judgment",
    description:
      "Decide when AI is helping the research process and when it is pretending to be a source.",
    takeaway:
      "You practiced using AI for search strategy, cautious summaries, and comparisons without accepting invented evidence.",
    content: questionChoiceContent.researchAssistantCheck,
  },
];

export default collegeLevels;
