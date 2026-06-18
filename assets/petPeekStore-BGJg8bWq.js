import { h as t, G as e } from "./native-pet-CTNtZgMA.js";
import "./vendor-react-B2VXkTUV.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
import "./vendor-lucide-DBv09HTV.js";
const r = "petPeekHistory";
const n = "petPeekFavorites";
async function a(t) {
  try {
    const r = await e.get(t);
    if (r && typeof r == "object") {
      return r;
    } else {
      return {};
    }
  } catch (r) {
    return {};
  }
}
async function i(t, r) {
  try {
    await e.set(t, r);
  } catch (n) {}
}
async function s({
  userId: t,
  charId: e,
  text: n
}) {
  if (!t || !e || !n) {
    return null;
  }
  const s = String(e);
  const o = await a(r);
  const c = `${t}:${s}`;
  const d = Array.isArray(o[c]) ? o[c] : [];
  const l = {
    id: `peek_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    ts: Date.now(),
    text: String(n).slice(0, 2000),
    contextMsgId: null
  };
  d.unshift(l);
  if (d.length > 50) {
    d.length = 50;
  }
  o[c] = d;
  await i(r, o);
  return l;
}
async function o({
  userId: t,
  charId: e,
  entryId: r,
  entryText: s
}) {
  if (!t || !e) {
    return null;
  }
  const o = String(e);
  const c = await a(n);
  const d = `${t}:${o}`;
  const l = Array.isArray(c[d]) ? c[d] : [];
  const u = l.findIndex(t => t.id === r);
  if (u >= 0) {
    l.splice(u, 1);
    c[d] = l;
    await i(n, c);
    return {
      favorited: false
    };
  } else if (r && s) {
    l.unshift({
      id: r,
      ts: Date.now(),
      text: String(s).slice(0, 2000),
      contextMsgId: null
    });
    c[d] = l;
    await i(n, c);
    return {
      favorited: true
    };
  } else {
    return null;
  }
}
async function c({
  userId: t,
  charId: e
}) {
  if (!t || !e) {
    return [];
  }
  const n = await a(r);
  if (Array.isArray(n[`${t}:${String(e)}`])) {
    return n[`${t}:${String(e)}`];
  } else {
    return [];
  }
}
async function d({
  userId: t,
  charId: e
}) {
  if (!t || !e) {
    return [];
  }
  const r = await a(n);
  if (Array.isArray(r[`${t}:${String(e)}`])) {
    return r[`${t}:${String(e)}`];
  } else {
    return [];
  }
}
async function l({
  userId: e,
  charId: s,
  text: o,
  entryId: c
}) {
  if (!e || !s || !o) {
    return null;
  }
  const d = String(s);
  const l = `peek_mem_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
  try {
    await t.messages.add({
      userId: e,
      characterId: d,
      id: l,
      text: String(o).slice(0, 2000),
      sender: "system",
      timestamp: Date.now(),
      type: "pet-peek-memory"
    });
    try {
      const t = await a(r);
      const s = t[`${e}:${d}`];
      if (Array.isArray(s)) {
        const e = s.find(t => t.id === c);
        if (e) {
          e.contextMsgId = l;
          await i(r, t);
        }
      }
      const o = await a(n);
      const u = o[`${e}:${d}`];
      if (Array.isArray(u)) {
        const t = u.find(t => t.id === c);
        if (t) {
          t.contextMsgId = l;
          await i(n, o);
        }
      }
    } catch (u) {}
    return l;
  } catch (y) {
    console.warn("[petPeekStore] addPeekToContext failed:", y == null ? undefined : y.message);
    return null;
  }
}
async function u({
  userId: e,
  charId: s,
  entryId: o
}) {
  var c;
  var d;
  var l;
  if (!e || !s || !o) {
    return false;
  }
  const u = String(s);
  try {
    let s = null;
    const f = await a(r);
    const I = (c = f[`${e}:${u}`]) == null ? undefined : c.find(t => t.id === o);
    if (I == null ? undefined : I.contextMsgId) {
      s = I.contextMsgId;
    }
    const g = (d = (await a(n))[`${e}:${u}`]) == null ? undefined : d.find(t => t.id === o);
    if (!s && (g == null ? undefined : g.contextMsgId)) {
      s = g.contextMsgId;
    }
    if (s) {
      const r = await t.messages.where("[userId+characterId]").equals([e, u]).filter(t => t.id === s).toArray();
      for (const e of r) {
        if (e._id != null) {
          await t.messages.delete(e._id);
        }
      }
    } else {
      try {
        await t.messages.where("[userId+characterId]").equals([e, u]).filter(t => t.type === "pet-peek-memory" && t.text && I && t.text === I.text).delete();
      } catch (y) {}
    }
    if (I) {
      I.contextMsgId = null;
      await i(r, f);
    }
    const w = await a(n);
    const m = (l = w[`${e}:${u}`]) == null ? undefined : l.find(t => t.id === o);
    if (m) {
      m.contextMsgId = null;
      await i(n, w);
    }
    return true;
  } catch (f) {
    console.warn("[petPeekStore] removePeekFromContext failed:", f == null ? undefined : f.message);
    return false;
  }
}
async function y({
  userId: t,
  charId: e,
  entryId: s
}) {
  if (!t || !e || !s) {
    return false;
  }
  const o = String(e);
  try {
    await u({
      userId: t,
      charId: o,
      entryId: s
    });
    const e = await a(r);
    const c = `${t}:${o}`;
    if (Array.isArray(e[c])) {
      e[c] = e[c].filter(t => t.id !== s);
      await i(r, e);
    }
    const d = await a(n);
    if (Array.isArray(d[c])) {
      d[c] = d[c].filter(t => t.id !== s);
      await i(n, d);
    }
    return true;
  } catch (c) {
    console.warn("[petPeekStore] deletePeekEntry failed:", c == null ? undefined : c.message);
    return false;
  }
}
async function f({
  userId: e,
  charId: r
}) {
  if (!e || !r) {
    return [];
  }
  const n = String(r);
  try {
    const r = (await t.messages.where("characterId").equals(n).filter(t => t.userId === e && t.type === "pet-peek-memory").toArray()).sort((t, e) => (t.timestamp || 0) - (e.timestamp || 0)).map(t => ({
      id: t.id,
      ts: t.timestamp,
      text: t.text
    }));
    console.log("[petPeekStore] getActivePeekMemories:", {
      userId: e,
      cid: n,
      found: r.length
    });
    return r;
  } catch (a) {
    console.warn("[petPeekStore] getActivePeekMemories failed:", a == null ? undefined : a.message);
    return [];
  }
}
export { l as addPeekToContext, y as deletePeekEntry, f as getActivePeekMemories, d as listFavorites, c as listHistory, s as recordPeek, u as removePeekFromContext, o as toggleFavorite };