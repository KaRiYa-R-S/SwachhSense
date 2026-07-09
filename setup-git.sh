#!/usr/bin/env bash
# =====================================================================
# SwachhSense — creates the 22-commit history from COMMITS.md
# Run from the repo root AFTER `git init` and AFTER setting your identity:
#   git config user.name  "Your Name"
#   git config user.email "your-github-email@example.com"
# Every commit stages real files — no empty commits.
# =====================================================================
set -e

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Run 'git init' first."; exit 1
fi
if git rev-parse HEAD >/dev/null 2>&1; then
  echo "This repo already has commits — aborting so nothing is overwritten."; exit 1
fi

c () { git commit -q -m "$1" && echo "  ✔ $1"; }

git add .gitignore                    && c "chore: add gitignore for Firebase and editor artifacts"
git add README.md                     && c "docs: add project README with overview and features"
git add public/css/site.css           && c "feat: add shared design system with SwachhSense tokens"
git add public/assets/favicon.svg     && c "feat: add brand favicon"
git add public/index.html             && c "feat: build landing page with hero, features and CTA"
git add public/js/firebase-config.js  && c "feat: add Firebase config module with setup instructions"
git add public/login.html             && c "feat: build login page UI"
git add public/signup.html            && c "feat: build signup page UI with password confirmation"
git add public/js/auth.js             && c "feat: implement signup and login with Firebase Auth and friendly errors"
git add public/js/auth-guard.js       && c "feat: add route guard to protect authenticated pages"
git add public/dashboard.html         && c "feat: add command centre dashboard behind auth guard with site bar"
git add public/facilities.html        && c "feat: add facility network directory page"
git add public/technology.html        && c "feat: add technology page with pipeline, telemetry format and thresholds"
git add public/team.html              && c "feat: add project team page with per-member page ownership"
git add public/404.html               && c "feat: add custom 404 page for Firebase Hosting"
git add public/robots.txt             && c "chore: add robots.txt keeping protected pages out of search"
git add firebase.json                 && c "chore: add Firebase Hosting configuration"
git add .firebaserc                   && c "chore: add Firebase project alias"
git add docs/SETUP.md                 && c "docs: add step-by-step Firebase setup and troubleshooting guide"
git add CONTRIBUTING.md               && c "docs: add team workflow and commit conventions"
git add COMMITS.md                    && c "docs: add commit plan and attribution strategy"
git add setup-git.sh                  && c "chore: add script that recreates the commit history"
git add -A                            && git diff --cached --quiet || c "chore: add remaining project files"

echo ""
echo "Done — $(git rev-list --count HEAD) commits created."
echo "Next: git branch -M main && git remote add origin <repo-url> && git push -u origin main"
echo "For team attribution, see COMMITS.md — ideally each member commits their own page."
