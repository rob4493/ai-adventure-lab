import assert from "node:assert/strict";
import test from "node:test";

import {
  getCriteriaScore,
  getMatchedCriteria,
  getPromptBuilderMaxRoundScore,
  getPromptBuilderRoundScore,
  getQuizRoundScore,
  getSelectedOptions,
  getStarsFromScore,
} from "./scoring.js";

test("quiz scoring gives full credit first try and partial credit after retry", () => {
  const scoring = {
    correctScore: 40,
    retryCorrectScore: 25,
    incorrectScore: 10,
  };

  assert.equal(getQuizRoundScore(true, 0, scoring), 40);
  assert.equal(getQuizRoundScore(true, 1, scoring), 25);
  assert.equal(getQuizRoundScore(false, 0, scoring), 10);
});

test("star scoring is based on percentage thresholds", () => {
  assert.equal(getStarsFromScore(120, 120), 3);
  assert.equal(getStarsFromScore(60, 120), 2);
  assert.equal(getStarsFromScore(10, 120), 1);
  assert.equal(getStarsFromScore(0, 120), 0);
});

test("prompt criteria matching scores only included phrases", () => {
  const criteria = [
    {
      phrase: "science",
      points: 10,
    },
    {
      phrase: "quiz",
      points: 10,
    },
    {
      phrase: "answers",
      points: 10,
    },
  ];

  const matches = getMatchedCriteria(
    "Make a science quiz for me.",
    criteria
  );

  assert.deepEqual(
    matches.map((criterion) => criterion.phrase),
    ["science", "quiz"]
  );
  assert.equal(getCriteriaScore(matches), 20);
});

test("prompt builder scores selected blocks against the best possible round score", () => {
  const categories = [
    {
      id: "role",
      options: [
        {
          id: "coach",
          points: 15,
        },
        {
          id: "critic",
          points: 2,
        },
      ],
    },
    {
      id: "format",
      options: [
        {
          id: "table",
          points: 20,
        },
        {
          id: "story",
          points: 5,
        },
      ],
    },
  ];

  const selectedOptions = getSelectedOptions(categories, {
    role: "coach",
    format: "story",
  });

  assert.equal(getPromptBuilderRoundScore(selectedOptions), 20);
  assert.equal(getPromptBuilderMaxRoundScore(categories), 35);
});
