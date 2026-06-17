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
const r = "forum_custom_theme";
const n = "forum_saved_themes";
const o = "forum_active_preset_id";
const a = "forum-theme-style";
const i = [".nuo-forum-root"];
function c(e) {
  if (!e) {
    return "";
  }
  const t = [];
  let r = "";
  let n = 0;
  const o = /@(?:-webkit-)?(?:keyframes|media|supports)\b/;
  while (n < e.length) {
    const a = e.slice(n);
    const i = a.match(o);
    if (!i) {
      r += a;
      break;
    }
    r += a.slice(0, i.index);
    const c = /^@(?:-webkit-)?(?:media|supports)\b/.test(a.slice(i.index));
    const s = e.indexOf("{", n + i.index);
    if (s === -1) {
      r += a.slice(i.index);
      break;
    }
    let l = 0;
    let u = s;
    do {
      if (e[u] === "{") {
        l++;
      } else if (e[u] === "}") {
        l--;
      }
      u++;
    } while (l > 0 && u < e.length);
    t.push({
      raw: e.slice(n + i.index, u),
      isMediaLike: c,
      braceStart: s - (n + i.index)
    });
    r += `\n.__nuo_fat_${t.length - 1}__{}\n`;
    n = u;
  }
  r = r.replace(/\/\*[\s\S]*?\*\//g, "");
  return r.replace(/(^|\})\s*([^@{}][^{]*)\{/g, (e, t, r) => {
    if (/\.__nuo_fat_\d+__/.test(r)) {
      return e;
    }
    const n = r.split(",").map(e => e.trim()).filter(Boolean).flatMap(e => function (e) {
      const t = [];
      let r;
      let n = e.trim();
      while (r = n.match(s)) {
        t.push(r[1]);
        n = n.slice(r[0].length).trim();
      }
      const o = t.length ? t.join("") + " " : "";
      if (n === ":root" || t.length && n === "") {
        return i.map(e => o ? `${o}${e}` : e);
      }
      if (i.some(e => n.includes(e))) {
        return [o ? `${o}${n}` : n];
      }
      let a = "";
      const c = n.replace(/(?:::[\w-]+(?:\([^)]*\))?|:(?:before|after|first-line|first-letter))$/, e => {
        a = e;
        return "";
      });
      if (!c) {
        return i.flatMap(e => [`${o}${e}${a}`, `${o}${e} *${a}`]);
      }
      let l = -1;
      let u = 0;
      let m = 0;
      for (let i = 0; i < c.length; i++) {
        const e = c[i];
        if (e === "[") {
          u++;
        } else if (e === "]") {
          u--;
        } else if (e === "(") {
          m++;
        } else if (e === ")") {
          m--;
        } else if (u === 0 && m === 0 && (e === " " || e === "\t" || e === ">" || e === "+" || e === "~")) {
          l = i;
          break;
        }
      }
      const f = l > 0 ? c.slice(0, l) : c;
      const d = l > 0 ? c.slice(l) : "";
      return i.flatMap(e => [`${o}:is(${e}${f})${d}${a}`, `${o}${e} ${c}${a}`]);
    }(e)).join(", ");
    if (n) {
      return `${t} ${n} {`;
    } else {
      return e;
    }
  }).replace(/\.__nuo_fat_(\d+)__\{\}/g, (e, r) => {
    const n = t[Number(r)];
    if (n) {
      if (n.isMediaLike) {
        return `${n.raw.slice(0, n.braceStart + 1)}\n${c(n.raw.slice(n.braceStart + 1, -1))}\n}`;
      } else {
        return n.raw;
      }
    } else {
      return "";
    }
  });
}
const s = /^\s*(\[data-(?:time-of-day|color-scheme)(?:[~|^$*]?=(?:"[^"]*"|'[^']*'|[^\]]*))?\])\s*/;
function l(e) {
  u();
  if (!e) {
    return;
  }
  const t = function (e) {
    if (e) {
      return e.replace(/^([ \t]*)(backdrop-filter\s*:\s*[^;]+;)/gm, (t, r, n, o) => e.substring(Math.max(0, o - 200), o).includes("-webkit-backdrop-filter") || e.substring(o, o + t.length + 200).includes("-webkit-backdrop-filter") ? t : `${r}-webkit-${n}\n${t}`);
    } else {
      return e;
    }
  }(c(e));
  const r = document.createElement("style");
  r.id = a;
  r.textContent = t;
  document.head.appendChild(r);
}
function u() {
  const e = document.getElementById(a);
  if (e) {
    e.remove();
  }
}
async function m() {
  try {
    return (await e.get(r)) || null;
  } catch (t) {
    console.error("[forumTheme] load failed:", t);
    return null;
  }
}
async function f(t, n, o = {}) {
  try {
    const a = {
      name: t || "自定義",
      css: n || "",
      forumName: o.forumName || "",
      welcomeText: o.welcomeText || "",
      updatedAt: Date.now()
    };
    await e.set(r, a);
    l(n);
    d();
    return true;
  } catch (a) {
    console.error("[forumTheme] save failed:", a);
    return false;
  }
}
function d() {
  try {
    if (typeof window != "undefined") {
      window.dispatchEvent(new CustomEvent("forum-theme-text-changed"));
    }
  } catch (e) {}
}
async function w() {
  try {
    const t = await e.get(r);
    return {
      forumName: ((t == null ? undefined : t.forumName) || "").trim(),
      welcomeText: ((t == null ? undefined : t.welcomeText) || "").trim()
    };
  } catch (t) {
    return {
      forumName: "",
      welcomeText: ""
    };
  }
}
async function p() {
  try {
    await e.remove(r);
    await e.remove(o);
    u();
    d();
    return true;
  } catch (t) {
    console.error("[forumTheme] clear failed:", t);
    return false;
  }
}
function h(e) {
  l(e);
}
async function y() {
  const e = await m();
  if (e == null ? undefined : e.css) {
    l(e.css);
  } else {
    u();
  }
}
async function $() {
  const e = await m();
  if (e == null ? undefined : e.css) {
    l(e.css);
  }
}
async function v() {
  try {
    const t = await e.get(n);
    if (Array.isArray(t)) {
      return t;
    } else {
      return [];
    }
  } catch (t) {
    console.error("[forumTheme] getSaved failed:", t);
    return [];
  }
}
async function _(t, r, o = {}) {
  try {
    const a = await v();
    const i = `ftheme_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    const c = [...a, {
      id: i,
      name: t || "未命名",
      css: r || "",
      forumName: o.forumName || "",
      welcomeText: o.welcomeText || "",
      createdAt: Date.now()
    }];
    await e.set(n, c);
    return i;
  } catch (a) {
    console.error("[forumTheme] addSaved failed:", a);
    return null;
  }
}
async function g(t, r) {
  try {
    const o = await v();
    const a = o.findIndex(e => e.id === t);
    if (a === -1) {
      return false;
    }
    const i = o.slice();
    i[a] = {
      ...i[a],
      ...r,
      updatedAt: Date.now()
    };
    await e.set(n, i);
    return true;
  } catch (o) {
    console.error("[forumTheme] updateSaved failed:", o);
    return false;
  }
}
async function x(t) {
  try {
    const r = (await v()).filter(e => e.id !== t);
    await e.set(n, r);
    if ((await T()) === t) {
      await e.remove(o);
    }
    return true;
  } catch (r) {
    console.error("[forumTheme] deleteSaved failed:", r);
    return false;
  }
}
async function b(t) {
  try {
    const r = (await v()).find(e => e.id === t);
    return !!r && (await f(r.name, r.css, {
      forumName: r.forumName,
      welcomeText: r.welcomeText
    }), await e.set(o, t), true);
  } catch (r) {
    console.error("[forumTheme] activateSaved failed:", r);
    return false;
  }
}
async function T() {
  try {
    return (await e.get(o)) || null;
  } catch (t) {
    return null;
  }
}
export { b as activateSavedForumTheme, _ as addSavedForumTheme, l as applyForumThemeCSS, y as cancelForumPreview, p as clearForumTheme, x as deleteSavedForumTheme, T as getActiveForumPresetId, w as getActiveForumText, v as getSavedForumThemes, $ as initForumTheme, m as loadForumTheme, h as previewForumTheme, u as removeForumThemeCSS, f as saveAndActivateForumTheme, c as scopeForumCss, g as updateSavedForumTheme, t as validateCSS };