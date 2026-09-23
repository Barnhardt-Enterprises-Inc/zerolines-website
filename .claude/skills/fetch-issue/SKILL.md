---
name: fetch-issue
description: Start work on a Linear issue (e.g. SMA-100 or GLO-7). Claims it in Linear, fetches it with its comments, sets up the branch, reads the code, and proposes a plan. Use when the user runs /fetch-issue, or when any message names an issue ID and asks for work on it.
argument-hint: <TEAM>-<N>
---

`$ARGUMENTS` is the issue ID. `<team>` is its prefix in lowercase and `<N>` its number. Use the Linear connector tools; if none are available, stop and tell the user to connect Linear at claude.ai → Settings → Connectors. If CLAUDE.md names a Linear workspace and the connector reaches a different one, stop and say so.

1. **Claim it first.** Move the issue to **AI: In Progress** before reading anything, so the board shows the work is taken.
2. Get the title, description, state, labels, priority, parent and sub-issues, blocking and related issues, attachments, and every comment. Look at image attachments.
3. Branch `feature/<team>-<N>-<slug>` (`fix/` for a bug) from a freshly fetched `origin/main`. In a cloud session (`CLAUDE_CODE_REMOTE=true`) the checkout is already isolated: branch in place. Locally, make a worktree at `../<repo>.worktrees/<team>-<N>-<slug>` (never inside the repo) and run the install command in the background while you read.
4. Read the code the issue touches and the relevant `docs/` (start at `docs/README.md`).
5. Reply with the ask in one line, the files involved, any questions or contradictions, and a short plan. **Stop and wait for go.**

Questions only the user or the reporter can answer go in a **Linear comment** — a two-line brief plus numbered questions — and the issue moves to **AI: Needs Clarity**. The chat reply just points at the comment. Anyone on the team can answer there, and the answer is on the issue when work resumes. On resume, re-read the comments first, then move it back to **AI: In Progress**.

When the user says go:

1. Implement it with tests. Run the verify command until it passes.
2. Run `/code-review` and fix every real finding.
3. **Team memory:** write down anything non-obvious you learned — a gotcha, a decision and its reason, an external API fact — where the next person will look: a comment beside the code, the right `docs/` file, or a one-line rule in CLAUDE.md. Fix or delete any doc the change made wrong.
4. Commit, push, and open the PR titled `<type>(<scope>): <summary> [<TEAM>-<N>]`. The body: what changed and why, the verify result, and a `Docs:` line listing the docs you updated (or `none — nothing non-obvious`). Put the PR link in your reply.

## Linear states

Linear's GitHub integration moves the issue itself when the PR opens (**AI: PR Ready**) and when it merges (**Merged**), keyed on the issue ID in the PR title. Don't set those two by hand; if the state hasn't changed a minute after the PR opens, say so. The rest is yours:

| When | State |
|---|---|
| `/fetch-issue` claims the issue | `AI: In Progress` |
| You stop on a question | `AI: Needs Clarity` (+ the comment) |
| The question is answered and work resumes | `AI: In Progress` |
| Something outside the repo blocks the work | `AI: Blocked` |
| `/deploy production` ships it | `Deployed` |
| The user has tested it in production | `Complete` — the user's call, never yours |

A merged issue that comes back goes to `AI: Rework` and re-enters at step 3.

## What CLAUDE.md tells you

The project's `## Quetrex` block names the Linear workspace and team key, the verify command, and the install command. If the block is missing, use `npm run verify` and `npm ci`, and say in your reply that CLAUDE.md doesn't declare them.
