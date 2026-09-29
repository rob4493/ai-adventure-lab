import assert from "node:assert/strict";
import test from "node:test";
import { saveProgress, storageKey } from "./progressStorage.js";

const replaceStorage = (t, descriptor) => {
  const original = Object.getOwnPropertyDescriptor(globalThis, "localStorage");
  Object.defineProperty(globalThis, "localStorage", { configurable: true, ...descriptor });
  t.after(() => {
    if (original) Object.defineProperty(globalThis, "localStorage", original);
    else delete globalThis.localStorage;
  });
};

test("failed storage writes can recover and save the latest progress", (t) => {
  const saved = new Map();
  let blocked = true;
  replaceStorage(t, { value: {
    setItem(key, value) {
      if (blocked) throw new DOMException("Storage full", "QuotaExceededError");
      saved.set(key, value);
    },
  } });
  assert.equal(saveProgress({ completedLevelIds: [1] }), false);
  blocked = false;
  const latest = { completedLevelIds: [1, 2] };
  assert.equal(saveProgress(latest), true);
  assert.deepEqual(JSON.parse(saved.get(storageKey)), latest);
});

test("blocked access to localStorage does not throw", (t) => {
  replaceStorage(t, { get: () => {
    throw new DOMException("Storage blocked", "SecurityError");
  } });
  assert.equal(saveProgress({}), false);
});
