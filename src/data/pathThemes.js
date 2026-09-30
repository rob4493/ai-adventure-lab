export const pathThemes = {
  "news-social": { id: "news", family: "toolkit", title: "Your News Toolkit", label: "Pause. Check. Share thoughtfully." },
  scams: { id: "scams", family: "toolkit", title: "Your Safety Toolkit", label: "Spot the signs. Choose a safer step." },
  "ai-best-practices": { id: "prompts", family: "toolkit", title: "Your AI Toolkit", label: "Clear questions. Useful answers." },
  "privacy-safety": { id: "privacy", family: "toolkit", title: "Your Privacy Toolkit", label: "Small choices. More control." },
  "middle-school": { id: "middle", title: "AI Explorer Lab", label: "Explore. Question. Discover." },
  "high-school": { id: "high", title: "Signal Studio", label: "Find the evidence. Make your judgment." },
  college: { id: "college", title: "AI Research Studio", label: "Evaluate evidence. Refine your reasoning." },
};

export const getTheme = (id) => Object.values(pathThemes).find((theme) => theme.id === id);
