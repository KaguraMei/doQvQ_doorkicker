import { r as a, R as e, j as l } from "./vendor-react-B2VXkTUV.js";
import { a as s, y as o, A as i } from "./native-pet-CTNtZgMA.js";
import { T as t, X as r, U as n, L as d, M as c } from "./vendor-lucide-DBv09HTV.js";
const u = ({
  isOpen: u,
  onClose: p,
  onAudioSelect: m,
  title: g,
  hasExisting: h
}) => {
  const {
    t: x
  } = s();
  const [j, v] = a.useState("local");
  const [U, y] = a.useState("");
  const [f, N] = a.useState("");
  const [C, b] = a.useState(false);
  const z = a.useRef(null);
  if (!u) {
    return null;
  }
  const L = () => {
    if (!U.trim()) {
      N(x("imgUploadUrlEmpty") || "請輸入 URL");
      return;
    }
    try {
      new URL(U);
    } catch {
      N(x("imgUploadUrlInvalid") || "無效的 URL 格式");
      return;
    }
    b(true);
    N("");
    const a = new Audio();
    a.crossOrigin = "anonymous";
    a.oncanplaythrough = () => {
      b(false);
      m(U);
      R();
    };
    a.onerror = () => {
      b(false);
      m(U);
      R();
    };
    setTimeout(() => {
      if (C) {
        b(false);
        m(U);
        R();
      }
    }, 3000);
    a.src = U;
    a.load();
  };
  const R = () => {
    y("");
    N("");
    v("local");
    b(false);
    p();
  };
  return e.createPortal(l.jsx("div", {
    className: "image-upload-modal-overlay",
    onClick: R,
    style: {
      zIndex: 20000
    },
    children: l.jsxs("div", {
      className: "image-upload-modal",
      onClick: a => a.stopPropagation(),
      children: [l.jsxs("div", {
        className: "image-upload-header",
        children: [l.jsx("h3", {
          children: g || x("soundUploadTitle") || "上傳音效"
        }), l.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "8px"
          },
          children: [h && l.jsx("button", {
            className: "image-upload-close",
            onClick: async () => {
              if (await o(x("soundResetConfirm") || "確定要清除自訂音效嗎？")) {
                m(null);
                R();
              }
            },
            title: x("soundResetDefault") || "恢復預設",
            style: {
              color: "#ef5350"
            },
            children: l.jsx(t, {
              size: 18
            })
          }), l.jsx("button", {
            className: "image-upload-close",
            onClick: R,
            children: l.jsx(r, {
              size: 20
            })
          })]
        })]
      }), l.jsxs("div", {
        className: "image-upload-tabs",
        children: [l.jsxs("button", {
          className: "image-upload-tab " + (j === "local" ? "active" : ""),
          onClick: () => v("local"),
          children: [l.jsx(n, {
            size: 16
          }), l.jsx("span", {
            children: x("imgUploadLocal") || "本地上傳"
          })]
        }), l.jsxs("button", {
          className: "image-upload-tab " + (j === "url" ? "active" : ""),
          onClick: () => v("url"),
          children: [l.jsx(d, {
            size: 16
          }), l.jsx("span", {
            children: x("imgUploadUrl") || "URL 連結"
          })]
        })]
      }), l.jsx("div", {
        className: "image-upload-content",
        children: j === "local" ? l.jsxs("div", {
          className: "image-upload-local",
          children: [l.jsxs("div", {
            className: "image-upload-dropzone",
            onClick: () => {
              var a;
              if ((a = z.current) == null) {
                return undefined;
              } else {
                return a.click();
              }
            },
            children: [l.jsx(c, {
              size: 48,
              strokeWidth: 1.5
            }), l.jsx("p", {
              children: x("soundUploadDrop") || "點擊選擇音效檔案"
            }), l.jsx("span", {
              className: "image-upload-hint",
              children: x("soundUploadFormatHint") || "支持 MP3、WAV、OGG、M4A、AAC、FLAC 等格式"
            })]
          }), l.jsx("input", {
            type: "file",
            ref: z,
            accept: "audio/*,.mp3,.wav,.ogg,.m4a,.aac,.flac,.wma,.opus",
            onChange: a => {
              var e;
              const l = (e = a.target.files) == null ? undefined : e[0];
              if (!l) {
                return;
              }
              if (l.type && !l.type.startsWith("audio/")) {
                i(x("soundUploadError") || "不支持的檔案格式");
                a.target.value = "";
                return;
              }
              if (l.size > 8388608) {
                const e = (l.size / 1024 / 1024).toFixed(1) + " MB";
                const s = x("soundFileTooLarge") || "音效檔案過大（{size}），請使用小於 8MB 的檔案";
                i(s.replace("{size}", e));
                a.target.value = "";
                return;
              }
              const s = new FileReader();
              s.onload = a => {
                var e;
                let s = a.target.result;
                if (typeof s == "string" && ((e = l.type) == null ? undefined : e.startsWith("audio/"))) {
                  s = s.replace(/^data:(?:application\/octet-stream|binary\/octet-stream);base64,/i, `data:${l.type};base64,`);
                }
                m(s);
                R();
              };
              s.onerror = () => {
                i(x("soundUploadError") || "音效讀取失敗");
              };
              s.readAsDataURL(l);
              a.target.value = "";
            },
            style: {
              display: "none"
            }
          })]
        }) : l.jsxs("div", {
          className: "image-upload-url",
          children: [l.jsxs("div", {
            className: "image-upload-url-input-wrapper",
            children: [l.jsx(d, {
              size: 18,
              className: "image-upload-url-icon"
            }), l.jsx("input", {
              type: "url",
              className: "image-upload-url-input",
              placeholder: x("soundUploadUrlPlaceholder") || "輸入音效 URL...",
              value: U,
              onChange: a => {
                y(a.target.value);
                N("");
              },
              onKeyDown: a => a.key === "Enter" && L()
            })]
          }), f && l.jsx("p", {
            className: "image-upload-error",
            children: f
          }), l.jsx("button", {
            className: "image-upload-submit",
            onClick: L,
            disabled: C,
            children: C ? x("imgUploadLoading") || "加載中..." : x("imgUploadConfirm") || "確認"
          }), l.jsx("p", {
            className: "image-upload-url-hint",
            children: x("soundUploadUrlHint") || "提示：請確保 URL 可直接存取音效檔案"
          })]
        })
      })]
    })
  }), document.body);
};
export { u as A };