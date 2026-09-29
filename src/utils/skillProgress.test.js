import assert from "node:assert/strict";
import test from "node:test";
import { createSkillProgress } from "./skillProgress.js";

const levels = [
  { skill: "Sources", content: { rounds: [
    { topic: "Dates", concept: "Check when a source was published." },
    { topic: "Dates", concept: "Check the year." },
    { concept: "Check the source." },
  ] } },
  { type: "elementaryIntro", skill: "Intro", content: { rounds: [{ concept: "Meet AI" }] } },
];

test("skill progress deduplicates topics and excludes completion-only introductions", () => {
  const result = createSkillProgress(levels, {});
  assert.equal(result.total, 2);
  assert.equal(result.practiced, 0);
  assert.ok(result.skills.every((skill) => skill.status === "Not started"));
});

test("skill evidence stays scoped to the active focus and includes latest practice", () => {
  const result = createSkillProgress(levels, {
    conceptStatsByTopic: { Dates: { strong: 2, review: 3 }, OtherPath: { strong: 100 } },
    practiceByTopic: { Dates: { strong: 1, total: 2 } },
  });
  assert.equal(result.practiced, 1);
  assert.equal(result.attempts, 5);
  assert.equal(result.strong, 2);
  assert.equal(result.skills[0].topic, "Dates");
  assert.deepEqual(result.skills[0].practice, { strong: 1, total: 2 });
});

test("missed answers count as practice without being labeled a strength", () => {
  const result = createSkillProgress(levels, { conceptStatsByTopic: { Dates: { review: 2 } } });
  assert.equal(result.practiced, 1);
  assert.equal(result.skills[0].status, "Building understanding");
  assert.equal(result.strong, 0);
  assert.equal(createSkillProgress([], {}).total, 0);
});
