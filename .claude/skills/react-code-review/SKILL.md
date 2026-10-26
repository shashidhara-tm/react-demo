---
name: react-code-review
description: Review React/Vite code in this repository for bugs, React anti-patterns, and maintainability issues. Use when asked to review code, a diff, a branch, a file, or "my changes" in this project.
argument-hint: "[file | branch | commit range]  (default: uncommitted changes)"
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git log:*), Bash(git show:*), Bash(npx eslint:*), Bash(npm run lint:*), Read, Grep, Glob
---

# React Code Review

Review code in this React 19 + Vite project and report actionable findings. Do not edit files unless the user asks you to fix what you found.

## 1. Determine the scope

Use `$ARGUMENTS` if given:
- A file or folder path → review those files in full.
- A branch name → `git diff main...<branch>`.
- A commit or range → `git show <sha>` / `git diff <range>`.
- Nothing → the working tree: `git status`, `git diff`, and `git diff --staged`. Include untracked source files under `src/`.

Read enough surrounding code to understand each change; a diff hunk alone is rarely enough to judge state logic.

## 2. Run the linter

Run `npx eslint <changed .js/.jsx files>` (or `npm run lint`). The config enables `react-hooks` and `react-refresh` rules. Report lint errors that relate to the changed code; don't duplicate them as separate findings.

## 3. What to look for (in priority order)

**Correctness**
- Mutating state directly: `push`/`splice`/assigning fields on objects inside state arrays (e.g. `item.done = true` inside `.map`). Updates must create new objects: `{ ...item, done: true }`.
- Stale state: updates computed from a captured value where the functional form (`setList(prev => ...)`) is needed, especially for rapid or async updates.
- `==` / `!=` instead of `===` / `!==`.
- Missing or unstable `key` props (array index or `Math.random()` / `nanoid()` called during render).
- Hooks called conditionally or inside loops; wrong `useEffect` dependencies; effects missing cleanup (timers, listeners, subscriptions).
- Event handlers invoked during render (`onClick={fn(id)}` instead of `onClick={() => fn(id)}`).
- Unvalidated input: e.g. empty or whitespace-only items being added.
- Form submit without `e.preventDefault()` when using `<form>`.

**React idioms & maintainability**
- Setter naming that doesn't match the state (`const [todo, addTodo]` → `[todo, setTodo]`).
- Derived values stored in state instead of computed during render.
- Typos in identifiers (e.g. `hanldeDelete`), dead code, leftover `console.log`.
- Components that have grown large enough to split.
- Accessibility: buttons without text/labels, inputs without labels, clickable `div`s.

**Security** (only where relevant)
- `dangerouslySetInnerHTML` with user data, secrets committed to source, unsafe URLs in `href`.

Skip pure formatting and personal style preferences.

## 4. Report

Group findings by severity, most severe first:

- **🔴 Bug** — wrong behavior a user can hit.
- **🟡 Warning** — likely to cause bugs later or violates React rules.
- **🔵 Suggestion** — readability or maintainability improvement.

For each finding give:
1. A clickable location: `[App.jsx:30](src/App.jsx#L30)`.
2. What is wrong and when it happens.
3. A short suggested fix (a few lines of code at most).

End with a one-line summary (e.g. "2 bugs, 1 warning, 3 suggestions"). If nothing actionable is found, say so plainly and note what was reviewed.
