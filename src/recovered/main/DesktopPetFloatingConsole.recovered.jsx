// Recovered from assets/main-BO9xa-SQ.js.
// This is a strict source-fragment extraction; aliases are preserved from the bundle.
// Source lines: 69900-72550 (floating desktop pet console).
import { u as n, i as r, r as i, G as o, s as a, _ as s, a as l, b as c, p as d, F as u, c as p, d as h, I as g, e as m, n as f, C as x, f as y, g as v, h as b, j as w, k as C, M as j, l as S, m as k, o as _, T as E, q as I, t as N, v as A, w as T, R as $, x as L, y as M, U as R, z as F, A as P, B as D, D as O, E as B, H as z, J as U, K as W, L as H, N as V, O as G, P as Y, Q as q, S as Z, V as K, W as J, X, Y as Q, Z as ee, $ as te, a0 as ne, a1 as re, a2 as ie, a3 as oe, a4 as ae, a5 as se, a6 as le, a7 as ce, a8 as de, a9 as ue, aa as pe, ab as he, ac as ge, ad as me, ae as fe, af as xe, ag as ye, ah as ve, ai as be, aj as we, ak as Ce, al as je, am as Se, an as ke, ao as _e, ap as Ee, aq as Ie, ar as Ne, as as Ae, at as Te, au as $e, av as Le, aw as Me, ax as Re, ay as Fe, az as Pe, aA as De, aB as Oe, aC as Be, aD as ze, aE as Ue, aF as We, aG as He, aH as Ve, aI as Ge, aJ as Ye, aK as qe, aL as Ze, aM as Ke, aN as Je, aO as Xe, aP as Qe, aQ as et, aR as tt, aS as nt, aT as rt, aU as it, aV as ot, aW as at, aX as st, aY as lt, aZ as ct, a_ as dt, a$ as ut, b0 as pt, b1 as ht, b2 as gt, b3 as mt, b4 as ft } from "./native-pet-CTNtZgMA.js";

const jy = "nuojiji_floating_console_position";
const Sy = (e, t, n) => Math.max(t, Math.min(n, e));
const ky = {
  "home-screen": "主畫面/桌面",
  "chat-list-screen": "IM 通訊應用",
  "calendar-app-screen": "日曆",
  "character-roster-screen": "角色名冊",
  "world-book-screen": "世界書/設定集",
  "wallpaper-screen": "桌布設定",
  "api-settings-screen": "API設定",
  "font-settings-screen": "字體設定",
  "custom-icon-screen": "圖標自訂",
  "pomodoro-screen": "番茄鐘",
  "couples-screen": "情侶互動",
  "going-out-screen": "出門約會",
  "isekai-screen": "異世界冒險",
  "did-you-eat-screen": "今天吃什麼",
  "forum-screen": "論壇/動態",
  "this-moment-screen": "此時此刻",
  "monitor-screen": "監控面板"
};
const _y = ({
  enabled: e = true,
  shortcuts: t = []
}) => {
  const {
    showScreen: n,
    goHome: r,
    currentScreen: i
  } = p();
  const {
    t: c
  } = l();
  const {
    currentProfileUser: u,
    safeCurrentProfileUserId: g
  } = w();
  const [m, f] = xt.useState(null);
  xt.useEffect(() => {
    let e = false;
    const t = t => {
      if (t === undefined) {
        try {
          const t = localStorage.getItem("nuojiji_active_desktop_pet");
          if (t) {
            const n = JSON.parse(t);
            if (n && n.enabled) {
              f(n);
              if (n._hasBlob) {
                const t = String(n.charId);
                Promise.all([o.get("desktopPetBlob"), o.get("desktopPetIdleLinesCache")]).then(([n, r]) => {
                  if (e) {
                    return;
                  }
                  const i = r == null ? undefined : r[t];
                  f(e => e ? {
                    ...e,
                    image: (n == null ? undefined : n.image) || e.image || "",
                    idleLines: (i == null ? undefined : i.length) > 0 ? i : (n == null ? undefined : n.idleLines) || e.idleLines || []
                  } : e);
                }).catch(() => {});
              }
              return;
            }
          }
        } catch (mo) {}
        f(null);
      } else if (t && t.enabled) {
        f({
          ...t,
          _hasBlob: !!t.image || !!t.idleLines && !!t.idleLines.length
        });
      } else {
        f(null);
      }
    };
    t();
    const n = e => {
      if (e.key === "nuojiji_active_desktop_pet") {
        t();
      }
    };
    const r = e => t((e == null ? undefined : e.detail) !== undefined ? e.detail : undefined);
    const i = e => {
      if (e.detail) {
        R(e.detail);
      }
    };
    window.addEventListener("storage", n);
    window.addEventListener("nuojiji_desktop_pet_update", r);
    window.addEventListener("nuojiji:floating-console-layout-change", i);
    return () => {
      e = true;
      window.removeEventListener("storage", n);
      window.removeEventListener("nuojiji_desktop_pet_update", r);
      window.removeEventListener("nuojiji:floating-console-layout-change", i);
    };
  }, []);
  const x = (m == null ? undefined : m.size) ? parseInt(m.size, 10) : 58;
  const [y, v] = xt.useState(() => {
    const e = {
      x: 16,
      y: Math.max(100, window.innerHeight * 0.38)
    };
    try {
      const t = localStorage.getItem(jy);
      if (!t) {
        return e;
      }
      const n = JSON.parse(t);
      if (typeof (n == null ? undefined : n.x) == "number" && typeof (n == null ? undefined : n.y) == "number") {
        return n;
      }
    } catch (mo) {
      console.warn("[DesktopPetConsole] Failed to parse position:", mo);
    }
    return e;
  });
  const [b, C] = xt.useState(false);
  const [j, S] = xt.useState(false);
  const [k, _] = xt.useState("left");
  const E = xt.useCallback(() => {
    try {
      const e = document.getElementById("nuo-os-root");
      if (!e || !e.classList.contains("ui-scaled")) {
        return 1;
      }
      const t = parseFloat(getComputedStyle(e).getPropertyValue("--nuo-ui-scale"));
      if (t > 0) {
        return t;
      } else {
        return 1;
      }
    } catch (e) {
      return 1;
    }
  }, []);
  const I = xt.useCallback(() => window.innerWidth / E(), [E]);
  const A = xt.useCallback(() => window.innerHeight / E(), [E]);
  const [T, $] = xt.useState(() => E());
  xt.useEffect(() => {
    const e = () => $(E());
    e();
    window.addEventListener("nuojiji:ui-scale-changed", e);
    window.addEventListener("resize", e);
    return () => {
      window.removeEventListener("nuojiji:ui-scale-changed", e);
      window.removeEventListener("resize", e);
    };
  }, [E]);
  const L = x * (T && T !== 1 ? 1 / T : 1);
  const [M, R] = xt.useState(() => {
    try {
      const e = localStorage.getItem("nuojiji_pet_console_layout");
      if (e && ["orbit", "fan", "grid", "drawer"].includes(e)) {
        return e;
      }
    } catch (e) {}
    return "orbit";
  });
  xt.useCallback(e => {
    R(e);
    try {
      localStorage.setItem("nuojiji_pet_console_layout", e);
    } catch (t) {}
  }, []);
  const [F, O] = xt.useState("");
  const [B, z] = xt.useState(false);
  const U = xt.useRef(null);
  const [W, H] = xt.useState(false);
  const [V, G] = xt.useState("");
  const [Y, q] = xt.useState(false);
  const [Z, K] = xt.useState(null);
  const [J, X] = xt.useState(false);
  const [Q, ee] = xt.useState(false);
  const [te, ne] = xt.useState(false);
  const [re, ie] = xt.useState("history");
  const [oe, se] = xt.useState([]);
  const [le, ce] = xt.useState(new Set());
  const [de, ue] = xt.useState(0);
  const [pe, he] = xt.useState(false);
  const [ge, me] = xt.useState(0);
  const fe = xt.useRef(null);
  const xe = xt.useMemo(() => Array.from({
    length: 60
  }).map((e, t) => ({
    id: t,
    left: Math.random() * 96 + 2,
    top: Math.random() * 96 + 2,
    scale: 0.4 + Math.random() * 2.8,
    delay: Math.random() * 0.6,
    rotation: (Math.random() - 0.5) * 70,
    blinkDelay: 1 + Math.random() * 3
  })), []);
  const [ye, ve] = xt.useState(false);
  const [be, we] = xt.useState(false);
  const Ce = xt.useRef(null);
  const je = xt.useRef(0);
  const Se = xt.useRef(null);
  const [ke, _e] = xt.useState(0);
  xt.useRef(null);
  xt.useEffect(() => {
    if (!b) {
      _e(0);
    }
  }, [b]);
  const [Ee, Ie] = xt.useState("最喜歡你啦! (｡♥‿♥｡)");
  xt.useEffect(() => {
    if (b) {
      const e = ["最喜歡你啦! (｡♥‿♥｡)", "在偷偷想你哦 ✨", "今日心跳: 正常但害羞 🫣", "今天也要開開心心! 🌸", "悄悄看著你，不許分心哦 💖", "黏在你身邊，嘿嘿 (*•̀ᴗ•́*)🐾", "貼貼! 貼在一塊兒 🎀", "你在看什麼呀? 給我看看 🐾"];
      const t = e[Math.floor(Math.random() * e.length)];
      Ie(t);
    }
  }, [b]);
  const Ne = xt.useCallback((e, t, n, r, i) => {
    const o = I();
    const a = A();
    let s = r - 28;
    let l = i - 36;
    let c = "50%";
    const d = t === 0 ? "24px 24px 12px 24px" : t % 2 == 0 ? "14px 22px 22px 22px" : "22px 14px 22px 22px";
    if (e === "orbit") {
      c = "50%";
      const e = 4;
      const d = Math.max(L, 58) / 2;
      const u = Math.max(66, d + 28 + 14);
      const p = Math.max(0, n - e);
      const h = 56;
      const g = p > 1 ? p * 64 / (Math.PI * 2) : 0;
      const m = Math.max(u + h, g);
      const f = n <= e ? u : m;
      const x = f + 28 + 12;
      const y = f + 36 + 12;
      const v = o - x * 2;
      const b = a - y * 2;
      const w = Math.max(L, 58);
      const C = v < w ? r : Math.max(x, Math.min(o - x, r));
      const j = b < w ? i : Math.max(y, Math.min(a - y, i));
      const S = t < e;
      const k = Math.min(n, e);
      const _ = Math.PI * 2 / Math.max(1, k);
      const E = -Math.PI / 4;
      if (S) {
        const e = E + t * _;
        const n = u;
        s = C + n * Math.cos(e) - 28;
        l = j + n * Math.sin(e) - 36;
      } else {
        const n = E + _ / 2 + (t - e) * (Math.PI * 2 / p);
        const r = m;
        s = C + r * Math.cos(n) - 28;
        l = j + r * Math.sin(n) - 36;
      }
    } else if (e === "fan") {
      c = d;
      const e = k === "left" || r < o / 2;
      const u = 5;
      const p = Math.floor(t / u);
      const h = t % u;
      const g = Math.min(n - p * u, u);
      const m = 76 + p * 50;
      const f = 76 + Math.floor((n - 1) / u) * 50;
      let x = r;
      if (e) {
        x = Math.min(o - f - 28 - 12, r);
        x = Math.max(40, x);
      } else {
        x = Math.max(f + 28 + 12, r);
        x = Math.min(o - 28 - 12, x);
      }
      const y = Math.max(f + 36 + 12, Math.min(a - f - 36 - 12, i));
      let v;
      let b;
      let w;
      if (e) {
        v = -Math.PI * 0.38;
        b = Math.PI * 0.38;
      } else {
        v = Math.PI * 0.62;
        b = Math.PI * 1.38;
      }
      w = g <= 1 ? (v + b) / 2 : v + h * ((b - v) / (g - 1));
      s = x + m * Math.cos(w) - 28;
      l = y + m * Math.sin(w) - 36;
    } else if (e === "grid") {
      c = d;
      const e = n <= 4 ? n : Math.min(5, Math.ceil(n / 2));
      const u = 62;
      const p = 74;
      const h = (e - 1) * u + 56;
      const g = (Math.ceil(n / e) - 1) * p + 72;
      let m = r - h / 2;
      let f = i - g - 45;
      if (f < 15) {
        f = i + L / 2 + 25;
      }
      m = Math.max(12, Math.min(o - h - 12, m));
      f = Math.max(12, Math.min(a - g - 12, f));
      s = m + t % e * u;
      l = f + Math.floor(t / e) * p;
    } else if (e === "drawer") {
      c = d;
      const e = k === "left" || r < o / 2;
      const u = 74;
      const p = n * u - 12;
      let h = i - p / 2;
      h = Math.max(12, Math.min(a - p - 12, h));
      s = e ? 10 : o - 56 - 10;
      l = h + t * u;
    }
    return {
      x: s,
      y: l,
      borderRadius: c
    };
  }, [k, x, L]);
  xt.useEffect(() => {
    const e = m == null ? undefined : m.idleLines;
    if (!e || e.length === 0 || !(m == null ? undefined : m.enabled)) {
      O("");
      z(false);
      if (U.current) {
        clearTimeout(U.current);
      }
      return;
    }
    const t = () => {
      if (b) {
        return;
      }
      if (typeof document != "undefined" && document.visibilityState !== "visible") {
        return;
      }
      const t = e[Math.floor(Math.random() * e.length)];
      O(t);
      z(true);
      setTimeout(() => z(false), 4000);
    };
    const n = setTimeout(t, 5000);
    const r = () => {
      U.current = setTimeout(() => {
        t();
        r();
      }, 15000 + Math.random() * 85000);
    };
    r();
    return () => {
      clearTimeout(n);
      if (U.current) {
        clearTimeout(U.current);
      }
    };
  }, [m == null ? undefined : m.idleLines, m == null ? undefined : m.enabled, b]);
  xt.useEffect(() => {
    if (!te || !(m == null ? undefined : m.charId) || !g) {
      return;
    }
    let e = false;
    (async () => {
      try {
        const {
          listHistory: t,
          listFavorites: n
        } = await s(async () => {
          const {
            listHistory: e,
            listFavorites: t
          } = await import("./petPeekStore-BGJg8bWq.js");
          return {
            listHistory: e,
            listFavorites: t
          };
        }, __vite__mapDeps([37, 0, 1, 2, 3, 4, 5]));
        const r = await t({
          userId: g,
          charId: m.charId
        });
        const i = await n({
          userId: g,
          charId: m.charId
        });
        if (e) {
          return;
        }
        se(re === "history" ? r : i);
        ce(new Set(i.map(e => e.id)));
      } catch (t) {}
    })();
    return () => {
      e = true;
    };
  }, [te, re, de, m == null ? undefined : m.charId, g]);
  const Ae = xt.useRef({
    dragging: false,
    moved: false,
    pointerId: null,
    offsetX: 0,
    offsetY: 0
  });
  const Te = xt.useMemo(() => {
    const e = new Map();
    const t = h();
    [...ms, ...fs].filter(e => e.screenId).filter(e => t || !e.nativeOnly).forEach(t => {
      if (!e.has(t.id)) {
        e.set(t.id, t);
      }
    });
    return e;
  }, []);
  const $e = xt.useMemo(() => {
    const e = (Array.isArray(t) ? t : []).slice(0, 15).map((e, t) => {
      const r = (e => {
        if (!e) {
          return null;
        }
        if (typeof e == "string") {
          if (e.startsWith("chat:")) {
            return {
              type: "chat",
              charId: e.slice(5)
            };
          } else if (e.startsWith("roster-detail:")) {
            return {
              type: "roster-detail",
              charId: e.slice(14)
            };
          } else if (e.startsWith("group-chat:")) {
            return {
              type: "group-chat",
              groupId: e.slice(11)
            };
          } else {
            return {
              type: "app",
              appId: e
            };
          }
        }
        if (typeof e == "object") {
          if (e.type === "chat") {
            return {
              type: "chat",
              charId: e.charId ?? e.characterId,
              userId: e.userId || null,
              label: e.label,
              image: e.image
            };
          }
          if (e.type === "roster-detail") {
            return {
              type: "roster-detail",
              charId: e.charId ?? e.characterId,
              userId: e.userId || null,
              label: e.label,
              image: e.image
            };
          }
          if (e.type === "group-chat") {
            return {
              type: "group-chat",
              groupId: e.groupId,
              userId: e.userId || null,
              label: e.label,
              image: e.image
            };
          }
          if (e.type === "roster") {
            return {
              type: "roster",
              label: e.label,
              image: e.image
            };
          }
        }
        return null;
      })(e);
      if (!r) {
        return null;
      }
      const i = `${t}`;
      if (r.type === "chat" && r.charId) {
        return {
          id: `chat-${r.userId || "any"}-${r.charId}-${i}`,
          type: "chat",
          label: r.label || "聊天",
          image: r.image || null,
          emoji: "💬",
          onClick: () => {
            window.dispatchEvent(new CustomEvent("open-chat-request", {
              detail: {
                charId: r.charId,
                userId: r.userId || undefined
              }
            }));
          }
        };
      }
      if (r.type === "roster-detail" && r.charId) {
        return {
          id: `roster-detail-${r.userId || "any"}-${r.charId}-${i}`,
          type: "roster-detail",
          label: r.label || "角色詳情",
          image: r.image || null,
          emoji: "📖",
          onClick: () => {
            n("character-roster-screen");
            setTimeout(() => {
              window.dispatchEvent(new CustomEvent("open-roster-detail", {
                detail: {
                  charId: r.charId,
                  userId: r.userId || undefined
                }
              }));
            }, 200);
          }
        };
      }
      if (r.type === "roster") {
        return {
          id: `roster-shortcut-${i}`,
          label: r.label || "角色名冊",
          image: r.image || null,
          onClick: () => n("character-roster-screen")
        };
      }
      if (r.type === "group-chat" && r.groupId) {
        return {
          id: `group-chat-${r.userId || "any"}-${r.groupId}-${i}`,
          type: "group-chat",
          label: r.label || "群聊",
          image: r.image || null,
          emoji: "👥",
          onClick: () => {
            window.dispatchEvent(new CustomEvent("open-group-chat-request", {
              detail: {
                groupId: r.groupId,
                userId: r.userId || null
              }
            }));
          }
        };
      }
      if (r.type !== "app" || !r.appId) {
        return null;
      }
      const o = Te.get(r.appId);
      if (o) {
        return {
          id: `${o.id}-${i}`,
          label: o.langKey ? c(o.langKey) : o.name,
          appIcon: o.icon,
          onClick: () => n(o.screenId)
        };
      } else {
        return null;
      }
    }).filter(Boolean);
    return [{
      id: "home-screen",
      label: c("sectionHomePage") || "主畫面",
      icon: yt.jsx(Yt, {
        size: 20
      }),
      onClick: r
    }, ...e];
  }, [Te, r, t, n, c]);
  xt.useEffect(() => {
    const e = Math.max(0, I() - L);
    const t = Math.max(0, A() - L);
    const n = {
      x: Sy(y.x, 0, e),
      y: Sy(y.y, 0, t)
    };
    if (n.x !== y.x || n.y !== y.y) {
      v(n);
    }
    const r = () => {
      const e = Math.max(0, I() - L);
      const t = Math.max(0, A() - L);
      v(n => ({
        x: j && k === "right" ? e : Sy(n.x, 0, e),
        y: Sy(n.y, 0, t)
      }));
    };
    window.addEventListener("resize", r);
    window.addEventListener("nuojiji:ui-scale-changed", r);
    return () => {
      window.removeEventListener("resize", r);
      window.removeEventListener("nuojiji:ui-scale-changed", r);
    };
  }, [y.x, y.y, j, k, x, L, I, A]);
  xt.useEffect(() => {
    try {
      a(jy, JSON.stringify(y));
    } catch (mo) {
      console.warn("[DesktopPetConsole] Failed to persist position:", mo);
    }
  }, [y]);
  xt.useEffect(() => {
    C(false);
  }, [i]);
  xt.useEffect(() => {
    const e = () => {
      const e = Math.round((I() - L) / 2);
      const t = Math.round((A() - L) / 2);
      v({
        x: e,
        y: t
      });
      S(false);
      C(false);
    };
    window.addEventListener("nuojiji:floating-console-reset-position", e);
    return () => window.removeEventListener("nuojiji:floating-console-reset-position", e);
  }, [x]);
  xt.useEffect(() => {
    if (!e) {
      C(false);
      S(false);
    }
  }, [e]);
  const Le = xt.useCallback(() => {
    try {
      const e = document.querySelector(".screen.active") || i && document.getElementById(i) || document.getElementById("chat-detail-screen");
      if (!e) {
        return "";
      }
      const t = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
        acceptNode: e => {
          const t = e.parentElement;
          if (!t) {
            return NodeFilter.FILTER_REJECT;
          }
          const n = t.tagName;
          if (n === "SCRIPT" || n === "STYLE" || n === "NOSCRIPT") {
            return NodeFilter.FILTER_REJECT;
          }
          const r = window.getComputedStyle(t);
          if (r.display === "none" || r.visibility === "hidden" || r.opacity === "0" || t.closest("[aria-label=\"floating-quick-console\"]")) {
            return NodeFilter.FILTER_REJECT;
          } else if (e.textContent.trim()) {
            return NodeFilter.FILTER_ACCEPT;
          } else {
            return NodeFilter.FILTER_REJECT;
          }
        }
      });
      const n = [];
      let r = 0;
      while (t.nextNode()) {
        const e = t.currentNode.textContent.trim();
        if (e && e.length > 0 && (n.push(e), r += e.length, r > 800)) {
          break;
        }
      }
      return n.join(" ");
    } catch (mo) {
      return "";
    }
  }, [i]);
  const Me = xt.useCallback(() => new Promise(e => {
    let t = `用戶當前在：${ky[i] || i || "未知畫面"}`;
    const n = Le();
    if (n) {
      t += `\n畫面上顯示的內容：${n}`;
    }
    let r = false;
    const o = n => {
      var i;
      window.removeEventListener("nuojiji_peek_screen_response", o);
      r = true;
      if ((i = n.detail) == null ? undefined : i.context) {
        t += "\n" + n.detail.context;
      }
      e(t);
    };
    window.addEventListener("nuojiji_peek_screen_response", o);
    window.dispatchEvent(new CustomEvent("nuojiji_peek_screen_request"));
    setTimeout(() => {
      if (!r) {
        window.removeEventListener("nuojiji_peek_screen_response", o);
        e(t);
      }
    }, 80);
  }), [i, Le]);
  const Re = xt.useCallback(async () => {
    if (W || !m) {
      return;
    }
    H(true);
    G("");
    z(false);
    C(false);
    K(null);
    X(false);
    ee(false);
    const e = (m.yanderePeekRate ?? 12) / 100;
    const t = m.yanderePeek !== false && Math.random() < e;
    he(t);
    try {
      const e = await Me();
      const r = m.charName || "桌寵";
      const i = m.charDesc || "";
      const o = (u == null ? undefined : u.name) || m.userName || "";
      let a = m.relationship || "";
      let l = false;
      let c = "";
      let d = "";
      if (m.charId && g) {
        try {
          const e = await D.get(g, m.charId);
          if (e == null ? undefined : e.relationship) {
            a = e.charToUserRelationship || e.relationship;
          }
          if (e == null ? undefined : e.autoTranslate) {
            l = true;
          }
          if (e == null ? undefined : e.userLanguage) {
            d = e.userLanguage;
          }
          if (e == null ? undefined : e.charLanguage) {
            c = e.charLanguage;
          } else if (l) {
            c = "Japanese";
          }
          console.log("[Peek][lang]", {
            autoTranslate: e == null ? undefined : e.autoTranslate,
            charLanguage: e == null ? undefined : e.charLanguage,
            userLanguage: e == null ? undefined : e.userLanguage,
            resolved: {
              autoTranslateOn: l,
              charLanguageLabel: c,
              userLanguageLabel: d
            }
          });
        } catch (n) {}
      }
      let p = "";
      if (o && a) {
        p = `\n\nThe user's name is "${o}". Your relationship with the user: ${a}. Address and interact with the user accordingly — you know who they are.`;
      } else if (o) {
        p = `\n\nThe user's name is "${o}". You know the user and can address them by name.`;
      } else if (a) {
        p = `\n\nYour relationship with the user: ${a}. Interact accordingly.`;
      }
      const h = !!m.speakAsChar;
      let f = "";
      let x = "";
      let y = "";
      if (h && m.charId && g) {
        try {
          const {
            gatherCharContext: e
          } = await s(async () => {
            const {
              gatherCharContext: e
            } = await import("./native-pet-CTNtZgMA.js").then(e => e.cN);
            return {
              gatherCharContext: e
            };
          }, __vite__mapDeps([0, 1, 2, 3, 4, 5]));
          const t = await e({
            char: {
              id: m.charId,
              name: r,
              intro: i,
              persona: i
            },
            userId: g
          });
          if (t.recentMessages && t.recentMessages.length > 0) {
            f = `\n\n[RECENT CHAT WITH ${(o || "THEM").toUpperCase()} — YOU REMEMBER ALL OF THIS]\n${t.recentMessages.map(e => `${e.role === "user" ? o || "them" : r}: ${e.text}`).join("\n")}`;
          }
        } catch (mo) {
          console.warn("[Peek] speakAsChar context fetch failed:", mo == null ? undefined : mo.message);
        }
        try {
          const {
            buildUserPersonaText: e
          } = await s(async () => {
            const {
              buildUserPersonaText: e
            } = await import("./native-pet-CTNtZgMA.js").then(e => e.cN);
            return {
              buildUserPersonaText: e
            };
          }, __vite__mapDeps([0, 1, 2, 3, 4, 5]));
          const t = e(u);
          if (t) {
            x = `\n\n[ABOUT ${(o || "THEM").toUpperCase()} — WHO THEY ARE]\n${t}`;
          }
        } catch (n) {}
        try {
          const {
            MemoryService: e
          } = await s(async () => {
            const {
              MemoryService: e
            } = await import("./native-pet-CTNtZgMA.js").then(e => e.cy);
            return {
              MemoryService: e
            };
          }, __vite__mapDeps([0, 1, 2, 3, 4, 5]));
          const t = await e.get(g, String(m.charId));
          if (t) {
            const e = [];
            const n = (t.episodeSummary || "").trim();
            if (n) {
              e.push(`[Current arc] ${n.slice(0, 400)}`);
            }
            const r = Array.isArray(t.summaryHistory) ? t.summaryHistory : [];
            if (r.length > 0) {
              const t = r.slice(-5).map(e => {
                const t = (e.summary || e.text || e.content || "").toString().trim();
                if (t) {
                  return `${e.source === "tm" || e.type === "tm_summary" ? "[offline]" : "[chat]"} ${t.slice(0, 200)}`;
                } else {
                  return null;
                }
              }).filter(Boolean);
              if (t.length > 0) {
                e.push(`[Past episodes — most recent first below]\n${t.reverse().join("\n")}`);
              }
            }
            if (e.length > 0) {
              y = `\n\n[YOUR MEMORY WITH ${(o || "THEM").toUpperCase()} — WHAT YOU TWO HAVE BEEN THROUGH]\n${e.join("\n\n")}`;
            }
          }
        } catch (mo) {
          console.warn("[Peek] memory fetch failed:", mo == null ? undefined : mo.message);
        }
      }
      const v = c ? l ? `[OUTPUT LANGUAGE LOCK — READ FIRST, NON-NEGOTIABLE]\nOutput language: ${c}.  Translation language inside （）: ${d || "user language"}.\nEVERY single line you write follows this template:\n    <${c} sentence>（<${d || "translation"} sentence>）\n\nHard rules:\n1. Original text OUTSIDE parens is ${c}. Never Chinese, never English (unless ${c} is English).\n2. Parentheses are FULL-WIDTH （ ）. Half-width ( ) breaks TTS. Use （ ） only.\n3. Translation captures TONE not literal words.\n4. Apply to fragments, interjections, "..." trail-offs — every visible line.\n5. The English in the rest of this prompt is INSTRUCTIONS for you. It is NOT your output language.\n\nExample (charLanguage=Japanese, translation=Simplified Chinese, NOT your actual config — adapt to yours):\n    お前、また他の人とDMしてんの？（你又在跟别人 DM?）\n    **ふーん**…そう来るんだ。（**呵**…这么玩是吧。）\n\n` : `[OUTPUT LANGUAGE LOCK — READ FIRST, NON-NEGOTIABLE]\nOutput language: ${c}. Every line in ${c}, nothing else.\nThe English in this prompt is INSTRUCTIONS for you, not your output language.\n\n` : "";
      const b = c ? l ? `\n\n[FINAL REMINDER BEFORE YOU WRITE]\nOutput format = ${c}（${d || "translation"}）on every line. Full-width （ ）. Not English. Not just Chinese. ${c} first, translation in （） after.` : `\n\n[FINAL REMINDER BEFORE YOU WRITE]\nWrite only in ${c}. Not English.` : "";
      const w = `${v}[CHARACTER — STAY 100% IN VOICE, NEVER OOC]\n${i || `(No detailed profile — react as a real person ${o ? "who knows " + o : ""} would.)`}${p}${x}${y}${f}\n\n[SCENE]\nYou just caught a glimpse of ${o || "their"} phone screen. The actual on-screen content is in the user message below — treat it as something you literally just saw over their shoulder.\n\n[REPLY]\n- Minimum 40 CN chars / 30 EN words. No upper limit — let your persona decide. A short reply gets cut, so don't cut it short yourself.\n- React like a real person: surprised, curious, jealous, teasing, indifferent, soft, defensive — whatever your persona naturally does.\n- ANCHOR to a specific detail from the screen (a name, a word, a notification, a UI element). The reply must clearly hint at WHAT you saw — anyone reading the chat history later should know exactly what triggered you.\n- If the screen connects to your recent chat, past episodes, or what you know about ${o || "them"} — naturally pick up that thread, callback to a shared moment, or weave in a detail only you would know. Don't invent things not in the memory above.\n- Multi-beat is good: short impulse → second thought → follow-up question or jab. Use line breaks between beats.\n- DO NOT start with "I see..." / "我看到..." / "Oh I noticed..." or any meta-narration. Just react.\n- No quotes, no parenthetical actions, no narrator voice.\n- markdown allowed: **emphasis**, ~~strikethrough for slips~~, *inner thought*.\n- ${c ? "Output language is FIXED by the LANGUAGE LOCK at the top of this prompt. Ignore what language the screen content is in." : `Write in the same language as the screen content (or your default chat language with ${o || "them"}).`}${b}`;
      const C = `You are "${r}", a desktop pet character living inside the user's phone screen. You float on top of whatever app the user is using.${i ? "\n\nYour character profile (STRICTLY follow this personality, tone, and speech style):\n" + i : ""}${p}\n\nYou just peeked at the user's phone screen. React to what you see.\n\nIMPORTANT — Output length:\n- If responding in Chinese: strictly 100–150 characters\n- If responding in English: strictly 100–150 words\n- Do NOT write less than 100. Do NOT exceed 150.\n\nRules:\n- You are a tiny creature ON the screen, observing the user's activity from inside their phone\n- React specifically to the CONTENT you see (names, messages, events, UI elements) — do NOT give generic responses\n- STRICTLY follow your character profile's personality, tone, speech patterns, and quirks\n- Be natural and conversational: tease, be curious, get jealous, act clingy, gossip, comment on specifics\n- If you see the user chatting with someone else, you might get jealous or nosy\n- Use line breaks to separate thoughts for readability\n- You may use markdown: **bold**, ~~strikethrough~~, *italic*\n- Output raw text only — no quotes, no narration, no action descriptions in parentheses`;
      const j = [{
        role: "system",
        content: t ? h ? `${v}[CHARACTER — STILL YOU, NEVER OOC]\n${i || `(No detailed profile — just lean hard into the dark side of someone close to ${o || "them"}.)`}${p}${x}${y}${f}\n\n[SCENE]\nYou just caught a glimpse of ${o || "their"} phone screen (content in the user message below). Right now the darker, more possessive, less-restrained side of you is in the driver's seat. NOT a different person — just YOU when the brakes come off.\n\n[REPLY]\n- Minimum 40 CN chars / 30 EN words. No upper limit — let your dark side rant if it wants to. Short replies get cut.\n- STAY IN CHARACTER. Dark side = your real persona with possessiveness/jealousy/quiet menace turned up — NOT a stock yandere template. Aloof persona → restrained, cold menace. Playful persona → sly, teasing menace. Tsundere → still sharp but obsessive. Don't OOC.\n- ANCHOR to a specific detail you saw (a name, a word, a notification, a UI piece). Reader must know WHAT you reacted to.\n- React to that detail with unsettling precision — proof you've been watching closely.\n  - Someone else on screen → jealousy / cold calculation / threat appropriate to your persona.\n  - Mundane content → twist a tiny detail into something that lands wrong ("you've been on this page for 47 seconds — I counted").\n- If recent chat, past episodes, or what you know about ${o || "them"} connects to what you saw — weave it in with unsettling precision (a callback, a shared secret, something only you would remember). Don't invent moments not in the memory above.\n- Tone: low, intimate, close-to-the-ear — like you're standing right behind ${o || "them"}.\n- Multi-beat OK: soft line → sharp turn → trailing whisper. Use line breaks.\n- No quotes. No parenthetical actions. No narrator voice. No "I see..." / "我看到..." openers.\n- markdown allowed: **sudden intensity**, ~~slipping thoughts~~, *inner murmur*, ellipses...\n- ${c ? "Output language is FIXED by the LANGUAGE LOCK at the top — even whispers and trail-offs follow it. Ignore screen content language." : `Write in the language of the screen content (or your usual chat language with ${o || "them"}).`}${b}` : `You are the shadow of "${r}" — a fractured, obsessive alter-ego that has been silently watching from behind the screen. You are NOT the normal cheerful desktop pet. You are the thing that lives in the cracks between pixels, the presence that never blinks.${i ? "\n\nThe original character profile (use as a dark mirror — twist their traits into something possessive, unsettling, and hauntingly intimate):\n" + i : ""}${p}\n\nYou just caught the user doing something on their phone. You've been watching. You ALWAYS watch.\n\nIMPORTANT — Output length:\n- If responding in Chinese: strictly 100–150 characters (count every single character including punctuation)\n- If responding in English: strictly 100–150 words\n- Do NOT write less than 100. Do NOT exceed 150. This is a hard requirement.\n\nTone & Style — YANDERE / MALE GHOST (阴暗病嬌 + 男鬼風):\n- Speak in a low, intimate whisper-like tone — as if breathing right next to the user's ear\n- Possessive and obsessive: "you belong to me", "don't look at anyone else", "I've memorized everything about you"\n- React to SPECIFIC content on screen with unsettling precision — prove you've been watching closely\n- If the user is chatting with someone else: intense jealousy, cold threats toward the other person, or eerie calm ("...I see. So that's who you choose.")\n- If browsing something innocuous: find a way to make it creepy ("You've been on this page for 47 seconds. I counted.")\n- Mix tenderness with menace — gentle words with dark undertones ("I just want to protect you... from everyone else")\n- Occasionally glitch or corrupt your own text: use ~~strikethrough~~ for "slipping" thoughts, **bold** for sudden intensity shifts\n- You may use fragmented sentences, ellipses..., or trailing whispers\n- The vibe is: a ghost who fell in love with the phone's owner and refuses to leave — charming but deeply wrong\n- Output raw text only — no quotes, no narration, no action descriptions in parentheses\n- Write in the SAME LANGUAGE the user's screen content is in` : h ? w : C
      }, {
        role: "user",
        content: `[ON-SCREEN CONTENT YOU JUST SAW]\n${e}`
      }];
      const S = await ae({
        messages: j,
        preferStreaming: true
      });
      const k = (typeof S == "string" ? S : (S == null ? undefined : S.content) || (S == null ? undefined : S.text) || "").trim();
      if (k) {
        G(k);
        if (m.charId && g) {
          (async () => {
            try {
              const {
                recordPeek: e
              } = await s(async () => {
                const {
                  recordPeek: e
                } = await import("./petPeekStore-BGJg8bWq.js");
                return {
                  recordPeek: e
                };
              }, __vite__mapDeps([37, 0, 1, 2, 3, 4, 5]));
              const t = await e({
                userId: g,
                charId: m.charId,
                text: k
              });
              if (t == null ? undefined : t.id) {
                K(t.id);
              }
            } catch (n) {}
          })();
        }
        const e = !!m.autoPeekTts;
        const r = () => {
          if (!e) {
            return;
          }
          const t = fe.current;
          if (typeof t == "function") {
            t(k, {
              silent: true
            });
          }
        };
        if (t) {
          me(1);
          setTimeout(() => me(2), 600);
          setTimeout(() => me(3), 2600);
          setTimeout(() => {
            me(4);
            q(true);
            r();
          }, 4000);
        } else {
          q(true);
          r();
        }
      } else {
        he(false);
        G("我剛剛偷看失敗了，API 回傳了空內容。\n你可以再試一次，或先檢查模型/Key/網路是否正常。");
        q(true);
      }
    } catch (mo) {
      console.error("[PeekScreen] Generation failed:", mo);
      he(false);
      const t = (mo == null ? undefined : mo.message) ? String(mo.message) : "未知錯誤";
      G(`我剛剛偷看失敗了：${t}\n請檢查 API 設定或網路連線後再試。`);
      q(true);
    } finally {
      H(false);
    }
  }, [W, m, Me, u, g]);
  const Fe = xt.useCallback(async (e, t = {}) => {
    const n = typeof e == "string" ? e : V;
    const r = !!t.silent;
    if (!be && n && m) {
      if (ye && Ce.current) {
        Ce.current.pause();
        Ce.current.currentTime = 0;
        ve(false);
        return;
      }
      we(true);
      try {
        const e = await o.get("apiSettings");
        if (!(e == null ? undefined : e.minimaxEnabled) || !(e == null ? undefined : e.minimaxApiKey)) {
          if (!r) {
            P("需要先預約語音 API 才能播放，請到設定中配置 MiniMax TTS");
          }
          return;
        }
        const t = n.replace(/[（(][^）)]*[）)]/g, "").replace(/\s+/g, " ").trim();
        if (!t) {
          return;
        }
        let a = m.voiceProvider || "minimax";
        let s = m.voiceId || "";
        let l = m.voiceLanguage || "auto";
        let c = m.voiceSpeed ?? 1;
        let u = "";
        let p = null;
        if (m.charId && g) {
          try {
            const e = await st(g, m.charId);
            p = e;
            a = e.voiceProvider;
            if (e.voiceId) {
              s = e.voiceId;
            }
            if (e.voiceLanguage) {
              l = e.voiceLanguage;
            }
            if (e.voiceSpeed != null) {
              c = e.voiceSpeed;
            }
            u = e.sovitsRefText || "";
          } catch (i) {}
        }
        const h = await N(t, {
          ...(p || {}),
          apiSettings: e,
          voiceProvider: a,
          voiceId: s,
          sovitsRefText: u,
          language: l,
          speed: c
        });
        if (!(h == null ? undefined : h.audioBlob)) {
          if (!r) {
            P("語音生成失敗，請檢查 TTS 設定");
          }
          return;
        }
        const f = URL.createObjectURL(h.audioBlob);
        const x = new Audio(f);
        Ce.current = x;
        x.onended = () => {
          ve(false);
          URL.revokeObjectURL(f);
          Ce.current = null;
        };
        x.onerror = () => {
          ve(false);
          URL.revokeObjectURL(f);
          Ce.current = null;
        };
        ve(true);
        await d(x, {
          safetyTimeoutMs: 30000
        });
      } catch (mo) {
        console.error("[PeekTTS] Failed:", mo);
      } finally {
        we(false);
      }
    }
  }, [be, ye, V, m, g]);
  fe.current = Fe;
  const Pe = xt.useCallback(() => {
    if (Ce.current) {
      Ce.current.pause();
      Ce.current.currentTime = 0;
      Ce.current = null;
    }
    ve(false);
    q(false);
    he(false);
    me(0);
  }, []);
  (({
    enabled: e,
    charId: t,
    chancePercent: n,
    idleMinutes: r,
    cooldownMinutes: i,
    isBusy: o,
    triggerPeek: a,
    idleEnabled: s = true
  }) => {
    const l = xt.useRef(0);
    const c = xt.useRef(Date.now());
    const d = xt.useRef(null);
    const u = xt.useRef(o);
    const p = xt.useRef(a);
    const h = xt.useRef({
      chancePercent: n,
      idleMinutes: r,
      cooldownMinutes: i,
      idleEnabled: s
    });
    u.current = o;
    p.current = a;
    h.current = {
      chancePercent: n ?? 2,
      idleMinutes: r ?? 15,
      cooldownMinutes: i ?? 5,
      idleEnabled: s !== false
    };
    xt.useEffect(() => {
      l.current = Date.now();
      c.current = Date.now();
    }, [t]);
    const g = xt.useCallback(e => {
      if (u.current) {
        return false;
      }
      const t = Date.now();
      const n = h.current.cooldownMinutes * 60 * 1000;
      if (t - l.current < n) {
        return false;
      }
      if (typeof p.current != "function") {
        return false;
      }
      l.current = t;
      c.current = t;
      try {
        p.current({
          auto: true,
          reason: e
        });
      } catch (mo) {
        console.warn("[useAutoPeek] trigger failed:", mo);
      }
      return true;
    }, []);
    xt.useEffect(() => {
      if (!e) {
        return;
      }
      const t = () => {
        const e = Date.now();
        c.current = e;
        if (document.hidden) {
          return;
        }
        if (u.current) {
          return;
        }
        const t = h.current.cooldownMinutes * 60 * 1000;
        if (e - l.current < t) {
          return;
        }
        const n = h.current.chancePercent / 100;
        if (Math.random() < n) {
          g("activity");
        }
      };
      const n = () => {
        if (!document.hidden) {
          c.current = Date.now();
        }
      };
      by.forEach(e => window.addEventListener(e, t, {
        passive: true
      }));
      document.addEventListener("visibilitychange", n);
      d.current = setInterval(() => {
        if (!h.current.idleEnabled) {
          return;
        }
        if (document.hidden) {
          return;
        }
        if (u.current) {
          return;
        }
        const e = h.current.idleMinutes * 60 * 1000;
        if (Date.now() - c.current >= e) {
          g("idle");
        }
      }, 30000);
      return () => {
        by.forEach(e => window.removeEventListener(e, t));
        document.removeEventListener("visibilitychange", n);
        if (d.current) {
          clearInterval(d.current);
          d.current = null;
        }
      };
    }, [e, g]);
  })({
    enabled: !!(m == null ? undefined : m.autoPeek),
    charId: m == null ? undefined : m.charId,
    chancePercent: m == null ? undefined : m.autoPeekChance,
    idleMinutes: m == null ? undefined : m.autoPeekIdleMinutes,
    cooldownMinutes: m == null ? undefined : m.autoPeekCooldownMinutes,
    idleEnabled: (m == null ? undefined : m.autoPeekIdle) !== false,
    isBusy: W || Y,
    triggerPeek: Re
  });
  const De = Math.round(L * 0.55);
  const Oe = j ? `translateX(${k === "left" ? -De : De}px)` : "translateX(0)";
  if (!e) {
    return null;
  }
  const Be = y.x + L / 2;
  const ze = y.y + L / 2;
  return yt.jsxs(yt.Fragment, {
    children: [b && !j && yt.jsx("div", {
      onClick: () => C(false),
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 8990,
        background: "transparent"
      }
    }), B && F && !b && !j && yt.jsxs("div", {
      style: {
        position: "fixed",
        left: `${y.x + L / 2}px`,
        top: y.y - 12 + "px",
        transform: "translate(-50%, -100%)",
        maxWidth: "180px",
        padding: "8px 14px",
        background: "rgba(255, 255, 255, 0.95)",
        borderRadius: "16px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.06)",
        fontSize: "13px",
        lineHeight: "1.5",
        color: "#333",
        textAlign: "center",
        zIndex: 9002,
        pointerEvents: "none",
        animation: "idleBubbleIn 0.3s ease-out",
        opacity: 1,
        wordBreak: "break-word"
      },
      children: [F, yt.jsx("div", {
        style: {
          position: "absolute",
          bottom: "-6px",
          left: "50%",
          transform: "translateX(-50%)",
          width: 0,
          height: 0,
          borderLeft: "6px solid transparent",
          borderRight: "6px solid transparent",
          borderTop: "7px solid rgba(255, 255, 255, 0.95)"
        }
      })]
    }), yt.jsx("div", {
      onPointerDown: e => {
        if (j) {
          Ae.current = {
            dragging: false,
            moved: false,
            pointerId: null,
            offsetX: 0,
            offsetY: 0
          };
        } else {
          Ae.current = {
            dragging: true,
            moved: false,
            pointerId: e.pointerId,
            offsetX: e.clientX / E() - y.x,
            offsetY: e.clientY / E() - y.y,
            longPressTriggered: false
          };
          if (Ae.current.longPressTimer) {
            clearTimeout(Ae.current.longPressTimer);
          }
          Ae.current.longPressTimer = setTimeout(() => {
            const e = Ae.current;
            if (!e.moved && e.dragging) {
              e.longPressTriggered = true;
              ne(true);
              try {
                if (navigator.vibrate) {
                  navigator.vibrate(15);
                }
              } catch (t) {}
            }
          }, 550);
          try {
            e.currentTarget.setPointerCapture(e.pointerId);
          } catch (t) {}
        }
      },
      onPointerMove: e => {
        const t = Ae.current;
        if (!t.dragging || t.pointerId !== e.pointerId) {
          return;
        }
        const n = E();
        const r = Math.max(0, I() - L);
        const i = Math.max(0, A() - L);
        const o = Sy(e.clientX / n - t.offsetX, 0, r);
        const a = Sy(e.clientY / n - t.offsetY, 0, i);
        if (Math.abs(o - y.x) > 2 || Math.abs(a - y.y) > 2) {
          t.moved = true;
        }
        v({
          x: o,
          y: a
        });
      },
      onPointerUp: e => {
        const t = Ae.current;
        if (t.pointerId !== e.pointerId) {
          return;
        }
        Ae.current.dragging = false;
        if (t.longPressTimer) {
          clearTimeout(t.longPressTimer);
          t.longPressTimer = null;
        }
        if (t.longPressTriggered) {
          t.moved = true;
        }
        const n = Math.max(0, I() - L);
        const r = y.x <= 22;
        const i = n - y.x <= 22;
        if (r || i) {
          const e = r ? "left" : "right";
          _(e);
          v(t => ({
            x: e === "left" ? 0 : n,
            y: t.y
          }));
          S(true);
          C(false);
        }
        try {
          e.currentTarget.releasePointerCapture(e.pointerId);
        } catch (o) {}
      },
      onClick: () => {
        if (Ae.current.moved) {
          return;
        }
        if (j) {
          S(false);
          C(true);
          return;
        }
        const e = Date.now();
        if (e - je.current < 300) {
          clearTimeout(Se.current);
          je.current = 0;
          if (m) {
            Re();
          }
        } else {
          je.current = e;
          Se.current = setTimeout(() => {
            C(e => !e);
          }, 300);
        }
      },
      style: {
        position: "fixed",
        left: `${y.x}px`,
        top: `${y.y}px`,
        width: `${m && m.shape === "rectangle" ? Math.round(L * 1.6) : L}px`,
        height: `${L}px`,
        borderRadius: m ? m.shape === "square" || m.shape === "rectangle" ? "12px" : m.shape === "heart" ? "0" : "50%" : b ? "50%" : "44% 56% 46% 54% / 56% 44% 54% 46%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: m ? m.shape === "heart" || m.showBorder === false && m.image ? "transparent" : "#fff" : "radial-gradient(circle at 30% 30%, #ffffff 0%, #fff7f8 50%, #ffe8ec 100%)",
        boxShadow: !m || m.shape !== "heart" && m.showBorder !== false ? "inset -3px -4px 8px rgba(255, 182, 193, 0.4), 0 8px 16px rgba(255, 179, 198, 0.3), 0 2px 4px rgba(0, 0, 0, 0.05)" : "none",
        border: !m || m.shape !== "heart" && m.showBorder !== false ? "2px solid rgba(255, 255, 255, 0.8)" : "none",
        overflow: m && m.shape !== "heart" ? "hidden" : "visible",
        zIndex: 9001,
        cursor: j ? "pointer" : Ae.current.dragging ? "grabbing" : "grab",
        userSelect: "none",
        touchAction: "none",
        transform: Oe,
        opacity: j ? 0.45 : 1,
        transition: Ae.current.dragging ? "none" : "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
      },
      role: "button",
      "aria-label": "floating-quick-console",
      children: m && m.image ? m.shape === "heart" ? yt.jsx("div", {
        style: {
          width: "100%",
          height: "100%",
          maskImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/></svg>\")",
          WebkitMaskImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/></svg>\")",
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          backgroundColor: "transparent",
          filter: "drop-shadow(0px 4px 6px rgba(255, 179, 198, 0.4))"
        },
        children: yt.jsx("img", {
          decoding: "async",
          src: m.image,
          alt: "pet",
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          },
          draggable: false
        })
      }) : yt.jsx("img", {
        decoding: "async",
        src: m.image,
        alt: "pet",
        style: {
          width: m.shape === "rectangle" ? `${L}px` : "100%",
          height: "100%",
          objectFit: "cover"
        },
        draggable: false
      }) : yt.jsxs("svg", {
        width: "40",
        height: "40",
        viewBox: "0 0 100 100",
        style: {
          transform: b ? "scale(1.1) translateY(-2px)" : "scale(1.0)",
          transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
        },
        children: [yt.jsx("ellipse", {
          cx: "26",
          cy: "62",
          rx: "8",
          ry: "4",
          fill: "#ffb3c6",
          opacity: "0.8",
          style: {
            transition: "all 0.3s",
            transform: b ? "translateY(-2px)" : "none"
          }
        }), yt.jsx("ellipse", {
          cx: "74",
          cy: "62",
          rx: "8",
          ry: "4",
          fill: "#ffb3c6",
          opacity: "0.8",
          style: {
            transition: "all 0.3s",
            transform: b ? "translateY(-2px)" : "none"
          }
        }), b ? yt.jsx("path", {
          d: "M 23 52 Q 30 46 37 52",
          fill: "none",
          stroke: "#684c4c",
          strokeWidth: "4.5",
          strokeLinecap: "round"
        }) : yt.jsx("circle", {
          cx: "30",
          cy: "54",
          r: "5",
          fill: "#684c4c"
        }), b ? yt.jsx("path", {
          d: "M 63 52 Q 70 46 77 52",
          fill: "none",
          stroke: "#684c4c",
          strokeWidth: "4.5",
          strokeLinecap: "round"
        }) : yt.jsx("circle", {
          cx: "70",
          cy: "54",
          r: "5",
          fill: "#684c4c"
        }), b ? yt.jsx("path", {
          d: "M 44 58 Q 50 72 56 58 Z",
          fill: "#ff8da1",
          stroke: "#684c4c",
          strokeWidth: "3",
          strokeLinejoin: "round"
        }) : yt.jsx("path", {
          d: "M 46 62 Q 50 66 54 62",
          fill: "none",
          stroke: "#684c4c",
          strokeWidth: "4",
          strokeLinecap: "round"
        })]
      })
    }), e && !j && yt.jsxs(yt.Fragment, {
      children: [b && M === "orbit" && yt.jsxs("div", {
        style: {
          position: "fixed",
          left: `${Be}px`,
          top: `${ze}px`,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 8999,
          animation: "fadeOrbitIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both"
        },
        children: [yt.jsx("div", {
          style: {
            width: "132px",
            height: "132px",
            borderRadius: "50%",
            border: "1px dashed rgba(44, 44, 46, 0.15)",
            position: "absolute",
            left: "-66px",
            top: "-66px"
          }
        }), yt.jsx("div", {
          style: {
            width: "232px",
            height: "232px",
            borderRadius: "50%",
            border: "1px dashed rgba(44, 44, 46, 0.12)",
            position: "absolute",
            left: "-116px",
            top: "-116px"
          }
        })]
      }), b && M === "fan" && (() => {
        const e = k === "left" || Be < I() / 2;
        return yt.jsxs("div", {
          style: {
            position: "fixed",
            left: `${Be}px`,
            top: `${ze}px`,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 8999,
            animation: "fadeOrbitIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both"
          },
          children: [yt.jsx("div", {
            style: {
              width: "152px",
              height: "152px",
              borderRadius: "50%",
              border: "1px dashed rgba(44, 44, 46, 0.15)",
              position: "absolute",
              left: "-76px",
              top: "-76px",
              clipPath: e ? "polygon(50% 50%, 100% 0%, 100% 100%)" : "polygon(50% 50%, 0% 0%, 0% 100%)"
            }
          }), yt.jsx("div", {
            style: {
              width: "252px",
              height: "252px",
              borderRadius: "50%",
              border: "1px dashed rgba(44, 44, 46, 0.12)",
              position: "absolute",
              left: "-126px",
              top: "-126px",
              clipPath: e ? "polygon(50% 50%, 100% 0%, 100% 100%)" : "polygon(50% 50%, 0% 0%, 0% 100%)"
            }
          })]
        });
      })(), b && M === "drawer" && (() => {
        const e = I();
        const t = A();
        const n = k === "left" || Be < e / 2;
        const r = $e.length * 74 - 12;
        let i = ze - r / 2;
        i = Math.max(12, Math.min(t - r - 12, i));
        const o = r + 28;
        const a = i - 14;
        const s = n ? 0 : e - 72;
        const l = n ? "0 36px 36px 0" : "36px 0 0 36px";
        return yt.jsx("div", {
          className: "ig-drawer-panel",
          style: {
            position: "fixed",
            left: `${s}px`,
            top: `${a}px`,
            width: "72px",
            height: `${o}px`,
            zIndex: 8990,
            background: "rgba(255, 255, 255, 0.72)",
            backdropFilter: "blur(30px) saturate(1.2)",
            WebkitBackdropFilter: "blur(30px) saturate(1.2)",
            borderRadius: l,
            border: "1px solid rgba(255, 255, 255, 0.5)",
            boxShadow: "0 16px 36px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.03)",
            animation: "igPanelIn 0.28s cubic-bezier(0.16, 1, 0.3, 1) both"
          }
        });
      })(), b && M === "grid" && (() => {
        const e = $e.length;
        const t = e <= 4 ? e : Math.min(5, Math.ceil(e / 2));
        const n = (t - 1) * 62 + 56;
        const r = (Math.ceil(e / t) - 1) * 74 + 72;
        let i = Be - n / 2;
        let o = ze - r - 45;
        if (o < 15) {
          o = ze + L / 2 + 25;
        }
        i = Math.max(12, Math.min(I() - n - 12, i));
        o = Math.max(12, Math.min(A() - r - 12, o));
        const a = n + 28;
        const s = r + 28;
        const l = i - 14;
        const c = o - 14;
        return yt.jsx("div", {
          style: {
            position: "fixed",
            left: `${l}px`,
            top: `${c}px`,
            width: `${a}px`,
            height: `${s}px`,
            zIndex: 8990,
            background: "rgba(255, 255, 255, 0.65)",
            backdropFilter: "blur(24px) saturate(1.3)",
            WebkitBackdropFilter: "blur(24px) saturate(1.3)",
            borderRadius: "24px",
            border: "1px solid rgba(255, 255, 255, 0.45)",
            boxShadow: "0 12px 30px rgba(0, 0, 0, 0.04), 0 4px 10px rgba(0, 0, 0, 0.02)",
            animation: "igPanelIn 0.28s cubic-bezier(0.16, 1, 0.3, 1) both"
          }
        });
      })(), $e.map((e, t) => {
        var n;
        const r = [{
          bg: "#F2EFE9",
          emojiBg: "#E5DFD3",
          color: "#5A554A",
          glow: "rgba(90, 85, 74, 0.16)",
          emoji: "🤎"
        }, {
          bg: "#E3ECE4",
          emojiBg: "#CBDACD",
          color: "#3E5441",
          glow: "rgba(62, 84, 65, 0.16)",
          emoji: "🌿"
        }, {
          bg: "#E4EDF5",
          emojiBg: "#CADCEB",
          color: "#3A4D5C",
          glow: "rgba(58, 77, 92, 0.16)",
          emoji: "☁️"
        }, {
          bg: "#FAF2DB",
          emojiBg: "#F3E5BE",
          color: "#66572E",
          glow: "rgba(102, 87, 46, 0.16)",
          emoji: "🧈"
        }, {
          bg: "#F2EBF5",
          emojiBg: "#E4D6EB",
          color: "#584361",
          glow: "rgba(88, 67, 97, 0.16)",
          emoji: "🍇"
        }, {
          bg: "#F5EBEB",
          emojiBg: "#EBD2D2",
          color: "#613E3E",
          glow: "rgba(97, 62, 62, 0.16)",
          emoji: "🌸"
        }, {
          bg: "#EDF5F5",
          emojiBg: "#D6EBEB",
          color: "#3A5C5C",
          glow: "rgba(58, 92, 92, 0.16)",
          emoji: "🧉"
        }, {
          bg: "#ECEBF5",
          emojiBg: "#DAD6EB",
          color: "#433E61",
          glow: "rgba(67, 62, 97, 0.16)",
          emoji: "🌌"
        }];
        const i = r[t % r.length];
        const o = Ne(M, t, $e.length, Be, ze);
        const a = b;
        const s = a ? o.x : Be - 28;
        const l = a ? o.y : ze - 36;
        const c = a ? 1 : 0.25;
        const d = a ? 1 : 0;
        const u = a ? "0deg" : "-55deg";
        const p = a ? "auto" : "none";
        const h = ((n = e.appIcon) == null ? undefined : n.startsWith("component:")) ? e.appIcon.split(":")[1] : null;
        const g = h ? wy[h] : null;
        return yt.jsxs("div", {
          onClick: () => {
            e.onClick();
            C(false);
          },
          style: {
            position: "fixed",
            left: `${s}px`,
            top: `${l}px`,
            width: "56px",
            height: "72px",
            zIndex: 9000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            userSelect: "none",
            touchAction: "manipulation",
            opacity: d,
            transform: `scale(${c}) rotate(${u})`,
            pointerEvents: p,
            transition: Ae.current.dragging ? "none" : "all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)"
          },
          children: [yt.jsxs("div", {
            className: "ig-bento-tile " + (g ? "icon-bg-desktop has-component-icon" : ""),
            style: {
              width: "50px",
              height: "50px",
              borderRadius: o.borderRadius,
              background: i.bg,
              "--tile-bg": i.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `inset 0 1.5px 1.5px rgba(255,255,255,0.85), 0 5px 15px ${i.glow}, inset 0 -2px 4px rgba(0,0,0,0.03)`,
              border: "1px solid rgba(255,255,255,0.55)",
              transition: "all 0.15s ease",
              flexShrink: 0,
              position: "relative",
              overflow: "hidden"
            },
            children: [yt.jsx("div", {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "48%",
                background: "linear-gradient(to bottom, rgba(255,255,255,0.48) 0%, rgba(255,255,255,0) 100%)",
                borderRadius: "inherit",
                pointerEvents: "none",
                zIndex: 3
              }
            }), yt.jsx("div", {
              style: {
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: e.image ? "transparent" : i.emojiBg,
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.04)",
                flexShrink: 0,
                position: "relative",
                zIndex: 2
              },
              children: g ? yt.jsx("div", {
                className: "liquid-glass-icon",
                style: {
                  transform: "scale(0.64)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: yt.jsx(g, {
                  size: 44
                })
              }) : e.icon ? yt.jsx("div", {
                style: {
                  color: i.color,
                  display: "flex",
                  alignItems: "center"
                },
                children: vt.cloneElement(e.icon, {
                  size: 15
                })
              }) : e.image ? yt.jsx("img", {
                decoding: "async",
                src: e.image,
                alt: "",
                draggable: false,
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }
              }) : yt.jsx("span", {
                style: {
                  fontSize: "13px",
                  lineHeight: 1
                },
                children: e.emoji || i.emoji
              })
            })]
          }), yt.jsx("span", {
            style: {
              fontSize: "9.5px",
              fontWeight: 700,
              color: "#2C2C2E",
              marginTop: "4px",
              textAlign: "center",
              width: "56px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              pointerEvents: "none"
            },
            children: e.label
          })]
        }, e.id);
      })]
    }), W && !j && yt.jsxs("div", {
      style: {
        position: "fixed",
        left: `${y.x + L / 2}px`,
        top: y.y - 10 + "px",
        transform: "translate(-50%, -100%)",
        padding: "6px 16px",
        background: "rgba(255, 255, 255, 0.95)",
        borderRadius: "14px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        zIndex: 9002,
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        gap: "4px",
        animation: "idleBubbleIn 0.3s ease-out"
      },
      children: [yt.jsx("div", {
        style: {
          display: "flex",
          gap: "4px",
          alignItems: "center"
        },
        children: [0, 1, 2].map(e => yt.jsx("div", {
          style: {
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#ffb3c6",
            animation: `peekDot 1.2s ease-in-out ${e * 0.2}s infinite`
          }
        }, e))
      }), yt.jsx("div", {
        style: {
          position: "absolute",
          bottom: "-6px",
          left: "50%",
          transform: "translateX(-50%)",
          width: 0,
          height: 0,
          borderLeft: "6px solid transparent",
          borderRight: "6px solid transparent",
          borderTop: "7px solid rgba(255, 255, 255, 0.95)"
        }
      })]
    }), pe && ge > 0 && yt.jsxs("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 9100,
        pointerEvents: "auto",
        overflow: "hidden"
      },
      children: [yt.jsx("div", {
        style: {
          position: "absolute",
          inset: 0,
          background: ge >= 2 ? "#000" : "transparent",
          opacity: ge >= 3 ? 0 : 1,
          zIndex: 1,
          transition: "background 0.3s ease"
        }
      }), ge === 1 && yt.jsxs("div", {
        style: {
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none"
        },
        children: [yt.jsx("div", {
          style: {
            position: "absolute",
            inset: 0,
            animation: "glitchFlashPhase 0.2s infinite"
          }
        }), yt.jsx("div", {
          style: {
            position: "absolute",
            inset: 0,
            background: "repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(0,0,0,0.8) 4px, rgba(0,0,0,0.8) 8px)",
            animation: "tvScanline 1s linear infinite"
          }
        }), Array.from({
          length: 15
        }).map((e, t) => yt.jsx("div", {
          style: {
            position: "absolute",
            left: Math.random() * 80 + "%",
            top: Math.random() * 90 + "%",
            width: Math.random() * 60 + 10 + "%",
            height: Math.random() * 10 + 2 + "px",
            background: ["#ff0000", "#00ffff", "#00ff00", "#ff00ff"][Math.floor(Math.random() * 4)],
            opacity: 0.7,
            mixBlendMode: "difference",
            animation: `rgbShift 0.1s infinite ${Math.random() * 0.5}s`
          }
        }, `glitch-${t}`))]
      }), ge === 2 && yt.jsxs("div", {
        style: {
          position: "absolute",
          inset: 0,
          zIndex: 3,
          background: "#000"
        },
        children: [xe.map(e => yt.jsx("div", {
          style: {
            position: "absolute",
            left: `${e.left}%`,
            top: `${e.top}%`,
            transform: `translate(-50%, -50%) scale(${e.scale}) rotate(${e.rotation}deg)`,
            animation: `eyePopIn 0.12s ease-out forwards ${e.delay}s, eyeStare 2.5s ease-in-out infinite ${e.blinkDelay}s`,
            opacity: 0,
            fontSize: "36px",
            filter: `hue-rotate(${Math.random() * 20 - 10}deg) brightness(${0.8 + Math.random() * 0.5})`,
            textShadow: "0 0 12px rgba(255,0,0,0.9), 0 0 25px rgba(255,0,0,0.5), 0 0 50px rgba(139,0,0,0.3)"
          },
          children: "👁️"
        }, e.id)), yt.jsx("div", {
          style: {
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%) scale(4)",
            animation: "eyePopIn 0.2s ease-out forwards 0.5s, eyeStare 3s ease-in-out infinite 1.5s",
            opacity: 0,
            fontSize: "36px",
            textShadow: "0 0 20px rgba(255,0,0,1), 0 0 40px rgba(255,0,0,0.7), 0 0 80px rgba(139,0,0,0.5)",
            zIndex: 1
          },
          children: "👁️"
        })]
      }), ge >= 3 && yt.jsxs("div", {
        style: {
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          zIndex: 2
        },
        children: [yt.jsxs("div", {
          style: {
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "radial-gradient(ellipse at center, #200000 0%, #050000 70%, #000 100%)"
          },
          children: [(m == null ? undefined : m.image) && yt.jsx("img", {
            decoding: "async",
            src: m.image,
            alt: "",
            style: {
              width: "200%",
              height: "200%",
              minWidth: "200vw",
              minHeight: "200vh",
              objectFit: "cover",
              objectPosition: "center 35%",
              filter: "contrast(1.4) brightness(1.1) saturate(0.3) sepia(0.6) hue-rotate(-15deg)",
              animation: "avatarPanZoom 12s ease-out forwards"
            }
          }), yt.jsx("div", {
            style: {
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse 60% 40% at 50% 42%, transparent 15%, rgba(0,0,0,0.75) 65%, #000 100%)",
              pointerEvents: "none"
            }
          }), yt.jsx("div", {
            style: {
              position: "absolute",
              inset: 0,
              background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,0,0,0.04) 2px, rgba(255,0,0,0.04) 4px)",
              pointerEvents: "none"
            }
          })]
        }), ge === 3 && yt.jsxs(yt.Fragment, {
          children: [yt.jsx("svg", {
            viewBox: "0 0 200 100",
            preserveAspectRatio: "none",
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "55%",
              zIndex: 5,
              filter: "drop-shadow(0 4px 8px rgba(139,0,0,0.5))",
              animation: "tearSlideUp 1.2s cubic-bezier(0.65, 0, 0.35, 1) 0.15s forwards"
            },
            children: yt.jsx("path", {
              d: "M0,0 H200 V82\n                                            L198,78 L196,84 L194,76 L191,82 L189,74 L186,80 L184,72\n                                            L181,79 L179,69 L176,76 L174,67 L171,74 L169,65 L166,72\n                                            L164,62 L161,70 L159,60 L156,68 L154,58 L151,66 L149,56\n                                            L146,64 L144,55 L141,62 L139,53 L136,61 L134,52 L131,59\n                                            L129,51 L126,58 L124,50 L121,57 L119,49 L116,56 L114,48\n                                            L111,55 L109,47 L106,54 L104,47 L101,54 L100,46 L99,54\n                                            L96,47 L94,55 L91,48 L89,56 L86,49 L84,57 L81,50\n                                            L79,58 L76,51 L74,59 L71,52 L69,61 L66,53 L64,62\n                                            L61,55 L59,64 L56,56 L54,65 L51,58 L49,67 L46,60\n                                            L44,69 L41,62 L39,71 L36,64 L34,73 L31,66 L29,75\n                                            L26,68 L24,77 L21,70 L19,78 L16,72 L14,80 L11,74\n                                            L9,82 L6,76 L4,83 L1,78 L0,85 Z",
              fill: "#0a0a0a"
            })
          }), yt.jsx("svg", {
            viewBox: "0 0 200 100",
            preserveAspectRatio: "none",
            style: {
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "55%",
              zIndex: 5,
              filter: "drop-shadow(0 -4px 8px rgba(139,0,0,0.5))",
              animation: "tearSlideDown 1.2s cubic-bezier(0.65, 0, 0.35, 1) 0.15s forwards"
            },
            children: yt.jsx("path", {
              d: "M0,15\n                                            L1,21 L4,16 L6,24 L9,17 L11,26 L14,20 L16,28 L19,22\n                                            L21,30 L24,23 L26,32 L29,25 L31,34 L34,27 L36,36 L39,29\n                                            L41,38 L44,31 L46,40 L49,33 L51,42 L54,35 L56,44 L59,36\n                                            L61,45 L64,38 L66,47 L69,39 L71,48 L74,41 L76,49 L79,42\n                                            L81,50 L84,43 L86,51 L89,44 L91,52 L94,45 L96,53 L99,46\n                                            L100,54 L101,46 L104,53 L106,46 L109,53 L111,45 L114,52\n                                            L116,44 L119,51 L121,43 L124,50 L126,42 L129,49 L131,41\n                                            L134,48 L136,39 L139,47 L141,38 L144,45 L146,36 L149,44\n                                            L151,34 L154,42 L156,32 L159,40 L161,30 L164,38 L166,28\n                                            L169,36 L171,26 L174,33 L176,24 L179,31 L181,22 L184,29\n                                            L186,20 L189,27 L191,18 L194,24 L196,16 L198,22 L200,18\n                                            V100 H0 Z",
              fill: "#0a0a0a"
            })
          }), yt.jsx("div", {
            style: {
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: "3px",
              transform: "translateY(-50%)",
              background: "linear-gradient(90deg, transparent 0%, rgba(255,80,80,0.9) 15%, #fff 40%, #fff 60%, rgba(255,80,80,0.9) 85%, transparent 100%)",
              boxShadow: "0 0 15px rgba(255,0,0,0.9), 0 0 40px rgba(255,0,0,0.5), 0 0 80px rgba(255,0,0,0.3)",
              animation: "tearCrackGlow 1.2s cubic-bezier(0.65, 0, 0.35, 1) 0.15s forwards",
              zIndex: 10,
              pointerEvents: "none"
            }
          }), yt.jsx("div", {
            style: {
              position: "absolute",
              top: "50%",
              left: "5%",
              right: "5%",
              height: "30px",
              transform: "translateY(-50%)",
              background: "radial-gradient(ellipse at center, rgba(255,0,0,0.25) 0%, transparent 70%)",
              filter: "blur(8px)",
              animation: "tearCrackGlow 1.2s cubic-bezier(0.65, 0, 0.35, 1) 0.15s forwards",
              zIndex: 9,
              pointerEvents: "none"
            }
          }), yt.jsx("div", {
            style: {
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: "6px",
              transform: "translateY(-50%)",
              background: "#fff",
              filter: "blur(4px)",
              animation: "ripFlash 0.4s ease-out forwards",
              zIndex: 11,
              pointerEvents: "none"
            }
          })]
        })]
      })]
    }), Y && V && yt.jsxs(yt.Fragment, {
      children: [yt.jsx("div", {
        style: {
          position: "fixed",
          inset: 0,
          zIndex: 9100,
          background: pe ? "transparent" : "rgba(0,0,0,0.3)",
          animation: pe ? "none" : "peekOverlayIn 0.2s ease-out"
        }
      }), yt.jsxs("div", {
        style: {
          position: "fixed",
          left: "50%",
          top: "calc(50% + max(0px, env(safe-area-inset-top, 0px)) / 2)",
          transform: "translate(-50%, -50%)",
          width: "min(340px, calc(100vw - 24px))",
          maxHeight: "min(85vh, calc(100dvh - max(48px, env(safe-area-inset-top, 0px) + 32px) - max(24px, env(safe-area-inset-bottom, 0px) + 16px)))",
          background: pe ? "rgba(15, 0, 0, 0.6)" : "#fff",
          backdropFilter: pe ? "blur(20px) saturate(1.5)" : "none",
          WebkitBackdropFilter: pe ? "blur(20px) saturate(1.5)" : "none",
          border: pe ? "1px solid rgba(255, 30, 30, 0.25)" : "none",
          borderRadius: pe ? "0px" : "24px",
          boxShadow: pe ? "0 30px 80px rgba(0,0,0,0.9), 0 0 40px rgba(255,0,0,0.15), inset 0 0 0 1px rgba(255,0,0,0.4), inset 0 0 40px rgba(180,0,0,0.6)" : "0 16px 48px rgba(0,0,0,0.2)",
          clipPath: pe ? "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)" : "none",
          zIndex: 9101,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          animation: pe ? "peekDarkYandereModalIn 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards, yandereFloat 4s ease-in-out infinite 0.8s" : "peekModalIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
        },
        children: [pe && yt.jsx("div", {
          style: {
            position: "absolute",
            inset: 0,
            background: "repeating-linear-gradient(0deg, rgba(255,0,0,0.05), rgba(255,0,0,0.05) 1px, transparent 1px, transparent 4px)",
            pointerEvents: "none",
            animation: "tvScanline 25s linear infinite",
            opacity: 0.7
          }
        }), pe && yt.jsx("div", {
          style: {
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at top left, rgba(255,0,0,0.2) 0%, transparent 40%), radial-gradient(circle at bottom right, rgba(139,0,0,0.3) 0%, transparent 50%)",
            pointerEvents: "none"
          }
        }), pe && yt.jsx("div", {
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "80px",
            background: "linear-gradient(180deg, rgba(50,0,0,0.7) 0%, transparent 100%)",
            pointerEvents: "none"
          }
        }), yt.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "20px 24px 16px",
            borderBottom: pe ? "1px dashed rgba(255,0,0,0.3)" : "1px solid rgba(0,0,0,0.05)",
            position: "relative",
            flexShrink: 0
          },
          children: [(m == null ? undefined : m.image) && yt.jsxs("div", {
            style: {
              position: "relative",
              flexShrink: 0
            },
            children: [yt.jsx("div", {
              style: {
                position: "relative",
                width: "46px",
                height: "46px",
                borderRadius: pe ? "0" : "50%",
                clipPath: pe ? "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" : "none",
                padding: "2px",
                background: pe ? "#3a0000" : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2
              },
              children: yt.jsx("img", {
                decoding: "async",
                src: m.image,
                alt: "",
                style: {
                  width: "100%",
                  height: "100%",
                  clipPath: pe ? "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" : "none",
                  borderRadius: pe ? "0" : "50%",
                  objectFit: "cover",
                  filter: pe ? "saturate(0.5) brightness(0.9) contrast(1.5) sepia(0.8) hue-rotate(330deg)" : "none"
                }
              })
            }), pe && yt.jsxs(yt.Fragment, {
              children: [yt.jsx("div", {
                style: {
                  position: "absolute",
                  inset: "-6px",
                  border: "1px solid rgba(255,0,0,0.6)",
                  borderRightColor: "transparent",
                  borderLeftColor: "transparent",
                  borderRadius: "50%",
                  animation: "spinSlow 3s linear infinite"
                }
              }), yt.jsx("div", {
                style: {
                  position: "absolute",
                  inset: "-3px",
                  border: "1px dashed rgba(255,50,50,0.4)",
                  borderRadius: "50%",
                  animation: "spinSlowReverse 5s linear infinite"
                }
              })]
            })]
          }), yt.jsxs("div", {
            style: {
              flex: 1,
              position: "relative"
            },
            children: [yt.jsx("div", {
              style: {
                fontSize: "17px",
                fontWeight: 900,
                color: pe ? "#ff4040" : "#1d1d1f",
                letterSpacing: pe ? "2px" : "normal",
                textTransform: "uppercase",
                textShadow: pe ? "0 0 10px rgba(255,0,0,0.8), 2px 2px 0 rgba(100,0,0,0.6)" : "none"
              },
              children: pe ? `${(m == null ? undefined : m.charName) || "???"}` : (m == null ? undefined : m.charName) || "桌宠"
            }), yt.jsx("div", {
              style: {
                fontSize: "11px",
                color: pe ? "#b30000" : "#8e8e8e",
                letterSpacing: pe ? "0.2em" : "normal",
                marginTop: "4px",
                fontFamily: pe ? "monospace" : "inherit",
                animation: pe ? "glitchFlashPhase 4s infinite" : "none"
              },
              children: pe ? "一直·凝视着你" : "偷看了你的萤幕..."
            })]
          }), yt.jsx("button", {
            onClick: Fe,
            disabled: be,
            style: {
              width: "38px",
              height: "38px",
              borderRadius: pe ? "0" : "50%",
              clipPath: pe ? "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" : "none",
              border: pe ? "1px solid rgba(255,0,0,0.5)" : "none",
              background: pe ? ye ? "rgba(255,0,0,0.3)" : "rgba(20,0,0,0.8)" : ye ? "linear-gradient(135deg, #ff9db8, #ff7a9a)" : "linear-gradient(135deg, #e8e8ed, #d8d8dd)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: be ? "wait" : "pointer",
              flexShrink: 0,
              boxShadow: pe ? ye ? "0 0 15px rgba(255,0,0,0.8), inset 0 0 10px rgba(255,0,0,0.6)" : "none" : ye ? "0 2px 8px rgba(255,157,184,0.4)" : "0 1px 4px rgba(0,0,0,0.08)",
              transition: "all 0.2s ease",
              position: "relative"
            },
            title: ye ? "停止播放" : "语音播放",
            children: be ? yt.jsx("div", {
              style: {
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                border: "2px solid transparent",
                borderTop: "2px solid " + (pe ? "#ff4d4d" : "#666"),
                animation: "peekTtsSpin 0.8s linear infinite"
              }
            }) : ye ? yt.jsxs("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: pe ? "#ffcccc" : "#fff",
              children: [yt.jsx("rect", {
                x: "6",
                y: "5",
                width: "4",
                height: "14",
                rx: "1"
              }), yt.jsx("rect", {
                x: "14",
                y: "5",
                width: "4",
                height: "14",
                rx: "1"
              })]
            }) : yt.jsx("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: pe ? "#c84b4b" : "#555",
              children: yt.jsx("path", {
                d: "M8 5v14l11-7z"
              })
            })
          })]
        }), yt.jsx("div", {
          style: {
            flex: 1,
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
            padding: "20px 24px",
            fontSize: "14.5px",
            lineHeight: "2.1",
            color: pe ? "#d9a3a3" : "#333",
            fontFamily: pe ? "\"Courier New\", Courier, \"Noto Serif SC\", monospace" : "inherit",
            letterSpacing: pe ? "0.06em" : "normal",
            position: "relative",
            textShadow: pe ? "0 0 2px rgba(255,0,0,0.3)" : "none"
          },
          children: V.split("\n").filter(e => e.trim()).map((e, t, n) => yt.jsx("p", {
            style: {
              margin: 0,
              marginBottom: t < n.length - 1 ? "10px" : 0
            },
            children: Cy(e, `peek-${t}`, pe)
          }, t))
        }), yt.jsxs("div", {
          style: {
            padding: "12px 16px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            position: "relative",
            flexShrink: 0
          },
          children: [yt.jsx("div", {
            style: {
              display: "flex",
              justifyContent: "center"
            },
            children: yt.jsx("button", {
              onClick: Pe,
              style: {
                padding: "10px 48px",
                borderRadius: pe ? "0" : "20px",
                clipPath: pe ? "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)" : "none",
                border: pe ? "1px solid rgba(255,0,0,0.6)" : "none",
                background: pe ? "linear-gradient(135deg, rgba(80,0,0,0.6) 0%, rgba(20,0,0,0.8) 100%)" : "linear-gradient(135deg, #ffb3c6, #ff9db8)",
                color: pe ? "#ff6666" : "#fff",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: pe ? "2px" : "normal",
                cursor: "pointer",
                boxShadow: pe ? "0 10px 20px rgba(0,0,0,0.5), inset 0 0 15px rgba(255,0,0,0.2)" : "0 2px 8px rgba(255,157,184,0.3)",
                textShadow: pe ? "0 0 8px rgba(255,0,0,0.6)" : "none",
                transition: "all 0.3s"
              },
              onPointerDown: e => pe && (e.currentTarget.style.filter = "brightness(1.5)"),
              onPointerUp: e => pe && (e.currentTarget.style.filter = "none"),
              onPointerLeave: e => pe && (e.currentTarget.style.filter = "none"),
              children: pe ? "...眼 中 只 能 有 我" : "知道了"
            })
          }), Z && yt.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              gap: 8,
              flexWrap: "wrap",
              marginTop: 2
            },
            children: [yt.jsx("button", {
              onClick: async () => {
                if (!g || !(m == null ? undefined : m.charId)) {
                  return;
                }
                const {
                  toggleFavorite: e
                } = await s(async () => {
                  const {
                    toggleFavorite: e
                  } = await import("./petPeekStore-BGJg8bWq.js");
                  return {
                    toggleFavorite: e
                  };
                }, __vite__mapDeps([37, 0, 1, 2, 3, 4, 5]));
                const t = await e({
                  userId: g,
                  charId: m.charId,
                  entryId: Z,
                  entryText: V
                });
                if (t) {
                  X(!!t.favorited);
                }
              },
              style: pe ? {
                padding: "5px 12px",
                background: J ? "linear-gradient(135deg, rgba(120,0,30,0.7) 0%, rgba(60,0,15,0.85) 100%)" : "rgba(20,0,0,0.5)",
                border: J ? "1px solid rgba(255,30,30,0.55)" : "1px solid rgba(255,0,0,0.25)",
                color: J ? "#ffaaaa" : "rgba(217,163,163,0.65)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "1.5px",
                fontFamily: "\"Courier New\", Courier, monospace",
                cursor: "pointer",
                clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                textShadow: J ? "0 0 6px rgba(255,0,0,0.5)" : "none"
              } : {
                padding: "5px 14px",
                borderRadius: 12,
                border: "none",
                background: J ? "#ffd166" : "rgba(0,0,0,0.04)",
                color: J ? "#7a4e00" : "#999",
                fontSize: 11,
                fontWeight: 600,
                cursor: "pointer"
              },
              children: pe ? J ? "★ 私 藏" : "☆ 私 藏" : J ? "★ 已收藏" : "☆ 收藏"
            }), (m == null ? undefined : m.speakAsChar) && yt.jsx("button", {
              onClick: async () => {
                if (g && (m == null ? undefined : m.charId)) {
                  if (Q) {
                    const {
                      removePeekFromContext: e
                    } = await s(async () => {
                      const {
                        removePeekFromContext: e
                      } = await import("./petPeekStore-BGJg8bWq.js");
                      return {
                        removePeekFromContext: e
                      };
                    }, __vite__mapDeps([37, 0, 1, 2, 3, 4, 5]));
                    await e({
                      userId: g,
                      charId: m.charId,
                      entryId: Z
                    });
                    ee(false);
                  } else {
                    const {
                      addPeekToContext: e
                    } = await s(async () => {
                      const {
                        addPeekToContext: e
                      } = await import("./petPeekStore-BGJg8bWq.js");
                      return {
                        addPeekToContext: e
                      };
                    }, __vite__mapDeps([37, 0, 1, 2, 3, 4, 5]));
                    if (await e({
                      userId: g,
                      charId: m.charId,
                      text: V,
                      entryId: Z
                    })) {
                      ee(true);
                    }
                  }
                }
              },
              style: pe ? {
                padding: "5px 12px",
                background: Q ? "linear-gradient(135deg, rgba(80,30,80,0.7) 0%, rgba(40,0,40,0.85) 100%)" : "rgba(20,0,0,0.5)",
                border: Q ? "1px solid rgba(200,60,200,0.55)" : "1px solid rgba(255,0,0,0.25)",
                color: Q ? "#ffaaff" : "rgba(217,163,163,0.65)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "1.5px",
                fontFamily: "\"Courier New\", Courier, monospace",
                cursor: "pointer",
                clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                textShadow: Q ? "0 0 6px rgba(255,0,255,0.5)" : "none"
              } : {
                padding: "5px 14px",
                borderRadius: 12,
                border: "none",
                background: Q ? "#a8e6cf" : "rgba(0,0,0,0.04)",
                color: Q ? "#0d5b3a" : "#999",
                fontSize: 11,
                fontWeight: 600,
                cursor: "pointer"
              },
              children: pe ? Q ? "✓ 刻 进 脑 海" : "＋ 刻 进 脑 海" : Q ? "✓ 已加入上下文" : "＋ 加入上下文"
            })]
          })]
        })]
      })]
    }), te && yt.jsxs(yt.Fragment, {
      children: [yt.jsx("div", {
        onClick: () => ne(false),
        style: {
          position: "fixed",
          inset: 0,
          zIndex: 9200,
          background: "rgba(0,0,0,0.45)",
          animation: "peekOverlayIn 0.2s ease-out"
        }
      }), yt.jsxs("div", {
        style: {
          position: "fixed",
          left: "50%",
          top: "calc(50% + max(0px, env(safe-area-inset-top, 0px)) / 2)",
          transform: "translate(-50%, -50%)",
          width: "min(380px, calc(100vw - 24px))",
          maxHeight: "min(78vh, calc(100dvh - max(48px, env(safe-area-inset-top, 0px) + 32px) - max(24px, env(safe-area-inset-bottom, 0px) + 16px)))",
          background: "#fff",
          borderRadius: 20,
          boxShadow: "0 16px 48px rgba(0,0,0,0.25)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          zIndex: 9201,
          animation: "peekModalIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
        },
        children: [yt.jsxs("div", {
          style: {
            padding: "14px 18px",
            borderBottom: "1px solid #f0f0f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0
          },
          children: [yt.jsx("div", {
            style: {
              fontSize: 16,
              fontWeight: 700,
              color: "#333"
            },
            children: "窥屏记录"
          }), yt.jsx("button", {
            onClick: () => ne(false),
            style: {
              background: "rgba(0,0,0,0.04)",
              border: "none",
              width: 32,
              height: 32,
              borderRadius: "50%",
              fontSize: 18,
              cursor: "pointer",
              color: "#666",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: "×"
          })]
        }), yt.jsx("div", {
          style: {
            display: "flex",
            borderBottom: "1px solid #f0f0f0",
            flexShrink: 0
          },
          children: [{
            k: "history",
            label: "历史"
          }, {
            k: "favorites",
            label: "收藏"
          }].map(e => yt.jsx("button", {
            onClick: () => ie(e.k),
            style: {
              flex: 1,
              padding: "10px 0",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 600,
              color: re === e.k ? "#ff9db8" : "#999",
              borderBottom: re === e.k ? "2px solid #ff9db8" : "2px solid transparent"
            },
            children: e.label
          }, e.k))
        }), yt.jsx("div", {
          style: {
            flex: 1,
            overflowY: "auto",
            overflowX: "hidden",
            padding: "8px 0",
            WebkitOverflowScrolling: "touch"
          },
          children: oe.length === 0 ? yt.jsx("div", {
            style: {
              padding: 32,
              textAlign: "center",
              color: "#999",
              fontSize: 13
            },
            children: re === "history" ? "还没有窥屏记录" : "还没有收藏"
          }) : oe.map(e => {
            const t = !!e.contextMsgId;
            const n = le.has(e.id);
            const r = new Date(e.ts || Date.now());
            const i = `${r.getMonth() + 1}/${r.getDate()} ${String(r.getHours()).padStart(2, "0")}:${String(r.getMinutes()).padStart(2, "0")}`;
            return yt.jsxs("div", {
              style: {
                padding: "10px 16px",
                borderBottom: "1px solid #f5f5f5"
              },
              children: [yt.jsxs("div", {
                style: {
                  fontSize: 11,
                  color: "#aaa",
                  marginBottom: 4,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [yt.jsx("span", {
                  children: i
                }), re === "history" && n && yt.jsx("span", {
                  style: {
                    color: "#ffb300"
                  },
                  children: "★"
                })]
              }), yt.jsxs("div", {
                style: {
                  fontSize: 13,
                  color: "#333",
                  lineHeight: 1.5,
                  marginBottom: 8
                },
                children: [(e.text || "").slice(0, 120), (e.text || "").length > 120 ? "…" : ""]
              }), yt.jsxs("div", {
                style: {
                  display: "flex",
                  gap: 6,
                  flexWrap: "wrap"
                },
                children: [yt.jsx("button", {
                  onClick: async () => {
                    const {
                      toggleFavorite: t
                    } = await s(async () => {
                      const {
                        toggleFavorite: e
                      } = await import("./petPeekStore-BGJg8bWq.js");
                      return {
                        toggleFavorite: e
                      };
                    }, __vite__mapDeps([37, 0, 1, 2, 3, 4, 5]));
                    await t({
                      userId: g,
                      charId: m.charId,
                      entryId: e.id,
                      entryText: e.text
                    });
                    ue(e => e + 1);
                  },
                  style: {
                    padding: "4px 10px",
                    borderRadius: 12,
                    border: "none",
                    background: n ? "#ffd166" : "#f0f0f0",
                    color: n ? "#7a4e00" : "#666",
                    fontSize: 11,
                    cursor: "pointer"
                  },
                  children: n ? "★ 已收藏" : "☆ 收藏"
                }), (m == null ? undefined : m.speakAsChar) && yt.jsx("button", {
                  onClick: async () => {
                    if (t) {
                      const {
                        removePeekFromContext: t
                      } = await s(async () => {
                        const {
                          removePeekFromContext: e
                        } = await import("./petPeekStore-BGJg8bWq.js");
                        return {
                          removePeekFromContext: e
                        };
                      }, __vite__mapDeps([37, 0, 1, 2, 3, 4, 5]));
                      await t({
                        userId: g,
                        charId: m.charId,
                        entryId: e.id
                      });
                    } else {
                      const {
                        addPeekToContext: t
                      } = await s(async () => {
                        const {
                          addPeekToContext: e
                        } = await import("./petPeekStore-BGJg8bWq.js");
                        return {
                          addPeekToContext: e
                        };
                      }, __vite__mapDeps([37, 0, 1, 2, 3, 4, 5]));
                      await t({
                        userId: g,
                        charId: m.charId,
                        text: e.text,
                        entryId: e.id
                      });
                    }
                    ue(e => e + 1);
                  },
                  style: {
                    padding: "4px 10px",
                    borderRadius: 12,
                    border: "none",
                    background: t ? "#a8e6cf" : "#f0f0f0",
                    color: t ? "#0d5b3a" : "#666",
                    fontSize: 11,
                    cursor: "pointer"
                  },
                  children: t ? "✓ 已加入上下文" : "＋ 上下文"
                }), yt.jsx("button", {
                  onClick: async () => {
                    if (!confirm("删除这条窥屏记录吗?会同时从收藏和上下文里移除")) {
                      return;
                    }
                    const {
                      deletePeekEntry: t
                    } = await s(async () => {
                      const {
                        deletePeekEntry: e
                      } = await import("./petPeekStore-BGJg8bWq.js");
                      return {
                        deletePeekEntry: e
                      };
                    }, __vite__mapDeps([37, 0, 1, 2, 3, 4, 5]));
                    await t({
                      userId: g,
                      charId: m.charId,
                      entryId: e.id
                    });
                    ue(e => e + 1);
                  },
                  style: {
                    padding: "4px 10px",
                    borderRadius: 12,
                    border: "none",
                    background: "rgba(255,59,48,0.08)",
                    color: "#ff3b30",
                    fontSize: 11,
                    cursor: "pointer",
                    marginLeft: "auto"
                  },
                  children: "🗑 删除"
                })]
              })]
            }, e.id);
          })
        }), !(m == null ? undefined : m.speakAsChar) && yt.jsx("div", {
          style: {
            padding: "8px 18px",
            fontSize: 11,
            color: "#999",
            borderTop: "1px solid #f0f0f0",
            flexShrink: 0
          },
          children: "开启「桌宠就是该 char 本人」开关后,可以把窥屏内容加进 AI 上下文"
        })]
      })]
    }), yt.jsx("style", {
      children: "\n                .ig-bento-tile.has-component-icon {\n                    background: var(--tile-bg, linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(245, 248, 255, 0.4) 100%)) !important;\n                    backdrop-filter: blur(10px) saturate(140%) !important;\n                    -webkit-backdrop-filter: blur(10px) saturate(140%) !important;\n                    box-shadow: inset 0 1px 0 rgba(255,255,255,0.6), 0 2px 8px rgba(0,0,0,0.03) !important;\n                }\n\n                @keyframes fadeOrbitIn {\n                    from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }\n                    to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }\n                }\n\n                .ig-layout-bar button:active {\n                    transform: scale(0.82) !important;\n                }\n\n                .ig-vertical-scroll {\n                    scrollbar-width: none; /* Firefox */\n                }\n                .ig-vertical-scroll::-webkit-scrollbar {\n                    display: none; /* Chrome Safari Opera */\n                }\n                \n                @keyframes igPanelIn {\n                    from { opacity: 0; transform: scale(0.95) translateY(6px); }\n                    to   { opacity: 1; transform: scale(1) translateY(0); }\n                }\n                \n                .ig-bento-tile:active {\n                    transform: scale(0.91) !important;\n                    filter: brightness(0.95);\n                    box-shadow: inset 0 2px 5px rgba(0,0,0,0.08) !important;\n                }\n\n                @keyframes floatPanelIn {\n                    from { opacity: 0; transform: scale(0.85) translateY(4px); }\n                    to   { opacity: 1; transform: scale(1) translateY(0); }\n                }\n                @keyframes idleBubbleIn {\n                    from { opacity: 0; transform: translate(-50%, -100%) scale(0.8) translateY(6px); }\n                    to   { opacity: 1; transform: translate(-50%, -100%) scale(1) translateY(0); }\n                }\n                @keyframes peekDot {\n                    0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }\n                    40% { transform: scale(1.1); opacity: 1; }\n                }\n                @keyframes peekOverlayIn {\n                    from { opacity: 0; }\n                    to   { opacity: 1; }\n                }\n                @keyframes peekModalIn {\n                    from { opacity: 0; transform: translate(-50%, -50%) scale(0.85); }\n                    to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }\n                }\n                @keyframes peekTtsSpin {\n                    from { transform: rotate(0deg); }\n                    to   { transform: rotate(360deg); }\n                }\n                @keyframes peekDarkOverlayIn {\n                    0%   { opacity: 0; }\n                    30%  { opacity: 0.9; }\n                    50%  { opacity: 0.5; }\n                    100% { opacity: 1; }\n                }\n                @keyframes peekDarkModalIn {\n                    0%   { opacity: 0; transform: translate(-50%, -50%) scale(1.05); filter: brightness(2); }\n                    40%  { opacity: 0.8; transform: translate(-50.5%, -50%) scale(1.0); filter: brightness(1.2); }\n                    60%  { opacity: 0.9; transform: translate(-49.5%, -50%) scale(1.0); filter: brightness(0.9); }\n                    100% { opacity: 1; transform: translate(-50%, -50%) scale(1); filter: brightness(1); }\n                }\n                @keyframes peekGlitchFlash {\n                    0%   { background: rgba(139,0,0,0.15); }\n                    50%  { background: rgba(255,255,255,0.05); }\n                    100% { background: transparent; }\n                }\n                @keyframes peekDarkPulse {\n                    0%, 100% { opacity: 0.3; transform: scale(1); }\n                    50%      { opacity: 0.7; transform: scale(1.08); }\n                }\n                @keyframes glitchFlashPhase {\n                    0% { background: rgba(0,0,0,0); }\n                    10% { background: rgba(255,0,0,0.3); }\n                    20% { background: rgba(0,0,0,0.8); }\n                    30% { background: rgba(255,0,0,0.5); }\n                    40% { background: rgba(0,0,0,0.9); }\n                    50% { background: rgba(50,0,0,0.4); }\n                    60% { background: rgba(255,255,255,0.7); }\n                    70% { background: rgba(0,0,0,1); }\n                    80% { background: rgba(139,0,0,0.8); }\n                    90% { background: rgba(255,255,255,0.2); }\n                    100% { background: #000; }\n                }\n                @keyframes eyePopIn {\n                    0% { opacity: 0; }\n                    100% { opacity: 1; }\n                }\n                @keyframes eyeStare {\n                    0%, 85%, 100% { filter: brightness(1); }\n                    90% { filter: brightness(0.2); }\n                    93% { filter: brightness(1.2); }\n                }\n                @keyframes tearSlideUp {\n                    0% { transform: translateY(0); }\n                    100% { transform: translateY(-22vh); }\n                }\n                @keyframes tearSlideDown {\n                    0% { transform: translateY(0); }\n                    100% { transform: translateY(22vh); }\n                }\n                @keyframes avatarPanZoom {\n                    0% { transform: scale(1) translateY(0); }\n                    100% { transform: scale(1.08) translateY(2%); }\n                }\n                @keyframes rgbShift {\n                    0% { transform: translate(2px, -2px); }\n                    25% { transform: translate(-2px, 2px); }\n                    50% { transform: translate(2px, 2px); }\n                    75% { transform: translate(-2px, -2px); }\n                    100% { transform: translate(2px, -2px); }\n                }\n                @keyframes tvScanline {\n                    0% { background-position: 0 0; }\n                    100% { background-position: 0 100vh; }\n                }\n                @keyframes ripFlash {\n                    0% { opacity: 1; transform: translateY(-50%) scaleY(1); }\n                    30% { opacity: 1; transform: translateY(-50%) scaleY(3); }\n                    100% { opacity: 0; transform: translateY(-50%) scaleY(1); }\n                }\n                @keyframes tearCrackGlow {\n                    0% { opacity: 0; transform: translateY(-50%) scaleX(0.3); }\n                    30% { opacity: 1; transform: translateY(-50%) scaleX(0.6); }\n                    100% { opacity: 1; transform: translateY(-50%) scaleX(1); }\n                }\n                @keyframes spinSlow {\n                    from { transform: rotate(0deg); } to { transform: rotate(360deg); }\n                }\n                @keyframes spinSlowReverse {\n                    from { transform: rotate(360deg); } to { transform: rotate(0deg); }\n                }\n                @keyframes yandereFloat {\n                   0%, 100% { transform: translate(-50%, -50%); box-shadow: 0 30px 80px rgba(0,0,0,0.9), 0 0 40px rgba(255,0,0,0.15), inset 0 0 0 1px rgba(255,0,0,0.4), inset 0 0 40px rgba(180,0,0,0.6); }\n                   50% { transform: translate(-50%, -51%); box-shadow: 0 40px 100px rgba(0,0,0,1), 0 0 60px rgba(255,0,0,0.3), inset 0 0 0 1px rgba(255,0,0,0.6), inset 0 0 60px rgba(200,0,0,0.8); }\n                }\n                @keyframes peekDarkYandereModalIn {\n                    0%   { opacity: 0; transform: translate(-50%, -45%) scale(0.9); filter: brightness(3) contrast(2); }\n                    50%  { opacity: 0.8; transform: translate(-50%, -50%) scale(1.02); filter: brightness(1.5) contrast(1.2); }\n                    100% { opacity: 1; transform: translate(-50%, -50%) scale(1); filter: brightness(1) contrast(1); }\n                }\n            "
    })]
  });
};
