import { questionChoiceContent } from "./content";

const everydayLevels = [
  {
    id: 1,
    title: "Viral Claim Scanner",
    world: "World 1",
    unlocked: true,
    stars: 0,
    type: "question_choice",
    skill: "Claim verification",
    description:
      "Check viral posts, screenshots, charts, old news, and quote claims before trusting or sharing them.",
    takeaway:
      "You practiced checking original sources, dates, context, data details, and whether viral claims deserve trust.",
    content: questionChoiceContent.viralClaimScanner,
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
