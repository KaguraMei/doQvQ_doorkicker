import { l as t } from "./main-BO9xa-SQ.js";
import { ax as e } from "./native-pet-CTNtZgMA.js";
import "./modulepreload-polyfill-YP0FEG5d.js";
import "./vendor-react-B2VXkTUV.js";
/* empty css                        */
import "./vendor-jszip-DU-5YDGO.js";
import "./vendor-lucide-DBv09HTV.js";
import "./vendor-supabase-Bcpm_8qV.js";
/* empty css                     */
import "./vendor-dexie-KLdnSHz2.js";
async function r(r, n = {}) {
  console.log("[workerFetch debug] 開始:", r, "| WORKER_URL:", "(已配置)");
  console.log("[workerFetch debug] 取得 token 中...");
  const o = await t();
  console.log("[workerFetch debug] token:", o ? "有" : "無");
  if (!o) {
    throw new Error("未登入（無 Supabase token）");
  }
  console.log("[workerFetch debug] 發送 fetch:", r);
  const s = await e(`https://nuojiji-worker.wcl20091007.workers.dev${r}`, {
    ...n,
    preferFetch: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${o}`,
      ...n.headers
    }
  });
  if (!s.ok) {
    const t = await s.json().catch(() => ({
      error: `HTTP ${s.status}`
    }));
    throw new Error(t.error || `Worker API 錯誤: ${s.status}`);
  }
  return s.json();
}
async function n(t) {
  return r("/api/alarms/sync", {
    method: "POST",
    body: JSON.stringify({
      alarms: t
    })
  });
}
async function o({
  characters: t,
  apiSettings: e,
  userName: n,
  language: o
}) {
  const s = function () {
    try {
      const t = localStorage.getItem("nuojiji_sync_context_meta");
      if (t) {
        return JSON.parse(t);
      } else {
        return {};
      }
    } catch {
      return {};
    }
  }();
  const a = {};
  if (Array.isArray(t)) {
    a.characters = function (t) {
      if (!Array.isArray(t)) {
        return t;
      }
      let e = {};
      try {
        const t = localStorage.getItem("nuojiji_sticker_meanings_hash");
        if (t) {
          e = JSON.parse(t) || {};
        }
      } catch {}
      const r = {
        ...e
      };
      const n = t.map(t => {
        if (!t.stickerMeanings || t.stickerMeanings.length === 0) {
          return t;
        }
        const n = String(t.id);
        const o = function (t) {
          let e = 5381;
          for (let r = 0; r < t.length; r++) {
            e = (e << 5) + e + t.charCodeAt(r);
            e &= e;
          }
          return String(e);
        }(JSON.stringify(t.stickerMeanings));
        if (e[n] === o) {
          const {
            stickerMeanings: e,
            ...r
          } = t;
          return r;
        }
        r[n] = o;
        return t;
      });
      try {
        localStorage.setItem("nuojiji_sticker_meanings_hash", JSON.stringify(r));
      } catch {}
      return n;
    }(t);
  }
  if (e) {
    a.apiSettings = e;
  }
  const i = {
    ...s
  };
  if (n && s.userName !== n) {
    a.userName = n;
    i.userName = n;
  }
  if (o && s.language !== o) {
    a.language = o;
    i.language = o;
  }
  const c = Array.isArray(a.characters) && a.characters.length > 0;
  if (!a.apiSettings && !a.userName && !a.language && !c) {
    return {
      ok: true,
      skipped: true
    };
  }
  const u = await r("/api/sync-context", {
    method: "POST",
    body: JSON.stringify(a)
  });
  (function (t) {
    try {
      localStorage.setItem("nuojiji_sync_context_meta", JSON.stringify(t));
    } catch {}
  })(i);
  return u;
}
async function s() {
  return r("/api/messages/pending");
}
async function a(t) {
  return r("/api/messages/confirm-sync", {
    method: "POST",
    body: JSON.stringify({
      messageIds: t
    })
  });
}
function i() {
  return true;
}
export { a as confirmMessageSync, s as fetchPendingMessages, i as isWorkerConfigured, n as syncAlarms, o as syncContext };