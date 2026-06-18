import { r as e, d as r, j as i } from "./vendor-react-B2VXkTUV.js";
import { G as t, B as o, ah as n, ai as a, aj as l } from "./native-pet-CTNtZgMA.js";
import { g as s } from "./imageGenWorldBook-BtUaGdHO.js";
function d({
  open: d,
  onClose: c,
  initialDesc: p = "",
  char: g,
  charAppearance: x,
  user: h,
  userId: u,
  characters: m,
  location: f = "",
  sceneType: y = "chat",
  subjectOverride: b = null,
  busy: v = false,
  onConfirm: j
}) {
  const [S, w] = e.useState("");
  const [k, A] = e.useState(false);
  const [P, I] = e.useState(null);
  const [z, T] = e.useState(null);
  const [F, R] = e.useState(() => typeof window != "undefined" ? window.innerHeight : 800);
  const C = e.useRef(null);
  const B = e.useRef(null);
  e.useEffect(() => {
    if (!d) {
      return;
    }
    const e = typeof window != "undefined" ? window.visualViewport : null;
    const r = () => {
      const r = e ? e.height : window.innerHeight;
      R(r);
    };
    r();
    if (e) {
      e.addEventListener("resize", r);
      e.addEventListener("scroll", r);
      return () => {
        e.removeEventListener("resize", r);
        e.removeEventListener("scroll", r);
      };
    } else {
      window.addEventListener("resize", r);
      return () => window.removeEventListener("resize", r);
    }
  }, [d]);
  e.useEffect(() => {
    if (d && C.current && B.current) {
      B.current.scrollTop = 0;
    }
  }, [d, F]);
  e.useEffect(() => {
    if (!d) {
      return;
    }
    w(p || "");
    A(false);
    I(null);
    T(null);
    let e = false;
    (async () => {
      try {
        const r = await t.get("apiSettings");
        let i = x || "";
        let a = "prop";
        let l = [];
        let d = null;
        if (!i && (g == null ? undefined : g.imagePrompt)) {
          i = g.imagePrompt;
          a = "roster";
        }
        if (u) {
          try {
            const e = await o.getByUser(u);
            const r = new Map((e || []).map(e => [String(e.characterId), e]));
            if (g == null ? undefined : g.id) {
              const e = r.get(String(g.id));
              if (e == null ? undefined : e.imagePreset) {
                d = e.imagePreset;
              }
              if (!i && (e == null ? undefined : e.charImagePrompt)) {
                i = e.charImagePrompt;
                a = "chatSettings";
              }
            }
            if (Array.isArray(m)) {
              l = m.map(e => {
                var i;
                return {
                  id: e.id,
                  name: e.name,
                  gender: e.gender,
                  imagePrompt: e.imagePrompt || ((i = r.get(String(e.id))) == null ? undefined : i.charImagePrompt) || n(e.description) || ""
                };
              }).filter(e => e.name);
            }
          } catch {}
        }
        if (!i) {
          i = n(g == null ? undefined : g.description) || "";
          a = i ? "description-fallback" : "empty";
        }
        const c = await s({
          char: g,
          mode: "matched",
          scanText: p,
          apiSettings: r
        });
        if (!e) {
          I({
            apiSettings: r,
            wbExtra: c,
            charAppearance: i,
            charAppearanceSource: a,
            extraChars: l,
            imagePreset: d
          });
        }
      } catch {
        if (!e) {
          I({
            apiSettings: null,
            wbExtra: "",
            charAppearance: x || "",
            charAppearanceSource: "error",
            imagePreset: null
          });
        }
      }
    })();
    return () => {
      e = true;
    };
  }, [d, p, g, x, u, m]);
  e.useEffect(() => {
    if (!d || !(P == null ? undefined : P.apiSettings)) {
      T(null);
      return;
    }
    const e = S.trim();
    if (!e) {
      T(null);
      return;
    }
    let r = false;
    (async () => {
      try {
        let i;
        let t = null;
        if (k) {
          i = e;
        } else {
          const r = a({
            rawImgDesc: e,
            subjectOverride: b,
            char: g,
            charAppearance: P.charAppearance,
            user: h,
            location: f,
            extraChars: P.extraChars,
            sceneType: y,
            apiSettings: P.apiSettings,
            imagePreset: P.imagePreset
          });
          i = r.prompt;
          t = r.structured;
        }
        const o = await l(i, y, P.apiSettings, {
          structured: t,
          dryRun: true,
          imagePreset: P.imagePreset
        });
        if (!r) {
          T(o || {
            error: "無可用 API（沒啟用任何生圖 API？）"
          });
        }
      } catch (i) {
        if (!r) {
          T({
            error: (i == null ? undefined : i.message) || "dry-run failed"
          });
        }
      }
    })();
    return () => {
      r = true;
    };
  }, [d, P, S, k, g, h, f, y, b]);
  if (!d) {
    return null;
  }
  const E = Math.max(200, F - 24);
  return r.createPortal(i.jsx("div", {
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
    onClick: c,
    children: i.jsxs("div", {
      ref: B,
      onClick: e => e.stopPropagation(),
      style: {
        width: "min(94vw, 540px)",
        maxHeight: `${E}px`,
        overflowY: "auto",
        WebkitOverflowScrolling: "touch",
        background: "#fff",
        borderRadius: "16px",
        padding: "20px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.3)"
      },
      children: [i.jsx("div", {
        style: {
          fontSize: "15px",
          fontWeight: 700,
          color: "#111",
          marginBottom: "4px"
        },
        children: "編輯提示詞並重新生圖"
      }), i.jsx("div", {
        style: {
          fontSize: "12px",
          color: "#888",
          marginBottom: "12px",
          lineHeight: 1.55
        },
        children: "修改後即時預覽下方「最終送 API」結果。預設會走完整 prompt 組裝（自動加角色外觀 / 預設詞 / 世界書）；勾選「直接送原文」則完全照你寫的內容呼叫 API。"
      }), i.jsx("div", {
        style: {
          fontSize: "12px",
          fontWeight: 600,
          color: "#555",
          marginBottom: "6px"
        },
        children: "① 圖片描述（rawImgDesc）"
      }), i.jsx("textarea", {
        ref: C,
        value: S,
        onChange: e => w(e.target.value),
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
      }), i.jsxs("label", {
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
        children: [i.jsx("input", {
          type: "checkbox",
          checked: k,
          onChange: e => A(e.target.checked)
        }), "直接送原文（跳過 buildFinalPrompt，由你完全控制送 API 的內容）"]
      }), i.jsxs("div", {
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
        children: [i.jsx("div", {
          style: {
            fontFamily: "inherit",
            fontWeight: 700,
            color: "#555",
            marginBottom: "8px",
            fontSize: "12px"
          },
          children: "② 實際 HTTP 請求（dryRun，未真的送出）"
        }), S.trim() && S.trim().length < 30 && i.jsxs("div", {
          style: {
            marginBottom: "8px",
            padding: "8px 10px",
            background: "#ffe5e5",
            border: "1px solid #ff9d9d",
            borderRadius: "6px",
            color: "#a00",
            fontSize: "11px",
            lineHeight: 1.55,
            fontFamily: "inherit"
          },
          children: ["⚠️ 圖片描述只有 ", S.trim().length, " 字元 — AI 可能偷懶或 token 不夠就停了。建議手動補完描述（pose / lighting / outfit / setting...）再重 roll，否則會生出空泛的圖。"]
        }), P && i.jsxs("div", {
          style: {
            marginBottom: "8px",
            padding: "8px 10px",
            background: P.charAppearanceSource === "chatSettings" ? "#e3f7e8" : P.charAppearanceSource === "description-fallback" ? "#fff3cd" : "#f0f0f0",
            border: "1px solid " + (P.charAppearanceSource === "chatSettings" ? "#9bd9a8" : P.charAppearanceSource === "description-fallback" ? "#ffd97a" : "#ccc"),
            borderRadius: "6px",
            color: "#444",
            fontSize: "11px",
            lineHeight: 1.55,
            fontFamily: "inherit",
            wordBreak: "break-word",
            whiteSpace: "pre-wrap"
          },
          children: [i.jsx("div", {
            style: {
              fontWeight: 700,
              marginBottom: "4px",
              color: "#333"
            },
            children: "charAppearance 診斷"
          }), i.jsxs("div", {
            children: ["來源：", i.jsx("code", {
              style: {
                background: "rgba(0,0,0,0.06)",
                padding: "1px 4px",
                borderRadius: 3
              },
              children: P.charAppearanceSource
            })]
          }), i.jsxs("div", {
            style: {
              marginTop: "4px"
            },
            children: ["值（", (P.charAppearance || "").length, " 字元）："]
          }), i.jsx("div", {
            style: {
              marginTop: "2px",
              padding: "4px 6px",
              background: "rgba(255,255,255,0.7)",
              borderRadius: "4px",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: "10.5px",
              maxHeight: "90px",
              overflowY: "auto"
            },
            children: P.charAppearance || "(空 — char_caption 將只含 1girl/1boy 性別 tag)"
          }), P.charAppearanceSource === "description-fallback" && i.jsxs("div", {
            style: {
              marginTop: "6px",
              color: "#7a5500"
            },
            children: ["⚠️ 你沒設 charImagePrompt → 用 description 撈。建議去 ", i.jsx("b", {
              children: "聊天詳情 → 設定 → 角色外觀提示詞（生圖用）"
            }), " 填純英文 Danbooru tag（例如 ", i.jsx("code", {
              children: "1boy, silver hair, gold eyes, white robe"
            }), "）。"]
          }), P.charAppearanceSource === "chatSettings" && /[一-鿿]{20,}/.test(P.charAppearance) && i.jsx("div", {
            style: {
              marginTop: "6px",
              color: "#7a5500"
            },
            children: "⚠️ charImagePrompt 是讀到了，但內容含大量中文。NovelAI 是 Danbooru 訓練（英文 tag），中文敘事效果差。建議改寫成英文 tag 串。"
          })]
        }), P ? S.trim() ? z ? z.error ? i.jsxs("div", {
          style: {
            color: "#c00"
          },
          children: ["error: ", z.error]
        }) : i.jsxs(i.Fragment, {
          children: [i.jsxs("div", {
            children: [i.jsx("span", {
              style: {
                color: "#0070d6",
                fontWeight: 700
              },
              children: z.method
            }), " ", i.jsx("span", {
              style: {
                color: "#444"
              },
              children: z.url
            }), i.jsxs("span", {
              style: {
                color: "#888"
              },
              children: ["  // api=", z.api]
            })]
          }), z.note && i.jsxs("div", {
            style: {
              marginTop: "4px",
              color: "#888"
            },
            children: ["# ", z.note]
          }), z.headers && Object.keys(z.headers).length > 0 && i.jsxs(i.Fragment, {
            children: [i.jsx("div", {
              style: {
                marginTop: "8px",
                color: "#888"
              },
              children: "# headers"
            }), i.jsx("div", {
              children: Object.entries(z.headers).map(([e, r]) => `${e}: ${r}`).join("\n")
            })]
          }), z.body !== null && z.body !== undefined && i.jsxs(i.Fragment, {
            children: [i.jsx("div", {
              style: {
                marginTop: "8px",
                color: "#888"
              },
              children: "# body"
            }), i.jsx("div", {
              children: JSON.stringify(z.body, null, 2)
            })]
          }), z.api === "pollinations" && z.directUrl && z.directUrl !== z.url && i.jsxs(i.Fragment, {
            children: [i.jsx("div", {
              style: {
                marginTop: "8px",
                color: "#888"
              },
              children: "# underlying directUrl（被代理包裝）"
            }), i.jsx("div", {
              style: {
                color: "#666"
              },
              children: z.directUrl
            })]
          })]
        }) : i.jsx("div", {
          style: {
            color: "#999"
          },
          children: "計算中…"
        }) : i.jsx("div", {
          style: {
            color: "#999"
          },
          children: "(輸入描述後顯示請求預覽)"
        }) : i.jsx("div", {
          style: {
            color: "#999"
          },
          children: "載入中…"
        })]
      }), i.jsxs("div", {
        style: {
          display: "flex",
          gap: "10px",
          marginTop: "14px"
        },
        children: [i.jsx("button", {
          onClick: c,
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
        }), i.jsx("button", {
          onClick: async () => {
            const e = S.trim();
            if (e && !v) {
              await j({
                rawImgDesc: e,
                useRaw: k
              });
            }
          },
          disabled: !S.trim() || v,
          style: {
            flex: 1,
            padding: "10px",
            border: "none",
            borderRadius: "10px",
            background: S.trim() && !v ? "#007AFF" : "#ccc",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 600,
            cursor: S.trim() && !v ? "pointer" : "default"
          },
          children: "重新生圖"
        })]
      })]
    })
  }), document.body);
}
export { d as R };