import privacySafety from "./content/privacySafety.js";
import { questionChoiceContent } from "./content/index.js";

const everydayLevels = [
  {
    id: 1,
    title: "Claim Check",
    world: "World 1",
    unlocked: true,
    stars: 0,
    type: "questionChoice",
    skill: "Claim verification",
    description:
      "Review pasted claims and decide whether the AI response gives enough source detail to trust or needs more verification.",
    takeaway:
      "You practiced calibrated trust: checking source title, organization, date, and what the source actually supports before trusting a claim.",
    content: questionChoiceContent.claimCheck,
  },
  {
    id: 2,
    title: "AI Reality Check",
    world: "World 1",
    unlocked: false,
    stars: 0,
    type: "questionChoice",
    skill: "AI basics",
    description:
      "Practice spotting when AI is guessing, overconfident, outdated, or missing real-world context.",
    takeaway:
      "You practiced treating AI as a helpful assistant that still needs human judgment, context, and verification.",
    content: questionChoiceContent.aiRealityCheck,
  },
  {
    id: 3,
    title: "Scam Shield",
    world: "World 1",
    unlocked: false,
    stars: 0,
    type: "questionChoice",
    skill: "Scam detection",
    description:
      "Spot suspicious links, credential requests, verification-code tricks, gift-card pressure, and marketplace scams.",
    takeaway:
      "You practiced pausing before acting, spotting red flags, and verifying through official channels.",
    content: questionChoiceContent.scamShield,
  },
  {
    id: 4,
    title: "Message Triage",
    world: "World 1",
    unlocked: false,
    stars: 0,
    type: "questionChoice",
    skill: "Safe first actions",
    description:
      "Choose the safest first move when texts, emails, and DMs create urgency or ask for sensitive details.",
    takeaway:
      "You practiced pausing, verifying through separate channels, and avoiding message links before acting.",
    content: questionChoiceContent.messageTriage,
  },
  {
    id: 5,
    title: "Link Detective",
    world: "World 1",
    unlocked: false,
    stars: 0,
    type: "questionChoice",
    skill: "Link inspection",
    description:
      "Inspect domains, lookalike links, shortened URLs, and safer ways to reach official sites.",
    takeaway:
      "You practiced checking the real domain, spotting lookalike letters, and avoiding hidden or suspicious links.",
    content: questionChoiceContent.linkDetective,
  },
  {
    id: 6,
    title: "Code Guard",
    world: "World 1",
    unlocked: false,
    stars: 0,
    type: "questionChoice",
    skill: "Account protection",
    description:
      "Protect one-time codes, password reset links, and account recovery steps from scam requests.",
    takeaway:
      "You practiced treating verification codes and reset links like account keys that should not be shared.",
    content: questionChoiceContent.codeGuard,
  },
  {
    id: 7,
    title: "Payment Pressure",
    world: "World 1",
    unlocked: false,
    stars: 0,
    type: "questionChoice",
    skill: "Payment safety",
    description:
      "Spot risky payment requests involving gift cards, wires, overpayments, and off-platform money movement.",
    takeaway:
      "You practiced slowing down payment decisions, checking pressure tactics, and using safer verified channels.",
    content: questionChoiceContent.paymentPressure,
  },
  {
    id: 8,
    title: "Better Everyday Prompts",
    world: "World 2",
    unlocked: false,
    stars: 0,
    type: "questionChoice",
    skill: "Prompt clarity",
    description:
      "Choose stronger prompts for common tasks like planning, shopping, repairs, and comparing options.",
    takeaway:
      "You practiced adding goals, context, constraints, and output format so AI gives more useful everyday help.",
    content: questionChoiceContent.betterEverydayPrompts,
  },
  {
    id: 9,
    title: "Follow-Up Coach",
    world: "World 2",
    unlocked: false,
    stars: 0,
    type: "questionChoice",
    skill: "Follow-up questions",
    description:
      "Learn what to ask after AI gives a first answer so you can improve, verify, or personalize the result.",
    takeaway:
      "You practiced using follow-up questions to make AI responses safer, clearer, more useful, and easier to verify.",
    content: questionChoiceContent.followUpCoach,
  },
  {
    "id": 10,
    "title": "Private Prompts",
    "world": "World 3",
    "unlocked": false,
    "stars": 0,
    "type": "questionChoice",
    "skill": "Share less",
    "description": "Get useful AI help without sharing unnecessary personal details.",
    "takeaway": "Use placeholders and only the details needed for the task."
,
    content: privacySafety.privatePrompts
  },
  {
    "id": 11,
    "title": "Shared Lives, Shared Privacy",
    "world": "World 3",
    "unlocked": false,
    "stars": 0,
    "type": "questionChoice",
    "skill": "Other people's privacy",
    "description": "Protect family, friends, photos, and private conversations.",
    "takeaway": "Summarize only what is needed, without exposing someone else's private message."
,
    content: privacySafety.sharedPrivacy
  },
  {
    "id": 12,
    "title": "Access Check",
    "world": "World 3",
    "unlocked": false,
    "stars": 0,
    "type": "questionChoice",
    "skill": "Permission scope",
    "description": "Review connected accounts, privacy claims, and sharing controls.",
    "takeaway": "Choose the least account access needed for the task; decline unnecessary permissions."
,
    content: privacySafety.accessCheck
  },
];

// Presentation follows each focus while stable level IDs keep existing saves intact.
export default everydayLevels.map((level) => ({
  ...level,
  theme: level.id <= 2 ? "news" : level.id <= 7 ? "scams" : level.id <= 9 ? "prompts" : "privacy",
}));
