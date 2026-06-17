import { G as e } from "./native-pet-CTNtZgMA.js";
import { B as t } from "./main-BO9xa-SQ.js";
import "./vendor-react-B2VXkTUV.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
import "./vendor-lucide-DBv09HTV.js";
import "./modulepreload-polyfill-YP0FEG5d.js";
/* empty css                        */
import "./vendor-supabase-Bcpm_8qV.js";
/* empty css                     */
const n = "messaging_app_custom_theme";
const a = "messaging_app_saved_themes";
const r = "messaging_app_active_preset_id";
const s = "messaging-app-theme-style";
const i = ["#messaging-chat-tab", "#messaging-moments-tab", "#messaging-profile-tab", "#messaging-favorites-tab", "#messaging-bottom-bar"];
function o(e) {
  if (!e) {
    return "";
  }
  const t = [];
  let n = "";
  let a = 0;
  const r = /@(?:-webkit-)?(?:keyframes|media|supports)\b/;
  while (a < e.length) {
    const s = e.slice(a);
    const i = s.match(r);
    if (!i) {
      n += s;
      break;
    }
    n += s.slice(0, i.index);
    const o = /^@(?:-webkit-)?(?:media|supports)\b/.test(s.slice(i.index));
    const c = e.indexOf("{", a + i.index);
    if (c === -1) {
      n += s.slice(i.index);
      break;
    }
    let l = 0;
    let m = c;
    do {
      if (e[m] === "{") {
        l++;
      } else if (e[m] === "}") {
        l--;
      }
      m++;
    } while (l > 0 && m < e.length);
    t.push({
      raw: e.slice(a + i.index, m),
      isMediaLike: o,
      braceStart: c - (a + i.index)
    });
    n += `\n.__nuo_at_${t.length - 1}__{}\n`;
    a = m;
  }
  n = n.replace(/\/\*[\s\S]*?\*\//g, "");
  return n.replace(/(^|\})\s*([^@{}][^{]*)\{/g, (e, t, n) => {
    if (/\.__nuo_at_\d+__/.test(n)) {
      return e;
    }
    const a = n.split(",").map(e => e.trim()).filter(Boolean).flatMap(e => function (e) {
      const t = [];
      let n;
      let a = e.trim();
      while (n = a.match(c)) {
        t.push(n[1]);
        a = a.slice(n[0].length).trim();
      }
      const r = t.length ? t.join("") + " " : "";
      if (a === ":root" || t.length && a === "") {
        return i.map(e => r ? `${r}${e}` : e);
      }
      if (i.some(e => a.includes(e))) {
        return [r ? `${r}${a}` : a];
      }
      let s = "";
      const o = a.replace(/(?:::[\w-]+(?:\([^)]*\))?|:(?:before|after|first-line|first-letter))$/, e => {
        s = e;
        return "";
      });
      if (!o) {
        return i.flatMap(e => [`${r}${e}${s}`, `${r}${e} *${s}`]);
      }
      let l = -1;
      {
        let e = 0;
        let t = 0;
        for (let n = 0; n < o.length; n++) {
          const a = o[n];
          if (a === "[") {
            e++;
          } else if (a === "]") {
            e--;
          } else if (a === "(") {
            t++;
          } else if (a === ")") {
            t--;
          } else if (e === 0 && t === 0 && (a === " " || a === "\t" || a === ">" || a === "+" || a === "~")) {
            l = n;
            break;
          }
        }
      }
      const m = l > 0 ? o.slice(0, l) : o;
      const d = l > 0 ? o.slice(l) : "";
      return i.flatMap(e => [`${r}:is(${e}${m})${d}${s}`, `${r}${e} ${o}${s}`]);
    }(e)).join(", ");
    if (a) {
      return `${t} ${a} {`;
    } else {
      return e;
    }
  }).replace(/\.__nuo_at_(\d+)__\{\}/g, (e, n) => {
    const a = t[Number(n)];
    if (a) {
      if (a.isMediaLike) {
        return `${a.raw.slice(0, a.braceStart + 1)}\n${o(a.raw.slice(a.braceStart + 1, -1))}\n}`;
      } else {
        return a.raw;
      }
    } else {
      return "";
    }
  });
}
const c = /^\s*(\[data-(?:time-of-day|color-scheme)(?:[~|^$*]?=(?:"[^"]*"|'[^']*'|[^\]]*))?\])\s*/;
function l(e) {
  m();
  if (!e) {
    return;
  }
  const t = function (e) {
    if (e) {
      return e.replace(/^([ \t]*)(backdrop-filter\s*:\s*[^;]+;)/gm, (t, n, a, r) => e.substring(Math.max(0, r - 200), r).includes("-webkit-backdrop-filter") || e.substring(r, r + t.length + 200).includes("-webkit-backdrop-filter") ? t : `${n}-webkit-${a}\n${t}`);
    } else {
      return e;
    }
  }(o(e));
  const n = document.createElement("style");
  n.id = s;
  n.textContent = t;
  document.head.appendChild(n);
  try {
    const e = document.getElementById("nuo-os-root");
    if (e) {
      e.classList.add("has-msg-theme");
    }
  } catch (a) {}
}
function m() {
  const e = document.getElementById(s);
  if (e) {
    e.remove();
  }
  try {
    const e = document.getElementById("nuo-os-root");
    if (e) {
      e.classList.remove("has-msg-theme");
    }
  } catch (t) {}
}
async function d() {
  try {
    return (await e.get(n)) || null;
  } catch (t) {
    console.error("[messagingTheme] load failed:", t);
    return null;
  }
}
async function u(t, a) {
  try {
    const r = {
      name: t || "自定義",
      css: a || "",
      updatedAt: Date.now()
    };
    await e.set(n, r);
    l(a);
    return true;
  } catch (r) {
    console.error("[messagingTheme] save failed:", r);
    return false;
  }
}
async function f() {
  try {
    await e.remove(n);
    await e.remove(r);
    m();
    return true;
  } catch (t) {
    console.error("[messagingTheme] clear failed:", t);
    return false;
  }
}
function g(e) {
  l(e);
}
async function p() {
  const e = await d();
  if (e == null ? undefined : e.css) {
    l(e.css);
  } else {
    m();
  }
}
async function h() {
  const e = await d();
  if (e == null ? undefined : e.css) {
    l(e.css);
  }
}
async function w() {
  try {
    const t = await e.get(a);
    if (Array.isArray(t)) {
      return t;
    } else {
      return [];
    }
  } catch (t) {
    console.error("[messagingTheme] getSavedThemes failed:", t);
    return [];
  }
}
async function y(t, n) {
  try {
    const r = await w();
    const s = `mtheme_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    const i = [...r, {
      id: s,
      name: t || "未命名",
      css: n || "",
      createdAt: Date.now()
    }];
    await e.set(a, i);
    return s;
  } catch (r) {
    console.error("[messagingTheme] addSavedTheme failed:", r);
    return null;
  }
}
async function $(t, n) {
  try {
    const r = await w();
    const s = r.findIndex(e => e.id === t);
    if (s === -1) {
      return false;
    }
    const i = r.slice();
    i[s] = {
      ...i[s],
      ...n,
      updatedAt: Date.now()
    };
    await e.set(a, i);
    return true;
  } catch (r) {
    console.error("[messagingTheme] updateSavedTheme failed:", r);
    return false;
  }
}
async function _(t) {
  try {
    const n = (await w()).filter(e => e.id !== t);
    await e.set(a, n);
    if ((await v()) === t) {
      await e.remove(r);
    }
    return true;
  } catch (n) {
    console.error("[messagingTheme] deleteSavedTheme failed:", n);
    return false;
  }
}
async function b(t) {
  try {
    const n = (await w()).find(e => e.id === t);
    return !!n && (await u(n.name, n.css), await e.set(r, t), true);
  } catch (n) {
    console.error("[messagingTheme] activateSavedTheme failed:", n);
    return false;
  }
}
async function v() {
  try {
    return (await e.get(r)) || null;
  } catch (t) {
    return null;
  }
}
export { b as activateSavedMessagingTheme, y as addSavedMessagingTheme, l as applyMessagingThemeCSS, p as cancelMessagingPreview, f as clearMessagingTheme, _ as deleteSavedMessagingTheme, v as getActiveMessagingPresetId, w as getSavedMessagingThemes, h as initMessagingTheme, d as loadMessagingTheme, g as previewMessagingTheme, m as removeMessagingThemeCSS, u as saveAndActivateMessagingTheme, o as scopeMessagingCss, $ as updateSavedMessagingTheme, t as validateCSS };