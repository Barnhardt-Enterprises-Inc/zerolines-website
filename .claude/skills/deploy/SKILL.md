---
name: deploy
description: Deploy this project to an environment (staging or production) or roll it back, following the deploy procedure the project's CLAUDE.md points to. Use ONLY when the user explicitly asks to deploy or roll back — never as an automatic follow-up to a merge, build, or fix.
argument-hint: <environment> | rollback <environment>
allowed-tools: Bash
---

The mechanics differ per project; the rules don't. The procedure lives where CLAUDE.md's `## Deploy` section points (usually `docs/deploy.md`). If CLAUDE.md has no `## Deploy` section, stop and say this project has no documented deploy procedure. Don't invent one.

1. **Parse** `$ARGUMENTS` against the environments the procedure lists. Anything else: print the usage line and stop.
2. **Pre-flight** (production): on `main`, clean tree, `HEAD == origin/main`. Stop and say which check failed. Staging deploys what's checked out.
3. **Credentials** come from where the procedure says and are passed explicitly. Never source a secrets file and never rely on an ambient login. Assert the value is non-empty before use: an empty variable silently falls back to whatever the CLI is logged in as.
4. **Rollback tag** before every deploy (not before a rollback): `deploy/<env>/<UTC yyyymmdd-HHMMSS>` on HEAD, pushed. If the push fails, don't deploy.
5. **Run the procedure's deploy or rollback steps** exactly. If a step fails, stop and report. Don't improvise past it.
6. **Smoke test** the URLs the procedure lists and report each.
7. **Linear** (production only): every `<TEAM>-N` in the commit subjects since the previous `deploy/production/*` tag moves from `Merged` to `Deployed`. Leave `Complete` alone; it's the user's. An issue in some other state: say so, don't force it.
8. **Report** in a few lines: environment, action, tag, smoke result, issues moved. After a failed production smoke test, tell the user `/deploy rollback production` exists.
