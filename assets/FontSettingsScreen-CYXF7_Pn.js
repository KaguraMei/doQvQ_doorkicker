import { r as e, j as t } from "./vendor-react-B2VXkTUV.js";
import { a as n, A as o, c as a, u as s, y as l } from "./native-pet-CTNtZgMA.js";
import { X as i, U as r, L as c, K as d, x as f, P as m, O as p, T as u } from "./vendor-lucide-DBv09HTV.js";
import { F as x } from "./FrostedGlassBackground-DQPbupYU.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
const h = ({
  isOpen: a,
  onClose: s,
  onFontSelect: l,
  title: f
}) => {
  const {
    t: m
  } = n();
  const [p, u] = e.useState("local");
  const [x, h] = e.useState("");
  const [g, j] = e.useState("");
  const [y, v] = e.useState("");
  const [F, b] = e.useState("");
  const C = e.useRef(null);
  if (!a) {
    return null;
  }
  const N = () => {
    if (y.trim()) {
      if (x.trim()) {
        try {
          new URL(x);
        } catch {
          j(m("imgUploadUrlInvalid") || "Invalid URL format");
          return;
        }
        l(x, y.trim());
        U();
      } else {
        j(m("imgUploadUrlEmpty") || "Please enter URL");
      }
    } else {
      b(m("fontNamePlaceholder") || "Please enter a font name");
    }
  };
  const U = () => {
    h("");
    j("");
    v("");
    b("");
    u("local");
    s();
  };
  return t.jsx("div", {
    className: "image-upload-modal-overlay",
    onClick: U,
    children: t.jsxs("div", {
      className: "image-upload-modal",
      onClick: e => e.stopPropagation(),
      children: [t.jsxs("div", {
        className: "image-upload-header",
        children: [t.jsx("h3", {
          children: f || m("fontUploadTitle") || "Upload Font"
        }), t.jsx("button", {
          className: "image-upload-close",
          onClick: U,
          children: t.jsx(i, {
            size: 20
          })
        })]
      }), t.jsxs("div", {
        style: {
          padding: "0 20px 10px 20px"
        },
        children: [t.jsx("style", {
          children: "\n                        .font-upload-label-force {\n                            color: #333333 !important;\n                            text-shadow: none !important;\n                            font-weight: 500 !important;\n                            font-size: 14px !important;\n                            margin-bottom: 8px !important;\n                            display: block !important;\n                        }\n                        .font-upload-input-force {\n                            color: #000000 !important;\n                            background-color: #ffffff !important;\n                            outline: none !important;\n                            border: 1px solid #ddd !important;\n                            box-shadow: none !important;\n                            -webkit-text-fill-color: #000000 !important;\n                        }\n                        .font-upload-input-force:focus {\n                            border-color: #007AFF !important;\n                        }\n                    "
        }), t.jsx("label", {
          className: "font-upload-label-force",
          children: m("fontNameLabel") || "Font Name"
        }), t.jsx("input", {
          type: "text",
          className: "font-upload-input-force",
          style: {
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            fontSize: "16px",
            boxSizing: "border-box"
          },
          placeholder: m("fontNamePlaceholder") || "Name your font...",
          value: y,
          onChange: e => {
            v(e.target.value);
            b("");
          }
        }), F && t.jsx("p", {
          style: {
            color: "red",
            fontSize: "12px",
            marginTop: "4px"
          },
          children: F
        })]
      }), t.jsxs("div", {
        className: "image-upload-tabs",
        children: [t.jsxs("button", {
          className: "image-upload-tab " + (p === "local" ? "active" : ""),
          onClick: () => u("local"),
          children: [t.jsx(r, {
            size: 16
          }), t.jsx("span", {
            children: m("imgUploadLocal") || "Local File"
          })]
        }), t.jsxs("button", {
          className: "image-upload-tab " + (p === "url" ? "active" : ""),
          onClick: () => u("url"),
          children: [t.jsx(c, {
            size: 16
          }), t.jsx("span", {
            children: m("imgUploadUrl") || "URL Link"
          })]
        })]
      }), t.jsx("div", {
        className: "image-upload-content",
        children: p === "local" ? t.jsxs("div", {
          className: "image-upload-local",
          children: [t.jsxs("div", {
            className: "image-upload-dropzone",
            onClick: () => {
              var e;
              if ((e = C.current) == null) {
                return undefined;
              } else {
                return e.click();
              }
            },
            children: [t.jsx(d, {
              size: 48,
              strokeWidth: 1.5
            }), t.jsx("p", {
              children: m("fontUploadDrop") || "Click to select font file"
            }), t.jsx("span", {
              className: "image-upload-hint",
              children: m("fontUploadHint") || "Supports TTF, OTF, WOFF, WOFF2"
            })]
          }), t.jsx("input", {
            type: "file",
            ref: C,
            accept: ".ttf,.otf,.woff,.woff2",
            onChange: async e => {
              var t;
              const n = (t = e.target.files) == null ? undefined : t[0];
              if (!n) {
                return;
              }
              if (!y.trim()) {
                b(m("fontNamePlaceholder") || "Please enter a font name");
                e.target.value = "";
                return;
              }
              const a = n.name.toLowerCase();
              if ([".ttf", ".otf", ".woff", ".woff2"].some(e => a.endsWith(e))) {
                if (n.size > 52428800) {
                  o(m("fontUploadSizeError") || "File too large (Max 50MB)");
                } else {
                  try {
                    const e = await n.arrayBuffer();
                    l(e, y.trim());
                  } catch (s) {
                    console.error("[FontUpload] Failed to read file:", s);
                    o(m("fontSaveError") || "Failed to read font file.");
                  }
                  U();
                  e.target.value = "";
                }
              } else {
                o(m("fontUploadTypeError") || "Unsupported file type. Please upload .ttf, .otf, .woff, or .woff2");
              }
            },
            style: {
              display: "none"
            }
          })]
        }) : t.jsxs("div", {
          className: "image-upload-url",
          children: [t.jsxs("div", {
            className: "image-upload-url-input-wrapper",
            children: [t.jsx(c, {
              size: 18,
              className: "image-upload-url-icon"
            }), t.jsx("input", {
              type: "url",
              className: "image-upload-url-input",
              placeholder: m("fontUploadUrlPlaceholder") || "Enter font URL...",
              value: x,
              onChange: e => {
                h(e.target.value);
                j("");
              },
              onKeyDown: e => e.key === "Enter" && N()
            })]
          }), g && t.jsx("p", {
            className: "image-upload-error",
            children: g
          }), t.jsx("button", {
            className: "image-upload-submit",
            onClick: N,
            children: m("imgUploadConfirm") || "Confirm"
          }), t.jsx("p", {
            className: "image-upload-url-hint",
            children: m("fontUploadUrlHint") || "Tip: Ensure the URL is directly accessible (CORS enabled)."
          })]
        })
      })]
    })
  });
};
const g = () => {
  const {
    currentScreen: i,
    showScreen: r
  } = a();
  const {
    t: c
  } = n();
  const d = i === "font-settings-screen";
  const [g, j, y] = s("savedFonts", []);
  const [v, F, b] = s("activeFontId", "default");
  const C = y && b;
  const [N, U] = e.useState(false);
  const [w, k] = e.useState("預覽字體 The quick brown fox jumps over the lazy dog. 1234567890");
  const S = e.useRef(0);
  e.useEffect(() => {
    if (!C) {
      return;
    }
    const e = localStorage.getItem("customFont");
    if (e && !g.some(t => t.content === e) && g.length === 0) {
      const t = {
        id: "migrated_" + Date.now(),
        name: c("fontCustom") || "Custom Font",
        content: e
      };
      j([t]);
      localStorage.removeItem("customFont");
      if (v === "default") {
        F(t.id);
      }
      return;
    }
    if (v && v !== "default") {
      const e = g.find(e => e.id === v);
      z(e ? e.content : null);
    } else {
      z(null);
    }
  }, [C, v, g, c, j, F]);
  const z = async e => {
    const t = ++S.current;
    const n = [];
    document.fonts.forEach(e => {
      if (e.family === "CustomUserFont") {
        n.push(e);
      }
    });
    n.forEach(e => document.fonts.delete(e));
    let o = document.getElementById("custom-font-style");
    if (o && o.dataset.blobUrl) {
      URL.revokeObjectURL(o.dataset.blobUrl);
      delete o.dataset.blobUrl;
    }
    if (!o) {
      o = document.createElement("style");
      o.id = "custom-font-style";
      document.head.appendChild(o);
    }
    if (!e) {
      o.textContent = "";
      return "ok";
    }
    if (e instanceof Blob && (e.size === 0 || e._omittedInExport)) {
      o.textContent = "";
      return "empty";
    }
    if (e instanceof ArrayBuffer && e.byteLength === 0) {
      o.textContent = "";
      return "empty";
    }
    try {
      let n;
      if (e instanceof Blob || e instanceof ArrayBuffer) {
        const t = (e instanceof Blob ? await e.arrayBuffer() : e).slice(0);
        n = new FontFace("CustomUserFont", t);
      } else {
        if (typeof e != "string") {
          console.warn("[Font] Unknown fontSrc type:", typeof e);
          o.textContent = "";
          return "error";
        }
        n = new FontFace("CustomUserFont", `url(${e})`);
      }
      await n.load();
      if (t !== S.current) {
        return "ok";
      }
      const a = [];
      document.fonts.forEach(e => {
        if (e.family === "CustomUserFont") {
          a.push(e);
        }
      });
      a.forEach(e => document.fonts.delete(e));
      document.fonts.add(n);
      o.textContent = "\n                body, #nuo-os-root, input, textarea, button {\n                    font-family: 'CustomUserFont', 'NuoSans', -apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"Helvetica Neue\", sans-serif !important;\n                }\n            ";
      return "ok";
    } catch (a) {
      console.error("[Font] Failed to load font:", a);
      if (t === S.current) {
        o.textContent = "";
      }
      return "error";
    }
  };
  const E = () => {
    F("default");
    z(null);
    window.dispatchEvent(new CustomEvent("font-changed", {
      detail: null
    }));
  };
  const L = async (e, t) => {
    e.stopPropagation();
    if (await l(c("confirmDeleteFont") || "Delete this font?")) {
      const e = g.filter(e => e.id !== t);
      j(e);
      if (v === t) {
        E();
      }
    }
  };
  const I = ({
    title: e,
    children: n,
    action: o
  }) => t.jsxs("div", {
    className: "settings-section",
    children: [t.jsxs("div", {
      className: "settings-section-header",
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      },
      children: [t.jsx("span", {
        children: e
      }), o]
    }), n]
  });
  const R = ({
    font: e,
    active: n,
    onClick: o,
    onDelete: a
  }) => t.jsxs("div", {
    className: "settings-item",
    onClick: o,
    style: {
      cursor: "pointer"
    },
    children: [t.jsx("div", {
      className: "settings-item-left",
      children: t.jsx("span", {
        className: "settings-item-label",
        style: {
          fontWeight: n ? "600" : "400",
          color: n ? "#007AFF" : "inherit"
        },
        children: e.name
      })
    }), t.jsxs("div", {
      className: "settings-item-right",
      children: [n && t.jsx(p, {
        size: 18,
        color: "#007AFF",
        style: {
          marginRight: a ? "10px" : "0"
        }
      }), a && t.jsx("div", {
        onClick: t => a(t, e.id),
        style: {
          padding: "5px",
          display: "flex",
          alignItems: "center",
          color: "#ff3b30"
        },
        children: t.jsx(u, {
          size: 18
        })
      })]
    })]
  });
  return t.jsxs("div", {
    id: "font-settings-screen",
    className: "screen " + (d ? "active" : ""),
    children: [t.jsx(x, {}), t.jsx("div", {
      className: "floating-back-btn",
      onClick: () => r("wallpaper-screen"),
      style: {
        zIndex: 20
      },
      children: t.jsx(f, {
        size: 24
      })
    }), t.jsxs("div", {
      className: "settings-scroll-container",
      style: {
        position: "relative",
        zIndex: 10
      },
      children: [t.jsx("h1", {
        className: "large-title",
        children: c("fontSettingsTitle")
      }), t.jsx("div", {
        className: "settings-section",
        style: {
          padding: "20px",
          minHeight: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: t.jsx("p", {
          style: {
            fontSize: "18px",
            lineHeight: "1.5",
            textAlign: "center",
            margin: 0
          },
          children: w
        })
      }), t.jsx(I, {
        title: c("sectionCurrentFont"),
        children: t.jsx(R, {
          font: {
            name: c("fontDefault")
          },
          active: v === "default",
          onClick: E
        })
      }), t.jsx(I, {
        title: c("sectionMyFonts"),
        action: t.jsxs("button", {
          onClick: () => U(true),
          style: {
            background: "transparent",
            border: "none",
            color: "#007AFF",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            padding: 0
          },
          children: [t.jsx(m, {
            size: 16
          }), " ", c("fontUpload")]
        }),
        children: g.length === 0 ? t.jsx("div", {
          className: "settings-item",
          style: {
            color: "#999",
            justifyContent: "center"
          },
          children: c("fontUploadNote")
        }) : g.map(e => t.jsx(R, {
          font: e,
          active: v === e.id,
          onClick: () => (async (e, t) => {
            F(e);
            window.dispatchEvent(new CustomEvent("font-changed", {
              detail: t
            }));
            const n = await z(t);
            if (n === "empty" || n === "error") {
              const t = g.find(t => t.id === e);
              const n = (t == null ? undefined : t.name) || "";
              const a = (c("fontBrokenAfterImport") || "「{name}」字體已損壞，請重新上傳。").replace("{name}", n);
              o(a);
            }
          })(e.id, e.content),
          onDelete: L
        }, e.id))
      })]
    }), t.jsx(h, {
      isOpen: N,
      onClose: () => U(false),
      onFontSelect: (e, t) => {
        try {
          const n = {
            id: "font_" + Date.now(),
            name: t,
            content: e
          };
          const o = [...g, n];
          j(o);
          F(n.id);
          window.dispatchEvent(new CustomEvent("font-changed", {
            detail: e
          }));
        } catch (n) {
          console.error("Failed to save font:", n);
          o(c("fontSaveError") || "Failed to save font.");
        }
      }
    })]
  });
};
export { g as default };