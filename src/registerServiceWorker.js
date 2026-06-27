export const registerServiceWorker = () => {
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {
      // The app should still work normally if service worker registration fails.
    });
  });
};
