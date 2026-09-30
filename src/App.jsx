import { createAppProgress, normalizeSave } from "./utils/appProgress";
import { MotionConfig } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import IntroScreen from "./screens/IntroScreen";
import HomeScreen from "./screens/HomeScreen";
import FocusSelect from "./screens/FocusSelect";
import LevelSelect from "./screens/LevelSelect";
import GameplayScreen from "./screens/GameplayScreen";
import ResultsScreen from "./screens/ResultsScreen";
import ReviewScreen from "./screens/ReviewScreen";
import ReviewHubScreen from "./screens/ReviewHubScreen";
import SettingsScreen from "./screens/SettingsScreen";
import PracticeScreen from "./screens/PracticeScreen";
import { pathThemes } from "./data/pathThemes";
import "./pathThemes.css";
import { createSkillProgress } from "./utils/skillProgress";
import { createPracticeRounds, applyPracticeResult } from "./utils/targetedPractice";

import audienceTracks, {
  defaultTrackId,
  getDefaultPathId,
  getProgressKey,
  getTrackById,
  getTrackPathById,
  getSubPaths,
} from "./data/tracks";
import {
  applyLevelResult,
  createInitialProgress,
  getLevelsWithProgress,
  getTotalXp,
} from "./utils/progress";
import { createDashboardGuidance } from "./utils/dashboardGuidance";
import { saveProgress, storageKey } from "./utils/progressStorage";

const emptyLevels = [];
const loadProgress = () => {
  try {
    const saved = localStorage.getItem(storageKey);

    if (!saved) return createAppProgress();

    return normalizeSave(JSON.parse(saved));
  } catch {
    return createAppProgress();
  }
};

export default function App({ initialProgress, persistProgress = saveProgress }) {
  const [screen, setScreen] = useState("intro");

  const [selectedLevel, setSelectedLevel] = useState(null);
  const [focusTrackId, setFocusTrackId] = useState(defaultTrackId);

  const [appProgress, setAppProgress] = useState(() => initialProgress ?? loadProgress());
  const [saveFailed, setSaveFailed] = useState(false);
  const [practiceSession, setPracticeSession] = useState(null);

  // Screen changes share one page, so reset its scroll to reveal the new header.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [screen, selectedLevel?.id]);

  const [lastScore, setLastScore] = useState(0);
  const [lastMaxScore, setLastMaxScore] = useState(40);
  const [lastStars, setLastStars] = useState(0);
  const [previousBest, setPreviousBest] = useState(0);
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
    getDefaultPathId(activeTrack);
  const activePath = getTrackPathById(activeTrack, activePathId);
  const activePaths = getSubPaths(activeTrack);
  const focusTrack = getTrackById(focusTrackId);
  const progressKey = getProgressKey(
    activeTrack.id,
    activePaths ? activePath?.id : null
  );
  const activeLevels = activePath?.levels ?? emptyLevels;
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

  const saveAppProgress = (nextSave) => {
    setAppProgress(nextSave);
    setSaveFailed(!persistProgress(nextSave));
  };

  // Persist only the currently active path while keeping other paths untouched.
  const saveTrackProgress = (nextProgress) => {
    saveAppProgress({
      ...appProgress,
      progressByPathId: {
        ...appProgress.progressByPathId,
        [progressKey]: nextProgress,
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
    const defaultPathId = getDefaultPathId(track);
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
    const subPaths = getSubPaths(nextTrack);

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
    setPreviousBest(previousBest);
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

    const index = levelsWithProgress.findIndex(
      (level) => level.id === selectedLevel.id
    );

    return levelsWithProgress[index + 1] ?? null;
  }, [levelsWithProgress, selectedLevel]);

  const canAdvance = Boolean(
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
    if (canAdvance) {
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
    setPreviousBest(0);
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

      <div id="app-main" className={pathThemes[activePath?.id] && ["levels", "gameplay", "results", "review", "reviewHub", "practice"].includes(screen) ? `pathTheme theme${pathThemes[activePath.id].id} ${pathThemes[activePath.id].family ?? ""}` : ""}>
        {saveFailed && (
          <div role="status" className="relative z-50 bg-amber-100 px-4 py-3 text-center text-amber-950">
            <p>
              Your progress is available for this session, but couldn’t be saved
              on this device. Keep this page open to avoid losing your latest changes.
            </p>
            <button
              type="button"
              className="mt-2 rounded border border-amber-950 px-3 py-1 font-semibold"
              onClick={() => setSaveFailed(!persistProgress(appProgress))}
            >
              Try saving again
            </button>
          </div>
        )}
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
            skillProgress={createSkillProgress(activeLevels, progress)}
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
            practiceByTopic={progress.practiceByTopic}
            startPractice={(topic) => {
              const rounds = createPracticeRounds(levelsWithProgress, topic);
              if (!rounds.length) return;
              setPracticeSession({ topic, rounds });
              setScreen("practice");
            }}
            conceptStatsByTopic={progress.conceptStatsByTopic}
            goBack={() => setScreen(reviewHubReturnScreen)}
            learningPath={activePath}
            levels={levelsWithProgress}
            replayLevel={replaySpecificLevel}
            track={activeTrack}
          />
        )}

        {screen === "practice" && practiceSession && (
          <PracticeScreen
            session={practiceSession}
            goBack={() => setScreen("reviewHub")}
            finishPractice={(topic, results) => saveTrackProgress(applyPracticeResult(progress, topic, results))}
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
            previousBest={previousBest}
            isNewBest={lastIsNewBest}
            worldSummary={lastWorldSummary}
            reviewSummary={lastReviewSummary}
            replayLevel={replayLevel}
            nextLevel={nextLevel}
            canAdvance={canAdvance}
            goLevels={() => setScreen("levels")}
          />
        )}
      </div>
    </MotionConfig>
  );
}
