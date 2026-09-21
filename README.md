# AI Adventure Lab

AI Adventure Lab is a mobile-first React prototype for practicing everyday AI literacy through short, game-like lessons.

The app teaches a practical habit: AI can help, but people still need to ask better questions, check sources, protect privacy, notice bias, and verify risky claims.

## Current Status

This is a playable local-first prototype. The active playable paths are currently `Student > Elementary: Grades 3-5`, `Student > Middle School`, `Student > High School`, `Student > College / Adult Learner`, and `Everyday User`. Planned paths are visible in the UI but are not playable yet.

Built features:

- mobile-first intro, dashboard, focus select, level select, gameplay, results, review hub, and settings screens
- path-and-focus-aware local progress using `localStorage`
- sequential level progression with locked, completed, replay, and review states
- XP, stars, best scores, new-best indicators, and end-of-world summaries
- a path-level review hub with strengths, targeted practice, missed concepts, and direct level replay
- concept-level tracking by topic
- dashboard guidance for the next suggested action
- basic accessibility improvements for focus states, screen-reader labels, selected states, skip navigation, and reduced motion
- data-driven lesson content
- PWA groundwork with manifest and service worker
- feedback link, creator note, and reset-progress controls

There is no backend yet. Progress is saved only in the current browser on the current device.

## Current Levels

The Elementary: Grades 3-5 Student path currently includes:

- Meet AI
- Fact Check Quest
- Ask It Clearly
- Learn, Don't Copy
- Privacy Power

`Meet AI` is a guided, completion-only introduction rather than a scored quiz. It explains what AI is, what it can help with, where its limits are, and why people remain responsible for checking answers and making decisions. Completing it awards participation XP and unlocks the first scored elementary level.

The remaining elementary games keep support available: each level begins with a no-penalty guided round, later choice rounds offer an optional hint, and Fact Check Quest always supplies a short trusted clue. This keeps the activity focused on using evidence rather than already knowing trivia.

Elementary is also the first path-specific visual-design pilot. It keeps the shared AI Adventure Lab navigation and progression while using an AI Detective identity, mission language, larger controls, a navy/cyan/mint/sky-blue/coral palette, and prominent source-labeled Detective Clue cards. Its custom Digital Discovery Lab background distinguishes the path, while a circuit-fox guide appears only during supported clue moments.

The Middle School Student path currently includes:

- AI or Me?
- Fact or Fake?
- Homework Helper
- Prompt Builder Jr.
- Source Detective
- Share Smart
- Fairness Check
- Ask Before You Act

The High School Student path currently includes:

- AI vs Human
- Hallucination Hunt
- Pattern Prediction
- Prompt Builder
- Better Student Prompts
- Source Scanner
- Privacy Shield
- Bias Lens

The College / Adult Learner path currently includes:

- AI vs Human: College Voice
- Hallucination Hunt: Academic Claims
- Better College Prompts
- Source Scanner: Research Edition
- Privacy Shield: Campus Life
- Bias Lens: Fair Decisions
- Research Assistant Check

## Everyday User Levels

The Everyday User mini-path includes:

- Claim Check
- AI Reality Check
- Scam Shield
- Message Triage
- Link Detective
- Code Guard
- Payment Pressure
- Better Everyday Prompts
- Follow-Up Coach

These levels focus on high-risk everyday AI use cases:

- claim checking: source quality, organizations, dates, and what the source actually supports
- AI basics: live information limits, overconfidence, safety caution, and high-stakes decisions
- scams and suspicious messages: pressure tactics, risky links, verification steps, one-time codes, payment risks, and account safety
- prompt skills: goals, context, constraints, comparison criteria, and useful follow-up questions

## Learning Loop

The main navigation flow is `Choose Your Path` -> `Choose Your Focus` -> `Select Level`. Student uses grade ranges as focus areas, Everyday User uses practical categories like News & Social Media, Scams, and AI Usage & Best Practices, and planned audiences show mapped future focus areas.

Several levels use a shared choice-based loop:

1. Read a scenario.
2. Review the initial prompt when the lesson needs one.
3. Review the AI response when the lesson is about judging an answer.
4. Choose the best answer, judgment, follow-up, or replacement prompt.
5. Get immediate feedback.
6. See how AI should have responded, including the stronger output a better prompt can produce.
7. Review the core concept.

Prompt Builder uses a step-by-step block builder with live prompt preview and a stronger-prompt comparison when the player misses points.

## Content Files

Most app content is data-driven:

- `CONTENT_GUIDE.md`: content standards for playable paths
- `src/data/tracks.js`: audience paths, focus areas, student grade bands, and path availability
- `src/data/elementaryLevels.js`: Elementary: Grades 3-5 level sequence
- `src/data/middleSchoolLevels.js`: Middle School Student level sequence
- `src/data/levels.js`: High School Student level sequence
- `src/data/collegeLevels.js`: College / Adult Learner level sequence
- `src/data/everydayLevels.js`: Everyday User level sequence
- `src/data/worlds.js`: world titles, descriptions, and summaries
- `src/data/content/`: lesson round content

## Progress Storage

Progress is stored in `localStorage` under `ai-learning-progress`.

Stored data includes the active path, completed levels, best scores, earned stars, review summaries, and concept stats.

## Review And Guidance

The dashboard uses saved progress to suggest the next useful action, such as starting the first level, continuing the next unlocked level, opening the Review Hub for weak concepts, or replaying a lower-star level.

The Review Hub turns missed concepts into targeted practice by topic. It shows the concept area, a recommended replay level, and the specific ideas worth reviewing.

## Accessibility

The app includes keyboard-reachable controls, visible focus states, clearer labels for navigation and icon-heavy buttons, screen-reader-friendly star ratings, selected states on choice controls, skip navigation, and reduced-motion support for Framer Motion and score animations.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
npm test
```

## Project Structure

- `src/components/`: shared UI components
- `src/data/`: track, level, world, and content data
- `src/data/elementaryLevels.js`: Elementary: Grades 3-5 level sequence
- `src/data/middleSchoolLevels.js`: Middle School Student level sequence
- `src/data/levels.js`: High School Student level sequence
- `src/data/collegeLevels.js`: College / Adult Learner level sequence
- `src/data/everydayLevels.js`: Everyday User level sequence
- `src/gameModes/`: gameplay components
- `src/screens/`: app screens, including the path focus menu
- `src/utils/`: scoring, progress, and review-summary logic
- `public/`: PWA manifest, favicon, and service worker

## Next Improvements

- Playtest the new Path -> Focus -> Levels navigation on phone and desktop.
- Playtest Elementary: Grades 3-5 with adults and children for reading level, clarity, and emotional safety.
- Playtest Middle School for reading level, clarity, and round pacing.
- Continue expanding Everyday User content with careful, realistic examples.
- Improve the Review Hub with deeper explanations for each recommended practice topic.
- Run a deeper accessibility audit with keyboard-only testing and a screen reader.
- Keep tuning Middle School and High School prompt games so feedback shows useful AI examples, not just correct/incorrect labels.

See [ROADMAP.md](./ROADMAP.md) for near-term planning.
