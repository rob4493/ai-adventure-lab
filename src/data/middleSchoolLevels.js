import {
  aiOrHumanContent,
  hallucinationHuntContent,
  promptBuilderContent,
  questionChoiceContent,
} from "./content/index.js";

// Middle school path mirrors the high school structure with simpler scenarios and wording.
const middleSchoolLevels = [
  {
    id: 1,
    title: "AI or Me?",
    world: "World 1",
    unlocked: true,
    stars: 0,
    theme: "middle",
    type: "aiOrHuman",
    skill: "AI voice detection",
    description:
      "Spot the difference between polished AI-style writing and student voice.",
    takeaway:
      "You practiced noticing specific school details, natural reactions, and generic AI-style wording.",
    content: aiOrHumanContent.middleSchoolAiOrMe,
  },
  {
    id: 2,
    title: "Fact or Fake?",
    world: "World 1",
    unlocked: false,
    stars: 0,
    theme: "middle",
    type: "hallucination",
    skill: "Fact checking",
    description:
      "Catch simple AI mistakes, familiar-name traps, and overconfident claims.",
    takeaway:
      "You practiced checking the exact claim instead of trusting confident wording.",
    content: hallucinationHuntContent.middleSchoolFactOrFake,
  },
  {
    id: 3,
    title: "Homework Helper",
    world: "World 1",
    unlocked: false,
    stars: 0,
    theme: "middle",
    type: "questionChoice",
    skill: "Learning support",
    description:
      "Choose prompts that help you learn without asking AI to do the work.",
    takeaway:
      "You practiced asking for hints, examples, outlines, and study checks instead of finished answers.",
    content: questionChoiceContent.homeworkHelper,
  },
  {
    id: 4,
    title: "Prompt Builder Jr.",
    world: "World 2",
    unlocked: false,
    stars: 0,
    theme: "middle",
    type: "promptBuilder",
    skill: "Prompt structure",
    description:
      "Build clear school prompts from simple blocks: role, task, context, and format.",
    takeaway:
      "You practiced building prompts that explain the goal, give context, and request a useful format.",
    content: promptBuilderContent.promptBuilderJr,
  },
  {
    id: 5,
    title: "Source Detective",
    world: "World 2",
    unlocked: false,
    stars: 0,
    theme: "middle",
    type: "questionChoice",
    skill: "Source checking",
    description:
      "Decide whether AI source responses give enough details to verify.",
    takeaway:
      "You practiced looking for source names, organizations, topics, dates, and whether the source fits the claim.",
    content: questionChoiceContent.sourceDetective,
  },
  {
    id: 6,
    title: "Share Smart",
    world: "World 3",
    unlocked: false,
    stars: 0,
    theme: "middle",
    type: "questionChoice",
    skill: "Privacy and safety",
    description:
      "Ask AI for help without sharing names, passwords, addresses, or private messages.",
    takeaway:
      "You practiced removing private details while still getting useful help from AI.",
    content: questionChoiceContent.shareSmart,
  },
  {
    id: 7,
    title: "Fairness Check",
    world: "World 3",
    unlocked: false,
    stars: 0,
    theme: "middle",
    type: "questionChoice",
    skill: "Bias and fairness",
    description:
      "Replace unfair shortcuts with clearer criteria and better context.",
    takeaway:
      "You practiced checking stereotypes, resource shortcuts, and assumptions before using AI advice about people.",
    content: questionChoiceContent.fairnessCheck,
  },
  {
    id: 8,
    title: "Ask Before You Act",
    world: "World 3",
    unlocked: false,
    stars: 0,
    theme: "middle",
    type: "questionChoice",
    skill: "Safe next steps",
    description:
      "Know when AI advice needs a trusted adult, teacher, official source, or safer pause.",
    takeaway:
      "You practiced pausing before risky downloads, health advice, school-rule questions, and online trends.",
    content: questionChoiceContent.askBeforeYouAct,
  },
];

export default middleSchoolLevels;
