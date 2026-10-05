# Account setup

The app uses the official Supabase client, email/password login, optional email codes, and a single learner profile per account. Supabase stores authentication credentials; application tables contain no email addresses or passwords. Usernames are private display names, not unique login identifiers. Sign in using email.

The initial migration and transactional database checks were applied successfully to the configured project on September 30, 2026. Do not rerun the initial migration on that project. The instructions below are for a new environment.

## Apply database setup

1. Open the project's SQL Editor and run `migrations/20260929_accounts.sql` once. The transaction should succeed before enabling signup publicly.
2. Keep email confirmation enabled. Set the minimum password length to 12 in Authentication settings.
3. Configure Site URL and redirect allowlist: `http://localhost:5177` for local development, plus the actual HTTPS deployment URL before launch. Do not use wildcard production redirects.
4. Configure production SMTP. Supabase's default email delivery has development restrictions; external users need a suitable email provider.
5. To support the optional email-code login, configure the Magic Link email template to include `{{ .Token }}` as the sign-in code. Keep confirmation and recovery templates using their appropriate confirmation URLs. After verifying delivery, set `VITE_EMAIL_CODES_ENABLED=true` and restart Vite; the code option is hidden until then.
6. Copy `.env.example` to `.env.local`, fill in the project URL and public publishable key, then restart Vite. This project's local environment has already been filled in. Never put secret/service-role keys in VITE variables.
7. Leave `VITE_ACCOUNTS_ENABLED=false` while accounts are presented as coming soon. Set it to `true` only after SMTP, redirects, and live signup testing are complete, then rebuild and redeploy the app.

## Age policy

- 12 and under: parent-managed account required. Signup is blocked both in the UI and auth-user trigger until a verified parental-consent flow is implemented. No child email or password form is offered.
- 13-15: parent management recommended, with independent signup available.
- 16+: independent signup.
- Managed teen accounts use the guardian's email/password and learner nickname. One learner per account in this release. Guest play needs no registration.

This is not a completed under-13 consent system or legal compliance certification. Before public launch, review the age-screening approach, privacy notice, retention/deletion process, parental rights, and hosting/analytics data collection. An editable age claim alone does not establish verified age or parental consent.

## Progress and conflicts

Guest storage remains `ai-learning-progress`. Accounts have separate pending-save keys containing the user ID; they never overwrite the guest save. Only an explicit choice imports guest progress into a new account. Do not sign into a parent's account on an untrusted shared device; sign out after use.

Cloud saves currently use versioned snapshots, not a full attempt-history service. Each queued snapshot has a stable operation UUID. The RPC locks the user's progress row, checks the expected version and deduplicates retries. A stale device cannot silently replace a newer save or restore a reset. Conflict resolution downloads the local snapshot before loading the cloud save. Automatic merging is deliberately not implemented; do not discard a pending backup you need.

Signed-in reloads require connectivity to retrieve and authorize the profile. Once loaded, failed writes stay queued locally where storage permits and retry on reconnect or Retry. Profile data is hidden on logout; pending saves remain scoped to their account. Clearing browser data deletes unsynced work. Cloud progress is loaded afresh on sign-in/reload, not streamed live between devices.

## Verification before public launch

Use two test accounts and separate browser sessions. Verify confirmation, password login, email-code login, reset, logout, guest import, and a completed activity after signing in on a second device. Verify account A cannot read account B's profile or progress or write as B, anonymous access is denied, and under-13 signup metadata is rejected server-side. Simulate a lost save response and an old-device write after a reset. Test queue persistence across reloads. Automated sync tests cover the client cases; deployed RLS/email flows need live validation.

No administrator credentials are needed in the browser. Database migrations require the project owner's SQL Editor or a separately authorized database connection. Existing auth users created before this migration need a reviewed profile backfill; do not auto-create profiles from editable metadata on each login.

Only one tab per account may own the local pending queue; a second tab asks the user to close the first and retry. Different devices remain protected by server-side version checks.
