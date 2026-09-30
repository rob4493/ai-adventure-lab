import levels from "./levels.js";
import collegeLevels from "./collegeLevels.js";
import elementaryLevels from "./elementaryLevels.js";
import everydayLevels from "./everydayLevels.js";
import middleSchoolLevels from "./middleSchoolLevels.js";
import worldDetails, { elementaryWorldDetails } from "./worlds.js";

export const defaultTrackId = "student";
export const defaultGradeId = "high-school";

// Non-student paths reuse generic world framing until custom worlds are needed.
const defaultAudienceWorlds = {
  "World 1": {
    title: "Everyday Foundations",
    description:
      "Start with practical AI judgment for common daily tasks.",
  },
  "World 2": {
    title: "Better Decisions",
    description:
      "Practice asking for context, evidence, and safer recommendations.",
  },
  "World 3": {
    title: "Trust And Safety",
    description:
      "Check sources, protect privacy, and watch for unfair shortcuts.",
  },
};

// Focus areas reuse level objects from the full Everyday level list.
const getLevelsByTitle = (titles) =>
  everydayLevels.filter((level) => titles.includes(level.title));

// Shared factory keeps planned and playable audience paths shaped the same way.
const createAudienceTrack = ({
  description,
  defaultFocusAreaId = null,
  focusAreas = null,
  id,
  isAvailable = false,
  label,
  levels = [],
  title,
}) => ({
  description,
  defaultFocusAreaId,
  focusAreas,
  id,
  isAvailable,
  label,
  levels,
  title,
  worlds: defaultAudienceWorlds,
});

const studentGradeBands = [
  {
    description:
      "Short, concrete AI literacy for grades 3-5: helpful questions, fact checks, original schoolwork, and privacy.",
    id: "elementary",
    isAvailable: true,
    label: "Playable",
    levels: elementaryLevels,
    title: "Elementary: Grades 3-5",
    worlds: elementaryWorldDetails,
  },
  {
    description:
      "Playable AI literacy for homework help, project planning, basic source checks, privacy, fairness, and safe next steps.",
    id: "middle-school",
    isAvailable: true,
    label: "Playable",
    levels: middleSchoolLevels,
    title: "Middle School",
    worlds: worldDetails,
  },
  {
    description:
      "Current playable student path for stronger source checks, prompt building, privacy, bias, job-search examples, and health caution.",
    id: defaultGradeId,
    isAvailable: true,
    label: "Playable",
    levels,
    title: "High School",
    worlds: worldDetails,
  },
  {
    description:
      "College-level AI literacy for academic voice, research support, source verification, campus privacy, and fair decisions.",
    id: "college",
    isAvailable: true,
    label: "Playable",
    levels: collegeLevels,
    title: "College / Adult Learner",
    worlds: worldDetails,
  },
];

const everydayFocusAreas = [
  {
    description:
      "Check claims, viral posts, sourced answers, and social media summaries before trusting or sharing.",
    id: "news-social",
    isAvailable: true,
    label: "Playable",
    levels: getLevelsByTitle(["Claim Check", "AI Reality Check"]),
    title: "News & Social Media",
    worlds: defaultAudienceWorlds,
  },
  {
    description:
      "Spot suspicious messages, links, codes, payment requests, and pressure tactics.",
    id: "scams",
    isAvailable: true,
    label: "Playable",
    levels: getLevelsByTitle([
      "Scam Shield",
      "Message Triage",
      "Link Detective",
      "Code Guard",
      "Payment Pressure",
    ]),
    title: "Scams & Suspicious Messages",
    worlds: defaultAudienceWorlds,
  },
  {
    description:
      "Practice stronger prompts and follow-up questions for planning, comparing, shopping, and daily decisions.",
    id: "ai-best-practices",
    isAvailable: true,
    label: "Playable",
    levels: getLevelsByTitle([
      "Better Everyday Prompts",
      "Follow-Up Coach",
    ]),
    title: "AI Usage & Best Practices",
    worlds: defaultAudienceWorlds,
  },
  {
    description:
      "Protect personal details, other people's privacy, connected accounts, and shared conversations.",
    id: "privacy-safety",
    isAvailable: true,
    label: "Playable",
    levels: getLevelsByTitle(["Private Prompts", "Shared Lives, Shared Privacy", "Access Check"]),
    title: "Privacy & Safety",
    worlds: defaultAudienceWorlds,
  },
];

// Planned focus areas are visible in the UI without becoming playable yet.
const createPlannedFocusAreas = (focusAreas) =>
  focusAreas.map((focusArea) => ({
    ...focusArea,
    isAvailable: false,
    label: "Planned",
    levels: [],
    worlds: defaultAudienceWorlds,
  }));

const audienceTracks = [
  {
    description:
      "Schoolwork, projects, tutoring, sources, privacy with friends, and classroom fairness.",
    id: defaultTrackId,
    isAvailable: true,
    defaultGradeBandId: defaultGradeId,
    gradeBands: studentGradeBands,
    label: "Choose Grade",
    levels: [],
    title: "Student",
    worlds: worldDetails,
  },
  createAudienceTrack({
    description:
      "Practice checking sourced claims and suspicious messages before trusting, sharing, clicking, or replying.",
    defaultFocusAreaId: "news-social",
    focusAreas: everydayFocusAreas,
    id: "everyday",
    label: "Choose Focus",
    levels: [],
    isAvailable: true,
    title: "Everyday User",
  }),
  createAudienceTrack({
    description:
      "Resumes, cover letters, job posts, interview prep, career advice, and privacy in applications.",
    focusAreas: createPlannedFocusAreas([
      {
        description:
          "Resumes, cover letters, job posts, applications, and matching experience to requirements.",
        id: "applications",
        title: "Applications",
      },
      {
        description:
          "Interview practice, skill gap review, STAR stories, and follow-up messages.",
        id: "interviews",
        title: "Interview Prep & Skills",
      },
      {
        description:
          "Career exploration, role comparisons, learning plans, and path decisions.",
        id: "career-paths",
        title: "Career Advice & Paths",
      },
    ]),
    id: "job-seeker",
    label: "Planned Focuses",
    title: "Job Seeker",
  }),
  createAudienceTrack({
    description:
      "Customer messages, vendor research, marketing copy, reviews, policy drafts, and data privacy.",
    focusAreas: createPlannedFocusAreas([
      {
        description:
          "Customer replies, tone adjustments, service issues, and follow-up messages.",
        id: "customer-messages",
        title: "Customer Messages",
      },
      {
        description:
          "Marketing drafts, product descriptions, social posts, and brand consistency.",
        id: "marketing",
        title: "Marketing & Content",
      },
      {
        description:
          "Vendor comparison, review analysis, policy drafts, and sensitive business data.",
        id: "operations",
        title: "Research & Operations",
      },
    ]),
    id: "small-business",
    label: "Planned Focuses",
    title: "Small Business Owner",
  }),
  createAudienceTrack({
    description:
      "Emails, summaries, reports, confidential information, source checking, and fair workplace decisions.",
    focusAreas: createPlannedFocusAreas([
      {
        description:
          "Emails, meeting summaries, reports, and clearer internal communication.",
        id: "communication",
        title: "Communication",
      },
      {
        description:
          "Confidential data, source checking, policy limits, and safe AI usage at work.",
        id: "trust-safety",
        title: "Trust & Safety",
      },
      {
        description:
          "Fair criteria, recommendation checks, and avoiding unfair workplace shortcuts.",
        id: "fair-decisions",
        title: "Fair Decisions",
      },
    ]),
    id: "workplace",
    label: "Planned Focuses",
    title: "Workplace User",
  }),
];

export const getTrackById = (trackId) =>
  audienceTracks.find((track) => track.id === trackId) ??
  audienceTracks.find((track) => track.id === defaultTrackId);

export const getDefaultPathId = (track) =>
  track?.defaultGradeBandId ?? track?.defaultFocusAreaId ?? null;

export const getSubPaths = (track) =>
  track?.gradeBands ?? track?.focusAreas ?? null;

// Resolve a playable sub-path while falling back to each track's default choice.
export const getTrackPathById = (track, pathId) => {
  const subPaths = getSubPaths(track);

  if (!subPaths) return track;

  return (
    subPaths.find((subPath) => subPath.id === pathId) ??
    subPaths.find(
      (subPath) => subPath.id === getDefaultPathId(track)
    ) ??
    subPaths[0]
  );
};

// Progress is scoped per audience path, not just per top-level track.
export const getProgressKey = (trackId, pathId) =>
  pathId ? `${trackId}:${pathId}` : trackId;

export default audienceTracks;
