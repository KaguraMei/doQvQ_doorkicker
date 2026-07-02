export async function getSetting(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    if (raw == null) return fallback;
    return JSON.parse(raw);
  } catch (_error) {
    return fallback;
  }
}

export async function setSetting(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent('nuojiji:setting-updated', { detail: { key, value } }));
  } catch (_error) {
    // Keep settings UI usable even when storage is unavailable.
  }
}
