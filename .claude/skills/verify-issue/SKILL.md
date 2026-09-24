---
name: verify-issue
description: Verify a bug report in Linear before anyone builds a fix. Treats the report as a theory, reproduces it against the real code and evidence, and posts a verdict (Confirmed / Not a bug / Can't reproduce / Different cause) as a Linear comment. Use when the user runs /verify-issue <ID> or asks whether a reported bug is real.
argument-hint: <TEAM>-<N>
---

The report is a theory. The output is a verdict with evidence, not a fix.

1. **Fetch** `$ARGUMENTS` with every comment and attachment (Linear tools; the same connector rule as `/fetch-issue`). Don't change its state yet.
2. **Restate the claim** in one line: what happens, where, and what the reporter expected.
3. **Reproduce.** Read the code path. Run the test, command, or request that exercises the claim; when the claim is about CI, logs, or data, check the real runs, logs, or rows. Use the reporter's steps when given. Evidence you produce (a command and its output, a run link, a `file:line`) outranks reasoning about code.
4. **Decide one verdict:**
   - **Confirmed** — reproduced; name the cause and the input that triggers it.
   - **Not a bug** — the behavior is as designed or documented; say where.
   - **Can't reproduce** — you followed the steps and it works; say exactly what you ran.
   - **Different cause** — something is wrong, but not what the report says; name what is.
5. **Post the verdict as a Linear comment:** the verdict word first, then the evidence, then what happens next. Facts only. No blame, no speculation, no fix.
6. **Move the issue:**
   - Confirmed → leave the state alone; it is ready for `/fetch-issue`.
   - Different cause → leave the state alone; the comment names the real problem and a human decides whether to retitle or open a new issue.
   - Not a bug / Can't reproduce → **Human: Changes Needed**, assigned back to the reporter, so it comes back with more information or gets closed.
7. **Reply in chat** with the verdict line and the comment link. Never start a fix from here; that is `/fetch-issue` after a Confirmed.
