import { n as t, h as a } from "./native-pet-CTNtZgMA.js";
import { r as e } from "./vendor-react-B2VXkTUV.js";
const r = t => t && typeof window != "undefined" && window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform() ? t.includes("/stream?url=") ? t : /\.music\.126\.net|\.126\.net/.test(t) ? t.startsWith("http://") ? "https://" + t.slice(7) : t.startsWith("//") ? "https:" + t : t : `https://wispy-frog-4582.wcl20071005.workers.dev/stream?url=${encodeURIComponent(t)}` : t;
const n = t => t && typeof t == "string" ? t.startsWith("http://") ? "https://" + t.slice(7) : t.startsWith("//") ? "https:" + t : t : t;
const o = "neteaseMusicCookie";
const i = "neteaseMusicUser";
const s = () => {
  const t = localStorage.getItem(o) || "";
  return {
    cookie: t,
    user: (() => {
      try {
        return JSON.parse(localStorage.getItem(i));
      } catch {
        return null;
      }
    })(),
    isLoggedIn: !!t
  };
};
const l = (t, a = null) => {
  localStorage.setItem(o, t);
  if (a) {
    localStorage.setItem(i, JSON.stringify(a));
  }
};
const u = () => {
  localStorage.removeItem(o);
  localStorage.removeItem(i);
};
const c = async (a, e = {}) => {
  const {
    cookie: r
  } = s();
  if (r) {
    e.cookie = r;
  }
  const n = new URLSearchParams(e).toString();
  const o = `https://wispy-frog-4582.wcl20071005.workers.dev${a}${n ? "?" + n : ""}`;
  const i = await t(o, {
    method: "GET"
  });
  if (!i.ok) {
    throw new Error(`API ${i.status}`);
  }
  return i.json();
};
const d = async (a, e = {}) => {
  const r = new URLSearchParams(e).toString();
  const n = `https://wispy-frog-4582.wcl20071005.workers.dev${a}${r ? "?" + r : ""}`;
  const o = new AbortController();
  const i = setTimeout(() => o.abort(), 10000);
  try {
    const a = await t(n, {
      method: "GET",
      signal: o.signal,
      timeoutMs: 10000
    });
    if (!a.ok) {
      throw new Error(`API ${a.status}`);
    }
    return a.json();
  } finally {
    clearTimeout(i);
  }
};
const m = async () => {
  var t;
  const a = await d("/login/qr/key", {
    timestamp: Date.now()
  });
  console.log("[Netease] QR key response:", JSON.stringify(a).substring(0, 300));
  return (a == null ? undefined : a.unikey) || ((t = a == null ? undefined : a.data) == null ? undefined : t.unikey) || null;
};
const g = t => `https://music.163.com/login?codekey=${t}`;
const p = async t => {
  const a = await d("/login/qr/check", {
    key: t,
    noCookie: true,
    timestamp: Date.now()
  });
  console.log("[Netease] QR check response:", a);
  return a;
};
const y = async () => c("/login/status", {
  timestamp: Date.now()
});
const v = async t => {
  const a = await c("/user/playlist", {
    uid: t,
    limit: 50
  });
  if (a.code === 200 && a.playlist) {
    return a.playlist.map(a => {
      var e;
      var r;
      return {
        id: a.id,
        name: a.name,
        cover: n(a.coverImgUrl || ""),
        trackCount: a.trackCount || 0,
        creator: ((e = a.creator) == null ? undefined : e.nickname) || "",
        isOwner: String((r = a.creator) == null ? undefined : r.userId) === String(t)
      };
    });
  } else {
    return [];
  }
};
const f = async t => {
  const a = Array.isArray(t) ? t.join(",") : String(t);
  const e = await c("/song/detail", {
    ids: a
  });
  if (e.code !== 200) {
    return [];
  } else {
    return (e.songs || []).map(t => {
      var a;
      var e;
      var r;
      var o;
      return {
        id: t.id,
        name: t.name,
        artists: (t.ar || t.artists || []).map(t => t.name).join(" / "),
        album: ((a = t.al) == null ? undefined : a.name) || ((e = t.album) == null ? undefined : e.name) || "",
        cover: n(((r = t.al) == null ? undefined : r.picUrl) || ((o = t.album) == null ? undefined : o.picUrl) || ""),
        duration: t.dt || t.duration || 0
      };
    });
  }
};
const w = async (t, a = 320000) => {
  var e;
  const n = await c("/song/url", {
    id: t,
    br: a
  });
  if (n.code !== 200 || !((e = n.data) == null ? undefined : e[0])) {
    return null;
  }
  const o = n.data[0];
  if (o.url) {
    return {
      url: r(o.url),
      br: o.br,
      size: o.size,
      type: o.type
    };
  } else {
    return null;
  }
};
const h = async t => {
  var a;
  var e;
  const r = await c("/lyric", {
    id: t
  });
  if (r.code !== 200) {
    return {
      lrc: "",
      tlyric: ""
    };
  } else {
    return {
      lrc: ((a = r.lrc) == null ? undefined : a.lyric) || "",
      tlyric: ((e = r.tlyric) == null ? undefined : e.lyric) || ""
    };
  }
};
const b = t => {
  if (!t) {
    return [];
  }
  const a = t.split("\n");
  const e = [];
  for (const r of a) {
    const t = r.match(/\[(\d{1,2}):(\d{2})(?:\.(\d{2,3}))?\](.*)/);
    if (t) {
      const a = parseInt(t[1], 10);
      const r = parseInt(t[2], 10);
      const n = t[3] ? parseInt(t[3].padEnd(3, "0"), 10) : 0;
      const o = t[4].trim();
      if (o) {
        e.push({
          time: a * 60 + r + n / 1000,
          text: o
        });
      }
    }
  }
  return e.sort((t, a) => t.time - a.time);
};
const S = async () => {
  const t = await c("/personalized/newsong");
  if (t.code === 200 && t.result) {
    return t.result.map(t => {
      var a;
      var e;
      var r;
      var o;
      const i = t.song || t;
      return {
        id: i.id,
        name: i.name,
        artists: (i.artists || i.ar || []).map(t => t.name).join(" / "),
        album: ((a = i.album) == null ? undefined : a.name) || ((e = i.al) == null ? undefined : e.name) || "",
        cover: n(((r = i.album) == null ? undefined : r.picUrl) || ((o = i.al) == null ? undefined : o.picUrl) || ""),
        duration: i.duration || i.dt || 0
      };
    });
  } else {
    return [];
  }
};
const k = async t => {
  const a = await c("/playlist/detail", {
    id: t
  });
  if (a.code !== 200 || !a.playlist) {
    return null;
  }
  const e = a.playlist;
  const r = e.trackCount || (e.tracks || []).length;
  let o = e.tracks || [];
  if (r > o.length) {
    try {
      const a = 500;
      const e = [];
      for (let n = 0; n < r; n += a) {
        const r = await c("/playlist/track/all", {
          id: t,
          limit: a,
          offset: n
        });
        const o = (r == null ? undefined : r.songs) || [];
        if (o.length === 0) {
          break;
        }
        e.push(...o);
      }
      if (e.length > 0) {
        o = e;
      }
    } catch (i) {
      console.warn("[Netease] /playlist/track/all 失敗，使用嵌入的前 50 首:", i.message);
    }
  }
  return {
    id: e.id,
    name: e.name,
    cover: n(e.coverImgUrl || ""),
    description: e.description || "",
    trackCount: r,
    tracks: o.map(t => {
      var a;
      var e;
      return {
        id: t.id,
        name: t.name,
        artists: (t.ar || []).map(t => t.name).join(" / "),
        album: ((a = t.al) == null ? undefined : a.name) || "",
        cover: n(((e = t.al) == null ? undefined : e.picUrl) || ""),
        duration: t.dt || 0
      };
    })
  };
};
const C = t => {
  const a = Math.floor(t / 1000);
  const e = Math.floor(a / 60);
  const r = a % 60;
  return `${String(e).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
};
const I = async t => {
  var a;
  var e;
  const n = await c("/gqb/play-url", {
    play_id: t
  });
  if (n.code === 200 && ((e = (a = n.data) == null ? undefined : a[0]) == null ? undefined : e.url)) {
    return {
      url: r(n.data[0].url),
      br: 128000,
      type: "mp3"
    };
  } else {
    return null;
  }
};
const U = async (t, {
  offset: a = 0,
  limit: e = 20
} = {}) => (async (t, {
  offset: a = 0,
  limit: e = 20
} = {}) => {
  var r;
  const o = await c("/search", {
    keywords: t,
    offset: a,
    limit: e
  });
  if (o.code === 200 && ((r = o.result) == null ? undefined : r.songs)) {
    return {
      songs: o.result.songs.map(t => {
        var a;
        var e;
        var r;
        var o;
        var i;
        const s = t.fee ?? ((a = t.privilege) == null ? undefined : a.fee) ?? 0;
        return {
          id: t.id,
          name: t.name,
          artists: (t.ar || t.artists || []).map(t => t.name).join(" / "),
          album: ((e = t.al) == null ? undefined : e.name) || ((r = t.album) == null ? undefined : r.name) || "",
          cover: n(((o = t.al) == null ? undefined : o.picUrl) || ((i = t.album) == null ? undefined : i.picUrl) || ""),
          duration: t.dt || t.duration || 0,
          fee: s,
          vip: s !== 0
        };
      }),
      songCount: o.result.songCount || 0
    };
  } else {
    return {
      songs: [],
      songCount: 0
    };
  }
})(t, {
  offset: a,
  limit: e
});
const A = async t => {
  var a;
  try {
    const e = await c("/qianqian/search", {
      keywords: t
    });
    if (e.code === 200 && ((a = e.data) == null ? undefined : a.music_url)) {
      return {
        ...e.data,
        cover: n(e.data.cover || ""),
        music_url: r(e.data.music_url)
      };
    } else {
      return null;
    }
  } catch {
    return null;
  }
};
const _ = async (t, {
  source: a = "netease",
  offset: e = 0,
  limit: r = 20
} = {}) => {
  var o;
  const i = Math.floor(e / r) + 1;
  const s = await c("/gdstudio/search", {
    keywords: t,
    source: a,
    count: r,
    pages: i
  });
  if (s.code === 200 && ((o = s.result) == null ? undefined : o.songs)) {
    return {
      songs: s.result.songs.map(t => {
        var e;
        return {
          id: t.id,
          name: t.name,
          artists: Array.isArray(t.artists) ? t.artists.map(t => typeof t == "string" ? t : t.name).join(" / ") : t.artists || "",
          album: ((e = t.album) == null ? undefined : e.name) || "",
          cover: n(t.cover || ""),
          duration: t.duration || 0,
          source: t.source || a,
          pic_id: t.pic_id,
          lyric_id: t.lyric_id
        };
      }),
      songCount: s.result.songCount || s.result.songs.length || 0
    };
  } else {
    return {
      songs: [],
      songCount: 0
    };
  }
};
const P = async (t, a = "netease", e = 320000) => {
  var n;
  const o = await c("/gdstudio/url", {
    id: t,
    source: a,
    br: Math.floor(e / 1000)
  });
  if (o.code !== 200 || !((n = o.data) == null ? undefined : n[0])) {
    return null;
  }
  const i = o.data[0];
  if (i.url) {
    return {
      url: r(i.url),
      br: i.br,
      size: i.size,
      type: i.type || "mp3"
    };
  } else {
    return null;
  }
};
const $ = async (t, a = "", e = "kuwo", r = 320000) => {
  if (!t) {
    return null;
  }
  const n = a ? `${t} ${a}` : t;
  const {
    songs: o
  } = await _(n, {
    source: e,
    limit: 10
  });
  if (!(o == null ? undefined : o.length)) {
    return null;
  }
  const i = t => String(t || "").toLowerCase().replace(/\s+/g, "");
  const s = i(t);
  const l = i(a);
  let u = o.find(t => {
    const a = i(t.name).includes(s) || s.includes(i(t.name));
    const e = !l || i(t.artists).includes(l);
    return a && e;
  }) || o.find(t => {
    const a = i(t.name);
    return a.includes(s) || s.includes(a);
  }) || o[0];
  if (u == null ? undefined : u.id) {
    return P(u.id, u.source || e, r);
  } else {
    return null;
  }
};
const D = "__favorites__";
const j = "__uploads__";
const T = "radioPlaylists";
const L = t => `radioPlaylist_${t}`;
const O = t => `radio_${t}`;
const B = [{
  id: D,
  name: "我的收藏",
  isDefault: true,
  createdAt: 0
}, {
  id: j,
  name: "我的上傳",
  isDefault: true,
  createdAt: 1
}];
const N = () => {
  try {
    const t = localStorage.getItem(T);
    const a = t ? JSON.parse(t) : [];
    for (const e of B) {
      if (!a.find(t => t.id === e.id)) {
        a.unshift(e);
      }
    }
    return a;
  } catch {
    return [...B];
  }
};
const R = t => {
  try {
    const a = localStorage.getItem(L(t));
    if (a) {
      return JSON.parse(a);
    } else {
      return [];
    }
  } catch {
    return [];
  }
};
const q = t => localStorage.setItem(T, JSON.stringify(t));
const M = (t, a) => localStorage.setItem(L(t), JSON.stringify(a));
async function E(t, e) {
  await a.ttsAudio.put({
    msgId: O(t),
    audioBlob: e,
    audioDuration: 0,
    audioType: e.type || "audio/mpeg"
  });
  return URL.createObjectURL(e);
}
async function J(t) {
  try {
    const e = O(t);
    const r = await a.ttsAudio.get(e);
    if (!r) {
      return null;
    }
    if (r.audioBlob instanceof Blob) {
      return URL.createObjectURL(r.audioBlob);
    }
    if (r.audioBase64) {
      const t = r.audioType || "audio/mpeg";
      const n = await fetch(`data:${t};base64,${r.audioBase64}`);
      const o = await n.blob();
      try {
        await a.ttsAudio.put({
          msgId: e,
          audioBlob: o,
          audioDuration: r.audioDuration || 0,
          audioType: t
        });
      } catch {}
      return URL.createObjectURL(o);
    }
    return null;
  } catch {
    return null;
  }
}
const x = t => `radio_cover_${t}`;
async function z(t, e) {
  if (e) {
    await a.ttsAudio.put({
      msgId: x(t),
      audioBase64: e,
      audioDuration: 0,
      audioType: "image/cover"
    });
  }
}
async function F(t) {
  try {
    const e = await a.ttsAudio.get(x(t));
    return (e == null ? undefined : e.audioBase64) || null;
  } catch {
    return null;
  }
}
const W = t => `radio_lyric_${t}`;
async function G(t, e) {
  const r = new TextEncoder().encode(e);
  const n = String.fromCharCode(...r);
  await a.ttsAudio.put({
    msgId: W(t),
    audioBase64: btoa(n),
    audioDuration: 0,
    audioType: "text/lrc"
  });
}
async function Q(t) {
  try {
    const e = await a.ttsAudio.get(W(t));
    if (!(e == null ? undefined : e.audioBase64)) {
      return null;
    }
    const r = atob(e.audioBase64);
    const n = new Uint8Array(r.length);
    for (let t = 0; t < r.length; t++) {
      n[t] = r.charCodeAt(t);
    }
    return new TextDecoder().decode(n);
  } catch {
    return null;
  }
}
const V = () => {
  const [t, r] = e.useState(N);
  const [n, o] = e.useState(0);
  const i = e.useCallback(t => {
    const a = {
      id: `pl_${Date.now()}`,
      name: t,
      createdAt: Date.now()
    };
    r(t => {
      const e = [...t, a];
      q(e);
      return e;
    });
    return a;
  }, []);
  const s = e.useCallback(t => {
    if (t !== D && t !== j) {
      r(a => {
        const e = a.filter(a => a.id !== t);
        q(e);
        localStorage.removeItem(L(t));
        return e;
      });
    }
  }, []);
  const l = e.useCallback((t, a) => {
    if (t !== D && t !== j) {
      r(e => {
        const r = e.map(e => e.id === t ? {
          ...e,
          name: a
        } : e);
        q(r);
        return r;
      });
    }
  }, []);
  const u = e.useCallback((t, a) => {
    r(e => {
      const r = e.map(e => e.id === t ? {
        ...e,
        ...a
      } : e);
      q(r);
      return r;
    });
  }, []);
  const c = e.useCallback(t => R(t), [n]);
  const d = e.useCallback((t, a) => {
    const e = R(t);
    return !e.some(t => String(t.id) === String(a.id)) && (e.push({
      id: a.id,
      title: a.title || a.name || "",
      artist: a.artist || a.artists || "",
      cover: a.cover || "",
      duration: a.duration || 0,
      type: "song",
      source: a.source,
      gqbPlayId: a.gqbPlayId
    }), M(t, e), o(t => t + 1), true);
  }, []);
  const m = e.useCallback((t, a) => {
    const e = R(t);
    const r = new Set(e.map(t => String(t.id)));
    let n = 0;
    for (const o of a) {
      if (!r.has(String(o.id))) {
        e.push({
          id: o.id,
          title: o.title || o.name || "",
          artist: o.artist || o.artists || "",
          cover: o.cover || "",
          duration: o.duration || 0,
          type: "song",
          source: o.source,
          gqbPlayId: o.gqbPlayId
        });
        r.add(String(o.id));
        n++;
      }
    }
    if (n > 0) {
      M(t, e);
      o(t => t + 1);
    }
    return n;
  }, []);
  const g = e.useCallback((t, e) => {
    const r = R(t);
    M(t, r.filter(t => String(t.id) !== String(e)));
    if (t === j) {
      (async function (t) {
        try {
          await a.ttsAudio.delete(O(t));
        } catch {}
        try {
          await a.ttsAudio.delete(W(t));
        } catch {}
        try {
          await a.ttsAudio.delete(x(t));
        } catch {}
      })(e);
    }
    o(t => t + 1);
  }, []);
  const p = e.useCallback(t => !!t && R(D).some(a => String(a.id) === String(t)), [n]);
  const y = e.useCallback(t => !!(t == null ? undefined : t.id) && (R(D).some(a => String(a.id) === String(t.id)) ? (g(D, t.id), false) : (d(D, t), true)), [d, g]);
  return {
    playlists: t,
    createPlaylist: i,
    deletePlaylist: s,
    renamePlaylist: l,
    updatePlaylist: u,
    getPlaylistSongs: c,
    getPlaylistSongCount: e.useCallback(t => R(t).length, [n]),
    addToPlaylist: d,
    addManyToPlaylist: m,
    removeFromPlaylist: g,
    isInFavorites: p,
    toggleFavorite: y,
    FAVORITES_ID: D,
    UPLOADS_ID: j,
    saveUploadedAudio: E,
    restoreUploadedAudio: J,
    saveUploadedLyric: G,
    getUploadedLyric: Q,
    saveUploadedCover: z,
    getUploadedCover: F
  };
};
export { D as F, j as U, _ as a, v as b, k as c, m as d, g as e, C as f, s as g, p as h, l as i, y as j, u as k, R as l, I as m, P as n, A as o, w as p, $ as q, h as r, U as s, b as t, V as u, S as v, f as w, J as x, N as y };