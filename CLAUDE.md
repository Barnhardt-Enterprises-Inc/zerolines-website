# <Project name>

<One paragraph: what this is and who uses it. Issues are in Linear as `<TEAM>-N`.>

## Stack

<One paragraph: frameworks, language, database, hosting. Check `package.json` for versions.>

## Workflow

One session per Linear issue: `/fetch-issue <TEAM>-N` claims it, branches, and proposes a plan; after "go" it works through to a PR whose title carries the issue ID. "merge" runs `/merge`; "deploy staging|production" runs `/deploy`. Linear's GitHub integration moves issues to PR Ready and Merged on its own. Leave local and remote clean: no stale worktrees, branches, or stashes.

Team memory: the repo is the only memory. Before each PR, record anything non-obvious in a code comment, the right `docs/` file, or a one-line rule below, and fix any doc the change made wrong.

## Quetrex

- Linear: workspace `<name>`, team `<TEAM>`.
- Verify: `npm run verify` — runs every CI gate exactly as CI does; it must pass before a PR.
- Install: `npm ci`.

## Rules the code won't tell you

<Only invariants a capable engineer would get wrong by reading the code. Delete this section if there are none yet.>

## Deploy

<Where the procedure lives, e.g. "See `docs/deploy.md`." Delete this section if the project has no deploy.>
