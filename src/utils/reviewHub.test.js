import assert from "node:assert/strict";
import test from "node:test";

import { createReviewHubSummary } from "./reviewHub.js";

test("topic cards contain only missed concepts belonging to that topic", () => {
  const summary = createReviewHubSummary([{ id: 1, completed: true, reviewSummary: {
    needsReview: ["Check dates", "Hide personal data"],
    reviewTopics: ["Sources", "Privacy"],
    conceptResults: [
      { topic: "Sources", concept: "Check dates", status: "review" },
      { topic: "Privacy", concept: "Hide personal data", status: "review" },
    ],
  } }]);
  assert.deepEqual(summary.targetedPractice.find((item) => item.topic === "Sources").concepts, ["Check dates"]);
});

test("review hub separates levels using their latest review", () => {
  const summary = createReviewHubSummary([
    {
      id: 1,
      completed: true,
      reviewSummary: {
        needsReview: ["Check the author and date."],
        reviewTopics: ["Source details"],
        replayRecommended: true,
        strongTopics: ["Claim checking"],
      },
    },
    {
      id: 2,
      completed: true,
      reviewSummary: {
        needsReview: [],
        reviewTopics: [],
        replayRecommended: false,
        strongTopics: ["Privacy"],
      },
    },
    { id: 3, completed: false, reviewSummary: null },
  ]);

  assert.deepEqual(summary.needsAttention.map(({ level }) => level.id), [1]);
  assert.deepEqual(summary.goingWell.map(({ level }) => level.id), [2]);
  assert.deepEqual(summary.topicsToReview, ["Source details"]);
  assert.deepEqual(summary.strongTopics, ["Claim checking", "Privacy"]);
  assert.deepEqual(
    summary.targetedPractice.map((practice) => practice.topic),
    ["Source details"]
  );
  assert.equal(summary.targetedPractice[0].level.id, 1);
});

test("review hub counts lifetime concept rounds", () => {
  const summary = createReviewHubSummary([], {
    Privacy: { review: 1, strong: 2 },
    Sources: { review: 2, strong: 3 },
  });

  assert.equal(summary.lifetimeRounds, 8);
});
