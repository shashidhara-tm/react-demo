---
name: review-local-changes
description: Review the current project's uncommitted changes for concrete bugs, regressions, and missing safeguards. Use when asked to review local changes in this repository.
---

# Review Local Changes

Review the current project's working tree and report actionable findings.

- Keep the review scoped to this repository. Establish its state with `git status` and inspect staged and unstaged diffs. Include untracked files when they are part of the changes; do not follow unrelated repositories or review other projects.
- Read nearby code or project documentation when needed to confirm intended behavior and understand the impact of a change.
- Prioritize defects introduced by the changes, such as incorrect behavior, regressions, security or data-loss risks, and important missing error handling. Omit style preferences and speculative concerns.
- For each finding, give the file and precise line range, explain when it occurs, and state its impact. Order findings by severity.
- Do not edit files, stage changes, commit, or run tests unless the user explicitly asks. If no actionable findings are present, say so plainly and note any material limits to the review.
