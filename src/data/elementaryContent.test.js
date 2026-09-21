import assert from "node:assert/strict";
import test from "node:test";
import elementaryContent from "./content/elementary.js";

const expectedLevelKeys = [
  "meetAi",
  "factCheckQuest",
  "askItClearly",
  "learnDontCopy",
  "privacyPower",
];

test("grades 3-5 content includes a guided intro and four quiz levels", () => {
  assert.deepEqual(Object.keys(elementaryContent), expectedLevelKeys);

  assert.equal(elementaryContent.meetAi.steps.length, 4);
  assert.equal(elementaryContent.meetAi.practice.options.length, 3);
  assert.ok(
    elementaryContent.meetAi.practice.options.some(
      (option) => option.id === elementaryContent.meetAi.practice.correctAnswer
    )
  );

  for (const [levelKey, content] of Object.entries(elementaryContent).filter(
    ([key]) => key !== "meetAi"
  )) {
    assert.equal(content.rounds.length, 4, `${levelKey} should have four rounds`);
    assert.equal(content.scoring.correctScore, 40);
    assert.ok(content.instructions);
    assert.equal(content.guidedFirstRound, true);
    assert.ok(
      content.guidance || content.rounds.every((round) => round.guidance),
      `${levelKey} should provide guidance throughout the level`
    );
  }
});

test("every elementary round has a valid answer and review concept", () => {
  for (const [levelKey, content] of Object.entries(elementaryContent)) {
    if (levelKey === "meetAi") continue;
    for (const [roundIndex, round] of content.rounds.entries()) {
      const answerValues = round.options
        ? round.options.map((option) => option.id)
        : content.options.map((option) => option.value);

      assert.equal(
        new Set(answerValues).size,
        answerValues.length,
        `${levelKey} round ${roundIndex + 1} has duplicate answers`
      );
      assert.ok(
        answerValues.includes(round.correctAnswer),
        `${levelKey} round ${roundIndex + 1} has an invalid correct answer`
      );
      assert.ok(round.topic, `${levelKey} round ${roundIndex + 1} needs a topic`);
      assert.ok(
        round.concept,
        `${levelKey} round ${roundIndex + 1} needs a review concept`
      );
    }
  }
});

test("Fact Check Quest compares every AI answer with a visible clue", () => {
  const factCheck = elementaryContent.factCheckQuest;

  assert.equal(factCheck.alwaysShowGuidance, true);
  assert.deepEqual(
    factCheck.options.map((option) => option.label),
    ["Matches", "Doesn't Match"]
  );
  assert.ok(factCheck.rounds.every((round) => round.guidance));
});
