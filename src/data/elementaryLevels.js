import elementaryContent from "./content/elementary.js";

// Grades 3-5 begin with concrete AI habits before moving into schoolwork and privacy.
const elementaryLevels = [
  {
    id: 1,
    title: "Meet AI",
    world: "World 1",
    unlocked: true,
    stars: 0,
    type: "elementaryIntro",
    theme: "elementary",
    // Completion-only levels award progress for participation rather than quiz performance.
    completionOnly: true,
    skill: "Getting to know AI",
    description:
      "A guided first look at what AI is, how it can help, and why people stay in charge.",
    takeaway:
      "You learned that AI is a tool for ideas and explanations, but its answers still need human judgment.",
    content: elementaryContent.meetAi,
  },
  {
    id: 2,
    title: "Fact Check Quest",
    world: "World 1",
    unlocked: false,
    stars: 0,
    type: "hallucination",
    theme: "elementary",
    skill: "Fact checking",
    description:
      "Compare simple AI answers with trusted clues and catch details that do not match.",
    takeaway:
      "You practiced comparing the exact AI answer with a trusted clue instead of relying on memory or confident wording.",
    content: elementaryContent.factCheckQuest,
  },
  {
    id: 3,
    title: "Ask It Clearly",
    world: "World 2",
    unlocked: false,
    stars: 0,
    type: "questionChoice",
    theme: "elementary",
    skill: "Prompt clarity",
    description:
      "Turn short, unclear questions into prompts that ask for the right kind of help.",
    takeaway:
      "You practiced naming the topic, goal, amount, reading level, and kind of help you need.",
    content: elementaryContent.askItClearly,
  },
  {
    id: 4,
    title: "Learn, Don't Copy",
    world: "World 2",
    unlocked: false,
    stars: 0,
    type: "questionChoice",
    theme: "elementary",
    skill: "Responsible schoolwork",
    description:
      "Use AI for hints, questions, practice, and feedback while keeping schoolwork your own.",
    takeaway:
      "You practiced asking AI to help you think, practice, and revise instead of completing your work.",
    content: elementaryContent.learnDontCopy,
  },
  {
    id: 5,
    title: "Privacy Power",
    world: "World 3",
    unlocked: false,
    stars: 0,
    type: "questionChoice",
    theme: "elementary",
    skill: "Privacy and safety",
    description:
      "Get useful AI help without sharing names, addresses, passwords, messages, or routines.",
    takeaway:
      "You practiced using general details and placeholders while keeping private information out of AI chats.",
    content: elementaryContent.privacyPower,
  },
];

export default elementaryLevels;
