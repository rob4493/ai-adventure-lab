import assert from "node:assert/strict";
import test from "node:test";
import { getTrackById, getTrackPathById } from "./tracks.js";
import { applyLevelResult, createInitialProgress, getLevelsWithProgress } from "../utils/progress.js";
import { createPracticeRounds } from "../utils/targetedPractice.js";

const path = getTrackPathById(getTrackById("everyday"), "privacy-safety");

test("Privacy & Safety has playable content with valid choices and feedback", () => {
  assert.equal(path.isAvailable, true);
  assert.equal(path.levels.length, 3);
  assert.equal(new Set(path.levels.map((level) => level.id)).size, 3);
  for (const level of path.levels) {
    assert.equal(level.type, "questionChoice");
    assert.equal(level.content.rounds.length, 4);
    for (const round of level.content.rounds) {
      assert.equal(round.options.filter((option) => option.id === round.correctAnswer).length, 1);
      assert.equal(new Set(round.options.map((option) => option.id)).size, 3);
      assert.ok(round.options.every((option) => option.label && option.feedback));
      assert.ok(round.scenario && round.prompt && round.topic && round.concept);
    }
  }
});

test("privacy lessons unlock sequentially and completed rounds support practice", () => {
  const initial = createInitialProgress();
  assert.deepEqual(getLevelsWithProgress(path.levels, initial).map((level) => level.unlocked), [true, false, false]);
  const saved = applyLevelResult(initial, path.levels[0].id, 160, 3);
  const levels = getLevelsWithProgress(path.levels, saved);
  assert.deepEqual(levels.map((level) => level.unlocked), [true, true, false]);
  assert.ok(createPracticeRounds(levels, "Share less").length > 0);
  assert.deepEqual(initial.completedLevelIds, []);
});
