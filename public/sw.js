const cachePrefix = "ai-adventure-lab-";
const appCache = `${cachePrefix}v3`;
const appShell = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/favicon.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(appCache)
      .then((cache) => cache.addAll(appShell))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  // Other applications on this origin may own caches too.
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) =>
              cacheName.startsWith(cachePrefix) && cacheName !== appCache
            )
            .map((cacheName) => caches.delete(cacheName))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;

  const readCache = (key) => caches.open(appCache)
    .then((cache) => cache.match(key)).catch(() => undefined);
  const saveCache = (key, response) => {
    if (response.status !== 200) return;
    const copy = response.clone();
    // Cache storage may be unavailable or full; network responses must still work.
    event.waitUntil(caches.open(appCache)
      .then((cache) => cache.put(key, copy)).catch(() => {}));
  };

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          saveCache("/index.html", response);
          return response;
        })
        .catch(() => readCache("/index.html"))
    );
    return;
  }

  event.respondWith(
    readCache(request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(request).then((response) => {
        saveCache(request, response);
        return response;
      });
    })
  );
});
