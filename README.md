# AI Adventure Lab

AI Adventure Lab is a mobile-first React/Vite prototype for learning practical AI literacy through short, game-like challenges.

The app teaches a simple idea: AI can be useful, but people still need judgment. Players practice asking better questions, checking sources, protecting privacy, spotting bias, and building stronger prompts.

## Current Status

This is a playable local-first prototype. The active playable paths are currently `Student > High School` and `Everyday User`.

Built features:

- mobile-first home screen, level select, gameplay, results, review, and settings screens
- audience-track and student grade-band foundation with per-path local progress
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

The app supports multiple user paths:

- `Student`: High School playable now; Elementary, Middle School, and College / Adult Learner planned
- `Everyday User`: playable now; viral claim checking and scam-message detection
- `Job Seeker`: planned; resumes, cover letters, job posts, interviews, and application privacy
- `Small Business Owner`: planned; customer messages, marketing copy, reviews, vendors, and data privacy
- `Workplace User`: planned; emails, summaries, reports, confidential information, and fair decisions

The long-term pattern is: same game modes, different scenarios by audience and grade range.

## Student Grade Bands

The Student track is split into grade ranges so content can stay age-appropriate:

- `Elementary`: planned; simple fact checks, safe sharing, helpful questions, and kind AI use
- `Middle School`: planned; projects, tutoring hints, group chat privacy, and basic sources
- `High School`: playable now; stronger source checks, prompt building, privacy, bias, job-search examples, and health caution
- `College / Adult Learner`: planned; research, academic integrity, career prep, workplace-style prompts, and advanced source standards

## Current Levels

The High School Student path currently includes:

- AI vs Human
- Hallucination Hunt
- Pattern Prediction
- Prompt Builder
- Ask Better Questions
- Source Scanner
- Privacy Shield
- Bias Lens

Recent rounds include real-world situations such as student essays, teacher emails, clubs, robotics, schoolwork help, resume and cover-letter support, health-advice caution, viral claims, fake citations, friend/family privacy, social media posts, employment-gap bias, and source checks for school presentations.

## Everyday User Levels

The first Everyday User mini-path includes:

- Viral Claim Scanner
- Scam Shield

These levels focus on high-risk everyday AI use cases:

- news and viral claims: source quality, original reporting, dates, and independent confirmation
- scams and suspicious messages: pressure tactics, risky links, verification steps, and account safety

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

- `CONTENT_GUIDE.md` defines content standards for High School Student and Everyday User scenarios.
- `src/data/tracks.js` defines audience tracks, student grade bands, availability, descriptions, worlds, and level sets.
- `src/data/levels.js` defines the current Student level sequence.
- `src/data/everydayLevels.js` defines the current Everyday User level sequence.
- `src/data/worlds.js` defines world titles, descriptions, and completion summaries.
- `src/data/content/aiOrHuman.js` stores AI vs Human and Pattern Prediction rounds.
- `src/data/content/hallucinationHunt.js` stores Hallucination Hunt rounds.
- `src/data/content/promptBuilder.js` stores prompt-building challenges.
- `src/data/content/questionChoice.js` stores Ask Better Questions, Source Scanner, Privacy Shield, and Bias Lens rounds.

To add a level, add content in `src/data/content/`, add a level entry in `src/data/levels.js`, and choose the correct `type` so `GameplayScreen` routes it to the right mini-game.

For High School Student content, use realistic grades 9-12 scenarios such as essays, rubrics, projects, tutoring, source checking, school AI-use rules, clubs, college/career prep, privacy with peers, and fair decision-making.

## Progress Storage

Progress is stored in `localStorage` under `ai-learning-progress`.

Stored data includes:

- active audience track and selected student grade band
- completed level IDs by learning path
- best score and earned stars by level
- saved review summaries by level
- concept stats by topic
- total XP calculated from known level scores

Older single-track progress is migrated into the High School Student path automatically.

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
- Playtest the first Everyday User levels.
- Decide the next Everyday User category after playtesting.

See [ROADMAP.md](./ROADMAP.md) for product direction and longer-term planning.
