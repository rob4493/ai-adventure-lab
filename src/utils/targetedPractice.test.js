import assert from "node:assert/strict";
import test from "node:test";
import { createPracticeRounds, applyPracticeResult } from "./targetedPractice.js";
import { createInitialProgress, applyLevelResult } from "./progress.js";

const level = {
  id: 1, completed: true, unlocked: true, type: "questionChoice", skill: "Sources",
  content: { guidedFirstRound: true, rounds: [
    { concept: "Check dates", topic: "Sources" },
    { concept: "Protect names", topic: "Privacy" },
    { concept: "Check authors", topic: "Sources" },
    { concept: "Check evidence" },
    { concept: "Check links", topic: "Sources" },
  ] },
  reviewSummary: { conceptResults: [{ concept: "Check authors", topic: "Sources", status: "review" }] },
};

test("practice selects at most three matching rounds, prioritizing missed concepts", () => {
  const rounds = createPracticeRounds([level], "Sources");
  assert.equal(rounds.length, 3);
  assert.equal(rounds[0].content.rounds[0].concept, "Check authors");
  assert.ok(rounds.every((item) => item.content.rounds.length === 1 && !item.content.guidedFirstRound));
  assert.ok(rounds.every((item) => item.content.rounds[0].concept !== "Protect names"));
  assert.equal(level.content.rounds.length, 5);
});

test("practice excludes locked, unfinished, and intro lessons and handles empty topics", () => {
  assert.deepEqual(createPracticeRounds([
    { ...level, completed: false }, { ...level, unlocked: false },
    { ...level, type: "elementaryIntro" },
  ], "Sources"), []);
  assert.deepEqual(createPracticeRounds([level], "Unknown"), []);
});

test("practice persists concept results without awarding XP or changing level records", () => {
  const before = applyLevelResult(createInitialProgress(), 1, 80, 2);
  const after = applyPracticeResult(before, "Sources", [
    { topic: "Sources", concept: "Check authors", status: "strong" },
    { topic: "Sources", concept: "Check dates", status: "review" },
  ]);
  for (const key of ["completedLevelIds", "scoresByLevelId", "starsByLevelId", "reviewSummariesByLevelId"]) {
    assert.deepEqual(after[key], before[key]);
  }
  assert.deepEqual(after.conceptStatsByTopic.Sources, { strong: 1, review: 1 });
  assert.deepEqual(after.practiceByTopic.Sources, { strong: 1, total: 2 });
  assert.deepEqual(applyLevelResult(after, 2, 40, 1).practiceByTopic, after.practiceByTopic);
});
