import levels from "./levels";
import everydayLevels from "./everydayLevels";
import worldDetails from "./worlds";

export const DEFAULT_TRACK_ID = "student";
export const DEFAULT_STUDENT_GRADE_BAND_ID = "high-school";

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

const createAudienceTrack = ({
  description,
  id,
  isAvailable = false,
  label,
  levels = [],
  title,
}) => ({
  description,
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
      "Simple AI literacy for younger learners. Focuses on asking for help, checking simple facts, and protecting privacy.",
    id: "elementary",
    isAvailable: false,
    label: "Planned",
    levels: [],
    title: "Elementary",
    worlds: worldDetails,
  },
  {
    description:
      "Practical AI judgment for projects, tutoring, group chats, basic source checks, and social situations.",
    id: "middle-school",
    isAvailable: false,
    label: "Planned",
    levels: [],
    title: "Middle School",
    worlds: worldDetails,
  },
  {
    description:
      "Current playable student path for stronger source checks, prompt building, privacy, bias, job-search examples, and health caution.",
    id: DEFAULT_STUDENT_GRADE_BAND_ID,
    isAvailable: true,
    label: "Playable",
    levels,
    title: "High School",
    worlds: worldDetails,
  },
  {
    description:
      "Advanced AI literacy for research, academic integrity, career prep, workplace-style prompts, and stronger evidence standards.",
    id: "college",
    isAvailable: false,
    label: "Planned",
    levels: [],
    title: "College / Adult Learner",
    worlds: worldDetails,
  },
];

const audienceTracks = [
  {
    description:
      "Schoolwork, projects, tutoring, sources, privacy with friends, and classroom fairness.",
    id: DEFAULT_TRACK_ID,
    isAvailable: true,
    defaultGradeBandId: DEFAULT_STUDENT_GRADE_BAND_ID,
    gradeBands: studentGradeBands,
    label: "Choose Grade",
    levels: [],
    title: "Student",
    worlds: worldDetails,
  },
  createAudienceTrack({
    description:
      "Practice checking sourced claims and suspicious messages before trusting, sharing, clicking, or replying.",
    id: "everyday",
    label: "Playable",
    levels: everydayLevels,
    isAvailable: true,
    title: "Everyday User",
  }),
  createAudienceTrack({
    description:
      "Resumes, cover letters, job posts, interview prep, career advice, and privacy in applications.",
    id: "job-seeker",
    label: "Planned",
    title: "Job Seeker",
  }),
  createAudienceTrack({
    description:
      "Customer messages, vendor research, marketing copy, reviews, policy drafts, and data privacy.",
    id: "small-business",
    label: "Planned",
    title: "Small Business Owner",
  }),
  createAudienceTrack({
    description:
      "Emails, summaries, reports, confidential information, source checking, and fair workplace decisions.",
    id: "workplace",
    label: "Planned",
    title: "Workplace User",
  }),
];

export const getTrackById = (trackId) =>
  audienceTracks.find((track) => track.id === trackId) ??
  audienceTracks.find((track) => track.id === DEFAULT_TRACK_ID);

export const getDefaultPathIdForTrack = (track) =>
  track?.defaultGradeBandId ?? null;

export const getTrackPathById = (track, pathId) => {
  if (!track?.gradeBands) return track;

  return (
    track.gradeBands.find((gradeBand) => gradeBand.id === pathId) ??
    track.gradeBands.find(
      (gradeBand) => gradeBand.id === track.defaultGradeBandId
    ) ??
    track.gradeBands[0]
  );
};

export const getProgressKey = (trackId, pathId) =>
  pathId ? `${trackId}:${pathId}` : trackId;

export default audienceTracks;
