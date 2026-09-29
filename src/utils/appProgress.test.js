import assert from "node:assert/strict";
import test from "node:test";
import { normalizeSave } from "./appProgress.js";
import { createInitialProgress } from "./progress.js";
import { getSubPaths, getTrackById } from "../data/tracks.js";

test("legacy Everyday progress migrates into matching focuses without restoring resets", () => {
  const paths = getSubPaths(getTrackById("everyday")).filter((path) => path.isAvailable);
  const ids = paths.flatMap((path) => path.levels.map((level) => level.id));
  const saved = normalizeSave({ progressByTrackId: { everyday: {
    ...createInitialProgress(), completedLevelIds: ids,
    scoresByLevelId: Object.fromEntries(ids.map((id) => [id, 50])),
  } } });
  for (const path of paths) {
    const progress = saved.progressByPathId[`everyday:${path.id}`];
    assert.deepEqual(progress.completedLevelIds, path.levels.map((level) => level.id));
    assert.equal(Object.keys(progress.scoresByLevelId).length, path.levels.length);
  }
  const key = `everyday:${paths[0].id}`;
  saved.progressByPathId[key] = createInitialProgress();
  assert.deepEqual(normalizeSave(saved).progressByPathId[key], createInitialProgress());
});

test("flat student saves retain achievements and missing maps receive defaults", () => {
  const saved = normalizeSave({ completedLevelIds: [1], scoresByLevelId: { 1: 50 } });
  const progress = saved.progressByPathId["student:high-school"];
  assert.deepEqual(progress.completedLevelIds, [1]);
  assert.equal(progress.scoresByLevelId[1], 50);
  assert.deepEqual(progress.practiceByTopic, {});
  assert.deepEqual(normalizeSave(null).progressByPathId["student:high-school"], createInitialProgress());
});
