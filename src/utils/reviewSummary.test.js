import assert from "node:assert/strict";
import test from "node:test";

import { createLevelReviewSummary } from "./reviewSummary.js";

test("review summary separates strong and review concepts", () => {
  const summary = createLevelReviewSummary({
    maxScore: 120,
    score: 90,
    roundReviews: [
      {
        concept: "Check exact facts.",
        status: "strong",
      },
      {
        concept: "Watch for vague source details.",
        status: "review",
      },
    ],
  });

  assert.deepEqual(summary.didWell, ["Check exact facts."]);
  assert.deepEqual(summary.strongTopics, ["General AI literacy"]);
  assert.deepEqual(summary.needsReview, [
    "Watch for vague source details.",
  ]);
  assert.deepEqual(summary.reviewTopics, ["General AI literacy"]);
  assert.equal(summary.replayRecommended, true);
});

test("review summary keeps topic labels for concept tracking", () => {
  const summary = createLevelReviewSummary({
    maxScore: 80,
    score: 40,
    roundReviews: [
      {
        concept: "Look for missing author and date.",
        status: "review",
        topic: "Weak citation details",
      },
      {
        concept: "Use placeholders instead of names.",
        status: "strong",
        topic: "Privacy placeholders",
      },
    ],
  });

  assert.deepEqual(summary.reviewTopics, ["Weak citation details"]);
  assert.deepEqual(summary.strongTopics, ["Privacy placeholders"]);
  assert.deepEqual(summary.conceptResults, [
    {
      concept: "Look for missing author and date.",
      status: "review",
      topic: "Weak citation details",
    },
    {
      concept: "Use placeholders instead of names.",
      status: "strong",
      topic: "Privacy placeholders",
    },
  ]);
});

test("review summary gives a fallback when no strong concepts are present", () => {
  const summary = createLevelReviewSummary({
    maxScore: 80,
    score: 80,
    roundReviews: [],
  });

  assert.equal(summary.didWell.length, 1);
  assert.deepEqual(summary.needsReview, []);
  assert.equal(summary.replayRecommended, false);
});
