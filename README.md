# AstroQuiz

Privacy-first astronomical multiple-choice trivia. Part of the [Stormberry Labs](https://stormberry.as/labs.html) ecosystem.

**Live:** [astro.stormberry.as](https://astro.stormberry.as)

## Features
- 100-question bank distributed across three difficulty tiers (38 easy, 42 medium, 20 hard) and eleven topical areas (Solar System, Stars, Galaxies, Cosmology, Phenomena, Physics, History, Space missions, Telescopes, Constellations, Exoplanets).
- Difficulty selector with four modes: All, Easy, Medium, Hard. The chosen tier filters the draw pool for every game and persists in `localStorage` between sessions.
- 10 randomised questions per round drawn with a recently-seen exclusion: the last 30 question IDs are remembered in `localStorage`, so consecutive games feel fresh for several plays before any repeats become likely. When the unseen pool inside the chosen tier drops below 10, the draw falls back to the full tier.
- Immediate visual feedback with an explanation for every answer.
- High score tracking via `localStorage`. No server, no cookies.
- Glassmorphism UI with smooth card animations.
- Fully offline-capable after first load.

## Architecture
- **Vanilla HTML/CSS/JS**, no frameworks, no build step.
- **Privacy first**, zero external requests after page load, zero tracking, zero cookies.
- **Data and code separated**: questions live in `questions.js` as an `export const` array, the game logic in `app.js`. Adding questions is a content edit, not a code edit.
- **Sovereign AI**, built and maintained using high-speed agentic workflows.

## Adding questions
Append a new object to the array in `questions.js` with a unique `id`, a `question` string, a four-element `options` array, an `answer` index (0-3), an `explanation` string, a `difficulty` value (`"easy"`, `"medium"` or `"hard"`) and a `topic` string. The game picks up new questions on the next load.

## Credits
Built by [Stormberry AS](https://stormberry.as). Proudly powered by sovereign AI agents.
