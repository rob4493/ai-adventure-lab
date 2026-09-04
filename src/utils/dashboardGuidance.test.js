import assert from "node:assert/strict";
import test from "node:test";

import { createDashboardGuidance } from "./dashboardGuidance.js";

test("dashboard guidance starts the first unlocked level before progress exists", () => {
  const guidance = createDashboardGuidance([
    {
      id: 1,
      title: "First Level",
      completed: false,
      unlocked: true,
    },
  ]);

  assert.equal(guidance.action, "start-level");
  assert.equal(guidance.level.title, "First Level");
});

test("dashboard guidance sends weak concepts to the review hub first", () => {
  const guidance = createDashboardGuidance(
    [
      {
        id: 1,
        title: "Completed Level",
        completed: true,
        stars: 3,
        unlocked: true,
      },
      {
        id: 2,
        title: "Next Level",
        completed: false,
        unlocked: true,
      },
    ],
    {
      "Source details": {
        review: 2,
        strong: 0,
      },
    }
  );

  assert.equal(guidance.action, "review-hub");
  assert.equal(guidance.topic, "Source details");
});
