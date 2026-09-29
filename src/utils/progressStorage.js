export const storageKey = "ai-learning-progress";

// Accessing localStorage itself can throw when browser storage is blocked.
export const saveProgress = (progress) => {
  try {
    localStorage.setItem(storageKey, JSON.stringify(progress));
    return true;
  } catch {
    return false;
  }
};
