---
name: merge
description: Squash-merge a task's PR and clean up its branch and worktree. Use only when the user says "merge" (optionally naming a PR number). Never merge on your own initiative, and never ask "merge it?" and act on the answer.
argument-hint: "[PR number]"
---

1. **Pick the PR.** `$ARGUMENTS` if given, else the open PR for the current branch. Ambiguous: ask.
2. **Get it green.** `gh pr view <n> --json state,mergeStateStatus,statusCheckRollup`. Behind `main`: `gh pr update-branch <n>`. Checks pending: `gh pr checks <n> --watch`. A failing check: fix it on the branch, push, re-check. Never merge red, and never change a gate to make it green.
3. **Merge:** `gh pr merge <n> --squash --delete-branch`. If the cloud GitHub proxy rejects that, `gh api -X PUT repos/{owner}/{repo}/pulls/<n>/merge -f merge_method=squash`, then delete the remote branch.
4. **Clean up.** Cloud: nothing local; confirm the remote branch is gone. Local, from the main checkout:
   ```bash
   git worktree remove ../<repo>.worktrees/<name>
   git branch -D <branch>
   git push origin --delete <branch> 2>/dev/null || true
   git fetch --prune && git switch main && git pull --ff-only
   ```
5. **Linear** moves the issue to `Merged` itself (GitHub integration, keyed on the ID in the PR title). Check it did. If it hasn't within a minute, set it and say the automation didn't fire.
6. **Prove it's clean.** `git worktree list`, `git branch`, and `git ls-remote --heads origin <branch>` show nothing left for this task. Report the merge commit in one line.
