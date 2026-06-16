import { useMemo, useState } from "react";

import HomeScreen from "./screens/HomeScreen";
import LevelSelect from "./screens/LevelSelect";
import GameplayScreen from "./screens/GameplayScreen";
import ResultsScreen from "./screens/ResultsScreen";

import levels from "./data/levels";
import {
  applyLevelResult,
  createInitialProgress,
  getLevelsWithProgress,
  getTotalXp,
} from "./utils/progress";

const STORAGE_KEY = "ai-learning-progress";

const loadProgress = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return createInitialProgress();

    return {
      ...createInitialProgress(),
      ...JSON.parse(saved),
    };
  } catch {
    return createInitialProgress();
  }
};

const saveProgress = (progress) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export default function App() {
  const [screen, setScreen] = useState("home");

  const [selectedLevel, setSelectedLevel] = useState(null);

  const [progress, setProgress] = useState(loadProgress);

  const [lastScore, setLastScore] = useState(0);
  const [lastMaxScore, setLastMaxScore] = useState(40);
  const [lastStars, setLastStars] = useState(0);

  const completedCount = levels.filter((level) =>
    progress.completedLevelIds.includes(level.id)
  ).length;

  const levelsWithProgress = useMemo(
    () =>
      getLevelsWithProgress(levels, progress),
    [progress]
  );

  const totalXp = useMemo(
    () => getTotalXp(levels, progress),
    [progress]
  );

  const goToLevels = () => {
    setScreen("levels");
  };

  const startLevel = (level) => {
    if (!level.unlocked) return;

    setSelectedLevel(level);
    setScreen("gameplay");
  };

  const finishLevel = (score, stars, maxScore = 40) => {
    if (!selectedLevel) return;

    setLastScore(score);
    setLastMaxScore(maxScore);
    setLastStars(stars);

    setProgress((currentProgress) => {
      const nextProgress = applyLevelResult(
        currentProgress,
        selectedLevel.id,
        score,
        stars
      );

      saveProgress(nextProgress);

      return nextProgress;
    });

    setScreen("results");
  };

  const nextPlayableLevel = useMemo(() => {
    if (!selectedLevel) return null;

    const currentIndex = levelsWithProgress.findIndex(
      (level) => level.id === selectedLevel.id
    );

    return levelsWithProgress[currentIndex + 1] ?? null;
  }, [levelsWithProgress, selectedLevel]);

  const canAdvanceToNextLevel = Boolean(
    nextPlayableLevel?.unlocked
  );

  const replayLevel = () => {
    setScreen("gameplay");
  };

  const nextLevel = () => {
    if (canAdvanceToNextLevel) {
      setSelectedLevel(nextPlayableLevel);
      setScreen("gameplay");
    } else {
      setScreen("levels");
    }
  };

  const goHome = () => {
    setScreen("home");
  };

  const resetProgress = () => {
    const nextProgress = createInitialProgress();

    saveProgress(nextProgress);
    setProgress(nextProgress);
    setSelectedLevel(null);
    setLastScore(0);
    setLastMaxScore(40);
    setLastStars(0);
    setScreen("home");
  };

  return (
    <>
      {screen === "home" && (
        <HomeScreen
          goToLevels={goToLevels}
          totalXp={totalXp}
          completedCount={completedCount}
          levelCount={levels.length}
          resetProgress={resetProgress}
        />
      )}

      {screen === "levels" && (
        <LevelSelect
          levels={levelsWithProgress}
          startLevel={startLevel}
          goHome={goHome}
        />
      )}

      {screen === "gameplay" && (
        <GameplayScreen
          level={selectedLevel}
          goBack={() => setScreen("levels")}
          finishLevel={finishLevel}
        />
      )}

      {screen === "results" && (
        <ResultsScreen
          level={selectedLevel}
          score={lastScore}
          maxScore={lastMaxScore}
          stars={lastStars}
          replayLevel={replayLevel}
          nextLevel={nextLevel}
          canAdvanceToNextLevel={canAdvanceToNextLevel}
          goLevels={() => setScreen("levels")}
        />
      )}
    </>
  );
}
