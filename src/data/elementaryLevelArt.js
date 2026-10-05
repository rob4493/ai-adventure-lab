import pixelMeetAi from "../assets/pixel-meet-ai.png";
import pixelFactCheck from "../assets/pixel-fact-check.png";
import pixelAskClearly from "../assets/pixel-ask-clearly.png";
import pixelLearnDontCopy from "../assets/pixel-learn-dont-copy.png";
import pixelPrivacyPower from "../assets/pixel-privacy-power.png";

// Shared by level cards and dashboard guidance so each mission keeps one visual identity.
const elementaryLevelArt = {
  "Meet AI": pixelMeetAi,
  "Fact Check Quest": pixelFactCheck,
  "Ask It Clearly": pixelAskClearly,
  "Learn, Don't Copy": pixelLearnDontCopy,
  "Privacy Power": pixelPrivacyPower,
};

export const getElementaryLevelArt = (title) => elementaryLevelArt[title] ?? null;

export default elementaryLevelArt;
