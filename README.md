# AI Adventure Lab

AI Adventure Lab is a mobile-first React/Vite prototype for learning practical AI literacy through short, game-like challenges.

The app teaches a simple idea: AI can be useful, but people still need judgment. Players practice asking better questions, checking sources, protecting privacy, spotting bias, and building stronger prompts.

## Current Status

This is a playable local-first prototype. The active playable path is currently `Student`. Additional audience tracks are visible in the app as planned paths so the project can expand toward everyday users, job seekers, small business owners, and workplace users without rebuilding the core game engines.

Built features:

- mobile-first home screen, level select, gameplay, results, review, and settings screens
- audience-track foundation with per-track local progress
- sequential level progression with locked, completed, replay, and review states
- XP, stars, best scores, new-best indicators, and end-of-world summaries
- review summaries showing strengths, missed concepts, and concepts to revisit
- concept-level tracking by topic for future reporting and targeted practice
- saved browser progress using `localStorage`
- data-driven content files for adding rounds without editing game components
- PWA groundwork with manifest and service worker
- feedback link and reset-progress controls

There is no backend yet. Progress is saved only in the current browser on the current device.

## Audience Tracks

The app is being prepared to support multiple user paths:

- `Student`: playable now; schoolwork, tutoring, projects, sources, privacy, and classroom fairness
- `Everyday User`: planned; health caution, shopping research, social media, scams, family privacy, and news claims
- `Job Seeker`: planned; resumes, cover letters, job posts, interviews, and application privacy
- `Small Business Owner`: planned; customer messages, marketing copy, reviews, vendors, and data privacy
- `Workplace User`: planned; emails, summaries, reports, confidential information, and fair decisions

The long-term pattern is: same game modes, different scenarios by audience.

## Current Levels

The Student path currently includes:

- AI vs Human
- Hallucination Hunt
- Pattern Prediction
- Prompt Builder
- Ask Better Questions
- Source Scanner
- Privacy Shield
- Bias Lens

Recent rounds include real-world situations such as schoolwork help, resume and cover-letter support, health-advice caution, viral claims, fake citations, friend/family privacy, social media posts, employment-gap bias, and resource-based recommendations.

## Learning Loop

Several levels use a shared choice-based loop:

1. Read a scenario.
2. Review the AI response.
3. Choose the best answer or judgment.
4. Get immediate feedback.
5. See how AI should have responded.
6. Review the core concept.

Prompt Builder uses a step-by-step block builder with live prompt preview and a stronger-prompt comparison when the player misses points.

## Content System

Most app content is data-driven:

- `src/data/tracks.js` defines audience tracks, availability, descriptions, focus areas, worlds, and level sets.
- `src/data/levels.js` defines the current Student level sequence.
- `src/data/worlds.js` defines world titles, descriptions, and completion summaries.
- `src/data/content/aiOrHuman.js` stores AI vs Human and Pattern Prediction rounds.
- `src/data/content/hallucinationHunt.js` stores Hallucination Hunt rounds.
- `src/data/content/promptBuilder.js` stores prompt-building challenges.
- `src/data/content/questionChoice.js` stores Ask Better Questions, Source Scanner, Privacy Shield, and Bias Lens rounds.

To add a level, add content in `src/data/content/`, add a level entry in `src/data/levels.js`, and choose the correct `type` so `GameplayScreen` routes it to the right mini-game.

## Progress Storage

Progress is stored in `localStorage` under `ai-learning-progress`.

Stored data includes:

- active audience track
- completed level IDs by track
- best score and earned stars by level
- saved review summaries by level
- concept stats by topic
- total XP calculated from known level scores

Older single-track progress is migrated into the Student track automatically.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
npm test
```

- `npm run dev`: start the Vite dev server
- `npm run build`: create a production build in `dist/`
- `npm run lint`: run ESLint
- `npm test`: run the Node test suite
- `npm run preview`: serve the production build locally

## Project Structure

- `src/components/`: shared UI components
- `src/data/`: track, level, world, and content data
- `src/gameModes/`: gameplay components
- `src/screens/`: app screens
- `src/utils/`: scoring, progress, and review-summary logic
- `public/`: PWA manifest, favicon, and service worker

## Next Improvements

- Playtest the Student path with a small group.
- Add screenshots or GIFs to this README.
- Add a targeted review/practice hub using saved concept stats.
- Improve accessibility with keyboard and screen-reader checks.
- Create the first non-student track, likely Everyday User or Job Seeker.
- Plan backend data shape for accounts, cloud progress, and future dashboards.

See [ROADMAP.md](./ROADMAP.md) for product direction and longer-term planning.
