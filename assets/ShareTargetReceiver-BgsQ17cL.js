const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["./assets/native-pet-CTNtZgMA.js", "./assets/vendor-react-B2VXkTUV.js", "./assets/vendor-dexie-KLdnSHz2.js", "./assets/vendor-jszip-DU-5YDGO.js", "./assets/vendor-lucide-DBv09HTV.js", "./assets/native-pet-D9YoqRtr.css", "./assets/desktopPetVisionComment-BUhdhZ8n.js", "./assets/main-BO9xa-SQ.js", "./assets/modulepreload-polyfill-YP0FEG5d.js", "./assets/vendor-supabase-Bcpm_8qV.js", "./assets/main-C4gkqfD0.css", "./assets/NotificationBar-y-kP9VHv.css", "./assets/vendor-fonts-BglBY6By.css"]) => i.map(i => d[i]);
import { b as e, M as t, _ as i, a7 as n, aY as a } from "./native-pet-CTNtZgMA.js";
import { r, j as o } from "./vendor-react-B2VXkTUV.js";
import { compressImageForStorage as s } from "./imageCompressor-FPWVE1FW.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
import "./vendor-lucide-DBv09HTV.js";
function d() {
  const {
    characters: d
  } = e();
  const [f, h] = r.useState(false);
  const [p, g] = r.useState(null);
  const [m, x] = r.useState("user");
  const [v, w] = r.useState([]);
  const [y, j] = r.useState(null);
  const [b, _] = r.useState([]);
  const [S, k] = r.useState(false);
  const [C, I] = r.useState(false);
  const [E, A] = r.useState(false);
  const T = r.useRef(false);
  r.useEffect(() => {
    const e = async e => {
      var t;
      var i;
      const a = (t = e == null ? undefined : e.detail) == null ? undefined : t.kind;
      if (T.current) {
        if (a === "image" && typeof window != "undefined") {
          window.__nuojiji_pending_share_image = null;
        }
        return;
      }
      let r = null;
      if (a === "text") {
        const t = (i = e == null ? undefined : e.detail) == null ? undefined : i.text;
        if (!t) {
          return;
        }
        r = {
          kind: "text",
          text: t
        };
      } else {
        if (a !== "image") {
          return;
        }
        {
          const e = typeof window != "undefined" ? window.__nuojiji_pending_share_image : null;
          if (typeof window != "undefined") {
            window.__nuojiji_pending_share_image = null;
          }
          if (!e) {
            return;
          }
          let t = e;
          try {
            t = await s(e);
          } catch (o) {
            t = e;
          }
          r = {
            kind: "image",
            image: t
          };
        }
      }
      T.current = true;
      try {
        const e = await n.getAll();
        w(Array.isArray(e) ? e : []);
      } catch (o) {
        w([]);
      }
      g(r);
      j(null);
      _([]);
      x("user");
      h(true);
    };
    window.addEventListener("share-received", e);
    return () => window.removeEventListener("share-received", e);
  }, []);
  const R = r.useCallback(async e => {
    const i = (e == null ? undefined : e.uid) || (e == null ? undefined : e.id);
    if (i) {
      j(e);
      k(true);
      try {
        const e = await t.findPairedCharIds(i);
        _(e.map(String));
      } catch (n) {
        _([]);
      } finally {
        k(false);
        x("char");
      }
    }
  }, []);
  const P = r.useCallback(() => {
    h(false);
    g(null);
    j(null);
    _([]);
    x("user");
    I(false);
    T.current = false;
  }, []);
  const z = r.useCallback(async () => {
    var e;
    var t;
    if (p && p.kind === "image" && !E) {
      A(true);
      try {
        const {
          GlobalSettingsService: r
        } = await i(async () => {
          const {
            GlobalSettingsService: e
          } = await import("./native-pet-CTNtZgMA.js").then(e => e.cy);
          return {
            GlobalSettingsService: e
          };
        }, __vite__mapDeps([0, 1, 2, 3, 4, 5]));
        const o = await r.get("desktopPetConfig");
        const s = o == null ? undefined : o.boundCharId;
        const l = Array.isArray(d) ? d : [];
        const c = l.find(e => String(e.id) === String(s)) || l[0];
        if (!c) {
          P();
          return;
        }
        let u = o == null ? undefined : o.boundUserId;
        if (!u) {
          try {
            const i = await n.getAll();
            u = ((e = i == null ? undefined : i[0]) == null ? undefined : e.uid) || ((t = i == null ? undefined : i[0]) == null ? undefined : t.id);
          } catch (a) {}
        }
        const {
          generateScreenComment: f
        } = await i(async () => {
          const {
            generateScreenComment: e
          } = await import("./desktopPetVisionComment-BUhdhZ8n.js");
          return {
            generateScreenComment: e
          };
        }, __vite__mapDeps([6, 0, 1, 2, 3, 4, 5]));
        const h = await f({
          imageDataUrl: p.image,
          charName: c.name,
          charPersona: c.persona || c.intro || ""
        });
        const g = String(h || "").split("\n").map(e => e.trim()).filter(Boolean);
        if (g.length && u) {
          const {
            appendCharVoiceToChatHistory: e
          } = await i(async () => {
            const {
              appendCharVoiceToChatHistory: e
            } = await import("./native-pet-CTNtZgMA.js").then(e => e.cN);
            return {
              appendCharVoiceToChatHistory: e
            };
          }, __vite__mapDeps([0, 1, 2, 3, 4, 5]));
          await e({
            userId: u,
            charId: c.id,
            lines: g
          });
          try {
            const {
              showNativeNotification: e
            } = await i(async () => {
              const {
                showNativeNotification: e
              } = await import("./main-BO9xa-SQ.js").then(e => e.ci);
              return {
                showNativeNotification: e
              };
            }, __vite__mapDeps([7, 8, 0, 1, 2, 3, 4, 5, 9, 10, 11, 12]));
            await e({
              title: c.name || "糯嘰機",
              body: g[0],
              icon: c.image || undefined,
              senderName: c.name || "",
              conversationId: `petvision_${c.id}`,
              data: {
                charId: c.id,
                userId: u
              }
            });
          } catch (a) {}
          window.dispatchEvent(new CustomEvent("open-chat-request", {
            detail: {
              charId: c.id,
              userId: u
            }
          }));
        }
      } catch (r) {
        console.warn("[PetVision] failed:", r == null ? undefined : r.message);
        try {
          const {
            showAlert: e
          } = await i(async () => {
            const {
              showAlert: e
            } = await import("./native-pet-CTNtZgMA.js").then(e => e.cA);
            return {
              showAlert: e
            };
          }, __vite__mapDeps([0, 1, 2, 3, 4, 5]));
          await e("桌宠吐槽失败:" + ((r == null ? undefined : r.message) || "请检查 API 设置"));
        } catch (a) {}
      } finally {
        P();
      }
    }
  }, [p, E, d, P]);
  const V = r.useCallback(async e => {
    if (!p || !e || C) {
      return;
    }
    const i = (y == null ? undefined : y.uid) || (y == null ? undefined : y.id);
    if (!i) {
      return;
    }
    const n = e.id;
    if (p.kind === "text") {
      window.dispatchEvent(new CustomEvent("open-chat-request", {
        detail: {
          charId: n,
          userId: i
        }
      }));
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("chat-input-fill", {
          detail: {
            text: p.text
          }
        }));
      }, 600);
    } else if (p.kind === "image") {
      I(true);
      try {
        const e = {
          id: a(),
          text: "[圖片]",
          image: p.image,
          sender: "me",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          }),
          timestamp: Date.now()
        };
        await t.writeThrough(i, n, e);
        window.dispatchEvent(new CustomEvent("open-chat-request", {
          detail: {
            charId: n,
            userId: i
          }
        }));
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent("reload-message-history", {
            detail: {
              userId: i,
              characterId: String(n),
              reason: "share-image"
            }
          }));
        }, 400);
      } catch (r) {
        console.warn("[ShareTarget] 图片写入失败:", r);
      }
    }
    P();
  }, [p, y, P, C]);
  if (!f) {
    return null;
  }
  const D = (Array.isArray(d) ? d : []).filter(e => b.includes(String(e.id)));
  return o.jsx("div", {
    onClick: P,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 99999,
      background: "rgba(0,0,0,0.55)",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    },
    children: o.jsxs("div", {
      onClick: e => e.stopPropagation(),
      style: {
        width: "100%",
        maxWidth: 480,
        maxHeight: "72vh",
        background: "#ffffff",
        borderRadius: "18px 18px 0 0",
        paddingBottom: "calc(16px + var(--nuo-safe-bottom, 0px))",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.25)"
      },
      children: [o.jsxs("div", {
        style: {
          padding: "16px 18px 10px",
          borderBottom: "1px solid #f0f0f0"
        },
        children: [o.jsx("div", {
          style: {
            fontSize: 16,
            fontWeight: 700,
            color: "#222"
          },
          children: "分享到糯叽机"
        }), o.jsxs("div", {
          style: {
            fontSize: 12.5,
            color: "#999",
            marginTop: 4
          },
          children: [(p == null ? undefined : p.kind) === "image" ? "把这张图片发给…" : "把内容填进谁的聊天框…", m === "char" && y ? `（用户:${y.name || "未命名"}）` : ""]
        })]
      }), (p == null ? undefined : p.kind) === "text" && o.jsx("div", {
        style: {
          margin: "10px 18px 0",
          padding: "8px 12px",
          background: "#f6f7f9",
          borderRadius: 10,
          fontSize: 13,
          color: "#555",
          maxHeight: 72,
          overflow: "auto",
          wordBreak: "break-all"
        },
        children: p.text
      }), (p == null ? undefined : p.kind) === "image" && o.jsx("div", {
        style: {
          margin: "10px 18px 0",
          textAlign: "center"
        },
        children: o.jsx("img", {
          src: p.image,
          alt: "分享图片",
          style: {
            maxHeight: 120,
            maxWidth: "100%",
            borderRadius: 10,
            objectFit: "contain"
          }
        })
      }), (p == null ? undefined : p.kind) === "image" && m === "user" && o.jsxs("div", {
        style: {
          margin: "10px 18px 0"
        },
        children: [o.jsx("button", {
          onClick: z,
          disabled: E,
          style: {
            width: "100%",
            padding: "11px",
            border: "none",
            borderRadius: 12,
            background: E ? "#e8d5dd" : "linear-gradient(90deg,#ff8fb3,#ffb38f)",
            color: "#fff",
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer"
          },
          children: E ? "桌宠正在看…" : "🔍 让桌宠看看这张图(吐槽)"
        }), o.jsx("div", {
          style: {
            fontSize: 11,
            color: "#aaa",
            textAlign: "center",
            marginTop: 6
          },
          children: "或选下方用户把图发进聊天 ↓"
        })]
      }), o.jsxs("div", {
        style: {
          flex: 1,
          overflowY: "auto",
          padding: "10px 12px"
        },
        children: [m === "user" && (v.length === 0 ? o.jsx(c, {
          text: "没有可用的用户"
        }) : v.map(e => o.jsx(l, {
          avatar: e.avatar || e.image,
          name: e.name || "未命名用户",
          onClick: () => R(e)
        }, e.uid || e.id))), m === "char" && (C ? o.jsx(c, {
          text: "正在发送…"
        }) : S ? o.jsx(c, {
          text: "加载中…"
        }) : D.length === 0 ? o.jsx(c, {
          text: "这个用户还没有聊过的角色"
        }) : D.map(e => o.jsx(l, {
          avatar: e.image,
          name: e.name,
          onClick: () => V(e)
        }, e.id)))]
      }), o.jsxs("div", {
        style: {
          display: "flex",
          gap: 10,
          padding: "8px 18px 0"
        },
        children: [m === "char" && o.jsx("button", {
          onClick: () => {
            x("user");
            j(null);
          },
          style: u("#f0f0f0", "#555"),
          children: "返回选用户"
        }), o.jsx("button", {
          onClick: P,
          style: u("#f0f0f0", "#888"),
          children: "取消"
        })]
      })]
    })
  });
}
function l({
  avatar: e,
  name: t,
  onClick: i
}) {
  return o.jsxs("div", {
    onClick: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 12px",
      borderRadius: 12,
      cursor: "pointer"
    },
    onTouchStart: e => {
      e.currentTarget.style.background = "#f2f4f7";
    },
    onTouchEnd: e => {
      e.currentTarget.style.background = "transparent";
    },
    children: [o.jsx("div", {
      style: {
        width: 42,
        height: 42,
        borderRadius: "50%",
        flexShrink: 0,
        background: "#e8eaed",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      children: e ? o.jsx("img", {
        src: e,
        alt: "",
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }
      }) : o.jsx("span", {
        style: {
          fontSize: 18,
          color: "#aaa"
        },
        children: (t || "?")[0]
      })
    }), o.jsx("span", {
      style: {
        fontSize: 15,
        color: "#222",
        fontWeight: 500
      },
      children: t
    })]
  });
}
function c({
  text: e
}) {
  return o.jsx("div", {
    style: {
      textAlign: "center",
      color: "#aaa",
      fontSize: 13,
      padding: "32px 0"
    },
    children: e
  });
}
function u(e, t) {
  return {
    flex: 1,
    padding: "11px",
    border: "none",
    borderRadius: 12,
    background: e,
    color: t,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer"
  };
}
export { d as default };