import assert from "node:assert/strict";
import test from "node:test";

import {
  applyLevelResult,
  createInitialProgress,
  getLevelsWithProgress,
  getTotalXp,
} from "./progress.js";

const sampleLevels = [
  {
    id: 1,
    title: "First",
  },
  {
    id: 2,
    title: "Second",
  },
  {
    id: 3,
    title: "Third",
  },
];

test("progression unlocks only the first level until prior levels are completed", () => {
  const initialProgress = createInitialProgress();

  assert.deepEqual(
    getLevelsWithProgress(sampleLevels, initialProgress).map(
      (level) => level.unlocked
    ),
    [true, false, false]
  );

  const afterFirstLevel = applyLevelResult(
    initialProgress,
    1,
    80,
    2
  );

  assert.deepEqual(
    getLevelsWithProgress(sampleLevels, afterFirstLevel).map(
      (level) => level.unlocked
    ),
    [true, true, false]
  );
});

test("level results keep best score and stars while XP reflects known levels", () => {
  const progress = applyLevelResult(
    applyLevelResult(createInitialProgress(), 1, 120, 3),
    1,
    40,
    1
  );

  const levelsWithProgress = getLevelsWithProgress(
    sampleLevels,
    progress
  );

  assert.equal(levelsWithProgress[0].completed, true);
  assert.equal(levelsWithProgress[0].score, 120);
  assert.equal(levelsWithProgress[0].stars, 3);
  assert.equal(getTotalXp(sampleLevels, progress), 120);
});

test("level results persist latest review summary by level", () => {
  const reviewSummary = {
    didWell: ["Checked facts."],
    needsReview: ["Source details."],
    replayRecommended: true,
  };
  const progress = applyLevelResult(
    createInitialProgress(),
    1,
    80,
    2,
    reviewSummary
  );
  const levelsWithProgress = getLevelsWithProgress(
    sampleLevels,
    progress
  );

  assert.deepEqual(
    progress.reviewSummariesByLevelId[1],
    reviewSummary
  );
  assert.deepEqual(
    levelsWithProgress[0].reviewSummary,
    reviewSummary
  );
});

test("completed levels without saved review data get a fallback review summary", () => {
  const progress = {
    ...createInitialProgress(),
    completedLevelIds: [1],
  };
  const levelsWithProgress = getLevelsWithProgress(
    [
      {
        id: 1,
        title: "Reviewable",
        skill: "Source checking",
        takeaway: "You practiced checking sources.",
        content: {
          rounds: [
            {
              topic: "Weak citation details",
              concept:
                "Useful source responses include details you can verify.",
            },
          ],
        },
      },
    ],
    progress
  );

  assert.equal(levelsWithProgress[0].completed, true);
  assert.equal(
    levelsWithProgress[0].reviewSummary.reviewTopics[0],
    "Weak citation details"
  );
  assert.equal(
    levelsWithProgress[0].reviewSummary.needsReview[0],
    "Useful source responses include details you can verify."
  );
});

test("level results aggregate concept stats by topic", () => {
  const progress = applyLevelResult(
    createInitialProgress(),
    1,
    80,
    2,
    {
      conceptResults: [
        {
          concept: "Check missing source details.",
          status: "review",
          topic: "Weak citation details",
        },
        {
          concept: "Avoid personal addresses.",
          status: "strong",
          topic: "Location and routines",
        },
      ],
      didWell: ["Avoid personal addresses."],
      needsReview: ["Check missing source details."],
      replayRecommended: true,
    }
  );

  assert.deepEqual(progress.conceptStatsByTopic, {
    "Location and routines": {
      review: 0,
      strong: 1,
    },
    "Weak citation details": {
      review: 1,
      strong: 0,
    },
  });
});
