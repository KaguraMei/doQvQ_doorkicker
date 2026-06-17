const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["./assets/native-pet-CTNtZgMA.js", "./assets/vendor-react-B2VXkTUV.js", "./assets/vendor-dexie-KLdnSHz2.js", "./assets/vendor-jszip-DU-5YDGO.js", "./assets/vendor-lucide-DBv09HTV.js", "./assets/native-pet-D9YoqRtr.css"]) => i.map(i => d[i]);
import { c as e, A as t, y as n, _ as i, G as o, B as r, ah as s, ai as a, aj as l, I as d, e as c, L as p, b$ as h, a4 as g, V as m, ap as x, ak as u } from "./native-pet-CTNtZgMA.js";
import { r as f, j as y, d as v, b } from "./vendor-react-B2VXkTUV.js";
import { cd as j, a6 as S, S as w, ce as k, cf as I, ad as C, cg as T } from "./main-BO9xa-SQ.js";
import { R } from "./RerollEditModal-BlpSgCaT.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
import "./vendor-lucide-DBv09HTV.js";
import "./modulepreload-polyfill-YP0FEG5d.js";
/* empty css                        */
import "./vendor-supabase-Bcpm_8qV.js";
/* empty css                     */
import "./imageGenWorldBook-BtUaGdHO.js";
let P = Date.now();
const E = () => P++;
const z = (e, t) => {
  if (!e) {
    return "1" + t("msgTimeHoursAgo");
  }
  const n = Date.now() - e;
  const i = 3600000;
  const o = i * 24;
  if (n < 60000) {
    return t("msgTimeJustNow");
  }
  if (n < i) {
    return `${Math.floor(n / 60000)}${t("msgTimeMinsAgo")}`;
  }
  if (n < o) {
    return `${Math.floor(n / i)}${t("msgTimeHoursAgo")}`;
  }
  if (n < o * 30) {
    return `${Math.floor(n / o)}${t("msgTimeDaysAgo")}`;
  }
  const r = new Date(e);
  return `${r.getFullYear()}${t("year") || "年"}${r.getMonth() + 1}${t("month") || "月"}${r.getDate()}${t("day") || "日"}`;
};
const A = ({
  item: e,
  characters: t,
  groupChats: n,
  t: i,
  onConfirm: o,
  onClose: r
}) => {
  const [s, a] = b.useState("");
  const [l, d] = b.useState(new Set());
  const [c, p] = b.useState("contacts");
  const [h, g] = b.useState(false);
  const [m, x] = b.useState(false);
  const u = e.note || e.text || "";
  const f = u.length > 60 ? u.slice(0, 60) + "…" : u;
  const j = e.images && e.images.length > 0 ? e.images[0] : null;
  const w = t.filter(e => !s || e.name.toLowerCase().includes(s.toLowerCase()));
  const k = (n || []).filter(e => !s || (e.name || "").toLowerCase().includes(s.toLowerCase()));
  const I = e => {
    d(t => {
      const n = new Set(t);
      if (n.has(e)) {
        n.delete(e);
      } else {
        n.add(e);
      }
      return n;
    });
  };
  return v.createPortal(y.jsx("div", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 99998,
      background: "rgba(0,0,0,0.45)",
      backdropFilter: "blur(8px)",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      animation: "fadeIn 0.2s ease"
    },
    onClick: r,
    children: y.jsxs("div", {
      style: {
        width: "100%",
        maxWidth: "460px",
        background: "var(--nj-sheet-bg, #fff)",
        color: "var(--nj-sheet-text, inherit)",
        borderRadius: "20px 20px 0 0",
        maxHeight: "85vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        animation: "slideUp 0.28s cubic-bezier(0.34, 1.28, 0.64, 1)",
        boxShadow: "0 -8px 40px rgba(0,0,0,0.18)"
      },
      onClick: e => e.stopPropagation(),
      children: [y.jsxs("div", {
        style: {
          padding: "16px 20px 12px",
          borderBottom: "1px solid var(--nj-sheet-border, #f0f0f0)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        },
        children: [y.jsx("div", {
          style: {
            fontWeight: "700",
            fontSize: "17px",
            color: "var(--nj-sheet-text, #111)"
          },
          children: i("btnShare", "分享")
        }), y.jsx("button", {
          onClick: r,
          style: {
            background: "var(--nj-sheet-input-bg, #f4f4f4)",
            border: "none",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "var(--nj-sheet-text-muted, #555)"
          },
          children: y.jsxs("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [y.jsx("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }), y.jsx("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })]
          })
        })]
      }), y.jsxs("div", {
        style: {
          margin: "14px 16px",
          background: "var(--nj-sheet-card-bg, #f7f8fa)",
          borderRadius: "12px",
          padding: "12px",
          display: "flex",
          gap: "12px",
          alignItems: "flex-start",
          border: "1px solid var(--nj-sheet-border, #eee)"
        },
        children: [y.jsx("div", {
          style: {
            width: "40px",
            height: "40px",
            borderRadius: "8px",
            overflow: "hidden",
            flexShrink: 0,
            background: "#e0e0e0"
          },
          children: (() => {
            const n = e.charUserId ? t.find(t => String(t.id) === String(e.charUserId)) : null;
            const i = (n == null ? undefined : n.image) || e.avatar;
            if (i) {
              return y.jsx("img", {
                decoding: "async",
                loading: "lazy",
                src: i,
                style: n ? S(n) : {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                },
                alt: ""
              });
            } else {
              return y.jsx("div", {
                style: {
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg,#9b59b6,#8e44ad)"
                }
              });
            }
          })()
        }), y.jsxs("div", {
          style: {
            flex: 1,
            minWidth: 0
          },
          children: [y.jsx("div", {
            style: {
              fontWeight: "600",
              fontSize: "14px",
              color: "#576b95",
              marginBottom: "4px"
            },
            children: e.name
          }), f && y.jsx("div", {
            style: {
              fontSize: "13px",
              color: "var(--nj-sheet-text-2, #333)",
              lineHeight: "1.45",
              marginBottom: j ? "8px" : 0
            },
            children: f
          }), j && y.jsxs("div", {
            style: {
              display: "flex",
              gap: "4px"
            },
            children: [e.images.slice(0, 3).map((e, t) => y.jsx("div", {
              style: {
                width: "48px",
                height: "48px",
                borderRadius: "6px",
                overflow: "hidden",
                background: "#ddd",
                flexShrink: 0
              },
              children: typeof e == "string" && e.startsWith("txt:") ? y.jsx("div", {
                style: {
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg,#f5f7fa,#c3cfe2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "9px",
                  color: "#555"
                },
                children: "IMG"
              }) : y.jsx("img", {
                decoding: "async",
                loading: "lazy",
                src: e,
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                },
                alt: ""
              })
            }, t)), e.images.length > 3 && y.jsxs("div", {
              style: {
                width: "48px",
                height: "48px",
                borderRadius: "6px",
                background: "rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                color: "#888"
              },
              children: ["+", e.images.length - 3]
            })]
          }), !f && !j && y.jsx("div", {
            style: {
              fontSize: "13px",
              color: "var(--nj-sheet-text-muted, #999)",
              fontStyle: "italic"
            },
            children: "[\\u670B\\u53CB\\u5708\\u52A8\\u6001]"
          })]
        }), y.jsx("div", {
          style: {
            width: "28px",
            height: "28px",
            borderRadius: "6px",
            background: "linear-gradient(135deg,#07c160,#05a54e)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
          },
          children: y.jsxs("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#fff",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [y.jsx("circle", {
              cx: "12",
              cy: "12",
              r: "10"
            }), y.jsx("path", {
              d: "M8 14s1.5 2 4 2 4-2 4-2"
            }), y.jsx("line", {
              x1: "9",
              y1: "9",
              x2: "9.01",
              y2: "9"
            }), y.jsx("line", {
              x1: "15",
              y1: "9",
              x2: "15.01",
              y2: "9"
            })]
          })
        })]
      }), y.jsx("div", {
        style: {
          padding: "0 16px 10px"
        },
        children: y.jsxs("div", {
          style: {
            background: "var(--nj-sheet-input-bg, #f4f4f4)",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 12px"
          },
          children: [y.jsxs("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#999",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [y.jsx("circle", {
              cx: "11",
              cy: "11",
              r: "8"
            }), y.jsx("line", {
              x1: "21",
              y1: "21",
              x2: "16.65",
              y2: "16.65"
            })]
          }), y.jsx("input", {
            type: "text",
            className: "no-outline-input",
            value: s,
            onChange: e => a(e.target.value),
            placeholder: "\\u641C\\u7D22\\u8054\\u7CFB\\u4EBA...",
            style: {
              border: "none",
              backgroundColor: "transparent",
              outline: "none",
              boxShadow: "none",
              flex: 1,
              fontSize: "14px",
              color: "var(--nj-sheet-text, #222)"
            }
          }), s && y.jsx("span", {
            onClick: () => a(""),
            style: {
              cursor: "pointer",
              color: "#bbb",
              fontSize: "16px"
            },
            children: "×"
          })]
        })
      }), y.jsx("div", {
        style: {
          display: "flex",
          borderBottom: "1px solid var(--nj-sheet-border, #f0f0f0)",
          padding: "0 16px"
        },
        children: [{
          key: "contacts",
          label: "联系人"
        }, {
          key: "groups",
          label: "群组"
        }].map(e => y.jsxs("div", {
          onClick: () => p(e.key),
          style: {
            padding: "10px 16px 8px",
            fontSize: "14px",
            fontWeight: c === e.key ? "600" : "400",
            color: c === e.key ? "#07c160" : "var(--nj-sheet-text-muted, #888)",
            borderBottom: c === e.key ? "2px solid #07c160" : "2px solid transparent",
            cursor: "pointer",
            transition: "all 0.2s"
          },
          children: [e.label, e.key === "contacts" && w.length > 0 && y.jsxs("span", {
            style: {
              marginLeft: "4px",
              fontSize: "11px",
              opacity: 0.6
            },
            children: ["(", w.length, ")"]
          }), e.key === "groups" && k.length > 0 && y.jsxs("span", {
            style: {
              marginLeft: "4px",
              fontSize: "11px",
              opacity: 0.6
            },
            children: ["(", k.length, ")"]
          })]
        }, e.key))
      }), y.jsxs("div", {
        style: {
          flex: 1,
          overflowY: "auto",
          padding: "4px 0"
        },
        children: [c === "contacts" && (w.length === 0 ? y.jsx("div", {
          style: {
            padding: "32px",
            textAlign: "center",
            color: "var(--nj-sheet-text-muted, #bbb)",
            fontSize: "14px"
          },
          children: "暂无联系人"
        }) : w.map(e => {
          var t;
          var n;
          const i = String(e.id);
          const o = l.has(i);
          return y.jsxs("div", {
            onClick: () => I(i),
            style: {
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 16px",
              cursor: "pointer",
              background: o ? "rgba(7,193,96,0.05)" : "transparent",
              transition: "background 0.15s"
            },
            children: [y.jsx("div", {
              style: {
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                background: "#e0e0e0"
              },
              children: e.image ? y.jsx("img", {
                decoding: "async",
                loading: "lazy",
                src: e.image,
                style: S(e),
                alt: ""
              }) : y.jsx("div", {
                style: {
                  width: "100%",
                  height: "100%",
                  background: `hsl(${(((t = e.name) == null ? undefined : t.charCodeAt(0)) || 0) * 37 % 360},50%,60%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: "18px"
                },
                children: (n = e.name) == null ? undefined : n.charAt(0)
              })
            }), y.jsx("div", {
              style: {
                flex: 1,
                fontSize: "15px",
                color: "var(--nj-sheet-text, #1a1a1a)",
                fontWeight: o ? "600" : "400"
              },
              children: e.name
            }), y.jsx("div", {
              style: {
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                border: o ? "none" : "2px solid #ccc",
                background: o ? "#07c160" : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "all 0.2s"
              },
              children: o && y.jsx("svg", {
                width: "12",
                height: "12",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "#fff",
                strokeWidth: "3",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: y.jsx("polyline", {
                  points: "20 6 9 17 4 12"
                })
              })
            })]
          }, i);
        })), c === "groups" && (k.length === 0 ? y.jsx("div", {
          style: {
            padding: "32px",
            textAlign: "center",
            color: "var(--nj-sheet-text-muted, #bbb)",
            fontSize: "14px"
          },
          children: i("noGroupsFound", "沒有找到群組")
        }) : k.map(e => {
          const t = `group_${e.id}`;
          const n = l.has(t);
          return y.jsxs("div", {
            onClick: () => I(t),
            style: {
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 16px",
              cursor: "pointer",
              background: n ? "rgba(7,193,96,0.05)" : "transparent",
              transition: "background 0.15s"
            },
            children: [y.jsx("div", {
              style: {
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                overflow: "hidden",
                flexShrink: 0,
                background: "linear-gradient(135deg,#4fc3f7,#1976d2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: e.avatar ? y.jsx("img", {
                decoding: "async",
                loading: "lazy",
                src: e.avatar,
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                },
                alt: ""
              }) : y.jsxs("svg", {
                width: "22",
                height: "22",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "#fff",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [y.jsx("path", {
                  d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                }), y.jsx("circle", {
                  cx: "9",
                  cy: "7",
                  r: "4"
                }), y.jsx("path", {
                  d: "M23 21v-2a4 4 0 0 0-3-3.87"
                }), y.jsx("path", {
                  d: "M16 3.13a4 4 0 0 1 0 7.75"
                })]
              })
            }), y.jsxs("div", {
              style: {
                flex: 1,
                minWidth: 0
              },
              children: [y.jsx("div", {
                style: {
                  fontSize: "15px",
                  color: "var(--nj-sheet-text, #1a1a1a)",
                  fontWeight: n ? "600" : "400",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: e.name || i("groupChat", "群聊")
              }), e.members && y.jsxs("div", {
                style: {
                  fontSize: "12px",
                  color: "var(--nj-sheet-text-muted, #999)"
                },
                children: [e.members.length, " ", i("members", "位成員")]
              })]
            }), y.jsx("div", {
              style: {
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                border: n ? "none" : "2px solid #ccc",
                background: n ? "#07c160" : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "all 0.2s"
              },
              children: n && y.jsx("svg", {
                width: "12",
                height: "12",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "#fff",
                strokeWidth: "3",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: y.jsx("polyline", {
                  points: "20 6 9 17 4 12"
                })
              })
            })]
          }, t);
        }))]
      }), l.size > 0 && y.jsx("div", {
        style: {
          padding: "10px 16px 0",
          borderTop: "1px solid var(--nj-sheet-border, #f0f0f0)",
          display: "flex",
          gap: "8px",
          overflowX: "auto",
          flexShrink: 0
        },
        children: [...l].map(e => {
          const i = e.startsWith("group_");
          const o = i ? e.replace("group_", "") : e;
          const r = i ? n.find(e => String(e.id) === o) : t.find(e => String(e.id) === o);
          if (r) {
            return y.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                position: "relative",
                flexShrink: 0
              },
              children: [y.jsx("div", {
                style: {
                  width: "40px",
                  height: "40px",
                  borderRadius: i ? "10px" : "50%",
                  overflow: "hidden",
                  border: "2px solid #07c160",
                  background: "#eee"
                },
                children: r.image || r.avatar ? y.jsx("img", {
                  decoding: "async",
                  loading: "lazy",
                  src: r.image || r.avatar,
                  style: i ? {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  } : S(r),
                  alt: ""
                }) : y.jsx("div", {
                  style: {
                    width: "100%",
                    height: "100%",
                    background: "#07c160",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "700"
                  },
                  children: (r.name || "?").charAt(0)
                })
              }), y.jsx("div", {
                onClick: () => I(e),
                style: {
                  position: "absolute",
                  top: "-4px",
                  right: "-4px",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: "#ff3b30",
                  border: "2px solid #fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer"
                },
                children: y.jsxs("svg", {
                  width: "8",
                  height: "8",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: "3.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [y.jsx("line", {
                    x1: "18",
                    y1: "6",
                    x2: "6",
                    y2: "18"
                  }), y.jsx("line", {
                    x1: "6",
                    y1: "6",
                    x2: "18",
                    y2: "18"
                  })]
                })
              }), y.jsx("div", {
                style: {
                  fontSize: "10px",
                  color: "var(--nj-sheet-text-muted, #666)",
                  maxWidth: "44px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  textAlign: "center"
                },
                children: r.name
              })]
            }, e);
          } else {
            return null;
          }
        })
      }), y.jsx("div", {
        style: {
          padding: "14px 16px calc(14px + var(--nuo-safe-bottom))",
          borderTop: l.size > 0 ? "none" : "1px solid var(--nj-sheet-border, #f0f0f0)",
          paddingTop: l.size > 0 ? "10px" : "14px"
        },
        children: y.jsx("button", {
          onClick: async () => {
            if (l.size !== 0 && !h) {
              g(true);
              await o([...l]);
              x(true);
              setTimeout(() => r(), 800);
            }
          },
          disabled: l.size === 0 || h,
          style: {
            width: "100%",
            padding: "14px",
            borderRadius: "14px",
            border: "none",
            background: l.size === 0 ? "#e0e0e0" : m ? "#34c759" : "#07c160",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
            cursor: l.size === 0 ? "not-allowed" : "pointer",
            transition: "all 0.3s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px"
          },
          children: m ? y.jsxs(y.Fragment, {
            children: [y.jsx("svg", {
              width: "18",
              height: "18",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "#fff",
              strokeWidth: "2.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: y.jsx("polyline", {
                points: "20 6 9 17 4 12"
              })
            }), "已发送！"]
          }) : h ? y.jsx("span", {
            children: "发送中..."
          }) : l.size === 0 ? "请选择发送对象" : y.jsxs(y.Fragment, {
            children: [y.jsxs("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "#fff",
              strokeWidth: "2.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [y.jsx("line", {
                x1: "22",
                y1: "2",
                x2: "11",
                y2: "13"
              }), y.jsx("polygon", {
                points: "22 2 15 22 11 13 2 9 22 2"
              })]
            }), "发送 ", l.size > 1 ? `(${l.size})` : ""]
          })
        })
      })]
    })
  }), document.body);
};
const N = ({
  userPosts: b,
  setUserPosts: P,
  clearUserPosts: N,
  reloadMomentsFromDb: $,
  currentProfileUser: W,
  profileUsers: L,
  setProfileUsers: M,
  safeCurrentProfileUserId: D,
  activeChatIds: B,
  momentsCover: O,
  characterNotes: F,
  setCharacterNotes: U,
  userNote: _,
  setUserNote: H,
  likedNoteIds: G,
  setLikedNoteIds: J,
  lastMomentsNotifViewedAt: Y,
  setLastMomentsNotifViewedAt: V,
  characters: K,
  t: X,
  tOr: q,
  language: Q,
  viewMode: Z,
  setViewMode: ee,
  isActive: te,
  groupChats: ne,
  appWallpaper: ie,
  setShowCoverUpload: oe,
  setViewingCharProfile: re,
  setCharProfilePostViewMode: se,
  handleUpdateHistory: ae,
  loadFullHistory: le,
  messageHistory: de,
  MessageService: ce,
  updatePreview: pe,
  handleEmojiBurst: he,
  momentsNotifications: ge,
  notes: me,
  activeNoteChar: xe,
  setActiveNoteChar: ue
}) => {
  var fe;
  var ye;
  var ve;
  const [be, je] = f.useState(null);
  const [Se, we] = f.useState(false);
  const [ke, Ie] = f.useState(false);
  const [Ce, Te] = f.useState(false);
  const [Re, Pe] = f.useState("All Friends");
  const [Ee, ze] = f.useState("");
  const [Ae, Ne] = f.useState("");
  f.useEffect(() => {
    if (Z === "create_note") {
      const e = _ && typeof _ == "object" ? _.content || "" : _ || "";
      ze(e);
    }
  }, [Z, _]);
  const {
    currentScreen: $e
  } = e();
  const [We, Le] = f.useState("");
  const [Me, De] = f.useState([]);
  const [Be, Oe] = f.useState(false);
  const [Fe, Ue] = f.useState("");
  const [_e, He] = f.useState([]);
  const [Ge, Je] = f.useState("Public");
  const [Ye, Ve] = f.useState([]);
  const [Ke, Xe] = f.useState([]);
  const [qe, Qe] = f.useState(false);
  const [Ze, et] = f.useState(false);
  const [tt, nt] = f.useState(false);
  const [it, ot] = f.useState(false);
  const [rt, st] = f.useState(false);
  const [at, lt] = f.useState(false);
  const [dt, ct] = f.useState(null);
  const [pt, ht] = f.useState(null);
  const [gt, mt] = f.useState("");
  const [xt, ut] = f.useState(null);
  const [ft, yt] = f.useState(null);
  const [vt, bt] = f.useState(null);
  const [jt, St] = f.useState(20);
  const wt = f.useRef(null);
  f.useEffect(() => {
    const e = () => {
      try {
        if ($) {
          $();
        }
      } catch {}
    };
    window.addEventListener("moments-batch-completed", e);
    window.addEventListener("moments-replies-completed", e);
    return () => {
      window.removeEventListener("moments-batch-completed", e);
      window.removeEventListener("moments-replies-completed", e);
    };
  }, [$]);
  const [kt, It] = f.useState(false);
  const Ct = f.useRef(null);
  f.useEffect(() => {
    const e = Ct.current;
    if (!e) {
      return;
    }
    const t = e.closest(".content-area");
    if (!t) {
      return;
    }
    let n = 0;
    const i = () => {
      n ||= requestAnimationFrame(() => {
        n = 0;
        It(t.scrollTop > 260);
      });
    };
    i();
    t.addEventListener("scroll", i, {
      passive: true
    });
    return () => {
      t.removeEventListener("scroll", i);
      if (n) {
        cancelAnimationFrame(n);
      }
    };
  }, []);
  f.useEffect(() => {
    St(20);
  }, [D]);
  f.useEffect(() => {
    if (b.length < jt && b.length > 0) {
      St(Math.min(jt, Math.max(20, b.length)));
    }
  }, [b.length, jt]);
  f.useEffect(() => {
    const e = wt.current;
    if (!e) {
      return;
    }
    if (jt >= b.length) {
      return;
    }
    const t = new IntersectionObserver(e => {
      var t;
      if ((t = e[0]) == null ? undefined : t.isIntersecting) {
        St(e => Math.min(e + 20, b.length));
      }
    }, {
      rootMargin: "400px 0px"
    });
    t.observe(e);
    return () => t.disconnect();
  }, [jt, b.length]);
  const [Tt, Rt] = f.useState(false);
  const [Pt, Et] = f.useState("random");
  const [zt, At] = f.useState([]);
  const [Nt, $t] = f.useState(3);
  const [Wt, Lt] = f.useState(false);
  const [Mt, Dt] = f.useState("");
  const [Bt, Ot] = f.useState(null);
  const [Ft, Ut] = f.useState(0);
  f.useEffect(() => {
    if (Bt) {
      Ut(Bt.initialIndex || 0);
    }
  }, [Bt]);
  const [_t, Ht] = f.useState(null);
  const [Gt, Jt] = f.useState({});
  const [Yt, Vt] = f.useState(null);
  const [Kt, Xt] = f.useState(null);
  const [qt, Qt] = f.useState(null);
  const Zt = f.useRef([]);
  const en = f.useRef(null);
  const tn = f.useRef(false);
  const nn = f.useRef(null);
  const on = f.useCallback((e, t) => {
    var n;
    if (!(t == null ? undefined : t.isCharacterPost)) {
      return;
    }
    tn.current = false;
    const i = ((n = e.touches) == null ? undefined : n[0]) || e;
    nn.current = {
      x: i.clientX || 0,
      y: i.clientY || 0
    };
    clearTimeout(en.current);
    en.current = setTimeout(() => {
      tn.current = true;
      Xt({
        post: t
      });
    }, 500);
  }, []);
  const rn = f.useCallback(e => {
    var t;
    if (!en.current) {
      return;
    }
    const n = nn.current;
    if (!n) {
      return;
    }
    const i = ((t = e.touches) == null ? undefined : t[0]) || e;
    const o = (i.clientX || 0) - n.x;
    const r = (i.clientY || 0) - n.y;
    if (Math.abs(o) > 8 || Math.abs(r) > 8) {
      clearTimeout(en.current);
      en.current = null;
    }
  }, []);
  const sn = f.useCallback(e => {
    clearTimeout(en.current);
    en.current = null;
    if (tn.current && (e == null ? undefined : e.preventDefault)) {
      e.preventDefault();
      tn.current = false;
    }
  }, []);
  const an = f.useCallback(async (e, o) => {
    if (e && e.isCharacterPost) {
      if (e._id) {
        if (await n(q("momentImageDeleteConfirm", "確定要刪除這張圖嗎？文案會保留。"))) {
          try {
            const {
              UserPostService: t
            } = await i(async () => {
              const {
                UserPostService: e
              } = await import("./native-pet-CTNtZgMA.js").then(e => e.cy);
              return {
                UserPostService: e
              };
            }, __vite__mapDeps([0, 1, 2, 3, 4, 5]));
            const n = await t.removeImage(e._id, o);
            const r = {
              images: n.resolvedImages,
              imageRefs: n.imageRefs,
              imageDescriptions: n.imageDescriptions,
              userAttachedImageRefs: n.userAttachedImageRefs
            };
            P(t => t.map(t => t.id === e.id ? {
              ...t,
              ...r
            } : t));
            Ot(t => {
              if (!t || !t.post || t.post.id !== e.id) {
                return t;
              }
              if (!r.images || r.images.length === 0) {
                return null;
              }
              const n = Math.min(t.initialIndex ?? 0, r.images.length - 1);
              return {
                ...t,
                images: r.images,
                initialIndex: n,
                post: {
                  ...t.post,
                  ...r
                }
              };
            });
            Ut(e => r.images && r.images.length !== 0 ? Math.min(e, r.images.length - 1) : 0);
          } catch (r) {
            console.error("[MomentsTab] removeImage failed", r);
            t(q("momentImageDeleteFailed", "刪除失敗"));
          }
        }
      } else {
        t(q("momentImageDeleteUnavailable", "此貼文沒有 _id，無法操作"));
      }
    }
  }, [P, X, q]);
  const ln = f.useCallback(async (e, n) => {
    const o = (Array.isArray(n) ? n : [n]).filter(Boolean);
    if (e && e._id && o.length !== 0) {
      try {
        const {
          UserPostService: t
        } = await i(async () => {
          const {
            UserPostService: e
          } = await import("./native-pet-CTNtZgMA.js").then(e => e.cy);
          return {
            UserPostService: e
          };
        }, __vite__mapDeps([0, 1, 2, 3, 4, 5]));
        const n = await t.appendImages(e._id, o);
        const r = {
          images: n.resolvedImages,
          imageRefs: n.imageRefs,
          userAttachedImageRefs: n.userAttachedImageRefs
        };
        P(t => t.map(t => t.id === e.id ? {
          ...t,
          ...r
        } : t));
        Ot(t => t && t.post && t.post.id === e.id ? {
          ...t,
          images: r.images,
          post: {
            ...t.post,
            ...r
          }
        } : t);
      } catch (r) {
        console.error("[MomentsTab] appendImages failed", r);
        t(q("momentImageAppendFailed", "附圖失敗"));
      }
    }
  }, [P, q]);
  const dn = f.useCallback(async (e, n, d = {}) => {
    var c;
    const p = `${e.id}_${n}`;
    if (!Gt[p]) {
      try {
        const h = await o.get("apiSettings");
        if ((!(h == null ? undefined : h.novelAiEnabled) || !(h == null ? undefined : h.novelAiKey)) && !(h == null ? undefined : h.pollinationsEnabled) && (!(h == null ? undefined : h.googleImagenEnabled) || !(h == null ? undefined : h.googleImagenKey)) && (!(h == null ? undefined : h.geminiImageEnabled) || !(h == null ? undefined : h.geminiImageKey)) && (!(h == null ? undefined : h.grokEnabled) || !(h == null ? undefined : h.grokKey)) && (!(h == null ? undefined : h.gptImageEnabled) || !(h == null ? undefined : h.gptImageKey))) {
          t(X("msgImageGenFail") || "生圖 API 未啟用");
          return;
        }
        const g = ((c = e.images) == null ? undefined : c[n]) || "";
        const m = typeof d.rawImgDesc == "string" && d.rawImgDesc.trim() || e.imagePrompt && String(e.imagePrompt).trim() || (typeof g == "string" && g.startsWith("txt:") ? g.substring(4) : "") || (e.note || "").trim();
        if (!m) {
          t("無可用的生圖描述");
          return;
        }
        Jt(e => ({
          ...e,
          [p]: true
        }));
        const x = e.charUserId || e.userId;
        const u = K.find(e => String(e.id) === String(x));
        const f = D;
        const y = u && f ? await r.get(f, u.id).catch(() => null) : null;
        const v = (u == null ? undefined : u.imagePrompt) || (y == null ? undefined : y.charImagePrompt) || s(u == null ? undefined : u.description) || "";
        let b = [];
        try {
          const e = await r.getByUser(f);
          const t = new Map((e || []).map(e => [String(e.characterId), e]));
          b = (K || []).map(e => {
            var n;
            return {
              id: e.id,
              name: e.name,
              gender: e.gender,
              imagePrompt: e.imagePrompt || ((n = t.get(String(e.id))) == null ? undefined : n.charImagePrompt) || s(e.description) || ""
            };
          }).filter(e => e.name);
        } catch {}
        let j;
        let S = null;
        if (d.useRaw) {
          j = m;
        } else {
          const e = a({
            rawImgDesc: m,
            char: u,
            charAppearance: v,
            user: W,
            extraChars: b,
            sceneType: "moment",
            apiSettings: h,
            imagePreset: y == null ? undefined : y.imagePreset
          });
          j = e.prompt;
          S = e.structured;
        }
        const w = await l(j, "moment", h, {
          structured: S,
          imagePreset: y == null ? undefined : y.imagePreset,
          charSeed: u == null ? undefined : u.imageSeed,
          refImageId: u == null ? undefined : u.refImageRef
        });
        if (!w) {
          throw new Error("no image");
        }
        const k = Array.isArray(e.imageDescriptions) ? [...e.imageDescriptions] : [];
        k[n] &&= "";
        const {
          UserPostService: I
        } = await i(async () => {
          const {
            UserPostService: e
          } = await import("./native-pet-CTNtZgMA.js").then(e => e.cy);
          return {
            UserPostService: e
          };
        }, __vite__mapDeps([0, 1, 2, 3, 4, 5]));
        let C;
        let T;
        if (e._id) {
          const t = await I.replaceImage(e._id, n, w, {
            imagePrompt: m,
            imageDescriptions: k
          });
          C = t.resolvedImages;
          T = t.imageRefs;
        } else {
          C = [...(e.images || [])];
          C[n] = w;
          T = e.imageRefs;
        }
        const R = {
          images: C,
          imageRefs: T,
          imagePrompt: m,
          imageDescriptions: k
        };
        P(t => t.map(t => t.id === e.id ? {
          ...t,
          ...R
        } : t));
        return {
          ok: true,
          patch: R,
          postId: e.id
        };
      } catch (h) {
        console.error("[朋友圈重 roll] 失敗:", h);
        t(X("couplesTouchCGFail") || "生圖失敗");
        return {
          ok: false
        };
      } finally {
        Jt(e => {
          const t = {
            ...e
          };
          delete t[p];
          return t;
        });
      }
    }
  }, [Gt, K, D, P, X]);
  const cn = f.useRef(null);
  const pn = f.useRef(false);
  f.useEffect(() => {
    ht(null);
    ct(null);
    mt("");
    yt(null);
  }, [Z]);
  f.useEffect(() => {
    const e = () => ct(null);
    document.addEventListener("click", e);
    return () => document.removeEventListener("click", e);
  }, []);
  const hn = () => {
    if (!gt.trim() || !pt) {
      return;
    }
    try {
      const e = document.getElementById(`comment-input-${pt}`);
      if (e) {
        e.blur();
      }
    } catch (o) {}
    const e = (W == null ? undefined : W.name) || "Me";
    const t = (W == null ? undefined : W.id) || "me";
    const n = gt.trim();
    const i = ft ? {
      id: ft.id,
      name: ft.name
    } : null;
    P(o => o.map(o => {
      if (o.id === pt) {
        const r = {
          id: E(),
          userId: t,
          name: e,
          content: n,
          timestamp: Date.now(),
          replyTo: i
        };
        return {
          ...o,
          comments: [...(o.comments || []), r]
        };
      }
      return o;
    }));
    mt("");
    ht(null);
    yt(null);
  };
  const gn = async (e, t) => {
    if (!(await n(`${X("btnDelete")} ${X("btnComment")}?`))) {
      return;
    }
    const i = b.find(t => t.id === e);
    let o = null;
    if (i) {
      const e = (i.comments || []).find(e => e.id === t);
      if (e == null ? undefined : e.userId) {
        const n = String(e.userId);
        if (n !== "me" && (!W || n !== String(W.id) && n !== String(W.uid))) {
          if ((i.comments || []).filter(e => String(e.userId) === n && e.id !== t).length === 0) {
            o = n;
          }
        }
      }
    }
    P(n => n.map(n => n.id === e ? {
      ...n,
      comments: (n.comments || []).filter(e => e.id !== t)
    } : n));
    M(n => n.map(n => ({
      ...n,
      posts: (n.posts || []).map(n => n.id === e ? {
        ...n,
        comments: (n.comments || []).filter(e => e.id !== t)
      } : n)
    })));
    if (o) {
      const t = String(D || (W == null ? undefined : W.uid) || (W == null ? undefined : W.id) || "");
      if (t) {
        m.removeMomentEntriesByPostId(t, o, String(e)).then(e => {
          if (e > 0) {
            console.log(`[Moments→Memory] 刪留言：清掉 char ${o} 的 ${e} 條記憶`);
          }
        }).catch(e => console.warn("[Moments→Memory] 刪留言清理失敗:", e));
      }
    }
  };
  const mn = (e, t) => {
    pn.current = false;
    cn.current = setTimeout(() => {
      pn.current = true;
      gn(e, t);
    }, 800);
  };
  const xn = () => {
    if (cn.current) {
      clearTimeout(cn.current);
      cn.current = null;
    }
  };
  const un = async e => {
    if (!e || !xe) {
      return;
    }
    const t = xe.id;
    const n = {
      id: E(),
      text: e,
      sender: "me",
      timestamp: Date.now(),
      isNoteReply: true,
      noteContent: xe.note,
      noteImage: xe.image,
      senderName: xe.name,
      isRead: false
    };
    let i = de[t] || [];
    if (i.length <= 1) {
      i = (await le(t)) || i;
    }
    ae(t, [...i, n]);
    if (D && t) {
      ce.putMessage(D, t, n).catch(() => {});
    }
    Ne("");
    ue(null);
  };
  const fn = () => {
    if (!We.trim() && Me.length === 0) {
      return;
    }
    const e = {
      id: E(),
      userId: W.uid || W.id,
      name: W.name || "User",
      avatar: W.avatar,
      images: Me,
      note: We,
      timestamp: Date.now(),
      likes: [],
      comments: [],
      location: Fe,
      mentions: _e,
      visibility: Ge,
      allowedUsers: Ye,
      allowedGroups: Ke
    };
    P(t => [e, ...t]);
    if (W) {
      const t = [e, ...(W.posts || [])];
      const n = L.map(e => e.id === W.id ? {
        ...e,
        posts: t
      } : e);
      M(n);
    }
    Le("");
    De([]);
    ee("list");
  };
  if (Z === "create_note") {
    const e = Ee.trim().length > 0;
    const t = [...new Set(K.map(e => e.group || "Other"))].filter(Boolean).sort();
    return y.jsxs("div", {
      className: "screen " + (te ? "active" : ""),
      style: {
        background: "var(--ios-bg-primary)",
        display: "flex",
        flexDirection: "column",
        zIndex: 200,
        position: "relative"
      },
      children: [y.jsx("div", {
        style: {
          padding: "16px",
          paddingTop: "calc(16px + var(--nuo-safe-top))",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 10
        },
        children: y.jsx("div", {
          onClick: () => ee("list"),
          style: {
            cursor: "pointer",
            padding: "10px"
          },
          children: y.jsx(j.Close, {})
        })
      }), y.jsxs("div", {
        style: {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          width: "100%",
          marginBottom: "60px"
        },
        children: [y.jsxs("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          },
          children: [y.jsxs("div", {
            style: {
              position: "relative",
              marginBottom: "15px"
            },
            children: [y.jsx("div", {
              style: {
                background: "var(--ios-bg-tertiary)",
                padding: "16px 24px",
                borderRadius: "24px",
                minWidth: "120px",
                maxWidth: "280px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
              },
              children: y.jsx("input", {
                id: "user-note-input",
                name: "user-note",
                autoComplete: "off",
                className: "no-outline-input",
                autoFocus: true,
                value: Ee,
                onChange: e => ze(e.target.value),
                placeholder: X("msgWhatsOnYourMind"),
                style: {
                  border: "none",
                  background: "transparent",
                  outline: "none",
                  boxShadow: "none",
                  fontSize: "18px",
                  fontWeight: "500",
                  textAlign: "center",
                  color: "var(--text-primary)",
                  width: "100%"
                }
              })
            }), y.jsx("div", {
              style: {
                position: "absolute",
                bottom: "-6px",
                left: "40px",
                width: "10px",
                height: "10px",
                background: "var(--ios-bg-tertiary, #ffffff)",
                borderRadius: "50%",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
              }
            }), y.jsx("div", {
              style: {
                position: "absolute",
                bottom: "-16px",
                left: "30px",
                width: "6px",
                height: "6px",
                background: "var(--ios-bg-tertiary, #ffffff)",
                borderRadius: "50%",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
              }
            })]
          }), y.jsx("div", {
            style: {
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              overflow: "hidden",
              background: "#eee",
              marginBottom: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: (W == null ? undefined : W.avatar) ? y.jsx("img", {
              decoding: "async",
              loading: "lazy",
              src: W.avatar,
              alt: "me",
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }
            }) : y.jsx("div", {
              style: {
                width: "100%",
                height: "100%",
                background: "#f5f5f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: y.jsx("div", {
                style: {
                  transform: "scale(2)",
                  opacity: 0.5
                },
                children: y.jsx(j.Profile, {
                  active: true
                })
              })
            })
          }), y.jsx("div", {
            style: {
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "#f9f9f9",
              color: "#ff4d6d",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
            },
            children: y.jsx(j.Music, {})
          })]
        }), y.jsx("div", {
          style: {
            width: "100%",
            maxWidth: "320px",
            padding: "0 20px",
            marginTop: "10px"
          },
          children: y.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            },
            children: [y.jsxs("div", {
              onClick: () => we(true),
              style: {
                color: "var(--nj-sheet-text-muted, #666)",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                cursor: "pointer",
                background: "var(--nj-sheet-card-bg, #f5f5f5)",
                padding: "6px 12px",
                borderRadius: "16px"
              },
              children: [y.jsx("span", {
                children: Re
              }), y.jsx(j.ChevronDown, {})]
            }), y.jsx("button", {
              disabled: !e,
              onClick: () => e && (e => {
                const t = {
                  content: e,
                  shareScope: Re,
                  timestamp: Date.now()
                };
                H(t);
                ee("list");
              })(Ee),
              style: {
                background: e ? "#dbeafe" : "var(--nj-sheet-card-bg, #f0f0f0)",
                color: e ? "#2563eb" : "var(--nj-sheet-text-muted, #ccc)",
                border: "none",
                padding: "8px 24px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: e ? "pointer" : "default",
                transition: "all 0.2s"
              },
              children: X("msgShare")
            })]
          })
        })]
      }), Se && y.jsxs(y.Fragment, {
        children: [y.jsx("div", {
          onClick: () => we(false),
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 201
          }
        }), y.jsxs("div", {
          style: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "var(--nj-sheet-bg, #fff)",
            color: "var(--nj-sheet-text, inherit)",
            borderTopLeftRadius: "24px",
            borderTopRightRadius: "24px",
            padding: "16px 20px 24px",
            zIndex: 202,
            paddingBottom: "calc(24px + var(--nuo-safe-top))",
            animation: "slideUp 0.3s ease-out",
            boxShadow: "0 -5px 15px rgba(0,0,0,0.1)"
          },
          children: [y.jsx("div", {
            style: {
              width: "40px",
              height: "4px",
              background: "var(--nj-sheet-handle, #e0e0e0)",
              borderRadius: "2px",
              margin: "0 auto 16px"
            }
          }), y.jsx("div", {
            style: {
              fontWeight: "bold",
              fontSize: "18px",
              marginBottom: "20px",
              textAlign: "center"
            },
            children: X("msgShareWith")
          }), y.jsxs("div", {
            onClick: () => {
              Pe("All Friends");
              we(false);
            },
            style: {
              padding: "15px 0",
              borderBottom: "1px solid var(--nj-sheet-border, #f0f0f0)",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              color: Re === "All Friends" ? "var(--ios-blue)" : "inherit"
            },
            children: [y.jsx("span", {
              children: X("msgAllFriends")
            }), Re === "All Friends" && y.jsx("span", {
              children: "✓"
            })]
          }), y.jsxs("div", {
            onClick: () => {
              Te(true);
              we(false);
            },
            style: {
              padding: "15px 0",
              borderBottom: "1px solid var(--nj-sheet-border, #f0f0f0)",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              color: "inherit"
            },
            children: [y.jsx("span", {
              children: X("msgSelectGroup")
            }), y.jsx(j.ChevronDown, {})]
          }), y.jsxs("div", {
            style: {
              marginTop: "10px",
              maxHeight: "200px",
              overflowY: "auto"
            },
            children: [y.jsx("div", {
              style: {
                fontSize: "12px",
                color: "var(--nj-sheet-text-muted, #999)",
                marginBottom: "5px"
              },
              children: X("msgSpecificFriends")
            }), K.map(e => y.jsxs("div", {
              onClick: () => {
                Pe(e.name);
                we(false);
              },
              style: {
                padding: "10px 0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer"
              },
              children: [y.jsx("div", {
                style: {
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: "#eee",
                  overflow: "hidden"
                },
                children: e.image ? y.jsx("img", {
                  decoding: "async",
                  loading: "lazy",
                  src: e.image,
                  style: S(e)
                }) : null
              }), y.jsx("span", {
                style: {
                  color: Re === e.name ? "var(--ios-blue)" : "inherit"
                },
                children: e.name
              }), Re === e.name && y.jsx("span", {
                style: {
                  marginLeft: "auto",
                  color: "var(--ios-blue)"
                },
                children: "✓"
              })]
            }, e.id))]
          }), y.jsx("div", {
            onClick: () => we(false),
            style: {
              marginTop: "20px",
              padding: "14px",
              background: "var(--nj-sheet-cancel-bg, #f0f0f0)",
              borderRadius: "14px",
              textAlign: "center",
              fontWeight: "700",
              cursor: "pointer",
              fontSize: "16px",
              color: "var(--nj-sheet-text, #000)"
            },
            children: X("msgCancel")
          })]
        })]
      }), Ce && y.jsx("div", {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.5)",
          zIndex: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end"
        },
        onClick: () => {
          Te(false);
          we(true);
        },
        children: y.jsxs("div", {
          style: {
            background: "var(--nj-sheet-bg, #fff)",
            color: "var(--nj-sheet-text, inherit)",
            borderTopLeftRadius: "24px",
            borderTopRightRadius: "24px",
            padding: "16px 20px 40px",
            width: "100%",
            maxHeight: "80%",
            display: "flex",
            flexDirection: "column",
            animation: "slideUp 0.3s ease-out"
          },
          onClick: e => e.stopPropagation(),
          children: [y.jsx("div", {
            style: {
              width: "40px",
              height: "4px",
              background: "var(--nj-sheet-handle, #e0e0e0)",
              borderRadius: "2px",
              margin: "0 auto 16px"
            }
          }), y.jsx("div", {
            style: {
              fontWeight: "bold",
              fontSize: "18px",
              marginBottom: "20px",
              textAlign: "center"
            },
            children: X("msgSelectGroup")
          }), y.jsxs("div", {
            style: {
              overflowY: "auto",
              maxHeight: "60vh"
            },
            children: [t.map(e => y.jsxs("div", {
              onClick: () => {
                Pe(e);
                Te(false);
              },
              style: {
                padding: "15px 0",
                borderBottom: "1px solid var(--nj-sheet-border, #f0f0f0)",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                color: Re === e ? "var(--ios-blue)" : "inherit"
              },
              children: [y.jsx("span", {
                children: e
              }), Re === e && y.jsx("span", {
                children: "✓"
              })]
            }, e)), t.length === 0 && y.jsx("div", {
              style: {
                textAlign: "center",
                color: "var(--nj-sheet-text-muted, #999)",
                padding: "20px"
              },
              children: "No groups found"
            })]
          }), y.jsx("div", {
            onClick: () => {
              Te(false);
              we(true);
            },
            style: {
              marginTop: "20px",
              padding: "14px",
              background: "var(--nj-sheet-cancel-bg, #f0f0f0)",
              borderRadius: "14px",
              textAlign: "center",
              fontWeight: "700",
              cursor: "pointer"
            },
            children: X("msgCancel")
          })]
        })
      })]
    });
  }
  if (Z === "post_moment") {
    const e = We.trim().length > 0 || Me.length > 0;
    const t = e => {
      if (e) {
        De(t => t.length < 9 ? [...t, e] : t);
      }
    };
    const n = e => {
      De(Me.filter((t, n) => n !== e));
    };
    const i = async () => {
      const e = await c(X("msgEnterLocation"), Fe);
      if (e !== null) {
        Ue(e);
      }
    };
    const o = () => {
      Qe(true);
    };
    const r = () => {
      et(true);
    };
    const s = ({
      title: e,
      multiple: t,
      initialSelected: n,
      onConfirm: i,
      onClose: o,
      allUsers: r
    }) => {
      const [s, a] = f.useState(n || []);
      return y.jsxs("div", {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "var(--nj-sheet-page-bg, #f7f7f7)",
          color: "var(--nj-sheet-text, inherit)",
          zIndex: 300,
          display: "flex",
          flexDirection: "column",
          animation: "slideUp 0.2s ease-out"
        },
        children: [y.jsxs("div", {
          style: {
            padding: "10px 16px",
            paddingTop: "calc(10px + var(--nuo-safe-top))",
            background: "var(--nj-sheet-page-bg, #f7f7f7)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(0,0,0,0.1)"
          },
          children: [y.jsx("div", {
            onClick: o,
            style: {
              fontSize: "16px",
              cursor: "pointer"
            },
            children: X("msgCancel")
          }), y.jsx("div", {
            style: {
              fontWeight: "bold"
            },
            children: e
          }), y.jsx("button", {
            onClick: () => i(s),
            style: {
              background: "#07c160",
              color: "#fff",
              border: "none",
              padding: "6px 12px",
              borderRadius: "4px",
              fontWeight: "bold"
            },
            children: X("msgSelectStats", {
              count: s.length
            }).replace("{count}", s.length)
          })]
        }), y.jsx("div", {
          style: {
            flex: 1,
            overflowY: "auto"
          },
          children: r.map(e => y.jsxs("div", {
            onClick: () => {
              t = e.id;
              if (s.includes(t)) {
                a(s.filter(e => e !== t));
              } else {
                a([...s, t]);
              }
              return;
              var t;
            },
            style: {
              padding: "12px 16px",
              background: "var(--nj-sheet-row-bg, #fff)",
              borderBottom: "1px solid var(--nj-sheet-border, #f0f0f0)",
              display: "flex",
              alignItems: "center",
              gap: "12px"
            },
            children: [y.jsx("div", {
              style: {
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                border: "1px solid #ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: s.includes(e.id) ? "#07c160" : "transparent",
                borderColor: s.includes(e.id) ? "#07c160" : "#ccc"
              },
              children: s.includes(e.id) && y.jsx("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "white",
                strokeWidth: "3",
                children: y.jsx("polyline", {
                  points: "20 6 9 17 4 12"
                })
              })
            }), y.jsx("img", {
              decoding: "async",
              loading: "lazy",
              src: e.image || e.avatar || w(e.name || "?"),
              style: {
                width: "40px",
                height: "40px",
                borderRadius: "4px",
                objectFit: "cover"
              }
            }), y.jsx("div", {
              children: e.name
            })]
          }, e.id))
        })]
      });
    };
    const a = () => {
      const e = [...new Set(K.map(e => e.group || "Other"))].filter(Boolean).sort();
      const [t, n] = f.useState([...Ke]);
      return y.jsxs("div", {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "var(--nj-sheet-page-bg, #f7f7f7)",
          color: "var(--nj-sheet-text, inherit)",
          zIndex: 300,
          display: "flex",
          flexDirection: "column",
          animation: "slideUp 0.2s ease-out"
        },
        children: [y.jsxs("div", {
          style: {
            padding: "10px 16px",
            paddingTop: "calc(10px + var(--nuo-safe-top))",
            background: "var(--nj-sheet-page-bg, #f7f7f7)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(0,0,0,0.1)"
          },
          children: [y.jsx("div", {
            onClick: () => {
              ot(false);
              et(true);
            },
            style: {
              fontSize: "16px",
              cursor: "pointer"
            },
            children: X("msgCancel")
          }), y.jsx("div", {
            style: {
              fontWeight: "bold"
            },
            children: X("msgSelectGroup")
          }), y.jsx("button", {
            onClick: () => {
              Xe(t);
              if (t.length > 0) {
                Je("Group");
              } else if (Ge === "Group") {
                Je("Public");
              }
              ot(false);
            },
            style: {
              background: "#07c160",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "4px 12px",
              fontSize: "14px",
              fontWeight: "bold"
            },
            children: X("msgDone")
          })]
        }), y.jsxs("div", {
          style: {
            flex: 1,
            overflowY: "auto"
          },
          children: [e.map(e => y.jsxs("div", {
            onClick: () => (e => {
              if (t.includes(e)) {
                n(t.filter(t => t !== e));
              } else {
                n([...t, e]);
              }
            })(e),
            style: {
              padding: "16px",
              background: "var(--nj-sheet-row-bg, #fff)",
              borderBottom: "1px solid var(--nj-sheet-border, #f0f0f0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer"
            },
            children: [y.jsx("div", {
              children: e
            }), y.jsx("div", {
              style: {
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                border: "1px solid #ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: t.includes(e) ? "#07c160" : "transparent",
                borderColor: t.includes(e) ? "#07c160" : "#ccc"
              },
              children: t.includes(e) && y.jsx("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "white",
                strokeWidth: "3",
                children: y.jsx("polyline", {
                  points: "20 6 9 17 4 12"
                })
              })
            })]
          }, e)), e.length === 0 && y.jsx("div", {
            style: {
              padding: "20px",
              textAlign: "center",
              color: "var(--nj-sheet-text-muted, #999)"
            },
            children: X("msgNoGroupsFound")
          })]
        })]
      });
    };
    const l = () => y.jsx("div", {
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 300,
        display: "flex",
        alignItems: "flex-end"
      },
      onClick: () => et(false),
      children: y.jsxs("div", {
        style: {
          width: "100%",
          background: "var(--nj-sheet-bg, #fff)",
          color: "var(--nj-sheet-text, inherit)",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          overflow: "hidden"
        },
        onClick: e => e.stopPropagation(),
        children: [y.jsx("div", {
          style: {
            padding: "16px",
            textAlign: "center",
            fontWeight: "bold",
            borderBottom: "1px solid var(--nj-sheet-border, #f0f0f0)"
          },
          children: X("msgWhoCanSee")
        }), [{
          label: X("msgPublic"),
          value: "Public",
          icon: y.jsx(j.Discovery, {})
        }, {
          label: X("msgPrivate"),
          value: "Private",
          icon: y.jsx(j.Lock, {})
        }, {
          label: X("msgPartial"),
          value: "Partial",
          icon: y.jsx(j.Users, {})
        }, {
          label: X("msgGroupVisible"),
          value: "Group",
          icon: y.jsx(j.Folder, {})
        }].map(e => y.jsxs("div", {
          onClick: () => {
            if (e.value === "Partial") {
              et(false);
              nt(true);
            } else if (e.value === "Group") {
              et(false);
              ot(true);
            } else {
              Je(e.value);
              et(false);
            }
          },
          style: {
            padding: "16px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            borderBottom: "1px solid var(--nj-sheet-border, #f0f0f0)",
            cursor: "pointer"
          },
          children: [e.icon, y.jsx("span", {
            children: e.label
          }), Ge === e.value && y.jsx("div", {
            style: {
              marginLeft: "auto",
              color: "#07c160"
            },
            children: "✓"
          })]
        }, e.value)), y.jsx("div", {
          style: {
            padding: "16px",
            textAlign: "center",
            borderTop: "4px solid var(--nj-sheet-border, #f0f0f0)",
            cursor: "pointer"
          },
          onClick: () => et(false),
          children: X("msgCancel")
        })]
      })
    });
    return y.jsxs("div", {
      className: "screen " + (te ? "active" : ""),
      style: {
        background: "var(--nj-sheet-page-bg, #f7f7f7)",
        color: "var(--nj-sheet-text, inherit)",
        display: "flex",
        flexDirection: "column",
        zIndex: 200,
        position: "relative",
        height: "100%"
      },
      children: [y.jsx(d, {
        isOpen: Be,
        onClose: () => Oe(false),
        onImageSelect: t,
        title: X("msgAddImage"),
        multiple: true
      }), rt && y.jsxs(y.Fragment, {
        children: [y.jsx("div", {
          onClick: () => st(false),
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 400
          }
        }), y.jsxs("div", {
          style: {
            position: "fixed",
            bottom: 0,
            left: 10,
            right: 10,
            paddingBottom: "calc(20px + var(--nuo-safe-bottom))",
            zIndex: 401,
            animation: "slideUp 0.3s ease-out"
          },
          children: [y.jsxs("div", {
            style: {
              background: "white",
              borderRadius: "14px",
              overflow: "hidden",
              marginBottom: "8px"
            },
            children: [y.jsx("button", {
              onClick: () => {
                st(false);
                Oe(true);
              },
              style: {
                width: "100%",
                padding: "16px",
                background: "none",
                border: "none",
                borderBottom: "1px solid var(--nj-sheet-border, #f0f0f0)",
                fontSize: "17px",
                fontWeight: "500",
                color: "#007aff",
                cursor: "pointer"
              },
              children: X("msgUploadFromGallery")
            }), y.jsx("button", {
              onClick: async () => {
                st(false);
                const e = await c(X("msgEnterImgDesc"));
                if (e) {
                  t(`txt:${e}`);
                }
              },
              style: {
                width: "100%",
                padding: "16px",
                background: "none",
                border: "none",
                fontSize: "17px",
                fontWeight: "500",
                color: "#007aff",
                cursor: "pointer"
              },
              children: X("msgAiDescImg")
            })]
          }), y.jsx("button", {
            onClick: () => st(false),
            style: {
              width: "100%",
              padding: "16px",
              background: "white",
              border: "none",
              borderRadius: "14px",
              fontSize: "17px",
              fontWeight: "600",
              color: "#ff3b30",
              cursor: "pointer"
            },
            children: X("msgCancel")
          })]
        })]
      }), qe && y.jsx(s, {
        title: X("msgMentionWho"),
        allUsers: K,
        initialSelected: _e,
        onClose: () => Qe(false),
        onConfirm: e => {
          He(e);
          Qe(false);
        }
      }), tt && y.jsx(s, {
        title: X("msgSelectVisibleFriends"),
        allUsers: K,
        initialSelected: Ye,
        onClose: () => {
          nt(false);
          et(true);
        },
        onConfirm: e => {
          Ve(e);
          Je("Partial");
          nt(false);
        }
      }), it && y.jsx(a, {}), Ze && y.jsx(l, {}), y.jsxs("div", {
        style: {
          padding: "10px 16px",
          paddingTop: "calc(10px + var(--nuo-safe-top))",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "var(--nj-sheet-page-bg, #f7f7f7)"
        },
        children: [y.jsx("div", {
          onClick: () => ee("list"),
          style: {
            cursor: "pointer",
            fontSize: "16px",
            color: "var(--nj-sheet-text, #181818)"
          },
          children: X("msgCancel")
        }), y.jsx("button", {
          disabled: !e,
          onClick: fn,
          style: {
            background: e ? "#07c160" : "#e0e0e0",
            color: "#fff",
            border: "none",
            padding: "6px 14px",
            borderRadius: "4px",
            fontSize: "15px",
            fontWeight: "500",
            cursor: e ? "pointer" : "default",
            transition: "all 0.2s"
          },
          children: X("msgPost")
        })]
      }), y.jsxs("div", {
        style: {
          padding: "20px",
          background: "var(--nj-sheet-bg, #fff)",
          color: "var(--nj-sheet-text, inherit)",
          marginTop: "0px",
          flex: 1,
          overflowY: "auto"
        },
        children: [y.jsx("textarea", {
          id: "moment-post-text",
          name: "moment-text",
          autoComplete: "off",
          autoFocus: true,
          value: We,
          onChange: e => Le(e.target.value),
          placeholder: X("msgWhatsOnYourMind"),
          className: "moment-textarea"
        }), y.jsxs("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "8px",
            marginBottom: "30px"
          },
          children: [Me.map((e, t) => y.jsxs("div", {
            style: {
              width: "100%",
              aspectRatio: "1/1",
              position: "relative",
              borderRadius: "4px",
              overflow: "hidden"
            },
            children: [y.jsx("div", {
              style: {
                width: "100%",
                height: "100%",
                background: typeof e == "string" && e.startsWith("txt:") ? "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" : "#eee",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
                textAlign: "center"
              },
              children: typeof e == "string" && e.startsWith("txt:") ? y.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px"
                },
                children: [y.jsx(j.Image, {}), y.jsx("span", {
                  style: {
                    fontSize: "10px",
                    color: "#666",
                    fontWeight: "500",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  },
                  children: e.substring(4)
                })]
              }) : y.jsx("img", {
                decoding: "async",
                loading: "lazy",
                src: e,
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                },
                alt: ""
              })
            }), y.jsx("div", {
              onClick: () => n(t),
              style: {
                position: "absolute",
                top: "4px",
                right: "4px",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                cursor: "pointer",
                zIndex: 10
              },
              children: "×"
            })]
          }, t)), Me.length < 9 && y.jsx("div", {
            onClick: () => st(true),
            style: {
              width: "100%",
              aspectRatio: "1/1",
              background: "var(--nj-sheet-card-bg, #f7f7f7)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              borderRadius: "4px"
            },
            children: y.jsx("span", {
              style: {
                fontSize: "40px",
                color: "var(--nj-sheet-text-muted, #dbdbdb)",
                fontWeight: "300"
              },
              children: "+"
            })
          })]
        }), y.jsxs("div", {
          style: {
            borderTop: "1px solid var(--nj-sheet-border, #f0f0f0)",
            margin: "0 -20px"
          },
          children: [y.jsxs("div", {
            onClick: i,
            style: {
              display: "flex",
              alignItems: "center",
              padding: "16px 20px",
              borderBottom: "1px solid var(--nj-sheet-border, #f0f0f0)",
              cursor: "pointer"
            },
            children: [y.jsx("div", {
              style: {
                width: "24px",
                marginRight: "12px",
                color: "var(--nj-sheet-text, #181818)"
              },
              children: y.jsx(j.Location, {})
            }), y.jsx("span", {
              style: {
                fontSize: "16px",
                color: "var(--nj-sheet-text, #181818)"
              },
              children: Fe || X("msgEnterLocation").replace(":", "")
            }), y.jsx("div", {
              style: {
                marginLeft: "auto",
                color: "var(--nj-sheet-text-muted, #b2b2b2)"
              },
              children: y.jsx(j.Forward, {})
            })]
          }), y.jsxs("div", {
            onClick: o,
            style: {
              display: "flex",
              alignItems: "center",
              padding: "16px 20px",
              borderBottom: "1px solid var(--nj-sheet-border, #f0f0f0)",
              cursor: "pointer"
            },
            children: [y.jsx("div", {
              style: {
                width: "24px",
                marginRight: "12px",
                color: "var(--nj-sheet-text, #181818)"
              },
              children: y.jsx(j.Users, {})
            }), y.jsx("span", {
              style: {
                fontSize: "16px",
                color: "var(--nj-sheet-text, #181818)"
              },
              children: _e.length > 0 ? X("msgMentionSelected").replace("{count}", _e.length) : X("msgMentionWho")
            }), y.jsx("div", {
              style: {
                marginLeft: "auto",
                color: "var(--nj-sheet-text-muted, #b2b2b2)"
              },
              children: y.jsx(j.Forward, {})
            })]
          }), y.jsxs("div", {
            onClick: r,
            style: {
              display: "flex",
              alignItems: "center",
              padding: "16px 20px",
              borderBottom: "1px solid var(--nj-sheet-border, #f0f0f0)",
              cursor: "pointer"
            },
            children: [y.jsx("div", {
              style: {
                width: "24px",
                marginRight: "12px",
                color: "var(--nj-sheet-text, #181818)"
              },
              children: y.jsx(j.Profile, {})
            }), y.jsx("span", {
              style: {
                fontSize: "16px",
                color: "var(--nj-sheet-text, #181818)"
              },
              children: X("msgWhoCanSee")
            }), y.jsxs("div", {
              style: {
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
                gap: "6px"
              },
              children: [y.jsx("span", {
                style: {
                  color: "var(--nj-sheet-text, #181818)",
                  fontSize: "16px"
                },
                children: Ge === "Partial" ? X("msgPartialCount").replace("{count}", Ye.length) : Ge === "Group" ? X("msgGroupCount").replace("{groups}", Ke.join(", ")) : X("msg" + Ge)
              }), y.jsx("div", {
                style: {
                  color: "var(--nj-sheet-text-muted, #b2b2b2)"
                },
                children: y.jsx(j.Forward, {})
              })]
            })]
          })]
        })]
      })]
    });
  }
  if (Z !== "list") {
    return null;
  } else {
    return y.jsxs(y.Fragment, {
      children: [ke && y.jsxs(y.Fragment, {
        children: [y.jsx("div", {
          onClick: () => Ie(false),
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 400,
            backdropFilter: "blur(3px)"
          }
        }), y.jsxs("div", {
          style: {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            background: "var(--nj-sheet-bg, #fff)",
            color: "var(--nj-sheet-text, inherit)",
            borderTopLeftRadius: "24px",
            borderTopRightRadius: "24px",
            padding: "24px 20px",
            zIndex: 401,
            animation: "slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            paddingBottom: "calc(24px + var(--nuo-safe-bottom))",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0 -5px 25px rgba(0,0,0,0.15)"
          },
          children: [y.jsx("div", {
            style: {
              width: "40px",
              height: "4px",
              background: "var(--nj-sheet-handle, #ccc)",
              borderRadius: "2px",
              margin: "0 auto 24px"
            }
          }), y.jsx("div", {
            style: {
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "1px solid var(--nj-sheet-border, #eee)",
              marginBottom: "16px",
              background: "#f5f5f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: (W == null ? undefined : W.avatar) ? typeof W.avatar == "string" && W.avatar.startsWith("txt:") ? y.jsx("div", {
              style: {
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#555",
                fontWeight: "bold",
                fontSize: "18px"
              },
              children: W.avatar.substring(4)
            }) : y.jsx("img", {
              decoding: "async",
              loading: "lazy",
              src: W.avatar,
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover"
              },
              alt: "Avatar"
            }) : y.jsx("div", {
              style: {
                transform: "scale(1.5)",
                opacity: 0.5
              },
              children: y.jsx(j.Profile, {
                active: true
              })
            })
          }), y.jsx("div", {
            style: {
              fontSize: "20px",
              fontWeight: "700",
              color: "var(--nj-sheet-text, #000)",
              marginBottom: "8px",
              textAlign: "center",
              wordBreak: "break-word",
              maxWidth: "85%"
            },
            children: _ && typeof _ == "object" ? _.content : _ || ""
          }), y.jsxs("div", {
            style: {
              fontSize: "13px",
              color: "var(--nj-sheet-text-muted, #8e8e8e)",
              marginBottom: "32px"
            },
            children: [q("msgSharedWithFriends", "已與朋友分享"), " \\u00B7 ", _ && typeof _ == "object" && _.timestamp ? z(_.timestamp, X) : X("msgTimeJustNow")]
          }), y.jsx("button", {
            onClick: () => {
              Ie(false);
              ee("create_note");
            },
            style: {
              width: "100%",
              padding: "16px",
              background: "var(--ios-blue, #007AFF)",
              color: "#fff",
              border: "none",
              borderRadius: "16px",
              fontSize: "17px",
              fontWeight: "600",
              marginBottom: "12px",
              cursor: "pointer",
              transition: "opacity 0.2s"
            },
            onMouseOver: e => e.currentTarget.style.opacity = 0.8,
            onMouseOut: e => e.currentTarget.style.opacity = 1,
            children: q("msgWriteNewNote", "寫新便簽")
          }), y.jsx("button", {
            onClick: () => {
              H({
                content: "",
                shareScope: "All Friends",
                timestamp: null
              });
              Ie(false);
            },
            style: {
              width: "100%",
              padding: "16px",
              background: "transparent",
              color: "var(--ios-blue, #007AFF)",
              border: "none",
              fontSize: "17px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "opacity 0.2s"
            },
            onMouseOver: e => e.currentTarget.style.opacity = 0.7,
            onMouseOut: e => e.currentTarget.style.opacity = 1,
            children: q("msgDeleteNote", "刪除便簽")
          })]
        })]
      }), xe && y.jsxs(y.Fragment, {
        children: [y.jsx("div", {
          onClick: () => ue(null),
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 300
          }
        }), y.jsxs("div", {
          style: {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            background: "var(--nj-sheet-bg, #fff)",
            color: "var(--nj-sheet-text, inherit)",
            borderTopLeftRadius: "24px",
            borderTopRightRadius: "24px",
            padding: "24px 20px",
            zIndex: 301,
            animation: "slideUp 0.3s ease-out",
            paddingBottom: "calc(24px + var(--nuo-safe-bottom))",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            boxShadow: "0 -5px 20px rgba(0,0,0,0.1)"
          },
          children: [y.jsxs("div", {
            style: {
              display: "flex",
              gap: "12px"
            },
            children: [y.jsx("div", {
              style: {
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "1px solid var(--nj-sheet-border, #eee)",
                flexShrink: 0
              },
              children: xe.image ? typeof xe.image == "string" && xe.image.startsWith("txt:") ? y.jsx("div", {
                style: {
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#555",
                  fontWeight: "bold",
                  fontSize: "14px"
                },
                children: xe.image.substring(4)
              }) : y.jsx("img", {
                decoding: "async",
                loading: "lazy",
                src: xe.image,
                style: S(xe)
              }) : y.jsx("div", {
                style: {
                  width: "100%",
                  height: "100%",
                  background: "#ccc"
                }
              })
            }), y.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                paddingTop: "2px"
              },
              children: [y.jsxs("div", {
                style: {
                  display: "flex",
                  gap: "6px",
                  alignItems: "baseline"
                },
                children: [y.jsx("span", {
                  style: {
                    fontWeight: "bold",
                    fontSize: "15px"
                  },
                  children: xe.name
                }), y.jsxs("span", {
                  style: {
                    fontSize: "13px",
                    color: "var(--nj-sheet-text-muted, #8e8e8e)"
                  },
                  children: ["• ", xe.noteTimestamp ? z(xe.noteTimestamp, X) : ""]
                })]
              }), y.jsx("div", {
                style: {
                  fontSize: "15px",
                  color: "var(--nj-sheet-text, #262626)",
                  lineHeight: "1.4"
                },
                children: xe.note
              }), xe.name === "Rooney / Roni / 口二 / 朗尼" && y.jsx("div", {
                style: {
                  fontSize: "14px",
                  color: "var(--nj-sheet-text, #262626)"
                },
                children: "by \\u5B50\\u4FCA"
              }), y.jsx("div", {
                style: {
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "var(--nj-sheet-text, #262626)",
                  marginTop: "6px",
                  cursor: "pointer"
                },
                children: "查看翻譯"
              })]
            })]
          }), y.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "4px"
            },
            children: [y.jsxs("div", {
              style: {
                flex: 1,
                borderRadius: "24px",
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                border: "1px solid var(--nj-sheet-border, #efefef)",
                background: "transparent"
              },
              children: [y.jsx("input", {
                id: "note-reply-input",
                name: "note-reply",
                autoComplete: "off",
                className: "no-outline-input",
                value: Ae,
                onChange: e => Ne(e.target.value),
                onKeyDown: e => {
                  if (e.key === "Enter" && Ae.trim()) {
                    un(Ae);
                  }
                },
                placeholder: `回覆 ${xe.name}`,
                style: {
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  width: "100%",
                  fontSize: "14px",
                  color: "var(--nj-sheet-text, #000)"
                }
              }), Ae.trim() && y.jsx("div", {
                onClick: () => un(Ae),
                style: {
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#007aff",
                  marginLeft: "8px",
                  transition: "transform 0.2s"
                },
                onMouseDown: e => e.currentTarget.style.transform = "scale(0.9)",
                onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
                onMouseLeave: e => e.currentTarget.style.transform = "scale(1)",
                children: y.jsx(j.Send, {
                  size: 20
                })
              })]
            }), y.jsxs("div", {
              style: {
                display: "flex",
                gap: "12px",
                alignItems: "center"
              },
              children: [y.jsx("div", {
                style: {
                  fontSize: "22px",
                  cursor: "pointer"
                },
                onClick: e => {
                  he("🥰", e);
                  un("🥰");
                },
                children: "🥰"
              }), y.jsx("div", {
                style: {
                  fontSize: "22px",
                  cursor: "pointer"
                },
                onClick: e => {
                  he("🫠", e);
                  un("🫠");
                },
                children: "🫠"
              }), y.jsx("div", {
                style: {
                  fontSize: "22px",
                  cursor: "pointer"
                },
                onClick: e => {
                  he("😢", e);
                  un("😢");
                },
                children: "😢"
              }), y.jsx("div", {
                onClick: e => {
                  var t;
                  e.stopPropagation();
                  t = xe.id;
                  J(e => ({
                    ...e,
                    [t]: !e[t]
                  }));
                },
                style: {
                  color: G[xe.id] ? "#ff3b30" : "#262626",
                  cursor: "pointer",
                  marginLeft: "5px",
                  transition: "color 0.2s, transform 0.2s",
                  transform: G[xe.id] ? "scale(1.2)" : "scale(1)"
                },
                children: y.jsx(j.Heart, {
                  filled: !!G[xe.id]
                })
              })]
            })]
          })]
        })]
      }), y.jsxs("div", {
        ref: Ct,
        id: "messaging-moments-tab",
        "data-scrolled": kt ? "true" : "false",
        className: "moments-view nj-moments-tab",
        style: {
          background: ie ? "transparent" : "var(--nj-msg-bg, #ffffff)",
          minHeight: "100%",
          position: "relative"
        },
        children: [y.jsx("div", {
          className: "nj-moments-header",
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 20,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "10px 20px",
            paddingTop: "calc(10px + var(--nuo-safe-top, env(safe-area-inset-top, 0px)))",
            color: "white",
            textShadow: "0 1px 4px rgba(0,0,0,0.4)",
            gap: "24px"
          },
          children: y.jsxs("div", {
            className: "nj-moments-header-btns",
            style: {
              display: "flex",
              alignItems: "center",
              gap: "24px"
            },
            children: [y.jsx("div", {
              className: "nj-moments-header-btn nj-moments-header-btn-clear",
              style: {
                cursor: "pointer",
                opacity: 0.9,
                transition: "opacity 0.2s"
              },
              onClick: async () => {
                if (await n(X("msgClearMomentsConfirm"))) {
                  if (typeof N == "function") {
                    await N();
                  } else {
                    P([]);
                  }
                  const e = D;
                  M(t => t.map(t => String(t.uid) === String(e) || String(t.id) === String(e) ? {
                    ...t,
                    posts: []
                  } : t));
                }
              },
              title: "Clear All Posts",
              children: y.jsxs("svg", {
                width: "22",
                height: "22",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [y.jsx("path", {
                  d: "M3 6h18"
                }), y.jsx("path", {
                  d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                }), y.jsx("path", {
                  d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
                })]
              })
            }), y.jsx("div", {
              className: "nj-moments-header-btn nj-moments-header-btn-gen",
              style: {
                cursor: "pointer",
                opacity: 0.9,
                transition: "opacity 0.2s"
              },
              onClick: () => Rt(true),
              title: "\\u751F\\u6210\\u89D2\\u8272\\u52D5\\u614B",
              children: y.jsxs("svg", {
                width: "22",
                height: "22",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [y.jsx("path", {
                  d: "M12 2L2 7l10 5 10-5-10-5z"
                }), y.jsx("path", {
                  d: "M2 17l10 5 10-5"
                }), y.jsx("path", {
                  d: "M2 12l10 5 10-5"
                })]
              })
            }), y.jsx("div", {
              className: "nj-moments-header-btn nj-moments-header-btn-post",
              style: {
                cursor: "pointer",
                opacity: 0.9,
                transition: "opacity 0.2s"
              },
              onClick: () => {
                De([]);
                Le("");
                Ue("");
                He([]);
                Je("Public");
                Ve([]);
                Xe([]);
                ee("post_moment");
              },
              children: y.jsxs("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [y.jsx("path", {
                  d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
                }), y.jsx("circle", {
                  cx: "12",
                  cy: "13",
                  r: "4"
                })]
              })
            })]
          })
        }), y.jsx("div", {
          className: "nj-moments-header-sticky",
          "data-scrolled": kt ? "true" : "false",
          style: {
            display: "none",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 20,
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 20px",
            paddingTop: "calc(10px + var(--nuo-safe-top))",
            color: "var(--nj-msg-text, var(--text-primary, #1a1a1a))",
            background: "var(--nj-msg-moments-sticky-bg, var(--ios-bg-primary, #fff))",
            borderBottom: "1px solid var(--ios-separator, rgba(0,0,0,0.08))",
            opacity: kt ? 1 : 0,
            pointerEvents: kt ? "auto" : "none",
            transition: "opacity 0.2s"
          },
          children: y.jsx("div", {
            className: "nj-moments-header-title",
            style: {
              fontSize: 17,
              fontWeight: 600,
              letterSpacing: 0.5
            },
            children: q("momentsTitle", "朋友圈")
          })
        }), y.jsx("div", {
          className: "nj-moments-decor-top",
          "aria-hidden": "true"
        }), y.jsxs("div", {
          className: "nj-moments-cover-wrap",
          style: {
            position: "relative",
            marginBottom: "70px"
          },
          children: [y.jsx("div", {
            className: "nj-moments-cover",
            onClick: () => oe(true),
            style: {
              position: "relative",
              height: "340px",
              width: "100%",
              backgroundImage: `url(${O})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              opacity: 0.95
            },
            children: y.jsx("div", {
              className: "nj-moments-cover-gradient",
              style: {
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "100px",
                background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)"
              }
            })
          }), y.jsxs("div", {
            className: "nj-moments-cover-userinfo",
            style: {
              position: "absolute",
              bottom: "-35px",
              right: "24px",
              display: "flex",
              alignItems: "flex-end",
              gap: "14px"
            },
            children: [y.jsx("div", {
              className: "nj-moments-cover-username",
              style: {
                color: "#fff",
                fontWeight: "800",
                fontSize: "22px",
                marginBottom: "46px",
                textAlign: "right",
                textShadow: "0 2px 6px rgba(0,0,0,0.4)",
                letterSpacing: "0.5px"
              },
              children: (W == null ? undefined : W.name) || "User"
            }), y.jsx("div", {
              className: "nj-moments-cover-avatar",
              style: {
                width: "88px",
                height: "88px",
                borderRadius: "28px",
                overflow: "hidden",
                border: "4px solid #fff",
                background: "#fff",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)"
              },
              children: (W == null ? undefined : W.avatar) ? y.jsx("img", {
                decoding: "async",
                loading: "lazy",
                src: W.avatar,
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }
              }) : y.jsx("div", {
                style: {
                  width: "100%",
                  height: "100%",
                  background: "#fafafa"
                }
              })
            })]
          })]
        }), ge.total > 0 && y.jsxs("div", {
          className: "nj-moments-notif-entry",
          onClick: () => lt(true),
          style: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 16px",
            cursor: "pointer",
            borderBottom: "1px solid var(--nj-sheet-border, #f0f0f0)",
            background: "var(--nj-msg-moments-notif-bg, #fff)"
          },
          children: [y.jsxs("div", {
            style: {
              position: "relative",
              width: "48px",
              height: "48px",
              flexShrink: 0
            },
            children: [(() => {
              const e = new Set();
              const t = [];
              for (const n of ge.list) {
                if (n.avatar && !e.has(n.charId)) {
                  e.add(n.charId);
                  const i = n.charId ? K.find(e => String(e.id) === String(n.charId)) : null;
                  t.push({
                    src: (i == null ? undefined : i.image) || n.avatar,
                    char: i
                  });
                  if (t.length >= 2) {
                    break;
                  }
                }
              }
              if (t.length >= 2) {
                return y.jsxs(y.Fragment, {
                  children: [y.jsx("div", {
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "32px",
                      height: "32px",
                      borderRadius: "6px",
                      overflow: "hidden",
                      border: "2px solid #fff",
                      zIndex: 2,
                      background: "#f5f5f5"
                    },
                    children: y.jsx("img", {
                      decoding: "async",
                      loading: "lazy",
                      src: t[0].src,
                      style: t[0].char ? S(t[0].char) : {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }
                    })
                  }), y.jsx("div", {
                    style: {
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      width: "32px",
                      height: "32px",
                      borderRadius: "6px",
                      overflow: "hidden",
                      border: "2px solid #fff",
                      zIndex: 1,
                      background: "#f5f5f5"
                    },
                    children: y.jsx("img", {
                      decoding: "async",
                      loading: "lazy",
                      src: t[1].src,
                      style: t[1].char ? S(t[1].char) : {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }
                    })
                  })]
                });
              } else if (t.length === 1) {
                return y.jsx("div", {
                  style: {
                    width: "48px",
                    height: "48px",
                    borderRadius: "6px",
                    overflow: "hidden",
                    background: "#f5f5f5"
                  },
                  children: y.jsx("img", {
                    decoding: "async",
                    loading: "lazy",
                    src: t[0].src,
                    style: t[0].char ? S(t[0].char) : {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }
                  })
                });
              } else {
                return y.jsx("div", {
                  style: {
                    width: "48px",
                    height: "48px",
                    borderRadius: "6px",
                    background: "#eee"
                  }
                });
              }
            })(), y.jsx("div", {
              style: {
                position: "absolute",
                top: -2,
                right: -2,
                width: "10px",
                height: "10px",
                background: "#ff3b30",
                borderRadius: "50%",
                border: "2px solid #fff"
              }
            })]
          }), y.jsxs("div", {
            style: {
              flex: 1
            },
            children: [y.jsx("div", {
              style: {
                fontSize: "15px",
                color: "var(--nj-msg-text, #1a1a1a)",
                fontWeight: "500"
              },
              children: (() => {
                const e = [...new Set(ge.list.map(e => e.name))];
                const t = ge.total;
                if (e.length === 1) {
                  return X("momentsNotifEntrySingle").replace("{name}", e[0]).replace("{count}", t);
                } else {
                  return X("momentsNotifEntryMulti").replace("{name1}", e[0]).replace("{name2}", e[1]).replace("{count}", t);
                }
              })()
            }), y.jsx("div", {
              style: {
                fontSize: "13px",
                color: "var(--nj-msg-text-muted, #999)",
                marginTop: "2px"
              },
              children: X("momentsNotifTapToView")
            })]
          }), y.jsx("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#ccc",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: y.jsx("polyline", {
              points: "9 18 15 12 9 6"
            })
          })]
        }), y.jsx("div", {
          className: "nj-moments-decor-mid",
          "aria-hidden": "true"
        }), y.jsxs("div", {
          className: "nj-moments-feed",
          style: {
            padding: "0 0 80px"
          },
          children: [b.slice(0, jt).map((e, s) => {
            var a;
            var l;
            return y.jsxs("div", {
              className: "nj-moments-post " + (e.isCharacterPost ? "nj-moments-post-char" : "nj-moments-post-user"),
              style: {
                display: "flex",
                gap: "14px",
                padding: "24px 20px",
                borderBottom: "1px solid rgba(0,0,0,0.03)"
              },
              onTouchStart: e.isCharacterPost ? t => on(t, e) : undefined,
              onTouchMove: e.isCharacterPost ? rn : undefined,
              onTouchEnd: e.isCharacterPost ? sn : undefined,
              onTouchCancel: e.isCharacterPost ? sn : undefined,
              onMouseDown: e.isCharacterPost ? t => on(t, e) : undefined,
              onMouseMove: e.isCharacterPost ? rn : undefined,
              onMouseUp: e.isCharacterPost ? sn : undefined,
              onMouseLeave: e.isCharacterPost ? sn : undefined,
              onContextMenu: e.isCharacterPost ? t => {
                t.preventDefault();
                Xt({
                  post: e
                });
              } : undefined,
              children: [y.jsx("div", {
                className: "nj-moments-post-avatar",
                style: {
                  width: "48px",
                  height: "48px",
                  flexShrink: 0,
                  borderRadius: "6px",
                  overflow: "hidden",
                  background: "#f5f5f5",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                  cursor: e.isCharacterPost ? "pointer" : "default"
                },
                onClick: () => {
                  if (!e.isCharacterPost) {
                    return;
                  }
                  const t = String(e.charUserId || e.userId);
                  const n = K.find(e => String(e.id) === t);
                  if (n) {
                    se("grid");
                    re(n);
                  }
                },
                children: (() => {
                  const t = e.charUserId ? K.find(t => String(t.id) === String(e.charUserId)) : null;
                  const n = !e.isCharacterPost && !e.charUserId && W && String(e.userId) === String(W.uid || W.id);
                  const i = (t == null ? undefined : t.image) || (n ? W.avatar || e.avatar : null) || e.avatar || e.image;
                  return y.jsx("img", {
                    decoding: "async",
                    loading: "lazy",
                    src: i,
                    style: t ? S(t) : {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }
                  });
                })()
              }), y.jsxs("div", {
                className: "nj-moments-post-body",
                style: {
                  flex: 1,
                  minWidth: 0
                },
                children: [y.jsx("div", {
                  className: "nj-moments-post-name",
                  style: {
                    color: "var(--nj-msg-text, #2c3e50)",
                    fontWeight: "700",
                    fontSize: "16px",
                    marginBottom: "6px",
                    letterSpacing: "0.3px",
                    cursor: e.isCharacterPost ? "pointer" : "default"
                  },
                  onClick: () => {
                    if (!e.isCharacterPost) {
                      return;
                    }
                    const t = String(e.charUserId || e.userId);
                    const n = K.find(e => String(e.id) === t);
                    if (n) {
                      se("grid");
                      re(n);
                    }
                  },
                  children: e.name
                }), y.jsx("div", {
                  className: "nj-moments-post-text",
                  style: {
                    fontSize: "15px",
                    color: "var(--nj-msg-text, #333333)",
                    lineHeight: "1.6",
                    marginBottom: "12px",
                    whiteSpace: "pre-wrap",
                    fontWeight: "400"
                  },
                  children: e.note
                }), (!e.images || e.images.length === 0) && (e.imagePending || e.imageGenFailed) && y.jsxs("div", {
                  className: "nj-moments-post-imgs",
                  style: {
                    width: "70%",
                    maxWidth: "280px",
                    aspectRatio: "1/1",
                    marginBottom: "10px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    background: e.imageGenFailed ? "rgba(0,0,0,0.03)" : "linear-gradient(110deg, #f0f0f0 30%, #e6e6e6 50%, #f0f0f0 70%)",
                    backgroundSize: "200% 100%",
                    animation: e.imageGenFailed ? "none" : "nuoMomImgShimmer 1.4s ease-in-out infinite",
                    border: e.imageGenFailed ? "1px dashed rgba(0,0,0,0.12)" : "none"
                  },
                  children: [e.imageGenFailed ? y.jsxs(y.Fragment, {
                    children: [y.jsx(j.Image, {}), y.jsx("span", {
                      style: {
                        fontSize: "12px",
                        color: "#888"
                      },
                      children: X("msgImageGenFail")
                    }), y.jsx("button", {
                      type: "button",
                      onClick: t => {
                        t.stopPropagation();
                        dn(e, 0);
                      },
                      style: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        padding: "3px 12px",
                        fontSize: "12px",
                        border: "none",
                        borderRadius: "999px",
                        cursor: "pointer",
                        background: "rgba(0,0,0,0.08)",
                        color: "#555"
                      },
                      children: X("msgImageRetry")
                    })]
                  }) : y.jsxs(y.Fragment, {
                    children: [y.jsx("span", {
                      style: {
                        width: "22px",
                        height: "22px",
                        border: "2.5px solid rgba(0,0,0,0.12)",
                        borderTopColor: "rgba(0,0,0,0.4)",
                        borderRadius: "50%",
                        animation: "nuoMomImgSpin 0.8s linear infinite"
                      }
                    }), y.jsx("span", {
                      style: {
                        fontSize: "12px",
                        color: "#888"
                      },
                      children: X("msgImageGenerating")
                    })]
                  }), y.jsx("style", {
                    children: "@keyframes nuoMomImgShimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}@keyframes nuoMomImgSpin{to{transform:rotate(360deg)}}"
                  })]
                }), e.images && e.images.length > 0 && y.jsx("div", {
                  className: `nj-moments-post-imgs nj-moments-post-imgs-${e.images.length}`,
                  style: {
                    display: "grid",
                    gridTemplateColumns: e.images.length === 1 ? "1fr" : e.images.length === 4 ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
                    gap: "4px",
                    width: e.images.length === 1 ? "70%" : e.images.length === 4 ? "66%" : "100%",
                    maxWidth: "280px",
                    marginBottom: "10px"
                  },
                  children: e.images.map((t, n) => y.jsx("div", {
                    className: "nj-moments-post-img-cell",
                    style: {
                      aspectRatio: "1/1",
                      borderRadius: "8px",
                      overflow: "hidden",
                      background: typeof t == "string" && t.startsWith("txt:") ? "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)" : "#f5f5f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.02)"
                    },
                    children: typeof t == "string" && t.startsWith("txt:") ? y.jsxs("div", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                        cursor: "pointer",
                        width: "100%",
                        height: "100%",
                        justifyContent: "center"
                      },
                      onClick: t => {
                        t.stopPropagation();
                        Ot({
                          images: e.images,
                          initialIndex: n,
                          post: e
                        });
                      },
                      children: [y.jsx(j.Image, {}), y.jsx("span", {
                        style: {
                          fontSize: "11px",
                          color: "#666",
                          fontWeight: "500",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden"
                        },
                        children: t.substring(4)
                      })]
                    }) : y.jsx("img", {
                      decoding: "async",
                      loading: "lazy",
                      src: t,
                      style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        cursor: "pointer"
                      },
                      alt: "",
                      onClick: t => {
                        t.stopPropagation();
                        Ot({
                          images: e.images,
                          initialIndex: n,
                          post: e
                        });
                      }
                    })
                  }, n))
                }), !e.images && e.image && y.jsx("div", {
                  className: "nj-moments-post-img-single",
                  style: {
                    maxWidth: "70%",
                    marginBottom: "10px"
                  },
                  children: y.jsx("img", {
                    decoding: "async",
                    loading: "lazy",
                    src: e.image,
                    style: {
                      width: "100%",
                      borderRadius: "4px",
                      cursor: "pointer"
                    },
                    alt: "",
                    onClick: t => {
                      t.stopPropagation();
                      Ot({
                        images: [e.image],
                        initialIndex: 0
                      });
                    }
                  })
                }), e.mentions && e.mentions.length > 0 && y.jsxs("div", {
                  className: "nj-moments-post-mentions",
                  style: {
                    fontSize: "13px",
                    color: "#576b95",
                    marginBottom: "2px",
                    fontWeight: "500"
                  },
                  children: ["提到了：", e.mentions.map(e => {
                    var t;
                    return ((t = K.find(t => t.id === e)) == null ? undefined : t.name) || "Unknown";
                  }).join(", ")]
                }), y.jsxs("div", {
                  className: "nj-moments-post-meta",
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "6px"
                  },
                  children: [y.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center"
                    },
                    children: [y.jsx("span", {
                      className: "nj-moments-post-time",
                      style: {
                        fontSize: "12px",
                        color: "var(--nj-msg-text-time, #b2b2b2)"
                      },
                      children: z(e.timestamp, X)
                    }), e.visibility === "Partial" && (e.allowedUsers || []).length > 0 && (() => {
                      const t = [String((W == null ? undefined : W.id) || ""), String((W == null ? undefined : W.uid) || "")];
                      const n = (e.allowedUsers || []).every(e => t.includes(String(e)));
                      return y.jsx("span", {
                        style: {
                          fontSize: "12px",
                          color: "#b97a56",
                          marginLeft: "10px"
                        },
                        children: n ? q("momentVisibleOnlyYou", "僅你可見") : q("momentVisiblePartial", "部分可見")
                      });
                    })(), e.visibility === "Group" && y.jsx("span", {
                      style: {
                        fontSize: "12px",
                        color: "#b97a56",
                        marginLeft: "10px"
                      },
                      children: q("momentVisibleGroup", "分組可見")
                    }), e.location && y.jsx("span", {
                      className: "nj-moments-post-location",
                      style: {
                        fontSize: "12px",
                        color: "#576b95",
                        marginLeft: "10px"
                      },
                      children: e.location
                    }), vt === e.id && y.jsxs("span", {
                      style: {
                        fontSize: "12px",
                        color: "#576b95",
                        marginLeft: "10px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px"
                      },
                      children: [y.jsx("span", {
                        className: "loading-dots",
                        style: {
                          animation: "pulse 1.5s infinite"
                        },
                        children: "⏳"
                      }), X("btnGenerateReplies", "生成回復"), "..."]
                    })]
                  }), y.jsxs("div", {
                    className: "nj-moments-post-actions-wrap",
                    style: {
                      position: "relative"
                    },
                    children: [y.jsx("div", {
                      className: "nj-moments-post-actions-trigger",
                      onClick: t => ((e, t) => {
                        e.stopPropagation();
                        ct(dt === t ? null : t);
                      })(t, e.id),
                      style: {
                        width: "36px",
                        height: "22px",
                        background: "var(--nj-msg-post-actions-bg, var(--ios-bg-secondary, #f5f6f8))",
                        borderRadius: "11px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--nj-msg-post-actions-color, var(--nj-msg-text-muted, #8b95a1))",
                        fontSize: "14px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        transition: "all 0.2s"
                      },
                      children: "••"
                    }), dt === e.id && y.jsxs("div", {
                      className: "nj-moments-post-actions-menu",
                      style: {
                        position: "absolute",
                        right: "44px",
                        top: "-12px",
                        background: "#2c2c2e",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        padding: "0 8px",
                        color: "#fff",
                        animation: "fadeIn 0.2s",
                        zIndex: 10,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                      },
                      onClick: e => e.stopPropagation(),
                      children: [y.jsx("div", {
                        onClick: () => (e => {
                          const t = (W == null ? undefined : W.name) || "Me";
                          const n = (W == null ? undefined : W.id) || "me";
                          P(i => i.map(i => {
                            if (i.id === e) {
                              const o = i.likes || [];
                              let r;
                              if (o.some(e => e.userId === n)) {
                                r = o.filter(e => e.userId !== n);
                              } else {
                                r = [...o, {
                                  userId: n,
                                  name: t,
                                  timestamp: Date.now()
                                }];
                                ut(e);
                                setTimeout(() => ut(null), 1000);
                              }
                              return {
                                ...i,
                                likes: r
                              };
                            }
                            return i;
                          }));
                          ct(null);
                        })(e.id),
                        title: ((a = e.likes) == null ? undefined : a.some(e => e.userId === ((W == null ? undefined : W.id) || "me"))) ? X("btnCancelLike", "取消") : X("btnLike", "贊"),
                        style: {
                          padding: "10px 12px",
                          cursor: "pointer",
                          borderRight: "1px solid #444"
                        },
                        children: y.jsx(j.Heart, {
                          filled: (l = e.likes) == null ? undefined : l.some(e => e.userId === ((W == null ? undefined : W.id) || "me")),
                          size: 18
                        })
                      }), y.jsx("div", {
                        onClick: () => {
                          ht(e.id);
                          ct(null);
                        },
                        title: X("btnComment", "評論"),
                        style: {
                          padding: "10px 12px",
                          cursor: "pointer",
                          borderRight: "1px solid #444"
                        },
                        children: y.jsx(j.MessageSquare, {
                          color: "#fff",
                          size: 16
                        })
                      }), y.jsx("div", {
                        onClick: () => {
                          ct(null);
                          (e => {
                            Ht(e);
                          })(e);
                        },
                        title: X("btnShare", "分享"),
                        style: {
                          padding: "10px 12px",
                          cursor: "pointer",
                          borderRight: "1px solid #444"
                        },
                        children: y.jsx(j.Share2, {
                          color: "#fff",
                          size: 16
                        })
                      }), y.jsx("div", {
                        onClick: () => (async e => {
                          var n;
                          var s;
                          var a;
                          var l;
                          var d;
                          var c;
                          var p;
                          const h = b.find(t => t.id === e);
                          if (!h || vt) {
                            return;
                          }
                          bt(e);
                          ct(null);
                          k().catch(() => {});
                          const x = (h.name || "").slice(0, 12);
                          const u = I("replies", `生成${x ? `「${x}」` : ""}朋友圈回覆`);
                          let f = false;
                          try {
                            const x = await o.get("apiSettings");
                            if (!(x == null ? undefined : x.mainApiUrl) || !(x == null ? undefined : x.mainApiKey)) {
                              t("請先設定 API");
                              return;
                            }
                            const k = h.name || (W == null ? undefined : W.name) || "User";
                            const I = e => {
                              var t;
                              const n = [e.group || "Other"];
                              if (e.type === "npc" && ((t = e.boundTo) == null ? undefined : t.length) > 0) {
                                e.boundTo.forEach(e => {
                                  const t = K.find(t => String(t.id) === String(e));
                                  if ((t == null ? undefined : t.group) && !n.includes(t.group)) {
                                    n.push(t.group);
                                  }
                                });
                              }
                              return n;
                            };
                            const R = [String((W == null ? undefined : W.id) || ""), String((W == null ? undefined : W.uid) || ""), "me"];
                            const z = R.includes(String(h.userId));
                            const A = String(h.userId || h.charUserId || "");
                            const N = z ? null : K.find(e => String(e.id) === A);
                            let $ = K.filter(e => {
                              var t;
                              var n;
                              if (R.includes(String(e.id))) {
                                return false;
                              }
                              if (z) {
                                if (String(e.id) === String(h.userId)) {
                                  return false;
                                }
                                if (String(e.id) === String(h.charUserId)) {
                                  return false;
                                }
                              }
                              const i = I(e);
                              const o = String(e.id);
                              if (h.visibility === "Public") ;else if (h.visibility === "Partial") {
                                if (z || o !== A) {
                                  let n = (h.allowedUsers || []).some(e => String(e) === o);
                                  if (!n && e.type === "npc" && ((t = e.boundTo) == null ? undefined : t.length) > 0) {
                                    n = e.boundTo.some(e => (h.allowedUsers || []).some(t => String(t) === String(e)));
                                  }
                                  if (!n) {
                                    return false;
                                  }
                                }
                              } else if (h.visibility === "Group" && (z || o !== A) && !(h.allowedGroups || []).some(e => i.includes(e))) {
                                return false;
                              }
                              if (z) {
                                const t = new Set((B || []).map(e => String(e)));
                                const i = t.has(o);
                                const r = e.type === "npc" && ((n = e.boundTo) == null ? undefined : n.some(e => t.has(String(e))));
                                if (!i && !r) {
                                  return false;
                                }
                              } else if (N && String(e.id) !== A) {
                                const e = I(N);
                                if (!i.some(t => e.includes(t))) {
                                  return false;
                                }
                              }
                              return true;
                            });
                            if (z) {
                              const e = D || (W == null ? undefined : W.uid) || (W == null ? undefined : W.id);
                              if (e) {
                                const t = new Map();
                                const n = async n => {
                                  const i = String(n);
                                  if (t.has(i)) {
                                    return t.get(i);
                                  }
                                  const o = ((await ce.countByPair(e, i).catch(() => 0)) || 0) > 0;
                                  t.set(i, o);
                                  return o;
                                };
                                const i = await Promise.all($.map(async e => {
                                  var t;
                                  if (await n(e.id)) {
                                    return true;
                                  }
                                  if (e.type === "npc" && ((t = e.boundTo) == null ? undefined : t.length) > 0) {
                                    for (const i of e.boundTo) {
                                      if (await n(i)) {
                                        return true;
                                      }
                                    }
                                  }
                                  return false;
                                }));
                                $ = $.filter((e, t) => i[t]);
                              }
                            }
                            console.log("[生成回復] 可見角色:", $.map(e => e.name));
                            if ($.length === 0) {
                              console.warn("[生成回復] 沒有可見角色，無法生成回復");
                              t(X("noVisibleCharsForReply", "沒有可見角色可以回復此帖子"));
                              return;
                            }
                            let L = [];
                            const M = new Set((h.userAttachedImageRefs || []).map(String));
                            const O = (Array.isArray(h.imageRefs) ? h.imageRefs.filter(e => M.has(String(e))) : []).length > 0;
                            if (z && ((n = h.images) == null ? undefined : n.length) > 0) {
                              const t = [];
                              h.images.forEach((e, n) => {
                                var i;
                                if (!e.startsWith("txt:") && !((i = h.imageDescriptions) == null ? undefined : i[n])) {
                                  t.push({
                                    idx: n,
                                    url: e
                                  });
                                }
                              });
                              if (t.length > 0) {
                                console.log("[生成回復] 發現未描述的真實圖片，先識圖:", t.length, "張");
                                try {
                                  const n = [];
                                  t.forEach(e => {
                                    n.push({
                                      type: "image_url",
                                      image_url: {
                                        url: e.url,
                                        detail: "low"
                                      }
                                    });
                                  });
                                  n.push({
                                    type: "text",
                                    text: "Describe each image in order. Output JSON only: {\"descs\":[\"image 1 description\",\"image 2 description\"]}\nEach description under 15 words, concise and accurate. Output JSON only."
                                  });
                                  const o = await g({
                                    messages: [{
                                      role: "user",
                                      content: n
                                    }],
                                    settings: x,
                                    preferStreaming: false
                                  });
                                  if (o) {
                                    let n = C(o).trim();
                                    const r = n.match(/```(?:json)?\s*\n?([\s\S]*?)\n?\s*```/);
                                    if (r) {
                                      n = r[1].trim();
                                    }
                                    try {
                                      const o = n.match(/\{[\s\S]*"descs"[\s\S]*\}/);
                                      const r = JSON.parse(o ? o[0] : n);
                                      const s = r.descs || r.descriptions || [];
                                      if (s.length > 0) {
                                        const n = [...(h.imageDescriptions || [])];
                                        let o = 0;
                                        for (const e of t) {
                                          if (o < s.length) {
                                            const t = String(s[o] || "").trim().substring(0, 200);
                                            if (t) {
                                              n[e.idx] = t;
                                            }
                                            o++;
                                          }
                                        }
                                        const {
                                          UserPostService: r
                                        } = await i(async () => {
                                          const {
                                            UserPostService: e
                                          } = await import("./native-pet-CTNtZgMA.js").then(e => e.cy);
                                          return {
                                            UserPostService: e
                                          };
                                        }, __vite__mapDeps([0, 1, 2, 3, 4, 5]));
                                        if (h._id) {
                                          await r.update(h._id, {
                                            imageDescriptions: n
                                          });
                                        }
                                        P(t => t.map(t => t.id === e ? {
                                          ...t,
                                          imageDescriptions: n
                                        } : t));
                                        h.imageDescriptions = n;
                                        console.log("[生成回復] ✅ 圖片描述已緩存:", n);
                                      }
                                    } catch (y) {
                                      console.warn("[生成回復] 識圖回應解析失敗:", y, o);
                                    }
                                  }
                                } catch (v) {
                                  console.warn("[生成回復] 識圖 API 失敗（不影響回復生成）:", v);
                                }
                              }
                              h.images.forEach((e, t) => {
                                var n;
                                if (e.startsWith("txt:")) {
                                  L.push(`[text-image: ${e.substring(4)}]`);
                                } else if ((n = h.imageDescriptions) == null ? undefined : n[t]) {
                                  L.push(`[photo: ${h.imageDescriptions[t]}]`);
                                } else {
                                  L.push("[photo]");
                                }
                              });
                            } else if (!z && O && ((s = h.images) == null ? undefined : s.length) > 0) {
                              const t = (h.images || []).filter(e => typeof e == "string" && e.startsWith("txt:")).length;
                              const n = Array.isArray(h.imageRefs) ? h.imageRefs : [];
                              const o = [];
                              n.forEach((e, n) => {
                                var i;
                                var r;
                                if (!M.has(String(e))) {
                                  return;
                                }
                                const s = t + n;
                                const a = (i = h.images) == null ? undefined : i[s];
                                if (a && typeof a == "string" && !a.startsWith("txt:")) {
                                  if (!((r = h.imageDescriptions) == null ? undefined : r[s])) {
                                    o.push({
                                      idx: s,
                                      url: a
                                    });
                                  }
                                }
                              });
                              if (o.length > 0) {
                                try {
                                  const t = [];
                                  o.forEach(e => {
                                    t.push({
                                      type: "image_url",
                                      image_url: {
                                        url: e.url,
                                        detail: "low"
                                      }
                                    });
                                  });
                                  t.push({
                                    type: "text",
                                    text: "Describe each image in order. Output JSON only: {\"descs\":[\"image 1 description\",\"image 2 description\"]}\nEach description under 15 words, concise and accurate. Output JSON only."
                                  });
                                  const n = await g({
                                    messages: [{
                                      role: "user",
                                      content: t
                                    }],
                                    settings: x,
                                    preferStreaming: false
                                  });
                                  const r = n == null ? undefined : n.match(/\{[\s\S]*\}/);
                                  if (r) {
                                    const t = JSON.parse(r[0]);
                                    const n = t == null ? undefined : t.descs;
                                    if (Array.isArray(n)) {
                                      const t = [...(h.imageDescriptions || [])];
                                      let r = 0;
                                      for (const e of o) {
                                        const i = n[r++];
                                        if (i) {
                                          t[e.idx] = i;
                                        }
                                      }
                                      if (h._id) {
                                        const {
                                          UserPostService: e
                                        } = await i(async () => {
                                          const {
                                            UserPostService: e
                                          } = await import("./native-pet-CTNtZgMA.js").then(e => e.cy);
                                          return {
                                            UserPostService: e
                                          };
                                        }, __vite__mapDeps([0, 1, 2, 3, 4, 5]));
                                        await e.update(h._id, {
                                          imageDescriptions: t
                                        });
                                      }
                                      P(n => n.map(n => n.id === e ? {
                                        ...n,
                                        imageDescriptions: t
                                      } : n));
                                      h.imageDescriptions = t;
                                    }
                                  }
                                } catch (v) {
                                  console.warn("[charPost user-attached vision] failed:", v);
                                }
                              }
                              h.images.forEach((e, t) => {
                                var n;
                                if (e.startsWith("txt:")) {
                                  L.push(`[text-image: ${e.substring(4)}]`);
                                } else if ((n = h.imageDescriptions) == null ? undefined : n[t]) {
                                  L.push(`[photo: ${h.imageDescriptions[t]}]`);
                                } else {
                                  L.push("[photo]");
                                }
                              });
                            } else if (((a = h.images) == null ? undefined : a.length) > 0) {
                              h.images.forEach((e, t) => {
                                var n;
                                if (e.startsWith("txt:")) {
                                  L.push(`[text-image: ${e.substring(4)}]`);
                                } else if ((n = h.imageDescriptions) == null ? undefined : n[t]) {
                                  L.push(`[photo: ${h.imageDescriptions[t]}]`);
                                } else {
                                  L.push("[photo]");
                                }
                              });
                            }
                            const F = D || (W == null ? undefined : W.uid) || (W == null ? undefined : W.id);
                            const U = (W == null ? undefined : W.name) || "User";
                            const _ = Q === "zh_cn" ? "Simplified Chinese" : Q === "en" ? "English" : "Traditional Chinese";
                            const H = $.length <= 3 ? "full" : $.length <= 7 ? "mid" : "tight";
                            const G = H === "full" ? {
                              recentChatTake: 8
                            } : H === "mid" ? {
                              recentChatTake: 6
                            } : {
                              recentChatTake: 5
                            };
                            const J = {};
                            await Promise.all($.map(async e => {
                              const t = String(e.id);
                              try {
                                const [n, i, o] = await Promise.all([r.get(F, t).catch(() => null), m.get(F, t).catch(() => null), ce.getByPair(F, t).catch(() => [])]);
                                const s = (o || []).filter(e => !(e == null ? undefined : e.hiddenByUser)).slice(-G.recentChatTake).map(t => {
                                  const n = t.sender === "me" ? U : e.name;
                                  const i = (t.text || "").replace(/\n/g, " ").trim();
                                  if (i) {
                                    return `${n}: ${i}`;
                                  } else {
                                    return "";
                                  }
                                }).filter(Boolean);
                                J[t] = {
                                  chatSettings: n,
                                  memory: i,
                                  recentChatTail: s
                                };
                              } catch {
                                J[t] = {};
                              }
                            }));
                            const Y = {};
                            $.forEach(e => {
                              var t;
                              let n = e.group || "Other";
                              if (e.type === "npc" && ((t = e.boundTo) == null ? undefined : t.length) > 0) {
                                const t = K.find(t => String(t.id) === String(e.boundTo[0]));
                                if (t == null ? undefined : t.group) {
                                  n = t.group;
                                }
                              }
                              Y[n] ||= [];
                              Y[n].push(e);
                            });
                            const V = Object.keys(Y);
                            const q = e => {
                              var t;
                              const n = String(e.id);
                              const i = (h.likes || []).some(e => String(e.userId) === n);
                              const o = (h.comments || []).some(e => String(e.userId) === n && !e.replyTo);
                              const r = String(h.userId || h.charUserId);
                              const s = (e.relationships || []).find(e => String(e.targetId) === r);
                              const a = s ? `${s.label || s.type}` : "";
                              let l = "";
                              l = i && o ? "already liked+commented, can only reply" : i ? "already liked, can comment or reply" : o ? "already commented, can like or reply" : "no interaction yet";
                              const d = (e.description || "").replace(/\n/g, " ").trim();
                              const c = J[n] || {};
                              const p = c.chatSettings;
                              const g = (p == null ? undefined : p.relationship) || "";
                              const m = (p == null ? undefined : p.charToUserRelationship) || "";
                              const x = e.type === "npc" ? " [NPC]" : "";
                              let u = `--- ${e.name}${x} ---\n`;
                              if (d) {
                                u += `[CHARACTER]\n${d}\n`;
                              }
                              const f = [];
                              if (a) {
                                f.push(`with poster: ${a}`);
                              }
                              if (z) {
                                if (m) {
                                  f.push(`${e.name}→${U}: ${m}`);
                                }
                                if (g) {
                                  f.push(`${U}→${e.name}: ${g}`);
                                }
                              } else if (g || m) {
                                f.push(`vs ${U}: ${m || g}`);
                              }
                              if (f.length > 0) {
                                u += `[RELATIONSHIP] ${f.join(" | ")}\n`;
                              }
                              const y = c.memory;
                              if (y == null ? undefined : y.episodeSummary) {
                                const e = String(y.episodeSummary).replace(/\n/g, " ").trim();
                                if (e) {
                                  u += `[LATEST EPISODE]\n${e}\n`;
                                }
                              }
                              if (((t = c.recentChatTail) == null ? undefined : t.length) > 0) {
                                u += `[RECENT CHAT TAIL]\n${c.recentChatTail.join("\n")}\n`;
                              }
                              u += `[INTERACTION STATUS] ${l}\n`;
                              return u;
                            };
                            let Z = "Simulate a realistic social media comment section.\n\n";
                            Z += `POST by ${k}: "${h.note || h.content || ""}"\n`;
                            if (L.length > 0) {
                              Z += `Images: ${L.join(" ")}\n`;
                            }
                            if (((l = h.likes) == null ? undefined : l.length) > 0) {
                              Z += `Likes: ${h.likes.map(e => e.name).join(", ")}\n`;
                            }
                            if (((d = h.comments) == null ? undefined : d.length) > 0) {
                              Z += "Comments:\n";
                              h.comments.forEach((e, t) => {
                                if (e.replyTo) {
                                  Z += `  c${t + 1}. ${e.name}→${e.replyTo.name}: ${e.content}\n`;
                                } else {
                                  Z += `  c${t + 1}. ${e.name}: ${e.content}\n`;
                                }
                              });
                            }
                            Z += "\n";
                            const ee = (h.comments || []).filter(e => R.includes(String(e.userId))).length > 0;
                            const te = N && ee && (h.comments || []).some(e => String(e.userId) === A && e.replyTo && (e.replyTo.name === U || R.includes(String(e.replyTo.userId || ""))));
                            if (!ee) {
                              Z += `*** CRITICAL: ${U} has NOT left any comment on this post. There is NOTHING from ${U} to reply to. ***\n`;
                              Z += `- DO NOT pretend ${U} said something.\n`;
                              Z += `- DO NOT use "${U}" as "reply.targetName" — replies must only target characters who already commented above.\n`;
                              Z += "- Characters may LIKE the post or leave a top-level COMMENT only.\n\n";
                            }
                            if (!z && N) {
                              Z += `This is ${N.name}'s post. ${N.name} is the poster.\n\n`;
                              if (ee && !te) {
                                const e = (N.description || "").replace(/\n/g, " ").trim();
                                const t = J[A] || {};
                                const n = t.chatSettings;
                                const i = (n == null ? undefined : n.charToUserRelationship) || "";
                                const o = ((c = t.memory) == null ? undefined : c.episodeSummary) || "";
                                Z += `*** MANDATORY: ${N.name} (the poster) MUST reply to ${U}'s comment(s) in-voice. ***\n`;
                                if (e) {
                                  Z += `[POSTER CHARACTER]\n${e}\n`;
                                }
                                if (i) {
                                  Z += `[POSTER→${U}] ${i}\n`;
                                }
                                if (o) {
                                  Z += `[POSTER LATEST EPISODE]\n${String(o).replace(/\n/g, " ").trim()}\n`;
                                }
                                if (((p = t.recentChatTail) == null ? undefined : p.length) > 0) {
                                  Z += `[POSTER RECENT CHAT TAIL]\n${t.recentChatTail.join("\n")}\n`;
                                }
                                Z += "\n";
                              }
                              Z += `Characters visible (same circle as ${N.name}):\n\n`;
                              V.forEach(e => {
                                const t = Y[e];
                                if (V.length > 1) {
                                  Z += `### [${e}]\n`;
                                }
                                t.forEach(e => {
                                  if (String(e.id) !== A) {
                                    Z += `${q(e)}\n`;
                                  }
                                });
                              });
                              Z += "# SOCIAL DYNAMICS (character post)\n";
                              Z += `- ${N.name} is the center of attention — their friends/NPCs react to their post.\n`;
                              if (ee) {
                                Z += `- ${U} is the second focus — characters may reply to ${U}'s actual comment(s) listed above. ${N.name} especially cares about ${U}'s reaction.\n`;
                              }
                              Z += "- Characters only interact with each other if they know each other (same group).\n";
                              Z += "- NPCs tagged [NPC] are side characters bound to a main character — they interact within their circle.\n";
                              if (V.length > 1) {
                                Z += `- Characters from DIFFERENT groups DO NOT know each other. They cannot reply to each other's comments. They only see the post${ee ? ` and ${U}'s comments` : ""}.\n`;
                              }
                            } else {
                              Z += `This is ${U}'s post. Only friends who chat with ${U} can see it.\n\n`;
                              Z += "Characters by social circle:\n\n";
                              V.forEach(e => {
                                const t = Y[e];
                                Z += `### [${e}]\n`;
                                t.forEach(e => {
                                  Z += `${q(e)}\n`;
                                });
                              });
                              Z += "# SOCIAL DYNAMICS (user post)\n";
                              Z += ee ? `- ${U} is the protagonist — comments engage with ${U}'s post; characters MAY reply to ${U}'s actual comment(s) listed above.\n` : `- ${U} is the poster but has NOT commented further. Characters react to the POST CONTENT itself (like / top-level comment). Do NOT fabricate a reply to ${U}.\n`;
                              Z += "- Characters within the SAME group know each other and can reply to each other.\n";
                              Z += "- Characters from DIFFERENT groups DO NOT know each other. Each group's interaction is isolated.\n";
                              Z += "- NPCs tagged [NPC] are side characters — they participate within their own group circle.\n";
                            }
                            Z += "\n# IN-CHARACTER RULES (most important)\n";
                            Z += "- Every comment/reply must read as that specific character speaking — anchored in their [CHARACTER] block: speech rhythm, vocabulary range, metaphor system, register (formal / slangy / archaic / clinical), catchphrases.\n";
                            Z += `- Lean on each char's [LATEST EPISODE] and [RECENT CHAT TAIL] for what they actually know and care about right now. A char who hasn't seen ${U} for weeks doesn't comment like they were together yesterday.\n`;
                            Z += "- The [RELATIONSHIP] string is data, not a template. Read it and let it color tone — do not map it to a fixed style.\n";
                            Z += "- If a char's recent context (memory / chat) implies a callback (an open promise, a recent fight, a private joke), they may use it — obliquely, in-voice. If nothing is implied, do NOT invent shared history.\n\n";
                            Z += "# PARTICIPATION\n";
                            Z += "- Not everyone interacts. Some only like. Some ignore. Realistic participation rate — silence is in-character for someone who isn't close or isn't in the mood.\n";
                            Z += "- No duplicate likes/top-level comments per character.\n";
                            Z += "- Replies should feel like natural conversation threads — answering, joking, pushing back — not standalone statements.\n";
                            if (L.length > 0) {
                              Z += "- Comment on the actual content of the images when relevant.\n";
                            }
                            Z += `- All text in ${_}.\n\n`;
                            Z += "# OUTPUT\n";
                            Z += "[{\"name\":\"char name\",\"like\":true/false,\"comment\":\"top-level comment or null\",\"reply\":{\"targetName\":\"name\",\"content\":\"text\"} or null}]\n";
                            Z += "Omit characters who don't interact. JSON array only, no commentary.";
                            console.log("[生成回復] Prompt:", Z);
                            const ne = [{
                              role: "system",
                              content: Z
                            }, {
                              role: "user",
                              content: "Generate all characters' interactions. Output JSON array only."
                            }];
                            let ie;
                            let oe;
                            try {
                              ie = await g({
                                messages: ne,
                                settings: x,
                                preferStreaming: false
                              });
                            } catch (j) {
                              console.error("[生成回復] API 呼叫失敗:", j);
                              t(X("generateReplyApiFailed", "API 呼叫失敗: ") + ((j == null ? undefined : j.message) || j));
                              return;
                            }
                            console.log("[生成回復] AI 回應:", ie);
                            if (!ie) {
                              console.warn("[生成回復] API 回應為空");
                              t(X("generateReplyEmpty", "AI 回應為空，請重試"));
                              return;
                            }
                            try {
                              let e = C(ie).trim();
                              const t = e.match(/```(?:json)?\s*\n?([\s\S]*?)\n?\s*```/);
                              if (t) {
                                e = t[1].trim();
                              }
                              try {
                                oe = JSON.parse(e);
                              } catch {
                                const t = e.match(/\[[\s\S]*\]/);
                                if (!t) {
                                  throw new Error("No JSON array found");
                                }
                                oe = JSON.parse(t[0]);
                              }
                            } catch (S) {
                              console.error("[生成回復] JSON 解析失敗:", S, "\n原始回應:", ie);
                              t(X("generateReplyParseFailed", "AI 回應格式錯誤，請重試"));
                              return;
                            }
                            if (!Array.isArray(oe)) {
                              console.error("[生成回復] 回應不是陣列:", oe);
                              t(X("generateReplyParseFailed", "AI 回應格式錯誤，請重試"));
                              return;
                            }
                            console.log("[生成回復] 解析結果:", oe);
                            const re = e => {
                              if (!e) {
                                return null;
                              }
                              const t = e.trim();
                              let n = $.find(e => e.name === t);
                              if (n) {
                                return n;
                              }
                              const i = t.toLowerCase();
                              n = $.find(e => e.name.toLowerCase() === i);
                              if (n) {
                                return n;
                              }
                              const o = t.replace(/\s+/g, "");
                              n = $.find(e => e.name.replace(/\s+/g, "") === o);
                              return n || null;
                            };
                            const se = e => {
                              let t = 0;
                              const n = [...(e.likes || [])];
                              const i = [...(e.comments || [])];
                              oe.forEach(e => {
                                var o;
                                var r;
                                const s = re(e.name);
                                if (!s) {
                                  console.warn("[生成回復] 找不到角色:", e.name);
                                  return;
                                }
                                t++;
                                const a = String(s.id);
                                if (R.includes(a)) {
                                  console.warn("[生成回復] 跳過用戶反應:", e.name);
                                } else {
                                  if (e.like && !n.some(e => String(e.userId) === a)) {
                                    n.push({
                                      userId: s.id,
                                      name: s.name,
                                      timestamp: Date.now()
                                    });
                                  }
                                  if (!!e.comment && !i.some(e => String(e.userId) === a && !e.replyTo) && !i.some(t => String(t.userId) === a && t.content === e.comment)) {
                                    i.push({
                                      id: E(),
                                      userId: s.id,
                                      name: s.name,
                                      content: e.comment,
                                      timestamp: Date.now()
                                    });
                                  }
                                  if (((o = e.reply) == null ? undefined : o.targetName) && ((r = e.reply) == null ? undefined : r.content)) {
                                    const t = String(e.reply.targetName).trim();
                                    const n = t === U || R.some(e => e && t === e);
                                    if (n && !ee) {
                                      console.warn("[生成回復] 跳過幻覺回覆（用戶未留言）:", e.name, "→", t);
                                    } else {
                                      const o = i.find(e => e.name === t);
                                      if (n && !o) {
                                        console.warn("[生成回復] 跳過幻覺回覆（找不到用戶留言）:", e.name, "→", t);
                                      } else if (!i.some(e => String(e.userId) === a && e.replyTo && (e.replyTo.name === t || e.replyTo.id === (o == null ? undefined : o.id)))) {
                                        i.push({
                                          id: E(),
                                          userId: s.id,
                                          name: s.name,
                                          content: e.reply.content,
                                          timestamp: Date.now(),
                                          replyTo: o ? {
                                            id: o.id,
                                            name: o.name
                                          } : {
                                            id: 0,
                                            name: t
                                          }
                                        });
                                      }
                                    }
                                  }
                                }
                              });
                              return [{
                                ...e,
                                likes: n,
                                comments: i
                              }, t];
                            };
                            let ae = 0;
                            try {
                              P(t => t.map(t => {
                                if (t.id !== e) {
                                  return t;
                                }
                                const [n, i] = se(t);
                                ae = i;
                                return n;
                              }));
                            } catch {}
                            try {
                              const {
                                UserPostService: t
                              } = await i(async () => {
                                const {
                                  UserPostService: e
                                } = await import("./native-pet-CTNtZgMA.js").then(e => e.cy);
                                return {
                                  UserPostService: e
                                };
                              }, __vite__mapDeps([0, 1, 2, 3, 4, 5]));
                              const n = b.find(t => t.id === e);
                              if (n && n._id != null) {
                                const [e, i] = se(n);
                                if (ae === 0) {
                                  ae = i;
                                }
                                await t.update(n._id, {
                                  likes: e.likes,
                                  comments: e.comments
                                });
                              }
                            } catch (w) {
                              console.warn("[生成回復] DB 兜底寫入失敗:", w);
                            }
                            try {
                              window.dispatchEvent(new CustomEvent("moments-replies-completed", {
                                detail: {
                                  postId: e,
                                  matched: ae,
                                  total: oe.length
                                }
                              }));
                            } catch {}
                            if (ae === 0 && oe.length > 0) {
                              console.warn("[生成回復] AI 返回了結果但沒有匹配到任何角色:", oe.map(e => e.name));
                              try {
                                t(X("generateReplyNoMatch", "AI 回應的角色名稱無法匹配，請重試"));
                              } catch {}
                            } else {
                              console.log("[生成回復] 完成，匹配角色數:", ae, "/", oe.length);
                            }
                            T(u, {
                              notifyLabel: `朋友圈回覆生成完成（${ae} 條互動）`,
                              currentScreen: $e,
                              currentTab: "moments"
                            });
                            f = true;
                          } catch (R) {
                            console.error("[生成回復] 錯誤:", R);
                            try {
                              t(X("generateReplyError", "生成回復時出錯: ") + ((R == null ? undefined : R.message) || R));
                            } catch {}
                          } finally {
                            if (!f) {
                              T(u, {
                                suppressNotify: true
                              });
                            }
                            try {
                              bt(null);
                            } catch {}
                          }
                        })(e.id),
                        title: X("btnGenerateReplies", "生成回復"),
                        style: {
                          padding: "10px 12px",
                          cursor: "pointer",
                          borderRight: "1px solid #444"
                        },
                        children: y.jsxs("svg", {
                          width: "16",
                          height: "16",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "#fff",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          children: [y.jsx("path", {
                            d: "M15 4V2"
                          }), y.jsx("path", {
                            d: "M15 16v-2"
                          }), y.jsx("path", {
                            d: "M8 9h2"
                          }), y.jsx("path", {
                            d: "M20 9h2"
                          }), y.jsx("path", {
                            d: "M17.8 11.8L19 13"
                          }), y.jsx("path", {
                            d: "M15 9h.01"
                          }), y.jsx("path", {
                            d: "M17.8 6.2L19 5"
                          }), y.jsx("path", {
                            d: "M11 6.2L9.7 5"
                          }), y.jsx("path", {
                            d: "M11 11.8L9.7 13"
                          }), y.jsx("path", {
                            d: "M3 21l9-9"
                          })]
                        })
                      }), y.jsx("div", {
                        onClick: () => (async (e, t) => {
                          if (await n(X("btnDelete") + "?")) {
                            if (t) {
                              U(t => {
                                const n = {
                                  ...t
                                };
                                delete n[e];
                                return n;
                              });
                            } else {
                              const t = b.find(t => t.id === e);
                              const n = new Set();
                              if (t) {
                                for (const e of t.comments || []) {
                                  if (!(e == null ? undefined : e.userId)) {
                                    continue;
                                  }
                                  const t = String(e.userId);
                                  if (t !== "me" && (!W || t !== String(W.id) && t !== String(W.uid))) {
                                    n.add(t);
                                  }
                                }
                              }
                              P(t => t.filter(t => t.id !== e));
                              M(t => t.map(t => ({
                                ...t,
                                posts: (t.posts || []).filter(t => t.id !== e)
                              })));
                              if (n.size > 0) {
                                const t = String(D || (W == null ? undefined : W.uid) || (W == null ? undefined : W.id) || "");
                                if (t) {
                                  Promise.all([...n].map(n => m.removeMomentEntriesByPostId(t, n, String(e)).catch(e => {
                                    console.warn("[Moments→Memory] 清理失敗:", n, e);
                                    return 0;
                                  }))).then(t => {
                                    const n = t.reduce((e, t) => e + t, 0);
                                    if (n > 0) {
                                      console.log(`[Moments→Memory] 撤回 post ${e}：清掉 ${n} 條記憶`);
                                    }
                                  });
                                }
                              }
                            }
                            ct(null);
                          }
                        })(e.id, !!e.role),
                        title: X("btnDelete"),
                        style: {
                          padding: "10px 12px",
                          cursor: "pointer"
                        },
                        children: y.jsx(j.Trash, {
                          color: "#fff",
                          size: 16
                        })
                      })]
                    })]
                  })]
                }), (e.likes && e.likes.length > 0 || e.comments && e.comments.length > 0) && y.jsxs("div", {
                  className: "nj-moments-engagement",
                  style: {
                    background: "#f8f9fa",
                    borderRadius: "12px",
                    marginTop: "14px",
                    padding: "10px 14px",
                    fontSize: "14px",
                    position: "relative",
                    lineHeight: "1.6",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.02)"
                  },
                  children: [y.jsx("div", {
                    className: "nj-moments-engagement-arrow",
                    style: {
                      position: "absolute",
                      top: "-6px",
                      left: "16px",
                      width: "0",
                      height: "0",
                      borderLeft: "7px solid transparent",
                      borderRight: "7px solid transparent",
                      borderBottom: "7px solid #f8f9fa"
                    }
                  }), e.likes && e.likes.length > 0 && y.jsxs("div", {
                    className: "nj-moments-likes",
                    style: {
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "4px",
                      color: "#4c647b",
                      borderBottom: e.comments && e.comments.length > 0 ? "1px solid rgba(0,0,0,0.04)" : "none",
                      paddingBottom: e.comments && e.comments.length > 0 ? "8px" : "0",
                      marginBottom: e.comments && e.comments.length > 0 ? "8px" : "0"
                    },
                    children: [y.jsx(j.Heart, {
                      filled: false,
                      size: 14,
                      className: xt === e.id ? "like-animate" : "",
                      style: {
                        verticalAlign: "middle",
                        marginRight: "6px"
                      }
                    }, xt === e.id ? "animating" : "static"), e.likes.map((t, n) => y.jsxs("span", {
                      className: "nj-moments-like-name",
                      style: {
                        fontWeight: "600",
                        fontSize: "13.5px"
                      },
                      children: [t.name, n < e.likes.length - 1 ? ", " : ""]
                    }, n))]
                  }), e.comments && e.comments.map((t, n) => y.jsx("div", {
                    className: "nj-moments-comment " + (t.replyTo ? "nj-moments-comment-reply" : ""),
                    style: {
                      color: "var(--nj-msg-text, #1a1a1a)",
                      cursor: "pointer",
                      padding: "2px 0",
                      borderRadius: "2px",
                      transition: "background 0.2s"
                    },
                    onClick: () => ((e, t) => {
                      if (pn.current) {
                        pn.current = false;
                      } else {
                        ((e, t) => {
                          ht(e);
                          yt({
                            id: t.id,
                            name: t.name
                          });
                          mt("");
                          ct(null);
                          setTimeout(() => {
                            const t = document.getElementById(`comment-input-${e}`);
                            if (t) {
                              t.focus();
                            }
                          }, 50);
                        })(e, t);
                      }
                    })(e.id, t),
                    onContextMenu: n => {
                      n.preventDefault();
                      gn(e.id, t.id);
                    },
                    onTouchStart: () => mn(e.id, t.id),
                    onTouchEnd: xn,
                    onMouseDown: () => mn(e.id, t.id),
                    onMouseUp: xn,
                    onMouseEnter: e => e.currentTarget.style.background = "rgba(0,0,0,0.03)",
                    onMouseLeave: e => {
                      xn();
                      e.currentTarget.style.background = "transparent";
                    },
                    children: t.replyTo ? y.jsxs(y.Fragment, {
                      children: [y.jsx("span", {
                        className: "nj-moments-comment-author",
                        style: {
                          color: "#4c647b",
                          fontWeight: "600"
                        },
                        children: t.name
                      }), y.jsxs("span", {
                        className: "nj-moments-comment-reply-word",
                        style: {
                          color: "var(--nj-msg-text-muted, #999)"
                        },
                        children: [" ", X("msgReply", " 回复 "), " "]
                      }), y.jsx("span", {
                        className: "nj-moments-comment-target",
                        style: {
                          color: "#4c647b",
                          fontWeight: "600"
                        },
                        children: t.replyTo.name
                      }), y.jsxs("span", {
                        className: "nj-moments-comment-content",
                        style: {
                          color: "var(--nj-msg-text, #444)"
                        },
                        children: [": ", t.content]
                      })]
                    }) : y.jsxs(y.Fragment, {
                      children: [y.jsx("span", {
                        className: "nj-moments-comment-author",
                        style: {
                          color: "#4c647b",
                          fontWeight: "600"
                        },
                        children: t.name
                      }), y.jsxs("span", {
                        className: "nj-moments-comment-content",
                        style: {
                          color: "var(--nj-msg-text, #444)"
                        },
                        children: [": ", t.content]
                      })]
                    })
                  }, `${t.id}_${n}`))]
                }), pt === e.id && y.jsxs("div", {
                  style: {
                    marginTop: "10px"
                  },
                  children: [ft && y.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "6px 10px",
                      background: "var(--nj-msg-comment-banner-bg, #f0f0f0)",
                      borderRadius: "4px 4px 0 0",
                      fontSize: "13px",
                      color: "var(--nj-msg-text-muted, #666)"
                    },
                    children: [y.jsxs("span", {
                      children: ["回覆 ", y.jsx("span", {
                        style: {
                          color: "#576b95",
                          fontWeight: "600"
                        },
                        children: ft.name
                      })]
                    }), y.jsx("span", {
                      onClick: () => yt(null),
                      style: {
                        cursor: "pointer",
                        color: "var(--nj-msg-text-muted, #999)",
                        fontSize: "16px",
                        padding: "0 4px"
                      },
                      children: "×"
                    })]
                  }), y.jsxs("div", {
                    style: {
                      display: "flex",
                      gap: "8px",
                      minWidth: 0
                    },
                    children: [y.jsx("input", {
                      id: `comment-input-${e.id}`,
                      name: "moment-comment",
                      autoComplete: "off",
                      autoFocus: true,
                      value: gt,
                      onChange: e => mt(e.target.value),
                      onKeyDown: e => e.key === "Enter" && hn(),
                      placeholder: ft ? X("phReplyTo", {
                        name: ft.name
                      }) : X("phAddComment"),
                      className: "comment-input",
                      style: {
                        flex: 1,
                        minWidth: 0,
                        padding: "8px 12px",
                        border: "1px solid var(--nj-msg-comment-input-border, #e5e5e5)",
                        borderRadius: ft ? "0 0 4px 4px" : "4px",
                        borderTop: ft ? "none" : "1px solid var(--nj-msg-comment-input-border, #e5e5e5)",
                        outline: "none",
                        background: "var(--nj-msg-comment-input-bg, #ffffff)",
                        color: "var(--nj-msg-text, #000000)",
                        fontSize: "15px",
                        boxSizing: "border-box"
                      }
                    }), y.jsx("button", {
                      onClick: hn,
                      style: {
                        background: "#07c160",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        padding: "0 12px",
                        cursor: "pointer",
                        fontSize: "14px",
                        fontWeight: "500",
                        flexShrink: 0
                      },
                      children: "Send"
                    })]
                  })]
                }), "    "]
              })]
            }, `${e.id}_${s}`);
          }), jt < b.length && y.jsx("div", {
            ref: wt,
            className: "nj-moments-load-more-sentinel",
            style: {
              padding: "20px",
              textAlign: "center",
              fontSize: "12px",
              color: "var(--nj-msg-text-muted, #999)"
            },
            children: X("msgLoadingMore", "加载中…")
          }), b.length === 0 && y.jsx("div", {
            style: {
              padding: "40px",
              textAlign: "center",
              color: "var(--nj-msg-text-muted, #999)"
            },
            children: "No moments yet."
          })]
        }), y.jsx("div", {
          className: "nj-moments-decor-bottom",
          "aria-hidden": "true"
        })]
      }), at && v.createPortal(y.jsxs("div", {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "var(--nj-sheet-page-bg, #ededed)",
          color: "var(--nj-sheet-text, inherit)",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column"
        },
        children: [y.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            padding: "12px 16px",
            paddingTop: "calc(12px + max(44px, env(safe-area-inset-top, 0px)))",
            background: "var(--nj-sheet-page-bg, #f7f7f7)",
            borderBottom: "1px solid var(--nj-sheet-border, #e5e5e5)",
            flexShrink: 0
          },
          children: [y.jsx("div", {
            onClick: () => {
              lt(false);
              V(Date.now());
            },
            style: {
              cursor: "pointer",
              padding: "4px",
              marginRight: "12px"
            },
            children: y.jsx("svg", {
              width: "20",
              height: "20",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "var(--nj-sheet-text, #333)",
              strokeWidth: "2.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: y.jsx("polyline", {
                points: "15 18 9 12 15 6"
              })
            })
          }), y.jsx("div", {
            style: {
              flex: 1,
              textAlign: "center",
              fontWeight: "600",
              fontSize: "17px",
              color: "var(--nj-sheet-text, #1a1a1a)"
            },
            children: X("momentsNotifTitle")
          }), y.jsx("div", {
            style: {
              width: "28px"
            }
          })]
        }), y.jsxs("div", {
          style: {
            flex: 1,
            overflowY: "auto",
            paddingBottom: "calc(40px + env(safe-area-inset-bottom, 0px))",
            WebkitOverflowScrolling: "touch"
          },
          children: [ge.list.length > 0 && y.jsx("div", {
            style: {
              background: "var(--nj-sheet-row-bg, #fff)",
              borderTop: "1px solid var(--nj-sheet-border, #e5e5e5)",
              borderBottom: "1px solid var(--nj-sheet-border, #e5e5e5)",
              marginTop: "8px"
            },
            children: ge.list.map((e, t) => y.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                padding: "12px 16px",
                borderBottom: t < ge.list.length - 1 ? "1px solid var(--nj-sheet-border, #f0f0f0)" : "none"
              },
              children: [(() => {
                const t = e.charId ? K.find(t => String(t.id) === String(e.charId)) : null;
                const n = (t == null ? undefined : t.image) || e.avatar || "/default-avatar.png";
                return y.jsx("div", {
                  style: {
                    width: "42px",
                    height: "42px",
                    borderRadius: "6px",
                    flexShrink: 0,
                    overflow: "hidden",
                    background: "#f5f5f5"
                  },
                  children: y.jsx("img", {
                    decoding: "async",
                    loading: "lazy",
                    src: n,
                    style: t ? S(t) : {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }
                  })
                });
              })(), y.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: 0
                },
                children: [y.jsx("div", {
                  style: {
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#576b95"
                  },
                  children: e.name
                }), y.jsxs("div", {
                  style: {
                    fontSize: "14px",
                    color: "var(--nj-sheet-text-2, #333)",
                    marginTop: "3px",
                    lineHeight: "1.4"
                  },
                  children: [e.type === "post" && y.jsxs("span", {
                    children: [X("momentsNotifNewPost"), e.content ? `：${e.content.substring(0, 30)}${e.content.length > 30 ? "..." : ""}` : ""]
                  }), e.type === "like" && y.jsxs("span", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "4px"
                    },
                    children: [y.jsx("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 24 24",
                      fill: "#f44",
                      stroke: "none",
                      children: y.jsx("path", {
                        d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      })
                    }), X("momentsNotifLikedYour")]
                  }), e.type === "comment" && (e.content || X("momentsNotifCommentedYour")), e.type === "reply" && (e.content || X("momentsNotifRepliedYour"))]
                }), y.jsx("div", {
                  style: {
                    fontSize: "12px",
                    color: "var(--nj-sheet-text-muted, #b2b2b2)",
                    marginTop: "4px"
                  },
                  children: (() => {
                    const t = Date.now() - e.timestamp;
                    if (t < 60000) {
                      return X("msgTimeJustNow");
                    } else if (t < 3600000) {
                      return `${Math.floor(t / 60000)}${X("msgTimeMinsAgo")}`;
                    } else if (t < 86400000) {
                      return `${Math.floor(t / 3600000)}${X("msgTimeHoursAgo")}`;
                    } else {
                      return `${Math.floor(t / 86400000)}${X("msgTimeDaysAgo")}`;
                    }
                  })()
                })]
              }), y.jsx("div", {
                style: {
                  width: "42px",
                  height: "42px",
                  flexShrink: 0,
                  borderRadius: "4px",
                  overflow: "hidden",
                  background: "#f5f5f5"
                },
                children: e.postImage ? y.jsx("img", {
                  decoding: "async",
                  loading: "lazy",
                  src: e.postImage,
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }
                }) : y.jsx("div", {
                  style: {
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "9px",
                    color: "#aaa",
                    padding: "2px",
                    overflow: "hidden",
                    wordBreak: "break-all",
                    lineHeight: "1.1"
                  },
                  children: (e.postText || "").substring(0, 16)
                })
              })]
            }, `notif-${t}`))
          }), y.jsx("div", {
            style: {
              padding: "24px 16px",
              textAlign: "center",
              fontSize: "13px",
              color: "var(--nj-sheet-text-muted, #b2b2b2)"
            },
            children: X("momentsNotifAllMessages")
          })]
        })]
      }), document.body), Tt && y.jsx("div", {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "fadeIn 0.2s ease"
        },
        onClick: () => !Wt && Rt(false),
        children: y.jsxs("div", {
          style: {
            background: "var(--nj-sheet-bg, #fff)",
            color: "var(--nj-sheet-text, inherit)",
            borderRadius: "16px",
            padding: "20px",
            width: "90%",
            maxWidth: "380px",
            maxHeight: "80vh",
            overflowY: "auto",
            boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
            animation: "scaleIn 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          },
          onClick: e => e.stopPropagation(),
          children: [y.jsx("div", {
            style: {
              fontSize: "17px",
              fontWeight: "700",
              marginBottom: "16px",
              textAlign: "center"
            },
            children: "生成角色動態"
          }), y.jsxs("div", {
            style: {
              marginBottom: "14px"
            },
            children: [y.jsx("div", {
              style: {
                fontSize: "13px",
                color: "var(--nj-sheet-text-muted, #666)",
                marginBottom: "6px"
              },
              children: "角色選擇"
            }), y.jsx("div", {
              style: {
                display: "flex",
                gap: "8px"
              },
              children: ["random", "select"].map(e => y.jsx("div", {
                onClick: () => !Wt && Et(e),
                style: {
                  flex: 1,
                  padding: "8px 0",
                  textAlign: "center",
                  borderRadius: "8px",
                  fontSize: "13px",
                  cursor: Wt ? "default" : "pointer",
                  background: Pt === e ? "#007AFF" : "var(--nj-sheet-card-bg, #f5f5f5)",
                  color: Pt === e ? "#fff" : "var(--nj-sheet-text, #333)",
                  fontWeight: Pt === e ? "600" : "400",
                  transition: "all 0.2s"
                },
                children: e === "random" ? "隨機角色" : "指定角色"
              }, e))
            })]
          }), Pt === "select" && y.jsx("div", {
            style: {
              marginBottom: "14px",
              maxHeight: "200px",
              overflowY: "auto",
              border: "1px solid var(--nj-sheet-border, #eee)",
              borderRadius: "10px",
              padding: "4px"
            },
            children: K.filter(e => e.name).map(e => {
              const t = zt.includes(String(e.id));
              return y.jsxs("div", {
                onClick: () => {
                  if (!Wt) {
                    At(n => t ? n.filter(t => t !== String(e.id)) : [...n, String(e.id)]);
                  }
                },
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "8px 10px",
                  cursor: Wt ? "default" : "pointer",
                  borderRadius: "8px",
                  background: t ? "#EBF5FF" : "transparent",
                  transition: "background 0.15s"
                },
                children: [y.jsx("div", {
                  style: {
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    background: "#f0f0f0",
                    flexShrink: 0
                  },
                  children: e.image && y.jsx("img", {
                    decoding: "async",
                    loading: "lazy",
                    src: e.image,
                    style: S(e)
                  })
                }), y.jsxs("div", {
                  style: {
                    flex: 1,
                    minWidth: 0
                  },
                  children: [y.jsx("div", {
                    style: {
                      fontSize: "14px",
                      fontWeight: "500"
                    },
                    children: e.name
                  }), y.jsxs("div", {
                    style: {
                      fontSize: "11px",
                      color: "var(--nj-sheet-text-muted, #999)",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    },
                    children: [e.type === "npc" ? "NPC" : "", " ", (e.description || "").substring(0, 40)]
                  })]
                }), y.jsx("div", {
                  style: {
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    border: t ? "none" : "2px solid #ccc",
                    background: t ? "#007AFF" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  },
                  children: t && y.jsx("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: "3",
                    children: y.jsx("path", {
                      d: "M20 6L9 17l-5-5"
                    })
                  })
                })]
              }, e.id);
            })
          }), y.jsxs("div", {
            style: {
              marginBottom: "14px"
            },
            children: [y.jsx("div", {
              style: {
                fontSize: "13px",
                color: "var(--nj-sheet-text-muted, #666)",
                marginBottom: "6px"
              },
              children: "生成數量"
            }), y.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "12px"
              },
              children: [y.jsx("input", {
                type: "range",
                min: "1",
                max: "10",
                value: Nt,
                onChange: e => $t(Number(e.target.value)),
                disabled: Wt,
                style: {
                  flex: 1,
                  accentColor: "#007AFF"
                }
              }), y.jsx("span", {
                style: {
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#007AFF",
                  minWidth: "24px",
                  textAlign: "center"
                },
                children: Nt
              })]
            })]
          }), Mt && y.jsxs("div", {
            style: {
              fontSize: "13px",
              color: "#007AFF",
              textAlign: "center",
              marginBottom: "12px",
              padding: "8px",
              background: "#F0F7FF",
              borderRadius: "8px"
            },
            children: [Wt && y.jsx("span", {
              style: {
                marginRight: "6px"
              },
              children: "⏳"
            }), Mt]
          }), y.jsxs("div", {
            style: {
              display: "flex",
              gap: "10px"
            },
            children: [y.jsx("button", {
              onClick: () => {
                Rt(false);
                Dt("");
              },
              disabled: Wt,
              style: {
                flex: 1,
                padding: "12px 0",
                borderRadius: "12px",
                border: "1px solid var(--nj-sheet-border, #ddd)",
                background: "var(--nj-sheet-cancel-bg, #fff)",
                color: "var(--nj-sheet-text, #333)",
                fontSize: "15px",
                fontWeight: "500",
                cursor: Wt ? "default" : "pointer",
                opacity: Wt ? 0.5 : 1
              },
              children: "取消"
            }), y.jsx("button", {
              onClick: async () => {
                var e;
                var n;
                if (Wt) {
                  return;
                }
                Lt(true);
                Dt("準備中...");
                k().catch(() => {});
                const d = I("batch", `生成朋友圈動態（${Nt} 條）`);
                let c = false;
                try {
                  const u = await o.get("apiSettings");
                  if (!(u == null ? undefined : u.mainApiUrl) || !(u == null ? undefined : u.mainApiKey)) {
                    t("請先設定 API");
                    return;
                  }
                  const f = !!(u == null ? undefined : u.novelAiEnabled) && !!(u == null ? undefined : u.novelAiKey) || !!(u == null ? undefined : u.pollinationsEnabled) || !!(u == null ? undefined : u.googleImagenEnabled) && !!(u == null ? undefined : u.googleImagenKey) || !!(u == null ? undefined : u.geminiImageEnabled) && !!(u == null ? undefined : u.geminiImageKey) || !!(u == null ? undefined : u.grokEnabled) && !!(u == null ? undefined : u.grokKey) || !!(u == null ? undefined : u.gptImageEnabled) && !!(u == null ? undefined : u.gptImageKey);
                  let y = [];
                  const v = K.filter(e => e.name);
                  if (Pt === "select" && zt.length > 0) {
                    y = v.filter(e => zt.includes(String(e.id)));
                  } else {
                    const e = [...v].sort(() => Math.random() - 0.5);
                    y = e.slice(0, Math.min(Nt, e.length));
                  }
                  if (y.length === 0) {
                    t("沒有可用的角色");
                    return;
                  }
                  const b = Nt;
                  const j = D;
                  const S = (() => {
                    const e = new Date();
                    return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
                  })();
                  const w = Q === "zh_cn" ? "Simplified Chinese" : Q === "en" ? "English" : "Traditional Chinese";
                  let k = [];
                  try {
                    const {
                      db: e
                    } = await i(async () => {
                      const {
                        db: e
                      } = await import("./native-pet-CTNtZgMA.js").then(e => e.cv);
                      return {
                        db: e
                      };
                    }, __vite__mapDeps([0, 1, 2, 3, 4, 5]));
                    k = await e.multiSceneSessionSummaries.where("userId").equals(j).toArray().catch(() => []);
                  } catch (p) {}
                  const I = (W == null ? undefined : W.name) || "User";
                  const R = b <= 2 ? "full" : b <= 5 ? "mid" : "tight";
                  const P = R === "full" ? {
                    recentChatTake: 25,
                    historyTake: 3
                  } : R === "mid" ? {
                    recentChatTake: 20,
                    historyTake: 2
                  } : {
                    recentChatTake: 15,
                    historyTake: 1
                  };
                  const z = [];
                  for (let e = 0; e < b; e++) {
                    const t = Pt === "select" ? y[e % y.length] : y[e] || y[e % y.length];
                    const n = String(t.id);
                    let i = [];
                    try {
                      i = ((await ce.getByPair(j, n)) || []).filter(e => !(e == null ? undefined : e.hiddenByUser)).slice(-P.recentChatTake).map(e => {
                        const n = e.sender === "me" ? I : t.name;
                        const i = (e.text || "").replace(/\n/g, " ").trim();
                        if (i) {
                          return `${n}: ${i}`;
                        } else {
                          return "";
                        }
                      }).filter(Boolean);
                    } catch (p) {}
                    let o = "";
                    let s = "";
                    try {
                      const e = await m.get(j, n);
                      if (e) {
                        if (e.episodeSummary) {
                          o = String(e.episodeSummary).replace(/\n/g, " ").trim();
                        }
                        const t = (e.summaryHistory || []).slice(-P.historyTake);
                        if (t.length > 0) {
                          const e = t.map(e => (e.summary || e.content || "").replace(/\n/g, " ").trim()).filter(Boolean);
                          if (e.length > 0) {
                            s = e.join(" /// ");
                          }
                        }
                      }
                    } catch (p) {}
                    let a = "";
                    try {
                      const e = await r.get(j, n).catch(() => null);
                      if (e) {
                        const n = [];
                        if (e.charToUserRelationship) {
                          n.push(`${t.name}→${I}: ${e.charToUserRelationship}`);
                        }
                        if (e.relationship) {
                          n.push(`${I}→${t.name}: ${e.relationship}`);
                        }
                        if (n.length > 0) {
                          a = n.join(" | ");
                        }
                      }
                    } catch (p) {}
                    let l = "";
                    try {
                      const e = (x("calendar_events_character") || []).filter(e => e && String(e.characterId) === n && e.date === S);
                      const t = (x("calendar_todos_character") || []).filter(e => e && String(e.ownerId) === n && !e.completed);
                      if (e.length > 0) {
                        l += `Schedule: ${e.map(e => `${e.time || ""} ${e.title}`).join(", ")}`;
                      }
                      if (t.length > 0) {
                        l += `${l ? " | " : ""}Todos: ${t.map(e => e.title || e.text || "").join(", ")}`;
                      }
                    } catch (p) {}
                    let d = "";
                    try {
                      const e = k.filter(e => !!(e == null ? undefined : e.castKey) && String(e.castKey).replace(/#spectate$/, "").split("|").includes(n)).sort((e, t) => (t.timestamp || t.id || 0) - (e.timestamp || e.id || 0));
                      if (e.length > 0) {
                        const t = e[0];
                        const n = String(t.summary || t.content || "").replace(/\n/g, " ").trim();
                        if (n) {
                          d = `Multi-scene with ${String(t.castKey).replace(/#spectate$/, "").split("|").filter(Boolean).map(e => {
                            if (String(e) === String(W == null ? undefined : W.id) || String(e) === String(W == null ? undefined : W.uid)) {
                              return I;
                            }
                            const t = K.find(t => String(t.id) === String(e));
                            return (t == null ? undefined : t.name) || "?";
                          }).filter(e => e && e !== "?").join(", ")}: ${n}`;
                        }
                      }
                    } catch (p) {}
                    z.push({
                      char: t,
                      recentMsgs: i,
                      latestMemory: o,
                      recentEvents: s,
                      relationshipInfo: a,
                      scheduleInfo: l,
                      multiSceneInfo: d,
                      idx: e
                    });
                  }
                  Dt("生成文字中...");
                  const A = new Date().getHours();
                  let N;
                  let L;
                  let M = `Generate ${b} social media posts. Local time: ${A < 6 ? "late night" : A < 9 ? "early morning" : A < 12 ? "morning" : A < 14 ? "noon" : A < 18 ? "afternoon" : A < 22 ? "evening" : "night"}.\n\n`;
                  z.forEach(({
                    char: e,
                    recentMsgs: t,
                    latestMemory: n,
                    recentEvents: i,
                    relationshipInfo: o,
                    scheduleInfo: r,
                    multiSceneInfo: s
                  }, a) => {
                    M += `=== #${a + 1}: ${e.name} ===\n`;
                    const l = (e.description || "").replace(/\n/g, " ").trim();
                    if (l) {
                      M += `[CHARACTER]\n${l}\n`;
                    }
                    if (o) {
                      M += `[RELATIONSHIP] ${o}\n`;
                    }
                    if (n) {
                      M += `[LATEST EPISODE]\n${n}\n`;
                    }
                    if (i) {
                      M += `[EARLIER EVENTS] ${i}\n`;
                    }
                    if (s) {
                      M += `[OFFLINE/MULTI SCENE] ${s}\n`;
                    }
                    if (r) {
                      M += `[TODAY] ${r}\n`;
                    }
                    if (t.length > 0) {
                      M += `[RECENT CHAT TAIL]\n${t.join("\n")}\n`;
                    }
                    M += "\n";
                  });
                  M += "# TASK\nWrite each character's next social-media post AS IF they are mid-storyline. Do not reset their world for the post; pick up from where their life currently is.\n\n";
                  M += "# CONTINUITY (most important)\n";
                  M += "- The post is the next beat of the character's actual life shown in [LATEST EPISODE] / [RECENT CHAT TAIL] / [OFFLINE/MULTI SCENE]: same threads, same emotional temperature, same open loops.\n";
                  M += "- Open loops to honor: anything left unresolved in the context — a transfer that just happened, a tease still hanging, an upcoming date, a fight, a meeting place. Callback obliquely in character voice (not a plot recap).\n";
                  M += "- Anchor every claim in provided context. If something is not in the context, do not invent it as backstory.\n";
                  M += "- Bio drives the voice. Speech rhythm, vocabulary range, metaphor system, catchphrases, register (formal / slangy / archaic / clinical) must all match the character described in [CHARACTER] and [PERSONALITY].\n\n";
                  M += "# VOICE\n";
                  M += "- First-person, present-tense, written like the character tapping their own phone. Fragments and asides welcome.\n";
                  M += "- Length 1-3 sentences. Hashtags only if the character would actually use them.\n";
                  M += "- Across the batch, vary the angle/topic/tone — no two posts should feel like siblings.\n\n";
                  M += `# REFERENCE TO ${I}\n`;
                  M += `- ${I} may appear obliquely (a "someone", a pronoun, a private joke) when the recent context warrants it. Don't shoehorn ${I} into every post.\n`;
                  M += `- "audience": "public" (most posts) or "user_only" — visible ONLY to ${I}, use for genuinely private/raw/intimate beats. Roughly 15-25% user_only.\n\n`;
                  M += "# OUTPUT\n";
                  M += `- All post text in ${w}.\n`;
                  M += "- Output JSON array only, no commentary.\n\n";
                  M += `# SCHEMA (${b} objects)\n`;
                  if (f) {
                    M += "[{\"name\":\"char name\",\"text\":\"post text\",\"audience\":\"public|user_only\",\"scene\":\"[SUBJECT:XXX] english image desc grounded in text\"}]\n\n";
                    M += "# IMAGE SCENE\n";
                    M += "- 'scene' visualizes what 'text' actually depicts — extract the concrete noun/action/setting from text and render it.\n";
                    M += "- Start with [SUBJECT:XXX] from text content:\n";
                    M += "  • PERSON_EMOTION — selfie / own face / mood close-up\n";
                    M += "  • PERSON_ACTION — char alone doing something (cooking, walking, reading)\n";
                    M += `  • TWO_PEOPLE — text mentions being together with ${I} / "we" / "us" / 一起 / 約會\n`;
                    M += "  • SCENE_WITH_PEOPLE — environment with people incidental\n";
                    M += "  • OBJECT — gift / food / item / flower / book (no person)\n";
                    M += "  • SCENERY — landscape / cityscape / sky / empty room (no person)\n";
                    M += "- After [SUBJECT:XXX]: 20-40 English Danbooru-style tags OR one flowing sentence — composition first (close-up / wide shot / still life), then subject, action, environment, lighting.\n";
                    M += "- The image must match the text's mood (drained, smug, tender, manic, etc.). Pick lighting and framing that match.\n";
                    M += "Examples:\n";
                    M += "  text \"今天烤了草莓蛋糕\" → scene \"[SUBJECT:OBJECT] still life of a freshly baked strawberry shortcake on a white plate, soft kitchen light, top-down view, no people\"\n";
                    M += "  text \"和他在海邊散步好幸福\" → scene \"[SUBJECT:TWO_PEOPLE] wide cinematic shot of two figures walking side by side along a sandy beach at sunset, seen from behind, golden hour\"\n";
                    M += "  text \"心情有點亂\" → scene \"[SUBJECT:PERSON_EMOTION] close-up portrait, gazing out a rainy window, soft melancholy expression, dim indoor light\"\n";
                  } else {
                    M += `[{"name":"char name","text":"post text","audience":"public|user_only","scene":"image description in ${w} grounded in text"}]\n`;
                    M += "'scene' depicts what 'text' actually says — concrete subject/action/setting from the text.\n";
                  }
                  M += "\nOutput ONLY the JSON array.";
                  console.log("[生成朋友圈] 批量 Prompt:", M);
                  try {
                    N = await g({
                      messages: [{
                        role: "system",
                        content: M
                      }, {
                        role: "user",
                        content: `Generate ${b} status updates. Output JSON array only.`
                      }],
                      settings: u,
                      preferStreaming: false,
                      maxTokens: 65536
                    });
                  } catch (h) {
                    console.error("[生成朋友圈] API 呼叫失敗:", h);
                    t("API 呼叫失敗: " + ((h == null ? undefined : h.message) || h));
                    return;
                  }
                  if (!N) {
                    t("AI 回應為空，請重試");
                    return;
                  }
                  try {
                    let e = C(N).trim();
                    const t = e.match(/```(?:json)?\s*\n?([\s\S]*?)\n?\s*```/);
                    if (t) {
                      e = t[1].trim();
                    }
                    try {
                      L = JSON.parse(e);
                    } catch {
                      const t = e.match(/\[[\s\S]*\]/);
                      if (t) {
                        L = JSON.parse(t[0]);
                      } else {
                        const t = e.match(/\{[\s\S]*?"text"\s*:\s*"[\s\S]*?"\s*[\s\S]*?\}/g);
                        if (t) {
                          L = t.map(e => {
                            try {
                              return JSON.parse(e);
                            } catch {
                              return null;
                            }
                          }).filter(Boolean);
                        }
                      }
                    }
                  } catch (p) {
                    console.error("[生成朋友圈] JSON 解析失敗:", p, "\n原始回應:", N);
                    t("AI 回應格式錯誤，請重試");
                    return;
                  }
                  if (!Array.isArray(L) || L.length === 0) {
                    console.error("[生成朋友圈] 回應不是有效陣列:", L);
                    t("AI 回應格式錯誤，請重試");
                    return;
                  }
                  console.log("[生成朋友圈] 解析結果:", L);
                  let B = 0;
                  const {
                    UserPostService: O
                  } = await i(async () => {
                    const {
                      UserPostService: e
                    } = await import("./native-pet-CTNtZgMA.js").then(e => e.cy);
                    return {
                      UserPostService: e
                    };
                  }, __vite__mapDeps([0, 1, 2, 3, 4, 5]));
                  for (let t = 0; t < L.length && t < b; t++) {
                    const i = L[t];
                    const o = (i.text || i.content || "").trim();
                    const d = (i.scene || i.imageDesc || "").trim();
                    if (!o) {
                      continue;
                    }
                    let c = null;
                    if (i.name) {
                      const t = i.name.trim();
                      c = ((e = z.find(e => e.char.name === t)) == null ? undefined : e.char) || ((n = z.find(e => e.char.name.toLowerCase() === t.toLowerCase())) == null ? undefined : n.char);
                    }
                    if (!c && t < z.length) {
                      c = z[t].char;
                    }
                    if (!c) {
                      continue;
                    }
                    let h = [];
                    if (d && f) {
                      Dt(`生成圖片 (${t + 1}/${L.length})：${c.name}...`);
                      try {
                        const e = await r.get(j, c.id).catch(() => null);
                        const t = (c == null ? undefined : c.imagePrompt) || (e == null ? undefined : e.charImagePrompt) || s(c == null ? undefined : c.description) || "";
                        const n = a({
                          rawImgDesc: d,
                          char: c,
                          charAppearance: t,
                          user: W,
                          sceneType: "moment",
                          apiSettings: u,
                          imagePreset: e == null ? undefined : e.imagePreset
                        });
                        const i = await l(n.prompt, "moment", u, {
                          structured: n.structured,
                          imagePreset: e == null ? undefined : e.imagePreset,
                          charSeed: c == null ? undefined : c.imageSeed,
                          refImageId: c == null ? undefined : c.refImageRef
                        });
                        if (i) {
                          h = [i];
                        }
                      } catch (p) {
                        console.error("[生成朋友圈] 生圖失敗:", p);
                      }
                    } else if (d) {
                      h = [`txt:${d}`];
                    }
                    const g = String(i.audience || "public").toLowerCase();
                    const m = g === "user_only" || g === "useronly" || g === "private";
                    const x = (W == null ? undefined : W.id) || (W == null ? undefined : W.uid);
                    const y = {
                      id: E(),
                      name: c.name,
                      images: h,
                      imagePrompt: d || "",
                      note: o,
                      timestamp: Date.now() - (L.length - 1 - t) * 60000,
                      likes: [],
                      comments: [],
                      location: "",
                      mentions: [],
                      visibility: m ? "Partial" : "Public",
                      allowedUsers: m && x ? [String(x)] : [],
                      allowedGroups: [],
                      isCharacterPost: true,
                      charUserId: c.id
                    };
                    try {
                      await O.add(j, y);
                      B++;
                      console.log(`[生成朋友圈] ✅ ${c.name}: "${o.substring(0, 40)}..."`);
                    } catch (p) {
                      console.error("[生成朋友圈] DB 寫入失敗:", p);
                    }
                  }
                  try {
                    window.dispatchEvent(new CustomEvent("moments-batch-completed", {
                      detail: {
                        userId: j,
                        generated: B,
                        total: L.length
                      }
                    }));
                  } catch {}
                  try {
                    await $();
                  } catch {}
                  try {
                    Dt(`完成！已生成 ${B} 條動態`);
                    setTimeout(() => {
                      Rt(false);
                      Lt(false);
                      Dt("");
                    }, 1500);
                  } catch {}
                  T(d, {
                    notifyLabel: `朋友圈生成完成（${B} 條）`,
                    currentScreen: $e,
                    currentTab: "moments"
                  });
                  c = true;
                } catch (p) {
                  console.error("[生成朋友圈] 失敗:", p);
                  try {
                    t("生成失敗: " + ((p == null ? undefined : p.message) || p));
                  } catch {}
                } finally {
                  if (!c) {
                    T(d, {
                      suppressNotify: true
                    });
                  }
                  try {
                    if (Wt) {
                      Lt(false);
                    }
                  } catch {}
                }
              },
              disabled: Wt || Pt === "select" && zt.length === 0,
              style: {
                flex: 1,
                padding: "12px 0",
                borderRadius: "12px",
                border: "none",
                background: Wt || Pt === "select" && zt.length === 0 ? "#ccc" : "#007AFF",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "600",
                cursor: Wt || Pt === "select" && zt.length === 0 ? "default" : "pointer"
              },
              children: Wt ? "生成中..." : "開始生成"
            })]
          })]
        })
      }), _t && y.jsx(A, {
        item: _t,
        characters: K,
        groupChats: ne,
        t: X,
        onConfirm: e => (async e => {
          if (_t && e.length !== 0) {
            for (const t of e) {
              let e = false;
              let n = t;
              if (String(t).startsWith("group_")) {
                e = true;
                n = String(t).replace("group_", "");
              }
              const i = _t.note || _t.text || "";
              const o = {
                id: E(),
                text: i ? i.slice(0, 30) + (i.length > 30 ? "..." : "") : "[圖片動態]",
                sender: "me",
                timestamp: Date.now(),
                isMomentForward: true,
                momentData: {
                  id: _t.id,
                  name: _t.name,
                  avatar: _t.avatar,
                  note: i,
                  images: _t.images || [],
                  timestamp: _t.timestamp,
                  location: _t.location
                },
                isRead: false
              };
              if (e) {
                await u(ce, D, n, o, (W == null ? undefined : W.name) || "我");
                window.dispatchEvent(new CustomEvent("new-message", {
                  detail: {
                    charId: n,
                    message: o,
                    userId: D,
                    timestamp: Date.now()
                  }
                }));
              } else {
                const e = n;
                await ce.putMessage(D, String(e), o);
                pe(String(e), o, D);
              }
            }
            Ht(null);
          }
        })(e),
        onClose: () => Ht(null)
      }), Bt && v.createPortal(y.jsxs("div", {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "black",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "fadeIn 0.2s ease-out",
          flexDirection: "column"
        },
        onClick: () => Ot(null),
        children: [y.jsxs("div", {
          className: "hide-scrollbar",
          style: {
            display: "flex",
            width: "100%",
            height: "100%",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          },
          ref: e => {
            if (e && Bt.initialIndex > 0 && !e.hasScrolled) {
              e.scrollLeft = e.offsetWidth * Bt.initialIndex;
              e.hasScrolled = true;
            }
          },
          onScroll: e => {
            const t = Math.round(e.target.scrollLeft / e.target.offsetWidth);
            if (t !== Ft) {
              Ut(t);
            }
          },
          onClick: e => {},
          children: [y.jsx("style", {
            children: "\n                            .hide-scrollbar::-webkit-scrollbar { display: none; }\n                        "
          }), Bt.images.map((e, t) => y.jsx("div", {
            style: {
              flex: "0 0 100%",
              width: "100%",
              height: "100%",
              scrollSnapAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative"
            },
            children: typeof e == "string" && e.startsWith("txt:") ? y.jsx("div", {
              style: {
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent"
              },
              children: y.jsx("span", {
                style: {
                  color: "white",
                  fontSize: "24px",
                  padding: "40px",
                  textAlign: "center",
                  fontWeight: "bold"
                },
                children: e.substring(4)
              })
            }) : y.jsx("img", {
              decoding: "async",
              loading: "lazy",
              src: e,
              style: {
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain"
              },
              alt: "",
              draggable: "false"
            })
          }, t))]
        }), (() => {
          const e = Bt.images[Ft];
          const t = Bt.post;
          if (!t || !t.isCharacterPost) {
            return null;
          }
          if ((!t.imagePrompt || !String(t.imagePrompt).trim()) && (typeof e != "string" || !e.startsWith("txt:"))) {
            return null;
          }
          const n = `${t.id}_${Ft}`;
          const i = !!Gt[n];
          return y.jsx("div", {
            onClick: e => {
              e.stopPropagation();
              if (!i) {
                dn(t, Ft).then(e => {
                  if (e && e.ok && e.patch) {
                    Ot(t => {
                      if (!t) {
                        return t;
                      }
                      const n = t.post ? {
                        ...t.post,
                        ...e.patch
                      } : t.post;
                      return {
                        ...t,
                        images: e.patch.images,
                        post: n
                      };
                    });
                  }
                });
              }
            },
            style: {
              position: "absolute",
              top: "calc(env(safe-area-inset-top, 20px) + 12px)",
              right: "72px",
              color: "#fff",
              cursor: i ? "wait" : "pointer",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(5px)",
              zIndex: 10001,
              fontSize: "20px"
            },
            title: X("momentRerollImage") || "重新生成",
            children: y.jsx("span", {
              style: {
                display: "inline-block",
                animation: i ? "spin 0.9s linear infinite" : "none"
              },
              children: "⟳"
            })
          });
        })(), (() => {
          const e = Bt.post;
          if (!e || !e.isCharacterPost) {
            return null;
          }
          const t = Bt.images[Ft];
          if ((!e.imagePrompt || !String(e.imagePrompt).trim()) && (typeof t != "string" || !t.startsWith("txt:"))) {
            return null;
          }
          const n = `${e.id}_${Ft}`;
          const i = !!Gt[n];
          return y.jsx("div", {
            onClick: t => {
              t.stopPropagation();
              if (!i) {
                Vt({
                  post: e,
                  imgIdx: Ft
                });
              }
            },
            style: {
              position: "absolute",
              top: "calc(env(safe-area-inset-top, 20px) + 12px)",
              right: "120px",
              color: "#fff",
              cursor: i ? "wait" : "pointer",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(5px)",
              zIndex: 10001,
              fontSize: "20px",
              fontWeight: 600
            },
            title: "編輯提示詞並重新生圖",
            children: "✎"
          });
        })(), (() => {
          const e = Bt.post;
          if (e && e.isCharacterPost && e._id) {
            return y.jsx("div", {
              onClick: t => {
                t.stopPropagation();
                an(e, Ft);
              },
              style: {
                position: "absolute",
                top: "calc(env(safe-area-inset-top, 20px) + 12px)",
                left: "20px",
                color: "#fff",
                cursor: "pointer",
                background: "rgba(255,255,255,0.2)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(5px)",
                zIndex: 10001
              },
              title: q("momentImageDelete", "刪除這張圖"),
              children: y.jsxs("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "#fff",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [y.jsx("polyline", {
                  points: "3 6 5 6 21 6"
                }), y.jsx("path", {
                  d: "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"
                }), y.jsx("path", {
                  d: "M10 11v6"
                }), y.jsx("path", {
                  d: "M14 11v6"
                }), y.jsx("path", {
                  d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
                })]
              })
            });
          } else {
            return null;
          }
        })(), (() => {
          const e = Bt.images[Ft];
          if (!e || typeof e != "string" || e.startsWith("txt:")) {
            return null;
          } else {
            return y.jsx("div", {
              style: {
                position: "absolute",
                top: "calc(env(safe-area-inset-top, 20px) + 12px)",
                right: "20px",
                color: "#fff",
                cursor: "pointer",
                background: "rgba(255,255,255,0.2)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(5px)",
                zIndex: 10001
              },
              onClick: n => {
                n.stopPropagation();
                p(e, `moment_${Date.now()}.png`).then(e => {
                  if (!(e == null ? undefined : e.success)) {
                    t(q("downloadFailed", "下載失敗"));
                  }
                }).catch(e => {
                  console.warn("[朋友圈] 圖片下載失敗:", e);
                  t(q("downloadFailed", "下載失敗"));
                });
              },
              children: y.jsxs("svg", {
                width: "22",
                height: "22",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "#fff",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [y.jsx("path", {
                  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                }), y.jsx("polyline", {
                  points: "7 10 12 15 17 10"
                }), y.jsx("line", {
                  x1: "12",
                  y1: "15",
                  x2: "12",
                  y2: "3"
                })]
              })
            });
          }
        })(), Bt.images.length > 1 && y.jsx("div", {
          style: {
            position: "absolute",
            bottom: "40px",
            display: "flex",
            gap: "8px",
            padding: "10px",
            zIndex: 10000
          },
          onClick: e => e.stopPropagation(),
          children: Bt.images.map((e, t) => y.jsx("div", {
            style: {
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: t === Ft ? "#fff" : "rgba(255,255,255,0.3)",
              transition: "background 0.2s"
            }
          }, t))
        })]
      }), document.body), Kt && v.createPortal(y.jsx("div", {
        onClick: () => Xt(null),
        style: {
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          zIndex: 10050,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          animation: "fadeIn 0.15s ease-out"
        },
        children: y.jsxs("div", {
          onClick: e => e.stopPropagation(),
          style: {
            width: "100%",
            maxWidth: "480px",
            background: "var(--nj-sheet-bg, #fff)",
            color: "var(--nj-sheet-text, inherit)",
            borderTopLeftRadius: "14px",
            borderTopRightRadius: "14px",
            padding: "8px 0 calc(env(safe-area-inset-bottom, 0px) + 8px)",
            boxShadow: "0 -2px 20px rgba(0,0,0,0.12)"
          },
          children: [y.jsxs("div", {
            style: {
              textAlign: "center",
              fontSize: "13px",
              color: "var(--nj-sheet-text-muted, #999)",
              padding: "10px 16px 4px"
            },
            children: [(fe = Kt.post) == null ? undefined : fe.name, q("momentManageSheetTitleSuffix", " 的朋友圈")]
          }), y.jsxs("div", {
            onClick: () => {
              var e;
              const n = Kt.post;
              Xt(null);
              if ((((e = n == null ? undefined : n.images) == null ? undefined : e.length) || 0) >= 9) {
                t(q("momentImageAppendMaxReached", "已達 9 張上限"));
              } else {
                Qt(n);
              }
            },
            style: {
              padding: "16px 20px",
              fontSize: "16px",
              color: "#007aff",
              borderTop: "1px solid var(--nj-sheet-border, #eee)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [y.jsx("span", {
              children: q("momentAppendImage", "幫他附一張圖")
            }), y.jsxs("span", {
              style: {
                fontSize: "13px",
                color: "var(--nj-sheet-text-muted, #999)"
              },
              children: [((ve = (ye = Kt.post) == null ? undefined : ye.images) == null ? undefined : ve.length) || 0, "/9"]
            })]
          }), y.jsx("div", {
            onClick: () => Xt(null),
            style: {
              padding: "16px 20px",
              fontSize: "16px",
              color: "var(--nj-sheet-text-muted, #666)",
              borderTop: "8px solid var(--nj-sheet-divider-thick, #f5f5f7)",
              textAlign: "center",
              cursor: "pointer"
            },
            children: q("btnCancel", "取消")
          })]
        })
      }), document.body), qt && y.jsx(d, {
        isOpen: !!qt,
        multiple: true,
        onClose: () => {
          const e = qt;
          const t = Zt.current;
          Zt.current = [];
          Qt(null);
          if (e && t.length > 0) {
            ln(e, t);
          }
        },
        title: q("momentAppendImageTitle", "附圖到此貼文（可多選）"),
        onImageSelect: e => {
          if (e) {
            Zt.current.push(e);
          }
        }
      }), Yt && (() => {
        var e;
        var t;
        var n;
        const {
          post: i,
          imgIdx: o
        } = Yt;
        const r = i.charUserId || i.userId;
        const s = K.find(e => String(e.id) === String(r));
        const a = i.imagePrompt && String(i.imagePrompt).trim() || (((n = (t = (e = i.images) == null ? undefined : e[o]) == null ? undefined : t.startsWith) == null ? undefined : n.call(t, "txt:")) ? i.images[o].substring(4) : "") || (i.note || "").trim();
        const l = h(a);
        const d = `${i.id}_${o}`;
        const c = !!Gt[d];
        return y.jsx(R, {
          open: true,
          onClose: () => Vt(null),
          initialDesc: l,
          char: s,
          user: W,
          userId: D,
          characters: K,
          sceneType: "moment",
          busy: c,
          onConfirm: async ({
            rawImgDesc: e,
            useRaw: t
          }) => {
            Vt(null);
            const n = await dn(i, o, {
              rawImgDesc: e,
              useRaw: t
            });
            if ((n == null ? undefined : n.ok) && n.patch) {
              Ot(e => {
                if (!e) {
                  return e;
                }
                const t = e.post ? {
                  ...e.post,
                  ...n.patch
                } : e.post;
                return {
                  ...e,
                  images: n.patch.images,
                  post: t
                };
              });
            }
          }
        });
      })()]
    });
  }
};
export { N as default, z as formatTimeAgo };