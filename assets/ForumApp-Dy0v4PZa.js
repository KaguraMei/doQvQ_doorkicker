const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["./assets/ForumThemePanel-C2ZDH1g8.js", "./assets/vendor-react-B2VXkTUV.js", "./assets/forumThemeService-CnIUGRXT.js", "./assets/native-pet-CTNtZgMA.js", "./assets/vendor-dexie-KLdnSHz2.js", "./assets/vendor-jszip-DU-5YDGO.js", "./assets/vendor-lucide-DBv09HTV.js", "./assets/native-pet-D9YoqRtr.css", "./assets/main-BO9xa-SQ.js", "./assets/modulepreload-polyfill-YP0FEG5d.js", "./assets/vendor-supabase-Bcpm_8qV.js", "./assets/main-C4gkqfD0.css", "./assets/NotificationBar-y-kP9VHv.css", "./assets/vendor-fonts-BglBY6By.css"]) => i.map(i => d[i]);
var e = Object.defineProperty;
import { a as t, G as n, aC as r, aE as o, n as a, bb as s, aB as i, ba as l, F as c, c as d, j as m, b as u, aM as h, O as p, B as f, a5 as g, I as b, e as y, _ as v, V as x, M as N, bu as j, a4 as w, c9 as S, ah as T, ai as C, aj as A } from "./native-pet-CTNtZgMA.js";
import { r as I, j as E, b as k } from "./vendor-react-B2VXkTUV.js";
import { S as $, a6 as P, at as M, au as R, av as O, _ as D, aw as F, X as B, ax as L } from "./main-BO9xa-SQ.js";
import { S as U } from "./SmartDropdown-Blgtm2Dm.js";
import { b4 as H, X as z, bk as _, aH as G, E as W, aX as Y, u as J, a9 as V, O as q, I as K, V as X, an as Q, az as Z, cb as ee, b9 as te, cc as ne, a as re, r as oe, ap as ae, aY as se, x as ie, aR as le, at as ce, aj as de, H as me, cd as ue, a8 as he, q as pe, P as fe, al as ge, h as be, ce as ye, cf as ve, ae as xe } from "./vendor-lucide-DBv09HTV.js";
import { g as Ne } from "./imageGenWorldBook-BtUaGdHO.js";
import { c as je, b as we } from "./aiRadioService-B2ynJ5ER.js";
import { initForumTheme as Se, getActiveForumText as Te } from "./forumThemeService-CnIUGRXT.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
import "./modulepreload-polyfill-YP0FEG5d.js";
/* empty css                        */
import "./vendor-supabase-Bcpm_8qV.js";
/* empty css                     */
const Ce = ({
  onClose: e
}) => {
  const {
    t: c
  } = t();
  const [d, m] = I.useState(false);
  const [u, h] = I.useState(false);
  const [p, f] = I.useState("");
  const [g, b] = I.useState("");
  const [y, v] = I.useState("");
  const [x, N] = I.useState("openai");
  const [j, w] = I.useState(0.7);
  const [S, T] = I.useState(false);
  const [C, A] = I.useState(false);
  const [k, $] = I.useState([]);
  const [P, M] = I.useState(false);
  const [R, O] = I.useState(false);
  const [D, F] = I.useState(null);
  const [B, L] = I.useState("");
  const [K, X] = I.useState("");
  I.useEffect(() => {
    (async () => {
      const e = (await n.get("apiSettings")) || {};
      h(e.forumApiEnabled === true || e.forumApiEnabled === "true");
      f(e.forumApiUrl || "");
      b(e.forumApiKey || "");
      v(e.forumApiModel || "");
      N(e.forumApiType || e.apiType || "openai");
      w(typeof e.forumTemperature == "number" ? e.forumTemperature : 0.7);
      L(e.mainApiUrl || "");
      X(e.mainApiModel || "");
      m(true);
    })();
  }, []);
  I.useEffect(() => {
    if (!D) {
      return;
    }
    const e = setTimeout(() => F(null), 4000);
    return () => clearTimeout(e);
  }, [D]);
  const Q = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "12px",
    border: "1.5px solid #E2E8F0",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box",
    background: "#fff"
  };
  const Z = {
    fontSize: "12px",
    fontWeight: "700",
    color: "#4A5568",
    marginBottom: "6px",
    display: "block"
  };
  return E.jsx("div", {
    onClick: e,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      background: "rgba(0,0,0,0.5)",
      backdropFilter: "blur(6px)",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    },
    children: E.jsxs("div", {
      onClick: e => e.stopPropagation(),
      style: {
        background: "#fff",
        width: "100%",
        maxWidth: "480px",
        borderRadius: "24px 24px 0 0",
        padding: "20px 20px 32px",
        maxHeight: "90vh",
        overflowY: "auto",
        boxShadow: "0 -12px 32px rgba(0,0,0,0.12)"
      },
      children: [E.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px"
        },
        children: [E.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "10px"
          },
          children: [E.jsx("div", {
            style: {
              width: "36px",
              height: "36px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #FBC2EB 0%, #A18CD1 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: E.jsx(H, {
              size: 18,
              color: "#fff"
            })
          }), E.jsxs("div", {
            children: [E.jsx("div", {
              style: {
                fontSize: "16px",
                fontWeight: "800",
                color: "#2D3748"
              },
              children: c("forumApiTitle")
            }), E.jsx("div", {
              style: {
                fontSize: "11px",
                color: "#A0AEC0"
              },
              children: c("forumApiSubtitle")
            })]
          })]
        }), E.jsx("button", {
          onClick: e,
          style: {
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "#F7FAFC",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: E.jsx(z, {
            size: 16,
            color: "#718096"
          })
        })]
      }), d ? E.jsxs(E.Fragment, {
        children: [E.jsxs("div", {
          onClick: () => h(!u),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 16px",
            borderRadius: "14px",
            background: u ? "#FAF5FF" : "#F7FAFC",
            border: u ? "1.5px solid #D6BCFA" : "1.5px solid transparent",
            marginBottom: "16px",
            cursor: "pointer"
          },
          children: [E.jsxs("div", {
            style: {
              flex: 1
            },
            children: [E.jsx("div", {
              style: {
                fontSize: "14px",
                fontWeight: "700",
                color: "#2D3748"
              },
              children: c("forumApiEnableLabel")
            }), E.jsx("div", {
              style: {
                fontSize: "11px",
                color: "#718096",
                marginTop: "2px"
              },
              children: c(u ? "forumApiEnabledHint" : "forumApiDisabledHint")
            })]
          }), E.jsx("div", {
            style: {
              width: "44px",
              height: "26px",
              borderRadius: "13px",
              background: u ? "#9F7AEA" : "#CBD5E0",
              position: "relative",
              transition: "all 0.2s",
              flexShrink: 0
            },
            children: E.jsx("div", {
              style: {
                position: "absolute",
                top: "3px",
                left: u ? "21px" : "3px",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: "#fff",
                transition: "all 0.2s",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
              }
            })
          })]
        }), !u && B && E.jsxs("div", {
          style: {
            display: "flex",
            gap: "8px",
            padding: "10px 12px",
            background: "#F7FAFC",
            borderRadius: "10px",
            marginBottom: "16px",
            fontSize: "11px",
            color: "#4A5568",
            border: "1px dashed #CBD5E0"
          },
          children: [E.jsx(_, {
            size: 14,
            color: "#718096",
            style: {
              flexShrink: 0,
              marginTop: "1px"
            }
          }), E.jsxs("div", {
            style: {
              lineHeight: 1.5
            },
            children: [c("forumApiFallbackHint"), E.jsxs("div", {
              style: {
                marginTop: "4px",
                color: "#718096",
                fontSize: "10px",
                wordBreak: "break-all"
              },
              children: [B, K ? ` · ${K}` : ""]
            })]
          })]
        }), E.jsxs("div", {
          style: {
            opacity: u ? 1 : 0.5,
            pointerEvents: u ? "auto" : "none",
            transition: "opacity 0.2s"
          },
          children: [E.jsxs("div", {
            style: {
              marginBottom: "14px"
            },
            children: [E.jsx("label", {
              style: Z,
              children: c("forumApiTypeLabel")
            }), E.jsxs("select", {
              value: x,
              onChange: e => N(e.target.value),
              style: {
                ...Q,
                cursor: "pointer"
              },
              children: [E.jsx("option", {
                value: "openai",
                children: "OpenAI / Compatible"
              }), E.jsx("option", {
                value: "gemini",
                children: "Google Gemini"
              }), E.jsx("option", {
                value: "anthropic",
                children: "Anthropic Claude"
              }), E.jsx("option", {
                value: "custom",
                children: "Custom"
              })]
            })]
          }), E.jsxs("div", {
            style: {
              marginBottom: "14px"
            },
            children: [E.jsx("label", {
              style: Z,
              children: c("forumApiUrlLabel")
            }), E.jsx("input", {
              type: "text",
              value: p,
              onChange: e => f(e.target.value),
              placeholder: "https://api.openai.com/v1",
              style: Q,
              autoCapitalize: "off",
              autoCorrect: "off",
              spellCheck: false
            })]
          }), E.jsxs("div", {
            style: {
              marginBottom: "14px"
            },
            children: [E.jsx("label", {
              style: Z,
              children: c("forumApiKeyLabel")
            }), E.jsxs("div", {
              style: {
                position: "relative"
              },
              children: [E.jsx("input", {
                type: S ? "text" : "password",
                value: g,
                onChange: e => b(e.target.value),
                placeholder: "sk-...",
                style: {
                  ...Q,
                  paddingRight: "40px"
                },
                autoCapitalize: "off",
                autoCorrect: "off",
                spellCheck: false
              }), E.jsx("button", {
                type: "button",
                onClick: () => T(e => !e),
                style: {
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: S ? E.jsx(G, {
                  size: 16,
                  color: "#A0AEC0"
                }) : E.jsx(W, {
                  size: 16,
                  color: "#A0AEC0"
                })
              })]
            })]
          }), E.jsxs("div", {
            style: {
              marginBottom: "14px"
            },
            children: [E.jsxs("label", {
              style: {
                ...Z,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              },
              children: [E.jsx("span", {
                children: c("forumApiModelLabel")
              }), E.jsxs("button", {
                type: "button",
                onClick: async () => {
                  var e;
                  var t;
                  if (p && g) {
                    M(true);
                    try {
                      const n = r(p) ? o(p, g, {
                        "anthropic-beta": "models-2025-02-19"
                      }) : o(p, g);
                      const i = await a(s(p), {
                        method: "GET",
                        headers: n
                      });
                      if (!i.ok) {
                        throw new Error(`HTTP ${i.status}`);
                      }
                      const l = await i.json();
                      const d = ((e = l.data) == null ? undefined : e.map(e => e.id)) || ((t = l.models) == null ? undefined : t.map(e => e.id || e.name)) || [];
                      $(d);
                      if (d.length === 0) {
                        F({
                          type: "err",
                          text: c("forumApiNoModels")
                        });
                      } else {
                        F({
                          type: "ok",
                          text: `${c("forumApiFetchSuccess")} (${d.length})`
                        });
                        if (!y && d.length > 0) {
                          v(d[0]);
                        }
                      }
                    } catch (n) {
                      console.error("[ForumApiSettings] fetch models failed:", n);
                      F({
                        type: "err",
                        text: `${c("forumApiFetchFailed")}: ${n.message}`
                      });
                    } finally {
                      M(false);
                    }
                  } else {
                    F({
                      type: "err",
                      text: c("forumApiEnterInfoFirst")
                    });
                  }
                },
                disabled: P || !p || !g,
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "4px 10px",
                  borderRadius: "8px",
                  background: !P && p && g ? "#FAF5FF" : "#EDF2F7",
                  color: !P && p && g ? "#805AD5" : "#A0AEC0",
                  border: "none",
                  fontSize: "11px",
                  fontWeight: "700",
                  cursor: !P && p && g ? "pointer" : "not-allowed"
                },
                children: [P ? E.jsx(Y, {
                  size: 11,
                  style: {
                    animation: "spin 1s linear infinite"
                  }
                }) : E.jsx(J, {
                  size: 11
                }), c("forumApiFetchModels")]
              })]
            }), k.length > 0 ? E.jsx(U, {
              value: y,
              options: [{
                id: "",
                label: c("forumApiSelectModel"),
                value: ""
              }, ...k.map(e => ({
                id: e,
                label: e,
                value: e
              }))],
              onChange: e => v(e),
              style: {
                ...Q
              }
            }) : E.jsx("input", {
              type: "text",
              value: y,
              onChange: e => v(e.target.value),
              placeholder: "gpt-4o-mini / gemini-2.0-flash / claude-3-5-sonnet",
              style: Q,
              autoCapitalize: "off",
              autoCorrect: "off",
              spellCheck: false
            })]
          }), E.jsxs("div", {
            style: {
              marginBottom: "16px"
            },
            children: [E.jsxs("label", {
              style: Z,
              children: [c("forumApiTemperatureLabel"), " · ", j.toFixed(1)]
            }), E.jsx("input", {
              type: "range",
              min: 0,
              max: 2,
              step: 0.1,
              value: j,
              onChange: e => w(Number(e.target.value)),
              style: {
                width: "100%",
                accentColor: "#9F7AEA"
              }
            })]
          })]
        }), D && E.jsx("div", {
          style: {
            padding: "10px 12px",
            borderRadius: "10px",
            background: D.type === "ok" ? "#F0FFF4" : "#FFF5F5",
            border: "1px solid " + (D.type === "ok" ? "#9AE6B4" : "#FEB2B2"),
            color: D.type === "ok" ? "#276749" : "#C53030",
            fontSize: "12px",
            marginBottom: "12px",
            wordBreak: "break-all"
          },
          children: D.text
        }), E.jsxs("div", {
          style: {
            display: "flex",
            gap: "10px"
          },
          children: [E.jsxs("button", {
            type: "button",
            onClick: async () => {
              var e;
              var t;
              var n;
              if (p && g) {
                O(true);
                try {
                  const r = i(p);
                  const s = l({
                    apiUrl: r,
                    model: y || "gpt-3.5-turbo",
                    messages: [{
                      role: "user",
                      content: "Hi"
                    }],
                    temperature: 0.7,
                    stream: false,
                    maxTokens: 5
                  });
                  const d = await a(r, {
                    method: "POST",
                    headers: o(r, g),
                    body: JSON.stringify(s),
                    timeoutMs: 60000
                  });
                  if (!d.ok) {
                    const e = await d.text();
                    throw new Error(`HTTP ${d.status}: ${e.substring(0, 120)}`);
                  }
                  const m = await d.json();
                  const u = !!((e = m.choices) == null ? undefined : e.length) || !!((t = m.content) == null ? undefined : t.length) || !!((n = m.candidates) == null ? undefined : n.length);
                  F(u ? {
                    type: "ok",
                    text: c("forumApiTestSuccess")
                  } : {
                    type: "err",
                    text: c("forumApiTestAbnormal")
                  });
                } catch (r) {
                  console.error("[ForumApiSettings] test failed:", r);
                  F({
                    type: "err",
                    text: `${c("forumApiTestFailed")}: ${r.message}`
                  });
                } finally {
                  O(false);
                }
              } else {
                F({
                  type: "err",
                  text: c("forumApiEnterInfoFirst")
                });
              }
            },
            disabled: R || !u || !p || !g,
            style: {
              flex: 1,
              padding: "14px",
              borderRadius: "14px",
              background: "#F7FAFC",
              color: "#4A5568",
              border: "1.5px solid #E2E8F0",
              fontSize: "14px",
              fontWeight: "700",
              cursor: !R && u && p && g ? "pointer" : "not-allowed",
              opacity: !R && u && p && g ? 1 : 0.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px"
            },
            children: [R ? E.jsx(Y, {
              size: 16,
              style: {
                animation: "spin 1s linear infinite"
              }
            }) : E.jsx(V, {
              size: 16
            }), R ? c("forumApiTesting") || "Testing..." : c("forumApiTest")]
          }), E.jsxs("button", {
            onClick: async () => {
              if (!C) {
                A(true);
                try {
                  const t = (await n.get("apiSettings")) || {};
                  const r = e => typeof e == "string" ? e.trim() : e;
                  const o = {
                    ...t,
                    forumApiEnabled: u,
                    forumApiUrl: r(p),
                    forumApiKey: r(g),
                    forumApiModel: r(y),
                    forumApiType: x,
                    forumTemperature: Number(j) || 0.7
                  };
                  await n.set("apiSettings", o);
                  if (e != null) {
                    e();
                  }
                } catch (t) {
                  console.error("[ForumApiSettings] save failed:", t);
                  alert(c("forumApiSaveFailed") || "Save failed: " + ((t == null ? undefined : t.message) || t));
                } finally {
                  A(false);
                }
              }
            },
            disabled: C,
            style: {
              flex: 2,
              padding: "14px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #9F7AEA, #805AD5)",
              color: "#fff",
              border: "none",
              fontSize: "15px",
              fontWeight: "800",
              cursor: C ? "wait" : "pointer",
              opacity: C ? 0.6 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px"
            },
            children: [E.jsx(q, {
              size: 18
            }), C ? c("saving") || "Saving..." : c("forumApiSave")]
          })]
        }), E.jsx("style", {
          children: "@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }"
        })]
      }) : E.jsx("div", {
        style: {
          padding: "32px",
          textAlign: "center",
          color: "#A0AEC0",
          fontSize: "13px"
        },
        children: c("loading") || "Loading..."
      })]
    })
  });
};
const Ae = {
  lite: {
    postCount: 2,
    repliesPerPost: "2-4",
    reviveMaxPosts: 2,
    reviveRepliesPerPost: "3-6",
    fanficCount: 1
  },
  standard: {
    postCount: 5,
    repliesPerPost: "8-15",
    reviveMaxPosts: 5,
    reviveRepliesPerPost: "8-18",
    fanficCount: 3
  },
  rich: {
    postCount: 7,
    repliesPerPost: "12-22",
    reviveMaxPosts: 7,
    reviveRepliesPerPost: "14-24",
    fanficCount: 4
  }
};
const Ie = (e, t = "min", n) => {
  if (e <= 0) {
    return [];
  }
  const r = t === "hour" ? [600000, 5400000] : [30000, 300000];
  const o = [];
  let a = Date.now();
  for (let s = 0; s < e; s++) {
    o.push(a);
    a -= r[0] + Math.random() * (r[1] - r[0]);
  }
  o.reverse();
  return o;
};
const Ee = (e, t = "zh-Hant") => {
  if (!e || typeof e != "number" || isNaN(e)) {
    return "";
  }
  const n = Date.now() - e;
  if (n < 0) {
    if (t === "en") {
      return "just now";
    } else {
      return "剛剛";
    }
  }
  const r = Math.floor(n / 1000);
  const o = Math.floor(r / 60);
  const a = Math.floor(o / 60);
  const s = Math.floor(a / 24);
  if (t === "en") {
    if (r < 60) {
      return "just now";
    } else if (o < 60) {
      return `${o}m`;
    } else if (a < 24) {
      return `${a}h`;
    } else if (s < 30) {
      return `${s}d`;
    } else {
      return new Date(e).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
      });
    }
  } else if (r < 60) {
    return "剛剛";
  } else if (o < 60) {
    return `${o}分鐘前`;
  } else if (a < 24) {
    return `${a}小時前`;
  } else if (s < 30) {
    return `${s}天前`;
  } else {
    return new Date(e).toLocaleDateString("zh-TW", {
      month: "long",
      day: "numeric"
    });
  }
};
const ke = (e, t = "") => typeof e == "string" || typeof e == "number" ? e : t;
class $e extends Error {
  constructor(e, t, n = 0) {
    super(t);
    this.name = "ForumParseError";
    this.code = e;
    this.originalLength = n;
  }
}
const Pe = e => {
  const t = typeof e == "string" ? e : JSON.stringify(e) || "";
  const n = t.length;
  if (!t.trim()) {
    throw new $e("EMPTY", "Empty response from AI", 0);
  }
  let r = t.trim();
  r = r.replace(/^```(?:json)?\s*\n?/, "").replace(/\n?\s*```\s*$/, "").trim();
  if (!r.startsWith("{") && !r.startsWith("[")) {
    const e = r.indexOf("{");
    const t = r.indexOf("[");
    const o = e === -1 ? t : t === -1 ? e : Math.min(e, t);
    if (o === -1) {
      throw new $e("EMPTY", "Response contains no JSON object/array", n);
    }
    r = r.slice(o);
  }
  try {
    return JSON.parse(r);
  } catch (o) {
    let e = r;
    const t = Math.max(e.lastIndexOf("}"), e.lastIndexOf("]"));
    if (t > 0) {
      e = e.slice(0, t + 1);
    }
    let s = false;
    let i = false;
    const l = {
      "{": 0,
      "[": 0
    };
    for (const n of e) {
      if (i) {
        i = false;
      } else if (n !== "\\") {
        if (n !== "\"") {
          if (!s) {
            if (n === "{") {
              l["{"]++;
            } else if (n === "}") {
              l["{"]--;
            } else if (n === "[") {
              l["["]++;
            } else if (n === "]") {
              l["["]--;
            }
          }
        } else {
          s = !s;
        }
      } else {
        i = true;
      }
    }
    const c = s || l["{"] > 0 || l["["] > 0;
    if (s) {
      e += "\"";
    }
    for (let n = 0; n < l["["]; n++) {
      e += "]";
    }
    for (let n = 0; n < l["{"]; n++) {
      e += "}";
    }
    try {
      const t = JSON.parse(e);
      console.warn("[Forum] JSON was truncated/malformed, auto-repaired");
      return t;
    } catch (a) {
      const e = c ? "TRUNCATED" : "MALFORMED";
      const t = c ? `Output appears truncated at ~${n} chars (likely hit max_tokens)` : `JSON syntax error: ${o.message}`;
      throw new $e(e, t, n);
    }
  }
};
const Me = (e, t) => {
  if (e && e.name === "ForumParseError") {
    switch (e.code) {
      case "EMPTY":
        return t("forumErrorEmptyResponse");
      case "TRUNCATED":
        return t("forumErrorTruncated");
      case "MALFORMED":
        return t("forumErrorMalformed");
      default:
        return t("forumErrorParseFailed");
    }
  }
  const n = (e == null ? undefined : e.message) || "Unknown error";
  if (/timeout|abort/i.test(n)) {
    return t("forumErrorTimeout");
  } else if (/network|fetch|ECONN/i.test(n)) {
    return t("forumErrorNetwork");
  } else {
    return t("forumErrorGenerateFailed", {
      msg: n
    });
  }
};
const Re = /情侶|戀人|愛人|暧昧|曖昧|喜歡|愛|lover|couple|crush|dating|romantic|partner|beloved|spouse|fiancé|fiancée|男友|女友|老婆|老公|伴侶|心上人|甜心|darling|soulmate/i;
const Oe = (e, t = [], n = []) => {
  const r = [];
  const o = new Set();
  for (const a of e) {
    for (const t of a.relationships || []) {
      if (!Re.test(t.label)) {
        continue;
      }
      const n = e.find(e => e.id === t.targetId);
      if (!n) {
        continue;
      }
      const s = [a.id, n.id].sort().join("_");
      if (!o.has(s)) {
        o.add(s);
        r.push({
          a: a.name,
          b: n.name,
          label: t.label,
          type: "char_x_char"
        });
      }
    }
  }
  for (const a of t) {
    const t = a.relationship || "";
    const o = a.charToUserRelationship || "";
    if (!Re.test(t) && !Re.test(o)) {
      continue;
    }
    const s = e.find(e => String(e.id) === String(a.characterId));
    const i = n.find(e => String(e.id) === String(a.userId));
    if (s && i) {
      r.push({
        a: i.name || i.nickname || "User",
        b: s.name,
        label: `${t}/${o}`.replace(/^\/|\/$/g, ""),
        type: "user_x_char"
      });
    }
  }
  return r;
};
const De = e => String(e || "").normalize("NFC").replace(/[​-‍﻿]/g, "").trim().toLowerCase().replace(/\s+/g, "");
const Fe = (e, t) => {
  if (!e || !t) {
    return null;
  }
  const n = De(t);
  return n && e.find(e => De(e.name) === n) || null;
};
const Be = (e, t) => !!Fe(e, t);
const Le = (e, t) => {
  const n = De(e);
  const r = De(t);
  return !!n && n === r;
};
const Ue = e => {
  if (!e || typeof e != "string") {
    return null;
  }
  const t = e.split(/\s*[×&＆]\s*|\s+[xX]\s+|\s+(?:与|與|和)\s+/).map(e => e.trim()).filter(Boolean);
  if (t.length < 2) {
    return null;
  } else {
    return [t[0], t[1]];
  }
};
const He = (e, t = [], n = []) => {
  const r = Ue(e);
  if (!r) {
    return true;
  }
  const [o, a] = r.map(De);
  const s = new Set(n.filter(Boolean).map(De));
  return !!s.has(o) || !!s.has(a) || t.some(e => {
    const t = De(e.a);
    const n = De(e.b);
    return t === o && n === a || t === a && n === o;
  });
};
const ze = /明星|偶像|演員|歌手|藝人|網紅|KOL|idol|celebrity|star|singer|actor|actress|influencer|model|模特|主播|rapper|dancer|舞者|導演|director|公眾人物|名人|天王|天后|巨星|superstar|famous|renowned|知名/i;
const _e = /醫生|醫師|doctor|教授|professor|老師|teacher|律師|lawyer|警察|police|法官|judge|官員|大臣|minister|將軍|general|隊長|captain|班長|會長|社長|president|CEO|boss|主管|manager|leader|領袖|長老|elder|族長|chief/i;
const Ge = /作家|writer|畫家|painter|artist|藝術家|詩人|poet|音樂家|musician|攝影師|photographer|設計師|designer|廚師|chef|cook/i;
const We = /程式|programmer|工程師|engineer|開發|developer|科學家|scientist|研究員|researcher|hacker|駭客/i;
const Ye = (e, t = {}) => {
  const {
    maxDescLen: n = 0,
    forPromptLine: r = false,
    worldBooks: o = []
  } = t;
  let a = e.description || "";
  if (n > 0 && a.length > n) {
    a = a.slice(0, n) + "…";
  }
  const s = [];
  if (e.gender) {
    s.push(`gender: ${e.gender}`);
  }
  if (e.role) {
    s.push(`role/occupation: "${e.role}"`);
  }
  if (e.birthday) {
    s.push(`birthday: ${e.birthday}`);
  }
  const i = s.length > 0 ? s.join(", ") : "";
  let l = "";
  if (o.length > 0) {
    const t = Array.isArray(e.worldBook) ? e.worldBook : [];
    const n = o.filter(e => {
      if (!e) {
        return false;
      }
      const n = e.isGlobal === true || e.isGlobal === "true";
      const r = t.some(t => String(t) === String(e.id));
      return n || r;
    });
    if (n.length > 0) {
      const e = n.flatMap(e => (e.entries || []).filter(e => !!e && !!e.content && !e.disable && e.enabled !== false && e.type !== "imagegen"));
      if (e.length > 0) {
        l = [...e.filter(e => e.constant), ...e.filter(e => !e.constant).sort(() => Math.random() - 0.5)].slice(0, 3).map(e => `[${e.name}]: ${e.content.slice(0, 200)}`).join("\n");
      }
    }
  }
  if (r) {
    let t = `- realName: "${e.name}"`;
    if (i) {
      t += `, ${i}`;
    }
    t += `\n  persona: "${a || "no description"}"`;
    if (l) {
      t += `\n  world knowledge:\n  ${l.replace(/\n/g, "\n  ")}`;
    }
    return t;
  }
  let c = a || "no description";
  if (l) {
    c += `\n\nWorld/setting knowledge:\n${l}`;
  }
  return c;
};
const Je = {
  chat: {
    personality: "outgoing"
  },
  daily: {
    personality: "warm"
  },
  question: {
    personality: "reserved"
  },
  creator: {
    personality: "creative"
  },
  whisper: {
    personality: "reserved"
  }
};
const Ve = {
  chat: {
    nameKey: "forumBoardChat",
    descKey: "forumBoardChatDesc",
    icon: "💬"
  },
  daily: {
    nameKey: "forumBoardDaily",
    descKey: "forumBoardDailyDesc",
    icon: "☀️"
  },
  question: {
    nameKey: "forumBoardQuestion",
    descKey: "forumBoardQuestionDesc",
    icon: "❓"
  },
  creator: {
    nameKey: "forumBoardCreator",
    descKey: "forumBoardCreatorDesc",
    icon: "🎨"
  },
  whisper: {
    nameKey: "forumBoardWhisper",
    descKey: "forumBoardWhisperDesc",
    icon: "🤫"
  }
};
const qe = ["chat", "daily", "question", "creator", "whisper"];
const Ke = [];
const Xe = ["Nala", "Mimi", "Felix", "Luna", "Bear", "Coco", "Tofu", "Mochi", "Kiki", "Latte", "Maple", "Peach", "Cloud", "Star", "Snow", "Boba", "Pudding", "Mocha", "Waffle", "Cookie", "Taro", "Matcha", "Sakura", "Honey", "Pepper", "Ginger", "Basil", "Olive", "Sage", "Mint"].map(e => $(e));
const Qe = e => `## LANGUAGE (MANDATORY): ALL content MUST be in ${e === "en" ? "English" : e === "zh-Hans" ? "Simplified Chinese (简体中文)" : "Traditional Chinese (繁體中文)"}.${e === "zh-Hans" ? " Use 简体字 ONLY — never use 繁體字. Example: 这/们/说/对/会, NOT 這/們/說/對/會." : e === "zh-Hant" ? " Use 繁體字 ONLY." : ""}`;
const Ze = "\n## IDENTITY ISOLATION\nScreen names hide real identity. \"rosterId\" is system-internal — never public.\n- No real names in posts/replies, no identity guessing (\"aren't you actually XXX?\")\n- Roster chars don't recognize other roster chars\n- React to content, not hidden identity\n- Exceptions: (A) post self-reveals; (B) acquaintance recognition — see USER block if present.";
const et = "\n## CRITICAL — This is 同人二次創作 (Fanfiction), NOT Real Events:\n- Fanfic is FICTIONAL creative writing by fans. Events described NEVER actually happened.\n- Characters in the story did NOT really do these things.\n- Readers/commenters MUST react to the STORY and WRITING, not as if real events happened.\n  → Good: \"寫得好棒！\", \"這段好甜\", \"催更！\", \"文筆太好了\"\n  → NEVER: \"你們真的這樣嗎？\", \"原來他們在一起了\" — treating fiction as fact";
const tt = e => e ? "- If a roster character appears as a commenter and the fic is ABOUT them, they react as someone reading fiction about themselves — amused, flustered, playfully protesting — NEVER confirming events as real.\n  → Example: \"...又被寫了 😳\", \"你們的想像力也太豐富了吧\" — NOT \"沒錯我們確實這樣\"" : "- IMPORTANT: Characters who are the SUBJECT of this fanfic MUST NOT appear as commenters or repliers. Only uninvolved roster characters, the author, and random forum NPCs may comment.";
const nt = (e = "zh-Hant") => {
  const t = new Date();
  const n = t.getFullYear();
  const r = t.getMonth() + 1;
  const o = t.getDate();
  const a = ["日", "一", "二", "三", "四", "五", "六"][t.getDay()];
  const s = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][t.getDay()];
  return `\n## 🕐 CURRENT TIME\nToday: ${n}-${String(r).padStart(2, "0")}-${String(o).padStart(2, "0")} (${e === "en" ? s : `週${a}`})\n\nUSAGE: Let time exist naturally in posts when it fits the board's world. Don't force real-world dates onto fantasy/sci-fi/historical boards — judge based on the board's setting.`;
};
const rt = (e, t) => {
  if (!e || e < 0) {
    return "";
  }
  const n = e < 300 ? "micro" : e < 1500 ? "small" : e < 8000 ? "mid" : e < 30000 ? "large" : "mega";
  return `\n## 📊 BOARD SCALE — "${t}" (${n})\n${{
    micro: `~${e} members — TINY niche community. Everyone half-knows each other, inside jokes are everywhere, callbacks to past drama, regulars dominate, low-volume but high-warmth.`,
    small: `~${e} members — small cozy board. Regulars recognize each other, some lurkers, friendly tone, decent engagement.`,
    mid: `~${e} members — medium-sized active board. Mix of regulars and randoms, threads can get heated, moderate engagement.`,
    large: `~${e} members — popular board. Lots of strangers, fast pacing, hot takes spread fast, posts can blow up or sink fast.`,
    mega: `~${e} members — massive board. Mostly strangers, viral dynamics, drama spreads fast, mods overworked, engagement counts can be huge or zero.`
  }[n]}\nSCALE EFFECT on output:\n- Like / view / reply counts should reflect this scale (mega boards: 3-digit likes possible; micro boards: single-digit likes normal)\n- Tone shifts: micro = familiar warmth; mega = stranger energy, more bait/drama/hot-takes\n- Roster char visibility scales DOWN on mega boards (lost in the crowd) and UP on micro (regulars)`;
};
const ot = {
  chat: {
    boardPrompt: "## Board: Chat & Chill (闲聊灌水)\nChaotic, zero-filter zone. Group chat with 500 people energy.\nTONE: Unhinged casual. Shitposting. Stream-of-consciousness. Brain-rot humor.\nTOPICS: Hot takes, \"does anyone else...\", tier lists, 3am thoughts, bait posts, meme text, meta-commentary\nPOST LENGTH: 30-120 chars. SHORT.\nREPLY STYLE: Chaotic. One-word reactions, quote-dunking, \"+1\", tangent spirals, inside jokes, \"skill issue\""
  },
  daily: {
    boardPrompt: "## Board: Daily Life (日常分享)\nWarm, cozy corner. Real moments from the day.\nTONE: Personal, warm, sometimes mundane-in-a-good-way.\nTOPICS: Food diaries, OOTD, pet moments, commute stories, small victories, mood journals, cozy routines\nPOST LENGTH: 80-250 chars. Descriptive, sensory details.\nREPLY STYLE: Supportive. \"jealous!\", sharing experiences, recipe requests, genuine curiosity"
  },
  question: {
    boardPrompt: "## Board: Q&A (问答互助)\nHelp desk. People come with problems and leave with answers.\nTONE: Earnest. Casual curiosity to \"please help I'm desperate\".\nTOPICS: Technical how-to, recommendations, troubleshooting, \"is this normal?\", decision paralysis, etiquette questions\nPOST LENGTH: 60-200 chars. Clear problem statement.\nREPLY STYLE: Helpful but varied. Step-by-step answers, one-liner solutions, \"same +1\", corrections, debates, snarky \"just google it\""
  },
  creator: null,
  whisper: {
    boardPrompt: "## Board: Whispers (悄悄话)\nAnonymous confessional. Raw, unfiltered, messy.\nTONE: Vulnerable, gossipy, cathartic, wide emotional range.\nTOPICS: Secret crushes (NPCs only, NOT roster chars unless verified CP), regrets, unpopular opinions, workplace drama, guilty pleasures, moral dilemmas, gossip, late-night dumps\nPOST LENGTH: 60-200 chars. Emotionally charged. Raw.\nANON RATIO: 70-80% anonymous.\nREPLY STYLE: Judgment-free. \"hugs\", \"I feel this\", similar confessions, gentle advice, \"spill more tea\""
  }
};
const at = (e, t, n, r = [], o = "zh-Hant", a = true, s = {
  fanficCount: 3,
  repliesPerPost: "8-15"
}) => {
  const i = r.filter(e => {
    var t;
    return e.boardId === "creator" && ((t = e.fanficMeta) == null ? undefined : t.series);
  }).reduce((e, t) => {
    e[t.fanficMeta.series] ||= [];
    e[t.fanficMeta.series].push(t);
    return e;
  }, {});
  const l = Object.keys(i);
  const c = t.filter(e => e.type === "user_x_char");
  const d = t.filter(e => e.type !== "user_x_char");
  const m = e => e.map(e => `- ${e.a} × ${e.b} (${e.label})`).join("\n");
  const u = t.length > 0 ? `\n## 🚨 CP Whitelist — VERIFIED ROMANTIC RELATIONSHIPS ONLY\n${c.length > 0 ? `### ⭐ User×Character pairs (HIGHEST PRIORITY — feature these prominently):\n${m(c)}\n` : ""}${d.length > 0 ? `### Character×Character pairs:\n${m(d)}\n` : ""}\nCP COMPOSITION RULE — every fanfic with a romantic angle must pull its pairing from the whitelist above. Treat "the relationship chart" as canon.\n\nStance toward pairings outside the whitelist:\n- Two roster characters whose relationship is friend / colleague / rival / family / stranger → write them as friends / colleagues / rivals / family / strangers. Their dynamic is interesting on its own without romance.\n- Roster character × random NPC → does not exist as a canon pairing. NPCs are forum readers, not love interests.\n- "What if these two got together" speculation → keep it OUT of fanfic posts (that's whisper-board territory, not creator board).\n\nFormat contrast for a fanfic featuring two roster characters:\n✅ cpTag matches a whitelist pair exactly (e.g. user pair shown above, or a whitelisted char×char pair)\n✅ cpTag = null, fanficMeta.type = "oneshot" or "discussion" — friendship / adventure / character study, no romance\n❌ cpTag invents a pairing between two roster characters whose canon relationship is non-romantic\n❌ cpTag pairs a roster character with an NPC / random forum user / OC\n❌ A fic labeled as discussion/gen that secretly writes a non-whitelisted pair as romantic in the body\n\nWhen in doubt: write gen-fic (no CP) instead of inventing a pairing. Quality non-CP fanfic > fabricated CP.\n\n${c.length > 0 ? `Quota target: at least ${Math.max(1, Math.ceil(s.fanficCount / 2))} of the ${s.fanficCount} posts should feature a User×Character pair from the whitelist above. The user is the protagonist of this app's story — their canon CPs deserve top billing.` : ""}` : "\n## CP Status: NO VERIFIED CP PAIRS EXIST\nThe relationship chart has no romantic pairings registered. Therefore:\n- Generate gen-fic only (cpTag must be null on every post): character studies, friendship, adventure, slice-of-life, \"what if\" non-romantic scenarios.\n- Do NOT invent romantic pairings. A non-romantic relationship in canon stays non-romantic in fic.\n- Roster character × random NPC romance does not exist either.\n\nQuality non-CP fanfic is the goal here — focus on character voice, world-building, emotional beats outside romance.";
  const h = l.length > 0 ? `\n## Existing Series (DO NOT REUSE THESE NAMES for new works):\n${l.map(e => {
    var t;
    const n = i[e];
    return `- "${e}" — ${n.length} ch, latest: ch${((t = n[n.length - 1].fanficMeta) == null ? undefined : t.chapter) || 1}`;
  }).join("\n")}\nAT MOST ONE post in this batch may continue an existing series above, AND only if it genuinely advances to the NEXT chapter number (e.g. existing latest ch3 → new ch4). All other posts MUST be brand-new works with completely different series names. Do NOT generate another "Chapter 1" of an existing series.` : "";
  return `You are a forum post generator for a FANFICTION (同人二次創作) board.\nGenerate ${s.fanficCount} posts.\n\n${Qe(o)}\n${et}\n${tt(a)}\n\n## CRITICAL — Independence Rules (STRICTLY ENFORCED):\n- Each of the ${s.fanficCount} posts MUST be an INDEPENDENT, STANDALONE work by a different author.\n- Do NOT split one story into multiple posts. Do NOT generate sequential chapters of the SAME series in this batch.\n- Every post MUST have a UNIQUE series title (or no series at all). Two posts sharing the same "fanficMeta.series" value is FORBIDDEN.\n- Title field MUST NOT contain chapter numbers, fractions like "(3/3)", "(4/10)", or "01"/"02" suffixes. Chapter info belongs ONLY in fanficMeta.chapter.\n- Vary the CP pairing, tone, theme, and author pen name across posts — they should feel like ${s.fanficCount} different writers, not one writer's serialized work.\n\n## Content Types (MUST mix — do NOT make all ${s.fanficCount} posts 連載):\n1. **連載** — Chapter of longer story. 500-1000 chars prose. Unique series title, chapter number, "TBC". 1 author reply + 8-15 reader replies. AT MOST ${Math.max(1, Math.ceil(s.fanficCount / 2))} of the ${s.fanficCount} posts may be 連載.\n2. **短篇** — Complete one-shot. 500-1200 chars. Clear beginning, arc, ending. All reader comments. At least one post should be this type.\n3. **同人討論** — Character analysis, headcanons, "what if". 100-300 chars. Lively discussion.\n\n## Writing Quality:\n- Actual fiction: scene-setting, dialogue, internal monologue, sensory details\n- Show don't tell, pacing, tension, emotional beats\n- LENGTH IS CRITICAL: substantial content, not thin summaries\n${u}\n${h}\n\n## Characters Available (as subjects of fanfic):\n${e.length > 0 ? e.join("\n") : "No roster characters — use original characters."}\n${n}\n\n## Author Identity — pen names only\n- ALL authors use pen names: "月下執筆", "星塵寫手", "InkAndAshes"\n- Roster characters CAN be authors too, using pen names. Set "rosterId" to realName.\n- Readers/commenters also use screen names, never real names\n\n## Output JSON — PURE JSON, no markdown:\n{\n  "posts": [\n    {\n      "title": "Post title with [連載]/[短篇]/[討論] prefix — NO chapter numbers, NO '(N/N)', NO '01'/'02' suffix in title",\n      "boardId": "creator",\n      "authorName": "Pen name (each post a DIFFERENT pen name)",\n      "rosterId": "realName or null",\n      "mood": "emoji + mood text",\n      "content": "Fanfic text — 連載 500-1000, 短篇 500-1200, 討論 100-300 chars",\n      "imageText": "optional 15-60 char VISUAL DESCRIPTION of an attached photo (subject+scene, NOT a quote/text screenshot); null if not needed",\n      "isAnon": false,\n      "timeLabel": "relative time",\n      "fanficMeta": { "type": "serial|oneshot|discussion", "series": "UNIQUE series title (must differ from every other post in this batch and from Existing Series above), or null for 短篇/討論", "chapter": 1, "cpTag": "A × B or null", "wordCount": 700 },\n      "interactions": [\n        { "author": "screen name", "rosterId": "realName or null", "content": "reply (15-80 chars for comments, 100-300 for author updates)", "isAnon": false, "isAuthorUpdate": false }\n      ]\n    }\n  ]\n}\n\nREMINDER before output: scan your "posts" array — if any two posts share the same fanficMeta.series, REWRITE one of them with a different series name. If any title contains "(N/N)" or chapter digits, STRIP those out.`;
};
const st = (e, t = []) => {
  if (!Array.isArray(e)) {
    return e;
  }
  const n = new Set(t.map(e => String(e).trim().toLowerCase()).filter(Boolean));
  return e.map(e => {
    var t;
    if (!e || typeof e != "object") {
      return e;
    }
    const r = {
      ...e
    };
    if (typeof r.title == "string") {
      const e = typeof (o = r.title) != "string" ? o : o.replace(/[（(]\s*\d+\s*[\/／]\s*\d+\s*[）)]/g, "").replace(/[（(]\s*第?\s*\d+\s*(?:章|话|話|回|篇)\s*[）)]/g, "").replace(/\s*[-—–]\s*(?:Ch\.?|Chapter|第)\s*\d+\s*(?:章|话|話)?\s*$/i, "").replace(/\s+0\d\s*$/, "").replace(/\s{2,}/g, " ").trim();
      if (e) {
        r.title = e;
      }
    }
    var o;
    const a = (t = r.fanficMeta) == null ? undefined : t.series;
    if (a && typeof a == "string") {
      const e = a.trim().toLowerCase();
      if (e) {
        if (n.has(e)) {
          r.fanficMeta = {
            ...r.fanficMeta,
            series: null,
            chapter: null
          };
        } else {
          n.add(e);
        }
      } else {
        r.fanficMeta = {
          ...r.fanficMeta,
          series: null
        };
      }
    }
    return r;
  });
};
const it = ({
  text: e,
  aspectRatio: t = "16/9"
}) => E.jsxs("div", {
  style: {
    width: "100%",
    height: "100%",
    aspectRatio: t,
    position: "relative",
    background: "linear-gradient(135deg, #d4d8e0 0%, #e8c8c8 35%, #f0d8b0 70%, #c0d8e8 100%)",
    borderRadius: 8,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    gap: 8
  },
  children: [E.jsx("div", {
    style: {
      position: "absolute",
      top: "20%",
      left: "15%",
      width: 80,
      height: 80,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.35)",
      filter: "blur(20px)"
    }
  }), E.jsx("div", {
    style: {
      position: "absolute",
      bottom: "15%",
      right: "20%",
      width: 100,
      height: 100,
      borderRadius: "50%",
      background: "rgba(255,200,180,0.4)",
      filter: "blur(24px)"
    }
  }), E.jsx("div", {
    style: {
      background: "rgba(255,255,255,0.85)",
      padding: 10,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      zIndex: 1
    },
    children: E.jsx(K, {
      size: 20,
      color: "#666"
    })
  }), E.jsx("div", {
    style: {
      background: "rgba(255,255,255,0.92)",
      padding: "8px 14px",
      borderRadius: 999,
      fontSize: 12,
      color: "#444",
      textAlign: "center",
      maxWidth: "85%",
      wordBreak: "break-word",
      lineHeight: 1.4,
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      zIndex: 1
    },
    children: e
  }), E.jsx("div", {
    style: {
      position: "absolute",
      top: 8,
      right: 8,
      background: "rgba(0,0,0,0.5)",
      color: "#fff",
      fontSize: 10,
      padding: "2px 6px",
      borderRadius: 4,
      fontWeight: 600,
      letterSpacing: 0.5,
      zIndex: 2
    },
    children: "IMG"
  })]
});
const lt = e => {
  const t = Array.isArray(e.images) ? e.images : [];
  if (t.length === 0) {
    return null;
  } else {
    return E.jsx("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 6,
        marginTop: 6
      },
      children: t.map((e, t) => E.jsx("div", {
        style: {
          width: 160,
          height: 100,
          borderRadius: 8,
          overflow: "hidden",
          background: "#eee"
        },
        children: e.startsWith("txt:") ? E.jsx(it, {
          text: e.substring(4),
          aspectRatio: "16/10"
        }) : E.jsx("img", {
          decoding: "async",
          src: e,
          alt: "",
          style: {
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }
        })
      }, t))
    });
  }
};
const ct = ({
  viewedPost: e,
  DUMMY_POSTS: t,
  commentSort: n,
  setCommentSort: r,
  isGeneratingReplies: o,
  replyTarget: a,
  setReplyTarget: s,
  commentInput: i,
  setCommentInput: l,
  commentAnon: c,
  setCommentAnon: d,
  renderPost: m,
  handleAIAutoReply: u,
  handleSubmitComment: h,
  handleReplyToFloor: p,
  handleOpenProfile: f,
  getRoleBadge: g,
  startLongPress: b,
  cancelLongPress: y,
  getNpcAvatar: v,
  resolveAvatar: x,
  t: N,
  commentImages: j,
  setCommentImages: w,
  onOpenCommentImagePicker: S,
  allStickers: T
}) => {
  if (!e) {
    return null;
  }
  const C = t.find(t => t.id === e.id) || e;
  return E.jsxs("div", {
    className: "forum-view scrollable post-detail-view nuo-forum-post-detail-view",
    children: [m(C, true), E.jsxs("div", {
      className: "post-detail-comments nuo-forum-comments",
      children: [E.jsxs("div", {
        className: "comments-header nuo-forum-comments-header",
        children: [E.jsx("h4", {
          children: N("forumCommentsHeader", {
            count: C.interactions.length
          })
        }), E.jsxs("div", {
          className: "comments-sort",
          children: [E.jsx("button", {
            className: "comments-sort-btn " + (n === "hot" ? "active" : ""),
            onClick: () => r("hot"),
            children: N("forumCommentSortHot")
          }), E.jsx("button", {
            className: "comments-sort-btn " + (n === "new" ? "active" : ""),
            onClick: () => r("new"),
            children: N("forumCommentSortNew")
          })]
        })]
      }), (() => {
        const e = C.interactions.map((e, t) => ({
          ...e,
          _origIdx: t
        }));
        if (n === "new") {
          return [...e].reverse();
        } else {
          return e;
        }
      })().map(e => {
        var t;
        const n = e._origIdx;
        return E.jsx("div", {
          className: `comment-thread nuo-forum-comment ${e.isAuthorUpdate ? "author-update-thread" : ""} ${e.isUserPost ? "user-post-thread" : ""} ${e.isModAction ? "mod-action-thread" : ""} ${e.role === "mod" ? "mod-reply-thread" : ""}`,
          onPointerDown: e => b({
            type: "floor",
            postId: C.id,
            floorIdx: n
          }, e),
          onPointerUp: y,
          onPointerLeave: y,
          children: e.isModAction ? E.jsxs(E.Fragment, {
            children: [E.jsxs("div", {
              className: "mod-action-icon",
              children: [e.modActionType === "lock" && E.jsx(X, {
                size: 16
              }), e.modActionType === "warning" && E.jsx(Q, {
                size: 16
              }), e.modActionType === "pin" && E.jsx(Z, {
                size: 16
              }), e.modActionType === "announce" && E.jsx(ee, {
                size: 16
              }), !e.modActionType && E.jsx(te, {
                size: 16
              })]
            }), E.jsxs("div", {
              className: "comment-body mod-action-body",
              children: [E.jsxs("div", {
                className: "comment-author-row",
                children: [E.jsx("span", {
                  className: "comment-author mod-author",
                  children: ke(e.author, "NPC")
                }), E.jsxs("span", {
                  className: "role-badge role-mod",
                  children: [E.jsx(te, {
                    size: 10
                  }), " ", N("forumRoleMod")]
                }), E.jsxs("span", {
                  className: `mod-action-type-badge mod-action-${e.modActionType || "general"}`,
                  children: [e.modActionType === "lock" && N("forumModActionLock"), e.modActionType === "warning" && N("forumModActionWarning"), e.modActionType === "pin" && N("forumModActionPin"), e.modActionType === "announce" && N("forumModActionAnnounce"), !e.modActionType && N("forumModActionGeneral")]
                })]
              }), E.jsx("div", {
                className: "comment-content mod-action-content",
                children: ke(e.content, "")
              }), E.jsxs("div", {
                className: "comment-actions",
                children: [E.jsx("span", {
                  className: "comment-floor",
                  children: N("forumCommentFloor", {
                    n: n + 1
                  })
                }), E.jsx("span", {
                  children: e.timestamp ? Ee(e.timestamp, N("forumAiContentLang")) : ke(e.time, "") || N("forumTimeJustNow")
                })]
              })]
            })]
          }) : E.jsxs(E.Fragment, {
            children: [e.isAnon ? E.jsx("div", {
              className: "comment-avatar anon-avatar",
              children: "?"
            }) : E.jsx("img", {
              decoding: "async",
              src: x(e.rosterId, e.author),
              alt: "author",
              className: "comment-avatar " + (e.role === "mod" ? "mod-avatar-ring" : ""),
              onClick: () => f({
                name: e.author,
                avatar: x(e.rosterId, e.author),
                role: e.role,
                level: Math.floor(Math.random() * 15) + 1,
                rosterId: e.rosterId || null
              }),
              style: {
                cursor: "pointer"
              }
            }), E.jsxs("div", {
              className: "comment-body",
              children: [E.jsxs("div", {
                className: "comment-author-row",
                children: [E.jsx("span", {
                  className: e.isAnon ? "comment-author comment-anon" : "comment-author " + (e.role === "mod" ? "mod-author" : ""),
                  children: ke(e.author, "NPC")
                }), e.isAnon && E.jsx("span", {
                  className: "anon-badge",
                  children: N("forumAnon")
                }), !e.isAnon && !e.isAuthorUpdate && e.author === ((t = C.author) == null ? undefined : t.name) && E.jsx("span", {
                  className: "op-badge",
                  children: "OP"
                }), e.isAuthorUpdate && E.jsx("span", {
                  className: "author-update-badge",
                  children: N("forumFanficAuthorUpdate")
                }), e.isUserPost && E.jsx("span", {
                  className: "user-post-badge",
                  children: "You"
                }), !e.isAnon && g(e.role)]
              }), e.replyTo && e.replyTo.author && (() => {
                const t = e.replyTo.floor;
                const n = (C == null ? undefined : C.interactions) || [];
                const r = t != null && t >= 1 ? n[t - 1] : null;
                const o = r && r.isAnon ? N("forumAnonName") : ke(e.replyTo.author, "");
                return E.jsxs("div", {
                  className: "comment-reply-to",
                  children: ["↩ @", o, t != null ? ` #${t}` : ""]
                });
              })(), E.jsxs("div", {
                className: "comment-content " + (e.isAuthorUpdate ? "author-update-content" : ""),
                children: [ke(e.content, ""), lt(e)]
              }), E.jsxs("div", {
                className: "comment-actions",
                children: [E.jsx("span", {
                  className: "comment-floor",
                  children: N("forumCommentFloor", {
                    n: n + 1
                  })
                }), E.jsx("span", {
                  children: e.timestamp ? Ee(e.timestamp, N("forumAiContentLang")) : ke(e.time, "") || N("forumTimeJustNow")
                }), E.jsxs("span", {
                  className: "comment-vote",
                  children: [E.jsx(ne, {
                    size: 11
                  }), " ", Math.floor(Math.random() * (e.isAuthorUpdate ? 30 : 5)) + 1]
                }), !C.isLocked && E.jsx("span", {
                  className: "comment-reply-btn",
                  onClick: () => p(e, n),
                  children: N("forumCommentReply")
                })]
              })]
            })]
          })
        }, n);
      }), C.interactions.length === 0 && !o && E.jsxs("div", {
        className: "center-msg",
        style: {
          padding: "30px 20px",
          opacity: 0.5
        },
        children: [E.jsx(H, {}), E.jsx("p", {
          children: N("forumNoRepliesEmpty")
        })]
      }), o && E.jsxs("div", {
        className: "comment-thread",
        style: {
          justifyContent: "center",
          opacity: 0.6,
          padding: "12px"
        },
        children: [E.jsx(re, {
          size: 16,
          className: "spin"
        }), E.jsx("span", {
          style: {
            fontSize: "0.8rem",
            color: "#888",
            marginLeft: 8
          },
          children: N("forumNPCReplying")
        })]
      })]
    }), C.isLocked && E.jsxs("div", {
      className: "post-locked-notice",
      children: [E.jsx(X, {
        size: 14
      }), E.jsx("span", {
        children: N("forumPostLockedNotice")
      })]
    }), E.jsxs("div", {
      className: "comment-input-bar nuo-forum-comment-input",
      children: [a && !C.isLocked && E.jsxs("div", {
        className: "reply-target-indicator",
        children: [E.jsxs("span", {
          children: ["↩ @", ke(a.author, ""), " #", a.floor]
        }), E.jsx("button", {
          className: "reply-target-close",
          onClick: () => {
            s(null);
            l("");
          },
          children: "✕"
        })]
      }), Array.isArray(j) && j.length > 0 && E.jsx("div", {
        style: {
          display: "flex",
          gap: 6,
          padding: "4px 8px"
        },
        children: j.map((e, t) => E.jsxs("div", {
          style: {
            position: "relative",
            width: 64,
            height: 64,
            borderRadius: 6,
            overflow: "hidden",
            background: "#eee"
          },
          children: [e.startsWith("txt:") ? E.jsx(it, {
            text: e.substring(4),
            aspectRatio: "1/1"
          }) : E.jsx("img", {
            decoding: "async",
            src: e,
            alt: "",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }
          }), E.jsx("button", {
            onClick: () => w([]),
            style: {
              position: "absolute",
              top: 2,
              right: 2,
              width: 18,
              height: 18,
              borderRadius: "50%",
              border: "none",
              background: "rgba(0,0,0,0.6)",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0
            },
            children: E.jsx(z, {
              size: 10
            })
          })]
        }, t))
      }), E.jsxs("div", {
        className: "comment-input-row",
        children: [E.jsx("button", {
          className: "forum-icon-btn forum-regen-btn",
          onClick: () => u(C.id),
          disabled: o,
          children: o ? E.jsx(re, {
            size: 18,
            className: "spin"
          }) : E.jsx(oe, {
            size: 18
          })
        }), E.jsx("button", {
          className: "forum-icon-btn forum-anon-btn " + (c ? "active" : ""),
          onClick: () => d(e => !e),
          title: N(c ? "forumAnon" : "forumCommentAnonOff"),
          children: c ? E.jsx(W, {
            size: 18,
            style: {
              opacity: 0.4
            }
          }) : E.jsx(ae, {
            size: 18
          })
        }), !C.isLocked && S && E.jsx("button", {
          className: "forum-icon-btn",
          onClick: S,
          title: N("forumPostCreateAddImage"),
          children: E.jsx(K, {
            size: 18
          })
        }), E.jsx("input", {
          type: "text",
          placeholder: c ? N("forumCommentAnonPlaceholder") : a ? `@${a.author}` : N("forumCommentInputPlaceholder"),
          value: i,
          onChange: e => l(e.target.value),
          onKeyDown: e => {
            if (e.key === "Enter" && (i.trim() || j && j.length > 0)) {
              h();
            }
          }
        }), E.jsx("button", {
          className: "forum-icon-btn",
          onClick: h,
          children: E.jsx(se, {
            size: 18
          })
        })]
      })]
    })]
  });
};
const dt = ({
  viewedMsg: e,
  forumDmMessages: t,
  forumDmInput: n,
  setForumDmInput: r,
  forumDmLoading: o,
  forumDmScrollRef: a,
  userDisplayAvatar: s,
  getForumDmCharInfo: i,
  handleBack: l,
  handleOpenProfile: c,
  handleForumDmSendMsg: d,
  handleForumDmAIReply: m,
  t: u
}) => {
  if (!e) {
    return null;
  }
  const h = t[e.id] || [];
  const {
    charAvatar: p
  } = i();
  const f = s;
  const g = p || e.avatar || null;
  const b = t => {
    var n;
    if (g) {
      return E.jsx("img", {
        decoding: "async",
        src: g,
        alt: "avatar",
        className: t || ""
      });
    } else {
      return E.jsx("div", {
        className: t || "",
        style: {
          width: t === "bubble-avatar" ? 32 : 36,
          height: t === "bubble-avatar" ? 32 : 36,
          borderRadius: "50%",
          background: "#e0e0e0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          color: "#999",
          flexShrink: 0
        },
        children: ((n = e.name) == null ? undefined : n[0]) || "?"
      });
    }
  };
  const y = e => {
    if (e === 0) {
      return true;
    }
    const t = h[e - 1];
    return !t || t.sender !== "them" && t.sender !== "typing";
  };
  return E.jsxs("div", {
    className: "forum-view message-detail-view",
    children: [E.jsxs("div", {
      className: "chat-header",
      children: [E.jsx("button", {
        className: "forum-icon-btn",
        onClick: () => l(),
        style: {
          background: "transparent"
        },
        children: E.jsx(ie, {
          size: 24
        })
      }), E.jsxs("div", {
        className: "chat-header-user",
        onClick: () => c({
          name: e.name,
          avatar: g
        }),
        style: {
          cursor: "pointer"
        },
        children: [b(), E.jsxs("div", {
          className: "chat-header-names",
          children: [E.jsx("strong", {
            children: ke(e.name, "")
          }), E.jsx("span", {
            children: e.type === "friend" ? u("forumMsgOnline") : u("forumMsgOffline")
          })]
        })]
      }), E.jsx("div", {
        className: "chat-header-actions"
      })]
    }), E.jsx("div", {
      className: "chat-scroll-area",
      ref: a,
      children: e.type === "system" ? E.jsx("div", {
        className: "chat-bubble-row them",
        style: {
          justifyContent: "center",
          maxWidth: "100%"
        },
        children: E.jsx("div", {
          className: "chat-bubble-system",
          children: ke(e.lastMsg, "")
        })
      }) : E.jsxs(E.Fragment, {
        children: [e.lastMsg && h.length === 0 && E.jsxs("div", {
          className: "chat-bubble-row them",
          children: [b("bubble-avatar"), E.jsx("div", {
            className: "bubble-content-col",
            children: E.jsxs("div", {
              className: "bubble-content-row",
              children: [E.jsx("div", {
                className: "chat-bubble",
                children: ke(e.lastMsg, "")
              }), E.jsx("div", {
                className: "bubble-meta",
                children: E.jsx("span", {
                  className: "bubble-time",
                  children: e.timestamp ? Ee(e.timestamp, u("forumAiContentLang")) : ke(e.time, "")
                })
              })]
            })
          })]
        }), h.map((e, t) => e.sender === "system" ? E.jsx("div", {
          className: "chat-bubble-row them",
          style: {
            justifyContent: "center",
            maxWidth: "100%"
          },
          children: E.jsx("div", {
            className: "chat-bubble-system",
            style: {
              color: "#e74c3c",
              fontSize: 12
            },
            children: ke(e.text, "")
          })
        }, e.id) : e.sender === "typing" ? E.jsxs("div", {
          className: "chat-bubble-row them",
          children: [y(t) ? b("bubble-avatar") : E.jsx("div", {
            style: {
              width: 32,
              flexShrink: 0
            }
          }), E.jsx("div", {
            className: "bubble-content-col",
            children: E.jsxs("div", {
              className: "bubble-content-row",
              children: [E.jsx("div", {
                className: "chat-bubble",
                style: {
                  opacity: 0.6
                },
                children: E.jsxs("span", {
                  className: "typing-dots",
                  children: [E.jsx("span", {
                    children: "."
                  }), E.jsx("span", {
                    children: "."
                  }), E.jsx("span", {
                    children: "."
                  })]
                })
              }), E.jsx("div", {
                className: "bubble-meta",
                children: E.jsx("span", {
                  className: "bubble-time"
                })
              })]
            })
          })]
        }, e.id) : e.sender === "me" ? E.jsxs("div", {
          className: "chat-bubble-row me",
          children: [E.jsx("div", {
            className: "bubble-content-col",
            style: {
              alignItems: "flex-end"
            },
            children: E.jsxs("div", {
              className: "bubble-content-row",
              style: {
                flexDirection: "row-reverse"
              },
              children: [E.jsx("div", {
                className: "chat-bubble",
                children: ke(e.text, "")
              }), E.jsx("div", {
                className: "bubble-meta",
                children: E.jsx("span", {
                  className: "bubble-time",
                  children: Ee(e.timestamp, u("forumAiContentLang"))
                })
              })]
            })
          }), f && E.jsx("img", {
            decoding: "async",
            src: f,
            alt: "me",
            className: "bubble-avatar",
            style: {
              marginLeft: 8,
              marginRight: 0
            }
          })]
        }, e.id) : E.jsxs("div", {
          className: "chat-bubble-row them",
          children: [y(t) ? b("bubble-avatar") : E.jsx("div", {
            style: {
              width: 32,
              flexShrink: 0
            }
          }), E.jsx("div", {
            className: "bubble-content-col",
            children: E.jsxs("div", {
              className: "bubble-content-row",
              children: [E.jsx("div", {
                className: "chat-bubble",
                children: ke(e.text, "")
              }), E.jsx("div", {
                className: "bubble-meta",
                children: E.jsx("span", {
                  className: "bubble-time",
                  children: Ee(e.timestamp, u("forumAiContentLang"))
                })
              })]
            })
          })]
        }, e.id)), o && !h.some(e => e.sender === "typing") && E.jsxs("div", {
          className: "chat-bubble-row them",
          children: [b("bubble-avatar"), E.jsx("div", {
            className: "bubble-content-col",
            children: E.jsx("div", {
              className: "chat-bubble",
              style: {
                opacity: 0.6,
                padding: "8px 14px"
              },
              children: E.jsxs("span", {
                className: "typing-dots",
                children: [E.jsx("span", {
                  children: "."
                }), E.jsx("span", {
                  children: "."
                }), E.jsx("span", {
                  children: "."
                })]
              })
            })
          })]
        })]
      })
    }), e.type !== "system" && E.jsx("div", {
      className: "forum-chat-input-area",
      children: E.jsxs("div", {
        className: "forum-chat-input-box",
        children: [E.jsx("input", {
          type: "text",
          placeholder: u("forumMsgInputPlaceholder"),
          value: n,
          onChange: e => r(e.target.value),
          onKeyDown: e => {
            if (e.key === "Enter" && !e.nativeEvent.isComposing) {
              d();
            }
          },
          disabled: o
        }), E.jsx("button", {
          className: "forum-send-btn",
          onClick: d,
          disabled: !n.trim(),
          title: u("forumMsgInputPlaceholder"),
          children: E.jsx(se, {
            size: 16
          })
        }), E.jsx("button", {
          className: "forum-send-btn forum-ai-reply-btn",
          onClick: m,
          disabled: o,
          title: "AI Reply",
          children: o ? E.jsx(re, {
            size: 16,
            className: "spin"
          }) : E.jsx(oe, {
            size: 16
          })
        })]
      })
    })]
  });
};
const mt = ({
  post: e,
  isDetail: t = false,
  userDisplayName: n,
  userDisplayAvatar: r,
  BOARDS: o,
  userVotes: a,
  resolveAvatar: s,
  resolveAuthorChar: i,
  getRoleBadge: l,
  getLevelBadge: c,
  getBoardName: d,
  handleOpenPost: m,
  handleOpenProfile: u,
  handleVote: h,
  onShare: p,
  startLongPress: f,
  cancelLongPress: g,
  t: b
}) => {
  var y;
  var v;
  if (!e) {
    return null;
  }
  const x = e.author || {
    name: "???",
    avatar: null,
    mood: null,
    role: null,
    level: 1
  };
  const N = !e.isAnon && (e.isUserPost === true || x.name === n);
  const j = e.isAnon ? x : {
    ...x,
    avatar: N ? r || x.avatar || s(x.rosterId, x.name) : x.avatar || s(x.rosterId, x.name),
    _char: N ? null : i(x.rosterId, x.name)
  };
  return E.jsxs("div", {
    className: `forum-post nuo-forum-post ${t ? "detail-mode nuo-forum-post-detail" : "nuo-forum-post-card"} ${e.isPinned && !t ? "pinned" : ""} ${e.isLocked ? "locked" : ""}`,
    onPointerDown: t ? undefined : t => f({
      type: "post",
      postId: e.id
    }, t),
    onPointerUp: t ? undefined : g,
    onPointerLeave: t ? undefined : g,
    children: [E.jsx("div", {
      className: "nuo-forum-decor nuo-forum-decor-post-top",
      "aria-hidden": "true"
    }), !t && E.jsxs("div", {
      className: "post-metrics-side nuo-forum-post-metrics",
      children: [E.jsx("span", {
        className: "metric-num",
        children: e.likes
      }), E.jsx("span", {
        className: "metric-label",
        children: b("forumStatsPushes")
      }), E.jsx("div", {
        className: "metric-divider"
      }), E.jsx(H, {
        size: 12
      }), E.jsx("span", {
        className: "metric-label",
        children: e.comments
      })]
    }), E.jsxs("div", {
      className: "post-body-forum nuo-forum-post-body",
      children: [E.jsx("div", {
        className: "nuo-forum-decor nuo-forum-decor-post-mid",
        "aria-hidden": "true"
      }), E.jsxs("div", {
        className: "post-title-row nuo-forum-post-title-row",
        children: [e.isPinned && !t && E.jsxs("span", {
          className: "post-pin-tag",
          children: [E.jsx(Z, {
            size: 10
          }), " ", b("forumPostPinned")]
        }), e.isLocked && !t && E.jsxs("span", {
          className: "post-lock-tag",
          children: [E.jsx(X, {
            size: 10
          }), " ", b("forumPostLocked")]
        }), e.isHot && !t && E.jsxs("span", {
          className: "post-hot-tag",
          children: [E.jsx(le, {
            size: 10
          }), " ", b("forumPostHot")]
        }), E.jsx("span", {
          className: "post-board-tag nuo-forum-post-board-tag",
          children: d(o.find(t => t.id === e.boardId)) || ke(e.boardName, "")
        }), E.jsx("h3", {
          className: "post-title-forum nuo-forum-post-title",
          onClick: () => m(e),
          children: ke(e.title, "")
        })]
      }), t ? E.jsxs(E.Fragment, {
        children: [E.jsxs("div", {
          className: "post-detail-author-bar nuo-forum-post-author-bar",
          children: [E.jsxs("div", {
            className: "post-detail-author-left",
            children: [e.isAnon ? E.jsx("div", {
              className: "post-detail-avatar anon-avatar",
              children: "?"
            }) : E.jsx("div", {
              className: "post-detail-avatar nuo-forum-post-avatar",
              onClick: () => u(j),
              style: {
                cursor: "pointer",
                overflow: "hidden",
                padding: 0
              },
              children: E.jsx("img", {
                decoding: "async",
                src: j.avatar,
                alt: "avatar",
                style: j._char ? P(j._char) : {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }
              })
            }), E.jsxs("div", {
              className: "post-detail-author-info",
              children: [E.jsxs("div", {
                className: "post-detail-author-name-row",
                children: [e.isAnon ? E.jsx("span", {
                  className: "post-author-anon",
                  children: ke(j.name, "???")
                }) : E.jsx("span", {
                  className: "post-author-link nuo-forum-post-author-name",
                  onClick: () => u(j),
                  children: ke(j.name, "???")
                }), e.isAnon && E.jsx("span", {
                  className: "anon-badge",
                  children: b("forumAnon")
                }), !e.isAnon && l(j.role), !e.isAnon && c(j.level)]
              }), E.jsxs("span", {
                className: "post-detail-time nuo-forum-post-time",
                children: [E.jsx(ce, {
                  size: 11
                }), " ", e.timestamp ? Ee(e.timestamp, b("forumAiContentLang")) : ke(e.time, "")]
              })]
            })]
          }), E.jsx(de, {
            size: 16,
            style: {
              opacity: 0.4
            }
          })]
        }), E.jsxs("div", {
          className: "post-content nuo-forum-post-content",
          children: [e.fanficMeta && E.jsxs("div", {
            className: "fanfic-meta-bar nuo-forum-fanfic-meta",
            children: [e.fanficMeta.type === "serial" && E.jsx("span", {
              className: "fanfic-tag serial",
              children: b("forumFanficSerial")
            }), e.fanficMeta.type === "oneshot" && E.jsx("span", {
              className: "fanfic-tag oneshot",
              children: b("forumFanficOneshot")
            }), e.fanficMeta.type === "discussion" && E.jsx("span", {
              className: "fanfic-tag discussion",
              children: b("forumFanficDiscussion")
            }), e.fanficMeta.cpTag && typeof e.fanficMeta.cpTag == "string" && E.jsx("span", {
              className: "fanfic-tag cp",
              children: e.fanficMeta.cpTag
            }), e.fanficMeta.series && typeof e.fanficMeta.series == "string" && E.jsxs("span", {
              className: "fanfic-tag series",
              children: ["《", e.fanficMeta.series, "》", e.fanficMeta.chapter ? ` ${b("forumFanficChapter", {
                n: e.fanficMeta.chapter
              })}` : ""]
            }), e.fanficMeta.wordCount && (typeof e.fanficMeta.wordCount == "string" || typeof e.fanficMeta.wordCount == "number") && E.jsxs("span", {
              className: "fanfic-tag wordcount",
              children: [e.fanficMeta.wordCount, " ", b("forumFanficWordUnit")]
            })]
          }), E.jsx("p", {
            className: ((y = e.fanficMeta) == null ? undefined : y.type) === "serial" || ((v = e.fanficMeta) == null ? undefined : v.type) === "oneshot" ? "fanfic-prose" : "",
            children: ke(e.content, "")
          }), (() => {
            const t = Array.isArray(e.images) && e.images.length > 0 ? e.images : e.image ? [e.image] : [];
            if (t.length === 0) {
              return null;
            } else {
              return E.jsx("div", {
                className: "post-media nuo-forum-post-media",
                style: {
                  display: "grid",
                  gridTemplateColumns: t.length === 1 ? "1fr" : "repeat(2, 1fr)",
                  gap: 6,
                  marginTop: 8
                },
                children: t.map((e, n) => E.jsx("div", {
                  style: {
                    borderRadius: 8,
                    overflow: "hidden",
                    aspectRatio: t.length === 1 ? "16/9" : "1",
                    background: "#eee"
                  },
                  children: e.startsWith("txt:") ? E.jsx(it, {
                    text: e.substring(4),
                    aspectRatio: t.length === 1 ? "16/9" : "1/1"
                  }) : E.jsx("img", {
                    decoding: "async",
                    src: e,
                    alt: "",
                    style: {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }
                  })
                }, n))
              });
            }
          })()]
        }), E.jsxs("div", {
          className: "post-detail-stats nuo-forum-post-stats",
          children: [E.jsxs("span", {
            children: [E.jsx(W, {
              size: 13
            }), " ", e.views, " ", b("forumStatsViews")]
          }), E.jsxs("span", {
            children: [E.jsx(H, {
              size: 13
            }), " ", e.comments, " ", b("forumStatsReplies")]
          }), E.jsxs("span", {
            children: [E.jsx(me, {
              size: 13
            }), " ", e.likes, " ", b("forumStatsPushes")]
          }), e.isLocked && E.jsxs("span", {
            className: "post-detail-locked",
            children: [E.jsx(X, {
              size: 13
            }), " ", b("forumPostLocked")]
          })]
        })]
      }) : E.jsxs(E.Fragment, {
        children: [E.jsx("div", {
          className: "post-excerpt nuo-forum-post-excerpt",
          onClick: () => m(e),
          children: ke(e.content, "")
        }), (() => {
          const t = Array.isArray(e.images) && e.images.length > 0 ? e.images : e.image ? [e.image] : [];
          if (t.length === 0) {
            return null;
          }
          const n = t[0];
          return E.jsxs("div", {
            onClick: () => m(e),
            style: {
              marginTop: 6,
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              color: "#888",
              cursor: "pointer"
            },
            children: [E.jsx(K, {
              size: 12
            }), E.jsxs("span", {
              children: [t.length, " ", n.startsWith("txt:") ? b("forumImageBadgeText") || "張" : b("forumImageBadge") || "圖"]
            })]
          });
        })(), E.jsxs("div", {
          className: "post-meta-bottom nuo-forum-post-meta",
          children: [E.jsxs("div", {
            className: "post-meta-left",
            children: [!e.isAnon && j.avatar && E.jsx("div", {
              className: "nuo-forum-post-meta-avatar",
              style: {
                width: 16,
                height: 16,
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                cursor: "pointer"
              },
              onClick: e => {
                e.stopPropagation();
                u(j);
              },
              children: E.jsx("img", {
                decoding: "async",
                src: j.avatar,
                alt: "author",
                style: j._char ? P(j._char) : {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }
              })
            }), e.isAnon ? E.jsx("span", {
              className: "post-author-anon",
              children: ke(j.name, "???")
            }) : E.jsx("span", {
              className: "post-author-link nuo-forum-post-author-name",
              onClick: e => {
                e.stopPropagation();
                u(j);
              },
              children: ke(j.name, "???")
            }), e.isAnon && E.jsx("span", {
              className: "anon-badge",
              children: b("forumAnon")
            }), !e.isAnon && l(j.role), !e.isAnon && c(j.level), E.jsxs("span", {
              className: "post-time-text nuo-forum-post-time",
              children: ["· ", e.timestamp ? Ee(e.timestamp, b("forumAiContentLang")) : ke(e.time, "")]
            })]
          }), E.jsx("div", {
            className: "post-meta-right",
            children: E.jsxs("span", {
              className: "post-views",
              children: [E.jsx(W, {
                size: 11
              }), " ", e.views]
            })
          })]
        })]
      }), t && E.jsxs("div", {
        className: "post-actions nuo-forum-post-actions",
        children: [E.jsxs("button", {
          className: "action-btn vote-up " + (a[e.id] === "up" ? "voted" : ""),
          onClick: () => h(e.id, "up"),
          children: [E.jsx(ne, {
            size: 16
          }), " ", E.jsx("span", {
            children: e.likes
          })]
        }), E.jsxs("button", {
          className: "action-btn vote-down " + (a[e.id] === "down" ? "voted" : ""),
          onClick: () => h(e.id, "down"),
          children: [E.jsx(ue, {
            size: 16
          }), " ", E.jsx("span", {
            children: e.dislikes
          })]
        }), E.jsx("button", {
          className: "action-btn",
          onClick: () => p == null ? undefined : p(e),
          children: E.jsx(he, {
            size: 16
          })
        })]
      })]
    }), !t && e.image && E.jsx("div", {
      className: "post-thumbnail-side nuo-forum-post-thumb",
      onClick: () => m(e),
      children: E.jsx("img", {
        decoding: "async",
        src: e.image,
        alt: "thumb"
      })
    }), E.jsx("div", {
      className: "nuo-forum-decor nuo-forum-decor-post-bottom",
      "aria-hidden": "true"
    })]
  }, e.id);
};
const ut = ({
  BOARDS: e,
  joinedBoards: t,
  postsIndex: n,
  searchQuery: r,
  setSearchQuery: o,
  showSearch: a,
  getBoardName: s,
  getBoardDesc: i,
  resolveBoardModAvatar: l,
  handleOpenBoard: c,
  pushView: d,
  guardClick: m,
  startLongPress: u,
  cancelLongPress: h,
  t: p
}) => {
  const f = r.trim().toLowerCase();
  const g = f ? e.filter(e => (s(e) || "").toLowerCase().includes(f) || (i(e) || "").toLowerCase().includes(f) || (e.mod || "").toLowerCase().includes(f)) : e;
  return E.jsxs("div", {
    className: "forum-view scrollable boards-view nuo-forum-boards-list",
    children: [E.jsx("div", {
      className: "nuo-forum-decor nuo-forum-decor-boards-top",
      "aria-hidden": "true"
    }), a && E.jsxs("div", {
      className: "forum-search-bar",
      children: [E.jsx(pe, {
        size: 16,
        className: "forum-search-icon"
      }), E.jsx("input", {
        type: "text",
        className: "forum-search-input",
        placeholder: p("forumSearchBoardsPlaceholder") || p("forumSearchPlaceholder"),
        value: r,
        onChange: e => o(e.target.value),
        autoFocus: true
      }), r && E.jsx("button", {
        className: "forum-search-clear",
        onClick: () => o(""),
        children: "✕"
      })]
    }), E.jsxs("div", {
      className: "board-list-classic",
      children: [g.map(e => {
        var r;
        return E.jsxs("div", {
          className: "board-card-classic nuo-forum-board-card",
          onClick: m(() => c(e)),
          onTouchStart: t => u({
            type: "board",
            boardId: e.id,
            boardName: s(e) || e.name
          }, t),
          onTouchEnd: h,
          onTouchCancel: h,
          onMouseDown: t => u({
            type: "board",
            boardId: e.id,
            boardName: s(e) || e.name
          }, t),
          onMouseUp: h,
          onMouseLeave: h,
          children: [e.coverImage ? E.jsx("img", {
            decoding: "async",
            src: e.coverImage,
            alt: "",
            className: "board-cover-thumb nuo-forum-board-cover"
          }) : E.jsx("div", {
            className: "board-icon-wrapper nuo-forum-board-icon",
            children: ke(e.icon, "📋")
          }), E.jsxs("div", {
            className: "board-info-classic",
            children: [E.jsxs("div", {
              className: "board-name-row",
              children: [E.jsx("h3", {
                className: "nuo-forum-board-name",
                children: s(e)
              }), t.includes(e.id) && E.jsx("span", {
                className: "board-joined-tag nuo-forum-board-joined",
                children: p("forumBoardJoined")
              })]
            }), E.jsx("p", {
              className: "board-desc nuo-forum-board-desc",
              children: i(e)
            }), E.jsxs("div", {
              className: "board-stats-row nuo-forum-board-stats",
              children: [E.jsxs("span", {
                children: [E.jsx(H, {
                  size: 11
                }), " ", ((r = n.byBoard.get(e.id)) == null ? undefined : r.length) || e.posts, " ", p("forumBoardStatPosts")]
              }), E.jsxs("span", {
                children: [E.jsx(ae, {
                  size: 11
                }), " ", e.members, " ", p("forumBoardStatMembers")]
              }), E.jsxs("span", {
                className: "board-mod",
                children: [E.jsx(te, {
                  size: 11
                }), (() => {
                  const t = l(e);
                  if (t) {
                    return E.jsx("img", {
                      decoding: "async",
                      src: t,
                      alt: "",
                      className: "board-mod-avatar"
                    });
                  } else {
                    return null;
                  }
                })(), ke(e.mod, "") || p("forumBoardModNone")]
              })]
            })]
          })]
        }, e.id);
      }), E.jsxs("div", {
        className: "board-card-classic board-create-card nuo-forum-board-create-card",
        onClick: () => d("board-create"),
        children: [E.jsx("div", {
          className: "board-icon-wrapper board-create-icon",
          children: E.jsx(fe, {
            size: 24
          })
        }), E.jsxs("div", {
          className: "board-info-classic",
          children: [E.jsx("h3", {
            children: p("forumBoardCreateCard")
          }), E.jsx("p", {
            className: "board-desc",
            children: p("forumBoardCreateCardDesc")
          })]
        })]
      })]
    }), E.jsx("div", {
      className: "nuo-forum-decor nuo-forum-decor-boards-bottom",
      "aria-hidden": "true"
    })]
  });
};
const ht = ({
  viewedBoard: e,
  postsIndex: t,
  boardSort: n,
  setBoardSort: r,
  joinedBoards: o,
  setJoinedBoards: a,
  resolveBoardModAvatar: s,
  renderPost: i,
  t: l
}) => {
  if (!e) {
    return null;
  }
  const c = t.byBoard.get(e.id) || [];
  let d = [...c];
  if (n === "hot") {
    d.sort((e, t) => e.isPinned !== t.isPinned ? t.isPinned ? 1 : -1 : t.likes * 3 + t.comments * 5 + t.views * 0.5 - (e.likes * 3 + e.comments * 5 + e.views * 0.5));
  } else if (n === "new") {
    d.sort((e, t) => t.id - e.id);
  } else if (n === "pinned") {
    d = d.filter(e => e.isPinned);
  }
  const m = c.length;
  return E.jsxs("div", {
    className: "forum-view scrollable board-detail-view nuo-forum-board-detail",
    children: [E.jsxs("div", {
      className: "board-hero nuo-forum-board-hero",
      children: [E.jsxs("div", {
        className: "board-hero-content",
        children: [E.jsx("div", {
          className: "board-hero-icon",
          children: ke(e.icon, "📋")
        }), E.jsxs("div", {
          className: "board-hero-text",
          children: [E.jsx("h2", {
            className: "nuo-forum-board-hero-title",
            children: ke(e.name, "")
          }), E.jsx("p", {
            className: "nuo-forum-board-hero-desc",
            children: ke(e.desc, "")
          }), E.jsxs("div", {
            className: "board-hero-stats",
            children: [E.jsxs("span", {
              children: [m, " ", l("forumBoardHeroStatPosts")]
            }), E.jsxs("span", {
              children: [e.members || 0, " ", l("forumBoardHeroStatMembers")]
            })]
          })]
        })]
      }), E.jsx("div", {
        className: "board-hero-actions",
        children: o.includes(e.id) ? E.jsx("button", {
          className: "btn-secondary",
          onClick: () => a(t => t.filter(t => t !== e.id)),
          children: l("forumBoardActionJoined")
        }) : E.jsx("button", {
          className: "btn-primary",
          onClick: () => a(t => [...t, e.id]),
          children: l("forumBoardActionJoin")
        })
      }), E.jsxs("div", {
        className: "board-mod-info",
        children: [E.jsx(te, {
          size: 12
        }), (() => {
          const t = s(e);
          if (t) {
            return E.jsx("img", {
              decoding: "async",
              src: t,
              alt: "",
              className: "board-mod-avatar-lg"
            });
          } else {
            return null;
          }
        })(), l("forumBoardModLabel"), ke(e.mod, "") || l("forumBoardModNone")]
      })]
    }), E.jsxs("div", {
      className: "feed-tabs nuo-forum-board-tabs",
      children: [E.jsxs("button", {
        className: "feed-tab " + (n === "hot" ? "active" : ""),
        onClick: () => r("hot"),
        children: [E.jsx(le, {
          size: 13
        }), " ", l("forumBoardSortHot")]
      }), E.jsxs("button", {
        className: "feed-tab " + (n === "new" ? "active" : ""),
        onClick: () => r("new"),
        children: [E.jsx(ce, {
          size: 13
        }), " ", l("forumBoardSortNew")]
      }), E.jsxs("button", {
        className: "feed-tab " + (n === "pinned" ? "active" : ""),
        onClick: () => r("pinned"),
        children: [E.jsx(Z, {
          size: 13
        }), " ", l("forumBoardSortPinned")]
      })]
    }), E.jsx("div", {
      className: "post-list",
      children: d.length > 0 ? d.map(e => i(e)) : E.jsxs("div", {
        className: "center-msg",
        style: {
          padding: "40px 20px",
          opacity: 0.5
        },
        children: [E.jsx(H, {}), E.jsx("p", {
          children: l("forumBoardEmpty")
        })]
      })
    })]
  });
};
const pt = ({
  BOARDS: e,
  createBoardForm: t,
  setCreateBoardForm: n,
  worldBooks: r,
  characters: o,
  boardCoverInputRef: a,
  handleBoardCoverSelect: s,
  handleRestoreDefaultBoard: i,
  handleGenerateBoard: l,
  isGeneratingBoard: c,
  renderJailbreakPicker: d,
  t: m,
  tOr: u
}) => {
  const h = qe.filter(t => !e.some(e => e.id === t));
  return E.jsxs("div", {
    className: "forum-view scrollable board-create-view nuo-forum-board-create",
    children: [E.jsx("div", {
      className: "board-create-header",
      children: E.jsx("h2", {
        children: m("forumBoardCreateTitle")
      })
    }), h.length > 0 && E.jsxs("div", {
      className: "board-create-form",
      style: {
        marginBottom: 12
      },
      children: [E.jsx("div", {
        className: "board-form-group",
        children: E.jsx("label", {
          children: m("forumRestoreDefaultBoardsTitle")
        })
      }), E.jsx("div", {
        className: "board-list-classic",
        style: {
          gap: 8
        },
        children: h.map(e => {
          const t = Ve[e];
          if (t) {
            return E.jsxs("div", {
              className: "board-card-classic",
              onClick: () => i(e),
              style: {
                cursor: "pointer"
              },
              children: [E.jsx("div", {
                className: "board-icon-wrapper",
                children: t.icon
              }), E.jsxs("div", {
                className: "board-info-classic",
                children: [E.jsx("h3", {
                  children: m(t.nameKey)
                }), E.jsx("p", {
                  className: "board-desc",
                  children: m(t.descKey)
                })]
              }), E.jsxs("div", {
                style: {
                  marginLeft: "auto",
                  color: "#4a90d9",
                  fontSize: "0.85rem",
                  whiteSpace: "nowrap"
                },
                children: ["+ ", m("forumRestoreBoard")]
              })]
            }, e);
          } else {
            return null;
          }
        })
      })]
    }), E.jsxs("div", {
      className: "board-create-form",
      children: [E.jsxs("div", {
        className: "board-create-type-selector",
        children: [E.jsxs("button", {
          className: "type-btn " + (t.type === "worldbook" ? "active" : ""),
          onClick: () => n({
            ...t,
            type: "worldbook"
          }),
          children: [E.jsx(ge, {
            size: 24
          }), E.jsx("span", {
            children: m("forumBoardTypeWorldBook")
          })]
        }), E.jsxs("button", {
          className: "type-btn " + (t.type === "manual" ? "active" : ""),
          onClick: () => n({
            ...t,
            type: "manual"
          }),
          children: [E.jsx(be, {
            size: 24
          }), E.jsx("span", {
            children: m("forumBoardTypeManual")
          })]
        })]
      }), t.type === "worldbook" ? E.jsxs("div", {
        className: "board-form-group",
        children: [E.jsx("label", {
          children: m("forumBoardFormWorldBook")
        }), E.jsxs("select", {
          className: "board-select",
          value: t.worldBookId,
          onChange: e => n({
            ...t,
            worldBookId: e.target.value
          }),
          children: [E.jsx("option", {
            value: "",
            children: m("forumBoardFormSelectPlaceholder")
          }), r.map(e => E.jsxs("option", {
            value: e.id,
            children: [e.icon ? e.icon + " " : "", e.title]
          }, e.id))]
        })]
      }) : E.jsxs(E.Fragment, {
        children: [E.jsxs("div", {
          className: "board-form-group",
          children: [E.jsx("label", {
            children: m("forumBoardFormNameLabel")
          }), E.jsx("input", {
            type: "text",
            className: "board-input",
            value: t.name,
            onChange: e => n({
              ...t,
              name: e.target.value
            }),
            placeholder: m("forumBoardFormNamePlaceholder")
          })]
        }), E.jsxs("div", {
          className: "board-form-group",
          children: [E.jsx("label", {
            children: m("forumBoardFormWorldviewLabel")
          }), E.jsx("textarea", {
            className: "board-textarea",
            value: t.rules,
            onChange: e => n({
              ...t,
              rules: e.target.value
            }),
            placeholder: m("forumBoardFormWorldviewPlaceholder")
          })]
        }), E.jsxs("div", {
          className: "board-form-group",
          children: [E.jsx("label", {
            children: m("forumBoardFormContentLabel")
          }), E.jsx("textarea", {
            className: "board-textarea",
            value: t.content,
            onChange: e => n({
              ...t,
              content: e.target.value
            }),
            placeholder: m("forumBoardFormContentPlaceholder")
          })]
        })]
      }), E.jsxs("div", {
        className: "board-form-group",
        children: [E.jsx("label", {
          children: m("forumBoardFormCoverLabel")
        }), E.jsx("div", {
          className: "board-cover-upload",
          onClick: () => {
            var e;
            if ((e = a.current) == null) {
              return undefined;
            } else {
              return e.click();
            }
          },
          children: t.coverImage ? E.jsx("img", {
            decoding: "async",
            src: t.coverImage,
            alt: "cover",
            className: "board-cover-preview"
          }) : E.jsxs("div", {
            className: "board-cover-placeholder",
            children: [E.jsx(fe, {
              size: 24
            }), E.jsx("span", {
              children: m("forumBoardFormCoverPlaceholder")
            })]
          })
        }), E.jsx("input", {
          type: "file",
          ref: a,
          accept: "image/*",
          style: {
            display: "none"
          },
          onChange: e => s(e, "create")
        })]
      }), (() => {
        const e = o.filter(e => e.type !== "npc");
        const r = [...new Set(e.map(e => e.group || "Default"))];
        if (r.length <= 1) {
          return null;
        }
        const a = t.allowedGroups || [];
        return E.jsxs("div", {
          className: "board-form-group",
          children: [E.jsx("label", {
            children: m("forumBoardFormGroupLabel")
          }), E.jsx("div", {
            className: "board-group-chips",
            children: r.map(r => E.jsxs("button", {
              className: `board-group-chip ${a.includes(r) ? "active" : ""} ${a.length === 0 ? "all-mode" : ""}`,
              onClick: () => (e => {
                const r = a.includes(e) ? a.filter(t => t !== e) : [...a, e];
                n({
                  ...t,
                  allowedGroups: r
                });
              })(r),
              children: [r, " (", e.filter(e => (e.group || "Default") === r).length, ")"]
            }, r))
          }), E.jsx("span", {
            className: "board-group-hint",
            children: a.length === 0 ? m("forumBoardFormGroupHintAll") : m("forumBoardFormGroupHintSelected", {
              count: a.length
            })
          })]
        });
      })(), E.jsxs("div", {
        className: "board-form-group",
        children: [E.jsx("label", {
          children: m("forumBoardFormPostLengthLabel")
        }), E.jsxs("div", {
          className: "board-length-range",
          children: [E.jsx("input", {
            type: "number",
            className: "board-input board-input-small",
            value: t.postLengthMin,
            onChange: e => n({
              ...t,
              postLengthMin: Math.max(30, parseInt(e.target.value) || 80)
            }),
            min: 30,
            max: 2000
          }), E.jsx("span", {
            className: "board-length-separator",
            children: "~"
          }), E.jsx("input", {
            type: "number",
            className: "board-input board-input-small",
            value: t.postLengthMax,
            onChange: e => n({
              ...t,
              postLengthMax: Math.max(50, parseInt(e.target.value) || 250)
            }),
            min: 50,
            max: 3000
          }), E.jsx("span", {
            className: "board-length-unit",
            children: m("forumBoardFormPostLengthUnit")
          })]
        })]
      }), E.jsxs("div", {
        className: "board-form-group",
        children: [E.jsx("label", {
          children: m("forumBoardFormUserRoleLabel")
        }), E.jsx("input", {
          type: "text",
          className: "board-input",
          value: t.userRole,
          onChange: e => n({
            ...t,
            userRole: e.target.value
          }),
          placeholder: m("forumBoardFormUserRolePlaceholder")
        })]
      }), E.jsxs("div", {
        className: "board-form-group",
        children: [E.jsx("label", {
          children: m("forumBoardEditModLabel")
        }), E.jsxs("div", {
          className: "board-mod-toggle",
          onClick: () => n(e => ({
            ...e,
            isUserMod: !e.isUserMod
          })),
          children: [E.jsx("div", {
            className: "board-mod-switch " + (t.isUserMod ? "active" : ""),
            children: E.jsx("div", {
              className: "board-mod-switch-thumb"
            })
          }), E.jsx("span", {
            children: m("forumBoardEditModDesc")
          })]
        })]
      }), E.jsxs("div", {
        className: "board-form-group",
        children: [E.jsx("label", {
          children: m("forumBoardEditJailbreakLabel")
        }), E.jsxs("div", {
          className: "board-mod-toggle",
          onClick: () => n(e => ({
            ...e,
            jailbreakEnabled: !e.jailbreakEnabled
          })),
          children: [E.jsx("div", {
            className: "board-mod-switch " + (t.jailbreakEnabled ? "active" : ""),
            children: E.jsx("div", {
              className: "board-mod-switch-thumb"
            })
          }), E.jsx("span", {
            children: m("forumBoardEditJailbreakDesc")
          })]
        }), t.jailbreakEnabled && E.jsxs("div", {
          className: "forum-jb-picker-wrap",
          children: [E.jsx("div", {
            className: "forum-jb-picker-hint",
            children: u("forumJailbreakSelectHint", "勾選要注入到本板生成的核心設定條目")
          }), d(t.jailbreakEntryIds, e => {
            n(t => {
              const n = Array.isArray(t.jailbreakEntryIds) ? t.jailbreakEntryIds : [];
              const r = n.some(t => String(t) === String(e));
              return {
                ...t,
                jailbreakEntryIds: r ? n.filter(t => String(t) !== String(e)) : [...n, e]
              };
            });
          })]
        })]
      }), E.jsxs("button", {
        className: "board-generate-btn",
        onClick: l,
        disabled: c,
        children: [c ? E.jsx(re, {
          size: 20,
          className: "spin"
        }) : E.jsx(ye, {
          size: 20
        }), m(c ? "forumBoardCreateLoading" : "forumBoardCreateButton")]
      })]
    })]
  });
};
const ft = ({
  viewedCharacter: e,
  characters: t,
  followedUsers: n,
  setFollowedUsers: r,
  userFollowers: o,
  setUserFollowers: a,
  isMutualFollow: s,
  postsIndex: i,
  getProfileStats: l,
  getRosterScreenNames: c,
  resolveCharImage: d,
  getRoleBadge: m,
  getLevelBadge: u,
  handleOpenMessage: h,
  renderPost: p,
  t: f
}) => {
  var g;
  if (!e) {
    return null;
  }
  const b = Fe(t, e.rosterId || e.name) || (() => {
    var n;
    const r = c();
    const o = (n = Object.entries(r).find(([, t]) => t === e.name)) == null ? undefined : n[0];
    if (o) {
      return Fe(t, o);
    } else {
      return null;
    }
  })();
  const y = (b == null ? undefined : b.image) || e.avatar;
  const v = l(e.name);
  const x = i.byAuthor.get(e.name) || [];
  return E.jsxs("div", {
    className: "forum-view scrollable profile-view nuo-forum-profile",
    children: [E.jsx("div", {
      className: "nuo-forum-decor nuo-forum-decor-profile-top",
      "aria-hidden": "true"
    }), E.jsxs("div", {
      className: "profile-header nuo-forum-profile-header",
      children: [y ? E.jsx("img", {
        decoding: "async",
        src: y,
        alt: "avatar",
        className: "profile-hero-avatar nuo-forum-profile-avatar"
      }) : E.jsx("div", {
        className: "profile-hero-avatar placeholder",
        children: ((g = e.name) == null ? undefined : g[0]) || "?"
      }), E.jsxs("div", {
        className: "profile-name-row",
        children: [E.jsx("h2", {
          className: "nuo-forum-profile-name",
          children: ke(e.name, "???")
        }), m(e.role), u(e.level)]
      }), e.mood && typeof e.mood == "string" && E.jsx("div", {
        className: "profile-mood-pill",
        children: e.mood
      }), E.jsxs("div", {
        className: "profile-actions-row",
        children: [E.jsx("button", {
          className: "btn-primary",
          onClick: () => {
            const n = Fe(t, e.rosterId || e.name);
            const r = {
              id: "msg_" + e.name,
              name: e.name,
              rosterId: e.rosterId || null,
              avatar: d(n) || e.avatar || null,
              type: s(e.name) ? "friend" : "stranger",
              lastMsg: "",
              timestamp: Date.now()
            };
            h(r);
          },
          children: f("forumProfileChat")
        }), n.includes(e.name) ? E.jsxs("button", {
          className: "btn-secondary btn-followed",
          onClick: () => {
            r(t => t.filter(t => t !== e.name));
          },
          children: [E.jsx(ve, {
            size: 14
          }), " ", f("forumProfileFollowing")]
        }) : E.jsx("button", {
          className: "btn-secondary",
          onClick: () => {
            r(t => [...t, e.name]);
            if (Be(t, e.rosterId || e.name) || Math.random() > 0.5) {
              a(t => t.includes(e.name) ? t : [...t, e.name]);
            }
          },
          children: f("forumProfileFollow")
        })]
      })]
    }), E.jsxs("div", {
      className: "profile-stats nuo-forum-profile-stats",
      children: [E.jsxs("div", {
        className: "stat-box",
        children: [E.jsx("strong", {
          children: v.followers
        }), E.jsx("span", {
          children: f("forumProfileFollowers")
        })]
      }), E.jsxs("div", {
        className: "stat-box",
        children: [E.jsx("strong", {
          children: v.posts
        }), E.jsx("span", {
          children: f("forumProfilePosts")
        })]
      }), E.jsxs("div", {
        className: "stat-box",
        children: [E.jsx("strong", {
          children: v.likes
        }), E.jsx("span", {
          children: f("forumProfileLikes")
        })]
      })]
    }), E.jsx("div", {
      className: "profile-tabs",
      children: E.jsx("button", {
        className: "feed-tab active",
        children: f("forumProfileTabPosts")
      })
    }), E.jsx("div", {
      className: "post-list",
      children: x.length > 0 ? x.map(e => p(e)) : E.jsx("div", {
        className: "center-msg",
        style: {
          padding: "30px",
          opacity: 0.5
        },
        children: E.jsx("p", {
          children: f("forumProfileNoPosts")
        })
      })
    }), E.jsx("div", {
      className: "nuo-forum-decor nuo-forum-decor-profile-bottom",
      "aria-hidden": "true"
    })]
  });
};
const gt = ({
  forumProfile: e,
  setForumProfile: t,
  activePersona: n,
  profileUsers: r,
  fileInputRef: o,
  handleProfileFileChange: a,
  handleProfileImagePick: s,
  handleSaveProfile: i,
  handleDeleteAccount: l,
  commentAnon: c,
  setCommentAnon: d,
  setShowForumApiSettings: m,
  showDeleteAccountConfirm: u,
  setShowDeleteAccountConfirm: h,
  sessionTierOverrideRef: p,
  t: f
}) => {
  const g = e.avatar || (n == null ? undefined : n.avatar);
  return E.jsxs("div", {
    className: "forum-view scrollable board-create-view nuo-forum-profile-edit",
    style: {
      paddingTop: "16px"
    },
    children: [E.jsx("input", {
      type: "file",
      ref: o,
      accept: "image/*",
      style: {
        display: "none"
      },
      onChange: a
    }), E.jsxs("div", {
      className: "board-create-form",
      children: [E.jsx("h3", {
        style: {
          fontSize: "0.9rem",
          color: "#888",
          marginBottom: "8px"
        },
        children: f("forumProfileEditHeader")
      }), E.jsxs("div", {
        className: "board-form-group",
        children: [E.jsx("label", {
          children: f("forumProfileEditAvatarSection")
        }), E.jsxs("div", {
          style: {
            display: "flex",
            gap: "10px",
            alignItems: "center"
          },
          children: [E.jsx("div", {
            style: {
              width: 48,
              height: 48,
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              background: "#eee"
            },
            children: g ? E.jsx("img", {
              decoding: "async",
              src: g,
              alt: "avatar",
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }
            }) : E.jsx("div", {
              style: {
                width: "100%",
                height: "100%",
                background: "#ddd"
              }
            })
          }), E.jsx("button", {
            className: "btn-secondary",
            style: {
              fontSize: "0.8rem",
              padding: "6px 12px"
            },
            onClick: () => s("avatar"),
            children: f("forumProfileEditChangeAvatar")
          }), E.jsx("button", {
            className: "btn-secondary",
            style: {
              fontSize: "0.8rem",
              padding: "6px 12px"
            },
            onClick: () => s("bg"),
            children: f("forumProfileEditChangeBg")
          })]
        }), e.bgImage && E.jsx("div", {
          style: {
            marginTop: 8,
            borderRadius: 8,
            overflow: "hidden",
            maxHeight: 80
          },
          children: E.jsx("img", {
            decoding: "async",
            src: e.bgImage,
            alt: "bg",
            style: {
              width: "100%",
              objectFit: "cover"
            }
          })
        })]
      }), E.jsxs("div", {
        className: "board-form-group",
        children: [E.jsx("label", {
          children: f("forumProfileEditNickname")
        }), E.jsx("input", {
          type: "text",
          className: "board-input",
          value: e.nickname,
          onChange: e => t(t => ({
            ...t,
            nickname: e.target.value
          })),
          placeholder: (n == null ? undefined : n.name) || f("forumProfileEditNicknamePlaceholder")
        })]
      }), E.jsxs("div", {
        className: "board-form-group",
        children: [E.jsx("label", {
          children: f("forumProfileEditBio")
        }), E.jsx("textarea", {
          className: "board-textarea",
          value: e.bio,
          onChange: e => t(t => ({
            ...t,
            bio: e.target.value
          })),
          placeholder: f("forumProfileEditBioPlaceholder")
        })]
      }), E.jsx("h3", {
        style: {
          fontSize: "0.9rem",
          color: "#888",
          marginTop: "24px",
          marginBottom: "8px"
        },
        children: f("forumProfileEditPreferences")
      }), E.jsxs("div", {
        className: "forum-switch-card",
        children: [E.jsxs("div", {
          className: "forum-switch-info",
          children: [E.jsx("strong", {
            children: f("forumProfileEditNotifications")
          }), E.jsx("span", {
            children: f("forumProfileEditNotificationsDesc")
          })]
        }), E.jsxs("label", {
          className: "forum-switch",
          children: [E.jsx("input", {
            type: "checkbox",
            defaultChecked: true
          }), E.jsx("span", {
            className: "forum-slider"
          })]
        })]
      }), E.jsxs("div", {
        className: "forum-switch-card",
        children: [E.jsxs("div", {
          className: "forum-switch-info",
          children: [E.jsx("strong", {
            children: f("forumProfileEditAnonDefault")
          }), E.jsx("span", {
            children: f("forumProfileEditAnonDefaultDesc")
          })]
        }), E.jsxs("label", {
          className: "forum-switch",
          children: [E.jsx("input", {
            type: "checkbox",
            checked: c,
            onChange: e => d(e.target.checked)
          }), E.jsx("span", {
            className: "forum-slider"
          })]
        })]
      }), E.jsxs("div", {
        className: "forum-switch-card",
        children: [E.jsxs("div", {
          className: "forum-switch-info",
          children: [E.jsx("strong", {
            children: f("forumProfileEditPublicFollowing")
          }), E.jsx("span", {
            children: f("forumProfileEditPublicFollowingDesc")
          })]
        }), E.jsxs("label", {
          className: "forum-switch",
          children: [E.jsx("input", {
            type: "checkbox",
            defaultChecked: true
          }), E.jsx("span", {
            className: "forum-slider"
          })]
        })]
      }), E.jsxs("div", {
        className: "forum-switch-card",
        children: [E.jsxs("div", {
          className: "forum-switch-info",
          children: [E.jsx("strong", {
            children: f("forumProfileEditFanficSubjectReply")
          }), E.jsx("span", {
            children: f("forumProfileEditFanficSubjectReplyDesc")
          })]
        }), E.jsxs("label", {
          className: "forum-switch",
          children: [E.jsx("input", {
            type: "checkbox",
            checked: e.allowFanficSubjectReply !== false,
            onChange: e => t(t => ({
              ...t,
              allowFanficSubjectReply: e.target.checked
            }))
          }), E.jsx("span", {
            className: "forum-slider"
          })]
        })]
      }), E.jsxs("div", {
        className: "forum-switch-card",
        onClick: () => m(true),
        style: {
          cursor: "pointer"
        },
        children: [E.jsxs("div", {
          className: "forum-switch-info",
          children: [E.jsx("strong", {
            children: f("forumApiSettingsEntry")
          }), E.jsx("span", {
            children: f("forumApiSettingsEntryDesc")
          })]
        }), E.jsx(be, {
          size: 18,
          style: {
            color: "#9F7AEA",
            flexShrink: 0
          }
        })]
      }), E.jsxs("div", {
        className: "forum-switch-card",
        style: {
          flexDirection: "column",
          alignItems: "stretch",
          gap: 8
        },
        children: [E.jsxs("div", {
          className: "forum-switch-info",
          children: [E.jsx("strong", {
            children: f("forumGenTierTitle")
          }), E.jsx("span", {
            children: f("forumGenTierDesc")
          })]
        }), E.jsx("div", {
          style: {
            display: "flex",
            gap: 6
          },
          children: ["lite", "standard", "rich"].map(n => {
            const r = (e.genTier || "standard") === n;
            return E.jsx("button", {
              onClick: () => {
                t(e => ({
                  ...e,
                  genTier: n
                }));
                p.current = null;
              },
              style: {
                flex: 1,
                padding: "8px 10px",
                borderRadius: 10,
                border: r ? "2px solid var(--forum-accent, #4a90e2)" : "1px solid var(--forum-border, #ddd)",
                background: r ? "var(--forum-accent, #4a90e2)" : "transparent",
                color: r ? "#fff" : "inherit",
                fontSize: "0.85rem",
                cursor: "pointer"
              },
              children: f(`forumGenTier_${n}`)
            }, n);
          })
        }), p.current && p.current !== e.genTier && E.jsx("div", {
          style: {
            fontSize: "0.75rem",
            color: "#e67e22",
            marginTop: 4
          },
          children: f("forumGenTierAutoNotice", {
            tier: f(`forumGenTier_${p.current}`)
          }) || `本次自動降檔為「${p.current}」`
        })]
      }), E.jsx("h3", {
        style: {
          fontSize: "0.9rem",
          color: "#888",
          marginTop: "24px",
          marginBottom: "8px"
        },
        children: f("forumAvatarPoolTitle")
      }), E.jsx("p", {
        style: {
          fontSize: "0.78rem",
          color: "#aaa",
          marginBottom: 12
        },
        children: f("forumAvatarPoolDesc")
      }), (e.customAvatarPool || []).length > 0 && E.jsx("div", {
        className: "avatar-pool-grid",
        children: e.customAvatarPool.map((e, n) => E.jsxs("div", {
          className: "avatar-pool-item",
          children: [E.jsx("img", {
            decoding: "async",
            src: e,
            alt: ""
          }), E.jsx("button", {
            className: "avatar-pool-remove",
            onClick: () => {
              t(e => ({
                ...e,
                customAvatarPool: e.customAvatarPool.filter((e, t) => t !== n)
              }));
            },
            children: "✕"
          })]
        }, n))
      }), E.jsxs("div", {
        style: {
          display: "flex",
          gap: 8,
          marginTop: 8
        },
        children: [E.jsx("input", {
          type: "text",
          className: "board-input",
          placeholder: f("forumAvatarPoolUrlPlaceholder"),
          id: "avatar-pool-url-input",
          onKeyDown: e => {
            if (e.key === "Enter") {
              const n = e.target.value.trim();
              if (n && (n.startsWith("http://") || n.startsWith("https://"))) {
                t(e => ({
                  ...e,
                  customAvatarPool: [...(e.customAvatarPool || []), n]
                }));
                e.target.value = "";
              }
            }
          }
        }), E.jsx("button", {
          className: "fanfic-btn-primary",
          style: {
            flexShrink: 0,
            padding: "8px 14px",
            fontSize: "0.85rem"
          },
          onClick: () => {
            var e;
            const n = document.getElementById("avatar-pool-url-input");
            const r = (e = n == null ? undefined : n.value) == null ? undefined : e.trim();
            if (r && (r.startsWith("http://") || r.startsWith("https://"))) {
              t(e => ({
                ...e,
                customAvatarPool: [...(e.customAvatarPool || []), r]
              }));
              n.value = "";
            }
          },
          children: f("forumAvatarPoolAdd")
        })]
      }), E.jsxs("button", {
        className: "board-generate-btn",
        style: {
          marginTop: 24
        },
        onClick: i,
        children: [E.jsx(ve, {
          size: 20
        }), f("forumProfileEditSave")]
      }), r.length > 1 && E.jsx("button", {
        className: "board-generate-btn",
        style: {
          marginTop: 16,
          background: "#e74c6f",
          color: "#fff"
        },
        onClick: () => h(true),
        children: f("forumDeleteAccount")
      })]
    }), u && E.jsx("div", {
      className: "fanfic-modal-overlay",
      onClick: () => h(false),
      children: E.jsxs("div", {
        className: "fanfic-ask-dialog",
        onClick: e => e.stopPropagation(),
        children: [E.jsx("div", {
          className: "fanfic-ask-title",
          children: f("forumDeleteAccount")
        }), E.jsx("div", {
          className: "fanfic-ask-text",
          children: f("forumDeleteAccountConfirm")
        }), E.jsxs("div", {
          className: "fanfic-ask-buttons",
          children: [E.jsx("button", {
            className: "fanfic-btn-secondary",
            onClick: () => h(false),
            children: f("forumFanficCustomNo")
          }), E.jsx("button", {
            className: "fanfic-btn-primary",
            style: {
              background: "#e74c6f"
            },
            onClick: l,
            children: f("forumDeleteAccountYes")
          })]
        })]
      })
    })]
  });
};
const bt = ({
  followedUsers: e,
  setFollowedUsers: t,
  postsIndex: n,
  characters: r,
  resolveCharImage: o,
  getNpcAvatar: a,
  getRoleBadge: s,
  t: i
}) => {
  const l = e.map(e => {
    var t;
    var s;
    const i = (s = (t = n.byAuthor.get(e)) == null ? undefined : t[0]) == null ? undefined : s.author;
    const l = Fe(r, (i == null ? undefined : i.rosterId) || e);
    return {
      id: e,
      name: e,
      avatar: (i == null ? undefined : i.avatar) || o(l) || a(e),
      role: (i == null ? undefined : i.role) || null
    };
  });
  return E.jsx("div", {
    className: "forum-view scrollable nuo-forum-follow-list nuo-forum-following-list",
    children: E.jsx("div", {
      className: "messages-list",
      style: {
        marginTop: "10px"
      },
      children: l.length > 0 ? l.map(e => {
        var n;
        return E.jsxs("div", {
          className: "msg-item nuo-forum-follow-item",
          children: [E.jsx("div", {
            className: "msg-avatar-area",
            children: e.avatar ? E.jsx("img", {
              decoding: "async",
              src: e.avatar,
              alt: "avatar"
            }) : E.jsx("div", {
              style: {
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: "#e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                color: "#999"
              },
              children: ((n = e.name) == null ? undefined : n[0]) || "?"
            })
          }), E.jsx("div", {
            className: "msg-info",
            children: E.jsx("div", {
              className: "msg-header",
              children: E.jsxs("span", {
                className: "msg-name",
                children: [ke(e.name, "???"), " ", s(e.role)]
              })
            })
          }), E.jsx("button", {
            className: "btn-secondary",
            onClick: () => t(t => t.filter(t => t !== e.name)),
            style: {
              fontSize: "0.75rem",
              padding: "4px 10px",
              height: "fit-content"
            },
            children: i("forumUnfollowBtn")
          })]
        }, e.id);
      }) : E.jsx("div", {
        className: "center-msg",
        style: {
          padding: "30px",
          opacity: 0.5
        },
        children: E.jsx("p", {
          children: i("forumFollowingEmpty")
        })
      })
    })
  });
};
const yt = ({
  followedUsers: e,
  setFollowedUsers: t,
  userFollowers: n,
  setUserFollowers: r,
  activePersona: o,
  DUMMY_POSTS: a,
  postsIndex: s,
  characters: i,
  resolveCharImage: l,
  getNpcAvatar: c,
  getRoleBadge: d,
  t: m
}) => {
  const u = (o == null ? undefined : o.name) || m("forumDefaultUsername");
  const h = s.byAuthor.get(u) || [];
  const p = new Set();
  h.forEach(e => (e.interactions || []).forEach(e => {
    if (!e.isAnon && e.author !== u) {
      p.add(e.author);
    }
  }));
  n.forEach(e => {
    if (e) {
      p.add(e);
    }
  });
  const f = [...p].map(e => {
    var t;
    var n;
    const r = (n = (t = s.byAuthor.get(e)) == null ? undefined : t[0]) == null ? undefined : n.author;
    let o = null;
    if (!r) {
      e: for (const s of a) {
        for (const t of s.interactions || []) {
          if (Le(t.author, e)) {
            o = t;
            break e;
          }
        }
      }
    }
    const d = Fe(i, (r == null ? undefined : r.rosterId) || (o == null ? undefined : o.rosterId) || e);
    return {
      id: e,
      name: e,
      avatar: (r == null ? undefined : r.avatar) || (o == null ? undefined : o.avatar) || l(d) || c(e),
      role: (r == null ? undefined : r.role) || null
    };
  });
  return E.jsx("div", {
    className: "forum-view scrollable nuo-forum-follow-list nuo-forum-follower-list",
    children: E.jsx("div", {
      className: "messages-list",
      style: {
        marginTop: "10px"
      },
      children: f.length > 0 ? f.map(n => {
        var o;
        return E.jsxs("div", {
          className: "msg-item nuo-forum-follow-item",
          children: [E.jsx("div", {
            className: "msg-avatar-area",
            children: n.avatar ? E.jsx("img", {
              decoding: "async",
              src: n.avatar,
              alt: "avatar"
            }) : E.jsx("div", {
              style: {
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: "#e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                color: "#999"
              },
              children: ((o = n.name) == null ? undefined : o[0]) || "?"
            })
          }), E.jsx("div", {
            className: "msg-info",
            children: E.jsx("div", {
              className: "msg-header",
              children: E.jsxs("span", {
                className: "msg-name",
                children: [ke(n.name, "???"), " ", d(n.role)]
              })
            })
          }), e.includes(n.name) ? E.jsx("button", {
            className: "btn-secondary",
            onClick: () => t(e => e.filter(e => e !== n.name)),
            style: {
              fontSize: "0.75rem",
              padding: "4px 10px",
              height: "fit-content"
            },
            children: m("forumProfileFollowing")
          }) : E.jsx("button", {
            className: "btn-primary",
            onClick: () => {
              t(e => [...e, n.name]);
              if (Be(i, n.name) || Math.random() > 0.5) {
                r(e => e.includes(n.name) ? e : [...e, n.name]);
              }
            },
            style: {
              fontSize: "0.75rem",
              padding: "4px 10px",
              height: "fit-content"
            },
            children: m("forumProfileFollow")
          })]
        }, n.id);
      }) : E.jsx("div", {
        className: "center-msg",
        style: {
          padding: "30px",
          opacity: 0.5
        },
        children: E.jsx("p", {
          children: m("forumFollowerEmpty")
        })
      })
    })
  });
};
const vt = ({
  BOARDS: e,
  createPostForm: t,
  setCreatePostForm: n,
  getBoardName: r,
  handlePublishPost: o,
  setShowPostImageTypeSelector: a,
  t: s
}) => E.jsxs("div", {
  className: "forum-view scrollable board-create-view nuo-forum-post-create",
  children: [E.jsx("div", {
    className: "board-create-header",
    children: E.jsx("h2", {
      children: s("forumPostCreateTitle")
    })
  }), E.jsxs("div", {
    className: "board-create-form",
    children: [E.jsxs("div", {
      className: "board-form-group",
      children: [E.jsx("label", {
        children: s("forumPostCreateBoardLabel")
      }), E.jsxs("select", {
        className: "board-select",
        value: t.boardId,
        onChange: e => n({
          ...t,
          boardId: e.target.value
        }),
        children: [E.jsx("option", {
          value: "",
          children: s("forumPostCreateBoardPlaceholder")
        }), e.map(e => E.jsxs("option", {
          value: e.id,
          children: [e.icon, " ", r(e)]
        }, e.id))]
      })]
    }), E.jsxs("div", {
      className: "board-form-group",
      children: [E.jsx("label", {
        children: s("forumPostCreateTitleLabel")
      }), E.jsx("input", {
        type: "text",
        className: "board-input",
        value: t.title,
        onChange: e => n({
          ...t,
          title: e.target.value
        }),
        placeholder: s("forumPostCreateTitlePlaceholder")
      })]
    }), E.jsxs("div", {
      className: "board-form-group",
      children: [E.jsx("label", {
        children: s("forumPostCreateContentLabel")
      }), E.jsx("textarea", {
        className: "board-textarea",
        style: {
          minHeight: "180px"
        },
        value: t.content,
        onChange: e => n({
          ...t,
          content: e.target.value
        }),
        placeholder: s("forumPostCreateContentPlaceholder")
      })]
    }), E.jsxs("div", {
      className: "board-form-group",
      children: [E.jsx("label", {
        children: s("forumPostCreateImagesLabel")
      }), E.jsx("div", {
        style: {
          fontSize: 12,
          color: "#999",
          marginBottom: 8
        },
        children: s("forumPostCreateAddImageHint")
      }), E.jsxs("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 8
        },
        children: [(t.images || []).map((e, t) => E.jsxs("div", {
          style: {
            position: "relative",
            aspectRatio: "1",
            borderRadius: 8,
            overflow: "hidden",
            background: "#eee"
          },
          children: [e.startsWith("txt:") ? E.jsx(it, {
            text: e.substring(4),
            aspectRatio: "1/1"
          }) : E.jsx("img", {
            decoding: "async",
            src: e,
            alt: "",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }
          }), E.jsx("button", {
            onClick: () => n(e => ({
              ...e,
              images: e.images.filter((e, n) => n !== t)
            })),
            style: {
              position: "absolute",
              top: 2,
              right: 2,
              width: 20,
              height: 20,
              borderRadius: "50%",
              border: "none",
              background: "rgba(0,0,0,0.6)",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0
            },
            children: E.jsx(z, {
              size: 12
            })
          })]
        }, t)), (t.images || []).length < 4 && E.jsxs("button", {
          onClick: () => a(true),
          style: {
            aspectRatio: "1",
            border: "2px dashed #ccc",
            background: "transparent",
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#999",
            gap: 4
          },
          children: [E.jsx(fe, {
            size: 24
          }), E.jsx("span", {
            style: {
              fontSize: 11
            },
            children: s("forumPostCreateAddImage")
          })]
        })]
      })]
    }), E.jsxs("div", {
      className: "forum-switch-card",
      children: [E.jsxs("div", {
        className: "forum-switch-info",
        children: [E.jsx("strong", {
          children: s("forumPostCreateAnon")
        }), E.jsx("span", {
          children: s("forumPostCreateAnonDesc")
        })]
      }), E.jsxs("label", {
        className: "forum-switch",
        children: [E.jsx("input", {
          type: "checkbox",
          checked: t.isAnon,
          onChange: e => n({
            ...t,
            isAnon: e.target.checked
          })
        }), E.jsx("span", {
          className: "forum-slider"
        })]
      })]
    }), E.jsxs("button", {
      className: "board-generate-btn",
      onClick: o,
      style: {
        marginTop: 24
      },
      children: [E.jsx(se, {
        size: 20
      }), s("forumPostCreateButton")]
    })]
  })]
});
const xt = ({
  postsIndex: e,
  forumDmMessages: t,
  forumDmInbox: n,
  setForumDmInbox: r,
  dmInboxKey: o,
  characters: a,
  resolveCharImage: s,
  getNpcAvatar: i,
  isMutualFollow: l,
  msgTab: d,
  setMsgTab: m,
  handleOpenMessage: u,
  setViewedPost: h,
  pushView: p,
  guardClick: f,
  startLongPress: g,
  cancelLongPress: b,
  t: y
}) => {
  const v = e.reverseScreenMap;
  const x = Object.entries(t).filter(([, e]) => e && e.length > 0).map(([e, t]) => {
    const r = n.find(t => t.id === e);
    const o = t[t.length - 1];
    const i = (r == null ? undefined : r.name) || (e.startsWith("msg_") ? e.slice(4) : e);
    const c = (r == null ? undefined : r.rosterId) || v[i] || i;
    const d = Fe(a, c);
    const m = s(d) || (r == null ? undefined : r.avatar) || null;
    const u = l(i) || l(c);
    return {
      id: e,
      name: i,
      rosterId: d ? c : null,
      avatar: m,
      type: u ? "friend" : "stranger",
      lastMsg: o.sender === "me" ? o.text : `${i}: ${o.text}`,
      timestamp: o.timestamp,
      unread: 0
    };
  });
  const N = new Set(x.map(e => e.id));
  const j = [...x, ...n.filter(e => !N.has(e.id)).map(e => {
    if (e.type === "system") {
      return e;
    }
    const t = e.rosterId || v[e.name] || e.name;
    const n = l(e.name) || l(t);
    return {
      ...e,
      type: n ? "friend" : "stranger"
    };
  })].sort((e, t) => {
    const n = typeof e.timestamp == "string" ? Date.parse(e.timestamp) || 0 : e.timestamp || 0;
    return (typeof t.timestamp == "string" ? Date.parse(t.timestamp) || 0 : t.timestamp || 0) - n;
  }).filter(e => e.type === d);
  return E.jsxs("div", {
    className: "forum-view scrollable nuo-forum-messages-list",
    children: [E.jsx("div", {
      className: "nuo-forum-decor nuo-forum-decor-messages-top",
      "aria-hidden": "true"
    }), E.jsxs("div", {
      className: "feed-tabs nuo-forum-messages-tabs",
      children: [E.jsx("button", {
        className: "feed-tab " + (d === "friend" ? "active" : ""),
        onClick: () => m("friend"),
        children: y("forumMsgFriends")
      }), E.jsx("button", {
        className: "feed-tab " + (d === "stranger" ? "active" : ""),
        onClick: () => m("stranger"),
        children: y("forumMsgStranger")
      }), E.jsx("button", {
        className: "feed-tab " + (d === "system" ? "active" : ""),
        onClick: () => m("system"),
        children: y("forumMsgSystem")
      })]
    }), E.jsx("div", {
      className: "messages-list",
      children: j.length === 0 ? E.jsxs("div", {
        className: "center-msg",
        style: {
          marginTop: 40
        },
        children: [E.jsx(H, {}), E.jsx("p", {
          children: y("forumMsgEmpty")
        })]
      }) : j.map(t => {
        var n;
        const l = t.rosterId || v[t.name] || t.name;
        const d = Fe(a, l);
        const m = s(d) || t.avatar || i(t.name);
        const x = {
          ...t,
          avatar: m,
          rosterId: d ? l : t.rosterId || null
        };
        return E.jsxs("div", {
          className: "msg-item nuo-forum-message-item",
          onClick: f(() => {
            if (t.type === "system" && t.postId) {
              const n = e.byId.get(String(t.postId));
              if (n) {
                h(n);
                p("post-detail");
              }
              r(e => {
                const n = e.filter(e => e.id !== t.id);
                c.set(o, n).catch(() => {});
                return n;
              });
            } else {
              u(x);
            }
          }),
          onPointerDown: e => t.type !== "system" ? g({
            type: "dm",
            dmId: t.id,
            dmName: t.name
          }, e) : null,
          onPointerUp: b,
          onPointerLeave: b,
          children: [E.jsxs("div", {
            className: "msg-avatar-area",
            children: [m ? E.jsx("img", {
              decoding: "async",
              src: m,
              alt: "avatar"
            }) : E.jsx("div", {
              style: {
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                color: "#999"
              },
              children: ((n = t.name) == null ? undefined : n[0]) || "?"
            }), t.unread > 0 && E.jsx("span", {
              className: "msg-badge",
              children: t.unread
            })]
          }), E.jsxs("div", {
            className: "msg-info",
            children: [E.jsxs("div", {
              className: "msg-header",
              children: [E.jsx("span", {
                className: "msg-name",
                children: ke(t.name, "")
              }), E.jsx("span", {
                className: "msg-time",
                children: t.timestamp ? Ee(t.timestamp, y("forumAiContentLang")) : ke(t.time, "")
              })]
            }), E.jsx("div", {
              className: "msg-last",
              children: ke(t.lastMsg, "")
            })]
          })]
        }, t.id);
      })
    }), E.jsx("div", {
      className: "nuo-forum-decor nuo-forum-decor-messages-bottom",
      "aria-hidden": "true"
    })]
  });
};
const Nt = ({
  userDisplayName: e,
  userDisplayAvatar: t,
  activePersona: n,
  profileUsers: r,
  currentProfileUser: o,
  setCurrentProfileUserId: a,
  forumProfile: s,
  getProfileStats: i,
  postsIndex: l,
  DUMMY_POSTS: c,
  meTab: d,
  setMeTab: m,
  renderPost: u,
  getRoleBadge: h,
  pushView: p,
  setShowNewAccountModal: f,
  showClearAllConfirm: g,
  setShowClearAllConfirm: b,
  isClearingAll: y,
  handleClearAllForumData: v,
  t: x
}) => {
  const N = i(e);
  const j = l.byAuthor.get(e) || [];
  const w = (n == null ? undefined : n.name) && n.name !== e && l.byAuthor.get(n.name) || [];
  const S = w.length > 0 ? [...j, ...w] : j;
  const T = c.filter(t => (t.interactions || []).some(t => Le(t.author, e) || Le(t.author, n == null ? undefined : n.name)));
  return E.jsxs("div", {
    className: "forum-view scrollable profile-view nuo-forum-me",
    children: [E.jsx("div", {
      className: "nuo-forum-decor nuo-forum-decor-me-top",
      "aria-hidden": "true"
    }), E.jsxs("div", {
      className: "profile-header personal-profile nuo-forum-me-header",
      children: [t ? E.jsx("img", {
        decoding: "async",
        src: t,
        alt: "avatar",
        className: "profile-hero-avatar nuo-forum-me-avatar"
      }) : E.jsx("div", {
        className: "profile-hero-avatar placeholder",
        children: (e == null ? undefined : e[0]) || "?"
      }), E.jsx("h2", {
        className: "nuo-forum-me-name",
        children: e
      }), s.bio && typeof s.bio == "string" && E.jsx("p", {
        className: "profile-bio-text",
        children: s.bio
      }), (n == null ? undefined : n.role) && h(n.role), E.jsx("div", {
        className: "profile-actions-row",
        children: E.jsx("button", {
          className: "btn-secondary",
          onClick: () => p("profile-edit"),
          style: {
            flex: 1
          },
          children: x("forumEditProfileBtn")
        })
      })]
    }), E.jsxs("div", {
      className: "account-switcher-section",
      children: [E.jsx("h4", {
        className: "switcher-title",
        children: x("forumMyAlteregos")
      }), E.jsxs("div", {
        className: "account-switcher-row",
        children: [r.map(e => {
          var t;
          const n = e.uid || e.id;
          const r = n === ((o == null ? undefined : o.uid) || (o == null ? undefined : o.id));
          return E.jsxs("div", {
            className: "switcher-avatar-wrapper " + (r ? "active" : ""),
            onClick: () => a(n),
            children: [e.avatar ? E.jsx("img", {
              decoding: "async",
              src: e.avatar,
              alt: e.name,
              className: "switcher-avatar"
            }) : E.jsx("div", {
              className: "switcher-avatar placeholder",
              children: ((t = e.name) == null ? undefined : t[0]) || "?"
            }), r && E.jsx("div", {
              className: "switcher-active-ring"
            })]
          }, n);
        }), E.jsx("div", {
          className: "switcher-avatar-wrapper add-account",
          onClick: () => f(true),
          children: E.jsx("div", {
            className: "switcher-avatar placeholder",
            children: "+"
          })
        })]
      })]
    }), E.jsxs("div", {
      className: "profile-stats",
      children: [E.jsxs("div", {
        className: "stat-box",
        onClick: () => p("following-list"),
        children: [E.jsx("strong", {
          children: N.following
        }), E.jsx("span", {
          children: x("forumStatFollowing")
        })]
      }), E.jsxs("div", {
        className: "stat-box",
        onClick: () => p("follower-list"),
        children: [E.jsx("strong", {
          children: N.followers
        }), E.jsx("span", {
          children: x("forumStatFollowers")
        })]
      }), E.jsxs("div", {
        className: "stat-box",
        children: [E.jsx("strong", {
          children: N.posts
        }), E.jsx("span", {
          children: x("forumStatPosts")
        })]
      }), E.jsxs("div", {
        className: "stat-box",
        children: [E.jsx("strong", {
          children: N.likes
        }), E.jsx("span", {
          children: x("forumProfileLikes")
        })]
      })]
    }), E.jsxs("div", {
      className: "profile-tabs",
      children: [E.jsx("button", {
        className: "feed-tab " + (d === "posts" ? "active" : ""),
        onClick: () => m("posts"),
        children: x("forumMeTabPosts")
      }), E.jsx("button", {
        className: "feed-tab " + (d === "replies" ? "active" : ""),
        onClick: () => m("replies"),
        children: x("forumMeTabReplies")
      })]
    }), E.jsxs("div", {
      className: "post-list",
      children: [d === "posts" && (S.length > 0 ? S.map(e => u(e)) : E.jsx("div", {
        className: "center-msg",
        style: {
          padding: "40px 20px",
          opacity: 0.5
        },
        children: E.jsx("p", {
          children: x("forumMeNoPosts")
        })
      })), d === "replies" && (T.length > 0 ? T.map(e => u(e)) : E.jsx("div", {
        className: "center-msg",
        style: {
          padding: "40px 20px",
          opacity: 0.5
        },
        children: E.jsx("p", {
          children: x("forumMeNoReplies")
        })
      }))]
    }), E.jsxs("div", {
      style: {
        padding: "24px 16px 32px",
        marginTop: 8,
        borderTop: "1px solid #f0f0f0"
      },
      children: [E.jsxs("button", {
        onClick: () => b(true),
        style: {
          width: "100%",
          padding: "12px 16px",
          borderRadius: 12,
          border: "1px solid #ffd1d1",
          background: "#fff5f5",
          color: "#e74c6f",
          fontSize: "0.92rem",
          fontWeight: 500,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8
        },
        children: [E.jsx(Q, {
          size: 16
        }), x("forumClearAllData")]
      }), E.jsx("p", {
        style: {
          fontSize: "0.75rem",
          color: "#999",
          textAlign: "center",
          marginTop: 8,
          lineHeight: 1.5
        },
        children: x("forumClearAllDataDesc")
      })]
    }), E.jsx("div", {
      className: "nuo-forum-decor nuo-forum-decor-me-bottom",
      "aria-hidden": "true"
    }), g && E.jsx("div", {
      className: "fanfic-modal-overlay",
      onClick: () => !y && b(false),
      children: E.jsxs("div", {
        className: "fanfic-ask-dialog",
        onClick: e => e.stopPropagation(),
        children: [E.jsx("div", {
          className: "fanfic-ask-title",
          children: x("forumClearAllData")
        }), E.jsx("div", {
          className: "fanfic-ask-text",
          children: x("forumClearAllDataConfirm")
        }), E.jsxs("div", {
          className: "fanfic-ask-buttons",
          children: [E.jsx("button", {
            className: "fanfic-btn-secondary",
            disabled: y,
            onClick: () => b(false),
            children: x("forumFanficCustomNo")
          }), E.jsx("button", {
            className: "fanfic-btn-primary",
            style: {
              background: "#e74c6f"
            },
            disabled: y,
            onClick: v,
            children: y ? E.jsx(re, {
              size: 16,
              className: "spin"
            }) : x("forumClearAllDataYes")
          })]
        })]
      })
    })]
  });
};
const jt = ({
  currentView: e,
  activeTab: t,
  viewedCharacter: n,
  viewedBoard: r,
  BOARDS: o,
  getBoardName: a,
  showSearch: s,
  setShowSearch: i,
  setSearchQuery: l,
  showGenerateMenu: c,
  setShowGenerateMenu: d,
  isGeneratingFeed: m,
  setShowFanficAsk: u,
  handleGenerateFeed: h,
  setPickedRosterIds: p,
  setPickerBoardId: f,
  setPickerMode: g,
  setShowCharPickerModal: b,
  handleBack: y,
  goHome: v,
  t: x,
  customForumName: N
}) => {
  let j = N && N.trim() || x("forumAppTitle");
  if (e === "boards") {
    j = x("forumHeaderBoards");
  }
  if (e === "messages") {
    j = x("forumHeaderMessages");
  }
  if (e === "me") {
    j = x("forumHeaderMe");
  }
  if (e === "profile" && n) {
    j = n.name;
  }
  if (e === "board-detail" && r) {
    j = a(r);
  }
  if (e === "post-detail") {
    j = x("forumHeaderPostDetail");
  }
  if (e === "board-create") {
    j = x("forumHeaderBoardCreate");
  }
  if (e === "post-create") {
    j = x("forumHeaderPostCreate");
  }
  if (e === "profile-edit") {
    j = x("forumHeaderProfileEdit");
  }
  if (e === "following-list") {
    j = x("forumHeaderFollowingList");
  }
  if (e === "follower-list") {
    j = x("forumHeaderFollowerList");
  }
  const w = e === "profile" || e === "board-detail" || e === "post-detail" || e === "board-create" || e === "post-create" || e === "profile-edit" || e === "following-list" || e === "follower-list";
  const S = e === "feed" && t === "feed";
  return E.jsxs("div", {
    className: "forum-header nuo-forum-chrome-header",
    children: [E.jsx("div", {
      className: "nuo-forum-decor nuo-forum-decor-chrome-top",
      "aria-hidden": "true"
    }), E.jsx("div", {
      className: "nuo-forum-decor nuo-forum-decor-chrome-left",
      "aria-hidden": "true"
    }), E.jsx("div", {
      className: "nuo-forum-decor nuo-forum-decor-chrome-right",
      "aria-hidden": "true"
    }), E.jsxs("div", {
      className: "forum-header-inner",
      children: [w ? E.jsx("button", {
        className: "forum-icon-btn",
        onClick: y,
        children: E.jsx(ie, {
          size: 20
        })
      }) : S ? E.jsx("button", {
        className: "forum-icon-btn",
        onClick: v,
        children: E.jsx(ie, {
          size: 20
        })
      }) : E.jsx("div", {
        style: {
          width: 36,
          height: 36,
          flexShrink: 0
        }
      }), E.jsxs("div", {
        className: "forum-title-area",
        children: [E.jsx("h1", {
          className: "forum-title nuo-forum-chrome-title",
          children: ke(j, "")
        }), null]
      }), E.jsxs("div", {
        className: "forum-header-actions",
        children: [(e === "feed" || e === "board-detail" || e === "boards") && E.jsx("button", {
          className: "forum-icon-btn",
          onClick: () => {
            i(e => !e);
            if (s) {
              l("");
            }
          },
          children: E.jsx(pe, {
            size: 18
          })
        }), e === "board-detail" && r && E.jsxs(E.Fragment, {
          children: [E.jsx("button", {
            className: "forum-icon-btn",
            title: x("forumGenerateNewPostsTip"),
            onClick: () => {
              if (r.id === "creator") {
                u(true);
              } else {
                h(r.id, "new");
              }
            },
            disabled: m,
            children: m ? E.jsx(re, {
              size: 18,
              className: "spin"
            }) : E.jsx(oe, {
              size: 18
            })
          }), E.jsx("button", {
            className: "forum-icon-btn",
            title: x("forumGenerateRevivePostsTip"),
            onClick: () => {
              h(r.id, "revive");
            },
            disabled: m,
            children: m ? E.jsx(re, {
              size: 18,
              className: "spin"
            }) : E.jsx(xe, {
              size: 18
            })
          })]
        }), e === "feed" && E.jsxs("div", {
          style: {
            position: "relative"
          },
          children: [E.jsx("button", {
            className: "forum-icon-btn",
            onClick: () => d(e => !e),
            disabled: m,
            children: m ? E.jsx(re, {
              size: 18,
              className: "spin"
            }) : E.jsx(oe, {
              size: 18
            })
          }), c && !m && E.jsxs(E.Fragment, {
            children: [E.jsx("div", {
              className: "forum-generate-backdrop",
              onClick: () => d(false)
            }), E.jsxs("div", {
              className: "forum-generate-menu",
              children: [E.jsx("div", {
                className: "forum-generate-menu-title",
                children: x("forumGenerateMenuTitle")
              }), E.jsxs("button", {
                onClick: () => {
                  d(false);
                  p([]);
                  f(null);
                  g("new");
                  b(true);
                },
                style: {
                  background: "linear-gradient(90deg, rgba(255,107,138,0.08), transparent)",
                  fontWeight: 600
                },
                children: ["🎭 ", x("forumPickCharsTitle") || "指定角色發貼"]
              }), E.jsx("div", {
                className: "forum-generate-section-label",
                children: x("forumGenerateNewSection")
              }), E.jsx("button", {
                onClick: () => {
                  d(false);
                  h(null, "new");
                },
                children: x("forumGenerateRandom")
              }), o.map(e => E.jsxs("button", {
                onClick: () => {
                  d(false);
                  if (e.id === "creator") {
                    u(true);
                  } else {
                    h(e.id, "new");
                  }
                },
                children: [e.icon, " ", a(e)]
              }, "new-" + e.id)), E.jsx("div", {
                className: "forum-generate-section-label",
                children: x("forumGenerateReviveSection")
              }), E.jsx("button", {
                onClick: () => {
                  d(false);
                  h(null, "revive");
                },
                children: x("forumGenerateRandom")
              }), o.map(e => E.jsxs("button", {
                onClick: () => {
                  d(false);
                  h(e.id, "revive");
                },
                children: [e.icon, " ", a(e)]
              }, "revive-" + e.id))]
            })]
          })]
        })]
      })]
    })]
  });
};
const wt = ({
  activeTab: e,
  handleNav: t,
  pushView: n,
  forumDmInbox: r,
  setForumDmInbox: o,
  dmInboxKey: a,
  onLongPressHome: s,
  t: i
}) => {
  const l = k.useRef(null);
  const d = k.useRef(false);
  const m = () => {
    if (l.current) {
      clearTimeout(l.current);
      l.current = null;
    }
  };
  return E.jsxs("div", {
    className: "forum-bottom-nav nuo-forum-chrome-nav",
    children: [E.jsx("div", {
      className: "nuo-forum-decor nuo-forum-decor-nav-top",
      "aria-hidden": "true"
    }), E.jsx("div", {
      className: "nuo-forum-decor nuo-forum-decor-nav-left",
      "aria-hidden": "true"
    }), E.jsx("div", {
      className: "nuo-forum-decor nuo-forum-decor-nav-right",
      "aria-hidden": "true"
    }), E.jsxs("div", {
      className: "forum-bottom-nav-inner",
      children: [E.jsxs("button", {
        className: "nav-item " + (e === "feed" ? "active" : ""),
        onClick: () => {
          if (d.current) {
            d.current = false;
          } else {
            t("feed");
          }
        },
        onPointerDown: () => {
          if (s) {
            d.current = false;
            l.current = setTimeout(() => {
              var e;
              d.current = true;
              try {
                if ((e = navigator == null ? undefined : navigator.vibrate) != null) {
                  e.call(navigator, 30);
                }
              } catch {}
              s();
            }, 550);
          }
        },
        onPointerUp: m,
        onPointerLeave: m,
        onPointerCancel: m,
        children: [E.jsx(le, {
          size: 20
        }), E.jsx("span", {
          children: i("forumNavHome")
        })]
      }), E.jsxs("button", {
        className: "nav-item " + (e === "boards" ? "active" : ""),
        onClick: () => t("boards"),
        children: [E.jsx(ge, {
          size: 20
        }), E.jsx("span", {
          children: i("forumNavBoards")
        })]
      }), E.jsx("button", {
        className: "nav-fab nuo-forum-chrome-fab",
        onClick: () => n("post-create"),
        children: E.jsx(fe, {
          size: 22
        })
      }), E.jsxs("button", {
        className: "nav-item " + (e === "messages" ? "active" : ""),
        onClick: () => {
          o(e => {
            if (!e.some(e => e.unread > 0)) {
              return e;
            }
            const t = e.map(e => e.unread > 0 ? {
              ...e,
              unread: 0
            } : e);
            c.set(a, t).catch(() => {});
            return t;
          });
          t("messages");
        },
        children: [E.jsxs("div", {
          style: {
            position: "relative",
            display: "inline-flex"
          },
          children: [E.jsx(H, {
            size: 20
          }), r.some(e => e.unread > 0) && E.jsx("span", {
            className: "nav-unread-dot"
          })]
        }), E.jsx("span", {
          children: i("forumNavMessages")
        })]
      }), E.jsxs("button", {
        className: "nav-item " + (e === "me" ? "active" : ""),
        onClick: () => t("me"),
        children: [E.jsx(ae, {
          size: 20
        }), E.jsx("span", {
          children: i("forumNavMe")
        })]
      })]
    })]
  });
};
const St = I.lazy(() => v(() => import("./ForumThemePanel-C2ZDH1g8.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])));
if (Number(sessionStorage.getItem("forum_version")) !== 8) {
  ["forum_boards", "forum_posts", "forum_hotRankings", "forum_viewHistory", "forum_activeTab", "forum_viewedCharacter", "forum_viewedBoard", "forum_viewedBoard_id", "forum_viewedPost", "forum_viewedPost_id", "forum_viewedMsg", "forum_userVotes", "forum_events"].forEach(e => sessionStorage.removeItem(e));
  sessionStorage.setItem("forum_version", String(8));
}
class Tt extends k.Component {
  constructor() {
    var t;
    super(...arguments);
    ((t, n, r) => {
      if (n in t) {
        e(t, n, {
          enumerable: true,
          configurable: true,
          writable: true,
          value: r
        });
      } else {
        t[n] = r;
      }
    })(this, typeof (t = "state") != "symbol" ? t + "" : t, {
      hasError: false,
      error: null
    });
  }
  static getDerivedStateFromError(e) {
    return {
      hasError: true,
      error: e
    };
  }
  componentDidCatch(e, t) {
    console.error("[ForumApp] 渲染崩潰:", e, t);
  }
  render() {
    var e;
    if (this.state.hasError) {
      return E.jsxs("div", {
        style: {
          padding: 40,
          textAlign: "center",
          color: "#888"
        },
        children: [E.jsx("p", {
          style: {
            fontSize: "1.1rem",
            marginBottom: 12
          },
          children: "論壇載入異常"
        }), E.jsx("p", {
          style: {
            fontSize: "0.85rem",
            marginBottom: 16,
            opacity: 0.6
          },
          children: ((e = this.state.error) == null ? undefined : e.message) || ""
        }), E.jsx("button", {
          onClick: () => {
            ["forum_boards", "forum_posts", "forum_viewHistory", "forum_activeTab", "forum_viewedCharacter", "forum_viewedBoard", "forum_viewedBoard_id", "forum_viewedPost", "forum_viewedPost_id", "forum_viewedMsg", "forum_userVotes"].forEach(e => sessionStorage.removeItem(e));
            c.clear().catch(() => {});
            this.setState({
              hasError: false,
              error: null
            });
          },
          style: {
            padding: "8px 20px",
            borderRadius: 10,
            border: "1px solid #ddd",
            background: "#fff",
            cursor: "pointer"
          },
          children: "重新載入論壇"
        })]
      });
    } else {
      return this.props.children;
    }
  }
}
function Ct() {
  var e;
  const {
    currentScreen: r,
    goHome: o,
    showScreen: a
  } = d();
  const {
    t: s,
    tOr: i,
    language: l
  } = t();
  const {
    profileUsers: $,
    currentProfileUser: U,
    setCurrentProfileUserId: H,
    setProfileUsers: z,
    generateUID: _,
    deleteUser: G
  } = m();
  const {
    characters: W
  } = u();
  const Y = r === "forum-screen";
  const J = U;
  const V = qe.map(e => {
    const t = Ve[e];
    return {
      id: e,
      name: s(t.nameKey),
      desc: s(t.descKey),
      icon: t.icon,
      posts: 0,
      members: 0
    };
  });
  const [q, K] = I.useState(V);
  const [X, Q] = I.useState(Ke);
  const Z = I.useRef(X);
  I.useEffect(() => {
    Z.current = X;
  }, [X]);
  const ee = I.useRef(new Map());
  const ne = I.useMemo(() => {
    var e;
    var t;
    var n;
    const r = new Map();
    const o = new Map();
    const a = new Map();
    const s = {};
    const i = {};
    for (const l of X) {
      r.set(String(l.id), l);
      const c = (e = l.author) == null ? undefined : e.name;
      if (c) {
        let e = o.get(c);
        if (!e) {
          e = [];
          o.set(c, e);
        }
        e.push(l);
      }
      if (l.boardId) {
        let e = a.get(l.boardId);
        if (!e) {
          e = [];
          a.set(l.boardId, e);
        }
        e.push(l);
      }
      if (((t = l.author) == null ? undefined : t.rosterId) && ((n = l.author) == null ? undefined : n.name) && !s[l.author.rosterId]) {
        s[l.author.rosterId] = l.author.name;
        i[l.author.name] = l.author.rosterId;
      }
      for (const e of l.interactions || []) {
        if (e.rosterId && e.author && !e.isAnon && !s[e.rosterId]) {
          s[e.rosterId] = e.author;
          i[e.author] = e.rosterId;
        }
      }
    }
    return {
      byId: r,
      byAuthor: o,
      byBoard: a,
      screenNameMap: s,
      reverseScreenMap: i
    };
  }, [X]);
  const [re, oe] = I.useState(false);
  const [ae, se] = I.useState({});
  I.useEffect(() => {
    if (!Y) {
      return;
    }
    const e = window.visualViewport;
    if (!e) {
      return;
    }
    const t = document.getElementById("forum-app-screen");
    if (!t) {
      return;
    }
    let n = null;
    let r = false;
    const o = () => {
      t.style.position = "";
      t.style.top = "";
      t.style.left = "";
      t.style.width = "";
      t.style.height = "";
      t.style.transform = "";
    };
    const a = () => {
      if (n) {
        cancelAnimationFrame(n);
      }
      n = requestAnimationFrame(() => {
        if (Math.max(0, window.innerHeight - e.height) > 100) {
          r = true;
          t.style.position = "fixed";
          t.style.top = "0";
          t.style.left = "0";
          t.style.width = "100%";
          t.style.height = `${e.height}px`;
          if (document.documentElement.scrollTop !== 0) {
            document.documentElement.scrollTop = 0;
          }
          if (document.body.scrollTop !== 0) {
            document.body.scrollTop = 0;
          }
        } else if (r) {
          r = false;
          o();
        }
      });
    };
    const s = [];
    const i = () => {
      s.forEach(clearTimeout);
      s.length = 0;
      [200, 450, 800].forEach(e => {
        s.push(setTimeout(() => {
          const e = document.activeElement;
          if (!e || e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" && !e.isContentEditable) {
            if (r) {
              r = false;
              o();
            }
            a();
          }
        }, e));
      });
    };
    e.addEventListener("resize", a);
    e.addEventListener("scroll", a);
    document.addEventListener("focusout", i);
    a();
    return () => {
      e.removeEventListener("resize", a);
      e.removeEventListener("scroll", a);
      document.removeEventListener("focusout", i);
      if (n) {
        cancelAnimationFrame(n);
      }
      s.forEach(clearTimeout);
      o();
    };
  }, [Y]);
  I.useEffect(() => {
    (async () => {
      try {
        const [e, t] = await Promise.all([c.get("posts"), c.get("boards")]);
        if (e && Array.isArray(e) && e.length > 0) {
          Q(e.map(e => ({
            ...e,
            title: ke(e.title, ""),
            content: ke(e.content, ""),
            boardName: ke(e.boardName, ""),
            time: e.time != null ? ke(e.time, "") : undefined,
            author: e.author ? {
              ...e.author,
              name: ke(e.author.name, "???"),
              mood: e.author.mood != null ? ke(e.author.mood, null) : null
            } : e.author,
            interactions: (e.interactions || []).map(e => ({
              ...e,
              author: ke(e.author, "NPC"),
              content: ke(e.content, ""),
              time: e.time != null ? ke(e.time, "") : undefined,
              replyTo: e.replyTo ? {
                ...e.replyTo,
                author: ke(e.replyTo.author, "")
              } : e.replyTo
            }))
          })));
        }
        if (t && Array.isArray(t) && t.length > 0) {
          K(t.map(e => {
            const {
              modAvatar: t,
              _originalModAvatar: n,
              ...r
            } = e;
            return {
              ...r,
              name: ke(r.name, ""),
              desc: ke(r.desc, ""),
              icon: ke(r.icon, "📋"),
              mod: r.mod != null ? ke(r.mod, null) : r.mod
            };
          }));
        }
      } catch (e) {
        console.warn("[Forum] IndexedDB load failed:", e);
        setTimeout(() => {
          try {
            nr(s("forumErrorLoadFailed"));
          } catch {}
        }, 500);
      } finally {
        oe(true);
      }
    })();
  }, []);
  const ie = (J == null ? undefined : J.uid) || (J == null ? undefined : J.id) || "default";
  const de = e => !!e && !!e.isUserMod && (e.userModId ? String(e.userModId) === String(ie) : ie === "default");
  I.useEffect(() => {
    c.get(`profile_${ie}`).then(e => {
      const t = {
        nickname: "",
        bio: "",
        avatar: "",
        bgImage: "",
        allowFanficSubjectReply: true,
        genTier: "standard"
      };
      sr(e ? {
        ...t,
        ...e
      } : t);
    }).catch(() => {
      sr({
        nickname: "",
        bio: "",
        avatar: "",
        bgImage: "",
        allowFanficSubjectReply: true,
        genTier: "standard"
      });
    });
  }, [ie]);
  const ue = e => {
    const t = Ve[e == null ? undefined : e.id];
    if (t) {
      return s(t.nameKey);
    } else {
      return ke(e == null ? undefined : e.name, "");
    }
  };
  const [he, ge] = I.useState(() => {
    const e = sessionStorage.getItem("forum_viewHistory");
    if (e) {
      return JSON.parse(e);
    } else {
      return ["feed"];
    }
  });
  const be = he[he.length - 1] || "feed";
  const [ye, ve] = I.useState(() => sessionStorage.getItem("forum_activeTab") || "feed");
  const [xe, Ee] = I.useState(() => {
    const e = sessionStorage.getItem("forum_viewedCharacter");
    if (e) {
      return JSON.parse(e);
    } else {
      return null;
    }
  });
  const [$e, Re] = I.useState(null);
  const [De, Be] = I.useState(null);
  const [it, lt] = I.useState(() => {
    const e = sessionStorage.getItem("forum_viewedMsg");
    if (e) {
      return JSON.parse(e);
    } else {
      return null;
    }
  });
  const [Tt, Ct] = I.useState(["chat", "daily"]);
  const [At, It] = I.useState(false);
  I.useEffect(() => {
    It(false);
    c.get(`joinedBoards_${ie}`).then(e => {
      Ct(Array.isArray(e) ? e : ["chat", "daily"]);
    }).catch(() => {
      Ct(["chat", "daily"]);
    }).finally(() => It(true));
  }, [ie]);
  const [Et, kt] = I.useState([]);
  const [$t, Pt] = I.useState([]);
  const [Mt, Rt] = I.useState(false);
  I.useEffect(() => {
    Rt(false);
    Promise.all([c.get(`followedUsers_${ie}`).catch(() => null), c.get(`userFollowers_${ie}`).catch(() => null)]).then(([e, t]) => {
      kt(Array.isArray(e) ? e : []);
      Pt(Array.isArray(t) ? t : []);
    }).catch(() => {
      kt([]);
      Pt([]);
    }).finally(() => Rt(true));
  }, [ie]);
  const Ot = e => Et.includes(e) && $t.includes(e);
  const [Dt, Ft] = I.useState("friend");
  const [Bt, Lt] = I.useState("hot");
  const [Ut, Ht] = I.useState("posts");
  const [zt, _t] = I.useState([]);
  const [Gt, Wt] = I.useState(false);
  const [Yt, Jt] = I.useState({
    type: "worldbook",
    worldBookId: "",
    name: "",
    rules: "",
    content: "",
    postLengthMin: 80,
    postLengthMax: 250,
    userRole: "",
    allowedGroups: [],
    coverImage: "",
    isUserMod: false,
    jailbreakEnabled: false,
    jailbreakEntryIds: []
  });
  const [Vt, qt] = I.useState({
    boardId: "",
    title: "",
    content: "",
    isAnon: false,
    images: []
  });
  const [Kt, Xt] = I.useState(false);
  const [Qt, Zt] = I.useState(false);
  const [en, tn] = I.useState([]);
  const [nn, rn] = I.useState(false);
  const [on, an] = I.useState(false);
  const [sn, ln] = I.useState(false);
  const [cn, dn] = I.useState([]);
  const mn = I.useRef(null);
  const un = I.useCallback(() => {
    mn.current ||= (async () => {
      try {
        const e = (await h.getAll()) || [];
        const t = (await p.getAll().catch(() => [])) || [];
        const n = [...e, ...t].filter(e => e && e.url && e.meaning);
        dn(n);
      } catch (e) {}
    })();
    return mn.current;
  }, []);
  const [hn, pn] = I.useState("");
  const [fn, gn] = I.useState(false);
  const [bn, yn] = I.useState(null);
  const [vn, xn] = I.useState("hot");
  const [Nn, jn] = I.useState(false);
  const [wn, Sn] = I.useState(false);
  const [Tn, Cn] = I.useState(false);
  const [An, In] = I.useState(false);
  const [En, kn] = I.useState([]);
  const [$n, Pn] = I.useState(null);
  const [Mn, Rn] = I.useState("new");
  const [On, Dn] = I.useState(0);
  const [Fn, Bn] = I.useState(false);
  const [Ln, Un] = I.useState(false);
  const [Hn, zn] = I.useState({
    cpA: "",
    cpB: "",
    wordCountMin: 300,
    wordCountMax: 600,
    outline: "",
    ending: "HE",
    style: "",
    totalChapters: 10,
    jailbreakEnabled: false,
    jailbreakEntryIds: []
  });
  const _n = I.useMemo(() => je(zt), [zt]);
  const Gn = I.useCallback((e, t) => {
    if (_n.length === 0) {
      return E.jsx("div", {
        className: "forum-jb-empty",
        children: i("forumJailbreakEmpty", "尚未建立核心設定世界書條目。請到「世界書」新增「核心設定」類型條目。")
      });
    }
    const n = Array.isArray(e) ? e : [];
    return E.jsx("div", {
      className: "forum-jb-list",
      children: _n.map(e => {
        const r = n.some(t => String(t) === String(e.id));
        return E.jsxs("label", {
          className: `forum-jb-item ${r ? "active" : ""} ${e.disabled ? "is-disabled" : ""}`,
          children: [E.jsx("input", {
            type: "checkbox",
            checked: r,
            onChange: () => t(e.id)
          }), E.jsxs("div", {
            className: "forum-jb-meta",
            children: [E.jsxs("div", {
              className: "forum-jb-name",
              children: [e.name, e.disabled && E.jsxs("span", {
                className: "forum-jb-tag",
                children: ["·", i("forumJailbreakDisabledTag", "已停用")]
              })]
            }), e.bookTitle && E.jsx("div", {
              className: "forum-jb-book",
              children: e.bookTitle
            })]
          })]
        }, e.id);
      })
    });
  }, [_n, i]);
  const [Wn, Yn] = I.useState(() => {
    const e = sessionStorage.getItem("forum_userVotes");
    if (e) {
      return JSON.parse(e);
    } else {
      return {};
    }
  });
  const [Jn, Vn] = I.useState("hot");
  const [qn, Kn] = I.useState("");
  const [Xn, Qn] = I.useState(false);
  const [Zn, er] = I.useState("");
  const tr = k.useRef(null);
  const nr = (e, t = 3000) => {
    er(e);
    if (tr.current) {
      clearTimeout(tr.current);
    }
    tr.current = setTimeout(() => er(""), t);
  };
  const [rr, or] = I.useState([]);
  const [ar, sr] = I.useState({
    nickname: "",
    bio: "",
    avatar: "",
    bgImage: "",
    allowFanficSubjectReply: true,
    customAvatarPool: [],
    genTier: "standard"
  });
  const ir = k.useRef(null);
  const lr = I.useCallback(() => ir.current || ar.genTier || "standard", [ar.genTier]);
  const [cr, dr] = I.useState(null);
  const [mr, ur] = I.useState(null);
  const [hr, pr] = I.useState(null);
  const fr = k.useRef(null);
  const gr = k.useRef(null);
  const br = k.useRef(false);
  const yr = k.useRef(null);
  const [vr, xr] = I.useState(null);
  const [Nr, jr] = I.useState(false);
  const [wr, Sr] = I.useState("");
  const [Tr, Cr] = I.useState(false);
  const [Ar, Ir] = I.useState(false);
  const [Er, kr] = I.useState(false);
  const [$r, Pr] = I.useState(false);
  const [Mr, Rr] = I.useState(false);
  const [Or, Dr] = I.useState("");
  const [Fr, Br] = I.useState("");
  I.useEffect(() => {
    let e = false;
    const t = async () => {
      const {
        forumName: t,
        welcomeText: n
      } = await Te();
      if (!e) {
        Dr(t);
        Br(n);
      }
    };
    t();
    const n = () => t();
    window.addEventListener("forum-theme-text-changed", n);
    return () => {
      e = true;
      window.removeEventListener("forum-theme-text-changed", n);
    };
  }, []);
  I.useEffect(() => {
    Se().catch(e => console.error("[ForumApp] re-init theme failed:", e));
  }, []);
  const [Lr, Ur] = I.useState(false);
  const [Hr, zr] = I.useState(null);
  const [_r, Gr] = I.useState({});
  const [Wr, Yr] = I.useState([]);
  const [Jr, Vr] = I.useState("");
  const [qr, Kr] = I.useState(false);
  const Xr = k.useRef(null);
  const Qr = `dm_messages_${ie}`;
  const Zr = `dm_inbox_${ie}`;
  const eo = k.useRef(ie);
  eo.current = ie;
  const to = k.useRef({});
  const no = I.useCallback((e, t) => {
    if (!Array.isArray(t) || t.length === 0) {
      return e;
    }
    const n = new Map();
    for (const r of e) {
      if (r && r.id) {
        n.set(r.id, r);
      }
    }
    for (const r of t) {
      if (r && r.id) {
        n.set(r.id, r);
      }
    }
    return [...n.values()];
  }, []);
  const [ro, oo] = I.useState({});
  I.useEffect(() => {
    let e = false;
    f.getByUser(ie).then(t => {
      if (e) {
        return;
      }
      const n = {};
      (t || []).forEach(e => {
        if (e.partnerAvatar) {
          n[String(e.characterId)] = e.partnerAvatar;
        }
      });
      oo(n);
    }).catch(() => {});
    return () => {
      e = true;
    };
  }, [ie]);
  const ao = k.useCallback(e => {
    if (!e) {
      return null;
    }
    const t = ro[String(e.id)];
    if (t && !String(t).startsWith("txt:")) {
      return t;
    } else if (e.image && !String(e.image).startsWith("txt:")) {
      return e.image;
    } else {
      return null;
    }
  }, [ro]);
  I.useEffect(() => {
    Gr({});
    Yr([]);
    Kr(false);
    let e = false;
    (async () => {
      var t;
      var n;
      let r = await c.get(Qr).catch(() => null);
      if (!r || Object.keys(r).length === 0) {
        const e = await c.get("dm_messages").catch(() => null);
        if (e && typeof e == "object" && Object.keys(e).length > 0) {
          r = e;
          await c.set(Qr, r).catch(() => {});
          await c.set("dm_messages", {}).catch(() => {});
        }
      }
      const o = await c.get(Zr).catch(() => null);
      if (e) {
        return;
      }
      const a = Array.isArray(o) ? o : [];
      const s = r && typeof r == "object" ? {
        ...r
      } : {};
      const i = new Map();
      const l = [];
      const d = new Map();
      for (const e of a) {
        if (!e || !e.id) {
          continue;
        }
        if (e.type === "system") {
          l.push(e);
          continue;
        }
        const t = e.name;
        if (!t) {
          l.push(e);
          continue;
        }
        const n = "msg_" + t;
        if (e.id !== n) {
          d.set(e.id, n);
        }
        if (!i.has(n)) {
          i.set(n, []);
        }
        i.get(n).push(e);
      }
      const m = [...l];
      for (const [e, c] of i) {
        c.sort((e, t) => {
          const n = typeof e.timestamp == "string" ? Date.parse(e.timestamp) || 0 : e.timestamp || 0;
          return (typeof t.timestamp == "string" ? Date.parse(t.timestamp) || 0 : t.timestamp || 0) - n;
        });
        const r = c[0];
        m.push({
          ...r,
          id: e,
          avatar: ((t = c.find(e => e.avatar)) == null ? undefined : t.avatar) || null,
          rosterId: ((n = c.find(e => e.rosterId)) == null ? undefined : n.rosterId) || null,
          unread: c.reduce((e, t) => e + (Number(t.unread) || 0), 0)
        });
      }
      for (const [e, c] of d) {
        if (e === c) {
          continue;
        }
        const t = Array.isArray(s[e]) ? s[e] : [];
        const n = Array.isArray(s[c]) ? s[c] : [];
        if (t.length === 0) {
          delete s[e];
          continue;
        }
        const r = new Set();
        const o = [...n, ...t].filter(e => {
          const t = e && e.id;
          return !t || !r.has(t) && (r.add(t), true);
        }).sort((e, t) => (e.timestamp || 0) - (t.timestamp || 0));
        s[c] = o;
        delete s[e];
      }
      for (const e of Object.keys(s)) {
        if (!e.startsWith("dm_")) {
          continue;
        }
        const t = /^dm_\d+_(.+)$/.exec(e);
        if (!t) {
          continue;
        }
        const n = "msg_" + t[1];
        if (n === e) {
          continue;
        }
        const r = Array.isArray(s[e]) ? s[e] : [];
        const o = Array.isArray(s[n]) ? s[n] : [];
        const a = new Set();
        const i = [...o, ...r].filter(e => {
          const t = e && e.id;
          return !t || !a.has(t) && (a.add(t), true);
        }).sort((e, t) => (e.timestamp || 0) - (t.timestamp || 0));
        s[n] = i;
        delete s[e];
      }
      const u = d.size > 0 || m.length !== a.length;
      const h = d.size > 0 || Object.keys(s).length !== Object.keys(r && typeof r == "object" ? r : {}).length;
      if (u) {
        await c.set(Zr, m).catch(() => {});
      }
      if (h) {
        await c.set(Qr, s).catch(() => {});
      }
      if (!e) {
        Gr(s);
        Yr(m);
      }
    })();
    return () => {
      e = true;
    };
  }, [Qr, Zr]);
  I.useEffect(() => {
    if (be === "msg-detail" && Xr.current) {
      setTimeout(() => {
        if (Xr.current) {
          Xr.current.scrollTop = Xr.current.scrollHeight;
        }
      }, 100);
    }
  }, [be, it]);
  const so = (e, t) => {
    var n;
    var r;
    br.current = false;
    if (((t == null ? undefined : t.type) === "touchstart" || (t == null ? undefined : t.type) === "pointerdown") && (r = (n = t == null ? undefined : t.target) == null ? undefined : n.addEventListener) != null) {
      r.call(n, "contextmenu", io, {
        once: true
      });
    }
    gr.current = setTimeout(() => {
      var t;
      br.current = true;
      co.current = Date.now();
      try {
        if ((t = navigator == null ? undefined : navigator.vibrate) != null) {
          t.call(navigator, 30);
        }
      } catch {}
      dr(e);
    }, 600);
  };
  const io = e => e.preventDefault();
  const lo = () => {
    if (gr.current) {
      clearTimeout(gr.current);
      gr.current = null;
    }
  };
  const co = k.useRef(0);
  const mo = e => t => {
    var n;
    if (br.current) {
      if (Date.now() - co.current > 1500) {
        console.warn("[Forum] longPressTriggered stuck, force reset");
        br.current = false;
        if (e != null) {
          e(t);
        }
        return;
      } else {
        br.current = false;
        if ((n = t == null ? undefined : t.preventDefault) != null) {
          n.call(t);
        }
        return;
      }
    }
    if (e != null) {
      e(t);
    }
  };
  const uo = (e, t) => {
    var n;
    const r = (n = e.target.files) == null ? undefined : n[0];
    if (!r) {
      return;
    }
    const o = new FileReader();
    o.onload = e => {
      const n = e.target.result;
      if (t === "create") {
        Jt(e => ({
          ...e,
          coverImage: n
        }));
      } else if (t === "edit" && mr) {
        ur(e => ({
          ...e,
          coverImage: n
        }));
      }
    };
    o.readAsDataURL(r);
    e.target.value = "";
  };
  I.useEffect(() => {
    g.getAll().then(_t);
  }, []);
  I.useEffect(() => {
    const e = sessionStorage.getItem("forum_viewedBoard_id");
    if (e && !$e) {
      const t = q.find(t => t.id === e);
      if (t) {
        Re(t);
      }
    }
    const t = sessionStorage.getItem("forum_viewedPost_id");
    if (t && !De) {
      const e = ne.byId.get(t);
      if (e) {
        Be(e);
      }
    }
  }, []);
  I.useEffect(() => {
    if (Number(sessionStorage.getItem("forum_version")) !== 8) {
      ["forum_boards", "forum_posts", "forum_viewHistory", "forum_activeTab", "forum_viewedCharacter", "forum_viewedBoard", "forum_viewedBoard_id", "forum_viewedPost", "forum_viewedPost_id", "forum_viewedMsg", "forum_userVotes"].forEach(e => sessionStorage.removeItem(e));
      sessionStorage.setItem("forum_version", String(8));
      c.clear().catch(() => {});
      K(V);
      Q(Ke);
      ge(["feed"]);
      Ct(["chat", "daily"]);
      kt([]);
      Yn({});
      Be(null);
      Re(null);
      Ee(null);
    }
  }, []);
  const ho = (e, t) => {
    try {
      sessionStorage.setItem(e, typeof t == "string" ? t : JSON.stringify(t));
    } catch {}
  };
  I.useEffect(() => {
    ho("forum_viewHistory", he);
    ho("forum_activeTab", ye);
    if (xe) {
      ho("forum_viewedCharacter", JSON.stringify(xe));
    } else {
      sessionStorage.removeItem("forum_viewedCharacter");
    }
    if ($e) {
      ho("forum_viewedBoard_id", $e.id || "");
    } else {
      sessionStorage.removeItem("forum_viewedBoard_id");
    }
    if (De) {
      ho("forum_viewedPost_id", String(De.id || ""));
    } else {
      sessionStorage.removeItem("forum_viewedPost_id");
    }
    if (it) {
      ho("forum_viewedMsg", JSON.stringify(it));
    } else {
      sessionStorage.removeItem("forum_viewedMsg");
    }
    ho("forum_userVotes", Wn);
  }, [he, ye, xe, $e, De, it, Wn]);
  I.useEffect(() => {
    if (At) {
      c.set(`joinedBoards_${ie}`, Tt).catch(() => {});
    }
  }, [Tt, At, ie]);
  I.useEffect(() => {
    if (Mt) {
      c.set(`followedUsers_${ie}`, Et).catch(() => {});
      c.set(`userFollowers_${ie}`, $t).catch(() => {});
    }
  }, [Et, $t, Mt, ie]);
  const po = k.useRef(null);
  I.useEffect(() => {
    if (re) {
      if (po.current) {
        clearTimeout(po.current);
      }
      po.current = setTimeout(() => {
        c.set("posts", X).catch(e => console.warn("[Forum] DB save posts failed:", e));
        c.set("boards", q).catch(e => console.warn("[Forum] DB save boards failed:", e));
      }, 1000);
      return () => {
        if (po.current) {
          clearTimeout(po.current);
        }
      };
    }
  }, [X, q, re]);
  const fo = () => ne.screenNameMap;
  I.useEffect(() => {
    if (q.filter(e => qe.includes(e.id) && !e.modRosterId && !e.mod).length === 0) {
      return;
    }
    const e = fo();
    const t = ((e, t = {}) => {
      const n = {};
      const r = new Set();
      const o = e => `${e.name || ""} ${e.role || ""} ${e.description || ""}`.toLowerCase();
      const a = (n, o, a) => {
        if (!e || e.length === 0) {
          return null;
        }
        const s = e.filter(e => !r.has(e.id)).map(e => ({
          char: e,
          score: o(e)
        })).sort((e, t) => t.score - e.score)[0];
        if (!s || s.score < 4) {
          return null;
        } else {
          r.add(s.char.id);
          return {
            rosterId: s.char.name,
            avatar: s.char.image || null,
            screenName: t[s.char.name] || null,
            personality: a(s.char)
          };
        }
      };
      const s = e => {
        const t = Je[e];
        if (t) {
          return {
            rosterId: null,
            avatar: null,
            screenName: null,
            personality: t.personality
          };
        } else {
          return null;
        }
      };
      n.chat = a(0, e => {
        const t = o(e);
        let n = 0;
        if (/活潑|外向|開朗|話多|搞笑|幽默|outgoing|cheerful|talkative|funny|humor|social/i.test(t)) {
          n += 5;
        }
        if (ze.test(t)) {
          n += 3;
        }
        if (/內向|沉默|quiet|introvert|shy/i.test(t)) {
          n -= 3;
        }
        return n;
      }, e => /活潑|外向|開朗|話多|outgoing|cheerful|talkative|social/i.test(o(e)) ? "outgoing" : "neutral") || s("chat");
      n.daily = a(0, e => {
        const t = o(e);
        let n = 0;
        if (/溫柔|溫暖|gentle|warm|caring|善良|kind|cook|料理|烹飪|家務/i.test(t)) {
          n += 5;
        }
        if (Ge.test(t)) {
          n += 2;
        }
        return n;
      }, () => "warm") || s("daily");
      n.question = a(0, e => {
        const t = o(e);
        let n = 0;
        if (_e.test(t)) {
          n += 5;
        }
        if (We.test(t)) {
          n += 4;
        }
        if (/聰明|smart|intelligent|知識|knowledge|學者|scholar|博學/i.test(t)) {
          n += 3;
        }
        return n;
      }, () => "reserved") || s("question");
      n.creator = a(0, e => {
        const t = o(e);
        let n = 0;
        if (Ge.test(t)) {
          n += 5;
        }
        if (/想像力|creative|imagination|夢想|dream|浪漫|romantic/i.test(t)) {
          n += 3;
        }
        if (ze.test(t)) {
          n += 2;
        }
        return n;
      }, () => "creative") || s("creator");
      n.whisper = a(0, e => {
        const t = o(e);
        let n = 0;
        if (/溫柔|善解人意|empathy|understanding|溫暖|gentle|心理|psychology|治癒|heal/i.test(t)) {
          n += 5;
        }
        if (/神秘|mysterious|secret|暗|dark/i.test(t)) {
          n += 2;
        }
        return n;
      }, () => "reserved") || s("whisper");
      return n;
    })(W, e);
    se(t);
    const n = {
      chat: s("forumNpcModChat"),
      daily: s("forumNpcModDaily"),
      question: s("forumNpcModQuestion"),
      creator: s("forumNpcModCreator"),
      whisper: s("forumNpcModWhisper")
    };
    K(e => e.map(e => {
      const r = t[e.id];
      if (!r) {
        return e;
      }
      const o = r.rosterId ? r.screenName || r.rosterId : n[e.id] || r.screenName;
      return {
        ...e,
        mod: o,
        modRosterId: r.rosterId || null,
        modPersonality: r.personality || "neutral"
      };
    }));
  }, [W.length]);
  if (!Y) {
    return null;
  }
  const go = (e, t) => {
    Q(n => n.map(n => n.id === e ? t(n) : n));
  };
  const bo = e => {
    if (!e) {
      return ["Default"];
    }
    if (e.type === "npc") {
      if (!Array.isArray(e.boundTo) || e.boundTo.length === 0) {
        return [e.group || "Default"];
      }
      const t = e.boundTo.map(e => W.find(t => String(t.id) === String(e))).filter(e => e && e.type !== "npc");
      if (t.length === 0) {
        return [e.group || "Default"];
      }
      const n = new Set(t.map(e => e.group || "Default"));
      if (e.group) {
        n.add(e.group);
      }
      return [...n];
    }
    return [e.group || "Default"];
  };
  const yo = (e, t) => {
    if (!t) {
      return e;
    }
    const n = q.find(e => e.id === t);
    if ((n == null ? undefined : n.allowedGroups) && n.allowedGroups.length !== 0) {
      return e.filter(e => bo(e).some(e => n.allowedGroups.includes(e)));
    } else {
      return e;
    }
  };
  const vo = (e, t = {}) => {
    const {
      isReply: n = false,
      viralChance: r = 0.12
    } = t;
    const o = q.find(t => t.id === e);
    const a = Math.max(50, (o == null ? undefined : o.members) || 500);
    const s = a < 300 ? 0.05 : a < 1500 ? 0.1 : a < 8000 ? 0.25 : a < 30000 ? 0.5 : 1;
    const i = Math.random() < r ? 3 + Math.random() * 5 : 1;
    const l = n ? 0.4 : 1;
    const c = Math.max(0, Math.floor((Math.random() * 80 + 3) * s * i * l));
    const d = Math.max(c * 3, Math.floor((Math.random() * 800 + 30) * s * i * l * 1.5));
    return {
      likes: c,
      dislikes: Math.floor(Math.random() * Math.max(2, c * 0.08)),
      views: d
    };
  };
  const xo = (e, t) => {
    if (!e || !t) {
      return true;
    }
    const n = q.find(e => e.id === t);
    if (!(n == null ? undefined : n.allowedGroups) || n.allowedGroups.length === 0) {
      return true;
    }
    const r = Fe(W, e);
    return !r || bo(r).some(e => n.allowedGroups.includes(e));
  };
  const No = e => {
    const t = ne.byAuthor.get(e) || [];
    const n = t.reduce((e, t) => e + t.likes, 0);
    const r = X.reduce((t, n) => t + (n.interactions || []).filter(t => Le(t.author, e)).length, 0);
    const o = new Set();
    t.forEach(t => (t.interactions || []).forEach(t => {
      if (!t.isAnon && t.author && t.author !== e) {
        o.add(t.author);
      }
    }));
    if (jo().includes(e)) {
      $t.forEach(e => {
        if (e) {
          o.add(e);
        }
      });
    }
    return {
      posts: t.length,
      likes: n,
      replies: r,
      following: Et.length,
      followers: o.size
    };
  };
  const jo = () => {
    const e = new Set();
    if (Uo) {
      e.add(Uo);
    }
    if (J == null ? undefined : J.name) {
      e.add(J.name);
    }
    if (U == null ? undefined : U.name) {
      e.add(U.name);
    }
    if (U == null ? undefined : U.nickname) {
      e.add(U.nickname);
    }
    return [...e].filter(Boolean);
  };
  const wo = (e, t) => {
    const n = jo();
    return n.length !== 0 && (!!e && !!n.some(t => Le(t, e)) || !!t && !!n.some(e => Le(e, t)));
  };
  const So = () => {
    const e = jo();
    if (e.length === 0) {
      return "";
    }
    const t = (J == null ? undefined : J.name) || (U == null ? undefined : U.name) || "";
    const n = (J == null ? undefined : J.gender) || (U == null ? undefined : U.gender) || "";
    const r = n === "male" ? "male (男)" : n === "female" ? "female (女)" : n || "";
    return `\n\n## 🚨 USER IDENTITY PROTECTION — HIGHEST PRIORITY (violating this BREAKS the app)\nThe following names belong to the REAL HUMAN USER of this app. They are NOT NPCs and NOT roster characters you may speak for:\n${e.map(e => `- "${e}"`).join("\n")}${r ? `\nThe user's gender is: ${r}. When NPCs discuss or reference the user, use correct gendered language (他/她/he/she). DO NOT get this wrong.` : ""}\n\nABSOLUTELY FORBIDDEN:\n- Setting "author" / "authorName" to any name above (or any obvious variation)\n- Setting "rosterId" to "${t}" or any name above\n- Generating ANY post, reply, or DM that pretends to be written BY the user\n- Putting words in the user's mouth — they speak for themselves through the app UI only\n- Creating "alt accounts" / similar screen names for the user\n- Generating moderator ACTIONS (isModAction, modActionType like lock/pin/warning/announce) on behalf of the user — the user performs their own mod actions through the app UI\n\n🚨 EXPERIENCE OWNERSHIP — equally hard rule:\nAnything shown in STORYLINE CONTEXT (shared memories, chat snippets, events, unresolved threads) is the PRIVATE LIVED EXPERIENCE of the user${t ? ` ("${t}")` : ""} and the roster character(s) named in that block — and ONLY them. For every NPC / random forum user / anonymous poster you generate, their relationship to that material is strictly OUTSIDER.\n\nOutsider stance for NPCs referencing storyline material — always third-person and uncertain:\n- Rumor framing: "I heard…", "people are saying…", "someone on another thread mentioned…"\n- Sighting framing: "saw [roster char's screen name] at X last week, looked off"\n- Speculation / debate: discuss the topic abstractly, argue about what the involved character might be feeling, take sides on a rumored situation\n- Fandom / observer commentary about the roster character — never about themselves\n\nThe roster character(s) actually involved are different — they CAN allude to their own side of the storyline (cryptically, in screen-name mode), because it is genuinely their experience.\n\nFormat contrast for NPC reply to a storyline-adjacent thread:\n✅ "听说 [roster screen name] 最近好像状态不太对，有人知道吗" — outsider, hearsay, third-person\n✅ "这种情况我朋友身边也有，但具体怎样我不清楚" — abstract resonance, NOT claiming the user's specific scene\n❌ NPC narrating the user's specific scene/events from a first-person POV as their own life\n❌ NPC claiming a personal relationship with the involved roster character that mirrors the user's relationship\n❌ A chain of NPCs validating / corroborating another NPC's first-person claim of the user's storyline — chorus of agreement on stolen experience is the single worst failure mode here\n\nWhy this matters: when an NPC narrates the user's actual storyline as their own and others agree, the user feels erased from their own story. Always preserve experience ownership.\n\nYOUR JOB: generate content from EVERYONE ELSE — random NPC users, roster characters, anonymous posters — but NEVER the user, and keep every NPC firmly in outsider stance toward the user's storyline. If a screen name you're about to use collides with a protected name above, CHANGE it to something else. The user's reactions, posts, replies, and life experiences come from the real human, not from you.\n`;
  };
  const To = async e => {
    if (!e) {
      return "";
    }
    if (ot[e.id]) {
      return "";
    }
    const t = [];
    if (e.boardPersonality) {
      t.push(`## Board Personality & Culture:\n${e.boardPersonality}`);
    }
    if (e.worldBookId) {
      try {
        const n = zt.find(t => String(t.id) === String(e.worldBookId));
        if (n) {
          const e = (n.entries || []).filter(e => e && e.content && !e.disable && e.enabled !== false && e.type !== "imagegen").map(e => `- ${e.name}: ${e.content}`).join("\n");
          t.push(`## World/Setting (this board exists INSIDE this world — ALL content must be in-character):\n${n.title}${n.description ? ": " + n.description : ""}\n${e}`);
        }
      } catch {}
    }
    if (t.length <= 1 && e.customContext) {
      t.push(`## Board World/Theme Context:\n${e.customContext}`);
    }
    if (t.length === 0 && e.desc) {
      t.push(`## Board Theme:\nBoard "${e.name}": ${e.desc}\nAll posts and replies must match this board's theme and setting.`);
    }
    if (e.postLengthMin || e.postLengthMax) {
      const n = e.postLengthMin || 80;
      const r = e.postLengthMax || 250;
      const o = 10;
      const a = 40;
      const s = Math.max(40, Math.round(n * 0.5));
      const i = Math.max(120, Math.round(r * 0.5));
      const l = Math.max(120, Math.round(n * 1));
      const c = Math.max(300, Math.round(r * 1.2));
      t.push(`## ⛓ BOARD LENGTH REQUIREMENT — OVERRIDES any default POST LENGTH in board strategy/prompt above\n- Each POST body MUST be ${n}-${r} characters. ${r >= 400 ? "This board requires LONG-FORM content — write detailed, immersive posts with rich descriptions, dialogue, and narrative depth. Do NOT write thin summaries." : r >= 200 ? "Write moderately detailed posts." : "Keep posts concise."}\n- REPLY length distribution for posts on this board (scales with post length):\n  - ~50% short reactions: ${o}-${a} chars\n  - ~30% medium comments: ${s}-${i} chars\n  - ~20% long takes: ${l}-${c} chars\n- If a board strategy/prompt above states a different length, IGNORE that — these board-specific numbers WIN.`);
    }
    if (e.userRole) {
      const n = (J == null ? undefined : J.name) || Uo;
      t.push(`## USER IDENTITY IN THIS BOARD:\nThe forum user "${n}" has the role/identity: "${e.userRole}" in this board's world. Other forum users may discuss, reference, or react to this person as fans, followers, colleagues, etc. When "${n}" posts or comments, NPCs should react appropriately to their status.`);
    }
    if (de(e)) {
      const e = Uo || (J == null ? undefined : J.name) || "Moderator";
      t.push(`## USER IS THE MODERATOR (版主) OF THIS BOARD:\n"${e}" is the board moderator.\n- "${e}"'s opinions carry extra authority — forum users treat mod comments more seriously\n- Some NPCs may show respect: "版主說得對", "版主出來了"\n- Some NPCs may joke about mod power: "版主說了算", "不敢反駁版主hhh"\n\n⚠️ CRITICAL: You must NEVER simulate "${e}" performing moderator actions (locking, pinning, warning, announcing). The user controls their own actions — you only generate NPC reactions. Do NOT generate isModAction or modActionType for the user.`);
    }
    return t.join("\n\n");
  };
  const Co = () => {
    const e = fo();
    const t = Object.entries(e);
    if (t.length === 0) {
      return "";
    } else {
      return `\n⚠️ EXISTING SCREEN NAME MAPPING (MUST reuse — do NOT invent new names for these characters):\n${t.map(([e, t]) => `- "${e}" → screen name: "${t}"`).join("\n")}\nIf a roster character appears, they MUST use their existing screen name above. NEVER create a second account/screen name for any character.\n`;
    }
  };
  const Ao = e => {
    ve(e);
    ge([e]);
  };
  const Io = e => {
    ge(t => [...t, e]);
  };
  const Eo = () => {
    if (he.length > 1) {
      const e = [...he];
      e.pop();
      ge(e);
    } else {
      o();
    }
  };
  const ko = e => {
    Ee(e);
    Io("profile");
  };
  const $o = e => {
    Kr(false);
    if (e.lastMsg && e.type !== "system") {
      const t = e.id;
      Gr(n => {
        if (n[t] && n[t].length > 0) {
          return n;
        }
        const r = {
          id: "dm_seed_" + Date.now(),
          text: e.lastMsg,
          sender: "them",
          timestamp: e.timestamp || Date.now()
        };
        const o = {
          ...n,
          [t]: [r]
        };
        c.set(Qr, o).catch(() => {});
        return o;
      });
    }
    lt(e);
    Vr("");
    Io("msg-detail");
  };
  const Po = () => {
    var e;
    if (!it) {
      return {
        rosterChar: null,
        charAvatar: null,
        charName: "",
        rosterId: null
      };
    }
    const t = W.find(e => it.rosterId && Le(e.name, it.rosterId) || Le(e.name, it.name) || it.avatar && e.image === it.avatar);
    const n = fo();
    const r = it.rosterId || ((e = Object.entries(n).find(([, e]) => e === it.name)) == null ? undefined : e[0]) || null;
    const o = t || (r ? Fe(W, r) : null);
    return {
      rosterChar: o,
      charAvatar: ao(o) || it.avatar,
      charName: it.name,
      rosterId: r
    };
  };
  const Mo = () => {
    const e = Jr.trim();
    if (!e || !it) {
      return;
    }
    const t = it.id;
    const n = {
      id: "dm_" + Date.now(),
      text: e,
      sender: "me",
      timestamp: Date.now()
    };
    Gr(e => {
      const r = {
        ...e,
        [t]: [...(e[t] || []), n]
      };
      c.set(Qr, r).catch(() => {});
      return r;
    });
    Vr("");
    setTimeout(() => {
      if (Xr.current) {
        Xr.current.scrollTop = Xr.current.scrollHeight;
      }
    }, 50);
  };
  const Ro = e => e === "admin" ? E.jsxs("span", {
    className: "role-badge role-admin",
    children: [E.jsx(te, {
      size: 10
    }), " ", s("forumRoleAdmin")]
  }) : e === "mod" ? E.jsxs("span", {
    className: "role-badge role-mod",
    children: [E.jsx(te, {
      size: 10
    }), " ", s("forumRoleMod")]
  }) : null;
  const Oo = e => {
    if (!e) {
      return null;
    }
    let t = "level-badge";
    if (e >= 15) {
      t += " level-legend";
    } else if (e >= 10) {
      t += " level-high";
    } else if (e >= 5) {
      t += " level-mid";
    }
    return E.jsxs("span", {
      className: t,
      children: ["Lv.", e]
    });
  };
  const Do = e => {
    Jo(e);
  };
  const Fo = (e, t = false) => E.jsx(mt, {
    post: e,
    isDetail: t,
    userDisplayName: Uo,
    userDisplayAvatar: zo,
    BOARDS: q,
    userVotes: Wn,
    resolveAvatar: _o,
    resolveAuthorChar: Go,
    getRoleBadge: Ro,
    getLevelBadge: Oo,
    getBoardName: ue,
    handleOpenPost: Do,
    handleOpenProfile: ko,
    handleVote: Yo,
    onShare: e => {
      zr(e);
      Ur(true);
    },
    startLongPress: so,
    cancelLongPress: lo,
    t: s
  }, e == null ? undefined : e.id);
  const Bo = (e, t = {}) => {
    var n;
    var r;
    const {
      label: o = "Existing replies",
      maxFloors: a = 200,
      perReplyChars: i = 250,
      headCount: l = 20,
      skipAuthorUpdates: c = false
    } = t;
    const d = ((e == null ? undefined : e.interactions) || []).map((e, t) => ({
      floor: t + 1,
      inter: e
    }));
    const m = c ? d.filter(e => !e.inter.isAuthorUpdate) : d;
    if (m.length === 0) {
      return "";
    }
    const u = m.length;
    let h;
    let p = false;
    if (u <= a) {
      h = m;
    } else {
      p = true;
      h = [...m.slice(0, l), {
        gap: true,
        skipped: u - a
      }, ...m.slice(u - (a - l))];
    }
    const f = s("forumAnonName");
    const g = ((n = e.author) == null ? undefined : n.isAnon) ? null : ((r = e.author) == null ? undefined : r.name) || null;
    return `${p ? `\n${o} (${u} total, showing first ${l} + last ${a - l}):` : `\n${o} (${u} total):`}\n${h.map(e => {
      if (e.gap) {
        return `... [${e.skipped} earlier floors omitted to fit context] ...`;
      }
      const {
        floor: t,
        inter: n
      } = e;
      const r = [];
      if (!n.isAnon && g && Le(n.author, g)) {
        r.push("OP self-reply");
      }
      if (n.isAnon) {
        r.push("anon");
      }
      if (n.rosterId) {
        r.push(`roster:${n.rosterId}`);
      }
      if (n.isAuthorUpdate) {
        r.push("AUTHOR CHAPTER");
      }
      if (n.isUserPost && !n.isAnon) {
        r.push("USER");
      }
      const o = r.length > 0 ? ` [${r.join(", ")}]` : "";
      return `#${t} ${n.isAnon ? f : n.author || "???"}${o}: ${String(n.content || "").slice(0, i)}`;
    }).join("\n")}`;
  };
  const Lo = async e => {
    var t;
    var n;
    var o;
    var a;
    var i;
    var l;
    var d;
    var m;
    var u;
    var h;
    var p;
    var f;
    var g;
    var b;
    var y;
    var N;
    var j;
    var T;
    var C;
    var A;
    var I;
    var E;
    var k;
    var $;
    var P;
    var O;
    var B;
    var U;
    var H;
    var z;
    var _;
    var G;
    var Y;
    var V;
    var K;
    var X;
    var te;
    const ne = Z.current.find(t => t.id === e);
    if (!ne) {
      return;
    }
    if (ne.isLocked) {
      return;
    }
    if (wn) {
      return;
    }
    Sn(true);
    M().catch(() => {});
    await un();
    const re = R("replies", "生成樓層回覆");
    try {
      const M = s("forumAiContentLang");
      const R = `\n## LANGUAGE (MANDATORY): Write ALL content in ${M === "en" ? "English" : M === "zh-Hans" ? "Simplified Chinese (简体中文)" : "Traditional Chinese (繁體中文)"}. ${M === "zh-Hans" ? "Use 简体字 ONLY — never use 繁體字 like 這/們/說/對/會, always use 这/们/说/对/会." : M === "zh-Hant" ? "Use 繁體字 ONLY." : ""}\n`;
      const F = ne.boardId === "creator" && ne.fanficMeta;
      const re = F && ((t = ne.fanficMeta) == null ? undefined : t.type) === "serial";
      const le = ((n = ne.author) == null ? undefined : n.name) === Uo;
      const ce = le ? "\n## PRIVATE MESSAGE (DM) BEHAVIOR — IMPORTANT\nSome repliers might want to privately message the post author (OP) after commenting. For each reply, decide:\n- \"wouldDM\": true/false — Would this person DM the OP? Consider:\n  - Controversial/provocative posts (e.g., claiming to date a celebrity, unpopular opinions, bragging) → MANY people would DM to argue, confront, or vent\n  - Emotional/vulnerable posts → some would DM to comfort or relate\n  - Interesting/creative posts → a few fans might DM to befriend\n  - Boring/normal posts → almost nobody would DM\n  - If the reply itself mentions wanting to DM/私信/私聊 → MUST be true\n- \"dmMessage\": string — What they'd actually send in the DM. Must match their reply tone and the post context. NOT generic — be specific to the post content.\n  Examples: angry fan might DM \"你是不是在做梦？他才不会跟你在一起\", supportive person might DM \"看到你的帖子了，加油！\", curious person might DM \"你说的是真的吗？能多说说吗\"\n" : "";
      const me = Uo;
      const he = ne.interactions || [];
      const pe = [];
      const fe = [];
      const ge = [];
      he.forEach((e, t) => {
        if (e.isUserPost || Le(e.author, me)) {
          const n = {
            ...e,
            _floor: t + 1
          };
          pe.push(n);
          if (e.isAnon) {
            ge.push(n);
          } else {
            fe.push(n);
          }
        }
      });
      let be = "";
      const ye = (J == null ? undefined : J.gender) || "";
      const ve = q.find(e => e.id === ne.boardId);
      const xe = (ve == null ? undefined : ve.userRole) || "";
      const Ne = de(ve);
      if (fe.length > 0) {
        const e = (J == null ? undefined : J.name) || "";
        const t = (J == null ? undefined : J.role) || (J == null ? undefined : J.intro) || "";
        const n = `${ne.title || ""} ${ne.content || ""}`.toLowerCase();
        const r = e && n.includes(e.toLowerCase()) || me && me !== s("forumAnonName") && n.includes(me.toLowerCase());
        const o = `${e} ${t} ${xe}`;
        const a = ze.test(o);
        const i = _e.test(o);
        if (Ne) {
          be += `\n## 🛡️ THE MODERATOR (版主) HAS SPOKEN!\n"${me}" is the BOARD MODERATOR. Their comment carries authority.\nNPC reactions should:\n- Show respect: ${M === "zh-Hans" ? "\"版主说得对\", \"版主发话了\", \"听版主的\"" : M === "en" ? "\"The mod has spoken\", \"Mod is right\"" : "\"版主說得對\", \"版主發話了\", \"聽版主的\""}\n- At least 1-2 replies should acknowledge their mod status\n- Some may jokingly defer: ${M === "zh-Hans" ? "\"不敢反驳版主hhh\", \"版主说了算\"" : M === "en" ? "\"Can't argue with the mod lol\"" : "\"不敢反駁版主hhh\", \"版主說了算\""}\n\n⚠️ CRITICAL: Do NOT generate any moderator ACTIONS (lock/pin/warning/announce) on behalf of "${me}". The user performs their own mod actions — you only generate NPC dialogue reactions. Never output isModAction: true for the user.\n`;
        }
        if (r) {
          be = `\n## ⚠️ THE DISCUSSION SUBJECT THEMSELVES HAS APPEARED!\n"${me}" is actually the PERSON/CHARACTER being discussed in this post!\nThis is a BIG DEAL — imagine a celebrity showing up in their own gossip thread, or the person being talked about suddenly commenting.\nNPC reactions MUST include:\n- SHOCK and excitement: ${M === "zh-Hans" ? "\"天哪本人来了！！\", \"等等 这不是当事人吗\", \"楼主/大家快看 本人现身了\"" : M === "en" ? "\"OMG the person themselves showed up!!\", \"Wait is that actually them?\", \"The actual person is here!\"" : "\"天哪本人來了！！\", \"等等 這不是當事人嗎\", \"樓主/大家快看 本人現身了\""}\n- At least 2-3 replies MUST react to the fact that the discussion subject appeared\n- Some may ask them questions directly, some may be starstruck, some may be embarrassed about what they said earlier\n- This should DOMINATE the thread — it's the most interesting thing happening\n`;
        } else if (a || xe) {
          be = `\n## 🌟 A NOTABLE PERSON HAS COMMENTED!\n"${me}" is known as: ${xe || t || (a ? "celebrity/public figure" : "")}${ye ? ` (${ye})` : ""}\n${a ? "They are a celebrity/public figure — forum users would recognize them and react with excitement, admiration, or strong opinions." : ""}\n${i ? "They are an authority figure — their opinion carries weight, forum users should treat their comment seriously." : ""}\nNPC reactions should:\n- At least 1-2 replies acknowledge that this notable person commented ${M === "zh-Hans" ? "(e.g., \"大佬来了！\", \"居然能在这里看到你\")" : M === "en" ? "(e.g., \"A big name showed up!\", \"Can't believe you're here\")" : "(e.g., \"大佬來了！\", \"居然能在這裡看到你\")"}\n- React to their comment content with appropriate weight/respect\n- Some fans may be excited, some may challenge them — vary the reactions\n`;
        }
      }
      const je = !((o = ne.author) == null ? undefined : o.isAnon) && ((a = ne.author) == null ? undefined : a.name) === me;
      const we = fe.length >= 3 ? "high" : fe.length >= 2 ? "medium" : "low";
      const Se = ye === "male" ? "(male/他)" : ye === "female" ? "(female/她)" : "";
      const Te = fe.length > 0 ? `\n## USER INTERACTION — THIS IS THE MOST IMPORTANT SECTION\n"${me}" ${Se} is a REAL PERSON using this app. Their engagement is the #1 priority.\n${je ? `⭐ "${me}" is the ORIGINAL POSTER (OP) of this thread. As OP, their replies carry extra weight — other users should address them with "樓主/OP" and engage more deeply.` : ""}\n${we === "high" ? `🔥 "${me}" has been actively participating (${fe.length} comments). The thread should feel like an active conversation WITH them, not around them.` : ""}\n\nTheir comments:\n${fe.slice(-5).map(e => {
        var t;
        var n;
        var r;
        const o = (t = e.replyTo) == null ? undefined : t.floor;
        const a = o != null ? (ne.interactions || [])[o - 1] : null;
        const i = a && a.isAnon ? s("forumAnonName") : ((n = e.replyTo) == null ? undefined : n.author) || "";
        const l = ((r = e.replyTo) == null ? undefined : r.author) ? ` (replying to @${i}${o != null ? " #" + o : ""})` : "";
        return `- Floor #${e._floor}${l}: "${e.content.slice(0, 300)}"`;
      }).join("\n")}\n\n### REPLY REQUIREMENTS for "${me}" (MANDATORY):\nGenerate a "RIPPLE EFFECT" — the user's comment should spark a mini-discussion:\n\n1. **Direct responses (at least 3):** Replies that DIRECTLY address "${me}"'s words.\n   - Set "replyTo": { "floor": ${fe[fe.length - 1]._floor}, "author": "${me}" } and "mentionsUser": true\n   - MUST vary reaction types — DO NOT just agree. Use this mix:\n     ${M === "zh-Hans" ? `a) One AGREES enthusiastically: "@${me} 说到点子上了！我也觉得..."\n     b) One DISAGREES or CHALLENGES: "@${me} 但是你有没有想过...？" / "不太同意诶，因为..."\n     c) One ASKS A FOLLOW-UP QUESTION: "@${me} 等等 你的意思是...？能多说说吗"` : M === "en" ? `a) One AGREES enthusiastically: "@${me} You nailed it! I also think..."\n     b) One DISAGREES or CHALLENGES: "@${me} But have you considered...?" / "I don't really agree because..."\n     c) One ASKS A FOLLOW-UP QUESTION: "@${me} Wait, do you mean...? Tell us more"` : `a) One AGREES enthusiastically: "@${me} 說到點子上了！我也覺得..."\n     b) One DISAGREES or CHALLENGES: "@${me} 但是你有沒有想過...？" / "不太同意欸，因為..."\n     c) One ASKS A FOLLOW-UP QUESTION: "@${me} 等等 你的意思是...？能多說說嗎"`}\n   - Each response must be SUBSTANTIAL (40-150 chars), not just "同意" or "+1"\n\n2. **Ripple replies (at least 2):** Other NPCs react to the DISCUSSION sparked by "${me}":\n   - NPC-A replies to NPC-B who disagreed with ${me}: "我覺得 @xxx 說得也有道理"\n   - Someone builds on ${me}'s point with their own anecdote or experience\n   - Someone takes sides in the mini-debate\n   - These should reference "${me}" by name even without replyTo — showing the thread is actively discussing their contribution\n   - Set "mentionsUser": true if they reference "${me}" by name\n\n3. **Thread energy:** The overall thread should feel like "${me}"'s comment was a TURNING POINT that shifted the conversation. Other unrelated replies should come AFTER the user-reaction cluster, not interrupt it.\n${be}\n` : "";
      const Ce = s("forumAnonName");
      const Ae = ge.length > 0 ? `\n## ANONYMOUS FLOOR(S) — TEXT-ONLY INPUT\nThe following floor(s) arrive with NO author metadata. You receive only the text. There is no name, role, history, or relationship tied to this content — it is a standalone utterance from the public.\n\n${ge.slice(-5).map(e => {
        var t;
        var n;
        var r;
        const o = (t = e.replyTo) == null ? undefined : t.floor;
        const a = o != null ? (ne.interactions || [])[o - 1] : null;
        const s = a && a.isAnon ? Ce : ((n = e.replyTo) == null ? undefined : n.author) || "";
        const i = ((r = e.replyTo) == null ? undefined : r.author) ? ` (replying to @${s}${o != null ? " #" + o : ""})` : "";
        return `- Floor #${e._floor} [${Ce}]${i}: "${String(e.content || "").slice(0, 300)}"`;
      }).join("\n")}\n\nREPLY MODE for anonymous floors:\n- Address them generically: "${Ce}" / "${Ce}#<floor>" / "lz" / "楼上" / "这位". When setting replyTo.author, use "${Ce}".\n- Engage with the IDEAS and CONTENT only. Reactions are about WHAT was said, never WHO might have said it.\n- These floors carry the same social weight as any random anonymous post — no boosted attention, no special framing.\n- Replies should feel like ordinary forum banter aimed at unknown strangers (agree, disagree, joke, ask follow-ups about the content).\n` : "";
      const Ie = yo(W, ne.boardId);
      const Ee = fo();
      const $e = ["雲深", "kk_233", "一杯熱可可", "夜貓不眠", "Echo_07", "小南瓜", "Mizuki", "cyanlemon", "霧島", "Tako"];
      const Me = (() => {
        const e = Ie;
        if (e.length === 0) {
          return [];
        }
        const t = Math.min(e.length, Math.max(3, Math.ceil(e.length * 0.5)));
        const n = Date.now();
        const r = ee.current;
        const o = new Map();
        (ne.interactions || []).forEach(e => {
          if (e.rosterId) {
            o.set(e.rosterId, (o.get(e.rosterId) || 0) + 1);
          }
        });
        const a = e.map(e => {
          const t = r.get(e.name) || 0;
          const a = t === 0 ? Number.MAX_SAFE_INTEGER : n - t;
          return {
            char: e,
            score: (t === 0 ? 100 : Math.min(100, a / 3600000)) + Math.max(0, 30 - (o.get(e.name) || 0) * 15) + Math.random() * 20
          };
        });
        a.sort((e, t) => t.score - e.score);
        const s = a.slice(0, t).map(e => e.char);
        s.forEach(e => r.set(e.name, n));
        if (r.size > Ie.length * 3 + 50) {
          const e = [...r.entries()].sort((e, t) => e[1] - t[1]);
          e.slice(0, e.length - Ie.length * 2).forEach(([e]) => r.delete(e));
        }
        return s.map((e, t) => {
          const n = Ee[e.name];
          return {
            char: e,
            screenName: n || $e[t % $e.length] + (t >= $e.length ? `_${t}` : ""),
            isExisting: !!n
          };
        });
      })();
      const Re = Me.length > 0 ? `\n## ROSTER REPLY SLOTS — PRE-ASSIGNED (you MUST fulfill ALL of these)\nYou are required to produce ${Me.length} replies authored by these specific roster characters. The slot details — including the exact screen name and rosterId — are FIXED. Your only job is to write each reply's CONTENT.\n\n⚠️ TOPIC PRIMACY: The post's topic is the STAR. These roster characters are forum residents reacting to the post — NOT performing their character traits. Their reply MUST genuinely engage with the post's topic FIRST; persona shapes HOW they engage, but they are not here to monologue about their own field. If the post is about food and the slot char is a programmer, they react as "a programmer who also eats food and has opinions" — they don't pivot the thread to tech.\n\n${Me.map((e, t) => {
        const n = e.char;
        const r = Ye(n, {
          worldBooks: zt
        });
        const o = [];
        if (n.gender) {
          o.push(`gender: ${n.gender}`);
        }
        if (n.role) {
          o.push(`role/occupation: "${n.role}"`);
        }
        const a = o.length > 0 ? ` | ${o.join(" | ")}` : "";
        return `### SLOT ${t + 1}\n- author (FIXED): "${e.screenName}"${e.isExisting ? " [reuse existing screen name]" : " [new screen name assigned by system]"}\n- rosterId (FIXED): "${n.name}"\n- persona (flavors HOW they react, NOT what they talk about): ${r}${a}\n- voice rule: vocabulary and stance reflect this persona, but the reply is ABOUT the post topic. A chef on a music thread reacts to music (maybe with a food metaphor); a noble on a meme thread might be dryly amused — they don't switch the subject.`;
      }).join("\n\n")}\n\n## HARD CONTRACT\nAll ${Me.length} slot replies above MUST appear in your output with the EXACT author and rosterId shown. If any slot is missing or has different author/rosterId, the response is INVALID.\n\n## FILL STRATEGY\nBeyond the ${Me.length} required slot replies, generate additional random-NPC replies (rosterId: null) until total reaches the requested count. Rotate ordering — slot replies and NPC replies should INTERLEAVE naturally.\n\n## IDENTITY ISOLATION\nForum users DO NOT know who is behind each screen name. "rosterId" is for system avatar linking only — NEVER public knowledge. No reply may reference another poster's REAL NAME or guess identities.` : "";
      const Oe = (() => {
        var e;
        if (!F || ar.allowFanficSubjectReply !== false || !((e = ne.fanficMeta) == null ? undefined : e.cpTag)) {
          return "";
        }
        const t = Ue(ne.fanficMeta.cpTag);
        if (t) {
          return `\n## SUBJECT EXCLUSION RULE: The following characters are the SUBJECTS of this fanfic and MUST NOT appear as commenters or repliers:\n${t.map(e => `- "${e.trim()}"`).filter(e => e !== "- \"\"").join("\n")}\nDo NOT include them in any reply. Only uninvolved roster characters, the author, and random forum NPCs may comment.\n`;
        } else {
          return "";
        }
      })();
      let De;
      let He = null;
      let Ge = null;
      if (re) {
        const e = (ne.interactions || []).filter(e => e.isAuthorUpdate);
        const t = e.length + 1;
        const n = Math.floor(Math.random() * 4) + 8;
        const r = ne.fanficConfig || {};
        const o = r.wordCountMin || 300;
        const a = r.wordCountMax || 600;
        const c = ((i = ne.fanficMeta) == null ? undefined : i.totalChapters) || r.totalChapters || null;
        const v = ((l = ne.fanficMeta) == null ? undefined : l.ending) || r.ending || "";
        const x = ((d = ne.fanficMeta) == null ? undefined : d.style) || r.style || "";
        const w = t + 1;
        const S = c && t >= c;
        const T = !S && c && w >= c;
        const C = ((m = ne.fanficMeta) == null ? undefined : m.chapter) || 1;
        const A = [{
          num: C,
          label: "帖子原文",
          content: ne.content || ""
        }, ...e.map((e, t) => ({
          num: C + t + 1,
          label: "樓層更新",
          content: e.content || ""
        }))];
        const I = 3;
        const E = 250;
        const k = 250;
        const $ = A.map((e, t) => {
          if (t >= A.length - I || e.content.length <= E + k + 50) {
            return `【Chapter ${e.num} — ${e.label}】\n${e.content}`;
          }
          const n = e.content.slice(0, E);
          const r = e.content.slice(-k);
          const o = e.content.length - E - k;
          return `【Chapter ${e.num} — ${e.label}（章節較長，僅顯示開頭+結尾，中間 ${o} 字省略）】\n${n}\n\n... [middle ${o} chars omitted] ...\n\n${r}`;
        });
        let P = "";
        if (S) {
          P = `\n## 📖 THE MAIN STORY IS ALREADY COMPLETE (${c} chapters finished).\nThis is a BONUS / SIDE STORY (番外篇). Write a standalone extra chapter that:\n- Explores a "what if" scenario, a deleted scene, a future epilogue, or a different POV of an existing scene\n- Can be fluffy/lighthearted even if the main story was angsty — or vice versa\n- Does NOT rehash the main plot — give readers something NEW and fresh\n- Title the chapter as "${M === "zh-Hans" ? "番外" : M === "en" ? "Extra" : "番外"}" or "Extra" or "After Story"\n- Reader comments should react with excitement about the bonus content ${M === "zh-Hans" ? "(\"居然有番外！\", \"太惊喜了\", \"番外比正篇还甜\")" : M === "en" ? "(\"A bonus chapter!\", \"What a surprise\", \"The extra is even sweeter than the main story\")" : "(\"居然有番外！\", \"太驚喜了\", \"番外比正篇還甜\")"}\n`;
        } else if (T) {
          const e = M === "zh-Hans" ? {
            HE: "幸福圆满 (Happy Ending)",
            BE: "悲伤结局 (Bad Ending)",
            OE: "开放式结局 (Open Ending)"
          } : {
            HE: "幸福圓滿 (Happy Ending)",
            BE: "悲傷結局 (Bad Ending)",
            OE: "開放式結局 (Open Ending)"
          };
          P = `\n## ⚠️ THIS IS THE FINAL CHAPTER (Chapter ${w}/${c})\nThe story MUST reach its conclusion in this chapter. Wrap up all plot threads.\nEnding type: **${e[v] || e.HE}**\n- Do NOT end with "TBC" or cliffhanger — this is the ENDING\n- Provide a satisfying conclusion that matches the ending type\n- Reader comments should react to the story ENDING ${M === "zh-Hans" ? "(\"完结撒花！\", \"呜呜呜结局好xx\", \"追完了！\")" : M === "en" ? "(\"It's finished!\", \"The ending was so xx\", \"I followed it to the end!\")" : "(\"完結撒花！\", \"嗚嗚嗚結局好xx\", \"追完了！\")"}\n`;
        } else if (c && w === c - 1) {
          P = `\n## Note: This is the SECOND TO LAST chapter (${w}/${c}). Begin building toward the climax and final resolution. Next chapter will be the finale.\n`;
        }
        let O = "";
        if (c && !S) {
          const e = w / c;
          O = e <= 0.25 ? `\n## 📖 PACING — OPENING ARC (Act 1: Setup, chapter ${w}/${c})\n- This is the BEGINNING phase. Focus on: world-building, character introductions, establishing relationships, planting story seeds.\n- Set the tone and atmosphere. Let the reader get to know the characters.\n- Hint at coming conflicts but don't rush into them. Build anticipation.\n- End with something intriguing that makes readers want to continue.\n` : e <= 0.5 ? `\n## 📖 PACING — RISING ACTION (Act 2a: Development, chapter ${w}/${c})\n- The story is building momentum. Focus on: deepening relationships, introducing complications, escalating tension.\n- Characters face new challenges or revelations that change the dynamic.\n- Subplots should be developing alongside the main thread.\n- Emotional stakes are rising — reader should feel increasingly invested.\n` : e <= 0.75 ? `\n## 📖 PACING — MIDPOINT TO CRISIS (Act 2b: Complication, chapter ${w}/${c})\n- The story reaches its most intense phase. Focus on: major conflicts, turning points, dramatic revelations.\n- Characters confront their greatest obstacles. Relationships are tested.\n- Emotional intensity should peak — this is where the angst/drama/tension lives.\n- If the ending is BE: plant seeds of irreversible loss. If HE: darkest-before-dawn moment. If OE: maximize ambiguity.\n` : `\n## 📖 PACING — CLIMAX & RESOLUTION (Act 3: Convergence, chapter ${w}/${c})\n- The story is approaching its conclusion. All threads are converging.\n- Major plot questions should be getting answered. Characters make defining choices.\n- Build toward the emotional climax — the moment everything has been leading to.\n- Start wrapping up subplots. Leave only the core resolution for the final chapter.\n`;
        } else if (!c && !S) {
          O = t <= 2 ? "\n## 📖 PACING: Story is still in early stages. Continue developing characters and plot, introduce new elements to keep readers hooked.\n" : t <= 5 ? "\n## 📖 PACING: Story is in mid-development. Escalate conflicts, deepen relationships, introduce a twist or complication to maintain momentum.\n" : `\n## 📖 PACING: Story has been running for ${t} chapters. Consider whether to build toward a climax, introduce a major turning point, or start converging plot threads. Avoid repetitive or stalling content.\n`;
        }
        let D = "";
        if (r.outline) {
          const e = c ? `You are writing Chapter ${w} of ${c} (roughly ${Math.round(w / c * 100)}% through the planned arc).` : `You are writing Chapter ${w} (no fixed total — open-ended serial).`;
          D = `\n## 📋 STORY OUTLINE — what plot to write (read alongside pacing above)\n${r.outline}\n\n${e}\n- Read the outline as the story's plot skeleton, in whatever structure the author wrote it (numbered list, prose summary, bullet points — interpret it on its own terms).\n- Compare what's already been written (see ALL CHAPTERS WRITTEN SO FAR below) against the outline. Identify the next unwritten plot beat. Write THAT.\n- Do NOT skip ahead past beats that haven't been covered yet. Do NOT rehash beats already covered. Do NOT stall on the same beat across multiple chapters.\n- Outline tells you WHAT to write (plot content). Pacing above tells you HOW to write it (act structure, emotional intensity). They are complementary — follow both.\n`;
        }
        const F = `\n## ⛓ CHAPTER LOCK — NON-NEGOTIABLE (read before anything else)\n- Chapter word count: **MUST be between ${o} and ${a} characters** (count of Chinese chars / English words depending on language). Below ${o} = REJECTED. Above ${a} = REJECTED. This is a hard limit, not a guideline.\n${x ? `- Writing style: **MUST be written in "${x}" style throughout the entire chapter** — not just the opening, not "inspired by", literally written in this style. Override any default narrative voice. If unsure what "${x}" means, lean into the stylistic conventions of that label (vocabulary, sentence rhythm, imagery, tone) — do not fall back to generic prose.` : ""}\n${r.outline ? "- Plot direction: **MUST follow the STORY OUTLINE below**. Find the next unwritten beat from the outline (compare against chapters already written) and write THAT — do not invent unrelated plot, do not skip beats, do not rehash covered ground." : ""}\n- These rules apply ONLY to the AUTHOR CHAPTER (isAuthorUpdate: true). Reader comments are not bound by them.\n`;
        De = `You are generating replies for a SERIALIZED FANFIC (同人連載) post on a forum.\n${R}\n${F}\nPost title: ${ne.title}\nAuthor: ${ne.author.name}\n${((u = ne.fanficMeta) == null ? undefined : u.cpTag) ? `CP: ${ne.fanficMeta.cpTag}` : "No CP (gen fic)"}\n${c ? `Total planned chapters: ${c}` : ""}\n${O}${D}\n\n## ALL CHAPTERS WRITTEN SO FAR (read carefully to avoid repetition):\n${$.join("\n\n")}\n\nNext to write: ${S ? "番外篇 (Bonus / Side Story)" : `Chapter ${w}${c ? ` / ${c}` : ""}`}\n${P}\n${Re}${Oe}\n\n${Bo(ne, {
          label: "Reader comments (the author can SEE these)",
          perReplyChars: 400,
          skipAuthorUpdates: true
        })}\n\nGenerate ${2 + n} replies in this order:\n\n1. FIRST: Author "${(h = ne.author) == null ? undefined : h.name}" posts a SHORT reply as themselves (NOT a chapter), responding to readers. 20-80 chars. Examples:\n   ${M === "zh-Hans" ? "- Thank readers: \"感谢大家的支持！看到催更好开心\"\n   - Respond to specific requests: \"好多人想看xx番外，那就写吧！\"\n   - Tease next content: \"下一章会有大家想看的场景哦～\"\n   - React to reader theories: \"有人猜对了剧情走向hhh\"" : M === "en" ? "- Thank readers: \"Thanks for all the support! Love seeing the comments\"\n   - Respond to specific requests: \"So many people want to see xx side story, let's do it!\"\n   - Tease next content: \"Next chapter will have what everyone's been waiting for~\"\n   - React to reader theories: \"Someone guessed the plot twist lol\"" : "- Thank readers: \"感謝大家的支持！看到催更好開心\"\n   - Respond to specific requests: \"好多人想看xx番外，那就寫吧！\"\n   - Tease next content: \"下一章會有大家想看的場景哦～\"\n   - React to reader theories: \"有人猜對了劇情走向hhh\""}\n   ${fe.length > 0 ? `- MUST acknowledge what user "${me}" said (they wrote: "${fe[fe.length - 1].content.slice(0, 80)}")` : ""}\n   Set isAuthorUpdate: false (this is a COMMENT, not a chapter).\n\n2. SECOND: Author "${(p = ne.author) == null ? undefined : p.name}" posts the ${S ? "BONUS side story (番外篇)" : `Chapter ${w}`}. Requirements (re-read the ⛓ CHAPTER LOCK above before writing):\n   - **LENGTH: ${o}-${a} characters.** Count as you write. Stop at ${a}. Do not pad past, do not undershoot below ${o}.\n   - **STYLE: ${x ? `Written in "${x}" — this overrides the OP's voice if they differ. Maintain the style consistently from first line to last.` : "Match the original post's writing style consistently."}**\n   - MUST ${S ? "be a fresh standalone side story" : "continue the story — do NOT repeat previous chapters"}\n   ${S && pe.length > 0 ? "- If readers requested a specific 番外 topic, INCORPORATE their request into the side story" : ""}\n   - ${S ? "Give readers something new and delightful" : "Advance the plot with NEW scenes, dialogue, and developments — every chapter should make meaningful story progress"}\n   - Follow the pacing guidance above\n   ${T ? "- This is the FINAL chapter — conclude the story, do NOT write \"TBC\"" : S ? `- Mark as "${M === "zh-Hans" ? "番外" : M === "en" ? "Extra/Side Story" : "番外"}" in the opening` : `- End on a hook or emotional beat, include "${M === "zh-Hans" ? "待续" : M === "en" ? "TBC" : "待續"}" at the end`}\n   - Set isAuthorUpdate: true\n\n3. The remaining ${n} replies are READER COMMENTS (react to the WRITING, not as if events are real):\n   - Excited reactions, speculation, CP reactions\n   ${T ? "- React to the ENDING " + (M === "zh-Hans" ? "(\"完结撒花！\", \"追完了好舍不得\")" : M === "en" ? "(\"It's over!\", \"Can't believe it ended\")" : "(\"完結撒花！\", \"追完了好捨不得\")") : ""}\n   ${S ? "- React to the bonus content " + (M === "zh-Hans" ? "(\"番外太甜了！\", \"居然写了我想看的！\")" : M === "en" ? "(\"The extra is so sweet!\", \"They actually wrote what I wanted!\")" : "(\"番外太甜了！\", \"居然寫了我想看的！\")") : ""}\n   - Vary reply lengths WIDELY: short reactions (15-40 chars), medium comments (40-100 chars), and 1-2 long analytical reviews (100-300 chars) discussing themes, character development, writing craft\n   - Diverse forum behaviors: some readers quote favorite lines, some post memes/copypasta reactions, some write mini-essays, some just "催更！"\n${Te}${Ae}${ce}\n## ⛓ FINAL CHECK before writing the AUTHOR CHAPTER (isAuthorUpdate: true):\n- Length within ${o}-${a} characters? ✓\n${x ? `- Written in "${x}" style throughout? ✓` : ""}\n${r.outline ? "- Advances the NEXT unwritten beat from the outline (not a repeat, not a skip)? ✓" : ""}\nIf any answer is no, REWRITE before output.\n\nReturn PURE JSON:\n{ "replies": [{ "author": "screen name", "rosterId": "realName or null", "content": "text", "isAnon": false, "isAuthorUpdate": false, "mentionsUser": false, "replyTo": null${le ? ", \"wouldDM\": false, \"dmMessage\": null" : ""} }] }\nIMPORTANT: "replyTo" should be null for general comments. ${fe.length > 0 ? `Exception: replies responding to "${me}" MUST have replyTo set. Up to 5 replies may have replyTo.` : "At most 1-2 replies should have replyTo."}\nANONYMITY: If a reply has isAnon: true, its author identity is SECRET. Other replies MUST NOT reveal who the anonymous user really is. When replyTo references an anonymous floor, use "${s("forumAnonName")}" as the author in replyTo, NOT their real screen name. Do NOT reference anonymous users by their screen name or rosterId in reply content.`;
        if (!S) {
          const e = ((f = ne.author) == null ? undefined : f.isAnon) ? null : ((g = ne.author) == null ? undefined : g.rosterId) || null;
          Ge = {
            opAuthorName: ((b = ne.author) == null ? undefined : b.name) || null,
            opAuthorRosterId: e
          };
          He = `${R}${F}\nYou are the AUTHOR "${(y = ne.author) == null ? undefined : y.name}" of a SERIALIZED FANFIC (同人連載). Write ONLY the next chapter — nothing else.\n\nPost title: ${ne.title}\n${((N = ne.fanficMeta) == null ? undefined : N.cpTag) ? `CP: ${ne.fanficMeta.cpTag}` : "No CP (gen fic)"}\n${c ? `Total planned chapters: ${c}` : ""}\n${O}${D}\n\n## ALL CHAPTERS WRITTEN SO FAR (read carefully to avoid repetition):\n${$.join("\n\n")}\n\nNow write: ${T ? `the FINAL Chapter ${w}` : `Chapter ${w}${c ? ` / ${c}` : ""}`}\n${P}${Oe}\n\nRequirements (re-read the ⛓ CHAPTER LOCK above):\n- **LENGTH: ${o}-${a} characters.** Below ${o} or above ${a} = REJECTED.\n- **STYLE: ${x ? `Written in "${x}", consistently from first line to last.` : "Match the original post's writing style."}**\n- MUST continue the story with NEW scenes/dialogue/developments — do NOT repeat previous chapters.\n- ${T ? "This is the FINAL chapter — conclude the story, do NOT write \"TBC\"." : `End on a hook, include "${M === "zh-Hans" ? "待续" : M === "en" ? "TBC" : "待續"}" at the end.`}\n\nReturn PURE JSON, exactly one reply with isAuthorUpdate: true:\n{ "replies": [{ "author": "${(j = ne.author) == null ? undefined : j.name}", "rosterId": ${e ? `"${e}"` : "null"}, "content": "the full chapter text", "isAnon": false, "isAuthorUpdate": true, "mentionsUser": false, "replyTo": null }] }`;
        }
      } else if (F) {
        const e = Math.floor(Math.random() * 4) + 8;
        De = `You are generating reader comments for a fanfic/fan-creation post on a forum.\n${R}\n\nPost title: ${ne.title}\nContent: ${ne.content.slice(0, 1500)}${ne.content.length > 1500 ? `\n... [truncated, total ${ne.content.length} chars]` : ""}\n${((T = ne.fanficMeta) == null ? undefined : T.cpTag) ? `CP: ${ne.fanficMeta.cpTag}` : "No CP"}\nType: ${((C = ne.fanficMeta) == null ? undefined : C.type) || "oneshot"}\n${Bo(ne, {
          label: "Existing replies",
          perReplyChars: 400
        })}\n${Re}${Oe}\n\nGenerate ${e} reader comments. Mix of:\n- Literary appreciation ${M === "zh-Hans" ? "(\"文笔太好了\", \"这段描写绝了\")" : M === "en" ? "(\"Beautiful writing\", \"This description is amazing\")" : "(\"文筆太好了\", \"這段描寫絕了\")"}\n- Emotional reactions ${M === "zh-Hans" ? "(\"看哭了\", \"甜到齁\")" : M === "en" ? "(\"I'm crying\", \"So sweet\")" : "(\"看哭了\", \"甜到齁\")"}\n- Character discussion\n- Asking for more / requesting sequel\n- Long analytical reviews (100-300 chars) — 1-2 readers write detailed analysis of themes, character development, writing techniques\n- Vary reply lengths WIDELY: some are short reactions (15-40 chars), most are medium (40-100 chars), 1-2 are long reviews (100-300 chars)\n${Te}${Ae}${ce}\nReturn PURE JSON:\n{ "replies": [{ "author": "screen name", "rosterId": "realName or null", "content": "text", "isAnon": false, "isAuthorUpdate": false, "mentionsUser": false, "replyTo": null${le ? ", \"wouldDM\": false, \"dmMessage\": null" : ""} }] }\nIMPORTANT: "replyTo" should be null for general comments. ${fe.length > 0 ? `Exception: replies responding to "${me}" MUST have replyTo set. Up to 5 replies may have replyTo.` : "At most 1-2 replies should have replyTo."}\nANONYMITY: If a reply has isAnon: true, its author identity is SECRET. Other replies MUST NOT reveal who the anonymous user really is. When replyTo references an anonymous floor, use "${s("forumAnonName")}" as the author in replyTo, NOT their real screen name. Do NOT reference anonymous users by their screen name or rosterId in reply content.`;
      } else {
        const e = Math.floor(Math.random() * 4) + 8;
        const t = ot[ne.boardId];
        const n = ne.boardId === "whisper";
        let r = "";
        if (!t) {
          const e = q.find(e => e.id === ne.boardId);
          if (e) {
            r = await To(e);
          }
        }
        const o = Me.length;
        const a = Math.max(0, e - o);
        const i = n ? `{ "author": "${s("forumAnonName")}", "rosterId": null, "content": "...", "isAnon": true, "mentionsUser": false, "replyTo": null }` : "{ \"author\": \"creative_handle\", \"rosterId\": null, \"content\": \"...\", \"isAnon\": false, \"mentionsUser\": false, \"replyTo\": null }";
        const l = o > 0 ? `{ "author": "${Me[0].screenName}", "rosterId": "${Me[0].char.name}", "content": "[in-character reply matching ${Me[0].char.name}'s persona]", "isAnon": false, "mentionsUser": false, "replyTo": null }` : null;
        const c = ((A = ne.author) == null ? undefined : A.isAnon) ? `${s("forumAnonName")} (anonymous OP)` : `"${((I = ne.author) == null ? undefined : I.name) || "???"}"${((E = ne.author) == null ? undefined : E.rosterId) ? ` [roster char realName: "${ne.author.rosterId}"]` : " [random NPC, not in roster]"}`;
        const d = [...new Set([...(((k = ne.author) == null ? undefined : k.name) && !ne.author.isAnon ? [ne.author.name] : []), ...(ne.interactions || []).filter(e => !e.isAnon && e.author).map(e => e.author)])];
        const m = d.length > 0 ? `\nAlready-used screen names in this thread (NPC handles MUST be different from these):\n${d.map(e => `- "${e}"`).join("\n")}` : "";
        const u = new Set(Me.map(e => {
          var t;
          if ((t = e.char) == null) {
            return undefined;
          } else {
            return t.name;
          }
        }).filter(Boolean));
        const h = [...new Set([...((($ = ne.author) == null ? undefined : $.name) && !ne.author.isAnon ? [ne.author.name] : []), ...(((P = ne.author) == null ? undefined : P.rosterId) && !u.has(ne.author.rosterId) ? [ne.author.rosterId] : [])])];
        const p = Bo(ne, {
          label: "Existing replies"
        });
        const f = q.find(e => e.id === ne.boardId);
        const g = f ? rt(f.members || 0, ue(f) || f.name) : "";
        De = `You are generating replies for a forum post.\n${R}\n${nt(M === "zh-Hans" ? "zh-Hans" : M === "en" ? "en" : "zh-Hant")}\n${g}\n\n## POST CONTEXT\nPost #${ne.id} | Board: ${ne.boardName} (${ne.boardId})\nOP (post author): ${c}\nTitle: ${ne.title}\nContent: ${ne.content}\n${(t == null ? undefined : t.boardPrompt) ? `\nBoard personality context (follow the REPLY STYLE described here):\n${t.boardPrompt}` : ""}\n${r ? `\n${r}\nIMPORTANT: Replies MUST stay in-character within this board's world/setting. Use setting-appropriate language, references, and knowledge. NPC screen names should fit this world.` : ""}${p}${m}\n\n## 🚫 NEVER IMPERSONATE THESE AUTHORS\nThe following identities ALREADY exist as the OP or as prior commenters in this thread. You are generating NEW replies from OTHER people. NEVER set "author" or "rosterId" to any of these in your output:\n${h.length > 0 ? h.map(e => `- "${e}"`).join("\n") : "- (no specific block list — but never duplicate an existing commenter's identity)"}\n${((O = ne.author) == null ? undefined : O.isAnon) ? "- The anonymous OP is also off-limits — do not generate replies claiming to be the OP coming back.\n" : ""}${le ? "If you need someone to elaborate on OP's view, write it as a SUPPORTER (different person agreeing), not as OP self-replying. OP self-replies for THIS post are GENERATED BY THE USER through the app UI, never by you." : "If the OP roster char appears in SLOTS above, they MAY chime back in under their slot screen name (a natural OP follow-up). Otherwise route elaboration through a SUPPORTER (different person agreeing), not an OP self-reply under the OP screen name."}\n${Re}\n\n## OUTPUT COMPOSITION (strict counts)\nTotal replies: ${e}\n- ${o} REQUIRED slot replies → one per SLOT defined above, using the EXACT preset author + rosterId for each\n- ${a} random NPC replies → "rosterId" MUST be null, invent creative handles${n ? ", most should be anonymous (isAnon: true)" : ""}\n\n⚠️ ROSTER BOUNDARY: The ONLY valid rosterId values are the ones listed in SLOTS above. Never invent or guess a rosterId for any other reply — that field MUST be null unless it exactly matches a SLOT.\n\nBefore writing JSON, internally verify your plan:\n  1. Have I drafted one reply for EACH of the ${o} slots with the EXACT author/rosterId?\n  2. Do the slot replies sound like that character's persona (not generic NPC voice)?\n  3. Are the ${a} NPC replies interleaved with slot replies (not clustered)?\n  4. Did I avoid using ANY name from the "NEVER IMPERSONATE" list above as an author / rosterId?\n  5. Are all NPC handles different from already-used names listed above?\nIf any answer is no, fix BEFORE outputting.\n\n## CONTENT RULES\n${r ? "- NPC screen names and voices MUST fit the board's world/setting (e.g., fantasy board → fantasy-themed names and references)\n" : ""}- Slot replies: voice MUST reflect the assigned character's occupation, personality, and worldview — a chef uses food metaphors, a programmer uses tech slang, etc. Featuring them does NOT mean flattening their voice.\n- Reply style MUST match the board personality above\n- Replies may respond to each other, not just OP (OP is the post author — see above)\n- "樓主/OP" refers ONLY to the post author named in POST CONTEXT — do NOT call anyone else 樓主\n- NPC handles MUST be unique — never reuse a screen name from the "Already-used" list or the "NEVER IMPERSONATE" list\n${r && r.includes("BOARD LENGTH REQUIREMENT") ? "- Reply length distribution: USE THE BOARD-SPECIFIC RANGES given in BOARD LENGTH REQUIREMENT above (do NOT use generic defaults)" : "- Vary lengths WIDELY: short (15-40 chars), medium (40-120 chars), 1-2 long posts (120-300 chars)"}\n- Diverse forum behaviors: trolling, sincere advice, off-topic tangents, "+1", copypasta, personal anecdotes, debates, memes, mini-essays\n${Te}${Ae}${ce}\n\n## OUTPUT FORMAT\nReturn PURE JSON only (no markdown, no commentary):\n{ "replies": [ /* ${e} reply objects, interleaved */ ] }\n\nEach reply object schema:\n{ "author": "screen name", "rosterId": "realName or null", "content": "text", "isAnon": false, "isAuthorUpdate": false, "mentionsUser": false, "replyTo": null, "stickerMeaning": null${le ? ", \"wouldDM\": false, \"dmMessage\": null" : ""} }\n\nExamples:\n${l ? `- SLOT reply example: ${l}\n` : ""}- NPC reply example: ${i}\n\nIMPORTANT: "replyTo" should be null for general comments. ${fe.length > 0 ? `Exception: replies responding to "${me}" MUST have replyTo set. Up to 5 replies may have replyTo in this batch.` : "At most 1-2 replies out of all should have replyTo."}\nANONYMITY: If a reply has isAnon: true, its author identity is SECRET. Other replies MUST NOT reveal who the anonymous user really is. When replyTo references an anonymous floor, use "${s("forumAnonName")}" as the author in replyTo, NOT their real screen name. Do NOT reference anonymous users by their screen name or rosterId in reply content.`;
      }
      De += Co();
      De += So();
      const We = [];
      const Je = [];
      const Ve = e => typeof e == "string" && (!!e.startsWith("data:image/gif") || e.split("?")[0].split("#")[0].toLowerCase().endsWith(".gif"));
      const qe = new Map();
      (cn || []).forEach(e => {
        if (e && e.url && e.meaning) {
          qe.set(e.url, e.meaning);
        }
      });
      const Ke = (e, t) => {
        if (!e || typeof e != "string") {
          return;
        }
        if (e.startsWith("txt:")) {
          Je.push(`[${t}] 文字圖內容：${e.substring(4).slice(0, 200)}`);
          return;
        }
        const n = qe.get(e);
        if (n) {
          Je.push(`[${t}] 表情包：${n}`);
        } else if (Ve(e)) {
          Je.push(`[${t}] 一張 GIF 動圖（內容無法解析）`);
        } else if (We.length < 4) {
          We.push({
            url: e,
            source: t
          });
        }
      };
      (Array.isArray(ne.images) && ne.images.length > 0 ? ne.images : ne.image ? [ne.image] : []).forEach((e, t) => Ke(e, `OP/post image ${t + 1}`));
      (ne.interactions || []).slice(-5).forEach((e, t) => {
        (Array.isArray(e.images) ? e.images : []).forEach(t => Ke(t, `${e.author || "#"} reply image`));
      });
      if (Je.length > 0) {
        De += `\n\n## ATTACHED TEXT-IMAGES (described, not visual):\n${Je.join("\n")}\nReact to these as if you've seen the images. Mention them naturally if relevant.\n`;
      }
      if (We.length > 0) {
        De += `\n\n## ATTACHED IMAGES: ${We.length} real image(s) are attached below. Look at them and react naturally — comment on what you see if relevant.\n`;
      }
      const Xe = (cn || []).map(e => e.meaning).filter(Boolean);
      const Qe = Array.from(new Set(Xe)).slice(0, 60);
      if (Qe.length > 0) {
        De += `\n\n## STICKER REPLIES (optional):\nAvailable meanings: [${Qe.join(", ")}]\nA few NPCs MAY reply with a sticker instead of text. To do so, set "stickerMeaning" to one EXACT meaning from the list above (no paraphrasing/translation), and leave "content" empty or very short. Use stickers for: playful reactions, "+1" effect, mocking, cute moments. At most ~20% of replies should be stickers.\n`;
      }
      const Ze = We.length > 0 ? [{
        type: "text",
        text: De
      }, ...We.map(e => ({
        type: "image_url",
        image_url: {
          url: e.url
        }
      }))] : De;
      const et = await w({
        messages: [{
          role: "system",
          content: "You are a JSON generator. Do not use Markdown JSON blocks. Output valid JSON only."
        }, {
          role: "user",
          content: Ze
        }],
        settings: await S(),
        preferStreaming: false,
        maxTokens: 65536
      });
      let tt;
      try {
        tt = Pe(et);
      } catch (oe) {
        console.error("[Forum] AI 回覆 JSON 解析失敗:", oe, "\nResponse:", typeof et == "string" ? et.slice(0, 300) : et);
        Sn(false);
        return;
      }
      const at = tt.replies || ((U = (B = tt.posts) == null ? undefined : B[0]) == null ? undefined : U.interactions) || (Array.isArray(tt) ? tt : []);
      const st = ((H = ne.author) == null ? undefined : H.isAnon) ? null : ((z = ne.author) == null ? undefined : z.name) || null;
      const it = ((_ = ne.author) == null ? undefined : _.rosterId) || null;
      const lt = at.filter(e => !!e.isAnon || !!re && (!!st && !!Le(e.author, st) || !!it && !!Le(e.rosterId, it)) || !(wo(e.author, e.rosterId) ? (console.warn("[Forum] Dropped impersonation reply:", e.author, e.rosterId), 1) : e.rosterId && !xo(e.rosterId, ne.boardId) ? (console.warn("[Forum] Dropped out-of-group reply:", e.author, e.rosterId, "→ board:", ne.boardId), 1) : st && Le(e.author, st) ? (console.warn("[Forum] Dropped OP-impersonation reply (author match):", e.author), 1) : it && Le(e.rosterId, it) && (console.warn("[Forum] Dropped OP-impersonation reply (rosterId match):", e.rosterId), 1)));
      if (re && He && !lt.some(e => e.isAuthorUpdate)) {
        console.warn("[Forum] 連載同人首次生成缺少新章節，補發章節請求");
        try {
          const e = (Ge == null ? undefined : Ge.opAuthorRosterId) || null;
          const t = (Ge == null ? undefined : Ge.opAuthorName) || ((G = ne.author) == null ? undefined : G.name);
          const n = await w({
            messages: [{
              role: "system",
              content: "You are a JSON generator. Do not use Markdown JSON blocks. Output valid JSON only."
            }, {
              role: "user",
              content: He
            }],
            settings: await S(),
            preferStreaming: false,
            maxTokens: 65536
          });
          const r = Pe(n);
          const o = (r.replies || (Array.isArray(r) ? r : [])).filter(e => e && e.content && ke(e.content, "").trim().length > 0).map(n => ({
            ...n,
            isAuthorUpdate: true,
            isAnon: false,
            author: n.author || t,
            rosterId: n.rosterId || e
          }));
          if (o.length > 0) {
            lt.unshift(o[0]);
          } else {
            console.warn("[Forum] 補發章節請求仍未取得有效章節");
          }
        } catch (ae) {
          console.error("[Forum] 補發章節請求失敗:", ae);
        }
      }
      if (lt.length === 0) {
        console.warn("[Forum] AI 回覆為空，parsed keys:", Object.keys(tt));
        Sn(false);
        return;
      }
      try {
        if (Ie.length > 0) {
          const e = lt.filter(e => e.rosterId && !e.isAnon).length;
          const t = Math.min(3, Ie.length);
          if (e < t) {
            console.warn(`[Forum] roster 出場不足：${e}/${t}（候選 ${Ie.length}）— 檢查 prompt 是否需強化`);
          }
        }
      } catch {}
      const ct = Date.now();
      const dt = lt.map((e, t) => ct + t * 1000);
      const mt = lt.map((e, t) => {
        const n = e.role === "mod" || q.some(t => t.modRosterId && t.modRosterId === e.rosterId);
        let r = [];
        if (e.stickerMeaning && cn.length > 0) {
          const t = L(e.stickerMeaning, cn);
          if (t && t.url) {
            r = [t.url];
          }
        }
        return {
          author: e.isAnon ? s("forumAnonName") : ke(e.author, "NPC"),
          content: ke(e.content, ""),
          images: r,
          role: n ? "mod" : e.role || null,
          isAnon: !!e.isAnon,
          isAuthorUpdate: !!e.isAuthorUpdate,
          isModAction: !Ne && !!e.isModAction,
          modActionType: Ne ? null : e.modActionType || null,
          mentionsUser: !!e.mentionsUser,
          replyTo: e.replyTo || null,
          rosterId: e.rosterId || null,
          avatar: null,
          timestamp: dt[t] || Date.now(),
          wouldDM: !!e.wouldDM,
          dmMessage: e.dmMessage || null
        };
      });
      const ut = ne.interactions || [];
      const ht = s("forumAnonName");
      const pt = {};
      ut.forEach((e, t) => {
        if (e.isAnon) {
          pt[t + 1] = true;
        }
      });
      mt.forEach((e, t) => {
        if (e.isAnon) {
          pt[ut.length + t + 1] = true;
        }
      });
      const ft = new Set();
      lt.forEach(e => {
        if (e.isAnon && e.author) {
          ft.add(e.author);
        }
      });
      ut.forEach(e => {
        if (e.isAnon && e.rosterId) {
          ft.add(e.rosterId);
        }
      });
      mt.forEach(e => {
        if (e.replyTo) {
          const t = e.replyTo.floor;
          const n = e.replyTo.author;
          if (t && pt[t] || ft.has(n)) {
            e.replyTo.author = ht;
          }
        }
        if (e.content && ft.size > 0) {
          for (const t of ft) {
            if (e.content.includes(`@${t}`)) {
              e.content = e.content.split(`@${t}`).join(`@${ht}`);
            }
          }
        }
      });
      const gt = re && mt.some(e => e.isAuthorUpdate);
      let bt = null;
      if (gt && ne.fanficMeta) {
        const e = (ne.interactions || []).filter(e => e.isAuthorUpdate).length;
        const t = mt.filter(e => e.isAuthorUpdate).length;
        const n = (ne.fanficMeta.chapter || 1) + e + t;
        const r = ne.fanficMeta.totalChapters;
        bt = e => {
          let t = e.replace(/\s*\(\d+(?:\/\d+)?\)/g, "").trim();
          if (r) {
            return `${t} (${n}/${r})`;
          } else {
            return `${t} (${n})`;
          }
        };
      }
      if (mt.length > 0) {
        const t = vo(ne.boardId, {
          isReply: true
        });
        const n = Math.max(mt.length * 2, Math.floor(t.views * 0.15));
        const o = Math.max(1, Math.floor(t.likes * 0.2));
        (e => {
          const t = (Z.current || []).map(t => t.id === e ? (e => ({
            ...e,
            title: bt ? bt(e.title) : e.title,
            comments: e.comments + mt.length,
            views: e.views + n,
            likes: e.likes + o,
            interactions: [...e.interactions, ...mt]
          }))(t) : t);
          Z.current = t;
          c.set("posts", t).catch(e => console.warn("[Forum] persist replies failed:", e));
          try {
            Q(t);
          } catch {}
        })(e);
        if (r !== "forum-screen") {
          (async () => {
            try {
              const {
                showNativeNotification: e,
                getNotificationPermission: t
              } = await v(async () => {
                const {
                  showNativeNotification: e,
                  getNotificationPermission: t
                } = await import("./main-BO9xa-SQ.js").then(e => e.ci);
                return {
                  showNativeNotification: e,
                  getNotificationPermission: t
                };
              }, __vite__mapDeps([8, 9, 3, 1, 4, 5, 6, 7, 10, 11, 12, 13]));
              if ((await t()) !== "granted") {
                return;
              }
              await e({
                title: `論壇樓層生成完成（${mt.length} 條回覆）`,
                body: "點擊回到論壇查看",
                tag: "forum-gen-complete",
                icon: "/icon-192.png",
                data: {
                  screen: "forum-screen"
                }
              });
            } catch (e) {}
          })();
        }
        Be(t => t && t.id === e ? {
          ...t,
          title: bt ? bt(t.title) : t.title,
          comments: t.comments + mt.length,
          views: t.views + n,
          likes: t.likes + o,
          interactions: [...t.interactions, ...mt]
        } : t);
        const a = ((Y = ne.author) == null ? undefined : Y.name) === Uo;
        const i = s("forumAiContentLang");
        try {
          const e = String((J == null ? undefined : J.uid) || (J == null ? undefined : J.id) || "");
          if (e) {
            const t = !!((V = ne.author) == null ? undefined : V.isAnon) && a;
            const n = String(ne.title || "").slice(0, 40).replace(/\n/g, " ").trim();
            const r = [];
            const o = new Set();
            const s = (e, t, n, a = {}) => {
              const s = `${e}|${n}`;
              if (!o.has(s)) {
                o.add(s);
                r.push({
                  charId: String(e),
                  charName: t,
                  summary: n,
                  extraFlags: a
                });
              }
            };
            const i = (ne.interactions || []).filter(e => Le(e.author, Uo));
            const l = i.some(e => e.isAnon);
            for (const e of mt) {
              if (e.isAnon) {
                continue;
              }
              if (!e.rosterId) {
                continue;
              }
              const r = Fe(W, e.rosterId);
              if (!r) {
                continue;
              }
              const o = String(e.content || "").slice(0, 50).replace(/\n/g, " ").trim();
              if (o) {
                if (a) {
                  const a = String(ne.content || "").slice(0, 50).replace(/\n/g, " ").trim();
                  const i = t ? `論壇上有條匿名帖「${n}」${a ? `（內容：「${a}」）` : ""}，我回了：「${o}」` : `${Uo}論壇發了「${n}」${a ? `（內容：「${a}」）` : ""}，我回了：「${o}」`;
                  s(r.id, e.author, i, {
                    userAnonOnPost: t
                  });
                } else {
                  const t = e.replyTo && Le(e.replyTo.author, Uo);
                  const a = !!e.mentionsUser;
                  if (!t && !a) {
                    continue;
                  }
                  let c = l;
                  let d = "";
                  if ((K = e.replyTo) == null ? undefined : K.floor) {
                    const t = e.replyTo.floor;
                    const n = (ne.interactions || [])[t - 1];
                    if (n) {
                      c = !!n.isAnon;
                      d = String(n.content || "").slice(0, 50).replace(/\n/g, " ").trim();
                    }
                  }
                  if (!d && i.length > 0) {
                    const e = i[i.length - 1];
                    d = String((e == null ? undefined : e.content) || "").slice(0, 50).replace(/\n/g, " ").trim();
                  }
                  const m = d ? `留言「${d}」` : "留言";
                  const u = c ? `論壇某帖「${n}」下有條匿名${m}，我搭話：「${o}」` : `論壇某帖「${n}」下${Uo}${m}，我搭話：「${o}」`;
                  s(r.id, e.author, u, {
                    userAnonOnPost: c
                  });
                }
              }
            }
            if (r.length > 0) {
              await Promise.all(r.map(async t => {
                try {
                  await x.appendHistory(e, t.charId, {
                    id: Date.now() + Math.floor(Math.random() * 1000),
                    source: "forum",
                    forumScope: "public",
                    forumPostId: String(ne.id),
                    userAnonOnPost: !!t.extraFlags.userAnonOnPost,
                    summary: t.summary,
                    content: t.summary,
                    keywords: ["論壇", ne.boardName || ne.boardId || "帖子"].filter(Boolean),
                    importance: 2,
                    emotion: "neutral",
                    topics: ["日常"],
                    date: new Date().toISOString().slice(0, 10)
                  });
                } catch (n) {
                  console.warn("[Forum→Memory] 寫入失敗:", t.charName, n);
                }
              }));
              console.log(`[Forum→Memory] 寫入 ${r.length} 條論壇互動記憶`);
              try {
                const t = [];
                const n = String(ne.content || "").trim();
                if (n) {
                  t.push({
                    role: a ? "user" : "assistant",
                    content: `[論壇帖 ${ne.title || ""}] ${n}`.slice(0, 4000),
                    timestamp: Number.isFinite(ne.timestamp) ? ne.timestamp : null,
                    senderName: ((X = ne.author) == null ? undefined : X.name) || "匿名"
                  });
                }
                for (const e of mt) {
                  const n = String(e.content || "").trim();
                  if (!n) {
                    continue;
                  }
                  const r = Le(e.author, Uo);
                  t.push({
                    role: r ? "user" : "assistant",
                    content: n.slice(0, 4000),
                    timestamp: Number.isFinite(e.timestamp) ? e.timestamp : null,
                    senderName: e.author || "匿名"
                  });
                }
                if (t.length > 0) {
                  for (const o of r) {
                    D({
                      userId: e,
                      characterId: o.charId,
                      source: "forum",
                      messages: t
                    }).catch(() => {});
                  }
                }
              } catch (se) {}
            }
          }
        } catch (ie) {
          console.warn("[Forum→Memory] 整體寫入失敗:", ie);
        }
        const l = [];
        if (a) {
          const t = mt.filter(e => !e.isAnon && !e.isAuthorUpdate).map(e => e.author);
          if (t.length > 0) {
            const n = t.length > 2 ? `${t.slice(0, 2).join(", ")} ${i === "en" ? `and ${t.length - 2} others` : `等${t.length}人`}` : t.join(", ");
            l.push({
              id: "sys_reply_" + Date.now(),
              name: i === "en" ? "Reply Notification" : i === "zh-Hans" ? "回复通知" : "回覆通知",
              avatar: null,
              type: "system",
              postId: e,
              lastMsg: i === "en" ? `${n} replied to your post "${ne.title.slice(0, 20)}"` : i === "zh-Hans" ? `${n} 回复了你的帖子「${ne.title.slice(0, 20)}」` : `${n} 回覆了你的帖子「${ne.title.slice(0, 20)}」`,
              timestamp: Date.now(),
              unread: 1
            });
          }
        }
        mt.filter(e => e.mentionsUser && !e.isAnon).forEach(t => {
          l.push({
            id: "sys_mention_" + Date.now() + "_" + Math.random(),
            name: i === "en" ? "Mention" : "@提到你",
            avatar: null,
            type: "system",
            postId: e,
            lastMsg: i === "en" ? `${t.author} mentioned you: "${t.content.slice(0, 40)}"` : `${t.author} 提到了你：「${t.content.slice(0, 40)}」`,
            timestamp: Date.now(),
            unread: 1
          });
        });
        if (a && o > 0) {
          const t = ((te = mt.find(e => !e.isAnon)) == null ? undefined : te.author) || "Someone";
          l.push({
            id: "sys_like_" + Date.now(),
            name: i === "en" ? "Like" : i === "zh-Hans" ? "点赞" : "點讚",
            avatar: null,
            type: "system",
            postId: e,
            lastMsg: i === "en" ? `${t} and ${o} others liked your post` : i === "zh-Hans" ? `${t} 等${o}人赞了你的帖子` : `${t} 等${o}人讚了你的帖子`,
            timestamp: Date.now(),
            unread: 1
          });
        }
        if (l.length > 0) {
          Yr(e => {
            const t = no(e, l);
            c.set(Zr, t).catch(() => {});
            return t;
          });
        }
        if (a) {
          const e = [];
          for (const t of mt) {
            if (t.isAnon || t.isAuthorUpdate || t.isUserPost) {
              continue;
            }
            const n = /私信|私聊|DM|dm|找你聊|message you/i.test(t.content);
            if (!t.wouldDM && !n) {
              continue;
            }
            const r = t.dmMessage || t.content.slice(0, 60);
            e.push({
              id: "msg_" + t.author,
              name: t.author,
              avatar: null,
              type: Ot(t.author) ? "friend" : "stranger",
              lastMsg: r,
              timestamp: Date.now() + e.length * 500,
              unread: 1,
              rosterId: t.rosterId || null
            });
          }
          if (e.length > 0) {
            Yr(t => {
              const n = no(t, e);
              c.set(Zr, n).catch(() => {});
              return n;
            });
            Pt(t => {
              let n = t;
              for (const r of e) {
                if (r.name && !n.includes(r.name)) {
                  if (n === t) {
                    n = [...t];
                  }
                  n.push(r.name);
                }
              }
              return n;
            });
          }
        }
      }
    } catch (ie) {
      console.error("AI auto-reply failed:", ie);
      nr(Me(ie, s));
      F(re);
    } finally {
      F(re);
      Sn(false);
    }
  };
  const Uo = ke(ar.nickname, "") || (J == null ? undefined : J.name) || s("forumDefaultUsername");
  const Ho = e => ((e, t = []) => {
    const n = [...Xe, ...t];
    if (n.length === 0) {
      return "";
    }
    let r = 0;
    const o = String(e || "anon");
    for (let a = 0; a < o.length; a++) {
      r = (r << 5) - r + o.charCodeAt(a) | 0;
    }
    return n[Math.abs(r) % n.length];
  })(e, ar.customAvatarPool || []);
  const zo = ar.avatar || (J == null ? undefined : J.avatar) || null;
  const _o = (e, t) => {
    if (t && Le(t, Uo) && zo) {
      return zo;
    }
    const n = Fe(W, e || t);
    return (n == null ? undefined : n.image) || Ho(t || e || "");
  };
  const Go = (e, t) => e || t ? t && Le(t, Uo) ? null : Fe(W, e || t) : null;
  const Wo = e => {
    if (!e) {
      return null;
    }
    if (de(e)) {
      return zo || null;
    }
    if (e.modRosterId) {
      const t = Fe(W, e.modRosterId);
      return ao(t);
    }
    return null;
  };
  const Yo = (e, t) => {
    const n = Wn[e];
    let r = 0;
    let o = 0;
    if (n === t) {
      Yn(t => {
        const n = {
          ...t
        };
        delete n[e];
        return n;
      });
      if (t === "up") {
        r = -1;
      } else {
        o = -1;
      }
    } else {
      if (n === "up") {
        r = -1;
      }
      if (n === "down") {
        o = -1;
      }
      if (t === "up") {
        r += 1;
      } else {
        o += 1;
      }
      Yn(n => ({
        ...n,
        [e]: t
      }));
    }
    go(e, e => ({
      ...e,
      likes: Math.max(0, e.likes + r),
      dislikes: Math.max(0, e.dislikes + o)
    }));
    Be(t => t && t.id === e ? {
      ...t,
      likes: Math.max(0, t.likes + r),
      dislikes: Math.max(0, t.dislikes + o)
    } : t);
  };
  const Jo = e => {
    go(e.id, e => ({
      ...e,
      views: e.views + 1
    }));
    Be({
      ...e,
      views: e.views + 1
    });
    Io("post-detail");
  };
  const Vo = e => {
    Re(e);
    Io("board-detail");
  };
  const qo = async (e, t = "new", o = {}) => {
    var a;
    var i;
    var l;
    var d;
    var m;
    const {
      forcedRosterIds: u = [],
      postCountOverride: h = 0
    } = o;
    jn(true);
    M().catch(() => {});
    const p = u.length > 0 ? `指定角色發貼（${u.length} 個）` : t === "new" ? "生成新帖" : "更新樓層";
    const b = R("feed", p);
    try {
      let o = yo(W, e);
      const p = Array.isArray(u) && u.length > 0;
      if (p) {
        const t = new Set(u.map(String));
        const n = o.filter(e => t.has(String(e.id)));
        const r = [...t].filter(e => !o.some(t => String(t.id) === e));
        if (r.length > 0) {
          const t = e ? ((a = q.find(t => t.id === e)) == null ? undefined : a.name) || e : "隨機板塊";
          console.warn(`[Forum] 指定發貼：${r.length} 個角色不符合板塊「${t}」的 group 限制，已跳過`);
          nr(`已跳過 ${r.length} 個不符板塊分組的角色`, 4000);
        }
        if (!(n.length > 0)) {
          console.error("[Forum] 指定發貼失敗：所選角色全部不符合板塊 group 限制");
          nr("所選角色全部不符合此板塊分組，無法生成");
          return;
        }
        o = n;
      }
      let k = [];
      const P = (p ? o : o.slice(0, 6)).map(e => Ye(e, {
        forPromptLine: true,
        worldBooks: zt
      }));
      let M = "";
      try {
        const e = (await g.getAll()).filter(e => e && (e.isGlobal === true || e.isGlobal === "true"));
        if (e.length > 0) {
          const t = e[0];
          const n = (t.entries || []).filter(e => e && e.content && !e.disable && e.enabled !== false && e.type !== "imagegen").slice(0, 5).map(e => `${e.name}: ${e.content}`).join("\n");
          if (n) {
            M = `\nWorld / Setting context (reference, not mandatory):\n${t.title} - ${t.description || ""}\n${n}`;
          }
        }
      } catch (y) {}
      const R = e === "creator";
      const B = !e && q.some(e => e.id === "creator");
      let L = [];
      try {
        const e = (J == null ? undefined : J.id) || (U == null ? undefined : U.id);
        if (e) {
          const t = await f.getByUser(String(e));
          L = Oe(o, t, $);
        } else {
          L = Oe(o, [], $);
        }
      } catch (y) {
        L = Oe(o, [], $);
      }
      const H = lr();
      const z = Ae[H] || Ae.standard;
      const _ = h > 0 ? {
        ...z,
        postCount: h
      } : z;
      let G;
      let Y = [];
      if (t === "revive") {
        const t = X.filter(t => (!e || t.boardId === e) && !t.isAnon && t.interactions.length >= 1);
        if (t.length === 0) {
          nr(s("forumErrorNoPostsToRevive"));
          jn(false);
          return;
        }
        const n = [...t].sort(() => Math.random() - 0.5);
        Y = n.slice(0, Math.min(_.reviveMaxPosts, n.length));
        const r = s("forumAiContentLang");
        const o = r === "en" ? "English" : r === "zh-Hans" ? "Simplified Chinese (简体中文)" : "Traditional Chinese (繁體中文)";
        G = `You are generating CONTINUATION REPLIES for existing forum posts on a lived-in online community.\n\n## LANGUAGE (MANDATORY): ALL replies MUST be in ${o}.${r === "zh-Hans" ? " Use 简体字 ONLY — never 繁體字." : r === "zh-Hant" ? " Use 繁體字 ONLY." : ""}\n${nt(o.includes("Simplified") ? "zh-Hans" : o.includes("English") ? "en" : "zh-Hant")}\n\n## Existing Posts to Continue:\n${Y.map((e, t) => {
          var n;
          var r;
          const o = e.boardId === "creator" && e.fanficMeta;
          const a = o ? 1500 : 500;
          const i = o ? 400 : 200;
          const l = (e.content || "").slice(0, a);
          const c = (e.content || "").length > a ? `\n... [truncated, total ${e.content.length} chars]` : "";
          return `### Post ${t} — "${e.title}" (board: ${e.boardId})\nOP: ${e.isAnon ? s("forumAnonName") : (n = e.author) == null ? undefined : n.name}${!e.isAnon && ((r = e.author) == null ? undefined : r.rosterId) ? ` (rosterId: "${e.author.rosterId}")` : ""}\nContent: ${l}${c}\n${Bo(e, {
            label: "Replies so far",
            maxFloors: 60,
            perReplyChars: i,
            headCount: 10
          })}`;
        }).join("\n\n")}\n\n## Roster Characters (feature them ACTIVELY — aim for 3-4 roster character replies per post across different characters; set rosterId to realName; voice MUST match persona):\n${P.length > 0 ? P.join("\n") : "(none)"}\n${Ze}\n\n## Rules — generate MORE replies, this is the focus\n- Generate **${_.reviveRepliesPerPost} NEW replies per post**.\n- Include OP replying in their own thread occasionally (1-3 OP replies per post).\n- Mix new NPC users + 1-2 returning repliers (you may reuse names from "Replies so far").\n- Match the original post's tone and the board's vibe.\n- Reply lengths VARY: short (15-40 chars), medium (40-120), long (120-300). Mix them.\n- Reply mix: ~50-60% random NPC users with creative screen names (puns, kaomoji, meme refs), ~40-50% roster characters spread across multiple different characters.\n- Include reply CHAINS: A disagrees → B responds → OP clarifies. Make threads feel ALIVE.\n- Some replies may be anonymous (isAnon: true) — natural distribution.\n- Diverse behaviors: trolling, sincere advice, tangents, "+1", copypasta, mini-essays, hot takes.\n\n## Output — PURE JSON, no markdown:\n{\n  "postReplies": [\n    {\n      "postIndex": 0,\n      "replies": [\n        { "author": "screen name", "rosterId": "realName or null", "content": "reply text", "isAnon": false, "isAuthorUpdate": false }\n      ]\n    }\n  ]\n}`;
        G += Co();
      } else if (R) {
        G = at(P, L, M, X, s("forumAiContentLang"), ar.allowFanficSubjectReply !== false, _);
        G += Co();
      } else {
        let t;
        if (e) {
          const n = q.find(t => t.id === e);
          const r = await To(n);
          t = `ALL posts go to board "${e}" (${n == null ? undefined : n.name}: ${n == null ? undefined : n.desc}). Content MUST match this board's theme.${r ? "\n\n" + r : ""}`;
        } else {
          const e = q.filter(e => e.id !== "creator");
          const n = [];
          for (const t of e) {
            let e = `- ${t.id} (${t.name}): ${t.desc}`;
            if (!ot[t.id]) {
              const n = await To(t);
              if (n) {
                e += `\n${n.split("\n").map(e => `  ${e}`).join("\n")}\n  → Posts in this board MUST stay in-character within its world/setting AND obey the board-specific length/role rules above.`;
              }
            }
            if (t.allowedGroups && t.allowedGroups.length > 0) {
              const n = W.filter(e => bo(e).some(e => t.allowedGroups.includes(e))).map(e => e.name);
              e += `\n  [ROSTER RESTRICTION]: ONLY these roster characters may appear as authors or repliers on this board: ${n.length > 0 ? n.join(", ") : "(none — use only random NPCs)"}. NEVER set rosterId to any other roster character on this board.`;
            }
            n.push(e);
          }
          t = `Distribute posts randomly across these boards. Each post's content MUST match its assigned board's theme:\n${n.join("\n")}`;
        }
        const n = (e => {
          if (!e || e.length === 0) {
            return "";
          }
          const t = e.map(e => {
            const {
              tags: t,
              heatWeight: n
            } = (e => {
              const t = `${e.name || ""} ${e.role || ""} ${e.description || ""}`;
              const n = [];
              let r = 1;
              if (ze.test(t)) {
                n.push("celebrity");
                r += 3;
              }
              if (_e.test(t)) {
                n.push("authority");
                r += 1;
              }
              if (Ge.test(t)) {
                n.push("creative");
                r += 1.5;
              }
              if (We.test(t)) {
                n.push("tech");
                r += 0.5;
              }
              if ((e.relationships || []).length >= 3) {
                n.push("social_butterfly");
                r += 1;
              }
              return {
                tags: n,
                heatWeight: r
              };
            })(e);
            if (t.length === 0) {
              return null;
            } else {
              return `- "${e.name}" [${t.join(", ")}] — heat weight: ${n.toFixed(1)}x`;
            }
          }).filter(Boolean);
          if (t.length === 0) {
            return "";
          } else {
            return `\n## CHARACTER POPULARITY & PUBLIC PROFILE:\n${t.join("\n")}\nCharacters tagged "celebrity" are GOSSIP MAGNETS — forum users discuss, debate, share sightings about them.\nCharacters tagged "authority" are RESPECTED or CONTROVERSIAL — users seek their advice or argue about their decisions.\n`;
          }
        })(o);
        let r = "";
        const a = q.filter(e => e.mod && !de(e)).map(e => {
          const t = !!e.modRosterId;
          const n = t ? Fe(W, e.modRosterId) : null;
          const r = e.mod;
          const o = e.modPersonality || "neutral";
          const a = o === "outgoing" ? "occasionally appears (~15% of threads, likes chatting with users)" : o === "warm" ? "sometimes appears (~10% of threads, supportive tone)" : o === "creative" ? "rarely appears (~8% of threads, shows up for quality content)" : "very rarely appears (~5% of threads, only for rule enforcement)";
          return `- Board "${e.id}" (${ue(e)}): Mod = "${r}"${t ? ` (rosterId: "${e.modRosterId}")` : " (forum NPC, rosterId: null)"}${(n == null ? undefined : n.role) ? `, role: ${n.role}` : ""}, personality: ${o}, frequency: ${a}`;
        });
        const l = q.filter(e => e.mod && de(e));
        if (l.length > 0) {
          const e = l.map(e => `- Board "${e.id}" (${ue(e)}): Moderated by the REAL USER — do NOT generate any mod actions (lock/pin/warning/announce) for this board. NPCs may casually mention "版主" but you must NEVER simulate the user's moderator actions.`).join("\n");
          a.push(e);
        }
        if (a.length > 0) {
          r = `\n## BOARD MODERATORS (版主) — part of the community, NOT omnipresent:\n${a.join("\n")}\nModerator behavior rules:\n- Mods are RARE presences — most threads have ZERO mod activity. Only ~1 in 10 posts should have any mod interaction.\n- Outgoing/warm mods appear slightly more often with casual comments; reserved mods almost never show up unless enforcing rules.\n- When a mod DOES appear, they might: casually reply as a community member, pin a quality post, or post a brief comment.\n- Mod replies MUST have "role": "mod" so the badge shows.\n- If a mod is a roster character, their voice MUST match their persona. If a mod is a forum NPC (rosterId: null), give them a consistent personality matching their screen name.\n- Do NOT make mods appear in every thread — a forum where the mod comments on everything feels oppressive and fake.\n- ⚠️ NEVER generate isModAction or modActionType for boards moderated by the real user. Only NPC mods may have mod actions.\n`;
        }
        let c = "";
        const d = new Map();
        try {
          const e = (J == null ? undefined : J.uid) || (J == null ? undefined : J.id);
          if (e && o.length > 0) {
            const t = [];
            const n = [];
            const r = [];
            const a = {
              online: "💬",
              tm: "🤝",
              group: "👥",
              date: "💕",
              encounter: "👋",
              moment: "💭",
              forum: "📋",
              merged: "📚"
            };
            const s = o.slice(0, 6);
            for (const o of s) {
              try {
                const t = await x.get(String(e), String(o.id));
                if (t) {
                  const e = (t.summaryHistory || []).length;
                  const s = e >= 8 ? "deep" : e >= 3 ? "some" : "light";
                  const l = d.get(o.name);
                  if (!l || s === "deep" || s === "some" && l.memDepth === "light") {
                    d.set(o.name, {
                      rel: (l == null ? undefined : l.rel) || "",
                      memDepth: s
                    });
                  }
                  if ((i = t.stance) == null ? undefined : i.text) {
                    n.push(`- ${o.name} (stance): ${String(t.stance.text).slice(0, 120)}`);
                  } else if (t.episodeSummary) {
                    n.push(`- ${o.name} (memory summary): ${String(t.episodeSummary).slice(0, 150)}`);
                  }
                  const c = [];
                  (t.summaryHistory || []).slice(-5).forEach(e => {
                    (e.openThreads || []).forEach(e => {
                      const t = typeof e == "string" ? e : (e == null ? undefined : e.text) || (e == null ? undefined : e.content) || "";
                      if (t && !c.includes(t)) {
                        c.push(String(t).slice(0, 80));
                      }
                    });
                  });
                  if (c.length > 0) {
                    r.push(`- ${o.name} has unresolved threads: ${c.slice(0, 3).join(" / ")}`);
                  }
                  const m = (t.summaryHistory || []).slice(-3).map(e => {
                    const t = e.summary || e.content || "";
                    if (t) {
                      return `${a[e.source] || "📝"} ${String(t).slice(0, 90)}`;
                    } else {
                      return "";
                    }
                  }).filter(Boolean);
                  if (m.length > 0) {
                    n.push(`  ↳ recent events with ${o.name}: ${m.join(" | ")}`);
                  }
                }
              } catch {}
              try {
                const n = ((await N.getLastMessages(String(e), String(o.id), 5)) || []).filter(e => !(e == null ? undefined : e.hiddenByUser));
                if (n && n.length >= 2) {
                  if (!d.has(o.name)) {
                    d.set(o.name, {
                      rel: "",
                      memDepth: "light"
                    });
                  }
                  const e = n.slice(-3).map(e => `${e.sender === "me" ? (J == null ? undefined : J.name) || "User" : o.name}: ${(e.text || "").slice(0, 80)}`).join(" | ");
                  t.push(`- ${o.name} (latest chat): ${e}`);
                }
              } catch {}
            }
            try {
              const n = await f.getByUser(String(e));
              for (const e of (n || []).slice(0, 5)) {
                const n = o.find(t => String(t.id) === String(e.characterId));
                if (!n) {
                  continue;
                }
                const r = e.relationship || e.charToUserRelationship;
                if (r) {
                  const e = d.get(n.name);
                  d.set(n.name, {
                    rel: r,
                    memDepth: (e == null ? undefined : e.memDepth) || "light"
                  });
                  t.push(`- User "${(J == null ? undefined : J.name) || "User"}" ↔ ${n.name}: relationship = "${r}"`);
                }
              }
            } catch {}
            if (t.length > 0 || n.length > 0 || r.length > 0) {
              const e = [];
              if (n.length > 0) {
                e.push(`### Long-term memory (episode summaries):\n${n.join("\n")}`);
              }
              if (r.length > 0) {
                e.push(`### ⚠️ UNRESOLVED STORY THREADS (high-priority material — use these to build continuity):\n${r.join("\n")}`);
              }
              if (t.length > 0) {
                e.push(`### Recent chat snippets:\n${t.join("\n")}`);
              }
              c = `\n## STORYLINE CONTEXT — the user's ongoing story with these characters. Use this as PRIMARY INSPIRATION so posts feel connected to a living narrative:\n${e.join("\n\n")}\n\nUsage:\n- 1-2 posts/replies callback these threads — gossip, sightings, hints. Stay in screen-name mode, no verbatim chat logs / DMs.\n- Named char(s) here = YOUR lived experience: carry current emotional state into tone; react to the user's SN per where you stand RIGHT NOW.\n- NPCs / uninvolved roster chars = outside view only: rumor, speculation, observer commentary.\n`;
            }
          }
        } catch {}
        const m = (e ? ne.byBoard.get(e) || [] : X).slice(0, 20).map(e => (e.title || "").trim()).filter(Boolean).slice(0, 15);
        const u = (J == null ? undefined : J.name) ? (() => {
          const e = J.intro || J.role || "";
          const t = `${J.name} ${J.role || ""} ${e}`;
          const n = ze.test(t) ? "celebrity" : _e.test(t) ? "public" : "none";
          const r = Array.from(d.entries()).map(([e, t]) => {
            const n = [e];
            if (t.rel) {
              n.push(t.rel);
            }
            n.push(t.memDepth);
            return n.join(" / ");
          });
          return {
            name: J.name,
            gender: J.gender || "",
            intro: e,
            screenName: Uo,
            fameLevel: n,
            acquaintedChars: r
          };
        })() : null;
        const h = e ? (() => {
          const t = q.find(t => t.id === e);
          if (t) {
            return [{
              id: t.id,
              name: ue(t) || t.name,
              members: t.members || 0
            }];
          } else {
            return [];
          }
        })() : q.filter(e => e.id !== "creator").map(e => ({
          id: e.id,
          name: ue(e) || e.name,
          members: e.members || 0
        }));
        G = ((e, t, n, r, o = "zh-Hant", a = [], s = {}, i = {
          postCount: 5,
          repliesPerPost: "8-15"
        }) => {
          const l = ot[r];
          const c = (l == null ? undefined : l.boardPrompt) || "";
          const d = r ? "" : Object.entries(ot).filter(([, e]) => e == null ? undefined : e.boardPrompt).map(([e, t]) => `### ${e}\n${t.boardPrompt}`).join("\n\n");
          const {
            characterHeatHints: m = "",
            modContext: u = "",
            storylineContext: h = "",
            recentTitles: p = [],
            userPersona: f = null,
            boardScales: g = []
          } = s;
          const b = Array.isArray(g) && g.length > 0 ? g.map(e => rt(e.members, e.name)).filter(Boolean).join("\n") : "";
          const y = (() => {
            if (!f || !f.name) {
              return "";
            }
            const e = [f.name];
            if (f.gender) {
              e.push(f.gender);
            }
            if (f.intro) {
              e.push(String(f.intro).slice(0, 120));
            }
            const t = f.screenName && f.screenName !== f.name ? ` (forum SN: "${f.screenName}")` : "";
            const n = f.fameLevel;
            const r = n === "celebrity" ? "NPC RECOGNITION: PUBLIC FIGURE — NPCs recognize SN, sightings cause buzz; volume scales with board↔field relevance." : n === "public" ? "NPC RECOGNITION: KNOWN ROLE — NPCs defer/respect when topic touches their field." : "NPC RECOGNITION: PRIVATE — NPCs don't know them.";
            const o = Array.isArray(f.acquaintedChars) ? f.acquaintedChars : [];
            const a = o.length > 0 ? `CHARS WHO KNOW USER (always recognize; format = name / relationship / memory-depth):\n${o.map(e => `- ${e}`).join("\n")}` : "CHARS WHO KNOW USER: none yet.";
            return `\n## USER: ${e.join(" / ")}${t}\n${r}\n${a}\nReaction depth = memory-depth × current dynamic × board/post relevance. Deep-memory chars react like real friends; light-memory = acquaintance-level. Silence valid when topic doesn't fit.\n`;
          })();
          const v = p.length > 0 ? `\n## ANTI-REPEAT — recent posts already exist (${p.length}). DO NOT generate posts on these same topics or with similar angles:\n${p.slice(0, 15).map(e => `- ${e}`).join("\n")}\nPick FRESH topics. If you must touch a similar theme, approach it from a totally different angle (opposite opinion, different demographic, weird sub-niche).\n` : "";
          const x = nt(o);
          const N = h ? "\n## 💭 MEMORY INTERACTION HOOKS (use STORYLINE CONTEXT above to drive ~15-25% of posts/replies)\nThe user has ongoing storylines with specific roster characters (listed in STORYLINE CONTEXT). Make the forum FEEL those storylines, not as third-party narration but as ripples:\n- A roster char involved in a recent storyline may post/reply with TONE shifted by their current emotional state (still in screen-name mode, never breaking anonymity)\n- Topics adjacent to the storyline appear organically: someone posts about a similar dilemma, board chatter touches the same theme\n- Open threads (unresolved events) provide POST HOOKS — a char who's mid-conflict might vent abstractly, or post something that matches their current headspace\n- DO NOT have NPCs narrate the user's specific scenes (already forbidden by IDENTITY PROTECTION) — instead let the AMBIENT MOOD shift\n- A char who just had a great moment with the user might post upbeat content; a char in conflict might be sharp/withdrawn\n- This is the difference between a forum that exists in a vacuum vs. one that breathes alongside the user's life" : "";
          return `You are a forum post generator simulating a REAL, lived-in online community.\nGenerate ${i.postCount} forum posts.\n\n${Qe(o)}\n${x}\n\n## Board Assignment\n${e}\n${r ? c : `Each post MUST match its assigned board:\n\n${d}`}\n\n## 🎯 BOARD TOPIC IS THE STAR — NOT ROSTER CHARACTERS\nThe PRIMARY job of each post is to fit its board's theme/world/culture. The forum is a LIVED-IN community with its OWN agenda — most posts are about things random people care about, not about roster characters.\n- Topic ownership: ${Math.ceil(i.postCount * 0.6)}+ posts (60%+) MUST be on subjects ENTIRELY independent of roster characters — random NPC life, board-native topics, community culture\n- Roster characters appear ONLY when the board topic genuinely fits their persona/interests — never force them in\n- A board about cooking doesn't need every post to feature a roster char who likes food; a tech board doesn't need the programmer roster char in every thread\n- Forum's own life > roster character cameos\n\n## Poster Identity — EVERYONE uses screen names, NEVER real names\n${t.length > 0 ? `- ROSTER CHARACTERS — they are RESIDENTS of this forum, just like everyone else. NOT VIPs or main attractions.\n  Soft quota: roughly 25-35% of posts may have a roster author IF the topic naturally suits them. ${Math.max(2, Math.floor((t.length || 0) / 2))}+ different roster authors across the batch (rotate, don't repeat same char).\n${t.join("\n")}\n  → Set "rosterId" to realName for avatar linking. Screen name should hint at personality without exposing identity.\n  → Content MUST match character's persona, occupation, speech patterns, worldview — generic voice = failure.\n  → IMPORTANT: if no roster char's persona fits a given post topic, use an NPC. Don't shoehorn.\n  → A roster char on this forum acts like an ordinary user with that persona — they vent, lurk, react, post about their own interests. They don't perform "being a character."` : ""}\n- NPC posters dominate the volume — creative screen names: puns, kaomoji, aesthetic, meme references\n- 1-2 posts may be anonymous (isAnon: true)\n${Ze}\n${y}\n\n## ANTI-SHIPPING RULE — relationship chart is canon\n${a.length > 0 ? (() => {
            const e = a.filter(e => e.type === "user_x_char");
            const t = a.filter(e => e.type !== "user_x_char");
            const n = ["Verified canon romantic pairs:"];
            if (e.length > 0) {
              n.push("⭐ User×Character (priority — these are the user's own relationships):");
            }
            e.forEach(e => n.push(`- ${e.a} × ${e.b} (${e.label})`));
            if (t.length > 0) {
              n.push("Character×Character:");
            }
            t.forEach(e => n.push(`- ${e.a} × ${e.b} (${e.label})`));
            return n.join("\n");
          })() : "No romantic pairs are registered in the relationship chart involving roster characters."}\n\nRoster characters whose canon relationship is friend / colleague / rival / family / stranger stay non-romantic on this forum. Their non-romantic dynamic IS the interesting material — write them as friends, rivals, etc.\n\n- Forum-original NPCs may have their own romance stories among themselves (NPC × NPC is fine).\n- Roster character × NPC romance does not exist — NPCs are forum readers, not love interests for roster characters.\n${m}${h}${N}${u}${b}${v}\n\n## Ecosystem Realism\n- Mix post ages: "just now" to "3 days ago" — not everything is fresh\n- Engagement varies: some posts blow up, others are crickets\n- Natural dynamics: regulars, callbacks to previous drama, running jokes\n- Organic reply threads: agree, disagree, off-topic, late bad takes\n\n## Optional Image Attachment (imageText) — VISUAL DESCRIPTION of an attached photo\n~40% of posts include an "imageText": a short DESCRIPTION OF WHAT THE PHOTO SHOWS (用作圖片的視覺描述), as if the OP attached a real photo to the post.\n- MUST describe a VISUAL SCENE — what is in the picture: subject + environment + lighting/mood.\n- 15-60 chars, in the post's language. Style: noun-phrase / brief scene description.\n- ✅ GOOD: "桌上一杯熱拿鐵，旁邊一本翻開的書", "深夜的辦公樓，只剩我這層還亮著燈", "貓窩裡睡著兩隻橘貓，尾巴交纏在一起", "窗外下著大雨，玻璃上的水珠"\n- ❌ BAD (這些是文字截圖風格，禁止輸出): "「我累了」", "今天分手了", 引號包住的對白、心情語錄、便條留言\n- The image content should THEMATICALLY relate to the post (e.g. post 抱怨工作 → photo of messy desk; post 推薦咖啡店 → photo of latte art).\n- Set imageText to null/omit if the post doesn't naturally come with a photo (e.g. pure rant / pure question text post).\n\n## Image Generation Prompt (imageScene) — ENGLISH tags for the AI image generator\nWHENEVER you provide an "imageText", you MUST also provide an "imageScene": the SAME photo rendered as an ENGLISH image-generation prompt. This is what an AI image model actually reads — Chinese prose CANNOT be drawn, so this field is REQUIRED whenever imageText exists (set it to null only when imageText is null).\n- Start with a [SUBJECT:XXX] tag picked from the photo's content:\n  • PERSON_EMOTION — selfie / own face / mood close-up\n  • PERSON_ACTION — one person doing something (cooking, walking, reading)\n  • TWO_PEOPLE — two people together\n  • SCENE_WITH_PEOPLE — environment with incidental people\n  • OBJECT — food / item / flower / gift / book (no person)\n  • SCENERY — landscape / cityscape / room / sky (no person)\n- After the tag: 15-35 English Danbooru-style tags OR one flowing English sentence — composition first (close-up / wide shot / still life / from above), then subject, action, clothing, environment, lighting/mood.\n- It MUST depict the SAME scene as imageText, and the mood must match the post's tone.\n- ❌ NEVER output Chinese here. ❌ NEVER copy the post text verbatim. This is purely visual tags.\n- Examples:\n  • imageText "桌上一杯熱拿鐵，旁邊一本翻開的書" → imageScene "[SUBJECT:OBJECT] still life, a cup of hot latte with latte art on a wooden table, an open book beside it, warm cafe lighting, top-down view, no people"\n  • imageText "深夜的辦公樓，只剩我這層還亮著燈" → imageScene "[SUBJECT:SCENERY] wide night shot of an office tower, only one floor lit up, dark sky, lonely cold blue lighting, no people"\n  • imageText "貓窩裡睡著兩隻橘貓" → imageScene "[SUBJECT:OBJECT] two orange tabby cats sleeping curled up in a cat bed, tails intertwined, soft warm indoor light, cozy, no people"\n\n## Replies (CRITICAL — depth matters)\n- Each post: ${i.repliesPerPost} replies. Vary widely.\n- OP may reply in their own thread\n- REPLY LENGTH DISTRIBUTION (enforce strictly):\n  - 70% short reactions (10-40 chars): "+1", "笑死", "同感", brief reactions, emoji-heavy\n  - 20% medium comments (50-150 chars): substantive opinion, brief story, advice\n  - 10% long takes (150-350 chars): essays, rants, detailed advice, storytelling\n- DIVERSE BEHAVIORS (mix at least 4 different vibes per post):\n  - Sincere agreement / supportive (~20%)\n  - Disagreement / hot takes / "actually..." (~15%)\n  - Tangent / off-topic detour (~10%)\n  - Joke / shitpost / pure meme reaction (~25%)\n  - Personal anecdote ("這讓我想起...") (~15%)\n  - Question back to OP / curiosity (~10%)\n  - Snarky / passive-aggressive (~5%)\n- Include reply CHAINS (at least 1 per post): A disagrees → B responds → OP clarifies\n- Reply mix: ~65-75% random NPC users, ~25-35% roster characters (only when topic fits their persona; rotate across different ones; never force-fit). Roster chars are forum residents, not main characters — visible when relevant, silent when not.\n## NPC Screen Name Pool — pick from these styles, NEVER use generic IDs like "user_xxx" or "匿名123":\n- Kaomoji/aesthetic: 月亮糖、貓貓掌、沒有蛀牙、吃飽就睡、星塵碎屑、雲朵打結、薄荷味失眠\n- Self-deprecating: 社畜小張、人形睏意、上班如上墳、KPI受害者、咖啡續命中\n- Meme refs: 已老實求放過、純路過、不是我幹的、就這？、絕了寶寶\n- Pun/wordplay: 韭菜永動機、半糖去冰人、emo電池、麥當勞快樂頌\n- Earnest weird: 喜歡下雨天、收集發票、地鐵口的椅子、很會疊被子的人\nMix styles freely. Each post/reply should use a DIFFERENT name unless reusing a regular.\n${n}\n\n## Output — PURE JSON, no markdown:\n{\n  "posts": [\n    {\n      "title": "Post title",\n      "boardId": "board_id",\n      "authorName": "screen name",\n      "rosterId": "realName or null",\n      "mood": "emoji + mood text",\n      "content": "Post body",\n      "imageText": "visual description of the attached photo (subject+scene, NOT a quote/text screenshot) or null",\n      "imageScene": "REQUIRED when imageText exists — ENGLISH image-gen prompt: [SUBJECT:XXX] + danbooru tags of the SAME photo; null only if imageText is null",\n      "isAnon": false,\n      "isLocked": false,\n      "timeLabel": "relative timestamp",\n      "interactions": [\n        { "author": "screen name", "rosterId": "realName or null", "content": "reply", "isAnon": false, "role": "null or mod", "isModAction": false, "modActionType": "null or warning|lock|pin|announce" }\n      ]\n    }\n  ]\n}`;
        })(t, P, M, e, s("forumAiContentLang"), L, {
          characterHeatHints: n,
          modContext: r,
          storylineContext: c,
          recentTitles: m,
          userPersona: u,
          boardScales: h
        }, _);
        G += Co();
        if (p && o.length > 0) {
          const e = o.map(e => e.name).join(", ");
          G += `\n\n## ⚠️ FORCED AUTHOR CONSTRAINT (overrides any 40-50% quota above)\nEVERY post in this batch MUST be authored by ONE of these roster characters: [${e}].\n- Set "rosterId" to one of: ${e}\n- isAnon MUST be false\n- Distribute posts across the listed characters; do NOT have one character dominate (unless only one is provided)\n- NPC authors are FORBIDDEN in this batch — every post needs a roster author from the list above\n- Replies inside each post may still mix NPCs + roster characters as usual\n`;
        }
      }
      G += So();
      try {
        const t = e || (R ? "creator" : null);
        if (t) {
          const e = q.find(e => e.id === t);
          if ((e == null ? undefined : e.jailbreakEnabled) && Array.isArray(e.jailbreakEntryIds) && e.jailbreakEntryIds.length > 0) {
            const t = we(zt, e.jailbreakEntryIds);
            if (t) {
              G += "\n\n" + t;
            }
          }
        }
      } catch (y) {}
      try {
        const e = await n.get("apiSettings").catch(() => null);
        const t = await Ne({
          mode: "all",
          apiSettings: e
        }).catch(() => "");
        const r = j(t);
        if (r) {
          G += r;
        }
      } catch (I) {}
      const V = await w({
        messages: [{
          role: "system",
          content: "You are a JSON generator. Do not use Markdown JSON blocks. Output valid JSON only."
        }, {
          role: "user",
          content: G
        }],
        settings: await S(),
        preferStreaming: false,
        maxTokens: 65536
      });
      let K;
      try {
        K = Pe(V);
      } catch (E) {
        console.error("Failed to parse feed generation", E, "\nResponse:", typeof V == "string" ? V.slice(0, 500) : V);
        throw E;
      }
      if (t === "new") {
        if (R && Array.isArray(K.posts)) {
          const e = (Z.current || []).filter(e => {
            var t;
            return e.boardId === "creator" && ((t = e.fanficMeta) == null ? undefined : t.series);
          }).map(e => e.fanficMeta.series);
          K.posts = st(K.posts, e);
        }
        const e = jo();
        const t = (K.posts || []).filter(t => {
          var n;
          if (!t.isAnon) {
            if (wo(t.authorName, t.rosterId)) {
              console.warn("[Forum] Dropped impersonation post:", t.authorName, t.rosterId);
              return false;
            }
            if (t.rosterId && !xo(t.rosterId, t.boardId)) {
              console.warn("[Forum] Dropped out-of-group post:", t.authorName, t.rosterId, "→ board:", t.boardId);
              return false;
            }
          }
          return t.boardId !== "creator" || !((n = t.fanficMeta) == null ? undefined : n.cpTag) || !!He(t.fanficMeta.cpTag, L, e) || !(console.warn("[Forum] Dropped fabricated-CP fanfic post:", t.fanficMeta.cpTag, "title:", t.title), 1);
        });
        const r = Date.now();
        k = t.map((e, n) => {
          const o = q.find(t => t.id === e.boardId) || q[0];
          const a = ke(e.imageText, "").trim();
          const i = ke(e.content, "").trim();
          const l = a && a !== i && !i.startsWith(a) ? a.slice(0, 120) : "";
          return {
            id: r + n,
            title: ke(e.title, ""),
            boardName: (o == null ? undefined : o.name) || "",
            boardId: (o == null ? undefined : o.id) || "chat",
            author: e.isAnon ? {
              name: s("forumAnonName"),
              avatar: null,
              mood: null,
              role: null,
              level: null,
              isAnon: true
            } : {
              name: ke(e.authorName, "NPC"),
              avatar: null,
              mood: ke(e.mood, null),
              role: null,
              level: Math.floor(Math.random() * 15) + 1,
              rosterId: e.rosterId || null
            },
            timestamp: r - (t.length - 1 - n) * 1000,
            content: ke(e.content, ""),
            image: null,
            images: l ? [`txt:${l}`] : [],
            imageScene: ke(e.imageScene, "").trim(),
            ...(() => {
              const e = vo((o == null ? undefined : o.id) || "chat");
              return {
                likes: e.likes,
                dislikes: e.dislikes,
                views: e.views
              };
            })(),
            comments: (e.interactions || []).length,
            isHot: Math.random() > 0.65,
            isPinned: !(o == null ? undefined : o.isUserMod) && !!e.isPinned,
            isLocked: !(o == null ? undefined : o.isUserMod) && !!e.isLocked,
            isAnon: !!e.isAnon,
            fanficMeta: e.fanficMeta || null,
            interactions: (() => {
              const a = (e.interactions || []).filter(t => !!t.isAnon || !(wo(t.author, t.rosterId) ? (console.warn("[Forum] Dropped impersonation interaction:", t.author, t.rosterId), 1) : t.rosterId && !xo(t.rosterId, e.boardId) && (console.warn("[Forum] Dropped out-of-group interaction:", t.author, t.rosterId, "→ board:", e.boardId), 1)));
              const i = r - (t.length - 1 - n) * 1000;
              const l = a.map((e, t) => i + (t + 1) * 1000);
              return a.map((e, t) => {
                const n = e.role === "mod" || q.some(t => t.modRosterId && Le(t.modRosterId, e.rosterId));
                return {
                  author: e.isAnon ? s("forumAnonName") : ke(e.author, "NPC"),
                  content: ke(e.content, ""),
                  role: n ? "mod" : e.role || null,
                  isAnon: !!e.isAnon,
                  isAuthorUpdate: !!e.isAuthorUpdate,
                  isModAction: !(o == null ? undefined : o.isUserMod) && !!e.isModAction,
                  modActionType: (o == null ? undefined : o.isUserMod) ? null : e.modActionType || null,
                  avatar: null,
                  rosterId: e.rosterId || null,
                  timestamp: l[t] || Date.now()
                };
              });
            })()
          };
        });
        await O(null, k, Z.current, {
          bestEffortSetPosts: Q,
          postsRef: Z,
          suppressNotify: true
        });
        try {
          const e = String((J == null ? undefined : J.uid) || (J == null ? undefined : J.id) || "");
          if (e) {
            const t = [];
            for (const e of k) {
              if (e.isAnon) {
                continue;
              }
              const n = (l = e.author) == null ? undefined : l.rosterId;
              if (!n) {
                continue;
              }
              const r = Fe(W, n);
              if (!r) {
                continue;
              }
              const o = String(e.title || "").slice(0, 40).replace(/\n/g, " ").trim();
              const a = String(e.content || "").slice(0, 50).replace(/\n/g, " ").trim();
              if (!o && !a) {
                continue;
              }
              const s = `我在${e.boardName || "某板"}發了「${o}」${a ? `：「${a}」` : ""}`;
              t.push({
                charId: String(r.id),
                charName: (d = e.author) == null ? undefined : d.name,
                summary: s,
                boardName: e.boardName,
                postId: e.id,
                np: e
              });
            }
            if (t.length > 0) {
              Promise.all(t.map(t => x.appendHistory(e, t.charId, {
                id: Date.now() + Math.floor(Math.random() * 1000),
                source: "forum",
                forumScope: "public",
                forumPostId: String(t.postId),
                userAnonOnPost: false,
                summary: t.summary,
                content: t.summary,
                keywords: ["論壇", t.boardName || "帖子", "發貼"].filter(Boolean),
                importance: 2,
                emotion: "neutral",
                topics: ["日常"],
                date: new Date().toISOString().slice(0, 10)
              }).catch(e => console.warn("[Forum→Memory] 發貼寫入失敗:", t.charName, e)))).then(() => console.log(`[Forum→Memory] 寫入 ${t.length} 條 char 發貼記憶`));
              try {
                for (const n of t) {
                  const t = n.np;
                  const r = String((t == null ? undefined : t.title) || "").trim();
                  const o = String((t == null ? undefined : t.content) || "").trim();
                  if (!r && !o) {
                    continue;
                  }
                  const a = [{
                    role: "assistant",
                    content: `[論壇發帖 · ${n.boardName || "某板"}] ${r}${o ? `\n${o}` : ""}`.slice(0, 4000),
                    timestamp: Number.isFinite(t == null ? undefined : t.timestamp) ? t.timestamp : Date.now(),
                    senderName: n.charName
                  }];
                  D({
                    userId: e,
                    characterId: n.charId,
                    source: "forum",
                    messages: a
                  }).catch(() => {});
                }
              } catch (I) {}
            }
          }
        } catch (y) {
          console.warn("[Forum→Memory] 發貼整體寫入失敗:", y);
        }
        (async () => {
          var e;
          try {
            const t = await n.get("apiSettings").catch(() => null);
            if (!(t == null ? undefined : t.forumIncludeImages)) {
              return;
            }
            const r = String((J == null ? undefined : J.uid) || (J == null ? undefined : J.id) || "");
            for (const n of k) {
              const o = String(n.imageScene || "").trim();
              if (!o) {
                continue;
              }
              if (Math.random() > 0.3) {
                continue;
              }
              let a;
              let s = null;
              let i = null;
              try {
                const t = (e = n.author) == null ? undefined : e.rosterId;
                i = t ? Fe(W, t) : null;
                if ((i == null ? undefined : i.id) && r) {
                  const e = await f.get(r, i.id).catch(() => null);
                  s = (e == null ? undefined : e.imagePreset) || null;
                }
              } catch (I) {}
              try {
                const e = i && (i.imagePrompt || T(i.description)) || "";
                a = C({
                  rawImgDesc: o,
                  char: i,
                  charAppearance: e,
                  user: J,
                  sceneType: "forum",
                  apiSettings: t,
                  imagePreset: s
                });
              } catch (I) {
                a = {
                  prompt: o,
                  structured: null
                };
              }
              const l = await A(a.prompt, "forum", t, {
                structured: a.structured,
                imagePreset: s
              }).catch(() => null);
              if (l) {
                Q(e => e.map(e => e.id === n.id ? {
                  ...e,
                  images: [l]
                } : e));
              }
            }
          } catch (y) {}
        })();
      }
      if (K.postReplies && Y.length > 0) {
        try {
          Q(e => {
            const t = [...e];
            for (const n of K.postReplies) {
              const e = Y[n.postIndex];
              if (!e) {
                continue;
              }
              const r = t.findIndex(t => t.id === e.id);
              if (r === -1) {
                continue;
              }
              const o = (n.replies || []).filter(t => !!t.isAnon || !(wo(t.author, t.rosterId) ? (console.warn("[Forum] Dropped impersonation revive reply:", t.author, t.rosterId), 1) : t.rosterId && !xo(t.rosterId, e.boardId) && (console.warn("[Forum] Dropped out-of-group revive reply:", t.author, t.rosterId, "→ board:", e.boardId), 1)));
              const a = Ie(o.length, "min");
              const i = o.map((t, n) => {
                var r;
                const o = Le(t.author, (r = e.author) == null ? undefined : r.name);
                return {
                  author: t.isAnon ? s("forumAnonName") : ke(t.author, "NPC"),
                  content: ke(t.content, ""),
                  role: null,
                  isAnon: !!t.isAnon,
                  isAuthorUpdate: !!t.isAuthorUpdate,
                  avatar: null,
                  rosterId: t.rosterId || (o ? e.author.rosterId : null),
                  timestamp: a[n] || Date.now()
                };
              });
              t[r] = {
                ...t[r],
                comments: t[r].comments + i.length,
                views: t[r].views + Math.floor(Math.random() * 50) + 10,
                interactions: [...t[r].interactions, ...i]
              };
            }
            return t;
          });
        } catch (y) {
          console.warn("postReplies processing failed:", y);
        }
      }
      if (t === "new" && !e && B) {
        try {
          let e = at(P, L, M, X, s("forumAiContentLang"), ar.allowFanficSubjectReply !== false) + Co() + So();
          try {
            const t = q.find(e => e.id === "creator");
            if ((t == null ? undefined : t.jailbreakEnabled) && Array.isArray(t.jailbreakEntryIds) && t.jailbreakEntryIds.length > 0) {
              const n = we(zt, t.jailbreakEntryIds);
              if (n) {
                e += "\n\n" + n;
              }
            }
          } catch (y) {}
          const t = await w({
            messages: [{
              role: "system",
              content: "You are a JSON generator. Do not use Markdown JSON blocks. Output valid JSON only."
            }, {
              role: "user",
              content: e
            }],
            settings: await S(),
            preferStreaming: false,
            maxTokens: 65536
          });
          let n;
          try {
            n = Pe(t);
          } catch {}
          if (n == null ? undefined : n.posts) {
            const e = (Z.current || []).filter(e => {
              var t;
              return e.boardId === "creator" && ((t = e.fanficMeta) == null ? undefined : t.series);
            }).map(e => e.fanficMeta.series);
            const t = st(n.posts, e);
            const r = jo();
            const o = t.filter(e => {
              var t;
              if (e.isAnon || !e.rosterId || xo(e.rosterId, "creator")) {
                return !((t = e.fanficMeta) == null ? undefined : t.cpTag) || !!He(e.fanficMeta.cpTag, L, r) || !(console.warn("[Forum] Dropped fabricated-CP fanfic (all-boards mode):", e.fanficMeta.cpTag, "title:", e.title), 1);
              } else {
                console.warn("[Forum] Dropped out-of-group fanfic post:", e.authorName, e.rosterId);
                return false;
              }
            }).map((e, t) => {
              const n = q.find(e => e.id === "creator") || q[0];
              return {
                id: Date.now() + 100 + t,
                title: ke(e.title, ""),
                boardName: (n == null ? undefined : n.name) || "",
                boardId: "creator",
                author: e.isAnon ? {
                  name: s("forumAnonName"),
                  avatar: null,
                  mood: null,
                  role: null,
                  level: null,
                  isAnon: true
                } : {
                  name: ke(e.authorName, "NPC"),
                  avatar: null,
                  mood: ke(e.mood, null),
                  role: null,
                  level: Math.floor(Math.random() * 15) + 1,
                  rosterId: e.rosterId || null
                },
                timestamp: Date.now() - Math.floor(Math.random() * 7200000),
                content: ke(e.content, ""),
                image: null,
                ...(() => {
                  const e = vo("creator");
                  return {
                    likes: e.likes,
                    dislikes: e.dislikes,
                    views: e.views
                  };
                })(),
                comments: (e.interactions || []).length,
                isHot: Math.random() > 0.5,
                isPinned: !!e.isPinned,
                isAnon: !!e.isAnon,
                fanficMeta: e.fanficMeta || null,
                interactions: (e.interactions || []).filter(e => !!e.isAnon || !e.rosterId || !!xo(e.rosterId, "creator") || !(console.warn("[Forum] Dropped out-of-group fanfic interaction:", e.author, e.rosterId), 1)).map((e, t) => ({
                  author: e.isAnon ? s("forumAnonName") : ke(e.author, "NPC"),
                  content: ke(e.content, ""),
                  role: null,
                  isAnon: !!e.isAnon,
                  isAuthorUpdate: !!e.isAuthorUpdate,
                  avatar: null,
                  rosterId: e.rosterId || null,
                  time: [s("forumTimeJustNow"), "1m", "5m", "10m", "30m", "1h"][t] || s("forumTimeJustNow")
                }))
              };
            });
            await O(null, o, Z.current, {
              bestEffortSetPosts: Q,
              postsRef: Z,
              suppressNotify: true
            });
          }
        } catch (y) {
          console.warn("Fanfic generation failed, skipping:", y.message);
        }
      }
      try {
        const e = [...(k || [])].slice(0, 3).map(e => (e.title || e.content || "").slice(0, 30).replace(/[\[\]【】]/g, "") || null).filter(Boolean);
        if (e.length > 0) {
          or(t => [...e, ...t].slice(0, 5));
        }
      } catch {}
      try {
        if (Math.random() < 0.2 && k.length > 0) {
          const e = ((m = k[Math.floor(Math.random() * k.length)].author) == null ? undefined : m.name) || "NPC";
          const t = s("forumAiContentLang");
          const n = t === "zh-Hans" ? ["嗨～看到你在论坛上的发言了，想认识一下！", "你也关注这个板块吗？我们兴趣好像蛮合的", "刚刚看到你的回复，说得太好了吧", "Hi! 想问你一些关于帖子的事情～", "你好呀！我是新来的，可以交个朋友吗？", "路过你的主页，觉得你蛮有趣的"] : t === "en" ? ["Hey~ Saw your post on the forum, wanted to say hi!", "You follow this board too? We seem to have similar interests", "Just saw your reply, that was so well said", "Hi! Wanted to ask you about a post~", "Hello! I'm new here, wanna be friends?", "Passed by your profile, you seem pretty cool"] : ["嗨～看到你在論壇上的發言了，想認識一下！", "你也關注這個板塊嗎？我們興趣好像蠻合的", "剛剛看到你的回覆，說得太好了吧", "Hi! 想問你一些關於帖子的事情～", "你好呀！我是新來的，可以交個朋友嗎？", "路過你的主頁，覺得你蠻有趣的"];
          const r = {
            id: "msg_" + e,
            name: e,
            avatar: null,
            type: Ot(e) ? "friend" : "stranger",
            lastMsg: n[Math.floor(Math.random() * n.length)],
            timestamp: Date.now(),
            unread: 1
          };
          Yr(e => {
            const t = no(e, [r]);
            c.set(Zr, t).catch(() => {});
            return t;
          });
          Pt(t => t.includes(e) ? t : [...t, e]);
        }
      } catch {}
      F(b);
      if (r !== "forum-screen") {
        (async () => {
          try {
            const {
              showNativeNotification: e,
              getNotificationPermission: t
            } = await v(async () => {
              const {
                showNativeNotification: e,
                getNotificationPermission: t
              } = await import("./main-BO9xa-SQ.js").then(e => e.ci);
              return {
                showNativeNotification: e,
                getNotificationPermission: t
              };
            }, __vite__mapDeps([8, 9, 3, 1, 4, 5, 6, 7, 10, 11, 12, 13]));
            if ((await t()) !== "granted") {
              return;
            }
            const n = (k || []).length;
            await e({
              title: `論壇生成完成（${n} 條新帖）`,
              body: "點擊回到論壇查看",
              tag: "forum-gen-complete",
              icon: "/icon-192.png",
              data: {
                screen: "forum-screen"
              }
            });
          } catch (e) {
            console.warn("[Forum] notify failed:", e);
          }
        })();
      }
    } catch (y) {
      console.error("[Forum] Feed generation failed:", y);
      if ((e => {
        if (!e) {
          return false;
        }
        const t = String(e.message || e).toLowerCase();
        return /timeout|timed out|429|rate.?limit|too many|max.?tokens|context.?length|payload.?too|exceed/i.test(t);
      })(y)) {
        const e = lr();
        const t = e === "rich" ? "standard" : "lite";
        if (t !== e) {
          ir.current = t;
          nr(s("forumGenAutoDowngrade", {
            tier: s(`forumGenTier_${t}`)
          }) || `已自動切換為「${t}」省流模式`, 5000);
        } else {
          nr(Me(y, s), 5000);
        }
      } else {
        nr(Me(y, s), 5000);
      }
      F(b);
    } finally {
      jn(false);
    }
  };
  const Ko = () => {
    try {
      const e = typeof document != "undefined" ? document.activeElement : null;
      if (e && typeof e.blur == "function") {
        e.blur();
      }
    } catch (e) {}
    if (typeof window != "undefined") {
      requestAnimationFrame(() => {
        try {
          if (document.scrollingElement) {
            document.scrollingElement.scrollTop = 0;
          }
          window.scrollTo(0, 0);
        } catch (e) {}
        Un(false);
      });
    } else {
      Un(false);
    }
  };
  const Xo = () => {
    const e = wr.trim();
    if (!e) {
      return;
    }
    const t = _();
    z(n => [...n, {
      uid: t,
      name: e,
      avatar: "",
      gender: "",
      intro: "",
      hobbies: [],
      birthday: ""
    }]);
    H(t);
    jr(false);
    Sr("");
  };
  return E.jsxs("div", {
    id: "forum-app-screen",
    className: "screen forum-app-screen active nuo-forum-root",
    children: [E.jsx("div", {
      className: "nuo-forum-decor nuo-forum-decor-float-tl",
      "aria-hidden": "true"
    }), E.jsx("div", {
      className: "nuo-forum-decor nuo-forum-decor-float-tr",
      "aria-hidden": "true"
    }), E.jsx("div", {
      className: "nuo-forum-decor nuo-forum-decor-float-bl",
      "aria-hidden": "true"
    }), E.jsx("div", {
      className: "nuo-forum-decor nuo-forum-decor-float-br",
      "aria-hidden": "true"
    }), E.jsx("div", {
      className: "nuo-forum-decor nuo-forum-decor-float-center",
      "aria-hidden": "true"
    }), E.jsx("div", {
      className: "nuo-forum-decor nuo-forum-decor-watermark",
      "aria-hidden": "true"
    }), be !== "msg-detail" && E.jsx(jt, {
      currentView: be,
      activeTab: ye,
      viewedCharacter: xe,
      viewedBoard: $e,
      BOARDS: q,
      getBoardName: ue,
      showSearch: Xn,
      setShowSearch: Qn,
      setSearchQuery: Kn,
      showGenerateMenu: Tn,
      setShowGenerateMenu: Cn,
      isGeneratingFeed: Nn,
      setShowFanficAsk: Bn,
      handleGenerateFeed: qo,
      setPickedRosterIds: kn,
      setPickerBoardId: Pn,
      setPickerMode: Rn,
      setShowCharPickerModal: In,
      handleBack: Eo,
      goHome: o,
      t: s,
      customForumName: Or
    }), E.jsxs("div", {
      className: "forum-content",
      children: [be === "feed" && (() => {
        let e = (() => {
          let e = [...X];
          if (Bt === "hot") {
            e.sort((e, t) => {
              if (e.isPinned !== t.isPinned) {
                if (t.isPinned) {
                  return 1;
                } else {
                  return -1;
                }
              }
              const n = e.likes * 3 + e.comments * 5 + e.views * 0.5;
              return t.likes * 3 + t.comments * 5 + t.views * 0.5 - n;
            });
          } else if (Bt === "new") {
            e.sort((e, t) => t.id - e.id);
          } else if (Bt === "follow") {
            e = e.filter(e => {
              var t;
              return Et.includes((t = e.author) == null ? undefined : t.name);
            });
          }
          return e;
        })();
        if (qn.trim()) {
          const t = qn.trim().toLowerCase();
          e = e.filter(e => {
            var n;
            return (e.title || "").toLowerCase().includes(t) || (e.content || "").toLowerCase().includes(t) || (((n = e.author) == null ? undefined : n.name) || "").toLowerCase().includes(t);
          });
        }
        e = e.slice(0, 30);
        return E.jsxs("div", {
          className: "forum-view scrollable nuo-forum-feed",
          children: [E.jsx("div", {
            className: "nuo-forum-decor nuo-forum-decor-feed-top",
            "aria-hidden": "true"
          }), Xn && E.jsxs("div", {
            className: "forum-search-bar",
            children: [E.jsx(pe, {
              size: 16,
              className: "forum-search-icon"
            }), E.jsx("input", {
              type: "text",
              className: "forum-search-input",
              placeholder: s("forumSearchPlaceholder"),
              value: qn,
              onChange: e => Kn(e.target.value),
              autoFocus: true
            }), qn && E.jsx("button", {
              className: "forum-search-clear",
              onClick: () => Kn(""),
              children: "✕"
            })]
          }), E.jsxs("div", {
            className: "forum-events-banner",
            children: [E.jsx("div", {
              className: "event-tag",
              children: s("forumEventsTag")
            }), E.jsx("div", {
              className: "event-list-marquee",
              children: (rr.length > 0 ? rr : [Fr || s("forumEventWelcome")]).map((e, t) => E.jsx("span", {
                className: "event-item",
                children: ke(e, "")
              }, t))
            })]
          }), Tt.length > 0 && E.jsxs("div", {
            className: "quick-boards",
            children: [Tt.map(e => {
              const t = q.find(t => t.id === e);
              if (t) {
                return E.jsxs("button", {
                  className: "quick-board-chip",
                  onClick: () => Vo(t),
                  children: [t.icon, " ", ue(t)]
                }, e);
              } else {
                return null;
              }
            }), E.jsxs("button", {
              className: "quick-board-chip quick-board-more",
              onClick: () => Ao("boards"),
              children: [E.jsx(fe, {
                size: 12
              }), " ", s("forumMoreBoards")]
            })]
          }), E.jsxs("div", {
            className: "feed-tabs",
            children: [E.jsxs("button", {
              className: "feed-tab " + (Bt === "hot" ? "active" : ""),
              onClick: () => Lt("hot"),
              children: [E.jsx(le, {
                size: 13
              }), " ", s("forumSortHot")]
            }), E.jsxs("button", {
              className: "feed-tab " + (Bt === "new" ? "active" : ""),
              onClick: () => Lt("new"),
              children: [E.jsx(ce, {
                size: 13
              }), " ", s("forumSortNew")]
            }), E.jsx("button", {
              className: "feed-tab " + (Bt === "follow" ? "active" : ""),
              onClick: () => Lt("follow"),
              children: s("forumSortFollow")
            })]
          }), E.jsx("div", {
            className: "post-list",
            children: e.length > 0 ? e.map(e => Fo(e)) : E.jsxs("div", {
              className: "center-msg",
              style: {
                padding: "40px 20px",
                opacity: 0.5
              },
              children: [E.jsx(me, {}), E.jsx("p", {
                children: s(Bt === "follow" ? "forumFeedEmptyFollow" : "forumFeedEmptyGenerate")
              })]
            })
          }), E.jsx("div", {
            className: "nuo-forum-decor nuo-forum-decor-feed-bottom",
            "aria-hidden": "true"
          })]
        });
      })(), be === "boards" && E.jsx(ut, {
        BOARDS: q,
        joinedBoards: Tt,
        postsIndex: ne,
        searchQuery: qn,
        setSearchQuery: Kn,
        showSearch: Xn,
        getBoardName: ue,
        getBoardDesc: e => {
          const t = Ve[e == null ? undefined : e.id];
          if (t) {
            return s(t.descKey);
          } else {
            return ke(e == null ? undefined : e.desc, "");
          }
        },
        resolveBoardModAvatar: Wo,
        handleOpenBoard: Vo,
        pushView: Io,
        guardClick: mo,
        startLongPress: so,
        cancelLongPress: lo,
        t: s
      }), be === "board-detail" && E.jsx(ht, {
        viewedBoard: $e,
        postsIndex: ne,
        boardSort: Jn,
        setBoardSort: Vn,
        joinedBoards: Tt,
        setJoinedBoards: Ct,
        resolveBoardModAvatar: Wo,
        renderPost: Fo,
        t: s
      }), be === "board-create" && E.jsx(pt, {
        BOARDS: q,
        createBoardForm: Yt,
        setCreateBoardForm: Jt,
        worldBooks: zt,
        characters: W,
        boardCoverInputRef: fr,
        handleBoardCoverSelect: uo,
        handleRestoreDefaultBoard: e => {
          const t = Ve[e];
          if (!t) {
            return;
          }
          if (q.some(t => t.id === e)) {
            return;
          }
          const n = {
            id: e,
            name: s(t.nameKey),
            desc: s(t.descKey),
            icon: t.icon,
            posts: 0,
            members: 0
          };
          K(e => [...e, n]);
        },
        handleGenerateBoard: async () => {
          if (Yt.type !== "worldbook" || Yt.worldBookId) {
            if (Yt.type !== "manual" || Yt.name) {
              Wt(true);
              try {
                let n = "";
                if (Yt.type === "worldbook") {
                  const e = zt.find(e => String(e.id) === String(Yt.worldBookId));
                  const t = (e.entries || []).filter(e => e && e.content && !e.disable && e.enabled !== false && e.type !== "imagegen");
                  n = `世界書名稱: ${e.title}\n描述: ${e.description}\n詞條:\n${t.map(e => `${e.name}: ${e.content}`).join("\n")}`;
                } else {
                  n = `世界觀: ${Yt.rules}\n主要內容: ${Yt.content}`;
                }
                const r = s("forumAiContentLang");
                const o = r === "en" ? "English" : r === "zh-Hans" ? "Simplified Chinese (简体中文) — use 简体字 ONLY, never 繁體字" : "Traditional Chinese (繁體中文)";
                const a = Yt.postLengthMin || 80;
                const i = Yt.postLengthMax || 250;
                const l = Yt.userRole ? `\n\nIMPORTANT — USER'S ROLE IN THIS WORLD:\nThe forum owner/user plays the role of: "${Yt.userRole}". NPCs should be aware of and may reference this person in their discussions (as fans, followers, colleagues, etc., depending on the role). This helps establish the user's presence in the community.` : "";
                const c = Yt.type === "manual";
                let d = `Based on the world/setting below, generate 1 forum board and 3 NPC posts that fit the world.\nNPCs must have setting-appropriate names and roles. Posts should feel like real community members discussing life in this world.\nEach post needs 8-15 replies from other NPCs with distinct voices. Vary reply count — some posts are hot (12-15 replies), others moderate (8-10).\nIMPORTANT: ALL generated content MUST be written in ${o}.\n\nALL NPCs should use screen names / handles, not their real names or titles.\nPOST LENGTH: Each post body should be ${a}-${i} characters. ${i >= 400 ? "This is a LONG-FORM board — write detailed, immersive posts with rich descriptions, dialogue, and narrative depth." : i >= 200 ? "Write moderately detailed posts." : "Keep posts concise."}\n${c ? `\n\n## ⛓ MANUAL BOARD INPUT — DO NOT REWRITE\nThe user has manually provided this board's name, description, and personality below. You MUST:\n- Use the EXACT board name given (do not rename, translate, paraphrase, or shorten)\n- Use the EXACT description text given (do not summarize, rewrite, or "polish")\n- Use the EXACT personality/main content text given (do not condense or rephrase)\nYour only job is to: (1) pick an emoji icon, (2) invent a moderator screen name, (3) generate 3 in-character NPC posts. The board.name / board.desc / board.boardPersonality fields in your JSON output will be IGNORED — you can copy them verbatim or leave them as the user's text, but DO NOT attempt to improve them.\n\nUSER-PROVIDED BOARD:\n- Name: ${Yt.name}\n- Description (世界觀): ${Yt.rules}\n- Personality / Main content (主要內容): ${Yt.content}\n` : ""}\n## boardPersonality FIELD — full board charter, NOT a short summary\nThis field is the COMPLETE board charter that gets re-injected every time the board generates new posts/replies. It must be DETAILED and SELF-CONTAINED — a future generator should be able to read JUST this field (without re-reading the full world setting) and produce in-world content correctly. Treat it like a wiki page for this board, NOT a one-line tagline.\n\n⚠️ LENGTH: Write as much as needed to be useful — typically 300-800 characters, do NOT compress into "2-3 sentences" or "3-5 sentences". The user expects depth comparable to a hand-written board description. Brevity here breaks the world feel later.\n\nStructure it as TWO paragraphs (mirroring how a user would manually fill 世界觀 + 主要內容):\n\n**Paragraph 1 — 世界觀 (World context):** Lay out the world this board exists inside. Pull CONCRETE proper nouns, factions, locations, technology/magic systems, social hierarchies, ongoing conflicts directly from the setting above. Name names. Anchor the reader so they know exactly what world this is. NOT generic ("a fantasy world") — specific ("修真界由五大宗門主導，渡劫期長老把持宗門政治，散修需向宗門繳納靈石才能進入秘境...").\n\n**Paragraph 2 — 主要內容 (Board purpose + posting culture):** What this specific board IS within that world (its in-world analogue: sect bulletin / interstellar federation news feed / cyberpunk underground BBS / 修仙界靈訊網 / etc.). What residents post about, what topics dominate, what's taboo IN THIS WORLD (not generic taboo). What slang, honorifics, address forms regulars use — drawn FROM the setting (e.g., 道友/前輩/師兄 for cultivation, ご主人様/様 for certain settings, captain/commander for military sci-fi). Give a few concrete EXAMPLES of typical post topics on this board.\n\n⚠️ DO NOT default to modern-internet-forum tropes (Reddit/微博 slang, "lol/+1/笑死") unless the setting explicitly IS a modern-internet world. Match the setting's register exactly — a cultivation board uses 道友/前輩/閉關, a regency board uses formal address, a cyberpunk board uses tech slang from the setting's own lore.\n\nReturn PURE JSON (no markdown):\n{\n  "board": {\n    "id": "board_id_snake_case",\n    "name": "Board name",\n    "desc": "Board description (1-2 lines — what this board is, in-world)",\n    "icon": "emoji",\n    "mod": "Moderator screen name",\n    "boardPersonality": "Two detailed paragraphs (300-800 chars total) following the structure above: 世界觀 paragraph → 主要內容 paragraph. Do NOT shorten."\n  },\n  "posts": [\n    {\n      "title": "Post title",\n      "authorName": "NPC screen name",\n      "authorRole": "NPC role (e.g. swordsman, merchant)",\n      "content": "Post content (${a}-${i} chars, in-character voice)",\n      "interactions": [\n        { "author": "Replier screen name", "content": "Reply (15-60 chars)", "role": "NPC role" }\n      ]\n    }\n  ]\n}\n\nWorld/Setting:\n${n}${l}${So()}`;
                if (Yt.jailbreakEnabled && Array.isArray(Yt.jailbreakEntryIds) && Yt.jailbreakEntryIds.length > 0) {
                  try {
                    const e = we(zt, Yt.jailbreakEntryIds);
                    if (e) {
                      d += "\n\n" + e;
                    }
                  } catch (e) {}
                }
                const m = await w({
                  messages: [{
                    role: "system",
                    content: "You are a JSON generator. Do not use Markdown JSON blocks. Output valid JSON only."
                  }, {
                    role: "user",
                    content: d
                  }],
                  settings: await S()
                });
                let u;
                try {
                  u = Pe(m);
                } catch (t) {
                  console.error("Failed to parse board generation", t, "\nResponse:", typeof m == "string" ? m.slice(0, 500) : m);
                  throw t;
                }
                if (!(u == null ? undefined : u.board) || !(u == null ? undefined : u.posts)) {
                  throw new Error(s("forumErrorMissingFields"));
                }
                const h = c ? ke(Yt.name, "") : "";
                const p = c ? ke(Yt.rules, "") : "";
                const f = c ? ke(Yt.content, "") : "";
                const g = {
                  ...u.board,
                  id: u.board.id || "board_" + Date.now(),
                  name: c && h ? h : ke(u.board.name, ""),
                  desc: c && p ? p : ke(u.board.desc, ""),
                  icon: ke(u.board.icon, "📋"),
                  mod: u.board.mod != null ? ke(u.board.mod, null) : null,
                  posts: (u.posts || []).length,
                  members: Math.floor(Math.random() * 5000) + 100,
                  worldBookId: Yt.type === "worldbook" ? Yt.worldBookId : null,
                  customContext: c ? n : n.slice(0, 2000),
                  boardPersonality: c && f ? f : ke(u.board.boardPersonality, ""),
                  postLengthMin: Yt.postLengthMin || 80,
                  postLengthMax: Yt.postLengthMax || 250,
                  userRole: Yt.userRole || "",
                  allowedGroups: Yt.allowedGroups || [],
                  coverImage: Yt.coverImage || "",
                  isUserMod: !!Yt.isUserMod,
                  jailbreakEnabled: !!Yt.jailbreakEnabled,
                  jailbreakEntryIds: Array.isArray(Yt.jailbreakEntryIds) ? Yt.jailbreakEntryIds : []
                };
                if (Yt.isUserMod) {
                  g.mod = Uo || s("forumDefaultUsername");
                  g.modRosterId = null;
                  g.modPersonality = "outgoing";
                  g.userModId = ie;
                }
                const b = (u.posts || []).filter(e => !wo(e.authorName, e.rosterId) || (console.warn("[Forum] Dropped impersonation board init post:", e.authorName), false));
                const y = Date.now();
                const v = b.map((e, t) => ({
                  id: y + t,
                  title: ke(e.title, ""),
                  boardName: g.name,
                  boardId: g.id,
                  author: {
                    name: ke(e.authorName, "NPC"),
                    avatar: Ho(ke(e.authorName, "npc" + t)),
                    mood: null,
                    role: e.authorRole || null,
                    level: Math.floor(Math.random() * 20) + 1
                  },
                  timestamp: y - t * 1000,
                  content: ke(e.content, ""),
                  image: null,
                  ...(() => {
                    const e = vo(g.id);
                    return {
                      likes: e.likes,
                      dislikes: 0,
                      views: e.views
                    };
                  })(),
                  comments: (e.interactions || []).length,
                  isHot: false,
                  isPinned: !!e.isPinned,
                  interactions: (e.interactions || []).filter(e => !wo(e.author, e.rosterId)).map(e => ({
                    author: ke(e.author, "NPC"),
                    content: ke(e.content, ""),
                    role: e.role || null
                  }))
                }));
                K([g, ...q]);
                Q([...v, ...X]);
                Re(g);
                Io("board-detail");
              } catch (e) {
                console.error("[Forum] Board generation failed:", e);
                nr(Me(e, s), 5000);
              } finally {
                Wt(false);
              }
            } else {
              alert(s("forumAlertEnterBoardName"));
            }
          } else {
            alert(s("forumAlertSelectWorldBook"));
          }
        },
        isGeneratingBoard: Gt,
        renderJailbreakPicker: Gn,
        t: s,
        tOr: i
      }), be === "post-create" && E.jsx(vt, {
        BOARDS: q,
        createPostForm: Vt,
        setCreatePostForm: qt,
        getBoardName: ue,
        handlePublishPost: () => {
          if (!Vt.boardId) {
            alert(s("forumAlertSelectBoard"));
            return;
          }
          if (!Vt.title.trim()) {
            alert(s("forumAlertEnterTitle"));
            return;
          }
          if (!Vt.content.trim()) {
            alert(s("forumAlertEnterContent"));
            return;
          }
          const e = q.find(e => String(e.id) === String(Vt.boardId));
          const t = {
            id: Date.now(),
            title: Vt.title,
            boardName: e ? e.name : "",
            boardId: Vt.boardId,
            author: Vt.isAnon ? {
              name: s("forumAnonTraveler"),
              avatar: null,
              mood: null,
              role: null,
              level: null,
              isAnon: true
            } : {
              name: Uo,
              avatar: null,
              mood: null,
              role: null,
              level: 1
            },
            timestamp: Date.now(),
            content: Vt.content,
            image: null,
            images: Array.isArray(Vt.images) ? Vt.images.slice(0, 4) : [],
            likes: 0,
            dislikes: 0,
            comments: 0,
            views: 0,
            isHot: false,
            isPinned: false,
            isAnon: Vt.isAnon,
            isUserPost: true,
            interactions: []
          };
          const n = [t, ...X];
          Q(n);
          qt({
            boardId: "",
            title: "",
            content: "",
            isAnon: false,
            images: []
          });
          Be(t);
          Io("post-detail");
          setTimeout(() => Lo(t.id), 1500);
        },
        setShowPostImageTypeSelector: Zt,
        t: s
      }), be === "profile" && E.jsx(ft, {
        viewedCharacter: xe,
        characters: W,
        followedUsers: Et,
        setFollowedUsers: kt,
        userFollowers: $t,
        setUserFollowers: Pt,
        isMutualFollow: Ot,
        postsIndex: ne,
        getProfileStats: No,
        getRosterScreenNames: fo,
        resolveCharImage: ao,
        getRoleBadge: Ro,
        getLevelBadge: Oo,
        handleOpenMessage: $o,
        renderPost: Fo,
        t: s
      }), be === "messages" && E.jsx(xt, {
        postsIndex: ne,
        forumDmMessages: _r,
        forumDmInbox: Wr,
        setForumDmInbox: Yr,
        dmInboxKey: Zr,
        characters: W,
        resolveCharImage: ao,
        getNpcAvatar: Ho,
        isMutualFollow: Ot,
        msgTab: Dt,
        setMsgTab: Ft,
        handleOpenMessage: $o,
        setViewedPost: Be,
        pushView: Io,
        guardClick: mo,
        startLongPress: so,
        cancelLongPress: lo,
        t: s
      }), be === "msg-detail" && E.jsx(dt, {
        viewedMsg: it,
        forumDmMessages: _r,
        forumDmInput: Jr,
        setForumDmInput: Vr,
        forumDmLoading: qr,
        forumDmScrollRef: Xr,
        userDisplayAvatar: zo,
        getForumDmCharInfo: Po,
        handleBack: Eo,
        handleOpenProfile: ko,
        handleForumDmSendMsg: Mo,
        handleForumDmAIReply: async () => {
          if (!it || qr) {
            return;
          }
          Kr(true);
          const e = it.id;
          const {
            rosterChar: t,
            charName: n
          } = Po();
          const r = Jr.trim();
          if (r) {
            Mo();
          }
          const o = U;
          const a = X.filter(e => {
            var t;
            return ((t = e.author) == null ? undefined : t.name) === n;
          }).slice(0, 5).map(e => `- 「${e.title}」(${e.boardName || e.boardId}): ${(e.content || "").slice(0, 100)}`).join("\n");
          const i = X.filter(e => {
            var t;
            return Le((t = e.author) == null ? undefined : t.name, Uo);
          }).slice(0, 5).map(e => `- 「${e.title}」(${e.boardName || e.boardId}): ${(e.content || "").slice(0, 80)}`).join("\n");
          const l = X.filter(e => (e.interactions || []).some(e => Le(e.author, Uo) && !e.isAnon)).slice(0, 5).map(e => {
            const t = (e.interactions || []).find(e => Le(e.author, Uo));
            return `- In 「${e.title}」: "${((t == null ? undefined : t.content) || "").slice(0, 60)}"`;
          }).join("\n");
          const d = X.filter(e => {
            var t;
            const r = [(t = e.author) == null ? undefined : t.name, ...(e.interactions || []).map(e => e.author)];
            return r.some(e => Le(e, n)) && r.some(e => Le(e, Uo));
          }).slice(0, 3).map(e => {
            const t = (e.interactions || []).find(e => Le(e.author, n));
            const r = (e.interactions || []).find(e => Le(e.author, Uo));
            return `- 「${e.title}」: ${n} said "${((t == null ? undefined : t.content) || e.content || "").slice(0, 60)}", ${Uo} said "${((r == null ? undefined : r.content) || "").slice(0, 60)}"`;
          }).join("\n");
          const m = [...X].sort((e, t) => t.likes * 3 + t.comments * 5 - (e.likes * 3 + e.comments * 5)).slice(0, 3).map(e => {
            var t;
            return `- 「${e.title}」by ${(t = e.author) == null ? undefined : t.name} (${e.boardName || e.boardId}, ${e.likes} likes, ${e.comments} replies)`;
          }).join("\n");
          const u = [...(_r[e] || [])];
          if (r) {
            u.push({
              id: "pending",
              text: r,
              sender: "me",
              timestamp: Date.now()
            });
          }
          const h = (o == null ? undefined : o.name) || "";
          let p = "";
          let g = "";
          if (t && o) {
            try {
              const e = o.uid || o.id;
              const n = await Promise.race([f.get(String(e), String(t.id)), new Promise((e, t) => setTimeout(() => t(new Error("ChatSettings timeout")), 5000))]);
              if (n) {
                const e = n.charToUserRelationship || n.relationship;
                if (e) {
                  g = e;
                }
              }
            } catch (O) {
              console.warn("[ForumDM] ChatSettings fetch failed:", O.message);
            }
          }
          let b = "";
          if (t && o) {
            try {
              const e = String(o.uid || o.id);
              const r = await Promise.race([B({
                userId: e,
                charId: String(t.id),
                currentApp: "forum",
                names: {
                  userName: h || "User",
                  charName: t.name || n
                },
                recentMessages: u.filter(e => !(e == null ? undefined : e.hiddenByUser)).slice(-10).map(e => ({
                  text: e.text || "",
                  sender: e.sender
                }))
              }), new Promise((e, t) => setTimeout(() => t(new Error("memory timeout")), 5000))]);
              const a = [r == null ? undefined : r.usBlock, r == null ? undefined : r.whoBlock, r == null ? undefined : r.oursBlock, r == null ? undefined : r.nowBlock].filter(Boolean);
              try {
                const r = await Promise.race([N.getLastMessages(e, String(t.id), 15), new Promise((e, t) => setTimeout(() => t(new Error("MessageService timeout")), 3000))]);
                if (r && r.length > 0) {
                  const e = r.filter(e => !(e == null ? undefined : e.hiddenByUser)).slice(-15).map(e => `${e.sender === "me" ? h || "User" : t.name || n}: ${(e.text || "").slice(0, 120)}`).join("\n");
                  a.push(`[RECENT PRIVATE CHAT — outside the forum]\n${e}`);
                }
              } catch (O) {
                console.warn("[ForumDM] MessageService fetch failed:", O.message);
              }
              if (a.length > 0) {
                b = `\n\n--- MEMORY: you and ${h} share these experiences ---\n${a.join("\n\n")}\n\nReference these naturally — past private chats, in-person moments, group banter, dates, even your own forum/朋友圈 activity. Mix personal familiarity WITH forum topics; don't abandon the DM forum frame.`;
              }
            } catch (O) {
              console.warn("[ForumDM] buildMemoryForPrompt failed:", (O == null ? undefined : O.message) || O);
            }
          }
          const y = Uo || "用戶";
          if (t && h) {
            const e = h === Uo;
            p = `\n[IDENTITY — you already know this person]\nThe forum user "${y}" is in fact ${h}, someone you already know.${g ? ` Your relationship: ${g}.` : ""}${(o == null ? undefined : o.intro) ? ` About them: ${o.intro}` : ""}\n${e ? "They use their real name on the forum." : `They go by the screen name "${y}" on this forum, but you recognize them as ${h} — no guessing game, you simply know.`}\nYou may freely mix forum context with your real-life knowledge of them. Reference shared memories, past conversations, their personality. The conversation is still happening on a forum DM, so keep some forum-flavoured framing, but speak as someone who knows them.${b}`;
          }
          const v = [];
          let j = [];
          for (const s of u.slice(-30)) {
            if (s.sender === "me") {
              j.push(s.text);
            } else if (s.sender === "them") {
              if (j.length > 0) {
                v.push({
                  role: "user",
                  content: j.join("\n")
                });
                j = [];
              }
              v.push({
                role: "assistant",
                content: s.text
              });
            }
          }
          if (j.length > 0) {
            v.push({
              role: "user",
              content: j.join("\n")
            });
          }
          const T = s("forumAiContentLang") || "zh-Hant";
          const C = T === "en" ? "English" : T === "zh-Hans" ? "Simplified Chinese (简体中文)" : T === "ja" ? "Japanese" : "Traditional Chinese (繁體中文)";
          const A = (t == null ? undefined : t.name) || n;
          const I = n;
          const E = it.type === "friend";
          const k = t ? Ye(t, {
            worldBooks: zt
          }) : "";
          const $ = [];
          if (t == null ? undefined : t.gender) {
            $.push(`Gender: ${t.gender}`);
          }
          if (t == null ? undefined : t.role) {
            $.push(`Role/Occupation: ${t.role}`);
          }
          if (t == null ? undefined : t.birthday) {
            $.push(`Birthday: ${t.birthday}`);
          }
          const P = $.length > 0 ? $.join(". ") + "." : "";
          const M = `${t ? `You are a forum user with screen name "${I}". Your real identity is ${A}.\n${P}\nFull persona:\n${k}\n\nYour DM messages MUST reflect this persona — your word choice, interests, opinions, humor style, knowledge domain, and the way you express yourself should all be consistent with who you are. A doctor discusses health authoritatively, a student talks about campus life, a noble speaks formally, etc.` : `You are "${n}", a forum user.`}\n\n[SETTING] This is the DM (私信) feature of an online forum — like Reddit chat, NGA私信, or Bilibili私信. You and "${y}" only know each other through this forum. ${E ? "You mutually follow each other." : `"${y}" is a ${v.length > 0 ? "recent contact" : "stranger messaging you for the first time"}.`}\n\n[YOUR FORUM ACTIVITY]\n${a ? `Posts you've made:\n${a}` : "You browse the forum but haven't posted recently."}\n\n[${y}'s FORUM ACTIVITY]\n${i ? `Posts they've made:\n${i}` : "No posts yet."}\n${l ? `Their recent comments:\n${l}` : ""}\n\n${d ? `[THREADS WHERE YOU BOTH APPEARED]\n${d}` : ""}\n\n[FORUM TRENDING]\n${m}\n${p}\n\n[RULES]\n- You are a FORUM USER chatting through the forum's DM system. This is NOT a personal chat app — you two know each other from posts and comments on the forum.\n- Your conversation topics should REVOLVE AROUND THE FORUM: discuss posts you've seen, react to each other's posts/comments, share opinions on trending threads, gossip about other forum users, recommend boards, complain about forum drama, etc.\n- You may reference specific posts, threads, or forum users by screen name. Talk about what's happening on the forum.\n- Your tone is that of an internet acquaintance — friendly but with the distance of online interaction. ${E ? "You follow each other, so you can be warmer, but still forum-flavored." : "You're not close — be casual but not overly familiar."}\n${h ? `- You KNOW "${y}" is actually "${h}". You can be more personal now, mix forum topics with inside jokes or real-life references. But you're still on a forum DM — don't completely abandon the forum context.` : h && h !== (Uo || "") ? `- If you start suspecting "${y}" might be someone you know IRL, you can probe subtly ("your vibe feels familiar...", "have we met somewhere?"). Don't jump to conclusions too fast — let it unfold naturally over 2-3 exchanges.` : ""}\n- Stay in character as ${I}. Your personality and speech patterns must match your persona.\n- Respond in ${C}.\n- Do NOT break character. Do NOT mention being an AI.\n- You may reply with MULTIPLE short messages (one per line). Each line = one chat bubble:\n  e.g.\n  ${T === "en" ? "Did you see that post in the daily board?\nThe comments are insane lol\nSomeone actually agreed with OP" : T === "zh-Hans" ? "你看到日常板那个帖子了吗\n评论区也太离谱了吧哈哈\n居然有人同意楼主" : "你看到日常板那個帖子了嗎\n留言區也太離譜了吧哈哈\n居然有人同意樓主"}\n- Keep each line short and natural (1-2 sentences max per line). Use 1-4 lines total.\n- Output ONLY the message lines, nothing else. No JSON, no tags.`;
          let R = false;
          try {
            let r = "";
            const o = await S();
            const a = await w({
              messages: [{
                role: "system",
                content: M
              }, ...v],
              settings: o,
              preferStreaming: true,
              onStream: e => {
                r += e;
              },
              onComplete: e => {
                r = e || r;
              },
              onError: e => {
                console.error("[ForumDM] AI error:", e);
              }
            });
            if (!r && typeof a == "string") {
              r = a;
            }
            if (!r && a && typeof a == "object") {
              r = a.content || a.text || "";
            }
            const i = e => {
              let t = e;
              const r = n || "";
              const o = A || "";
              if (r && (t.startsWith(r + ":") || t.startsWith(r + "："))) {
                t = t.slice(r.length + 1).trim();
              } else if (o && (t.startsWith(o + ":") || t.startsWith(o + "："))) {
                t = t.slice(o.length + 1).trim();
              }
              t = t.replace(/\*\*(.+?)\*\*/g, "$1");
              t = t.replace(new RegExp("(?<!\\*)\\*(?!\\*)(.+?)(?<!\\*)\\*(?!\\*)", "g"), "$1");
              t = t.replace(/`(.+?)`/g, "$1");
              t = t.replace(/^[-•]\s+/, "");
              t = t.replace(/^["「](.+)["」]$/, "$1");
              return t.trim();
            };
            const l = r.trim().split(/\n+/).map(e => i(e)).filter(e => e.length > 0);
            if (l.length === 0) {
              console.warn("[ForumDM] AI returned empty response");
              const t = {
                id: "dm_err_" + Date.now(),
                text: `⚠ ${s("forumErrorGenerateFailed", {
                  msg: "Empty response"
                })}`,
                sender: "system",
                timestamp: Date.now()
              };
              Gr(n => ({
                ...n,
                [e]: [...(n[e] || []), t]
              }));
              Kr(false);
              return;
            }
            try {
              const e = l.join("\n");
              if (/(?:關注|关注|加關注|加关注)\s*(?:你|妳|您)|follow(?:ed|ing)?\s+(?:you|u|ya|you back|u back)/i.test(e)) {
                const e = it.name;
                if (e) {
                  Pt(t => t.includes(e) ? t : [...t, e]);
                }
              }
            } catch {}
            const d = Date.now();
            const m = () => {
              setTimeout(() => {
                if (Xr.current) {
                  Xr.current.scrollTop = Xr.current.scrollHeight;
                }
              }, 30);
            };
            const u = e => "dm_" + d + "_ai_" + e;
            const h = ie;
            const p = Qr;
            const f = n => {
              if (eo.current !== h) {
                Kr(false);
                return;
              }
              const r = n < l.length - 1;
              Gr(t => {
                const o = (t[e] || []).filter(e => e.sender !== "typing");
                const a = {
                  id: u(n),
                  text: l[n],
                  sender: "them",
                  timestamp: d + n * 1000
                };
                const s = r ? [...o, a, {
                  id: u(n + 1),
                  text: "",
                  sender: "typing",
                  timestamp: d + (n + 1) * 1000 - 1
                }] : [...o, a];
                const i = {
                  ...t,
                  [e]: s
                };
                if (!r) {
                  c.set(p, i).catch(() => {});
                }
                return i;
              });
              m();
              if (r) {
                const e = 800 + Math.random() * 1000;
                const t = l[n + 1].length;
                const r = Math.min(t * 60, 3000) + 800 + Math.random() * 600;
                setTimeout(() => f(n + 1), e + r);
              } else {
                Kr(false);
                try {
                  if (t && U) {
                    const n = String((U == null ? undefined : U.uid) || (U == null ? undefined : U.id) || "");
                    const r = String(t.id);
                    if (n && (to.current[e] = (to.current[e] || 0) + 1, to.current[e] >= 4)) {
                      to.current[e] = 0;
                      const a = [...(_r[e] || []).filter(e => e.sender === "me" || e.sender === "them"), ...l.map(e => ({
                        sender: "them",
                        text: e
                      }))].slice(-8);
                      const s = a.filter(e => e.sender === "me").map(e => String(e.text || "").trim()).filter(Boolean);
                      const i = a.filter(e => e.sender === "them").map(e => String(e.text || "").trim()).filter(Boolean);
                      if (s.length > 0 && i.length > 0) {
                        const e = s.sort((e, t) => t.length - e.length)[0].slice(0, 40).replace(/\n/g, " ");
                        const l = i.sort((e, t) => t.length - e.length)[0].slice(0, 40).replace(/\n/g, " ");
                        const c = (U == null ? undefined : U.name) || Uo || "User";
                        const d = `論壇私信和${c}聊：「${e}」，我回：「${l}」`;
                        x.appendHistory(n, r, {
                          id: Date.now() + Math.floor(Math.random() * 1000),
                          source: "forum",
                          forumScope: "dm",
                          userAnonOnPost: false,
                          summary: d,
                          content: d,
                          keywords: ["論壇", "私信", c].filter(Boolean),
                          importance: 2,
                          emotion: "neutral",
                          topics: ["日常"],
                          date: new Date().toISOString().slice(0, 10)
                        }).then(() => console.log(`[ForumDM→Memory] 寫入 1 條私信記憶 (char: ${t.name})`)).catch(e => console.warn("[ForumDM→Memory] 寫入失敗:", e));
                        try {
                          const e = a.map(e => {
                            const n = e.sender === "me" ? "user" : e.sender === "them" ? "assistant" : null;
                            if (!n) {
                              return null;
                            }
                            const r = String(e.text || "").trim();
                            if (r) {
                              return {
                                role: n,
                                content: r.slice(0, 4000),
                                timestamp: Number.isFinite(e.timestamp) ? e.timestamp : null,
                                senderName: n === "user" ? c : t.name
                              };
                            } else {
                              return null;
                            }
                          }).filter(Boolean);
                          if (e.length > 0) {
                            D({
                              userId: n,
                              characterId: r,
                              source: "forum",
                              messages: e
                            }).catch(() => {});
                          }
                        } catch (o) {}
                      }
                    }
                  }
                } catch (O) {
                  console.warn("[ForumDM→Memory] 寫入觸發失敗:", O);
                }
              }
            };
            if (l.length > 0) {
              f(0);
              if (l.length > 1) {
                R = true;
              }
            }
          } catch (F) {
            console.error("[ForumDM] Failed:", F);
            const t = {
              id: "dm_err_" + Date.now(),
              text: `⚠ ${s("forumErrorGenerateFailed", {
                msg: F.message || "Unknown error"
              })}`,
              sender: "system",
              timestamp: Date.now()
            };
            Gr(n => {
              const r = n[e] || [];
              return {
                ...n,
                [e]: [...r, t]
              };
            });
          } finally {
            if (!R) {
              Kr(false);
            }
          }
        },
        t: s
      }), be === "me" && E.jsx(Nt, {
        userDisplayName: Uo,
        userDisplayAvatar: zo,
        activePersona: J,
        profileUsers: $,
        currentProfileUser: U,
        setCurrentProfileUserId: H,
        forumProfile: ar,
        getProfileStats: No,
        postsIndex: ne,
        DUMMY_POSTS: X,
        meTab: Ut,
        setMeTab: Ht,
        renderPost: Fo,
        getRoleBadge: Ro,
        pushView: Io,
        setShowNewAccountModal: jr,
        showClearAllConfirm: Ar,
        setShowClearAllConfirm: Ir,
        isClearingAll: Er,
        handleClearAllForumData: async () => {
          if (!Er) {
            kr(true);
            try {
              if (po.current) {
                clearTimeout(po.current);
                po.current = null;
              }
              await c.clear().catch(() => {});
              try {
                const e = String((J == null ? undefined : J.uid) || (J == null ? undefined : J.id) || "");
                if (e) {
                  const t = await x.removeAllForumEntries(e);
                  if (t > 0) {
                    console.log(`[Forum→Memory] 一鍵清空：清掉 ${t} 條論壇記憶`);
                  }
                }
              } catch (e) {
                console.warn("[Forum→Memory] 一鍵清空記憶失敗:", e);
              }
              ["forum_boards", "forum_posts", "forum_hotRankings", "forum_viewHistory", "forum_activeTab", "forum_viewedCharacter", "forum_viewedBoard", "forum_viewedBoard_id", "forum_viewedPost", "forum_viewedPost_id", "forum_viewedMsg", "forum_userVotes", "forum_events"].forEach(e => {
                try {
                  sessionStorage.removeItem(e);
                } catch {}
              });
              Q(Ke);
              K(V);
              se({});
              Ct(["chat", "daily"]);
              kt([]);
              Pt([]);
              Gr({});
              Yr([]);
              Yn({});
              Be(null);
              Re(null);
              Ee(null);
              lt(null);
              ge(["feed"]);
              ve("feed");
              sr({
                nickname: "",
                bio: "",
                avatar: "",
                bgImage: "",
                allowFanficSubjectReply: true,
                customAvatarPool: [],
                genTier: "standard"
              });
              Ir(false);
              nr(s("forumClearAllDataDone"));
            } catch (e) {
              console.error("[Forum] 一鍵清空失敗:", e);
            } finally {
              kr(false);
            }
          }
        },
        t: s
      }), be === "post-detail" && E.jsx(ct, {
        viewedPost: De,
        DUMMY_POSTS: X,
        commentSort: vn,
        setCommentSort: xn,
        isGeneratingReplies: wn,
        replyTarget: bn,
        setReplyTarget: yn,
        commentInput: hn,
        setCommentInput: pn,
        commentAnon: fn,
        setCommentAnon: gn,
        renderPost: Fo,
        handleAIAutoReply: Lo,
        handleSubmitComment: () => {
          if (!hn.trim() && en.length === 0 || !De) {
            return;
          }
          const e = {
            author: fn ? s("forumAnonName") : Uo,
            avatar: null,
            content: hn.trim(),
            images: en.slice(0, 1),
            role: null,
            isAnon: fn,
            replyTo: bn ? {
              floor: bn.floor,
              author: bn.author
            } : null,
            isUserPost: true,
            timestamp: Date.now()
          };
          const t = De.id;
          go(t, t => ({
            ...t,
            comments: t.comments + 1,
            interactions: [...t.interactions, e]
          }));
          Be(n => n && n.id === t ? {
            ...n,
            comments: n.comments + 1,
            interactions: [...n.interactions, e]
          } : n);
          pn("");
          tn([]);
          yn(null);
          setTimeout(() => Lo(t), 1500);
        },
        handleReplyToFloor: (e, t) => {
          const n = e.isAnon ? s("forumAnonName") : e.author;
          yn({
            floor: t + 1,
            author: n
          });
          pn(`@${n} `);
          setTimeout(() => {
            const e = document.querySelector(".comment-input-bar input");
            if (e) {
              e.focus();
            }
          }, 100);
        },
        handleOpenProfile: ko,
        getRoleBadge: Ro,
        startLongPress: so,
        cancelLongPress: lo,
        getNpcAvatar: Ho,
        resolveAvatar: _o,
        t: s,
        commentImages: en,
        setCommentImages: tn,
        onOpenCommentImagePicker: () => {
          un();
          an(true);
        },
        allStickers: cn
      }), be === "profile-edit" && E.jsx(gt, {
        forumProfile: ar,
        setForumProfile: sr,
        activePersona: J,
        profileUsers: $,
        fileInputRef: yr,
        handleProfileFileChange: e => {
          var t;
          const n = (t = e.target.files) == null ? undefined : t[0];
          if (!n) {
            return;
          }
          const r = new FileReader();
          r.onload = () => {
            const e = r.result;
            if (vr === "avatar") {
              sr(t => ({
                ...t,
                avatar: e
              }));
            } else if (vr === "bg") {
              sr(t => ({
                ...t,
                bgImage: e
              }));
            }
          };
          r.readAsDataURL(n);
          e.target.value = "";
        },
        handleProfileImagePick: e => {
          var t;
          xr(e);
          if ((t = yr.current) != null) {
            t.click();
          }
        },
        handleSaveProfile: () => {
          c.set(`profile_${ie}`, ar).catch(() => {});
          Eo();
        },
        handleDeleteAccount: async () => {
          if (!($.length <= 1)) {
            try {
              await c.remove(`profile_${ie}`);
              await G(ie);
              Cr(false);
              Eo();
            } catch (e) {
              console.error("[Forum] 刪除帳號失敗:", e);
            }
          }
        },
        commentAnon: fn,
        setCommentAnon: gn,
        setShowForumApiSettings: Pr,
        showDeleteAccountConfirm: Tr,
        setShowDeleteAccountConfirm: Cr,
        sessionTierOverrideRef: ir,
        t: s
      }), be === "following-list" && E.jsx(bt, {
        followedUsers: Et,
        setFollowedUsers: kt,
        postsIndex: ne,
        characters: W,
        resolveCharImage: ao,
        getNpcAvatar: Ho,
        getRoleBadge: Ro,
        t: s
      }), be === "follower-list" && E.jsx(yt, {
        followedUsers: Et,
        setFollowedUsers: kt,
        userFollowers: $t,
        setUserFollowers: Pt,
        activePersona: J,
        DUMMY_POSTS: X,
        postsIndex: ne,
        characters: W,
        resolveCharImage: ao,
        getNpcAvatar: Ho,
        getRoleBadge: Ro,
        t: s
      })]
    }), be !== "msg-detail" && E.jsx(wt, {
      activeTab: ye,
      handleNav: Ao,
      pushView: Io,
      forumDmInbox: Wr,
      setForumDmInbox: Yr,
      dmInboxKey: Zr,
      onLongPressHome: () => Rr(true),
      t: s
    }), $r && E.jsx(Ce, {
      onClose: () => Pr(false)
    }), Mr && E.jsx(I.Suspense, {
      fallback: null,
      children: E.jsx(St, {
        onClose: () => Rr(false)
      })
    }), E.jsx(b, {
      isOpen: Kt,
      onClose: () => Xt(false),
      onImageSelect: e => {
        if (e) {
          qt(t => ({
            ...t,
            images: [...(t.images || []), e].slice(0, 4)
          }));
        }
      },
      title: s("forumPostCreateAddImage")
    }), Qt && E.jsxs(E.Fragment, {
      children: [E.jsx("div", {
        onClick: () => Zt(false),
        style: {
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          zIndex: 400
        }
      }), E.jsxs("div", {
        style: {
          position: "fixed",
          bottom: 0,
          left: 10,
          right: 10,
          paddingBottom: "calc(20px + var(--nuo-safe-bottom, 0px))",
          zIndex: 401,
          animation: "slideUp 0.3s ease-out"
        },
        children: [E.jsxs("div", {
          style: {
            background: "white",
            borderRadius: 14,
            overflow: "hidden",
            marginBottom: 8
          },
          children: [E.jsx("button", {
            onClick: () => {
              Zt(false);
              Xt(true);
            },
            style: {
              width: "100%",
              padding: 16,
              background: "none",
              border: "none",
              borderBottom: "1px solid #f0f0f0",
              fontSize: 17,
              fontWeight: 500,
              color: "#007aff",
              cursor: "pointer"
            },
            children: s("forumUploadFromGallery")
          }), E.jsx("button", {
            onClick: async () => {
              Zt(false);
              const e = await y(s("forumEnterImgDesc"));
              if (e) {
                qt(t => ({
                  ...t,
                  images: [...(t.images || []), `txt:${e}`].slice(0, 4)
                }));
              }
            },
            style: {
              width: "100%",
              padding: 16,
              background: "none",
              border: "none",
              fontSize: 17,
              fontWeight: 500,
              color: "#007aff",
              cursor: "pointer"
            },
            children: s("forumAiDescImg")
          })]
        }), E.jsx("button", {
          onClick: () => Zt(false),
          style: {
            width: "100%",
            padding: 16,
            background: "white",
            border: "none",
            borderRadius: 14,
            fontSize: 17,
            fontWeight: 600,
            color: "#ff3b30",
            cursor: "pointer"
          },
          children: s("forumCancel") || "取消"
        })]
      })]
    }), E.jsx(b, {
      isOpen: nn,
      onClose: () => rn(false),
      onImageSelect: e => {
        if (e) {
          tn([e]);
        }
      },
      title: s("forumPostCreateAddImage")
    }), on && E.jsxs(E.Fragment, {
      children: [E.jsx("div", {
        onClick: () => an(false),
        style: {
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          zIndex: 400
        }
      }), E.jsxs("div", {
        style: {
          position: "fixed",
          bottom: 0,
          left: 10,
          right: 10,
          paddingBottom: "calc(20px + var(--nuo-safe-bottom, 0px))",
          zIndex: 401,
          animation: "slideUp 0.3s ease-out"
        },
        children: [E.jsxs("div", {
          style: {
            background: "white",
            borderRadius: 14,
            overflow: "hidden",
            marginBottom: 8
          },
          children: [E.jsx("button", {
            onClick: () => {
              an(false);
              rn(true);
            },
            style: {
              width: "100%",
              padding: 16,
              background: "none",
              border: "none",
              borderBottom: "1px solid #f0f0f0",
              fontSize: 17,
              fontWeight: 500,
              color: "#007aff",
              cursor: "pointer"
            },
            children: s("forumUploadFromGallery")
          }), E.jsx("button", {
            onClick: async () => {
              an(false);
              const e = await y(s("forumEnterImgDesc"));
              if (e) {
                tn([`txt:${e}`]);
              }
            },
            style: {
              width: "100%",
              padding: 16,
              background: "none",
              border: "none",
              borderBottom: cn.length > 0 ? "1px solid #f0f0f0" : "none",
              fontSize: 17,
              fontWeight: 500,
              color: "#007aff",
              cursor: "pointer"
            },
            children: s("forumAiDescImg")
          }), cn.length > 0 && E.jsx("button", {
            onClick: () => {
              an(false);
              ln(true);
            },
            style: {
              width: "100%",
              padding: 16,
              background: "none",
              border: "none",
              fontSize: 17,
              fontWeight: 500,
              color: "#007aff",
              cursor: "pointer"
            },
            children: s("forumStickerPick")
          })]
        }), E.jsx("button", {
          onClick: () => an(false),
          style: {
            width: "100%",
            padding: 16,
            background: "white",
            border: "none",
            borderRadius: 14,
            fontSize: 17,
            fontWeight: 600,
            color: "#ff3b30",
            cursor: "pointer"
          },
          children: s("forumCancel") || "取消"
        })]
      })]
    }), sn && E.jsx("div", {
      onClick: () => ln(false),
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 400,
        display: "flex",
        alignItems: "flex-end"
      },
      children: E.jsx("div", {
        onClick: e => e.stopPropagation(),
        style: {
          width: "100%",
          background: "white",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          maxHeight: "60vh",
          overflowY: "auto",
          padding: 12
        },
        children: E.jsx("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 8
          },
          children: cn.slice(0, 80).map((e, t) => E.jsx("div", {
            onClick: () => {
              tn([e.url]);
              ln(false);
            },
            style: {
              aspectRatio: "1",
              cursor: "pointer",
              borderRadius: 8,
              overflow: "hidden",
              background: "#f5f5f5"
            },
            children: E.jsx("img", {
              decoding: "async",
              src: e.url,
              alt: e.meaning,
              style: {
                width: "100%",
                height: "100%",
                objectFit: "contain"
              }
            })
          }, t))
        })
      })
    }), Zn && E.jsx("div", {
      className: "forum-toast",
      onClick: () => er(""),
      children: Zn
    }), Lr && E.jsx("div", {
      className: "fanfic-modal-overlay",
      onClick: () => {
        Ur(false);
        zr(null);
      },
      children: E.jsxs("div", {
        className: "fanfic-custom-panel",
        onClick: e => e.stopPropagation(),
        style: {
          maxHeight: "60vh"
        },
        children: [E.jsxs("div", {
          className: "fanfic-custom-header",
          children: [E.jsx("span", {
            children: s("forumShareTitle")
          }), E.jsx("button", {
            className: "forum-icon-btn",
            onClick: () => {
              Ur(false);
              zr(null);
            },
            children: "✕"
          })]
        }), E.jsxs("div", {
          className: "fanfic-custom-body",
          children: [Hr && E.jsx("div", {
            style: {
              padding: "8px 0",
              fontSize: "0.8rem",
              color: "#888",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
              marginBottom: 8
            },
            children: (e = Hr.title) == null ? undefined : e.slice(0, 40)
          }), W.length > 0 ? W.map(e => {
            var t;
            return E.jsxs("div", {
              className: "forum-share-char-item",
              onClick: () => (e => {
                var t;
                var n;
                if (!Hr || !e) {
                  return;
                }
                const r = Hr;
                const o = ue(q.find(e => e.id === r.boardId)) || r.boardName || "";
                const s = ((t = r.author) == null ? undefined : t.name) || "";
                const i = !!r.isAnon || !!((n = r.author) == null ? undefined : n.isAnon);
                const l = r.isUserPost === true || !i && !!s && Le(s, Uo);
                const c = !l && !i && !!s && Le(s, e == null ? undefined : e.name);
                const d = {
                  forumShareData: {
                    title: r.title || "",
                    preview: (r.content || "").slice(0, 150) + ((r.content || "").length > 150 ? "..." : ""),
                    boardTag: o,
                    author: s,
                    stats: `❤️${r.likes || 0}  💬${r.comments || 0}`,
                    postId: r.id,
                    isOwnPost: l,
                    isAnon: i,
                    isAuthoredByChar: c
                  }
                };
                sessionStorage.setItem("forum_shared_msg", JSON.stringify(d));
                Ur(false);
                zr(null);
                window.dispatchEvent(new CustomEvent("open-chat-request", {
                  detail: {
                    charId: e.id,
                    userId: ie
                  }
                }));
                a("chat-list-screen");
              })(e),
              children: [e.image ? E.jsx("img", {
                decoding: "async",
                src: e.image,
                alt: e.name,
                style: {
                  ...P(e),
                  width: 36,
                  height: 36,
                  borderRadius: "50%"
                }
              }) : E.jsx("div", {
                style: {
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "#eee",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.85rem"
                },
                children: (t = e.name) == null ? undefined : t[0]
              }), E.jsxs("div", {
                style: {
                  flex: 1
                },
                children: [E.jsx("div", {
                  style: {
                    fontSize: "0.9rem",
                    fontWeight: 600
                  },
                  children: ke(e.name, "")
                }), e.role && typeof e.role == "string" && E.jsx("div", {
                  style: {
                    fontSize: "0.75rem",
                    color: "#999"
                  },
                  children: e.role
                })]
              })]
            }, e.id);
          }) : E.jsx("div", {
            className: "center-msg",
            style: {
              padding: 20,
              opacity: 0.5
            },
            children: E.jsx("p", {
              children: s("forumShareNoChars")
            })
          })]
        })]
      })
    }), Nr && E.jsx("div", {
      className: "fanfic-modal-overlay",
      onClick: () => jr(false),
      children: E.jsxs("div", {
        className: "fanfic-ask-dialog",
        onClick: e => e.stopPropagation(),
        children: [E.jsx("div", {
          className: "fanfic-ask-title",
          children: s("forumNewAccountTitle")
        }), E.jsx("div", {
          className: "fanfic-field",
          style: {
            marginTop: 12
          },
          children: E.jsx("input", {
            type: "text",
            value: wr,
            onChange: e => Sr(e.target.value),
            placeholder: s("forumNewAccountPlaceholder"),
            style: {
              width: "100%",
              padding: "8px 10px",
              border: "1px solid #ddd",
              borderRadius: 10,
              fontSize: "0.85rem",
              boxSizing: "border-box"
            },
            autoFocus: true,
            onKeyDown: e => {
              if (e.key === "Enter" && wr.trim()) {
                Xo();
              }
            }
          })
        }), E.jsxs("div", {
          className: "fanfic-ask-buttons",
          style: {
            marginTop: 16
          },
          children: [E.jsx("button", {
            className: "fanfic-btn-secondary",
            onClick: () => {
              jr(false);
              Sr("");
            },
            children: s("forumFanficCustomNo")
          }), E.jsx("button", {
            className: "fanfic-btn-primary",
            disabled: !wr.trim(),
            onClick: Xo,
            children: s("forumNewAccountCreate")
          })]
        })]
      })
    }), cr && E.jsx("div", {
      className: "fanfic-modal-overlay",
      onClick: () => dr(null),
      children: E.jsxs("div", {
        className: "fanfic-ask-dialog",
        onClick: e => e.stopPropagation(),
        children: [E.jsx("div", {
          className: "fanfic-ask-title",
          children: cr.type === "board" ? s("forumBoardActions") : cr.type === "dm" ? s("forumDeleteDm") : cr.type === "post" ? s("forumDeletePost") : s("forumDeleteFloor")
        }), E.jsx("div", {
          className: "fanfic-ask-text",
          children: cr.type === "board" ? qe.includes(cr.boardId) ? s("forumDeleteDefaultBoardConfirm", {
            name: cr.boardName || ""
          }) : s("forumBoardActionsDesc", {
            name: cr.boardName || ""
          }) : cr.type === "dm" ? s("forumDeleteDmConfirm", {
            name: cr.dmName || ""
          }) : s("forumDeleteConfirm")
        }), E.jsxs("div", {
          className: "fanfic-ask-buttons",
          style: {
            flexDirection: cr.type === "board" && !qe.includes(cr.boardId) || cr.type === "post" ? "column" : "row",
            gap: 8
          },
          children: [cr.type === "board" && !qe.includes(cr.boardId) && E.jsx("button", {
            className: "fanfic-btn-primary",
            onClick: () => {
              const e = q.find(e => e.id === cr.boardId);
              if (e) {
                ur({
                  ...e
                });
              }
              dr(null);
            },
            children: s("forumBoardEdit")
          }), cr.type === "post" && (() => {
            const e = ne.byId.get(String(cr.postId));
            const t = q.find(t => t.id === (e == null ? undefined : e.boardId));
            const n = de(t);
            return E.jsxs(E.Fragment, {
              children: [E.jsx("button", {
                className: "fanfic-btn-primary",
                onClick: () => {
                  const t = !(e == null ? undefined : e.isPinned);
                  go(cr.postId, e => ({
                    ...e,
                    isPinned: t
                  }));
                  Q(e => {
                    c.set("posts", e).catch(() => {});
                    return e;
                  });
                  if ((De == null ? undefined : De.id) === cr.postId) {
                    Be(e => e ? {
                      ...e,
                      isPinned: t
                    } : e);
                  }
                  nr(s(t ? "forumPostPinnedToast" : "forumPostUnpinnedToast"));
                  dr(null);
                },
                children: (e == null ? undefined : e.isPinned) ? s("forumPostUnpin") : s("forumPostPin")
              }), n && E.jsx("button", {
                className: "fanfic-btn-primary",
                style: {
                  background: (e == null ? undefined : e.isLocked) ? "#4caf50" : "#ff9800"
                },
                onClick: () => {
                  const t = !(e == null ? undefined : e.isLocked);
                  go(cr.postId, e => ({
                    ...e,
                    isLocked: t
                  }));
                  Q(e => {
                    c.set("posts", e).catch(() => {});
                    return e;
                  });
                  if ((De == null ? undefined : De.id) === cr.postId) {
                    Be(e => e ? {
                      ...e,
                      isLocked: t
                    } : e);
                  }
                  nr(s(t ? "forumPostLockedToast" : "forumPostUnlockedToast"));
                  dr(null);
                },
                children: (e == null ? undefined : e.isLocked) ? s("forumPostUnlock") : s("forumPostLock")
              })]
            });
          })(), E.jsx("button", {
            className: "fanfic-btn-primary",
            style: {
              background: "#e74c6f"
            },
            onClick: () => {
              if (cr.type === "dm") {
                e = cr.dmId;
                Gr(t => {
                  const n = {
                    ...t
                  };
                  delete n[e];
                  c.set(Qr, n).catch(() => {});
                  return n;
                });
                Yr(t => {
                  const n = t.filter(t => t.id !== e);
                  c.set(Zr, n).catch(() => {});
                  return n;
                });
                dr(null);
              } else {
                if (cr.type !== "floor") {
                  pr({
                    ...cr
                  });
                  dr(null);
                  return;
                }
                ((e, t) => {
                  var n;
                  let r = null;
                  try {
                    const o = Z.current.find(t => t.id === e) || ((De == null ? undefined : De.id) === e ? De : null);
                    const a = (n = o == null ? undefined : o.interactions) == null ? undefined : n[t];
                    if (a && !a.isAnon && a.rosterId) {
                      const e = Fe(W, a.rosterId);
                      if (e && (o.interactions || []).filter((e, n) => n !== t && !e.isAnon && Le(e.rosterId, a.rosterId)).length === 0) {
                        r = String(e.id);
                      }
                    }
                  } catch {}
                  go(e, e => {
                    const n = e.interactions.filter((e, n) => n !== t);
                    return {
                      ...e,
                      interactions: n,
                      comments: n.length
                    };
                  });
                  Q(e => {
                    c.set("posts", e).catch(() => {});
                    return e;
                  });
                  Be(n => {
                    if (!n || n.id !== e) {
                      return n;
                    }
                    const r = n.interactions.filter((e, n) => n !== t);
                    return {
                      ...n,
                      interactions: r,
                      comments: r.length
                    };
                  });
                  dr(null);
                  if (r) {
                    try {
                      const t = String((J == null ? undefined : J.uid) || (J == null ? undefined : J.id) || "");
                      if (t) {
                        x.removeForumEntriesByPostIdAndChar(t, r, e).then(t => {
                          if (t > 0) {
                            console.log(`[Forum→Memory] 刪樓：清掉 char ${r} 在帖 ${e} 的 ${t} 條記憶`);
                          }
                        }).catch(e => console.warn("[Forum→Memory] 刪樓清理失敗:", e));
                      }
                    } catch (o) {
                      console.warn("[Forum→Memory] 刪樓清理觸發失敗:", o);
                    }
                  }
                })(cr.postId, cr.floorIdx);
              }
              var e;
            },
            children: cr.type === "board" ? s("forumDeleteBoard") : cr.type === "dm" ? s("forumDeleteDm") : cr.type === "post" ? s("forumDeletePost") : s("forumDeleteFloor")
          }), E.jsx("button", {
            className: "fanfic-btn-secondary",
            onClick: () => dr(null),
            children: s("forumCancel")
          })]
        })]
      })
    }), hr && E.jsx("div", {
      className: "fanfic-modal-overlay",
      onClick: () => pr(null),
      children: E.jsxs("div", {
        className: "fanfic-ask-dialog",
        onClick: e => e.stopPropagation(),
        children: [E.jsx("div", {
          className: "fanfic-ask-title",
          children: hr.type === "board" ? s("forumDeleteBoard") : s("forumDeletePost")
        }), E.jsx("div", {
          className: "fanfic-ask-text",
          children: hr.type === "board" ? qe.includes(hr.boardId) ? s("forumDeleteDefaultBoardConfirm", {
            name: hr.boardName || ""
          }) : s("forumDeleteBoardConfirm", {
            name: hr.boardName || ""
          }) : s("forumDeleteConfirm")
        }), E.jsxs("div", {
          className: "fanfic-ask-buttons",
          children: [E.jsx("button", {
            className: "fanfic-btn-secondary",
            onClick: () => pr(null),
            children: s("forumCancel")
          }), E.jsx("button", {
            className: "fanfic-btn-primary",
            style: {
              background: "#e74c6f"
            },
            onClick: () => {
              if (hr.type === "board") {
                (e => {
                  K(t => {
                    const n = t.filter(t => t.id !== e);
                    c.set("boards", n).catch(() => {});
                    return n;
                  });
                  const t = Z.current.filter(t => t.boardId === e).map(e => e.id);
                  Q(t => {
                    const n = t.filter(t => t.boardId !== e);
                    c.set("posts", n).catch(() => {});
                    return n;
                  });
                  dr(null);
                  if (t.length > 0) {
                    try {
                      const e = String((J == null ? undefined : J.uid) || (J == null ? undefined : J.id) || "");
                      if (e) {
                        x.removeForumEntriesByPostIds(e, t).then(e => {
                          if (e > 0) {
                            console.log(`[Forum→Memory] 刪板塊：清掉 ${e} 條記憶`);
                          }
                        }).catch(e => console.warn("[Forum→Memory] 刪板塊清理失敗:", e));
                      }
                    } catch (n) {
                      console.warn("[Forum→Memory] 刪板塊清理觸發失敗:", n);
                    }
                  }
                })(hr.boardId);
              } else if (hr.type === "post") {
                (e => {
                  Q(t => {
                    const n = t.filter(t => t.id !== e);
                    c.set("posts", n).catch(() => {});
                    return n;
                  });
                  if ((De == null ? undefined : De.id) === e) {
                    Be(null);
                    Eo();
                  }
                  dr(null);
                  try {
                    const t = String((J == null ? undefined : J.uid) || (J == null ? undefined : J.id) || "");
                    if (t) {
                      x.removeForumEntriesByPostIds(t, [e]).then(t => {
                        if (t > 0) {
                          console.log(`[Forum→Memory] 刪帖 ${e}：清掉 ${t} 條記憶`);
                        }
                      }).catch(e => console.warn("[Forum→Memory] 刪帖清理失敗:", e));
                    }
                  } catch (t) {
                    console.warn("[Forum→Memory] 刪帖清理觸發失敗:", t);
                  }
                })(hr.postId);
              }
              pr(null);
            },
            children: hr.type === "board" ? s("forumDeleteBoard") : s("forumDeletePost")
          })]
        })]
      })
    }), mr && E.jsx("div", {
      className: "fanfic-modal-overlay",
      onClick: () => ur(null),
      children: E.jsxs("div", {
        className: "fanfic-custom-panel",
        onClick: e => e.stopPropagation(),
        style: {
          maxHeight: "85vh"
        },
        children: [E.jsxs("div", {
          className: "fanfic-custom-header",
          children: [E.jsx("span", {
            children: s("forumBoardEditTitle")
          }), E.jsx("button", {
            className: "forum-icon-btn",
            onClick: () => ur(null),
            children: "✕"
          })]
        }), E.jsxs("div", {
          className: "fanfic-custom-body",
          style: {
            overflowY: "auto",
            maxHeight: "70vh"
          },
          children: [E.jsxs("div", {
            className: "board-form-group",
            children: [E.jsx("label", {
              children: s("forumBoardFormCoverLabel")
            }), E.jsx("div", {
              className: "board-cover-upload",
              onClick: () => {
                const e = document.createElement("input");
                e.type = "file";
                e.accept = "image/*";
                e.onchange = e => uo(e, "edit");
                e.click();
              },
              children: mr.coverImage ? E.jsx("img", {
                decoding: "async",
                src: mr.coverImage,
                alt: "cover",
                className: "board-cover-preview"
              }) : E.jsxs("div", {
                className: "board-cover-placeholder",
                children: [E.jsx(fe, {
                  size: 24
                }), E.jsx("span", {
                  children: s("forumBoardFormCoverPlaceholder")
                })]
              })
            })]
          }), E.jsxs("div", {
            className: "board-form-group",
            children: [E.jsx("label", {
              children: s("forumBoardFormNameLabel")
            }), E.jsx("input", {
              type: "text",
              className: "board-input",
              value: mr.name || "",
              onChange: e => ur(t => ({
                ...t,
                name: e.target.value
              }))
            })]
          }), E.jsxs("div", {
            className: "board-form-group",
            children: [E.jsx("label", {
              children: s("forumBoardFormWorldviewLabel")
            }), E.jsx("textarea", {
              className: "board-textarea",
              style: {
                minHeight: 100
              },
              value: mr.desc || "",
              onChange: e => ur(t => ({
                ...t,
                desc: e.target.value
              }))
            })]
          }), E.jsxs("div", {
            className: "board-form-group",
            children: [E.jsx("label", {
              children: s("forumBoardFormContentLabel")
            }), E.jsx("textarea", {
              className: "board-textarea",
              style: {
                minHeight: 160
              },
              value: mr.boardPersonality || "",
              onChange: e => ur(t => ({
                ...t,
                boardPersonality: e.target.value
              }))
            })]
          }), E.jsxs("div", {
            className: "board-form-group",
            children: [E.jsx("label", {
              children: s("forumBoardEditIconLabel")
            }), E.jsx("input", {
              type: "text",
              className: "board-input",
              style: {
                width: 80
              },
              value: mr.icon || "",
              onChange: e => ur(t => ({
                ...t,
                icon: e.target.value
              }))
            })]
          }), E.jsxs("div", {
            className: "board-form-group",
            children: [E.jsx("label", {
              children: s("forumBoardEditModLabel")
            }), E.jsxs("div", {
              className: "board-mod-toggle",
              onClick: () => {
                const e = mr.isUserMod;
                ur(t => ({
                  ...t,
                  isUserMod: !e,
                  mod: e ? t._originalMod || t.mod : Uo || s("forumDefaultUsername"),
                  userModId: e ? null : ie,
                  _originalMod: e ? undefined : t.mod
                }));
              },
              children: [E.jsx("div", {
                className: "board-mod-switch " + (mr.isUserMod ? "active" : ""),
                children: E.jsx("div", {
                  className: "board-mod-switch-thumb"
                })
              }), E.jsx("span", {
                children: s("forumBoardEditModDesc")
              })]
            })]
          }), E.jsxs("div", {
            className: "board-form-group",
            children: [E.jsx("label", {
              children: s("forumBoardFormPostLengthLabel")
            }), E.jsxs("div", {
              className: "board-length-range",
              children: [E.jsx("input", {
                type: "number",
                className: "board-input board-input-small",
                value: mr.postLengthMin || 80,
                onChange: e => ur(t => ({
                  ...t,
                  postLengthMin: Math.max(30, parseInt(e.target.value) || 80)
                })),
                min: 30,
                max: 2000
              }), E.jsx("span", {
                className: "board-length-separator",
                children: "~"
              }), E.jsx("input", {
                type: "number",
                className: "board-input board-input-small",
                value: mr.postLengthMax || 250,
                onChange: e => ur(t => ({
                  ...t,
                  postLengthMax: Math.max(50, parseInt(e.target.value) || 250)
                })),
                min: 50,
                max: 3000
              }), E.jsx("span", {
                className: "board-length-unit",
                children: s("forumBoardFormPostLengthUnit")
              })]
            })]
          }), E.jsxs("div", {
            className: "board-form-group",
            children: [E.jsx("label", {
              children: s("forumBoardFormUserRoleLabel")
            }), E.jsx("input", {
              type: "text",
              className: "board-input",
              value: mr.userRole || "",
              onChange: e => ur(t => ({
                ...t,
                userRole: e.target.value
              })),
              placeholder: s("forumBoardFormUserRolePlaceholder")
            })]
          }), (() => {
            const e = W.filter(e => e.type !== "npc");
            const t = [...new Set(e.map(e => e.group || "Default"))];
            if (t.length <= 1) {
              return null;
            }
            const n = mr.allowedGroups || [];
            return E.jsxs("div", {
              className: "board-form-group",
              children: [E.jsx("label", {
                children: s("forumBoardFormGroupLabel")
              }), E.jsx("div", {
                className: "board-group-chips",
                children: t.map(t => E.jsxs("button", {
                  className: `board-group-chip ${n.includes(t) ? "active" : ""} ${n.length === 0 ? "all-mode" : ""}`,
                  onClick: () => (e => {
                    const t = n.includes(e) ? n.filter(t => t !== e) : [...n, e];
                    ur(e => ({
                      ...e,
                      allowedGroups: t
                    }));
                  })(t),
                  children: [t, " (", e.filter(e => (e.group || "Default") === t).length, ")"]
                }, t))
              }), E.jsx("span", {
                className: "board-group-hint",
                children: n.length === 0 ? s("forumBoardFormGroupHintAll") : s("forumBoardFormGroupHintSelected", {
                  count: n.length
                })
              })]
            });
          })(), E.jsxs("div", {
            className: "board-form-group",
            children: [E.jsx("label", {
              children: s("forumBoardEditJailbreakLabel")
            }), E.jsxs("div", {
              className: "board-mod-toggle",
              onClick: () => {
                ur(e => ({
                  ...e,
                  jailbreakEnabled: !e.jailbreakEnabled
                }));
              },
              children: [E.jsx("div", {
                className: "board-mod-switch " + (mr.jailbreakEnabled ? "active" : ""),
                children: E.jsx("div", {
                  className: "board-mod-switch-thumb"
                })
              }), E.jsx("span", {
                children: s("forumBoardEditJailbreakDesc")
              })]
            }), mr.jailbreakEnabled && E.jsxs("div", {
              className: "forum-jb-picker-wrap",
              children: [E.jsx("div", {
                className: "forum-jb-picker-hint",
                children: i("forumJailbreakSelectHint", "勾選要注入到本板生成的核心設定條目")
              }), Gn(mr.jailbreakEntryIds, e => {
                ur(t => {
                  const n = Array.isArray(t.jailbreakEntryIds) ? t.jailbreakEntryIds : [];
                  const r = n.some(t => String(t) === String(e));
                  return {
                    ...t,
                    jailbreakEntryIds: r ? n.filter(t => String(t) !== String(e)) : [...n, e]
                  };
                });
              })]
            })]
          })]
        }), E.jsxs("div", {
          className: "fanfic-ask-buttons",
          style: {
            padding: "12px 16px",
            borderTop: "1px solid rgba(0,0,0,0.06)"
          },
          children: [E.jsx("button", {
            className: "fanfic-btn-secondary",
            onClick: () => ur(null),
            children: s("forumCancel")
          }), E.jsx("button", {
            className: "fanfic-btn-primary",
            onClick: () => {
              if (mr) {
                K(e => {
                  const t = e.map(e => e.id === mr.id ? {
                    ...e,
                    ...mr
                  } : e);
                  c.set("boards", t).catch(() => {});
                  return t;
                });
                nr(s("forumBoardEditSaved"));
                ur(null);
              }
            },
            children: s("forumBoardEditSave")
          })]
        })]
      })
    }), An && E.jsx("div", {
      className: "fanfic-modal-overlay",
      onClick: () => In(false),
      children: E.jsxs("div", {
        className: "fanfic-custom-panel",
        onClick: e => e.stopPropagation(),
        style: {
          maxHeight: "80vh",
          display: "flex",
          flexDirection: "column"
        },
        children: [E.jsxs("div", {
          className: "fanfic-custom-header",
          children: [E.jsxs("span", {
            children: ["🎭 ", s("forumPickCharsTitle") || "指定角色發貼"]
          }), E.jsx("button", {
            className: "forum-icon-btn",
            onClick: () => In(false),
            children: "✕"
          })]
        }), E.jsxs("div", {
          className: "fanfic-custom-body",
          style: {
            flex: 1,
            overflowY: "auto"
          },
          children: [E.jsxs("div", {
            style: {
              marginBottom: 14
            },
            children: [E.jsx("label", {
              style: {
                display: "block",
                fontSize: 13,
                fontWeight: 600,
                marginBottom: 6,
                color: "var(--ios-text-secondary)"
              },
              children: s("forumPickCharsBoard") || "發到哪個板塊"
            }), E.jsxs("div", {
              style: {
                display: "flex",
                flexWrap: "wrap",
                gap: 6
              },
              children: [E.jsx("button", {
                onClick: () => Pn(null),
                style: {
                  padding: "6px 12px",
                  borderRadius: 14,
                  border: "1px solid var(--ios-border)",
                  background: $n === null ? "var(--ios-blue)" : "transparent",
                  color: $n === null ? "#fff" : "inherit",
                  cursor: "pointer",
                  fontSize: 12
                },
                children: s("forumGenerateRandom") || "隨機"
              }), q.filter(e => e.id !== "creator").map(e => E.jsxs("button", {
                onClick: () => Pn(e.id),
                style: {
                  padding: "6px 12px",
                  borderRadius: 14,
                  border: "1px solid var(--ios-border)",
                  background: $n === e.id ? "var(--ios-blue)" : "transparent",
                  color: $n === e.id ? "#fff" : "inherit",
                  cursor: "pointer",
                  fontSize: 12
                },
                children: [e.icon, " ", ue(e)]
              }, e.id))]
            })]
          }), E.jsxs("div", {
            style: {
              marginBottom: 14
            },
            children: [E.jsx("label", {
              style: {
                display: "block",
                fontSize: 13,
                fontWeight: 600,
                marginBottom: 6,
                color: "var(--ios-text-secondary)"
              },
              children: s("forumPickCharsMode") || "生成模式"
            }), E.jsxs("div", {
              style: {
                display: "flex",
                gap: 6
              },
              children: [E.jsx("button", {
                onClick: () => Rn("new"),
                style: {
                  flex: 1,
                  padding: "8px",
                  borderRadius: 8,
                  border: "1px solid var(--ios-border)",
                  background: Mn === "new" ? "var(--ios-blue)" : "transparent",
                  color: Mn === "new" ? "#fff" : "inherit",
                  cursor: "pointer",
                  fontSize: 13
                },
                children: s("forumPickCharsModeNew") || "🆕 發新貼"
              }), E.jsx("button", {
                onClick: () => Rn("revive"),
                style: {
                  flex: 1,
                  padding: "8px",
                  borderRadius: 8,
                  border: "1px solid var(--ios-border)",
                  background: Mn === "revive" ? "var(--ios-blue)" : "transparent",
                  color: Mn === "revive" ? "#fff" : "inherit",
                  cursor: "pointer",
                  fontSize: 13
                },
                children: s("forumPickCharsModeRevive") || "♻️ 續寫舊帖"
              })]
            })]
          }), Mn === "new" && E.jsxs("div", {
            style: {
              marginBottom: 14
            },
            children: [E.jsxs("label", {
              style: {
                display: "block",
                fontSize: 13,
                fontWeight: 600,
                marginBottom: 6,
                color: "var(--ios-text-secondary)"
              },
              children: [s("forumPickCharsCount") || "帖子數量", E.jsx("span", {
                style: {
                  marginLeft: 8,
                  fontSize: 11,
                  fontWeight: 400,
                  color: "var(--ios-text-tertiary)"
                },
                children: On === 0 ? s("forumPickCharsCountAuto") || "自動（依預設）" : `${On} ${s("forumPickCharsCountUnit") || "篇"}`
              })]
            }), E.jsx("div", {
              style: {
                display: "flex",
                flexWrap: "wrap",
                gap: 6
              },
              children: [0, 1, 2, 3, 5, 8, 12].map(e => E.jsx("button", {
                onClick: () => Dn(e),
                style: {
                  padding: "6px 12px",
                  borderRadius: 14,
                  border: "1px solid var(--ios-border)",
                  background: On === e ? "var(--ios-blue)" : "transparent",
                  color: On === e ? "#fff" : "inherit",
                  cursor: "pointer",
                  fontSize: 12
                },
                children: e === 0 ? s("forumPickCharsCountAutoBtn") || "自動" : e
              }, e))
            })]
          }), E.jsxs("div", {
            children: [E.jsxs("label", {
              style: {
                display: "block",
                fontSize: 13,
                fontWeight: 600,
                marginBottom: 6,
                color: "var(--ios-text-secondary)"
              },
              children: [s("forumPickCharsList") || "誰來發貼", E.jsxs("span", {
                style: {
                  marginLeft: 8,
                  fontSize: 11,
                  fontWeight: 400,
                  color: "var(--ios-text-tertiary)"
                },
                children: ["(", En.length, " ", s("forumPickCharsSelected") || "已選", ")"]
              })]
            }), E.jsx("div", {
              style: {
                display: "flex",
                flexWrap: "wrap",
                gap: 6
              },
              children: (() => {
                const e = yo(W, $n);
                if (e.length === 0) {
                  return E.jsx("div", {
                    style: {
                      color: "var(--ios-text-tertiary)",
                      fontSize: 12
                    },
                    children: s("forumPickCharsEmpty") || "此板塊沒有可用的名冊角色"
                  });
                } else {
                  return e.map(e => {
                    const t = String(e.id);
                    const n = En.includes(t);
                    return E.jsxs("button", {
                      onClick: () => {
                        kn(e => e.includes(t) ? e.filter(e => e !== t) : [...e, t]);
                      },
                      style: {
                        padding: "6px 12px",
                        borderRadius: 14,
                        border: "1px solid var(--ios-border)",
                        background: n ? "var(--ios-blue)" : "transparent",
                        color: n ? "#fff" : "inherit",
                        cursor: "pointer",
                        fontSize: 12,
                        display: "flex",
                        alignItems: "center",
                        gap: 4
                      },
                      children: [n && E.jsx("span", {
                        children: "✓"
                      }), e.name]
                    }, t);
                  });
                }
              })()
            }), En.length === 0 && E.jsx("div", {
              style: {
                marginTop: 8,
                fontSize: 11,
                color: "var(--ios-text-tertiary)"
              },
              children: s("forumPickCharsHint") || "不選 = 隨機混合（跟普通生成一樣）；選了 = 強制由這些角色發貼"
            })]
          })]
        }), E.jsxs("div", {
          style: {
            padding: 12,
            borderTop: "1px solid var(--ios-border)",
            display: "flex",
            gap: 8
          },
          children: [E.jsx("button", {
            className: "fanfic-btn-secondary",
            style: {
              flex: 1
            },
            onClick: () => In(false),
            children: s("forumCancel") || "取消"
          }), E.jsx("button", {
            className: "fanfic-btn-primary",
            style: {
              flex: 2
            },
            onClick: () => {
              In(false);
              qo($n, Mn, {
                forcedRosterIds: En,
                postCountOverride: Mn === "new" ? On : 0
              });
            },
            children: En.length > 0 ? `${s("forumGenerateBtn") || "生成"}（${En.length} ${s("forumPickCharsCharUnit") || "角色"}）` : s("forumGenerateBtn") || "生成"
          })]
        })]
      })
    }), Fn && E.jsx("div", {
      className: "fanfic-modal-overlay",
      onClick: () => Bn(false),
      children: E.jsxs("div", {
        className: "fanfic-ask-dialog",
        onClick: e => e.stopPropagation(),
        children: [E.jsx("div", {
          className: "fanfic-ask-title",
          children: s("forumFanficCustomTitle")
        }), E.jsx("div", {
          className: "fanfic-ask-text",
          children: s("forumFanficCustomAsk")
        }), E.jsxs("div", {
          className: "fanfic-ask-buttons",
          children: [E.jsx("button", {
            className: "fanfic-btn-secondary",
            onClick: () => {
              Bn(false);
              qo("creator");
            },
            children: s("forumFanficCustomNo")
          }), E.jsx("button", {
            className: "fanfic-btn-primary",
            onClick: () => {
              Bn(false);
              zn({
                cpA: "",
                cpB: "",
                wordCountMin: 300,
                wordCountMax: 600,
                outline: "",
                ending: "HE",
                style: "",
                totalChapters: 10,
                jailbreakEnabled: false,
                jailbreakEntryIds: []
              });
              Un(true);
            },
            children: s("forumFanficCustomYes")
          })]
        })]
      })
    }), Ln && E.jsx("div", {
      className: "fanfic-modal-overlay",
      onClick: Ko,
      children: E.jsxs("div", {
        className: "fanfic-custom-panel",
        onClick: e => e.stopPropagation(),
        children: [E.jsxs("div", {
          className: "fanfic-custom-header",
          children: [E.jsx("span", {
            children: s("forumFanficCustomTitle")
          }), E.jsx("button", {
            className: "forum-icon-btn",
            onClick: Ko,
            children: "✕"
          })]
        }), E.jsxs("div", {
          className: "fanfic-custom-body",
          children: [E.jsxs("div", {
            className: "fanfic-field",
            children: [E.jsx("label", {
              children: s("forumFanficCpLabel")
            }), E.jsxs("div", {
              className: "fanfic-cp-row",
              children: [E.jsxs("select", {
                value: Hn.cpA,
                onChange: e => zn(t => ({
                  ...t,
                  cpA: e.target.value
                })),
                children: [E.jsx("option", {
                  value: "",
                  children: s("forumFanficCpPlaceholder")
                }), $.map(e => {
                  const t = `user_${e.uid || e.id}`;
                  return E.jsx("option", {
                    value: t,
                    disabled: t === Hn.cpB,
                    children: e.name || e.nickname || "User"
                  }, t);
                }), W.map(e => E.jsx("option", {
                  value: e.id,
                  disabled: String(e.id) === String(Hn.cpB),
                  children: e.name
                }, e.id))]
              }), E.jsx("span", {
                className: "fanfic-cp-x",
                children: s("forumFanficCpX")
              }), E.jsxs("select", {
                value: Hn.cpB,
                onChange: e => zn(t => ({
                  ...t,
                  cpB: e.target.value
                })),
                children: [E.jsx("option", {
                  value: "",
                  children: s("forumFanficCpPlaceholder")
                }), $.map(e => {
                  const t = `user_${e.uid || e.id}`;
                  return E.jsx("option", {
                    value: t,
                    disabled: t === Hn.cpA,
                    children: e.name || e.nickname || "User"
                  }, t);
                }), W.map(e => E.jsx("option", {
                  value: e.id,
                  disabled: String(e.id) === String(Hn.cpA),
                  children: e.name
                }, e.id))]
              })]
            })]
          }), E.jsxs("div", {
            className: "fanfic-field",
            children: [E.jsx("label", {
              children: s("forumFanficWordCountLabel")
            }), E.jsxs("div", {
              className: "fanfic-wordcount-row",
              children: [E.jsx("input", {
                type: "number",
                min: 100,
                max: 2000,
                value: Hn.wordCountMin,
                onChange: e => zn(t => ({
                  ...t,
                  wordCountMin: Number(e.target.value)
                })),
                placeholder: s("forumFanficWordCountMin")
              }), E.jsx("span", {
                children: "~"
              }), E.jsx("input", {
                type: "number",
                min: 100,
                max: 5000,
                value: Hn.wordCountMax,
                onChange: e => zn(t => ({
                  ...t,
                  wordCountMax: Number(e.target.value)
                })),
                placeholder: s("forumFanficWordCountMax")
              }), E.jsx("span", {
                className: "fanfic-unit",
                children: s("forumFanficWordCountUnit")
              })]
            })]
          }), E.jsxs("div", {
            className: "fanfic-field",
            children: [E.jsx("label", {
              children: s("forumFanficOutlineLabel")
            }), E.jsx("textarea", {
              rows: 3,
              value: Hn.outline,
              onChange: e => zn(t => ({
                ...t,
                outline: e.target.value
              })),
              placeholder: s("forumFanficOutlinePlaceholder")
            })]
          }), E.jsxs("div", {
            className: "fanfic-field",
            children: [E.jsx("label", {
              children: s("forumFanficEndingLabel")
            }), E.jsx("div", {
              className: "fanfic-ending-row",
              children: ["HE", "BE", "OE"].map(e => E.jsx("button", {
                className: "fanfic-ending-btn " + (Hn.ending === e ? "active" : ""),
                onClick: () => zn(t => ({
                  ...t,
                  ending: e
                })),
                children: s(`forumFanficEnding${e}`)
              }, e))
            })]
          }), E.jsxs("div", {
            className: "fanfic-field",
            children: [E.jsx("label", {
              children: s("forumFanficStyleLabel")
            }), E.jsx("input", {
              type: "text",
              value: Hn.style,
              onChange: e => zn(t => ({
                ...t,
                style: e.target.value
              })),
              placeholder: s("forumFanficStylePlaceholder")
            }), E.jsxs("div", {
              className: "fanfic-style-presets",
              children: [E.jsxs("span", {
                className: "fanfic-presets-label",
                children: [s("forumFanficStylePresets"), ":"]
              }), ["Gentle", "Angst", "Funny", "Poetic", "Suspense", "Sweet"].map(e => E.jsx("button", {
                className: "fanfic-style-tag " + (Hn.style === s(`forumFanficStyle${e}`) ? "active" : ""),
                onClick: () => zn(t => ({
                  ...t,
                  style: s(`forumFanficStyle${e}`)
                })),
                children: s(`forumFanficStyle${e}`)
              }, e))]
            })]
          }), E.jsxs("div", {
            className: "fanfic-field",
            children: [E.jsx("label", {
              children: s("forumFanficChaptersLabel")
            }), E.jsx("input", {
              type: "number",
              min: 1,
              max: 100,
              value: Hn.totalChapters,
              onChange: e => zn(t => ({
                ...t,
                totalChapters: Number(e.target.value)
              })),
              placeholder: s("forumFanficChaptersPlaceholder")
            })]
          }), E.jsxs("div", {
            className: "fanfic-field",
            children: [E.jsx("label", {
              children: s("forumBoardEditJailbreakLabel")
            }), E.jsxs("div", {
              className: "board-mod-toggle",
              onClick: () => zn(e => ({
                ...e,
                jailbreakEnabled: !e.jailbreakEnabled
              })),
              children: [E.jsx("div", {
                className: "board-mod-switch " + (Hn.jailbreakEnabled ? "active" : ""),
                children: E.jsx("div", {
                  className: "board-mod-switch-thumb"
                })
              }), E.jsx("span", {
                children: s("forumBoardEditJailbreakDesc")
              })]
            }), Hn.jailbreakEnabled && E.jsxs("div", {
              className: "forum-jb-picker-wrap",
              children: [E.jsx("div", {
                className: "forum-jb-picker-hint",
                children: i("forumJailbreakSelectHint", "勾選要注入本次同人生成的核心設定條目")
              }), Gn(Hn.jailbreakEntryIds, e => {
                zn(t => {
                  const n = Array.isArray(t.jailbreakEntryIds) ? t.jailbreakEntryIds : [];
                  const r = n.some(t => String(t) === String(e));
                  return {
                    ...t,
                    jailbreakEntryIds: r ? n.filter(t => String(t) !== String(e)) : [...n, e]
                  };
                });
              })]
            })]
          })]
        }), E.jsx("div", {
          className: "fanfic-custom-footer",
          children: E.jsx("button", {
            className: "fanfic-btn-primary fanfic-btn-full",
            onClick: async () => {
              var e;
              var t;
              Ko();
              jn(true);
              M().catch(() => {});
              const n = R("fanfic", "自訂同人生成");
              try {
                const l = W.slice(0, 6).map(e => Ye(e, {
                  forPromptLine: true,
                  worldBooks: zt
                }));
                let c = "";
                try {
                  const e = (await g.getAll()).filter(e => e && (e.isGlobal === true || e.isGlobal === "true"));
                  if (e.length > 0) {
                    const t = e[0];
                    const n = (t.entries || []).filter(e => e && e.content && !e.disable && e.enabled !== false && e.type !== "imagegen").slice(0, 5).map(e => `${e.name}: ${e.content}`).join("\n");
                    if (n) {
                      c = `\nWorld / Setting context:\n${t.title} - ${t.description || ""}\n${n}`;
                    }
                  }
                } catch (o) {}
                let d = ((e, t, n, r = [], o = "zh-Hant", a = [], s = [], i = true) => {
                  let l = "";
                  if (e.cpA && e.cpB) {
                    const t = e => {
                      if (String(e).startsWith("user_")) {
                        const t = e.replace("user_", "");
                        const n = s.find(e => String(e.uid || e.id) === t);
                        if (n) {
                          return {
                            name: n.name || n.nickname || "User",
                            gender: n.gender || "",
                            intro: n.intro || "",
                            hobbies: (n.hobbies || []).join(", "),
                            birthday: n.birthday || "",
                            type: "user"
                          };
                        } else {
                          return {
                            name: "User",
                            gender: "",
                            intro: "",
                            hobbies: "",
                            birthday: "",
                            type: "user"
                          };
                        }
                      }
                      const t = a.find(t => String(t.id) === String(e));
                      if (t) {
                        return {
                          name: t.name,
                          aliases: t.aliases || "",
                          gender: t.gender || "",
                          role: t.role || "",
                          description: t.description || "",
                          birthday: t.birthday || "",
                          type: "character"
                        };
                      } else {
                        return {
                          name: e,
                          gender: "",
                          description: "",
                          type: "unknown"
                        };
                      }
                    };
                    const n = t(e.cpA);
                    const r = t(e.cpB);
                    const o = e => {
                      let t = [`Name: ${e.name}`];
                      if (e.aliases) {
                        t.push(`Aliases: ${e.aliases}`);
                      }
                      if (e.gender) {
                        t.push(`Gender: ${e.gender}`);
                      }
                      if (e.role) {
                        t.push(`Role: ${e.role}`);
                      }
                      if (e.birthday) {
                        t.push(`Birthday: ${e.birthday}`);
                      }
                      if (e.hobbies) {
                        t.push(`Hobbies: ${e.hobbies}`);
                      }
                      if (e.intro) {
                        t.push(`Bio: ${e.intro}`);
                      }
                      if (e.description) {
                        t.push(`Full Profile:\n${e.description}`);
                      }
                      return t.join("\n");
                    };
                    l = `\n## Designated CP:\n### Character A:\n${o(n)}\n### Character B:\n${o(r)}\n\nALL fanfic MUST feature ${n.name} × ${r.name} as main CP. Personalities and behavior MUST match profiles above.\n`;
                  }
                  const c = {
                    HE: "Happy Ending (HE)",
                    BE: "Bad Ending (BE)",
                    OE: "Open Ending (OE)"
                  };
                  const d = `\n## Ending Direction: **${c[e.ending] || c.HE}**\n`;
                  let m = e.style ? `\n## Writing Style: **${e.style}**\nMaintain consistently.\n` : "";
                  let u = e.outline ? `\n## Story Outline (MUST follow):\n${e.outline}\nChapter 1 covers the BEGINNING. Don't rush.\n` : "";
                  const h = e.totalChapters || 10;
                  const p = e.wordCountMin || 300;
                  const f = e.wordCountMax || 600;
                  let g = "";
                  if (e.cpA && e.cpB) {
                    const e = r.filter(e => {
                      var t;
                      return e.boardId === "creator" && ((t = e.fanficMeta) == null ? undefined : t.series) && e.fanficConfig;
                    }).reduce((e, t) => {
                      e[t.fanficMeta.series] ||= [];
                      e[t.fanficMeta.series].push(t);
                      return e;
                    }, {});
                    const t = Object.keys(e);
                    if (t.length > 0) {
                      g = `\n## Existing Series:\n${t.map(t => {
                        var n;
                        const r = e[t];
                        return `- "${t}" — ${r.length} ch, latest: ch${((n = r[r.length - 1].fanficMeta) == null ? undefined : n.chapter) || 1}`;
                      }).join("\n")}\nContinue the most recent series.\n`;
                    }
                  }
                  return `You are a fanfiction generator. Generate 1 serialized fanfic chapter.\n\n${Qe(o)}\n${et}\n${tt(i)}\n${l}${d}${m}${u}\n## Series Structure: **${h} chapters** total. Generate Chapter 1.\n### Chapter 1 (OPENING — Act 1: Setup):\n- Focus on: world-building, character introductions, relationship dynamic, tone.\n- Plant story seeds, don't rush into drama.\n- End with a hook for Chapter 2.\n${g}\n\n## Content: **${p}-${f} characters** of narrative prose. Include series title, chapter number, "TBC".\n## Writing Quality: Actual fiction — scene-setting, dialogue, internal monologue, sensory details. Show don't tell.\n\n## Characters:\n${t.length > 0 ? t.join("\n") : "Use the CP characters above."}\n${n}\n\n## Author uses pen name. Generate 8-15 reader replies.\n\n## Output JSON — PURE JSON:\n{\n  "posts": [\n    {\n      "title": "[連載] Post title",\n      "boardId": "creator",\n      "authorName": "Pen name",\n      "rosterId": "realName or null",\n      "mood": "emoji + mood text",\n      "content": "Fanfic prose (${p}-${f} chars)",\n      "imageText": "optional 15-60 char text card (quote, dialogue, scene snippet) shown as image — must differ from content; null if not needed",\n      "isAnon": false,\n      "timeLabel": "relative time",\n      "fanficMeta": { "type": "serial", "series": "Series title", "chapter": 1, "cpTag": "A × B", "wordCount": ${Math.round((p + f) / 2)}, "totalChapters": ${h}, "ending": "${e.ending || "HE"}", "style": "${(e.style || "").replace(/"/g, "\\\"")}" },\n      "interactions": [\n        { "author": "screen name", "rosterId": "realName or null", "content": "reply (15-80 chars)", "isAnon": false, "isAuthorUpdate": false }\n      ]\n    }\n  ]\n}`;
                })(Hn, l, c, X, s("forumAiContentLang"), W, $, ar.allowFanficSubjectReply !== false) + Co() + So();
                if ((Hn == null ? undefined : Hn.jailbreakEnabled) && Array.isArray(Hn.jailbreakEntryIds) && Hn.jailbreakEntryIds.length > 0) {
                  try {
                    const e = we(zt, Hn.jailbreakEntryIds);
                    if (e) {
                      d += "\n\n" + e;
                    }
                  } catch (o) {}
                }
                const m = await w({
                  messages: [{
                    role: "system",
                    content: "You are a JSON generator. Do not use Markdown JSON blocks. Output valid JSON only."
                  }, {
                    role: "user",
                    content: d
                  }],
                  settings: await S(),
                  preferStreaming: false,
                  maxTokens: 65536
                });
                let u;
                try {
                  u = Pe(m);
                } catch (a) {
                  console.error("Failed to parse custom fanfic generation", a, "\nResponse:", typeof m == "string" ? m.slice(0, 500) : m);
                  throw a;
                }
                const h = (() => {
                  if (!(Hn == null ? undefined : Hn.cpA) || !(Hn == null ? undefined : Hn.cpB)) {
                    return null;
                  }
                  const e = e => {
                    if (String(e).startsWith("user_")) {
                      const t = String(e).replace("user_", "");
                      const n = $.find(e => String(e.uid || e.id) === t);
                      return n && (n.name || n.nickname) || "User";
                    }
                    const t = W.find(t => String(t.id) === String(e));
                    if (t) {
                      return t.name;
                    } else {
                      return "";
                    }
                  };
                  const t = e(Hn.cpA);
                  const n = e(Hn.cpB);
                  if (t && n) {
                    return [{
                      a: t,
                      b: n,
                      label: "designated",
                      type: "designated"
                    }];
                  } else {
                    return null;
                  }
                })();
                const p = jo();
                const f = (u.posts || []).filter(e => {
                  var t;
                  if (!e.isAnon) {
                    if (wo(e.authorName, e.rosterId)) {
                      console.warn("[Forum] Dropped impersonation fanfic post:", e.authorName, e.rosterId);
                      return false;
                    }
                    if (e.rosterId && !xo(e.rosterId, "creator")) {
                      console.warn("[Forum] Dropped out-of-group fanfic post:", e.authorName, e.rosterId);
                      return false;
                    }
                  }
                  return !h || !((t = e.fanficMeta) == null ? undefined : t.cpTag) || !!He(e.fanficMeta.cpTag, h, p) || !(console.warn("[Forum] Dropped off-target custom-fanfic CP:", e.fanficMeta.cpTag, "expected:", h[0].a, "×", h[0].b), 1);
                });
                const b = Date.now();
                const y = f.map((e, t) => {
                  const n = q.find(e => e.id === "creator") || q[0];
                  return {
                    id: b + t,
                    title: ke(e.title, ""),
                    boardName: (n == null ? undefined : n.name) || "",
                    boardId: "creator",
                    author: e.isAnon ? {
                      name: s("forumAnonName"),
                      avatar: null,
                      mood: null,
                      role: null,
                      level: null,
                      isAnon: true
                    } : {
                      name: ke(e.authorName, "NPC"),
                      avatar: null,
                      mood: ke(e.mood, null),
                      role: null,
                      level: Math.floor(Math.random() * 15) + 1,
                      rosterId: e.rosterId || null
                    },
                    timestamp: b - (f.length - 1 - t) * 1000,
                    content: ke(e.content, ""),
                    image: null,
                    ...(() => {
                      const e = vo("creator");
                      return {
                        likes: e.likes,
                        dislikes: e.dislikes,
                        views: e.views
                      };
                    })(),
                    comments: (e.interactions || []).length,
                    isHot: Math.random() > 0.5,
                    isPinned: !!e.isPinned,
                    isAnon: !!e.isAnon,
                    fanficMeta: e.fanficMeta || null,
                    fanficConfig: {
                      ...Hn
                    },
                    interactions: (() => {
                      const n = (e.interactions || []).filter(e => !!e.isAnon || !(wo(e.author, e.rosterId) ? (console.warn("[Forum] Dropped impersonation fanfic interaction:", e.author, e.rosterId), 1) : e.rosterId && !xo(e.rosterId, "creator") && (console.warn("[Forum] Dropped out-of-group fanfic interaction:", e.author, e.rosterId), 1)));
                      const r = b - (f.length - 1 - t) * 1000;
                      const o = n.map((e, t) => r + (t + 1) * 1000);
                      return n.map((e, t) => ({
                        author: e.isAnon ? s("forumAnonName") : ke(e.author, "NPC"),
                        content: ke(e.content, ""),
                        role: null,
                        isAnon: !!e.isAnon,
                        isAuthorUpdate: !!e.isAuthorUpdate,
                        avatar: null,
                        rosterId: e.rosterId || null,
                        timestamp: o[t] || Date.now()
                      }));
                    })()
                  };
                });
                await O(n, y, Z.current, {
                  bestEffortSetPosts: Q,
                  postsRef: Z,
                  notifyLabel: `論壇同人生成完成（${y.length} 條）`,
                  currentScreen: r
                });
                try {
                  const n = String((J == null ? undefined : J.uid) || (J == null ? undefined : J.id) || "");
                  if (n) {
                    const r = [];
                    for (const n of y) {
                      if (n.isAnon) {
                        continue;
                      }
                      const o = (e = n.author) == null ? undefined : e.rosterId;
                      if (!o) {
                        continue;
                      }
                      const a = Fe(W, o);
                      if (!a) {
                        continue;
                      }
                      const s = String(n.title || "").slice(0, 40).replace(/\n/g, " ").trim();
                      if (!s) {
                        continue;
                      }
                      const i = `我在${n.boardName || "創作板"}寫了同人「${s}」`;
                      r.push({
                        charId: String(a.id),
                        charName: (t = n.author) == null ? undefined : t.name,
                        summary: i,
                        boardName: n.boardName,
                        postId: n.id,
                        np: n
                      });
                    }
                    if (r.length > 0) {
                      Promise.all(r.map(e => x.appendHistory(n, e.charId, {
                        id: Date.now() + Math.floor(Math.random() * 1000),
                        source: "forum",
                        forumScope: "public",
                        forumPostId: String(e.postId),
                        userAnonOnPost: false,
                        summary: e.summary,
                        content: e.summary,
                        keywords: ["論壇", e.boardName || "創作", "同人"].filter(Boolean),
                        importance: 2,
                        emotion: "neutral",
                        topics: ["興趣"],
                        date: new Date().toISOString().slice(0, 10)
                      }).catch(t => console.warn("[Forum→Memory] 同人寫入失敗:", e.charName, t)))).then(() => console.log(`[Forum→Memory] 寫入 ${r.length} 條 char 同人發貼記憶`));
                      try {
                        for (const e of r) {
                          const t = e.np;
                          const r = String((t == null ? undefined : t.title) || "").trim();
                          const o = String((t == null ? undefined : t.content) || "").trim();
                          if (!r && !o) {
                            continue;
                          }
                          const a = [{
                            role: "assistant",
                            content: `[論壇同人 · ${e.boardName || "創作板"}] ${r}${o ? `\n${o}` : ""}`.slice(0, 4000),
                            timestamp: Number.isFinite(t == null ? undefined : t.timestamp) ? t.timestamp : Date.now(),
                            senderName: e.charName
                          }];
                          D({
                            userId: n,
                            characterId: e.charId,
                            source: "forum",
                            messages: a
                          }).catch(() => {});
                        }
                      } catch (i) {}
                    }
                  }
                } catch (o) {
                  console.warn("[Forum→Memory] 同人整體寫入失敗:", o);
                }
              } catch (o) {
                console.error("[Forum] Custom fanfic generation failed:", o);
                nr(Me(o, s), 5000);
                F(n);
              } finally {
                jn(false);
              }
            },
            disabled: Nn,
            children: s(Nn ? "forumFanficGenerating" : "forumFanficGenerate")
          })
        })]
      })
    })]
  });
}
function At() {
  return E.jsx(Tt, {
    children: E.jsx(Ct, {})
  });
}
export { At as default };