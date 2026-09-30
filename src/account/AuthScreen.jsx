import { useState } from "react";
import { client } from "./client";
import { ageBands, canRegister, validUsername } from "./policy";

const emailCodes = import.meta.env.VITE_EMAIL_CODES_ENABLED === "true";

export default function AuthScreen({ goBack, recovery = false, finishRecovery }) {
  const [mode, setMode] = useState(recovery ? "password" : "login");
  const [age, setAge] = useState("");
  const [managed, setManaged] = useState(false);
  const [guardian, setGuardian] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const changeMode = (next) => { setMode(next); setMessage(""); setPassword(""); setSent(false); };
  const submit = async (event) => {
    event.preventDefault();
    if (!client || busy) return;
    setBusy(true); setMessage("");
    try {
      let result;
      const redirect = window.location.origin;
      if (mode === "signup") {
        if (!canRegister(age, managed, guardian) || !validUsername(username)) throw new Error("Choose an eligible age range and a nickname of 3-24 letters, numbers, or hyphens.");
        result = await client.auth.signUp({ email, password, options: { emailRedirectTo: redirect,
          data: { username, ageBand: age, managed, guardian: managed && guardian } } });
      } else if (mode === "reset") {
        result = await client.auth.resetPasswordForEmail(email, { redirectTo: redirect });
      } else if (mode === "password") {
        result = await client.auth.updateUser({ password });
      } else if (mode === "code") {
        result = sent ? await client.auth.verifyOtp({ email, token: code, type: "email" })
          : await client.auth.signInWithOtp({ email, options: { shouldCreateUser: false } });
      } else result = await client.auth.signInWithPassword({ email, password });
      if (result.error) throw result.error;
      setPassword("");
      if (mode === "password") { finishRecovery(); return; }
      if (mode === "signup") setMessage("Check your email to verify your account. If you already have an account, sign in or reset your password.");
      if (mode === "reset") setMessage("If this email has an account, a password-reset link has been sent.");
      if (mode === "code") { setSent(true); setMessage("If this email has an account, check for your sign-in code."); }
    } catch (error) { setMessage(error.message || "Unable to connect. Please try again."); }
    finally { setBusy(false); }
  };
  const blocked = mode === "signup" && age === "under13";
  const showFields = mode !== "signup" || (age && !blocked);
  return <div className="app-screen min-h-screen p-4 py-8 text-white">
    <main className="app-panel mx-auto max-w-md rounded-2xl p-6">
      <button className="app-back-button mb-5" onClick={goBack} disabled={busy}>&lt; Back</button>
      <p className="app-kicker text-xs font-bold uppercase">Your learning, saved</p>
      <h1 className="mt-2 text-3xl font-bold">{mode === "signup" ? "Create an account" : mode === "reset" ? "Reset password" : mode === "password" ? "Choose a new password" : "Welcome back"}</h1>
      {!client && <p role="status" className="mt-4">Account setup is not connected yet. You can continue as a guest.</p>}
      <form onSubmit={submit} className="mt-5 grid gap-4">
        {mode === "signup" && <>
          <label className="grid gap-2">Learner age range
            <select required value={age} onChange={(event) => { const value = event.target.value; setAge(value); setManaged(value !== "older"); setGuardian(false); }} className="accountInput">
              <option value="">Choose an age range</option>{ageBands.map((band) => <option key={band.id} value={band.id}>{band.label}</option>)}
            </select>
          </label>
          {blocked && <div className="app-surface rounded-xl p-4"><h2 className="font-bold">A parent-managed account is required</h2><p className="mt-2 text-sm">Verified parent setup is not available yet. Please continue as a guest with a parent or guardian. We will not collect account details for this learner.</p></div>}
          {age === "teen" && <label className="grid gap-2">Who will manage the account?
            <span className="text-sm text-slate-300">For ages 13-15, we recommend a parent or guardian.</span>
            <select className="accountInput" value={managed ? "parent" : "self"} onChange={(event) => setManaged(event.target.value === "parent")}><option value="parent">Parent or guardian (recommended)</option><option value="self">I will manage my own account</option></select>
          </label>}
          {showFields && <label className="grid gap-2">{managed ? "Learner username" : "Username"}<input className="accountInput" required minLength={3} maxLength={24} pattern="[a-zA-Z0-9-]+" autoComplete="nickname" value={username} onChange={(event) => setUsername(event.target.value)} /><span className="text-xs text-slate-300">Use a nickname, not a real name. Letters, numbers, and hyphens only.</span></label>}
        </>}
        {showFields && <>
          {mode !== "password" && <label className="grid gap-2">{mode === "signup" && managed ? "Parent/guardian email" : "Email"}<input className="accountInput" type="email" autoComplete="email" required value={email} onChange={(event) => { setEmail(event.target.value); setSent(false); }} /></label>}
          {["signup", "login", "password"].includes(mode) && <label className="grid gap-2">{mode === "signup" && managed ? "Parent/guardian password" : "Password"}<input className="accountInput" type="password" required minLength={mode === "login" ? 1 : 12} maxLength={128} autoComplete={mode === "login" ? "current-password" : "new-password"} value={password} onChange={(event) => setPassword(event.target.value)} />{mode !== "login" && <span className="text-xs text-slate-300">Use at least 12 characters.</span>}</label>}
          {mode === "signup" && managed && <label className="flex gap-3 text-sm"><input type="checkbox" required checked={guardian} onChange={(event) => setGuardian(event.target.checked)} />I am an adult parent or guardian managing this learner's account.</label>}
          {mode === "code" && sent && <label className="grid gap-2">Email code<input className="accountInput" inputMode="numeric" autoComplete="one-time-code" required value={code} onChange={(event) => setCode(event.target.value)} /></label>}
          <button className="app-button app-button-primary disabled:opacity-50" disabled={busy || !client}>{busy ? "Please wait..." : mode === "signup" ? "Create account" : mode === "reset" ? "Send reset link" : mode === "password" ? "Save password" : mode === "code" && !sent ? "Send email code" : "Sign in"}</button>
        </>}
        <p role="status" className="text-sm leading-relaxed">{message}</p>
      </form>
      {!recovery && <div className="mt-3 grid gap-3 text-sm">
        {mode !== "signup" && <button className="app-back-button" disabled={busy} onClick={() => changeMode("signup")}>Create an account</button>}
        {mode !== "login" && <button className="app-back-button" disabled={busy} onClick={() => changeMode("login")}>Sign in with password</button>}
        {mode === "login" && <><button className="app-back-button" disabled={busy} onClick={() => changeMode("reset")}>Forgot password?</button>{emailCodes && <button className="app-back-button" disabled={busy} onClick={() => changeMode("code")}>Use an email code instead</button>}</>}
        <button className="app-button app-button-secondary" disabled={busy} onClick={goBack}>Continue as guest</button>
      </div>}
    </main>
  </div>;
}
