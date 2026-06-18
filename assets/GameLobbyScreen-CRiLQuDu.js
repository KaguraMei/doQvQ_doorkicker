import { r as e, j as t } from "./vendor-react-B2VXkTUV.js";
import { a as r, G as i, aC as o, aE as n, n as s, bb as a, aB as l, ba as d, c as p, u as c, bE as x } from "./native-pet-CTNtZgMA.js";
import { S as g } from "./SmartDropdown-Blgtm2Dm.js";
import { bj as u, X as h, bk as m, aH as f, E as y, aX as b, u as v, a9 as j, O as C, x as S, h as k, as as w, bl as F, bm as A, b5 as B, H as E, r as z, P as T, bn as D, bo as I, bp as M, v as R, bq as W } from "./vendor-lucide-DBv09HTV.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
const $ = ({
  onClose: p
}) => {
  const {
    t: c
  } = r();
  const [x, S] = e.useState(false);
  const [k, w] = e.useState(false);
  const [F, A] = e.useState("");
  const [B, E] = e.useState("");
  const [z, T] = e.useState("");
  const [D, I] = e.useState("openai");
  const [M, R] = e.useState(0.7);
  const [W, $] = e.useState(false);
  const [L, P] = e.useState(false);
  const [H, _] = e.useState([]);
  const [N, G] = e.useState(false);
  const [U, O] = e.useState(false);
  const [K, J] = e.useState(null);
  const [q, V] = e.useState("");
  const [X, Y] = e.useState("");
  const [Q, Z] = e.useState(() => typeof window != "undefined" ? window.innerHeight : 800);
  const [ee, te] = e.useState(0);
  e.useEffect(() => {
    (async () => {
      const e = (await i.get("apiSettings")) || {};
      w(e.gameApiEnabled === true || e.gameApiEnabled === "true");
      A(e.gameApiUrl || "");
      E(e.gameApiKey || "");
      T(e.gameApiModel || "");
      I(e.gameApiType || e.apiType || "openai");
      R(typeof e.gameTemperature == "number" ? e.gameTemperature : 0.7);
      V(e.mainApiUrl || "");
      Y(e.mainApiModel || "");
      S(true);
    })();
  }, []);
  e.useEffect(() => {
    if (!K) {
      return;
    }
    const e = setTimeout(() => J(null), 4000);
    return () => clearTimeout(e);
  }, [K]);
  e.useEffect(() => {
    const e = typeof window != "undefined" ? window.visualViewport : null;
    const t = () => {
      if (e) {
        Z(e.height);
        te(e.offsetTop || 0);
      } else {
        Z(window.innerHeight);
        te(0);
      }
    };
    t();
    if (e) {
      e.addEventListener("resize", t);
      e.addEventListener("scroll", t);
      return () => {
        e.removeEventListener("resize", t);
        e.removeEventListener("scroll", t);
      };
    } else {
      window.addEventListener("resize", t);
      return () => window.removeEventListener("resize", t);
    }
  }, []);
  const re = e.useCallback(e => {
    const t = e.currentTarget;
    if (t) {
      setTimeout(() => {
        try {
          t.scrollIntoView({
            block: "center",
            behavior: "smooth"
          });
        } catch {}
      }, 300);
    }
  }, []);
  const ie = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "12px",
    border: "1.5px solid #E2E8F0",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
    background: "#fff"
  };
  const oe = {
    fontSize: "12px",
    fontWeight: "700",
    color: "#4A5568",
    marginBottom: "6px",
    display: "block"
  };
  return t.jsx("div", {
    onClick: p,
    style: {
      position: "fixed",
      left: 0,
      right: 0,
      top: `${ee}px`,
      height: `${Q}px`,
      zIndex: 9999,
      background: "rgba(0,0,0,0.5)",
      backdropFilter: "blur(6px)",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    },
    children: t.jsxs("div", {
      onClick: e => e.stopPropagation(),
      style: {
        background: "#fff",
        width: "100%",
        maxWidth: "480px",
        borderRadius: "24px 24px 0 0",
        padding: "20px 20px 32px",
        maxHeight: `${Math.max(220, Q - 24)}px`,
        overflowY: "auto",
        boxShadow: "0 -12px 32px rgba(0,0,0,0.12)"
      },
      children: [t.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px"
        },
        children: [t.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "10px"
          },
          children: [t.jsx("div", {
            style: {
              width: "36px",
              height: "36px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #A1C4FD 0%, #C2E9FB 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: t.jsx(u, {
              size: 18,
              color: "#fff"
            })
          }), t.jsxs("div", {
            children: [t.jsx("div", {
              style: {
                fontSize: "16px",
                fontWeight: "800",
                color: "#2D3748"
              },
              children: c("gameApiTitle")
            }), t.jsx("div", {
              style: {
                fontSize: "11px",
                color: "#A0AEC0"
              },
              children: c("gameApiSubtitle")
            })]
          })]
        }), t.jsx("button", {
          onClick: p,
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
          children: t.jsx(h, {
            size: 16,
            color: "#718096"
          })
        })]
      }), x ? t.jsxs(t.Fragment, {
        children: [t.jsxs("div", {
          onClick: () => w(!k),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 16px",
            borderRadius: "14px",
            background: k ? "#EBF8FF" : "#F7FAFC",
            border: k ? "1.5px solid #90CDF4" : "1.5px solid transparent",
            marginBottom: "16px",
            cursor: "pointer"
          },
          children: [t.jsxs("div", {
            style: {
              flex: 1
            },
            children: [t.jsx("div", {
              style: {
                fontSize: "14px",
                fontWeight: "700",
                color: "#2D3748"
              },
              children: c("gameApiEnableLabel")
            }), t.jsx("div", {
              style: {
                fontSize: "11px",
                color: "#718096",
                marginTop: "2px"
              },
              children: c(k ? "gameApiEnabledHint" : "gameApiDisabledHint")
            })]
          }), t.jsx("div", {
            style: {
              width: "44px",
              height: "26px",
              borderRadius: "13px",
              background: k ? "#4299E1" : "#CBD5E0",
              position: "relative",
              transition: "all 0.2s",
              flexShrink: 0
            },
            children: t.jsx("div", {
              style: {
                position: "absolute",
                top: "3px",
                left: k ? "21px" : "3px",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: "#fff",
                transition: "all 0.2s",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
              }
            })
          })]
        }), !k && q && t.jsxs("div", {
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
          children: [t.jsx(m, {
            size: 14,
            color: "#718096",
            style: {
              flexShrink: 0,
              marginTop: "1px"
            }
          }), t.jsxs("div", {
            style: {
              lineHeight: 1.5
            },
            children: [c("gameApiFallbackHint"), t.jsxs("div", {
              style: {
                marginTop: "4px",
                color: "#718096",
                fontSize: "10px",
                wordBreak: "break-all"
              },
              children: [q, X ? ` · ${X}` : ""]
            })]
          })]
        }), t.jsxs("div", {
          style: {
            opacity: k ? 1 : 0.5,
            pointerEvents: k ? "auto" : "none",
            transition: "opacity 0.2s"
          },
          children: [t.jsxs("div", {
            style: {
              marginBottom: "14px"
            },
            children: [t.jsx("label", {
              style: oe,
              children: c("gameApiTypeLabel")
            }), t.jsxs("select", {
              value: D,
              onChange: e => I(e.target.value),
              style: {
                ...ie,
                cursor: "pointer"
              },
              children: [t.jsx("option", {
                value: "openai",
                children: "OpenAI / Compatible"
              }), t.jsx("option", {
                value: "gemini",
                children: "Google Gemini"
              }), t.jsx("option", {
                value: "anthropic",
                children: "Anthropic Claude"
              }), t.jsx("option", {
                value: "custom",
                children: "Custom"
              })]
            })]
          }), t.jsxs("div", {
            style: {
              marginBottom: "14px"
            },
            children: [t.jsx("label", {
              style: oe,
              children: c("gameApiUrlLabel")
            }), t.jsx("input", {
              type: "text",
              value: F,
              onChange: e => A(e.target.value),
              onFocus: re,
              placeholder: "https://api.openai.com/v1",
              style: ie,
              autoCapitalize: "off",
              autoCorrect: "off",
              spellCheck: false
            })]
          }), t.jsxs("div", {
            style: {
              marginBottom: "14px"
            },
            children: [t.jsx("label", {
              style: oe,
              children: c("gameApiKeyLabel")
            }), t.jsxs("div", {
              style: {
                position: "relative"
              },
              children: [t.jsx("input", {
                type: W ? "text" : "password",
                value: B,
                onChange: e => E(e.target.value),
                onFocus: re,
                placeholder: "sk-...",
                style: {
                  ...ie,
                  paddingRight: "40px"
                },
                autoCapitalize: "off",
                autoCorrect: "off",
                spellCheck: false
              }), t.jsx("button", {
                type: "button",
                onClick: () => $(e => !e),
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
                children: W ? t.jsx(f, {
                  size: 16,
                  color: "#A0AEC0"
                }) : t.jsx(y, {
                  size: 16,
                  color: "#A0AEC0"
                })
              })]
            })]
          }), t.jsxs("div", {
            style: {
              marginBottom: "14px"
            },
            children: [t.jsxs("label", {
              style: {
                ...oe,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              },
              children: [t.jsx("span", {
                children: c("gameApiModelLabel")
              }), t.jsxs("button", {
                type: "button",
                onClick: async () => {
                  var e;
                  var t;
                  if (F && B) {
                    G(true);
                    try {
                      const r = o(F) ? n(F, B, {
                        "anthropic-beta": "models-2025-02-19"
                      }) : n(F, B);
                      const i = await s(a(F), {
                        method: "GET",
                        headers: r
                      });
                      if (!i.ok) {
                        throw new Error(`HTTP ${i.status}`);
                      }
                      const l = await i.json();
                      const d = ((e = l.data) == null ? undefined : e.map(e => e.id)) || ((t = l.models) == null ? undefined : t.map(e => e.id || e.name)) || [];
                      _(d);
                      if (d.length === 0) {
                        J({
                          type: "err",
                          text: c("gameApiNoModels")
                        });
                      } else {
                        J({
                          type: "ok",
                          text: `${c("gameApiFetchSuccess")} (${d.length})`
                        });
                        if (!z && d.length > 0) {
                          T(d[0]);
                        }
                      }
                    } catch (r) {
                      console.error("[GameApiSettings] fetch models failed:", r);
                      J({
                        type: "err",
                        text: `${c("gameApiFetchFailed")}: ${r.message}`
                      });
                    } finally {
                      G(false);
                    }
                  } else {
                    J({
                      type: "err",
                      text: c("gameApiEnterInfoFirst")
                    });
                  }
                },
                disabled: N || !F || !B,
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "4px 10px",
                  borderRadius: "8px",
                  background: !N && F && B ? "#EBF8FF" : "#EDF2F7",
                  color: !N && F && B ? "#3182CE" : "#A0AEC0",
                  border: "none",
                  fontSize: "11px",
                  fontWeight: "700",
                  cursor: !N && F && B ? "pointer" : "not-allowed"
                },
                children: [N ? t.jsx(b, {
                  size: 11,
                  style: {
                    animation: "spin 1s linear infinite"
                  }
                }) : t.jsx(v, {
                  size: 11
                }), c("gameApiFetchModels")]
              })]
            }), H.length > 0 ? t.jsx(g, {
              value: z,
              options: [{
                id: "",
                label: c("gameApiSelectModel"),
                value: ""
              }, ...H.map(e => ({
                id: e,
                label: e,
                value: e
              }))],
              onChange: e => T(e),
              style: {
                ...ie
              }
            }) : t.jsx("input", {
              type: "text",
              value: z,
              onChange: e => T(e.target.value),
              onFocus: re,
              placeholder: "gpt-4o-mini / gemini-2.0-flash / claude-3-5-sonnet",
              style: ie,
              autoCapitalize: "off",
              autoCorrect: "off",
              spellCheck: false
            })]
          }), t.jsxs("div", {
            style: {
              marginBottom: "16px"
            },
            children: [t.jsxs("label", {
              style: oe,
              children: [c("gameApiTemperatureLabel"), " · ", M.toFixed(1)]
            }), t.jsx("input", {
              type: "range",
              min: 0,
              max: 2,
              step: 0.1,
              value: M,
              onChange: e => R(Number(e.target.value)),
              style: {
                width: "100%",
                accentColor: "#4299E1"
              }
            })]
          })]
        }), K && t.jsx("div", {
          style: {
            padding: "10px 12px",
            borderRadius: "10px",
            background: K.type === "ok" ? "#F0FFF4" : "#FFF5F5",
            border: "1px solid " + (K.type === "ok" ? "#9AE6B4" : "#FEB2B2"),
            color: K.type === "ok" ? "#276749" : "#C53030",
            fontSize: "12px",
            marginBottom: "12px",
            wordBreak: "break-all"
          },
          children: K.text
        }), t.jsxs("div", {
          style: {
            display: "flex",
            gap: "10px"
          },
          children: [t.jsxs("button", {
            type: "button",
            onClick: async () => {
              var e;
              var t;
              var r;
              if (F && B) {
                O(true);
                try {
                  const i = l(F);
                  const o = d({
                    apiUrl: i,
                    model: z || "gpt-3.5-turbo",
                    messages: [{
                      role: "user",
                      content: "Hi"
                    }],
                    temperature: 0.7,
                    stream: false,
                    maxTokens: 5
                  });
                  const a = await s(i, {
                    method: "POST",
                    headers: n(i, B),
                    body: JSON.stringify(o),
                    timeoutMs: 60000
                  });
                  if (!a.ok) {
                    const e = await a.text();
                    throw new Error(`HTTP ${a.status}: ${e.substring(0, 120)}`);
                  }
                  const p = await a.json();
                  const x = !!((e = p.choices) == null ? undefined : e.length) || !!((t = p.content) == null ? undefined : t.length) || !!((r = p.candidates) == null ? undefined : r.length);
                  J(x ? {
                    type: "ok",
                    text: c("gameApiTestSuccess")
                  } : {
                    type: "err",
                    text: c("gameApiTestAbnormal")
                  });
                } catch (i) {
                  console.error("[GameApiSettings] test failed:", i);
                  J({
                    type: "err",
                    text: `${c("gameApiTestFailed")}: ${i.message}`
                  });
                } finally {
                  O(false);
                }
              } else {
                J({
                  type: "err",
                  text: c("gameApiEnterInfoFirst")
                });
              }
            },
            disabled: U || !k || !F || !B,
            style: {
              flex: 1,
              padding: "14px",
              borderRadius: "14px",
              background: "#F7FAFC",
              color: "#4A5568",
              border: "1.5px solid #E2E8F0",
              fontSize: "14px",
              fontWeight: "700",
              cursor: !U && k && F && B ? "pointer" : "not-allowed",
              opacity: !U && k && F && B ? 1 : 0.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px"
            },
            children: [U ? t.jsx(b, {
              size: 16,
              style: {
                animation: "spin 1s linear infinite"
              }
            }) : t.jsx(j, {
              size: 16
            }), U ? c("gameApiTesting") || "Testing..." : c("gameApiTest")]
          }), t.jsxs("button", {
            onClick: async () => {
              if (!L) {
                P(true);
                try {
                  const e = (await i.get("apiSettings")) || {};
                  const t = e => typeof e == "string" ? e.trim() : e;
                  const r = {
                    ...e,
                    gameApiEnabled: k,
                    gameApiUrl: t(F),
                    gameApiKey: t(B),
                    gameApiModel: t(z),
                    gameApiType: D,
                    gameTemperature: Number(M) || 0.7
                  };
                  await i.set("apiSettings", r);
                  if (p != null) {
                    p();
                  }
                } catch (e) {
                  console.error("[GameApiSettings] save failed:", e);
                  alert(c("gameApiSaveFailed") || "Save failed: " + ((e == null ? undefined : e.message) || e));
                } finally {
                  P(false);
                }
              }
            },
            disabled: L,
            style: {
              flex: 2,
              padding: "14px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #4299E1, #3182CE)",
              color: "#fff",
              border: "none",
              fontSize: "15px",
              fontWeight: "800",
              cursor: L ? "wait" : "pointer",
              opacity: L ? 0.6 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px"
            },
            children: [t.jsx(C, {
              size: 18
            }), L ? c("saving") || "Saving..." : c("gameApiSave")]
          })]
        }), t.jsx("style", {
          children: "@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }"
        })]
      }) : t.jsx("div", {
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
const L = [{
  id: "uno",
  name: "UNO",
  en: "Card Game",
  players: "2-10人",
  icon: u,
  color: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)",
  textDark: "#B55A67",
  shadow: "rgba(255, 154, 158, 0.4)"
}, {
  id: "truth-dare",
  name: "真心话大冒险",
  en: "Truth or Dare",
  players: "2-8人",
  icon: I,
  color: "linear-gradient(135deg, #FBC2EB 0%, #A6C1EE 100%)",
  textDark: "#8A7BA5",
  shadow: "rgba(251, 194, 235, 0.4)"
}, {
  id: "werewolf",
  name: "狼人杀",
  en: "Werewolf",
  players: "5-12人",
  icon: M,
  color: "linear-gradient(135deg, #A1C4FD 0%, #C2E9FB 100%)",
  textDark: "#4A6FA5",
  shadow: "rgba(161, 196, 253, 0.4)"
}, {
  id: "mahjong",
  name: "麻将",
  en: "Mahjong",
  players: "4人",
  icon: u,
  color: "linear-gradient(135deg, #84FAB0 0%, #8FD3F4 100%)",
  textDark: "#3B8B66",
  shadow: "rgba(132, 250, 176, 0.4)"
}, {
  id: "turtle-soup",
  name: "海龟汤",
  en: "Situation Puzzles",
  players: "2-5人",
  icon: R,
  color: "linear-gradient(135deg, #FFD1D1 0%, #FF9EBB 100%)",
  textDark: "#B23A5B",
  shadow: "rgba(255, 158, 187, 0.4)"
}, {
  id: "rps",
  name: "猜拳游戏",
  en: "Rock Paper Scissors",
  players: "2人",
  icon: u,
  color: "linear-gradient(135deg, #D4FC79 0%, #96E6A1 100%)",
  textDark: "#3A8346",
  shadow: "rgba(150, 230, 161, 0.4)"
}, {
  id: "emoji-guess",
  name: "Emoji猜谜",
  en: "Emoji Charades",
  players: "2+人",
  icon: W,
  color: "linear-gradient(135deg, #FFF1EB 0%, #ACE0F9 100%)",
  textDark: "#3A7C9D",
  shadow: "rgba(172, 224, 249, 0.4)"
}, {
  id: "gomoku",
  name: "五子棋",
  en: "Gomoku",
  players: "2人",
  icon: M,
  color: "linear-gradient(135deg, #E0C3FC 0%, #8EC5FC 100%)",
  textDark: "#5E7BA8",
  shadow: "rgba(142, 197, 252, 0.4)"
}];
const P = [{
  id: "hp-test",
  i18nKey: "hpSortingTitle",
  en: "HP House Sorting",
  icon: A,
  color: "linear-gradient(135deg, #FDFBFB 0%, #EBEDEE 100%)",
  textDark: "#5C6D8A"
}, {
  id: "mbti-test",
  name: "MBTI 性格测验",
  en: "MBTI Personality",
  icon: B,
  color: "linear-gradient(135deg, #FDFBFB 0%, #EBEDEE 100%)",
  textDark: "#5C6D8A"
}, {
  id: "love-brain-test",
  name: "恋爱脑测试",
  en: "Love Brain Test",
  icon: E,
  color: "linear-gradient(135deg, #FFF5F7 0%, #FED7E2 100%)",
  textDark: "#D53F8C"
}];
const H = ({
  game: e,
  onClick: r
}) => {
  const i = e.icon;
  return t.jsxs("div", {
    style: {
      background: e.color,
      borderRadius: "24px",
      padding: "24px 16px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "12px",
      boxShadow: `0 12px 24px ${e.shadow}`,
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",
      transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
      border: "2px solid rgba(255,255,255,0.4)",
      height: "100%"
    },
    onClick: r,
    onMouseDown: e => e.currentTarget.style.transform = "scale(0.95)",
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)",
    children: [t.jsx("div", {
      style: {
        position: "absolute",
        top: "-10px",
        right: "-15px",
        opacity: 0.15,
        transform: "rotate(20deg)"
      },
      children: t.jsx(i, {
        size: 90,
        color: e.textDark
      })
    }), t.jsx("div", {
      style: {
        width: "56px",
        height: "56px",
        borderRadius: "20px",
        background: "rgba(255, 255, 255, 0.9)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 8px 16px rgba(0,0,0,0.05)"
      },
      children: t.jsx(i, {
        size: 28,
        color: e.textDark
      })
    }), t.jsxs("div", {
      style: {
        textAlign: "center",
        position: "relative",
        zIndex: 2
      },
      children: [t.jsx("div", {
        style: {
          fontSize: "15px",
          fontWeight: "800",
          color: e.textDark,
          letterSpacing: "0.5px"
        },
        children: e.name
      }), t.jsx("div", {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          background: "rgba(255,255,255,0.6)",
          padding: "2px 8px",
          borderRadius: "12px",
          fontSize: "10px",
          color: e.textDark,
          marginTop: "8px",
          fontWeight: "700"
        },
        children: e.players
      })]
    })]
  });
};
const _ = () => {
  const {
    currentScreen: o,
    showScreen: n
  } = p();
  const {
    t: s
  } = r();
  const [a] = c("darkMode", false);
  const l = o === "game-lobby-screen";
  const d = {
    rootBg: a ? "#000000" : "#FAFAFC",
    dotPattern: a ? "#1c1c1e" : "#E5E7EB",
    overlay: a ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.7)",
    cardBg: a ? "rgba(255,255,255,0.06)" : "rgba(255, 255, 255, 0.8)",
    cardBorder: a ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,1)",
    cardDashBorder: a ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.12)",
    bannerBg: a ? "linear-gradient(120deg, #1c1c1e 0%, #2c2c2e 100%)" : "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
    bannerBorder: a ? "rgba(255,255,255,0.08)" : "#fff",
    textPrimary: a ? "#f2f2f7" : "#2D3748",
    textTitle: a ? "#f2f2f7" : "#4A5568",
    textSecondary: a ? "rgba(235,235,245,0.6)" : "#718096",
    textMuted: a ? "rgba(235,235,245,0.6)" : "#A0AEC0",
    chevronBg: a ? "rgba(255,255,255,0.08)" : "#F7FAFC",
    chevronColor: a ? "rgba(235,235,245,0.6)" : "#CBD5E0"
  };
  const [g, h] = e.useState(0);
  const [m, f] = e.useState([]);
  const [y, b] = e.useState([]);
  const [v, j] = e.useState(false);
  e.useEffect(() => {
    if (l) {
      (async () => {
        try {
          let e = await i.get("custom_psych_tests");
          if (e == null) {
            const t = localStorage.getItem("custom_psych_tests");
            if (t) {
              try {
                e = JSON.parse(t);
                await i.set("custom_psych_tests", e);
                localStorage.removeItem("custom_psych_tests");
              } catch {
                e = [];
              }
            } else {
              e = [];
            }
          }
          return e.filter(e => !String(e.id).startsWith("__builtin_"));
        } catch {
          return [];
        }
      })().then(f);
      x.getAll().then(b);
    }
  }, [l]);
  const C = (e => {
    let t = [];
    for (let r = 0; r < e.length; r += 4) {
      t.push(e.slice(r, r + 4));
    }
    return t;
  })(L);
  const A = e => {
    if (e === "hp-test") {
      n("hp-sorting-screen");
    } else if (e === "mbti-test") {
      n("mbti-test-screen");
    } else if (e === "love-brain-test") {
      n("love-brain-test-screen");
    } else if (e === "custom-test") {
      n("custom-test-screen");
    }
  };
  return t.jsxs("div", {
    id: "game-lobby-screen",
    className: "screen " + (l ? "active" : ""),
    style: {
      backgroundColor: d.rootBg,
      backgroundImage: `radial-gradient(${d.dotPattern} 1px, transparent 1px)`,
      backgroundSize: "16px 16px",
      padding: 0
    },
    children: [t.jsx("div", {
      style: {
        position: "absolute",
        inset: 0,
        backgroundColor: d.overlay,
        zIndex: 0,
        pointerEvents: "none"
      }
    }), t.jsxs("div", {
      className: "screen-header",
      style: {
        paddingTop: "44px",
        height: "88px"
      },
      children: [t.jsx("div", {
        className: "back-btn",
        onClick: () => n("home-screen"),
        children: t.jsx(S, {
          size: 24
        })
      }), t.jsx("h1", {
        className: "screen-title",
        children: "游戏大厅"
      }), t.jsx("div", {
        onClick: () => j(true),
        title: s("gameApiTitle") || "游戏 API 设置",
        style: {
          position: "absolute",
          right: "4px",
          bottom: 0,
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 10,
          color: "#007AFF"
        },
        children: t.jsx(k, {
          size: 22
        })
      })]
    }), v && t.jsx($, {
      onClose: () => j(false)
    }), t.jsxs("div", {
      className: "screen-content",
      style: {
        position: "relative",
        zIndex: 1,
        paddingBottom: "40px"
      },
      children: [t.jsxs("div", {
        style: {
          background: d.bannerBg,
          borderRadius: "24px",
          padding: "20px",
          margin: "24px 20px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          border: `1px solid ${d.bannerBorder}`
        },
        children: [t.jsx("div", {
          style: {
            width: "48px",
            height: "48px",
            background: "#FFB8D2",
            borderRadius: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
            transform: "rotate(-5deg)"
          },
          children: t.jsx(u, {
            size: 24,
            color: "#fff"
          })
        }), t.jsxs("div", {
          children: [t.jsx("div", {
            style: {
              fontSize: "15px",
              fontWeight: "700",
              color: d.textTitle,
              marginBottom: "4px"
            },
            children: "今天想和谁一起玩呢？"
          }), t.jsx("div", {
            style: {
              fontSize: "12px",
              color: d.textSecondary
            },
            children: "选择一个小游戏，呼叫你的专属陪伴吧 ✨"
          })]
        })]
      }), t.jsxs("div", {
        style: {
          marginBottom: "32px"
        },
        children: [t.jsx("div", {
          style: {
            display: "flex",
            alignItems: "center",
            marginBottom: "16px",
            paddingLeft: "24px"
          },
          children: t.jsxs("h2", {
            style: {
              fontSize: "17px",
              fontWeight: "800",
              color: d.textPrimary,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              margin: 0
            },
            children: [t.jsx(w, {
              size: 20,
              color: "#F6AD55"
            }), " 多人互动"]
          })
        }), t.jsx("div", {
          onScroll: e => {
            const t = e.target.scrollLeft;
            const r = e.target.offsetWidth;
            if (r > 0) {
              const e = Math.round(t / r);
              h(e);
            }
          },
          style: {
            display: "flex",
            overflowX: "auto",
            paddingBottom: "20px",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
            scrollSnapType: "x mandatory"
          },
          children: C.map((e, r) => t.jsx("div", {
            style: {
              flex: "0 0 100%",
              boxSizing: "border-box",
              padding: "0 20px",
              scrollSnapAlign: "start",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px"
            },
            children: e.map(e => t.jsx(H, {
              game: e,
              onClick: () => {
                var t;
                if ((t = e.id) === "werewolf") {
                  n("werewolf-screen");
                } else if (t === "truth-dare") {
                  n("truth-or-dare-screen");
                } else if (t === "gomoku") {
                  n("gomoku-screen");
                } else if (t === "mahjong") {
                  n("mahjong-screen");
                } else if (t === "uno") {
                  n("uno-screen");
                } else if (t === "turtle-soup") {
                  n("turtle-soup-screen");
                } else if (t === "rps") {
                  n("rps-screen");
                } else if (t === "emoji-guess") {
                  n("emoji-guess-screen");
                }
              }
            }, e.id))
          }, r))
        }), t.jsx("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            gap: "6px",
            marginTop: "-10px"
          },
          children: C.map((e, r) => t.jsx("div", {
            style: {
              width: r === g ? "16px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background: r === g ? "#F6AD55" : "#E2E8F0",
              transition: "all 0.3s"
            }
          }, r))
        })]
      }), t.jsxs("div", {
        style: {
          marginBottom: "20px",
          padding: "0 20px"
        },
        children: [t.jsx("div", {
          style: {
            display: "flex",
            alignItems: "center",
            marginBottom: "16px",
            paddingLeft: "4px"
          },
          children: t.jsxs("h2", {
            style: {
              fontSize: "17px",
              fontWeight: "800",
              color: d.textPrimary,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              margin: 0
            },
            children: [t.jsx(F, {
              size: 20,
              color: "#9F7AEA"
            }), " 测验工坊"]
          })
        }), t.jsxs("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          },
          children: [P.map(e => {
            const r = e.icon;
            return t.jsxs("div", {
              style: {
                background: d.cardBg,
                borderRadius: "20px",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
                cursor: "pointer",
                transition: "transform 0.2s",
                border: `1px solid ${d.cardBorder}`,
                backdropFilter: "blur(10px)"
              },
              onClick: () => A(e.id),
              onMouseDown: e => e.currentTarget.style.transform = "scale(0.97)",
              onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
              onMouseLeave: e => e.currentTarget.style.transform = "scale(1)",
              children: [t.jsx("div", {
                style: {
                  width: "48px",
                  height: "48px",
                  borderRadius: "16px",
                  background: e.color,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                  boxShadow: "inset 0 2px 4px rgba(255,255,255,0.8), 0 4px 8px rgba(0,0,0,0.05)"
                },
                children: t.jsx(r, {
                  size: 22,
                  color: e.textDark
                })
              }), t.jsxs("div", {
                style: {
                  flex: 1
                },
                children: [t.jsx("div", {
                  style: {
                    fontSize: "15px",
                    fontWeight: "700",
                    color: d.textPrimary,
                    marginBottom: "4px"
                  },
                  children: e.i18nKey ? s(e.i18nKey) : e.name
                }), t.jsx("div", {
                  style: {
                    fontSize: "12px",
                    color: d.textMuted,
                    fontWeight: "500"
                  },
                  children: e.en
                })]
              }), t.jsx("div", {
                style: {
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: d.chevronBg,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: d.chevronColor
                },
                children: t.jsx(S, {
                  size: 16,
                  style: {
                    transform: "rotate(180deg)"
                  }
                })
              })]
            }, e.id);
          }), m.map(e => {
            var r;
            return t.jsxs("div", {
              style: {
                background: d.cardBg,
                borderRadius: "20px",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
                cursor: "pointer",
                transition: "transform 0.2s",
                border: `1px solid ${d.cardBorder}`,
                backdropFilter: "blur(10px)",
                position: "relative",
                overflow: "hidden"
              },
              onClick: () => {
                t = e.id;
                localStorage.setItem("custom_test_action", JSON.stringify({
                  action: "play",
                  testId: t
                }));
                n("custom-test-screen");
                return;
                var t;
              },
              onMouseDown: e => e.currentTarget.style.transform = "scale(0.97)",
              onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
              onMouseLeave: e => e.currentTarget.style.transform = "scale(1)",
              children: [t.jsx("div", {
                style: {
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "4px",
                  background: e.coverColor,
                  borderRadius: "20px 0 0 20px"
                }
              }), t.jsx("div", {
                style: {
                  width: "48px",
                  height: "48px",
                  borderRadius: "16px",
                  background: `linear-gradient(135deg, ${e.coverColor}33 0%, ${e.coverColor}11 100%)`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                  boxShadow: "inset 0 2px 4px rgba(255,255,255,0.8), 0 4px 8px rgba(0,0,0,0.05)",
                  border: `1px solid ${e.coverColor}44`,
                  fontSize: "24px"
                },
                children: e.icon || t.jsx(z, {
                  size: 22,
                  color: e.coverColor
                })
              }), t.jsxs("div", {
                style: {
                  flex: 1
                },
                children: [t.jsx("div", {
                  style: {
                    fontSize: "15px",
                    fontWeight: "700",
                    color: d.textPrimary,
                    marginBottom: "4px"
                  },
                  children: e.title || "—"
                }), t.jsx("div", {
                  style: {
                    fontSize: "12px",
                    color: d.textMuted,
                    fontWeight: "500",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  children: e.description || `${((r = e.questions) == null ? undefined : r.length) || 0} ${s("customTestQuestions")}`
                })]
              }), t.jsx("div", {
                style: {
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: d.chevronBg,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: d.chevronColor
                },
                children: t.jsx(S, {
                  size: 16,
                  style: {
                    transform: "rotate(180deg)"
                  }
                })
              })]
            }, e.id);
          }), t.jsxs("div", {
            style: {
              background: d.cardBg,
              borderRadius: "20px",
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
              cursor: "pointer",
              transition: "transform 0.2s",
              border: `1px dashed ${d.cardDashBorder}`,
              backdropFilter: "blur(10px)"
            },
            onClick: () => A("custom-test"),
            onMouseDown: e => e.currentTarget.style.transform = "scale(0.97)",
            onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
            onMouseLeave: e => e.currentTarget.style.transform = "scale(1)",
            children: [t.jsx("div", {
              style: {
                width: "48px",
                height: "48px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #F5F7FA 0%, #E8ECF1 100%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                boxShadow: "inset 0 2px 4px rgba(255,255,255,0.8), 0 4px 8px rgba(0,0,0,0.05)"
              },
              children: t.jsx(T, {
                size: 22,
                color: "#718096"
              })
            }), t.jsxs("div", {
              style: {
                flex: 1
              },
              children: [t.jsx("div", {
                style: {
                  fontSize: "15px",
                  fontWeight: "700",
                  color: d.textSecondary,
                  marginBottom: "4px"
                },
                children: s("customTestCreateNew")
              }), t.jsx("div", {
                style: {
                  fontSize: "12px",
                  color: d.textMuted,
                  fontWeight: "500"
                },
                children: s("customTestManageHint")
              })]
            }), t.jsx("div", {
              style: {
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: d.chevronBg,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: d.chevronColor
              },
              children: t.jsx(S, {
                size: 16,
                style: {
                  transform: "rotate(180deg)"
                }
              })
            })]
          })]
        })]
      }), t.jsxs("div", {
        style: {
          marginBottom: "20px",
          padding: "0 20px"
        },
        children: [t.jsx("div", {
          style: {
            display: "flex",
            alignItems: "center",
            marginBottom: "16px",
            paddingLeft: "4px"
          },
          children: t.jsxs("h2", {
            style: {
              fontSize: "17px",
              fontWeight: "800",
              color: d.textPrimary,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              margin: 0
            },
            children: [t.jsx(D, {
              size: 20,
              color: "#48BB78"
            }), " ", s("customGameTitle")]
          })
        }), t.jsxs("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "12px"
          },
          children: [y.map(e => t.jsxs("div", {
            style: {
              background: d.cardBg,
              borderRadius: "20px",
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
              cursor: "pointer",
              transition: "transform 0.2s",
              border: `1px solid ${d.cardBorder}`,
              backdropFilter: "blur(10px)",
              position: "relative",
              overflow: "hidden"
            },
            onClick: () => {
              t = e.id;
              localStorage.setItem("custom_game_play_id", String(t));
              n("custom-game-player-screen");
              return;
              var t;
            },
            onMouseDown: e => e.currentTarget.style.transform = "scale(0.97)",
            onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
            onMouseLeave: e => e.currentTarget.style.transform = "scale(1)",
            children: [t.jsx("div", {
              style: {
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "4px",
                background: e.coverColor || "#48BB78",
                borderRadius: "20px 0 0 20px"
              }
            }), t.jsx("div", {
              style: {
                width: "48px",
                height: "48px",
                borderRadius: "16px",
                background: `linear-gradient(135deg, ${e.coverColor || "#48BB78"}33 0%, ${e.coverColor || "#48BB78"}11 100%)`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                border: `1px solid ${e.coverColor || "#48BB78"}44`,
                fontSize: "24px"
              },
              children: e.icon || "🎮"
            }), t.jsxs("div", {
              style: {
                flex: 1,
                minWidth: 0
              },
              children: [t.jsx("div", {
                style: {
                  fontSize: "15px",
                  fontWeight: "700",
                  color: d.textPrimary,
                  marginBottom: "4px"
                },
                children: e.title || "—"
              }), t.jsx("div", {
                style: {
                  fontSize: "12px",
                  color: d.textMuted,
                  fontWeight: "500",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: e.description || s("customGameManageHint")
              })]
            }), t.jsx("div", {
              style: {
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: d.chevronBg,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: d.chevronColor
              },
              children: t.jsx(S, {
                size: 16,
                style: {
                  transform: "rotate(180deg)"
                }
              })
            })]
          }, e.id)), t.jsxs("div", {
            style: {
              background: d.cardBg,
              borderRadius: "20px",
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
              cursor: "pointer",
              transition: "transform 0.2s",
              border: `1px dashed ${d.cardDashBorder}`,
              backdropFilter: "blur(10px)"
            },
            onClick: () => n("custom-game-screen"),
            onMouseDown: e => e.currentTarget.style.transform = "scale(0.97)",
            onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
            onMouseLeave: e => e.currentTarget.style.transform = "scale(1)",
            children: [t.jsx("div", {
              style: {
                width: "48px",
                height: "48px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #F0FFF4 0%, #C6F6D5 100%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0
              },
              children: t.jsx(T, {
                size: 22,
                color: "#38A169"
              })
            }), t.jsxs("div", {
              style: {
                flex: 1
              },
              children: [t.jsx("div", {
                style: {
                  fontSize: "15px",
                  fontWeight: "700",
                  color: d.textSecondary,
                  marginBottom: "4px"
                },
                children: s("customGameCreateNew")
              }), t.jsx("div", {
                style: {
                  fontSize: "12px",
                  color: d.textMuted,
                  fontWeight: "500"
                },
                children: s("customGameManageHint")
              })]
            }), t.jsx("div", {
              style: {
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: d.chevronBg,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: d.chevronColor
              },
              children: t.jsx(S, {
                size: 16,
                style: {
                  transform: "rotate(180deg)"
                }
              })
            })]
          })]
        })]
      })]
    })]
  });
};
export { _ as default };