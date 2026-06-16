# AI Adventure Lab

A mobile-first React/Vite learning game that teaches AI literacy through short interactive levels.

Players progress through worlds of mini-games:

- AI vs Human: identify whether a passage feels human-written or AI-generated.
- Hallucination Hunt: spot true and false AI-style factual claims.
- Prompt Fix: improve vague prompts and get criterion-based feedback.
- Prompt Builder: assemble strong prompts from role, task, context, constraints, format, and example blocks.

Progress is saved in `localStorage`, including completed levels, best XP scores, earned stars, and sequential level unlocks.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Project Structure

- `src/data/levels.js` defines the level sequence and progression metadata.
- `src/data/content/` stores the data-driven round content for each game mode.
- `src/gameModes/` contains the interactive gameplay components.
- `src/screens/` contains the home, level select, gameplay routing, and results screens.
- `src/components/` contains shared UI pieces such as level cards.
