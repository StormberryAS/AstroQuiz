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
- Runs in your browser: once the page has loaded, the game script makes no network request, and your scores and settings stay in `localStorage` on your device. There is no service worker, so the page needs a network connection to open (the browser may reuse its cache), and it loads its font files from this site when it needs them.

## Architecture
- **Vanilla HTML and CSS, TypeScript**, no frameworks.
- **TypeScript source in `ts/`, compiled JavaScript committed.** `ts/app.ts` compiles to `app.js` and `ts/questions.ts` to `questions.js`, at the same paths the page has always loaded. The compiled files are committed because GitHub Pages serves the repository as it is, with no build step of its own; `.gitattributes` marks them as generated. Edit the TypeScript, never the `.js`.
- **Build:** `tools/build-ts.sh` installs the pinned compiler (`npm ci`), compiles, then runs `bump_assets.py` to restamp the `?v=` cache stamps. `tools/build-ts.sh --check` changes nothing and fails when the committed JavaScript is not what the TypeScript compiles to. `npm test` runs the tests in `tests/` (Node 24, `node --test`). The published app has no runtime dependencies.
- **Privacy first**, zero external requests after page load, zero tracking, zero cookies.
- **Data and code separated**: questions live in `ts/questions.ts` as a typed `export const` array, the game logic in `ts/app.ts`. Adding questions is a content edit, not a code edit.
- **Sovereign AI**, built and maintained using high-speed agentic workflows.

## Adding questions
Append a new object to the array in `ts/questions.ts` with a unique `id`, a `question` string, a four-element `options` array, an `answer` index (0-3), an `explanation` string, a `difficulty` value (`"easy"`, `"medium"` or `"hard"`) and a `topic` (one of the eleven topics above). The `Question` type refuses anything else. Then run `tools/build-ts.sh` and `npm test`, and commit the TypeScript with the compiled `questions.js`. The game picks up new questions on the next load.

## Credits
Built by [Stormberry AS](https://stormberry.as). Proudly powered by sovereign AI agents.

## Disclaimer

Supplied free of charge, **as is**, with no warranty of any kind. Using it creates no client or advisory relationship with Stormberry AS, and nothing it produces is professional advice.


This is a **functioning prototype**, not a certified instrument and not a professional service. Values are computed or modelled, not measured. Check anything that matters against an authoritative source before you act on it. Stormberry AS reimburses no cost or loss arising from use of this application.

Full terms: [DISCLAIMER.md](DISCLAIMER.md).
