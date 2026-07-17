# AI Adventure Lab Roadmap

This file captures the current product direction, what has been built so far, and the strongest next steps.

## Current Position

AI Adventure Lab is no longer just a quiz prototype. It is becoming an interactive AI literacy learning tool.

The strongest value is teaching judgment around AI:

- when to trust or question an AI response
- how to spot hallucinations and confident mistakes
- how to check sources instead of accepting links blindly
- how to protect personal/private information
- how to recognize bias, stereotypes, and missing perspectives
- how to build better prompts with role, task, context, constraints, format, and examples

The current app is best described as a playable student prototype.

## What Has Been Built

- Mobile-first React/Vite app structure.
- Home screen with intro, progress summary, settings/about, and feedback link support.
- Level select screen grouped by worlds.
- Sequential progression with locked, unlocked, completed, and replay states.
- Local progress persistence using `localStorage`.
- XP, stars, best score tracking, results screen, and new-best behavior.
- PWA groundwork with manifest and service worker.
- Data-driven level/content structure.
- Visual theme with circuit/star assets and polished cards/buttons.
- Compact completed level rows on the level select screen.

## Current Levels

1. AI vs Human
2. Hallucination Hunt
3. Pattern Prediction
4. Prompt Builder
5. Ask Better Questions
6. Source Scanner
7. Privacy Shield
8. Bias Lens

## Recent Learning Loop Improvements

Several levels were rebuilt around a clearer learning loop:

1. Show a scenario.
2. Show the AI response.
3. Ask the player to judge or choose the best next step.
4. Give immediate feedback.
5. Show how AI should have responded.
6. Reinforce the core concept.

This now powers Ask Better Questions, Source Scanner, Privacy Shield, and Bias Lens.

Prompt Builder now uses a step-by-step builder with a live prompt preview, responsive desktop layout, and a stronger-prompt comparison when the player does not earn full points.

## Best Early Audience

The strongest first users are likely not individual teachers. A better early path is through organizations that already run digital literacy, STEM, youth learning, or workforce programs.

Best first pilot targets:

- libraries
- community colleges
- workforce development organizations
- after-school STEM programs
- Boys & Girls Clubs
- YMCA education programs
- public learning centers
- youth technology nonprofits

These groups are often more flexible than K-12 districts and may be able to pilot a small program faster.

Later audiences:

- high schools
- school districts
- charter schools
- colleges and universities
- corporate training teams
- government agencies
- nonprofit training programs

## Product Roles To Plan For

### Student

- login
- XP and badges
- saved progress
- resume where they left off
- practice mode
- completed lessons and personal performance summary

### Teacher or Instructor

- create classes
- invite students
- assign lessons
- monitor progress
- view concept-level results
- reset assignments
- export results

### Administrator

- manage teachers
- school/program-wide reporting
- license management
- analytics

## Strong Product Differentiator

The feature that could make this feel like a real education product is a Teacher Dashboard.

Useful dashboard signals:

- class completion by level
- average score by concept
- concepts students struggle with
- time spent per lesson
- assignment status
- exportable reports

Example teacher insight:

> Students are doing well on privacy and bias, but source verification scores are low. Tomorrow's discussion should focus on checking citations, dates, and source details.

This turns the app from a self-paced game into a classroom planning tool.

## Instructor Mode Opportunity

Another strong direction is instructor-led play:

- teacher starts a room
- students join with a code
- everyone answers the same challenge
- live results appear
- teacher leads discussion around the choices

This would work well for libraries, after-school programs, workshops, and classrooms.

## Suggested Next Steps

### 1. Finish The Student Prototype

Focus on making the current solo-player app feel complete and testable.

- add more rounds per existing level
- improve content quality and variety
- add end-of-world summaries
- improve accessibility and keyboard navigation
- test on phone and desktop
- add screenshots or short GIFs to README

### 2. Improve Evidence Of Learning

Before building large admin tools, capture better learning signals.

- track missed concepts
- show review summaries
- store best score and latest score separately
- add per-level concept tags
- add simple analytics-ready progress shape

### 3. Add Accounts And Cloud Progress

Move beyond local-only progress when the student experience is stable.

- authentication
- cloud-synced progress
- user profile
- reset/replay history
- basic privacy policy and data handling notes

### 4. Build A Small Teacher Dashboard

Start simple.

- create a class
- add demo students
- view completion by level
- view average score by skill/concept
- see which levels need review

### 5. Pilot With A Real Organization

Good pilot targets:

- local library digital literacy program
- community college intro course
- after-school STEM group
- youth technology nonprofit

The goal is feedback, not scale.

Pilot questions:

- Do learners understand the lessons?
- Which levels feel confusing?
- Which concepts feel most useful?
- Would an instructor use this with a group?
- What reporting would make it more useful?

## Business Model Thoughts

Do not start by selling to individual students.

Possible model:

- free tier: limited lessons for anyone
- premium individual: full curriculum, badges, practice mode
- education license: teacher dashboard, classroom management, reporting
- enterprise/government: custom branding, onboarding, analytics

## Near-Term Build Priority

The next best build work should probably be:

1. Polish and expand student lessons.
2. Add concept-level tracking to results.
3. Add a simple review/missed-concepts screen.
4. Add screenshots and testing notes.
5. Plan the data model for future accounts/classes.

