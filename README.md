# AI Adventure Lab

AI Adventure Lab is a mobile-first React/Vite prototype for practicing everyday AI literacy through short, game-like lessons.

The app teaches a practical habit: AI can help, but people still need to ask better questions, check sources, protect privacy, notice bias, and verify risky claims.

## Current Status

This is a playable local-first prototype. The active playable paths are currently `Student > High School` and `Everyday User`. Planned paths are visible in the UI but are not playable yet.

Built features:

- mobile-first home, level select, gameplay, results, review, and settings screens
- path-aware local progress using `localStorage`
- sequential level progression with locked, completed, replay, and review states
- XP, stars, best scores, new-best indicators, and end-of-world summaries
- review summaries with strengths and concepts to revisit
- concept-level tracking by topic
- data-driven lesson content
- PWA groundwork with manifest and service worker
- feedback link and reset-progress controls

There is no backend yet. Progress is saved only in the current browser on the current device.

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

## Everyday User Levels

The first Everyday User mini-path includes:

- Claim Check
- Scam Shield

These levels focus on high-risk everyday AI use cases:

- claim checking: source quality, organizations, dates, and what the source actually supports
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

## Content Files

Most app content is data-driven:

- `CONTENT_GUIDE.md`: content standards for playable paths
- `src/data/tracks.js`: audience paths, student grade bands, and path availability
- `src/data/levels.js`: High School Student level sequence
- `src/data/everydayLevels.js`: Everyday User level sequence
- `src/data/worlds.js`: world titles, descriptions, and summaries
- `src/data/content/`: lesson round content

## Progress Storage

Progress is stored in `localStorage` under `ai-learning-progress`.

Stored data includes the active path, completed levels, best scores, earned stars, review summaries, and concept stats.

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
- `src/gameModes/`: gameplay components
- `src/screens/`: app screens
- `src/utils/`: scoring, progress, and review-summary logic
- `public/`: PWA manifest, favicon, and service worker

## Next Improvements

- Playtest both playable paths on phone and desktop.
- Finish the High School content alignment pass.
- Add a targeted review/practice hub using saved concept stats.
- Add screenshots or GIFs to this README.

See [ROADMAP.md](./ROADMAP.md) for near-term planning.
