import { r as e, j as t } from "./vendor-react-B2VXkTUV.js";
import { c as o, a as i, bE as n, y as r, d as s, be as l } from "./native-pet-CTNtZgMA.js";
import { x as a, bC as d, P as c, d as p, ay as x, bA as u, T as m, X as h, U as g, bk as f, O as y } from "./vendor-lucide-DBv09HTV.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
const b = ["🎮", "🕹️", "🎲", "🃏", "🎯", "🏆", "⚔️", "🧩", "🌍", "🚀", "🔮", "🎪", "🐉", "🦄", "💡", "🎭", "🧸", "🎨", "🎵", "🌈", "🔥", "⚡", "🌟", "💎"];
const j = ["#9F7AEA", "#E53E3E", "#DD6B20", "#D69E2E", "#38A169", "#3182CE", "#805AD5", "#D53F8C", "#319795", "#718096", "#2B6CB0", "#C05621"];
const v = () => n.getAll();
const C = e => n.add(e);
const S = ({
  game: e,
  onPlay: o,
  onEdit: i,
  onExport: n,
  onDelete: r,
  t: s
}) => t.jsxs("div", {
  style: {
    background: "rgba(255,255,255,0.85)",
    borderRadius: "20px",
    padding: "16px 20px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
    border: "1px solid rgba(255,255,255,1)",
    backdropFilter: "blur(10px)",
    position: "relative",
    overflow: "hidden"
  },
  children: [t.jsx("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: "4px",
      background: e.coverColor || "#9F7AEA",
      borderRadius: "20px 0 0 20px"
    }
  }), t.jsx("div", {
    style: {
      width: "48px",
      height: "48px",
      borderRadius: "16px",
      background: `linear-gradient(135deg, ${e.coverColor || "#9F7AEA"}33 0%, ${e.coverColor || "#9F7AEA"}11 100%)`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      border: `1px solid ${e.coverColor || "#9F7AEA"}44`,
      fontSize: "24px"
    },
    children: e.icon || "🎮"
  }), t.jsxs("div", {
    style: {
      flex: 1,
      minWidth: 0
    },
    children: [t.jsxs("div", {
      style: {
        fontSize: "15px",
        fontWeight: "700",
        color: "#2D3748",
        marginBottom: "4px",
        display: "flex",
        alignItems: "center",
        gap: "6px"
      },
      children: [t.jsx("span", {
        style: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        children: e.title || "—"
      }), e.usesAI && t.jsx("span", {
        title: s("customGameUsesAiBadge"),
        style: {
          fontSize: "9px",
          fontWeight: "700",
          color: "#805AD5",
          background: "#E9D8FD",
          padding: "1px 6px",
          borderRadius: "6px",
          flexShrink: 0,
          letterSpacing: "0.5px"
        },
        children: "AI"
      })]
    }), t.jsx("div", {
      style: {
        fontSize: "12px",
        color: "#A0AEC0",
        fontWeight: "500",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      },
      children: e.description || "—"
    })]
  }), t.jsxs("div", {
    style: {
      display: "flex",
      gap: "8px",
      flexShrink: 0
    },
    children: [t.jsx("button", {
      onClick: () => o(e),
      style: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        background: e.coverColor || "#9F7AEA",
        border: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
      },
      children: t.jsx(p, {
        size: 14,
        color: "#fff",
        fill: "#fff"
      })
    }), t.jsx("button", {
      onClick: () => i(e),
      style: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        background: "#EDF2F7",
        border: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
      },
      children: t.jsx(x, {
        size: 14,
        color: "#718096"
      })
    }), t.jsx("button", {
      onClick: () => n(e),
      style: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        background: "#EDF2F7",
        border: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
      },
      children: t.jsx(u, {
        size: 14,
        color: "#718096"
      })
    }), t.jsx("button", {
      onClick: () => r(e),
      style: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        background: "#FFF5F5",
        border: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
      },
      children: t.jsx(m, {
        size: 14,
        color: "#E53E3E"
      })
    })]
  })]
});
const k = ({
  game: o,
  onSave: i,
  onClose: n,
  t: r
}) => {
  const [s, l] = e.useState((o == null ? undefined : o.title) || "");
  const [a, d] = e.useState((o == null ? undefined : o.description) || "");
  const [c, p] = e.useState((o == null ? undefined : o.icon) || "🎮");
  const [x, u] = e.useState((o == null ? undefined : o.coverColor) || "#9F7AEA");
  const [m, v] = e.useState((o == null ? undefined : o.htmlContent) || "");
  const [C, S] = e.useState("");
  const k = e.useRef(null);
  const w = !(o == null ? undefined : o.id);
  const A = e => `<!DOCTYPE html>\n<html lang="zh">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">\n<style>*{margin:0;padding:0;box-sizing:border-box}html,body{width:100vw;height:100vh;overflow:hidden;touch-action:none}</style>\n</head>\n<body>\n<script>\n${e}\n<\/script>\n</body>\n</html>`;
  const F = e => {
    try {
      const t = JSON.parse(e);
      if (t.type === "nuojiji-custom-game" && t.html) {
        return t;
      }
    } catch {}
    return null;
  };
  return t.jsx("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      zIndex: 9999,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    },
    children: t.jsxs("div", {
      style: {
        background: "#fff",
        borderRadius: "24px 24px 0 0",
        padding: "24px 20px 40px",
        width: "100%",
        maxHeight: "85vh",
        overflowY: "auto"
      },
      children: [t.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "24px"
        },
        children: [t.jsx("h2", {
          style: {
            fontSize: "18px",
            fontWeight: "800",
            color: "#2D3748",
            margin: 0
          },
          children: r(w ? "customGameCreateNew" : "customGameEdit")
        }), t.jsx("button", {
          onClick: n,
          style: {
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "#F7FAFC",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer"
          },
          children: t.jsx(h, {
            size: 16,
            color: "#718096"
          })
        })]
      }), t.jsxs("div", {
        style: {
          marginBottom: "16px"
        },
        children: [t.jsx("label", {
          style: {
            fontSize: "13px",
            fontWeight: "600",
            color: "#4A5568",
            marginBottom: "8px",
            display: "block"
          },
          children: r("customGameTitleLabel")
        }), t.jsx("input", {
          value: s,
          onChange: e => l(e.target.value),
          placeholder: r("customGameTitlePlaceholder"),
          style: {
            width: "100%",
            padding: "12px 16px",
            borderRadius: "12px",
            border: "1.5px solid #E2E8F0",
            fontSize: "15px",
            outline: "none",
            boxSizing: "border-box"
          }
        })]
      }), t.jsxs("div", {
        style: {
          marginBottom: "16px"
        },
        children: [t.jsx("label", {
          style: {
            fontSize: "13px",
            fontWeight: "600",
            color: "#4A5568",
            marginBottom: "8px",
            display: "block"
          },
          children: r("customGameDescLabel")
        }), t.jsx("textarea", {
          value: a,
          onChange: e => d(e.target.value),
          placeholder: r("customGameDescPlaceholder"),
          rows: 2,
          style: {
            width: "100%",
            padding: "12px 16px",
            borderRadius: "12px",
            border: "1.5px solid #E2E8F0",
            fontSize: "14px",
            outline: "none",
            boxSizing: "border-box",
            resize: "none"
          }
        })]
      }), t.jsxs("div", {
        style: {
          marginBottom: "16px"
        },
        children: [t.jsx("label", {
          style: {
            fontSize: "13px",
            fontWeight: "600",
            color: "#4A5568",
            marginBottom: "8px",
            display: "block"
          },
          children: r("customGameIconLabel")
        }), t.jsx("div", {
          style: {
            display: "flex",
            flexWrap: "wrap",
            gap: "8px"
          },
          children: b.map(e => t.jsx("button", {
            onClick: () => p(e),
            style: {
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              fontSize: "20px",
              background: c === e ? x + "33" : "#F7FAFC",
              border: c === e ? `2px solid ${x}` : "2px solid transparent",
              cursor: "pointer"
            },
            children: e
          }, e))
        })]
      }), t.jsxs("div", {
        style: {
          marginBottom: "16px"
        },
        children: [t.jsx("label", {
          style: {
            fontSize: "13px",
            fontWeight: "600",
            color: "#4A5568",
            marginBottom: "8px",
            display: "block"
          },
          children: r("customGameColorLabel")
        }), t.jsx("div", {
          style: {
            display: "flex",
            flexWrap: "wrap",
            gap: "8px"
          },
          children: j.map(e => t.jsx("button", {
            onClick: () => u(e),
            style: {
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: e,
              border: x === e ? "3px solid #333" : "3px solid transparent",
              cursor: "pointer"
            }
          }, e))
        })]
      }), t.jsxs("div", {
        style: {
          marginBottom: "20px"
        },
        children: [t.jsx("label", {
          style: {
            fontSize: "13px",
            fontWeight: "600",
            color: "#4A5568",
            marginBottom: "8px",
            display: "block"
          },
          children: r("customGameUploadHtml")
        }), t.jsx("input", {
          ref: k,
          type: "file",
          accept: ".html,.htm,.js,.json,.nuo-game,.txt",
          onChange: e => {
            var t;
            const o = (t = e.target.files) == null ? undefined : t[0];
            if (!o) {
              return;
            }
            S(o.name);
            const i = new FileReader();
            i.onload = e => {
              const t = e.target.result;
              const i = o.name.toLowerCase();
              if (i.endsWith(".nuo-game") || i.endsWith(".json")) {
                const e = F(t);
                if (e) {
                  v(e.html || "");
                  if (!s && e.title) {
                    l(e.title);
                  }
                  if (!a && e.description) {
                    d(e.description);
                  }
                  if (e.icon) {
                    p(e.icon);
                  }
                  if (e.coverColor) {
                    u(e.coverColor);
                  }
                  return;
                } else {
                  alert(r("customGameInvalidFile"));
                  return;
                }
              }
              if (i.endsWith(".js")) {
                v(A(t));
                return;
              }
              if (i.endsWith(".html") || i.endsWith(".htm")) {
                v(t);
                return;
              }
              const n = F(t);
              if (n) {
                v(n.html || "");
                if (!s && n.title) {
                  l(n.title);
                }
                if (!a && n.description) {
                  d(n.description);
                }
                if (n.icon) {
                  p(n.icon);
                }
                if (n.coverColor) {
                  u(n.coverColor);
                }
                return;
              }
              if (/<html|<!doctype|<head|<body|<script/i.test(t)) {
                v(t);
              } else {
                v(A(t));
              }
            };
            i.readAsText(o);
          },
          style: {
            display: "none"
          }
        }), t.jsxs("button", {
          onClick: () => {
            var e;
            if ((e = k.current) == null) {
              return undefined;
            } else {
              return e.click();
            }
          },
          style: {
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "2px dashed #CBD5E0",
            background: "#F7FAFC",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            cursor: "pointer",
            fontSize: "14px",
            color: "#718096"
          },
          children: [t.jsx(g, {
            size: 16
          }), C ? `${r("customGameUploadedFile")}: ${C}` : r(m ? "customGameUploadedFile" : "customGameUploadHint")]
        }), t.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "flex-start",
            gap: "8px",
            marginTop: "10px",
            padding: "10px 12px",
            background: "#EBF8FF",
            borderRadius: "10px"
          },
          children: [t.jsx(f, {
            size: 14,
            color: "#3182CE",
            style: {
              flexShrink: 0,
              marginTop: "2px"
            }
          }), t.jsxs("div", {
            style: {
              fontSize: "11px",
              color: "#2B6CB0",
              lineHeight: "1.5"
            },
            children: [r("customGameSdkHint"), t.jsx("br", {}), t.jsx("code", {
              style: {
                fontSize: "10px",
                opacity: 0.8
              },
              children: "Nuojiji.getUser() / .getChar(id) / .getCharList() / .ai(opts) / .close()"
            })]
          })]
        })]
      }), t.jsxs("button", {
        onClick: () => {
          if (!s.trim()) {
            alert(r("customGameTitleLabel") + " ?");
            return;
          }
          if (!m && w) {
            alert(r("customGameNoFile"));
            return;
          }
          const e = m ? /Nuojiji\.ai\s*\(|aiSummarizeAndSend/.test(m) : (o == null ? undefined : o.usesAI) || false;
          i({
            title: s.trim(),
            description: a.trim(),
            icon: c,
            coverColor: x,
            htmlContent: m,
            usesAI: e
          });
        },
        style: {
          width: "100%",
          padding: "16px",
          borderRadius: "14px",
          background: x,
          color: "#fff",
          border: "none",
          fontSize: "16px",
          fontWeight: "700",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px"
        },
        children: [t.jsx(y, {
          size: 18
        }), r("customGameSaved")]
      })]
    })
  });
};
const w = () => {
  const {
    currentScreen: p,
    showScreen: x
  } = o();
  const {
    t: u
  } = i();
  const m = p === "custom-game-screen";
  const [h, g] = e.useState([]);
  const [f, y] = e.useState(false);
  const [b, j] = e.useState(null);
  const w = e.useRef(null);
  e.useEffect(() => {
    if (m) {
      v().then(g);
    }
  }, [m]);
  e.useEffect(() => {
    if (!m) {
      return;
    }
    const e = localStorage.getItem("custom_game_action");
    if (e) {
      localStorage.removeItem("custom_game_action");
      try {
        const {
          action: t,
          gameId: o
        } = JSON.parse(e);
        if (t === "play" && o) {
          localStorage.setItem("custom_game_play_id", String(o));
          x("custom-game-player-screen");
        }
      } catch {}
    }
  }, [m, x]);
  const A = e => {
    localStorage.setItem("custom_game_play_id", String(e.id));
    x("custom-game-player-screen");
  };
  const F = e => {
    j(e);
    y(true);
  };
  const E = async e => {
    var t;
    if (await r(u("customGameDeleteConfirm"))) {
      await (t = e.id, n.delete(t));
      g(t => t.filter(t => t.id !== e.id));
    }
  };
  const z = async e => {
    const t = {
      version: 1,
      type: "nuojiji-custom-game",
      title: e.title,
      description: e.description,
      icon: e.icon,
      coverColor: e.coverColor,
      html: e.htmlContent,
      usesAI: e.usesAI || false
    };
    const o = new Blob([JSON.stringify(t, null, 2)], {
      type: "application/json"
    });
    const i = `${e.title || "game"}.nuo-game`;
    if (s() && (await l(o, i)).success) {
      return;
    }
    const n = URL.createObjectURL(o);
    const r = document.createElement("a");
    r.href = n;
    r.download = i;
    r.click();
    URL.revokeObjectURL(n);
  };
  return t.jsxs("div", {
    id: "custom-game-screen",
    className: "screen " + (m ? "active" : ""),
    style: {
      backgroundColor: "#FAFAFC",
      backgroundImage: "radial-gradient(#E5E7EB 1px, transparent 1px)",
      backgroundSize: "16px 16px",
      padding: 0
    },
    children: [t.jsx("div", {
      style: {
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(255,255,255,0.7)",
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
        onClick: () => x("game-lobby-screen"),
        children: t.jsx(a, {
          size: 24
        })
      }), t.jsx("h1", {
        className: "screen-title",
        children: u("customGameTitle")
      }), t.jsxs("div", {
        style: {
          display: "flex",
          gap: "8px"
        },
        children: [t.jsx("input", {
          ref: w,
          type: "file",
          accept: ".nuo-game,.json",
          onChange: e => {
            var t;
            const o = (t = e.target.files) == null ? undefined : t[0];
            if (!o) {
              return;
            }
            const i = new FileReader();
            i.onload = async e => {
              try {
                const t = JSON.parse(e.target.result);
                if (t.type !== "nuojiji-custom-game" || !t.html) {
                  alert(u("customGameInvalidFile"));
                  return;
                }
                const i = t.usesAI || /Nuojiji\.ai\s*\(|aiSummarizeAndSend/.test(t.html || "");
                await C({
                  title: t.title || o.name,
                  description: t.description || "",
                  icon: t.icon || "🎮",
                  coverColor: t.coverColor || "#9F7AEA",
                  htmlContent: t.html,
                  usesAI: i
                });
                const n = await v();
                g(n);
              } catch {
                alert(u("customGameParseFail"));
              }
            };
            i.readAsText(o);
            e.target.value = "";
          },
          style: {
            display: "none"
          }
        }), t.jsx("button", {
          onClick: () => {
            var e;
            if ((e = w.current) == null) {
              return undefined;
            } else {
              return e.click();
            }
          },
          style: {
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "#EDF2F7",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer"
          },
          children: t.jsx(d, {
            size: 18,
            color: "#718096"
          })
        }), t.jsx("button", {
          onClick: () => {
            j(null);
            y(true);
          },
          style: {
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "#9F7AEA",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer"
          },
          children: t.jsx(c, {
            size: 18,
            color: "#fff"
          })
        })]
      })]
    }), t.jsxs("div", {
      className: "screen-content",
      style: {
        position: "relative",
        zIndex: 1,
        padding: "16px 20px 40px"
      },
      children: [h.length === 0 ? t.jsxs("div", {
        style: {
          textAlign: "center",
          paddingTop: "80px"
        },
        children: [t.jsx("div", {
          style: {
            fontSize: "56px",
            marginBottom: "16px"
          },
          children: "🕹️"
        }), t.jsx("div", {
          style: {
            fontSize: "16px",
            fontWeight: "700",
            color: "#4A5568",
            marginBottom: "8px"
          },
          children: u("customGameEmpty")
        }), t.jsx("div", {
          style: {
            fontSize: "13px",
            color: "#A0AEC0"
          },
          children: u("customGameEmptyHint")
        })]
      }) : t.jsx("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        },
        children: h.map(e => t.jsx(S, {
          game: e,
          t: u,
          onPlay: A,
          onEdit: F,
          onExport: z,
          onDelete: E
        }, e.id))
      }), t.jsxs("div", {
        style: {
          marginTop: "24px",
          background: "rgba(255,255,255,0.8)",
          borderRadius: "20px",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
          cursor: "pointer",
          border: "1.5px dashed rgba(0,0,0,0.12)",
          backdropFilter: "blur(10px)"
        },
        onClick: () => {
          j(null);
          y(true);
        },
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
            flexShrink: 0
          },
          children: t.jsx(c, {
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
              color: "#718096",
              marginBottom: "4px"
            },
            children: u("customGameCreateNew")
          }), t.jsx("div", {
            style: {
              fontSize: "12px",
              color: "#A0AEC0",
              fontWeight: "500"
            },
            children: u("customGameManageHint")
          })]
        })]
      })]
    }), f && t.jsx(k, {
      game: b,
      onSave: async e => {
        var t;
        var o;
        if (b == null ? undefined : b.id) {
          await (t = b.id, o = {
            title: e.title,
            description: e.description,
            icon: e.icon,
            coverColor: e.coverColor,
            ...(e.htmlContent ? {
              htmlContent: e.htmlContent
            } : {})
          }, n.update(t, o));
        } else {
          await C(e);
        }
        const i = await v();
        g(i);
        y(false);
        j(null);
      },
      onClose: () => {
        y(false);
        j(null);
      },
      t: u
    })]
  });
};
export { w as default };