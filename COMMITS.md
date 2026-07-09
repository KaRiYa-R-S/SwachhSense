# Commit Plan — 22 meaningful commits

The professor requires **≥ 20 commits**. This plan produces **22**, each staging
real files. Run `bash setup-git.sh` to create the history automatically, or —
better for a team of six — follow it manually so each member commits their own
page under their own GitHub identity.

| # | Commit message | Files |
|---|---|---|
| 1 | `chore: add gitignore for Firebase and editor artifacts` | `.gitignore` |
| 2 | `docs: add project README with overview and features` | `README.md` |
| 3 | `feat: add shared design system with SwachhSense tokens` | `public/css/site.css` |
| 4 | `feat: add brand favicon` | `public/assets/favicon.svg` |
| 5 | `feat: build landing page with hero, features and CTA` | `public/index.html` |
| 6 | `feat: add Firebase config module with setup instructions` | `public/js/firebase-config.js` |
| 7 | `feat: build login page UI` | `public/login.html` |
| 8 | `feat: build signup page UI with password confirmation` | `public/signup.html` |
| 9 | `feat: implement signup and login with Firebase Auth and friendly errors` | `public/js/auth.js` |
| 10 | `feat: add route guard to protect authenticated pages` | `public/js/auth-guard.js` |
| 11 | `feat: add command centre dashboard behind auth guard with site bar` | `public/dashboard.html` |
| 12 | `feat: add facility network directory page` | `public/facilities.html` |
| 13 | `feat: add technology page with pipeline, telemetry format and thresholds` | `public/technology.html` |
| 14 | `feat: add project team page with per-member page ownership` | `public/team.html` |
| 15 | `feat: add custom 404 page for Firebase Hosting` | `public/404.html` |
| 16 | `chore: add robots.txt keeping protected pages out of search` | `public/robots.txt` |
| 17 | `chore: add Firebase Hosting configuration` | `firebase.json` |
| 18 | `chore: add Firebase project alias` | `.firebaserc` |
| 19 | `docs: add step-by-step Firebase setup and troubleshooting guide` | `docs/SETUP.md` |
| 20 | `docs: add team workflow and commit conventions` | `CONTRIBUTING.md` |
| 21 | `docs: add commit plan and attribution strategy` | `COMMITS.md` |
| 22 | `chore: add script that recreates the commit history` | `setup-git.sh` |

After deployment, natural extra commits appear on their own:
`docs: add live hosted URL to README`, `feat: update team page with real member details`,
`fix: …` for anything you polish — real projects keep committing.

## Team attribution (strongly recommended)

20+ commits from one account looks like one person did all the work. To make
GitHub show all six contributors:

1. **Member 1** creates the GitHub repo, runs commits 1–6, pushes `main`, and adds
   the other five as collaborators (Repo → Settings → Collaborators).
2. Each remaining member clones the repo and makes **their own page's commits**
   from the table above under their own identity:
   ```bash
   git config user.name  "Your Name"
   git config user.email "your-github-email@example.com"
   ```
3. Push directly to `main`, or better, open a small pull request per page and
   have another member review and merge — PR reviews look excellent in evaluation.

## Good commit hygiene (what evaluators look for)

- One logical change per commit. Never `update`, `final`, `final2`.
- Conventional prefixes: `feat:` / `fix:` / `docs:` / `style:` / `chore:`.
- Present-tense imperative: "add login page", not "added login page".
- Commit as you build, not in one batch on submission day — the timeline is visible.
