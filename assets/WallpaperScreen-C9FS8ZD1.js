const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["./assets/native-pet-CTNtZgMA.js", "./assets/vendor-react-B2VXkTUV.js", "./assets/vendor-dexie-KLdnSHz2.js", "./assets/vendor-jszip-DU-5YDGO.js", "./assets/vendor-lucide-DBv09HTV.js", "./assets/native-pet-D9YoqRtr.css"]) => i.map(i => d[i]);
import { b7 as e, c as t, a as s, u as n, G as a, a2 as i, i as l, I as o, _ as r, y as c, A as d, k as p } from "./native-pet-CTNtZgMA.js";
import { r as g, j as m } from "./vendor-react-B2VXkTUV.js";
import { A as u } from "./AudioUploadModal-DF7VJ3eE.js";
import { F as h } from "./FrostedGlassBackground-DQPbupYU.js";
import { clearMessagingTheme as x } from "./messagingThemeService-CTLNGXBa.js";
import { clearForumTheme as b } from "./forumThemeService-CnIUGRXT.js";
import { i as y, s as j, h as f } from "./main-BO9xa-SQ.js";
import { x as v, I as S, V as w, Q as k, K as C, W as N, Y as I, Z as z, _ as E, M as D, $ as B, a0 as P, l as A, a1 as L, a2 as T, a3 as M, i as F, T as R, a4 as O, a5 as $, s as _, a6 as W, u as H, U } from "./vendor-lucide-DBv09HTV.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
import "./modulepreload-polyfill-YP0FEG5d.js";
/* empty css                        */
import "./vendor-supabase-Bcpm_8qV.js";
/* empty css                     */
const K = ({
  icon: e,
  iconBg: t,
  label: s,
  checked: n,
  onChange: a,
  noTransition: i
}) => m.jsxs("div", {
  className: "settings-item",
  onClick: () => a(!n),
  children: [m.jsxs("div", {
    className: "settings-item-left",
    children: [m.jsx("div", {
      className: `settings-item-icon ${t}`,
      children: e
    }), m.jsx("span", {
      className: "settings-item-label",
      children: s
    })]
  }), m.jsx("div", {
    className: "settings-item-right",
    children: m.jsxs("label", {
      className: "toggle-switch" + (i ? " no-transition" : ""),
      onClick: e => e.stopPropagation(),
      children: [m.jsx("input", {
        type: "checkbox",
        checked: n,
        onChange: e => a(e.target.checked)
      }), m.jsx("span", {
        className: "slider"
      })]
    })
  })]
});
const G = ({
  icon: e,
  iconBg: t,
  label: s,
  value: n,
  preview: a,
  onClick: i,
  disabled: l
}) => m.jsxs("div", {
  className: "settings-item",
  onClick: l ? undefined : i,
  style: {
    opacity: l ? 0.5 : 1,
    cursor: l ? "not-allowed" : "pointer"
  },
  children: [m.jsxs("div", {
    className: "settings-item-left",
    children: [m.jsx("div", {
      className: `settings-item-icon ${t}`,
      children: e
    }), m.jsx("span", {
      className: "settings-item-label",
      children: s
    })]
  }), m.jsxs("div", {
    className: "settings-item-right",
    children: [a && m.jsx("div", {
      className: "settings-wallpaper-preview",
      style: {
        backgroundImage: a ? `url(${a})` : "none"
      }
    }), n && m.jsx("span", {
      className: "settings-item-value",
      children: n
    }), m.jsx("span", {
      className: "settings-item-chevron",
      children: "›"
    })]
  })]
});
const q = ({
  icon: e,
  iconBg: t,
  label: s,
  currentLanguage: n,
  onLanguageChange: a,
  t: i
}) => {
  var l;
  const [o, r] = g.useState(false);
  const c = g.useRef(null);
  g.useEffect(() => {
    const e = e => {
      if (c.current && !c.current.contains(e.target)) {
        r(false);
      }
    };
    document.addEventListener("mousedown", e);
    return () => document.removeEventListener("mousedown", e);
  }, []);
  const d = [{
    id: "zh_cn",
    label: i("zhSimpLabel")
  }, {
    id: "zh",
    label: i("zhLabel")
  }, {
    id: "en",
    label: i("enLabel")
  }];
  const p = ((l = d.find(e => e.id === n)) == null ? undefined : l.label) || n;
  return m.jsxs("div", {
    className: "settings-item dropdown-container",
    ref: c,
    onClick: () => r(!o),
    style: {
      zIndex: o ? 10 : 1,
      position: "relative"
    },
    children: [m.jsxs("div", {
      className: "settings-item-left",
      children: [m.jsx("div", {
        className: `settings-item-icon ${t}`,
        children: e
      }), m.jsx("span", {
        className: "settings-item-label",
        children: s
      })]
    }), m.jsxs("div", {
      className: "settings-item-right",
      children: [m.jsx("span", {
        className: "settings-item-value",
        children: p
      }), m.jsx("span", {
        className: "settings-item-chevron " + (o ? "rotated" : ""),
        children: "›"
      })]
    }), o && m.jsx("div", {
      className: "ios-dropdown-menu",
      children: d.map(e => m.jsxs("div", {
        className: "ios-dropdown-item " + (n === e.id ? "active" : ""),
        onClick: t => {
          t.stopPropagation();
          a(e.id);
          r(false);
        },
        children: [m.jsx("span", {
          children: e.label
        }), n === e.id && m.jsx("span", {
          className: "check-mark",
          children: "✓"
        })]
      }, e.id))
    })]
  });
};
const J = ({
  title: e,
  children: t,
  style: s
}) => m.jsxs("div", {
  className: "settings-section",
  style: s,
  children: [e && m.jsx("div", {
    className: "settings-section-header",
    children: e
  }), t]
});
const X = () => {
  try {
    const t = performance && performance.memory ? Math.round((performance.memory.usedJSHeapSize || 0) / 1048576) + "MB" : "n/a";
    e("appearance:render-start heap=" + t);
  } catch (Cs) {}
  const {
    currentScreen: X,
    goHome: V,
    showScreen: Y
  } = t();
  const {
    language: Q,
    setLanguage: Z,
    t: ee,
    tOr: te
  } = s();
  const se = X === "wallpaper-screen";
  g.useEffect(() => {
    try {
      const t = performance && performance.memory ? Math.round((performance.memory.usedJSHeapSize || 0) / 1048576) + "MB" : "n/a";
      e("appearance:mounted heap=" + t);
    } catch (Cs) {}
  }, []);
  const [ne, ae] = n("homeWallpaper", "");
  const [ie, le] = n("darkMode", false);
  const [oe, re] = n("statusBarStyle", "auto");
  g.useEffect(() => {
    const e = oe || "auto";
    try {
      localStorage.setItem("nuojiji_status_bar_style", e);
    } catch (Cs) {}
    try {
      window.dispatchEvent(new CustomEvent("nuojiji:status-bar-style-changed", {
        detail: {
          value: e
        }
      }));
    } catch (Cs) {}
  }, [oe]);
  const [ce, de] = n("uiScale", 1);
  const pe = g.useCallback(e => {
    const t = Number(e);
    if (!!Number.isFinite(t) && !(t < 0.7) && !(t > 1.3)) {
      de(t);
      try {
        localStorage.setItem("nuojiji_ui_scale", String(t));
      } catch (Cs) {}
      try {
        window.dispatchEvent(new CustomEvent("nuojiji:ui-scale-changed", {
          detail: {
            scale: t
          }
        }));
      } catch (Cs) {}
    }
  }, [de]);
  g.useEffect(() => {
    const e = Number(ce);
    if (!!Number.isFinite(e) && !(e < 0.7) && !(e > 1.3)) {
      try {
        localStorage.setItem("nuojiji_ui_scale", String(e));
      } catch (Cs) {}
    }
  }, [ce]);
  const [ge, me] = n("apkTopOffset", 0);
  g.useEffect(() => {
    const e = document.getElementById("nuo-os-root");
    if (!e) {
      return;
    }
    let t = Number(ge);
    if (!Number.isFinite(t)) {
      t = 0;
    }
    if (t < -80) {
      t = -80;
    }
    if (t > 80) {
      t = 80;
    }
    e.style.setProperty("--apk-top-user-offset", `${t}px`);
    try {
      localStorage.setItem("nuojiji_apk_top_offset", String(t));
    } catch (Cs) {}
  }, [ge]);
  const [ue, he] = n("apkBottomOffset", 0);
  g.useEffect(() => {
    const e = document.getElementById("nuo-os-root");
    if (!e) {
      return;
    }
    let t = Number(ue);
    if (!Number.isFinite(t)) {
      t = 0;
    }
    if (t < -120) {
      t = -120;
    }
    if (t > 120) {
      t = 120;
    }
    e.style.setProperty("--apk-bottom-user-offset", `${t}px`);
    try {
      localStorage.setItem("nuojiji_apk_bottom_offset", String(t));
    } catch (Cs) {}
  }, [ue]);
  const [xe, be] = n("apkKbOffset", 0);
  g.useEffect(() => {
    const e = document.getElementById("nuo-os-root");
    if (!e) {
      return;
    }
    let t = Number(xe);
    if (!Number.isFinite(t)) {
      t = 0;
    }
    if (t < -500) {
      t = -500;
    }
    if (t > 500) {
      t = 500;
    }
    e.style.setProperty("--apk-kb-user-offset", `${t}px`);
    try {
      localStorage.setItem("nuojiji_apk_kb_offset", String(t));
    } catch (Cs) {}
  }, [xe]);
  const [ye, je] = n("showStatusBar", true);
  const [fe, ve] = n("showAppLabels", true);
  const [Se, we, ke] = n("disableAppTransition", false);
  const [Ce, Ne] = g.useState(false);
  g.useEffect(() => {
    if (ke && !Ce) {
      const e = requestAnimationFrame(() => Ne(true));
      return () => cancelAnimationFrame(e);
    }
  }, [ke, Ce]);
  const [Ie] = n("dynamicIslandStyle", "capsule");
  const [ze, Ee] = n("dynamicIslandAlwaysOn", false);
  const [De, Be] = n("islandDecorationType", "none");
  const [Pe, Ae] = n("islandStatusText", "");
  const [Le, Te] = g.useState(null);
  const [Me, Fe] = g.useState({
    hanging: "",
    floating: "",
    photoRight: "",
    statusPhoto: ""
  });
  g.useEffect(() => {
    Promise.all([a.get("islandDecoHanging"), a.get("islandDecoFloating"), a.get("islandDecoPhotoRight"), a.get("islandDecoStatusPhoto")]).then(([e, t, s, n]) => Fe({
      hanging: e || "",
      floating: t || "",
      photoRight: s || "",
      statusPhoto: n || ""
    }));
  }, []);
  const Re = async (e, t, s) => {
    try {
      if (s) {
        await a.set(t, s);
      } else {
        await a.remove(t);
      }
    } catch (n) {
      console.error("裝飾圖片儲存失敗", n);
      return;
    }
    Fe(t => ({
      ...t,
      [e]: s || ""
    }));
    window.dispatchEvent(new Event("islandDecoUpdated"));
  };
  const [Oe, $e] = n("lockScreenEnabled", ((e, t = false) => {
    try {
      const t = localStorage.getItem(e);
      if (t === "true") {
        return true;
      }
      if (t === "false") {
        return false;
      }
    } catch (s) {}
    return t;
  })("lockScreenEnabled", false));
  const [_e, We] = n("lockScreenWallpaper", "");
  const [He, Ue] = n("lockPasswordEnabled", false);
  const [Ke, Ge] = n("lockPassword", "");
  const [qe, Je] = n("lockScreenTextColor", "#ffffff");
  const [Xe, Ve] = n("lockScreenTextSize", 1);
  const [Ye, Qe] = n("notificationSoundEnabled", true);
  const [Ze, et] = n("notificationSoundData", null);
  const [tt, st] = n("incomingCallSoundEnabled", true);
  const [nt, at] = n("incomingCallSoundData", null);
  const [it, lt] = n("outgoingCallSoundEnabled", true);
  const [ot, rt] = n("outgoingCallSoundData", null);
  const [ct, dt] = n("onlyLastMessageSound", false);
  const [pt, gt] = n("userMessageSoundEnabled", true);
  const [mt, ut] = n("userMessageSoundData", null);
  const [ht, xt] = g.useState(false);
  const [bt, yt] = g.useState(null);
  const [jt, ft] = g.useState(false);
  const [vt, St] = g.useState("");
  const [wt, kt] = g.useState("");
  const [Ct, Nt] = g.useState("");
  const [It, zt] = g.useState(false);
  const [Et, Dt] = g.useState(false);
  const [Bt, Pt] = g.useState(null);
  const [At, Lt] = n("textColor", "white");
  const [Tt, Mt] = g.useState(false);
  const [Ft, Rt] = n("iconColor", "#333333");
  const [Ot, $t] = n("iconColorIntensity", 100);
  const [_t, Wt] = g.useState(Ft);
  const [Ht, Ut] = g.useState(Ot);
  const [Kt, Gt] = g.useState(Ft);
  g.useEffect(() => {
    Wt(Ft);
    Ut(Ot);
    Gt(Ft);
  }, [Ft, Ot]);
  const [qt, Jt] = g.useState(false);
  const Xt = g.useRef(null);
  const [Vt, Yt] = n("appearancePresets", []);
  const Qt = Array.isArray(Vt) ? Vt : [];
  const [Zt, es] = n("activePresetId", null);
  const [ts, ss] = g.useState(false);
  const [ns, as] = g.useState("");
  const [is, ls] = g.useState(null);
  const [os, rs] = g.useState(false);
  const [cs, ds] = g.useState("");
  const ps = async () => {
    const e = await a.get("homeScreenLayout");
    const t = await a.get("appCustomizations");
    return {
      homeWallpaper: ne,
      darkMode: ie,
      showStatusBar: ye,
      showAppLabels: fe,
      disableAppTransition: Se,
      dynamicIslandStyle: Ie,
      dynamicIslandAlwaysOn: ze,
      textColor: At,
      iconColor: Ft,
      iconColorIntensity: Ot,
      lockScreenEnabled: Oe,
      lockScreenWallpaper: _e,
      lockScreenTextColor: qe,
      lockScreenTextSize: Xe,
      notificationSoundEnabled: Ye,
      notificationSoundData: Ze,
      incomingCallSoundEnabled: tt,
      incomingCallSoundData: nt,
      outgoingCallSoundEnabled: it,
      outgoingCallSoundData: ot,
      userMessageSoundEnabled: pt,
      userMessageSoundData: mt,
      onlyLastMessageSound: ct,
      homeScreenLayout: await bs(e),
      appCustomizations: await bs(t)
    };
  };
  const gs = async () => {
    const e = ns.trim();
    if (e) {
      try {
        const t = await ps();
        const s = {
          id: Date.now().toString(),
          name: e,
          createdAt: new Date().toISOString(),
          data: t
        };
        Yt(e => [...(Array.isArray(e) ? e : []), s]);
        es(s.id);
        ss(false);
        as("");
      } catch (t) {
        console.error("Save preset failed:", t);
        d(ee("exportError") + ": " + t.message);
      }
    }
  };
  const ms = () => {
    const e = cs.trim();
    if (e && is) {
      Yt(t => (Array.isArray(t) ? t : []).map(t => t.id === is ? {
        ...t,
        name: e
      } : t));
      rs(false);
      ls(null);
      ds("");
    }
  };
  g.useEffect(() => {
    if (!se) {
      Dt(false);
      ft(false);
      Jt(false);
      ss(false);
      rs(false);
    }
  }, [se]);
  g.useEffect(() => {
    document.body.classList.toggle("text-black-mode", At === "black");
    try {
      localStorage.setItem("nuojiji-text-black-mode", At === "black" ? "true" : "false");
    } catch (e) {}
  }, [At]);
  g.useEffect(() => {
    const e = document.getElementById("nuo-os-root");
    if (e) {
      e.classList.toggle("dark-mode", ie);
      document.body.classList.toggle("dark-mode", ie);
    }
  }, [ie]);
  g.useEffect(() => {
    const e = document.getElementById("nuo-os-root");
    if (e) {
      e.classList.toggle("status-bar-visible", ye);
    }
  }, [ye]);
  g.useEffect(() => {
    document.body.classList.toggle("hide-app-labels", !fe);
    try {
      localStorage.setItem("nuojiji-hide-app-labels", fe ? "false" : "true");
    } catch (e) {}
  }, [fe]);
  const us = e => {
    Lt(e);
  };
  const hs = (e, t) => {
    const s = parseInt(e.slice(1, 3), 16);
    const n = parseInt(e.slice(3, 5), 16);
    const a = parseInt(e.slice(5, 7), 16);
    const i = t / 100;
    const l = `rgba(${Math.min(255, s + 80)}, ${Math.min(255, n + 80)}, ${Math.min(255, a + 80)}, ${i})`;
    const o = `rgba(${Math.max(0, s - 40)}, ${Math.max(0, n - 40)}, ${Math.max(0, a - 40)}, ${i})`;
    document.documentElement.style.setProperty("--nc-gradient-1-color-1", l);
    document.documentElement.style.setProperty("--nc-gradient-1-color-2", o);
    document.documentElement.style.setProperty("--nc-gradient-2-color-1", `rgba(${s}, ${n}, ${a}, ${i * 0.4})`);
    document.documentElement.style.setProperty("--nc-gradient-2-color-2", `rgba(${Math.max(0, s - 20)}, ${Math.max(0, n - 20)}, ${Math.max(0, a - 20)}, ${i * 0.5})`);
    document.documentElement.style.setProperty("--app-icon-color", e);
    document.documentElement.style.setProperty("--app-icon-color-intensity", t / 100);
    window.dispatchEvent(new CustomEvent("icon-color-changed", {
      detail: e
    }));
  };
  const xs = e => {
    Ut(e);
    $t(e);
    hs(_t, e);
  };
  const bs = async e => {
    if (e instanceof Blob) {
      const t = await e.arrayBuffer();
      const s = new Uint8Array(t);
      let n = "";
      const a = 8192;
      for (let e = 0; e < s.length; e += a) {
        n += String.fromCharCode.apply(null, s.subarray(e, e + a));
      }
      return {
        _isBlob: true,
        type: e.type,
        data: btoa(n),
        encoding: "base64"
      };
    }
    if (Array.isArray(e)) {
      return Promise.all(e.map(e => bs(e)));
    }
    if (e !== null && typeof e == "object") {
      const t = {};
      for (const [s, n] of Object.entries(e)) {
        t[s] = await bs(n);
      }
      return t;
    }
    return e;
  };
  const ys = e => {
    if (e && typeof e == "object") {
      if (e._isBlob) {
        let t;
        if (e.encoding === "base64" || typeof e.data == "string") {
          const s = atob(e.data);
          t = new Uint8Array(s.length);
          for (let e = 0; e < s.length; e++) {
            t[e] = s.charCodeAt(e);
          }
        } else {
          t = new Uint8Array(e.data);
        }
        return new Blob([t], {
          type: e.type
        });
      }
      if (Array.isArray(e)) {
        return e.map(e => ys(e));
      }
      const t = {};
      for (const [s, n] of Object.entries(e)) {
        t[s] = ys(n);
      }
      return t;
    }
    return e;
  };
  const [js, fs] = g.useState(() => {
    try {
      return y();
    } catch (Cs) {
      return true;
    }
  });
  const [vs, Ss] = n("fullscreenEnabled", false);
  const ws = () => {
    ft(false);
    St("");
    kt("");
    Nt("");
  };
  const ks = e => {
    yt(e);
    xt(true);
  };
  return m.jsxs("div", {
    id: "wallpaper-screen",
    className: "screen " + (se ? "active" : ""),
    children: [m.jsx(h, {}), m.jsx("div", {
      className: "floating-back-btn",
      onClick: () => {
        Rt(_t);
        $t(Ht);
        hs(_t, Ht);
        V();
      },
      style: {
        zIndex: 20
      },
      children: m.jsx(v, {
        size: 24
      })
    }), m.jsxs("div", {
      className: "settings-scroll-container",
      style: {
        position: "relative",
        zIndex: 10
      },
      children: [m.jsx("h1", {
        className: "large-title",
        "data-lang-key": "appearanceTitle",
        children: ee("appearanceTitle")
      }), m.jsx(J, {
        title: ee("sectionWallpaper"),
        style: {
          position: "relative",
          zIndex: 50
        },
        children: m.jsx(G, {
          icon: m.jsx(S, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-blue",
          label: ee("labelHomeWallpaper"),
          preview: ne,
          onClick: () => {
            Pt("home");
            Dt(true);
          }
        })
      }), m.jsxs(J, {
        title: ee("sectionLockScreen"),
        style: {
          position: "relative",
          zIndex: 40
        },
        children: [m.jsx(K, {
          icon: m.jsx(w, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-teal",
          label: ee("labelLockScreenEnabled"),
          checked: Oe,
          onChange: e => {
            $e(e);
            try {
              localStorage.setItem("lockScreenEnabled", e ? "true" : "false");
            } catch (t) {}
            if (!e) {
              sessionStorage.removeItem("unlocked");
            }
          }
        }), Oe && m.jsxs(m.Fragment, {
          children: [m.jsx(G, {
            icon: m.jsx(S, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-indigo",
            label: ee("labelLockWallpaper"),
            preview: _e,
            onClick: () => {
              Pt("lock");
              Dt(true);
            }
          }), m.jsxs("div", {
            className: "settings-item icon-color-settings",
            children: [m.jsxs("div", {
              className: "settings-item-main",
              onClick: () => zt(!It),
              children: [m.jsxs("div", {
                className: "settings-item-left",
                children: [m.jsx("div", {
                  className: "settings-item-icon bg-pink",
                  children: m.jsx(k, {
                    size: 20,
                    color: "white"
                  })
                }), m.jsx("span", {
                  className: "settings-item-label",
                  children: ee("labelLockTextColor")
                })]
              }), m.jsxs("div", {
                className: "settings-item-right",
                style: {
                  gap: "8px"
                },
                children: [m.jsx("div", {
                  className: "color-preview-circle",
                  style: {
                    backgroundColor: qe,
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    border: "2px solid rgba(255,255,255,0.3)"
                  }
                }), m.jsx("span", {
                  className: "settings-item-chevron " + (It ? "rotated" : ""),
                  children: "›"
                })]
              })]
            }), It && m.jsxs(m.Fragment, {
              children: [m.jsx("div", {
                className: "icon-color-picker-backdrop",
                style: {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 99,
                  cursor: "default"
                },
                onClick: e => {
                  e.stopPropagation();
                  zt(false);
                }
              }), m.jsx("div", {
                className: "icon-color-picker-panel",
                style: {
                  zIndex: 100,
                  position: "relative"
                },
                onClick: e => e.stopPropagation(),
                children: m.jsx("div", {
                  className: "custom-color-section",
                  children: m.jsxs("div", {
                    className: "color-picker-simple-wrapper",
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      alignItems: "center",
                      padding: "10px 0"
                    },
                    children: [m.jsx("input", {
                      type: "color",
                      value: qe,
                      onChange: e => Je(e.target.value),
                      style: {
                        width: "100%",
                        height: "50px",
                        border: "none",
                        borderRadius: "12px",
                        cursor: "pointer",
                        backgroundColor: "transparent"
                      }
                    }), m.jsxs("div", {
                      style: {
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                      },
                      children: [m.jsx("span", {
                        style: {
                          color: "var(--text-secondary)",
                          fontSize: "14px"
                        },
                        children: "HEX:"
                      }), m.jsx("input", {
                        type: "text",
                        value: qe,
                        onChange: e => Je(e.target.value),
                        placeholder: "#RRGGBB",
                        className: "hex-color-input",
                        style: {
                          flex: 1
                        }
                      })]
                    })]
                  })
                })
              })]
            })]
          }), m.jsxs("div", {
            className: "settings-item",
            style: {
              flexDirection: "column",
              alignItems: "stretch",
              padding: "12px 16px",
              gap: "8px"
            },
            children: [m.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              },
              children: [m.jsxs("div", {
                className: "settings-item-left",
                children: [m.jsx("div", {
                  className: "settings-item-icon bg-orange",
                  style: {
                    background: "#FF9500"
                  },
                  children: m.jsx(C, {
                    size: 20,
                    color: "white"
                  })
                }), m.jsx("span", {
                  className: "settings-item-label",
                  children: ee("labelLockTextSize")
                })]
              }), m.jsxs("span", {
                style: {
                  color: "var(--text-secondary)",
                  fontSize: "15px"
                },
                children: [Math.round(Xe * 100), "%"]
              })]
            }), m.jsx("div", {
              className: "intensity-slider-wrapper",
              style: {
                height: "32px",
                marginTop: "4px"
              },
              children: m.jsx("input", {
                type: "range",
                min: "0.5",
                max: "1.5",
                step: "0.05",
                value: Xe,
                onChange: e => Ve(parseFloat(e.target.value)),
                className: "intensity-slider",
                style: {
                  width: "100%",
                  "--percent": (Xe - 0.5) / 1 * 100 + "%"
                }
              })
            })]
          }), m.jsx(K, {
            icon: m.jsx(N, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: ee("labelPasswordEnabled"),
            checked: He,
            onChange: e => {
              if (e) {
                ft(true);
                St("");
                kt("");
                Nt("");
              } else {
                Ue(false);
                Ge("");
              }
            }
          }), He && m.jsx(G, {
            icon: m.jsx(N, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-red",
            label: ee("labelChangePassword"),
            onClick: () => {
              ft(true);
              St("");
              kt("");
              Nt("");
            }
          })]
        })]
      }), m.jsxs(J, {
        title: ee("sectionHomePage"),
        style: {
          position: "relative",
          zIndex: 30
        },
        children: [m.jsx(K, {
          icon: m.jsx(I, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-green",
          label: ee("labelShowAppLabels"),
          checked: fe,
          onChange: e => {
            ve(e);
          }
        }), m.jsx(K, {
          icon: m.jsx(z, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-purple",
          label: ee("labelDisableAppTransition"),
          checked: Se,
          onChange: we,
          noTransition: !Ce
        }), m.jsxs("div", {
          className: "settings-item dropdown-container",
          onClick: () => Mt(!Tt),
          children: [m.jsxs("div", {
            className: "settings-item-left",
            children: [m.jsx("div", {
              className: "settings-item-icon bg-gray",
              children: m.jsx(k, {
                size: 20,
                color: "white"
              })
            }), m.jsx("span", {
              className: "settings-item-label",
              children: ee("labelTextColor")
            })]
          }), m.jsxs("div", {
            className: "settings-item-right",
            children: [m.jsx("span", {
              className: "settings-item-value",
              children: ee(At === "black" ? "labelTextColorBlack" : "labelTextColorDefault")
            }), m.jsx("span", {
              className: "settings-item-chevron " + (Tt ? "rotated" : ""),
              children: "›"
            })]
          }), Tt && m.jsxs("div", {
            className: "ios-dropdown-menu",
            children: [m.jsxs("div", {
              className: "ios-dropdown-item " + (At !== "black" ? "active" : ""),
              onClick: e => {
                e.stopPropagation();
                us("white");
                Mt(false);
              },
              children: [m.jsx("span", {
                children: ee("labelTextColorDefault")
              }), At !== "black" && m.jsx("span", {
                className: "check-mark",
                children: "✓"
              })]
            }), m.jsxs("div", {
              className: "ios-dropdown-item " + (At === "black" ? "active" : ""),
              onClick: e => {
                e.stopPropagation();
                us("black");
                Mt(false);
              },
              children: [m.jsx("span", {
                children: ee("labelTextColorBlack")
              }), At === "black" && m.jsx("span", {
                className: "check-mark",
                children: "✓"
              })]
            })]
          })]
        }), m.jsx(G, {
          icon: m.jsx(z, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-blue",
          label: ee("labelCustomIcons"),
          onClick: () => Y("custom-icon-screen")
        }), m.jsxs("div", {
          className: "settings-item icon-color-settings",
          children: [m.jsxs("div", {
            className: "settings-item-main",
            onClick: () => Jt(!qt),
            children: [m.jsxs("div", {
              className: "settings-item-left",
              children: [m.jsx("div", {
                className: "settings-item-icon bg-purple",
                children: m.jsx(k, {
                  size: 20,
                  color: "white"
                })
              }), m.jsx("span", {
                className: "settings-item-label",
                children: ee("labelIconColor")
              })]
            }), m.jsxs("div", {
              className: "settings-item-right",
              style: {
                gap: "8px"
              },
              children: [m.jsx("div", {
                className: "color-preview-circle",
                style: {
                  backgroundColor: _t,
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.3)"
                }
              }), m.jsx("span", {
                className: "settings-item-chevron " + (qt ? "rotated" : ""),
                children: "›"
              })]
            })]
          }), qt && m.jsxs(m.Fragment, {
            children: [m.jsx("div", {
              className: "icon-color-picker-backdrop",
              style: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 99,
                cursor: "default"
              },
              onClick: e => {
                e.stopPropagation();
                Jt(false);
              }
            }), m.jsxs("div", {
              className: "icon-color-picker-panel",
              style: {
                zIndex: 100,
                position: "relative"
              },
              onClick: e => e.stopPropagation(),
              children: [m.jsxs("div", {
                className: "color-intensity-section",
                children: [m.jsxs("div", {
                  className: "intensity-label",
                  children: [m.jsx("span", {
                    children: ee("iconColorIntensity")
                  }), m.jsxs("span", {
                    className: "intensity-value",
                    children: [Ht, "%"]
                  })]
                }), m.jsx("div", {
                  className: "intensity-slider-wrapper",
                  children: m.jsx("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    value: Ht,
                    onChange: e => xs(parseInt(e.target.value)),
                    onInput: e => {
                      xs(parseInt(e.target.value));
                    },
                    className: "intensity-slider"
                  })
                })]
              }), m.jsxs("div", {
                className: "custom-color-section",
                children: [m.jsx("div", {
                  className: "section-title",
                  children: ee("iconColorCustom")
                }), m.jsxs("div", {
                  className: "color-picker-simple-wrapper",
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    alignItems: "center",
                    padding: "10px 0"
                  },
                  children: [m.jsx("input", {
                    type: "color",
                    value: _t,
                    onChange: e => {
                      t = e.target.value;
                      Wt(t);
                      Gt(t);
                      Rt(t);
                      hs(t, Ht);
                      return;
                      var t;
                    },
                    style: {
                      width: "100%",
                      height: "50px",
                      border: "none",
                      borderRadius: "12px",
                      cursor: "pointer",
                      backgroundColor: "transparent"
                    }
                  }), m.jsxs("div", {
                    style: {
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    },
                    children: [m.jsx("span", {
                      style: {
                        color: "var(--text-secondary)",
                        fontSize: "14px"
                      },
                      children: "HEX:"
                    }), m.jsx("input", {
                      type: "text",
                      value: Kt,
                      onChange: e => {
                        let t = e.target.value;
                        Gt(t);
                        let s = null;
                        if (/^#[0-9A-Fa-f]{6}$/.test(t)) {
                          s = t;
                        } else if (/^[0-9A-Fa-f]{6}$/.test(t)) {
                          s = "#" + t;
                        }
                        if (s) {
                          Wt(s);
                          Rt(s);
                          hs(s, Ht);
                        }
                      },
                      placeholder: "#RRGGBB",
                      maxLength: 7,
                      className: "hex-color-input",
                      style: {
                        flex: 1
                      }
                    })]
                  })]
                })]
              }), (_t !== "#333333" || Ht !== 100) && m.jsx("button", {
                onClick: e => {
                  e.stopPropagation();
                  (() => {
                    const e = "#333333";
                    Wt(e);
                    Ut(100);
                    Gt(e);
                    Rt(e);
                    $t(100);
                    hs(e, 100);
                  })();
                },
                className: "reset-color-button",
                children: ee("iconColorReset")
              })]
            })]
          })]
        })]
      }), m.jsxs(J, {
        title: ee("sectionSounds"),
        style: {
          position: "relative",
          zIndex: 25
        },
        children: [m.jsx(K, {
          icon: m.jsx(E, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-blue",
          label: ee("labelEnableNotificationSound"),
          checked: Ye,
          onChange: Qe
        }), Ye && m.jsxs(m.Fragment, {
          children: [m.jsx(G, {
            icon: m.jsx(D, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-indigo",
            label: ee("soundUploadHint"),
            value: Ze ? "已自訂" : ee("soundDefault"),
            onClick: () => ks("notification")
          }), m.jsx(K, {
            icon: m.jsx(E, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-blue",
            label: ee("labelOnlyLastMessageSound"),
            checked: ct,
            onChange: dt
          })]
        }), m.jsx(K, {
          icon: m.jsx(B, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-orange",
          label: ee("labelUserMessageSound"),
          checked: pt,
          onChange: gt
        }), pt && m.jsx(G, {
          icon: m.jsx(D, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-indigo",
          label: ee("soundUploadHint"),
          value: mt ? "已自訂" : ee("soundDefault"),
          onClick: () => ks("userMsg")
        }), m.jsx(K, {
          icon: m.jsx(P, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-green",
          label: ee("labelEnableIncomingCallSound"),
          checked: tt,
          onChange: st
        }), tt && m.jsx(G, {
          icon: m.jsx(D, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-indigo",
          label: ee("soundUploadHint"),
          value: nt ? "已自訂" : ee("soundDefault"),
          onClick: () => ks("incoming")
        }), m.jsx(K, {
          icon: m.jsx(B, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-orange",
          label: ee("labelEnableOutgoingCallSound"),
          checked: it,
          onChange: lt
        }), it && m.jsx(G, {
          icon: m.jsx(D, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-indigo",
          label: ee("soundUploadHint"),
          value: ot ? "已自訂" : ee("soundDefault"),
          onClick: () => ks("outgoing")
        }), m.jsx(G, {
          icon: m.jsx(k, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-purple",
          label: ee("labelNotifBarTheme"),
          onClick: () => Y("notification-theme-screen")
        })]
      }), m.jsxs(J, {
        title: ee("sectionSystem"),
        style: {
          position: "relative",
          zIndex: 20
        },
        children: [m.jsx(G, {
          icon: m.jsx(C, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-orange",
          label: ee("labelFont"),
          onClick: () => Y("font-settings-screen")
        }), m.jsxs("div", {
          className: "settings-item",
          style: {
            flexDirection: "column",
            alignItems: "stretch",
            gap: 10,
            paddingTop: 14,
            paddingBottom: 14
          },
          children: [m.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [m.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 12
              },
              children: [m.jsx("div", {
                className: "settings-item-icon bg-blue",
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: m.jsx(A, {
                  size: 20,
                  color: "white"
                })
              }), m.jsx("div", {
                className: "settings-item-label",
                children: te("labelUiScale", "界面大小")
              })]
            }), m.jsxs("div", {
              style: {
                fontSize: 14,
                color: "var(--text-secondary, #888)"
              },
              children: [Math.round(Number(ce) * 100), "%"]
            })]
          }), m.jsx("div", {
            style: {
              display: "flex",
              gap: 6,
              justifyContent: "space-between"
            },
            children: [0.85, 0.9, 1, 1.1, 1.2].map(e => {
              const t = Math.abs(Number(ce) - e) < 0.01;
              return m.jsxs("button", {
                type: "button",
                onClick: () => pe(e),
                style: {
                  flex: 1,
                  padding: "8px 4px",
                  fontSize: 13,
                  background: t ? "#5865F2" : "var(--bg-secondary, #f0f0f0)",
                  color: t ? "#fff" : "var(--text-primary, #333)",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                  fontWeight: t ? 600 : 400
                },
                children: [Math.round(e * 100), "%"]
              }, e);
            })
          }), m.jsx("div", {
            style: {
              fontSize: 12,
              color: "var(--text-secondary, #888)",
              lineHeight: 1.5
            },
            children: te("hintUiScale", "整体缩放糯叽机界面 — 小屏多塞内容选 85/90%,看不清选 110/120%。设置在所有设备同步。")
          })]
        }), (i() || l()) && m.jsxs("div", {
          className: "settings-item",
          style: {
            flexDirection: "column",
            alignItems: "stretch",
            gap: 10,
            paddingTop: 14,
            paddingBottom: 14
          },
          children: [m.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [m.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 12
              },
              children: [m.jsx("div", {
                className: "settings-item-icon bg-blue",
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: m.jsx(A, {
                  size: 20,
                  color: "white"
                })
              }), m.jsx("div", {
                className: "settings-item-label",
                children: te("labelApkTopOffset", "顶栏高度微调")
              })]
            }), m.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 10
              },
              children: [m.jsxs("div", {
                style: {
                  fontSize: 14,
                  color: "var(--text-secondary, #888)"
                },
                children: [(Number(ge) > 0 ? "+" : "") + (Number(ge) || 0), "px"]
              }), (Number(ge) || 0) !== 0 && m.jsx("button", {
                type: "button",
                onClick: () => me(0),
                style: {
                  padding: "3px 10px",
                  fontSize: 12,
                  background: "var(--bg-secondary, #f0f0f0)",
                  color: "var(--text-primary, #333)",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer"
                },
                children: te("reset", "归零")
              })]
            })]
          }), m.jsx("div", {
            className: "intensity-slider-wrapper",
            style: {
              height: "32px"
            },
            children: m.jsx("input", {
              type: "range",
              min: "-80",
              max: "80",
              step: "1",
              value: Number(ge) || 0,
              onChange: e => me(parseInt(e.target.value, 10)),
              className: "intensity-slider",
              style: {
                width: "100%",
                "--percent": ((Number(ge) || 0) + 80) / 160 * 100 + "%"
              }
            })
          }), m.jsx("div", {
            style: {
              fontSize: 12,
              color: "var(--text-secondary, #888)",
              lineHeight: 1.5
            },
            children: te("hintApkTopOffset", "顶栏和系统状态栏没对齐时手动微调:顶栏被状态栏盖住→调大(+);顶栏下方空一块→调小(-)。仅本机生效。")
          })]
        }), (i() || l()) && m.jsxs("div", {
          className: "settings-item",
          style: {
            flexDirection: "column",
            alignItems: "stretch",
            gap: 10,
            paddingTop: 14,
            paddingBottom: 14
          },
          children: [m.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [m.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 12
              },
              children: [m.jsx("div", {
                className: "settings-item-icon bg-blue",
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: m.jsx(A, {
                  size: 20,
                  color: "white"
                })
              }), m.jsx("div", {
                className: "settings-item-label",
                children: te("labelApkBottomOffset", "底栏高度微调")
              })]
            }), m.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 10
              },
              children: [m.jsxs("div", {
                style: {
                  fontSize: 14,
                  color: "var(--text-secondary, #888)"
                },
                children: [(Number(ue) > 0 ? "+" : "") + (Number(ue) || 0), "px"]
              }), (Number(ue) || 0) !== 0 && m.jsx("button", {
                type: "button",
                onClick: () => he(0),
                style: {
                  padding: "3px 10px",
                  fontSize: 12,
                  background: "var(--bg-secondary, #f0f0f0)",
                  color: "var(--text-primary, #333)",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer"
                },
                children: te("reset", "归零")
              })]
            })]
          }), m.jsx("div", {
            className: "intensity-slider-wrapper",
            style: {
              height: "32px"
            },
            children: m.jsx("input", {
              type: "range",
              min: "-120",
              max: "120",
              step: "1",
              value: Number(ue) || 0,
              onChange: e => he(parseInt(e.target.value, 10)),
              className: "intensity-slider",
              style: {
                width: "100%",
                "--percent": ((Number(ue) || 0) + 120) / 240 * 100 + "%"
              }
            })
          }), m.jsx("div", {
            style: {
              fontSize: 12,
              color: "var(--text-secondary, #888)",
              lineHeight: 1.5
            },
            children: te("hintApkBottomOffset", "底栏和系统导航条没对齐时手动微调:底栏被导航条盖住→调大(+);底栏下方空一块→调小(-)。仅本机生效。")
          })]
        }), (i() || l()) && m.jsxs("div", {
          className: "settings-item",
          style: {
            flexDirection: "column",
            alignItems: "stretch",
            gap: 10,
            paddingTop: 14,
            paddingBottom: 14
          },
          children: [m.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [m.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 12
              },
              children: [m.jsx("div", {
                className: "settings-item-icon bg-blue",
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: m.jsx(A, {
                  size: 20,
                  color: "white"
                })
              }), m.jsx("div", {
                className: "settings-item-label",
                children: te("labelApkKbOffset", "键盘高度微调")
              })]
            }), m.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 10
              },
              children: [m.jsxs("div", {
                style: {
                  fontSize: 14,
                  color: "var(--text-secondary, #888)"
                },
                children: [(Number(xe) > 0 ? "+" : "") + (Number(xe) || 0), "px"]
              }), (Number(xe) || 0) !== 0 && m.jsx("button", {
                type: "button",
                onClick: () => be(0),
                style: {
                  padding: "3px 10px",
                  fontSize: 12,
                  background: "var(--bg-secondary, #f0f0f0)",
                  color: "var(--text-primary, #333)",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer"
                },
                children: te("reset", "归零")
              })]
            })]
          }), m.jsx("div", {
            className: "intensity-slider-wrapper",
            style: {
              height: "32px"
            },
            children: m.jsx("input", {
              type: "range",
              min: "-500",
              max: "500",
              step: "2",
              value: Number(xe) || 0,
              onChange: e => be(parseInt(e.target.value, 10)),
              className: "intensity-slider",
              style: {
                width: "100%",
                "--percent": ((Number(xe) || 0) + 500) / 1000 * 100 + "%"
              }
            })
          }), m.jsx("div", {
            style: {
              fontSize: 12,
              color: "var(--text-secondary, #888)",
              lineHeight: 1.5
            },
            children: te("hintApkKbOffset", "打字时输入框位置不对再微调:输入框上方空一段→调大(+);输入框被键盘盖住一点→调小(-)。仅本机生效。")
          })]
        }), m.jsx(K, {
          icon: m.jsx(L, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-gray",
          label: ee("labelShowStatusBar"),
          checked: ye,
          onChange: e => {
            je(e);
          }
        }), m.jsx(K, {
          icon: m.jsx(T, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-purple",
          label: ee("labelDarkMode"),
          checked: ie,
          onChange: e => {
            le(e);
          }
        }), m.jsx(K, {
          icon: m.jsx(M, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-green",
          label: te("labelHaptics", "振动反馈"),
          checked: js,
          onChange: e => {
            j(e);
            fs(e);
            if (e) {
              try {
                f.light();
              } catch (Cs) {}
            }
          }
        }), m.jsxs("div", {
          className: "settings-item",
          style: {
            flexDirection: "column",
            alignItems: "stretch",
            gap: 8,
            paddingTop: 12,
            paddingBottom: 12
          },
          children: [m.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 12
            },
            children: [m.jsx("div", {
              className: "settings-item-icon bg-gray",
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: m.jsx(L, {
                size: 20,
                color: "white"
              })
            }), m.jsx("div", {
              className: "settings-item-label",
              style: {
                flex: 1
              },
              children: te("labelStatusBarTint", "状态栏字色")
            })]
          }), m.jsx("div", {
            style: {
              display: "flex",
              gap: 6,
              paddingLeft: 48
            },
            children: [{
              v: "auto",
              label: te("statusBarAuto", "自动")
            }, {
              v: "dark",
              label: te("statusBarDark", "黑字")
            }, {
              v: "light",
              label: te("statusBarLight", "白字")
            }].map(e => {
              const t = (oe || "auto") === e.v;
              return m.jsx("button", {
                type: "button",
                onClick: () => re(e.v),
                style: {
                  flex: 1,
                  padding: "7px 4px",
                  fontSize: 13,
                  background: t ? "#5865F2" : "var(--bg-secondary, #f0f0f0)",
                  color: t ? "#fff" : "var(--text-primary, #333)",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                  fontWeight: t ? 600 : 400
                },
                children: e.label
              }, e.v);
            })
          }), m.jsx("div", {
            style: {
              fontSize: 12,
              color: "var(--text-secondary, #888)",
              paddingLeft: 48,
              lineHeight: 1.5
            },
            children: te("hintStatusBarTint", "壁纸太浅看不清时强制黑字,壁纸太深时强制白字。仅 Android APK。")
          })]
        }), !l() && m.jsx(K, {
          icon: m.jsx(A, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-blue",
          label: ee("labelFullscreen"),
          checked: vs,
          onChange: async e => {
            var t;
            var s;
            var n;
            var a;
            Ss(e);
            try {
              if (typeof window != "undefined" && ((s = (t = window.Capacitor) == null ? undefined : t.isNativePlatform) == null ? undefined : s.call(t)) && ((a = (n = window.Capacitor).getPlatform) == null ? undefined : a.call(n)) === "android") {
                const {
                  registerPlugin: t
                } = await r(async () => {
                  const {
                    registerPlugin: e
                  } = await import("./native-pet-CTNtZgMA.js").then(e => e.cE);
                  return {
                    registerPlugin: e
                  };
                }, __vite__mapDeps([0, 1, 2, 3, 4, 5]));
                const s = t("SystemUI");
                await s.setImmersive({
                  enabled: !!e
                });
              }
            } catch (i) {
              console.warn("[fullscreen] APK native failed:", i == null ? undefined : i.message);
            }
            if (!l()) {
              try {
                if (e) {
                  if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
                    await document.documentElement.requestFullscreen();
                  }
                } else if (document.exitFullscreen && document.fullscreenElement) {
                  await document.exitFullscreen();
                }
              } catch (o) {
                console.warn("[fullscreen] 切換失敗:", o);
                if (e) {
                  Ss(false);
                }
              }
            }
          }
        }), !l() && vs && m.jsx("div", {
          style: {
            padding: "4px 16px 12px 60px",
            fontSize: 12,
            color: "var(--text-secondary, #888)",
            lineHeight: 1.5,
            marginTop: -8
          },
          children: ee("fullscreenHint")
        }), m.jsx(q, {
          icon: m.jsx(F, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-blue",
          label: ee("labelLanguage"),
          currentLanguage: Q,
          onLanguageChange: Z,
          t: ee
        }), m.jsx(K, {
          icon: m.jsx(z, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-pink",
          label: ee("dynamicIslandAlwaysOn"),
          checked: ze,
          onChange: Ee
        }), ze && m.jsxs("div", {
          style: {
            padding: "0 4px"
          },
          children: [m.jsx("div", {
            style: {
              padding: "10px 12px 6px",
              fontSize: "12px",
              color: "var(--text-secondary)",
              fontWeight: 500
            },
            children: "靈動島裝飾"
          }), m.jsx("div", {
            style: {
              display: "flex",
              gap: "8px",
              padding: "4px 12px 12px",
              overflowX: "auto",
              scrollbarWidth: "none"
            },
            children: [{
              key: "none",
              label: "無",
              emoji: "⬛"
            }, {
              key: "hanging",
              label: "懸吊",
              emoji: "🎐"
            }, {
              key: "floating",
              label: "漂浮",
              emoji: "🫧"
            }, {
              key: "photo-right",
              label: "相片",
              emoji: "🖼️"
            }, {
              key: "status-card",
              label: "狀態卡",
              emoji: "💬"
            }].map(e => m.jsxs("button", {
              onClick: () => Be(e.key),
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                padding: "10px 14px",
                borderRadius: "14px",
                border: "none",
                cursor: "pointer",
                flexShrink: 0,
                background: De === e.key ? "var(--accent-color, #007aff)" : "var(--settings-item-bg, rgba(0,0,0,0.05))",
                color: De === e.key ? "#fff" : "var(--text-primary)",
                transition: "all 0.2s"
              },
              children: [m.jsx("span", {
                style: {
                  fontSize: "22px"
                },
                children: e.emoji
              }), m.jsx("span", {
                style: {
                  fontSize: "11px",
                  fontWeight: 500
                },
                children: e.label
              })]
            }, e.key))
          }), De !== "none" && (() => {
            const e = {
              hanging: {
                key: "hanging",
                settingsKey: "islandDecoHanging",
                label: "上傳懸吊 GIF / 圖片（建議正方形）",
                img: Me.hanging,
                round: false
              },
              floating: {
                key: "floating",
                settingsKey: "islandDecoFloating",
                label: "上傳漂浮 GIF / 圖片",
                img: Me.floating,
                round: false
              },
              "photo-right": {
                key: "photoRight",
                settingsKey: "islandDecoPhotoRight",
                label: "上傳圓形照片",
                img: Me.photoRight,
                round: true
              },
              "status-card": {
                key: "statusPhoto",
                settingsKey: "islandDecoStatusPhoto",
                label: "狀態頭像（可選）",
                img: Me.statusPhoto,
                round: true
              }
            }[De];
            if (e) {
              return m.jsxs("div", {
                style: {
                  padding: "0 12px 12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px"
                },
                children: [De === "status-card" && m.jsxs(m.Fragment, {
                  children: [m.jsx("div", {
                    style: {
                      fontSize: "12px",
                      color: "var(--text-secondary)"
                    },
                    children: "狀態文字（長按靈動島展開顯示）"
                  }), m.jsx("input", {
                    type: "text",
                    maxLength: 20,
                    placeholder: "今天也要加油！",
                    value: Pe,
                    onChange: e => Ae(e.target.value),
                    style: {
                      padding: "10px 14px",
                      borderRadius: "12px",
                      fontSize: "14px",
                      border: "1px solid var(--border-color, rgba(0,0,0,0.1))",
                      background: "var(--settings-item-bg, rgba(0,0,0,0.05))",
                      color: "var(--text-primary)",
                      outline: "none"
                    }
                  })]
                }), m.jsx("div", {
                  style: {
                    fontSize: "12px",
                    color: "var(--text-secondary)"
                  },
                  children: e.label
                }), m.jsxs("div", {
                  onClick: () => Te(e.key),
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 14px",
                    borderRadius: "12px",
                    background: "var(--settings-item-bg, rgba(0,0,0,0.05))",
                    cursor: "pointer"
                  },
                  children: [e.img && m.jsx("img", {
                    decoding: "async",
                    src: e.img,
                    style: {
                      width: 36,
                      height: 36,
                      objectFit: e.round ? "cover" : "contain",
                      borderRadius: e.round ? "50%" : 8
                    }
                  }), m.jsx("span", {
                    style: {
                      fontSize: "14px",
                      color: "var(--text-primary)"
                    },
                    children: e.img ? "重新上傳" : "選擇圖片 / URL"
                  })]
                }), e.img && m.jsx("button", {
                  onClick: () => Re(e.key, e.settingsKey, null),
                  style: {
                    fontSize: 12,
                    color: "#ff3b30",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "4px 0",
                    textAlign: "left"
                  },
                  children: "刪除圖片"
                })]
              });
            } else {
              return null;
            }
          })()]
        }), m.jsx(G, {
          icon: m.jsx(R, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-red",
          label: ee("resetMessagingTheme"),
          onClick: async () => {
            if (await c(ee("resetMessagingThemeConfirm"))) {
              try {
                await x();
                d(ee("resetMessagingThemeDone"));
              } catch (e) {
                d(ee("resetMessagingThemeFailed") + ": " + ((e == null ? undefined : e.message) || e));
              }
            }
          }
        }), m.jsx(G, {
          icon: m.jsx(R, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-red",
          label: ee("resetForumTheme"),
          onClick: async () => {
            if (await c(ee("resetForumThemeConfirm"))) {
              try {
                await b();
                d(ee("resetForumThemeDone"));
              } catch (e) {
                d(ee("resetForumThemeFailed") + ": " + ((e == null ? undefined : e.message) || e));
              }
            }
          }
        })]
      }), m.jsxs(J, {
        title: ee("sectionPresets"),
        style: {
          position: "relative",
          zIndex: 15
        },
        children: [Qt.length > 0 && m.jsx("div", {
          className: "preset-list",
          children: Qt.map(e => {
            var t;
            return m.jsxs("div", {
              className: "settings-item preset-item " + (Zt === e.id ? "preset-active" : ""),
              style: {
                position: "relative"
              },
              children: [m.jsxs("div", {
                className: "settings-item-left",
                style: {
                  flex: 1,
                  cursor: "pointer"
                },
                onClick: () => (async e => {
                  const t = e.data;
                  const s = [];
                  const n = (e, t) => {
                    if (t !== undefined) {
                      s.push(a.set(e, t));
                    }
                  };
                  n("homeWallpaper", t.homeWallpaper);
                  n("darkMode", t.darkMode);
                  n("showStatusBar", t.showStatusBar);
                  n("showAppLabels", t.showAppLabels);
                  n("reduceAppTransition", t.reduceAppTransition);
                  n("dynamicIslandStyle", t.dynamicIslandStyle);
                  n("dynamicIslandAlwaysOn", t.dynamicIslandAlwaysOn);
                  n("textColor", t.textColor);
                  n("iconColor", t.iconColor);
                  n("iconColorIntensity", t.iconColorIntensity);
                  n("lockScreenEnabled", t.lockScreenEnabled);
                  n("lockScreenWallpaper", t.lockScreenWallpaper);
                  n("lockScreenTextColor", t.lockScreenTextColor);
                  n("lockScreenTextSize", t.lockScreenTextSize);
                  n("notificationSoundEnabled", t.notificationSoundEnabled);
                  n("notificationSoundData", t.notificationSoundData);
                  n("incomingCallSoundEnabled", t.incomingCallSoundEnabled);
                  n("incomingCallSoundData", t.incomingCallSoundData);
                  n("outgoingCallSoundEnabled", t.outgoingCallSoundEnabled);
                  n("outgoingCallSoundData", t.outgoingCallSoundData);
                  n("userMessageSoundEnabled", t.userMessageSoundEnabled);
                  n("userMessageSoundData", t.userMessageSoundData);
                  n("onlyLastMessageSound", t.onlyLastMessageSound);
                  if (t.homeScreenLayout) {
                    const e = ys(t.homeScreenLayout);
                    s.push(a.set("homeScreenLayout", e));
                  }
                  if (t.appCustomizations) {
                    const e = ys(t.appCustomizations);
                    s.push(a.set("appCustomizations", e));
                  }
                  await Promise.all(s);
                  es(e.id);
                  window.location.reload();
                })(e),
                children: [m.jsx("div", {
                  className: "settings-item-icon " + (Zt === e.id ? "bg-green" : "bg-gray"),
                  children: Zt === e.id ? m.jsx(O, {
                    size: 20,
                    color: "white"
                  }) : m.jsx($, {
                    size: 20,
                    color: "white"
                  })
                }), m.jsxs("div", {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px"
                  },
                  children: [m.jsx("span", {
                    className: "settings-item-label",
                    children: e.name
                  }), m.jsx("span", {
                    style: {
                      fontSize: "12px",
                      color: "var(--text-secondary)",
                      opacity: 0.7
                    },
                    children: new Date(e.createdAt).toLocaleDateString()
                  })]
                })]
              }), m.jsxs("div", {
                className: "settings-item-right",
                style: {
                  gap: "4px",
                  flexShrink: 0
                },
                children: [((t = e.data) == null ? undefined : t.iconColor) && m.jsx("div", {
                  style: {
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: e.data.iconColor,
                    border: "2px solid rgba(255,255,255,0.3)",
                    flexShrink: 0
                  }
                }), m.jsx("button", {
                  onClick: t => {
                    t.stopPropagation();
                    (async e => {
                      try {
                        const t = await ps();
                        Yt(s => (Array.isArray(s) ? s : []).map(s => s.id === e ? {
                          ...s,
                          data: t,
                          createdAt: new Date().toISOString()
                        } : s));
                        es(e);
                      } catch (t) {
                        console.error("Overwrite preset failed:", t);
                        d(ee("exportError") + ": " + t.message);
                      }
                    })(e.id);
                  },
                  className: "preset-action-btn",
                  title: ee("presetOverwrite"),
                  style: {
                    background: "none",
                    border: "none",
                    padding: "6px",
                    cursor: "pointer",
                    color: "var(--text-secondary)",
                    display: "flex",
                    alignItems: "center"
                  },
                  children: m.jsx(_, {
                    size: 16
                  })
                }), m.jsx("button", {
                  onClick: t => {
                    t.stopPropagation();
                    ls(e.id);
                    ds(e.name);
                    rs(true);
                  },
                  className: "preset-action-btn",
                  title: ee("presetRename"),
                  style: {
                    background: "none",
                    border: "none",
                    padding: "6px",
                    cursor: "pointer",
                    color: "var(--text-secondary)",
                    display: "flex",
                    alignItems: "center"
                  },
                  children: m.jsx(W, {
                    size: 16
                  })
                }), m.jsx("button", {
                  onClick: t => {
                    var s;
                    t.stopPropagation();
                    s = e.id;
                    Yt(e => (Array.isArray(e) ? e : []).filter(e => e.id !== s));
                    if (Zt === s) {
                      es(null);
                    }
                  },
                  className: "preset-action-btn",
                  title: ee("presetDelete"),
                  style: {
                    background: "none",
                    border: "none",
                    padding: "6px",
                    cursor: "pointer",
                    color: "#ff3b30",
                    display: "flex",
                    alignItems: "center"
                  },
                  children: m.jsx(R, {
                    size: 16
                  })
                })]
              })]
            }, e.id);
          })
        }), m.jsxs("div", {
          className: "settings-item",
          onClick: () => {
            as("");
            ss(true);
          },
          style: {
            cursor: "pointer"
          },
          children: [m.jsxs("div", {
            className: "settings-item-left",
            children: [m.jsx("div", {
              className: "settings-item-icon bg-blue",
              children: m.jsx(_, {
                size: 20,
                color: "white"
              })
            }), m.jsx("span", {
              className: "settings-item-label",
              children: ee("presetSaveCurrent")
            })]
          }), m.jsx("div", {
            className: "settings-item-right",
            children: m.jsx("span", {
              className: "settings-item-chevron",
              children: "›"
            })
          })]
        }), m.jsx("div", {
          className: "settings-hint",
          children: ee("presetDesc")
        })]
      }), m.jsxs(J, {
        title: ee("sectionLayoutBackup"),
        style: {
          position: "relative",
          zIndex: 10
        },
        children: [m.jsxs("div", {
          className: "settings-item",
          onClick: async () => {
            try {
              const e = await a.get("homeScreenLayout");
              const t = await a.get("appCustomizations");
              const s = {
                version: "2.0",
                exportDate: new Date().toISOString(),
                userAgent: navigator.userAgent,
                homeWallpaper: ne,
                darkMode: ie,
                showStatusBar: ye,
                showAppLabels: fe,
                dynamicIslandStyle: Ie,
                dynamicIslandAlwaysOn: ze,
                textColor: At,
                iconColor: _t,
                iconColorIntensity: Ht,
                lockScreenEnabled: Oe,
                lockScreenWallpaper: _e,
                lockPasswordEnabled: He,
                lockPassword: Ke,
                lockScreenTextColor: qe,
                lockScreenTextSize: Xe,
                notificationSoundEnabled: Ye,
                notificationSoundData: Ze,
                incomingCallSoundEnabled: tt,
                incomingCallSoundData: nt,
                outgoingCallSoundEnabled: it,
                outgoingCallSoundData: ot,
                userMessageSoundEnabled: pt,
                userMessageSoundData: mt,
                homeScreenLayout: await bs(e),
                appCustomizations: await bs(t)
              };
              const n = JSON.stringify(s, null, 2);
              const i = new Blob([n], {
                type: "application/json"
              });
              const l = new Date();
              const o = `${l.getFullYear()}${String(l.getMonth() + 1).padStart(2, "0")}${String(l.getDate()).padStart(2, "0")}`;
              await p(i, `nuojiji_appearance_${o}.json`);
            } catch (e) {
              console.error("Export failed:", e);
              d(ee("exportError") + ": " + e.message);
            }
          },
          children: [m.jsxs("div", {
            className: "settings-item-left",
            children: [m.jsx("div", {
              className: "settings-item-icon bg-green",
              children: m.jsx(H, {
                size: 20,
                color: "white"
              })
            }), m.jsx("span", {
              className: "settings-item-label",
              children: ee("labelExportLayout")
            })]
          }), m.jsx("div", {
            className: "settings-item-right",
            children: m.jsx("span", {
              className: "settings-item-chevron",
              children: "›"
            })
          })]
        }), m.jsxs("div", {
          className: "settings-item",
          onClick: () => {
            var e;
            if ((e = Xt.current) == null) {
              return undefined;
            } else {
              return e.click();
            }
          },
          children: [m.jsxs("div", {
            className: "settings-item-left",
            children: [m.jsx("div", {
              className: "settings-item-icon bg-orange",
              children: m.jsx(U, {
                size: 20,
                color: "white"
              })
            }), m.jsx("span", {
              className: "settings-item-label",
              children: ee("labelImportLayout")
            })]
          }), m.jsx("div", {
            className: "settings-item-right",
            children: m.jsx("span", {
              className: "settings-item-chevron",
              children: "›"
            })
          })]
        }), m.jsx("input", {
          type: "file",
          ref: Xt,
          style: {
            display: "none"
          },
          accept: i() || l() ? undefined : ".json,application/json,application/octet-stream",
          onChange: e => {
            var t;
            const s = (t = e.target.files) == null ? undefined : t[0];
            if (!s) {
              return;
            }
            const n = new FileReader();
            n.onload = async e => {
              try {
                const t = e.target.result;
                const s = JSON.parse(t);
                if (!s.version || !s.exportDate) {
                  d(ee("importError"));
                  return;
                }
                if (!(await c(ee("importConfirm")))) {
                  return;
                }
                const n = [];
                const i = (e, t) => {
                  if (t !== undefined) {
                    n.push(a.set(e, t));
                  }
                };
                i("homeWallpaper", s.homeWallpaper);
                i("darkMode", s.darkMode);
                i("showStatusBar", s.showStatusBar);
                i("showAppLabels", s.showAppLabels);
                i("dynamicIslandStyle", s.dynamicIslandStyle);
                i("dynamicIslandAlwaysOn", s.dynamicIslandAlwaysOn);
                i("textColor", s.textColor);
                i("iconColor", s.iconColor);
                i("iconColorIntensity", s.iconColorIntensity);
                i("lockScreenEnabled", s.lockScreenEnabled);
                i("lockScreenWallpaper", s.lockScreenWallpaper);
                i("lockPasswordEnabled", s.lockPasswordEnabled);
                i("lockPassword", s.lockPassword);
                i("lockScreenTextColor", s.lockScreenTextColor);
                i("lockScreenTextSize", s.lockScreenTextSize);
                i("notificationSoundEnabled", s.notificationSoundEnabled);
                i("notificationSoundData", s.notificationSoundData);
                i("incomingCallSoundEnabled", s.incomingCallSoundEnabled);
                i("incomingCallSoundData", s.incomingCallSoundData);
                i("outgoingCallSoundEnabled", s.outgoingCallSoundEnabled);
                i("outgoingCallSoundData", s.outgoingCallSoundData);
                i("userMessageSoundEnabled", s.userMessageSoundEnabled);
                i("userMessageSoundData", s.userMessageSoundData);
                if (s.homeScreenLayout) {
                  const e = ys(s.homeScreenLayout);
                  n.push(a.set("homeScreenLayout", e));
                }
                if (s.appCustomizations) {
                  const e = ys(s.appCustomizations);
                  n.push(a.set("appCustomizations", e));
                }
                await Promise.all(n);
                d(ee("importSuccess"));
                window.location.reload();
              } catch (t) {
                console.error("Import failed:", t);
                d(ee("importError") + ": " + t.message);
              }
            };
            n.readAsText(s);
            e.target.value = "";
          }
        }), m.jsx("div", {
          className: "settings-hint",
          children: ee("exportLayoutDesc")
        })]
      })]
    }), jt && m.jsx("div", {
      className: "password-modal-overlay",
      onClick: ws,
      children: m.jsxs("div", {
        className: "password-modal",
        onClick: e => e.stopPropagation(),
        children: [m.jsx("h3", {
          children: ee("pwdSetTitle")
        }), m.jsx("p", {
          className: "password-modal-hint",
          children: ee("pwdSetHint")
        }), m.jsxs("div", {
          className: "password-input-group",
          children: [m.jsx("label", {
            children: ee("pwdNew")
          }), m.jsx("input", {
            type: "password",
            inputMode: "numeric",
            maxLength: 4,
            value: vt,
            onChange: e => St(e.target.value.replace(/\D/g, "")),
            placeholder: ee("pwdPlaceholder")
          })]
        }), m.jsxs("div", {
          className: "password-input-group",
          children: [m.jsx("label", {
            children: ee("pwdConfirm")
          }), m.jsx("input", {
            type: "password",
            inputMode: "numeric",
            maxLength: 4,
            value: wt,
            onChange: e => kt(e.target.value.replace(/\D/g, "")),
            placeholder: ee("pwdPlaceholder")
          })]
        }), Ct && m.jsx("div", {
          className: "password-error",
          children: Ct
        }), m.jsxs("div", {
          className: "password-modal-buttons",
          children: [m.jsx("button", {
            className: "btn-cancel",
            onClick: ws,
            children: ee("pwdBtnCancel")
          }), m.jsx("button", {
            className: "btn-save",
            onClick: () => {
              if (vt.length === 4) {
                if (/^\d{4}$/.test(vt)) {
                  if (vt === wt) {
                    Ge(vt);
                    Ue(true);
                    ft(false);
                    St("");
                    kt("");
                    Nt("");
                  } else {
                    Nt(ee("pwdErrMatch"));
                  }
                } else {
                  Nt(ee("pwdErrDigits"));
                }
              } else {
                Nt(ee("pwdErrLength"));
              }
            },
            children: ee("pwdBtnSave")
          })]
        })]
      })
    }), m.jsx(o, {
      isOpen: Et,
      onClose: () => Dt(false),
      onImageSelect: e => {
        if (Bt === "home") {
          ae(e);
          window.dispatchEvent(new CustomEvent("wallpaper-changed", {
            detail: e
          }));
        } else if (Bt === "lock") {
          We(e);
        }
      },
      title: ee(Bt === "home" ? "labelHomeWallpaper" : "labelLockWallpaper"),
      compressProfile: "wallpaper"
    }), m.jsx(o, {
      isOpen: !!Le,
      onClose: () => Te(null),
      onImageSelect: e => {
        if (Le) {
          Re(Le, {
            hanging: "islandDecoHanging",
            floating: "islandDecoFloating",
            photoRight: "islandDecoPhotoRight",
            statusPhoto: "islandDecoStatusPhoto"
          }[Le], e);
          Te(null);
        }
      },
      title: "靈動島裝飾圖片"
    }), m.jsx(u, {
      isOpen: ht,
      onClose: () => xt(false),
      onAudioSelect: e => {
        const t = bt;
        if (t === "notification") {
          et(e);
        } else if (t === "incoming") {
          at(e);
        } else if (t === "outgoing") {
          rt(e);
        } else if (t === "userMsg") {
          ut(e);
        }
      },
      title: ee("soundUploadTitle") || "上傳音效",
      hasExisting: bt === "notification" ? !!Ze : bt === "incoming" ? !!nt : bt === "outgoing" ? !!ot : bt === "userMsg" && !!mt
    }), ts && m.jsx("div", {
      className: "password-modal-overlay",
      onClick: () => ss(false),
      children: m.jsxs("div", {
        className: "password-modal",
        onClick: e => e.stopPropagation(),
        children: [m.jsx("h3", {
          children: ee("presetSaveTitle")
        }), m.jsxs("div", {
          className: "password-input-group",
          children: [m.jsx("label", {
            children: ee("presetNameLabel")
          }), m.jsx("input", {
            type: "text",
            value: ns,
            onChange: e => as(e.target.value),
            placeholder: ee("presetNamePlaceholder"),
            maxLength: 20,
            autoFocus: true,
            onKeyDown: e => {
              if (e.key === "Enter") {
                gs();
              }
            }
          })]
        }), m.jsxs("div", {
          className: "password-modal-buttons",
          children: [m.jsx("button", {
            className: "btn-cancel",
            onClick: () => ss(false),
            children: ee("pwdBtnCancel")
          }), m.jsx("button", {
            className: "btn-save",
            onClick: gs,
            disabled: !ns.trim(),
            children: ee("pwdBtnSave")
          })]
        })]
      })
    }), os && m.jsx("div", {
      className: "password-modal-overlay",
      onClick: () => {
        rs(false);
        ls(null);
      },
      children: m.jsxs("div", {
        className: "password-modal",
        onClick: e => e.stopPropagation(),
        children: [m.jsx("h3", {
          children: ee("presetRenameTitle")
        }), m.jsxs("div", {
          className: "password-input-group",
          children: [m.jsx("label", {
            children: ee("presetNameLabel")
          }), m.jsx("input", {
            type: "text",
            value: cs,
            onChange: e => ds(e.target.value),
            placeholder: ee("presetNamePlaceholder"),
            maxLength: 20,
            autoFocus: true,
            onKeyDown: e => {
              if (e.key === "Enter") {
                ms();
              }
            }
          })]
        }), m.jsxs("div", {
          className: "password-modal-buttons",
          children: [m.jsx("button", {
            className: "btn-cancel",
            onClick: () => {
              rs(false);
              ls(null);
            },
            children: ee("pwdBtnCancel")
          }), m.jsx("button", {
            className: "btn-save",
            onClick: ms,
            disabled: !cs.trim(),
            children: ee("pwdBtnSave")
          })]
        })]
      })
    })]
  });
};
export { X as default };