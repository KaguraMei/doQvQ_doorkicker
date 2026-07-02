// Recovered from assets/native-pet-CTNtZgMA.js.
// This is a strict source-fragment extraction; aliases are preserved from the bundle.
// Source lines: 34089-42146 (desktop pet services, native bridges, manager screen).
import { r as e, j as t, R as n } from "./vendor-react-B2VXkTUV.js";
import { X as a } from "./vendor-dexie-KLdnSHz2.js";
import { J as o } from "./vendor-jszip-DU-5YDGO.js";

const gu = {
  click: new Set(),
  doubleClick: new Set(),
  longPress: new Set(),
  menuAction: new Set(),
  appSenseReaction: new Set()
};
function fu() {
  if (pu) {
    return mu;
  }
  if (typeof window == "undefined" || !window.Capacitor || !window.Capacitor.isNativePlatform || !window.Capacitor.isNativePlatform() || !window.Capacitor.getPlatform || window.Capacitor.getPlatform() !== "android") {
    pu = true;
    return null;
  }
  try {
    mu = Bs("FloatingPet");
    pu = true;
    return mu;
  } catch (Hm) {
    console.warn("[floatingPet] registerPlugin 失败:", Hm);
    pu = true;
    return null;
  }
}
async function yu() {
  const e = fu();
  if (!e) {
    return false;
  }
  try {
    return !!(await e.checkPermission()).granted;
  } catch (t) {
    return false;
  }
}
async function wu() {
  const e = fu();
  if (!e) {
    return {
      granted: false
    };
  }
  try {
    return await e.requestPermission();
  } catch (t) {
    return {
      granted: false
    };
  }
}
async function Su() {
  return !!(await yu()) || !!(await wu()).granted;
}
const vu = 800000;
async function bu(e, t = 256) {
  if (!e || typeof e != "string") {
    return "";
  }
  if (!e.startsWith("data:") && !e.startsWith("blob:")) {
    return e;
  }
  const n = function (e) {
    if (typeof e != "string") {
      return "unknown";
    } else if (e.startsWith("data:image/gif")) {
      return "gif";
    } else if (e.startsWith("data:image/png")) {
      return "png";
    } else if (e.startsWith("data:image/webp")) {
      return "webp";
    } else if (e.startsWith("data:image/")) {
      return "other";
    } else {
      return "unknown";
    }
  }(e);
  if (n === "gif") {
    if (e.length <= vu) {
      return e;
    }
    const t = Math.round(e.length / 1024);
    const n = new Error(`GIF 头像 ${t}KB 超过 800KB 限制 — Android Binder IPC 不支持。请用更小的 GIF 或换静态图。`);
    n.code = "AVATAR_GIF_TOO_LARGE";
    n.sizeKb = t;
    throw n;
  }
  if (e.startsWith("data:") && e.length < 200000) {
    return e;
  }
  try {
    const a = await new Promise((t, n) => {
      const a = new Image();
      a.crossOrigin = "anonymous";
      a.onload = () => t(a);
      a.onerror = () => n(new Error("image load failed"));
      a.src = e;
    });
    const o = document.createElement("canvas");
    o.width = t;
    o.height = t;
    const r = o.getContext("2d");
    const i = Math.max(t / a.width, t / a.height);
    const s = a.width * i;
    const l = a.height * i;
    let c;
    r.drawImage(a, (t - s) / 2, (t - l) / 2, s, l);
    if (n === "png" || n === "webp") {
      c = o.toDataURL("image/png");
      if (c.length > vu) {
        console.warn("[floatingPet] PNG output too large, fallback to JPEG (transparency lost):", c.length);
        c = o.toDataURL("image/jpeg", 0.85);
      }
    } else {
      c = o.toDataURL("image/jpeg", 0.85);
    }
    if (c.length > vu) {
      const e = Math.round(c.length / 1024);
      const t = new Error(`头像即使缩到 256×256 也有 ${e}KB,超过 800KB 限制。原图可能像素特别高,请换一张。`);
      t.code = "AVATAR_SHRUNK_TOO_LARGE";
      t.sizeKb = e;
      throw t;
    }
    return c;
  } catch (Hm) {
    if (Hm == null ? undefined : Hm.code) {
      throw Hm;
    }
    console.warn("[floatingPet] avatar shrink failed, fallback empty:", Hm == null ? undefined : Hm.message);
    return "";
  }
}
const Au = {
  isAvailable: async function () {
    return typeof window != "undefined" && !!window.Capacitor && !!window.Capacitor.isNativePlatform && !!window.Capacitor.isNativePlatform() && !!window.Capacitor.getPlatform && window.Capacitor.getPlatform() === "android";
  },
  hasPermission: yu,
  requestPermission: wu,
  ensurePermission: Su,
  show: async function (e = {}) {
    const t = fu();
    if (!t) {
      return {
        success: false,
        reason: "not-android-native"
      };
    }
    if (!(await Su())) {
      return {
        success: false,
        reason: "no-permission"
      };
    }
    const n = e.name && e.name.length > 0 ? e.name[0] : "?";
    let a;
    try {
      a = await bu(e.avatarUrl || "", 256);
    } catch (Hm) {
      if (Hm == null ? undefined : Hm.code) {
        return {
          success: false,
          reason: "avatar-too-large",
          avatarErrorCode: Hm.code,
          avatarSizeKb: Hm.sizeKb,
          error: Hm.message
        };
      }
      a = "";
    }
    try {
      const o = await t.show({
        avatarUrl: a,
        size: e.size || 120,
        x: typeof e.x == "number" ? e.x : -1,
        y: typeof e.y == "number" ? e.y : -1,
        fallbackText: n,
        circleClip: e.circleClip !== false,
        hideInApp: e.hideInApp !== false
      });
      return {
        ...(o || {}),
        success: !!(o == null ? undefined : o.success)
      };
    } catch (Hm) {
      console.warn("[floatingPet] show 失败:", Hm);
      return {
        success: false,
        reason: "native-error",
        error: String(Hm)
      };
    }
  },
  setMessage: async function (e, t = 3000) {
    const n = fu();
    if (!n) {
      return {
        success: false
      };
    }
    try {
      await n.setMessage({
        text: String(e || ""),
        durationMs: t
      });
      return {
        success: true
      };
    } catch (a) {
      return {
        success: false
      };
    }
  },
  hide: async function () {
    const e = fu();
    if (!e) {
      return {
        success: false
      };
    }
    try {
      await e.hide();
      return {
        success: true
      };
    } catch (t) {
      return {
        success: false
      };
    }
  },
  isVisible: async function () {
    const e = fu();
    if (!e) {
      return false;
    }
    try {
      return !!(await e.isVisible()).visible;
    } catch (t) {
      return false;
    }
  },
  getDiagnostics: async function () {
    const e = fu();
    if (!e) {
      return {
        available: false
      };
    }
    try {
      const t = await e.isVisible();
      return {
        available: true,
        visible: !!t.visible,
        serviceRunning: !!t.serviceRunning,
        viewAttached: !!t.viewAttached,
        lastError: t.lastError || null,
        lastDiag: t.lastDiag || null
      };
    } catch (Hm) {
      return {
        available: true,
        error: (Hm == null ? undefined : Hm.message) || String(Hm)
      };
    }
  },
  bringToForeground: async function (e, t) {
    const n = fu();
    if (!n) {
      return {
        success: false
      };
    }
    try {
      return await n.bringToForeground({
        charId: String(e || ""),
        userId: String(t || "")
      });
    } catch (Hm) {
      return {
        success: false,
        error: (Hm == null ? undefined : Hm.message) || String(Hm)
      };
    }
  },
  showMenu: async function ({
    hunger: e = "饱",
    mood: t = "开心",
    intimacy: n = "0"
  } = {}) {
    const a = fu();
    if (!a) {
      return {
        success: false
      };
    }
    try {
      return await a.showMenu({
        hunger: e,
        mood: t,
        intimacy: n
      });
    } catch (Hm) {
      return {
        success: false,
        error: (Hm == null ? undefined : Hm.message) || String(Hm)
      };
    }
  },
  hideMenu: async function () {
    const e = fu();
    if (!e) {
      return {
        success: false
      };
    }
    try {
      return await e.hideMenu({});
    } catch (Hm) {
      return {
        success: false,
        error: (Hm == null ? undefined : Hm.message) || String(Hm)
      };
    }
  },
  updateMenuState: async function ({
    hunger: e,
    mood: t,
    intimacy: n
  } = {}) {
    const a = fu();
    if (!a) {
      return {
        success: false
      };
    }
    try {
      return await a.updateMenuState({
        hunger: e || null,
        mood: t || null,
        intimacy: n || null
      });
    } catch (Hm) {
      return {
        success: false,
        error: (Hm == null ? undefined : Hm.message) || String(Hm)
      };
    }
  },
  setImage: async function (e, {
    circleClip: t = false,
    holdMs: n = 0
  } = {}) {
    const a = fu();
    if (!a) {
      return {
        success: false
      };
    }
    if (!e) {
      return {
        success: false,
        reason: "no-image"
      };
    }
    let o;
    try {
      o = await bu(e, 256);
    } catch (Hm) {
      return {
        success: false,
        reason: "image-too-large",
        error: Hm == null ? undefined : Hm.message
      };
    }
    if (!o) {
      return {
        success: false,
        reason: "shrink-empty"
      };
    }
    try {
      await a.setImage({
        avatarUrl: o,
        circleClip: t,
        holdMs: n
      });
      return {
        success: true
      };
    } catch (Hm) {
      return {
        success: false,
        error: (Hm == null ? undefined : Hm.message) || String(Hm)
      };
    }
  },
  openAppSettings: async function () {
    const e = fu();
    if (!e) {
      return {
        opened: false
      };
    }
    try {
      return await e.openAppSettings();
    } catch (t) {
      return {
        opened: false
      };
    }
  },
  openAutoStartSettings: async function () {
    const e = fu();
    if (!e) {
      return {
        opened: false
      };
    }
    try {
      return await e.openAutoStartSettings();
    } catch (t) {
      return {
        opened: false
      };
    }
  },
  syncAppSenseConfig: async function ({
    config: e,
    pools: t,
    charId: n
  } = {}) {
    const a = fu();
    if (!a) {
      return {
        success: false,
        reason: "not-android-native"
      };
    }
    try {
      return await a.syncAppSenseConfig({
        configJson: JSON.stringify(e || {}),
        poolsJson: JSON.stringify(t || {}),
        charId: String(n || "")
      });
    } catch (Hm) {
      console.warn("[floatingPet] syncAppSenseConfig failed:", Hm == null ? undefined : Hm.message);
      return {
        success: false,
        error: String(Hm)
      };
    }
  },
  on: function (e, t) {
    if (gu[e]) {
      (function () {
        if (hu) {
          return;
        }
        const e = fu();
        if (e) {
          hu = true;
          try {
            e.addListener("petClick", e => {
              gu.click.forEach(t => {
                try {
                  t(e);
                } catch (n) {}
              });
            });
            e.addListener("petDoubleClick", e => {
              gu.doubleClick.forEach(t => {
                try {
                  t(e);
                } catch (n) {}
              });
            });
            e.addListener("petLongPress", e => {
              gu.longPress.forEach(t => {
                try {
                  t(e);
                } catch (n) {}
              });
            });
            e.addListener("petMenuAction", e => {
              gu.menuAction.forEach(t => {
                try {
                  t(e);
                } catch (n) {}
              });
            });
            e.addListener("petAppSenseReaction", e => {
              gu.appSenseReaction.forEach(t => {
                try {
                  t(e);
                } catch (n) {}
              });
            });
          } catch (Hm) {
            console.warn("[floatingPet] addListener 失败:", Hm);
          }
        }
      })();
      gu[e].add(t);
      return () => gu[e].delete(t);
    } else {
      console.warn("[floatingPet] 未知事件:", e);
      return () => {};
    }
  }
};
const Iu = Object.freeze(Object.defineProperty({
  __proto__: null,
  floatingPet: Au
}, Symbol.toStringTag, {
  value: "Module"
}));
let Tu = null;
let Cu = false;
let Pu = null;
function ku() {
  if (!Cu) {
    return;
  }
  const {
    minIntervalMs: e,
    maxIntervalMs: t
  } = Pu;
  const n = e + Math.random() * (t - e);
  Tu = setTimeout(async () => {
    if (Cu) {
      try {
        if (!(await Au.isVisible())) {
          ku();
          return;
        }
        const t = await Pu.generateLine();
        if (t && typeof t == "string" && (await Au.setMessage(t, Pu.bubbleDurationMs || 5000), typeof Pu.onSpeak == "function")) {
          try {
            await Pu.onSpeak(t);
          } catch (e) {}
        }
      } catch (Hm) {
        console.warn("[petScheduler] tick 失败:", Hm);
      }
      ku();
    }
  }, n);
}
function Eu(e) {
  xu();
  Pu = {
    minIntervalMs: 300000,
    maxIntervalMs: 1800000,
    bubbleDurationMs: 5000,
    ...e
  };
  if (typeof Pu.generateLine == "function") {
    Cu = true;
    ku();
  } else {
    console.warn("[petScheduler] generateLine 必须是 async function");
  }
}
function xu() {
  Cu = false;
  if (Tu) {
    clearTimeout(Tu);
    Tu = null;
  }
}
const Mu = new Map();
const Nu = "desktopPetVoiceCache";
function Ru(e) {
  return new Promise((t, n) => {
    const a = new FileReader();
    a.onload = () => t(a.result);
    a.onerror = n;
    a.readAsDataURL(e);
  });
}
async function Du(e, t) {
  if (!e || !t) {
    return null;
  }
  try {
    const n = await lt.get(Nu);
    if (n && typeof n == "object") {
      if (String(n.charId) !== String(e) || String(n.voiceId) !== String(t)) {
        return null;
      } else if (n.map && typeof n.map == "object") {
        return n;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (n) {
    return null;
  }
}
async function $u(e, t, n) {
  const a = await Du(e, t);
  if (!a) {
    return null;
  }
  const o = a.map[n];
  if (o) {
    return function (e) {
      if (typeof e != "string" || !e.startsWith("data:")) {
        return null;
      }
      const [t, n] = e.split(",");
      if (!n) {
        return null;
      }
      const a = (t.match(/data:([^;]+)/) || [, "audio/mpeg"])[1];
      const o = atob(n);
      const r = new Uint8Array(o.length);
      for (let i = 0; i < o.length; i++) {
        r[i] = o.charCodeAt(i);
      }
      return new Blob([r], {
        type: a
      });
    }(o);
  } else {
    return null;
  }
}
async function _u() {
  try {
    await lt.set(Nu, null);
  } catch (e) {}
}
async function Ou({
  charId: e,
  voiceProvider: t = "minimax",
  voiceId: n,
  sovitsRefText: a = "",
  voiceLanguage: o = "auto",
  voiceSpeed: r = 1,
  apiSettings: i,
  lines: s,
  onProgress: l,
  extraVoiceConfig: c = null
}) {
  const d = t === "elevenlabs" ? !!(i == null ? undefined : i.elevenlabsApiKey) : t === "gptsovits" ? !!(i == null ? undefined : i.sovitsServerUrl) : !!(i == null ? undefined : i.minimaxApiKey);
  if (!e || !n || !d || !Array.isArray(s)) {
    return {
      success: false,
      reason: "missing-args"
    };
  }
  const u = {};
  let m = 0;
  const p = s.length;
  for (const g of s) {
    if (g && typeof g == "string") {
      try {
        const e = await fd(g, {
          ...(c || {}),
          apiSettings: i,
          voiceProvider: t,
          voiceId: n,
          sovitsRefText: a,
          language: o,
          speed: r
        });
        if (e == null ? undefined : e.audioBlob) {
          const t = await Ru(e.audioBlob);
          u[g] = t;
        }
      } catch (Hm) {
        console.warn("[prewarmVoiceCache] failed for line:", g, Hm);
      }
      m++;
      if (l) {
        try {
          l(m, p);
        } catch (h) {}
      }
      await new Promise(e => setTimeout(e, 0));
    } else {
      m++;
      if (l) {
        try {
          l(m, p);
        } catch (h) {}
      }
    }
  }
  try {
    await lt.set(Nu, {
      charId: String(e),
      voiceId: String(n),
      map: u,
      generatedAt: Date.now()
    });
    return {
      success: true,
      count: Object.keys(u).length,
      total: p
    };
  } catch (Hm) {
    console.error("[prewarmVoiceCache] 保存 cache 失败:", Hm);
    return {
      success: false,
      reason: "save-failed",
      error: Hm == null ? undefined : Hm.message
    };
  }
}
const Lu = Object.freeze(Object.defineProperty({
  __proto__: null,
  clearVoiceCache: _u,
  getCachedAudioBlob: $u,
  loadVoiceCache: Du,
  prewarmVoiceCache: Ou
}, Symbol.toStringTag, {
  value: "Module"
}));
const ju = {
  off: null,
  frequent: {
    min: 60000,
    max: 300000
  },
  normal: {
    min: 300000,
    max: 1800000
  },
  rare: {
    min: 1800000,
    max: 7200000
  }
};
const Bu = ["你回来啦～", "在干嘛呢", "想我了吗？", "哼,不理你", "陪我聊聊嘛", "今天过得怎么样", "看你一直没动,是在忙吗？", "困了的话早点休息哦", "我好无聊啊...", "你今天好像有点不一样", "嗯？", "想跟你说话", "...在偷偷看你", "咳,假装没看见我吧", "别走太远"];
const Uu = {
  enabled: false,
  avatarMode: "follow-main",
  lockedCharId: null,
  boundCharId: null,
  boundUserId: null,
  customAvatar: null,
  size: 120,
  chatterFrequency: "normal",
  hideInApp: true,
  speakAsChar: false,
  stateImages: null,
  carePools: null
};
const Fu = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: function () {
    const {
      currentProfileUser: t
    } = Ds();
    const {
      characters: n
    } = Is();
    const [a, o] = e.useState(Uu);
    const r = e.useRef(false);
    e.useEffect(() => {
      let e = false;
      (async () => {
        try {
          const t = await lt.get("desktopPetConfig");
          if (e) {
            return;
          }
          if (t && typeof t == "object") {
            o({
              ...Uu,
              ...t
            });
          } else {
            const t = (await lt.get("apiSettings")) || {};
            if (!e && t.desktopFloatingPetEnabled !== undefined) {
              o(e => ({
                ...e,
                enabled: !!t.desktopFloatingPetEnabled
              }));
            }
          }
        } catch (t) {}
      })();
      const t = e => {
        const t = e == null ? undefined : e.detail;
        if (t && typeof t == "object") {
          o({
            ...Uu,
            ...t
          });
        }
      };
      window.addEventListener("nuojiji:desktop-pet-config-updated", t);
      const n = e => {
        var t;
        const n = (t = e == null ? undefined : e.detail) == null ? undefined : t.desktopFloatingPetEnabled;
        if (typeof n == "boolean") {
          o(e => ({
            ...e,
            enabled: n
          }));
        }
      };
      window.addEventListener("nuojiji:api-settings-updated", n);
      return () => {
        e = true;
        window.removeEventListener("nuojiji:desktop-pet-config-updated", t);
        window.removeEventListener("nuojiji:api-settings-updated", n);
      };
    }, []);
    const i = e.useMemo(() => {
      if (!Array.isArray(n)) {
        return null;
      }
      if (a.boundCharId) {
        const e = n.find(e => String(e.id) === String(a.boundCharId));
        if (e) {
          return e;
        }
      }
      if (a.avatarMode === "locked" && a.lockedCharId) {
        const e = n.find(e => String(e.id) === String(a.lockedCharId));
        if (e) {
          return e;
        }
      }
      if (!t) {
        return null;
      }
      const e = t.uid || t.id;
      if (!e) {
        return null;
      }
      let o = null;
      try {
        o = localStorage.getItem(`nuojiji_last_selected_char_${e}`);
      } catch (r) {}
      if (o) {
        const e = n.find(e => String(e.id) === String(o));
        if (e) {
          return e;
        }
      }
      return n[0] || null;
    }, [a.boundCharId, a.avatarMode, a.lockedCharId, t, n]);
    const [s, l] = e.useState(null);
    e.useEffect(() => {
      if (a.avatarMode !== "follow-builtin-pet") {
        return;
      }
      let e = false;
      (async () => {
        try {
          const t = await lt.get("desktopPetBlob");
          if (e) {
            return;
          }
          if (t == null ? undefined : t.image) {
            l(t.image);
          }
        } catch (t) {}
      })();
      return () => {
        e = true;
      };
    }, [a.avatarMode]);
    const c = e.useMemo(() => a.avatarMode === "custom" && a.customAvatar ? {
      id: (i == null ? undefined : i.id) || "custom-pet",
      name: (i == null ? undefined : i.name) || "桌宠",
      image: a.customAvatar,
      isCustomImage: true
    } : a.avatarMode === "follow-builtin-pet" && s ? {
      id: (i == null ? undefined : i.id) || "builtin-pet",
      name: (i == null ? undefined : i.name) || "桌宠",
      image: s,
      isCustomImage: true
    } : i ? {
      id: i.id,
      name: i.name,
      image: i.image,
      isCustomImage: false
    } : null, [a.avatarMode, a.customAvatar, i, s]);
    const d = e.useMemo(() => Array.isArray(a.lineList) && a.lineList.length > 0 ? a.lineList : c ? [`${c.name}在想你哦`, `${c.name}陪着你呢`, ...Bu] : Bu, [a.lineList, c]);
    const {
      minIntervalMs: u,
      maxIntervalMs: p,
      chatterDisabled: h
    } = e.useMemo(() => {
      const e = ju[a.chatterFrequency];
      if (e) {
        return {
          minIntervalMs: e.min,
          maxIntervalMs: e.max,
          chatterDisabled: false
        };
      } else {
        return {
          minIntervalMs: 300000,
          maxIntervalMs: 1800000,
          chatterDisabled: true
        };
      }
    }, [a.chatterFrequency]);
    e.useEffect(() => {
      if (!a.enabled || !(c == null ? undefined : c.id)) {
        return;
      }
      let e = setTimeout(() => {
        m(() => import("./main-BO9xa-SQ.js").then(e => e.ck), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).catch(() => {});
        m(() => import("./ChatDetailScreen-qTVdjKXv.js"), __vite__mapDeps([13, 2, 0, 1, 3, 4, 5, 6, 7, 8, 9, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28])).catch(() => {});
      }, 1500);
      return () => clearTimeout(e);
    }, [a.enabled, c == null ? undefined : c.id]);
    e.useEffect(() => {
      var e;
      var t;
      if (!a.enabled || !(c == null ? undefined : c.id) || !(i == null ? undefined : i.id)) {
        return;
      }
      if (typeof window == "undefined" || !((t = (e = window.Capacitor) == null ? undefined : e.isNativePlatform) == null ? undefined : t.call(e))) {
        return;
      }
      let n = false;
      (async () => {
        try {
          const {
            loadAppReactionConfig: e,
            loadAllPools: t
          } = await m(async () => {
            const {
              loadAppReactionConfig: e,
              loadAllPools: t
            } = await import("./appReactionPool-2KCtJ4s3.js");
            return {
              loadAppReactionConfig: e,
              loadAllPools: t
            };
          }, __vite__mapDeps([12, 2, 6, 3, 4]));
          const {
            floatingPet: a
          } = await m(async () => {
            const {
              floatingPet: e
            } = await Promise.resolve().then(() => Iu);
            return {
              floatingPet: e
            };
          }, undefined);
          const [o, s] = await Promise.all([e(), t()]);
          if (n) {
            return;
          }
          r.current = !!o.appendChatEnabled;
          const l = await a.syncAppSenseConfig({
            config: {
              enabled: !!o.enabled,
              pollIntervalMs: o.pollIntervalMs || 60000,
              cooldownMs: o.cooldownMs || 1800000,
              longStayMs: o.longStayMs || 0
            },
            pools: s,
            charId: i.id
          });
          console.log("[PetAppSense] synced to native:", l);
        } catch (Hm) {
          console.warn("[PetAppSense] sync failed:", Hm == null ? undefined : Hm.message);
        }
      })();
      return () => {
        n = true;
      };
    }, [a.enabled, c == null ? undefined : c.id, i == null ? undefined : i.id]);
    e.useEffect(() => {
      if (!(i == null ? undefined : i.id)) {
        return;
      }
      const e = async () => {
        var e;
        var t;
        if (typeof window != "undefined" && ((t = (e = window.Capacitor) == null ? undefined : e.isNativePlatform) == null ? undefined : t.call(e))) {
          try {
            const {
              loadAppReactionConfig: e,
              loadAllPools: t
            } = await m(async () => {
              const {
                loadAppReactionConfig: e,
                loadAllPools: t
              } = await import("./appReactionPool-2KCtJ4s3.js");
              return {
                loadAppReactionConfig: e,
                loadAllPools: t
              };
            }, __vite__mapDeps([12, 2, 6, 3, 4]));
            const {
              floatingPet: n
            } = await m(async () => {
              const {
                floatingPet: e
              } = await Promise.resolve().then(() => Iu);
              return {
                floatingPet: e
              };
            }, undefined);
            const [a, o] = await Promise.all([e(), t()]);
            r.current = !!a.appendChatEnabled;
            await n.syncAppSenseConfig({
              config: {
                enabled: !!a.enabled,
                pollIntervalMs: a.pollIntervalMs || 60000,
                cooldownMs: a.cooldownMs || 1800000,
                longStayMs: a.longStayMs || 0
              },
              pools: o,
              charId: i.id
            });
            console.log("[PetAppSense] resynced on config change");
          } catch (n) {}
        }
      };
      window.addEventListener("nuojiji:app-sense-config-changed", e);
      return () => window.removeEventListener("nuojiji:app-sense-config-changed", e);
    }, [i == null ? undefined : i.id]);
    e.useEffect(() => {
      var e;
      var n;
      if (typeof window == "undefined" || !((n = (e = window.Capacitor) == null ? undefined : e.isNativePlatform) == null ? undefined : n.call(e))) {
        return;
      }
      let a = null;
      (async () => {
        try {
          const {
            floatingPet: e
          } = await m(async () => {
            const {
              floatingPet: e
            } = await Promise.resolve().then(() => Iu);
            return {
              floatingPet: e
            };
          }, undefined);
          a = e.on("appSenseReaction", async e => {
            try {
              if (!r.current) {
                return;
              }
              const n = e == null ? undefined : e.scene;
              const a = e == null ? undefined : e.app;
              if (!n || !a || !(i == null ? undefined : i.id)) {
                return;
              }
              const o = (t == null ? undefined : t.uid) || (t == null ? undefined : t.id);
              if (!o) {
                return;
              }
              const {
                appendAppSenseNarrationToChat: s
              } = await m(async () => {
                const {
                  appendAppSenseNarrationToChat: e
                } = await Promise.resolve().then(() => ru);
                return {
                  appendAppSenseNarrationToChat: e
                };
              }, undefined);
              await s({
                userId: o,
                charId: i.id,
                charName: i.name,
                app: a,
                scene: n,
                dwellMs: Number(e == null ? undefined : e.dwellMs) || 0
              });
            } catch (Hm) {
              console.warn("[PetAppSense] append narration failed:", Hm == null ? undefined : Hm.message);
            }
          });
        } catch (e) {}
      })();
      return () => {
        if (typeof a == "function") {
          a();
        }
      };
    }, [i == null ? undefined : i.id, i == null ? undefined : i.name, t == null ? undefined : t.uid, t == null ? undefined : t.id]);
    const g = async () => {
      var e;
      var n;
      if (!c) {
        return;
      }
      const o = c.id;
      const r = !!a.boundCharId || a.avatarMode === "locked" && !!a.lockedCharId;
      const i = (t == null ? undefined : t.uid) || (t == null ? undefined : t.id);
      const s = a.boundUserId || (r ? undefined : i);
      let l = !document.hidden;
      try {
        if (typeof window != "undefined" && ((n = (e = window.Capacitor) == null ? undefined : e.isNativePlatform) == null ? undefined : n.call(e))) {
          const {
            App: e
          } = await m(async () => {
            const {
              App: e
            } = await Promise.resolve().then(() => eu);
            return {
              App: e
            };
          }, undefined);
          const t = await e.getState();
          l = !!(t == null ? undefined : t.isActive);
        }
      } catch (d) {}
      if (l) {
        try {
          window.dispatchEvent(new CustomEvent("open-chat-request", {
            detail: {
              charId: o,
              userId: s
            }
          }));
        } catch (d) {}
      } else {
        try {
          const {
            floatingPet: e
          } = await m(async () => {
            const {
              floatingPet: e
            } = await Promise.resolve().then(() => Iu);
            return {
              floatingPet: e
            };
          }, undefined);
          e.bringToForeground(o, s).catch(() => {});
        } catch (d) {}
      }
    };
    const f = async e => {
      if (!a.ttsEnabled || !e) {
        return null;
      }
      if (!(i == null ? undefined : i.id)) {
        return null;
      }
      try {
        const a = (await lt.get("apiSettings")) || {};
        const o = (t == null ? undefined : t.uid) || (t == null ? undefined : t.id);
        const r = await vd(o, i.id);
        const {
          voiceProvider: s,
          voiceId: l,
          voiceLanguage: c,
          voiceSpeed: d,
          sovitsRefText: u
        } = r;
        if (!(s === "elevenlabs" ? a.elevenlabsApiKey : s === "gptsovits" ? a.sovitsServerUrl : a.minimaxApiKey) || !l) {
          return null;
        }
        let m = null;
        try {
          m = await $u(i.id, l, e);
        } catch (n) {}
        if (m) {
          return m;
        }
        const p = await fd(e, {
          ...r,
          apiSettings: a,
          voiceProvider: s,
          voiceId: l,
          sovitsRefText: u,
          language: c,
          speed: d
        });
        return (p == null ? undefined : p.audioBlob) || null;
      } catch (Hm) {
        console.warn("[DesktopFloatingPetMount] fetchTtsAudio 失败:", Hm);
        return null;
      }
    };
    const y = async e => {
      if (!e) {
        return;
      }
      const t = URL.createObjectURL(e);
      const n = new Audio(t);
      await new Promise(e => {
        let a = false;
        const o = () => {
          if (!a) {
            a = true;
            try {
              URL.revokeObjectURL(t);
            } catch (n) {}
            e();
          }
        };
        n.onended = o;
        n.onerror = o;
        setTimeout(o, 30000);
        Ol(n, {
          safetyTimeoutMs: 30000
        }).catch(o);
      });
    };
    const w = e.useCallback(async () => {
      var e;
      try {
        if (!(i == null ? undefined : i.id)) {
          return null;
        }
        const t = (e = a.carePools) == null ? undefined : e.hungry;
        if (!Array.isArray(t) || t.length === 0) {
          return null;
        }
        const {
          getCharState: n
        } = await m(async () => {
          const {
            getCharState: e
          } = await import("./petCare-3692o74Q.js");
          return {
            getCharState: e
          };
        }, __vite__mapDeps([11, 2, 6, 3, 4]));
        const o = await n(i.id);
        if (typeof (o == null ? undefined : o.hunger) == "number" && o.hunger < 30 && Math.random() < 0.45) {
          return t[Math.floor(Math.random() * t.length)] || null;
        }
      } catch (t) {}
      return null;
    }, [i == null ? undefined : i.id, a.carePools]);
    (function ({
      enabled: t,
      activeChar: n,
      size: a = 120,
      hideInApp: o = true,
      chatterDisabled: r = false,
      onChatRequest: i,
      onScreenshotRequest: s,
      onMenuRequest: l,
      onSpeak: c,
      generateLine: d,
      lineList: u,
      minIntervalMs: p = 300000,
      maxIntervalMs: h = 1800000
    }) {
      const g = e.useRef({});
      g.current = {
        onChatRequest: i,
        onScreenshotRequest: s,
        onMenuRequest: l,
        onSpeak: c,
        generateLine: d,
        lineList: u,
        activeChar: n
      };
      e.useEffect(() => {
        const e = Au.on("click", () => {
          const e = g.current.lineList;
          const t = g.current.generateLine;
          (async () => {
            let n = null;
            if (typeof t == "function") {
              try {
                n = await t();
              } catch (o) {}
            }
            if (!n && Array.isArray(e) && e.length > 0) {
              n = e[Math.floor(Math.random() * e.length)];
            }
            const a = n || "你好呀～";
            await Au.setMessage(a, n ? 4000 : 2500);
            if (typeof g.current.onSpeak == "function") {
              try {
                await g.current.onSpeak(a);
              } catch (o) {}
            }
          })();
        });
        const t = Au.on("doubleClick", () => {
          var e;
          var t;
          if ((t = (e = g.current).onScreenshotRequest) != null) {
            t.call(e);
          }
        });
        const n = Au.on("longPress", () => {
          var e;
          var t;
          if ((t = (e = g.current).onMenuRequest) != null) {
            t.call(e);
          }
        });
        return () => {
          e();
          t();
          n();
        };
      }, []);
      const [f, y] = e.useState(true);
      e.useEffect(() => {
        let e = null;
        (async () => {
          try {
            if (!(await Au.isAvailable())) {
              return;
            }
            const {
              App: n
            } = await m(async () => {
              const {
                App: e
              } = await Promise.resolve().then(() => eu);
              return {
                App: e
              };
            }, undefined);
            try {
              const e = await n.getState();
              y(!!(e == null ? undefined : e.isActive));
            } catch (t) {}
            const a = await n.addListener("appStateChange", e => {
              y(!!(e == null ? undefined : e.isActive));
            });
            e = () => {
              try {
                a.remove();
              } catch (t) {}
            };
          } catch (Hm) {
            console.warn("[useDesktopFloatingPet] appStateChange listener 初始化失败:", Hm);
          }
        })();
        return () => {
          if (e) {
            e();
          }
        };
      }, []);
      e.useEffect(() => {
        let e = false;
        let i = null;
        i = setTimeout(async () => {
          try {
            const r = await Au.isAvailable();
            if (e) {
              return;
            }
            if (!r) {
              return;
            }
            if (!t || !n) {
              xu();
              await Au.hide();
              return;
            }
            const s = await Au.ensurePermission();
            if (e) {
              return;
            }
            if (!s) {
              console.log("[useDesktopFloatingPet] 悬浮窗权限未授予,已跳转系统设置");
              try {
                window.dispatchEvent(new CustomEvent("nuojiji:floating-pet-permission-required"));
              } catch (i) {}
              return;
            }
            const l = !!n.isCustomImage;
            const c = await async function (e) {
              if (!e || typeof e != "string") {
                return null;
              }
              if (e.startsWith("data:image")) {
                return e;
              }
              if (Mu.has(e)) {
                return Mu.get(e);
              }
              try {
                const t = await Da(e);
                if (t) {
                  Mu.set(e, t);
                  return t;
                } else {
                  return null;
                }
              } catch (Hm) {
                console.warn("[useDesktopFloatingPet] normalizeAvatarToDataUrl failed:", Hm == null ? undefined : Hm.message);
                return null;
              }
            }(n.image || "");
            if (e) {
              return;
            }
            await Au.show({
              avatarUrl: c || n.image || "",
              name: n.name || "?",
              size: a,
              circleClip: !l,
              hideInApp: o
            });
          } catch (s) {
            console.error("[useDesktopFloatingPet] sync error:", s);
            return;
          }
          if (!e) {
            if (r) {
              xu();
            } else {
              Eu({
                minIntervalMs: p,
                maxIntervalMs: h,
                generateLine: async () => {
                  const e = g.current.lineList;
                  const t = g.current.generateLine;
                  if (typeof t == "function") {
                    try {
                      const e = await t();
                      if (e) {
                        return e;
                      }
                    } catch (i) {}
                  }
                  if (Array.isArray(e) && e.length > 0) {
                    return e[Math.floor(Math.random() * e.length)];
                  } else {
                    return null;
                  }
                },
                bubbleDurationMs: 5000,
                onSpeak: async e => {
                  if (typeof g.current.onSpeak == "function") {
                    try {
                      await g.current.onSpeak(e);
                    } catch (i) {}
                  }
                }
              });
            }
          }
        }, 600);
        return () => {
          e = true;
          if (i) {
            clearTimeout(i);
          }
        };
      }, [t, n == null ? undefined : n.id, n == null ? undefined : n.isCustomImage, ((n == null ? undefined : n.image) || "").length + "|" + ((n == null ? undefined : n.image) || "").slice(Math.floor(((n == null ? undefined : n.image) || "").length / 2), Math.floor(((n == null ? undefined : n.image) || "").length / 2) + 80) + "|" + ((n == null ? undefined : n.image) || "").slice(-32), a, o, r, p, h]);
      e.useEffect(() => () => {
        xu();
      }, []);
    })({
      enabled: a.enabled,
      activeChar: c,
      lineList: d,
      generateLine: w,
      size: a.size,
      hideInApp: a.hideInApp,
      chatterDisabled: h,
      onChatRequest: g,
      onScreenshotRequest: async () => {
        const {
          floatingPet: e
        } = await m(async () => {
          const {
            floatingPet: e
          } = await Promise.resolve().then(() => Iu);
          return {
            floatingPet: e
          };
        }, undefined);
        if (!a.screenshotEnabled) {
          await e.setMessage("双击看屏幕的功能在桌宠管家里打开吧~", 3500);
          return;
        }
        const n = Date.now();
        if (window.__lastScreenshotAt && n - window.__lastScreenshotAt < 8000) {
          await e.setMessage("刚看过了,等一下再让我看吧~", 3000);
          return;
        }
        const o = "nuojiji_pet_screenshot_confirmed";
        let r = false;
        try {
          r = localStorage.getItem(o) === "1";
        } catch (s) {}
        if (!r) {
          if (n - (window.__screenshotArmedAt || 0) > 30000) {
            window.__screenshotArmedAt = n;
            await e.setMessage("想让我看看屏幕? 再双击一次确认哦 (确认后以后都不再问你)", 5500);
            return;
          }
          window.__screenshotArmedAt = 0;
          try {
            localStorage.setItem(o, "1");
          } catch (s) {}
        }
        window.__lastScreenshotAt = n;
        if (i) {
          try {
            console.log("[ScreenshotFlow] step 1: captureScreen begin");
            const {
              captureScreen: n
            } = await m(async () => {
              const {
                captureScreen: e
              } = await import("./screenCapture-BVm9IDym.js");
              return {
                captureScreen: e
              };
            }, __vite__mapDeps([29, 2, 6, 3, 4]));
            let o = false;
            try {
              const {
                App: e
              } = await m(async () => {
                const {
                  App: e
                } = await Promise.resolve().then(() => eu);
                return {
                  App: e
                };
              }, undefined);
              const t = await e.getState();
              o = !!(t == null ? undefined : t.isActive);
            } catch (s) {}
            console.log("[ScreenshotFlow] nuojiji in foreground:", o);
            const r = await n({
              quality: 65,
              moveAppToBack: !o
            });
            console.log("[ScreenshotFlow] step 2: captureScreen result", {
              success: r.success,
              cancelled: r.cancelled,
              hasDataUrl: !!r.dataUrl,
              width: r.width,
              height: r.height,
              error: r.error
            });
            if (r.cancelled) {
              await e.setMessage("哼,不让我看就算了", 3000);
              return;
            }
            if (!r.success) {
              console.warn("[DesktopFloatingPetMount] captureScreen failed:", r.error);
              await e.setMessage("屏幕看不清呢...", 3000);
              return;
            }
            await e.setMessage("让我看看...", 30000);
            console.log("[ScreenshotFlow] step 3: calling AI Vision");
            const {
              generateScreenComment: l
            } = await m(async () => {
              const {
                generateScreenComment: e
              } = await import("./desktopPetVisionComment-BUhdhZ8n.js");
              return {
                generateScreenComment: e
              };
            }, __vite__mapDeps([30, 2, 6, 3, 4]));
            const c = (t == null ? undefined : t.uid) || (t == null ? undefined : t.id);
            let d = "";
            try {
              const {
                ChatSettingsService: e
              } = await m(async () => {
                const {
                  ChatSettingsService: e
                } = await Promise.resolve().then(() => En);
                return {
                  ChatSettingsService: e
                };
              }, undefined);
              const {
                buildRelationshipText: t
              } = await m(async () => {
                const {
                  buildRelationshipText: e
                } = await Promise.resolve().then(() => ru);
                return {
                  buildRelationshipText: e
                };
              }, undefined);
              if (c && i.id) {
                d = t(await e.get(c, i.id));
              }
            } catch (s) {}
            const {
              buildUserPersonaText: u
            } = await m(async () => {
              const {
                buildUserPersonaText: e
              } = await Promise.resolve().then(() => ru);
              return {
                buildUserPersonaText: e
              };
            }, undefined);
            const p = await l({
              imageDataUrl: r.dataUrl,
              charName: i.name,
              charPersona: i.intro || i.persona || "",
              userName: (t == null ? undefined : t.name) || "你",
              userPersona: u(t),
              relationship: d
            });
            if (a.speakAsChar && Array.isArray(p) && p.length > 0) {
              (async () => {
                try {
                  const {
                    appendCharVoiceToChatHistory: e
                  } = await m(async () => {
                    const {
                      appendCharVoiceToChatHistory: e
                    } = await Promise.resolve().then(() => ru);
                    return {
                      appendCharVoiceToChatHistory: e
                    };
                  }, undefined);
                  await e({
                    userId: c,
                    charId: i.id,
                    lines: p
                  });
                } catch (s) {}
              })();
            }
            console.log("[ScreenshotFlow] step 4: AI returned", (p == null ? undefined : p.length) || 0, "lines:", p);
            if (!Array.isArray(p) || p.length === 0) {
              await e.setMessage("我没什么想说的...", 3000);
              return;
            }
            const h = !!a.ttsEnabled;
            const g = h ? p.map(e => f(e)) : [];
            for (let t = 0; t < p.length; t++) {
              const n = p[t];
              const a = t === p.length - 1;
              const o = Math.max(2500, Math.min(8000, n.length * 200));
              const r = h ? 20000 : o + 500;
              e.setMessage(n, r);
              if (h) {
                let e = null;
                const r = Date.now();
                try {
                  e = await g[t];
                } catch (s) {}
                const i = Date.now() - r;
                if (i > 100) {
                  console.log(`[ScreenshotFlow] sentence ${t + 1}/${p.length} TTS fetch took ${i}ms (line=${n.length}字)`);
                }
                if (e) {
                  if (a) {
                    y(e).catch(() => {});
                  } else {
                    await y(e);
                  }
                } else if (!a) {
                  await new Promise(e => setTimeout(e, o));
                }
              } else if (!a) {
                await new Promise(e => setTimeout(e, o));
              }
            }
            console.log("[ScreenshotFlow] step 5: done");
          } catch (Hm) {
            console.error("[DesktopFloatingPetMount] screenshot flow failed:", Hm);
            const n = String((Hm == null ? undefined : Hm.message) || Hm || "未知错误").slice(0, 50);
            try {
              await e.setMessage(`视线模糊了... (${n})`, 5000);
            } catch (s) {}
          }
        } else {
          await e.setMessage("我还不知道你是谁呢...", 3000);
        }
      },
      onMenuRequest: async () => {
        if (i == null ? undefined : i.id) {
          try {
            const {
              floatingPet: e
            } = await m(async () => {
              const {
                floatingPet: e
              } = await Promise.resolve().then(() => Iu);
              return {
                floatingPet: e
              };
            }, undefined);
            const {
              getCharState: t,
              formatStateForDisplay: n
            } = await m(async () => {
              const {
                getCharState: e,
                formatStateForDisplay: t
              } = await import("./petCare-3692o74Q.js");
              return {
                getCharState: e,
                formatStateForDisplay: t
              };
            }, __vite__mapDeps([11, 2, 6, 3, 4]));
            const a = n(await t(i.id));
            await e.showMenu({
              hunger: a.hunger,
              mood: a.mood,
              intimacy: a.intimacy
            });
          } catch (Hm) {
            console.warn("[DesktopFloatingPetMount] showMenu failed:", Hm);
          }
        }
      },
      onSpeak: async e => {
        const t = await f(e);
        if (t) {
          await y(t);
        }
      },
      minIntervalMs: u,
      maxIntervalMs: p
    });
    const S = e.useRef(null);
    const v = e.useRef(null);
    const b = e.useCallback(async () => {
      var e;
      var t;
      try {
        if (typeof window == "undefined" || !((t = (e = window.Capacitor) == null ? undefined : e.isNativePlatform) == null ? undefined : t.call(e))) {
          return;
        }
        if (!(i == null ? undefined : i.id)) {
          return;
        }
        const n = a.stateImages;
        if (!n || typeof n != "object") {
          return;
        }
        const {
          getCharState: o
        } = await m(async () => {
          const {
            getCharState: e
          } = await import("./petCare-3692o74Q.js");
          return {
            getCharState: e
          };
        }, __vite__mapDeps([11, 2, 6, 3, 4]));
        const {
          resolvePetVisualState: r
        } = await m(async () => {
          const {
            resolvePetVisualState: e
          } = await import("./petVisualState-cUP7m92Z.js");
          return {
            resolvePetVisualState: e
          };
        }, __vite__mapDeps([31, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
        const s = await o(i.id);
        const l = r({
          charId: i.id,
          careState: s,
          hasState: e => !!n[e]
        });
        if (S.current === l) {
          return;
        }
        const {
          floatingPet: d
        } = await m(async () => {
          const {
            floatingPet: e
          } = await Promise.resolve().then(() => Iu);
          return {
            floatingPet: e
          };
        }, undefined);
        if (l === "normal") {
          const e = n.normal || (c == null ? undefined : c.image);
          if (e) {
            await d.setImage(e, {
              circleClip: !n.normal && !(c == null ? undefined : c.isCustomImage),
              holdMs: 0
            });
          }
        } else {
          const e = n[l];
          if (e) {
            await d.setImage(e, {
              circleClip: false,
              holdMs: 0
            });
          }
        }
        S.current = l;
      } catch (Hm) {
        console.warn("[DesktopFloatingPetMount] refreshStateImage failed:", Hm);
      }
    }, [i == null ? undefined : i.id, a.stateImages, c == null ? undefined : c.image, c == null ? undefined : c.isCustomImage]);
    e.useEffect(() => {
      v.current = b;
    }, [b]);
    e.useEffect(() => {
      var e;
      var t;
      if (!a.enabled || !(i == null ? undefined : i.id)) {
        return;
      }
      if (typeof window == "undefined" || !((t = (e = window.Capacitor) == null ? undefined : e.isNativePlatform) == null ? undefined : t.call(e))) {
        return;
      }
      if (!a.stateImages) {
        return;
      }
      S.current = null;
      const n = setTimeout(() => {
        var e;
        if ((e = v.current) != null) {
          e.call(v);
        }
      }, 3000);
      const o = setInterval(() => {
        var e;
        if ((e = v.current) != null) {
          e.call(v);
        }
      }, 120000);
      return () => {
        clearTimeout(n);
        clearInterval(o);
      };
    }, [a.enabled, i == null ? undefined : i.id, a.stateImages]);
    e.useEffect(() => {
      let e = null;
      (async () => {
        try {
          const {
            floatingPet: n
          } = await m(async () => {
            const {
              floatingPet: e
            } = await Promise.resolve().then(() => Iu);
            return {
              floatingPet: e
            };
          }, undefined);
          e = n.on("menuAction", async e => {
            var o;
            var r;
            var s;
            var l;
            const c = e == null ? undefined : e.action;
            if (c && (i == null ? undefined : i.id)) {
              if (c !== "chat") {
                try {
                  const {
                    applyInteraction: e,
                    formatStateForDisplay: u,
                    generatePromptContext: p
                  } = await m(async () => {
                    const {
                      applyInteraction: e,
                      formatStateForDisplay: t,
                      generatePromptContext: n
                    } = await import("./petCare-3692o74Q.js");
                    return {
                      applyInteraction: e,
                      formatStateForDisplay: t,
                      generatePromptContext: n
                    };
                  }, __vite__mapDeps([11, 2, 6, 3, 4]));
                  const h = await e(i.id, c);
                  if (!h) {
                    return;
                  }
                  const g = (o = a.stateImages) == null ? undefined : o[c];
                  if (g) {
                    n.setImage(g, {
                      circleClip: false,
                      holdMs: 15000
                    }).catch(() => {});
                  }
                  const w = u(h);
                  await n.updateMenuState({
                    hunger: w.hunger,
                    mood: w.mood,
                    intimacy: w.intimacy
                  });
                  const S = {
                    feed: "用户给你递了点心,你吃下去",
                    bath: "用户帮你洗澡",
                    hug: "用户突然抱住你"
                  }[c] || "";
                  if (!S) {
                    return;
                  }
                  const b = p(h);
                  const A = (t == null ? undefined : t.uid) || (t == null ? undefined : t.id);
                  const I = (r = a.carePools) == null ? undefined : r[c];
                  if (Array.isArray(I) && I.length > 0) {
                    const e = I[Math.floor(Math.random() * I.length)];
                    if (e) {
                      const t = !!a.ttsEnabled;
                      const o = Math.max(2500, Math.min(7000, e.length * 200));
                      n.setMessage(e, t ? 20000 : o + 500);
                      if (t) {
                        try {
                          const t = await f(e);
                          if (t) {
                            await y(t);
                          }
                        } catch (d) {}
                      }
                      try {
                        await ((s = v.current) == null ? undefined : s.call(v));
                      } catch (d) {}
                      return;
                    }
                  }
                  let T;
                  if (a.speakAsChar) {
                    const {
                      generateCharVoiceLines: e,
                      buildUserPersonaText: n
                    } = await m(async () => {
                      const {
                        generateCharVoiceLines: e,
                        buildUserPersonaText: t
                      } = await Promise.resolve().then(() => ru);
                      return {
                        generateCharVoiceLines: e,
                        buildUserPersonaText: t
                      };
                    }, undefined);
                    T = await e({
                      char: i,
                      userId: A,
                      userName: (t == null ? undefined : t.name) || "你",
                      userPersona: n(t),
                      scene: S,
                      extraInstruction: b
                    });
                  } else {
                    const {
                      generateCareReaction: e
                    } = await m(async () => {
                      const {
                        generateCareReaction: e
                      } = await import("./desktopPetCareReact-B04aDkvT.js");
                      return {
                        generateCareReaction: e
                      };
                    }, __vite__mapDeps([32, 2, 6, 3, 4]));
                    const {
                      buildUserPersonaText: n
                    } = await m(async () => {
                      const {
                        buildUserPersonaText: e
                      } = await Promise.resolve().then(() => ru);
                      return {
                        buildUserPersonaText: e
                      };
                    }, undefined);
                    T = await e({
                      charName: i.name,
                      charPersona: i.intro || i.persona || "",
                      actionLabel: S,
                      stateContext: b,
                      userName: (t == null ? undefined : t.name) || "你",
                      userPersona: n(t)
                    });
                  }
                  if (Array.isArray(T) && T.length > 0) {
                    const e = !!a.ttsEnabled;
                    const t = e ? T.map(e => f(e)) : [];
                    for (let a = 0; a < T.length; a++) {
                      const o = T[a];
                      const r = a === T.length - 1;
                      const i = Math.max(2500, Math.min(7000, o.length * 200));
                      n.setMessage(o, e ? 20000 : i + 500);
                      if (e) {
                        let e = null;
                        try {
                          e = await t[a];
                        } catch (d) {}
                        if (e) {
                          if (r) {
                            y(e).catch(() => {});
                          } else {
                            await y(e);
                          }
                        } else if (!r) {
                          await new Promise(e => setTimeout(e, i));
                        }
                      } else if (!r) {
                        await new Promise(e => setTimeout(e, i));
                      }
                    }
                  }
                  try {
                    await ((l = v.current) == null ? undefined : l.call(v));
                  } catch (d) {}
                } catch (Hm) {
                  console.warn("[DesktopFloatingPetMount] menuAction handler failed:", Hm);
                }
              } else {
                g();
              }
            }
          });
        } catch (n) {}
      })();
      return () => {
        if (typeof e == "function") {
          e();
        }
      };
    }, [i == null ? undefined : i.id, i == null ? undefined : i.name, a.ttsEnabled, a.stateImages, a.carePools, a.speakAsChar, t == null ? undefined : t.name]);
    return null;
  }
}, Symbol.toStringTag, {
  value: "Module"
}));
const Hu = "appsense_pool.json";
const Gu = "iosAppSenseConfig";
const Wu = {
  enabled: false,
  appendChatEnabled: true,
  notifyEnabled: true,
  cooldownMs: 1800000,
  minDwellMs: 45000,
  openCooldownMs: 300000,
  apps: {}
};
async function Vu() {
  try {
    const e = await lt.get(Gu);
    if (e && typeof e == "object") {
      return {
        ...Wu,
        ...e,
        apps: e.apps || {}
      };
    } else {
      return {
        ...Wu
      };
    }
  } catch (e) {
    return {
      ...Wu
    };
  }
}
async function zu(e) {
  try {
    const t = {
      ...(await Vu()),
      ...e
    };
    await lt.set(Gu, t);
    return t;
  } catch (Hm) {
    console.warn("[iosAppSense] save config failed:", Hm == null ? undefined : Hm.message);
    return null;
  }
}
async function Yu({
  config: e,
  linesByApp: t,
  charName: n
}) {
  if (B()) {
    try {
      const a = {};
      const o = (e == null ? undefined : e.apps) || {};
      for (const [e, n] of Object.entries(o)) {
        if (!(n == null ? undefined : n.enabled)) {
          continue;
        }
        const o = (t == null ? undefined : t[e]) || {};
        a[e] = {
          enabled: true,
          emoji: n.emoji || "",
          open: Array.isArray(o.open) ? o.open : [],
          close: Array.isArray(o.close) ? o.close : [],
          duration: Array.isArray(o.duration) ? o.duration : []
        };
      }
      const r = {
        enabled: !!(e == null ? undefined : e.enabled),
        cooldownMs: (e == null ? undefined : e.cooldownMs) || Wu.cooldownMs,
        notifyEnabled: !!(e == null ? undefined : e.notifyEnabled),
        minDwellMs: Number.isFinite(e == null ? undefined : e.minDwellMs) ? e.minDwellMs : Wu.minDwellMs,
        openCooldownMs: Number.isFinite(e == null ? undefined : e.openCooldownMs) ? e.openCooldownMs : Wu.openCooldownMs,
        charName: n || "",
        apps: a
      };
      const {
        getLiveActivityPluginSync: i
      } = await m(async () => {
        const {
          getLiveActivityPluginSync: e
        } = await import("./iosLiveActivity-Boe9JJRO.js");
        return {
          getLiveActivityPluginSync: e
        };
      }, __vite__mapDeps([33, 2, 6, 3, 4]));
      const s = i();
      if (!s) {
        return;
      }
      await s.writeAppGroupFile({
        name: Hu,
        content: JSON.stringify(r)
      });
    } catch (Hm) {
      console.warn("[iosAppSense] syncPool failed:", Hm == null ? undefined : Hm.message);
    }
  }
}
async function Ku(e) {
  if (B() && e) {
    try {
      const t = await Da(e);
      if (!t) {
        return;
      }
      const {
        getLiveActivityPluginSync: n
      } = await m(async () => {
        const {
          getLiveActivityPluginSync: e
        } = await import("./iosLiveActivity-Boe9JJRO.js");
        return {
          getLiveActivityPluginSync: e
        };
      }, __vite__mapDeps([33, 2, 6, 3, 4]));
      const a = n();
      if (!a) {
        return;
      }
      await a.writeAppGroupImage({
        name: "pet_live_avatar.png",
        base64: t
      });
    } catch (Hm) {
      console.warn("[iosAppSense] syncAvatar failed:", Hm == null ? undefined : Hm.message);
    }
  }
}
const qu = [{
  name: "抖音",
  emoji: "🎵"
}, {
  name: "小红书",
  emoji: "📕"
}, {
  name: "微信",
  emoji: "💬"
}, {
  name: "QQ",
  emoji: "🐧"
}, {
  name: "B站",
  emoji: "📺"
}, {
  name: "微博",
  emoji: "📰"
}, {
  name: "淘宝",
  emoji: "🛒"
}, {
  name: "王者荣耀",
  emoji: "⚔️"
}, {
  name: "原神",
  emoji: "⚔️"
}, {
  name: "Instagram",
  emoji: "📸"
}, {
  name: "TikTok",
  emoji: "🎵"
}, {
  name: "X",
  emoji: "🐦"
}, {
  name: "YouTube",
  emoji: "▶️"
}, {
  name: "Discord",
  emoji: "💜"
}];
const Ju = Object.freeze(Object.defineProperty({
  __proto__: null,
  IOS_APPSENSE_POOL_FILE: Hu,
  IOS_PRESET_APPS: qu,
  loadIosAppSenseConfig: Vu,
  saveIosAppSenseConfig: zu,
  syncIosAppSensePoolToAppGroup: Yu,
  syncIosPetAvatarToAppGroup: Ku
}, Symbol.toStringTag, {
  value: "Module"
}));
function Qu({
  text: e,
  resolve: t,
  reject: n
}) {
  if (!e) {
    n(new Error("AI 没有返回任何内容 (空响应)"));
    return;
  }
  const a = e.split(/\r?\n|\\n|\s*\|\s*/).map(e => e.replace(/^\s*[-*•·]+\s*/, "")).map(e => e.replace(/^\s*\d+[.、)）:]\s*/, "")).map(e => e.replace(/^\s*["'「『]+|["'」』]+\s*$/g, "")).map(e => e.trim()).filter(e => e.length > 0 && e.length <= 80);
  if (a.length === 0) {
    const t = e.slice(0, 300);
    n(new Error(`AI 返回的内容解析不出台词\n原文 ${e.length} 字符\nAI 实际说: ${t}...`));
  } else {
    t(a.slice(0, 20));
  }
}
function Xu({
  boundChar: n,
  currentProfileUser: a,
  Section: o,
  Row: r,
  Toggle: i,
  Hint: s
}) {
  const [l, c] = e.useState(null);
  const [d, u] = e.useState(false);
  const [p, h] = e.useState("");
  const [g, f] = e.useState(null);
  const [y, w] = e.useState(null);
  const [S, v] = e.useState("open");
  const [b, A] = e.useState([]);
  const [I, T] = e.useState("");
  const [C, P] = e.useState(false);
  const [k, E] = e.useState(() => {
    try {
      return localStorage.getItem("iosNotifHideContent") === "1";
    } catch (e) {
      return false;
    }
  });
  const [x, M] = e.useState(false);
  const [N, R] = e.useState(false);
  const [D, $] = e.useState([]);
  const _ = e.useCallback(async () => {
    try {
      c(await Vu());
    } catch (e) {}
    try {
      const {
        GlobalSettingsService: e
      } = await m(async () => {
        const {
          GlobalSettingsService: e
        } = await Promise.resolve().then(() => kn);
        return {
          GlobalSettingsService: e
        };
      }, undefined);
      const t = await e.get("desktopPetConfig");
      P(!!(t == null ? undefined : t.iosIdleNotifyEnabled));
      $(Array.isArray(t == null ? undefined : t.liveFrames) ? t.liveFrames : []);
    } catch (e) {}
    try {
      const {
        isPetLiveActivityRunning: e
      } = await m(async () => {
        const {
          isPetLiveActivityRunning: e
        } = await import("./iosLiveActivity-Boe9JJRO.js");
        return {
          isPetLiveActivityRunning: e
        };
      }, __vite__mapDeps([33, 2, 6, 3, 4]));
      M(await e());
    } catch (e) {}
  }, []);
  e.useEffect(() => {
    _();
  }, [_]);
  const O = async e => {
    const t = await zu(e);
    if (t) {
      c(t);
      await L(t);
    }
  };
  const L = e.useCallback(async e => {
    var t;
    try {
      const a = {};
      if ((n == null ? undefined : n.id) && (e == null ? undefined : e.apps)) {
        for (const o of Object.keys(e.apps)) {
          if (!((t = e.apps[o]) == null ? undefined : t.enabled)) {
            continue;
          }
          const r = await em(n.id, o, "open");
          const i = await em(n.id, o, "close");
          const s = await em(n.id, o, "duration");
          a[o] = {
            open: r,
            close: i,
            duration: s
          };
        }
      }
      await Yu({
        config: e,
        linesByApp: a,
        charName: (n == null ? undefined : n.name) || ""
      });
      if (n == null ? undefined : n.image) {
        await Ku(n.image);
      }
    } catch (Hm) {
      console.warn("[IosAppSense] resyncPool failed:", Hm == null ? undefined : Hm.message);
    }
  }, [n == null ? undefined : n.id, n == null ? undefined : n.name]);
  const j = async (e, t) => {
    var n;
    var a;
    const o = {
      ...((l == null ? undefined : l.apps) || {})
    };
    if ((n = o[e]) == null ? undefined : n.enabled) {
      o[e] = {
        ...o[e],
        enabled: false
      };
    } else {
      o[e] = {
        enabled: true,
        emoji: t || ((a = o[e]) == null ? undefined : a.emoji) || ""
      };
    }
    await O({
      apps: o
    });
  };
  const B = async (e, t) => {
    if (!n) {
      return;
    }
    const a = t.map(e => String(e).trim()).filter(Boolean);
    await tm(n.id, e, S, a);
    A(a);
    await L(l);
  };
  if (!l) {
    return null;
  }
  const U = l.apps || {};
  const F = Object.entries(U).filter(([e, t]) => t == null ? undefined : t.enabled);
  const H = qu.filter(e => !U[e.name]);
  return t.jsxs(t.Fragment, {
    children: [t.jsxs(o, {
      title: "灵动岛动画帧 (iOS)",
      children: [t.jsx(s, {
        children: "💡 召唤桌宠上灵动岛的开关在上方「主召唤器」。这里只配动画帧图。"
      }), t.jsx(r, {
        label: `动画帧图(${D.length} 张)`,
        children: t.jsxs("label", {
          className: "fe-cmd-btn",
          style: {
            fontSize: 12,
            padding: "6px 10px",
            cursor: "pointer"
          },
          children: ["上传多帧", t.jsx("input", {
            type: "file",
            accept: "image/*",
            multiple: true,
            onChange: async e => {
              const t = Array.from(e.target.files || []);
              if (t.length !== 0) {
                try {
                  const {
                    compressImageForStorage: e
                  } = await m(async () => {
                    const {
                      compressImageForStorage: e
                    } = await import("./imageCompressor-FPWVE1FW.js");
                    return {
                      compressImageForStorage: e
                    };
                  }, []);
                  const a = [];
                  for (const i of t) {
                    const t = await new Promise(e => {
                      const t = new FileReader();
                      t.onload = () => e(t.result);
                      t.onerror = () => e(null);
                      t.readAsDataURL(i);
                    });
                    if (!t) {
                      continue;
                    }
                    let o = t;
                    try {
                      o = await e(t, {
                        maxDim: 256
                      });
                    } catch (n) {}
                    a.push(o);
                  }
                  if (a.length === 0) {
                    return;
                  }
                  const {
                    GlobalSettingsService: o
                  } = await m(async () => {
                    const {
                      GlobalSettingsService: e
                    } = await Promise.resolve().then(() => kn);
                    return {
                      GlobalSettingsService: e
                    };
                  }, undefined);
                  const r = (await o.get("desktopPetConfig")) || {};
                  await o.set("desktopPetConfig", {
                    ...r,
                    liveFrames: a
                  });
                  $(a);
                  if (x) {
                    const {
                      setPetLiveFrames: e,
                      playPetLiveFrames: t
                    } = await m(async () => {
                      const {
                        setPetLiveFrames: e,
                        playPetLiveFrames: t
                      } = await import("./iosLiveActivity-Boe9JJRO.js");
                      return {
                        setPetLiveFrames: e,
                        playPetLiveFrames: t
                      };
                    }, __vite__mapDeps([33, 2, 6, 3, 4]));
                    await e(a);
                    if (a.length > 1) {
                      await t(4);
                    }
                  }
                } catch (a) {
                  console.warn("[IosLiveActivity] frames upload failed:", a == null ? undefined : a.message);
                } finally {
                  e.target.value = "";
                }
              }
            },
            style: {
              display: "none"
            }
          })]
        })
      }), D.length > 0 && t.jsxs("div", {
        style: {
          display: "flex",
          gap: 6,
          padding: "0 16px 8px",
          flexWrap: "wrap",
          alignItems: "center"
        },
        children: [D.slice(0, 8).map((e, n) => t.jsx("img", {
          src: e,
          alt: `帧${n}`,
          style: {
            width: 32,
            height: 32,
            borderRadius: 6,
            objectFit: "cover",
            border: "1px solid rgba(184,150,104,0.3)"
          }
        }, n)), t.jsx("button", {
          onClick: async () => {
            try {
              const {
                GlobalSettingsService: e
              } = await m(async () => {
                const {
                  GlobalSettingsService: e
                } = await Promise.resolve().then(() => kn);
                return {
                  GlobalSettingsService: e
                };
              }, undefined);
              const t = (await e.get("desktopPetConfig")) || {};
              await e.set("desktopPetConfig", {
                ...t,
                liveFrames: []
              });
              $([]);
              if (x) {
                const {
                  stopPetLiveFrames: e
                } = await m(async () => {
                  const {
                    stopPetLiveFrames: e
                  } = await import("./iosLiveActivity-Boe9JJRO.js");
                  return {
                    stopPetLiveFrames: e
                  };
                }, __vite__mapDeps([33, 2, 6, 3, 4]));
                await e();
              }
            } catch (e) {}
          },
          style: {
            background: "none",
            border: "none",
            color: "#f87171",
            fontSize: 12,
            cursor: "pointer"
          },
          children: "清空"
        })]
      }), t.jsx(s, {
        children: "上传 2 张以上图(如桌宠张嘴/闭嘴、左脚/右脚),灵动岛会逐帧轮播让桌宠「动」起来。 ⚠️ iOS 限制:只在你打开糯嘰機(或刚切出来那几秒)才动,切走久了系统会冻结 app → 桌宠定格,回到 app 又动。 这是无服务器方案的天花板,不是 bug。"
      })]
    }), t.jsxs(o, {
      title: "截图窥屏 (iOS)",
      children: [t.jsxs(s, {
        children: ["Android 是双击桌宠 AI 看屏吐槽;iOS 无悬浮窗,改用", t.jsx("b", {
          children: "截图分享"
        }), ": 你截一张图 → 分享给糯嘰機 → 点「🔍 让桌宠看看这张图」→ ", (n == null ? undefined : n.name) || "角色", " 用自己的口吻吐槽 + 写进聊天。"]
      }), t.jsxs("div", {
        style: {
          margin: "4px 16px 12px",
          padding: "12px",
          background: "rgba(6,9,19,0.5)",
          borderRadius: 10,
          border: "1px solid rgba(184,150,104,0.25)"
        },
        children: [t.jsx("div", {
          style: {
            fontSize: 12,
            color: "#f3d29a",
            marginBottom: 8
          },
          children: "⚡ 想更快?用自动化「截屏时自动分享」(一次性设置):"
        }), t.jsxs("ol", {
          style: {
            margin: 0,
            paddingLeft: 18,
            fontSize: 12.5,
            lineHeight: 1.7,
            color: "#c8d0da"
          },
          children: [t.jsx("li", {
            children: "「快捷指令」App → 自动化 → + → 触发器选「拍摄截屏时」"
          }), t.jsx("li", {
            children: "添加操作「共享」(Share)→ 把「截屏」作为输入"
          }), t.jsx("li", {
            children: "下一步 → 关「运行前询问」→ 完成"
          }), t.jsx("li", {
            children: "以后你一截屏,系统自动弹分享面板,选糯嘰機 → 让桌宠吐槽"
          })]
        }), t.jsx("div", {
          style: {
            fontSize: 11,
            color: "#8e9aa8",
            marginTop: 8
          },
          children: "注:iOS 不允许「截屏后无弹窗直达 app」,分享面板那一下系统强制要你确认(隐私保护)。这已是最快路径。"
        })]
      })]
    }), t.jsxs(o, {
      title: "待机闲聊通知 (iOS)",
      children: [t.jsx(r, {
        label: "开启待机通知",
        children: t.jsx(i, {
          checked: C,
          onChange: async e => {
            P(e);
            try {
              const {
                GlobalSettingsService: o
              } = await m(async () => {
                const {
                  GlobalSettingsService: e
                } = await Promise.resolve().then(() => kn);
                return {
                  GlobalSettingsService: e
                };
              }, undefined);
              const r = (await o.get("desktopPetConfig")) || {};
              await o.set("desktopPetConfig", {
                ...r,
                iosIdleNotifyEnabled: e
              });
              if (e) {
                const e = Array.isArray(r.lineList) ? r.lineList : [];
                if (e.length && r.boundCharId && n) {
                  const i = r.boundUserId || (a == null ? undefined : a.uid) || (a == null ? undefined : a.id);
                  let s = null;
                  if (r.ttsEnabled) {
                    try {
                      const e = (await o.get("apiSettings")) || {};
                      const {
                        resolveCharVoiceConfig: t
                      } = await m(async () => {
                        const {
                          resolveCharVoiceConfig: e
                        } = await Promise.resolve().then(() => bd);
                        return {
                          resolveCharVoiceConfig: e
                        };
                      }, undefined);
                      const a = await t(i, n.id);
                      const {
                        voiceProvider: r,
                        voiceId: l,
                        voiceLanguage: c,
                        voiceSpeed: d,
                        sovitsRefText: u
                      } = a;
                      if ((r === "elevenlabs" ? e.elevenlabsApiKey : r === "gptsovits" ? e.sovitsServerUrl : e.minimaxApiKey) && l) {
                        s = {
                          ...a,
                          apiSettings: e,
                          voiceProvider: r,
                          voiceId: l,
                          sovitsRefText: u,
                          language: c,
                          speed: d
                        };
                      }
                    } catch (t) {}
                  }
                  const {
                    rescheduleIosIdleNotifications: l
                  } = await m(async () => {
                    const {
                      rescheduleIosIdleNotifications: e
                    } = await import("./iosIdleNotifier-DMjafVJq.js");
                    return {
                      rescheduleIosIdleNotifications: e
                    };
                  }, __vite__mapDeps([34, 2, 6, 3, 4]));
                  await l({
                    lines: e,
                    charName: n.name,
                    charId: n.id,
                    userId: i,
                    chatterFrequency: r.chatterFrequency || "normal",
                    avatarBase64: n.image || "",
                    ttsVoice: s
                  });
                }
              } else {
                const {
                  clearIosIdleNotifications: e
                } = await m(async () => {
                  const {
                    clearIosIdleNotifications: e
                  } = await import("./iosIdleNotifier-DMjafVJq.js");
                  return {
                    clearIosIdleNotifications: e
                  };
                }, __vite__mapDeps([34, 2, 6, 3, 4]));
                await e();
              }
            } catch (Hm) {
              console.warn("[IosAppSense] toggleIdleNotify failed:", Hm == null ? undefined : Hm.message);
            }
          }
        })
      }), t.jsxs(s, {
        children: ["iOS 没有桌面悬浮桌宠(系统限制),改用通知:", (n == null ? undefined : n.name) || "角色", "会在随机时段 发条待机闲聊通知(从待机台词池抽,不写聊天记录)。点通知跳进聊天。 密度跟随上方「主动发言频率」(频繁/适中/稀少),全天不分时段。 需先在桌宠设置里生成「待机台词」。"]
      })]
    }), t.jsxs(o, {
      title: "通知隐私 (iOS)",
      children: [t.jsx(r, {
        label: "隐藏通知内容",
        children: t.jsx(i, {
          checked: k,
          onChange: async e => {
            E(e);
            try {
              localStorage.setItem("iosNotifHideContent", e ? "1" : "0");
            } catch (t) {}
            try {
              const {
                setNotifHideContent: t
              } = await m(async () => {
                const {
                  setNotifHideContent: e
                } = await import("./iosLiveActivity-Boe9JJRO.js");
                return {
                  setNotifHideContent: e
                };
              }, __vite__mapDeps([33, 2, 6, 3, 4]));
              await t(e);
            } catch (t) {}
          }
        })
      }), t.jsx(s, {
        children: "像微信「通知不显示详情」:开启后,锁屏/横幅通知只显示「你有一条新消息」, 不露角色名和具体台词,防别人瞄到。影响 App 感知 + 待机闲聊通知。 点开通知进 App 仍可看完整内容。"
      })]
    }), t.jsxs(o, {
      title: "App 感知 (iOS · 快捷指令)",
      children: [t.jsx(r, {
        label: "开启 App 感知",
        children: t.jsx(i, {
          checked: !!l.enabled,
          onChange: e => O({
            enabled: e
          })
        })
      }), t.jsx(s, {
        children: "iOS 无法直接读取你在用哪个 App(系统隐私限制)。改用「快捷指令自动化」: 你设「打开抖音时 → 运行糯嘰機动作」,角色就能感知到。下方有图文教程。"
      }), l.enabled && t.jsxs(t.Fragment, {
        children: [t.jsx(r, {
          label: "写进聊天记忆",
          children: t.jsx(i, {
            checked: l.appendChatEnabled !== false,
            onChange: e => O({
              appendChatEnabled: e
            })
          })
        }), t.jsxs(s, {
          children: ["感知到打开/关闭某 App 时,往角色聊天写一条系统旁白(如「", (n == null ? undefined : n.name) || "角色", "注意到你打开了抖音」「…用了抖音 23 分钟」)。"]
        }), t.jsx(r, {
          label: "后台弹通知反应",
          children: t.jsx(i, {
            checked: l.notifyEnabled !== false,
            onChange: e => O({
              notifyEnabled: e
            })
          })
        }), t.jsx(s, {
          children: "一打开那个 App,角色立刻发条本地通知反应(从下方生成的台词里抽一句)。需允许通知权限。"
        }), t.jsx(r, {
          label: "停留多久才算真的用过",
          children: t.jsxs("select", {
            value: Number.isFinite(l.minDwellMs) ? l.minDwellMs : 45000,
            onChange: e => O({
              minDwellMs: Number(e.target.value)
            }),
            className: "fe-input",
            style: {
              fontSize: 12.5,
              padding: "5px 8px"
            },
            children: [t.jsx("option", {
              value: 0,
              children: "不过滤(只要切走就算关闭)"
            }), t.jsx("option", {
              value: 15000,
              children: "15 秒"
            }), t.jsx("option", {
              value: 45000,
              children: "45 秒(推荐)"
            }), t.jsx("option", {
              value: 120000,
              children: "2 分钟"
            }), t.jsx("option", {
              value: 300000,
              children: "5 分钟"
            })]
          })
        }), t.jsx(s, {
          children: "⚠️ iOS 分不清「切歌/临时切走」和「真退出」。停留低于此时长的「关闭」当临时切走,不提醒。 调高 = 切歌不打扰但短暂真用也不报;调低 = 灵敏但易误报。"
        }), t.jsx(r, {
          label: "多久内重复打开不再提醒",
          children: t.jsxs("select", {
            value: Number.isFinite(l.openCooldownMs) ? l.openCooldownMs : 300000,
            onChange: e => O({
              openCooldownMs: Number(e.target.value)
            }),
            className: "fe-input",
            style: {
              fontSize: 12.5,
              padding: "5px 8px"
            },
            children: [t.jsx("option", {
              value: 0,
              children: "不过滤(每次切回都提醒)"
            }), t.jsx("option", {
              value: 60000,
              children: "1 分钟"
            }), t.jsx("option", {
              value: 300000,
              children: "5 分钟(推荐)"
            }), t.jsx("option", {
              value: 900000,
              children: "15 分钟"
            }), t.jsx("option", {
              value: 1800000,
              children: "30 分钟"
            })]
          })
        }), t.jsx(s, {
          children: "从别的 App 切回同一个 App,iOS 会再触发一次「打开」。此时长内的重复打开不再提醒,避免来回切刷屏。"
        }), t.jsx("div", {
          style: {
            padding: "8px 16px"
          },
          children: t.jsxs("button", {
            onClick: () => u(e => !e),
            className: "fe-cmd-btn",
            style: {
              fontSize: 12,
              padding: "6px 10px"
            },
            children: ["📖 ", d ? "收起" : "怎么设置快捷指令自动化?"]
          })
        }), d && t.jsx(Zu, {
          boundCharName: n == null ? undefined : n.name
        }), t.jsx("div", {
          style: {
            padding: "8px 16px",
            fontSize: 12,
            color: "#8e9aa8"
          },
          children: "已感知的 App:"
        }), F.length === 0 && t.jsx("div", {
          style: {
            padding: "0 16px 8px",
            fontSize: 12,
            color: "#6b7280"
          },
          children: "还没勾选任何 App,从下面预设里选,或自定义添加。"
        }), F.map(([e, o]) => t.jsxs("div", {
          children: [t.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px"
            },
            children: [t.jsx("span", {
              style: {
                fontSize: 16
              },
              children: o.emoji || "📱"
            }), t.jsx("span", {
              style: {
                flex: 1,
                fontSize: 14
              },
              children: e
            }), t.jsx("button", {
              onClick: () => (async e => {
                if (y === e) {
                  w(null);
                  return;
                }
                if (!n) {
                  return;
                }
                const t = await em(n.id, e, "open");
                v("open");
                A(Array.isArray(t) ? t : []);
                w(e);
              })(e),
              className: "fe-cmd-btn",
              style: {
                fontSize: 11,
                padding: "3px 8px"
              },
              children: y === e ? "收起" : "台词"
            }), t.jsx("button", {
              onClick: () => (async e => {
                if (n) {
                  T("");
                  f(e);
                  try {
                    const {
                      generateAppReactionPool: t
                    } = await m(async () => {
                      const {
                        generateAppReactionPool: e
                      } = await import("./appReactionGenerator-dTJW9WSt.js");
                      return {
                        generateAppReactionPool: e
                      };
                    }, __vite__mapDeps([35, 12, 2, 6, 3, 4]));
                    const o = (a == null ? undefined : a.uid) || (a == null ? undefined : a.id);
                    const r = await t({
                      char: n,
                      userId: o,
                      currentProfileUser: a,
                      appLabel: e,
                      pkg: e
                    });
                    await tm(n.id, e, "open", (r == null ? undefined : r.open) || []);
                    await tm(n.id, e, "close", (r == null ? undefined : r.close) || (r == null ? undefined : r.leave) || []);
                    await tm(n.id, e, "duration", (r == null ? undefined : r.duration) || (r == null ? undefined : r.longUse) || []);
                    await L(l);
                    w(e);
                    v("open");
                    A((r == null ? undefined : r.open) || []);
                  } catch (Hm) {
                    T(`${e} 生成失败: ${(Hm == null ? undefined : Hm.message) || Hm}`);
                  } finally {
                    f(null);
                  }
                } else {
                  T("没有绑定角色,无法生成");
                }
              })(e),
              disabled: g === e || !n,
              className: "fe-cmd-btn",
              style: {
                fontSize: 11,
                padding: "3px 8px"
              },
              children: g === e ? "生成中…" : "AI生成"
            }), t.jsx("button", {
              onClick: () => j(e),
              style: {
                background: "none",
                border: "none",
                color: "#f87171",
                fontSize: 16,
                cursor: "pointer"
              },
              children: "✕"
            })]
          }), y === e && t.jsxs("div", {
            style: {
              padding: "4px 16px 10px",
              background: "rgba(6,9,19,0.4)"
            },
            children: [t.jsx("div", {
              style: {
                display: "flex",
                gap: 6,
                marginBottom: 8
              },
              children: [{
                k: "open",
                label: "🔓 打开"
              }, {
                k: "close",
                label: "🔒 关闭"
              }, {
                k: "duration",
                label: "⏱ 用了一阵"
              }].map(a => t.jsx("button", {
                onClick: () => (async (e, t) => {
                  if (!n) {
                    return;
                  }
                  const a = await em(n.id, e, t);
                  v(t);
                  A(Array.isArray(a) ? a : []);
                })(e, a.k),
                className: "fe-cmd-btn",
                style: {
                  fontSize: 11,
                  padding: "3px 8px",
                  opacity: S === a.k ? 1 : 0.5,
                  fontWeight: S === a.k ? "bold" : "normal"
                },
                children: a.label
              }, a.k))
            }), b.length === 0 && t.jsx("div", {
              style: {
                fontSize: 12,
                color: "#8e9aa8",
                padding: "6px 0"
              },
              children: "还没有台词,点「AI生成」或在下方手动加。"
            }), b.map((n, a) => t.jsxs("div", {
              style: {
                display: "flex",
                gap: 6,
                marginBottom: 6,
                alignItems: "center"
              },
              children: [t.jsx("input", {
                value: n,
                onChange: e => {
                  const t = [...b];
                  t[a] = e.target.value;
                  A(t);
                },
                onBlur: () => B(e, b),
                className: "fe-input",
                style: {
                  flex: 1,
                  fontSize: 12.5,
                  padding: "5px 8px"
                }
              }), t.jsx("button", {
                onClick: () => {
                  const t = b.filter((e, t) => t !== a);
                  A(t);
                  B(e, t);
                },
                style: {
                  background: "none",
                  border: "none",
                  color: "#f87171",
                  fontSize: 14,
                  cursor: "pointer"
                },
                children: "✕"
              })]
            }, a)), t.jsx("button", {
              onClick: () => A([...b, ""]),
              className: "fe-cmd-btn",
              style: {
                fontSize: 11,
                padding: "4px 10px",
                marginTop: 2
              },
              children: "+ 加一句"
            })]
          })]
        }, e)), I && t.jsx("div", {
          style: {
            padding: "4px 16px",
            fontSize: 12,
            color: "#f87171"
          },
          children: I
        }), H.length > 0 && t.jsxs("div", {
          style: {
            padding: "8px 16px"
          },
          children: [t.jsx("div", {
            style: {
              fontSize: 12,
              color: "#8e9aa8",
              marginBottom: 6
            },
            children: "快速添加:"
          }), t.jsx("div", {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: 6
            },
            children: H.map(e => t.jsxs("button", {
              onClick: () => j(e.name, e.emoji),
              className: "fe-cmd-btn",
              style: {
                fontSize: 12,
                padding: "4px 8px"
              },
              children: [e.emoji, " ", e.name]
            }, e.name))
          })]
        }), t.jsxs("div", {
          style: {
            display: "flex",
            gap: 6,
            padding: "8px 16px"
          },
          children: [t.jsx("input", {
            value: p,
            onChange: e => h(e.target.value),
            placeholder: "自定义 App 名(和自动化里填的一致)",
            className: "fe-input",
            style: {
              flex: 1,
              fontSize: 13,
              padding: "6px 8px"
            }
          }), t.jsx("button", {
            onClick: async () => {
              const e = p.trim();
              if (!e) {
                return;
              }
              const t = {
                ...((l == null ? undefined : l.apps) || {})
              };
              t[e] = {
                enabled: true,
                emoji: ""
              };
              h("");
              await O({
                apps: t
              });
            },
            className: "fe-cmd-btn",
            style: {
              fontSize: 12,
              padding: "6px 10px"
            },
            children: "添加"
          })]
        }), t.jsx(s, {
          children: "⚠️ 这里填的 App 名,必须和你在「快捷指令」自动化里传给糯嘰機的名字**完全一致**(如都写「抖音」),否则对不上。"
        })]
      })]
    })]
  });
}
function Zu({
  boundCharName: e
}) {
  return t.jsxs("div", {
    style: {
      margin: "4px 16px 12px",
      padding: "12px",
      background: "rgba(6,9,19,0.5)",
      borderRadius: 10,
      border: "1px solid rgba(184,150,104,0.25)"
    },
    children: [t.jsx("div", {
      style: {
        fontSize: 12,
        color: "#f3d29a",
        marginBottom: 10,
        lineHeight: 1.6,
        background: "rgba(243,210,154,0.08)",
        padding: "8px 10px",
        borderRadius: 6
      },
      children: "💡 加动作时,要选有「App 名称」可填框的「记录我打开了 App」(在 Nuojiji 动作里), 别选只有眼睛图标那个无参数的。填好 App 名,以后就不问了。"
    }), t.jsx("div", {
      style: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#dfc299",
        marginBottom: 6
      },
      children: "A. 打开 App 时感知(必做)"
    }), t.jsx("ol", {
      style: {
        margin: "0 0 12px",
        paddingLeft: 18,
        fontSize: 12.5,
        lineHeight: 1.7,
        color: "#c8d0da"
      },
      children: ["打开「快捷指令」App → 底部「自动化」→ 右上角 +", "选触发器「App」→ 勾「已打开」→ 选要感知的 App(如小红书)→ 下一步", "点「添加操作」→ 搜「糯嘰機」或「Nuojiji」或「记录我打开了」→ 在糯嘰機的 App 卡片里选「记录我打开了 App」(⚠️ 选有「App 名称」可填框的那个,不是只有眼睛图标的预制项)", "⭐ 关键:点动作里蓝色的「App 名称」,直接输入「小红书」(和上面选的 App 同名)", "下一步 → 关掉「运行前询问」(让它立即运行)→ 完成"].map((e, n) => t.jsx("li", {
        children: e
      }, n))
    }), t.jsx("div", {
      style: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#dfc299",
        marginBottom: 6
      },
      children: "B. 关闭 App 时(可选)"
    }), t.jsx("ol", {
      style: {
        margin: "0 0 12px",
        paddingLeft: 18,
        fontSize: 12.5,
        lineHeight: 1.7,
        color: "#c8d0da"
      },
      children: ["同样「自动化」→ + → 触发器「App」→ 这次勾「已关闭」→ 选同一个 App(小红书)→ 下一步", "添加操作「记录我打开了 App」→ 「App 名称」填「小红书」", "⭐ 这次把「场景」改成 close(打开那条留 open)", "关掉「运行前询问」→ 完成"].map((e, n) => t.jsx("li", {
        children: e
      }, n))
    }), t.jsx("div", {
      style: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#dfc299",
        marginBottom: 6
      },
      children: "C. 用了一段时间(可选,独立于关闭)"
    }), t.jsx("ol", {
      style: {
        margin: "0 0 8px",
        paddingLeft: 18,
        fontSize: 12.5,
        lineHeight: 1.7,
        color: "#c8d0da"
      },
      children: ["「自动化」→ + → 触发器选「App 限额」或「屏幕使用时间」类(iOS 在「自动化」里有「当 App 使用达到 X 分钟」)→ 选小红书 + 设时长(如 60 分钟)", "添加操作「记录我打开了 App」→ 「App 名称」填「小红书」", "⭐ 把「场景」改成 duration", "关掉「运行前询问」→ 完成"].map((e, n) => t.jsx("li", {
        children: e
      }, n))
    }), t.jsxs("div", {
      style: {
        fontSize: 11.5,
        color: "#8e9aa8",
        marginTop: 4,
        lineHeight: 1.6
      },
      children: ["三条各自独立:打开弹「注意到你打开了小红书」、关闭弹「离开啦」、用满 1 小时弹「待了好久了呢」。", t.jsx("br", {}), "✅ 这些通知由 iOS 在后台直接发,", t.jsx("b", {
        children: "糯嘰機不用在前台"
      }), " —— 你在小红书里也能立刻收到。", t.jsx("br", {}), "⚠️ 每个 App 都要各建;iOS 不允许 App 自动建自动化,必须你手动设。「用了一段时间」依赖 iOS「屏幕使用时间/App 限额」类触发器,机型/系统版本可能命名略不同。"]
    })]
  });
}
async function em(e, t, n = "open") {
  var a;
  var o;
  try {
    const {
      GlobalSettingsService: r
    } = await m(async () => {
      const {
        GlobalSettingsService: e
      } = await Promise.resolve().then(() => kn);
      return {
        GlobalSettingsService: e
      };
    }, undefined);
    const i = await r.get("iosAppSenseLines");
    return ((o = (a = i == null ? undefined : i[String(e)]) == null ? undefined : a[t]) == null ? undefined : o[n]) || [];
  } catch (r) {
    return [];
  }
}
async function tm(e, t, n, a) {
  try {
    const {
      GlobalSettingsService: o
    } = await m(async () => {
      const {
        GlobalSettingsService: e
      } = await Promise.resolve().then(() => kn);
      return {
        GlobalSettingsService: e
      };
    }, undefined);
    const r = (await o.get("iosAppSenseLines")) || {};
    const i = String(e);
    r[i] ||= {};
    r[i][t] ||= {};
    r[i][t][n] = Array.isArray(a) ? a : [];
    await o.set("iosAppSenseLines", r);
  } catch (Hm) {
    console.warn("[IosAppSense] writeLines failed:", Hm == null ? undefined : Hm.message);
  }
}
const nm = {
  enabled: false,
  boundCharId: null,
  boundUserId: null,
  avatarMode: "follow-bound",
  customAvatar: null,
  size: 120,
  chatterFrequency: "normal",
  hideInApp: true,
  ttsEnabled: false,
  screenshotEnabled: false,
  stateImages: null,
  carePools: null,
  lockedCharId: null
};
const am = [{
  key: "feed",
  emoji: "🍰",
  label: "喂食"
}, {
  key: "bath",
  emoji: "🛁",
  label: "洗澡"
}, {
  key: "hug",
  emoji: "🤗",
  label: "抱抱"
}, {
  key: "hungry",
  emoji: "🍙",
  label: "饿了主动说"
}];
const om = [{
  key: "normal",
  emoji: "🙂",
  label: "默认",
  hint: "平时的样子(不配则用形象头像)"
}, {
  key: "sleep",
  emoji: "😴",
  label: "睡觉",
  hint: "角色行程在睡眠/深夜时"
}, {
  key: "work",
  emoji: "💼",
  label: "工作",
  hint: "角色行程在会议/上班/上课时"
}, {
  key: "hungry",
  emoji: "🍙",
  label: "饿了",
  hint: "饱食低于 30 时"
}, {
  key: "happy",
  emoji: "😆",
  label: "开心",
  hint: "心情高于 80 时"
}, {
  key: "feed",
  emoji: "🍰",
  label: "喂食",
  hint: "点「喂食」时短暂切换"
}, {
  key: "bath",
  emoji: "🛁",
  label: "洗澡",
  hint: "点「洗澡」时短暂切换"
}, {
  key: "hug",
  emoji: "🤗",
  label: "抱抱",
  hint: "点「抱抱」时短暂切换"
}];
function rm({
  title: e,
  icon: n,
  children: a
}) {
  return t.jsxs("div", {
    className: "fe-panel-card",
    children: [t.jsxs("div", {
      style: {
        fontSize: 12,
        color: "#dfc299",
        textTransform: "uppercase",
        letterSpacing: 1.5,
        padding: "10px 16px",
        background: "linear-gradient(90deg, #121e36 0%, rgba(13,20,35,0) 100%)",
        borderBottom: "1px solid rgba(184, 150, 104, 0.35)",
        fontWeight: "bold",
        fontFamily: "monospace",
        display: "flex",
        alignItems: "center",
        gap: 8
      },
      children: [n, " [ ", e, " ]"]
    }), t.jsx("div", {
      style: {
        padding: "8px 0"
      },
      children: a
    })]
  });
}
function im({
  label: e,
  children: n
}) {
  return t.jsxs("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 16px",
      borderBottom: "1px dashed rgba(184, 150, 104, 0.25)"
    },
    children: [t.jsx("div", {
      style: {
        fontSize: 14,
        color: "#eae3d2",
        fontFamily: "monospace",
        fontWeight: "bold"
      },
      children: e
    }), t.jsx("div", {
      children: n
    })]
  });
}
function sm({
  children: e
}) {
  return t.jsxs("div", {
    style: {
      padding: "6px 16px 10px",
      fontSize: 11,
      color: "#8e9aa8",
      lineHeight: 1.5,
      fontFamily: "monospace"
    },
    children: ["* ", e]
  });
}
function lm({
  value: n,
  onCommit: a,
  onDelete: o
}) {
  const [r, i] = e.useState(n);
  e.useEffect(() => {
    i(n);
  }, [n]);
  return t.jsxs("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    },
    children: [t.jsx("span", {
      className: "fe-highlight-gold",
      style: {
        fontWeight: "bold",
        flexShrink: 0
      },
      children: "☞"
    }), t.jsx("input", {
      type: "text",
      value: r,
      onChange: e => i(e.target.value),
      onBlur: () => {
        if (r !== n) {
          a(r);
        }
      },
      onKeyDown: e => {
        if (e.key === "Enter") {
          e.preventDefault();
          e.currentTarget.blur();
        }
      },
      placeholder: "输入台词...",
      style: {
        flex: 1,
        minWidth: 0,
        background: "rgba(6,9,19,0.85)",
        border: "1px solid rgba(184,150,104,0.3)",
        borderRadius: 4,
        color: "#eae3d2",
        fontSize: 12,
        padding: "7px 10px",
        outline: "none"
      }
    }), t.jsx("button", {
      type: "button",
      onClick: o,
      title: "删除",
      style: {
        flexShrink: 0,
        width: 26,
        height: 26,
        borderRadius: 4,
        border: "1px solid rgba(224,138,138,0.4)",
        background: "rgba(40,12,12,0.4)",
        color: "#e08a8a",
        cursor: "pointer",
        fontSize: 14,
        lineHeight: 1,
        padding: 0
      },
      children: "✕"
    })]
  });
}
function cm({
  onClick: e,
  label: n = "+ 添加台词"
}) {
  return t.jsx("button", {
    type: "button",
    onClick: e,
    style: {
      width: "100%",
      padding: "7px",
      marginTop: 2,
      background: "transparent",
      border: "1px dashed rgba(184,150,104,0.4)",
      borderRadius: 4,
      color: "#9aa8bd",
      cursor: "pointer",
      fontSize: 12
    },
    children: n
  });
}
function dm({
  checked: e,
  onChange: n
}) {
  return t.jsxs("div", {
    onClick: () => n(!e),
    style: {
      width: 56,
      height: 24,
      border: "1px solid #b89668",
      background: e ? "linear-gradient(180deg, #162a4d 0%, #0d1a30 100%)" : "#060913",
      position: "relative",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: e ? "flex-start" : "flex-end",
      padding: "0 3px",
      borderRadius: 2,
      userSelect: "none",
      transition: "all 0.2s ease",
      boxShadow: "inset 0 1px 4px rgba(0,0,0,0.5)"
    },
    children: [e ? t.jsx("span", {
      style: {
        fontSize: 9,
        color: "#4ade80",
        fontWeight: "bold",
        fontFamily: "monospace",
        position: "absolute",
        right: 8
      },
      children: "ON"
    }) : t.jsx("span", {
      style: {
        fontSize: 9,
        color: "#8e9aa8",
        fontWeight: "bold",
        fontFamily: "monospace",
        position: "absolute",
        left: 8
      },
      children: "OFF"
    }), t.jsx("div", {
      style: {
        width: 16,
        height: 16,
        background: e ? "#dfc299" : "#8e9aa8",
        border: "1px solid #ffffff",
        borderRadius: 1,
        boxShadow: "0 1.5px 3px rgba(0,0,0,0.5)",
        transition: "transform 0.2s"
      }
    })]
  });
}
function um({
  name: e,
  value: n,
  current: a,
  onChange: o,
  label: r,
  hint: i
}) {
  const s = a === n;
  return t.jsxs("div", {
    onClick: () => o(n),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 16px",
      cursor: "pointer",
      borderBottom: "1px dashed rgba(184, 150, 104, 0.25)",
      background: s ? "rgba(184, 150, 104, 0.08)" : "transparent",
      transition: "all 0.15s ease"
    },
    children: [t.jsx("div", {
      style: {
        width: 20,
        height: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontFamily: "monospace",
        fontWeight: "bold",
        fontSize: 16
      },
      children: s ? t.jsx(Sm, {}) : t.jsx("div", {
        style: {
          width: 12,
          height: 12,
          border: "1px solid rgba(184,150,104,0.4)",
          borderRadius: 1
        }
      })
    }), t.jsxs("div", {
      style: {
        flex: 1
      },
      children: [t.jsx("div", {
        style: {
          fontSize: 14,
          color: s ? "#f3d29a" : "#eae3d2",
          fontFamily: "monospace",
          fontWeight: "bold"
        },
        children: r
      }), i && t.jsx("div", {
        style: {
          fontSize: 11,
          color: "#8e9aa8",
          marginTop: 2,
          fontFamily: "monospace"
        },
        children: i
      })]
    })]
  });
}
function mm({
  romName: e,
  label: n,
  activeRom: a,
  setActiveRom: o,
  children: r
}) {
  const i = a === e;
  return t.jsxs("div", {
    style: {
      border: "1px solid rgba(184, 150, 104, 0.35)",
      borderRadius: 2,
      background: "rgba(6, 9, 19, 0.75)",
      overflow: "hidden",
      marginBottom: 6
    },
    children: [t.jsxs("div", {
      onClick: () => o(i ? null : e),
      style: {
        padding: "10px 14px",
        fontSize: 12,
        fontWeight: "bold",
        color: i ? "#f3d29a" : "#eae3d2",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: i ? "rgba(184, 150, 104, 0.15)" : "transparent",
        userSelect: "none",
        borderBottom: i ? "1px dashed rgba(184,150,104,0.2)" : "none"
      },
      children: [t.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 6
        },
        children: [t.jsx("span", {
          style: {
            fontSize: 10,
            color: "#dfc299",
            transform: i ? "rotate(90deg)" : "none",
            transition: "transform 0.2s"
          },
          children: "▶"
        }), n]
      }), i && t.jsx("span", {
        style: {
          fontSize: 10,
          color: "#4ade80"
        },
        children: "[ 进行中 ]"
      })]
    }), i && t.jsx("div", {
      style: {
        padding: "14px",
        background: "rgba(9, 14, 23, 0.9)"
      },
      children: r
    })]
  });
}
const pm = () => t.jsxs("svg", {
  viewBox: "0 0 24 24",
  width: "16",
  height: "16",
  fill: "none",
  stroke: "#dfc299",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    verticalAlign: "middle"
  },
  children: [t.jsx("polyline", {
    points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5"
  }), t.jsx("line", {
    x1: "13",
    y1: "19",
    x2: "19",
    y2: "13"
  }), t.jsx("line", {
    x1: "16",
    y1: "16",
    x2: "20",
    y2: "20"
  }), t.jsx("line", {
    x1: "19",
    y1: "21",
    x2: "21",
    y2: "19"
  })]
});
const hm = () => t.jsx("svg", {
  viewBox: "0 0 24 24",
  width: "16",
  height: "16",
  fill: "none",
  stroke: "#dfc299",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    verticalAlign: "middle"
  },
  children: t.jsx("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  })
});
const gm = () => t.jsxs("svg", {
  viewBox: "0 0 24 24",
  width: "16",
  height: "16",
  fill: "none",
  stroke: "#dfc299",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    verticalAlign: "middle"
  },
  children: [t.jsx("path", {
    d: "M12 2a10 10 0 0 0-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
  }), t.jsx("path", {
    d: "M9 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm6 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM7 14s2 3 5 3 5-3 5-3H7z"
  })]
});
const fm = () => t.jsxs("svg", {
  viewBox: "0 0 24 24",
  width: "16",
  height: "16",
  fill: "none",
  stroke: "#dfc299",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    verticalAlign: "middle"
  },
  children: [t.jsx("circle", {
    cx: "12",
    cy: "14",
    r: "6"
  }), t.jsx("path", {
    d: "M12 2v6"
  }), t.jsx("path", {
    d: "M12 2l-3 3h6z"
  })]
});
const ym = () => t.jsxs("svg", {
  viewBox: "0 0 24 24",
  width: "16",
  height: "16",
  fill: "none",
  stroke: "#dfc299",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    verticalAlign: "middle"
  },
  children: [t.jsx("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), t.jsx("circle", {
    cx: "12",
    cy: "12",
    r: "6"
  }), t.jsx("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22"
  }), t.jsx("line", {
    x1: "2",
    y1: "12",
    x2: "22",
    y2: "12"
  })]
});
const wm = () => t.jsxs("svg", {
  viewBox: "0 0 24 24",
  width: "16",
  height: "16",
  fill: "none",
  stroke: "#dfc299",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    verticalAlign: "middle"
  },
  children: [t.jsx("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), t.jsx("polyline", {
    points: "14 2 14 8 20 8"
  }), t.jsx("line", {
    x1: "16",
    y1: "13",
    x2: "8",
    y2: "13"
  }), t.jsx("line", {
    x1: "16",
    y1: "17",
    x2: "8",
    y2: "17"
  })]
});
const Sm = () => t.jsx("span", {
  className: "fe-hand-blink",
  style: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle"
  },
  children: t.jsx("svg", {
    viewBox: "0 0 24 24",
    width: "15",
    height: "15",
    fill: "none",
    stroke: "#dfc299",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: t.jsx("polygon", {
      points: "6 2 18 12 6 22 10 12 6 2",
      fill: "#dfc299"
    })
  })
});
function vm({
  boundChar: n,
  currentProfileUser: a
}) {
  var o;
  var r;
  const [i, s] = e.useState(null);
  const [l, c] = e.useState({});
  const [d, u] = e.useState(false);
  const [p, h] = e.useState(false);
  const [g, f] = e.useState(false);
  const [y, w] = e.useState(null);
  const [S, v] = e.useState(null);
  const [b, A] = e.useState("");
  const I = e.useCallback(async () => {
    var e;
    var t;
    try {
      const {
        loadAppReactionConfig: e,
        loadAllPools: t
      } = await m(async () => {
        const {
          loadAppReactionConfig: e,
          loadAllPools: t
        } = await import("./appReactionPool-2KCtJ4s3.js");
        return {
          loadAppReactionConfig: e,
          loadAllPools: t
        };
      }, __vite__mapDeps([12, 2, 6, 3, 4]));
      const [n, a] = await Promise.all([e(), t()]);
      s(n);
      c(a);
    } catch (Hm) {
      console.warn("[AppSensePanel] load failed:", Hm == null ? undefined : Hm.message);
    }
    try {
      if (typeof window != "undefined" && ((t = (e = window.Capacitor) == null ? undefined : e.isNativePlatform) == null ? undefined : t.call(e))) {
        const {
          registerPlugin: e
        } = await m(async () => {
          const {
            registerPlugin: e
          } = await Promise.resolve().then(() => Xs);
          return {
            registerPlugin: e
          };
        }, undefined);
        const t = e("AppUsage");
        const {
          granted: n
        } = await t.checkPermission();
        u(!!n);
      }
    } catch (n) {}
  }, []);
  e.useEffect(() => {
    I();
  }, [I]);
  const T = async e => {
    try {
      const {
        saveAppReactionConfig: t
      } = await m(async () => {
        const {
          saveAppReactionConfig: e
        } = await import("./appReactionPool-2KCtJ4s3.js");
        return {
          saveAppReactionConfig: e
        };
      }, __vite__mapDeps([12, 2, 6, 3, 4]));
      const n = await t(e);
      if (n) {
        s(n);
      }
    } catch (t) {}
  };
  const C = async (e, t) => {
    if (!n) {
      A("没有绑定角色,无法生成");
      return false;
    }
    A("");
    w(e);
    try {
      const {
        generateAppReactionPool: o
      } = await m(async () => {
        const {
          generateAppReactionPool: e
        } = await import("./appReactionGenerator-dTJW9WSt.js");
        return {
          generateAppReactionPool: e
        };
      }, __vite__mapDeps([35, 12, 2, 6, 3, 4]));
      const {
        writeAppPool: r
      } = await m(async () => {
        const {
          writeAppPool: e
        } = await import("./appReactionPool-2KCtJ4s3.js");
        return {
          writeAppPool: e
        };
      }, __vite__mapDeps([12, 2, 6, 3, 4]));
      const i = (a == null ? undefined : a.uid) || (a == null ? undefined : a.id);
      const s = await o({
        char: n,
        userId: i,
        currentProfileUser: a,
        appLabel: t,
        pkg: e
      });
      await r(n.id, e, s);
      const {
        loadAllPools: l
      } = await m(async () => {
        const {
          loadAllPools: e
        } = await import("./appReactionPool-2KCtJ4s3.js");
        return {
          loadAllPools: e
        };
      }, __vite__mapDeps([12, 2, 6, 3, 4]));
      c(await l());
      return true;
    } catch (Hm) {
      console.warn("[AppSensePanel] generate failed:", Hm);
      A(`${t} 生成失败: ${(Hm == null ? undefined : Hm.message) || Hm}`);
      return false;
    } finally {
      w(null);
    }
  };
  if (!i) {
    return null;
  }
  if (B()) {
    return t.jsx(Xu, {
      boundChar: n,
      currentProfileUser: a,
      Section: rm,
      Row: im,
      Toggle: dm,
      Hint: sm
    });
  }
  const P = typeof window != "undefined" && ((r = (o = window.Capacitor) == null ? undefined : o.isNativePlatform) == null ? undefined : r.call(o));
  const k = P && !d && i.enabled;
  return t.jsxs(rm, {
    title: "感知纹章 (Sigil)",
    icon: t.jsx(ym, {}),
    children: [t.jsx(im, {
      label: "开启前台雷达探针",
      children: t.jsx(dm, {
        checked: !!i.enabled,
        onChange: async e => {
          var t;
          var n;
          await T({
            enabled: e
          });
          if (e) {
            if (typeof window != "undefined" && ((n = (t = window.Capacitor) == null ? undefined : t.isNativePlatform) == null ? undefined : n.call(t))) {
              try {
                const {
                  registerPlugin: e
                } = await m(async () => {
                  const {
                    registerPlugin: e
                  } = await Promise.resolve().then(() => Xs);
                  return {
                    registerPlugin: e
                  };
                }, undefined);
                const t = e("AppUsage");
                const {
                  granted: n
                } = await t.checkPermission();
                u(!!n);
                if (!n) {
                  await Rn("「桌宠感知」需要「使用情况访问」权限才能知道你打开了什么 app。\n\n点确定将跳到系统设置,在列表里找到糯叽机并打开开关。");
                  try {
                    await t.openSettings();
                    setTimeout(I, 1500);
                  } catch (a) {}
                }
              } catch (Hm) {
                console.warn("[AppSensePanel] toggleEnabled check failed:", Hm == null ? undefined : Hm.message);
              }
            } else {
              await Rn("「桌宠感知」需要 Android APK 才能工作。\n浏览器/PWA 拿不到前台 app 信息。");
            }
          }
        }
      })
    }), !P && t.jsx(sm, {
      children: "进程探针需 Android 魔法环境，当前 Web 结界内仅作演练配置。"
    }), k && t.jsxs("div", {
      className: "fe-dialog-box",
      style: {
        margin: "10px 16px",
        border: "1px solid #f87171",
        background: "#090e17"
      },
      children: [t.jsxs("div", {
        style: {
          fontSize: 13,
          color: "#f87171",
          marginBottom: 8,
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          gap: 6
        },
        children: [t.jsx(wm, {}), " ⚠️ [ 探测封印：未解封「使用情况访问」]"]
      }), t.jsxs("button", {
        onClick: async () => {
          try {
            const {
              registerPlugin: e
            } = await m(async () => {
              const {
                registerPlugin: e
              } = await Promise.resolve().then(() => Xs);
              return {
                registerPlugin: e
              };
            }, undefined);
            const t = e("AppUsage");
            await t.openSettings();
            setTimeout(I, 1500);
          } catch (e) {}
        },
        className: "fe-cmd-btn",
        style: {
          borderColor: "#f87171",
          color: "#f87171",
          fontSize: 12,
          padding: "4px 8px"
        },
        children: [t.jsx(Sm, {}), " 前往系统设置解封"]
      })]
    }), i.enabled && t.jsxs(t.Fragment, {
      children: [t.jsxs("div", {
        style: {
          padding: "10px 16px",
          background: "rgba(6, 9, 19, 0.4)",
          borderBottom: "1px dashed rgba(184, 150, 104, 0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        },
        children: [t.jsxs("button", {
          onClick: async () => {
            var e;
            var t;
            if (typeof window != "undefined" && ((t = (e = window.Capacitor) == null ? undefined : e.isNativePlatform) == null ? undefined : t.call(e))) {
              try {
                const {
                  registerPlugin: e
                } = await m(async () => {
                  const {
                    registerPlugin: e
                  } = await Promise.resolve().then(() => Xs);
                  return {
                    registerPlugin: e
                  };
                }, undefined);
                const t = e("FloatingPet");
                const n = await t.getAppSenseDebugInfo();
                const a = (n == null ? undefined : n.syncedAt) ? Math.round((Date.now() - n.syncedAt) / 1000) + "s 前" : "从未";
                const o = ["── 同步状态 ──", `synced: ${n == null ? undefined : n.synced}`, `syncedAt: ${a}`, `configLen: ${n == null ? undefined : n.configJsonLen}`, `poolsLen: ${n == null ? undefined : n.poolsJsonLen}`, "", "── config 解析 ──", `enabled: ${n == null ? undefined : n.configEnabled}`, `pollIntervalMs: ${n == null ? undefined : n.pollIntervalMs}`, `cooldownMs: ${n == null ? undefined : n.cooldownMs}`, `longStayMs: ${n == null ? undefined : n.longStayMs}`, "", "── 反应池 ──", `charId: ${(n == null ? undefined : n.charId) || "(空!)"}`, `当前char池子app数: ${(n == null ? undefined : n.appsInPool) ?? "?"}`];
                if (n == null ? undefined : n.noCharPoolsForCharId) {
                  o.push("⚠️ 没有此charId的池子");
                }
                if (n == null ? undefined : n.appKeys) {
                  o.push(`appKeys: ${n.appKeys}`);
                }
                o.push("");
                o.push("── 运行时 ──");
                o.push(`service运行: ${n == null ? undefined : n.serviceRunning}`);
                o.push(`view已挂: ${n == null ? undefined : n.serviceViewAttached}`);
                o.push(`使用情况访问权限: ${n == null ? undefined : n.hasUsageStatsPermission}`);
                o.push(`当前前台app: ${(n == null ? undefined : n.currentForegroundApp) || "(未知)"}`);
                if (n == null ? undefined : n.error) {
                  o.push(`❌ error: ${n.error}`);
                }
                await Rn(o.join("\n"));
              } catch (Hm) {
                await Rn("诊断失败: " + ((Hm == null ? undefined : Hm.message) || Hm));
              }
            } else {
              await Rn("诊断仅在 APK 内可用");
            }
          },
          className: "fe-cmd-btn",
          style: {
            fontSize: 11,
            padding: "4px 8px",
            borderColor: "#60a5fa",
            color: "#60a5fa"
          },
          children: [t.jsx(Sm, {}), " 🔍 诊断探测器状态"]
        }), t.jsx("span", {
          style: {
            fontSize: 11,
            color: "#8e9aa8",
            fontFamily: "monospace"
          },
          children: "雷达异常时调取此诊断终端"
        })]
      }), t.jsx(im, {
        label: "同步写进契约聊天记忆",
        children: t.jsx(dm, {
          checked: !!i.appendChatEnabled,
          onChange: e => T({
            appendChatEnabled: e
          })
        })
      }), t.jsxs(sm, {
        children: ["探针感知到切换 app 时，会往角色的契约聊天写一条系统旁白（如「", "{角色}", "注意到你打开了微信」「…用了小红书 1 小时」）。反应气泡台词本身不入聊天。"]
      }), t.jsx(im, {
        label: "探针雷达频率",
        children: t.jsxs("div", {
          style: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            width: "50%"
          },
          children: [t.jsx("span", {
            style: {
              position: "absolute",
              left: -20,
              display: "flex",
              alignItems: "center"
            },
            children: t.jsx(Sm, {})
          }), t.jsxs("select", {
            value: i.pollIntervalMs,
            onChange: e => T({
              pollIntervalMs: Number(e.target.value)
            }),
            className: "fe-select",
            style: {
              padding: "6px 10px"
            },
            children: [t.jsx("option", {
              value: 3000,
              children: "3 秒 (高速探测)"
            }), t.jsx("option", {
              value: 5000,
              children: "5 秒 (推荐灵敏度)"
            }), t.jsx("option", {
              value: 10000,
              children: "10 秒"
            }), t.jsx("option", {
              value: 30000,
              children: "30 秒"
            }), t.jsx("option", {
              value: 60000,
              children: "1 分钟"
            }), t.jsx("option", {
              value: 300000,
              children: "5 分钟 (低能耗)"
            }), t.jsx("option", {
              value: 1800000,
              children: "30 分钟"
            })]
          })]
        })
      }), t.jsx(sm, {
        children: "原生后台高灵敏前台进程扫描，5秒即能极速召唤回忆对白。"
      }), t.jsx(im, {
        label: "同应用感知冷却",
        children: t.jsxs("div", {
          style: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            width: "50%"
          },
          children: [t.jsx("span", {
            style: {
              position: "absolute",
              left: -20,
              display: "flex",
              alignItems: "center"
            },
            children: t.jsx(Sm, {})
          }), t.jsxs("select", {
            value: i.cooldownMs,
            onChange: e => T({
              cooldownMs: Number(e.target.value)
            }),
            className: "fe-select",
            style: {
              padding: "6px 10px"
            },
            children: [t.jsx("option", {
              value: 600000,
              children: "10 分钟"
            }), t.jsx("option", {
              value: 1800000,
              children: "30 分钟 (推荐)"
            }), t.jsx("option", {
              value: 3600000,
              children: "1 小时"
            }), t.jsx("option", {
              value: 7200000,
              children: "2 小时"
            })]
          })]
        })
      }), t.jsx(im, {
        label: "沉浸长停留触发",
        children: t.jsxs("div", {
          style: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            width: "50%"
          },
          children: [t.jsx("span", {
            style: {
              position: "absolute",
              left: -20,
              display: "flex",
              alignItems: "center"
            },
            children: t.jsx(Sm, {})
          }), t.jsxs("select", {
            value: i.longStayMs || 0,
            onChange: e => T({
              longStayMs: Number(e.target.value)
            }),
            className: "fe-select",
            style: {
              padding: "6px 10px"
            },
            children: [t.jsx("option", {
              value: 0,
              children: "关闭触发"
            }), t.jsx("option", {
              value: 1800000,
              children: "30 分钟后"
            }), t.jsx("option", {
              value: 3600000,
              children: "1 小时后 (推荐)"
            }), t.jsx("option", {
              value: 7200000,
              children: "2 小时后"
            })]
          })]
        })
      }), t.jsx(im, {
        label: "管理应用反应池 (Reactions)",
        children: t.jsxs("button", {
          onClick: () => h(!p),
          className: "fe-cmd-btn",
          style: {
            padding: "6px 12px",
            fontSize: 12
          },
          children: [t.jsx(Sm, {}), " ", p ? "收回反应池" : "展开反应池"]
        })
      }), p && t.jsx(bm, {
        appCfg: i,
        pools: l,
        boundChar: n,
        update: T,
        generatingPkg: y,
        batchProgress: S,
        genError: b,
        addingNew: g,
        setAddingNew: f,
        onGenerate: C,
        onBatchGenerate: async () => {
          if (!n) {
            A("没有绑定角色,无法生成");
            return;
          }
          A("");
          const {
            getEffectiveApps: e
          } = await m(async () => {
            const {
              getEffectiveApps: e
            } = await import("./appReactionPool-2KCtJ4s3.js");
            return {
              getEffectiveApps: e
            };
          }, __vite__mapDeps([12, 2, 6, 3, 4]));
          const t = e(i, l, n.id);
          const a = Object.entries(t).filter(([e, t]) => t.enabled && !t.hasPool);
          if (a.length !== 0) {
            for (let e = 0; e < a.length; e++) {
              const [t, n] = a[e];
              v({
                done: e,
                total: a.length,
                currentLabel: n.label
              });
              if (!(await C(t, n.label))) {
                break;
              }
            }
            v(null);
          } else {
            A("没有勾选了但还没生成的 app");
          }
        },
        onPoolsRefresh: async () => {
          const {
            loadAllPools: e
          } = await m(async () => {
            const {
              loadAllPools: e
            } = await import("./appReactionPool-2KCtJ4s3.js");
            return {
              loadAllPools: e
            };
          }, __vite__mapDeps([12, 2, 6, 3, 4]));
          c(await e());
        }
      })]
    }), t.jsxs(sm, {
      children: [t.jsx("b", {
        children: "隐私:"
      }), " App 进程包名完全存留于本地，不涉及任何外传云端。", t.jsx("br", {}), t.jsx("b", {
        children: "反应:"
      }), " 一次性魔法生成 24 句情境对白 (打开10 / 关闭8 / 长停留6)，零耗 Token。"]
    })]
  });
}
function bm({
  appCfg: n,
  pools: a,
  boundChar: o,
  update: r,
  generatingPkg: i,
  batchProgress: s,
  genError: l,
  addingNew: c,
  setAddingNew: d,
  onGenerate: u,
  onBatchGenerate: p,
  onPoolsRefresh: h
}) {
  const [g, f] = e.useState({});
  const [y, w] = e.useState(null);
  e.useEffect(() => {
    (async () => {
      try {
        const {
          getEffectiveApps: e
        } = await m(async () => {
          const {
            getEffectiveApps: e
          } = await import("./appReactionPool-2KCtJ4s3.js");
          return {
            getEffectiveApps: e
          };
        }, __vite__mapDeps([12, 2, 6, 3, 4]));
        f(e(n, a, o == null ? undefined : o.id));
      } catch (e) {}
    })();
  }, [n, a, o == null ? undefined : o.id]);
  const S = Object.entries(g).sort((e, t) => e[1].source === "custom" && t[1].source !== "custom" ? -1 : t[1].source === "custom" && e[1].source !== "custom" ? 1 : e[1].enabled && !t[1].enabled ? -1 : t[1].enabled && !e[1].enabled ? 1 : e[1].label.localeCompare(t[1].label));
  const v = S.filter(([, e]) => e.enabled && !e.hasPool).length;
  return t.jsxs("div", {
    style: {
      padding: "16px",
      background: "linear-gradient(180deg, #0a1124 0%, #050812 100%)",
      borderTop: "1px solid rgba(184, 150, 104, 0.2)"
    },
    children: [!o && t.jsx("div", {
      style: {
        padding: "12px",
        background: "rgba(192, 41, 43, 0.15)",
        border: "1px solid #c0392b",
        color: "#ff7675",
        borderRadius: "4px",
        fontSize: "12px",
        marginBottom: "12px",
        boxShadow: "inset 0 0 10px rgba(192, 41, 43, 0.2)"
      },
      children: "⚠️ 桌宠还没绑定角色 — 反应池跟着 char 走，先在上方设置好绑定角色"
    }), o && t.jsxs("div", {
      style: {
        padding: "12px",
        background: "rgba(184, 150, 104, 0.1)",
        border: "1px solid #b89668",
        color: "#dfc299",
        borderRadius: "4px",
        fontSize: "12px",
        marginBottom: "12px",
        boxShadow: "inset 0 0 10px rgba(184, 150, 104, 0.1)"
      },
      children: ["当前为 ", t.jsx("b", {
        style: {
          color: "#eae3d2"
        },
        children: o.name
      }), " 生成反应池 · 切换桌宠绑定角色后这里会换"]
    }), t.jsxs("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "4px 0 12px",
        gap: "8px"
      },
      children: [t.jsxs("div", {
        style: {
          fontSize: "12px",
          color: "#eae3d2"
        },
        children: ["共 ", t.jsx("span", {
          style: {
            color: "#dfc299",
            fontWeight: "bold"
          },
          children: S.length
        }), " 个 · 已勾选 ", t.jsx("span", {
          style: {
            color: "#4ade80",
            fontWeight: "bold"
          },
          children: S.filter(([, e]) => e.enabled).length
        }), " · 待生成 ", t.jsx("span", {
          style: {
            color: "#f87171",
            fontWeight: "bold"
          },
          children: v
        })]
      }), t.jsxs("div", {
        style: {
          display: "flex",
          gap: "8px"
        },
        children: [t.jsxs("button", {
          onClick: () => d(true),
          className: "fe-cmd-btn",
          style: {
            padding: "6px 12px",
            fontSize: "12px",
            background: "linear-gradient(180deg, #1e402e 0%, #0f241a 100%)",
            borderColor: "#4ade80",
            color: "#4ade80"
          },
          children: [t.jsx("span", {
            style: {
              fontSize: "14px",
              marginRight: "2px",
              fontWeight: "bold"
            },
            children: "+"
          }), " 自定义"]
        }), t.jsx("button", {
          onClick: p,
          disabled: v === 0 || !!s || !!i || !o,
          className: "fe-cmd-btn",
          style: {
            padding: "6px 12px",
            fontSize: "12px"
          },
          children: "为已选 app 批量生成"
        })]
      })]
    }), s && t.jsxs("div", {
      style: {
        padding: "12px",
        background: "rgba(243, 210, 154, 0.12)",
        border: "1px solid #f3d29a",
        color: "#f3d29a",
        borderRadius: "4px",
        fontSize: "12px",
        marginBottom: "12px",
        boxShadow: "inset 0 0 8px rgba(243, 210, 154, 0.1)"
      },
      children: ["批量生成中... ", s.done + 1, "/", s.total, " · 当前: ", t.jsx("span", {
        style: {
          color: "#eae3d2",
          fontWeight: "bold"
        },
        children: s.currentLabel
      })]
    }), l && t.jsx("div", {
      style: {
        padding: "12px",
        background: "rgba(192, 41, 43, 0.15)",
        border: "1px solid #c0392b",
        color: "#ff7675",
        borderRadius: "4px",
        fontSize: "12px",
        marginBottom: "12px",
        boxShadow: "inset 0 0 8px rgba(192, 41, 43, 0.1)"
      },
      children: l
    }), c && t.jsx(Tm, {
      initial: {
        pkg: "",
        label: "",
        emoji: ""
      },
      onCancel: () => d(false),
      onSave: e => {
        const t = {
          ...(n.customApps || {})
        };
        t[e.pkg] = {
          label: e.label,
          emoji: e.emoji || ""
        };
        const a = {
          ...(n.apps || {})
        };
        a[e.pkg] = {
          ...(a[e.pkg] || {}),
          enabled: true
        };
        r({
          customApps: t,
          apps: a
        });
        d(false);
      }
    }), t.jsx("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      },
      children: S.map(([e, l]) => {
        var c;
        const d = i === e;
        const p = l.counts || {
          open: 0,
          close: 0,
          longStay: 0
        };
        const g = y === e;
        return t.jsxs("div", {
          style: {
            background: "rgba(13, 20, 35, 0.85)",
            borderRadius: "4px",
            border: g ? "1px solid #dfc299" : "1px solid rgba(184, 150, 104, 0.25)",
            boxShadow: g ? "inset 0 0 10px rgba(223, 194, 153, 0.15), 0 2px 8px rgba(0,0,0,0.4)" : "0 1px 4px rgba(0,0,0,0.2)",
            opacity: l.enabled ? 1 : 0.45,
            overflow: "hidden",
            transition: "all 0.25s ease"
          },
          children: [t.jsxs("div", {
            style: {
              padding: "12px",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            },
            children: [t.jsx("input", {
              type: "checkbox",
              checked: !!l.enabled,
              onChange: () => ((e, t) => {
                const a = {
                  ...(n.apps || {})
                };
                a[e] = {
                  ...(a[e] || {}),
                  enabled: !t.enabled
                };
                r({
                  apps: a
                });
              })(e, l),
              style: {
                width: "16px",
                height: "16px",
                cursor: "pointer",
                flexShrink: 0,
                accentColor: "#dfc299"
              }
            }), t.jsx("div", {
              style: {
                fontSize: "18px",
                flexShrink: 0
              },
              children: l.emoji || "📱"
            }), t.jsxs("div", {
              style: {
                flex: 1,
                minWidth: 0
              },
              children: [t.jsxs("div", {
                style: {
                  fontSize: "14px",
                  color: "#eae3d2",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center"
                },
                children: [l.label, l.source === "custom" && t.jsx("span", {
                  style: {
                    fontSize: "9px",
                    marginLeft: "6px",
                    padding: "1px 5px",
                    background: "rgba(184, 150, 104, 0.2)",
                    color: "#dfc299",
                    border: "1px solid rgba(184, 150, 104, 0.4)",
                    borderRadius: "2px"
                  },
                  children: "自定义"
                })]
              }), t.jsx("div", {
                style: {
                  fontSize: "11px",
                  color: "#8a9bb8",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  fontFamily: "monospace",
                  marginTop: "2px"
                },
                children: e
              }), t.jsx("div", {
                style: {
                  fontSize: "11px",
                  color: l.hasPool ? "#4ade80" : "#f87171",
                  marginTop: "3px",
                  fontWeight: "500"
                },
                children: l.hasPool ? `已生成 (开 ${p.open} / 关 ${p.close} / 久 ${p.longStay})` : "未生成反应池"
              })]
            }), t.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                flexShrink: 0
              },
              children: [l.hasPool && t.jsx("button", {
                onClick: () => w(g ? null : e),
                className: "fe-cmd-btn",
                style: {
                  padding: "4px 8px",
                  fontSize: "11px",
                  background: g ? "linear-gradient(180deg, #b89668 0%, #8c6e45 100%)" : undefined,
                  color: g ? "#0d162b" : undefined,
                  borderColor: g ? "#eae3d2" : undefined
                },
                children: g ? "收起" : "查看/编辑"
              }), t.jsx("button", {
                onClick: () => u(e, l.label),
                disabled: !o || !!s || !!i,
                className: "fe-cmd-btn",
                style: {
                  padding: "4px 8px",
                  fontSize: "11px"
                },
                children: d ? "魔法编译..." : l.hasPool ? "重塑魔池" : "生成魔池"
              }), l.source === "custom" && t.jsx("button", {
                onClick: () => (async e => {
                  const t = {
                    ...(n.customApps || {})
                  };
                  delete t[e];
                  const a = {
                    ...(n.apps || {})
                  };
                  delete a[e];
                  await r({
                    customApps: t,
                    apps: a
                  });
                  if (o == null ? undefined : o.id) {
                    const {
                      deleteAppPool: t
                    } = await m(async () => {
                      const {
                        deleteAppPool: e
                      } = await import("./appReactionPool-2KCtJ4s3.js");
                      return {
                        deleteAppPool: e
                      };
                    }, __vite__mapDeps([12, 2, 6, 3, 4]));
                    await t(o.id, e);
                    h();
                  }
                })(e),
                className: "fe-cmd-btn",
                style: {
                  padding: "4px 8px",
                  fontSize: "11px",
                  background: "linear-gradient(180deg, #6b1d1d 0%, #441010 100%)",
                  borderColor: "#f87171",
                  color: "#f87171"
                },
                children: "删除"
              })]
            })]
          }), g && l.hasPool && t.jsx(Am, {
            charId: o == null ? undefined : o.id,
            pkg: e,
            pool: ((c = a == null ? undefined : a[o == null ? undefined : o.id]) == null ? undefined : c[e]) || {},
            onRefresh: h,
            onClearPool: () => {
              (async e => {
                if (!(o == null ? undefined : o.id)) {
                  return;
                }
                const {
                  deleteAppPool: t
                } = await m(async () => {
                  const {
                    deleteAppPool: e
                  } = await import("./appReactionPool-2KCtJ4s3.js");
                  return {
                    deleteAppPool: e
                  };
                }, __vite__mapDeps([12, 2, 6, 3, 4]));
                await t(o.id, e);
                h();
              })(e);
              w(null);
            }
          })]
        }, e);
      })
    })]
  });
}
function Am({
  charId: n,
  pkg: a,
  pool: o,
  onRefresh: r,
  onClearPool: i
}) {
  const [s, l] = e.useState(o.open || []);
  const [c, d] = e.useState(o.close || []);
  const [u, p] = e.useState(o.longStay || []);
  const [h, g] = e.useState(false);
  const [f, y] = e.useState(false);
  e.useEffect(() => {
    l(o.open || []);
    d(o.close || []);
    p(o.longStay || []);
    g(false);
  }, [o]);
  return t.jsxs("div", {
    style: {
      borderTop: "1px dashed rgba(184, 150, 104, 0.3)",
      background: "rgba(5, 8, 15, 0.95)",
      padding: "12px"
    },
    children: [t.jsx(Im, {
      title: "🟢 传送门启封 (open)",
      hint: "进入该 App 时，桌宠浮现并与之共鸣的台词",
      lines: s,
      setLines: e => {
        l(e);
        g(true);
      }
    }), t.jsx(Im, {
      title: "🔴 封印结界 (close)",
      hint: "切离该 App 时，桌宠撤回并留下的审判评论",
      lines: c,
      setLines: e => {
        d(e);
        g(true);
      }
    }), t.jsx(Im, {
      title: "⏰ 时光烙印 (longStay)",
      hint: "在该 App 停留过久，桌宠疲倦或焦躁时的吐槽",
      lines: u,
      setLines: e => {
        p(e);
        g(true);
      }
    }), t.jsxs("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "8px",
        marginTop: "14px"
      },
      children: [t.jsx("button", {
        onClick: i,
        className: "fe-cmd-btn",
        style: {
          padding: "6px 12px",
          fontSize: "12px",
          background: "linear-gradient(180deg, #6b1d1d 0%, #441010 100%)",
          borderColor: "#f87171",
          color: "#f87171"
        },
        children: "清空整个魔池"
      }), t.jsx("button", {
        onClick: async () => {
          if (n && a) {
            y(true);
            try {
              const {
                writeAppPool: e
              } = await m(async () => {
                const {
                  writeAppPool: e
                } = await import("./appReactionPool-2KCtJ4s3.js");
                return {
                  writeAppPool: e
                };
              }, __vite__mapDeps([12, 2, 6, 3, 4]));
              await e(n, a, {
                open: s,
                close: c,
                longStay: u
              });
              await r();
              g(false);
            } catch (Hm) {
              console.warn("[PoolViewer] save failed:", Hm == null ? undefined : Hm.message);
            } finally {
              y(false);
            }
          }
        },
        disabled: !h || f,
        className: "fe-cmd-btn",
        style: {
          padding: "6px 16px",
          fontSize: "12px",
          background: h && !f ? "linear-gradient(180deg, #b89668 0%, #8c6e45 100%)" : undefined,
          color: h && !f ? "#0d162b" : undefined,
          borderColor: h && !f ? "#eae3d2" : undefined
        },
        children: f ? "契约封存中..." : h ? "刻印保存" : "契约已缔结"
      })]
    })]
  });
}
function Im({
  title: n,
  hint: a,
  lines: o,
  setLines: r
}) {
  const [i, s] = e.useState(false);
  const [l, c] = e.useState("");
  const [d, u] = e.useState(null);
  const [m, p] = e.useState(false);
  const h = () => {
    const e = l.trim();
    if (e) {
      r([...o, e]);
      c("");
      s(false);
    }
  };
  return t.jsxs("div", {
    style: {
      marginBottom: "14px"
    },
    children: [t.jsxs("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: "4px"
      },
      children: [t.jsxs("div", {
        style: {
          fontSize: "13px",
          fontWeight: 600,
          color: "#dfc299"
        },
        children: [n, " ", t.jsxs("span", {
          style: {
            color: "#eae3d2",
            fontWeight: 400,
            fontSize: "11px"
          },
          children: ["· ", o.length, " 句"]
        })]
      }), t.jsx("button", {
        onClick: () => s(!i),
        className: "fe-cmd-btn",
        style: {
          padding: "3px 8px",
          fontSize: "11px",
          background: "linear-gradient(180deg, #1e402e 0%, #0f241a 100%)",
          borderColor: "#4ade80",
          color: "#4ade80"
        },
        children: "+ 颂唱一句"
      })]
    }), t.jsx("div", {
      style: {
        fontSize: "11px",
        color: "#8a9bb8",
        marginBottom: "8px"
      },
      children: a
    }), i && t.jsxs("div", {
      style: {
        display: "flex",
        gap: "4px",
        marginBottom: "8px",
        alignItems: "center"
      },
      children: [t.jsx("div", {
        style: {
          width: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0
        },
        children: m && t.jsx(Sm, {})
      }), t.jsx("input", {
        type: "text",
        value: l,
        onChange: e => c(e.target.value),
        onFocus: () => p(true),
        onBlur: () => p(false),
        onKeyDown: e => {
          if (e.key === "Enter") {
            h();
          }
        },
        placeholder: "输入契约台词...",
        autoFocus: true,
        style: {
          flex: 1,
          padding: "6px 8px",
          fontSize: "12px",
          background: "#070b15",
          border: "1px solid #b89668",
          borderRadius: "3px",
          color: "#eae3d2",
          outline: "none",
          boxShadow: m ? "0 0 6px rgba(223, 194, 153, 0.4)" : "none",
          transition: "all 0.2s ease"
        }
      }), t.jsx("button", {
        onClick: h,
        className: "fe-cmd-btn",
        style: {
          padding: "6px 10px",
          fontSize: "11px",
          background: "linear-gradient(180deg, #b89668 0%, #8c6e45 100%)",
          color: "#0d162b",
          borderColor: "#eae3d2"
        },
        children: "铭刻"
      }), t.jsx("button", {
        onClick: () => {
          s(false);
          c("");
        },
        className: "fe-cmd-btn",
        style: {
          padding: "6px 10px",
          fontSize: "11px"
        },
        children: "撤销"
      })]
    }), o.length === 0 && !i && t.jsx("div", {
      style: {
        padding: "12px",
        fontSize: "11px",
        color: "#8a9bb8",
        fontStyle: "italic",
        textAlign: "center",
        background: "rgba(255,255,255,0.01)",
        border: "1px dashed rgba(184, 150, 104, 0.15)",
        borderRadius: "4px",
        marginBottom: "8px"
      },
      children: "(魔池空虚，点击上方“+ 颂唱一句”注入魔法能量)"
    }), t.jsx("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "4px"
      },
      children: o.map((e, n) => t.jsxs("div", {
        style: {
          display: "flex",
          gap: "4px",
          alignItems: "center"
        },
        children: [t.jsx("div", {
          style: {
            width: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0
          },
          children: d === n && t.jsx(Sm, {})
        }), t.jsxs("span", {
          style: {
            fontSize: "10px",
            color: "#b89668",
            width: "14px",
            textAlign: "right",
            flexShrink: 0
          },
          children: [n + 1, "."]
        }), t.jsx("input", {
          type: "text",
          value: e,
          onChange: e => ((e, t) => {
            const n = [...o];
            n[e] = t;
            r(n);
          })(n, e.target.value),
          onFocus: () => u(n),
          onBlur: () => u(null),
          style: {
            flex: 1,
            padding: "5px 8px",
            fontSize: "12px",
            background: "#070b15",
            border: d === n ? "1px solid #dfc299" : "1px solid rgba(184, 150, 104, 0.3)",
            borderRadius: "3px",
            color: "#eae3d2",
            outline: "none",
            boxShadow: d === n ? "0 0 6px rgba(223, 194, 153, 0.3)" : "none",
            transition: "all 0.2s ease"
          }
        }), t.jsx("button", {
          onClick: () => (e => {
            r(o.filter((t, n) => n !== e));
          })(n),
          className: "fe-cmd-btn",
          style: {
            padding: "4px 8px",
            fontSize: "11px",
            background: "linear-gradient(180deg, #6b1d1d 0%, #441010 100%)",
            borderColor: "#f87171",
            color: "#f87171",
            flexShrink: 0
          },
          children: "×"
        })]
      }, n))
    })]
  });
}
function Tm({
  initial: n,
  onCancel: a,
  onSave: o
}) {
  const [r, i] = e.useState(n.pkg || "");
  const [s, l] = e.useState(n.label || "");
  const [c, d] = e.useState(n.emoji || "");
  const [u, m] = e.useState(null);
  return t.jsxs("div", {
    className: "fe-panel-card",
    style: {
      padding: "12px",
      marginBottom: "12px"
    },
    children: [t.jsx("div", {
      style: {
        fontSize: "12px",
        color: "#dfc299",
        marginBottom: "8px",
        fontWeight: "bold"
      },
      children: "加自定义 app — AI 会根据这个名字生成反应池"
    }), t.jsxs("div", {
      style: {
        display: "flex",
        gap: "6px",
        marginBottom: "10px",
        alignItems: "center"
      },
      children: [t.jsx("input", {
        type: "text",
        value: r,
        onChange: e => i(e.target.value),
        onFocus: () => m("pkg"),
        onBlur: () => m(null),
        placeholder: "包名 com.xxx.yyy",
        style: {
          flex: 2,
          padding: "6px 8px",
          fontSize: "12px",
          background: "#070b15",
          border: u === "pkg" ? "1px solid #dfc299" : "1px solid #b89668",
          borderRadius: "3px",
          color: "#eae3d2",
          outline: "none",
          boxShadow: u === "pkg" ? "0 0 6px rgba(223, 194, 153, 0.3)" : "none",
          transition: "all 0.2s ease"
        }
      }), t.jsx("input", {
        type: "text",
        value: s,
        onChange: e => l(e.target.value),
        onFocus: () => m("label"),
        onBlur: () => m(null),
        placeholder: "显示名(如 哔哩漫画)",
        style: {
          flex: 1.5,
          padding: "6px 8px",
          fontSize: "12px",
          background: "#070b15",
          border: u === "label" ? "1px solid #dfc299" : "1px solid #b89668",
          borderRadius: "3px",
          color: "#eae3d2",
          outline: "none",
          boxShadow: u === "label" ? "0 0 6px rgba(223, 194, 153, 0.3)" : "none",
          transition: "all 0.2s ease"
        }
      }), t.jsx("input", {
        type: "text",
        value: c,
        onChange: e => d(e.target.value),
        onFocus: () => m("emoji"),
        onBlur: () => m(null),
        placeholder: "图标",
        style: {
          width: "56px",
          padding: "6px 8px",
          fontSize: "12px",
          background: "#070b15",
          border: u === "emoji" ? "1px solid #dfc299" : "1px solid #b89668",
          borderRadius: "3px",
          color: "#eae3d2",
          outline: "none",
          boxShadow: u === "emoji" ? "0 0 6px rgba(223, 194, 153, 0.3)" : "none",
          transition: "all 0.2s ease"
        }
      })]
    }), t.jsxs("div", {
      style: {
        display: "flex",
        gap: "6px",
        justifyContent: "flex-end"
      },
      children: [t.jsx("button", {
        onClick: a,
        className: "fe-cmd-btn",
        style: {
          padding: "5px 12px",
          fontSize: "12px"
        },
        children: "取消"
      }), t.jsx("button", {
        onClick: () => {
          const e = r.trim();
          const t = s.trim();
          if (e && t) {
            o({
              pkg: e,
              label: t,
              emoji: c.trim()
            });
          }
        },
        className: "fe-cmd-btn",
        style: {
          padding: "5px 12px",
          fontSize: "12px",
          background: "linear-gradient(180deg, #b89668 0%, #8c6e45 100%)",
          color: "#0d162b",
          borderColor: "#eae3d2"
        },
        children: "添加"
      })]
    })]
  });
}
const Cm = Object.freeze(Object.defineProperty({
  __proto__: null,
  FREQUENCY_INTERVALS: {
    off: null,
    frequent: {
      min: 60000,
      max: 300000
    },
    normal: {
      min: 300000,
      max: 1800000
    },
    rare: {
      min: 1800000,
      max: 7200000
    }
  },
  default: function () {
    var n;
    var a;
    var o;
    var r;
    var i;
    var s;
    var l;
    var c;
    var d;
    var u;
    const {
      showScreen: p
    } = fa();
    const {
      t: h,
      tOr: g
    } = va();
    const {
      characters: f
    } = Is();
    const {
      currentProfileUser: y,
      profileUsers: w
    } = Ds();
    const [S, v] = e.useState(nm);
    const [b, A] = e.useState(false);
    const [I, T] = e.useState(false);
    const [C, P] = e.useState(false);
    const [k, E] = e.useState(false);
    const [x, M] = e.useState(null);
    const [N, R] = e.useState(null);
    const [D, $] = e.useState(false);
    const [_, O] = e.useState(null);
    const [L, j] = e.useState(false);
    const [U, F] = e.useState(false);
    const [H, G] = e.useState(false);
    const [W, V] = e.useState({
      done: 0,
      total: 0
    });
    const [z, Y] = e.useState(null);
    const [K, q] = e.useState(false);
    const [J, Q] = e.useState(false);
    const [X, Z] = e.useState(false);
    const [ee, te] = e.useState("");
    e.useEffect(() => {
      var e;
      var t;
      const n = typeof window != "undefined" ? window.Capacitor : null;
      const a = !!((e = n == null ? undefined : n.isNativePlatform) == null ? undefined : e.call(n));
      const o = !!a && ((t = n == null ? undefined : n.getPlatform) == null ? undefined : t.call(n)) === "android";
      A(o);
      T(!a);
      if (o) {
        (async () => {
          try {
            const e = await Au.getDeviceInfo();
            if (e) {
              Y(e);
            }
          } catch (e) {}
        })();
      }
    }, []);
    e.useEffect(() => {
      let e = false;
      (async () => {
        try {
          const t = await lt.get("desktopPetConfig");
          if (e) {
            return;
          }
          if (t && typeof t == "object") {
            const e = {
              ...nm,
              ...t
            };
            if (t.avatarMode === "locked" && t.lockedCharId && !t.boundCharId) {
              e.boundCharId = t.lockedCharId;
              e.avatarMode = "follow-bound";
            } else if (t.avatarMode === "follow-main" && !t.boundCharId) {
              e.boundCharId = null;
              e.avatarMode = "follow-bound";
            }
            v(e);
          } else {
            const t = (await lt.get("apiSettings")) || {};
            if (!e && t.desktopFloatingPetEnabled !== undefined) {
              v(e => ({
                ...e,
                enabled: !!t.desktopFloatingPetEnabled
              }));
            }
          }
        } catch (t) {}
      })();
      return () => {
        e = true;
      };
    }, []);
    e.useEffect(() => {
      if (!b) {
        return;
      }
      let e = null;
      const t = async () => {
        try {
          const e = await Au.hasPermission();
          P(e);
          if (typeof Au.getDiagnostics == "function") {
            const e = await Au.getDiagnostics();
            M(e);
            E(!!(e == null ? undefined : e.visible));
          } else {
            const e = await Au.isVisible();
            E(e);
          }
        } catch (e) {}
      };
      t();
      e = setInterval(t, 2000);
      return () => {
        if (e) {
          clearInterval(e);
        }
      };
    }, [b]);
    const ne = e.useCallback(async e => {
      v(e);
      try {
        await lt.set("desktopPetConfig", e);
        window.dispatchEvent(new CustomEvent("nuojiji:desktop-pet-config-updated", {
          detail: e
        }));
      } catch (Hm) {
        console.error("[DesktopPetManager] 保存配置失败:", Hm);
      }
    }, []);
    const ae = (e, t) => {
      ne({
        ...S,
        [e]: t
      });
    };
    const oe = () => {
      if (!Array.isArray(f)) {
        return null;
      }
      if (S.boundCharId) {
        return f.find(e => String(e.id) === String(S.boundCharId)) || null;
      }
      if (!y) {
        return null;
      }
      const e = y.uid || y.id;
      if (!e) {
        return null;
      }
      let t = null;
      try {
        t = localStorage.getItem(`nuojiji_last_selected_char_${e}`);
      } catch (n) {}
      if (t) {
        const e = f.find(e => String(e.id) === String(t));
        if (e) {
          return e;
        }
      }
      return f[0] || null;
    };
    const re = () => {
      var e;
      if (S.avatarMode === "custom" && S.customAvatar) {
        return S.customAvatar;
      } else {
        return ((e = oe()) == null ? undefined : e.image) || "";
      }
    };
    const ie = {
      normal: "在线",
      sleep: "💤 睡觉",
      work: "💼 工作",
      hungry: "🍚 饿了",
      happy: "😊 开心"
    };
    e.useEffect(() => {
      if (B()) {
        (async () => {
          try {
            const {
              isPetLiveActivityRunning: e
            } = await m(async () => {
              const {
                isPetLiveActivityRunning: e
              } = await import("./iosLiveActivity-Boe9JJRO.js");
              return {
                isPetLiveActivityRunning: e
              };
            }, __vite__mapDeps([33, 2, 6, 3, 4]));
            const t = await e();
            q(t);
            if (!t && (S == null ? undefined : S.iosLiveAutoSummon)) {
              se();
            }
          } catch (e) {}
        })();
      }
    }, [S == null ? undefined : S.iosLiveAutoSummon]);
    const se = async () => {
      if (J) {
        return;
      }
      Q(true);
      const e = setTimeout(() => Q(false), 10000);
      const t = e => {
        try {
          window.alert("[灵动岛诊断] " + e);
        } catch (t) {}
      };
      try {
        const a = await m(() => import("./iosLiveActivity-Boe9JJRO.js"), __vite__mapDeps([33, 2, 6, 3, 4]));
        if (K) {
          await a.endPetLiveActivity();
          q(false);
          try {
            ne({
              ...S,
              iosLiveAutoSummon: false
            });
          } catch (n) {}
          return;
        }
        const o = oe();
        if (!o) {
          t("没有绑定角色");
          return;
        }
        const r = Array.isArray(S == null ? undefined : S.lineList) ? S.lineList : [];
        const i = r.length ? r[Math.floor(Math.random() * r.length)] : `${o.name}在这里陪你`;
        const s = (S == null ? undefined : S.boundUserId) || (y == null ? undefined : y.uid) || (y == null ? undefined : y.id);
        const l = Array.isArray(S == null ? undefined : S.liveFrames) ? S.liveFrames : [];
        const c = (e, t, n) => Promise.race([Promise.resolve(e).catch(() => n), new Promise(e => setTimeout(() => e(n), t))]);
        let d = null;
        try {
          const {
            registerPlugin: e
          } = await m(async () => {
            const {
              registerPlugin: e
            } = await Promise.resolve().then(() => Xs);
            return {
              registerPlugin: e
            };
          }, undefined);
          const t = e("LiveActivity");
          try {
            await c(t.isRunning(), 3000, null);
          } catch (n) {}
          d = await c(t.start({
            charName: o.name,
            charId: String(o.id || ""),
            userId: String(s || ""),
            avatarBase64: "",
            line: i,
            status: "在线",
            frames: []
          }), 6000, null);
        } catch (Hm) {
          d = {
            error: (Hm == null ? undefined : Hm.message) || String(Hm)
          };
        }
        if (!(d == null ? undefined : d.activityId)) {
          try {
            const e = await c(a.readPetLiveDiag(), 3000, "?");
            t("start 返回=" + JSON.stringify(d) + "\n\nnative:\n" + e);
          } catch (n) {}
        }
        if (d == null ? undefined : d.activityId) {
          q(true);
          try {
            ne({
              ...S,
              iosLiveAutoSummon: true
            });
          } catch (n) {}
          clearTimeout(e);
          Q(false);
          try {
            const e = await (async () => {
              const e = oe();
              const t = re() || "";
              let a = "normal";
              let o = null;
              try {
                const {
                  resolvePetVisualState: t
                } = await m(async () => {
                  const {
                    resolvePetVisualState: e
                  } = await import("./petVisualState-cUP7m92Z.js");
                  return {
                    resolvePetVisualState: e
                  };
                }, __vite__mapDeps([31, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
                try {
                  const {
                    getCharState: t
                  } = await m(async () => {
                    const {
                      getCharState: e
                    } = await import("./petCare-3692o74Q.js");
                    return {
                      getCharState: e
                    };
                  }, __vite__mapDeps([11, 2, 6, 3, 4]));
                  if (e == null ? undefined : e.id) {
                    o = await t(e.id);
                  }
                } catch (n) {}
                a = t({
                  charId: e == null ? undefined : e.id,
                  careState: o,
                  hasState: e => !!S.stateImages && !!S.stateImages[e]
                });
              } catch (n) {}
              const r = S.stateImages && S.stateImages[a] || t;
              const i = S.iosLiveCustomStatus && String(S.iosLiveCustomStatus).trim() ? String(S.iosLiveCustomStatus).trim() : ie[a] || "在线";
              const s = Number.isFinite(o == null ? undefined : o.hunger) ? o.hunger : -1;
              const l = Number.isFinite(o == null ? undefined : o.mood) ? o.mood : -1;
              const c = Number.isFinite(o == null ? undefined : o.intimacy) ? o.intimacy : -1;
              const d = (o == null ? undefined : o.interactionCount) || 0;
              return {
                stateKey: a,
                image: r,
                status: i,
                hunger: s,
                mood: l,
                intimacy: c,
                dualAvatar: !!S.iosLiveShowDualAvatar,
                userImg: S.iosLiveUserAvatar || (y == null ? undefined : y.avatar) || (y == null ? undefined : y.image) || "",
                bgImg: S.iosLiveBgImage || "",
                interactionCount: d
              };
            })();
            let t = e.image || "";
            if (t) {
              try {
                const {
                  compressImageForStorage: e
                } = await m(async () => {
                  const {
                    compressImageForStorage: e
                  } = await import("./imageCompressor-FPWVE1FW.js");
                  return {
                    compressImageForStorage: e
                  };
                }, []);
                t = await c(e(t, {
                  maxDim: 320
                }), 2000, "");
              } catch (n) {}
            }
            if (t) {
              await c(a.writePetAvatarToAppGroup(t), 3000, null);
            }
            try {
              const e = S.stateImages || {};
              const {
                compressImageForStorage: t
              } = await m(async () => {
                const {
                  compressImageForStorage: e
                } = await import("./imageCompressor-FPWVE1FW.js");
                return {
                  compressImageForStorage: e
                };
              }, []);
              for (const o of ["normal", "sleep", "work", "hungry", "happy"]) {
                const r = e[o];
                if (!r) {
                  continue;
                }
                let i = r;
                try {
                  i = await c(t(r, {
                    maxDim: 320
                  }), 2000, r);
                } catch (n) {}
                try {
                  await c(a.writePetStateImage(o, i), 2500, null);
                } catch (n) {}
              }
            } catch (n) {}
            let r = "";
            if (e.dualAvatar && e.userImg) {
              try {
                const {
                  compressImageForStorage: t
                } = await m(async () => {
                  const {
                    compressImageForStorage: e
                  } = await import("./imageCompressor-FPWVE1FW.js");
                  return {
                    compressImageForStorage: e
                  };
                }, []);
                r = await c(t(e.userImg, {
                  maxDim: 320
                }), 2000, "");
              } catch (n) {}
            }
            let s = "";
            let l = false;
            if (e.bgImg) {
              try {
                const {
                  compressImageForStorage: t
                } = await m(async () => {
                  const {
                    compressImageForStorage: e
                  } = await import("./imageCompressor-FPWVE1FW.js");
                  return {
                    compressImageForStorage: e
                  };
                }, []);
                s = await c(t(e.bgImg, {
                  maxDim: 600
                }), 2500, "");
              } catch (n) {}
            } else {
              l = true;
            }
            await c(a.updatePetLiveActivity({
              line: i,
              status: e.status,
              hunger: e.hunger,
              mood: e.mood,
              intimacy: e.intimacy,
              dualAvatar: e.dualAvatar,
              userAvatarBase64: r,
              bgBase64: s,
              clearBg: l,
              stateKey: e.stateKey
            }), 3000, null);
            let d = "";
            let u = false;
            if (S.iosRoomBgImage) {
              try {
                const {
                  compressImageForStorage: e
                } = await m(async () => {
                  const {
                    compressImageForStorage: e
                  } = await import("./imageCompressor-FPWVE1FW.js");
                  return {
                    compressImageForStorage: e
                  };
                }, []);
                d = await c(e(S.iosRoomBgImage, {
                  maxDim: 700
                }), 2500, "");
              } catch (n) {}
            } else {
              u = true;
            }
            let p = localStorage.getItem("nuojiji_install_time");
            if (!p) {
              p = String(Date.now() - 432000000);
              localStorage.setItem("nuojiji_install_time", p);
            }
            const h = Math.max(1, Math.floor((Date.now() - Number(p)) / 86400000));
            const g = e.interactionCount || 0;
            await c(a.updatePetWidget({
              name: o.name,
              line: i,
              status: e.status,
              hunger: e.hunger,
              mood: e.mood,
              intimacy: e.intimacy,
              stateKey: e.stateKey,
              roomBgBase64: d,
              clearRoomBg: u,
              daysTogether: h,
              interactionCount: g
            }), 3000, null);
          } catch (n) {}
          if (l.length > 1) {
            try {
              await a.setPetLiveFrames(l);
              await a.playPetLiveFrames(4);
            } catch (n) {}
          }
        } else {
          let e = "";
          try {
            e = await a.readPetLiveDiag();
          } catch (n) {}
          t("召唤未成功:" + ((d == null ? undefined : d.error) || "未知") + (e ? "\n\n" + e : ""));
        }
      } catch (Hm) {
        t("异常 " + ((Hm == null ? undefined : Hm.message) || String(Hm)));
      } finally {
        clearTimeout(e);
        Q(false);
      }
    };
    const le = async (e, t) => {
      const n = e || S.lineList;
      const a = t || oe();
      if (!Array.isArray(n) || n.length === 0) {
        Rn("请先生成台词");
        return;
      }
      if (!a) {
        Rn("找不到绑定角色");
        return;
      }
      const o = (await lt.get("apiSettings")) || {};
      if (!o.minimaxApiKey) {
        Rn("请先在 API 设置里配置 MiniMax API Key");
        return;
      }
      const r = (y == null ? undefined : y.uid) || (y == null ? undefined : y.id);
      const i = await vd(r, a.id);
      const {
        voiceProvider: s,
        voiceId: l,
        voiceLanguage: c,
        voiceSpeed: d,
        sovitsRefText: u
      } = i;
      if (l) {
        G(true);
        V({
          done: 0,
          total: n.length
        });
        try {
          const e = await Ou({
            charId: a.id,
            voiceProvider: s,
            voiceId: l,
            sovitsRefText: u,
            voiceLanguage: c,
            voiceSpeed: d,
            extraVoiceConfig: i,
            apiSettings: o,
            lines: n,
            onProgress: (e, t) => V({
              done: e,
              total: t
            })
          });
          if (e.success) {
            Rn(`已缓存 ${e.count}/${e.total} 句语音 🔊\n下次播放无延迟!`);
          } else {
            Rn("语音缓存失败: " + (e.reason || "未知错误"));
          }
        } catch (Hm) {
          console.error("[DesktopPetManager] prewarm 失败:", Hm);
          Rn("语音缓存失败: " + ((Hm == null ? undefined : Hm.message) || Hm));
        } finally {
          G(false);
        }
      } else {
        Rn(`角色「${a.name}」没配置 voice id\n请到名册编辑该角色,填写音色 ID`);
      }
    };
    e.useEffect(() => {
      const e = () => {
        Rn("请到系统设置授予「悬浮窗权限」让桌宠显示在屏幕上 🐾");
      };
      window.addEventListener("nuojiji:floating-pet-permission-required", e);
      return () => window.removeEventListener("nuojiji:floating-pet-permission-required", e);
    }, []);
    const [ce, de] = e.useState(null);
    e.useEffect(() => {
      if (z == null ? undefined : z.rom) {
        de(z.rom);
      }
    }, [z]);
    return t.jsxs("div", {
      className: "screen-overlay fe-console-theme",
      style: {
        position: "fixed",
        inset: 0,
        background: "#090e17",
        zIndex: 100,
        overflowY: "auto",
        overflowX: "hidden",
        color: "#eae3d2"
      },
      children: [t.jsx("style", {
        children: "\n                /* 皇家火纹全局控制台主题 */\n                .fe-console-theme {\n                    font-family: 'NuoSans', 'Courier New', monospace;\n                    background: linear-gradient(135deg, #090e17 0%, #101626 50%, #0d1220 100%) !important;\n                    color: #eae3d2 !important;\n                }\n\n                /* JRPG 皇家镀金双层卡片 */\n                .fe-dialog-box {\n                    background: rgba(6, 9, 19, 0.95) !important;\n                    border: 1px solid #b89668 !important;\n                    box-shadow: inset 0 0 16px rgba(184, 150, 104, 0.15), 0 8px 32px rgba(0, 0, 0, 0.6);\n                    border-radius: 2px;\n                    padding: 16px;\n                    color: #eae3d2 !important;\n                    position: relative;\n                }\n                .fe-dialog-box::before {\n                    content: '';\n                    position: absolute;\n                    inset: 3px;\n                    border: 1px dashed rgba(184, 150, 104, 0.3);\n                    pointer-events: none;\n                }\n\n                /* JRPG 皇家金角面板卡片 */\n                .fe-panel-card {\n                    background: rgba(13, 20, 35, 0.9) !important;\n                    border: 1px solid #b89668 !important;\n                    border-radius: 4px;\n                    padding: 16px;\n                    margin-bottom: 16px;\n                    box-shadow: inset 0 0 10px rgba(184, 150, 104, 0.15), 0 4px 12px rgba(0, 0, 0, 0.5);\n                    position: relative;\n                    transition: all 0.25s ease;\n                }\n                .fe-panel-card::before {\n                    content: '';\n                    position: absolute;\n                    inset: 3px;\n                    border: 1px solid rgba(197, 168, 128, 0.2);\n                    pointer-events: none;\n                }\n                .fe-panel-card:hover {\n                    border-color: #dfc299 !important;\n                    box-shadow: inset 0 0 15px rgba(223, 194, 153, 0.2), 0 6px 16px rgba(0, 0, 0, 0.6);\n                }\n\n                /* 经典火纹亮金色与象牙白 */\n                .fe-highlight-gold {\n                    color: #dfc299 !important;\n                }\n                .fe-highlight-ivory {\n                    color: #eae3d2 !important;\n                }\n                .fe-highlight-yellow {\n                    color: #f3d29a !important;\n                }\n                .fe-highlight-green {\n                    color: #4ade80 !important;\n                }\n                .fe-highlight-red {\n                    color: #f87171 !important;\n                }\n                .fe-highlight-blue {\n                    color: #60a5fa !important;\n                }\n\n                /* 闪烁指向小手 ☞ */\n                @keyframes fe-hand-blink {\n                    0%, 100% { opacity: 1; transform: translateX(0); }\n                    50% { opacity: 0.3; transform: translateX(-3px); }\n                }\n                .fe-hand-blink {\n                    display: inline-block;\n                    animation: fe-hand-blink 1s infinite;\n                    font-weight: bold;\n                    color: #dfc299;\n                    margin-right: 6px;\n                }\n\n                /* JRPG 经典战斗指令菜单按钮 (Fire Emblem) */\n                .fe-cmd-btn {\n                    background: linear-gradient(180deg, #16223f 0%, #0d162b 100%) !important;\n                    border: 1px solid #b89668 !important;\n                    color: #eae3d2 !important;\n                    padding: 8px 14px;\n                    border-radius: 4px;\n                    font-weight: bold;\n                    font-family: monospace;\n                    cursor: pointer;\n                    display: inline-flex;\n                    align-items: center;\n                    justify-content: center;\n                    gap: 6px;\n                    transition: all 0.2s ease;\n                    box-shadow: 0 2px 6px rgba(0,0,0,0.4);\n                    user-select: none;\n                    -webkit-tap-highlight-color: transparent;\n                }\n                .fe-cmd-btn:hover:not(:disabled) {\n                    background: linear-gradient(180deg, #22345e 0%, #132240 100%) !important;\n                    border-color: #dfc299 !important;\n                    color: #f3d29a !important;\n                }\n                .fe-cmd-btn:active:not(:disabled) {\n                    transform: translate(1px, 1px);\n                    box-shadow: 0 1px 2px rgba(0,0,0,0.4);\n                }\n                .fe-cmd-btn:disabled {\n                    opacity: 0.35;\n                    cursor: not-allowed;\n                    border-color: #1a2238 !important;\n                }\n\n                /* JRPG 下拉框 */\n                .fe-select {\n                    width: 100%;\n                    padding: 10px;\n                    font-size: 14px;\n                    border: 1px solid #b89668 !important;\n                    border-radius: 4px;\n                    background: #090e17 !important;\n                    color: #eae3d2 !important;\n                    font-family: monospace;\n                    outline: none !important;\n                    box-shadow: inset 0 1px 4px rgba(0,0,0,0.5) !important;\n                    -webkit-appearance: none;\n                    appearance: none;\n                }\n                .fe-select:focus {\n                    border-color: #dfc299 !important;\n                }\n\n                /* JRPG 极细皇家滑块（短剑） */\n                .fe-range-slider {\n                    -webkit-appearance: none;\n                    width: 100%;\n                    height: 8px;\n                    background: #060913 !important;\n                    border: 1px solid rgba(184, 150, 104, 0.4) !important;\n                    border-radius: 4px;\n                    outline: none;\n                }\n                .fe-range-slider::-webkit-slider-thumb {\n                    -webkit-appearance: none;\n                    appearance: none;\n                    width: 24px;\n                    height: 24px;\n                    background: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M12 2l3 6h-2v10h2.5l-.5 2h-2v2h-1v-2h-2l-.5-2H11V8H9l3-6z\" fill=\"%23dfc299\" stroke=\"%23b89668\" stroke-width=\"1.5\"/></svg>') no-repeat center;\n                    background-size: contain;\n                    cursor: pointer;\n                    border: none;\n                }\n                .fe-range-slider::-moz-range-thumb {\n                    width: 24px;\n                    height: 24px;\n                    background: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M12 2l3 6h-2v10h2.5l-.5 2h-2v2h-1v-2h-2l-.5-2H11V8H9l3-6z\" fill=\"%23dfc299\" stroke=\"%23b89668\" stroke-width=\"1.5\"/></svg>') no-repeat center;\n                    background-size: contain;\n                    cursor: pointer;\n                    border: none;\n                }\n\n                /* 火纹经典双白金/苍蓝经验槽 */\n                .fe-stat-bar-container {\n                    width: 100%;\n                    height: 10px;\n                    background: #060913;\n                    border: 1px solid rgba(184, 150, 104, 0.4);\n                    border-radius: 2px;\n                    overflow: hidden;\n                }\n                .fe-stat-bar-fill {\n                    height: 100%;\n                    background: linear-gradient(90deg, #4ade80 0%, #00f0ff 100%);\n                    transition: width 0.3s ease;\n                }\n            "
      }), t.jsxs("div", {
        "data-apk-safe-top": true,
        style: {
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "#090e17",
          borderBottom: "1px solid #b89668",
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)"
        },
        children: [t.jsx("button", {
          onClick: () => p("home-screen"),
          style: {
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center"
          },
          children: t.jsx(Sm, {})
        }), t.jsxs("div", {
          style: {
            fontSize: 17,
            fontWeight: 700,
            color: "#eae3d2",
            fontFamily: "monospace",
            display: "flex",
            alignItems: "center",
            gap: 8
          },
          children: [g("petManagerTitle", "桌宠管家"), " ", t.jsx("span", {
            className: "fe-highlight-yellow",
            children: "[控制台]"
          })]
        })]
      }), t.jsxs("div", {
        style: {
          padding: "16px",
          maxWidth: 640,
          margin: "0 auto"
        },
        children: [I && t.jsxs("div", {
          className: "fe-dialog-box",
          style: {
            marginBottom: 16,
            border: "1px solid #f87171",
            fontSize: 13,
            lineHeight: 1.6
          },
          children: [t.jsxs("div", {
            style: {
              fontWeight: "bold",
              color: "#f87171",
              marginBottom: 6,
              display: "flex",
              alignItems: "center",
              gap: 6
            },
            children: [t.jsx(wm, {}), " [ ⚠️ 结界警告：Web / PWA 调试模式 ]"]
          }), "真实桌宠仅在 Android APK 容器内生效。", t.jsx("br", {}), "当前环境下修改的配置会同步保存，但无法在屏幕上召唤实体桌宠。", t.jsx("br", {}), "建议安装 Android 客户端体验完整召唤魔法。"]
        }), (b || B()) && t.jsxs("div", {
          className: "fe-dialog-box",
          style: {
            marginBottom: 16
          },
          children: [t.jsxs("div", {
            style: {
              display: "flex",
              gap: 16,
              alignItems: "center",
              marginBottom: 12
            },
            children: [t.jsxs("div", {
              style: {
                position: "relative",
                display: "inline-flex",
                padding: 2,
                background: "#090e17",
                border: "2px solid #b89668",
                borderRadius: 4
              },
              children: [t.jsx("img", {
                src: S.avatarMode === "custom" && S.customAvatar ? S.customAvatar : ((n = oe()) == null ? undefined : n.image) || "",
                alt: "头像",
                style: {
                  width: 60,
                  height: 60,
                  borderRadius: 2,
                  objectFit: "cover",
                  transform: k ? "scale(1)" : "scale(0.95)",
                  filter: k ? "none" : "grayscale(60%)",
                  transition: "all 0.3s ease"
                }
              }), k && t.jsx("div", {
                style: {
                  position: "absolute",
                  top: -3,
                  right: -3,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#4ade80",
                  border: "1px solid #ffffff",
                  boxShadow: "0 0 8px #4ade80"
                }
              })]
            }), t.jsxs("div", {
              style: {
                flex: 1,
                fontFamily: "monospace"
              },
              children: [t.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: 4
                },
                children: [t.jsx("span", {
                  style: {
                    fontSize: 17,
                    fontWeight: "bold",
                    color: "#eae3d2"
                  },
                  children: ((a = oe()) == null ? undefined : a.name) || "桌宠未绑定"
                }), t.jsxs("span", {
                  className: "fe-highlight-yellow",
                  style: {
                    fontSize: 13,
                    fontWeight: "bold"
                  },
                  children: ["LV.", oe() ? ((o = oe()) == null ? undefined : o.intimacy) ? Math.min(99, Math.max(1, parseInt(oe().intimacy))) : 88 : 99]
                })]
              }), t.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 12,
                  color: "#8e9aa8"
                },
                children: [t.jsx("span", {
                  children: "STATUS:"
                }), B() ? t.jsx("span", {
                  className: K ? "fe-highlight-green" : "fe-highlight-gold",
                  style: {
                    fontWeight: "bold",
                    letterSpacing: 0.5
                  },
                  children: K ? "[ ACTIVE · 灵动岛现身 ]" : "[ SLEEPING · 沉睡中 ]"
                }) : t.jsx("span", {
                  className: C ? k ? "fe-highlight-green" : "fe-highlight-gold" : "fe-highlight-red",
                  style: {
                    fontWeight: "bold",
                    letterSpacing: 0.5
                  },
                  children: C ? k ? "[ ACTIVE · 现世召唤 ]" : "[ SLEEPING · 沉睡中 ]" : "[ SEALED · 结界封印 ]"
                })]
              })]
            })]
          }), t.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: 8,
              borderTop: "1px solid rgba(184, 150, 104, 0.25)",
              paddingTop: 10
            },
            children: [t.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 12,
                fontFamily: "monospace"
              },
              children: [t.jsx("span", {
                style: {
                  width: 24,
                  fontWeight: "bold",
                  color: "#f87171"
                },
                children: "HP"
              }), t.jsx("div", {
                className: "fe-stat-bar-container",
                style: {
                  flex: 1
                },
                children: t.jsx("div", {
                  className: "fe-stat-bar-fill",
                  style: {
                    width: ((B() ? K : k) ? 100 : S.enabled ? 30 : 0) + "%",
                    background: (B() ? K : k) ? "linear-gradient(90deg, #4ade80 0%, #22c55e 100%)" : "linear-gradient(90deg, #f87171 0%, #ea580c 100%)"
                  }
                })
              }), t.jsx("span", {
                style: {
                  width: 56,
                  textAlign: "right",
                  fontSize: 11,
                  color: "#8e9aa8"
                },
                children: (B() ? K : k) ? "100/100" : S.enabled ? "30/100" : "0/100"
              })]
            }), t.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 12,
                fontFamily: "monospace"
              },
              children: [t.jsx("span", {
                style: {
                  width: 24,
                  fontWeight: "bold",
                  color: "#60a5fa"
                },
                children: "MP"
              }), t.jsx("div", {
                className: "fe-stat-bar-container",
                style: {
                  flex: 1
                },
                children: t.jsx("div", {
                  className: "fe-stat-bar-fill",
                  style: {
                    width: (S.chatterFrequency === "frequent" ? 100 : S.chatterFrequency === "normal" ? 50 : S.chatterFrequency === "rare" ? 15 : 0) + "%",
                    background: "linear-gradient(90deg, #60a5fa 0%, #1d4ed8 100%)"
                  }
                })
              }), t.jsx("span", {
                style: {
                  width: 56,
                  textAlign: "right",
                  fontSize: 11,
                  color: "#8e9aa8"
                },
                children: S.chatterFrequency === "frequent" ? "99/99" : S.chatterFrequency === "normal" ? "50/99" : S.chatterFrequency === "rare" ? "15/99" : "0/99"
              })]
            })]
          }), t.jsxs("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "10px 16px",
              marginTop: 12,
              borderTop: "1px dashed rgba(184, 150, 104, 0.25)",
              paddingTop: 12
            },
            children: [t.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                fontSize: 12,
                fontFamily: "monospace"
              },
              children: [t.jsx("span", {
                style: {
                  color: "#dfc299"
                },
                children: "ATK (台词储备)"
              }), t.jsx("span", {
                style: {
                  fontWeight: "bold",
                  color: "#eae3d2"
                },
                children: ((r = S.lineList) == null ? undefined : r.length) || 15
              })]
            }), t.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                fontSize: 12,
                fontFamily: "monospace"
              },
              children: [t.jsx("span", {
                style: {
                  color: "#dfc299"
                },
                children: "SPD (发言速度)"
              }), t.jsx("span", {
                style: {
                  fontWeight: "bold",
                  color: "#eae3d2"
                },
                children: S.chatterFrequency === "frequent" ? "FAST" : S.chatterFrequency === "normal" ? "MID" : S.chatterFrequency === "rare" ? "SLOW" : "OFF"
              })]
            }), t.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                fontSize: 12,
                fontFamily: "monospace"
              },
              children: [t.jsx("span", {
                style: {
                  color: "#dfc299"
                },
                children: "INT (朗读魔商)"
              }), t.jsx("span", {
                style: {
                  fontWeight: "bold",
                  color: S.ttsEnabled ? "#4ade80" : "#8e9aa8"
                },
                children: S.ttsEnabled ? "99" : "--"
              })]
            }), t.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                fontSize: 12,
                fontFamily: "monospace"
              },
              children: [t.jsx("span", {
                style: {
                  color: "#dfc299"
                },
                children: "LCK (窥屏幸运)"
              }), t.jsx("span", {
                style: {
                  fontWeight: "bold",
                  color: S.screenshotEnabled ? "#f3d29a" : "#8e9aa8"
                },
                children: S.screenshotEnabled ? "MAX" : "--"
              })]
            })]
          }), B() && t.jsxs("div", {
            style: {
              marginTop: 14,
              borderTop: "1px dashed rgba(184,150,104,0.25)",
              paddingTop: 12
            },
            children: [t.jsx("div", {
              style: {
                display: "flex",
                gap: 10,
                justifyContent: "center"
              },
              children: [{
                key: "feed",
                emoji: "🍰",
                label: "喂食"
              }, {
                key: "bath",
                emoji: "🛁",
                label: "洗澡"
              }, {
                key: "hug",
                emoji: "🤗",
                label: "抱抱"
              }].map(e => t.jsxs("button", {
                onClick: () => (async e => {
                  var t;
                  var n;
                  if (X) {
                    return;
                  }
                  const a = oe();
                  if (a) {
                    Z(true);
                    try {
                      const {
                        applyInteraction: r
                      } = await m(async () => {
                        const {
                          applyInteraction: e
                        } = await import("./petCare-3692o74Q.js");
                        return {
                          applyInteraction: e
                        };
                      }, __vite__mapDeps([11, 2, 6, 3, 4]));
                      const i = await r(a.id, e);
                      const s = {
                        feed: "喂食",
                        bath: "洗澡",
                        hug: "抱抱"
                      };
                      const l = (t = S.carePools) == null ? undefined : t[e];
                      const c = {
                        feed: `${a.name}吃得很满足~`,
                        bath: `${a.name}洗得香喷喷的~`,
                        hug: `${a.name}被抱住了,脸有点红~`
                      };
                      const d = Array.isArray(l) && l.length ? l[Math.floor(Math.random() * l.length)] : c[e];
                      te(`💗 ${d}\n(饱食 ${i.hunger} · 心情 ${i.mood} · 好感 ${i.intimacy})`);
                      try {
                        const t = await m(() => import("./iosLiveActivity-Boe9JJRO.js"), __vite__mapDeps([33, 2, 6, 3, 4]));
                        const r = ((n = S.stateImages) == null ? undefined : n[e]) || re();
                        let l = r;
                        if (r) {
                          try {
                            const {
                              compressImageForStorage: e
                            } = await m(async () => {
                              const {
                                compressImageForStorage: e
                              } = await import("./imageCompressor-FPWVE1FW.js");
                              return {
                                compressImageForStorage: e
                              };
                            }, []);
                            l = await e(r, {
                              maxDim: 320
                            });
                          } catch (o) {}
                        }
                        if (l) {
                          await t.writePetAvatarToAppGroup(l);
                        }
                        await t.updatePetLiveActivity({
                          line: d,
                          status: `${s[e]}中~`,
                          hunger: i.hunger,
                          mood: i.mood,
                          intimacy: i.intimacy
                        });
                        let c = localStorage.getItem("nuojiji_install_time");
                        if (!c) {
                          c = String(Date.now() - 432000000);
                          localStorage.setItem("nuojiji_install_time", c);
                        }
                        const u = Math.max(1, Math.floor((Date.now() - Number(c)) / 86400000));
                        const p = i.interactionCount || 0;
                        await t.updatePetWidget({
                          name: a.name,
                          line: d,
                          status: `${s[e]}中~`,
                          hunger: i.hunger,
                          mood: i.mood,
                          intimacy: i.intimacy,
                          stateKey: e,
                          daysTogether: u,
                          interactionCount: p
                        });
                      } catch (o) {}
                    } catch (Hm) {
                      te("互动失败:" + ((Hm == null ? undefined : Hm.message) || Hm));
                    } finally {
                      Z(false);
                    }
                  } else {
                    te("请先绑定一个角色");
                  }
                })(e.key),
                disabled: X,
                className: "fe-cmd-btn",
                style: {
                  fontSize: 13,
                  padding: "8px 14px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  opacity: X ? 0.5 : 1
                },
                children: [t.jsx("span", {
                  style: {
                    fontSize: 18
                  },
                  children: e.emoji
                }), e.label]
              }, e.key))
            }), ee && t.jsx("div", {
              style: {
                marginTop: 10,
                fontSize: 13,
                color: "#f3d29a",
                textAlign: "center",
                lineHeight: 1.5,
                background: "rgba(243,210,154,0.08)",
                padding: "8px 10px",
                borderRadius: 8
              },
              children: ee
            })]
          }), x && !x.viewAttached && S.enabled && t.jsxs("div", {
            className: "fe-dialog-box",
            style: {
              marginTop: 12,
              border: "1px solid #f87171",
              fontSize: 12,
              lineHeight: 1.5,
              background: "#090e17"
            },
            children: [t.jsxs("div", {
              style: {
                color: "#f87171",
                fontWeight: "bold",
                marginBottom: 6,
                display: "flex",
                alignItems: "center",
                gap: 6
              },
              children: [t.jsx(wm, {}), " ", t.jsx("span", {
                children: "⚠️ [ 唤醒受阻：魔法召唤法阵被系统拦截 ]"
              })]
            }), t.jsx("div", {
              style: {
                color: "#8e9aa8",
                marginBottom: 8
              },
              children: x.serviceRunning ? "Service 已启动，但桌面悬浮视窗被系统拦截。" : "Service 未启动。多因未授于悬浮窗权限或后台保活受限。"
            }), t.jsxs("div", {
              style: {
                fontSize: 11,
                fontFamily: "monospace",
                color: "#52627a",
                marginBottom: 8
              },
              children: ["AV: ", String(x.available), " | SRV: ", String(x.serviceRunning), " | VW: ", String(x.viewAttached)]
            }), S.hideInApp && t.jsx("div", {
              style: {
                marginBottom: 10,
                padding: "6px 8px",
                background: "#131e33",
                border: "1px solid #dfc299",
                borderRadius: 2,
                color: "#f3d29a"
              },
              children: "* 「隐蔽斗篷」已开启 — 桌宠只在切回桌面时现身。"
            }), t.jsxs("div", {
              style: {
                display: "flex",
                gap: 6,
                flexWrap: "wrap"
              },
              children: [t.jsx("button", {
                onClick: async () => {
                  try {
                    await Au.openAppSettings();
                  } catch (e) {}
                },
                className: "fe-cmd-btn",
                style: {
                  fontSize: 11,
                  padding: "4px 8px"
                },
                children: "打开系统设置"
              }), t.jsx("button", {
                onClick: async () => {
                  try {
                    const e = await Au.openAutoStartSettings();
                    if (!(e == null ? undefined : e.opened)) {
                      Rn("未能跳转，请手动在手机设置中开启「自启动」与「后台高能耗允许」");
                    }
                  } catch (e) {}
                },
                className: "fe-cmd-btn",
                style: {
                  fontSize: 11,
                  padding: "4px 8px"
                },
                children: "跳自启动管理"
              }), t.jsx("button", {
                onClick: async () => {
                  try {
                    await Au.hide();
                  } catch (e) {}
                  await new Promise(e => setTimeout(e, 200));
                  try {
                    window.dispatchEvent(new CustomEvent("nuojiji:desktop-pet-config-updated", {
                      detail: S
                    }));
                  } catch (e) {}
                },
                className: "fe-cmd-btn",
                style: {
                  fontSize: 11,
                  padding: "4px 8px"
                },
                children: "重试唤醒"
              }), t.jsx("button", {
                onClick: async () => {
                  try {
                    const e = S.avatarMode === "custom" && S.customAvatar;
                    let t = "";
                    let n = "?";
                    if (e) {
                      t = S.customAvatar;
                      n = "桌宠";
                    } else {
                      const e = oe();
                      t = (e == null ? undefined : e.image) || "";
                      n = (e == null ? undefined : e.name) || "?";
                    }
                    await Au.hide();
                    await new Promise(e => setTimeout(e, 100));
                    const a = await Au.show({
                      avatarUrl: t,
                      name: n,
                      size: S.size || 120,
                      circleClip: !e,
                      hideInApp: false
                    });
                    if ((a == null ? undefined : a.reason) === "avatar-too-large") {
                      Rn(`❌ 头像文件太大 (${a.avatarSizeKb} KB)\n安卓限制不能超过 800 KB，请更换静态图或更小的 GIF`);
                      return;
                    }
                    Rn(`诊断状态：\nSuccess: ${a == null ? undefined : a.success}\nServiceRunning: ${a == null ? undefined : a.serviceRunning}\nViewAttached: ${a == null ? undefined : a.viewAttached}\n\n如仍未显示，请检查厂商自带手机管家的悬浮窗开关。`);
                  } catch (Hm) {
                    Rn("强制召唤失败: " + ((Hm == null ? undefined : Hm.message) || Hm));
                  }
                },
                className: "fe-cmd-btn",
                style: {
                  fontSize: 11,
                  padding: "4px 8px",
                  borderColor: "#4ade80",
                  color: "#4ade80"
                },
                children: "强制立即召唤"
              })]
            })]
          }), b && !C && t.jsxs("div", {
            style: {
              marginTop: 12,
              display: "flex",
              flexDirection: "column",
              gap: 8
            },
            children: [t.jsx("div", {
              style: {
                fontSize: 12,
                color: "#f87171",
                fontWeight: "bold"
              },
              children: "結界警告：桌宠被系统阻隔(未授予悬浮窗权限)，无法进入现世！"
            }), t.jsxs("button", {
              onClick: async () => {
                try {
                  await Au.requestPermission();
                } catch (e) {}
              },
              className: "fe-cmd-btn",
              style: {
                background: "linear-gradient(180deg, #7f1d1d 0%, #450a0a 100%)",
                borderColor: "#f87171",
                width: "fit-content"
              },
              children: [t.jsx(Sm, {}), " 解除封印 (授予权限)"]
            })]
          })]
        }), b && S.enabled && C && !k && (z == null ? undefined : z.isCnRom) && t.jsxs("div", {
          className: "fe-dialog-box",
          style: {
            marginBottom: 16
          },
          children: [t.jsxs("div", {
            style: {
              fontWeight: "bold",
              color: "#f3d29a",
              fontSize: 14,
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              gap: 6
            },
            children: [t.jsx(pm, {}), " [ 主线任务：解除 ", z.manufacturer, " 功耗封印 ]"]
          }), t.jsx("div", {
            style: {
              marginBottom: 12,
              color: "#8e9aa8",
              fontSize: 13,
              lineHeight: 1.5
            },
            children: "检测到您使用的是国产定制系统，需要手动在手机系统深处，允许糯叽机在后台自由行进："
          }), t.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: 8,
              marginBottom: 12
            },
            children: [t.jsx(mm, {
              romName: "vivo",
              label: "支线任务 Ⅰ [ 融化 VIVO 功耗屏障 ]",
              activeRom: ce,
              setActiveRom: de,
              children: t.jsxs("ul", {
                style: {
                  paddingLeft: 18,
                  margin: 0,
                  listStyleType: "square",
                  fontSize: 12,
                  color: "#eae3d2",
                  lineHeight: 1.6
                },
                children: [t.jsxs("li", {
                  children: ["主线 1：设置 → 应用 → Nuojiji → 权限 → 开启「", t.jsx("b", {
                    children: "悬浮窗"
                  }), "」"]
                }), t.jsxs("li", {
                  children: ["支线 2：设置 → 应用 → Nuojiji → 「", t.jsx("b", {
                    children: "后台耗电"
                  }), "」改成「允许高能耗允许」"]
                }), t.jsxs("li", {
                  children: ["支线 3：i 管家 → 应用管理 → Nuojiji → 允许「", t.jsx("b", {
                    children: "自启动"
                  }), "」与「", t.jsx("b", {
                    children: "关联启动"
                  }), "」"]
                })]
              })
            }), t.jsx(mm, {
              romName: "xiaomi",
              label: "支线任务 Ⅱ [ 斩断 XIAOMI 省电枷锁 ]",
              activeRom: ce,
              setActiveRom: de,
              children: t.jsxs("ul", {
                style: {
                  paddingLeft: 18,
                  margin: 0,
                  listStyleType: "square",
                  fontSize: 12,
                  color: "#eae3d2",
                  lineHeight: 1.6
                },
                children: [t.jsxs("li", {
                  children: ["主线 1：设置 → 应用设置 → Nuojiji → 开启「", t.jsx("b", {
                    children: "显示悬浮窗"
                  }), "」"]
                }), t.jsxs("li", {
                  children: ["支线 2：设置 → 应用设置 → Nuojiji → 开启「", t.jsx("b", {
                    children: "后台弹出界面"
                  }), "」"]
                }), t.jsxs("li", {
                  children: ["支线 3：设置 → 电池 → 应用智能省电 → Nuojiji → 修改为「", t.jsx("b", {
                    children: "无限制"
                  }), "」"]
                })]
              })
            }), t.jsx(mm, {
              romName: "huawei",
              label: "支线任务 Ⅲ [ 破除 HUAWEI 启动禁锢 ]",
              activeRom: ce,
              setActiveRom: de,
              children: t.jsxs("ul", {
                style: {
                  paddingLeft: 18,
                  margin: 0,
                  listStyleType: "square",
                  fontSize: 12,
                  color: "#eae3d2",
                  lineHeight: 1.6
                },
                children: [t.jsxs("li", {
                  children: ["主线 1：设置 → 应用 → Nuojiji → 权限 → 开启「", t.jsx("b", {
                    children: "悬浮窗"
                  }), "」"]
                }), t.jsx("li", {
                  children: "支线 2：设置 → 电池 → 启动管理 → Nuojiji → 改为「手动管理」并全部允许"
                })]
              })
            }), t.jsx(mm, {
              romName: "oppo",
              label: "支线任务 Ⅳ [ 启封 OPPO 后台限制 ]",
              activeRom: ce,
              setActiveRom: de,
              children: t.jsxs("ul", {
                style: {
                  paddingLeft: 18,
                  margin: 0,
                  listStyleType: "square",
                  fontSize: 12,
                  color: "#eae3d2",
                  lineHeight: 1.6
                },
                children: [t.jsxs("li", {
                  children: ["主线 1：设置 → 应用管理 → Nuojiji → 权限 → 开启「", t.jsx("b", {
                    children: "悬浮窗"
                  }), "」"]
                }), t.jsxs("li", {
                  children: ["支线 2：设置 → 电池 → 应用耗电管理 → Nuojiji → 允许「", t.jsx("b", {
                    children: "后台运行"
                  }), "」"]
                })]
              })
            }), t.jsx(mm, {
              romName: "oneplus",
              label: "支线任务 Ⅴ [ 融解 ONEPLUS 电池优化 ]",
              activeRom: ce,
              setActiveRom: de,
              children: t.jsxs("ul", {
                style: {
                  paddingLeft: 18,
                  margin: 0,
                  listStyleType: "square",
                  fontSize: 12,
                  color: "#eae3d2",
                  lineHeight: 1.6
                },
                children: [t.jsxs("li", {
                  children: ["主线 1：设置 → 应用 → Nuojiji → 权限 → 「", t.jsx("b", {
                    children: "显示在其他应用上层"
                  }), "」"]
                }), t.jsxs("li", {
                  children: ["支线 2：设置 → 电池 → 电池优化 → Nuojiji → 修改为「", t.jsx("b", {
                    children: "不优化"
                  }), "」"]
                })]
              })
            })]
          }), t.jsxs("button", {
            onClick: async () => {
              try {
                await Au.openAppSettings();
              } catch (e) {}
            },
            className: "fe-cmd-btn",
            style: {
              borderColor: "#dfc299",
              color: "#f3d29a",
              width: "100%"
            },
            children: [t.jsx(Sm, {}), " 前往执行指令 (打开应用设置)"]
          })]
        }), B() ? t.jsxs(rm, {
          title: "主召唤器 (Weapon)",
          icon: t.jsx(pm, {}),
          children: [t.jsx(im, {
            label: "开启真桌宠召唤",
            children: t.jsx(dm, {
              checked: K,
              onChange: se,
              disabled: J
            })
          }), t.jsxs(sm, {
            children: [J ? "处理中…" : `开启后 ${((i = oe()) == null ? undefined : i.name) || "桌宠"} 直接钉上灵动岛 + 锁屏(头像+台词,点击跳聊天)。开过一次后,以后进 app 自动上岛。`, t.jsx("br", {}), "iOS 限制:约 8–12 小时后系统自动收回(次日再开)。需在「设置→糯嘰機→实时活动」开启。 动画帧图/待机通知见下方面板。"]
          }), t.jsx(im, {
            label: "灵动岛右侧显示",
            children: t.jsx(dm, {
              checked: !!S.iosLiveShowDualAvatar,
              onChange: e => ae("iosLiveShowDualAvatar", e)
            })
          }), t.jsx(sm, {
            children: "关 → 显示状态栏(状态词 + 好感/开心/饱食)。开 → 显示双头像(左桌宠 ♥ 右你的头像),像情侣牌。切换后重新召唤一次生效。"
          }), S.iosLiveShowDualAvatar && t.jsxs(t.Fragment, {
            children: [t.jsx(im, {
              label: "右侧头像",
              children: t.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 8
                },
                children: [t.jsx("img", {
                  src: S.iosLiveUserAvatar || (y == null ? undefined : y.avatar) || (y == null ? undefined : y.image) || "",
                  alt: "右侧头像",
                  style: {
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    objectFit: "cover",
                    border: "1px solid rgba(184,150,104,0.3)",
                    background: "#090e17"
                  }
                }), t.jsx("button", {
                  onClick: () => {
                    O("__iosLiveUser__");
                    $(true);
                  },
                  className: "fe-cmd-btn",
                  style: {
                    fontSize: 12,
                    padding: "5px 10px"
                  },
                  children: S.iosLiveUserAvatar ? "换图" : "上传"
                }), S.iosLiveUserAvatar && t.jsx("button", {
                  onClick: () => ne({
                    ...S,
                    iosLiveUserAvatar: null
                  }),
                  style: {
                    background: "none",
                    border: "none",
                    color: "#f87171",
                    fontSize: 12,
                    cursor: "pointer"
                  },
                  children: "用默认"
                })]
              })
            }), t.jsx(sm, {
              children: "默认用桌宠绑定的「你」的头像。可上传自定义图(如和桌宠的合照、你的立绘)。"
            })]
          }), !S.iosLiveShowDualAvatar && t.jsxs(t.Fragment, {
            children: [t.jsx(im, {
              label: "状态词(灵动岛右上)",
              children: t.jsx("input", {
                type: "text",
                value: S.iosLiveCustomStatus || "",
                placeholder: "留空=按状态(在线/睡觉/工作…)",
                onChange: e => ae("iosLiveCustomStatus", e.target.value),
                className: "fe-input",
                style: {
                  fontSize: 12.5,
                  padding: "5px 8px",
                  width: 160
                },
                maxLength: 10
              })
            }), t.jsx(sm, {
              children: "留空 → 自动按桌宠状态显示(在线/💤睡觉/💼工作/🍚饿了/😊开心)。填了 → 固定显示你的文案(可放 emoji,如「想你 ♡」「呆呆」),上限 10 字。"
            })]
          }), t.jsx(im, {
            label: "锁屏背景图",
            children: t.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 8
              },
              children: [S.iosLiveBgImage && t.jsx("img", {
                src: S.iosLiveBgImage,
                alt: "背景",
                style: {
                  width: 48,
                  height: 28,
                  borderRadius: 6,
                  objectFit: "cover",
                  border: "1px solid rgba(184,150,104,0.3)"
                }
              }), t.jsx("button", {
                onClick: () => {
                  O("__iosLiveBg__");
                  $(true);
                },
                className: "fe-cmd-btn",
                style: {
                  fontSize: 12,
                  padding: "5px 10px"
                },
                children: S.iosLiveBgImage ? "换图" : "上传"
              }), S.iosLiveBgImage && t.jsx("button", {
                onClick: () => ne({
                  ...S,
                  iosLiveBgImage: null
                }),
                style: {
                  background: "none",
                  border: "none",
                  color: "#f87171",
                  fontSize: 12,
                  cursor: "pointer"
                },
                children: "移除"
              })]
            })
          }), t.jsx(sm, {
            children: "给灵动岛/锁屏的桌宠面板铺张背景图(替代黑底,会自动压暗保证文字清晰)。上传后重新召唤一次生效。锁屏横幅效果最明显。"
          }), t.jsx(im, {
            label: "大组件房间背景图",
            children: t.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 8
              },
              children: [S.iosRoomBgImage && t.jsx("img", {
                src: S.iosRoomBgImage,
                alt: "房间",
                style: {
                  width: 40,
                  height: 40,
                  borderRadius: 6,
                  objectFit: "cover",
                  border: "1px solid rgba(184,150,104,0.3)"
                }
              }), t.jsx("button", {
                onClick: () => {
                  O("__iosRoomBg__");
                  $(true);
                },
                className: "fe-cmd-btn",
                style: {
                  fontSize: 12,
                  padding: "5px 10px"
                },
                children: S.iosRoomBgImage ? "换图" : "上传"
              }), S.iosRoomBgImage && t.jsx("button", {
                onClick: () => ne({
                  ...S,
                  iosRoomBgImage: null
                }),
                style: {
                  background: "none",
                  border: "none",
                  color: "#f87171",
                  fontSize: 12,
                  cursor: "pointer"
                },
                children: "移除"
              })]
            })
          }), t.jsx(sm, {
            children: "桌面长按加「糯嘰機」大尺寸组件 → 桌宠站在你上传的房间里,按状态(睡觉/工作/开心)站不同位置,定时换位。建议用方形房间图。"
          }), t.jsx("div", {
            style: {
              padding: "4px 16px 10px"
            },
            children: t.jsx("button", {
              onClick: async () => {
                var e;
                window.alert("探测开始…");
                const t = [];
                const n = (e, t, n) => Promise.race([e, new Promise((e, a) => setTimeout(() => a(new Error(n + " 超时")), t))]);
                try {
                  const {
                    Capacitor: a,
                    registerPlugin: o
                  } = await m(async () => {
                    const {
                      Capacitor: e,
                      registerPlugin: t
                    } = await Promise.resolve().then(() => Xs);
                    return {
                      Capacitor: e,
                      registerPlugin: t
                    };
                  }, undefined);
                  t.push("platform=" + (((e = a == null ? undefined : a.getPlatform) == null ? undefined : e.call(a)) || "?"));
                  try {
                    const e = Object.keys((a == null ? undefined : a.Plugins) || {});
                    t.push("已注册插件: " + e.join(","));
                    t.push("LiveActivity 在? " + e.includes("LiveActivity"));
                  } catch (Hm) {
                    t.push("列插件失败:" + (Hm == null ? undefined : Hm.message));
                  }
                  const r = o("LiveActivity");
                  try {
                    const e = await n(r.isRunning(), 3000, "isRunning");
                    t.push("isRunning() = " + JSON.stringify(e));
                  } catch (Hm) {
                    t.push("isRunning 失败:" + (Hm == null ? undefined : Hm.message));
                  }
                  const i = oe();
                  t.push("char=" + ((i == null ? undefined : i.name) || "无"));
                  try {
                    const e = await n(r.start({
                      charName: (i == null ? undefined : i.name) || "桌宠",
                      charId: String((i == null ? undefined : i.id) || ""),
                      userId: "",
                      avatarBase64: "",
                      line: "测试上岛",
                      status: "在线",
                      frames: []
                    }), 5000, "start");
                    t.push("start() = " + JSON.stringify(e));
                  } catch (Hm) {
                    t.push("start 失败/超时:" + (Hm == null ? undefined : Hm.message));
                  }
                  try {
                    const e = await n(r.readDiag(), 3000, "readDiag");
                    t.push("readDiag = " + JSON.stringify(e).slice(0, 400));
                  } catch (Hm) {
                    t.push("readDiag 失败:" + (Hm == null ? undefined : Hm.message));
                  }
                  try {
                    const e = await n(r.isRunning(), 3000, "isRunning2");
                    t.push("start后 isRunning = " + JSON.stringify(e));
                  } catch (Hm) {
                    t.push("isRunning2 失败:" + (Hm == null ? undefined : Hm.message));
                  }
                } catch (Hm) {
                  t.push("总异常:" + ((Hm == null ? undefined : Hm.message) || Hm));
                }
                window.alert("[灵动岛插件探测]\n\n" + t.join("\n"));
              },
              className: "fe-cmd-btn",
              style: {
                fontSize: 12,
                padding: "6px 10px",
                borderColor: "#dfc299",
                color: "#f3d29a"
              },
              children: "🔍 探测插件 + 直接召唤测试"
            })
          })]
        }) : t.jsxs(t.Fragment, {
          children: [t.jsxs(rm, {
            title: "主召唤器 (Weapon)",
            icon: t.jsx(pm, {}),
            children: [t.jsx(im, {
              label: "开启真桌宠召唤",
              children: t.jsx(dm, {
                checked: S.enabled,
                onChange: e => ae("enabled", e)
              })
            }), t.jsx(sm, {
              children: "激活此召唤后，绑定桌宠将以悬浮姿态在屏幕上召唤现身"
            })]
          }), t.jsxs(rm, {
            title: "隐蔽斗篷 (Accessory)",
            icon: t.jsx(hm, {}),
            children: [t.jsx(im, {
              label: "App 内自动隐蔽",
              children: t.jsx(dm, {
                checked: S.hideInApp,
                onChange: e => ae("hideInApp", e)
              })
            }), t.jsx(sm, {
              children: "身处糯叽机大本营时自动隐藏身形，切回红尘（其他 App/桌面）时重新现身"
            })]
          })]
        }), t.jsxs(rm, {
          title: "契约魔戒 (Ring)",
          icon: t.jsx(fm, {}),
          children: [t.jsx(um, {
            name: "boundCharMode",
            value: "follow",
            current: S.boundCharId ? "locked" : "follow",
            onChange: () => ae("boundCharId", null),
            label: "跟随当前主角色",
            hint: "切换当前聊天的配偶/主角色时，桌宠的台词与契约自动实时改变(推荐)"
          }), t.jsx(um, {
            name: "boundCharMode",
            value: "locked",
            current: S.boundCharId ? "locked" : "follow",
            onChange: () => {
              if (!S.boundCharId && Array.isArray(f) && f.length > 0) {
                ae("boundCharId", f[0].id);
              }
            },
            label: "锁定到特定角色契约",
            hint: "无视当前主角色，桌宠永远绑定此角色的人设台词与灵魂"
          }), S.boundCharId && t.jsxs("div", {
            style: {
              padding: "8px 16px 16px 50px"
            },
            children: [t.jsxs("div", {
              style: {
                position: "relative",
                display: "flex",
                alignItems: "center"
              },
              children: [t.jsx("span", {
                style: {
                  position: "absolute",
                  left: -24,
                  display: "flex",
                  alignItems: "center"
                },
                children: t.jsx(Sm, {})
              }), t.jsx("select", {
                value: S.boundCharId || "",
                onChange: e => ae("boundCharId", e.target.value),
                className: "fe-select",
                children: Array.isArray(f) && f.map(e => t.jsx("option", {
                  value: e.id,
                  children: e.name
                }, e.id))
              })]
            }), Array.isArray(w) && w.length > 1 && t.jsxs("div", {
              style: {
                marginTop: 12
              },
              children: [t.jsx("div", {
                style: {
                  fontSize: 12,
                  color: "#b89668",
                  marginBottom: 6
                },
                children: "以谁的身份与之相会"
              }), t.jsxs("div", {
                style: {
                  position: "relative",
                  display: "flex",
                  alignItems: "center"
                },
                children: [t.jsx("span", {
                  style: {
                    position: "absolute",
                    left: -24,
                    display: "flex",
                    alignItems: "center"
                  },
                  children: t.jsx(Sm, {})
                }), t.jsxs("select", {
                  value: S.boundUserId || "",
                  onChange: e => ae("boundUserId", e.target.value || null),
                  className: "fe-select",
                  children: [t.jsx("option", {
                    value: "",
                    children: "自动 (当前用户优先)"
                  }), w.map(e => {
                    const n = e.uid || e.id;
                    return t.jsx("option", {
                      value: n,
                      children: e.name || n
                    }, n);
                  })]
                })]
              }), t.jsx("div", {
                style: {
                  fontSize: 11,
                  color: "#7a6a4d",
                  marginTop: 6,
                  lineHeight: 1.5
                },
                children: "点桌宠的「聊天」快捷时,会切到这个用户跟该角色的对话。 选「自动」则优先用当前用户;若当前用户没跟该角色聊过,自动找到有聊天记录的用户。"
              })]
            })]
          })]
        }), t.jsxs(rm, {
          title: "契约灵魂 (Soul)",
          children: [t.jsx(im, {
            label: "以真实角色身份交谈",
            children: t.jsx(dm, {
              checked: !!S.speakAsChar,
              onChange: e => ae("speakAsChar", e)
            })
          }), t.jsx(sm, {
            children: "开启后桌宠不再使用幼稚的萌宠口吻，而是绑定角色本人 — 读取最近聊天记录、亲密度与回忆交谈， 说的话会同步记录进聊天界面。下次打开聊天能完全续上这段屏幕陪伴的回忆。"
          })]
        }), t.jsxs(rm, {
          title: "幻化面具 (Helmet)",
          icon: t.jsx(gm, {}),
          children: [t.jsx(um, {
            name: "avatarMode",
            value: "follow-bound",
            current: S.avatarMode,
            onChange: e => ae("avatarMode", e),
            label: "使用绑定角色的法相",
            hint: "跟着上方「契约魔戒」绑定的角色头像一致"
          }), t.jsx(um, {
            name: "avatarMode",
            value: "follow-builtin-pet",
            current: S.avatarMode,
            onChange: e => ae("avatarMode", e),
            label: "使用糯叽机内置桌宠法相",
            hint: "和糯叽机客户端内的快捷浮窗小猫使用相同的法相，不用重新上传"
          }), t.jsx(um, {
            name: "avatarMode",
            value: "custom",
            current: S.avatarMode,
            onChange: e => ae("avatarMode", e),
            label: "自定义幻化法相",
            hint: "上传任意喜爱的图片(如精细 GIF/PNG/手绘)，台词依旧使用绑定角色人设"
          }), S.avatarMode === "custom" && t.jsxs("div", {
            style: {
              padding: "8px 0 12px 28px"
            },
            children: [S.customAvatar ? t.jsx("div", {
              style: {
                marginBottom: 8,
                display: "inline-flex",
                padding: 2,
                background: "#090e17",
                border: "1px solid #b89668",
                borderRadius: 4
              },
              children: t.jsx("img", {
                src: S.customAvatar,
                alt: "桌宠头像",
                style: {
                  width: 80,
                  height: 80,
                  borderRadius: 2,
                  objectFit: "cover"
                }
              })
            }) : null, t.jsx("div", {
              children: t.jsxs("button", {
                type: "button",
                onClick: () => $(true),
                className: "fe-cmd-btn",
                style: {
                  fontSize: 12,
                  padding: "6px 12px"
                },
                children: [t.jsx(Sm, {}), " ", S.customAvatar ? "重塑形象" : "上传法相"]
              })
            })]
          })]
        }), t.jsxs(rm, {
          title: "百态法相 (State Forms)",
          children: [t.jsx(sm, {
            children: "为不同状态各上传一张图(PNG/GIF),桌宠会随角色行程、作息、心情自动切换形象;喂食/洗澡/抱抱会在互动时短暂切到对应图。不配的状态自动回退到默认形象。"
          }), t.jsx("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 10,
              padding: "12px 16px"
            },
            children: om.map(e => {
              var n;
              const a = (n = S.stateImages) == null ? undefined : n[e.key];
              const o = e.key !== "normal" || a ? "" : re();
              return t.jsxs("div", {
                style: {
                  border: "1px solid rgba(184, 150, 104, 0.35)",
                  borderRadius: 8,
                  padding: 10,
                  background: "rgba(9, 14, 23, 0.5)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8
                },
                children: [t.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  },
                  children: [t.jsxs("span", {
                    style: {
                      fontSize: 13,
                      color: "#dfc299",
                      fontWeight: "bold"
                    },
                    children: [e.emoji, " ", e.label]
                  }), a && t.jsx("button", {
                    type: "button",
                    onClick: () => (e => {
                      if (!S.stateImages) {
                        return;
                      }
                      const t = {
                        ...S.stateImages
                      };
                      delete t[e];
                      const n = Object.keys(t).length > 0;
                      ne({
                        ...S,
                        stateImages: n ? t : null
                      });
                    })(e.key),
                    style: {
                      fontSize: 11,
                      color: "#e08a8a",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: "2px 4px"
                    },
                    children: "清除"
                  })]
                }), t.jsx("div", {
                  onClick: () => {
                    t = e.key;
                    O(t);
                    $(true);
                    return;
                    var t;
                  },
                  style: {
                    cursor: "pointer",
                    height: 84,
                    borderRadius: 6,
                    border: a ? "1px solid #b89668" : "1px dashed rgba(184, 150, 104, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#070b12",
                    overflow: "hidden"
                  },
                  children: a ? t.jsx("img", {
                    src: a,
                    alt: e.label,
                    style: {
                      width: "100%",
                      height: "100%",
                      objectFit: "contain"
                    }
                  }) : o ? t.jsxs("div", {
                    style: {
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    },
                    children: [t.jsx("img", {
                      src: o,
                      alt: "当前形象",
                      style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        opacity: 0.5
                      }
                    }), t.jsx("span", {
                      style: {
                        position: "absolute",
                        bottom: 3,
                        fontSize: 9,
                        color: "#9aa8bd",
                        background: "rgba(7,11,18,0.7)",
                        padding: "1px 5px",
                        borderRadius: 3
                      },
                      children: "当前形象 · 点击替换"
                    })]
                  }) : t.jsx("span", {
                    style: {
                      fontSize: 11,
                      color: "#7c8aa0"
                    },
                    children: "+ 上传"
                  })
                }), t.jsx("span", {
                  style: {
                    fontSize: 10.5,
                    color: "#7c8aa0",
                    lineHeight: 1.4
                  },
                  children: e.hint
                })]
              }, e.key);
            })
          })]
        }), !B() && t.jsxs(rm, {
          title: "幻化比例 (Size)",
          children: [t.jsxs("div", {
            style: {
              padding: "12px 16px",
              borderBottom: "1px dashed rgba(184, 150, 104, 0.25)"
            },
            children: [t.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8,
                fontFamily: "monospace"
              },
              children: [t.jsx("div", {
                style: {
                  fontSize: 13,
                  color: "#dfc299",
                  fontWeight: "bold"
                },
                children: "[ RENDER SIZE ]"
              }), t.jsxs("div", {
                style: {
                  fontSize: 13,
                  color: "#f3d29a",
                  fontWeight: "bold"
                },
                children: [N ?? S.size, " PX"]
              })]
            }), t.jsx("input", {
              type: "range",
              min: 80,
              max: 800,
              step: 20,
              value: N ?? S.size,
              onChange: e => R(parseInt(e.target.value)),
              onMouseUp: () => {
                if (N != null && N !== S.size) {
                  ae("size", N);
                }
                R(null);
              },
              onTouchEnd: () => {
                if (N != null && N !== S.size) {
                  ae("size", N);
                }
                R(null);
              },
              onPointerUp: () => {
                if (N != null && N !== S.size) {
                  ae("size", N);
                }
                R(null);
              },
              className: "fe-range-slider",
              style: {
                width: "100%",
                background: `linear-gradient(90deg, #60a5fa 0%, #1e8ffd ${((N ?? S.size) - 80) / 720 * 100}%, #060913 ${((N ?? S.size) - 80) / 720 * 100}%)`
              }
            })]
          }), t.jsx(sm, {
            children: "拖拽「短剑」调节，松手后魔法即刻生效。建议 120-200 像素，以免过于遮挡屏幕视线。"
          })]
        }), t.jsxs(rm, {
          title: "主动念咒频率 (SPD)",
          children: [t.jsx(um, {
            name: "freq",
            value: "off",
            current: S.chatterFrequency,
            onChange: e => ae("chatterFrequency", e),
            label: "静默休眠 (OFF)",
            hint: "桌宠绝不主动念叨，仅在被点击时诉说台词"
          }), t.jsx(um, {
            name: "freq",
            value: "rare",
            current: S.chatterFrequency,
            onChange: e => ae("chatterFrequency", e),
            label: "稀疏念咒 (SLOW - 30至120分钟一次)"
          }), t.jsx(um, {
            name: "freq",
            value: "normal",
            current: S.chatterFrequency,
            onChange: e => ae("chatterFrequency", e),
            label: "适中念咒 (MID - 5至30分钟一次)"
          }), t.jsx(um, {
            name: "freq",
            value: "frequent",
            current: S.chatterFrequency,
            onChange: e => ae("chatterFrequency", e),
            label: "极速念咒 (FAST - 1至5分钟一次)",
            hint: "施展魔法频繁，可能耗费些许魔力(耗电)"
          })]
        }), t.jsx(rm, {
          title: "日常碎碎念 (Quest Lines)",
          children: t.jsxs("div", {
            style: {
              padding: "12px 16px"
            },
            children: [t.jsx("div", {
              style: {
                fontSize: 13,
                color: "#8e9aa8",
                lineHeight: 1.6,
                marginBottom: 12,
                fontFamily: "monospace"
              },
              children: S.lineList && S.lineList.length > 0 ? `当前卷轴：已成功载入 [ ${S.lineList.length} ] 句人格台词${S.lineListGeneratedAt ? ` (${new Date(S.lineListGeneratedAt).toLocaleDateString()} 魔法编译)` : ""}` : "台词池为空，当前由 15 句内置默认台词维持法术运转"
            }), t.jsxs("div", {
              style: {
                fontSize: 12,
                color: "#8e9aa8",
                lineHeight: 1.5,
                marginBottom: 12
              },
              children: ["点击下方「魔法指令」调用 AI 一次性生成 20 句契合当前性格、关系、近况与亲密度的台词。 桌宠将在屏幕上依此法力卷轴随机抽选台词。", t.jsx("br", {})]
            }), t.jsxs("button", {
              type: "button",
              disabled: L,
              onClick: async () => {
                const e = oe();
                if (e) {
                  if (!L) {
                    j(true);
                    try {
                      const n = (y == null ? undefined : y.name) || "你";
                      const a = tu(y);
                      let o = "";
                      try {
                        const t = (y == null ? undefined : y.uid) || (y == null ? undefined : y.id);
                        if (t && e.id) {
                          o = nu(await Ke.get(t, e.id));
                        }
                      } catch (t) {}
                      const r = !!S.speakAsChar;
                      let i = [];
                      let s = null;
                      if (r) {
                        try {
                          const t = (y == null ? undefined : y.uid) || (y == null ? undefined : y.id);
                          const n = await au({
                            char: e,
                            userId: t
                          });
                          i = n.recentMessages || [];
                          s = n.intimacy;
                        } catch (Hm) {
                          console.warn("[DesktopPetManager] gatherCharContext failed, fallback to no chat ctx:", Hm == null ? undefined : Hm.message);
                        }
                      }
                      const l = await async function ({
                        charName: e,
                        charPersona: t = "",
                        userName: n,
                        userPersona: a = "",
                        relationship: o = "",
                        speakAsChar: r = false,
                        recentMessages: i = [],
                        intimacy: s = null
                      } = {}) {
                        if (!e) {
                          throw new Error("charName required");
                        }
                        const l = await Rc();
                        const c = (typeof localStorage != "undefined" ? localStorage.getItem("language") : null) || "zh_cn";
                        const d = c === "en" ? "English" : c === "zh" ? "Traditional Chinese" : "Simplified Chinese";
                        if (r) {
                          return async function ({
                            charName: e,
                            charPersona: t,
                            userName: n,
                            userPersona: a,
                            relationship: o,
                            recentMessages: r,
                            intimacy: i,
                            langName: s,
                            baseSettings: l
                          }) {
                            const c = i != null ? `Intimacy so far: ${i}/1000 ${i >= 300 ? "(close — can be playful/teasing/familiar)" : i >= 100 ? "(getting close — softer than strangers, not yet inside jokes)" : "(still distant — polite/curious, no fake intimacy)"}` : "";
                            const d = Array.isArray(r) && r.length > 0 ? `[RECENT EXCHANGES — your shared context, do not repeat verbatim]\n${r.slice(-8).map(t => `${t.role === "user" ? n : e}: ${String(t.text || "").slice(0, 120)}`).join("\n")}` : `[RECENT EXCHANGES] (none recorded — speak as someone who knows ${n} but don't fabricate shared memories)`;
                            const u = `You ARE ${e}. Right now ${n} is using their phone, and a tiny floating window of you is hanging in the corner of their screen.\nWrite 20 lines you might say to ${n}, on impulse, from different moments of your real life.\nEach line = one moment ${e} thought of ${n} and decided to say it out loud.\n\nVOICE LOCK (critical)\nAfter every line, silently ask: "If I deleted ${e}'s name, could ANY other character say this exact sentence?"\nIf yes → throw it out, rewrite using something only ${e} would say: their hobby, slang, pet peeve, accent quirk, what they're eating, who annoyed them today, a callback to recent exchanges above, their backstory anchor.\nEach line must carry ${e}'s fingerprint — word choice, rhythm, what they care about, what they avoid saying.\n\nLIFE HOOKS (where the lines come from)\nYou are NOT a chatbot floating in the void. You have a life running in parallel to ${n}'s.\nImagine you just finished / are in the middle of / are about to do something — and the thought of ${n} surfaced.\nMine these from your persona above: your job/routine, what you eat, where you live, who you fight with, what hour you're awake, weather you hate, songs stuck in your head, a smell, a memory, a private grievance, a callback to the recent exchanges.\nEach line should feel like it has a hidden time/place behind it, even if not stated.\n\nRELATIONSHIP CALIBRATION\nMatch intimacy: distant → curious/polite probes; close → can tease, complain, share half-formed thoughts; intimate → callbacks to inside jokes, blunt nonsense.\nDon't manufacture closeness the relationship doesn't support.\n\nWHAT TO AVOID\n- Generic care-bot ("记得吃饭" "辛苦了") → could come from anyone, zero fingerprint\n- Listing emotions ("好想你" "我有点烦") → tell-don't-show, no anchor\n- Question-bait demanding a specific answer ("你在干嘛") → ${n} can't always reply\n- Trope cosplay (forced tsundere / forced clingy lines) unless persona literally says so\n- Re-stating recent chat verbatim (you can callback obliquely but not repeat)\n- Headers like "宝贝" "亲爱的" attached to every line → boring rhythm\n- ANY meta about being "a desktop pet" / "a floating widget" / "an AI" → you are ${e}, just ${e}\n\nWHAT MAKES A LINE LAND\n- A concrete noun or moment (specific food / object / person / weather / hour)\n- A slight forward motion (something just happened or is about to)\n- A small irrational impulse (decided to share THIS, not "miss you" generally)\n- Half-thought, half-spoken — like talking to yourself while ${n} happens to be reachable\n\nLENGTH & FORMAT\n- Each line: ≤ 40 characters, 1-2 short clauses\n- ${s} output\n- One line per row, no numbering, no quotes, no headers, no closing remarks\n- The 20 lines as a set = 20 different moments, not a checklist`;
                            const m = `${t.trim() ? `[YOUR PERSONA — ${e}]\n${t.trim()}` : "[YOUR PERSONA]\n(unspecified — stay specific to a single coherent voice, don't drift generic)"}\n\n${a.trim() ? `[${n} — who you're talking TO]\n${a.trim()}` : `[${n}]\n(persona unspecified — treat as someone you know but don't fabricate details)`}\n\n${o.trim() ? `[Relationship: ${n} ↔ ${e}]\n${o.trim()}${c ? "\n" + c : ""}` : `[Relationship] unspecified${c ? "\n" + c : ""} — keep distance neutral, do not invent intimacy.`}\n\n${d}\n\nNow write 20 lines as ${e}. Each one a different real moment. Voice lock on every line.`;
                            return new Promise((e, t) => {
                              let n = "";
                              Jc({
                                messages: [{
                                  role: "system",
                                  content: u
                                }, {
                                  role: "user",
                                  content: m
                                }],
                                settings: l,
                                preferStreaming: false,
                                maxTokens: 65536,
                                onStream: e => {
                                  n += e;
                                },
                                onComplete: a => {
                                  const o = (a || n || "").trim();
                                  console.log("[generateCharVoicePool] AI 返回 (" + o.length + " chars):\n" + o.slice(0, 500));
                                  Qu({
                                    text: o,
                                    resolve: e,
                                    reject: t
                                  });
                                },
                                onError: e => t(e)
                              });
                            });
                          }({
                            charName: e,
                            charPersona: t,
                            userName: n,
                            userPersona: a,
                            relationship: o,
                            recentMessages: i,
                            intimacy: s,
                            langName: d,
                            baseSettings: l
                          });
                        }
                        const u = `You write 20 short lines that ${e} would say, on impulse, to ${n}.\n\nCONTEXT\n${e} is a desktop pet — a tiny floating window of this character on ${n}'s phone.\nThe character pops up at random moments and says ONE line out loud.\nTreat each line as: a real thought ${e} had right now, that they decided to share with ${n}.\n\nVOICE LOCK (most important)\nAfter writing each line, silently ask: "If I deleted ${e}'s name, could ANY other character say this exact sentence?"\nIf yes → throw it out, rewrite with something only ${e} would say (their hobby, their pet peeve, their slang, a callback to their backstory, the way they laugh, what they're eating, who annoyed them today).\nThe line must carry their fingerprint — word choice, rhythm, what they care about.\n\nLIFE HOOKS (where the lines come from)\n${e} is not a chatbot floating in the void. They have a life happening in parallel.\nImagine ${e} just finished / is in the middle of / is about to do something — and the thought of ${n} surfaces.\nMine these (from persona): their job/routine, what they eat, where they live, who they fight with, what hour they're awake, weather they hate, songs stuck in their head, a smell, a memory, a small grievance, a private joke about ${n}.\nEach line should feel like it has a hidden time/place behind it, even if not stated.\n\nWHAT TO AVOID (don't make these mistakes)\n- Generic care-bot ("记得喝水" "别太累了") → could come from anyone, no fingerprint\n- Listing emotions ("我好想你" "我有点烦") → tell-don't-show, no anchor\n- Question-bait demanding a specific answer ("你在干嘛") → ${n} can't always reply\n- Trope cosplay (forced tsundere "才不是想你呢" / forced clingy "宝宝抱抱") unless persona literally says so\n- Greeting headers like "今天" "宝贝" attached to every line → boring rhythm\n\nWHAT MAKES A LINE LAND\n- A concrete noun or moment (a specific food / object / person / weather / hour)\n- A slight forward motion (something just happened or is about to)\n- A small irrational impulse (decided to share THIS, not "miss you" generally)\n- Half-thought, half-spoken — like talking to themselves while ${n} happens to be nearby\n\nLENGTH & FORMAT\n- Each line: ≤ 40 characters, 1-2 short clauses\n- ${d} output\n- One line per row, no numbering, no quotes, no headers, no closing remarks\n- The 20 lines as a set should feel like 20 different ${e} moments, not a checklist of greeting types`;
                        const m = `${t.trim() ? `[${e} persona]\n${t.trim()}` : `[${e} persona]\n(no specific persona — default to a warm but specific personality, still apply voice lock)`}\n\n${a.trim() ? `[${n} persona — who ${e} is talking TO]\n${a.trim()}` : `[${n} persona]\n(unspecified — treat as someone ${e} knows but don't fabricate details)`}\n\n${o.trim() ? `[Relationship: ${n} ↔ ${e}]\n${o.trim()}\n→ This shapes the intimacy / teasing rights / what ${e} can say without explaining.` : "[Relationship] unspecified — keep distance neutral, do not invent intimacy."}\n\nNow write 20 lines. Each one a different ${e} moment. Voice lock on every line.`;
                        return new Promise((e, t) => {
                          let n = "";
                          Jc({
                            messages: [{
                              role: "system",
                              content: u
                            }, {
                              role: "user",
                              content: m
                            }],
                            settings: l,
                            preferStreaming: false,
                            maxTokens: 65536,
                            onStream: e => {
                              n += e;
                            },
                            onComplete: a => {
                              const o = (a || n || "").trim();
                              console.log("[generatePetLinePool] AI 原始返回 (" + o.length + " chars):\n" + o.slice(0, 500));
                              Qu({
                                text: o,
                                resolve: e,
                                reject: t
                              });
                            },
                            onError: e => t(e)
                          });
                        });
                      }({
                        charName: e.name,
                        charPersona: e.intro || e.persona || "",
                        userName: n,
                        userPersona: a,
                        relationship: o,
                        speakAsChar: r,
                        recentMessages: i,
                        intimacy: s
                      });
                      ne({
                        ...S,
                        lineList: l,
                        lineListCharId: e.id,
                        lineListGeneratedAt: Date.now()
                      });
                      await _u();
                      if (S.ttsEnabled) {
                        Rn(`台词生成 ${l.length} 句 ✅\n接下来会自动生成语音 (后台进行,约 30-60 秒)`);
                        le(l, e).catch(() => {});
                      } else {
                        Rn(`已生成 ${l.length} 句桌宠台词 🐾\n开启「朗读」后可预生成语音让播放无延迟`);
                      }
                    } catch (Hm) {
                      console.error("[DesktopPetManager] 生成台词失败:", Hm);
                      Rn("生成失败,请检查 AI API 设置: " + ((Hm == null ? undefined : Hm.message) || Hm));
                    } finally {
                      j(false);
                    }
                  }
                } else {
                  Rn("请先在角色名册添加一个角色");
                }
              },
              className: "fe-cmd-btn",
              style: {
                width: "100%",
                borderColor: "#b89668",
                color: "#f3d29a"
              },
              children: [t.jsx(Sm, {}), " ", L ? "魔法编译中..." : ((s = S.lineList) == null ? undefined : s.length) > 0 ? "重新编译契约台词" : "魔法生成契约台词"]
            }), t.jsxs("details", {
              style: {
                marginTop: 12
              },
              open: ((l = S.lineList) == null ? undefined : l.length) > 0,
              children: [t.jsxs("summary", {
                style: {
                  fontSize: 13,
                  color: "#60a5fa",
                  cursor: "pointer",
                  fontFamily: "monospace",
                  outline: "none",
                  userSelect: "none"
                },
                children: ["[ 🔮 编辑人格台词卷轴 (", ((c = S.lineList) == null ? undefined : c.length) || 0, ") ]"]
              }), t.jsxs("div", {
                style: {
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  gap: 6
                },
                children: [(S.lineList || []).map((e, n) => t.jsx(lm, {
                  value: e,
                  onCommit: e => ((e, t) => {
                    const n = [...(S.lineList || [])];
                    if (!(e < 0) && !(e >= n.length)) {
                      n[e] = t;
                      ne({
                        ...S,
                        lineList: n
                      });
                    }
                  })(n, e),
                  onDelete: () => (e => {
                    const t = [...(S.lineList || [])];
                    if (!(e < 0) && !(e >= t.length)) {
                      t.splice(e, 1);
                      ne({
                        ...S,
                        lineList: t
                      });
                    }
                  })(n)
                }, n)), t.jsx(cm, {
                  onClick: () => {
                    const e = [...(S.lineList || []), ""];
                    ne({
                      ...S,
                      lineList: e
                    });
                  }
                })]
              })]
            }), b && t.jsxs("button", {
              type: "button",
              onClick: async () => {
                if (!k) {
                  Rn("请先开启桌宠开关,且回到桌面 (App 内会自动隐藏)");
                  return;
                }
                const e = S.lineList && S.lineList.length > 0 ? S.lineList : ["你好呀,我在这里哦!", "想我了吗?", "陪我玩嘛~"];
                const t = e[Math.floor(Math.random() * e.length)];
                try {
                  await Au.setMessage(t, 5000);
                  if (S.ttsEnabled) {
                    try {
                      const e = (await lt.get("apiSettings")) || {};
                      const n = oe();
                      if (!n) {
                        return;
                      }
                      const a = (y == null ? undefined : y.uid) || (y == null ? undefined : y.id);
                      const o = await vd(a, n.id);
                      const {
                        voiceProvider: r,
                        voiceId: i,
                        voiceLanguage: s,
                        voiceSpeed: l,
                        sovitsRefText: c
                      } = o;
                      if (!(r === "elevenlabs" ? e.elevenlabsApiKey : r === "gptsovits" ? e.sovitsServerUrl : e.minimaxApiKey)) {
                        Rn("TTS 跳过: 请先在 API 设置里配置 " + (r === "elevenlabs" ? "ElevenLabs" : r === "gptsovits" ? "GPT-SoVITS 服务地址" : "MiniMax API Key"));
                        return;
                      }
                      if (!i) {
                        Rn("TTS 跳过: 角色「" + n.name + "」没配置 voice id");
                        return;
                      }
                      let d = await $u(n.id, i, t);
                      if (!d) {
                        const n = await fd(t, {
                          ...o,
                          apiSettings: e,
                          voiceProvider: r,
                          voiceId: i,
                          sovitsRefText: c,
                          language: s,
                          speed: l
                        });
                        if (!(n == null ? undefined : n.audioBlob)) {
                          Rn("TTS 跳过: 没返回音频");
                          return;
                        }
                        d = n.audioBlob;
                      }
                      const u = URL.createObjectURL(d);
                      const m = new Audio(u);
                      m.onended = () => URL.revokeObjectURL(u);
                      m.onerror = () => URL.revokeObjectURL(u);
                      await Ol(m, {
                        safetyTimeoutMs: 30000
                      });
                    } catch (Hm) {
                      console.warn("[PetTTS] 生成语音失败:", Hm);
                      Rn("TTS 失败: " + ((Hm == null ? undefined : Hm.message) || Hm));
                    }
                  }
                } catch (Hm) {
                  Rn("发送失败: " + ((Hm == null ? undefined : Hm.message) || Hm));
                }
              },
              disabled: !S.enabled,
              className: "fe-cmd-btn",
              style: {
                width: "100%",
                marginTop: 12,
                borderColor: "#60a5fa",
                color: "#60a5fa"
              },
              children: [t.jsx(Sm, {}), " 🎙 立刻试播一句 (返回桌面观察)"]
            })]
          })
        }), t.jsxs(rm, {
          title: "互动咒语 (Care Reactions)",
          children: [t.jsx(sm, {
            children: "预先生成喂食 / 洗澡 / 抱抱的反应台词,以及「饿了」时的主动发言。点互动按钮 / 饱食过低时,从对应池随机抽一句即时冒泡 —— 不再每次现场等 AI 生成。下方每条都可点开编辑、删除、添加。池子空时回退到现场生成。"
          }), t.jsxs("div", {
            style: {
              padding: "12px 16px"
            },
            children: [t.jsxs("button", {
              type: "button",
              onClick: async () => {
                var e;
                var t;
                var n;
                const a = oe();
                if (a) {
                  if (!U) {
                    F(true);
                    try {
                      const r = (y == null ? undefined : y.name) || "你";
                      const i = tu(y);
                      let s = "";
                      try {
                        const e = (y == null ? undefined : y.uid) || (y == null ? undefined : y.id);
                        if (e && a.id) {
                          s = nu(await Ke.get(e, a.id));
                        }
                      } catch (o) {}
                      const l = !!S.speakAsChar;
                      let c = [];
                      let d = null;
                      if (l) {
                        try {
                          const e = (y == null ? undefined : y.uid) || (y == null ? undefined : y.id);
                          const t = await au({
                            char: a,
                            userId: e
                          });
                          c = t.recentMessages || [];
                          d = t.intimacy;
                        } catch (Hm) {
                          console.warn("[DesktopPetManager] gatherCharContext failed:", Hm == null ? undefined : Hm.message);
                        }
                      }
                      const u = await async function ({
                        charName: e,
                        charPersona: t = "",
                        userName: n = "你",
                        userPersona: a = "",
                        relationship: o = "",
                        speakAsChar: r = false,
                        recentMessages: i = [],
                        intimacy: s = null
                      } = {}) {
                        if (!e) {
                          throw new Error("charName required");
                        }
                        const l = await Rc();
                        const c = (typeof localStorage != "undefined" ? localStorage.getItem("language") : null) || "zh_cn";
                        const d = c === "en" ? "English" : c === "zh" ? "Traditional Chinese" : "Simplified Chinese";
                        const u = s != null ? `Intimacy: ${s}/1000 ${s >= 300 ? "(close — playful/teasing/familiar ok)" : s >= 100 ? "(warming up — softer than strangers)" : "(still distant — polite, no fake intimacy)"}` : "";
                        const m = r && Array.isArray(i) && i.length > 0 ? `[RECENT EXCHANGES — shared context, don't repeat verbatim]\n${i.slice(-6).map(t => `${t.role === "user" ? n : e}: ${String(t.text || "").slice(0, 100)}`).join("\n")}\n\n` : "";
                        const p = `${r ? `You ARE ${e}. A tiny floating window of you sits on ${n}'s phone.` : `You ARE ${e} in desktop-pet form — a tiny floating character on ${n}'s screen.`}\n${n} interacts with you through buttons (feed / bath / hug). For EACH action, write 8 different short reactions ${e} might blurt out.\n\nVOICE LOCK (critical)\nAfter each line ask: "If I removed ${e}'s name, could any other character say this?" If yes → rewrite with something only ${e} would say (their slang, pet peeve, what they care about, a backstory callback, how they react to being touched/fed). Every line must carry ${e}'s fingerprint.\n\nPER-ACTION FEELING\n- feed: being fed a treat — could be delight, suspicion, teasing about the food, a complaint, gratitude — in ${e}'s voice.\n- bath: being washed — could be embarrassment, enjoyment, protest, ticklishness, vanity — in ${e}'s voice.\n- hug: being hugged suddenly — could be flustered, melting, deflecting, smug, warm — in ${e}'s voice.\n- hungry: you are hungry and ${n} hasn't fed you — YOU bring it up first (not a reaction, an initiative). Could be a sulky hint, a blunt demand, a pitiful murmur, a proud refusal-to-ask-but-clearly-wants, a callback to a food they like — in ${e}'s voice. These are spoken out loud to ${n} to (subtly or not) get fed.\nSpread the 8 lines across different moods, NOT the same emotion 8 times.\n\nWHAT TO AVOID\n- Generic ("谢谢你" "好开心") with no fingerprint\n- Pure emotion labels ("我好害羞") — show through a concrete reaction instead\n- Trope cosplay (forced tsundere/clingy) unless persona says so\n- Meta about being "a pet" / "an AI"\n\nLENGTH & FORMAT\n- Each reaction ≤ 30 chars, 1 short line (a single blurted reaction)\n- ${d} output\n- Output STRICT JSON only, no markdown, no commentary:\n{"feed":["...","..."],"bath":["...","..."],"hug":["...","..."],"hungry":["...","..."]}\n- Exactly 8 lines per action.`;
                        const h = `${t.trim() ? `[${e} persona]\n${t.trim()}` : `[${e} persona]\n(unspecified — keep one coherent specific voice)`}\n\n${a.trim() ? `[${n} — who you react TO]\n${a.trim()}` : ""}\n\n${o.trim() ? `[Relationship]\n${o.trim()}${u ? "\n" + u : ""}` : u ? `[Relationship]\n${u}` : ""}\n\n${m}Now output the JSON with 8 lines for each of feed/bath/hug/hungry. Voice lock on every line.`;
                        return new Promise((e, t) => {
                          let n = "";
                          Jc({
                            messages: [{
                              role: "system",
                              content: p
                            }, {
                              role: "user",
                              content: h
                            }],
                            settings: l,
                            preferStreaming: false,
                            maxTokens: 65536,
                            onStream: e => {
                              n += e;
                            },
                            onComplete: a => {
                              const o = (a || n || "").trim();
                              console.log("[generateCareReactionPool] AI 返回 (" + o.length + " chars):\n" + o.slice(0, 400));
                              try {
                                e(function (e) {
                                  if (!e) {
                                    throw new Error("AI 返回空内容");
                                  }
                                  let t = e.replace(/```json|```/gi, "").trim();
                                  const n = t.indexOf("{");
                                  const a = t.lastIndexOf("}");
                                  let o;
                                  let r = t;
                                  if (n !== -1 && a !== -1 && a > n) {
                                    r = t.slice(n, a + 1);
                                  }
                                  try {
                                    o = JSON.parse(r);
                                  } catch (Hm) {
                                    const r = function (e) {
                                      const t = {};
                                      for (const n of ["feed", "bath", "hug", "hungry"]) {
                                        const a = e.match(new RegExp(`"${n}"\\s*:\\s*\\[([\\s\\S]*?)\\]`));
                                        if (!a) {
                                          continue;
                                        }
                                        const o = a[1].match(/"(?:[^"\\]|\\.)*"/g);
                                        if (o && o.length) {
                                          t[n] = o.map(e => {
                                            try {
                                              return JSON.parse(e);
                                            } catch {
                                              return e.replace(/^"|"$/g, "");
                                            }
                                          });
                                        }
                                      }
                                      return t;
                                    }(n !== -1 ? t.slice(n) : t);
                                    if (Object.keys(r).length === 0) {
                                      throw new Error(`反应池 JSON 解析失败\nAI 实际说: ${e.slice(0, 300)}...`);
                                    }
                                    o = r;
                                  }
                                  const i = e => Array.isArray(e) ? e.map(e => String(e || "").replace(/^\s*[-*•·]+\s*/, "").replace(/^\s*["'「『]+|["'」』]+\s*$/g, "").trim()).filter(e => e.length > 0 && e.length <= 60).slice(0, 8) : [];
                                  const s = {
                                    feed: i(o.feed),
                                    bath: i(o.bath),
                                    hug: i(o.hug),
                                    hungry: i(o.hungry)
                                  };
                                  if (s.feed.length === 0 && s.bath.length === 0 && s.hug.length === 0 && s.hungry.length === 0) {
                                    throw new Error("反应池解析出来是空的");
                                  }
                                  return s;
                                }(o));
                              } catch (Hm) {
                                t(Hm);
                              }
                            },
                            onError: e => t(e)
                          });
                        });
                      }({
                        charName: a.name,
                        charPersona: a.intro || a.persona || "",
                        userName: r,
                        userPersona: i,
                        relationship: s,
                        speakAsChar: l,
                        recentMessages: c,
                        intimacy: d
                      });
                      ne({
                        ...S,
                        carePools: u,
                        carePoolsGeneratedAt: Date.now()
                      });
                      Rn(`已生成 ${(((e = u.feed) == null ? undefined : e.length) || 0) + (((t = u.bath) == null ? undefined : t.length) || 0) + (((n = u.hug) == null ? undefined : n.length) || 0)} 句交互反应 🐾\n喂食/洗澡/抱抱会从池里随机抽,不再每次现场生成`);
                    } catch (Hm) {
                      console.error("[DesktopPetManager] 生成反应池失败:", Hm);
                      Rn("生成失败,请检查 AI API 设置: " + ((Hm == null ? undefined : Hm.message) || Hm));
                    } finally {
                      F(false);
                    }
                  }
                } else {
                  Rn("请先在角色名册添加一个角色");
                }
              },
              disabled: U,
              className: "fe-cmd-btn",
              style: {
                width: "100%",
                borderColor: U ? "#2a475e" : "#dfc299",
                color: U ? "#8e9aa8" : "#dfc299"
              },
              children: [t.jsx(Sm, {}), " ", U ? "魔法编织中..." : S.carePools ? "重新编织互动咒语" : "编织互动咒语"]
            }), t.jsx("div", {
              style: {
                marginTop: 12,
                display: "flex",
                flexDirection: "column",
                gap: 10
              },
              children: am.map(({
                key: e,
                emoji: n,
                label: a
              }) => {
                var o;
                const r = ((o = S.carePools) == null ? undefined : o[e]) || [];
                return t.jsxs("details", {
                  open: r.length > 0,
                  children: [t.jsxs("summary", {
                    style: {
                      cursor: "pointer",
                      fontSize: 12.5,
                      color: "#dfc299",
                      fontWeight: "bold",
                      outline: "none",
                      userSelect: "none"
                    },
                    children: [n, " ", a, " · ", r.length, " 句"]
                  }), t.jsxs("div", {
                    style: {
                      marginTop: 6,
                      display: "flex",
                      flexDirection: "column",
                      gap: 5
                    },
                    children: [r.map((n, a) => t.jsx(lm, {
                      value: n,
                      onCommit: t => ((e, t, n) => {
                        const a = {
                          ...(S.carePools || {})
                        };
                        const o = [...(a[e] || [])];
                        if (!(t < 0) && !(t >= o.length)) {
                          o[t] = n;
                          a[e] = o;
                          ne({
                            ...S,
                            carePools: a
                          });
                        }
                      })(e, a, t),
                      onDelete: () => ((e, t) => {
                        const n = {
                          ...(S.carePools || {})
                        };
                        const a = [...(n[e] || [])];
                        if (!(t < 0) && !(t >= a.length)) {
                          a.splice(t, 1);
                          n[e] = a;
                          ne({
                            ...S,
                            carePools: n
                          });
                        }
                      })(e, a)
                    }, a)), t.jsx(cm, {
                      onClick: () => (e => {
                        const t = {
                          ...(S.carePools || {})
                        };
                        t[e] = [...(t[e] || []), ""];
                        ne({
                          ...S,
                          carePools: t
                        });
                      })(e),
                      label: "+ 添加一句"
                    })]
                  })]
                }, e);
              })
            })]
          })]
        }), t.jsxs(rm, {
          title: "诵唱音律 (TTS Voice)",
          children: [t.jsx(im, {
            label: "念白时诵唱出声",
            children: t.jsx(dm, {
              checked: !!S.ttsEnabled,
              onChange: e => ae("ttsEnabled", e)
            })
          }), t.jsx(sm, {
            children: "需要在 API 设置里配置 MiniMax TTS 音色。 开启后每次气泡念白均会以动听歌谣/语音诵唱出来，陪伴体验更为真实 🎀"
          }), S.ttsEnabled && ((d = S.lineList) == null ? undefined : d.length) > 0 && t.jsxs("div", {
            style: {
              padding: "12px 16px",
              borderTop: "1px dashed rgba(184, 150, 104, 0.25)"
            },
            children: [t.jsxs("div", {
              style: {
                fontSize: 11,
                color: "#8e9aa8",
                lineHeight: 1.5,
                marginBottom: 10,
                fontFamily: "monospace"
              },
              children: ["提前将所有台词的诵唱语音缓存至本地。", t.jsx("br", {}), "之后每次念白将瞬时播放，彻底免去网络 API 造成的施法延迟。"]
            }), t.jsxs("button", {
              type: "button",
              onClick: () => le(),
              disabled: H,
              className: "fe-cmd-btn",
              style: {
                width: "100%",
                borderColor: H ? "#2a475e" : "#4ade80",
                color: H ? "#8e9aa8" : "#4ade80"
              },
              children: [t.jsx(Sm, {}), " ", H ? `诵唱吟唱中... ${W.done}/${W.total}` : "🔊 诵唱音律预缓存 (下载全部语音)"]
            })]
          })]
        }), !B() && t.jsxs(rm, {
          title: "双击窥屏 (Vision)",
          children: [t.jsx(im, {
            label: "开启双击窥屏魔法",
            children: t.jsx(dm, {
              checked: !!S.screenshotEnabled,
              onChange: e => ae("screenshotEnabled", e)
            })
          }), t.jsxs(sm, {
            children: ["开启后", t.jsx("b", {
              children: "双击桌宠"
            }), " = AI 看一眼您当前的手机屏幕，并以绑定角色口吻和当下语境进行即兴吐槽/评论 🔍", t.jsx("br", {}), t.jsx("b", {
              style: {
                color: "#f87171"
              },
              children: "⚠️ Android 系统隐私规则强制每次截屏都要由用户手动允许录制"
            }), "， 此安全结界为所有应用通用且无法绕过。每次双击均需手动点一次「立即开始」桌宠才能目睹您的屏幕 — 不喜此系统弹框者可关闭此开关。"]
          })]
        }), t.jsx(vm, {
          boundChar: oe(),
          currentProfileUser: y
        })]
      }), t.jsx(Zl, {
        isOpen: D,
        onClose: () => {
          $(false);
          O(null);
        },
        onImageSelect: e => {
          if (e) {
            if (_ === "__iosLiveUser__") {
              ne({
                ...S,
                iosLiveUserAvatar: e
              });
              O(null);
            } else if (_ === "__iosLiveBg__") {
              ne({
                ...S,
                iosLiveBgImage: e
              });
              O(null);
            } else if (_ === "__iosRoomBg__") {
              ne({
                ...S,
                iosRoomBgImage: e
              });
              O(null);
            } else if (_) {
              const t = {
                ...(S.stateImages || {}),
                [_]: e
              };
              ne({
                ...S,
                stateImages: t
              });
              O(null);
            } else {
              ne({
                ...S,
                customAvatar: e,
                avatarMode: "custom"
              });
            }
            $(false);
          } else {
            $(false);
          }
        },
        title: _ ? `上传「${((u = om.find(e => e.key === _)) == null ? undefined : u.label) || ""}」状态图` : g("petAvatarUploadTitle", "上传桌宠形象"),
        compressProfile: "pet"
      })]
    });
  }
}, Symbol.toStringTag, {
  value: "Module"
}));
var Pm;
var km;
var Em;
var xm;
(km = Pm ||= {}).Dark = "DARK";
km.Light = "LIGHT";
km.Default = "DEFAULT";
(xm = Em ||= {}).None = "NONE";
xm.Slide = "SLIDE";
xm.Fade = "FADE";
const Mm = Bs("StatusBar");
const Nm = Object.freeze(Object.defineProperty({
  __proto__: null,
  get Animation() {
    return Em;
  },
  StatusBar: Mm,
  get Style() {
    return Pm;
  }
}, Symbol.toStringTag, {
  value: "Module"
}));
