# AI Adventure Lab Roadmap

This roadmap captures the current product direction, what exists now, and the strongest next steps.

## Current Position

AI Adventure Lab is becoming an interactive AI literacy training app. The current playable experiences are the High School Student path and the first Everyday User mini-path.

The core value is teaching judgment around AI:

- when to trust, question, or verify an AI response
- how to spot hallucinations and confident mistakes
- how to check sources instead of accepting links blindly
- how to protect personal and private information
- how to recognize bias, stereotypes, missing perspectives, and unfair shortcuts
- how to build prompts with role, task, context, constraints, format, and examples

## What Has Been Built

- Mobile-first React/Vite app structure
- Home, level select, gameplay, results, review, and settings screens
- Audience-track foundation with Student grade bands
- High School Student path playable now, with Elementary, Middle School, and College / Adult Learner planned
- First Everyday User mini-path playable now
- Per-path local progress stored in `localStorage`
- Sequential progression with locked, unlocked, completed, replay, and review states
- XP, stars, best score tracking, results summaries, and new-best behavior
- Completed-level Review buttons with fallback review summaries for older progress
- Concept-level tracking by topic, including strong and review counts
- End-of-world summaries after completing each world
- PWA groundwork with manifest and service worker
- Data-driven level/content structure
- Content guide for keeping High School Student and Everyday User scenarios aligned
- Visual theme with circuit/star assets and polished cards/buttons
- Compact completed level rows on the level select screen
- Expanded real-world content across the current Student path
- High School alignment pass started for AI vs Human, Hallucination Hunt, Ask Better Questions, and Source Scanner
- Cleanup of old Prompt Fix mode after Prompt Builder replaced that experience

## Current Audience Tracks

### Student

High School is playable now. Other grade ranges are planned.

Focus:

- schoolwork help
- tutoring and projects
- source checking
- prompt building
- privacy with friends/family
- classroom fairness and bias

Grade ranges:

- Elementary: planned; simple fact checks, safe sharing, helpful questions, and kind AI use
- Middle School: planned; projects, tutoring hints, group chat privacy, and basic sources
- High School: playable; stronger source checks, prompt building, privacy, bias, job-search examples, and health caution
- College / Adult Learner: planned; research, academic integrity, career prep, workplace-style prompts, and advanced source standards

### Everyday User

Playable now with the first two levels.

Current focus:

- news and viral claims
- scams and suspicious messages

Current levels:

- Viral Claim Scanner
- Scam Shield

Future possible categories:

- Health Caution
- Shopping Research
- Family And Personal Privacy
- Everyday Finance Caution
- Travel And Local Planning

### Job Seeker

Planned.

Potential focus:

- resumes
- cover letters
- job posts
- interview prep
- career advice
- application privacy

### Small Business Owner

Planned.

Potential focus:

- customer messages
- marketing copy
- reviews
- vendor research
- simple policy drafts
- customer-data privacy

### Workplace User

Planned.

Potential focus:

- emails
- meeting summaries
- reports
- confidential information
- source checking
- fair workplace decisions

## Current High School Student Levels

1. AI vs Human
2. Hallucination Hunt
3. Pattern Prediction
4. Prompt Builder
5. Ask Better Questions
6. Source Scanner
7. Privacy Shield
8. Bias Lens

## Learning Loop

The strongest current lesson format is:

1. Show a scenario.
2. Show a weak or risky AI response.
3. Ask the player to judge or choose the best next step.
4. Give immediate feedback.
5. Show how AI should have responded.
6. Reinforce the core concept.

This powers Ask Better Questions, Source Scanner, Privacy Shield, and Bias Lens.

Prompt Builder uses a step-by-step block builder with live prompt preview, responsive layout, and stronger-prompt comparison.

## Near-Term Priority

### 1. Stabilize The Playable High School Student Path

- playtest with a small group
- check phone and desktop layouts
- improve wording where players hesitate
- balance difficulty and scoring
- continue aligning older rounds to the High School content standard
- add screenshots or GIFs to README
- do accessibility checks for keyboard focus and screen-reader labels

### 2. Build A Review Hub

- use saved concept stats across levels
- show strongest concepts and weak concepts
- let players replay weak levels from one place
- eventually generate targeted practice from missed concepts

### 3. Expand Everyday User Carefully

The first Everyday User playable path now exists. Next steps:

- playtest Viral Claim Scanner and Scam Shield
- improve wording where users hesitate
- decide the next category based on risk and usefulness
- reuse existing game modes before adding new mechanics

### 4. Prepare For Backend Later

Only after the solo-player experience feels stable:

- authentication
- cloud-synced progress
- user profiles
- best score vs latest score
- replay history
- privacy policy and data handling notes

## Next Build Choices

Recommended next choices:

1. Run a full phone and desktop playtest.
2. Add screenshots to the README.
3. Build the review hub.
4. Playtest the Everyday User mini-path and choose the next category.
5. Draft a backend-ready progress data model.
