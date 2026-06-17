const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["./assets/main-BO9xa-SQ.js", "./assets/modulepreload-polyfill-YP0FEG5d.js", "./assets/native-pet-CTNtZgMA.js", "./assets/vendor-react-B2VXkTUV.js", "./assets/vendor-dexie-KLdnSHz2.js", "./assets/vendor-jszip-DU-5YDGO.js", "./assets/vendor-lucide-DBv09HTV.js", "./assets/native-pet-D9YoqRtr.css", "./assets/vendor-supabase-Bcpm_8qV.js", "./assets/main-C4gkqfD0.css", "./assets/NotificationBar-y-kP9VHv.css", "./assets/vendor-fonts-BglBY6By.css", "./assets/vendor-mammoth-BGDDh2nq.js"]) => i.map(i => d[i]);
import { bL as e, a as t, b as r, c as s, j as i, U as a, _ as n, B as o, G as l, aG as c, aY as d, I as p, a5 as h, A as x, z as u } from "./native-pet-CTNtZgMA.js";
import { r as g, j as m } from "./vendor-react-B2VXkTUV.js";
import { u as f } from "./useLastSelectedChar-BA2jreMl.js";
import { C as y } from "./ConfirmDialog-Dsc35sh0.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
import "./vendor-lucide-DBv09HTV.js";
function b({
  isOpen: t,
  characterId: r,
  onClose: s,
  onPick: i,
  t: a
}) {
  const [n, o] = g.useState([]);
  const [l, c] = g.useState(false);
  const [d, p] = g.useState(false);
  g.useEffect(() => {
    if (t && r != null) {
      c(true);
      o([]);
      e.getForCharacter(r).then(e => o(Array.isArray(e) ? e : [])).catch(() => o([])).finally(() => c(false));
    }
  }, [t, r]);
  if (!t) {
    return null;
  }
  return m.jsx("div", {
    onClick: s,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 12100,
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 16
    },
    children: m.jsxs("div", {
      onClick: e => e.stopPropagation(),
      style: {
        width: "100%",
        maxWidth: 460,
        maxHeight: "80vh",
        background: "var(--glass-bg-solid, #1c1c1e)",
        borderRadius: 14,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.1)"
      },
      children: [m.jsxs("div", {
        style: {
          padding: "14px 16px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        },
        children: [m.jsx("strong", {
          style: {
            fontSize: 15
          },
          children: a("refPickerTitle")
        }), m.jsx("button", {
          type: "button",
          onClick: s,
          style: {
            background: "none",
            border: "none",
            color: "inherit",
            fontSize: 20,
            cursor: "pointer"
          },
          children: "✕"
        })]
      }), m.jsx("div", {
        style: {
          flex: 1,
          overflowY: "auto",
          padding: 12
        },
        children: l ? m.jsx("div", {
          style: {
            textAlign: "center",
            padding: 40,
            color: "rgba(255,255,255,0.5)"
          },
          children: a("refPickerLoading")
        }) : n.length === 0 ? m.jsx("div", {
          style: {
            textAlign: "center",
            padding: 40,
            color: "rgba(255,255,255,0.5)",
            fontSize: 13,
            lineHeight: 1.6
          },
          children: a("refPickerEmpty")
        }) : m.jsx("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 8
          },
          children: n.map((e, t) => m.jsx("button", {
            type: "button",
            onClick: () => (async e => {
              if (!d) {
                p(true);
                try {
                  const t = await (async e => {
                    if (typeof e != "string") {
                      return null;
                    }
                    if (e.startsWith("data:")) {
                      return e;
                    }
                    try {
                      const t = await fetch(e);
                      const r = await t.blob();
                      return await new Promise((e, t) => {
                        const s = new FileReader();
                        s.onload = () => e(s.result);
                        s.onerror = () => t(s.error);
                        s.readAsDataURL(r);
                      });
                    } catch {
                      return null;
                    }
                  })(e.src);
                  if (t) {
                    i(t);
                  } else {
                    s();
                  }
                } finally {
                  p(false);
                }
              }
            })(e),
            disabled: d,
            style: {
              padding: 0,
              border: "none",
              borderRadius: 8,
              overflow: "hidden",
              aspectRatio: "1",
              cursor: d ? "wait" : "pointer",
              background: "rgba(255,255,255,0.05)",
              position: "relative"
            },
            children: m.jsx("img", {
              src: e.src,
              alt: "",
              loading: "lazy",
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }
            })
          }, t))
        })
      }), d && m.jsx("div", {
        style: {
          padding: "8px 16px",
          textAlign: "center",
          fontSize: 12,
          color: "rgba(255,255,255,0.6)"
        },
        children: a("refPickerSaving")
      })]
    })
  });
}
const v = {
  strong: {
    stroke: "#c9302c",
    labelKey: "relTypeStrong",
    dash: "none"
  },
  neutral: {
    stroke: "#c9a84c",
    labelKey: "relTypeNeutral",
    dash: "none"
  },
  dashed: {
    stroke: "#4a7fb5",
    labelKey: "relTypeDashed",
    dash: "8,4"
  },
  hostile: {
    stroke: "#8b0000",
    labelKey: "relTypeHostile",
    dash: "4,4"
  },
  user: {
    stroke: "#7b68ee",
    labelKey: "relTypeUser",
    dash: "none"
  },
  userToUser: {
    stroke: "#ff6b9d",
    dash: "none"
  },
  userToUserAlt: {
    stroke: "#a78bfa",
    dash: "6,3"
  },
  cohabit: {
    stroke: "#2bb673",
    labelKey: "relTypeCohabit",
    dash: "5,4"
  }
};
const j = "user_";
const k = e => typeof e == "string" && e.startsWith(j);
const w = e => e.slice(5);
const S = e => j + e;
const C = "relmap_user_positions";
const I = () => {
  try {
    return JSON.parse(localStorage.getItem(C) || "{}");
  } catch {
    return {};
  }
};
const N = ({
  characters: e = [],
  onUpdateCharacter: r,
  onClose: s,
  groups: i = [],
  profileUsers: a = [],
  userChatSettings: n = {},
  onUpdateUserRelationship: o,
  userLinks: l = [],
  onUpdateUserLink: c,
  cohabitPairs: d = []
}) => {
  var p;
  var h;
  var x;
  var u;
  var f;
  var y;
  var b;
  var j;
  var N;
  const {
    t: T
  } = t();
  const [R, P] = g.useState({
    x: 0,
    y: 0
  });
  const [A, $] = g.useState(1);
  const [M, B] = g.useState(null);
  const [z, L] = g.useState(null);
  const [W, O] = g.useState(null);
  const [E, U] = g.useState(false);
  const [G, F] = g.useState(null);
  const [D, _] = g.useState(false);
  const [X, Y] = g.useState(null);
  const [V, H] = g.useState(false);
  const K = g.useRef(null);
  const q = g.useRef(null);
  const [Q, J] = g.useState(I);
  const Z = g.useRef({
    type: null,
    nodeId: null,
    startX: 0,
    startY: 0,
    startPosX: 0,
    startPosY: 0
  });
  const ee = g.useRef({
    active: false,
    dist: 0,
    initialZoom: 1
  });
  const te = g.useRef(1);
  te.current = A;
  const re = g.useRef(false);
  const se = g.useRef(null);
  se.current = M;
  const ie = g.useRef(e);
  ie.current = e;
  const ae = g.useRef({});
  const ne = g.useRef(n);
  ne.current = n;
  const oe = g.useMemo(() => i.filter(e => e !== "All" && e !== "NPCs"), [i]);
  const [le, ce] = g.useState(() => oe[0] || "Default");
  g.useEffect(() => {
    if (oe.length > 0 && !oe.includes(le)) {
      ce(oe[0]);
    }
  }, [oe]);
  const [de, pe] = g.useState(false);
  const he = g.useMemo(() => a && a.length ? (X ? a.filter(e => (e.uid || e.id) === X) : a).map(e => ({
    id: S(e.uid || e.id),
    realUid: e.uid || e.id,
    name: e.name || T("relMapUserBadge"),
    image: e.image || e.avatar || null,
    isUser: true,
    type: "user"
  })) : [], [a, X, T]);
  const xe = g.useMemo(() => {
    if (!Array.isArray(e)) {
      return [...he];
    }
    const t = e.filter(e => e && e.type !== "npc" && (e.group || "Other") === le);
    const r = new Set(t.map(e => e.id));
    const s = e.filter(e => e && e.type === "npc" && Array.isArray(e.boundTo) && e.boundTo.some(e => r.has(e)));
    return [...he, ...t, ...s];
  }, [e, le, he]);
  g.useEffect(() => {
    B(null);
    L(null);
    O(null);
  }, [le]);
  g.useEffect(() => {
    if (W) {
      const e = W.userToCharLabel && W.userToCharLabel === W.charToUserLabel;
      U(!!e);
    } else {
      U(false);
    }
  }, [W]);
  g.useEffect(() => {
    if (G) {
      const e = G.relationship && G.relationship === G.reverseRelationship;
      _(!!e);
    } else {
      _(false);
    }
  }, [G == null ? undefined : G.uid1, G == null ? undefined : G.uid2]);
  g.useEffect(() => {
    if (z || W) {
      const e = setTimeout(() => {
        if (q.current) {
          q.current.focus();
        }
      }, 80);
      return () => clearTimeout(e);
    }
  }, [z, W, E]);
  const ue = g.useMemo(() => {
    const e = {};
    let t = 0;
    const r = Q;
    xe.forEach(s => {
      if (s.isUser) {
        const i = r[s.id];
        if (i && typeof i.x == "number") {
          e[s.id] = i;
        } else {
          const r = he.findIndex(e => e.id === s.id);
          e[s.id] = {
            x: 60 + r * 140,
            y: -100
          };
          t++;
        }
      } else if ((s == null ? undefined : s.mapPosition) && typeof s.mapPosition.x == "number") {
        e[s.id] = s.mapPosition;
      } else {
        const r = t % 5;
        const i = Math.floor(t / 5);
        e[s.id] = {
          x: r * 180 + 60,
          y: i * 180 + 60
        };
        t++;
      }
    });
    return e;
  }, [xe, Q, he]);
  ae.current = ue;
  const ge = e => e.touches && e.touches.length > 0 ? {
    x: e.touches[0].clientX,
    y: e.touches[0].clientY
  } : {
    x: e.clientX,
    y: e.clientY
  };
  const me = e => {
    if (!e.touches || e.touches.length < 2) {
      return 0;
    }
    const t = e.touches[0].clientX - e.touches[1].clientX;
    const r = e.touches[0].clientY - e.touches[1].clientY;
    return Math.sqrt(t * t + r * r);
  };
  const fe = e => {
    if (e.target.closest(".map-node") || e.target.closest(".connection-group") || e.target.closest(".modal-prevent-drag") || e.target.closest(".map-ctrl-btn") || e.target.closest(".map-legend") || e.target.closest(".map-header") || e.target.closest(".map-legend-toggle") || e.target.closest(".solo-view-picker")) {
      return;
    }
    if (e.touches && e.touches.length === 2) {
      ee.current = {
        active: true,
        dist: me(e),
        initialZoom: te.current
      };
      return;
    }
    re.current = false;
    const t = ge(e);
    Z.current = {
      type: "map",
      nodeId: null,
      startX: t.x,
      startY: t.y,
      startPosX: t.x,
      startPosY: t.y
    };
  };
  const ye = (e, t) => {
    e.stopPropagation();
    re.current = false;
    const r = ge(e);
    Z.current = {
      type: "node",
      nodeId: t,
      startX: r.x,
      startY: r.y,
      startPosX: r.x,
      startPosY: r.y
    };
  };
  const be = e => {
    if (e.touches && e.touches.length === 2 && ee.current.active) {
      const t = me(e) / ee.current.dist;
      const r = Math.min(Math.max(ee.current.initialZoom * t, 0.3), 2.5);
      $(r);
      return;
    }
    const t = Z.current;
    if (!t.type) {
      return;
    }
    const s = ge(e);
    const i = s.x - t.startX;
    const a = s.y - t.startY;
    if (Math.abs(s.x - t.startPosX) + Math.abs(s.y - t.startPosY) > 8) {
      re.current = true;
    }
    if (t.type === "map") {
      P(e => ({
        x: e.x + i,
        y: e.y + a
      }));
      Z.current.startX = s.x;
      Z.current.startY = s.y;
    }
    if (t.type === "node") {
      const e = i / te.current;
      const n = a / te.current;
      const o = ae.current[t.nodeId] || {
        x: 60,
        y: 60
      };
      const l = {
        x: o.x + e,
        y: o.y + n
      };
      if (k(t.nodeId)) {
        J(e => {
          const r = {
            ...e,
            [t.nodeId]: l
          };
          (e => {
            try {
              localStorage.setItem(C, JSON.stringify(e));
            } catch {}
          })(r);
          return r;
        });
      } else {
        const e = ie.current.find(e => e.id === t.nodeId);
        if (e) {
          r(t.nodeId, {
            ...e,
            mapPosition: l
          });
        }
      }
      Z.current.startX = s.x;
      Z.current.startY = s.y;
    }
  };
  const ve = () => {
    if (ee.current.active) {
      ee.current.active = false;
    } else {
      Z.current = {
        type: null,
        nodeId: null,
        startX: 0,
        startY: 0,
        startPosX: 0,
        startPosY: 0
      };
    }
  };
  const je = g.useCallback((e, t, r, s) => {
    if (o) {
      o(e, t, r, s);
    }
    O(null);
  }, [o]);
  g.useEffect(() => {
    const e = K.current;
    if (!e) {
      return;
    }
    const t = e => {
      e.preventDefault();
      const t = e.deltaY > 0 ? -0.08 : 0.08;
      $(e => Math.min(Math.max(e + t, 0.3), 2.5));
    };
    e.addEventListener("wheel", t, {
      passive: false
    });
    return () => e.removeEventListener("wheel", t);
  }, []);
  const ke = g.useMemo(() => {
    if (!M) {
      return "";
    }
    const e = xe.find(e => e.id === M);
    return (e == null ? undefined : e.name) || "";
  }, [M, xe]);
  const we = t => {
    var r;
    if (k(t)) {
      const e = a.find(e => (e.uid || e.id) === w(t));
      return (e == null ? undefined : e.name) || T("relMapUserBadge");
    }
    return ((r = e.find(e => e.id === t)) == null ? undefined : r.name) || "?";
  };
  return m.jsxs("div", {
    className: "relationship-map-fullscreen",
    children: [m.jsxs("div", {
      className: "map-header",
      style: {
        paddingTop: "calc(10px + var(--nuo-safe-top))"
      },
      children: [m.jsxs("div", {
        className: "map-header-left",
        children: [m.jsx("div", {
          className: "map-header-back",
          onClick: s,
          children: m.jsx("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            children: m.jsx("path", {
              d: "M19 12H5M12 19l-7-7 7-7"
            })
          })
        }), m.jsx("span", {
          className: "map-header-title",
          children: T("relMapTitle")
        })]
      }), m.jsx("div", {
        className: "map-header-groups hide-scrollbar",
        children: oe.map(e => m.jsx("div", {
          className: "map-group-pill " + (le === e ? "active" : ""),
          onClick: () => ce(e),
          children: e
        }, e))
      }), a.length > 1 && m.jsxs("div", {
        className: "map-group-pill",
        style: {
          borderColor: X ? "#7b68ee" : undefined,
          color: X ? "#7b68ee" : undefined,
          background: X ? "rgba(123,104,238,0.15)" : undefined,
          position: "relative"
        },
        onClick: () => H(e => !e),
        children: [m.jsxs("svg", {
          width: "14",
          height: "14",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          style: {
            marginRight: 4,
            verticalAlign: "middle"
          },
          children: [m.jsx("path", {
            d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
          }), m.jsx("circle", {
            cx: "12",
            cy: "7",
            r: "4"
          })]
        }), X ? ((p = a.find(e => (e.uid || e.id) === X)) == null ? undefined : p.name) || T("relMapSoloView") : T("relMapSoloViewAll")]
      })]
    }), V && m.jsx("div", {
      className: "solo-view-picker modal-prevent-drag",
      onClick: () => H(false),
      children: m.jsxs("div", {
        className: "solo-view-picker-menu",
        onClick: e => e.stopPropagation(),
        children: [m.jsx("div", {
          className: "solo-view-picker-item " + (X ? "" : "active"),
          onClick: () => {
            Y(null);
            H(false);
          },
          children: T("relMapSoloViewAll")
        }), a.map(e => {
          const t = e.uid || e.id;
          return m.jsx("div", {
            className: "solo-view-picker-item " + (X === t ? "active" : ""),
            onClick: () => {
              Y(t);
              H(false);
            },
            children: e.name || t
          }, t);
        })]
      })
    }), m.jsxs("div", {
      ref: K,
      className: "relationship-map-container",
      onMouseDown: fe,
      onMouseMove: be,
      onMouseUp: ve,
      onTouchStart: fe,
      onTouchMove: be,
      onTouchEnd: ve,
      onClick: e => {
        if (!e.target.closest(".map-node") && !e.target.closest(".connection-group") && !e.target.closest(".modal-prevent-drag") && !e.target.closest(".map-ctrl-btn") && !e.target.closest(".map-legend") && !e.target.closest(".map-header") && !e.target.closest(".map-legend-toggle") && !e.target.closest(".solo-view-picker")) {
          if (re.current) {
            re.current = false;
          } else {
            B(null);
          }
        }
      },
      style: {
        touchAction: "none"
      },
      children: [m.jsx("div", {
        className: "map-overlay-texture"
      }), m.jsx("div", {
        className: "map-instructions " + (M ? "active-instruction" : ""),
        children: M ? T("relMapInstActive", {
          name: ke
        }) : T("relMapInstDefault")
      }), m.jsx("div", {
        className: "map-legend-toggle",
        onClick: () => pe(e => !e),
        children: m.jsxs("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: [m.jsx("circle", {
            cx: "12",
            cy: "12",
            r: "10"
          }), m.jsx("line", {
            x1: "12",
            y1: "16",
            x2: "12",
            y2: "12"
          }), m.jsx("line", {
            x1: "12",
            y1: "8",
            x2: "12.01",
            y2: "8"
          })]
        })
      }), de && m.jsxs("div", {
        className: "map-legend",
        children: [m.jsx("div", {
          className: "map-legend-title",
          children: T("relMapLegendTitle")
        }), Object.entries(v).map(([e, t]) => m.jsxs("div", {
          className: "map-legend-item",
          children: [m.jsx("div", {
            className: "map-legend-line",
            style: {
              background: t.dash !== "none" ? "transparent" : t.stroke,
              borderTop: t.dash !== "none" ? `2px dashed ${t.stroke}` : "none",
              height: t.dash !== "none" ? 0 : 2
            }
          }), m.jsx("span", {
            children: T(t.labelKey)
          })]
        }, e))]
      }), m.jsxs("div", {
        style: {
          transform: `translate(${R.x}px, ${R.y}px) scale(${A})`,
          transformOrigin: "0 0",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0
        },
        children: [m.jsxs("svg", {
          className: "connections-layer",
          style: {
            overflow: "visible",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0
          },
          children: [m.jsx("defs", {
            children: Object.entries(v).map(([e, t]) => m.jsx("marker", {
              id: `arrow-${e}`,
              viewBox: "0 0 16 16",
              refX: "78",
              refY: "8",
              markerUnits: "userSpaceOnUse",
              markerWidth: "16",
              markerHeight: "16",
              orient: "auto-start-reverse",
              children: m.jsx("path", {
                d: "M 2 2 L 14 8 L 2 14 Z",
                fill: e === "user" ? "#e8e0f5" : "#f5e6d3",
                stroke: t.stroke,
                strokeWidth: "1.5",
                strokeLinejoin: "round"
              })
            }, `arrow-${e}`))
          }), (() => {
            const e = [];
            xe.forEach(t => {
              if (t.isUser) {
                return;
              }
              if (!t.relationships || !Array.isArray(t.relationships)) {
                return;
              }
              const r = ue[t.id] || {
                x: 60,
                y: 60
              };
              t.relationships.forEach(s => {
                const i = xe.find(e => e.id === s.targetId);
                if (!i || i.isUser) {
                  return;
                }
                const a = ue[i.id] || {
                  x: 60,
                  y: 60
                };
                const n = r.x + 55;
                const o = r.y + 70;
                const l = a.x + 55;
                const c = a.y + 70;
                const d = (n + l) / 2;
                const p = (o + c) / 2;
                const h = v[s.type] || v.neutral;
                const x = l - n;
                const u = c - o;
                const g = !!s.isMutual;
                if (g) {
                  const e = (i.relationships || []).find(e => e.targetId === t.id);
                  if (e && e.isMutual && String(t.id) > String(s.targetId)) {
                    return;
                  }
                }
                const f = g ? 0 : 0.12;
                const y = d + u * f;
                const b = p - x * f;
                const j = d + u * f * 0.6;
                const k = p - x * f * 0.6;
                const w = `url(#arrow-${s.type})`;
                const S = g ? w : "none";
                e.push(m.jsxs("g", {
                  className: "connection-group",
                  onClick: e => {
                    e.stopPropagation();
                    L({
                      sourceId: t.id,
                      targetId: s.targetId,
                      ...s,
                      isMutual: !!s.isMutual
                    });
                  },
                  children: [m.jsx("path", {
                    d: `M ${n} ${o} Q ${y} ${b} ${l} ${c}`,
                    fill: "none",
                    stroke: "transparent",
                    strokeWidth: "20"
                  }), m.jsx("path", {
                    d: `M ${n} ${o + 2} Q ${y} ${b + 2} ${l} ${c + 2}`,
                    fill: "none",
                    stroke: "rgba(0,0,0,0.3)",
                    strokeWidth: "3",
                    className: "connection-shadow"
                  }), m.jsx("path", {
                    d: `M ${n} ${o} Q ${y} ${b} ${l} ${c}`,
                    fill: "none",
                    stroke: h.stroke,
                    strokeWidth: s.type === "strong" ? 3 : 2,
                    strokeDasharray: h.dash,
                    strokeOpacity: "0.85",
                    strokeLinecap: "round",
                    className: "connection-line",
                    style: {
                      color: h.stroke
                    },
                    markerEnd: w,
                    markerStart: S
                  }), m.jsxs("g", {
                    transform: `translate(${j},${k})`,
                    children: [m.jsx("rect", {
                      x: "-38",
                      y: "-11",
                      width: "76",
                      height: "22",
                      rx: "2",
                      fill: "#f5e6d3",
                      stroke: "#a08050",
                      strokeWidth: "0.5",
                      className: "connection-label-bg",
                      transform: "rotate(-3)"
                    }), m.jsx("circle", {
                      cx: "0",
                      cy: "-10",
                      r: "3",
                      fill: h.stroke,
                      stroke: "rgba(0,0,0,0.3)",
                      strokeWidth: "0.5",
                      className: "connection-label-pin",
                      transform: "rotate(-3)"
                    }), m.jsx("text", {
                      x: "0",
                      y: "5",
                      className: "connection-label-text",
                      transform: "rotate(-3)",
                      children: s.label
                    })]
                  })]
                }, `${t.id}-${s.targetId}`));
              });
            });
            return e;
          })(), (() => {
            const e = [];
            const t = v.user;
            for (const r of he) {
              const s = r.realUid;
              const i = n[s];
              if (!i) {
                continue;
              }
              const a = ue[r.id];
              if (a) {
                for (const [r, n] of Object.entries(i)) {
                  const i = (n == null ? undefined : n.relationship) || "";
                  const o = (n == null ? undefined : n.charToUserRelationship) || "";
                  if (!i && !o) {
                    continue;
                  }
                  const l = xe.find(e => !e.isUser && String(e.id) === String(r));
                  if (!l) {
                    continue;
                  }
                  const c = ue[l.id];
                  if (!c) {
                    continue;
                  }
                  const d = a.x + 55;
                  const p = a.y + 70;
                  const h = c.x + 55;
                  const x = c.y + 70;
                  const u = h - d;
                  const g = x - p;
                  const f = (d + h) / 2;
                  const y = (p + x) / 2;
                  const b = "url(#arrow-user)";
                  const v = !!i && !!o;
                  const j = v && i === o;
                  const k = e => {
                    e.stopPropagation();
                    O({
                      userId: s,
                      charId: String(r),
                      userToCharLabel: i,
                      charToUserLabel: o
                    });
                  };
                  if (v && !j) {
                    const a = 0.12;
                    const n = f + g * a;
                    const l = y - u * a;
                    const c = f + g * a * 0.6;
                    const v = y - u * a * 0.6;
                    e.push(m.jsxs("g", {
                      className: "connection-group user-connection",
                      onClick: k,
                      children: [m.jsx("path", {
                        d: `M ${d} ${p} Q ${n} ${l} ${h} ${x}`,
                        fill: "none",
                        stroke: "transparent",
                        strokeWidth: "20"
                      }), m.jsx("path", {
                        d: `M ${d} ${p + 2} Q ${n} ${l + 2} ${h} ${x + 2}`,
                        fill: "none",
                        stroke: "rgba(0,0,0,0.3)",
                        strokeWidth: "3",
                        className: "connection-shadow"
                      }), m.jsx("path", {
                        d: `M ${d} ${p} Q ${n} ${l} ${h} ${x}`,
                        fill: "none",
                        stroke: t.stroke,
                        strokeWidth: "2.5",
                        strokeDasharray: t.dash,
                        strokeOpacity: "0.9",
                        strokeLinecap: "round",
                        className: "connection-line",
                        style: {
                          color: t.stroke
                        },
                        markerEnd: b
                      }), m.jsxs("g", {
                        transform: `translate(${c},${v})`,
                        children: [m.jsx("rect", {
                          x: "-38",
                          y: "-11",
                          width: "76",
                          height: "22",
                          rx: "2",
                          fill: "#e8e0f5",
                          stroke: "#7b68ee",
                          strokeWidth: "0.5",
                          className: "connection-label-bg",
                          transform: "rotate(-3)"
                        }), m.jsx("circle", {
                          cx: "0",
                          cy: "-10",
                          r: "3",
                          fill: t.stroke,
                          stroke: "rgba(0,0,0,0.3)",
                          strokeWidth: "0.5",
                          className: "connection-label-pin",
                          transform: "rotate(-3)"
                        }), m.jsx("text", {
                          x: "0",
                          y: "5",
                          className: "connection-label-text",
                          style: {
                            fill: "#3d2b6e"
                          },
                          transform: "rotate(-3)",
                          children: i
                        })]
                      })]
                    }, `user-${s}-${r}-u2c`));
                    const j = f - g * a;
                    const w = y + u * a;
                    const S = f - g * a * 0.6;
                    const C = y + u * a * 0.6;
                    e.push(m.jsxs("g", {
                      className: "connection-group user-connection",
                      onClick: k,
                      children: [m.jsx("path", {
                        d: `M ${h} ${x} Q ${j} ${w} ${d} ${p}`,
                        fill: "none",
                        stroke: "transparent",
                        strokeWidth: "20"
                      }), m.jsx("path", {
                        d: `M ${h} ${x + 2} Q ${j} ${w + 2} ${d} ${p + 2}`,
                        fill: "none",
                        stroke: "rgba(0,0,0,0.3)",
                        strokeWidth: "3",
                        className: "connection-shadow"
                      }), m.jsx("path", {
                        d: `M ${h} ${x} Q ${j} ${w} ${d} ${p}`,
                        fill: "none",
                        stroke: "#9b87f5",
                        strokeWidth: "2.5",
                        strokeDasharray: t.dash,
                        strokeOpacity: "0.85",
                        strokeLinecap: "round",
                        className: "connection-line",
                        style: {
                          color: "#9b87f5"
                        },
                        markerEnd: b
                      }), m.jsxs("g", {
                        transform: `translate(${S},${C})`,
                        children: [m.jsx("rect", {
                          x: "-38",
                          y: "-11",
                          width: "76",
                          height: "22",
                          rx: "2",
                          fill: "#f0eaf5",
                          stroke: "#9b87f5",
                          strokeWidth: "0.5",
                          className: "connection-label-bg",
                          transform: "rotate(-3)"
                        }), m.jsx("circle", {
                          cx: "0",
                          cy: "-10",
                          r: "3",
                          fill: "#9b87f5",
                          stroke: "rgba(0,0,0,0.3)",
                          strokeWidth: "0.5",
                          className: "connection-label-pin",
                          transform: "rotate(-3)"
                        }), m.jsx("text", {
                          x: "0",
                          y: "5",
                          className: "connection-label-text",
                          style: {
                            fill: "#4a3580"
                          },
                          transform: "rotate(-3)",
                          children: o
                        })]
                      })]
                    }, `user-${s}-${r}-c2u`));
                  } else {
                    const a = i || o;
                    const n = !i;
                    const l = n ? h : d;
                    const c = n ? x : p;
                    const u = n ? d : h;
                    const g = n ? p : x;
                    const v = j ? "#7b68ee" : n ? "#9b87f5" : t.stroke;
                    const w = j ? b : "none";
                    const S = b;
                    e.push(m.jsxs("g", {
                      className: "connection-group user-connection",
                      onClick: k,
                      children: [m.jsx("path", {
                        d: `M ${l} ${c} Q ${f} ${y} ${u} ${g}`,
                        fill: "none",
                        stroke: "transparent",
                        strokeWidth: "20"
                      }), m.jsx("path", {
                        d: `M ${l} ${c + 2} Q ${f} ${y + 2} ${u} ${g + 2}`,
                        fill: "none",
                        stroke: "rgba(0,0,0,0.3)",
                        strokeWidth: "3",
                        className: "connection-shadow"
                      }), m.jsx("path", {
                        d: `M ${l} ${c} Q ${f} ${y} ${u} ${g}`,
                        fill: "none",
                        stroke: v,
                        strokeWidth: "2.5",
                        strokeDasharray: t.dash,
                        strokeOpacity: "0.9",
                        strokeLinecap: "round",
                        className: "connection-line",
                        style: {
                          color: v
                        },
                        markerEnd: S,
                        markerStart: w
                      }), m.jsxs("g", {
                        transform: `translate(${f},${y})`,
                        children: [m.jsx("rect", {
                          x: "-38",
                          y: "-11",
                          width: "76",
                          height: "22",
                          rx: "2",
                          fill: j ? "#e8e0f5" : n ? "#f0eaf5" : "#e8e0f5",
                          stroke: v,
                          strokeWidth: "0.5",
                          className: "connection-label-bg",
                          transform: "rotate(-3)"
                        }), m.jsx("circle", {
                          cx: "0",
                          cy: "-10",
                          r: "3",
                          fill: v,
                          stroke: "rgba(0,0,0,0.3)",
                          strokeWidth: "0.5",
                          className: "connection-label-pin",
                          transform: "rotate(-3)"
                        }), m.jsx("text", {
                          x: "0",
                          y: "5",
                          className: "connection-label-text",
                          style: {
                            fill: j ? "#3d2b6e" : n ? "#4a3580" : "#3d2b6e"
                          },
                          transform: "rotate(-3)",
                          children: a
                        })]
                      })]
                    }, `user-${s}-${r}`));
                  }
                }
              }
            }
            return e;
          })(), (() => {
            if (!l || l.length === 0) {
              return null;
            }
            const e = [];
            for (const t of l) {
              const r = S(t.sourceUserId);
              const s = S(t.targetUserId);
              const i = ue[r];
              const a = ue[s];
              if (!i || !a) {
                continue;
              }
              const n = t.type === "altAccount";
              const o = n ? v.userToUserAlt : v.userToUser;
              const l = i.x + 55;
              const c = i.y + 70;
              const d = a.x + 55;
              const p = a.y + 70;
              const h = (l + d) / 2;
              const x = (c + p) / 2;
              const u = t.relationship || "";
              const g = t.reverseRelationship || "";
              const f = n ? "小号" : u && g ? `${u} ↔ ${g}` : u || g || "同世界";
              const y = e => {
                e.stopPropagation();
                const r = t.sourceUserId;
                const s = t.targetUserId;
                F({
                  uid1: r,
                  uid2: s,
                  existingLink: t,
                  type: t.type,
                  relationship: t.relationship || "",
                  reverseRelationship: t.reverseRelationship || "",
                  characterKnows: t.characterKnows || false
                });
              };
              e.push(m.jsxs("g", {
                className: "connection-group user-user-connection",
                onClick: y,
                children: [m.jsx("path", {
                  d: `M ${l} ${c} L ${d} ${p}`,
                  fill: "none",
                  stroke: "transparent",
                  strokeWidth: "20"
                }), m.jsx("path", {
                  d: `M ${l} ${c + 2} L ${d} ${p + 2}`,
                  fill: "none",
                  stroke: "rgba(0,0,0,0.2)",
                  strokeWidth: "3",
                  className: "connection-shadow"
                }), m.jsx("path", {
                  d: `M ${l} ${c} L ${d} ${p}`,
                  fill: "none",
                  stroke: o.stroke,
                  strokeWidth: "2.5",
                  strokeDasharray: o.dash,
                  strokeOpacity: "0.9",
                  strokeLinecap: "round",
                  className: "connection-line"
                }), m.jsxs("g", {
                  transform: `translate(${h},${x})`,
                  children: [m.jsx("rect", {
                    x: -Math.max(f.length * 7, 38),
                    y: "-12",
                    width: Math.max(f.length * 14, 76),
                    height: "24",
                    rx: "12",
                    fill: n ? "#f0e8ff" : "#ffe8f0",
                    stroke: o.stroke,
                    strokeWidth: "0.8"
                  }), m.jsx("text", {
                    x: "0",
                    y: "5",
                    textAnchor: "middle",
                    style: {
                      fontSize: "11px",
                      fontWeight: "600",
                      fill: n ? "#6d28d9" : "#be185d"
                    },
                    children: f
                  })]
                })]
              }, `uu-${t._id}`));
            }
            return e;
          })(), (() => {
            if (!d || d.length === 0) {
              return null;
            }
            const e = v.cohabit;
            const t = [];
            const r = e => {
              const t = String(e);
              if (xe.some(e => !e.isUser && String(e.id) === t)) {
                return t;
              }
              const r = S(t);
              if (xe.some(e => e.isUser && e.id === r)) {
                return r;
              } else {
                return null;
              }
            };
            for (const s of d) {
              const i = r(s.a);
              const a = r(s.b);
              if (!i || !a) {
                continue;
              }
              const n = ue[i];
              const o = ue[a];
              if (!n || !o) {
                continue;
              }
              const l = n.x + 55;
              const c = n.y + 70;
              const d = o.x + 55;
              const p = o.y + 70;
              const h = (l + d) / 2;
              const x = (c + p) / 2;
              t.push(m.jsxs("g", {
                className: "connection-group cohabit-connection",
                style: {
                  pointerEvents: "none"
                },
                children: [m.jsx("path", {
                  d: `M ${l} ${c + 2} L ${d} ${p + 2}`,
                  fill: "none",
                  stroke: "rgba(0,0,0,0.18)",
                  strokeWidth: "3"
                }), m.jsx("path", {
                  d: `M ${l} ${c} L ${d} ${p}`,
                  fill: "none",
                  stroke: e.stroke,
                  strokeWidth: "2.5",
                  strokeDasharray: e.dash,
                  strokeOpacity: "0.9",
                  strokeLinecap: "round"
                }), m.jsxs("g", {
                  transform: `translate(${h},${x})`,
                  children: [m.jsx("rect", {
                    x: "-30",
                    y: "-12",
                    width: "60",
                    height: "24",
                    rx: "12",
                    fill: "#e3f7ec",
                    stroke: e.stroke,
                    strokeWidth: "0.8"
                  }), m.jsxs("text", {
                    x: "0",
                    y: "5",
                    textAnchor: "middle",
                    style: {
                      fontSize: "11px",
                      fontWeight: "600",
                      fill: "#1f8a5a"
                    },
                    children: ["🏠 ", T("relTypeCohabit")]
                  })]
                })]
              }, `cohabit-${i}-${a}`));
            }
            return t;
          })()]
        }), xe.map(e => {
          const t = ue[e.id] || {
            x: 60,
            y: 60
          };
          const s = M === e.id;
          const i = (a = e.id) ? String(a).split("").reduce((e, t) => e + t.charCodeAt(0), 0) % 11 - 5 : 0;
          var a;
          const n = (e => e ? String(e).charCodeAt(0) % 3 : 0)(e.id);
          const o = e.type === "npc";
          const c = !!e.isUser;
          return m.jsxs("div", {
            className: `map-node ${s ? "selected" : ""} ${c ? "user-node" : ""}`,
            style: {
              left: t.x,
              top: t.y,
              transform: `rotate(${i}deg) scale(${s ? 1.08 : 1})`,
              zIndex: s ? 50 : c ? 25 : 20
            },
            onMouseDown: t => ye(t, e.id),
            onTouchStart: t => ye(t, e.id),
            onClick: t => ((e, t) => {
              var s;
              var i;
              e.stopPropagation();
              if (re.current) {
                re.current = false;
                return;
              }
              const a = se.current;
              if (a === null) {
                B(t);
              } else if (a === t) {
                B(null);
              } else {
                const e = k(a);
                const n = k(t);
                if (e && n) {
                  const e = w(a);
                  const r = w(t);
                  const s = l.find(t => t.sourceUserId === e && t.targetUserId === r || t.sourceUserId === r && t.targetUserId === e);
                  const i = s ? s.sourceUserId === e : e < r;
                  F({
                    uid1: e,
                    uid2: r,
                    existingLink: s,
                    type: (s == null ? undefined : s.type) || "sameWorld",
                    relationship: i ? (s == null ? undefined : s.relationship) || "" : (s == null ? undefined : s.reverseRelationship) || "",
                    reverseRelationship: i ? (s == null ? undefined : s.reverseRelationship) || "" : (s == null ? undefined : s.relationship) || "",
                    characterKnows: (s == null ? undefined : s.characterKnows) || false
                  });
                  B(null);
                } else if (e || n) {
                  const r = w(e ? a : t);
                  const n = e ? t : a;
                  const o = ((i = (s = ne.current) == null ? undefined : s[r]) == null ? undefined : i[String(n)]) || {};
                  O({
                    userId: r,
                    charId: String(n),
                    userToCharLabel: o.relationship || "",
                    charToUserLabel: o.charToUserRelationship || ""
                  });
                  B(null);
                } else {
                  ((e, t) => {
                    const s = ie.current.find(t => t.id === e);
                    if (!s) {
                      return;
                    }
                    const i = s.relationships || [];
                    const a = i.find(e => e.targetId === t);
                    if (a) {
                      L({
                        sourceId: e,
                        targetId: t,
                        ...a
                      });
                      return;
                    }
                    const n = {
                      targetId: t,
                      label: "?",
                      type: "neutral",
                      isMutual: false
                    };
                    r(e, {
                      ...s,
                      relationships: [...i, n]
                    });
                    L({
                      sourceId: e,
                      targetId: t,
                      label: "?",
                      type: "neutral",
                      isMutual: false
                    });
                  })(a, t);
                  B(null);
                }
              }
            })(t, e.id),
            children: [(n === 0 || n === 1) && m.jsx("div", {
              className: "map-tape map-tape-left " + (c ? "user-tape" : o ? "npc-tape" : "")
            }), (n === 0 || n === 2) && m.jsx("div", {
              className: "map-tape map-tape-right " + (c ? "user-tape" : o ? "npc-tape" : "")
            }), m.jsx("div", {
              className: "map-pin " + (c ? "user-pin" : "")
            }), e.image ? m.jsx("img", {
              decoding: "async",
              src: e.image,
              className: "map-node-image",
              alt: "",
              draggable: false
            }) : m.jsx("div", {
              className: "map-node-image",
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: c ? "#7b68ee" : "#777",
                fontSize: "24px",
                fontFamily: "serif"
              },
              children: c ? "👤" : "?"
            }), m.jsx("div", {
              className: "map-node-name",
              children: e.name
            }), m.jsx("div", {
              className: "map-node-role",
              children: c ? "PLAYER" : e.role
            }), o && m.jsx("div", {
              className: "map-node-npc-badge",
              children: "NPC"
            }), c && m.jsx("div", {
              className: "map-node-user-badge",
              children: T("relMapUserBadge")
            })]
          }, e.id);
        })]
      }), xe.filter(e => !e.isUser).length === 0 && m.jsxs("div", {
        className: "map-empty",
        children: [m.jsxs("svg", {
          width: "48",
          height: "48",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          opacity: "0.4",
          children: [m.jsx("circle", {
            cx: "18",
            cy: "5",
            r: "3"
          }), m.jsx("circle", {
            cx: "6",
            cy: "12",
            r: "3"
          }), m.jsx("circle", {
            cx: "18",
            cy: "19",
            r: "3"
          }), m.jsx("line", {
            x1: "8.59",
            y1: "13.51",
            x2: "15.42",
            y2: "17.49"
          }), m.jsx("line", {
            x1: "15.41",
            y1: "6.51",
            x2: "8.59",
            y2: "10.49"
          })]
        }), m.jsx("div", {
          children: T("relMapEmptyGroup")
        })]
      }), m.jsxs("div", {
        className: "map-controls",
        children: [m.jsx("button", {
          className: "map-ctrl-btn",
          onClick: () => $(e => Math.min(e + 0.15, 2.5)),
          children: m.jsxs("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [m.jsx("line", {
              x1: "12",
              y1: "5",
              x2: "12",
              y2: "19"
            }), m.jsx("line", {
              x1: "5",
              y1: "12",
              x2: "19",
              y2: "12"
            })]
          })
        }), m.jsx("button", {
          className: "map-ctrl-btn",
          onClick: () => $(e => Math.max(e - 0.15, 0.3)),
          children: m.jsx("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: m.jsx("line", {
              x1: "5",
              y1: "12",
              x2: "19",
              y2: "12"
            })
          })
        }), m.jsx("button", {
          className: "map-ctrl-btn",
          onClick: () => {
            $(1);
            P({
              x: 0,
              y: 0
            });
          },
          children: m.jsxs("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [m.jsx("path", {
              d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
            }), m.jsx("path", {
              d: "M3 3v5h5"
            })]
          })
        })]
      })]
    }), z && m.jsx("div", {
      className: "relationship-editor-overlay modal-prevent-drag",
      onClick: () => L(null),
      children: m.jsxs("div", {
        className: "relationship-editor-modal",
        onClick: e => e.stopPropagation(),
        children: [m.jsx("div", {
          className: "modal-stamp",
          children: "CLASSIFIED"
        }), m.jsxs("div", {
          className: "modal-case-number",
          children: ["CASE #", String(z.sourceId || "").slice(-4).toUpperCase(), "-", String(z.targetId || "").slice(-4).toUpperCase()]
        }), m.jsx("div", {
          className: "editor-title",
          children: T("relMapEditorTitle")
        }), m.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            padding: "8px 0",
            fontSize: "13px",
            color: "#c4a97d",
            fontFamily: "'Courier New', monospace"
          },
          children: [m.jsx("span", {
            style: {
              fontWeight: "bold"
            },
            children: we(z.sourceId)
          }), m.jsxs("svg", {
            width: "20",
            height: "12",
            viewBox: "0 0 20 12",
            fill: "none",
            stroke: "#c9302c",
            strokeWidth: "2",
            children: [m.jsx("line", {
              x1: "0",
              y1: "6",
              x2: "14",
              y2: "6"
            }), m.jsx("polyline", {
              points: "10,2 14,6 10,10"
            })]
          }), m.jsx("span", {
            style: {
              fontWeight: "bold"
            },
            children: we(z.targetId)
          })]
        }), m.jsxs("div", {
          className: "wb-form-group",
          children: [m.jsx("label", {
            className: "wb-form-label",
            children: T("relMapEditorLabel")
          }), m.jsx("input", {
            ref: q,
            className: "wb-form-input",
            value: z.label,
            onChange: e => L({
              ...z,
              label: e.target.value
            }),
            placeholder: T("relMapEditorLabelPlaceholder")
          })]
        }), m.jsxs("div", {
          className: "wb-form-group",
          children: [m.jsx("label", {
            className: "wb-form-label",
            children: T("relMapEditorType")
          }), m.jsxs("select", {
            className: "wb-form-input",
            value: z.type || "neutral",
            onChange: e => L({
              ...z,
              type: e.target.value
            }),
            children: [m.jsx("option", {
              value: "neutral",
              children: T("relMapTypeNeutralDesc")
            }), m.jsx("option", {
              value: "strong",
              children: T("relMapTypeStrongDesc")
            }), m.jsx("option", {
              value: "dashed",
              children: T("relMapTypeDashedDesc")
            }), m.jsx("option", {
              value: "hostile",
              children: T("relMapTypeHostileDesc")
            })]
          })]
        }), m.jsxs("div", {
          className: "wb-form-group",
          style: {
            flexDirection: "row",
            alignItems: "center",
            marginTop: "4px"
          },
          children: [m.jsx("input", {
            type: "checkbox",
            id: "mutual-checkbox",
            checked: z.isMutual || false,
            onChange: e => L({
              ...z,
              isMutual: e.target.checked
            }),
            style: {
              accentColor: "#c9302c",
              width: "14px",
              height: "14px"
            }
          }), m.jsx("label", {
            htmlFor: "mutual-checkbox",
            className: "wb-form-label",
            style: {
              letterSpacing: "0.5px",
              marginTop: "2px",
              cursor: "pointer"
            },
            children: T("relMapMutual")
          })]
        }), m.jsxs("div", {
          className: "editor-btn-row",
          children: [m.jsx("button", {
            style: {
              padding: "10px 18px",
              background: "#3a2e2e",
              border: "1px solid #555",
              color: "#aaa"
            },
            onClick: () => ((t, s) => {
              const i = e.find(e => e.id === t);
              if (!i) {
                return;
              }
              const a = (i.relationships || []).find(e => e.targetId === s);
              const n = !!a && !!a.isMutual;
              const o = (i.relationships || []).filter(e => e.targetId !== s);
              r(t, {
                ...i,
                relationships: o
              });
              if (n) {
                const i = e.find(e => e.id === s);
                if (i) {
                  const e = (i.relationships || []).filter(e => e.targetId !== t);
                  r(s, {
                    ...i,
                    relationships: e
                  });
                }
              }
              L(null);
            })(z.sourceId, z.targetId),
            children: T("btnDelete")
          }), m.jsx("button", {
            style: {
              padding: "10px 18px",
              background: "#5d1e1e",
              border: "1px solid #c9a84c",
              color: "#c9a84c"
            },
            onClick: () => ((t, s, i) => {
              const a = e.find(e => e.id === t);
              if (!a) {
                return;
              }
              const n = (a.relationships || []).find(e => e.targetId === s);
              const o = !!n && !!n.isMutual;
              const l = (a.relationships || []).map(e => e.targetId === s ? {
                ...e,
                ...i
              } : e);
              r(t, {
                ...a,
                relationships: l
              });
              const c = e.find(e => e.id === s);
              if (c) {
                const e = c.relationships || [];
                const a = e.find(e => e.targetId === t);
                if (i.isMutual) {
                  let n = [];
                  n = a ? e.map(e => e.targetId === t ? {
                    ...e,
                    ...i,
                    isMutual: true
                  } : e) : [...e, {
                    targetId: t,
                    ...i,
                    isMutual: true
                  }];
                  r(s, {
                    ...c,
                    relationships: n
                  });
                } else if (o && a) {
                  const i = e.filter(e => e.targetId !== t);
                  r(s, {
                    ...c,
                    relationships: i
                  });
                }
              }
              L(null);
            })(z.sourceId, z.targetId, {
              label: z.label,
              type: z.type,
              isMutual: z.isMutual
            }),
            children: T("btnSave")
          })]
        })]
      })
    }), W && m.jsx("div", {
      className: "relationship-editor-overlay modal-prevent-drag",
      onClick: () => O(null),
      children: m.jsxs("div", {
        className: "relationship-editor-modal",
        onClick: e => e.stopPropagation(),
        style: {
          borderColor: "#7b68ee"
        },
        children: [m.jsx("div", {
          className: "modal-stamp",
          style: {
            color: "rgba(123,104,238,0.35)",
            borderColor: "rgba(123,104,238,0.3)"
          },
          children: "PERSONAL"
        }), m.jsx("div", {
          className: "editor-title",
          style: {
            color: "#7b68ee"
          },
          children: T("relMapUserRelEditor")
        }), m.jsxs("div", {
          className: "wb-form-group",
          style: {
            flexDirection: "row",
            alignItems: "center",
            margin: "4px 0 12px",
            justifyContent: "center"
          },
          children: [m.jsx("input", {
            type: "checkbox",
            id: "user-mutual-checkbox",
            checked: E,
            onChange: e => {
              const t = e.target.checked;
              U(t);
              if (t) {
                O(e => ({
                  ...e,
                  charToUserLabel: e.userToCharLabel
                }));
              }
            },
            style: {
              accentColor: "#7b68ee",
              width: "15px",
              height: "15px",
              marginRight: "6px",
              cursor: "pointer"
            }
          }), m.jsx("label", {
            htmlFor: "user-mutual-checkbox",
            className: "wb-form-label",
            style: {
              color: "#7b68ee",
              letterSpacing: "0.5px",
              cursor: "pointer",
              margin: 0,
              fontSize: "13px"
            },
            children: T("relMapMutual") || "双向关系 (双方一致)"
          })]
        }), E ? m.jsxs(m.Fragment, {
          children: [m.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "8px 0 2px",
              fontSize: "13px",
              color: "#c4a97d",
              fontFamily: "'Courier New', monospace"
            },
            children: [m.jsx("span", {
              style: {
                fontWeight: "bold",
                color: "#7b68ee"
              },
              children: ((h = a.find(e => (e.uid || e.id) === W.userId)) == null ? undefined : h.name) || T("relMapUserBadge")
            }), m.jsxs("svg", {
              width: "20",
              height: "12",
              viewBox: "0 0 20 12",
              fill: "none",
              stroke: "#7b68ee",
              strokeWidth: "2",
              children: [m.jsx("line", {
                x1: "0",
                y1: "6",
                x2: "20",
                y2: "6"
              }), m.jsx("polyline", {
                points: "4,2 0,6 4,10"
              }), m.jsx("polyline", {
                points: "16,2 20,6 16,10"
              })]
            }), m.jsx("span", {
              style: {
                fontWeight: "bold"
              },
              children: ((x = e.find(e => String(e.id) === String(W.charId))) == null ? undefined : x.name) || "?"
            })]
          }), m.jsxs("div", {
            className: "wb-form-group",
            children: [m.jsx("label", {
              className: "wb-form-label",
              children: T("profileLinkRelationship") || "双向关系"
            }), m.jsx("input", {
              ref: q,
              className: "wb-form-input",
              value: W.userToCharLabel,
              onChange: e => {
                const t = e.target.value;
                O({
                  ...W,
                  userToCharLabel: t,
                  charToUserLabel: t
                });
              },
              placeholder: T("relMapUserRelPlaceholder"),
              style: {
                borderColor: "rgba(123,104,238,0.4)"
              }
            })]
          })]
        }) : m.jsxs(m.Fragment, {
          children: [m.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "8px 0 2px",
              fontSize: "13px",
              color: "#c4a97d",
              fontFamily: "'Courier New', monospace"
            },
            children: [m.jsx("span", {
              style: {
                fontWeight: "bold",
                color: "#7b68ee"
              },
              children: ((u = a.find(e => (e.uid || e.id) === W.userId)) == null ? undefined : u.name) || T("relMapUserBadge")
            }), m.jsxs("svg", {
              width: "20",
              height: "12",
              viewBox: "0 0 20 12",
              fill: "none",
              stroke: "#7b68ee",
              strokeWidth: "2",
              children: [m.jsx("line", {
                x1: "0",
                y1: "6",
                x2: "14",
                y2: "6"
              }), m.jsx("polyline", {
                points: "10,2 14,6 10,10"
              })]
            }), m.jsx("span", {
              style: {
                fontWeight: "bold"
              },
              children: ((f = e.find(e => String(e.id) === String(W.charId))) == null ? undefined : f.name) || "?"
            })]
          }), m.jsxs("div", {
            className: "wb-form-group",
            children: [m.jsx("label", {
              className: "wb-form-label",
              children: T("relMapUserToCharLabel")
            }), m.jsx("input", {
              ref: q,
              className: "wb-form-input",
              value: W.userToCharLabel,
              onChange: e => O({
                ...W,
                userToCharLabel: e.target.value
              }),
              placeholder: T("relMapUserRelPlaceholder"),
              style: {
                borderColor: "rgba(123,104,238,0.4)"
              }
            })]
          }), m.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "8px 0 2px",
              fontSize: "13px",
              color: "#c4a97d",
              fontFamily: "'Courier New', monospace"
            },
            children: [m.jsx("span", {
              style: {
                fontWeight: "bold"
              },
              children: ((y = e.find(e => String(e.id) === String(W.charId))) == null ? undefined : y.name) || "?"
            }), m.jsxs("svg", {
              width: "20",
              height: "12",
              viewBox: "0 0 20 12",
              fill: "none",
              stroke: "#9b87f5",
              strokeWidth: "2",
              children: [m.jsx("line", {
                x1: "0",
                y1: "6",
                x2: "14",
                y2: "6"
              }), m.jsx("polyline", {
                points: "10,2 14,6 10,10"
              })]
            }), m.jsx("span", {
              style: {
                fontWeight: "bold",
                color: "#7b68ee"
              },
              children: ((b = a.find(e => (e.uid || e.id) === W.userId)) == null ? undefined : b.name) || T("relMapUserBadge")
            })]
          }), m.jsxs("div", {
            className: "wb-form-group",
            children: [m.jsx("label", {
              className: "wb-form-label",
              children: T("relMapCharToUserLabel")
            }), m.jsx("input", {
              className: "wb-form-input",
              value: W.charToUserLabel,
              onChange: e => O({
                ...W,
                charToUserLabel: e.target.value
              }),
              placeholder: T("relMapUserRelPlaceholder"),
              style: {
                borderColor: "rgba(155,135,245,0.4)"
              }
            })]
          })]
        }), m.jsxs("div", {
          className: "editor-btn-row",
          children: [m.jsx("button", {
            style: {
              padding: "10px 18px",
              background: "#3a2e2e",
              border: "1px solid #555",
              color: "#aaa"
            },
            onClick: () => je(W.userId, W.charId, "", ""),
            children: T("btnDelete")
          }), m.jsx("button", {
            style: {
              padding: "10px 18px",
              background: "#2e1e5d",
              border: "1px solid #7b68ee",
              color: "#7b68ee"
            },
            onClick: () => je(W.userId, W.charId, W.userToCharLabel, W.charToUserLabel),
            children: T("btnSave")
          })]
        })]
      })
    }), G && m.jsx("div", {
      className: "relationship-editor-overlay modal-prevent-drag",
      onClick: () => F(null),
      children: m.jsxs("div", {
        className: "relationship-editor-modal",
        onClick: e => e.stopPropagation(),
        style: {
          borderColor: "#ff6b9d"
        },
        children: [m.jsx("div", {
          className: "modal-stamp",
          style: {
            color: "rgba(255,107,157,0.35)",
            borderColor: "rgba(255,107,157,0.3)"
          },
          children: G.type === "altAccount" ? "ALT" : "WORLD"
        }), m.jsx("div", {
          className: "editor-title",
          style: {
            color: "#ff6b9d"
          },
          children: T("profileLabelUserLink")
        }), m.jsx("div", {
          style: {
            display: "flex",
            gap: "6px",
            margin: "8px 0 12px"
          },
          children: ["sameWorld", "altAccount"].map(e => m.jsx("button", {
            onClick: () => F(t => ({
              ...t,
              type: e
            })),
            style: {
              flex: 1,
              padding: "8px",
              borderRadius: "8px",
              border: "none",
              fontSize: "13px",
              cursor: "pointer",
              fontWeight: G.type === e ? "700" : "500",
              background: G.type === e ? e === "altAccount" ? "#a78bfa" : "#ff6b9d" : "#333",
              color: G.type === e ? "#fff" : "#888"
            },
            children: T(e === "sameWorld" ? "profileLinkSameWorld" : "profileLinkAltAccount")
          }, e))
        }), m.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            padding: "8px 0",
            fontSize: "13px",
            fontFamily: "'Courier New', monospace"
          },
          children: [m.jsx("span", {
            style: {
              fontWeight: "bold",
              color: "#ff6b9d"
            },
            children: ((j = a.find(e => e.uid === G.uid1)) == null ? undefined : j.name) || "?"
          }), m.jsx("span", {
            style: {
              color: "#888"
            },
            children: "↔"
          }), m.jsx("span", {
            style: {
              fontWeight: "bold",
              color: "#ff6b9d"
            },
            children: ((N = a.find(e => e.uid === G.uid2)) == null ? undefined : N.name) || "?"
          })]
        }), m.jsxs("div", {
          className: "wb-form-group",
          style: {
            flexDirection: "row",
            alignItems: "center",
            margin: "4px 0 8px",
            justifyContent: "center"
          },
          children: [m.jsx("input", {
            type: "checkbox",
            id: "user-user-mutual-checkbox",
            checked: D,
            onChange: e => {
              const t = e.target.checked;
              _(t);
              if (t) {
                F(e => ({
                  ...e,
                  reverseRelationship: e.relationship
                }));
              }
            },
            style: {
              accentColor: G.type === "altAccount" ? "#a78bfa" : "#ff6b9d",
              width: "15px",
              height: "15px",
              marginRight: "6px",
              cursor: "pointer"
            }
          }), m.jsx("label", {
            htmlFor: "user-user-mutual-checkbox",
            className: "wb-form-label",
            style: {
              color: G.type === "altAccount" ? "#a78bfa" : "#ff6b9d",
              letterSpacing: "0.5px",
              cursor: "pointer",
              margin: 0,
              fontSize: "13px"
            },
            children: T("relMapMutual") || "双向关系"
          })]
        }), D ? m.jsxs("div", {
          className: "wb-form-group",
          children: [m.jsx("label", {
            className: "wb-form-label",
            children: T("profileLinkRelationship")
          }), m.jsx("input", {
            className: "wb-form-input",
            value: G.relationship,
            onChange: e => {
              const t = e.target.value;
              F(e => ({
                ...e,
                relationship: t,
                reverseRelationship: t
              }));
            },
            placeholder: T("profileLinkPhRelationship"),
            style: {
              borderColor: G.type === "altAccount" ? "rgba(167,139,250,0.4)" : "rgba(255,107,157,0.4)"
            }
          })]
        }) : m.jsxs(m.Fragment, {
          children: [m.jsxs("div", {
            className: "wb-form-group",
            children: [m.jsx("label", {
              className: "wb-form-label",
              children: T("profileLinkRelationship")
            }), m.jsx("input", {
              className: "wb-form-input",
              value: G.relationship,
              onChange: e => F(t => ({
                ...t,
                relationship: e.target.value
              })),
              placeholder: T("profileLinkPhRelationship"),
              style: {
                borderColor: G.type === "altAccount" ? "rgba(167,139,250,0.4)" : "rgba(255,107,157,0.4)"
              }
            })]
          }), m.jsxs("div", {
            className: "wb-form-group",
            children: [m.jsx("label", {
              className: "wb-form-label",
              children: T("profileLinkReverseRelationship")
            }), m.jsx("input", {
              className: "wb-form-input",
              value: G.reverseRelationship,
              onChange: e => F(t => ({
                ...t,
                reverseRelationship: e.target.value
              })),
              placeholder: T("profileLinkPhReverseRelationship"),
              style: {
                borderColor: G.type === "altAccount" ? "rgba(167,139,250,0.4)" : "rgba(255,107,157,0.4)"
              }
            })]
          })]
        }), G.type === "altAccount" && m.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 0"
          },
          children: [m.jsx("span", {
            style: {
              fontSize: "13px",
              color: "#ccc"
            },
            children: T("profileLinkCharacterKnows")
          }), m.jsx("div", {
            onClick: () => F(e => ({
              ...e,
              characterKnows: !e.characterKnows
            })),
            style: {
              width: "40px",
              height: "22px",
              borderRadius: "11px",
              cursor: "pointer",
              background: G.characterKnows ? "#34c759" : "#555",
              position: "relative",
              transition: "background 0.2s"
            },
            children: m.jsx("div", {
              style: {
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                background: "#fff",
                position: "absolute",
                top: "2px",
                left: G.characterKnows ? "20px" : "2px",
                transition: "left 0.2s"
              }
            })
          })]
        }), m.jsxs("div", {
          className: "editor-btn-row",
          children: [G.existingLink && m.jsx("button", {
            style: {
              padding: "10px 18px",
              background: "#3a2e2e",
              border: "1px solid #555",
              color: "#aaa"
            },
            onClick: async () => {
              if (c) {
                await c(G.uid1, G.uid2, null);
              }
              F(null);
            },
            children: T("profileLinkRemove")
          }), m.jsx("button", {
            style: {
              padding: "10px 18px",
              background: "#5d1e3a",
              border: "1px solid #ff6b9d",
              color: "#ff6b9d"
            },
            onClick: async () => {
              if (c) {
                await c(G.uid1, G.uid2, {
                  type: G.type,
                  relationship: G.relationship,
                  reverseRelationship: G.reverseRelationship,
                  characterKnows: G.characterKnows
                });
              }
              F(null);
            },
            children: T("btnSave")
          })]
        })]
      })
    })]
  });
};
const T = () => {
  var e;
  var v;
  var j;
  const {
    characters: k,
    addCharacter: w,
    updateCharacter: S,
    deleteCharacter: C,
    resetCharacter: I
  } = r();
  const {
    currentScreen: T,
    goHome: P,
    showScreen: A
  } = s();
  const {
    t: $,
    tOr: M
  } = t();
  const {
    profileUsers: B
  } = i();
  const z = g.useMemo(() => k.filter(e => e.type !== "npc"), [k]);
  const {
    selectedCharId: L,
    setSelectedCharId: W
  } = f("roster", z);
  const [O, E] = g.useState([]);
  const [U, G] = g.useState({});
  const [F, D] = g.useState([]);
  const _ = T === "character-roster-screen";
  g.useEffect(() => {
    if (_) {
      (async () => {
        try {
          const e = await h.getAll();
          E(Array.isArray(e) ? e : []);
        } catch (e) {
          console.error("[CharacterRosterApp] Failed to load world books:", e);
        }
      })();
    }
  }, [_]);
  g.useEffect(() => {
    if (_ && B.length !== 0) {
      (async () => {
        const e = {};
        for (const r of B) {
          const s = r.uid || r.id;
          try {
            const t = await o.getByUser(s);
            const r = {};
            for (const e of t) {
              if (e.characterId) {
                r[e.characterId] = e;
              }
            }
            e[s] = r;
          } catch (t) {
            console.error("[CharacterRosterApp] 載入 chatSettings 失敗:", t);
          }
        }
        G(e);
      })();
    }
  }, [_, B]);
  g.useEffect(() => {
    if (_) {
      a.getAll().then(e => D(e || [])).catch(() => D([]));
    }
  }, [_]);
  const X = g.useCallback(async (e, t, r) => {
    if (r === null) {
      await a.deleteLink(e, t);
    } else {
      await a.createLink(e, t, r.type, {
        relationship: r.relationship,
        reverseRelationship: r.reverseRelationship,
        characterKnows: r.characterKnows
      });
      if (r.type === "altAccount") {
        n(async () => {
          const {
            initialAltSync: e
          } = await import("./main-BO9xa-SQ.js").then(e => e.cn);
          return {
            initialAltSync: e
          };
        }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).then(({
          initialAltSync: r
        }) => {
          r(e, t);
        }).catch(e => console.warn("[UserLink] 初始同步失敗:", e));
      }
    }
    const s = await a.getAll();
    D(s || []);
  }, []);
  const Y = g.useCallback(async (e, t, r, s) => {
    try {
      const i = await o.get(e, t);
      await o.put(e, t, {
        ...i,
        relationship: r,
        charToUserRelationship: s
      });
      G(i => {
        var a;
        return {
          ...i,
          [e]: {
            ...i[e],
            [String(t)]: {
              ...(((a = i[e]) == null ? undefined : a[String(t)]) || {}),
              relationship: r,
              charToUserRelationship: s
            }
          }
        };
      });
    } catch (i) {
      console.error("[CharacterRosterApp] 更新 user-char 關係失敗:", i);
    }
  }, []);
  g.useEffect(() => {
    l.get("refImageStrength").then(e => {
      const t = Number(e);
      if (Number.isFinite(t) && t >= 0 && t <= 100) {
        me(t);
      }
    }).catch(() => {});
    l.get("apiSettings").then(e => {
      if (e == null ? undefined : e.sovitsApiVersion) {
        ye(e.sovitsApiVersion);
      }
    }).catch(() => {});
  }, []);
  g.useEffect(() => {
    const e = e => {
      const {
        charId: t
      } = e.detail || {};
      if (t) {
        A("character-roster-screen");
        setTimeout(() => ne(t), 120);
      }
    };
    window.addEventListener("open-roster-detail", e);
    return () => window.removeEventListener("open-roster-detail", e);
  }, [A]);
  const [V, H] = g.useState("carousel");
  const [K, q] = g.useState(false);
  const [Q, J] = g.useState([]);
  g.useEffect(() => {
    if (!K) {
      return;
    }
    let e = true;
    (async () => {
      const t = [];
      const r = new Set();
      for (const e of k || []) {
        if (e == null ? undefined : e.id) {
          try {
            const s = await c.get(e.id).catch(() => null);
            const i = ((s == null ? undefined : s.cohabitants) || []).map(String);
            for (const a of i) {
              const s = [String(e.id), a].sort().join("::");
              if (!r.has(s)) {
                r.add(s);
                t.push({
                  a: String(e.id),
                  b: a
                });
              }
            }
          } catch (s) {}
        }
      }
      if (e) {
        J(t);
      }
    })();
    return () => {
      e = false;
    };
  }, [K, k]);
  const [Z, ee] = g.useState(false);
  const [te, re] = g.useState("All");
  const [se, ie] = g.useState("main");
  const [ae, ne] = g.useState(null);
  const [oe, le] = g.useState(false);
  const [ce, de] = g.useState(null);
  const [pe, he] = g.useState(null);
  const [xe, ue] = g.useState(null);
  const [ge, me] = g.useState(60);
  const [fe, ye] = g.useState("v2");
  const [be, ve] = g.useState(false);
  const [je, ke] = g.useState({
    status: "idle",
    resultImg: null,
    msg: ""
  });
  const [we, Se] = g.useState({
    open: false,
    step: 1,
    char: null
  });
  const [Ce, Ie] = g.useState({
    open: false,
    step: 1,
    char: null
  });
  const [Ne, Te] = g.useState(() => {
    try {
      return JSON.parse(localStorage.getItem("nuojiji_roster_settings")) || {
        globalBack: "",
        groupBacks: {}
      };
    } catch {
      return {
        globalBack: "",
        groupBacks: {}
      };
    }
  });
  const Re = e => {
    Te(e);
    try {
      localStorage.setItem("nuojiji_roster_settings", JSON.stringify(e));
    } catch (t) {}
  };
  const Pe = e => {
    var t;
    if (e.cardBack) {
      return e.cardBack;
    } else if (e.group && ((t = Ne.groupBacks) == null ? undefined : t[e.group])) {
      return Ne.groupBacks[e.group];
    } else if (Ne.globalBack) {
      return Ne.globalBack;
    } else {
      return "/tarot_back.webp";
    }
  };
  const [Ae, $e] = g.useState(0);
  const Me = g.useRef({
    startX: 0,
    isDown: false,
    lastX: 0,
    velocity: 0
  });
  const Be = g.useRef(null);
  const [ze, Le] = g.useState(false);
  const [We, Oe] = g.useState(0);
  const [Ee, Ue] = g.useState(0);
  const Ge = g.useRef(false);
  const [Fe, De] = g.useState({
    name: "",
    aliases: "",
    gender: "female",
    role: "",
    group: "Default",
    birthday: "",
    nationality: "",
    description: "",
    worldBook: [],
    image: "",
    type: "main",
    boundTo: [],
    momentFrequency: 40,
    tmPureProse: false,
    imagePrompt: "",
    imageSeed: "",
    refImageRef: null,
    minimaxTimbreId: "",
    voiceProvider: "minimax",
    elevenVoiceId: "",
    sovitsRefAudioPath: "",
    sovitsRefText: "",
    sovitsGptPath: "",
    sovitsSovitsPath: ""
  });
  const _e = g.useMemo(() => {
    if (se === "npc") {
      const e = k.filter(e => e.type !== "npc");
      const t = k.filter(e => e.type === "npc");
      const r = new Set();
      t.forEach(t => {
        if (Array.isArray(t.boundTo)) {
          t.boundTo.forEach(t => {
            const s = e.find(e => e.id === t);
            if (s) {
              r.add(s.name);
            }
          });
        }
      });
      return ["All", ...Array.from(r)];
    }
    {
      const e = k.filter(e => (e.type || "main") === se);
      const t = new Set(e.map(e => e.group || "Other"));
      return ["All", ...Array.from(t).filter(e => e !== "All")];
    }
  }, [k, se]);
  const Xe = g.useMemo(() => {
    const e = k.filter(e => (e.type || "main") === se);
    if (te === "All") {
      return e;
    }
    if (se === "npc") {
      const t = k.filter(e => e.type !== "npc");
      return e.filter(e => !!Array.isArray(e.boundTo) && e.boundTo.some(e => {
        const r = t.find(t => t.id === e);
        return r && r.name === te;
      }));
    }
    return e.filter(e => (e.group || "Other") === te);
  }, [k, te, se]);
  g.useEffect(() => {
    if (L && Xe.length > 0) {
      const e = Xe.findIndex(e => String(e.id) === String(L));
      $e(e >= 0 ? e : 0);
    } else {
      $e(0);
    }
  }, [te, se, V]);
  const Ye = g.useMemo(() => {
    const e = k.filter(e => e.type === Fe.type);
    const t = new Set(e.map(e => e.group || "Other"));
    return Array.from(t).filter(e => e !== "All");
  }, [k, Fe.type]);
  const Ve = e => {
    Me.current.startX = e.clientX || (e.touches ? e.touches[0].clientX : 0);
    Me.current.lastX = Me.current.startX;
    Me.current.isDown = true;
    Me.current.velocity = 0;
  };
  const He = e => {
    if (!Me.current.isDown) {
      return;
    }
    const t = e.clientX || (e.touches ? e.touches[0].clientX : 0);
    const r = t - Me.current.lastX;
    Me.current.lastX = t;
    if (r > 0) {
      Me.current.velocity = -1;
    } else if (r < 0) {
      Me.current.velocity = 1;
    }
  };
  const Ke = e => {
    if (!Me.current.isDown) {
      return;
    }
    Me.current.isDown = false;
    const t = (e.clientX || (e.changedTouches ? e.changedTouches[0].clientX : 0)) - Me.current.startX;
    if (Math.abs(t) > 50) {
      const e = Xe.length;
      if (e > 0) {
        $e(t < 0 ? t => ((t + 1) % e + e) % e : t => ((t - 1) % e + e) % e);
      }
    }
  };
  const [qe, Qe] = g.useState(false);
  const [Je, Ze] = g.useState("");
  const [et, tt] = g.useState("");
  const [rt, st] = g.useState(() => localStorage.getItem("nuojiji_tavern_unlocked") === "true");
  const it = g.useMemo(() => {
    const e = "nuojiji_device_code_v3";
    let t = null;
    try {
      t = localStorage.getItem(e);
    } catch (r) {}
    if (!t || !t.includes("-")) {
      t = d();
      try {
        localStorage.setItem(e, t);
        localStorage.removeItem("nuojiji_device_code");
        localStorage.removeItem("nuojiji_device_code_v2");
      } catch (r) {}
    }
    return t;
  }, []);
  const at = g.useCallback(async e => {
    const t = "nuojiji_love200217";
    const r = new TextEncoder();
    const s = r.encode(t);
    const i = await crypto.subtle.importKey("raw", s, {
      name: "HMAC",
      hash: "SHA-256"
    }, false, ["sign"]);
    const a = await crypto.subtle.sign("HMAC", i, r.encode(e));
    const n = Array.from(new Uint8Array(a), e => e.toString(16).padStart(2, "0")).join("");
    const o = t.split("").reverse().join("");
    const l = r.encode(n + o + e);
    const c = await crypto.subtle.digest("SHA-256", l);
    const d = Array.from(new Uint8Array(c), e => e.toString(16).padStart(2, "0")).join("");
    const p = r.encode(d + "x9Kp$mW2!vL7nQ4z");
    const h = await crypto.subtle.digest("SHA-256", p);
    return Array.from(new Uint8Array(h), e => e.toString(16).padStart(2, "0")).join("").replace(/[^0-9]/g, "").slice(0, 8);
  }, []);
  const nt = g.useCallback(async () => {
    const e = await at(it);
    if (Je.trim() === e) {
      localStorage.setItem("nuojiji_tavern_unlocked", "true");
      st(true);
      Qe(false);
      Ze("");
      tt("");
      dt(true);
    } else {
      tt($("tavernUnlockWrong") || "解鎖碼不正確");
    }
  }, [Je, it, at, $]);
  const ot = g.useCallback(() => {
    if (rt) {
      dt(true);
    } else {
      Qe(true);
      Ze("");
      tt("");
    }
  }, [rt]);
  const lt = g.useRef(null);
  const [ct, dt] = g.useState(false);
  const [pt, ht] = g.useState("");
  const [xt, ut] = g.useState(false);
  const gt = async e => {
    const t = new Uint8Array(e);
    const r = new TextDecoder("latin1");
    let s = 8;
    while (s < t.length) {
      const e = t[s] << 24 | t[s + 1] << 16 | t[s + 2] << 8 | t[s + 3];
      const i = r.decode(t.slice(s + 4, s + 8));
      if (i === "tEXt") {
        const i = t.slice(s + 8, s + 8 + e);
        const a = i.indexOf(0);
        if (a !== -1 && r.decode(i.slice(0, a)) === "chara") {
          const e = r.decode(i.slice(a + 1));
          const t = atob(e);
          const s = new Uint8Array(t.length);
          for (let r = 0; r < t.length; r++) {
            s[r] = t.charCodeAt(r);
          }
          const n = new TextDecoder("utf-8").decode(s);
          return JSON.parse(n);
        }
      }
      if (i === "IEND") {
        break;
      }
      s += 12 + e;
    }
    return null;
  };
  const mt = async (e, t, r) => {
    const s = e.data || e;
    const i = [];
    if (s.description) {
      i.push(s.description);
    }
    if (s.personality) {
      i.push(`【性格】\n${s.personality}`);
    }
    if (s.scenario) {
      i.push(`【情境】\n${s.scenario}`);
    }
    if (s.mes_example) {
      i.push(`【對話範例】\n${s.mes_example}`);
    }
    if (s.first_mes) {
      i.push(`【第一條訊息】\n${s.first_mes}`);
    }
    if (s.system_prompt) {
      i.push(`【系統提示】\n${s.system_prompt}`);
    }
    if (s.post_history_instructions) {
      i.push(`【歷史後指令】\n${s.post_history_instructions}`);
    }
    if (s.creator_notes) {
      i.push(`【創作者備註】\n${s.creator_notes}`);
    }
    let a = null;
    const n = [];
    const o = s.character_book;
    if (o && o.entries) {
      const e = (e => {
        const t = [];
        const r = e.entries || {};
        const s = Object.values(r).sort((e, t) => e.displayIndex !== undefined && t.displayIndex !== undefined ? e.displayIndex - t.displayIndex : e.order !== undefined && t.order !== undefined ? t.order - e.order : (e.uid || 0) - (t.uid || 0));
        for (const i of s) {
          if (i.disable) {
            continue;
          }
          const e = i.comment || i.name || "";
          const r = [...(Array.isArray(i.key) ? i.key.filter(e => e) : Array.isArray(i.keys) ? i.keys.filter(e => e) : []), ...(Array.isArray(i.keysecondary) ? i.keysecondary.filter(e => e) : Array.isArray(i.secondary_keys) ? i.secondary_keys.filter(e => e) : [])];
          const s = r.length > 0 ? r.join(", ") : i.comment || i.name || "";
          let a = "medium";
          if (i.order !== undefined) {
            if (i.order >= 998) {
              a = "high";
            } else if (i.order <= 992) {
              a = "low";
            }
          }
          let n = "normal";
          const o = (i.comment || i.name || "").toLowerCase();
          if (o.includes("jailbreak") || o.includes("越獄")) {
            n = "jailbreak";
          } else if (o.includes("world") || o.includes("世界")) {
            n = "world";
          } else if (o.includes("relation") || o.includes("關係")) {
            n = "relation";
          } else if (o.includes("location") || o.includes("地點")) {
            n = "location";
          }
          const l = i.content && i.content.trim();
          if (l) {
            t.push({
              name: e,
              keys: s,
              content: l,
              constant: i.constant || false,
              priority: a,
              type: n
            });
          }
        }
        return t;
      })(o);
      if (e.length > 0) {
        a = {
          id: Date.now(),
          title: o.name || `${s.name || r} 世界書`,
          author: s.creator || "",
          description: o.description || `從酒館角色卡 ${s.name || r} 導入`,
          entries: e,
          isGlobal: false,
          bgStyle: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          accentColor: "#e94560",
          paletteId: "midnight",
          iconIndex: 0,
          coverImage: null,
          innerImage: null,
          mode: "all"
        };
        n.push(String(a.id));
      }
    }
    De({
      name: s.name || s.char_name || "",
      aliases: "",
      gender: "female",
      role: "",
      group: te === "All" || te === "NPCs" ? "Default" : te,
      birthday: "",
      description: i.join("\n\n"),
      worldBook: n,
      _pendingWorldBook: a,
      image: t || "",
      type: "main",
      boundTo: [],
      momentFrequency: 40,
      imagePrompt: "",
      minimaxTimbreId: "",
      voiceProvider: "minimax",
      elevenVoiceId: "",
      sovitsRefAudioPath: "",
      sovitsRefText: "",
      sovitsGptPath: "",
      sovitsSovitsPath: ""
    });
    de(null);
    le(true);
  };
  g.useEffect(() => {
    const e = e => {
      const {
        payload: t,
        filename: r
      } = e.detail || {};
      if (t) {
        mt(t, null, r || "來自論壇");
      }
    };
    window.addEventListener("nuojiji:import-tavern-card", e);
    return () => window.removeEventListener("nuojiji:import-tavern-card", e);
  }, []);
  const ft = async () => {
    const e = pt.trim();
    if (e) {
      ut(true);
      try {
        const t = await fetch(`/api/cors-fetch?url=${encodeURIComponent(e)}`);
        if (!t.ok) {
          const e = await t.text().catch(() => "");
          throw new Error(e || `HTTP ${t.status}`);
        }
        const r = t.headers.get("content-type") || "";
        let s = null;
        let i = null;
        const a = e.split("?")[0].toLowerCase();
        if (r.includes("image/png") || a.endsWith(".png")) {
          const e = await t.arrayBuffer();
          s = await gt(e);
          if (!s) {
            x($("rosterTavernNoPng"));
            ut(false);
            return;
          }
          const r = new Blob([e], {
            type: "image/png"
          });
          i = await new Promise(e => {
            const t = new FileReader();
            t.onload = () => e(t.result);
            t.readAsDataURL(r);
          });
        } else {
          s = await t.json();
        }
        await mt(s, i, e);
        dt(false);
        ht("");
      } catch (t) {
        console.error("[CharacterRosterApp] 從 URL 導入角色卡失敗:", t);
        x(`${$("rosterTavernFail")}：${t.message}\n\n${$("rosterTavernUrlFail")}`);
      }
      ut(false);
    }
  };
  const yt = g.useRef(null);
  const bt = e => {
    if (e) {
      e.stopPropagation();
    }
    le(false);
    de(null);
  };
  const vt = () => {
    Se({
      open: false,
      step: 1,
      char: null
    });
  };
  const jt = () => {
    Ie({
      open: false,
      step: 1,
      char: null
    });
  };
  const kt = g.useMemo(() => k.filter(e => e.type !== "npc"), [k]);
  const wt = k.find(e => String(e.id) === String(ae));
  return m.jsxs("div", {
    id: "character-roster-screen",
    className: `screen ${_ ? "active" : ""} roster-app-container`,
    children: [m.jsx("div", {
      className: "roster-stardust"
    }), m.jsxs("div", {
      className: "roster-header",
      children: [m.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "10px"
        },
        children: [m.jsx("div", {
          className: "icon-btn",
          onClick: P,
          children: m.jsx("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            children: m.jsx("path", {
              d: "M19 12H5M12 19l-7-7 7-7"
            })
          })
        }), m.jsx("span", {
          className: "roster-title",
          children: $("homeAppRoster")
        })]
      }), m.jsxs("div", {
        className: "roster-actions",
        children: [m.jsx("div", {
          className: "icon-btn",
          onClick: () => q(true),
          title: "Relationship Map",
          children: m.jsxs("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [m.jsx("circle", {
              cx: "18",
              cy: "5",
              r: "3"
            }), m.jsx("circle", {
              cx: "6",
              cy: "12",
              r: "3"
            }), m.jsx("circle", {
              cx: "18",
              cy: "19",
              r: "3"
            }), m.jsx("line", {
              x1: "8.59",
              y1: "13.51",
              x2: "15.42",
              y2: "17.49"
            }), m.jsx("line", {
              x1: "15.41",
              y1: "6.51",
              x2: "8.59",
              y2: "10.49"
            })]
          })
        }), m.jsx("div", {
          className: "icon-btn",
          onClick: () => H(e => e === "grid" ? "carousel" : "grid"),
          title: "Roster View",
          children: V === "grid" ? m.jsxs("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [m.jsx("rect", {
              x: "3",
              y: "3",
              width: "7",
              height: "7"
            }), m.jsx("rect", {
              x: "14",
              y: "3",
              width: "7",
              height: "7"
            }), m.jsx("rect", {
              x: "14",
              y: "14",
              width: "7",
              height: "7"
            }), m.jsx("rect", {
              x: "3",
              y: "14",
              width: "7",
              height: "7"
            })]
          }) : m.jsx("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: m.jsx("path", {
              d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            })
          })
        })]
      })]
    }), m.jsxs("div", {
      className: "roster-sub-header",
      style: {
        justifyContent: "space-between",
        paddingRight: "12px"
      },
      children: [m.jsx("div", {
        ref: Be,
        className: "hide-scrollbar",
        onMouseDown: e => {
          Ge.current = false;
          Le(true);
          Oe(e.pageX - Be.current.offsetLeft);
          Ue(Be.current.scrollLeft);
        },
        onMouseLeave: () => {
          Le(false);
        },
        onMouseUp: () => {
          Le(false);
          setTimeout(() => Ge.current = false, 0);
        },
        onMouseMove: e => {
          if (!ze) {
            return;
          }
          e.preventDefault();
          const t = (e.pageX - Be.current.offsetLeft - We) * 1.5;
          if (Math.abs(t) > 5) {
            Ge.current = true;
          }
          Be.current.scrollLeft = Ee - t;
        },
        style: {
          display: "flex",
          gap: "8px",
          overflowX: "auto",
          paddingRight: "12px",
          flex: 1,
          minWidth: 0,
          cursor: ze ? "grabbing" : "grab",
          userSelect: "none",
          touchAction: "pan-x",
          WebkitOverflowScrolling: "touch"
        },
        children: _e.map(e => m.jsx("div", {
          onClick: t => {
            if (!Ge.current) {
              re(e);
            }
          },
          className: "category-pill " + (te === e ? "active" : ""),
          style: {
            flexShrink: 0
          },
          children: e === "All" ? $("categoryAll") : e
        }, e))
      }), m.jsx("div", {
        style: {
          borderLeft: "1px solid rgba(0,0,0,0.1)",
          paddingLeft: "12px",
          flexShrink: 0
        },
        children: se === "main" ? m.jsxs("div", {
          onClick: e => {
            if (!Ge.current) {
              ie("npc");
              re("All");
            }
          },
          className: "category-pill",
          style: {
            whiteSpace: "nowrap"
          },
          children: [$("typeNPC") || "NPC / 配角", " ➔"]
        }) : m.jsxs("div", {
          onClick: e => {
            if (!Ge.current) {
              ie("main");
              re("All");
            }
          },
          className: "category-pill",
          style: {
            whiteSpace: "nowrap"
          },
          children: ["⬅ ", $("typeMain") || "主角 / Main"]
        })
      })]
    }), m.jsx("div", {
      className: "roster-content",
      children: V === "grid" ? m.jsx("div", {
        className: "view-grid",
        children: m.jsxs("div", {
          className: "character-grid",
          children: [Xe.map(e => m.jsxs("div", {
            className: "premium-card",
            onClick: () => ne(e.id),
            style: {
              aspectRatio: "3/4"
            },
            children: [m.jsx("div", {
              className: "card-border"
            }), m.jsxs("div", {
              className: "card-content",
              children: [m.jsxs("div", {
                className: "card-avatar-container",
                children: [m.jsx("div", {
                  className: "card-trail"
                }), e.image ? m.jsx("img", {
                  decoding: "async",
                  src: e.image,
                  alt: e.name,
                  className: "card-avatar",
                  style: {
                    objectPosition: `${50 - (e.imageOffsetX || 0) / 2}% ${50 - (e.imageOffsetY || 0) / 2}%`,
                    transformOrigin: `${50 - (e.imageOffsetX || 0) / 2}% ${50 - (e.imageOffsetY || 0) / 2}%`,
                    transform: `scale(${e.imageScale || 1.15})`
                  }
                }) : m.jsx("div", {
                  style: {
                    width: "100%",
                    height: "100%",
                    background: "#2a3b42",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  },
                  children: m.jsx("span", {
                    style: {
                      fontSize: "24px",
                      color: "#bd9f67",
                      opacity: 0.5
                    },
                    children: "?"
                  })
                })]
              }), m.jsx("span", {
                className: "card-name-text",
                children: e.name
              })]
            }), m.jsx("div", {
              className: "card-role-text",
              children: e.role
            })]
          }, e.id)), Xe.length === 0 && m.jsx("div", {
            style: {
              textAlign: "center",
              padding: "60px",
              color: "#999",
              gridColumn: "1/-1"
            },
            children: te === "All" ? se === "npc" ? "No NPCs found." : "No characters found." : "No characters in this group."
          })]
        })
      }) : (() => {
        const e = Xe.length;
        if (e === 0) {
          return m.jsx("div", {
            style: {
              textAlign: "center",
              paddingTop: "100px",
              width: "100%",
              color: "#999"
            },
            children: te === "All" ? se === "npc" ? $("noNPCs") || "No NPCs" : $("noChars") || "No characters" : "No characters in this group."
          });
        } else {
          return m.jsx("div", {
            className: "view-carousel",
            onMouseDown: Ve,
            onMouseMove: He,
            onMouseUp: Ke,
            onTouchStart: Ve,
            onTouchMove: He,
            onTouchEnd: Ke,
            children: m.jsx("div", {
              className: "carousel-stage",
              style: {
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                perspective: "1200px",
                transformStyle: "preserve-3d"
              },
              children: Xe.map((t, r) => {
                let s = r - Ae;
                if (e > 1) {
                  s = (s % e + e + Math.floor(e / 2)) % e - Math.floor(e / 2);
                }
                if (Math.abs(s) > 4) {
                  return null;
                }
                const i = s * 180;
                const a = -Math.abs(s) * 80;
                const n = s * -15;
                const o = r === (Ae % e + e) % e;
                return m.jsx("div", {
                  className: "carousel-item",
                  style: {
                    width: "240px",
                    height: "340px",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) translateX(${i}px) translateZ(${a}px) rotateY(${n}deg)`,
                    zIndex: 100 - Math.abs(Math.round(s * 10)),
                    opacity: Math.abs(s) > 3 ? 0 : 1 - Math.abs(s) * 0.15,
                    transition: "all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
                    pointerEvents: Math.abs(s) > 1 ? "none" : "auto",
                    cursor: Math.abs(s) === 0 ? "default" : "pointer"
                  },
                  onClick: () => ((e, t) => {
                    const r = Xe.length;
                    if (r === 0) {
                      return;
                    }
                    const s = (Ae % r + r) % r;
                    if (e === s) {
                      ne(t.id);
                      W(t.id);
                    } else {
                      let t = e - s;
                      if (t > r / 2) {
                        t -= r;
                      }
                      if (t < -r / 2) {
                        t += r;
                      }
                      $e(e => ((e + t) % r + r) % r);
                    }
                  })(r, t),
                  children: m.jsx("div", {
                    className: "premium-card " + (o ? "active-center" : ""),
                    style: {
                      transform: o ? "scale(1.1)" : "scale(1)",
                      padding: 0
                    },
                    children: m.jsxs("div", {
                      className: "flip-card-inner",
                      children: [m.jsxs("div", {
                        className: "flip-card-front",
                        children: [m.jsx("div", {
                          className: "card-border"
                        }), m.jsxs("div", {
                          className: "card-content",
                          children: [m.jsxs("div", {
                            className: "card-avatar-container",
                            children: [m.jsx("div", {
                              className: "card-trail"
                            }), t.image ? m.jsx("img", {
                              decoding: "async",
                              src: t.image,
                              alt: t.name,
                              className: "card-avatar",
                              style: {
                                objectPosition: `${50 - (t.imageOffsetX || 0) / 2}% ${50 - (t.imageOffsetY || 0) / 2}%`,
                                transformOrigin: `${50 - (t.imageOffsetX || 0) / 2}% ${50 - (t.imageOffsetY || 0) / 2}%`,
                                transform: `scale(${t.imageScale || 1.15})`
                              }
                            }) : m.jsx("div", {
                              style: {
                                width: "100%",
                                height: "100%",
                                background: "#2a3b42",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                              },
                              children: m.jsx("span", {
                                style: {
                                  fontSize: "24px",
                                  color: "#bd9f67",
                                  opacity: 0.5
                                },
                                children: "?"
                              })
                            })]
                          }), m.jsx("span", {
                            className: "card-name-text",
                            children: t.name
                          })]
                        }), m.jsx("div", {
                          className: "card-role-text",
                          children: t.role
                        })]
                      }), m.jsx("div", {
                        className: "flip-card-back",
                        children: m.jsx("img", {
                          decoding: "async",
                          src: Pe(t),
                          alt: "Card Back",
                          style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                          }
                        })
                      })]
                    })
                  })
                }, t.id);
              })
            })
          });
        }
      })()
    }), K && m.jsx(N, {
      characters: k,
      onUpdateCharacter: S,
      onClose: () => q(false),
      groups: _e,
      profileUsers: B,
      userChatSettings: U,
      onUpdateUserRelationship: Y,
      userLinks: F,
      onUpdateUserLink: X,
      cohabitPairs: Q
    }), wt && R(wt, e => {
      if (e) {
        e.stopPropagation();
      }
      ne(null);
    }, k, $, e => {
      de(e.id);
      De({
        ...e,
        name: e.name || "",
        aliases: e.aliases || "",
        gender: e.gender || "female",
        role: e.role || "",
        group: e.group || "Default",
        birthday: e.birthday || "",
        nationality: e.nationality || "",
        description: e.description || "",
        worldBook: Array.isArray(e.worldBook) ? e.worldBook : e.worldBook ? [e.worldBook] : [],
        image: e.image || "",
        type: e.type || "main",
        boundTo: e.boundTo || [],
        momentFrequency: typeof e.momentFrequency == "number" ? e.momentFrequency : 40,
        imagePrompt: e.imagePrompt || "",
        imageSeed: e.imageSeed ?? "",
        refImageRef: e.refImageRef ?? null,
        _refImagePending: undefined,
        minimaxTimbreId: e.minimaxTimbreId || "",
        voiceProvider: e.voiceProvider || "minimax",
        elevenVoiceId: e.elevenVoiceId || "",
        sovitsRefAudioPath: e.sovitsRefAudioPath || "",
        sovitsRefText: e.sovitsRefText || "",
        sovitsGptPath: e.sovitsGptPath || "",
        sovitsSovitsPath: e.sovitsSovitsPath || "",
        sovitsApiVersion: e.sovitsApiVersion || "v2",
        sovitsGsviVoice: e.sovitsGsviVoice || "",
        sovitsGsviModel: e.sovitsGsviModel || "",
        sovitsGsviLang: e.sovitsGsviLang || "",
        sovitsGsviEmotion: e.sovitsGsviEmotion || ""
      });
      ue(null);
      if (e.refImageRef != null) {
        u.getBase64(e.refImageRef).then(e => {
          if (e) {
            ue(e);
          }
        }).catch(() => {});
      }
      ne(null);
      le(true);
    }, O, e => {
      Se({
        open: true,
        step: 1,
        char: e
      });
    }, e => {
      Ie({
        open: true,
        step: 1,
        char: e
      });
    }), oe && m.jsx("div", {
      className: "expanded-overlay",
      onClick: bt,
      children: m.jsxs("div", {
        className: "expanded-card",
        onClick: e => e.stopPropagation(),
        style: {
          height: "auto",
          maxHeight: "90%"
        },
        children: [m.jsx("div", {
          className: "expanded-close",
          onClick: bt,
          children: m.jsxs("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [m.jsx("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }), m.jsx("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })]
          })
        }), m.jsx("div", {
          style: {
            padding: "24px",
            borderBottom: "1px solid #bd9f67",
            color: "#bd9f67",
            fontSize: "18px",
            fontWeight: "bold"
          },
          children: ce ? $("editCharacter") || "編輯角色" : $("rosterAddNew") || "NEW CHARACTER"
        }), m.jsxs("div", {
          className: "expanded-body",
          style: {
            overflowY: "auto"
          },
          children: [m.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "24px"
            },
            children: [m.jsx("div", {
              className: "add-avatar-circle",
              onClick: () => he("avatar"),
              style: {
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                border: "2px dashed #bd9f67",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                overflow: "hidden",
                background: "rgba(255,255,255,0.05)",
                marginBottom: "6px"
              },
              children: Fe.image ? m.jsx("img", {
                decoding: "async",
                src: Fe.image,
                alt: "Preview",
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: `${50 - (Fe.avatarOffsetX ?? 0) / 2}% ${50 - (Fe.avatarOffsetY ?? 0) / 2}%`,
                  transformOrigin: `${50 - (Fe.avatarOffsetX ?? 0) / 2}% ${50 - (Fe.avatarOffsetY ?? 0) / 2}%`,
                  transform: `scale(${Fe.avatarScale ?? 1.15})`
                }
              }) : m.jsxs("div", {
                style: {
                  color: "#bd9f67",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px"
                },
                children: [m.jsxs("svg", {
                  width: "36",
                  height: "36",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  children: [m.jsx("path", {
                    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                  }), m.jsx("polyline", {
                    points: "17 8 12 3 7 8"
                  }), m.jsx("line", {
                    x1: "12",
                    y1: "3",
                    x2: "12",
                    y2: "15"
                  })]
                }), m.jsx("span", {
                  style: {
                    fontSize: "10px"
                  },
                  children: "Upload"
                })]
              })
            }), m.jsx("div", {
              style: {
                fontSize: "11px",
                color: "#ccc"
              },
              children: $("rosterUploadAvatar") || "点击更换头像"
            }), Fe.image && m.jsxs("div", {
              style: {
                width: "100%",
                marginTop: "16px",
                padding: "12px",
                background: "rgba(24, 26, 31, 0.5)",
                borderRadius: "8px",
                border: "1px solid rgba(189, 159, 103, 0.2)"
              },
              children: [m.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  color: "#bd9f67",
                  marginBottom: "8px"
                },
                children: [m.jsx("span", {
                  children: "头像缩放 (Avatar Scale)"
                }), m.jsxs("span", {
                  children: [(Fe.avatarScale ?? 1.15).toFixed(2), "x"]
                })]
              }), m.jsx("input", {
                type: "range",
                min: "0.5",
                max: "3",
                step: "0.05",
                value: Fe.avatarScale ?? 1.15,
                onChange: e => De(t => ({
                  ...t,
                  avatarScale: parseFloat(e.target.value)
                })),
                style: {
                  width: "100%",
                  accentColor: "#bd9f67",
                  marginBottom: "12px"
                }
              }), m.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  color: "#bd9f67",
                  marginBottom: "8px"
                },
                children: [m.jsx("span", {
                  children: "水平偏移 (Avatar Offset X)"
                }), m.jsxs("span", {
                  children: [Fe.avatarOffsetX ?? 0, "%"]
                })]
              }), m.jsx("input", {
                type: "range",
                min: "-100",
                max: "100",
                step: "1",
                value: Fe.avatarOffsetX ?? 0,
                onChange: e => De(t => ({
                  ...t,
                  avatarOffsetX: parseInt(e.target.value)
                })),
                style: {
                  width: "100%",
                  accentColor: "#bd9f67",
                  marginBottom: "12px"
                }
              }), m.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  color: "#bd9f67",
                  marginBottom: "8px"
                },
                children: [m.jsx("span", {
                  children: "垂直偏移 (Avatar Offset Y)"
                }), m.jsxs("span", {
                  children: [Fe.avatarOffsetY ?? 0, "%"]
                })]
              }), m.jsx("input", {
                type: "range",
                min: "-100",
                max: "100",
                step: "1",
                value: Fe.avatarOffsetY ?? 0,
                onChange: e => De(t => ({
                  ...t,
                  avatarOffsetY: parseInt(e.target.value)
                })),
                style: {
                  width: "100%",
                  accentColor: "#bd9f67",
                  marginBottom: "4px"
                }
              }), m.jsx("div", {
                style: {
                  display: "flex",
                  justifyContent: "flex-end"
                },
                children: m.jsx("button", {
                  onClick: () => De(e => ({
                    ...e,
                    avatarScale: 1.15,
                    avatarOffsetX: 0,
                    avatarOffsetY: 0
                  })),
                  style: {
                    background: "transparent",
                    border: "none",
                    color: "#ccc",
                    fontSize: "11px",
                    cursor: "pointer",
                    padding: 0
                  },
                  children: "重置 / Reset"
                })
              })]
            })]
          }), m.jsxs("div", {
            className: "form-group",
            children: [m.jsx("label", {
              children: $("rosterType")
            }), m.jsxs("div", {
              style: {
                display: "flex",
                gap: "15px"
              },
              children: [m.jsxs("label", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  color: "#fff",
                  fontSize: "14px",
                  textTransform: "none",
                  fontWeight: "normal",
                  margin: 0
                },
                children: [m.jsx("input", {
                  type: "radio",
                  name: "charType",
                  value: "main",
                  checked: Fe.type !== "npc",
                  onChange: () => De(e => ({
                    ...e,
                    type: "main"
                  })),
                  style: {
                    width: "auto",
                    accentColor: "#bd9f67"
                  }
                }), $("typeMain")]
              }), m.jsxs("label", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  color: "#fff",
                  fontSize: "14px",
                  textTransform: "none",
                  fontWeight: "normal",
                  margin: 0
                },
                children: [m.jsx("input", {
                  type: "radio",
                  name: "charType",
                  value: "npc",
                  checked: Fe.type === "npc",
                  onChange: () => De(e => ({
                    ...e,
                    type: "npc"
                  })),
                  style: {
                    width: "auto",
                    accentColor: "#bd9f67"
                  }
                }), $("typeNPC")]
              })]
            })]
          }), Fe.type === "npc" && m.jsxs("div", {
            className: "form-group",
            style: {
              background: "rgba(189, 159, 103, 0.1)",
              padding: "15px",
              borderRadius: "8px",
              border: "1px dashed #bd9f67"
            },
            children: [m.jsx("label", {
              style: {
                color: "#bd9f67"
              },
              children: $("rosterBindChar")
            }), m.jsx("div", {
              style: {
                maxHeight: "150px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              },
              children: kt.length > 0 ? kt.map(e => m.jsxs("label", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  textTransform: "none",
                  color: "#eee",
                  fontSize: "14px",
                  fontWeight: "normal",
                  margin: 0
                },
                children: [m.jsx("input", {
                  type: "checkbox",
                  checked: (Fe.boundTo || []).includes(e.id),
                  onChange: () => {
                    t = e.id;
                    De(e => {
                      const r = e.boundTo || [];
                      if (r.includes(t)) {
                        return {
                          ...e,
                          boundTo: r.filter(e => e !== t)
                        };
                      } else {
                        return {
                          ...e,
                          boundTo: [...r, t]
                        };
                      }
                    });
                    return;
                    var t;
                  },
                  style: {
                    width: "16px",
                    height: "16px",
                    accentColor: "#bd9f67"
                  }
                }), m.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  },
                  children: [e.image && m.jsx("img", {
                    decoding: "async",
                    src: e.image,
                    style: {
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      objectFit: "cover"
                    }
                  }), e.name]
                })]
              }, e.id)) : m.jsx("div", {
                style: {
                  color: "#999",
                  fontSize: "12px"
                },
                children: "No Main Characters available to bind."
              })
            })]
          }), m.jsxs("div", {
            className: "form-group",
            children: [m.jsx("label", {
              children: $("rosterName")
            }), m.jsx("input", {
              type: "text",
              value: Fe.name,
              onChange: e => {
                const t = e.target.value;
                De(e => ({
                  ...e,
                  name: t
                }));
              },
              placeholder: $("rosterNamePlaceholder")
            })]
          }), m.jsxs("div", {
            className: "form-group",
            children: [m.jsx("label", {
              children: $("rosterAliases") || "別名/替稱"
            }), m.jsx("input", {
              type: "text",
              value: Fe.aliases || "",
              onChange: e => {
                const t = e.target.value;
                De(e => ({
                  ...e,
                  aliases: t
                }));
              },
              placeholder: "e.g. 拉蒂奥, Veritas, 黑羊"
            }), m.jsx("small", {
              style: {
                color: "#999",
                fontSize: "11px",
                marginTop: "4px",
                display: "block"
              },
              children: "用逗號分隔多個別名，用於轉發記錄時識別角色"
            })]
          }), m.jsxs("div", {
            className: "form-group",
            children: [m.jsx("label", {
              children: $("rosterRole")
            }), m.jsx("input", {
              type: "text",
              value: Fe.role,
              onChange: e => {
                const t = e.target.value;
                De(e => ({
                  ...e,
                  role: t
                }));
              },
              placeholder: "e.g. Knight, Student..."
            })]
          }), m.jsxs("div", {
            className: "form-group",
            children: [m.jsx("label", {
              children: $("rosterGender")
            }), m.jsxs("select", {
              value: Fe.gender,
              onChange: e => {
                const t = e.target.value;
                De(e => ({
                  ...e,
                  gender: t
                }));
              },
              children: [m.jsx("option", {
                value: "female",
                children: $("genderFemale")
              }), m.jsx("option", {
                value: "male",
                children: $("genderMale")
              }), m.jsx("option", {
                value: "other",
                children: $("genderOther")
              })]
            })]
          }), Fe.type !== "npc" && m.jsxs("div", {
            className: "form-group",
            children: [m.jsx("label", {
              children: $("rosterGroup")
            }), m.jsxs("div", {
              style: {
                position: "relative"
              },
              children: [m.jsx("input", {
                list: "group-options",
                type: "text",
                value: Fe.group,
                onChange: e => {
                  const t = e.target.value;
                  De(e => ({
                    ...e,
                    group: t
                  }));
                },
                placeholder: $("rosterGroupPlaceholder") || "选择已有分组或输入新分组...",
                style: {
                  paddingRight: "36px"
                }
              }), m.jsx("svg", {
                style: {
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "#bd9f67",
                  opacity: 0.7
                },
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: m.jsx("polyline", {
                  points: "6 9 12 15 18 9"
                })
              })]
            }), m.jsx("datalist", {
              id: "group-options",
              children: Ye.map(e => m.jsx("option", {
                value: e
              }, e))
            }), Ye.length > 0 && m.jsx("div", {
              style: {
                marginTop: "6px",
                display: "flex",
                flexWrap: "wrap",
                gap: "6px"
              },
              children: Ye.map(e => m.jsx("span", {
                onClick: () => De(t => ({
                  ...t,
                  group: e
                })),
                style: {
                  cursor: "pointer",
                  padding: "4px 10px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  border: "1px solid rgba(189,159,103,0.4)",
                  color: Fe.group === e ? "#243137" : "#bd9f67",
                  background: Fe.group === e ? "#bd9f67" : "rgba(189,159,103,0.1)",
                  transition: "all 0.2s"
                },
                children: e
              }, e))
            })]
          }), Fe.type !== "npc" && m.jsxs("div", {
            className: "form-group",
            children: [m.jsx("label", {
              children: $("rosterBirthday")
            }), m.jsx("input", {
              type: "text",
              value: Fe.birthday,
              onChange: e => {
                const t = e.target.value;
                De(e => ({
                  ...e,
                  birthday: t
                }));
              },
              placeholder: "YYYY-MM-DD"
            })]
          }), Fe.type !== "npc" && m.jsxs("div", {
            className: "form-group",
            children: [m.jsx("label", {
              children: $("rosterNationality")
            }), m.jsx("input", {
              type: "text",
              value: Fe.nationality || "",
              onChange: e => {
                const t = e.target.value;
                De(e => ({
                  ...e,
                  nationality: t
                }));
              },
              placeholder: $("rosterNationalityPlaceholder")
            }), m.jsx("div", {
              className: "form-hint",
              children: $("rosterNationalityHint")
            })]
          }), Fe.type !== "npc" && m.jsxs("div", {
            className: "form-group",
            children: [m.jsxs("label", {
              children: [$("rosterMomentFrequency"), m.jsxs("span", {
                style: {
                  marginLeft: "8px",
                  color: "#bd9f67",
                  fontWeight: 600
                },
                children: [Fe.momentFrequency ?? 40, "%"]
              })]
            }), m.jsx("input", {
              type: "range",
              min: "0",
              max: "100",
              step: "5",
              value: Fe.momentFrequency ?? 40,
              onChange: e => {
                const t = Number(e.target.value);
                De(e => ({
                  ...e,
                  momentFrequency: t
                }));
              },
              style: {
                width: "100%",
                accentColor: "#bd9f67"
              }
            }), m.jsx("small", {
              style: {
                color: "rgba(255,255,255,0.5)",
                fontSize: "11px"
              },
              children: $("rosterMomentFrequencyHint")
            })]
          }), m.jsxs("div", {
            className: "form-group",
            children: [m.jsx("label", {
              children: $("rosterImagePrompt")
            }), m.jsx("textarea", {
              value: Fe.imagePrompt || "",
              onChange: e => {
                const t = e.target.value;
                De(e => ({
                  ...e,
                  imagePrompt: t
                }));
              },
              placeholder: "e.g. 1girl, long black hair, brown eyes, school uniform",
              rows: 3,
              style: {
                width: "100%",
                boxSizing: "border-box",
                resize: "vertical",
                fontFamily: "inherit",
                lineHeight: 1.4
              }
            }), m.jsx("small", {
              style: {
                color: "rgba(255,255,255,0.5)",
                fontSize: "11px"
              },
              children: $("rosterImagePromptHint")
            })]
          }), m.jsxs("div", {
            className: "form-group",
            children: [m.jsx("label", {
              children: $("rosterImageSeed")
            }), m.jsxs("div", {
              style: {
                display: "flex",
                gap: "8px"
              },
              children: [m.jsx("input", {
                type: "text",
                inputMode: "numeric",
                value: Fe.imageSeed ?? "",
                onChange: e => {
                  const t = e.target.value.replace(/[^0-9]/g, "");
                  De(e => ({
                    ...e,
                    imageSeed: t
                  }));
                },
                placeholder: $("phRosterImageSeed"),
                style: {
                  flex: 1,
                  boxSizing: "border-box",
                  fontFamily: "inherit"
                }
              }), m.jsxs("button", {
                type: "button",
                onClick: () => De(e => ({
                  ...e,
                  imageSeed: String(Math.floor(Math.random() * 4294967295))
                })),
                style: {
                  padding: "0 14px",
                  whiteSpace: "nowrap"
                },
                children: ["🎲 ", $("rosterImageSeedRandom")]
              })]
            }), m.jsx("small", {
              style: {
                color: "rgba(255,255,255,0.5)",
                fontSize: "11px"
              },
              children: $("rosterImageSeedHint")
            })]
          }), m.jsxs("div", {
            className: "form-group",
            children: [m.jsx("label", {
              children: $("rosterRefImage")
            }), m.jsxs("div", {
              style: {
                display: "flex",
                gap: "10px",
                alignItems: "flex-start"
              },
              children: [xe ? m.jsx("img", {
                src: xe,
                alt: "ref",
                onClick: () => ve(true),
                style: {
                  width: 72,
                  height: 72,
                  objectFit: "cover",
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.15)",
                  cursor: "pointer"
                }
              }) : m.jsx("div", {
                onClick: () => ve(true),
                style: {
                  width: 72,
                  height: 72,
                  borderRadius: 8,
                  border: "1px dashed rgba(255,255,255,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  color: "rgba(255,255,255,0.3)",
                  cursor: "pointer"
                },
                children: "📌"
              }), m.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: 6
                },
                children: [m.jsx("button", {
                  type: "button",
                  onClick: () => ve(true),
                  style: {
                    padding: "6px 14px"
                  },
                  children: $(xe ? "rosterRefImageChange" : "rosterRefImageSet")
                }), xe && m.jsx("button", {
                  type: "button",
                  onClick: () => {
                    ue(null);
                    De(e => ({
                      ...e,
                      _refImagePending: ""
                    }));
                    ke({
                      status: "idle",
                      resultImg: null,
                      msg: ""
                    });
                  },
                  style: {
                    padding: "6px 14px",
                    color: "#ff6b6b"
                  },
                  children: $("rosterRefImageClear")
                }), xe && m.jsx("button", {
                  type: "button",
                  onClick: async () => {
                    if (je.status === "running") {
                      return;
                    }
                    const e = xe;
                    if (e && typeof e == "string" && e.startsWith("data:")) {
                      ke({
                        status: "running",
                        resultImg: null,
                        msg: ""
                      });
                      try {
                        const {
                          generateImage: t,
                          resolveImageApiForScene: r,
                          REF_IMAGE_SUPPORTED_PROVIDERS: s,
                          buildCharAppearancePrompt: i
                        } = await n(async () => {
                          const {
                            generateImage: e,
                            resolveImageApiForScene: t,
                            REF_IMAGE_SUPPORTED_PROVIDERS: r,
                            buildCharAppearancePrompt: s
                          } = await import("./native-pet-CTNtZgMA.js").then(e => e.cC);
                          return {
                            generateImage: e,
                            resolveImageApiForScene: t,
                            REF_IMAGE_SUPPORTED_PROVIDERS: r,
                            buildCharAppearancePrompt: s
                          };
                        }, __vite__mapDeps([2, 3, 4, 5, 6, 7]));
                        const a = await l.get("apiSettings");
                        if (!a) {
                          ke({
                            status: "error",
                            resultImg: null,
                            msg: $("rosterRefTestNoApi")
                          });
                          return;
                        }
                        const o = r("chat", a);
                        if (!o) {
                          ke({
                            status: "error",
                            resultImg: null,
                            msg: $("rosterRefTestNoApi")
                          });
                          return;
                        }
                        if (!s.includes(o)) {
                          ke({
                            status: "unsupported",
                            resultImg: null,
                            msg: M("rosterRefTestUnsupported", "當前聊天生圖 API（{provider}）不支援上傳參考圖鎖臉，可換用 NovelAI / Gemini(Nano Banana) / GPT-image。").replace("{provider}", o)
                          });
                          return;
                        }
                        const c = [i(Fe, Fe.imagePrompt), "portrait, upper body, looking at viewer, simple background"].filter(Boolean).join(", ");
                        const d = await t(c, "chat", a, {
                          refImageBase64: e,
                          throwOnError: true
                        });
                        ke(d ? {
                          status: "done",
                          resultImg: d,
                          msg: M("rosterRefTestOk", "測試成功！該 API 支援參考圖，下方為生成結果。")
                        } : {
                          status: "error",
                          resultImg: null,
                          msg: M("rosterRefTestFail", "生圖返回空，可能該 API 不支援參考圖或暫時不可用。")
                        });
                      } catch (t) {
                        console.warn("[RefTest] 測試鎖臉失敗:", t);
                        ke({
                          status: "error",
                          resultImg: null,
                          msg: M("rosterRefTestFailDetail", "測試失敗：{err}").replace("{err}", ((t == null ? undefined : t.message) || String(t)).slice(0, 160))
                        });
                      }
                    } else {
                      ke({
                        status: "error",
                        resultImg: null,
                        msg: $("rosterRefTestNoImage")
                      });
                    }
                  },
                  disabled: je.status === "running",
                  title: $("rosterRefTestHint"),
                  style: {
                    padding: "6px 14px",
                    background: "linear-gradient(135deg, #6c5ce7, #4834d4)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    fontWeight: 600,
                    cursor: je.status === "running" ? "wait" : "pointer",
                    opacity: je.status === "running" ? 0.6 : 1
                  },
                  children: je.status === "running" ? $("rosterRefTestRunning") : `🔒 ${$("rosterRefTest")}`
                })]
              })]
            }), m.jsx("small", {
              style: {
                color: "rgba(255,255,255,0.5)",
                fontSize: "11px"
              },
              children: $("rosterRefImageHint")
            }), je.status !== "idle" && m.jsxs("div", {
              style: {
                marginTop: 8
              },
              children: [je.msg && m.jsx("div", {
                style: {
                  fontSize: 12,
                  lineHeight: 1.5,
                  padding: "6px 10px",
                  borderRadius: 8,
                  background: je.status === "done" ? "rgba(52,199,89,0.15)" : je.status === "unsupported" ? "rgba(255,159,10,0.15)" : je.status === "running" ? "rgba(255,255,255,0.08)" : "rgba(255,69,58,0.15)",
                  color: je.status === "done" ? "#34c759" : je.status === "unsupported" ? "#ff9f0a" : je.status === "running" ? "rgba(255,255,255,0.7)" : "#ff453a"
                },
                children: je.status === "running" ? $("rosterRefTestRunning") : je.msg
              }), je.resultImg && m.jsx("img", {
                src: je.resultImg,
                alt: "ref-test-result",
                style: {
                  marginTop: 8,
                  maxWidth: 160,
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.15)"
                }
              })]
            }), m.jsxs("div", {
              style: {
                marginTop: 10
              },
              children: [m.jsxs("label", {
                style: {
                  fontSize: 12,
                  display: "block",
                  marginBottom: 4
                },
                children: [$("rosterRefStrength"), "：", ge, "%"]
              }), m.jsx("input", {
                type: "range",
                min: 10,
                max: 100,
                step: 5,
                value: ge,
                onChange: e => {
                  const t = Number(e.target.value);
                  me(t);
                  l.set("refImageStrength", t).catch(() => {});
                },
                style: {
                  width: "100%"
                }
              }), m.jsx("small", {
                style: {
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "11px"
                },
                children: $("rosterRefStrengthHint")
              })]
            })]
          }), m.jsxs("div", {
            className: "form-group",
            children: [m.jsx("label", {
              children: $("labelVoiceProvider", "語音供應商")
            }), m.jsx("div", {
              style: {
                display: "flex",
                gap: "8px"
              },
              children: [{
                id: "minimax",
                label: "MiniMax"
              }, {
                id: "elevenlabs",
                label: "ElevenLabs"
              }, {
                id: "gptsovits",
                label: "SoVITS"
              }].map(e => {
                const t = (Fe.voiceProvider || "minimax") === e.id;
                return m.jsx("button", {
                  type: "button",
                  onClick: () => De(t => ({
                    ...t,
                    voiceProvider: e.id
                  })),
                  style: {
                    flex: 1,
                    padding: "8px",
                    borderRadius: "6px",
                    fontFamily: "inherit",
                    cursor: "pointer",
                    border: "1px solid " + (t ? "#007aff" : "rgba(255,255,255,0.2)"),
                    background: t ? "#007aff" : "rgba(255,255,255,0.06)",
                    color: t ? "#fff" : "rgba(255,255,255,0.8)"
                  },
                  children: e.label
                }, e.id);
              })
            })]
          }), (Fe.voiceProvider || "minimax") === "gptsovits" ? m.jsx(m.Fragment, {
            children: fe === "gsvi" ? m.jsxs(m.Fragment, {
              children: [m.jsxs("div", {
                className: "form-group",
                children: [m.jsx("label", {
                  children: $("labelSovitsGsviVoice", "GSVI 說話人名 (voice)")
                }), m.jsx("input", {
                  type: "text",
                  value: Fe.sovitsGsviVoice || "",
                  onChange: e => {
                    const t = e.target.value;
                    De(e => ({
                      ...e,
                      sovitsGsviVoice: t
                    }));
                  },
                  placeholder: $("placeholderSovitsGsviVoice", "說話人名（= models/版本/ 下的資料夾名，如 小紅）"),
                  style: {
                    width: "100%",
                    boxSizing: "border-box",
                    fontFamily: "inherit"
                  }
                }), m.jsx("small", {
                  style: {
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "11px"
                  },
                  children: $("descSovitsGsviVoice", "【僅 GSVI 整合包用】決定音色的說話人名，要和 GSVI 說話人列表裡的名字一致。官方 api_v2/api 版本不用填這個。")
                })]
              }), m.jsxs("div", {
                className: "form-group",
                children: [m.jsx("label", {
                  children: $("labelSovitsGsviModel", "GSVI 模型版本")
                }), m.jsx("input", {
                  type: "text",
                  value: Fe.sovitsGsviModel || "",
                  onChange: e => {
                    const t = e.target.value;
                    De(e => ({
                      ...e,
                      sovitsGsviModel: t
                    }));
                  },
                  placeholder: $("placeholderSovitsGsviModel", "留空＝v4，可填 v2 / v3 / v4 / v2Pro / v2ProPlus"),
                  style: {
                    width: "100%",
                    boxSizing: "border-box",
                    fontFamily: "inherit"
                  }
                }), m.jsx("small", {
                  style: {
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "11px"
                  },
                  children: $("descSovitsGsviModel", "【僅 GSVI 整合包用】對應你模型的 GPT-SoVITS 版本（看 weights 目錄名如 v2ProPlus）。只能是 v2/v3/v4/v2Pro/v2ProPlus，留空預設 v4。")
                })]
              }), m.jsxs("div", {
                className: "form-group",
                children: [m.jsx("label", {
                  children: $("labelSovitsGsviLang", "GSVI 合成語言")
                }), m.jsxs("select", {
                  value: Fe.sovitsGsviLang || "",
                  onChange: e => {
                    const t = e.target.value;
                    De(e => ({
                      ...e,
                      sovitsGsviLang: t
                    }));
                  },
                  style: {
                    width: "100%",
                    boxSizing: "border-box",
                    fontFamily: "inherit"
                  },
                  children: [m.jsx("option", {
                    value: "",
                    children: $("sovitsGsviLangMixDefault", "中英混合（預設）")
                  }), m.jsx("option", {
                    value: "中文",
                    children: $("sovitsGsviLangZh", "中文")
                  }), m.jsx("option", {
                    value: "英文",
                    children: $("sovitsGsviLangEn", "英文")
                  }), m.jsx("option", {
                    value: "日文",
                    children: $("sovitsGsviLangJa", "日文")
                  }), m.jsx("option", {
                    value: "韩文",
                    children: $("sovitsGsviLangKo", "韓文")
                  }), m.jsx("option", {
                    value: "粤语",
                    children: $("sovitsGsviLangYue", "粵語")
                  })]
                }), m.jsx("small", {
                  style: {
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "11px"
                  },
                  children: $("descSovitsGsviLang", "【僅 GSVI 整合包用】單中文模型必須選「中文」（選「中英混合」會報錯）。預設＝中英混合。")
                })]
              }), m.jsxs("div", {
                className: "form-group",
                children: [m.jsx("label", {
                  children: $("labelSovitsGsviEmotion", "GSVI 情緒")
                }), m.jsx("input", {
                  type: "text",
                  value: Fe.sovitsGsviEmotion || "",
                  onChange: e => {
                    const t = e.target.value;
                    De(e => ({
                      ...e,
                      sovitsGsviEmotion: t
                    }));
                  },
                  placeholder: $("placeholderSovitsGsviEmotion", "如 開心 / 其他 / 生氣（留空＝其他）"),
                  style: {
                    width: "100%",
                    boxSizing: "border-box",
                    fontFamily: "inherit"
                  }
                }), m.jsx("small", {
                  style: {
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "11px"
                  },
                  children: $("descSovitsGsviEmotion", "【僅 GSVI 整合包用】= 該說話人 emotions 目錄下【】裡的情緒詞，要和檔名一致。留空＝「其他」。")
                })]
              })]
            }) : m.jsxs(m.Fragment, {
              children: [m.jsxs("div", {
                className: "form-group",
                children: [m.jsx("label", {
                  children: $("labelSovitsRefAudio", "SoVITS 參考音頻路徑")
                }), m.jsx("input", {
                  type: "text",
                  value: Fe.sovitsRefAudioPath || "",
                  onChange: e => {
                    const t = e.target.value;
                    De(e => ({
                      ...e,
                      sovitsRefAudioPath: t
                    }));
                  },
                  placeholder: $("placeholderSovitsRefAudio", "服務器上的音頻路徑，如 D:/refs/voice.wav"),
                  style: {
                    width: "100%",
                    boxSizing: "border-box",
                    fontFamily: "inherit"
                  }
                }), m.jsx("small", {
                  style: {
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "11px"
                  },
                  children: $("descSovitsRefAudio", "此路徑是【跑 GPT-SoVITS 那台電腦上】的絕對路徑（決定音色）。需先在 API 設定填好服務地址。")
                })]
              }), m.jsxs("div", {
                className: "form-group",
                children: [m.jsx("label", {
                  children: $("labelSovitsRefText", "SoVITS 參考文本")
                }), m.jsx("input", {
                  type: "text",
                  value: Fe.sovitsRefText || "",
                  onChange: e => {
                    const t = e.target.value;
                    De(e => ({
                      ...e,
                      sovitsRefText: t
                    }));
                  },
                  placeholder: $("placeholderSovitsRefText", "參考音頻所說的文字內容"),
                  style: {
                    width: "100%",
                    boxSizing: "border-box",
                    fontFamily: "inherit"
                  }
                }), m.jsx("small", {
                  style: {
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "11px"
                  },
                  children: $("descSovitsRefText", "參考音頻裡實際念的那句話，需與音頻內容一致。")
                })]
              }), m.jsxs("div", {
                className: "form-group",
                children: [m.jsx("label", {
                  children: $("labelSovitsGptPath", "SoVITS GPT 模型路徑")
                }), m.jsx("input", {
                  type: "text",
                  value: Fe.sovitsGptPath || "",
                  onChange: e => {
                    const t = e.target.value;
                    De(e => ({
                      ...e,
                      sovitsGptPath: t
                    }));
                  },
                  placeholder: $("placeholderSovitsGptPath", "專屬 GPT 權重路徑，如 GPT_weights_v2ProPlus/角色-e10.ckpt"),
                  style: {
                    width: "100%",
                    boxSizing: "border-box",
                    fontFamily: "inherit"
                  }
                }), m.jsx("small", {
                  style: {
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "11px"
                  },
                  children: $("descSovitsGptPath", "為此角色專門訓練的 GPT 權重(.ckpt)，服務器上的路徑。留空則用服務默認權重。")
                })]
              }), m.jsxs("div", {
                className: "form-group",
                children: [m.jsx("label", {
                  children: $("labelSovitsSovitsPath", "SoVITS 模型路徑")
                }), m.jsx("input", {
                  type: "text",
                  value: Fe.sovitsSovitsPath || "",
                  onChange: e => {
                    const t = e.target.value;
                    De(e => ({
                      ...e,
                      sovitsSovitsPath: t
                    }));
                  },
                  placeholder: $("placeholderSovitsSovitsPath", "專屬 SoVITS 權重路徑，如 SoVITS_weights_v2ProPlus/角色_e10_s230.pth"),
                  style: {
                    width: "100%",
                    boxSizing: "border-box",
                    fontFamily: "inherit"
                  }
                }), m.jsx("small", {
                  style: {
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "11px"
                  },
                  children: $("descSovitsSovitsPath", "為此角色專門訓練的 SoVITS 權重(.pth)，服務器上的路徑。留空則用服務默認權重。")
                })]
              })]
            })
          }) : (Fe.voiceProvider || "minimax") === "elevenlabs" ? m.jsxs("div", {
            className: "form-group",
            children: [m.jsx("label", {
              children: $("labelElevenVoiceId", "ElevenLabs 音色 ID")
            }), m.jsx("input", {
              type: "text",
              value: Fe.elevenVoiceId || "",
              onChange: e => {
                const t = e.target.value;
                De(e => ({
                  ...e,
                  elevenVoiceId: t
                }));
              },
              placeholder: $("placeholderElevenVoiceId", "如 21m00Tcm4TlvDq8ikWAM"),
              style: {
                width: "100%",
                boxSizing: "border-box",
                fontFamily: "inherit"
              }
            }), m.jsx("small", {
              style: {
                color: "rgba(255,255,255,0.5)",
                fontSize: "11px"
              },
              children: $("rosterVoiceIdHint")
            })]
          }) : m.jsxs("div", {
            className: "form-group",
            children: [m.jsx("label", {
              children: $("rosterVoiceId")
            }), m.jsx("input", {
              type: "text",
              value: Fe.minimaxTimbreId || "",
              onChange: e => {
                const t = e.target.value;
                De(e => ({
                  ...e,
                  minimaxTimbreId: t
                }));
              },
              placeholder: $("placeholderMinimaxId"),
              style: {
                width: "100%",
                boxSizing: "border-box",
                fontFamily: "inherit"
              }
            }), m.jsx("small", {
              style: {
                color: "rgba(255,255,255,0.5)",
                fontSize: "11px"
              },
              children: $("rosterVoiceIdHint")
            })]
          }), Fe.type !== "npc" && m.jsxs("div", {
            className: "form-group",
            children: [m.jsx("label", {
              children: $("rosterWorldBook")
            }), m.jsx("div", {
              style: {
                display: "flex",
                flexWrap: "wrap",
                gap: "8px"
              },
              children: O.length > 0 ? O.filter(e => e.isGlobal !== true && e.isGlobal !== "true").map(e => {
                const t = Array.isArray(Fe.worldBook) && Fe.worldBook.includes(String(e.id));
                return m.jsx("div", {
                  onClick: () => {
                    De(t => {
                      const r = Array.isArray(t.worldBook) ? [...t.worldBook] : [];
                      const s = String(e.id);
                      if (r.includes(s)) {
                        return {
                          ...t,
                          worldBook: r.filter(e => e !== s)
                        };
                      } else {
                        return {
                          ...t,
                          worldBook: [...r, s]
                        };
                      }
                    });
                  },
                  className: "category-pill " + (t ? "active" : ""),
                  style: {
                    border: t ? "1px solid #bd9f67" : "1px solid rgba(255,255,255,0.2)",
                    background: t ? "#bd9f67" : "rgba(0,0,0,0.2)",
                    color: t ? "#243137" : "#aaa",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: t ? "bold" : "normal",
                    fontSize: "13px",
                    transition: "all 0.2s"
                  },
                  children: e.title
                }, e.id);
              }) : m.jsx("div", {
                style: {
                  color: "#999",
                  fontSize: "13px",
                  fontStyle: "italic"
                },
                children: $("noWorldBooks") || "No World Books created yet."
              })
            }), O.some(e => e.isGlobal === true || e.isGlobal === "true") && m.jsxs("div", {
              style: {
                marginTop: "8px",
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                alignItems: "center"
              },
              children: [m.jsxs("span", {
                style: {
                  fontSize: "11px",
                  color: "#888",
                  marginRight: "2px"
                },
                children: ["✦ ", $("rosterGlobalBooks") || "Global", ":"]
              }), O.filter(e => e.isGlobal === true || e.isGlobal === "true").map(e => m.jsx("span", {
                style: {
                  border: "1px solid rgba(189,159,103,0.35)",
                  background: "rgba(189,159,103,0.10)",
                  color: "#bd9f67",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  opacity: 0.75
                },
                children: e.title
              }, e.id))]
            })]
          }), m.jsxs("div", {
            className: "form-group",
            children: [m.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "4px"
              },
              children: [m.jsx("label", {
                style: {
                  margin: 0
                },
                children: $("rosterPersona")
              }), m.jsxs("button", {
                type: "button",
                onClick: () => {
                  var e;
                  if ((e = yt.current) == null) {
                    return undefined;
                  } else {
                    return e.click();
                  }
                },
                style: {
                  background: "rgba(189,159,103,0.15)",
                  border: "1px solid rgba(189,159,103,0.4)",
                  color: "#bd9f67",
                  padding: "3px 10px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  cursor: "pointer"
                },
                children: ["📄 ", $("rosterImportDocx")]
              }), m.jsx("input", {
                ref: yt,
                type: "file",
                accept: ".docx,.txt",
                style: {
                  display: "none"
                },
                onChange: async e => {
                  var t;
                  const r = (t = e.target.files) == null ? undefined : t[0];
                  if (r) {
                    try {
                      let e = "";
                      if (r.name.endsWith(".txt")) {
                        e = await r.text();
                      } else {
                        const t = await r.arrayBuffer();
                        const s = (await n(async () => {
                          const {
                            default: e
                          } = await import("./vendor-mammoth-BGDDh2nq.js").then(e => e.i);
                          return {
                            default: e
                          };
                        }, __vite__mapDeps([12, 3, 5]))).default;
                        const i = await s.extractRawText({
                          arrayBuffer: t
                        });
                        e = i.value || "";
                      }
                      De(t => ({
                        ...t,
                        description: t.description ? t.description + "\n" + e : e
                      }));
                    } catch (s) {
                      console.error("[CharacterRosterApp] 導入失敗:", s);
                      x("導入失敗，請確認檔案格式為 .docx 或 .txt");
                    }
                    e.target.value = "";
                  }
                }
              })]
            }), m.jsx("textarea", {
              rows: "10",
              value: Fe.description,
              onChange: e => {
                const t = e.target.value;
                De(e => ({
                  ...e,
                  description: t
                }));
              },
              placeholder: "Character description...",
              style: {
                minHeight: "150px",
                resize: "vertical"
              }
            })]
          }), Fe.image && m.jsxs("div", {
            className: "form-group",
            style: {
              background: "rgba(0,0,0,0.2)",
              padding: "16px",
              borderRadius: "8px",
              border: "1px solid rgba(189,159,103,0.2)"
            },
            children: [m.jsx("div", {
              style: {
                color: "#bd9f67",
                marginBottom: "16px",
                fontSize: "13px",
                fontWeight: "bold"
              },
              children: $("editImagePosition") === "editImagePosition" ? "图片位置 & 缩放 (Image Position)" : $("editImagePosition")
            }), m.jsxs("div", {
              style: {
                display: "flex",
                gap: "20px",
                alignItems: "center"
              },
              children: [m.jsxs("div", {
                style: {
                  width: "100px",
                  height: "140px",
                  background: "#243137",
                  borderRadius: "6px",
                  border: "1px solid rgba(189,159,103,0.5)",
                  overflow: "hidden",
                  flexShrink: 0,
                  position: "relative",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
                  cursor: "move",
                  touchAction: "none"
                },
                onPointerDown: e => {
                  var t;
                  var r;
                  var s;
                  var i;
                  e.preventDefault();
                  e.currentTarget.setPointerCapture(e.pointerId);
                  e.currentTarget.dataset.dragging = "true";
                  e.currentTarget.dataset.startX = e.clientX || ((r = (t = e.touches) == null ? undefined : t[0]) == null ? undefined : r.clientX);
                  e.currentTarget.dataset.startY = e.clientY || ((i = (s = e.touches) == null ? undefined : s[0]) == null ? undefined : i.clientY);
                  e.currentTarget.dataset.startOffsetX = Fe.imageOffsetX || 0;
                  e.currentTarget.dataset.startOffsetY = Fe.imageOffsetY || 0;
                },
                onPointerMove: e => {
                  var t;
                  var r;
                  var s;
                  var i;
                  if (e.currentTarget.dataset.dragging === "true") {
                    const a = e.clientX || ((r = (t = e.touches) == null ? undefined : t[0]) == null ? undefined : r.clientX);
                    const n = e.clientY || ((i = (s = e.touches) == null ? undefined : s[0]) == null ? undefined : i.clientY);
                    const o = a - parseFloat(e.currentTarget.dataset.startX);
                    const l = n - parseFloat(e.currentTarget.dataset.startY);
                    const c = Fe.imageScale || 1.15;
                    let d = parseFloat(e.currentTarget.dataset.startOffsetX) + o / c;
                    let p = parseFloat(e.currentTarget.dataset.startOffsetY) + l / 1.4 / c;
                    De(e => ({
                      ...e,
                      imageOffsetX: Math.round(d),
                      imageOffsetY: Math.round(p)
                    }));
                  }
                },
                onPointerUp: e => {
                  e.currentTarget.releasePointerCapture(e.pointerId);
                  e.currentTarget.dataset.dragging = "false";
                },
                children: [m.jsx("img", {
                  decoding: "async",
                  src: Fe.image,
                  alt: "Preview",
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: `translate(${Fe.imageOffsetX || 0}%, ${Fe.imageOffsetY || 0}%) scale(${Fe.imageScale || 1.15})`,
                    pointerEvents: "none"
                  }
                }), m.jsx("div", {
                  style: {
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    padding: "6px 0",
                    background: "linear-gradient(transparent, rgba(0,0,0,0.9))",
                    color: "#bd9f67",
                    textAlign: "center",
                    fontSize: "12px",
                    fontWeight: "bold",
                    textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                    pointerEvents: "none"
                  },
                  children: Fe.name || "名称"
                })]
              }), m.jsxs("div", {
                style: {
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px"
                },
                children: [m.jsxs("div", {
                  children: [m.jsxs("label", {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#eee",
                      fontSize: "11px",
                      textTransform: "none"
                    },
                    children: [m.jsx("span", {
                      children: $("imageScale") === "imageScale" ? "缩放 (Scale)" : $("imageScale")
                    }), m.jsxs("span", {
                      style: {
                        color: "#bd9f67"
                      },
                      children: [(Fe.imageScale || 1.15).toFixed(2), "x"]
                    })]
                  }), m.jsx("input", {
                    type: "range",
                    min: "0.5",
                    max: "3",
                    step: "0.05",
                    value: Fe.imageScale || 1.15,
                    onChange: e => {
                      const t = parseFloat(e.target.value);
                      De(e => ({
                        ...e,
                        imageScale: t
                      }));
                    },
                    style: {
                      width: "100%",
                      accentColor: "#bd9f67"
                    }
                  })]
                }), m.jsxs("div", {
                  children: [m.jsxs("label", {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#eee",
                      fontSize: "11px",
                      textTransform: "none"
                    },
                    children: [m.jsx("span", {
                      children: $("imageOffsetX") === "imageOffsetX" ? "X偏移 (向左右滑动左图预览)" : $("imageOffsetX")
                    }), m.jsxs("span", {
                      style: {
                        color: "#bd9f67"
                      },
                      children: [Fe.imageOffsetX || 0, "%"]
                    })]
                  }), m.jsx("input", {
                    type: "range",
                    min: "-100",
                    max: "100",
                    step: "1",
                    value: Fe.imageOffsetX || 0,
                    onChange: e => {
                      const t = parseInt(e.target.value);
                      De(e => ({
                        ...e,
                        imageOffsetX: t
                      }));
                    },
                    style: {
                      width: "100%",
                      accentColor: "#bd9f67"
                    }
                  })]
                }), m.jsxs("div", {
                  children: [m.jsxs("label", {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#eee",
                      fontSize: "11px",
                      textTransform: "none"
                    },
                    children: [m.jsx("span", {
                      children: $("imageOffsetY") === "imageOffsetY" ? "Y偏移 (向上下滑动左图预览)" : $("imageOffsetY")
                    }), m.jsxs("span", {
                      style: {
                        color: "#bd9f67"
                      },
                      children: [Fe.imageOffsetY || 0, "%"]
                    })]
                  }), m.jsx("input", {
                    type: "range",
                    min: "-100",
                    max: "100",
                    step: "1",
                    value: Fe.imageOffsetY || 0,
                    onChange: e => {
                      const t = parseInt(e.target.value);
                      De(e => ({
                        ...e,
                        imageOffsetY: t
                      }));
                    },
                    style: {
                      width: "100%",
                      accentColor: "#bd9f67"
                    }
                  })]
                })]
              })]
            })]
          }), m.jsxs("div", {
            className: "form-group",
            style: {
              background: "rgba(0,0,0,0.2)",
              padding: "16px",
              borderRadius: "8px",
              border: "1px solid rgba(189,159,103,0.2)"
            },
            children: [m.jsx("div", {
              style: {
                color: "#bd9f67",
                marginBottom: "12px",
                fontSize: "13px",
                fontWeight: "bold"
              },
              children: $("customCardBack") === "customCardBack" ? "自定义卡背 (Card Back)" : $("customCardBack")
            }), m.jsxs("div", {
              style: {
                display: "flex",
                gap: "12px",
                alignItems: "center",
                marginBottom: "16px"
              },
              children: [m.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "6px"
                },
                children: [m.jsx("div", {
                  className: "add-avatar-circle",
                  onClick: () => he("charBack"),
                  style: {
                    width: "64px",
                    height: "90px",
                    border: "1px dashed #bd9f67",
                    borderRadius: "4px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    overflow: "hidden"
                  },
                  children: Fe.cardBack ? m.jsx("img", {
                    decoding: "async",
                    src: Fe.cardBack,
                    style: {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }
                  }) : m.jsxs("span", {
                    style: {
                      fontSize: "12px",
                      color: "#bd9f67",
                      textAlign: "center",
                      textTransform: "none"
                    },
                    children: ["+", m.jsx("br", {}), "Role"]
                  })
                }), m.jsx("span", {
                  style: {
                    fontSize: "10px",
                    color: "#bd9f67",
                    textTransform: "none"
                  },
                  children: "角色 (Role)"
                })]
              }), Fe.type === "main" && Fe.group && Fe.group !== "NPCs" && Fe.group !== "All" && m.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "6px"
                },
                children: [m.jsx("div", {
                  className: "add-avatar-circle",
                  onClick: () => he("groupBack"),
                  style: {
                    width: "64px",
                    height: "90px",
                    border: "1px dashed #bd9f67",
                    borderRadius: "4px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    overflow: "hidden"
                  },
                  children: ((e = Ne.groupBacks) == null ? undefined : e[Fe.group]) ? m.jsx("img", {
                    decoding: "async",
                    src: Ne.groupBacks[Fe.group],
                    style: {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }
                  }) : m.jsxs("span", {
                    style: {
                      fontSize: "12px",
                      color: "#bd9f67",
                      textAlign: "center",
                      textTransform: "none"
                    },
                    children: ["+", m.jsx("br", {}), "Group"]
                  })
                }), m.jsx("span", {
                  style: {
                    fontSize: "10px",
                    color: "#bd9f67",
                    textTransform: "none"
                  },
                  children: "分组 (Group)"
                })]
              }), m.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "6px"
                },
                children: [m.jsx("div", {
                  className: "add-avatar-circle",
                  onClick: () => he("globalBack"),
                  style: {
                    width: "64px",
                    height: "90px",
                    border: "1px dashed #bd9f67",
                    borderRadius: "4px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    overflow: "hidden"
                  },
                  children: Ne.globalBack ? m.jsx("img", {
                    decoding: "async",
                    src: Ne.globalBack,
                    style: {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }
                  }) : m.jsxs("span", {
                    style: {
                      fontSize: "12px",
                      color: "#bd9f67",
                      textAlign: "center",
                      textTransform: "none"
                    },
                    children: ["+", m.jsx("br", {}), "Global"]
                  })
                }), m.jsx("span", {
                  style: {
                    fontSize: "10px",
                    color: "#bd9f67",
                    textTransform: "none"
                  },
                  children: "全局 (Global)"
                })]
              })]
            }), m.jsxs("div", {
              style: {
                fontSize: "11px",
                color: "#aaa",
                lineHeight: "1.4",
                textTransform: "none"
              },
              children: ["优先级：角色 (Role) ", ">", " 分组 (Group) ", ">", " 全局 (Global)。", m.jsx("br", {}), "点击对应的框来上传替换卡背。"]
            })]
          })]
        }), m.jsx("button", {
          className: "expanded-btn",
          onClick: async () => {
            if (!Fe.name) {
              x("Name is required!");
              return;
            }
            const e = {
              ...Fe
            };
            if (e._pendingWorldBook) {
              try {
                await h.put(e._pendingWorldBook);
                const t = await h.getAll();
                E(Array.isArray(t) ? t : []);
              } catch (t) {
                console.error("[CharacterRosterApp] 世界書保存失敗:", t);
              }
            }
            delete e._pendingWorldBook;
            if (e._refImagePending !== undefined) {
              try {
                const t = e.refImageRef;
                if (e._refImagePending) {
                  const t = await u.put(e._refImagePending);
                  e.refImageRef = t ?? null;
                } else {
                  e.refImageRef = null;
                }
                if (t != null && t !== e.refImageRef) {
                  await u.remove(t);
                }
              } catch (t) {
                console.error("[CharacterRosterApp] 定妝圖保存失敗:", t);
              }
            }
            delete e._refImagePending;
            if (e.type === "npc") {
              e.group = "NPCs";
              e.worldBook = "";
              e.birthday = "";
              e.nationality = "";
            }
            if (ce) {
              S(ce, e);
            } else {
              w(e);
            }
            le(false);
            de(null);
          },
          children: $("save") || "SAVE"
        })]
      })
    }), qe && m.jsx("div", {
      className: "expanded-overlay",
      onClick: () => Qe(false),
      style: {
        zIndex: 10002,
        alignItems: "flex-start",
        overflowY: "auto",
        WebkitOverflowScrolling: "touch",
        padding: "60px 0"
      },
      children: m.jsxs("div", {
        onClick: e => e.stopPropagation(),
        style: {
          background: "#1a2530",
          border: "1px solid rgba(189,159,103,0.4)",
          borderRadius: "12px",
          width: "90%",
          maxWidth: "380px",
          padding: "24px",
          position: "relative",
          marginBottom: "50vh"
        },
        children: [m.jsx("div", {
          onClick: () => Qe(false),
          style: {
            position: "absolute",
            top: "12px",
            right: "12px",
            color: "#999",
            cursor: "pointer",
            fontSize: "18px"
          },
          children: "✕"
        }), m.jsxs("div", {
          style: {
            color: "#bd9f67",
            fontSize: "16px",
            fontWeight: "bold",
            marginBottom: "16px"
          },
          children: ["🔒 ", $("tavernLockTitle")]
        }), m.jsx("div", {
          style: {
            color: "#aaa",
            fontSize: "13px",
            marginBottom: "20px",
            lineHeight: "1.6"
          },
          children: $("tavernLockDesc")
        }), m.jsxs("div", {
          style: {
            marginBottom: "20px"
          },
          children: [m.jsx("label", {
            style: {
              color: "#bd9f67",
              fontSize: "12px",
              fontWeight: "600",
              marginBottom: "6px",
              display: "block"
            },
            children: $("tavernDeviceCode")
          }), m.jsxs("div", {
            style: {
              display: "flex",
              gap: "8px",
              alignItems: "center"
            },
            children: [m.jsx("div", {
              style: {
                flex: 1,
                background: "rgba(0,0,0,0.4)",
                border: "1px solid rgba(189,159,103,0.3)",
                color: "#fff",
                padding: "10px 12px",
                borderRadius: "6px",
                fontSize: "15px",
                fontFamily: "monospace",
                letterSpacing: "1px",
                userSelect: "all"
              },
              children: it
            }), m.jsx("button", {
              onClick: () => {
                navigator.clipboard.writeText(it);
                const e = document.getElementById("copy-device-code-btn");
                if (e) {
                  e.textContent = "✓";
                  setTimeout(() => {
                    e.textContent = $("tavernCopy") || "複製";
                  }, 1500);
                }
              },
              id: "copy-device-code-btn",
              style: {
                background: "rgba(189,159,103,0.3)",
                border: "1px solid rgba(189,159,103,0.5)",
                color: "#bd9f67",
                padding: "10px 14px",
                borderRadius: "6px",
                fontSize: "13px",
                cursor: "pointer",
                whiteSpace: "nowrap"
              },
              children: $("tavernCopy")
            })]
          })]
        }), m.jsxs("div", {
          style: {
            marginBottom: "8px"
          },
          children: [m.jsx("label", {
            style: {
              color: "#bd9f67",
              fontSize: "12px",
              fontWeight: "600",
              marginBottom: "6px",
              display: "block"
            },
            children: $("tavernUnlockCode")
          }), m.jsxs("div", {
            style: {
              display: "flex",
              gap: "8px"
            },
            children: [m.jsx("input", {
              type: "text",
              value: Je,
              onChange: e => {
                Ze(e.target.value);
                tt("");
              },
              onKeyDown: e => {
                if (e.key === "Enter" && Je.trim()) {
                  nt();
                }
              },
              onFocus: e => {
                const t = e.currentTarget;
                setTimeout(() => {
                  try {
                    t.scrollIntoView({
                      block: "center",
                      behavior: "smooth"
                    });
                  } catch (e) {}
                }, 300);
              },
              placeholder: "00000000",
              maxLength: 8,
              style: {
                flex: 1,
                background: "rgba(0,0,0,0.4)",
                border: "1px solid " + (et ? "rgba(255,80,80,0.6)" : "rgba(189,159,103,0.3)"),
                color: "white",
                padding: "10px 12px",
                borderRadius: "6px",
                fontSize: "18px",
                fontFamily: "monospace",
                letterSpacing: "6px",
                textAlign: "center"
              }
            }), m.jsx("button", {
              onClick: nt,
              disabled: !Je.trim(),
              style: {
                background: "rgba(189,159,103,0.3)",
                border: "1px solid rgba(189,159,103,0.5)",
                color: "#bd9f67",
                padding: "10px 16px",
                borderRadius: "6px",
                fontSize: "13px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                opacity: Je.trim() ? 1 : 0.5
              },
              children: $("tavernUnlockBtn")
            })]
          }), et && m.jsx("div", {
            style: {
              color: "#ff5050",
              fontSize: "12px",
              marginTop: "6px"
            },
            children: et
          })]
        })]
      })
    }), ct && m.jsx("div", {
      className: "expanded-overlay",
      onClick: () => {
        dt(false);
        ht("");
      },
      style: {
        zIndex: 10001
      },
      children: m.jsxs("div", {
        onClick: e => e.stopPropagation(),
        style: {
          background: "#1a2530",
          border: "1px solid rgba(189,159,103,0.4)",
          borderRadius: "12px",
          width: "90%",
          maxWidth: "420px",
          padding: "24px",
          position: "relative"
        },
        children: [m.jsx("div", {
          onClick: () => {
            dt(false);
            ht("");
          },
          style: {
            position: "absolute",
            top: "12px",
            right: "12px",
            color: "#999",
            cursor: "pointer",
            fontSize: "18px"
          },
          children: "✕"
        }), m.jsxs("div", {
          style: {
            color: "#bd9f67",
            fontSize: "16px",
            fontWeight: "bold",
            marginBottom: "20px"
          },
          children: ["🍺 ", $("rosterImportTavern")]
        }), m.jsx("div", {
          style: {
            color: "#aaa",
            fontSize: "12px",
            marginBottom: "16px",
            lineHeight: "1.5"
          },
          children: $("rosterTavernDesc")
        }), m.jsxs("div", {
          style: {
            marginBottom: "16px"
          },
          children: [m.jsx("label", {
            style: {
              color: "#bd9f67",
              fontSize: "12px",
              fontWeight: "600",
              marginBottom: "6px",
              display: "block"
            },
            children: $("rosterPasteUrl")
          }), m.jsxs("div", {
            style: {
              display: "flex",
              gap: "8px"
            },
            children: [m.jsx("input", {
              type: "text",
              value: pt,
              onChange: e => ht(e.target.value),
              onKeyDown: e => {
                if (e.key === "Enter" && pt.trim()) {
                  ft();
                }
              },
              placeholder: "https://... .png / .json",
              style: {
                flex: 1,
                background: "rgba(0,0,0,0.4)",
                border: "1px solid rgba(189,159,103,0.3)",
                color: "white",
                padding: "10px 12px",
                borderRadius: "6px",
                fontSize: "13px"
              }
            }), m.jsx("button", {
              onClick: ft,
              disabled: xt || !pt.trim(),
              style: {
                background: xt ? "rgba(189,159,103,0.2)" : "rgba(189,159,103,0.3)",
                border: "1px solid rgba(189,159,103,0.5)",
                color: "#bd9f67",
                padding: "10px 16px",
                borderRadius: "6px",
                fontSize: "13px",
                cursor: xt ? "wait" : "pointer",
                whiteSpace: "nowrap",
                opacity: !pt.trim() || xt ? 0.5 : 1
              },
              children: $(xt ? "rosterImporting" : "rosterImportBtn")
            })]
          })]
        }), m.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
            margin: "18px 0"
          },
          children: [m.jsx("div", {
            style: {
              flex: 1,
              height: "1px",
              background: "rgba(189,159,103,0.2)"
            }
          }), m.jsx("span", {
            style: {
              color: "#666",
              fontSize: "12px"
            },
            children: $("rosterImportOr")
          }), m.jsx("div", {
            style: {
              flex: 1,
              height: "1px",
              background: "rgba(189,159,103,0.2)"
            }
          })]
        }), m.jsxs("button", {
          onClick: () => {
            var e;
            if ((e = lt.current) == null) {
              return undefined;
            } else {
              return e.click();
            }
          },
          style: {
            width: "100%",
            background: "rgba(189,159,103,0.1)",
            border: "1px dashed rgba(189,159,103,0.4)",
            color: "#bd9f67",
            padding: "14px",
            borderRadius: "8px",
            fontSize: "13px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px"
          },
          children: [m.jsxs("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [m.jsx("path", {
              d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
            }), m.jsx("polyline", {
              points: "17 8 12 3 7 8"
            }), m.jsx("line", {
              x1: "12",
              y1: "3",
              x2: "12",
              y2: "15"
            })]
          }), $("rosterUploadFile")]
        }), m.jsx("input", {
          ref: lt,
          type: "file",
          accept: ".png,.json",
          style: {
            display: "none"
          },
          onChange: e => {
            (async e => {
              var t;
              const r = (t = e.target.files) == null ? undefined : t[0];
              if (r) {
                try {
                  let e = null;
                  let t = null;
                  if (r.name.toLowerCase().endsWith(".png")) {
                    const s = await r.arrayBuffer();
                    e = await gt(s);
                    if (!e) {
                      x($("rosterTavernNoPng"));
                      return;
                    }
                    const i = new Blob([s], {
                      type: "image/png"
                    });
                    t = await new Promise(e => {
                      const t = new FileReader();
                      t.onload = () => e(t.result);
                      t.readAsDataURL(i);
                    });
                  } else {
                    const t = await r.text();
                    e = JSON.parse(t);
                  }
                  await mt(e, t, r.name);
                } catch (s) {
                  console.error("[CharacterRosterApp] 導入酒館角色卡失敗:", s);
                  x($("rosterTavernFail"));
                }
                e.target.value = "";
              }
            })(e);
            dt(false);
            ht("");
          }
        })]
      })
    }), m.jsx(p, {
      isOpen: !!pe,
      onClose: () => he(null),
      onImageSelect: e => {
        if (pe === "avatar") {
          De(t => ({
            ...t,
            image: e
          }));
        } else if (pe === "charBack") {
          De(t => ({
            ...t,
            cardBack: e
          }));
        } else if (pe === "groupBack" && Fe.group) {
          Re({
            ...Ne,
            groupBacks: {
              ...Ne.groupBacks,
              [Fe.group]: e
            }
          });
        } else if (pe === "globalBack") {
          Re({
            ...Ne,
            globalBack: e
          });
        }
        he(null);
      },
      title: $("imgUploadTitle"),
      compressProfile: pe === "avatar" ? "avatar" : "default"
    }), m.jsx(b, {
      isOpen: be,
      characterId: ce || Fe.id,
      onClose: () => ve(false),
      onPick: e => {
        De(t => ({
          ...t,
          _refImagePending: e
        }));
        ue(e);
        ke({
          status: "idle",
          resultImg: null,
          msg: ""
        });
        ve(false);
      },
      t: $
    }), Z && m.jsx("div", {
      onClick: () => ee(false),
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 999
      }
    }), Z && !K && m.jsxs("div", {
      style: {
        position: "absolute",
        bottom: "var(--nuo-safe-bottom, 0px)",
        right: 0,
        width: "250px",
        height: "250px",
        pointerEvents: "none",
        zIndex: 1000
      },
      children: [m.jsxs("div", {
        onClick: () => {
          ee(false);
          ot();
        },
        style: {
          position: "absolute",
          right: "60px",
          bottom: "131px",
          pointerEvents: "auto",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
          animation: "fabItem1In 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards"
        },
        children: [m.jsx("span", {
          className: "fab-popup-text",
          children: $("rosterImportTavern")
        }), m.jsx("div", {
          className: "fab-popup-icon",
          children: m.jsx("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#e0c897",
            strokeWidth: "2.5",
            children: m.jsx("path", {
              d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
            })
          })
        })]
      }), m.jsxs("div", {
        onClick: () => {
          ee(false);
          le(true);
          de(null);
          De({
            name: "",
            gender: "female",
            role: "",
            group: te === "All" || te === "NPCs" ? "Default" : te,
            birthday: "",
            nationality: "",
            description: "",
            worldBook: [],
            aliases: "",
            image: "",
            type: te === "NPCs" ? "npc" : "main",
            boundTo: [],
            momentFrequency: 40,
            imagePrompt: "",
            imageSeed: "",
            refImageRef: null,
            minimaxTimbreId: "",
            voiceProvider: "minimax",
            elevenVoiceId: "",
            sovitsRefAudioPath: "",
            sovitsRefText: "",
            sovitsGptPath: "",
            sovitsSovitsPath: "",
            sovitsApiVersion: "v2",
            sovitsGsviVoice: "",
            sovitsGsviModel: "",
            sovitsGsviLang: "",
            sovitsGsviEmotion: ""
          });
        },
        style: {
          position: "absolute",
          right: "125px",
          bottom: "76px",
          pointerEvents: "auto",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
          animation: "fabItem2In 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards"
        },
        children: [m.jsx("span", {
          className: "fab-popup-text",
          children: $("rosterCustomChar")
        }), m.jsx("div", {
          className: "fab-popup-icon",
          children: m.jsxs("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#e0c897",
            strokeWidth: "2.5",
            children: [m.jsx("path", {
              d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
            }), m.jsx("circle", {
              cx: "12",
              cy: "7",
              r: "4"
            })]
          })
        })]
      })]
    }), m.jsx("div", {
      className: "fab-gold",
      onClick: () => ee(e => !e),
      style: {
        display: K ? "none" : undefined,
        transition: "transform 0.3s",
        transform: Z ? "rotate(45deg)" : "none"
      },
      children: m.jsxs("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        children: [m.jsx("line", {
          x1: "12",
          y1: "5",
          x2: "12",
          y2: "19"
        }), m.jsx("line", {
          x1: "5",
          y1: "12",
          x2: "19",
          y2: "12"
        })]
      })
    }), m.jsx("style", {
      children: "\n                .form-group { margin-bottom: 20px; }\n                .form-group label {\n                    display: block;\n                    color: #bd9f67;\n                    margin-bottom: 8px;\n                    font-size: 13px;\n                    font-weight: 600;\n                    letter-spacing: 0.5px;\n                    text-transform: uppercase;\n                }\n                input, select, textarea {\n                    width: 100%;\n                    /* 注意：絕對不要在 input/textarea 上加 backdrop-filter。\n                       vivo 等國產 ROM 的 WebView 對「可編輯文字 + 即時模糊濾鏡」的長按選字放大鏡\n                       繪製路徑有 bug，會直接崩潰渲染進程（表現為複製文字閃退）；\n                       且表單裡十幾個輸入框各帶一個即時模糊層，滑動時每幀重新合成 → 卡死退出。\n                       改用更深的不透明底色替代，視覺幾乎無差。 */\n                    background: rgba(8, 9, 13, 0.92) !important;\n                    border: 1px solid rgba(189, 159, 103, 0.2) !important;\n                    color: rgba(255, 255, 255, 0.9) !important;\n                    padding: 12px 16px;\n                    border-radius: 12px;\n                    font-size: 14px;\n                    box-sizing: border-box;\n                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n                }\n                input::placeholder, textarea::placeholder {\n                    color: rgba(189, 159, 103, 0.4) !important;\n                }\n                input:focus, select:focus, textarea:focus {\n                    outline: none;\n                    border-color: rgba(189, 159, 103, 0.6) !important;\n                    background: rgba(8, 9, 13, 0.98) !important;\n                    box-shadow: 0 0 15px rgba(189, 159, 103, 0.15) !important;\n                }\n                option { background: #333; color: white; }\n                @keyframes fabItem1In {\n                    from { opacity: 0; transform: translate(26px, 97px) scale(0.3); }\n                    to { opacity: 1; transform: translate(0, 0) scale(1); }\n                }\n                @keyframes fabItem2In {\n                    from { opacity: 0; transform: translate(91px, 42px) scale(0.3); }\n                    to { opacity: 1; transform: translate(0, 0) scale(1); }\n                }\n                @keyframes spin-simple {\n                    from { transform: rotate(0deg); }\n                    to { transform: rotate(360deg); }\n                }\n            "
    }), m.jsx(y, {
      open: we.open,
      title: we.step === 1 ? $("deleteChar") || "刪除角色" : $("deleteCharDoubleConfirmTitle") || "再次確認",
      message: we.step === 1 ? $("deleteCharConfirm") || `確定要刪除 "${((v = we.char) == null ? undefined : v.name) || ""}" 嗎？這將永久刪除角色資料、所有聊天記錄和朋友圈內容，此操作無法撤銷！` : $("deleteCharDoubleConfirm") || "再次確認：是否真的要刪除此角色？",
      confirmText: we.step === 1 ? $("chatActionConfirm") || "確認" : $("btnDelete") || "刪除",
      cancelText: $("chatActionCancel") || "取消",
      danger: we.step === 2,
      zIndex: 12050,
      onCancel: vt,
      onConfirm: () => {
        const e = we.char;
        if (e) {
          if (we.step !== 1) {
            try {
              C(e.id);
              ne(null);
              console.log(`✅ Successfully deleted character: ${e.name}`);
            } catch (t) {
              console.error("Error deleting character:", t);
              x($("deleteCharError") || "刪除角色時發生錯誤");
            } finally {
              vt();
            }
          } else {
            Se({
              open: true,
              step: 2,
              char: e
            });
          }
        } else {
          vt();
        }
      }
    }), m.jsx(y, {
      open: Ce.open,
      title: Ce.step === 1 ? $("resetChar") || "重置角色" : $("resetCharDoubleConfirmTitle") || "再次確認",
      message: Ce.step === 1 ? $("resetCharConfirm") || `確定要重置 "${((j = Ce.char) == null ? undefined : j.name) || ""}" 嗎？\n\n⚠️ 將清除：\n• 聊天記錄、大小總結、永久記憶\n• 線上線下記錄\n• 朋友圈、行程代辦、通話記錄\n• 心聲、閃光時刻、論壇發帖與評論\n\n✅ 將保留：\n• 角色卡設定、關係圖、聊天介面設定` : $("resetCharDoubleConfirm") || "再次確認：是否真的要重置此角色？此操作無法撤銷！",
      confirmText: Ce.step === 1 ? $("chatActionConfirm") || "確認" : $("resetCharBtn") || "重置",
      cancelText: $("chatActionCancel") || "取消",
      danger: Ce.step === 2,
      zIndex: 12050,
      onCancel: jt,
      onConfirm: async () => {
        const e = Ce.char;
        if (e) {
          if (Ce.step !== 1) {
            try {
              await I(e.id);
              x($("resetCharSuccess") || `"${e.name}" 已重置完成`);
            } catch (t) {
              console.error("Error resetting character:", t);
              x($("resetCharError") || "重置角色時發生錯誤");
            } finally {
              jt();
            }
          } else {
            Ie({
              open: true,
              step: 2,
              char: e
            });
          }
        } else {
          jt();
        }
      }
    })]
  });
};
const R = (e, t, r = [], s = e => e, i, a = [], n, o) => {
  const l = (Array.isArray(e.worldBook) ? e.worldBook : e.worldBook ? [e.worldBook] : []).filter(e => {
    const t = a.find(t => String(t.id) === String(e));
    return t && t.isGlobal !== true && t.isGlobal !== "true";
  }).map(e => {
    const t = a.find(t => String(t.id) === String(e));
    if (t) {
      return t.title;
    } else {
      return e;
    }
  });
  const c = a.filter(e => e.isGlobal === true || e.isGlobal === "true");
  return m.jsxs("div", {
    className: "expanded-overlay",
    onClick: t,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    children: [m.jsx("div", {
      className: "expanded-card",
      onClick: e => e.stopPropagation(),
      style: {
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        maxHeight: "78vh"
      },
      children: m.jsxs("div", {
        className: "expanded-inner-border",
        children: [m.jsxs("div", {
          className: "tarot-header",
          children: [m.jsx("div", {
            className: "tarot-arcana-text",
            children: "✧ THE PERSONA ✧"
          }), m.jsx("div", {
            className: "tarot-image-frame",
            children: m.jsx("div", {
              className: "tarot-image-inner",
              children: e.image ? m.jsx("img", {
                decoding: "async",
                src: e.image,
                alt: e.name,
                style: {
                  objectPosition: `${50 - (e.imageOffsetX || 0) / 2}% ${50 - (e.imageOffsetY || 0) / 2}%`,
                  transformOrigin: `${50 - (e.imageOffsetX || 0) / 2}% ${50 - (e.imageOffsetY || 0) / 2}%`,
                  transform: `scale(${e.imageScale || 1.15})`
                }
              }) : m.jsx("div", {
                style: {
                  width: "100%",
                  height: "100%",
                  background: "#181a1f",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                },
                children: m.jsx("span", {
                  style: {
                    fontSize: "48px",
                    color: "#bd9f67",
                    opacity: 0.5
                  },
                  children: "?"
                })
              })
            })
          }), m.jsxs("div", {
            className: "tarot-name-banner",
            children: [m.jsx("span", {
              className: "tarot-name-star",
              children: "✦"
            }), m.jsx("span", {
              className: "tarot-name-text",
              children: e.name
            }), m.jsx("span", {
              className: "tarot-name-star",
              children: "✦"
            })]
          })]
        }), m.jsxs("div", {
          className: "tarot-body",
          children: [m.jsxs("div", {
            className: "expanded-section",
            children: [m.jsx("div", {
              className: "expanded-label",
              children: s("rosterRole") || "IDENTITY"
            }), m.jsx("div", {
              style: {
                marginBottom: "16px",
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "\"Times New Roman\", Times, serif",
                color: "#fff",
                letterSpacing: "2px",
                textAlign: "center"
              },
              children: e.role || "Unspecified"
            }), m.jsxs("div", {
              style: {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "6px"
              },
              children: [e.type === "npc" && m.jsx("span", {
                className: "tag-gold",
                children: s("typeNPC")
              }), e.gender && m.jsx("span", {
                className: "tag-gold",
                children: e.gender === "female" ? s("genderFemale") : e.gender === "male" ? s("genderMale") : s("genderOther")
              }), e.type !== "npc" && e.group && m.jsx("span", {
                className: "tag-gold",
                children: e.group
              }), e.birthday && m.jsx("span", {
                className: "tag-gold",
                children: e.birthday
              }), m.jsx("span", {
                className: "tag-gold",
                style: {
                  borderColor: "#bd9f67",
                  color: "#bd9f67"
                },
                children: e.balance ? `¥${e.balance.toFixed(2)}` : "¥0.00"
              })]
            })]
          }), e.type !== "npc" && (l.length > 0 || c.length > 0) && m.jsxs("div", {
            className: "expanded-section",
            children: [m.jsx("div", {
              className: "expanded-label",
              children: s("rosterWorldBook") || "WORLD BOOK"
            }), m.jsxs("div", {
              className: "expanded-value",
              style: {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "6px"
              },
              children: [l.map((e, t) => m.jsx("span", {
                className: "tag-gold clickable",
                style: {
                  borderStyle: "dashed"
                },
                children: e
              }, t)), c.map(e => m.jsxs("span", {
                className: "tag-gold clickable",
                style: {
                  opacity: 0.8,
                  border: "1px dotted rgba(189,159,103,0.5)"
                },
                children: ["✦ ", e.title]
              }, `g-${e.id}`))]
            })]
          }), e.type === "npc" && e.boundTo && e.boundTo.length > 0 && m.jsxs("div", {
            className: "expanded-section",
            children: [m.jsx("div", {
              className: "expanded-label",
              children: s("rosterBindChar") || "BOUND SOULS"
            }), m.jsx("div", {
              className: "expanded-value",
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px"
              },
              children: e.boundTo.map(e => {
                const t = r.find(t => t.id === e);
                if (t) {
                  return m.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "10px"
                    },
                    children: [t.image ? m.jsx("img", {
                      decoding: "async",
                      src: t.image,
                      style: {
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "1px solid #bd9f67"
                      }
                    }) : m.jsx("div", {
                      style: {
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        border: "1px solid #bd9f67",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "12px",
                        color: "#bd9f67"
                      },
                      children: "?"
                    }), m.jsx("span", {
                      style: {
                        color: "#e0c897",
                        fontSize: "14px",
                        fontFamily: "\"Times New Roman\", Times, serif",
                        letterSpacing: "1px"
                      },
                      children: t.name
                    })]
                  }, e);
                } else {
                  return null;
                }
              })
            })]
          }), m.jsxs("div", {
            className: "expanded-section",
            children: [m.jsx("div", {
              className: "expanded-label",
              children: s("rosterPersona") || "CHRONICLE"
            }), m.jsx("div", {
              className: "expanded-value",
              style: {
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                color: "rgba(255,255,255,0.8)",
                letterSpacing: "0.5px",
                textAlign: "justify",
                textAlignLast: "center",
                padding: "0 10px",
                fontSize: "13.5px"
              },
              children: e.description || "No description provided."
            })]
          })]
        })]
      })
    }), m.jsxs("div", {
      onClick: e => e.stopPropagation(),
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        marginTop: "20px",
        paddingBottom: "10px"
      },
      children: [m.jsx("div", {
        onClick: t => {
          t.stopPropagation();
          i(e);
        },
        style: {
          cursor: "pointer",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "rgba(20, 25, 30, 0.4)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(189,159,103,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#bd9f67",
          boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
          transition: "all 0.2s"
        },
        title: s("editApp") || "Edit",
        children: m.jsxs("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [m.jsx("path", {
            d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
          }), m.jsx("path", {
            d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
          })]
        })
      }), o && m.jsx("div", {
        onClick: t => {
          t.stopPropagation();
          o(e);
        },
        style: {
          cursor: "pointer",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "rgba(20, 25, 30, 0.4)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,165,0,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffa500",
          boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
          transition: "all 0.2s"
        },
        title: s("resetChar") || "Reset",
        children: m.jsxs("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [m.jsx("polyline", {
            points: "1 4 1 10 7 10"
          }), m.jsx("path", {
            d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"
          })]
        })
      }), m.jsx("div", {
        onClick: t,
        style: {
          cursor: "pointer",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          transition: "all 0.2s"
        },
        children: m.jsxs("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: [m.jsx("line", {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18"
          }), m.jsx("line", {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18"
          })]
        })
      }), n ? m.jsx("div", {
        onClick: t => {
          t.stopPropagation();
          n(e);
        },
        style: {
          cursor: "pointer",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "rgba(20, 25, 30, 0.4)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,71,87,0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ff4757",
          boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
          transition: "all 0.2s"
        },
        title: s("deleteChar") || "Delete",
        children: m.jsxs("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [m.jsx("polyline", {
            points: "3 6 5 6 21 6"
          }), m.jsx("path", {
            d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
          }), m.jsx("line", {
            x1: "10",
            y1: "11",
            x2: "10",
            y2: "17"
          }), m.jsx("line", {
            x1: "14",
            y1: "11",
            x2: "14",
            y2: "17"
          })]
        })
      }) : m.jsx("div", {
        style: {
          width: "48px",
          height: "48px"
        }
      })]
    })]
  });
};
export { T as default };