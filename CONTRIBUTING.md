# Contributing — SwachhSense team workflow

## Page ownership
Every member owns one page end-to-end (see README table). You may edit shared
files (`css/site.css`, `js/*`) but mention it in your commit message.

## Workflow
1. `git pull origin main` before starting work.
2. Make one logical change.
3. Commit with a conventional message:
   - `feat:` new functionality · `fix:` bug fix · `docs:` documentation
   - `style:` visual polish · `chore:` config/housekeeping
4. Push (or open a small pull request and ask another member to review).

## Commit identity
So GitHub credits you, set your identity once per machine:
```bash
git config user.name  "Your Name"
git config user.email "your-github-email@example.com"
```

## Definition of done for a page
- Works signed-out (redirects to login if protected).
- Site bar present, correct link highlighted, logout works.
- No console errors; readable at 360 px wide; keyboard focus visible.
