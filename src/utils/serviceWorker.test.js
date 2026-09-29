import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

test("cache failures never replace a successful network response", async () => {
  const handlers = {};
  const source = await readFile(new URL("../../public/sw.js", import.meta.url), "utf8");
  const response = new Response("online");
  vm.runInNewContext(source, {
    URL,
    self: { location: { origin: "https://example.com" }, addEventListener: (name, handler) => { handlers[name] = handler; } },
    caches: { open: async () => { throw new Error("Storage unavailable"); } },
    fetch: async () => response,
  });
  for (const mode of ["navigate", "cors"]) {
    const pending = [];
    let result;
    handlers.fetch({
      request: { method: "GET", mode, url: "https://example.com/app.js" },
      respondWith: (promise) => { result = promise; },
      waitUntil: (promise) => pending.push(promise),
    });
    assert.equal(await result, response);
    await Promise.all(pending);
  }
});

test("service worker activation removes only obsolete app caches", async () => {
  const handlers = {};
  const deleted = [];
  let claimed = false;
  const source = await readFile(new URL("../../public/sw.js", import.meta.url), "utf8");
  vm.runInNewContext(source, {
    self: {
      addEventListener: (event, handler) => { handlers[event] = handler; },
      clients: { claim: () => { claimed = true; } },
    },
    caches: {
      keys: async () => [
        "ai-adventure-lab-v1", "ai-adventure-lab-v2",
        "ai-adventure-lab-v3", "other-app-v1", "shared-assets",
      ],
      delete: async (name) => { deleted.push(name); return true; },
    },
  });
  let activation;
  handlers.activate({ waitUntil: (promise) => { activation = promise; } });
  await activation;
  assert.deepEqual(deleted, ["ai-adventure-lab-v1", "ai-adventure-lab-v2"]);
  assert.equal(claimed, true);
});
