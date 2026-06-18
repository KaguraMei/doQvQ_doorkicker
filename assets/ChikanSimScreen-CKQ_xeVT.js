const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["./assets/main-BO9xa-SQ.js", "./assets/modulepreload-polyfill-YP0FEG5d.js", "./assets/native-pet-CTNtZgMA.js", "./assets/vendor-react-B2VXkTUV.js", "./assets/vendor-dexie-KLdnSHz2.js", "./assets/vendor-jszip-DU-5YDGO.js", "./assets/vendor-lucide-DBv09HTV.js", "./assets/native-pet-D9YoqRtr.css", "./assets/vendor-supabase-Bcpm_8qV.js", "./assets/main-C4gkqfD0.css", "./assets/NotificationBar-y-kP9VHv.css", "./assets/vendor-fonts-BglBY6By.css", "./assets/chikanPhoneAutoSkin-BDc_ON11.js", "./assets/chikanPhoneContent-DoLjmjc9.js", "./assets/chikanPeekScript-Bh_p5Df5.js", "./assets/chikanTrackTimeline-C1J-3C9Q.js"]) => i.map(i => d[i]);
import { M as e, aH as s, bn as a, a8 as i, _ as t, c as n, b as l, j as r, a as c, bJ as o, B as d } from "./native-pet-CTNtZgMA.js";
import { r as h, j as m, b as p } from "./vendor-react-B2VXkTUV.js";
import { compressImageForStorage as u } from "./imageCompressor-FPWVE1FW.js";
import { M as x } from "./MessageItem-ByQysHRN.js";
import { a3 as g } from "./main-BO9xa-SQ.js";
import { bv as f, I as v, c1 as j, ak as b, p as N, M as y, at as k, c2 as w, aw as S, x as C, Q as _, ae as I, E as z, b2 as A, as as $, ap as P, S as T, ai as E, d as MountainIcon, aj as R, H as L, R as W, b as D, c as F, e as B, f as O, au as G, ah as q, q as U, b9 as V, c3 as H, al as Y, bF as J, X, A as Z, a9 as K, bH as Q, U as ee, aH as se, J as ae, aB as ie, bc as te, V as ne, c4 as le, an as re, Y as ce } from "./vendor-lucide-DBv09HTV.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
import "./TestResultCard-DePnKHCl.js";
import "./GiftHtmlRenderer-7nTR9M_6.js";
import "./modulepreload-polyfill-YP0FEG5d.js";
/* empty css                        */
import "./vendor-supabase-Bcpm_8qV.js";
/* empty css                     */
const oe = {
  modern: {
    id: "modern",
    label: "现代",
    emoji: "📱",
    desc: "金属直角边框，熟悉的智能机",
    statusLeft: ["信号", "5G"],
    statusRight: "100%",
    vars: {
      "--cps-frame-bg": "linear-gradient(150deg, #2a2a30, #18181d)",
      "--cps-frame-border": "#222",
      "--cps-frame-radius": "40px 40px 0 0",
      "--cps-screen-radius": "28px 28px 0 0",
      "--cps-notch": "1",
      "--cps-status-color": "#000",
      "--cps-status-font": "-apple-system, 'Segoe UI', sans-serif",
      "--cps-accent": "#0088ff"
    },
    wallpaper: "radial-gradient(circle at 30% 20%, #ffd6a5, #ff8fb1 45%, #8a6cff 100%)"
  },
  ancient: {
    id: "ancient",
    label: "古代",
    emoji: "🏮",
    desc: "一卷可窥人心的传讯玉简·卷轴",
    form: "scroll",
    statusLeft: ["灵气盈", "辰时"],
    statusRight: "甲子年",
    vars: {
      "--cps-frame-bg": "linear-gradient(160deg, #6b5336, #4a3722 55%, #33251543)",
      "--cps-frame-border": "#9c7a3e",
      "--cps-frame-radius": "8px 8px 8px 8px",
      "--cps-screen-radius": "4px",
      "--cps-notch": "0",
      "--cps-status-color": "#5a3f22",
      "--cps-status-font": "'STKaiti', 'KaiTi', serif",
      "--cps-accent": "#c8a45c",
      "--cps-screen-pad": "52px 26px 20px"
    },
    wallpaper: "linear-gradient(180deg, #f5ecd6, #ecdcb8 55%, #ddc794 100%)"
  },
  fantasy: {
    id: "fantasy",
    label: "西幻",
    emoji: "📖",
    desc: "一本浮现符文的魔导书·咒典",
    form: "grimoire",
    statusLeft: ["魔力", "◈◈◈"],
    statusRight: "∞",
    vars: {
      "--cps-frame-bg": "linear-gradient(150deg, #4a2a70, #2a1648 60%, #190b30)",
      "--cps-frame-border": "#7d5ab8",
      "--cps-frame-radius": "10px 18px 18px 10px",
      "--cps-screen-radius": "4px 12px 12px 4px",
      "--cps-notch": "0",
      "--cps-status-color": "#ecdcff",
      "--cps-status-font": "'Cinzel', 'Times New Roman', serif",
      "--cps-accent": "#b388ff",
      "--cps-screen-pad": "50px 24px 20px 34px"
    },
    wallpaper: "radial-gradient(circle at 50% 30%, #7a5cc0, #321c5e 70%, #190b30 100%)"
  },
  scifi: {
    id: "scifi",
    label: "星际",
    emoji: "🛸",
    desc: "一块悬浮于掌心的全息光屏",
    form: "hologram",
    statusLeft: ["量子链路", "ONLINE"],
    statusRight: "◢◤",
    vars: {
      "--cps-frame-bg": "linear-gradient(150deg, rgba(10,40,50,0.25), rgba(6,20,30,0.15))",
      "--cps-frame-border": "rgba(0,255,204,0.55)",
      "--cps-frame-radius": "4px",
      "--cps-screen-radius": "2px",
      "--cps-notch": "0",
      "--cps-status-color": "#7ffbe6",
      "--cps-status-font": "'Orbitron', 'Consolas', monospace",
      "--cps-accent": "#00ffcc",
      "--cps-screen-pad": "46px 20px 20px"
    },
    wallpaper: "radial-gradient(circle at 50% 40%, rgba(10,70,82,0.85), rgba(6,33,46,0.9) 60%, rgba(2,10,20,0.95) 100%)"
  }
};
const de = ["modern", "ancient", "fantasy", "scifi"];
const he = e => oe[e] || oe.modern;
const me = {
  clock: "🕐",
  weather: "⛅",
  note: "📝",
  quote: "💬",
  calendar: "📅",
  music: "🎵",
  battery: "🔋",
  fitness: "🏃"
};
const pe = (e, s) => {
  const a = me[e.type] || "🔹";
  if (e.type === "clock") {
    return m.jsxs("div", {
      className: "wg-clock",
      children: [m.jsx("div", {
        className: "wg-clock-time",
        children: e.title || "09:24"
      }), m.jsx("div", {
        className: "wg-clock-sub",
        children: e.body
      })]
    });
  }
  if (e.type === "music") {
    return m.jsxs("div", {
      className: "wg-music",
      children: [m.jsx("div", {
        className: "wg-music-cover",
        style: {
          background: s
        },
        children: "🎵"
      }), m.jsxs("div", {
        className: "wg-music-info",
        children: [m.jsx("div", {
          className: "wg-music-title",
          children: e.title || "正在播放"
        }), m.jsx("div", {
          className: "wg-music-sub",
          children: e.body
        }), m.jsx("div", {
          className: "wg-music-bar",
          children: m.jsx("span", {
            style: {
              width: "42%",
              background: s
            }
          })
        })]
      })]
    });
  }
  if (e.type === "weather") {
    return m.jsxs("div", {
      className: "wg-weather",
      children: [m.jsx("span", {
        className: "wg-weather-ico",
        children: "⛅"
      }), m.jsxs("div", {
        className: "wg-weather-text",
        children: [m.jsx("div", {
          className: "wg-weather-t",
          children: e.title || "晴"
        }), m.jsx("div", {
          className: "wg-weather-b",
          children: e.body
        })]
      })]
    });
  }
  if (e.type === "mood") {
    const s = /开心|愉|喜|乐/.test(e.title) ? "😊" : /烦|怒|气/.test(e.title) ? "😤" : /累|疲/.test(e.title) ? "😮‍💨" : /丧|郁|难/.test(e.title) ? "🥀" : "💭";
    return m.jsxs("div", {
      className: "wg-mood",
      children: [m.jsx("span", {
        className: "wg-mood-emoji",
        children: s
      }), m.jsxs("div", {
        className: "wg-mood-text",
        children: [m.jsx("div", {
          className: "wg-mood-t",
          children: e.title || "心情"
        }), m.jsx("div", {
          className: "wg-mood-b",
          children: e.body
        })]
      })]
    });
  }
  if (e.type === "countdown") {
    return m.jsxs("div", {
      className: "wg-countdown",
      children: [m.jsx("div", {
        className: "wg-cd-label",
        children: e.title || "倒计时"
      }), m.jsx("div", {
        className: "wg-cd-body",
        style: {
          color: s
        },
        children: e.body || "—"
      })]
    });
  } else {
    return m.jsxs(m.Fragment, {
      children: [m.jsxs("div", {
        className: "hp-widget-top",
        children: [m.jsx("span", {
          className: "hp-widget-icon",
          children: a
        }), m.jsx("span", {
          className: "hp-widget-title",
          children: e.title
        })]
      }), m.jsx("div", {
        className: "hp-widget-body",
        children: e.body
      })]
    });
  }
};
const ue = e => {
  var s;
  try {
    if ((s = navigator.vibrate) != null) {
      s.call(navigator, e);
    }
  } catch (a) {}
};
const xe = p.memo(function ({
  placeholder: e,
  onSend: s
}) {
  const [a, i] = h.useState("");
  const t = h.useRef(null);
  const n = () => {
    var e;
    const n = a.trim();
    if (n) {
      s(n);
      i("");
      try {
        if ((e = t.current) != null) {
          e.blur();
        }
      } catch (l) {}
    }
  };
  return m.jsxs("div", {
    className: "hp-input-bar",
    onClick: e => e.stopPropagation(),
    onMouseDown: e => e.stopPropagation(),
    onTouchStart: e => e.stopPropagation(),
    children: [m.jsx("input", {
      ref: t,
      className: "hp-input",
      value: a,
      placeholder: e,
      onChange: e => i(e.target.value),
      onKeyDown: e => {
        e.stopPropagation();
        if (e.key === "Enter") {
          n();
        }
      },
      onMouseDown: e => {
        var s;
        var a;
        e.preventDefault();
        e.stopPropagation();
        try {
          if ((s = t.current) != null) {
            s.focus({
              preventScroll: true
            });
          }
        } catch {
          if ((a = t.current) != null) {
            a.focus();
          }
        }
      },
      onPointerDown: e => e.stopPropagation(),
      onBlur: () => {
        setTimeout(() => {
          window.scrollTo(0, 0);
          try {
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
          } catch (e) {}
        }, 100);
      }
    }), m.jsx("button", {
      className: "hp-send",
      onClick: e => {
        e.stopPropagation();
        n();
      },
      disabled: !a.trim(),
      children: "发送"
    })]
  });
});
const ge = () => {};
const fe = {
  themeStyle: "qq",
  showBubbleStatus: false,
  isSelectionMode: false,
  selectedMessageIds: new Set(),
  toggleMessageSelection: ge,
  onLongPressStart: ge,
  onLongPressEnd: ge,
  onImageClick: ge,
  onSimImageClick: ge,
  onTransferClick: ge,
  onGiftClick: ge,
  onHistoryClick: ge,
  onReplyClick: ge,
  onRetrySummary: ge,
  onViewRecalledMessage: ge,
  onAvatarClick: ge,
  onAvatarDoubleClick: ge,
  onTtsAudioReady: ge,
  onOfflineInviteClick: ge,
  onOfflineInviteDecline: ge,
  onTheaterClick: ge,
  onCouplesInviteRespond: ge,
  onUserInviteRespond: ge,
  onUserInviteResponseClick: ge,
  patEnabled: false,
  autoVoice: false,
  voiceEnabled: false,
  thinkingPanelEnabled: false,
  autoTranslate: false,
  isBlocked: false,
  shouldAnimate: false,
  showTime: false,
  isFirstInGroup: true,
  isLastInGroup: true,
  t: e => e,
  formatTime: e => {
    try {
      const s = new Date(e);
      return `${String(s.getHours()).padStart(2, "0")}:${String(s.getMinutes()).padStart(2, "0")}`;
    } catch {
      return "";
    }
  }
};
const ve = [{
  key: "messages",
  label: "消息",
  icon: f,
  grad: "linear-gradient(135deg, #07c160, #34d97b)"
}, {
  key: "gallery",
  label: "相册",
  icon: v,
  grad: "linear-gradient(135deg, #f093fb, #f5576c)"
}, {
  key: "wallet",
  label: "钱包",
  icon: j,
  grad: "linear-gradient(135deg, #f6d365, #fda085)"
}, {
  key: "browser",
  label: "浏览器",
  icon: b,
  grad: "linear-gradient(135deg, #4facfe, #00f2fe)"
}, {
  key: "notes",
  label: "备忘录",
  icon: N,
  grad: "linear-gradient(135deg, #a18cd1, #fbc2eb)"
}, {
  key: "music",
  label: "音乐",
  icon: y,
  grad: "linear-gradient(135deg, #fda085, #fbc2eb)"
}, {
  key: "screen",
  label: "屏幕使用",
  icon: k,
  grad: "linear-gradient(135deg, #667eea, #764ba2)"
}, {
  key: "health",
  label: "健康",
  icon: w,
  grad: "linear-gradient(135deg, #ff6a88, #ff99ac)"
}, {
  key: "footprint",
  label: "足迹",
  icon: S,
  grad: "linear-gradient(135deg, #43e97b, #38f9d7)"
}];
const je = [{
  key: "chats",
  label: "微信",
  icon: f
}, {
  key: "moments",
  label: "朋友圈",
  icon: A
}, {
  key: "contacts",
  label: "通讯录",
  icon: $
}, {
  key: "me",
  label: "我",
  icon: P
}];
const be = e => {
  if (!e) {
    return "";
  }
  try {
    const s = new Date(e);
    return `${String(s.getMonth() + 1).padStart(2, "0")}-${String(s.getDate()).padStart(2, "0")} ${String(s.getHours()).padStart(2, "0")}:${String(s.getMinutes()).padStart(2, "0")}`;
  } catch {
    return "";
  }
};
const Ne = e => e && (e.sender === "them" || e.sender === "char" || e.role === "assistant");
const ye = e => e ? typeof e.text == "string" && e.text ? e.text : typeof e.c == "string" && e.c ? e.c : typeof e.content == "string" && e.content ? e.content : e.sticker ? "[表情]" : e.image || e.imageRef ? "[图片]" : e.transferData ? `[转账 ¥${e.transferData.amount ?? ""}]` : e.giftData ? `[礼物 ${e.giftData.name || ""}]` : e.locationData ? "[位置]" : e.isVoice || e.voiceText || e.audio || e.audioRef ? "[语音]" : e.type ? `[${e.type}]` : "" : "";
const ke = ({
  src: e,
  size: s = 36,
  name: a = "",
  fallbackColor: i = "#b8c2d4"
}) => {
  const [t, n] = h.useState(false);
  const l = typeof e == "string" && e.trim() && e !== "undefined" && e !== "null" && !t;
  const r = (a || "?").trim().charAt(0) || "?";
  return m.jsx("div", {
    className: "hp-av",
    style: {
      width: s,
      height: s,
      fontSize: s * 0.45,
      background: l ? "#eee" : i
    },
    children: l ? m.jsx("img", {
      src: e,
      alt: "",
      className: "hp-av-img",
      onError: () => n(true)
    }) : m.jsx("span", {
      className: "hp-av-letter",
      children: r
    })
  });
};
const we = e => typeof e.sticker == "string" && e.sticker ? m.jsx("img", {
  className: "hp-msg-sticker",
  src: e.sticker,
  alt: ""
}) : typeof e.image == "string" && e.image ? m.jsx("img", {
  className: "hp-msg-img",
  src: e.image,
  alt: ""
}) : e.imageRef && !e.image ? m.jsx("div", {
  className: "hp-bubble hp-msg-tag",
  children: "🖼 图片"
}) : e.transferData ? m.jsxs("div", {
  className: "hp-msg-transfer",
  children: [m.jsxs("div", {
    className: "t-amt",
    children: ["¥ ", e.transferData.amount ?? ""]
  }), m.jsx("div", {
    className: "t-note",
    children: e.transferData.note || "转账"
  })]
}) : e.giftData ? m.jsxs("div", {
  className: "hp-msg-gift",
  children: [e.giftData.image ? m.jsx("img", {
    className: "hp-gift-img",
    src: e.giftData.image,
    alt: ""
  }) : m.jsx("span", {
    className: "hp-gift-emoji",
    children: "🎁"
  }), m.jsx("span", {
    children: e.giftData.name || "礼物"
  })]
}) : e.locationData ? m.jsxs("div", {
  className: "hp-msg-loc",
  children: ["📍 ", m.jsx("span", {
    children: e.locationData.name || e.locationData.address || "位置"
  })]
}) : e.isVoice || e.voiceText || e.audio || e.audioRef ? m.jsxs("div", {
  className: "hp-bubble hp-msg-voice",
  children: ["🎤 ", m.jsx("span", {
    children: e.voiceText || (e.duration ? `${e.duration}″` : "语音")
  })]
}) : m.jsx("div", {
  className: "hp-bubble",
  children: ye(e)
});
const Se = ({
  userId: n,
  userName: l,
  userAvatar: r,
  charId: c,
  charName: o,
  charAvatar: d,
  skinStyle: p,
  wallpaperStyle: u,
  onClose: A,
  viewerIsOwner: P,
  ownerType: Z = "char",
  ownerAutoUnlocked: K = false,
  onOwnerAutoUnlocked: Q = () => {},
  onOpenSkin: ee,
  onRegenContent: se,
  regenContent: ae = false,
  onAutoPeek: ie,
  onPeekStep: te,
  peekScriptToPlay: ne,
  onPeekConsumed: le,
  avatarByName: re = {},
  aiTheme: ce = null,
  aiPhoneContent: oe = null,
  manualWallpaper: de = false
}) => {
  const [he, me] = h.useState("home");
  const [ge, Se] = h.useState(() => {
    try {
      return localStorage.getItem("wechat_active_tab") || "chats";
    } catch {
      return "chats";
    }
  });
  h.useEffect(() => {
    try {
      localStorage.setItem("wechat_active_tab", ge);
    } catch (e) {}
  }, [ge]);
  const [Ce, _e] = h.useState(null);
  const [Ie, ze] = h.useState("week");
  const [Ae, $e] = h.useState(() => {
    try {
      return localStorage.getItem("music_liked") === "true";
    } catch {
      return false;
    }
  });
  const [Pe, Te] = h.useState(() => {
    try {
      return localStorage.getItem("music_playing") !== "false";
    } catch {
      return true;
    }
  });
  const [Ee, Me] = h.useState(() => {
    try {
      const e = localStorage.getItem("music_active_playlist");
      if (e) {
        return JSON.parse(e);
      } else {
        return null;
      }
    } catch {
      return null;
    }
  });
  const [Re, Le] = h.useState(() => {
    try {
      return localStorage.getItem("music_current_song") || "";
    } catch {
      return "";
    }
  });
  const [We, De] = h.useState(() => {
    try {
      return localStorage.getItem("music_current_artist") || "";
    } catch {
      return "";
    }
  });
  const [Fe, Be] = h.useState(() => {
    try {
      return localStorage.getItem("music_current_cover") || "";
    } catch {
      return "";
    }
  });
  h.useEffect(() => {
    try {
      localStorage.setItem("music_liked", Ae ? "true" : "false");
    } catch (e) {}
  }, [Ae]);
  h.useEffect(() => {
    try {
      localStorage.setItem("music_playing", Pe ? "true" : "false");
    } catch (e) {}
  }, [Pe]);
  h.useEffect(() => {
    try {
      if (Ee) {
        localStorage.setItem("music_active_playlist", JSON.stringify(Ee));
      } else {
        localStorage.removeItem("music_active_playlist");
      }
    } catch (e) {}
  }, [Ee]);
  h.useEffect(() => {
    try {
      localStorage.setItem("music_current_song", Re);
    } catch (e) {}
  }, [Re]);
  h.useEffect(() => {
    try {
      localStorage.setItem("music_current_artist", We);
    } catch (e) {}
  }, [We]);
  h.useEffect(() => {
    try {
      localStorage.setItem("music_current_cover", Fe);
    } catch (e) {}
  }, [Fe]);
  const {
    chats: Oe,
    moments: Ge,
    groups: qe,
    photos: Ue,
    loading: Ve
  } = function (t, n, l, r = "char") {
    const c = r === "user";
    const o = c ? n : t;
    const d = c ? t : n;
    const [m, p] = h.useState({
      chats: [],
      moments: [],
      groups: [],
      photos: [],
      loading: false,
      loaded: false
    });
    h.useEffect(() => {
      if (!t || n == null) {
        return;
      }
      let l = false;
      p(e => ({
        ...e,
        loading: true
      }));
      (async () => {
        try {
          const t = e.getByPair(o, d).catch(() => []);
          const [n, r, h, m] = await Promise.all([t, s.getByUser(o).catch(() => []), a.get(o).catch(() => []), i.getAll().catch(() => [])]);
          if (l) {
            return;
          }
          const u = Array.isArray(m) ? m : [];
          const x = String(d);
          const g = u.find(e => String(e.id) === x);
          const f = (g == null ? undefined : g.group) || null;
          const v = new Set([x]);
          u.forEach(e => {
            if (!e) {
              return;
            }
            const s = e.type === "npc";
            if (s && Array.isArray(e.boundTo) && e.boundTo.map(String).includes(x) || !s && f && (e.group || null) === f) {
              v.add(String(e.id));
            }
          });
          const j = c ? Array.isArray(r) ? r : [] : (Array.isArray(r) ? r : []).filter(e => {
            if (!e.isCharacterPost && !e.charUserId && !e.charId) {
              return true;
            }
            const s = String(e.charUserId ?? e.charId ?? "");
            return v.has(s);
          });
          const b = String(d);
          const N = (Array.isArray(h) ? h : []).filter(e => !!c || Array.isArray(e.members) && e.members.map(String).includes(b));
          const y = await Promise.all(N.map(async s => {
            let a = null;
            try {
              const i = await e.getByPair(o, s.id);
              if (Array.isArray(i) && i.length) {
                a = i[i.length - 1];
              }
            } catch (i) {}
            return {
              id: s.id,
              name: s.name,
              members: s.members,
              avatar: s.avatar,
              last: a
            };
          }));
          if (l) {
            return;
          }
          const k = e => typeof e == "string" && (e.startsWith("http") || e.startsWith("data:image"));
          const w = [];
          const S = new Set();
          const C = (e, s, a, i) => {
            if (k(e) && !S.has(e)) {
              S.add(e);
              w.push({
                url: e,
                desc: String(s || "").slice(0, 60),
                source: a,
                from: i || "owner"
              });
            }
          };
          const _ = e => {
            const s = String((e == null ? undefined : e.sender) || (e == null ? undefined : e.role) || "").toLowerCase();
            return s === "me" || s === "user" || s === "owner" || s !== "them" && s !== "char" && s !== "assistant" && s !== "ai";
          };
          const I = e => _(e) === c ? "owner" : "partner";
          (Array.isArray(n) ? n : []).forEach(e => {
            C(e.image, e.imageSummary, "chat", I(e));
          });
          const z = String(d);
          const A = e => {
            const s = !!e.isCharacterPost || !!e.charUserId;
            if (c) {
              return !s;
            } else {
              return s && String(e.charUserId) === z;
            }
          };
          (Array.isArray(j) ? j : []).forEach(e => {
            if (A(e) && Array.isArray(e.images)) {
              e.images.forEach((s, a) => {
                var i;
                return C(s, (i = e.imageDescriptions) == null ? undefined : i[a], "moment", "owner");
              });
            }
          });
          p({
            chats: Array.isArray(n) ? n : [],
            moments: Array.isArray(j) ? j : [],
            groups: y,
            photos: w.slice(0, 30),
            loading: false,
            loaded: true
          });
        } catch (t) {
          if (!l) {
            p(e => ({
              ...e,
              loading: false,
              loaded: true
            }));
          }
        }
      })();
      return () => {
        l = true;
      };
    }, [l, t, n, r]);
    return m;
  }(n, c, true, Z);
  const He = Ue ? Ue.length : 0;
  const Ye = e => Number.isInteger(e) && e >= 0 && e < He ? Ue[e].url : null;
  h.useEffect(() => {
    var e;
    if (((e = oe == null ? undefined : oe.music) == null ? undefined : e.nowPlaying) && !Re) {
      Le(oe.music.nowPlaying);
      De(oe.music.artist || "未知艺人");
      const e = (Ue && Ue[0] ? Ue[0].url : null) || "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400";
      Be(e);
    }
  }, [oe, Ue]);
  const [Je, Xe] = h.useState(null);
  const [Ze, Ke] = h.useState(null);
  const [Qe, es] = h.useState(() => {
    try {
      const e = localStorage.getItem("notes_open_note");
      if (e) {
        return JSON.parse(e);
      } else {
        return null;
      }
    } catch {
      return null;
    }
  });
  const [ss, as] = h.useState(() => {
    try {
      return localStorage.getItem("notes_open_folder") || null;
    } catch {
      return null;
    }
  });
  h.useEffect(() => {
    try {
      if (Qe) {
        localStorage.setItem("notes_open_note", JSON.stringify(Qe));
      } else {
        localStorage.removeItem("notes_open_note");
      }
    } catch (e) {}
  }, [Qe]);
  h.useEffect(() => {
    try {
      if (ss) {
        localStorage.setItem("notes_open_folder", ss);
      } else {
        localStorage.removeItem("notes_open_folder");
      }
    } catch (e) {}
  }, [ss]);
  const [is, ts] = h.useState(() => {
    try {
      const e = localStorage.getItem("notes_checklist_states");
      if (e) {
        return JSON.parse(e);
      } else {
        return {};
      }
    } catch {
      return {};
    }
  });
  h.useEffect(() => {
    try {
      localStorage.setItem("notes_checklist_states", JSON.stringify(is));
    } catch (e) {}
  }, [is]);
  const [ns, ls] = h.useState(() => {
    try {
      return localStorage.getItem("notes_icloud_expanded") !== "false";
    } catch {
      return true;
    }
  });
  h.useEffect(() => {
    try {
      localStorage.setItem("notes_icloud_expanded", ns ? "true" : "false");
    } catch (e) {}
  }, [ns]);
  const [rs, cs] = h.useState(() => {
    try {
      return localStorage.getItem("notes_iphone_expanded") !== "false";
    } catch {
      return true;
    }
  });
  h.useEffect(() => {
    try {
      localStorage.setItem("notes_iphone_expanded", rs ? "true" : "false");
    } catch (e) {}
  }, [rs]);
  const [os, ds] = h.useState(() => {
    try {
      return localStorage.getItem("ali_wallet_tab") || "balance";
    } catch {
      return "balance";
    }
  });
  h.useEffect(() => {
    try {
      localStorage.setItem("ali_wallet_tab", os);
    } catch (e) {}
  }, [os]);
  const [hs, ms] = h.useState(() => {
    try {
      const e = localStorage.getItem("selected_footprint_idx");
      if (e !== null) {
        return Number(e);
      } else {
        return null;
      }
    } catch {
      return null;
    }
  });
  h.useEffect(() => {
    try {
      if (hs !== null) {
        localStorage.setItem("selected_footprint_idx", hs.toString());
      } else {
        localStorage.removeItem("selected_footprint_idx");
      }
    } catch (e) {}
  }, [hs]);
  const [ps, us] = h.useState(() => {
    try {
      const e = localStorage.getItem("safari_open_web");
      if (e) {
        return JSON.parse(e);
      } else {
        return null;
      }
    } catch {
      return null;
    }
  });
  const [xs, gs] = h.useState(() => {
    try {
      return localStorage.getItem("safari_show_bookmarks_sheet") === "true";
    } catch {
      return false;
    }
  });
  const [fs, vs] = h.useState(() => {
    try {
      return localStorage.getItem("safari_bookmark_tab") || "bookmark";
    } catch {
      return "bookmark";
    }
  });
  const [js, bs] = h.useState(null);
  const Ns = e => {
    bs(e);
  };
  h.useEffect(() => {
    if (js) {
      const e = setTimeout(() => bs(null), 1500);
      return () => clearTimeout(e);
    }
  }, [js]);
  h.useEffect(() => {
    try {
      if (ps) {
        localStorage.setItem("safari_open_web", JSON.stringify(ps));
      } else {
        localStorage.removeItem("safari_open_web");
      }
    } catch (e) {}
  }, [ps]);
  h.useEffect(() => {
    try {
      localStorage.setItem("safari_show_bookmarks_sheet", xs ? "true" : "false");
    } catch (e) {}
  }, [xs]);
  h.useEffect(() => {
    try {
      localStorage.setItem("safari_bookmark_tab", fs);
    } catch (e) {}
  }, [fs]);
  const [ys, ks] = h.useState(null);
  const [ws, Ss] = h.useState(null);
  const [Cs, _s] = h.useState(() => new Set());
  const [Is, zs] = h.useState(() => new Set());
  h.useEffect(() => {
    Ss(null);
    _s(new Set());
    zs(new Set());
  }, [c, Z]);
  const [As, $s] = h.useState(false);
  const [Ps, Ts] = h.useState(null);
  const [Es, Ms] = h.useState(-1);
  const [Rs, Ls] = h.useState(null);
  const [Ws, Ds] = h.useState(null);
  const [Fs, Bs] = h.useState(null);
  const [Os, Gs] = h.useState(null);
  const qs = h.useRef([]);
  const Us = h.useRef(0);
  const Vs = h.useRef(null);
  const Hs = h.useRef(null);
  const Ys = h.useRef(null);
  const [Js, Xs] = h.useState(false);
  h.useEffect(() => {
    const e = setTimeout(() => Xs(true), 320);
    return () => clearTimeout(e);
  }, []);
  const Zs = (e = "") => `hp-root ${e} ${Js ? "" : "hp-anim-open"} ${Ps ? "hp-peeking-open" : ""}`.trim();
  const Ks = ce == null ? undefined : ce.lockScreen;
  const [Qs, ea] = h.useState(P && K);
  const [sa, aa] = h.useState("");
  const [ia, ta] = h.useState(false);
  const [na, la] = h.useState(false);
  const [ra, ca] = h.useState(0);
  const [oa, da] = h.useState(false);
  const [ha, ma] = h.useState("");
  const [pa, ua] = h.useState("notifs");
  const xa = h.useRef(null);
  const ga = Array.isArray(oe == null ? undefined : oe.contacts) && oe.contacts.length > 0;
  const fa = !Qs && ((Ks == null ? undefined : Ks.enabled) || ga);
  const va = (Ks == null ? undefined : Ks.hasPassword) && (Ks == null ? undefined : Ks.password) ? Ks.password : "";
  const ja = P || !!Rs;
  h.useEffect(() => {
    if (!fa || !ja) {
      return;
    }
    let e = [];
    e.push(setTimeout(() => {
      ua("pad");
      ue(20);
    }, 1100));
    if (va) {
      va.split("").forEach((s, a) => {
        e.push(setTimeout(() => {
          ma(va.slice(0, a + 1));
          ue(25);
        }, 1700 + a * 320));
      });
      e.push(setTimeout(() => {
        ue([40, 60]);
        Q();
        ea(true);
      }, 1700 + va.length * 320 + 400));
    } else {
      e.push(setTimeout(() => {
        ue(40);
        Q();
        ea(true);
      }, 2000));
    }
    return () => e.forEach(clearTimeout);
  }, [fa, ja, va]);
  const [ba, Na] = h.useState([]);
  const ya = e => {
    if (e) {
      Na(s => [...s, e]);
      setTimeout(() => {
        if (Ys.current) {
          Ys.current.scrollIntoView({
            block: "end"
          });
        }
      }, 30);
    }
  };
  const [ka, wa] = h.useState([]);
  const Sa = e => {
    if (e) {
      wa(s => [...s, {
        text: e,
        id: Date.now()
      }]);
      setTimeout(() => {
        if (Ys.current) {
          Ys.current.scrollIntoView({
            block: "end"
          });
        }
      }, 30);
    }
  };
  const Ca = () => {
    qs.current.forEach(clearTimeout);
    qs.current = [];
    if (Us.current) {
      cancelAnimationFrame(Us.current);
      Us.current = 0;
    }
  };
  const _a = () => {
    Ca();
    Ra();
    Ts(null);
    Ms(-1);
    Ds(null);
    Bs(null);
    Gs(null);
  };
  const [Ia, za] = h.useState(false);
  h.useEffect(() => {
    let e = () => {};
    (async () => {
      const {
        subscribe: s,
        getSnapshot: a
      } = await t(async () => {
        const {
          subscribe: e,
          getSnapshot: s
        } = await import("./main-BO9xa-SQ.js").then(e => e.cj);
        return {
          subscribe: e,
          getSnapshot: s
        };
      }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
      const i = e => {
        $s(e.status === "generating");
        za(e.contentStatus === "generating");
      };
      i(a());
      e = s(i);
    })();
    return () => e();
  }, []);
  const Aa = async () => {
    if (!Ps && !As && !!ie) {
      ie();
    }
  };
  h.useEffect(() => {
    var e;
    if (ne && ((e = ne.steps) == null ? undefined : e.length) && !Ps && !Rs) {
      Ls(ne);
      if (le != null) {
        le();
      }
    }
  }, [ne]);
  h.useEffect(() => {
    if (!!Rs && !fa && !Ps) {
      Ts(Rs);
      Ms(0);
      Ls(null);
    }
  }, [Rs, fa]);
  const $a = (e, s) => {
    qs.current.push(setTimeout(e, s));
  };
  const Pa = (e, s = 0.14) => Math.max(0, Math.round(e + (Math.random() * 2 - 1) * e * s));
  const Ta = (e, s, a = false) => {
    const i = Hs.current;
    if (i) {
      i.style.transition = a ? "left 0.5s cubic-bezier(0.3,0.7,0.2,1), top 0.5s cubic-bezier(0.3,0.7,0.2,1)" : "none";
      i.style.left = e + "px";
      i.style.top = s + "px";
      i.style.opacity = "1";
    }
  };
  const Ea = () => {
    const e = Hs.current;
    if (e) {
      e.classList.remove("tap");
      e.offsetWidth;
      e.classList.add("tap");
    }
  };
  const Ma = (e, s = false, a = 0) => {
    const i = Vs.current;
    const t = typeof e == "string" ? document.querySelectorAll(e)[a] || document.querySelector(e) : e;
    if (!i || !t) {
      return;
    }
    const n = t.getBoundingClientRect();
    const l = i.getBoundingClientRect();
    Ta(n.left - l.left + Math.min(n.width / 2, 60), n.top - l.top + n.height / 2, true);
    if (s) {
      ue(14);
      Ea();
    }
  };
  const Ra = () => {
    if (Us.current) {
      cancelAnimationFrame(Us.current);
      Us.current = 0;
    }
  };
  const La = (e, s, a, i, t, n, l) => {
    Ra();
    const r = performance.now();
    const c = o => {
      const d = Math.min(1, (o - r) / i);
      const h = 1 - Math.pow(1 - d, 3);
      e.scrollTop = s + (a - s) * h;
      Ta(t, n + (l - n) * h);
      Us.current = d < 1 ? requestAnimationFrame(c) : 0;
    };
    Us.current = requestAnimationFrame(c);
  };
  h.useEffect(() => {
    if (!Ps || Es < 0) {
      return;
    }
    Ca();
    const e = Ps.steps;
    if (Es >= e.length) {
      me("home");
      _e(null);
      es(null);
      Ds(null);
      if (Ps.ending) {
        $a(() => Ds({
          kind: "thought",
          text: Ps.ending
        }), 500);
      }
      $a(() => _a(), 3800);
      return;
    }
    const s = e[Es];
    const a = oe || {};
    let i = 0;
    if (s.open && s.app === "messages") {
      const e = String(s.open).replace(/\(.*\)/, "").trim();
      if (!/朋友圈|moments|动态|收藏|favorites/.test(e)) {
        if (e === Fa || s.open.includes("自己") || s.open.includes(Fa)) {
          i = 0;
        } else {
          const s = (a.contacts || []).findIndex(s => s.name === e || e.includes(s.name) || s.name.includes(e));
          i = (s >= 0 ? s : 0) + 1;
        }
      }
    } else if (!!s.open && (s.app === "notes" || s.app === "browser" || s.app === "gallery")) {
      i = Math.max(0, (parseInt(s.open, 10) || 1) - 1);
    }
    const t = {
      messages: ".hp-conv",
      notes: ".ios-note-row",
      browser: ".safari-often-row",
      gallery: ".hp-album-card"
    }[s.app] || null;
    const n = Fa;
    const l = `${s.thought || ""}`.includes(n);
    const r = s.app === "messages" && s.open && (s.open.includes("自己") || s.open.includes(n));
    const c = s.discovery || (r ? "💗 翻到了 ta 和你的聊天，一条都没删" : l ? "💗 这里居然有关于你的痕迹" : null);
    Ds(null);
    Gs(null);
    const o = Es > 0 ? e[Es - 1] : null;
    let d;
    if (o && o.app === "messages" && s.app === "messages") {
      $a(() => Ma(".hp-back", false), 250);
      $a(() => {
        Ea();
        ue(16);
        _e(null);
        es(null);
        us(null);
        ks(null);
        Ke(null);
        Xe(null);
        Se("chats");
      }, 650);
      d = 650 + Pa(820);
    } else {
      me("home");
      _e(null);
      es(null);
      us(null);
      ks(null);
      Ke(null);
      Se("chats");
      $a(() => Ma(`[data-peek-app="${s.app}"]`, false), 350);
      $a(() => {
        Bs(s.app);
        Ea();
        ue(18);
      }, 850);
      $a(() => {
        Bs(null);
        me(s.app);
      }, 1200);
      d = 1200 + Pa(1100);
    }
    if (s.open) {
      if (t) {
        $a(() => {
          const e = document.querySelectorAll(t);
          const s = e[i] || e[0];
          if (s) {
            try {
              s.scrollIntoView({
                block: "center"
              });
            } catch {}
          }
          Ma(t, false, i);
        }, d);
      }
      $a(() => {
        if (t) {
          Ma(t, true, i);
        } else {
          Ea();
        }
      }, d + 520);
      $a(() => (() => {
        var e;
        var i;
        var t;
        var n;
        var l;
        if (s.open) {
          if (s.app === "messages") {
            const e = String(s.open).replace(/\(.*\)/, "").trim();
            if (/朋友圈|moments|动态/.test(e)) {
              Se("moments");
              return;
            }
            if (/收藏|favorites/.test(e)) {
              Se("favorites");
              return;
            }
            if (e === Fa || s.open.includes("自己") || s.open.includes(Fa)) {
              Se("chats");
              _e("self");
              return;
            }
            const i = (a.contacts || []).find(s => s.name === e || e.includes(s.name) || s.name.includes(e));
            if (i) {
              Se("chats");
              Ke(i);
              _e("ai");
            }
          } else if (s.app === "notes") {
            const i = parseInt(s.open, 10) - 1;
            const t = (((e = a.notes) == null ? undefined : e.rows) || [])[i];
            if (t) {
              es(t);
            }
          } else if (s.app === "browser") {
            const e = parseInt(s.open, 10) - 1;
            const t = (((i = a.browser) == null ? undefined : i.rows) || [])[e];
            if (t) {
              us(t);
            }
          } else if (s.app === "gallery") {
            const e = parseInt(s.open, 10) - 1;
            const i = a.galleryCaptions || [];
            const r = (t = (Ue || [])[e]) == null ? undefined : t.url;
            if (r) {
              ks({
                url: r,
                cap: (n = e, ((l = i.find(e => e && e.idx === n)) == null ? undefined : l.text) || (typeof i[n] == "string" ? i[n] : ""))
              });
            }
          }
        }
      })(), d + 800);
      d += Pa(1100);
    }
    if (te != null) {
      te(Es, e.length);
    }
    const h = String(s.thought || "").split(new RegExp("(?<=[。！？!?…」])")).map(e => e.trim()).filter(Boolean);
    const m = h.length ? h : [s.thought];
    const p = e => Pa(1350 + Math.min(1500, ((e == null ? undefined : e.length) || 0) * 90), 0.1);
    const u = d + Pa(800);
    $a(() => {
      const e = (e, s) => qs.current.push(setTimeout(e, s));
      const a = (s, a, i) => e(() => {
        Ds({
          kind: "thought",
          text: s,
          seq: Es * 100 + a
        });
        ue(12);
      }, i);
      let i = 0;
      let t = 0;
      const n = s.scroll ? document.querySelector(".hp-chat-thread") : null;
      const l = n ? n.closest(".hp-appbody") || n.parentElement : null;
      if (l) {
        const s = l.scrollHeight - l.clientHeight;
        l.scrollTop = s;
        const n = Vs.current;
        const r = n == null ? undefined : n.getBoundingClientRect();
        const c = r ? r.width * 0.5 : 160;
        const o = r ? r.height : 560;
        const d = Math.max(80, o * 0.55);
        const h = s < 24 ? 0 : Math.min(4, Math.ceil(s / d));
        if (m[t] != null) {
          i += Pa(650);
          a(m[t], t, i);
          i += p(m[t]);
          t++;
        }
        let u = s;
        for (let x = 0; x < h && u > 0; x++) {
          const s = u;
          const n = Math.max(0, u - d);
          e(() => La(l, s, n, 620, c, o * 0.35, o * 0.72), i);
          u = n;
          i += 620 + Pa(780);
          if (m[t] != null) {
            a(m[t], t, i);
            i += p(m[t]);
            t++;
          }
        }
      } else {
        if (s.scroll || s.app !== "messages") {
          ((e = 200, s = 1100) => {
            const a = document.querySelector(".hp-appbody, .hp-desktop-scroll, .ios-screen, .safari-scroll");
            if (!a) {
              return;
            }
            const i = a.scrollHeight - a.clientHeight;
            if (i < 24) {
              return;
            }
            const t = Math.min(e, i);
            const n = Vs.current;
            const l = n == null ? undefined : n.getBoundingClientRect();
            const r = l ? l.width * 0.5 : 160;
            La(a, a.scrollTop, a.scrollTop + t, s, r, l ? l.height * 0.6 : 330, l ? l.height * 0.4 : 220);
          })(180, 1300);
        }
        i += Pa(s.scroll ? 1600 : 1000);
      }
      while (m[t] != null) {
        a(m[t], t, i);
        i += p(m[t]);
        t++;
      }
      if (c) {
        e(() => {
          Gs(c);
          ue([30, 50, 30]);
        }, i + 200);
      }
      const r = i + (c ? 2000 : 800);
      e(() => {
        Ds(null);
        Gs(null);
      }, Math.max(0, r - 400));
      e(() => Ms(e => e + 1), r);
    }, u);
    return () => Ca();
  }, [Ps, Es]);
  h.useEffect(() => () => Ca(), []);
  const Wa = Ps ? m.jsxs("div", {
    className: "hp-peek-layer",
    ref: Vs,
    "aria-hidden": false,
    children: [m.jsx("div", {
      className: "hp-peek-scrim"
    }), m.jsx("span", {
      className: "hp-finger",
      ref: Hs,
      style: {
        opacity: 0
      }
    }), Os && m.jsx("div", {
      className: "hp-discovery",
      children: Os
    }), Ws && m.jsx("div", {
      className: "hp-peek-bubble",
      children: Ws.text
    }, Ws.seq ?? "b"), m.jsx("button", {
      className: "hp-peek-skip",
      onClick: e => {
        e.stopPropagation();
        _a();
      },
      children: "跳过 ✕"
    })]
  }) : null;
  h.useEffect(() => {
    if ((Ce === "self" || Je || Ze) && Ys.current) {
      Ys.current.scrollIntoView({
        block: "end"
      });
    }
  }, [Ce, Je, Ze, Oe.length]);
  const Da = o || "对方";
  const Fa = l || "对方";
  const Ba = P ? "我的手机" : `已接入 ${Da} 的设备`;
  const Oa = Z === "user";
  const Ga = e => Oa ? !Ne(e) : Ne(e);
  const qa = {
    id: "hp-other",
    name: Fa,
    image: r,
    avatar: r
  };
  const Ua = {
    id: "hp-owner",
    name: Da,
    avatar: d,
    image: d
  };
  const Va = () => {
    me("home");
    _e(null);
    es(null);
    us(null);
    ks(null);
    Ss(null);
  };
  const Ha = Object.fromEntries(ve.map(e => [e.key, e]));
  const Ya = (() => {
    if (de) {
      return u;
    }
    const e = Ue ? Ue.length : 0;
    const s = ce == null ? undefined : ce.wallpaperPhoto;
    const a = Number.isInteger(s) && s >= 0 && s < e ? Ue[s].url : null;
    if (a) {
      return {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.45)), url(${a})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      };
    } else {
      return u;
    }
  })();
  if (fa) {
    const e = (ce == null ? undefined : ce.statusColor) === "dark";
    const s = new Date();
    const a = String(s.getHours()).padStart(2, "0");
    const i = String(s.getMinutes()).padStart(2, "0");
    const t = `${s.getMonth() + 1}月${s.getDate()}日 星期${"日一二三四五六"[s.getDay()]}`;
    const n = (() => {
      var e;
      var s;
      var a;
      var i;
      const t = oe || {};
      const n = [];
      (t.contacts || []).slice(0, 3).forEach(e => {
        const s = Array.isArray(e.messages) ? [...e.messages].reverse().find(e => e.who === "them") : null;
        n.push({
          app: "消息",
          icon: "💬",
          tint: "#34c759",
          title: e.name,
          body: (s == null ? undefined : s.text) || e.preview || "发来一条消息",
          name: e.name
        });
      });
      if ((s = (e = t.wallet) == null ? undefined : e.rows) == null ? undefined : s.length) {
        const e = t.wallet.rows[0];
        n.push({
          app: "钱包",
          icon: "💰",
          tint: "#1677ff",
          title: "支付宝",
          body: `${String(e.amount).startsWith("-") || !/\+/.test(String(e.amount)) ? "支出" : "收入"} ${e.amount} · ${e.name}`
        });
      }
      if ((i = (a = t.browser) == null ? undefined : a.rows) == null ? undefined : i.length) {
        n.push({
          app: "提醒",
          icon: "🔔",
          tint: "#ff9f0a",
          title: "推送",
          body: `「${t.browser.rows[0].title}」更新了`
        });
      }
      return n.slice(0, 5);
    })();
    const l = e => {
      const s = (sa + e).slice(0, 4);
      aa(s);
      ta(false);
      if (s.length === 4) {
        if (s === Ks.password) {
          ue([40, 60]);
          la(true);
          setTimeout(() => ea(true), 900);
        } else {
          ue([80, 60, 80]);
          ta(true);
          ca(e => e + 1);
          setTimeout(() => {
            aa("");
            ta(false);
          }, 600);
        }
      }
    };
    const r = ja;
    const c = r ? ha.length : sa.length;
    const o = Ks == null ? undefined : Ks.hasPassword;
    const d = () => {
      if (pa !== "pad") {
        ue(20);
        ua("pad");
      }
    };
    const h = e => {
      var s;
      var a;
      xa.current = ((a = (s = e.touches) == null ? undefined : s[0]) == null ? undefined : a.clientY) ?? null;
    };
    const p = e => {
      var s;
      var a;
      const i = xa.current;
      const t = ((a = (s = e.changedTouches) == null ? undefined : s[0]) == null ? undefined : a.clientY) ?? null;
      if (i != null && t != null && i - t > 40) {
        if (o) {
          d();
        } else if (!P) {
          ea(true);
        }
      }
      xa.current = null;
    };
    const u = pa === "pad";
    return m.jsxs("div", {
      className: Zs(`hp-lockscreen ${e ? "ui-dark" : "ui-light"} stage-${pa}`),
      style: Ya,
      onTouchStart: h,
      onTouchEnd: p,
      children: [m.jsx("div", {
        className: "hp-lock-mask"
      }), m.jsxs("div", {
        className: "hp-lock-top",
        children: [m.jsxs("div", {
          className: "hp-lock-clock",
          children: [a, ":", i]
        }), m.jsx("div", {
          className: "hp-lock-date",
          children: t
        }), (Ks == null ? undefined : Ks.signature) && m.jsx("div", {
          className: "hp-lock-sig",
          children: Ks.signature
        })]
      }), !u && m.jsxs("div", {
        className: "hp-lock-notifpane",
        children: [n.length > 0 && m.jsx("div", {
          className: "hp-lock-notifs",
          children: n.map((e, s) => m.jsxs("div", {
            className: "hp-lock-notif",
            children: [m.jsx("span", {
              className: "hp-lock-notif-ic",
              style: {
                background: e.tint
              },
              children: e.icon
            }), m.jsxs("div", {
              className: "hp-lock-notif-mid",
              children: [m.jsxs("div", {
                className: "hp-lock-notif-top",
                children: [m.jsx("span", {
                  className: "hp-lock-notif-app",
                  children: e.title
                }), m.jsx("span", {
                  className: "hp-lock-notif-now",
                  children: "现在"
                })]
              }), m.jsx("div", {
                className: "hp-lock-notif-body",
                children: e.body
              })]
            })]
          }, s))
        }), m.jsxs("div", {
          className: "hp-lock-slide",
          onClick: P ? undefined : d,
          children: [m.jsx("span", {
            className: "hp-lock-grip"
          }), m.jsx("span", {
            children: P ? "正在解锁…" : o ? "↑ 上滑输入密码" : "↑ 上滑解锁"
          })]
        })]
      }), u && (na ? m.jsxs("div", {
        className: "hp-lock-reason",
        children: ["🔓 ", (Ks == null ? undefined : Ks.passwordReason) || "解锁成功"]
      }) : r && o ? m.jsxs("div", {
        className: "hp-lock-pwzone",
        children: [m.jsx("div", {
          className: "hp-pw-dots auto",
          children: [0, 1, 2, 3].map(e => m.jsx("span", {
            className: c > e ? "on" : ""
          }, e))
        }), m.jsx("div", {
          className: "hp-lock-hint",
          children: "正在解锁…"
        })]
      }) : r ? m.jsx("div", {
        className: "hp-lock-slide",
        children: m.jsx("span", {
          children: "正在解锁…"
        })
      }) : o ? m.jsxs("div", {
        className: "hp-lock-pwzone",
        children: [m.jsx("div", {
          className: "hp-pw-dots " + (ia ? "err" : ""),
          children: [0, 1, 2, 3].map(e => m.jsx("span", {
            className: sa.length > e ? "on" : ""
          }, e))
        }), Ks.hint && m.jsxs("div", {
          className: "hp-lock-hint",
          children: ["💡 ", Ks.hint]
        }), m.jsxs("div", {
          className: "hp-pw-pad",
          children: [["1", "2", "3", "4", "5", "6", "7", "8", "9"].map(e => m.jsx("button", {
            onClick: () => l(e),
            children: e
          }, e)), m.jsx("span", {}), m.jsx("button", {
            onClick: () => l("0"),
            children: "0"
          }), m.jsx("button", {
            className: "hp-pw-del",
            onClick: () => {
              aa(sa.slice(0, -1));
              ta(false);
            },
            children: "⌫"
          })]
        }), oa ? m.jsxs("div", {
          className: "hp-lock-answer",
          children: ["密码是 ", m.jsx("b", {
            children: Ks.password
          })]
        }) : ra >= 3 ? m.jsx("button", {
          className: "hp-lock-reveal",
          onClick: () => {
            ue(40);
            da(true);
          },
          children: "看不出来？查看答案"
        }) : null]
      }) : m.jsx("div", {
        className: "hp-lock-slide",
        onClick: () => {
          ue(40);
          ea(true);
        },
        children: m.jsx("span", {
          children: "↑ 再上滑解锁"
        })
      })), m.jsx("button", {
        className: "hp-lock-exit",
        onClick: A,
        children: "断开"
      })]
    });
  }
  if (he === "home") {
    const e = (ce == null ? undefined : ce.statusColor) === "dark";
    const s = e => {
      me(e);
      Se("chats");
      _e(null);
      es(null);
      us(null);
      Ss(null);
      ks(null);
    };
    const a = (Array.isArray(ce == null ? undefined : ce.dock) && ce.dock.length ? ce.dock : ["messages", "gallery", "music", "browser"]).slice(0, 4);
    const i = (Array.isArray(ce == null ? undefined : ce.layout) && ce.layout.length ? ce.layout : ve.filter(e => !a.includes(e.key)).map((e, s) => ({
      kind: "app",
      key: e.key,
      x: s % 4,
      y: Math.floor(s / 4),
      w: 1,
      h: 1
    }))).filter(e => e.kind !== "app" || !a.includes(e.key));
    const t = a.map(e => Ha[e]).filter(Boolean).slice(0, 4);
    const n = de ? null : Ye(ce == null ? undefined : ce.wallpaperPhoto);
    const l = Ye(ce == null ? undefined : ce.widgetPhoto);
    const r = new Set([ce == null ? undefined : ce.wallpaperPhoto, ce == null ? undefined : ce.widgetPhoto]);
    const c = (Ue || []).filter((e, s) => !r.has(s)).slice(0, 4).map(e => e.url);
    const o = n ? {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.12), rgba(0,0,0,0.28)), url(${n})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    } : u;
    const d = (e, a) => {
      const i = {
        gridColumn: `${e.x + 1} / span ${e.w}`,
        gridRow: `${e.y + 1} / span ${e.h}`
      };
      if (e.kind === "app") {
        const t = Ha[e.key];
        if (!t) {
          return null;
        }
        const n = t.icon;
        const l = Fs === t.key;
        return m.jsxs("div", {
          "data-peek-app": t.key,
          className: "hp-cell hp-app " + (l ? "hp-tapped" : ""),
          style: i,
          onClick: () => s(t.key),
          children: [m.jsxs("div", {
            className: "hp-app-tile",
            children: [l && m.jsx("span", {
              className: "hp-tap-ring"
            }), m.jsx(n, {
              size: 24,
              strokeWidth: 1.6
            })]
          }), m.jsx("span", {
            className: "hp-app-label",
            children: t.label
          })]
        }, `a-${a}`);
      }
      if (e.type === "photo") {
        if (l) {
          return m.jsx("div", {
            className: "hp-cell hp-photo-widget",
            style: i,
            children: m.jsx("img", {
              src: l,
              alt: ""
            })
          }, `w-${a}`);
        } else {
          return null;
        }
      }
      if (e.type === "collage") {
        if (c.length < 2) {
          return null;
        }
        const e = c.slice(0, 4);
        return m.jsx("div", {
          className: `hp-cell hp-collage n${e.length}`,
          style: i,
          children: e.map((e, s) => m.jsx("img", {
            src: e,
            alt: ""
          }, s))
        }, `w-${a}`);
      }
      e.type;
      return m.jsx("div", {
        className: `hp-cell hp-widget wt-${e.type} ${e.w >= 2 ? "wide" : ""} ${e.h >= 2 ? "tall" : ""}`,
        style: i,
        children: pe(e, (ce == null ? undefined : ce.accent) || "#8a7fff")
      }, `w-${a}`);
    };
    const h = e => {
      const a = e.icon;
      const i = Fs === e.key;
      return m.jsx("div", {
        "data-peek-app": e.key,
        className: "hp-app hp-dock-app " + (i ? "hp-tapped" : ""),
        onClick: () => s(e.key),
        children: m.jsxs("div", {
          className: "hp-app-tile",
          children: [i && m.jsx("span", {
            className: "hp-tap-ring"
          }), m.jsx(a, {
            size: 24,
            strokeWidth: 1.6
          })]
        })
      }, `d-${e.key}`);
    };
    return m.jsxs("div", {
      className: Zs(),
      children: [!P && m.jsxs("div", {
        className: "hp-topbar",
        children: [m.jsxs("button", {
          className: "hp-back",
          onClick: A,
          children: [m.jsx(C, {
            size: 20
          }), "断开"]
        }), m.jsxs("div", {
          className: "hp-title",
          children: [m.jsx("span", {
            className: "hp-dot"
          }), Ba]
        })]
      }), m.jsxs("div", {
        className: "hp-desktop themed " + (e ? "ui-dark" : "ui-light"),
        "data-skin": p,
        "data-icon": (ce == null ? undefined : ce.iconStyle) || "glass",
        style: {
          ...o,
          "--icon-color": (ce == null ? undefined : ce.iconColor) || (ce == null ? undefined : ce.accent) || "#8a7fff"
        },
        children: [m.jsxs("div", {
          className: "hp-deco",
          "aria-hidden": true,
          children: [m.jsx("span", {
            className: "hp-star s1",
            children: "✦"
          }), m.jsx("span", {
            className: "hp-star s2",
            children: "✧"
          }), m.jsx("span", {
            className: "hp-star s3",
            children: "✦"
          }), m.jsx("span", {
            className: "hp-star s4",
            children: "✧"
          }), m.jsx("span", {
            className: "hp-star s5",
            children: "✦"
          }), m.jsx("span", {
            className: "hp-watermark wm1",
            children: Da
          }), m.jsx("span", {
            className: "hp-watermark wm2",
            children: "Phone"
          })]
        }), m.jsxs("div", {
          className: "hp-desktop-scroll",
          children: [(ce == null ? undefined : ce.lockText) && m.jsx("div", {
            className: "hp-lock-text",
            children: ce.lockText
          }), m.jsxs("div", {
            className: "hp-freegrid",
            children: [i.map(d), ee && m.jsxs("div", {
              className: "hp-cell hp-app hp-skin-cell",
              onClick: ee,
              children: [m.jsx("div", {
                className: "hp-app-tile",
                children: m.jsx(_, {
                  size: 24,
                  strokeWidth: 1.6
                })
              }), m.jsx("span", {
                className: "hp-app-label",
                children: "外观"
              })]
            }), se && (() => {
              const e = ae || Ia;
              return m.jsxs("div", {
                className: "hp-cell hp-app hp-regen-cell " + (e ? "busy" : ""),
                onClick: () => {
                  if (!e) {
                    se();
                  }
                },
                children: [m.jsx("div", {
                  className: "hp-app-tile",
                  children: m.jsx(I, {
                    size: 24,
                    strokeWidth: 1.6,
                    className: e ? "hp-spin" : ""
                  })
                }), m.jsx("span", {
                  className: "hp-app-label",
                  children: e ? "生成中…" : "刷新内容"
                })]
              });
            })(), ie && !P && m.jsxs("div", {
              className: "hp-cell hp-app hp-peek-cell " + (As ? "busy" : ""),
              onClick: Aa,
              children: [m.jsx("div", {
                className: "hp-app-tile",
                children: m.jsx(z, {
                  size: 24,
                  strokeWidth: 1.6,
                  className: As ? "hp-spin" : ""
                })
              }), m.jsx("span", {
                className: "hp-app-label",
                children: As ? "查探中…" : "自动查探"
              })]
            })]
          })]
        }), m.jsx("div", {
          className: "hp-dock",
          children: t.map(h)
        })]
      }), (As || Ia) && m.jsxs("div", {
        className: "hp-peekgen-hint",
        children: [m.jsx("span", {
          className: "hp-peekgen-spin"
        }), m.jsxs("div", {
          children: [m.jsx("div", {
            className: "hp-peekgen-t",
            children: As ? "正在查探这台手机…" : "正在生成手机内容…"
          }), m.jsx("div", {
            className: "hp-peekgen-s",
            children: "可以先去忙别的，好了会通知你"
          })]
        })]
      }), Wa]
    });
  }
  const Ja = ({
    title: e,
    children: s,
    light: a,
    onBack: i,
    footer: t,
    hideHeader: n
  }) => m.jsxs("div", {
    className: Zs(a ? "hp-light" : ""),
    children: [!n && m.jsxs("div", {
      className: "hp-topbar app",
      children: [m.jsxs("button", {
        className: "hp-back",
        onClick: i || Va,
        children: [m.jsx(C, {
          size: 20
        }), "返回"]
      }), m.jsx("div", {
        className: "hp-title",
        children: e
      })]
    }), m.jsx("div", {
      className: "hp-appbody",
      children: s
    }, Ps ? `${he}|${ge}|${Ce || ""}|${(Ze == null ? undefined : Ze.name) || ""}|${Qe ? "1" : "0"}|${ps ? "1" : "0"}` : undefined), t]
  });
  const Xa = () => {
    _e(null);
    Xe(null);
    Ke(null);
  };
  const Za = oe || {};
  if (he === "messages") {
    if (Ce === "ai" && Ze) {
      return m.jsxs(m.Fragment, {
        children: [m.jsx(Ja, {
          title: Ze.name,
          light: true,
          onBack: Xa,
          children: m.jsxs("div", {
            className: "hp-chat-thread",
            children: [(!Ze.messages || Ze.messages.length === 0) && m.jsx("div", {
              className: "hp-empty",
              children: "还没有聊天记录"
            }), (Ze.messages || []).map((e, s) => {
              const a = e.who === "owner";
              return m.jsxs("div", {
                className: "hp-bubble-row " + (a ? "right" : "left"),
                children: [!a && m.jsx(ke, {
                  src: re[Ze.name] || null,
                  size: 32,
                  name: Ze.name,
                  fallbackColor: "#b8a9d4"
                }), m.jsx("div", {
                  className: "hp-bubble",
                  children: e.text
                }), a && m.jsx(ke, {
                  src: d,
                  size: 32,
                  name: Da,
                  fallbackColor: "#8ab87e"
                })]
              }, `ai-${s}`);
            }), m.jsx("div", {
              ref: Ys
            })]
          })
        }), Wa]
      });
    }
    if (Ce === "group" && Je) {
      const e = m.jsx(xe, {
        placeholder: P ? "发消息…" : `以 ${Da} 的名义发送…`,
        onSend: Sa
      });
      return m.jsxs(m.Fragment, {
        children: [m.jsx(Ja, {
          title: Je.name || "群聊",
          light: true,
          onBack: Xa,
          footer: e,
          children: m.jsxs("div", {
            className: "hp-chat-thread",
            children: [Je.msgs.length === 0 && m.jsx("div", {
              className: "hp-empty",
              children: "还没有群消息"
            }), Je.msgs.slice(-50).map((e, s) => {
              const a = e.senderName || e.who || (e.sender === "me" ? Fa : "");
              const i = Oa && e.sender === "me" || a === Da || a === o;
              return m.jsxs("div", {
                className: "hp-bubble-row " + (i ? "right" : "left"),
                children: [!i && m.jsx(ke, {
                  src: e.senderAvatar || e.avatar || re[a],
                  size: 32,
                  name: a
                }), m.jsxs("div", {
                  className: "hp-grp-col",
                  children: [!i && m.jsx("div", {
                    className: "hp-grp-sender",
                    children: a
                  }), we(e)]
                }), i && m.jsx(ke, {
                  src: d,
                  size: 32,
                  name: Da,
                  fallbackColor: "#8ab87e"
                })]
              }, `g-${s}-${e.id ?? ""}`);
            }), ka.map((e, s) => m.jsxs("div", {
              className: "hp-bubble-row right",
              children: [m.jsxs("div", {
                className: "hp-bubble hp-forged",
                children: [e.text, !P && m.jsx("span", {
                  className: "hp-forged-tag",
                  children: "伪造"
                })]
              }), m.jsx(ke, {
                src: d,
                size: 32,
                name: Da,
                fallbackColor: "#8ab87e"
              })]
            }, `gfm-${e.id}-${s}`)), m.jsx("div", {
              ref: Ys
            })]
          })
        }), Wa]
      });
    }
    if (Ce === "self") {
      const e = m.jsx(xe, {
        placeholder: P ? "发消息…" : `以 ${Da} 的名义发送…`,
        onSend: ya
      });
      return m.jsxs(m.Fragment, {
        children: [m.jsx(Ja, {
          title: Fa,
          light: true,
          onBack: Xa,
          footer: e,
          children: m.jsxs("div", {
            className: "hp-chat-thread",
            children: [Ve && m.jsx("div", {
              className: "hp-empty",
              children: "读取中…"
            }), !Ve && Oe.length === 0 && m.jsx("div", {
              className: "hp-empty",
              children: "还没有聊天记录"
            }), Oe.length > 50 && m.jsx("div", {
              className: "hp-empty",
              style: {
                padding: "12px 20px"
              },
              children: "仅显示最近 50 条"
            }), Oe.slice(-50).map((e, s) => m.jsx(x, {
              ...fe,
              msg: e,
              index: s,
              isMe: Ga(e),
              activeChatChar: qa,
              nickname: Fa,
              currentProfileUser: Ua,
              partnerAvatar: r,
              userAvatar: d
            }, `c-${s}-${e.id ?? ""}`)), ba.map((e, s) => m.jsxs("div", {
              className: "hp-bubble-row right",
              children: [m.jsxs("div", {
                className: "hp-bubble hp-forged",
                children: [e, !P && m.jsx("span", {
                  className: "hp-forged-tag",
                  children: "伪造"
                })]
              }), m.jsx(ke, {
                src: d,
                name: Da,
                fallbackColor: "#8ab87e"
              })]
            }, `fm-${s}`)), m.jsx("div", {
              ref: Ys
            })]
          })
        }), Wa]
      });
    }
    const e = ge === "chats" ? "微信" : ge === "moments" ? "朋友圈" : ge === "contacts" ? "通讯录" : "我";
    const s = m.jsx("div", {
      className: "wechat-bottom-bar",
      children: je.map(e => {
        const s = e.icon;
        const a = ge === e.key;
        return m.jsxs("button", {
          className: "wechat-tab-btn " + (a ? "active" : ""),
          onClick: () => Se(e.key),
          children: [m.jsx("div", {
            className: "wechat-tab-icon-wrapper",
            children: m.jsx(s, {
              size: 20,
              strokeWidth: a ? 2.2 : 1.6
            })
          }), m.jsx("span", {
            className: "wechat-tab-label",
            children: e.label
          })]
        }, e.key);
      })
    });
    return m.jsxs(m.Fragment, {
      children: [m.jsxs(Ja, {
        title: e,
        light: true,
        footer: s,
        children: [ge === "chats" && m.jsxs("div", {
          className: "hp-list",
          children: [Ve && m.jsx("div", {
            className: "hp-empty",
            children: "读取中…"
          }), !Ve && m.jsxs("div", {
            className: "hp-conv",
            onClick: () => _e("self"),
            children: [m.jsx(ke, {
              src: r,
              size: 46,
              name: Fa
            }), m.jsxs("div", {
              className: "hp-conv-mid",
              children: [m.jsx("div", {
                className: "hp-conv-name",
                children: Fa
              }), m.jsx("div", {
                className: "hp-conv-prev",
                children: Oe.length ? ye(Oe[Oe.length - 1]) : "暂无消息"
              })]
            }), m.jsx("div", {
              className: "hp-conv-time",
              children: Oe.length ? be(Oe[Oe.length - 1].timestamp) : ""
            })]
          }), qe.map((e, s) => m.jsxs("div", {
            className: "hp-conv",
            onClick: () => (async e => {
              try {
                const {
                  MessageService: s
                } = await t(async () => {
                  const {
                    MessageService: e
                  } = await import("./native-pet-CTNtZgMA.js").then(e => e.cz);
                  return {
                    MessageService: e
                  };
                }, __vite__mapDeps([2, 3, 4, 5, 6, 7]));
                const a = await s.getByPair(n, e.id).catch(() => []);
                Xe({
                  id: e.id,
                  name: e.name,
                  msgs: Array.isArray(a) ? a : []
                });
                _e("group");
              } catch (s) {
                Xe({
                  id: e.id,
                  name: e.name,
                  msgs: []
                });
                _e("group");
              }
            })(e),
            children: [m.jsx("div", {
              className: "hp-conv-av hp-grp-av",
              style: {
                backgroundImage: e.avatar ? `url(${e.avatar})` : "none"
              },
              children: !e.avatar && m.jsx($, {
                size: 20,
                color: "#fff"
              })
            }), m.jsxs("div", {
              className: "hp-conv-mid",
              children: [m.jsxs("div", {
                className: "hp-conv-name",
                children: [e.name || "群聊", " ", m.jsxs("span", {
                  className: "hp-grp-count",
                  children: ["(", (e.members || []).length, ")"]
                })]
              }), m.jsx("div", {
                className: "hp-conv-prev",
                children: e.last ? `${e.last.sender === "me" ? "" : (e.last.senderName || e.last.who || "") + "："}${ye(e.last)}` : "暂无消息"
              })]
            }), m.jsx("div", {
              className: "hp-conv-time",
              children: e.last ? be(e.last.timestamp) : ""
            })]
          }, `grp-${s}-${e.id}`)), (Za.contacts || []).map((e, s) => m.jsxs("div", {
            className: "hp-conv",
            onClick: () => {
              Ke(e);
              _e("ai");
            },
            children: [m.jsx(ke, {
              src: re[e.name] || null,
              size: 46,
              name: e.name,
              fallbackColor: "#b8a9d4"
            }), m.jsxs("div", {
              className: "hp-conv-mid",
              children: [m.jsxs("div", {
                className: "hp-conv-name",
                children: [e.name, e.relation && m.jsxs("span", {
                  className: "hp-grp-count",
                  children: [" · ", e.relation]
                })]
              }), m.jsx("div", {
                className: "hp-conv-prev",
                children: e.preview || "…"
              })]
            })]
          }, `aic-${s}`)), !Ve && !(Za.contacts || []).length && m.jsxs("div", {
            className: "hp-ai-stub",
            children: [m.jsx($, {
              size: 14
            }), " ta 与其他人的私聊…（即将由 AI 生成填充）"]
          })]
        }), ge === "moments" && m.jsxs("div", {
          className: "hp-moments",
          children: [m.jsx("div", {
            className: "wechat-moments-cover",
            style: {
              backgroundImage: `url(${Za.momentsCover || Ye(ce == null ? undefined : ce.wallpaperPhoto) || (Ue && Ue[0] ? Ue[0].url : null) || "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600"})`
            },
            children: m.jsxs("div", {
              className: "cover-profile",
              children: [m.jsx("span", {
                className: "cover-name",
                children: Da
              }), m.jsx("div", {
                className: "cover-avatar-box",
                children: m.jsx(ke, {
                  src: d,
                  size: 64,
                  name: Da,
                  fallbackColor: "#8ab87e"
                })
              })]
            })
          }), Ve && m.jsx("div", {
            className: "hp-empty",
            children: "读取中…"
          }), !Ve && Ge.length === 0 && m.jsx("div", {
            className: "hp-empty",
            children: "还没有朋友圈"
          }), Ge.slice(0, 50).map((e, s) => {
            const a = e.note || e.content || e.text || "";
            const i = (Array.isArray(e.images) ? e.images : []).filter(e => typeof e == "string" && e);
            return m.jsxs("div", {
              className: "hp-moment",
              children: [m.jsx(ke, {
                src: e.avatar,
                size: 38,
                name: e.name
              }), m.jsxs("div", {
                className: "hp-moment-body-wrap",
                children: [m.jsx("span", {
                  className: "hp-moment-author",
                  children: e.name || "匿名"
                }), a && m.jsx("div", {
                  className: "hp-moment-text",
                  children: a
                }), i.length > 0 && m.jsx("div", {
                  className: `hp-moment-imgs n${Math.min(i.length, 3)}`,
                  children: i.slice(0, 9).map((e, s) => m.jsx("img", {
                    src: e,
                    alt: ""
                  }, s))
                }), m.jsxs("div", {
                  className: "hp-moment-foot",
                  children: [m.jsx("span", {
                    className: "hp-moment-time",
                    children: be(e.timestamp)
                  }), e.location && m.jsxs("span", {
                    className: "hp-moment-loc",
                    children: ["📍 ", e.location]
                  })]
                }), (Array.isArray(e.likes) && e.likes.length > 0 || Array.isArray(e.comments) && e.comments.length > 0) && (() => {
                  const s = Array.isArray(e.likes) ? e.likes : [];
                  const a = Array.isArray(e.comments) ? e.comments : [];
                  return m.jsxs("div", {
                    className: "wechat-moments-comments-box",
                    children: [s.length > 0 && m.jsxs("div", {
                      className: "moments-likes",
                      children: [m.jsx("span", {
                        className: "heart-icon",
                        children: "❤️"
                      }), m.jsx("span", {
                        className: "like-names",
                        children: s.join("，")
                      })]
                    }), s.length > 0 && a.length > 0 && m.jsx("div", {
                      className: "moments-divider"
                    }), m.jsx("div", {
                      className: "moments-comments",
                      children: a.map((e, s) => m.jsxs("div", {
                        className: "comment-item",
                        children: [m.jsxs("span", {
                          className: "commenter",
                          children: [e.name || e.who, "："]
                        }), m.jsx("span", {
                          className: "comment-text",
                          children: e.text || e.content
                        })]
                      }, s))
                    })]
                  });
                })()]
              })]
            }, `m-${s}-${e.id ?? e._id ?? e.timestamp ?? s}`);
          })]
        }), ge === "contacts" && m.jsxs("div", {
          className: "wechat-contacts-page",
          children: [m.jsxs("div", {
            className: "wechat-contacts-system-list",
            children: [m.jsxs("div", {
              className: "wechat-contacts-system-item",
              children: [m.jsx("div", {
                className: "system-icon-box new-friends",
                children: m.jsx($, {
                  size: 18,
                  color: "#fff"
                })
              }), m.jsx("span", {
                className: "system-item-label",
                children: "新的朋友"
              })]
            }), m.jsxs("div", {
              className: "wechat-contacts-system-item",
              children: [m.jsx("div", {
                className: "system-icon-box group-chats",
                children: m.jsx($, {
                  size: 18,
                  color: "#fff"
                })
              }), m.jsx("span", {
                className: "system-item-label",
                children: "群聊"
              })]
            })]
          }), m.jsx("div", {
            className: "wechat-contacts-section-title",
            children: "我的好友"
          }), m.jsxs("div", {
            className: "wechat-contacts-list",
            children: [m.jsxs("div", {
              className: "hp-conv",
              onClick: () => _e("self"),
              children: [m.jsx(ke, {
                src: r,
                size: 38,
                name: Fa
              }), m.jsx("div", {
                className: "hp-conv-mid",
                children: m.jsx("div", {
                  className: "hp-conv-name",
                  children: Fa
                })
              })]
            }), (Za.contacts || []).map((e, s) => m.jsxs("div", {
              className: "hp-conv",
              onClick: () => {
                Ke(e);
                _e("ai");
              },
              children: [m.jsx(ke, {
                src: re[e.name] || null,
                size: 38,
                name: e.name,
                fallbackColor: "#b8a9d4"
              }), m.jsx("div", {
                className: "hp-conv-mid",
                children: m.jsxs("div", {
                  className: "hp-conv-name",
                  children: [e.name, e.relation && m.jsxs("span", {
                    className: "hp-grp-count",
                    children: [" · ", e.relation]
                  })]
                })
              })]
            }, `aic-contact-${s}`))]
          })]
        }), ge === "me" && m.jsxs("div", {
          className: "wechat-me-page",
          children: [m.jsxs("div", {
            className: "wechat-profile-card",
            children: [m.jsx(ke, {
              src: d,
              size: 60,
              name: Da,
              fallbackColor: "#8ab87e"
            }), m.jsxs("div", {
              className: "profile-info",
              children: [m.jsx("div", {
                className: "profile-name",
                children: Da
              }), m.jsxs("div", {
                className: "profile-wxid",
                children: ["微信号: ", Za.wxid || `wxid_${c || "love_nuojiji"}`]
              }), m.jsx("div", {
                className: "profile-region",
                children: "地区: 银河系"
              })]
            })]
          }), Za.signature && m.jsxs("div", {
            className: "wechat-signature-box",
            children: [m.jsx("span", {
              className: "sig-title",
              children: "个性签名"
            }), m.jsxs("span", {
              className: "sig-content",
              children: ["“", Za.signature, "”"]
            })]
          }), m.jsxs("div", {
            className: "wechat-me-fav-header",
            children: [m.jsx(T, {
              size: 14,
              className: "fav-star-icon"
            }), m.jsx("span", {
              children: "我的收藏"
            })]
          }), (() => {
            const e = e => {
              const s = String((e == null ? undefined : e.sender) || (e == null ? undefined : e.role) || "").toLowerCase();
              if ((s !== "them" && s !== "char" && s !== "assistant" && s !== "ai") == (Z === "user")) {
                return Da;
              } else {
                return Fa;
              }
            };
            const s = (Oe || []).filter(e => (e.isVoice || e.voice) && (e.serializedAudio || e.audioBlob)).slice(-3).reverse();
            const a = !s.length && !(Za.favorites || []).length;
            return m.jsxs("div", {
              className: "hp-fav-wrap",
              children: [s.map((s, a) => m.jsxs("div", {
                className: "hp-fav-card hp-fav-voice",
                children: [m.jsx("span", {
                  className: "hp-fav-ic",
                  style: {
                    background: "#7c5cff"
                  },
                  children: m.jsx(E, {
                    size: 16,
                    color: "#fff"
                  })
                }), m.jsxs("div", {
                  className: "hp-fav-body",
                  children: [m.jsx("div", {
                    className: "hp-fav-voice-player",
                    children: m.jsx(g, {
                      msg: s,
                      isMe: false,
                      themeStyle: "default",
                      bubbleFontSize: 13,
                      voiceEnabled: true
                    })
                  }), m.jsxs("div", {
                    className: "hp-fav-meta",
                    children: [m.jsx("span", {
                      className: "hp-fav-tag",
                      style: {
                        background: "#ece6ff",
                        color: "#6b46ff"
                      },
                      children: "语音 · 真实录音"
                    }), m.jsxs("span", {
                      className: "hp-fav-from",
                      children: ["—— ", e(s)]
                    })]
                  })]
                })]
              }, `rvf-${s.id || a}`)), (Za.favorites || []).map((e, s) => {
                if (e.type === "chat") {
                  return m.jsxs("div", {
                    className: "hp-fav-card hp-fav-chat",
                    children: [m.jsx("span", {
                      className: "hp-fav-ic",
                      style: {
                        background: "#ff5a7e"
                      },
                      children: m.jsx(T, {
                        size: 16,
                        color: "#fff"
                      })
                    }), m.jsxs("div", {
                      className: "hp-fav-body",
                      children: [m.jsxs("div", {
                        className: "hp-fav-quote",
                        children: ["“", e.title, "”"]
                      }), m.jsxs("div", {
                        className: "hp-fav-meta",
                        children: [m.jsx("span", {
                          className: "hp-fav-tag",
                          style: {
                            background: "#ffe4ec",
                            color: "#e23d68"
                          },
                          children: "珍藏的对话"
                        }), e.from && m.jsxs("span", {
                          className: "hp-fav-from",
                          children: ["—— ", e.from]
                        })]
                      }), e.note && m.jsx("div", {
                        className: "hp-fav-note",
                        children: e.note
                      })]
                    })]
                  }, `fav-${s}`);
                }
                if (e.type === "voice") {
                  return m.jsxs("div", {
                    className: "hp-fav-card hp-fav-voice",
                    children: [m.jsx("span", {
                      className: "hp-fav-ic",
                      style: {
                        background: "#7c5cff"
                      },
                      children: m.jsx(E, {
                        size: 16,
                        color: "#fff"
                      })
                    }), m.jsxs("div", {
                      className: "hp-fav-body",
                      children: [m.jsxs("div", {
                        className: "hp-fav-voice-fakebar",
                        children: [m.jsx(MountainIcon, {
                          size: 11,
                          fill: "#6b46ff",
                          color: "#6b46ff"
                        }), m.jsx("span", {
                          className: "hp-fav-voice-wave",
                          children: "▁▃▅▂▆▄▃▅▂▁"
                        }), m.jsx("span", {
                          className: "hp-fav-voice-dur",
                          children: e.duration ? `${e.duration}″` : "语音"
                        })]
                      }), m.jsxs("div", {
                        className: "hp-fav-quote",
                        children: ["“", e.title, "”"]
                      }), m.jsxs("div", {
                        className: "hp-fav-meta",
                        children: [m.jsx("span", {
                          className: "hp-fav-tag",
                          style: {
                            background: "#ece6ff",
                            color: "#6b46ff"
                          },
                          children: "语音"
                        }), e.from && m.jsxs("span", {
                          className: "hp-fav-from",
                          children: ["—— ", e.from]
                        })]
                      }), e.note && m.jsx("div", {
                        className: "hp-fav-note",
                        children: e.note
                      })]
                    })]
                  }, `fav-${s}`);
                }
                if (e.type === "image") {
                  a = e.photoIdx;
                  const t = ((i = (Ue || [])[a]) == null ? undefined : i.url) || null;
                  return m.jsxs("div", {
                    className: "hp-fav-card hp-fav-image",
                    children: [m.jsx("span", {
                      className: "hp-fav-ic",
                      style: {
                        background: "#34c759"
                      },
                      children: m.jsx(v, {
                        size: 16,
                        color: "#fff"
                      })
                    }), m.jsxs("div", {
                      className: "hp-fav-body",
                      children: [t && m.jsx("img", {
                        className: "hp-fav-img",
                        src: t,
                        alt: ""
                      }), m.jsx("div", {
                        className: "hp-fav-title",
                        children: e.title
                      }), m.jsxs("div", {
                        className: "hp-fav-meta",
                        children: [m.jsx("span", {
                          className: "hp-fav-tag",
                          style: {
                            background: "#e3f9e9",
                            color: "#1aa251"
                          },
                          children: "图片"
                        }), e.from && m.jsxs("span", {
                          className: "hp-fav-from",
                          children: ["—— ", e.from]
                        })]
                      }), e.note && m.jsx("div", {
                        className: "hp-fav-note",
                        children: e.note
                      })]
                    })]
                  }, `fav-${s}`);
                }
                var a;
                var i;
                if (e.type === "transfer") {
                  return m.jsxs("div", {
                    className: "hp-fav-card hp-fav-transfer",
                    children: [m.jsx("span", {
                      className: "hp-fav-ic",
                      style: {
                        background: "#f5a623",
                        fontWeight: 700,
                        color: "#fff"
                      },
                      children: "¥"
                    }), m.jsxs("div", {
                      className: "hp-fav-body",
                      children: [m.jsxs("div", {
                        className: "hp-fav-transfer-amt",
                        children: ["¥ ", e.amount || ""]
                      }), m.jsx("div", {
                        className: "hp-fav-title",
                        children: e.title
                      }), m.jsxs("div", {
                        className: "hp-fav-meta",
                        children: [m.jsx("span", {
                          className: "hp-fav-tag",
                          style: {
                            background: "#fff3e0",
                            color: "#e98a00"
                          },
                          children: "转账"
                        }), e.from && m.jsxs("span", {
                          className: "hp-fav-from",
                          children: ["—— ", e.from]
                        })]
                      }), e.note && m.jsx("div", {
                        className: "hp-fav-note",
                        children: e.note
                      })]
                    })]
                  }, `fav-${s}`);
                }
                if (e.type === "gift") {
                  return m.jsxs("div", {
                    className: "hp-fav-card hp-fav-gift",
                    children: [m.jsx("span", {
                      className: "hp-fav-ic",
                      style: {
                        background: "#ff6b9d",
                        fontSize: 15
                      },
                      children: "🎁"
                    }), m.jsxs("div", {
                      className: "hp-fav-body",
                      children: [m.jsx("div", {
                        className: "hp-fav-title",
                        children: e.title
                      }), m.jsxs("div", {
                        className: "hp-fav-meta",
                        children: [m.jsx("span", {
                          className: "hp-fav-tag",
                          style: {
                            background: "#ffe4ec",
                            color: "#e23d68"
                          },
                          children: "礼物"
                        }), e.from && m.jsxs("span", {
                          className: "hp-fav-from",
                          children: ["—— ", e.from]
                        })]
                      }), e.note && m.jsx("div", {
                        className: "hp-fav-note",
                        children: e.note
                      })]
                    })]
                  }, `fav-${s}`);
                }
                const t = e.type === "quote" ? {
                  Icon: f,
                  bg: "#f59e0b",
                  tag: "笔记"
                } : {
                  Icon: b,
                  bg: "#4a9eff",
                  tag: "链接"
                };
                const {
                  Icon: n
                } = t;
                return m.jsxs("div", {
                  className: "hp-fav-card",
                  children: [m.jsx("span", {
                    className: "hp-fav-ic",
                    style: {
                      background: t.bg
                    },
                    children: m.jsx(n, {
                      size: 16,
                      color: "#fff"
                    })
                  }), m.jsxs("div", {
                    className: "hp-fav-body",
                    children: [m.jsx("div", {
                      className: "hp-fav-title",
                      children: e.title
                    }), m.jsxs("div", {
                      className: "hp-fav-meta",
                      children: [m.jsx("span", {
                        className: "hp-fav-tag",
                        children: t.tag
                      }), m.jsxs("span", {
                        className: "hp-fav-from",
                        children: ["来自 ", Da]
                      })]
                    })]
                  })]
                }, `fav-${s}`);
              }), a && m.jsxs("div", {
                className: "hp-ai-stub full",
                children: [m.jsx(T, {
                  size: 14
                }), " ", Da, " 收藏的对话、语音、图片、转账…（即将由 AI 生成）"]
              })]
            });
          })()]
        })]
      }), Wa]
    });
  }
  const Ka = (e, s) => m.jsxs("div", {
    className: "hp-ai-stub full",
    children: [m.jsx(e, {
      size: 14
    }), " ", s]
  });
  const Qa = {
    gallery: (() => {
      const e = Ue || [];
      const s = Array.isArray(Za.galleryCaptions) ? Za.galleryCaptions : [];
      if (e.length === 0) {
        return m.jsx("div", {
          className: "hp-album-empty",
          children: Ka(v, `${Da} 的相册暂时还没有照片`)
        });
      }
      const a = new Map();
      e.forEach((e, s) => {
        if (e && e.url && !a.has(e.url)) {
          a.set(e.url, s);
        }
      });
      const i = e => {
        if (e) {
          const a = s.find(s => s && s.url === e);
          if (a) {
            return a.text;
          }
        }
        return "";
      };
      const t = a => {
        if (e[a]) {
          return {
            url: e[a].url,
            cap: i(e[a].url) || (t = a, ((n = s.find(e => e && e.url == null && e.idx === t)) == null ? undefined : n.text) || (typeof s[t] == "string" ? s[t] : ""))
          };
        } else {
          return null;
        }
        var t;
        var n;
      };
      const n = Array.isArray(Za.albums) ? Za.albums : [];
      const l = new Set();
      const r = n.map(s => {
        const i = new Set();
        const n = Array.isArray(s.photoIdx) ? s.photoIdx : [];
        const r = Array.isArray(s.photoUrls) ? s.photoUrls : [];
        const c = n.map((e, s) => {
          const i = r[s];
          if (i && a.has(i)) {
            return a.get(i);
          } else {
            return e;
          }
        }).filter(s => s >= 0 && s < e.length && !i.has(s) && (i.add(s), true)).map(e => {
          l.add(e);
          return t(e);
        }).filter(Boolean);
        if (c.length) {
          return {
            name: s.name,
            note: s.note || "",
            locked: !!s.locked,
            pics: c
          };
        } else {
          return null;
        }
      }).filter(Boolean);
      const c = e.map((e, s) => s).filter(e => !l.has(e)).map(t).filter(Boolean);
      const o = [];
      if (c.length) {
        o.push({
          name: r.length ? "全部照片" : "相机胶卷",
          note: "",
          locked: false,
          pics: c,
          isAll: true
        });
      }
      o.push(...r);
      if (ws) {
        return m.jsxs("div", {
          className: "hp-album-detail",
          children: [m.jsxs("div", {
            className: "hp-album-detail-hd",
            children: [m.jsx("span", {
              className: "hp-album-back",
              onClick: () => Ss(null),
              children: "‹ 相簿"
            }), m.jsx("span", {
              className: "hp-album-detail-title",
              children: ws.name
            }), m.jsx("span", {
              className: "hp-album-detail-count",
              children: ws.pics.length
            })]
          }), ws.note && m.jsx("div", {
            className: "hp-album-detail-note",
            children: ws.note
          }), m.jsx("div", {
            className: "hp-album-grid",
            children: ws.pics.map((e, s) => m.jsxs("div", {
              className: "hp-album-cell",
              onClick: () => ks(e),
              children: [m.jsx("img", {
                src: e.url,
                alt: ""
              }), e.cap && m.jsx("div", {
                className: "hp-album-cell-cap",
                children: e.cap
              })]
            }, s))
          })]
        });
      }
      return m.jsxs("div", {
        className: "hp-album-wrap",
        children: [m.jsx("div", {
          className: "hp-album-bighd",
          children: "相簿"
        }), m.jsx("div", {
          className: "hp-album-list",
          children: o.map((e, s) => {
            const a = e.locked && !Cs.has(e.name);
            return m.jsxs("div", {
              className: "hp-album-card" + (a ? " locked" : ""),
              onClick: () => (e => {
                if (e.locked && !Cs.has(e.name)) {
                  s = e.name;
                  _s(e => {
                    const a = new Set(e);
                    a.add(s);
                    return a;
                  });
                  if (P) {
                    Ss(e);
                    return;
                  } else {
                    ue([30, 50, 30]);
                    setTimeout(() => Ss(e), 420);
                    return;
                  }
                }
                var s;
                ue(20);
                Ss(e);
              })(e),
              children: [m.jsxs("div", {
                className: "hp-album-cover",
                children: [m.jsx("img", {
                  src: e.pics[0].url,
                  alt: "",
                  className: a ? "blurred" : ""
                }), a && m.jsx("div", {
                  className: "hp-album-lock",
                  children: m.jsx("span", {
                    children: "🔒"
                  })
                }), m.jsx("span", {
                  className: "hp-album-cnt",
                  children: e.pics.length
                })]
              }), m.jsxs("div", {
                className: "hp-album-name",
                children: [a ? "已加密" : e.name, e.locked && !a && " 🔓"]
              }), !a && e.note && m.jsx("div", {
                className: "hp-album-note",
                children: e.note
              })]
            }, s);
          })
        })]
      });
    })(),
    wallet: (() => {
      var e;
      var s;
      var a;
      var i;
      const t = ((s = (e = Za.wallet) == null ? undefined : e.rows) == null ? undefined : s.length) ? Za.wallet.rows : null;
      if (!t && !((a = Za.wallet) == null ? undefined : a.balance)) {
        return m.jsx("div", {
          className: "ali-wallet",
          children: Ka(j, "ta 的日常消费（即将由 AI 按角色生成）")
        });
      }
      const n = t || [];
      const l = (e = "") => {
        const s = String(e).toLowerCase();
        if (/天猫|tmall/.test(s)) {
          return {
            label: "天猫",
            char: "天",
            cls: "ali-logo-tmall",
            sub: "天猫商城"
          };
        } else if (/淘宝|taobao|淘/.test(s)) {
          return {
            label: "淘宝",
            char: "淘",
            cls: "ali-logo-taobao",
            sub: "淘宝订单"
          };
        } else if (/美团|meituan|外卖/.test(s)) {
          return {
            label: "美团",
            char: "美",
            cls: "ali-logo-meituan",
            sub: "外卖美食"
          };
        } else if (/拼多多|pinduoduo|pdd/.test(s)) {
          return {
            label: "拼多多",
            char: "拼",
            cls: "ali-logo-pdd",
            sub: "拼多多拼团"
          };
        } else if (/京东|jingdong|jd/.test(s)) {
          return {
            label: "京东",
            char: "京",
            cls: "ali-logo-jd",
            sub: "京东自营"
          };
        } else if (/咖啡|星巴克|starbucks|瑞幸|luckin/.test(s)) {
          return {
            label: "餐饮",
            char: "☕",
            cls: "ali-logo-coffee",
            sub: "休闲餐饮"
          };
        } else if (/打车|滴滴|didi|出租车|计程车|交通|地铁|公交/.test(s)) {
          return {
            label: "交通",
            char: "🚕",
            cls: "ali-logo-traffic",
            sub: "交通出行"
          };
        } else if (/话费|电信|移动|联通|充值/.test(s)) {
          return {
            label: "充值",
            char: "📱",
            cls: "ali-logo-recharge",
            sub: "充值缴费"
          };
        } else if (/收款|收钱|转入|来自|入账|工资/.test(s)) {
          return {
            label: "收款",
            char: "收",
            cls: "ali-logo-income",
            sub: "转账收款"
          };
        } else if (/转账|转给|红包/.test(s)) {
          return {
            label: "转账",
            char: "转",
            cls: "ali-logo-transfer",
            sub: "转账付款"
          };
        } else {
          return {
            label: "消费",
            char: "消",
            cls: "ali-logo-default",
            sub: "日常消费"
          };
        }
      };
      const r = (e = "") => !String(e).trim().startsWith("-") && /\+/.test(String(e));
      const c = e => Math.abs(parseFloat(String(e).replace(/[^\d.-]/g, "")) || 0);
      const o = parseFloat(String(((i = Za.wallet) == null ? undefined : i.balance) || "0.00").replace(/,/g, "")) || 0;
      const d = [];
      let h = o;
      for (let m = 0; m < n.length; m++) {
        d.push(h);
        const e = c(n[m].amount);
        if (r(n[m].amount)) {
          h -= e;
        } else {
          h += e;
        }
      }
      const p = ["今天", "昨天", "前天", "本周一", "上周五", "上周三", "更早之前"];
      const u = (e, s) => s && typeof s.time == "string" && s.time.trim() ? s.time.trim() : `${p[e % p.length]} ${String(10 + e % 12).padStart(2, "0")}:${String(e * 17 % 60).padStart(2, "0")}`;
      const x = new Date().getMonth() + 1;
      const g = n.filter(e => !r(e.amount)).reduce((e, s) => e + c(s.amount), 0);
      const f = n.filter(e => r(e.amount)).reduce((e, s) => e + c(s.amount), 0);
      if (os === "balance") {
        return m.jsxs("div", {
          className: "ali-wallet ali-wallet-balance-view",
          children: [m.jsxs("div", {
            className: "ali-wallet-blue-header",
            children: [m.jsxs("div", {
              className: "ali-wallet-hd",
              children: [m.jsx("span", {
                className: "ali-wallet-back",
                onClick: Va,
                children: "‹ 返回"
              }), m.jsx("span", {
                className: "ali-wallet-title",
                children: "余额"
              }), m.jsx("span", {
                className: "ali-wallet-dots",
                children: m.jsx(R, {
                  size: 20
                })
              })]
            }), m.jsxs("div", {
              className: "ali-wallet-card",
              children: [m.jsxs("div", {
                className: "ali-wallet-security",
                children: [m.jsx("span", {
                  className: "ali-security-icon",
                  children: "🛡️"
                }), m.jsx("span", {
                  children: "资金安全有保障 ›"
                })]
              }), m.jsxs("div", {
                className: "ali-wallet-card-label",
                children: ["可用余额(元) ", m.jsx("span", {
                  className: "ali-eye-icon",
                  children: "👁️"
                })]
              }), m.jsx("div", {
                className: "ali-wallet-card-balance",
                children: o.toLocaleString("zh-CN", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })
              }), m.jsxs("div", {
                className: "ali-wallet-btn-group",
                children: [m.jsx("button", {
                  className: "ali-wallet-btn btn-withdraw",
                  onClick: () => ue(10),
                  children: "提现"
                }), m.jsx("button", {
                  className: "ali-wallet-btn btn-deposit",
                  onClick: () => ue(10),
                  children: "充值"
                })]
              })]
            })]
          }), m.jsxs("div", {
            className: "ali-wallet-detail-section",
            children: [m.jsxs("div", {
              className: "ali-wallet-section-hd",
              children: [m.jsx("span", {
                className: "ali-section-title",
                children: "余额变动明细"
              }), m.jsx("span", {
                className: "ali-section-more",
                onClick: () => ds("bill"),
                children: "全部 ›"
              })]
            }), m.jsx("div", {
              className: "ali-wallet-detail-list",
              children: n.slice(0, 4).map((e, s) => {
                const a = l(e.name);
                const i = r(e.amount);
                const t = d[s] || o;
                return m.jsxs("div", {
                  className: "ali-wallet-detail-row",
                  onClick: () => ds("bill"),
                  children: [m.jsx("div", {
                    className: `ali-logo-circle ${a.cls}`,
                    children: a.char
                  }), m.jsxs("div", {
                    className: "ali-wallet-row-mid",
                    children: [m.jsx("div", {
                      className: "ali-wallet-row-name",
                      children: e.name
                    }), m.jsx("div", {
                      className: "ali-wallet-row-time",
                      children: u(s, e)
                    })]
                  }), m.jsxs("div", {
                    className: "ali-wallet-row-right",
                    children: [m.jsx("div", {
                      className: "ali-wallet-row-amt " + (i ? "income" : "expense"),
                      children: e.amount
                    }), m.jsxs("div", {
                      className: "ali-wallet-row-bal",
                      children: ["余额 ", t.toFixed(2), "元"]
                    })]
                  })]
                }, s);
              })
            })]
          }), m.jsxs("div", {
            className: "ali-wallet-footer",
            children: [m.jsx("span", {
              className: "ali-wallet-kf",
              onClick: () => ue(8),
              children: "我的客服"
            }), m.jsx("div", {
              className: "ios-home-indicator"
            })]
          })]
        });
      } else {
        return m.jsxs("div", {
          className: "ali-wallet ali-wallet-bill-view",
          children: [m.jsxs("div", {
            className: "ali-bill-hd-container",
            children: [m.jsx("span", {
              className: "ali-bill-back",
              onClick: () => ds("balance"),
              children: "‹"
            }), m.jsxs("div", {
              className: "ali-bill-search-bar",
              children: [m.jsx(U, {
                size: 14,
                className: "ali-bill-search-icon"
              }), m.jsx("input", {
                type: "text",
                className: "ali-bill-search-input",
                placeholder: "搜索交易记录",
                readOnly: true
              })]
            }), m.jsx("span", {
              className: "ali-bill-filter",
              onClick: () => ue(10),
              children: "筛选"
            }), m.jsx("span", {
              className: "ali-bill-dots",
              children: m.jsx(R, {
                size: 18
              })
            })]
          }), m.jsx("div", {
            className: "ali-bill-tabs",
            children: ["全部", "支出", "转账", "退款", "订单"].map((e, s) => m.jsx("span", {
              className: "ali-bill-tab-item " + (s === 0 ? "active" : ""),
              children: e
            }, s))
          }), m.jsxs("div", {
            className: "ali-bill-scroll-content",
            children: [m.jsxs("div", {
              className: "ali-bill-month-header",
              children: [m.jsxs("div", {
                className: "ali-bill-month-title",
                children: [x, "月 ", m.jsx("span", {
                  className: "ali-month-arrow",
                  children: "▼"
                })]
              }), m.jsxs("div", {
                className: "ali-bill-month-stats",
                children: ["支出 ¥", g.toFixed(2), " \xA0\xA0 收入 ¥", f.toFixed(2)]
              }), m.jsx("button", {
                className: "ali-bill-analysis-btn",
                onClick: () => ue(10),
                children: "收支分析"
              })]
            }), m.jsx("div", {
              className: "ali-bill-items-list",
              children: n.map((e, s) => {
                const a = l(e.name);
                const i = r(e.amount);
                return m.jsxs("div", {
                  className: "ali-bill-row",
                  children: [m.jsx("div", {
                    className: `ali-logo-circle ${a.cls}`,
                    children: a.char
                  }), m.jsxs("div", {
                    className: "ali-bill-row-mid",
                    children: [m.jsx("div", {
                      className: "ali-bill-row-name",
                      children: e.name
                    }), m.jsx("div", {
                      className: "ali-bill-row-type",
                      children: a.sub
                    }), m.jsx("div", {
                      className: "ali-bill-row-time",
                      children: u(s, e)
                    })]
                  }), m.jsx("div", {
                    className: "ali-bill-row-right",
                    children: m.jsx("span", {
                      className: "ali-bill-row-amt " + (i ? "income" : "expense"),
                      children: e.amount
                    })
                  })]
                }, s);
              })
            })]
          }), m.jsx("div", {
            className: "ios-home-indicator"
          })]
        });
      }
    })(),
    browser: (() => {
      var e;
      var s;
      const a = ((s = (e = Za.browser) == null ? undefined : e.rows) == null ? undefined : s.length) ? Za.browser.rows : null;
      if (!a) {
        return m.jsx("div", {
          className: "ios-safari",
          children: Ka(b, "ta 最近在看的（即将由 AI 按角色生成）")
        });
      }
      const i = ["#ff6a88", "#4facfe", "#43e97b", "#fda085", "#a18cd1", "#f6d365", "#54c7ec", "#ffb04a"];
      const t = e => e.site || "网页";
      const n = e => {
        const s = String(t(e)).replace(/\s/g, "");
        if (/[一-龥]/.test(s)) {
          return s;
        } else {
          return `${s.toLowerCase().slice(0, 12)}.com`;
        }
      };
      const l = (a || []).map(e => ({
        title: e.title,
        site: e.site || t(e),
        url: e.url || n(e),
        snippet: e.snippet || ""
      }));
      const r = l.slice(0, 2).map((e, s) => ({
        title: e.title,
        url: e.url,
        type: s === 0 ? "reading" : "bookmark",
        data: e
      }));
      const o = l.length > 3 ? l.slice(3, 6) : l.slice(0, 3);
      const d = l.slice(0, 3);
      const h = [{
        bg: "#ffe9ee",
        color: "#e84a6f"
      }, {
        bg: "#e5f3ff",
        color: "#007aff"
      }, {
        bg: "#e9fbef",
        color: "#1aa251"
      }, {
        bg: "#fff4e5",
        color: "#ff9f0a"
      }, {
        bg: "#f3eaff",
        color: "#8a4bdf"
      }, {
        bg: "#fff9e0",
        color: "#d4a017"
      }, {
        bg: "#e6f8fb",
        color: "#0aa3c2"
      }, {
        bg: "#f2f2f7",
        color: "#1c1c1e"
      }];
      const p = new Set();
      const u = [];
      l.forEach(e => {
        const s = (e.site || e.title || "").trim();
        const a = s.toLowerCase();
        if (!s || p.has(a)) {
          return;
        }
        p.add(a);
        const i = h[u.length % h.length];
        u.push({
          title: s.slice(0, 6),
          logo: s.slice(0, 1).toUpperCase(),
          bg: i.bg,
          color: i.color,
          web: e
        });
      });
      const x = u.length ? u.slice(0, 8) : [{
        title: "Apple",
        logo: "",
        bg: "#f2f2f7",
        color: "#1c1c1e"
      }, {
        title: "iCloud",
        logo: "☁️",
        bg: "#e5f3ff",
        color: "#007aff"
      }, {
        title: "Google",
        logo: "G",
        bg: "#fff0f0",
        color: "#ea4335"
      }, {
        title: "Yahoo",
        logo: "Y",
        bg: "#f5f0f9",
        color: "#6001d2"
      }, {
        title: "维基百科",
        logo: "W",
        bg: "#f2f2f7",
        color: "#1c1c1e"
      }, {
        title: "Facebook",
        logo: "f",
        bg: "#e7f3ff",
        color: "#1877f2"
      }, {
        title: "Twitter",
        logo: "𝕏",
        bg: "#1c1c1e",
        color: "#ffffff"
      }, {
        title: "OpenRice",
        logo: "🍚",
        bg: "#fffde6",
        color: "#ffb04a"
      }].map((e, s) => ({
        ...e,
        web: null
      }));
      const g = 9 + (Number(c || 0) * 7 + l.length * 3) % 38;
      const f = e => {
        us(e);
        gs(false);
      };
      const v = () => m.jsxs("div", {
        className: "ios-safari-toolbar",
        children: [m.jsx("button", {
          className: "ios-safari-toolbar-btn active",
          onClick: () => {
            if (ps) {
              us(null);
            } else {
              Va();
            }
          },
          title: ps ? "返回" : "返回桌面",
          children: m.jsx(C, {
            size: 22
          })
        }), m.jsx("button", {
          className: "ios-safari-toolbar-btn disabled",
          disabled: true,
          children: m.jsx("span", {
            className: "ios-safari-icon-flip",
            children: "‹"
          })
        }), m.jsx("button", {
          className: "ios-safari-toolbar-btn active",
          onClick: () => Ns("連結已複製到剪貼簿"),
          children: m.jsx(H, {
            size: 20
          })
        }), m.jsx("button", {
          className: "ios-safari-toolbar-btn " + (xs ? "active" : ""),
          onClick: () => gs(true),
          children: m.jsx(Y, {
            size: 20
          })
        }), m.jsx("button", {
          className: "ios-safari-toolbar-btn active",
          onClick: () => Ns("分頁群組：目前為單分頁模式"),
          children: m.jsx(J, {
            size: 20
          })
        })]
      });
      const j = () => xs ? m.jsx("div", {
        className: "ios-safari-sheet-overlay",
        onClick: () => gs(false),
        children: m.jsxs("div", {
          className: "ios-safari-sheet",
          onClick: e => e.stopPropagation(),
          children: [m.jsxs("div", {
            className: "ios-safari-sheet-header",
            children: [m.jsx("div", {
              className: "ios-safari-sheet-drag-handle"
            }), m.jsxs("div", {
              className: "ios-safari-sheet-top-actions",
              children: [m.jsx("div", {
                className: "action-left"
              }), m.jsxs("div", {
                className: "action-right",
                children: [m.jsx("button", {
                  className: "icon-btn-more",
                  children: m.jsx(R, {
                    size: 20
                  })
                }), m.jsx("button", {
                  className: "icon-btn-close",
                  onClick: () => gs(false),
                  children: m.jsx(X, {
                    size: 20
                  })
                })]
              })]
            })]
          }), m.jsxs("div", {
            className: "ios-safari-sheet-body",
            children: [m.jsxs("div", {
              className: "ios-safari-sheet-section-title",
              children: ["最近儲存 ", m.jsx("span", {
                children: "›"
              })]
            }), m.jsx("div", {
              className: "ios-safari-sheet-saved-grid",
              children: r.map((e, s) => m.jsxs("div", {
                className: "ios-safari-sheet-saved-card",
                onClick: () => f(e.data),
                children: [m.jsx("span", {
                  className: "saved-icon",
                  children: e.type === "reading" ? "👓" : "🔖"
                }), m.jsxs("div", {
                  className: "saved-info",
                  children: [m.jsx("span", {
                    className: "saved-title",
                    children: e.title
                  }), m.jsx("span", {
                    className: "saved-url",
                    children: e.url
                  }), m.jsx("span", {
                    className: "saved-type",
                    children: e.type === "reading" ? "閱讀列表" : "書籤"
                  })]
                })]
              }, s))
            }), m.jsx("div", {
              className: "ios-safari-segment-container",
              children: m.jsxs("div", {
                className: "ios-safari-segment",
                children: [m.jsx("div", {
                  className: `ios-safari-segment-bg active-${fs}`
                }), m.jsx("button", {
                  className: "ios-safari-segment-btn " + (fs === "bookmark" ? "active" : ""),
                  onClick: () => vs("bookmark"),
                  children: m.jsx(Y, {
                    size: 18
                  })
                }), m.jsx("button", {
                  className: "ios-safari-segment-btn " + (fs === "reading" ? "active" : ""),
                  onClick: () => vs("reading"),
                  children: m.jsx("span", {
                    style: {
                      fontSize: "18px",
                      display: "inline-flex",
                      alignItems: "center"
                    },
                    children: "👓"
                  })
                }), m.jsx("button", {
                  className: "ios-safari-segment-btn " + (fs === "history" ? "active" : ""),
                  onClick: () => vs("history"),
                  children: m.jsx(k, {
                    size: 18
                  })
                })]
              })
            }), m.jsxs("div", {
              className: "ios-safari-sheet-content-list",
              children: [fs === "bookmark" && m.jsxs(m.Fragment, {
                children: [m.jsxs("div", {
                  className: "ios-safari-sheet-list-section",
                  children: [m.jsx("div", {
                    className: "section-header",
                    children: "資料夾"
                  }), m.jsxs("div", {
                    className: "ios-safari-list-item",
                    onClick: () => vs("bookmark"),
                    children: [m.jsx("span", {
                      className: "item-icon blue-star",
                      children: "★"
                    }), m.jsx("span", {
                      className: "item-text",
                      children: "喜好項目"
                    }), m.jsx("span", {
                      className: "item-count",
                      children: "16 ›"
                    })]
                  }), m.jsxs("div", {
                    className: "ios-safari-list-item",
                    onClick: () => vs("bookmark"),
                    children: [m.jsx("span", {
                      className: "item-icon blue-folder",
                      children: "📁"
                    }), m.jsx("span", {
                      className: "item-text",
                      children: "分頁群組喜好項目"
                    }), m.jsx("span", {
                      className: "item-count",
                      children: "4 ›"
                    })]
                  })]
                }), m.jsxs("div", {
                  className: "ios-safari-sheet-list-section",
                  children: [m.jsx("div", {
                    className: "section-header",
                    children: "書籤"
                  }), o.map((e, s) => m.jsxs("div", {
                    className: "ios-safari-list-item",
                    onClick: () => f(e),
                    children: [m.jsx("span", {
                      className: "item-icon",
                      children: "🔖"
                    }), m.jsxs("div", {
                      className: "item-content",
                      children: [m.jsx("span", {
                        className: "item-title",
                        children: e.title
                      }), m.jsx("span", {
                        className: "item-desc",
                        children: e.url
                      })]
                    }), m.jsx("span", {
                      className: "ios-chevron",
                      children: "›"
                    })]
                  }, s))]
                })]
              }), fs === "reading" && m.jsxs("div", {
                className: "ios-safari-sheet-list-section",
                children: [m.jsx("div", {
                  className: "section-header",
                  children: "閱讀列表"
                }), d.map((e, s) => m.jsxs("div", {
                  className: "ios-safari-list-item reading-item",
                  onClick: () => f(e),
                  children: [m.jsx("span", {
                    className: "item-icon reading-thumb",
                    children: "👓"
                  }), m.jsxs("div", {
                    className: "item-content",
                    children: [m.jsx("span", {
                      className: "item-title",
                      children: e.title
                    }), m.jsx("span", {
                      className: "item-url",
                      children: e.url
                    }), m.jsx("span", {
                      className: "item-snippet",
                      children: e.snippet
                    })]
                  })]
                }, s))]
              }), fs === "history" && m.jsxs("div", {
                className: "ios-safari-sheet-list-section",
                children: [m.jsx("div", {
                  className: "section-header",
                  children: "歷史記錄"
                }), (a || []).slice(0, 5).map((e, s) => m.jsxs("div", {
                  className: "ios-safari-list-item",
                  onClick: () => f(e),
                  children: [m.jsx("span", {
                    className: "item-icon",
                    children: "🕒"
                  }), m.jsxs("div", {
                    className: "item-content",
                    children: [m.jsx("span", {
                      className: "item-title",
                      children: e.title
                    }), m.jsxs("span", {
                      className: "item-desc",
                      children: [n(e), " · ", ["下午 5:03", "下午 4:45", "下午 3:12", "下午 1:05", "昨天"][s % 5]]
                    })]
                  }), m.jsx("span", {
                    className: "ios-chevron",
                    children: "›"
                  })]
                }, s))]
              })]
            })]
          })]
        })
      }) : null;
      if (ps) {
        const e = a.indexOf(ps);
        const s = i[(e >= 0 ? e : 0) % i.length];
        const l = String(ps.snippet || "").split(/\n+/).filter(Boolean);
        const r = ps.url || n(ps);
        return m.jsxs("div", {
          className: "ios-safari safari-reader",
          children: [m.jsxs("div", {
            className: "ios-safari-bar-floating-top",
            children: [m.jsx("div", {
              className: "ios-safari-status-spacer"
            }), m.jsxs("div", {
              className: "ios-safari-bar top",
              children: [m.jsx("span", {
                className: "ios-safari-bar-lock",
                children: "🔒"
              }), m.jsx("div", {
                className: "ios-safari-bar-url-box",
                children: m.jsx("span", {
                  className: "ios-safari-bar-url",
                  children: r
                })
              }), m.jsx("span", {
                className: "ios-safari-bar-x",
                onClick: () => us(null),
                children: "✕"
              })]
            })]
          }), m.jsxs("div", {
            className: "ios-safari-reader-body absolute-scroll",
            children: [m.jsx("div", {
              className: "ios-safari-reader-top-spacer"
            }), m.jsxs("div", {
              className: "ios-safari-reader-site",
              children: [m.jsx("span", {
                className: "ios-safari-fav sm",
                style: {
                  background: s
                },
                children: String(ps.site || t(ps)).charAt(0)
              }), ps.site || t(ps)]
            }), m.jsx("h1", {
              className: "ios-safari-reader-title",
              children: ps.title
            }), m.jsxs("div", {
              className: "ios-safari-reader-meta",
              children: [ps.site || t(ps), " · 閱讀約 ", 3 + ps.title.length % 7, " 分鐘"]
            }), m.jsx("div", {
              className: "ios-safari-reader-hero",
              style: {
                background: `linear-gradient(135deg, ${s}, #ffffff44)`
              }
            }), l.length ? l.map((e, s) => m.jsx("p", {
              className: "ios-safari-reader-p",
              children: e
            }, s)) : m.jsx("p", {
              className: "ios-safari-reader-p",
              children: ps.snippet || "这篇内容 ta 看过，但没有留下更多记录。"
            }), m.jsx("div", {
              className: "ios-safari-bottom-spacer"
            })]
          }), v(), j(), m.jsx("div", {
            className: "ios-home-indicator"
          }), js && m.jsx("div", {
            className: "ios-safari-toast",
            children: m.jsx("span", {
              children: js
            })
          })]
        });
      }
      return m.jsxs("div", {
        className: "ios-safari",
        children: [m.jsxs("div", {
          className: "ios-safari-header-floating",
          children: [m.jsx("div", {
            className: "ios-safari-status-spacer"
          }), m.jsx("div", {
            className: "ios-safari-header",
            children: m.jsxs("button", {
              className: "ios-safari-close-btn",
              onClick: Va,
              children: [m.jsx(C, {
                size: 20
              }), " 桌面"]
            })
          })]
        }), m.jsxs("div", {
          className: "ios-safari-scroll absolute-scroll",
          children: [m.jsx("div", {
            className: "ios-safari-top-spacer"
          }), m.jsx("div", {
            className: "ios-safari-searchbar-container",
            children: m.jsxs("div", {
              className: "ios-safari-searchbar",
              children: [m.jsx(U, {
                size: 16,
                className: "ios-safari-search-icon"
              }), m.jsx("input", {
                type: "text",
                className: "ios-safari-search-input",
                placeholder: "搜尋或輸入網站名稱",
                defaultValue: ""
              }), m.jsx(E, {
                size: 16,
                className: "ios-safari-mic-icon"
              })]
            })
          }), m.jsxs("div", {
            className: "ios-safari-section-header",
            children: [m.jsxs("span", {
              className: "ios-safari-section-title",
              children: [m.jsx($, {
                size: 16,
                className: "title-ic"
              }), "喜好項目"]
            }), m.jsxs("span", {
              className: "ios-safari-see-all",
              onClick: () => {
                vs("bookmark");
                gs(true);
              },
              children: ["顯示全部 ", m.jsx("span", {
                children: "›"
              })]
            })]
          }), m.jsx("div", {
            className: "ios-safari-favorites-grid",
            children: x.map((e, s) => {
              const a = e.web || {
                title: `${e.title}`,
                site: e.title,
                url: `${e.title.toLowerCase().replace(/\s/g, "")}.com`,
                snippet: `${e.title} — ta 偶尔会逛逛这里。`
              };
              return m.jsxs("div", {
                className: "ios-safari-tile",
                onClick: () => us(a),
                children: [m.jsx("span", {
                  className: "ios-safari-fav-icon",
                  style: {
                    background: e.bg,
                    color: e.color
                  },
                  children: e.logo
                }), m.jsx("span", {
                  className: "ios-safari-tile-lb",
                  children: e.title
                })]
              }, s);
            })
          }), m.jsx("div", {
            className: "ios-safari-section-header",
            children: m.jsx("span", {
              className: "ios-safari-section-title",
              children: "隱私報告"
            })
          }), m.jsxs("div", {
            className: "ios-safari-report-card",
            children: [m.jsxs("div", {
              className: "ios-safari-report-left",
              children: [m.jsx(V, {
                size: 22,
                className: "shield-ic"
              }), m.jsx("span", {
                className: "report-num",
                children: g
              })]
            }), m.jsxs("div", {
              className: "ios-safari-report-right",
              children: ["過去7日，Safari已阻止 ", g, " 個追蹤器建立你的個人檔案。"]
            })]
          }), m.jsxs("div", {
            className: "ios-safari-section-header",
            children: [m.jsx("span", {
              className: "ios-safari-section-title",
              children: "閱讀列表"
            }), m.jsxs("span", {
              className: "ios-safari-see-all",
              onClick: () => {
                vs("reading");
                gs(true);
              },
              children: ["顯示全部 ", m.jsx("span", {
                children: "›"
              })]
            })]
          }), m.jsx("div", {
            className: "ios-safari-reading-list",
            children: d.slice(0, 2).map((e, s) => m.jsxs("div", {
              className: "ios-safari-reading-row",
              onClick: () => us(e),
              children: [m.jsx("span", {
                className: "ios-safari-reading-thumb",
                children: "👓"
              }), m.jsxs("div", {
                className: "ios-safari-reading-mid",
                children: [m.jsx("span", {
                  className: "ios-safari-reading-title",
                  children: e.title
                }), m.jsx("span", {
                  className: "ios-safari-reading-url",
                  children: e.url
                })]
              }), m.jsx("span", {
                className: "ios-chevron",
                children: "›"
              })]
            }, s))
          }), m.jsx("div", {
            className: "ios-safari-bottom-spacer"
          })]
        }), v(), j(), m.jsx("div", {
          className: "ios-home-indicator"
        }), js && m.jsx("div", {
          className: "ios-safari-toast",
          children: m.jsx("span", {
            children: js
          })
        })]
      });
    })(),
    notes: (() => {
      var e;
      var s;
      const a = ((s = (e = Za.notes) == null ? undefined : e.rows) == null ? undefined : s.length) ? Za.notes.rows : null;
      if (!a) {
        return m.jsx("div", {
          className: "ios-notes",
          children: Ka(N, "ta 的随手便签（即将由 AI 按角色生成）")
        });
      }
      const i = e => `${e.type || "text"}|${(e.title || e.text || "").slice(0, 20)}`;
      const t = e => {
        var s;
        return ((s = (Ue || [])[e]) == null ? undefined : s.url) || null;
      };
      const n = e => {
        if (e.type) {
          return e;
        }
        const {
          title: s,
          body: a
        } = (e => {
          const s = (e || "").trim();
          let a = s.indexOf("\n");
          if (a === -1) {
            const e = /[。！？!?]/.exec(s);
            a = e ? e.index + 1 : Math.min(s.length, 16);
          }
          return {
            title: s.slice(0, a).replace(/[\n]$/, "").trim(),
            body: s.slice(a).trim()
          };
        })(e.text);
        return {
          type: "text",
          title: s,
          body: a,
          date: e.date
        };
      };
      const l = {
        text: "📝",
        checklist: "☑️",
        draft: "✍️",
        image: "🖼️"
      };
      const r = e => {
        const s = i(e);
        const a = is[s];
        return (e.items || []).map((e, s) => ({
          ...e,
          done: a && a[s] !== undefined ? a[s] : !!e.done
        }));
      };
      const c = a.map(n);
      const o = c.filter(e => e.folder === "快速備忘錄");
      const d = c.filter(e => !e.folder || e.folder === "備忘錄" || e.folder === "iCloud");
      const h = new Map();
      c.forEach(e => {
        if (e.folder && e.folder !== "快速備忘錄" && e.folder !== "備忘錄" && e.folder !== "iCloud") {
          if (!h.has(e.folder)) {
            h.set(e.folder, []);
          }
          h.get(e.folder).push(e);
        }
      });
      const p = (e, s) => {
        const a = e.locked && !Is.has(i(e));
        let n = "";
        if (a) {
          n = "已加锁";
        } else if (e.type === "checklist") {
          const s = r(e);
          n = `${s.filter(e => e.done).length}/${s.length} 已完成`;
        } else {
          n = e.type === "draft" ? e.draftTo ? `给 ${e.draftTo} · 未发送` : "未发送的草稿" : (e.body || "").replace(/\n/g, " ");
        }
        return m.jsxs("div", {
          className: "ios-note-row" + (a ? " locked" : ""),
          onClick: () => (e => {
            if (e.locked && !Is.has(i(e))) {
              zs(s => {
                const a = new Set(s);
                a.add(i(e));
                return a;
              });
              if (P) {
                es(e);
                return;
              } else {
                ue([30, 50, 30]);
                setTimeout(() => es(e), 420);
                return;
              }
            }
            ue(16);
            es(e);
          })(e),
          children: [m.jsxs("div", {
            className: "ios-note-main",
            children: [m.jsxs("div", {
              className: "ios-note-title",
              children: [e.pinned && m.jsx("span", {
                className: "ios-note-pin",
                children: "📌 "
              }), a ? "🔒 已加锁备忘录" : `${l[e.type] || ""} ${e.title || "无标题"}`]
            }), m.jsxs("div", {
              className: "ios-note-sub",
              children: [m.jsx("span", {
                className: "ios-note-date",
                children: e.date
              }), n && m.jsxs("span", {
                className: "ios-note-prev",
                children: [" ", n]
              })]
            })]
          }), e.type === "image" && t(e.photoIdx) && !a && m.jsx("img", {
            className: "ios-notes-item-thumb",
            src: t(e.photoIdx),
            alt: ""
          }), m.jsx("span", {
            className: "ios-chevron",
            children: "›"
          })]
        }, s);
      };
      if (Qe) {
        const e = n(Qe);
        const s = e.locked && !Is.has(i(e));
        const a = e.folder || "備忘錄";
        return m.jsxs("div", {
          className: "ios-notes ios-notes-detail",
          children: [m.jsxs("div", {
            className: "ios-notes-hd",
            children: [m.jsxs("span", {
              className: "ios-notes-back",
              onClick: () => es(null),
              children: ["‹ ", a]
            }), m.jsx("span", {
              className: "ios-notes-dots",
              children: m.jsx(R, {
                size: 20
              })
            })]
          }), m.jsxs("div", {
            className: "ios-notes-list-scroll",
            children: [m.jsxs("div", {
              className: "ios-note-detail-date",
              children: [e.date, e.folder ? ` · ${e.folder}` : ""]
            }), s ? m.jsxs("div", {
              className: "ios-note-locked-full",
              children: [m.jsx("span", {
                className: "ios-note-locked-ic",
                children: "🔒"
              }), m.jsx("div", {
                children: "这条备忘录已加锁"
              })]
            }) : m.jsxs("div", {
              className: "ios-note-detail-doc",
              children: [m.jsx("div", {
                className: "ios-note-detail-title",
                children: e.title
              }), e.type === "draft" && e.draftTo && m.jsxs("div", {
                className: "ios-note-draft-to",
                children: ["给 ", e.draftTo, " · 未发送"]
              }), e.type === "checklist" ? m.jsx("div", {
                className: "ios-note-checklist",
                children: r(e).map((s, a) => m.jsxs("div", {
                  className: "ios-note-check-row" + (s.done ? " done" : ""),
                  onClick: () => ((e, s) => {
                    const a = i(e);
                    const t = r(e).map((e, a) => a === s ? !e.done : e.done);
                    ts(e => ({
                      ...e,
                      [a]: t
                    }));
                    ue(10);
                  })(e, a),
                  children: [m.jsx("span", {
                    className: "ios-note-check-box-icon",
                    children: s.done ? "✓" : ""
                  }), m.jsx("span", {
                    className: "ios-note-check-text",
                    children: s.text
                  })]
                }, a))
              }) : e.type === "image" ? m.jsxs(m.Fragment, {
                children: [t(e.photoIdx) && m.jsx("img", {
                  className: "ios-note-img",
                  src: t(e.photoIdx),
                  alt: "",
                  onClick: () => ks({
                    url: t(e.photoIdx),
                    cap: e.title
                  })
                }), e.body && m.jsx("div", {
                  className: "ios-note-detail-body",
                  children: e.body
                })]
              }) : e.body && m.jsx("div", {
                className: "ios-note-detail-body",
                children: e.body
              })]
            })]
          }), m.jsx("div", {
            className: "ios-notes-detail-footer",
            children: m.jsx("div", {
              className: "ios-home-indicator"
            })
          })]
        });
      }
      if (ss) {
        let e = ss;
        let s = [];
        if (ss === "快速備忘錄") {
          s = o;
        } else if (ss === "備忘錄") {
          s = d;
        } else if (ss === "iPhone_notes") {
          e = "備忘錄";
          s = [];
        } else {
          s = h.get(ss) || [];
        }
        const a = s.filter(e => e.pinned);
        const i = s.filter(e => !e.pinned);
        const t = [];
        const n = new Map();
        i.forEach(e => {
          let s = "先前";
          const a = e.date || "";
          if (a.includes("6月") || a.includes("06-") || a.includes("今天") || a.includes("6/")) {
            s = "過去 30 日";
          } else {
            const e = a.match(/(\d+)\s*月/);
            s = e ? e[0] + "月" : "先前";
          }
          if (!n.has(s)) {
            n.set(s, []);
            t.push(s);
          }
          n.get(s).push(e);
        });
        return m.jsxs("div", {
          className: "ios-notes ios-notes-list-view",
          children: [m.jsxs("div", {
            className: "ios-notes-hd",
            children: [m.jsx("span", {
              className: "ios-notes-back",
              onClick: () => as(null),
              children: "‹ 資料夾"
            }), m.jsxs("div", {
              className: "ios-notes-hd-mid",
              children: [m.jsx("div", {
                className: "ios-notes-hd-title",
                children: e
              }), m.jsxs("div", {
                className: "ios-notes-hd-subtitle",
                children: [s.length, " 份備忘錄"]
              })]
            }), m.jsx("span", {
              className: "ios-notes-dots",
              children: m.jsx(R, {
                size: 20
              })
            })]
          }), m.jsxs("div", {
            className: "ios-notes-list-scroll",
            children: [m.jsx("div", {
              className: "ios-notes-big-title",
              children: e
            }), a.length > 0 && m.jsxs("div", {
              className: "ios-notes-list-group",
              children: [m.jsx("div", {
                className: "ios-notes-grouphd",
                children: "置頂"
              }), m.jsx("div", {
                className: "ios-notes-card",
                children: a.map((e, s) => p(e, s))
              })]
            }), s.length > 0 ? t.map((e, s) => m.jsxs("div", {
              className: "ios-notes-list-group",
              children: [m.jsx("div", {
                className: "ios-notes-grouphd",
                children: e
              }), m.jsx("div", {
                className: "ios-notes-card",
                children: n.get(e).map((e, s) => p(e, s))
              })]
            }, s)) : m.jsx("div", {
              className: "ios-notes-empty",
              children: "無備忘錄"
            })]
          }), m.jsxs("div", {
            className: "ios-notes-bottom-toolbar",
            children: [m.jsxs("div", {
              className: "ios-notes-search-container",
              children: [m.jsx(U, {
                size: 14,
                className: "ios-notes-search-icon"
              }), m.jsx("input", {
                type: "text",
                className: "ios-notes-search-input",
                placeholder: "搜尋",
                readOnly: true
              }), m.jsx(E, {
                size: 14,
                className: "ios-notes-mic-icon"
              })]
            }), m.jsx("div", {
              className: "ios-notes-new-btn",
              onClick: () => ue(12),
              children: m.jsx("span", {
                className: "ios-notes-new-icon",
                children: "✍️"
              })
            }), m.jsx("div", {
              className: "ios-home-indicator"
            })]
          })]
        });
      }
      const u = o.length;
      const x = d.length;
      const g = [];
      h.forEach((e, s) => {
        g.push({
          name: s,
          count: e.length
        });
      });
      return m.jsxs("div", {
        className: "ios-notes ios-notes-folders-view",
        children: [m.jsxs("div", {
          className: "ios-notes-hd",
          style: {
            justifyContent: "space-between",
            borderBottom: "none"
          },
          children: [m.jsx("span", {
            className: "ios-notes-nav-action",
            style: {
              color: "#dca842",
              fontSize: "16px",
              fontWeight: "normal",
              cursor: "pointer"
            },
            onClick: Va,
            children: "‹ 手機"
          }), m.jsx("span", {
            className: "ios-notes-dots",
            children: m.jsx(R, {
              size: 20
            })
          })]
        }), m.jsxs("div", {
          className: "ios-notes-list-scroll",
          children: [m.jsx("div", {
            className: "ios-notes-big-title",
            children: "資料夾"
          }), m.jsxs("div", {
            className: "ios-notes-folders-container",
            children: [u > 0 && m.jsx("div", {
              className: "ios-notes-group-card",
              children: m.jsxs("div", {
                className: "ios-notes-folder-item",
                onClick: () => as("快速備忘錄"),
                children: [m.jsxs("div", {
                  className: "ios-notes-folder-item-left",
                  children: [m.jsx("span", {
                    className: "ios-notes-folder-icon",
                    children: "📝"
                  }), m.jsx("span", {
                    className: "ios-notes-folder-name",
                    children: "快速備忘錄"
                  })]
                }), m.jsxs("div", {
                  className: "ios-notes-folder-item-right",
                  children: [m.jsx("span", {
                    className: "ios-notes-folder-count",
                    children: u
                  }), m.jsx("span", {
                    className: "ios-chevron",
                    children: "›"
                  })]
                })]
              })
            }), m.jsxs("div", {
              className: "ios-notes-section-group",
              children: [m.jsxs("div", {
                className: "ios-notes-section-header",
                onClick: () => ls(!ns),
                children: [m.jsx("span", {
                  className: "ios-notes-triangle " + (ns ? "expanded" : ""),
                  children: "▶"
                }), m.jsx("span", {
                  children: "iCloud"
                })]
              }), ns && m.jsxs("div", {
                className: "ios-notes-group-card",
                children: [m.jsxs("div", {
                  className: "ios-notes-folder-item",
                  onClick: () => as("備忘錄"),
                  children: [m.jsxs("div", {
                    className: "ios-notes-folder-item-left",
                    children: [m.jsx("span", {
                      className: "ios-notes-folder-icon",
                      children: "📁"
                    }), m.jsx("span", {
                      className: "ios-notes-folder-name",
                      children: "備忘錄"
                    })]
                  }), m.jsxs("div", {
                    className: "ios-notes-folder-item-right",
                    children: [m.jsx("span", {
                      className: "ios-notes-folder-count",
                      children: x
                    }), m.jsx("span", {
                      className: "ios-chevron",
                      children: "›"
                    })]
                  })]
                }), g.map((e, s) => m.jsxs("div", {
                  className: "ios-notes-folder-item",
                  onClick: () => as(e.name),
                  children: [m.jsxs("div", {
                    className: "ios-notes-folder-item-left",
                    children: [m.jsx("span", {
                      className: "ios-notes-folder-icon",
                      children: "📁"
                    }), m.jsx("span", {
                      className: "ios-notes-folder-name",
                      children: e.name
                    })]
                  }), m.jsxs("div", {
                    className: "ios-notes-folder-item-right",
                    children: [m.jsx("span", {
                      className: "ios-notes-folder-count",
                      children: e.count
                    }), m.jsx("span", {
                      className: "ios-chevron",
                      children: "›"
                    })]
                  })]
                }, s))]
              })]
            }), m.jsxs("div", {
              className: "ios-notes-section-group",
              children: [m.jsxs("div", {
                className: "ios-notes-section-header",
                onClick: () => cs(!rs),
                children: [m.jsx("span", {
                  className: "ios-notes-triangle " + (rs ? "expanded" : ""),
                  children: "▶"
                }), m.jsx("span", {
                  children: "我的 iPhone"
                })]
              }), rs && m.jsx("div", {
                className: "ios-notes-group-card",
                children: m.jsxs("div", {
                  className: "ios-notes-folder-item",
                  onClick: () => as("iPhone_notes"),
                  children: [m.jsxs("div", {
                    className: "ios-notes-folder-item-left",
                    children: [m.jsx("span", {
                      className: "ios-notes-folder-icon",
                      children: "📁"
                    }), m.jsx("span", {
                      className: "ios-notes-folder-name",
                      children: "備忘錄"
                    })]
                  }), m.jsxs("div", {
                    className: "ios-notes-folder-item-right",
                    children: [m.jsx("span", {
                      className: "ios-notes-folder-count",
                      children: "0"
                    }), m.jsx("span", {
                      className: "ios-chevron",
                      children: "›"
                    })]
                  })]
                })
              })]
            })]
          })]
        }), m.jsxs("div", {
          className: "ios-notes-bottom-toolbar",
          children: [m.jsxs("div", {
            className: "ios-notes-search-container",
            children: [m.jsx(U, {
              size: 14,
              className: "ios-notes-search-icon"
            }), m.jsx("input", {
              type: "text",
              className: "ios-notes-search-input",
              placeholder: "搜尋",
              readOnly: true
            }), m.jsx(E, {
              size: 14,
              className: "ios-notes-mic-icon"
            })]
          }), m.jsx("div", {
            className: "ios-notes-new-btn",
            onClick: () => {
              as("備忘錄");
              ue(12);
            },
            children: m.jsx("span", {
              className: "ios-notes-new-icon",
              children: "✍️"
            })
          }), m.jsx("div", {
            className: "ios-home-indicator"
          })]
        })]
      });
    })(),
    music: (() => {
      var e;
      var s;
      var a;
      if (!((e = Za.music) == null ? undefined : e.nowPlaying)) {
        return m.jsx("div", {
          className: "ios-music",
          children: Ka(y, "ta 最近在听的歌（即将由 AI 按角色生成）")
        });
      }
      const i = Fe || (Ue && Ue[0] ? Ue[0].url : null) || "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400";
      const t = Ae ? "#ff3b30" : "rgba(255,255,255,0.4)";
      if (Ee) {
        const e = (e => {
          if (Array.isArray(e == null ? undefined : e.songs) && e.songs.length > 0) {
            return e.songs;
          }
          const s = String((e == null ? undefined : e.name) || "");
          if (/深夜|emo|孤|伤|悲|痛|黑|静|眼泪|哭/.test(s)) {
            return [{
              title: "寂寞的季节",
              artist: "陶喆",
              cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=200",
              duration: "3:52"
            }, {
              title: "我知道你很难过",
              artist: "蔡依林",
              cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=200",
              duration: "4:22"
            }, {
              title: "深夜食堂的歌",
              artist: "铃木常吉",
              cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=200",
              duration: "3:05"
            }, {
              title: "孤勇者",
              artist: "陈奕迅",
              cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=200",
              duration: "4:16"
            }, {
              title: "成全",
              artist: "刘若英",
              cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=200",
              duration: "4:35"
            }, {
              title: "安静",
              artist: "周杰伦",
              cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=200",
              duration: "5:34"
            }];
          } else if (/甜|心动|恋|爱|你|专属|喜|情|告白|阳光/.test(s)) {
            return [{
              title: "小情歌",
              artist: "苏打绿",
              cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=200",
              duration: "4:33"
            }, {
              title: "告白气球",
              artist: "周杰伦",
              cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=200",
              duration: "3:35"
            }, {
              title: "有点甜",
              artist: "汪苏泷 / By2",
              cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=200",
              duration: "3:55"
            }, {
              title: "第一次",
              artist: "光良",
              cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=200",
              duration: "4:24"
            }, {
              title: "暖暖",
              artist: "梁静茹",
              cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=200",
              duration: "4:01"
            }, {
              title: "简单爱",
              artist: "周杰伦",
              cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=200",
              duration: "4:30"
            }];
          } else if (/摇滚|热血|跑|运|燥|燃|动|激|飞|梦|星空/.test(s)) {
            return [{
              title: "无地自容",
              artist: "黑豹乐队",
              cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=200",
              duration: "5:33"
            }, {
              title: "追梦赤子心",
              artist: "GALA",
              cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=200",
              duration: "5:07"
            }, {
              title: "海阔天空",
              artist: "Beyond",
              cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=200",
              duration: "5:24"
            }, {
              title: "倔强",
              artist: "五月天",
              cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=200",
              duration: "4:22"
            }, {
              title: "我相信",
              artist: "杨培安",
              cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=200",
              duration: "4:07"
            }, {
              title: "新男孩",
              artist: "朴树",
              cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=200",
              duration: "4:15"
            }];
          } else if (/旧|金曲|经|老|岁|回忆|往事|青|初/.test(s)) {
            return [{
              title: "十年",
              artist: "陈奕迅",
              cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=200",
              duration: "3:25"
            }, {
              title: "光辉岁月",
              artist: "Beyond",
              cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=200",
              duration: "5:02"
            }, {
              title: "突然好想你",
              artist: "五月天",
              cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=200",
              duration: "4:26"
            }, {
              title: "恋恋风尘",
              artist: "老狼",
              cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=200",
              duration: "4:11"
            }, {
              title: "红豆",
              artist: "王菲",
              cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=200",
              duration: "4:15"
            }, {
              title: "同桌的你",
              artist: "老狼",
              cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=200",
              duration: "3:50"
            }];
          } else {
            return [{
              title: "晴天",
              artist: "周杰伦",
              cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=200",
              duration: "4:29"
            }, {
              title: "七里香",
              artist: "周杰伦",
              cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=200",
              duration: "4:59"
            }, {
              title: "小半",
              artist: "陈粒",
              cover: "https://images.unsplash.com/photo-1498038432885-c97d3d27a1d4?q=80&w=200",
              duration: "4:57"
            }, {
              title: "妙龄童",
              artist: "陈粒",
              cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=200",
              duration: "3:39"
            }, {
              title: "喜帖街",
              artist: "谢安琪",
              cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=200",
              duration: "3:29"
            }, {
              title: "泡沫",
              artist: "邓紫棋",
              cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=200",
              duration: "4:18"
            }];
          }
        })(Ee);
        return m.jsxs("div", {
          className: "ios-music playlist-detail-view",
          children: [m.jsx("div", {
            className: "music-bg-blur",
            style: {
              backgroundImage: `url(${Ee.cover})`
            }
          }), m.jsx("div", {
            className: "music-bg-overlay"
          }), m.jsxs("div", {
            className: "music-detail-navbar",
            children: [m.jsx("span", {
              className: "nav-back",
              onClick: () => {
                ue(15);
                Me(null);
              },
              children: m.jsx(C, {
                size: 22
              })
            }), m.jsx("span", {
              className: "nav-title",
              children: "歌单"
            }), m.jsx("span", {
              className: "nav-more",
              children: m.jsx(R, {
                size: 20
              })
            })]
          }), m.jsxs("div", {
            className: "music-detail-scrollable",
            children: [m.jsxs("div", {
              className: "music-pl-detail-header",
              children: [m.jsx("div", {
                className: "music-pl-detail-cover",
                style: {
                  backgroundImage: `url(${Ee.cover})`
                },
                children: m.jsxs("div", {
                  className: "music-pl-detail-playcount",
                  children: ["▷ ", (10 + e.length * 2.3).toFixed(1), "万"]
                })
              }), m.jsxs("div", {
                className: "music-pl-detail-info",
                children: [m.jsx("div", {
                  className: "music-pl-detail-name",
                  children: Ee.name
                }), m.jsxs("div", {
                  className: "music-pl-detail-creator",
                  children: [m.jsx(ke, {
                    src: Z === "char" ? d : r,
                    size: 20,
                    name: Z === "char" ? o : l
                  }), m.jsx("span", {
                    className: "creator-name",
                    children: Z === "char" ? o : l
                  })]
                }), m.jsx("div", {
                  className: "music-pl-detail-desc",
                  children: "珍藏的私密歌单空间"
                })]
              })]
            }), m.jsxs("div", {
              className: "music-pl-actions-row",
              children: [m.jsxs("div", {
                className: "action-item",
                children: [m.jsx("span", {
                  className: "action-icon",
                  children: "💬"
                }), m.jsx("span", {
                  className: "action-txt",
                  children: "评论"
                })]
              }), m.jsxs("div", {
                className: "action-item",
                children: [m.jsx("span", {
                  className: "action-icon",
                  children: "🎵"
                }), m.jsx("span", {
                  className: "action-txt",
                  children: "分享"
                })]
              }), m.jsxs("div", {
                className: "action-item",
                children: [m.jsx("span", {
                  className: "action-icon",
                  children: "📥"
                }), m.jsx("span", {
                  className: "action-txt",
                  children: "下载"
                })]
              }), m.jsxs("div", {
                className: "action-item",
                children: [m.jsx("span", {
                  className: "action-icon",
                  children: "☑️"
                }), m.jsx("span", {
                  className: "action-txt",
                  children: "多选"
                })]
              })]
            }), m.jsxs("div", {
              className: "music-songs-container",
              children: [m.jsxs("div", {
                className: "music-songs-header",
                onClick: () => {
                  if (e.length > 0) {
                    ue(30);
                    Le(e[0].title);
                    De(e[0].artist);
                    Be(e[0].cover || Ee.cover);
                    Te(true);
                  }
                },
                children: [m.jsx(MountainIcon, {
                  size: 14,
                  fill: "#110e15",
                  color: "#110e15",
                  className: "play-all-icon"
                }), m.jsx("span", {
                  className: "play-all-title",
                  children: "播放全部"
                }), m.jsxs("span", {
                  className: "play-all-count",
                  children: ["(", e.length, ")"]
                })]
              }), m.jsx("div", {
                className: "music-songs-list",
                children: e.map((e, s) => {
                  const a = Re === e.title;
                  return m.jsxs("div", {
                    className: "music-song-row " + (a ? "active" : ""),
                    onClick: () => {
                      ue(25);
                      Le(e.title);
                      De(e.artist);
                      Be(e.cover || Ee.cover);
                      Te(true);
                    },
                    children: [m.jsx("div", {
                      className: "song-row-num",
                      children: a ? m.jsx("span", {
                        className: "song-playing-indicator",
                        children: "🎵"
                      }) : s + 1
                    }), m.jsxs("div", {
                      className: "song-row-info",
                      children: [m.jsx("div", {
                        className: "song-row-title",
                        children: e.title
                      }), m.jsx("div", {
                        className: "song-row-artist",
                        children: e.artist
                      })]
                    }), m.jsx("div", {
                      className: "song-row-play",
                      children: m.jsx(MountainIcon, {
                        size: 12,
                        className: "song-play-icon"
                      })
                    })]
                  }, s);
                })
              })]
            })]
          })]
        });
      }
      return m.jsxs("div", {
        className: "ios-music",
        children: [m.jsx("div", {
          className: "music-bg-blur",
          style: {
            backgroundImage: `url(${i})`
          }
        }), m.jsx("div", {
          className: "music-bg-overlay"
        }), m.jsxs("div", {
          className: "music-detail-navbar",
          children: [m.jsx("span", {
            className: "nav-back",
            onClick: () => {
              ue(15);
              Va();
            },
            children: m.jsx(C, {
              size: 22
            })
          }), m.jsx("span", {
            className: "nav-title",
            children: "音乐"
          }), m.jsx("span", {
            className: "nav-more",
            children: m.jsx(R, {
              size: 20
            })
          })]
        }), m.jsx("div", {
          className: "ios-music-grip"
        }), m.jsxs("div", {
          className: "music-vinyl-container",
          children: [m.jsx("div", {
            className: "music-stylus " + (Pe ? "playing" : "")
          }), m.jsx("div", {
            className: "music-vinyl-disc " + (Pe ? "playing" : ""),
            children: m.jsx("div", {
              className: "music-vinyl-cover",
              style: {
                backgroundImage: `url(${i})`
              }
            })
          })]
        }), m.jsxs("div", {
          className: "ios-music-row",
          children: [m.jsxs("div", {
            className: "ios-music-meta",
            children: [m.jsx("div", {
              className: "ios-music-song",
              children: Re
            }), m.jsx("div", {
              className: "ios-music-artist",
              children: We
            })]
          }), m.jsx("span", {
            className: "ios-music-like-btn " + (Ae ? "liked" : ""),
            onClick: () => {
              ue(30);
              $e(!Ae);
            },
            children: m.jsx(L, {
              size: 20,
              color: t,
              fill: Ae ? "#ff3b30" : "none",
              style: {
                transition: "all 0.2s"
              }
            })
          })]
        }), m.jsxs("div", {
          className: "ios-music-scrub",
          children: [m.jsxs("span", {
            className: "ios-music-track",
            children: [m.jsx("span", {
              className: "ios-music-played",
              style: {
                width: "42%"
              }
            }), m.jsx("span", {
              className: "ios-music-knob",
              style: {
                left: "42%"
              }
            })]
          }), m.jsxs("div", {
            className: "ios-music-times",
            children: [m.jsx("span", {
              children: "1:24"
            }), m.jsx("span", {
              children: "-2:58"
            })]
          })]
        }), m.jsxs("div", {
          className: "ios-music-transport",
          children: [m.jsx("span", {
            className: "transport-btn font-mode",
            onClick: () => ue(20),
            children: m.jsx(W, {
              size: 18,
              style: {
                opacity: 0.6
              }
            })
          }), m.jsx("span", {
            className: "transport-btn font-prev",
            onClick: () => ue(30),
            children: m.jsx(D, {
              size: 20,
              fill: "#fff"
            })
          }), m.jsx("span", {
            className: "ios-music-pp transport-btn play-pause-btn",
            onClick: () => {
              ue(40);
              Te(!Pe);
            },
            children: Pe ? m.jsx(F, {
              size: 20,
              fill: "#110e15",
              color: "#110e15"
            }) : m.jsx(MountainIcon, {
              size: 20,
              fill: "#110e15",
              color: "#110e15",
              style: {
                marginLeft: "2px"
              }
            })
          }), m.jsx("span", {
            className: "transport-btn font-next",
            onClick: () => ue(30),
            children: m.jsx(B, {
              size: 20,
              fill: "#fff"
            })
          }), m.jsx("span", {
            className: "transport-btn font-list",
            onClick: () => ue(20),
            children: m.jsx(O, {
              size: 18,
              style: {
                opacity: 0.6
              }
            })
          })]
        }), m.jsxs("div", {
          className: "ios-music-vol",
          children: [m.jsx("span", {
            className: "ios-music-vol-ico",
            children: m.jsx(G, {
              size: 12,
              style: {
                opacity: 0.5
              }
            })
          }), m.jsx("span", {
            className: "ios-music-vol-track",
            children: m.jsx("span", {
              className: "ios-music-vol-fill",
              style: {
                width: "60%"
              }
            })
          }), m.jsx("span", {
            className: "ios-music-vol-ico",
            children: m.jsx(q, {
              size: 12,
              style: {
                opacity: 0.5
              }
            })
          })]
        }), Za.music.mood && m.jsxs("div", {
          className: "ios-music-mood",
          children: ["“", Za.music.mood, "”"]
        }), !!((s = Za.music.playlists) == null ? undefined : s.length) && m.jsxs("div", {
          className: "ios-music-section",
          children: [m.jsx("div", {
            className: "ios-music-sec-title",
            children: "我的歌单"
          }), m.jsx("div", {
            className: "ios-music-playlists",
            children: Za.music.playlists.map((e, s) => {
              const a = (Ue && Ue[s + 1] ? Ue[s + 1].url : null) || ["https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=200", "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=200", "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=200", "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=200"][s % 4];
              return m.jsxs("div", {
                className: "ios-music-pl",
                onClick: () => {
                  ue(15);
                  Me({
                    name: e.name,
                    count: e.count,
                    cover: a,
                    songs: Array.isArray(e.songs) ? e.songs : null
                  });
                },
                children: [m.jsx("div", {
                  className: "ios-music-pl-cover-art",
                  style: {
                    backgroundImage: `url(${a})`
                  },
                  children: m.jsxs("div", {
                    className: "ios-music-pl-playcount",
                    children: ["▷ ", (10 + s * 7.4).toFixed(1), "万"]
                  })
                }), m.jsx("div", {
                  className: "ios-music-pl-name",
                  children: e.name
                }), e.count && m.jsxs("div", {
                  className: "ios-music-pl-count",
                  children: [e.count, " 首"]
                })]
              }, s);
            })
          })]
        }), !!((a = Za.music.genres) == null ? undefined : a.length) && m.jsxs("div", {
          className: "ios-music-section",
          children: [m.jsx("div", {
            className: "ios-music-sec-title",
            children: "常听"
          }), m.jsx("div", {
            className: "ios-music-genres",
            children: Za.music.genres.map((e, s) => m.jsx("span", {
              className: "ios-music-tag",
              children: e
            }, s))
          })]
        })]
      });
    })(),
    screen: (() => {
      var e;
      var s;
      var a;
      const i = ((s = (e = Za.screen) == null ? undefined : e.rows) == null ? undefined : s.length) ? Za.screen.rows : null;
      if (!i && !((a = Za.screen) == null ? undefined : a.total)) {
        return m.jsx("div", {
          className: "ios-screen",
          children: Ka(k, "ta 的使用习惯（即将由 AI 按角色生成）")
        });
      }
      const t = e => {
        const s = Math.floor(e / 60);
        const a = Math.round(e % 60);
        if (s > 0) {
          return `${s}小時${a}分`;
        } else {
          return `${a}分`;
        }
      };
      const n = e => e.toLocaleString();
      const l = (i || []).map(e => {
        const s = typeof (a = e.time) != "string" ? 0 : Number(((i = /(\d+)\s*h/i.exec(a)) == null ? undefined : i[1]) || ((t = /(\d+)\s*小时/.exec(a)) == null ? undefined : t[1]) || 0) * 60 + Number(((n = /h\s*(\d+)/i.exec(a)) == null ? undefined : n[1]) || ((l = /(?:^|[^h小时])(\d+)\s*m/i.exec(a)) == null ? undefined : l[1]) || ((r = /(\d+)\s*分/.exec(a)) == null ? undefined : r[1]) || 0);
        var a;
        var i;
        var t;
        var n;
        var l;
        var r;
        let c = "other";
        let o = "#ff9f0a";
        const d = String(e.app).toLowerCase();
        if (/消息|微信|qq|微博|小红书|discord|wechat|line|twitter|instagram|tiktok|facebook|social/.test(d)) {
          c = "social";
          o = "#007aff";
        } else if (/fate\/go|游戏|王者|和平|原神|崩铁|崩坏|gaming|steam|maimai/.test(d)) {
          c = "gaming";
          o = "#54c7ec";
        }
        return {
          name: e.app,
          min: s,
          category: c,
          color: o
        };
      });
      (() => {
        const e = new Date();
        const s = e.getHours() * 60 + e.getMinutes();
        const a = l.reduce((e, s) => e + s.min, 0);
        if (a <= 0) {
          return;
        }
        const i = Math.max(30, Math.min(Math.round(s * 0.8), 840));
        if (a > i) {
          const e = i / a;
          l.forEach(s => {
            s.min = Math.max(1, Math.round(s.min * e));
          });
        }
      })();
      const r = l.filter(e => e.category === "social").reduce((e, s) => e + s.min, 0);
      const o = l.filter(e => e.category === "gaming").reduce((e, s) => e + s.min, 0);
      const d = l.filter(e => e.category === "other").reduce((e, s) => e + s.min, 0);
      const h = r + o + d;
      const p = Math.min(220, Math.max(8, Math.round(h / 4.5)));
      const u = Math.min(400, Math.max(12, Math.round(h / 2.2)));
      const x = (() => {
        const e = new Date().getDay();
        if (e === 0) {
          return 6;
        } else {
          return e - 1;
        }
      })();
      const g = ["一", "二", "三", "四", "五", "六", "日"];
      const f = Array.from({
        length: 7
      }, (e, s) => {
        if (s > x) {
          return {
            social: 0,
            gaming: 0,
            other: 0,
            total: 0,
            pickups: 0,
            notifs: 0
          };
        }
        if (s === x) {
          return {
            social: r,
            gaming: o,
            other: d,
            total: h,
            pickups: p,
            notifs: u
          };
        }
        const a = (s * 23 + Number(c || 0)) % 100;
        const i = 0.75 + a % 6 * 0.1;
        const t = s === 5 || s === 6;
        const n = Math.round(r * i * (t ? 1.3 : 0.9));
        const l = Math.round(o * i * (t ? 1.4 : 0.8));
        const m = Math.round(d * i * (t ? 0.7 : 1.1));
        const g = n + l + m;
        return {
          social: n,
          gaming: l,
          other: m,
          total: g,
          pickups: Math.min(250, Math.max(10, Math.round(g / 4.5 * (0.9 + a % 3 * 0.1)))),
          notifs: Math.min(500, Math.max(15, Math.round(g / 2.2 * (0.85 + a % 4 * 0.1))))
        };
      });
      const v = x + 1;
      const j = f.reduce((e, s) => e + s.total, 0);
      const b = Math.round(j / v);
      const N = Math.round(f.reduce((e, s) => e + s.social, 0) / v);
      const y = Math.round(f.reduce((e, s) => e + s.gaming, 0) / v);
      const w = Math.round(f.reduce((e, s) => e + s.other, 0) / v);
      const S = f.reduce((e, s) => e + s.pickups, 0);
      const _ = Math.round(S / v);
      const I = f.reduce((e, s) => e + s.notifs, 0);
      const z = Math.round(I / v);
      const A = new Date().getHours();
      const $ = [2, 1, 1, 0, 0, 1, 3, 6, 9, 8, 7, 9, 10, 8, 7, 8, 9, 11, 13, 15, 16, 14, 9, 5].map((e, s) => s <= A ? e : 0);
      const P = $.reduce((e, s) => e + s, 0) || 1;
      const T = Array.from({
        length: 24
      }, (e, s) => {
        if (s > A) {
          return {
            social: 0,
            gaming: 0,
            other: 0,
            total: 0,
            pickups: 0,
            notifs: 0
          };
        }
        const a = $[s] / P;
        const i = (s * 13 + Number(c || 0)) % 100;
        const t = r * a * (0.8 + i % 5 * 0.1);
        const n = o * a * (0.8 + (i + 2) % 5 * 0.1);
        const l = d * a * (0.8 + (i + 4) % 5 * 0.1);
        return {
          social: t,
          gaming: n,
          other: l,
          total: t + n + l,
          pickups: p * a * (0.9 + i % 3 * 0.1),
          notifs: u * a * (0.8 + i % 5 * 0.1)
        };
      });
      const E = T.reduce((e, s) => e + s.social, 0) || 1;
      const M = T.reduce((e, s) => e + s.gaming, 0) || 1;
      const R = T.reduce((e, s) => e + s.other, 0) || 1;
      const L = T.reduce((e, s) => e + s.pickups, 0) || 1;
      const W = T.reduce((e, s) => e + s.notifs, 0) || 1;
      T.forEach(e => {
        e.social = e.social / E * r;
        e.gaming = e.gaming / M * o;
        e.other = e.other / R * d;
        e.total = e.social + e.gaming + e.other;
        e.pickups = Math.round(e.pickups / L * p);
        e.notifs = Math.round(e.notifs / W * u);
      });
      const D = Number(c || 0) * 7 % 80 + 10;
      const F = Number(c || 0) * 11 % 60 + 15;
      const B = Number(c || 0) * 13 % 70 + 10;
      const O = [...l].sort((e, s) => s.min - e.min).slice(0, 3).map((e, s) => {
        const a = (s * 31 + Number(c || 0)) % 10;
        const i = Math.max(1, Math.round(p * (0.4 - s * 0.12) + a % 3));
        return {
          name: e.name,
          count: i,
          color: e.color
        };
      });
      const G = Math.max(1, ...O.map(e => e.count));
      O.forEach(e => {
        e.percent = Math.round(e.count / G * 100);
      });
      const q = [...l].sort((e, s) => {
        const a = /消息|微信|qq|discord|wechat|line|twitter|instagram|social/.test(String(e.name).toLowerCase());
        const i = /消息|微信|qq|discord|wechat|line|twitter|instagram|social/.test(String(s.name).toLowerCase());
        if (a && !i) {
          return -1;
        } else if (!a && i) {
          return 1;
        } else {
          return s.min - e.min;
        }
      }).slice(0, 4).map((e, s) => {
        const a = (s * 19 + Number(c || 0)) % 20;
        const i = Math.max(1, Math.round(u * (0.6 - s * 0.18) + a % 5));
        return {
          name: e.name,
          count: i,
          color: s === 0 ? "#ff375f" : e.color
        };
      });
      const U = Math.max(1, ...q.map(e => e.count));
      q.forEach(e => {
        e.percent = Math.round(e.count / U * 100);
      });
      const V = Ie === "week";
      const H = V ? f : T;
      const Y = Math.max(0.000001, ...H.map(e => e.total));
      const J = Math.max(0.000001, ...H.map(e => e.pickups));
      const X = Math.max(0.000001, ...H.map(e => e.notifs));
      const Z = V ? g : ["0", "6", "12", "18", "24"];
      const K = Math.max(1, ...l.map(e => e.min));
      const Q = l.map(e => {
        const s = V ? Math.round(e.min * 7 * (0.85 + e.min % 4 * 0.1)) : e.min;
        return {
          name: e.name,
          min: s,
          color: e.color,
          percent: Math.round(e.min / K * 100)
        };
      }).sort((e, s) => s.min - e.min);
      let ee = "星期二";
      let se = -1;
      H.forEach((e, s) => {
        if (e.pickups > se) {
          se = e.pickups;
          ee = V ? `星期${g[s]}` : `${s}:00`;
        }
      });
      return m.jsxs("div", {
        className: "ios-screen-v2",
        children: [m.jsxs("div", {
          className: "ios-screen-nav-bar",
          children: [m.jsx("div", {
            className: "ios-screen-nav-status-spacer"
          }), m.jsxs("div", {
            className: "ios-screen-nav-inner",
            children: [m.jsx("button", {
              className: "ios-screen-back-circle-btn",
              onClick: Va,
              title: "返回",
              children: m.jsx(C, {
                size: 22,
                color: "#3c3c43"
              })
            }), m.jsx("div", {
              className: "ios-screen-nav-title",
              children: Da
            }), m.jsx("div", {
              className: "ios-screen-nav-right-spacer"
            })]
          })]
        }), m.jsxs("div", {
          className: "ios-screen-scroll-container",
          children: [m.jsx("div", {
            className: "ios-screen-scroll-spacer"
          }), m.jsx("div", {
            className: "ios-screen-header",
            children: m.jsxs("div", {
              className: "ios-screen-tabs-v2",
              children: [m.jsx("button", {
                className: Ie === "week" ? "on" : "",
                onClick: () => ze("week"),
                children: "週"
              }), m.jsx("button", {
                className: Ie === "day" ? "on" : "",
                onClick: () => ze("day"),
                children: "日"
              })]
            })
          }), m.jsx("div", {
            className: "ios-screen-section-title",
            children: "螢幕使用時間"
          }), m.jsxs("div", {
            className: "ios-screen-card-v2",
            children: [m.jsxs("div", {
              className: "ios-screen-card-summary",
              children: [m.jsxs("div", {
                className: "ios-screen-card-summary-left",
                children: [m.jsx("span", {
                  className: "ios-screen-avg-lbl",
                  children: V ? "每日平均" : "今日总计"
                }), m.jsx("span", {
                  className: "ios-screen-avg-val",
                  children: t(V ? b : h)
                })]
              }), m.jsx("div", {
                className: "ios-screen-card-summary-right",
                children: m.jsxs("span", {
                  className: "ios-screen-percent-change",
                  children: [m.jsx("span", {
                    className: "arrow",
                    children: "↓"
                  }), " 上週 ", D, "%"]
                })
              })]
            }), m.jsxs("div", {
              className: "ios-screen-chart-v2",
              children: [m.jsxs("div", {
                className: "ios-screen-chart-grid",
                children: [m.jsx("div", {
                  className: "grid-line",
                  style: {
                    bottom: "100%"
                  },
                  children: m.jsx("span", {
                    children: t(Y)
                  })
                }), m.jsx("div", {
                  className: "grid-line",
                  style: {
                    bottom: "50%"
                  },
                  children: m.jsx("span", {
                    children: t(Y / 2)
                  })
                }), m.jsx("div", {
                  className: "grid-line",
                  style: {
                    bottom: "0%"
                  },
                  children: m.jsx("span", {
                    children: "0"
                  })
                }), V && m.jsx("div", {
                  className: "grid-line avg-line",
                  style: {
                    bottom: b / Y * 100 + "%"
                  },
                  children: m.jsx("span", {
                    className: "avg-txt",
                    children: "平均"
                  })
                })]
              }), m.jsx("div", {
                className: "ios-screen-chart-bars",
                children: H.map((e, s) => m.jsx("div", {
                  className: "chart-bar-col",
                  children: e.total > 0 ? m.jsxs("div", {
                    className: "chart-bar-stack",
                    style: {
                      height: e.total / Y * 100 + "%"
                    },
                    children: [m.jsx("div", {
                      className: "bar-segment other",
                      style: {
                        height: e.other / e.total * 100 + "%"
                      }
                    }), m.jsx("div", {
                      className: "bar-segment gaming",
                      style: {
                        height: e.gaming / e.total * 100 + "%"
                      }
                    }), m.jsx("div", {
                      className: "bar-segment social",
                      style: {
                        height: e.social / e.total * 100 + "%"
                      }
                    })]
                  }) : m.jsx("div", {
                    className: "chart-bar-stack empty",
                    style: {
                      height: "0%"
                    }
                  })
                }, s))
              })]
            }), m.jsx("div", {
              className: "ios-screen-axis-v2",
              children: Z.map((e, s) => m.jsx("span", {
                children: e
              }, s))
            }), m.jsxs("div", {
              className: "ios-screen-legends",
              children: [m.jsxs("div", {
                className: "legend-item",
                children: [m.jsx("span", {
                  className: "dot social"
                }), "社交 ", m.jsx("span", {
                  children: t(V ? N : r)
                })]
              }), m.jsxs("div", {
                className: "legend-item",
                children: [m.jsx("span", {
                  className: "dot gaming"
                }), "遊戲 ", m.jsx("span", {
                  children: t(V ? y : o)
                })]
              }), m.jsxs("div", {
                className: "legend-item",
                children: [m.jsx("span", {
                  className: "dot other"
                }), "其他 ", m.jsx("span", {
                  children: t(V ? w : d)
                })]
              })]
            }), m.jsx("div", {
              className: "ios-screen-card-footer",
              children: m.jsxs("div", {
                className: "footer-row",
                children: [m.jsx("span", {
                  children: "總計螢幕使用時間"
                }), m.jsx("span", {
                  children: t(V ? j : h)
                })]
              })
            })]
          }), m.jsxs("div", {
            className: "ios-screen-update-time",
            children: ["更新時間：今天 ", (() => {
              const e = new Date();
              const s = e.getHours();
              return `${s < 12 ? "上午" : "下午"} ${s % 12 == 0 ? 12 : s % 12}:${String(e.getMinutes()).padStart(2, "0")}`;
            })()]
          }), m.jsxs("div", {
            className: "ios-screen-section-header-outer",
            children: [m.jsx("span", {
              className: "ios-screen-section-title",
              children: "最常用"
            }), m.jsx("span", {
              className: "blue-btn",
              children: "顯示類別"
            })]
          }), m.jsx("div", {
            className: "ios-screen-section-card",
            children: m.jsx("div", {
              className: "section-card-list",
              children: Q.map((e, s) => m.jsxs("div", {
                className: "section-list-row",
                children: [m.jsx("span", {
                  className: "app-icon",
                  style: {
                    background: e.color
                  },
                  children: e.name.charAt(0)
                }), m.jsxs("div", {
                  className: "app-row-mid",
                  children: [m.jsx("span", {
                    className: "app-name",
                    children: e.name
                  }), m.jsx("span", {
                    className: "app-progress-bar",
                    children: m.jsx("span", {
                      style: {
                        width: `${e.percent}%`,
                        background: e.color
                      }
                    })
                  })]
                }), m.jsx("span", {
                  className: "app-time",
                  children: t(e.min)
                }), m.jsx("span", {
                  className: "chevron",
                  children: "›"
                })]
              }, s))
            })
          }), m.jsx("div", {
            className: "ios-screen-section-title",
            children: "喚醒螢幕"
          }), m.jsxs("div", {
            className: "ios-screen-card-v2",
            children: [m.jsxs("div", {
              className: "ios-screen-card-summary",
              children: [m.jsxs("div", {
                className: "ios-screen-card-summary-left",
                children: [m.jsx("span", {
                  className: "ios-screen-avg-lbl",
                  children: V ? "每日平均" : "今日总计"
                }), m.jsx("span", {
                  className: "ios-screen-avg-val",
                  children: V ? _ : p
                })]
              }), m.jsx("div", {
                className: "ios-screen-card-summary-right",
                children: m.jsxs("span", {
                  className: "ios-screen-percent-change",
                  children: [m.jsx("span", {
                    className: "arrow",
                    children: "↓"
                  }), " 上週 ", F, "%"]
                })
              })]
            }), m.jsxs("div", {
              className: "ios-screen-chart-v2",
              children: [m.jsxs("div", {
                className: "ios-screen-chart-grid",
                children: [m.jsx("div", {
                  className: "grid-line",
                  style: {
                    bottom: "100%"
                  },
                  children: m.jsx("span", {
                    children: Math.round(J)
                  })
                }), m.jsx("div", {
                  className: "grid-line",
                  style: {
                    bottom: "50%"
                  },
                  children: m.jsx("span", {
                    children: Math.round(J / 2)
                  })
                }), m.jsx("div", {
                  className: "grid-line",
                  style: {
                    bottom: "0%"
                  },
                  children: m.jsx("span", {
                    children: "0"
                  })
                }), V && m.jsx("div", {
                  className: "grid-line avg-line",
                  style: {
                    bottom: _ / J * 100 + "%"
                  },
                  children: m.jsx("span", {
                    className: "avg-txt",
                    children: "平均"
                  })
                })]
              }), m.jsx("div", {
                className: "ios-screen-chart-bars",
                children: H.map((e, s) => m.jsx("div", {
                  className: "chart-bar-col",
                  children: e.pickups > 0 ? m.jsx("div", {
                    className: "chart-bar-stack",
                    style: {
                      height: e.pickups / J * 100 + "%"
                    },
                    children: m.jsx("div", {
                      className: "bar-segment gaming",
                      style: {
                        height: "100%"
                      }
                    })
                  }) : m.jsx("div", {
                    className: "chart-bar-stack empty",
                    style: {
                      height: "0%"
                    }
                  })
                }, s))
              })]
            }), m.jsx("div", {
              className: "ios-screen-axis-v2",
              children: Z.map((e, s) => m.jsx("span", {
                children: e
              }, s))
            }), m.jsxs("div", {
              className: "ios-screen-stats-v2",
              children: [m.jsxs("div", {
                className: "stat-row",
                children: [m.jsx("span", {
                  children: "次数最多"
                }), m.jsxs("span", {
                  children: [ee, "：", Math.round(se), "次"]
                })]
              }), m.jsxs("div", {
                className: "stat-row",
                children: [m.jsx("span", {
                  children: "喚醒螢幕總次數"
                }), m.jsx("span", {
                  children: V ? S : p
                })]
              })]
            }), m.jsx("div", {
              className: "ios-screen-section-title-inside",
              children: "喚醒螢幕後最先使用"
            }), m.jsx("div", {
              className: "section-card-list border-top",
              children: O.map((e, s) => m.jsxs("div", {
                className: "section-list-row",
                children: [m.jsx("span", {
                  className: "app-icon",
                  style: {
                    background: e.color
                  },
                  children: e.name.charAt(0)
                }), m.jsxs("div", {
                  className: "app-row-mid",
                  children: [m.jsx("span", {
                    className: "app-name",
                    children: e.name
                  }), m.jsx("span", {
                    className: "app-progress-bar",
                    children: m.jsx("span", {
                      style: {
                        width: `${e.percent}%`,
                        background: "#54c7ec"
                      }
                    })
                  })]
                }), m.jsxs("span", {
                  className: "app-time",
                  children: [e.count, " 次"]
                }), m.jsx("span", {
                  className: "chevron",
                  children: "›"
                })]
              }, s))
            })]
          }), m.jsx("div", {
            className: "ios-screen-section-title",
            children: "通知"
          }), m.jsxs("div", {
            className: "ios-screen-card-v2",
            children: [m.jsxs("div", {
              className: "ios-screen-card-summary",
              children: [m.jsxs("div", {
                className: "ios-screen-card-summary-left",
                children: [m.jsx("span", {
                  className: "ios-screen-avg-lbl",
                  children: V ? "每日平均" : "今日总计"
                }), m.jsx("span", {
                  className: "ios-screen-avg-val",
                  children: n(V ? z : u)
                })]
              }), m.jsx("div", {
                className: "ios-screen-card-summary-right",
                children: m.jsxs("span", {
                  className: "ios-screen-percent-change",
                  children: [m.jsx("span", {
                    className: "arrow",
                    children: "↓"
                  }), " 上週 ", B, "%"]
                })
              })]
            }), m.jsxs("div", {
              className: "ios-screen-chart-v2",
              children: [m.jsxs("div", {
                className: "ios-screen-chart-grid",
                children: [m.jsx("div", {
                  className: "grid-line",
                  style: {
                    bottom: "100%"
                  },
                  children: m.jsx("span", {
                    children: Math.round(X)
                  })
                }), m.jsx("div", {
                  className: "grid-line",
                  style: {
                    bottom: "50%"
                  },
                  children: m.jsx("span", {
                    children: Math.round(X / 2)
                  })
                }), m.jsx("div", {
                  className: "grid-line",
                  style: {
                    bottom: "0%"
                  },
                  children: m.jsx("span", {
                    children: "0"
                  })
                }), V && m.jsx("div", {
                  className: "grid-line avg-line",
                  style: {
                    bottom: z / X * 100 + "%"
                  },
                  children: m.jsx("span", {
                    className: "avg-txt",
                    children: "平均"
                  })
                })]
              }), m.jsx("div", {
                className: "ios-screen-chart-bars",
                children: H.map((e, s) => m.jsx("div", {
                  className: "chart-bar-col",
                  children: e.notifs > 0 ? m.jsx("div", {
                    className: "chart-bar-stack",
                    style: {
                      height: e.notifs / X * 100 + "%"
                    },
                    children: m.jsx("div", {
                      className: "bar-segment social",
                      style: {
                        height: "100%"
                      }
                    })
                  }) : m.jsx("div", {
                    className: "chart-bar-stack empty",
                    style: {
                      height: "0%"
                    }
                  })
                }, s))
              })]
            }), m.jsx("div", {
              className: "ios-screen-axis-v2",
              children: Z.map((e, s) => m.jsx("span", {
                children: e
              }, s))
            }), m.jsx("div", {
              className: "ios-screen-section-title-inside",
              children: "最常收到通知"
            }), m.jsx("div", {
              className: "section-card-list border-top",
              children: q.map((e, s) => m.jsxs("div", {
                className: "section-list-row",
                children: [m.jsx("span", {
                  className: "app-icon",
                  style: {
                    background: e.color
                  },
                  children: e.name.charAt(0)
                }), m.jsxs("div", {
                  className: "app-row-mid",
                  children: [m.jsx("span", {
                    className: "app-name",
                    children: e.name
                  }), m.jsx("span", {
                    className: "app-progress-bar",
                    children: m.jsx("span", {
                      style: {
                        width: `${e.percent}%`,
                        background: "#ff375f"
                      }
                    })
                  })]
                }), m.jsxs("span", {
                  className: "app-time",
                  children: [n(e.count), " •"]
                }), m.jsx("span", {
                  className: "chevron",
                  children: "›"
                })]
              }, s))
            })]
          })]
        })]
      });
    })(),
    health: (() => {
      var e;
      var s;
      const a = ((s = (e = Za.health) == null ? undefined : e.rows) == null ? undefined : s.length) ? Za.health.rows : null;
      if (!a) {
        return m.jsx("div", {
          className: "ios-health",
          children: Ka(w, "ta 的身体状态（即将由 AI 按角色生成）")
        });
      }
      const i = Za.healthTrend;
      const t = i ? Math.max(1, ...i.values) : 1;
      return m.jsxs("div", {
        className: "ios-health",
        children: [m.jsxs("div", {
          className: "ios-health-nav-bar",
          children: [m.jsx("div", {
            className: "ios-health-nav-status-spacer"
          }), m.jsxs("div", {
            className: "ios-health-nav-inner",
            children: [m.jsx("button", {
              className: "ios-health-back-circle-btn",
              onClick: Va,
              title: "返回",
              children: m.jsx(C, {
                size: 22,
                color: "#ff2d55"
              })
            }), m.jsx("div", {
              className: "ios-health-nav-title",
              children: "健康"
            }), m.jsx("div", {
              className: "ios-health-nav-right-spacer"
            })]
          })]
        }), m.jsxs("div", {
          className: "ios-health-scroll-container",
          children: [m.jsx("div", {
            className: "ios-health-scroll-spacer"
          }), m.jsxs("div", {
            className: "ios-health-main-header",
            children: [m.jsx("div", {
              className: "ios-health-big",
              children: "摘要"
            }), d && m.jsx("img", {
              src: d,
              className: "ios-health-avatar",
              alt: "",
              onError: e => {
                e.target.style.display = "none";
              }
            })]
          }), m.jsxs("div", {
            className: "ios-health-section-header",
            children: [m.jsx("span", {
              className: "ios-health-section-title",
              children: "已釘選"
            }), m.jsx("span", {
              className: "ios-health-edit-btn",
              children: "編輯"
            })]
          }), m.jsx("div", {
            className: "ios-health-list",
            children: a.map((e, s) => {
              const a = ((e = "") => {
                const s = String(e);
                if (/心率|心/.test(s)) {
                  return {
                    ic: "❤️",
                    color: "#ff375f"
                  };
                } else if (/睡眠|睡/.test(s)) {
                  return {
                    ic: "🛏️",
                    color: "#5b8def"
                  };
                } else if (/步|走|运动/.test(s)) {
                  return {
                    ic: "👟",
                    color: "#ff9f0a"
                  };
                } else if (/卡|热量|能量/.test(s)) {
                  return {
                    ic: "🔥",
                    color: "#ff6a3d"
                  };
                } else if (/水|喝/.test(s)) {
                  return {
                    ic: "💧",
                    color: "#34c3e0"
                  };
                } else if (/体重|重/.test(s)) {
                  return {
                    ic: "⚖️",
                    color: "#7c6cf0"
                  };
                } else {
                  return {
                    ic: "📊",
                    color: "#34c759"
                  };
                }
              })(e.label);
              const i = (e => {
                const s = String(e);
                if (/睡眠|睡/.test(s)) {
                  return "今天";
                } else if (/步|走|运动/.test(s)) {
                  return "下午 5:03";
                } else if (/心率|心/.test(s)) {
                  return "下午 4:45";
                } else if (/热量|能量|卡/.test(s)) {
                  return "下午 5:03";
                } else if (/水|喝/.test(s)) {
                  return "下午 3:12";
                } else if (/站立/.test(s)) {
                  return "下午 5:00";
                } else {
                  return "今天";
                }
              })(e.label);
              const t = (e => {
                const s = String(e || "");
                const a = s.match(/^([\d,.:hms]+)\s*(.*)$/);
                if (a) {
                  return {
                    num: a[1],
                    unit: a[2]
                  };
                } else {
                  return {
                    num: s,
                    unit: ""
                  };
                }
              })(e.value);
              const n = e.label.includes("步") || e.label.includes("走");
              return m.jsxs("div", {
                className: "ios-health-list-card",
                children: [m.jsxs("div", {
                  className: "ios-health-list-card-hd",
                  children: [m.jsxs("div", {
                    className: "ios-health-list-card-label-wrap",
                    children: [m.jsx("span", {
                      className: "ios-health-list-card-ic",
                      children: a.ic
                    }), m.jsx("span", {
                      className: "ios-health-list-card-lbl",
                      style: {
                        color: a.color
                      },
                      children: e.label
                    })]
                  }), m.jsxs("div", {
                    className: "ios-health-list-card-time-wrap",
                    children: [m.jsx("span", {
                      className: "ios-health-list-card-time",
                      children: i
                    }), m.jsx("span", {
                      className: "ios-health-list-card-chevron",
                      children: "›"
                    })]
                  })]
                }), m.jsxs("div", {
                  className: "ios-health-list-card-body",
                  children: [m.jsxs("div", {
                    className: "ios-health-list-card-val-wrap",
                    children: [m.jsx("span", {
                      className: "ios-health-list-card-val",
                      children: t.num
                    }), t.unit && m.jsx("span", {
                      className: "ios-health-list-card-unit",
                      children: t.unit
                    })]
                  }), n && m.jsxs("div", {
                    className: "ios-health-mini-chart",
                    children: [m.jsx("span", {
                      className: "bar",
                      style: {
                        height: "30%"
                      }
                    }), m.jsx("span", {
                      className: "bar",
                      style: {
                        height: "80%"
                      }
                    }), m.jsx("span", {
                      className: "bar",
                      style: {
                        height: "50%"
                      }
                    }), m.jsx("span", {
                      className: "bar",
                      style: {
                        height: "20%"
                      }
                    }), m.jsx("span", {
                      className: "bar",
                      style: {
                        height: "40%"
                      }
                    }), m.jsx("span", {
                      className: "bar active",
                      style: {
                        height: "90%"
                      }
                    }), m.jsx("span", {
                      className: "bar active",
                      style: {
                        height: "70%"
                      }
                    })]
                  })]
                })]
              }, s);
            })
          }), m.jsxs("div", {
            className: "ios-health-link-card",
            children: [m.jsxs("div", {
              className: "ios-health-link-card-left",
              children: [m.jsx("span", {
                className: "ios-health-link-card-icon-wrap",
                children: "❤️"
              }), m.jsx("span", {
                className: "ios-health-link-card-txt",
                children: "顯示所有健康資料"
              })]
            }), m.jsx("span", {
              className: "ios-health-link-card-chevron",
              children: "›"
            })]
          }), i && m.jsxs(m.Fragment, {
            children: [m.jsx("div", {
              className: "ios-health-section-header",
              style: {
                marginTop: "24px"
              },
              children: m.jsx("span", {
                className: "ios-health-section-title",
                children: "趨勢"
              })
            }), m.jsxs("div", {
              className: "ios-health-trend",
              children: [m.jsx("div", {
                className: "ios-health-trend-hd",
                children: i.label || "本周趋势"
              }), m.jsx("div", {
                className: "ios-health-trend-chart",
                children: i.values.map((e, s) => m.jsxs("div", {
                  className: "ios-health-trend-col",
                  children: [m.jsx("span", {
                    className: "ios-health-trend-bar",
                    style: {
                      height: `${Math.max(4, Math.round(e / t * 100))}%`
                    }
                  }), m.jsx("span", {
                    className: "ios-health-trend-day",
                    children: i.days[s] || ""
                  })]
                }, s))
              })]
            })]
          })]
        })]
      });
    })(),
    footprint: (() => {
      var e;
      var s;
      const a = ((s = (e = Za.footprint) == null ? undefined : e.rows) == null ? undefined : s.length) ? Za.footprint.rows : null;
      if (!a) {
        return m.jsx("div", {
          className: "ios-map",
          children: Ka(S, "今日足迹数据为空")
        });
      }
      const i = a || [];
      const t = i.length < 2 ? "0.0" : i.slice(1).reduce((e, s, a) => e + ((e, s) => {
        const a = `${(e == null ? undefined : e.place) || ""}→${(s == null ? undefined : s.place) || ""}`;
        let i = 0;
        for (let t = 0; t < a.length; t++) {
          i = (i * 31 + a.charCodeAt(t)) % 1000;
        }
        return 0.6 + i % 35 / 10;
      })(i[a], s), 0).toFixed(1);
      const n = i.map((e, s) => ((e, s) => {
        if (s <= 1) {
          return {
            x: 160,
            y: 110
          };
        }
        const a = [[{
          x: 60,
          y: 150
        }, {
          x: 160,
          y: 75
        }, {
          x: 260,
          y: 140
        }], [{
          x: 50,
          y: 160
        }, {
          x: 120,
          y: 70
        }, {
          x: 200,
          y: 150
        }, {
          x: 270,
          y: 80
        }], [{
          x: 40,
          y: 150
        }, {
          x: 100,
          y: 70
        }, {
          x: 160,
          y: 160
        }, {
          x: 220,
          y: 70
        }, {
          x: 280,
          y: 140
        }], [{
          x: 40,
          y: 160
        }, {
          x: 90,
          y: 80
        }, {
          x: 140,
          y: 160
        }, {
          x: 190,
          y: 80
        }, {
          x: 240,
          y: 160
        }, {
          x: 280,
          y: 90
        }]];
        const i = a[Math.min(s - 3, a.length - 1)] || a[0];
        return i[e % i.length] || {
          x: 50 + e * 50,
          y: 100
        };
      })(s, i.length));
      let l = "";
      if (n.length > 0) {
        l = `M ${n[0].x} ${n[0].y}`;
        for (let e = 1; e < n.length; e++) {
          const s = n[e - 1];
          const a = n[e];
          l += ` C ${s.x + (a.x - s.x) / 2} ${s.y}, ${s.x + (a.x - s.x) / 2} ${a.y}, ${a.x} ${a.y}`;
        }
      }
      const r = hs !== null ? hs : i.length - 1;
      const c = n[r] || {
        x: 160,
        y: 110
      };
      const o = i[r];
      const h = e => {
        ms(e);
        ue(12);
      };
      return m.jsxs("div", {
        className: "ios-map",
        children: [m.jsxs("div", {
          className: "ios-map-hd",
          children: [m.jsx("span", {
            className: "ios-map-back",
            onClick: Va,
            children: "‹ 返回"
          }), m.jsxs("div", {
            className: "ios-map-hd-mid",
            children: [m.jsx("div", {
              className: "ios-map-title",
              children: "今日足迹"
            }), m.jsx("div", {
              className: "ios-map-hd-subtitle",
              children: "由 GPS 自动记录 · 定位已连接"
            })]
          }), m.jsx("div", {
            className: "ios-map-user-container",
            children: m.jsx("div", {
              className: "ios-map-single-avatar",
              style: {
                backgroundImage: d ? `url(${d})` : "none"
              },
              children: !d && "Ta"
            })
          })]
        }), m.jsxs("div", {
          className: "ios-map-canvas-container",
          children: [m.jsxs("svg", {
            className: "ios-map-svg",
            viewBox: "0 0 320 220",
            width: "100%",
            height: "100%",
            children: [m.jsxs("defs", {
              children: [m.jsxs("linearGradient", {
                id: "googlePathGradient",
                x1: "0%",
                y1: "0%",
                x2: "100%",
                y2: "100%",
                children: [m.jsx("stop", {
                  offset: "0%",
                  stopColor: "#4285F4"
                }), m.jsx("stop", {
                  offset: "100%",
                  stopColor: "#29b6f6"
                })]
              }), m.jsx("clipPath", {
                id: "circleClipSingle",
                children: m.jsx("circle", {
                  cx: "0",
                  cy: "0",
                  r: "12.5"
                })
              })]
            }), m.jsx("rect", {
              x: "0",
              y: "0",
              width: "320",
              height: "220",
              fill: "#f8f9fa"
            }), m.jsx("path", {
              d: "M -10,120 C 50,110 80,140 120,130 C 160,120 180,90 220,100 C 260,110 290,80 330,90",
              stroke: "#d2e3fc",
              strokeWidth: "20",
              fill: "none",
              strokeLinecap: "round",
              opacity: "0.85"
            }), m.jsx("path", {
              d: "M 230,20 C 270,10 310,20 310,60 C 310,90 260,80 240,70 C 220,60 210,30 230,20 Z",
              fill: "#e6f4ea",
              stroke: "#ceead6",
              strokeWidth: "1"
            }), m.jsx("path", {
              d: "M 10,170 C 40,160 60,185 50,210 C 30,220 10,200 10,170 Z",
              fill: "#e6f4ea",
              stroke: "#ceead6",
              strokeWidth: "1"
            }), m.jsx("path", {
              d: "M -10,140 L 330,140",
              stroke: "#ffffff",
              strokeWidth: "14",
              fill: "none"
            }), m.jsx("path", {
              d: "M -10,140 L 330,140",
              stroke: "#fef7e0",
              strokeWidth: "11",
              fill: "none"
            }), m.jsx("path", {
              d: "M 120,-10 L 120,230",
              stroke: "#ffffff",
              strokeWidth: "12",
              fill: "none"
            }), m.jsx("path", {
              d: "M 120,-10 L 120,230",
              stroke: "#fef7e0",
              strokeWidth: "9",
              fill: "none"
            }), m.jsx("path", {
              d: "M -10,50 Q 180,180 330,80",
              stroke: "#ffffff",
              strokeWidth: "8",
              fill: "none"
            }), m.jsx("path", {
              d: "M -10,50 Q 180,180 330,80",
              stroke: "#f1f3f4",
              strokeWidth: "6",
              fill: "none"
            }), m.jsx("path", {
              d: "M -10,10 Q 160,100 330,200",
              stroke: "#dadce0",
              strokeWidth: "3",
              fill: "none"
            }), m.jsx("path", {
              d: "M -10,10 Q 160,100 330,200",
              stroke: "#9aa0a6",
              strokeWidth: "1.5",
              strokeDasharray: "5, 5",
              fill: "none"
            }), m.jsxs("g", {
              transform: "translate(150, 140)",
              children: [m.jsx("circle", {
                cx: "0",
                cy: "0",
                r: "4.5",
                fill: "#4285F4"
              }), m.jsx("text", {
                x: "0",
                y: "1.2",
                fontSize: "3.5",
                textAnchor: "middle",
                fill: "#ffffff",
                children: "🛒"
              }), m.jsx("text", {
                x: "0",
                y: "-7",
                fontSize: "5.5",
                textAnchor: "middle",
                fill: "#1a73e8",
                fontWeight: "bold",
                children: "购物中心"
              })]
            }), m.jsxs("g", {
              transform: "translate(60, 60)",
              children: [m.jsx("circle", {
                cx: "0",
                cy: "0",
                r: "4.5",
                fill: "#f2994a"
              }), m.jsx("text", {
                x: "0",
                y: "1.2",
                fontSize: "3.5",
                textAnchor: "middle",
                fill: "#ffffff",
                children: "☕"
              }), m.jsx("text", {
                x: "0",
                y: "-7",
                fontSize: "5.5",
                textAnchor: "middle",
                fill: "#e07a5f",
                fontWeight: "bold",
                children: "咖啡馆"
              })]
            }), m.jsxs("g", {
              transform: "translate(275, 45)",
              className: "ios-map-poi-ferris",
              children: [m.jsx("path", {
                d: "M -8,22 L 0,0 L 8,22 M -12,22 L 12,22",
                stroke: "#bdc1c6",
                strokeWidth: "1",
                fill: "none"
              }), m.jsxs("g", {
                className: "ios-map-ferris-wheel",
                children: [m.jsx("circle", {
                  cx: "0",
                  cy: "0",
                  r: "14",
                  stroke: "#bdc1c6",
                  strokeWidth: "1",
                  fill: "none"
                }), m.jsx("circle", {
                  cx: "0",
                  cy: "0",
                  r: "8",
                  stroke: "#bdc1c6",
                  strokeWidth: "0.75",
                  fill: "none"
                }), m.jsx("line", {
                  x1: "0",
                  y1: "-14",
                  x2: "0",
                  y2: "14",
                  stroke: "#bdc1c6",
                  strokeWidth: "0.5"
                }), m.jsx("line", {
                  x1: "-14",
                  y1: "0",
                  x2: "14",
                  y2: "0",
                  stroke: "#bdc1c6",
                  strokeWidth: "0.5"
                }), m.jsx("line", {
                  x1: "-10",
                  y1: "-10",
                  x2: "10",
                  y2: "10",
                  stroke: "#bdc1c6",
                  strokeWidth: "0.5"
                }), m.jsx("line", {
                  x1: "-10",
                  y1: "10",
                  x2: "10",
                  y2: "-10",
                  stroke: "#bdc1c6",
                  strokeWidth: "0.5"
                }), m.jsx("circle", {
                  cx: "0",
                  cy: "-14",
                  r: "1.5",
                  fill: "#ea4335"
                }), m.jsx("circle", {
                  cx: "0",
                  cy: "14",
                  r: "1.5",
                  fill: "#4285F4"
                }), m.jsx("circle", {
                  cx: "-14",
                  cy: "0",
                  r: "1.5",
                  fill: "#34a853"
                }), m.jsx("circle", {
                  cx: "14",
                  cy: "0",
                  r: "1.5",
                  fill: "#fabc05"
                })]
              }), m.jsx("circle", {
                cx: "0",
                cy: "0",
                r: "2",
                fill: "#70757a"
              }), m.jsx("text", {
                x: "0",
                y: "31",
                fontSize: "6",
                textAnchor: "middle",
                fill: "#70757a",
                fontWeight: "bold",
                children: "🎡 摩天轮"
              })]
            }), l && m.jsxs(m.Fragment, {
              children: [m.jsx("path", {
                d: l,
                fill: "none",
                stroke: "#4285F4",
                strokeWidth: "5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                opacity: "0.12"
              }), m.jsx("path", {
                d: l,
                fill: "none",
                stroke: "url(#googlePathGradient)",
                strokeWidth: "3.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "ios-map-google-path"
              }), m.jsxs("g", {
                children: [m.jsx("circle", {
                  cx: "0",
                  cy: "0",
                  r: "3.5",
                  fill: "#ffffff",
                  filter: "drop-shadow(0px 0px 2.5px #4285F4)",
                  children: m.jsx("animateMotion", {
                    dur: "5s",
                    repeatCount: "indefinite",
                    path: l,
                    rotate: "auto"
                  })
                }), m.jsx("polygon", {
                  points: "-2.5,-1.8 1.8,0 -2.5,1.8",
                  fill: "#1a73e8",
                  children: m.jsx("animateMotion", {
                    dur: "5s",
                    repeatCount: "indefinite",
                    path: l,
                    rotate: "auto"
                  })
                })]
              })]
            }), n.map((e, s) => {
              const a = s === r;
              return m.jsxs("g", {
                className: "ios-map-marker-group " + (a ? "active" : ""),
                onClick: () => h(s),
                style: {
                  cursor: "pointer"
                },
                children: [a && m.jsx("ellipse", {
                  cx: e.x,
                  cy: e.y + 1,
                  rx: "4.5",
                  ry: "1.8",
                  fill: "rgba(0,0,0,0.12)"
                }), m.jsx("path", {
                  d: "M 0 0 C -3.5 -5 -8 -7 -8 -12 C -8 -16.5 -4.5 -20 0 -20 C 4.5 -20 8 -16.5 8 -12 C 8 -7 3.5 -5 0 0 Z",
                  transform: `translate(${e.x}, ${e.y})`,
                  fill: a ? "#ea4335" : "#4285F4",
                  stroke: "#ffffff",
                  strokeWidth: "1.5",
                  className: a ? "ios-map-marker-bounce" : ""
                }), m.jsx("circle", {
                  cx: e.x,
                  cy: e.y - 12,
                  r: "2",
                  fill: "#ffffff"
                })]
              }, s);
            }), n.length > 0 && (() => {
              const e = n[n.length - 1];
              return m.jsxs("g", {
                transform: `translate(${e.x}, ${e.y})`,
                className: "ios-map-avatar-g",
                children: [m.jsx("circle", {
                  cx: "0",
                  cy: "0",
                  r: "16",
                  fill: "none",
                  stroke: "#4285F4",
                  strokeWidth: "1.2",
                  className: "ios-map-gps-pulse-1"
                }), m.jsx("circle", {
                  cx: "0",
                  cy: "0",
                  r: "26",
                  fill: "none",
                  stroke: "#4285F4",
                  strokeWidth: "0.8",
                  className: "ios-map-gps-pulse-2"
                }), m.jsx("circle", {
                  cx: "0",
                  cy: "0",
                  r: "4.5",
                  fill: "#4285F4",
                  stroke: "#ffffff",
                  strokeWidth: "1.5"
                }), m.jsxs("g", {
                  transform: "translate(0, -30)",
                  className: "ios-map-avatar-float",
                  children: [m.jsx("path", {
                    d: "M 0 0 C -13 -16 -17 -18 -17 -30 C -17 -39.5 -9.5 -47 0 -47 C 9.5 -47 17 -39.5 17 -30 C 17 -18 13 -16 0 0 Z",
                    fill: "#ffffff",
                    stroke: "#4285F4",
                    strokeWidth: "2.5",
                    filter: "drop-shadow(0px 3px 5px rgba(0,0,0,0.15))"
                  }), m.jsxs("g", {
                    transform: "translate(0, -30)",
                    children: [m.jsx("circle", {
                      cx: "0",
                      cy: "0",
                      r: "12.5",
                      fill: "#f0f0f2"
                    }), d ? m.jsx("image", {
                      href: d,
                      x: "-12.5",
                      y: "-12.5",
                      width: "25",
                      height: "25",
                      clipPath: "url(#circleClipSingle)"
                    }) : m.jsx("text", {
                      x: "0",
                      y: "3",
                      fontSize: "8",
                      textAnchor: "middle",
                      fill: "#4285F4",
                      fontWeight: "bold",
                      children: "Ta"
                    })]
                  })]
                })]
              });
            })()]
          }), o && m.jsxs("div", {
            className: "ios-map-popup",
            style: {
              left: `${c.x}px`,
              top: c.y - 12 + "px"
            },
            children: [m.jsxs("div", {
              className: "ios-map-popup-inner",
              children: [m.jsxs("div", {
                className: "ios-map-popup-place-row",
                children: [m.jsx("span", {
                  className: "ios-map-popup-poi-ic",
                  children: "📍"
                }), m.jsx("span", {
                  className: "ios-map-popup-place",
                  children: o.place
                })]
              }), m.jsxs("div", {
                className: "ios-map-popup-detail",
                children: [o.duration && m.jsxs("span", {
                  className: "ios-map-popup-dur",
                  children: ["停留 ", o.duration]
                }), o.note && m.jsxs("span", {
                  className: "ios-map-popup-note",
                  children: [" · ", o.note]
                })]
              }), m.jsxs("div", {
                className: "ios-map-popup-time",
                children: [o.time, " 到达"]
              })]
            }), m.jsx("div", {
              className: "ios-map-popup-arrow"
            })]
          })]
        }), m.jsxs("div", {
          className: "ios-map-dashboard",
          children: [m.jsxs("div", {
            className: "ios-map-banner",
            children: [m.jsx("span", {
              className: "ios-map-banner-ic",
              children: "📍"
            }), m.jsxs("div", {
              className: "ios-map-banner-text",
              children: [m.jsx("div", {
                className: "ios-map-banner-t",
                children: "GPS 轨迹记录"
              }), m.jsxs("div", {
                className: "ios-map-banner-s",
                children: ["今日已探访 ", i.length, " 个地点 · 累计移动约 ", t, " 公里"]
              })]
            })]
          }), m.jsx("div", {
            className: "ios-map-timeline",
            children: i.map((e, s) => {
              const a = s === r;
              return m.jsxs("div", {
                className: "ios-map-stop " + (a ? "active" : ""),
                onClick: () => h(s),
                children: [m.jsxs("div", {
                  className: "ios-map-axis",
                  children: [m.jsx("span", {
                    className: "ios-map-dot"
                  }), s < i.length - 1 && m.jsx("span", {
                    className: "ios-map-line"
                  })]
                }), m.jsxs("div", {
                  className: "ios-map-stop-card",
                  children: [m.jsxs("div", {
                    className: "ios-map-stop-top",
                    children: [m.jsx("span", {
                      className: "ios-map-place",
                      children: e.place
                    }), e.duration && m.jsx("span", {
                      className: "ios-map-dur",
                      children: e.duration
                    })]
                  }), m.jsxs("div", {
                    className: "ios-map-stop-bottom",
                    children: [m.jsx("span", {
                      className: "ios-map-time",
                      children: e.time
                    }), e.note && m.jsx("span", {
                      className: "ios-map-note",
                      children: e.note
                    })]
                  })]
                })]
              }, s);
            })
          })]
        }), m.jsx("div", {
          className: "ios-home-indicator"
        })]
      });
    })()
  };
  const ei = ve.find(e => e.key === he);
  return m.jsxs(m.Fragment, {
    children: [m.jsx(Ja, {
      title: (ei == null ? undefined : ei.label) || "",
      light: true,
      hideHeader: he === "music" || he === "screen" || he === "health" || he === "browser" || he === "notes" || he === "wallet" || he === "footprint",
      children: Qa[he] || m.jsx("div", {
        className: "hp-empty",
        children: "敬请期待"
      })
    }), ys && m.jsxs("div", {
      className: "hp-photo-viewer",
      onClick: () => ks(null),
      children: [m.jsx("button", {
        className: "hp-photo-close",
        onClick: e => {
          e.stopPropagation();
          ks(null);
        },
        children: "✕"
      }), m.jsx("img", {
        src: ys.url,
        alt: "",
        onClick: e => e.stopPropagation()
      }), ys.cap && m.jsx("div", {
        className: "hp-photo-cap",
        children: ys.cap
      })]
    }), Wa]
  });
};
const Ce = ({
  profileUsers: e,
  rosterCharacters: s,
  searchTerm: a,
  setSearchTerm: i,
  selectedGroup: t,
  setSelectedGroup: n,
  selectedStalker: l,
  setSelectedStalker: r,
  selectedTarget: c,
  setSelectedTarget: o,
  onStart: d
}) => {
  const h = [...e.map(e => ({
    id: e.uid || e.id,
    name: `${e.name || "Unknown"} (我)`,
    avatar: e.image || e.avatar || e.avatarUrl || "",
    group: "系统"
  })), ...s.map(e => ({
    id: e.id,
    name: e.name,
    avatar: e.image || e.avatar || e.avatarUrl || "",
    group: e.group || "其他"
  }))];
  const p = ["All", ...Array.from(new Set(h.map(e => e.group)))];
  const u = h.filter(e => {
    const s = e.name.toLowerCase().includes(a.toLowerCase());
    const i = t === "All" || e.group === t;
    return s && i;
  });
  return m.jsxs("div", {
    className: "sim-setup-screen",
    children: [m.jsx("div", {
      className: "setup-glitch-bg"
    }), m.jsxs("div", {
      className: "setup-content",
      style: {
        maxHeight: "90vh",
        overflowY: "auto",
        padding: "10px"
      },
      children: [m.jsxs("h1", {
        className: "setup-title",
        style: {
          fontSize: "24px"
        },
        children: ["心动观察 · HeartWatch", m.jsx("br", {}), m.jsxs("span", {
          children: [m.jsx(Z, {
            size: 18,
            style: {
              marginRight: 6
            }
          }), "悄悄惦记一个人的小心事"]
        })]
      }), m.jsxs("div", {
        className: "setup-filters",
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "10px"
        },
        children: [m.jsxs("div", {
          style: {
            display: "flex",
            gap: "10px",
            alignItems: "center",
            background: "rgba(255,255,255,0.05)",
            padding: "8px 12px",
            borderRadius: "12px"
          },
          children: [m.jsx(U, {
            size: 16,
            color: "#888"
          }), m.jsx("input", {
            type: "text",
            placeholder: "搜索角色...",
            value: a,
            onChange: e => i(e.target.value),
            style: {
              background: "transparent",
              border: "none",
              color: "#fff",
              outline: "none",
              width: "100%",
              fontSize: "14px"
            }
          })]
        }), m.jsx("div", {
          className: "group-tabs",
          style: {
            display: "flex",
            gap: "8px",
            overflowX: "auto",
            paddingBottom: "4px"
          },
          children: p.map(e => m.jsx("div", {
            onClick: () => n(e),
            style: {
              padding: "4px 12px",
              borderRadius: "16px",
              fontSize: "12px",
              cursor: "pointer",
              whiteSpace: "nowrap",
              background: t === e ? "#00ffcc" : "rgba(255,255,255,0.1)",
              color: t === e ? "#000" : "#fff",
              fontWeight: t === e ? "bold" : "normal"
            },
            children: e
          }, e))
        })]
      }), m.jsxs("div", {
        className: "role-selection-area",
        children: [m.jsxs("div", {
          className: "role-card",
          children: [m.jsxs("div", {
            className: "role-header",
            style: {
              color: "#00ffcc",
              borderColor: "rgba(0,255,204,0.3)"
            },
            children: [m.jsx(z, {
              size: 18
            }), " 选择「策划者」(偷偷惦记的人)"]
          }), m.jsxs("div", {
            className: "char-list",
            children: [u.map(e => m.jsxs("div", {
              className: "char-item " + ((l == null ? undefined : l.id) === e.id ? "active stalker-active" : ""),
              onClick: () => r(e),
              children: [m.jsx("div", {
                className: "char-avatar",
                style: {
                  backgroundImage: `url(${e.avatar})`
                }
              }), m.jsx("span", {
                children: e.name
              })]
            }, `stalker-${e.id}`)), u.length === 0 && m.jsx("div", {
              style: {
                padding: "10px",
                color: "#888",
                fontSize: "12px"
              },
              children: "未找到角色"
            })]
          })]
        }), m.jsxs("div", {
          className: "role-card",
          children: [m.jsxs("div", {
            className: "role-header",
            style: {
              color: "#ff2a55",
              borderColor: "rgba(255,42,85,0.3)"
            },
            children: [m.jsx(S, {
              size: 18
            }), " 选择「心上人」(被惦记的人)"]
          }), m.jsxs("div", {
            className: "char-list",
            children: [u.map(e => m.jsxs("div", {
              className: "char-item " + ((c == null ? undefined : c.id) === e.id ? "active target-active" : ""),
              onClick: () => o(e),
              children: [m.jsx("div", {
                className: "char-avatar",
                style: {
                  backgroundImage: `url(${e.avatar})`
                }
              }), m.jsx("span", {
                children: e.name
              })]
            }, `target-${e.id}`)), u.length === 0 && m.jsx("div", {
              style: {
                padding: "10px",
                color: "#888",
                fontSize: "12px"
              },
              children: "未找到角色"
            })]
          })]
        })]
      }), m.jsxs("button", {
        className: "start-sim-btn " + (l && c ? "ready" : ""),
        onClick: () => {
          if (l && c) {
            d();
          }
        },
        children: [m.jsx(K, {
          size: 20
        }), " ", l && c ? "开始这场心动观察" : "请先选好两个人"]
      })]
    })]
  });
};
const _e = [{
  top: "8%",
  left: "50%",
  tx: "translateX(-50%)"
}, {
  top: "40%",
  left: "14%"
}, {
  top: "40%",
  left: "86%",
  tx: "translateX(-100%)"
}, {
  top: "72%",
  left: "28%",
  tx: "translateX(-50%)"
}, {
  top: "72%",
  left: "72%",
  tx: "translateX(-50%)"
}, {
  top: "8%",
  left: "16%"
}];
const Ie = {
  souvenir: "steal",
  photo: "photo",
  approach: "sit_next"
};
const ze = ["hand", "feather", "ice", "tie", "brush", "lipstick", "blindfold", "whip"];
const Ae = {
  hand: "🤚 手",
  feather: "🪶 羽毛",
  ice: "🧊 冰块",
  tie: "🪢 绳子",
  brush: "🖌 毛笔",
  lipstick: "💄 唇",
  blindfold: "🩹 眼罩",
  whip: "〰 轻拍"
};
const $e = e => ({
  id: "b0",
  time: e.time,
  narrative: e.stalkerNarrative || "",
  charNarrative: e.charNarrative || "",
  companion: e.companion || null,
  observations: e.observations || [],
  actions: e.actions || [],
  choices: e.choices || [],
  cgPrompt: e.cgPrompt || ""
});
const Pe = e => {
  if (!e) {
    return [];
  }
  const s = Array.isArray(e.beats) ? e.beats : [];
  return [$e(e), ...s];
};
const Te = e => {
  if (!e) {
    return null;
  }
  const s = Pe(e);
  return s[Math.min(Math.max(0, e.beatIdx || 0), s.length - 1)];
};
const Ee = [];
const Me = [];
const Re = {
  他的外套: {
    icon: "shirt",
    spec: {
      物品: "一件外套",
      熟悉度: "99.8% 是 ta 的味道",
      小细节: "袖口还留着 ta 的气息"
    },
    svg: m.jsxs("svg", {
      viewBox: "0 0 100 100",
      style: {
        width: 100,
        height: 100
      },
      children: [m.jsx("path", {
        d: "M25,25 L38,15 L50,28 L62,15 L75,25 L70,55 L62,55 L62,85 L38,85 L38,55 L30,55 Z",
        fill: "none",
        stroke: "#00ffcc",
        strokeWidth: "1.5",
        strokeDasharray: "3 3"
      }), m.jsx("circle", {
        cx: "50",
        cy: "50",
        r: "14",
        fill: "none",
        stroke: "#ff2a55",
        strokeWidth: "1"
      }), m.jsx("line", {
        x1: "10",
        y1: "50",
        x2: "90",
        y2: "50",
        stroke: "rgba(0,255,204,0.25)",
        strokeWidth: "0.5"
      }), m.jsx("line", {
        x1: "50",
        y1: "10",
        x2: "50",
        y2: "90",
        stroke: "rgba(0,255,204,0.25)",
        strokeWidth: "0.5"
      })]
    }),
    monologue: "趁 ta 不在，悄悄借走的一件外套，打算洗干净了再还回去当惊喜。抱着它的时候，那若有若无的柑橘与洗衣液混合香气，让我觉得离 ta 好近... 光是这样，今天的心就被填得满满的了 ❤"
  },
  手写小本子: {
    icon: "book",
    spec: {
      物品: "一个手写小本子",
      内容: "ta 随手记下的日常",
      夹层小纸条: "1314 (写着「一生一世」)"
    },
    svg: m.jsxs("svg", {
      viewBox: "0 0 100 100",
      style: {
        width: 100,
        height: 100
      },
      children: [m.jsx("rect", {
        x: "28",
        y: "18",
        width: "44",
        height: "64",
        rx: "4",
        fill: "none",
        stroke: "#00ffcc",
        strokeWidth: "1.5",
        strokeDasharray: "4 2"
      }), m.jsx("line", {
        x1: "38",
        y1: "32",
        x2: "62",
        y2: "32",
        stroke: "#00ffcc",
        strokeWidth: "1"
      }), m.jsx("line", {
        x1: "38",
        y1: "46",
        x2: "62",
        y2: "46",
        stroke: "#00ffcc",
        strokeWidth: "1"
      }), m.jsx("line", {
        x1: "38",
        y1: "60",
        x2: "55",
        y2: "60",
        stroke: "#ff2a55",
        strokeWidth: "1"
      }), m.jsx("circle", {
        cx: "62",
        cy: "60",
        r: "4",
        fill: "none",
        stroke: "#ff2a55",
        strokeWidth: "1"
      })]
    }),
    monologue: "ta 亲手写下的小本子... 每一篇、每一个字，我都反复读了上百遍。原来 ta 在 5 月 1 号也悄悄记挂着某个人呢... 那种被人放在心上的感觉，一定很温暖吧 ❤"
  },
  他用过的杯子: {
    icon: "cup",
    spec: {
      物品: "ta 喝过的杯子",
      状态: "杯壁还有一点余温",
      小心思: "想留着当今天的纪念"
    },
    svg: m.jsxs("svg", {
      viewBox: "0 0 100 100",
      style: {
        width: 100,
        height: 100
      },
      children: [m.jsx("path", {
        d: "M35,25 L65,25 L60,80 L40,80 Z",
        fill: "none",
        stroke: "#00ffcc",
        strokeWidth: "1.5"
      }), m.jsx("path", {
        d: "M38,55 L62,55",
        stroke: "#ff2a55",
        strokeWidth: "2",
        strokeDasharray: "3 1.5"
      }), m.jsx("path", {
        d: "M65,35 C75,35 75,55 65,55",
        fill: "none",
        stroke: "#00ffcc",
        strokeWidth: "1.5"
      }), m.jsx("circle", {
        cx: "50",
        cy: "38",
        r: "8",
        fill: "none",
        stroke: "#ff2a55",
        strokeWidth: "0.8"
      })]
    }),
    monologue: "ta 刚喝过的杯子，我小心地收了起来。杯壁上仿佛还留着 ta 指尖微微的余温... 这样小小的、只有自己知道的纪念，让人忍不住偷偷脸红呢..."
  }
};
const Le = [{
  id: 0,
  title: "ta 的背影",
  url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop",
  exif: {
    device: "Apple iPhone 15 Pro Max",
    lens: "24mm f1.78 ISO 50",
    time: "2026-05-01 23:45:10",
    gps: "35.65858 N, 139.74543 E",
    steganography: "小标注: 偷偷写了一句「今天也很喜欢你」",
    address: "回家路上的那条街",
    story: "这是 ta 走在斑马线上的背影。那天晚上 ta 加班到很晚，我远远跟在后面，确认 ta 平安到家才离开。没敢上前打招呼，就把这一刻悄悄拍下来留作纪念了。"
  }
}, {
  id: 1,
  title: "咖啡馆的 ta",
  url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=800&fit=crop",
  exif: {
    device: "Sony Alpha 7R V",
    lens: "50mm f1.2 ISO 100",
    time: "2026-05-02 14:12:05",
    gps: "35.65922 N, 139.74411 E",
    steganography: "小标注: ta 喜欢的口味我已经记下来了",
    address: "街角那家 COFFEE PLACE",
    story: "镜头里是 ta 桌上的那杯咖啡。我偷偷记下了 ta 常点的口味——下次准备惊喜的时候，就照着这个买，一定不会错。"
  }
}, {
  id: 2,
  title: "ta 的日常自拍",
  url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop",
  exif: {
    device: "Apple iPhone 15 Pro Max",
    lens: "13mm f2.2 ISO 200",
    time: "2026-05-02 08:30:45",
    gps: "35.66104 N, 139.74290 E",
    steganography: "小标注: 这张笑得真好看，存下来了",
    address: "ta 的房间",
    story: "ta 早上随手拍的一张自拍，笑得很好看。背景里那排柜子上，隐约能看到 ta 收藏的小物件——原来 ta 也是个会偷偷珍藏纪念的人呢。"
  }
}, {
  id: 3,
  title: "模糊的一张",
  url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop",
  exif: {
    device: "UNKNOWN",
    lens: "失焦",
    time: "1970-01-01 00:00:00 (没拍清楚)",
    gps: "0.00000 N, 0.00000 E",
    steganography: "小标注: 手抖了，糊成一片",
    address: "没认出是哪里",
    story: "【💦 哎呀 💦】这张完全糊掉了——大概是当时太紧张，手一抖就拍虚了。虽然什么都看不清，但还是舍不得删掉，毕竟也是那一刻的心情呀。"
  },
  isGlitch: true
}];
const We = ({
  selectedLootItem: e,
  setSelectedLootItem: s,
  dynamicLootDetails: a
}) => {
  if (!e) {
    return null;
  }
  const i = Re[e] || a[e];
  if (i) {
    return m.jsx("div", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(5,5,8,0.85)",
        backdropFilter: "blur(12px)",
        zIndex: 250,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
      },
      onClick: () => s(null),
      children: m.jsxs("div", {
        style: {
          background: "rgba(10,12,18,0.95)",
          border: "1px solid rgba(0,255,204,0.3)",
          borderRadius: 16,
          width: "100%",
          maxWidth: "320px",
          padding: 16,
          boxShadow: "0 0 25px rgba(0,255,204,0.15) inset, 0 10px 40px rgba(0,0,0,0.8)",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          animation: "slide-in 0.25s cubic-bezier(0.2, 0.9, 0.2, 1)"
        },
        onClick: e => e.stopPropagation(),
        children: [m.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(0,255,204,0.2)",
            paddingBottom: 8
          },
          children: [m.jsxs("div", {
            style: {
              color: "#00ffcc",
              fontWeight: "bold",
              fontSize: 13,
              fontFamily: "monospace",
              display: "flex",
              alignItems: "center",
              gap: 6
            },
            children: [m.jsx(Z, {
              size: 14
            }), " 小纪念 · 细看一下"]
          }), m.jsx("button", {
            onClick: () => s(null),
            style: {
              background: "transparent",
              border: "none",
              color: "#ff2a55",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: 12
            },
            children: "[关闭]"
          })]
        }), m.jsx("div", {
          style: {
            background: "rgba(0,0,0,0.4)",
            borderRadius: 12,
            padding: i.image ? 0 : 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px dashed rgba(255,255,255,0.06)",
            position: "relative",
            height: i.image ? 180 : 110,
            overflow: "hidden"
          },
          children: i.image ? m.jsx("img", {
            src: i.image,
            alt: "纪念物",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }
          }) : m.jsxs(m.Fragment, {
            children: [m.jsx("div", {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "2px",
                background: "#00ffcc",
                boxShadow: "0 0 8px #00ffcc",
                animation: "sweep 3s linear infinite"
              }
            }), i.svg || m.jsx(Q, {
              size: 48,
              strokeWidth: 1.2,
              style: {
                color: "rgba(0,255,204,0.7)"
              }
            })]
          })
        }), m.jsx("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: 6
          },
          children: Object.entries(i.spec || {}).map(([e, s]) => m.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              fontSize: 11,
              fontFamily: "monospace"
            },
            children: [m.jsxs("span", {
              style: {
                color: "#888"
              },
              children: [e, "："]
            }), m.jsx("span", {
              style: {
                color: e.includes("比对") || e.includes("密码") ? "#ff2a55" : "#fff",
                fontWeight: "bold"
              },
              children: s
            })]
          }, e))
        }), m.jsx("div", {
          style: {
            background: "rgba(255,42,85,0.04)",
            borderLeft: "3px solid #ff2a55",
            padding: "8px 10px",
            borderRadius: "0 8px 8px 0",
            fontSize: 11,
            lineHeight: 1.5,
            fontStyle: "italic",
            color: "#f8b8c4"
          },
          children: i.monologue || i.story
        })]
      })
    });
  } else {
    return null;
  }
};
const De = ({
  isSkinPanelOpen: e,
  setIsSkinPanelOpen: s,
  skinOwner: a,
  skinOwnerType: i,
  activeStyle: t,
  activeSkin: n,
  homeWallpaperStyle: l,
  isAutoGenning: r,
  handleAutoGenerate: c,
  handlePickSkinStyle: o,
  handleClearWallpaper: d,
  handleUploadWallpaper: h,
  skinFileInputRef: p
}) => e ? m.jsx("div", {
  className: "skin-panel-overlay",
  onClick: () => s(false),
  children: m.jsxs("div", {
    className: "skin-panel",
    onClick: e => e.stopPropagation(),
    children: [m.jsxs("div", {
      className: "skin-panel-head",
      children: [m.jsxs("div", {
        className: "skin-panel-title",
        children: [m.jsx(_, {
          size: 16
        }), " ", (a == null ? undefined : a.name) || "对方", " 的手机外观"]
      }), m.jsx("button", {
        className: "skin-panel-close",
        onClick: () => s(false),
        children: m.jsx(X, {
          size: 18
        })
      })]
    }), i === "char" && m.jsxs(m.Fragment, {
      children: [m.jsx("div", {
        className: "skin-section-label",
        children: "智能装饰"
      }), m.jsx("button", {
        className: "skin-act-btn primary",
        style: {
          width: "100%",
          marginBottom: 18,
          padding: "12px"
        },
        disabled: r,
        onClick: c,
        children: r ? m.jsxs(m.Fragment, {
          children: [m.jsx(I, {
            size: 15,
            className: "spin"
          }), " 生成中…"]
        }) : m.jsxs(m.Fragment, {
          children: [m.jsx(K, {
            size: 15
          }), " 跟「", (a == null ? undefined : a.name) || "角色", "」人设自动生成外观"]
        })
      })]
    }), m.jsx("div", {
      className: "skin-section-label",
      children: "手机款式"
    }), m.jsx("div", {
      className: "skin-style-grid",
      children: de.map(e => {
        const s = oe[e];
        return m.jsxs("div", {
          className: "skin-style-card " + (t === e ? "selected" : ""),
          onClick: () => o(e),
          children: [m.jsx("div", {
            className: "skin-style-emoji",
            children: s.emoji
          }), m.jsx("div", {
            className: "skin-style-name",
            children: s.label
          }), m.jsx("div", {
            className: "skin-style-desc",
            children: s.desc
          })]
        }, e);
      })
    }), m.jsx("div", {
      className: "skin-section-label",
      children: "背景图"
    }), m.jsxs("div", {
      className: "skin-wallpaper-row",
      children: [m.jsx("div", {
        className: "skin-wallpaper-preview",
        style: l,
        children: !(n == null ? undefined : n.wallpaper) && m.jsx("span", {
          children: "默认主题"
        })
      }), m.jsxs("div", {
        className: "skin-wallpaper-actions",
        children: [m.jsxs("button", {
          className: "skin-act-btn primary",
          onClick: () => {
            var e;
            if ((e = p.current) == null) {
              return undefined;
            } else {
              return e.click();
            }
          },
          children: [m.jsx(ee, {
            size: 14
          }), " 上传背景图"]
        }), (n == null ? undefined : n.wallpaper) && m.jsx("button", {
          className: "skin-act-btn",
          onClick: d,
          children: "恢复默认"
        })]
      }), m.jsx("input", {
        ref: p,
        type: "file",
        accept: "image/*",
        style: {
          display: "none"
        },
        onChange: h
      })]
    }), m.jsxs("div", {
      className: "skin-panel-hint",
      children: ["外观绑定到「", i === "char" ? "该角色" : "当前用户", "」，仅本人手机生效。"]
    })]
  })
}) : null;
function Fe(e, s) {
  const [a, i] = h.useState(() => {
    try {
      const a = window.localStorage.getItem(e);
      if (a) {
        return JSON.parse(a);
      } else {
        return s;
      }
    } catch (a) {
      return s;
    }
  });
  h.useEffect(() => {
    try {
      window.localStorage.setItem(e, JSON.stringify(a));
    } catch (s) {}
  }, [e, a]);
  return [a, i];
}
const Be = () => {
  var a;
  var i;
  var x;
  var g;
  const {
    currentScreen: v,
    showScreen: j
  } = n();
  const {
    characters: b
  } = l();
  const {
    profileUsers: N,
    currentProfileUserId: y
  } = r();
  const {
    language: k,
    t: $
  } = c();
  const P = v === "chikan-sim-screen";
  h.useRef(null);
  const T = h.useRef(null);
  const [E, M] = Fe("cs_simMode", "setup");
  const [R, W] = Fe("cs_stalker", null);
  const [D, F] = Fe("cs_target", null);
  const [B, O] = h.useState("");
  const [G, q] = h.useState("All");
  const [V, H] = Fe("cs_perspective", "user");
  const Y = V === "char";
  const [J, X] = Fe("cs_alertness", 0);
  const [ee, oe] = Fe("cs_hasPhoto", false);
  const [de, me] = h.useState(false);
  const [pe, ue] = h.useState(false);
  const [xe, ge] = h.useState(null);
  const [fe, ve] = Fe("cs_currentLoc", "bedroom");
  const [je, be] = Fe("cs_sceneProgress", "idle");
  const [Ne, ye] = h.useState("home");
  const [ke, we] = h.useState(false);
  Fe("cs_fakeMessages", []);
  const [$e, Re] = Fe("cs_userTimeline", Ee);
  const [Be, Oe] = Fe("cs_charTimeline", Me);
  const [Ge, qe] = h.useState({});
  const [Ue, Ve] = h.useState(null);
  const He = h.useRef(new Set());
  const [Ye, Je] = h.useState([]);
  const [Xe, Ze] = h.useState(0);
  const [Ke, Qe] = h.useState(false);
  const [es, ss] = h.useState("stalker");
  const as = h.useRef(new Set());
  const [is, ts] = h.useState(null);
  const ns = h.useRef(false);
  const [ls, rs] = h.useState("");
  const cs = h.useRef(false);
  const [os, ds] = h.useState(null);
  const [hs, ms] = h.useState(false);
  const [ps, us] = h.useState("");
  const [xs, gs] = h.useState(false);
  const [fs, vs] = h.useState(false);
  const [js, bs] = h.useState(null);
  const [Ns, ys] = h.useState(null);
  const ks = Ns !== null ? Le[Ns] : null;
  const [ws, Ss] = h.useState("friend");
  const [Cs, _s] = Fe("cs_friendForged", []);
  const [Is, zs] = Fe("cs_momForged", []);
  const [As, $s] = Fe("cs_friendMsgRecovered", false);
  const [Ps, Ts] = Fe("cs_momMsgRecovered", false);
  const [Es, Ms] = Fe("cs_isCovered", false);
  const [Rs, Ls] = Fe("cs_intrusionLogs", []);
  const Ws = e => {
    const s = new Date().toTimeString().split(" ")[0];
    Ls(a => [`[${s}] ${e}`, ...a].slice(0, 8));
  };
  const [Ds, Fs] = Fe("cs_stealthTime", null);
  const [Bs, Os] = Fe("cs_looted", []);
  const [Gs, qs] = Fe("cs_dynamicLoot", {});
  const [Us, Vs] = h.useState(() => new Set());
  const [Hs, Ys] = h.useState(null);
  const [Js, Xs] = Fe("cs_choiceLog", []);
  const [Zs, Ks] = h.useState(false);
  const [Qs, ea] = h.useState(false);
  const [sa, aa] = Fe("cs_isBusted", false);
  const [ia, ta] = Fe("cs_bustedReason", "");
  const [na, la] = h.useState("");
  const [ra, ca] = h.useState(null);
  const [oa, da] = Fe("cs_punishType", "intercept");
  const [ha, ma] = Fe("cs_endings", []);
  const [pa, ua] = h.useState(75);
  const [xa, ga] = h.useState(false);
  const [fa, va] = Fe("cs_overdrivePassed", false);
  const [ja, ba] = Fe("cs_signatureImg", null);
  const Na = h.useRef(null);
  const ya = h.useRef(false);
  const [ka, wa] = h.useState(null);
  const [Sa, Ca] = h.useState(null);
  const [_a, Ia] = h.useState(false);
  const za = h.useRef(null);
  const Aa = N.find(e => String(e.uid || e.id) === String(y)) || N[0] || null;
  const $a = !!D && N.some(e => String(e.uid || e.id) === String(D == null ? undefined : D.id));
  const Pa = $a && N.find(e => String(e.uid || e.id) === String(D == null ? undefined : D.id)) || null;
  const Ta = b.find(e => String(e.id) === String(D == null ? undefined : D.id));
  const Ea = (Ta == null ? undefined : Ta.image) || (Ta == null ? undefined : Ta.avatar) || (Ta == null ? undefined : Ta.avatarUrl) || (D == null ? undefined : D.image) || (D == null ? undefined : D.avatar) || "";
  const Ma = (Aa == null ? undefined : Aa.image) || (Aa == null ? undefined : Aa.avatar) || (Aa == null ? undefined : Aa.avatarUrl) || "";
  const Ra = b.find(e => String(e.id) === String(R == null ? undefined : R.id));
  const La = (Ra == null ? undefined : Ra.image) || (Ra == null ? undefined : Ra.avatar) || (Ra == null ? undefined : Ra.avatarUrl) || (R == null ? undefined : R.avatar) || "";
  const Wa = $a ? {
    refImageId: Pa == null ? undefined : Pa.refImageRef,
    charSeed: undefined
  } : {
    refImageId: Ta == null ? undefined : Ta.refImageRef,
    charSeed: Ta == null ? undefined : Ta.imageSeed
  };
  const Da = {
    refImageId: Ra == null ? undefined : Ra.refImageRef,
    charSeed: Ra == null ? undefined : Ra.imageSeed
  };
  const Fa = D == null ? undefined : D.id;
  const Ba = D == null ? undefined : D.name;
  const Oa = $a ? Ma : Ea;
  const Ga = $a ? R == null ? undefined : R.id : y;
  const qa = $a ? (R == null ? undefined : R.name) || "对方" : Aa == null ? undefined : Aa.name;
  const Ua = $a ? La : Ma;
  const Va = p.useMemo(() => {
    const e = {};
    b.forEach(s => {
      const a = s.image || s.avatar || s.avatarUrl;
      if (s.name && a) {
        e[s.name] = a;
      }
    });
    N.forEach(s => {
      const a = s.image || s.avatar || s.avatarUrl;
      if (s.name && a) {
        e[s.name] = a;
      }
    });
    return e;
  }, [b, N]);
  const Ha = Y ? "char" : "user";
  const Ya = Y ? D : R;
  const Ja = Y ? Sa : ka;
  const Xa = (Ja == null ? undefined : Ja.style) || "modern";
  const Za = he(Xa);
  const Ka = (Ja == null ? undefined : Ja.aiTheme) || null;
  const Qa = (Sa == null ? undefined : Sa.aiTheme) || null;
  const ei = (Sa == null ? undefined : Sa.style) || "modern";
  const si = (Ka == null ? undefined : Ka.frameColor) && !(Ja == null ? undefined : Ja.manualStyle) ? {
    ...Za.vars,
    "--cps-frame-bg": `linear-gradient(150deg, ${Ka.frameColor}, ${Ka.frameColor}cc 55%, ${Ka.frameColor}99)`,
    "--cps-frame-border": Ka.frameColor
  } : Za.vars;
  const ai = (Ja == null ? undefined : Ja.wallpaper) ? {
    backgroundImage: `url(${Ja.wallpaper})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  } : Ka ? {
    background: `linear-gradient(160deg, ${Ka.bgFrom}, ${Ka.bgTo})`
  } : {
    background: Za.wallpaper
  };
  const ii = async (a, i, n = "char") => {
    var l;
    const r = {
      photos: [],
      relationship: "",
      userName: (Aa == null ? undefined : Aa.name) || "",
      language: k
    };
    if (a == null || i == null) {
      return r;
    }
    const c = n === "user";
    const o = c ? i : a;
    const h = c ? R == null ? undefined : R.id : i;
    try {
      const [a, n, p] = await Promise.all([(h != null ? e.getByPair(o, h) : Promise.resolve([])).catch(() => []), s.getByUser(o).catch(() => []), (h != null ? d.get(o, h) : Promise.resolve(null)).catch(() => null)]);
      r.relationship = (p == null ? undefined : p.relationship) || "";
      const u = new Set();
      const x = (e, s, a = "chat", i = "owner") => {
        if (typeof e == "string" && (!!e.startsWith("http") || !!e.startsWith("data:image")) && !u.has(e)) {
          u.add(e);
          r.photos.push({
            url: e,
            desc: String(s || "").slice(0, 60),
            source: a,
            from: i
          });
        }
      };
      const g = e => {
        const s = String((e == null ? undefined : e.sender) || (e == null ? undefined : e.role) || "").toLowerCase();
        return s !== "them" && s !== "char" && s !== "assistant" && s !== "ai";
      };
      (a || []).forEach(e => x(e.image, e.imageSummary, "chat", g(e) === c ? "owner" : "partner"));
      const f = e => {
        const s = !!e.isCharacterPost || !!e.charUserId;
        if (c) {
          return !s;
        } else {
          return s && String(e.charUserId) === String(i);
        }
      };
      (n || []).forEach(e => {
        if (f(e) && Array.isArray(e.images)) {
          e.images.forEach((s, a) => {
            var i;
            if (typeof s == "string" && !s.startsWith("txt:")) {
              x(s, (i = e.imageDescriptions) == null ? undefined : i[a], "moment", "owner");
            }
          });
        }
      });
      r.photos = r.photos.slice(0, 30);
      try {
        const e = ((l = b.find(e => String(e.id) === String(h))) == null ? undefined : l.name) || "ta";
        const s = (Aa == null ? undefined : Aa.name) || "我";
        const i = e => e ? typeof e.text == "string" && e.text ? e.text : typeof e.c == "string" && e.c ? e.c : typeof e.content == "string" && e.content ? e.content : e.image || e.imageRef ? e.imageSummary ? `[图片:${e.imageSummary}]` : "[图片]" : e.transferData ? "[转账]" : e.giftData ? `[礼物:${e.giftData.name || ""}]` : e.isVoice || e.voiceText ? e.voiceText || "[语音]" : "" : "";
        const t = (Array.isArray(a) ? a : []).slice(-30).map(a => {
          const t = i(a);
          if (t) {
            return `${a.sender === "them" || a.sender === "char" || a.role === "assistant" ? e : s}：${t.slice(0, 120)}`;
          } else {
            return null;
          }
        }).filter(Boolean).slice(-24);
        if (t.length) {
          r.recentStory = t.join("\n");
        }
        const c = (Array.isArray(n) ? n : []).slice(-6).map(e => e.note || e.content || e.text || "").filter(Boolean).map(e => e.slice(0, 80));
        if (c.length) {
          r.recentMoments = c.join(" / ");
        }
      } catch (m) {}
      const v = N.some(e => String(e.uid || e.id) === String(R == null ? undefined : R.id));
      const j = c ? i : v ? R == null ? undefined : R.id : null;
      const y = c ? v ? null : R == null ? undefined : R.id : i;
      try {
        const e = j != null && y != null ? await (await t(async () => {
          const {
            MemoryService: e
          } = await import("./native-pet-CTNtZgMA.js").then(e => e.cz);
          return {
            MemoryService: e
          };
        }, __vite__mapDeps([2, 3, 4, 5, 6, 7]))).MemoryService.get(j, y).catch(() => null) : null;
        if (e) {
          const s = (Array.isArray(e.summaryHistory) ? e.summaryHistory : []).filter(e => e && typeof e == "object" && e.summary && e.source !== "forum" && e.source !== "moment").sort((e, s) => (s.id || 0) - (e.id || 0)).slice(0, 8).map(e => String(e.summary).slice(0, 160));
          if (s.length) {
            r.memories = s;
          }
          const a = (Array.isArray(e.userFacts) ? e.userFacts : []).map(e => typeof e == "string" ? e : (e == null ? undefined : e.content) || "").filter(Boolean).slice(0, 12).map(e => String(e).slice(0, 80));
          if (a.length) {
            r.userFacts = a;
          }
        }
      } catch (m) {}
      if (!c) {
        try {
          const e = String(i);
          const s = b.find(s => String(s.id) === e);
          const a = (s == null ? undefined : s.group) || null;
          const t = e => e.image || e.avatar || e.avatarUrl || "";
          const n = (b || []).filter(s => s && s.type === "npc" && Array.isArray(s.boundTo) && s.boundTo.map(String).includes(e)).map(e => ({
            id: String(e.id),
            name: e.name || "",
            avatar: t(e),
            desc: String(e.description || e.personality || e.intro || "").slice(0, 160),
            close: true
          }));
          const l = a ? (b || []).filter(s => s && s.type !== "npc" && String(s.id) !== e && (s.group || null) === a).map(e => ({
            id: String(e.id),
            name: e.name || "",
            avatar: t(e),
            desc: String(e.description || e.personality || e.intro || "").slice(0, 120),
            close: false
          })) : [];
          r.relations = [...n, ...l].filter(e => e.name).slice(0, 8);
        } catch (m) {}
      }
      try {
        const {
          calGet: e
        } = await t(async () => {
          const {
            calGet: e
          } = await import("./native-pet-CTNtZgMA.js").then(e => e.cD);
          return {
            calGet: e
          };
        }, __vite__mapDeps([2, 3, 4, 5, 6, 7]));
        const s = new Date();
        const a = `${s.getFullYear()}-${String(s.getMonth() + 1).padStart(2, "0")}-${String(s.getDate()).padStart(2, "0")}`;
        let n = [];
        if (c) {
          n = e(`calendar_events_user_${o}`) || [];
        } else {
          const s = String(i);
          n = (e("calendar_events_character") || []).filter(e => e && (String(e.characterId) === s || Array.isArray(e == null ? undefined : e.characterIds) && e.characterIds.map(String).includes(s)));
        }
        r.schedule = (Array.isArray(n) ? n : []).filter(e => !e.date || String(e.date).slice(0, 10) === a).sort((e, s) => String(e.startTime || "").localeCompare(String(s.startTime || ""))).slice(0, 10).map(e => ({
          title: e.title || "",
          location: e.location || "",
          startTime: e.startTime || "",
          endTime: e.endTime || "",
          note: (e.note || "").slice(0, 40)
        }));
      } catch (m) {}
    } catch (m) {}
    return r;
  };
  h.useEffect(() => {
    if (!P || E !== "running") {
      return;
    }
    let e = false;
    (async () => {
      try {
        if ((R == null ? undefined : R.id) != null) {
          const s = await o.get("user", R.id);
          if (!e) {
            wa(s || {
              style: "modern",
              wallpaper: null
            });
          }
        }
        if ((D == null ? undefined : D.id) != null) {
          const a = $a ? "user" : "char";
          let i = await o.get(a, D.id);
          if (!e) {
            Ca(i || {
              style: "modern",
              wallpaper: null
            });
          }
          const n = $a ? (() => {
            const e = Pa;
            if (e) {
              return {
                name: e.name,
                gender: e.gender,
                description: e.intro || e.bio || e.persona || e.signature || "",
                intro: e.signature || ""
              };
            } else {
              return null;
            }
          })() : b.find(e => String(e.id) === String(D.id));
          if (!(i == null ? undefined : i.manualStyle) && !(i == null ? undefined : i.manualWallpaper) && !(i == null ? undefined : i.aiTheme) && n) {
            try {
              const s = await t(() => import("./chikanPhoneAutoSkin-BDc_ON11.js"), __vite__mapDeps([12, 2, 3, 4, 5, 6, 7]));
              const l = await ii(y, D.id, a);
              const r = await s.generatePhoneSkinFromPersona(n, l);
              if (r && !e) {
                await o.setAiTheme(a, D.id, r);
                const s = await o.get(a, D.id);
                if (!e) {
                  i = s;
                  Ca(s);
                }
              }
            } catch (s) {}
          }
          if (!(i == null ? undefined : i.aiPhoneContent) && n) {
            try {
              const s = await t(() => import("./chikanPhoneContent-DoLjmjc9.js"), __vite__mapDeps([13, 2, 3, 4, 5, 6, 7]));
              const i = await ii(y, D.id, a);
              const l = await s.generatePhoneContentFromPersona(n, i);
              if (l && !e) {
                await o.setAiPhoneContent(a, D.id, l);
                const s = await o.get(a, D.id);
                if (!e) {
                  Ca(s);
                }
              }
            } catch (s) {}
          }
        }
      } catch (s) {}
    })();
    return () => {
      e = true;
    };
  }, [P, E, R == null ? undefined : R.id, D == null ? undefined : D.id]);
  const ti = async () => {
    if ((Ya == null ? undefined : Ya.id) == null) {
      return;
    }
    const e = (await o.get(Ha, Ya.id)) || {
      style: "modern",
      wallpaper: null
    };
    if (Y) {
      Ca(e);
    } else {
      wa(e);
    }
  };
  const [ni, li] = h.useState(false);
  const [ri, ci] = h.useState(false);
  const oi = h.useRef(null);
  h.useEffect(() => {
    oi.current = (D == null ? undefined : D.id) ?? null;
  }, [D == null ? undefined : D.id]);
  const di = h.useRef((D == null ? undefined : D.id) ?? null);
  h.useEffect(() => {
    const e = (D == null ? undefined : D.id) ?? null;
    if (di.current !== null && String(di.current) !== String(e)) {
      qe({});
      Re(Ee);
      Oe(Me);
      Ls([]);
      Vs(new Set());
      Ys(null);
      Xs([]);
      Ve(null);
      He.current = new Set();
      Os([]);
      qs({});
      Je([]);
      Ze(0);
      ss("stalker");
      as.current = new Set();
      ts(null);
      ns.current = false;
      rs("");
      cs.current = false;
      ds(null);
      be("idle");
      ve("bedroom");
      Ms(false);
      X(0);
    }
    di.current = e;
  }, [D == null ? undefined : D.id]);
  const hi = async () => {
    if ((D == null ? undefined : D.id) == null || ri) {
      return;
    }
    const e = $a ? "user" : "char";
    const s = $a ? Pa ? {
      name: Pa.name,
      gender: Pa.gender,
      description: Pa.intro || Pa.bio || Pa.persona || Pa.signature || "",
      intro: Pa.signature || ""
    } : null : b.find(e => String(e.id) === String(D.id));
    if (!s) {
      Si("找不到该角色资料", "error");
      return;
    }
    const a = (Sa == null ? undefined : Sa.aiPhoneContent) && Sa.aiPhoneContent.generated ? Sa.aiPhoneContent : null;
    const i = (D == null ? undefined : D.name) || "ta";
    const n = D.id;
    ci(true);
    wi(40);
    const {
      startContentGen: l
    } = await t(async () => {
      const {
        startContentGen: e
      } = await import("./main-BO9xa-SQ.js").then(e => e.cj);
      return {
        startContentGen: e
      };
    }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
    l(async () => {
      const i = await t(() => import("./chikanPhoneContent-DoLjmjc9.js"), __vite__mapDeps([13, 2, 3, 4, 5, 6, 7]));
      const l = await ii(y, n, e);
      if (a) {
        l.prevContent = a;
        l.lastGenAt = a.generatedAt || (Sa == null ? undefined : Sa.updatedAt) || null;
      }
      const r = await i.generatePhoneContentFromPersona(s, l);
      if (!r) {
        return false;
      }
      await o.setAiPhoneContent(e, n, r);
      if (String(oi.current) === String(n)) {
        const s = await o.get(e, n);
        Ca(s);
      }
      wi([40, 60]);
      return true;
    }, {
      label: a ? `正在更新 ${i} 手机的新动态…` : `正在生成 ${i} 的手机内容…`,
      doneLabel: a ? `${i} 手机有新动态了` : `${i} 的手机内容生成好了`,
      isOnScreen: () => v === "chikan-sim-screen"
    }).finally(() => ci(false));
  };
  const [mi, pi] = h.useState(null);
  const ui = async () => {
    const e = b.find(e => String(e.id) === String(R == null ? undefined : R.id));
    const s = N.find(e => String(e.uid || e.id) === String(R == null ? undefined : R.id));
    const a = e ? {
      name: e.name,
      desc: e.description || e.personality || e.intro || ""
    } : s ? {
      name: s.name,
      desc: s.intro || s.bio || s.persona || s.signature || ""
    } : R ? {
      name: R.name,
      desc: ""
    } : null;
    const i = $a ? Pa ? {
      name: Pa.name,
      desc: Pa.intro || Pa.bio || Pa.persona || Pa.signature || ""
    } : {
      name: D == null ? undefined : D.name,
      desc: ""
    } : (() => {
      const e = b.find(e => String(e.id) === String(D == null ? undefined : D.id));
      if (e) {
        return {
          name: e.name,
          desc: e.description || e.personality || e.intro || ""
        };
      } else {
        return {
          name: D == null ? undefined : D.name,
          desc: ""
        };
      }
    })();
    const n = $a ? "user" : "char";
    const l = await ii(y, D == null ? undefined : D.id, n);
    const {
      generatePeekScript: r
    } = await t(async () => {
      const {
        generatePeekScript: e
      } = await import("./chikanPeekScript-Bh_p5Df5.js");
      return {
        generatePeekScript: e
      };
    }, __vite__mapDeps([14, 2, 3, 4, 5, 6, 7]));
    return await r({
      stalker: a,
      target: i,
      targetName: D == null ? undefined : D.name,
      relationship: l.relationship,
      aiPhoneContent: (Sa == null ? undefined : Sa.aiPhoneContent) || null,
      recentStory: l.recentStory,
      language: k
    });
  };
  const xi = async () => {
    const e = $a ? "user" : "char";
    const s = D == null ? undefined : D.id;
    const a = $a ? Pa ? {
      name: Pa.name,
      desc: Pa.intro || Pa.bio || Pa.persona || Pa.signature || ""
    } : {
      name: D == null ? undefined : D.name,
      desc: ""
    } : (() => {
      const e = b.find(e => String(e.id) === String(s));
      if (e) {
        return {
          name: e.name,
          desc: e.description || e.personality || e.intro || ""
        };
      } else {
        return {
          name: D == null ? undefined : D.name,
          desc: ""
        };
      }
    })();
    const i = b.find(e => String(e.id) === String(R == null ? undefined : R.id));
    const t = i ? {
      name: i.name,
      desc: i.description || i.personality || i.intro || ""
    } : R ? {
      name: R.name,
      desc: ""
    } : null;
    const n = await ii(y, s, e);
    return {
      base: {
        stalker: t,
        target: a,
        targetIsUser: $a,
        relationship: n.relationship,
        schedule: n.schedule,
        recentStory: n.recentStory,
        recentMoments: n.recentMoments,
        memories: n.memories,
        userFacts: n.userFacts,
        relations: n.relations,
        nowTime: Ai(),
        language: k
      },
      targetId: s,
      tOwnerType: e
    };
  };
  const gi = async e => {
    var s;
    if (Zs || (D == null ? undefined : D.id) == null) {
      return;
    }
    const a = zi.find(e => e.active) || zi[zi.length - 1];
    if (!a) {
      return;
    }
    const i = Pe(a);
    const n = i.length;
    const l = (a.beatIdx || 0) >= n - 1;
    if (!e && !l) {
      (() => {
        wi(20);
        const e = e => e.map(e => {
          if (!e.active) {
            return e;
          }
          const s = Pe(e).length;
          return {
            ...e,
            beatIdx: Math.min((e.beatIdx || 0) + 1, s - 1)
          };
        });
        Re(e);
        Oe(e);
        be("observing");
      })();
      return;
    }
    const r = i;
    if (e) {
      const i = e.risk === "high" ? 22 : e.risk === "low" ? 5 : 12;
      X(e => Math.min(100, e + i));
      c = a.id;
      o = (s = r[r.length - 1]) == null ? undefined : s.time;
      if ((d = e) == null ? undefined : d.label) {
        Xs(e => [...e, {
          stopId: c,
          beatTime: o,
          choiceLabel: d.label,
          choiceIntent: d.intent || ""
        }].slice(-12));
      }
    }
    var c;
    var o;
    var d;
    Ks(true);
    wi(30);
    try {
      const {
        base: s,
        targetId: i
      } = await xi();
      const {
        advanceObservation: n
      } = await t(async () => {
        const {
          advanceObservation: e
        } = await import("./chikanTrackTimeline-C1J-3C9Q.js");
        return {
          advanceObservation: e
        };
      }, __vite__mapDeps([15, 2, 3, 4, 5, 6, 7]));
      const l = await n({
        ...s,
        stop: a,
        priorBeats: r,
        chosenChoice: e
      });
      const c = (l == null ? undefined : l.beats) || [];
      if (!c.length) {
        Si("这一刻没看出新动静，再试试～", "info");
        return;
      }
      if (String(oi.current) !== String(i)) {
        return;
      }
      const o = e => e.map(e => {
        if (!e.active) {
          return e;
        }
        const s = Array.isArray(e.beats) ? e.beats : [];
        const a = Pe(e).length;
        return {
          ...e,
          beats: [...s, ...c],
          beatIdx: a
        };
      });
      Re(o);
      Oe(o);
      be("observing");
      Vs(new Set());
      wi([30, 50]);
    } catch (h) {
      Si("继续观察失败，稍后再试", "error");
    } finally {
      Ks(false);
    }
  };
  const fi = async e => {
    if (Zs || (D == null ? undefined : D.id) == null) {
      return;
    }
    const s = zi;
    const a = s.find(e => e.active) || s[s.length - 1];
    const i = Te(a);
    Ks(true);
    wi(40);
    try {
      const {
        base: a,
        targetId: n,
        tOwnerType: l
      } = await xi();
      const {
        generateNextStop: r
      } = await t(async () => {
        const {
          generateNextStop: e
        } = await import("./chikanTrackTimeline-C1J-3C9Q.js");
        return {
          generateNextStop: e
        };
      }, __vite__mapDeps([15, 2, 3, 4, 5, 6, 7]));
      const c = s.map(e => ({
        time: e.time,
        location: e.location
      }));
      const d = await r({
        ...a,
        prevStops: c,
        lastBeat: i,
        chosenChoice: e
      });
      if (!(d == null ? undefined : d.stop)) {
        Si("ta 暂时没动，再多看一会儿吧～", "info");
        return;
      }
      if (String(oi.current) !== String(n)) {
        return;
      }
      const h = d.stop;
      const m = e => [...e.map(e => ({
        ...e,
        active: false
      })), h];
      Re(m);
      Oe(m);
      if (h.location) {
        o.mergeFootprint(l, n, {
          time: h.time,
          place: h.location,
          note: (h.desc || "").slice(0, 30)
        }).catch(() => {});
      }
      Vs(new Set());
      if (h.sceneType) {
        ve(h.sceneType);
      }
      be("arrived");
      wi([40, 60]);
      const p = `${h.time ? h.time + " " : ""}${h.location || ""}${h.desc ? "·" + h.desc : ""}`.trim();
      if (p) {
        Ls(e => [...e, p].slice(-8));
      }
      (async () => {
        try {
          const {
            getApiSettings: e
          } = await t(async () => {
            const {
              getApiSettings: e
            } = await import("./native-pet-CTNtZgMA.js").then(e => e.cG);
            return {
              getApiSettings: e
            };
          }, __vite__mapDeps([2, 3, 4, 5, 6, 7]));
          const {
            generateImage: s
          } = await t(async () => {
            const {
              generateImage: e
            } = await import("./native-pet-CTNtZgMA.js").then(e => e.cC);
            return {
              generateImage: e
            };
          }, __vite__mapDeps([2, 3, 4, 5, 6, 7]));
          const a = await e().catch(() => null);
          if (!a || !h.scenePrompt) {
            return;
          }
          const i = await s(h.scenePrompt, "trackingScene", a, {}).catch(() => null);
          if (i && String(oi.current) === String(n)) {
            qe(e => ({
              ...e,
              [h.id]: i
            }));
            if (h.sceneType === "home") {
              o.setHomeScene(l, n, i).then(() => o.get(l, n)).then(e => {
                if (e && String(oi.current) === String(n)) {
                  Ca(e);
                }
              }).catch(() => {});
            }
          }
        } catch (e) {}
      })();
    } catch (n) {
      Si("跟去下一站失败，稍后再试", "error");
    } finally {
      Ks(false);
    }
  };
  const vi = async () => {
    const e = $a ? "user" : "char";
    const s = D == null ? undefined : D.id;
    const a = $a ? Pa ? {
      name: Pa.name,
      desc: Pa.intro || Pa.bio || Pa.persona || Pa.signature || ""
    } : {
      name: D == null ? undefined : D.name,
      desc: ""
    } : (() => {
      const e = b.find(e => String(e.id) === String(s));
      if (e) {
        return {
          name: e.name,
          desc: e.description || e.personality || e.intro || ""
        };
      } else {
        return {
          name: D == null ? undefined : D.name,
          desc: ""
        };
      }
    })();
    const i = b.find(e => String(e.id) === String(R == null ? undefined : R.id));
    const t = N.find(e => String(e.uid || e.id) === String(R == null ? undefined : R.id));
    const n = i ? {
      name: i.name,
      desc: i.description || i.personality || i.intro || ""
    } : t ? {
      name: t.name,
      desc: t.intro || t.bio || t.persona || t.signature || ""
    } : R ? {
      name: R.name,
      desc: ""
    } : null;
    const l = await ii(y, s, e);
    return {
      base: {
        stalker: n,
        target: a,
        relationship: l.relationship,
        recentStory: l.recentStory,
        recentMoments: l.recentMoments,
        memories: l.memories,
        userFacts: l.userFacts,
        language: k
      },
      targetId: s
    };
  };
  const ji = async e => {
    if (Ke) {
      return;
    }
    const s = Xe >= Ye.length - 1;
    if (!e && Ye.length && !s) {
      wi(20);
      Ze(e => Math.min(e + 1, Ye.length - 1));
      return;
    }
    if (e) {
      const s = e.risk === "high" ? 14 : e.risk === "low" ? 4 : 9;
      ua(e => Math.min(190, e + s * 2));
    }
    Qe(true);
    wi(30);
    try {
      const {
        base: s,
        targetId: a
      } = await vi();
      const {
        generatePunishPlay: i
      } = await t(async () => {
        const {
          generatePunishPlay: e
        } = await import("./chikanTrackTimeline-C1J-3C9Q.js");
        return {
          generatePunishPlay: e
        };
      }, __vite__mapDeps([15, 2, 3, 4, 5, 6, 7]));
      const n = await i({
        ...s,
        pov: es,
        priorBeats: Ye,
        chosenChoice: e
      });
      const l = (n == null ? undefined : n.beats) || [];
      if (!l.length) {
        Si("ta 凑得更近了……(生成没出来，再试试)", "info");
        return;
      }
      if (String(oi.current) !== String(a)) {
        return;
      }
      Je(e => {
        const s = [...e, ...l];
        Ze(e.length);
        return s;
      });
      ma(e => e.includes("play") ? e : [...e, "play"]);
      wi([30, 50]);
    } catch (a) {
      Si("演出生成失败，稍后再试", "error");
    } finally {
      Qe(false);
    }
  };
  const bi = () => {
    wi(30);
    ss(e => e === "stalker" ? "target" : "stalker");
  };
  h.useEffect(() => {
    if (!sa || ns.current || (D == null ? undefined : D.id) == null) {
      return;
    }
    ns.current = true;
    const e = D == null ? undefined : D.id;
    (async () => {
      try {
        const {
          base: s,
          targetId: a
        } = await vi();
        const {
          generatePunishFlavor: i
        } = await t(async () => {
          const {
            generatePunishFlavor: e
          } = await import("./chikanTrackTimeline-C1J-3C9Q.js");
          return {
            generatePunishFlavor: e
          };
        }, __vite__mapDeps([15, 2, 3, 4, 5, 6, 7]));
        const n = await i({
          ...s
        });
        if (n && String(oi.current) === String(e)) {
          ts(n);
        }
      } catch (s) {}
    })();
  }, [sa]);
  h.useEffect(() => {
    if (!sa || oa !== "play" || cs.current) {
      return;
    }
    cs.current = true;
    if (La) {
      rs(La);
      return;
    }
    const e = D == null ? undefined : D.id;
    (async () => {
      try {
        const s = `vertical portrait of a person (${(R == null ? undefined : R.name) || "一个人"}) with wrists tied, blushing, flustered, looking up, intimate teasing mood, soft dramatic light, cinematic anime illustration, upper body`;
        const {
          getApiSettings: a
        } = await t(async () => {
          const {
            getApiSettings: e
          } = await import("./native-pet-CTNtZgMA.js").then(e => e.cG);
          return {
            getApiSettings: e
          };
        }, __vite__mapDeps([2, 3, 4, 5, 6, 7]));
        const {
          generateImage: i
        } = await t(async () => {
          const {
            generateImage: e
          } = await import("./native-pet-CTNtZgMA.js").then(e => e.cC);
          return {
            generateImage: e
          };
        }, __vite__mapDeps([2, 3, 4, 5, 6, 7]));
        const n = await a().catch(() => null);
        if (!n) {
          return;
        }
        const l = await i(s, "trackingGameCG", n, {
          ...Da
        }).catch(() => null);
        if (l && String(oi.current) === String(e)) {
          rs(l);
        }
      } catch (s) {}
    })();
  }, [sa, oa]);
  h.useEffect(() => {
    if (!sa || oa !== "play") {
      return;
    }
    const e = Ye[Xe];
    if (!e) {
      return;
    }
    const s = e.fx || e.tool || "ripple";
    ds({
      fx: s,
      key: e.id
    });
    wi(40);
    const a = setTimeout(() => ds(null), 900);
    return () => clearTimeout(a);
  }, [sa, oa, Xe, Ye]);
  h.useEffect(() => {
    if (!sa || oa !== "play") {
      return;
    }
    const e = Ye[Xe];
    const s = e == null ? undefined : e.cgPrompt;
    if (!s) {
      return;
    }
    const a = `play:${e.id}`;
    if (as.current.has(a)) {
      return;
    }
    as.current.add(a);
    const i = oi.current;
    (async () => {
      try {
        const {
          getApiSettings: e
        } = await t(async () => {
          const {
            getApiSettings: e
          } = await import("./native-pet-CTNtZgMA.js").then(e => e.cG);
          return {
            getApiSettings: e
          };
        }, __vite__mapDeps([2, 3, 4, 5, 6, 7]));
        const {
          generateImage: a
        } = await t(async () => {
          const {
            generateImage: e
          } = await import("./native-pet-CTNtZgMA.js").then(e => e.cC);
          return {
            generateImage: e
          };
        }, __vite__mapDeps([2, 3, 4, 5, 6, 7]));
        const n = await e().catch(() => null);
        if (!n) {
          return;
        }
        const l = await a(s, "trackingGameCG", n, {
          ...Wa
        }).catch(() => null);
        if (l && String(oi.current) === String(i)) {
          Ve(l);
        }
      } catch (e) {}
    })();
  }, [sa, oa, Ye, Xe]);
  const Ni = h.useRef(false);
  h.useEffect(() => {
    let e = false;
    const s = async () => {
      if (e || !P || Ni.current) {
        return;
      }
      const {
        getSnapshot: s,
        consumeReady: a
      } = await t(async () => {
        const {
          getSnapshot: e,
          consumeReady: s
        } = await import("./main-BO9xa-SQ.js").then(e => e.cj);
        return {
          getSnapshot: e,
          consumeReady: s
        };
      }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
      if (!s().hasReady) {
        return;
      }
      if (E !== "running") {
        if (R && D) {
          M("running");
          H("user");
          return;
        } else {
          return undefined;
        }
      }
      Ni.current = true;
      const i = a();
      if (i && !e) {
        we(true);
        ye("mirror");
        setTimeout(() => pi(i), 350);
      }
      setTimeout(() => {
        Ni.current = false;
      }, 1000);
    };
    let a = () => {};
    (async () => {
      const {
        subscribe: i
      } = await t(async () => {
        const {
          subscribe: e
        } = await import("./main-BO9xa-SQ.js").then(e => e.cj);
        return {
          subscribe: e
        };
      }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
      if (!e) {
        a = i(() => s());
        s();
      }
    })();
    const i = setTimeout(s, 500);
    return () => {
      e = true;
      clearTimeout(i);
      a();
    };
  }, [P, E]);
  const [yi, ki] = h.useState(false);
  const wi = e => {
    if (navigator.vibrate) {
      try {
        navigator.vibrate(e);
      } catch (s) {}
    }
  };
  const Si = (e, s = "info") => {
    ge({
      text: e,
      type: s
    });
    setTimeout(() => ge(null), 3000);
  };
  const Ci = e => {
    if (!sa) {
      wi([500, 200, 500, 200, 1000]);
      ta(e);
      aa(true);
    }
  };
  h.useEffect(() => {
    if (E === "running" && !sa && J > 0 && Ds === null) {
      const e = setInterval(() => {
        X(e => Math.max(0, e - (Es ? 5 : 2)));
      }, 1000);
      return () => clearInterval(e);
    }
  }, [E, sa, J, Ds, Es]);
  h.useEffect(() => {
    const e = Na.current;
    if (!e || !sa || oa !== "signature") {
      return;
    }
    const s = e.getContext("2d");
    s.strokeStyle = "#ff2a55";
    s.lineWidth = 3;
    s.lineCap = "round";
    s.lineJoin = "round";
    const a = e.getBoundingClientRect();
    e.width = a.width * window.devicePixelRatio;
    e.height = a.height * window.devicePixelRatio;
    s.scale(window.devicePixelRatio, window.devicePixelRatio);
    if (ja) {
      const e = new Image();
      e.src = ja;
      e.onload = () => {
        s.drawImage(e, 0, 0, a.width, a.height);
      };
    }
    const i = s => {
      const a = s.touches ? s.touches[0].clientX : s.clientX;
      const i = s.touches ? s.touches[0].clientY : s.clientY;
      const t = e.getBoundingClientRect();
      return {
        x: a - t.left,
        y: i - t.top
      };
    };
    const t = e => {
      ya.current = true;
      const a = i(e);
      s.beginPath();
      s.moveTo(a.x, a.y);
    };
    const n = e => {
      if (!ya.current) {
        return;
      }
      e.preventDefault();
      const a = i(e);
      s.lineTo(a.x, a.y);
      s.stroke();
    };
    const l = () => {
      if (ya.current) {
        ya.current = false;
        s.closePath();
        try {
          ba(e.toDataURL());
        } catch (a) {}
      }
    };
    e.addEventListener("mousedown", t);
    e.addEventListener("mousemove", n);
    e.addEventListener("mouseup", l);
    e.addEventListener("mouseleave", l);
    e.addEventListener("touchstart", t, {
      passive: false
    });
    e.addEventListener("touchmove", n, {
      passive: false
    });
    e.addEventListener("touchend", l);
    return () => {
      e.removeEventListener("mousedown", t);
      e.removeEventListener("mousemove", n);
      e.removeEventListener("mouseup", l);
      e.removeEventListener("mouseleave", l);
      e.removeEventListener("touchstart", t);
      e.removeEventListener("touchmove", n);
      e.removeEventListener("touchend", l);
    };
  }, [sa, oa, ja]);
  h.useEffect(() => {
    if (!sa || oa !== "overdrive" || !xa) {
      return;
    }
    const e = setInterval(() => {
      ua(s => {
        const a = s + Math.floor(Math.random() * 4) + 6;
        if (a >= 180) {
          clearInterval(e);
          ga(false);
          va(true);
          wi([100, 100, 100, 100, 1000]);
          Si("ta 害羞到心跳飙升，整个人都当机啦！", "error");
          ma(e => e.includes("overdrive") ? e : [...e, "overdrive"]);
          return 180;
        } else {
          wi(30);
          return a;
        }
      });
    }, 150);
    return () => clearInterval(e);
  }, [sa, oa, xa]);
  h.useEffect(() => {
    if (J >= 100 && Ds === null && !sa && E === "running") {
      wi([500, 200, 500]);
      Si("【心跳警告】ta 好像察觉到了！快躲起来别被发现！", "error");
      Fs(15);
    }
  }, [J, Ds, sa, E]);
  h.useEffect(() => {
    if (E === "running" && !sa && Ds !== null && Ds > 0 && !Y) {
      const e = setInterval(() => {
        Fs(e => e - 1);
      }, 1000);
      return () => clearInterval(e);
    }
    if (Ds === 0 && !sa && E === "running") {
      Ci("没躲及！ta 转过身，正好和你四目相对——惊喜，提前揭晓啦！");
    }
  }, [E, sa, Ds, Y]);
  const _i = (e, s) => {
    if (Es) {
      Si("正躲着呢，先出来再收集小纪念吧。", "error");
    } else if (!Bs.includes(e)) {
      wi([100, 50, 100]);
      Os(s => [...s, e]);
      X(e => Math.min(100, e + s));
      Si(`收进纪念盒：${e} (心跳 +${s}%)`, "info");
      Ws(`悄悄收藏了一个小纪念: ${e}`);
    }
  };
  const Ii = e => {
    if (Es) {
      Si("正躲着呢，先出来再收集小纪念吧。", "error");
      return;
    }
    const s = zi.find(e => e.active) || zi[zi.length - 1] || null;
    const a = (s == null ? undefined : s.location) || "现场";
    const i = (s == null ? undefined : s.sceneType) || fe;
    const n = (e == null ? undefined : e.item) || {
      cafe: "ta 喝过的杯子",
      indoor: "ta 用过的纸巾",
      outdoor: "ta 走过留下的小物",
      transit: "ta 的车票存根",
      home: "ta 门口的小物"
    }[i] || "ta 留下的小东西";
    const l = `${n}·${a}`.slice(0, 24);
    if (Bs.includes(l)) {
      Si("这件小纪念已经收过啦～", "info");
    } else {
      wi([100, 50, 100]);
      qs(s => ({
        ...s,
        [l]: {
          spec: {
            物品: n,
            地点: a,
            小心思: "想留着当今天跟着 ta 的纪念"
          },
          story: `在${a}，趁 ta 没注意，把这件小东西收了起来。`,
          monologue: (e == null ? undefined : e.monologue) || `${a}……ta 刚刚就在这里。把这件小东西收好，就像把今天这一刻也悄悄留住了。`
        }
      }));
      Os(e => [...e, l]);
      X(e => Math.min(100, e + 15));
      Si(`收进纪念盒：${n} (心跳 +15%)`, "info");
      Ws(`在${a}悄悄收了一件小纪念`);
      if (e == null ? undefined : e.imagePrompt) {
        const s = oi.current;
        (async () => {
          try {
            const {
              getApiSettings: a
            } = await t(async () => {
              const {
                getApiSettings: e
              } = await import("./native-pet-CTNtZgMA.js").then(e => e.cG);
              return {
                getApiSettings: e
              };
            }, __vite__mapDeps([2, 3, 4, 5, 6, 7]));
            const {
              generateImage: i
            } = await t(async () => {
              const {
                generateImage: e
              } = await import("./native-pet-CTNtZgMA.js").then(e => e.cC);
              return {
                generateImage: e
              };
            }, __vite__mapDeps([2, 3, 4, 5, 6, 7]));
            const n = await a().catch(() => null);
            if (!n) {
              return;
            }
            const r = await i(e.imagePrompt, "keepsakeScene", n, {}).catch(() => null);
            if (r && String(oi.current) === String(s)) {
              qs(e => e[l] ? {
                ...e,
                [l]: {
                  ...e[l],
                  image: r
                }
              } : e);
            }
          } catch (a) {}
        })();
      }
    }
  };
  h.useEffect(() => {
    if (Ne !== "radar" || !T.current) {
      return;
    }
    const e = T.current.closest(".tracking-timeline");
    if (e) {
      e.scrollTo({
        top: e.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [Ne, ke, $e, Be]);
  h.useEffect(() => {
    if (!P || E !== "running" || ke || Y) {
      return;
    }
    const e = zi.find(e => e.active) || zi[zi.length - 1] || null;
    const s = Te(e);
    const a = s == null ? undefined : s.cgPrompt;
    if (!a) {
      return;
    }
    const i = `${e == null ? undefined : e.id}:${s == null ? undefined : s.id}`;
    if (He.current.has(i)) {
      return;
    }
    He.current.add(i);
    const n = oi.current;
    (async () => {
      try {
        const {
          getApiSettings: e
        } = await t(async () => {
          const {
            getApiSettings: e
          } = await import("./native-pet-CTNtZgMA.js").then(e => e.cG);
          return {
            getApiSettings: e
          };
        }, __vite__mapDeps([2, 3, 4, 5, 6, 7]));
        const {
          generateImage: s
        } = await t(async () => {
          const {
            generateImage: e
          } = await import("./native-pet-CTNtZgMA.js").then(e => e.cC);
          return {
            generateImage: e
          };
        }, __vite__mapDeps([2, 3, 4, 5, 6, 7]));
        const i = await e().catch(() => null);
        if (!i) {
          return;
        }
        const l = await s(a, "trackingGameCG", i, {
          ...Wa
        }).catch(() => null);
        if (l && String(oi.current) === String(n)) {
          Ve(l);
        }
      } catch (e) {}
    })();
  }, [P, E, ke, Y, $e, Be]);
  if (!P) {
    return null;
  }
  const zi = Y ? Be : $e;
  const Ai = () => new Date().toLocaleTimeString("zh-CN", {
    hour: "2-digit",
    minute: "2-digit"
  });
  const $i = zi.find(e => e.active) || zi[zi.length - 1] || null;
  const Pi = Te($i);
  const Ti = $i ? Pe($i).length : 1;
  const Ei = ($i == null ? undefined : $i.beatIdx) || 0;
  const Mi = Ei < Ti - 1;
  if (!!Y && D != null) {
    D.name;
  }
  if (Y) {
    if (!(J >= 80) && !(Pi == null ? undefined : Pi.charNarrative) && $i != null) {
      $i.desc;
    }
  } else if (je !== "approached") {
    if ((Pi == null ? undefined : Pi.narrative) || ($i == null ? undefined : $i.desc)) {
      if (!(Pi == null ? undefined : Pi.narrative)) {
        $i.desc;
      }
    }
  }
  if (E === "setup") {
    return m.jsxs("div", {
      id: "chikan-sim-screen",
      className: "chikan-sim-wrapper",
      children: [m.jsx("div", {
        className: "safe-top-bar",
        children: m.jsxs("div", {
          className: "hud-btn",
          onClick: () => j("home-screen"),
          children: [m.jsx(C, {
            size: 16
          }), " 返回"]
        })
      }), m.jsx(Ce, {
        profileUsers: N,
        rosterCharacters: b,
        searchTerm: B,
        setSearchTerm: O,
        selectedGroup: G,
        setSelectedGroup: q,
        selectedStalker: R,
        setSelectedStalker: W,
        selectedTarget: D,
        setSelectedTarget: F,
        onStart: () => {
          wi(100);
          H("user");
          ye("home");
          we(false);
          M("running");
        }
      })]
    });
  }
  if (sa) {
    return m.jsx("div", {
      id: "chikan-sim-screen",
      className: "chikan-sim-wrapper",
      children: (() => {
        const e = ha.includes("intercept");
        const s = ha.includes("signature");
        const a = ha.includes("play");
        return m.jsxs("div", {
          className: "busted-screen",
          style: {
            maxHeight: "100vh",
            overflowY: "auto",
            padding: "20px 16px"
          },
          children: [m.jsx("div", {
            className: "glitch-red-bg"
          }), m.jsxs("div", {
            className: "busted-content",
            style: {
              width: "100%",
              maxWidth: "400px"
            },
            children: [m.jsx(re, {
              size: 48,
              color: "#ff2a55",
              style: {
                animation: "pulse 0.5s infinite"
              }
            }), m.jsx("h1", {
              className: "glitch-text",
              "data-text": "SURPRISE!",
              style: {
                fontSize: "20px",
                margin: "5px 0"
              },
              children: "SURPRISE!"
            }), m.jsx("h4", {
              style: {
                color: "#ff2a55",
                margin: "0 0 10px 0",
                fontSize: "13px",
                fontFamily: "monospace"
              },
              children: "[惊喜揭晓 · 原来 ta 早就发现啦]"
            }), m.jsxs("div", {
              className: "takeover-dialog",
              style: {
                width: "100%",
                margin: "0 0 12px 0",
                alignItems: "center"
              },
              children: [m.jsx("div", {
                className: "char-avatar",
                style: {
                  backgroundImage: `url(${D == null ? undefined : D.avatar})`,
                  width: 50,
                  height: 50,
                  flexShrink: 0,
                  border: "2px solid #ff2a55",
                  boxShadow: "0 0 12px rgba(255,42,85,0.4)",
                  animation: "breathing 2s infinite alternate"
                }
              }), m.jsxs("div", {
                className: "takeover-text",
                children: [m.jsxs("p", {
                  style: {
                    color: "#ff2a55",
                    fontWeight: "bold",
                    fontSize: 13,
                    margin: "0 0 4px 0"
                  },
                  children: [(D == null ? undefined : D.name) || "ta", " 转过身说："]
                }), m.jsxs("p", {
                  style: {
                    fontSize: 12,
                    fontStyle: "italic",
                    margin: 0
                  },
                  children: ["\"", (is == null ? undefined : is.opening) || "其实呀，你偷偷惦记我这件事，我早就发现啦。这么用心地想给我惊喜，那……换我来宠你一下，好不好？❤", "\""]
                })]
              })]
            }), m.jsxs("div", {
              className: "punishment-panel",
              children: [m.jsxs("div", {
                style: {
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: "bold",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 4,
                  fontFamily: "monospace"
                },
                children: [m.jsx(Z, {
                  size: 14,
                  color: "#ff2a55"
                }), " 甜蜜反转 · 换 ta 来宠你"]
              }), m.jsxs("div", {
                className: "punish-option-card " + (oa === "intercept" ? "selected" : ""),
                onClick: () => {
                  wi(30);
                  da("intercept");
                },
                children: [m.jsx("div", {
                  className: "punish-option-icon",
                  children: m.jsx(f, {
                    size: 16
                  })
                }), m.jsxs("div", {
                  style: {
                    flex: 1
                  },
                  children: [m.jsx("div", {
                    style: {
                      fontSize: 13,
                      fontWeight: "bold",
                      color: "#fff"
                    },
                    children: "1. 黏人小约定"
                  }), m.jsxs("div", {
                    style: {
                      fontSize: 11,
                      color: "#888"
                    },
                    children: [(is == null ? undefined : is.pactHint) || "从今往后你说话都得带上撒娇小尾巴", " ", e && "⭐"]
                  })]
                })]
              }), m.jsxs("div", {
                className: "punish-option-card " + (oa === "signature" ? "selected" : ""),
                onClick: () => {
                  wi(30);
                  da("signature");
                },
                children: [m.jsx("div", {
                  className: "punish-option-icon",
                  children: m.jsx(ce, {
                    size: 16
                  })
                }), m.jsxs("div", {
                  style: {
                    flex: 1
                  },
                  children: [m.jsx("div", {
                    style: {
                      fontSize: 13,
                      fontWeight: "bold",
                      color: "#fff"
                    },
                    children: "2. 手写一封小情书"
                  }), m.jsxs("div", {
                    style: {
                      fontSize: 11,
                      color: "#888"
                    },
                    children: ["在手写板上签下你的小心意 ", s && "⭐"]
                  })]
                })]
              }), m.jsxs("div", {
                className: "punish-option-card " + (oa === "play" ? "selected" : ""),
                onClick: () => {
                  wi(30);
                  da("play");
                },
                children: [m.jsx("div", {
                  className: "punish-option-icon",
                  children: m.jsx(K, {
                    size: 16
                  })
                }), m.jsxs("div", {
                  style: {
                    flex: 1
                  },
                  children: [m.jsx("div", {
                    style: {
                      fontSize: 13,
                      fontWeight: "bold",
                      color: "#fff"
                    },
                    children: "3. 任 ta 摆布"
                  }), m.jsxs("div", {
                    style: {
                      fontSize: 11,
                      color: "#888"
                    },
                    children: ["被 ta 抓住绑了起来…接下来就看 ta 心情了 ", Ye.length > 0 && "⭐"]
                  })]
                })]
              })]
            }), m.jsxs("div", {
              style: {
                width: "100%",
                background: "rgba(5,5,8,0.7)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 12,
                padding: 12,
                marginTop: 10
              },
              children: [oa === "intercept" && m.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  textAlign: "left"
                },
                children: [m.jsx("div", {
                  style: {
                    color: "#00ffcc",
                    fontSize: 12,
                    fontWeight: "bold",
                    fontFamily: "monospace"
                  },
                  children: ">>>> 和 ta 拉钩约定中..."
                }), m.jsx("div", {
                  style: {
                    fontSize: 12,
                    color: "#cbd5e1",
                    lineHeight: 1.4
                  },
                  children: (is == null ? undefined : is.pact) || "ta 跟你定下一个甜甜的小约定：从今往后，你说话都要带上一个撒娇的小尾巴 ❤"
                }), m.jsx("button", {
                  className: "hud-btn",
                  style: {
                    alignSelf: "flex-start",
                    background: "rgba(0,255,204,0.1)",
                    borderColor: "#00ffcc",
                    color: "#00ffcc",
                    fontSize: 11,
                    padding: "4px 10px",
                    marginTop: 4
                  },
                  onClick: () => {
                    wi([50, 50]);
                    Si("拉钩成功！约定生效啦～", "success");
                    ma(e => e.includes("intercept") ? e : [...e, "intercept"]);
                  },
                  children: "答应这个约定"
                })]
              }), oa === "signature" && m.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  textAlign: "left"
                },
                children: [m.jsx("div", {
                  style: {
                    color: "#ff2a55",
                    fontSize: 12,
                    fontWeight: "bold",
                    fontFamily: "monospace"
                  },
                  children: ">>>> 在小卡片上写下你的心意"
                }), m.jsxs("div", {
                  style: {
                    fontSize: 11,
                    color: "#888",
                    fontStyle: "italic"
                  },
                  children: ["“", (is == null ? undefined : is.letter) || `${(D == null ? undefined : D.name) || "ta"}，喜欢你这件事，以后也想一直好好藏在心里 ❤`, "”"]
                }), m.jsxs("div", {
                  className: "signature-box",
                  children: [m.jsx("canvas", {
                    ref: Na,
                    className: "signature-canvas"
                  }), m.jsxs("div", {
                    className: "signature-toolbar",
                    children: [m.jsx("button", {
                      className: "canvas-btn",
                      style: {
                        color: "#aaa"
                      },
                      onClick: () => {
                        const e = Na.current;
                        if (e) {
                          e.getContext("2d").clearRect(0, 0, e.width, e.height);
                          ba(null);
                          wi(30);
                        }
                      },
                      children: "重写"
                    }), m.jsx("button", {
                      className: "canvas-btn",
                      style: {
                        color: "#00ffcc"
                      },
                      onClick: () => {
                        if (ja) {
                          wi([50, 100]);
                          Si("小情书收好啦，甜到心里～", "success");
                          ma(e => e.includes("signature") ? e : [...e, "signature"]);
                        } else {
                          Si("先在屏幕上写下你的小心意吧～", "error");
                        }
                      },
                      children: "收好这封情书"
                    })]
                  })]
                })]
              }), oa === "play" && (() => {
                var e;
                var s;
                const a = Ye[Xe] || null;
                if (es === "target") {
                  if (D != null) {
                    D.name;
                  }
                } else if (R != null) {
                  R.name;
                }
                const i = Xe >= Ye.length - 1;
                return m.jsxs("div", {
                  className: "play-panel",
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    textAlign: "left"
                  },
                  children: [m.jsxs("div", {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    },
                    children: [m.jsx("span", {
                      style: {
                        color: "#ff5577",
                        fontSize: 12,
                        fontWeight: "bold",
                        fontFamily: "monospace"
                      },
                      children: "被 ta 抓住绑了起来…"
                    }), m.jsxs("button", {
                      className: "play-pov-btn",
                      onClick: bi,
                      children: ["视角：", es === "target" ? "动手的 ta" : "被绑的我", " ⇄"]
                    })]
                  }), Ye.length ? m.jsxs(m.Fragment, {
                    children: [m.jsxs("div", {
                      className: "play-stage " + (os ? "play-stage--hit" : ""),
                      children: [ls ? m.jsx("img", {
                        src: ls,
                        alt: "",
                        className: "play-portrait"
                      }) : m.jsx("div", {
                        className: "play-portrait play-portrait--ph",
                        children: ((e = R == null ? undefined : R.name) == null ? undefined : e.charAt(0)) || "？"
                      }), os && m.jsx("span", {
                        className: `play-fx play-fx--${os.fx}`
                      }, os.key), ((a == null ? undefined : a.tool) || (a == null ? undefined : a.zone)) && m.jsxs("div", {
                        className: "play-stage-tag",
                        children: [Ae[a == null ? undefined : a.tool] || (a == null ? undefined : a.tool) || "手", (a == null ? undefined : a.zone) ? ` · ${a.zone}` : ""]
                      })]
                    }), m.jsx("div", {
                      className: "play-toolbar",
                      children: ze.map(e => m.jsx("div", {
                        className: "play-tool " + ((a == null ? undefined : a.tool) === e ? "play-tool--on" : ""),
                        children: Ae[e]
                      }, e))
                    }), m.jsx("p", {
                      className: "play-narrative",
                      children: a == null ? undefined : a.narrative
                    }), !!((s = a == null ? undefined : a.observations) == null ? undefined : s.length) && m.jsx("div", {
                      className: "play-obs",
                      children: a.observations.map((e, s) => m.jsx("span", {
                        className: "play-obs-chip",
                        children: e.focus
                      }, s))
                    }), Ke ? m.jsx("div", {
                      className: "play-genning",
                      children: "……ta 的下一下正在发生"
                    }) : m.jsx("div", {
                      className: "play-controls",
                      children: i ? m.jsxs(m.Fragment, {
                        children: [((a == null ? undefined : a.choices) || []).map(e => m.jsxs("button", {
                          className: `play-btn play-btn--choice risk-${e.risk}`,
                          onClick: () => ji(e),
                          children: ["✨ ", e.label]
                        }, e.id)), m.jsx("button", {
                          className: "play-btn play-btn--continue",
                          onClick: () => ji(null),
                          children: "✨ 任 ta 继续 →"
                        })]
                      }) : m.jsx("button", {
                        className: "play-btn play-btn--continue",
                        onClick: () => ji(null),
                        children: "下一下 →"
                      })
                    })]
                  }) : m.jsx("button", {
                    className: "play-start-btn",
                    onClick: () => ji(null),
                    disabled: Ke,
                    children: Ke ? "……ta 凑近了" : "✨ 任由 ta 摆布 →"
                  })]
                });
              })()]
            }), ha.length > 0 && m.jsxs("div", {
              style: {
                width: "100%",
                marginTop: 12,
                borderTop: "1px solid rgba(255,255,255,0.08)",
                paddingTop: 10
              },
              children: [m.jsxs("div", {
                style: {
                  color: "#888",
                  fontSize: 11,
                  fontFamily: "monospace",
                  textAlign: "center",
                  marginBottom: 6
                },
                children: ["--- 甜蜜回忆图鉴 (", ha.length, "/3) ---"]
              }), m.jsxs("div", {
                style: {
                  display: "flex",
                  gap: 10,
                  justifyContent: "center"
                },
                children: [m.jsx("div", {
                  style: {
                    fontSize: 10,
                    padding: "2px 8px",
                    borderRadius: 10,
                    background: e ? "rgba(0,255,204,0.15)" : "rgba(255,255,255,0.05)",
                    color: e ? "#00ffcc" : "#555"
                  },
                  children: "黏人小约定"
                }), m.jsx("div", {
                  style: {
                    fontSize: 10,
                    padding: "2px 8px",
                    borderRadius: 10,
                    background: s ? "rgba(255,42,85,0.15)" : "rgba(255,255,255,0.05)",
                    color: s ? "#ff2a55" : "#555"
                  },
                  children: "手写小情书"
                }), m.jsx("div", {
                  style: {
                    fontSize: 10,
                    padding: "2px 8px",
                    borderRadius: 10,
                    background: a ? "rgba(255,85,119,0.15)" : "rgba(255,255,255,0.05)",
                    color: a ? "#ff5577" : "#555"
                  },
                  children: "任 ta 摆布"
                })]
              })]
            }), m.jsx("button", {
              className: "hud-btn",
              style: {
                marginTop: 24,
                borderColor: "#888",
                color: "#ccc",
                background: "rgba(255,255,255,0.04)",
                fontSize: 12,
                width: "100%",
                justifyContent: "center"
              },
              onClick: () => {
                wi(100);
                aa(false);
                X(0);
                Fs(null);
                ga(false);
                va(false);
                ua(75);
                ba(null);
                Os([]);
                qs({});
                Re(Ee);
                Oe(Me);
                qe({});
                Vs(new Set());
                Ys(null);
                Xs([]);
                Ve(null);
                He.current = new Set();
                Je([]);
                Ze(0);
                ss("stalker");
                as.current = new Set();
                ts(null);
                ns.current = false;
                rs("");
                cs.current = false;
                ds(null);
                be("idle");
                ve("bedroom");
                Ms(false);
                M("setup");
              },
              children: "重新开始 · 计划下一次惊喜"
            })]
          })]
        });
      })()
    });
  }
  const Ri = [].includes(fe);
  return m.jsxs("div", {
    id: "chikan-sim-screen",
    className: `chikan-sim-wrapper ${Y ? "char-view" : ""} loc-${fe} ${ke ? "device-up" : ""} ${Ri ? "scene-bright" : ""}`,
    style: {
      "--alert-intensity": J / 100,
      "--heart-rate-duration": J >= 80 ? 1.5 - (J - 80) * 0.05 + "s" : "0s"
    },
    children: [m.jsx("div", {
      className: "shutter-flash-overlay " + (pe ? "active" : "")
    }), m.jsx("div", {
      className: "cyber-vignette"
    }), J >= 80 && m.jsx("div", {
      className: "pulse-heartbeat-heavy"
    }), xe && m.jsxs("div", {
      className: `cyber-toast ${xe.type}`,
      children: [xe.type === "error" ? m.jsx(K, {
        size: 16
      }) : m.jsx(Z, {
        size: 16
      }), xe.text]
    }), m.jsx("div", {
      className: "pov-scene",
      style: (() => {
        const e = $i && (Ge[$i.id] || Ge[$i.sceneType]) || (Sa == null ? undefined : Sa.homeScene);
        if (e) {
          return {
            backgroundImage: `url(${e})`
          };
        } else {
          return undefined;
        }
      })()
    }), m.jsx("div", {
      className: "pov-vignette"
    }), m.jsx("div", {
      className: "pov-alert-flash " + (J >= 80 ? "active" : "")
    }), !Y && m.jsxs(m.Fragment, {
      children: [m.jsxs("div", {
        className: "stealth-hud-top",
        style: {
          pointerEvents: "auto",
          display: "flex",
          gap: 10
        },
        children: [Ds !== null && m.jsxs("div", {
          className: "timer-pill " + (Ds <= 5 ? "urgent" : ""),
          children: [m.jsx(Z, {
            size: 18
          }), " 快躲好: 00:", Ds.toString().padStart(2, "0")]
        }), (Es || J >= 50) && m.jsxs("button", {
          className: "hud-btn " + (Es ? "covered-active" : ""),
          style: {
            background: Es ? "rgba(0,255,204,0.2)" : "rgba(255,42,85,0.1)",
            borderColor: Es ? "#00ffcc" : "#ff2a55",
            color: Es ? "#00ffcc" : "#ff2a55",
            boxShadow: Es ? "0 0 10px rgba(0,255,204,0.3)" : "none",
            animation: Es ? "breathing 2s infinite alternate" : "none"
          },
          onClick: e => {
            e.stopPropagation();
            wi(50);
            Ms(!Es);
            Si(Es ? "从藏身处出来啦，小心别被 ta 发现！" : "悄悄躲好，心跳慢慢平复下来～", "info");
            Ws(Es ? "从藏身处出来了" : "悄悄躲到一旁");
          },
          children: [m.jsx(se, {
            size: 16
          }), " ", Es ? "躲好了 (悄悄观察)" : "有点显眼 (点击躲一下)"]
        })]
      }), !ke && m.jsxs(m.Fragment, {
        children: [fe === "bedroom" && m.jsxs("div", {
          className: "stealth-hotspots",
          children: [m.jsxs("div", {
            className: `hotspot ${Es ? "covered-lock" : ""} ${Bs.includes("他的外套") ? "looted" : ""}`,
            style: {
              top: "25%",
              left: "28%"
            },
            onClick: e => {
              e.stopPropagation();
              _i("他的外套", 25);
            },
            children: [m.jsx("div", {
              className: "hotspot-pulse"
            }), m.jsx("span", {
              children: "看看衣架"
            })]
          }), m.jsxs("div", {
            className: `hotspot ${Es ? "covered-lock" : ""} ${Bs.includes("手写小本子") ? "looted" : ""}`,
            style: {
              top: "25%",
              left: "60%"
            },
            onClick: e => {
              e.stopPropagation();
              _i("手写小本子", 20);
            },
            children: [m.jsx("div", {
              className: "hotspot-pulse"
            }), m.jsx("span", {
              children: "看看书桌"
            })]
          }), m.jsxs("div", {
            className: `hotspot ${Es ? "covered-lock" : ""} ${Bs.includes("他用过的杯子") ? "looted" : ""}`,
            style: {
              top: "70%",
              left: "44%"
            },
            onClick: e => {
              e.stopPropagation();
              _i("他用过的杯子", 15);
            },
            children: [m.jsx("div", {
              className: "hotspot-pulse"
            }), m.jsx("span", {
              children: "看看桌面"
            })]
          })]
        }), fe !== "bedroom" && m.jsxs("div", {
          className: "ar-hotspot ar-hotspot--voice",
          style: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)"
          },
          onClick: () => Ys({
            focus: `${(R == null ? undefined : R.name) || "我"} 的心声${(Pi == null ? undefined : Pi.time) ? ` · ${Pi.time}` : ""}`,
            detail: Es ? "你屏住呼吸悄悄躲在一旁，远远地看着 ta。心跳怦怦加速，但 ta 似乎完全没察觉到你的小心思..." : (Pi == null ? undefined : Pi.narrative) || ($i == null ? undefined : $i.desc) || (hs && !$i ? "正在悄悄锁定 ta 此刻的位置……" : "ta 就在不远的地方，安静地待着。你停在一个绝对察觉不到的距离，目光忍不住一直追随着 ta..."),
            risk: "low",
            _voice: true
          }),
          children: [m.jsx("div", {
            className: "ar-icon-ring",
            style: {
              color: "#ff8fb0",
              borderColor: "rgba(255,143,176,0.7)",
              background: "rgba(255,143,176,0.12)"
            },
            children: "💭"
          }), m.jsxs("span", {
            className: "ar-label",
            children: [(R == null ? undefined : R.name) || "我", " 的心声"]
          })]
        })]
      })]
    }), Y && m.jsxs(m.Fragment, {
      children: [J >= 80 && m.jsx("div", {
        className: "stealth-hud-top",
        style: {
          pointerEvents: "none"
        },
        children: m.jsxs("div", {
          className: "mood-pill",
          children: [m.jsx(Z, {
            size: 14
          }), " 莫名的不安感"]
        })
      }), !ke && m.jsxs(m.Fragment, {
        children: [m.jsxs("div", {
          className: "daily-status-card",
          children: [m.jsxs("div", {
            className: "daily-status-label",
            children: [m.jsx(Z, {
              size: 13
            }), " ta 的当下"]
          }), m.jsx("div", {
            className: "daily-status-now",
            children: ((a = zi.find(e => e.active)) == null ? undefined : a.desc) || "ta 正安然地度过这一天。"
          }), m.jsx("div", {
            className: "daily-status-hint",
            children: "举起设备查看 ta 的实时行程与日常动态"
          })]
        }), J >= 80 && m.jsxs("div", {
          className: "lookback-cluster",
          children: [m.jsxs("button", {
            className: "hud-btn lookback-btn",
            onClick: e => {
              e.stopPropagation();
              wi([80, 80]);
              if (Es) {
                X(0);
                Si("ta 回头看了一眼，却没发现你……松了口气，惊喜还能再藏一会儿。", "info");
                Ws("ta 回头张望了一下，随即又放松下来");
              } else {
                Ci(`一种暖暖的、被人惦记着的感觉袭来。${(D == null ? undefined : D.name) || "ta"} 下意识地回过头——目光正好和悄悄惦记 ta 的【${(R == null ? undefined : R.name) || "对方"}】撞上了。`);
              }
            },
            children: [m.jsx(I, {
              size: 16
            }), " 下意识回头看看"]
          }), m.jsx("span", {
            className: "lookback-hint",
            children: "ta 隐隐觉得有道视线……"
          })]
        }), m.jsxs("div", {
          className: "anti-intrusion-console",
          children: [m.jsxs("div", {
            style: {
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.5px",
              color: "#ffb3c1",
              borderBottom: "1px solid rgba(255,179,193,0.18)",
              paddingBottom: 6,
              marginBottom: 8,
              display: "flex",
              gap: 6,
              alignItems: "center"
            },
            children: [m.jsx(Z, {
              size: 12
            }), " 今日动态"]
          }), m.jsx("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: 5,
              maxHeight: 88,
              overflowY: "auto"
            },
            children: Rs.length ? Rs.map((e, s) => m.jsx("div", {
              className: "intrusion-log-line",
              children: e
            }, s)) : m.jsx("div", {
              className: "intrusion-log-line",
              style: {
                opacity: 0.5
              },
              children: "生成今日行踪后，这里会浮现 ta 一天的足迹…"
            })
          })]
        }), m.jsxs("div", {
          className: "narrative-overlay-bubble target-pov-bubble",
          children: [m.jsxs("div", {
            className: "narrative-speaker-hud",
            children: [m.jsx("div", {
              className: "avatar-mini",
              style: {
                backgroundImage: `url(${D == null ? undefined : D.avatar})`
              }
            }), m.jsxs("span", {
              children: [m.jsx("span", {
                className: "hud-tag",
                children: "此刻心境"
              }), m.jsx("span", {
                className: "hud-name",
                children: (D == null ? undefined : D.name) || "ta"
              })]
            })]
          }), m.jsx("p", {
            className: "narrative-text-hud",
            children: J >= 80 ? "“……今天总觉得哪里怪怪的，后颈有点发凉。算了，大概是没睡好吧，先把事情忙完。”" : (() => {
              var e;
              const s = ((e = Te($i)) == null ? undefined : e.charNarrative) || ($i == null ? undefined : $i.charNarrative) || "";
              if (s) {
                return `“${s}”`;
              } else {
                return "“今天过得很平常呢。阳光正好，手边的事也顺利，心情松弛得很……完全没注意到，有谁正悄悄看着自己。”";
              }
            })()
          })]
        })]
      })]
    }), !Y && !ke && (fe === "bedroom" || je !== "approached") && Bs.length > 0 && m.jsxs("div", {
      className: "inventory-widget",
      children: [m.jsxs("div", {
        className: "hud-btn",
        onClick: () => ea(!Qs),
        children: [m.jsx(Q, {
          size: 16
        }), " 纪念盒 (", Bs.length, ")"]
      }), Qs && m.jsx("div", {
        className: "inventory-dropdown",
        children: Bs.map((e, s) => m.jsx("div", {
          className: "inventory-item",
          style: {
            cursor: "pointer"
          },
          onClick: () => {
            wi(30);
            ca(e);
          },
          children: e
        }, s))
      })]
    }), m.jsx(We, {
      selectedLootItem: ra,
      setSelectedLootItem: ca,
      dynamicLootDetails: Gs
    }), m.jsxs("div", {
      className: "safe-top-bar",
      children: [m.jsxs("div", {
        className: "hud-btn " + (Ds !== null ? "evacuate-btn" : ""),
        style: Ds !== null ? {
          borderColor: "#ff2a55",
          color: "#ff2a55",
          background: "rgba(255,42,85,0.1)",
          animation: "pulse-ring 0.5s infinite"
        } : {},
        onClick: () => {
          j("home-screen");
          M("setup");
          Fs(null);
          X(0);
        },
        children: [m.jsx(C, {
          size: 16
        }), " ", Ds !== null ? "快悄悄离开" : "返回"]
      }), m.jsxs("div", {
        className: "hud-btn flip-btn",
        style: {
          borderColor: Y ? "rgba(255, 42, 85, 0.5)" : "rgba(0, 255, 204, 0.3)"
        },
        onClick: () => {
          me(true);
          setTimeout(() => {
            H(e => e === "user" ? "char" : "user");
            ye("home");
            we(false);
          }, 300);
          setTimeout(() => {
            me(false);
          }, 600);
        },
        children: [m.jsx(I, {
          size: 16,
          className: de ? "spin" : ""
        }), " 切换至 ", Y ? (R == null ? undefined : R.name) || "对方" : (D == null ? undefined : D.name) || "对方", " 视角"]
      })]
    }), !Y && !ke && m.jsx("div", {
      className: "narrative-overlay narrative-overlay--hud-only",
      children: m.jsxs("div", {
        className: "narrative-alertness",
        children: [m.jsxs("span", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 4,
            color: J >= 80 ? "#ff2a55" : J >= 50 ? "#ffcc00" : "#00ffcc"
          },
          children: [m.jsx(Z, {
            size: 12
          }), " ta 的察觉度 ", J, "%"]
        }), m.jsx("div", {
          className: "narrative-bar-bg",
          children: m.jsx("div", {
            className: "narrative-bar-fill",
            style: {
              width: `${J}%`,
              color: J >= 80 ? "#ff2a55" : J >= 50 ? "#ffcc00" : "#00ffcc",
              background: `linear-gradient(to right, ${J >= 80 ? "#ff2a55" : J >= 50 ? "#ffcc00" : "#00ffcc"}, ${J >= 80 ? "#ff6b8a" : J >= 50 ? "#ffe27a" : "#7affe6"})`
            }
          })
        })]
      })
    }), !ke && !Es && m.jsx("div", {
      className: "physical-hotspots",
      children: Y ? null : fe !== "bedroom" ? m.jsx(m.Fragment, {
        children: ((Pi == null ? undefined : Pi.observations) || []).map((e, s) => {
          const a = `${$i.id}:${Pi.id}:${s}`;
          const i = Us.has(a);
          const t = _e[s % _e.length];
          const n = e.risk === "high" ? "#ff7a9c" : e.risk === "low" ? "#7affe6" : "#ffd479";
          return m.jsxs("div", {
            className: "ar-hotspot " + (i ? "ar-hotspot--seen" : ""),
            style: {
              top: t.top,
              left: t.left,
              transform: t.tx || undefined
            },
            onClick: () => ((e, s) => {
              if (Es) {
                Si("躲着呢，先出来才好好看 ta～", "info");
                return;
              }
              wi(40);
              Ys(e);
              Vs(e => {
                const a = new Set(e);
                a.add(s);
                return a;
              });
              const a = (e == null ? undefined : e.risk) === "high" ? 22 : (e == null ? undefined : e.risk) === "low" ? 5 : 12;
              X(e => Math.min(e + a, 100));
              if (je === "arrived") {
                be("observing");
              }
            })(e, a),
            children: [m.jsx("div", {
              className: "ar-icon-ring",
              style: {
                color: n,
                borderColor: n
              },
              children: i ? m.jsx(z, {
                size: 18
              }) : m.jsx(U, {
                size: 18
              })
            }), m.jsx("span", {
              className: "ar-label",
              children: e.focus
            })]
          }, a);
        })
      }) : null
    }), !Y && !ke && fe !== "bedroom" && ((i = Pi == null ? undefined : Pi.companion) == null ? undefined : i.name) && (() => {
      const e = Pi.companion;
      const s = b.find(s => String(s.name) === String(e.name));
      const a = s && (s.image || s.avatar || s.avatarUrl) || "";
      return m.jsxs("div", {
        className: "scene-companion",
        children: [m.jsx("div", {
          className: "scene-companion-avatar",
          style: a ? {
            backgroundImage: `url(${a})`
          } : {},
          children: a ? "" : (e.name || "?").charAt(0)
        }), m.jsxs("div", {
          className: "scene-companion-text",
          children: [m.jsxs("span", {
            className: "scene-companion-name",
            children: ["和 ", e.name, " 在一起", e.relation ? ` · ${e.relation}` : ""]
          }), e.interaction && m.jsx("span", {
            className: "scene-companion-act",
            children: e.interaction
          })]
        })]
      });
    })(), !Y && Hs && m.jsx("div", {
      className: "observe-focus-overlay",
      onClick: () => Ys(null),
      children: m.jsxs("div", {
        className: "observe-focus-card",
        onClick: e => e.stopPropagation(),
        children: [m.jsx("div", {
          className: "observe-focus-label",
          children: Hs.focus || "细看一眼"
        }), m.jsx("div", {
          className: "observe-focus-detail",
          children: Hs.detail
        }), m.jsx("button", {
          className: "observe-focus-close",
          onClick: () => Ys(null),
          children: $("csObserveEnough") || "看够了"
        })]
      })
    }), !Y && !ke && fe !== "bedroom" && !Es && $i && m.jsx("div", {
      className: "beat-bar",
      onClick: e => e.stopPropagation(),
      children: Zs ? m.jsx("div", {
        className: "beat-genning",
        children: "…ta 接下来几刻正在生成"
      }) : m.jsxs(m.Fragment, {
        children: [m.jsx("div", {
          className: "beat-actions-row",
          children: (((x = Pi == null ? undefined : Pi.actions) == null ? undefined : x.length) ? Pi.actions : [{
            label: fe === "cafe" ? "收杯子" : "收纪念",
            kind: "souvenir"
          }, {
            label: "拍侧影",
            kind: "photo"
          }, {
            label: "靠近",
            kind: "approach"
          }]).map((e, s) => m.jsx("button", {
            className: "beat-act-btn",
            onClick: () => ((e, s) => {
              wi(50);
              if (e === "search") {
                be("observing");
                X(e => Math.min(e + 5, 100));
              } else if (e === "sit_next") {
                wi([100, 50, 100, 50, 200]);
                X(e => Math.min(e + 35, 100));
                Si("你悄悄靠近了 ta……心跳怦怦，靠这么近，可别被发现了。", "info");
              } else if (e === "flee") {
                ve("home");
                be("idle");
                X(e => Math.max(e - 20, 0));
                Si("悄悄离开了，今天的小心意先收着。", "info");
                const e = {
                  id: Date.now(),
                  time: Ai(),
                  location: "回家路上",
                  desc: "你没惊动 ta，安静地先离开了。今天的观察告一段落。",
                  active: true,
                  phoneCmd: "reset",
                  cmdText: "[重新开始] 计划下一次惊喜"
                };
                Re(s => [...s.map(e => ({
                  ...e,
                  active: false
                })), e]);
              } else if (e === "steal") {
                X(e => Math.min(e + 15, 100));
                Ii(s);
              } else if (e === "photo") {
                X(e => Math.min(e + 20, 100));
                oe(true);
                ue(true);
                wi(100);
                setTimeout(() => ue(false), 400);
                Ii(s || {
                  item: "ta 的侧影照"
                });
              } else {
                const e = Math.floor(Math.random() * 15) + 10;
                X(s => Math.min(s + e, 100));
              }
            })(Ie[e.kind] || "steal", e),
            children: e.label
          }, `a${s}`))
        }), Ti >= 12 ? m.jsxs(m.Fragment, {
          children: [m.jsx("div", {
            className: "beat-hint",
            children: "ta 像是要起身走了……"
          }), m.jsx("button", {
            className: "beat-btn beat-btn--follow",
            onClick: () => fi(null),
            children: "✨ 跟上去 · 看 ta 去哪儿 →"
          })]
        }) : m.jsxs(m.Fragment, {
          children: [Mi ? m.jsx("button", {
            className: "beat-btn beat-btn--continue",
            onClick: () => gi(null),
            children: "看下一刻 →"
          }) : m.jsxs(m.Fragment, {
            children: [!!((g = Pi == null ? undefined : Pi.choices) == null ? undefined : g.length) && Pi.choices.map(e => m.jsxs("button", {
              className: `beat-btn beat-btn--choice risk-${e.risk}`,
              onClick: () => gi(e),
              children: ["✨ ", e.label]
            }, e.id)), m.jsx("button", {
              className: "beat-btn beat-btn--continue",
              onClick: () => gi(null),
              children: "✨ 就这样静静继续看 →"
            })]
          }), Ei >= 1 && m.jsx("button", {
            className: "beat-btn beat-btn--follow",
            onClick: () => fi(null),
            children: "✨ 跟去下一站 →"
          })]
        })]
      })
    }), !Y && Ue && m.jsxs("div", {
      className: "cg-overlay",
      onClick: () => Ve(null),
      children: [m.jsx("img", {
        src: Ue,
        alt: "此刻",
        className: "cg-overlay-img"
      }), m.jsx("button", {
        className: "cg-overlay-close",
        onClick: e => {
          e.stopPropagation();
          Ve(null);
        },
        children: $("csObserveEnough") || "看够了"
      })]
    }), m.jsx("div", {
      className: `device-perspective-container ${ke ? "" : "device-lowered"} ${de ? "flipping" : ""}`,
      children: m.jsxs("div", {
        className: "pov-device",
        "data-skin": Xa,
        "data-form": Za.form || "phone",
        style: si,
        onClick: () => {
          if (!ke) {
            we(true);
          }
        },
        children: [m.jsx("div", {
          className: "device-hand-left"
        }), m.jsx("div", {
          className: "device-hand-right"
        }), Za.vars["--cps-notch"] === "1" && m.jsx("div", {
          className: "phone-notch"
        }), Za.form === "scroll" && m.jsxs(m.Fragment, {
          children: [m.jsx("div", {
            className: "form-scroll-rod top"
          }), m.jsx("div", {
            className: "form-scroll-rod bottom"
          })]
        }), Za.form === "grimoire" && m.jsxs(m.Fragment, {
          children: [m.jsx("div", {
            className: "form-book-spine"
          }), m.jsx("div", {
            className: "form-book-clasp"
          })]
        }), Za.form === "hologram" && m.jsxs(m.Fragment, {
          children: [m.jsx("div", {
            className: "form-holo-glow"
          }), m.jsx("div", {
            className: "form-holo-corner tl"
          }), m.jsx("div", {
            className: "form-holo-corner tr"
          }), m.jsx("div", {
            className: "form-holo-corner bl"
          }), m.jsx("div", {
            className: "form-holo-corner br"
          })]
        }), m.jsxs("div", {
          className: "device-screen",
          children: [m.jsxs("div", {
            className: "phone-status-bar",
            "data-skin": Xa,
            children: [m.jsxs("span", {
              onClick: e => {
                e.stopPropagation();
                we(!ke);
              },
              style: {
                display: "flex",
                alignItems: "center",
                gap: 4,
                cursor: "pointer"
              },
              children: [ke ? m.jsx(ae, {
                size: 14
              }) : m.jsx(ie, {
                size: 14
              }), ke ? "放下设备" : "举起设备"]
            }), m.jsxs("div", {
              style: {
                display: "flex",
                gap: "8px",
                alignItems: "center"
              },
              children: [Za.statusLeft.map((e, s) => m.jsx("span", {
                children: e
              }, s)), m.jsx("span", {
                children: Za.statusRight
              })]
            })]
          }), Ne === "home" && !Y && m.jsx("div", {
            className: "phone-home",
            "data-skin": Xa,
            style: ai,
            children: m.jsxs("div", {
              className: "app-grid",
              children: [m.jsxs("div", {
                className: "app-icon-wrap",
                onClick: e => {
                  e.stopPropagation();
                  ye("radar");
                  we(true);
                },
                children: [m.jsx("div", {
                  className: "app-icon radar",
                  children: m.jsx(A, {
                    size: 36
                  })
                }), m.jsx("span", {
                  className: "app-label",
                  children: "ta 的行程"
                })]
              }), m.jsxs("div", {
                className: "app-icon-wrap",
                onClick: e => {
                  e.stopPropagation();
                  ye("mirror");
                  we(true);
                },
                children: [m.jsx("div", {
                  className: "app-icon",
                  style: {
                    background: "linear-gradient(135deg, #111, #333)"
                  },
                  children: m.jsx(te, {
                    size: 32,
                    color: "#00ffcc"
                  })
                }), m.jsx("span", {
                  className: "app-label",
                  children: "翻翻手机"
                })]
              }), m.jsxs("div", {
                className: "app-icon-wrap",
                onClick: e => {
                  e.stopPropagation();
                  ye("heartbeat");
                  we(true);
                },
                children: [m.jsx("div", {
                  className: "app-icon",
                  style: {
                    background: "linear-gradient(135deg, #ff5e7e, #ff8fb1)"
                  },
                  children: m.jsx(Z, {
                    size: 30,
                    color: "#fff"
                  })
                }), m.jsx("span", {
                  className: "app-label",
                  children: "心动监测"
                })]
              }), m.jsxs("div", {
                className: "app-icon-wrap",
                onClick: e => {
                  e.stopPropagation();
                  wi(40);
                  Ia(true);
                },
                children: [m.jsx("div", {
                  className: "app-icon",
                  style: {
                    background: "linear-gradient(135deg, #a18cd1, #fbc2eb)"
                  },
                  children: m.jsx(_, {
                    size: 30
                  })
                }), m.jsx("span", {
                  className: "app-label",
                  children: "外观"
                })]
              })]
            })
          }), Ne === "home" && Y && m.jsx(Se, {
            userId: Ga,
            userName: qa,
            userAvatar: Ua,
            charId: Fa,
            charName: Ba,
            charAvatar: Oa,
            ownerType: $a ? "user" : "char",
            avatarByName: Va,
            aiTheme: Qa,
            aiPhoneContent: (Sa == null ? undefined : Sa.aiPhoneContent) || null,
            manualWallpaper: !!(Sa == null ? undefined : Sa.manualWallpaper),
            skinStyle: ei,
            wallpaperStyle: (Sa == null ? undefined : Sa.wallpaper) ? {
              backgroundImage: `url(${Sa.wallpaper})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            } : {
              background: he(ei).wallpaper
            },
            viewerIsOwner: true,
            ownerAutoUnlocked: ni,
            onOwnerAutoUnlocked: () => li(true),
            onClose: () => we(false),
            onOpenSkin: () => {
              wi(40);
              Ia(true);
            },
            onRegenContent: hi,
            regenContent: ri
          }), (Ne === "mirror" || Y && Ne === "ownphone") && m.jsx(Se, {
            userId: Ga,
            userName: qa,
            userAvatar: Ua,
            charId: Fa,
            charName: Ba,
            charAvatar: Oa,
            ownerType: $a ? "user" : "char",
            avatarByName: Va,
            aiTheme: Qa,
            aiPhoneContent: (Sa == null ? undefined : Sa.aiPhoneContent) || null,
            manualWallpaper: !!(Sa == null ? undefined : Sa.manualWallpaper),
            skinStyle: ei,
            wallpaperStyle: (Sa == null ? undefined : Sa.wallpaper) ? {
              backgroundImage: `url(${Sa.wallpaper})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            } : {
              background: he(Sa == null ? undefined : Sa.style).wallpaper
            },
            viewerIsOwner: Y,
            ownerAutoUnlocked: ni,
            onOwnerAutoUnlocked: () => li(true),
            onClose: () => ye("home"),
            onRegenContent: hi,
            regenContent: ri,
            onAutoPeek: Y ? undefined : async () => {
              var e;
              if (!((e = Sa == null ? undefined : Sa.aiPhoneContent) == null ? undefined : e.generated)) {
                Si("请先「刷新内容」生成这台手机的内容，再自动查探", "info");
                return;
              }
              const {
                startPeekGen: s
              } = await t(async () => {
                const {
                  startPeekGen: e
                } = await import("./main-BO9xa-SQ.js").then(e => e.cj);
                return {
                  startPeekGen: e
                };
              }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
              s(ui, {
                targetName: D == null ? undefined : D.name,
                isOnScreen: () => v === "chikan-sim-screen"
              });
            },
            onPeekStep: Y ? undefined : (e, s) => {
              X(e => Math.min(100, e + 6));
            },
            peekScriptToPlay: Y ? null : mi,
            onPeekConsumed: () => pi(null)
          }), Ne === "heartbeat" && m.jsxs("div", {
            className: "wechat-app heartbeat-app",
            onClick: e => {
              if (ke) {
                e.stopPropagation();
              }
            },
            children: [m.jsxs("div", {
              className: "app-header",
              style: {
                background: "rgba(26, 10, 16, 0.95)",
                color: "#ff8fb1",
                borderBottom: "1px solid rgba(255,143,177,0.2)"
              },
              children: [m.jsxs("div", {
                className: "app-back",
                onClick: () => ye("home"),
                children: [m.jsx(C, {
                  size: 22
                }), "返回"]
              }), m.jsx("div", {
                className: "app-title",
                children: "心动监测"
              })]
            }), m.jsxs("div", {
              className: "hb-body",
              children: [m.jsxs("div", {
                className: "hb-pulse-container",
                children: [m.jsx("div", {
                  className: "hb-pulse-ring-outer",
                  style: {
                    animationDuration: `${Math.max(0.5, 1.4 - J / 100)}s`
                  }
                }), m.jsxs("div", {
                  className: "hb-pulse-ring",
                  style: {
                    animationDuration: `${Math.max(0.5, 1.4 - J / 100)}s`
                  },
                  children: [m.jsx("div", {
                    className: "hb-pulse-heart-wrap",
                    children: m.jsx(L, {
                      size: 18,
                      fill: "#ff5e7e",
                      className: "hb-beating-heart",
                      style: {
                        animationDuration: `${Math.max(0.5, 1.4 - J / 100)}s`
                      }
                    })
                  }), m.jsx("div", {
                    className: "hb-bpm",
                    children: 60 + Math.round(J * 0.9)
                  }), m.jsx("div", {
                    className: "hb-bpm-label",
                    children: "BPM · 你的心跳"
                  })]
                })]
              }), m.jsx("div", {
                className: "hb-ecg-container",
                children: m.jsx("svg", {
                  className: "hb-ecg-svg",
                  viewBox: "0 0 300 60",
                  preserveAspectRatio: "none",
                  children: m.jsx("path", {
                    className: "hb-ecg-path",
                    d: "M 0 30 L 50 30 L 60 15 L 70 45 L 80 30 L 130 30 L 140 5 L 150 55 L 160 30 L 210 30 L 220 15 L 230 45 L 240 30 L 300 30",
                    fill: "none",
                    stroke: "#ff5e7e",
                    strokeWidth: "2.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  })
                })
              }), m.jsxs("div", {
                className: "hb-card",
                children: [m.jsxs("div", {
                  className: "hb-card-header-row",
                  children: [m.jsx(S, {
                    size: 15,
                    className: "hb-card-icon"
                  }), m.jsxs("span", {
                    className: "hb-card-label",
                    children: ["与 ", (D == null ? undefined : D.name) || "对方", " 的距离"]
                  })]
                }), m.jsx("span", {
                  className: "hb-card-value",
                  children: Es ? "咫尺之间 · 同处一室" : fe === "cafe" ? "两桌之隔 · 约 4 米" : "一墙之隔 · 很近"
                })]
              }), m.jsxs("div", {
                className: "hb-card",
                children: [m.jsxs("div", {
                  className: "hb-card-header-row",
                  children: [m.jsx(z, {
                    size: 15,
                    className: "hb-card-icon"
                  }), m.jsxs("span", {
                    className: "hb-card-label",
                    children: [(D == null ? undefined : D.name) || "对方", " 此刻"]
                  })]
                }), m.jsx("span", {
                  className: "hb-card-value",
                  children: J >= 80 ? "隐隐有所感觉 · 似乎要回头" : fe === "cafe" ? "独自小憩 · 神情松弛" : "专注独处 · 浑然不觉"
                })]
              }), m.jsxs("div", {
                className: "hb-narrative-bubble",
                children: [m.jsx(w, {
                  size: 16,
                  className: "hb-narrative-heart"
                }), m.jsx("div", {
                  className: "hb-hint",
                  children: J >= 80 ? "心跳过快了……小心，太靠近反而会惊动 ta。" : "一切静好。你看着 ta 毫无防备的侧影，心里软软的。"
                })]
              })]
            })]
          }), Ne === "char_notes" && m.jsxs("div", {
            className: "wechat-app",
            style: {
              background: "#fff",
              color: "#333"
            },
            onClick: e => {
              if (ke) {
                e.stopPropagation();
              }
            },
            children: [m.jsxs("div", {
              className: "app-header",
              style: {
                background: Y ? "#fbc2eb" : "#000",
                color: Y ? "#fff" : "#00ffcc",
                borderBottom: Y ? "none" : "1px solid #00ffcc"
              },
              children: [m.jsxs("div", {
                className: "app-back",
                onClick: () => ye(Y ? "home" : "mirror"),
                children: [m.jsx(C, {
                  size: 22
                }), "返回"]
              }), m.jsx("div", {
                className: "app-title",
                children: Y ? "日记本" : `${(D == null ? undefined : D.name) || "ta"}的日记本`
              })]
            }), m.jsxs("div", {
              style: {
                padding: 24,
                fontSize: "14px",
                lineHeight: 1.8
              },
              children: [m.jsx("h3", {
                style: {
                  marginTop: 0,
                  color: "#a18cd1"
                },
                children: "5月1日"
              }), m.jsx("p", {
                children: "今天在咖啡馆坐了一下午，阳光很好，心情也很好。"
              }), m.jsx("p", {
                children: "总觉得今天身边有种暖暖的感觉，说不上来，大概是天气太舒服了吧。"
              }), m.jsx("p", {
                style: {
                  color: "#a18cd1",
                  fontWeight: "bold",
                  marginTop: 20
                },
                children: "※ 要好好过好每一天呀 ※"
              })]
            })]
          }), Ne === "char_music" && m.jsxs("div", {
            className: "wechat-app",
            style: {
              background: "#111",
              color: "#fff"
            },
            onClick: e => {
              if (ke) {
                e.stopPropagation();
              }
            },
            children: [m.jsxs("div", {
              className: "app-header",
              style: {
                background: Y ? "#333" : "#000",
                color: Y ? "#fff" : "#00ffcc",
                borderBottom: Y ? "none" : "1px solid #00ffcc"
              },
              children: [m.jsxs("div", {
                className: "app-back",
                onClick: () => ye(Y ? "home" : "mirror"),
                children: [m.jsx(C, {
                  size: 22
                }), "返回"]
              }), m.jsx("div", {
                className: "app-title",
                children: Y ? "正在播放" : `${(D == null ? undefined : D.name) || "ta"}在听`
              })]
            }), m.jsxs("div", {
              style: {
                padding: 24,
                textAlign: "center",
                marginTop: 40
              },
              children: [m.jsx("div", {
                style: {
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #f6d365, #fda085)",
                  margin: "0 auto 20px",
                  animation: "spin 4s linear infinite"
                }
              }), m.jsx("h3", {
                style: {
                  margin: "0 0 8px 0"
                },
                children: "小幸运"
              }), m.jsx("p", {
                style: {
                  margin: 0,
                  color: "#888"
                },
                children: "田馥甄"
              })]
            })]
          }), Ne === "gallery" && m.jsxs("div", {
            className: "wechat-app",
            onClick: e => {
              if (ke) {
                e.stopPropagation();
              }
            },
            children: [m.jsxs("div", {
              className: "app-header",
              style: {
                background: "#000",
                color: "#fff",
                borderBottom: "1px solid #333"
              },
              children: [m.jsxs("div", {
                className: "app-back",
                onClick: () => ye(Y ? "home" : "mirror"),
                children: [m.jsx(C, {
                  size: 22
                }), "返回"]
              }), m.jsx("div", {
                className: "app-title",
                children: Y ? "相册" : `${(D == null ? undefined : D.name) || "ta"}的相册`
              })]
            }), m.jsx("div", {
              style: {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                background: "#111",
                color: "#fff",
                height: "100%"
              },
              children: xs ? m.jsx("div", {
                style: {
                  padding: 12,
                  overflowY: "auto",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  background: "#0a0a0c"
                },
                children: Ns === null ? m.jsxs(m.Fragment, {
                  children: [m.jsxs("div", {
                    style: {
                      fontSize: 11,
                      color: "#00ffcc",
                      marginBottom: 12,
                      fontFamily: "monospace",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      letterSpacing: "1px"
                    },
                    children: [m.jsx(Z, {
                      size: 12
                    }), " [ta 的纪念相册 · 4 张]"]
                  }), m.jsx("div", {
                    className: "gallery-grid",
                    style: {
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 12,
                      flex: 1
                    },
                    children: Le.map(e => m.jsxs("div", {
                      className: "gallery-item-wrap",
                      style: {
                        position: "relative",
                        borderRadius: 12,
                        overflow: "hidden",
                        border: "1px solid rgba(0,255,204,0.15)",
                        cursor: "pointer",
                        background: "#111"
                      },
                      onClick: () => {
                        wi(30);
                        ys(e.id);
                        bs(null);
                        if (e.isGlitch) {
                          X(e => Math.min(100, e + 25));
                          Ws("这张照片糊掉了，什么也看不清～");
                          Si("哎呀，这张拍虚了，看不清呢", "info");
                          wi([80, 80, 80]);
                        } else {
                          Ws(`翻看这张照片：《${e.title}》...`);
                        }
                      },
                      children: [m.jsx("img", {
                        src: e.url,
                        alt: e.title,
                        style: {
                          width: "100%",
                          height: 110,
                          objectFit: "cover",
                          filter: e.isGlitch ? "grayscale(0.8) contrast(1.8) brightness(0.6)" : "none"
                        }
                      }), m.jsxs("div", {
                        style: {
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          background: "rgba(0,0,0,0.85)",
                          padding: "4px 6px",
                          fontSize: 10,
                          textAlign: "center",
                          color: e.isGlitch ? "#ff2a55" : "#00ffcc",
                          fontFamily: "monospace",
                          borderTop: "1px solid rgba(0,255,204,0.15)",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden"
                        },
                        children: [e.title, " ", e.isGlitch && "⚠️"]
                      })]
                    }, e.id))
                  })]
                }) : m.jsxs("div", {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    color: "#fff",
                    fontSize: 13,
                    height: "100%",
                    overflowY: "auto"
                  },
                  className: "gallery-detail-panel",
                  children: [m.jsxs("div", {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    },
                    children: [m.jsx("button", {
                      className: "hud-btn",
                      style: {
                        background: "rgba(255,255,255,0.06)",
                        borderColor: "rgba(0,255,204,0.2)",
                        fontSize: 10,
                        padding: "6px 12px",
                        color: "#00ffcc"
                      },
                      onClick: () => {
                        wi(30);
                        ys(null);
                        bs(null);
                      },
                      children: "[返回网格]"
                    }), m.jsxs("div", {
                      style: {
                        display: "flex",
                        gap: 8
                      },
                      children: [m.jsx("button", {
                        className: "hud-btn",
                        style: {
                          background: "rgba(255,255,255,0.05)",
                          borderColor: "rgba(255,255,255,0.1)",
                          fontSize: 10,
                          padding: "4px 10px"
                        },
                        onClick: () => {
                          wi(30);
                          const e = (Ns - 1 + 4) % 4;
                          ys(e);
                          bs(null);
                          if (Le[e].isGlitch) {
                            X(e => Math.min(100, e + 25));
                            Ws("这张照片糊掉了，什么也看不清～");
                            Si("哎呀，这张拍虚了，看不清呢", "info");
                          }
                        },
                        children: "◀ 上一张"
                      }), m.jsx("button", {
                        className: "hud-btn",
                        style: {
                          background: "rgba(255,255,255,0.05)",
                          borderColor: "rgba(255,255,255,0.1)",
                          fontSize: 10,
                          padding: "4px 10px"
                        },
                        onClick: () => {
                          wi(30);
                          const e = (Ns + 1) % 4;
                          ys(e);
                          bs(null);
                          if (Le[e].isGlitch) {
                            X(e => Math.min(100, e + 25));
                            Ws("这张照片糊掉了，什么也看不清～");
                            Si("哎呀，这张拍虚了，看不清呢", "info");
                          }
                        },
                        children: "下一张 ▶"
                      })]
                    })]
                  }), m.jsx("div", {
                    style: {
                      width: "100%",
                      height: 180,
                      backgroundImage: `url(${ks.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: 12,
                      border: ks.isGlitch ? "2px solid #ff2a55" : "1px solid rgba(0,255,204,0.3)",
                      boxShadow: ks.isGlitch ? "0 0 15px rgba(255,42,85,0.4)" : "0 0 10px rgba(0,255,204,0.1)"
                    },
                    children: ks.isGlitch && m.jsx("div", {
                      className: "glitch-red-bg",
                      style: {
                        width: "100%",
                        height: "100%",
                        borderRadius: 10
                      }
                    })
                  }), m.jsxs("div", {
                    className: "exif-data-panel",
                    style: {
                      background: "rgba(10,10,15,0.85)",
                      border: "1px solid rgba(0,255,204,0.2)",
                      borderRadius: 12,
                      padding: 12,
                      fontFamily: "monospace"
                    },
                    children: [m.jsxs("div", {
                      style: {
                        color: ks.isGlitch ? "#ff2a55" : "#00ffcc",
                        fontSize: 12,
                        fontWeight: "bold",
                        borderBottom: "1px solid rgba(0,255,204,0.15)",
                        paddingBottom: 6,
                        marginBottom: 8,
                        display: "flex",
                        alignItems: "center",
                        gap: 6
                      },
                      children: [m.jsx(te, {
                        size: 14
                      }), " 照片小档案"]
                    }), m.jsxs("div", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                        fontSize: 11,
                        color: "#cbd5e1",
                        textAlign: "left"
                      },
                      children: [m.jsxs("div", {
                        children: [m.jsx("span", {
                          style: {
                            color: "#888"
                          },
                          children: "【拍摄设备】:"
                        }), " ", ks.exif.device]
                      }), m.jsxs("div", {
                        children: [m.jsx("span", {
                          style: {
                            color: "#888"
                          },
                          children: "【镜头规格】:"
                        }), " ", ks.exif.lens]
                      }), m.jsxs("div", {
                        children: [m.jsx("span", {
                          style: {
                            color: "#888"
                          },
                          children: "【拍摄时间】:"
                        }), " ", ks.exif.time]
                      }), m.jsxs("div", {
                        children: [m.jsx("span", {
                          style: {
                            color: "#888"
                          },
                          children: "【GPS 坐标】:"
                        }), " ", ks.exif.gps]
                      }), m.jsx("div", {
                        style: {
                          color: ks.isGlitch ? "#ff2a55" : "#00ffcc",
                          background: "rgba(255,255,255,0.03)",
                          padding: 4,
                          borderRadius: 4,
                          borderLeft: "2px solid",
                          borderColor: ks.isGlitch ? "#ff2a55" : "#00ffcc"
                        },
                        children: ks.exif.steganography
                      })]
                    })]
                  }), m.jsx("div", {
                    style: {
                      textAlign: "center",
                      marginTop: 4
                    },
                    children: js ? js === "decrypting" ? m.jsxs("div", {
                      style: {
                        color: "#00ffcc",
                        fontSize: 12,
                        fontFamily: "monospace",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 8,
                        padding: "10px 0"
                      },
                      children: [m.jsx(I, {
                        size: 14,
                        className: "spin"
                      }), " 回忆中…"]
                    }) : m.jsxs("div", {
                      className: "looted-item-card",
                      style: {
                        background: "rgba(0,255,204,0.08)",
                        border: "1px solid rgba(0,255,204,0.4)",
                        borderRadius: 10,
                        padding: 12,
                        textAlign: "left"
                      },
                      children: [m.jsxs("div", {
                        style: {
                          color: "#00ffcc",
                          fontWeight: "bold",
                          fontSize: 12,
                          marginBottom: 4,
                          fontFamily: "monospace"
                        },
                        children: ["📍 拍摄地点：", js]
                      }), m.jsxs("p", {
                        style: {
                          fontSize: 11,
                          color: "#e2e8f0",
                          margin: 0,
                          lineHeight: 1.5,
                          fontStyle: "italic"
                        },
                        children: ["\"", ks.exif.story, "\""]
                      })]
                    }) : m.jsx("button", {
                      className: "start-sim-btn ready",
                      style: {
                        padding: "10px 16px",
                        background: "rgba(0,255,204,0.15)",
                        border: "1px solid #00ffcc",
                        color: "#00ffcc",
                        fontSize: 12,
                        width: "100%",
                        borderRadius: 10,
                        cursor: "pointer",
                        boxShadow: "none"
                      },
                      onClick: () => {
                        wi([30, 50]);
                        Ws("看看这是在哪里拍的…");
                        bs("decrypting");
                        setTimeout(() => {
                          bs(ks.exif.address);
                          Ws("想起来了，这张是在哪儿拍的～");
                          wi(50);
                        }, 1200);
                      },
                      children: "看看这张拍于何处"
                    })
                  })]
                })
              }) : m.jsxs("div", {
                style: {
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px 20px",
                  overflowY: "auto"
                },
                children: [m.jsx(ne, {
                  size: 40,
                  color: "#ff2a55",
                  style: {
                    marginBottom: 10
                  }
                }), m.jsx("h3", {
                  style: {
                    margin: 0,
                    fontSize: 16
                  },
                  children: "相册上了锁"
                }), m.jsx("p", {
                  style: {
                    color: "#888",
                    fontSize: 12,
                    textAlign: "center",
                    margin: "6px 0 10px"
                  },
                  children: "如果你之前收到过 ta 的《手写小本子》，里面夹的小纸条就是提示哦。"
                }), m.jsxs("div", {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "240px",
                    gap: 10
                  },
                  children: [m.jsx("div", {
                    style: {
                      display: "flex",
                      gap: 8,
                      marginBottom: 4
                    },
                    children: [0, 1, 2, 3].map(e => m.jsx("div", {
                      style: {
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: na.length > e ? "#ff2a55" : "rgba(255,255,255,0.15)",
                        boxShadow: na.length > e ? "0 0 8px #ff2a55" : "none",
                        transition: "all 0.2s"
                      }
                    }, e))
                  }), m.jsxs("div", {
                    style: {
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: 8,
                      width: "100%"
                    },
                    children: [[1, 2, 3, 4, 5, 6, 7, 8, 9].map(e => m.jsx("button", {
                      onClick: s => {
                        s.stopPropagation();
                        wi(30);
                        if (na.length < 4) {
                          const s = na + e.toString();
                          la(s);
                          if (s === "1314") {
                            gs(true);
                            wi([50, 100, 50]);
                            Si("密码正确，相册已解锁！", "info");
                          } else if (s.length === 4) {
                            wi([100, 100]);
                            Si("密码错误，已自动清除", "error");
                            setTimeout(() => la(""), 400);
                          }
                        }
                      },
                      style: {
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: "bold",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0 auto"
                      },
                      children: e
                    }, e)), m.jsx("button", {
                      onClick: e => {
                        e.stopPropagation();
                        wi(30);
                        la("");
                      },
                      style: {
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: "rgba(255,42,85,0.1)",
                        border: "1px solid rgba(255,42,85,0.3)",
                        color: "#ff2a55",
                        fontSize: 11,
                        fontWeight: "bold",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0 auto"
                      },
                      children: "清除"
                    }), m.jsx("button", {
                      onClick: e => {
                        e.stopPropagation();
                        wi(30);
                        if (na.length < 4) {
                          const e = na + "0";
                          la(e);
                          if (e === "1314") {
                            gs(true);
                            wi([50, 100, 50]);
                            Si("密码正确，相册已解锁！", "info");
                          } else if (e.length === 4) {
                            wi([100, 100]);
                            Si("密码错误，已自动清除", "error");
                            setTimeout(() => la(""), 400);
                          }
                        }
                      },
                      style: {
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: "bold",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0 auto"
                      },
                      children: "0"
                    }), m.jsx("button", {
                      onClick: e => {
                        e.stopPropagation();
                        wi(30);
                        if (Bs.includes("手写小本子")) {
                          la("1314");
                          gs(true);
                          wi([50, 100, 50]);
                          Si("小本子夹层的纸条上写着：1314！", "info");
                        } else {
                          Si("还没收到 ta 的手写小本子呢～", "error");
                        }
                      },
                      style: {
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: "rgba(0,255,204,0.1)",
                        border: "1px solid rgba(0,255,204,0.3)",
                        color: "#00ffcc",
                        fontSize: 9,
                        fontWeight: "bold",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0 auto",
                        whiteSpace: "nowrap"
                      },
                      children: "小本子"
                    })]
                  })]
                }), m.jsxs("button", {
                  className: "hud-btn",
                  style: {
                    marginTop: 20,
                    background: "rgba(255,42,85,0.1)",
                    borderColor: "rgba(255,42,85,0.4)",
                    fontSize: 11,
                    padding: "6px 12px",
                    color: "#ff2a55"
                  },
                  onClick: e => {
                    e.stopPropagation();
                    vs(true);
                    setTimeout(() => {
                      vs(false);
                      gs(true);
                      wi([50, 100, 50]);
                    }, 1500);
                  },
                  children: [fs ? m.jsx(I, {
                    size: 12,
                    className: "spin"
                  }) : m.jsx(le, {
                    size: 12
                  }), fs ? "试着猜一猜…" : "试试看能不能打开"]
                })]
              })
            })]
          }), Ne === "hack_chat" && m.jsxs("div", {
            className: "wechat-app",
            onClick: e => {
              if (ke) {
                e.stopPropagation();
              }
            },
            children: [m.jsxs("div", {
              className: "app-header",
              style: {
                background: "#111",
                color: "#fff",
                borderBottom: "1px solid #333"
              },
              children: [m.jsxs("div", {
                className: "app-back",
                onClick: () => ye(Y ? "home" : "mirror"),
                children: [m.jsx(C, {
                  size: 22
                }), "返回"]
              }), m.jsx("div", {
                className: "app-title",
                children: Y ? "聊天" : `${(D == null ? undefined : D.name) || "ta"}的聊天`
              })]
            }), m.jsxs("div", {
              style: {
                flex: 1,
                background: "#f2f2f7",
                display: "flex",
                flexDirection: "column",
                height: "100%"
              },
              children: [m.jsxs("div", {
                style: {
                  display: "flex",
                  background: "#1c1c1e",
                  borderBottom: "1px solid #2c2c2e",
                  padding: "6px 10px",
                  gap: 10
                },
                children: [m.jsx("button", {
                  onClick: () => {
                    wi(30);
                    Ss("friend");
                  },
                  style: {
                    padding: "6px 12px",
                    borderRadius: 12,
                    fontSize: 11,
                    border: "none",
                    cursor: "pointer",
                    background: ws === "friend" ? "#ff2a55" : "rgba(255,255,255,0.08)",
                    color: ws === "friend" ? "#fff" : "#aaa",
                    fontWeight: "bold"
                  },
                  children: "💬 闺蜜 (friend)"
                }), m.jsx("button", {
                  onClick: () => {
                    wi(30);
                    Ss("mom");
                  },
                  style: {
                    padding: "6px 12px",
                    borderRadius: 12,
                    fontSize: 11,
                    border: "none",
                    cursor: "pointer",
                    background: ws === "mom" ? "#ff2a55" : "rgba(255,255,255,0.08)",
                    color: ws === "mom" ? "#fff" : "#aaa",
                    fontWeight: "bold"
                  },
                  children: "👩 妈妈 (mom)"
                })]
              }), m.jsx("div", {
                style: {
                  flex: 1,
                  padding: 16,
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12
                },
                children: ws === "friend" ? m.jsxs(m.Fragment, {
                  children: [m.jsxs("div", {
                    style: {
                      display: "flex",
                      gap: 10,
                      marginBottom: 4,
                      textAlign: "left"
                    },
                    children: [m.jsx("div", {
                      style: {
                        width: 36,
                        height: 36,
                        borderRadius: 6,
                        background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
                        flexShrink: 0
                      }
                    }), m.jsx("div", {
                      style: {
                        background: "#fff",
                        padding: "8px 12px",
                        borderRadius: "0 10px 10px 10px",
                        color: "#000",
                        fontSize: 13,
                        maxWidth: "75%"
                      },
                      children: "你今天心情看起来超好呀，是不是有什么开心事？"
                    })]
                  }), m.jsxs("div", {
                    style: {
                      display: "flex",
                      flexDirection: "row-reverse",
                      gap: 10,
                      marginBottom: 4,
                      textAlign: "right"
                    },
                    children: [m.jsx("div", {
                      style: {
                        width: 36,
                        height: 36,
                        borderRadius: 6,
                        background: "#ccc",
                        flexShrink: 0
                      }
                    }), m.jsxs("div", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: 4,
                        maxWidth: "75%"
                      },
                      children: [As || Y ? m.jsx("div", {
                        style: {
                          background: "#95ec69",
                          padding: "8px 12px",
                          borderRadius: "10px 0 10px 10px",
                          color: "#000",
                          fontSize: 13,
                          textAlign: "left"
                        },
                        children: "其实……我最近好像有点喜欢一个人，怎么办呀～"
                      }) : m.jsx("div", {
                        style: {
                          background: "rgba(0,0,0,0.04)",
                          padding: "8px 12px",
                          borderRadius: "10px 0 10px 10px",
                          color: "#888",
                          fontSize: 13,
                          fontStyle: "italic",
                          border: "1px dashed #ccc",
                          textAlign: "left"
                        },
                        children: "[ta 打了一半又害羞地撤回了]"
                      }), !Y && !As && m.jsxs("div", {
                        style: {
                          fontSize: 10,
                          color: "#ff8fa6",
                          background: "rgba(255,143,166,0.12)",
                          padding: "3px 8px",
                          borderRadius: 10,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          border: "1px solid rgba(255,143,166,0.35)",
                          width: "fit-content"
                        },
                        onClick: () => {
                          wi(50);
                          $s(true);
                          Ws("悄悄看到了 ta 撤回的那句小心事");
                          Si("看到 ta 害羞撤回的那句啦～", "success");
                        },
                        children: [m.jsx(U, {
                          size: 10
                        }), " 恢复撤回数据"]
                      })]
                    })]
                  }), Cs.map((e, s) => m.jsxs("div", {
                    style: {
                      display: "flex",
                      flexDirection: "row-reverse",
                      gap: 10,
                      marginBottom: 4,
                      textAlign: "right"
                    },
                    children: [m.jsx("div", {
                      style: {
                        width: 36,
                        height: 36,
                        borderRadius: 6,
                        background: "#111",
                        border: "1px solid #ff2a55",
                        flexShrink: 0,
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#ff2a55",
                        fontWeight: "bold",
                        fontSize: 14
                      },
                      children: "💌"
                    }), m.jsxs("div", {
                      style: {
                        background: "#95ec69",
                        padding: "8px 12px",
                        borderRadius: "10px 0 10px 10px",
                        color: "#000",
                        fontSize: 13,
                        maxWidth: "75%",
                        position: "relative",
                        textAlign: "left"
                      },
                      children: [m.jsx("div", {
                        style: {
                          position: "absolute",
                          top: -14,
                          right: 2,
                          color: "#ff2a55",
                          fontSize: 8,
                          fontWeight: "bold",
                          fontFamily: "monospace"
                        },
                        children: "悄悄留言"
                      }), e]
                    })]
                  }, s))]
                }) : m.jsxs(m.Fragment, {
                  children: [m.jsxs("div", {
                    style: {
                      display: "flex",
                      gap: 10,
                      marginBottom: 4,
                      textAlign: "left"
                    },
                    children: [m.jsx("div", {
                      style: {
                        width: 36,
                        height: 36,
                        borderRadius: 6,
                        background: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
                        flexShrink: 0
                      }
                    }), m.jsx("div", {
                      style: {
                        background: "#fff",
                        padding: "8px 12px",
                        borderRadius: "0 10px 10px 10px",
                        color: "#000",
                        fontSize: 13,
                        maxWidth: "75%"
                      },
                      children: "宝贝，你今天安全到家了吗？妈妈给你炖了最喜欢的排骨汤。"
                    })]
                  }), m.jsxs("div", {
                    style: {
                      display: "flex",
                      flexDirection: "row-reverse",
                      gap: 10,
                      marginBottom: 4,
                      textAlign: "right"
                    },
                    children: [m.jsx("div", {
                      style: {
                        width: 36,
                        height: 36,
                        borderRadius: 6,
                        background: "#ccc",
                        flexShrink: 0
                      }
                    }), m.jsxs("div", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: 4,
                        maxWidth: "75%"
                      },
                      children: [Ps || Y ? m.jsx("div", {
                        style: {
                          background: "#95ec69",
                          padding: "8px 12px",
                          borderRadius: "10px 0 10px 10px",
                          color: "#000",
                          fontSize: 13,
                          textAlign: "left"
                        },
                        children: "妈，我想给一个人挑份礼物，你帮我参谋参谋嘛～"
                      }) : m.jsx("div", {
                        style: {
                          background: "rgba(0,0,0,0.04)",
                          padding: "8px 12px",
                          borderRadius: "10px 0 10px 10px",
                          color: "#888",
                          fontSize: 13,
                          fontStyle: "italic",
                          border: "1px dashed #ccc",
                          textAlign: "left"
                        },
                        children: "[ta 打了一半又害羞地撤回了]"
                      }), !Y && !Ps && m.jsxs("div", {
                        style: {
                          fontSize: 10,
                          color: "#ff8fa6",
                          background: "rgba(255,143,166,0.12)",
                          padding: "3px 8px",
                          borderRadius: 10,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          border: "1px solid rgba(255,143,166,0.35)",
                          width: "fit-content"
                        },
                        onClick: () => {
                          wi(50);
                          Ts(true);
                          Ws("悄悄看到了 ta 撤回的那句小心事");
                          Si("看到 ta 害羞撤回的那句啦～", "success");
                        },
                        children: [m.jsx(U, {
                          size: 10
                        }), " 恢复撤回 data"]
                      })]
                    })]
                  }), Is.map((e, s) => m.jsxs("div", {
                    style: {
                      display: "flex",
                      flexDirection: "row-reverse",
                      gap: 10,
                      marginBottom: 4,
                      textAlign: "right"
                    },
                    children: [m.jsx("div", {
                      style: {
                        width: 36,
                        height: 36,
                        borderRadius: 6,
                        background: "#111",
                        border: "1px solid #ff2a55",
                        flexShrink: 0,
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#ff2a55",
                        fontWeight: "bold",
                        fontSize: 14
                      },
                      children: "💌"
                    }), m.jsxs("div", {
                      style: {
                        background: "#95ec69",
                        padding: "8px 12px",
                        borderRadius: "10px 0 10px 10px",
                        color: "#000",
                        fontSize: 13,
                        maxWidth: "75%",
                        position: "relative",
                        textAlign: "left"
                      },
                      children: [m.jsx("div", {
                        style: {
                          position: "absolute",
                          top: -14,
                          right: 2,
                          color: "#ff2a55",
                          fontSize: 8,
                          fontWeight: "bold",
                          fontFamily: "monospace"
                        },
                        children: "悄悄留言"
                      }), e]
                    })]
                  }, s))]
                })
              }), !Y && m.jsx("div", {
                style: {
                  background: "#fff",
                  padding: "12px 16px",
                  display: "flex",
                  gap: 12,
                  borderTop: "1px solid #ddd"
                },
                children: m.jsx("input", {
                  style: {
                    flex: 1,
                    background: "#f2f2f7",
                    border: "none",
                    padding: "10px 16px",
                    borderRadius: 20,
                    outline: "none",
                    fontSize: 13
                  },
                  placeholder: "给 ta 留一句悄悄话…",
                  value: ps,
                  onChange: e => us(e.target.value),
                  onKeyDown: e => {
                    if (e.key === "Enter" && ps) {
                      let e = ps;
                      if (ha.includes("intercept")) {
                        e += " ~❤";
                      }
                      if (ws === "friend") {
                        _s([...Cs, e]);
                        Ws("给 ta 的对话框里留了一句悄悄话");
                      } else {
                        zs([...Is, e]);
                        Ws("给 ta 的对话框里留了一句悄悄话");
                      }
                      us("");
                      wi(50);
                      Si("悄悄话留好啦～", "info");
                    }
                  }
                })
              })]
            })]
          }), Ne === "hack_finance" && m.jsxs("div", {
            className: "wechat-app",
            style: {
              background: "#f8f9fa",
              color: "#000"
            },
            onClick: e => {
              if (ke) {
                e.stopPropagation();
              }
            },
            children: [m.jsxs("div", {
              className: "app-header",
              style: {
                background: "#fff",
                color: "#000",
                borderBottom: "1px solid #eee"
              },
              children: [m.jsxs("div", {
                className: "app-back",
                onClick: () => ye(Y ? "home" : "mirror"),
                children: [m.jsx(C, {
                  size: 22
                }), "返回"]
              }), m.jsx("div", {
                className: "app-title",
                children: "ta 的日常小记"
              })]
            }), m.jsxs("div", {
              style: {
                padding: 20,
                overflowY: "auto",
                height: "100%"
              },
              children: [m.jsx("div", {
                style: {
                  fontWeight: "bold",
                  fontSize: 16,
                  marginBottom: 12,
                  color: "#333"
                },
                children: "最近的小消费"
              }), m.jsxs("div", {
                style: {
                  background: "#fff",
                  borderRadius: 12,
                  padding: 16,
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                  marginBottom: 24
                },
                children: [m.jsxs("div", {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 12,
                    borderBottom: "1px solid #eee",
                    paddingBottom: 12
                  },
                  children: [m.jsxs("div", {
                    children: [m.jsx("div", {
                      style: {
                        fontSize: 14,
                        fontWeight: "bold"
                      },
                      children: "甜品店 · 下午茶"
                    }), m.jsx("div", {
                      style: {
                        fontSize: 12,
                        color: "#888"
                      },
                      children: "5月1日 23:45"
                    })]
                  }), m.jsxs("div", {
                    style: {
                      textAlign: "right"
                    },
                    children: [m.jsx("div", {
                      style: {
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "#ff2a55"
                      },
                      children: "- 45.00"
                    }), m.jsx("div", {
                      style: {
                        fontSize: 12,
                        color: "#888"
                      },
                      children: "街角那家甜品店"
                    })]
                  })]
                }), m.jsxs("div", {
                  style: {
                    display: "flex",
                    justifyContent: "space-between"
                  },
                  children: [m.jsxs("div", {
                    children: [m.jsx("div", {
                      style: {
                        fontSize: 14,
                        fontWeight: "bold"
                      },
                      children: "书店 · 买了本书"
                    }), m.jsx("div", {
                      style: {
                        fontSize: 12,
                        color: "#888"
                      },
                      children: "5月2日 09:12"
                    })]
                  }), m.jsxs("div", {
                    style: {
                      textAlign: "right"
                    },
                    children: [m.jsx("div", {
                      style: {
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "#ff2a55"
                      },
                      children: "- 128.00"
                    }), m.jsx("div", {
                      style: {
                        fontSize: 12,
                        color: "#888"
                      },
                      children: "备注：想送人的礼物"
                    })]
                  })]
                })]
              }), m.jsx("div", {
                style: {
                  fontWeight: "bold",
                  fontSize: 16,
                  marginBottom: 12,
                  color: "#333"
                },
                children: "最近在搜的"
              }), m.jsxs("div", {
                style: {
                  background: "#fff",
                  borderRadius: 12,
                  padding: 16,
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
                },
                children: [m.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 12,
                    color: "#555"
                  },
                  children: [m.jsx(U, {
                    size: 14,
                    color: "#888"
                  }), " ", m.jsx("span", {
                    style: {
                      fontSize: 14
                    },
                    children: "生日礼物送什么好 实用又有心意"
                  })]
                }), m.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 12,
                    color: "#555"
                  },
                  children: [m.jsx(U, {
                    size: 14,
                    color: "#888"
                  }), " ", m.jsx("span", {
                    style: {
                      fontSize: 14
                    },
                    children: "两个人第一次约会去哪比较好"
                  })]
                }), m.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    color: "#555"
                  },
                  children: [m.jsx(U, {
                    size: 14,
                    color: "#ff2a55"
                  }), " ", m.jsx("span", {
                    style: {
                      fontSize: 14,
                      color: "#ff2a55",
                      fontWeight: "bold"
                    },
                    children: "怎么不动声色地表达喜欢"
                  })]
                })]
              })]
            })]
          }), Ne === "radar" && m.jsxs("div", {
            className: "radar-app",
            onClick: e => {
              if (ke) {
                e.stopPropagation();
              }
            },
            children: [m.jsxs("div", {
              className: "radar-header",
              children: [m.jsx(C, {
                size: 20,
                style: {
                  cursor: "pointer"
                },
                onClick: () => ye("home")
              }), Y ? "我的行程" : `${(D == null ? undefined : D.name) || "ta"}的行程`]
            }), m.jsxs("div", {
              className: "radar-map-area",
              children: [m.jsx("div", {
                className: "radar-crosshair-h"
              }), m.jsx("div", {
                className: "radar-crosshair-v"
              }), m.jsx("div", {
                className: "radar-ring-1"
              }), m.jsx("div", {
                className: "radar-ring-2"
              }), m.jsx("div", {
                className: "radar-ring-3"
              }), m.jsx("div", {
                className: "radar-sweep-mini"
              }), zi.length > 0 && m.jsx("div", {
                className: "target-blip-mini"
              }), zi.length === 0 && m.jsx("div", {
                className: "radar-searching-text",
                children: "SIGNAL SEARCHING..."
              })]
            }), m.jsxs("div", {
              className: "tracking-timeline",
              children: [m.jsx("div", {
                className: "timeline-title-row",
                children: "--- ta 今天的足迹 ---"
              }), !Y && m.jsxs("div", {
                className: "intervention-btn gen-timeline-btn",
                style: {
                  justifyContent: "center",
                  marginBottom: 16,
                  opacity: hs ? 0.6 : 1,
                  pointerEvents: hs ? "none" : "auto"
                },
                onClick: async () => {
                  var e;
                  var s;
                  if ((D == null ? undefined : D.id) == null || hs) {
                    return;
                  }
                  const a = $a ? "user" : "char";
                  const i = $a ? Pa ? {
                    name: Pa.name,
                    desc: Pa.intro || Pa.bio || Pa.persona || Pa.signature || ""
                  } : {
                    name: D == null ? undefined : D.name,
                    desc: ""
                  } : (() => {
                    const e = b.find(e => String(e.id) === String(D == null ? undefined : D.id));
                    if (e) {
                      return {
                        name: e.name,
                        desc: e.description || e.personality || e.intro || ""
                      };
                    } else {
                      return {
                        name: D == null ? undefined : D.name,
                        desc: ""
                      };
                    }
                  })();
                  const n = b.find(e => String(e.id) === String(R == null ? undefined : R.id));
                  const l = n ? {
                    name: n.name,
                    desc: n.description || n.personality || n.intro || ""
                  } : R ? {
                    name: R.name,
                    desc: ""
                  } : null;
                  const r = D.id;
                  const c = $a;
                  ms(true);
                  wi(40);
                  Re([]);
                  Oe([]);
                  qe({});
                  Vs(new Set());
                  Ys(null);
                  Xs([]);
                  const {
                    startContentGen: d
                  } = await t(async () => {
                    const {
                      startContentGen: e
                    } = await import("./main-BO9xa-SQ.js").then(e => e.cj);
                    return {
                      startContentGen: e
                    };
                  }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
                  const h = ((s = (e = Sa == null ? undefined : Sa.aiPhoneContent) == null ? undefined : e.footprint) == null ? undefined : s.rows) || null;
                  d(async () => {
                    var e;
                    const s = await ii(y, r, a);
                    const {
                      generateTrackTimeline: n
                    } = await t(async () => {
                      const {
                        generateTrackTimeline: e
                      } = await import("./chikanTrackTimeline-C1J-3C9Q.js");
                      return {
                        generateTrackTimeline: e
                      };
                    }, __vite__mapDeps([15, 2, 3, 4, 5, 6, 7]));
                    const d = await n({
                      stalker: l,
                      target: i,
                      targetIsUser: c,
                      relationship: s.relationship,
                      schedule: s.schedule,
                      recentStory: s.recentStory,
                      recentMoments: s.recentMoments,
                      memories: s.memories,
                      userFacts: s.userFacts,
                      relations: s.relations,
                      priorFootprint: h,
                      nowTime: Ai(),
                      language: k
                    });
                    if (!((e = d == null ? undefined : d.stops) == null ? undefined : e.length)) {
                      if (String(oi.current) === String(r)) {
                        Re(Ee);
                        Oe(Me);
                      }
                      return false;
                    }
                    if (String(oi.current) !== String(r)) {
                      return false;
                    }
                    const m = d.stops;
                    const p = m.find(e => e.active) || m[m.length - 1];
                    Re(m);
                    Oe(m);
                    qe({});
                    if (p == null ? undefined : p.sceneType) {
                      ve(p.sceneType);
                    }
                    be("idle");
                    wi([40, 60]);
                    const u = [...(Array.isArray(h) ? h : []).map(e => `${e.time ? e.time + " " : ""}${e.place || ""}${e.note ? "·" + e.note : ""}`), ...m.map(e => `${e.time ? e.time + " " : ""}${e.location || ""}${e.desc ? "·" + e.desc : ""}`)].map(e => e.trim()).filter(Boolean);
                    Ls(u.slice(-8));
                    if ((p == null ? undefined : p.location) && String(oi.current) === String(r)) {
                      o.mergeFootprint(a, r, {
                        time: p.time,
                        place: p.location,
                        note: (p.desc || "").slice(0, 30)
                      }).catch(() => {});
                    }
                    (async () => {
                      try {
                        const {
                          getApiSettings: e
                        } = await t(async () => {
                          const {
                            getApiSettings: e
                          } = await import("./native-pet-CTNtZgMA.js").then(e => e.cG);
                          return {
                            getApiSettings: e
                          };
                        }, __vite__mapDeps([2, 3, 4, 5, 6, 7]));
                        const {
                          generateImage: s
                        } = await t(async () => {
                          const {
                            generateImage: e
                          } = await import("./native-pet-CTNtZgMA.js").then(e => e.cC);
                          return {
                            generateImage: e
                          };
                        }, __vite__mapDeps([2, 3, 4, 5, 6, 7]));
                        const i = await e().catch(() => null);
                        if (!i) {
                          return;
                        }
                        for (const t of m) {
                          if (t.scenePrompt) {
                            s(t.scenePrompt, "trackingScene", i, {}).then(e => {
                              if (e && String(oi.current) === String(r)) {
                                qe(s => ({
                                  ...s,
                                  [t.id]: e
                                }));
                                if (t.sceneType === "home") {
                                  o.setHomeScene(a, r, e).then(() => o.get(a, r)).then(e => {
                                    if (e && String(oi.current) === String(r)) {
                                      Ca(e);
                                    }
                                  }).catch(() => {});
                                }
                              }
                            }).catch(() => {});
                          }
                        }
                      } catch (e) {}
                    })();
                    return true;
                  }, {
                    label: $("csTimelineGenerating") || "正在生成 ta 今天的行踪…",
                    doneLabel: $("csTimelineReady") || "ta 今天的行踪生成好了",
                    isOnScreen: () => v === "chikan-sim-screen"
                  }).finally(() => ms(false));
                },
                children: [m.jsx(K, {
                  size: 12
                }), " ", hs ? $("csTimelineGenerating") || "正在生成 ta 今天的行踪…" : $("csTimelineGenBtn") || "生成 ta 今天的行踪"]
              }), zi.length === 0 ? m.jsxs("div", {
                className: "radar-empty-state",
                children: [m.jsx("div", {
                  className: "radar-empty-icon",
                  children: "📡"
                }), m.jsx("div", {
                  className: "radar-empty-text",
                  children: "当前雷达未追踪到任何实时足迹"
                }), m.jsx("div", {
                  className: "radar-empty-subtext",
                  children: "请点击上方“生成行踪”按钮推演 ta 的行程"
                })]
              }) : zi.map(e => m.jsxs("div", {
                className: "timeline-item " + (e.active ? "active" : ""),
                children: [m.jsx("div", {
                  className: "timeline-line"
                }), m.jsx("div", {
                  className: "timeline-dot"
                }), m.jsxs("div", {
                  className: "timeline-content",
                  children: [m.jsxs("div", {
                    className: "timeline-time-loc",
                    children: [m.jsx("span", {
                      children: e.time
                    }), m.jsxs("span", {
                      children: [m.jsx(S, {
                        size: 12,
                        style: {
                          marginRight: 4,
                          display: "inline"
                        }
                      }), e.location]
                    })]
                  }), m.jsx("div", {
                    className: "timeline-desc",
                    children: e.desc
                  }), e.active && e.phoneCmd && m.jsx("div", {
                    className: "action-buttons",
                    children: m.jsxs("div", {
                      className: "intervention-btn",
                      onClick: () => (e => {
                        if (e === "go_scene" || e === "go_cafe") {
                          const e = zi.find(e => e.active) || zi[zi.length - 1] || null;
                          const s = (e == null ? undefined : e.sceneType) || "cafe";
                          ve(s);
                          be("arrived");
                          we(false);
                          X(e => Math.min(e + 10, 100));
                        } else if (e === "hack_user") {
                          X(e => Math.min(e + 30, 100));
                          const e = {
                            id: Date.now(),
                            time: Ai(),
                            location: "小插曲",
                            desc: "ta 回了你一个调皮的反应。",
                            active: true,
                            phoneCmd: "reset",
                            cmdText: "[重新开始]"
                          };
                          Oe(s => [...s.map(e => ({
                            ...e,
                            active: false
                          })), e]);
                        } else if (e === "reset") {
                          Re(Ee);
                          Oe(Me);
                          ve("bedroom");
                          be("idle");
                          X(0);
                          qe({});
                          Vs(new Set());
                          Ys(null);
                          Xs([]);
                          Ms(false);
                          Ve(null);
                          He.current = new Set();
                        }
                      })(e.phoneCmd),
                      children: [m.jsx(K, {
                        size: 12
                      }), " ", e.cmdText]
                    })
                  })]
                })]
              }, e.id)), m.jsx("div", {
                ref: T,
                style: {
                  height: 20
                }
              })]
            })]
          })]
        })]
      })
    }), m.jsx(De, {
      isSkinPanelOpen: _a,
      setIsSkinPanelOpen: Ia,
      skinOwner: Ya,
      skinOwnerType: Ha,
      activeStyle: Xa,
      activeSkin: Ja,
      homeWallpaperStyle: ai,
      isAutoGenning: yi,
      handleAutoGenerate: async () => {
        if ((Ya == null ? undefined : Ya.id) == null || yi) {
          return;
        }
        if (Ha !== "char") {
          Si("跟人设生成仅适用于角色手机", "info");
          return;
        }
        const e = b.find(e => String(e.id) === String(Ya.id));
        if (e) {
          ki(true);
          wi(40);
          Si("正在读取人设生成外观…", "info");
          try {
            const s = await t(() => import("./chikanPhoneAutoSkin-BDc_ON11.js"), __vite__mapDeps([12, 2, 3, 4, 5, 6, 7]));
            const a = await ii(y, Ya.id);
            const i = await s.generatePhoneSkinFromPersona(e, a);
            if (i) {
              await o.setAiTheme(Ha, Ya.id, i);
              await ti();
              wi([40, 60]);
              Si("已按人设生成专属外观！", "success");
            } else {
              Si("生成失败：请检查 API 设置或角色人设", "error");
            }
          } catch (s) {
            Si("生成出错：" + ((s == null ? undefined : s.message) || "未知"), "error");
          } finally {
            ki(false);
          }
        } else {
          Si("找不到该角色资料", "error");
        }
      },
      handlePickSkinStyle: async e => {
        if ((Ya == null ? undefined : Ya.id) != null) {
          wi(40);
          await o.setStyle(Ha, Ya.id, e);
          await ti();
        }
      },
      handleClearWallpaper: async () => {
        if ((Ya == null ? undefined : Ya.id) != null) {
          await o.setWallpaper(Ha, Ya.id, null);
          await ti();
          wi(40);
          Si("已恢复默认主题背景", "info");
        }
      },
      handleUploadWallpaper: async e => {
        var s;
        const a = (s = e.target.files) == null ? undefined : s[0];
        e.target.value = "";
        if (!a || (Ya == null ? undefined : Ya.id) == null) {
          return;
        }
        const i = new FileReader();
        i.onload = async () => {
          try {
            const e = await u(i.result, {
              maxDim: 1080,
              quality: 0.82
            });
            await o.setWallpaper(Ha, Ya.id, e);
            await ti();
            wi([40, 60]);
            Si("已更新手机背景图", "success");
          } catch (e) {
            Si("背景图设置失败", "error");
          }
        };
        i.readAsDataURL(a);
      },
      skinFileInputRef: za
    })]
  });
};
export { Be as default };