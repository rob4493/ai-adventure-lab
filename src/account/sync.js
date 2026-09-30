// Persist each pending snapshot with a stable operation ID before sending it.
// Replaying a request after a lost response is safe: the database deduplicates IDs.
export const createSync = ({ read, write, cache, onChange, makeId = () => crypto.randomUUID() }) => {
  let state;
  let running = false;
  let stopped = false;
  let knownVersion = 0;
  const emit = () => { if (!stopped) onChange({ ...state }); };
  const persist = () => {
    state.localFailed = !cache({ version: state.version, queue: state.queue });
  };
  const flush = async () => {
    if (running || stopped || !state || state.conflict) return;
    running = true;
    state.error = "";
    emit();
    try {
      while (state.queue.length && !stopped) {
        const next = state.queue[0];
        const result = await write(next, state.version);
        if (stopped) return;
        if (result.conflict) {
          state.conflict = true;
          state.error = "Another device saved newer progress. Your unsynced changes are kept on this device.";
          break;
        }
        state.version = result.version;
        state.queue.shift();
        persist();
        emit();
      }
      if (!state.queue.length && state.version < knownVersion) {
        state.conflict = true;
        state.error = "Your earlier save succeeded, but another device has newer progress. Load the cloud save before continuing.";
      }
    } catch {
      state.error = "Cloud save unavailable. Keep this page open if device storage is also unavailable, then retry.";
    } finally { running = false; emit(); }
  };
  return {
    async load(pending) {
      const cloud = await read();
      knownVersion = cloud.version;
      state = { profile: cloud.profile, progress: pending?.queue?.length ? pending.queue.at(-1).progress : cloud.progress,
        version: pending?.queue?.length ? pending.version : cloud.version,
        queue: pending?.queue ?? [], conflict: false, error: "", localFailed: false };
      emit();
      await flush();
      return state;
    },
    save(progress) {
      state.progress = progress;
      state.queue.push({ id: makeId(), progress });
      persist(); emit(); void flush();
    },
    retry: flush,
    async useCloud() {
      const cloud = await read();
      knownVersion = cloud.version;
      state = { profile: cloud.profile, progress: cloud.progress, version: cloud.version, queue: [], conflict: false, error: "", localFailed: false };
      persist(); emit();
      return state;
    },
    stop() { stopped = true; },
  };
};
