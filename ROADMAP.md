# AI Adventure Lab Roadmap

This roadmap captures the current product direction, what exists now, and the strongest next steps.

## Current Position

AI Adventure Lab is becoming an interactive AI literacy training app. The current playable experience is the Student path, but the codebase now supports audience tracks so the product can expand beyond students.

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
- Audience-track foundation with Student playable and future tracks planned
- Per-track local progress stored in `localStorage`
- Sequential progression with locked, unlocked, completed, replay, and review states
- XP, stars, best score tracking, results summaries, and new-best behavior
- Completed-level Review buttons with fallback review summaries for older progress
- Concept-level tracking by topic, including strong and review counts
- End-of-world summaries after completing each world
- PWA groundwork with manifest and service worker
- Data-driven level/content structure
- Visual theme with circuit/star assets and polished cards/buttons
- Compact completed level rows on the level select screen
- Expanded real-world content across the current Student path
- Cleanup of old Prompt Fix mode after Prompt Builder replaced that experience

## Current Audience Tracks

### Student

Playable now.

Focus:

- schoolwork help
- tutoring and projects
- source checking
- prompt building
- privacy with friends/family
- classroom fairness and bias

### Everyday User

Planned.

Potential focus:

- health-advice caution
- news and viral claims
- shopping research
- social media
- scams and suspicious messages
- family privacy

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

## Current Student Levels

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

### 1. Stabilize The Playable Student Path

- playtest with a small group
- check phone and desktop layouts
- improve wording where players hesitate
- balance difficulty and scoring
- add screenshots or GIFs to README
- do accessibility checks for keyboard focus and screen-reader labels

### 2. Build A Review Hub

- use saved concept stats across levels
- show strongest concepts and weak concepts
- let players replay weak levels from one place
- eventually generate targeted practice from missed concepts

### 3. Create The First Non-Student Track

Best first candidates:

- Everyday User, because the audience is broad and examples are easy to test
- Job Seeker, because the use case is concrete and valuable

The first track should reuse existing game modes before adding new mechanics.

### 4. Prepare For Backend Later

Only after the solo-player experience feels stable:

- authentication
- cloud-synced progress
- user profiles
- best score vs latest score
- replay history
- privacy policy and data handling notes

## Possible Pilot Audiences

Good early testing groups:

- libraries
- community colleges
- workforce development organizations
- after-school STEM programs
- Boys & Girls Clubs
- YMCA education programs
- public learning centers
- youth technology nonprofits

These groups may be easier to pilot with than K-12 districts at the beginning.

## Longer-Term Product Direction

### Teacher Or Instructor Tools

- create classes
- invite students
- assign lessons
- monitor progress
- view concept-level results
- reset assignments
- export results

### Instructor-Led Mode

- instructor starts a room
- learners join with a code
- everyone answers the same challenge
- live results appear
- instructor leads discussion around the choices

### Dashboard Differentiator

A future dashboard could turn gameplay into useful teaching insight:

> Learners are doing well on privacy and bias, but source verification scores are low. The next discussion should focus on checking citations, dates, and source details.

## Business Model Thoughts

Do not start by selling to individual students.

Possible model:

- free tier: limited lessons for anyone
- premium individual: full curriculum, badges, practice mode
- education license: instructor dashboard, classroom management, reporting
- enterprise/government: custom tracks, onboarding, analytics

## Next Build Choices

Recommended next choices:

1. Run a full phone and desktop playtest.
2. Add screenshots to the README.
3. Build the review hub.
4. Create the first Everyday User or Job Seeker content set.
5. Draft a backend-ready progress data model.
