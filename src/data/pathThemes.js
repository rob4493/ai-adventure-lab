export const pathThemes = {
  "middle-school": { id: "middle", title: "AI Explorer Lab", label: "Explore. Question. Discover." },
  "high-school": { id: "high", title: "Signal Studio", label: "Find the evidence. Make your judgment." },
  college: { id: "college", title: "AI Research Studio", label: "Evaluate evidence. Refine your reasoning." },
};

export const getTheme = (id) => Object.values(pathThemes).find((theme) => theme.id === id);
