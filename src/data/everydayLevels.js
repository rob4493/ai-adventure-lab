import { questionChoiceContent } from "./content";

const everydayLevels = [
  {
    id: 1,
    title: "Claim Check",
    world: "World 1",
    unlocked: true,
    stars: 0,
    type: "question_choice",
    skill: "Claim verification",
    description:
      "Review pasted claims and decide whether the AI response gives enough source detail to trust or needs more verification.",
    takeaway:
      "You practiced calibrated trust: checking source title, organization, date, and what the source actually supports before trusting a claim.",
    content: questionChoiceContent.claimCheck,
  },
  {
    id: 2,
    title: "Scam Shield",
    world: "World 1",
    unlocked: false,
    stars: 0,
    type: "question_choice",
    skill: "Scam detection",
    description:
      "Spot suspicious links, credential requests, verification-code tricks, gift-card pressure, and marketplace scams.",
    takeaway:
      "You practiced pausing before acting, spotting red flags, and verifying through official channels.",
    content: questionChoiceContent.scamShield,
  },
];

export default everydayLevels;
