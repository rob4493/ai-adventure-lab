# AI Adventure Lab

AI Adventure Lab is a mobile-first React/Vite prototype that teaches AI literacy through short, interactive game levels. The goal is to help players understand how people and AI can work together: AI can be useful, but human judgment still matters.

Players progress through bite-size lessons about recognizing AI writing patterns, spotting hallucinations, building better prompts, checking sources, protecting privacy, and noticing bias or fairness issues.

## Project Status

This is currently a playable prototype. It has:

- a mobile-first home screen and level select flow
- sequential level progression with locked and completed states
- XP, stars, best scores, and results summaries
- saved local progress using `localStorage`
- multiple data-driven mini-game formats
- a settings/about screen with reset progress and feedback link support
- PWA installability groundwork with a manifest and service worker

It is not yet connected to a backend. Player progress is local to the browser/device.

For a more detailed product direction and next-step plan, see [ROADMAP.md](./ROADMAP.md).

## Learning Goals

The app is designed around practical AI literacy skills:

- Ask better questions before accepting an answer.
- Notice when AI gives confident but unsupported information.
- Check whether a source is actually useful and verifiable.
- Avoid sharing unnecessary private information.
- Watch for bias, stereotypes, missing perspectives, and unfair shortcuts.
- Build prompts with enough role, task, context, constraints, format, and examples.

## Current Levels

- AI vs Human: spot signals that make writing feel AI-generated or personally human.
- Hallucination Hunt: judge AI-style factual claims and watch for confident mistakes.
- Pattern Prediction: compare polished AI-style reasoning with messier human reasoning.
- Prompt Builder: assemble stronger prompts from role, task, context, constraints, format, and examples.
- Ask Better Questions: review a weak AI response, choose the best follow-up question, and see how AI should have responded.
- Source Scanner: inspect AI-provided source details and decide whether they are reliable or risky.
- Privacy Shield: choose safer ways to ask AI for help without oversharing private details.
- Bias Lens: spot unfair shortcuts and choose more balanced AI responses.

## Learning Loop

Several levels use a shared choice-based lesson format:

1. Read a scenario.
2. Review the AI's response.
3. Choose the best answer or judgment.
4. Get immediate feedback.
5. See how AI should have responded.
6. Review the core concept.

This keeps the levels shorter while making the teaching moment clearer.

For example, Source Scanner shows a weak AI source response, asks the player whether it is reliable or risky, then shows a better response that includes details such as source title, organization, author, date, and a short summary.

## Game Modes

The app currently uses these main gameplay components:

- `AiOrHuman`: multiple rounds where the player decides whether writing feels AI-generated or human-written.
- `HallucinationHunt`: true/false style rounds for factual claims and confident AI mistakes.
- `PromptBuilder`: block-based prompt construction using role, task, context, constraints, format, and examples.
- `QuestionChoice`: scenario-based choice lessons used by Ask Better Questions, Source Scanner, Privacy Shield, and Bias Lens.

The newer `QuestionChoice` format is useful for lessons where the player should evaluate a flawed AI response and compare it against a better one.

## Progression

Progress is saved in `localStorage` under the browser's local storage for this app. It includes:

- completed level IDs
- best score per level
- earned stars per level
- total XP based on known level scores
- level unlock state based on prior completions

Players can reset progress from the settings/about screen.

## Content System

Most level content is data-driven.

- `src/data/levels.js` defines the level order, title, world, type, skill, description, takeaway, and content reference.
- `src/data/content/aiOrHuman.js` contains AI vs Human and Pattern Prediction rounds.
- `src/data/content/hallucinationHunt.js` contains Hallucination Hunt content.
- `src/data/content/promptBuilder.js` contains prompt-building challenges.
- `src/data/content/questionChoice.js` contains the newer scenario-based lessons.

Adding a new level usually means:

1. Add content to the appropriate file in `src/data/content/`.
2. Add a level entry in `src/data/levels.js`.
3. Pick the correct `type` so `GameplayScreen` routes to the right mini-game.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
npm test
```

Script notes:

- `npm run dev` starts the local Vite dev server.
- `npm run build` creates a production build in `dist/`.
- `npm run lint` runs ESLint.
- `npm test` runs the lightweight Node test suite.
- `npm run preview` serves the production build locally.

## PWA Notes

The app includes a web app manifest and service worker for install-style browser behavior and basic offline app-shell caching.

Final app icons and theme colors can be refined in a later branding pass. The current setup is enough to continue testing install-style behavior, especially on mobile browsers.

## Project Structure

- `src/data/levels.js` defines the level sequence and progression metadata.
- `src/data/content/` stores the data-driven round content for each game mode.
- `src/gameModes/` contains the interactive gameplay components.
- `src/screens/` contains the home, level select, gameplay routing, settings, and results screens.
- `src/components/` contains shared UI pieces such as level cards.

## Suggested Next Improvements

- Add more rounds to each level so the lessons feel deeper.
- Add concept-level tracking so results can show what players struggled with.
- Add a review screen for missed concepts and weaker skills.
- Add lightweight browser/mobile playthrough testing.
- Add screenshots or short GIFs to this README.
- Improve accessibility with keyboard focus checks and screen reader labels.
- Plan future accounts, cloud progress, and classroom/teacher dashboard data.

## Longer-Term Direction

The strongest early audience may be organizations that already run digital literacy, STEM, youth learning, or workforce development programs, such as libraries, community colleges, after-school STEM programs, and youth technology nonprofits.

Longer term, the app could grow toward:

- student accounts and cloud-synced progress
- teacher classes and assignments
- concept-level progress reports
- an instructor-led room mode
- organization-level dashboards
