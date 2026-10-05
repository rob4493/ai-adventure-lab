import { useEffect, useRef, useState } from "react";
import App from "../App";
import AuthScreen from "./AuthScreen";
import ProfileScreen from "./ProfileScreen";
import { client } from "./client";
import { createSync } from "./sync";
import { normalizeSave } from "../utils/appProgress";
import { storageKey } from "../utils/progressStorage";

// Keep the completed account system dormant until production email is configured.
const accountsEnabled = import.meta.env.VITE_ACCOUNTS_ENABLED === "true";

const readLocal = (key) => {
  try { return JSON.parse(localStorage.getItem(key)); } catch { return null; }
};
const writeLocal = (key, value) => {
  try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch { return false; }
};
const hasProgress = (save) => Object.values(save?.progressByPathId ?? {}).some((path) => path.completedLevelIds?.length);

function LearnerApp({ user }) {
  const [state, setState] = useState(null);
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);
  const [profileOpen, setProfileOpen] = useState(false);
  const [revision, setRevision] = useState(0);
  const [importChoice, setImportChoice] = useState(false);
  const sync = useRef(null);
  const pendingKey = `${storageKey}:pending:${user.id}`;
  useEffect(() => {
    let active = true;
    const engine = createSync({
      read: async () => {
        const [profile, saved] = await Promise.all([
          client.from("profiles").select("username, managed").eq("id", user.id).single(),
          client.from("learnerProgress").select("progress, version").eq("id", user.id).single(),
        ]);
        if (profile.error || saved.error) throw new Error("Could not load your account. Check your connection or finish the database setup.");
        return { profile: profile.data, progress: normalizeSave(saved.data.progress), version: saved.data.version };
      },
      write: async (item, version) => {
        const { data, error } = await client.rpc("saveLearnerProgress", { operationId: item.id, expectedVersion: version, snapshot: item.progress });
        if (error) throw error;
        return data;
      },
      cache: (pending) => writeLocal(pendingKey, pending),
      onChange: (next) => { if (active) setState(next); },
    });
    sync.current = engine;
    let release;
    const lifetime = new Promise((resolve) => { release = resolve; });
    const load = async () => {
      if (!active) return;
      const loaded = await engine.load(readLocal(pendingKey));
      if (active && loaded.version === 0 && !loaded.queue.length && hasProgress(normalizeSave(readLocal(storageKey)))) setImportChoice(true);
      await lifetime;
    };
    // Only one tab may own this account's pending queue on a shared browser.
    const begin = navigator.locks
      ? navigator.locks.request(`learner-progress:${user.id}`, { ifAvailable: true }, async (lock) => {
        if (!lock) throw new Error("This account is open in another tab. Close that tab, then retry here.");
        await load();
      })
      : Promise.reject(new Error("This browser does not support safe account syncing. Use a current browser, or sign out to play as a guest."));
    begin.catch((failure) => { if (active) setError(failure.message); });
    const retry = () => { void engine.retry(); };
    window.addEventListener("online", retry);
    return () => { active = false; engine.stop(); release(); window.removeEventListener("online", retry); };
  }, [user.id, pendingKey, attempt]);
  const signOut = async () => {
    if (state?.queue.length && !window.confirm("Some changes have not synced. They will stay on this device for this account. Sign out anyway?")) return;
    const result = await client.auth.signOut({ scope: "local" });
    if (result.error) setError("Sign out failed. Please retry.");
  };
  const useCloud = async () => {
    if (!window.confirm("Download your unsynced progress and load the newer cloud save? The downloaded copy is a backup, not an automatic merge.")) return;
    const url = URL.createObjectURL(new Blob([JSON.stringify(state.progress, null, 2)], { type: "application/json" }));
    const link = document.createElement("a"); link.href = url; link.download = "unsynced-progress.json"; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    try { await sync.current.useCloud(); setRevision((value) => value + 1); }
    catch { setError("Could not load the cloud save. Your local changes are still kept."); }
  };
  if (!state) return <div className="app-screen min-h-screen p-8 text-white"><div className="app-panel mx-auto max-w-md rounded-xl p-6"><p role="status">{error || "Loading your profile and saved progress..."}</p>{error && <button className="app-button app-button-primary mt-4" onClick={() => { setError(""); setAttempt((value) => value + 1); }}>Retry</button>}<button className="app-back-button mt-4" onClick={signOut}>Sign out</button></div></div>;
  return <>
    <nav className="accountBar" aria-label="Account"><span>{state.profile.username}</span><span role="status">{state.conflict ? "Save conflict" : state.queue.length ? "Waiting to sync" : "Saved to account"}</span><button onClick={() => setProfileOpen((value) => !value)}>{profileOpen ? "Back to learning" : "My progress"}</button><button onClick={signOut}>Sign out</button></nav>
    {(state.error || state.localFailed || error) && <div className="accountNotice" role="status"><p>{error || state.error}{state.localFailed ? " Device storage is unavailable. Keep this page open until syncing succeeds." : ""}</p>{state.conflict ? <button onClick={useCloud}>Back up local changes and load cloud save</button> : <button onClick={() => { setError(""); void sync.current.retry(); }}>Retry saving</button>}</div>}
    {importChoice ? <div className="app-screen min-h-screen p-6 text-white"><div className="app-panel mx-auto max-w-md rounded-xl p-6"><h1 className="text-2xl font-bold">Bring your guest progress?</h1><p className="my-4">Only add this device's progress if it belongs to {state.profile.username}. Other people may have played here.</p><button className="app-button app-button-primary" onClick={() => { sync.current.save(normalizeSave(readLocal(storageKey))); setRevision((value) => value + 1); setImportChoice(false); }}>Add guest progress</button><button className="app-button app-button-secondary mt-3" onClick={() => { sync.current.save(state.progress); setImportChoice(false); }}>Start fresh in this account</button></div></div>
      : <>
        {profileOpen && <ProfileScreen profile={state.profile} progress={state.progress} goBack={() => setProfileOpen(false)} signOut={signOut} />}
        <div hidden={profileOpen}><App key={revision} initialProgress={state.progress} persistProgress={(progress) => { sync.current.save(progress); return true; }} /></div>
      </>}
  </>;
}

export default function AccountApp() {
  const [session, setSession] = useState(null);
  const [ready, setReady] = useState(!client || !accountsEnabled);
  const [authOpen, setAuthOpen] = useState(false);
  const [recovery, setRecovery] = useState(false);
  useEffect(() => {
    if (!client || !accountsEnabled) return;
    // Keep this callback synchronous: Supabase auth holds an internal lock here.
    const { data } = client.auth.onAuthStateChange((event, next) => {
      setSession(next); setReady(true);
      if (event === "PASSWORD_RECOVERY") setRecovery(true);
      if (next) setAuthOpen(false);
    });
    return () => data.subscription.unsubscribe();
  }, []);
  if (!ready) return <div className="app-screen min-h-screen p-8 text-white" role="status">Checking sign-in...</div>;
  if (recovery) return <AuthScreen key="recovery" recovery finishRecovery={() => setRecovery(false)} goBack={() => setRecovery(false)} />;
  if (session) return <LearnerApp key={session.user.id} user={session.user} />;
  if (authOpen) return <AuthScreen goBack={() => setAuthOpen(false)} />;
  return <><nav className="accountBar" aria-label="Account"><span>Guest mode · Progress saved on this device</span>{accountsEnabled ? <button onClick={() => setAuthOpen(true)}>Sign in / Create account</button> : <span className="accountComingSoon">Accounts coming soon</span>}</nav><App key="guest" /></>;
}
