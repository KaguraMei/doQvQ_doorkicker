const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["./assets/aiSummaryService-Bx5aTYVV.js", "./assets/native-pet-CTNtZgMA.js", "./assets/vendor-react-B2VXkTUV.js", "./assets/vendor-dexie-KLdnSHz2.js", "./assets/vendor-jszip-DU-5YDGO.js", "./assets/vendor-lucide-DBv09HTV.js", "./assets/native-pet-D9YoqRtr.css"]) => i.map(i => d[i]);
import { G as e, _ as t, e as n, A as r, y as a, L as o, bh as i, d as s, be as l, cr as d } from "./native-pet-CTNtZgMA.js";
import { r as c, j as p, b as u, d as x } from "./vendor-react-B2VXkTUV.js";
import { a4 as g, bI as h, bV as m, bW as f, bX as b, B as v, bY as y, bZ as k, b_ as w, b$ as j, c0 as S, c1 as C, c2 as z, c3 as I, c4 as R, c5 as T } from "./main-BO9xa-SQ.js";
import { T as W } from "./useKeyboardViewportAdjust-DuHxtIzN.js";
const M = ["--plus-btn-icon", "--send-btn-icon", "--stop-btn-icon", "--mic-btn-icon", "--sticker-btn-icon", "--ai-btn-icon", "--back-btn-icon", "--phone-btn-icon", "--video-btn-icon", "--info-btn-icon"];
const E = () => {
  var e;
  const t = getComputedStyle(document.documentElement);
  const n = {};
  let r = false;
  for (const a of M) {
    const o = (e = t.getPropertyValue(a)) == null ? undefined : e.trim();
    if (o && o !== "none" && o !== "initial") {
      const e = o.match(/url\(\s*["']?([^"')]+)["']?\s*\)/);
      if (e) {
        n[a] = e[1];
        r = true;
      }
    }
  }
  if (r) {
    return n;
  } else {
    return null;
  }
};
const F = e => {
  const [t, n] = c.useState(null);
  c.useEffect(() => {
    if (!e) {
      n(null);
      return;
    }
    const t = requestAnimationFrame(() => n(E()));
    const r = new MutationObserver(() => {
      requestAnimationFrame(() => n(E()));
    });
    r.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"]
    });
    return () => {
      cancelAnimationFrame(t);
      r.disconnect();
    };
  }, [e]);
  return t;
};
const D = ({
  iconUrl: e,
  fallback: t,
  size: n = 24
}) => e ? p.jsx("img", {
  decoding: "async",
  src: e,
  alt: "",
  style: {
    width: n,
    height: n,
    objectFit: "contain"
  },
  draggable: false
}) : t;
const A = async () => {
  const t = await e.get("apiSettings");
  if (!t || !t.mainApiUrl && !t.secApiUrl) {
    return null;
  }
  const n = (t.secApiEnabled === true || t.secApiEnabled === "true") && t.secApiUrl && t.secApiKey;
  return {
    ...t,
    mainApiUrl: n ? t.secApiUrl : t.mainApiUrl,
    mainApiKey: n ? t.secApiKey : t.mainApiKey,
    mainApiModel: n && t.secApiModel || t.mainApiModel
  };
};
async function B({
  summaryHistory: e,
  selectedIndices: n,
  characterName: r,
  currentUserName: a,
  apiSettings: o,
  timeAware: i = false,
  customSummaryInstructions: s = "",
  language: l = "zh_cn",
  source: d = "online"
}) {
  var c;
  var p;
  var u;
  if (!Array.isArray(n) || n.length < 2) {
    throw new Error("selectedIndices must contain at least 2 entries");
  }
  const x = (await t(async () => {
    const {
      default: e
    } = await import("./aiSummaryService-Bx5aTYVV.js").then(e => e.w);
    return {
      default: e
    };
  }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]))).default;
  const g = n.map(t => {
    var n;
    var r;
    return ((n = e[t]) == null ? undefined : n.summary) || ((r = e[t]) == null ? undefined : r.content) || "";
  });
  const h = await x.generateBigSummary({
    summaries: g,
    characterName: r,
    currentUserName: a,
    apiSettings: o,
    timeAware: i,
    customSummaryInstructions: s,
    language: l
  });
  const m = typeof h == "string" ? h : h.text;
  const f = typeof h == "string" ? [] : h.keywords || [];
  const b = typeof h == "string" ? [] : h.anchors || [];
  const v = new Set(f);
  for (const t of n) {
    const n = e[t];
    if (n == null ? undefined : n.keywords) {
      for (const e of n.keywords) {
        v.add(e);
      }
    }
  }
  const y = [...b];
  const k = new Set(b.map(e => e.text));
  for (const t of n) {
    const n = e[t];
    for (const e of (n == null ? undefined : n.anchors) || []) {
      if (e.importance >= 3 && !k.has(e.text)) {
        y.push(e);
        k.add(e.text);
      }
    }
  }
  y.sort((e, t) => (t.importance || 0) - (e.importance || 0));
  const w = y.slice(0, 8);
  const j = Math.min(...n);
  const S = Math.max(...n);
  const C = n.map(t => {
    var n;
    if ((n = e[t]) == null) {
      return undefined;
    } else {
      return n.startMessageIndex;
    }
  }).filter(e => e !== undefined);
  const z = n.map(t => {
    var n;
    if ((n = e[t]) == null) {
      return undefined;
    } else {
      return n.startMessageId;
    }
  }).filter(e => e != null);
  const I = n.map(t => {
    var n;
    if ((n = e[t]) == null) {
      return undefined;
    } else {
      return n.endMessageId;
    }
  }).filter(e => e != null);
  const R = Math.max(...n.map(t => {
    var n;
    var r;
    return ((n = e[t]) == null ? undefined : n.summaryLevel) || (((r = e[t]) == null ? undefined : r.isBigSummary) ? 2 : 1);
  })) + 1;
  const T = Date.now();
  const W = {
    id: T,
    date: new Date().toISOString(),
    summary: m,
    content: m,
    startMessageIndex: C.length > 0 ? Math.min(...C) : undefined,
    lastMessageIndex: ((c = e[j]) == null ? undefined : c.lastMessageIndex) || 0,
    startMessageId: ((p = e[S]) == null ? undefined : p.startMessageId) ?? (z.length > 0 ? z[z.length - 1] : undefined),
    endMessageId: ((u = e[j]) == null ? undefined : u.endMessageId) ?? (I.length > 0 ? I[0] : undefined),
    messageCount: n.length,
    isBigSummary: true,
    summaryLevel: R,
    source: d,
    keywords: [...v],
    anchors: w,
    childSummaryIds: n.map(t => {
      var n;
      if ((n = e[t]) == null) {
        return undefined;
      } else {
        return n.id;
      }
    }).filter(Boolean)
  };
  const M = new Set(n.map(t => {
    var n;
    if ((n = e[t]) == null) {
      return undefined;
    } else {
      return n.id;
    }
  }).filter(Boolean));
  return {
    newEntry: W,
    newHistory: [W, ...e.map(e => M.has(e.id) ? {
      ...e,
      mergedIntoBigSummary: T
    } : e)],
    bigSummaryText: m
  };
}
const N = "nuo-pat-shake-window";
const L = "nuo-pat-avatar-bounce";
const O = "nuo-pat-style";
const $ = `\n@keyframes nuo-pat-shake-kf {\n    0%   { transform: translate3d(0, 0, 0); }\n    20%  { transform: translate3d(-2px, 1px, 0); }\n    40%  { transform: translate3d(2px, -1px, 0); }\n    60%  { transform: translate3d(-1.5px, 1px, 0); }\n    80%  { transform: translate3d(1px, -0.5px, 0); }\n    100% { transform: translate3d(0, 0, 0); }\n}\n.${N} {\n    animation: nuo-pat-shake-kf 320ms cubic-bezier(.36,.07,.19,.97) both !important;\n    will-change: transform;\n}\n@keyframes nuo-pat-avatar-bounce-kf {\n    0%   { transform: scale(1); }\n    25%  { transform: scale(1.15) rotate(-4deg); }\n    50%  { transform: scale(0.95) rotate(3deg); }\n    75%  { transform: scale(1.05) rotate(-1deg); }\n    100% { transform: scale(1); }\n}\n.${L} {\n    animation: nuo-pat-avatar-bounce-kf 600ms cubic-bezier(.34,1.56,.64,1) both;\n    z-index: 50;\n    position: relative;\n}\n`;
const P = c.memo(() => {
  const e = c.useRef([]);
  c.useEffect(() => {
    if (!document.getElementById(O)) {
      const e = document.createElement("style");
      e.id = O;
      e.textContent = $;
      document.head.appendChild(e);
    }
    const t = t => {
      if (!t) {
        return;
      }
      t.classList.remove(N);
      t.offsetWidth;
      t.classList.add(N);
      const n = setTimeout(() => t.classList.remove(N), 370);
      e.current.push(n);
    };
    const n = t => {
      if (!t) {
        return;
      }
      t.classList.remove(L);
      t.offsetWidth;
      t.classList.add(L);
      const n = setTimeout(() => t.classList.remove(L), 650);
      e.current.push(n);
    };
    const r = e => {
      const {
        avatarOf: r
      } = (e == null ? undefined : e.detail) || {};
      const a = document.getElementById("chat-message-list-root");
      if (a) {
        t(a);
      } else {
        const e = document.getElementById("chat-detail-screen");
        if (e) {
          t(e);
        }
      }
      const o = document.querySelector("[data-pat-bounce-target=\"1\"]");
      if (o) {
        n(o);
        setTimeout(() => {
          try {
            o.removeAttribute("data-pat-bounce-target");
          } catch (e) {}
        }, 680);
      } else {
        const e = r === "user" ? ".msg-avatar-me-inner, [data-pat-avatar=\"user\"]" : ".msg-avatar-them-inner, [data-pat-avatar=\"char\"]";
        const t = document.querySelector(e);
        if (t) {
          n(t);
        }
      }
    };
    window.addEventListener("pat-shake", r);
    return () => {
      window.removeEventListener("pat-shake", r);
      e.current.forEach(e => clearTimeout(e));
      e.current = [];
    };
  }, []);
  return null;
});
P.displayName = "PatShakeOverlay";
const H = {
  statusBarOpen: false,
  statusBarTargetRoundId: null,
  statusBarOpenTick: 0,
  settingsOpen: false,
  moreOptionsOpen: false
};
const U = new Map();
const _ = e => {
  let t = U.get(e);
  if (!t) {
    t = new Set();
    U.set(e, t);
  }
  return t;
};
const G = (e, t) => {
  if (H[e] !== t) {
    H[e] = t;
    _(e).forEach(e => e());
  }
};
const q = {
  get: e => H[e],
  set: G,
  subscribe: (e, t) => {
    const n = _(e);
    n.add(t);
    return () => n.delete(t);
  }
};
const V = e => {
  const t = c.useCallback(t => q.subscribe(e, t), [e]);
  const n = c.useCallback(() => H[e], [e]);
  return c.useSyncExternalStore(t, n, n);
};
const Y = e => {
  G("statusBarTargetRoundId", e ?? null);
  G("statusBarOpenTick", H.statusBarOpenTick + 1);
  G("statusBarOpen", true);
};
const K = () => G("statusBarOpen", false);
const X = () => G("settingsOpen", true);
const Q = () => G("settingsOpen", false);
const Z = e => G("moreOptionsOpen", !!e);
const J = () => G("moreOptionsOpen", false);
const ee = c.memo(({
  members: e,
  query: t,
  onSelect: n,
  t: r,
  groupAvatar: a
}) => {
  const o = c.useMemo(() => {
    if (!e || e.length === 0) {
      return [];
    }
    const n = (t || "").trim().toLowerCase();
    const a = {
      id: "__all__",
      name: (r == null ? undefined : r("mentionAll")) || "全部成員",
      _isAll: true
    };
    const o = a.name.toLowerCase();
    const i = n ? e.filter(e => {
      var t;
      if ((t = e.name) == null) {
        return undefined;
      } else {
        return t.toLowerCase().includes(n);
      }
    }) : e;
    return [...(!n || o.includes(n) ? [a] : []), ...i];
  }, [e, t, r]);
  if (o.length === 0) {
    return null;
  } else {
    return p.jsxs("div", {
      style: {
        position: "absolute",
        bottom: "100%",
        left: "-5px",
        right: "-5px",
        maxHeight: "240px",
        overflowY: "auto",
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderRadius: "14px",
        boxShadow: "0 -2px 24px rgba(0,0,0,0.10), 0 0 0 0.5px rgba(0,0,0,0.06)",
        zIndex: 100,
        marginBottom: "6px",
        overscrollBehavior: "contain"
      },
      children: [p.jsx("div", {
        style: {
          padding: "8px 14px 4px",
          fontSize: "11px",
          color: "#8e8e93",
          fontWeight: "600",
          letterSpacing: "0.3px",
          position: "sticky",
          top: 0,
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderRadius: "14px 14px 0 0",
          zIndex: 1
        },
        children: (r == null ? undefined : r("mentionSelectHint")) || "選擇提及"
      }), o.map((e, t) => {
        var r;
        return p.jsxs("div", {
          onClick: () => n(e),
          onPointerDown: e => e.preventDefault(),
          style: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 14px",
            cursor: "pointer",
            transition: "background 0.12s",
            borderRadius: t === o.length - 1 ? "0 0 14px 14px" : 0
          },
          onMouseEnter: e => {
            e.currentTarget.style.background = "rgba(0,0,0,0.04)";
          },
          onMouseLeave: e => {
            e.currentTarget.style.background = "transparent";
          },
          children: [p.jsx("div", {
            style: {
              width: "34px",
              height: "34px",
              borderRadius: e._isAll ? "8px" : "50%",
              overflow: "hidden",
              flexShrink: 0,
              background: e._isAll ? "#f2f2f7" : "#f0f0f0"
            },
            children: e._isAll ? a ? p.jsx("img", {
              decoding: "async",
              src: a,
              alt: "",
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }
            }) : p.jsx("div", {
              style: {
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #5ac8fa 0%, #007aff 100%)",
                fontSize: "15px",
                color: "#fff"
              },
              children: "@"
            }) : e.image || e.avatar ? p.jsx("img", {
              decoding: "async",
              src: e.image || e.avatar,
              alt: "",
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }
            }) : p.jsx("div", {
              style: {
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                color: "#8e8e93",
                background: "#e5e5ea"
              },
              children: ((r = e.name) == null ? undefined : r[0]) || "?"
            })
          }), p.jsx("div", {
            style: {
              fontSize: "15px",
              color: "#1c1c1e",
              fontWeight: e._isAll ? "500" : "400",
              flex: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: e.name
          })]
        }, e.id);
      })]
    });
  }
});
ee.displayName = "MentionPopup";
const te = c.memo(({
  isCustomThemeActive: e,
  t: t,
  textareaRef: r,
  inputTextRef: a,
  resizeInputTextarea: o,
  onKeyDown: i,
  onSend: s,
  onAIRequest: l,
  onOpenVoiceInput: d,
  onOpenStickerPicker: u,
  userStickers: x,
  onSendSticker: h,
  isGenerating: m,
  onStopGenerating: f,
  mentionMembers: b,
  mentionGroupAvatar: v,
  showMoreOptions: y,
  onToggleMoreOptions: k,
  inputPlusIcon: w,
  setInputPlusIcon: j,
  onStickerBarActiveChange: S
}) => {
  const C = F(e);
  const z = c.useRef(0);
  const [I, R] = c.useState(() => (a == null ? undefined : a.current) || "");
  c.useEffect(() => {
    if (a) {
      a.current = I;
    }
  }, [I, a]);
  c.useEffect(() => {
    if (a) {
      a._setChatInput = R;
      return () => {
        a._setChatInput = null;
      };
    }
  }, [a]);
  c.useEffect(() => {
    const e = e => {
      var t;
      var n;
      const a = (t = e == null ? undefined : e.detail) == null ? undefined : t.text;
      if (typeof a != "string") {
        return;
      }
      const i = ((n = e == null ? undefined : e.detail) == null ? undefined : n.autoSend) === true;
      R(a);
      requestAnimationFrame(() => {
        const e = r == null ? undefined : r.current;
        if (e) {
          e.focus();
          const n = a.length;
          try {
            e.setSelectionRange(n, n);
          } catch (t) {}
          if (typeof o == "function") {
            o();
          }
        }
        if (i && a.trim()) {
          setTimeout(() => {
            try {
              if (s != null) {
                s();
              }
            } catch (t) {}
          }, 80);
        }
      });
    };
    const t = e => {
      const t = e == null ? undefined : e.data;
      if (!t || t.type !== "chat-input-fill") {
        return;
      }
      const n = t.text;
      if (typeof n == "string") {
        R(n);
        requestAnimationFrame(() => {
          const e = r == null ? undefined : r.current;
          if (e) {
            e.focus();
            const r = n.length;
            try {
              e.setSelectionRange(r, r);
            } catch (t) {}
            if (typeof o == "function") {
              o();
            }
          }
        });
      }
    };
    window.addEventListener("chat-input-fill", e);
    window.addEventListener("message", t);
    return () => {
      window.removeEventListener("chat-input-fill", e);
      window.removeEventListener("message", t);
    };
  }, [r, o, s]);
  const [T, W] = c.useState(null);
  const M = c.useCallback(e => {
    const t = e.target.value;
    R(t);
    if (!b || b.length === 0) {
      W(null);
      return;
    }
    const n = e.target.selectionStart;
    const r = t.slice(0, n);
    const a = r.lastIndexOf("@");
    if (a >= 0) {
      const e = a > 0 ? r[a - 1] : " ";
      if (e === " " || e === "\n" || a === 0) {
        const e = r.slice(a + 1);
        if (!e.includes(" ")) {
          W(e);
          return;
        }
      }
    }
    W(null);
  }, [b]);
  const E = c.useCallback(e => {
    const n = r == null ? undefined : r.current;
    const a = (n == null ? undefined : n.selectionStart) ?? I.length;
    const o = I.slice(0, a).lastIndexOf("@");
    if (o < 0) {
      W(null);
      return;
    }
    const i = e._isAll ? (t == null ? undefined : t("mentionAll")) || "全部成員" : e.name;
    const s = I.slice(0, o);
    const l = I.slice(a);
    R(`${s}@${i} ${l}`);
    W(null);
    requestAnimationFrame(() => {
      if (n) {
        const e = o + i.length + 2;
        n.focus();
        n.setSelectionRange(e, e);
      }
    });
  }, [I, r, t]);
  const A = c.useRef("");
  c.useEffect(() => {
    var e;
    if (!o) {
      return;
    }
    const t = !I || I.trim().length === 0;
    const n = I && ((e = I.match(/\n/g)) == null ? undefined : e.length) || 0;
    const r = Math.floor(((I == null ? undefined : I.length) || 0) / 16);
    const a = `${t ? "E" : "F"}|${n}|${r}`;
    if (a === A.current) {
      return;
    }
    A.current = a;
    let i = requestAnimationFrame(() => {
      i = null;
      o(t);
    });
    return () => {
      if (i) {
        cancelAnimationFrame(i);
      }
    };
  }, [I, o]);
  const B = c.useDeferredValue(I);
  const N = c.useMemo(() => {
    const e = B.trim();
    if (!e || !(x == null ? undefined : x.length)) {
      return [];
    }
    const t = e.toLowerCase();
    return x.filter(e => e && typeof e != "string" && e.url && e.meaning && e.meaning.toLowerCase().includes(t)).slice(0, 20);
  }, [B, x]);
  const L = N.length > 0;
  c.useEffect(() => {
    if (S != null) {
      S(L);
    }
  }, [L, S]);
  const O = {
    "data-prevent-blur": ""
  };
  const $ = e => t => {
    t.preventDefault();
    z.current = Date.now();
    if (e != null) {
      e();
    }
  };
  const P = e => t => {
    if (Date.now() - z.current < 450) {
      t.preventDefault();
    } else if (e != null) {
      e();
    }
  };
  const H = c.useCallback(() => {
    if (s != null) {
      s();
    }
  }, [s]);
  const U = c.useCallback(e => {
    if (i != null) {
      i(e);
    }
  }, [i]);
  const _ = I.trim().length > 0;
  const G = I.length === 0;
  c.useEffect(() => {
    var e;
    const t = (e = r == null ? undefined : r.current) == null ? undefined : e.closest("#chat-detail-screen");
    if (t) {
      t.classList.toggle("nuo-input-empty", G);
      t.classList.toggle("nuo-has-text", !G);
      return () => {
        t.classList.remove("nuo-input-empty");
        t.classList.remove("nuo-has-text");
      };
    }
  }, [G, r]);
  return p.jsxs(p.Fragment, {
    children: [N.length > 0 && p.jsx("div", {
      className: "input-sticker-suggest-bar",
      style: {
        display: "flex",
        alignItems: "center",
        overflowX: "auto",
        overflowY: "hidden",
        padding: "6px 8px",
        gap: "6px",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none"
      },
      children: N.map((e, t) => p.jsx("div", {
        onClick: () => {
          if (h != null) {
            h(e);
          }
          R("");
        },
        style: {
          flexShrink: 0,
          width: "56px",
          height: "56px",
          borderRadius: "10px",
          overflow: "hidden",
          cursor: "pointer",
          background: "rgba(0,0,0,0.04)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          WebkitTapHighlightColor: "transparent"
        },
        children: p.jsx("img", {
          decoding: "async",
          src: e.url,
          alt: e.meaning,
          style: {
            width: "100%",
            height: "100%",
            objectFit: "contain"
          },
          draggable: false
        })
      }, e.id || t))
    }), b && T !== null && p.jsx(ee, {
      members: b,
      query: T,
      onSelect: E,
      t: t,
      groupAvatar: v
    }), p.jsxs("div", {
      className: "input-row-wrapper",
      style: {
        display: "flex",
        alignItems: e ? "flex-end" : "center",
        gap: e ? "var(--input-row-gap, 0px)" : "0px",
        background: e ? "transparent" : "#ffffff",
        border: e ? "none" : "1px solid #dbdbdb",
        borderRadius: e ? "0" : "24px",
        WebkitTapHighlightColor: "transparent",
        boxSizing: "border-box",
        width: "100%",
        maxWidth: "100%",
        overflow: e ? "visible" : "hidden"
      },
      children: [p.jsx("div", {
        onClick: async e => {
          if (Date.now() - z.current < 450) {
            e.preventDefault();
          } else if (e.shiftKey) {
            const e = await n("Enter a new icon/emoji for the plus button:", w);
            if (e) {
              j(e);
            }
          } else {
            k(!y);
          }
        },
        onTouchEnd: e => {
          e.preventDefault();
          z.current = Date.now();
          k(!y);
        },
        ...O,
        onMouseDown: e => e.preventDefault(),
        className: "input-btn-plus",
        style: {
          width: e ? "var(--plus-btn-width, 40px)" : "32px",
          height: e ? "var(--plus-btn-height, 40px)" : "32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: e ? "var(--plus-btn-color, #262626)" : y && w === "plus" ? "#ffffff" : "#000000",
          background: e ? "var(--plus-btn-bg, transparent)" : y && w === "plus" ? "#000000" : "#ffffff",
          borderRadius: e ? "var(--plus-btn-radius, 20px 0 0 20px)" : "50%",
          border: e ? "var(--plus-btn-border, none)" : "none",
          cursor: "pointer",
          transition: "transform 0.2s, background 0.2s, color 0.2s",
          zIndex: 101,
          flexShrink: 0,
          marginLeft: e ? undefined : "4px",
          marginBottom: e ? "var(--plus-btn-margin-bottom, 0px)" : undefined,
          transform: y && w === "plus" ? "rotate(135deg)" : "rotate(0deg)"
        },
        children: (C == null ? undefined : C["--plus-btn-icon"]) ? p.jsx(D, {
          iconUrl: C["--plus-btn-icon"],
          fallback: p.jsx(g.Plus, {
            size: 24
          })
        }) : w === "plus" ? e ? p.jsx(g.Plus, {
          size: 24
        }) : p.jsx(g.Plus, {
          size: 18
        }) : p.jsx("span", {
          style: {
            fontSize: "18px"
          },
          children: w
        })
      }), p.jsxs("div", {
        className: "input-action-bar-custom" + (G ? " nuo-input-empty" : " nuo-has-text"),
        style: {
          display: "flex",
          alignItems: "center",
          flex: 1,
          minWidth: 0,
          background: e ? "var(--input-box-bg, #ffffff)" : "rgba(255,255,255,0.92)",
          border: e ? "var(--input-box-border, 1px solid #dbdbdb)" : "none",
          borderRadius: e ? "var(--input-box-radius, 24px)" : "20px",
          padding: "4px 8px 4px 12px",
          minHeight: "40px",
          boxSizing: "border-box",
          WebkitTapHighlightColor: "transparent",
          ...(e ? {
            backdropFilter: "var(--input-box-blur, none)",
            WebkitBackdropFilter: "var(--input-box-blur, none)",
            boxShadow: "var(--input-box-shadow, none)"
          } : {})
        },
        children: [p.jsx("textarea", {
          ref: r,
          id: "chat-message-input",
          name: "message",
          value: I,
          onChange: b ? M : e => R(e.target.value),
          onKeyDown: U,
          className: "ios-no-outline " + (e ? "input-box-custom" : ""),
          placeholder: t("chatInputPlaceholder"),
          rows: 1,
          autoComplete: "off",
          style: {
            flex: 1,
            border: "none",
            outline: "none",
            boxShadow: "none",
            background: "transparent",
            color: e ? "var(--input-box-color, #262626)" : "#262626",
            WebkitTextFillColor: e ? "var(--input-box-color, #262626)" : "#262626",
            caretColor: e ? "var(--input-caret-color, #0095f6)" : "#0095f6",
            fontSize: e ? "var(--input-box-font-size, 15px)" : "15px",
            padding: "8px 0",
            fontFamily: "inherit",
            resize: "none",
            minHeight: "20px",
            maxHeight: "150px",
            lineHeight: "1.4",
            boxSizing: "border-box",
            overflowY: "hidden",
            overscrollBehavior: "contain",
            touchAction: "pan-y",
            WebkitTapHighlightColor: "transparent",
            transform: "translateZ(0)",
            WebkitTransform: "translateZ(0)"
          }
        }), _ ? p.jsx("div", {
          className: "input-btns-right" + (m ? "" : " nuo-has-send"),
          style: {
            display: "flex",
            alignItems: "center",
            gap: "4px",
            padding: "0"
          },
          children: m ? p.jsx("div", {
            className: e ? "stop-btn-custom" : "",
            onClick: P(f),
            onTouchEnd: $(f),
            style: {
              color: e ? "var(--stop-btn-color, #ff3b30)" : "#ff3b30",
              cursor: "pointer",
              padding: "6px",
              minWidth: "36px",
              minHeight: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              WebkitTapHighlightColor: "transparent",
              touchAction: "manipulation"
            },
            ...O,
            onMouseDown: e => e.preventDefault(),
            children: p.jsx(D, {
              iconUrl: C == null ? undefined : C["--stop-btn-icon"],
              fallback: p.jsx(g.StopCircle, {
                size: 24
              })
            })
          }) : p.jsxs(p.Fragment, {
            children: [p.jsx("button", {
              type: "button",
              className: "input-btn-ai",
              onClick: P(l),
              onTouchEnd: $(l),
              "aria-disabled": m,
              style: {
                color: e ? "var(--input-btn-color, #262626)" : "#262626",
                cursor: "pointer",
                padding: "6px",
                minWidth: "36px",
                minHeight: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                border: "none",
                WebkitTapHighlightColor: "transparent",
                touchAction: "manipulation"
              },
              ...O,
              onMouseDown: e => e.preventDefault(),
              children: p.jsx(D, {
                iconUrl: C == null ? undefined : C["--ai-btn-icon"],
                fallback: p.jsx(g.BowArrow, {
                  size: 24
                })
              })
            }), p.jsx("div", {
              className: e ? "send-btn-custom" : "",
              onClick: P(H),
              onTouchEnd: $(H),
              style: {
                color: e ? "var(--send-btn-color, #0095f6)" : "#0095f6",
                cursor: "pointer",
                padding: "6px",
                minWidth: "36px",
                minHeight: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                WebkitTapHighlightColor: "transparent",
                touchAction: "manipulation"
              },
              ...O,
              onMouseDown: e => e.preventDefault(),
              children: p.jsx(D, {
                iconUrl: C == null ? undefined : C["--send-btn-icon"],
                fallback: p.jsx(g.Send, {
                  size: 24
                })
              })
            })]
          })
        }) : p.jsx("div", {
          className: "input-btns-right",
          style: {
            display: "flex",
            alignItems: "center",
            gap: "4px",
            color: e ? "var(--input-btn-color, #262626)" : "#262626",
            padding: "0"
          },
          children: m ? p.jsx("div", {
            className: e ? "stop-btn-custom" : "",
            onClick: P(f),
            onTouchEnd: $(f),
            style: {
              color: e ? "var(--stop-btn-color, #ff3b30)" : "#ff3b30",
              cursor: "pointer",
              padding: "6px",
              minWidth: "36px",
              minHeight: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              WebkitTapHighlightColor: "transparent",
              touchAction: "manipulation"
            },
            ...O,
            onMouseDown: e => e.preventDefault(),
            children: p.jsx(D, {
              iconUrl: C == null ? undefined : C["--stop-btn-icon"],
              fallback: p.jsx(g.StopCircle, {
                size: 24
              })
            })
          }) : p.jsxs(p.Fragment, {
            children: [p.jsx("div", {
              className: "input-btn-mic",
              onClick: P(d),
              onTouchEnd: $(d),
              style: {
                cursor: "pointer",
                padding: "6px",
                minWidth: "36px",
                minHeight: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                WebkitTapHighlightColor: "transparent",
                touchAction: "manipulation"
              },
              ...O,
              onMouseDown: e => e.preventDefault(),
              children: p.jsx(D, {
                iconUrl: C == null ? undefined : C["--mic-btn-icon"],
                fallback: p.jsx(g.Mic, {
                  size: 24
                })
              })
            }), p.jsx("div", {
              className: "input-btn-sticker",
              onClick: P(u),
              onTouchEnd: $(u),
              style: {
                cursor: "pointer",
                padding: "6px",
                minWidth: "36px",
                minHeight: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                WebkitTapHighlightColor: "transparent",
                touchAction: "manipulation"
              },
              ...O,
              onMouseDown: e => e.preventDefault(),
              children: p.jsx(D, {
                iconUrl: C == null ? undefined : C["--sticker-btn-icon"],
                fallback: p.jsx(g.Smile, {
                  size: 24
                })
              })
            }), p.jsx("button", {
              type: "button",
              className: "input-btn-ai",
              onClick: P(l),
              onTouchEnd: $(l),
              "aria-disabled": m,
              style: {
                cursor: "pointer",
                color: e ? "var(--input-btn-color, #262626)" : "#262626",
                padding: "6px",
                minWidth: "36px",
                minHeight: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                border: "none",
                WebkitTapHighlightColor: "transparent",
                touchAction: "manipulation"
              },
              ...O,
              onMouseDown: e => e.preventDefault(),
              children: p.jsx(D, {
                iconUrl: C == null ? undefined : C["--ai-btn-icon"],
                fallback: p.jsx(g.BowArrow, {
                  size: 24
                })
              })
            })]
          })
        })]
      })]
    })]
  });
});
const ne = c.memo(({
  isCustomThemeActive: e,
  isSelectionMode: t,
  selectedMessageCount: n,
  onDeleteSelected: a,
  onHideSelected: o,
  onForwardSelected: i,
  onFavoriteSelected: s,
  onCopySelected: l,
  onCancelSelection: d,
  t: u,
  replyingMessage: x,
  onCancelReply: h,
  activeChatChar: m,
  nickname: f,
  onOpenImageUpload: b,
  onTextDescription: v,
  onContinue: y,
  onReroll: k,
  onOpenGiftInput: w,
  onTransfer: j,
  onRedEnvelope: S,
  onLocationShare: C,
  onInviteOffline: z,
  sendAsChar: I,
  sendAsCharName: R,
  onToggleSendAsChar: T,
  onClearSendAsChar: M,
  sendAsNarration: E,
  onToggleSendAsNarration: F,
  inputPlusIcon: D,
  setInputPlusIcon: A,
  textareaRef: B,
  inputTextRef: N,
  resizeInputTextarea: L,
  onKeyDown: O,
  onAIRequest: $,
  onSend: P,
  onOpenVoiceInput: H,
  onOpenStickerPicker: U,
  onOpenQuickReply: _,
  userStickers: G,
  onSendSticker: q,
  bubbleFontSize: Y,
  isGenerating: K,
  onStopGenerating: X,
  consolePanelEnabled: Q,
  latestApiPromptTokens: J,
  mentionMembers: ee,
  mentionGroupAvatar: ne
}) => {
  const re = c.useRef(null);
  const ae = c.useRef([]);
  const oe = c.useRef(null);
  const ie = V("moreOptionsOpen");
  const se = Z;
  const [le, de] = c.useState(false);
  const [ce, pe] = c.useState([]);
  const [ue, xe] = c.useState(false);
  const [ge, he] = c.useState(false);
  const me = c.useRef(ue);
  const fe = c.useMemo(() => ue ? ce : ce.filter(e => e.level === "warn" || e.level === "error"), [ce, ue]);
  const be = c.useCallback(e => e.replace(/https?:\/\/[^\s)]+/g, "<hidden>"), []);
  const ve = c.useCallback(e => {
    if (typeof e == "string") {
      return be(e);
    }
    if (e instanceof Error) {
      return be(e.stack || e.message);
    }
    try {
      return be(JSON.stringify(e));
    } catch {
      return be(String(e));
    }
  }, [be]);
  const ye = c.useCallback(() => {
    oe.current = null;
    if (ae.current.length === 0) {
      return;
    }
    const e = ae.current;
    ae.current = [];
    pe(t => [...t, ...e].slice(-300));
  }, []);
  c.useEffect(() => {
    me.current = ue;
  }, [ue]);
  c.useEffect(() => {
    if (!Q) {
      de(false);
    }
  }, [Q]);
  c.useEffect(() => {
    const e = (e, t) => {
      if (e !== "warn" && e !== "error" && !me.current) {
        return;
      }
      let n = t;
      if (t.length > 1 && typeof t[0] == "string" && t[0].includes("%c")) {
        n = [...t];
        const e = (n[0].match(/%c/g) || []).length;
        n[0] = n[0].replace(/%c/g, "");
        n.splice(1, e);
      }
      const r = n.map(ve).join(" ");
      const a = {
        id: `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        level: e,
        text: r,
        time: new Date().toLocaleTimeString()
      };
      ae.current.push(a);
      oe.current ||= window.setTimeout(ye, 120);
    };
    const t = console.log;
    const n = console.info;
    const r = console.debug;
    const a = console.warn;
    const o = console.error;
    console.log = (...n) => {
      e("log", n);
      t(...n);
    };
    console.info = (...t) => {
      e("info", t);
      n(...t);
    };
    console.debug = (...t) => {
      e("debug", t);
      r(...t);
    };
    console.warn = (...t) => {
      e("warn", t);
      a(...t);
    };
    console.error = (...t) => {
      e("error", t);
      o(...t);
    };
    const i = t => {
      const n = (t == null ? undefined : t.message) || "Unknown runtime error";
      e("error", [typeof n == "string" ? n : String(n)]);
    };
    const s = t => {
      const n = t == null ? undefined : t.reason;
      const r = n instanceof Error ? n.message || "Unhandled Promise rejection" : n || "Unhandled Promise rejection";
      e("error", [typeof r == "string" ? r : String(r)]);
    };
    window.addEventListener("error", i);
    window.addEventListener("unhandledrejection", s);
    return () => {
      if (oe.current) {
        clearTimeout(oe.current);
        oe.current = null;
      }
      ye();
      console.log = t;
      console.info = n;
      console.debug = r;
      console.warn = a;
      console.error = o;
      window.removeEventListener("error", i);
      window.removeEventListener("unhandledrejection", s);
    };
  }, [ye, ve]);
  const ke = c.useRef(null);
  c.useEffect(() => {
    const e = ke.current;
    if (!e) {
      return;
    }
    const t = () => {
      re.current = null;
    };
    const n = t => {
      if (t.target.tagName === "TEXTAREA") {
        return;
      }
      let n = t.target;
      while (n && n !== e && n.nodeType === 1) {
        const e = window.getComputedStyle(n);
        const t = e.overflowY;
        const r = e.overflowX;
        if (t === "auto" || t === "scroll" || r === "auto" || r === "scroll") {
          return;
        }
        n = n.parentElement;
      }
      t.preventDefault();
    };
    const r = e => {
      if (e.target.closest && e.target.closest("[data-prevent-blur]")) {
        e.preventDefault();
      }
    };
    e.addEventListener("touchstart", r, {
      passive: false
    });
    e.addEventListener("touchmove", n, {
      passive: false
    });
    e.addEventListener("touchend", t, {
      passive: true
    });
    e.addEventListener("touchcancel", t, {
      passive: true
    });
    return () => {
      e.removeEventListener("touchstart", r);
      e.removeEventListener("touchmove", n);
      e.removeEventListener("touchend", t);
      e.removeEventListener("touchcancel", t);
    };
  }, []);
  return p.jsxs("div", {
    ref: ke,
    className: e ? "input-area-custom" : "",
    style: {
      paddingTop: "12px",
      paddingLeft: "16px",
      paddingRight: "16px",
      paddingBottom: "calc(8px + var(--nuo-safe-bottom, 0px))",
      background: e ? "var(--input-area-bg, #ffffff)" : "#ffffff",
      ...(e ? {
        backgroundImage: "var(--input-area-bg-image, none)",
        backgroundSize: "var(--input-area-bg-size, cover)",
        backgroundPosition: "var(--input-area-bg-position, center)",
        backdropFilter: "blur(var(--input-area-blur, 0px)) saturate(180%)",
        WebkitBackdropFilter: "blur(var(--input-area-blur, 0px)) saturate(180%)"
      } : {}),
      borderTop: e ? "var(--input-area-border-top, 1px solid #efefef)" : "1px solid rgba(0,0,0,0.06)",
      flexShrink: 0,
      position: "relative",
      zIndex: 60,
      transform: "translateZ(0)",
      WebkitTransform: "translateZ(0)",
      willChange: "transform"
    },
    children: [t ? p.jsxs("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "44px",
        padding: "0 8px"
      },
      children: [p.jsxs("div", {
        style: {
          display: "flex",
          gap: "24px",
          alignItems: "center"
        },
        children: [p.jsx("button", {
          onClick: a,
          style: {
            background: "transparent",
            border: "none",
            color: "#ed4956",
            cursor: "pointer",
            transition: "opacity 0.2s"
          },
          children: p.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2px"
            },
            children: [p.jsx(g.Delete, {
              size: 20
            }), p.jsx("span", {
              style: {
                fontSize: "10px",
                fontWeight: "600"
              },
              children: u("chatActionDelete")
            })]
          })
        }), p.jsx("button", {
          onClick: i,
          style: {
            background: "transparent",
            border: "none",
            color: "#262626",
            cursor: "pointer"
          },
          children: p.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2px"
            },
            children: [p.jsx(g.Forward, {
              size: 20
            }), p.jsx("span", {
              style: {
                fontSize: "10px",
                fontWeight: "600"
              },
              children: u("chatActionForward")
            })]
          })
        }), p.jsx("button", {
          onClick: s,
          style: {
            background: "transparent",
            border: "none",
            color: "#262626",
            cursor: "pointer"
          },
          children: p.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2px"
            },
            children: [p.jsx(g.Favorite, {
              size: 20
            }), p.jsx("span", {
              style: {
                fontSize: "10px",
                fontWeight: "600"
              },
              children: u("chatActionFavorite")
            })]
          })
        }), l && p.jsx("button", {
          onClick: l,
          style: {
            background: "transparent",
            border: "none",
            color: "#262626",
            cursor: "pointer"
          },
          children: p.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2px"
            },
            children: [p.jsx(g.Copy, {}), p.jsx("span", {
              style: {
                fontSize: "10px",
                fontWeight: "600"
              },
              children: u("chatActionCopy")
            })]
          })
        }), o && p.jsx("button", {
          onClick: o,
          style: {
            background: "transparent",
            border: "none",
            color: "#262626",
            cursor: "pointer"
          },
          children: p.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2px"
            },
            children: [p.jsx(g.EyeOff, {
              size: 20
            }), p.jsx("span", {
              style: {
                fontSize: "10px",
                fontWeight: "600"
              },
              children: u("chatActionHide")
            })]
          })
        })]
      }), p.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "16px"
        },
        children: [p.jsx("span", {
          style: {
            fontSize: "14px",
            fontWeight: "700",
            color: "#262626"
          },
          children: u("msgSelectedCount").replace("{count}", n)
        }), p.jsx("button", {
          onClick: d,
          style: {
            background: "transparent",
            border: "none",
            color: "#0095f6",
            fontSize: "14px",
            fontWeight: "700",
            cursor: "pointer"
          },
          children: u("chatActionCancel")
        })]
      })]
    }) : p.jsxs(p.Fragment, {
      children: [Q && p.jsxs("div", {
        className: "nuo-console-shell",
        style: {
          marginBottom: "var(--console-shell-margin-bottom, 8px)",
          marginTop: "var(--console-shell-margin-top, 0)",
          position: "var(--console-shell-position, relative)",
          zIndex: "var(--console-shell-z, 5)",
          isolation: "isolate"
        },
        children: [p.jsxs("div", {
          className: "nuo-console-toggle-row",
          style: {
            display: "flex",
            gap: "var(--console-toggle-row-gap, 6px)",
            alignItems: "stretch",
            marginBottom: le ? "var(--console-toggle-row-mb-open, 8px)" : "var(--console-toggle-row-mb, 0)"
          },
          children: [p.jsxs("button", {
            className: "nuo-console-toggle-btn",
            type: "button",
            onClick: () => de(!le),
            style: {
              flex: 1,
              textAlign: "left",
              border: "var(--console-toggle-border, none)",
              borderRadius: "var(--console-toggle-radius, 12px)",
              padding: "var(--console-toggle-padding, 8px 12px)",
              background: "var(--console-toggle-bg, rgba(255,255,255,0.72))",
              color: "var(--console-toggle-color, #1d1d1f)",
              fontSize: "var(--console-toggle-font-size, 13px)",
              fontWeight: "var(--console-toggle-font-weight, 600)",
              fontFamily: "var(--console-toggle-font-family, inherit)",
              boxShadow: "var(--console-toggle-shadow, none)",
              backdropFilter: "var(--console-toggle-backdrop, none)",
              WebkitBackdropFilter: "var(--console-toggle-backdrop, none)",
              cursor: "pointer"
            },
            children: [u("consoleViewPanel"), fe.length > 0 ? ` · ${fe.length}` : ""]
          }), Number.isFinite(J) && J > 0 && p.jsxs("button", {
            className: "nuo-console-token-btn",
            type: "button",
            onClick: e => {
              e.stopPropagation();
              he(true);
            },
            title: u("tokenBreakdownOpen") || "点击查看 token 分类",
            style: {
              border: "var(--console-token-border, none)",
              borderRadius: "var(--console-token-radius, 12px)",
              padding: "var(--console-token-padding, 8px 12px)",
              background: "var(--console-token-bg, linear-gradient(135deg, #5B8DEF 0%, #9B51E0 100%))",
              color: "var(--console-token-color, #fff)",
              fontSize: "var(--console-token-font-size, 13px)",
              fontWeight: "var(--console-token-font-weight, 700)",
              fontFamily: "var(--console-token-font-family, inherit)",
              cursor: "pointer",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              boxShadow: "var(--console-token-shadow, 0 2px 6px rgba(91,141,239,0.25))"
            },
            children: [p.jsx("span", {
              style: {
                fontSize: "11px",
                opacity: 0.9
              },
              children: "◐"
            }), J]
          })]
        }), le && p.jsxs("div", {
          className: "nuo-console-panel",
          style: {
            borderRadius: "var(--console-panel-radius, 12px)",
            background: "var(--console-panel-bg, rgba(17, 24, 39, 0.92))",
            color: "var(--console-panel-color, #f9fafb)",
            border: "var(--console-panel-border, none)",
            boxShadow: "var(--console-panel-shadow, none)",
            backdropFilter: "var(--console-panel-backdrop, none)",
            WebkitBackdropFilter: "var(--console-panel-backdrop, none)",
            padding: "var(--console-panel-padding, 12px)",
            height: "var(--console-panel-height, 50vh)",
            maxHeight: "var(--console-panel-max-height, none)",
            overflowY: "auto"
          },
          children: [p.jsxs("div", {
            className: "nuo-console-panel-header",
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "8px"
            },
            children: [p.jsx("span", {
              className: "nuo-console-panel-status",
              style: {
                fontSize: "var(--console-status-font-size, 12px)",
                color: "var(--console-status-color, inherit)",
                opacity: "var(--console-status-opacity, 0.85)"
              },
              children: u(ue ? "consoleShowAllMsg" : "consoleShowWarnMsg")
            }), p.jsxs("div", {
              className: "nuo-console-panel-controls",
              style: {
                display: "flex",
                gap: "8px"
              },
              children: [p.jsx("button", {
                className: "nuo-console-ctrl-btn",
                type: "button",
                onClick: () => xe(e => !e),
                style: {
                  border: "var(--console-ctrl-border, none)",
                  background: "var(--console-ctrl-bg, #fff)",
                  color: "var(--console-ctrl-color, #1d1d1f)",
                  borderRadius: "var(--console-ctrl-radius, 8px)",
                  padding: "var(--console-ctrl-padding, 4px 8px)",
                  fontSize: "var(--console-ctrl-font-size, 11px)",
                  cursor: "pointer"
                },
                children: u(ue ? "consoleBtnWarnOnly" : "consoleBtnViewAll")
              }), p.jsx("button", {
                className: "nuo-console-ctrl-btn",
                type: "button",
                onClick: () => pe([]),
                style: {
                  border: "var(--console-ctrl-border, none)",
                  background: "var(--console-ctrl-bg, #fff)",
                  color: "var(--console-ctrl-color, #1d1d1f)",
                  borderRadius: "var(--console-ctrl-radius, 8px)",
                  padding: "var(--console-ctrl-padding, 4px 8px)",
                  fontSize: "var(--console-ctrl-font-size, 11px)",
                  cursor: "pointer"
                },
                children: u("consoleBtnClear")
              }), p.jsx("button", {
                className: "nuo-console-ctrl-btn",
                type: "button",
                onClick: async () => {
                  const e = fe.map(e => `[${e.time}] [${e.level.toUpperCase()}] ${e.text}`).join("\n");
                  if (e) {
                    try {
                      await navigator.clipboard.writeText(e);
                      r(u("consoleCopySuccess"));
                    } catch {
                      r(u("consoleCopyFail"));
                    }
                  }
                },
                style: {
                  border: "var(--console-ctrl-border, none)",
                  background: "var(--console-ctrl-bg, #fff)",
                  color: "var(--console-ctrl-color, #1d1d1f)",
                  borderRadius: "var(--console-ctrl-radius, 8px)",
                  padding: "var(--console-ctrl-padding, 4px 8px)",
                  fontSize: "var(--console-ctrl-font-size, 11px)",
                  cursor: "pointer"
                },
                children: u("consoleBtnCopy")
              })]
            })]
          }), fe.length === 0 ? p.jsx("div", {
            className: "nuo-console-empty",
            style: {
              fontSize: "var(--console-empty-font-size, 12px)",
              color: "var(--console-empty-color, inherit)",
              opacity: "var(--console-empty-opacity, 0.8)"
            },
            children: u(ue ? "consoleEmptyAll" : "consoleEmptyWarn")
          }) : p.jsx("div", {
            className: "nuo-console-entries",
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "var(--console-entries-gap, 4px)"
            },
            children: fe.slice().reverse().map(e => {
              const t = e.text.match(/^\[([^\]]+)\]/);
              const n = t ? t[0] : null;
              const r = n ? e.text.slice(n.length) : e.text;
              const a = t ? {
                GroupChat: "#F5A623",
                Memory: "#00BCD4",
                NPC: "#CE93D8",
                DM_FROM: "#64B5F6",
                GROUP_MSG: "#FF8A65",
                Chat: "#90A4AE",
                NB: "#FFD54F",
                TestAI: "#81C784",
                ChatSettings: "#A1887F",
                AvatarCache: "#80CBC4",
                UserFacts: "#B39DDB"
              }[t[1]] || "#93c5fd" : null;
              const o = e.level === "error" ? "#fca5a5" : e.level === "warn" ? "#fde68a" : null;
              const i = e.text.includes("交錯對話開始") || e.text.includes("交錯對話結束");
              return p.jsxs("div", {
                className: `nuo-console-entry nuo-console-entry-${e.level}${i ? " nuo-console-entry-section" : ""}`,
                style: {
                  fontSize: "var(--console-entry-font-size, 11px)",
                  lineHeight: "var(--console-entry-line-height, 1.5)",
                  wordBreak: "break-word",
                  borderTop: i ? "var(--console-entry-section-border, 1px solid rgba(245,166,35,0.4))" : "var(--console-entry-border, 1px solid rgba(255,255,255,0.08))",
                  paddingTop: "5px",
                  ...(i ? {
                    background: "var(--console-entry-section-bg, rgba(245,166,35,0.08))",
                    margin: "2px -4px 0",
                    padding: "5px 4px 3px",
                    borderRadius: "4px"
                  } : {})
                },
                children: [o && p.jsxs("span", {
                  className: "nuo-console-entry-level",
                  style: {
                    color: `var(--console-entry-${e.level}-color, ${o})`,
                    marginRight: "6px",
                    fontWeight: 600,
                    fontSize: "10px"
                  },
                  children: ["[", e.level.toUpperCase(), "]"]
                }), p.jsx("span", {
                  className: "nuo-console-entry-time",
                  style: {
                    opacity: "var(--console-entry-time-opacity, 0.45)",
                    color: "var(--console-entry-time-color, inherit)",
                    marginRight: "6px",
                    fontSize: "10px"
                  },
                  children: e.time
                }), n && p.jsx("span", {
                  className: "nuo-console-entry-prefix",
                  style: {
                    color: a,
                    fontWeight: 600,
                    marginRight: "2px"
                  },
                  children: n
                }), p.jsx("span", {
                  className: "nuo-console-entry-text",
                  style: {
                    opacity: "var(--console-entry-text-opacity, 0.92)",
                    color: "var(--console-entry-text-color, inherit)"
                  },
                  children: r
                })]
              }, e.id);
            })
          })]
        })]
      }), x && p.jsxs("div", {
        className: "input-reply-preview-bar",
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "var(--reply-bar-padding, 4px 12px 12px)",
          marginBottom: "var(--reply-bar-margin-bottom, 0)",
          marginTop: "var(--reply-bar-margin-top, 0)",
          background: "var(--reply-bar-bg, transparent)",
          borderRadius: "var(--reply-bar-radius, 0)",
          border: "var(--reply-bar-border, none)",
          boxShadow: "var(--reply-bar-shadow, none)",
          backdropFilter: "var(--reply-bar-backdrop, none)",
          WebkitBackdropFilter: "var(--reply-bar-backdrop, none)",
          transform: "var(--reply-bar-transform, none)",
          animation: "var(--reply-bar-animation, none)",
          clipPath: "var(--reply-bar-clip-path, none)"
        },
        children: [p.jsxs("div", {
          className: "input-reply-preview-content",
          style: {
            display: "flex",
            flexDirection: "var(--reply-bar-content-direction, column)",
            gap: "var(--reply-bar-content-gap, 2px)",
            flex: 1,
            minWidth: 0,
            borderLeft: "var(--reply-bar-accent-border, 2px solid var(--reply-bar-accent, #0095f6))",
            paddingLeft: "var(--reply-bar-content-padding-left, 10px)"
          },
          children: [p.jsx("span", {
            className: "input-reply-preview-name",
            style: {
              fontSize: "var(--reply-bar-name-size, 11px)",
              fontWeight: "var(--reply-bar-name-weight, 700)",
              fontFamily: "var(--reply-bar-name-font-family, inherit)",
              fontStyle: "var(--reply-bar-name-font-style, normal)",
              letterSpacing: "var(--reply-bar-name-letter-spacing, normal)",
              color: "var(--reply-bar-accent, #0095f6)"
            },
            children: u("chatReplyTo").replace("{name}", x.sender === "me" ? u("chatReplySelf") : f || (m == null ? undefined : m.name))
          }), x.image || x.simulatedImageContent ? p.jsxs("div", {
            className: "input-reply-preview-text input-reply-preview-media",
            style: {
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "var(--reply-bar-text-size, 12px)",
              color: "var(--reply-bar-text-color, #8e8e8e)"
            },
            children: [p.jsx(g.Image, {
              size: 12
            }), p.jsx("span", {
              children: "Photo"
            })]
          }) : p.jsx("span", {
            className: "input-reply-preview-text",
            style: {
              fontSize: "var(--reply-bar-text-size, 12px)",
              color: "var(--reply-bar-text-color, #8e8e8e)",
              fontFamily: "var(--reply-bar-text-font-family, inherit)",
              fontStyle: "var(--reply-bar-text-font-style, normal)",
              letterSpacing: "var(--reply-bar-text-letter-spacing, normal)",
              whiteSpace: "var(--reply-bar-text-whitespace, nowrap)",
              overflow: "hidden",
              textOverflow: "ellipsis"
            },
            children: x.text
          })]
        }), p.jsx("div", {
          className: "input-reply-preview-close",
          onClick: h,
          style: {
            padding: "var(--reply-bar-close-padding, 4px)",
            cursor: "pointer",
            color: "var(--reply-bar-close-color, var(--reply-bar-text-color, #8e8e8e))",
            transform: "var(--reply-bar-close-transform, none)"
          },
          children: p.jsx(g.X, {
            size: 16
          })
        })]
      }), I && p.jsxs("div", {
        className: "input-sendas-bar input-sendas-char-bar",
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "var(--sendas-bar-padding, 6px 12px)",
          marginBottom: "var(--sendas-bar-margin-bottom, 4px)",
          marginTop: "var(--sendas-bar-margin-top, 0)",
          background: "var(--sendas-char-bg, rgba(0, 149, 246, 0.08))",
          borderRadius: "var(--sendas-bar-radius, 10px)",
          border: "var(--sendas-char-border, 1px solid rgba(0, 149, 246, 0.2))",
          boxShadow: "var(--sendas-bar-shadow, none)",
          transform: "var(--sendas-bar-transform, none)",
          animation: "var(--sendas-bar-animation, none)",
          backdropFilter: "var(--sendas-bar-backdrop, none)",
          WebkitBackdropFilter: "var(--sendas-bar-backdrop, none)"
        },
        children: [p.jsxs("span", {
          onClick: R ? T : undefined,
          className: "input-sendas-label",
          style: {
            fontSize: "var(--sendas-label-size, 12px)",
            fontWeight: "var(--sendas-label-weight, 600)",
            color: "var(--sendas-char-color, #0095f6)",
            fontFamily: "var(--sendas-label-font-family, inherit)",
            cursor: R ? "pointer" : "default",
            flex: 1
          },
          children: [R ? (u("groupSendAsCharLabel") || "以 {name} 的身份發送").replace("{name}", R) : u("chatMenuSendAsChar"), R && p.jsx("span", {
            style: {
              marginLeft: "4px",
              fontSize: "10px",
              opacity: 0.6
            },
            children: "▾"
          })]
        }), p.jsx("div", {
          onClick: M || T,
          className: "input-sendas-close",
          style: {
            padding: "2px 4px",
            cursor: "pointer",
            color: "var(--sendas-close-color, #8e8e8e)",
            fontSize: "12px"
          },
          children: p.jsx(g.X, {
            size: 14
          })
        })]
      }), E && p.jsxs("div", {
        className: "input-sendas-bar input-sendas-narration-bar",
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "var(--sendas-bar-padding, 6px 12px)",
          marginBottom: "var(--sendas-bar-margin-bottom, 4px)",
          marginTop: "var(--sendas-bar-margin-top, 0)",
          background: "var(--sendas-narration-bg, rgba(142, 142, 142, 0.08))",
          borderRadius: "var(--sendas-bar-radius, 10px)",
          border: "var(--sendas-narration-border, 1px solid rgba(142, 142, 142, 0.25))",
          boxShadow: "var(--sendas-bar-shadow, none)",
          transform: "var(--sendas-bar-transform, none)",
          animation: "var(--sendas-bar-animation, none)",
          backdropFilter: "var(--sendas-bar-backdrop, none)",
          WebkitBackdropFilter: "var(--sendas-bar-backdrop, none)"
        },
        children: [p.jsx("span", {
          className: "input-sendas-label",
          style: {
            fontSize: "var(--sendas-label-size, 12px)",
            fontWeight: "var(--sendas-label-weight, 600)",
            color: "var(--sendas-narration-color, #8e8e8e)",
            fontStyle: "var(--sendas-narration-font-style, italic)",
            fontFamily: "var(--sendas-label-font-family, inherit)"
          },
          children: u("chatMenuSendAsNarration") || "旁白模式"
        }), p.jsx("div", {
          onClick: F,
          className: "input-sendas-close",
          style: {
            padding: "2px 4px",
            cursor: "pointer",
            color: "var(--sendas-close-color, #8e8e8e)",
            fontSize: "12px"
          },
          children: p.jsx(g.X, {
            size: 14
          })
        })]
      }), ie && p.jsxs("div", {
        className: "more-options-popup",
        style: {
          position: "absolute",
          bottom: "calc(100% + 12px)",
          left: "16px",
          width: "180px",
          background: e ? "var(--more-options-bg, rgba(44, 44, 46, 0.75))" : "rgba(255, 255, 255, 0.95)",
          backdropFilter: e ? "var(--more-options-blur, blur(40px) saturate(180%))" : "blur(30px) saturate(180%)",
          WebkitBackdropFilter: e ? "var(--more-options-blur, blur(40px) saturate(180%))" : "blur(30px) saturate(180%)",
          borderRadius: "16px",
          boxShadow: e ? "var(--more-options-shadow, 0 8px 40px rgba(0,0,0,0.25))" : "0 10px 40px rgba(0,0,0,0.2)",
          padding: "6px",
          display: "flex",
          flexDirection: "column",
          gap: "1px",
          zIndex: 100,
          color: e ? "var(--more-options-color, inherit)" : "inherit",
          border: e ? "var(--more-options-border, 1px solid rgba(255, 255, 255, 0.18))" : "none",
          animation: "modalSlideUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.1)"
        },
        children: [p.jsxs("div", {
          className: "more-options-item-row",
          onClick: () => {
            b("send_image");
            se(false);
          },
          style: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px",
            borderRadius: "8px",
            cursor: "pointer"
          },
          children: [p.jsx(g.ImagePlus, {
            size: 20
          }), p.jsx("span", {
            style: {
              fontSize: "14px",
              fontWeight: "500"
            },
            children: u("chatMenuUpload")
          })]
        }), p.jsxs("div", {
          className: "more-options-item-row",
          onClick: () => {
            v();
            se(false);
          },
          style: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px",
            borderRadius: "8px",
            cursor: "pointer"
          },
          children: [p.jsx(g.FileText, {
            size: 20
          }), p.jsx("span", {
            style: {
              fontSize: "14px",
              fontWeight: "500"
            },
            children: u("chatMenuDescImg")
          })]
        }), !I && p.jsxs(p.Fragment, {
          children: [p.jsxs("div", {
            className: "more-options-item-row",
            onClick: async () => {
              try {
                if (typeof y === 'function') {
                  await Promise.resolve(y());
                }
              } catch(error) {
                console.error("继续回应失败:", error);
              } finally {
                se(false);
              }
            },
            style: {
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px",
              borderRadius: "8px",
              cursor: "pointer"
            },
            children: [p.jsx(g.Play, {
              size: 20
            }), p.jsx("span", {
              style: {
                fontSize: "14px",
                fontWeight: "500"
              },
              children: u("chatMenuContinue")
            })]
          }), p.jsxs("div", {
            className: "more-options-item-row",
            onClick: () => {
              k();
              se(false);
            },
            style: {
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px",
              borderRadius: "8px",
              cursor: "pointer"
            },
            children: [p.jsx(g.Refresh, {
              size: 20
            }), p.jsx("span", {
              style: {
                fontSize: "14px",
                fontWeight: "500"
              },
              children: u("chatMenuReroll")
            })]
          })]
        }), p.jsxs("div", {
          className: "more-options-item-row",
          onClick: () => {
            w();
            se(false);
          },
          style: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px",
            borderRadius: "8px",
            cursor: "pointer"
          },
          children: [p.jsx(g.Gift, {
            size: 20
          }), p.jsx("span", {
            style: {
              fontSize: "14px",
              fontWeight: "500"
            },
            children: u("chatMenuGift")
          })]
        }), p.jsxs("div", {
          className: "more-options-item-row",
          onClick: () => {
            j();
            se(false);
          },
          style: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px",
            borderRadius: "8px",
            cursor: "pointer"
          },
          children: [p.jsx(g.Transfer, {
            size: 20
          }), p.jsx("span", {
            style: {
              fontSize: "14px",
              fontWeight: "500"
            },
            children: u("chatMenuTransfer")
          })]
        }), S && p.jsxs("div", {
          className: "more-options-item-row",
          onClick: () => {
            S();
            se(false);
          },
          style: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px",
            borderRadius: "8px",
            cursor: "pointer"
          },
          children: [p.jsx(g.RedPacket, {
            size: 20
          }), p.jsx("span", {
            style: {
              fontSize: "14px",
              fontWeight: "500"
            },
            children: u("chatMenuRedEnvelope") || "發紅包"
          })]
        }), p.jsxs("div", {
          className: "more-options-item-row",
          onClick: () => {
            C();
            se(false);
          },
          style: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px",
            borderRadius: "8px",
            cursor: "pointer"
          },
          children: [p.jsx(g.Location, {
            size: 20
          }), p.jsx("span", {
            style: {
              fontSize: "14px",
              fontWeight: "500"
            },
            children: u("chatMenuLocation")
          })]
        }), z && p.jsxs("div", {
          className: "more-options-item-row",
          onClick: () => {
            z();
            se(false);
          },
          style: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px",
            borderRadius: "8px",
            cursor: "pointer"
          },
          children: [p.jsx(g.Mail, {
            size: 20
          }), p.jsx("span", {
            style: {
              fontSize: "14px",
              fontWeight: "500"
            },
            children: u("chatMenuInvite")
          })]
        }), p.jsxs("div", {
          className: "more-options-item-row",
          onClick: () => {
            if (_ != null) {
              _();
            }
            se(false);
          },
          style: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px",
            borderRadius: "8px",
            cursor: "pointer"
          },
          children: [p.jsx(g.NotebookPen, {
            size: 20
          }), p.jsx("span", {
            style: {
              fontSize: "14px",
              fontWeight: "500"
            },
            children: u("chatMenuQuickReply")
          })]
        }), T && p.jsxs(p.Fragment, {
          children: [p.jsx("div", {
            style: {
              height: "1px",
              background: e ? "var(--more-options-divider, rgba(255,255,255,0.1))" : "rgba(0,0,0,0.06)",
              margin: "2px 10px"
            }
          }), p.jsxs("div", {
            className: "more-options-item-row",
            onClick: () => {
              T();
              se(false);
            },
            style: {
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px",
              borderRadius: "8px",
              cursor: "pointer"
            },
            children: [p.jsx(g.User, {
              size: 20,
              style: I ? {
                color: "#0095f6"
              } : {}
            }), p.jsx("span", {
              style: {
                fontSize: "14px",
                fontWeight: "500",
                color: I ? "#0095f6" : undefined
              },
              children: u(I ? "chatMenuSendAsUser" : "chatMenuSendAsChar")
            })]
          })]
        }), F && p.jsxs("div", {
          className: "more-options-item-row",
          onClick: () => {
            F();
            se(false);
          },
          style: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "10px",
            borderRadius: "8px",
            cursor: "pointer"
          },
          children: [p.jsx(g.Quote, {
            size: 20,
            style: E ? {
              color: "#8e8e8e"
            } : {}
          }), p.jsx("span", {
            style: {
              fontSize: "14px",
              fontWeight: "500",
              color: E ? "#8e8e8e" : undefined
            },
            children: E ? u("chatMenuNarrationOff") || "關閉旁白" : u("chatMenuSendAsNarration") || "旁白模式"
          })]
        })]
      }), p.jsx(te, {
        isCustomThemeActive: e,
        t: u,
        textareaRef: B,
        inputTextRef: N,
        resizeInputTextarea: L,
        onKeyDown: O,
        onSend: P,
        onAIRequest: $,
        onOpenVoiceInput: H,
        onOpenStickerPicker: U,
        userStickers: G,
        onSendSticker: q,
        isGenerating: K,
        onStopGenerating: X,
        mentionMembers: ee,
        mentionGroupAvatar: ne,
        showMoreOptions: ie,
        onToggleMoreOptions: se,
        inputPlusIcon: D,
        setInputPlusIcon: A
      })]
    }), p.jsx(W, {
      isOpen: ge,
      onClose: () => he(false),
      t: u
    })]
  });
});
const re = ["IMAGE", "IMG", "圖片", "图片", "某消息", "照片", "相片"];
const ae = ["VOICE", "語音", "语音"];
const oe = ["STICKER", "表情包", "貼圖", "贴图"];
const ie = (e, t) => {
  const n = e.toUpperCase();
  return t.some(e => n.includes(e.toUpperCase()));
};
const se = e => {
  var t;
  var n;
  return e.image || e.simulatedImageContent || e.isSimulated || e.imageThumbnail || ((t = e.specialData) == null ? undefined : t.simulated_image) || ((n = e.specialData) == null ? undefined : n.image);
};
const le = e => {
  var t;
  return e.sticker || ((t = e.specialData) == null ? undefined : t.sticker);
};
const de = e => {
  var t;
  return e.isVoice || e.voiceText || ((t = e.specialData) == null ? undefined : t.voice);
};
function ce(e, t) {
  var n;
  var r;
  if (!e || !e.length || !t) {
    return null;
  }
  const a = String(t).trim();
  if (!a) {
    return null;
  }
  for (let o = e.length - 1; o >= 0; o--) {
    const t = e[o];
    if (!t) {
      continue;
    }
    if (t.text && t.text.includes(a)) {
      return {
        msg: t,
        replyTo: ue(t, a)
      };
    }
    const i = t.giftData || ((n = t.specialData) == null ? undefined : n.gift);
    const s = t.locationData || ((r = t.specialData) == null ? undefined : r.location);
    if (se(t) && ie(a, re)) {
      return {
        msg: t,
        replyTo: ue(t, "[圖片]")
      };
    }
    if (de(t) && ie(a, ae)) {
      const e = t.voiceText ? `[語音: ${t.voiceText}]` : "[語音]";
      return {
        msg: t,
        replyTo: ue(t, t.text || e)
      };
    }
    if (le(t) && ie(a, oe)) {
      return {
        msg: t,
        replyTo: ue(t, t.text || "[表情包]")
      };
    }
    if (t.transferData && ie(a, ["TRANSFER", "轉賬", "转账"]) && a.includes(String(t.transferData.amount))) {
      return {
        msg: t,
        replyTo: ue(t, `[轉賬 ¥${t.transferData.amount}]`)
      };
    }
    if (i && ie(a, ["GIFT", "禮物", "礼物"]) && a.includes(String(i.name))) {
      return {
        msg: t,
        replyTo: ue(t, `[禮物：${i.name}]`)
      };
    }
    if (s && ie(a, ["LOCATION", "位置", "定位"])) {
      return {
        msg: t,
        replyTo: ue(t, `[位置: ${s.name || ""}]`)
      };
    }
    if (t.isMomentForward && a.includes("分享朋友圈")) {
      return {
        msg: t,
        replyTo: ue(t, "[分享朋友圈]")
      };
    }
    if (t.type === "combined_history" && ie(a, ["FORWARD", "聊天記錄", "聊天记录"])) {
      return {
        msg: t,
        replyTo: ue(t, "[聊天記錄]")
      };
    }
  }
  return null;
}
function pe(e) {
  var t;
  var n;
  if (!e) {
    return "某消息";
  }
  const r = (e.text || "").trim();
  if (r) {
    return r;
  }
  const a = (e.rawContent || e.content || "").trim();
  if (a && !/^\[REPLY_TO:/i.test(a)) {
    return a;
  }
  if (se(e)) {
    return "[圖片]";
  }
  if (de(e)) {
    if (e.voiceText) {
      return `[語音: ${e.voiceText}]`;
    } else {
      return "[語音]";
    }
  }
  if (le(e)) {
    return "[表情包]";
  }
  const o = e.giftData || ((t = e.specialData) == null ? undefined : t.gift);
  if (o == null ? undefined : o.name) {
    return `[禮物：${o.name}]`;
  }
  const i = e.locationData || ((n = e.specialData) == null ? undefined : n.location);
  if (i) {
    return `[位置: ${i.name || ""}]`;
  } else if (e.transferData) {
    return `[轉賬 ¥${e.transferData.amount}]`;
  } else if (e.isMomentForward) {
    return "[分享朋友圈]";
  } else if (e.type === "combined_history") {
    return "[聊天記錄]";
  } else if (e.replyTo) {
    return pe(e.replyTo);
  } else {
    return "某消息";
  }
}
function ue(e, t) {
  var n;
  const r = {
    id: e.id,
    text: e.text || t,
    sender: e.sender
  };
  if (se(e)) {
    const t = e.imageThumbnail || e.image || e.simulatedImageContent;
    if (t) {
      r.image = t;
    }
    if (e.isSimulated || e.simulatedImageContent) {
      r.isSimulated = true;
    }
  }
  if (le(e)) {
    r.sticker = e.sticker || ((n = e.specialData) == null ? undefined : n.sticker) || true;
  }
  return r;
}
const xe = ({
  contextMenu: e,
  setContextMenu: t,
  editingMessage: r,
  setEditingMessage: a,
  getMessageSelectionKey: o,
  t: i,
  setReplyingMessage: s,
  setSelectedMessageIds: l,
  setShowForwardSelector: d,
  setIsSelectionMode: c,
  handleToggleFavorite: x,
  handleDeleteMessage: h,
  handleUpdateMessage: m,
  handleInsertBubbleAfter: f,
  bubbleFontSize: b,
  reactionEmojis: v,
  onChangeReactionEmojis: y,
  onReaction: k,
  themeStyle: w,
  bubbleStyle: j,
  partnerBubbleStyle: S,
  bubbleTextColor: C,
  partnerBubbleTextColor: z,
  isCustomThemeActive: I,
  isBubbleThemeActive: R,
  handleRecallMessage: T,
  handleToggleHideMessage: W,
  sendAsChar: M = false
}) => {
  const E = u.useRef(null);
  const F = u.useRef(null);
  const D = u.useRef(false);
  const A = (e, t) => {
    if (t === "state") {
      return {
        contentType: "state",
        content: e
      };
    }
    if (t === "thought") {
      return {
        contentType: "thought",
        content: e
      };
    }
    let n;
    if (n = e.match(/^\[REPLY_TO:\s*(?:User|Char|\S+?)\|[\s\S]+?\][\s\S]*$/i)) {
      return {
        contentType: "reply",
        content: e
      };
    } else if (n = e.match(/^\[VOICE:\s*([\s\S]+?)\]$/i)) {
      return {
        contentType: "voice",
        content: n[1]
      };
    } else if (n = e.match(/^\[IMAGE:\s*([\s\S]+?)\]$/i)) {
      return {
        contentType: "image",
        content: n[1]
      };
    } else if (n = e.match(/^\[IMG:\s*([\s\S]+?)\]$/i)) {
      return {
        contentType: "img",
        content: n[1]
      };
    } else if (n = e.match(/^\[STICKER:\s*([\s\S]+?)\]$/i)) {
      return {
        contentType: "sticker",
        content: n[1]
      };
    } else if (n = e.match(/^\[LOCATION:\s*([\s\S]+?)\]$/i)) {
      return {
        contentType: "location",
        content: n[1]
      };
    } else if (n = e.match(/^\[TRANSFER:\s*([\s\S]+?)\]$/i)) {
      return {
        contentType: "transfer",
        content: n[1]
      };
    } else if (n = e.match(/^\[GIFT:\s*([\s\S]+?)\]$/i)) {
      return {
        contentType: "gift",
        content: n[1]
      };
    } else if (n = e.match(/^\[HTML\]([\s\S]*)$/i)) {
      return {
        contentType: "html",
        content: n[1]
      };
    } else if (n = e.match(/^\[FORWARD:\s*([\s\S]+?)\]$/i)) {
      return {
        contentType: "forward",
        content: n[1]
      };
    } else {
      return {
        contentType: "text",
        content: e
      };
    }
  };
  return p.jsxs(p.Fragment, {
    children: [e && p.jsxs("div", {
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
        cursor: "default",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      onClick: () => t(null),
      children: [p.jsx("div", {
        style: {
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.35)"
        }
      }), p.jsxs("div", {
        style: {
          position: "relative",
          width: "90%",
          maxWidth: "320px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          pointerEvents: "auto"
        },
        onClick: e => e.stopPropagation(),
        children: [e.message.type !== "recalled" && p.jsx("div", {
          className: "reaction-bar",
          style: {
            maxWidth: "95vw",
            boxSizing: "border-box",
            flexShrink: 0
          },
          children: (v || ["❤️", "😂", "😮", "😢", "😡", "👍", "🔥"]).map((t, r) => p.jsx("span", {
            className: "reaction-item",
            onClick: () => {
              if (D.current) {
                D.current = false;
              } else {
                k(t, e.message);
              }
            },
            onTouchStart: () => {
              D.current = false;
              F.current = setTimeout(async () => {
                D.current = true;
                const e = await n("自定義表情：", t);
                if (e && e !== t) {
                  const t = [...(v || ["❤️", "😂", "😮", "😢", "😡", "👍", "🔥"])];
                  t[r] = e;
                  y(t);
                }
              }, 500);
            },
            onTouchEnd: () => {
              if (F.current) {
                clearTimeout(F.current);
                F.current = null;
              }
            },
            onTouchMove: () => {
              if (F.current) {
                clearTimeout(F.current);
                F.current = null;
              }
            },
            onContextMenu: async e => {
              e.preventDefault();
              e.stopPropagation();
              const a = await n("自定義表情：", t);
              if (a && a !== t) {
                const e = [...(v || ["❤️", "😂", "😮", "😢", "😡", "👍", "🔥"])];
                e[r] = a;
                y(e);
              }
            },
            children: t
          }, `${t}-${r}`))
        }), p.jsx("div", {
          style: {
            alignSelf: e.message.sender === "me" ? "flex-end" : "flex-start",
            width: "100%",
            display: "flex",
            justifyContent: e.message.sender === "me" ? "flex-end" : "flex-start",
            maxHeight: "35vh",
            overflow: "hidden"
          },
          children: p.jsx("div", {
            className: `msg-bubble-container ${e.message.sender === "me" ? "msg-rad-me-mid" : "msg-rad-them-mid"} ${R ? e.message.sender === "me" ? "bubble-me-custom" : "bubble-them-custom" : ""}`,
            style: {
              maxWidth: "100%",
              maxHeight: "35vh",
              padding: e.message.image || e.message.simulatedImageContent || e.message.locationData || e.message.transferData || e.message.giftData ? "0" : undefined,
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              background: (e => {
                if (e.type === "combined_history" || e.sticker) {
                  return "transparent";
                }
                if (e.sender === "me") {
                  if (w === "whatsapp") {
                    if (j && j.startsWith("#") && j !== "#DCF8C6") {
                      return j;
                    } else {
                      return "#DCF8C6";
                    }
                  }
                  if (w === "instagram" || w === "qq") {
                    if (j === "premium-gradient") {
                      return "linear-gradient(135deg, #7F00FF 0%, #E100FF 100%)";
                    } else if (j === "classic-blue") {
                      return "#0095f6";
                    } else if (j === "minimal-gray") {
                      return "#262626";
                    } else {
                      return j;
                    }
                  }
                } else {
                  if (w === "whatsapp") {
                    if (S && S !== "#efefef" && S !== "#ffffff") {
                      return S;
                    } else {
                      return "#ffffff";
                    }
                  }
                  if (w === "instagram" || w === "qq") {
                    return S || "#efefef";
                  }
                }
              })(e.message),
              color: (B = e.message, B.sender === "me" ? w === "whatsapp" ? j && j.startsWith("#") && j !== "#DCF8C6" && C || "#000" : w === "instagram" || w === "qq" ? C || "#fff" : undefined : w === "whatsapp" ? S && S !== "#efefef" && S !== "#ffffff" && z || "#000" : S && S !== "#efefef" && S !== "#ffffff" ? z || "#000" : z || undefined)
            },
            children: e.message.image ? p.jsx("div", {
              style: {
                padding: "0"
              },
              children: p.jsx("img", {
                decoding: "async",
                src: e.message.image,
                style: {
                  maxWidth: "100%",
                  maxHeight: "30vh",
                  objectFit: "contain",
                  display: "block"
                }
              })
            }) : e.message.simulatedImageContent ? p.jsxs("div", {
              style: {
                position: "relative",
                maxHeight: "25vh",
                overflow: "hidden"
              },
              children: [p.jsx("div", {
                style: {
                  padding: "0"
                },
                children: p.jsx("div", {
                  style: {
                    width: "200px",
                    height: "200px",
                    maxHeight: "25vh",
                    background: "#e0e0e0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "40px",
                    color: "#fff"
                  },
                  children: "📷"
                })
              }), p.jsxs("div", {
                style: {
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "rgba(0,0,0,0.6)",
                  color: "#fff",
                  padding: "6px",
                  fontSize: "10px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: [p.jsx("div", {
                  style: {
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  },
                  children: e.message.simulatedImageContent
                }), p.jsx("div", {
                  style: {
                    opacity: 0.8,
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  },
                  children: e.message.simulatedImageLocation
                })]
              })]
            }) : e.message.sticker ? p.jsx("div", {
              style: {
                padding: "10px",
                maxHeight: "20vh",
                overflow: "hidden"
              },
              children: p.jsx("img", {
                decoding: "async",
                src: e.message.sticker,
                style: {
                  maxWidth: "120px",
                  maxHeight: "15vh",
                  objectFit: "contain"
                },
                onError: e => {
                  e.target.style.opacity = "0.3";
                }
              })
            }) : e.message.isVoice || e.message.voice ? p.jsxs("div", {
              style: {
                padding: "8px 12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                overflow: "hidden"
              },
              children: [p.jsx(g.Mic, {
                size: 18,
                style: {
                  flexShrink: 0
                }
              }), p.jsx("span", {
                style: {
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: e.message.voiceText || i("msgVoiceMessage")
              })]
            }) : e.message.locationData ? p.jsxs("div", {
              style: {
                padding: "10px",
                maxHeight: "15vh",
                overflow: "hidden"
              },
              children: [p.jsxs("div", {
                style: {
                  fontWeight: "600",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: ["📍 ", e.message.locationData.name]
              }), p.jsx("div", {
                style: {
                  fontSize: "12px",
                  opacity: 0.8,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: e.message.locationData.address
              })]
            }) : e.message.transferData ? p.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "10px",
                overflow: "hidden"
              },
              children: [p.jsx(g.Transfer, {
                size: 16,
                style: {
                  flexShrink: 0
                }
              }), p.jsx("span", {
                style: {
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: i("msgTransferAmount", {
                  amount: e.message.transferData.amount
                })
              })]
            }) : e.message.giftData ? p.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "10px",
                overflow: "hidden"
              },
              children: [p.jsx(g.Gift, {
                size: 16,
                style: {
                  flexShrink: 0
                }
              }), p.jsx("span", {
                style: {
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: e.message.giftData.name
              })]
            }) : e.message.type === "combined_history" && e.message.historyData ? p.jsxs("div", {
              style: {
                padding: "10px",
                maxHeight: "20vh",
                overflow: "hidden"
              },
              children: [p.jsx("div", {
                style: {
                  fontWeight: "600",
                  marginBottom: "4px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: e.message.historyData.title
              }), p.jsx("div", {
                style: {
                  fontSize: "12px",
                  opacity: 0.8
                },
                children: (e.message.historyData.messages || []).slice(0, 2).map((e, t) => p.jsxs("div", {
                  style: {
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  },
                  children: [e.senderName || i("msgUnknown"), ": ", e.image ? i("msgImageLabel") : e.text]
                }, t))
              })]
            }) : e.message.isHtml ? p.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontStyle: "italic",
                opacity: 0.8,
                padding: "10px",
                overflow: "hidden"
              },
              children: [p.jsx(g.Sparkles, {
                size: 16,
                style: {
                  flexShrink: 0
                }
              }), p.jsx("span", {
                style: {
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: i("msgHtmlContent")
              })]
            }) : p.jsx("span", {
              style: {
                fontSize: `${b}px`,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                display: "-webkit-box",
                WebkitLineClamp: 8,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                maxHeight: "25vh"
              },
              children: e.message.text
            })
          })
        }), p.jsx("div", {
          className: "ig-context-menu",
          style: {
            width: "100%",
            background: "rgba(255, 255, 255, 0.94)",
            backdropFilter: "blur(20px)",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
            transform: "scale(1)",
            transition: "transform 0.2s"
          },
          children: e.message.type === "recalled" ? p.jsxs(p.Fragment, {
            children: [p.jsxs("div", {
              className: "ig-menu-item",
              onClick: () => {
                const n = e.message.text;
                const r = A(n, e.message.type);
                a({
                  id: e.message.id,
                  text: r.content,
                  contentType: r.contentType,
                  sender: e.message.sender,
                  timestamp: e.message.timestamp
                });
                t(null);
              },
              children: [p.jsx(g.Edit, {}), " ", i("ctxMenuEdit")]
            }), p.jsxs("div", {
              className: "ig-menu-item",
              onClick: () => {
                c(true);
                l(new Set([o(e.message)]));
                t(null);
              },
              children: [p.jsx(g.MultiSelect, {}), " ", i("ctxMenuMultiSelect")]
            }), W && p.jsx("div", {
              className: "ig-menu-item",
              onClick: () => W(e.message.id),
              children: e.message.hiddenByUser ? p.jsxs(p.Fragment, {
                children: [p.jsx(g.Eye, {}), " ", i("ctxMenuUnhide")]
              }) : p.jsxs(p.Fragment, {
                children: [p.jsx(g.EyeOff, {}), " ", i("ctxMenuHide")]
              })
            }), p.jsxs("div", {
              className: "ig-menu-item danger",
              onClick: () => h(e.message.id),
              children: [p.jsx(g.Delete, {}), " ", i("ctxMenuDeleteAll")]
            })]
          }) : e.message.type === "mode_switch" ? p.jsxs(p.Fragment, {
            children: [p.jsxs("div", {
              className: "ig-menu-item",
              onClick: () => {
                c(true);
                l(new Set([o(e.message)]));
                t(null);
              },
              children: [p.jsx(g.MultiSelect, {}), " ", i("ctxMenuMultiSelect")]
            }), W && p.jsx("div", {
              className: "ig-menu-item",
              onClick: () => W(e.message.id),
              children: e.message.hiddenByUser ? p.jsxs(p.Fragment, {
                children: [p.jsx(g.Eye, {}), " ", i("ctxMenuUnhide")]
              }) : p.jsxs(p.Fragment, {
                children: [p.jsx(g.EyeOff, {}), " ", i("ctxMenuHide")]
              })
            }), p.jsxs("div", {
              className: "ig-menu-item danger",
              onClick: () => h(e.message.id),
              children: [p.jsx(g.Delete, {}), " ", i("ctxMenuDeleteAll")]
            })]
          }) : e.message.type === "state" ? p.jsxs(p.Fragment, {
            children: [p.jsxs("div", {
              className: "ig-menu-item",
              onClick: () => {
                const n = e.message.text;
                a({
                  id: e.message.id,
                  text: n,
                  contentType: "state",
                  sender: e.message.sender,
                  timestamp: e.message.timestamp
                });
                t(null);
              },
              children: [p.jsx(g.Edit, {}), " ", i("ctxMenuEdit")]
            }), p.jsxs("div", {
              className: "ig-menu-item",
              onClick: () => {
                c(true);
                l(new Set([o(e.message)]));
                t(null);
              },
              children: [p.jsx(g.MultiSelect, {}), " ", i("ctxMenuMultiSelect")]
            }), W && p.jsx("div", {
              className: "ig-menu-item",
              onClick: () => W(e.message.id),
              children: e.message.hiddenByUser ? p.jsxs(p.Fragment, {
                children: [p.jsx(g.Eye, {}), " ", i("ctxMenuUnhide")]
              }) : p.jsxs(p.Fragment, {
                children: [p.jsx(g.EyeOff, {}), " ", i("ctxMenuHide")]
              })
            }), p.jsxs("div", {
              className: "ig-menu-item danger",
              onClick: () => h(e.message.id),
              children: [p.jsx(g.Delete, {}), " ", i("ctxMenuDeleteAll")]
            })]
          }) : p.jsxs(p.Fragment, {
            children: [p.jsxs("div", {
              className: "ig-menu-item",
              onClick: () => {
                s(e.message);
                t(null);
              },
              children: [p.jsx(g.Back, {}), " ", i("ctxMenuReply")]
            }), p.jsxs("div", {
              className: "ig-menu-item",
              onClick: () => {
                navigator.clipboard.writeText(e.message.text);
                t(null);
              },
              children: [p.jsx(g.Copy, {}), " ", i("ctxMenuCopy")]
            }), p.jsxs("div", {
              className: "ig-menu-item",
              onClick: () => {
                l(new Set([o(e.message)]));
                d(true);
                t(null);
              },
              children: [p.jsx(g.Forward, {}), " ", i("chatActionForward")]
            }), p.jsxs("div", {
              className: "ig-menu-item",
              onClick: () => {
                x(e.message.id);
                t(null);
              },
              children: [p.jsx(g.Favorite, {
                style: {
                  fill: e.message.isFavorite ? "currentColor" : "none"
                }
              }), " ", e.message.isFavorite ? i("ctxMenuUnfavorite") : i("chatActionFavorite")]
            }), p.jsxs("div", {
              className: "ig-menu-item",
              onClick: () => {
                const n = e.message.rawContent;
                const r = n && !n.trimStart().startsWith("{") ? n : null;
                const o = e.message.isVoice || e.message.voiceText ? `[VOICE: ${e.message.voiceText || ""}]` : e.message.sticker ? `[STICKER: ${e.message.stickerMeaning || "表情包"}]` : e.message.image ? `[IMG: ${e.message.image}]` : e.message.simulatedImageContent ? `[IMAGE: ${e.message.simulatedImageContent} | ${e.message.simulatedImageLocation} | ${e.message.simulatedImageDate}]` : e.message.locationData ? `[LOCATION: ${e.message.locationData.name} | ${e.message.locationData.address} | ${e.message.locationData.distance}]` : e.message.transferData ? `[TRANSFER: ${e.message.transferData.amount} | ${e.message.transferData.note}]` : e.message.giftData ? `[GIFT: ${e.message.giftData.name} | ${e.message.giftData.note}]` : e.message.type === "combined_history" && e.message.historyData ? `[FORWARD: ${e.message.historyData.title} | ${e.message.historyData.messages.map(e => {
                  const t = e.senderName || (e.sender === "me" ? i("msgMe") : i("msgUnknown"));
                  let n = e.text;
                  if (e.isVoice || e.voiceText) {
                    n = `[VOICE: ${e.voiceText}]`;
                  } else if (e.sticker) {
                    n = e.text || "[貼圖]";
                  } else if (e.locationData) {
                    n = `[LOCATION: ${e.locationData.name} | ${e.locationData.address} | ${e.locationData.distance}]`;
                  } else if (e.transferData) {
                    n = `[TRANSFER: ${e.transferData.amount} | ${e.transferData.note}]`;
                  } else if (e.giftData) {
                    n = `[GIFT: ${e.giftData.name} | ${e.giftData.note}]`;
                  } else if (e.simulatedImageContent) {
                    n = `[IMAGE: ${e.simulatedImageContent} | ${e.simulatedImageLocation} | ${e.simulatedImageDate}]`;
                  } else if (e.image) {
                    n = `[IMG: ${e.image}]`;
                  }
                  return `${t}: ${n}`;
                }).join(" | ")}]` : r || e.message.text;
                const s = e.message.replyTo && !/^\[(?:VOICE|IMAGE|IMG|STICKER|LOCATION|TRANSFER|GIFT|FORWARD|HTML)\b/i.test(o) ? ((e, t) => {
                  if (!e) {
                    return t || "";
                  }
                  const n = e.sender === "me" ? "User" : "Char";
                  let r = e.text || e.voiceText || pe(e);
                  if (e.image || e.simulatedImageContent || e.isSimulated) {
                    r = "图片";
                  } else if (e.sticker) {
                    r = e.text || "[貼圖]";
                  }
                  r = String(r).replace(/\]/g, "】").replace(/\|/g, "｜");
                  return `[REPLY_TO: ${n}|${r}] ${t || ""}`.trimEnd();
                })(e.message.replyTo, o) : o;
                const l = A(s, e.message.type);
                a({
                  id: e.message.id,
                  text: l.content,
                  contentType: l.contentType,
                  sender: e.message.sender,
                  timestamp: e.message.timestamp
                });
                t(null);
              },
              children: [p.jsx(g.Edit, {}), " ", i("ctxMenuEdit")]
            }), (e.message.sender === "me" || M && e.message.sender === "them") && p.jsxs("div", {
              className: "ig-menu-item",
              onClick: () => {
                T(e.message.id);
                t(null);
              },
              children: [p.jsx(g.Undo, {}), " ", i("ctxMenuRecall")]
            }), p.jsxs("div", {
              className: "ig-menu-item",
              onClick: () => {
                c(true);
                l(new Set([o(e.message)]));
                t(null);
              },
              children: [p.jsx(g.MultiSelect, {}), " ", i("ctxMenuMultiSelect")]
            }), W && p.jsx("div", {
              className: "ig-menu-item",
              onClick: () => W(e.message.id),
              children: e.message.hiddenByUser ? p.jsxs(p.Fragment, {
                children: [p.jsx(g.Eye, {}), " ", i("ctxMenuUnhide")]
              }) : p.jsxs(p.Fragment, {
                children: [p.jsx(g.EyeOff, {}), " ", i("ctxMenuHide")]
              })
            }), p.jsxs("div", {
              className: "ig-menu-item danger",
              onClick: () => h(e.message.id),
              children: [p.jsx(g.Delete, {}), " ", i("ctxMenuDeleteAll")]
            })]
          })
        })]
      })]
    }), r && p.jsx("div", {
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 6000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        boxSizing: "border-box"
      },
      children: p.jsxs("div", {
        style: {
          background: "#fff",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "min(400px, 90vw)",
          padding: "20px",
          animation: "scaleIn 0.2s",
          boxSizing: "border-box"
        },
        children: [p.jsx("div", {
          style: {
            fontSize: "17px",
            fontWeight: "600",
            marginBottom: "12px",
            textAlign: "center"
          },
          children: i("editMsgTitle")
        }), p.jsx("div", {
          style: {
            display: "flex",
            gap: "6px",
            marginBottom: "12px",
            overflowX: "auto",
            paddingBottom: "4px",
            flexWrap: "wrap",
            WebkitOverflowScrolling: "touch"
          },
          children: [{
            key: "text",
            label: "文字"
          }, {
            key: "reply",
            label: "引用"
          }, {
            key: "state",
            label: "旁白"
          }, {
            key: "thought",
            label: "內心"
          }, {
            key: "voice",
            label: "語音"
          }, {
            key: "image",
            label: "圖片描述"
          }, {
            key: "img",
            label: "圖片URL"
          }, {
            key: "sticker",
            label: "貼圖"
          }, {
            key: "location",
            label: "位置"
          }, {
            key: "transfer",
            label: "轉帳"
          }, {
            key: "gift",
            label: "禮物"
          }, {
            key: "html",
            label: "HTML"
          }].map(e => {
            const t = (r.contentType || "text") === e.key;
            return p.jsx("button", {
              onClick: () => {
                if (e.key === "reply" && !/^\[REPLY_TO:/i.test(String(r.text || "").trim())) {
                  const t = String(r.text || "").trim();
                  a({
                    ...r,
                    contentType: e.key,
                    text: `[REPLY_TO: User|被引用的文字] ${t}`
                  });
                  return;
                }
                a({
                  ...r,
                  contentType: e.key
                });
              },
              style: {
                padding: "4px 10px",
                borderRadius: "14px",
                border: t ? "1.5px solid #0095f6" : "1px solid #dbdbdb",
                background: t ? "rgba(0, 149, 246, 0.08)" : "#fff",
                color: t ? "#0095f6" : "#666",
                fontSize: "12px",
                fontWeight: t ? "600" : "400",
                cursor: "pointer",
                whiteSpace: "nowrap",
                flexShrink: 0,
                transition: "all 0.15s ease"
              },
              children: e.label
            }, e.key);
          })
        }), p.jsx("textarea", {
          ref: E,
          value: r.text,
          onChange: e => a({
            ...r,
            text: e.target.value
          }),
          placeholder: (e => {
            switch (e) {
              case "image":
                return "描述 | 地點 | 日期";
              case "img":
                return "圖片URL";
              case "voice":
                return "語音文字內容";
              case "location":
                return "名稱 | 地址 | 距離";
              case "transfer":
                return "金額 | 備註";
              case "gift":
                return "名稱 | 備註";
              case "reply":
                return "[REPLY_TO: User|被引用的文字] 回覆內容";
              case "sticker":
                return "貼圖描述";
              case "forward":
                return "標題 | 發送者: 內容 | ...";
              default:
                return "";
            }
          })(r.contentType || "text"),
          style: {
            width: "100%",
            minHeight: "100px",
            border: "1px solid #dbdbdb",
            borderRadius: "12px",
            padding: "12px",
            fontSize: "15px",
            color: "#000000",
            background: "#ffffff",
            marginBottom: "12px",
            resize: "none",
            outline: "none"
          }
        }), (r.sender === "them" || r.sender === "me") && f && (!r.contentType || r.contentType === "text") && p.jsxs("button", {
          onClick: () => {
            const e = E.current;
            const t = e ? e.selectionStart : r.text.length;
            const n = r.text.substring(0, t).trim();
            const a = r.text.substring(t).trim();
            if (n || a) {
              f(r, n || r.text, a || "");
            }
          },
          style: {
            width: "100%",
            padding: "10px",
            borderRadius: "12px",
            border: "1px dashed #0095f6",
            background: "rgba(0, 149, 246, 0.05)",
            color: "#0095f6",
            fontWeight: "600",
            fontSize: "14px",
            cursor: "pointer",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px"
          },
          children: [p.jsx(g.Plus, {
            size: 16
          }), " ", i("editMsgInsertBubble")]
        }), p.jsxs("div", {
          style: {
            display: "flex",
            gap: "12px"
          },
          children: [p.jsx("button", {
            onClick: () => a(null),
            style: {
              flex: 1,
              padding: "12px",
              borderRadius: "12px",
              border: "none",
              background: "#efefef",
              color: "#000",
              fontWeight: "600",
              cursor: "pointer"
            },
            children: i("chatActionCancel")
          }), p.jsx("button", {
            onClick: () => {
              const e = r.contentType || "text";
              let t = r.text;
              if (e !== "text") {
                t = ((e, t) => {
                  switch (e) {
                    case "voice":
                      return `[VOICE: ${t}]`;
                    case "image":
                      return `[IMAGE: ${t}]`;
                    case "img":
                      return `[IMG: ${t}]`;
                    case "sticker":
                      return `[STICKER: ${t}]`;
                    case "location":
                      return `[LOCATION: ${t}]`;
                    case "transfer":
                      return `[TRANSFER: ${t}]`;
                    case "gift":
                      return `[GIFT: ${t}]`;
                    case "html":
                      return `[HTML]${t}`;
                    case "state":
                      return `[STATE]${t}`;
                    case "thought":
                      return JSON.stringify({
                        t: "thought",
                        c: t
                      });
                    case "forward":
                      return `[FORWARD: ${t}]`;
                    case "reply":
                      {
                        const e = String(t || "").trim();
                        if (/^\[REPLY_TO:/i.test(e)) {
                          return e;
                        } else {
                          return `[REPLY_TO: User|被引用的文字] ${e}`;
                        }
                      }
                    default:
                      return t;
                  }
                })(e, t);
              }
              let n = r.type;
              if (e === "state") {
                n = "state";
              } else if (e === "thought") {
                n = "thought";
              }
              const o = {
                ...r,
                text: t,
                type: n
              };
              a(o);
              m(o);
            },
            style: {
              flex: 1,
              padding: "12px",
              borderRadius: "12px",
              border: "none",
              background: "#0095f6",
              color: "#fff",
              fontWeight: "600",
              cursor: "pointer"
            },
            children: i("btnConfirm")
          })]
        })]
      })
    })]
  });
  var B;
};
const ge = ({
  categories: e,
  currentCategory: t,
  onSelect: r,
  onClose: a,
  t: o
}) => p.jsxs("div", {
  style: {
    position: "absolute",
    inset: 0,
    zIndex: 2,
    background: "rgba(255,255,255,0.97)",
    borderRadius: "16px 16px 0 0",
    display: "flex",
    flexDirection: "column"
  },
  children: [p.jsxs("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 16px 10px",
      borderBottom: "1px solid rgba(0,0,0,0.06)"
    },
    children: [p.jsx("span", {
      style: {
        fontWeight: "700",
        fontSize: "15px"
      },
      children: o("quickReplyCategorySelect")
    }), p.jsx("div", {
      onClick: a,
      style: {
        cursor: "pointer",
        color: "#8e8e8e"
      },
      children: p.jsx(g.X, {
        size: 18
      })
    })]
  }), p.jsxs("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "12px 16px",
      WebkitOverflowScrolling: "touch"
    },
    children: [p.jsx("div", {
      onClick: () => r(""),
      style: {
        padding: "10px 14px",
        borderRadius: "10px",
        marginBottom: "6px",
        background: t ? "rgba(0,0,0,0.03)" : "rgba(0,149,246,0.1)",
        border: t ? "1px solid transparent" : "1px solid rgba(0,149,246,0.3)",
        cursor: "pointer",
        fontSize: "14px",
        color: t ? "#262626" : "#0095f6",
        fontWeight: t ? "400" : "600"
      },
      children: o("quickReplyCategoryNone")
    }), e.map(e => p.jsx("div", {
      onClick: () => r(e),
      style: {
        padding: "10px 14px",
        borderRadius: "10px",
        marginBottom: "6px",
        background: t === e ? "rgba(0,149,246,0.1)" : "rgba(0,0,0,0.03)",
        border: t === e ? "1px solid rgba(0,149,246,0.3)" : "1px solid transparent",
        cursor: "pointer",
        fontSize: "14px",
        color: t === e ? "#0095f6" : "#262626",
        fontWeight: t === e ? "600" : "400"
      },
      children: e
    }, e)), p.jsxs("div", {
      onClick: async () => {
        const e = await n(o("quickReplyCategoryNew"), "");
        if (e == null ? undefined : e.trim()) {
          r(e.trim());
        }
      },
      style: {
        padding: "10px 14px",
        borderRadius: "10px",
        marginBottom: "6px",
        background: "rgba(0,0,0,0.03)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "14px",
        color: "#0095f6"
      },
      children: [p.jsx(g.Plus, {
        size: 16
      }), o("quickReplyCategoryAddNew")]
    })]
  })]
});
const he = ({
  x: e,
  y: t,
  onEdit: n,
  onMoveCategory: r,
  onDelete: a,
  onClose: o,
  t: i
}) => p.jsxs(p.Fragment, {
  children: [p.jsx("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 3
    },
    onClick: o
  }), p.jsx("div", {
    style: {
      position: "fixed",
      left: e,
      top: t,
      zIndex: 4,
      background: "rgba(255,255,255,0.96)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderRadius: "12px",
      boxShadow: "0 6px 24px rgba(0,0,0,0.18)",
      padding: "4px",
      minWidth: "140px",
      animation: "modalSlideUp 0.15s ease-out"
    },
    children: [{
      label: i("quickReplyCtxEdit"),
      action: n,
      color: "#262626"
    }, {
      label: i("quickReplyCtxMoveCategory"),
      action: r,
      color: "#262626"
    }, {
      label: i("quickReplyCtxDelete"),
      action: a,
      color: "#ff3b30"
    }].map(({
      label: e,
      action: t,
      color: n
    }) => p.jsx("div", {
      onClick: () => {
        t();
        o();
      },
      className: "more-options-item-row",
      style: {
        padding: "10px 14px",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "500",
        cursor: "pointer",
        color: n
      },
      children: e
    }, e))
  })]
});
const me = u.memo(({
  show: e,
  onClose: t,
  quickReplies: r,
  categories: o,
  onSend: i,
  onAdd: s,
  onUpdate: l,
  onDelete: d,
  t: u,
  isCustomThemeActive: h
}) => {
  const [m, f] = c.useState("");
  const [b, v] = c.useState(false);
  const [y, k] = c.useState(new Set());
  const [w, j] = c.useState(null);
  const [S, C] = c.useState(null);
  const [z, I] = c.useState(null);
  const R = c.useRef(null);
  const T = c.useRef(false);
  const W = c.useMemo(() => m ? r.filter(e => e.category === m) : r, [r, m]);
  const M = c.useCallback((e, t) => {
    T.current = false;
    const n = t.touches ? t.touches[0].clientX : t.clientX;
    const r = t.touches ? t.touches[0].clientY : t.clientY;
    R.current = setTimeout(() => {
      T.current = true;
      const t = Math.min(n, window.innerWidth - 160);
      const a = Math.min(r, window.innerHeight - 160);
      I({
        item: e,
        x: t,
        y: a
      });
    }, 500);
  }, []);
  const E = c.useCallback(() => {
    if (R.current) {
      clearTimeout(R.current);
      R.current = null;
    }
  }, []);
  const F = c.useCallback(e => {
    k(t => {
      const n = new Set(t);
      if (n.has(e)) {
        n.delete(e);
      } else {
        n.add(e);
      }
      return n;
    });
  }, []);
  const D = c.useCallback(() => {
    v(false);
    k(new Set());
  }, []);
  const A = c.useCallback(async () => {
    if (y.size !== 0 && (await a(u("quickReplyBatchDeleteConfirm").replace("{n}", y.size)))) {
      for (const e of y) {
        await d(e);
      }
      k(new Set());
    }
  }, [y, d, u]);
  const B = c.useCallback(() => {
    if (y.size !== 0) {
      j({
        type: "batch",
        currentCategory: ""
      });
    }
  }, [y.size]);
  const N = c.useCallback(async () => {
    const e = await n(u("quickReplyAddPrompt"), "");
    if (e == null ? undefined : e.trim()) {
      if (o.length > 0) {
        C(e.trim());
        j({
          type: "add",
          currentCategory: m || ""
        });
      } else {
        const t = await n(u("quickReplyCategoryNew"), "");
        await s(e, t || "");
      }
    }
  }, [s, u, m, o.length]);
  const L = c.useCallback(async e => {
    if ((w == null ? undefined : w.type) === "add" && S) {
      await s(S, e);
      C(null);
    } else if ((w == null ? undefined : w.type) === "edit" && w.item) {
      await l(w.item._id, {
        category: e
      });
    } else if ((w == null ? undefined : w.type) === "batch") {
      for (const t of y) {
        await l(t, {
          category: e
        });
      }
      k(new Set());
    }
    j(null);
  }, [w, S, s, l, y]);
  const O = c.useCallback(async e => {
    const t = await n(u("quickReplyEditPrompt"), e.text);
    if (t !== null && t.trim()) {
      await l(e._id, {
        text: t.trim()
      });
    }
  }, [l, u]);
  const $ = c.useCallback(e => {
    j({
      type: "edit",
      item: e,
      currentCategory: e.category || ""
    });
  }, []);
  const P = c.useCallback(async e => {
    if (await a(u("quickReplyDeleteConfirm"))) {
      await d(e._id);
    }
  }, [d, u]);
  const H = c.useCallback(e => {
    i(e.text);
    t();
  }, [i, t]);
  if (e) {
    return x.createPortal(p.jsxs("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end"
      },
      onClick: e => {
        if (e.target === e.currentTarget) {
          t();
        }
      },
      children: [p.jsx("div", {
        style: {
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.35)"
        },
        onClick: t
      }), p.jsxs("div", {
        style: {
          position: "relative",
          background: h ? "var(--panel-bg, #ffffff)" : "#ffffff",
          borderRadius: "16px 16px 0 0",
          maxHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          animation: "modalSlideUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.1)"
        },
        children: [w && p.jsx(ge, {
          categories: o,
          currentCategory: w.currentCategory,
          onSelect: L,
          onClose: () => {
            j(null);
            C(null);
          },
          t: u
        }), p.jsx("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 16px 10px",
            borderBottom: "1px solid rgba(0,0,0,0.06)"
          },
          children: b ? p.jsxs(p.Fragment, {
            children: [p.jsx("span", {
              style: {
                fontWeight: "600",
                fontSize: "14px",
                color: "#8e8e8e"
              },
              children: u("quickReplySelected").replace("{n}", y.size)
            }), p.jsx("div", {
              onClick: D,
              style: {
                cursor: "pointer",
                color: "#0095f6",
                fontSize: "13px",
                fontWeight: "600"
              },
              children: u("quickReplyDone")
            })]
          }) : p.jsxs(p.Fragment, {
            children: [p.jsx("span", {
              style: {
                fontWeight: "700",
                fontSize: "16px"
              },
              children: u("quickReplyTitle")
            }), p.jsxs("div", {
              style: {
                display: "flex",
                gap: "12px",
                alignItems: "center"
              },
              children: [r.length > 0 && p.jsx("div", {
                onClick: () => v(true),
                style: {
                  cursor: "pointer",
                  color: "#8e8e8e",
                  fontSize: "13px",
                  fontWeight: "600"
                },
                children: u("quickReplyManage")
              }), p.jsx("div", {
                onClick: N,
                style: {
                  cursor: "pointer",
                  color: "#0095f6"
                },
                children: p.jsx(g.Plus, {
                  size: 20
                })
              }), p.jsx("div", {
                onClick: t,
                style: {
                  cursor: "pointer",
                  color: "#8e8e8e"
                },
                children: p.jsx(g.X, {
                  size: 20
                })
              })]
            })]
          })
        }), o.length > 0 && p.jsxs("div", {
          style: {
            display: "flex",
            overflowX: "auto",
            padding: "8px 12px",
            gap: "8px",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
            borderBottom: "1px solid rgba(0,0,0,0.04)"
          },
          children: [p.jsx("div", {
            onClick: () => f(""),
            style: {
              flexShrink: 0,
              padding: "4px 12px",
              borderRadius: "14px",
              fontSize: "13px",
              fontWeight: "600",
              cursor: "pointer",
              background: m ? "rgba(0,0,0,0.06)" : "#0095f6",
              color: m ? "#262626" : "#fff"
            },
            children: u("quickReplyCategoryAll")
          }), o.map(e => p.jsx("div", {
            onClick: () => f(e),
            style: {
              flexShrink: 0,
              padding: "4px 12px",
              borderRadius: "14px",
              fontSize: "13px",
              fontWeight: "600",
              cursor: "pointer",
              background: m === e ? "#0095f6" : "rgba(0,0,0,0.06)",
              color: m === e ? "#fff" : "#262626"
            },
            children: e
          }, e))]
        }), p.jsx("div", {
          style: {
            flex: 1,
            overflowY: "auto",
            padding: b ? "8px 12px 80px" : "8px 12px 20px",
            WebkitOverflowScrolling: "touch"
          },
          children: W.length === 0 ? p.jsx("div", {
            style: {
              textAlign: "center",
              padding: "32px 16px",
              color: "#8e8e8e",
              fontSize: "14px",
              whiteSpace: "pre-wrap"
            },
            children: u("quickReplyEmpty")
          }) : W.map(e => {
            const t = y.has(e._id);
            return p.jsxs("div", {
              onClick: () => {
                if (T.current) {
                  T.current = false;
                } else if (b) {
                  F(e._id);
                } else {
                  H(e);
                }
              },
              onContextMenu: t => {
                t.preventDefault();
                if (!b) {
                  E();
                  T.current = true;
                  I({
                    item: e,
                    x: Math.min(t.clientX, window.innerWidth - 160),
                    y: Math.min(t.clientY, window.innerHeight - 160)
                  });
                }
              },
              onTouchStart: t => {
                if (!b) {
                  M(e, t);
                }
              },
              onTouchMove: E,
              onTouchEnd: E,
              onMouseDown: t => {
                if (!b) {
                  M(e, t);
                }
              },
              onMouseUp: E,
              onMouseLeave: E,
              style: {
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 12px",
                marginBottom: "4px",
                borderRadius: "12px",
                background: t ? "rgba(0,149,246,0.08)" : "rgba(0,0,0,0.03)",
                border: t ? "1px solid rgba(0,149,246,0.25)" : "1px solid transparent",
                cursor: "pointer",
                transition: "background 0.15s",
                userSelect: "none",
                WebkitUserSelect: "none"
              },
              children: [b && p.jsx("div", {
                style: {
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  border: t ? "2px solid #0095f6" : "2px solid #ccc",
                  background: t ? "#0095f6" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: t && p.jsx("svg", {
                  width: "12",
                  height: "12",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: "3",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: p.jsx("polyline", {
                    points: "20 6 9 17 4 12"
                  })
                })
              }), p.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: 0
                },
                children: [p.jsx("div", {
                  style: {
                    fontSize: "14px",
                    lineHeight: "1.4",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word"
                  },
                  children: e.text
                }), e.category && p.jsx("span", {
                  style: {
                    fontSize: "11px",
                    color: "#8e8e8e",
                    marginTop: "2px",
                    display: "inline-block"
                  },
                  children: e.category
                })]
              }), !b && p.jsx("div", {
                style: {
                  flexShrink: 0,
                  color: "#0095f6"
                },
                children: p.jsx(g.Send, {
                  size: 16
                })
              })]
            }, e._id);
          })
        }), b && p.jsxs("div", {
          style: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            gap: "10px",
            padding: "12px 16px",
            paddingBottom: "max(12px, env(safe-area-inset-bottom))",
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderTop: "1px solid rgba(0,0,0,0.06)"
          },
          children: [p.jsx("div", {
            onClick: B,
            style: {
              flex: 1,
              textAlign: "center",
              padding: "10px",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              background: y.size > 0 ? "#0095f6" : "rgba(0,0,0,0.06)",
              color: y.size > 0 ? "#fff" : "#8e8e8e",
              pointerEvents: y.size > 0 ? "auto" : "none"
            },
            children: u("quickReplyBatchMove")
          }), p.jsx("div", {
            onClick: A,
            style: {
              flex: 1,
              textAlign: "center",
              padding: "10px",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              background: y.size > 0 ? "#ff3b30" : "rgba(0,0,0,0.06)",
              color: y.size > 0 ? "#fff" : "#8e8e8e",
              pointerEvents: y.size > 0 ? "auto" : "none"
            },
            children: u("quickReplyBatchDelete")
          })]
        })]
      }), z && p.jsx(he, {
        x: z.x,
        y: z.y,
        onEdit: () => O(z.item),
        onMoveCategory: () => $(z.item),
        onDelete: () => P(z.item),
        onClose: () => I(null),
        t: u
      })]
    }), document.body);
  } else {
    return null;
  }
});
const fe = c.memo(({
  viewingImage: e,
  viewingImageMsg: t,
  setViewingImage: n,
  setViewingImageMsg: r,
  isRegeneratingImage: s,
  onRegenerate: l,
  onOpenEditReroll: d,
  onOpenImageEdit: c,
  onDeleteMessage: u,
  onSetAsRefImage: x,
  t: h
}) => e ? p.jsxs("div", {
  style: {
    position: "fixed",
    inset: 0,
    zIndex: 10000,
    backgroundColor: "rgba(0,0,0,0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "zoom-out"
  },
  onClick: () => {
    n(null);
    r(null);
  },
  children: [p.jsx("img", {
    decoding: "async",
    src: e,
    style: {
      maxWidth: "95vw",
      maxHeight: "95vh",
      objectFit: "contain",
      borderRadius: "4px",
      boxShadow: "0 0 20px rgba(0,0,0,0.5)"
    },
    onClick: e => e.stopPropagation()
  }), s && p.jsxs("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 5,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "14px",
      background: "rgba(0,0,0,0.55)",
      cursor: "wait"
    },
    onClick: e => e.stopPropagation(),
    children: [p.jsx("div", {
      style: {
        width: "46px",
        height: "46px",
        border: "4px solid rgba(255,255,255,0.25)",
        borderTopColor: "#fff",
        borderRadius: "50%",
        animation: "spin 0.9s linear infinite"
      }
    }), p.jsx("div", {
      style: {
        color: "#fff",
        fontSize: "15px",
        fontWeight: 600,
        letterSpacing: "1px"
      },
      children: h("msgImageGenerating", "生成中…")
    })]
  }), p.jsxs("div", {
    style: {
      position: "absolute",
      bottom: "40px",
      left: "20px",
      right: "20px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-end",
      gap: "8px",
      alignItems: "center"
    },
    onClick: e => e.stopPropagation(),
    children: [t && (t.imageGenPrompt || t.imageSummary || t.imageGenMeta) && p.jsx("div", {
      style: {
        color: "#fff",
        cursor: s ? "wait" : "pointer",
        background: s ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.2)",
        borderRadius: "50%",
        width: "38px",
        height: "38px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(5px)",
        ...(s && {
          animation: "spin 1s linear infinite"
        })
      },
      onClick: e => {
        e.stopPropagation();
        if (!s) {
          l();
        }
      },
      title: "重新生圖（同提示詞）",
      children: p.jsx(g.Refresh, {
        size: 20,
        color: "#fff"
      })
    }), t && (t.imageGenPrompt || t.imageSummary || t.imageGenMeta) && p.jsx("div", {
      style: {
        color: "#fff",
        cursor: s ? "wait" : "pointer",
        background: "rgba(255,255,255,0.2)",
        borderRadius: "50%",
        width: "38px",
        height: "38px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(5px)",
        fontSize: "20px",
        fontWeight: 600
      },
      onClick: e => {
        e.stopPropagation();
        if (!s) {
          d();
        }
      },
      title: "編輯提示詞並重新生圖",
      children: "✎"
    }), t && p.jsx("div", {
      style: {
        color: "#fff",
        cursor: "pointer",
        background: "rgba(255,255,255,0.2)",
        borderRadius: "50%",
        width: "38px",
        height: "38px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(5px)"
      },
      onClick: e => {
        e.stopPropagation();
        c(t, "real");
      },
      children: p.jsx(g.Edit, {
        size: 20,
        color: "#fff"
      })
    }), p.jsx("div", {
      style: {
        color: "#fff",
        cursor: "pointer",
        background: "rgba(255,255,255,0.2)",
        borderRadius: "50%",
        width: "38px",
        height: "38px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(5px)"
      },
      onClick: t => {
        t.stopPropagation();
        o(e, `image_${Date.now()}.png`).then(t => {
          if (!(t == null ? undefined : t.success)) {
            window.open(e, "_blank");
          }
        }).catch(() => {
          window.open(e, "_blank");
        });
      },
      children: p.jsx(g.Download, {
        size: 22,
        color: "#fff"
      })
    }), t && p.jsx("div", {
      style: {
        color: "#fff",
        cursor: "pointer",
        background: "rgba(220, 38, 38, 0.65)",
        borderRadius: "50%",
        width: "38px",
        height: "38px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(5px)"
      },
      title: h("chatActionDelete", "刪除"),
      onClick: async e => {
        e.stopPropagation();
        if (!(await a(h("msgConfirmDeleteCgImage", "確定刪除這張圖片？刪除後無法恢復。")))) {
          return;
        }
        const o = t;
        const s = o == null ? undefined : o.imageRef;
        n(null);
        r(null);
        try {
          await u(o.id);
        } catch (l) {
          console.warn("[ChatDetailScreen] 刪除圖片訊息失敗", l);
        }
        if (s != null) {
          i.delete(s).catch(e => console.warn("[ChatDetailScreen] 清理 imageStore 失敗", e));
        }
      },
      children: p.jsx(g.Trash2, {
        size: 22,
        color: "#fff"
      })
    }), p.jsx("div", {
      style: {
        color: "#fff",
        cursor: "pointer",
        background: "rgba(255,255,255,0.2)",
        borderRadius: "50%",
        width: "38px",
        height: "38px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(5px)"
      },
      onClick: () => {
        n(null);
        r(null);
      },
      children: p.jsx(g.Close, {
        size: 24,
        color: "#fff"
      })
    })]
  })]
}) : null);
const be = c.memo(({
  viewingSimImage: e,
  setViewingSimImage: t,
  t: n,
  nickname: r,
  activeChatChar: a,
  isRegeneratingImage: o,
  onRegenerate: i,
  onOpenImageEdit: s
}) => e ? p.jsxs("div", {
  style: {
    position: "fixed",
    inset: 0,
    zIndex: 10000,
    backgroundColor: "rgba(0,0,0,0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "zoom-out"
  },
  onClick: () => t(null),
  children: [p.jsxs("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "min(85vw, 380px)",
      background: "#f5f0e8",
      borderRadius: "16px",
      padding: "28px 24px",
      position: "relative",
      overflow: "hidden",
      cursor: "default"
    },
    children: [p.jsx("div", {
      style: {
        position: "absolute",
        inset: 0,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.06'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")",
        pointerEvents: "none"
      }
    }), p.jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "6px",
        marginBottom: "16px"
      },
      children: [p.jsxs("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#666",
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [p.jsx("path", {
          d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
        }), p.jsx("circle", {
          cx: "12",
          cy: "10",
          r: "3"
        })]
      }), p.jsx("span", {
        style: {
          fontSize: "11px",
          fontWeight: "800",
          color: "#666",
          textTransform: "uppercase",
          letterSpacing: "1px"
        },
        children: e.simulatedImageLocation || "LOCATION"
      })]
    }), p.jsxs("div", {
      style: {
        position: "relative",
        zIndex: 10,
        width: "100%"
      },
      children: [p.jsx("div", {
        style: {
          fontSize: "16px",
          fontWeight: "300",
          color: "#222",
          lineHeight: 1.6,
          fontFamily: "\"Georgia\", \"Times New Roman\", serif"
        },
        children: e.simulatedImageContent.split("\n").map((e, t) => p.jsx("span", {
          style: {
            display: "block"
          },
          children: e
        }, t))
      }), p.jsx("div", {
        style: {
          width: "40px",
          height: "2px",
          background: "#ccc",
          margin: "14px 0"
        }
      })]
    }), p.jsx("div", {
      style: {
        fontSize: "12px",
        fontWeight: "600",
        color: "#999",
        letterSpacing: "0.5px"
      },
      children: e.simulatedImageDate || ""
    }), p.jsx("div", {
      style: {
        fontSize: "11px",
        color: "#aaa",
        marginTop: "8px"
      },
      children: n("imgEditSentBy", {
        name: e.sender === "me" ? n("imgEditYou") : r || (a == null ? undefined : a.name) || n("imgEditOther")
      })
    })]
  }), o && p.jsxs("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 20,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "14px",
      background: "rgba(0,0,0,0.55)",
      cursor: "wait"
    },
    onClick: e => e.stopPropagation(),
    children: [p.jsx("div", {
      style: {
        width: "46px",
        height: "46px",
        border: "4px solid rgba(255,255,255,0.25)",
        borderTopColor: "#fff",
        borderRadius: "50%",
        animation: "spin 0.9s linear infinite"
      }
    }), p.jsx("div", {
      style: {
        color: "#fff",
        fontSize: "15px",
        fontWeight: 600,
        letterSpacing: "1px"
      },
      children: n("msgImageGenerating", "生成中…")
    })]
  }), p.jsxs("div", {
    style: {
      position: "absolute",
      bottom: "40px",
      right: "20px",
      display: "flex",
      gap: "12px",
      alignItems: "center"
    },
    onClick: e => e.stopPropagation(),
    children: [(e.imageGenMeta || e.imageGenPrompt) && p.jsx("div", {
      style: {
        color: "#fff",
        cursor: o ? "wait" : "pointer",
        background: o ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.2)",
        borderRadius: "50%",
        width: "44px",
        height: "44px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(5px)",
        ...(o && {
          animation: "spin 1s linear infinite"
        })
      },
      onClick: e => {
        e.stopPropagation();
        if (!o) {
          i();
        }
      },
      title: "重新生圖（同提示詞）",
      children: p.jsx(g.Refresh, {
        size: 20,
        color: "#fff"
      })
    }), p.jsx("div", {
      style: {
        color: "#fff",
        cursor: "pointer",
        background: "rgba(255,255,255,0.2)",
        borderRadius: "50%",
        width: "44px",
        height: "44px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(5px)"
      },
      onClick: () => s(e, "sim"),
      children: p.jsx(g.Edit, {
        size: 20,
        color: "#fff"
      })
    }), p.jsx("div", {
      style: {
        color: "#fff",
        cursor: "pointer",
        background: "rgba(255,255,255,0.2)",
        borderRadius: "50%",
        width: "44px",
        height: "44px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(5px)"
      },
      onClick: () => t(null),
      children: p.jsx(g.Close, {
        size: 24,
        color: "#fff"
      })
    })]
  })]
}) : null);
const ve = c.memo(({
  imageEditModal: e,
  setImageEditModal: t,
  imageEditPrompt: n,
  setImageEditPrompt: r,
  onSubmit: a,
  t: o,
  nickname: i,
  activeChatChar: s
}) => e ? x.createPortal(p.jsx("div", {
  style: {
    position: "fixed",
    inset: 0,
    zIndex: 10001,
    backgroundColor: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(6px)",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: "max(env(safe-area-inset-top), 40px)",
    boxSizing: "border-box"
  },
  onClick: () => t(null),
  children: p.jsxs("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "min(90vw, 360px)",
      background: "#fff",
      borderRadius: "16px",
      padding: "20px",
      boxShadow: "0 10px 40px rgba(0,0,0,0.3)"
    },
    children: [p.jsx("div", {
      style: {
        fontSize: "13px",
        color: "#888",
        marginBottom: "12px",
        padding: "10px 12px",
        background: "#f5f5f5",
        borderRadius: "10px",
        lineHeight: 1.5
      },
      children: e.type === "sim" ? p.jsxs(p.Fragment, {
        children: [p.jsx("div", {
          style: {
            fontWeight: "600",
            color: "#555",
            marginBottom: "4px"
          },
          children: o("imgEditOriginalContent")
        }), p.jsx("div", {
          children: e.msg.simulatedImageContent
        })]
      }) : p.jsxs(p.Fragment, {
        children: [p.jsx("div", {
          style: {
            fontWeight: "600",
            color: "#555"
          },
          children: o("imgEditSentImage", {
            name: e.msg.sender === "me" ? o("imgEditYou") : i || (s == null ? undefined : s.name) || o("imgEditOther")
          })
        }), e.msg.imageSummary && p.jsx("div", {
          style: {
            marginTop: "4px"
          },
          children: e.msg.imageSummary
        })]
      })
    }), p.jsx("div", {
      style: {
        fontSize: "14px",
        fontWeight: "600",
        color: "#333",
        marginBottom: "8px"
      },
      children: o("imgEditDescPrompt")
    }), p.jsx("textarea", {
      value: n,
      onChange: e => r(e.target.value),
      placeholder: o("imgEditPlaceholder"),
      style: {
        width: "100%",
        height: "80px",
        padding: "10px 12px",
        border: "1.5px solid #ddd",
        borderRadius: "10px",
        fontSize: "14px",
        resize: "none",
        outline: "none",
        fontFamily: "inherit",
        boxSizing: "border-box"
      },
      onFocus: e => {
        e.target.style.borderColor = "#007AFF";
      },
      onBlur: e => {
        e.target.style.borderColor = "#ddd";
      }
    }), p.jsxs("div", {
      style: {
        display: "flex",
        gap: "10px",
        marginTop: "14px"
      },
      children: [p.jsx("button", {
        onClick: () => t(null),
        style: {
          flex: 1,
          padding: "10px",
          border: "1.5px solid #ddd",
          borderRadius: "10px",
          background: "#fff",
          fontSize: "14px",
          cursor: "pointer",
          color: "#666"
        },
        children: o("chatActionCancel")
      }), p.jsx("button", {
        onClick: a,
        disabled: !n.trim(),
        style: {
          flex: 1,
          padding: "10px",
          border: "none",
          borderRadius: "10px",
          background: n.trim() ? "#007AFF" : "#ccc",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "600",
          cursor: n.trim() ? "pointer" : "default"
        },
        children: o("imgEditShareToChat")
      })]
    })]
  })
}), document.body) : null);
const ye = c.memo(({
  editRerollModal: e,
  setEditRerollModal: t,
  editRerollDesc: n,
  setEditRerollDesc: r,
  editRerollUseRaw: a,
  setEditRerollUseRaw: o,
  editRerollCtx: i,
  editRerollDryRun: s,
  isRegeneratingImage: l,
  onSubmit: d
}) => {
  const [u, g] = c.useState(() => typeof window != "undefined" ? window.innerHeight : 800);
  const h = c.useRef(null);
  c.useEffect(() => {
    if (!e) {
      return;
    }
    const t = typeof window != "undefined" ? window.visualViewport : null;
    const n = () => g(t ? t.height : window.innerHeight);
    n();
    if (t) {
      t.addEventListener("resize", n);
      t.addEventListener("scroll", n);
      return () => {
        t.removeEventListener("resize", n);
        t.removeEventListener("scroll", n);
      };
    } else {
      window.addEventListener("resize", n);
      return () => window.removeEventListener("resize", n);
    }
  }, [e]);
  if (!e) {
    return null;
  }
  const m = s;
  const f = Math.max(200, u - 24);
  return x.createPortal(p.jsx("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 2147483000,
      backgroundColor: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(6px)",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingTop: "max(env(safe-area-inset-top), 20px)",
      paddingLeft: "12px",
      paddingRight: "12px",
      paddingBottom: "12px",
      boxSizing: "border-box",
      overflow: "hidden"
    },
    onClick: () => t(null),
    children: p.jsxs("div", {
      ref: h,
      onClick: e => e.stopPropagation(),
      style: {
        width: "min(94vw, 540px)",
        maxHeight: `${f}px`,
        overflowY: "auto",
        WebkitOverflowScrolling: "touch",
        background: "#fff",
        borderRadius: "16px",
        padding: "20px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.3)"
      },
      children: [p.jsx("div", {
        style: {
          fontSize: "15px",
          fontWeight: 700,
          color: "#111",
          marginBottom: "4px"
        },
        children: "編輯提示詞並重新生圖"
      }), p.jsx("div", {
        style: {
          fontSize: "12px",
          color: "#888",
          marginBottom: "12px",
          lineHeight: 1.55
        },
        children: "修改後即時預覽下方「最終送 API」結果。預設會走完整 prompt 組裝（自動加上角色外觀 / 預設詞 / 世界書）；勾選「直接送原文」則完全照你寫的內容呼叫 API。"
      }), p.jsx("div", {
        style: {
          fontSize: "12px",
          fontWeight: 600,
          color: "#555",
          marginBottom: "6px"
        },
        children: "① 圖片描述（rawImgDesc）"
      }), p.jsx("textarea", {
        value: n,
        onChange: e => r(e.target.value),
        placeholder: "例如：[SUBJECT:PERSON_EMOTION] close-up, soft smile, golden hour...",
        style: {
          width: "100%",
          height: "140px",
          padding: "10px 12px",
          border: "1.5px solid #ddd",
          borderRadius: "10px",
          fontSize: "16px",
          lineHeight: 1.55,
          resize: "vertical",
          outline: "none",
          fontFamily: "inherit",
          boxSizing: "border-box"
        },
        onFocus: e => {
          e.target.style.borderColor = "#007AFF";
        },
        onBlur: e => {
          e.target.style.borderColor = "#ddd";
        }
      }), p.jsxs("label", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginTop: "10px",
          fontSize: "13px",
          color: "#444",
          cursor: "pointer",
          userSelect: "none"
        },
        children: [p.jsx("input", {
          type: "checkbox",
          checked: a,
          onChange: e => o(e.target.checked)
        }), "直接送原文（跳過 buildFinalPrompt，由你完全控制送 API 的內容）"]
      }), p.jsxs("div", {
        style: {
          marginTop: "14px",
          padding: "12px",
          background: "#f7f7f9",
          borderRadius: "10px",
          border: "1px solid #ececf0",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: "11.5px",
          lineHeight: 1.55,
          color: "#222",
          wordBreak: "break-word",
          whiteSpace: "pre-wrap"
        },
        children: [p.jsx("div", {
          style: {
            fontFamily: "inherit",
            fontWeight: 700,
            color: "#555",
            marginBottom: "8px",
            fontSize: "12px"
          },
          children: "② 實際 HTTP 請求（dryRun，未真的送出）"
        }), i ? n.trim() ? m ? m.error ? p.jsxs("div", {
          style: {
            color: "#c00"
          },
          children: ["error: ", m.error]
        }) : p.jsxs(p.Fragment, {
          children: [p.jsxs("div", {
            children: [p.jsx("span", {
              style: {
                color: "#0070d6",
                fontWeight: 700
              },
              children: m.method
            }), " ", p.jsx("span", {
              style: {
                color: "#444"
              },
              children: m.url
            }), p.jsxs("span", {
              style: {
                color: "#888"
              },
              children: ["  // api=", m.api]
            })]
          }), m.note && p.jsxs("div", {
            style: {
              marginTop: "4px",
              color: "#888"
            },
            children: ["# ", m.note]
          }), m.headers && Object.keys(m.headers).length > 0 && p.jsxs(p.Fragment, {
            children: [p.jsx("div", {
              style: {
                marginTop: "8px",
                color: "#888"
              },
              children: "# headers"
            }), p.jsx("div", {
              children: Object.entries(m.headers).map(([e, t]) => `${e}: ${t}`).join("\n")
            })]
          }), m.body !== null && m.body !== undefined && p.jsxs(p.Fragment, {
            children: [p.jsx("div", {
              style: {
                marginTop: "8px",
                color: "#888"
              },
              children: "# body"
            }), p.jsx("div", {
              children: JSON.stringify(m.body, null, 2)
            })]
          }), m.api === "pollinations" && m.directUrl && m.directUrl !== m.url && p.jsxs(p.Fragment, {
            children: [p.jsx("div", {
              style: {
                marginTop: "8px",
                color: "#888"
              },
              children: "# underlying directUrl（被代理包裝）"
            }), p.jsx("div", {
              style: {
                color: "#666"
              },
              children: m.directUrl
            })]
          })]
        }) : p.jsx("div", {
          style: {
            color: "#999"
          },
          children: "計算中…"
        }) : p.jsx("div", {
          style: {
            color: "#999"
          },
          children: "(輸入描述後顯示請求預覽)"
        }) : p.jsx("div", {
          style: {
            color: "#999"
          },
          children: "載入中…"
        })]
      }), p.jsxs("div", {
        style: {
          display: "flex",
          gap: "10px",
          marginTop: "14px"
        },
        children: [p.jsx("button", {
          onClick: () => t(null),
          style: {
            flex: 1,
            padding: "10px",
            border: "1.5px solid #ddd",
            borderRadius: "10px",
            background: "#fff",
            fontSize: "14px",
            cursor: "pointer",
            color: "#666"
          },
          children: "取消"
        }), p.jsx("button", {
          onClick: d,
          disabled: !n.trim() || l,
          style: {
            flex: 1,
            padding: "10px",
            border: "none",
            borderRadius: "10px",
            background: n.trim() && !l ? "#007AFF" : "#ccc",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 600,
            cursor: n.trim() && !l ? "pointer" : "default"
          },
          children: "重新生圖"
        })]
      })]
    })
  }), document.body);
});
const ke = () => p.jsxs("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [p.jsx("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), p.jsx("polyline", {
    points: "17 8 12 3 7 8"
  }), p.jsx("line", {
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "15"
  })]
});
const we = () => p.jsxs("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [p.jsx("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), p.jsx("polyline", {
    points: "7 10 12 15 17 10"
  }), p.jsx("line", {
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "3"
  })]
});
const je = () => p.jsx("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: p.jsx("polyline", {
    points: "20 6 9 17 4 12"
  })
});
const Se = () => p.jsxs("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [p.jsx("polyline", {
    points: "3 6 5 6 21 6"
  }), p.jsx("path", {
    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
  })]
});
const Ce = () => p.jsx("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: p.jsx("polyline", {
    points: "15 18 9 12 15 6"
  })
});
const ze = () => p.jsxs("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [p.jsx("path", {
    d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
  }), p.jsx("polyline", {
    points: "17 21 17 13 7 13 7 21"
  }), p.jsx("polyline", {
    points: "7 3 7 8 15 8"
  })]
});
const Ie = () => p.jsxs("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [p.jsx("path", {
    d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
  }), p.jsx("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })]
});
const Re = () => p.jsxs("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [p.jsx("path", {
    d: "M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
  }), p.jsx("path", {
    d: "m15 5 4 4"
  })]
});
const Te = () => p.jsx("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: p.jsx("path", {
    d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
  })
});
const We = () => p.jsxs("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [p.jsx("polyline", {
    points: "16 18 22 12 16 6"
  }), p.jsx("polyline", {
    points: "8 6 2 12 8 18"
  })]
});
const Me = ({
  css: e
}) => {
  const t = (e, t, n) => `<span class="msg-wa-meta"><span class="msg-wa-time">${e}</span>${t ? `<span class="msg-wa-checks ${n ? "read" : ""}"><svg width="16" height="11" viewBox="0 0 16 11" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 6L4.5 9.5L10.5 3.5"/><path d="M6 6L9.5 9.5L15.5 3.5"/></svg></span>` : ""}</span>`;
  const n = `\n<div id="chat-detail-screen" class="chat-detail-screen" style="background-image:var(--chat-bg-image,none);background-color:var(--chat-bg-color,#f5f5f7);">\n    <div class="chat-header-custom glass-header" style="background:var(--chat-header-bg,rgba(255,255,255,0.9));background-image:var(--chat-header-bg-image,none);backdrop-filter:blur(var(--chat-header-blur,30px)) saturate(180%);-webkit-backdrop-filter:blur(var(--chat-header-blur,30px)) saturate(180%);border-bottom:1px solid var(--chat-header-border,#efefef);">\n        <div class="chat-header-deco chat-header-deco-1" aria-hidden="true"></div>\n        <div class="chat-header-deco chat-header-deco-2" aria-hidden="true"></div>\n        <div class="chat-header-deco chat-header-deco-3" aria-hidden="true"></div>\n        <div class="chat-header-deco chat-header-deco-4" aria-hidden="true"></div>\n        <div class="chat-header-deco chat-header-deco-5" aria-hidden="true"></div>\n        <div class="chat-header-deco chat-header-deco-6" aria-hidden="true"></div>\n        <button class="header-btn-back">\n            <svg class="chat-header-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>\n            <div class="nuo-chat-header-unread-dot" aria-hidden="true"></div>\n            <div class="nuo-chat-header-unread-num" aria-hidden="true">3</div>\n        </button>\n        <div class="header-profile-section">\n            <div class="chat-header-avatar"></div>\n            <div>\n                <div class="chat-header-title">示例對話</div>\n                <div class="chat-header-subtitle">在線</div>\n            </div>\n        </div>\n        <div class="header-action-btn">\n            <svg class="chat-header-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72"/></svg>\n        </div>\n        <div class="header-action-btn">\n            <svg class="chat-header-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/><circle cx="5" cy="12" r="1.5"/></svg>\n        </div>\n    </div>\n    <div class="chat-messages-area chat-message-list-custom" id="chat-messages">\n        <div class="date-divider-custom">今天</div>\n        <div class="timestamp-custom">下午 2:30</div>\n        <div class="msg-them message-wrapper ai">\n            <div class="msg-avatar-custom msg-avatar-wrapper"></div>\n            <div class="msg-bubble-container bubble-them-custom">嗨！最近怎麼樣？${t("下午 2:30", false)}</div>\n        </div>\n        <div class="msg-me message-wrapper user">\n            <div class="msg-bubble-container bubble-me-custom">還不錯，謝謝關心 😊${t("下午 2:31", true, true)}</div>\n        </div>\n    </div>\n    <div class="input-area-custom" id="chat-input-area" style="background:var(--input-area-bg,#ffffff);background-image:var(--input-area-bg-image,none);backdrop-filter:blur(var(--input-area-blur,0px)) saturate(180%);-webkit-backdrop-filter:blur(var(--input-area-blur,0px)) saturate(180%);border-top:var(--input-area-border-top,1px solid #efefef);">\n        <div class="input-btn-plus">\n            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>\n        </div>\n        <input id="chat-message-input" class="input-box-custom" placeholder="訊息..." readonly />\n        <button class="send-btn-custom">\n            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>\n        </button>\n    </div>\n</div>\n`;
  const r = e || "";
  const a = `<!DOCTYPE html><html style="${c.useMemo(() => {
    if (!e) {
      return "";
    }
    const t = /:root\s*\{([^}]+)\}/g;
    const n = /(--[\w-]+)\s*:\s*([^;]+)/g;
    const r = [];
    let a;
    while ((a = t.exec(e)) !== null) {
      const e = a[1];
      let t;
      while ((t = n.exec(e)) !== null) {
        r.push(`${t[1].trim()}:${t[2].trim()}`);
      }
    }
    return r.join(";");
  }, [e])}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>\n:root {\n    --chat-bg-blur: 0px;\n    --chat-bg-overlay: rgba(0, 0, 0, 0);\n    --chat-header-bg: rgba(255, 255, 255, 0.9);\n    --chat-header-bg-image: none;\n    --chat-header-blur: 15px;\n    --chat-header-border: #efefef;\n    --chat-header-height: 56px;\n    --chat-header-title-color: #262626;\n    --chat-header-title-size: 16px;\n    --chat-header-title-weight: 700;\n    --chat-header-subtitle-color: #8e8e8e;\n    --chat-header-subtitle-size: 12px;\n    --chat-header-icon-color: #262626;\n    --chat-header-avatar-size: 32px;\n    --chat-header-avatar-border: none;\n    --chat-header-avatar-radius: 50%;\n    --chat-header-avatar-shadow: none;\n    --header-btn-gap: 18px;\n    --back-btn-icon: none;\n    --phone-btn-icon: none;\n    --video-btn-icon: none;\n    --info-btn-icon: none;\n    --quote-border-color: rgba(107, 114, 128, 0.45);\n    --quote-text-color: #6b7280;\n    --code-bg: rgba(107, 114, 128, 0.12);\n    --code-color: #6b7280;\n    --reply-block-bg: rgba(0, 0, 0, 0.06);\n    --reply-block-name-color: #000;\n    /* Detached reply bubble — 預設值由 inline style 的 var(fallback) 提供，\n       IG/非 IG 自動套用對應預設，請勿在此覆寫，\n       美化作者請在自訂 CSS 設 --reply-detached-* 來客製 */\n    --system-msg-bg: rgba(0, 0, 0, 0.05);\n    --system-msg-color: #999;\n    --reply-bar-accent: #0095f6;\n    --reply-bar-text-color: #8e8e8e;\n    --more-options-bg: rgba(255, 255, 255, 0.95);\n    --more-options-color: inherit;\n    --more-options-divider: rgba(0, 0, 0, 0.06);\n    --profile-card-name-color: #262626;\n    --profile-card-subtitle-color: #8e8e8e;\n    --profile-card-btn-bg: rgba(0, 0, 0, 0.05);\n    --profile-card-btn-color: #262626;\n    --input-caret-color: #0095f6;\n    --chat-messages-padding: 12px 16px;\n    --chat-messages-gap: 2px;\n    --chat-message-max-width: 80%;\n    --bubble-me-bg: #0095f6;\n    --bubble-me-bg-gradient: initial;\n    --bubble-me-color: #ffffff;\n    --bubble-me-font-size: 15px;\n    --bubble-me-line-height: 1.4;\n    --bubble-me-padding: 10px 14px;\n    --bubble-me-radius: 20px;\n    --bubble-me-radius-first: 20px 20px 4px 20px;\n    --bubble-me-radius-mid: 20px 4px 4px 20px;\n    --bubble-me-radius-last: 20px 4px 20px 20px;\n    --bubble-me-shadow: none;\n    --bubble-me-border: none;\n    --bubble-me-link-color: #ffffff;\n    --bubble-them-bg: #efefef;\n    --bubble-them-bg-gradient: initial;\n    --bubble-them-color: #262626;\n    --bubble-them-font-size: 15px;\n    --bubble-them-line-height: 1.4;\n    --bubble-them-padding: 10px 14px;\n    --bubble-them-radius: 20px;\n    --bubble-them-radius-first: 20px 20px 20px 4px;\n    --bubble-them-radius-mid: 4px 20px 20px 4px;\n    --bubble-them-radius-last: 4px 20px 20px 20px;\n    --bubble-them-shadow: none;\n    --bubble-them-border: 1px solid #efefef;\n    --bubble-them-link-color: #00376b;\n    --translation-btn-color: initial;\n    --translation-text-color: initial;\n    --translation-bg: rgba(0,0,0,0.05);\n    --voice-me-color: initial;\n    --voice-me-bar-active: initial;\n    --voice-me-bar-inactive: rgba(255,255,255,0.4);\n    --voice-them-color: initial;\n    --voice-them-bar-active: initial;\n    --voice-them-bar-inactive: #d0d0d0;\n    --voice-transcription-color: initial;\n    --voice-transcription-bg: initial;\n    --avatar-size: 40px;             /* 头像大小 */\n    --avatar-radius: 50%;            /* 50% = 正圆(QQ), 6px = 圆角方形(微信) */\n    --avatar-border: none;\n    --avatar-margin: 8px;\n    --avatar-shadow: none;\n    --timestamp-color: #8e8e8e;\n    --timestamp-size: 11px;\n    --timestamp-weight: 400;\n    --timestamp-margin: 4px 0 12px;\n    --date-divider-bg: transparent;\n    --date-divider-color: #8e8e8e;\n    --date-divider-size: 12px;\n    --date-divider-weight: 600;\n    --date-divider-padding: 16px 0;\n    --date-divider-radius: 0;\n    --input-area-bg: #ffffff;\n    --input-area-bg-image: none;\n    --input-area-blur: 0px;\n    --input-area-border-top: 1px solid #efefef;\n    --input-area-padding: 8px 12px;\n    --input-area-min-height: 44px;\n    --input-box-bg: #ffffff;\n    --input-box-color: #262626;\n    --input-box-placeholder: #8e8e8e;\n    --input-box-radius: 24px;\n    --input-box-padding: 8px 14px;\n    --input-box-font-size: 14px;\n    --input-box-border: 1px solid #dbdbdb;\n    --input-box-blur: none;\n    --input-box-shadow: none;\n    --send-btn-bg: transparent;\n    --send-btn-bg-hover: transparent;\n    --send-btn-color: #0095f6;\n    --send-btn-size: auto;\n    --send-btn-radius: 0;\n    --send-btn-shadow: none;\n    --plus-btn-bg: transparent;\n    --plus-btn-color: #262626;\n    --plus-btn-size: 24px;\n    --input-btn-color: #262626;\n    --plus-btn-icon: none;\n    --send-btn-icon: none;\n    --mic-btn-icon: none;\n    --sticker-btn-icon: none;\n    --ai-btn-icon: none;\n    --typing-dot-color: #8e8e93;\n    --typing-dot-size: 8px;\n    --typing-bg: #efefef;\n    --typing-radius: 16px;\n    --nuo-safe-top: 0px;\n    --nuo-safe-bottom: 0px;\n    --wa-bubble-me: #DCF8C6;\n    --wa-bubble-them: #ffffff;\n    --wa-me-meta-color: rgba(0, 0, 0, 0.45);\n    --wa-me-meta-size: 11px;\n    --wa-me-check-color: rgba(0, 0, 0, 0.45);\n    --wa-me-check-read-color: #53bdeb;\n    --wa-them-meta-color: rgba(0, 0, 0, 0.45);\n    --wa-them-meta-size: 11px;\n}\n* { margin: 0; padding: 0; box-sizing: border-box; }\nbody { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; overflow: hidden; }\n\n/* chat-detail-screen — 同時支援 class 和 id 選擇器 */\n.chat-detail-screen,\n#chat-detail-screen {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n.chat-detail-screen::before,\n#chat-detail-screen::before {\n    content: '';\n    position: absolute;\n    inset: 0;\n    background: var(--chat-bg-overlay);\n    backdrop-filter: blur(var(--chat-bg-blur));\n    -webkit-backdrop-filter: blur(var(--chat-bg-blur));\n    pointer-events: none;\n    z-index: 0;\n}\n\n/* header */\n.chat-header-custom {\n    min-height: var(--chat-header-height) !important;\n    display: flex;\n    align-items: center;\n    padding: 8px 12px;\n    gap: 8px;\n    flex-shrink: 0;\n    position: relative;\n    z-index: 2;\n}\n.header-btn-back {\n    display: flex; align-items: center; justify-content: center;\n    width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;\n    background: none; border: none; cursor: pointer; position: relative;\n}\n.nuo-chat-header-unread-dot {\n    position: absolute;\n    top: var(--chat-header-unread-top, 6px);\n    left: var(--chat-header-unread-left, 16px);\n    right: var(--chat-header-unread-right, auto);\n    bottom: var(--chat-header-unread-bottom, auto);\n    width: var(--chat-header-unread-size, 8px);\n    height: var(--chat-header-unread-size, 8px);\n    background: var(--chat-header-unread-bg, #ff3b30);\n    background-image: var(--chat-header-unread-bg-image, none);\n    background-size: var(--chat-header-unread-bg-size, cover);\n    background-position: var(--chat-header-unread-bg-position, center);\n    border: var(--chat-header-unread-border, none);\n    border-radius: var(--chat-header-unread-radius, 50%);\n    box-shadow: var(--chat-header-unread-shadow, none);\n    outline: var(--chat-header-unread-outline, none);\n    transform: var(--chat-header-unread-transform, none);\n    animation: var(--chat-header-unread-animation, none);\n    z-index: var(--chat-header-unread-z, 1);\n    pointer-events: none;\n}\n.nuo-chat-header-unread-num {\n    position: absolute;\n    top: var(--chat-header-unread-num-top, 2px);\n    left: var(--chat-header-unread-num-left, 22px);\n    right: var(--chat-header-unread-num-right, auto);\n    bottom: var(--chat-header-unread-num-bottom, auto);\n    min-width: var(--chat-header-unread-num-min-width, 16px);\n    height: var(--chat-header-unread-num-height, 16px);\n    padding: var(--chat-header-unread-num-padding, 0 5px);\n    display: var(--chat-header-unread-num-display, flex);\n    align-items: center; justify-content: center;\n    font-size: var(--chat-header-unread-num-size, 11px);\n    font-weight: var(--chat-header-unread-num-weight, 600);\n    line-height: var(--chat-header-unread-num-line-height, 1);\n    color: var(--chat-header-unread-num-color, #ffffff);\n    background: var(--chat-header-unread-num-bg, #ff3b30);\n    background-image: var(--chat-header-unread-num-bg-image, none);\n    background-size: var(--chat-header-unread-num-bg-size, cover);\n    background-position: var(--chat-header-unread-num-bg-position, center);\n    border: var(--chat-header-unread-num-border, none);\n    border-radius: var(--chat-header-unread-num-radius, 999px);\n    box-shadow: var(--chat-header-unread-num-shadow, none);\n    outline: var(--chat-header-unread-num-outline, none);\n    transform: var(--chat-header-unread-num-transform, none);\n    animation: var(--chat-header-unread-num-animation, none);\n    letter-spacing: var(--chat-header-unread-num-letter-spacing, 0);\n    font-family: var(--chat-header-unread-num-font-family, inherit);\n    z-index: var(--chat-header-unread-num-z, 2);\n    pointer-events: none; white-space: nowrap;\n}\n.chat-header-icon { color: var(--chat-header-icon-color); }\n.header-profile-section { display: flex; align-items: center; gap: 8px; flex: 1; min-width: 0; }\n.chat-header-avatar {\n    width: var(--chat-header-avatar-size); height: var(--chat-header-avatar-size);\n    border: var(--chat-header-avatar-border); border-radius: var(--chat-header-avatar-radius);\n    background: linear-gradient(135deg, #a8edea, #fed6e3); flex-shrink: 0;\n}\n.chat-header-title {\n    color: var(--chat-header-title-color); font-size: var(--chat-header-title-size);\n    font-weight: var(--chat-header-title-weight); white-space: nowrap;\n    overflow: hidden; text-overflow: ellipsis;\n}\n.chat-header-subtitle {\n    color: var(--chat-header-subtitle-color); font-size: var(--chat-header-subtitle-size);\n}\n.header-action-btn {\n    display: flex; align-items: center; justify-content: center;\n    width: 28px; height: 28px; flex-shrink: 0;\n}\n\n/* messages area */\n.chat-messages-area, .chat-message-list-custom {\n    flex: 1; overflow: hidden; position: relative; z-index: 1;\n    padding: var(--chat-messages-padding);\n    display: flex; flex-direction: column; gap: var(--chat-messages-gap);\n}\n\n/* date divider */\n.date-divider-custom {\n    background: var(--date-divider-bg); color: var(--date-divider-color);\n    font-size: var(--date-divider-size); font-weight: var(--date-divider-weight);\n    padding: var(--date-divider-padding); border-radius: var(--date-divider-radius);\n    text-align: center;\n}\n\n/* timestamp */\n.timestamp-custom {\n    color: var(--timestamp-color); -webkit-text-fill-color: var(--timestamp-color);\n    font-size: var(--timestamp-size); font-weight: var(--timestamp-weight);\n    margin: var(--timestamp-margin); text-align: center;\n}\n\n/* message rows */\n.msg-them { display: flex; align-items: flex-end; gap: 6px; max-width: var(--chat-message-max-width); }\n.msg-me { display: flex; align-items: flex-end; justify-content: flex-end; margin-left: auto; max-width: var(--chat-message-max-width); margin-bottom: 6px; }\n\n/* avatar */\n.msg-avatar-custom {\n    width: var(--avatar-size); height: var(--avatar-size);\n    border-radius: var(--avatar-radius); border: var(--avatar-border);\n    box-shadow: var(--avatar-shadow); margin-right: var(--avatar-margin);\n    flex-shrink: 0; background: linear-gradient(135deg, #a8edea, #fed6e3);\n}\n\n/* bubble base */\n.msg-bubble-container {\n    padding: 10px 14px; font-size: 15px; line-height: 1.45;\n    word-break: break-word; max-width: 100%;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n    position: relative; cursor: pointer; user-select: none;\n}\n\n/* custom bubble */\n.bubble-me-custom {\n    background: var(--bubble-me-bg-gradient, var(--bubble-me-bg)) !important;\n    color: var(--bubble-me-color) !important;\n    font-size: var(--bubble-me-font-size); line-height: var(--bubble-me-line-height);\n    padding: var(--bubble-me-padding); border-radius: var(--bubble-me-radius);\n    box-shadow: var(--bubble-me-shadow); border: var(--bubble-me-border);\n}\n.bubble-me-custom.first { border-radius: var(--bubble-me-radius-first); }\n.bubble-me-custom.mid   { border-radius: var(--bubble-me-radius-mid); }\n.bubble-me-custom.last  { border-radius: var(--bubble-me-radius-last); }\n\n.bubble-them-custom {\n    background: var(--bubble-them-bg-gradient, var(--bubble-them-bg)) !important;\n    color: var(--bubble-them-color) !important;\n    font-size: var(--bubble-them-font-size); line-height: var(--bubble-them-line-height);\n    padding: var(--bubble-them-padding); border-radius: var(--bubble-them-radius);\n    box-shadow: var(--bubble-them-shadow); border: var(--bubble-them-border);\n}\n.bubble-them-custom.first { border-radius: var(--bubble-them-radius-first); }\n.bubble-them-custom.mid   { border-radius: var(--bubble-them-radius-mid); }\n.bubble-them-custom.last  { border-radius: var(--bubble-them-radius-last); }\n\n/* input area */\n.input-area-custom {\n    padding: var(--input-area-padding) !important;\n    min-height: var(--input-area-min-height) !important;\n    display: flex; align-items: center; gap: 8px;\n    flex-shrink: 0; position: relative; z-index: 2;\n}\n.input-btn-plus {\n    display: flex; align-items: center; justify-content: center;\n    color: var(--plus-btn-color); flex-shrink: 0;\n}\n.input-box-custom,\n#chat-message-input.input-box-custom {\n    color: var(--input-box-color) !important;\n    -webkit-text-fill-color: var(--input-box-color) !important;\n    border-radius: var(--input-box-radius) !important;\n    padding: var(--input-box-padding) !important;\n    font-size: var(--input-box-font-size) !important;\n    flex: 1; outline: none; resize: none;\n    font-family: inherit; min-height: 0; line-height: 1.4;\n}\n.input-box-custom::placeholder,\n#chat-message-input.input-box-custom::placeholder {\n    color: var(--input-box-placeholder) !important;\n    -webkit-text-fill-color: var(--input-box-placeholder) !important;\n}\n.send-btn-custom {\n    background: var(--send-btn-bg) !important;\n    color: var(--send-btn-color) !important;\n    width: var(--send-btn-size) !important; height: var(--send-btn-size) !important;\n    border-radius: var(--send-btn-radius) !important;\n    box-shadow: var(--send-btn-shadow) !important;\n    display: flex; align-items: center; justify-content: center;\n    border: none; cursor: pointer; flex-shrink: 0;\n}\n\n.send-btn-custom:hover {\n    background: var(--send-btn-bg-hover) !important;\n}\n\n/* scrollbar */\n.chat-messages-area::-webkit-scrollbar { width: var(--scrollbar-width, 6px); }\n.chat-messages-area::-webkit-scrollbar-track { background: var(--scrollbar-track, transparent); }\n.chat-messages-area::-webkit-scrollbar-thumb { background: var(--scrollbar-thumb, rgba(0,0,0,0.2)); border-radius: 3px; }\n.chat-messages-area::-webkit-scrollbar-thumb:hover { background: var(--scrollbar-thumb-hover, rgba(0,0,0,0.3)); }\n\n/* glass-header (for iMessage-like themes) */\n.glass-header {\n    display: flex; align-items: center; padding: 8px 12px; gap: 8px;\n    flex-shrink: 0; position: relative; z-index: 2;\n}\n/* Header 自訂裝飾貼圖（6 個獨立圖層）— 預覽 skeleton 同步 */\n.chat-header-custom .chat-header-deco {\n    position: absolute; pointer-events: none; background-repeat: no-repeat;\n}\n.chat-header-custom .chat-header-deco-1 {\n    top: var(--chat-header-deco-1-top, 0); left: var(--chat-header-deco-1-left, 0);\n    right: var(--chat-header-deco-1-right, auto); bottom: var(--chat-header-deco-1-bottom, auto);\n    width: var(--chat-header-deco-1-width, 100%); height: var(--chat-header-deco-1-height, 100%);\n    background-image: var(--chat-header-deco-1-image, none);\n    background-size: var(--chat-header-deco-1-size, auto);\n    background-position: var(--chat-header-deco-1-position, 0 0);\n    background-repeat: var(--chat-header-deco-1-repeat, no-repeat);\n    opacity: var(--chat-header-deco-1-opacity, 1);\n    z-index: var(--chat-header-deco-1-z, 1);\n    transform: var(--chat-header-deco-1-transform, none);\n}\n.chat-header-custom .chat-header-deco-2 {\n    top: var(--chat-header-deco-2-top, 0); left: var(--chat-header-deco-2-left, 0);\n    right: var(--chat-header-deco-2-right, auto); bottom: var(--chat-header-deco-2-bottom, auto);\n    width: var(--chat-header-deco-2-width, 100%); height: var(--chat-header-deco-2-height, 100%);\n    background-image: var(--chat-header-deco-2-image, none);\n    background-size: var(--chat-header-deco-2-size, auto);\n    background-position: var(--chat-header-deco-2-position, 0 0);\n    background-repeat: var(--chat-header-deco-2-repeat, no-repeat);\n    opacity: var(--chat-header-deco-2-opacity, 1);\n    z-index: var(--chat-header-deco-2-z, 2);\n    transform: var(--chat-header-deco-2-transform, none);\n}\n.chat-header-custom .chat-header-deco-3 {\n    top: var(--chat-header-deco-3-top, 0); left: var(--chat-header-deco-3-left, 0);\n    right: var(--chat-header-deco-3-right, auto); bottom: var(--chat-header-deco-3-bottom, auto);\n    width: var(--chat-header-deco-3-width, 100%); height: var(--chat-header-deco-3-height, 100%);\n    background-image: var(--chat-header-deco-3-image, none);\n    background-size: var(--chat-header-deco-3-size, auto);\n    background-position: var(--chat-header-deco-3-position, 0 0);\n    background-repeat: var(--chat-header-deco-3-repeat, no-repeat);\n    opacity: var(--chat-header-deco-3-opacity, 1);\n    z-index: var(--chat-header-deco-3-z, 3);\n    transform: var(--chat-header-deco-3-transform, none);\n}\n.chat-header-custom .chat-header-deco-4 {\n    top: var(--chat-header-deco-4-top, 0); left: var(--chat-header-deco-4-left, 0);\n    right: var(--chat-header-deco-4-right, auto); bottom: var(--chat-header-deco-4-bottom, auto);\n    width: var(--chat-header-deco-4-width, 100%); height: var(--chat-header-deco-4-height, 100%);\n    background-image: var(--chat-header-deco-4-image, none);\n    background-size: var(--chat-header-deco-4-size, auto);\n    background-position: var(--chat-header-deco-4-position, 0 0);\n    background-repeat: var(--chat-header-deco-4-repeat, no-repeat);\n    opacity: var(--chat-header-deco-4-opacity, 1);\n    z-index: var(--chat-header-deco-4-z, 4);\n    transform: var(--chat-header-deco-4-transform, none);\n}\n.chat-header-custom .chat-header-deco-5 {\n    top: var(--chat-header-deco-5-top, 0); left: var(--chat-header-deco-5-left, 0);\n    right: var(--chat-header-deco-5-right, auto); bottom: var(--chat-header-deco-5-bottom, auto);\n    width: var(--chat-header-deco-5-width, 100%); height: var(--chat-header-deco-5-height, 100%);\n    background-image: var(--chat-header-deco-5-image, none);\n    background-size: var(--chat-header-deco-5-size, auto);\n    background-position: var(--chat-header-deco-5-position, 0 0);\n    background-repeat: var(--chat-header-deco-5-repeat, no-repeat);\n    opacity: var(--chat-header-deco-5-opacity, 1);\n    z-index: var(--chat-header-deco-5-z, 5);\n    transform: var(--chat-header-deco-5-transform, none);\n}\n.chat-header-custom .chat-header-deco-6 {\n    top: var(--chat-header-deco-6-top, 0); left: var(--chat-header-deco-6-left, 0);\n    right: var(--chat-header-deco-6-right, auto); bottom: var(--chat-header-deco-6-bottom, auto);\n    width: var(--chat-header-deco-6-width, 100%); height: var(--chat-header-deco-6-height, 100%);\n    background-image: var(--chat-header-deco-6-image, none);\n    background-size: var(--chat-header-deco-6-size, auto);\n    background-position: var(--chat-header-deco-6-position, 0 0);\n    background-repeat: var(--chat-header-deco-6-repeat, no-repeat);\n    opacity: var(--chat-header-deco-6-opacity, 1);\n    z-index: var(--chat-header-deco-6-z, 6);\n    transform: var(--chat-header-deco-6-transform, none);\n}\n\n/* WA in-bubble meta (timestamp + checks) */\n.msg-wa-meta {\n    display: inline-flex; align-items: center; gap: 3px;\n    margin-left: 8px; line-height: 1; vertical-align: text-bottom;\n    position: relative; top: 4px;\n}\n.msg-wa-time {\n    font-size: 11px; color: rgba(0,0,0,0.45);\n    font-weight: 400; white-space: nowrap;\n}\n.msg-me .msg-wa-time, .message-wrapper.user .msg-wa-time {\n    font-size: var(--wa-me-meta-size, 11px);\n    color: var(--wa-me-meta-color, rgba(0,0,0,0.45));\n}\n.msg-them .msg-wa-time, .message-wrapper.ai .msg-wa-time {\n    font-size: var(--wa-them-meta-size, 11px);\n    color: var(--wa-them-meta-color, rgba(0,0,0,0.45));\n}\n.msg-wa-checks {\n    display: flex;\n    color: var(--wa-me-check-color, rgba(0,0,0,0.45));\n}\n.msg-wa-checks.read {\n    color: var(--wa-me-check-read-color, #53bdeb);\n}\n</style><style id="user-theme">${r}</style></head><body>${n}</body></html>`;
  return p.jsx("div", {
    style: {
      borderRadius: "20px",
      overflow: "hidden",
      height: "340px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
      border: "1px solid rgba(0,0,0,0.06)",
      userSelect: "none"
    },
    children: p.jsx("iframe", {
      srcDoc: a,
      style: {
        width: "100%",
        height: "100%",
        border: "none",
        pointerEvents: "none",
        display: "block"
      },
      title: "主題預覽"
    }, r)
  });
};
const Ee = ({
  visible: e,
  onClose: t,
  onSave: n,
  defaultName: r
}) => {
  const [a, o] = c.useState(r || "");
  const i = c.useRef(null);
  c.useEffect(() => {
    if (e) {
      o(r || "");
      setTimeout(() => {
        var e;
        if ((e = i.current) == null) {
          return undefined;
        } else {
          return e.focus();
        }
      }, 100);
    }
  }, [e, r]);
  if (e) {
    return p.jsx("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)"
      },
      onClick: t,
      children: p.jsxs("div", {
        style: {
          background: "#fff",
          borderRadius: "20px",
          padding: "28px 24px",
          width: "min(340px, 90vw)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)"
        },
        onClick: e => e.stopPropagation(),
        children: [p.jsx("h3", {
          style: {
            margin: "0 0 6px",
            fontSize: "18px",
            fontWeight: 700
          },
          children: "保存為預設"
        }), p.jsx("p", {
          style: {
            margin: "0 0 20px",
            fontSize: "13px",
            color: "#8e8e93"
          },
          children: "為你的主題取個名字方便以後使用"
        }), p.jsx("input", {
          ref: i,
          value: a,
          onChange: e => o(e.target.value),
          placeholder: "輸入預設名稱...",
          maxLength: 30,
          style: {
            width: "100%",
            padding: "14px 16px",
            background: "#f5f5f7",
            border: "2px solid transparent",
            borderRadius: "14px",
            fontSize: "15px",
            outline: "none",
            transition: "border-color 0.2s",
            boxSizing: "border-box"
          },
          onFocus: e => e.target.style.borderColor = "#007aff",
          onBlur: e => e.target.style.borderColor = "transparent",
          onKeyDown: e => {
            if (e.key === "Enter" && a.trim()) {
              n(a.trim());
            }
          }
        }), p.jsxs("div", {
          style: {
            display: "flex",
            gap: "10px",
            marginTop: "20px"
          },
          children: [p.jsx("button", {
            onClick: t,
            style: {
              flex: 1,
              padding: "13px",
              background: "#f5f5f7",
              border: "none",
              borderRadius: "14px",
              fontSize: "15px",
              fontWeight: 600,
              color: "#333",
              cursor: "pointer"
            },
            children: "取消"
          }), p.jsx("button", {
            onClick: () => a.trim() && n(a.trim()),
            disabled: !a.trim(),
            style: {
              flex: 1,
              padding: "13px",
              background: a.trim() ? "linear-gradient(135deg, #007aff, #5856d6)" : "#e5e5ea",
              border: "none",
              borderRadius: "14px",
              fontSize: "15px",
              fontWeight: 600,
              color: a.trim() ? "#fff" : "#8e8e93",
              cursor: a.trim() ? "pointer" : "default",
              transition: "all 0.2s"
            },
            children: "保存"
          })]
        })]
      })
    });
  } else {
    return null;
  }
};
const Fe = ({
  onClose: e,
  onThemeChange: t,
  userId: n,
  characterId: r
}) => {
  var a;
  var o;
  const i = c.useRef(null);
  const d = c.useRef(null);
  const u = c.useRef(null);
  const [x, g] = c.useState(null);
  const [W, M] = c.useState([]);
  const [E, F] = c.useState(null);
  const [D, A] = c.useState(null);
  const [B, N] = c.useState(null);
  const [L, O] = c.useState("");
  const [$, P] = c.useState(null);
  const [H, U] = c.useState(false);
  const [_, G] = c.useState(false);
  const [q, V] = c.useState(null);
  const [Y, K] = c.useState(() => {
    try {
      const e = localStorage.getItem("chat_theme_saved_expanded");
      return e === null || e === "1";
    } catch {
      return true;
    }
  });
  c.useEffect(() => {
    try {
      localStorage.setItem("chat_theme_saved_expanded", Y ? "1" : "0");
    } catch {}
  }, [Y]);
  const [X, Q] = c.useState(null);
  const [Z, J] = c.useState(null);
  const ee = c.useCallback((e, t, n = 2500) => {
    if (e === "error") {
      A(t);
      setTimeout(() => A(null), n);
    } else {
      N(t);
      setTimeout(() => N(null), n);
    }
  }, []);
  c.useEffect(() => {
    te();
  }, []);
  const te = async () => {
    try {
      const e = n && r ? await h(n, r) : await m();
      const t = await f();
      g(e);
      P((e == null ? undefined : e.css) ?? null);
      M(t);
      if (e == null ? undefined : e.css) {
        O(e.css);
      }
    } catch (e) {
      console.error("載入主題失敗:", e);
    }
  };
  const ne = async (e, a) => {
    try {
      if (n && r) {
        await S(n, r, e, a);
      } else {
        await C(e, a);
      }
      g({
        name: e,
        css: a
      });
      O(a);
      P(a);
      if (t != null) {
        t(!!a, a);
      }
      ee("success", `已套用主題: ${e}`);
    } catch (o) {
      ee("error", "套用主題失敗");
    }
  };
  const re = e => {
    V(e);
    O(e.css);
    P(e.css);
    U(true);
    setTimeout(() => {
      const e = u.current;
      const t = d.current;
      if (!e || !t) {
        return;
      }
      const n = e.getBoundingClientRect();
      const r = t.getBoundingClientRect();
      const a = e.scrollTop + (r.top - n.top) - 20;
      e.scrollTo({
        top: Math.max(0, a),
        behavior: "smooth"
      });
    }, 150);
  };
  const ae = async () => {
    try {
      if (n && r) {
        await w(n, r);
      } else {
        await j();
      }
      g(null);
      O("");
      P(null);
      V(null);
      if (t != null) {
        t(false);
      }
      ee("success", "已恢復預設主題");
    } catch (e) {
      ee("error", "重置失敗");
    }
  };
  return p.jsxs("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "#f2f2f7",
      zIndex: 5000,
      display: "flex",
      flexDirection: "column",
      animation: "slideInRight 0.3s ease"
    },
    children: [p.jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        padding: "12px 16px",
        paddingTop: "calc(12px + var(--nuo-safe-top))",
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "0.5px solid rgba(0,0,0,0.1)",
        minHeight: "calc(56px + var(--nuo-safe-top))",
        boxSizing: "border-box"
      },
      children: [p.jsx("button", {
        onClick: e,
        style: {
          background: "none",
          border: "none",
          padding: "8px",
          marginRight: "4px",
          cursor: "pointer",
          display: "flex",
          color: "#007aff"
        },
        children: p.jsx(Ce, {})
      }), p.jsx("div", {
        style: {
          flex: 1
        },
        children: p.jsx("h2", {
          style: {
            margin: 0,
            fontSize: "17px",
            fontWeight: 700,
            letterSpacing: "-0.3px"
          },
          children: "聊天主題"
        })
      })]
    }), p.jsxs("div", {
      ref: u,
      style: {
        flex: 1,
        overflow: "auto",
        padding: "16px",
        paddingBottom: "40px"
      },
      children: [D && p.jsx("div", {
        style: {
          background: "linear-gradient(135deg, #ff3b30, #ff6259)",
          color: "#fff",
          padding: "12px 16px",
          borderRadius: "14px",
          marginBottom: "16px",
          fontSize: "14px",
          fontWeight: 500,
          boxShadow: "0 4px 12px rgba(255,59,48,0.25)"
        },
        children: D
      }), B && p.jsx("div", {
        style: {
          background: "linear-gradient(135deg, #34c759, #30d158)",
          color: "#fff",
          padding: "12px 16px",
          borderRadius: "14px",
          marginBottom: "16px",
          fontSize: "14px",
          fontWeight: 500,
          boxShadow: "0 4px 12px rgba(52,199,89,0.25)"
        },
        children: B
      }), E && p.jsxs("div", {
        style: {
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          color: "#fff",
          padding: "16px 18px",
          borderRadius: "18px",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 4px 16px rgba(102,126,234,0.3)"
        },
        children: [p.jsxs("div", {
          children: [p.jsxs("div", {
            style: {
              fontSize: "14px",
              fontWeight: 600
            },
            children: ["正在預覽: ", E.name]
          }), p.jsx("div", {
            style: {
              fontSize: "12px",
              opacity: 0.8,
              marginTop: "3px"
            },
            children: "返回聊天查看效果"
          })]
        }), p.jsxs("div", {
          style: {
            display: "flex",
            gap: "8px"
          },
          children: [p.jsx("button", {
            onClick: () => {
              y((x == null ? undefined : x.css) || "");
              F(null);
            },
            style: {
              background: "rgba(255,255,255,0.2)",
              border: "none",
              borderRadius: "10px",
              padding: "8px 14px",
              color: "#fff",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer"
            },
            children: "取消"
          }), p.jsx("button", {
            onClick: async () => {
              if (E) {
                try {
                  await ne(E.name, E.css);
                  await k(E.name, E.css);
                  F(null);
                  te();
                } catch (e) {
                  ee("error", "保存主題失敗");
                }
              }
            },
            style: {
              background: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: "8px 14px",
              color: "#667eea",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer"
            },
            children: "套用"
          })]
        })]
      }), p.jsxs("div", {
        style: {
          marginBottom: "24px"
        },
        children: [p.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "12px"
          },
          children: [p.jsx("h3", {
            style: {
              margin: 0,
              fontSize: "13px",
              fontWeight: 600,
              color: "#8e8e93",
              textTransform: "uppercase",
              letterSpacing: "0.5px"
            },
            children: "效果預覽"
          }), x && p.jsx("span", {
            style: {
              fontSize: "12px",
              color: "#007aff",
              fontWeight: 500,
              background: "rgba(0,122,255,0.08)",
              padding: "3px 10px",
              borderRadius: "20px"
            },
            children: x.name
          })]
        }), p.jsx(Me, {
          css: $
        })]
      }), p.jsxs("div", {
        style: {
          marginBottom: "24px"
        },
        children: [p.jsx("h3", {
          style: {
            margin: "0 0 12px",
            fontSize: "13px",
            fontWeight: 600,
            color: "#8e8e93",
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          },
          children: "預設主題"
        }), p.jsxs("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px"
          },
          children: [p.jsxs("button", {
            onClick: ae,
            style: {
              background: "#fff",
              border: x ? "1px solid rgba(0,0,0,0.08)" : "2.5px solid #007aff",
              borderRadius: "16px",
              padding: "16px 8px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s",
              boxShadow: x ? "0 2px 8px rgba(0,0,0,0.04)" : "0 0 0 3px rgba(0,122,255,0.15)"
            },
            children: [p.jsxs("div", {
              style: {
                display: "flex",
                gap: "4px"
              },
              children: [p.jsx("div", {
                style: {
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#0095f6"
                }
              }), p.jsx("div", {
                style: {
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#efefef",
                  border: "1px solid rgba(0,0,0,0.1)"
                }
              })]
            }), p.jsx("span", {
              style: {
                fontSize: "12px",
                fontWeight: 600,
                color: "#333"
              },
              children: "預設"
            }), !x && p.jsx(je, {})]
          }), b.map(e => {
            const t = {
              imessage: ["#0B84FF", "rgba(120,120,128,0.35)", "#1a1a2e"],
              line: ["#06C755", "#f5f5f5", "#ffffff"]
            }[e.id] || ["#0095f6", "#efefef", "#f5f5f7"];
            const n = (x == null ? undefined : x.name) === e.name;
            return p.jsxs("button", {
              onClick: () => (e => ne(e.name, e.css))(e),
              style: {
                background: t[2],
                border: n ? "2.5px solid #007aff" : "1px solid rgba(0,0,0,0.08)",
                borderRadius: "16px",
                padding: "16px 8px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.2s",
                boxShadow: n ? "0 0 0 3px rgba(0,122,255,0.15)" : "0 2px 8px rgba(0,0,0,0.04)"
              },
              children: [p.jsxs("div", {
                style: {
                  display: "flex",
                  gap: "4px"
                },
                children: [p.jsx("div", {
                  style: {
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: t[0]
                  }
                }), p.jsx("div", {
                  style: {
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: t[1],
                    border: "1px solid rgba(255,255,255,0.3)"
                  }
                })]
              }), p.jsx("span", {
                style: {
                  fontSize: "12px",
                  fontWeight: 600,
                  color: e.id === "imessage" ? "#fff" : "#333"
                },
                children: e.name
              }), n && p.jsx("span", {
                style: {
                  color: e.id === "imessage" ? "#fff" : "#007aff"
                },
                children: p.jsx(je, {})
              })]
            }, e.id);
          })]
        })]
      }), p.jsxs("div", {
        style: {
          marginBottom: "24px"
        },
        children: [p.jsxs("div", {
          onClick: () => W.length > 0 && K(e => !e),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "12px",
            cursor: W.length > 0 ? "pointer" : "default",
            userSelect: "none"
          },
          children: [p.jsx("h3", {
            style: {
              margin: 0,
              fontSize: "13px",
              fontWeight: 600,
              color: "#8e8e93",
              textTransform: "uppercase",
              letterSpacing: "0.5px"
            },
            children: "我的預設"
          }), W.length > 0 && p.jsxs("span", {
            style: {
              fontSize: "12px",
              color: "#8e8e93",
              display: "flex",
              alignItems: "center",
              gap: "4px"
            },
            children: [Y ? "收起" : `展開 (${W.length})`, p.jsx("span", {
              style: {
                display: "inline-block",
                transform: Y ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s"
              },
              children: "▾"
            })]
          })]
        }), W.length > 0 && !Y ? null : W.length === 0 ? p.jsxs("div", {
          style: {
            background: "#fff",
            borderRadius: "16px",
            padding: "32px 20px",
            textAlign: "center",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
          },
          children: [p.jsx("div", {
            style: {
              fontSize: "28px",
              marginBottom: "8px"
            },
            children: "🎨"
          }), p.jsx("div", {
            style: {
              fontSize: "14px",
              color: "#8e8e93"
            },
            children: "還沒有自定義預設"
          }), p.jsx("div", {
            style: {
              fontSize: "12px",
              color: "#aeaeb2",
              marginTop: "4px"
            },
            children: "編寫 CSS 代碼後可保存為預設"
          })]
        }) : p.jsx("div", {
          style: {
            background: "#fff",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
          },
          children: W.map((e, t) => {
            const n = (x == null ? undefined : x.name) === e.name;
            const r = (q == null ? undefined : q.id) === e.id;
            return p.jsxs("div", {
              style: {
                padding: "14px 16px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                borderBottom: t < W.length - 1 ? "0.5px solid rgba(0,0,0,0.06)" : "none",
                background: r ? "rgba(0,122,255,0.04)" : "transparent",
                transition: "background 0.2s"
              },
              children: [p.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: 0
                },
                children: [p.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  },
                  children: [n && p.jsx("span", {
                    style: {
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#34c759",
                      flexShrink: 0
                    }
                  }), p.jsx("span", {
                    style: {
                      fontSize: "15px",
                      fontWeight: n ? 600 : 400,
                      color: "#1c1c1e",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                    },
                    children: e.name
                  })]
                }), p.jsx("div", {
                  style: {
                    fontSize: "12px",
                    color: "#aeaeb2",
                    marginTop: "2px"
                  },
                  children: new Date(e.updatedAt || e.createdAt).toLocaleDateString()
                })]
              }), p.jsxs("div", {
                style: {
                  display: "flex",
                  gap: "6px",
                  flexShrink: 0
                },
                children: [p.jsx("button", {
                  onClick: () => (e => {
                    F(e);
                    P(e.css);
                    z(e.css);
                  })(e),
                  title: "預覽",
                  style: {
                    width: "34px",
                    height: "34px",
                    borderRadius: "10px",
                    background: "rgba(0,0,0,0.04)",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#8e8e93"
                  },
                  children: p.jsx(Ie, {})
                }), p.jsx("button", {
                  onClick: t => ((e, t) => {
                    var n;
                    t.stopPropagation();
                    if ((q == null ? undefined : q.id) !== e.id) {
                      if (q && (L == null ? undefined : L.trim()) !== ((n = q.css) == null ? undefined : n.trim())) {
                        J(e);
                      } else {
                        re(e);
                      }
                    }
                  })(e, t),
                  title: "編輯",
                  style: {
                    width: "34px",
                    height: "34px",
                    borderRadius: "10px",
                    background: r ? "rgba(0,122,255,0.12)" : "rgba(0,0,0,0.04)",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: r ? "#007aff" : "#8e8e93"
                  },
                  children: p.jsx(Re, {})
                }), p.jsx("button", {
                  onClick: () => (e => ne(e.name, e.css))(e),
                  title: "啟用",
                  style: {
                    height: "34px",
                    borderRadius: "10px",
                    padding: "0 14px",
                    background: n ? "#34c759" : "#007aff",
                    border: "none",
                    cursor: "pointer",
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: "4px"
                  },
                  children: n ? p.jsxs(p.Fragment, {
                    children: [p.jsx(je, {}), " 使用中"]
                  }) : "啟用"
                }), p.jsx("button", {
                  onClick: t => ((e, t) => {
                    t.stopPropagation();
                    const n = W.find(t => t.id === e);
                    Q({
                      id: e,
                      name: (n == null ? undefined : n.name) || ""
                    });
                  })(e.id, t),
                  title: "刪除",
                  style: {
                    width: "34px",
                    height: "34px",
                    borderRadius: "10px",
                    background: "rgba(255,59,48,0.08)",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ff3b30"
                  },
                  children: p.jsx(Se, {})
                })]
              })]
            }, e.id);
          })
        })]
      }), p.jsxs("div", {
        style: {
          marginBottom: "24px"
        },
        ref: d,
        children: [p.jsxs("button", {
          onClick: () => U(!H),
          style: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 18px",
            background: "#fff",
            border: "none",
            borderRadius: "16px",
            cursor: "pointer",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            ...(H && {
              borderRadius: "16px 16px 0 0"
            })
          },
          children: [p.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "10px"
            },
            children: [p.jsx("span", {
              style: {
                color: "#007aff"
              },
              children: p.jsx(We, {})
            }), p.jsx("span", {
              style: {
                fontSize: "15px",
                fontWeight: 600,
                color: "#1c1c1e"
              },
              children: q ? `編輯: ${q.name}` : "自定義 CSS 代碼"
            }), !q && x && ((a = x.css) == null ? undefined : a.trim()) === (L == null ? undefined : L.trim()) && p.jsxs("span", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "12px",
                color: "#34c759",
                fontWeight: 500
              },
              children: [p.jsx("span", {
                style: {
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#34c759",
                  display: "inline-block"
                }
              }), "使用中"]
            })]
          }), p.jsx("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#8e8e93",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
              transform: H ? "rotate(180deg)" : "rotate(0)",
              transition: "transform 0.2s"
            },
            children: p.jsx("polyline", {
              points: "6 9 12 15 18 9"
            })
          })]
        }), H && p.jsxs("div", {
          style: {
            background: "#fff",
            borderRadius: "0 0 16px 16px",
            padding: "0 18px 18px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
          },
          children: [q && p.jsxs("div", {
            style: {
              background: "rgba(0,122,255,0.06)",
              borderRadius: "10px",
              padding: "10px 14px",
              marginBottom: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [p.jsxs("span", {
              style: {
                fontSize: "13px",
                color: "#007aff",
                fontWeight: 500
              },
              children: ["正在編輯「", q.name, "」"]
            }), p.jsx("button", {
              onClick: () => {
                V(null);
                O((x == null ? undefined : x.css) || "");
                P((x == null ? undefined : x.css) ?? null);
              },
              style: {
                background: "none",
                border: "none",
                fontSize: "13px",
                color: "#8e8e93",
                cursor: "pointer",
                fontWeight: 500
              },
              children: "取消編輯"
            })]
          }), p.jsx("p", {
            style: {
              margin: "0 0 12px",
              fontSize: "13px",
              color: "#8e8e93"
            },
            children: "修改 :root 變量即可自訂主題外觀"
          }), p.jsx("textarea", {
            value: L,
            onChange: e => {
              O(e.target.value);
              P(e.target.value);
            },
            placeholder: ":root {\n  --chat-bg-color: #f5f5f7;\n  --bubble-me-bg: #0095f6;\n\n  /* 素淨模式專用（需選擇「素淨」氣泡樣式） */\n  --plain-content-max-width: 80%;\n  --plain-gap-between-groups: 22px;\n  --plain-gap-within-group: 4px;\n  --plain-avatar-size: 40px;\n  --plain-avatar-radius: 8px;\n  /* 更多變量見教程 */\n}",
            style: {
              width: "100%",
              height: "200px",
              padding: "14px",
              background: "#f8f9fa",
              border: "1.5px solid rgba(0,0,0,0.06)",
              borderRadius: "14px",
              fontSize: "13px",
              fontFamily: "Monaco, Menlo, Consolas, \"Courier New\", monospace",
              resize: "vertical",
              outline: "none",
              color: "#1c1c1e",
              lineHeight: "1.6",
              boxSizing: "border-box",
              transition: "border-color 0.2s"
            },
            onFocus: e => e.target.style.borderColor = "rgba(0,122,255,0.4)",
            onBlur: e => e.target.style.borderColor = "rgba(0,0,0,0.06)"
          }), p.jsxs("div", {
            style: {
              display: "flex",
              gap: "8px",
              marginTop: "14px"
            },
            children: [p.jsxs("button", {
              onClick: () => {
                if (!L.trim()) {
                  return;
                }
                const e = v(L);
                if (e.valid) {
                  P(L);
                  F({
                    name: (q == null ? undefined : q.name) || "手動編輯預覽",
                    css: L
                  });
                  z(L);
                } else {
                  ee("error", e.error);
                }
              },
              style: {
                flex: 1,
                padding: "12px",
                background: "rgba(0,122,255,0.08)",
                color: "#007aff",
                border: "none",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px"
              },
              children: [p.jsx(Ie, {}), " 預覽"]
            }), p.jsxs("button", {
              onClick: async () => {
                if (!L.trim()) {
                  ee("error", "請輸入 CSS 代碼");
                  return;
                }
                const e = v(L);
                if (!e.valid) {
                  ee("error", e.error);
                  return;
                }
                if (q) {
                  try {
                    await I(q.id, q.name, L);
                    await ne(q.name, L);
                    V({
                      ...q,
                      css: L
                    });
                    te();
                    ee("success", `已更新預設「${q.name}」`);
                  } catch (r) {
                    ee("error", "更新失敗");
                  }
                  return;
                }
                const t = W.find(e => {
                  var t;
                  return ((t = e.css) == null ? undefined : t.trim()) === L.trim();
                });
                const n = t ? t.name : "自定義 CSS";
                await ne(n, L);
                te();
              },
              style: {
                flex: 1,
                padding: "12px",
                background: "linear-gradient(135deg, #007aff, #5856d6)",
                color: "#fff",
                border: "none",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px"
              },
              children: [p.jsx(ze, {}), " ", q ? "更新預設" : "套用"]
            })]
          }), p.jsxs("div", {
            style: {
              display: "flex",
              gap: "8px",
              marginTop: "8px"
            },
            children: [p.jsxs("button", {
              onClick: () => {
                if (!L.trim()) {
                  ee("error", "請先輸入 CSS 代碼");
                  return;
                }
                const e = v(L);
                if (e.valid) {
                  G(true);
                } else {
                  ee("error", e.error);
                }
              },
              style: {
                flex: 1,
                padding: "12px",
                background: "#f5f5f7",
                color: "#1c1c1e",
                border: "none",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px"
              },
              children: [p.jsx(Te, {}), " 保存為預設"]
            }), p.jsx("input", {
              ref: i,
              type: "file",
              accept: ".css,.txt,.doc,.docx",
              onChange: async e => {
                var t;
                const n = (t = e.target.files) == null ? undefined : t[0];
                if (!n) {
                  return;
                }
                const r = n.name.toLowerCase().split(".").pop();
                if (!["css", "txt", "doc", "docx"].includes(r)) {
                  ee("error", "僅支持 .css、.txt、.doc 和 .docx 文件");
                  e.target.value = "";
                  return;
                }
                try {
                  const e = await R(n);
                  const t = v(e);
                  if (!t.valid) {
                    ee("error", t.error);
                    return;
                  }
                  const r = n.name.replace(/\.(css|txt|docx?|doc)$/, "");
                  O(e);
                  await ne(r, e);
                  await k(r, e);
                  te();
                } catch (a) {
                  ee("error", a.message || "讀取文件失敗");
                }
                e.target.value = "";
              },
              style: {
                display: "none"
              }
            }), p.jsxs("button", {
              onClick: () => {
                var e;
                if ((e = i.current) == null) {
                  return undefined;
                } else {
                  return e.click();
                }
              },
              style: {
                flex: 1,
                padding: "12px",
                background: "#f5f5f7",
                color: "#1c1c1e",
                border: "none",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px"
              },
              children: [p.jsx(ke, {}), " 導入"]
            }), p.jsxs("button", {
              onClick: async () => {
                var e;
                const t = (L == null ? undefined : L.trim()) || ((e = x == null ? undefined : x.css) == null ? undefined : e.trim());
                if (!t) {
                  ee("error", "沒有可導出的 CSS");
                  return;
                }
                const n = (q == null ? undefined : q.name) || (x == null ? undefined : x.name) || "自定義主題";
                const r = new Blob([t], {
                  type: "text/css;charset=utf-8"
                });
                const a = `${String(n).replace(/[\\/:*?"<>|]/g, "_")}.css`;
                if (s() && (await l(r, a)).success) {
                  return;
                }
                const o = URL.createObjectURL(r);
                const i = document.createElement("a");
                i.href = o;
                i.download = a;
                i.click();
                URL.revokeObjectURL(o);
              },
              style: {
                flex: 1,
                padding: "12px",
                background: "#f5f5f7",
                color: "#1c1c1e",
                border: "none",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                opacity: (L == null ? undefined : L.trim()) || ((o = x == null ? undefined : x.css) == null ? undefined : o.trim()) ? 1 : 0.4
              },
              children: [p.jsx(we, {}), " 導出"]
            })]
          })]
        })]
      }), x && p.jsx("button", {
        onClick: ae,
        style: {
          width: "100%",
          padding: "15px",
          background: "#fff",
          color: "#ff3b30",
          border: "none",
          borderRadius: "14px",
          fontSize: "15px",
          fontWeight: 500,
          cursor: "pointer",
          boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
          marginBottom: "16px"
        },
        children: "恢復預設主題"
      }), p.jsx("div", {
        style: {
          textAlign: "center",
          padding: "16px"
        },
        children: p.jsx("p", {
          style: {
            fontSize: "12px",
            color: "#aeaeb2",
            margin: 0
          },
          children: "修改 CSS 變量即可自訂聊天外觀"
        })
      })]
    }), p.jsx(Ee, {
      visible: _,
      onClose: () => G(false),
      onSave: async e => {
        if (!L.trim()) {
          ee("error", "請先輸入 CSS 代碼");
          return;
        }
        const t = v(L);
        if (t.valid) {
          try {
            await k(e, L);
            await ne(e, L);
            G(false);
            V(null);
            te();
            ee("success", `已保存預設「${e}」`);
          } catch (n) {
            ee("error", "保存預設失敗");
          }
        } else {
          ee("error", t.error);
        }
      },
      defaultName: (q == null ? undefined : q.name) || ""
    }), Z && p.jsx("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)"
      },
      onClick: () => J(null),
      children: p.jsxs("div", {
        style: {
          background: "#fff",
          borderRadius: "20px",
          padding: "28px 24px",
          width: "min(360px, 90vw)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)"
        },
        onClick: e => e.stopPropagation(),
        children: [p.jsx("h3", {
          style: {
            margin: "0 0 6px",
            fontSize: "18px",
            fontWeight: 700
          },
          children: "切換編輯目標？"
        }), p.jsxs("p", {
          style: {
            margin: "0 0 20px",
            fontSize: "13px",
            color: "#8e8e93",
            wordBreak: "break-word",
            lineHeight: 1.6
          },
          children: ["「", q == null ? undefined : q.name, "」有未保存的修改， 切換到「", Z.name, "」前要先處理這些修改。"]
        }), p.jsx("button", {
          onClick: async () => {
            if (!Z || !q) {
              return;
            }
            const e = Z;
            const t = q;
            const n = L;
            const r = v(n);
            if (r.valid) {
              try {
                await I(t.id, t.name, n);
                if ((x == null ? undefined : x.name) === t.name) {
                  await ne(t.name, n);
                }
                ee("success", `已保存「${t.name}」`);
                J(null);
                await te();
                re(e);
              } catch (a) {
                ee("error", "保存失敗");
              }
            } else {
              ee("error", r.error);
            }
          },
          style: {
            width: "100%",
            padding: "13px",
            background: "linear-gradient(135deg, #007aff, #5856d6)",
            border: "none",
            borderRadius: "14px",
            fontSize: "15px",
            fontWeight: 600,
            color: "#fff",
            cursor: "pointer",
            marginBottom: "10px"
          },
          children: "保存並切換"
        }), p.jsxs("div", {
          style: {
            display: "flex",
            gap: "10px"
          },
          children: [p.jsx("button", {
            onClick: () => J(null),
            style: {
              flex: 1,
              padding: "13px",
              background: "#f5f5f7",
              border: "none",
              borderRadius: "14px",
              fontSize: "15px",
              fontWeight: 600,
              color: "#333",
              cursor: "pointer"
            },
            children: "取消"
          }), p.jsx("button", {
            onClick: () => {
              const e = Z;
              J(null);
              if (e) {
                re(e);
              }
            },
            style: {
              flex: 1,
              padding: "13px",
              background: "rgba(255,59,48,0.08)",
              border: "none",
              borderRadius: "14px",
              fontSize: "15px",
              fontWeight: 600,
              color: "#ff3b30",
              cursor: "pointer"
            },
            children: "放棄修改"
          })]
        })]
      })
    }), X && p.jsx("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)"
      },
      onClick: () => Q(null),
      children: p.jsxs("div", {
        style: {
          background: "#fff",
          borderRadius: "20px",
          padding: "28px 24px",
          width: "min(340px, 90vw)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)"
        },
        onClick: e => e.stopPropagation(),
        children: [p.jsx("h3", {
          style: {
            margin: "0 0 6px",
            fontSize: "18px",
            fontWeight: 700
          },
          children: "刪除預設"
        }), p.jsxs("p", {
          style: {
            margin: "0 0 20px",
            fontSize: "13px",
            color: "#8e8e93",
            wordBreak: "break-word"
          },
          children: ["確定要刪除「", X.name || "此預設", "」嗎？此操作無法復原。"]
        }), p.jsxs("div", {
          style: {
            display: "flex",
            gap: "10px"
          },
          children: [p.jsx("button", {
            onClick: () => Q(null),
            style: {
              flex: 1,
              padding: "13px",
              background: "#f5f5f7",
              border: "none",
              borderRadius: "14px",
              fontSize: "15px",
              fontWeight: 600,
              color: "#333",
              cursor: "pointer"
            },
            children: "取消"
          }), p.jsx("button", {
            onClick: async () => {
              if (!X) {
                return;
              }
              const {
                id: e
              } = X;
              Q(null);
              try {
                await T(e);
                if ((q == null ? undefined : q.id) === e) {
                  V(null);
                  O((x == null ? undefined : x.css) || "");
                  P((x == null ? undefined : x.css) ?? null);
                }
                te();
                ee("success", "已刪除主題");
              } catch (t) {
                ee("error", "刪除失敗");
              }
            },
            style: {
              flex: 1,
              padding: "13px",
              background: "linear-gradient(135deg, #ff3b30, #ff6259)",
              border: "none",
              borderRadius: "14px",
              fontSize: "15px",
              fontWeight: 600,
              color: "#fff",
              cursor: "pointer",
              transition: "all 0.2s"
            },
            children: "刪除"
          })]
        })]
      })
    })]
  });
};
function De() {
  const [e, t] = c.useState([]);
  const [n, r] = c.useState([]);
  const [a, o] = c.useState(false);
  const i = c.useCallback(async () => {
    try {
      const e = (await d.getAll()).sort((e, t) => (e.order ?? 999) - (t.order ?? 999));
      t(e);
      const n = [...new Set(e.map(e => e.category).filter(Boolean))];
      r(n);
    } catch (e) {
      console.error("[useQuickReply] loadAll error:", e);
    }
  }, []);
  c.useEffect(() => {
    i();
  }, [i]);
  const s = c.useCallback(async (t, n = "") => {
    if (!(t == null ? undefined : t.trim())) {
      return;
    }
    const r = `qr_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    await d.add({
      id: r,
      text: t.trim(),
      category: n.trim(),
      order: e.length
    });
    await i();
  }, [e.length, i]);
  const l = c.useCallback(async (e, t) => {
    await d.update(e, t);
    await i();
  }, [i]);
  const p = c.useCallback(async e => {
    await d.delete(e);
    await i();
  }, [i]);
  return {
    quickReplies: e,
    categories: n,
    showQuickReplyPanel: a,
    setShowQuickReplyPanel: o,
    addQuickReply: s,
    updateQuickReply: l,
    deleteQuickReply: p,
    reloadQuickReplies: i
  };
}
export { ne as C, ye as E, fe as I, P, me as Q, be as S, D as T, V as a, q as b, B as c, pe as d, J as e, ce as f, K as g, X as h, Q as i, De as j, xe as k, Fe as l, ve as m, Y as o, A as r, F as u };