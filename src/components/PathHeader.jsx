import BackgroundDetails from "./BackgroundDetails";
import { getTheme } from "../data/pathThemes";

export default function PathHeader({ level, round, total, goBack }) {
  const theme = getTheme(level.theme);
  return (
    <header className="pathHeader">
      <BackgroundDetails path={theme.id} />
      <div className="pathHeaderContent">
        <div className="pathTop"><button className="app-back-button" onClick={goBack} aria-label={level.isPractice ? "Back to Review Hub" : "Back to level select"}>&lt; Back</button><span aria-label={`Round ${round} of ${total}`}>{round} / {total}</span></div>
        <p className="pathBrand">{theme.title}</p>
        <h1>{level.title}</h1>
        <p className="pathSkill">{level.skill}</p>
        <details className="pathInstructions"><summary>How to play</summary><p>{level.content.instructions}</p></details>
      </div>
    </header>
  );
}
