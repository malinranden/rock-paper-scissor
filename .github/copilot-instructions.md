# Copilot instructions for rock-paper-scissor

Purpose
- Help AI coding agents be productive in this repository by documenting project structure, run/build commands, and important patterns.

Quick commands
- Install: `npm install`
- Dev server: `npm run dev` (Vite)
- Build: `npm run build`
- Preview build: `npm run preview`
- Lint: `npm run lint` (ESLint)

Big-picture architecture
- Single-page React app created with Vite. Entry: [src/main.jsx](src/main.jsx).
- Routing: [src/App.jsx](src/App.jsx) defines three routes: `/` → Home, `/opponents` → Character, `/game` → Game.
- UI: components live in [src/components](src/components). Pages are under [src/pages](src/pages).

Key patterns & conventions
- Components use PascalCase file names and default exports (e.g., `SignInUp.jsx`, `Character.jsx`, `Card.jsx`).
- Styling mixes global CSS (`src/styles/index.css`) and CSS Modules / SCSS (`*.module.scss`) inside component folders (e.g. [src/components/SignInUp/SignInUp.module.scss](src/components/SignInUp/SignInUp.module.scss)).
- SCSS partials and variables are in `src/utils` (`_vars.scss`, `_mixins.scss`). Prefer using these for new styles.
- Assets: images live in `src/assets/images` and `src/images` — check both when adding assets.

State, navigation & auth patterns
- Simple client-side auth: `SignInUp.jsx` stores credentials in `localStorage` under keys `email` and `pwd` and uses `useNavigate` to move to `/opponents` on success. See [src/components/SignInUp/SignInUp.jsx](src/components/SignInUp/SignInUp.jsx).
- Character selection passes a background image into Game via React Router state: `navigate('/game', { state: { bg } })` in [src/components/Character.jsx](src/components/Character.jsx). Game reads it with `useLocation()` in [src/pages/game/Game.jsx](src/pages/game/Game.jsx).

External integrations
- Character data is fetched from an external Simpsons API in `Character.jsx` (fetch to `https://thesimpsonsapi.com/api/characters`). When working on features depending on this API, mock responses or handle network errors gracefully.

Common pitfalls & notes discovered in code
- `SignInUp.jsx` uses `localStorage` and client-side checks — this is not secure. Be explicit when changing auth behavior.
- There is a likely bug in `addStorage()` in `SignInUp.jsx`: expression `while (signUpMail.trim() ==! userEmail)` looks incorrect and should be reviewed/rewritten.
- `Card.jsx` imports `Character.css` (global styles) rather than a module. Be consistent when refactoring to CSS modules.

Where to start for common tasks
- Add a new route: update [src/App.jsx](src/App.jsx) and create a page in [src/pages].
- Add a new component: create `src/components/YourComp/YourComp.jsx` and `YourComp.module.scss` for scoped styles.
- Update styles variables: edit [src/utils/_vars.scss](src/utils/_vars.scss) and reuse in component SCSS files.

If you need more
- Ask for specific workflows to be added (tests, CI, Node version). Point to missing docs and we will iterate.
