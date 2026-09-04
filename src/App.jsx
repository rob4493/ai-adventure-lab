import { MotionConfig } from "framer-motion";
import { useMemo, useState } from "react";

import IntroScreen from "./screens/IntroScreen";
import HomeScreen from "./screens/HomeScreen";
import FocusSelect from "./screens/FocusSelect";
import LevelSelect from "./screens/LevelSelect";
import GameplayScreen from "./screens/GameplayScreen";
import ResultsScreen from "./screens/ResultsScreen";
import ReviewScreen from "./screens/ReviewScreen";
import ReviewHubScreen from "./screens/ReviewHubScreen";
import SettingsScreen from "./screens/SettingsScreen";

import audienceTracks, {
  DEFAULT_TRACK_ID,
  DEFAULT_STUDENT_GRADE_BAND_ID,
  getDefaultPathIdForTrack,
  getProgressKey,
  getTrackById,
  getTrackPathById,
  getTrackSubPaths,
} from "./data/tracks";
import {
  applyLevelResult,
  createInitialProgress,
  getLevelsWithProgress,
  getTotalXp,
} from "./utils/progress";
import { createDashboardGuidance } from "./utils/dashboardGuidance";

const STORAGE_KEY = "ai-learning-progress";
const EMPTY_LEVELS = [];
const DEFAULT_PROGRESS_KEY = getProgressKey(
  DEFAULT_TRACK_ID,
  DEFAULT_STUDENT_GRADE_BAND_ID
);

const createInitialAppProgress = () => ({
  activePathIdByTrackId: {
    [DEFAULT_TRACK_ID]: DEFAULT_STUDENT_GRADE_BAND_ID,
  },
  activeTrackId: DEFAULT_TRACK_ID,
  progressByPathId: {
    [DEFAULT_PROGRESS_KEY]: createInitialProgress(),
  },
});

// Fill in missing fields so older saved progress still works after app updates.
const normalizeTrackProgress = (progress = {}) => ({
  ...createInitialProgress(),
  ...(progress ?? {}),
});

const normalizeSavedProgress = (savedProgress) => {
  const initialAppProgress = createInitialAppProgress();

  // Current storage shape keeps separate progress for each playable path.
  if (savedProgress?.progressByPathId) {
    const activeTrack = getTrackById(savedProgress.activeTrackId);

    return {
      activePathIdByTrackId: {
        ...initialAppProgress.activePathIdByTrackId,
        ...(savedProgress.activePathIdByTrackId ?? {}),
      },
      activeTrackId: activeTrack?.id ?? DEFAULT_TRACK_ID,
      progressByPathId: {
        ...initialAppProgress.progressByPathId,
        ...Object.fromEntries(
          Object.entries(savedProgress.progressByPathId).map(
            ([pathId, pathProgress]) => [
              pathId,
              normalizeTrackProgress(pathProgress),
            ]
          )
        ),
      },
    };
  }

  // Legacy migration from the earlier track-only progress structure.
  if (savedProgress?.progressByTrackId) {
    const activeTrack = getTrackById(savedProgress.activeTrackId);
    const legacyStudentProgress =
      savedProgress.progressByTrackId[DEFAULT_TRACK_ID];

    return {
      activePathIdByTrackId: {
        ...initialAppProgress.activePathIdByTrackId,
      },
      activeTrackId: activeTrack?.id ?? DEFAULT_TRACK_ID,
      progressByPathId: {
        ...initialAppProgress.progressByPathId,
        ...(legacyStudentProgress
          ? {
              [DEFAULT_PROGRESS_KEY]:
                normalizeTrackProgress(legacyStudentProgress),
            }
          : {}),
      },
    };
  }

  return {
    ...initialAppProgress,
    progressByPathId: {
      [DEFAULT_PROGRESS_KEY]: normalizeTrackProgress(savedProgress),
    },
  };
};

const loadProgress = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return createInitialAppProgress();

    return normalizeSavedProgress(JSON.parse(saved));
  } catch {
    return createInitialAppProgress();
  }
};

const saveProgress = (progress) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export default function App() {
  const [screen, setScreen] = useState("intro");

  const [selectedLevel, setSelectedLevel] = useState(null);
  const [focusTrackId, setFocusTrackId] = useState(DEFAULT_TRACK_ID);

  const [appProgress, setAppProgress] = useState(loadProgress);

  const [lastScore, setLastScore] = useState(0);
  const [lastMaxScore, setLastMaxScore] = useState(40);
  const [lastStars, setLastStars] = useState(0);
  const [lastPreviousBest, setLastPreviousBest] = useState(0);
  const [lastIsNewBest, setLastIsNewBest] = useState(false);
  const [lastWorldSummary, setLastWorldSummary] = useState(null);
  const [lastReviewSummary, setLastReviewSummary] = useState(null);
  const [reviewHubReturnScreen, setReviewHubReturnScreen] = useState("home");

  const activeTrack = useMemo(
    () => getTrackById(appProgress.activeTrackId),
    [appProgress.activeTrackId]
  );
  const activePathId =
    appProgress.activePathIdByTrackId?.[activeTrack.id] ??
    getDefaultPathIdForTrack(activeTrack);
  const activePath = getTrackPathById(activeTrack, activePathId);
  const activeTrackSubPaths = getTrackSubPaths(activeTrack);
  const focusTrack = getTrackById(focusTrackId);
  const progressKey = getProgressKey(
    activeTrack.id,
    activeTrackSubPaths ? activePath?.id : null
  );
  const activeLevels = activePath?.levels ?? EMPTY_LEVELS;
  const activeWorldDetails = activePath?.worlds ?? activeTrack.worlds;
  const progress =
    appProgress.progressByPathId[progressKey] ??
    createInitialProgress();

  const completedCount = activeLevels.filter((level) =>
    progress.completedLevelIds.includes(level.id)
  ).length;

  const levelsWithProgress = useMemo(
    () =>
      getLevelsWithProgress(activeLevels, progress),
    [activeLevels, progress]
  );

  const totalXp = useMemo(
    () => getTotalXp(activeLevels, progress),
    [activeLevels, progress]
  );
  const dashboardGuidance = useMemo(
    () =>
      createDashboardGuidance(
        levelsWithProgress,
        progress.conceptStatsByTopic
      ),
    [levelsWithProgress, progress.conceptStatsByTopic]
  );

  const saveAppProgress = (nextAppProgress) => {
    saveProgress(nextAppProgress);
    setAppProgress(nextAppProgress);
  };

  // Persist only the currently active path while keeping other paths untouched.
  const saveTrackProgress = (nextTrackProgress) => {
    saveAppProgress({
      ...appProgress,
      progressByPathId: {
        ...appProgress.progressByPathId,
        [progressKey]: nextTrackProgress,
      },
    });
  };

  const goToLevels = () => {
    setScreen("levels");
  };

  const goToHome = () => {
    setScreen("home");
  };

  const goToIntro = () => {
    setScreen("intro");
  };

  const goToSettings = () => {
    setScreen("settings");
  };

  const goToReviewHub = (returnScreen = "home") => {
    setReviewHubReturnScreen(returnScreen);
    setScreen("reviewHub");
  };

  const followDashboardGuidance = () => {
    if (dashboardGuidance.action === "start-level" && dashboardGuidance.level) {
      startLevel(dashboardGuidance.level);
      return;
    }

    goToReviewHub("home");
  };

  // Switching tracks creates progress lazily so planned paths do not create empty records.
  const activateTrack = (track) => {
    const defaultPathId = getDefaultPathIdForTrack(track);
    const nextProgressKey = getProgressKey(track.id, defaultPathId);

    saveAppProgress({
      ...appProgress,
      activeTrackId: track.id,
      activePathIdByTrackId: {
        ...appProgress.activePathIdByTrackId,
        ...(defaultPathId ? { [track.id]: defaultPathId } : {}),
      },
      progressByPathId: {
        ...appProgress.progressByPathId,
        [nextProgressKey]:
          appProgress.progressByPathId[nextProgressKey] ??
          createInitialProgress(),
      },
    });
    setSelectedLevel(null);
    setLastWorldSummary(null);
    setLastReviewSummary(null);
  };

  const selectTrack = (trackId) => {
    const nextTrack = getTrackById(trackId);
    const subPaths = getTrackSubPaths(nextTrack);

    if (subPaths) {
      setFocusTrackId(nextTrack.id);
      setScreen("focus");
      return;
    }

    if (!nextTrack?.isAvailable) return;

    activateTrack(nextTrack);
    setScreen("levels");
  };

  // Focus selections become the active playable path, such as Student: Middle School.
  const selectTrackPath = (trackId, pathId) => {
    const track = getTrackById(trackId);
    const path = getTrackPathById(track, pathId);

    if (!track?.isAvailable || !path?.isAvailable) return;

    const nextProgressKey = getProgressKey(track.id, path.id);

    saveAppProgress({
      ...appProgress,
      activePathIdByTrackId: {
        ...appProgress.activePathIdByTrackId,
        [track.id]: path.id,
      },
      activeTrackId: track.id,
      progressByPathId: {
        ...appProgress.progressByPathId,
        [nextProgressKey]:
          appProgress.progressByPathId[nextProgressKey] ??
          createInitialProgress(),
      },
    });
    setSelectedLevel(null);
    setLastWorldSummary(null);
    setLastReviewSummary(null);
    setScreen("levels");
  };

  const startLevel = (level) => {
    if (!level.unlocked) return;

    setSelectedLevel(level);
    setScreen("gameplay");
  };

  const reviewLevel = (level) => {
    if (!level.completed || !level.reviewSummary) return;

    setSelectedLevel(level);
    setScreen("review");
  };

  const finishLevel = (
    score,
    stars,
    maxScore = 40,
    reviewSummary = null
  ) => {
    if (!selectedLevel) return;

    const previousBest =
      progress.scoresByLevelId[selectedLevel.id] ?? 0;
    const isNewBest = score > previousBest;

    setLastScore(score);
    setLastMaxScore(maxScore);
    setLastStars(stars);
    setLastPreviousBest(previousBest);
    setLastIsNewBest(isNewBest);
    setLastReviewSummary(reviewSummary);

    const nextProgress = applyLevelResult(
      progress,
      selectedLevel.id,
      score,
      stars,
      reviewSummary
    );
    // World summaries appear only when the player completes the last level in that world.
    const worldLevels = activeLevels.filter(
      (level) => level.world === selectedLevel.world
    );
    const isFinalWorldLevel =
      worldLevels[worldLevels.length - 1]?.id === selectedLevel.id;
    const completedWorld =
      isFinalWorldLevel &&
      worldLevels.every((level) =>
        nextProgress.completedLevelIds.includes(level.id)
      );

    setLastWorldSummary(
      completedWorld
        ? {
            ...activeWorldDetails[selectedLevel.world],
            levelCount: worldLevels.length,
          }
        : null
    );

    saveTrackProgress(nextProgress);

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

  const replaySpecificLevel = (level) => {
    if (!level.unlocked) return;

    setSelectedLevel(level);
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

  const resetProgress = () => {
    const nextProgress = createInitialProgress();

    saveTrackProgress(nextProgress);
    setSelectedLevel(null);
    setLastScore(0);
    setLastMaxScore(40);
    setLastStars(0);
    setLastPreviousBest(0);
    setLastIsNewBest(false);
    setLastWorldSummary(null);
    setLastReviewSummary(null);
    setScreen("home");
  };

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#app-main">
        Skip to main content
      </a>

      <div id="app-main">
        {screen === "intro" && (
          <IntroScreen
            goToHome={goToHome}
            goToLevels={goToLevels}
            goToSettings={goToSettings}
            hasStarted={completedCount > 0 || totalXp > 0}
          />
        )}

        {screen === "home" && (
          <HomeScreen
            goToLevels={goToLevels}
            goToIntro={goToIntro}
            activeTrack={activeTrack}
            activePath={activePath}
            dashboardGuidance={dashboardGuidance}
            tracks={audienceTracks}
            selectTrack={selectTrack}
            totalXp={totalXp}
            completedCount={completedCount}
            levelCount={activeLevels.length}
            followDashboardGuidance={followDashboardGuidance}
            goToSettings={goToSettings}
            goToReviewHub={() => goToReviewHub("home")}
          />
        )}


        {screen === "focus" && (
          <FocusSelect
            activeTrack={activeTrack}
            activePath={activePath}
            goToHome={goToHome}
            selectTrackPath={selectTrackPath}
            track={focusTrack}
          />
        )}

        {screen === "settings" && (
          <SettingsScreen
            completedCount={completedCount}
            activeTrack={activeTrack}
            activePath={activePath}
            goToHome={goToHome}
            levelCount={activeLevels.length}
            resetProgress={resetProgress}
            totalXp={totalXp}
          />
        )}

        {screen === "levels" && (
          <LevelSelect
            levels={levelsWithProgress}
            track={activeTrack}
            learningPath={activePath}
            startLevel={startLevel}
            reviewLevel={reviewLevel}
            goToReviewHub={() => goToReviewHub("levels")}
            goToHome={goToHome}
          />
        )}

        {screen === "reviewHub" && (
          <ReviewHubScreen
            conceptStatsByTopic={progress.conceptStatsByTopic}
            goBack={() => setScreen(reviewHubReturnScreen)}
            learningPath={activePath}
            levels={levelsWithProgress}
            replayLevel={replaySpecificLevel}
            track={activeTrack}
          />
        )}

        {screen === "review" && (
          <ReviewScreen
            level={selectedLevel}
            goLevels={() => setScreen("levels")}
            replayLevel={replaySpecificLevel}
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
            previousBest={lastPreviousBest}
            isNewBest={lastIsNewBest}
            worldSummary={lastWorldSummary}
            reviewSummary={lastReviewSummary}
            replayLevel={replayLevel}
            nextLevel={nextLevel}
            canAdvanceToNextLevel={canAdvanceToNextLevel}
            goLevels={() => setScreen("levels")}
          />
        )}
      </div>
    </MotionConfig>
  );
}
