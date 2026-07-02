export const STORAGE_KEYS = {
  language: 'language',
  darkMode: 'darkMode',
  lockScreenEnabled: 'lockScreenEnabled',
  unlocked: 'unlocked',
  hideAppLabels: 'nuojiji-hide-app-labels',
  textBlackMode: 'nuojiji-text-black-mode',
  chunkReload: 'nuojiji_chunk_reload',
  silentRecoverAttempts: 'nuojiji-silent-recover-attempts',
};

export function readStorage(key, fallback = null) {
  try {
    const value = localStorage.getItem(key);
    return value ?? fallback;
  } catch (_error) {
    return fallback;
  }
}

export function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (_error) {
    // Storage can be unavailable in private or embedded contexts.
  }
}
