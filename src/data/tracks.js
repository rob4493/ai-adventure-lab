import levels from "./levels";
import worldDetails from "./worlds";

export const DEFAULT_TRACK_ID = "student";

const plannedWorlds = {
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

const createPlannedTrack = ({
  description,
  focusAreas,
  id,
  label,
  title,
}) => ({
  description,
  focusAreas,
  id,
  isAvailable: false,
  label,
  levels: [],
  title,
  worlds: plannedWorlds,
});

const audienceTracks = [
  {
    description:
      "Schoolwork, projects, tutoring, sources, privacy with friends, and classroom fairness.",
    focusAreas: [
      "Schoolwork help",
      "Source checking",
      "Prompt building",
      "Privacy and bias",
    ],
    id: DEFAULT_TRACK_ID,
    isAvailable: true,
    label: "Current Path",
    levels,
    title: "Student",
    worlds: worldDetails,
  },
  createPlannedTrack({
    description:
      "Health caution, shopping research, social media, scams, family privacy, and news claims.",
    focusAreas: [
      "Health and safety",
      "News and claims",
      "Social media",
      "Online scams",
    ],
    id: "everyday",
    label: "Planned",
    title: "Everyday User",
  }),
  createPlannedTrack({
    description:
      "Resumes, cover letters, job posts, interview prep, career advice, and privacy in applications.",
    focusAreas: [
      "Resume feedback",
      "Cover letters",
      "Interview prep",
      "Application privacy",
    ],
    id: "job-seeker",
    label: "Planned",
    title: "Job Seeker",
  }),
  createPlannedTrack({
    description:
      "Customer messages, vendor research, marketing copy, reviews, policy drafts, and data privacy.",
    focusAreas: [
      "Customer communication",
      "Marketing review",
      "Vendor research",
      "Business privacy",
    ],
    id: "small-business",
    label: "Planned",
    title: "Small Business Owner",
  }),
  createPlannedTrack({
    description:
      "Emails, summaries, reports, confidential information, source checking, and fair workplace decisions.",
    focusAreas: [
      "Workplace writing",
      "Reports and summaries",
      "Confidential data",
      "Fair decisions",
    ],
    id: "workplace",
    label: "Planned",
    title: "Workplace User",
  }),
];

export const getTrackById = (trackId) =>
  audienceTracks.find((track) => track.id === trackId) ??
  audienceTracks.find((track) => track.id === DEFAULT_TRACK_ID);

export default audienceTracks;
