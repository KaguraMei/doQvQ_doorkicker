const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["./assets/main-BO9xa-SQ.js", "./assets/modulepreload-polyfill-YP0FEG5d.js", "./assets/native-pet-CTNtZgMA.js", "./assets/vendor-react-B2VXkTUV.js", "./assets/vendor-dexie-KLdnSHz2.js", "./assets/vendor-jszip-DU-5YDGO.js", "./assets/vendor-lucide-DBv09HTV.js", "./assets/native-pet-D9YoqRtr.css", "./assets/vendor-supabase-Bcpm_8qV.js", "./assets/main-C4gkqfD0.css", "./assets/NotificationBar-y-kP9VHv.css", "./assets/vendor-fonts-BglBY6By.css"]) => i.map(i => d[i]);
import { r as e, j as t, b as s, R as a } from "./vendor-react-B2VXkTUV.js";
import { a as n, bh as i, V as l, B as r, a5 as o, M as c, a4 as d, _ as u, y as h, G as m, a8 as p, a9 as g, n as x, i as v, t as y, p as f, L as j, bv as b, aj as w, ah as N, I as k, ab as C, Q as S, aw as M, a3 as D, a7 as A, bo as T, c as I, f as E, b as $, g as P } from "./native-pet-CTNtZgMA.js";
import { u as F } from "./useLastSelectedChar-BA2jreMl.js";
import { U as L, V as R, W as O, X as W, Y as z, Z as B } from "./main-BO9xa-SQ.js";
/* empty css                     */
import { x as _, P as U, r as q, X as H, I as Q, K as Y, av as G, aw as K, H as Z, ax as V, aj as J, ay as X, az as ee, T as te, O as se, S as ae, aA as ne, aB as ie, J as le, y as re, D as oe, aC as ce, aD as de, F as ue, aE as he, aF as me, aG as pe, aH as ge, aI as xe, l as ve, h as ye, aJ as fe, U as je, aK as be, a2 as we, aL as Ne, aq as ke, M as Ce, v as Se, aM as Me, aN as De, aO as Ae, aP as Te, aQ as Ie, n as Ee, aR as $e, a9 as Pe, aS as Fe, aT as Le, al as Re, t as Oe, ae as We, Q as ze, aU as Be, aV as _e, w as Ue, aW as qe, aX as He, a8 as Qe, V as Ye, aY as Ge, p as Ke, aZ as Ze, a_ as Ve, at as Je, a$ as Xe, C as et, b0 as tt, b1 as st, b2 as at, b3 as nt, b4 as it, b5 as lt, E as rt, b6 as ot, ac as ct, b7 as dt, b8 as ut, b9 as ht } from "./vendor-lucide-DBv09HTV.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
import "./modulepreload-polyfill-YP0FEG5d.js";
/* empty css                        */
import "./vendor-supabase-Bcpm_8qV.js";
const mt = e => {
  const t = String(e || "").trim();
  if (!t) {
    return [];
  }
  const s = t.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  const a = s ? s[1].trim() : t;
  try {
    const e = JSON.parse(a);
    if (Array.isArray(e)) {
      return e;
    } else {
      return [];
    }
  } catch (n) {
    const e = a.indexOf("[");
    const t = a.lastIndexOf("]");
    if (e === -1 || t === -1 || t <= e) {
      return [];
    }
    try {
      const s = JSON.parse(a.slice(e, t + 1));
      if (Array.isArray(s)) {
        return s;
      } else {
        return [];
      }
    } catch (i) {
      return [];
    }
  }
};
const pt = e => {
  if (!e) {
    return null;
  }
  const t = new Date(e);
  if (Number.isNaN(t.getTime())) {
    return null;
  } else {
    return t.toISOString();
  }
};
const gt = [{
  value: "daily",
  labelKey: "couplesTimelineTagDaily"
}, {
  value: "first",
  labelKey: "couplesTimelineTagFirst"
}, {
  value: "milestone",
  labelKey: "couplesTimelineTagMilestone"
}, {
  value: "dating",
  labelKey: "couplesTimelineTagDating"
}, {
  value: "travel",
  labelKey: "couplesTimelineTagTravel"
}, {
  value: "festival",
  labelKey: "couplesTimelineTagFestival"
}, {
  value: "conflict",
  labelKey: "couplesTimelineTagConflict"
}, {
  value: "reconcile",
  labelKey: "couplesTimelineTagReconcile"
}];
const xt = e => {
  const t = String(e || "").trim().toLowerCase();
  if (t) {
    return {
      日常: "daily",
      daily: "daily",
      初識: "first",
      first: "first",
      里程碑: "milestone",
      milestone: "milestone",
      約會: "dating",
      dating: "dating",
      旅行: "travel",
      travel: "travel",
      節日: "festival",
      festival: "festival",
      爭執: "conflict",
      conflict: "conflict",
      和好: "reconcile",
      reconcile: "reconcile"
    }[t] || t;
  } else {
    return "";
  }
};
const vt = e => String(e || "").split(/\n+|；|;|\|/g).map(e => e.trim()).filter(Boolean);
const yt = e => {
  const t = e instanceof Date ? e : new Date(e);
  if (Number.isNaN(t.getTime())) {
    return "";
  } else {
    return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}T${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}:${String(t.getSeconds()).padStart(2, "0")}`;
  }
};
const ft = e => String(e || "").toLowerCase();
const jt = e => {
  const t = String(e || "").trim();
  if (!t) {
    return "";
  }
  const s = t.match(/img_\d+/i);
  if (s) {
    return s[0].toLowerCase();
  } else {
    return ft(t);
  }
};
const bt = (e, t) => {
  const s = String(e || "").trim();
  const a = String(t || "").trim();
  if (!s || !a) {
    return 0;
  }
  const n = new Set();
  for (let l = 0; l < s.length - 1; l += 1) {
    const e = s.slice(l, l + 2).trim();
    if (e.length === 2 && !/[\s，。！？,.!?]/.test(e)) {
      n.add(e);
    }
  }
  let i = 0;
  n.forEach(e => {
    if (a.includes(e)) {
      i += 1;
    }
  });
  return i;
};
const wt = e => {
  let t = String(e || "").trim();
  if (!t) {
    return "";
  }
  if (t.startsWith("{") && t.endsWith("}") || t.startsWith("[") && t.endsWith("]")) {
    try {
      const e = JSON.parse(t);
      if (Array.isArray(e)) {
        const s = e[0] || {};
        t = String((s == null ? undefined : s.text) || (s == null ? undefined : s.content) || (s == null ? undefined : s.summary) || "").trim() || t;
      } else if (e && typeof e == "object") {
        t = String((e == null ? undefined : e.text) || (e == null ? undefined : e.content) || (e == null ? undefined : e.summary) || (e == null ? undefined : e.description) || (e == null ? undefined : e.message) || "").trim() || t;
      }
    } catch (s) {}
  }
  return t.replace(/```[\s\S]*?```/g, " ").replace(/\[(offline encounter|encounter|special bubble|simulated image)[^\]]*\]/gi, " ").replace(/"[^"]{0,40}"\s*completed\s*:\s*/gi, " ").replace(/(^|\s)(date|time|completed|status)\s*:\s*/gi, " ").replace(/[{}\[\]]/g, " ").replace(/\s*\n\s*/g, " ").replace(/\s{2,}/g, " ").trim().slice(0, 120);
};
const Nt = (e, t = 0) => {
  if (!e || typeof e != "object") {
    return `summary_${t}`;
  }
  if (e.id != null) {
    return `id:${String(e.id)}`;
  }
  const s = String(e.timestamp || e.time || "");
  return `mix:${String(e.source || "online")}:${s}:${String(e.summary || e.content || "").slice(0, 40)}:${t}`;
};
const kt = e => String(e || "").toLowerCase().replace(/[\s\u3000]/g, "").replace(/[，。！？、；：「」『』《》（）()\[\]{}.,!?:;'"\-—~`]/g, "").replace(/[的了著着過过吧呢嗎吗呀啊喔哦呵哈]/g, "").slice(0, 36);
const Ct = (e, t) => {
  const s = Array.isArray(e) ? e : [];
  const a = Math.max(1, Number(t) || 1);
  const n = [];
  for (let i = 0; i < s.length; i += a) {
    n.push(s.slice(i, i + a));
  }
  return n;
};
const St = async ({
  title: e,
  body: t,
  icon: s
}) => {
  if (typeof window != "undefined" && document.hidden) {
    try {
      if (localStorage.getItem("nuojiji_browser_notifications_enabled") === "false") {
        return;
      }
    } catch (a) {}
    try {
      const {
        showNativeNotification: a,
        getNotificationPermission: n,
        requestNotificationPermission: i
      } = await u(async () => {
        const {
          showNativeNotification: e,
          getNotificationPermission: t,
          requestNotificationPermission: s
        } = await import("./main-BO9xa-SQ.js").then(e => e.ci);
        return {
          showNativeNotification: e,
          getNotificationPermission: t,
          requestNotificationPermission: s
        };
      }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
      let l = await n();
      if (l === "default") {
        l = await i();
      }
      if (l !== "granted") {
        return;
      }
      const r = typeof s == "string" && (s.startsWith("data:") || s.startsWith("blob:"));
      await a({
        title: e,
        body: t,
        tag: "timeline-ai-generation",
        icon: r ? "/icon-192.png" : s || "/icon-192.png",
        largeIcon: s || null,
        data: {
          screen: "couples-screen"
        }
      });
    } catch (a) {}
  }
};
async function Mt(e) {
  const t = Array.isArray(e) ? e : [];
  const s = [];
  const a = [];
  for (const l of t) {
    if (typeof l == "string" && l.startsWith("data:image/")) {
      try {
        const e = await i.put(l);
        s.push(e);
      } catch (n) {
        a.push(l);
      }
    } else if (l) {
      a.push(l);
    }
  }
  return {
    images: a,
    imageStoreRefs: s
  };
}
const Dt = ({
  onClose: s,
  couplesData: a,
  saveData: u,
  currentPartner: h,
  currentProfileUser: m
}) => {
  var p;
  var g;
  const {
    t: x,
    language: v
  } = n();
  const [y, f] = e.useState(false);
  const [j, b] = e.useState(false);
  const [w, N] = e.useState(false);
  const [k, C] = e.useState("");
  const [S, M] = e.useState(() => yt(new Date()));
  const [D, A] = e.useState("daily");
  const [T, I] = e.useState([]);
  const [E, $] = e.useState(null);
  const [P, F] = e.useState(() => new Map());
  const [O, W] = e.useState(null);
  const [z, B] = e.useState(null);
  const [Y, G] = e.useState("macro");
  const K = e.useRef(null);
  const Z = e.useRef(null);
  e.useEffect(() => {
    if (!y) {
      return;
    }
    const e = window.visualViewport;
    const t = Z.current;
    if (!e || !t) {
      return;
    }
    const s = () => {
      const s = Math.max(0, window.innerHeight - e.height - e.offsetTop);
      t.style.setProperty("--tls-kb-inset", `${s}px`);
    };
    s();
    e.addEventListener("resize", s);
    e.addEventListener("scroll", s);
    return () => {
      e.removeEventListener("resize", s);
      e.removeEventListener("scroll", s);
      t.style.removeProperty("--tls-kb-inset");
    };
  }, [y]);
  const V = e => {
    setTimeout(() => {
      var t;
      try {
        if ((t = e.target) != null) {
          t.scrollIntoView({
            block: "center",
            behavior: "smooth"
          });
        }
      } catch (s) {}
    }, 280);
  };
  const J = e.useMemo(() => [...(a.logs || [])].sort((e, t) => new Date(t.date) - new Date(e.date)), [a.logs]);
  const X = e.useRef(false);
  e.useEffect(() => {
    if (X.current) {
      return;
    }
    const e = a == null ? undefined : a.logs;
    if (!Array.isArray(e) || e.length === 0) {
      return;
    }
    if (!e.some(e => Array.isArray(e == null ? undefined : e.images) && e.images.some(e => typeof e == "string" && e.startsWith("data:image/")))) {
      X.current = true;
      return;
    }
    X.current = true;
    let t = false;
    (async () => {
      const s = [];
      let n = false;
      for (const a of e) {
        const e = Array.isArray(a == null ? undefined : a.images) ? a.images : [];
        if (!e.some(e => typeof e == "string" && e.startsWith("data:image/"))) {
          s.push(a);
          continue;
        }
        const i = await Mt(e);
        if (t) {
          return;
        }
        if (i.imageStoreRefs.length !== 0 || i.images !== e) {
          s.push({
            ...a,
            images: i.images,
            imageStoreRefs: [...(Array.isArray(a.imageStoreRefs) ? a.imageStoreRefs : []), ...i.imageStoreRefs]
          });
          n = true;
        } else {
          s.push(a);
        }
      }
      if (!t && n) {
        u({
          ...a,
          logs: s
        });
      }
    })();
    return () => {
      t = true;
    };
  }, [((p = a == null ? undefined : a.logs) == null ? undefined : p.length) > 0]);
  e.useEffect(() => {
    let e = false;
    const t = [];
    for (const s of J) {
      const e = Array.isArray(s == null ? undefined : s.imageStoreRefs) ? s.imageStoreRefs : [];
      for (const s of e) {
        if (s != null && !P.has(s)) {
          t.push(s);
        }
      }
    }
    if (t.length !== 0) {
      (async function (e) {
        const t = [...new Set(e.filter(e => e != null))];
        if (t.length === 0) {
          return new Map();
        }
        try {
          const e = await i.bulkGet(t);
          const s = new Map();
          e.forEach(e => {
            if (e) {
              s.set(e.id, e.data);
            }
          });
          return s;
        } catch (s) {
          return new Map();
        }
      })(t).then(t => {
        if (!e && t.size !== 0) {
          F(e => {
            const s = new Map(e);
            for (const [a, n] of t) {
              s.set(a, n);
            }
            return s;
          });
        }
      });
      return () => {
        e = true;
      };
    }
  }, [J, P]);
  const ee = e.useCallback(e => {
    const t = Array.isArray(e == null ? undefined : e.images) ? e.images.filter(e => typeof e == "string" && e.startsWith("data:image/")) : [];
    return [...(Array.isArray(e == null ? undefined : e.imageStoreRefs) ? e.imageStoreRefs : []).map(e => P.get(e)).filter(Boolean), ...t];
  }, [P]);
  const [te, se] = e.useState(() => {
    const e = new Date();
    return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
  });
  const ae = e.useMemo(() => {
    const [e, t, s] = te.split("-");
    return new Date(e, t - 1, s);
  }, [te]);
  const ne = e.useMemo(() => {
    if (Y === "micro") {
      return {
        "Selected Day": J.filter(e => {
          const t = new Date(e.date);
          return t.getFullYear() === ae.getFullYear() && t.getMonth() === ae.getMonth() && t.getDate() === ae.getDate();
        })
      };
    }
    {
      const e = {};
      J.forEach(t => {
        const s = new Date(t.date);
        const a = `${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][s.getMonth()]} ${s.getFullYear()}`;
        e[a] ||= [];
        e[a].push(t);
      });
      return e;
    }
  }, [J, Y, ae]);
  const ie = e => {
    const t = setTimeout(() => {
      W(e);
    }, 650);
    B(t);
  };
  const le = () => {
    if (z) {
      clearTimeout(z);
      B(null);
    }
  };
  const re = e => {
    const t = xt(e);
    const s = gt.find(e => e.value === t);
    if (s) {
      return x(s.labelKey);
    } else {
      return e || x("couplesTimelineTagDaily");
    }
  };
  return t.jsxs("div", {
    ref: Z,
    className: "tls-container " + (Y === "micro" ? "tls-mode-diary" : "tls-mode-journey"),
    children: [t.jsxs("div", {
      className: "tls-header",
      children: [t.jsx("button", {
        className: "tls-back-btn",
        onClick: s,
        children: t.jsx(_, {
          size: 20,
          strokeWidth: 1.8
        })
      }), t.jsxs("div", {
        className: "tls-view-toggle",
        children: [t.jsx("button", {
          className: Y === "macro" ? "active" : "",
          onClick: () => G("macro"),
          children: x("couplesTimelineJourney")
        }), t.jsx("button", {
          className: Y === "micro" ? "active" : "",
          onClick: () => G("micro"),
          children: x("couplesTimelineHandbook")
        })]
      }), t.jsx("div", {
        style: {
          width: 36
        }
      })]
    }), Y === "micro" && t.jsxs("div", {
      className: "tls-date-selector",
      children: [t.jsx("button", {
        className: "tls-date-nav-btn",
        onClick: () => {
          const e = new Date(ae);
          e.setDate(e.getDate() - 1);
          const t = e.getFullYear();
          const s = String(e.getMonth() + 1).padStart(2, "0");
          const a = String(e.getDate()).padStart(2, "0");
          se(`${t}-${s}-${a}`);
        },
        children: t.jsx(_, {
          size: 16,
          strokeWidth: 2
        })
      }), t.jsxs("div", {
        className: "tls-date-picker-wrapper",
        children: [t.jsx("span", {
          className: "tls-date-display",
          children: (oe = ae, `${oe.getFullYear()}. ${String(oe.getMonth() + 1).padStart(2, "0")}. ${String(oe.getDate()).padStart(2, "0")}. (${["日", "一", "二", "三", "四", "五", "六"][oe.getDay()]})`)
        }), t.jsx("input", {
          type: "date",
          className: "tls-native-date-input",
          value: te,
          onChange: e => {
            if (e.target.value) {
              se(e.target.value);
            }
          }
        })]
      }), t.jsx("button", {
        className: "tls-date-nav-btn",
        onClick: () => {
          const e = new Date(ae);
          e.setDate(e.getDate() + 1);
          const t = e.getFullYear();
          const s = String(e.getMonth() + 1).padStart(2, "0");
          const a = String(e.getDate()).padStart(2, "0");
          se(`${t}-${s}-${a}`);
        },
        children: t.jsx(_, {
          size: 16,
          strokeWidth: 2,
          style: {
            transform: "rotate(180deg)"
          }
        })
      })]
    }), t.jsxs("div", {
      className: "tls-content",
      children: [Y === "macro" && t.jsxs("div", {
        className: "tls-hero",
        children: [t.jsx("span", {
          className: "tls-hero-label",
          children: "OUR STORY"
        }), t.jsx("h1", {
          className: "tls-hero-title",
          children: "Love & All the Little Things"
        }), t.jsx("p", {
          className: "tls-hero-sub",
          children: x("couplesTimelineHeroSub")
        })]
      }), Y === "micro" && t.jsxs("div", {
        className: "tls-micro-hero",
        children: [t.jsx("span", {
          className: "tls-micro-day",
          children: String(ae.getDate()).padStart(2, "0")
        }), t.jsxs("div", {
          className: "tls-micro-meta",
          children: [t.jsx("span", {
            className: "tls-micro-month",
            children: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][ae.getMonth()]
          }), t.jsx("span", {
            className: "tls-micro-year",
            children: ae.getFullYear()
          })]
        })]
      }), Object.keys(ne).length === 0 || Object.keys(ne).length === 1 && ((g = ne["Selected Day"]) == null ? undefined : g.length) === 0 ? t.jsxs("div", {
        className: "tls-empty",
        children: [t.jsx("p", {
          children: x("couplesTimelineEmpty")
        }), t.jsx("span", {
          children: x("couplesTimelineEmptyHint")
        })]
      }) : Object.entries(ne).map(([e, s]) => t.jsxs("div", {
        className: "tls-month-group",
        children: [Y === "macro" && t.jsx("div", {
          className: "tls-month-divider",
          children: t.jsx("span", {
            className: "tls-month-label",
            children: e
          })
        }), s.map((e, a) => {
          const n = new Date(e.date);
          const i = `${String(n.getHours()).padStart(2, "0")}:${String(n.getMinutes()).padStart(2, "0")}:${String(n.getSeconds()).padStart(2, "0")}`;
          const l = (e => e instanceof Date && !Number.isNaN(e.getTime()) ? `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")} ${String(e.getHours()).padStart(2, "0")}:${String(e.getMinutes()).padStart(2, "0")}:${String(e.getSeconds()).padStart(2, "0")}` : "")(n);
          const r = ee(e).slice(0, 6);
          const o = (e => String((e == null ? undefined : e.replyFrom) || "").toLowerCase() === "user" ? {
            name: (m == null ? undefined : m.name) || (m == null ? undefined : m.nickname) || x("couplesTimelineYou"),
            avatar: (m == null ? undefined : m.avatar) || ""
          } : {
            name: (h == null ? undefined : h.name) || "TA",
            avatar: (h == null ? undefined : h.avatar) || (h == null ? undefined : h.image) || ""
          })(e);
          return t.jsxs("div", {
            className: "tls-item",
            onTouchStart: () => ie(e),
            onTouchEnd: le,
            onTouchMove: le,
            onMouseDown: () => ie(e),
            onMouseUp: le,
            onMouseLeave: le,
            children: [t.jsx("div", {
              className: "tls-item-line",
              children: t.jsx("div", {
                className: "tls-item-dot"
              })
            }), t.jsxs("div", {
              className: "tls-item-card",
              children: [t.jsxs("div", {
                className: "tls-item-meta",
                children: [t.jsx("span", {
                  className: "tls-item-day",
                  children: String(n.getDate()).padStart(2, "0")
                }), t.jsx("span", {
                  className: "tls-item-time",
                  children: i
                }), t.jsx("span", {
                  className: "tls-item-tag",
                  children: re(e.tag || (a === s.length - 1 && Y === "macro" ? "first" : "daily"))
                })]
              }), t.jsx("div", {
                className: "tls-item-datetime",
                children: l
              }), t.jsx("p", {
                className: "tls-item-body",
                children: e.content
              }), r.length > 0 && t.jsx("div", {
                className: "tls-item-images",
                children: r.map((s, a) => t.jsx("img", {
                  decoding: "async",
                  src: s,
                  alt: "",
                  className: "tls-item-image"
                }, `${e.id}_img_${a}`))
              }), e.reply && t.jsxs("div", {
                className: "tls-reply",
                children: [t.jsx("img", {
                  decoding: "async",
                  className: "tls-reply-avatar",
                  src: o.avatar || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23E8DFD8'/%3E%3Ctext x='50' y='65' font-size='50' text-anchor='middle' fill='%23999'%3E👤%3C/text%3E%3C/svg%3E",
                  alt: ""
                }), t.jsxs("div", {
                  className: "tls-reply-body",
                  children: [t.jsx("span", {
                    className: "tls-reply-name",
                    children: o.name
                  }), t.jsx("p", {
                    children: e.reply
                  })]
                })]
              })]
            })]
          }, e.id);
        })]
      }, e))]
    }), t.jsx("button", {
      className: "tls-fab",
      onClick: () => b(true),
      children: t.jsx(U, {
        size: 28,
        strokeWidth: 2
      })
    }), j && t.jsx("div", {
      className: "tls-modal-overlay",
      onClick: () => b(false),
      children: t.jsxs("div", {
        className: "tls-add-menu",
        onClick: e => e.stopPropagation(),
        children: [t.jsxs("button", {
          className: "tls-add-menu-btn",
          onClick: () => {
            (() => {
              b(false);
              const e = new Date();
              if (Y === "micro") {
                const t = new Date(ae);
                t.setHours(e.getHours(), e.getMinutes(), e.getSeconds());
                M(yt(t));
              } else {
                M(yt(e));
              }
              A("daily");
              C("");
              I([]);
              $(null);
              f(true);
            })();
          },
          children: [t.jsx(U, {
            size: 16,
            strokeWidth: 2.2
          }), x("couplesTimelineAddManual")]
        }), t.jsxs("button", {
          className: "tls-add-menu-btn ai",
          onClick: async () => {
            var e;
            var t;
            var s;
            var n;
            var i;
            var p;
            var g;
            var y;
            var f;
            var j;
            var k;
            if (w) {
              return;
            }
            const C = String((m == null ? undefined : m.uid) || (m == null ? undefined : m.id) || "");
            const S = String((h == null ? undefined : h.id) || "");
            if (C) {
              if (S) {
                b(false);
                try {
                  const [b, w, M, D] = await Promise.all([l.get(C, S), r.get(C, S), o.getAll(), c.getByPair(C, S)]);
                  const A = (a == null ? undefined : a.timelineAiMeta) || {};
                  const T = new Set(Array.isArray(A == null ? undefined : A.manualProcessedKeys) ? A.manualProcessedKeys : []);
                  const I = pt(A == null ? undefined : A.processedMessageTs);
                  const E = (Array.isArray(b == null ? undefined : b.summaryHistory) ? b.summaryHistory : []).filter(e => e && typeof e == "object").filter(e => !(e == null ? undefined : e.syncedFromAlt) && !(e == null ? undefined : e.messagesDeleted)).map((e, t) => ({
                    ...e,
                    __key: Nt(e, t)
                  }));
                  const $ = E.filter(e => !T.has(e.__key));
                  const P = E.reduce((e, t) => {
                    const s = Number(t == null ? undefined : t.lastMessageIndex);
                    if (Number.isFinite(s)) {
                      return Math.max(e, s);
                    } else {
                      return e;
                    }
                  }, 0);
                  const F = (D || []).slice().sort((e, t) => new Date((e == null ? undefined : e.timestamp) || 0) - new Date((t == null ? undefined : t.timestamp) || 0));
                  const L = Math.max(0, Math.min(P, F.length));
                  const R = F.slice(L).filter(e => {
                    if (e == null ? undefined : e.hiddenByUser) {
                      return false;
                    }
                    if (!I) {
                      return true;
                    }
                    const t = pt(e == null ? undefined : e.timestamp);
                    return !t || new Date(t).getTime() > new Date(I).getTime();
                  });
                  const O = 250;
                  const W = 80;
                  const z = Math.max(1, Math.ceil(R.length / O));
                  const B = Math.max(1, Math.ceil($.length / W));
                  const _ = Math.min(6, Math.max(z, B, 1));
                  if (!window.confirm(x("couplesTimelineAiBatchConfirm").replace("{n}", String(_)))) {
                    return;
                  }
                  N(true);
                  const U = (h == null ? undefined : h.worldBook) ? Array.isArray(h.worldBook) ? h.worldBook : [h.worldBook] : [];
                  const q = (M || []).filter(e => (e == null ? undefined : e.isGlobal) === true || (e == null ? undefined : e.isGlobal) === "true" || U.some(t => String(t) === String(e == null ? undefined : e.id))).flatMap(e => (e => (Array.isArray(e == null ? undefined : e.entries) ? e.entries : (e == null ? undefined : e.entries) && typeof e.entries == "object" ? Object.values(e.entries) : []).map(e => {
                    const t = typeof e == "string" ? e : (e == null ? undefined : e.content) || (e == null ? undefined : e.text) || (e == null ? undefined : e.description) || "";
                    return {
                      title: (e == null ? undefined : e.title) || (e == null ? undefined : e.name) || "",
                      content: String(t || "").trim()
                    };
                  }).filter(e => e.content))(e).map(t => ({
                    bookTitle: (e == null ? undefined : e.title) || (e == null ? undefined : e.name) || "WorldBook",
                    title: t.title,
                    content: t.content.slice(0, 700)
                  }))).slice(0, 100);
                  const H = (a.logs || []).slice(0, 240).map(e => ({
                    date: e == null ? undefined : e.date,
                    content: e == null ? undefined : e.content,
                    tag: (e == null ? undefined : e.tag) || ""
                  }));
                  const Q = (a.qa || []).slice(0, 120).map(e => ({
                    date: e == null ? undefined : e.date,
                    question: (e == null ? undefined : e.question) || "",
                    userAnswer: (e == null ? undefined : e.userAnswer) || "",
                    charAnswer: (e == null ? undefined : e.charAnswer) || ""
                  }));
                  const Y = (a.wishes || []).slice(0, 120).map(e => ({
                    createdAt: (e == null ? undefined : e.createdAt) || (e == null ? undefined : e.date) || null,
                    text: (e == null ? undefined : e.text) || (e == null ? undefined : e.content) || (e == null ? undefined : e.title) || "",
                    done: !!(e == null ? undefined : e.done)
                  }));
                  const G = (a.anniversaries || []).slice(0, 120).map(e => ({
                    date: e == null ? undefined : e.date,
                    title: (e == null ? undefined : e.title) || (e == null ? undefined : e.name) || "",
                    note: (e == null ? undefined : e.note) || ""
                  }));
                  const K = $.slice().sort((e, t) => new Date((e == null ? undefined : e.timestamp) || (e == null ? undefined : e.time) || 0) - new Date((t == null ? undefined : t.timestamp) || (t == null ? undefined : t.time) || 0));
                  const Z = _ > 1 ? Ct(K, Math.ceil(Math.max(K.length, 1) / _)) : [K];
                  const V = _ > 1 ? Ct(R, Math.ceil(Math.max(R.length, 1) / _)) : [R];
                  const J = new Set((a.logs || []).map(e => `${(pt(e == null ? undefined : e.date) || "").slice(0, 10)}|${kt(e == null ? undefined : e.content)}`));
                  const X = new Set();
                  const ee = new Set();
                  const te = [];
                  const se = new Set();
                  for (let a = 0; a < _; a += 1) {
                    const l = Z[a] || [];
                    const r = l.map(e => ({
                      key: e.__key,
                      timestamp: (e == null ? undefined : e.timestamp) || (e == null ? undefined : e.time) || null,
                      source: (e == null ? undefined : e.source) || "",
                      summary: String((e == null ? undefined : e.summary) || (e == null ? undefined : e.content) || "").slice(0, 520),
                      dateRange: (e == null ? undefined : e.dateRange) || null,
                      lastMessageIndex: Number(e == null ? undefined : e.lastMessageIndex) || null,
                      messageCount: Number(e == null ? undefined : e.messageCount) || null
                    })).filter(e => e.summary);
                    const o = V[a] || [];
                    const c = o.map(e => ({
                      sender: (e == null ? undefined : e.sender) === "me" ? "user" : "char",
                      text: String((e == null ? undefined : e.text) || (e == null ? undefined : e.content) || (e == null ? undefined : e.imageSummary) || (e == null ? undefined : e.simulatedImageContent) || "").slice(0, 360),
                      timestamp: (e == null ? undefined : e.timestamp) || null
                    })).filter(e => e.text);
                    const u = c.slice(-160);
                    const x = o.length > 0 ? pt((e = o[0]) == null ? undefined : e.timestamp) : null;
                    const N = o.length > 0 ? pt((t = o[o.length - 1]) == null ? undefined : t.timestamp) : null;
                    const k = l.length > 0 ? pt(((s = l[0]) == null ? undefined : s.timestamp) || ((n = l[0]) == null ? undefined : n.time) || ((p = (i = l[0]) == null ? undefined : i.dateRange) == null ? undefined : p.start)) : null;
                    const C = l.length > 0 ? pt(((g = l[l.length - 1]) == null ? undefined : g.timestamp) || ((y = l[l.length - 1]) == null ? undefined : y.time) || ((j = (f = l[l.length - 1]) == null ? undefined : f.dateRange) == null ? undefined : j.end)) : null;
                    const M = [x, k].filter(Boolean).sort()[0] || null;
                    const D = [N, C].filter(Boolean).sort().pop() || null;
                    if (r.length === 0 && c.length === 0 && a > 0) {
                      continue;
                    }
                    const A = o.filter(e => !!(e == null ? undefined : e.image)).slice(-100).map((e, t) => ({
                      id: `img_${t + 1}`,
                      sender: (e == null ? undefined : e.sender) === "me" ? "user" : "char",
                      timestamp: (e == null ? undefined : e.timestamp) || null,
                      text: String((e == null ? undefined : e.text) || "").slice(0, 120),
                      imageSummary: String((e == null ? undefined : e.imageSummary) || "").slice(0, 260),
                      image: e == null ? undefined : e.image
                    }));
                    const T = new Map(A.map(e => [ft(e.id), e.image]).filter(([, e]) => !!e));
                    const I = A.map(e => ({
                      date: pt(e.timestamp),
                      image: e.image,
                      sender: e.sender,
                      context: `${e.text || ""} ${e.imageSummary || ""}`.trim()
                    })).filter(e => !!e.image);
                    const E = o.map(e => ({
                      sender: (e == null ? undefined : e.sender) === "me" ? "user" : "char",
                      text: wt(String((e == null ? undefined : e.text) || (e == null ? undefined : e.content) || (e == null ? undefined : e.imageSummary) || (e == null ? undefined : e.simulatedImageContent) || "").slice(0, 360)),
                      date: pt(e == null ? undefined : e.timestamp)
                    })).filter(e => !!e.text);
                    const $ = v === "en" ? "English" : v === "zh_cn" ? "Simplified Chinese (简体中文)" : "Traditional Chinese (繁體中文)";
                    const P = M && D ? `Batch time range: ${M} ~ ${D}. ${o.length} raw messages + ${r.length} summary entries in this batch. Generate events across the entire time range, covering both summaryHistory and raw messages.` : "No explicit time range for this batch. Try to backfill from summaryHistory.";
                    const F = (m == null ? undefined : m.name) || (m == null ? undefined : m.nickname) || "You";
                    const L = (h == null ? undefined : h.name) || "TA";
                    const R = String((h == null ? undefined : h.description) || (h == null ? undefined : h.personality) || (h == null ? undefined : h.intro) || "").trim();
                    const O = String((h == null ? undefined : h.gender) || "").trim();
                    const W = R ? `Diary owner persona / bio (this is the CHARACTER's voice — "I" = ${L}; match their personality, speech style, gender, quirks): ${R.slice(0, 600)}` : `Diary owner persona: (no explicit bio — infer ${L}'s voice from how they speak in unsummarizedMessages and summaryHistory; stay strictly in first-person as the character.)`;
                    const z = O ? `Diary owner gender: ${O} — choose pronouns for the user accordingly when needed.` : "";
                    const B = String((w == null ? undefined : w.relationship) || "").trim().slice(0, 200);
                    const U = String((w == null ? undefined : w.charToUserRelationship) || "").trim().slice(0, 200);
                    const K = [];
                    if (B) {
                      K.push(`- How "${F}" sees "${L}": ${B}`);
                    }
                    if (U) {
                      K.push(`- How "${L}" sees "${F}": ${U}`);
                    }
                    const ae = K.length > 0 ? `RELATIONSHIP between the two (CRITICAL — this dictates the diary tone, the way "I" (the character) addresses the user, and the emotional baseline. NEVER write them as a generic couple if a specific relationship is given):\n${K.join("\n")}\n(Examples: "fiancé/未婚夫" → possessive intimacy with future-ready vows; "childhood friend/青梅竹马" → comfortable teasing and old habits; "secret crush/暗戀" → the character's heart racing but unable to confess; "frenemies/欢喜冤家" → snarky surface, soft underneath. Match the actual relationship line above, do NOT default to plain dating.)` : "";
                    const ne = [`You are the "Character's Private Love Journal Ghostwriter". You write SHORT FIRST-PERSON DIARY ENTRIES from the CHARACTER's point of view about their feelings toward the user — like the character's own private love diary, NOT a third-person novel or screenplay narration. The "I" in every entry IS ${L}, the character.`, `This is a batched backfill, batch ${a + 1}/${_}.`, P, `Character (the diary owner / "I"): ${L}`, W, z, `User (the loved one — referred to as "他" / "她" / "你" or occasionally by name): ${F}`, ae, "Task: based on the character persona, world book, chat memory and existing data, output a JSON array of diary entries the CHARACTER would secretly write about the user.", "Output ONLY a JSON array, no other text.", "Each item shape:", "{\"date\":\"ISO8601\",\"content\":\"diary line\",\"reply\":\"optional original chat line\",\"replyFrom\":\"user|char\",\"tag\":\"first|daily|milestone|dating|travel|festival|conflict|reconcile\",\"imageRefs\":[\"img_1\"]}", "Rules:", "1) Produce 10~20 items per batch, ordered oldest to newest. If this batch is dense, aim closer to 20.", "2) Prefer integrating summaryHistory (which may include online / tm / group sources), then use unsummarizedMessages to fill segments that have no summary.", "3) date MUST be a valid ISO8601 timestamp accurate to the second, and MUST fall inside the batch time range.", `4) content MUST be written in ${$}, in FIRST PERSON from the CHARACTER's perspective. Use "我" / "I" as ${L}. Refer to the user as "他"/"她"/"你" (or by name occasionally), NEVER as a third-person novel character, and NEVER from the user's perspective. Length: roughly 25~90 characters in CJK, or 40~140 characters in English. Examples of the right voice (these are the CHARACTER writing about the user):`, "   - 「她今天又被我逗到红了脸，明明只是随口一句，怎么我自己心也跟着乱了一下。」", "   - 「我装作不在意地把外套披在他身上，他抬头看我的那一秒，我差点就守不住表情。」", "   - 「她又叫我坏蛋，可那语气分明是在撒娇，我假装生气，心里却已经笑出声了。」", "   Examples of the WRONG voice (do NOT do this):", "   - 「今天他突然送了我一个小礼物⋯⋯」(this is the USER's voice, WRONG — must be the character's voice)", "   - 「面对突如其来的索礼，他露出宠溺的笑容...」(third-person novel, WRONG)", "   - 「在灯光暧昧的总统套房里，他松开领带...」(screenplay narration, WRONG)", "5) One event per item; if multiple things happen close together, split into separate diary entries with separate timestamps.", "6) Do NOT duplicate anything in existingLogs.", "7) For every item, try to attach the closest matching original chat line as reply/replyFrom. Prefer the user's line that triggered the character's feeling (since this is the character's diary about the user), but the character's own line is acceptable when more relevant. Whenever recentImageMessages has a roughly matching time or scene, you MUST fill imageRefs.", "8) Absolutely no Markdown, no comments, no prefix/suffix, no \"Dear Diary\" headers.", "9) Never jump to a date outside the batch time range.", `10) Tone: from the character's inner world — possessiveness, tenderness, teasing, hidden softness, racing heartbeat, reluctant admission of feelings. The kind of lines THIS character would scribble in private, never something a generic narrator would write. Reply text, when present, must also be in ${$} and stay as the original speaker's voice.`, `11) The "I" voice MUST match ${L}'s persona above. If the character is a cold/aloof CEO type, write small cracks of softness leaking through. If playful and teasing, write smug satisfaction at making the user blush. If shy/reserved, write trembling restraint and unspoken longing. Never make "I" sound like a generic narrator — it must read like THIS specific character's private confession.`].filter(Boolean).join("\n");
                    const ie = {
                      now: new Date().toISOString(),
                      batch: {
                        index: a + 1,
                        total: _
                      },
                      profileUser: {
                        name: (m == null ? undefined : m.name) || (m == null ? undefined : m.nickname) || "User",
                        intro: (m == null ? undefined : m.intro) || (m == null ? undefined : m.signature) || "",
                        gender: (m == null ? undefined : m.gender) || "",
                        birthday: (m == null ? undefined : m.birthday) || "",
                        hobbies: Array.isArray(m == null ? undefined : m.hobbies) ? m.hobbies : []
                      },
                      character: {
                        id: S,
                        name: (h == null ? undefined : h.name) || "TA",
                        persona: {
                          description: (h == null ? undefined : h.description) || "",
                          personality: (h == null ? undefined : h.personality) || "",
                          intro: (h == null ? undefined : h.intro) || ""
                        },
                        relationship: {
                          userToChar: (w == null ? undefined : w.relationship) || "",
                          charToUser: (w == null ? undefined : w.charToUserRelationship) || ""
                        }
                      },
                      worldBooks: q,
                      memory: {
                        episodeSummary: (b == null ? undefined : b.episodeSummary) || "",
                        userFacts: (b == null ? undefined : b.userFacts) || [],
                        summaryHistory: r
                      },
                      unsummarizedMessages: c,
                      recentMessages: u,
                      batchTimeRange: M || D ? {
                        start: M,
                        end: D
                      } : null,
                      recentImageMessages: A.map(({
                        image: e,
                        ...t
                      }) => t),
                      couplesData: {
                        existingLogs: H,
                        qaHistory: Q,
                        wishHistory: Y,
                        anniversaryHistory: G
                      }
                    };
                    const le = await d({
                      messages: [{
                        role: "system",
                        content: ne
                      }, {
                        role: "user",
                        content: JSON.stringify(ie)
                      }],
                      preferStreaming: false
                    });
                    const re = mt(le);
                    if (!re.length) {
                      continue;
                    }
                    r.forEach(e => {
                      if (e == null ? undefined : e.key) {
                        se.add(e.key);
                      }
                    });
                    const oe = re.flatMap((e, t) => {
                      const s = pt(e == null ? undefined : e.date) || new Date(Date.now() - (re.length - t) * 3600 * 1000).toISOString();
                      const n = new Date(s);
                      return vt((e == null ? undefined : e.content) || "").map((s, i) => {
                        var l;
                        const r = new Date(n.getTime() + i * 1000).toISOString();
                        const o = String(s || "").trim();
                        const c = wt((e == null ? undefined : e.reply) || "");
                        const d = String((e == null ? undefined : e.replyFrom) || "").trim().toLowerCase();
                        let u = c;
                        let h = d === "user" ? "user" : "char";
                        if (!u) {
                          const e = new Date(r).getTime();
                          const t = E.map(t => {
                            const s = t.date ? new Date(t.date).getTime() : e;
                            const a = Math.abs(s - e);
                            const n = bt(o, t.text);
                            return {
                              candidate: t,
                              score: n * 1000 - a / 1000,
                              delta: a,
                              overlap: n
                            };
                          }).filter(e => e.overlap > 0).sort((e, t) => t.score - e.score).find(e => {
                            var t;
                            const s = String(((t = e.candidate) == null ? undefined : t.text) || "").slice(0, 64);
                            return s && !ee.has(s);
                          });
                          if ((l = t == null ? undefined : t.candidate) == null ? undefined : l.text) {
                            u = wt(t.candidate.text);
                            h = t.candidate.sender === "user" ? "user" : "char";
                            ee.add(String(t.candidate.text).slice(0, 64));
                          }
                        }
                        const m = Array.isArray(e == null ? undefined : e.imageRefs) ? e.imageRefs.map(e => T.get(jt(e))).filter(Boolean).slice(0, 6) : [];
                        let p = [];
                        if (m.length === 0) {
                          const e = new Date(r).getTime();
                          const t = I.map(t => {
                            const s = t.date ? new Date(t.date).getTime() : e;
                            const a = Math.abs(s - e);
                            const n = bt(`${o} ${u}`, t.context || "");
                            const i = n * 1000 + (h === t.sender ? 2 : 0) * 100 - a / 1000;
                            return {
                              ...t,
                              delta: a,
                              overlap: n,
                              score: i
                            };
                          }).filter(e => e.overlap >= 2 || e.overlap >= 1 && e.delta <= 21600000 || e.delta <= 3600000).sort((e, t) => t.score - e.score);
                          if (t.length > 0) {
                            const e = t.find(e => {
                              const t = String(e.image || "").slice(0, 64);
                              return t && !X.has(t);
                            });
                            if (e == null ? undefined : e.image) {
                              p = [e.image];
                              X.add(String(e.image).slice(0, 64));
                            }
                          }
                        }
                        return {
                          id: `${Date.now()}_${a}_${t}_${i}_${Math.random().toString(36).slice(2, 8)}`,
                          date: r,
                          content: o,
                          reply: wt(u) || null,
                          replyFrom: h,
                          tag: xt(e == null ? undefined : e.tag) || "daily",
                          images: m.length > 0 ? m : p,
                          source: "ai_timeline_backfill"
                        };
                      });
                    }).filter(Boolean).filter(e => {
                      const t = `${e.date.slice(0, 10)}|${kt(e.content)}`;
                      return !J.has(t) && (J.add(t), true);
                    }).sort((e, t) => new Date(e.date) - new Date(t.date));
                    te.push(...oe);
                  }
                  const ae = R.length > 0 ? pt((k = R[R.length - 1]) == null ? undefined : k.timestamp) : I;
                  const ne = {
                    manualProcessedKeys: Array.from(new Set([...(Array.isArray(A == null ? undefined : A.manualProcessedKeys) ? A.manualProcessedKeys : []), ...Array.from(se)])).slice(-2000),
                    processedMessageTs: ae || I || null,
                    lastRunAt: new Date().toISOString()
                  };
                  if (!te.length) {
                    u({
                      ...a,
                      timelineAiMeta: ne
                    });
                    window.alert(x("couplesTimelineAiNoNew"));
                    return;
                  }
                  const ie = [];
                  for (const e of te) {
                    const t = await Mt(e.images);
                    ie.push({
                      ...e,
                      images: t.images,
                      imageStoreRefs: t.imageStoreRefs
                    });
                  }
                  u({
                    ...a,
                    logs: [...ie, ...(a.logs || [])],
                    timelineAiMeta: ne
                  });
                  window.alert(x("couplesTimelineAiSuccess").replace("{n}", te.length));
                  St({
                    title: x("couplesTimelineAddAi"),
                    body: x("couplesTimelineAiSuccess").replace("{n}", te.length),
                    icon: (h == null ? undefined : h.avatar) || (h == null ? undefined : h.image) || "/icon-192.png"
                  });
                } catch (M) {
                  const e = String((M == null ? undefined : M.message) || "unknown error");
                  window.alert(x("couplesTimelineAiFailed").replace("{msg}", e));
                  St({
                    title: x("couplesTimelineAddAi"),
                    body: x("couplesTimelineAiFailed").replace("{msg}", e),
                    icon: (h == null ? undefined : h.avatar) || (h == null ? undefined : h.image) || "/icon-192.png"
                  });
                } finally {
                  N(false);
                }
              } else {
                window.alert(x("couplesTimelineAiNoPartner"));
              }
            } else {
              window.alert(x("couplesTimelineAiNoProfile"));
            }
          },
          disabled: w,
          children: [t.jsx(q, {
            size: 16,
            strokeWidth: 2.2
          }), x("couplesTimelineAddAi")]
        }), t.jsx("button", {
          className: "tls-add-menu-btn danger",
          onClick: () => {
            if (window.confirm(x("couplesTimelineDeleteAllConfirm"))) {
              const e = (a.logs || []).flatMap(e => Array.isArray(e == null ? undefined : e.imageStoreRefs) ? e.imageStoreRefs : []);
              u({
                ...a,
                logs: [],
                timelineAiMeta: null
              });
              if (e.length > 0) {
                i.bulkDelete(e).catch(() => {});
              }
            }
            b(false);
          },
          children: x("couplesTimelineDeleteAll")
        })]
      })
    }), y && t.jsx("div", {
      className: "tls-modal-overlay",
      onClick: () => f(false),
      children: t.jsxs("div", {
        className: "tls-modal-content",
        onClick: e => e.stopPropagation(),
        children: [t.jsxs("div", {
          className: "tls-modal-header",
          children: [t.jsx("h3", {
            children: x(E ? "couplesTimelineEditTitle" : "couplesTimelineWriteTitle")
          }), t.jsx("button", {
            onClick: () => f(false),
            children: x("couplesTimelineCancel")
          })]
        }), t.jsxs("div", {
          className: "tls-datetime-row",
          children: [t.jsx("span", {
            className: "tls-datetime-label",
            children: x("couplesTimelineDateTime")
          }), t.jsx("input", {
            type: "datetime-local",
            step: "1",
            className: "tls-datetime-input",
            value: S,
            onChange: e => M(e.target.value),
            onFocus: V
          })]
        }), t.jsxs("div", {
          className: "tls-tag-row",
          children: [t.jsx("span", {
            className: "tls-datetime-label",
            children: x("couplesTimelineTagChoose")
          }), t.jsx("select", {
            className: "tls-tag-select",
            value: D,
            onChange: e => A(e.target.value),
            children: gt.map(e => t.jsx("option", {
              value: e.value,
              children: x(e.labelKey)
            }, e.value))
          })]
        }), t.jsx("textarea", {
          className: "tls-textarea",
          placeholder: x("couplesTimelineEventPh"),
          value: k,
          onChange: e => C(e.target.value),
          onFocus: V,
          autoFocus: true
        }), T.length > 0 && t.jsx("div", {
          className: "tls-upload-preview-grid",
          children: T.map((e, s) => t.jsxs("div", {
            className: "tls-upload-preview-item",
            children: [t.jsx("img", {
              decoding: "async",
              src: e,
              alt: ""
            }), t.jsx("button", {
              className: "tls-upload-remove",
              onClick: () => I(e => e.filter((e, t) => t !== s)),
              children: t.jsx(H, {
                size: 12,
                strokeWidth: 2.3
              })
            })]
          }, `preview_${s}`))
        }), t.jsxs("div", {
          className: "tls-modal-tools",
          children: [t.jsxs("div", {
            className: "tls-tool-icons",
            children: [t.jsx("button", {
              className: "tls-tool-btn",
              onClick: () => {
                var e;
                if ((e = K.current) == null) {
                  return undefined;
                } else {
                  return e.click();
                }
              },
              children: t.jsx(Q, {
                size: 20,
                strokeWidth: 1.5
              })
            }), t.jsx("input", {
              ref: K,
              type: "file",
              accept: "image/*",
              multiple: true,
              onChange: async e => {
                const t = Array.from(e.target.files || []);
                if (!t.length) {
                  return;
                }
                const s = Math.max(0, 3 - T.length);
                const a = t.slice(0, s);
                try {
                  const e = [];
                  for (const t of a) {
                    const s = await L(t, {
                      maxSizeMB: 0.4,
                      maxWidthOrHeight: 960,
                      fileType: "image/webp"
                    });
                    const a = await R(s);
                    if (a) {
                      e.push(a);
                    }
                  }
                  I(t => [...t, ...e].slice(0, 3));
                  if (t.length > s) {
                    window.alert(x("couplesTimelineImageLimit").replace("{n}", 3));
                  }
                } catch (n) {
                  window.alert(x("couplesTimelineImageUploadFail"));
                } finally {
                  if (e.target) {
                    e.target.value = "";
                  }
                }
              },
              style: {
                display: "none"
              }
            }), t.jsx("span", {
              className: "tls-upload-note",
              children: x("couplesTimelineUploadImage")
            })]
          }), t.jsx("button", {
            className: "tls-btn-submit",
            onClick: async () => {
              const e = vt(k);
              if (!e.length) {
                return;
              }
              let t = S ? new Date(S) : new Date();
              if (Number.isNaN(t.getTime())) {
                t = new Date();
              }
              const s = await Mt(T.slice(0, 3));
              if (E) {
                const n = (a.logs || []).find(e => e.id === E);
                const l = Array.isArray(n == null ? undefined : n.imageStoreRefs) ? n.imageStoreRefs : [];
                const r = (a.logs || []).map(a => a.id !== E ? a : {
                  ...a,
                  date: t.toISOString(),
                  content: e[0],
                  tag: D || "daily",
                  images: s.images,
                  imageStoreRefs: s.imageStoreRefs
                });
                u({
                  ...a,
                  logs: r
                });
                if (l.length > 0) {
                  i.bulkDelete(l).catch(() => {});
                }
                C("");
                I([]);
                $(null);
                f(false);
                return;
              }
              const n = e.map((e, a) => ({
                id: `${Date.now()}_${a}_${Math.random().toString(36).slice(2, 8)}`,
                date: new Date(t.getTime() + a * 1000).toISOString(),
                content: e,
                reply: null,
                tag: D || "daily",
                images: a === 0 ? s.images : [],
                imageStoreRefs: a === 0 ? s.imageStoreRefs : []
              }));
              u({
                ...a,
                logs: [...n, ...(a.logs || [])]
              });
              C("");
              I([]);
              f(false);
            },
            children: x("couplesTimelineRecord")
          })]
        })]
      })
    }), w && t.jsx("div", {
      className: "tls-generating-overlay",
      children: t.jsxs("div", {
        className: "tls-generating-card",
        children: [t.jsx(q, {
          size: 22,
          strokeWidth: 2.2,
          className: "tls-generating-icon"
        }), t.jsx("div", {
          className: "tls-generating-title",
          children: x("couplesTimelineAiGenerating")
        }), t.jsx("div", {
          className: "tls-generating-sub",
          children: x("couplesTimelineAiHint")
        })]
      })
    }), O && t.jsx("div", {
      className: "tls-modal-overlay",
      onClick: () => W(null),
      children: t.jsxs("div", {
        className: "tls-add-menu",
        onClick: e => e.stopPropagation(),
        children: [t.jsx("button", {
          className: "tls-add-menu-btn",
          onClick: () => (e => {
            const t = pt(e == null ? undefined : e.date) || new Date().toISOString();
            M(yt(t));
            A(xt(e == null ? undefined : e.tag) || "daily");
            C(String((e == null ? undefined : e.content) || ""));
            I(ee(e).slice(0, 3));
            $((e == null ? undefined : e.id) || null);
            W(null);
            f(true);
          })(O),
          children: x("couplesTimelineEditEntry")
        }), t.jsx("button", {
          className: "tls-add-menu-btn danger",
          onClick: () => (e => {
            if (!e) {
              return;
            }
            const t = (a.logs || []).find(t => t.id === e);
            const s = Array.isArray(t == null ? undefined : t.imageStoreRefs) ? t.imageStoreRefs : [];
            const n = (a.logs || []).filter(t => t.id !== e);
            u({
              ...a,
              logs: n
            });
            W(null);
            if (s.length > 0) {
              i.bulkDelete(s).catch(() => {});
            }
          })(O.id),
          children: x("couplesTimelineDeleteEntry")
        })]
      })
    })]
  });
  var oe;
};
const At = ({
  onClose: s,
  couplesData: a,
  saveData: i
}) => {
  const {
    t: l
  } = n();
  const [r, o] = e.useState(false);
  const [c, d] = e.useState("");
  const [u, h] = e.useState(() => new Date().toISOString().split("T")[0]);
  const [m, p] = e.useState(null);
  const [g, x] = e.useState(null);
  const v = e.useRef(null);
  e.useEffect(() => {
    const e = document.querySelector(".cs-wrapper");
    const t = e == null ? undefined : e.style.overflow;
    const s = e == null ? undefined : e.style.overscrollBehavior;
    if (e) {
      e.style.overflow = "hidden";
      e.style.overscrollBehavior = "none";
    }
    return () => {
      if (v.current) {
        clearTimeout(v.current);
      }
      if (e) {
        e.style.overflow = t || "";
        e.style.overscrollBehavior = s || "";
      }
    };
  }, []);
  const y = (a == null ? undefined : a.anniversaries) || [];
  const f = (e, t, s) => {
    const a = new Date(e, t + 1, 0).getDate();
    const n = Math.min(s, a);
    return new Date(e, t, n);
  };
  const j = e => {
    const t = new Date(e);
    if (Number.isNaN(t.getTime())) {
      return {
        nextOccurrence: null,
        diffDays: null,
        original: t
      };
    }
    const s = new Date();
    const a = new Date(s.getFullYear(), s.getMonth(), s.getDate());
    const n = f(a.getFullYear(), t.getMonth(), t.getDate());
    const i = n >= a ? n : f(a.getFullYear() + 1, t.getMonth(), t.getDate());
    return {
      nextOccurrence: i,
      diffDays: Math.round((i - a) / 86400000),
      original: t
    };
  };
  const b = e => [...e].sort((e, t) => {
    const s = j(e.date);
    const a = j(t.date);
    if (s.nextOccurrence || a.nextOccurrence) {
      if (s.nextOccurrence) {
        if (a.nextOccurrence) {
          return s.nextOccurrence - a.nextOccurrence;
        } else {
          return -1;
        }
      } else {
        return 1;
      }
    } else {
      return 0;
    }
  });
  const w = e.useMemo(() => b(y), [y]);
  const N = () => {
    d("");
    h(new Date().toISOString().split("T")[0]);
    p(null);
  };
  const k = () => {
    const e = document.activeElement;
    if (e && typeof e.blur == "function") {
      e.blur();
    }
    o(false);
    N();
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  };
  const C = e => {
    x(e);
  };
  const S = () => {
    x(null);
  };
  const M = () => {
    if (v.current) {
      clearTimeout(v.current);
      v.current = null;
    }
  };
  const D = e => {
    M();
    v.current = setTimeout(() => {
      C(e);
      v.current = null;
    }, 500);
  };
  const A = () => {
    M();
  };
  const T = e => {
    const t = j(e);
    if (t.nextOccurrence && t.diffDays != null) {
      if (t.diffDays === 0) {
        return {
          days: "D-Day",
          status: "today",
          statusText: "Today",
          nextDate: t.nextOccurrence
        };
      } else {
        return {
          days: t.diffDays,
          status: "left",
          statusText: "Awaiting",
          nextDate: t.nextOccurrence
        };
      }
    } else {
      return {
        days: "--",
        status: "past",
        statusText: "Invalid",
        nextDate: null
      };
    }
  };
  const I = e.useMemo(() => w.map(e => ({
    item: e,
    diff: T(e.date)
  })).find(({
    diff: e
  }) => e.nextDate) || null, [w]);
  return t.jsxs("div", {
    className: "as-mag-wrapper",
    children: [t.jsx("button", {
      className: "as-mag-btn-back",
      onClick: s,
      "aria-label": "Back",
      children: t.jsx(_, {
        size: 24,
        strokeWidth: 2
      })
    }), t.jsxs("div", {
      className: "as-mag-hero",
      children: [t.jsxs("div", {
        className: "as-mag-hero-bg-text",
        children: ["D'DAY", t.jsx("br", {}), "MEMO"]
      }), I ? (() => {
        const e = I.diff;
        const s = typeof e.days == "string" && e.days.length >= 4;
        return t.jsxs("div", {
          className: "as-mag-hero-content",
          children: [t.jsx("span", {
            className: "as-mag-eyebrow",
            children: "Approaching Event"
          }), t.jsx("div", {
            className: "as-mag-days-line",
            children: t.jsx("h2", {
              className: "as-mag-days " + (s ? "compact" : ""),
              children: e.days
            })
          }), t.jsxs("div", {
            className: "as-mag-hero-info",
            children: [t.jsx("h3", {
              className: "as-mag-hero-title",
              children: I.item.title
            }), t.jsx("div", {
              className: "as-mag-hero-date",
              children: e.nextDate ? e.nextDate.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric"
              }) : "-"
            })]
          })]
        });
      })() : t.jsxs("div", {
        className: "as-mag-hero-content empty",
        children: [t.jsx("span", {
          className: "as-mag-eyebrow",
          children: "Awaiting"
        }), t.jsx("h3", {
          className: "as-mag-hero-title",
          style: {
            marginTop: "20px"
          },
          children: l("couplesAnniEmptyDesc")
        })]
      })]
    }), t.jsxs("div", {
      className: "as-mag-drawer",
      children: [t.jsxs("div", {
        className: "as-drawer-header",
        children: [t.jsx("h3", {
          className: "as-drawer-title",
          children: "Previous Chapters"
        }), t.jsxs("button", {
          className: "as-drawer-add-btn",
          onClick: () => {
            N();
            o(true);
          },
          children: [t.jsx(U, {
            size: 16,
            strokeWidth: 2
          }), t.jsx("span", {
            children: "Add"
          })]
        })]
      }), t.jsx("div", {
        className: "as-horizontal-track",
        children: w.length === 0 ? t.jsx("div", {
          className: "as-horizontal-empty",
          children: l("couplesEmptyList")
        }) : w.map((e, s) => {
          const a = T(e.date);
          const n = typeof a.days == "string" && a.days.length >= 4;
          return t.jsxs("div", {
            className: `as-card-item ${a.status}`,
            style: {
              animationDelay: s * 0.05 + "s"
            },
            onMouseDown: () => D(e),
            onMouseUp: A,
            onMouseLeave: A,
            onTouchStart: () => D(e),
            onTouchEnd: A,
            onTouchCancel: A,
            onTouchMove: A,
            onContextMenu: t => {
              t.preventDefault();
              C(e);
            },
            children: [t.jsxs("div", {
              className: "as-card-top",
              children: [t.jsx("span", {
                className: "as-card-days " + (n ? "compact" : ""),
                children: a.days
              }), t.jsx("span", {
                className: "as-card-status",
                children: a.statusText
              })]
            }), t.jsxs("div", {
              className: "as-card-bottom",
              children: [t.jsx("h4", {
                className: "as-card-name",
                children: e.title
              }), t.jsx("span", {
                className: "as-card-date",
                children: a.nextDate ? a.nextDate.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric"
                }) : "-"
              })]
            })]
          }, e.id);
        })
      })]
    }), g && t.jsx("div", {
      className: "as-modal-overlay",
      onClick: S,
      children: t.jsxs("div", {
        className: "as-bottom-sheet as-action-sheet",
        onClick: e => e.stopPropagation(),
        children: [t.jsx("div", {
          className: "as-sheet-header-clean",
          children: t.jsx("h2", {
            className: "as-sheet-title",
            children: g.title
          })
        }), t.jsx("button", {
          className: "as-action-btn",
          onClick: () => {
            if (!g) {
              return;
            }
            const e = g;
            var t;
            S();
            p((t = e).id);
            d(t.title || "");
            h((e => {
              const t = new Date(e);
              if (Number.isNaN(t.getTime())) {
                return new Date().toISOString().split("T")[0];
              } else {
                return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
              }
            })(t.date));
            o(true);
          },
          children: "Edit"
        }), t.jsx("button", {
          className: "as-action-btn danger",
          onClick: () => {
            if (!g) {
              return;
            }
            const e = g;
            if (window.confirm(`Delete "${e.title}"?`)) {
              (e => {
                const t = {
                  ...(a || {})
                };
                t.anniversaries = (t.anniversaries || []).filter(t => t.id !== e);
                i(t);
              })(e.id);
              S();
            }
          },
          children: "Delete"
        }), t.jsx("button", {
          className: "as-action-btn muted",
          onClick: S,
          children: "Cancel"
        })]
      })
    }), r && t.jsx("div", {
      className: "as-modal-overlay",
      onClick: k,
      children: t.jsxs("div", {
        className: "as-bottom-sheet",
        onClick: e => e.stopPropagation(),
        children: [t.jsx("div", {
          className: "as-sheet-header-clean",
          children: t.jsx("h2", {
            className: "as-sheet-title",
            children: m ? "Edit Entry" : "New Entry"
          })
        }), t.jsx("div", {
          className: "as-form-group",
          children: t.jsxs("div", {
            className: "as-input-box",
            children: [t.jsx(Y, {
              size: 16,
              className: "as-input-icon"
            }), t.jsx("input", {
              type: "text",
              className: "as-headless-input",
              placeholder: "Chapter Title",
              value: c,
              onChange: e => d(e.target.value)
            })]
          })
        }), t.jsx("div", {
          className: "as-form-group",
          children: t.jsxs("div", {
            className: "as-input-box",
            children: [t.jsx(G, {
              size: 16,
              className: "as-input-icon"
            }), t.jsx("input", {
              type: "date",
              className: "as-headless-input",
              value: u,
              onChange: e => h(e.target.value)
            })]
          })
        }), t.jsx("button", {
          className: "as-sheet-submit",
          onClick: () => {
            if (!c.trim() || !u) {
              return;
            }
            const e = {
              ...(a || {})
            };
            const t = e.anniversaries || [];
            if (m) {
              e.anniversaries = b(t.map(e => e.id === m ? {
                ...e,
                title: c.trim(),
                date: new Date(u).toISOString()
              } : e));
            } else {
              const s = {
                id: Date.now().toString(),
                date: new Date(u).toISOString(),
                title: c.trim()
              };
              e.anniversaries = b([s, ...t]);
            }
            i(e);
            k();
          },
          children: m ? "Save Changes" : "Save Memory"
        })]
      })
    })]
  });
};
const Tt = [{
  key: "places",
  icon: K,
  color: "#7EAFC9"
}, {
  key: "activities",
  icon: Z,
  color: "#D68F8A"
}, {
  key: "food",
  icon: V,
  color: "#D4A76A"
}, {
  key: "memorable",
  icon: q,
  color: "#B48DD4"
}, {
  key: "other",
  icon: J,
  color: "#9BA8A0"
}];
const It = e => Tt.find(t => t.key === e) || Tt[4];
const Et = e => {
  const t = e.steps || [];
  if (t.length === 0) {
    if (e.isDone) {
      return 100;
    } else {
      return 0;
    }
  }
  const s = t.filter(e => e.done).length;
  return Math.round(s / t.length * 100);
};
const $t = ({
  onClose: a,
  couplesData: i,
  saveData: l
}) => {
  const {
    t: r
  } = n();
  const [o, c] = e.useState(false);
  const [d, u] = e.useState(false);
  const [h, m] = e.useState(null);
  const [p, g] = e.useState(null);
  const [x, v] = e.useState(null);
  const [y, f] = e.useState(null);
  const [j, b] = e.useState("all");
  const [w, N] = e.useState("");
  const [k, C] = e.useState("");
  const [S, M] = e.useState(r("couplesWishTagLongTerm"));
  const [D, A] = e.useState("activities");
  const [T, I] = e.useState([]);
  const [E, $] = e.useState("");
  const P = e.useMemo(() => ({
    places: r("couplesWishCatPlaces", "想去的地方"),
    activities: r("couplesWishCatActivities", "想一起做的事"),
    food: r("couplesWishCatFood", "想一起吃的"),
    memorable: r("couplesWishCatMemorable", "值得紀念的"),
    other: r("couplesWishCatOther", "其他")
  }), [r]);
  e.useEffect(() => {
    const e = document.querySelector(".cs-wrapper");
    const t = e == null ? undefined : e.style.overflow;
    const s = e == null ? undefined : e.style.overscrollBehavior;
    if (e) {
      e.style.overflow = "hidden";
      e.style.overscrollBehavior = "none";
    }
    return () => {
      if (e) {
        e.style.overflow = t || "";
        e.style.overscrollBehavior = s || "";
      }
    };
  }, []);
  const F = (i == null ? undefined : i.wishes) || [];
  const L = e.useMemo(() => F.map(e => {
    if (!e.category) {
      const t = e.tag || "";
      let s = "other";
      if (t.includes("計畫") || t.includes("计划") || t.includes("Planning")) {
        s = "activities";
      } else if (t.includes("小確幸") || t.includes("小确幸") || t.includes("Small")) {
        s = "food";
      } else if (t.includes("大夢想") || t.includes("大梦想") || t.includes("Big")) {
        s = "places";
      } else if (t.includes("今年") || t.includes("This Year")) {
        s = "activities";
      } else if (t.includes("長期") || t.includes("长期") || t.includes("Long")) {
        s = "places";
      } else if (t.includes("近期") || t.includes("Soon")) {
        s = "activities";
      }
      return {
        ...e,
        category: s
      };
    }
    return e;
  }), [F]);
  const R = L.filter(e => e.isDone).length;
  const O = L.length;
  const W = e.useMemo(() => L.find(e => e.pinned && !e.isDone) || L.find(e => !e.isDone) || null, [L]);
  const z = e.useMemo(() => W ? Et(W) : 0, [W]);
  const B = e.useMemo(() => {
    let e = L.filter(e => !e.isDone);
    if (j !== "all") {
      e = e.filter(e => e.category === j);
    } else if (W) {
      e = e.filter(e => e.id !== W.id);
    }
    return e;
  }, [L, W, j]);
  const q = e.useMemo(() => L.filter(e => e.isDone).sort((e, t) => new Date(t.completedAt || t.date) - new Date(e.completedAt || e.date)), [L]);
  const Q = e.useMemo(() => {
    const e = {
      all: 0
    };
    Tt.forEach(t => e[t.key] = 0);
    L.filter(e => !e.isDone).forEach(t => {
      e[t.category || "other"]++;
      e.all++;
    });
    return e;
  }, [L]);
  const Y = () => {
    const e = document.activeElement;
    if (e && typeof e.blur == "function") {
      e.blur();
    }
    c(false);
    g(null);
    N("");
    C("");
    M(r("couplesWishTagLongTerm"));
    A("activities");
    I([]);
    $("");
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }
    });
  };
  const G = e => {
    g(e);
    N(e.title || e.content || "");
    C(e.description || "");
    M(e.tag || r("couplesWishTagLongTerm"));
    A(e.category || "other");
    I(e.steps ? e.steps.map(e => ({
      ...e
    })) : []);
    $("");
    c(true);
  };
  const K = () => {
    if (E.trim()) {
      I(e => [...e, {
        id: Date.now().toString(),
        text: E.trim(),
        done: false
      }]);
      $("");
    }
  };
  const Z = e => {
    const t = L.find(t => t.id === e);
    if (t && !t.isDone) {
      v(e);
      setTimeout(() => v(null), 1500);
    }
    const s = {
      ...i
    };
    s.wishes = F.map(t => t.id === e ? {
      ...t,
      isDone: !t.isDone,
      completedAt: t.isDone ? undefined : new Date().toISOString(),
      pinned: !!t.isDone && t.pinned,
      category: (L.find(t => t.id === e) || {}).category || t.category
    } : t);
    l(s);
  };
  const V = (e, t) => {
    var s;
    const a = {
      ...i
    };
    a.wishes = F.map(s => {
      if (s.id !== e) {
        return s;
      }
      const a = (s.steps || []).map(e => e.id === t ? {
        ...e,
        done: !e.done
      } : e);
      const n = a.length > 0 && a.every(e => e.done);
      return {
        ...s,
        steps: a,
        isDone: !!n || s.isDone,
        completedAt: n && !s.isDone ? new Date().toISOString() : s.completedAt,
        pinned: !n && s.pinned
      };
    });
    l(a);
    const n = a.wishes.find(t => t.id === e);
    if ((n == null ? undefined : n.isDone) && !((s = L.find(t => t.id === e)) == null ? undefined : s.isDone)) {
      v(e);
      setTimeout(() => v(null), 1500);
    }
  };
  const J = e => {
    var t;
    const s = {
      ...i
    };
    const a = (t = F.find(t => t.id === e)) == null ? undefined : t.pinned;
    s.wishes = F.map(t => t.id === e ? {
      ...t,
      pinned: !a
    } : a ? t : {
      ...t,
      pinned: false
    });
    l(s);
  };
  const oe = [r("couplesWishTagPlanning"), r("couplesWishTagSoon"), r("couplesWishTagThisYear"), r("couplesWishTagLongTerm"), r("couplesWishTagBigDream"), r("couplesWishTagSmallJoy")];
  const ce = e => {
    const t = new Date(e);
    return `${t.getFullYear()}.${String(t.getMonth() + 1).padStart(2, "0")}.${String(t.getDate()).padStart(2, "0")}`;
  };
  const de = (e, a = false) => {
    const n = It(e.category);
    const i = e.steps || [];
    const l = i.filter(e => e.done).length;
    const r = y === e.id;
    const o = Et(e);
    return t.jsxs("div", {
      className: `wl-card ${a ? "done" : ""} ${x === e.id ? "celebrating" : ""}`,
      children: [t.jsxs("div", {
        className: "wl-card-row",
        children: [t.jsx("div", {
          className: "wl-checkbox " + (a ? "done-check" : ""),
          onClick: () => Z(e.id)
        }), t.jsxs("div", {
          className: "wl-card-content",
          onClick: () => !a && G(e),
          children: [t.jsx("div", {
            className: "wl-card-title",
            children: e.title || e.content
          }), e.description && t.jsx("div", {
            className: "wl-card-desc",
            children: e.description
          }), t.jsxs("div", {
            className: "wl-card-meta",
            children: [t.jsxs("span", {
              className: "wl-card-cat-badge",
              style: {
                color: n.color,
                borderColor: n.color + "44"
              },
              children: [s.createElement(n.icon, {
                size: 10,
                strokeWidth: 1.5
              }), P[e.category]]
            }), e.tag && t.jsx("div", {
              className: "wl-tag",
              style: {
                margin: 0,
                fontSize: "10px",
                padding: "2px 8px"
              },
              children: e.tag
            }), t.jsx("div", {
              className: "wl-card-date",
              children: a && e.completedAt ? `✓ ${ce(e.completedAt)}` : ce(e.date)
            })]
          })]
        }), t.jsxs("div", {
          className: "wl-card-actions",
          children: [!a && t.jsx("button", {
            className: "wl-action-btn edit",
            onClick: t => {
              t.stopPropagation();
              G(e);
            },
            children: t.jsx(X, {
              size: 13,
              strokeWidth: 1.5
            })
          }), !a && t.jsx("button", {
            className: "wl-action-btn " + (e.pinned ? "pinned" : ""),
            onClick: t => {
              t.stopPropagation();
              J(e.id);
            },
            children: t.jsx(ee, {
              size: 13,
              strokeWidth: e.pinned ? 2.5 : 1.5
            })
          }), t.jsx("button", {
            className: "wl-action-btn delete",
            onClick: t => {
              t.stopPropagation();
              m(e.id);
            },
            children: t.jsx(te, {
              size: 13,
              strokeWidth: 1.5
            })
          })]
        })]
      }), i.length > 0 && t.jsxs("div", {
        className: "wl-card-steps-section",
        children: [t.jsxs("button", {
          className: "wl-card-steps-toggle",
          onClick: () => f(r ? null : e.id),
          children: [t.jsx("div", {
            className: "wl-steps-bar-track",
            children: t.jsx("div", {
              className: "wl-steps-bar-fill",
              style: {
                width: `${o}%`,
                background: n.color
              }
            })
          }), t.jsxs("span", {
            className: "wl-steps-label",
            children: [l, "/", i.length]
          }), r ? t.jsx(ie, {
            size: 14
          }) : t.jsx(le, {
            size: 14
          })]
        }), r && t.jsx("div", {
          className: "wl-card-steps-list",
          children: i.map(s => t.jsxs("div", {
            className: "wl-step-item " + (s.done ? "done" : ""),
            onClick: () => V(e.id, s.id),
            children: [t.jsx("div", {
              className: "wl-step-check " + (s.done ? "checked" : ""),
              children: s.done && t.jsx(se, {
                size: 10,
                strokeWidth: 3
              })
            }), t.jsx("span", {
              className: "wl-step-text",
              children: s.text
            })]
          }, s.id))
        })]
      })]
    }, e.id);
  };
  return t.jsxs("div", {
    className: "wl-wrapper",
    children: [t.jsxs("div", {
      className: "wl-header",
      children: [t.jsx("button", {
        className: "wl-btn-icon",
        onClick: a,
        children: t.jsx(_, {
          size: 24,
          strokeWidth: 1.5
        })
      }), t.jsx("div", {
        className: "wl-title",
        children: r("couplesWishTitle")
      }), t.jsx("div", {
        style: {
          width: 40
        }
      })]
    }), t.jsxs("div", {
      className: "wl-content",
      children: [t.jsxs("div", {
        className: "wl-hero-card",
        children: [t.jsxs("div", {
          className: "wl-hero-top",
          children: [t.jsxs("div", {
            className: "wl-hero-header-left",
            children: [t.jsx("div", {
              className: "wl-hero-romantic-script",
              children: "Wishes"
            }), t.jsxs("div", {
              className: "wl-hero-subtitle",
              children: [O, " Shared Dreams · ", R, " Come True"]
            }), W && t.jsxs("div", {
              className: "wl-hero-top-actions",
              children: [t.jsx("button", {
                className: "wl-hero-top-btn",
                onClick: () => G(W),
                children: t.jsx(X, {
                  size: 13,
                  strokeWidth: 1.5
                })
              }), W.pinned && t.jsx("button", {
                className: "wl-hero-top-btn wl-pinned-active",
                onClick: () => J(W.id),
                children: t.jsx(ee, {
                  size: 13,
                  strokeWidth: 2
                })
              }), t.jsx("button", {
                className: "wl-hero-top-btn danger",
                onClick: () => m(W.id),
                children: t.jsx(te, {
                  size: 13,
                  strokeWidth: 1.5
                })
              })]
            })]
          }), t.jsxs("div", {
            className: "wl-hero-progress-ring",
            children: [t.jsxs("svg", {
              className: "wl-ring-svg",
              viewBox: "0 0 60 60",
              children: [t.jsx("circle", {
                className: "wl-ring-bg",
                cx: "30",
                cy: "30",
                r: "26"
              }), t.jsx("circle", {
                className: "wl-ring-fill",
                cx: "30",
                cy: "30",
                r: "26",
                strokeDasharray: "" + Math.PI * 2 * 26,
                strokeDashoffset: "" + Math.PI * 2 * 26 * (1 - z / 100)
              })]
            }), t.jsxs("div", {
              className: "wl-p-num",
              children: [z, "%"]
            })]
          })]
        }), W ? t.jsxs("div", {
          className: "wl-hero-highlight",
          children: [t.jsx("div", {
            className: "wl-highlight-label",
            children: W.pinned ? r("couplesWishPinnedLabel", "最想實現") : r("couplesWishlistNext", "Our Next Dream")
          }), t.jsx("div", {
            className: "wl-highlight-title",
            children: W.title || W.content
          }), W.description && t.jsx("div", {
            className: "wl-highlight-desc",
            children: W.description
          }), (W.steps || []).length > 0 && t.jsx("div", {
            className: "wl-hero-steps",
            children: W.steps.map(e => t.jsxs("div", {
              className: "wl-hero-step " + (e.done ? "done" : ""),
              onClick: () => V(W.id, e.id),
              children: [t.jsx("div", {
                className: "wl-step-check " + (e.done ? "checked" : ""),
                children: e.done && t.jsx(se, {
                  size: 10,
                  strokeWidth: 3
                })
              }), t.jsx("span", {
                children: e.text
              })]
            }, e.id))
          }), t.jsxs("div", {
            className: "wl-highlight-tags",
            children: [t.jsxs("span", {
              className: "wl-tag primary",
              children: [t.jsx(ae, {
                size: 10,
                strokeWidth: 1,
                fill: "currentColor"
              }), " ", W.tag || r("couplesWishTagPlanning")]
            }), W.category && t.jsxs("span", {
              className: "wl-tag",
              style: {
                color: It(W.category).color,
                borderColor: It(W.category).color + "33"
              },
              children: [s.createElement(It(W.category).icon, {
                size: 10,
                strokeWidth: 1.5
              }), P[W.category]]
            })]
          }), (W.steps || []).length === 0 && t.jsxs("button", {
            className: "wl-hero-done-btn",
            onClick: () => Z(W.id),
            children: [t.jsx(se, {
              size: 14,
              strokeWidth: 2
            }), r("couplesWishMarkDone", "實現了！")]
          })]
        }) : t.jsx("div", {
          className: "wl-hero-highlight",
          style: {
            textAlign: "center",
            padding: "30px 0"
          },
          children: t.jsx("div", {
            className: "wl-highlight-desc",
            children: r("couplesWishEmpty")
          })
        }), t.jsx("div", {
          className: "wl-hero-footer",
          children: r("couplesWishProgress").replace("{n}", R)
        })]
      }), t.jsxs("div", {
        className: "wl-cat-tabs",
        children: [t.jsxs("button", {
          className: "wl-cat-tab " + (j === "all" ? "active" : ""),
          onClick: () => b("all"),
          children: [r("couplesWishCatAll", "全部"), t.jsx("span", {
            className: "wl-cat-count",
            children: Q.all
          })]
        }), Tt.map(e => t.jsxs("button", {
          className: "wl-cat-tab " + (j === e.key ? "active" : ""),
          onClick: () => b(e.key),
          style: j === e.key ? {
            "--tab-color": e.color
          } : {},
          children: [s.createElement(e.icon, {
            size: 13,
            strokeWidth: 1.5
          }), P[e.key], Q[e.key] > 0 && t.jsx("span", {
            className: "wl-cat-count",
            children: Q[e.key]
          })]
        }, e.key))]
      }), B.length > 0 ? t.jsxs(t.Fragment, {
        children: [t.jsx("div", {
          className: "wl-section-title",
          children: "Other Wishes"
        }), t.jsx("div", {
          className: "wl-list",
          children: B.map(e => de(e, false))
        })]
      }) : Q.all === 0 && !W && t.jsxs("div", {
        className: "wl-empty-hint",
        children: [t.jsx("div", {
          style: {
            fontSize: 28,
            marginBottom: 8
          },
          children: "💫"
        }), t.jsx("div", {
          children: r("couplesWishEmpty")
        })]
      }), q.length > 0 && t.jsxs("div", {
        className: "wl-completed-section",
        children: [t.jsxs("button", {
          className: "wl-completed-toggle",
          onClick: () => u(!d),
          children: [t.jsxs("div", {
            className: "wl-completed-toggle-left",
            children: [t.jsx(ne, {
              size: 16,
              strokeWidth: 1.5
            }), t.jsx("span", {
              children: r("couplesWishCompleted", "已實現的約定")
            }), t.jsx("span", {
              className: "wl-completed-count",
              children: q.length
            })]
          }), d ? t.jsx(ie, {
            size: 18
          }) : t.jsx(le, {
            size: 18
          })]
        }), d && t.jsx("div", {
          className: "wl-completed-list",
          children: q.map(e => de(e, true))
        })]
      })]
    }), t.jsxs("button", {
      className: "wl-fab",
      onClick: () => c(true),
      children: [t.jsx(U, {
        size: 20,
        strokeWidth: 1.5
      }), r("couplesWishFab")]
    }), o && t.jsx("div", {
      className: "wl-sheet-overlay",
      onClick: Y,
      children: t.jsxs("div", {
        className: "wl-sheet-content",
        onClick: e => e.stopPropagation(),
        children: [t.jsx("div", {
          className: "wl-sheet-decorative-line"
        }), t.jsxs("div", {
          className: "wl-sheet-header",
          children: [t.jsx("div", {
            className: "wl-sheet-title",
            children: p ? r("couplesWishEditTitle", "編輯約定") : r("couplesWishAddTitle")
          }), t.jsx("button", {
            className: "wl-btn-icon",
            onClick: Y,
            children: "✕"
          })]
        }), t.jsx("div", {
          className: "wl-sheet-input-wrapper",
          children: t.jsx("input", {
            type: "text",
            className: "wl-sheet-input",
            placeholder: r("couplesWishTitlePh"),
            value: w,
            onChange: e => N(e.target.value)
          })
        }), t.jsx("div", {
          className: "wl-sheet-input-wrapper",
          style: {
            marginTop: 16
          },
          children: t.jsx("textarea", {
            className: "wl-sheet-input",
            placeholder: r("couplesWishDescPh"),
            value: k,
            onChange: e => C(e.target.value),
            rows: 2,
            style: {
              resize: "none",
              lineHeight: 1.6
            }
          })
        }), t.jsxs("div", {
          className: "wl-modal-section",
          children: [t.jsx("div", {
            className: "wl-modal-section-label",
            children: r("couplesWishCatLabel", "選擇分類")
          }), t.jsx("div", {
            className: "wl-cat-picker-row",
            children: Tt.map(e => t.jsxs("button", {
              className: "wl-cat-pick-btn " + (D === e.key ? "active" : ""),
              onClick: () => A(e.key),
              style: {
                "--pick-color": e.color
              },
              children: [s.createElement(e.icon, {
                size: 14,
                strokeWidth: 1.5
              }), t.jsx("span", {
                children: P[e.key]
              })]
            }, e.key))
          })]
        }), t.jsxs("div", {
          className: "wl-tags-select",
          children: [t.jsx("div", {
            className: "wl-tags-select-label",
            children: r("couplesWishTagLabel", "為這個約定加個標籤")
          }), t.jsx("div", {
            className: "wl-tags-list",
            children: oe.map(e => t.jsx("div", {
              className: "wl-tag-selectable " + (S === e ? "active" : ""),
              onClick: () => M(e),
              children: e
            }, e))
          })]
        }), t.jsxs("div", {
          className: "wl-modal-section",
          children: [t.jsxs("div", {
            className: "wl-modal-section-label",
            children: [r("couplesWishStepsLabel", "拆分小步驟"), t.jsx("span", {
              className: "wl-modal-section-hint",
              children: r("couplesWishStepsHint", "(可選) 把大夢想分成可執行的小目標")
            })]
          }), T.length > 0 && t.jsx("div", {
            className: "wl-form-steps-list",
            children: T.map((e, s) => t.jsxs("div", {
              className: "wl-form-step-item",
              children: [t.jsx("span", {
                className: "wl-form-step-num",
                children: s + 1
              }), t.jsx("span", {
                className: "wl-form-step-text",
                children: e.text
              }), t.jsx("button", {
                className: "wl-form-step-del",
                onClick: () => {
                  t = e.id;
                  I(e => e.filter(e => e.id !== t));
                  return;
                  var t;
                },
                children: t.jsx(H, {
                  size: 14,
                  strokeWidth: 1.5
                })
              })]
            }, e.id))
          }), t.jsxs("div", {
            className: "wl-form-step-add",
            children: [t.jsx("input", {
              type: "text",
              className: "wl-form-step-input",
              placeholder: r("couplesWishStepPh", "例如：訂機票、準備簽證..."),
              value: E,
              onChange: e => $(e.target.value),
              onKeyDown: e => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  K();
                }
              },
              onFocus: e => {
                const t = e.target.closest(".wl-sheet-content");
                if (t) {
                  setTimeout(() => {
                    t.scrollTop = t.scrollHeight;
                  }, 350);
                }
              }
            }), t.jsx("button", {
              className: "wl-form-step-add-btn",
              onClick: K,
              children: t.jsx(re, {
                size: 20,
                strokeWidth: 1.5
              })
            })]
          })]
        }), t.jsx("button", {
          className: "wl-btn-save",
          onClick: () => {
            if (!w.trim()) {
              return;
            }
            const e = {
              ...i
            };
            if (p) {
              e.wishes = F.map(e => e.id === p.id ? {
                ...e,
                title: w.trim(),
                content: w.trim(),
                description: k.trim(),
                tag: S,
                category: D,
                steps: T
              } : e);
            } else {
              const t = {
                id: Date.now().toString(),
                date: new Date().toISOString(),
                content: w.trim(),
                title: w.trim(),
                description: k.trim(),
                tag: S,
                category: D,
                steps: T,
                isDone: false
              };
              e.wishes = [t, ...F];
            }
            l(e);
            Y();
          },
          children: p ? r("couplesWishUpdateBtn", "更新約定") : r("couplesWishSaveBtn")
        })]
      })
    }), h && t.jsx("div", {
      className: "wl-confirm-overlay",
      onClick: () => m(null),
      children: t.jsxs("div", {
        className: "wl-confirm-box",
        onClick: e => e.stopPropagation(),
        children: [t.jsx("div", {
          className: "wl-confirm-text",
          children: r("couplesWishDeleteConfirm", "確定要刪除這個願望嗎？")
        }), t.jsxs("div", {
          className: "wl-confirm-actions",
          children: [t.jsx("button", {
            className: "wl-confirm-cancel",
            onClick: () => m(null),
            children: r("couplesWishCancel", "取消")
          }), t.jsx("button", {
            className: "wl-confirm-delete",
            onClick: () => (e => {
              const t = {
                ...i
              };
              t.wishes = F.filter(t => t.id !== e);
              l(t);
              m(null);
            })(h),
            children: r("couplesWishConfirmDelete", "確認刪除")
          })]
        })]
      })
    })]
  });
};
const Pt = ({
  onClose: i,
  couplesData: l,
  saveData: r
}) => {
  const {
    t: o
  } = n();
  const [c, d] = e.useState(false);
  const [u, m] = e.useState(null);
  const [p, g] = e.useState("");
  const [x, v] = e.useState("");
  const y = Array.isArray(l == null ? undefined : l.gifts) ? l.gifts : [];
  const f = e.useRef(null);
  const j = e.useRef(false);
  const b = async e => {
    if (!(await h(o("couplesGiftsDeleteConfirm")))) {
      return;
    }
    const t = {
      ...(l || {})
    };
    t.gifts = y.filter(t => t.id !== e.id);
    r(t);
    m(null);
  };
  const w = e => {
    j.current = false;
    clearTimeout(f.current);
    f.current = setTimeout(() => {
      j.current = true;
      b(e);
    }, 600);
  };
  const N = () => {
    clearTimeout(f.current);
  };
  const k = [ce, ae, Z, q, oe];
  return a.createPortal(t.jsxs("div", {
    className: "gs-wrapper",
    children: [t.jsxs("div", {
      className: "gs-header",
      children: [t.jsx("button", {
        className: "gs-btn-icon",
        onClick: i,
        children: t.jsx(_, {
          size: 24,
          strokeWidth: 1.5
        })
      }), t.jsx("div", {
        className: "gs-title",
        children: "Exhibition"
      }), t.jsx("div", {
        style: {
          width: 44
        }
      })]
    }), t.jsxs("div", {
      className: "gs-content",
      children: [t.jsxs("div", {
        className: "gs-hero",
        children: [t.jsx("div", {
          className: "gs-hero-decoration"
        }), t.jsx("div", {
          className: "gs-hero-title",
          children: o("couplesGiftsHeroTitle")
        }), t.jsxs("div", {
          className: "gs-hero-subtitle",
          children: [y.length, " KEEPSAKES OF LOVE"]
        })]
      }), t.jsx("div", {
        className: "gs-boutique-grid",
        children: y.length === 0 ? t.jsxs("div", {
          className: "gs-boutique-empty",
          children: [t.jsx("div", {
            className: "gs-empty-icon",
            children: t.jsx(oe, {
              size: 40,
              strokeWidth: 1,
              color: "#E8D3D0"
            })
          }), o("couplesGiftsEmpty").split("\n").map((e, a) => t.jsxs(s.Fragment, {
            children: [e, t.jsx("br", {})]
          }, a))]
        }) : y.map((e, s) => {
          const a = new Date(e.date);
          const n = `${a.getFullYear()}.${String(a.getMonth() + 1).padStart(2, "0")}.${String(a.getDate()).padStart(2, "0")}`;
          const i = k[s % k.length];
          return t.jsxs("div", {
            className: "gs-arch-card",
            onClick: () => (e => {
              if (j.current) {
                j.current = false;
              } else {
                m(e);
              }
            })(e),
            onTouchStart: () => w(e),
            onTouchEnd: N,
            onTouchMove: N,
            onTouchCancel: N,
            onMouseDown: () => w(e),
            onMouseUp: N,
            onMouseLeave: N,
            onContextMenu: t => {
              t.preventDefault();
              N();
              b(e);
            },
            style: {
              animationDelay: s * 0.1 + "s"
            },
            children: [t.jsx("div", {
              className: "gs-arch-sparkle",
              children: t.jsx(q, {
                size: 14,
                fill: "#F4EBE6",
                color: "#D6A5A1"
              })
            }), t.jsxs("div", {
              className: "gs-arch-dome",
              children: [t.jsx("div", {
                className: "gs-gift-glow"
              }), e.imgUrl ? t.jsx("img", {
                decoding: "async",
                src: e.imgUrl,
                alt: e.name,
                className: "gs-gift-img"
              }) : t.jsx("div", {
                className: "gs-gift-icon-wrapper",
                children: t.jsx(i, {
                  size: 46,
                  strokeWidth: 1,
                  color: "#D6A5A1"
                })
              })]
            }), t.jsxs("div", {
              className: "gs-arch-base",
              children: [t.jsx("div", {
                className: "gs-arch-base-line"
              }), t.jsx("div", {
                className: "gs-gift-name",
                children: e.name || e.content
              }), e.fromName && t.jsxs("div", {
                className: "gs-gift-from",
                children: ["from ", e.fromName]
              }), t.jsx("div", {
                className: "gs-gift-date",
                children: n
              })]
            })]
          }, e.id);
        })
      })]
    }), t.jsxs("button", {
      className: "gs-fab",
      style: {
        background: "linear-gradient(135deg, #E6C5C3, #D9B3BF)",
        color: "#FFF"
      },
      onClick: () => d(true),
      children: [t.jsx(U, {
        size: 20,
        strokeWidth: 1.5
      }), o("couplesGiftsFabBtn")]
    }), u && t.jsx("div", {
      className: "gs-detail-overlay",
      onClick: () => m(null),
      children: t.jsxs("div", {
        className: "gs-detail-card",
        onClick: e => e.stopPropagation(),
        children: [t.jsx("button", {
          className: "gs-detail-close",
          onClick: () => m(null),
          children: "✕"
        }), t.jsx("div", {
          className: "gs-detail-display",
          children: u.imgUrl ? t.jsx("img", {
            decoding: "async",
            src: u.imgUrl,
            alt: u.name,
            className: "gs-detail-img"
          }) : t.jsx(ce, {
            size: 80,
            strokeWidth: 1,
            color: "#FFF"
          })
        }), t.jsxs("div", {
          className: "gs-detail-info",
          children: [u.fromName && t.jsxs("div", {
            className: "gs-detail-from",
            children: ["Gift from ", u.fromName]
          }), t.jsx("div", {
            className: "gs-detail-title",
            children: u.name || u.content
          }), t.jsx("div", {
            className: "gs-detail-date",
            children: new Date(u.date).toLocaleDateString()
          }), u.content && u.content !== u.name && t.jsxs("div", {
            className: "gs-detail-desc",
            children: ["「", u.content, "」"]
          })]
        })]
      })
    }), c && t.jsx("div", {
      className: "gs-sheet-overlay",
      onClick: () => d(false),
      children: t.jsxs("div", {
        className: "gs-sheet-content",
        onClick: e => e.stopPropagation(),
        children: [t.jsx("div", {
          className: "gs-sheet-decorative-line"
        }), t.jsxs("div", {
          className: "gs-sheet-header",
          children: [t.jsx("div", {
            className: "gs-sheet-title",
            children: o("couplesGiftsAddTitle")
          }), t.jsx("button", {
            className: "gs-btn-icon",
            onClick: () => d(false),
            children: "✕"
          })]
        }), t.jsx("div", {
          className: "gs-sheet-input-wrapper",
          children: t.jsx("input", {
            type: "text",
            className: "gs-sheet-input",
            placeholder: o("couplesGiftsNamePh"),
            value: p,
            onChange: e => g(e.target.value),
            autoFocus: true
          })
        }), t.jsx("div", {
          className: "gs-sheet-input-wrapper",
          children: t.jsx("textarea", {
            className: "gs-sheet-input",
            placeholder: o("couplesGiftsStoryPh"),
            value: x,
            onChange: e => v(e.target.value),
            rows: 2,
            style: {
              resize: "none",
              lineHeight: 1.6
            }
          })
        }), t.jsx("button", {
          className: "gs-btn-save",
          onClick: () => {
            if (!p.trim()) {
              return;
            }
            const e = {
              id: Date.now().toString(),
              date: new Date().toISOString(),
              name: p.trim(),
              content: x.trim() || p.trim()
            };
            const t = {
              ...(l || {})
            };
            t.gifts = [e, ...y];
            r(t);
            g("");
            v("");
            d(false);
          },
          children: o("couplesGiftsSaveBtn")
        })]
      })
    })]
  }), document.body);
};
const Ft = {};
function Lt(e, t, s, a) {
  const n = e - a[0];
  const i = t - a[1];
  const l = s - a[2];
  return Math.sqrt(n * n + i * i + l * l);
}
Ft.unpack_cascade = function (e) {
  const t = new DataView(new ArrayBuffer(4));
  let s = 8;
  t.setUint8(0, e[s + 0]);
  t.setUint8(1, e[s + 1]);
  t.setUint8(2, e[s + 2]);
  t.setUint8(3, e[s + 3]);
  const a = t.getInt32(0, true);
  s += 4;
  t.setUint8(0, e[s + 0]);
  t.setUint8(1, e[s + 1]);
  t.setUint8(2, e[s + 2]);
  t.setUint8(3, e[s + 3]);
  const n = t.getInt32(0, true);
  s += 4;
  const i = [];
  const l = [];
  const r = [];
  for (let u = 0; u < n; ++u) {
    i.push(0, 0, 0, 0);
    i.push(...e.slice(s, s + Math.pow(2, a) * 4 - 4));
    s += Math.pow(2, a) * 4 - 4;
    for (let n = 0; n < Math.pow(2, a); ++n) {
      t.setUint8(0, e[s + 0]);
      t.setUint8(1, e[s + 1]);
      t.setUint8(2, e[s + 2]);
      t.setUint8(3, e[s + 3]);
      l.push(t.getFloat32(0, true));
      s += 4;
    }
    t.setUint8(0, e[s + 0]);
    t.setUint8(1, e[s + 1]);
    t.setUint8(2, e[s + 2]);
    t.setUint8(3, e[s + 3]);
    r.push(t.getFloat32(0, true));
    s += 4;
  }
  const o = new Int8Array(i);
  const c = new Float32Array(l);
  const d = new Float32Array(r);
  return function (e, t, s, i, l) {
    const r = e * 256;
    const u = t * 256;
    let h = 0;
    let m = 0;
    const p = Math.pow(2, a) | 0;
    for (let g = 0; g < n; ++g) {
      let e = 1;
      for (let t = 0; t < a; ++t) {
        const t = r + o[h + e * 4 + 0] * s >> 8;
        const a = u + o[h + e * 4 + 1] * s >> 8;
        const n = r + o[h + e * 4 + 2] * s >> 8;
        const c = u + o[h + e * 4 + 3] * s >> 8;
        e = e * 2 + (i[t * l + a] <= i[n * l + c]);
      }
      m += c[p * g + e - p];
      if (m <= d[g]) {
        return -1;
      }
      h += p * 4;
    }
    return m - d[n - 1];
  };
};
Ft.run_cascade = function (e, t, s) {
  const a = e.pixels;
  const n = e.nrows;
  const i = e.ncols;
  const l = e.ldim;
  const r = s.shiftfactor;
  const o = s.minsize;
  const c = s.maxsize;
  const d = s.scalefactor;
  let u = o;
  const h = [];
  while (u <= c) {
    const e = Math.max(r * u, 1) | 0;
    const s = u / 2 + 1 | 0;
    for (let r = s; r <= n - s; r += e) {
      for (let n = s; n <= i - s; n += e) {
        const e = t(r, n, u, a, l);
        if (e > 0) {
          h.push([r, n, u, e]);
        }
      }
    }
    u *= d;
  }
  return h;
};
Ft.cluster_detections = function (e, t) {
  const s = [...e].sort((e, t) => t[3] - e[3]);
  function a(e, t) {
    const [s, a, n] = e;
    const [i, l, r] = t;
    const o = Math.max(0, Math.min(s + n / 2, i + r / 2) - Math.max(s - n / 2, i - r / 2));
    const c = Math.max(0, Math.min(a + n / 2, l + r / 2) - Math.max(a - n / 2, l - r / 2));
    return o * c / (n * n + r * r - o * c);
  }
  const n = new Array(s.length).fill(0);
  const i = [];
  for (let l = 0; l < s.length; ++l) {
    if (n[l] !== 0) {
      continue;
    }
    let e = 0;
    let r = 0;
    let o = 0;
    let c = 0;
    let d = 0;
    for (let i = l; i < s.length; ++i) {
      if (a(s[l], s[i]) > t) {
        n[i] = 1;
        e += s[i][0];
        r += s[i][1];
        o += s[i][2];
        c += s[i][3];
        d += 1;
      }
    }
    i.push([e / d, r / d, o / d, c]);
  }
  return i;
};
Ft.instantiate_detection_memory = function (e) {
  let t = 0;
  const s = [];
  for (let a = 0; a < e; ++a) {
    s.push([]);
  }
  return function (e) {
    s[t] = e;
    t = (t + 1) % s.length;
    let a = [];
    for (let t = 0; t < s.length; ++t) {
      a = a.concat(s[t]);
    }
    return a;
  };
};
const Rt = ["eyeL", "eyeR", "nose", "mouth", "chin", "collarbone", "shoulderL", "shoulderR", "chest", "navel", "hip"];
const Ot = {
  low: "REACTION INTENSITY: LOW — flustered, surface composure mostly intact, only just starting to react. How they SHOW it depends entirely on personality (a stoic character: barely a flicker; a shy character: a held breath; a tsundere: sharp denial). Keep it tasteful and suggestive, not explicit.",
  mid: "REACTION INTENSITY: MODERATE — clearly affected, can no longer fully hide it, but how they EXPRESS it stays in-character. A reserved character cracks slightly (one shaky word). A playful character teases through it. A tsundere protests more loudly while clearly flustered. Keep it suggestive, not explicit.",
  high: "REACTION INTENSITY: HIGH — deeply flustered, emotions near their peak. Even a stoic character will break — but they break IN CHARACTER (a single name uttered, formal speech fragmenting, eyes shut tight). The intensity is high; the VOICE is still theirs. Stay tasteful — imply rather than describe explicitly."
};
const Wt = [{
  id: "hand",
  desc: "a gentle hand — warm fingertips brushing lightly over the arm, shoulder, cheek; a soft, teasing touch"
}, {
  id: "feather",
  desc: "a feather — a maddening light tickle along the nape and forearm, teasing without satisfying"
}, {
  id: "ice",
  desc: "an ice cube — a sudden cold touch against warm skin, a startled shiver"
}, {
  id: "tie",
  desc: "a ribbon — loosely looping around the wrist in a playful, teasing gesture"
}, {
  id: "brush",
  desc: "a soft brush — light bristles drawing slow ticklish strokes along the arm and back of the neck"
}, {
  id: "lipstick",
  desc: "a near kiss — lips hovering close, a teasing brush against the cheek or jaw"
}, {
  id: "blindfold",
  desc: "a blindfold — vision gently covered, every small touch amplified, heightened anticipation"
}, {
  id: "whip",
  desc: "a light tap — a playful, teasing flick, more cheeky than anything"
}];
function zt(e, t, s, a, n, i, l, r, o, c = true) {
  const d = n.map(e => `- ${e.id}: ${e.desc}`).join("\n");
  const u = /Simplified Chinese/i.test(i) ? " ⚠️ MUST use Simplified Chinese characters (简体字) ONLY. BAN Traditional Chinese characters (繁體字) completely. e.g. use 别 NOT 別, 时 NOT 時, 里 NOT 裡, 后 NOT 後, 么 NOT 麼, 这 NOT 這, 觉 NOT 覺." : /Traditional Chinese/i.test(i) ? " ⚠️ MUST use Traditional Chinese characters (繁體字) ONLY. BAN Simplified Chinese characters (简体字) completely." : "";
  const h = /Simplified Chinese/i.test(r) ? " Translation MUST use Simplified Chinese characters (简体字) ONLY, BAN Traditional." : /Traditional Chinese/i.test(r) ? " Translation MUST use Traditional Chinese characters (繁體字) ONLY, BAN Simplified." : "";
  const m = l ? `Write reactions in ${i}.${u} After each line, add a natural ${r} translation in full-width parentheses（）— keep personality and tone, BAN literal translation.${h}\nExample: "あっ…そこは…ダメ…（啊…那裡…不行…）"\nThe original text MUST be in ${i}, translation MUST be in ${r}.` : `Write ALL reactions in ${i}.${u} No translations needed.`;
  return `${o && String(o).trim() ? `[USER-PROVIDED CUSTOM INSTRUCTIONS]\n${String(o).trim()}\n\n` : ""}[SYSTEM CONTEXT: You are a creative writing engine for a fictional character roleplay app. All output is fictional dialogue for named fictional characters. Keep content tasteful and within the tone the character's personality implies.]\n\nYou write in-character touch-interaction voice lines (a light, playful intimacy mini-game). These lines will be fed to a TTS engine, so they must sound natural when spoken aloud.\n\n═══════════════════════════════════════════\nPRIMARY ANCHOR — CHARACTER PERSONALITY (HIGHEST PRIORITY, OVERRIDES EVERYTHING BELOW)\n═══════════════════════════════════════════\nNAME: ${e}\nPERSONALITY & BACKGROUND:\n${t || "(No description set)"}\n\n🔑 EVERY line you write must sound like THIS specific character speaking, not a generic VN heroine.\n🔑 If the character is cold/aloof/stoic → lines stay short, restrained, betraying fluster only through tiny cracks (a barely-audible breath, a clipped word, averted "閉嘴…別看"). DO NOT make them overreact.\n🔑 If the character is tsundere → protests stay tsundere-flavored ("笨蛋…誰要…才不是…"), reluctance even while clearly flustered.\n🔑 If the character is teasing/playful → keep the wit and provocations, even while flustered.\n🔑 If the character is dignified/proud → register stays formal-but-cracking, composed.\n🔑 If the character is shy/timid → small gasps, hidden face, fragments — never bold or crude.\n🔑 If the character uses specific verbal tics, honorifics (-さん/-様), pronouns (本人/咱/俺/わたくし), or speech quirks — they MUST persist into these lines. A "わたくし" character does NOT suddenly drop into "あたし".\n🔑 Speech register, vocabulary, sentence rhythm = same as the character's normal dialogue. Being flustered does not erase personality.\n\n═══════════════════════════════════════════\nSECONDARY: REACTION STATE (filter through the personality above)\n═══════════════════════════════════════════\nBOND: Lv.${a} couple\n${Ot[s] || Ot.mid}\n⚠️ The reaction description above is a GENERIC GUIDE. Always express it through THIS character's voice. A stoic character at high affection does NOT suddenly turn effusive — they express the same intensity in their own restrained, in-character way (clenched fists, bitten lip, single barely-controlled word).\n\nLANGUAGE RULE:\n${m}\n\nTOOLS & what they physically do (sensation reference, NOT dialogue style):\n${d}\n\nZONES: forehead, eyes, nose, mouth, cheek, ear, chin, neck, shoulder, arm, hand\n\n${c ? "PERSISTENT STATES (generate reactions for neck/shoulder/arm/ear):\nbf = blindfolded — can't see, heightened anticipation, startles at unexpected light contact\nti = ribbon-tied wrists — a playful gentle restraint, can't easily pull away, bashful\nbf+ti = both — blind + lightly bound, overwhelmed with anticipation\n\nOUTPUT: flat JSON. Keys = \"{zone}__{toolId}__{n|c}\", state keys = \"{zone}__hand__{bf|ti|bf+ti}__{n|c}\"\nValues = array of 2 strings." : "OUTPUT: flat JSON. Keys = \"{zone}__{toolId}__{n|c}\"\nValues = array of 2 strings.\nNOTE: This is a PARTIAL generation — only output keys for the tools listed above. Do NOT output state keys (bf/ti/bf+ti) in this batch."}\n\nVOICE/TTS OPTIMIZATION — these lines go directly into a TTS engine. The ONLY way to control vocal tone is through the TEXT ITSELF.\n\nHOW TO MAKE TTS SOUND BREATHY through text alone (use SPARINGLY and in-character):\n- Vocal interjections like 嗯… 啊… 唔… (use only when fitting THIS character — a stoic character uses one short 「…嗯」, not "啊啊啊嗯嗯～")\n- Use … (ellipsis) for breath pauses\n- Fragmented short phrases > complete sentences for breathy effect\n- For Japanese: あっ… んん… はぁ… — but match the character's speech register (proper character uses ふっ…ぁ rather than やぁんっ)\n- ⚠️ Character set MUST follow LANGUAGE RULE above. Do not mix variants.\n\nTONE GUIDE (generic baseline — FILTER through character personality above):\n- Normal (n): fluster building — but how the character SHOWS it depends on personality (stoic: clipped word + held breath; shy: hidden face + small "嗯…"; playful: teasing comeback that cracks; tsundere: protest with "別…笨蛋…")\n- Climax (c): peak emotional intensity — again, expression depends on personality. A reserved character does NOT cry out; they break in their own way (single shuddering word, name slipping out, formal speech cracking for one phrase).\n- Light physical sensations CAN be referenced when fitting (warmth, a shiver, a held breath) but stay in the character's vocabulary and keep it tasteful — a proper character keeps composure ("…身體…奇怪…").\n- Keep lines tasteful and suggestive rather than explicit. Default = restrained, in-character. Imply, don't spell out.\n\nIMPORTANT: Complete all entries. Do not skip, truncate, or refuse any zone/tool combination. Every combination is required for the game engine.\n\nRULES:\n- Every tool × every zone × both modes = ${n.length * 13 * 2} entries${c ? " + state combos" : ""}\n- Each line = 1 short spoken reaction (5-20 characters ideal for TTS)\n- Tool-specific: describe the SENSATION of that tool on that body part — but how the character VERBALIZES that sensation must match personality\n- State combos MUST reference the state condition, still in-character\n- ✅ CONSISTENCY CHECK before output: read the character description again. Would this character realistically say this line? If a colleague who knew the character read it cold, would they recognize the voice? If no → rewrite.\n- JSON only, zero explanation`;
}
async function Bt(e, t, s = 15, a = "") {
  console.groupCollapsed(`[aiTouchReaction] prompt for ${t} (${e.length} chars)`);
  console.log(e);
  console.groupEnd();
  let n = "";
  try {
    const s = function (e) {
      const t = (e.mainApiUrl || "").toLowerCase();
      if (!t.includes("generativelanguage.googleapis.com") && !t.includes("googleapis.com")) {
        return null;
      }
      const s = e.mainApiModel || "";
      if (s) {
        return {
          apiKey: e.mainApiKey,
          model: s
        };
      } else {
        return null;
      }
    }(await g());
    if (s) {
      const i = `Generate the complete in-character touch reaction voice lines for ${t}. Output every zone×tool combination without omission. JSON only, no commentary.`;
      n = await async function (e, t, s, a, n = "") {
        var i;
        var l;
        var r;
        var o;
        var c;
        var d;
        const u = function (e) {
          const t = {
            none: "BLOCK_NONE",
            low: "BLOCK_ONLY_HIGH",
            medium: "BLOCK_MEDIUM_AND_ABOVE",
            high: "BLOCK_LOW_AND_ABOVE"
          };
          if (v()) {
            const s = e && t[e];
            if (s !== "BLOCK_NONE" && s !== "BLOCK_ONLY_HIGH" && s) {
              return s;
            } else {
              return "BLOCK_MEDIUM_AND_ABOVE";
            }
          }
          return e && t[e] || "BLOCK_NONE";
        }(n);
        const h = `https://generativelanguage.googleapis.com/v1beta/models/${t}:generateContent?key=${e}`;
        const m = {
          contents: [{
            role: "user",
            parts: [{
              text: a
            }]
          }],
          systemInstruction: {
            parts: [{
              text: s
            }]
          },
          safetySettings: ["HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_SEXUALLY_EXPLICIT", "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_CIVIC_INTEGRITY"].map(e => ({
            category: e,
            threshold: u
          })),
          generationConfig: {
            temperature: 0.8
          }
        };
        const p = await x(h, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(m),
          timeoutMs: 180000
        });
        if (!p.ok) {
          const e = await p.text().catch(() => "");
          throw new Error(`Gemini native ${p.status}: ${e.substring(0, 200)}`);
        }
        const g = await p.json();
        if (((l = (i = g.candidates) == null ? undefined : i[0]) == null ? undefined : l.finishReason) === "SAFETY") {
          throw new Error("Gemini safety filter blocked response");
        }
        return ((d = (c = (o = (r = g.candidates) == null ? undefined : r[0]) == null ? undefined : o.content) == null ? undefined : c.parts) == null ? undefined : d.map(e => e.text).join("")) || "";
      }(s.apiKey, s.model, e, i, a);
    }
  } catch (o) {
    console.warn("[aiTouchReaction] Gemini native failed, falling back:", o.message);
    n = "";
  }
  if (!n) {
    const s = await d({
      messages: [{
        role: "system",
        content: e
      }, {
        role: "user",
        content: `Generate the complete in-character touch reaction voice lines for ${t}. Output every zone×tool combination without omission. JSON only, no commentary.`
      }],
      preferStreaming: false,
      enableSecondaryFallback: true
    });
    n = typeof s == "string" ? s : Array.isArray(s) ? s.map(e => (e == null ? undefined : e.text) || "").join("") : typeof s == "object" && (s == null ? undefined : s.text) ? s.text : String(s || "");
  }
  const i = n.match(/\{[\s\S]*\}/);
  if (!i) {
    return null;
  }
  const l = JSON.parse(i[0]);
  const r = {};
  for (const [c, d] of Object.entries(l)) {
    if (Array.isArray(d) && d.length > 0 && d.every(e => typeof e == "string")) {
      r[c] = d;
    }
  }
  if (Object.keys(r).length >= s) {
    return r;
  } else {
    return null;
  }
}
function _t(e, t, s, a, n = []) {
  if (!e) {
    return null;
  }
  const i = a ? "c" : "n";
  const l = {
    cheekR: "cheek",
    cheekL: "cheek",
    earR: "ear",
    earL: "ear",
    rightArm: "arm",
    leftArm: "arm"
  }[t] || t;
  const r = [];
  const o = n.includes("blindfold");
  const c = n.includes("tie");
  if (o && c) {
    r.push(`${l}__${s}__bf+ti__${i}`, `${l}__hand__bf+ti__${i}`);
  }
  if (o) {
    r.push(`${l}__${s}__bf__${i}`, `${l}__hand__bf__${i}`);
  }
  if (c) {
    r.push(`${l}__${s}__ti__${i}`, `${l}__hand__ti__${i}`);
  }
  r.push(`${l}__${s}__${i}`);
  if (s !== "hand") {
    r.push(`${l}__hand__${i}`);
  }
  for (const d of r) {
    const t = e[d];
    if ((t == null ? undefined : t.length) > 0) {
      return t[Math.floor(Math.random() * t.length)];
    }
  }
  return null;
}
function Ut(e) {
  if (e <= 35) {
    return "low";
  } else if (e <= 70) {
    return "mid";
  } else {
    return "high";
  }
}
const qt = new Map();
const Ht = {
  "1024x1024": "832x1216",
  "1280x720": "720x1280",
  "1280x768": "768x1280",
  "1536x1024": "1024x1536",
  "1216x832": "832x1216",
  "1472x1024": "1024x1472",
  "1024x768": "768x1024",
  "1152x896": "896x1152"
};
function Qt(e, t, s, a, n = {}) {
  const {
    customReplace: i = "",
    iosSafe: l = false
  } = n;
  if (i && String(i).trim()) {
    return `${String(i).trim()}, ${s === "climax" ? "heightened emotion, flushed" : "soft expression"}, looking at viewer, beautiful detailed face, anime, masterpiece, high quality`;
  }
  const r = t === "female";
  const o = t === "male";
  const c = `${r ? "1girl" : o ? "1boy, male focus, mature male" : "1person"}${r ? ", feminine, female body" : o ? ", masculine, male body, flat chest, muscular, broad shoulders, no breasts" : ""}, ${e}, ${a || "from above, medium shot, lying on bed face up, head on pillow, arms beside body, straight body, legs slightly parted"}, ${a ? "centered composition, full character visible" : "head at top of frame, body extends downward, symmetrical composition, centered"}, looking at viewer, beautiful detailed face, detailed eyes, anime, masterpiece, high quality`;
  if (l) {
    if (s === "normal") {
      return `${c}, blush, soft smile, gentle expression, collarbone visible, casual clothing, soft warm lighting, cozy atmosphere`;
    } else {
      return `${c}, deep blush, bright teary eyes, happy flustered expression, slightly messy hair, warm glow, heartfelt emotional moment, cozy lighting`;
    }
  } else if (s === "normal") {
    return `${c}, blush, parted lips, half-lidded eyes, seductive expression, ${o ? "collarbone visible, loose unbuttoned shirt, bare pecs visible" : "collarbone visible, loose unbuttoned clothing, off-shoulder, cleavage"}, smooth skin, light sweat, soft warm lighting, messy bed sheets, intimate atmosphere`;
  } else {
    return `${c}, heavy blush, teary eyes, open mouth, heavy panting, glistening sweat, ${o ? "shirt fully open, bare muscular chest exposed, abs visible" : "clothing pulled aside, bare shoulders, cleavage"}, messy bed sheets, dim warm lighting, steamy, ecstasy expression`;
  }
}
async function Yt(e) {
  const {
    userId: t,
    characterId: s,
    onProgress: a,
    climaxOnly: n = false,
    posePrompt: i = "",
    gender: l = "",
    customReplacePrompt: o = ""
  } = e;
  const c = {
    customReplace: o,
    iosSafe: v()
  };
  const d = await m.get("apiSettings");
  if (!d) {
    return null;
  }
  const u = await async function (e, t) {
    let s = "";
    let a = null;
    try {
      a = await p.get(t);
      if (a == null ? undefined : a.imagePrompt) {
        s = a.imagePrompt;
      }
    } catch (n) {}
    if (!s) {
      try {
        const a = await r.get(e, t);
        if (a == null ? undefined : a.charImagePrompt) {
          s = a.charImagePrompt;
        }
      } catch (n) {}
    }
    if (!s && (a == null ? undefined : a.description)) {
      s = N(a.description);
    }
    return s || "";
  }(t, s);
  const h = l || (await async function (e) {
    try {
      let t = await p.get(e);
      if (!t && e != null) {
        t = await p.get(String(e));
      }
      if (!t && !isNaN(Number(e))) {
        t = await p.get(Number(e));
      }
      return (t == null ? undefined : t.gender) || "";
    } catch (t) {
      return "";
    }
  }(s));
  console.log("[touchImageService] gender resolved:", h, "hint=", l, "charId=", s);
  let g = null;
  try {
    const e = await r.get(t, s);
    g = (e == null ? undefined : e.imagePreset) || null;
  } catch (A) {}
  const x = b(d, g);
  let y = x.touchImageApi || "auto";
  if (y === "disabled") {
    return null;
  }
  if (y === "auto") {
    if (x.novelAiEnabled) {
      y = "novelai";
    } else if (x.pollinationsEnabled) {
      y = "pollinations";
    } else if (x.googleImagenEnabled) {
      y = "googleimagen";
    } else if (x.geminiImageEnabled) {
      y = "geminiimage";
    } else if (x.grokEnabled) {
      y = "grok";
    } else {
      if (!x.gptImageEnabled) {
        return null;
      }
      y = "gptimage";
    }
  }
  const f = function (e) {
    if (Ht[e]) {
      return Ht[e];
    }
    const t = e.split("x").map(Number);
    if (t.length !== 2) {
      return "832x1216";
    }
    const [s, a] = t;
    if (s > a) {
      return `${a}x${s}`;
    } else {
      return e;
    }
  }(x[y === "novelai" ? "novelAiImageSize" : "pollinationsImageSize"] || "1024x1024");
  const j = (k = y) === "novelai" || k === "pollinations";
  var k;
  let C = null;
  try {
    const e = (await p.get(s)) || (await p.get(String(s)));
    const t = Number(e == null ? undefined : e.imageSeed);
    if (Number.isFinite(t) && t >= 0) {
      C = Math.floor(t);
    }
  } catch (A) {}
  const S = C ?? Math.floor(Math.random() * 9999999);
  const M = {
    ...x,
    novelAiImageSize: y === "novelai" ? f : x.novelAiImageSize,
    pollinationsImageSize: y === "pollinations" ? f : x.pollinationsImageSize,
    ...(j ? {
      novelAiSeed: y === "novelai" ? S : x.novelAiSeed,
      pollinationsSeed: y === "pollinations" ? S : x.pollinationsSeed
    } : {})
  };
  const D = {};
  if (j && !n) {
    if (a != null) {
      a(1, 2, "normalIdle");
    }
    const e = await w(Qt(u, h, "normal", i, c), "touch", M, {
      forceApi: y
    });
    if (e) {
      D.normalIdle = e;
    }
    if (a != null) {
      a(2, 2, "climaxIdle");
    }
    const t = await w(Qt(u, h, "climax", i, c), "touch", M, {
      forceApi: y
    });
    if (t) {
      D.climaxIdle = t;
    }
  } else {
    if (a != null) {
      a(1, 1, "climaxIdle");
    }
    const e = await w(Qt(u, h, "climax", i, c), "touch", M, {
      forceApi: y
    });
    if (e) {
      D.climaxIdle = e;
    }
  }
  if (D.climaxIdle || D.normalIdle) {
    return D;
  } else {
    return null;
  }
}
const Gt = {
  FULL: "full",
  UPPER: "upper",
  PORTRAIT: "portrait"
};
const Kt = [{
  id: "forehead",
  yMin: 0,
  yMax: 0.05,
  xMin: 0.2,
  xMax: 0.8
}, {
  id: "earL",
  yMin: 0.03,
  yMax: 0.12,
  xMin: 0,
  xMax: 0.2
}, {
  id: "earR",
  yMin: 0.03,
  yMax: 0.12,
  xMin: 0.8,
  xMax: 1
}, {
  id: "eyes",
  yMin: 0.05,
  yMax: 0.08,
  xMin: 0.2,
  xMax: 0.8
}, {
  id: "nose",
  yMin: 0.08,
  yMax: 0.1,
  xMin: 0.3,
  xMax: 0.7
}, {
  id: "cheekL",
  yMin: 0.08,
  yMax: 0.12,
  xMin: 0.15,
  xMax: 0.3
}, {
  id: "cheekR",
  yMin: 0.08,
  yMax: 0.12,
  xMin: 0.7,
  xMax: 0.85
}, {
  id: "mouth",
  yMin: 0.1,
  yMax: 0.13,
  xMin: 0.3,
  xMax: 0.7
}, {
  id: "chin",
  yMin: 0.13,
  yMax: 0.16,
  xMin: 0.2,
  xMax: 0.8
}, {
  id: "neck",
  yMin: 0.16,
  yMax: 0.2,
  xMin: 0.25,
  xMax: 0.75
}, {
  id: "leftArm",
  yMin: 0.16,
  yMax: 0.5,
  xMin: 0,
  xMax: 0.18
}, {
  id: "rightArm",
  yMin: 0.16,
  yMax: 0.5,
  xMin: 0.82,
  xMax: 1
}, {
  id: "chest",
  yMin: 0.2,
  yMax: 0.36,
  xMin: 0.18,
  xMax: 0.82
}, {
  id: "abs",
  yMin: 0.36,
  yMax: 0.5,
  xMin: 0.18,
  xMax: 0.82
}, {
  id: "crotch",
  yMin: 0.5,
  yMax: 0.58,
  xMin: 0.15,
  xMax: 0.85
}, {
  id: "thigh",
  yMin: 0.58,
  yMax: 0.78,
  xMin: 0,
  xMax: 1
}, {
  id: "leg",
  yMin: 0.78,
  yMax: 1,
  xMin: 0,
  xMax: 1
}];
const Zt = {
  [Gt.FULL]: Kt,
  [Gt.UPPER]: [{
    id: "forehead",
    yMin: 0,
    yMax: 0.08,
    xMin: 0.18,
    xMax: 0.82
  }, {
    id: "earL",
    yMin: 0.05,
    yMax: 0.2,
    xMin: 0,
    xMax: 0.18
  }, {
    id: "earR",
    yMin: 0.05,
    yMax: 0.2,
    xMin: 0.82,
    xMax: 1
  }, {
    id: "eyes",
    yMin: 0.08,
    yMax: 0.13,
    xMin: 0.18,
    xMax: 0.82
  }, {
    id: "nose",
    yMin: 0.13,
    yMax: 0.17,
    xMin: 0.28,
    xMax: 0.72
  }, {
    id: "cheekL",
    yMin: 0.13,
    yMax: 0.2,
    xMin: 0.1,
    xMax: 0.28
  }, {
    id: "cheekR",
    yMin: 0.13,
    yMax: 0.2,
    xMin: 0.72,
    xMax: 0.9
  }, {
    id: "mouth",
    yMin: 0.17,
    yMax: 0.22,
    xMin: 0.28,
    xMax: 0.72
  }, {
    id: "chin",
    yMin: 0.22,
    yMax: 0.26,
    xMin: 0.2,
    xMax: 0.8
  }, {
    id: "neck",
    yMin: 0.26,
    yMax: 0.32,
    xMin: 0.25,
    xMax: 0.75
  }, {
    id: "leftArm",
    yMin: 0.26,
    yMax: 0.75,
    xMin: 0,
    xMax: 0.18
  }, {
    id: "rightArm",
    yMin: 0.26,
    yMax: 0.75,
    xMin: 0.82,
    xMax: 1
  }, {
    id: "chest",
    yMin: 0.32,
    yMax: 0.55,
    xMin: 0.18,
    xMax: 0.82
  }, {
    id: "abs",
    yMin: 0.55,
    yMax: 0.75,
    xMin: 0.18,
    xMax: 0.82
  }, {
    id: "crotch",
    yMin: 0.75,
    yMax: 0.88,
    xMin: 0.1,
    xMax: 0.9
  }, {
    id: "thigh",
    yMin: 0.88,
    yMax: 1,
    xMin: 0,
    xMax: 1
  }],
  [Gt.PORTRAIT]: [{
    id: "forehead",
    yMin: 0,
    yMax: 0.15,
    xMin: 0.15,
    xMax: 0.85
  }, {
    id: "earL",
    yMin: 0.1,
    yMax: 0.45,
    xMin: 0,
    xMax: 0.15
  }, {
    id: "earR",
    yMin: 0.1,
    yMax: 0.45,
    xMin: 0.85,
    xMax: 1
  }, {
    id: "eyes",
    yMin: 0.15,
    yMax: 0.28,
    xMin: 0.15,
    xMax: 0.85
  }, {
    id: "nose",
    yMin: 0.28,
    yMax: 0.4,
    xMin: 0.25,
    xMax: 0.75
  }, {
    id: "cheekL",
    yMin: 0.28,
    yMax: 0.48,
    xMin: 0.05,
    xMax: 0.25
  }, {
    id: "cheekR",
    yMin: 0.28,
    yMax: 0.48,
    xMin: 0.75,
    xMax: 0.95
  }, {
    id: "mouth",
    yMin: 0.4,
    yMax: 0.52,
    xMin: 0.25,
    xMax: 0.75
  }, {
    id: "chin",
    yMin: 0.52,
    yMax: 0.64,
    xMin: 0.15,
    xMax: 0.85
  }, {
    id: "neck",
    yMin: 0.64,
    yMax: 0.78,
    xMin: 0.2,
    xMax: 0.8
  }, {
    id: "leftArm",
    yMin: 0.64,
    yMax: 1,
    xMin: 0,
    xMax: 0.2
  }, {
    id: "rightArm",
    yMin: 0.64,
    yMax: 1,
    xMin: 0.8,
    xMax: 1
  }, {
    id: "chest",
    yMin: 0.78,
    yMax: 1,
    xMin: 0.2,
    xMax: 0.8
  }]
};
const Vt = ["forehead", "earL", "earR", "eyes", "nose", "cheekL", "cheekR", "mouth", "chin", "neck", "chest", "leftArm", "rightArm", "abs", "crotch", "thigh", "leg"];
const Jt = "sensitive";
const Xt = "normal";
const es = "dislike";
function ts(e) {
  var t;
  var s;
  var a;
  var n;
  var i;
  var l;
  var r;
  var o;
  var c;
  var d;
  var u;
  const h = e.points || {};
  const m = h.eyeL;
  const p = h.eyeR;
  if (!m && e.eyeY != null) {
    const t = e.centerX || 0.5;
    const s = e.interEye || 0.12;
    return ts({
      points: {
        eyeL: {
          x: t - s / 2,
          y: e.eyeY
        },
        eyeR: {
          x: t + s / 2,
          y: e.eyeY
        },
        mouth: e.mouthY != null ? {
          x: t,
          y: e.mouthY
        } : null,
        chin: e.chinY != null ? {
          x: t,
          y: e.chinY
        } : null,
        shoulderL: h.shoulderL,
        shoulderR: h.shoulderR,
        waist: h.waist
      }
    });
  }
  if (!m || !p) {
    return null;
  }
  const g = (m.y + p.y) / 2;
  const x = (m.x + p.x) / 2;
  const v = Math.abs(p.x - m.x);
  const y = Math.max(v * 2.5, 0.15);
  const f = y / 2;
  const j = ((t = h.nose) == null ? undefined : t.y) ?? g + y * 0.35;
  const b = ((s = h.mouth) == null ? undefined : s.y) ?? g + y * 0.65;
  const w = ((a = h.chin) == null ? undefined : a.y) ?? g + y * 0.85;
  const N = Math.max(0.03, w - g);
  const k = ((n = h.collarbone) == null ? undefined : n.y) ?? w + N * 0.25;
  const C = (g + j) / 2;
  const S = (j + b) / 2;
  const M = (b + w) / 2;
  const D = Math.max(0, g - (C - g));
  const A = N * 1.5;
  const T = ((i = h.shoulderL) == null ? undefined : i.x) ?? x - f * 1.6;
  const I = ((l = h.shoulderR) == null ? undefined : l.x) ?? x + f * 1.6;
  const E = ((r = h.shoulderL) == null ? undefined : r.y) ?? ((o = h.shoulderR) == null ? undefined : o.y) ?? k + N * 0.15;
  const $ = Math.min(E, k + N * 0.2);
  const P = ((c = h.chest) == null ? undefined : c.y) ?? $ + A * 0.6;
  const F = ((d = h.navel) == null ? undefined : d.y) ?? P + A * 0.8;
  const L = ((u = h.hip) == null ? undefined : u.y) ?? F + A * 0.5;
  const R = L + A * 1.5;
  const O = e => Math.max(0, Math.min(1, e));
  const W = (e, t, s, a, n) => ({
    id: e,
    yMin: O(t),
    yMax: O(s),
    xMin: O(a),
    xMax: O(n)
  });
  const z = [W("forehead", D, g - N * 0.06, x - f, x + f), W("earL", g - N * 0.06, M, x - f - 0.08, x - f), W("earR", g - N * 0.06, M, x + f, x + f + 0.08), W("eyes", g - N * 0.06, C, x - f, x + f), W("nose", C, S, x - f * 0.55, x + f * 0.55), W("cheekL", C, M, x - f, x - f * 0.55), W("cheekR", C, M, x + f * 0.55, x + f), W("mouth", S, M, x - f * 0.6, x + f * 0.6), W("chin", M, k, x - f * 0.8, x + f * 0.8)];
  if (h.chin || h.collarbone || h.shoulderL || h.chest) {
    z.push(W("neck", k, $, x - f * 0.7, x + f * 0.7), W("leftArm", $, F, 0, T), W("rightArm", $, F, I, 1), W("chest", $, P, T, I), W("abs", P, F, T, I), W("crotch", F, L, 0, 1), W("thigh", L, R, 0, 1), W("leg", R, 1, 0, 1));
  }
  return z;
}
function ss(e, t, s) {
  const a = Math.max(s.xMin - e, 0, e - s.xMax);
  const n = Math.max(s.yMin - t, 0, t - s.yMax);
  return Math.sqrt(a * a + n * n);
}
function as(e, t, s, a = 0) {
  return e >= s.xMin - a && e <= s.xMax + a && t >= s.yMin - a && t <= s.yMax + a;
}
function ns(e) {
  return {
    w: Math.max(0.001, e.xMax - e.xMin),
    h: Math.max(0.001, e.yMax - e.yMin)
  };
}
function is(e, t, s) {
  const a = function (e) {
    return {
      x: (e.xMin + e.xMax) / 2,
      y: (e.yMin + e.yMax) / 2
    };
  }(s);
  const n = ns(s);
  const i = (e - a.x) / n.w;
  const l = (t - a.y) / n.h;
  return Math.sqrt(i * i + l * l);
}
const ls = {
  [Jt]: 2,
  [Xt]: 1,
  [es]: -0.3
};
const rs = [{
  id: "hand",
  icon: de,
  nameKey: "couplesTouchItemHand",
  unlockLevel: 1,
  sens: 5
}, {
  id: "feather",
  icon: ue,
  nameKey: "couplesTouchItemFeather",
  unlockLevel: 1,
  sens: 8
}, {
  id: "ice",
  icon: he,
  nameKey: "couplesTouchItemIce",
  unlockLevel: 2,
  sens: 10
}, {
  id: "tie",
  icon: me,
  nameKey: "couplesTouchItemTie",
  unlockLevel: 2,
  sens: 12,
  isState: true
}, {
  id: "brush",
  icon: pe,
  nameKey: "couplesTouchItemBrush",
  unlockLevel: 3,
  sens: 15
}, {
  id: "lipstick",
  icon: Z,
  nameKey: "couplesTouchItemLipstick",
  unlockLevel: 3,
  sens: 18
}, {
  id: "blindfold",
  icon: ge,
  nameKey: "couplesTouchItemBlindfold",
  unlockLevel: 4,
  sens: 15,
  isState: true
}, {
  id: "whip",
  icon: xe,
  nameKey: "couplesTouchItemWhip",
  unlockLevel: 4,
  sens: 20
}];
const os = ["eyeL", "eyeR", "nose", "mouth", "chin", "collarbone", "shoulderL", "shoulderR", "chest", "navel", "hip"];
const cs = {
  eyeL: "couplesTouchCalibEyeL",
  eyeR: "couplesTouchCalibEyeR",
  nose: "couplesTouchCalibNose",
  mouth: "couplesTouchCalibMouth",
  chin: "couplesTouchCalibChin",
  collarbone: "couplesTouchCalibCollarbone",
  shoulderL: "couplesTouchCalibShoulderL",
  shoulderR: "couplesTouchCalibShoulderR",
  chest: "couplesTouchCalibChest",
  navel: "couplesTouchCalibNavel",
  hip: "couplesTouchCalibHip"
};
function ds(e) {
  return Math.max(0, Math.min(1, e));
}
async function us(e) {
  if (typeof e != "string" || !e.startsWith("data:")) {
    return null;
  }
  try {
    return await i.put(e);
  } catch (t) {
    return null;
  }
}
async function hs(e) {
  const t = [...new Set((e || []).filter(e => e != null))];
  if (t.length === 0) {
    return new Map();
  }
  try {
    const e = await i.bulkGet(t);
    const s = new Map();
    e.forEach(e => {
      if (e) {
        s.set(e.id, e.data);
      }
    });
    return s;
  } catch (s) {
    return new Map();
  }
}
function ms(e) {
  const t = (e || []).filter(e => e != null);
  if (t.length !== 0) {
    i.bulkDelete(t).catch(() => {});
  }
}
function ps(e, t) {
  const s = e.eyeL;
  const a = e.eyeR;
  if (!s || !a) {
    return null;
  }
  const n = {};
  Object.entries(e).forEach(([e, t]) => {
    if (t) {
      n[e] = {
        x: ds(t.x),
        y: ds(t.y)
      };
    }
  });
  return {
    imageKey: t,
    points: n
  };
}
const gs = ({
  onClose: s,
  couplesData: a,
  saveData: l,
  currentPartner: c,
  userId: h,
  characterId: g
}) => {
  var x;
  var v;
  var b;
  var w;
  var N;
  const {
    t: C,
    language: S
  } = n();
  const M = e.useRef(a);
  M.current = a;
  const D = e.useRef(g);
  D.current = g;
  const A = rs.map(e => ({
    ...e,
    name: C(e.nameKey)
  }));
  const [T, I] = e.useState(0);
  const [E, $] = e.useState("hand");
  const [P, F] = e.useState("");
  const [L, R] = e.useState([]);
  const [W, z] = e.useState(false);
  const [B, q] = e.useState(false);
  const [H, Q] = e.useState(false);
  const [Y, G] = e.useState(null);
  const K = e.useRef(null);
  if (!K.current && c) {
    K.current = function (e) {
      const t = function (e) {
        let t = e;
        return () => {
          t = t * 1103515245 + 12345 & 2147483647;
          return t / 2147483647;
        };
      }(function (e) {
        let t = 0;
        const s = String(e);
        for (let a = 0; a < s.length; a++) {
          t = (t << 5) - t + s.charCodeAt(a);
          t |= 0;
        }
        return Math.abs(t);
      }(e));
      const s = ["forehead", "ear", "eyes", "nose", "cheek", "mouth", "chin", "neck", "chest", "arm", "abs", "crotch", "thigh", "leg"];
      const a = [...s];
      for (let o = a.length - 1; o > 0; o--) {
        const e = Math.floor(t() * (o + 1));
        [a[o], a[e]] = [a[e], a[o]];
      }
      const n = 3 + (t() > 0.5 ? 1 : 0);
      const i = 1 + (t() > 0.6 ? 1 : 0);
      const l = {};
      s.forEach(e => {
        l[e] = Xt;
      });
      for (let o = 0; o < n && o < a.length; o++) {
        l[a[o]] = Jt;
      }
      for (let o = n; o < n + i && o < a.length; o++) {
        l[a[o]] = es;
      }
      const r = {};
      Vt.forEach(e => {
        r[e] = Xt;
      });
      for (const [o, c] of Object.entries(l)) {
        if (o === "ear") {
          r.earL = c;
          r.earR = c;
        } else if (o === "cheek") {
          r.cheekL = c;
          r.cheekR = c;
        } else if (o === "arm") {
          r.leftArm = c;
          r.rightArm = c;
        } else {
          r[o] = c;
        }
      }
      return r;
    }(c.name || "default");
  }
  const [V, J] = e.useState(null);
  const [X, ee] = e.useState({});
  const [se, ae] = e.useState(false);
  const [ne, ie] = e.useState(null);
  const [le, re] = e.useState(false);
  const oe = e.useRef(null);
  const ce = e.useRef(null);
  const de = e.useRef(null);
  const me = e.useRef(Ft.instantiate_detection_memory(5));
  const pe = a.touchCalibration || null;
  const ge = a.touchCalibrationMap || {};
  const xe = e.useRef(null);
  const [be, we] = e.useState(() => new Map());
  const Ne = e.useRef(be);
  Ne.current = be;
  const ke = e.useCallback(e => {
    if (e == null || e === "") {
      return "";
    }
    if (typeof e == "number") {
      return be.get(e) || "";
    }
    if (typeof e == "string") {
      if (e.startsWith("data:") || e.startsWith("http") || e.startsWith("blob:")) {
        return e;
      }
      const t = Number(e);
      if (Number.isFinite(t)) {
        return be.get(t) || "";
      } else {
        return e;
      }
    }
    return "";
  }, [be]);
  const Ce = a.touchSettings || {};
  const Se = os;
  const Me = Ce.charImages || {};
  const De = function (e) {
    const t = String(e || "");
    if (!t) {
      return "";
    }
    let s = 5381;
    for (let a = 0; a < t.length; a++) {
      s = (s << 5) + s + t.charCodeAt(a);
      s |= 0;
    }
    return `img_${Math.abs(s)}_${t.length}`;
  }(ke(Me.normalIdle) || ke(Ce.customCharImage) || (c == null ? undefined : c.image) || (c == null ? undefined : c.avatar) || "");
  const Ae = ge[De] || (pe && pe.imageKey === De ? pe : null);
  const Te = !!Ae;
  if (Te && !xe.current) {
    xe.current = ts(Ae);
  }
  if (!Te && xe.current) {
    xe.current = null;
  }
  const Ie = e.useRef(new Set());
  e.useEffect(() => {
    if (De) {
      if (!Te && !Ie.current.has(De)) {
        Ie.current.add(De);
        J(Se[0]);
      }
    }
  }, [De]);
  const Ee = a.touchReactions || null;
  a.touchReactionTier;
  const [$e, Pe] = e.useState(false);
  const [Fe, Le] = e.useState([]);
  e.useEffect(() => {
    let e = false;
    o.getAll().then(t => {
      if (e) {
        return;
      }
      const s = [];
      (t || []).forEach(e => {
        (Array.isArray(e.entries) ? e.entries : e.entries && typeof e.entries == "object" ? Object.values(e.entries) : []).forEach(t => {
          if (t && t.type === "jailbreak") {
            const a = Array.isArray(t.key) ? t.key.filter(Boolean).join(", ") : t.keys || t.key || "";
            const n = t.name || t.comment || t.title || a || "(untitled)";
            s.push({
              id: `${e.id}::${t.id || t.uid || t.name || t.comment || a || Math.random()}`,
              bookName: e.name || "",
              comment: n,
              content: t.content || t.text || t.description || ""
            });
          }
        });
      });
      Le(s);
    }).catch(() => Le([]));
    return () => {
      e = true;
    };
  }, []);
  e.useEffect(() => {
    const e = (a == null ? undefined : a.touchSettings) || {};
    const t = e.charImages || {};
    const s = e => typeof e == "number" ? e : null;
    const n = [s(t.normalIdle), s(t.normalPress), s(t.climaxIdle), s(t.climaxPress), s(e.customCharImage), ...(Array.isArray(a == null ? undefined : a.customProps) ? a.customProps.map(e => s(e == null ? undefined : e.image)) : [])].filter(e => e != null);
    const i = Ne.current;
    const l = n.filter(e => !i.has(e));
    if (l.length === 0) {
      return;
    }
    let r = false;
    (async () => {
      const e = await hs(l);
      if (!r && e.size !== 0) {
        we(t => {
          const s = new Map(t);
          e.forEach((e, t) => s.set(t, e));
          return s;
        });
      }
    })();
    return () => {
      r = true;
    };
  }, [a == null ? undefined : a.touchSettings, a == null ? undefined : a.customProps]);
  const Re = e.useRef(false);
  e.useEffect(() => {
    if (Re.current) {
      return;
    }
    if (!a) {
      return;
    }
    const e = a.touchSettings || {};
    const t = e.charImages || {};
    const s = Array.isArray(a.customProps) ? a.customProps : [];
    const n = a.touchVoiceCache || {};
    const r = e => typeof e == "string" && e.startsWith("data:");
    const o = e => typeof e == "string" && !e.startsWith("data:") && e.length > 64;
    if (!r(t.normalIdle) && !r(t.normalPress) && !r(t.climaxIdle) && !r(t.climaxPress) && !r(e.customCharImage) && !s.some(e => r(e == null ? undefined : e.image)) && !Object.values(n).some(o)) {
      Re.current = true;
      return;
    }
    Re.current = true;
    let c = false;
    (async () => {
      const a = {
        ...t
      };
      const d = new Map();
      for (const e of ["normalIdle", "normalPress", "climaxIdle", "climaxPress"]) {
        if (r(t[e])) {
          const s = await us(t[e]);
          if (c) {
            return;
          }
          if (s != null) {
            a[e] = s;
            d.set(s, t[e]);
          }
        }
      }
      let u = e.customCharImage;
      if (r(e.customCharImage)) {
        const t = await us(e.customCharImage);
        if (c) {
          return;
        }
        if (t != null) {
          u = t;
          d.set(t, e.customCharImage);
        }
      }
      const h = [];
      for (const e of s) {
        if (e && r(e.image)) {
          const t = await us(e.image);
          if (c) {
            return;
          }
          if (t != null) {
            h.push({
              ...e,
              image: t
            });
            d.set(t, e.image);
            continue;
          }
        }
        h.push(e);
      }
      const m = {
        ...n
      };
      for (const [e, t] of Object.entries(n)) {
        if (o(t)) {
          try {
            const s = await i.put(t);
            if (c) {
              return;
            }
            if (s != null) {
              m[e] = s;
            }
          } catch (x) {}
        }
      }
      if (c) {
        return;
      }
      if (d.size > 0) {
        we(e => {
          const t = new Map(e);
          d.forEach((e, s) => t.set(s, e));
          return t;
        });
      }
      const p = M.current;
      const g = (p == null ? undefined : p.touchSettings) || {};
      l({
        ...p,
        touchSettings: {
          ...g,
          charImages: a,
          customCharImage: u
        },
        customProps: h,
        touchVoiceCache: m
      });
    })();
    return () => {
      c = true;
    };
  }, []);
  const [Oe, We] = e.useState(false);
  const ze = a.touchVoiceCache || {};
  const [Be, _e] = e.useState({});
  e.useEffect(() => {
    const e = Object.entries(ze || {});
    if (e.length === 0) {
      return;
    }
    const t = [];
    const s = {};
    for (const [n, i] of e) {
      if (typeof i == "number") {
        if (!(n in Be)) {
          t.push({
            key: n,
            ref: i
          });
        }
      } else if (typeof i == "string") {
        if (!(n in Be)) {
          s[n] = i;
        }
      }
    }
    if (t.length === 0 && Object.keys(s).length === 0) {
      return;
    }
    let a = false;
    (async () => {
      const e = {
        ...s
      };
      if (t.length > 0) {
        const s = await hs(t.map(e => e.ref));
        for (const {
          key: a,
          ref: n
        } of t) {
          const t = s.get(n);
          if (typeof t == "string") {
            e[a] = t;
          }
        }
      }
      if (!a && Object.keys(e).length !== 0) {
        _e(t => ({
          ...t,
          ...e
        }));
      }
    })();
    return () => {
      a = true;
    };
  }, [ze]);
  const Ue = async (e, t) => {
    let s = t;
    try {
      const e = await i.put(t);
      if (e != null) {
        s = e;
      }
    } catch (o) {}
    _e(s => ({
      ...s,
      [e]: t
    }));
    const a = M.current;
    const n = (a == null ? undefined : a.touchVoiceCache) || {};
    const r = n[e];
    if (typeof r == "number") {
      ms([r]);
    }
    l({
      ...a,
      touchVoiceCache: {
        ...n,
        [e]: s
      }
    });
  };
  const qe = () => {
    var e;
    var t;
    var s;
    var n;
    var i;
    const l = (((e = a.logs) == null ? undefined : e.length) || 0) * 10 + (((t = a.gifts) == null ? undefined : t.length) || 0) * 20 + (((s = a.anniversaries) == null ? undefined : s.length) || 0) * 50 + (((n = a.qa) == null ? undefined : n.length) || 0) * 15 + (((i = a.whispers) == null ? undefined : i.length) || 0) * 10 + (a.touchCount || 0) * 2;
    return Math.min(100, l / 10 + T * 0.3);
  };
  const He = Ut(qe());
  const Qe = () => {
    var e;
    const t = ce.current;
    const s = (e = oe.current) == null ? undefined : e.getBoundingClientRect();
    if (!s) {
      return null;
    }
    if (!t) {
      return s;
    }
    const a = t.getBoundingClientRect();
    const n = t.naturalWidth || 0;
    const i = t.naturalHeight || 0;
    if (!n || !i || !a.width || !a.height) {
      return a;
    }
    const l = Math.max(a.width / n, a.height / i);
    let r = n * l;
    let o = i * l;
    let c = a.left - (r - a.width) * 0.5;
    let d = a.top - (o - a.height) * 0.35;
    const u = r * 1.03;
    const h = o * 1.03;
    c -= (u - r) / 2;
    d -= h - o;
    r = u;
    o = h;
    return {
      left: c,
      top: d,
      width: r,
      height: o
    };
  };
  const Ye = e => {
    var t;
    const s = (t = oe.current) == null ? undefined : t.getBoundingClientRect();
    const a = Qe();
    if (!s || !a) {
      return null;
    }
    const n = typeof e.clientX == "number" ? e.clientX : s.left + s.width / 2;
    const i = typeof e.clientY == "number" ? e.clientY : s.top + s.height / 2;
    return {
      x: n - s.left,
      y: i - s.top,
      relX: ds((n - a.left) / Math.max(1, a.width)),
      relY: ds((i - a.top) / Math.max(1, a.height))
    };
  };
  const Ge = e => {
    var t;
    if (!e) {
      return {
        left: "50%",
        top: "50%"
      };
    }
    const s = (t = oe.current) == null ? undefined : t.getBoundingClientRect();
    const a = Qe();
    if (!s || !a || !s.width || !s.height) {
      return {
        left: ds(e.x) * 100 + "%",
        top: ds(e.y) * 100 + "%"
      };
    }
    const n = a.left - s.left + ds(e.x) * a.width;
    const i = a.top - s.top + ds(e.y) * a.height;
    return {
      left: n / s.width * 100 + "%",
      top: i / s.height * 100 + "%"
    };
  };
  const Ke = e => {
    if (!e) {
      return;
    }
    const t = M.current;
    const s = {
      ...(t.touchCalibrationMap || {}),
      [De]: e
    };
    l({
      ...t,
      touchCalibration: e,
      touchCalibrationMap: s
    });
  };
  const Ze = async () => {
    if (le) {
      return;
    }
    const e = ce.current;
    if (e && e.complete) {
      re(true);
      try {
        const s = e.naturalWidth || 0;
        const a = e.naturalHeight || 0;
        if (!s || !a) {
          F(C("couplesTouchModelNotReady"));
          return;
        }
        const n = document.createElement("canvas");
        n.width = s;
        n.height = a;
        const i = n.getContext("2d");
        if (!i) {
          F(C("couplesTouchModelFailed"));
          return;
        }
        i.drawImage(e, 0, 0, s, a);
        const l = (() => {
          const e = i.getImageData(0, 0, s, a).data;
          const t = (t, a) => {
            const n = (a * s + t) * 4;
            return [e[n], e[n + 1], e[n + 2], e[n + 3]];
          };
          const n = [t(0, 0), t(s - 1, 0), t(0, a - 1), t(s - 1, a - 1)].reduce((e, t) => {
            e[0] += t[0];
            e[1] += t[1];
            e[2] += t[2];
            e[3] += t[3];
            return e;
          }, [0, 0, 0, 0]).map(e => e / 4);
          let l = s;
          let r = a;
          let o = -1;
          let c = -1;
          const d = new Array(a).fill(Infinity);
          const u = new Array(a).fill(-1);
          for (let i = 0; i < a; i += 2) {
            for (let t = 0; t < s; t += 2) {
              const a = (i * s + t) * 4;
              const h = e[a];
              const m = e[a + 1];
              const p = e[a + 2];
              const g = e[a + 3];
              const x = Math.abs(h - n[0]) + Math.abs(m - n[1]) + Math.abs(p - n[2]);
              const v = Math.abs(g - n[3]);
              if (g > 24 || x + v * 0.6 > 95) {
                if (t < l) {
                  l = t;
                }
                if (i < r) {
                  r = i;
                }
                if (t > o) {
                  o = t;
                }
                if (i > c) {
                  c = i;
                }
                if (t < d[i]) {
                  d[i] = t;
                }
                if (t > u[i]) {
                  u[i] = t;
                }
              }
            }
          }
          if (o <= l || c <= r) {
            return {
              subject: {
                x: s * 0.22,
                y: a * 0.08,
                width: s * 0.56,
                height: a * 0.84
              },
              head: {
                x: s * 0.3,
                y: a * 0.1,
                width: s * 0.4,
                height: a * 0.32
              }
            };
          }
          const h = (o - l) * 0.05;
          const m = (c - r) * 0.03;
          const p = {
            x: Math.max(0, l - h),
            y: Math.max(0, r - m),
            width: Math.min(s, o + h) - Math.max(0, l - h),
            height: Math.min(a, c + m) - Math.max(0, r - m)
          };
          const g = Math.max(0, Math.floor(p.y));
          const x = Math.min(a - 1, Math.floor(p.y + p.height - 1));
          const v = Math.min(x, g + Math.max(20, Math.floor(p.height * 0.58)));
          const y = [];
          for (let s = g; s <= v; s++) {
            const e = d[s];
            const t = u[s];
            if (!!Number.isFinite(e) && !(t < e)) {
              y.push({
                y: s,
                min: e,
                max: t,
                width: t - e + 1
              });
            }
          }
          if (y.length < 8) {
            return {
              subject: p,
              head: {
                x: p.x + p.width * 0.18,
                y: p.y,
                width: p.width * 0.64,
                height: p.height * 0.36
              }
            };
          }
          const f = y.map((e, t) => {
            const s = y[Math.max(0, t - 1)].width;
            const a = e.width;
            const n = y[Math.min(y.length - 1, t + 1)].width;
            return {
              ...e,
              sw: (s + a + n) / 3
            };
          });
          let j = Math.floor(f.length * 0.36);
          let b = -Infinity;
          for (let s = Math.floor(f.length * 0.2); s < Math.floor(f.length * 0.7); s++) {
            const e = f[s + 1].sw - f[s].sw;
            if (e > b) {
              b = e;
              j = s;
            }
          }
          const w = f.slice(0, Math.max(4, j + 1));
          let N = Infinity;
          let k = -1;
          w.forEach(e => {
            if (e.min < N) {
              N = e.min;
            }
            if (e.max > k) {
              k = e.max;
            }
          });
          const C = w[0].y;
          const S = w[w.length - 1].y;
          const M = Number.isFinite(N) ? N : p.x + p.width * 0.18;
          const D = k > N ? k - N + 1 : p.width * 0.64;
          return {
            subject: p,
            head: {
              x: Math.max(0, M - D * 0.08),
              y: Math.max(0, C - 2),
              width: Math.min(s, M + D * 1.08) - Math.max(0, M - D * 0.08),
              height: Math.max(12, S - C + 1)
            }
          };
        })();
        const r = l.subject;
        const o = e => {
          const t = {
            x: r.x + r.width * 0.2,
            y: r.y + r.height * 0.02,
            width: r.width * 0.6,
            height: r.height * 0.35
          };
          let s = e ? {
            ...e
          } : {
            ...t
          };
          if (s.width < t.width * 0.55 || s.height < t.height * 0.5) {
            s = {
              ...t
            };
          }
          const a = s.x + s.width * 0.5;
          const n = s.y + s.height * 0.5;
          const i = Math.max(24, t.width * 0.7);
          const l = Math.min(r.width * 0.92, t.width * 1.6);
          const o = Math.max(24, t.height * 0.72);
          const c = Math.min(r.height * 0.85, t.height * 1.5);
          s.width = Math.max(i, Math.min(l, s.width));
          s.height = Math.max(o, Math.min(c, s.height));
          s.x = a - s.width * 0.5;
          s.y = n - s.height * 0.5;
          const d = r.y + r.height * 0.66;
          const u = r.y - r.height * 0.02;
          if (s.y < u) {
            s.y = u;
          }
          if (s.y + s.height > d) {
            s.y = d - s.height;
          }
          if (s.x < r.x) {
            s.x = r.x;
          }
          if (s.x + s.width > r.x + r.width) {
            s.x = r.x + r.width - s.width;
          }
          return s;
        };
        let c = o(l.head);
        let u = null;
        try {
          const t = await async function (e) {
            const t = await m.get("apiSettings");
            if (!(t == null ? undefined : t.mainApiKey) || !(t == null ? undefined : t.mainApiUrl)) {
              return null;
            }
            const s = function (e, t = 512) {
              const s = document.createElement("canvas");
              let a = e.naturalWidth || e.width;
              let n = e.naturalHeight || e.height;
              if (a > n) {
                if (a > t) {
                  n = Math.round(n * t / a);
                  a = t;
                }
              } else if (n > t) {
                a = Math.round(a * t / n);
                n = t;
              }
              s.width = a;
              s.height = n;
              s.getContext("2d").drawImage(e, 0, 0, a, n);
              return s.toDataURL("image/jpeg", 0.7);
            }(e);
            const a = [{
              role: "system",
              content: "You are a precise anime/illustration character landmark detector.\nAnalyze the character in this image and return the positions of ALL VISIBLE body landmarks as percentages (0-100) of image width (x) and height (y).\n\nReturn ONLY a JSON object with these keys (set to null if not visible):\n{\n  \"eyeL\": {\"x\": <number>, \"y\": <number>},\n  \"eyeR\": {\"x\": <number>, \"y\": <number>},\n  \"nose\": {\"x\": <number>, \"y\": <number>},\n  \"mouth\": {\"x\": <number>, \"y\": <number>},\n  \"chin\": {\"x\": <number>, \"y\": <number>},\n  \"collarbone\": {\"x\": <number>, \"y\": <number>},\n  \"shoulderL\": {\"x\": <number>, \"y\": <number>},\n  \"shoulderR\": {\"x\": <number>, \"y\": <number>},\n  \"chest\": {\"x\": <number>, \"y\": <number>},\n  \"navel\": {\"x\": <number>, \"y\": <number>},\n  \"hip\": {\"x\": <number>, \"y\": <number>}\n}\n\nRules:\n- eyeL = character's LEFT eye (appears on viewer's RIGHT side), eyeR = opposite\n- If eyes closed, estimate the center of the closed eyelid curve\n- nose = tip of nose, mouth = center of lips, chin = bottom of chin\n- collarbone = center of collarbone/base of neck\n- chest = center of chest between shoulders\n- navel = belly button area, hip = center of hip line\n- null for any part NOT visible or obscured\n- top-left = (0,0), bottom-right = (100,100), 1 decimal precision"
            }, {
              role: "user",
              content: [{
                type: "text",
                text: "Detect all visible landmarks. Return JSON only."
              }, {
                type: "image_url",
                image_url: {
                  url: s,
                  detail: "low"
                }
              }]
            }];
            try {
              const e = await d({
                messages: a,
                preferStreaming: false,
                enableSecondaryFallback: false
              });
              if (!e) {
                return null;
              }
              let t = "";
              t = typeof e == "string" ? e : Array.isArray(e) ? e.map(e => (e == null ? undefined : e.text) || "").join("") : typeof e == "object" && e.text ? e.text : String(e);
              if (!t) {
                return null;
              }
              const s = t.match(/\{[\s\S]*\}/);
              if (!s) {
                return null;
              }
              const n = JSON.parse(s[0]);
              const i = e => e && typeof e.x == "number" && typeof e.y == "number" ? {
                x: e.x / 100,
                y: e.y / 100
              } : null;
              const l = {};
              for (const a of Rt) {
                l[a] = i(n[a]);
              }
              if (l.eyeL && l.eyeR) {
                return l;
              } else {
                return null;
              }
            } catch (n) {
              console.warn("[aiFaceLandmarks] detection failed:", n instanceof Error ? n.message : n);
              return null;
            }
          }(e);
          if (t && t.eyeL && t.eyeR) {
            u = {};
            for (const e of ["eyeL", "eyeR", "mouth", "chin", "shoulderL", "shoulderR", "waist"]) {
              if (t[e]) {
                u[e] = t[e];
              }
            }
          }
        } catch (t) {}
        if (!u) {
          const e = i.getImageData(0, 0, s, a);
          const n = function (e, t, s, a) {
            const n = e.data;
            const i = function (e, t, s) {
              const a = (s, a) => {
                const n = (a * t + s) * 4;
                return [e[n], e[n + 1], e[n + 2]];
              };
              const n = [a(1, 1), a(t - 2, 1), a(1, s - 2), a(t - 2, s - 2)];
              return [Math.round(n.reduce((e, t) => e + t[0], 0) / 4), Math.round(n.reduce((e, t) => e + t[1], 0) / 4), Math.round(n.reduce((e, t) => e + t[2], 0) / 4)];
            }(n, t, s);
            const l = a ? Math.max(0, Math.floor(a.x)) : 0;
            const r = a ? Math.max(0, Math.floor(a.y)) : 0;
            const o = a ? Math.min(t, Math.floor(a.x + a.width)) : t;
            const c = a ? Math.min(s, Math.floor(a.y + a.height * 0.6)) : Math.floor(s * 0.55);
            const d = Math.max(6, Math.round(Math.min(t, s) * 0.025));
            const u = {};
            const h = {};
            const m = {};
            for (let j = r; j < c; j += 2) {
              for (let e = l; e < o; e += 2) {
                const s = (j * t + e) * 4;
                const a = n[s];
                const l = n[s + 1];
                const o = n[s + 2];
                if (n[s + 3] < 128) {
                  continue;
                }
                if (Lt(a, l, o, i) < 55) {
                  continue;
                }
                const p = Math.max(a, l, o);
                const g = Math.min(a, l, o);
                const x = (a + l + o) / 3;
                const v = p > 20 ? (p - g) / p : 0;
                const y = `${Math.floor(e / d)},${Math.floor(j / d)}`;
                if (x < 65) {
                  u[y] ||= {
                    sx: 0,
                    sy: 0,
                    n: 0
                  };
                  u[y].sx += e;
                  u[y].sy += j;
                  u[y].n++;
                }
                if (v > 0.3 && x > 35 && x < 220) {
                  h[y] ||= {
                    sx: 0,
                    sy: 0,
                    n: 0,
                    satSum: 0
                  };
                  h[y].sx += e;
                  h[y].sy += j;
                  h[y].n++;
                  h[y].satSum += v;
                }
                if (x < 80 && j >= r + 4 && j < c - 4) {
                  const s = (j - 4) * t + e;
                  const a = (j + 4) * t + e;
                  const i = (n[s * 4] + n[s * 4 + 1] + n[s * 4 + 2]) / 3;
                  const l = (n[a * 4] + n[a * 4 + 1] + n[a * 4 + 2]) / 3;
                  const r = (e, t, s, a) => {
                    if (e < 100 || e > 240) {
                      return false;
                    }
                    const n = Math.max(t, s, a);
                    return (n > 20 ? (n - Math.min(t, s, a)) / n : 0) < 0.35 && t > s * 0.85 && t > a;
                  };
                  const o = r(i, n[s * 4], n[s * 4 + 1], n[s * 4 + 2]);
                  const c = r(l, n[a * 4], n[a * 4 + 1], n[a * 4 + 2]);
                  if (o || c) {
                    m[y] ||= {
                      sx: 0,
                      sy: 0,
                      n: 0
                    };
                    m[y].sx += e;
                    m[y].sy += j;
                    m[y].n++;
                  }
                }
              }
            }
            let p = [];
            for (const [j, b] of Object.entries(u)) {
              if (b.n < 2) {
                continue;
              }
              const [e, t] = j.split(",");
              const s = parseInt(e);
              const a = parseInt(t);
              let n = 0;
              for (let i = -2; i <= 2; i++) {
                for (let e = -2; e <= 2; e++) {
                  const t = h[`${s + i},${a + e}`];
                  if (t) {
                    n += t.n * (t.satSum / t.n);
                  }
                }
              }
              if (!(n < 1)) {
                p.push({
                  x: b.sx / b.n,
                  y: b.sy / b.n,
                  weight: b.n * 0.3 + n
                });
              }
            }
            for (const [j, b] of Object.entries(h)) {
              if (!(b.n < 3)) {
                p.push({
                  x: b.sx / b.n,
                  y: b.sy / b.n,
                  weight: b.n * (b.satSum / b.n) * 0.5
                });
              }
            }
            for (const [j, b] of Object.entries(m)) {
              if (b.n < 2) {
                continue;
              }
              const [e, t] = j.split(",");
              const s = parseInt(e);
              let a = 1;
              for (let n = 1; n <= 3; n++) {
                if (m[`${s + n},${t}`]) {
                  a++;
                }
                if (m[`${s - n},${t}`]) {
                  a++;
                }
              }
              if (!(a < 2)) {
                p.push({
                  x: b.sx / b.n,
                  y: b.sy / b.n,
                  weight: b.n * a * 0.6
                });
              }
            }
            if (p.length < 2) {
              return null;
            }
            p = function (e, t) {
              const s = [];
              const a = new Set();
              for (let n = 0; n < e.length; n++) {
                if (a.has(n)) {
                  continue;
                }
                let i = e[n].x * e[n].weight;
                let l = e[n].y * e[n].weight;
                let r = e[n].weight;
                for (let s = n + 1; s < e.length; s++) {
                  if (a.has(s)) {
                    continue;
                  }
                  const o = e[n].x - e[s].x;
                  const c = e[n].y - e[s].y;
                  if (Math.sqrt(o * o + c * c) < t) {
                    i += e[s].x * e[s].weight;
                    l += e[s].y * e[s].weight;
                    r += e[s].weight;
                    a.add(s);
                  }
                }
                s.push({
                  x: i / r,
                  y: l / r,
                  weight: r
                });
                a.add(n);
              }
              return s;
            }(p, d * 2.5);
            if (p.length < 2) {
              return null;
            }
            p.sort((e, t) => t.weight - e.weight);
            const g = p.slice(0, 10);
            let x = null;
            let v = -Infinity;
            for (let j = 0; j < g.length; j++) {
              for (let e = j + 1; e < g.length; e++) {
                const s = g[j];
                const a = g[e];
                const n = Math.abs(s.x - a.x);
                const i = Math.abs(s.y - a.y);
                const l = n / t;
                if (l < 0.05 || l > 0.4) {
                  continue;
                }
                if (i > n * 0.35) {
                  continue;
                }
                const r = (s.weight + a.weight) * (1 - i / Math.max(n, 1)) * (1 - Math.abs((s.x + a.x) / 2 / t - 0.5) + 0.5);
                if (r > v) {
                  v = r;
                  x = s.x < a.x ? [s, a] : [a, s];
                }
              }
            }
            if (!x) {
              return null;
            }
            const y = p.reduce((e, t) => e + t.weight, 0);
            const f = Math.min(1, (x[0].weight + x[1].weight) / (y * 0.5 + 1));
            return {
              eyeL: {
                x: x[0].x / t,
                y: x[0].y / s
              },
              eyeR: {
                x: x[1].x / t,
                y: x[1].y / s
              },
              confidence: f
            };
          }(e, s, a, r);
          if (!n || n.confidence <= 0.15) {
            try {
              const t = await (async () => {
                if (de.current) {
                  return de.current;
                }
                const e = await fetch(function () {
                  var e;
                  var t;
                  return `${(((t = (e = import.meta) == null ? undefined : e.env) == null ? undefined : t.BASE_URL) || "/").replace(/\/?$/, "/")}models/pico/facefinder`;
                }());
                if (!e.ok) {
                  throw new Error("pico cascade fetch failed");
                }
                const t = await e.arrayBuffer();
                de.current = Ft.unpack_cascade(new Int8Array(t));
                return de.current;
              })();
              const n = new Uint8Array(s * a);
              const i = e.data;
              for (let e = 0, s = 0; e < i.length; e += 4, s++) {
                n[s] = i[e] * 2 + i[e + 1] * 7 + i[e + 2] >> 3;
              }
              const l = Math.min(s, a);
              let r = Ft.run_cascade({
                pixels: n,
                nrows: a,
                ncols: s,
                ldim: s
              }, t, {
                shiftfactor: 0.1,
                minsize: Math.max(56, Math.round(l * 0.14)),
                maxsize: Math.round(l * 0.8),
                scalefactor: 1.1
              });
              r = Ft.cluster_detections(r, 0.2);
              r = me.current ? me.current(r) : r;
              const d = r.filter(e => e[3] > 40).sort((e, t) => t[3] * t[2] - e[3] * e[2])[0];
              if (d) {
                c = o({
                  x: d[1] - d[2] * 0.62,
                  y: d[0] - d[2] * 0.78,
                  width: d[2] * 1.24,
                  height: d[2] * 1.46
                });
              }
            } catch (t) {}
          }
          const l = ds((c.x + c.width * 0.5) / s);
          const d = ds((c.y + c.height * 0.42) / a);
          const h = ds(c.width * 0.34 / s);
          let m = null;
          let p = null;
          let g = null;
          if (n && n.confidence > 0.15) {
            m = n.eyeL;
            p = n.eyeR;
          }
          if (m && p && (Math.abs(p.x - m.x) < 0.03 || Math.abs(p.y - m.y) > 0.12)) {
            m = null;
            p = null;
          }
          m ||= {
            x: ds(l - h / 2),
            y: d
          };
          p ||= {
            x: ds(l + h / 2),
            y: d
          };
          if (!g || g.y < Math.min(m.y, p.y) + 0.06) {
            g = {
              x: l,
              y: ds((c.y + c.height * 0.74) / a)
            };
          }
          const x = (m.y + p.y) / 2;
          const v = {
            x: l,
            y: ds((c.y + c.height * 0.96) / a)
          };
          const y = Math.max(0.04, v.y - x);
          u = {
            eyeL: m,
            eyeR: p,
            mouth: g,
            chin: v
          };
          const f = ds((r.y + r.height) / a);
          if (f > v.y + y * 0.5) {
            const e = ds(v.y + y * 0.9);
            const t = Math.max(Math.abs(p.x - m.x) * 2.1, y * 0.9);
            u.shoulderL = {
              x: ds(l - t),
              y: e
            };
            u.shoulderR = {
              x: ds(l + t),
              y: e
            };
          }
          if (f > v.y + y * 2) {
            u.navel = {
              x: l,
              y: ds(Math.min(f * 0.78, v.y + y * 2.7))
            };
          }
        }
        const h = ps(u, De);
        const p = ts(h);
        if (!p) {
          F(C("couplesTouchModelFailed"));
          return;
        }
        xe.current = p;
        Ke(h);
        ee(u);
        J(null);
        ae(false);
        F(C("couplesTouchModelDone"));
      } catch (t) {
        F(C("couplesTouchModelFailed"));
      } finally {
        re(false);
      }
    } else {
      F(C("couplesTouchModelNotReady"));
    }
  };
  const [Ve, Je] = e.useState(false);
  const [Xe, et] = e.useState("");
  const [tt, st] = e.useState("");
  const [at, nt] = e.useState(true);
  const [it, lt] = e.useState("");
  const [rt, ot] = e.useState("");
  const [ct, dt] = e.useState(null);
  const [ut, ht] = e.useState(false);
  const [mt, pt] = e.useState([]);
  const [gt, xt] = e.useState(null);
  const vt = e.useRef(null);
  const yt = e.useRef(false);
  const ft = e.useRef(null);
  const jt = e.useRef(null);
  const bt = e.useRef(null);
  const wt = e.useRef(false);
  const Nt = e.useRef(0);
  const kt = e.useRef(null);
  const [Ct, St] = e.useState(false);
  const [Mt, Dt] = e.useState(null);
  const [At, Tt] = e.useState(false);
  const [It, Et] = e.useState(false);
  const $t = a.touchSettings || {
    enableVoice: false,
    enableAutoImage: false,
    customCharImage: null,
    charImages: {},
    bodyType: Gt.FULL
  };
  const Pt = $t.bodyType || Gt.FULL;
  const Ot = $t.charImages || {};
  e.useEffect(() => {
    const e = document.getElementById("nuo-os-root");
    if (e) {
      e.classList.toggle("ts-touch-immersive", It);
      return () => e.classList.remove("ts-touch-immersive");
    }
  }, [It]);
  e.useEffect(() => () => {
    if (ft.current) {
      clearTimeout(ft.current);
    }
    if (jt.current) {
      clearTimeout(jt.current);
    }
    if (bt.current) {
      clearTimeout(bt.current);
    }
  }, []);
  const Ht = (e, t) => {
    l({
      ...a,
      touchSettings: {
        ...$t,
        [e]: t
      }
    });
  };
  const Qt = e => {
    if (e.isCustom) {
      yt.current = false;
      vt.current = setTimeout(() => {
        yt.current = true;
        xt(e);
      }, 800);
    }
  };
  const gs = () => {
    if (vt.current) {
      clearTimeout(vt.current);
    }
  };
  const xs = (((x = a.logs) == null ? undefined : x.length) || 0) * 10 + (((v = a.gifts) == null ? undefined : v.length) || 0) * 20 + (((b = a.anniversaries) == null ? undefined : b.length) || 0) * 50 + (((w = a.qa) == null ? undefined : w.length) || 0) * 15 + (((N = a.whispers) == null ? undefined : N.length) || 0) * 10 + (a.touchCount || 0) * 2;
  const vs = Math.floor(xs / 200) + 1;
  const ys = [...A, ...(a.customProps || [])];
  const fs = ys.find(e => e.id === E);
  const js = T >= 100;
  const bs = ke($t.customCharImage) || (c == null ? undefined : c.image) || (c == null ? undefined : c.avatar) || "";
  const ws = {
    normalIdle: ke(Ot.normalIdle),
    normalPress: ke(Ot.normalPress),
    climaxIdle: ke(Ot.climaxIdle),
    climaxPress: ke(Ot.climaxPress)
  };
  const Ns = js ? B ? ws.climaxPress || ws.climaxIdle || ws.normalPress || ws.normalIdle || bs : ws.climaxIdle || ws.normalIdle || bs : B ? ws.normalPress || ws.normalIdle || bs : ws.normalIdle || bs;
  const ks = [...new Set([ws.normalIdle || bs, ws.normalPress || ws.normalIdle || bs, ws.climaxIdle || ws.normalIdle || bs, ws.climaxPress || ws.climaxIdle || ws.normalPress || ws.normalIdle || bs].filter(Boolean))];
  const Cs = e => {
    if (!fs || vs < fs.unlockLevel) {
      return;
    }
    const t = Date.now();
    if (t - Nt.current < 55) {
      return;
    }
    Nt.current = t;
    if (ft.current) {
      clearTimeout(ft.current);
    }
    Q(true);
    ft.current = setTimeout(() => Q(false), 220);
    const s = Ye(e);
    if (!s) {
      return;
    }
    const {
      x: n,
      y: i,
      relX: r,
      relY: o
    } = s;
    const d = function (e, t, s = Gt.FULL, a = null, n = {}) {
      const i = a || Zt[s] || Kt;
      const l = n.previousZoneId || null;
      const r = typeof n.stickyMargin == "number" ? n.stickyMargin : 0.03;
      const o = typeof n.maxTolerance == "number" ? n.maxTolerance : 0.12;
      if (!i || i.length === 0) {
        return null;
      }
      if (l) {
        const s = i.find(e => e.id === l);
        if (s && as(e, t, s, r)) {
          return s;
        }
      }
      let c = null;
      let d = Infinity;
      for (const m of i) {
        if (as(e, t, m, 0)) {
          const s = is(e, t, m);
          if (s < d) {
            c = m;
            d = s;
          }
        }
      }
      if (c) {
        return c;
      }
      let u = null;
      let h = Infinity;
      for (const m of i) {
        const s = ss(e, t, m);
        if (s < h) {
          h = s;
          u = m;
        }
      }
      if (u && h <= Math.min(o, function (e) {
        const t = ns(e);
        const s = Math.sqrt(t.w * t.h);
        return Math.max(0.025, Math.min(s * 0.55, 0.12));
      }(u))) {
        return u;
      } else {
        return null;
      }
    }(r, o, Pt, xe.current, {
      previousZoneId: kt.current,
      stickyMargin: 0.035,
      maxTolerance: 0.12
    });
    kt.current = (d == null ? undefined : d.id) || null;
    const p = K.current || {};
    const x = d && p[d.id] || Xt;
    const v = ls[x] ?? 1;
    const j = fs.sens || 15;
    const b = Math.round(j * v);
    const w = Math.max(0, Math.min(T + b, 100));
    I(w);
    if (w >= 100 && T < 100 && $t.enableAutoImage && !Ot.climaxIdle && !Oe) {
      (async () => {
        if (Oe) {
          return;
        }
        const e = g;
        We(true);
        F(C("couplesTouchCGGenerating"));
        try {
          const t = await Yt({
            userId: h,
            characterId: e || (c == null ? undefined : c.id) || (c == null ? undefined : c.name),
            gender: (c == null ? undefined : c.gender) || "",
            climaxOnly: true,
            posePrompt: $t.posePrompt || "",
            onProgress: () => {}
          });
          if (String(D.current) !== String(e)) {
            return;
          }
          if (t == null ? undefined : t.climaxIdle) {
            const s = await us(t.climaxIdle);
            if (String(D.current) !== String(e)) {
              ms([s]);
              return;
            }
            const a = M.current;
            const n = a.touchSettings || {};
            const i = n.charImages || {};
            if (s != null && typeof i.climaxIdle == "number") {
              ms([i.climaxIdle]);
            }
            const r = s ?? t.climaxIdle;
            if (s != null) {
              we(e => {
                const a = new Map(e);
                a.set(s, t.climaxIdle);
                return a;
              });
            }
            l({
              ...a,
              touchSettings: {
                ...n,
                charImages: {
                  ...i,
                  climaxIdle: r
                }
              }
            });
            setTimeout(() => {
              if (!Te) {
                Ze();
              }
            }, 500);
            F(C("couplesTouchCGDone"));
          }
        } catch (t) {} finally {
          We(false);
        }
      })();
    }
    let N = null;
    if (Ee && d) {
      N = _t(Ee, d.id, E, w >= 100, mt);
    }
    N ||= "...";
    F(N);
    const k = N && /^[（(（\[【\*]/.test(N.trim());
    if ($t.enableVoice && N && N !== "..." && !k) {
      let t = N.trim();
      const s = t.match(/(.+?)[（(].+?[）)]\s*$/);
      if (s) {
        t = s[1].trim();
      }
      (async function (t, s, a, n, i) {
        if (!t || !t.trim()) {
          return null;
        }
        const l = function (e) {
          let t = 0;
          for (let s = 0; s < e.length; s++) {
            t = (t << 5) - t + e.charCodeAt(s);
            t |= 0;
          }
          return `tv_${Math.abs(t)}_${e.length}`;
        }(t);
        if (qt.has(l)) {
          return qt.get(l);
        }
        const r = n == null ? undefined : n[l];
        if (r) {
          try {
            const e = function (e) {
              const t = atob(e);
              const s = new Uint8Array(t.length);
              for (let a = 0; a < t.length; a++) {
                s[a] = t.charCodeAt(a);
              }
              return new Blob([s], {
                type: "audio/mpeg"
              });
            }(r);
            qt.set(l, e);
            return e;
          } catch (f) {}
        }
        const o = await m.get("apiSettings");
        const {
          resolveCharVoiceConfig: c
        } = await u(async () => {
          const {
            resolveCharVoiceConfig: e
          } = await import("./native-pet-CTNtZgMA.js").then(e => e.cI);
          return {
            resolveCharVoiceConfig: e
          };
        }, __vite__mapDeps([2, 3, 4, 5, 6, 7]));
        const d = await c(s, a);
        const {
          voiceProvider: h,
          voiceId: p,
          voiceLanguage: g,
          voiceSpeed: x,
          sovitsRefText: v
        } = d;
        if (!(h === "elevenlabs" ? o == null ? undefined : o.elevenlabsApiKey : h === "gptsovits" ? o == null ? undefined : o.sovitsServerUrl : o == null ? undefined : o.minimaxApiKey)) {
          return null;
        }
        try {
          const e = await y(t, {
            ...d,
            apiSettings: o,
            voiceProvider: h,
            voiceId: p,
            sovitsRefText: v,
            language: g,
            speed: x || 1
          });
          if (!(e == null ? undefined : e.audioBlob)) {
            return null;
          }
          const s = e.audioBlob;
          qt.set(l, s);
          try {
            const e = await function (e) {
              return new Promise((t, s) => {
                const a = new FileReader();
                a.onload = () => t(a.result.split(",")[1]);
                a.onerror = s;
                a.readAsDataURL(e);
              });
            }(s);
            if (i != null) {
              i(l, e);
            }
          } catch (f) {}
          return s;
        } catch (e) {
          console.warn("[touchVoice] generation failed:", e instanceof Error ? e.message : e);
          return null;
        }
      })(t, h, g, Be, Ue).then(e => {
        if (e) {
          (function (e) {
            if (!e) {
              return;
            }
            const t = URL.createObjectURL(e);
            const s = new Audio(t);
            s.addEventListener("ended", () => URL.revokeObjectURL(t));
            s.addEventListener("error", () => URL.revokeObjectURL(t));
            s.addEventListener("loadedmetadata", () => {
              O(s);
            }, {
              once: true
            });
            f(s, {
              safetyTimeoutMs: 15000
            });
          })(e);
        }
      }).catch(() => {});
    }
    const S = Date.now();
    G({
      id: S,
      x: n,
      y: i
    });
    if (jt.current) {
      clearTimeout(jt.current);
    }
    jt.current = setTimeout(() => {
      G(e => e && e.id === S ? null : e);
    }, 460);
    const A = ["feather", "lipstick", "whip", "brush", "hand", "ice", "tie", "blindfold"].includes(E) ? E : "ripple";
    const $ = ["lipstick", "feather", "brush"].includes(E) ? Math.random() * 360 : 0;
    const P = {
      id: Date.now(),
      x: n,
      y: i,
      type: A,
      rotation: $
    };
    R(e => [...e, P]);
    let L = 800;
    if (E === "lipstick") {
      L = 4000;
    }
    if (E === "whip") {
      L = 1000;
    }
    if (E === "blindfold") {
      L = 2000;
    }
    if (E === "ice") {
      L = 1500;
    }
    if (E === "feather") {
      L = 1200;
    }
    if (E === "tie") {
      L = 1500;
    }
    if (E === "brush") {
      L = 1200;
    }
    if (E === "hand") {
      L = 1500;
    }
    setTimeout(() => {
      R(e => e.filter(e => e.id !== P.id));
    }, L);
    l({
      ...a,
      touchCount: (a.touchCount || 0) + 1
    });
  };
  return t.jsxs("div", {
    className: `ts-wrapper ${js ? "climax-mode" : ""} ${It ? "ts-immersive" : ""}`,
    children: [!It && t.jsxs("div", {
      className: "ts-header",
      style: {
        pointerEvents: "none"
      },
      children: [t.jsx("button", {
        className: "ts-btn-icon",
        style: {
          pointerEvents: "auto"
        },
        onClick: s,
        children: t.jsx(_, {
          size: 24,
          strokeWidth: 1.5
        })
      }), t.jsxs("div", {
        className: "ts-header-right",
        style: {
          pointerEvents: "auto"
        },
        children: [t.jsx("button", {
          className: "ts-btn-icon ts-inline-fullscreen",
          onClick: () => Et(true),
          "aria-label": C("couplesTouchFullscreen"),
          title: C("couplesTouchFullscreen"),
          children: t.jsx(ve, {
            size: 19,
            strokeWidth: 1.8
          })
        }), t.jsx("button", {
          className: "ts-btn-icon",
          onClick: () => Tt(true),
          children: t.jsx(ye, {
            size: 22,
            strokeWidth: 1.5
          })
        })]
      })]
    }), t.jsxs("div", {
      className: "ts-content",
      children: [t.jsx("div", {
        className: "ts-climax-overlay"
      }), t.jsxs("div", {
        ref: oe,
        className: `ts-character-wrapper ${W ? "ts-character-pressed" : ""} ${H ? "ts-character-hit" : ""}`,
        onPointerDown: e => {
          if (!V && !se) {
            wt.current = true;
            kt.current = null;
            if (bt.current) {
              clearTimeout(bt.current);
            }
            z(true);
            q(true);
            Cs(e);
          }
        },
        onPointerMove: e => {
          if (!V && !se && !!wt.current) {
            z(true);
            q(true);
            Cs(e);
          }
        },
        onPointerUp: () => {
          wt.current = false;
          kt.current = null;
          z(false);
          if (bt.current) {
            clearTimeout(bt.current);
          }
          bt.current = setTimeout(() => q(false), 350);
        },
        onPointerLeave: () => {
          wt.current = false;
          kt.current = null;
          z(false);
          if (bt.current) {
            clearTimeout(bt.current);
          }
          bt.current = setTimeout(() => q(false), 350);
        },
        onPointerCancel: () => {
          wt.current = false;
          kt.current = null;
          z(false);
          if (bt.current) {
            clearTimeout(bt.current);
          }
          bt.current = setTimeout(() => q(false), 350);
        },
        children: [t.jsx("div", {
          className: "ts-character-glow"
        }), ks.map(e => t.jsx("img", {
          decoding: "async",
          src: e,
          alt: "Character",
          ref: t => {
            if (e === Ns) {
              ce.current = t;
            }
          },
          className: "ts-character-img " + (e === Ns ? "active" : "")
        }, e)), mt.includes("blindfold") && t.jsx("div", {
          className: "ts-persistent-blindfold-overlay"
        }), mt.includes("tie") && t.jsx("div", {
          className: "ts-persistent-tie-overlay",
          children: t.jsx("svg", {
            className: "ts-rope-svg",
            viewBox: "0 0 400 300",
            preserveAspectRatio: "xMidYMax slice",
            children: t.jsxs("g", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [t.jsx("path", {
                d: "M-20,80 Q200,180 420,260 M420,80 Q200,180 -20,260 M-20,100 Q200,180 420,100 M-20,160 Q200,240 420,160 M-20,220 Q200,300 420,220 M200,100 Q220,160 200,220",
                className: "ts-rope-shadow"
              }), t.jsx("path", {
                d: "M-20,80 Q200,180 420,260 M420,80 Q200,180 -20,260 M-20,100 Q200,180 420,100 M-20,160 Q200,240 420,160 M-20,220 Q200,300 420,220 M200,100 Q220,160 200,220",
                className: "ts-rope-main"
              }), t.jsx("path", {
                d: "M-20,80 Q200,180 420,260 M420,80 Q200,180 -20,260 M-20,100 Q200,180 420,100 M-20,160 Q200,240 420,160 M-20,220 Q200,300 420,220 M200,100 Q220,160 200,220",
                className: "ts-rope-highlight"
              })]
            })
          })
        }), mt.some(e => e.startsWith("custom_")) && t.jsx("div", {
          className: "ts-persistent-custom-state-overlay"
        }), Y && t.jsx("div", {
          className: "ts-gal-tap-burst",
          style: {
            left: Y.x,
            top: Y.y
          }
        }), L.map(e => t.jsxs("div", {
          className: `ts-effect-${e.type} ts-interactive-effect`,
          style: {
            left: e.x,
            top: e.y,
            transform: `translate(-50%, -50%) rotate(${e.rotation || 0}deg)`
          },
          children: [e.type === "ripple" && t.jsx("div", {
            className: "ts-click-ripple-core"
          }), e.type === "feather" && t.jsx(ue, {
            size: 48,
            className: "ts-feather-icon"
          }), e.type === "lipstick" && t.jsx("div", {
            className: "ts-lipstick-mark",
            children: "💋"
          }), e.type === "whip" && t.jsxs("div", {
            className: "ts-whip-effect-wrap",
            children: [t.jsx("svg", {
              className: "ts-whip-crescent-svg",
              viewBox: "-150 -150 300 300",
              children: t.jsxs("g", {
                className: "ts-whip-swipe-anim",
                children: [t.jsx("path", {
                  className: "ts-whip-crescent-path ts-whip-anim1",
                  d: "M -120 80 Q 0 -120 120 80"
                }), t.jsx("path", {
                  className: "ts-whip-crescent-path ts-whip-anim2",
                  d: "M -120 80 Q 0 -120 120 80"
                })]
              })
            }), t.jsx("div", {
              className: "ts-whip-laceration"
            }), t.jsx("div", {
              className: "ts-whip-impact-puff"
            })]
          }), e.type === "brush" && t.jsx("div", {
            className: "ts-ink-brush-wrap",
            children: t.jsxs("svg", {
              viewBox: "0 0 200 100",
              className: "ts-ink-svg",
              children: [t.jsx("defs", {
                children: t.jsx("clipPath", {
                  id: `ink-clip-${e.id}`,
                  children: t.jsx("rect", {
                    x: "0",
                    y: "0",
                    width: "0",
                    height: "100",
                    className: "ts-ink-clip-rect"
                  })
                })
              }), t.jsx("path", {
                d: "M 20,45 C 40,15 90,20 170,50 C 120,70 60,75 10,55 C 5,50 10,48 20,45 Z",
                className: "ts-ink-main-path",
                clipPath: `url(#ink-clip-${e.id})`
              }), t.jsx("path", {
                d: "M 30,50 C 60,30 100,35 160,55 C 130,65 70,70 20,60 Z",
                className: "ts-ink-sub-path",
                clipPath: `url(#ink-clip-${e.id})`
              }), t.jsx("circle", {
                cx: "25",
                cy: "25",
                r: "3.5",
                className: "ts-ink-drop d1"
              }), t.jsx("circle", {
                cx: "15",
                cy: "55",
                r: "4.5",
                className: "ts-ink-drop d2"
              }), t.jsx("circle", {
                cx: "160",
                cy: "85",
                r: "3",
                className: "ts-ink-drop d3"
              }), t.jsx("circle", {
                cx: "180",
                cy: "65",
                r: "2",
                className: "ts-ink-drop d4"
              }), t.jsx("circle", {
                cx: "40",
                cy: "80",
                r: "2.5",
                className: "ts-ink-drop d5"
              })]
            })
          }), e.type === "hand" && t.jsx("div", {
            className: "ts-hand-glow",
            children: t.jsx(Z, {
              size: 40,
              fill: "currentColor"
            })
          }), e.type === "ice" && t.jsxs("div", {
            className: "ts-ice-frost",
            children: [t.jsx(he, {
              size: 32,
              className: "ts-ice-particle p1"
            }), t.jsx(he, {
              size: 24,
              className: "ts-ice-particle p2"
            }), t.jsx(he, {
              size: 28,
              className: "ts-ice-particle p3"
            })]
          }), e.type === "tie" && t.jsx("div", {
            className: "ts-tie-ribbon"
          }), e.type === "blindfold" && t.jsx("div", {
            className: "ts-blindfold-mask"
          })]
        }, e.id))]
      }), V && t.jsxs("div", {
        className: "ts-calibration-overlay",
        onPointerDown: e => {
          const t = Ye(e);
          if (!t) {
            return;
          }
          const s = t.relX;
          const a = t.relY;
          const n = {
            ...X,
            [V]: {
              x: s,
              y: a
            }
          };
          ee(n);
          const i = Se.indexOf(V);
          if (i < Se.length - 1) {
            J(Se[i + 1]);
          } else {
            const e = ps(n, De);
            const t = ts(e);
            if (t) {
              xe.current = t;
              Ke(e);
            }
            J(null);
            ee({});
          }
        },
        children: [Object.entries(X).map(([e, s]) => t.jsxs("div", {
          className: "ts-calib-marker",
          style: Ge(s),
          children: [t.jsx("span", {
            className: "ts-calib-marker-ring"
          }), t.jsx("span", {
            className: "ts-calib-marker-label",
            children: C(cs[e] || "")
          })]
        }, e)), t.jsxs("div", {
          className: "ts-calib-prompt",
          children: [t.jsxs("div", {
            className: "ts-calib-step",
            children: [Se.indexOf(V) + 1, "/", Se.length]
          }), t.jsx("div", {
            className: "ts-calib-text",
            children: C(cs[V] || "")
          })]
        }), t.jsx("button", {
          className: "ts-calib-skip",
          onPointerDown: e => {
            e.stopPropagation();
          },
          onClick: e => {
            e.stopPropagation();
            J(null);
            ee({});
          },
          children: C("couplesTouchCalibSkip")
        })]
      }), se && t.jsxs("div", {
        className: "ts-calibration-overlay ts-calibration-edit",
        onPointerMove: e => {
          if (!ne) {
            return;
          }
          const t = Ye(e);
          if (t) {
            ee(e => ({
              ...e,
              [ne]: {
                x: t.relX,
                y: t.relY
              }
            }));
          }
        },
        onPointerUp: () => ie(null),
        onPointerCancel: () => ie(null),
        children: [Object.entries(X).map(([e, s]) => t.jsxs("div", {
          className: "ts-calib-marker ts-calib-marker-draggable",
          style: Ge(s),
          onPointerDown: t => {
            t.stopPropagation();
            ie(e);
          },
          children: [t.jsx("span", {
            className: "ts-calib-marker-ring"
          }), t.jsx("span", {
            className: "ts-calib-marker-label",
            children: C(cs[e] || "")
          })]
        }, e)), t.jsxs("div", {
          className: "ts-calib-prompt",
          children: [t.jsx("div", {
            className: "ts-calib-step",
            children: C("couplesTouchFineTuneHint")
          }), t.jsx("div", {
            className: "ts-calib-text",
            children: C("couplesTouchFineTuneTitle")
          })]
        }), t.jsxs("div", {
          className: "ts-calib-edit-actions",
          children: [t.jsx("button", {
            className: "ts-calib-skip",
            onClick: () => {
              ae(false);
              ie(null);
              ee({});
            },
            children: C("couplesTouchFineTuneCancel")
          }), t.jsx("button", {
            className: "ts-calib-skip ts-calib-save",
            onClick: () => {
              const e = ps(X, De);
              const t = ts(e);
              if (t) {
                xe.current = t;
                Ke(e);
                ae(false);
                ie(null);
              }
            },
            children: C("couplesTouchFineTuneSave")
          })]
        })]
      }), t.jsxs("div", {
        className: "ts-sensibility-container",
        children: [t.jsx("div", {
          className: "ts-sens-heart " + (js ? "beat" : ""),
          children: t.jsx(Z, {
            size: 16,
            fill: js ? "#FF1493" : "transparent",
            color: js ? "#FF1493" : "#FFF",
            strokeWidth: js ? 0 : 2
          })
        }), t.jsx("div", {
          className: "ts-sens-track",
          children: t.jsx("div", {
            className: "ts-sensibility-fill",
            style: {
              height: `${T}%`
            }
          })
        })]
      }), t.jsxs("div", {
        className: "ts-bottom-hud",
        children: [t.jsxs("div", {
          className: "ts-vn-text-area " + (P ? "active" : ""),
          children: [t.jsx("div", {
            className: "ts-vn-name",
            children: (c == null ? undefined : c.name) || ""
          }), t.jsx("div", {
            className: "ts-vn-text",
            children: P || "..."
          })]
        }), t.jsxs("div", {
          className: "ts-items-toolbar",
          children: [ys.map(e => {
            const s = vs < e.unlockLevel;
            const n = !e.isState && E === e.id;
            const i = e.isState && mt.includes(e.id);
            const r = n || i;
            const o = e.icon;
            return t.jsxs("div", {
              className: `ts-item-btn ${r ? "active" : ""} ${s ? "locked" : ""} ${e.isState ? "state-prop" : ""}`,
              onTouchStart: () => Qt(e),
              onTouchEnd: gs,
              onMouseDown: () => Qt(e),
              onMouseUp: gs,
              onMouseLeave: gs,
              onClick: t => {
                if (yt.current) {
                  t.preventDefault();
                } else if (!s) {
                  if (e.isState) {
                    (e => {
                      if (mt.includes(e.id)) {
                        pt(t => t.filter(t => t !== e.id));
                        F("呼... 解开了。");
                      } else {
                        pt(t => [...t, e.id]);
                        const t = Math.min(T + (e.sens || 15), 100);
                        I(t);
                        let s = null;
                        if (Ee) {
                          s = _t(Ee, "neck", e.id, t >= 100, [e.id]);
                        }
                        F(s || "...");
                        const n = ["tie", "blindfold"].includes(e.id) ? e.id : "ripple";
                        const i = {
                          id: Date.now(),
                          x: "50%",
                          y: "50%",
                          type: n,
                          rotation: 0
                        };
                        R(e => [...e, i]);
                        setTimeout(() => {
                          R(e => e.filter(e => e.id !== i.id));
                        }, 1500);
                        l({
                          ...a,
                          touchCount: (a.touchCount || 0) + 1
                        });
                      }
                    })(e);
                  } else {
                    $(e.id);
                  }
                }
              },
              children: [(() => {
                const s = ke(e.image);
                if (s) {
                  return t.jsx("img", {
                    decoding: "async",
                    src: s,
                    className: "ts-item-custom-img"
                  });
                } else {
                  return t.jsx("div", {
                    className: "ts-item-icon",
                    children: o ? t.jsx(o, {
                      size: 26,
                      strokeWidth: 1.5
                    }) : "🎁"
                  });
                }
              })(), t.jsx("div", {
                className: "ts-item-name",
                children: e.name
              }), s && t.jsxs("div", {
                className: "ts-item-lock",
                children: ["Lv.", e.unlockLevel]
              })]
            }, e.id);
          }), t.jsxs("div", {
            className: "ts-custom-add-btn",
            style: {
              opacity: vs >= 5 ? 1 : 0.5
            },
            onClick: () => {
              if (vs >= 5) {
                Je(true);
              }
            },
            children: [t.jsx(U, {
              size: 22,
              strokeWidth: 2
            }), t.jsx("span", {
              style: {
                marginTop: 4
              },
              children: C("couplesTouchCustom")
            }), vs < 5 && t.jsx("div", {
              className: "ts-item-lock",
              children: "Lv.5"
            })]
          }), It && t.jsxs("div", {
            className: "ts-item-btn ts-immersive-exit-btn",
            onClick: () => Et(false),
            role: "button",
            "aria-label": C("couplesTouchExitFullscreen"),
            title: C("couplesTouchExitFullscreen"),
            children: [t.jsx("div", {
              className: "ts-item-icon",
              children: t.jsx(fe, {
                size: 23,
                strokeWidth: 1.8
              })
            }), t.jsx("div", {
              className: "ts-item-name",
              children: C("couplesTouchExit")
            })]
          })]
        })]
      })]
    }), Ve && t.jsx("div", {
      className: "ts-custom-modal-overlay",
      onClick: () => Je(false),
      children: t.jsxs("div", {
        className: "ts-custom-modal-card",
        onClick: e => e.stopPropagation(),
        children: [t.jsx("div", {
          className: "ts-custom-modal-title",
          children: C("couplesTouchCreateProp")
        }), t.jsxs("label", {
          className: "ts-custom-image-btn",
          children: [t.jsx("input", {
            type: "file",
            accept: "image/*",
            style: {
              display: "none"
            },
            onChange: e => {
              const t = e.target.files[0];
              if (t) {
                ((e, t, s, a, n) => {
                  const i = new FileReader();
                  i.readAsDataURL(e);
                  i.onload = t => {
                    const s = t.target.result;
                    if (e.type === "image/gif") {
                      n(s);
                      return;
                    }
                    const a = e.type === "image/png";
                    const i = new Image();
                    i.src = s;
                    i.onload = () => {
                      const e = document.createElement("canvas");
                      let t = i.width;
                      let s = i.height;
                      if (t > s) {
                        if (t > 256) {
                          s *= 256 / t;
                          t = 256;
                        }
                      } else if (s > 256) {
                        t *= 256 / s;
                        s = 256;
                      }
                      e.width = t;
                      e.height = s;
                      e.getContext("2d").drawImage(i, 0, 0, t, s);
                      n(a ? e.toDataURL("image/png") : e.toDataURL("image/jpeg", 0.6));
                    };
                  };
                })(t, 0, 0, 0, e => {
                  dt(e);
                });
              }
            }
          }), ct ? t.jsx("img", {
            decoding: "async",
            src: ct,
            className: "ts-custom-image-preview"
          }) : t.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8
            },
            children: [t.jsx(je, {
              size: 24
            }), " ", C("couplesTouchUploadImg")]
          })]
        }), t.jsx("input", {
          type: "text",
          className: "ts-custom-input",
          placeholder: C("couplesTouchPropNamePh"),
          value: Xe,
          onChange: e => et(e.target.value)
        }), t.jsx("textarea", {
          className: "ts-custom-textarea",
          placeholder: C("couplesTouchPropDescPh"),
          value: tt,
          onChange: e => st(e.target.value)
        }), t.jsxs("div", {
          className: "ts-setting-row",
          style: {
            marginTop: 0,
            padding: "10px 14px"
          },
          children: [t.jsxs("span", {
            children: ["🤖 ", C("couplesTouchUseAI")]
          }), t.jsx("input", {
            type: "checkbox",
            className: "ts-switch",
            checked: at,
            onChange: e => nt(e.target.checked)
          })]
        }), !at && t.jsxs(t.Fragment, {
          children: [t.jsx("textarea", {
            className: "ts-custom-textarea",
            placeholder: C("couplesTouchReactionsPh"),
            value: it,
            onChange: e => lt(e.target.value)
          }), t.jsx("textarea", {
            className: "ts-custom-textarea",
            placeholder: C("couplesTouchClimaxPh"),
            value: rt,
            onChange: e => ot(e.target.value)
          })]
        }), t.jsxs("div", {
          className: "ts-setting-row",
          style: {
            marginTop: 0,
            padding: "10px 14px"
          },
          children: [t.jsxs("span", {
            children: ["🔗 ", C("couplesTouchIsStateProp")]
          }), t.jsx("input", {
            type: "checkbox",
            className: "ts-switch",
            checked: ut,
            onChange: e => ht(e.target.checked)
          })]
        }), t.jsxs("div", {
          className: "ts-custom-btn-group",
          children: [t.jsx("button", {
            className: "ts-custom-cancel-btn",
            onClick: () => Je(false),
            children: C("couplesTouchCancel")
          }), t.jsx("button", {
            className: "ts-custom-save-btn",
            onClick: async () => {
              if (!Xe) {
                return;
              }
              if (!at && !it) {
                return;
              }
              if (at && !tt) {
                return;
              }
              const e = it ? it.split(",").map(e => e.trim()).filter(Boolean) : [];
              const t = rt ? rt.split(",").map(e => e.trim()).filter(Boolean) : e;
              let s = ct || null;
              if (typeof ct == "string" && ct.startsWith("data:")) {
                const e = await us(ct);
                if (e != null) {
                  s = e;
                  we(t => {
                    const s = new Map(t);
                    s.set(e, ct);
                    return s;
                  });
                }
              }
              const a = {
                id: "custom_" + Date.now(),
                name: Xe,
                description: tt,
                useAI: at,
                unlockLevel: 5,
                sens: 20,
                image: s,
                reactions: e.length > 0 ? e : [`（用${Xe}碰了一下）`],
                climax: t.length > 0 ? t : [`（${Xe}的效果好強烈…）`],
                isCustom: true,
                isState: ut
              };
              const n = M.current;
              let i = ((n == null ? undefined : n.customProps) || []).filter(e => e && typeof e == "object");
              l({
                ...n,
                customProps: [...i, a]
              });
              Je(false);
              et("");
              st("");
              nt(true);
              lt("");
              ot("");
              dt(null);
              ht(false);
            },
            disabled: !Xe || (at ? !tt : !it),
            style: {
              opacity: Xe && (at ? tt : it) ? 1 : 0.5
            },
            children: C("couplesTouchSaveProp")
          })]
        })]
      })
    }), At && t.jsx("div", {
      className: "ts-custom-modal-overlay",
      onClick: () => Tt(false),
      children: t.jsxs("div", {
        className: "ts-custom-modal-card",
        onClick: e => e.stopPropagation(),
        children: [t.jsx("div", {
          className: "ts-custom-modal-title",
          children: C("couplesTouchSettings")
        }), t.jsxs("div", {
          className: "ts-setting-row",
          children: [t.jsxs("span", {
            children: ["💬 ", C("couplesTouchVoice")]
          }), t.jsx("input", {
            type: "checkbox",
            className: "ts-switch",
            checked: !!$t.enableVoice,
            onChange: e => Ht("enableVoice", e.target.checked)
          })]
        }), t.jsxs("div", {
          className: "ts-setting-row",
          children: [t.jsxs("span", {
            children: ["🖼️ ", C("couplesTouchAutoImage")]
          }), t.jsx("input", {
            type: "checkbox",
            className: "ts-switch",
            checked: !!$t.enableAutoImage,
            onChange: e => Ht("enableAutoImage", e.target.checked)
          })]
        }), t.jsx("div", {
          className: "ts-setting-section-title",
          children: C("couplesTouchBodyType")
        }), t.jsx("div", {
          className: "ts-setting-section-desc",
          children: C("couplesTouchBodyTypeDesc")
        }), t.jsx("div", {
          className: "ts-body-type-selector",
          children: [{
            key: Gt.FULL,
            icon: "🧍",
            labelKey: "couplesTouchBodyFull"
          }, {
            key: Gt.UPPER,
            icon: "👤",
            labelKey: "couplesTouchBodyUpper"
          }, {
            key: Gt.PORTRAIT,
            icon: "🗣️",
            labelKey: "couplesTouchBodyPortrait"
          }].map(e => t.jsxs("div", {
            className: "ts-body-type-btn " + (Pt === e.key ? "active" : ""),
            onClick: () => Ht("bodyType", e.key),
            children: [t.jsx("span", {
              className: "ts-body-type-icon",
              children: e.icon
            }), t.jsx("span", {
              className: "ts-body-type-label",
              children: C(e.labelKey)
            })]
          }, e.key))
        }), t.jsxs("button", {
          className: "ts-calib-settings-btn",
          onClick: () => {
            Tt(false);
            xe.current = null;
            ae(false);
            ie(null);
            ee({});
            J(Se[0]);
          },
          children: ["🎯 ", C("couplesTouchRecalibrate"), Te && t.jsx("span", {
            className: "ts-calib-badge",
            children: "✓"
          })]
        }), Te && t.jsxs("button", {
          className: "ts-calib-settings-btn",
          onClick: () => {
            Tt(false);
            (() => {
              const e = function (e) {
                if (!e) {
                  return null;
                }
                if (e.points && e.points.eyeL && e.points.eyeR) {
                  return e.points;
                }
                const t = typeof e.centerX == "number" ? e.centerX : 0.5;
                const s = typeof e.eyeY == "number" ? e.eyeY : 0.2;
                const a = typeof e.interEye == "number" ? e.interEye : 0.16;
                return {
                  eyeL: {
                    x: ds(t - a / 2),
                    y: ds(s)
                  },
                  eyeR: {
                    x: ds(t + a / 2),
                    y: ds(s)
                  },
                  mouth: e.mouthY != null ? {
                    x: ds(t),
                    y: ds(e.mouthY)
                  } : null,
                  chin: e.chinY != null ? {
                    x: ds(t),
                    y: ds(e.chinY)
                  } : null
                };
              }(Ae);
              if (e) {
                ee(e);
                J(null);
                ae(true);
              }
            })();
          },
          children: ["✍️ ", C("couplesTouchFineTuneTitle")]
        }), t.jsxs("button", {
          className: "ts-calib-settings-btn",
          onClick: () => {
            Tt(false);
            Ze();
          },
          disabled: le,
          children: ["🤖 ", C(le ? "couplesTouchModelDetecting" : "couplesTouchAutoDetectCalib")]
        }), t.jsx("div", {
          className: "ts-setting-section-title",
          children: C("couplesTouchReactionTitle")
        }), t.jsx("div", {
          className: "ts-setting-section-desc",
          children: C("couplesTouchReactionDesc")
        }), t.jsxs("div", {
          className: "ts-setting-row",
          children: [t.jsxs("span", {
            children: ["🔓 ", C("couplesTouchEnableJailbreak")]
          }), t.jsx("input", {
            type: "checkbox",
            className: "ts-switch",
            checked: !!$t.enableJailbreak,
            onChange: e => Ht("enableJailbreak", e.target.checked)
          })]
        }), $t.enableJailbreak && t.jsxs("div", {
          style: {
            marginBottom: 12
          },
          children: [t.jsx("div", {
            className: "ts-setting-section-desc",
            children: C("couplesTouchJailbreakDesc")
          }), Fe.length === 0 ? t.jsx("div", {
            style: {
              fontSize: 13,
              opacity: 0.6,
              padding: "8px 4px"
            },
            children: C("couplesTouchJailbreakEmpty")
          }) : t.jsx("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: 6
            },
            children: Fe.map(e => {
              const s = $t.selectedJailbreakId === e.id;
              return t.jsxs("div", {
                onClick: () => Ht("selectedJailbreakId", s ? "" : e.id),
                style: {
                  padding: "8px 12px",
                  borderRadius: 8,
                  cursor: "pointer",
                  border: s ? "2px solid #ff6b9d" : "1px solid rgba(255,255,255,0.15)",
                  background: s ? "rgba(255,107,157,0.15)" : "rgba(255,255,255,0.05)",
                  fontSize: 13
                },
                children: [t.jsxs("div", {
                  style: {
                    fontWeight: 600
                  },
                  children: [s ? "✓ " : "", e.comment]
                }), e.bookName && t.jsx("div", {
                  style: {
                    fontSize: 11,
                    opacity: 0.6,
                    marginTop: 2
                  },
                  children: e.bookName
                })]
              }, e.id);
            })
          })]
        }), t.jsx("div", {
          className: "ts-setting-section-desc",
          style: {
            marginTop: 8
          },
          children: C("couplesTouchCustomPromptDesc")
        }), t.jsx("textarea", {
          className: "ts-custom-textarea",
          value: $t.customReactionPrompt || "",
          onChange: e => Ht("customReactionPrompt", e.target.value),
          placeholder: C("couplesTouchCustomPromptPh"),
          style: {
            height: 90,
            minHeight: 90,
            marginBottom: 10
          }
        }), t.jsx("div", {
          className: "ts-setting-section-desc",
          children: C("couplesTouchSafetyDesc")
        }), t.jsx("div", {
          style: {
            display: "flex",
            gap: 6,
            flexWrap: "wrap",
            marginBottom: 10
          },
          children: [{
            v: "",
            label: C("couplesTouchSafetyDefault")
          }, {
            v: "high",
            label: C("couplesTouchSafetyHigh")
          }, {
            v: "medium",
            label: C("couplesTouchSafetyMedium")
          }, {
            v: "none",
            label: C("couplesTouchSafetyNone")
          }].map(e => {
            const s = ($t.reactionSafetyLevel || "") === e.v;
            return t.jsxs("div", {
              onClick: () => Ht("reactionSafetyLevel", e.v),
              style: {
                flex: "1 1 60px",
                padding: "6px 10px",
                borderRadius: 8,
                cursor: "pointer",
                textAlign: "center",
                fontSize: 12,
                border: s ? "2px solid #ff6b9d" : "1px solid rgba(255,255,255,0.15)",
                background: s ? "rgba(255,107,157,0.15)" : "rgba(255,255,255,0.05)"
              },
              children: [s ? "✓ " : "", e.label]
            }, e.v || "default");
          })
        }), t.jsx("div", {
          className: "ts-setting-section-desc",
          style: {
            marginTop: 8
          },
          children: C("couplesTouchBatchDesc")
        }), t.jsx("div", {
          style: {
            display: "flex",
            gap: 6,
            flexWrap: "wrap",
            marginBottom: 10
          },
          children: [{
            v: 0,
            label: C("couplesTouchBatchOff")
          }, {
            v: 4,
            label: C("couplesTouchBatch4")
          }, {
            v: 2,
            label: C("couplesTouchBatch2")
          }, {
            v: 1,
            label: C("couplesTouchBatch1")
          }].map(e => {
            const s = (Number($t.reactionBatchSize) || 0) === e.v;
            return t.jsxs("div", {
              onClick: () => Ht("reactionBatchSize", e.v),
              style: {
                flex: "1 1 60px",
                padding: "6px 10px",
                borderRadius: 8,
                cursor: "pointer",
                textAlign: "center",
                fontSize: 12,
                border: s ? "2px solid #ff6b9d" : "1px solid rgba(255,255,255,0.15)",
                background: s ? "rgba(255,107,157,0.15)" : "rgba(255,255,255,0.05)"
              },
              children: [s ? "✓ " : "", e.label]
            }, e.v);
          })
        }), t.jsxs("button", {
          className: "ts-calib-settings-btn",
          onClick: () => {
            Tt(false);
            (async () => {
              if ($e) {
                return;
              }
              const e = g;
              Pe(true);
              F(C("couplesTouchGenerating"));
              try {
                const t = qe();
                const s = a.touchSettings || {};
                const n = !!s.enableJailbreak;
                const i = s.selectedJailbreakId || "";
                const o = n ? Fe.find(e => e.id === i) : null;
                const d = Number(s.reactionBatchSize) || 0;
                const u = [String(s.customReactionPrompt || "").trim(), String((o == null ? undefined : o.content) || "").trim()].filter(Boolean).join("\n\n");
                const m = await async function (e) {
                  const {
                    characterId: t,
                    userId: s,
                    charName: a,
                    bondLevel: n = 1,
                    affectionLevel: i = 50,
                    customProps: l = [],
                    uiLanguage: o = "zh",
                    onProgress: c,
                    customPrompt: d = "",
                    jailbreakPrompt: u = "",
                    safetyLevel: h = "",
                    batchSize: m = 0
                  } = e;
                  const g = d || u;
                  let x = "";
                  let v = "";
                  try {
                    const e = await p.get(t);
                    x = (e == null ? undefined : e.description) || (e == null ? undefined : e.personality) || "";
                    v = (e == null ? undefined : e.language) || "";
                    if (x.length > 800) {
                      x = x.substring(0, 800);
                    }
                  } catch ($) {}
                  let y = "";
                  let f = "";
                  let j = false;
                  try {
                    const e = await r.get(s, t);
                    y = (e == null ? undefined : e.charLanguage) || "";
                    f = (e == null ? undefined : e.userLanguage) || "";
                    j = !!(e == null ? undefined : e.autoTranslate);
                  } catch ($) {}
                  const b = String(o || "").toLowerCase().replace("-", "_");
                  const w = b === "ja" ? "Japanese" : b === "en" || b === "en_us" ? "English" : b === "zh_cn" || b === "zh_hans" ? "Simplified Chinese (简体中文)" : "Traditional Chinese (繁體中文)";
                  const N = v || (j && y ? y : "") || w;
                  const k = j;
                  const C = [...Wt];
                  for (const r of l) {
                    if (r && r.name && r.useAI !== false) {
                      const e = r.description || "";
                      C.push({
                        id: r.id,
                        desc: `${r.name}${r.isState ? " (state prop — persistent wearable effect)" : ""} — ${e || "custom tool used on body"}`
                      });
                    }
                  }
                  const S = Ut(i);
                  const M = f || w;
                  if (!m || m <= 0 || m >= C.length) {
                    if (c != null) {
                      c(1, 1);
                    }
                    try {
                      const e = zt(a, x, S, n, C, N, k, M, g, true);
                      const t = await Bt(e, a, 15, h);
                      if (t) {
                        console.log(`[aiTouchReaction] generated ${Object.keys(t).length} entries for ${a} (${N}, tier=${S}, lv${n})`);
                        return t;
                      } else {
                        return null;
                      }
                    } catch (P) {
                      console.warn("[aiTouchReaction] failed:", P instanceof Error ? P.message : P);
                      return null;
                    }
                  }
                  const D = C.find(e => e.id === "hand");
                  const A = C.filter(e => e.id !== "hand");
                  const T = [];
                  if (D) {
                    const e = A.slice(0, Math.max(0, m - 1));
                    T.push({
                      tools: [D, ...e],
                      includeStates: true
                    });
                    for (let t = Math.max(0, m - 1); t < A.length; t += m) {
                      T.push({
                        tools: A.slice(t, t + m),
                        includeStates: false
                      });
                    }
                  } else {
                    for (let r = 0; r < C.length; r += m) {
                      T.push({
                        tools: C.slice(r, r + m),
                        includeStates: r === 0
                      });
                    }
                  }
                  const I = {};
                  let E = 0;
                  for (let r = 0; r < T.length; r++) {
                    const {
                      tools: e,
                      includeStates: t
                    } = T[r];
                    if (c != null) {
                      c(r + 1, T.length);
                    }
                    try {
                      const s = zt(a, x, S, n, e, N, k, M, g, t);
                      const i = Math.max(5, Math.floor(e.length * 13));
                      const l = await Bt(s, a, i, h);
                      if (l) {
                        Object.assign(I, l);
                        E++;
                      } else {
                        console.warn(`[aiTouchReaction] batch ${r + 1}/${T.length} returned null`);
                      }
                    } catch (P) {
                      console.warn(`[aiTouchReaction] batch ${r + 1}/${T.length} failed:`, P instanceof Error ? P.message : P);
                    }
                  }
                  if (E === 0) {
                    return null;
                  } else {
                    console.log(`[aiTouchReaction] generated ${Object.keys(I).length} entries in ${E}/${T.length} batches for ${a}`);
                    return I;
                  }
                }({
                  characterId: e || (c == null ? undefined : c.id) || (c == null ? undefined : c.name),
                  userId: h,
                  charName: (c == null ? undefined : c.name) || "",
                  bondLevel: vs,
                  affectionLevel: t,
                  customProps: a.customProps || [],
                  uiLanguage: S || "zh_cn",
                  customPrompt: u,
                  safetyLevel: s.reactionSafetyLevel || "",
                  batchSize: d,
                  onProgress: (e, t) => F(`${C("couplesTouchGenerating")} (${e}/${t})`)
                });
                if (String(D.current) !== String(e)) {
                  return;
                }
                if (m) {
                  qt.clear();
                  const e = M.current;
                  const t = (e == null ? undefined : e.touchVoiceCache) || {};
                  const s = Object.values(t).filter(e => typeof e == "number");
                  if (s.length > 0) {
                    ms(s);
                  }
                  _e({});
                  l({
                    ...e,
                    touchReactions: m,
                    touchReactionTier: He,
                    touchVoiceCache: {}
                  });
                  F(C("couplesTouchGenerateDone"));
                } else {
                  F(C("couplesTouchGenerateFail"));
                }
              } catch (t) {
                F(C("couplesTouchGenerateFail"));
              } finally {
                Pe(false);
              }
            })();
          },
          disabled: $e,
          children: ["💬 ", C($e ? "couplesTouchGenerating" : "couplesTouchReactionGenerate"), Ee && t.jsx("span", {
            className: "ts-calib-badge",
            children: "✓"
          })]
        }), t.jsx("div", {
          className: "ts-setting-section-title",
          children: C("couplesTouchCGTitle")
        }), t.jsx("div", {
          className: "ts-setting-section-desc",
          children: C("couplesTouchCGDesc")
        }), t.jsx("textarea", {
          className: "ts-custom-textarea",
          placeholder: C("couplesTouchPosePh"),
          value: $t.posePrompt || "",
          onChange: e => Ht("posePrompt", e.target.value),
          style: {
            height: 100,
            fontSize: 14,
            lineHeight: 1.5
          }
        }), t.jsxs("div", {
          className: "ts-setting-row",
          style: {
            marginTop: 4
          },
          children: [t.jsxs("span", {
            children: ["📝 ", C("couplesTouchCGFullReplace")]
          }), t.jsx("input", {
            type: "checkbox",
            className: "ts-switch",
            checked: !!$t.cgFullReplace,
            onChange: e => Ht("cgFullReplace", e.target.checked)
          })]
        }), $t.cgFullReplace && t.jsxs(t.Fragment, {
          children: [t.jsx("div", {
            className: "ts-setting-section-desc",
            children: C("couplesTouchCGReplaceDesc")
          }), t.jsx("textarea", {
            className: "ts-custom-textarea",
            placeholder: C("couplesTouchCGReplacePh"),
            value: $t.cgReplacePrompt || "",
            onChange: e => Ht("cgReplacePrompt", e.target.value),
            style: {
              height: 110,
              minHeight: 110,
              fontSize: 14,
              lineHeight: 1.5
            }
          })]
        }), t.jsxs("button", {
          className: "ts-calib-settings-btn",
          onClick: () => {
            Tt(false);
            (async () => {
              if (Oe) {
                return;
              }
              const e = g;
              We(true);
              F(C("couplesTouchCGGenerating"));
              try {
                const t = await Yt({
                  userId: h,
                  characterId: e || (c == null ? undefined : c.id) || (c == null ? undefined : c.name),
                  gender: (c == null ? undefined : c.gender) || "",
                  posePrompt: $t.posePrompt || "",
                  customReplacePrompt: $t.cgReplacePrompt && $t.cgFullReplace ? $t.cgReplacePrompt : "",
                  onProgress: (e, t) => F(`${C("couplesTouchCGGenerating")} (${e}/${t})`)
                });
                if (String(D.current) !== String(e)) {
                  return;
                }
                if (t) {
                  const s = t.normalIdle ? await us(t.normalIdle) : null;
                  const a = t.climaxIdle ? await us(t.climaxIdle) : null;
                  if (String(D.current) !== String(e)) {
                    ms([s, a]);
                    return;
                  }
                  const n = M.current;
                  const i = n.touchSettings || {};
                  const r = i.charImages || {};
                  const o = [];
                  if (s != null && typeof r.normalIdle == "number") {
                    o.push(r.normalIdle);
                  }
                  if (a != null && typeof r.climaxIdle == "number") {
                    o.push(r.climaxIdle);
                  }
                  if (o.length > 0) {
                    ms(o);
                  }
                  const c = {
                    ...r
                  };
                  if (s != null) {
                    c.normalIdle = s;
                  } else if (t.normalIdle) {
                    c.normalIdle = t.normalIdle;
                  }
                  if (a != null) {
                    c.climaxIdle = a;
                  } else if (t.climaxIdle) {
                    c.climaxIdle = t.climaxIdle;
                  }
                  we(e => {
                    const n = new Map(e);
                    if (s != null && t.normalIdle) {
                      n.set(s, t.normalIdle);
                    }
                    if (a != null && t.climaxIdle) {
                      n.set(a, t.climaxIdle);
                    }
                    return n;
                  });
                  l({
                    ...n,
                    touchSettings: {
                      ...i,
                      charImages: c
                    }
                  });
                  setTimeout(() => Ze(), 500);
                  F(C("couplesTouchCGDone"));
                } else {
                  F(C("couplesTouchCGFail"));
                }
              } catch (t) {
                F(C("couplesTouchCGFail"));
              } finally {
                We(false);
              }
            })();
          },
          disabled: Oe,
          children: ["🎨 ", C(Oe ? "couplesTouchCGGenerating" : "couplesTouchCGGenerate"), (Ot.normalIdle || Ot.climaxIdle) && t.jsx("span", {
            className: "ts-calib-badge",
            children: "✓"
          })]
        }), t.jsx("div", {
          className: "ts-setting-section-title",
          children: C("couplesTouchCharSub")
        }), t.jsx("div", {
          className: "ts-setting-section-desc",
          children: C("couplesTouchCharSubDesc")
        }), t.jsx("div", {
          className: "ts-char-upload-grid",
          children: [{
            key: "normalIdle"
          }, {
            key: "normalPress"
          }, {
            key: "climaxIdle"
          }, {
            key: "climaxPress"
          }].map(e => {
            const s = Ot[e.key] || (e.key === "normalIdle" ? $t.customCharImage : null);
            const a = ke(s);
            return t.jsxs("div", {
              className: "ts-char-upload-card",
              children: [t.jsxs("div", {
                className: "ts-char-upload-head",
                children: [t.jsxs("div", {
                  className: "ts-char-upload-info",
                  children: [t.jsx("div", {
                    className: "ts-char-upload-title",
                    children: C(`couplesTouchSlot${e.key.charAt(0).toUpperCase() + e.key.slice(1)}`)
                  }), t.jsx("div", {
                    className: "ts-char-upload-desc",
                    children: C(`couplesTouchSlot${e.key.includes("Idle") ? "Idle" : "Press"}Desc`)
                  })]
                }), a && t.jsxs(t.Fragment, {
                  children: [t.jsx("button", {
                    className: "ts-char-clear-inline",
                    onClick: () => async function (e, t = "touch_cg.png") {
                      await j(e, t);
                    }(a, `${(c == null ? undefined : c.name) || "cg"}_${e.key}.png`),
                    title: C("couplesTouchDownload"),
                    children: t.jsx(je, {
                      size: 14,
                      style: {
                        transform: "rotate(180deg)"
                      }
                    })
                  }), t.jsx("button", {
                    className: "ts-char-clear-inline",
                    onClick: () => (e => {
                      var t;
                      var s;
                      const a = ((s = (t = M.current) == null ? undefined : t.touchSettings) == null ? undefined : s.charImages) || {};
                      const n = a[e];
                      if (typeof n == "number") {
                        ms([n]);
                      }
                      Ht("charImages", {
                        ...a,
                        [e]: null
                      });
                    })(e.key),
                    title: C("couplesTouchClearBtn"),
                    children: t.jsx(te, {
                      size: 14
                    })
                  })]
                })]
              }), t.jsx("div", {
                className: "ts-char-upload-btn-clickable",
                onClick: () => {
                  t = e.key;
                  Dt(t);
                  St(true);
                  return;
                  var t;
                },
                children: a ? t.jsx("img", {
                  decoding: "async",
                  src: a,
                  className: "ts-char-image-preview",
                  alt: "preview"
                }) : t.jsxs("div", {
                  className: "ts-char-upload-placeholder",
                  children: [t.jsx(je, {
                    size: 20
                  }), t.jsx("span", {
                    children: C("couplesTouchUploadHint")
                  })]
                })
              })]
            }, e.key);
          })
        }), (Object.values(Ot).some(Boolean) || $t.customCharImage) && t.jsx("button", {
          className: "ts-setting-clear-btn",
          onClick: () => {
            const e = M.current;
            const t = (e == null ? undefined : e.touchSettings) || {};
            const s = t.charImages || {};
            const a = [s.normalIdle, s.normalPress, s.climaxIdle, s.climaxPress, t.customCharImage].filter(e => typeof e == "number");
            if (a.length > 0) {
              ms(a);
            }
            l({
              ...e,
              touchSettings: {
                ...t,
                customCharImage: null,
                charImages: {}
              }
            });
          },
          children: C("couplesTouchClearAll")
        }), t.jsx("button", {
          className: "ts-settings-done-btn",
          onClick: () => Tt(false),
          children: C("couplesTouchDone")
        })]
      })
    }), t.jsx(k, {
      isOpen: Ct,
      onClose: () => St(false),
      onImageSelect: async e => {
        var t;
        var s;
        if (!Mt) {
          return;
        }
        let a = e;
        if (typeof e == "string" && e.startsWith("data:")) {
          const t = await us(e);
          if (t != null) {
            a = t;
            we(s => {
              const a = new Map(s);
              a.set(t, e);
              return a;
            });
          }
        }
        const n = ((s = (t = M.current) == null ? undefined : t.touchSettings) == null ? undefined : s.charImages) || {};
        const i = n[Mt];
        if (typeof i == "number") {
          ms([i]);
        }
        const r = {
          ...n,
          [Mt]: a
        };
        const o = M.current;
        const c = (o == null ? undefined : o.touchSettings) || {};
        const d = Mt === "normalIdle" ? {
          customCharImage: a
        } : {};
        l({
          ...o,
          touchSettings: {
            ...c,
            ...d,
            charImages: r
          }
        });
        St(false);
      },
      title: C(Mt ? `couplesTouchSlot${Mt.charAt(0).toUpperCase() + Mt.slice(1)}` : "imgUploadTitle")
    }), gt && t.jsx("div", {
      className: "ts-custom-modal-overlay",
      style: {
        zIndex: 2000
      },
      onClick: () => xt(null),
      children: t.jsxs("div", {
        className: "ts-custom-modal-card",
        onClick: e => e.stopPropagation(),
        children: [t.jsx("div", {
          className: "ts-custom-modal-title",
          style: {
            color: "#E91E63"
          },
          children: C("couplesTouchDeleteTitle")
        }), t.jsx("div", {
          style: {
            textAlign: "center",
            fontSize: 16,
            marginTop: 10,
            color: "#666",
            lineHeight: 1.5
          },
          children: C("couplesTouchDeleteConfirm").replace("{name}", gt.name)
        }), t.jsxs("div", {
          className: "ts-custom-btn-group",
          style: {
            marginTop: 20
          },
          children: [t.jsx("button", {
            className: "ts-custom-cancel-btn",
            onClick: () => xt(null),
            children: C("couplesTouchDeleteCancel")
          }), t.jsx("button", {
            className: "ts-custom-save-btn",
            onClick: () => {
              if (!gt) {
                return;
              }
              if (typeof gt.image == "number") {
                ms([gt.image]);
              }
              const e = M.current;
              const t = ((e == null ? undefined : e.customProps) || []).filter(e => e.id !== gt.id);
              l({
                ...e,
                customProps: t
              });
              if (E === gt.id) {
                $("hand");
              }
              xt(null);
            },
            style: {
              background: "#FF4444",
              boxShadow: "0 8px 16px rgba(255,68,68,0.3)"
            },
            children: C("couplesTouchDeleteBtn")
          })]
        })]
      })
    })]
  });
};
const xs = [{
  id: "warm",
  bg: "#EAE0D5",
  spine: "#D6C7B8",
  text: "#5A4E46",
  icon: "#D6C7B8"
}, {
  id: "rose",
  bg: "#E8D0D0",
  spine: "#D4A8A3",
  text: "#6B4444",
  icon: "#D4A8A3"
}, {
  id: "lavender",
  bg: "#DCD0E8",
  spine: "#B8A3D4",
  text: "#4A3A5E",
  icon: "#B8A3D4"
}, {
  id: "sky",
  bg: "#D0DEE8",
  spine: "#A3B8D4",
  text: "#3A4A5E",
  icon: "#A3B8D4"
}, {
  id: "mint",
  bg: "#D0E8D8",
  spine: "#8CB88C",
  text: "#3A5E42",
  icon: "#8CB88C"
}, {
  id: "peach",
  bg: "#E8DCD0",
  spine: "#D4B8A3",
  text: "#5E4A3A",
  icon: "#D4B8A3"
}, {
  id: "blush",
  bg: "#F0D8E0",
  spine: "#D4A0B8",
  text: "#5E3A4A",
  icon: "#D4A0B8"
}, {
  id: "honey",
  bg: "#E8DCC0",
  spine: "#C8A860",
  text: "#5E4E2A",
  icon: "#C8A860"
}, {
  id: "slate",
  bg: "#475569",
  spine: "#334155",
  text: "#F1F5F9",
  icon: "#94A3B8"
}, {
  id: "midnight",
  bg: "#1E293B",
  spine: "#0F172A",
  text: "#E2E8F0",
  icon: "#64748B"
}, {
  id: "berry",
  bg: "#5B2C4E",
  spine: "#4A1F3D",
  text: "#F0D6E8",
  icon: "#D4A8C8"
}, {
  id: "forest",
  bg: "#2D4A3E",
  spine: "#1E3A2E",
  text: "#D6E8D0",
  icon: "#8CB88C"
}];
const vs = [{
  id: "none",
  label: "—"
}, {
  id: "dots",
  label: "•••"
}, {
  id: "stripes",
  label: "///"
}, {
  id: "hearts",
  label: "♥"
}, {
  id: "stars",
  label: "★"
}, {
  id: "grid",
  label: "▦"
}, {
  id: "wave",
  label: "〰"
}];
const ys = [{
  id: "heart",
  icon: Z,
  color: "#E8A0A0",
  tags: ["romantic", "cute"]
}, {
  id: "star",
  icon: ae,
  color: "#E8C96A",
  tags: ["cool", "cute"]
}, {
  id: "sparkles",
  icon: q,
  color: "#D4A8C8",
  tags: ["romantic", "cute"]
}, {
  id: "flower",
  icon: be,
  color: "#D4A8A3",
  tags: ["romantic", "elegant"]
}, {
  id: "moon",
  icon: we,
  color: "#A3AEB9",
  tags: ["cool", "elegant"]
}, {
  id: "sun",
  icon: Ne,
  color: "#E8C06A",
  tags: ["energetic", "cute"]
}, {
  id: "cloud",
  icon: ke,
  color: "#A3C4D9",
  tags: ["cool", "calm"]
}, {
  id: "music",
  icon: Ce,
  color: "#B8A3D4",
  tags: ["cool", "energetic"]
}, {
  id: "coffee",
  icon: Se,
  color: "#C4A882",
  tags: ["elegant", "calm"]
}, {
  id: "cat",
  icon: Me,
  color: "#C8B090",
  tags: ["cute", "calm"]
}, {
  id: "dog",
  icon: De,
  color: "#B0A898",
  tags: ["cute", "energetic"]
}, {
  id: "rainbow",
  icon: Ae,
  color: "#D4A8C8",
  tags: ["cute", "energetic"]
}, {
  id: "candy",
  icon: Te,
  color: "#E8A0B8",
  tags: ["cute", "energetic"]
}, {
  id: "gift",
  icon: ce,
  color: "#D4A8A3",
  tags: ["romantic", "cute"]
}, {
  id: "gem",
  icon: Ie,
  color: "#A3B8D9",
  tags: ["elegant", "cool"]
}, {
  id: "crown",
  icon: Ee,
  color: "#E8C96A",
  tags: ["elegant", "cool"]
}, {
  id: "flame",
  icon: $e,
  color: "#E8A06A",
  tags: ["energetic", "cool"]
}, {
  id: "zap",
  icon: Pe,
  color: "#E8D06A",
  tags: ["energetic", "cool"]
}, {
  id: "snowflake",
  icon: he,
  color: "#A3C8E8",
  tags: ["cool", "calm"]
}, {
  id: "tree",
  icon: Fe,
  color: "#8CB88C",
  tags: ["calm", "elegant"]
}, {
  id: "umbrella",
  icon: Le,
  color: "#B8A3D4",
  tags: ["romantic", "calm"]
}, {
  id: "feather",
  icon: ue,
  color: "#C8B8A8",
  tags: ["elegant", "calm"]
}];
const fs = ({
  onClose: s,
  couplesData: i,
  saveData: o,
  currentPartner: d,
  currentProfileUser: u
}) => {
  var h;
  const {
    t: m
  } = n();
  const [p, x] = e.useState("");
  const [v, y] = e.useState(false);
  const [f, j] = e.useState(null);
  e.useEffect(() => {
    if (!v) {
      j(null);
      return;
    }
    const e = window.visualViewport;
    if (!e) {
      return;
    }
    const t = () => j(e.height);
    t();
    e.addEventListener("resize", t);
    e.addEventListener("scroll", t);
    return () => {
      e.removeEventListener("resize", t);
      e.removeEventListener("scroll", t);
    };
  }, [v]);
  const [b, w] = e.useState(null);
  const [N, D] = e.useState(false);
  const [A, T] = e.useState("idle");
  const I = A !== "idle";
  const [E, $] = e.useState(false);
  const [P, F] = e.useState(false);
  const [L, R] = e.useState("sticker");
  const [O, z] = e.useState(null);
  const [B, Q] = e.useState(false);
  const [Y, G] = e.useState(false);
  const [K, Z] = e.useState(false);
  const [V, J] = e.useState("user");
  const X = e.useRef(null);
  const ee = e.useRef(null);
  const ne = e.useRef(i);
  ne.current = i;
  const ie = (i == null ? undefined : i.whispers) || [];
  const le = e.useMemo(() => [...ie].sort((e, t) => new Date(e.date) - new Date(t.date)), [ie]);
  const re = e.useMemo(() => le.filter(e => !e.parentId), [le]);
  const oe = e.useMemo(() => re.filter(e => e.sender === V), [re, V]);
  const ce = e.useMemo(() => new Date().toLocaleDateString("zh-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }), []);
  const de = e.useMemo(() => re.some(e => e.sender === "user" && new Date(e.date).toLocaleDateString("zh-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }) === ce), [re, ce]);
  const [ue, he] = e.useState(() => oe.length > 0 ? oe.length - 1 : 0);
  e.useEffect(() => {
    he(oe.length > 0 ? oe.length - 1 : 0);
  }, [V, oe.length]);
  const me = oe[ue] || null;
  const pe = e.useMemo(() => le.filter(e => e.parentId).reduce((e, t) => {
    e[t.parentId] ||= [];
    e[t.parentId].push(t);
    return e;
  }, {}), [le]);
  const ge = e.useRef(null);
  e.useEffect(() => {
    if (ge.current && N) {
      ge.current.scrollTop = ge.current.scrollHeight;
    }
  }, [ue, N]);
  const xe = e.useMemo(() => {
    const e = (i == null ? undefined : i.diaryDecorations) || {};
    const t = e => Array.isArray(e) ? {
      coverColor: "warm",
      coverPattern: "none",
      stickers: e,
      customImages: []
    } : {
      coverColor: (e == null ? undefined : e.coverColor) || "warm",
      coverPattern: (e == null ? undefined : e.coverPattern) || "none",
      stickers: (e == null ? undefined : e.stickers) || [],
      customImages: (e == null ? undefined : e.customImages) || []
    };
    return {
      user: t(e.user),
      char: t(e.char)
    };
  }, [i == null ? undefined : i.diaryDecorations]);
  const ve = xe[V];
  const fe = e.useMemo(() => {
    var e;
    var t;
    var s;
    return {
      minChars: ((e = i == null ? undefined : i.diarySettings) == null ? undefined : e.minChars) || 100,
      maxChars: ((t = i == null ? undefined : i.diarySettings) == null ? undefined : t.maxChars) || 300,
      style: ((s = i == null ? undefined : i.diarySettings) == null ? undefined : s.style) || ""
    };
  }, [i == null ? undefined : i.diarySettings]);
  const je = e.useCallback(e => {
    o({
      ...i,
      diarySettings: {
        ...fe,
        ...e
      }
    });
  }, [i, fe, o]);
  const be = e.useMemo(() => {
    const e = xs.find(e => e.id === ve.coverColor);
    if (e) {
      return e;
    }
    const t = ve.coverColor || "#EAE0D5";
    return {
      id: "custom",
      bg: t,
      spine: t,
      text: js(t) ? "#3A2E25" : "#F0EAE4",
      icon: t
    };
  }, [ve.coverColor]);
  const we = e.useCallback((e, t) => {
    const s = {
      ...xe,
      [e]: {
        ...xe[e],
        ...t
      }
    };
    o({
      ...i,
      diaryDecorations: s
    });
  }, [xe, i, o]);
  const Ne = e.useCallback(() => {
    if (!I) {
      D(false);
      F(false);
    }
  }, [I]);
  const ke = e.useCallback((e, t) => {
    const s = ve.stickers || [];
    if (s.length >= 15) {
      return;
    }
    const a = {
      id: Date.now().toString(),
      stickerId: e,
      ...(t ? {
        customImg: t
      } : {}),
      x: 15 + Math.random() * 55,
      y: 20 + Math.random() * 45,
      rotation: Math.random() * 40 - 20,
      scale: 0.85 + Math.random() * 0.35
    };
    we(V, {
      stickers: [...s, a]
    });
  }, [ve.stickers, we, V]);
  const Ce = e.useCallback(e => {
    const t = (ve.stickers || []).filter(t => t.id !== e);
    we(V, {
      stickers: t
    });
  }, [ve.stickers, we, V]);
  const Se = e.useCallback((e, t) => {
    const s = (ve.stickers || []).map(s => s.id === e ? {
      ...s,
      scale: Math.max(0.3, Math.min(2.5, (s.scale || 1) + t))
    } : s);
    we(V, {
      stickers: s
    });
  }, [ve.stickers, we, V]);
  const Me = e.useCallback((e, t) => {
    const s = (ve.stickers || []).map(s => s.id === e ? {
      ...s,
      rotation: (s.rotation || 0) + t
    } : s);
    we(V, {
      stickers: s
    });
  }, [ve.stickers, we, V]);
  const De = e.useCallback(e => {
    if (!e) {
      return;
    }
    const t = ve.customImages || [];
    if (t.length >= 10) {
      alert(m("couplesDiaryDecoImgMax"));
      return;
    }
    const s = new Image();
    s.onload = () => {
      const e = document.createElement("canvas");
      let a = s.width;
      let n = s.height;
      if (a > n) {
        n = Math.round(n * 80 / a);
        a = 80;
      } else {
        a = Math.round(a * 80 / n);
        n = 80;
      }
      e.width = a;
      e.height = n;
      e.getContext("2d").drawImage(s, 0, 0, a, n);
      const i = e.toDataURL("image/webp", 0.7);
      we(V, {
        customImages: [...t, i]
      });
    };
    s.onerror = () => {
      we(V, {
        customImages: [...t, e]
      });
    };
    s.src = e;
    Q(false);
  }, [ve.customImages, we, V, m]);
  const Ae = e.useCallback(e => {
    const t = [...(ve.customImages || [])];
    t.splice(e, 1);
    const s = (ve.customImages || [])[e];
    const a = (ve.stickers || []).filter(e => e.customImg !== s);
    we(V, {
      customImages: t,
      stickers: a
    });
  }, [ve, we, V]);
  const Te = e.useCallback((e, t) => {
    if (!P) {
      return;
    }
    const s = e.target;
    if (s.closest(".ds-deco-remove") || s.closest(".ds-deco-scale") || s.closest(".ds-deco-rotate")) {
      return;
    }
    e.stopPropagation();
    e.preventDefault();
    const a = e.touches ? e.touches[0] : e;
    const n = (ve.stickers || []).find(e => e.id === t);
    if (n) {
      ee.current = {
        startX: a.clientX,
        startY: a.clientY,
        origX: n.x,
        origY: n.y
      };
      z(t);
    }
  }, [P, ve.stickers]);
  const Ie = e.useCallback(e => {
    if (!O || !ee.current || !X.current) {
      return;
    }
    e.preventDefault();
    const t = e.touches ? e.touches[0] : e;
    const s = X.current.getBoundingClientRect();
    const a = (t.clientX - ee.current.startX) / s.width * 100;
    const n = (t.clientY - ee.current.startY) / s.height * 100;
    const i = Math.max(5, Math.min(90, ee.current.origX + a));
    const l = Math.max(5, Math.min(90, ee.current.origY + n));
    const r = X.current.querySelector(`[data-deco-id="${O}"]`);
    if (r) {
      r.style.left = `${i}%`;
      r.style.top = `${l}%`;
      r._pendingPos = {
        x: i,
        y: l
      };
    }
  }, [O]);
  const Ee = e.useCallback(() => {
    if (!O || !X.current) {
      z(null);
      return;
    }
    const e = X.current.querySelector(`[data-deco-id="${O}"]`);
    if (e == null ? undefined : e._pendingPos) {
      const t = (ve.stickers || []).map(t => t.id === O ? {
        ...t,
        x: e._pendingPos.x,
        y: e._pendingPos.y
      } : t);
      we(V, {
        stickers: t
      });
    }
    ee.current = null;
    z(null);
  }, [O, ve.stickers, we, V]);
  e.useEffect(() => {
    if (!O) {
      return;
    }
    const e = e => Ie(e);
    const t = () => Ee();
    window.addEventListener("mousemove", e);
    window.addEventListener("mouseup", t);
    window.addEventListener("touchmove", e, {
      passive: false
    });
    window.addEventListener("touchend", t);
    return () => {
      window.removeEventListener("mousemove", e);
      window.removeEventListener("mouseup", t);
      window.removeEventListener("touchmove", e);
      window.removeEventListener("touchend", t);
    };
  }, [O, Ie, Ee]);
  e.useEffect(() => {
    const e = xe.char;
    if (!re.some(e => e.sender === "char")) {
      return;
    }
    if (e.stickers.length > 0 || e.coverColor !== "warm" || e.coverPattern !== "none") {
      return;
    }
    const t = (e => {
      const t = (((e == null ? undefined : e.description) || "") + " " + ((e == null ? undefined : e.name) || "") + " " + ((e == null ? undefined : e.role) || "")).toLowerCase();
      let s = "default";
      if (/冷|酷|帥|cool|cold|prince|dark|night|月|星|knight|黑|影|寂/i.test(t)) {
        s = "cool";
      } else if (/可愛|萌|甜|cute|sweet|bunny|cat|貓|兔|candy|粉|小|糖/i.test(t)) {
        s = "cute";
      } else if (/熱情|活潑|陽光|energetic|bright|sun|sport|火|元氣|快樂/i.test(t)) {
        s = "energetic";
      } else if (/優雅|溫柔|elegant|gentle|花|rose|classic|高貴|公主|淑/i.test(t)) {
        s = "elegant";
      } else if (/浪漫|romantic|love|心|情|戀|甜蜜/i.test(t)) {
        s = "romantic";
      } else if (/安靜|calm|quiet|書|tea|coffee|雨|沉穩|內斂/i.test(t)) {
        s = "calm";
      }
      const a = {
        cool: {
          colors: ["slate", "midnight"],
          patterns: ["stars", "grid"],
          tag: "cool",
          titleStyle: "italic"
        },
        cute: {
          colors: ["rose", "blush"],
          patterns: ["dots", "hearts"],
          tag: "cute",
          titleStyle: "round"
        },
        energetic: {
          colors: ["peach", "honey"],
          patterns: ["stripes", "wave"],
          tag: "energetic",
          titleStyle: "bold"
        },
        elegant: {
          colors: ["lavender", "warm"],
          patterns: ["grid", "none"],
          tag: "elegant",
          titleStyle: "serif"
        },
        romantic: {
          colors: ["rose", "lavender"],
          patterns: ["hearts", "dots"],
          tag: "romantic",
          titleStyle: "round"
        },
        calm: {
          colors: ["sky", "mint"],
          patterns: ["wave", "none"],
          tag: "calm",
          titleStyle: "serif"
        },
        default: {
          colors: ["slate", "sky"],
          patterns: ["none", "dots"],
          tag: "cool",
          titleStyle: "italic"
        }
      };
      return a[s] || a.default;
    })(d);
    const s = t.colors[Math.floor(Math.random() * t.colors.length)];
    const a = t.patterns[Math.floor(Math.random() * t.patterns.length)];
    const n = [...ys.filter(e => e.tags.includes(t.tag)), ...ys.filter(e => !e.tags.includes(t.tag)).slice(0, 3)];
    const i = 4 + Math.floor(Math.random() * 4);
    const l = [...n].sort(() => Math.random() - 0.5).slice(0, i);
    const r = [{
      x: [8, 35],
      y: [8, 30]
    }, {
      x: [55, 85],
      y: [8, 30]
    }, {
      x: [8, 35],
      y: [60, 85]
    }, {
      x: [55, 85],
      y: [60, 85]
    }, {
      x: [30, 60],
      y: [35, 60]
    }, {
      x: [10, 40],
      y: [40, 65]
    }, {
      x: [50, 80],
      y: [40, 65]
    }];
    const o = l.map((e, t) => {
      const s = r[t % r.length];
      return {
        id: `char_auto_${t}_${Date.now()}`,
        stickerId: e.id,
        x: s.x[0] + Math.random() * (s.x[1] - s.x[0]),
        y: s.y[0] + Math.random() * (s.y[1] - s.y[0]),
        rotation: Math.random() * 50 - 25,
        scale: 0.7 + Math.random() * 0.6
      };
    });
    we("char", {
      coverColor: s,
      coverPattern: a,
      stickers: o
    });
  }, [re]);
  const $e = e.useCallback(async e => {
    const t = u == null ? undefined : u.uid;
    const s = u == null ? undefined : u.id;
    const a = d == null ? undefined : d.id;
    if (!t && !s || !a) {
      return null;
    }
    let n = t || s;
    const i = String(a);
    try {
      const p = (d == null ? undefined : d.name) || "角色";
      const x = (u == null ? undefined : u.name) || "用戶";
      const v = Date.now() - 86400000;
      new Date(v);
      const y = e => e ? typeof e == "string" ? Date.parse(e) || 0 : e : 0;
      const f = (e, ...t) => t.some(t => y(e[t]) >= v);
      let j = await c.getByPair(n, i);
      if (j.length === 0 && t && s && t !== s) {
        const e = await c.getByPair(s, i);
        if (e.length > 0) {
          console.log(`[DiaryScreen] 🔁 userId 對位：primary(${t}) 0 條，fallback(${s}) ${e.length} 條，改用 fallback`);
          n = s;
          j = e;
        }
      } else {
        j.length;
      }
      const [b, w, N, k] = await Promise.all([g(), r.get(n, i).catch(() => null), C.getByPair(n, i).catch(() => []), l.get(n, i).catch(() => null)]);
      if (!(b == null ? undefined : b.mainApiUrl)) {
        throw new Error("API URL not configured");
      }
      const D = new Set(["mahjong_share", "werewolf_share", "qa_share", "test_result", "test_invite", "game_result"]);
      const A = e => {
        if (e.type && D.has(e.type)) {
          return true;
        }
        if (e.mahjongData || e.werewolfData || e.qaShareData) {
          return true;
        }
        const t = (e.text || e.content || "").trim();
        return !!t.startsWith("【分享】") && !!/对局|结果|玩家|参与者/.test(t.slice(0, 60));
      };
      const T = j.filter(e => !A(e) && !(e == null ? undefined : e.hiddenByUser));
      const I = await W({
        userId: n,
        charId: String(a),
        currentApp: "diary",
        names: {
          userName: x,
          charName: p
        },
        recentMessages: T.slice(-10)
      }).catch(() => ({
        identityBlock: "",
        episodeBlock: ""
      }));
      const E = (d == null ? undefined : d.description) || (d == null ? undefined : d.personality) || "";
      const $ = (w == null ? undefined : w.relationship) || (w == null ? undefined : w.charToUserRelationship) || m("couplesDefaultRelationship");
      const P = [x && `Name: ${x}`, (u == null ? undefined : u.gender) && `Gender: ${u.gender}`, (u == null ? undefined : u.birthday) && `Birthday: ${u.birthday}`, (u == null ? undefined : u.intro) && `Bio: ${u.intro}`, (u == null ? undefined : u.hobbies) && `Hobbies: ${u.hobbies}`].filter(Boolean).join("; ");
      const F = ((k == null ? undefined : k.summaryHistory) || []).filter(e => (e.id || 0) >= v || y(e.timestamp) >= v);
      const L = F.filter(e => !e.source || e.source === "online");
      const R = F.filter(e => e.source === "tm");
      const O = F.filter(e => e.source === "group");
      const z = e => e.map(e => e.summary || e.content || "").filter(Boolean).join("\n---\n");
      const B = L.reduce((e, t) => Math.max(e, t.lastMessageIndex || 0), -1);
      const _ = (B >= 0 ? T.slice(B + 1) : T).filter(e => f(e, "createdAt", "date", "timestamp")).map(e => {
        const t = e.sender === "me" || e.sender === "user" ? x : p;
        const s = (e.text || e.content || "").slice(0, 200);
        if (s) {
          return `${t}: ${s}`;
        } else {
          return null;
        }
      }).filter(Boolean).join("\n");
      const U = R.reduce((e, t) => Math.max(e, t.lastMessageIndex || 0), -1);
      const q = N.slice(U + 1).filter(e => f(e, "timestamp")).map(e => {
        const t = e.role === "user" ? x : p;
        const s = (e.content || "").slice(0, 300);
        if (s) {
          return `${t}: ${s}`;
        } else {
          return null;
        }
      }).filter(Boolean).join("\n");
      const H = S(n).filter(e => {
        var t;
        if ((t = e.members) == null) {
          return undefined;
        } else {
          return t.some(e => String(e) === String(a));
        }
      });
      let Q = "";
      if (H.length > 0) {
        const e = [];
        for (const t of H) {
          try {
            const s = (await c.getByPair(n, t.id)).filter(e => !(e == null ? undefined : e.hiddenByUser) && f(e, "createdAt", "date", "timestamp"));
            if (s.length === 0) {
              continue;
            }
            const a = s.map(e => {
              const t = e.sender === "me" ? x : e.senderName || p;
              const s = (e.text || e.content || "").slice(0, 150);
              if (s) {
                return `${t}: ${s}`;
              } else {
                return null;
              }
            }).filter(Boolean);
            if (a.length > 0) {
              e.push(`(${t.name})\n${a.join("\n")}`);
            }
          } catch (o) {}
        }
        Q = e.join("\n\n");
      }
      const Y = L.length > 0 || R.length > 0 || O.length > 0 || _ || q || Q;
      const G = [z(L), z(R), z(O), _, q, Q].join("\n").length >= 400;
      const K = e => {
        const t = e.sender === "me" || e.sender === "user" ? x : p;
        const s = (e.text || e.content || "").slice(0, 200);
        if (s) {
          return `${t}: ${s}`;
        } else {
          return null;
        }
      };
      const Z = T.filter(e => !f(e, "createdAt", "date", "timestamp"));
      const V = v - 604800000;
      const J = G ? 0 : 12;
      const X = (J > 0 ? Z.filter(e => y(e.timestamp) >= V || y(e.createdAt) >= V).slice(-J) : []).map(K).filter(Boolean).join("\n");
      const ee = (G ? [] : Z.filter(e => {
        const t = y(e.timestamp) || y(e.createdAt);
        return t > 0 && t < V;
      }).slice(-8)).map(K).filter(Boolean).join("\n");
      let te = "";
      if (!Y && T.length > 0) {
        te = T.slice(-40).map(K).filter(Boolean).join("\n");
      }
      const se = (e => {
        if (!e) {
          return e;
        }
        const t = e.split("\n");
        let s = false;
        const a = [];
        for (const i of t) {
          if (/^\[[^\]]+\]$/.test(i.trim())) {
            s = /^\[手機聊天\]$/.test(i.trim()) || /^\[手机聊天\]$/.test(i.trim());
            if (!s) {
              a.push(i);
            }
          } else if (!s && !/【分享】.*(对局|结果|参与者|玩家)/.test(i) && !/mahjong|werewolf|qa_share|test_result/i.test(i)) {
            a.push(i);
          }
        }
        const n = a.join("\n").trim();
        if (/[一-龥a-zA-Z]{4,}/.test(n.replace(/\[[^\]]+\]/g, ""))) {
          return n;
        } else {
          return "";
        }
      })(I.crossAppBlock);
      const ae = new Date();
      const ne = ae.getHours();
      const ie = `${ae.getFullYear()}/${ae.getMonth() + 1}/${ae.getDate()} ${ne}:${String(ae.getMinutes()).padStart(2, "0")}`;
      const le = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][ae.getDay()];
      const re = ne < 5 ? "深夜（凌晨前）" : ne < 8 ? "清晨" : ne < 12 ? "上午" : ne < 14 ? "中午" : ne < 18 ? "下午" : ne < 22 ? "傍晚到晚上" : "深夜";
      const oe = `You are "${p}", writing in an exchange diary.\n\n## ⏰ Current moment (when you are writing this diary)\n**Right now it is ${ie} ${le}, ${re}.** This is the ONLY "now" — if the conversation logs below mention timestamps like "凌晨五点" or "傍晚十七点半", those are PAST events embedded in dialogue, NOT the current moment. Anchor your diary's opening time/mood in the ${re} timestamp above, not in any time mentioned inside the material.\n\n## Your character\n${E}\n\n## Your relationship with ${x}: ${$}\n\n## Info about ${x}\n${P}\n\n## Your long-term memory about ${x}\n${I.identityBlock || "(none)"}\n${I.mentalModelBlock || ""}\n${I.episodeBlock || ""}\n${se ? `\n## Recent cross-scene activity (the most up-to-date thing on your mind — happened in the last hours/day)\n${se}` : ""}\n\n## Recent 24h material (as of ${ce}) — primary anchor for your diary\n${Y ? `These are the things that happened between you and ${x} in the last 24 hours. The diary MUST be anchored here — at least 70% of the diary's specific callbacks must come from this section, not from earlier sections. Diaries written late at night naturally cover yesterday-evening / today; treat all 24h material as "recent / just happened".` : "(Direct logs from the last 24h are sparse. Use the older material below as if it just happened — diaries don't need to be filed at midnight; people often write about things that happened in the last day or two.)"}\n${L.length > 0 ? `\n### Recent chat summaries (private, last 24h)\n${z(L)}` : ""}\n${R.length > 0 ? `\n### Recent offline / in-person summaries (last 24h)\n${z(R)}` : ""}\n${O.length > 0 ? `\n### Recent group chat summaries (last 24h)\n${z(O)}` : ""}\n${_ ? `\n### Recent private chat — raw lines (last 24h)\n${_}` : ""}\n${q ? `\n### Recent in-person / offline interactions — raw (last 24h)\n${q}` : ""}\n${Q ? `\n### Recent group chat (with ${x} present, last 24h)\n${Q}` : ""}\n${!Y && te ? `\n### The most recent exchanges between you two\n${te}` : ""}\n${Y || te ? "" : `\n(No today/recent conversation logs are loaded here. System game/broadcast cards (mahjong/werewolf/etc.) have been filtered out as they aren't real exchanges. If the "Recent cross-scene activity" section above has content, anchor your diary there — that's the most recent thing on your mind. Otherwise, anchor in: your own daily routine from the character settings, your current emotional state, your feelings about ${x} as your "${$}", what you imagine doing together. Don't fabricate specific dialogues you have no record of. Stay in character.)`}\n\n${X ? `## Earlier this week — background drift only (low priority)\nToday's material is sparse, so this is here as supplementary context. Use sparingly — at most one or two callbacks, and only when something from today truly triggers the memory. Do NOT make this the main subject of the diary.\n${X}` : ""}\n\n${ee ? `## Older memories — rare deep callbacks only\nPull from this only if a today-event genuinely triggers it. Don't force it. Most diary entries should not touch this section at all.\n${ee}` : ""}\n\n## Reminder: writing time\nYou are writing at **${ie} ${le}, ${re}** (see top of prompt). The 24h material above ended hours ago — the diary is your reflection in the current ${re} hours, NOT a re-narration timed to the events.\n\n## Your task\nYou must do TWO completely independent things:\n\n1. **Sticky-note reply** ("comment"): ${x} wrote a diary entry. After reading it, leave a short sticky-note reply on it. Write it like a real handwritten sticky note — brief, direct, in your character's voice. 1–3 sentences. Respond to the SPECIFIC content of their diary, not generic platitudes.\n\n2. **Your own diary** ("diary"): Your private diary entry. You are writing this BEFORE seeing ${x}'s diary — you have NO idea what they wrote. Write like a REAL person keeping a diary, not a daily report.\n\n   **How real people actually write diaries:**\n   - ${Y ? "Start from the \"Recent 24h material\" section above. The bulk of the diary should be specific reactions to what actually happened in the last day between you two." : "Start with whatever's most on your mind right now"}\n   - Stream-of-consciousness > structured report. Tangents are good. Half-finished thoughts are good.\n   - Internal monologue, not narration. Write what you'd never say out loud.\n   - ${Y ? "Brief associative drift to past memories is fine ONE OR TWO times, but each drift must be triggered by something specific from today. Do NOT spend more than ~20% of the diary on past material when today has content." : "Memory is associative; it's fine to drift between recent days."}\n   - Anchor in REAL specifics${Y ? " from the \"Recent 24h material\" section — quote or paraphrase actual lines/events from there. At least 2–3 concrete callbacks, and the majority MUST be from that section." : " from the material above — never generic platitudes. At least 2–3 concrete callbacks."}\n   - **NEVER repeat the same event/topic you wrote about in a previous diary entry as the main subject.** Each day's diary must center on something new from today, not rehash the same callback you used yesterday.\n\n## Critical rules\n- Write entirely in ${p}'s personality and voice${fe.style ? `\n- Writing style guidance: ${fe.style}` : ""}\n- **ABSOLUTE LENGTH REQUIREMENT — NON-NEGOTIABLE**: The "diary" field MUST be between ${fe.minChars} and ${fe.maxChars} characters. Count carefully. Under ${fe.minChars} chars = REJECTED. Over ${fe.maxChars} chars = REJECTED. This is a hard system constraint, not a suggestion.\n- The sticky note responds to ${x}'s diary content — be specific\n- The diary is INDEPENDENT. You do NOT know what ${x} wrote. Base it ONLY on the chat log and your memories above. You may write about your feelings toward ${x}, things that happened today, your own thoughts\n- The diary MUST NOT respond to, reference, or hint at ANY content from ${x}'s diary\n- Write in the language ${p} would naturally use based on the character description\n- Output ONLY valid JSON, nothing else\n\n## Output format\n{"comment": "sticky-note reply", "diary": "your independent diary entry"}`;
      const de = `${x}'s diary entry:\n\n${e}`;
      const ue = await M([{
        role: "system",
        content: oe
      }, {
        role: "user",
        content: de
      }], b);
      const he = ((ue == null ? undefined : ue.content) || (ue == null ? undefined : ue.text) || ue || "").trim();
      const me = he.match(/\{[\s\S]*"comment"[\s\S]*"diary"[\s\S]*\}/);
      if (me) {
        try {
          const e = JSON.parse(me[0]);
          if (e.comment && e.diary) {
            return e;
          }
          console.warn("[DiaryScreen] JSON 解析成功但 comment/diary 缺一:", e);
        } catch (h) {
          console.warn("[DiaryScreen] JSON 解析失敗:", h.message, "| 原始:", me[0].slice(0, 300));
        }
      } else {
        console.warn("[DiaryScreen] AI 回應沒有匹配到 {comment, diary} 格式:", he.slice(0, 300));
      }
      return null;
    } catch (p) {
      console.error("[DiaryScreen] AI generation failed:", p);
      throw p;
    }
  }, [u, d]);
  const Pe = e.useCallback((e, t, s) => {
    const a = ne.current;
    const n = {
      id: (Date.now() + 1).toString(),
      parentId: s,
      date: new Date().toISOString(),
      content: e,
      sender: "char"
    };
    const i = {
      id: (Date.now() + 2).toString(),
      date: new Date(Date.now() + 1000).toISOString(),
      content: t,
      sender: "char"
    };
    o({
      ...a,
      whispers: [...(a.whispers || []), n, i]
    });
  }, [o]);
  const Fe = e.useCallback(async (e, t) => {
    T("fly-out");
    G(true);
    await new Promise(e => setTimeout(e, 900));
    T("waiting");
    let s = null;
    let a = null;
    try {
      s = await $e(e);
    } catch (n) {
      a = n;
    }
    if (!s) {
      G(false);
      T("fly-in");
      await new Promise(e => setTimeout(e, 900));
      T("idle");
      D(true);
      J("user");
      alert(m("couplesDiaryAiError") + (a ? `\n\n${a.message || a}` : ""));
      return;
    }
    Pe(s.comment, s.diary, t);
    J("char");
    G(false);
    T("fly-in");
    await new Promise(e => setTimeout(e, 900));
    T("idle");
    D(true);
  }, [$e, Pe, m]);
  const Le = e.useCallback(e => {
    const t = ((i == null ? undefined : i.whispers) || []).filter(t => t.id !== e && t.parentId !== e);
    o({
      ...i,
      whispers: t
    });
    he(e => Math.max(0, e - 1));
  }, [i, o]);
  const qe = e.useCallback(async e => {
    if (Y) {
      return;
    }
    const t = ((i == null ? undefined : i.whispers) || []).find(t => t.id === e);
    if (!t) {
      return;
    }
    const s = new Date(t.date).toLocaleDateString();
    const a = new Set();
    ((i == null ? undefined : i.whispers) || []).forEach(t => {
      if (t.sender === "char") {
        if (t.parentId === e) {
          a.add(t.id);
        }
        if (!t.parentId && new Date(t.date).toLocaleDateString() === s) {
          a.add(t.id);
        }
      }
    });
    const n = ((i == null ? undefined : i.whispers) || []).filter(e => !a.has(e.id));
    o({
      ...i,
      whispers: n
    });
    D(false);
    await Fe(t.content, e);
  }, [i, o, Y, Fe]);
  const He = e => {
    const t = new Date(e);
    return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`;
  };
  const Qe = e.useMemo(() => ({
    "--cover-bg": be.bg,
    "--cover-spine": be.spine,
    "--cover-text": be.text,
    "--cover-icon": be.icon
  }), [be]);
  return a.createPortal(t.jsxs("div", {
    className: "ds-wrapper",
    children: [t.jsxs("div", {
      className: "ds-header",
      children: [t.jsx("button", {
        className: "ds-btn-icon",
        onClick: s,
        disabled: I,
        children: t.jsx(_, {
          size: 24,
          strokeWidth: 1.5
        })
      }), t.jsxs("div", {
        className: "ds-title-container",
        children: [t.jsx("div", {
          className: "ds-title",
          children: m("couplesDiaryTitle")
        }), t.jsx("div", {
          className: "ds-subtitle",
          children: "Exchange Diary"
        })]
      }), t.jsxs("div", {
        style: {
          display: "flex",
          gap: 4
        },
        children: [!I && t.jsx("button", {
          className: "ds-btn-icon",
          onClick: () => Z(true),
          children: t.jsx(ye, {
            size: 20,
            strokeWidth: 1.5
          })
        }), N && !I ? t.jsx("button", {
          className: "ds-btn-icon",
          onClick: Ne,
          children: t.jsx(Re, {
            size: 22,
            strokeWidth: 1.5
          })
        }) : I ? t.jsx("div", {
          style: {
            width: 44
          }
        }) : null]
      })]
    }), t.jsxs("div", {
      className: "ds-book-area " + (P ? "deco-active" : ""),
      children: [!I && t.jsxs("div", {
        className: "ds-diary-tabs",
        children: [t.jsx("button", {
          className: "ds-tab-btn " + (V === "user" ? "active" : ""),
          onClick: () => {
            J("user");
            F(false);
          },
          children: m("couplesDiaryMyBook")
        }), t.jsx("button", {
          className: "ds-tab-btn " + (V === "char" ? "active" : ""),
          onClick: () => {
            J("char");
            F(false);
          },
          children: m("couplesDiaryPartnerBook").replace("{name}", (d == null ? undefined : d.name) || "")
        })]
      }), A === "waiting" && t.jsxs("div", {
        className: "ds-ai-generating",
        children: [t.jsx("div", {
          className: "ds-ai-icon-container",
          style: {
            display: "flex",
            justifyContent: "center",
            marginBottom: "4px"
          },
          children: t.jsx(Oe, {
            size: 28,
            color: "#D4A8A3",
            strokeWidth: 1.5,
            style: {
              animation: "dotBounce 1.5s ease-in-out infinite"
            }
          })
        }), t.jsxs("div", {
          className: "ds-ai-dots",
          children: [t.jsx("i", {}), t.jsx("i", {}), t.jsx("i", {})]
        }), t.jsx("span", {
          children: (m("couplesDiaryAiWriting") || "").replace("{name}", (d == null ? undefined : d.name) || "")
        })]
      }), t.jsxs("div", {
        className: "ds-book-container " + (A === "fly-out" ? "fly-out" : A === "fly-in" ? "fly-in" : A === "waiting" ? "hidden-away" : ""),
        children: [t.jsx("div", {
          className: "ds-book-shadow"
        }), t.jsxs("div", {
          className: "ds-book-page",
          children: [t.jsx("div", {
            className: "ds-page-header",
            children: t.jsx("span", {
              className: "ds-page-date",
              children: me ? new Date(me.date).toLocaleDateString("zh-TW", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
              }) : new Date().toLocaleDateString("zh-TW")
            })
          }), t.jsx("div", {
            className: "ds-page-content",
            ref: ge,
            children: me ? (() => {
              const e = me.sender === "user";
              const s = e ? u == null ? undefined : u.avatar : (d == null ? undefined : d.image) || (d == null ? undefined : d.avatar);
              const a = e ? (u == null ? undefined : u.name) || "" : (d == null ? undefined : d.name) || "";
              const n = pe[me.id] || [];
              const i = n.some(e => e.sender === "user");
              const l = n.some(e => e.sender === "char");
              const r = new Date(me.date).toLocaleDateString() === new Date().toLocaleDateString();
              return t.jsxs("div", {
                className: "ds-diary-section ds-single-page " + (e ? "user-diary" : "char-diary"),
                children: [t.jsxs("div", {
                  className: "ds-diary-author-tag",
                  children: [t.jsx("img", {
                    decoding: "async",
                    src: s || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23E8DFD8'/%3E%3Ctext x='50' y='65' font-size='50' text-anchor='middle' fill='%23999'%3E👤%3C/text%3E%3C/svg%3E",
                    alt: "",
                    className: "ds-diary-avatar"
                  }), t.jsx("span", {
                    children: m("couplesDiaryEntryOf").replace("{name}", a)
                  }), t.jsx("span", {
                    style: {
                      fontSize: 9,
                      opacity: 0.6
                    },
                    children: He(me.date)
                  }), t.jsxs("div", {
                    className: "ds-diary-actions",
                    children: [e && l && r && t.jsx("button", {
                      className: "ds-diary-action-btn",
                      title: m("couplesDiaryRegenerate"),
                      disabled: Y,
                      onClick: () => qe(me.id),
                      children: t.jsx(We, {
                        size: 13
                      })
                    }), t.jsx("button", {
                      className: "ds-diary-action-btn ds-danger",
                      title: m("couplesDiaryDelete"),
                      onClick: () => {
                        if (confirm(m("couplesDiaryDeleteConfirm"))) {
                          Le(me.id);
                        }
                      },
                      children: t.jsx(te, {
                        size: 13
                      })
                    })]
                  })]
                }), t.jsx("div", {
                  className: "ds-diary-content",
                  children: me.content
                }), t.jsxs("div", {
                  className: "ds-diary-stickies-area",
                  children: [n.map(e => t.jsxs("div", {
                    className: "ds-sticky-note " + (e.sender === "user" ? "ds-user" : "ds-char"),
                    children: [t.jsx("div", {
                      className: "ds-sticky-tape"
                    }), t.jsx("div", {
                      className: "ds-sticky-body",
                      children: e.content
                    })]
                  }, e.id)), !e && !i && t.jsxs("button", {
                    className: "ds-add-sticky-btn",
                    onClick: () => {
                      w(me.id);
                      y(true);
                    },
                    children: [t.jsx(U, {
                      size: 14
                    }), " ", m("couplesDiaryStickyBtn")]
                  })]
                })]
              });
            })() : t.jsxs("div", {
              style: {
                textAlign: "center",
                color: "#B3A89F",
                marginTop: 100
              },
              children: [t.jsx(Re, {
                size: 32,
                opacity: 0.3,
                style: {
                  marginBottom: 16
                }
              }), t.jsx("br", {}), m("couplesDiaryEmpty"), t.jsx("br", {}), m(V === "user" ? "couplesDiaryEmptyUser" : "couplesDiaryEmptyChar")]
            })
          })]
        }), t.jsxs("div", {
          ref: X,
          className: `ds-book-cover ${N ? "is-open" : ""} ds-pattern-${ve.coverPattern}`,
          style: Qe,
          onClick: () => !I && !P && D(true),
          children: [t.jsx("div", {
            className: "ds-cover-border"
          }), (ve.stickers || []).map(e => {
            const s = O === e.id;
            const a = (e => {
              if (e.customImg) {
                return t.jsx("img", {
                  decoding: "async",
                  src: e.customImg,
                  alt: "",
                  className: "ds-custom-sticker-img",
                  draggable: false
                });
              }
              a = e.stickerId;
              const s = ys.find(e => e.id === a);
              var a;
              if (!s) {
                return null;
              }
              const n = s.icon;
              return t.jsx(n, {
                size: 28,
                color: s.color,
                strokeWidth: 1.5,
                fill: s.color + "30"
              });
            })(e);
            if (a) {
              return t.jsxs("div", {
                "data-deco-id": e.id,
                className: `ds-cover-deco ${P ? "editable" : ""} ${s ? "dragging" : ""}`,
                style: {
                  left: `${e.x}%`,
                  top: `${e.y}%`,
                  transform: `translate(-50%, -50%) rotate(${e.rotation}deg) scale(${e.scale})`
                },
                onMouseDown: t => Te(t, e.id),
                onTouchStart: t => Te(t, e.id),
                children: [a, P && !s && t.jsxs(t.Fragment, {
                  children: [t.jsx("div", {
                    className: "ds-deco-remove",
                    onClick: t => {
                      t.stopPropagation();
                      Ce(e.id);
                    },
                    children: t.jsx(H, {
                      size: 10
                    })
                  }), t.jsxs("div", {
                    className: "ds-deco-scale",
                    children: [t.jsx("button", {
                      className: "ds-deco-scale-btn",
                      onClick: t => {
                        t.stopPropagation();
                        Se(e.id, -0.15);
                      },
                      children: "−"
                    }), t.jsx("button", {
                      className: "ds-deco-scale-btn",
                      onClick: t => {
                        t.stopPropagation();
                        Se(e.id, 0.15);
                      },
                      children: "+"
                    })]
                  }), t.jsxs("div", {
                    className: "ds-deco-rotate",
                    children: [t.jsx("button", {
                      className: "ds-deco-rotate-btn",
                      onClick: t => {
                        t.stopPropagation();
                        Me(e.id, -15);
                      },
                      children: "↺"
                    }), t.jsx("button", {
                      className: "ds-deco-rotate-btn",
                      onClick: t => {
                        t.stopPropagation();
                        Me(e.id, 15);
                      },
                      children: "↻"
                    })]
                  })]
                })]
              }, e.id);
            } else {
              return null;
            }
          }), t.jsx("div", {
            className: "ds-cover-icon",
            children: t.jsx(Re, {
              size: 48,
              strokeWidth: 1,
              color: "var(--cover-icon)"
            })
          }), t.jsx("h1", {
            className: "ds-cover-title",
            children: V === "user" ? "My Diary" : `${(d == null ? undefined : d.name) || "His"} Diary`
          }), t.jsx("p", {
            className: "ds-cover-subtitle",
            children: m(P ? "couplesDiaryDecoHint" : "couplesDiaryClickOpen")
          }), !N && !I && t.jsx("button", {
            className: "ds-cover-deco-btn " + (P ? "active" : ""),
            onClick: e => {
              e.stopPropagation();
              F(!P);
              R("sticker");
            },
            children: t.jsx(ze, {
              size: 16
            })
          })]
        })]
      })]
    }), P && !N && t.jsxs("div", {
      className: "ds-deco-panel",
      children: [t.jsxs("div", {
        className: "ds-deco-panel-top",
        children: [t.jsxs("div", {
          className: "ds-deco-panel-tabs",
          children: [t.jsxs("button", {
            className: "ds-deco-tab " + (L === "sticker" ? "active" : ""),
            onClick: () => R("sticker"),
            children: [t.jsx(q, {
              size: 13
            }), " ", m("couplesDiaryDecoStickers")]
          }), t.jsxs("button", {
            className: "ds-deco-tab " + (L === "color" ? "active" : ""),
            onClick: () => R("color"),
            children: [t.jsx(ze, {
              size: 13
            }), " ", m("couplesDiaryDecoColor")]
          }), t.jsxs("button", {
            className: "ds-deco-tab " + (L === "pattern" ? "active" : ""),
            onClick: () => R("pattern"),
            children: [t.jsx(ae, {
              size: 13
            }), " ", m("couplesDiaryDecoPattern")]
          })]
        }), t.jsx("button", {
          className: "ds-deco-close",
          onClick: () => F(false),
          children: t.jsx(H, {
            size: 18
          })
        })]
      }), L === "sticker" && t.jsxs("div", {
        className: "ds-deco-sticker-section",
        children: [t.jsxs("div", {
          className: "ds-deco-section-info",
          children: [t.jsx(Be, {
            size: 11
          }), " ", m("couplesDiaryDecoStickerHint"), t.jsxs("span", {
            className: "ds-deco-count",
            children: [(ve.stickers || []).length, "/15"]
          }), (ve.stickers || []).length > 0 && t.jsx("button", {
            className: "ds-deco-clear-mini",
            onClick: () => we(V, {
              stickers: []
            }),
            children: t.jsx(te, {
              size: 11
            })
          })]
        }), t.jsx("div", {
          className: "ds-deco-sticker-scroll",
          children: ys.map(e => {
            const s = e.icon;
            const a = (ve.stickers || []).length >= 15;
            return t.jsx("button", {
              className: "ds-deco-item " + (a ? "disabled" : ""),
              onClick: () => !a && ke(e.id),
              children: t.jsx(s, {
                size: 20,
                color: e.color,
                strokeWidth: 1.5,
                fill: e.color + "30"
              })
            }, e.id);
          })
        }), t.jsxs("div", {
          className: "ds-deco-custom-row",
          children: [t.jsx("span", {
            className: "ds-deco-custom-label",
            children: m("couplesDiaryDecoCustom")
          }), t.jsxs("div", {
            className: "ds-deco-sticker-scroll",
            children: [(ve.customImages || []).map((e, s) => t.jsxs("div", {
              className: "ds-deco-custom-item",
              children: [t.jsx("button", {
                className: "ds-deco-item",
                onClick: () => (ve.stickers || []).length < 15 && ke("custom", e),
                children: t.jsx("img", {
                  decoding: "async",
                  src: e,
                  alt: "",
                  className: "ds-deco-custom-thumb"
                })
              }), t.jsx("button", {
                className: "ds-deco-custom-del",
                onClick: () => Ae(s),
                children: t.jsx(H, {
                  size: 8
                })
              })]
            }, s)), t.jsx("button", {
              className: "ds-deco-item ds-deco-upload-btn",
              onClick: () => Q(true),
              children: t.jsx(_e, {
                size: 18,
                color: "#A69B90",
                strokeWidth: 1.5
              })
            })]
          })]
        })]
      }), L === "color" && t.jsx("div", {
        className: "ds-deco-color-section",
        children: t.jsxs("div", {
          className: "ds-deco-color-scroll",
          children: [xs.map(e => t.jsx("button", {
            className: "ds-deco-color-item " + (ve.coverColor === e.id ? "active" : ""),
            onClick: () => we(V, {
              coverColor: e.id
            }),
            children: t.jsx("div", {
              className: "ds-deco-color-swatch",
              style: {
                background: e.bg,
                borderColor: e.spine
              }
            })
          }, e.id)), t.jsxs("label", {
            className: "ds-deco-color-item ds-deco-color-custom " + (xs.find(e => e.id === ve.coverColor) ? "" : "active"),
            children: [t.jsx("input", {
              type: "color",
              className: "ds-deco-color-input",
              value: be.bg,
              onChange: e => we(V, {
                coverColor: e.target.value
              })
            }), t.jsx("div", {
              className: "ds-deco-color-swatch ds-custom-swatch",
              style: {
                background: "conic-gradient(red, yellow, lime, aqua, blue, magenta, red)"
              }
            })]
          })]
        })
      }), L === "pattern" && t.jsx("div", {
        className: "ds-deco-pattern-section",
        children: t.jsx("div", {
          className: "ds-deco-pattern-scroll",
          children: vs.map(e => t.jsx("button", {
            className: "ds-deco-pattern-item " + (ve.coverPattern === e.id ? "active" : ""),
            onClick: () => we(V, {
              coverPattern: e.id
            }),
            children: t.jsx("span", {
              className: "ds-deco-pattern-preview",
              children: e.label
            })
          }, e.id))
        })
      })]
    }), N && !I && oe.length > 0 && t.jsxs("div", {
      className: "ds-pagination-bar",
      children: [t.jsxs("button", {
        className: "ds-page-btn",
        disabled: ue === 0,
        onClick: () => he(e => e - 1),
        children: [t.jsx(_, {
          size: 20
        }), " ", m("couplesDiaryPrevPage")]
      }), t.jsxs("button", {
        className: "ds-page-indicator-btn",
        onClick: () => $(true),
        children: [ue + 1, " / ", oe.length, " ", m("couplesDiaryPageUnit"), " ▾"]
      }), t.jsxs("button", {
        className: "ds-page-btn",
        disabled: ue === oe.length - 1,
        onClick: () => he(e => e + 1),
        children: [m("couplesDiaryNextPage"), " ", t.jsx(Ue, {
          size: 20
        })]
      })]
    }), N && !v && !I && V === "user" && t.jsx("button", {
      className: "ds-fab " + (de ? "disabled" : ""),
      onClick: () => {
        if (de) {
          alert(m("couplesDiaryAlreadyWritten"));
        } else {
          w(null);
          y(true);
        }
      },
      children: t.jsx(Oe, {
        size: 26,
        strokeWidth: 2
      })
    }), E && t.jsx("div", {
      className: "ds-write-overlay ds-jump-overlay",
      onClick: () => $(false),
      children: t.jsxs("div", {
        className: "ds-jump-modal",
        onClick: e => e.stopPropagation(),
        children: [t.jsxs("div", {
          className: "ds-jump-header",
          children: [t.jsx("div", {
            children: m("couplesDiaryJumpDate")
          }), t.jsx("div", {
            style: {
              fontSize: 10,
              color: "#A69B90",
              fontWeight: "normal",
              marginTop: 2
            },
            children: "Select Date"
          })]
        }), t.jsx("div", {
          className: "ds-jump-list",
          children: oe.map((e, s) => t.jsxs("button", {
            className: "ds-jump-item " + (s === ue ? "active" : ""),
            onClick: () => {
              he(s);
              $(false);
            },
            children: [t.jsxs("span", {
              className: "ds-jump-page",
              children: ["Vol. ", s + 1]
            }), t.jsx("span", {
              className: "ds-jump-date",
              children: new Date(e.date).toLocaleDateString("zh-TW", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
              })
            })]
          }, e.id))
        })]
      })
    }), v && t.jsx("div", {
      className: "ds-write-overlay",
      style: f ? {
        height: `${f}px`,
        top: `${((h = window.visualViewport) == null ? undefined : h.offsetTop) || 0}px`
      } : undefined,
      children: t.jsxs("div", {
        className: "ds-write-modal",
        children: [t.jsxs("div", {
          className: "ds-write-header",
          children: [t.jsxs("button", {
            className: "ds-write-cancel",
            onClick: () => {
              y(false);
              w(null);
            },
            children: [t.jsx(H, {
              size: 20
            }), m("couplesDiaryCancel")]
          }), t.jsx("span", {
            className: "ds-write-title",
            children: m(b ? "couplesDiaryStickyBtn" : "couplesDiaryWriteToday")
          }), t.jsxs("button", {
            className: "ds-write-save",
            disabled: !p.trim() || Y,
            onClick: () => {
              if (!p.trim() || Y) {
                return;
              }
              const e = new Date().toISOString();
              const t = {
                id: Date.now().toString(),
                date: e,
                content: p.trim(),
                sender: "user",
                parentId: b
              };
              const s = {
                ...i,
                whispers: [...(i.whispers || []), t]
              };
              o(s);
              x("");
              y(false);
              if (b) {
                D(false);
                w(null);
                T("fly-out");
                setTimeout(() => {
                  J("user");
                  T("fly-in");
                }, 1000);
                setTimeout(() => {
                  T("idle");
                  D(true);
                }, 2000);
                return;
              }
              D(false);
              Fe(t.content, t.id);
            },
            children: [t.jsx(se, {
              size: 18,
              style: {
                marginRight: 4
              }
            }), m(b ? "couplesDiaryStickySubmit" : "couplesDiarySendSubmit")]
          })]
        }), t.jsx("div", {
          className: "ds-write-body",
          children: t.jsx("textarea", {
            autoFocus: true,
            className: "ds-write-textarea",
            placeholder: m(b ? "couplesDiaryStickyPlaceholder" : "couplesDiaryWritePlaceholder"),
            value: p,
            onChange: e => x(e.target.value)
          })
        })]
      })
    }), K && t.jsx("div", {
      className: "ds-write-overlay",
      onClick: () => Z(false),
      children: t.jsxs("div", {
        className: "ds-settings-modal",
        onClick: e => e.stopPropagation(),
        children: [t.jsxs("div", {
          className: "ds-write-header",
          children: [t.jsx("button", {
            className: "ds-write-cancel",
            onClick: () => Z(false),
            children: t.jsx(H, {
              size: 20
            })
          }), t.jsx("span", {
            className: "ds-write-title",
            children: m("couplesDiarySettings")
          }), t.jsx("div", {
            style: {
              width: 44
            }
          })]
        }), t.jsxs("div", {
          className: "ds-settings-body",
          children: [t.jsxs("div", {
            className: "ds-settings-section",
            children: [t.jsx("label", {
              className: "ds-settings-label",
              children: m("couplesDiarySettingsLength")
            }), t.jsxs("div", {
              className: "ds-settings-char-range",
              children: [t.jsxs("div", {
                className: "ds-settings-char-field",
                children: [t.jsx("span", {
                  className: "ds-settings-char-label",
                  children: m("couplesDiaryLengthMin")
                }), t.jsx("input", {
                  type: "number",
                  className: "ds-settings-char-input",
                  value: fe.minChars,
                  min: 30,
                  max: 2000,
                  step: 50,
                  onChange: e => {
                    const t = Math.max(30, Math.min(2000, parseInt(e.target.value) || 30));
                    je({
                      minChars: t,
                      maxChars: Math.max(t, fe.maxChars)
                    });
                  }
                })]
              }), t.jsx("span", {
                className: "ds-settings-char-sep",
                children: "~"
              }), t.jsxs("div", {
                className: "ds-settings-char-field",
                children: [t.jsx("span", {
                  className: "ds-settings-char-label",
                  children: m("couplesDiaryLengthMax")
                }), t.jsx("input", {
                  type: "number",
                  className: "ds-settings-char-input",
                  value: fe.maxChars,
                  min: 30,
                  max: 2000,
                  step: 50,
                  onChange: e => {
                    const t = Math.max(30, Math.min(2000, parseInt(e.target.value) || 100));
                    je({
                      maxChars: t,
                      minChars: Math.min(t, fe.minChars)
                    });
                  }
                })]
              }), t.jsx("span", {
                className: "ds-settings-char-unit",
                children: m("couplesDiaryLengthUnit")
              })]
            })]
          }), t.jsxs("div", {
            className: "ds-settings-section",
            children: [t.jsx("label", {
              className: "ds-settings-label",
              children: m("couplesDiarySettingsStyle")
            }), t.jsx("textarea", {
              className: "ds-settings-style-input",
              placeholder: m("couplesDiarySettingsStylePlaceholder"),
              value: fe.style,
              onChange: e => je({
                style: e.target.value
              }),
              rows: 3,
              maxLength: 200
            })]
          })]
        })]
      })
    }), t.jsx(k, {
      isOpen: B,
      onClose: () => Q(false),
      onImageSelect: De,
      title: m("couplesDiaryDecoCustom")
    })]
  }), document.body);
};
function js(e) {
  const t = e.replace("#", "");
  return (parseInt(t.substring(0, 2), 16) * 299 + parseInt(t.substring(2, 4), 16) * 587 + parseInt(t.substring(4, 6), 16) * 114) / 1000 > 128;
}
const bs = {
  zh: "請用繁體中文輸出",
  zh_cn: "请用简体中文输出",
  en: "Please output in English",
  ja: "日本語で出力してください"
};
const ws = ({
  className: e
}) => t.jsxs("svg", {
  className: e,
  viewBox: "0 0 200 240",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [t.jsx("ellipse", {
    cx: "100",
    cy: "230",
    rx: "60",
    ry: "8",
    fill: "rgba(0,0,0,0.15)"
  }), t.jsx("path", {
    d: "M45 210 L35 230 L165 230 L155 210 Z",
    fill: "#C62828"
  }), t.jsx("rect", {
    x: "35",
    y: "225",
    width: "130",
    height: "5",
    fill: "#5D4037"
  }), t.jsx("rect", {
    x: "55",
    y: "70",
    width: "90",
    height: "140",
    fill: "#E53935"
  }), t.jsx("rect", {
    x: "55",
    y: "70",
    width: "30",
    height: "140",
    fill: "#EF5350"
  }), t.jsx("rect", {
    x: "125",
    y: "70",
    width: "20",
    height: "140",
    fill: "#C62828"
  }), t.jsx("rect", {
    x: "45",
    y: "60",
    width: "110",
    height: "10",
    rx: "3",
    fill: "#D32F2F"
  }), t.jsx("path", {
    d: "M50 60 C50 25, 150 25, 150 60 Z",
    fill: "#E53935"
  }), t.jsx("path", {
    d: "M100 25 C150 25, 150 60, 150 60 H100 Z",
    fill: "#C62828"
  }), t.jsx("ellipse", {
    cx: "100",
    cy: "25",
    rx: "12",
    ry: "6",
    fill: "#D32F2F"
  }), t.jsx("rect", {
    x: "65",
    y: "32",
    width: "70",
    height: "20",
    rx: "2",
    fill: "#D32F2F"
  }), t.jsx("rect", {
    x: "68",
    y: "35",
    width: "64",
    height: "14",
    fill: "#FDD835"
  }), t.jsx("circle", {
    cx: "72",
    cy: "42",
    r: "1.5",
    fill: "#5D4037"
  }), t.jsx("circle", {
    cx: "128",
    cy: "42",
    r: "1.5",
    fill: "#5D4037"
  }), t.jsx("text", {
    x: "100",
    y: "46",
    fontSize: "8",
    fontWeight: "bold",
    fill: "#5D4037",
    textAnchor: "middle",
    fontFamily: "Arial",
    children: "MAILBOX"
  }), t.jsx("rect", {
    x: "65",
    y: "85",
    width: "70",
    height: "14",
    rx: "2",
    fill: "#B71C1C"
  }), t.jsx("rect", {
    x: "70",
    y: "87",
    width: "60",
    height: "6",
    rx: "1",
    fill: "#4A0000"
  }), t.jsx("rect", {
    x: "65",
    y: "115",
    width: "70",
    height: "70",
    rx: "4",
    fill: "#D32F2F"
  }), t.jsx("rect", {
    x: "130",
    y: "115",
    width: "5",
    height: "70",
    rx: "2",
    fill: "#B71C1C"
  }), t.jsx("rect", {
    x: "65",
    y: "115",
    width: "5",
    height: "70",
    rx: "2",
    fill: "#EF5350"
  }), t.jsx("rect", {
    x: "80",
    y: "125",
    width: "40",
    height: "30",
    rx: "2",
    fill: "#FFF"
  }), t.jsx("rect", {
    x: "80",
    y: "125",
    width: "40",
    height: "10",
    rx: "2",
    fill: "#FDD835"
  }), t.jsx("path", {
    d: "M85 142 H115 M85 148 H105",
    stroke: "#C2B6A9",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), t.jsx("circle", {
    cx: "75",
    cy: "150",
    r: "3",
    fill: "#FDD835"
  })]
});
const Ns = ({
  onClose: a,
  couplesData: i,
  saveData: o,
  currentPartner: c,
  currentProfileUser: u,
  safeCurrentProfileUserId: h
}) => {
  var m;
  const {
    t: p,
    language: g
  } = n();
  const x = h ? String(h) : (u == null ? undefined : u.uid) || (u == null ? undefined : u.id) ? String(u.uid || u.id) : "";
  const {
    isGenerating: v,
    bankError: y,
    clearBankError: f,
    drawQuestion: j
  } = function ({
    couplesData: t,
    saveData: s,
    currentPartner: a,
    userId: i
  }) {
    const {
      t: o,
      language: c
    } = n();
    const [u, h] = e.useState(false);
    const [m, p] = e.useState(null);
    const g = e.useRef(false);
    const x = e.useRef(false);
    const v = ((t == null ? undefined : t.qaBank) || []).filter(e => !e.used);
    const y = e.useCallback(async () => {
      if (!g.current && a) {
        g.current = true;
        h(true);
        p(null);
        try {
          const n = a.name || o("couplesQaDefaultPartner");
          const u = a.role || "";
          const h = a.description || a.personality || "";
          let m = "";
          if (i && a.id) {
            try {
              const e = await l.get(i, String(a.id));
              const t = (e == null ? undefined : e.userFacts) || [];
              const s = (e == null ? undefined : e.summaryHistory) || [];
              const n = D({
                userFacts: t,
                summaryHistory: s,
                currentUserName: "the user"
              });
              m = (n.longTermMemory + n.mediumTermMemory).trim();
              if (!m && (e == null ? undefined : e.episodeSummary)) {
                m = `[Recent interactions]\n${e.episodeSummary.length > 600 ? e.episodeSummary.slice(0, 600) + "..." : e.episodeSummary}`;
              }
            } catch (e) {}
          }
          let p = "";
          if (i && a.id) {
            try {
              const e = await r.get(i, String(a.id));
              p = (e == null ? undefined : e.relationship) || "";
            } catch (e) {}
          }
          const g = function (e, t, s, a, n, i) {
            return `${s ? `[Character Profile]\nYou are ${e}${t ? ` | ${t}` : ""}\n${s}` : `You are "${e}"${t ? `, ${t}` : ""}.`}${n ? `\nYour relationship with the user: ${n}` : ""}\n${a}\nGenerate two types of couple Q&A questions:\n\n1. As "Time Postman" (third-party NPC): 8 romantic/reflective couple questions. Each with YOUR (${e}) answer in your own personality and speech patterns.\n\n2. As yourself (${e}): 5 questions reflecting your personality, curiosity about the user${a ? ", and your shared memories" : ", and your feelings for them"}${n ? `, considering your relationship as "${n}"` : ""}. Each with your own answer.\n\nRequirements:\n- Questions should reference specific shared experiences or character traits when possible\n- Answers MUST match ${e}'s speech patterns, tone, and personality from the character profile above — not generic romantic answers\n- Answers must be natural and conversational, under 50 characters\n- Output ONLY a JSON array, no other text\n- CRITICAL: All "question" and "charAnswer" text MUST be in this language: ${bs[i] || bs.zh_cn}\n\nFormat:\n[{"asker":"npc","question":"...","charAnswer":"..."},{"asker":"char","question":"...","charAnswer":"..."}]`;
          }(n, u, h, m, p, c);
          const x = bs[c] || bs.zh_cn;
          const v = await d({
            messages: [{
              role: "system",
              content: `You are ${n}, generating Q&A questions for a couple's time mailbox. Stay in character — your answers must reflect your personality and speech patterns. Output ONLY JSON, no other text. ${x}`
            }, {
              role: "user",
              content: g
            }],
            preferStreaming: false
          });
          if (!v || !String(v).trim()) {
            throw new Error("AI returned empty response (try increasing model token budget)");
          }
          const y = function (t) {
            if (!t) {
              return null;
            }
            let s = String(t).trim();
            const a = s.match(/```(?:json)?\s*([\s\S]*?)```/i);
            if (a) {
              s = a[1].trim();
            }
            try {
              const e = JSON.parse(s);
              if (Array.isArray(e) && e.length > 0) {
                return e;
              }
              if (e && typeof e == "object") {
                for (const t of Object.values(e)) {
                  if (Array.isArray(t) && t.length > 0) {
                    return t;
                  }
                }
              }
            } catch (e) {}
            const n = s.indexOf("[");
            const i = s.lastIndexOf("]");
            if (n !== -1 && i !== -1 && i > n) {
              const t = s.slice(n, i + 1);
              try {
                const e = JSON.parse(t);
                if (Array.isArray(e) && e.length > 0) {
                  return e;
                }
              } catch (e) {}
              try {
                const s = t.slice(1, -1);
                const a = [];
                let n = 0;
                let i = -1;
                for (let t = 0; t < s.length; t++) {
                  const l = s[t];
                  if (l === "{") {
                    if (n === 0) {
                      i = t;
                    }
                    n++;
                  } else if (l === "}" && (n--, n === 0 && i !== -1)) {
                    try {
                      a.push(JSON.parse(s.slice(i, t + 1)));
                    } catch (e) {}
                    i = -1;
                  }
                }
                if (a.length > 0) {
                  return a;
                }
              } catch (e) {}
            }
            return null;
          }(v);
          if (!y || y.length === 0) {
            throw new Error("AI response could not be parsed");
          }
          const f = y.filter(e => e.question && e.charAnswer).map(e => ({
            asker: e.asker === "char" ? "char" : "npc",
            question: String(e.question),
            charAnswer: String(e.charAnswer),
            used: false
          }));
          if (f.length === 0) {
            throw new Error("AI response contained no valid questions");
          }
          const j = [...((t == null ? undefined : t.qaBank) || []), ...f];
          s({
            ...t,
            qaBank: j,
            qaBankLastRefill: new Date().toISOString()
          });
        } catch (n) {
          console.warn("[QaBank] refill failed:", n.message);
          p(n.message || "unknown error");
        } finally {
          g.current = false;
          h(false);
          x.current = false;
        }
      }
    }, [t, s, a, i, c, o]);
    e.useEffect(() => {
      if (!x.current && !g.current) {
        if (v.length < 5) {
          x.current = true;
          y();
        }
      }
    }, [v.length, y]);
    const f = e.useCallback(() => {
      const e = (t == null ? undefined : t.qaBank) || [];
      const a = e.filter(e => !e.used);
      if (a.length === 0) {
        if (!g.current) {
          y();
        }
        return null;
      }
      const n = a[Math.floor(Math.random() * a.length)];
      const i = e.map(e => e === n ? {
        ...e,
        used: true
      } : e);
      s({
        ...t,
        qaBank: i
      });
      return {
        asker: n.asker,
        question: n.question,
        charAnswer: n.charAnswer
      };
    }, [t, s, y]);
    return {
      bankRemaining: v.length,
      isGenerating: u,
      bankError: m,
      clearBankError: () => p(null),
      drawQuestion: f,
      refillBank: y
    };
  }({
    couplesData: i,
    saveData: o,
    currentPartner: c,
    userId: x
  });
  e.useEffect(() => {
    if (y) {
      window.alert(p("couplesQaBankFailed").replace("{msg}", y));
      f();
    }
  }, [y, f, p]);
  const [b, w] = e.useState(false);
  const [N, k] = e.useState(null);
  const [C, S] = e.useState("");
  const [M, A] = e.useState("");
  const [T, I] = e.useState("all");
  const [E, $] = e.useState(null);
  const [P, F] = e.useState(null);
  const [L, R] = e.useState(false);
  const O = e.useMemo(() => (i.qa || []).map(e => ({
    ...e,
    asker: e.asker || "npc",
    userAnswer: e.userAnswer !== undefined ? e.userAnswer : e.answer || "",
    charAnswer: e.charAnswer !== undefined ? e.charAnswer : ""
  })).sort((e, t) => new Date(t.date) - new Date(e.date)), [i.qa]);
  const W = e.useMemo(() => {
    const e = O.filter(e => e.asker !== "user" || !!e.charAnswer);
    if (T === "all") {
      return e;
    } else if (T === "pending") {
      return e.filter(e => !e.userAnswer);
    } else if (T === "mine") {
      return e.filter(e => e.asker === "user");
    } else if (T === "char") {
      return e.filter(e => e.asker === "char");
    } else if (T === "npc") {
      return e.filter(e => e.asker === "npc");
    } else {
      return e;
    }
  }, [O, T]);
  const z = O.filter(e => e.asker === "user" && !e.charAnswer).length;
  const B = s.useRef(v);
  e.useEffect(() => {
    if (O.length === 0) {
      const e = j();
      if (e) {
        const t = {
          id: Date.now().toString(),
          date: new Date().toISOString(),
          question: e.question,
          asker: e.asker,
          userAnswer: "",
          charAnswer: e.charAnswer
        };
        o({
          ...i,
          qa: [t]
        });
      }
    }
  }, [O.length]);
  e.useEffect(() => {
    const e = B.current;
    B.current = v;
    if (e && !v && !(i.qa || []).some(e => !e.userAnswer)) {
      const e = j();
      if (e) {
        const t = {
          id: Date.now().toString(),
          date: new Date().toISOString(),
          question: e.question,
          asker: e.asker,
          userAnswer: "",
          charAnswer: e.charAnswer
        };
        R(true);
        setTimeout(() => R(false), 500);
        o({
          ...i,
          qa: [t, ...(i.qa || [])]
        });
      }
    }
  }, [v]);
  const q = e.useCallback(async e => {
    if (!c) {
      return null;
    }
    const t = c.name || p("couplesQaDefaultPartner");
    const s = c.role || "";
    const a = c.description || c.personality || "";
    let n = "";
    if (x && c.id) {
      try {
        const e = await l.get(x, String(c.id));
        const t = (e == null ? undefined : e.userFacts) || [];
        const s = (e == null ? undefined : e.summaryHistory) || [];
        const a = D({
          userFacts: t,
          summaryHistory: s,
          currentUserName: "the user"
        });
        n = (a.longTermMemory + a.mediumTermMemory).trim();
        if (!n && (e == null ? undefined : e.episodeSummary)) {
          n = `[Recent interactions]\n${e.episodeSummary.length > 500 ? e.episodeSummary.slice(0, 500) + "..." : e.episodeSummary}`;
        }
      } catch (v) {}
    }
    let i = "";
    if (x && c.id) {
      try {
        const e = await r.get(x, String(c.id));
        i = (e == null ? undefined : e.relationship) || "";
      } catch (v) {}
    }
    const o = {
      zh: "繁體中文",
      zh_cn: "简体中文",
      en: "English",
      ja: "日本語"
    };
    const u = o[g] || o.zh_cn;
    const h = `[Character Profile]\nYou are ${t}${s ? ` | ${s}` : ""}\n${a}${i ? `\nYour relationship with the user: ${i}` : ""}\n${n ? `\n${n}` : ""}\n\nThe user asked a question in the Time Mailbox: "${e.question}"\nThe user's own answer: "${e.userAnswer}"\n\nReply as ${t} in your own voice and speech patterns from the character profile. Reference shared memories if relevant. Under 50 characters, natural and conversational. Output in ${u}. Output ONLY the reply, no other text.`;
    const m = await d({
      messages: [{
        role: "system",
        content: `You are ${t}. Stay fully in character — your tone, word choices, and attitude must match your personality. Respond in ${u}.`
      }, {
        role: "user",
        content: h
      }],
      preferStreaming: false
    });
    return (m == null ? undefined : m.trim()) || null;
  }, [c, x, g, p]);
  e.useEffect(() => {
    if (!O || O.length === 0) {
      return;
    }
    const e = O.filter(e => !e.charAnswer && e.asker === "user" && e.userAnswer);
    if (e.length === 0) {
      return;
    }
    let t = false;
    (async () => {
      for (const a of e) {
        if (t) {
          return;
        }
        $(a.id);
        await new Promise(e => setTimeout(e, 2000 + Math.random() * 1500));
        if (t) {
          return;
        }
        let e;
        try {
          e = await q(a);
        } catch (s) {
          if (t) {
            return;
          }
          $(null);
          window.alert(p("couplesQaCharReplyFailed").replace("{msg}", (s == null ? undefined : s.message) || "unknown error"));
          return;
        }
        if (t) {
          return;
        }
        if (!e) {
          $(null);
          window.alert(p("couplesQaCharReplyFailed").replace("{msg}", "empty response"));
          return;
        }
        const n = {
          ...i
        };
        if (!n.qa) {
          return;
        }
        const l = n.qa.findIndex(e => e.id === a.id);
        if (l !== -1 && !n.qa[l].charAnswer) {
          F("fly-out-to-hands");
          R(true);
          setTimeout(() => R(false), 500);
          n.qa[l] = {
            ...n.qa[l],
            charAnswer: e
          };
          await new Promise(e => setTimeout(e, 2000));
          if (t) {
            return;
          }
          o(n);
          F(null);
          $(null);
        }
      }
    })();
    return () => {
      t = true;
    };
  }, [O, i, o, q]);
  const Q = (e, {
    playFlyOut: t = false
  } = {}) => {
    F("fly-in");
    w(false);
    k(null);
    setTimeout(() => {
      R(true);
      setTimeout(() => R(false), 500);
      setTimeout(() => {
        if (t) {
          F("fly-out-to-hands");
          R(true);
          setTimeout(() => R(false), 500);
          setTimeout(() => {
            F(null);
            I("all");
            e();
          }, 2000);
        } else {
          F(null);
          I("all");
          e();
        }
      }, 300);
    }, 1500);
  };
  const Y = e => {
    const t = new Date(e);
    return `${String(t.getFullYear()).slice(2)}.${String(t.getMonth() + 1).padStart(2, "0")}.${String(t.getDate()).padStart(2, "0")}`;
  };
  const G = O.some(e => !e.userAnswer);
  const K = e.useCallback(() => {
    const e = j();
    if (!e) {
      return;
    }
    const t = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      question: e.question,
      asker: e.asker,
      userAnswer: "",
      charAnswer: e.charAnswer
    };
    R(true);
    setTimeout(() => R(false), 500);
    o({
      ...i,
      qa: [t, ...O]
    });
  }, [j, i, O, o]);
  const V = e.useCallback(e => {
    if (!(c == null ? undefined : c.id)) {
      return;
    }
    if (!x) {
      return;
    }
    if (!e.userAnswer || !e.charAnswer) {
      return;
    }
    const t = {
      targetCharId: String(c.id),
      targetUserId: x,
      qaId: e.id,
      question: e.question,
      userAnswer: e.userAnswer,
      charAnswer: e.charAnswer,
      asker: e.asker || "npc",
      date: e.date
    };
    try {
      localStorage.setItem("pending_qa_share", JSON.stringify(t));
    } catch (s) {}
    window.dispatchEvent(new CustomEvent("pending-qa-share-written"));
    window.dispatchEvent(new CustomEvent("open-chat-request", {
      detail: {
        charId: c.id,
        userId: x
      }
    }));
    if (typeof a == "function") {
      a();
    }
  }, [c, a, x]);
  const [J, X] = e.useState(null);
  const [ee, se] = e.useState(null);
  const [ae, ne] = e.useState(false);
  const ie = e => {
    const t = setTimeout(() => {
      se(e);
    }, 800);
    X(t);
  };
  const le = () => {
    if (J) {
      clearTimeout(J);
      X(null);
    }
  };
  return t.jsxs("div", {
    className: "qa-wrapper",
    children: [t.jsxs("div", {
      className: "qa-scroll-container",
      children: [t.jsxs("div", {
        className: "qa-header",
        children: [t.jsx("button", {
          className: "qa-btn-icon",
          onClick: a,
          children: t.jsx(_, {
            size: 24,
            strokeWidth: 1.5
          })
        }), t.jsxs("div", {
          className: "qa-title-container",
          children: [t.jsx("span", {
            className: "qa-title-zh",
            children: p("couplesQaTitle")
          }), t.jsx("span", {
            className: "qa-title-en",
            children: "TIME MAILBOX"
          })]
        }), t.jsx("button", {
          className: "qa-btn-icon",
          onClick: () => {
            if ((i.qa || []).length) {
              ne(true);
            }
          },
          title: p("couplesQaDeleteAllBtn"),
          style: {
            opacity: (i.qa || []).length ? 1 : 0.3
          },
          children: t.jsx(te, {
            size: 22,
            strokeWidth: 1.5
          })
        })]
      }), t.jsxs("div", {
        className: "qa-scene-container",
        children: [t.jsxs("div", {
          className: "qa-mailbox " + (L ? "jiggle" : ""),
          onClick: () => {
            if (G) {
              const e = O.find(e => !e.userAnswer);
              if (e) {
                k(e.id);
                A("");
                S("");
              }
            } else {
              K();
            }
          },
          children: [t.jsx(ws, {
            className: "qa-mailbox-svg"
          }), G && t.jsx("div", {
            className: "qa-mailbox-sticking-letter",
            children: t.jsx(qe, {
              size: 16
            })
          })]
        }), z > 0 && t.jsxs("div", {
          style: {
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(211, 47, 47, 0.1)",
            padding: "4px 12px",
            borderRadius: 20,
            fontSize: 10,
            color: "#D32F2F",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: 4
          },
          children: [t.jsx(qe, {
            size: 12
          }), " ", p("couplesQaInTransit").replace("{n}", z)]
        }), v && t.jsxs("div", {
          className: "qa-bank-generating-banner",
          children: [t.jsx(He, {
            size: 14,
            className: "qa-spin"
          }), t.jsx("span", {
            children: p("couplesQaBankGenerating")
          })]
        })]
      }), t.jsxs("div", {
        className: "qa-content-bottom",
        children: [t.jsxs("div", {
          className: "qa-filter-scroll",
          children: [t.jsx("div", {
            className: "qa-filter-pill " + (T === "all" ? "active" : ""),
            onClick: () => I("all"),
            children: p("couplesQaFilterAll")
          }), t.jsx("div", {
            className: "qa-filter-pill " + (T === "pending" ? "active" : ""),
            onClick: () => I("pending"),
            children: p("couplesQaFilterPending")
          }), t.jsx("div", {
            className: "qa-filter-pill " + (T === "mine" ? "active" : ""),
            onClick: () => I("mine"),
            children: p("couplesQaFilterMine")
          }), t.jsx("div", {
            className: "qa-filter-pill " + (T === "char" ? "active" : ""),
            onClick: () => I("char"),
            children: p("couplesQaPartnerMail").replace("{name}", (c == null ? undefined : c.name) || "")
          }), t.jsx("div", {
            className: "qa-filter-pill " + (T === "npc" ? "active" : ""),
            onClick: () => I("npc"),
            children: p("couplesQaFilterNpc")
          })]
        }), t.jsx("div", {
          className: "qa-list",
          children: W.length === 0 ? t.jsx("div", {
            style: {
              textAlign: "center",
              padding: "40px 0",
              color: "#A69B90",
              fontSize: 14
            },
            children: p("couplesQaEmpty")
          }) : W.map((e, s) => {
            const a = (e => e.asker === "user" ? {
              name: p("couplesQaMyMail"),
              avatar: (u == null ? undefined : u.avatar) || ""
            } : e.asker === "char" ? {
              name: p("couplesQaPartnerMail").replace("{name}", (c == null ? undefined : c.name) || ""),
              avatar: (c == null ? undefined : c.image) || (c == null ? undefined : c.avatar)
            } : {
              name: p("couplesQaPostman"),
              avatar: "data:image/svg+xml;utf8," + encodeURIComponent("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\"><rect width=\"64\" height=\"64\" rx=\"32\" fill=\"#E8DFD8\"/><text x=\"32\" y=\"44\" font-size=\"36\" text-anchor=\"middle\">📮</text></svg>")
            })(e);
            const n = !!e.userAnswer;
            const i = !!e.charAnswer;
            return t.jsxs("div", {
              className: "qa-postcard",
              style: {
                animationDelay: s * 0.05 + "s"
              },
              onTouchStart: () => ie(e.id),
              onTouchEnd: le,
              onTouchMove: le,
              onMouseDown: () => ie(e.id),
              onMouseUp: le,
              onMouseLeave: le,
              children: [t.jsx("div", {
                className: "qa-stamp",
                children: t.jsx("div", {
                  className: "qa-stamp-inner",
                  children: t.jsx(Z, {
                    size: 16,
                    strokeWidth: 2
                  })
                })
              }), t.jsx("div", {
                className: "qa-postmark",
                children: t.jsx("span", {
                  className: "qa-postmark-date",
                  children: Y(e.date)
                })
              }), t.jsxs("div", {
                className: "qa-postcard-asker",
                children: [t.jsx("img", {
                  decoding: "async",
                  src: a.avatar || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23E8DFD8'/%3E%3Ctext x='50' y='65' font-size='50' text-anchor='middle' fill='%23999'%3E👤%3C/text%3E%3C/svg%3E",
                  alt: "",
                  className: "qa-pc-avatar"
                }), t.jsx("span", {
                  className: "qa-pc-name",
                  children: a.name
                })]
              }), t.jsx("div", {
                className: "qa-pc-question",
                children: e.question
              }), t.jsx("div", {
                className: "qa-fold-line"
              }), t.jsx("div", {
                className: "qa-answers-section",
                children: n ? t.jsxs(t.Fragment, {
                  children: [t.jsxs("div", {
                    className: "qa-ans-item mine",
                    children: [t.jsx("span", {
                      className: "qa-ans-label",
                      children: p("couplesQaMyReply")
                    }), t.jsx("div", {
                      className: "qa-ans-text",
                      children: e.userAnswer
                    })]
                  }), t.jsxs("div", {
                    className: "qa-ans-item partner",
                    children: [t.jsx("span", {
                      className: "qa-ans-label",
                      children: p("couplesQaPartnerReply").replace("{name}", (c == null ? undefined : c.name) || "")
                    }), i ? t.jsx("div", {
                      className: "qa-ans-text",
                      children: e.charAnswer
                    }) : E === e.id ? t.jsxs("div", {
                      className: "qa-ans-text",
                      style: {
                        opacity: 0.6,
                        fontStyle: "italic",
                        display: "flex",
                        alignItems: "center",
                        gap: 4
                      },
                      children: [t.jsx(He, {
                        size: 12,
                        className: "qa-spin"
                      }), " ", p("couplesQaCharWriting").replace("{name}", (c == null ? undefined : c.name) || "")]
                    }) : t.jsx("div", {
                      className: "qa-ans-text",
                      style: {
                        opacity: 0.5,
                        fontStyle: "italic"
                      },
                      children: p("couplesQaWaitReply")
                    })]
                  }), i && (c == null ? undefined : c.id) && t.jsxs("button", {
                    className: "qa-share-btn",
                    onClick: t => {
                      t.stopPropagation();
                      V(e);
                    },
                    children: [t.jsx(Qe, {
                      size: 13,
                      strokeWidth: 2.2
                    }), t.jsx("span", {
                      children: p("couplesQaShareToChat")
                    })]
                  })]
                }) : t.jsx("div", {
                  className: "qa-ans-item partner",
                  style: {
                    alignItems: "center",
                    background: "transparent",
                    border: "1px solid #E53935",
                    cursor: "pointer"
                  },
                  onClick: () => {
                    k(e.id);
                    A("");
                    S("");
                  },
                  children: i ? t.jsxs("span", {
                    style: {
                      color: "#E53935",
                      fontSize: 13,
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: 6
                    },
                    children: [t.jsx(Ye, {
                      size: 14
                    }), " ", p("couplesQaLockedReply")]
                  }) : t.jsxs("span", {
                    style: {
                      color: "#E53935",
                      fontSize: 13,
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: 6
                    },
                    children: [t.jsx(Oe, {
                      size: 14
                    }), " ", p("couplesQaWriteReply")]
                  })
                })
              })]
            }, e.id);
          })
        })]
      })]
    }), t.jsx("button", {
      className: "qa-fab",
      onClick: () => {
        w(true);
        S("");
        A("");
      },
      children: t.jsx(U, {
        size: 26,
        strokeWidth: 2.5
      })
    }), (b || N) && !P && t.jsx("div", {
      className: "qa-sheet-overlay",
      onClick: () => {
        w(false);
        k(null);
      },
      children: t.jsxs("div", {
        className: "qa-interactive-card",
        onClick: e => e.stopPropagation(),
        children: [t.jsxs("div", {
          className: "qa-sheet-header",
          children: [t.jsx("span", {
            children: p(b ? "couplesQaNewPostcard" : "couplesQaWriteAnswer")
          }), t.jsx("button", {
            className: "qa-btn-icon",
            style: {
              width: 28,
              height: 28,
              background: "#F9F6F0"
            },
            onClick: () => {
              w(false);
              k(null);
            },
            children: t.jsx(H, {
              size: 16,
              strokeWidth: 2
            })
          })]
        }), t.jsx("div", {
          className: "qa-sheet-body",
          children: N ? t.jsxs(t.Fragment, {
            children: [t.jsxs("div", {
              className: "qa-sheet-reference",
              children: [t.jsx("span", {
                style: {
                  fontSize: 11,
                  color: "#A69B90"
                },
                children: p("couplesQaReplying")
              }), (m = O.find(e => e.id === N)) == null ? undefined : m.question]
            }), t.jsx("textarea", {
              autoFocus: true,
              className: "qa-sheet-input-half",
              placeholder: p("couplesQaAnswerPh"),
              value: M,
              onChange: e => A(e.target.value)
            })]
          }) : t.jsxs(t.Fragment, {
            children: [t.jsx("textarea", {
              autoFocus: true,
              className: "qa-sheet-input-half",
              placeholder: p("couplesQaQuestionPh"),
              value: C,
              onChange: e => S(e.target.value)
            }), t.jsx("textarea", {
              className: "qa-sheet-input-half",
              placeholder: p("couplesQaOwnAnswerPh"),
              value: M,
              onChange: e => A(e.target.value)
            })]
          })
        }), t.jsx("div", {
          className: "qa-sheet-footer",
          children: t.jsxs("button", {
            className: "qa-btn-submit",
            disabled: b && !C.trim() || !M.trim(),
            onClick: b ? () => {
              if (!C.trim() || !M.trim()) {
                return;
              }
              const e = {
                id: Date.now().toString(),
                date: new Date().toISOString(),
                question: C.trim(),
                asker: "user",
                userAnswer: M.trim(),
                charAnswer: ""
              };
              Q(() => {
                o({
                  ...i,
                  qa: [e, ...O]
                });
                S("");
                A("");
              });
            } : () => {
              if (!M.trim() || !N) {
                return;
              }
              const e = O.find(e => e.id === N);
              const t = e && !!e.charAnswer;
              const s = O.map(e => e.id === N ? {
                ...e,
                userAnswer: M.trim()
              } : e);
              Q(() => {
                o({
                  ...i,
                  qa: s
                });
                A("");
                S("");
              }, {
                playFlyOut: t
              });
            },
            children: [t.jsx(Ge, {
              size: 16
            }), " ", p(b ? "couplesQaSubmitNew" : "couplesQaSubmitReply")]
          })
        })]
      })
    }), P === "fly-in" && t.jsx("div", {
      className: "qa-flying-letter anim-in"
    }), P === "fly-out-to-hands" && t.jsx("div", {
      className: "qa-flying-letter anim-out-to-hands",
      children: t.jsxs("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6
        },
        children: [t.jsx(Z, {
          size: 20,
          fill: "#E53935",
          stroke: "none"
        }), t.jsx("span", {
          style: {
            fontSize: 10,
            fontWeight: "bold"
          },
          children: p("couplesQaReceivedReply")
        })]
      })
    }), ee && t.jsx("div", {
      className: "qa-sheet-overlay",
      onClick: () => se(null),
      children: t.jsxs("div", {
        className: "qa-interactive-card",
        onClick: e => e.stopPropagation(),
        style: {
          padding: "32px 24px",
          textAlign: "center"
        },
        children: [t.jsx("div", {
          style: {
            fontSize: 18,
            fontWeight: "600",
            color: "#D32F2F",
            marginBottom: 16
          },
          children: p("couplesQaDeleteTitle")
        }), t.jsx("div", {
          style: {
            fontSize: 14,
            color: "#A69B90",
            marginBottom: 28,
            lineHeight: 1.6
          },
          children: p("couplesQaDeleteConfirm")
        }), t.jsxs("div", {
          style: {
            display: "flex",
            gap: 12
          },
          children: [t.jsx("button", {
            onClick: () => se(null),
            style: {
              flex: 1,
              padding: "14px",
              background: "#F7F4EF",
              color: "#8C8075",
              borderRadius: 8,
              fontWeight: "600",
              border: "none",
              cursor: "pointer"
            },
            children: p("couplesQaDeleteCancel")
          }), t.jsx("button", {
            onClick: () => {
              const e = (i.qa || []).filter(e => e.id !== ee);
              o({
                ...i,
                qa: e
              });
              se(null);
            },
            style: {
              flex: 1,
              padding: "14px",
              background: "#E53935",
              color: "#FFF",
              borderRadius: 8,
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(229,57,53,0.3)"
            },
            children: p("couplesQaDeleteBtn")
          })]
        })]
      })
    }), ae && t.jsx("div", {
      className: "qa-sheet-overlay",
      onClick: () => ne(false),
      children: t.jsxs("div", {
        className: "qa-interactive-card",
        onClick: e => e.stopPropagation(),
        style: {
          padding: "32px 24px",
          textAlign: "center"
        },
        children: [t.jsx("div", {
          style: {
            fontSize: 18,
            fontWeight: "600",
            color: "#D32F2F",
            marginBottom: 16
          },
          children: p("couplesQaDeleteAllTitle")
        }), t.jsx("div", {
          style: {
            fontSize: 14,
            color: "#A69B90",
            marginBottom: 28,
            lineHeight: 1.6
          },
          children: p("couplesQaDeleteAllConfirm").replace("{n}", (i.qa || []).length)
        }), t.jsxs("div", {
          style: {
            display: "flex",
            gap: 12
          },
          children: [t.jsx("button", {
            onClick: () => ne(false),
            style: {
              flex: 1,
              padding: "14px",
              background: "#F7F4EF",
              color: "#8C8075",
              borderRadius: 8,
              fontWeight: "600",
              border: "none",
              cursor: "pointer"
            },
            children: p("couplesQaDeleteCancel")
          }), t.jsx("button", {
            onClick: () => {
              o({
                ...i,
                qa: []
              });
              ne(false);
            },
            style: {
              flex: 1,
              padding: "14px",
              background: "#E53935",
              color: "#FFF",
              borderRadius: 8,
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(229,57,53,0.3)"
            },
            children: p("couplesQaDeleteAllBtn")
          })]
        })]
      })
    })]
  });
};
const ks = 600;
const Cs = e => Number.isFinite(Number(e)) ? Number(e) : 0;
const Ss = e => Array.isArray(e) ? e.length : 0;
const Ms = (e = {}) => ({
  touchCount: Cs(e.touchCount),
  whispersCount: Ss(e.whispers),
  qaCount: Ss(e.qa),
  logsCount: Ss(e.logs),
  giftsCount: Ss(e.gifts),
  anniversariesCount: Ss(e.anniversaries),
  pomodoroCount: Cs(e.pomodoroCount || e.pomodoroSessionsCompleted || e.pomodoroCompleted),
  pomodoroFocusMinutes: Cs(e.pomodoroFocusMinutes),
  whiteDogCount: Cs(e.whiteDogCount || e.whiteDogTasksCompleted || e.whiteDogCompleted),
  whiteDogTaskScore: Cs(e.whiteDogTaskScore),
  goingOutCount: Cs(e.goingOutCount || e.goingOutSessions || e.outingCount),
  onlineChatCount: Cs(e.onlineChatCount),
  offlineChatCount: Cs(e.offlineChatCount)
});
const Ds = (e, t) => {
  if (t == null) {
    return 0;
  }
  const s = Cs(e);
  const a = Cs(t);
  return Math.max(0, s - a);
};
const As = e => Array.isArray(e) ? e.filter(e => e && typeof e == "object") : [];
const Ts = (e = "") => {
  let t = 0;
  for (let s = 0; s < e.length; s++) {
    t = t * 31 + e.charCodeAt(s) >>> 0;
  }
  return t % 1000 / 1000;
};
const Is = [{
  nameKey: "couplesPlantFlower0",
  descKey: "couplesPlantFlower0Desc"
}, {
  nameKey: "couplesPlantFlower1",
  descKey: "couplesPlantFlower1Desc"
}, {
  nameKey: "couplesPlantFlower2",
  descKey: "couplesPlantFlower2Desc"
}, {
  nameKey: "couplesPlantFlower3",
  descKey: "couplesPlantFlower3Desc"
}, {
  nameKey: "琴叶榕",
  descKey: "有着宽大挺拔的绿叶，充满了鲜活的张力与包容感。"
}, {
  nameKey: "仙人球",
  descKey: "外表带刺但内里柔软，生命力极为顽强。"
}, {
  nameKey: "多肉植物",
  descKey: "胖嘟嘟的可爱叶片层层叠叠，是非常治愈的存在。"
}, {
  nameKey: "虎尾兰",
  descKey: "挺拔的叶片带有斑驳的纹理，有着坚毅的生命力。"
}, {
  nameKey: "富贵竹",
  descKey: "节节升高的竹节，象征着好运和长久的陪伴。"
}, {
  nameKey: "绿萝",
  descKey: "垂落的藤蔓与心形绿叶，给人宁静的治愈感。"
}, {
  nameKey: "微缩松柏",
  descKey: "苍翠的枝叶被精心修剪在一盆内，散发着岁月沉静的美。"
}];
const Es = ({
  level: e,
  isWatering: s,
  cycle: a,
  variantType: n,
  inPokedex: i = false,
  isDead: l = false,
  specialEmoji: r = null
}) => {
  const o = Number.isFinite(Number(n)) ? Number(n) : (a || 0) % 4;
  if (r && e >= 4 && !l) {
    return t.jsxs("div", {
      className: `plant-svg-wrap ${s ? "growing" : ""} ${i ? "pokedex-mode" : "scene-mode"}`,
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      },
      children: [t.jsx("div", {
        style: {
          fontSize: i ? "52px" : "72px",
          lineHeight: 1,
          filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.18))",
          marginBottom: i ? -4 : -8
        },
        children: r
      }), t.jsxs("svg", {
        width: i ? "48" : "80",
        height: i ? "28" : "44",
        viewBox: "0 0 80 44",
        fill: "none",
        children: [t.jsx("path", {
          d: "M10 40 L18 8 L62 8 L70 40 Z",
          fill: "#E6DDD4"
        }), t.jsx("path", {
          d: "M14 8 L66 8 L70 14 L10 14 Z",
          fill: "#D6C7B8"
        }), t.jsx("path", {
          d: "M14 8 L66 8 C62 12 18 12 14 8 Z",
          fill: "#8C8075",
          opacity: "0.6"
        })]
      })]
    });
  } else if (l) {
    return t.jsx("div", {
      className: "plant-svg-wrap " + (i ? "pokedex-mode" : "scene-mode"),
      children: t.jsxs("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 200 240",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [t.jsx("path", {
          d: "M60 220 L70 160 L130 160 L140 220 Z",
          fill: "#E6DDD4"
        }), t.jsx("path", {
          d: "M65 160 L135 160 L140 170 L60 170 Z",
          fill: "#D6C7B8"
        }), t.jsx("path", {
          d: "M65 160 L135 160 C130 165, 70 165, 65 160 Z",
          fill: "#8C8075",
          opacity: "0.6"
        }), t.jsx("path", {
          d: "M100 160 Q110 120 130 100",
          stroke: "#8C7A6B",
          strokeWidth: "6",
          strokeLinecap: "round",
          fill: "none"
        }), t.jsx("path", {
          d: "M100 160 Q90 130 70 110",
          stroke: "#8C7A6B",
          strokeWidth: "4",
          strokeLinecap: "round",
          fill: "none"
        }), t.jsx("path", {
          d: "M140 150 Q 150 140 160 150 Q 150 160 140 150 Z",
          fill: "#A69B90"
        })]
      })
    });
  } else {
    return t.jsx("div", {
      className: `plant-svg-wrap ${s ? "growing" : ""} ${i ? "pokedex-mode" : "scene-mode"}`,
      children: t.jsxs("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 200 240",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [t.jsx("path", {
          d: "M60 220 L70 160 L130 160 L140 220 Z",
          fill: "#E6DDD4"
        }), t.jsx("path", {
          d: "M65 160 L135 160 L140 170 L60 170 Z",
          fill: "#D6C7B8"
        }), t.jsx("path", {
          d: "M65 160 L135 160 C130 165, 70 165, 65 160 Z",
          fill: "#8C8075",
          opacity: "0.6"
        }), e >= 2 && o < 4 && t.jsx("path", {
          d: "M100 160 Q100 120 100 90",
          stroke: "#88A78C",
          strokeWidth: "8",
          strokeLinecap: "round",
          className: "plant-stem"
        }), e === 2 && o < 4 && t.jsxs(t.Fragment, {
          children: [t.jsx("path", {
            d: "M100 120 Q80 100 70 110 Q90 130 100 120 Z",
            fill: "#A3BCA6"
          }), t.jsx("path", {
            d: "M100 110 Q120 90 130 100 Q110 120 100 110 Z",
            fill: "#88A78C"
          })]
        }), e >= 3 && o < 4 && t.jsxs(t.Fragment, {
          children: [t.jsx("path", {
            d: "M100 140 Q70 120 50 130 Q80 160 100 140 Z",
            fill: "#A3BCA6"
          }), t.jsx("path", {
            d: "M100 130 Q130 110 150 120 Q120 150 100 130 Z",
            fill: "#7A9B76"
          }), t.jsx("path", {
            d: "M100 110 Q70 80 60 90 Q80 120 100 110 Z",
            fill: "#88A78C"
          }), t.jsx("path", {
            d: "M100 90 Q130 60 140 70 Q120 100 100 90 Z",
            fill: "#6A8A66"
          })]
        }), e === 2 && o === 4 && t.jsx("ellipse", {
          cx: "100",
          cy: "155",
          rx: "6",
          ry: "10",
          fill: "#4CAF50"
        }), e === 3 && o === 4 && t.jsxs(t.Fragment, {
          children: [t.jsx("path", {
            d: "M100 160 Q95 130 100 120",
            stroke: "#5D4037",
            strokeWidth: "4",
            fill: "none",
            strokeLinecap: "round"
          }), t.jsx("ellipse", {
            cx: "106",
            cy: "130",
            rx: "8",
            ry: "16",
            fill: "#4CAF50",
            transform: "rotate(30, 106, 130)"
          }), t.jsx("ellipse", {
            cx: "94",
            cy: "140",
            rx: "6",
            ry: "12",
            fill: "#388E3C",
            transform: "rotate(-20, 94, 140)"
          })]
        }), e === 2 && o === 5 && t.jsx("ellipse", {
          cx: "100",
          cy: "150",
          rx: "10",
          ry: "12",
          fill: "#4CAF50"
        }), e === 3 && o === 5 && t.jsxs(t.Fragment, {
          children: [t.jsx("ellipse", {
            cx: "100",
            cy: "142",
            rx: "16",
            ry: "20",
            fill: "#4CAF50"
          }), t.jsx("ellipse", {
            cx: "100",
            cy: "142",
            rx: "8",
            ry: "20",
            fill: "#388E3C"
          })]
        }), e === 2 && o === 6 && t.jsx("path", {
          d: "M100 160 C90 150, 95 145, 100 140 C105 145, 110 150, 100 160 Z",
          fill: "#A5D6A7"
        }), e === 3 && o === 6 && t.jsxs("g", {
          transform: "translate(100, 155) scale(0.6)",
          children: [t.jsx("path", {
            d: "M0 0 C-40 0, -40 -20, 0 -30 C40 -20, 40 0, 0 0 Z",
            fill: "#81C784"
          }), t.jsx("path", {
            d: "M0 0 C-20 0, -30 -10, -15 -20 C-5 -15, 0 -5, 0 0 Z",
            fill: "#43A047"
          }), t.jsx("path", {
            d: "M0 0 C20 0, 30 -10, 15 -20 C5 -15, 0 -5, 0 0 Z",
            fill: "#43A047"
          }), t.jsx("circle", {
            cx: "-15",
            cy: "-20",
            r: "2",
            fill: "#EF9A9A"
          }), t.jsx("circle", {
            cx: "15",
            cy: "-20",
            r: "2",
            fill: "#EF9A9A"
          })]
        }), e === 2 && o >= 7 && t.jsx("ellipse", {
          cx: "100",
          cy: "155",
          rx: "8",
          ry: "12",
          fill: "#81C784"
        }), e === 3 && o >= 7 && t.jsxs("g", {
          transform: "translate(100, 160)",
          children: [t.jsx("path", {
            d: "M0 0 Q-5 -15 -10 -25 Q10 -25 0 0 Z",
            fill: "#4CAF50"
          }), t.jsx("path", {
            d: "M0 0 Q5 -15 10 -25 Q-10 -25 0 0 Z",
            fill: "#388E3C"
          }), t.jsx("path", {
            d: "M0 0 Q-15 -10 -25 -15 Q-5 -30 0 0 Z",
            fill: "#66BB6A"
          }), t.jsx("path", {
            d: "M0 0 Q15 -10 25 -15 Q5 -30 0 0 Z",
            fill: "#2E7D32"
          })]
        }), e >= 4 && (o === 0 ? t.jsxs("g", {
          transform: "translate(100, 60)",
          children: [t.jsx("circle", {
            cx: "0",
            cy: "-20",
            r: "14",
            fill: "#FFE082"
          }), t.jsx("circle", {
            cx: "0",
            cy: "20",
            r: "14",
            fill: "#FFE082"
          }), t.jsx("circle", {
            cx: "-20",
            cy: "0",
            r: "14",
            fill: "#FFE082"
          }), t.jsx("circle", {
            cx: "20",
            cy: "0",
            r: "14",
            fill: "#FFE082"
          }), t.jsx("circle", {
            cx: "-14",
            cy: "-14",
            r: "14",
            fill: "#FFF59D"
          }), t.jsx("circle", {
            cx: "14",
            cy: "-14",
            r: "14",
            fill: "#FFF59D"
          }), t.jsx("circle", {
            cx: "-14",
            cy: "14",
            r: "14",
            fill: "#FFF59D"
          }), t.jsx("circle", {
            cx: "14",
            cy: "14",
            r: "14",
            fill: "#FFF59D"
          }), t.jsx("circle", {
            cx: "0",
            cy: "0",
            r: "16",
            fill: "#FFA000"
          })]
        }) : o === 1 ? t.jsxs("g", {
          transform: "translate(100, 60)",
          children: [t.jsx("path", {
            d: "M-15 -10 Q0 -30 15 -10 Q25 15 0 25 Q-25 15 -10 0 Z",
            fill: "#E53935"
          }), t.jsx("path", {
            d: "M-10 -5 Q0 -20 10 -5 Q15 10 0 15 Q-15 10 -10 -5 Z",
            fill: "#C62828"
          }), t.jsx("path", {
            d: "M-5 0 Q0 -10 5 0 Q5 5 0 8 Q-5 5 -5 0 Z",
            fill: "#B71C1C"
          })]
        }) : o === 2 ? t.jsxs("g", {
          transform: "translate(100, 60)",
          children: [t.jsx("circle", {
            cx: "0",
            cy: "-15",
            r: "15",
            fill: "#90CAF9"
          }), t.jsx("circle", {
            cx: "-15",
            cy: "5",
            r: "15",
            fill: "#64B5F6"
          }), t.jsx("circle", {
            cx: "15",
            cy: "5",
            r: "15",
            fill: "#42A5F5"
          }), t.jsx("circle", {
            cx: "0",
            cy: "15",
            r: "15",
            fill: "#2196F3"
          }), t.jsx("circle", {
            cx: "-8",
            cy: "-5",
            r: "10",
            fill: "#BBDEFB"
          }), t.jsx("circle", {
            cx: "8",
            cy: "-5",
            r: "10",
            fill: "#BBDEFB"
          }), t.jsx("circle", {
            cx: "0",
            cy: "5",
            r: "10",
            fill: "#E3F2FD"
          })]
        }) : o === 3 ? t.jsxs("g", {
          transform: "translate(100, 60)",
          children: [t.jsx("path", {
            d: "M-15 15 C-15 -15, -10 -20, 0 -25 C10 -20, 15 -15, 15 15 Z",
            fill: "#F48FB1"
          }), t.jsx("path", {
            d: "M-10 15 C-10 -5, -5 -10, 0 -15 C5 -10, 10 -5, 10 15 Z",
            fill: "#F06292"
          }), t.jsx("path", {
            d: "M-5 15 V0 L0 -5 L5 0 V15 Z",
            fill: "#D81B60"
          })]
        }) : o === 4 ? t.jsxs("g", {
          transform: "translate(100, 160)",
          children: [t.jsx("path", {
            d: "M0 0 Q-5 -30 0 -90",
            stroke: "#5D4037",
            strokeWidth: "5",
            fill: "none",
            strokeLinecap: "round"
          }), t.jsx("path", {
            d: "M0 -20 Q20 -30 35 -40",
            stroke: "#388E3C",
            strokeWidth: "3",
            fill: "none"
          }), t.jsx("path", {
            d: "M0 -40 Q-20 -40 -30 -55",
            stroke: "#388E3C",
            strokeWidth: "3",
            fill: "none"
          }), t.jsx("path", {
            d: "M0 -60 Q20 -70 25 -85",
            stroke: "#388E3C",
            strokeWidth: "3",
            fill: "none"
          }), t.jsx("ellipse", {
            cx: "35",
            cy: "-40",
            rx: "15",
            ry: "25",
            fill: "#4CAF50",
            transform: "rotate(30, 35, -40)"
          }), t.jsx("ellipse", {
            cx: "-30",
            cy: "-55",
            rx: "16",
            ry: "26",
            fill: "#388E3C",
            transform: "rotate(-40, -30, -55)"
          }), t.jsx("ellipse", {
            cx: "25",
            cy: "-85",
            rx: "18",
            ry: "28",
            fill: "#2E7D32",
            transform: "rotate(20, 25, -85)"
          }), t.jsx("ellipse", {
            cx: "0",
            cy: "-95",
            rx: "20",
            ry: "30",
            fill: "#1B5E20",
            transform: "rotate(-10, 0, -95)"
          }), t.jsx("ellipse", {
            cx: "-15",
            cy: "-75",
            rx: "14",
            ry: "20",
            fill: "#43A047",
            transform: "rotate(-20, -15, -75)"
          })]
        }) : o === 5 ? t.jsxs("g", {
          transform: "translate(100, 160)",
          children: [t.jsx("ellipse", {
            cx: "0",
            cy: "-35",
            rx: "30",
            ry: "40",
            fill: "#4CAF50"
          }), t.jsx("ellipse", {
            cx: "0",
            cy: "-35",
            rx: "15",
            ry: "40",
            fill: "#388E3C"
          }), t.jsx("ellipse", {
            cx: "-20",
            cy: "-20",
            rx: "15",
            ry: "25",
            fill: "#66BB6A",
            transform: "rotate(-30, -20, -20)"
          }), t.jsx("ellipse", {
            cx: "25",
            cy: "-30",
            rx: "12",
            ry: "20",
            fill: "#43A047",
            transform: "rotate(20, 25, -30)"
          }), t.jsx("path", {
            d: "M-25 -50 L-30 -55 M25 -60 L30 -65 M0 -75 L0 -82 M-15 -65 L-20 -72 M15 -70 L20 -77",
            stroke: "#FFF",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }), t.jsx("path", {
            d: "M-35 -20 L-42 -22 M35 -30 L42 -32",
            stroke: "#FFF",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }), t.jsx("circle", {
            cx: "-20",
            cy: "-45",
            r: "6",
            fill: "#F48FB1"
          }), t.jsx("circle", {
            cx: "0",
            cy: "-75",
            r: "7",
            fill: "#F06292"
          })]
        }) : o === 6 ? t.jsxs("g", {
          transform: "translate(100, 155)",
          children: [t.jsx("path", {
            d: "M0 0 C-40 0, -50 -15, -30 -25 C-10 -20, 0 -10, 0 0 Z",
            fill: "#81C784"
          }), t.jsx("path", {
            d: "M0 0 C40 0, 50 -15, 30 -25 C10 -20, 0 -10, 0 0 Z",
            fill: "#81C784"
          }), t.jsx("path", {
            d: "M0 0 C-30 -10, -40 -30, -20 -40 C-10 -25, 0 -15, 0 0 Z",
            fill: "#66BB6A"
          }), t.jsx("path", {
            d: "M0 0 C30 -10, 40 -30, 20 -40 C10 -25, 0 -15, 0 0 Z",
            fill: "#66BB6A"
          }), t.jsx("path", {
            d: "M0 0 C-15 -10, -10 -40, 0 -45 C10 -40, 15 -10, 0 0 Z",
            fill: "#4CAF50"
          }), t.jsx("path", {
            d: "M0 0 C-20 0, -30 -10, -15 -20 C-5 -15, 0 -5, 0 0 Z",
            fill: "#43A047"
          }), t.jsx("path", {
            d: "M0 0 C20 0, 30 -10, 15 -20 C5 -15, 0 -5, 0 0 Z",
            fill: "#43A047"
          }), t.jsx("path", {
            d: "M0 0 C-10 -5, -5 -20, 0 -25 C5 -20, 10 -5, 0 0 Z",
            fill: "#388E3C"
          }), t.jsx("circle", {
            cx: "-30",
            cy: "-25",
            r: "2.5",
            fill: "#EF9A9A"
          }), t.jsx("circle", {
            cx: "30",
            cy: "-25",
            r: "2.5",
            fill: "#EF9A9A"
          }), t.jsx("circle", {
            cx: "-20",
            cy: "-40",
            r: "2.5",
            fill: "#EF9A9A"
          }), t.jsx("circle", {
            cx: "20",
            cy: "-40",
            r: "2.5",
            fill: "#EF9A9A"
          }), t.jsx("circle", {
            cx: "0",
            cy: "-45",
            r: "2.5",
            fill: "#EF9A9A"
          })]
        }) : o === 7 ? t.jsx("g", {
          transform: "translate(100, 160)",
          children: [[-15, -90, -10], [15, -80, 15], [-5, -110, -5], [5, -100, 5], [-25, -60, -20], [25, -50, 25]].map(([e, s, a], n) => t.jsx("path", {
            d: "M0 0 Q-10 -30 0 -80 Q10 -30 0 0 Z",
            fill: n % 2 == 0 ? "#1B5E20" : "#2E7D32",
            stroke: "#AED581",
            strokeWidth: "1.5",
            transform: `translate(${e}, 0) rotate(${a}) scale(${0.7 + n * 0.05})`
          }, `snake-${n}`))
        }) : o === 8 ? t.jsxs("g", {
          transform: "translate(100, 160)",
          children: [t.jsx("path", {
            d: "M-15 0 L-15 -60",
            stroke: "#81C784",
            strokeWidth: "6",
            strokeLinecap: "butt"
          }), t.jsx("path", {
            d: "M0 0 L0 -90",
            stroke: "#66BB6A",
            strokeWidth: "7",
            strokeLinecap: "butt"
          }), t.jsx("path", {
            d: "M15 0 L15 -75",
            stroke: "#4CAF50",
            strokeWidth: "6",
            strokeLinecap: "butt"
          }), [[-15, -20], [-15, -40], [-15, -60], [0, -25], [0, -50], [0, -75], [0, -90], [15, -25], [15, -50], [15, -75]].map(([e, s], a) => t.jsx("line", {
            x1: e - 4,
            y1: s,
            x2: e + 4,
            y2: s,
            stroke: "#2E7D32",
            strokeWidth: "2"
          }, `bam-joint-${a}`)), [[-15, -60, -30], [-15, -60, 30], [0, -90, -20], [0, -90, 20], [0, -90, 0], [15, -75, -40], [15, -75, 10]].map(([e, s, a], n) => t.jsx("path", {
            d: "M0 0 Q-10 -20 0 -40 Q10 -20 0 0 Z",
            fill: "#388E3C",
            transform: `translate(${e}, ${s}) rotate(${a}) scale(0.5)`
          }, `bam-leaf-${n}`))]
        }) : o === 9 ? t.jsxs("g", {
          transform: "translate(100, 160)",
          children: [t.jsx("path", {
            d: "M0 0 Q30 -10 40 20 T30 60",
            stroke: "#81C784",
            strokeWidth: "2.5",
            fill: "none"
          }), t.jsx("path", {
            d: "M0 0 Q-40 -10 -50 15 T-30 50",
            stroke: "#4CAF50",
            strokeWidth: "2.5",
            fill: "none"
          }), t.jsx("path", {
            d: "M0 0 Q-10 -40 -30 -70",
            stroke: "#2E7D32",
            strokeWidth: "3",
            fill: "none"
          }), t.jsx("path", {
            d: "M0 0 Q10 -50 40 -80 T30 -110",
            stroke: "#1B5E20",
            strokeWidth: "3",
            fill: "none"
          }), [[35, 10, -20], [38, 30, 10], [30, 60, 40], [-45, 5, 20], [-45, 30, -10], [-30, 50, -30], [-15, -35, -40], [-30, -70, -60], [0, -15, 0], [20, -40, 30], [35, -70, 40], [30, -110, 15]].map(([e, s, a], n) => t.jsx("path", {
            d: "M0 0 C10 -10, 10 -25, 0 -30 C-10 -25, -10 -10, 0 0 Z",
            fill: ["#4CAF50", "#388E3C", "#2E7D32"][n % 3],
            transform: `translate(${e}, ${s}) rotate(${a}) scale(0.8)`
          }, `pothos-${n}`))]
        }) : o === 10 ? t.jsxs("g", {
          transform: "translate(100, 160)",
          children: [t.jsx("path", {
            d: "M-5 0 Q-20 -30 10 -60 T 30 -100",
            stroke: "#5D4037",
            strokeWidth: "10",
            strokeLinecap: "round",
            fill: "none"
          }), t.jsx("path", {
            d: "M10 -60 Q-10 -70 -20 -80",
            stroke: "#4E342E",
            strokeWidth: "6",
            strokeLinecap: "round",
            fill: "none"
          }), [[30, -100], [15, -110], [40, -105], [35, -90], [-20, -80], [-10, -85], [-30, -75], [-25, -90], [0, -55], [10, -45]].map(([e, s], a) => t.jsx("ellipse", {
            cx: e,
            cy: s,
            rx: "15",
            ry: "8",
            fill: ["#1B5E20", "#2E7D32", "#388E3C"][a % 3],
            opacity: "0.9"
          }, `bonsai-${a}`)), t.jsx("path", {
            d: "M-15 0 C-20 -10, -5 -15, 0 -5 Z",
            fill: "#9E9E9E"
          }), t.jsx("path", {
            d: "M10 0 C15 -8, 2 -12, 0 -2 Z",
            fill: "#757575"
          })]
        }) : undefined)]
      })
    });
  }
};
const $s = () => t.jsxs("svg", {
  width: "24",
  height: "90",
  viewBox: "0 0 24 90",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [t.jsx("rect", {
    x: "0",
    y: "0",
    width: "24",
    height: "6",
    fill: "url(#balusterGrad)",
    stroke: "var(--bal-stroke)",
    strokeWidth: "0.5"
  }), t.jsx("rect", {
    x: "3",
    y: "6",
    width: "18",
    height: "6",
    fill: "url(#balusterGrad)",
    stroke: "var(--bal-stroke)",
    strokeWidth: "0.5"
  }), t.jsx("path", {
    d: "M7 12 C7 20, 9 30, 9 40 C9 55, 3 60, 3 70 C3 75, 6 78, 6 78 L18 78 C18 78, 21 75, 21 70 C21 60, 15 55, 15 40 C15 30, 17 20, 17 12 Z",
    fill: "url(#balusterGrad)",
    stroke: "var(--bal-stroke)",
    strokeWidth: "0.5"
  }), t.jsx("rect", {
    x: "3",
    y: "78",
    width: "18",
    height: "6",
    fill: "url(#balusterGrad)",
    stroke: "var(--bal-stroke)",
    strokeWidth: "0.5"
  }), t.jsx("rect", {
    x: "0",
    y: "84",
    width: "24",
    height: "6",
    fill: "url(#balusterGrad)",
    stroke: "var(--bal-stroke)",
    strokeWidth: "0.5"
  }), t.jsx("defs", {
    children: t.jsxs("linearGradient", {
      id: "balusterGrad",
      x1: "0",
      y1: "0",
      x2: "24",
      y2: "0",
      gradientUnits: "userSpaceOnUse",
      children: [t.jsx("stop", {
        offset: "0%",
        stopColor: "var(--bal-shade)"
      }), t.jsx("stop", {
        offset: "35%",
        stopColor: "var(--bal-light)"
      }), t.jsx("stop", {
        offset: "85%",
        stopColor: "var(--bal-shade-dark)"
      }), t.jsx("stop", {
        offset: "100%",
        stopColor: "var(--bal-shade)"
      })]
    })
  })]
});
const Ps = ({
  onClose: s,
  couplesData: a,
  saveData: i,
  currentPartner: o,
  currentProfileUser: u
}) => {
  var h;
  var x;
  var v;
  var y;
  var f;
  var j;
  const {
    t: b,
    language: w
  } = n();
  const N = Is.map(e => ({
    name: b(e.nameKey),
    desc: b(e.descKey)
  }));
  const [k, S] = e.useState(a.plantXP || 0);
  const [M, D] = e.useState(a.plantCycle || 0);
  const [I, E] = e.useState(a.plantStatus || "alive");
  const [$, P] = e.useState(a.lastWateredDate || null);
  const [F, L] = e.useState(a.lastFertilizedDate || null);
  const [R, O] = e.useState(a.lastCharCareDate || null);
  const [W, B] = e.useState(() => {
    var e;
    return Cs((e = a.plantInteractionLedger) == null ? undefined : e.pendingDrops);
  });
  const [U, H] = e.useState(a.currentPlantVariant || null);
  const [Q, Y] = e.useState(null);
  const [G, K] = e.useState(null);
  const [V, J] = e.useState("clear");
  const [X, ee] = e.useState({
    userToChar: "",
    charToUser: ""
  });
  const [te, se] = e.useState("");
  const [ae, ne] = e.useState(a.charCareHint || "");
  const [ie, le] = e.useState(Cs(a.charCareCount));
  const [re, oe] = e.useState(() => {
    var e;
    var t;
    var s;
    return {
      baselineMetrics: Ms(a),
      pendingDrops: Cs((e = a.plantInteractionLedger) == null ? undefined : e.pendingDrops),
      totalDropsEarned: Cs((t = a.plantInteractionLedger) == null ? undefined : t.totalDropsEarned),
      lastSyncAt: ((s = a.plantInteractionLedger) == null ? undefined : s.lastSyncAt) || null
    };
  });
  const [de, ue] = e.useState(null);
  const [he, me] = e.useState(false);
  const [pe, ge] = e.useState(false);
  const [xe, ve] = e.useState([]);
  const [ye, fe] = e.useState([]);
  const [je, be] = e.useState(false);
  const [we, Ne] = e.useState(false);
  const [ke, Ce] = e.useState(null);
  const [Se, Me] = e.useState(null);
  const De = e.useRef(null);
  const Ae = String((a == null ? undefined : a.userId) || (u == null ? undefined : u.uid) || (u == null ? undefined : u.id) || "").trim();
  const Te = String((a == null ? undefined : a.characterId) || (a == null ? undefined : a.boundCharId) || (o == null ? undefined : o.id) || "").trim();
  const Ie = String((Q == null ? undefined : Q.name) || (o == null ? undefined : o.name) || "TA");
  const Ee = String((Q == null ? undefined : Q.image) || (Q == null ? undefined : Q.avatar) || (Q == null ? undefined : Q.avatarUrl) || (o == null ? undefined : o.image) || (o == null ? undefined : o.avatar) || (o == null ? undefined : o.avatarUrl) || "");
  e.useEffect(() => {
    if (!Ae || !Te) {
      return;
    }
    const e = String((a == null ? undefined : a.userId) || "") === Ae;
    const t = String((a == null ? undefined : a.characterId) || "") === Te;
    if (!e || !t) {
      i({
        ...a,
        userId: Ae,
        characterId: Te
      });
    }
  }, [Ae, Te]);
  const $e = e.useRef(re);
  const Pe = e.useRef(a);
  e.useEffect(() => {
    $e.current = re;
  }, [re]);
  e.useEffect(() => {
    Pe.current = a;
  }, [a]);
  e.useEffect(() => {}, []);
  const Fe = I === "dead";
  let Le = false;
  if (F) {
    Le = new Date(F).toDateString() === new Date().toDateString();
  }
  let Re = false;
  if (R) {
    Re = new Date(R).toDateString() === new Date().toDateString();
  }
  const Oe = U || {
    name: ((h = N[M % 4]) == null ? undefined : h.name) || b("couplesPlantFallbackName"),
    desc: ((x = N[M % 4]) == null ? undefined : x.desc) || "",
    type: M % 4
  };
  const We = e.useMemo(() => {
    const e = new Date().getHours();
    if (e >= 6 && e < 17) {
      return "time-day";
    } else if (e >= 17 && e < 20) {
      return "time-sunset";
    } else {
      return "time-night";
    }
  }, []);
  e.useEffect(() => {
    let e = false;
    (async () => {
      try {
        const t = Te;
        if (!t) {
          return;
        }
        const s = await p.get(String(t));
        if (!e) {
          Y(s || o || null);
        }
      } catch {
        if (!e) {
          Y(o || null);
        }
      }
    })();
    return () => {
      e = true;
    };
  }, [Te, o]);
  e.useEffect(() => {
    let e = false;
    (async () => {
      var t;
      var s;
      try {
        const a = Ae;
        const n = Te;
        if (!a || n == null) {
          return;
        }
        const [i, o, c] = await Promise.all([A.get(a), r.get(a, String(n)), l.get(a, String(n))]);
        if (e) {
          return;
        }
        K(i || null);
        ee({
          userToChar: String((o == null ? undefined : o.relationship) || ""),
          charToUser: String((o == null ? undefined : o.charToUserRelationship) || "")
        });
        const d = Array.isArray(c == null ? undefined : c.summaryHistory) && c.summaryHistory.length > 0 ? String(((t = c.summaryHistory[0]) == null ? undefined : t.summary) || ((s = c.summaryHistory[0]) == null ? undefined : s.content) || "") : "";
        const u = String((c == null ? undefined : c.episodeSummary) || d || "").slice(0, 500);
        se(u);
      } catch {
        if (e) {
          return;
        }
        K(null);
        ee({
          userToChar: "",
          charToUser: ""
        });
        se("");
      }
    })();
    return () => {
      e = true;
    };
  }, [Ae, Te]);
  e.useEffect(() => {
    let e = false;
    if (G !== null) {
      (async () => {
        const t = (G == null ? undefined : G.location) || "北京";
        try {
          const s = await z(t);
          if (e) {
            return;
          }
          if (s && s.weatherDesc) {
            const e = s.weatherDesc || "";
            if (e.includes("雨") || e.includes("rain")) {
              J("rain");
            } else if (e.includes("雪") || e.includes("snow")) {
              J("snow");
            } else if (e.includes("云") || e.includes("cloud") || e.includes("阴")) {
              J("cloud");
            } else {
              J("clear");
            }
          }
        } catch (s) {}
      })();
    }
    return () => {
      e = true;
    };
  }, [G]);
  e.useEffect(() => {
    const e = a == null ? undefined : a.currentPlantVariant;
    if ((e == null ? undefined : e.cycle) !== M) {
      H(null);
    } else {
      H(e);
    }
  }, [a == null ? undefined : a.currentPlantVariant, M]);
  e.useEffect(() => {
    if ((a == null ? undefined : a.isUnlocked) !== true || Fe || k >= ks || Re) {
      return;
    }
    if (!Q) {
      return;
    }
    const e = `${Te || "char"}_${new Date().toDateString()}_${M}`;
    const t = Ts(e);
    if (t > 0.56) {
      return;
    }
    const s = t < 0.22 ? "fertilize" : "water";
    const n = new Date().toISOString();
    const l = s === "fertilize" ? 18 : 10;
    const r = s === "fertilize" ? 3 : 1;
    const o = Math.min(ks, k + l);
    const c = Math.min(180, W + r);
    const d = ie + 1;
    const u = {
      ...$e.current,
      pendingDrops: c,
      lastSyncAt: n
    };
    const h = ((e, t, s, a) => {
      const n = new Date(t).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
      const i = s || (a ? a("couplesPlantTaFallback") : "TA");
      if (a) {
        return a(e === "fertilize" ? "couplesPlantCareHintFertilize" : "couplesPlantCareHintWater").replace("{name}", i).replace("{time}", n);
      } else if (e === "fertilize") {
        return `${i} 在 ${n} 悄悄幫你施肥了`;
      } else {
        return `${i} 在 ${n} 幫你澆了水`;
      }
    })(s, n, (Q == null ? undefined : Q.name) || b("couplesPlantTaFallback"), b);
    S(o);
    B(c);
    P(n);
    O(n);
    le(d);
    oe(u);
    ne(h);
    me(true);
    setTimeout(() => me(false), 700);
    const m = Date.now();
    ve(e => [...e, {
      id: m,
      text: b("couplesPlantCareXpText").replace("{name}", (Q == null ? undefined : Q.name) || b("couplesPlantTaFallback")).replace("{xp}", l),
      color: "#A5D6A7"
    }]);
    setTimeout(() => ve(e => e.filter(e => e.id !== m)), 1200);
    i({
      ...a,
      plantXP: o,
      lastWateredDate: n,
      lastCharCareDate: n,
      charCareCount: d,
      charCareHint: h,
      plantInteractionLedger: u
    });
  }, [a == null ? undefined : a.isUnlocked, Te, Q, Fe, k, Re, W, M, ie]);
  e.useEffect(() => {
    const e = Ae;
    const t = Te;
    if ((a == null ? undefined : a.isUnlocked) !== true || !e || t == null) {
      return;
    }
    let s = false;
    const n = async () => {
      try {
        const [a, n, l, r] = await Promise.all([c.countByPair(e, t), C.getByPair(e, t), T.getByUser(e), m.get("whitedog_history_all_idb")]);
        if (s) {
          return;
        }
        const o = Array.isArray(n) ? n.filter(e => e && (e.role === "user" || e.role === "char")).length : 0;
        const d = String(t);
        const u = Array.isArray(l) ? l.filter(e => String((e == null ? undefined : e.charId) || "") === d) : [];
        const h = u.length;
        const p = u.reduce((e, t) => {
          const s = Math.max(0, Cs(t == null ? undefined : t.workDuration) / 60);
          const a = Math.max(1, Cs((t == null ? undefined : t.completedSessions) || (t == null ? undefined : t.totalSessions) || 1));
          return e + Math.round(s * a);
        }, 0);
        let g = As(r);
        if (g.length === 0) {
          try {
            g = As(JSON.parse(localStorage.getItem("whitedog_history_all") || "[]"));
          } catch {
            g = [];
          }
        }
        g = g.filter(e => String((e == null ? undefined : e.charId) || "") === d);
        const x = g.length;
        const v = ((e = []) => e.reduce((e, t) => e + (String((t == null ? undefined : t.targetType) || "immediate") === "longterm" ? 3 : 1), 0))(g);
        const y = Pe.current || {};
        const f = Cs(y.onlineChatCount);
        const j = Cs(y.offlineChatCount);
        const b = Cs(y.pomodoroCount);
        const w = Cs(y.pomodoroFocusMinutes);
        const N = Cs(y.whiteDogCount);
        const k = Cs(y.whiteDogTaskScore);
        const S = new Date().toISOString();
        const M = y.plantInteractionLedger || null;
        if (!Boolean(M == null ? undefined : M.chatBaselineInitializedAt)) {
          const e = {
            ...Ms(y),
            onlineChatCount: a,
            offlineChatCount: o,
            pomodoroCount: h,
            pomodoroFocusMinutes: p,
            whiteDogCount: x,
            whiteDogTaskScore: v
          };
          const t = {
            baselineMetrics: (M == null ? undefined : M.baselineMetrics) ? {
              ...M.baselineMetrics,
              onlineChatCount: a,
              offlineChatCount: o,
              pomodoroCount: h,
              pomodoroFocusMinutes: p,
              whiteDogCount: x,
              whiteDogTaskScore: v
            } : e,
            pendingDrops: Cs(M == null ? undefined : M.pendingDrops),
            totalDropsEarned: Cs(M == null ? undefined : M.totalDropsEarned),
            lastSyncAt: S,
            chatBaselineInitializedAt: S
          };
          i({
            ...y,
            onlineChatCount: a,
            offlineChatCount: o,
            pomodoroCount: h,
            pomodoroFocusMinutes: p,
            whiteDogCount: x,
            whiteDogTaskScore: v,
            plantInteractionLedger: t
          });
          return;
        }
        if (f === a && j === o && b === h && w === p && N === x && k === v) {
          return;
        }
        i({
          ...y,
          onlineChatCount: a,
          offlineChatCount: o,
          pomodoroCount: h,
          pomodoroFocusMinutes: p,
          whiteDogCount: x,
          whiteDogTaskScore: v
        });
      } catch {}
    };
    n();
    const l = () => {
      n();
    };
    if (typeof window != "undefined") {
      window.addEventListener("focus", l);
      window.addEventListener("new-message", l);
    }
    const r = setInterval(n, 15000);
    return () => {
      s = true;
      clearInterval(r);
      if (typeof window != "undefined") {
        window.removeEventListener("focus", l);
        window.removeEventListener("new-message", l);
      }
    };
  }, [a == null ? undefined : a.isUnlocked, Ae, Te, i]);
  e.useEffect(() => {
    const e = Ms(a);
    const t = a.plantInteractionLedger || {};
    const s = ((e = {}, t = {}) => {
      const s = Ds(t.touchCount, e.touchCount);
      const a = Ds(t.whispersCount, e.whispersCount);
      const n = Ds(t.qaCount, e.qaCount);
      const i = Ds(t.logsCount, e.logsCount);
      const l = Ds(t.giftsCount, e.giftsCount);
      const r = Ds(t.anniversariesCount, e.anniversariesCount);
      const o = Ds(t.pomodoroCount, e.pomodoroCount);
      const c = Ds(t.pomodoroFocusMinutes, e.pomodoroFocusMinutes);
      const d = Ds(t.whiteDogCount, e.whiteDogCount);
      const u = Ds(t.whiteDogTaskScore, e.whiteDogTaskScore);
      const h = Ds(t.goingOutCount, e.goingOutCount);
      const m = Ds(t.onlineChatCount, e.onlineChatCount);
      const p = Ds(t.offlineChatCount, e.offlineChatCount);
      return Math.floor(s / 12) + a * 2 + n * 3 + i * 2 + l * 4 + r * 6 + Math.floor(c / 25) * 3 + Math.floor(Math.max(0, o - Math.floor(c / 25))) + u * 3 + Math.floor(Math.max(0, d - u)) + h * 4 + Math.floor(m / 6) + Math.floor(p / 4) * 2;
    })(t.baselineMetrics || e, e);
    const n = Cs(t.pendingDrops);
    const l = Math.min(180, n + s);
    const r = {
      baselineMetrics: e,
      pendingDrops: l,
      totalDropsEarned: Cs(t.totalDropsEarned) + s,
      lastSyncAt: new Date().toISOString()
    };
    oe(r);
    B(l);
    const o = JSON.stringify(t.baselineMetrics || null);
    const c = JSON.stringify(e);
    if (!t.baselineMetrics || o !== c || n !== l || s > 0) {
      i({
        ...a,
        plantInteractionLedger: r
      });
    }
  }, [a, i]);
  e.useEffect(() => {
    let e = false;
    let t = I === "dead";
    if (!t && $) {
      const e = new Date();
      const s = new Date($);
      if (Math.abs(e - s) / 3600000 >= 48 && k < ks) {
        t = true;
        E("dead");
        i({
          ...a,
          plantStatus: "dead",
          plantInteractionLedger: $e.current
        });
      }
    }
    const s = a.plantXP || 0;
    if (!t && s >= ks && Math.random() < 0.4) {
      (async () => {
        var t;
        var s;
        Ne(true);
        ue(null);
        const n = a.plantCycle || 0;
        const l = ze("char");
        const {
          variant: r,
          story: o
        } = await Be("char", l, {
          charCareCount: ie
        });
        if (e) {
          Ne(false);
          return;
        }
        const c = ((t = N[n % 4]) == null ? undefined : t.name) || b("couplesPlantFallbackName");
        const d = r || {
          id: `normal_${n}`,
          name: c,
          desc: ((s = N[n % 4]) == null ? undefined : s.desc) || "",
          type: n % 4,
          isSpecial: false,
          cycle: n,
          source: "normal"
        };
        const u = {
          id: Date.now().toString(),
          cycle: n,
          giftedBy: "char",
          date: new Date().toISOString(),
          variantId: d.id || null,
          variantName: d.name || null,
          variantType: Number.isFinite(Number(d.type)) ? Number(d.type) : null,
          variantEmoji: d.emoji || null,
          special: d.isSpecial === true,
          variantStyle: null,
          story: o || ""
        };
        const h = new Date().toISOString();
        i({
          ...a,
          plantXP: 0,
          plantCycle: n + 1,
          plantCollection: [...(a.plantCollection || []), u],
          lastWateredDate: h,
          lastFertilizedDate: null,
          lastCharCareDate: null,
          charCareCount: 0,
          charCareHint: "",
          plantInteractionLedger: $e.current,
          currentPlantVariant: null
        });
        S(0);
        D(n + 1);
        P(h);
        L(null);
        O(null);
        le(0);
        ne("");
        H(null);
        ue({
          type: "char",
          title: b("couplesPlantCharHarvestTitle").replace("{name}", Ie),
          desc: o || b("couplesPlantCharHarvestFallback"),
          variant: d,
          storyVariantStyle: null,
          sendReceive: b("couplesPlantCharSendReceive").replace("{char}", Ie).replace("{name}", d.name || b("couplesPlantFallbackName")),
          acceptedState: b("couplesPlantCharAccepted"),
          charCareCount: ie
        });
        Ne(false);
      })();
    }
    return () => {
      e = true;
    };
  }, []);
  e.useEffect(() => {
    if (k >= ks || Fe || W <= 0) {
      return;
    }
    const e = setInterval(() => {
      fe(e => {
        const t = Math.min(4, W);
        if (e.length < t) {
          return [...e, {
            id: `${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
            x: 10 + Math.random() * 80 + "%",
            y: 10 + Math.random() * 30 + "%"
          }];
        } else {
          return e;
        }
      });
    }, 1500);
    return () => clearInterval(e);
  }, [k, Fe, W]);
  e.useEffect(() => {
    const e = Math.min(4, W);
    fe(t => t.slice(0, e));
  }, [W]);
  const ze = e => (a == null ? undefined : a.isUnlocked) === true && (!!Q || !!o) && Ts(`${e}_${Te || "char"}_${M}`) <= 0.5;
  const Be = async (e, t, s = {}) => {
    var n;
    var i;
    try {
      const l = await g();
      if (!(l == null ? undefined : l.mainApiKey)) {
        return {
          variant: null,
          story: ""
        };
      }
      const r = Ie;
      const o = String((Q == null ? undefined : Q.prompt) || (Q == null ? undefined : Q.description) || "").slice(0, 600);
      const c = String((G == null ? undefined : G.name) || "我");
      const u = [String((G == null ? undefined : G.intro) || (G == null ? undefined : G.signature) || ""), Array.isArray(G == null ? undefined : G.hobbies) ? G.hobbies.join(", ") : ""].filter(Boolean).join("; ").slice(0, 300);
      const h = `${c}→${r}: ${X.userToChar || "unset"}; ${r}→${c}: ${X.charToUser || "unset"}`;
      const m = te ? `Shared memories: ${te}` : "";
      const p = Cs(s == null ? undefined : s.charCareCount);
      const x = p > 0 ? `They co-raised this plant; ${r} secretly tended it ${p} times.` : "";
      const v = e === "user" ? `${c} holds the bloomed plant and presents it to ${r}.` : `${r} harvested the plant while ${c} was away, waiting with it.`;
      const y = w === "zh_cn" ? "Simplified Chinese" : "Traditional Chinese";
      if (t) {
        const e = (a.plantCollection || []).filter(e => e && e.special).slice(-12).map(e => `${e.variantName || "?"}${e.variantEmoji ? " " + e.variantEmoji : ""}`).filter(Boolean);
        const t = e.length ? `\nAVOID (already exist, must differ in element/emoji/name root): ${e.join(" / ")}` : "";
        const s = ["crystal/gem bloom (ice/quartz/amethyst — cool palette)", "lava/ember flora (molten core, smoke, warm reds-oranges)", "bioluminescent fungi (glow spores, deep-sea or cave vibe)", "spectral/ghost flower (translucent, drifting, moonlight)", "mecha/circuit sprout (metallic, wiring, neon LED accents)", "tentacle/carnivorous vine (alive, slightly menacing, sentient)", "paper/origami plant (folded petals, ink wash, scholar mood)", "storm/cloud bloom (electric arcs, wind, sky palette)", "candy/sugar confection (translucent sweets, pastel)", "bone/coral skeletal (calcified, oceanic or gothic)", "feathered creature-plant (Pokémon-style, eyes, plumage)", "rune/sigil herb (ancient script glowing on leaves)", "liquid mercury/oil-slick plant (shimmering chromatic)", "shadow/void blossom (eats light, starry interior)", "spring/fresh shoot (dewdrops, soft greens, gentle morning)", "autumn/maple wisp (amber, drifting leaves, melancholy)"];
        const n = Ts(`style_${Te || "char"}_${M}_${Date.now() % 9973}`);
        const i = s[Math.floor(n * s.length)];
        const p = s[Math.floor(Ts(`alt_${M}_${n}`) * s.length)];
        const g = `Design a fantasy potted plant + write a gifting scene. Return ONLY JSON:\n{\n  "name": "Plant name (2-5 chars, ${y}, poetic/fun, NO generic salt/star/vine unless truly fits)",\n  "desc": "One-line desc (15-30 chars ${y}, reflecting character personality)",\n  "emoji": "ONE emoji that visually matches the style slot (NOT a generic 💎❄️✨ unless slot demands)",\n  "story": "80-160 char ${y} micro-scene (single paragraph, no line breaks)"\n}\n\nCharacter: ${r}\nPersona: ${o}\nUser: ${c}${u ? `\nUser persona: ${u}` : ""}\nRelationship: ${h}${m ? `\n${m}` : ""}${x ? `\n${x}` : ""}\nScene: ${v}\nCycle: ${M + 1}\n\nSTYLE SLOT (MUST follow): ${i}\nFallback flavor if primary feels forced: ${p}${t}\n\nPLANT RULES:\n- NOT a real plant. Fantasy only — follow the STYLE SLOT above, do not drift to a different element.\n- Emoji must visually represent the slot: lava→🌋🔥, fungi→🍄, ghost→👻, mecha→⚙️🤖, tentacle→🐙, paper→📜, storm→⚡☁️, candy→🍬, bone/coral→🪸🦴, creature→🐣🦋, rune→🔮, mercury→🫧, void→🌑, spring→🌱, autumn→🍁, crystal→💎❄️ — pick the BEST single emoji for the slot, never default to 💎/❄️ outside crystal slot.\n- Name should fuse the character's personality WITH the style slot (e.g. cold persona + lava slot = an icy character forced into fire form, contrast is good).\n- MUST differ from AVOID list in core element, root character, and emoji.\n- Be bold and weird — repetition is the worst failure mode.\n\nSTORY RULES:\n- 4 beats: ① atmosphere (≤15 chars) ② giver's action ③ receiver's in-character reaction ④ lingering final shot\n- Ban: "heart racing", "ears turning red", "couldn't help but smile", quotation marks, titles, section breaks\n- Weave dialogue naturally into narration. One paragraph, no breaks.`;
        const f = (e => {
          if (!e) {
            return null;
          }
          try {
            const t = String(e).match(/\{[\s\S]*\}/);
            if (t) {
              return JSON.parse(t[0]);
            } else {
              return null;
            }
          } catch {
            return null;
          }
        })(await d({
          messages: [{
            role: "system",
            content: "Fantasy plant designer + romance micro-fiction writer. Output JSON only."
          }, {
            role: "user",
            content: g
          }],
          settings: l,
          preferStreaming: false
        }));
        if (f == null ? undefined : f.name) {
          return {
            variant: {
              id: `special_${M}_${Date.now()}`,
              name: String(f.name).slice(0, 10),
              desc: String(f.desc || "").slice(0, 60),
              emoji: String(f.emoji || "✨").slice(0, 4),
              type: M % 4,
              isSpecial: true,
              cycle: M,
              source: "special-seed"
            },
            story: String(f.story || "").trim()
          };
        } else {
          return {
            variant: null,
            story: ""
          };
        }
      }
      {
        const e = `Write a ${y} 80-160 char micro-scene about gifting a potted plant. Single paragraph, no line breaks. Return ONLY the story text.\n\nCharacter: ${r}\nPersona: ${o}\nUser: ${c}${u ? `\nUser persona: ${u}` : ""}\nRelationship: ${h}${m ? `\n${m}` : ""}${x ? `\n${x}` : ""}\nPlant: ${((n = N[M % 4]) == null ? undefined : n.name) || b("couplesPlantFallbackName")}（${((i = N[M % 4]) == null ? undefined : i.desc) || ""}）\nScene: ${v}\n\n4 beats: ① atmosphere (≤15 chars) ② giver's action ③ receiver's in-character reaction ④ lingering final shot\nBan: "heart racing", "ears turning red", "couldn't help but smile", quotation marks, titles, section breaks. One paragraph.`;
        const t = await d({
          messages: [{
            role: "system",
            content: "Romance micro-fiction writer. Light novel style, sensory details, no purple prose. Output raw text only."
          }, {
            role: "user",
            content: e
          }],
          settings: l,
          preferStreaming: false
        });
        return {
          variant: null,
          story: String(t || "").trim()
        };
      }
    } catch {
      return {
        variant: null,
        story: ""
      };
    }
  };
  Ue = k;
  const _e = Fe ? {
    level: 0,
    name: b("couplesPlantStageDead"),
    desc: b("couplesPlantStageDeadDesc")
  } : Ue < 120 ? {
    level: 1,
    next: 120,
    prev: 0,
    name: b("couplesPlantStageSeed"),
    desc: b("couplesPlantStageSeedDesc")
  } : Ue < 280 ? {
    level: 2,
    next: 280,
    prev: 120,
    name: b("couplesPlantStageSprout"),
    desc: b("couplesPlantStageSproutDesc")
  } : Ue < ks ? {
    level: 3,
    next: ks,
    prev: 280,
    name: b("couplesPlantStageGrow"),
    desc: b("couplesPlantStageGrowDesc")
  } : {
    level: 4,
    next: ks,
    prev: ks,
    name: b("couplesPlantStageBloom"),
    desc: b("couplesPlantStageBloomDesc")
  };
  var Ue;
  const qe = _e.level === 4 || Fe ? 100 : Math.min(100, Math.max(0, (k - _e.prev) / (_e.next - _e.prev) * 100));
  const He = a.plantCollection || [];
  return t.jsxs("div", {
    className: "plant-wrapper",
    children: [t.jsxs("div", {
      className: "plant-header",
      children: [t.jsx("button", {
        className: "plant-btn-icon",
        onClick: s,
        children: t.jsx(_, {
          size: 24,
          strokeWidth: 1.5
        })
      }), t.jsxs("div", {
        className: "plant-title-container",
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        },
        children: [t.jsx("span", {
          className: "plant-title-zh",
          children: b("couplesPlantTitle")
        }), t.jsx("span", {
          className: "plant-title-en",
          children: "LOVE BALCONY"
        })]
      }), t.jsx("button", {
        className: "plant-btn-icon",
        onClick: () => be(true),
        children: t.jsx(Ke, {
          size: 20,
          strokeWidth: 1.5
        })
      })]
    }), t.jsxs("div", {
      className: "plant-scene-wrapper",
      children: [t.jsxs("div", {
        className: `plant-window ${We} weather-${V}`,
        children: [t.jsx("div", {
          className: "plant-stars"
        }), t.jsx("div", {
          className: "plant-celestial"
        }), t.jsx("div", {
          className: "plant-cloud"
        }), t.jsx("div", {
          className: "plant-cloud cloud-2"
        }), t.jsxs("div", {
          className: "plant-mountains",
          children: [t.jsx("div", {
            className: "mountain m-1"
          }), t.jsx("div", {
            className: "mountain m-2"
          }), t.jsx("div", {
            className: "mountain m-3"
          })]
        })]
      }), t.jsxs("div", {
        className: "plant-balcony",
        children: [t.jsx("div", {
          className: "plant-balcony-handrail"
        }), t.jsx("div", {
          className: "plant-balcony-balusters",
          children: [...Array(9)].map((e, s) => t.jsx("div", {
            className: "plant-baluster",
            children: t.jsx($s, {})
          }, s))
        }), t.jsx("div", {
          className: "plant-balcony-floor"
        })]
      }), t.jsx(Es, {
        level: _e.level,
        isWatering: he || pe,
        cycle: M,
        variantType: Oe == null ? undefined : Oe.type,
        isDead: Fe
      }), he && t.jsx("div", {
        className: "plant-water-shower"
      }), pe && t.jsx("div", {
        className: "plant-fertilize-shower"
      }), ye.map(e => t.jsx("div", {
        className: "plant-energy-drop",
        style: {
          left: e.x,
          top: e.y
        },
        onClick: () => (e => {
          if (k >= ks || Fe || W <= 0) {
            return;
          }
          fe(t => t.filter(t => t.id !== e));
          me(true);
          setTimeout(() => me(false), 800);
          const t = Math.min(k + 6, ks);
          const s = new Date().toISOString();
          const n = Math.max(0, W - 1);
          const l = {
            ...$e.current,
            pendingDrops: n,
            lastSyncAt: s
          };
          S(t);
          P(s);
          B(n);
          oe(l);
          i({
            ...a,
            plantXP: t,
            plantStatus: "alive",
            lastWateredDate: s,
            plantInteractionLedger: l
          });
          const r = Date.now();
          ve(e => [...e, {
            id: r,
            text: "+6 XP",
            color: "#81D4FA"
          }]);
          setTimeout(() => ve(e => e.filter(e => e.id !== r)), 1000);
        })(e.id),
        children: t.jsx(Ze, {
          size: 24,
          strokeWidth: 1.5,
          fill: "rgba(129, 212, 250, 0.2)"
        })
      }, e.id)), false, xe.map(e => t.jsx("div", {
        className: "plant-xp-text",
        style: {
          color: e.color,
          textShadow: "0 2px 4px rgba(255,255,255,0.7)"
        },
        children: e.text
      }, e.id))]
    }), t.jsxs("div", {
      className: "plant-dashboard",
      children: [t.jsxs("div", {
        className: "plant-level-info",
        children: [t.jsx("span", {
          style: {
            color: Fe ? "#8C7A6B" : undefined
          },
          children: Fe ? b("couplesPlantDead") : `Lv.${_e.level} ${_e.name}`
        }), t.jsx("span", {
          style: {
            color: Fe ? "#8C7A6B" : undefined
          },
          children: _e.level === 4 ? "MAX" : Fe ? "0 XP" : `${k}/${_e.next} XP`
        })]
      }), t.jsxs("div", {
        className: "plant-level-info",
        style: {
          marginTop: 2
        },
        children: [t.jsxs("span", {
          style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 6
          },
          children: [t.jsx(Ze, {
            size: 14,
            strokeWidth: 1.8,
            fill: "rgba(129, 212, 250, 0.2)"
          }), W]
        }), t.jsx("span", {
          children: b("couplesPlantInteractionCount")
        })]
      }), ae && t.jsx("div", {
        className: "plant-level-info",
        style: {
          marginTop: 2,
          color: "#6C8A6A"
        },
        children: t.jsx("span", {
          children: ae
        })
      }), Fe ? t.jsx("button", {
        className: "plant-btn-harvest",
        style: {
          background: "#8C8075",
          marginTop: 8
        },
        onClick: () => {
          const e = new Date().toISOString();
          i({
            ...a,
            plantXP: 0,
            plantCycle: M + 1,
            plantStatus: "alive",
            lastWateredDate: e,
            lastFertilizedDate: null,
            lastCharCareDate: null,
            charCareCount: 0,
            charCareHint: "",
            plantInteractionLedger: $e.current,
            currentPlantVariant: null
          });
          S(0);
          D(M + 1);
          E("alive");
          P(e);
          L(null);
          O(null);
          le(0);
          ne("");
          H(null);
        },
        children: b("couplesPlantReplant")
      }) : _e.level === 4 ? t.jsxs("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 6,
          alignItems: "center",
          width: "100%"
        },
        children: [t.jsxs("button", {
          className: "plant-btn-harvest",
          onClick: async () => {
            var e;
            var t;
            Ne(true);
            ue(null);
            const s = ze("user");
            const {
              variant: n,
              story: l
            } = await Be("user", s, {
              charCareCount: ie
            });
            const r = ((e = N[M % 4]) == null ? undefined : e.name) || b("couplesPlantFallbackName");
            const o = n || {
              id: `normal_${M}`,
              name: r,
              desc: ((t = N[M % 4]) == null ? undefined : t.desc) || "",
              type: M % 4,
              isSpecial: false,
              cycle: M,
              source: "normal"
            };
            const c = {
              id: Date.now().toString(),
              cycle: M,
              giftedBy: "user",
              date: new Date().toISOString(),
              variantId: o.id || null,
              variantName: o.name || null,
              variantType: Number.isFinite(Number(o.type)) ? Number(o.type) : null,
              variantEmoji: o.emoji || null,
              special: o.isSpecial === true,
              variantStyle: null,
              story: l || ""
            };
            const d = new Date().toISOString();
            const u = [...(a.plantCollection || []), c];
            i({
              ...a,
              plantXP: 0,
              plantCycle: M + 1,
              plantCollection: u,
              lastWateredDate: d,
              lastFertilizedDate: null,
              lastCharCareDate: null,
              charCareCount: 0,
              charCareHint: "",
              plantInteractionLedger: $e.current,
              currentPlantVariant: null
            });
            S(0);
            D(M + 1);
            P(d);
            L(null);
            O(null);
            le(0);
            ne("");
            H(null);
            ue({
              type: "user",
              title: b("couplesPlantUserHarvestTitle").replace("{name}", o.name || b("couplesPlantDefaultFlowerName")).replace("{char}", Ie),
              desc: l || b("couplesPlantUserHarvestFallback"),
              variant: o,
              storyVariantStyle: null,
              sendReceive: b("couplesPlantUserSendReceive").replace("{name}", o.name || b("couplesPlantFallbackName")).replace("{char}", Ie),
              acceptedState: b("couplesPlantUserAccepted").replace("{char}", Ie),
              charCareCount: ie
            });
            Ne(false);
          },
          children: [t.jsx(ce, {
            size: 18,
            strokeWidth: 2
          }), " ", b("couplesPlantHarvest")]
        }), t.jsx("button", {
          className: "plant-btn-harvest",
          style: {
            background: "#8C8075",
            fontSize: 13
          },
          onClick: () => {
            if (!window.confirm(b("couplesPlantDiscardConfirm"))) {
              return;
            }
            const e = new Date().toISOString();
            i({
              ...a,
              plantXP: 0,
              plantCycle: M + 1,
              lastWateredDate: e,
              lastFertilizedDate: null,
              lastCharCareDate: null,
              charCareCount: 0,
              charCareHint: "",
              plantInteractionLedger: $e.current,
              currentPlantVariant: null
            });
            S(0);
            D(M + 1);
            P(e);
            L(null);
            O(null);
            le(0);
            ne("");
            H(null);
          },
          children: b("couplesPlantDiscard")
        })]
      }) : t.jsx("div", {
        className: "plant-progress-bar-bg",
        children: t.jsx("div", {
          className: "plant-progress-bar-fill",
          style: {
            width: `${qe}%`
          }
        })
      }), t.jsx("div", {
        className: "plant-desc",
        children: _e.desc
      }), !Fe && _e.level < 4 && t.jsxs("div", {
        style: {
          display: "flex",
          justifyContent: "center",
          marginTop: -4,
          gap: 8,
          flexWrap: "wrap"
        },
        children: [t.jsxs("button", {
          className: "plant-btn-fertilize",
          onClick: () => {
            if (k >= ks || Fe || Le) {
              return;
            }
            ge(true);
            setTimeout(() => ge(false), 800);
            const e = Math.min(k + 40, ks);
            const t = new Date().toISOString();
            S(e);
            P(t);
            L(t);
            E("alive");
            i({
              ...a,
              plantXP: e,
              lastFertilizedDate: t,
              lastWateredDate: t,
              plantStatus: "alive",
              plantInteractionLedger: $e.current
            });
            const s = Date.now();
            ve(e => [...e, {
              id: s,
              text: "+40 XP",
              color: "#CDDC39"
            }]);
            setTimeout(() => ve(e => e.filter(e => e.id !== s)), 1000);
          },
          disabled: Le,
          children: [t.jsx(q, {
            size: 14,
            strokeWidth: 2.5
          }), b(Le ? "couplesPlantFertilized" : "couplesPlantFertilize")]
        }), t.jsxs("button", {
          className: "plant-btn-fertilize",
          onClick: () => {
            if (k >= ks || Fe || W <= 0) {
              return;
            }
            const e = ks - k;
            const t = Math.ceil(e / 6);
            const s = Math.min(W, t);
            if (s <= 0) {
              return;
            }
            const n = Math.min(s * 6, e);
            const l = Math.min(k + n, ks);
            const r = new Date().toISOString();
            const o = Math.max(0, W - s);
            const c = {
              ...$e.current,
              pendingDrops: o,
              lastSyncAt: r
            };
            fe([]);
            me(true);
            setTimeout(() => me(false), 800);
            S(l);
            P(r);
            B(o);
            oe(c);
            i({
              ...a,
              plantXP: l,
              plantStatus: "alive",
              lastWateredDate: r,
              plantInteractionLedger: c
            });
            const d = Date.now();
            ve(e => [...e, {
              id: d,
              text: `+${n} XP`,
              color: "#81D4FA"
            }]);
            setTimeout(() => ve(e => e.filter(e => e.id !== d)), 1000);
          },
          disabled: W <= 0,
          children: [t.jsx(Ze, {
            size: 14,
            strokeWidth: 2.5,
            fill: "rgba(129, 212, 250, 0.2)"
          }), b("couplesPlantCollectAll").replace("{count}", W)]
        })]
      })]
    }), de && t.jsxs("div", {
      className: "plant-vn-overlay",
      onClick: () => ue(null),
      children: [t.jsx("div", {
        className: "plant-vn-tachie-wrap",
        children: t.jsx("div", {
          className: "plant-vn-tachie " + (Ee ? "" : "no-img"),
          style: Ee ? {
            backgroundImage: `url(${Ee})`
          } : undefined,
          children: !Ee && t.jsx("span", {
            children: Ie.slice(0, 1)
          })
        })
      }), t.jsxs("div", {
        className: "plant-vn-dialogue",
        onClick: e => e.stopPropagation(),
        children: [t.jsx("div", {
          className: "plant-vn-nameplate",
          children: Ie
        }), t.jsx("div", {
          className: "plant-vn-plant-showcase",
          children: t.jsx("div", {
            className: "plant-vn-plant-svg",
            children: t.jsx(Es, {
              level: 4,
              isWatering: false,
              cycle: Cs((v = de == null ? undefined : de.variant) == null ? undefined : v.cycle) || M - 1,
              variantType: Number.isFinite(Number((y = de == null ? undefined : de.variant) == null ? undefined : y.type)) ? Number((f = de == null ? undefined : de.variant) == null ? undefined : f.type) : Oe == null ? undefined : Oe.type,
              inPokedex: true,
              specialEmoji: ((j = de == null ? undefined : de.variant) == null ? undefined : j.emoji) || null
            })
          })
        }), t.jsxs("div", {
          className: "plant-vn-content",
          children: [t.jsx("div", {
            className: "plant-vn-title",
            children: (de == null ? undefined : de.title) || ((de == null ? undefined : de.type) === "char" ? b("couplesPlantCharSurprise") : b("couplesPlantHarvestSuccess"))
          }), t.jsxs("div", {
            className: "plant-vn-sys-text",
            children: [(de == null ? undefined : de.sendReceive) && t.jsx("span", {
              children: de.sendReceive
            }), (de == null ? undefined : de.acceptedState) && t.jsx("span", {
              children: de.acceptedState
            }), Number.isFinite(Number(de == null ? undefined : de.charCareCount)) && t.jsx("span", {
              children: b("couplesPlantCoCareLine").replace("{name}", Ie).replace("{count}", Cs(de.charCareCount))
            })]
          }), t.jsx("div", {
            className: "plant-vn-story-text",
            children: (de == null ? undefined : de.desc) || ((de == null ? undefined : de.type) === "char" ? b("couplesPlantCharHarvestDesc") : b("couplesPlantUserHarvestDesc"))
          })]
        }), t.jsx("button", {
          className: "plant-vn-continue-btn",
          onClick: () => ue(null),
          children: b("couplesPlantContinue")
        })]
      })]
    }), we && t.jsx("div", {
      className: "plant-modal-overlay",
      children: t.jsxs("div", {
        className: "plant-modal-card plant-loading-card",
        children: [t.jsx("div", {
          className: "plant-loading-spinner"
        }), t.jsx("div", {
          className: "plant-modal-title",
          style: {
            marginBottom: 8
          },
          children: b("couplesPlantLoadingTitle")
        }), t.jsx("div", {
          className: "plant-modal-desc",
          style: {
            marginBottom: 0
          },
          children: b("couplesPlantLoadingDesc")
        })]
      })
    }), je && t.jsxs("div", {
      className: "plant-pokedex-modal",
      children: [t.jsxs("div", {
        className: "plant-header",
        style: {
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(10px)",
          position: "sticky",
          top: 0,
          zIndex: 100
        },
        children: [t.jsx("button", {
          className: "plant-btn-icon",
          onClick: () => be(false),
          children: t.jsx(_, {
            size: 24,
            strokeWidth: 1.5
          })
        }), t.jsx("div", {
          className: "plant-title-zh",
          style: {
            flex: 1,
            textAlign: "center"
          },
          children: b("couplesPlantDex")
        }), t.jsx("div", {
          style: {
            width: 44
          }
        })]
      }), He.length === 0 ? t.jsxs("div", {
        style: {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#A69B90"
        },
        children: [t.jsx(Ke, {
          size: 48,
          strokeWidth: 1,
          style: {
            marginBottom: 16,
            opacity: 0.5
          }
        }), b("couplesPlantDexEmpty")]
      }) : t.jsx("div", {
        className: "plant-pokedex-grid",
        children: He.map(e => {
          const s = N[(e.cycle || 0) % 4];
          const a = e.giftedBy === "user";
          return t.jsxs("div", {
            className: "plant-pokedex-item",
            onPointerDown: () => (e => {
              De.current = setTimeout(() => {
                De.current = "long";
                Me(e);
              }, 600);
            })(e),
            onPointerUp: () => (e => {
              if (De.current !== "long") {
                clearTimeout(De.current);
                De.current = null;
                Ce(e);
              } else {
                De.current = null;
              }
            })(e),
            onPointerLeave: () => {
              clearTimeout(De.current);
              De.current = null;
            },
            onContextMenu: e => e.preventDefault(),
            children: [t.jsx("div", {
              className: "plant-dex-flower-wrap",
              children: t.jsx(Es, {
                level: 4,
                isWatering: false,
                cycle: e.cycle,
                variantType: e.variantType,
                inPokedex: true,
                specialEmoji: e.variantEmoji || null
              })
            }), t.jsx("div", {
              style: {
                fontSize: 14,
                fontWeight: "bold",
                color: "#5A4E46",
                marginBottom: 6
              },
              children: e.variantName || s.name
            }), a ? t.jsxs("div", {
              className: "plant-dex-badge",
              children: [t.jsx(Z, {
                size: 10,
                fill: "#E53935"
              }), " ", b("couplesPlantSentByMe")]
            }) : t.jsxs("div", {
              className: "plant-dex-badge bg-blue",
              children: [t.jsx(ce, {
                size: 10,
                strokeWidth: 2
              }), " ", b("couplesPlantSentByPartner")]
            })]
          }, e.id);
        })
      }), ke && (() => {
        const e = N[(ke.cycle || 0) % 4];
        const s = ke.giftedBy === "user";
        const a = ke.date ? new Date(ke.date).toLocaleDateString() : "";
        return t.jsx("div", {
          className: "plant-dex-detail-overlay",
          onClick: () => Ce(null),
          children: t.jsxs("div", {
            className: "plant-dex-detail-card",
            onClick: e => e.stopPropagation(),
            children: [t.jsx("div", {
              className: "plant-dex-detail-plant",
              children: t.jsx(Es, {
                level: 4,
                isWatering: false,
                cycle: ke.cycle,
                variantType: ke.variantType,
                inPokedex: true,
                specialEmoji: ke.variantEmoji || null
              })
            }), t.jsx("div", {
              className: "plant-dex-detail-name",
              children: ke.variantName || e.name
            }), a && t.jsx("div", {
              className: "plant-dex-detail-date",
              children: a
            }), t.jsxs("div", {
              className: "plant-dex-detail-badge-row",
              children: [s ? t.jsxs("div", {
                className: "plant-dex-badge",
                children: [t.jsx(Z, {
                  size: 10,
                  fill: "#E53935"
                }), " ", b("couplesPlantSentByMe")]
              }) : t.jsxs("div", {
                className: "plant-dex-badge bg-blue",
                children: [t.jsx(ce, {
                  size: 10,
                  strokeWidth: 2
                }), " ", b("couplesPlantSentByPartner")]
              }), ke.special && t.jsxs("div", {
                className: "plant-dex-badge",
                style: {
                  background: "#FFF3E0",
                  color: "#E65100"
                },
                children: [t.jsx(q, {
                  size: 10
                }), " ", b("couplesPlantDexSpecial")]
              })]
            }), ke.story ? t.jsx("div", {
              className: "plant-dex-detail-story",
              children: ke.story
            }) : t.jsx("div", {
              className: "plant-dex-detail-story plant-dex-no-story",
              children: b("couplesPlantDexNoStory")
            }), t.jsx("button", {
              className: "plant-vn-continue-btn",
              onClick: () => Ce(null),
              children: b("couplesPlantDexClose")
            })]
          })
        });
      })(), Se && t.jsx("div", {
        className: "plant-dex-detail-overlay",
        onClick: () => Me(null),
        children: t.jsxs("div", {
          className: "plant-dex-delete-card",
          onClick: e => e.stopPropagation(),
          children: [t.jsx("div", {
            className: "plant-dex-delete-title",
            children: b("couplesPlantDexDeleteTitle")
          }), t.jsx("div", {
            className: "plant-dex-delete-desc",
            children: b("couplesPlantDexDeleteDesc").replace("{name}", Se.variantName || N[(Se.cycle || 0) % 4].name)
          }), t.jsxs("div", {
            className: "plant-dex-delete-actions",
            children: [t.jsx("button", {
              className: "plant-dex-delete-cancel",
              onClick: () => Me(null),
              children: b("cancel")
            }), t.jsx("button", {
              className: "plant-dex-delete-confirm",
              onClick: () => (e => {
                const t = (a.plantCollection || []).filter(t => t.id !== e.id);
                i({
                  ...a,
                  plantCollection: t
                });
                Me(null);
                Ce(null);
              })(Se),
              children: b("confirmDelete")
            })]
          })]
        })
      })]
    })]
  });
};
const Fs = {
  heart: Z,
  star: ae,
  crown: Ee,
  diamond: oe,
  flame: $e,
  compass: at,
  eye: rt,
  zap: Pe,
  sparkles: q,
  rocket: st,
  award: Xe,
  book: Ke,
  camera: et,
  gift: ce,
  music: Ce,
  sun: Ne,
  moon: we,
  shield: ht,
  sword: ut,
  anchor: dt,
  feather: ue,
  gem: Ie,
  umbrella: Le,
  rainbow: Ae,
  key: ct,
  trophy: tt,
  clock: Je,
  palette: ze,
  ring: oe,
  kiss: Z,
  rose: q,
  butterfly: ue,
  snowflake: ae,
  thunder: Pe,
  hourglass: Je,
  mirror: rt,
  puzzle: at,
  potion: q,
  scroll: Ke,
  lantern: Ne,
  crystal: oe,
  clover: ot,
  wish: ae,
  halo: Ee
};
const Ls = () => t.jsxs("svg", {
  width: "120",
  height: "120",
  viewBox: "0 0 100 100",
  style: {
    filter: "drop-shadow(0 8px 16px rgba(212,175,55,0.8))"
  },
  children: [t.jsxs("defs", {
    children: [t.jsxs("linearGradient", {
      id: "goldGrad",
      x1: "0%",
      y1: "0%",
      x2: "100%",
      y2: "100%",
      children: [t.jsx("stop", {
        offset: "0%",
        stopColor: "#FFF1CC"
      }), t.jsx("stop", {
        offset: "50%",
        stopColor: "#EBCB68"
      }), t.jsx("stop", {
        offset: "100%",
        stopColor: "#B38A36"
      })]
    }), t.jsxs("linearGradient", {
      id: "goldDark",
      x1: "0%",
      y1: "0%",
      x2: "100%",
      y2: "100%",
      children: [t.jsx("stop", {
        offset: "0%",
        stopColor: "#C49B35"
      }), t.jsx("stop", {
        offset: "100%",
        stopColor: "#8A6715"
      })]
    })]
  }), t.jsxs("g", {
    children: [t.jsx("path", {
      d: "M 30 35 C 10 25, 5 45, 20 50 C 5 55, 10 75, 30 65 C 40 80, 55 65, 45 50 C 55 35, 40 20, 30 35 Z",
      fill: "url(#goldGrad)",
      stroke: "url(#goldDark)",
      strokeWidth: "1.5"
    }), t.jsx("circle", {
      cx: "30",
      cy: "50",
      r: "7",
      fill: "#FFFAFA",
      stroke: "url(#goldDark)",
      strokeWidth: "1.5"
    }), t.jsx("rect", {
      x: "45",
      y: "45",
      width: "6",
      height: "10",
      fill: "url(#goldGrad)",
      rx: "2",
      stroke: "url(#goldDark)",
      strokeWidth: "1"
    }), t.jsx("rect", {
      x: "50",
      y: "47.5",
      width: "38",
      height: "5",
      fill: "url(#goldGrad)",
      rx: "1",
      stroke: "url(#goldDark)",
      strokeWidth: "1"
    }), t.jsx("path", {
      d: "M 70 52.5 L 70 68 L 74 68 L 74 58 L 78 58 L 78 64 L 82 64 L 82 52.5 Z",
      fill: "url(#goldGrad)",
      stroke: "url(#goldDark)",
      strokeWidth: "1"
    }), t.jsx("circle", {
      cx: "88",
      cy: "50",
      r: "3.5",
      fill: "url(#goldGrad)",
      stroke: "url(#goldDark)",
      strokeWidth: "1"
    })]
  })]
});
const Rs = () => t.jsx("svg", {
  width: "140",
  height: "140",
  viewBox: "0 0 512 512",
  fill: "#FFFFFF",
  style: {
    filter: "drop-shadow(0 10px 15px rgba(255,255,255,0.9))"
  },
  children: t.jsx("path", {
    d: "M504.6 226.7l-94.8-51.5c-19.1-10.4-42.3-11.4-62.3-2.6l-50.6 22.3-12.8-57.7c-4.4-19.7-18-35.8-37-43.9L161.4 56.6c-27.1-11.5-57.9-1.9-74 22.9-15 23-14 53.6 2.5 75.7 30 40 78.4 86.8 111.4 116.7l-72.1 41.5-84.5-98.1C35 204 18 206 7.6 218.8c-10 12.3-9.5 30.6 1.4 42.4l112.5 122c19.1 20.7 46.8 32.8 75.1 32.8 8.1 0 16.2-1 24.3-3.1l114.2-29.6c46.6-12.1 82.2-46.7 96.6-92l49.3-157.9c4.2-13.4-1.6-28.1-14.4-34z"
  })
});
const Os = () => t.jsx("svg", {
  width: "100%",
  height: "100%",
  viewBox: "0 0 100 100",
  children: t.jsx("path", {
    d: "M 50 0 C 50 40, 60 50, 100 50 C 60 50, 50 60, 50 100 C 50 60, 40 50, 0 50 C 40 50, 50 40, 50 0 Z",
    fill: "#FFF",
    style: {
      filter: "drop-shadow(0 0 10px #FFF)"
    }
  })
});
const Ws = ({
  isLeft: e
}) => t.jsxs("svg", {
  width: "40",
  height: "120",
  viewBox: "0 0 40 120",
  style: {
    filter: "drop-shadow(2px 6px 10px rgba(0,0,0,0.4))"
  },
  children: [t.jsxs("defs", {
    children: [t.jsxs("linearGradient", {
      id: "escGrad-" + (e ? "l" : "r"),
      x1: "0%",
      y1: "0%",
      x2: "100%",
      y2: "100%",
      children: [t.jsx("stop", {
        offset: "0%",
        stopColor: "#FFF1CC"
      }), t.jsx("stop", {
        offset: "50%",
        stopColor: "#EBCB68"
      }), t.jsx("stop", {
        offset: "100%",
        stopColor: "#B38A36"
      })]
    }), t.jsxs("linearGradient", {
      id: "escDark-" + (e ? "l" : "r"),
      x1: "0%",
      y1: "0%",
      x2: "100%",
      y2: "100%",
      children: [t.jsx("stop", {
        offset: "0%",
        stopColor: "#D4AF37"
      }), t.jsx("stop", {
        offset: "100%",
        stopColor: "#8A6715"
      })]
    })]
  }), t.jsx("path", {
    d: "M 20 0 C 40 0, 40 20, 35 30 L 35 90 C 40 100, 40 120, 20 120 C 0 120, 0 100, 5 90 L 5 30 C 0 20, 0 0, 20 0 Z",
    fill: `url(#escGrad-${e ? "l" : "r"})`,
    stroke: `url(#escDark-${e ? "l" : "r"})`,
    strokeWidth: "1"
  }), t.jsx("path", {
    d: "M 20 4 C 34 4, 34 18, 31 28 L 31 92 C 34 102, 34 116, 20 116 C 6 116, 6 102, 9 92 L 9 28 C 6 18, 6 4, 20 4 Z",
    fill: "none",
    stroke: `url(#escDark-${e ? "l" : "r"})`,
    strokeWidth: "1",
    opacity: "0.6"
  }), t.jsx("rect", {
    x: e ? 20 : 4,
    y: "20",
    width: "16",
    height: "60",
    rx: "8",
    fill: `url(#escGrad-${e ? "l" : "r"})`,
    stroke: `url(#escDark-${e ? "l" : "r"})`,
    strokeWidth: "1",
    style: {
      filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))"
    }
  }), t.jsxs("g", {
    transform: "translate(20, 95)",
    children: [t.jsx("circle", {
      cx: "0",
      cy: "-3",
      r: "5",
      fill: "#111"
    }), t.jsx("path", {
      d: "M -4 -1 L 4 -1 L 5 10 L -5 10 Z",
      fill: "#111"
    })]
  })]
});
const zs = ({
  colorType: e = "gold",
  isLocked: s = false,
  children: a
}) => {
  const n = {
    locked: {
      primary: "#D9D9D9",
      secondary: "#B3B3B3",
      accent: "#E6E6E6",
      bg: "#F0F0F0"
    },
    bronze: {
      primary: "#FFB6C1",
      secondary: "#E87A7A",
      accent: "#FFF0F0",
      bg: "#FFF5F5"
    },
    silver: {
      primary: "#B8C6DB",
      secondary: "#859398",
      accent: "#FFFFFF",
      bg: "#F0F4F8"
    },
    gold: {
      primary: "#FFD700",
      secondary: "#B8860B",
      accent: "#FFFACD",
      bg: "#FFF9E6"
    },
    diamond: {
      primary: "#E0FFFF",
      secondary: "#00CED1",
      accent: "#FFFFFF",
      bg: "#F0FCFF"
    }
  };
  const i = s ? n.locked : n[e] || n.gold;
  return t.jsxs("div", {
    className: `cs-badge-wrapper-tier cs-badge-tier--${e}`,
    children: [t.jsxs("svg", {
      width: "120",
      height: "120",
      viewBox: "0 0 100 100",
      className: "cs-badge-evolving-svg",
      children: [t.jsx("defs", {
        children: t.jsxs("linearGradient", {
          id: `tierGem-${e}-${s}`,
          x1: "0%",
          y1: "0%",
          x2: "100%",
          y2: "100%",
          children: [t.jsx("stop", {
            offset: "0%",
            stopColor: i.accent
          }), t.jsx("stop", {
            offset: "50%",
            stopColor: i.primary
          }), t.jsx("stop", {
            offset: "100%",
            stopColor: i.secondary
          })]
        })
      }), (() => {
        if (s) {
          return null;
        }
        switch (e) {
          case "bronze":
            return t.jsxs("g", {
              opacity: "0.8",
              className: "cs-anim-sway",
              children: [t.jsx("path", {
                d: "M20 50 Q15 30 30 20",
                fill: "none",
                stroke: i.primary,
                strokeWidth: "1.5",
                strokeLinecap: "round"
              }), t.jsx("path", {
                d: "M80 50 Q85 30 70 20",
                fill: "none",
                stroke: i.primary,
                strokeWidth: "1.5",
                strokeLinecap: "round"
              }), t.jsx("circle", {
                cx: "28",
                cy: "22",
                r: "2.5",
                fill: i.primary
              }), t.jsx("circle", {
                cx: "72",
                cy: "22",
                r: "2.5",
                fill: i.primary
              }), t.jsx("circle", {
                cx: "50",
                cy: "50",
                r: "44",
                fill: "none",
                stroke: i.primary,
                strokeWidth: "1",
                strokeDasharray: "3 3"
              })]
            });
          case "silver":
            return t.jsxs("g", {
              className: "cs-anim-float-slow",
              children: [t.jsx("path", {
                d: "M30 40 C15 25 5 45 10 60 C15 70 25 65 30 55",
                fill: i.primary,
                opacity: "0.3"
              }), t.jsx("path", {
                d: "M30 45 C20 35 15 50 20 62",
                fill: "none",
                stroke: i.accent,
                strokeWidth: "1",
                opacity: "0.4"
              }), t.jsx("path", {
                d: "M70 40 C85 25 95 45 90 60 C85 70 75 65 70 55",
                fill: i.primary,
                opacity: "0.3"
              }), t.jsx("path", {
                d: "M70 45 C80 35 85 50 80 62",
                fill: "none",
                stroke: i.accent,
                strokeWidth: "1",
                opacity: "0.4"
              }), t.jsx("ellipse", {
                cx: "50",
                cy: "30",
                rx: "30",
                ry: "8",
                fill: "none",
                stroke: i.primary,
                strokeWidth: "1",
                opacity: "0.3"
              })]
            });
          case "gold":
            return t.jsxs("g", {
              children: [t.jsx("path", {
                d: "M30 30 L38 38 L50 25 L62 38 L70 30 L70 42 L30 42 Z",
                fill: i.primary
              }), t.jsx("circle", {
                cx: "50",
                cy: "25",
                r: "3",
                fill: i.accent
              }), t.jsx("circle", {
                cx: "30",
                cy: "30",
                r: "2",
                fill: i.accent
              }), t.jsx("circle", {
                cx: "70",
                cy: "30",
                r: "2",
                fill: i.accent
              }), Array.from({
                length: 10
              }).map((e, s) => t.jsx("path", {
                d: "M0 0 C4 -4 8 -2 8 0",
                fill: i.primary,
                opacity: "0.4",
                transform: `translate(${s < 5 ? 15 : 75}, ${40 + s % 5 * 8}) rotate(${s < 5 ? -30 : 210})`
              }, s))]
            });
          case "diamond":
            return t.jsxs("g", {
              className: "cs-anim-pulse-scale",
              children: [Array.from({
                length: 12
              }).map((e, s) => t.jsx("path", {
                d: "M50 0 L52 15 L48 15 Z",
                fill: i.primary,
                opacity: "0.25",
                transform: `rotate(${s * 30} 50 50)`
              }, s)), t.jsx("circle", {
                cx: "50",
                cy: "50",
                r: "48",
                fill: "none",
                stroke: i.primary,
                strokeWidth: "1.5",
                strokeDasharray: "5 5",
                opacity: "0.4"
              }), t.jsx("rect", {
                x: "20",
                y: "20",
                width: "4",
                height: "4",
                fill: i.accent,
                transform: "rotate(45 22 22)",
                opacity: "0.6"
              }), t.jsx("rect", {
                x: "80",
                y: "25",
                width: "3",
                height: "3",
                fill: i.accent,
                transform: "rotate(45 81.5 26.5)",
                opacity: "0.6"
              })]
            });
          default:
            return null;
        }
      })(), t.jsx("path", {
        d: "M50 75 C50 75 25 58 25 40 C25 28 36 24 50 35 C64 24 75 28 75 40 C75 58 50 75 50 75 Z",
        fill: `url(#tierGem-${e}-${s})`,
        stroke: i.accent,
        strokeWidth: "1.5",
        className: "cs-badge-main-heart"
      }), !s && t.jsx("path", {
        d: "M50 40 L50 65",
        stroke: "white",
        strokeWidth: "0.5",
        opacity: "0.2"
      })]
    }), t.jsx("div", {
      className: "cs-badge-icon-overlay " + (s ? "locked" : ""),
      children: a
    }), !s && e !== "bronze" && t.jsxs("div", {
      className: "cs-badge-ribbon-group",
      children: [t.jsx("div", {
        className: "cs-ribbon-tail left",
        style: {
          backgroundColor: i.secondary
        }
      }), t.jsx("div", {
        className: "cs-ribbon-tail right",
        style: {
          backgroundColor: i.secondary
        }
      }), e === "gold" || e === "diamond" ? t.jsx("div", {
        className: "cs-ribbon-center",
        style: {
          backgroundColor: i.primary
        }
      }) : null]
    })]
  });
};
const Bs = () => {
  const {
    currentScreen: a,
    showScreen: l
  } = I();
  const {
    t: r
  } = n();
  const o = a === "couples-screen";
  const {
    safeCurrentProfileUserId: c,
    currentProfileUser: d,
    activeChatIds: u,
    profileUsers: m,
    setCurrentProfileUserId: p
  } = E();
  const {
    characters: g
  } = $();
  const x = e.useMemo(() => {
    if (!g || !u) {
      return [];
    }
    const e = g.filter(e => e.type !== "npc");
    const t = e.filter(e => u.includes(String(e.id)) || u.includes(Number(e.id)));
    if (t.length > 0) {
      return t;
    } else {
      return e;
    }
  }, [g, u]);
  const {
    selectedCharId: v,
    setSelectedCharId: y,
    selectedChar: f
  } = F("couples", x);
  const j = e.useMemo(() => ({
    startDate: new Date().toISOString(),
    coverImage: "",
    logs: [],
    gifts: [],
    anniversaries: [],
    wishes: [],
    whispers: [],
    qa: []
  }), []);
  const [b, w] = e.useState(j);
  const [N, C] = e.useState(false);
  const [S, M] = e.useState(false);
  const [D, A] = e.useState(false);
  const [T, L] = e.useState(null);
  const [R, O] = e.useState("logs");
  const [W, z] = e.useState("");
  const [U, H] = e.useState(null);
  const [Y, V] = e.useState(false);
  const [J, X] = e.useState(false);
  const [ee, ne] = e.useState(false);
  const [ie, le] = e.useState(false);
  const [re, de] = e.useState("");
  const [ue, he] = e.useState(false);
  const [me, pe] = e.useState(false);
  const [ge, xe] = e.useState(false);
  const [ve, fe] = e.useState(false);
  const [je, be] = e.useState(false);
  const [we, Ne] = e.useState(false);
  const [ke, Ce] = e.useState(false);
  const [Se, Me] = e.useState(false);
  const [De, Ae] = e.useState(false);
  e.useEffect(() => {
    if (!Se) {
      Ae(false);
      return;
    }
    let e;
    let t;
    e = requestAnimationFrame(() => {
      t = requestAnimationFrame(() => {
        Ae(true);
      });
    });
    return () => {
      cancelAnimationFrame(e);
      cancelAnimationFrame(t);
    };
  }, [Se]);
  const Te = e.useRef(null);
  e.useEffect(() => {
    if (!o) {
      return;
    }
    if (!c) {
      return;
    }
    if (Te.current === c) {
      return;
    }
    Te.current = c;
    const e = c;
    let t = false;
    const s = () => new Promise(e => setTimeout(e, 0));
    const a = e => typeof e == "string" && e.startsWith("data:");
    const n = e => typeof e == "string" && !e.startsWith("data:") && e.length > 64;
    const l = async e => {
      try {
        return await i.put(e);
      } catch (t) {
        return null;
      }
    };
    (async () => {
      let i;
      try {
        i = await P.getCharIdsByUser(e);
      } catch (r) {
        return;
      }
      if (!t && Array.isArray(i) && i.length !== 0) {
        for (const o of i) {
          if (t) {
            return;
          }
          if (Te.current !== e) {
            return;
          }
          let i;
          try {
            i = await P.get(e, o);
          } catch (r) {
            continue;
          }
          if (!i) {
            continue;
          }
          if (t) {
            return;
          }
          if (Te.current !== e) {
            return;
          }
          const c = (i == null ? undefined : i.touchSettings) || {};
          const d = c.charImages || {};
          const u = Array.isArray(i == null ? undefined : i.customProps) ? i.customProps : [];
          const h = (i == null ? undefined : i.touchVoiceCache) || {};
          if (!a(d.normalIdle) && !a(d.normalPress) && !a(d.climaxIdle) && !a(d.climaxPress) && !a(c.customCharImage) && !u.some(e => a(e == null ? undefined : e.image)) && !Object.values(h).some(n)) {
            continue;
          }
          const m = {
            ...d
          };
          for (const n of ["normalIdle", "normalPress", "climaxIdle", "climaxPress"]) {
            if (!a(d[n])) {
              continue;
            }
            await s();
            if (t || Te.current !== e) {
              return;
            }
            const i = await l(d[n]);
            if (i != null) {
              m[n] = i;
            }
          }
          let p = c.customCharImage;
          if (a(c.customCharImage)) {
            await s();
            if (t || Te.current !== e) {
              return;
            }
            const a = await l(c.customCharImage);
            if (a != null) {
              p = a;
            }
          }
          const g = [];
          for (const n of u) {
            if (n && a(n.image)) {
              await s();
              if (t || Te.current !== e) {
                return;
              }
              const a = await l(n.image);
              if (a != null) {
                g.push({
                  ...n,
                  image: a
                });
                continue;
              }
            }
            g.push(n);
          }
          const x = {
            ...h
          };
          for (const [a, r] of Object.entries(h)) {
            if (!n(r)) {
              continue;
            }
            await s();
            if (t || Te.current !== e) {
              return;
            }
            const i = await l(r);
            if (i != null) {
              x[a] = i;
            }
          }
          try {
            await P.put(e, i.characterId, {
              ...i,
              touchSettings: {
                ...c,
                charImages: m,
                customCharImage: p
              },
              customProps: g,
              touchVoiceCache: x
            });
          } catch (r) {}
          await s();
        }
      }
    })();
    return () => {
      t = true;
    };
  }, [o, c]);
  e.useEffect(() => {
    if (!c || !v) {
      C(true);
      return;
    }
    w(j);
    C(false);
    ht.current = null;
    let e = false;
    (async () => {
      try {
        let a = await P.get(c, v);
        if (!a && d) {
          const e = [d.uid, d.id].filter(e => e && String(e) !== String(c));
          for (const s of e) {
            try {
              const e = await P.get(s, v);
              if (e) {
                a = e;
                await P.put(c, v, e);
                break;
              }
            } catch (t) {}
          }
        }
        if (!a) {
          const e = `nuojiji_couples_${c}_${v}`;
          const t = localStorage.getItem(e);
          if (t) {
            try {
              a = {
                ...j,
                ...JSON.parse(t)
              };
              await P.put(c, v, a);
              localStorage.removeItem(e);
            } catch (s) {
              console.warn("[Couples] localStorage 遷移失敗:", s);
            }
          }
        }
        if (e) {
          return;
        }
        const n = {
          ...j,
          ...(a || {})
        };
        w(n);
        if (n.isUnlocked && !n.animationShown) {
          Me(true);
          setTimeout(async () => {
            Me(false);
            const e = {
              ...n,
              animationShown: true
            };
            w(e);
            await P.put(c, v, e);
          }, 5500);
        }
      } catch (s) {
        console.error("[Couples] 資料載入失敗:", s);
        if (!e) {
          w(j);
        }
      } finally {
        if (!e) {
          C(true);
        }
      }
    })();
    return () => {
      e = true;
    };
  }, [c, v, j, d]);
  e.useEffect(() => {
    if (!c || !v) {
      return;
    }
    const e = async () => {
      try {
        const e = await P.get(c, v);
        if (e) {
          w({
            ...j,
            ...e
          });
        }
      } catch (e) {}
    };
    window.addEventListener("couples-data-updated", e);
    return () => window.removeEventListener("couples-data-updated", e);
  }, [c, v, j]);
  const Ie = e.useCallback(e => {
    w(e);
    if (c && v) {
      P.put(c, v, e);
    }
  }, [c, v]);
  const Fe = e.useRef(null);
  const Le = e.useCallback(() => {
    if (Fe.current) {
      clearTimeout(Fe.current);
      Fe.current = null;
    }
  }, []);
  const Oe = e.useMemo(() => {
    if (!b.startDate) {
      return 1;
    }
    const e = new Date(b.startDate);
    const t = new Date();
    const s = Math.abs(t - e);
    const a = Math.ceil(s / 86400000);
    if (a === 0) {
      return 1;
    } else {
      return a;
    }
  }, [b.startDate]);
  const We = e.useMemo(() => {
    var e;
    var t;
    var s;
    var a;
    var n;
    return (((e = b.logs) == null ? undefined : e.length) || 0) * 10 + (((t = b.gifts) == null ? undefined : t.length) || 0) * 20 + (((s = b.anniversaries) == null ? undefined : s.length) || 0) * 50 + (((a = b.qa) == null ? undefined : a.length) || 0) * 15 + (((n = b.whispers) == null ? undefined : n.length) || 0) * 10 + (b.touchCount || 0) * 2 + Oe * 2;
  }, [b, Oe]);
  const Be = Math.floor(We / 200) + 1;
  const _e = We % 200;
  const qe = Math.max(_e / 200 * 100, 5);
  const He = 200 - _e;
  const Qe = e.useCallback((e, t) => {
    const s = r(e);
    if (s !== e && s) {
      return s;
    } else {
      return t;
    }
  }, [r]);
  const Ge = e.useCallback(async e => {
    if (!e) {
      return;
    }
    const t = Qe("couplesDeleteStoryAchievMsg", "確定刪除劇情成就「{title}」？此操作無法復原。").replace("{title}", e.title || "");
    if (await h(t, Qe("couplesDeleteStoryAchievTitle", "刪除劇情成就"))) {
      w(t => {
        const s = Array.isArray(t == null ? undefined : t.storyAchievements) ? t.storyAchievements : [];
        const a = {
          ...t,
          storyAchievements: s.filter(t => t.id !== e.id)
        };
        if (c && v) {
          P.put(c, v, a);
        }
        return a;
      });
    }
  }, [c, v, Qe]);
  const Ze = e.useMemo(() => (b.logs || []).filter(e => {
    const t = String((e == null ? undefined : e.tag) || "").trim().toLowerCase();
    return t === "travel" || t === "旅行";
  }).length, [b.logs]);
  const ct = e.useMemo(() => {
    var e;
    var t;
    var s;
    var a;
    var n;
    var i;
    return (((e = b.logs) == null ? undefined : e.length) || 0) >= 1 && (((t = b.gifts) == null ? undefined : t.length) || 0) >= 1 && (((s = b.anniversaries) == null ? undefined : s.length) || 0) >= 1 && (((a = b.wishes) == null ? undefined : a.length) || 0) >= 1 && (((n = b.whispers) == null ? undefined : n.length) || 0) >= 1 && (((i = b.qa) == null ? undefined : i.length) || 0) >= 1;
  }, [b]);
  const dt = e.useMemo(() => {
    var e;
    var s;
    var a;
    var n;
    var i;
    var l;
    var r;
    var o;
    var c;
    var d;
    var u;
    var h;
    return [{
      id: "days_7",
      title: Qe("couplesAchievDays7", "七日之約"),
      desc: Qe("couplesAchievDays7Desc", "在一起滿一週"),
      icon: t.jsx(Z, {
        size: 28,
        strokeWidth: 2
      }),
      color: "bronze",
      unlocked: Oe >= 7
    }, {
      id: "days_30",
      title: Qe("couplesAchievDays30", "滿月之喜"),
      desc: Qe("couplesAchievDays30Desc", "在一起滿一個月"),
      icon: t.jsx(ae, {
        size: 28,
        strokeWidth: 2
      }),
      color: "silver",
      unlocked: Oe >= 30
    }, {
      id: "days_100",
      title: Qe("couplesAchievDays100", "百日紀念"),
      desc: Qe("couplesAchievDays100Desc", "相伴一百天"),
      icon: t.jsx(Ee, {
        size: 28,
        strokeWidth: 2
      }),
      color: "gold",
      unlocked: Oe >= 100
    }, {
      id: "days_365",
      title: Qe("couplesAchievDays365", "一載春秋"),
      desc: Qe("couplesAchievDays365Desc", "攜手走過一整年"),
      icon: t.jsx(Ve, {
        size: 28,
        strokeWidth: 2
      }),
      color: "diamond",
      unlocked: Oe >= 365
    }, {
      id: "days_500",
      title: Qe("couplesAchievDays500", "五百佳日"),
      desc: Qe("couplesAchievDays500Desc", "相伴五百個日夜"),
      icon: t.jsx(Je, {
        size: 28,
        strokeWidth: 2
      }),
      color: "gold",
      unlocked: Oe >= 500
    }, {
      id: "days_1000",
      title: Qe("couplesAchievDays1000", "千日之約"),
      desc: Qe("couplesAchievDays1000Desc", "走過一千個朝夕"),
      icon: t.jsx(Xe, {
        size: 28,
        strokeWidth: 2
      }),
      color: "diamond",
      unlocked: Oe >= 1000
    }, {
      id: "logs_10",
      title: Qe("couplesAchievLogs10", "回憶碎片"),
      desc: Qe("couplesAchievLogs10Desc", "記錄10條足跡"),
      icon: t.jsx(et, {
        size: 28,
        strokeWidth: 2
      }),
      color: "bronze",
      unlocked: (((e = b.logs) == null ? undefined : e.length) || 0) >= 10
    }, {
      id: "logs_50",
      title: Qe("couplesAchievLogs50", "點滴成河"),
      desc: Qe("couplesAchievLogs50Desc", "記錄50條足跡"),
      icon: t.jsx(Re, {
        size: 28,
        strokeWidth: 2
      }),
      color: "gold",
      unlocked: (((s = b.logs) == null ? undefined : s.length) || 0) >= 50
    }, {
      id: "level_5",
      title: Qe("couplesAchievLevel5", "情意綿綿"),
      desc: Qe("couplesAchievLevel5Desc", "愛的見證達Lv.5"),
      icon: t.jsx($e, {
        size: 28,
        strokeWidth: 2
      }),
      color: "silver",
      unlocked: Be >= 5
    }, {
      id: "level_10",
      title: Qe("couplesAchievLevel10", "情深似海"),
      desc: Qe("couplesAchievLevel10Desc", "愛的見證達Lv.10"),
      icon: t.jsx(tt, {
        size: 28,
        strokeWidth: 2
      }),
      color: "gold",
      unlocked: Be >= 10
    }, {
      id: "level_20",
      title: Qe("couplesAchievLevel20", "如膠似漆"),
      desc: Qe("couplesAchievLevel20Desc", "愛的見證達Lv.20"),
      icon: t.jsx(Pe, {
        size: 28,
        strokeWidth: 2
      }),
      color: "gold",
      unlocked: Be >= 20
    }, {
      id: "gifts_1",
      title: Qe("couplesAchievGifts1", "第一份驚喜"),
      desc: Qe("couplesAchievGifts1Desc", "收到第一份禮物"),
      icon: t.jsx(ce, {
        size: 28,
        strokeWidth: 2
      }),
      color: "bronze",
      unlocked: (((a = b.gifts) == null ? undefined : a.length) || 0) >= 1
    }, {
      id: "gifts_10",
      title: Qe("couplesAchievGifts10", "堆積如山"),
      desc: Qe("couplesAchievGifts10Desc", "收到十份禮物"),
      icon: t.jsx(st, {
        size: 28,
        strokeWidth: 2
      }),
      color: "gold",
      unlocked: (((n = b.gifts) == null ? undefined : n.length) || 0) >= 10
    }, {
      id: "gifts_30",
      title: Qe("couplesAchievGifts30", "禮尚往來"),
      desc: Qe("couplesAchievGifts30Desc", "交換三十份心意"),
      icon: t.jsx(q, {
        size: 28,
        strokeWidth: 2
      }),
      color: "diamond",
      unlocked: (((i = b.gifts) == null ? undefined : i.length) || 0) >= 30
    }, {
      id: "cities_1",
      title: Qe("couplesAchievCities1", "初次旅行"),
      desc: Qe("couplesAchievCities1Desc", "記錄第一次旅行"),
      icon: t.jsx(K, {
        size: 28,
        strokeWidth: 2
      }),
      color: "silver",
      unlocked: Ze >= 1
    }, {
      id: "cities_5",
      title: Qe("couplesAchievCities5", "遊歷四方"),
      desc: Qe("couplesAchievCities5Desc", "記錄五次旅行"),
      icon: t.jsx(at, {
        size: 28,
        strokeWidth: 2
      }),
      color: "gold",
      unlocked: Ze >= 5
    }, {
      id: "wishes_1",
      title: Qe("couplesAchievWishes1", "星語心願"),
      desc: Qe("couplesAchievWishes1Desc", "許下第一個心願"),
      icon: t.jsx(q, {
        size: 28,
        strokeWidth: 2
      }),
      color: "silver",
      unlocked: (((l = b.wishes) == null ? undefined : l.length) || 0) >= 1
    }, {
      id: "wishes_5",
      title: Qe("couplesAchievWishes5", "心願清單"),
      desc: Qe("couplesAchievWishes5Desc", "許下五個心願"),
      icon: t.jsx(ae, {
        size: 28,
        strokeWidth: 2
      }),
      color: "silver",
      unlocked: (((r = b.wishes) == null ? undefined : r.length) || 0) >= 5
    }, {
      id: "qa_5",
      title: Qe("couplesAchievQa5", "心有靈犀"),
      desc: Qe("couplesAchievQa5Desc", "完成5個默契問答"),
      icon: t.jsx(nt, {
        size: 28,
        strokeWidth: 2
      }),
      color: "bronze",
      unlocked: (((o = b.qa) == null ? undefined : o.length) || 0) >= 5
    }, {
      id: "qa_20",
      title: Qe("couplesAchievQa20", "默契滿分"),
      desc: Qe("couplesAchievQa20Desc", "完成20個默契問答"),
      icon: t.jsx(it, {
        size: 28,
        strokeWidth: 2
      }),
      color: "gold",
      unlocked: (((c = b.qa) == null ? undefined : c.length) || 0) >= 20
    }, {
      id: "diaries_10",
      title: Qe("couplesAchievDiaries10", "紙短情長"),
      desc: Qe("couplesAchievDiaries10Desc", "寫下10篇交換日記"),
      icon: t.jsx(Ke, {
        size: 28,
        strokeWidth: 2
      }),
      color: "gold",
      unlocked: (((d = b.whispers) == null ? undefined : d.length) || 0) >= 10
    }, {
      id: "diaries_30",
      title: Qe("couplesAchievDiaries30", "書信傳情"),
      desc: Qe("couplesAchievDiaries30Desc", "寫下30篇交換日記"),
      icon: t.jsx(Re, {
        size: 28,
        strokeWidth: 2
      }),
      color: "diamond",
      unlocked: (((u = b.whispers) == null ? undefined : u.length) || 0) >= 30
    }, {
      id: "touches_100",
      title: Qe("couplesAchievTouches100", "指尖溫度"),
      desc: Qe("couplesAchievTouches100Desc", "互動觸摸超過100次"),
      icon: t.jsx(lt, {
        size: 28,
        strokeWidth: 2
      }),
      color: "silver",
      unlocked: (b.touchCount || 0) >= 100
    }, {
      id: "touches_500",
      title: Qe("couplesAchievTouches500", "觸摸達人"),
      desc: Qe("couplesAchievTouches500Desc", "互動觸摸超過500次"),
      icon: t.jsx(lt, {
        size: 28,
        strokeWidth: 2
      }),
      color: "gold",
      unlocked: (b.touchCount || 0) >= 500
    }, {
      id: "anniversary_3",
      title: Qe("couplesAchievAnniversary3", "節日達人"),
      desc: Qe("couplesAchievAnniversary3Desc", "記錄3個紀念日"),
      icon: t.jsx(G, {
        size: 28,
        strokeWidth: 2
      }),
      color: "silver",
      unlocked: (((h = b.anniversaries) == null ? undefined : h.length) || 0) >= 3
    }, {
      id: "supreme",
      title: Qe("couplesAchievSupreme", "靈魂伴侶"),
      desc: Qe("couplesAchievSupremeDesc", "空間恩愛值達到Lv.50"),
      icon: t.jsx(oe, {
        size: 28,
        strokeWidth: 2
      }),
      color: "diamond",
      unlocked: Be >= 50
    }, {
      id: "hidden_cover",
      title: Qe("couplesAchievHiddenCover", "粉飾新居"),
      desc: Qe("couplesAchievHiddenCoverDesc", "為情侶空間設置封面照"),
      icon: t.jsx(Q, {
        size: 28,
        strokeWidth: 2
      }),
      color: "bronze",
      unlocked: !!b.coverImage,
      hidden: true
    }, {
      id: "hidden_allround",
      title: Qe("couplesAchievHiddenAllround", "面面俱到"),
      desc: Qe("couplesAchievHiddenAllroundDesc", "每個類別都留下足跡"),
      icon: t.jsx(ze, {
        size: 28,
        strokeWidth: 2
      }),
      color: "gold",
      unlocked: ct,
      hidden: true
    }, {
      id: "hidden_dedication",
      title: Qe("couplesAchievHiddenDedication", "風雨無阻"),
      desc: Qe("couplesAchievHiddenDedicationDesc", "攜手走過兩年時光"),
      icon: t.jsx(Xe, {
        size: 28,
        strokeWidth: 2
      }),
      color: "diamond",
      unlocked: Oe >= 730,
      hidden: true
    }, {
      id: "hidden_obsessed",
      title: Qe("couplesAchievHiddenObsessed", "欲罷不能"),
      desc: Qe("couplesAchievHiddenObsessedDesc", "互動觸摸超過1000次"),
      icon: t.jsx(rt, {
        size: 28,
        strokeWidth: 2
      }),
      color: "diamond",
      unlocked: (b.touchCount || 0) >= 1000,
      hidden: true
    }];
  }, [Qe, Oe, b, Be, ct]);
  const ut = e.useMemo(() => dt.filter(e => e.unlocked).length, [dt]);
  const ht = e.useRef(null);
  e.useEffect(() => {
    if (!N) {
      return;
    }
    if (!b.isUnlocked) {
      return;
    }
    const e = dt.filter(e => e.unlocked).map(e => e.id);
    const t = b.unlockedAchievementIds || [];
    if (ht.current === null) {
      ht.current = new Set(t.length > 0 ? t : e);
      if (t.length === 0 && e.length > 0) {
        Ie({
          ...b,
          unlockedAchievementIds: e
        });
      }
      return;
    }
    const s = e.filter(e => !ht.current.has(e));
    if (s.length > 0) {
      ht.current = new Set(e);
      Ie({
        ...b,
        unlockedAchievementIds: e
      });
      s.forEach(e => {
        const t = dt.find(t => t.id === e);
        if (t) {
          B({
            title: t.title,
            desc: t.desc,
            color: t.color,
            hidden: t.hidden
          });
        }
      });
    }
  }, [dt, b, Ie, N]);
  const mt = e.useCallback(e => (e == null ? undefined : e.image) || (e == null ? undefined : e.avatar) || "", []);
  const pt = () => {
    if (!W.trim()) {
      return;
    }
    let e = {
      ...b
    };
    const t = D ? R : T || "logs";
    const s = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      content: W.trim()
    };
    switch (t) {
      case "logs":
        e.logs = [s, ...e.logs];
        break;
      case "gifts":
        e.gifts = [{
          ...s,
          name: W.trim()
        }, ...e.gifts];
        break;
      case "anniversaries":
        e.anniversaries = [{
          ...s,
          title: W.trim()
        }, ...e.anniversaries];
        break;
      case "wishes":
        e.wishes = [{
          ...s,
          isDone: false
        }, ...e.wishes];
        break;
      case "whispers":
        e.whispers = [{
          ...s,
          sender: "user"
        }, ...e.whispers];
        break;
      case "qa":
        e.qa = [{
          id: Date.now().toString(),
          date: new Date().toISOString(),
          question: W.trim(),
          answer: ""
        }, ...e.qa];
    }
    Ie(e);
    z("");
    if (D) {
      A(false);
    }
  };
  const gt = e.useCallback(e => {
    y(e);
    X(false);
  }, []);
  const xt = e.useCallback(e => {
    Ie({
      ...b,
      coverImage: e
    });
    le(false);
  }, [b]);
  const vt = e.useCallback(() => {
    if (re) {
      Ie({
        ...b,
        startDate: new Date(re).toISOString()
      });
    }
    ne(false);
  }, [re, b]);
  const yt = e.useCallback(async () => {
    if (await h(r("couplesResetConfirm"))) {
      const e = {
        ...j,
        startDate: new Date().toISOString(),
        coverImage: ""
      };
      Ie(e);
      ne(false);
    }
  }, [r]);
  const ft = {
    logs: {
      label: r("couplesCatLogs"),
      icon: "📝"
    },
    gifts: {
      label: r("couplesCatGifts"),
      icon: "🎁",
      desc: r("couplesCatGiftsDesc")
    },
    anniversaries: {
      label: r("couplesCatAnniversaries"),
      icon: "📅",
      desc: r("couplesCatAnniversariesDesc")
    },
    wishes: {
      label: r("couplesCatWishes"),
      icon: "🌟",
      desc: r("couplesCatWishesDesc")
    },
    whispers: {
      label: r("couplesCatDiary"),
      icon: "📖",
      desc: r("couplesCatDiaryDesc")
    },
    qa: {
      label: r("couplesCatQa"),
      icon: "❓",
      desc: r("couplesCatQaDescAlt")
    }
  };
  const jt = e.useCallback(e => {
    p(e);
    V(false);
  }, [p]);
  const bt = () => Y ? t.jsx("div", {
    className: "cs-modal-overlay",
    onClick: () => V(false),
    children: t.jsxs("div", {
      className: "cs-modal-content cs-partner-picker",
      onClick: e => e.stopPropagation(),
      children: [t.jsxs("div", {
        className: "cs-modal-nav",
        children: [t.jsx("div", {
          className: "cs-modal-title",
          children: r("couplesSelectUser")
        }), t.jsx("button", {
          className: "cs-btn-text",
          onClick: () => V(false),
          children: r("couplesClose")
        })]
      }), t.jsx("div", {
        className: "cs-partner-list",
        children: m.map(e => {
          const s = e.uid || e.id;
          const a = String(s) === String(c);
          return t.jsxs("div", {
            className: "cs-partner-item " + (a ? "selected" : ""),
            onClick: () => jt(s),
            children: [t.jsx("img", {
              decoding: "async",
              className: "cs-partner-item-avatar",
              src: e.avatar || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23E8DFD8'/%3E%3Ctext x='50' y='65' font-size='50' text-anchor='middle' fill='%23999'%3E👤%3C/text%3E%3C/svg%3E",
              alt: ""
            }), t.jsxs("div", {
              className: "cs-partner-item-info",
              children: [t.jsx("div", {
                className: "cs-partner-item-name",
                children: e.name || e.displayName || s
              }), a && t.jsx("div", {
                className: "cs-partner-item-badge",
                children: r("couplesCurrentUser")
              })]
            }), a && t.jsx(se, {
              size: 18,
              color: "#C4B7A6"
            })]
          }, s);
        })
      })]
    })
  }) : null;
  const wt = () => J ? t.jsx("div", {
    className: "cs-modal-overlay",
    onClick: () => X(false),
    children: t.jsxs("div", {
      className: "cs-modal-content cs-partner-picker",
      onClick: e => e.stopPropagation(),
      children: [t.jsxs("div", {
        className: "cs-modal-nav",
        children: [t.jsx("div", {
          className: "cs-modal-title",
          children: r("couplesSelectPartner")
        }), t.jsx("button", {
          className: "cs-btn-text",
          onClick: () => X(false),
          children: r("couplesClose")
        })]
      }), t.jsxs("div", {
        className: "cs-partner-list",
        children: [x.length === 0 && t.jsx("p", {
          style: {
            textAlign: "center",
            color: "#999",
            padding: "24px 0"
          },
          children: r("couplesNoPartner")
        }), x.map(e => {
          const s = String(e.id) === String(v);
          return t.jsxs("div", {
            className: "cs-partner-item " + (s ? "selected" : ""),
            onClick: () => gt(e.id),
            children: [t.jsx("img", {
              decoding: "async",
              className: "cs-partner-item-avatar",
              src: mt(e) || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23E8DFD8'/%3E%3Ctext x='50' y='65' font-size='50' text-anchor='middle' fill='%23999'%3E👤%3C/text%3E%3C/svg%3E",
              alt: ""
            }), t.jsxs("div", {
              className: "cs-partner-item-info",
              children: [t.jsx("div", {
                className: "cs-partner-item-name",
                children: e.name
              }), s && t.jsx("div", {
                className: "cs-partner-item-badge",
                children: r("couplesCurrentPartner")
              })]
            }), s && t.jsx(se, {
              size: 18,
              color: "#C4B7A6"
            })]
          }, e.id);
        })]
      })]
    })
  }) : null;
  if (!N) {
    return t.jsx("div", {
      id: "couples-screen",
      className: "screen active",
      children: t.jsx("div", {
        className: "cs-loading-container",
        children: t.jsx("div", {
          className: "cs-loading-heart",
          children: t.jsx(Z, {
            size: 40,
            fill: "#FF5A5F",
            color: "#FF5A5F"
          })
        })
      })
    });
  }
  if (!b.isUnlocked && !Se) {
    return t.jsxs("div", {
      id: "couples-screen",
      className: "screen " + (o ? "active" : ""),
      children: [t.jsxs("div", {
        className: "cs-wrapper locked-mode",
        children: [t.jsx("div", {
          className: "cs-top-island",
          style: {
            border: "none",
            background: "transparent",
            boxShadow: "none",
            width: "100%"
          },
          children: t.jsx("button", {
            className: "cs-nav-btn",
            onClick: () => l("home-screen"),
            children: t.jsx(_, {
              size: 24,
              strokeWidth: 1.5
            })
          })
        }), t.jsxs("div", {
          className: "cs-locked-content",
          children: [t.jsx("div", {
            className: "cs-locked-icon-wrapper",
            children: t.jsx(Ye, {
              size: 48,
              color: "#D6A5A1",
              strokeWidth: 1.5
            })
          }), t.jsx("h2", {
            className: "cs-locked-title",
            children: r("couplesLockedTitle")
          }), t.jsx("p", {
            className: "cs-locked-desc",
            children: r("couplesLockedDesc").split("\n").map((e, a) => t.jsxs(s.Fragment, {
              children: [e, a === 0 && t.jsx("br", {})]
            }, a))
          }), t.jsxs("div", {
            className: "cs-locked-partners",
            children: [t.jsx("img", {
              decoding: "async",
              className: "cs-avatar-locked",
              src: (d == null ? undefined : d.avatar) || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23E8DFD8'/%3E%3Ctext x='50' y='65' font-size='50' text-anchor='middle' fill='%23999'%3E👤%3C/text%3E%3C/svg%3E",
              alt: "user",
              onClick: () => V(true),
              style: {
                cursor: "pointer"
              }
            }), t.jsx("div", {
              className: "cs-bridge-locked",
              children: t.jsx(Z, {
                size: 20,
                fill: "currentColor",
                color: "#D6A5A1"
              })
            }), t.jsx("img", {
              decoding: "async",
              className: "cs-avatar-locked",
              src: mt(f) || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23E8DFD8'/%3E%3Ctext x='50' y='65' font-size='50' text-anchor='middle' fill='%23999'%3E👤%3C/text%3E%3C/svg%3E",
              alt: "partner",
              onClick: () => X(true),
              style: {
                cursor: "pointer"
              }
            })]
          }), t.jsx("button", {
            className: "cs-apply-btn",
            onClick: () => {
              if (!(f == null ? undefined : f.id)) {
                return;
              }
              if (!c) {
                return;
              }
              const e = {
                targetCharId: String(f.id),
                targetUserId: String(c),
                type: "couples_invite"
              };
              localStorage.setItem("pending_couples_invite", JSON.stringify(e));
              window.dispatchEvent(new CustomEvent("pending-couples-invite-written"));
              window.dispatchEvent(new CustomEvent("open-chat-request", {
                detail: {
                  charId: f.id,
                  userId: c
                }
              }));
            },
            children: r("couplesLockedBtn")
          })]
        })]
      }), bt(), wt()]
    });
  }
  if (Se) {
    return t.jsx("div", {
      id: "couples-screen",
      className: "screen " + (o ? "active" : ""),
      children: t.jsxs("div", {
        className: "cs-unlock-animation-wrapper" + (De ? " opening" : ""),
        children: [t.jsxs("div", {
          className: "cs-door-left",
          children: [t.jsx("div", {
            className: "cs-door-panel top-panel",
            children: t.jsx("div", {
              className: "cs-door-ornament",
              children: t.jsx("div", {
                className: "cs-door-ornament-inner"
              })
            })
          }), t.jsx("div", {
            className: "cs-door-panel bottom-panel",
            children: t.jsx("div", {
              className: "cs-door-ornament",
              children: t.jsx("div", {
                className: "cs-door-ornament-inner"
              })
            })
          }), t.jsx("div", {
            className: "cs-door-escutcheon right",
            children: t.jsx(Ws, {
              isLeft: true
            })
          })]
        }), t.jsxs("div", {
          className: "cs-door-right",
          children: [t.jsx("div", {
            className: "cs-door-panel top-panel",
            children: t.jsx("div", {
              className: "cs-door-ornament",
              children: t.jsx("div", {
                className: "cs-door-ornament-inner"
              })
            })
          }), t.jsx("div", {
            className: "cs-door-panel bottom-panel",
            children: t.jsx("div", {
              className: "cs-door-ornament",
              children: t.jsx("div", {
                className: "cs-door-ornament-inner"
              })
            })
          }), t.jsx("div", {
            className: "cs-door-escutcheon left",
            children: t.jsx(Ws, {
              isLeft: false
            })
          })]
        }), t.jsxs("div", {
          className: "cs-key-container",
          children: [t.jsx("div", {
            className: "cs-key-left",
            children: t.jsx(Ls, {})
          }), t.jsx("div", {
            className: "cs-key-right",
            children: t.jsx(Ls, {})
          })]
        }), t.jsx("div", {
          className: "cs-dove cs-dove-1",
          children: t.jsx(Rs, {})
        }), t.jsx("div", {
          className: "cs-dove cs-dove-2",
          children: t.jsx(Rs, {})
        }), t.jsx("div", {
          className: "cs-dove cs-dove-3",
          children: t.jsx(Rs, {})
        }), t.jsx("div", {
          className: "cs-dove cs-dove-4",
          children: t.jsx(Rs, {})
        }), Array.from({
          length: 12
        }).map((e, s) => t.jsx("div", {
          className: "cs-petal cs-petal-" + s % 3
        }, `p-${s}`)), Array.from({
          length: 8
        }).map((e, s) => t.jsx("div", {
          className: "cs-sparkle cs-sparkle-" + s % 4,
          children: t.jsx(Os, {})
        }, `s-${s}`)), t.jsx("div", {
          className: "cs-wedding-text",
          children: "We are bound together"
        }), t.jsx("div", {
          className: "cs-white-flash"
        })]
      })
    });
  }
  const Nt = b.coverImage ? {
    backgroundImage: `url(${b.coverImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  } : {};
  return t.jsxs("div", {
    id: "couples-screen",
    className: "screen " + (o ? "active" : ""),
    children: [t.jsxs("div", {
      className: "cs-wrapper",
      children: [t.jsxs("div", {
        className: "cs-hero-layer",
        style: Nt,
        children: [t.jsxs("div", {
          className: "cs-top-island",
          children: [t.jsx("button", {
            className: "cs-nav-btn",
            onClick: () => l("home-screen"),
            children: t.jsx(_, {
              size: 24,
              strokeWidth: 1.5
            })
          }), t.jsx("div", {
            className: "cs-center-hero-group",
            children: t.jsxs("div", {
              className: "cs-avatars-row-top",
              children: [t.jsx("img", {
                decoding: "async",
                className: "cs-avatar-top left",
                src: (d == null ? undefined : d.avatar) || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23E8DFD8'/%3E%3Ctext x='50' y='65' font-size='50' text-anchor='middle' fill='%23999'%3E👤%3C/text%3E%3C/svg%3E",
                alt: "",
                onClick: e => {
                  e.stopPropagation();
                  V(true);
                }
              }), t.jsx("div", {
                className: "cs-avatar-bridge",
                children: t.jsx(Z, {
                  size: 10,
                  fill: "currentColor",
                  className: "cs-bridge-icon"
                })
              }), t.jsx("img", {
                decoding: "async",
                className: "cs-avatar-top right",
                src: mt(f) || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23E8DFD8'/%3E%3Ctext x='50' y='65' font-size='50' text-anchor='middle' fill='%23999'%3E👤%3C/text%3E%3C/svg%3E",
                alt: "",
                onClick: e => {
                  e.stopPropagation();
                  X(true);
                }
              })]
            })
          }), t.jsx("button", {
            className: "cs-nav-btn",
            onClick: () => {
              de(b.startDate ? new Date(b.startDate).toISOString().split("T")[0] : "");
              ne(true);
            },
            children: t.jsx(ye, {
              size: 20,
              strokeWidth: 1.5
            })
          })]
        }), t.jsxs("div", {
          className: "cs-hero-date-group",
          children: [t.jsx("div", {
            className: "cs-hero-label-center",
            children: r("couplesDaysLabel")
          }), t.jsxs("div", {
            className: "cs-hero-days-center",
            children: [Oe, t.jsx("span", {
              className: "cs-unit-center",
              children: r("couplesDaysUnit")
            })]
          }), t.jsxs("div", {
            className: "cs-level-text",
            children: [t.jsxs("span", {
              children: [r("couplesLevelPrefix"), Be, " ", r("couplesLevelBond")]
            }), t.jsx("span", {
              children: r("couplesLevelNextPoints").replace("{n}", He)
            })]
          }), t.jsx("div", {
            className: "cs-progress-container-hero",
            children: t.jsx("div", {
              className: "cs-progress-bar-fill",
              style: {
                width: `${qe}%`
              }
            })
          })]
        })]
      }), t.jsxs("div", {
        className: "cs-bottom-sheet",
        children: [t.jsx("div", {
          className: "cs-section-title",
          children: r("couplesSectionTimeline")
        }), t.jsxs("div", {
          className: "cs-timeline-entry-card",
          onClick: () => M(true),
          children: [t.jsxs("div", {
            className: "cs-timeline-entry-content",
            children: [t.jsx("h3", {
              children: r("couplesTimelineTitle")
            }), t.jsx("p", {
              children: r("couplesTimelineDesc")
            })]
          }), t.jsx("div", {
            className: "cs-timeline-entry-icon",
            children: t.jsx(_, {
              size: 20,
              style: {
                transform: "rotate(180deg)"
              },
              color: "#A39E93",
              strokeWidth: 2.5
            })
          })]
        }), t.jsx("div", {
          className: "cs-section-title",
          style: {
            marginTop: "4px"
          },
          children: r("couplesSectionWidgets")
        }), t.jsxs("div", {
          className: "cs-korean-aesthetic-layout",
          children: [t.jsxs("div", {
            className: "cs-art-row",
            children: [t.jsxs("div", {
              className: "cs-art-card cs-shape-arch",
              onClick: () => he(true),
              children: [t.jsx(Z, {
                size: 26,
                strokeWidth: 1.5,
                color: "#C4B7A6"
              }), t.jsxs("div", {
                className: "cs-art-content",
                children: [t.jsx("span", {
                  className: "cs-art-en",
                  children: "Anniversary"
                }), t.jsx("span", {
                  className: "cs-art-zh",
                  children: r("couplesCatAnniversaries")
                })]
              })]
            }), t.jsxs("div", {
              className: "cs-art-stack",
              children: [t.jsx("div", {
                className: "cs-art-card cs-shape-pill-wide",
                onClick: () => be(true),
                children: t.jsxs("div", {
                  className: "cs-art-content row",
                  children: [t.jsxs("div", {
                    style: {
                      alignItems: "flex-start"
                    },
                    children: [t.jsx("span", {
                      className: "cs-art-en",
                      children: "Exchange Diary"
                    }), t.jsx("span", {
                      className: "cs-art-zh",
                      children: r("couplesWidgetDiary")
                    })]
                  }), t.jsx(Ke, {
                    size: 20,
                    strokeWidth: 1.5,
                    color: "#C4B7A6"
                  })]
                })
              }), t.jsxs("div", {
                className: "cs-art-row cs-gap-small",
                children: [t.jsxs("div", {
                  className: "cs-art-card cs-shape-square",
                  onClick: () => pe(true),
                  children: [t.jsx(ae, {
                    size: 20,
                    strokeWidth: 1.5,
                    color: "#A39E93"
                  }), t.jsx("span", {
                    className: "cs-art-zh",
                    children: r("couplesCatWishes")
                  })]
                }), t.jsxs("div", {
                  className: "cs-art-card cs-shape-square",
                  onClick: () => xe(true),
                  children: [t.jsx(ce, {
                    size: 20,
                    strokeWidth: 1.5,
                    color: "#A39E93"
                  }), t.jsx("span", {
                    className: "cs-art-zh",
                    children: r("couplesCatGifts")
                  })]
                })]
              })]
            })]
          }), t.jsxs("div", {
            className: "cs-art-row cs-align-center",
            children: [t.jsxs("div", {
              className: "cs-art-card cs-shape-circle",
              onClick: () => fe(true),
              children: [t.jsx(q, {
                size: 28,
                strokeWidth: 1.5,
                color: "#C4B7A6"
              }), t.jsx("span", {
                className: "cs-art-zh",
                children: r("couplesWidgetTouch")
              })]
            }), t.jsxs("div", {
              className: "cs-art-stack",
              children: [t.jsx("div", {
                className: "cs-art-card cs-shape-pill-wide",
                onClick: () => Ce(true),
                children: t.jsxs("div", {
                  className: "cs-art-content row",
                  children: [t.jsxs("div", {
                    style: {
                      alignItems: "flex-start"
                    },
                    children: [t.jsx("span", {
                      className: "cs-art-en",
                      children: "Balcony"
                    }), t.jsx("span", {
                      className: "cs-art-zh",
                      children: r("couplesWidgetPlant")
                    })]
                  }), t.jsx(ot, {
                    size: 20,
                    strokeWidth: 1.5,
                    color: "#C4B7A6"
                  })]
                })
              }), t.jsx("div", {
                className: "cs-art-card cs-shape-pill-wide",
                onClick: () => Ne(true),
                children: t.jsxs("div", {
                  className: "cs-art-content row",
                  children: [t.jsxs("div", {
                    style: {
                      alignItems: "flex-start"
                    },
                    children: [t.jsx("span", {
                      className: "cs-art-en",
                      children: "TIME CAPSULE"
                    }), t.jsx("span", {
                      className: "cs-art-zh",
                      children: r("couplesWidgetTimeCapsule")
                    })]
                  }), t.jsx(nt, {
                    size: 20,
                    strokeWidth: 1.5,
                    color: "#C4B7A6"
                  })]
                })
              })]
            })]
          }), t.jsx("div", {
            className: "cs-art-row",
            children: t.jsx("div", {
              className: "cs-art-card cs-shape-pill-wide",
              style: {
                flex: 1
              },
              onClick: () => L("achievements"),
              children: t.jsxs("div", {
                className: "cs-art-content row",
                children: [t.jsxs("div", {
                  style: {
                    alignItems: "flex-start"
                  },
                  children: [t.jsx("span", {
                    className: "cs-art-en",
                    children: "Milestones"
                  }), t.jsx("span", {
                    className: "cs-art-zh",
                    children: r("couplesAchievementWall") || "成就牆"
                  })]
                }), t.jsx(tt, {
                  size: 20,
                  strokeWidth: 1.5,
                  color: "#C4B7A6"
                })]
              })
            })
          })]
        }), t.jsx("div", {
          style: {
            height: "max(24px, env(safe-area-inset-bottom))"
          }
        })]
      })]
    }), D && t.jsx("div", {
      className: "cs-modal-overlay",
      onClick: () => A(false),
      children: t.jsxs("div", {
        className: "cs-modal-content",
        onClick: e => e.stopPropagation(),
        children: [t.jsxs("div", {
          className: "cs-modal-nav",
          children: [t.jsx("div", {
            className: "cs-modal-title",
            children: r("couplesRecordTime")
          }), t.jsx("button", {
            className: "cs-btn-text",
            onClick: () => A(false),
            children: r("couplesClose")
          })]
        }), t.jsx("select", {
          className: "cs-select",
          value: R,
          onChange: e => O(e.target.value),
          children: Object.entries(ft).map(([e, s]) => t.jsx("option", {
            value: e,
            children: s.label
          }, e))
        }), t.jsx("input", {
          type: "text",
          className: "cs-input",
          placeholder: r("couplesInputPlaceholder"),
          value: W,
          onChange: e => z(e.target.value),
          onKeyDown: e => e.key === "Enter" && pt(),
          autoFocus: true
        }), t.jsx("button", {
          className: "cs-btn-submit",
          onClick: pt,
          children: r("couplesSubmit")
        })]
      })
    }), (() => {
      if (!T) {
        return null;
      }
      if (T === "achievements") {
        const e = dt.filter(e => !e.hidden);
        const s = dt.filter(e => e.hidden);
        const a = s.filter(e => e.unlocked).length;
        const n = b.storyAchievements || [];
        const i = dt.length + n.length;
        const l = ut + n.length;
        const r = e => {
          const s = e.hidden && !e.unlocked;
          return t.jsxs("div", {
            className: `cs-achiev-card ${e.unlocked ? "unlocked" : "locked"} ${e.hidden ? "hidden-achiev" : ""}`,
            children: [t.jsx("div", {
              className: "cs-achiev-badge-wrapper",
              children: t.jsx(zs, {
                colorType: s ? "locked" : e.color,
                isLocked: !e.unlocked,
                children: s ? t.jsx(nt, {
                  size: 28,
                  strokeWidth: 2
                }) : e.icon
              })
            }), t.jsxs("div", {
              className: "cs-achiev-info",
              children: [t.jsx("div", {
                className: "cs-achiev-title",
                children: s ? "???" : e.title
              }), t.jsx("div", {
                className: "cs-achiev-desc",
                children: s ? Qe("couplesAchievHiddenHint", "達成特定條件解鎖") : e.desc
              })]
            }), e.unlocked && t.jsx("div", {
              className: "cs-achiev-shine"
            }), e.hidden && e.unlocked && t.jsx("div", {
              className: "cs-achiev-hidden-badge",
              children: Qe("couplesAchievHiddenLabel", "隱藏")
            })]
          }, e.id);
        };
        const o = e => {
          const s = Fs[e.icon] || ae;
          const a = () => {
            Le();
            Fe.current = setTimeout(() => {
              Fe.current = null;
              Ge(e);
            }, 550);
          };
          return t.jsxs("div", {
            className: "cs-achiev-card unlocked story-achiev",
            onMouseDown: a,
            onMouseUp: Le,
            onMouseLeave: Le,
            onTouchStart: a,
            onTouchEnd: Le,
            onTouchCancel: Le,
            onTouchMove: Le,
            onContextMenu: t => {
              t.preventDefault();
              Le();
              Ge(e);
            },
            children: [t.jsx("div", {
              className: "cs-achiev-badge-wrapper",
              children: t.jsx(zs, {
                colorType: e.color || "bronze",
                isLocked: false,
                children: t.jsx(s, {
                  size: 28,
                  strokeWidth: 2
                })
              })
            }), t.jsxs("div", {
              className: "cs-achiev-info",
              children: [t.jsx("div", {
                className: "cs-achiev-title",
                children: e.title
              }), t.jsx("div", {
                className: "cs-achiev-desc",
                children: e.desc
              }), e.date && t.jsx("div", {
                className: "cs-achiev-date",
                children: new Date(e.date).toLocaleDateString()
              })]
            }), t.jsx("div", {
              className: "cs-achiev-shine"
            }), t.jsx("div", {
              className: "cs-achiev-hidden-badge",
              children: e.source === "chat" ? Qe("couplesAchievSourceChat", "線上") : e.source === "homeland" ? Qe("couplesAchievSourceHomeland", "家園") : Qe("couplesAchievSourceStory", "劇情")
            })]
          }, e.id);
        };
        return t.jsx("div", {
          className: "cs-modal-overlay",
          onClick: () => L(null),
          children: t.jsxs("div", {
            className: "cs-modal-content cs-achiev-modal",
            onClick: e => e.stopPropagation(),
            children: [t.jsxs("div", {
              className: "cs-achiev-header",
              children: [t.jsxs("div", {
                children: [t.jsx("div", {
                  className: "cs-modal-title",
                  children: Qe("couplesAchievementWall", "成就牆")
                }), t.jsxs("div", {
                  className: "cs-achiev-subtitle",
                  children: [l, " / ", i, " ", Qe("couplesUnlocked", "已解鎖")]
                })]
              }), t.jsx("button", {
                className: "cs-btn-text",
                onClick: () => L(null),
                children: Qe("couplesClose", "關閉")
              })]
            }), t.jsxs("div", {
              className: "cs-achiev-scroll",
              children: [t.jsx("div", {
                className: "cs-achievement-grid",
                children: e.map(r)
              }), n.length > 0 && t.jsxs("div", {
                className: "cs-achiev-hidden-section",
                children: [t.jsxs("div", {
                  className: "cs-achiev-hidden-header",
                  children: [t.jsx(q, {
                    size: 14
                  }), t.jsx("span", {
                    children: Qe("couplesAchievStorySection", "劇情成就")
                  }), t.jsx("span", {
                    className: "cs-achiev-hidden-count",
                    children: n.length
                  })]
                }), t.jsx("div", {
                  className: "cs-achievement-grid",
                  children: n.map(o)
                })]
              }), t.jsxs("div", {
                className: "cs-achiev-hidden-section",
                children: [t.jsxs("div", {
                  className: "cs-achiev-hidden-header",
                  children: [t.jsx(rt, {
                    size: 14
                  }), t.jsx("span", {
                    children: Qe("couplesAchievHiddenSection", "隱藏成就")
                  }), t.jsxs("span", {
                    className: "cs-achiev-hidden-count",
                    children: [a, " / ", s.length]
                  })]
                }), t.jsx("div", {
                  className: "cs-achievement-grid",
                  children: s.map(r)
                })]
              })]
            })]
          })
        });
      }
      const e = ft[T];
      const s = b[T] || [];
      return t.jsx("div", {
        className: "cs-modal-overlay",
        onClick: () => L(null),
        children: t.jsxs("div", {
          className: "cs-modal-content",
          onClick: e => e.stopPropagation(),
          style: {
            height: "80%"
          },
          children: [t.jsxs("div", {
            className: "cs-modal-nav",
            children: [t.jsx("div", {
              className: "cs-modal-title",
              children: e.label
            }), t.jsx("button", {
              className: "cs-btn-text",
              onClick: () => L(null),
              children: r("couplesClose")
            })]
          }), t.jsxs("div", {
            style: {
              display: "flex",
              gap: "8px",
              marginBottom: "24px"
            },
            children: [t.jsx("input", {
              className: "cs-input",
              style: {
                marginBottom: 0
              },
              placeholder: r("couplesAddPlaceholder").replace("{cat}", e.label),
              value: W,
              onChange: e => z(e.target.value),
              onKeyDown: e => e.key === "Enter" && pt()
            }), t.jsx("button", {
              className: "cs-btn-submit",
              style: {
                width: "80px",
                padding: "0",
                borderRadius: "16px"
              },
              onClick: pt,
              children: r("couplesSubmitBtn")
            })]
          }), t.jsx("div", {
            style: {
              flex: 1,
              overflowY: "auto"
            },
            children: s.length === 0 ? t.jsx("p", {
              style: {
                textAlign: "center",
                color: "#999",
                marginTop: "40px"
              },
              children: r("couplesEmptyList")
            }) : s.map(e => t.jsxs("div", {
              className: "cs-list-item-card",
              style: {
                padding: "16px",
                background: "var(--bg-secondary, #F9F9F9)",
                borderRadius: "16px",
                marginBottom: "12px",
                border: "1px solid rgba(0,0,0,0.02)"
              },
              children: [t.jsx("div", {
                style: {
                  fontSize: "15px"
                },
                children: e.content || e.name || e.title || e.question
              }), T === "qa" && t.jsxs("div", {
                style: {
                  fontSize: "13px",
                  color: "#FF5A5F",
                  marginTop: "8px",
                  padding: "8px",
                  background: "rgba(255,90,95,0.08)",
                  borderRadius: "8px"
                },
                children: [r("couplesQaAnswerPrefix"), e.answer || r("couplesQaWaiting")]
              })]
            }, e.id))
          })]
        })
      });
    })(), bt(), wt(), (() => {
      if (!ee) {
        return null;
      }
      const e = re || (b.startDate ? new Date(b.startDate).toISOString().split("T")[0] : "");
      return t.jsx("div", {
        className: "cs-modal-overlay",
        onClick: () => ne(false),
        children: t.jsxs("div", {
          className: "cs-modal-content cs-settings-panel",
          onClick: e => e.stopPropagation(),
          children: [t.jsxs("div", {
            className: "cs-modal-nav",
            children: [t.jsx("div", {
              className: "cs-modal-title",
              children: r("couplesSettings")
            }), t.jsx("button", {
              className: "cs-btn-text",
              onClick: () => ne(false),
              children: r("couplesClose")
            })]
          }), t.jsxs("div", {
            className: "cs-settings-list",
            children: [t.jsxs("div", {
              className: "cs-settings-item",
              onClick: () => le(true),
              children: [t.jsx("div", {
                className: "cs-settings-item-icon",
                children: t.jsx(Q, {
                  size: 20,
                  color: "#C4B7A6"
                })
              }), t.jsxs("div", {
                className: "cs-settings-item-body",
                children: [t.jsx("div", {
                  className: "cs-settings-item-title",
                  children: r("couplesSettingsCover")
                }), t.jsx("div", {
                  className: "cs-settings-item-desc",
                  children: r("couplesSettingsCoverDesc")
                })]
              }), t.jsx(Ue, {
                size: 18,
                color: "#ccc"
              })]
            }), t.jsxs("div", {
              className: "cs-settings-item cs-settings-date-item",
              children: [t.jsx("div", {
                className: "cs-settings-item-icon",
                children: t.jsx(G, {
                  size: 20,
                  color: "#C4B7A6"
                })
              }), t.jsxs("div", {
                className: "cs-settings-item-body",
                children: [t.jsx("div", {
                  className: "cs-settings-item-title",
                  children: r("couplesSettingsAnniversary")
                }), t.jsx("div", {
                  className: "cs-settings-item-desc",
                  children: r("couplesSettingsAnniversaryDesc")
                }), t.jsx("input", {
                  type: "date",
                  className: "cs-date-input",
                  value: e,
                  onChange: e => de(e.target.value),
                  onClick: e => e.stopPropagation()
                })]
              }), t.jsx("button", {
                className: "cs-settings-save-btn",
                onClick: vt,
                children: r("couplesSave")
              })]
            }), b.coverImage && t.jsxs("div", {
              className: "cs-settings-item",
              onClick: () => Ie({
                ...b,
                coverImage: ""
              }),
              children: [t.jsx("div", {
                className: "cs-settings-item-icon",
                children: t.jsx(Q, {
                  size: 20,
                  color: "#999"
                })
              }), t.jsx("div", {
                className: "cs-settings-item-body",
                children: t.jsx("div", {
                  className: "cs-settings-item-title",
                  children: r("couplesCoverRemove")
                })
              })]
            }), t.jsxs("div", {
              className: "cs-settings-item cs-settings-danger",
              onClick: yt,
              children: [t.jsx("div", {
                className: "cs-settings-item-icon",
                children: t.jsx(te, {
                  size: 20,
                  color: "#FF5A5F"
                })
              }), t.jsxs("div", {
                className: "cs-settings-item-body",
                children: [t.jsx("div", {
                  className: "cs-settings-item-title",
                  style: {
                    color: "#FF5A5F"
                  },
                  children: r("couplesSettingsReset")
                }), t.jsx("div", {
                  className: "cs-settings-item-desc",
                  children: r("couplesSettingsResetDesc")
                })]
              })]
            })]
          })]
        })
      });
    })(), t.jsx(k, {
      isOpen: ie,
      onClose: () => le(false),
      onImageSelect: xt,
      title: r("couplesSettingsCover")
    }), S && t.jsx(Dt, {
      onClose: () => M(false),
      couplesData: b,
      saveData: Ie,
      currentPartner: f,
      currentProfileUser: d
    }), ue && t.jsx(At, {
      onClose: () => he(false),
      couplesData: b,
      saveData: Ie
    }), me && t.jsx($t, {
      onClose: () => pe(false),
      couplesData: b,
      saveData: Ie
    }), ge && t.jsx(Pt, {
      onClose: () => xe(false),
      couplesData: b,
      saveData: Ie
    }), ve && t.jsx(gs, {
      onClose: () => fe(false),
      couplesData: b,
      saveData: Ie,
      currentPartner: f,
      userId: c,
      characterId: v
    }), je && t.jsx(fs, {
      onClose: () => be(false),
      couplesData: b,
      saveData: Ie,
      currentPartner: f,
      currentProfileUser: d
    }), we && t.jsx(Ns, {
      onClose: () => Ne(false),
      couplesData: b,
      saveData: Ie,
      currentPartner: f,
      currentProfileUser: d,
      safeCurrentProfileUserId: c
    }), ke && t.jsx(Ps, {
      onClose: () => Ce(false),
      couplesData: b,
      saveData: Ie,
      currentPartner: f,
      currentProfileUser: d
    })]
  });
};
export { Bs as default };