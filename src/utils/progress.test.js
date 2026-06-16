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
