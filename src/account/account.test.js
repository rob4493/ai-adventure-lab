import assert from "node:assert/strict";
import test from "node:test";
import { canRegister, validUsername } from "./policy.js";
import { createSync } from "./sync.js";

const settle = () => new Promise((resolve) => setTimeout(resolve, 0));
test("age policy blocks under-13 accounts and requires guardian acknowledgement for managed accounts", () => {
  assert.equal(canRegister("under13", true, true), false);
  assert.equal(canRegister("", false, false), false);
  assert.equal(canRegister("teen", true, false), false);
  assert.equal(canRegister("teen", true, true), true);
  assert.equal(canRegister("teen", false, false), true);
  assert.equal(canRegister("older", false, false), true);
  assert.equal(validUsername("Alex-7"), true);
  assert.equal(validUsername("A"), false);
  assert.equal(validUsername("full name@email.com"), false);
});

test("lost responses retry the same operation without duplicate writes", async () => {
  let version = 0;
  let fail = true;
  let current;
  let pending;
  const seen = new Map();
  const engine = createSync({
    read: async () => ({ profile: {}, progress: {}, version }),
    write: async (item, expected) => {
      if (seen.has(item.id)) return { version: seen.get(item.id) };
      assert.equal(expected, version);
      version += 1; seen.set(item.id, version);
      if (fail) { fail = false; throw new Error("Response lost"); }
      return { version };
    },
    cache: (value) => { pending = structuredClone(value); return true; },
    onChange: (value) => { current = value; }, makeId: () => "attempt1",
  });
  await engine.load(null);
  engine.save({ completed: [1] }); await settle();
  assert.equal(pending.queue[0].id, "attempt1");
  assert.equal(current.queue.length, 1);
  await engine.retry();
  assert.equal(version, 1);
  assert.equal(current.queue.length, 0);
  assert.equal(current.error, "");
});

test("a newer cloud reset blocks an older device snapshot", async () => {
  let current;
  let calls = 0;
  const engine = createSync({
    read: async () => ({ profile: {}, progress: { completed: [] }, version: 5 }),
    write: async () => { calls += 1; return { conflict: true, version: 5 }; },
    cache: () => true, onChange: (value) => { current = value; },
  });
  await engine.load({ version: 3, queue: [{ id: "old", progress: { completed: [1] } }] });
  assert.equal(current.conflict, true);
  assert.deepEqual(current.progress.completed, [1]);
  await engine.retry(); assert.equal(calls, 1);
  await engine.useCloud();
  assert.equal(current.conflict, false);
  assert.deepEqual(current.progress.completed, []);
});

test("edits made while a save is in flight are saved sequentially", async () => {
  let release;
  let current;
  let index = 0;
  const versions = [];
  const engine = createSync({
    read: async () => ({ profile: {}, progress: {}, version: 0 }),
    write: async (item, version) => {
      versions.push([item.progress.value, version]);
      if (version === 0) await new Promise((resolve) => { release = resolve; });
      return { version: version + 1 };
    },
    cache: () => true, onChange: (value) => { current = value; }, makeId: () => String(++index),
  });
  await engine.load(null);
  engine.save({ value: 1 }); engine.save({ value: 2 });
  release(); await settle();
  assert.deepEqual(versions, [[1, 0], [2, 1]]);
  assert.equal(current.queue.length, 0);
});

test("stopped account engines cannot publish into another account", async () => {
  let release;
  let events = 0;
  const engine = createSync({
    read: async () => ({ profile: {}, progress: {}, version: 0 }),
    write: async () => { await new Promise((resolve) => { release = resolve; }); return { version: 1 }; },
    cache: () => false, onChange: () => { events += 1; }, makeId: () => "one",
  });
  await engine.load(null); engine.save({});
  engine.stop(); const before = events;
  release(); await settle();
  assert.equal(events, before);
});

test("an acknowledged old save cannot hide a newer cloud version", async () => {
  let current;
  const engine = createSync({
    read: async () => ({ profile: {}, progress: { completed: [] }, version: 4 }),
    write: async () => ({ version: 2 }),
    cache: () => true, onChange: (value) => { current = value; },
  });
  await engine.load({ version: 1, queue: [{ id: "already-saved", progress: { completed: [1] } }] });
  assert.equal(current.conflict, true);
  assert.equal(current.queue.length, 0);
  assert.deepEqual(current.progress.completed, [1]);
});
