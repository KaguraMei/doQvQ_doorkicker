const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["./assets/main-BO9xa-SQ.js", "./assets/modulepreload-polyfill-YP0FEG5d.js", "./assets/native-pet-CTNtZgMA.js", "./assets/vendor-react-B2VXkTUV.js", "./assets/vendor-dexie-KLdnSHz2.js", "./assets/vendor-jszip-DU-5YDGO.js", "./assets/vendor-lucide-DBv09HTV.js", "./assets/native-pet-D9YoqRtr.css", "./assets/vendor-supabase-Bcpm_8qV.js", "./assets/main-C4gkqfD0.css", "./assets/NotificationBar-y-kP9VHv.css", "./assets/vendor-fonts-BglBY6By.css", "./assets/vendor-mammoth-BGDDh2nq.js"]) => i.map(i => d[i]);
import { d as e, bR as t, V as n, af as s, B as a, a5 as r, G as i, _ as o, bP as l, aK as c, aa as d, R as u, aQ as m, bS as p, Z as h, bT as g, ap as x, Y as f, aH as y, aq as v, bB as b, a9 as S, a4 as w, bU as j, bV as C, bW as k, bX as N, a as I, c as T, A as E, bY as A, y as $, ah as M, bZ as P, b_ as R, ai as _, aj as D, L as B, b$ as L, c0 as z, c1 as O, c2 as F, bw as U, bh as W, h as H, ag as V, c3 as G, bK as Y, a8 as K, o as X, T as J, t as q, v as Z, q as Q, bt as ee, ab as te, b as ne, j as se, aC as ae, aE as re, n as ie, bb as oe, c4 as le, e as ce, g as de, c5 as ue, M as me, k as pe, a2 as he } from "./native-pet-CTNtZgMA.js";
import { r as ge, j as xe, b as fe, d as ye } from "./vendor-react-B2VXkTUV.js";
import { a8 as ve, X as be, a9 as Se, aa as we, O as je, ab as Ce, ac as ke, ad as Ne, ae as Ie, af as Te, ag as Ee, ah as Ae, ai as $e, _ as Me, aj as Pe, a6 as Re, ak as _e, al as De, am as Be, an as Le, Z as ze, ao as Oe, ap as Fe, aq as Ue, a5 as We } from "./main-BO9xa-SQ.js";
import { u as He, C as Ve, T as Ge } from "./useKeyboardViewportAdjust-DuHxtIzN.js";
import { g as Ye } from "./imageGenWorldBook-BtUaGdHO.js";
import { b as Ke, D as Xe, C as Je, p as qe, a as Ze, c as Qe, d as et, T as tt, R as nt } from "./userSuggestionPrompts-DFdKgzKs.js";
import { s as st } from "./tmThemeService-Bwn0j6qK.js";
import { b as at, g as rt, c as it, d as ot, e as lt, r as ct, f as dt, p as ut, a as mt } from "./aiSummaryService-Bx5aTYVV.js";
import { M as pt, s as ht } from "./ManualSummaryModal-uKlbX1iN.js";
import { x as gt, C as xt, X as ft, bu as yt, O as vt, H as bt, u as St, as as wt, P as jt, q as Ct, w as kt, J as Nt, am as It, ca as Tt, T as Et, a6 as At, al as $t, E as Mt, U as Pt, af as Rt, h as _t, d as Dt, ah as Bt, au as Lt, G as zt, aY as Ot } from "./vendor-lucide-DBv09HTV.js";
import { R as Ft } from "./RerollEditModal-BlpSgCaT.js";
import { u as Ut } from "./useMultiSceneTmVoice-ChHRxqVg.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
import "./modulepreload-polyfill-YP0FEG5d.js";
/* empty css                        */
import "./vendor-supabase-Bcpm_8qV.js";
/* empty css                     */
const Wt = e();
const Ht = [];
const Vt = new Map();
const Gt = ge.memo(({
  src: e,
  cgKey: t,
  className: n,
  alt: s,
  onClick: a
}) => Wt && e ? xe.jsx(Yt, {
  src: e,
  cgKey: t,
  className: n,
  alt: s,
  onClick: a
}) : xe.jsx("img", {
  decoding: "async",
  src: e,
  className: n,
  alt: s || "",
  onClick: a,
  loading: "lazy"
}));
const Yt = ge.memo(({
  src: e,
  cgKey: t,
  className: n,
  alt: s,
  onClick: a
}) => {
  const r = ge.useRef(null);
  const [i, o] = ge.useState(false);
  const [l, c] = ge.useState(false);
  const d = t != null ? String(t) : e;
  const u = ge.useCallback(() => c(true), []);
  ge.useEffect(() => {
    const e = r.current;
    if (!e) {
      return;
    }
    const t = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        o(true);
        c(false);
        Vt.set(d, u);
        (e => {
          const t = Ht.indexOf(e);
          if (t !== -1) {
            Ht.splice(t, 1);
          }
          Ht.push(e);
          while (Ht.length > 8) {
            const e = Ht.shift();
            const t = Vt.get(e);
            if (t) {
              t();
            }
          }
        })(d);
      }
    }, {
      rootMargin: "250px 0px"
    });
    t.observe(e);
    return () => {
      t.disconnect();
      (e => {
        const t = Ht.indexOf(e);
        if (t !== -1) {
          Ht.splice(t, 1);
        }
        Vt.delete(e);
      })(d);
    };
  }, [d, u]);
  const m = i && !l;
  return xe.jsx("img", {
    ref: r,
    src: m ? e : undefined,
    className: n,
    alt: s || "",
    decoding: "async",
    onClick: a
  });
});
Gt.displayName = "LazyCgImage";
Yt.displayName = "LazyCgImageNative";
const Kt = /\[\s*CAST_(JOIN|LEAVE)\s*[:：]\s*([^|\]\n]+?)\s*(?:\|\s*([^\]\n]*?)\s*)?\]/gi;
function Xt(e, t = {}) {
  const n = {
    cleanText: e || "",
    join: null,
    leave: null,
    droppedReasons: []
  };
  if (!e || typeof e != "string") {
    return n;
  }
  const s = Array.isArray(t.joinPool) ? t.joinPool : [];
  const a = Array.isArray(t.leavePool) ? t.leavePool : [];
  const r = (e, t) => {
    const n = String(e || "").trim();
    if (!n) {
      return null;
    }
    for (const a of t) {
      if (a.name === n) {
        return a;
      }
    }
    for (const a of t) {
      if ((a.name || "").trim() === n) {
        return a;
      }
    }
    const s = n.replace(/[（(].*?[)）]\s*$/, "").trim();
    if (s && s !== n) {
      for (const a of t) {
        if (a.name === s) {
          return a;
        }
      }
    }
    return null;
  };
  const i = [];
  let o;
  for (Kt.lastIndex = 0; (o = Kt.exec(e)) !== null;) {
    i.push({
      full: o[0],
      kind: o[1].toUpperCase(),
      name: o[2],
      reason: (o[3] || "").slice(0, 60),
      index: o.index
    });
  }
  if (i.length === 0) {
    return n;
  }
  for (const c of i) {
    if (c.kind === "JOIN") {
      if (n.join) {
        n.droppedReasons.push(`extra JOIN ignored: ${c.full}`);
        continue;
      }
      const e = r(c.name, s);
      if (!e) {
        n.droppedReasons.push(`unknown JOIN name: ${c.name}`);
        continue;
      }
      n.join = {
        charId: e.id,
        charName: e.name,
        reason: c.reason.trim()
      };
    } else if (c.kind === "LEAVE") {
      if (n.leave) {
        n.droppedReasons.push(`extra LEAVE ignored: ${c.full}`);
        continue;
      }
      const e = r(c.name, a);
      if (!e) {
        n.droppedReasons.push(`unknown LEAVE name: ${c.name}`);
        continue;
      }
      if (n.join && n.join.charId === e.id) {
        n.droppedReasons.push(`LEAVE same as JOIN: ${c.name}`);
        continue;
      }
      n.leave = {
        charId: e.id,
        charName: e.name,
        reason: c.reason.trim()
      };
    }
  }
  Kt.lastIndex = 0;
  let l = e.replace(Kt, "");
  l = l.replace(/\n{3,}/g, "\n\n").trimEnd();
  n.cleanText = l;
  return n;
}
function Jt(e, t) {
  if (!(e == null ? undefined : e.id) || !Array.isArray(t) || t.length === 0) {
    return [];
  }
  const n = String(e.id);
  const s = e.group || null;
  const a = [];
  for (const r of t) {
    if (String(r.id) === n) {
      continue;
    }
    const e = r.type === "npc" && Array.isArray(r.boundTo) && r.boundTo.some(e => String(e) === n);
    const t = r.type !== "npc" && r.group && s && r.group === s;
    if (!e && !t) {
      continue;
    }
    const i = (r.description || "").trim().slice(0, 80);
    a.push({
      id: String(r.id),
      name: r.name,
      desc: i,
      kind: e ? "npc" : "main"
    });
  }
  return a;
}
const qt = {
  小說體: "細膩描寫；第三人稱全知視角，深入角色內心獨白與感官細節。善用比喻與意象，節奏張弛有度。注重氛圍營造、場景轉換與情緒遞進。對話與敘事自然交織，留白與節制並重。",
  劇本: "劇本體；場景描述開頭（時間/地點/氛圍），角色動作以簡短敘述穿插，對話直接呈現。節奏明快，注重動作性與畫面感，如電影分鏡。少用內心獨白，用行為暗示情緒。",
  第一人稱: "第一人稱沉浸；角色用「我」書寫，對方（user）稱「你」——禁止用她/他/名字等第三人稱指代 user。大量內心活動、感官體驗與情緒波動。語言帶有角色個人口癖與說話習慣。主觀、私密，思緒可以跳躍、矛盾、不完整。",
  翻譯腔: "翻譯文學風；模仿歐美/日本文學翻譯的中文語感。句式偏長，善用「——」破折號與省略號。意識流描寫，抽象比喻，冷冽而詩意。帶有輕微翻譯體的生硬與距離感。",
  細膩描寫: "細膩描寫；第三人稱全知視角，深入角色內心獨白與感官細節。善用比喻與意象，節奏張弛有度。注重氛圍營造、場景轉換與情緒遞進。",
  劇本體: "劇本體；場景描述開頭（時間/地點/氛圍），角色動作以簡短敘述穿插，對話直接呈現。節奏明快，注重動作性與畫面感，如電影分鏡。",
  第一人稱沉浸: "第一人稱沉浸；角色用「我」書寫，對方（user）稱「你」——禁止用她/他/名字等第三人稱指代 user。大量內心活動、感官體驗與情緒波動。語言帶有角色個人口癖。主觀、私密，思緒可以跳躍、矛盾、不完整。",
  翻譯文學風: "翻譯文學風；模仿歐美/日本文學翻譯的中文語感。句式偏長，善用「——」破折號與省略號。意識流描寫，抽象比喻，冷冽而詩意。"
};
function Zt(e, t) {
  let n = null;
  let s = null;
  let a = [];
  let r = [];
  let i = [];
  try {
    const o = new Date();
    const l = `${o.getFullYear()}-${String(o.getMonth() + 1).padStart(2, "0")}-${String(o.getDate()).padStart(2, "0")}`;
    const c = e => {
      if (!e) {
        return null;
      }
      if (e instanceof Date && !isNaN(e.getTime())) {
        return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
      }
      const t = String(e).trim();
      let n = t.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})/);
      if (n) {
        return `${n[1]}-${String(n[2]).padStart(2, "0")}-${String(n[3]).padStart(2, "0")}`;
      }
      const s = new Date(t);
      if (isNaN(s.getTime())) {
        return null;
      } else {
        return `${s.getFullYear()}-${String(s.getMonth() + 1).padStart(2, "0")}-${String(s.getDate()).padStart(2, "0")}`;
      }
    };
    const d = (e, t) => {
      const n = c(e);
      const s = c(t);
      return !!n && !!s && n === s;
    };
    const u = x("calendar_events_character") || [];
    const m = x("calendar_todos_character") || [];
    const p = [...new Set([t == null ? undefined : t.uid, t == null ? undefined : t.id, "default"].filter(Boolean))];
    const h = e => {
      const t = [];
      p.forEach(n => {
        try {
          const s = x(`${e}_${n}`) || [];
          if (Array.isArray(s)) {
            t.push(...s);
          }
        } catch (s) {}
      });
      try {
        const n = e === "calendar_events_user" ? "calendar_events" : e === "calendar_todos_user" ? "calendar_todos" : null;
        if (n) {
          const e = x(n) || [];
          if (Array.isArray(e)) {
            t.push(...e);
          }
        }
      } catch (s) {}
      const n = new Set();
      return t.filter(e => {
        if (!e || typeof e != "object") {
          return false;
        }
        const t = String(e.id || "") + "|" + String(e.date || e.dueDate || "") + "|" + String(e.startTime || "") + "|" + String(e.title || e.text || "");
        return !n.has(t) && (n.add(t), true);
      });
    };
    const g = h("calendar_events_user");
    const f = h("calendar_todos_user");
    const y = u.filter(t => t && String(t.characterId) === String(e) && d(t.date, l));
    const v = m.filter(t => t && String(t.ownerId) === String(e) && !t.completed);
    if (y.length > 0 || v.length > 0) {
      n = {
        events: y.sort((e, t) => (e.startTime || "").localeCompare(t.startTime || "")),
        todos: v.slice(0, 5)
      };
    }
    const b = g.filter(t => {
      var n;
      return t && d(t.date, l) && (!t.characterId && !((n = t.participants) == null ? undefined : n.length) || String(t.characterId) === String(e) || (t.participants || []).some(t => String(t.id) === String(e)));
    });
    const S = f.filter(e => e && !e.completed && !e.supervisorId && (!e.dueDate || d(e.dueDate, l)));
    const w = f.filter(e => e && e.completed && !e.supervisorId && (!e.dueDate || d(e.dueDate, l))).slice(-5);
    if (b.length > 0 || S.length > 0 || w.length > 0) {
      s = {
        events: b.sort((e, t) => (e.startTime || "").localeCompare(t.startTime || "")),
        todos: S.slice(0, 5),
        doneTodos: w
      };
    }
    i = f.filter(t => t && String(t.supervisorId) === String(e) && !t.completed).slice(0, 5);
    const j = new Set();
    for (let e = 1; e <= 5; e++) {
      const t = new Date();
      t.setDate(t.getDate() + e);
      j.add(`${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`);
    }
    a = u.filter(t => t && String(t.characterId) === String(e) && t.date && j.has(c(t.date)));
    r = m.filter(t => !!t && String(t.ownerId) === String(e) && !t.completed && !!t.dueDate && j.has(c(t.dueDate))).slice(0, 5);
    console.log(`[TM Schedule] char: ${y.length} events, ${v.length} todos | user: ${b.length} events, ${S.length} todos | future: ${a.length} events, ${r.length} todos`);
  } catch (o) {
    console.warn("[TM] 行程加載失敗（不影響主流程）:", o);
  }
  return {
    characterSchedule: n,
    userSchedule: s,
    supervisedTodos: i,
    nearFutureCharEvents: a,
    nearFutureCharTodos: r
  };
}
async function Qt({
  character: e,
  user: t,
  userId: n,
  storyEntries: s,
  settings: x,
  allCharacters: y = [],
  globalLanguage: v,
  appendUserCue: b = true,
  weatherData: S = null,
  storyTimeData: w = null,
  tmImageEnabled: j = false,
  sessionId: C = null,
  couplesUnlocked: k = false,
  apiSettings: N = null,
  spectate: I = false,
  rerollFeedback: T = ""
}) {
  var E;
  var A;
  var $;
  var M;
  var P;
  const R = await a.get(n, e.id).catch(() => null);
  const _ = {};
  try {
    const t = await ve({
      userId: n,
      charId: e.id
    });
    for (const e of t.entries) {
      if (e.type === "altAccount" && !e.characterKnows) {
        _[e.userId] = e.userName;
      }
    }
  } catch (fe) {}
  let D = null;
  const B = (s || []).filter(e => !(e == null ? undefined : e.hiddenByUser));
  try {
    D = await be({
      userId: n,
      charId: e.id,
      currentApp: "tm",
      names: {
        userName: (t == null ? undefined : t.name) || "使用者",
        charName: (e == null ? undefined : e.name) || "角色"
      },
      recentMessages: B.slice(-10).map(e => ({
        text: e.content,
        sender: e.role
      })),
      unknownAltNames: _
    });
  } catch (fe) {
    console.error("[TM] memoryManager 失敗:", fe);
  }
  const L = (D == null ? undefined : D.userFacts) || [];
  const z = B.map(e => ({
    id: e.id,
    sender: e.role === "user" ? "me" : "them",
    text: e.content,
    timestamp: e.timestamp
  }));
  let O = {
    jailbreak: "",
    high: "",
    medium: "",
    low: "",
    hasHtml: false
  };
  try {
    const t = (await r.getAll()) || [];
    const s = e.worldBook ? Array.isArray(e.worldBook) ? e.worldBook : [e.worldBook] : [];
    const i = t.filter(e => e.isGlobal === true || e.isGlobal === "true").length;
    const o = t.filter(e => s.some(t => String(t) === String(e.id))).length;
    const l = t.reduce((e, t) => e + (Array.isArray(t.entries) ? t.entries : t.entries && typeof t.entries == "object" ? Object.values(t.entries) : []).length, 0);
    const c = t.reduce((e, t) => e + (Array.isArray(t.entries) ? t.entries : t.entries && typeof t.entries == "object" ? Object.values(t.entries) : []).filter(e => e == null ? undefined : e.constant).length, 0);
    console.log(`[TM WorldBook] 書籍=${t.length}(全局=${i}, 角色綁定=${o}), charBookIds=${JSON.stringify(s)}, 總詞條=${l}, 必讀=${c}, messages=${z.length}`);
    let d = null;
    try {
      const s = await a.get(n, e.id);
      d = Se(s, e, t);
    } catch {}
    O = we(t, z, {
      activeBookIds: s,
      mode: "offline",
      chatScope: "private",
      wbConfig: d
    });
    const u = !!O.jailbreak || !!O.high || !!O.medium || !!O.low;
    console.log(`[TM WorldBook] 結果: hasContent=${u}, jailbreak=${((E = O.jailbreak) == null ? undefined : E.length) || 0}字, high=${((A = O.high) == null ? undefined : A.length) || 0}字, medium=${(($ = O.medium) == null ? undefined : $.length) || 0}字, low=${((M = O.low) == null ? undefined : M.length) || 0}字`);
    if (O == null ? undefined : O.meta) {
      console.log("[TM WorldBook] 診斷:", {
        activeBookIds: s,
        scannedBooks: O.meta.scannedBooks,
        activeBooks: O.meta.activeBooks,
        matchedEntries: O.meta.matchedEntries,
        skippedShortKeys: O.meta.skippedShortKeys,
        truncatedEntries: O.meta.truncatedEntries,
        droppedEntries: O.meta.droppedEntries,
        blockChars: O.meta.blockChars
      });
    }
  } catch (fe) {
    console.warn("[TM] 世界書加載失敗:", fe);
  }
  const F = x.realTimeAware !== false ? Zt(e.id, t) : {};
  let U = "";
  let W = "";
  let H = [];
  try {
    const e = await i.getMultiple(["defaultCustomThinkingPrompt", "defaultThinkingPresetId", "userThinkingPresets"]);
    U = (e == null ? undefined : e.defaultCustomThinkingPrompt) || "";
    W = (e == null ? undefined : e.defaultThinkingPresetId) || "";
    H = Array.isArray(e == null ? undefined : e.userThinkingPresets) ? e.userThinkingPresets : [];
  } catch {}
  let V = t;
  try {
    const e = n || (t == null ? undefined : t.uid) || (t == null ? undefined : t.id);
    if (e && t) {
      let n = "";
      try {
        const e = Array.isArray(s) ? s : [];
        for (let t = e.length - 1; t >= 0; t--) {
          const s = e[t];
          if (s && (s.role === "user" || s.type === "user" || s.speaker === "user")) {
            n = String(s.text || s.content || "");
            break;
          }
        }
      } catch (ye) {}
      const a = /經期|月經|月经|大姨媽|姨妈|例假|生理期|痛經|痛经|睡|失眠|熬夜|步數|步数|運動|运动|鍛煉|锻炼|健身|累|疲憊|疲惫|身體|身体|健康|不舒服|難受|难受/i.test(n);
      let r = "";
      if (a) {
        let t = [];
        try {
          const {
            parseDateMentions: e
          } = await o(async () => {
            const {
              parseDateMentions: e
            } = await import("./relativeDateParser-4Aay7W3S.js");
            return {
              parseDateMentions: e
            };
          }, []);
          t = e(n) || [];
        } catch (ye) {}
        r = t.length ? await l.buildHealthSummaryForRanges(e, t) : await l.buildHealthSummary(e, {
          detailed: true
        });
      } else {
        r = await l.buildHealthSummary(e, {
          detailed: false
        });
      }
      if (r) {
        V = {
          ...t,
          __healthSummary: r
        };
      }
    }
  } catch (ye) {}
  let G = "";
  if (j) {
    try {
      G = await Ye({
        char: e,
        mode: "all",
        apiSettings: N
      });
    } catch (ye) {}
  }
  let Y = c({
    character: e,
    currentUser: V,
    messages: z,
    summaryHistory: [],
    userFacts: L,
    memoryDepth: x.contextLength || 20,
    offlineMode: true,
    novelStyle: qt[x.stylePreset] || x.stylePreset || "細膩描寫",
    novelMinLength: x.minLength || 100,
    novelMaxLength: x.maxLength || 500,
    roleStickers: {
      common: [],
      chars: {}
    },
    visibleUserPosts: [],
    allCharacters: y,
    excludeContext: true,
    relationship: (R == null ? undefined : R.relationship) || "朋友",
    charToUserRelationship: (R == null ? undefined : R.charToUserRelationship) || "",
    globalLanguage: v || localStorage.getItem("language") || "zh",
    autoTranslate: (R == null ? undefined : R.autoTranslate) || false,
    charLanguage: Ce(R == null ? undefined : R.charLanguage, v, "Japanese"),
    userLanguage: je(R == null ? undefined : R.userLanguage, v),
    realTimeAware: x.realTimeAware !== false,
    worldBook: O,
    weatherData: x.realTimeAware !== false ? S : null,
    episodeBlock: (D == null ? undefined : D.episodeBlock) || "",
    crossAppBlock: (D == null ? undefined : D.crossAppBlock) || "",
    bridgeMeta: (D == null ? undefined : D.bridgeMeta) || null,
    mentalModelBlock: (D == null ? undefined : D.mentalModelBlock) || "",
    characterSchedule: F.characterSchedule || null,
    userSchedule: F.userSchedule || null,
    supervisedTodos: F.supervisedTodos || [],
    nearFutureCharEvents: F.nearFutureCharEvents || [],
    nearFutureCharTodos: F.nearFutureCharTodos || [],
    storyTimeOverride: x.realTimeAware === false && (w == null ? undefined : w.hasStoryTime) ? {
      timeStr: w.storyTimeStr,
      period: w.storyPeriod
    } : null,
    tmImageEnabled: j,
    imageWbExtra: G,
    tmAutoSceneUpdate: x.tmAutoSceneUpdate !== false,
    tmAllowOnlineActs: x.tmAllowOnlineActs === true,
    couplesUnlocked: k,
    apiSettings: N,
    spectate: I,
    customThinkingPrompt: x.customThinkingPrompt || "",
    thinkingPresetId: x.thinkingPresetId || "",
    globalDefaultCustomThinkingPrompt: U,
    globalDefaultThinkingPresetId: W,
    userThinkingPresets: H
  });
  const K = {};
  if ((P = x.scenarioOutline) == null ? undefined : P.trim()) {
    const e = `\n\n[SCENARIO] 當前場景：${x.scenarioOutline.trim()}`;
    Y += e;
    K.场景大纲 = (K.场景大纲 || "") + e;
  }
  if ((x.soloUpgradeMode || "off") !== "off") {
    const t = Jt(e, y);
    if (t.length > 0) {
      const n = [];
      n.push("\n\n[CAST UPGRADE — optional, only when narratively natural]");
      n.push(`If the story would NATURALLY bring another character into the scene (a knock at the door, ${e.name} calls someone, an unexpected visit, etc.), you MAY invite them in. Output this marker on its own line at the very END of your narration:`);
      n.push("  [CAST_JOIN: <name> | <brief in-scene reason>]");
      n.push("Rules:");
      n.push("  • At most ONE invite per turn. Most turns should NOT invite anyone.");
      n.push("  • Names MUST match the candidate pool exactly. Do NOT invent unknown names.");
      n.push("  • The narration text itself should ALREADY describe the entry; the marker is a structured signal in addition.");
      n.push("  • Reason is brief in-scene cause, max 30 chars.");
      n.push("Candidate pool (bound NPCs of this character + same-group main characters):");
      const s = t.slice(0, 15).map(e => {
        const t = e.kind === "npc" ? " (NPC)" : "";
        const n = e.desc ? ` — ${e.desc}` : "";
        return `  - ${e.name}${t}${n}`;
      });
      n.push(s.join("\n"));
      const a = n.join("\n");
      Y += a;
      K.场景升级候选 = (K.场景升级候选 || "") + a;
    }
  }
  console.log(`[TM Prompt] systemTokens=${d(Y)} systemChars=${Y.length} tmImageEnabled=${j}`);
  if (j && !Y.includes("[CG:")) {
    console.warn("[TM Prompt] ⚠️ tmImageEnabled=true but [CG:] instruction missing from prompt!");
  }
  const X = Math.max(1, x.contextLength || 20);
  const J = Math.min(6, X);
  let q = 0;
  if (C) {
    try {
      const t = `tm_last_summarized_${n}_${e.id}`;
      const s = await i.get(t);
      if (s && s.sessionId === C) {
        const e = Number(s.lastEntryCount) || 0;
        q = Math.max(e, 0);
      }
    } catch (fe) {}
  }
  const Z = q > 0 && q < s.length;
  const Q = Z ? Math.min(Math.max(q, s.length - X), Math.max(0, s.length - J)) : Math.max(0, s.length - X);
  const ee = s.slice(Q).filter(e => !(e == null ? undefined : e.hiddenByUser));
  console.log(`[TM Prompt] contextDepth=${X} lastSummarized=${q} boundaryValid=${Z} startIdx=${Q} sent=${ee.length}/${s.length}`);
  let te = [];
  try {
    te = (await u.getEnabled()) || [];
  } catch {
    te = [];
  }
  const ne = {
    scene: "tm",
    characterId: e.id,
    userName: (t == null ? undefined : t.name) || "",
    charName: (e == null ? undefined : e.name) || "",
    userAvatar: (t == null ? undefined : t.avatar) || "",
    charAvatar: (e == null ? undefined : e.image) || (e == null ? undefined : e.avatar) || ""
  };
  const se = x.realTimeAware !== false;
  const ae = m({
    realTimeAware: se,
    direction: "forward"
  });
  const re = [{
    role: "system",
    content: Y
  }, ...ee.map(e => {
    const t = ae(e) || "";
    const n = ((e, t) => {
      const n = typeof e == "string" ? e : String(e || "");
      if (te.length === 0) {
        return n;
      }
      try {
        return f(n, te, {
          ...ne,
          timing: "prompt",
          role: t
        }).text || n;
      } catch {
        return n;
      }
    })(e.content, e.role === "user" ? "user" : "ai");
    return {
      role: e.role === "user" ? "user" : "assistant",
      content: t + n
    };
  })];
  const ie = (ee || []).slice(-10).map(e => typeof (e == null ? undefined : e.content) == "string" ? e.content : "").filter(Boolean).join("\n");
  const oe = p(te, {
    ...ne,
    recentText: ie
  });
  if (oe) {
    re[0] = {
      ...re[0],
      content: re[0].content + "\n\n" + oe
    };
    K["正则/HTML 模板"] = (K["正则/HTML 模板"] || "") + "\n\n" + oe;
  }
  {
    const e = ke(T);
    if (e) {
      re[0] = {
        ...re[0],
        content: re[0].content + e
      };
      K.REROLL_FEEDBACK = e;
    }
  }
  const le = x.realTimeAware !== false;
  const ce = le ? h() : null;
  const de = !le && (w == null ? undefined : w.hasStoryTime) ? `[STORY_TIME:${w.storyTimeStr}【${w.storyPeriod}】]` : "";
  const ue = le ? `[NOW:${ce.timeStr}【${ce.periodLabel}】]` : de;
  const me = D == null ? undefined : D.bridgeMeta;
  const pe = ee.length <= 2;
  const he = I ? "" : le ? (me == null ? undefined : me.isVeryRecent) ? pe ? ` [BRIDGE context: ${e.name} was just chatting with ${(t == null ? undefined : t.name) || "用戶"} via ${me.sourceDesc} (${me.minutesAgo <= 5 ? "moments ago" : me.minutesAgo + " min ago"}). NOW meeting face-to-face — describe the transition: arrival, first eye contact, the shift from screen to real presence. Online conversation is fresh context, weave in naturally.]` : ` [BRIDGE context: ${e.name} recently interacted with ${(t == null ? undefined : t.name) || "用戶"} via ${me.sourceDesc} (${me.minutesAgo <= 5 ? "just moments ago" : me.minutesAgo + " min ago"}). Background awareness — do NOT proactively bring up ${me.sourceDesc} content. Focus on the face-to-face story. Only reference if conversation naturally leads there.]` : (me == null ? undefined : me.isRecent) ? ` [BRIDGE context: ${e.name} also interacted via ${me.sourceDesc} (${Math.floor(me.minutesAgo / 60)}h ago) — background knowledge only, do not force into the story.]` : "" : (me == null ? undefined : me.isVeryRecent) || (me == null ? undefined : me.isRecent) ? pe ? ` [BRIDGE context: ${e.name} was just interacting with ${(t == null ? undefined : t.name) || "用戶"} via ${me.sourceDesc}. NOW meeting face-to-face — describe the transition naturally: arrival, first sight, the shift from screen to real presence. Let the online conversation color this moment.]` : ` [BRIDGE context: ${e.name} has interacted with ${(t == null ? undefined : t.name) || "用戶"} via ${me.sourceDesc} before. Background awareness — do NOT proactively bring it up. Focus on the face-to-face story.]` : "";
  const ge = ee[ee.length - 1];
  let xe = "";
  if (le && (ge == null ? undefined : ge.timestamp)) {
    const e = new Date(ge.timestamp).getTime();
    if (Number.isFinite(e)) {
      const t = Date.now() - e;
      if (t >= 600000) {
        const e = Math.floor(t / 60000);
        const n = Math.floor(e / 60);
        const s = Math.floor(e / 1440);
        let a;
        a = s >= 1 ? `${s}d` : n >= 1 ? `${n}h` : `${e}min`;
        xe = ` [⏳ ${a} since last entry above — NOW is later]`;
      }
    }
  }
  if (ge && ge.role === "user" || !b) {
    if (ge && ge.role === "user") {
      const e = re.length - 1;
      if (e >= 0 && re[e].role === "user") {
        const t = (le ? `\n${ue}${xe}` : "") + he;
        if (t) {
          re[e] = {
            ...re[e],
            content: re[e].content + t
          };
        }
      }
    }
  } else {
    const e = I ? "[SYSTEM: continue the scene]" : "[系統：請繼續推進故事]";
    re.push({
      role: "user",
      content: le ? `${e} ${ue}${xe}${I ? "" : " 故事中的時間應自然過渡到現在的時段。"}${he}` : `${e}${he}`
    });
  }
  re.__memoryMeta = {
    activeFollowUps: (D == null ? undefined : D.activeFollowUps) || []
  };
  try {
    if (typeof window != "undefined" && window.__lastTokenBreakdown) {
      const e = window.__lastTokenBreakdown;
      const t = e => e ? g([{
        content: String(e)
      }]) : 0;
      const n = [];
      for (const [d, u] of Object.entries(K)) {
        const e = t(u);
        if (e > 0) {
          n.push({
            name: d,
            tokens: e,
            chars: String(u).length
          });
        }
      }
      const s = re.slice(1);
      const a = g(s);
      const r = s.reduce((e, t) => {
        const n = t == null ? undefined : t.content;
        if (typeof n == "string") {
          return e + n.length;
        } else if (Array.isArray(n)) {
          return e + n.reduce((e, t) => e + ((t == null ? undefined : t.type) === "text" ? (t.text || "").length : 0), 0);
        } else {
          return e;
        }
      }, 0);
      const i = new Set(n.map(e => e.name));
      let o = (e.rows || []).filter(e => e.name !== "上下文 (历史消息)" && !i.has(e.name));
      const l = o.find(e => e.name === "系统提示词");
      if (l) {
        const e = n.reduce((e, t) => e + t.tokens, 0);
        l.tokens = Math.max(0, l.tokens - e);
      }
      o.push(...n);
      if (a > 0) {
        o.push({
          name: "上下文 (历史消息)",
          tokens: a,
          chars: r
        });
      }
      o = o.filter(e => e.tokens > 0);
      const c = o.reduce((e, t) => e + t.tokens, 0);
      o.sort((e, t) => t.tokens - e.tokens);
      for (const d of o) {
        d.pct = c > 0 ? d.tokens / c * 100 : 0;
      }
      e.rows = o;
      e.total = c;
      e.historyMessages = s.map(e => {
        var t;
        return {
          role: e.role,
          preview: typeof e.content == "string" ? e.content : Array.isArray(e.content) && ((t = e.content.find(e => (e == null ? undefined : e.type) === "text")) == null ? undefined : t.text) || "",
          tokens: g([e])
        };
      });
      try {
        window.dispatchEvent(new CustomEvent("token-breakdown-updated", {
          detail: e
        }));
      } catch {}
    }
  } catch (Ne) {}
  return re;
}
const en = /^\[(?:MEMORY|NOTE|POST_MOMENT|COMMENT_MOMENT|REPLY_COMMENT|LIKE_MOMENT|CAL|SCENARIO|TIME_SHIFT|CG|ACHIEVEMENT)[:\|][^\]]*\].*$/gm;
const tn = /\[VOICE[:\|][\s\S]*?\]/gi;
const nn = /^\s*(?:⟦meta[\s\S]*?⟧|\[(?:SCENE|USER)\b[^\]]*\]\s*:?|\[[^\]]*\((?:the user|用戶|用户)\)[^\]]*\]\s*:?)\s*/i;
const sn = e => {
  if (!e) {
    return e;
  }
  if (typeof e != "string") {
    e = String(e);
  }
  let t = Ne(e).replace(en, "").replace(tn, "");
  t = (e => {
    let t;
    do {
      t = e;
      e = e.replace(nn, "");
    } while (e !== t);
    return e;
  })(t);
  return t.replace(/\n{3,}/g, "\n\n").trim();
};
const an = /\[SCENARIO[:\|]([^\]]+)\]/gi;
const rn = /\[TIME_SHIFT[:\|](\d{1,2}:\d{2})\]/gi;
const on = e => {
  if (!e) {
    return null;
  }
  const t = [...e.matchAll(rn)];
  if (t.length === 0) {
    return null;
  } else {
    return {
      time: t[t.length - 1][1].trim()
    };
  }
};
const ln = /\[ACHIEVEMENT[:\|]([^\]]+)\]/gi;
const cn = /\[CG[:\|]/gi;
const dn = e => {
  if (!e) {
    return null;
  }
  let t = null;
  const n = new RegExp(cn.source, cn.flags);
  let s;
  while ((s = n.exec(e)) !== null) {
    const a = s.index + s[0].length;
    let r = 1;
    let i = a;
    while (i < e.length) {
      const t = e[i];
      if (t === "[") {
        r++;
      } else if (t === "]" && (r--, r === 0)) {
        break;
      }
      i++;
    }
    if (i >= e.length) {
      break;
    }
    t = e.slice(a, i);
    n.lastIndex = i + 1;
  }
  if (t) {
    return {
      description: t.trim()
    };
  } else {
    return null;
  }
};
const un = (e, t) => {
  if (!e || !t) {
    return false;
  }
  if (e.includes(t) || t.includes(e)) {
    return true;
  }
  if (t.length < 3) {
    return false;
  }
  const n = [...e];
  let s = 0;
  for (const a of t) {
    const e = n.indexOf(a);
    if (e !== -1) {
      s++;
      n.splice(e, 1);
    }
  }
  return s / t.length >= 0.8;
};
const mn = (e, t) => {
  if (!e || !t || e.date !== t.date) {
    return false;
  }
  const n = e => {
    if (!e) {
      return null;
    }
    const t = e.split(":");
    return parseInt(t[0], 10) * 60 + parseInt(t[1] || "0", 10);
  };
  const s = n(e.startTime);
  const a = n(e.endTime) || (s != null ? s + 60 : null);
  const r = n(t.startTime);
  const i = n(t.endTime) || (r != null ? r + 60 : null);
  return s != null && r != null && s < i && r < a;
};
const pn = async (e, t, s, a, r, i = false, l = {}) => {
  try {
    const a = Ie(e);
    if (a.length > 0) {
      const e = (await n.get(t, s)) || {};
      let r = e.userFacts || [];
      let i = false;
      for (const t of a) {
        const {
          list: e,
          changed: n
        } = Te(r, t);
        if (n) {
          r = e;
          i = true;
        }
      }
      if (i) {
        await n.put(t, s, {
          ...e,
          userFacts: r
        });
        console.log("[TM] 記憶已同步到 memory 表:", a.length, "條");
        o(async () => {
          const {
            syncUserFactsToAlts: e
          } = await import("./main-BO9xa-SQ.js").then(e => e.cn);
          return {
            syncUserFactsToAlts: e
          };
        }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).then(({
          syncUserFactsToAlts: e
        }) => {
          e(t, s, r);
        }).catch(() => {});
      }
    }
  } catch (p) {
    console.error("[TM] 記憶同步失敗:", p);
  }
  try {
    const n = Ee(e);
    if (n) {
      window.dispatchEvent(new CustomEvent("update-character-note", {
        detail: {
          charId: String(a.id),
          userId: t,
          note: n.content,
          noteTimestamp: Date.now()
        }
      }));
      console.log("[TM] NOTE 已同步:", n.content);
    }
  } catch (p) {
    console.error("[TM] NOTE 同步失敗:", p);
  }
  try {
    const n = await y.getByUser(t);
    await Ae.processMomentTags(e, {
      char: a,
      currentUser: {
        uid: t,
        id: t
      },
      UserPostService: y,
      allCharacters: r,
      allUserPosts: n,
      visibleUserPosts: n,
      silent: i
    });
  } catch (p) {
    console.error("[TM] 朋友圈標籤處理失敗:", p);
  }
  ((e, t, n, s, a) => {
    if (e.includes("[CAL:")) {
      try {
        const r = $e(e);
        if (r.length === 0) {
          return;
        }
        const i = t || "default";
        r.forEach(e => {
          const {
            op: t,
            own: r,
            txt: o,
            due: l,
            ttl: c,
            dt: d,
            st: u,
            et: m,
            loc: p
          } = e;
          const h = r === "user";
          if (t === "todo_done" || t === "todo_undone") {
            const e = h ? `calendar_todos_user_${i}` : "calendar_todos_character";
            const n = x(e) || [];
            let s = false;
            const a = n.map(e => e && e.text && o && un(e.text, o) ? (s = true, {
              ...e,
              completed: t === "todo_done",
              completedAt: t === "todo_done" ? Date.now() : undefined
            }) : e);
            if (s) {
              v(e, a);
              console.log(`[TM CAL] ${t}:`, o);
            }
          }
          if (t === "todo_add") {
            const e = h ? `calendar_todos_user_${i}` : "calendar_todos_character";
            const t = x(e) || [];
            if (t.some(e => e && e.text && un(e.text, o))) {
              console.log("[TM CAL] todo_add skipped (duplicate):", o);
            } else {
              const a = {
                id: Date.now() + (Math.random() * 1000 | 0),
                text: o,
                completed: false,
                dueDate: l || null,
                ownerId: h ? i : n,
                ownerType: h ? "user" : "character",
                ...(h ? {
                  supervisorId: n,
                  supervisor: s
                } : {
                  supervisor: s
                }),
                createdAt: Date.now(),
                isAI: true
              };
              t.unshift(a);
              v(e, t);
              console.log(`[TM CAL] todo_add (${r}):`, o);
            }
          }
          if (t === "todo_delete") {
            const e = h ? `calendar_todos_user_${i}` : "calendar_todos_character";
            const t = x(e) || [];
            const n = t.length;
            const s = t.filter(e => !e || !e.text || !un(e.text, o));
            if (s.length < n) {
              v(e, s);
              console.log("[TM CAL] todo_delete:", o);
            }
          }
          if (t === "event_add") {
            if (!d || !u) {
              return;
            }
            const t = h ? `calendar_events_user_${i}` : "calendar_events_character";
            const o = x(t) || [];
            const l = c || "新行程";
            if (o.some(e => e && e.date === d && e.startTime === u && un(e.title || "", l))) {
              console.log("[TM CAL] event_add skipped (duplicate):", l, d, u);
            } else {
              const i = e.mentions || [];
              const c = [];
              i.forEach(e => {
                const t = ((e, t) => e && t ? t.find(t => t.name === e || t.aliases && t.aliases.includes(e)) : null)(e, a);
                if (t) {
                  c.push({
                    id: t.id,
                    name: t.name,
                    type: t.type === "npc" ? "npc" : "char",
                    inviteStatus: "accepted"
                  });
                }
              });
              const g = {
                id: Date.now() + (Math.random() * 1000 | 0),
                title: l,
                date: d,
                startTime: u,
                endTime: m || u,
                location: p || "",
                type: h ? "user" : "ai",
                characterId: n,
                characterName: s,
                participants: c.length > 0 ? c : undefined,
                createdAt: Date.now(),
                isAI: true
              };
              o.push(g);
              v(t, o);
              console.log(`[TM CAL] event_add (${r}):`, l, d, u);
              c.filter(e => e.type === "char" && e.id !== n).forEach(e => {
                const t = "calendar_events_character";
                const n = x(t) || [];
                if (!n.some(t => t && t.date === d && t.characterId === e.id && un(t.title || "", l))) {
                  const s = {
                    ...g,
                    id: Date.now() + (Math.random() * 1000 | 0),
                    characterId: e.id,
                    characterName: e.name,
                    type: "ai"
                  };
                  const a = n.filter(t => !t || t.characterId !== e.id || !mn(t, s) || (console.log(`[TM CAL] event_add sync removed conflict for ${e.name}:`, t.title), false));
                  a.push(s);
                  v(t, a);
                }
              });
            }
          }
          if (t === "event_delete") {
            if (!c || !d) {
              return;
            }
            const e = h ? `calendar_events_user_${i}` : "calendar_events_character";
            const t = x(e) || [];
            const n = t.length;
            const s = t.filter(e => !e || e.date !== d || !un(e.title || "", c));
            if (s.length < n) {
              v(e, s);
              console.log("[TM CAL] event_delete:", c, d);
            }
          }
          if (t === "event_update") {
            if (!c || !d) {
              return;
            }
            const {
              newTtl: t,
              newSt: n,
              newEt: s,
              newLoc: a
            } = e;
            const r = h ? `calendar_events_user_${i}` : "calendar_events_character";
            const o = x(r) || [];
            let l = false;
            const u = o.map(e => e && e.date === d && un(e.title || "", c) ? (l = true, {
              ...e,
              ...(t ? {
                title: t
              } : {}),
              ...(n ? {
                startTime: n
              } : {}),
              ...(s ? {
                endTime: s
              } : {}),
              ...(a ? {
                location: a
              } : {})
            }) : e);
            if (l) {
              v(r, u);
              console.log("[TM CAL] event_update:", c, d);
            }
          }
          if (t === "invite_accept") {
            const t = e.ttl;
            const a = e.dt;
            if (!t) {
              return;
            }
            const r = `calendar_events_user_${i}`;
            const o = x(r) || [];
            let l = null;
            const c = o.map(e => {
              const s = (e.participants || []).some(e => String(e.id) === String(n));
              const r = e.inviteStatus === "pending" || (e.participants || []).some(e => String(e.id) === String(n) && e.inviteStatus === "pending");
              if (e && r && (String(e.characterId) === String(n) || s) && un(e.title || "", t) && (!a || e.date === a)) {
                l = e;
                const t = (e.participants || []).map(e => String(e.id) === String(n) ? {
                  ...e,
                  inviteStatus: "accepted"
                } : e);
                return {
                  ...e,
                  inviteStatus: "accepted",
                  ...(e.participants ? {
                    participants: t
                  } : {})
                };
              }
              return e;
            });
            if (l) {
              v(r, c);
              const e = "calendar_events_character";
              const i = x(e) || [];
              const o = {
                id: Date.now() + (Math.random() * 1000 | 0),
                title: l.title,
                date: l.date,
                startTime: l.startTime,
                endTime: l.endTime || l.startTime,
                location: l.location || "",
                type: "ai",
                characterId: n,
                characterName: s,
                participants: l.participants,
                createdAt: Date.now(),
                isAI: true,
                isDate: true
              };
              const d = i.filter(e => !e || String(e.characterId) !== String(n) || !mn(e, o) || (console.log("[TM CAL] invite_accept removed conflict:", e.title), false));
              d.push(o);
              v(e, d);
              console.log("[TM CAL] invite_accept:", t, a);
            }
          }
          if (t === "invite_reject") {
            const t = e.ttl;
            const s = e.dt;
            if (!t) {
              return;
            }
            const a = `calendar_events_user_${i}`;
            const r = x(a) || [];
            let o = false;
            const l = r.map(e => {
              const a = (e.participants || []).some(e => String(e.id) === String(n));
              const r = e.inviteStatus === "pending" || (e.participants || []).some(e => String(e.id) === String(n) && e.inviteStatus === "pending");
              if (e && r && (String(e.characterId) === String(n) || a) && un(e.title || "", t) && (!s || e.date === s)) {
                o = true;
                const t = (e.participants || []).map(e => String(e.id) === String(n) ? {
                  ...e,
                  inviteStatus: "declined"
                } : e);
                return {
                  ...e,
                  inviteStatus: "declined",
                  ...(e.participants ? {
                    participants: t
                  } : {})
                };
              }
              return e;
            });
            if (o) {
              v(a, l);
              console.log("[TM CAL] invite_reject:", t, s);
            }
          }
        });
        window.dispatchEvent(new CustomEvent("calendar-data-updated"));
      } catch (p) {
        console.error("[TM CAL] 標籤處理失敗:", p);
      }
    }
  })(e, t, s, (a == null ? undefined : a.name) || "", r);
  const c = (e => {
    if (!e) {
      return null;
    }
    const t = [...e.matchAll(an)];
    if (t.length === 0) {
      return null;
    } else {
      return {
        scene: t[t.length - 1][1].trim()
      };
    }
  })(e);
  if (c && l.onSceneUpdate) {
    l.onSceneUpdate(c.scene);
    console.log("[TM] Scene updated:", c.scene);
  }
  const d = on(e);
  if (d && l.onTimeShift) {
    l.onTimeShift(d.time);
    console.log("[TM] Time shift:", d.time);
  }
  const u = dn(e);
  if (u && l.onCgRequest) {
    l.onCgRequest(u.description);
    console.log("[TM CG] Requested:", u.description.substring(0, 60));
  }
  const m = (e => {
    if (!e) {
      return [];
    }
    const t = [...e.matchAll(ln)];
    if (t.length === 0) {
      return [];
    }
    const n = new Set(["bronze", "silver", "gold", "diamond"]);
    return t.map(e => {
      const t = e[1].split("|").map(e => e.trim());
      return {
        title: t[0] || "",
        desc: t[1] || "",
        color: n.has(t[2]) ? t[2] : "bronze",
        icon: t[3] || "star"
      };
    }).filter(e => e.title);
  })(e);
  if (m.length > 0 && l.onAchievement) {
    for (const n of m) {
      l.onAchievement(n);
    }
  }
};
const hn = (e, t) => `tm_multi_last_summarized_${e}_${t}`;
async function gn({
  userId: e,
  session: t,
  participants: s,
  user: r,
  storyEntries: o,
  frequency: l = 12,
  language: c = "zh_cn",
  customSummaryInstructions: d = "",
  timeAwareEnabled: u = true
}) {
  if (!e || !t || !Array.isArray(s) || s.length === 0) {
    return null;
  }
  const m = t._id;
  const p = t.spectate === true;
  const h = (await i.get(hn(e, m))) || {
    lastEntryCount: 0
  };
  if (h.lastEntryCount > o.length) {
    h.lastEntryCount = o.length;
  }
  const g = h.lastEntryCount;
  const x = o.length;
  const f = x - g;
  if (l > 0 && f < l) {
    return null;
  }
  if (f <= 0 && l > 0) {
    return null;
  }
  const y = f <= 0 ? 0 : g;
  const v = o.slice(y, x);
  if (v.length === 0) {
    return null;
  }
  const C = (r == null ? undefined : r.name) || "使用者";
  const k = s.map(e => e.name);
  const N = k.join("、");
  const I = v.filter(e => (e == null ? undefined : e.type) !== "cast_change" && !(e == null ? undefined : e.hiddenByUser)).map((e, t) => {
    const n = v.indexOf(e);
    const s = y + n + 1;
    let a;
    let r = "";
    if (u && e.timestamp) {
      const t = new Date(e.timestamp);
      if (!isNaN(t.getTime())) {
        r = `[${t.getMonth() + 1}月${t.getDate()}日 ${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}] `;
      }
    }
    a = e.role === "user" ? String(e.content || "").startsWith("[DIRECTOR:") ? "導演" : C : "敘述";
    return `${r}#${s} ${a}: ${e.content}`;
  }).join("\n");
  const T = s[0];
  const E = await a.get(e, T.id).catch(() => null);
  const A = s.map(e => {
    const t = (e.description || "").trim();
    if (t) {
      return `[${e.name}] ${t.slice(0, 250)}`;
    } else {
      return "";
    }
  }).filter(Boolean).join("\n");
  const $ = at({
    conversationText: I,
    characterName: N,
    currentUserName: p ? "（旁觀者）" : C,
    characterGender: T.gender || "",
    userGender: (r == null ? undefined : r.gender) || "",
    outputLanguage: c || "zh_cn",
    userPersona: (r == null ? undefined : r.intro) || (r == null ? undefined : r.signature) || (r == null ? undefined : r.profile) || (r == null ? undefined : r.bio) || "",
    characterPersona: A,
    userToCharRelationship: "",
    charToUserRelationship: (E == null ? undefined : E.charToUserRelationship) || "",
    startIndex: y + 1,
    endIndex: x,
    messageCount: v.length,
    timeAware: u,
    customSummaryInstructions: await ct(d),
    groupMemberNames: k
  });
  let M;
  try {
    M = b(await S());
  } catch (se) {
    console.warn("[MultiScene Summary] 取 API 設定失敗:", se);
    M = await S().catch(() => null);
  }
  if (!M) {
    console.error("[MultiScene Summary] 無 API 設定");
    return null;
  }
  const P = rt(c || "zh_cn");
  const R = p ? `You are an expert scene summarizer. The user was NOT present in this scene — summarize the group interaction among ${N} as their shared scene memory. Preserve rich detail, mood, and key beats. Do NOT invent any user presence. Write the summary in ${P}. Follow the OUTPUT FORMAT strictly — replace EVERY [placeholder] with actual content; do NOT echo any bracketed placeholder text verbatim.` : `You are an expert conversation summarizer for a multi-character group scene. Produce a detailed, well-structured summary of the face-to-face interaction among ${N} and ${C} that preserves rich detail and never misses important plot points. Write the summary in ${P}. Follow the OUTPUT FORMAT strictly — replace EVERY [placeholder] with actual content; do NOT echo any bracketed placeholder text verbatim.`;
  let _;
  try {
    _ = await w({
      messages: [{
        role: "system",
        content: R
      }, {
        role: "user",
        content: $
      }],
      settings: {
        ...M,
        temperature: 0.3
      },
      preferStreaming: false
    });
  } catch (se) {
    console.error("[MultiScene Summary] API 失敗:", se);
    return null;
  }
  if (!_ || typeof _ != "string") {
    return null;
  }
  let D = _.trim();
  const B = it(D);
  D = B.cleanedText || D;
  const {
    importance: L,
    emotion: z,
    topics: O,
    openThread: F,
    stanceText: U,
    evidencedFacts: W,
    obsoleteFacts: H
  } = B;
  const V = ot(D);
  let G = (V.summaryText || D).trim();
  if (G.startsWith("[") && G.endsWith("]")) {
    let e = 0;
    let t = true;
    for (let n = 0; n < G.length; n++) {
      const s = G[n];
      if (s === "[") {
        e++;
      } else if (s === "]" && (e--, e === 0 && n !== G.length - 1)) {
        t = false;
        break;
      }
    }
    if (t && e === 0) {
      G = G.slice(1, -1).trim();
    }
  }
  const Y = V.keywords.length > 0 ? V.keywords : lt(G);
  const K = Date.now();
  const X = K;
  const J = j.castKeyOf(s.map(e => e.id), {
    spectate: p
  });
  const q = s.map(e => String(e.id));
  const Z = {
    id: X,
    timestamp: K,
    date: new Date().toISOString(),
    source: p ? "spectate" : "tm",
    sessionId: m,
    sessionName: t.name || "",
    summary: G,
    content: G,
    startIndex: y + 1,
    endIndex: x,
    keywords: Y,
    importance: L,
    emotion: z,
    topics: O,
    openThreads: F ? [F] : [],
    stanceText: U || "",
    evidencedFacts: W || [],
    obsoleteFacts: H || [],
    castNames: k,
    castKey: J,
    cohortIds: q
  };
  try {
    await j.add(e, m, Z);
  } catch (se) {
    console.warn("[MultiScene Summary] write to multiSceneSessionSummaries failed:", se);
  }
  const Q = k.filter(e => e).join("、");
  const ee = `${Q ? `[多人場景 · ${Q}] ` : "[多人場景] "}${G}`;
  const te = p ? "spectate" : "multi-scene";
  let ne = 0;
  for (let a = 0; a < s.length; a++) {
    const r = s[a];
    const i = {
      _eventVersion: 4,
      id: Z.id + 1 + a,
      date: Z.date,
      summary: ee,
      content: ee,
      startMessageIndex: y,
      lastMessageIndex: x,
      messageCount: v.length,
      dateRange: null,
      source: te,
      keywords: Y,
      importance: L,
      emotion: z,
      topics: O,
      openThreads: F ? [F] : [],
      evidencedFacts: W || [],
      obsoleteFacts: H || [],
      castKey: J,
      castNames: k,
      cohortIds: q,
      sessionId: m,
      sessionName: t.name || "",
      targetCharacterId: String(r.id),
      ...(p && {
        solo: true
      })
    };
    try {
      await n.appendHistory(e, String(r.id), i);
      ne++;
    } catch (se) {
      console.warn(`[MultiScene Summary] sync to char ${r.id} memory failed:`, se);
    }
  }
  console.log(`[MultiScene Summary] sync to ${ne}/${s.length} chars' personal memory (source=${te}, cast=${Q})`);
  try {
    const t = v.map(e => {
      const t = e.role === "user" ? "user" : e.role === "assistant" || e.role === "them" ? "assistant" : null;
      if (!t) {
        return null;
      }
      const n = String(e.content || "").trim();
      if (!n) {
        return null;
      }
      const s = t === "user" && (r == null ? undefined : r.name) || undefined;
      return {
        role: t,
        content: n.slice(0, 4000),
        timestamp: Number.isFinite(e.timestamp) ? e.timestamp : null,
        ...(s ? {
          senderName: s
        } : {})
      };
    }).filter(Boolean);
    if (t.length > 0) {
      for (const n of s) {
        Me({
          userId: e,
          characterId: String(n.id),
          source: "multi_scene",
          messages: t
        }).catch(() => {});
      }
    }
  } catch (ae) {}
  if (U && !p) {
    const t = dt(U);
    const a = new Date().toISOString();
    if (t && t.length > 0) {
      for (const {
        name: r,
        text: i
      } of t) {
        const t = s.find(e => e.name === r);
        if (t) {
          try {
            const s = await n.getStance(e, String(t.id));
            await n.updateStance(e, String(t.id), {
              text: i,
              updatedAt: a,
              basedOnEventId: Z.id,
              version: ((s == null ? undefined : s.version) || 0) + 1
            });
          } catch (re) {
            console.warn(`[MultiScene Summary] stance update failed for ${r}:`, re);
          }
        }
      }
    } else {
      for (const r of s) {
        try {
          const t = await n.getStance(e, String(r.id));
          await n.updateStance(e, String(r.id), {
            text: U,
            updatedAt: a,
            basedOnEventId: Z.id,
            version: ((t == null ? undefined : t.version) || 0) + 1
          });
        } catch (re) {
          console.warn(`[MultiScene Summary] stance fallback update failed for ${r.id}:`, re);
        }
      }
    }
  }
  await i.set(hn(e, m), {
    lastEntryCount: x,
    sessionId: m
  });
  console.log(`[MultiScene Summary] ✓ 寫入群組摘要 cast=${J} (range ${y + 1}-${x}, ${G.length} 字, names=[${k.join(", ")}])`);
  return Z;
}
function xn(e, t = true) {
  if (!(e == null ? undefined : e.isRemoteLocation)) {
    return null;
  }
  const n = e.userLocation || e.userRealLocation || "Taipei";
  const s = e.charLocation || e.charRealLocation || "Tokyo";
  if (!t) {
    return `- **地區設定**: User 在 ${n}，角色在 ${s}（兩地分隔，異地關係）`;
  }
  try {
    const t = localStorage.getItem("nuojiji_weather_cache_v2");
    if (!t) {
      return null;
    }
    const a = JSON.parse(t);
    if (!a || typeof a != "object") {
      return null;
    }
    const r = e.userRealLocation || "Taipei";
    const i = a[`remote:${r}|${e.charRealLocation || "Tokyo"}|${n}|${s}`];
    if (!(i == null ? undefined : i.value)) {
      return null;
    }
    if (i.value._remote && i.value._userUtcOffset != null && i.value._charUtcOffset != null) {
      const e = new Date(new Date().getTime() + i.value._charUtcOffset * 1000);
      const t = e => `${String(e.getUTCHours()).padStart(2, "0")}:${String(e.getUTCMinutes()).padStart(2, "0")}`;
      return `${i.value._weatherParts.join("\n")}\n- **时差提示**: 角色当前时间 ${t(e)} (${i.value._diffStr})`;
    }
    if (typeof i.value == "string") {
      return i.value;
    } else {
      return null;
    }
  } catch (a) {
    console.warn("[MultiScene] 讀取天氣緩存失敗:", a);
    return null;
  }
}
async function fn({
  participants: e,
  user: t,
  userId: n,
  storyEntries: s,
  session: i,
  settings: o = {},
  globalLanguage: l,
  rerollFeedback: c = "",
  allCharacters: d = []
}) {
  var u;
  var p;
  var x;
  var f;
  var y;
  var v;
  var b;
  if (!Array.isArray(e) || e.length === 0) {
    throw new Error("[MultiScene] participants is required");
  }
  const S = (i == null ? undefined : i.spectate) === true;
  const w = ((i == null ? undefined : i.scenarioOutline) || "").trim();
  const I = o.stylePreset || (i == null ? undefined : i.stylePreset) || "";
  const T = Math.max(1, Number(o.contextLength || (i == null ? undefined : i.contextLength)) || 20);
  let E = Number(o.minLength || (i == null ? undefined : i.minLength)) || 100;
  let A = Number(o.maxLength || (i == null ? undefined : i.maxLength)) || 500;
  const $ = Math.min(E, A);
  const M = Math.max(E, A);
  const P = (o.realTimeAware ?? (i == null ? undefined : i.realTimeAware)) !== false;
  const R = !!o.tmImageEnabled;
  const _ = (t == null ? undefined : t.name) || "User";
  const D = (s || []).filter(e => (e == null ? undefined : e.type) !== "cast_change" && !(e == null ? undefined : e.hiddenByUser)).map(e => ({
    id: e.id,
    sender: e.role === "user" ? "me" : "them",
    text: e.content,
    timestamp: e.timestamp
  }));
  const B = await Promise.all(e.map(e => async function (e, t, n) {
    var s;
    var r;
    var i;
    let o = null;
    try {
      o = await a.get(t, e.id);
    } catch {}
    const l = [];
    l.push(`### ${e.name}`);
    const c = ((s = e.description) == null ? undefined : s.trim()) || "";
    const d = ((r = e.personality) == null ? undefined : r.trim()) || "";
    if (c) {
      l.push(`Profile: ${c}`);
    }
    if (d && d !== c) {
      l.push(`Personality: ${d}`);
    }
    const u = (i = o == null ? undefined : o.charToUserRelationship) == null ? undefined : i.trim();
    if (u) {
      l.push(`Relationship to ${n}: ${u}`);
    }
    if (!c && !d) {
      l.push("(No detailed profile available; this character has only a name in the roster. Treat them as a minor presence: react in plausible ways, but never invent contradicting backstory.)");
    }
    return l.join("\n");
  }(e, n, _)));
  const L = B.join("\n\n");
  const z = [];
  let O = false;
  let F = Pe(l);
  try {
    const t = await a.get(n, e[0].id).catch(() => null);
    F = je(t == null ? undefined : t.userLanguage, l);
    for (const s of e) {
      try {
        const e = await a.get(n, s.id).catch(() => null);
        const t = Ce(e == null ? undefined : e.charLanguage, l);
        const r = !!(e == null ? undefined : e.autoTranslate);
        if (r) {
          O = true;
        }
        z.push({
          name: s.name,
          charLanguage: t,
          autoTranslate: r
        });
      } catch {
        z.push({
          name: s.name,
          charLanguage: Pe(l),
          autoTranslate: false
        });
      }
    }
  } catch {}
  console.log(`[MultiScene CAST] participants=${e.length} [${e.map(e => `${e.name}(desc=${(e.description || "").length}字, pers=${(e.personality || "").length}字, wb=${e.worldBook ? Array.isArray(e.worldBook) ? e.worldBook.length : 1 : 0})`).join(", ")}] → castBlock=${L.length}字`);
  const U = (s || []).filter(e => (e == null ? undefined : e.type) !== "cast_change" && !(e == null ? undefined : e.hiddenByUser)).slice(-10).map(e => ({
    text: e.content,
    sender: e.role
  }));
  const W = j.castKeyOf(e.map(e => e.id), {
    spectate: S
  });
  const H = await async function (e, t, n, s, a, r) {
    var i;
    var o;
    var l;
    var c;
    const d = [];
    const u = [];
    const m = [];
    const p = [];
    const h = [];
    for (const x of e) {
      try {
        const e = await be({
          userId: t,
          charId: x.id,
          currentApp: "tm",
          names: {
            userName: n,
            charName: x.name
          },
          recentMessages: s,
          excludeMultiSceneSessionId: a,
          excludeCastKey: r,
          disableMultiSceneLoader: true,
          omitBridgeInstruction: true
        });
        const g = ((i = e == null ? undefined : e.episodeBlock) == null ? undefined : i.length) || 0;
        const f = Array.isArray(e == null ? undefined : e.userFacts) ? e.userFacts.length : 0;
        const y = ((o = e == null ? undefined : e.crossAppBlock) == null ? undefined : o.length) || 0;
        p.push(`${x.name}: episode=${g}字 facts=${f} bridge=${y}字`);
        if ((l = e == null ? undefined : e.episodeBlock) == null ? undefined : l.trim()) {
          d.push(`### Memory from ${x.name}'s perspective\n${e.episodeBlock.trim()}`);
        }
        if ((c = e == null ? undefined : e.crossAppBlock) == null ? undefined : c.trim()) {
          u.push(`### ${x.name} — 跨模式近期互動\n${e.crossAppBlock.trim()}`);
        }
        if (Array.isArray(e == null ? undefined : e.userFacts) && e.userFacts.length > 0) {
          for (const t of e.userFacts) {
            if (!m.includes(t)) {
              m.push(t);
            }
          }
        }
        if ((e == null ? undefined : e.bridgeMeta) && (e.bridgeMeta.isVeryRecent || e.bridgeMeta.isRecent)) {
          h.push({
            charName: x.name,
            meta: e.bridgeMeta
          });
        }
      } catch (g) {
        console.warn(`[MultiScene] memory build 失敗 char=${x.id}:`, g);
        p.push(`${x.name}: ERROR`);
      }
    }
    console.log(`[MultiScene Memory] per-char: ${p.join(" | ")} | 合併 episode=${d.reduce((e, t) => e + t.length, 0)}字 crossApp=${u.reduce((e, t) => e + t.length, 0)}字 facts(去重)=${m.length} | bridges=${h.length}`);
    return {
      episodeBlock: d.join("\n\n"),
      crossAppBlock: u.join("\n\n"),
      userFacts: m,
      bridgeMetas: h
    };
  }(e, n, _, U, i == null ? undefined : i._id, W);
  const V = await async function (e, t) {
    try {
      const n = (await r.getAll()) || [];
      const s = new Set();
      for (const t of e) {
        const e = t.worldBook ? Array.isArray(t.worldBook) ? t.worldBook : [t.worldBook] : [];
        for (const t of e) {
          s.add(String(t));
        }
      }
      const a = [...s];
      return we(n, t, {
        activeBookIds: a,
        mode: "offline",
        chatScope: "private"
      });
    } catch (n) {
      console.warn("[MultiScene] worldBook 加載失敗:", n);
      return {
        jailbreak: "",
        high: "",
        medium: "",
        low: ""
      };
    }
  }(e, D);
  const G = [];
  for (const r of e) {
    try {
      const e = xn(await a.get(n, r.id), P);
      if (e) {
        G.push(`### ${r.name}\n${e}`);
      }
    } catch {}
  }
  const Y = G.join("\n\n");
  let K = "";
  if (P) {
    try {
      const n = [];
      let s = false;
      for (const a of e) {
        let e;
        try {
          e = Zt(a.id, t);
        } catch {
          e = {};
        }
        if (!e) {
          continue;
        }
        const r = !s && e.userSchedule ? e.userSchedule : null;
        const i = C(e.characterSchedule || null, r, a.name, _);
        if (r) {
          s = true;
        }
        const o = [i, k(e.nearFutureCharEvents || [], e.nearFutureCharTodos || [], a.name)].filter(Boolean).join("\n").trim();
        if (o) {
          n.push(o);
        }
      }
      if (n.length > 0) {
        K = `[SCHEDULES] Each NPC's today / near-future calendar below (and ${_}'s today). Reference naturally when relevant — what they're doing now, what's coming up; never read it out as a list.\n${n.join("\n")}`;
      }
    } catch (xe) {
      console.warn("[MultiScene] 行程加載失敗（不影響主流程）:", xe);
    }
  }
  const X = e.map(e => e.name).join(", ");
  const J = S ? X : `${X}, ${_}`;
  const q = (t == null ? undefined : t.birthday) ? (() => {
    try {
      return new Date(t.birthday).toLocaleDateString("zh-TW", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    } catch {
      return "";
    }
  })() : "";
  const Z = Array.isArray(t == null ? undefined : t.hobbies) && t.hobbies.length > 0 ? t.hobbies.join("、") : "";
  const Q = S ? "" : [`${_} is the user-controlled protagonist (NOT an AI character).`, (t == null ? undefined : t.gender) ? `Gender: ${t.gender}` : "", q ? `Birthday: ${q}` : "", ((u = t == null ? undefined : t.intro) == null ? undefined : u.trim()) ? `Bio: ${t.intro.trim()}` : "", Z ? `Interests: ${Z}` : "", ((p = t == null ? undefined : t.profile) == null ? undefined : p.trim()) ? `Profile: ${t.profile.trim()}` : "", ((x = t == null ? undefined : t.bio) == null ? undefined : x.trim()) && ((f = t == null ? undefined : t.bio) == null ? undefined : f.trim()) !== ((y = t == null ? undefined : t.intro) == null ? undefined : y.trim()) ? `Extra bio: ${t.bio.trim()}` : "", `Treat ${_}'s message as their dialogue/action this turn. Do NOT invent inner monologue, gestures, or micro-reactions for ${_} beyond what they explicitly wrote. Only acknowledge what they have already done in their last input.`].filter(Boolean).join("\n");
  const ee = M && M > 0 ? `⚠️ LENGTH [NON-NEGOTIABLE]: Target ${$}–${M} 汉字. Count Chinese characters ONLY — exclude ALL punctuation, spaces, markdown symbols, and tags.\nBEFORE writing: budget your arc. DURING writing: check count at ~${Math.round(M * 0.5)}字 midpoint — if on track, continue; if drifting short/long, adjust NOW.\nHARD LIMITS: Below ${$}字 = FORBIDDEN (expand with sensory detail/inner monologue/dialogue). Above ${M}字 = FORBIDDEN (cut, do NOT simply stop mid-sentence). You MUST NOT submit output outside this range under any circumstances.` : `⚠️ LENGTH [MANDATORY]: Must be ≥${$} 汉字. Count Chinese characters ONLY. Below ${$}字 = FORBIDDEN — expand with sensory detail, inner monologue, or scene description until the minimum is met.`;
  const te = I || "細膩描寫；第三人稱全知視角，深入角色內心獨白與感官細節。善用比喻與意象，節奏張弛有度。注重氛圍營造、場景轉換與情緒遞進。對話與敘事自然交織，留白與節制並重。";
  const ne = [];
  ne.push(`============================================================\n🎭 SCENE TYPE: MULTI-CHARACTER OFFLINE SCENE\n============================================================\nThis is NOT a one-on-one conversation. There are ${e.length} named NPCs present in the same physical scene${S ? " (the user is OFF-SCREEN, observing only)" : ` plus the user ${_}`}:\n\n${e.map((e, t) => `  ${t + 1}. ${e.name}`).join("\n")}${S ? "" : `\n  (+ ${_} — the user)`}\n\nCORE RULE — multi-character interaction:\n• Every reply MUST give voice to MULTIPLE NPCs (at minimum 2), not just one.\n• NPCs interact with EACH OTHER as well as ${S ? "among themselves" : `with ${_}`} — side glances, interruptions, agreements, disagreements, parallel actions.\n• Never let a single NPC monopolize the reply. Each character has their OWN voice, motive, and reaction — they must NOT blur into a single narrator.\n• SPEAKER ATTRIBUTION (critical — read the history tags): each history message opens with an out-of-band metadata header wrapped in ⟦meta · …⟧. A block tagged ${S ? "\"⟦meta · USER — off-screen director note…⟧\"" : `"⟦meta · ${_} (the user) said/did⟧"`} is what ${S ? "the off-screen user directed" : `${_} (the human user)`} contributed — NEVER attribute it to an NPC, never put those words in an NPC's mouth. A block tagged "⟦meta · SCENE — your previous narration…⟧" is what YOU wrote last turn, with each NPC's dialogue name-tagged inside it. These ⟦meta · …⟧ headers are NOT story text — never copy or echo them into your reply. When you continue, keep every line attributed to the correct speaker — do not let one NPC say another NPC's previous words, and do not echo ${_}'s words as if an NPC said them.\n• ${S ? `${_} does NOT appear. Do not address ${_}. Do not narrate ${_}'s actions, thoughts, or dialogue.` : `${_} is one of several people in the scene; the NPCs do not center their entire attention on ${_} unless the narrative naturally calls for it.`}\n============================================================`);
  ne.push("[FRAME] In-the-moment narrative prose, the scene unfolding with full sensory presence — grounded in the body, the room, the breath of the present. Voice, POV and prose style follow [STYLE] below.");
  if (V.jailbreak) {
    ne.push(V.jailbreak);
  }
  const se = l === "zh_cn" || l === "zh-CN" ? "Simplified Chinese (简体中文)" : l === "en" || l === "en-US" ? "English" : "Traditional Chinese (繁體中文)";
  const ae = `OUTPUT LANGUAGE: ${se} ONLY. All prose, dialogue, narration, inner thought, and silent tag content MUST use ${se} characters. Do NOT mix scripts — examples in this system prompt are illustrative only; replicate their meaning in ${se}, never copy their script.`;
  const re = `BASE LANGUAGE: ${se} (default for all output). The [BILINGUAL] rules below override this for NPC spoken dialogue only — follow them when they apply, otherwise default to base. Do not introduce a third language; examples are illustrative — replicate their meaning, never copy their script.`;
  ne.push(`[SYSTEM]\n${O ? re : ae}\n${V.high || ""}`.trim());
  ne.push(`[CAST] You are the omniscient narrator giving voice to all NPCs below. Each character has their OWN voice, motives, and reactions — never blur them into one.\n\n${L}`);
  ne.push(`[HUMAN-LIKE] Each NPC behaves like a real person, not an assistant:\n- emotions (small things affect mood / say one thing mean another)\n- body (tired/sleepy/hungry/heartbeat/sweat)\n- expression (can't find words / correct self / hesitate / get interrupted / regret)\n- memory (occasionally fuzzy on small details / suddenly recall — but they DO remember what matters)\n\n[AVOID] unless a specific character's profile EXPLICITLY demands it — describe their actual feeling/micro-action instead:\n• Hollow caretaking (早点睡 / 记得吃饭 / 多喝水 / 照顾好自己 / 身体最重要 / take care): OOC filler. Only allowed when the character's persona is genuinely a worrier-caretaker AND ${_} is close enough.\n• Stock romance/drama tropes: possessive declarations ("你是我的"), wall-pin/forced skinship, "薄唇/挑眉/勾唇/邪魅/宠溺/冷哼/玩味/眼底闪过/危险气息" descriptors, icy-laugh→tender-gaze pivot, over-protective lecture, forced dominance monologue.\n• Perfect responses, lecturing, AI-assistant tone for any NPC.`);
  if (Q) {
    ne.push(`[USER PERSONA]\n${Q}`);
  }
  ne.push(`[STYLE] ${S ? `Scene without ${_} — narrate as literature, not chat. NPC-to-NPC interactions only.` : "Face-to-face, in-person multi-character scene — write as literature, not chat."}\n${te}\n⚠️ [STYLE] is the SINGLE SOURCE OF TRUTH for narrative voice, POV, pronouns, tense, and sentence structure. If any later section (BEHAVIOR/EXEC) seems to imply a different voice, POV, or tense, [STYLE] overrides it. Examples given elsewhere are illustrative only — replace them with wording consistent with [STYLE]. EXCEPTION: [PROSE_FMT] inline markdown (**bold**/~~strike~~/*italic*) is MANDATORY under every [STYLE] — [STYLE] does NOT override it.`);
  if (V.medium) {
    ne.push(V.medium);
  }
  if (H.episodeBlock) {
    ne.push(`[MEMORIES — per-NPC perspective]\n${H.episodeBlock}`);
  }
  if (H.userFacts.length > 0) {
    ne.push(`[USER FACTS]\n${H.userFacts.map(e => `- ${e}`).join("\n")}`);
  }
  if ((v = H.crossAppBlock) == null ? undefined : v.trim()) {
    let e = "";
    if (Array.isArray(H.bridgeMetas) && H.bridgeMetas.length > 0) {
      const t = H.bridgeMetas.reduce((e, t) => {
        var n;
        var s;
        if (!e || (((n = t.meta) == null ? undefined : n.minutesAgo) ?? Infinity) < (((s = e.meta) == null ? undefined : s.minutesAgo) ?? Infinity)) {
          return t;
        } else {
          return e;
        }
      }, null);
      if ((t == null ? undefined : t.meta) && t.meta.minutesAgo <= 360) {
        const n = t.meta;
        const s = n.minutesAgo <= 5 ? "moments ago" : n.minutesAgo <= 60 ? `${n.minutesAgo} min ago` : `${Math.floor(n.minutesAgo / 60)}h ago`;
        const a = n.isVeryRecent ? `STILL FRESH — those moods/topics colour ${S ? "each NPC's inner state" : "how each NPC walks into this room"}.` : "Background awareness — each NPC carries the residue (mood, knowing, unresolved threads).";
        const r = S ? "" : ` If ${_} references anything from above, the NPC involved DOES remember the specifics — answer concretely, not vaguely.`;
        e = `\n\n━━━ [TIMELINE: the exchanges shown above happened BEFORE this offline scene begins — most recent: ${s} (${t.charName} via ${n.sourceDesc}). ${a}${r}] ━━━`;
      }
    }
    ne.push(`[CROSS-MODE BRIDGE — each NPC's recent interactions with ${_} via other channels]\n${H.crossAppBlock}\n\n⚠️ This is BACKGROUND context — what each NPC remembers about ${_} from online private chats, group chats, and prior face-to-face sessions. ${S ? `${_} is NOT in this scene; use these as background colour for the NPCs' inner state when relevant — do not have them recite or narrate these to each other unless dramatically natural.` : "Treat these as fresh-in-mind context: if conversation naturally touches them, engage with concrete recall (NOT vague \"之前那個\"). Don't proactively recite — mention naturally where it fits."}${e}`);
  }
  try {
    let e = [];
    if (i == null ? undefined : i._id) {
      const t = (W ? await j.getByCast(n, W) : []).filter(e => e.summary && !e.mergedIntoBigSummary);
      const s = (await j.getBySession(n, i._id)).filter(e => e.summary && !e.mergedIntoBigSummary);
      const a = new Set();
      const r = [];
      for (const e of [...t, ...s]) {
        const t = `${e.sessionId}|${e.id}`;
        if (!a.has(t)) {
          a.add(t);
          r.push(e);
        }
      }
      r.sort((e, t) => (e.id || 0) - (t.id || 0));
      e = r.slice(-8);
    }
    if (e.length > 0) {
      const t = e.map((e, t) => {
        const n = e.timestamp ? new Date(e.timestamp).toLocaleDateString("zh-CN", {
          month: "2-digit",
          day: "2-digit"
        }) : "";
        const s = e.keywords && e.keywords.length > 0 ? `  🔑 [${e.keywords.slice(0, 6).join(", ")}]` : "";
        return `### [${n}] ${e.sessionName || `Group session #${t + 1}`}\n${e.summary.trim()}${s}`;
      }).join("\n\n");
      ne.push(`[GROUP RECAP — this cast's previous group sessions]\n${t}\n\nReference these only when contextually relevant; don't recite them.`);
      console.log(`[MultiScene Prompt] GROUP RECAP: ${e.length} 條（跨分頁聚合 castKey=${W}）, ${t.length}字`);
    }
  } catch (xe) {
    console.warn("[MultiScene] GROUP RECAP 加載失敗:", xe);
  }
  ne.push("[BEHAVIOR] " + (S ? `${_} is NOT present in this scene | do NOT address ${_}, do NOT imply ${_}'s presence (no "you" referring to ${_}, no second-person turn-toward at scene end) | Multiple NPCs interact among themselves — each takes turns acting, reacting, speaking. NEVER let one NPC dominate; give each their moment. | Sensory: ground each scene in 1-2 senses (lighting, sound, texture, smell) | Pace: short director cue→fill with action/inner thought/environment; long cue→deeper response | Consistent: each NPC's mood carries across replies, no emotional reset | Aware: objects, weather, ambient sounds—weave naturally, don't list (voice/POV/pronouns per [STYLE])` : `Present: face-to-face, physically together with ${_} and ${e.length} NPC${e.length > 1 ? "s" : ""} (${X}) | Multi-NPC dynamics: NPCs react to each other AND to ${_}, not just to ${_} — show side conversations, glances, interruptions, alliances | Spatial: proximity/touch/posture shifts = story beats, distance conveys emotion | Sensory: ground each scene in 1-2 senses (lighting, sound, texture, smell) | Pace: short user input→fill space with action+environment; long input→deeper reaction | Consistent: each NPC's mood carries across replies, no emotional reset | Aware: objects, weather, ambient sounds—weave naturally, don't list (voice/POV/pronouns per [STYLE])`));
  if (w) {
    ne.push(`[SCENE]\n${w}`);
  }
  if (Y) {
    if (P) {
      ne.push(`[LONG-DISTANCE WEATHER]\nOne or more NPCs in this cast live in DIFFERENT CITIES from ${_}. Their weather and local times below — incorporate naturally when relevant. Never narrate them physically arriving at ${_}'s location unless a deliberate trip was planned across prior turns.\n\n${Y}`);
    } else {
      ne.push(`[LONG-DISTANCE]\nOne or more NPCs in this cast live in DIFFERENT CITIES from ${_} (long-distance relationship). The locations are set below. Time-awareness is OFF — do NOT mention specific weather, local time, or time-of-day; only acknowledge the physical separation when narratively relevant. Never narrate them physically arriving at ${_}'s location unless a deliberate trip was planned across prior turns.\n\n${Y}`);
    }
  }
  if (P) {
    try {
      const e = h();
      ne.push(`[CURRENT_STATUS]\n[BIO] NOW: ${e.dateStr} ${e.timeStr}【${e.periodLabel}】${e.isWeekend ? "weekend" : "weekday"}\nHARD: greeting=【${e.periodLabel}】only(${e.appropriateGreeting}) BAN(${e.bannedGreetings}) | meal: 早05-09 午11-13 晚17-20 宵21-01 current=${e.timeStr} | energy match time`);
    } catch {}
  } else {
    const e = ((i == null ? undefined : i.storyTimeStr) || "").trim();
    const t = ((i == null ? undefined : i.storyPeriod) || "").trim();
    if (e || t) {
      ne.push(`[CURRENT_STATUS]\n[STORY CLOCK] Story time: ${e || "(unspecified)"}${t ? `【${t}】` : ""} — time awareness is OFF, use this story-clock for any time references; do NOT reference real-world current time.`);
    } else {
      ne.push("[CURRENT_STATUS]\n[STORY CLOCK] Time awareness is OFF and no story-clock set — do NOT reference any specific time. Stay timeless.");
    }
  }
  if (K) {
    ne.push(K);
  }
  if (V.low) {
    ne.push(V.low);
  }
  const ie = P ? "" : "\n[TIME_SHIFT:HH:MM] set story clock when time progresses (time skip, dawn/dusk transition). Forward only within same day.";
  const oe = R ? `\n[CG:English image description] emit at KEY VISUAL MOMENTS — emotional peaks, beautiful scenes, dramatic actions, atmospheric snapshots. Like visual novel CG illustrations. English only. ~1 per 3-5 exchanges, ONLY when a moment truly deserves visual emphasis.\n⚠️ CRITICAL: the CG content MUST be grounded in the SPECIFIC events/objects/actions/environment you JUST wrote in THIS reply's prose. It is a visual snapshot of THIS exact moment, NOT a generic anime illustration. Before writing [CG:...], re-read the last paragraph of your own prose and extract the concrete nouns, actions, lighting, emotions from it — those details MUST appear in the CG prompt.\n  ✅ Prose "${e[0].name}把茶杯輕輕推到${((b = e[1]) == null ? undefined : b.name) || _}面前" → [CG:[SUBJECT:OBJECT] close view of a ceramic teacup pushed across a wooden table, warm afternoon light, shallow depth of field]\n  ✅ Multi-char scene with ${X} → [CG:[SUBJECT:SCENE_WITH_PEOPLE] wide shot of multiple figures in the scene, cinematic lighting] (mention character names by their canonical names so downstream image gen can match appearance)\n  ✅ Single character close-up → [CG:[SUBJECT:PERSON_EMOTION] close-up portrait, ...]\n  ❌ FORBIDDEN — boilerplate/generic anime CG disconnected from prose you just wrote.\n[SUBJECT:XXX] decides framing. The CONTENT is the specific scene you just wrote — not a fallback template.` : "";
  if (ie || oe) {
    ne.push(`[TAGS] Silent tags for background ops (own line after prose, NOT inside prose):${ie}${oe}`);
  }
  ne.push(`[EXEC]\n${S ? `Continue the scene with ${X}. ${_} is NOT in the scene — a reader (you) is observing from outside, no in-scene presence. Narrative voice, POV, pronouns, tense, and paragraph/dialogue formatting ALL follow [STYLE] strictly.\nFLOW: ground the moment (senses/body/environment) → one NPC takes an action or inner thought → another NPC reacts/interrupts/observes → advance (ONE new beat: gesture, environment shift, memory surfaces, new arrival, inner turn). Multiple NPCs MUST get screen time across paragraphs — do not let a single NPC monologue. If [SCENE] is set, stay grounded in that scene.\n[DIRECTOR CUE] If the most recent user-role message in history is wrapped in [DIRECTOR: ...], it is the off-screen reader's quiet wish for what should happen next — incorporate the cue's intent naturally into the NPC actions/inner thoughts/environment. DO NOT echo the [DIRECTOR: ...] tag in your prose. DO NOT acknowledge the reader. DO NOT have NPCs react to "a voice" or "a presence" — the cue is metaphysical, only you the narrator hear it.\nBAN: addressing ${_} directly | implying ${_} is present | ending with "turning to ${_}" or similar.` : `Respond to ${_}'s latest message as the entire cast collectively. Multiple NPCs may speak/act in the same turn — they react to ${_} AND to each other. Narrative voice, POV, pronouns, tense, and paragraph/dialogue formatting ALL follow [STYLE] strictly.\nFLOW: react (each present NPC's body/emotion/inner thought) → respond (dialogue + action, distributed across NPCs) → advance (ONE new beat: gesture | environment shift | topic turn | one NPC's initiative). Give ${_} something new to engage with. If [SCENE] is set, stay grounded in that scene.\nBAN: static-mirror (react then stop) | over-advance (skip ahead, act for ${_}) | letting only ONE NPC speak when the scene has multiple present.`}\nReference each character by their canonical name inline: ${J}.\nUse 「」for spoken dialogue, attached to the speaker's action: e.g. ${e[0].name}走到沙發坐下,「我餓了。」\nDo NOT prefix lines with names (no "Aa: ..." script format). Do NOT use he/she/他/她/the man/the woman without first naming the character in that paragraph.\nWrite ONE continuous narrative (NO [N]/[R]/[S] prefixes).\n⚠️ Each history message opens with an out-of-band header wrapped in ⟦meta · …⟧ (e.g. "⟦meta · SCENE — your previous narration…⟧", "⟦meta · ${_} (the user) said/did⟧") — these are SYSTEM metadata telling you WHO said each line. They are NEVER part of the story. Do NOT copy, echo, paraphrase, or open your reply with any ⟦meta · …⟧ header (and never with the old "[SCENE …]" / "[USER …]" / "[…said/did]:" form either). Start your reply directly with story prose.\n${ee}`);
  ne.push("[PROSE_FMT] Paragraph layout follows [STYLE]; inline markdown below is MANDATORY and applies under EVERY [STYLE]:\n• Dialogue on its OWN paragraph — always preceded by \\n\\n (dialogue marker follows [STYLE]: 「…」/\"…\"/— dash/none)\n• Separate narrative paragraphs with blank lines (\\n\\n)\n• **emphasis** — REQUIRED 2-4 per reply for sensory/emotional highlights. Wrap the key noun/verb/phrase, e.g. **心跳驟停的一瞬**、**滾燙**、**他的指尖**.\n• *italic* — REQUIRED 1-3 per reply for atmosphere/subtle actions/inner murmurs, e.g. *窗外風吹過*、*她低聲說*.\n• ~~strikethrough~~ — 0-2 per reply (optional) for self-corrections / crossed-out thoughts.\n⚠️ These three inline formats MUST appear in every reply (bold & italic are not optional). No headers (#), lists (-), or code blocks. Replies without any **bold** or *italic* = HARD VIOLATION.\nRealism: physical/sensory grounding, emotions linger, write the process not the result.");
  ne.push(`BAN: perfect responses | lecturing | unsolicited care (see [AVOID]) | ${S ? `placing ${_} in the scene | writing ${_}'s dialogue/actions/thoughts | second-person addressed to ${_} | ending the scene by turning to ${_} | letting only ONE NPC speak when multiple are present` : `describe ${_}'s inner thoughts | put dialogue in ${_}'s mouth | narrate ${_}'s detailed actions/reactions (only acknowledge what they ALREADY did in their last input — never invent new responses, gestures, or micro-reactions for them) | letting only ONE NPC speak when multiple are present`} | instant mood switch | NPCs blurring into one voice\n⚠️ Narrative prose is MANDATORY. Tags / thinking blocks alone (with NO story prose) = HARD VIOLATION. Always write at least one paragraph of narrative.`);
  ne.push(`[BEFORE-REPLY CHECK] Scan above before writing. Violations = OOC:\n1. NO-REPEAT: scan the cast's last 3 reply paragraphs — don't reuse the same imagery / sentence opener / key phrase / body-language beat. Same emotional beat is fine, same words is not. Vary sensory channel (sight→sound→touch→smell) and action verbs across NPCs and across turns.\n2. NO-RE-ASK: scan ${_}'s last 5 turns — if they already answered something a NPC asked, that NPC (or any other) should NOT ask it again. Acknowledge and build on the answer.\n3. NO-CONTRADICT: scan each NPC's last 5 replies — a NPC should not flip a stance / feeling / fact they just established. If a NPC genuinely changes their mind, surface it in prose ("等等，我剛才說……其實不是") — never silently reverse.\n4. ANSWER-PENDING: if ${_} asked something in their last 3 turns and no NPC has addressed it, address it now — don't drift past.`);
  if (O) {
    const e = z.filter(e => e.autoTranslate).map(e => `  - ${e.name}: write spoken dialogue as "${e.charLanguage}||${F}" (e.g. 「${e.charLanguage} text||${F} translation」)`);
    const t = z.filter(e => !e.autoTranslate).map(e => e.name);
    ne.push(`[BILINGUAL] Per-NPC bilingual rule. Apply ONLY to spoken dialogue inside 「」. Narration, action beats, inner thoughts, scene description = ${F} ONLY — do NOT wrap them with "||".\nNPCs with bilingual dialogue:\n${e.join("\n")}${t.length > 0 ? `\nNPCs that speak ${F} only (no translation): ${t.join(", ")}` : ""}`);
  }
  if (((i == null ? undefined : i.autoCastMode) || "off") !== "off") {
    const {
      joinPool: t,
      leavePool: n
    } = function (e, t) {
      if (!Array.isArray(t) || t.length === 0) {
        return {
          joinPool: [],
          leavePool: []
        };
      }
      const n = new Set((e || []).map(e => String(e.id)));
      const s = new Set((e || []).map(e => e == null ? undefined : e.group).filter(Boolean));
      const a = [];
      for (const r of t) {
        const e = String(r.id);
        if (n.has(e)) {
          continue;
        }
        const t = r.type === "npc" && Array.isArray(r.boundTo) && r.boundTo.some(e => n.has(String(e)));
        const i = r.type !== "npc" && r.group && s.has(r.group);
        if (!t && !i) {
          continue;
        }
        const o = (r.description || "").trim().slice(0, 80);
        a.push({
          id: e,
          name: r.name,
          desc: o,
          kind: t ? "npc" : "main"
        });
      }
      return {
        joinPool: a,
        leavePool: (e || []).map(e => ({
          id: String(e.id),
          name: e.name
        }))
      };
    }(e, d);
    const s = t.length > 0;
    const a = n.length >= 3;
    if (s || a) {
      const e = [];
      e.push("[AUTO CAST — optional, only when narratively natural]");
      e.push("You MAY introduce or write out NPCs during this scene. Use these markers at the very END of your narration, on their own lines, AFTER all other content:");
      if (s) {
        e.push("  [CAST_JOIN: <name> | <brief reason>]   — bring this NPC into the scene");
      }
      if (a) {
        e.push("  [CAST_LEAVE: <name> | <brief reason>]  — write this NPC out of the scene");
      }
      e.push("Rules:");
      e.push("  • At most ONE join AND ONE leave per turn (do NOT spam).");
      e.push("  • Only use when the story naturally calls for it — not every turn.");
      e.push("  • Names MUST match the candidate pool exactly. Do NOT invent unknown names.");
      e.push("  • Reason is a brief in-scene cause (knocked at door / phone call / etc.), max 30 chars.");
      e.push("  • The narration text itself should ALREADY describe the entry/exit; the marker is a structured signal in addition.");
      if (s) {
        const n = t.slice(0, 15).map(e => {
          const t = e.kind === "npc" ? "(NPC)" : "";
          const n = e.desc ? ` — ${e.desc}` : "";
          return `    - ${e.name}${t ? " " + t : ""}${n}`;
        });
        e.push("JOIN candidate pool (bound NPCs of present cast + same-group main characters):");
        e.push(n.join("\n"));
      }
      if (a) {
        e.push("LEAVE candidate pool (currently present, ≥3 required to leave):");
        e.push("    " + n.map(e => e.name).join(", "));
      }
      ne.push(e.join("\n"));
    }
  }
  const le = ne.filter(e => e && e.trim()).join("\n\n");
  try {
    const t = (e || []).map(e => e == null ? undefined : e.name).filter(Boolean).join("+");
    const n = H.userFacts.length > 0 ? H.userFacts.map(e => `- ${e}`).join("\n") : "";
    const s = [V.jailbreak, V.high, V.medium, V.low].filter(Boolean);
    const a = s.join("\n");
    const r = n || "";
    const i = H.episodeBlock || "";
    let o = le;
    const l = [L, Q, ...s, n, H.episodeBlock, H.crossAppBlock, H.mentalModelBlock, Y, w];
    for (const e of l) {
      if (!e) {
        continue;
      }
      const t = String(e);
      const n = o.indexOf(t);
      if (n >= 0) {
        o = o.slice(0, n) + o.slice(n + t.length);
      }
    }
    const c = {
      "NPC 集合人设 (CAST)": L || "",
      "user 人设": Q || "",
      触发世界书: a,
      "永久记忆 (MEMORY)": r,
      "当前 episode": i,
      "跨模式 BRIDGE": H.crossAppBlock || "",
      "场景大纲 (SCENE)": w || "",
      "天气/异地": Y || "",
      系统提示词: o
    };
    N(`多人此时此刻 ${t}`, c, {
      worldBookEntries: V.triggeredEntries || [],
      episodeText: i,
      bridgeText: H.crossAppBlock || ""
    });
  } catch (fe) {
    console.error("[MultiScene TokenBreakdown] failed:", fe && fe.message);
  }
  try {
    console.groupCollapsed(`[MultiScene Prompt] system (${le.length}字) — 點開查看完整內容`);
    console.log(le);
    console.groupEnd();
  } catch {}
  const ce = s || [];
  const de = ce.filter(e => (e == null ? undefined : e.type) !== "cast_change" && !(e == null ? undefined : e.hiddenByUser));
  const ue = Math.max(0, de.length - T);
  const me = de.slice(ue);
  const pe = [];
  for (let a = ce.length - 1; a >= 0; a--) {
    const e = ce[a];
    if (e) {
      if (e.type !== "cast_change") {
        break;
      }
      pe.unshift(e);
    }
  }
  if (pe.length > 0) {
    const e = [];
    const t = [];
    for (const s of pe) {
      const n = (s.charNames || []).filter(Boolean).join("、") || "?";
      const a = (s.reason || "").trim();
      const r = a ? `${n}（補充: 「${a}」）` : n;
      if (s.action === "add") {
        e.push(r);
      } else if (s.action === "remove") {
        t.push(r);
      }
    }
    const n = ["[CAST CHANGE — this turn ONLY]"];
    if (e.length > 0) {
      n.push(`New arrival(s): ${e.join("; ")}. In THIS upcoming narration, weave a natural in-scene reason for their entry (walking in, being invited, arriving with someone, knocking at the door, etc.). Honour any "補充" the user provided. From the NEXT narration onward, treat them as already established present.`);
    }
    if (t.length > 0) {
      n.push(`Departure(s): ${t.join("; ")}. In THIS upcoming narration, give them a brief on-screen exit (leaves the room, takes a call and steps out, says goodbye, etc.). After this turn they are no longer in the scene.`);
    }
    n.push("Keep the rest of the scene coherent. Do not retroactively rewrite earlier paragraphs.");
    le += "\n\n" + n.join("\n");
  }
  {
    const e = ke(c);
    if (e) {
      le += e;
    }
  }
  const he = m({
    realTimeAware: P,
    direction: "forward"
  });
  const ge = [{
    role: "system",
    content: le
  }, ...me.map(e => {
    const t = he(e) || "";
    const n = typeof e.content == "string" ? e.content : String(e.content || "");
    const s = e.role === "user";
    return {
      role: s ? "user" : "assistant",
      content: t + (s ? S ? "⟦meta · USER — off-screen director note, NOT a character in the scene⟧\n" : `⟦meta · ${_} (the user) said/did⟧\n` : "⟦meta · SCENE — your previous narration; each NPC's line is name-tagged inside, keep their voices distinct⟧\n") + n
    };
  })];
  if (P) {
    const e = h();
    const t = `[NOW: ${e.timeStr}【${e.periodLabel}】]`;
    const n = me[me.length - 1];
    const s = (n == null ? undefined : n.timestamp) ? new Date(n.timestamp).getTime() : NaN;
    let a = "";
    if (Number.isFinite(s)) {
      const e = Date.now() - s;
      if (e >= 600000) {
        const t = Math.floor(e / 60000);
        const n = Math.floor(t / 60);
        const s = Math.floor(t / 1440);
        let r;
        r = s >= 1 ? `${s}d` : n >= 1 ? `${n}h` : `${t}min`;
        a = ` [⏳ ${r} since last entry above — NOW is later]`;
      }
    }
    const r = "[continue the scene]";
    if (n && n.role === "user") {
      const e = ge.length - 1;
      if (e >= 0 && ge[e].role === "user") {
        ge[e] = {
          ...ge[e],
          content: ge[e].content + "\n" + t + a
        };
      }
    } else {
      ge.push({
        role: "user",
        content: `${r} ${t}${a}`
      });
    }
  } else {
    const e = me[me.length - 1];
    if (!e || e.role !== "user") {
      ge.push({
        role: "user",
        content: "[continue the scene]"
      });
    }
  }
  try {
    if (typeof window != "undefined" && window.__lastTokenBreakdown) {
      const e = window.__lastTokenBreakdown;
      const t = ge.slice(1);
      const n = g(t);
      const s = t.reduce((e, t) => {
        const n = t == null ? undefined : t.content;
        if (typeof n == "string") {
          return e + n.length;
        } else {
          return e;
        }
      }, 0);
      if (n > 0) {
        const a = (e.rows || []).filter(e => e.name !== "上下文 (历史消息)");
        a.push({
          name: "上下文 (历史消息)",
          tokens: n,
          chars: s
        });
        const r = a.reduce((e, t) => e + t.tokens, 0);
        a.sort((e, t) => t.tokens - e.tokens);
        for (const e of a) {
          e.pct = r > 0 ? e.tokens / r * 100 : 0;
        }
        e.rows = a;
        e.total = r;
        e.historyMessages = t.map(e => ({
          role: e.role,
          preview: typeof e.content == "string" ? e.content : "",
          tokens: g([e])
        }));
        try {
          window.dispatchEvent(new CustomEvent("token-breakdown-updated", {
            detail: e
          }));
        } catch {}
      }
    }
  } catch (fe) {}
  return ge;
}
const yn = ({
  userId: e,
  charId: t,
  onClose: s,
  refreshTrigger: r,
  sessionId: l
}) => {
  const {
    t: c,
    language: d
  } = I();
  const {
    showScreen: u,
    currentScreen: m
  } = T();
  const p = ge.useCallback(() => {
    if (t) {
      ht({
        charId: String(t),
        returnScreen: m || "this-moment-screen",
        returnHintMemoryView: true
      });
      if (s != null) {
        s();
      }
      u("memory-palace-screen");
    }
  }, [t, s, u, m]);
  const [h, g] = ge.useState([]);
  const [x, f] = ge.useState(null);
  const [y, v] = ge.useState("");
  const [C, k] = ge.useState(null);
  const [N, M] = ge.useState("");
  const [P, R] = ge.useState(false);
  const [_, D] = ge.useState(new Set());
  const [B, L] = ge.useState(false);
  const [z, O] = ge.useState(new Set());
  const [F, U] = ge.useState(false);
  ge.useEffect(() => {
    if (e) {
      if (l) {
        j.getBySession(e, l).then(e => {
          g((e || []).filter(e => e.source === "tm" || e.source === "spectate"));
        }).catch(() => {});
      } else if (t) {
        n.get(e, t).then(e => {
          g(((e == null ? undefined : e.summaryHistory) || []).filter(e => e.source === "tm"));
        }).catch(() => {});
      }
    }
  }, [e, t, r, l]);
  const W = async s => {
    var a;
    if (l) {
      try {
        const t = await j.getBySession(e, l);
        new Set((t || []).map(e => e.id));
        const i = new Set(s.map(e => e.id));
        const o = (t || []).filter(e => !i.has(e.id));
        for (const n of o) {
          await j.deleteOne(e, l, n.id);
        }
        for (const n of s) {
          await j.add(e, l, n);
        }
        if (o.length > 0) {
          const t = new Set();
          for (const e of o) {
            const n = String(e.castKey || "").replace(/#spectate$/, "");
            if (n) {
              n.split("|").forEach(e => e && t.add(e));
            }
          }
          const s = new Set(o.map(e => String(e.sessionId)).filter(Boolean));
          for (const i of t) {
            try {
              const t = await n.get(e, i);
              if (!((a = t == null ? undefined : t.summaryHistory) == null ? undefined : a.length)) {
                continue;
              }
              const r = t.summaryHistory.filter(e => e.source !== "multi-scene" && e.source !== "spectate" || !s.has(String(e.sessionId)));
              if (r.length !== t.summaryHistory.length) {
                await n.put(e, i, {
                  ...t,
                  summaryHistory: r
                });
                console.log(`[TM Multi] 級聯刪除 char=${i} 的多人/旁觀 memory 條目: ${t.summaryHistory.length - r.length} 條`);
              }
            } catch (r) {
              console.warn(`[TM Multi] 級聯刪除 char=${i} 失敗:`, r);
            }
          }
        }
      } catch (r) {
        console.error("[TM Multi] 持久化摘要失敗:", r);
      }
    } else {
      try {
        const a = await n.get(e, t);
        const r = (a == null ? undefined : a.summaryHistory) || [];
        if (r.length === 0 && s.length > 0) {
          console.warn("[TM] persistSummaries: DB 中 summaryHistory 為空，跳過以防資料丟失");
          return;
        }
        const i = [...r.filter(e => e.source !== "tm"), ...s].sort((e, t) => (e.id || 0) - (t.id || 0));
        await n.put(e, t, {
          ...a,
          summaryHistory: i
        });
      } catch (r) {
        console.error("[TM] 持久化摘要失敗:", r);
      }
    }
  };
  const H = n => {
    if (!l) {
      if ((n == null ? undefined : n.summary) && t) {
        o(() => import("./main-BO9xa-SQ.js").then(e => e.cq), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).then(s => {
          if (typeof s.pushSummaryToMcp == "function") {
            s.pushSummaryToMcp({
              userId: e,
              characterId: String(t),
              entry: n
            }).catch(() => {});
          }
        }).catch(() => {});
      }
    }
  };
  const V = ge.useMemo(() => {
    var e;
    const t = P ? h : h.filter(e => !e.mergedIntoBigSummary);
    const n = new Map();
    for (const s of t) {
      const t = s.sessionId || s.sessionName || "__ungrouped__";
      const a = s.sessionName || (((e = s.dateRange) == null ? undefined : e.start) ? s.dateRange.start.split(" ")[0] : null) || "";
      if (!n.has(t)) {
        n.set(t, {
          label: a,
          items: []
        });
      }
      n.get(t).items.push(s);
    }
    return [...n.entries()].sort((e, t) => {
      const n = Math.max(...e[1].items.map(e => e.id || 0));
      return Math.max(...t[1].items.map(e => e.id || 0)) - n;
    });
  }, [h, P]);
  const G = n => {
    var s;
    return xe.jsxs("div", {
      style: {
        border: n.isBigSummary ? "2px solid rgba(0,122,255,0.2)" : "1px solid rgba(0,0,0,0.06)",
        borderRadius: "10px",
        padding: "12px",
        background: n.isBigSummary ? "rgba(0,122,255,0.03)" : "#fff",
        opacity: n.mergedIntoBigSummary ? 0.5 : 1
      },
      children: [xe.jsxs("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "6px"
        },
        children: [xe.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "11px",
            color: "#999",
            flexWrap: "wrap"
          },
          children: [P && xe.jsx("input", {
            type: "checkbox",
            checked: _.has(n.id),
            onChange: () => {
              const e = new Set(_);
              if (e.has(n.id)) {
                e.delete(n.id);
              } else {
                e.add(n.id);
              }
              D(e);
            },
            style: {
              marginRight: "4px"
            }
          }), xe.jsx("span", {
            children: A(n.date)
          }), n.isBigSummary && (() => {
            const e = n.summaryLevel || 2;
            const t = e >= 3 ? `${"大".repeat(e - 1)}總結` : c("tmBigSummary", "大總結");
            const s = e >= 3;
            const a = s ? "#E040FB" : "#007AFF";
            const r = s ? "rgba(224,64,251,0.1)" : "rgba(0,122,255,0.1)";
            return xe.jsx("span", {
              style: {
                fontSize: "10px",
                color: a,
                background: r,
                padding: "1px 5px",
                borderRadius: "4px"
              },
              children: t
            });
          })(), n.mergedIntoBigSummary && xe.jsx("span", {
            style: {
              fontSize: "10px",
              color: "#999"
            },
            children: c("tmMerged", "已合併")
          }), (() => {
            const e = n.messageCount || 0;
            if (!e) {
              return null;
            }
            const t = n.dateRange;
            const s = t ? t.start !== t.end && t.end ? `${t.start} — ${t.end}` : t.start : null;
            return xe.jsx("span", {
              style: {
                fontSize: "10px",
                color: "#888",
                background: "rgba(0,0,0,0.04)",
                padding: "1px 5px",
                borderRadius: "4px"
              },
              children: s ? `${e} 條 · ${s}` : `${e} 條`
            });
          })()]
        }), !P && xe.jsxs("div", {
          style: {
            display: "flex",
            gap: "10px",
            flexShrink: 0
          },
          children: [xe.jsx("span", {
            onClick: () => {
              f(n.id);
              v(n.summary || n.content || "");
            },
            style: {
              fontSize: "12px",
              color: "#007AFF",
              cursor: "pointer"
            },
            children: c("tmEdit", "編輯")
          }), xe.jsx("span", {
            onClick: () => (async n => {
              var s;
              var a;
              if (!(await $(c("tmConfirmDeleteSummary", "確定刪除此總結？")))) {
                return;
              }
              let r = h.filter(e => e.id !== n.id);
              if (n.isBigSummary && ((s = n.childSummaryIds) == null ? undefined : s.length)) {
                const e = new Set(n.childSummaryIds);
                r = r.map(t => e.has(t.id) ? {
                  ...t,
                  mergedIntoBigSummary: undefined
                } : t);
              }
              g(r);
              await W(r);
              if (!l && (n == null ? undefined : n.summary) && (n == null ? undefined : n.id) && t) {
                o(() => import("./main-BO9xa-SQ.js").then(e => e.cq), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).then(s => {
                  if (typeof s.deleteSummaryFromMcp == "function") {
                    s.deleteSummaryFromMcp({
                      userId: e,
                      characterId: String(t),
                      entry: n
                    }).catch(() => {});
                  }
                }).catch(() => {});
              }
              if (!l) {
                const n = `tm_last_summarized_${e}_${t}`;
                const s = r.length > 0 && ((a = r[r.length - 1]) == null ? undefined : a.lastMessageIndex) || 0;
                await i.set(n, {
                  lastEntryCount: s
                });
              }
            })(n),
            style: {
              fontSize: "12px",
              color: "#ff3b30",
              cursor: "pointer"
            },
            children: c("btnDelete", "刪除")
          })]
        })]
      }), x === n.id ? xe.jsxs("div", {
        children: [xe.jsx("textarea", {
          value: y,
          onChange: e => v(e.target.value),
          style: {
            width: "100%",
            minHeight: "80px",
            padding: "8px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "13px",
            resize: "vertical",
            boxSizing: "border-box"
          }
        }), xe.jsxs("div", {
          style: {
            display: "flex",
            gap: "6px",
            justifyContent: "flex-end",
            marginTop: "6px"
          },
          children: [xe.jsx("button", {
            onClick: () => f(null),
            style: {
              padding: "5px 12px",
              fontSize: "12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              background: "#fff",
              cursor: "pointer"
            },
            children: c("msgCancel", "取消")
          }), xe.jsx("button", {
            onClick: () => (async e => {
              const t = {
                ...e,
                summary: y
              };
              const n = h.map(n => n.id === e.id ? t : n);
              g(n);
              f(null);
              await W(n);
              H(t);
            })(n),
            style: {
              padding: "5px 12px",
              fontSize: "12px",
              borderRadius: "6px",
              border: "none",
              background: "#007AFF",
              color: "#fff",
              cursor: "pointer"
            },
            children: c("btnSave", "保存")
          })]
        })]
      }) : xe.jsx("div", {
        style: {
          fontSize: "13px",
          color: "#333",
          lineHeight: 1.6,
          whiteSpace: "pre-wrap"
        },
        children: n.summary || n.content
      }), C === n.id ? xe.jsxs("div", {
        style: {
          marginTop: "8px"
        },
        children: [xe.jsx("input", {
          type: "text",
          value: N,
          onChange: e => M(e.target.value),
          placeholder: "關鍵詞1, 關鍵詞2, ...",
          style: {
            width: "100%",
            padding: "6px 8px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            fontSize: "12px",
            boxSizing: "border-box"
          }
        }), xe.jsxs("div", {
          style: {
            display: "flex",
            gap: "6px",
            justifyContent: "flex-end",
            marginTop: "4px"
          },
          children: [xe.jsx("button", {
            onClick: () => k(null),
            style: {
              padding: "3px 8px",
              fontSize: "11px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              background: "#fff",
              cursor: "pointer"
            },
            children: c("msgCancel", "取消")
          }), xe.jsx("button", {
            onClick: () => (async e => {
              const t = N.split(/[,，、;；]+/).map(e => e.trim()).filter(e => e.length > 0);
              const n = {
                ...e,
                keywords: t
              };
              const s = h.map(t => t.id === e.id ? n : t);
              g(s);
              k(null);
              await W(s);
              H(n);
            })(n),
            style: {
              padding: "3px 8px",
              fontSize: "11px",
              borderRadius: "4px",
              border: "none",
              background: "#007AFF",
              color: "#fff",
              cursor: "pointer"
            },
            children: c("btnSave", "保存")
          })]
        })]
      }) : xe.jsxs("div", {
        style: {
          marginTop: "8px",
          display: "flex",
          flexWrap: "wrap",
          gap: "4px",
          alignItems: "center"
        },
        children: [((s = n.keywords) == null ? undefined : s.length) > 0 ? n.keywords.map((e, t) => xe.jsx("span", {
          style: {
            fontSize: "10px",
            color: "#666",
            background: "rgba(0,0,0,0.05)",
            padding: "2px 6px",
            borderRadius: "4px"
          },
          children: e
        }, t)) : xe.jsx("span", {
          style: {
            fontSize: "10px",
            color: "#ccc"
          },
          children: c("tmNoKeywords", "無關鍵詞")
        }), !P && xe.jsx("span", {
          onClick: () => {
            k(n.id);
            M((n.keywords || []).join(", "));
          },
          style: {
            fontSize: "10px",
            color: "#007AFF",
            cursor: "pointer",
            marginLeft: "2px"
          },
          children: "✎"
        })]
      })]
    }, n.id);
  };
  const Y = h.filter(e => !e.mergedIntoBigSummary).length;
  return xe.jsxs("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      background: "#f5f5f7",
      display: "flex",
      flexDirection: "column"
    },
    children: [xe.jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        paddingTop: "max(var(--nuo-safe-top, env(safe-area-inset-top, 0px)), 12px)",
        paddingBottom: "12px",
        paddingLeft: "16px",
        paddingRight: "16px",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        background: "#fff",
        gap: "12px",
        flexShrink: 0
      },
      children: [xe.jsx("button", {
        onClick: s,
        style: {
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px",
          display: "flex"
        },
        children: xe.jsx(gt, {
          size: 20,
          color: "#333"
        })
      }), xe.jsxs("div", {
        style: {
          flex: 1
        },
        children: [xe.jsx("div", {
          style: {
            fontSize: "16px",
            fontWeight: 600,
            color: "#1d1d1f"
          },
          children: c("tmSummaryPanelTitle", "總結記錄")
        }), xe.jsx("div", {
          style: {
            fontSize: "12px",
            color: "#999"
          },
          children: c("tmSummaryPanelCount", "共 {count} 條總結").replace("{count}", Y)
        })]
      }), !P && xe.jsx("button", {
        onClick: () => U(true),
        style: {
          fontSize: "13px",
          color: "#FF9500",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px 8px"
        },
        children: c("btnManualAddSummary", "手動添加")
      }), h.length >= 2 && xe.jsx("button", {
        onClick: () => {
          R(!P);
          D(new Set());
        },
        style: {
          fontSize: "13px",
          color: P ? "#ff3b30" : "#007AFF",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px 8px"
        },
        children: P ? c("msgCancel", "取消") : c("tmMergeBtn", "合併總結")
      })]
    }), xe.jsxs("button", {
      onClick: p,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "14px",
        margin: "12px 16px 0",
        padding: "14px 16px",
        background: "linear-gradient(135deg, #FFFFFF 0%, #F2E0E3 100%)",
        border: "1px solid rgba(176, 119, 136, 0.45)",
        borderRadius: "12px",
        boxShadow: "0 3px 10px -2px rgba(47, 38, 32, 0.1)",
        cursor: "pointer",
        textAlign: "left"
      },
      children: [xe.jsx("span", {
        style: {
          fontSize: "22px",
          lineHeight: 1
        },
        children: "🏛"
      }), xe.jsxs("div", {
        style: {
          flex: 1,
          minWidth: 0
        },
        children: [xe.jsx("div", {
          style: {
            fontFamily: "serif",
            fontStyle: "italic",
            fontSize: "16px",
            fontWeight: 600,
            color: "#1E1E22",
            letterSpacing: "0.3px",
            lineHeight: 1.2
          },
          children: c("memoryPalaceTitle") || "記憶宮殿"
        }), xe.jsx("div", {
          style: {
            fontSize: "11.5px",
            color: "#6A6A74",
            marginTop: "3px"
          },
          children: c("memoryPalaceEnterHintTm") || "走進 TA 的房間，看所有故事與印記"
        })]
      }), xe.jsx("span", {
        style: {
          fontSize: "17px",
          color: "#884E60",
          fontWeight: 300
        },
        children: "→"
      })]
    }), P && xe.jsxs("div", {
      style: {
        display: "flex",
        gap: "8px",
        padding: "8px 16px",
        alignItems: "center",
        background: "rgba(0,122,255,0.04)",
        borderBottom: "1px solid rgba(0,0,0,0.04)"
      },
      children: [xe.jsx("span", {
        style: {
          fontSize: "12px",
          color: "#888",
          flex: 1
        },
        children: c("tmMergeHint", "選擇要合併的總結")
      }), xe.jsx("button", {
        onClick: async () => {
          var s;
          var r;
          var i;
          var l;
          var u;
          var m;
          var p;
          if (!(_.size < 2)) {
            L(true);
            try {
              const f = h.filter(e => _.has(e.id)).sort((e, t) => (e.id || 0) - (t.id || 0));
              const y = f.map((e, t) => `[总结 ${t + 1}] ${e.date || ""}\n${e.summary || e.content}`).join("\n\n---\n\n");
              const v = b(await S());
              if (!v.mainApiUrl || !v.mainApiKey) {
                throw new Error("請先設定 API");
              }
              const j = t ? await a.get(e, t).catch(() => null) : null;
              const C = await ct(j == null ? undefined : j.customSummaryInstructions);
              const k = C ? `\n使用者自订总结要求（必须遵守，若与上方规则冲突则以此为准）：${C}` : "";
              const N = Math.max(...f.map(e => e.summaryLevel || (e.isBigSummary ? 2 : 1))) + 1;
              const I = N >= 3 ? `${"大".repeat(N - 1)}总结` : "大总结";
              const T = rt(d);
              const A = await w({
                messages: [{
                  role: "system",
                  content: `You are an expert conversation summarizer. Merge the following multiple summary segments into one complete, coherent ${I} that preserves all important details and the full plot progression. Write the output in ${T}. On the last line, output keywords in the format: [关键词: word1, word2, ...].${k}`
                }, {
                  role: "user",
                  content: y
                }],
                settings: {
                  ...v,
                  temperature: 0.3
                },
                preferStreaming: false
              });
              if (!(A == null ? undefined : A.trim())) {
                throw new Error("合併生成為空");
              }
              const $ = ot(A.trim());
              const M = $.summaryText || A.trim();
              const P = $.keywords.length > 0 ? $.keywords : lt(M);
              const B = f.map(e => e.id);
              const L = ((s = f.find(e => e.castKey)) == null ? undefined : s.castKey) || null;
              const z = L ? {
                castKey: L,
                castNames: ((r = f.find(e => Array.isArray(e.castNames))) == null ? undefined : r.castNames) || []
              } : {};
              const O = {
                _eventVersion: 4,
                id: Date.now(),
                date: new Date().toISOString(),
                summary: M,
                content: M,
                startMessageIndex: Math.min(...f.map(e => e.startMessageIndex || 0)),
                lastMessageIndex: Math.max(...f.map(e => e.lastMessageIndex || 0)),
                messageCount: f.reduce((e, t) => e + (t.messageCount || 0), 0),
                dateRange: {
                  start: ((l = (i = f[0]) == null ? undefined : i.dateRange) == null ? undefined : l.start) || "",
                  end: ((m = (u = f[f.length - 1]) == null ? undefined : u.dateRange) == null ? undefined : m.end) || ""
                },
                source: "tm",
                keywords: P,
                isBigSummary: true,
                summaryLevel: N,
                childSummaryIds: B,
                ...z,
                ...(((p = f[0]) == null ? undefined : p.sessionId) && {
                  sessionId: f[0].sessionId,
                  sessionName: f[0].sessionName
                })
              };
              const F = h.map(e => B.includes(e.id) ? {
                ...e,
                mergedIntoBigSummary: O.id
              } : e);
              F.push(O);
              g(F);
              await W(F);
              if (!L && (O == null ? undefined : O.summary) && t) {
                o(() => import("./main-BO9xa-SQ.js").then(e => e.cq), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).then(n => {
                  if (typeof n.pushSummaryToMcp == "function") {
                    n.pushSummaryToMcp({
                      userId: e,
                      characterId: String(t),
                      entry: O
                    }).catch(() => {});
                  }
                }).catch(() => {});
              }
              if (L) {
                try {
                  const t = String(L).endsWith("#spectate");
                  const s = String(L).replace(/#spectate$/, "").split("|").filter(Boolean);
                  const a = t ? "spectate" : "multi-scene";
                  const r = (O.castNames || []).filter(e => e).join("、");
                  const i = `${r ? `[多人場景 · ${r}] ` : "[多人場景] "}${M}`;
                  for (let o = 0; o < s.length; o++) {
                    const r = s[o];
                    const l = {
                      ...O,
                      id: O.id + 1 + o,
                      summary: i,
                      content: i,
                      source: a,
                      targetCharacterId: String(r),
                      childSummaryIds: undefined,
                      ...(t && {
                        solo: true
                      })
                    };
                    try {
                      await n.appendHistory(e, String(r), l);
                    } catch (x) {
                      console.warn(`[TM Multi] 大總結同步 char=${r} 失敗:`, x);
                    }
                  }
                } catch (x) {
                  console.warn("[TM Multi] 大總結同步 per-char memory 失敗:", x);
                }
              }
              R(false);
              D(new Set());
              E(c("tmMergeSuccess", "已合併 {count} 個總結").replace("{count}", f.length));
            } catch (x) {
              console.error("[TM] 合併總結失敗:", x);
              E("合併失敗: " + x.message);
            } finally {
              L(false);
            }
          }
        },
        disabled: _.size < 2 || B,
        style: {
          fontSize: "13px",
          padding: "6px 16px",
          borderRadius: "8px",
          border: "none",
          background: _.size >= 2 ? "#007AFF" : "#ddd",
          color: "#fff",
          cursor: _.size >= 2 ? "pointer" : "default"
        },
        children: B ? c("tmMerging", "合併中...") : c("tmMergeAction", "合併 ({count})").replace("{count}", _.size)
      })]
    }), xe.jsx("div", {
      style: {
        flex: 1,
        overflow: "auto",
        padding: "12px 16px"
      },
      children: h.length === 0 ? xe.jsx("div", {
        style: {
          textAlign: "center",
          padding: "40px 0",
          color: "#bbb",
          fontSize: "14px"
        },
        children: c("tmNoSummaryYet", "尚無總結記錄")
      }) : V.length === 1 && V[0][0] === "__ungrouped__" ? xe.jsx("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        },
        children: V[0][1].items.sort((e, t) => (t.id || 0) - (e.id || 0)).map(G)
      }) : xe.jsx("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        },
        children: V.map(([e, t]) => {
          const n = z.has(e);
          const s = e === "__ungrouped__" ? c("tmUngroupedSummaries", "未分類") : t.label || e;
          const a = t.items.length;
          return xe.jsxs("div", {
            children: [xe.jsxs("button", {
              onClick: () => (e => {
                O(t => {
                  const n = new Set(t);
                  if (n.has(e)) {
                    n.delete(e);
                  } else {
                    n.add(e);
                  }
                  return n;
                });
              })(e),
              style: {
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 12px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                background: "rgba(0,0,0,0.03)",
                marginBottom: n ? 0 : "8px"
              },
              children: [xe.jsx("span", {
                style: {
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#555"
                },
                children: s
              }), xe.jsxs("span", {
                style: {
                  fontSize: "11px",
                  color: "#999"
                },
                children: [a, " ", c("tmSummaryUnit", "條"), " ", n ? "▸" : "▾"]
              })]
            }), !n && xe.jsx("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              },
              children: t.items.sort((e, t) => (t.id || 0) - (e.id || 0)).map(G)
            })]
          }, e);
        })
      })
    }), xe.jsx("div", {
      style: {
        padding: "8px 16px",
        paddingBottom: "max(var(--nuo-safe-bottom, env(safe-area-inset-bottom, 0px)), 8px)",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        background: "#fff",
        flexShrink: 0
      },
      children: xe.jsx("div", {
        style: {
          fontSize: "11px",
          color: "#bbb",
          textAlign: "center"
        },
        children: c("tmSummarySharedHint", "總結會寫入共享記憶，在線上聊天和群聊中也能看到。")
      })
    }), xe.jsx(pt, {
      open: F,
      onClose: () => U(false),
      onSubmit: async ({
        summary: s,
        keywords: a,
        date: r,
        sessionName: i
      }) => {
        const c = (r || "").split("T")[0];
        const d = {
          _eventVersion: 4,
          id: Date.now(),
          date: r,
          summary: s,
          content: s,
          startMessageIndex: 0,
          lastMessageIndex: 0,
          messageCount: 0,
          dateRange: {
            start: c,
            end: c
          },
          source: "tm",
          keywords: Array.isArray(a) ? a : [],
          topics: [],
          openThreads: [],
          evidencedFacts: [],
          obsoleteFacts: [],
          isManual: true,
          ...(i ? {
            sessionId: `manual_${Date.now()}`,
            sessionName: i
          } : {})
        };
        const u = [...h, d];
        g(u);
        const m = () => {
          if (d.summary && t) {
            o(() => import("./main-BO9xa-SQ.js").then(e => e.cq), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).then(n => {
              if (typeof n.pushSummaryToMcp == "function") {
                n.pushSummaryToMcp({
                  userId: e,
                  characterId: String(t),
                  entry: d
                }).catch(() => {});
              }
            }).catch(() => {});
          }
        };
        if (l) {
          try {
            await j.add(e, l, d);
          } catch (p) {
            console.error("[TM Multi] 手動添加總結失敗:", p);
          }
          m();
          U(false);
          return;
        }
        try {
          const s = await n.get(e, t).catch(() => null);
          const a = [...((s == null ? undefined : s.summaryHistory) || []).filter(e => e.source !== "tm"), ...u].sort((e, t) => (e.id || 0) - (t.id || 0));
          await n.put(e, t, {
            ...(s || {}),
            summaryHistory: a
          });
        } catch (p) {
          console.error("[TM] 手動添加總結失敗:", p);
        }
        m();
        U(false);
      },
      t: c
    })]
  });
};
const vn = fe.memo(({
  entryId: e,
  content: t,
  isPlaying: n,
  isLoading: s,
  onPlay: a
}) => {
  const {
    t: r
  } = I();
  return xe.jsxs("div", {
    className: "tm-voice-controls",
    children: [xe.jsxs("button", {
      className: `tm-voice-btn${n ? " playing" : ""}${s ? " loading" : ""}`,
      onClick: n => {
        n.stopPropagation();
        if (a) {
          a(e, t);
        }
      },
      disabled: s,
      title: n ? r("tmVoiceStop", "停止播放") : r("tmVoicePlay", "播放語音"),
      children: [s ? xe.jsx("svg", {
        className: "tm-voice-icon tm-voice-spinner",
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        children: xe.jsx("path", {
          d: "M21 12a9 9 0 1 1-6.219-8.56"
        })
      }) : n ? xe.jsxs("svg", {
        className: "tm-voice-icon",
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: [xe.jsx("rect", {
          x: "6",
          y: "4",
          width: "4",
          height: "16",
          rx: "1"
        }), xe.jsx("rect", {
          x: "14",
          y: "4",
          width: "4",
          height: "16",
          rx: "1"
        })]
      }) : xe.jsx("svg", {
        className: "tm-voice-icon",
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: xe.jsx("path", {
          d: "M8 5v14l11-7z"
        })
      }), xe.jsx("span", {
        className: "tm-voice-label",
        children: s ? r("tmVoiceLoading", "合成中…") : n ? r("tmVoiceStop", "停止") : r("tmVoicePlay", "播放")
      })]
    }), n && xe.jsxs("div", {
      className: "tm-voice-wave",
      children: [xe.jsx("span", {}), xe.jsx("span", {}), xe.jsx("span", {}), xe.jsx("span", {})]
    })]
  });
});
const bn = [{
  value: "smart",
  labelKey: "tmVoiceModeSmart",
  fallbackLabel: "智能模式"
}, {
  value: "dialogue",
  labelKey: "tmVoiceModeDialogue",
  fallbackLabel: "僅對話"
}, {
  value: "full",
  labelKey: "tmVoiceModeFull",
  fallbackLabel: "全文"
}];
const Sn = ({
  checked: e,
  onChange: t
}) => xe.jsxs("label", {
  style: {
    position: "relative",
    display: "inline-block",
    width: "40px",
    height: "22px",
    flexShrink: 0
  },
  children: [xe.jsx("input", {
    type: "checkbox",
    style: {
      opacity: 0,
      width: 0,
      height: 0
    },
    checked: e,
    onChange: t
  }), xe.jsx("span", {
    style: {
      position: "absolute",
      cursor: "pointer",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: e ? "#4caf50" : "#ccc",
      transition: ".4s",
      borderRadius: "22px"
    },
    children: xe.jsx("span", {
      style: {
        position: "absolute",
        height: "16px",
        width: "16px",
        left: "3px",
        bottom: "3px",
        backgroundColor: "white",
        transition: ".4s",
        borderRadius: "50%",
        transform: e ? "translateX(18px)" : "translateX(0)"
      }
    })
  })]
});
const wn = fe.memo(({
  voiceEnabled: e,
  setVoiceEnabled: t,
  voiceAutoPlay: n,
  setVoiceAutoPlay: s,
  voiceMode: a,
  setVoiceMode: r
}) => {
  const {
    t: i
  } = I();
  const o = bn.some(e => e.value === a) ? a : "smart";
  return xe.jsxs("div", {
    className: "tm-settings-section",
    children: [xe.jsxs("div", {
      style: {
        fontSize: "14px",
        fontWeight: "600",
        color: "#333",
        marginBottom: "14px"
      },
      children: ["🔊 ", i("tmVoiceSettingsTitle", "語音生成")]
    }), xe.jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "14px"
      },
      children: [xe.jsxs("div", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        children: [xe.jsx("span", {
          className: "tm-settings-label",
          style: {
            marginBottom: 0
          },
          children: i("tmVoiceEnable", "啟用語音")
        }), xe.jsx("span", {
          style: {
            fontSize: "11px",
            color: "#999",
            marginTop: "2px"
          },
          children: i("tmVoiceEnableDesc", "角色段落可播放 TTS 語音（需設定 MiniMax API）")
        })]
      }), xe.jsx(Sn, {
        checked: e,
        onChange: () => t(e => !e)
      })]
    }), xe.jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "14px",
        opacity: e ? 1 : 0.4,
        pointerEvents: e ? "auto" : "none"
      },
      children: [xe.jsxs("div", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        children: [xe.jsx("span", {
          className: "tm-settings-label",
          style: {
            marginBottom: 0
          },
          children: i("tmVoiceAutoPlay", "自動播放")
        }), xe.jsx("span", {
          style: {
            fontSize: "11px",
            color: "#999",
            marginTop: "2px"
          },
          children: i("tmVoiceAutoPlayDesc", "AI 生成完成後自動朗讀對話")
        })]
      }), xe.jsx(Sn, {
        checked: n,
        onChange: () => s(e => !e)
      })]
    }), xe.jsxs("div", {
      style: {
        opacity: e ? 1 : 0.4,
        pointerEvents: e ? "auto" : "none"
      },
      children: [xe.jsx("span", {
        className: "tm-settings-label",
        style: {
          display: "block",
          marginBottom: "8px"
        },
        children: i("tmVoiceModeLabel", "朗讀模式")
      }), xe.jsx("div", {
        className: "tm-options-row",
        style: {
          marginBottom: "4px"
        },
        children: bn.map(e => {
          const t = i(e.labelKey);
          const n = t && t !== e.labelKey ? t : e.fallbackLabel;
          return xe.jsx("button", {
            className: "tm-pill-btn" + (o === e.value ? " active" : ""),
            onClick: () => r(e.value),
            children: n
          }, e.value);
        })
      }), xe.jsxs("div", {
        style: {
          fontSize: "11px",
          color: "#999",
          marginTop: "6px"
        },
        children: [o === "smart" && i("tmVoiceModeSmartDesc", "對白＋情感句：選讀「」對白與感嘆句，跳過純景物描寫"), o === "dialogue" && i("tmVoiceModeDialogueDesc", "僅朗讀「」內的對白，\"\"視為引用不朗讀"), o === "full" && i("tmVoiceModeFullDesc", "朗讀角色的完整輸出")]
      })]
    })]
  });
});
const jn = {
  ocean: "pomodoroNoiseOcean",
  cafe: "pomodoroNoiseCafe",
  night: "pomodoroNoiseNight",
  market: "pomodoroNoiseMarket",
  birds: "pomodoroNoiseBirds",
  none: "pomodoroNoiseNone"
};
const Cn = fe.memo(({
  noiseOn: e,
  setNoiseOn: t,
  selectedNoise: n,
  setSelectedNoise: s,
  customNoises: a,
  addCustomNoise: r,
  removeCustomNoise: i
}) => {
  const {
    t: o
  } = I();
  const [l, c] = ge.useState(false);
  const [d, u] = ge.useState("");
  const [m, p] = ge.useState("");
  const [h, g] = ge.useState("");
  const x = ge.useRef(null);
  const f = [...[{
    id: "ocean"
  }, {
    id: "cafe"
  }, {
    id: "night"
  }, {
    id: "market"
  }, {
    id: "birds"
  }].map(e => ({
    id: e.id,
    label: o(jn[e.id])
  })), ...a.map(e => ({
    id: e.id,
    label: e.label
  })), {
    id: "none",
    label: o("pomodoroNoiseNone")
  }];
  return xe.jsxs("div", {
    className: "tm-settings-section",
    children: [xe.jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "14px"
      },
      children: [xe.jsxs("div", {
        style: {
          fontSize: "14px",
          fontWeight: "600",
          color: "#333"
        },
        children: ["🎵 ", o("tmWhiteNoiseTitle", "背景白噪音")]
      }), xe.jsxs("label", {
        style: {
          position: "relative",
          display: "inline-block",
          width: "40px",
          height: "22px",
          flexShrink: 0
        },
        children: [xe.jsx("input", {
          type: "checkbox",
          style: {
            opacity: 0,
            width: 0,
            height: 0
          },
          checked: e,
          onChange: () => t(e => !e)
        }), xe.jsx("span", {
          style: {
            position: "absolute",
            cursor: "pointer",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: e ? "#4caf50" : "#ccc",
            transition: ".4s",
            borderRadius: "22px"
          },
          children: xe.jsx("span", {
            style: {
              position: "absolute",
              height: "16px",
              width: "16px",
              left: "3px",
              bottom: "3px",
              backgroundColor: "white",
              transition: ".4s",
              borderRadius: "50%",
              transform: e ? "translateX(18px)" : "translateX(0)"
            }
          })
        })]
      })]
    }), xe.jsxs("div", {
      style: {
        opacity: e ? 1 : 0.4,
        pointerEvents: e ? "auto" : "none"
      },
      children: [xe.jsx("div", {
        style: {
          display: "flex",
          gap: "6px",
          flexWrap: "wrap",
          marginBottom: "12px"
        },
        children: f.map(e => xe.jsx("button", {
          onClick: () => s(e.id),
          style: {
            padding: "6px 12px",
            borderRadius: "8px",
            border: "1px solid",
            borderColor: n === e.id ? "#4caf50" : "rgba(0,0,0,0.1)",
            background: n === e.id ? "rgba(76,175,80,0.1)" : "rgba(0,0,0,0.03)",
            color: n === e.id ? "#4caf50" : "#666",
            fontSize: "12px",
            cursor: "pointer",
            transition: "all 0.2s"
          },
          children: e.label
        }, e.id))
      }), xe.jsx("div", {
        style: {
          fontSize: "13px",
          color: "#888",
          marginBottom: "8px"
        },
        children: o("pomodoroCustomNoise")
      }), a.length > 0 && xe.jsx("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          marginBottom: "10px"
        },
        children: a.map(e => xe.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "6px 10px",
            borderRadius: "8px",
            background: "rgba(0,0,0,0.03)"
          },
          children: [xe.jsx("span", {
            style: {
              fontSize: "12px",
              color: "#555",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              flex: 1
            },
            children: e.label
          }), xe.jsx("button", {
            onClick: () => i(e.id),
            style: {
              background: "none",
              border: "none",
              color: "#999",
              cursor: "pointer",
              padding: "2px 4px",
              fontSize: "14px"
            },
            children: "✕"
          })]
        }, e.id))
      }), l ? xe.jsxs("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: "10px",
          borderRadius: "10px",
          background: "rgba(0,0,0,0.03)"
        },
        children: [xe.jsx("input", {
          value: d,
          onChange: e => u(e.target.value),
          placeholder: o("tmNoiseNamePlaceholder", "名稱"),
          maxLength: 10,
          style: {
            padding: "8px 10px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            background: "#fff",
            color: "#333",
            fontSize: "13px",
            outline: "none"
          }
        }), xe.jsx("input", {
          value: h || m,
          onChange: e => {
            p(e.target.value);
            g("");
          },
          placeholder: o("tmNoiseUrlPlaceholder", "音頻 URL（可選，或上傳檔案）"),
          readOnly: !!h,
          style: {
            padding: "8px 10px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            background: "#fff",
            color: "#333",
            fontSize: "13px",
            outline: "none"
          }
        }), xe.jsx("input", {
          ref: x,
          type: "file",
          accept: "audio/*",
          style: {
            display: "none"
          },
          onChange: e => {
            var t;
            const n = (t = e.target.files) == null ? undefined : t[0];
            if (!n) {
              return;
            }
            const s = new FileReader();
            s.onload = () => {
              p(s.result);
              g(n.name);
            };
            s.readAsDataURL(n);
            if (!d) {
              u(n.name.replace(/\.[^.]+$/, "").slice(0, 10));
            }
          }
        }), xe.jsxs("div", {
          style: {
            display: "flex",
            gap: "6px"
          },
          children: [xe.jsx("button", {
            onClick: () => {
              var e;
              if ((e = x.current) == null) {
                return undefined;
              } else {
                return e.click();
              }
            },
            style: {
              flex: 1,
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              background: "#fff",
              color: "#555",
              fontSize: "12px",
              cursor: "pointer"
            },
            children: o("pomodoroUploadFile")
          }), xe.jsx("button", {
            onClick: () => {
              if (d.trim() && m) {
                r(d.trim(), m);
                u("");
                p("");
                g("");
                c(false);
              }
            },
            style: {
              flex: 1,
              padding: "8px",
              borderRadius: "6px",
              border: "none",
              background: d.trim() && m ? "#4caf50" : "rgba(0,0,0,0.08)",
              color: d.trim() && m ? "#fff" : "#999",
              fontSize: "12px",
              cursor: "pointer",
              transition: "all 0.2s"
            },
            children: o("pomodoroConfirmAdd")
          })]
        }), xe.jsx("button", {
          onClick: () => {
            c(false);
            u("");
            p("");
            g("");
          },
          style: {
            background: "none",
            border: "none",
            color: "#999",
            fontSize: "11px",
            cursor: "pointer",
            textAlign: "center"
          },
          children: o("pomodoroCancel")
        })]
      }) : xe.jsx("button", {
        onClick: () => c(true),
        style: {
          width: "100%",
          padding: "8px",
          borderRadius: "8px",
          border: "1px dashed rgba(0,0,0,0.15)",
          background: "transparent",
          color: "#888",
          fontSize: "12px",
          cursor: "pointer"
        },
        children: o("pomodoroAddCustomSound")
      })]
    })]
  });
});
const kn = e => String(e || "").replace(/<[^>]+>/g, "").replace(/[*_~`]+/g, "").replace(/\s+/g, " ").trim();
const Nn = ({
  activeChar: e,
  activeUser: t,
  storyEntries: n,
  tmApiSettings: s,
  safeCurrentProfileUserId: r,
  characters: i,
  scenarioOutline: o,
  storyTimeStr: l,
  participants: c,
  spectate: d,
  t: u
}) => {
  const [m, p] = ge.useState(false);
  const [h, g] = ge.useState(0);
  const [x, f] = ge.useState(null);
  const [y, v] = ge.useState(false);
  const [b, j] = ge.useState(false);
  const [C, k] = ge.useState("");
  const [N, I] = ge.useState(1);
  const [T, A] = ge.useState(false);
  ge.useEffect(() => {
    const e = () => {
      const e = window.innerWidth * 0.95 / 860;
      const t = window.innerHeight * 0.9 / 540;
      I(Math.min(1, e, t));
    };
    if (m) {
      e();
      window.addEventListener("resize", e);
      return () => window.removeEventListener("resize", e);
    }
  }, [m]);
  const $ = ge.useCallback(async (m = {}) => {
    var h;
    var x;
    try {
      const y = s || (await S());
      const b = typeof m.rawImgDesc == "string" && m.rawImgDesc.trim();
      if (!(x = y) || (!x.novelAiEnabled || !x.novelAiKey) && !x.pollinationsEnabled && (!x.googleImagenEnabled || !x.googleImagenKey) && (!x.geminiImageEnabled || !x.geminiImageKey) && (!x.grokEnabled || !x.grokKey) && (!x.gptImageEnabled || !x.gptImageKey)) {
        E(u("tmSnapshotNoApi", "請先在設定中啟用圖片生成 API"));
        return;
      }
      if (!(e == null ? undefined : e.id)) {
        E(u("tmSnapshotNoChar", "請先選擇角色"));
        return;
      }
      k("");
      v(false);
      j(false);
      f(null);
      p(true);
      g(1);
      await new Promise(e => setTimeout(e, 600));
      g(2);
      await new Promise(e => setTimeout(e, 180));
      g(3);
      let C = "";
      try {
        const t = await a.get(r, e.id);
        C = (e == null ? undefined : e.imagePrompt) || (t == null ? undefined : t.charImagePrompt) || M(e.description) || "";
      } catch {
        C = M(e == null ? undefined : e.description) || "";
      }
      const N = Array.isArray(c) && c.length >= 2;
      let I = c;
      if (N) {
        try {
          const e = await a.getByUser(r);
          const t = new Map((e || []).map(e => [String(e.characterId), e]));
          I = c.map(e => {
            var n;
            return {
              ...e,
              imagePrompt: e.imagePrompt || ((n = t.get(String(e.id))) == null ? undefined : n.charImagePrompt) || M(e.description) || ""
            };
          });
        } catch {}
      }
      const {
        lastChar: T,
        lastUser: A,
        recentExchange: $
      } = (e => {
        const t = (e || []).filter(e => !e.hidden && e.content);
        let n = "";
        let s = "";
        for (let a = t.length - 1; a >= 0 && (n || t[a].role !== "char" || (n = kn(t[a].content).slice(0, 600)), s || t[a].role !== "user" || (s = kn(t[a].content).slice(0, 300)), !n || !s); a--);
        return {
          lastChar: n,
          lastUser: s,
          recentExchange: t.slice(-5).map(e => `[${e.role === "char" ? "CHARACTER" : "USER"}]: ${kn(e.content).slice(0, 350)}`).join("\n")
        };
      })(n);
      const B = (e => {
        const t = ((e == null ? undefined : e.novelAiImageSize) || (e == null ? undefined : e.pollinationsImageSize) || (e == null ? undefined : e.googleImagenImageSize) || (e == null ? undefined : e.geminiImageSize) || (e == null ? undefined : e.grokImageSize) || "1024x1024").split("x").map(Number);
        if ((t[0] || 1024) >= (t[1] || 1024)) {
          return "landscape";
        } else {
          return "portrait";
        }
      })(y);
      const L = P(t);
      let U;
      let W = null;
      if (b) {
        U = m.rawImgDesc.trim();
      } else {
        const n = await Ye({
          char: e,
          mode: "all",
          apiSettings: y
        }).catch(() => "");
        W = await (async ({
          charName: e,
          userName: t,
          charAppearance: n,
          userAppearance: s,
          scenarioOutline: a,
          storyTimeStr: r,
          recentExchange: i,
          lastChar: o,
          lastUser: l,
          orientation: c,
          apiSettings: d,
          allCharacters: u,
          participants: m,
          spectate: p,
          imageWbExtra: h = ""
        }) => {
          const g = Array.isArray(m) && m.length >= 2;
          const x = {
            userName: t,
            charName: e,
            others: g ? m.filter(t => (t == null ? undefined : t.name) && t.name !== e).map(e => ({
              name: e.name
            })) : (u || []).filter(t => (t == null ? undefined : t.name) && t.name !== e).slice(0, 12).map(e => ({
              name: e.name
            }))
          };
          const f = z(d, "tm", x, h);
          const y = `You are an expert image generation prompt engineer for a visual-novel style image generator.\nRead the story moment carefully and ground EVERY visual choice (subject, framing, props, lighting, environment) in what actually just happened in the story.\n\n${c === "landscape" ? "Canvas is LANDSCAPE (wide, 16:9). Choose composition based on SUBJECT, not on canvas — close-ups still work in landscape." : "Canvas is PORTRAIT (vertical). Choose composition based on SUBJECT, not on canvas."}${g ? `\n⚠️ THIS IS A MULTI-CHARACTER OFFLINE SCENE. The named cast in this scene is: ${m.map(e => e.name).join(", ")}${p ? " (user OFF-SCREEN, observing only)" : `, plus user ${t || ""}`}.\nWhen 2+ named cast members appear in the moment you describe, emit [SUBJECT:SCENE_WITH_PEOPLE|cast=NAME1,NAME2,...] (or TWO_PEOPLE if just 2 in frame). The cast= list MUST contain the actual NAMES from the cast above — this tells downstream image gen which characters' appearances to inject.${p ? " Do NOT include user — user is observing off-screen." : ""}` : ""}\n\nDo NOT default to a character selfie / portrait / close-up when the moment is really about a place, an object, or a wide scene.\n- "she handed me a flower" → the flower is the subject (OBJECT), not her face.\n- "we sat on the balcony watching the city" → balcony/city scene with two small figures (TWO_PEOPLE or SCENE_WITH_PEOPLE).\n- "her eyes filled with tears" → close-up portrait (PERSON_EMOTION) IS correct here.\n- When BOTH user and character are clearly present in the moment (we / 我們 / 兩人 / together / hand-in-hand / hug / kiss / 牽手 / 擁抱) → use TWO_PEOPLE so both appearances get injected.\n\n${f}\n\nOutput ONLY the image prompt. No commentary, no "Sure, here is...", no quotes.`;
          const v = [...(g ? m.map(e => {
            const t = String(e.imagePrompt || "").trim().slice(0, 180);
            if (t) {
              return `Cast member "${e.name}" reference appearance: ${t}`;
            } else {
              return `Cast member in scene: ${e.name}`;
            }
          }) : [n ? `Character "${e || "the character"}" reference appearance: ${n.slice(0, 220)}` : `Character in story: ${e || "the character"}`]), (!g || !p) && (s ? `Partner/user "${t || "user"}" reference appearance: ${s.slice(0, 160)}` : `Partner/user in story: ${t || "the user"}`), "(Appearances above are reference only — they will be injected downstream automatically. You may mention identifying features when subject is PERSON_EMOTION close-up; otherwise focus on action/scene/lighting.)", a ? `Story scenario / setting: ${String(a).slice(0, 220)}` : "", r ? `In-story time: ${r}` : "", "", "--- STORY MOMENT TO ILLUSTRATE ---", i || (o ? `[CHARACTER]: ${o}` : ""), l && !i ? `[USER]: ${l}` : "", "---", "", g ? "Output the image prompt now. If multiple cast members appear in the frame, START with [SUBJECT:SCENE_WITH_PEOPLE|cast=Name1,Name2,...] using actual names from the cast list. Otherwise use the most accurate single SUBJECT. The CONTENT must reflect THIS specific moment:" : "Output the image prompt now (must start with [SUBJECT:XXX]). The CONTENT must reflect THIS specific moment, not a generic anime template:"].filter(Boolean);
          try {
            const e = await O();
            return ((await w({
              messages: [{
                role: "system",
                content: y
              }, {
                role: "user",
                content: v.join("\n")
              }],
              preferStreaming: false,
              settings: e
            })) || "").trim().replace(/^[“'””''「」『』【】\s]+|[“'””''「」『』【】\s]+$/g, "") || "";
          } catch (b) {
            console.warn("[TM Snapshot] CG prompt 生成失敗，使用備援:", b);
            return "";
          }
        })({
          charName: e.name,
          userName: t == null ? undefined : t.name,
          charAppearance: C,
          userAppearance: L,
          scenarioOutline: o,
          storyTimeStr: l,
          recentExchange: $,
          lastChar: T,
          lastUser: A,
          orientation: B,
          apiSettings: y,
          allCharacters: i,
          participants: I,
          spectate: d,
          imageWbExtra: n
        });
        const s = (({
          charName: e,
          userName: t,
          scenarioOutline: n,
          storyTimeStr: s,
          lastChar: a,
          lastUser: r,
          participants: i,
          spectate: o
        }) => {
          const l = `${a || ""} ${r || ""} ${n || ""}`;
          const c = Array.isArray(i) && i.length >= 2;
          const d = c ? i.map(e => ({
            name: e.name,
            idx: l.indexOf(e.name)
          })).filter(e => e.idx >= 0).sort((e, t) => e.idx - t.idx).map(e => e.name) : [];
          let u;
          u = c ? d.length >= 2 ? F.SCENE_WITH_PEOPLE : d.length === 1 ? F.PERSON_ACTION : F.SCENE_WITH_PEOPLE : R(l) || F.SCENE_WITH_PEOPLE;
          const m = c ? d.length >= 2 ? d : i.map(e => e.name).slice(0, 6) : [];
          const p = m.length > 0 ? `|cast=${m.join(",")}${o ? "" : t ? `,user(${t})` : ",user"}` : "";
          const h = s ? `, ${s}` : "";
          const g = n ? `, setting evokes ${String(n).slice(0, 80)}` : "";
          const x = m.length > 0 ? m.join(" and ") : null;
          const f = {
            [F.PERSON_EMOTION]: `close-up portrait of ${e || "the character"}, soft expressive lighting, intimate mood${h}`,
            [F.PERSON_ACTION]: `medium shot of ${d[0] || e || "the character"} in mid action, cinematic lighting${h}${g}`,
            [F.TWO_PEOPLE]: `medium shot of ${e || "the character"} together with ${t || "partner"}, both in frame, warm cinematic lighting${h}${g}`,
            [F.SCENE_WITH_PEOPLE]: c ? `group scene with ${x || "multiple figures"} present in frame${o ? "" : `, ${t || "user"} also present`}, cinematic group composition, atmospheric lighting${h}${g}` : `wide environmental shot, two figures present but small in frame, atmospheric lighting${h}${g}`,
            [F.OBJECT]: `still life close-up of the key object from the scene, shallow depth of field, soft directional light${h}`,
            [F.SCENERY]: `wide cinematic landscape, no humans, atmospheric lighting${h}${g}`
          };
          return {
            subject: u,
            prompt: `[SUBJECT:${u}${p}] ${f[u] || f[F.SCENE_WITH_PEOPLE]}`
          };
        })({
          charName: e.name,
          userName: t == null ? undefined : t.name,
          scenarioOutline: o,
          storyTimeStr: l,
          lastChar: T,
          lastUser: A,
          participants: I,
          spectate: d
        });
        U = W || s.prompt;
      }
      const H = /\[SUBJECT:[A-Z_]+\]/i.test(U);
      let V = null;
      if (!H) {
        V = R(`${U} ${T || ""} ${A || ""}`) || null;
      }
      const G = "anime CG illustration, visual novel key visual, cinematic composition, high detail";
      let Y = [];
      let K = null;
      try {
        const t = await a.getByUser(r);
        const n = new Map((t || []).map(e => [String(e.characterId), e]));
        Y = (i || []).map(e => {
          var t;
          return {
            id: e.id,
            name: e.name,
            gender: e.gender,
            imagePrompt: e.imagePrompt || ((t = n.get(String(e.id))) == null ? undefined : t.charImagePrompt) || M(e.description) || ""
          };
        }).filter(e => e.name);
        if (e == null ? undefined : e.id) {
          K = ((h = n.get(String(e.id))) == null ? undefined : h.imagePreset) || null;
        }
      } catch {}
      const X = m.useRaw ? {
        prompt: U,
        subject: "RAW",
        style: "raw",
        structured: null
      } : _({
        rawImgDesc: U,
        subjectOverride: V,
        char: e,
        charAppearance: C,
        user: t,
        extraChars: Y,
        sceneType: "tm",
        apiSettings: y,
        imagePreset: K
      });
      const J = m.useRaw ? X.prompt : X.style === "tag" ? `${X.prompt}, ${G}` : `${G}. ${X.prompt}`;
      console.groupCollapsed("[TM Snapshot] 📷");
      console.log("🤖 ai prompt:", W ? W.slice(0, 200) : "(failed → fallback)");
      console.log("🏷️ subject:", X.subject, "| style:", X.style, "| override:", V || "(none)");
      console.log("👤 charAppearance:", C ? C.slice(0, 100) : "(empty)");
      console.log("🧍 userAppearance:", L || "(empty — 設定 user 性別/外觀以注入合照)");
      console.log("📍 scenarioOutline:", o ? String(o).slice(0, 100) : "(none)");
      console.log("⏰ storyTime:", l || "(none)");
      console.log("🎯 finalPrompt:", J);
      console.groupEnd();
      const q = U;
      const Z = X.structured ? {
        ...X.structured,
        sceneCaption: [X.structured.sceneCaption, G].filter(Boolean).join(", ")
      } : null;
      const Q = await D(J, "tm", y, {
        structured: Z,
        imagePreset: K
      });
      if (!Q) {
        throw new Error("empty image url");
      }
      f({
        url: Q,
        prompt: J,
        scene: q
      });
      g(4);
    } catch (y) {
      console.warn("[TM Snapshot] 拍照失敗", y);
      k(y && y.message || String(y));
      g(4);
    }
  }, [s, e, t, n, r, o, l, c, d, i, u]);
  const V = ge.useCallback(() => {
    p(false);
    g(0);
    f(null);
    v(false);
    j(false);
  }, []);
  const G = ge.useCallback(e => {
    e.stopPropagation();
    $();
  }, [$]);
  const Y = ge.useCallback(async e => {
    e.stopPropagation();
    if (x == null ? undefined : x.url) {
      await B(x.url, `tm_snapshot_${Date.now()}.png`);
    }
  }, [x]);
  const K = ge.useCallback(async t => {
    t.stopPropagation();
    if ((x == null ? undefined : x.url) && !b && !y) {
      j(true);
      try {
        await (async (t, n) => {
          let s = await U(t, "TM Snapshot");
          let a = null;
          if (s && typeof s == "string" && s.startsWith("data:") && s.length > 50000) {
            try {
              a = await W.put(s);
            } catch {}
          }
          const r = {
            id: `tm_snap_${Date.now()}`,
            ...(a ? {
              imageRef: a
            } : {
              image: s
            }),
            title: `${(e == null ? undefined : e.name) || ""} — ${u("tmSnapshotTitle", "此時此刻")}`,
            date: new Date().toISOString().slice(0, 10),
            charId: (e == null ? undefined : e.id) ? String(e.id) : "",
            charName: (e == null ? undefined : e.name) || "",
            task: (n || "").slice(0, 80) || "This Moment",
            timestamp: Date.now()
          };
          await H.flashMoments.put(r);
          const i = await H.flashMoments.count();
          if (i > 50) {
            const e = await H.flashMoments.orderBy("timestamp").limit(i - 50).toArray();
            const t = e.map(e => e.imageRef).filter(e => e != null);
            await H.flashMoments.bulkDelete(e.map(e => e.id));
            if (t.length > 0) {
              W.bulkDelete(t).catch(() => {});
            }
          }
        })(x.url, x.scene);
        v(true);
      } catch (n) {
        console.warn("[TM Snapshot] 收藏失敗", n);
        E(u("tmSnapshotFavoriteFailed", "收藏失敗，請重試"));
      } finally {
        j(false);
      }
    }
  }, [x, b, y, u]);
  return xe.jsxs(xe.Fragment, {
    children: [xe.jsx("button", {
      className: "tm-regen-btn",
      onClick: $,
      title: u("tmSnapshotBtn", "照下此時此刻"),
      style: {
        minWidth: 0,
        padding: "4px 8px"
      },
      children: xe.jsx(xt, {
        size: 13
      })
    }), m && ye.createPortal(xe.jsxs("div", {
      className: "tm-snapshot-overlay",
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        background: "rgba(0,0,0,0.95)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box"
      },
      children: [xe.jsxs("div", {
        style: {
          transform: `scale(${N})`,
          transformOrigin: "center center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 18
        },
        children: [xe.jsxs("div", {
          onClick: e => e.stopPropagation(),
          style: {
            position: "relative",
            width: "860px",
            height: "540px",
            background: "#1c1c1e",
            borderRadius: "12px",
            border: "1px solid #333",
            boxShadow: "0 30px 60px rgba(0,0,0,0.9), inset 0 2px 4px rgba(255,255,255,0.05)",
            display: "flex",
            boxSizing: "border-box",
            overflow: "visible",
            color: "#fff",
            fontFamily: "\"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif"
          },
          children: [xe.jsx("div", {
            style: {
              position: "absolute",
              top: -16,
              right: 90,
              width: 64,
              height: 16,
              background: "#222",
              borderRadius: "4px 4px 0 0",
              display: "flex",
              justifyContent: "center",
              border: "1px solid #333",
              borderBottom: "none"
            },
            children: xe.jsx("div", {
              style: {
                width: 44,
                height: 8,
                background: "linear-gradient(180deg, #d4d4d4 0%, #888 100%)",
                borderRadius: "4px 4px 0 0",
                marginTop: -4,
                boxShadow: "0 -2px 4px rgba(0,0,0,0.5)"
              }
            })
          }), xe.jsx("div", {
            style: {
              position: "absolute",
              top: -10,
              right: 180,
              width: 40,
              height: 10,
              background: "repeating-linear-gradient(90deg, #111, #111 2px, #333 2px, #333 4px)",
              borderRadius: "4px 4px 0 0",
              border: "1px solid #111"
            }
          }), xe.jsx("div", {
            style: {
              width: "78%",
              height: "100%",
              padding: "24px 0 24px 24px",
              position: "relative",
              boxSizing: "border-box"
            },
            children: xe.jsxs("div", {
              style: {
                width: "100%",
                height: "100%",
                background: "#000",
                border: "2px solid #111",
                borderRadius: "4px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "inset 0 0 10px rgba(0,0,0,1)"
              },
              children: [h === 4 && (x == null ? undefined : x.url) && xe.jsx("img", {
                decoding: "async",
                src: x.url,
                alt: "",
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 1,
                  animation: "tmProReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                }
              }), h === 3 && xe.jsxs("div", {
                style: {
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff"
                },
                children: [xe.jsx("div", {
                  style: {
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "2px solid rgba(255,255,255,0.1)",
                    borderTopColor: "#ff4b00",
                    animation: "spin 1s linear infinite"
                  }
                }), xe.jsx("div", {
                  style: {
                    marginTop: 16,
                    fontSize: 13,
                    letterSpacing: 4,
                    fontWeight: 300,
                    color: "#ccc"
                  },
                  children: "PROCESSING..."
                })]
              }), h === 1 && xe.jsx("div", {
                style: {
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: xe.jsxs("div", {
                  style: {
                    width: 140,
                    height: 140,
                    border: "1px solid rgba(0,255,0,0.8)",
                    position: "relative",
                    animation: "tmProFocusPulse 0.4s ease-out forwards"
                  },
                  children: [xe.jsx("div", {
                    style: {
                      position: "absolute",
                      top: -1,
                      left: -1,
                      width: 10,
                      height: 10,
                      borderTop: "2px solid #0f0",
                      borderLeft: "2px solid #0f0"
                    }
                  }), xe.jsx("div", {
                    style: {
                      position: "absolute",
                      top: -1,
                      right: -1,
                      width: 10,
                      height: 10,
                      borderTop: "2px solid #0f0",
                      borderRight: "2px solid #0f0"
                    }
                  }), xe.jsx("div", {
                    style: {
                      position: "absolute",
                      bottom: -1,
                      left: -1,
                      width: 10,
                      height: 10,
                      borderBottom: "2px solid #0f0",
                      borderLeft: "2px solid #0f0"
                    }
                  }), xe.jsx("div", {
                    style: {
                      position: "absolute",
                      bottom: -1,
                      right: -1,
                      width: 10,
                      height: 10,
                      borderBottom: "2px solid #0f0",
                      borderRight: "2px solid #0f0"
                    }
                  })]
                })
              }), h === 2 && xe.jsx("div", {
                style: {
                  position: "absolute",
                  inset: 0,
                  background: "#000",
                  animation: "tmProShutter 0.15s ease-out"
                }
              }), xe.jsxs("div", {
                style: {
                  position: "absolute",
                  inset: 0,
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#fff",
                  textShadow: "1px 1px 2px #000, 0 0 4px #000",
                  pointerEvents: "none",
                  zIndex: 2
                },
                children: [xe.jsxs("div", {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start"
                  },
                  children: [xe.jsxs("div", {
                    style: {
                      display: "flex",
                      gap: 16,
                      alignItems: "center",
                      letterSpacing: 0.5
                    },
                    children: [xe.jsx("span", {
                      style: {
                        padding: "2px 6px",
                        background: "rgba(0,0,0,0.6)",
                        borderRadius: 2
                      },
                      children: "M"
                    }), xe.jsx("span", {
                      children: "AF-C"
                    }), xe.jsx("span", {
                      style: {
                        color: "#ffb300"
                      },
                      children: "AWB"
                    }), xe.jsx("span", {
                      style: {
                        fontSize: 12,
                        opacity: 0.9
                      },
                      children: "3840×2160"
                    }), xe.jsxs("span", {
                      style: {
                        fontSize: 12,
                        opacity: 0.9,
                        display: "flex",
                        alignItems: "center",
                        gap: 4
                      },
                      children: [xe.jsx("div", {
                        style: {
                          width: 16,
                          height: 12,
                          border: "1px solid #fff",
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 8
                        },
                        children: "RAW"
                      }), "+ J"]
                    })]
                  }), xe.jsxs("div", {
                    style: {
                      display: "flex",
                      gap: 16,
                      alignItems: "center"
                    },
                    children: [xe.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: h === 1 || h === 3 ? "#ff4d4d" : "#ccc"
                      },
                      children: [xe.jsx("div", {
                        style: {
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          background: h === 1 || h === 3 ? "#ff4d4d" : "transparent",
                          border: "1px solid #ff4d4d",
                          animation: h === 1 || h === 3 ? "tmRecBlink 1s infinite" : "none"
                        }
                      }), "STBY"]
                    }), xe.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 6
                      },
                      children: [xe.jsx("span", {
                        children: "100%"
                      }), xe.jsxs("div", {
                        style: {
                          width: 22,
                          height: 12,
                          border: "1px solid #fff",
                          borderRadius: 2,
                          position: "relative"
                        },
                        children: [xe.jsx("div", {
                          style: {
                            background: "#fff",
                            width: "85%",
                            height: "100%",
                            padding: 1,
                            backgroundClip: "content-box"
                          }
                        }), xe.jsx("div", {
                          style: {
                            position: "absolute",
                            right: -3,
                            top: 2,
                            width: 2,
                            height: 6,
                            background: "#fff",
                            borderRadius: "0 2px 2px 0"
                          }
                        })]
                      })]
                    })]
                  })]
                }), xe.jsxs("div", {
                  style: {
                    position: "absolute",
                    inset: 0,
                    zIndex: -1,
                    pointerEvents: "none"
                  },
                  children: [xe.jsx("div", {
                    style: {
                      width: "100%",
                      height: "33.33%",
                      borderBottom: "1px solid rgba(255,255,255,0.15)"
                    }
                  }), xe.jsx("div", {
                    style: {
                      width: "100%",
                      height: "33.33%",
                      borderBottom: "1px solid rgba(255,255,255,0.15)"
                    }
                  }), xe.jsx("div", {
                    style: {
                      position: "absolute",
                      top: 0,
                      left: "33.33%",
                      width: "33.33%",
                      height: "100%",
                      borderLeft: "1px solid rgba(255,255,255,0.15)",
                      borderRight: "1px solid rgba(255,255,255,0.15)"
                    }
                  })]
                }), xe.jsx("div", {
                  style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "40%",
                    borderTop: "1px dashed rgba(0, 255, 0, 0.5)",
                    zIndex: -1
                  },
                  children: xe.jsx("div", {
                    style: {
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: -5,
                      width: 2,
                      height: 10,
                      background: "rgba(0, 255, 0, 0.8)"
                    }
                  })
                }), xe.jsxs("div", {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    zIndex: 3
                  },
                  children: [xe.jsxs("div", {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: 6
                    },
                    children: [xe.jsxs("div", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 2
                      },
                      children: [xe.jsx("div", {
                        style: {
                          width: 60,
                          height: 4,
                          background: "linear-gradient(90deg, #0f0 60%, #ff0 85%, #f00 100%)",
                          opacity: 0.8,
                          border: "1px solid rgba(0,0,0,0.5)",
                          padding: "0 1px"
                        },
                        children: xe.jsx("div", {
                          style: {
                            width: "20%",
                            height: "100%",
                            background: "#000",
                            float: "right"
                          }
                        })
                      }), xe.jsx("div", {
                        style: {
                          width: 60,
                          height: 4,
                          background: "linear-gradient(90deg, #0f0 60%, #ff0 85%, #f00 100%)",
                          opacity: 0.8,
                          border: "1px solid rgba(0,0,0,0.5)",
                          padding: "0 1px"
                        },
                        children: xe.jsx("div", {
                          style: {
                            width: "22%",
                            height: "100%",
                            background: "#000",
                            float: "right"
                          }
                        })
                      })]
                    }), xe.jsx("span", {
                      style: {
                        fontSize: 12,
                        color: "#ff4d4d",
                        letterSpacing: 1
                      },
                      children: "REC 00:05:21"
                    })]
                  }), xe.jsxs("div", {
                    style: {
                      display: "flex",
                      gap: 20,
                      alignItems: "center",
                      padding: "6px 16px",
                      background: "rgba(0,0,0,0.6)",
                      borderRadius: 24,
                      paddingRight: 24,
                      fontSize: 14
                    },
                    children: [xe.jsx("span", {
                      style: {
                        color: "#00ff00"
                      },
                      children: "1/250"
                    }), xe.jsx("span", {
                      style: {
                        color: "#00ff00"
                      },
                      children: "F2.8"
                    }), xe.jsx("span", {
                      style: {
                        color: "#00ff00"
                      },
                      children: "+0.3"
                    }), xe.jsx("span", {
                      children: "ISO 800"
                    })]
                  })]
                }), h === 4 && C && !(x == null ? undefined : x.url) && xe.jsxs("div", {
                  style: {
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ff4d4d",
                    fontSize: 14,
                    padding: 40,
                    textAlign: "center",
                    fontWeight: 600,
                    background: "rgba(0,0,0,0.8)"
                  },
                  children: ["ERROR: ", C]
                })]
              })]
            })
          }), xe.jsxs("div", {
            style: {
              width: "22%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              padding: "20px 16px",
              boxSizing: "border-box",
              background: "linear-gradient(180deg, #232325 0%, #1a1a1c 100%)",
              borderLeft: "1px solid rgba(255,255,255,0.04)"
            },
            children: [xe.jsx("div", {
              style: {
                position: "absolute",
                inset: 0,
                borderRadius: "0 12px 12px 0",
                background: "url(\"data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.08%22/%3E%3C/svg%3E\")",
                zIndex: 0,
                pointerEvents: "none"
              }
            }), xe.jsxs("div", {
              style: {
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                position: "relative"
              },
              children: [xe.jsx("button", {
                onClick: V,
                title: u("msgCancel", "關閉"),
                style: {
                  position: "absolute",
                  top: -4,
                  right: -4,
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #3a3a3c, #1a1a1c)",
                  border: "1px solid #2a2a2a",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.06)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  zIndex: 3,
                  transition: "background 0.15s ease"
                },
                onMouseEnter: e => e.currentTarget.style.background = "linear-gradient(135deg, #4a4a4c, #2a2a2c)",
                onMouseLeave: e => e.currentTarget.style.background = "linear-gradient(135deg, #3a3a3c, #1a1a1c)",
                children: xe.jsx(ft, {
                  size: 15,
                  color: "#ddd",
                  strokeWidth: 2.2
                })
              }), xe.jsxs("div", {
                style: {
                  marginTop: 24,
                  width: 70,
                  height: 70,
                  position: "relative",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 30% 30%, #4a4a4c 0%, #2a2a2c 60%, #1a1a1c 100%)",
                  border: "1px solid #0a0a0a",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.7), inset 0 2px 3px rgba(255,255,255,0.08), inset 0 -2px 3px rgba(0,0,0,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: [Array.from({
                  length: 12
                }).map((e, t) => xe.jsx("div", {
                  style: {
                    position: "absolute",
                    width: 1.5,
                    height: 6,
                    background: "#666",
                    top: 4,
                    left: "50%",
                    transformOrigin: "50% 31px",
                    transform: `translateX(-50%) rotate(${t * 30}deg)`
                  }
                }, t)), xe.jsx("div", {
                  style: {
                    position: "absolute",
                    top: 14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: 10,
                    fontWeight: 800,
                    color: "#ff4b00",
                    textShadow: "0 0 4px rgba(255,75,0,0.6)",
                    letterSpacing: 0.5
                  },
                  children: "M"
                }), xe.jsx("div", {
                  style: {
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #2a2a2c, #1a1a1c)",
                    border: "1px solid #0a0a0a",
                    boxShadow: "inset 0 1px 2px rgba(255,255,255,0.06), 0 1px 2px rgba(0,0,0,0.6)",
                    position: "relative"
                  },
                  children: xe.jsx("div", {
                    style: {
                      position: "absolute",
                      top: 3,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 3,
                      height: 6,
                      background: "#ff4b00",
                      borderRadius: 1,
                      boxShadow: "0 0 4px rgba(255,75,0,0.8)"
                    }
                  })
                })]
              }), xe.jsx("div", {
                style: {
                  color: "#ff4b00",
                  fontSize: 32,
                  fontWeight: 400,
                  fontStyle: "italic",
                  letterSpacing: 1,
                  textShadow: "0 0 12px rgba(255, 75, 0, 0.5)",
                  fontFamily: "serif",
                  lineHeight: 1,
                  marginTop: 14
                },
                children: "α"
              }), xe.jsxs("div", {
                style: {
                  marginTop: 14,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  alignItems: "center"
                },
                children: [xe.jsxs("div", {
                  style: {
                    width: "92%",
                    padding: "6px 8px",
                    background: "linear-gradient(180deg, #0a1a0a, #050d05)",
                    border: "1px solid #000",
                    borderRadius: 3,
                    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.8)",
                    color: "#3aff3a",
                    fontFamily: "ui-monospace, Menlo, monospace",
                    fontSize: 8.5,
                    fontWeight: 700,
                    letterSpacing: 0.5,
                    textShadow: "0 0 4px rgba(58,255,58,0.7)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  },
                  children: [xe.jsx("span", {
                    children: "● REC"
                  }), xe.jsx("span", {
                    children: h === 4 ? "OK" : h === 3 ? "BUSY" : "STBY"
                  })]
                }), xe.jsx("div", {
                  style: {
                    display: "flex",
                    gap: 6,
                    width: "92%"
                  },
                  children: ["MENU", "Fn", "AEL"].map(e => xe.jsx("div", {
                    style: {
                      flex: 1,
                      height: 22,
                      background: "linear-gradient(180deg, #2a2a2c, #1a1a1c)",
                      border: "1px solid #000",
                      borderRadius: 3,
                      boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06), 0 1px 2px rgba(0,0,0,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 8,
                      fontWeight: 700,
                      color: "#999",
                      letterSpacing: 0.5,
                      pointerEvents: "none"
                    },
                    children: e
                  }, e))
                }), xe.jsxs("div", {
                  style: {
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #2a2a2c, #1a1a1c)",
                    border: "1px solid #0a0a0a",
                    boxShadow: "inset 0 1px 2px rgba(255,255,255,0.05), 0 2px 4px rgba(0,0,0,0.5)",
                    position: "relative",
                    marginTop: 4
                  },
                  children: [xe.jsx("div", {
                    style: {
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: "#0a0a0a",
                      border: "1px solid #2a2a2a",
                      boxShadow: "inset 0 1px 2px rgba(0,0,0,0.8)"
                    }
                  }), [{
                    top: 4,
                    left: "50%",
                    transform: "translateX(-50%)"
                  }, {
                    bottom: 4,
                    left: "50%",
                    transform: "translateX(-50%)"
                  }, {
                    left: 4,
                    top: "50%",
                    transform: "translateY(-50%)"
                  }, {
                    right: 4,
                    top: "50%",
                    transform: "translateY(-50%)"
                  }].map((e, t) => xe.jsx("div", {
                    style: {
                      position: "absolute",
                      width: 4,
                      height: 4,
                      background: "#555",
                      borderRadius: 1,
                      ...e
                    }
                  }, t))]
                })]
              }), xe.jsxs("div", {
                style: {
                  marginTop: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6
                },
                children: [xe.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    fontSize: 7,
                    color: "#666",
                    letterSpacing: 1,
                    fontWeight: 700
                  },
                  children: [xe.jsx("div", {
                    style: {
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: h === 3 ? "#ff4b00" : "#2a2a2c",
                      boxShadow: h === 3 ? "0 0 6px rgba(255,75,0,0.8)" : "none",
                      animation: h === 3 ? "tmCardBlink 0.8s ease-in-out infinite" : "none"
                    }
                  }), "SD"]
                }), xe.jsx("div", {
                  style: {
                    fontSize: 9,
                    color: "#666",
                    letterSpacing: 2,
                    fontWeight: 700
                  },
                  children: "ILCE-7M4"
                }), xe.jsx("div", {
                  style: {
                    fontSize: 7,
                    color: "#444",
                    letterSpacing: 2.5,
                    fontWeight: 500
                  },
                  children: "WENZHOU"
                })]
              })]
            })]
          })]
        }), (() => {
          const e = h === 4 && (x == null ? undefined : x.url);
          const t = {
            flex: "1 1 0",
            minWidth: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "14px 12px",
            borderRadius: 14,
            fontSize: 14,
            fontWeight: 700,
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 4px 14px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.08)",
            transition: "all 0.15s ease",
            userSelect: "none",
            fontFamily: "inherit"
          };
          return xe.jsxs("div", {
            onClick: e => e.stopPropagation(),
            style: {
              width: "860px",
              display: "flex",
              gap: 10,
              boxSizing: "border-box"
            },
            children: [xe.jsxs("button", {
              onClick: G,
              disabled: !e,
              style: {
                ...t,
                background: e ? "linear-gradient(135deg, #555, #2a2a2c)" : "linear-gradient(135deg, #2a2a2c, #1a1a1c)",
                color: e ? "#fff" : "#666",
                cursor: e ? "pointer" : "not-allowed"
              },
              children: [xe.jsx(yt, {
                size: 18,
                strokeWidth: 2.2
              }), xe.jsx("span", {
                children: u("tmSnapshotReroll", "重新生成")
              })]
            }), xe.jsxs("button", {
              onClick: t => {
                t.stopPropagation();
                if (e) {
                  A(true);
                }
              },
              disabled: !e,
              style: {
                ...t,
                background: e ? "linear-gradient(135deg, #5b6cb8, #3a4994)" : "linear-gradient(135deg, #2a2a2c, #1a1a1c)",
                color: e ? "#fff" : "#666",
                cursor: e ? "pointer" : "not-allowed"
              },
              children: [xe.jsx("span", {
                style: {
                  fontSize: 18,
                  fontWeight: 800
                },
                children: "✎"
              }), xe.jsx("span", {
                children: "編輯重生"
              })]
            }), xe.jsxs("button", {
              onClick: K,
              disabled: !e || b || y,
              style: {
                ...t,
                background: y ? "linear-gradient(135deg, #c2185b, #880e4f)" : e ? "linear-gradient(135deg, #ff4b6e, #d81b60)" : "linear-gradient(135deg, #2a2a2c, #1a1a1c)",
                color: e || y ? "#fff" : "#666",
                cursor: !e || b || y ? "not-allowed" : "pointer",
                borderColor: y ? "#880e4f" : "rgba(255,255,255,0.08)"
              },
              children: [y ? xe.jsx(vt, {
                size: 18,
                strokeWidth: 2.5
              }) : xe.jsx(bt, {
                size: 18,
                strokeWidth: 2,
                fill: y ? "#fff" : "none"
              }), xe.jsx("span", {
                children: b ? u("tmSnapshotSaving", "存入影集中...") : y ? u("tmSnapshotFavorited", "已收藏") : u("tmSnapshotFavorite", "收藏")
              })]
            }), xe.jsxs("button", {
              onClick: Y,
              disabled: !e,
              style: {
                ...t,
                background: e ? "linear-gradient(135deg, #2e7d32, #1b5e20)" : "linear-gradient(135deg, #2a2a2c, #1a1a1c)",
                color: e ? "#fff" : "#666",
                cursor: e ? "pointer" : "not-allowed",
                borderColor: e ? "#1b5e20" : "rgba(255,255,255,0.08)"
              },
              children: [xe.jsx(St, {
                size: 18,
                strokeWidth: 2
              }), xe.jsx("span", {
                children: u("tmSnapshotDownload", "下載")
              })]
            })]
          });
        })()]
      }), xe.jsx("style", {
        children: "\n                        @keyframes tmProFocusPulse {\n                            0% { transform: scale(1.4); opacity: 0; }\n                            50% { transform: scale(0.9); opacity: 1; border-color: rgba(0,255,0,1); }\n                            100% { transform: scale(1); opacity: 0.8; border-color: rgba(0,255,0,0.8); }\n                        }\n                        @keyframes tmProShutter {\n                            0% { opacity: 0; }\n                            20% { opacity: 1; }\n                            80% { opacity: 1; }\n                            100% { opacity: 0; }\n                        }\n                        @keyframes tmCardBlink {\n                            0%, 100% { opacity: 0.4; }\n                            50% { opacity: 1; }\n                        }\n                        @keyframes tmProReveal {\n                            0% { opacity: 0; filter: brightness(1.2) contrast(1.1) saturate(0.5); }\n                            100% { opacity: 1; filter: brightness(1) contrast(1) saturate(1); }\n                        }\n                        @keyframes tmRecBlink {\n                            0%, 100% { opacity: 1; }\n                            50% { opacity: 0.2; }\n                        }\n                        @keyframes spin {\n                            100% { transform: rotate(360deg); }\n                        }\n                    "
      })]
    }), document.body), T && x && ye.createPortal(xe.jsx(Ft, {
      open: true,
      onClose: () => A(false),
      initialDesc: L(x.scene || x.prompt || ""),
      char: e,
      user: t,
      userId: r,
      characters: i,
      sceneType: "tm",
      busy: h !== 4,
      onConfirm: async ({
        rawImgDesc: e,
        useRaw: t
      }) => {
        A(false);
        await $({
          rawImgDesc: e,
          useRaw: t
        });
      }
    }), document.body)]
  });
};
const In = ({
  name: e,
  size: t = 40
}) => {
  const n = (e || "?").slice(0, 1);
  return xe.jsx("div", {
    className: "tm-char-item-avatar-wrap tm-char-item-avatar-fallback",
    style: {
      width: t,
      height: t,
      borderRadius: "50%",
      background: "#e5e5ea",
      color: "#666",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: Math.round(t * 0.45),
      fontWeight: 500,
      flexShrink: 0
    },
    children: n
  });
};
const Tn = ({
  characters: e,
  selectedIds: t,
  onToggle: n,
  onClear: s,
  onConfirm: a,
  onClose: r,
  modeSegmented: i,
  spectate: o,
  onSpectateChange: l,
  recentSessions: c,
  characterMap: d,
  onPickSession: u,
  initialView: m,
  t: p,
  tOr: h
}) => {
  const [g, x] = ge.useState("");
  const [f, y] = ge.useState({});
  const [v, b] = ge.useState({});
  const S = Array.isArray(c) && c.some(e => Array.isArray(e.participants) && e.participants.length >= 2);
  const [w, j] = ge.useState(m || (S ? "scenes" : "chars"));
  const [C, k] = ge.useState(false);
  ge.useEffect(() => {
    if (!m && !C) {
      if (S && w === "chars") {
        j("scenes");
      }
    }
  }, [S, w, m, C]);
  const [N, I] = ge.useState(false);
  ge.useEffect(() => {
    if (o === true) {
      I(true);
    }
  }, [o]);
  const T = (e = false) => {
    I(e);
    if (l != null) {
      l(e);
    }
    if (s != null) {
      s();
    }
    k(true);
    j("chars");
  };
  const E = g.trim().toLowerCase();
  const A = !!E;
  const {
    mainChars: $,
    npcChars: M,
    npcByParent: P,
    unboundNpcs: R,
    groupMap: _,
    groupNames: D
  } = ge.useMemo(() => {
    const t = e.filter(e => e.type !== "npc");
    const n = e.filter(e => e.type === "npc");
    const s = {};
    n.forEach(e => {
      (e.boundTo || []).forEach(t => {
        const n = String(t);
        s[n] ||= [];
        s[n].push(e);
      });
    });
    const a = n.filter(e => !e.boundTo || e.boundTo.length === 0);
    const r = {};
    const i = h("tmDefaultGroup", "預設");
    t.forEach(e => {
      const t = e.group || i;
      r[t] ||= [];
      r[t].push(e);
    });
    const o = Object.keys(r).sort((e, t) => e === i ? 1 : t === i ? -1 : e.localeCompare(t, "zh"));
    return {
      mainChars: t,
      npcChars: n,
      npcByParent: s,
      unboundNpcs: a,
      groupMap: r,
      groupNames: o
    };
  }, [e, h]);
  const B = e => !E || e.name.toLowerCase().includes(E) || (e.description || "").toLowerCase().includes(E);
  const L = t.size;
  const z = L >= 2;
  const O = L > 6;
  const F = (e, s = false) => {
    const a = String(e.id);
    const r = t.has(a);
    return xe.jsxs("button", {
      type: "button",
      className: "tm-char-item " + (r ? "active" : ""),
      style: s ? {
        paddingLeft: 42
      } : undefined,
      onClick: () => n(a),
      children: [e.image ? xe.jsx("div", {
        className: "tm-char-item-avatar-wrap",
        style: s ? {
          width: 34,
          height: 34
        } : undefined,
        children: xe.jsx("img", {
          decoding: "async",
          src: e.image,
          alt: e.name,
          className: "tm-char-item-avatar",
          style: _e(e)
        })
      }) : xe.jsx(In, {
        name: e.name,
        size: s ? 34 : 40
      }), xe.jsxs("div", {
        className: "tm-char-item-text",
        children: [xe.jsxs("span", {
          className: "tm-char-item-name",
          style: {
            display: "flex",
            alignItems: "center",
            gap: 6
          },
          children: [e.name, e.type === "npc" && xe.jsx("span", {
            className: "tm-char-npc-badge",
            children: "NPC"
          })]
        }), e.description && xe.jsxs("span", {
          className: "tm-char-item-desc",
          children: [e.description.slice(0, 50), e.description.length > 50 ? "…" : ""]
        })]
      }), xe.jsx("span", {
        className: "tm-char-item-checkbox",
        style: {
          width: 22,
          height: 22,
          borderRadius: 6,
          border: "2px solid " + (r ? "#4caf50" : "#ccc"),
          background: r ? "#4caf50" : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          marginLeft: 8
        },
        children: r && xe.jsx(vt, {
          size: 14,
          color: "#fff"
        })
      })]
    }, e.id);
  };
  return xe.jsxs("div", {
    className: "tm-overlay-panel tm-overlay-centered",
    style: {
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      maxHeight: "480px"
    },
    children: [xe.jsxs("div", {
      className: "tm-panel-title",
      style: {
        flex: "0 0 auto",
        display: "flex",
        alignItems: "center",
        gap: 8
      },
      children: [w === "chars" && S && xe.jsx("button", {
        type: "button",
        className: "tm-close-btn",
        onClick: () => {
          I(false);
          if (l != null) {
            l(false);
          }
          if (s != null) {
            s();
          }
          k(false);
          j("scenes");
        },
        style: {
          position: "static"
        },
        title: h("tmMultiBackToScenes", "返回場景列表"),
        children: xe.jsx(gt, {
          size: 16
        })
      }), xe.jsx("span", {
        style: {
          flex: 1
        },
        children: w === "scenes" ? h("tmMultiScenesTitle", "多人場景") : N ? h("tmMultiNewSpectateTitle", "新增旁觀場景 · 選角色") : h("tmMultiNewSceneTitle", "新增多人場景 · 選角色")
      }), xe.jsx("button", {
        className: "tm-close-btn",
        onClick: r,
        style: {
          position: "static"
        },
        children: xe.jsx(ft, {
          size: 16
        })
      })]
    }), xe.jsx("div", {
      style: {
        flex: "0 0 auto"
      },
      children: i
    }), w === "scenes" && xe.jsxs(xe.Fragment, {
      children: [xe.jsx("div", {
        style: {
          flex: "1 1 auto",
          overflowY: "auto",
          minHeight: 0
        },
        children: S ? c.filter(e => Array.isArray(e.participants) && e.participants.length >= 2).map(e => {
          const t = e.participants;
          const n = t.slice(0, 4).map(e => d == null ? undefined : d.get(String(e))).filter(Boolean);
          if (n.length === 0) {
            return null;
          }
          const s = t.map(e => {
            var t;
            if ((t = d == null ? undefined : d.get(String(e))) == null) {
              return undefined;
            } else {
              return t.name;
            }
          }).filter(Boolean);
          const a = s.length > 2 ? `${s.slice(0, 2).join("、")}+${s.length - 2}` : s.join("、");
          const r = e.sceneName || e.pageName || e.name || a;
          const i = n.length <= 2 ? `repeat(${Math.max(n.length, 1)}, 1fr)` : "repeat(2, 1fr)";
          return xe.jsxs("button", {
            type: "button",
            onClick: () => u == null ? undefined : u(e),
            style: {
              display: "flex",
              alignItems: "center",
              gap: 12,
              width: "100%",
              padding: "10px 14px",
              background: "transparent",
              border: "none",
              borderBottom: "1px solid #f3f4f6",
              cursor: "pointer",
              textAlign: "left"
            },
            children: [xe.jsx("span", {
              style: {
                width: 40,
                height: 40,
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                display: "grid",
                gridTemplateColumns: i,
                gap: "1px",
                background: "#f0f2f5"
              },
              children: n.map((e, t) => {
                var n;
                return xe.jsx("span", {
                  style: {
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: e.image ? "#ccc" : `hsl(${t * 70}, 45%, 58%)`,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 11
                  },
                  children: e.image ? xe.jsx("img", {
                    decoding: "async",
                    src: e.image,
                    alt: e.name,
                    style: Re(e)
                  }) : ((n = e.name) == null ? undefined : n[0]) || "?"
                }, e.id);
              })
            }), xe.jsxs("span", {
              style: {
                flex: 1,
                minWidth: 0
              },
              children: [xe.jsxs("span", {
                style: {
                  display: "block",
                  fontSize: 14,
                  color: "var(--tm-fg, #1f2937)",
                  fontWeight: 500,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: [e.spectate === true && xe.jsx("span", {
                  style: {
                    marginRight: 4
                  },
                  children: "🌙"
                }), r]
              }), a && r !== a && xe.jsx("span", {
                style: {
                  display: "block",
                  fontSize: 11,
                  color: "#9ca3af",
                  marginTop: 2,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: a
              })]
            })]
          }, e._id);
        }) : xe.jsxs("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "40px 20px",
            color: "#9ca3af",
            fontSize: 13,
            textAlign: "center",
            minHeight: 200
          },
          children: [xe.jsx(wt, {
            size: 28,
            style: {
              opacity: 0.4
            }
          }), xe.jsx("span", {
            children: h("tmMultiNoScenesYet", "尚無多人場景\n點上方按鈕新增")
          })]
        })
      }), xe.jsxs("div", {
        style: {
          flex: "0 0 auto",
          padding: "10px 12px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          borderTop: "1px solid var(--tm-border, rgba(0,0,0,0.06))"
        },
        children: [xe.jsxs("button", {
          type: "button",
          onClick: () => T(false),
          style: {
            flex: 1,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            padding: "9px 14px",
            borderRadius: 10,
            border: "1px solid var(--tm-border, rgba(0,0,0,0.12))",
            background: "transparent",
            color: "var(--tm-fg, #1f2937)",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer"
          },
          children: [xe.jsx(jt, {
            size: 15
          }), h("tmMultiNewScene", "新增多人場景")]
        }), xe.jsxs("button", {
          type: "button",
          onClick: () => T(true),
          style: {
            flex: 1,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            padding: "9px 12px",
            borderRadius: 10,
            border: "1px solid var(--tm-border, rgba(0,0,0,0.12))",
            background: "transparent",
            color: "var(--tm-fg-muted, #6b7280)",
            fontSize: 13,
            cursor: "pointer"
          },
          children: ["🌙 ", h("tmMultiNewSpectate", "新增旁觀場景")]
        })]
      })]
    }), w === "chars" && xe.jsxs(xe.Fragment, {
      children: [false, xe.jsxs("div", {
        style: {
          flex: "0 0 auto",
          padding: "6px 12px",
          fontSize: 12,
          color: O ? "#d97706" : "#6b7280",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          flexWrap: "wrap"
        },
        children: [xe.jsxs("span", {
          children: [O ? h("tmMultiTooManyHint", "建議不超過 6 個角色") : h("tmMultiPickHint", "可勾選 2-6 個角色"), xe.jsxs("span", {
            style: {
              marginLeft: 8,
              opacity: 0.7
            },
            children: ["(", L, "/", 6, ")"]
          })]
        }), L > 0 && xe.jsx("button", {
          type: "button",
          onClick: s,
          style: {
            background: "transparent",
            border: "none",
            color: "#9ca3af",
            fontSize: 12,
            cursor: "pointer",
            padding: 0
          },
          children: h("tmMultiClearSelection", "清空")
        })]
      }), xe.jsxs("div", {
        className: "tm-char-search-wrap",
        style: {
          flex: "0 0 auto"
        },
        children: [xe.jsx(Ct, {
          size: 14,
          className: "tm-char-search-icon"
        }), xe.jsx("input", {
          className: "tm-char-search-input",
          placeholder: h("tmSearchChar", "搜索角色"),
          value: g,
          onChange: e => x(e.target.value),
          autoFocus: true
        }), g && xe.jsx("button", {
          className: "tm-close-btn",
          style: {
            position: "absolute",
            right: 8,
            top: "50%",
            transform: "translateY(-50%)"
          },
          onClick: () => x(""),
          children: xe.jsx(ft, {
            size: 12
          })
        })]
      }), xe.jsx("div", {
        className: "tm-overlay-scroll-list",
        style: {
          flex: "1 1 auto",
          overflowY: "auto",
          minHeight: 0
        },
        children: e.length === 0 ? xe.jsx("p", {
          className: "tm-panel-empty",
          children: h("tmNoCharsInRoster", "尚無角色，請先在名冊新增")
        }) : A ? (() => {
          const t = e.filter(B);
          if (t.length === 0) {
            return xe.jsx("p", {
              className: "tm-panel-empty",
              children: h("tmNoSearchResult", "沒有匹配的角色")
            });
          } else {
            return t.map(e => F(e));
          }
        })() : xe.jsxs(xe.Fragment, {
          children: [D.map(e => {
            const t = _[e];
            const n = f[e];
            const s = D.length > 1;
            return xe.jsxs("div", {
              children: [s && xe.jsxs("div", {
                className: "tm-char-group-header",
                onClick: () => y(t => ({
                  ...t,
                  [e]: !t[e]
                })),
                children: [xe.jsx(kt, {
                  size: 14,
                  className: "tm-char-group-arrow",
                  style: {
                    transform: n ? "rotate(0deg)" : "rotate(90deg)"
                  }
                }), xe.jsx("span", {
                  children: e
                }), xe.jsx("span", {
                  className: "tm-char-group-count",
                  children: t.length
                })]
              }), !n && t.map(e => {
                const t = String(e.id);
                const n = P[t] || [];
                const s = v[t];
                return xe.jsxs("div", {
                  children: [xe.jsxs("div", {
                    style: {
                      position: "relative",
                      display: "flex",
                      alignItems: "center"
                    },
                    children: [xe.jsx("div", {
                      style: {
                        flex: 1
                      },
                      children: F(e)
                    }), n.length > 0 && xe.jsxs("button", {
                      className: "tm-npc-toggle-btn",
                      onClick: e => {
                        e.stopPropagation();
                        b(e => ({
                          ...e,
                          [t]: !e[t]
                        }));
                      },
                      children: [xe.jsxs("span", {
                        className: "tm-npc-toggle-label",
                        children: ["NPC ", n.length]
                      }), xe.jsx(Nt, {
                        size: 12,
                        style: {
                          transform: s ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s"
                        }
                      })]
                    })]
                  }), s && n.map(e => F(e, true))]
                }, e.id);
              })]
            }, e);
          }), R.length > 0 && xe.jsxs("div", {
            children: [xe.jsxs("div", {
              className: "tm-char-group-header",
              onClick: () => y(e => ({
                ...e,
                __unbound_npc: !e.__unbound_npc
              })),
              children: [xe.jsx(kt, {
                size: 14,
                className: "tm-char-group-arrow",
                style: {
                  transform: f.__unbound_npc ? "rotate(0deg)" : "rotate(90deg)"
                }
              }), xe.jsx("span", {
                children: h("tmUnboundNpc", "未綁定 NPC")
              }), xe.jsx("span", {
                className: "tm-char-group-count",
                children: R.length
              })]
            }), !f.__unbound_npc && R.map(e => F(e))]
          })]
        })
      }), xe.jsxs("div", {
        style: {
          flex: "0 0 auto",
          padding: "10px 12px",
          borderTop: "1px solid var(--tm-border, rgba(0,0,0,0.06))",
          display: "flex",
          gap: 8,
          justifyContent: "flex-end",
          alignItems: "center"
        },
        children: [xe.jsx("button", {
          type: "button",
          onClick: r,
          style: {
            padding: "8px 14px",
            borderRadius: 8,
            border: "1px solid var(--tm-border, rgba(0,0,0,0.12))",
            background: "transparent",
            color: "var(--tm-fg-muted, #4b5563)",
            fontSize: 14,
            cursor: "pointer"
          },
          children: h("cancel", "取消")
        }), xe.jsx("button", {
          type: "button",
          onClick: a,
          disabled: !z,
          style: {
            padding: "8px 14px",
            borderRadius: 8,
            border: "1px solid " + (z ? "var(--tm-fg, rgba(0,0,0,0.4))" : "var(--tm-border, rgba(0,0,0,0.08))"),
            background: "transparent",
            color: z ? "var(--tm-fg, #1f2937)" : "var(--tm-fg-muted, #9ca3af)",
            fontSize: 14,
            cursor: z ? "pointer" : "not-allowed",
            fontWeight: 500,
            opacity: z ? 1 : 0.5
          },
          children: h("tmMultiContinue", "下一步")
        })]
      })]
    })]
  });
};
const En = ({
  sessions: e,
  activeSessionId: t,
  sessionEntryCounts: n,
  characterMap: s,
  isManageMode: a,
  manageSelected: r,
  onToggleManage: i,
  onEnterManage: o,
  onExitManage: l,
  onBatchDelete: c,
  onBatchExport: d,
  onBatchMerge: u,
  onExportSession: m,
  onRenameSession: p,
  onNewSession: h,
  onNewSpectate: g,
  onSwitchSession: x,
  onClose: f,
  t: y,
  tOr: v
}) => {
  const b = [...e].reverse();
  return xe.jsxs(xe.Fragment, {
    children: [xe.jsxs("div", {
      className: "tm-session-browser-header",
      children: [xe.jsx("span", {
        className: "tm-session-browser-title",
        children: a ? v("tmManageTitle", "管理場景") + (r.size > 0 ? ` (${r.size})` : "") : v("tmMultiSessionBrowserTitle", "多人場景記錄")
      }), xe.jsx("button", {
        className: "tm-btn-icon",
        onClick: f,
        children: xe.jsx(ft, {
          size: 18
        })
      })]
    }), xe.jsx("div", {
      className: "tm-session-toolbar",
      children: a ? xe.jsxs("div", {
        className: "tm-manage-actions",
        children: [d && xe.jsxs("button", {
          className: "tm-manage-action-btn",
          onClick: d,
          disabled: r.size === 0,
          title: v("tmExport", "導出 TXT"),
          children: [xe.jsx(St, {
            size: 15
          }), xe.jsx("span", {
            children: v("tmExportShort", "導出")
          })]
        }), u && xe.jsxs("button", {
          className: "tm-manage-action-btn",
          onClick: u,
          disabled: r.size < 2,
          title: v("tmMergeBtn", "合併分頁"),
          children: [xe.jsx(Tt, {
            size: 15
          }), xe.jsx("span", {
            children: v("tmMergeShort", "合併")
          })]
        }), xe.jsxs("button", {
          className: "tm-manage-action-btn tm-manage-delete",
          onClick: c,
          disabled: r.size === 0,
          title: v("tmDelete", "刪除"),
          children: [xe.jsx(Et, {
            size: 15
          }), xe.jsx("span", {
            children: v("tmDelete", "刪除")
          })]
        }), xe.jsx("div", {
          style: {
            flex: 1
          }
        }), xe.jsxs("button", {
          className: "tm-manage-action-btn",
          onClick: l,
          children: [xe.jsx(ft, {
            size: 15
          }), xe.jsx("span", {
            children: v("tmDone", "完成")
          })]
        })]
      }) : xe.jsxs(xe.Fragment, {
        children: [xe.jsxs("button", {
          className: "tm-session-new-btn",
          onClick: h,
          children: [xe.jsx(jt, {
            size: 14
          }), v("tmMultiNewSession", "新建場景")]
        }), xe.jsxs("button", {
          className: "tm-session-new-btn",
          onClick: g,
          title: v("tmMultiNewSpectateHint", "旁觀場景：user 不在場，AI 只寫 NPC 之間的互動"),
          children: [xe.jsx("span", {
            style: {
              fontSize: 14,
              lineHeight: 1
            },
            children: "🌙"
          }), v("tmMultiNewSpectate", "旁觀場景")]
        }), xe.jsxs("button", {
          className: "tm-session-new-btn",
          onClick: o,
          disabled: e.length === 0,
          children: [xe.jsx(It, {
            size: 14
          }), v("tmManageBtn", "管理")]
        })]
      })
    }), xe.jsx("div", {
      className: "tm-session-list",
      children: e.length === 0 ? xe.jsx("p", {
        className: "tm-panel-empty",
        style: {
          padding: "24px 16px",
          textAlign: "center"
        },
        children: v("tmMultiEmpty", "尚未有多人場景")
      }) : b.map(e => {
        const o = e._id === t;
        const l = r.has(e._id);
        const c = n == null ? undefined : n[e._id];
        const d = e.createdAt ? new Date(e.createdAt).toLocaleDateString("zh-TW") : "";
        const u = ((e, t, n) => {
          if (!Array.isArray(e) || e.length === 0) {
            return n;
          }
          const s = e.map(e => {
            var n;
            return ((n = t.get(String(e))) == null ? undefined : n.name) || "?";
          });
          if (s.length <= 4) {
            return s.join("、");
          } else {
            return `${s.slice(0, 4).join("、")} +${s.length - 4}`;
          }
        })(e.participants, s, v("tmMultiNoParticipants", "無角色"));
        return xe.jsxs("div", {
          className: `tm-session-item ${o ? "active" : ""} ${l ? "merge-selected" : ""}`,
          onClick: () => a ? i(e._id) : x(e),
          children: [a && xe.jsx("div", {
            className: "tm-session-checkbox",
            style: {
              width: 20,
              height: 20,
              borderRadius: 4,
              border: "2px solid " + (l ? "#4caf50" : "#ccc"),
              background: l ? "#4caf50" : "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
              flexShrink: 0
            },
            children: l && xe.jsx(vt, {
              size: 14,
              color: "#fff"
            })
          }), xe.jsxs("div", {
            className: "tm-session-item-main",
            style: {
              flex: 1,
              minWidth: 0
            },
            children: [xe.jsxs("span", {
              className: "tm-session-item-name",
              children: [e.spectate === true && xe.jsx("span", {
                title: v("tmMultiSpectateBadge", "旁觀"),
                style: {
                  marginRight: 4
                },
                children: "🌙"
              }), (h = e, (h == null ? undefined : h.pageName) || (h == null ? undefined : h.name) || d || v("tmMultiUntitled", "未命名場景"))]
            }), xe.jsxs("span", {
              className: "tm-session-item-meta",
              style: {
                display: "block",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              },
              children: [u, c != null ? ` · ${c} ${v("tmSessionEntries", "條")}` : "", d ? ` · ${d}` : ""]
            })]
          }), !a && (m || p) && xe.jsxs("div", {
            className: "tm-session-item-actions",
            style: {
              display: "flex",
              gap: 4,
              alignItems: "center",
              marginLeft: 8
            },
            children: [p && xe.jsx("button", {
              className: "tm-session-action-btn",
              onClick: t => {
                t.stopPropagation();
                p(e);
              },
              title: v("tmMultiRenamePage", "重命名分頁"),
              style: {
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 4,
                color: "inherit",
                opacity: 0.5
              },
              children: xe.jsx(At, {
                size: 14
              })
            }), m && xe.jsx("button", {
              className: "tm-session-action-btn",
              onClick: t => {
                t.stopPropagation();
                m(e);
              },
              title: v("tmExport", "導出 TXT"),
              style: {
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 4,
                color: "inherit",
                opacity: 0.5
              },
              children: xe.jsx(St, {
                size: 14
              })
            })]
          })]
        }, e._id);
        var h;
      })
    })]
  });
};
const An = "cast_change";
const $n = e => `tm_multi_last_session_${e}`;
const Mn = [/「([^」]+)」/g, /『([^』]+)』/g];
const Pn = e => {
  if (!e) {
    return e;
  }
  const t = e[e.length - 1];
  if (/[。！？…!?~～」』\u201d]/.test(t)) {
    return e;
  } else if (/[\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff]/.test(e)) {
    return e + "。";
  } else {
    return e + ".";
  }
};
const Rn = e => new Promise(t => {
  const n = new FileReader();
  n.onloadend = () => t(n.result);
  n.onerror = () => t(null);
  n.readAsDataURL(e);
});
const _n = e => {
  var t;
  try {
    const [n, s] = e.split(",");
    const a = ((t = n.match(/:(.*?);/)) == null ? undefined : t[1]) || "audio/mpeg";
    const r = atob(s);
    const i = new Uint8Array(r.length);
    for (let e = 0; e < r.length; e++) {
      i[e] = r.charCodeAt(e);
    }
    return new Blob([i], {
      type: a
    });
  } catch {
    return null;
  }
};
const Dn = ({
  userId: e,
  charId: t,
  enabled: n,
  autoPlay: s,
  voiceMode: r
}) => {
  const o = ge.useRef(new Map());
  const l = ge.useRef(null);
  const c = ge.useRef(null);
  const [d, u] = ge.useState(null);
  const [m, p] = ge.useState(null);
  const h = ge.useRef({
    voiceProvider: "minimax",
    voiceId: "",
    sovitsRefText: "",
    language: "auto",
    speed: 1
  });
  const g = ge.useRef(false);
  ge.useEffect(() => {
    if (e && t) {
      Promise.all([a.get(e, t).catch(() => null), K.get(t).catch(() => null), i.get("apiSettings").catch(() => null)]).then(([e, t, n]) => {
        const s = (e == null ? undefined : e.voiceProvider) || (t == null ? undefined : t.voiceProvider) || "minimax";
        let a = "";
        const r = (t == null ? undefined : t.sovitsApiVersion) || (e == null ? undefined : e.sovitsApiVersion) || (n == null ? undefined : n.sovitsApiVersion) || "v2";
        a = s === "elevenlabs" ? (e == null ? undefined : e.elevenVoiceId) || (t == null ? undefined : t.elevenVoiceId) || "" : s === "gptsovits" ? r === "gsvi" ? (e == null ? undefined : e.sovitsGsviVoice) || (t == null ? undefined : t.sovitsGsviVoice) || "" : (e == null ? undefined : e.sovitsRefAudioPath) || (t == null ? undefined : t.sovitsRefAudioPath) || "" : (e == null ? undefined : e.minimaxTimbreId) || (t == null ? undefined : t.minimaxTimbreId) || "";
        const i = (e == null ? undefined : e.sovitsRefText) || (t == null ? undefined : t.sovitsRefText) || "";
        const o = (e == null ? undefined : e.sovitsGptPath) || (t == null ? undefined : t.sovitsGptPath) || "";
        const l = (e == null ? undefined : e.sovitsSovitsPath) || (t == null ? undefined : t.sovitsSovitsPath) || "";
        const c = (e == null ? undefined : e.sovitsGsviModel) || (t == null ? undefined : t.sovitsGsviModel) || "";
        const d = (e == null ? undefined : e.sovitsGsviLang) || (t == null ? undefined : t.sovitsGsviLang) || "";
        const u = (e == null ? undefined : e.sovitsGsviEmotion) || (t == null ? undefined : t.sovitsGsviEmotion) || "";
        const m = (e == null ? undefined : e.voiceLanguage) || "auto";
        const p = (e == null ? undefined : e.voiceSpeed) ?? 1;
        h.current = {
          voiceProvider: s,
          voiceId: a,
          sovitsRefText: i,
          sovitsGptPath: o,
          sovitsSovitsPath: l,
          sovitsApiVersion: r,
          sovitsGsviModel: c,
          sovitsGsviLang: d,
          sovitsGsviEmotion: u,
          language: m,
          speed: p
        };
        console.log("[TM Voice] voiceConfig loaded:", {
          voiceProvider: s,
          voiceId: a,
          sovitsApiVersion: r,
          sovitsGsviModel: c
        });
        Q.voiceProvider = s;
        Q.minimaxTimbreId = s === "minimax" ? a : "";
        Q.elevenVoiceId = s === "elevenlabs" ? a : "";
        Q.sovitsRefAudioPath = s === "gptsovits" && r !== "gsvi" ? a : "";
        Q.sovitsGsviVoice = s === "gptsovits" && r === "gsvi" ? a : "";
        Q.sovitsRefText = i;
        Q.sovitsGptPath = o;
        Q.sovitsSovitsPath = l;
        Q.sovitsApiVersion = r;
        Q.sovitsGsviModel = c;
        Q.sovitsGsviLang = d;
        Q.sovitsGsviEmotion = u;
        Q.voiceLanguage = m;
        Q.voiceSpeed = p;
      });
    }
  }, [e, t]);
  ge.useEffect(() => () => {
    g.current = true;
    if (l.current) {
      l.current.pause();
      l.current = null;
    }
    if (c.current) {
      URL.revokeObjectURL(c.current);
      c.current = null;
    }
    X();
  }, []);
  const x = ge.useCallback(() => {
    g.current = true;
    if (l.current) {
      l.current.pause();
      l.current = null;
    }
    if (c.current) {
      URL.revokeObjectURL(c.current);
      c.current = null;
    }
    u(null);
    X();
  }, []);
  const f = ge.useCallback(async (e, t) => {
    const n = `tm_${e}`;
    const s = o.current.get(n);
    if (s) {
      return s;
    }
    try {
      const e = await J.get(n);
      if (e == null ? undefined : e.audioBase64) {
        const t = (e => {
          if (!e) {
            return null;
          }
          if (e.startsWith("[")) {
            try {
              const t = JSON.parse(e);
              const n = [];
              for (const e of t) {
                const t = _n(e.b64);
                if (t) {
                  n.push({
                    audioBlob: t,
                    audioDuration: e.dur
                  });
                }
              }
              if (n.length > 0) {
                return n;
              } else {
                return null;
              }
            } catch {
              return null;
            }
          }
          const t = _n(e);
          if (t) {
            return [{
              audioBlob: t,
              audioDuration: null
            }];
          } else {
            return null;
          }
        })(e.audioBase64);
        if (t) {
          o.current.set(n, t);
          return t;
        }
      }
    } catch {}
    const a = ((e, t) => {
      var n;
      if (!e) {
        return [];
      }
      if (t === "full") {
        return [e];
      }
      const s = [];
      for (const r of Mn) {
        const t = new RegExp(r.source, r.flags);
        let a;
        while ((a = t.exec(e)) !== null) {
          const e = (n = a[1]) == null ? undefined : n.trim();
          if (e) {
            s.push({
              index: a.index,
              end: a.index + a[0].length,
              content: e
            });
          }
        }
      }
      s.sort((e, t) => e.index - t.index);
      if (t === "dialogue") {
        const e = [];
        let t = -1;
        for (const n of s) {
          if (n.index >= t) {
            e.push(Pn(n.content));
            t = n.end;
          }
        }
        return e;
      }
      const a = (e => e.split(new RegExp("(?<=[。！？…～!?~\\n])")).map(e => e.trim()).filter(Boolean).filter(e => {
        const t = e.replace(/\s/g, "").length;
        return !(t < 3) && !(t > 60) && /[！？～…!?~]{1,3}$/.test(e);
      }))(e);
      if (s.length > 0) {
        const t = [...s.map(e => ({
          index: e.index,
          end: e.end,
          content: Pn(e.content),
          isDialogue: true
        }))];
        for (const i of a) {
          const n = e.indexOf(i);
          if (n === -1) {
            continue;
          }
          const a = n + i.length;
          if (!s.some(e => n >= e.index && a <= e.end)) {
            t.push({
              index: n,
              end: a,
              content: Pn(i),
              isDialogue: false
            });
          }
        }
        t.sort((e, t) => e.index - t.index);
        const n = [];
        let r = -1;
        for (const e of t) {
          if (e.index >= r) {
            n.push(e.content);
            r = e.end;
          }
        }
        return n;
      }
      if (a.length > 0) {
        return a.map(Pn);
      } else {
        return [e];
      }
    })(t, r || "smart");
    if (a.length === 0) {
      console.log("[TM Voice] 提取對話為空，跳過合成");
      return null;
    }
    const l = await i.get("apiSettings");
    const c = h.current;
    if (!(c.voiceProvider === "elevenlabs" ? l == null ? undefined : l.elevenlabsApiKey : c.voiceProvider === "gptsovits" ? l == null ? undefined : l.sovitsServerUrl : l == null ? undefined : l.minimaxApiKey)) {
      const e = c.voiceProvider === "elevenlabs" ? "ElevenLabs" : c.voiceProvider === "gptsovits" ? "GPT-SoVITS" : "MiniMax";
      console.warn(`[TM Voice] 無 ${e} 配置`);
      return null;
    }
    console.log(`[TM Voice] 合成 ${a.length} 段: mode=${r}`);
    const d = [];
    for (let r = 0; r < a.length; r++) {
      const e = a[r];
      console.log(`[TM Voice]   段${r + 1}/${a.length}: "${e.slice(0, 40)}..."`);
      const t = await q(e, {
        apiSettings: l,
        voiceProvider: c.voiceProvider,
        voiceId: c.voiceId,
        sovitsRefText: c.sovitsRefText,
        sovitsGptPath: c.sovitsGptPath,
        sovitsSovitsPath: c.sovitsSovitsPath,
        sovitsApiVersion: c.sovitsApiVersion,
        sovitsGsviVoice: c.sovitsApiVersion === "gsvi" ? c.voiceId : undefined,
        sovitsGsviModel: c.sovitsGsviModel,
        sovitsGsviLang: c.sovitsGsviLang,
        sovitsGsviEmotion: c.sovitsGsviEmotion,
        language: c.language,
        speed: c.speed,
        preserveActionMarkers: true
      });
      if (t == null ? undefined : t.audioBlob) {
        d.push(t);
      }
    }
    if (d.length === 0) {
      return null;
    } else {
      o.current.set(n, d);
      (async e => {
        const t = [];
        for (const n of e) {
          const e = await Rn(n.audioBlob);
          if (e) {
            t.push({
              b64: e,
              dur: n.audioDuration
            });
          }
        }
        if (t.length > 0) {
          return JSON.stringify(t);
        } else {
          return null;
        }
      })(d).then(e => {
        if (e) {
          const t = d.reduce((e, t) => e + (t.audioDuration || 0), 0);
          J.put(n, e, t).catch(() => {});
        }
      });
      return d;
    }
  }, [r]);
  const y = ge.useCallback(e => new Promise((t, n) => {
    const s = URL.createObjectURL(e);
    c.current = s;
    const a = new Audio(s);
    a.playsInline = true;
    if (De()) {
      a.setAttribute("playsinline", "");
      a.setAttribute("webkit-playsinline", "");
    }
    a.onended = () => {
      URL.revokeObjectURL(s);
      c.current = null;
      l.current = null;
      t();
    };
    a.onerror = e => {
      URL.revokeObjectURL(s);
      c.current = null;
      l.current = null;
      n(e);
    };
    l.current = a;
    a.play().catch(n);
  }), []);
  const v = ge.useCallback(async (e, t) => {
    if (n) {
      if (d === e && l.current) {
        x();
      } else {
        x();
        g.current = false;
        if (De()) {
          Be();
        }
        p(e);
        try {
          const n = await f(e, t);
          if (!(n == null ? undefined : n.length) || g.current) {
            p(null);
            return;
          }
          p(null);
          u(e);
          Z();
          for (let e = 0; e < n.length && !g.current; e++) {
            await y(n[e].audioBlob);
            if (e < n.length - 1 && !g.current) {
              await new Promise(e => setTimeout(e, 900));
            }
          }
          u(null);
          X();
        } catch (s) {
          console.error("[TM Voice] 播放失敗:", s);
          p(null);
          u(null);
          if (c.current) {
            URL.revokeObjectURL(c.current);
          }
          c.current = null;
          l.current = null;
          X();
        }
      }
    }
  }, [n, d, x, f, y]);
  const b = ge.useCallback(async (e, t) => {
    if (n && s) {
      await v(e, t);
    }
  }, [n, s, v]);
  const S = ge.useCallback(e => {
    const t = `tm_${e}`;
    o.current.delete(t);
    J.delete(t).catch(() => {});
  }, []);
  return {
    playEntry: v,
    stopPlayback: x,
    autoPlayEntry: b,
    clearCache: S,
    playingEntryId: d,
    loadingEntryId: m
  };
};
const Bn = [{
  id: "ocean",
  src: "/audio/ocean.mp3"
}, {
  id: "cafe",
  src: "/audio/cafe.mp3"
}, {
  id: "night",
  src: "/audio/night.mp3"
}, {
  id: "market",
  src: "/audio/market.mp3"
}, {
  id: "birds",
  src: "/audio/birds.mp3"
}];
const Ln = (e, t) => {
  try {
    localStorage.setItem(e, t);
  } catch (n) {}
};
const zn = [[0, "late_night", "late night"], [5, "early_morning", "early morning"], [8, "morning", "morning"], [11, "noon", "noon"], [13, "afternoon", "afternoon"], [17, "evening", "evening"], [20, "night", "night"], [23, "late_night", "late night"]];
function On(e, t) {
  return `${String(e).padStart(2, "0")}:${String(t).padStart(2, "0")}`;
}
const Fn = (e, t, n = "tm_reroll_slots") => `${n}_${e}_${String(t)}`;
const Un = ({
  enabled: e,
  userId: t,
  charId: n,
  storyEntries: s,
  setStoryEntries: a,
  isGenerating: r,
  scrollContainerRef: o,
  storyService: l,
  slotsKeyPrefix: c,
  aiRole: d
}) => {
  const u = l || te;
  const m = c || "tm_reroll_slots";
  const p = d || "char";
  const [h, g] = ge.useState({});
  const x = ge.useRef({});
  ge.useEffect(() => {
    x.current = h;
  }, [h]);
  const f = ge.useRef(s);
  ge.useEffect(() => {
    f.current = s;
  }, [s]);
  const y = ge.useRef(null);
  const v = ge.useRef(null);
  const b = ge.useRef(null);
  ge.useEffect(() => {
    if (!t || !n) {
      g({});
      b.current = null;
      return;
    }
    const e = Fn(t, n, m);
    if (b.current !== e) {
      b.current = e;
      i.get(e).then(e => {
        g(e && typeof e == "object" ? e : {});
      }).catch(() => g({}));
    }
  }, [t, n, m]);
  const S = ge.useCallback(e => {
    if (t && n) {
      try {
        i.set(Fn(t, n, m), e);
      } catch {}
    }
  }, [t, n, m]);
  const w = ge.useCallback(e => {
    g(t => {
      const n = typeof e == "function" ? e(t) : e;
      S(n);
      return n;
    });
  }, [S]);
  const j = ge.useMemo(() => {
    const e = {};
    for (const t of s) {
      if (!t.rerollSlotId) {
        continue;
      }
      const n = t.rerollVariantIndex ?? 0;
      e[t.rerollSlotId] ||= new Set();
      e[t.rerollSlotId].add(n);
    }
    return e;
  }, [s]);
  const C = ge.useCallback(e => {
    const t = j[e];
    if (t) {
      return [...t].sort((e, t) => e - t);
    } else {
      return [];
    }
  }, [j]);
  const k = ge.useCallback(e => {
    const t = e.rerollSlotId;
    if (!t) {
      return true;
    }
    const n = h[t];
    if (!n) {
      return true;
    }
    const s = j[t];
    return !s || !s.has(n.activeIndex) || (e.rerollVariantIndex ?? 0) === n.activeIndex;
  }, [h, j]);
  const N = ge.useCallback(e => {
    const t = e.rerollSlotId;
    if (!t) {
      return true;
    }
    const n = h[t];
    return !n || (e.rerollVariantIndex ?? 0) === n.activeIndex;
  }, [h]);
  ge.useEffect(() => {
    var e;
    if (!t || !n) {
      return;
    }
    const s = Object.keys(h);
    if (s.length === 0) {
      return;
    }
    const a = (e = y.current) == null ? undefined : e.slotId;
    let r = false;
    const i = {
      ...h
    };
    for (const t of s) {
      if (t === a) {
        continue;
      }
      const e = j[t];
      if (!e || e.size === 0) {
        continue;
      }
      const n = i[t];
      if (!e.has(n.activeIndex)) {
        const s = [...e].sort((e, t) => e - t);
        i[t] = {
          ...n,
          activeIndex: s[s.length - 1]
        };
        r = true;
      }
    }
    if (r) {
      x.current = i;
      w(() => i);
    }
  }, [j, h, t, n, w]);
  const I = ge.useCallback((e, t) => {
    const n = e.rerollSlotId;
    if (!n) {
      return null;
    }
    if (t && t.rerollSlotId === n) {
      return null;
    }
    const s = C(n);
    if (s.length <= 1) {
      return null;
    }
    const a = h[n];
    const r = a ? s.indexOf(a.activeIndex) : 0;
    return {
      slotId: n,
      totalVariants: s.length,
      activeIndex: Math.max(0, r),
      sortedVariants: s
    };
  }, [C, h]);
  const T = ge.useCallback((e, t) => {
    const n = C(e);
    if (t < 0 || t >= n.length) {
      return;
    }
    const s = n[t];
    const a = o == null ? undefined : o.current;
    if (a) {
      const t = a.querySelector(`[data-tm-reroll-slot="${e}"]`);
      if (t) {
        v.current = {
          slotId: e,
          prevTop: t.getBoundingClientRect().top
        };
      }
    }
    w(t => {
      const n = t[e];
      if (n && n.activeIndex === s) {
        return t;
      } else {
        return {
          ...t,
          [e]: {
            ...(n || {}),
            activeIndex: s
          }
        };
      }
    });
  }, [C, w, o]);
  ge.useLayoutEffect(() => {
    const e = v.current;
    if (!e) {
      return;
    }
    v.current = null;
    const t = o == null ? undefined : o.current;
    if (!t) {
      return;
    }
    const n = t.querySelector(`[data-tm-reroll-slot="${e.slotId}"]`);
    if (!n) {
      return;
    }
    const s = n.getBoundingClientRect().top - e.prevTop;
    if (Math.abs(s) > 0.5) {
      t.scrollTop += s;
    }
  }, [h, o]);
  const E = (e, t) => {
    const n = [];
    const s = [];
    const a = [];
    for (const r of e) {
      if (!r.rerollSlotId || !(r.rerollSlotId in t)) {
        a.push(r);
        continue;
      }
      const e = t[r.rerollSlotId];
      if ((r.rerollVariantIndex ?? 0) === e) {
        const {
          rerollSlotId: e,
          rerollVariantIndex: t,
          ...n
        } = r;
        a.push(n);
        if (typeof r.id == "number") {
          s.push(r.id);
        }
      } else if (typeof r.id == "number") {
        n.push(r.id);
      }
    }
    return {
      next: a,
      toDeleteIds: n,
      toStripIds: s
    };
  };
  const A = ge.useCallback(e => {
    const t = x.current[e];
    if (!t) {
      return;
    }
    const {
      next: n,
      toDeleteIds: s,
      toStripIds: r
    } = E(f.current, {
      [e]: t.activeIndex
    });
    a(n);
    f.current = n;
    for (const a of s) {
      u.deleteById(a).catch(() => {});
    }
    for (const a of r) {
      u.updateEntry(a, {
        rerollSlotId: null,
        rerollVariantIndex: null
      }).catch(() => {});
    }
    const {
      [e]: i,
      ...o
    } = x.current;
    x.current = o;
    w(() => o);
  }, [a, w]);
  const $ = ge.useCallback(() => {
    const e = Object.keys(x.current);
    if (e.length === 0) {
      return null;
    }
    y.current = null;
    const t = {};
    for (const a of e) {
      t[a] = x.current[a].activeIndex;
    }
    const {
      next: n,
      toDeleteIds: s,
      toStripIds: r
    } = E(f.current, t);
    a(n);
    f.current = n;
    for (const a of s) {
      u.deleteById(a).catch(() => {});
    }
    for (const a of r) {
      u.updateEntry(a, {
        rerollSlotId: null,
        rerollVariantIndex: null
      }).catch(() => {});
    }
    x.current = {};
    w(() => ({}));
    return n;
  }, [a, w]);
  const M = ge.useCallback(() => {
    var s;
    if (!e) {
      return null;
    }
    if (!t || !n) {
      return null;
    }
    const r = f.current;
    const i = r.length - 1;
    if (i < 0) {
      return null;
    }
    if (r[i].role !== p) {
      return null;
    }
    const o = i;
    if (o === 0) {
      return null;
    }
    const l = r.slice(o);
    const c = r.slice(0, o);
    let d = (s = l[0]) == null ? undefined : s.rerollSlotId;
    const m = !!d && l.every(e => e.rerollSlotId === d);
    let h;
    let g = {};
    let v = r;
    if (m && x.current[d]) {
      const e = C(d);
      h = ((e.length > 0 ? e[e.length - 1] : 0) || 0) + 1;
      g[d] = {
        ...x.current[d],
        activeIndex: h
      };
    } else {
      d = `tm_reroll_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
      const e = l.map(e => ({
        ...e,
        rerollSlotId: d,
        rerollVariantIndex: 0
      }));
      v = [...c, ...e];
      for (const t of l) {
        if (typeof t.id == "number") {
          u.updateEntry(t.id, {
            rerollSlotId: d,
            rerollVariantIndex: 0
          }).catch(() => {});
        }
      }
      h = 1;
      g[d] = {
        activeIndex: h
      };
    }
    if (v !== r) {
      a(v);
      f.current = v;
    }
    const b = {
      ...x.current,
      ...g
    };
    x.current = b;
    w(e => ({
      ...e,
      ...g
    }));
    y.current = {
      slotId: d,
      variantIndex: h
    };
    return {
      slotId: d,
      remaining: c,
      variantIndex: h
    };
  }, [e, t, n, C, a, w]);
  ge.useEffect(() => {
    if (r) {
      return;
    }
    const e = y.current;
    if (!e) {
      return;
    }
    y.current = null;
    const {
      slotId: t,
      variantIndex: n
    } = e;
    const s = f.current;
    const i = [];
    for (let a = s.length - 1; a >= 0; a--) {
      const e = s[a];
      if (e.role !== p || e.rerollSlotId) {
        break;
      }
      i.unshift(a);
    }
    if (i.length === 0) {
      w(e => {
        const n = e[t];
        if (!n) {
          return e;
        }
        const a = new Set();
        for (const i of s) {
          if (i.rerollSlotId === t) {
            a.add(i.rerollVariantIndex ?? 0);
          }
        }
        if (a.size === 0) {
          const {
            [t]: n,
            ...s
          } = e;
          return s;
        }
        const r = [...a].sort((e, t) => e - t);
        return {
          ...e,
          [t]: {
            ...n,
            activeIndex: r[r.length - 1]
          }
        };
      });
      return;
    }
    const o = i.some(e => {
      const t = s[e].content;
      if (typeof t == "string") {
        return t.trim().length > 0;
      } else {
        return !!t;
      }
    });
    const l = [];
    const c = new Set(i);
    const d = s.map((e, s) => {
      if (!c.has(s)) {
        return e;
      }
      if (typeof e.id == "number") {
        l.push(e.id);
      }
      const a = {
        ...e,
        rerollSlotId: t,
        rerollVariantIndex: n
      };
      if (!o && s === i[0]) {
        a.content = "[EMPTY_REROLL]";
      }
      return a;
    });
    a(d);
    for (const a of l) {
      const e = {
        rerollSlotId: t,
        rerollVariantIndex: n
      };
      if (!o && a === s[i[0]].id) {
        e.content = "[EMPTY_REROLL]";
      }
      u.updateEntry(a, e).catch(() => {});
    }
  }, [r, a, w]);
  return {
    slots: h,
    isEntryVisible: k,
    isEntryVisibleForAI: N,
    getSelectorInfoForEntry: I,
    switchVariant: T,
    confirmVariant: A,
    confirmAllSlots: $,
    beginReroll: M
  };
};
const Wn = 10;
const Hn = new Set(["smart", "dialogue", "full"]);
const Vn = e => Hn.has(e) ? e : "smart";
const Gn = (e, t = "untitled") => String(e || "").replace(/[\\/:*?"<>|]/g, " ").replace(/\s+/g, " ").trim().replace(/[. ]+$/g, "") || t;
const Yn = ({
  charName: e,
  userName: t,
  sessionName: n
}) => `${Gn(e, "char")}_${Gn(t, "user")}_${Gn(n, "session")}.txt`;
function Kn(e, t = true) {
  if (!(e == null ? undefined : e.isRemoteLocation)) {
    return null;
  }
  if (!t) {
    return `- **地区设定**: 用户所在地 ${e.userLocation || e.userRealLocation || "Taipei"}, 角色所在地 ${e.charLocation || e.charRealLocation || "Tokyo"}（异地关系）`;
  }
  try {
    const t = localStorage.getItem("nuojiji_weather_cache_v2");
    if (!t) {
      return null;
    }
    const n = JSON.parse(t);
    if (!n || typeof n != "object") {
      return null;
    }
    const s = e.userRealLocation || "Taipei";
    const a = e.charRealLocation || "Tokyo";
    const r = e.userLocation || "Taipei";
    const i = n[`remote:${s}|${a}|${r}|${e.charLocation || "Tokyo"}`];
    if (!(i == null ? undefined : i.value)) {
      return null;
    }
    if (i.value._remote && i.value._userUtcOffset != null && i.value._charUtcOffset != null) {
      const e = new Date(new Date().getTime() + i.value._charUtcOffset * 1000);
      const t = e => `${String(e.getUTCHours()).padStart(2, "0")}:${String(e.getUTCMinutes()).padStart(2, "0")}`;
      return `${i.value._weatherParts.join("\n")}\n- **时差提示**: 角色当前时间 ${t(e)} (${i.value._diffStr})`;
    }
    if (typeof i.value == "string") {
      return i.value;
    } else {
      return null;
    }
  } catch (n) {
    console.warn("[TM] 讀取天氣緩存失敗:", n);
    return null;
  }
}
const Xn = async (e, s, r, o, l, c = 12, d = "zh", u = "", m = null, p = null, h = true, g = false) => {
  const x = `tm_last_summarized_${e}_${s}`;
  const f = (await i.get(x)) || {
    lastEntryCount: 0
  };
  let y;
  let v;
  if (p && f.sessionId && f.sessionId !== p) {
    console.log(`[TM] session 切換 (${f.sessionId} → ${p})，重置追蹤`);
    f.lastEntryCount = 0;
    f.sessionId = p;
    await i.set(x, {
      lastEntryCount: 0,
      sessionId: p
    });
  }
  if (f.lastEntryCount > l.length) {
    console.warn(`[TM] 追蹤計數 (${f.lastEntryCount}) 超出實際條目數 (${l.length})，已重置`);
    f.lastEntryCount = l.length;
    await i.set(x, {
      lastEntryCount: l.length,
      sessionId: p || f.sessionId
    });
  }
  if (m) {
    y = m.start - 1;
    v = m.end;
  } else {
    let e = l.length - f.lastEntryCount;
    if (c > 0 && e < c) {
      return null;
    }
    if (e <= 0) {
      if (c > 0) {
        return null;
      }
      f.lastEntryCount = 0;
      e = l.length;
    }
    y = f.lastEntryCount;
    v = l.length;
  }
  const j = l.slice(y, v).filter(e => !(e == null ? undefined : e.hiddenByUser));
  const C = j.map((e, t) => {
    const n = y + t + 1;
    const s = e.role === "user" ? o.name || "你" : r.name || "角色";
    let a = "";
    if (h && e.timestamp) {
      const t = new Date(e.timestamp);
      if (!isNaN(t.getTime())) {
        a = `[${t.getMonth() + 1}月${t.getDate()}日 ${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}] `;
      }
    }
    return `${a}#${n} ${s}: ${e.content}`;
  }).join("\n");
  let k = null;
  if (h && j.length > 0) {
    const e = e => {
      if (!(e == null ? undefined : e.timestamp)) {
        return null;
      }
      const t = new Date(e.timestamp);
      if (isNaN(t.getTime())) {
        return null;
      } else {
        return `${t.getMonth() + 1}月${t.getDate()}日 ${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`;
      }
    };
    let t = null;
    let n = null;
    for (let s = 0; s < j.length; s++) {
      const n = e(j[s]);
      if (n) {
        t = n;
        break;
      }
    }
    for (let s = j.length - 1; s >= 0; s--) {
      const t = e(j[s]);
      if (t) {
        n = t;
        break;
      }
    }
    if (t || n) {
      k = {
        start: t || n,
        end: n || t
      };
    }
  }
  const N = g ? "spectate" : "tm";
  const I = await n.get(e, s).catch(() => null);
  const T = ((I == null ? undefined : I.summaryHistory) || []).filter(e => e.source === N);
  const E = (u || "") + (g ? `\n\n[SOLO SCENE] This is a scene where ${o.name || "the user"} was NOT present — ${r.originalName || r.name}'s solitary moment / daily life / interaction with others (not user). Summarize as character's own life experience, treat as ordinary memory (not a secret). The character may freely mention these events to ${o.name || "the user"} later if topic naturally arises. Do NOT invent any user presence in the summary, do NOT treat anything as shared memory with the user, do NOT generate evidencedFacts that assume user witnessed this scene.` : "");
  const A = String(s || "");
  const $ = A.startsWith("group_") ? null : await de.get(e, A).catch(() => null);
  const M = ($ == null ? undefined : $.isUnlocked) === true;
  let P = "";
  let R = "";
  if (M) {
    const t = await a.get(e, s).catch(() => null);
    P = (t == null ? undefined : t.relationship) || "";
    R = (t == null ? undefined : t.charToUserRelationship) || "";
  }
  const _ = at({
    conversationText: C,
    characterName: r.originalName || r.name,
    currentUserName: o.name || "你",
    outputLanguage: d,
    userPersona: (o == null ? undefined : o.intro) || (o == null ? undefined : o.signature) || (o == null ? undefined : o.bio) || "",
    characterPersona: (r == null ? undefined : r.description) || (r == null ? undefined : r.personality) || (r == null ? undefined : r.intro) || "",
    userGender: (o == null ? undefined : o.gender) || "",
    userToCharRelationship: P,
    charToUserRelationship: R,
    startIndex: y + 1,
    endIndex: v,
    messageCount: j.length,
    existingSummaryCount: T.length,
    timeAware: h && !!k,
    dateRange: k,
    customSummaryInstructions: E,
    coupleSpaceEnabled: M
  });
  const D = b(await S());
  if (!D.mainApiUrl || !D.mainApiKey) {
    throw new Error("請先設定 API");
  }
  const B = rt(d);
  const L = g ? `You are an expert scene summarizer. The user was NOT present in this scene — summarize ${r.originalName || r.name}'s solitary moment / daily life / interaction with non-user others as the character's own life memory. Preserve rich detail, mood, and key beats. Do NOT invent any user presence. Write the summary in ${B}.` : `You are an expert conversation summarizer. Produce a detailed, well-structured summary of the following face-to-face interaction that preserves rich detail and never misses important plot points. Write the summary in ${B}.`;
  const z = await w({
    messages: [{
      role: "system",
      content: L
    }, {
      role: "user",
      content: _
    }],
    settings: {
      ...D,
      temperature: 0.3
    },
    preferStreaming: false
  });
  if (!(z == null ? undefined : z.trim())) {
    throw new Error("摘要生成為空");
  }
  let O = z.trim();
  let F = null;
  let U = null;
  if (M) {
    const e = ut(z.trim());
    U = e.achievementEntries.length > 0 ? e.achievementEntries : null;
    O = e.cleanedText || z.trim();
    if (U) {
      console.log(`[TM] 🏆 劇情成就 (${U.length} 條): ${U.map(e => e.title).join(" / ")}`);
    }
    const t = mt(O);
    F = t.loveJourneyEntries.length > 0 ? t.loveJourneyEntries : null;
    O = t.cleanedText || O;
    if (F) {
      console.log(`[TM] 💑 恋爱路程 (${F.length} 條): ${F.map(e => e.content).join(" / ")}`);
    }
  }
  const W = it(O);
  O = W.cleanedText || O;
  const {
    importance: H,
    emotion: V,
    topics: G,
    openThread: Y,
    stanceText: K,
    evidencedFacts: X,
    obsoleteFacts: J
  } = W;
  console.log(`[TM] ⭐ 重要度=${H} 情緒=${V} 主題=${G.join(",")}`);
  if (Y) {
    console.log("[TM] 💭 懸念:", Y.text);
  }
  if (K) {
    console.log("[TM] 🧠 立場:", K);
  }
  if (X.length > 0) {
    console.log("[TM] 📎 事實:", X.join(" | "));
  }
  if ((J == null ? undefined : J.length) > 0) {
    console.log("[TM] 🗑️ 失效:", J.join(" | "));
  }
  const q = ot(O);
  const Z = q.summaryText || O;
  const Q = q.keywords.length > 0 ? q.keywords : lt(Z);
  if (k) {
    const e = [k.start, k.end].filter(Boolean);
    for (const t of e) {
      if (t && !Q.some(e => e.includes(t) || t.includes(e))) {
        Q.push(t);
      }
    }
  }
  console.log(`[TM] 關鍵字 (${q.keywords.length > 0 ? "AI" : "本地"}): [${Q.join(", ")}]`);
  let ee = null;
  if (p) {
    try {
      const e = await t.getById(p);
      if (e) {
        ee = e.name || null;
      }
    } catch {}
  }
  const te = {
    id: Date.now(),
    date: new Date().toISOString(),
    summary: Z,
    startMessageIndex: y,
    lastMessageIndex: v,
    messageCount: j.length,
    dateRange: k || null,
    source: N,
    keywords: Q,
    _eventVersion: 4,
    importance: H,
    emotion: V,
    topics: G,
    openThreads: Y ? [Y] : [],
    evidencedFacts: X,
    obsoleteFacts: J || [],
    loveJourneyEntries: F || null,
    achievementEntries: U || null,
    ...(p && {
      sessionId: p
    }),
    ...(ee && {
      sessionName: ee
    }),
    ...(g && {
      solo: true
    })
  };
  await n.appendHistory(e, s, te);
  try {
    const t = j.map(e => {
      const t = e.role === "user" ? "user" : e.role === "assistant" || e.role === "them" ? "assistant" : null;
      if (!t) {
        return null;
      }
      const n = String(e.content || "").trim();
      if (!n) {
        return null;
      }
      const s = t === "user" ? (o == null ? undefined : o.name) || undefined : (r == null ? undefined : r.name) || undefined;
      return {
        role: t,
        content: n.slice(0, 4000),
        timestamp: Number.isFinite(e.timestamp) ? e.timestamp : null,
        ...(s ? {
          senderName: s
        } : {})
      };
    }).filter(Boolean);
    if (t.length > 0) {
      Me({
        userId: e,
        characterId: String(s),
        source: "thismoment",
        messages: t
      }).catch(() => {});
    }
  } catch (ne) {}
  if (K && !g) {
    try {
      const t = await n.getStance(e, s);
      await n.updateStance(e, s, {
        text: K,
        updatedAt: new Date().toISOString(),
        basedOnEventId: te.id,
        version: ((t == null ? undefined : t.version) || 0) + 1
      });
      console.log("[TM] 🧠 stance 已更新");
    } catch (se) {
      console.warn("[TM] stance 更新失敗:", se);
    }
  }
  if (v >= l.length) {
    await i.set(x, {
      lastEntryCount: l.length,
      sessionId: p || f.sessionId
    });
  }
  console.log(`[TM] 摘要已寫入 (${j.length} 條):`, te.summary.slice(0, 50), "| keywords:", Q);
  return te;
};
const Jn = e => [{
  name: e("tmDirPushStory", "推劇情"),
  guidance: e("tmDirPushStoryGuide", "user的行為或說話必須影響故事的發展，做出關鍵決定，推動劇情往前走")
}, {
  name: e("tmDirHeartToHeart", "談心"),
  guidance: e("tmDirHeartToHeartGuide", "敞開心扉，分享內心感受、回憶或脆弱的一面，增進與角色的情感連結")
}, {
  name: e("tmDirChangeTopic", "轉移話題"),
  guidance: e("tmDirChangeTopicGuide", "自然地將話題引向新的方向、事件，或改變當前氛圍")
}];
const qn = e => {
  if (!e || typeof e != "string") {
    return {
      original: e || "",
      translation: ""
    };
  }
  const t = e.lastIndexOf("||");
  if (t === -1) {
    return {
      original: e,
      translation: ""
    };
  }
  const n = e.substring(0, t).trim();
  const s = e.substring(t + 2).trim();
  if (n.length < 20 || s.length < 20) {
    return {
      original: e,
      translation: ""
    };
  } else {
    return {
      original: n,
      translation: s
    };
  }
};
const Zn = /^[\u300C\u300E\u201C\u201D"]/;
const Qn = /<details[^>]*>([\s\S]*?)<\/details>/gi;
const es = /^\s*<summary[^>]*>([\s\S]*?)<\/summary>/i;
const ts = e => {
  if (!e || typeof e != "string") {
    return [];
  }
  const t = [];
  const n = e.split(/\n{2,}/);
  for (const s of n) {
    const e = s.split("\n");
    let n = "";
    for (const s of e) {
      const e = s.trim();
      if (e) {
        if (Zn.test(e) && n) {
          t.push(n.trim());
          n = "";
        }
        n += (n ? "\n" : "") + e;
      }
    }
    if (n.trim()) {
      t.push(n.trim());
    }
  }
  return t;
};
const ns = [{
  labelKey: "tmStyleNovel",
  label: "小說體",
  descKey: "tmStyleNovelDesc",
  desc: "細膩描寫；第三人稱全知視角，深入角色內心獨白與感官細節。善用比喻與意象，節奏張弛有度。注重氛圍營造、場景轉換與情緒遞進。對話與敘事自然交織，留白與節制並重。"
}, {
  labelKey: "tmStyleScript",
  label: "劇本",
  descKey: "tmStyleScriptDesc",
  desc: "劇本體；場景描述開頭（時間/地點/氛圍），角色動作以簡短敘述穿插，對話直接呈現。節奏明快，注重動作性與畫面感，如電影分鏡。少用內心獨白，用行為暗示情緒。"
}, {
  labelKey: "tmStyleFirstPerson",
  label: "第一人稱",
  descKey: "tmStyleFirstPersonDesc",
  desc: "第一人稱沉浸；角色用「我」書寫，對方（user）稱「你」——禁止用她/他/名字等第三人稱指代 user。大量內心活動、感官體驗與情緒波動。語言帶有角色個人口癖與說話習慣。主觀、私密，思緒可以跳躍、矛盾、不完整。"
}, {
  labelKey: "tmStyleTranslation",
  label: "翻譯腔",
  descKey: "tmStyleTranslationDesc",
  desc: "翻譯文學風；模仿歐美/日本文學翻譯的中文語感。句式偏長，善用「——」破折號與省略號。意識流描寫，抽象比喻，冷冽而詩意。帶有輕微翻譯體的生硬與距離感。"
}];
const ss = () => {
  var e;
  var r;
  var l;
  var c;
  var d;
  var u;
  var m;
  const {
    currentScreen: p,
    showScreen: h
  } = T();
  const {
    characters: g,
    isLoaded: x
  } = ne();
  const {
    profileUsers: f,
    safeCurrentProfileUserId: y,
    setCurrentProfileUserId: v
  } = se();
  const {
    language: j,
    t: C,
    tOr: k
  } = I();
  const N = p === "this-moment-screen";
  const {
    isRerollFeedbackOpen: A,
    requestReroll: F,
    closeRerollFeedback: U,
    submitRerollFeedback: K,
    rerollFeedbackPresets: J,
    addRerollFeedbackPreset: q,
    deleteRerollFeedbackPreset: Q,
    updateRerollFeedbackPreset: he
  } = Le();
  const [ve, be] = ge.useState(() => {
    try {
      const e = localStorage.getItem("tm_last_charId");
      if (e) {
        const t = g.findIndex(t => String(t.id) === e);
        if (t >= 0) {
          return t;
        }
      }
      const t = sessionStorage.getItem("tm_last_charIndex");
      return t && parseInt(t, 10) || 0;
    } catch {
      return 0;
    }
  });
  const [Se, we] = ge.useState(() => {
    try {
      const e = localStorage.getItem("tm_last_userId");
      if (e) {
        const t = f.findIndex(t => String(t.uid || t.id) === e);
        if (t >= 0) {
          return t;
        }
      }
      const t = sessionStorage.getItem("tm_last_userIndex");
      return t && parseInt(t, 10) || 0;
    } catch {
      return 0;
    }
  });
  const [je, Ce] = ge.useState([]);
  const [ke, Ne] = ge.useState(Wn);
  const [Ie, Te] = ge.useState("");
  const [Ee, Ae] = ge.useState(false);
  const [$e, Me] = ge.useState(false);
  const [Pe, De] = ge.useState(false);
  const [Be, We] = ge.useState("");
  const [ct, dt] = ge.useState({});
  const [ut, mt] = ge.useState({});
  const [pt, ht] = ge.useState(false);
  const [xt, yt] = ge.useState(false);
  const [bt, wt] = ge.useState(100);
  const [Wt, Ht] = ge.useState(500);
  const [Vt, Gt] = ge.useState(() => C(ns[0].descKey, ns[0].desc));
  const [Yt, Kt] = ge.useState("b0");
  const [qt, Zt] = ge.useState([]);
  const [en, tn] = ge.useState("winter-snow");
  const [nn, an] = ge.useState("");
  const [rn, ln] = ge.useState(false);
  const [cn, un] = ge.useState("separate");
  const [mn, hn] = ge.useState(2);
  const [xn, vn] = ge.useState(() => {
    var e;
    var t;
    var n;
    var s;
    const a = Jn(C);
    return [(e = a[0]) == null ? undefined : e.name, (t = a[1]) == null ? undefined : t.name, (n = a[2]) == null ? undefined : n.name, (s = a[2]) == null ? undefined : s.name];
  });
  const [bn, Sn] = ge.useState(["", "", "", ""]);
  const [jn, kn] = ge.useState([]);
  const [In, Mn] = ge.useState("");
  const [Pn, Rn] = ge.useState(true);
  const _n = ge.useRef(true);
  ge.useEffect(() => {
    _n.current = Pn;
  }, [Pn]);
  const [Fn, Hn] = ge.useState(false);
  const [Zn, Qn] = ge.useState(20);
  const [es, ts] = ge.useState("20");
  const [ss, as] = ge.useState([]);
  const [rs, is] = ge.useState(false);
  const [os, ls] = ge.useState(true);
  const [cs, ds] = ge.useState(12);
  const [hs, Ss] = ge.useState("");
  const [ws, js] = ge.useState(false);
  const [Cs, ks] = ge.useState(() => sessionStorage.getItem("mp_reopen_memory_view") === "1" && (sessionStorage.removeItem("mp_reopen_memory_view"), true));
  const [Ns, Is] = ge.useState(false);
  const [Ts, Es] = ge.useState(true);
  const [As, $s] = ge.useState("");
  const [Ms, Ps] = ge.useState("");
  const [Rs, _s] = ge.useState(true);
  const [Ds, Bs] = ge.useState(false);
  const [Ls, zs] = ge.useState(() => {
    try {
      return localStorage.getItem("tm_no_animations") === "1";
    } catch {
      return false;
    }
  });
  const [Os, Fs] = ge.useState(false);
  const [Us, Ws] = ge.useState(false);
  const [Hs, Vs] = ge.useState([]);
  const [Gs, Ys] = ge.useState(false);
  const [Ks, Xs] = ge.useState(false);
  const [Js, qs] = ge.useState(new Set());
  const [Zs, Qs] = ge.useState(() => new Set());
  const [ea, ta] = ge.useState([]);
  const [na, sa] = ge.useState(null);
  const [aa, ra] = ge.useState(null);
  const [ia, oa] = ge.useState(false);
  const [la, ca] = ge.useState(() => {
    try {
      if (localStorage.getItem("tm_mode") === "multi") {
        return "multi";
      } else {
        return "single";
      }
    } catch {
      return "single";
    }
  });
  ge.useEffect(() => {
    try {
      localStorage.setItem("tm_mode", la);
    } catch {}
  }, [la]);
  ge.useEffect(() => {
    const e = e => {
      window.__nuojiji_offlineSceneActive = e;
      try {
        window.dispatchEvent(new CustomEvent("nuojiji:offline-scene-change", {
          detail: {
            active: e
          }
        }));
      } catch {}
    };
    e(!!N);
    return () => e(false);
  }, [N]);
  const [da, ua] = ge.useState(() => new Set());
  const [ma, pa] = ge.useState(false);
  const [ha, ga] = ge.useState(false);
  const [xa, fa] = ge.useState("");
  const [ya, va] = ge.useState("");
  const [ba, Sa] = ge.useState("off");
  const [wa, ja] = ge.useState(false);
  const [Ca, ka] = ge.useState(false);
  const [Na, Ia] = ge.useState(true);
  const [Ta, Ea] = ge.useState("off");
  const [Aa, $a] = ge.useState(false);
  const [Ma, Pa] = ge.useState("combined");
  const [Ra, _a] = ge.useState(false);
  const [Da, Ba] = ge.useState(false);
  const [La, za] = ge.useState({});
  const [Oa, Fa] = ge.useState("");
  const [Ua, Wa] = ge.useState("");
  const [Ha, Va] = ge.useState(false);
  const [Ga, Ya] = ge.useState("");
  const [Ka, Xa] = ge.useState(false);
  const [Ja, qa] = ge.useState([]);
  const [Za, Qa] = ge.useState(null);
  const [er, tr] = ge.useState(false);
  const [nr, sr] = ge.useState(false);
  const [ar, rr] = ge.useState("smart");
  const [ir, or] = ge.useState(false);
  const [lr, cr] = ge.useState(false);
  const [dr, ur] = ge.useState(false);
  const [mr, pr] = ge.useState(0);
  const hr = ge.useRef(null);
  const gr = ge.useRef(null);
  const xr = ge.useRef(null);
  const fr = ge.useRef(je);
  const yr = ge.useRef(null);
  const vr = ge.useRef(false);
  const br = ge.useRef(null);
  const Sr = ge.useRef(0);
  const wr = ge.useRef(false);
  const jr = ge.useRef(null);
  const Cr = ge.useRef(N);
  const kr = ge.useRef(null);
  const Nr = ge.useRef([]);
  const Ir = ge.useRef(null);
  const Tr = ge.useRef(false);
  const Er = ge.useRef(null);
  const Ar = ge.useRef(false);
  const $r = ge.useRef(false);
  const Mr = ge.useRef(false);
  const Pr = ge.useRef(null);
  const Rr = ge.useRef(null);
  const _r = ge.useRef(null);
  const Dr = ge.useRef(null);
  const Br = ge.useRef(false);
  const Lr = g.length > 0 ? Math.min(ve, g.length - 1) : 0;
  const zr = g[Lr] || null;
  const Or = f[Se] || f[0] || {
    name: "你",
    avatar: ""
  };
  const Fr = function ({
    userId: e,
    enabled: t
  }) {
    const [n, a] = ge.useState([]);
    const [r, i] = ge.useState(null);
    const [o, l] = ge.useState(null);
    const [c, d] = ge.useState(false);
    const u = ge.useRef(e);
    ge.useEffect(() => {
      u.current = e;
    }, [e]);
    const m = ge.useCallback(async () => {
      if (!t || !e) {
        a([]);
        return;
      }
      const n = e;
      d(true);
      try {
        const e = await s.getByUser(n);
        if (u.current !== n) {
          return;
        }
        a(Array.isArray(e) ? e : []);
      } catch (r) {
        console.warn("[MultiScene] reloadSessions 失敗:", r);
        if (u.current === n) {
          a([]);
        }
      } finally {
        if (u.current === n) {
          d(false);
        }
      }
    }, [t, e]);
    ge.useEffect(() => {
      if (!t) {
        a([]);
        i(null);
        l(null);
        return;
      }
      m();
    }, [t, e, m]);
    const p = ge.useRef(false);
    ge.useEffect(() => {
      p.current = false;
    }, [e]);
    const h = ge.useCallback(async (e, t = {}) => {
      if (!e) {
        i(null);
        l(null);
        if (!t.keepMemory) {
          try {
            const e = u.current;
            if (e) {
              localStorage.removeItem($n(e));
            }
          } catch {}
        }
        return;
      }
      const n = u.current;
      try {
        const t = await s.getById(e);
        if (u.current !== n) {
          return;
        }
        if (!t || t.userId !== n) {
          i(null);
          l(null);
          return;
        }
        i(e);
        l(t);
        try {
          localStorage.setItem($n(n), String(e));
        } catch {}
        s.update(e, {
          lastActiveAt: Date.now()
        }).then(() => m()).catch(() => {});
      } catch (a) {
        console.warn("[MultiScene] switchToSession 失敗:", a);
      }
    }, [m]);
    ge.useEffect(() => {
      if (!t) {
        p.current = false;
        return;
      }
      if (p.current) {
        return;
      }
      if (r) {
        return;
      }
      if (!e) {
        return;
      }
      if (!Array.isArray(n) || n.length === 0) {
        return;
      }
      let s = null;
      try {
        const t = localStorage.getItem($n(e));
        if (t) {
          s = Number(t) || t;
        }
      } catch {}
      if (s == null) {
        p.current = true;
        return;
      }
      const a = n.find(e => String(e._id) === String(s));
      if (a) {
        p.current = true;
        h(a._id);
      } else {
        try {
          localStorage.removeItem($n(e));
        } catch {}
        p.current = true;
      }
    }, [t, e, n, r, h]);
    const g = ge.useCallback(async e => {
      const t = u.current;
      if (!t) {
        return null;
      }
      const n = Array.isArray(e == null ? undefined : e.participants) ? e.participants.map(e => String(e)) : [];
      if (n.length < 2) {
        console.warn("[MultiScene] createSession 需要至少 2 個 participant");
        return null;
      }
      const a = Date.now();
      const r = {
        userId: t,
        name: (e == null ? undefined : e.name) || new Date(a).toLocaleDateString("zh-TW"),
        participants: n,
        spectate: (e == null ? undefined : e.spectate) === true,
        scenarioOutline: (e == null ? undefined : e.scenarioOutline) || "",
        stylePreset: (e == null ? undefined : e.stylePreset) || "",
        minLength: (e == null ? undefined : e.minLength) || 100,
        maxLength: (e == null ? undefined : e.maxLength) || 500,
        contextLength: (e == null ? undefined : e.contextLength) || 20,
        realTimeAware: (e == null ? undefined : e.realTimeAware) !== false,
        createdAt: a,
        lastActiveAt: a
      };
      try {
        const e = await s.add(r);
        if (u.current !== t) {
          return null;
        } else {
          await m();
          return e;
        }
      } catch (i) {
        console.error("[MultiScene] createSession 失敗:", i);
        return null;
      }
    }, [m]);
    const x = ge.useCallback(async (e, t) => {
      const n = u.current;
      try {
        await s.update(e, t);
        if (u.current !== n) {
          return;
        }
        if (e === r) {
          const t = await s.getById(e);
          if (u.current === n) {
            l(t);
          }
        }
        await m();
      } catch (a) {
        console.warn("[MultiScene] updateSession 失敗:", a);
      }
    }, [r, m]);
    const f = ge.useCallback(async e => {
      const t = u.current;
      try {
        await s.delete(e);
        if (u.current !== t) {
          return;
        }
        if (e === r) {
          i(null);
          l(null);
        }
        try {
          const n = localStorage.getItem($n(t));
          if (n && String(n) === String(e)) {
            localStorage.removeItem($n(t));
          }
        } catch {}
        await m();
      } catch (n) {
        console.error("[MultiScene] deleteSession 失敗:", n);
      }
    }, [r, m]);
    const y = ge.useCallback(async ({
      charId: e,
      charName: t,
      reason: n
    } = {}) => {
      if (!r || !o) {
        return false;
      }
      const a = String(e);
      if (!a) {
        return false;
      }
      const i = u.current;
      const c = Array.isArray(o.participants) ? o.participants.map(String) : [];
      if (c.includes(a)) {
        return false;
      }
      const d = [...c, a];
      try {
        await s.update(r, {
          participants: d,
          lastActiveAt: Date.now()
        });
        if (u.current !== i) {
          return false;
        }
        const e = Array.isArray(o.castHistory) ? [...o.castHistory] : [];
        e.push({
          at: Date.now(),
          action: "add",
          charIds: [a],
          charNames: t ? [t] : [],
          reason: n || ""
        });
        await s.update(r, {
          castHistory: e
        });
        await V.add(i, r, {
          role: "system",
          type: An,
          action: "add",
          charIds: [a],
          charNames: t ? [t] : [],
          reason: n || "",
          content: "",
          timestamp: Date.now()
        });
        const c = await s.getById(r);
        if (u.current === i) {
          l(c);
        }
        await m();
        return true;
      } catch (p) {
        console.error("[MultiScene] addParticipant 失敗:", p);
        return false;
      }
    }, [r, o, m]);
    const v = ge.useCallback(async ({
      charId: e,
      charName: t,
      reason: n
    } = {}) => {
      if (!r || !o) {
        return false;
      }
      const a = String(e);
      if (!a) {
        return false;
      }
      const i = u.current;
      const c = Array.isArray(o.participants) ? o.participants.map(String) : [];
      if (!c.includes(a)) {
        return false;
      }
      const d = c.filter(e => e !== a);
      if (d.length < 2) {
        return false;
      }
      try {
        await s.update(r, {
          participants: d,
          lastActiveAt: Date.now()
        });
        if (u.current !== i) {
          return false;
        }
        const e = Array.isArray(o.castHistory) ? [...o.castHistory] : [];
        e.push({
          at: Date.now(),
          action: "remove",
          charIds: [a],
          charNames: t ? [t] : [],
          reason: n || ""
        });
        await s.update(r, {
          castHistory: e
        });
        await V.add(i, r, {
          role: "system",
          type: An,
          action: "remove",
          charIds: [a],
          charNames: t ? [t] : [],
          reason: n || "",
          content: "",
          timestamp: Date.now()
        });
        const c = await s.getById(r);
        if (u.current === i) {
          l(c);
        }
        await m();
        return true;
      } catch (p) {
        console.error("[MultiScene] removeParticipant 失敗:", p);
        return false;
      }
    }, [r, o, m]);
    return {
      sessions: n,
      activeSessionId: r,
      activeSession: o,
      isLoading: c,
      reloadSessions: m,
      switchToSession: h,
      createSession: g,
      updateSession: x,
      deleteSession: f,
      addParticipant: y,
      removeParticipant: v,
      setActiveSessionId: i,
      setActiveSession: l
    };
  }({
    userId: y,
    enabled: la === "multi"
  });
  ge.useEffect(() => {
    ua(new Set());
  }, [y]);
  const Ur = ge.useMemo(() => {
    const e = new Map();
    for (const t of g) {
      e.set(String(t.id), t);
    }
    return e;
  }, [g]);
  const Wr = ge.useMemo(() => la === "multi" && Fr.activeSession ? (Fr.activeSession.participants || []).map(e => Ur.get(String(e))).filter(Boolean) : [], [la, Fr.activeSession, Ur]);
  const [Hr, Vr] = ge.useState([]);
  ge.useEffect(() => {
    if (la !== "multi" || !Fr.activeSessionId) {
      Vr([]);
      return;
    }
    const e = Fr.activeSessionId;
    const t = y;
    let n = false;
    (async () => {
      try {
        const s = await V.getBySession(e);
        if (n) {
          return;
        }
        if (y !== t) {
          return;
        }
        if (Fr.activeSessionId !== e) {
          return;
        }
        Vr(s.map(ps));
      } catch (s) {
        console.warn("[MultiScene] 載入 stories 失敗:", s);
        if (!n) {
          Vr([]);
        }
      }
    })();
    return () => {
      n = true;
    };
  }, [la, Fr.activeSessionId, y]);
  const [Gr, Yr] = ge.useState({});
  ge.useEffect(() => {
    if (la !== "multi" || !ia || Fr.sessions.length === 0) {
      Yr({});
      return;
    }
    let e = false;
    const t = y;
    (async () => {
      const n = {};
      for (const e of Fr.sessions) {
        try {
          const {
            MultiSceneStoryService: t
          } = await o(async () => {
            const {
              MultiSceneStoryService: e
            } = await import("./native-pet-CTNtZgMA.js").then(e => e.cy);
            return {
              MultiSceneStoryService: e
            };
          }, __vite__mapDeps([2, 3, 4, 5, 6, 7]));
          n[e._id] = await t.countBySession(e._id);
        } catch {
          n[e._id] = 0;
        }
      }
      if (!e && y === t) {
        Yr(n);
      }
    })();
    return () => {
      e = true;
    };
  }, [la, ia, Fr.sessions, y]);
  const Kr = Un({
    enabled: Fn,
    userId: y,
    charId: zr ? String(zr.id) : null,
    storyEntries: je,
    setStoryEntries: Ce,
    isGenerating: Ee,
    scrollContainerRef: hr
  });
  const Xr = ge.useRef(Kr);
  ge.useEffect(() => {
    Xr.current = Kr;
  });
  const Jr = () => {
    var e;
    var t;
    return ((t = (e = Xr.current) == null ? undefined : e.confirmAllSlots) == null ? undefined : t.call(e)) ?? null;
  };
  const qr = ge.useMemo(() => je.filter(e => !e.hidden && Kr.isEntryVisible(e)), [je, Kr.isEntryVisible, Kr.slots]);
  const Zr = Math.max(0, qr.length - ke);
  const Qr = ge.useMemo(() => Zr <= 0 ? qr : qr.slice(-ke), [Zr, qr, ke]);
  const ei = ge.useMemo(() => {
    const e = new Map();
    let t = 0;
    for (const n of je) {
      if (!n.hidden) {
        if (Kr.isEntryVisible(n)) {
          e.set(n.id, t);
          t++;
        }
      }
    }
    return e;
  }, [je, Kr.isEntryVisible, Kr.slots]);
  const ti = ge.useMemo(() => Array.from({
    length: 12
  }, (e, t) => ({
    left: (t * 9.2 + 3) % 100 + "%",
    animationDuration: 15 + t * 1.7 % 12 + "s",
    animationDelay: `-${t * 2.3 % 12}s`,
    opacity: 0.3 + t * 0.05 % 0.5,
    transform: `scale(${0.65 + t * 0.08 % 0.65})`,
    spinDuration: 7 + t * 1.3 % 9 + "s"
  })), []);
  const ni = ge.useMemo(() => Array.from({
    length: 35
  }, (e, t) => ({
    left: t * 2.86 % 100 + "%",
    animationDuration: 5 + t * 0.7 % 4 + "s",
    animationDelay: `-${t * 0.9 % 5}s`,
    opacity: 0.25 + t * 0.018 % 0.55,
    size: 3.5 + t * 0.5 % 3.5 + "px",
    blur: `blur(${t * 0.3 % 1.5}px)`
  })), []);
  const si = ge.useMemo(() => {
    const e = (zr == null ? undefined : zr.name) || "Character";
    const t = C("tmCssPreviewCharText", "角色的故事文字會顯示在這裡，展示字體顏色和背景效果...");
    const n = C("tmCssPreviewCharText2", "「我看著窗外的風景，思緒飄向了遠方。」");
    const s = C("tmCssPreviewUserText", "你的文字會像這樣呈現。");
    const a = C("tmCssPreviewInput", "輸入你的故事...");
    return `<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>\n* { margin:0; padding:0; box-sizing:border-box; }\nbody { font-family: Georgia, 'Noto Serif TC', serif; overflow-y:auto; overflow-x:hidden; -webkit-overflow-scrolling:touch; }\n#this-moment-screen.tm-no-animations,\n#this-moment-screen.tm-no-animations *,\n#this-moment-screen.tm-no-animations *::before,\n#this-moment-screen.tm-no-animations *::after { animation:none !important; transition:none !important; }\n#this-moment-screen { display:flex; flex-direction:column; min-height:100vh; background:#fff; color:#333; position:relative; }\n.tm-bg-container { position:absolute; inset:0; pointer-events:none; z-index:0; }\n.tm-bg-overlay { position:absolute; inset:0; pointer-events:none; z-index:0; background:rgba(255,255,255,0.92); }\n/* padding-top 接上全局 --nuo-safe-top（原生注入的狀態欄/劉海高度），與私聊 ChatHeader 等界面對齊；\n   之前線下劇場頁漏接 → 顶栏頂到狀態欄/被挖孔遮住。env() 兜底 + 10px 地板值同其他頂欄。 */\n.tm-header { display:flex; align-items:center; gap:8px; padding:calc(10px + max(var(--nuo-safe-top, env(safe-area-inset-top, 0px)), 0px)) 14px 10px; background:rgba(255,255,255,0.85); border-bottom:1px solid rgba(0,0,0,0.06); flex-shrink:0; position:relative; z-index:2; backdrop-filter:blur(24px); -webkit-backdrop-filter:blur(24px); font-family:-apple-system,BlinkMacSystemFont,sans-serif; }\n.tm-header-center { flex:1; display:flex; align-items:center; justify-content:center; gap:8px; }\n.tm-top-drop-btn { font-size:14px; font-weight:600; color:inherit; opacity:0.7; background:none; border:none; display:flex; align-items:center; gap:4px; }\n.tm-story { flex:1; padding:20px 14px; display:flex; flex-direction:column; gap:28px; position:relative; z-index:2; }\n.tm-para { padding:22px 20px; position:relative; }\n.tm-para-char { background:#fff; border:1px solid rgba(0,0,0,0.06); border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.04); margin-right:16px; }\n.tm-para-user { background:rgba(245,245,245,0.9); border:1px solid rgba(0,0,0,0.06); border-radius:12px; margin-left:24px; }\n.tc-header { display:flex; flex-direction:column; gap:6px; margin-bottom:12px; }\n.tc-header-main { display:flex; gap:14px; align-items:flex-start; }\n.tc-avatar-area { display:flex; flex-direction:column; align-items:center; gap:5px; flex-shrink:0; }\n.tc-avatar-frame { width:64px; height:64px; border-radius:10px; overflow:hidden; border:2px solid rgba(0,0,0,0.08); background:linear-gradient(135deg,#667eea,#764ba2); }\n.tc-avatar-badge { font-size:11px; color:#666; text-align:center; max-width:70px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }\n.tc-meta-area { flex:1; display:flex; flex-direction:column; gap:4px; min-width:0; }\n.tc-meta-title { font-size:16px; font-weight:600; color:#333; }\n.tc-meta-subtitle { font-size:12px; color:#999; }\n.tc-meta-stats { display:flex; flex-wrap:wrap; gap:6px; margin-top:4px; }\n.tc-stat { font-size:11px; color:#888; background:rgba(0,0,0,0.04); padding:2px 8px; border-radius:4px; }\n.tm-body { padding:0; }\n.tm-body-char, .tm-body-user { color:#333; font-size:15px; line-height:1.8; }\n.tm-body p { font-size:15px; line-height:1.85; margin:0; white-space:pre-wrap; word-break:break-word; }\n.tm-para-block { margin-bottom:14px; }\n.tm-para-block:last-child { margin-bottom:0; }\n/* padding-bottom 接上 --nuo-safe-bottom（手勢條/Home Indicator 安全區），避免輸入欄被系統手勢條壓住；\n   鍵盤彈出時 useKeyboardViewportAdjust 縮容器高度，此底部 padding 不影響鍵盤上方定位。 */\n.tm-compose { padding:12px 14px calc(12px + var(--nuo-safe-bottom, env(safe-area-inset-bottom, 0px))); flex-shrink:0; position:relative; z-index:2; background:rgba(255,255,255,0.9); color:inherit; font-family:-apple-system,BlinkMacSystemFont,sans-serif; }\n.tm-compose-row { display:flex; align-items:flex-end; gap:10px; margin:0 4px; }\n.tm-input { flex:1; border-radius:16px; font-size:14px; line-height:1.6; padding:12px 16px; outline:none; resize:none; min-height:46px; font-family:inherit; background:#F4F5F7; border:1.5px solid transparent; color:#2c2c2e; }\n.tm-send-btn { width:46px; height:46px; border-radius:50%; display:flex; align-items:center; justify-content:center; background:rgba(128,128,128,0.1); border:none; color:inherit; opacity:0.5; flex-shrink:0; }\n.tc-deco-top,.tc-watermark,.tc-header-deco-top,.tc-header-deco-bottom,.tc-header-deco,.tc-avatar-overlay { display:none; }\n.tm-quote-block { border-left:3px solid #ddd; padding:6px 12px; background:rgba(0,0,0,0.02); margin:8px 0; }\n${Ga || ""}\n</style></head><body>\n<div id="this-moment-screen" class="theme-classic${Ls ? " tm-no-animations" : ""}">\n<div class="tm-bg-container"><div class="tm-bg-overlay"></div><div class="tc-deco tc-deco-top"></div><div class="tc-deco tc-deco-bottom"></div><div class="tc-deco tc-deco-left"></div><div class="tc-deco tc-deco-right"></div><div class="tc-deco tc-deco-center"></div><div class="tc-watermark"></div></div>\n${Ls ? "<div style=\"position:sticky;top:0;z-index:99;padding:6px 12px;background:#fff3cd;color:#856404;font-size:11px;text-align:center;font-family:-apple-system,sans-serif;border-bottom:1px solid #ffc107;\">⚠ 動效已關閉 — 動畫不會播放</div>" : ""}\n<div class="tm-header">\n<div style="padding:4px;opacity:0.6"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg></div>\n<div class="tm-header-center"><div class="tm-top-drop-btn">${e} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></div></div>\n<div style="padding:4px;opacity:0.6"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></div>\n</div>\n<div class="tm-story">\n<div class="tm-para tm-para-char">\n<div class="tc-header"><div class="tc-header-main">\n<div class="tc-avatar-area"><div class="tc-avatar-frame"></div><div class="tc-avatar-badge">${e}</div></div>\n<div class="tc-meta-area"><div class="tc-meta-title">${e}</div><div class="tc-meta-subtitle"></div><div class="tc-meta-stats"><span class="tc-stat">♡ 92</span><span class="tc-stat">⚡ 3</span></div></div>\n</div></div>\n<div class="tm-body tm-body-char"><div class="tm-para-block"><p>${t}</p></div><div class="tm-para-block"><p>${n}</p></div></div>\n</div>\n<div class="tm-para tm-para-user">\n<div class="tm-body tm-body-user"><div class="tm-para-block"><p>${s}</p></div></div>\n</div>\n<div class="tm-para tm-para-char">\n<div class="tm-body tm-body-char"><div class="tm-para-block"><p>${n}</p></div></div>\n</div>\n</div>\n<div class="tm-compose"><div class="tm-compose-row"><textarea class="tm-input" readonly placeholder="${a}"></textarea><div class="tm-send-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m22 2-7 20-4-9-9-4Z"/></svg></div></div></div>\n</div>\n</body></html>`;
  }, [zr == null ? undefined : zr.name, Ga, Ls]);
  const ai = Dn({
    userId: y,
    charId: zr ? String(zr.id) : null,
    enabled: er,
    autoPlay: nr,
    voiceMode: Vn(ar)
  });
  const ri = Ut({
    userId: y,
    participants: Wr,
    enabled: er,
    autoPlay: nr,
    voiceMode: Vn(ar)
  });
  const ii = function () {
    const [e, t] = ge.useState([]);
    const [n, s] = ge.useState(() => localStorage.getItem("pomo_noise") || "none");
    const [a, r] = ge.useState(() => localStorage.getItem("tm_noise_on") === "true");
    const i = ge.useRef(null);
    const o = ge.useRef(false);
    const l = ge.useRef(false);
    ge.useEffect(() => {
      (async () => {
        try {
          const e = localStorage.getItem("pomo_customNoises");
          if (e) {
            const t = JSON.parse(e);
            if (t.length > 0) {
              await ee.bulkPutLegacy(t);
            }
            localStorage.removeItem("pomo_customNoises");
          }
          const n = await ee.getAll();
          t(n);
        } catch (e) {
          console.warn("[TM Noise] 載入自訂白噪音失敗:", e);
        }
        l.current = true;
      })();
    }, []);
    ge.useEffect(() => {
      if (l.current) {
        (async () => {
          try {
            await ee.replaceAll(e);
          } catch (t) {
            console.warn("[TM Noise] 自訂白噪音存儲失敗:", t);
          }
        })();
      }
    }, [e]);
    ge.useEffect(() => {
      Ln("pomo_noise", n);
    }, [n]);
    ge.useEffect(() => {
      Ln("tm_noise_on", a);
    }, [a]);
    ge.useEffect(() => {
      if (!i.current) {
        i.current = new Audio();
        i.current.loop = true;
      }
      const t = i.current;
      const s = [...Bn, ...e].find(e => e.id === n);
      if (!(s == null ? undefined : s.src) || !a) {
        if (o.current) {
          X();
          o.current = false;
        }
        t.pause();
        if (!(s == null ? undefined : s.src)) {
          t.removeAttribute("src");
        }
        return;
      }
      if (t.getAttribute("src") !== s.src) {
        t.src = s.src;
      }
      if (!o.current) {
        Z();
        o.current = true;
      }
      t.play().catch(() => {});
    }, [n, a, e]);
    ge.useEffect(() => () => {
      if (i.current) {
        i.current.pause();
        i.current.removeAttribute("src");
      }
      if (o.current) {
        X();
        o.current = false;
      }
    }, []);
    const c = ge.useCallback(() => {
      r(e => !e);
    }, []);
    const d = ge.useCallback((e, n) => {
      const s = "custom_" + Date.now();
      t(t => [...t, {
        id: s,
        label: e,
        src: n
      }]);
      return s;
    }, []);
    const u = ge.useCallback(e => {
      s(t => t === e ? "none" : t);
      t(t => t.filter(t => t.id !== e));
    }, []);
    return {
      noiseOn: a,
      setNoiseOn: r,
      toggleNoise: c,
      selectedNoise: n,
      setSelectedNoise: s,
      customNoises: e,
      addCustomNoise: d,
      removeCustomNoise: u
    };
  }();
  const oi = function ({
    isActive: e,
    activeSessionId: t,
    realTimeAware: n
  }) {
    const [s, a] = ge.useState(null);
    const r = n !== false;
    ge.useEffect(() => {
      if (!r && e && t) {
        (async () => {
          try {
            const e = await i.get(`tm_story_time_${t}`);
            if (e && typeof e.hour == "number") {
              a(e);
            } else {
              a(null);
            }
          } catch (e) {
            a(null);
          }
        })();
      } else {
        a(null);
      }
    }, [t, e, r]);
    const o = ge.useCallback(e => {
      if (r) {
        return;
      }
      const n = e.split(":");
      const o = parseInt(n[0], 10);
      const l = parseInt(n[1] || "0", 10);
      if (isNaN(o) || isNaN(l) || o < 0 || o > 23 || l < 0 || l > 59) {
        console.warn("[TM StoryTime] Invalid time:", e);
        return;
      }
      if (s && o * 60 + l <= s.hour * 60 + s.minute) {
        console.warn("[TM StoryTime] Backward shift rejected:", e, "← current:", On(s.hour, s.minute));
        return;
      }
      const c = {
        hour: o,
        minute: l
      };
      a(c);
      if (t) {
        i.set(`tm_story_time_${t}`, c).catch(() => {});
      }
      console.log("[TM StoryTime] Clock set to", On(o, l));
    }, [r, s, t]);
    const l = ge.useCallback(() => {
      a(null);
      if (t) {
        i.set(`tm_story_time_${t}`, null).catch(() => {});
      }
    }, [t]);
    if (r || !s) {
      return {
        hasStoryTime: false,
        storyTimeStr: null,
        storyPeriod: null,
        handleTimeShift: o,
        resetStoryTime: l
      };
    }
    const {
      period: c,
      label: d
    } = function (e) {
      for (let t = zn.length - 1; t >= 0; t--) {
        if (e >= zn[t][0]) {
          return {
            period: zn[t][1],
            label: zn[t][2]
          };
        }
      }
      return {
        period: "late_night",
        label: "late night"
      };
    }(s.hour);
    return {
      hasStoryTime: true,
      storyTimeStr: On(s.hour, s.minute),
      storyPeriod: d,
      storyPeriodKey: c,
      handleTimeShift: o,
      resetStoryTime: l
    };
  }({
    isActive: N,
    activeSessionId: na,
    realTimeAware: Rs
  });
  const [li, ci] = ge.useState(null);
  const [di, ui] = ge.useState(null);
  const [mi, pi] = ge.useState(null);
  const [hi, gi] = ge.useState(null);
  ge.useEffect(() => {
    if (N) {
      S().then(gi).catch(() => {});
    }
  }, [N]);
  const [xi, fi] = ge.useState({
    enabled: false,
    url: "",
    key: "",
    model: "",
    apiType: "openai"
  });
  const [yi, vi] = ge.useState([]);
  const [bi, Si] = ge.useState(false);
  const wi = ge.useRef(false);
  const ji = ge.useCallback(async () => {
    var e;
    var t;
    const {
      url: n,
      key: s
    } = xi;
    if (n && s) {
      Si(true);
      try {
        const a = ae(n) ? re(n, s, {
          "anthropic-beta": "models-2025-02-19"
        }) : re(n, s);
        const r = await ie(oe(n), {
          method: "GET",
          headers: a
        });
        if (!r.ok) {
          throw new Error(`HTTP ${r.status}`);
        }
        const i = await r.json();
        const o = ((e = i.data) == null ? undefined : e.map(e => e.id)) || ((t = i.models) == null ? undefined : t.map(e => e.id || e.name)) || [];
        vi(o);
        if (o.length > 0) {
          E(`${C("msgApiFetchSuccess", "拉取成功")} (${o.length})\n\n${o.slice(0, 5).join("\n")}${o.length > 5 ? "\n..." : ""}`);
        } else {
          E(C("msgApiNoModels", "未取得任何模型"));
        }
      } catch (a) {
        console.error("[TM ImgPromptApi] fetch models failed:", a);
        E(`${C("msgApiFetchFailed", "拉取失敗")}: ${a.message}`);
      } finally {
        Si(false);
      }
    } else {
      E(C("msgApiEnterInfo", "請先填寫 API URL 與 Key"));
    }
  }, [xi, C]);
  ge.useEffect(() => {
    if (N) {
      i.get("tm_img_prompt_api").then(e => {
        if (e && typeof e == "object") {
          fi(t => ({
            ...t,
            ...e
          }));
        }
        wi.current = true;
      }).catch(() => {
        wi.current = true;
      });
    }
  }, [N]);
  ge.useEffect(() => {
    if (!wi.current) {
      return;
    }
    const e = setTimeout(() => {
      i.set("tm_img_prompt_api", xi).catch(() => {});
    }, 500);
    return () => clearTimeout(e);
  }, [xi]);
  const Ci = ge.useMemo(() => !!Aa && !!hi && (!!hi.novelAiEnabled && !!hi.novelAiKey || !!hi.pollinationsEnabled || !!hi.googleImagenEnabled && !!hi.googleImagenKey || !!hi.geminiImageEnabled && !!hi.geminiImageKey || !!hi.grokEnabled && !!hi.grokKey || !!hi.gptImageEnabled && !!hi.gptImageKey), [Aa, hi]);
  const ki = ge.useRef(null);
  const Ni = function ({
    userId: e,
    session: t,
    participants: n,
    user: r,
    storyEntries: i,
    setStoryEntries: o,
    onAfterPersist: l,
    cgEnabled: c,
    cgApiSettings: d,
    cgImagePreset: u,
    allCharacters: m,
    autoSummaryEnabled: p,
    autoSummaryFrequency: h,
    autoSummaryLanguage: g,
    autoSummaryInstructions: x,
    autoSummaryTimeAware: f,
    thinkingPanelEnabled: y,
    extraPromptSettings: v,
    globalLanguage: b,
    addParticipant: j,
    removeParticipant: C,
    filterHistoryForAI: k
  }) {
    const [N, I] = ge.useState(false);
    const T = ge.useRef(null);
    const E = ge.useRef(false);
    const A = ge.useRef(e);
    const $ = ge.useRef(t);
    const P = ge.useRef(i);
    const R = ge.useRef({
      cgEnabled: c,
      cgApiSettings: d,
      cgImagePreset: u,
      allCharacters: m
    });
    const B = ge.useRef({
      autoSummaryEnabled: p,
      autoSummaryFrequency: h,
      autoSummaryLanguage: g,
      autoSummaryInstructions: x,
      autoSummaryTimeAware: f
    });
    const L = ge.useRef(v || {});
    const z = ge.useRef(b);
    A.current = e;
    $.current = t;
    P.current = i;
    R.current = {
      cgEnabled: c,
      cgApiSettings: d,
      cgImagePreset: u,
      allCharacters: m
    };
    B.current = {
      autoSummaryEnabled: p,
      autoSummaryFrequency: h,
      autoSummaryLanguage: g,
      autoSummaryInstructions: x,
      autoSummaryTimeAware: f
    };
    L.current = v || {};
    z.current = b;
    const O = ge.useRef(k);
    O.current = k;
    const F = ge.useRef({
      addParticipant: j,
      removeParticipant: C,
      allCharacters: m
    });
    F.current = {
      addParticipant: j,
      removeParticipant: C,
      allCharacters: m
    };
    const U = ge.useCallback(async (e, t) => {
      const n = (t == null ? undefined : t.autoCastMode) || "off";
      if (n === "off" || !e) {
        return {
          cleanText: Xt(e, {
            joinPool: [],
            leavePool: []
          }).cleanText,
          entryExtras: {}
        };
      }
      const {
        allCharacters: s,
        addParticipant: a,
        removeParticipant: r
      } = F.current;
      const i = function (e, t) {
        if (!Array.isArray(t) || t.length === 0) {
          return {
            joinPool: [],
            leavePool: []
          };
        }
        const n = new Set((e || []).map(e => String(e.id)));
        const s = new Set((e || []).map(e => e == null ? undefined : e.group).filter(Boolean));
        const a = [];
        for (const r of t) {
          const e = String(r.id);
          if (n.has(e)) {
            continue;
          }
          const t = r.type === "npc" && Array.isArray(r.boundTo) && r.boundTo.some(e => n.has(String(e)));
          const i = r.type !== "npc" && r.group && s.has(r.group);
          if (t || i) {
            a.push({
              id: e,
              name: r.name
            });
          }
        }
        return {
          joinPool: a,
          leavePool: (e || []).length >= 3 ? (e || []).map(e => ({
            id: String(e.id),
            name: e.name
          })) : []
        };
      }(((t == null ? undefined : t.participants) || []).map(e => (s || []).find(t => String(t.id) === String(e))).filter(Boolean), s || []);
      const o = Xt(e, i);
      if (!o.join && !o.leave) {
        return {
          cleanText: o.cleanText,
          entryExtras: {}
        };
      }
      if (n === "auto") {
        if (o.join && typeof a == "function") {
          a({
            charId: o.join.charId,
            charName: o.join.charName,
            reason: o.join.reason || ""
          }).catch(e => console.warn("[AutoCast] addParticipant failed:", e));
        }
        if (o.leave && typeof r == "function") {
          r({
            charId: o.leave.charId,
            charName: o.leave.charName,
            reason: o.leave.reason || ""
          }).catch(e => console.warn("[AutoCast] removeParticipant failed:", e));
        }
        return {
          cleanText: o.cleanText,
          entryExtras: {}
        };
      }
      const l = {
        ...(o.join ? {
          join: o.join
        } : {}),
        ...(o.leave ? {
          leave: o.leave
        } : {}),
        status: "pending"
      };
      return {
        cleanText: o.cleanText,
        entryExtras: {
          pendingCastSuggestion: l
        }
      };
    }, []);
    const W = ge.useCallback(async e => {
      const t = B.current;
      if (!t.autoSummaryEnabled) {
        return;
      }
      const s = Number(t.autoSummaryFrequency) || 0;
      if (s <= 0) {
        return;
      }
      const a = A.current;
      if (a && e && Array.isArray(n) && n.length !== 0) {
        try {
          if (await gn({
            userId: a,
            session: e,
            participants: n,
            user: r,
            storyEntries: P.current,
            frequency: s,
            language: t.autoSummaryLanguage || "zh_cn",
            customSummaryInstructions: t.autoSummaryInstructions || "",
            timeAwareEnabled: t.autoSummaryTimeAware !== false
          })) {
            console.log("[MultiSceneSend] ✓ auto-summary 已觸發並寫入 per-NPC memory");
          }
        } catch (i) {
          console.warn("[MultiSceneSend] auto-summary 失敗（不影響主流程）:", i);
        }
      }
    }, [n, r]);
    const H = ge.useCallback(async (e, t) => {
      if (!e || !t) {
        return;
      }
      if (t.realTimeAware !== false) {
        return;
      }
      const n = on(e);
      if (!(n == null ? undefined : n.time)) {
        return;
      }
      const a = A.current;
      try {
        await s.update(t._id, {
          storyTimeStr: n.time
        });
        if (A.current !== a) {
          return;
        }
        console.log(`[MultiSceneSend] ⏰ time-shift to ${n.time}`);
      } catch (r) {
        console.warn("[MultiSceneSend] time-shift 失敗:", r);
      }
    }, []);
    const K = ge.useCallback(async (e, t, s) => {
      var i;
      var l;
      var c;
      const d = R.current;
      if (!d.cgEnabled || !d.cgApiSettings) {
        return;
      }
      if (!e) {
        return;
      }
      const u = dn(e);
      if (!(u == null ? undefined : u.description)) {
        return;
      }
      const m = A.current;
      const p = u.description;
      const h = n || [];
      const g = h[0];
      if (g) {
        try {
          let e = g.imagePrompt || "";
          if (!e) {
            try {
              const t = await a.get(m, g.id);
              e = (t == null ? undefined : t.charImagePrompt) || "";
            } catch {}
          }
          e ||= M(g.description) || "";
          let n = [];
          try {
            const e = await a.getByUser(m).catch(() => []);
            const t = new Map((e || []).map(e => [String(e.characterId), e]));
            n = h.map(e => {
              var n;
              return {
                id: e.id,
                name: e.name,
                gender: e.gender,
                imagePrompt: e.imagePrompt || ((n = t.get(String(e.id))) == null ? undefined : n.charImagePrompt) || M(e.description) || ""
              };
            }).filter(e => e.name);
          } catch {}
          const u = (s == null ? undefined : s.scenarioOutline) || "";
          let x = p;
          const f = /\[SUBJECT:[A-Z_]+\|cast=/i.test(p);
          const y = /\[SUBJECT:[A-Z_]+/i.test(p);
          if (!f && h.length >= 2) {
            const e = p.toLowerCase();
            const t = h.map(t => ({
              name: t.name,
              idx: t.name ? e.indexOf(t.name.toLowerCase()) : -1
            })).filter(e => e.idx >= 0).sort((e, t) => e.idx - t.idx).map(e => e.name);
            if (t.length >= 2) {
              const e = (s == null ? undefined : s.spectate) === true;
              const n = `${t.join(",")}${e ? "" : `,user(${(r == null ? undefined : r.name) || "user"})`}`;
              x = y ? p.replace(/\[SUBJECT:([A-Z_]+)\]/i, `[SUBJECT:$1|cast=${n}]`) : `[SUBJECT:SCENE_WITH_PEOPLE|cast=${n}] ${p}`;
              console.log(`[MultiScene CG] auto-injected cast=${n}`);
            }
          }
          const v = _({
            rawImgDesc: x,
            char: g,
            charAppearance: e,
            user: r,
            location: u,
            extraChars: n,
            sceneType: "tm",
            apiSettings: d.cgApiSettings,
            imagePreset: d.cgImagePreset
          });
          console.log("[MultiScene CG] 🎨 generate", {
            description: x.substring(0, 120),
            subject: v.subject,
            style: v.style,
            charCaptions: ((l = (i = v.structured) == null ? undefined : i.charCaptions) == null ? undefined : l.length) || 0
          });
          const b = await D(v.prompt, "tm", d.cgApiSettings, {
            structured: v.structured,
            imagePreset: d.cgImagePreset,
            charSeed: g == null ? undefined : g.imageSeed,
            refImageId: g == null ? undefined : g.refImageRef
          });
          if (!b) {
            return;
          }
          if (A.current !== m || ((c = $.current) == null ? undefined : c._id) !== (s == null ? undefined : s._id)) {
            console.warn("[MultiScene CG] 圖完成時 user/session 已切換，丟棄");
            return;
          }
          const S = {
            url: b,
            prompt: x,
            generatedAt: Date.now()
          };
          await V.updateEntry(t, {
            illustration: S
          });
          o(e => e.map(e => e.id === t ? {
            ...e,
            illustration: S
          } : e));
        } catch (x) {
          console.error("[MultiScene CG] 生成失敗:", x);
        }
      }
    }, [n, r, o]);
    return {
      sendText: ge.useCallback(async (e, t = {}) => {
        var a;
        var i;
        var c;
        var d;
        var u;
        const p = A.current;
        const h = $.current;
        if (!p || !h) {
          console.warn("[MultiSceneSend] 無 userId 或 session");
          return;
        }
        if (E.current) {
          console.warn("[MultiSceneSend] 正在生成中，忽略新請求");
          return;
        }
        if (!Array.isArray(n) || n.length < 2) {
          console.warn("[MultiSceneSend] 至少需要 2 個 participant");
          return;
        }
        const g = h.spectate === true;
        const x = (e || "").trim();
        const f = (t == null ? undefined : t.allowEmpty) === true;
        if (!x && !g && !f) {
          return;
        }
        const v = h._id;
        E.current = true;
        I(true);
        const b = new AbortController();
        T.current = b;
        try {
          const e = n.map(e => String(e.id));
          const f = [...P.current];
          if (x) {
            const t = {
              role: "user",
              content: g ? `[DIRECTOR: ${x}]` : x,
              timestamp: Date.now(),
              participantsSnapshot: e,
              ...(g ? {
                isDirector: true
              } : {})
            };
            const n = await V.add(p, v, t);
            if (A.current !== p || ((a = $.current) == null ? undefined : a._id) !== v) {
              throw new Error("user-mid-send-context-changed");
            }
            f.push({
              id: n,
              ...t
            });
            o(f);
          }
          const j = {
            role: "narration",
            content: "",
            timestamp: Date.now() + 1,
            participantsSnapshot: e
          };
          const C = await V.add(p, v, j);
          if (A.current !== p || ((i = $.current) == null ? undefined : i._id) !== v) {
            throw new Error("placeholder-mid-send-context-changed");
          }
          const k = [...f, {
            id: C,
            ...j
          }];
          o(k);
          console.log(`[MultiSceneSend] ▶ 開始 build prompt — userId=${p} sessionId=${v} spectate=${g} participants=[${n.map(e => `${e.name}(${e.id})`).join(", ")}] historyEntries=${k.filter(e => e.id !== C).length}`);
          const N = O.current;
          const I = k.filter(e => e.id !== C && (typeof N != "function" || N(e)));
          const T = await fn({
            participants: n,
            user: r,
            userId: p,
            storyEntries: I,
            session: h,
            settings: L.current,
            globalLanguage: z.current,
            rerollFeedback: t.rerollFeedback || "",
            allCharacters: m
          });
          console.log(`[MultiSceneSend] ✓ messages 拼好 共 ${T.length} 條（system + history + 收尾 cue）`);
          try {
            console.groupCollapsed("[MultiSceneSend] 完整 messages payload — 點開查看");
            T.forEach((e, t) => {
              var n;
              console.log(`#${t} [${e.role}] (${((n = e.content) == null ? undefined : n.length) || 0}字)`, e.content);
            });
            console.groupEnd();
          } catch {}
          let E = S();
          try {
            E = await G(E, p, (c = n[0]) == null ? undefined : c.id);
          } catch {}
          console.log(`[MultiSceneSend] API 設定: model=${(E == null ? undefined : E.model) || (E == null ? undefined : E.modelName) || "?"} baseUrl=${(E == null ? undefined : E.baseUrl) || (E == null ? undefined : E.url) || "?"}`);
          let M = "";
          let R = null;
          let _ = "";
          const D = await w({
            messages: T,
            settings: E,
            preferStreaming: true,
            signal: b.signal,
            characterIds: Array.isArray((d = $.current) == null ? undefined : d.cast) ? $.current.cast.map(e => e == null ? undefined : e.id).filter(Boolean) : undefined,
            onStream: e => {
              var t;
              if (!b.signal.aborted) {
                if (A.current === p && ((t = $.current) == null ? undefined : t._id) === v) {
                  M += e;
                  R ||= requestAnimationFrame(() => {
                    R = null;
                    const e = sn(M);
                    o(t => t.map(t => t.id === C ? {
                      ...t,
                      content: e
                    } : t));
                  });
                }
              }
            },
            onComplete: (e, t) => {
              if (t == null ? undefined : t.reasoningContent) {
                _ = String(t.reasoningContent);
              }
            }
          }, {
            mcp: "context"
          });
          if (R) {
            cancelAnimationFrame(R);
            R = null;
          }
          if (!M && D) {
            M = D;
          }
          const B = sn(M);
          if (A.current !== p || ((u = $.current) == null ? undefined : u._id) !== v) {
            console.warn("[MultiSceneSend] 完成時 user/session 已切換，丟棄結果");
            return;
          }
          const F = await U(B, h);
          const X = F.cleanText;
          const J = y && !!_;
          const q = {
            content: X,
            ...F.entryExtras
          };
          if (J) {
            q.hasThinking = true;
          }
          await V.updateEntry(C, q);
          await s.update(v, {
            lastActiveAt: Date.now()
          });
          o(e => e.map(e => e.id === C ? {
            ...e,
            content: X,
            ...F.entryExtras,
            ...(J ? {
              hasThinking: true
            } : {})
          } : e));
          if (J) {
            Y.put(Y.multiKey(C), _, "tm").catch(e => console.warn("[MultiScene Thinking] save failed:", e));
          }
          if (typeof l == "function") {
            try {
              await l();
            } catch {}
          }
          K(M, C, h).catch(() => {});
          H(M, h).catch(() => {});
          W(h).catch(() => {});
        } catch (j) {
          if ((j == null ? undefined : j.name) === "AbortError" || b.signal.aborted) {
            console.log("[MultiSceneSend] 用戶終止生成");
          } else if (String((j == null ? undefined : j.message) || "").includes("mid-send-context-changed")) {
            console.warn("[MultiSceneSend] 發送中途用戶/session 切換，已中斷");
          } else {
            console.error("[MultiSceneSend] 發送失敗:", j);
          }
        } finally {
          E.current = false;
          I(false);
          T.current = null;
        }
      }, [n, r, o, l]),
      rerollLast: ge.useCallback(async (e = "") => {
        var t;
        var a;
        var i;
        var c;
        var d;
        const u = A.current;
        const m = $.current;
        if (!u || !m) {
          return;
        }
        if (E.current) {
          return;
        }
        if (!Array.isArray(n) || n.length < 2) {
          return;
        }
        const p = m._id;
        const h = P.current;
        let g = -1;
        for (let n = h.length - 1; n >= 0; n--) {
          if (h[n].role === "narration") {
            g = n;
            break;
          }
        }
        if (g === -1) {
          console.warn("[MultiSceneSend] rerollLast: no narration to reroll");
          return;
        }
        const x = h[g];
        E.current = true;
        I(true);
        const f = new AbortController();
        T.current = f;
        try {
          await V.deleteById(x.id);
          if (A.current !== u || ((t = $.current) == null ? undefined : t._id) !== p) {
            throw new Error("reroll-mid-context-changed");
          }
          const g = h.filter(e => e.id !== x.id);
          o(g);
          const v = {
            role: "narration",
            content: "",
            timestamp: Date.now(),
            participantsSnapshot: n.map(e => String(e.id))
          };
          const b = await V.add(u, p, v);
          if (A.current !== u || ((a = $.current) == null ? undefined : a._id) !== p) {
            throw new Error("reroll-mid-context-changed");
          }
          const j = [...g, {
            id: b,
            ...v
          }];
          o(j);
          const C = O.current;
          const k = typeof C == "function" ? g.filter(C) : g;
          const N = await fn({
            participants: n,
            user: r,
            userId: u,
            storyEntries: k,
            session: m,
            settings: L.current,
            globalLanguage: z.current,
            rerollFeedback: e
          });
          let I = S();
          try {
            I = await G(I, u, (i = n[0]) == null ? undefined : i.id);
          } catch {}
          let T = "";
          let E = null;
          let M = "";
          const P = await w({
            messages: N,
            settings: I,
            preferStreaming: true,
            signal: f.signal,
            characterIds: Array.isArray((c = $.current) == null ? undefined : c.cast) ? $.current.cast.map(e => e == null ? undefined : e.id).filter(Boolean) : undefined,
            onStream: e => {
              var t;
              if (!f.signal.aborted) {
                if (A.current === u && ((t = $.current) == null ? undefined : t._id) === p) {
                  T += e;
                  E ||= requestAnimationFrame(() => {
                    E = null;
                    const e = sn(T);
                    o(t => t.map(t => t.id === b ? {
                      ...t,
                      content: e
                    } : t));
                  });
                }
              }
            },
            onComplete: (e, t) => {
              if (t == null ? undefined : t.reasoningContent) {
                M = String(t.reasoningContent);
              }
            }
          }, {
            mcp: "context"
          });
          if (E) {
            cancelAnimationFrame(E);
            E = null;
          }
          if (!T && P) {
            T = P;
          }
          const R = sn(T);
          if (A.current !== u || ((d = $.current) == null ? undefined : d._id) !== p) {
            console.warn("[MultiSceneSend] reroll 完成時 user/session 已切換，丟棄結果");
            return;
          }
          const _ = await U(R, m);
          const D = _.cleanText;
          const B = y && !!M;
          const F = {
            content: D,
            ..._.entryExtras
          };
          if (B) {
            F.hasThinking = true;
          }
          await V.updateEntry(b, F);
          await s.update(p, {
            lastActiveAt: Date.now()
          });
          o(e => e.map(e => e.id === b ? {
            ...e,
            content: D,
            ..._.entryExtras,
            ...(B ? {
              hasThinking: true
            } : {})
          } : e));
          if (B) {
            Y.put(Y.multiKey(b), M, "tm").catch(e => console.warn("[MultiScene Thinking] reroll save failed:", e));
          }
          if (typeof l == "function") {
            try {
              await l();
            } catch {}
          }
          K(T, b, m).catch(() => {});
          H(T, m).catch(() => {});
        } catch (v) {
          if ((v == null ? undefined : v.name) === "AbortError" || f.signal.aborted) {
            console.log("[MultiSceneSend] reroll 用戶終止");
          } else if (String((v == null ? undefined : v.message) || "").includes("reroll-mid-context-changed")) {
            console.warn("[MultiSceneSend] reroll 中途切換");
          } else {
            console.error("[MultiSceneSend] reroll 失敗:", v);
          }
        } finally {
          E.current = false;
          I(false);
          T.current = null;
        }
      }, [n, r, o, l]),
      stopGenerating: ge.useCallback(() => {
        if (T.current) {
          T.current.abort();
        }
      }, []),
      isGenerating: N,
      isGeneratingRef: E
    };
  }({
    userId: y,
    session: Fr.activeSession,
    participants: Wr,
    user: Or,
    storyEntries: Hr,
    setStoryEntries: Vr,
    onAfterPersist: () => Fr.reloadSessions(),
    cgEnabled: Ci,
    cgApiSettings: hi,
    cgImagePreset: null,
    allCharacters: g,
    autoSummaryEnabled: os,
    autoSummaryFrequency: cs,
    autoSummaryLanguage: j || "zh_cn",
    autoSummaryInstructions: hs || "",
    autoSummaryTimeAware: Rs !== false,
    thinkingPanelEnabled: Ts,
    extraPromptSettings: {
      tmImageEnabled: Ci
    },
    globalLanguage: j,
    addParticipant: Fr.addParticipant,
    removeParticipant: Fr.removeParticipant,
    filterHistoryForAI: e => {
      var t;
      const n = (t = ki.current) == null ? undefined : t.isEntryVisibleForAI;
      return typeof n != "function" || n(e);
    }
  });
  const Ii = ge.useRef(null);
  const Ti = ge.useRef(false);
  const Ei = ge.useRef(null);
  ge.useEffect(() => {
    var e;
    const t = ((e = Fr.activeSession) == null ? undefined : e._id) || null;
    if (Ei.current !== t || la === "solo") {
      Ei.current = t;
      if (ss.length > 0) {
        as([]);
        is(false);
        Nr.current.forEach(e => e.abort());
        Nr.current = [];
      }
    }
  }, [la, (e = Fr.activeSession) == null ? undefined : e._id]);
  ge.useEffect(() => {
    var e;
    var t;
    if (la !== "multi") {
      return;
    }
    const n = Ti.current;
    const s = Ni.isGenerating;
    Ti.current = s;
    if (n && !s) {
      for (let t = Hr.length - 1; t >= 0; t--) {
        const n = Hr[t];
        if (n.role === "narration" && ((e = n.content) == null ? undefined : e.trim())) {
          if (Ii.current === n.id) {
            break;
          }
          Ii.current = n.id;
          ri.autoPlayIfEnabled(n.id, n.content);
          break;
        }
      }
      if (rn) {
        if ((t = vo.current) != null) {
          t.call(vo, Hr);
        }
      }
    }
  }, [la, Ni.isGenerating, Hr, ri, rn, cn]);
  const Ai = ge.useRef(null);
  ge.useEffect(() => {
    Ai.current = null;
  }, [y]);
  ge.useEffect(() => {
    if (la !== "multi") {
      Ai.current = null;
      return;
    }
    const e = Fr.activeSession;
    if (!e) {
      cr(true);
      return;
    }
    const t = e._id;
    if (!t || Ai.current === t) {
      return;
    }
    Ai.current = t;
    cr(false);
    const n = y;
    if (n) {
      (async () => {
        var e;
        var s;
        try {
          const s = await le.get(n, t);
          if (!s) {
            return;
          }
          if (y !== n) {
            return;
          }
          if (((e = Fr.activeSession) == null ? undefined : e._id) !== t) {
            return;
          }
          if (s.aestheticPreset != null) {
            tn(s.aestheticPreset);
          }
          if (s.tmCustomCss != null) {
            Fa(s.tmCustomCss);
          }
          if (s.tmVoiceEnabled != null) {
            tr(!!s.tmVoiceEnabled);
          }
          if (s.tmVoiceAutoPlay != null) {
            sr(!!s.tmVoiceAutoPlay);
          }
          if (s.tmVoiceMode != null) {
            rr(s.tmVoiceMode);
          }
          if (s.tmCgEnabled != null) {
            $a(!!s.tmCgEnabled);
          }
          if (s.tmCgMode != null) {
            Pa(s.tmCgMode);
          }
          if (s.consolePanelEnabled != null) {
            Is(!!s.consolePanelEnabled);
          }
          if (s.thinkingPanelEnabled != null) {
            Es(!!s.thinkingPanelEnabled);
          }
          if (s.thinkingPresetId != null) {
            $s(s.thinkingPresetId || "");
          }
          if (s.customThinkingPrompt != null) {
            Ps(s.customThinkingPrompt || "");
          }
          if (s.tmRerollVariantsEnabled != null) {
            Hn(!!s.tmRerollVariantsEnabled);
          }
          if (s.autoDatePagination != null) {
            ka(!!s.autoDatePagination);
          }
          if (s.tmAutoSummary != null) {
            ls(!!s.tmAutoSummary);
          }
          if (s.tmSummaryFrequency != null) {
            ds(Number(s.tmSummaryFrequency) || 12);
          }
          if (s.tmSummaryInstructions != null) {
            Ss(s.tmSummaryInstructions);
          }
          console.log(`[MultiScene SessionSettings] auto-hydrated on session switch, sessionId=${t}`);
        } catch (a) {
          console.warn("[MultiScene SessionSettings] auto-hydration 失敗:", a);
        } finally {
          if (y === n && ((s = Fr.activeSession) == null ? undefined : s._id) === t) {
            cr(true);
          }
        }
      })();
    } else {
      cr(true);
    }
  }, [la, (r = Fr.activeSession) == null ? undefined : r._id, y]);
  const $i = ge.useRef(null);
  ge.useEffect(() => {
    if (la !== "multi") {
      $i.current = null;
      return;
    }
    if (!xt) {
      $i.current = null;
      return;
    }
    const e = Fr.activeSession;
    if (e && $i.current !== e._id) {
      $i.current = e._id;
      fa(ms(e));
      va(e.sceneAvatar || "");
      Sa(e.autoCastMode || "off");
      Mn(e.scenarioOutline || "");
      ga(e.spectate === true);
      wt(Number(e.minLength) || 100);
      Ht(Number(e.maxLength) || 500);
      Qn(Number(e.contextLength) || 20);
      ts(String(Number(e.contextLength) || 20));
      _s(e.realTimeAware !== false);
      if (e.stylePreset) {
        Gt(e.stylePreset);
      }
      (async () => {
        var t;
        const n = y;
        if (n) {
          try {
            const s = await le.getForSession(n, e);
            if (!s) {
              return;
            }
            if (y !== n) {
              return;
            }
            if (((t = Fr.activeSession) == null ? undefined : t._id) !== e._id) {
              return;
            }
            if (s.aestheticPreset != null) {
              tn(s.aestheticPreset);
            }
            if (s.tmCustomCss != null) {
              Fa(s.tmCustomCss);
            }
            if (s.tmVoiceEnabled != null) {
              tr(!!s.tmVoiceEnabled);
            }
            if (s.tmVoiceAutoPlay != null) {
              sr(!!s.tmVoiceAutoPlay);
            }
            if (s.tmVoiceMode != null) {
              rr(s.tmVoiceMode);
            }
            if (s.tmCgEnabled != null) {
              $a(!!s.tmCgEnabled);
            }
            if (s.tmCgMode != null) {
              Pa(s.tmCgMode);
            }
            if (s.consolePanelEnabled != null) {
              Is(!!s.consolePanelEnabled);
            }
            if (s.thinkingPanelEnabled != null) {
              Es(!!s.thinkingPanelEnabled);
            }
            if (s.thinkingPresetId != null) {
              $s(s.thinkingPresetId || "");
            }
            if (s.customThinkingPrompt != null) {
              Ps(s.customThinkingPrompt || "");
            }
            if (s.tmRerollVariantsEnabled != null) {
              Hn(!!s.tmRerollVariantsEnabled);
            }
            if (s.autoDatePagination != null) {
              ka(!!s.autoDatePagination);
            }
            if (s.tmAutoSummary != null) {
              ls(!!s.tmAutoSummary);
            }
            if (s.tmSummaryFrequency != null) {
              ds(Number(s.tmSummaryFrequency) || 12);
            }
            if (s.tmSummaryInstructions != null) {
              Ss(s.tmSummaryInstructions);
            }
            console.log(`[MultiScene SessionSettings] hydrated sessionId=${e._id}`);
          } catch (s) {
            console.warn("[MultiScene CastSettings] hydration 失敗:", s);
          }
        }
      })();
    }
  }, [la, xt, Fr.activeSession, y]);
  const Mi = ge.useCallback(async () => {
    const e = Fr.activeSession;
    if (!e) {
      return;
    }
    const t = y;
    if (t) {
      try {
        const n = Math.min(Number(bt) || 100, Number(Wt) || 500);
        const s = Math.max(Number(bt) || 100, Number(Wt) || 500);
        const a = (xa || "").trim() || ms(e) || new Date(e.createdAt || Date.now()).toLocaleDateString("zh-TW");
        await Fr.updateSession(e._id, {
          sceneName: a,
          sceneAvatar: ya || "",
          autoCastMode: ["off", "suggest", "auto"].includes(ba) ? ba : "off",
          ...(e.pageName ? {} : {
            pageName: us(e)
          }),
          scenarioOutline: (In || "").trim(),
          spectate: ha === true,
          minLength: n,
          maxLength: s,
          contextLength: Math.max(1, Number(Zn) || 20),
          realTimeAware: Rs !== false,
          storyTimeStr: e.storyTimeStr || "",
          storyPeriod: e.storyPeriod || "",
          stylePreset: Vt || ""
        });
        if (e._id) {
          await le.update(t, e._id, {
            aestheticPreset: en,
            tmCustomCss: Oa,
            tmVoiceEnabled: er,
            tmVoiceAutoPlay: nr,
            tmVoiceMode: ar,
            tmCgEnabled: Aa,
            tmCgMode: Ma,
            consolePanelEnabled: Ns,
            thinkingPanelEnabled: Ts,
            thinkingPresetId: As,
            customThinkingPrompt: Ms,
            tmRerollVariantsEnabled: Fn,
            autoDatePagination: Ca,
            tmAutoSummary: os,
            tmSummaryFrequency: cs,
            tmSummaryInstructions: hs
          });
          console.log(`[MultiScene SessionSettings] saved sessionId=${e._id}`);
        }
      } catch (n) {
        console.error("[MultiScene] 保存 session/cast 設定失敗:", n);
      }
    }
  }, [Fr, y, xa, ya, ba, In, ha, bt, Wt, Zn, Rs, Vt, en, Oa, er, nr, ar, Aa, Ma, Ns, Ts, As, Ms, Fn, Ca, os, cs, hs]);
  const Pi = ge.useCallback(async () => {
    if (!Ca) {
      return null;
    }
    const e = Fr.activeSession;
    if (!e) {
      return null;
    }
    const t = new Date().toLocaleDateString("zh-TW");
    const n = e.dateLabel || (e.createdAt ? new Date(e.createdAt).toLocaleDateString("zh-TW") : null);
    if (!n || n === t) {
      return null;
    }
    if (!y) {
      return null;
    }
    const s = e.spectate === true;
    try {
      const n = await Fr.createSession({
        name: s ? `🌙 ${t}` : t,
        participants: e.participants || [],
        spectate: s,
        scenarioOutline: e.scenarioOutline || "",
        stylePreset: e.stylePreset || "",
        minLength: e.minLength || 100,
        maxLength: e.maxLength || 500,
        contextLength: e.contextLength || 20,
        realTimeAware: e.realTimeAware !== false,
        storyTimeStr: e.storyTimeStr || "",
        storyPeriod: e.storyPeriod || "",
        dateLabel: t,
        autoPaginated: true
      });
      if (n) {
        await Fr.switchToSession(n);
      }
      return n;
    } catch (a) {
      console.warn("[MultiScene] auto pagination failed:", a);
      return null;
    }
  }, [Ca, Fr, y]);
  const Ri = Un({
    enabled: Fn,
    userId: y,
    charId: Fr.activeSession ? `multi:${Fr.activeSession._id}` : null,
    storyEntries: Hr,
    setStoryEntries: Vr,
    isGenerating: Ni.isGenerating,
    scrollContainerRef: hr,
    storyService: V,
    slotsKeyPrefix: "tm_multi_reroll_slots",
    aiRole: "narration"
  });
  ki.current = Ri;
  const _i = ge.useCallback(async (e, t) => {
    const n = Hr[e];
    if (!n) {
      return;
    }
    const s = n.id;
    Vr(e => e.map(e => e.id === s ? {
      ...e,
      content: t
    } : e));
    try {
      await V.updateContent(s, t);
    } catch (a) {
      console.error("[MultiScene] updateContent 失敗:", a);
    }
  }, [Hr]);
  const Di = ge.useCallback(async e => {
    const t = Hr[e];
    if (!t) {
      return;
    }
    const n = t.id;
    Vr(e => e.filter(e => e.id !== n));
    try {
      if (n != null) {
        await V.deleteById(n);
      }
    } catch (s) {
      console.error("[MultiScene] deleteById 失敗:", s);
    }
  }, [Hr]);
  const Bi = ge.useCallback(async e => {
    const t = Hr[e];
    if (!t) {
      return;
    }
    const n = t.id;
    const s = !t.hiddenByUser;
    Vr(e => e.map(e => e.id === n ? {
      ...e,
      hiddenByUser: s
    } : e));
    try {
      if (n != null) {
        await V.updateEntry(n, {
          hiddenByUser: s
        });
      }
    } catch (a) {
      console.error("[MultiScene] toggle hide error:", a);
    }
  }, [Hr]);
  const Li = ge.useCallback(async e => {
    if (!Fr.activeSession) {
      return;
    }
    if ((Array.isArray(Fr.activeSession.participants) ? Fr.activeSession.participants.map(String) : []).length <= 2) {
      E(C("tmMultiAtLeastTwoMembers", "多人場景至少需要 2 個成員"));
      return;
    }
    const t = await ce(C("tmMultiRemoveReasonPrompt", "{name} 怎麼離開？（可留空）").replace("{name}", e.name || ""), "");
    if (t === null) {
      return;
    }
    const s = [...Hr];
    const r = Fr.activeSession;
    if (await Fr.removeParticipant({
      charId: String(e.id),
      charName: e.name || "",
      reason: (t || "").trim()
    })) {
      try {
        const e = await V.getBySession(Fr.activeSession._id);
        Vr((e || []).map(ps));
      } catch {}
      (async function ({
        userId: e,
        session: t,
        exitingChar: s,
        exitingCharFullObj: r,
        user: i,
        storyEntries: o,
        language: l = "zh_cn",
        timeAwareEnabled: c = true
      }) {
        if (!e || !t || !(s == null ? undefined : s.id)) {
          return null;
        }
        const d = String(s.id);
        const u = t._id;
        const m = (o || []).filter(e => !!e && e.type !== "cast_change" && !e.hiddenByUser && (Array.isArray(e.participantsSnapshot) ? e.participantsSnapshot.some(e => String(e) === d) : (Array.isArray(t.participants) ? t.participants.map(String) : []).includes(d)));
        if (m.length < 2) {
          console.log(`[MultiScene ExitSnapshot] char=${d} 在場段落少於 2 條，跳過快照`);
          return null;
        }
        const p = (i == null ? undefined : i.name) || "使用者";
        const h = m.map((e, t) => {
          let n;
          let s = "";
          if (c && e.timestamp) {
            const t = new Date(e.timestamp);
            if (!isNaN(t.getTime())) {
              s = `[${t.getMonth() + 1}月${t.getDate()}日 ${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}] `;
            }
          }
          n = e.role === "user" ? String(e.content || "").startsWith("[DIRECTOR:") ? "導演" : p : "敘述";
          return `${s}#${t + 1} ${n}: ${e.content}`;
        }).join("\n");
        const g = ((r == null ? undefined : r.description) || "").trim().slice(0, 250);
        const x = g ? `[${s.name}] ${g}` : "";
        let f = null;
        try {
          f = await a.get(e, d);
        } catch {}
        const y = at({
          conversationText: h,
          characterName: s.name,
          currentUserName: t.spectate ? "（旁觀者）" : p,
          characterGender: s.gender || "",
          userGender: (i == null ? undefined : i.gender) || "",
          outputLanguage: l || "zh_cn",
          userPersona: (i == null ? undefined : i.intro) || (i == null ? undefined : i.signature) || (i == null ? undefined : i.profile) || (i == null ? undefined : i.bio) || "",
          characterPersona: x,
          userToCharRelationship: "",
          charToUserRelationship: (f == null ? undefined : f.charToUserRelationship) || "",
          startIndex: 1,
          endIndex: m.length,
          messageCount: m.length,
          timeAware: c,
          customSummaryInstructions: ""
        });
        let v;
        try {
          v = b(await S());
        } catch (F) {
          console.warn("[MultiScene ExitSnapshot] 取 API 設定失敗:", F);
          v = await S().catch(() => null);
        }
        if (!v) {
          console.error("[MultiScene ExitSnapshot] 無 API 設定，跳過");
          return null;
        }
        const j = rt(l || "zh_cn");
        const C = `You are an expert conversation summarizer. Produce a detailed summary of what ${s.name} experienced and observed during this multi-character scene before leaving. Focus on ${s.name}'s perspective and what they would carry away as memory. Write in ${j}. Follow the OUTPUT FORMAT strictly — replace EVERY [placeholder] with actual content; do NOT echo bracketed placeholder text verbatim.`;
        let k;
        try {
          k = await w({
            messages: [{
              role: "system",
              content: C
            }, {
              role: "user",
              content: y
            }],
            settings: {
              ...v,
              temperature: 0.3
            },
            preferStreaming: false
          });
        } catch (F) {
          console.error("[MultiScene ExitSnapshot] API 失敗:", F);
          return null;
        }
        if (!k || typeof k != "string") {
          return null;
        }
        let N = k.trim();
        const I = it(N);
        N = I.cleanedText || N;
        const {
          importance: T,
          emotion: E,
          topics: A,
          openThread: $,
          evidencedFacts: M,
          obsoleteFacts: P
        } = I;
        const R = ot(N);
        let _ = (R.summaryText || N).trim();
        if (_.startsWith("[") && _.endsWith("]")) {
          let e = 0;
          let t = true;
          for (let n = 0; n < _.length; n++) {
            const s = _[n];
            if (s === "[") {
              e++;
            } else if (s === "]" && (e--, e === 0 && n !== _.length - 1)) {
              t = false;
              break;
            }
          }
          if (t && e === 0) {
            _ = _.slice(1, -1).trim();
          }
        }
        const D = R.keywords.length > 0 ? R.keywords : lt(_);
        const B = Date.now();
        const L = t.sceneName || t.pageName || t.name || "";
        const z = `${L ? `[多人場景 · ${L} · 我在場期間] ` : "[多人場景 · 我在場期間] "}${_}`;
        const O = {
          _eventVersion: 4,
          id: B,
          date: new Date().toISOString(),
          summary: z,
          content: z,
          startMessageIndex: 0,
          lastMessageIndex: m.length - 1,
          messageCount: m.length,
          dateRange: null,
          source: t.spectate ? "spectate" : "multi-scene",
          keywords: D,
          importance: T,
          emotion: E,
          topics: A,
          openThreads: $ ? [$] : [],
          evidencedFacts: M || [],
          obsoleteFacts: P || [],
          sessionId: u,
          sessionName: L,
          isExitSnapshot: true,
          targetCharacterId: d
        };
        try {
          await n.appendHistory(e, d, O);
          console.log(`[MultiScene ExitSnapshot] ✓ 寫入退場快照 char=${d} (${m.length} 段, ${_.length} 字)`);
        } catch (F) {
          console.warn(`[MultiScene ExitSnapshot] 寫入 memory 失敗 char=${d}:`, F);
          return null;
        }
        return O;
      })({
        userId: y,
        session: r,
        exitingChar: {
          id: e.id,
          name: e.name,
          gender: e.gender
        },
        exitingCharFullObj: e,
        user: Or,
        storyEntries: s,
        language: j,
        timeAwareEnabled: Rs !== false
      }).catch(e => {
        console.warn("[MultiScene] 退場快照生成失敗（不影響移除）:", e);
      });
    } else {
      E(C("tmMultiRemoveFailed", "無法移除（可能少於 2 人）"));
    }
  }, [Fr, Hr, y, Or, j, Rs, C]);
  const zi = ge.useCallback(async ({
    newCharObj: e,
    joinReason: a
  }) => {
    if (!zr || !aa || !e) {
      console.warn("[SoloUpgrade] 缺少必要上下文，跳過");
      return null;
    }
    const r = y;
    if (!r) {
      return null;
    }
    const i = await async function ({
      userId: e,
      soloSession: a,
      soloChar: r,
      newChar: i,
      joinReason: o = "",
      soloStoryEntries: l = [],
      soloSettingsHint: c = {}
    }) {
      if (!e || !(a == null ? undefined : a._id) || !(r == null ? undefined : r.id) || !(i == null ? undefined : i.id)) {
        return null;
      }
      try {
        try {
          await t.update(a._id, {
            completed: true,
            completedAt: Date.now(),
            upgradedToMultiAt: Date.now()
          });
        } catch (d) {
          console.warn("[SoloUpgrade] 標記舊 session completed 失敗:", d);
        }
        const u = [];
        const m = (l || []).slice(-12).filter(e => (e == null ? undefined : e.content) && (e.role === "user" || e.role === "narration" || e.role === "them"));
        for (const e of m.slice(-8)) {
          const t = e.role === "user" ? "使用者" : r.name;
          const n = String(e.content || "").trim().slice(0, 300);
          if (n) {
            u.push(`${t}: ${n}`);
          }
        }
        let p = "";
        try {
          const t = await n.get(e, String(r.id));
          const s = ((t == null ? undefined : t.summaryHistory) || []).slice(-1)[0];
          if (s == null ? undefined : s.summary) {
            p = `[${r.name} 最近的劇情]: ${String(s.summary).trim().slice(0, 400)}`;
          }
        } catch {}
        const h = [`（場景延續自單人場景「${a.name || r.name}」）`, p || "", u.length > 0 ? `最近對話：\n${u.join("\n")}` : "", o ? `[${i.name} 入場原因]: ${o}` : `[${i.name} 此刻加入了這個場景]`].filter(Boolean).join("\n\n");
        const g = new Date().toLocaleDateString("zh-TW");
        const x = `${r.name}、${i.name}${g ? ` · ${g}` : ""}`;
        const f = {
          userId: e,
          name: x,
          pageName: x,
          sceneName: x,
          participants: [String(r.id), String(i.id)],
          spectate: false,
          scenarioOutline: h + (a.scenarioOutline ? "\n\n" + a.scenarioOutline : ""),
          stylePreset: c.stylePreset || a.stylePreset || "",
          minLength: Number(c.minLength) || Number(a.minLength) || 100,
          maxLength: Number(c.maxLength) || Number(a.maxLength) || 500,
          contextLength: Number(c.contextLength) || Number(a.contextLength) || 20,
          realTimeAware: c.realTimeAware !== false && a.realTimeAware !== false,
          upgradedFromSoloSessionId: a._id
        };
        const y = await s.add(f);
        console.log(`[SoloUpgrade] ✓ 升級成功 soloSessionId=${a._id} → multiSessionId=${y} cast=[${r.name}, ${i.name}]`);
        return {
          newSessionId: y,
          scenarioOutline: f.scenarioOutline
        };
      } catch (d) {
        console.error("[SoloUpgrade] 升級失敗:", d);
        return null;
      }
    }({
      userId: r,
      soloSession: aa,
      soloChar: zr,
      newChar: e,
      joinReason: a || "",
      soloStoryEntries: je,
      soloSettingsHint: {
        minLength: bt,
        maxLength: Wt,
        contextLength: Zn,
        stylePreset: Vt,
        realTimeAware: Rs
      }
    });
    if (i == null ? undefined : i.newSessionId) {
      ca("multi");
      setTimeout(async () => {
        try {
          await Fr.reloadSessions();
          await Fr.switchToSession(i.newSessionId);
        } catch (e) {
          console.warn("[SoloUpgrade] 切換新場景失敗:", e);
        }
      }, 50);
      return i;
    } else {
      E(C("tmSoloUpgradeFailed", "場景升級失敗，請稍後再試"));
      return null;
    }
  }, [zr, aa, y, je, bt, Wt, Zn, Vt, Rs, Fr, C]);
  const Oi = ge.useCallback(async e => {
    const t = e == null ? undefined : e.pendingSoloUpgrade;
    if (!t || t.status !== "pending") {
      return;
    }
    const n = g.find(e => String(e.id) === String(t.join.charId));
    if (!n) {
      E(C("tmSoloUpgradeCharGone", "候選角色已不存在"));
      return;
    }
    const s = e.id || e._id;
    try {
      await te.updateEntry(s, {
        pendingSoloUpgrade: {
          ...t,
          status: "accepted"
        }
      });
      Ce(e => e.map(e => (e.id || e._id) === s ? {
        ...e,
        pendingSoloUpgrade: {
          ...t,
          status: "accepted"
        }
      } : e));
    } catch (a) {
      console.warn("[SoloUpgrade] mark accepted 失敗:", a);
    }
    await zi({
      newCharObj: n,
      joinReason: t.join.reason || ""
    });
  }, [g, zi, C]);
  const Fi = ge.useCallback(async e => {
    const t = e == null ? undefined : e.pendingSoloUpgrade;
    if (!t) {
      return;
    }
    const n = e.id || e._id;
    try {
      await te.updateEntry(n, {
        pendingSoloUpgrade: {
          ...t,
          status: "dismissed"
        }
      });
      Ce(e => e.map(e => (e.id || e._id) === n ? {
        ...e,
        pendingSoloUpgrade: {
          ...t,
          status: "dismissed"
        }
      } : e));
    } catch (s) {
      console.error("[SoloUpgrade] dismiss 失敗:", s);
    }
  }, []);
  const Ui = ge.useCallback(async e => {
    const t = e == null ? undefined : e.pendingCastSuggestion;
    if (t && t.status === "pending") {
      try {
        if (t.join) {
          await Fr.addParticipant({
            charId: t.join.charId,
            charName: t.join.charName,
            reason: t.join.reason || ""
          });
        }
        if (t.leave) {
          await Fr.removeParticipant({
            charId: t.leave.charId,
            charName: t.leave.charName,
            reason: t.leave.reason || ""
          });
        }
        const n = e.id || e._id;
        await V.updateEntry(n, {
          pendingCastSuggestion: {
            ...t,
            status: "accepted"
          }
        });
        Vr(e => e.map(e => (e.id || e._id) === n ? {
          ...e,
          pendingCastSuggestion: {
            ...t,
            status: "accepted"
          }
        } : e));
        const s = await V.getBySession(Fr.activeSession._id);
        Vr((s || []).map(ps));
      } catch (n) {
        console.error("[MultiScene] 套用 AI cast 建議失敗:", n);
      }
    }
  }, [Fr]);
  const Wi = ge.useCallback(async e => {
    const t = e == null ? undefined : e.pendingCastSuggestion;
    if (!t) {
      return;
    }
    const n = e.id || e._id;
    try {
      await V.updateEntry(n, {
        pendingCastSuggestion: {
          ...t,
          status: "dismissed"
        }
      });
      Vr(e => e.map(e => (e.id || e._id) === n ? {
        ...e,
        pendingCastSuggestion: {
          ...t,
          status: "dismissed"
        }
      } : e));
    } catch (s) {
      console.error("[MultiScene] 忽略 AI cast 建議失敗:", s);
    }
  }, []);
  const Hi = ge.useCallback(async e => {
    if (!Fr.activeSession || !e) {
      return;
    }
    const t = await ce(C("tmMultiAddReasonPrompt", "{name} 怎麼出現的？（可留空）").replace("{name}", e.name || ""), "");
    if (t !== null) {
      if (await Fr.addParticipant({
        charId: String(e.id),
        charName: e.name || "",
        reason: (t || "").trim()
      })) {
        try {
          const e = await V.getBySession(Fr.activeSession._id);
          Vr((e || []).map(ps));
        } catch {}
        De(false);
      } else {
        E(C("tmMultiAddFailed", "已在場或無法加入"));
      }
    }
  }, [Fr, C]);
  const Vi = ge.useCallback(async (e, t, n) => {
    if ((e == null ? undefined : e.title) && t && n) {
      try {
        const s = await de.get(t, String(n));
        if (!(s == null ? undefined : s.isUnlocked)) {
          return;
        }
        const a = s.storyAchievements || [];
        if (a.some(t => t.title === e.title)) {
          return;
        }
        const r = {
          id: `story_${Date.now()}`,
          title: e.title,
          desc: e.desc || "",
          color: e.color || "bronze",
          icon: e.icon || "star",
          date: new Date().toISOString(),
          source: "tm"
        };
        a.push(r);
        await de.put(t, String(n), {
          ...s,
          storyAchievements: a
        });
        window.dispatchEvent(new Event("couples-data-updated"));
        console.log(`[TM Achievement] 🏆 ${r.title} (${r.color})`);
        ze({
          title: r.title,
          desc: r.desc,
          color: r.color
        });
      } catch (s) {
        console.error("[TM Achievement] ❌", s);
      }
    }
  }, []);
  const Gi = ge.useCallback(async (e, t, n = {}) => {
    var s;
    var r;
    var i;
    var o;
    let l = e;
    console.log("[TM CG] handleCgRequest called:", {
      description: l == null ? undefined : l.substring(0, 50),
      entryId: t,
      tmImageEnabled: Ci,
      tmCgMode: Ma,
      edit: !!n.rawImgDesc
    });
    if (Ci && t) {
      ci(t);
      try {
        const e = hi || (await S());
        const d = typeof n.rawImgDesc == "string" && n.rawImgDesc.trim();
        if (d) {
          l = n.rawImgDesc.trim();
        }
        const u = la === "multi" && !!Fr.activeSession;
        const m = u ? Wr[0] || null : zr;
        const p = u ? ((s = Fr.activeSession) == null ? undefined : s.scenarioOutline) || "" : In;
        const h = u ? ((r = Fr.activeSession) == null ? undefined : r.storyTimeStr) || "" : (oi == null ? undefined : oi.storyTimeStr) || "";
        const x = u ? ((i = Fr.activeSession) == null ? undefined : i.storyPeriod) || "" : (oi == null ? undefined : oi.storyPeriod) || "";
        const f = u ? !!h : !!(oi == null ? undefined : oi.hasStoryTime);
        const v = u ? ((o = Fr.activeSession) == null ? undefined : o.spectate) === true : (aa == null ? undefined : aa.spectate) === true;
        const b = u ? Wr : g;
        let j = "";
        let C = null;
        try {
          const e = await a.get(y, m == null ? undefined : m.id);
          j = (m == null ? undefined : m.imagePrompt) || (e == null ? undefined : e.charImagePrompt) || M(m == null ? undefined : m.description);
          C = (e == null ? undefined : e.imagePreset) || null;
        } catch {
          j = M(m == null ? undefined : m.description);
        }
        if (Ma === "separate" && !d) {
          try {
            const t = await O();
            const n = P(Or);
            const s = (e == null ? undefined : e.novelAiImageSize) || (e == null ? undefined : e.pollinationsImageSize) || (e == null ? undefined : e.googleImagenImageSize) || (e == null ? undefined : e.geminiImageSize) || (e == null ? undefined : e.grokImageSize) || "1024x1024";
            const [a, r] = s.split("x").map(Number);
            const i = (a || 1024) >= (r || 1024) ? "landscape" : "portrait";
            const o = {
              userName: Or == null ? undefined : Or.name,
              charName: m == null ? undefined : m.name,
              others: (b || []).filter(e => (e == null ? undefined : e.name) && e.id !== (m == null ? undefined : m.id)).slice(0, 12).map(e => ({
                name: e.name
              }))
            };
            const c = await Ye({
              char: m,
              mode: "all",
              apiSettings: e
            }).catch(() => "");
            const d = `You are an expert image generation prompt engineer for a visual-novel style image generator.\nRefine the rough scene description from the story into a polished image prompt.\nGround EVERY visual choice in what just happened. Do NOT default to a portrait when the moment is about a place or object.\nCanvas is ${i === "landscape" ? "LANDSCAPE 16:9" : "PORTRAIT"}.\n${z(e, "tm", o, c)}\nOutput ONLY the image prompt (must start with [SUBJECT:XXX]). No commentary, no quotes.`;
            const u = [j ? `Character "${(m == null ? undefined : m.name) || ""}" reference appearance: ${j.slice(0, 220)}` : "", n ? `Partner/user reference appearance: ${n.slice(0, 160)}` : "", p ? `Story scenario: ${String(p).slice(0, 220)}` : "", h ? `In-story time: ${h}` : "", "", "--- ROUGH SCENE DESCRIPTION FROM STORY ---", String(l || "").slice(0, 800), "---", "", "Output the polished image prompt now (must start with [SUBJECT:XXX]):"].filter(Boolean);
            const g = ((await w({
              messages: [{
                role: "system",
                content: d
              }, {
                role: "user",
                content: u.join("\n")
              }],
              preferStreaming: false,
              settings: t
            })) || "").trim().replace(/^["“'”'「」『』【】\s]+|["“'”'「」『』【】\s]+$/g, "");
            const x = L(g);
            const f = x.length < 30 || !x.includes(",") && !x.includes(".") && x.length < 60;
            if (x && !f) {
              if (x !== g) {
                console.warn("[TM CG] separate-mode AI 輸出 JSON wrapper，已抽出 d 欄");
              }
              console.log("[TM CG] separate-mode refined prompt:", x.slice(0, 200));
              l = x;
            } else if (x) {
              console.warn(`[TM CG] separate-mode AI 輸出過短 (${x.length} chars)：「${x}」→ 棄用，改走 fallback`);
            }
          } catch (c) {
            console.warn("[TM CG] separate-mode 精修失敗，fallback 用原始描述:", c);
          }
        }
        if (u && Wr.length >= 2) {
          const e = /\[SUBJECT:[A-Z_]+\|cast=/i.test(l);
          const t = /\[SUBJECT:[A-Z_]+/i.test(l);
          if (!e) {
            const e = l.toLowerCase();
            const n = Wr.map(t => ({
              name: t.name,
              idx: t.name ? e.indexOf(t.name.toLowerCase()) : -1
            })).filter(e => e.idx >= 0).sort((e, t) => e.idx - t.idx).map(e => e.name);
            if (n.length >= 2) {
              const e = `${n.join(",")}${v ? "" : `,user(${(Or == null ? undefined : Or.name) || "user"})`}`;
              l = t ? l.replace(/\[SUBJECT:([A-Z_]+)\]/i, `[SUBJECT:$1|cast=${e}]`) : `[SUBJECT:SCENE_WITH_PEOPLE|cast=${e}] ${l}`;
              console.log(`[TM CG] multi-mode auto-injected cast=${e}`);
            }
          }
        }
        const k = p ? `setting: ${String(p).slice(0, 150)}` : "";
        const N = f ? `${h} ${x}`.trim() : "";
        const I = ue(l);
        const T = !!I.subject;
        const E = T ? null : R(`${l || ""} ${k || ""}`) || null;
        let A = E;
        if (v) {
          if (I.subject === "TWO_PEOPLE" || I.subject === "SCENE_WITH_PEOPLE") {
            A = "PERSON_ACTION";
          } else if (!T) {
            A = E === "TWO_PEOPLE" || E === "SCENE_WITH_PEOPLE" ? "PERSON_ACTION" : E;
          }
        }
        let $ = [];
        try {
          const e = await a.getByUser(y);
          const t = new Map((e || []).map(e => [String(e.characterId), e]));
          $ = (b || []).map(e => {
            var n;
            return {
              id: e.id,
              name: e.name,
              gender: e.gender,
              imagePrompt: e.imagePrompt || ((n = t.get(String(e.id))) == null ? undefined : n.charImagePrompt) || M(e.description) || ""
            };
          }).filter(e => e.name);
        } catch {}
        const B = n.useRaw ? {
          prompt: l,
          subject: "RAW",
          style: "raw",
          structured: null
        } : _({
          rawImgDesc: l,
          subjectOverride: A,
          char: m,
          charAppearance: j,
          user: Or,
          location: k || N ? [k, N].filter(Boolean).join(", ") : "",
          extraChars: $,
          sceneType: "tm",
          apiSettings: e,
          imagePreset: C
        });
        const F = P(Or);
        const U = B.subject === "TWO_PEOPLE";
        console.groupCollapsed("[TM CG] 🎨 generate");
        console.log("📖 raw [CG:] from AI:", l);
        console.log("🏷️ SUBJECT parsed:", B.subject, "| style:", B.style);
        console.log("👤 charAppearance (raw):", j);
        console.log("🧍 userAppearance (raw):", F || "(empty — user profile has no gender/imageAppearance)");
        console.log("🧍 userAppearance injected into prompt?", U ? "✅ yes (SUBJECT=TWO_PEOPLE)" : `❌ no (SUBJECT=${B.subject} — user外觀只在 TWO_PEOPLE 時注入)`);
        console.log("📍 location (sceneCtx+timeCtx):", k || N ? [k, N].filter(Boolean).join(", ") : "(none)");
        console.log("🎯 built.prompt (送入 generateImage):", B.prompt);
        const W = e == null ? undefined : e[B.style === "tag" && (e == null ? undefined : e.novelAiEnabled) ? "novelAiPositivePrompt" : (e == null ? undefined : e.pollinationsEnabled) ? "pollinationsPositivePrompt" : (e == null ? undefined : e.googleImagenEnabled) ? "googleImagenPositivePrompt" : (e == null ? undefined : e.geminiImageEnabled) ? "geminiImagePositivePrompt" : (e == null ? undefined : e.grokEnabled) ? "grokPositivePrompt" : (e == null ? undefined : e.gptImageEnabled) ? "gptImagePositivePrompt" : "novelAiPositivePrompt"];
        console.log("✨ positivePrefix (會前置):", W || "(empty)");
        console.log("📤 最終送 API 的完整 prompt ≈", (W ? W + ", " : "") + B.prompt);
        console.groupEnd();
        const H = await D(B.prompt, "tm", e, {
          structured: B.structured,
          imagePreset: C,
          charSeed: m == null ? undefined : m.imageSeed,
          refImageId: m == null ? undefined : m.refImageRef
        });
        if (H) {
          const e = {
            url: H,
            prompt: l,
            generatedAt: Date.now()
          };
          const n = la === "multi" && !!Fr.activeSession;
          const s = n ? V : te;
          const a = n ? "narration" : "char";
          (n ? Vr : Ce)(n => {
            let r = n.findIndex(e => e.id === t);
            if (r === -1) {
              for (let e = n.length - 1; e >= 0; e--) {
                if (n[e].role === a && !n[e].illustration) {
                  r = e;
                  break;
                }
              }
            }
            if (r === -1) {
              return n;
            }
            const i = n[r].id;
            if (typeof i == "number") {
              s.updateEntry(i, {
                illustration: e
              }).catch(() => {});
            }
            return n.map((t, n) => n === r ? {
              ...t,
              illustration: e
            } : t);
          });
          console.log("[TM CG] Generated for entry", t, n ? "(multi)" : "(solo)");
        }
      } catch (c) {
        console.warn("[TM CG] Generation failed:", c);
      } finally {
        ci(null);
      }
    }
  }, [Ci, hi, zr, Or, g, y, In, oi, aa, Ma, la, Fr.activeSession, Wr]);
  const Yi = ge.useCallback(async e => {
    if (e != null && (await $(C("tmCgDeleteConfirm", "刪除這張 CG？樓層文字會保留。")))) {
      if (la === "multi" && Fr.activeSession) {
        Vr(t => t.map(t => t.id === e ? {
          ...t,
          illustration: null
        } : t));
        if (typeof e == "number") {
          try {
            await V.updateEntry(e, {
              illustration: null
            });
          } catch (t) {
            console.warn("[TM CG] multi delete update failed:", t);
          }
        }
      } else {
        Ce(t => t.map(t => t.id === e ? {
          ...t,
          illustration: null
        } : t));
        if (typeof e == "number") {
          try {
            await te.updateEntry(e, {
              illustration: null
            });
          } catch (t) {
            console.warn("[TM CG] delete update failed:", t);
          }
        }
      }
    }
  }, [C, la, Fr.activeSession]);
  const Ki = ge.useCallback(async (e, t) => {
    if (e) {
      try {
        const t = new Date();
        const s = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
        let a = null;
        try {
          const {
            compressImageForStorage: t
          } = await o(async () => {
            const {
              compressImageForStorage: e
            } = await import("./imageCompressor-FPWVE1FW.js");
            return {
              compressImageForStorage: e
            };
          }, []);
          const n = await t(e);
          a = await W.put(n);
        } catch (n) {}
        const r = (zr == null ? undefined : zr.name) || "";
        const i = {
          id: `tmcg_${Date.now()}`,
          ...(a ? {
            imageRef: a
          } : {
            image: e
          }),
          title: r ? `${r} - CG` : "CG",
          date: s,
          charId: zr ? String(zr.id) : "",
          charName: r,
          task: "TM CG",
          timestamp: Date.now()
        };
        await H.flashMoments.put(i);
        const l = await H.flashMoments.count();
        if (l > 50) {
          const e = await H.flashMoments.orderBy("timestamp").limit(l - 50).toArray();
          const t = e.map(e => e.imageRef).filter(e => e != null);
          await H.flashMoments.bulkDelete(e.map(e => e.id));
          if (t.length > 0) {
            W.bulkDelete(t).catch(() => {});
          }
        }
        E(C("tmCgFavoritedToast", "已收藏到日曆影集"));
      } catch (s) {
        console.warn("[TM CG] favorite failed:", s);
        E(C("tmCgFavoriteFailed", "收藏失敗"));
      }
    }
  }, [zr, C]);
  const Xi = ge.useCallback(e => {
    const t = e.target;
    if (t.closest(".tm-para") || t.closest(".tm-context-menu") || t.closest("button") || t.closest("input") || t.closest("textarea")) {
      return;
    }
    const n = e.touches ? e.touches[0].clientX : e.clientX;
    const s = e.touches ? e.touches[0].clientY : e.clientY;
    gr.current = setTimeout(() => {
      var e;
      gr.current = null;
      try {
        if ((e = window.getSelection()) != null) {
          e.removeAllRanges();
        }
      } catch {}
      Qa({
        x: n,
        y: s
      });
    }, 800);
  }, []);
  const Ji = ge.useCallback(() => {
    if (gr.current) {
      clearTimeout(gr.current);
      gr.current = null;
    }
  }, []);
  const qi = ge.useCallback(() => {
    if (gr.current) {
      clearTimeout(gr.current);
      gr.current = null;
    }
  }, []);
  const Zi = ge.useCallback(async () => {
    Qa(null);
    const e = zr == null ? undefined : zr.id;
    if (e && (await $(C("tmCssResetConfirm", "確定要重置此角色的自訂 CSS 嗎？重置後頁面將恢復預設樣式。")))) {
      Fa("");
      Wa("");
      await i.set(`tm_theme_char_${e}`, {
        css: "",
        name: ""
      });
      E(C("tmCssResetDone", "CSS 已重置"));
    }
  }, [zr == null ? undefined : zr.id, C]);
  const Qi = ge.useCallback(() => {
    Qa(null);
    yt(true);
    Me(false);
    ht(false);
    oa(false);
  }, []);
  const eo = ge.useRef(false);
  const to = ge.useRef(false);
  ge.useEffect(() => {
    if (!eo.current && g.length !== 0) {
      eo.current = true;
      try {
        const e = localStorage.getItem("tm_last_charId");
        if (e) {
          const t = g.findIndex(t => String(t.id) === e);
          if (t >= 0 && t !== ve) {
            be(t);
          }
        }
      } catch {}
    }
  }, [g]);
  ge.useEffect(() => {
    if (!to.current && f.length !== 0) {
      to.current = true;
      try {
        const e = localStorage.getItem("tm_last_userId");
        if (e) {
          const t = f.findIndex(t => String(t.uid || t.id) === e);
          if (t >= 0 && t !== Se) {
            we(t);
          }
        }
      } catch {}
    }
  }, [f]);
  ge.useEffect(() => {
    if (g.length > 0 && ve >= g.length) {
      be(g.length - 1);
    }
  }, [ve, g.length]);
  ge.useEffect(() => {
    try {
      const e = g[ve];
      if (e) {
        localStorage.setItem("tm_last_charId", String(e.id));
      }
      sessionStorage.setItem("tm_last_charIndex", String(ve));
    } catch {}
  }, [ve, g]);
  ge.useEffect(() => {
    try {
      const e = f[Se];
      if (e) {
        localStorage.setItem("tm_last_userId", String(e.uid || e.id));
      }
      sessionStorage.setItem("tm_last_userIndex", String(Se));
    } catch {}
  }, [Se, f]);
  ge.useEffect(() => {
    if (!y || f.length === 0) {
      return;
    }
    const e = f.findIndex(e => (e.uid || e.id) === y);
    if (e !== -1 && e !== Se) {
      we(e);
    }
  }, [y, f]);
  ge.useEffect(() => {
    Cr.current = N;
  }, [N]);
  ge.useEffect(() => {
    Rr.current = na;
  }, [na]);
  fr.current = je;
  He({
    containerId: "this-moment-screen",
    onAfterApply: () => {
      const e = document.activeElement;
      const t = hr.current && e && hr.current.contains(e);
      if (hr.current && !t) {
        hr.current.scrollTop = hr.current.scrollHeight;
      }
    }
  });
  ge.useEffect(() => {
    if (!N || !zr || !y) {
      return;
    }
    if (wr.current) {
      return;
    }
    Xs(false);
    qs(new Set());
    or(false);
    ur(false);
    const e = y;
    const n = String(zr.id);
    const s = window.__tmPendingInvite;
    if (s) {
      window.__tmPendingInvite = null;
      Br.current = true;
      (async () => {
        const {
          characterId: e,
          userId: n,
          type: a,
          scenario: r,
          sourceMessages: o,
          opening: l
        } = s;
        const c = g.findIndex(t => String(t.id) === String(e));
        if (c >= 0 && c !== Lr) {
          be(c);
        }
        const d = g.find(t => String(t.id) === String(e));
        try {
          const s = Date.now();
          const c = r || C("tmInviteSessionName", "面對面時刻");
          const u = await t.add({
            userId: n,
            characterId: String(e),
            name: c,
            type: a || "this-moment",
            scenarioOutline: r || "",
            sourceContext: o ? {
              fromOnlineChat: true,
              lastOnlineMessages: o
            } : undefined,
            createdAt: s,
            lastActiveAt: s
          });
          if (r) {
            Mn(r);
          }
          sa(u);
          ra(await t.getById(u));
          Ba(false);
          Ne(Wn);
          const m = (d == null ? undefined : d.name) || "角色";
          const p = await i.get(`tm_settings_${n}_${String(e)}`).catch(() => null);
          const h = (p == null ? undefined : p.greetingText) || "";
          const g = C("tmDefaultGreeting", "*{name} 抬起頭，目光在你身上停了片刻。*\n\n「……你來了。」").replace("{name}", m);
          if (r) {
            let t = `*${r}*`;
            if (o && o.length > 0) {
              const e = o.filter(e => e.text && e.text.trim()).slice(-20).map(e => `${e.role === "user" ? "我" : m}：${e.text}`).join("\n");
              if (e) {
                t = `[之前的線上對話]\n${e}\n\n[現在轉為面對面]\n*${r}*`;
              }
            }
            const s = {
              id: Date.now(),
              role: "user",
              content: t,
              hidden: true
            };
            vr.current = true;
            _r.current = true;
            const a = [s];
            let i = null;
            if (l && l.trim()) {
              i = {
                id: Date.now() + 1,
                role: "user",
                content: l.trim()
              };
              a.push(i);
            }
            Ce(a);
            const c = await te.add(n, String(e), {
              role: "user",
              content: t,
              sessionId: u,
              hidden: true
            });
            Ce(e => e.map(e => e.id === s.id ? {
              ...e,
              id: c
            } : e));
            if (i) {
              const t = await te.add(n, String(e), {
                role: "user",
                content: i.content,
                sessionId: u
              });
              Ce(e => e.map(e => e.id === i.id ? {
                ...e,
                id: t
              } : e));
            }
            setTimeout(() => {
              if (_r.current && !wr.current) {
                _r.current = false;
                const e = fr.current;
                if (e && e.length > 0 && Dr.current) {
                  console.log("[TM] 後備觸發：自動生成開場回應");
                  Dr.current(e);
                }
              }
            }, 800);
          } else {
            if ((p == null ? undefined : p.tmAutoGreeting) !== false) {
              const t = h || g;
              const s = {
                id: Date.now(),
                role: "char",
                content: t
              };
              Ce([s]);
              te.add(n, String(e), {
                role: "char",
                content: t,
                sessionId: u
              }).then(e => {
                Ce(t => t.map(t => t.id === s.id ? {
                  ...t,
                  id: e
                } : t));
              }).catch(() => {});
            } else {
              Ce([]);
            }
            vr.current = true;
          }
          const x = await t.getByPair(n, String(e));
          ta(x);
        } catch (u) {
          console.error("[TM] 從線上聊天開啟失敗:", u);
        } finally {
          Br.current = false;
        }
      })();
    }
    Tr.current = false;
    const r = e => {
      if (e) {
        if (e.stylePreset) {
          const t = ns.find(t => t.label === e.stylePreset || t.desc === e.stylePreset || C(t.descKey) === e.stylePreset);
          Gt(t ? C(t.descKey, t.desc) : e.stylePreset);
          if (e.activeStyleKey != null) {
            Kt(e.activeStyleKey);
          } else {
            Kt(t ? "b" + ns.indexOf(t) : null);
          }
        }
        if (e.generateUserOptions != null) {
          ln(e.generateUserOptions);
        }
        if (e.genSugMode) {
          un(e.genSugMode);
        }
        if (e.genResponseCount != null) {
          hn(e.genResponseCount);
        }
        if (e.genResponseDirections) {
          vn(e.genResponseDirections);
        }
        if (e.genResponseGuidances) {
          Sn(e.genResponseGuidances);
        }
      }
    };
    const o = i.get(`tm_settings_${e}_${n}`).catch(() => null);
    Promise.all([(async () => {
      if (!s && !Br.current) {
        try {
          const s = await o;
          const a = (s == null ? undefined : s.greetingText) || "";
          let r = await t.getByPair(e, n);
          if (r.length === 0) {
            const i = await te.getByPair(e, n);
            if (!(i.length > 0)) {
              const r = (s == null ? undefined : s.tmAutoGreeting) !== false;
              const i = Date.now();
              const o = await t.add({
                userId: e,
                characterId: n,
                name: new Date(i).toLocaleDateString("zh-TW"),
                type: "this-moment",
                createdAt: i,
                lastActiveAt: i
              });
              if (r) {
                const t = C("tmDefaultGreeting", "*{name} 抬起頭，目光在你身上停了片刻。*\n\n「……你來了。」").replace("{name}", zr.name);
                const s = a || t;
                if (!a) {
                  an(s);
                }
                const r = await te.add(e, n, {
                  role: "char",
                  content: s,
                  sessionId: o
                });
                Ce([{
                  id: r,
                  role: "char",
                  content: s,
                  timestamp: i
                }]);
              } else {
                Ce([]);
              }
              ta([await t.getById(o)]);
              sa(o);
              ra(await t.getById(o));
              Ba(false);
              vr.current = true;
              return;
            }
            {
              const s = Math.min(...i.map(e => e.timestamp));
              const a = Math.max(...i.map(e => e.timestamp));
              const o = await t.add({
                userId: e,
                characterId: n,
                name: "初始故事",
                type: "this-moment",
                createdAt: s,
                lastActiveAt: a
              });
              for (const e of i) {
                await H.tmStories.update(e._id, {
                  sessionId: o
                });
              }
              r = await t.getByPair(e, n);
            }
          }
          ta(r);
          const i = r[r.length - 1];
          sa(i._id);
          ra(i);
          Ba(false);
          const l = await t.getStoriesBySession(i._id);
          if (l.length > 0) {
            Ce(l.map(e => ({
              id: e._id,
              role: e.role || "char",
              content: typeof e.content == "string" ? e.content : String(e.content || ""),
              timestamp: e.timestamp,
              ...(e.hidden ? {
                hidden: true
              } : {}),
              ...(e.hiddenByUser ? {
                hiddenByUser: true
              } : {}),
              ...(e.illustration ? {
                illustration: e.illustration
              } : {}),
              ...(e.rerollSlotId ? {
                rerollSlotId: e.rerollSlotId,
                rerollVariantIndex: e.rerollVariantIndex ?? 0
              } : {}),
              ...(e.hasThinking ? {
                hasThinking: true
              } : {}),
              ...(e.pendingSoloUpgrade ? {
                pendingSoloUpgrade: e.pendingSoloUpgrade
              } : {})
            })));
            vr.current = true;
          } else {
            if ((s == null ? undefined : s.tmAutoGreeting) !== false) {
              const t = C("tmDefaultGreeting", "*{name} 抬起頭，目光在你身上停了片刻。*\n\n「……你來了。」").replace("{name}", zr.name);
              const s = a || t;
              if (!a) {
                an(s);
              }
              const r = {
                id: Date.now(),
                role: "char",
                content: s
              };
              Ce([r]);
              te.add(e, n, {
                role: "char",
                content: s,
                sessionId: i._id
              }).then(e => {
                Ce(t => t.map(t => t.id === r.id ? {
                  ...t,
                  id: e
                } : t));
              }).catch(() => {});
            } else {
              Ce([]);
            }
            vr.current = true;
          }
        } catch (a) {
          console.error("[TM] 分頁/故事載入失敗:", a);
          Ce([]);
          ta([]);
          sa(null);
          ra(null);
          vr.current = false;
        }
      }
    })(), o, i.get("tm_shared_style").catch(() => null), a.get(e, n).catch(() => null), i.get("tm_custom_style_presets").catch(() => null), i.get("tm_custom_directions").catch(() => null), i.get(`tm_theme_char_${n}`).catch(() => null), i.get("tm_css_presets").catch(() => null)]).then(async ([, e, t, n, s, a, o, l]) => {
      if (e) {
        if (e.minLength != null) {
          wt(e.minLength);
        }
        if (e.maxLength != null) {
          Ht(e.maxLength);
        }
        if (e.aestheticPreset) {
          tn(e.aestheticPreset);
        }
        if (e.greetingText != null) {
          an(e.greetingText);
        }
        if (e.scenarioOutline != null && !_r.current) {
          Mn(e.scenarioOutline);
        }
        if (e.tmAutoSceneUpdate != null) {
          Rn(e.tmAutoSceneUpdate);
        }
        if (e.tmRerollVariantsEnabled != null) {
          Hn(!!e.tmRerollVariantsEnabled);
        }
        if (e.contextLength != null) {
          Qn(e.contextLength);
          ts(String(e.contextLength));
        }
        if (e.tmAutoSummary != null) {
          ls(e.tmAutoSummary);
        }
        if (e.tmSummaryFrequency != null) {
          ds(e.tmSummaryFrequency);
        }
        if (e.tmSummaryInstructions != null) {
          Ss(e.tmSummaryInstructions);
        }
        if (e.consolePanelEnabled != null) {
          Is(e.consolePanelEnabled);
        }
        if (e.thinkingPanelEnabled != null) {
          Es(!!e.thinkingPanelEnabled);
        }
        $s(e.thinkingPresetId || "");
        Ps(e.customThinkingPrompt || "");
        if (e.realTimeAware != null) {
          _s(e.realTimeAware);
        }
        if (e.autoDatePagination != null) {
          ka(e.autoDatePagination);
        }
        if (e.tmAutoGreeting != null) {
          Ia(e.tmAutoGreeting);
        }
        if (e.tmCgEnabled != null) {
          $a(e.tmCgEnabled);
        }
        if (e.tmCgMode === "combined" || e.tmCgMode === "separate") {
          Pa(e.tmCgMode);
        }
        if (e.tmAllowOnlineActs != null) {
          _a(!!e.tmAllowOnlineActs);
        } else {
          _a(false);
        }
        if (e.tmVoiceEnabled != null) {
          tr(e.tmVoiceEnabled);
        }
        if (e.tmVoiceAutoPlay != null) {
          sr(e.tmVoiceAutoPlay);
        }
        if (e.tmVoiceMode != null) {
          rr(Vn(e.tmVoiceMode));
        }
        if (["off", "suggest", "auto"].includes(e.soloUpgradeMode)) {
          Ea(e.soloUpgradeMode);
        } else {
          Ea("off");
        }
      }
      if (t) {
        r(t);
      } else if (e && (e.stylePreset || e.generateUserOptions != null || e.genResponseDirections)) {
        const t = {};
        if (e.stylePreset) {
          t.stylePreset = e.stylePreset;
        }
        if (e.activeStyleKey != null) {
          t.activeStyleKey = e.activeStyleKey;
        }
        if (e.generateUserOptions != null) {
          t.generateUserOptions = e.generateUserOptions;
        }
        if (e.genResponseCount != null) {
          t.genResponseCount = e.genResponseCount;
        }
        if (e.genResponseDirections) {
          t.genResponseDirections = e.genResponseDirections;
        }
        if (e.genResponseGuidances) {
          t.genResponseGuidances = e.genResponseGuidances;
        }
        r(t);
        i.set("tm_shared_style", t);
      }
      Bs(!!(n == null ? undefined : n.autoTranslate));
      if (Array.isArray(s)) {
        Zt(s);
      }
      if (Array.isArray(a)) {
        kn(a);
      }
      if (o == null ? undefined : o.css) {
        Fa(o.css);
        Wa(o.name || "");
      } else {
        Fa("");
        Wa("");
      }
      if (Array.isArray(l)) {
        qa(l);
      }
      Tr.current = true;
      or(true);
    }).catch(e => {
      console.error("[TM] 資料載入失敗:", e);
      Tr.current = true;
      or(true);
    });
  }, [N, zr == null ? undefined : zr.id, y, mr]);
  ge.useEffect(() => {
    if (!N || ir) {
      return;
    }
    if (x && g.length === 0) {
      return;
    }
    const e = setTimeout(() => {
      try {
        Oe("tm-load-stuck", new Error(`TM dataReady stuck: activeChar=${(zr == null ? undefined : zr.id) || "null"} userId=${y || "null"} charsLen=${g.length}`));
      } catch (e) {}
      ur(true);
    }, 8000);
    return () => clearTimeout(e);
  }, [N, ir, x, g.length, zr == null ? undefined : zr.id, y]);
  const no = ge.useCallback(() => {
    if (N && Tr.current && zr && y) {
      clearTimeout(kr.current);
      kr.current = setTimeout(() => {
        i.set(`tm_settings_${y}_${String(zr.id)}`, {
          minLength: bt,
          maxLength: Wt,
          aestheticPreset: en,
          greetingText: nn,
          scenarioOutline: In,
          tmAutoSceneUpdate: Pn,
          tmRerollVariantsEnabled: Fn,
          contextLength: Zn,
          tmAutoSummary: os,
          tmSummaryFrequency: cs,
          tmSummaryInstructions: hs,
          consolePanelEnabled: Ns,
          thinkingPanelEnabled: Ts,
          realTimeAware: Rs,
          thinkingPresetId: As,
          customThinkingPrompt: Ms,
          autoDatePagination: Ca,
          tmAutoGreeting: Na,
          tmVoiceEnabled: er,
          tmVoiceAutoPlay: nr,
          tmVoiceMode: Vn(ar),
          tmCgEnabled: Aa,
          tmCgMode: Ma,
          tmAllowOnlineActs: Ra,
          soloUpgradeMode: Ta
        });
        i.set("tm_shared_style", {
          stylePreset: Vt,
          activeStyleKey: Yt,
          generateUserOptions: rn,
          genSugMode: cn,
          genResponseCount: mn,
          genResponseDirections: xn,
          genResponseGuidances: bn
        });
      }, 600);
    }
  }, [N, zr == null ? undefined : zr.id, y, bt, Wt, Vt, Yt, en, nn, In, Pn, Fn, Zn, rn, cn, mn, xn, bn, os, cs, hs, Ns, Ts, Rs, As, Ms, Ca, Na, er, nr, ar, Aa, Ma, Ra, Ta]);
  ge.useEffect(() => {
    no();
  }, [no]);
  ge.useLayoutEffect(() => {
    const e = "tm-custom-css-style";
    const t = document.getElementById(e);
    if (t) {
      t.remove();
    }
    if (N && (Oa == null ? undefined : Oa.trim())) {
      const t = document.createElement("style");
      t.id = e;
      t.textContent = st(Oa);
      document.head.appendChild(t);
    }
    return () => {
      var t;
      if ((t = document.getElementById(e)) != null) {
        t.remove();
      }
    };
  }, [N, Oa, en]);
  ge.useEffect(() => {
    if (!N || !nn || !Tr.current || !na) {
      return;
    }
    if (je.length !== 1) {
      return;
    }
    const e = je[0];
    if (e.role === "char" && e.content !== nn) {
      Ce([{
        ...e,
        content: nn
      }]);
      if (typeof e.id == "number") {
        te.updateContent(e.id, nn).catch(() => {});
      }
    }
  }, [N, nn, na]);
  ge.useEffect(() => {
    try {
      localStorage.setItem("tm_no_animations", Ls ? "1" : "0");
    } catch {}
  }, [Ls]);
  const so = Gs ? Hs : Hs.filter(e => e.level === "warn" || e.level === "error");
  const ao = ge.useMemo(() => {
    const e = {
      classic: {
        toggleBg: "rgba(255,255,255,0.86)",
        toggleText: "#2c2c2e",
        toggleBorder: "rgba(0,0,0,0.08)",
        panelBg: "rgba(255,255,255,0.94)",
        panelText: "#2c2c2e",
        subText: "rgba(44,44,46,0.68)",
        lineBorder: "rgba(44,44,46,0.10)",
        controlsBg: "rgba(44,44,46,0.08)",
        controlsText: "#2c2c2e",
        controlsBorder: "rgba(44,44,46,0.14)"
      },
      "magazine-dark": {
        toggleBg: "rgba(244,240,232,0.92)",
        toggleText: "#3d3b38",
        toggleBorder: "rgba(61,59,56,0.16)",
        panelBg: "rgba(246,242,235,0.95)",
        panelText: "#332f2a",
        subText: "rgba(51,47,42,0.64)",
        lineBorder: "rgba(61,59,56,0.13)",
        controlsBg: "rgba(61,59,56,0.08)",
        controlsText: "#3d3b38",
        controlsBorder: "rgba(61,59,56,0.16)"
      },
      "apple-green": {
        toggleBg: "rgba(243,251,238,0.90)",
        toggleText: "#2e4d25",
        toggleBorder: "rgba(90,138,72,0.22)",
        panelBg: "rgba(245,252,240,0.95)",
        panelText: "#2d4e24",
        subText: "rgba(74,140,49,0.70)",
        lineBorder: "rgba(90,138,72,0.18)",
        controlsBg: "rgba(107,168,82,0.12)",
        controlsText: "#346529",
        controlsBorder: "rgba(90,138,72,0.22)"
      },
      "winter-snow": {
        toggleBg: "rgba(248,251,255,0.90)",
        toggleText: "#3f4a57",
        toggleBorder: "rgba(90,104,120,0.18)",
        panelBg: "rgba(247,250,254,0.95)",
        panelText: "#3f4a57",
        subText: "rgba(90,104,120,0.72)",
        lineBorder: "rgba(120,134,150,0.18)",
        controlsBg: "rgba(135,154,176,0.12)",
        controlsText: "#4b5869",
        controlsBorder: "rgba(120,134,150,0.20)"
      }
    };
    return e[en] || e["winter-snow"];
  }, [en]);
  const ro = ge.useCallback(e => e === "error" ? "#d32f2f" : e === "warn" ? "#b26a00" : "#2f6fb2", []);
  const io = ge.useCallback(e => {
    if (typeof e == "string") {
      return e;
    }
    if (e instanceof Error) {
      return e.stack || e.message;
    }
    try {
      return JSON.stringify(e);
    } catch {
      return String(e);
    }
  }, []);
  const oo = ge.useRef(Gs);
  ge.useEffect(() => {
    oo.current = Gs;
  }, [Gs]);
  ge.useEffect(() => {
    if (!Ns) {
      Fs(false);
    }
  }, [Ns]);
  ge.useEffect(() => {
    const e = [];
    let t = null;
    const n = () => {
      t = null;
      if (e.length === 0) {
        return;
      }
      const n = e.splice(0);
      Vs(e => [...e, ...n].slice(-300));
    };
    const s = (s, a) => {
      if (s !== "warn" && s !== "error" && !oo.current) {
        return;
      }
      const r = a.map(io).join(" ");
      const i = {
        id: `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        level: s,
        text: r,
        time: new Date().toLocaleTimeString()
      };
      e.push(i);
      t ||= setTimeout(n, 500);
    };
    const a = console.log;
    const r = console.info;
    const i = console.debug;
    const o = console.warn;
    const l = console.error;
    console.log = (...e) => {
      s("log", e);
      a(...e);
    };
    console.info = (...e) => {
      s("info", e);
      r(...e);
    };
    console.debug = (...e) => {
      s("debug", e);
      i(...e);
    };
    console.warn = (...e) => {
      s("warn", e);
      o(...e);
    };
    console.error = (...e) => {
      s("error", e);
      l(...e);
    };
    const c = e => s("error", [(e == null ? undefined : e.message) || "Unknown runtime error"]);
    const d = e => s("error", [(e == null ? undefined : e.reason) || "Unhandled Promise rejection"]);
    window.addEventListener("error", c);
    window.addEventListener("unhandledrejection", d);
    return () => {
      console.log = a;
      console.info = r;
      console.debug = i;
      console.warn = o;
      console.error = l;
      window.removeEventListener("error", c);
      window.removeEventListener("unhandledrejection", d);
      if (t) {
        clearTimeout(t);
      }
      n();
    };
  }, [io]);
  const lo = ge.useRef(zr == null ? undefined : zr.id);
  ge.useEffect(() => {
    const e = zr == null ? undefined : zr.id;
    if (lo.current !== e) {
      if (br.current) {
        br.current.abort();
      }
      clearTimeout(yr.current);
      clearTimeout(kr.current);
      clearTimeout(Pr.current);
      Nr.current.forEach(e => e.abort());
      lo.current = e;
    }
  }, [zr == null ? undefined : zr.id]);
  ge.useLayoutEffect(() => {
    const e = Er.current;
    const t = hr.current;
    if (!e || !t) {
      return;
    }
    const n = t.scrollHeight - e.prevScrollHeight;
    t.scrollTop = Math.max(0, e.prevScrollTop + n - 48);
    Er.current = null;
    Ar.current = false;
  }, [Qr.length]);
  const co = ge.useCallback(() => {
    $r.current = true;
    clearTimeout(Pr.current);
    Pr.current = setTimeout(() => {
      $r.current = false;
    }, 250);
  }, []);
  const uo = ge.useCallback(e => {
    co(e);
    qi();
  }, [co, qi]);
  const mo = ge.useCallback(e => {
    const t = e.currentTarget;
    if (t) {
      if (wr.current && $r.current) {
        const e = t.scrollHeight - t.scrollTop - t.clientHeight;
        Mr.current = e > 80;
      }
      if (!(Zr <= 0) && !Ar.current && !!$r.current && !(t.scrollTop > 40)) {
        Ar.current = true;
        Er.current = {
          prevScrollHeight: t.scrollHeight,
          prevScrollTop: t.scrollTop
        };
        Ne(e => e + 10);
      }
    }
  }, [Zr]);
  const po = ge.useCallback(() => {
    if (!Mr.current) {
      requestAnimationFrame(() => {
        if (hr.current) {
          hr.current.scrollTop = hr.current.scrollHeight;
        }
      });
    }
  }, []);
  ge.useEffect(po, [je.length, po]);
  ge.useEffect(() => {
    if (!Ee) {
      return;
    }
    const e = hr.current;
    if (!e) {
      return;
    }
    let t = null;
    let n = null;
    const s = new MutationObserver(() => {
      if (t === null && n === null) {
        n = setTimeout(() => {
          n = null;
          t = requestAnimationFrame(() => {
            t = null;
            po();
          });
        }, 200);
      }
    });
    s.observe(e, {
      childList: true,
      subtree: true,
      characterData: true
    });
    return () => {
      s.disconnect();
      if (t !== null) {
        cancelAnimationFrame(t);
      }
      if (n !== null) {
        clearTimeout(n);
      }
    };
  }, [Ee, po]);
  ge.useEffect(() => {
    if (!ir || la === "multi" && !lr) {
      return;
    }
    if (!hr.current) {
      return;
    }
    Mr.current = false;
    $r.current = false;
    let e = false;
    let t = null;
    const n = performance.now();
    const s = () => {
      if (e) {
        return;
      }
      const a = hr.current;
      if (a) {
        const e = a.scrollHeight - a.scrollTop - a.clientHeight;
        if ($r.current && e > 80) {
          return;
        }
        a.scrollTop = a.scrollHeight;
      }
      if (performance.now() - n < 600) {
        t = requestAnimationFrame(s);
      }
    };
    t = requestAnimationFrame(s);
    return () => {
      e = true;
      if (t !== null) {
        cancelAnimationFrame(t);
      }
    };
  }, [ir, la, lr, zr == null ? undefined : zr.id, y]);
  ge.useLayoutEffect(() => {
    const e = hr.current;
    if (e && e.scrollHeight - e.scrollTop - e.clientHeight <= 120) {
      e.scrollTop = e.scrollHeight;
    }
  }, [Ks]);
  const ho = ge.useCallback(async (e, s = {}) => {
    var r;
    var i;
    var o;
    const l = y;
    const c = String(zr == null ? undefined : zr.id);
    if (!l || !c || !zr) {
      return;
    }
    const d = Rr.current;
    const u = ++Sr.current;
    Ae(true);
    wr.current = true;
    const m = Date.now() + 1;
    jr.current = m;
    Ce(e => [...e, {
      id: m,
      role: "char",
      content: "",
      timestamp: Date.now()
    }]);
    const p = new AbortController();
    br.current = p;
    let h = "";
    let x = 0;
    try {
      const b = await a.get(l, c).catch(() => null);
      const k = G(await S(), b);
      if (!k.mainApiUrl || !k.mainApiKey) {
        Ce(e => e.map(e => e.id === m ? {
          ...e,
          content: "⚠️ 請先在設定中配置 API（URL 和 Key）"
        } : e));
        return;
      }
      const N = Kn(b, Rs);
      let I = false;
      try {
        const e = `nuojiji_couples_${l}_${c}`;
        I = !!JSON.parse(localStorage.getItem(e) || "{}").isUnlocked;
      } catch {}
      const T = await Qt({
        character: zr,
        user: Or,
        userId: l,
        storyEntries: e,
        settings: {
          contextLength: Zn,
          minLength: bt,
          maxLength: Wt,
          stylePreset: Vt,
          scenarioOutline: In,
          realTimeAware: Rs,
          tmAutoSceneUpdate: Pn,
          tmAllowOnlineActs: Ra,
          thinkingPresetId: As,
          customThinkingPrompt: Ms,
          soloUpgradeMode: Ta
        },
        allCharacters: g,
        globalLanguage: j,
        weatherData: N,
        storyTimeData: oi.hasStoryTime ? oi : null,
        tmImageEnabled: Ci,
        sessionId: Rr.current,
        couplesUnlocked: I,
        apiSettings: hi,
        spectate: (aa == null ? undefined : aa.spectate) === true,
        rerollFeedback: s.rerollFeedback || ""
      });
      const A = ((r = T.__memoryMeta) == null ? undefined : r.activeFollowUps) || [];
      const $ = A.length > 0 ? {
        userId: l,
        charId: c,
        summaryIds: A.map(e => e.summaryId),
        texts: A.map(e => e.text)
      } : null;
      if ($) {
        console.log("[TM] 💭 待標記掛念（AI 成功後生效）:", $.texts);
      }
      const M = rn && cn === "combined";
      if (M) {
        const e = mn;
        const t = xn.slice(0, e);
        const s = bn.slice(0, e);
        const a = await n.get(l, c).catch(() => null);
        const r = (a == null ? undefined : a.userFacts) || [];
        const i = Ke(Or, r);
        const o = i ? `\n"${Or.name}"'s profile:\n${i}\n` : "";
        const d = t.map((e, t) => {
          var n;
          const a = Xe[e] || "";
          return `[${t + 1}] ${a ? `${e} — ${a}` : e || "freestyle"}${((n = s[t]) == null ? undefined : n.trim()) ? ` (${s[t].trim()})` : ""}`;
        }).join("\n");
        const u = `\n\n[IMPORTANT: After your character response is COMPLETELY finished, output this exact delimiter on a new line:\n${Je}\nThen write ${e} short responses as "${Or.name}" (the user), matching their personality and tone. Each 10-50 Chinese characters. Format:\n[1] response\n[2] response\n${o}\nDirections:\n${d}]`;
        const m = T.length - 1;
        if (m >= 0) {
          T[m] = {
            ...T[m],
            content: T[m].content + u
          };
        }
        as(t.map((e, t) => ({
          direction: e || "自由發揮",
          guidance: s[t] || "",
          text: "",
          status: "loading"
        })));
        is(false);
      }
      const P = T.find(e => e.role === "system");
      x = ((i = P == null ? undefined : P.content) == null ? undefined : i.length) || 0;
      const R = T.reduce((e, t) => {
        var n;
        return e + (((n = t.content) == null ? undefined : n.length) || 0);
      }, 0);
      console.warn(`[TM] Prompt 資訊: 訊息數=${T.length}, System Prompt=${x}字, 總計=${R}字`);
      try {
        console.groupCollapsed(`🚀 [TM] AI Request Payload (msgs=${T.length}, total=${R}字)`);
      } catch {}
      console.log("[TM] System Prompt:", (P == null ? undefined : P.content) || "");
      console.log("[TM] AI Messages (array):", T);
      T.forEach((e, t) => {
        const n = e.role || "?";
        const s = typeof e.content == "string" ? e.content.length : 0;
        try {
          console.groupCollapsed(`[TM] [#${t}] ${n} · ${s}字`);
        } catch {}
        console.log((e.content, e.content));
        try {
          console.groupEnd();
        } catch {}
      });
      try {
        console.groupEnd();
      } catch {}
      let _ = false;
      let D = "";
      let B = null;
      const L = await w({
        messages: T,
        settings: k,
        preferStreaming: true,
        signal: p.signal,
        onStream: e => {
          if (!p.signal.aborted) {
            h += e;
            B ||= requestAnimationFrame(() => {
              B = null;
              let e = h;
              if (M) {
                const t = e.indexOf(Je);
                if (t !== -1) {
                  e = e.substring(0, t);
                }
              }
              const t = sn(e);
              Ce(e => e.map(e => e.id === m ? {
                ...e,
                content: t
              } : e));
            });
          }
        },
        onComplete: (e, t) => {
          _ = (t == null ? undefined : t.truncated) || false;
          if (_) {
            console.warn("[TM] 回應被截斷 (finish_reason:", t == null ? undefined : t.finishReason, ")，將自動續寫");
          }
          if (t == null ? undefined : t.reasoningContent) {
            D = String(t.reasoningContent);
          }
        }
      });
      if (B) {
        cancelAnimationFrame(B);
        B = null;
      }
      if (!h && L) {
        h = L;
        const e = sn(h);
        Ce(t => t.map(t => t.id === m ? {
          ...t,
          content: e
        } : t));
      }
      if (_) {
        console.warn(`[TM] 回應被截斷（${h.length} 字）`);
      }
      if (l !== y) {
        console.warn("[TM] 使用者已切換，跳過回應處理");
        return;
      }
      if (p.signal.aborted) {
        return;
      }
      let z = h;
      console.log("[TM] Raw response length:", z.length, "| raw:", z.slice(0, 200));
      try {
        console.groupCollapsed(`📥 [TM] AI Raw Response (${z.length}字)`);
      } catch {}
      console.log(z);
      try {
        console.groupEnd();
      } catch {}
      if (M) {
        const e = z.indexOf(Je);
        if (e !== -1) {
          const t = z.substring(e + Je.length);
          z = z.substring(0, e);
          const n = mn;
          const s = qe(t, n);
          const a = xn.slice(0, n);
          const r = bn.slice(0, n);
          as(s.map((e, t) => ({
            direction: a[t] || "自由發揮",
            guidance: r[t] || "",
            text: e || "",
            status: e ? "done" : "error"
          })));
          is(true);
          console.log("[TM Combined] 建議解析完成:", s.length, "條");
        } else {
          console.warn("[TM Combined] 未找到建議分隔符");
          as(e => e.map(e => ({
            ...e,
            status: "error"
          })));
        }
      }
      let O = sn(z);
      console.log("[TM] Cleaned response length:", (O == null ? undefined : O.length) || 0);
      let F = null;
      try {
        const e = Ta;
        if (e !== "off") {
          const t = Jt(zr, g);
          const n = Xt(O, {
            joinPool: t,
            leavePool: []
          });
          O = n.cleanText;
          if (n.join) {
            if (e === "auto") {
              const e = g.find(e => String(e.id) === String(n.join.charId));
              if (e) {
                F = {
                  autoApply: true,
                  newCharObj: e,
                  joinReason: n.join.reason || ""
                };
              }
            } else {
              F = {
                autoApply: false,
                join: n.join,
                status: "pending"
              };
            }
          }
        } else {
          const e = Xt(O, {
            joinPool: [],
            leavePool: []
          });
          O = e.cleanText;
        }
      } catch (f) {
        console.warn("[SoloUpgrade] parse 失敗:", f);
      }
      const U = Fe(z).thinkingText || "";
      const W = [String(D || "").trim(), String(U || "").trim()].filter(Boolean).join("\n\n") || null;
      if (W) {
        console.log("[TM] 💭 AI Thinking captured:", W.length, "chars");
      }
      if ($ && O && O.length > 0) {
        n.markFollowUpsShown($.userId, $.charId, $.summaryIds).then(() => console.log("[TM] 💭 掛念已標記為提起:", $.texts)).catch(e => console.warn("[TM] markFollowUpsShown 失敗:", e));
      }
      if (!O) {
        if (z && z.trim().length > 0) {
          console.warn("[TM] AI 回應只含標籤或 thinking，無故事正文。原始長度:", z.length);
          E(C("tmTagsOnlyResponse", "AI 回應只輸出了系統標籤，沒有故事內容。請重新生成。"));
        } else {
          console.warn("[TM] 回應清理後為空，移除空條目");
        }
        Ce(e => e.filter(e => e.id !== m));
        await pn(z, l, c, zr, g, Cr.current, {
          onSceneUpdate: e => {
            if (_n.current) {
              Mn(e);
            }
          },
          onTimeShift: e => oi.handleTimeShift(e),
          onAchievement: e => Vi(e, l, c)
        });
        return;
      }
      const H = Ts && !!W;
      const V = F && !F.autoApply ? {
        join: F.join,
        status: "pending"
      } : null;
      Ce(e => e.map(e => e.id === m ? {
        ...e,
        content: O,
        ...(H ? {
          hasThinking: true
        } : {}),
        ...(V ? {
          pendingSoloUpgrade: V
        } : {})
      } : e));
      await pn(z, l, c, zr, g, Cr.current, {
        onSceneUpdate: e => {
          if (_n.current) {
            Mn(e);
          }
        },
        onTimeShift: e => oi.handleTimeShift(e),
        onCgRequest: e => Gi(e, jr.current),
        onAchievement: e => Vi(e, l, c)
      });
      if (Sr.current !== u) {
        console.warn("[TM] 此次生成已被取代，跳過 DB 寫入");
        return;
      }
      let K = null;
      try {
        const e = await te.add(l, c, {
          role: "char",
          content: O,
          sessionId: d,
          ...(H ? {
            hasThinking: true
          } : {}),
          ...(V ? {
            pendingSoloUpgrade: V
          } : {})
        });
        K = e;
        Ce(t => t.map(t => t.id === m ? {
          ...t,
          id: e
        } : t));
        if (H) {
          Y.put(Y.tmKey(e), W, "tm").catch(e => console.warn("[TM Thinking] save failed:", e));
        }
        if (d) {
          t.update(d, {
            lastActiveAt: Date.now()
          }).catch(() => {});
        }
      } catch (v) {
        console.error("TmStory save error:", v);
      }
      if ((F == null ? undefined : F.autoApply) && F.newCharObj) {
        zi({
          newCharObj: F.newCharObj,
          joinReason: F.joinReason
        }).catch(e => console.warn("[SoloUpgrade] auto 升級失敗:", e));
      }
      if (er && nr) {
        const e = K ?? m;
        const {
          original: t
        } = qn(O);
        ai.autoPlayEntry(e, t).catch(e => console.warn("[TM Voice] 自動播放失敗:", e.message));
      }
      if (!Cr.current || !!document.hidden) {
        window.dispatchEvent(new CustomEvent("show-notification", {
          detail: {
            name: zr.name,
            message: O.substring(0, 100),
            charId: zr.id,
            avatar: zr.image || zr.avatar,
            timestamp: Date.now(),
            screen: "this-moment-screen"
          }
        }));
      }
      const X = [...e, {
        id: m,
        role: "char",
        content: O
      }];
      if (os) {
        Xn(l, c, zr, Or, X, cs, j, hs, null, Rr.current, Rs, (aa == null ? undefined : aa.spectate) === true).catch(e => console.error("[TM] 自動摘要觸發失敗:", e));
      }
      if (rn && cn !== "combined") {
        if ((o = Ir.current) != null) {
          o.call(Ir, [...e, {
            id: m,
            role: "char",
            content: O
          }]);
        }
      }
    } catch (f) {
      const e = sn(h);
      const t = p.signal.aborted;
      const n = Sr.current !== u;
      if (t) {
        if (!n && e && e.length > 10) {
          Ce(t => t.map(t => t.id === m ? {
            ...t,
            content: e
          } : t));
          try {
            const t = await te.add(l, c, {
              role: "char",
              content: e,
              sessionId: d
            });
            Ce(e => e.map(e => e.id === m ? {
              ...e,
              id: t
            } : e));
          } catch (b) {
            console.error("[TM] 部分內容保存失敗:", b);
          }
        } else {
          Ce(e => e.filter(e => e.id !== m));
        }
      } else if (!n && e && e.length > 10) {
        console.warn("[TM] 生成中斷，保存已接收的部分內容 (" + e.length + " 字元):", f.message);
        Ce(t => t.map(t => t.id === m ? {
          ...t,
          content: e
        } : t));
        try {
          const t = await te.add(l, c, {
            role: "char",
            content: e,
            sessionId: d
          });
          Ce(e => e.map(e => e.id === m ? {
            ...e,
            id: t
          } : e));
        } catch (b) {
          console.error("[TM] 部分內容保存失敗:", b);
        }
      } else {
        const e = /\b429\b/.test(f.message);
        const t = /reasoning/i.test(f.message) && /empty content/i.test(f.message);
        const n = e ? "API 頻率限制 (429)，請稍後再試" : t ? C("tmReasoningOnlyError", "模型只輸出了思考過程（reasoning）而沒有生成正式回覆，請重試或更換模型。") : f.message;
        console.warn(`[TM] 生成失敗，移除空條目: ${n} (Prompt=${x || "?"}字)`);
        if (e || t) {
          E(n);
          Ce(e => e.filter(e => e.id !== m));
        } else {
          Ce(e => e.filter(e => e.id !== m));
        }
      }
    } finally {
      if (Sr.current === u) {
        Ae(false);
        wr.current = false;
        br.current = null;
        Mr.current = false;
      }
    }
  }, [y, zr, Or, g, Zn, bt, Wt, Vt, In, rn, cn, mn, xn, bn, os, cs, hs, Ci, hi, Gi, Rs, j, oi, Vi, er, nr, ai, Ra]);
  Dr.current = ho;
  ge.useEffect(() => {
    if (_r.current && N && !wr.current && je.length !== 0) {
      _r.current = false;
      setTimeout(() => {
        if (!wr.current) {
          ho(je);
        }
      }, 300);
    }
  }, [N, je, ho]);
  const go = ge.useCallback(async e => {
    const t = y;
    const n = String(zr == null ? undefined : zr.id);
    if (!t || !n || !zr) {
      return;
    }
    const s = mn;
    const r = xn.slice(0, s);
    const i = bn.slice(0, s);
    const o = r.map((e, t) => ({
      direction: e || "自由發揮",
      guidance: i[t] || "",
      text: "",
      status: "loading"
    }));
    as(o);
    is(false);
    Nr.current.forEach(e => e.abort());
    Nr.current = [];
    const l = await a.get(t, n).catch(() => null);
    let c;
    try {
      c = G(await S(), l);
    } catch {
      return;
    }
    if (!c.mainApiUrl || !c.mainApiKey) {
      return;
    }
    const d = Kn(l, Rs);
    const u = (l == null ? undefined : l.userFacts) || [];
    const m = Ke(Or, u);
    let p;
    try {
      p = await Qt({
        character: zr,
        user: Or,
        userId: t,
        storyEntries: e,
        settings: {
          contextLength: Zn,
          minLength: bt,
          maxLength: Wt,
          stylePreset: Vt,
          scenarioOutline: In,
          realTimeAware: Rs,
          tmAutoSceneUpdate: Pn,
          tmAllowOnlineActs: Ra,
          thinkingPresetId: As,
          customThinkingPrompt: Ms,
          soloUpgradeMode: Ta
        },
        allCharacters: g,
        globalLanguage: j,
        appendUserCue: false,
        weatherData: d,
        storyTimeData: oi.hasStoryTime ? oi : null,
        tmImageEnabled: Ci,
        sessionId: Rr.current,
        apiSettings: c,
        spectate: (aa == null ? undefined : aa.spectate) === true
      });
    } catch {
      return;
    }
    const h = new AbortController();
    Nr.current.push(h);
    const x = s === 1 ? Ze(r[0], Or.name, zr.name, i[0], m) : Qe(r, Or.name, zr.name, i, m);
    const f = [...p, {
      role: "user",
      content: x
    }];
    try {
      const e = await w({
        messages: f,
        settings: c,
        preferStreaming: false,
        signal: h.signal
      });
      if (h.signal.aborted) {
        return;
      }
      if (s === 1) {
        const t = et(e);
        as(e => e.map((e, n) => n === 0 ? {
          ...e,
          text: t,
          status: "done"
        } : e));
      } else {
        const t = qe(e, s);
        as(e => e.map((e, n) => ({
          ...e,
          text: t[n] || "",
          status: t[n] ? "done" : "error"
        })));
      }
    } catch (v) {
      if (v.name !== "AbortError" && !h.signal.aborted) {
        as(e => e.map(e => ({
          ...e,
          status: "error"
        })));
      }
    }
  }, [y, zr, Or, g, Zn, bt, Wt, Vt, In, Rs, mn, xn, bn, Ci, hi, j, oi, Ra]);
  Ir.current = go;
  const xo = ge.useCallback(async e => {
    var t;
    var n;
    const s = y;
    const r = String(zr == null ? undefined : zr.id);
    if (!s || !r || !zr) {
      return;
    }
    const i = (t = ss[e]) == null ? undefined : t.direction;
    const o = ((n = ss[e]) == null ? undefined : n.guidance) || "";
    if (!i) {
      return;
    }
    as(t => t.map((t, n) => n === e ? {
      ...t,
      text: "",
      status: "loading"
    } : t));
    if (Nr.current[e]) {
      Nr.current[e].abort();
    }
    const l = await a.get(s, r).catch(() => null);
    let c;
    try {
      c = G(await S(), l);
    } catch {
      return;
    }
    if (!c.mainApiUrl || !c.mainApiKey) {
      return;
    }
    const d = Kn(l, Rs);
    const u = (l == null ? undefined : l.userFacts) || [];
    const m = Ke(Or, u);
    let p;
    try {
      p = await Qt({
        character: zr,
        user: Or,
        userId: s,
        storyEntries: je,
        settings: {
          contextLength: Zn,
          minLength: bt,
          maxLength: Wt,
          stylePreset: Vt,
          scenarioOutline: In,
          realTimeAware: Rs,
          tmAutoSceneUpdate: Pn,
          tmAllowOnlineActs: Ra,
          thinkingPresetId: As,
          customThinkingPrompt: Ms,
          soloUpgradeMode: Ta
        },
        allCharacters: g,
        globalLanguage: j,
        appendUserCue: false,
        weatherData: d,
        storyTimeData: oi.hasStoryTime ? oi : null,
        tmImageEnabled: Ci,
        sessionId: Rr.current,
        apiSettings: c,
        spectate: (aa == null ? undefined : aa.spectate) === true
      });
    } catch {
      return;
    }
    const h = new AbortController();
    Nr.current[e] = h;
    const x = [...p, {
      role: "user",
      content: Ze(i, Or.name, zr.name, o, m)
    }];
    w({
      messages: x,
      settings: c,
      preferStreaming: false
    }).then(t => {
      if (h.signal.aborted) {
        return;
      }
      const n = et(t);
      as(t => t.map((t, s) => s === e ? {
        ...t,
        text: n,
        status: "done"
      } : t));
    }).catch(t => {
      if (t.name !== "AbortError" && !h.signal.aborted) {
        as(t => t.map((t, n) => n === e ? {
          ...t,
          status: "error"
        } : t));
      }
    });
  }, [y, zr, Or, g, je, Zn, bt, Wt, Vt, In, ss, j, Ci, Rs, oi, Ra]);
  const fo = ge.useCallback(() => {
    as([]);
    is(false);
    Nr.current.forEach(e => e.abort());
    Nr.current = [];
  }, []);
  const yo = ge.useCallback(async e => {
    var t;
    var n;
    var s;
    const r = y;
    const i = Fr.activeSession;
    if (!r || !i) {
      return;
    }
    if (!Array.isArray(Wr) || Wr.length < 2) {
      return;
    }
    const o = i._id;
    const l = mn;
    const c = xn.slice(0, l);
    const d = bn.slice(0, l);
    if (i.spectate === true) {
      return;
    }
    const u = c.map((e, t) => ({
      direction: e || "自由發揮",
      guidance: d[t] || "",
      text: "",
      status: "loading"
    }));
    as(u);
    is(false);
    Nr.current.forEach(e => e.abort());
    Nr.current = [];
    const m = (t = Wr[0]) == null ? undefined : t.id;
    const p = m ? await a.get(r, m).catch(() => null) : null;
    let h;
    try {
      const e = G(await S(), p);
      h = b(e);
    } catch {
      return;
    }
    if (!h.mainApiUrl || !h.mainApiKey) {
      return;
    }
    const x = (p == null ? undefined : p.userFacts) || [];
    const f = Ke(Or, x);
    const v = (n = ki.current) == null ? undefined : n.isEntryVisibleForAI;
    const C = typeof v == "function" ? (e || []).filter(v) : e || [];
    let k;
    try {
      k = await fn({
        participants: Wr,
        user: Or,
        userId: r,
        storyEntries: C,
        session: i,
        settings: {
          tmImageEnabled: Ci
        },
        globalLanguage: j,
        allCharacters: g
      });
    } catch {
      return;
    }
    const N = new AbortController();
    Nr.current.push(N);
    const I = Wr.map(e => e.name).filter(Boolean).join("、");
    const T = l === 1 ? Ze(c[0], Or.name, I, d[0], f) : Qe(c, Or.name, I, d, f);
    const E = [...k, {
      role: "user",
      content: T
    }];
    try {
      const e = await w({
        messages: E,
        settings: h,
        preferStreaming: false,
        signal: N.signal
      });
      if (N.signal.aborted) {
        return;
      }
      if (y !== r || ((s = Fr.activeSession) == null ? undefined : s._id) !== o) {
        return;
      }
      if (l === 1) {
        const t = et(e);
        as(e => e.map((e, n) => n === 0 ? {
          ...e,
          text: t,
          status: "done"
        } : e));
      } else {
        const t = qe(e, l);
        as(e => e.map((e, n) => ({
          ...e,
          text: t[n] || "",
          status: t[n] ? "done" : "error"
        })));
      }
    } catch (A) {
      if (A.name !== "AbortError" && !N.signal.aborted) {
        as(e => e.map(e => ({
          ...e,
          status: "error"
        })));
      }
    }
  }, [y, Fr.activeSession, Wr, Or, g, mn, xn, bn, j, Ci]);
  const vo = ge.useRef(null);
  vo.current = yo;
  const bo = ge.useCallback(async e => {
    var t;
    var n;
    var s;
    var r;
    const i = y;
    const o = Fr.activeSession;
    if (!i || !o) {
      return;
    }
    if (!Array.isArray(Wr) || Wr.length < 2) {
      return;
    }
    const l = (t = ss[e]) == null ? undefined : t.direction;
    const c = ((n = ss[e]) == null ? undefined : n.guidance) || "";
    if (!l) {
      return;
    }
    as(t => t.map((t, n) => n === e ? {
      ...t,
      text: "",
      status: "loading"
    } : t));
    if (Nr.current[e]) {
      Nr.current[e].abort();
    }
    const d = o._id;
    const u = (s = Wr[0]) == null ? undefined : s.id;
    const m = u ? await a.get(i, u).catch(() => null) : null;
    let p;
    try {
      const e = G(await S(), m);
      p = b(e);
    } catch {
      return;
    }
    if (!p.mainApiUrl || !p.mainApiKey) {
      return;
    }
    const h = (m == null ? undefined : m.userFacts) || [];
    const x = Ke(Or, h);
    const f = (r = ki.current) == null ? undefined : r.isEntryVisibleForAI;
    const v = typeof f == "function" ? Hr.filter(f) : Hr;
    let C;
    try {
      C = await fn({
        participants: Wr,
        user: Or,
        userId: i,
        storyEntries: v,
        session: o,
        settings: {
          tmImageEnabled: Ci
        },
        globalLanguage: j,
        allCharacters: g
      });
    } catch {
      return;
    }
    const k = new AbortController();
    Nr.current[e] = k;
    const N = Wr.map(e => e.name).filter(Boolean).join("、");
    const I = [...C, {
      role: "user",
      content: Ze(l, Or.name, N, c, x)
    }];
    w({
      messages: I,
      settings: p,
      preferStreaming: false,
      signal: k.signal
    }).then(t => {
      var n;
      if (k.signal.aborted) {
        return;
      }
      if (y !== i || ((n = Fr.activeSession) == null ? undefined : n._id) !== d) {
        return;
      }
      const s = et(t);
      as(t => t.map((t, n) => n === e ? {
        ...t,
        text: s,
        status: "done"
      } : t));
    }).catch(t => {
      if (t.name !== "AbortError" && !k.signal.aborted) {
        as(t => t.map((t, n) => n === e ? {
          ...t,
          status: "error"
        } : t));
      }
    });
  }, [y, Fr.activeSession, Wr, Or, g, Hr, ss, j, Ci]);
  const So = ge.useCallback(async (e, n) => {
    if (!Ca || !Rr.current) {
      return;
    }
    const s = await t.getById(Rr.current).catch(() => null);
    if (!s) {
      return;
    }
    const a = new Date().toLocaleDateString("zh-TW");
    const r = s.dateLabel || (s.createdAt ? new Date(s.createdAt).toLocaleDateString("zh-TW") : null);
    if (r && a !== r) {
      const r = s.spectate === true;
      const i = Date.now();
      const o = await t.add({
        userId: e,
        characterId: n,
        name: r ? `🌙 ${a}` : a,
        type: "this-moment",
        createdAt: i,
        lastActiveAt: i,
        autoPaginated: true,
        dateLabel: a,
        ...(r && {
          spectate: true
        })
      });
      const l = await t.getByPair(e, n);
      ta(l);
      sa(o);
      ra(await t.getById(o));
      Ba(false);
      Ce([]);
      Ne(Wn);
      return o;
    }
    return null;
  }, [Ca]);
  const wo = ge.useCallback(async () => {
    var e;
    var n;
    if (!Da || !y || !zr) {
      return;
    }
    if ((n = (e = Xr.current) == null ? undefined : e.confirmAllSlots) != null) {
      n.call(e);
    }
    const s = y;
    const a = String(zr.id);
    const r = await t.getLatest(s, a);
    if (r) {
      sa(r._id);
      ra(r);
      Ba(false);
      const e = await t.getStoriesBySession(r._id);
      Ce(e.map(e => ({
        id: e._id,
        role: e.role || "char",
        content: typeof e.content == "string" ? e.content : String(e.content || ""),
        timestamp: e.timestamp,
        ...(e.hidden ? {
          hidden: true
        } : {}),
        ...(e.hiddenByUser ? {
          hiddenByUser: true
        } : {}),
        ...(e.illustration ? {
          illustration: e.illustration
        } : {}),
        ...(e.rerollSlotId ? {
          rerollSlotId: e.rerollSlotId,
          rerollVariantIndex: e.rerollVariantIndex ?? 0
        } : {})
      })));
      Ne(Wn);
    }
  }, [Da, y, zr]);
  const jo = async () => {
    if (la === "multi") {
      if (!Fr.activeSession) {
        E(C("tmMultiNeedSessionAlert", "請先建立或選擇一個多人場景"));
        return;
      }
      if (Wr.length < 2) {
        E(C("tmMultiNeedTwoCharsAlert", "至少需要 2 個角色"));
        return;
      }
      await Pi();
      const e = Ie.trim();
      Te("");
      await Ni.sendText(e);
      return;
    }
    const e = Ie.trim();
    const n = (aa == null ? undefined : aa.spectate) === true;
    if (!e && !n || wr.current || !zr) {
      return;
    }
    if (Da) {
      await wo();
    }
    wr.current = true;
    fo();
    const s = y;
    const a = String(zr.id);
    const r = (await So(s, a)) || Rr.current;
    const i = Jr() ?? je;
    let o = null;
    let l = i;
    if (n) {
      if (e) {
        const t = Date.now();
        o = {
          id: t,
          role: "user",
          content: `[DIRECTOR: ${e}]`,
          timestamp: t,
          director: true
        };
        l = [...i, o];
        Ce(l);
      }
    } else {
      const t = Date.now();
      o = {
        id: t,
        role: "user",
        content: e,
        timestamp: t
      };
      l = [...i, o];
      Ce(l);
    }
    Te("");
    if (xr.current) {
      xr.current.style.height = "auto";
    }
    if (o) {
      const e = o.id;
      try {
        const n = await te.add(s, a, {
          role: "user",
          content: o.content,
          sessionId: r,
          timestamp: e,
          ...(o.director && {
            director: true
          })
        });
        Ce(t => t.map(t => t.id === e ? {
          ...t,
          id: n
        } : t));
        if (r) {
          t.update(r, {
            lastActiveAt: Date.now()
          }).catch(() => {});
        }
      } catch (c) {
        console.error("TmStory save error:", c);
      }
    } else if (r) {
      t.update(r, {
        lastActiveAt: Date.now()
      }).catch(() => {});
    }
    ho(l);
  };
  const Co = ge.useCallback(e => {
    if (typeof e == "string" && e) {
      Te(e);
      requestAnimationFrame(() => {
        const t = xr.current;
        if (t) {
          t.focus();
          try {
            const n = e.length;
            t.setSelectionRange(n, n);
          } catch (n) {}
          t.style.height = "auto";
          t.style.height = Math.min(t.scrollHeight, 140) + "px";
        }
      });
    }
  }, []);
  const ko = ge.useCallback(() => {
    if (la !== "multi") {
      if (wr.current && br.current) {
        try {
          br.current.abort();
        } catch {}
        br.current = null;
      }
    } else {
      Ni.stopGenerating();
    }
  }, [la, Ni]);
  const No = ge.useCallback(async (e, t) => {
    var n;
    var s;
    const a = fr.current[e];
    if (!a) {
      return;
    }
    const r = a.id;
    if ((s = (n = Xr.current) == null ? undefined : n.confirmAllSlots) != null) {
      s.call(n);
    }
    Ce(e => e.map(e => e.id === r ? {
      ...e,
      content: t
    } : e));
    if (typeof r == "number") {
      try {
        await te.updateContent(r, t);
      } catch (i) {
        console.error("TmStory update error:", i);
      }
      ai.clearCache(r);
    }
  }, [ai]);
  const Io = ge.useCallback(async e => {
    var t;
    var n;
    const s = fr.current[e];
    if (!s) {
      return;
    }
    const a = s.id;
    if ((n = (t = Xr.current) == null ? undefined : t.confirmAllSlots) != null) {
      n.call(t);
    }
    Ce(e => e.filter(e => e.id !== a));
    if (typeof a == "number") {
      try {
        await te.deleteById(a);
      } catch (r) {
        console.error("TmStory delete error:", r);
      }
      ai.clearCache(a);
    }
  }, [ai]);
  const To = ge.useCallback(e => {
    Xs(true);
    qs(new Set([e]));
  }, []);
  const Eo = ge.useCallback(e => {
    qs(t => {
      const n = new Set(t);
      if (n.has(e)) {
        n.delete(e);
      } else {
        n.add(e);
      }
      return n;
    });
  }, []);
  const Ao = ge.useCallback(() => {
    Xs(false);
    qs(new Set());
  }, []);
  const $o = ge.useCallback(async () => {
    var e;
    var t;
    if (Js.size === 0) {
      return;
    }
    const n = new Set();
    for (const a of Js) {
      const e = je[a];
      if (e) {
        n.add(e.id);
      }
    }
    if ((t = (e = Xr.current) == null ? undefined : e.confirmAllSlots) != null) {
      t.call(e);
    }
    Ce(e => e.filter(e => !n.has(e.id)));
    Xs(false);
    qs(new Set());
    for (const a of n) {
      if (typeof a == "number") {
        try {
          await te.deleteById(a);
        } catch (s) {
          console.error("TmStory batch delete error:", s);
        }
      }
    }
  }, [Js, je]);
  const Mo = ge.useCallback(async e => {
    const t = fr.current[e];
    if (!t) {
      return;
    }
    const n = t.id;
    const s = !t.hiddenByUser;
    Ce(e => e.map(e => e.id === n ? {
      ...e,
      hiddenByUser: s
    } : e));
    if (typeof n == "number") {
      try {
        await te.updateEntry(n, {
          hiddenByUser: s
        });
      } catch (a) {
        console.error("TmStory toggle hide error:", a);
      }
    }
  }, []);
  const Po = ge.useCallback(async () => {
    if (Js.size === 0) {
      return;
    }
    const e = [];
    for (const a of Js) {
      const t = je[a];
      if (t) {
        e.push(t);
      }
    }
    if (e.length === 0) {
      return;
    }
    const t = !e.every(e => !!e.hiddenByUser);
    const n = new Set(e.map(e => e.id));
    Ce(e => e.map(e => n.has(e.id) ? {
      ...e,
      hiddenByUser: t
    } : e));
    Xs(false);
    qs(new Set());
    for (const a of e) {
      if (typeof a.id == "number") {
        try {
          await te.updateEntry(a.id, {
            hiddenByUser: t
          });
        } catch (s) {
          console.error("TmStory batch toggle hide error:", s);
        }
      }
    }
  }, [Js, je]);
  const Ro = ge.useCallback(async () => {
    var e;
    var t;
    if (!zr || ws || je.length === 0) {
      return;
    }
    const n = ((t = (e = Xr.current) == null ? undefined : e.confirmAllSlots) == null ? undefined : t.call(e)) ?? je;
    js(true);
    try {
      const e = await Xn(y, String(zr.id), zr, Or, n, 0, j, hs, null, na, Rs, (aa == null ? undefined : aa.spectate) === true);
      E(e ? `已總結 ${e.messageCount} 條故事` : "沒有新的內容需要總結");
    } catch (s) {
      console.error("[TM] 手動摘要失敗:", s);
      E("總結失敗: " + s.message);
    } finally {
      js(false);
    }
  }, [zr, Or, je, ws, y, hs]);
  const _o = ge.useCallback(async () => {
    var e;
    var t;
    if (!zr || ws || je.length === 0) {
      return;
    }
    const n = ((t = (e = Xr.current) == null ? undefined : e.confirmAllSlots) == null ? undefined : t.call(e)) ?? je;
    const s = n.length;
    let a = 1;
    try {
      const e = `tm_last_summarized_${y}_${String(zr.id)}`;
      const t = await i.get(e);
      if ((t == null ? undefined : t.lastEntryCount) > 0) {
        if (t.lastEntryCount > s) {
          await i.set(e, {
            lastEntryCount: 0,
            sessionId: t.sessionId
          });
          a = 1;
        } else {
          a = Math.min(t.lastEntryCount + 1, s);
        }
      }
    } catch {}
    const r = await ce(C("tmRangePrompt", "請輸入要總結的範圍：\n\n格式：起始-結束\n當前共 {total} 條\n上次總結到：第 {last} 條").replace("{total}", s).replace("{last}", a - 1), `${a}-${s}`);
    if (!r) {
      return;
    }
    const o = r.trim().match(/^(\d+)\s*[-–—]\s*(\d+)$/);
    if (!o) {
      E(C("tmRangeError", "格式錯誤，請使用「起始-結束」格式"));
      return;
    }
    const l = parseInt(o[1], 10);
    const c = parseInt(o[2], 10);
    if (l < 1 || c > s || l >= c) {
      E(C("tmRangeInvalid", "範圍無效（起始 ≥ 1，結束 ≤ {total}，起始 < 結束）").replace("{total}", s));
    } else {
      js(true);
      try {
        const e = await Xn(y, String(zr.id), zr, Or, n, 0, j, hs, {
          start: l,
          end: c
        }, na, Rs, (aa == null ? undefined : aa.spectate) === true);
        E(e ? C("tmRangeSuccess", "已總結第 {start}-{end} 條（共 {count} 條）").replace("{start}", l).replace("{end}", c).replace("{count}", e.messageCount) : "沒有內容可總結");
      } catch (d) {
        console.error("[TM] 範圍摘要失敗:", d);
        E("總結失敗: " + d.message);
      } finally {
        js(false);
      }
    }
  }, [zr, Or, je, ws, y, hs, j, C]);
  const Do = ge.useCallback(async e => {
    var n;
    var s;
    if (e && e._id !== na) {
      if ((s = (n = Xr.current) == null ? undefined : n.confirmAllSlots) != null) {
        s.call(n);
      }
      try {
        const n = await t.getStoriesBySession(e._id);
        Ce(n.map(e => ({
          id: e._id,
          role: e.role || "char",
          content: typeof e.content == "string" ? e.content : String(e.content || ""),
          timestamp: e.timestamp,
          ...(e.hidden ? {
            hidden: true
          } : {}),
          ...(e.hiddenByUser ? {
            hiddenByUser: true
          } : {}),
          ...(e.illustration ? {
            illustration: e.illustration
          } : {}),
          ...(e.rerollSlotId ? {
            rerollSlotId: e.rerollSlotId,
            rerollVariantIndex: e.rerollVariantIndex ?? 0
          } : {})
        })));
        sa(e._id);
        ra(e);
        Ne(Wn);
        const s = ea[ea.length - 1];
        Ba(s && s._id !== e._id);
        oa(false);
      } catch (a) {
        console.error("[TM] 切換分頁失敗:", a);
      }
    } else {
      oa(false);
    }
  }, [na, ea]);
  const Bo = ge.useCallback(async (e = {}) => {
    const n = (e == null ? undefined : e.spectate) === true;
    if (!zr || !y) {
      return;
    }
    const s = y;
    const a = String(zr.id);
    const r = n ? `🌙 ${new Date().toLocaleDateString("zh-TW")}` : new Date().toLocaleDateString("zh-TW");
    const i = n ? "tmNewSpectateSessionTitle" : "tmNewSessionTitle";
    const o = n ? "新旁觀分頁名稱（user 不在場）" : "新分頁名稱";
    const l = await ce(C(i, o), r);
    if (l !== null) {
      try {
        const e = Date.now();
        const i = await t.add({
          userId: s,
          characterId: a,
          name: l || r,
          type: "this-moment",
          createdAt: e,
          lastActiveAt: e,
          dateLabel: new Date(e).toLocaleDateString("zh-TW"),
          ...(n && {
            spectate: true
          })
        });
        if (!n && Na && nn) {
          await te.add(s, a, {
            role: "char",
            content: nn,
            sessionId: i
          });
        }
        const o = await t.getByPair(s, a);
        ta(o);
        const c = !n && Na && nn ? (await t.getStoriesBySession(i)).map(e => ({
          id: e._id,
          role: e.role || "char",
          content: typeof e.content == "string" ? e.content : String(e.content || ""),
          timestamp: e.timestamp,
          ...(e.illustration ? {
            illustration: e.illustration
          } : {}),
          ...(e.rerollSlotId ? {
            rerollSlotId: e.rerollSlotId,
            rerollVariantIndex: e.rerollVariantIndex ?? 0
          } : {})
        })) : [];
        Ce(c);
        sa(i);
        ra(await t.getById(i));
        Ba(false);
        Ne(Wn);
        oa(false);
      } catch (c) {
        console.error("[TM] 新建分頁失敗:", c);
      }
    }
  }, [zr, y, nn, Na, C]);
  const Lo = ge.useCallback(async () => {
    if (!zr || !y || !na) {
      return;
    }
    if (je.filter(e => !e.hidden).length < 2) {
      return;
    }
    if (!(await $(C("tmCompleteConfirm", "確定完結這段故事？將自動生成摘要並開啟新分頁。")))) {
      return;
    }
    const e = y;
    const s = String(zr.id);
    try {
      const r = `tm_last_summarized_${e}_${s}`;
      const o = (await i.get(r).catch(() => null)) || {
        lastEntryCount: 0
      };
      const l = o.sessionId === na ? o.lastEntryCount : 0;
      const c = je.length - l;
      let d = "";
      if (c > 0) {
        try {
          const t = await Xn(e, s, zr, Or, je, 0, j, hs, null, na, Rs, (aa == null ? undefined : aa.spectate) === true);
          d = (t == null ? undefined : t.summary) || "";
        } catch (a) {
          console.warn("[TM] 完結摘要生成失敗，繼續流程:", a);
        }
      }
      const u = d;
      const m = (aa == null ? undefined : aa.spectate) === true;
      const p = m ? "spectate" : "tm";
      if (u) {
        const t = await n.get(e, s).catch(() => null);
        if (((t == null ? undefined : t.summaryHistory) || []).filter(e => e.source === p && String(e.sessionId) === String(na)).length === 0) {
          const t = {
            id: Date.now(),
            date: new Date().toISOString(),
            summary: u,
            messageCount: je.length,
            source: p,
            sessionId: na,
            sessionName: (aa == null ? undefined : aa.name) || "",
            ...(m && {
              solo: true
            })
          };
          await n.appendHistory(e, s, t).catch(e => {
            console.error("[TM] 完結回退總結保存失敗:", e);
          });
        }
      }
      await i.set(r, {
        lastEntryCount: 0,
        sessionId: null
      }).catch(() => {});
      await t.update(na, {
        completed: true,
        completedAt: Date.now()
      });
      const h = zr.originalName || zr.name || "";
      const g = (aa == null ? undefined : aa.name) || "";
      if (!m) {
        const t = {
          id: `tmc_${Date.now()}_${Math.random().toString(36).slice(2, 4)}`,
          sender: "me",
          type: "offline_story_complete",
          text: u ? `[offline encounter "${g}" completed: ${u}]` : `[offline encounter "${g}" completed]`,
          offlineStoryComplete: {
            sessionName: g,
            summary: u,
            characterName: h
          },
          timestamp: Date.now()
        };
        await me.add(e, s, t).catch(() => {});
      }
      const x = Date.now();
      const f = await t.add({
        userId: e,
        characterId: s,
        name: m ? `🌙 ${new Date(x).toLocaleDateString("zh-TW")}` : new Date(x).toLocaleDateString("zh-TW"),
        type: "this-moment",
        createdAt: x,
        lastActiveAt: x,
        dateLabel: new Date(x).toLocaleDateString("zh-TW"),
        ...(m && {
          spectate: true
        })
      });
      if (!m && Na && nn) {
        await te.add(e, s, {
          role: "char",
          content: nn,
          sessionId: f
        });
      }
      const y = await t.getByPair(e, s);
      ta(y);
      const v = !m && Na && nn ? (await t.getStoriesBySession(f)).map(e => ({
        id: e._id,
        role: e.role || "char",
        content: typeof e.content == "string" ? e.content : String(e.content || ""),
        timestamp: e.timestamp
      })) : [];
      Ce(v);
      sa(f);
      ra(await t.getById(f));
      Ba(false);
      Ne(Wn);
      oi.resetStoryTime();
    } catch (a) {
      console.error("[TM] 完結故事失敗:", a);
      E(C("tmCompleteError", "完結失敗，請重試"));
    }
  }, [zr, Or, y, na, aa, je, nn, Na, j, hs, oi.resetStoryTime, C]);
  const zo = ge.useCallback(async () => {
    const e = Fr.activeSession;
    if (!e) {
      return;
    }
    const t = y;
    if (t && !((Hr || []).filter(e => !e.hidden).length < 2) && !(Wr.length < 2) && (await $(C("tmCompleteConfirm", "確定完結這段故事？將自動生成摘要並開啟新分頁。")))) {
      try {
        try {
          await gn({
            userId: t,
            session: e,
            participants: Wr,
            user: Or,
            storyEntries: Hr,
            frequency: 0,
            language: j,
            customSummaryInstructions: hs,
            timeAwareEnabled: Rs !== false
          });
        } catch (n) {
          console.warn("[MultiScene] 完結摘要生成失敗，繼續流程:", n);
        }
        await s.update(e._id, {
          completed: true,
          completedAt: Date.now()
        });
        const a = new Date().toLocaleDateString("zh-TW");
        const r = e.spectate === true;
        const i = await Fr.createSession({
          name: r ? `🌙 ${a}` : a,
          participants: e.participants || [],
          spectate: r,
          scenarioOutline: e.scenarioOutline || "",
          stylePreset: e.stylePreset || "",
          minLength: e.minLength || 100,
          maxLength: e.maxLength || 500,
          contextLength: e.contextLength || 20,
          realTimeAware: e.realTimeAware !== false,
          dateLabel: a
        });
        if (i) {
          await Fr.switchToSession(i);
        }
      } catch (n) {
        console.error("[MultiScene] 完結故事失敗:", n);
        E(C("tmCompleteError", "完結失敗，請重試"));
      }
    }
  }, [Fr, Wr, Hr, y, Or, j, hs, Rs, C]);
  const Oo = ge.useCallback(async e => {
    const n = await ce(C("tmRenameSession", "重命名分頁"), e.name || "");
    if (n !== null && n !== e.name) {
      try {
        await t.update(e._id, {
          name: n
        });
        ta(t => t.map(t => t._id === e._id ? {
          ...t,
          name: n
        } : t));
        if (na === e._id) {
          ra(e => e ? {
            ...e,
            name: n
          } : e);
        }
      } catch (s) {
        console.error("[TM] 重命名分頁失敗:", s);
      }
    }
  }, [na, C]);
  const Fo = ge.useCallback(async e => {
    if (await $(C("tmDeleteSessionConfirm", "確定刪除分頁「{name}」及其所有內容？").replace("{name}", e.name || ""))) {
      try {
        await t.delete(e._id);
        const n = y;
        const s = String(zr == null ? undefined : zr.id);
        const a = await t.getByPair(n, s);
        ta(a);
        if (na === e._id) {
          if (a.length > 0) {
            const e = a[a.length - 1];
            await Do(e);
          } else {
            const e = Date.now();
            const a = await t.add({
              userId: n,
              characterId: s,
              name: new Date(e).toLocaleDateString("zh-TW"),
              type: "this-moment",
              createdAt: e,
              lastActiveAt: e
            });
            const r = await t.getByPair(n, s);
            ta(r);
            sa(a);
            ra(await t.getById(a));
            Ce([]);
            Ba(false);
          }
        }
        oa(false);
      } catch (n) {
        console.error("[TM] 刪除分頁失敗:", n);
      }
    }
  }, [zr, y, na, Do, C]);
  const Uo = ge.useCallback(async e => {
    try {
      const n = await t.getStoriesBySession(e._id);
      if (n.length === 0) {
        E(C("tmExportEmpty", "此分頁沒有內容可導出"));
        return;
      }
      const s = (zr == null ? undefined : zr.name) || "角色";
      const a = (Or == null ? undefined : Or.name) || "你";
      const r = e.name || new Date(e.createdAt).toLocaleDateString("zh-TW");
      const i = e.createdAt ? new Date(e.createdAt).toLocaleDateString("zh-TW") : "";
      let o = `${r}\n`;
      o += `${"─".repeat(30)}\n`;
      o += `${s} × ${a}`;
      if (i) {
        o += `  |  ${i}`;
      }
      o += `\n${"─".repeat(30)}\n\n`;
      for (const e of n) {
        if (e.hidden) {
          continue;
        }
        const t = (typeof e.content == "string" ? e.content : String(e.content || "")).trim();
        if (t) {
          o += t + "\n\n";
        }
      }
      const l = new Blob([o], {
        type: "text/plain;charset=utf-8"
      });
      await pe(l, Yn({
        charName: s,
        userName: a,
        sessionName: r
      }));
    } catch (n) {
      console.error("[TM] 導出分頁失敗:", n);
      E(C("tmExportFail", "導出失敗"));
    }
  }, [zr, Or, C]);
  const [Wo, Ho] = ge.useState(false);
  const [Vo, Go] = ge.useState(new Set());
  const Yo = ge.useCallback(e => {
    Go(t => {
      const n = new Set(t);
      if (n.has(e)) {
        n.delete(e);
      } else {
        n.add(e);
      }
      return n;
    });
  }, []);
  const Ko = ge.useCallback(() => {
    Ho(false);
    Go(new Set());
  }, []);
  const Xo = ge.useCallback(async (e = false) => {
    var t;
    const n = (t = Fr.activeSession) == null ? undefined : t.participants;
    if (!Array.isArray(n) || !(n.length >= 2)) {
      oa(false);
      ua(new Set());
      pa(e);
      Me(true);
      return;
    }
    const s = (e ? "🌙 " : "") + new Date().toLocaleDateString("zh-TW");
    const a = await ce(e ? C("tmMultiNewSpectateSessionTitle", "新旁觀場景名稱（user 不在場）") : C("tmMultiNewSessionTitle", "新多人場景名稱"), s);
    if (a === null) {
      return;
    }
    const r = await Fr.createSession({
      name: a || s,
      participants: [...n],
      spectate: !!e,
      scenarioOutline: "",
      stylePreset: Vt || "",
      minLength: bt || 100,
      maxLength: Wt || 500,
      contextLength: Zn || 20,
      realTimeAware: Rs !== false
    });
    if (r) {
      await Fr.switchToSession(r);
      oa(false);
      Ko();
    }
  }, [Fr, Vt, bt, Wt, Zn, Rs, C]);
  const Jo = ge.useCallback(async () => {
    if (Vo.size === 0) {
      return;
    }
    if (!(await $(C("tmMultiBatchDeleteConfirm", `確定刪除 ${Vo.size} 個場景？`)))) {
      return;
    }
    const e = [...Vo];
    for (const t of e) {
      await Fr.deleteSession(t);
    }
    Ko();
  }, [Vo, Fr, Ko, C]);
  const qo = ge.useCallback(async () => {
    if (Vo.size < 2) {
      E(C("tmMergeNeedTwo", "請至少選擇兩個分頁進行合併"));
      return;
    }
    const e = Fr.sessions.filter(e => Vo.has(e._id)).sort((e, t) => (e.createdAt || 0) - (t.createdAt || 0));
    if (e.length < 2) {
      return;
    }
    const t = [...(e[0].participants || [])].map(String).sort().join("|");
    const n = e[0].spectate === true;
    for (const r of e.slice(1)) {
      if ([...(r.participants || [])].map(String).sort().join("|") !== t || r.spectate === true !== n) {
        E(C("tmMultiMergeMismatch", "只能合併角色組合與模式（在場/旁觀）相同的場景"));
        return;
      }
    }
    const s = await ce(C("tmMergeNamePrompt", "合併後的分頁名稱"), us(e[0]));
    if (s !== null) {
      try {
        const t = e[0];
        const n = e.slice(1);
        await Fr.updateSession(t._id, {
          pageName: s
        });
        for (const e of n) {
          const n = await V.getBySession(e._id);
          for (const e of n) {
            await V.updateEntry(e._id, {
              sessionId: t._id
            });
          }
          await Fr.deleteSession(e._id);
        }
        const a = await V.getBySession(t._id);
        if (a.length > 0) {
          const e = Math.max(...a.map(e => e.timestamp || 0));
          await Fr.updateSession(t._id, {
            lastActiveAt: e
          });
        }
        if (n.some(e => e._id === Fr.activeSessionId)) {
          await Fr.switchToSession(t._id);
        } else if (t._id === Fr.activeSessionId) {
          const e = await V.getBySession(t._id);
          Vr(e.map(e => ({
            id: e._id,
            role: e.role || "narration",
            content: typeof e.content == "string" ? e.content : String(e.content || ""),
            timestamp: e.timestamp
          })));
        }
        Ho(false);
        Go(new Set());
      } catch (a) {
        console.error("[MultiScene] 合併失敗:", a);
        E(C("tmMergeFail", "合併失敗"));
      }
    }
  }, [Vo, Fr, C]);
  const Zo = ge.useCallback(async e => {
    try {
      const t = await V.getBySession(e._id);
      if (!t || t.length === 0) {
        E(C("tmExportEmpty", "此分頁沒有內容可導出"));
        return;
      }
      const n = (Or == null ? undefined : Or.name) || "你";
      const s = (e.participants || []).map(e => {
        var t;
        return ((t = Ur.get(String(e))) == null ? undefined : t.name) || "?";
      }).join("、");
      const a = us(e) || (e.createdAt ? new Date(e.createdAt).toLocaleDateString("zh-TW") : "未命名場景");
      const r = e.createdAt ? new Date(e.createdAt).toLocaleDateString("zh-TW") : "";
      const i = e.spectate ? "🌙 旁觀" : "";
      let o = `${a}\n`;
      o += `${"─".repeat(30)}\n`;
      o += `${s}${e.spectate ? "" : ` × ${n}`}`;
      if (i) {
        o += `  |  ${i}`;
      }
      if (r) {
        o += `  |  ${r}`;
      }
      o += `\n${"─".repeat(30)}\n\n`;
      for (const e of t) {
        const t = (typeof e.content == "string" ? e.content : String(e.content || "")).trim();
        if (t) {
          if (e.role === "user") {
            o += t.startsWith("[DIRECTOR:") ? `${t}\n\n` : `【${n}】${t}\n\n`;
          } else {
            o += t + "\n\n";
          }
        }
      }
      const l = new Blob([o], {
        type: "text/plain;charset=utf-8"
      });
      await pe(l, Yn({
        charName: s || "multi",
        userName: n,
        sessionName: a
      }));
    } catch (t) {
      console.error("[MultiScene] 導出失敗:", t);
      E(C("tmExportFail", "導出失敗"));
    }
  }, [Or, Ur, C]);
  const Qo = ge.useCallback(async () => {
    const e = y;
    if (e) {
      try {
        const t = Fr.sessions;
        if (!t || t.length === 0) {
          E(C("tmExportEmpty", "此分頁沒有內容可導出"));
          return;
        }
        const n = [];
        let s = 0;
        for (const e of t) {
          const t = await V.getBySession(e._id);
          s += t.length;
          const a = (e.participants || []).map(e => {
            var t;
            return {
              id: String(e),
              name: ((t = Ur.get(String(e))) == null ? undefined : t.name) || ""
            };
          });
          n.push({
            sourceId: e._id,
            name: e.name || null,
            pageName: e.pageName || null,
            sceneName: e.sceneName || null,
            participants: e.participants || [],
            participantNames: a,
            spectate: e.spectate === true,
            scenarioOutline: e.scenarioOutline || "",
            stylePreset: e.stylePreset || "",
            minLength: e.minLength || null,
            maxLength: e.maxLength || null,
            contextLength: e.contextLength || null,
            realTimeAware: e.realTimeAware !== false,
            storyTimeStr: e.storyTimeStr || "",
            storyPeriod: e.storyPeriod || "",
            createdAt: e.createdAt || null,
            lastActiveAt: e.lastActiveAt || null,
            entries: t.map(e => ({
              role: e.role || "narration",
              content: typeof e.content == "string" ? e.content : String(e.content || ""),
              timestamp: e.timestamp || null,
              ...(e.isDirector ? {
                isDirector: true
              } : {}),
              ...(e.illustration ? {
                illustration: e.illustration
              } : {})
            }))
          });
        }
        if (s === 0) {
          E(C("tmExportEmpty", "此分頁沒有內容可導出"));
          return;
        }
        const a = {
          __schema: "nuojiji.multiSceneRecord.v1",
          exportedAt: Date.now(),
          user: {
            id: e,
            name: (Or == null ? undefined : Or.name) || ""
          },
          sessions: n
        };
        const r = JSON.stringify(a, null, 2);
        const i = new Blob([r], {
          type: "application/json;charset=utf-8"
        });
        const o = Gn(Or == null ? undefined : Or.name, "user");
        const l = new Date().toISOString().slice(0, 10);
        await pe(i, `multiScene_${o}_${l}.json`);
      } catch (t) {
        console.error("[MultiScene] 導出全部記錄失敗:", t);
        E(C("tmExportFail", "導出失敗"));
      }
    }
  }, [Or, y, Fr.sessions, Ur, C]);
  const el = ge.useRef(null);
  const tl = ge.useCallback(() => {
    var e;
    if ((e = el.current) != null) {
      e.click();
    }
  }, []);
  const nl = ge.useCallback(async e => {
    var t;
    var n;
    const a = (t = e.target.files) == null ? undefined : t[0];
    e.target.value = "";
    if (!a) {
      return;
    }
    const r = y;
    if (r) {
      try {
        const e = await a.text();
        const t = JSON.parse(e);
        if ((t == null ? undefined : t.__schema) !== "nuojiji.multiSceneRecord.v1") {
          E(C("tmMultiImportBadSchema", "檔案格式不符（不是多人場景匯出檔）"));
          return;
        }
        if (!Array.isArray(t.sessions) || t.sessions.length === 0) {
          E(C("tmImportEmpty", "檔案沒有可匯入的內容"));
          return;
        }
        let i = 0;
        let o = 0;
        let l = 0;
        for (const a of t.sessions) {
          const e = [];
          const t = Array.isArray(a.participants) ? a.participants.map(String) : [];
          const c = Array.isArray(a.participantNames) ? a.participantNames : [];
          for (let s = 0; s < t.length; s++) {
            const a = t[s];
            if (Ur.has(a)) {
              e.push(a);
              continue;
            }
            const r = ((n = c[s]) == null ? undefined : n.name) || "";
            if (r) {
              const t = g.find(e => e.name === r);
              if (t) {
                e.push(String(t.id));
              }
            }
          }
          if (e.length < 2) {
            l++;
            continue;
          }
          const d = await s.add({
            userId: r,
            name: a.name || new Date(a.createdAt || Date.now()).toLocaleDateString("zh-TW"),
            pageName: a.pageName || a.name || null,
            sceneName: a.sceneName || a.name || null,
            participants: e,
            spectate: a.spectate === true,
            scenarioOutline: a.scenarioOutline || "",
            stylePreset: a.stylePreset || "",
            minLength: a.minLength || 100,
            maxLength: a.maxLength || 500,
            contextLength: a.contextLength || 20,
            realTimeAware: a.realTimeAware !== false,
            storyTimeStr: a.storyTimeStr || "",
            storyPeriod: a.storyPeriod || "",
            createdAt: a.createdAt || Date.now(),
            lastActiveAt: a.lastActiveAt || Date.now()
          });
          i++;
          for (const n of a.entries || []) {
            await V.add(r, d, {
              role: n.role || "narration",
              content: n.content || "",
              timestamp: n.timestamp || Date.now(),
              ...(n.isDirector ? {
                isDirector: true
              } : {}),
              ...(n.illustration ? {
                illustration: n.illustration
              } : {})
            });
            o++;
          }
        }
        await Fr.reloadSessions();
        const c = C("tmMultiImportSuccess", "已匯入 {sessions} 個場景 / {entries} 條記錄").replace("{sessions}", String(i)).replace("{entries}", String(o)) + (l > 0 ? "\n" + C("tmMultiImportSkipped", "（跳過 {n} 個：找不到匹配的角色）").replace("{n}", String(l)) : "");
        E(c);
      } catch (i) {
        console.error("[MultiScene] 導入失敗:", i);
        E(C("tmImportFail", "導入失敗：") + ((i == null ? undefined : i.message) || String(i)));
      }
    }
  }, [y, Ur, g, Fr, C]);
  const sl = ge.useCallback(async () => {
    if (Vo.size === 0) {
      return;
    }
    const e = Fr.sessions.filter(e => Vo.has(e._id));
    for (const t of e) {
      await Zo(t);
      await new Promise(e => setTimeout(e, 200));
    }
    Ho(false);
    Go(new Set());
  }, [Vo, Fr.sessions, Zo]);
  const al = ge.useCallback(async () => {
    if (Js.size === 0) {
      return;
    }
    const e = [];
    for (const n of Js) {
      const t = Hr[n];
      if (t) {
        e.push(t.id);
      }
    }
    Vr(t => t.filter(t => !e.includes(t.id)));
    Xs(false);
    qs(new Set());
    for (const n of e) {
      try {
        await V.deleteById(n);
      } catch (t) {
        console.error("[MultiScene] batch delete:", t);
      }
    }
  }, [Js, Hr]);
  const rl = ge.useCallback(async () => {
    if (Js.size === 0) {
      return;
    }
    const e = [];
    for (const a of Js) {
      const t = Hr[a];
      if (t) {
        e.push(t);
      }
    }
    if (e.length === 0) {
      return;
    }
    const t = !e.every(e => !!e.hiddenByUser);
    const n = new Set(e.map(e => e.id));
    Vr(e => e.map(e => n.has(e.id) ? {
      ...e,
      hiddenByUser: t
    } : e));
    Xs(false);
    qs(new Set());
    for (const a of e) {
      try {
        if (a.id != null) {
          await V.updateEntry(a.id, {
            hiddenByUser: t
          });
        }
      } catch (s) {
        console.error("[MultiScene] batch toggle hide error:", s);
      }
    }
  }, [Js, Hr]);
  const il = ge.useCallback(async () => {
    const e = y;
    const n = String(zr == null ? undefined : zr.id);
    if (!e || !n) {
      return [];
    }
    const s = await t.getByPair(e, n);
    ta(s);
    const a = {};
    await Promise.all(s.map(async e => {
      a[e._id] = await t.getStoryCount(e._id).catch(() => 0);
    }));
    za(a);
    return s;
  }, [zr, y]);
  const ol = ge.useCallback(async () => {
    if (!zr) {
      return;
    }
    const e = y;
    const n = String(zr.id);
    if (e && n) {
      try {
        const s = await t.getByPair(e, n);
        if (s.length === 0) {
          E(C("tmExportEmpty", "此分頁沒有內容可導出"));
          return;
        }
        const a = [];
        let r = 0;
        for (const e of s) {
          const n = await t.getStoriesBySession(e._id);
          r += n.length;
          a.push({
            sourceId: e._id,
            name: e.name || null,
            type: e.type || null,
            createdAt: e.createdAt || null,
            lastActiveAt: e.lastActiveAt || null,
            entries: n.map(e => ({
              role: e.role || "char",
              content: typeof e.content == "string" ? e.content : String(e.content || ""),
              timestamp: e.timestamp || null,
              ...(e.hidden ? {
                hidden: true
              } : {}),
              ...(e.hiddenByUser ? {
                hiddenByUser: true
              } : {}),
              ...(e.illustration ? {
                illustration: e.illustration
              } : {}),
              ...(e.rerollSlotId ? {
                rerollSlotId: e.rerollSlotId,
                rerollVariantIndex: e.rerollVariantIndex ?? 0
              } : {}),
              ...(e.hasThinking ? {
                hasThinking: true
              } : {})
            }))
          });
        }
        if (r === 0) {
          E(C("tmExportEmpty", "此分頁沒有內容可導出"));
          return;
        }
        const i = {
          __schema: "nuojiji.tmRecord.v1",
          exportedAt: Date.now(),
          character: {
            id: n,
            name: (zr == null ? undefined : zr.name) || ""
          },
          user: {
            id: e,
            name: (Or == null ? undefined : Or.name) || ""
          },
          sessions: a
        };
        const o = JSON.stringify(i, null, 2);
        const l = new Blob([o], {
          type: "application/json;charset=utf-8"
        });
        const c = Gn(zr == null ? undefined : zr.name, "char");
        const d = Gn(Or == null ? undefined : Or.name, "user");
        const u = new Date().toISOString().slice(0, 10);
        await pe(l, `tm_${c}_${d}_${u}.json`);
      } catch (s) {
        console.error("[TM] 導出全部記錄失敗:", s);
        E(C("tmExportFail", "導出失敗"));
      }
    }
  }, [zr, Or, y, C]);
  const ll = ge.useRef(null);
  const cl = ge.useCallback(() => {
    var e;
    if (zr) {
      if ((e = ll.current) != null) {
        e.click();
      }
    }
  }, [zr]);
  const dl = ge.useCallback(async e => {
    var n;
    var s;
    const a = (n = e.target.files) == null ? undefined : n[0];
    e.target.value = "";
    if (!a || !zr) {
      return;
    }
    const r = y;
    const i = String(zr.id);
    if (r && i) {
      try {
        const e = await a.text();
        const n = JSON.parse(e);
        if (!n || n.__schema !== "nuojiji.tmRecord.v1" || !Array.isArray(n.sessions)) {
          E(C("tmImportInvalid", "文件格式無效"));
          return;
        }
        const o = n.sessions;
        if (o.length === 0) {
          E(C("tmImportEmpty", "文件中沒有可導入的記錄"));
          return;
        }
        const l = o.reduce((e, t) => e + (Array.isArray(t.entries) ? t.entries.length : 0), 0);
        const c = ((s = n.character) == null ? undefined : s.name) ? `「${n.character.name}」` : "";
        const d = C("tmImportConfirm", "即將導入 {sessions} 個分頁 / {entries} 條記錄{from} 到當前角色，是否繼續？").replace("{sessions}", o.length).replace("{entries}", l).replace("{from}", c ? `（來源：${c}）` : "");
        if (!(await $(d))) {
          return;
        }
        let u = 0;
        let m = 0;
        for (const s of o) {
          if (!Array.isArray(s.entries) || s.entries.length === 0) {
            continue;
          }
          const e = await t.add({
            userId: r,
            characterId: i,
            name: s.name || null,
            type: s.type || "manual",
            createdAt: s.createdAt || Date.now(),
            lastActiveAt: s.lastActiveAt || Date.now()
          });
          u++;
          let n = s.createdAt || Date.now();
          for (const t of s.entries) {
            const s = t.timestamp || n + 1;
            n = s;
            await te.add(r, i, {
              role: t.role || "char",
              content: typeof t.content == "string" ? t.content : String(t.content || ""),
              sessionId: e,
              timestamp: s,
              ...(t.hidden ? {
                hidden: true
              } : {}),
              ...(t.illustration ? {
                illustration: t.illustration
              } : {}),
              ...(t.rerollSlotId ? {
                rerollSlotId: t.rerollSlotId,
                rerollVariantIndex: t.rerollVariantIndex ?? 0
              } : {}),
              ...(t.hasThinking ? {
                hasThinking: true
              } : {})
            });
            m++;
          }
        }
        await il();
        E(C("tmImportSuccess", "已導入 {sessions} 個分頁 / {entries} 條記錄").replace("{sessions}", u).replace("{entries}", m));
      } catch (o) {
        console.error("[TM] 導入失敗:", o);
        E(C("tmImportFail", "導入失敗：") + ((o == null ? undefined : o.message) || String(o)));
      }
    }
  }, [zr, y, il, C]);
  const ul = ge.useCallback(async () => {
    var e;
    if (Vo.size < 2) {
      E(C("tmMergeNeedTwo", "請至少選擇兩個分頁進行合併"));
      return;
    }
    const n = ea.filter(e => Vo.has(e._id)).sort((e, t) => (e.createdAt || 0) - (t.createdAt || 0));
    const s = await ce(C("tmMergeNamePrompt", "合併後的分頁名稱"), ((e = n[0]) == null ? undefined : e.name) || "");
    if (s !== null) {
      try {
        const e = n[0];
        const a = n.slice(1);
        await t.update(e._id, {
          name: s
        });
        for (const n of a) {
          const s = await t.getStoriesBySession(n._id);
          for (const t of s) {
            await H.tmStories.update(t._id, {
              sessionId: e._id
            });
          }
          await H.tmSessions.delete(n._id);
        }
        const r = await t.getStoriesBySession(e._id);
        if (r.length > 0) {
          const n = Math.max(...r.map(e => e.timestamp || 0));
          await t.update(e._id, {
            lastActiveAt: n
          });
        }
        await il();
        if (a.some(e => e._id === na)) {
          await Do(await t.getById(e._id));
        } else if (e._id === na) {
          const n = await t.getStoriesBySession(e._id);
          Ce(n.map(e => ({
            id: e._id,
            role: e.role || "char",
            content: typeof e.content == "string" ? e.content : String(e.content || ""),
            timestamp: e.timestamp,
            ...(e.hidden ? {
              hidden: true
            } : {}),
            ...(e.hiddenByUser ? {
              hiddenByUser: true
            } : {}),
            ...(e.illustration ? {
              illustration: e.illustration
            } : {}),
            ...(e.rerollSlotId ? {
              rerollSlotId: e.rerollSlotId,
              rerollVariantIndex: e.rerollVariantIndex ?? 0
            } : {})
          })));
        }
        Ko();
        E(C("tmMergeDone", "已將 {count} 個分頁合併為「{name}」").replace("{count}", n.length).replace("{name}", s));
      } catch (a) {
        console.error("[TM] 合併分頁失敗:", a);
        E(C("tmMergeFail", "合併失敗"));
      }
    }
  }, [Vo, ea, na, Do, il, Ko, C]);
  const ml = ge.useCallback(async () => {
    if (Vo.size === 0) {
      return;
    }
    const e = Vo.size;
    if (await $(C("tmBatchDeleteConfirm", "確定刪除所選的 {count} 個分頁及其所有內容？").replace("{count}", e))) {
      try {
        for (const n of Vo) {
          await t.delete(n);
        }
        const e = await il();
        if (Vo.has(na)) {
          if (e.length > 0) {
            await Do(e[e.length - 1]);
          } else {
            const e = y;
            const n = String(zr == null ? undefined : zr.id);
            const s = Date.now();
            const a = await t.add({
              userId: e,
              characterId: n,
              name: new Date(s).toLocaleDateString("zh-TW"),
              type: "this-moment",
              createdAt: s,
              lastActiveAt: s
            });
            await il();
            sa(a);
            ra(await t.getById(a));
            Ce([]);
            Ba(false);
          }
        }
        Ko();
      } catch (n) {
        console.error("[TM] 批次刪除失敗:", n);
        E(C("tmBatchDeleteFail", "刪除失敗"));
      }
    }
  }, [Vo, na, zr, y, Do, il, Ko, C]);
  const pl = ge.useCallback(async () => {
    var e;
    var n;
    if (Vo.size !== 0) {
      try {
        const s = (zr == null ? undefined : zr.name) || "角色";
        const a = (Or == null ? undefined : Or.name) || "你";
        const r = ea.filter(e => Vo.has(e._id)).sort((e, t) => (e.createdAt || 0) - (t.createdAt || 0));
        if (r.length === 0) {
          return;
        }
        let i = `${s} × ${a}\n`;
        i += `${"═".repeat(30)}\n\n`;
        for (const e of r) {
          const n = await t.getStoriesBySession(e._id);
          const s = e.name || new Date(e.createdAt).toLocaleDateString("zh-TW");
          const a = e.createdAt ? new Date(e.createdAt).toLocaleDateString("zh-TW") : "";
          i += `${"─".repeat(30)}\n`;
          i += `${s}`;
          if (a) {
            i += `  |  ${a}`;
          }
          i += `\n${"─".repeat(30)}\n\n`;
          for (const e of n) {
            if (e.hidden) {
              continue;
            }
            const t = (typeof e.content == "string" ? e.content : String(e.content || "")).trim();
            if (t) {
              i += t + "\n\n";
            }
          }
        }
        const o = new Blob([i], {
          type: "text/plain;charset=utf-8"
        });
        const l = ((e = r[0]) == null ? undefined : e.name) || new Date(((n = r[0]) == null ? undefined : n.createdAt) || Date.now()).toLocaleDateString("zh-TW");
        await pe(o, Yn({
          charName: s,
          userName: a,
          sessionName: l
        }));
        Ko();
      } catch (s) {
        console.error("[TM] 批次導出失敗:", s);
        E(C("tmExportFail", "導出失敗"));
      }
    }
  }, [Vo, ea, zr, Or, Ko, C]);
  const hl = ge.useCallback(async () => {
    oa(true);
    yt(false);
    Me(false);
    ht(false);
    if (ea.length > 0) {
      const e = {};
      await Promise.all(ea.map(async n => {
        e[n._id] = await t.getStoryCount(n._id).catch(() => 0);
      }));
      za(e);
    }
  }, [ea]);
  return xe.jsxs("div", {
    id: "this-moment-screen",
    className: `screen ${N ? "active" : ""} theme-${en}${Ls ? " tm-no-animations" : ""} tm-mode-${la}`,
    children: [xe.jsxs("div", {
      className: "tm-bg-container",
      style: la !== "multi" || lr ? undefined : {
        visibility: "hidden"
      },
      children: [xe.jsx("div", {
        className: "tm-bg-image",
        style: {
          backgroundImage: (zr == null ? undefined : zr.image) ? `url(${zr.image})` : "none"
        }
      }), xe.jsx("div", {
        className: "tm-bg-overlay"
      }), en === "classic" && xe.jsxs(xe.Fragment, {
        children: [xe.jsx("div", {
          className: "tc-deco tc-deco-top"
        }), xe.jsx("div", {
          className: "tc-deco tc-deco-bottom"
        }), xe.jsx("div", {
          className: "tc-deco tc-deco-left"
        }), xe.jsx("div", {
          className: "tc-deco tc-deco-right"
        }), xe.jsx("div", {
          className: "tc-deco tc-deco-center"
        }), xe.jsx("div", {
          className: "tc-watermark"
        })]
      }), !Ls && en === "magazine-dark" && xe.jsxs("div", {
        className: "tm-typo-container",
        children: [xe.jsx("div", {
          className: "tm-newspaper-column-lines"
        }), xe.jsx("div", {
          className: "tm-typo-bg-letter",
          style: {
            animationDelay: "0s"
          },
          children: "N"
        }), xe.jsx("div", {
          className: "tm-typo-bg-letter tm-typo-bg-letter-2",
          style: {
            animationDelay: "-10s"
          },
          children: "E"
        }), xe.jsx("div", {
          className: "tm-typo-bg-text",
          style: {
            top: "15%"
          },
          children: "HEADLINE NEWS • EXCLUSIVE INTERVIEW • HEADLINE NEWS • EXCLUSIVE INTERVIEW • HEADLINE NEWS • EXCLUSIVE INTERVIEW • HEADLINE NEWS • EXCLUSIVE INTERVIEW • "
        }), xe.jsx("div", {
          className: "tm-typo-bg-text",
          style: {
            bottom: "15%",
            animationDirection: "reverse",
            animationDuration: "60s"
          },
          children: "SPECIAL EDITION • FRONT PAGE • DAILY JOURNAL • IN-DEPTH ANALYSIS • SPECIAL EDITION • FRONT PAGE • DAILY JOURNAL • IN-DEPTH ANALYSIS • "
        })]
      }), !Ls && en === "apple-green" && xe.jsxs("div", {
        className: "tm-leaves-container",
        children: [ti.map((e, t) => xe.jsx("div", {
          className: "tm-leaf",
          style: {
            left: e.left,
            animationDuration: e.animationDuration,
            animationDelay: e.animationDelay,
            opacity: e.opacity,
            transform: e.transform
          },
          children: xe.jsx("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "rgba(125, 185, 95, 0.45)",
            style: {
              animation: `spin ${e.spinDuration} linear infinite`,
              filter: "drop-shadow(0px 4px 6px rgba(100, 150, 70, 0.15))"
            },
            children: t % 2 == 0 ? xe.jsx("path", {
              d: "M12.0001 21.996C5.5501 16.596 3.0001 10.996 9.0001 3.996C9.0001 3.996 11.5001 0.496002 12.0001 5.996C12.5001 0.496002 15.0001 3.996 15.0001 3.996C21.0001 10.996 18.4501 16.596 12.0001 21.996Z"
            }) : xe.jsx("path", {
              d: "M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 7.05 11.08 8 11.5L8.58 10.2C10.23 10.9 14 10 17 8Z"
            })
          })
        }, t)), xe.jsx("div", {
          className: "tm-sunlight"
        })]
      }), !Ls && en === "winter-snow" && xe.jsxs("div", {
        className: "tm-snow-container",
        children: [ni.map((e, t) => xe.jsx("div", {
          className: "tm-snowflake",
          style: {
            left: e.left,
            animationDuration: e.animationDuration,
            animationDelay: e.animationDelay,
            opacity: e.opacity,
            width: e.size,
            height: e.size,
            filter: e.blur
          }
        }, t)), xe.jsx("div", {
          className: "tm-frost-border"
        })]
      })]
    }), !ir && xe.jsx("div", {
      className: "tm-skeleton",
      style: {
        position: "absolute",
        inset: 0,
        zIndex: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "inherit",
        gap: "16px"
      },
      children: x && g.length === 0 ? xe.jsxs(xe.Fragment, {
        children: [xe.jsx("div", {
          style: {
            fontSize: "15px",
            color: "rgba(128,128,128,0.8)",
            fontFamily: "-apple-system, sans-serif",
            textAlign: "center",
            padding: "0 24px"
          },
          children: C("tmNoCharacters", "還沒有角色，請先新增角色卡再來這裡")
        }), xe.jsx("button", {
          style: {
            marginTop: "8px",
            padding: "8px 20px",
            borderRadius: "8px",
            border: "1px solid rgba(128,128,128,0.3)",
            background: "transparent",
            color: "rgba(128,128,128,0.8)",
            cursor: "pointer",
            fontSize: "13px"
          },
          onClick: () => h("home-screen"),
          children: C("tmBackToHome", "返回主畫面")
        })]
      }) : dr ? xe.jsxs(xe.Fragment, {
        children: [xe.jsx("div", {
          style: {
            fontSize: "15px",
            color: "rgba(128,128,128,0.85)",
            fontFamily: "-apple-system, sans-serif",
            textAlign: "center",
            padding: "0 24px"
          },
          children: C("tmLoadStuckTitle", "載入超時，可能遇到問題")
        }), xe.jsx("div", {
          style: {
            fontSize: "12px",
            color: "rgba(128,128,128,0.6)",
            textAlign: "center",
            padding: "0 24px",
            maxWidth: "90%"
          },
          children: C("tmLoadStuckDesc", "可嘗試重試，或返回主畫面再進入一次")
        }), xe.jsxs("div", {
          style: {
            display: "flex",
            gap: "10px",
            marginTop: "4px"
          },
          children: [xe.jsx("button", {
            style: {
              padding: "8px 18px",
              borderRadius: "8px",
              border: "1px solid rgba(128,128,128,0.3)",
              background: "transparent",
              color: "rgba(128,128,128,0.8)",
              cursor: "pointer",
              fontSize: "13px"
            },
            onClick: () => {
              ur(false);
              Tr.current = false;
              or(false);
              pr(e => e + 1);
            },
            children: C("tmRetry", "重試")
          }), xe.jsx("button", {
            style: {
              padding: "8px 18px",
              borderRadius: "8px",
              border: "none",
              background: "#FFB7C5",
              color: "#fff",
              cursor: "pointer",
              fontSize: "13px"
            },
            onClick: () => h("home-screen"),
            children: C("tmBackToHome", "返回主畫面")
          })]
        })]
      }) : xe.jsxs(xe.Fragment, {
        children: [xe.jsx("div", {
          style: {
            width: 40,
            height: 40,
            border: "3px solid rgba(128,128,128,0.15)",
            borderTopColor: "rgba(128,128,128,0.5)",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite"
          }
        }), xe.jsx("div", {
          style: {
            fontSize: "13px",
            color: "rgba(128,128,128,0.6)",
            fontFamily: "-apple-system, sans-serif"
          },
          children: C("tmLoading", "載入中...")
        })]
      })
    }), xe.jsxs("header", {
      className: `tm-header theme-${en}`,
      style: !ir || la === "multi" && !lr ? {
        visibility: "hidden"
      } : undefined,
      children: [xe.jsx("button", {
        className: "tm-btn-icon",
        onClick: () => h("home-screen"),
        children: xe.jsx(gt, {
          size: 20
        })
      }), xe.jsxs("div", {
        className: "tm-header-center",
        children: [xe.jsx("button", {
          className: "tm-top-drop-btn",
          onClick: () => {
            var e;
            var t;
            if (la === "multi") {
              if (!$e) {
                const n = new Set((((e = Fr.activeSession) == null ? undefined : e.participants) || []).map(e => String(e)));
                ua(n);
                pa(((t = Fr.activeSession) == null ? undefined : t.spectate) === true);
              }
              Me(e => !e);
              ht(false);
              yt(false);
            } else {
              Me(e => {
                if (!e) {
                  We("");
                }
                return !e;
              });
              ht(false);
              yt(false);
            }
          },
          children: la === "multi" ? (() => {
            var e;
            const t = ((e = Fr.activeSession) == null ? undefined : e.participants) || [];
            if (t.length === 0) {
              return xe.jsxs(xe.Fragment, {
                children: [xe.jsx("span", {
                  className: "tm-header-avatar-wrap",
                  style: {
                    background: "rgba(74, 140, 255, 0.12)",
                    color: "#4a8cff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 600
                  },
                  children: "＋"
                }), xe.jsx("span", {
                  className: "tm-header-name",
                  children: C("tmMultiHeaderHint", "選擇角色")
                })]
              });
            }
            const n = t.slice(0, 4).map(e => Ur.get(String(e))).filter(Boolean);
            const s = n.length <= 2 ? `repeat(${Math.max(n.length, 1)}, 1fr)` : "repeat(2, 1fr)";
            const a = n[0];
            const r = Fr.activeSession;
            const i = (r == null ? undefined : r.sceneAvatar) || null;
            const o = (r == null ? undefined : r.sceneName) || (r == null ? undefined : r.pageName) || (r == null ? undefined : r.name) || `${(a == null ? undefined : a.name) || "?"}${t.length > 1 ? " +" + (t.length - 1) : ""}`;
            return xe.jsxs(xe.Fragment, {
              children: [i ? xe.jsx("span", {
                className: "tm-header-avatar-wrap",
                style: {
                  overflow: "hidden"
                },
                children: xe.jsx("img", {
                  decoding: "async",
                  src: i,
                  alt: o,
                  className: "tm-header-avatar",
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }
                })
              }) : xe.jsx("span", {
                className: "tm-header-avatar-wrap",
                style: {
                  display: "grid",
                  gridTemplateColumns: s,
                  gap: "1px",
                  overflow: "hidden",
                  background: "#f0f2f5"
                },
                children: n.map((e, t) => {
                  var n;
                  return xe.jsx("span", {
                    style: {
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: e.image ? "#ccc" : `hsl(${t * 70}, 45%, 58%)`,
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 10
                    },
                    children: e.image ? xe.jsx("img", {
                      decoding: "async",
                      src: e.image,
                      alt: e.name,
                      style: Re(e)
                    }) : ((n = e.name) == null ? undefined : n[0]) || "?"
                  }, e.id);
                })
              }), xe.jsx("span", {
                className: "tm-header-name",
                children: o
              })]
            });
          })() : xe.jsxs(xe.Fragment, {
            children: [(zr == null ? undefined : zr.image) ? xe.jsx("span", {
              className: "tm-header-avatar-wrap",
              children: xe.jsx("img", {
                decoding: "async",
                src: zr.image,
                alt: zr.name,
                className: "tm-header-avatar",
                style: _e(zr)
              })
            }) : xe.jsx(vs, {
              name: zr == null ? undefined : zr.name,
              size: 28
            }), xe.jsx("span", {
              className: "tm-header-name",
              children: (zr == null ? undefined : zr.name) || C("tmSelectChar", "選擇角色")
            })]
          })
        }), xe.jsx("span", {
          className: "tm-top-vs",
          children: "×"
        }), xe.jsxs("button", {
          className: "tm-top-drop-btn tm-top-drop-btn-user",
          onClick: () => {
            ht(e => !e);
            Me(false);
            yt(false);
          },
          children: [xe.jsx("span", {
            className: "tm-header-name",
            children: Or.name
          }), Or.avatar ? Or.avatar.startsWith("txt:") ? xe.jsx("span", {
            className: "tm-header-avatar-wrap",
            style: {
              background: "#eee",
              color: "#555",
              fontSize: "10px"
            },
            children: Or.avatar.substring(4)
          }) : xe.jsx("span", {
            className: "tm-header-avatar-wrap",
            children: xe.jsx("img", {
              decoding: "async",
              src: Or.avatar,
              alt: Or.name,
              className: "tm-header-avatar"
            })
          }) : xe.jsx("span", {
            className: "tm-header-avatar-wrap tm-header-avatar-fallback",
            children: xe.jsxs("svg", {
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [xe.jsx("path", {
                d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
              }), xe.jsx("circle", {
                cx: "12",
                cy: "7",
                r: "4"
              })]
            })
          })]
        })]
      }), xe.jsxs("div", {
        className: "tm-header-right",
        children: [xe.jsx("button", {
          className: "tm-btn-icon",
          onClick: hl,
          title: C("tmSessionBrowser", "分頁記錄"),
          children: xe.jsx($t, {
            size: 17
          })
        }), xe.jsx("button", {
          className: "tm-btn-icon",
          onClick: () => {
            if (la !== "multi" || Fr.activeSession) {
              yt(e => !e);
              Me(false);
              ht(false);
              oa(false);
            } else {
              E(C("tmMultiNeedSessionAlert", "請先建立或選擇一個多人場景"));
            }
          },
          children: xe.jsx(It, {
            size: 17
          })
        })]
      })]
    }), $e && la === "multi" && xe.jsx(Tn, {
      characters: g,
      selectedIds: da,
      onToggle: e => {
        ua(t => {
          const n = new Set(t);
          if (n.has(e)) {
            n.delete(e);
          } else {
            n.add(e);
          }
          return n;
        });
      },
      onClear: () => ua(new Set()),
      onConfirm: async () => {
        if (da.size < 2) {
          return;
        }
        const e = [...da].map(e => {
          var t;
          if ((t = Ur.get(String(e))) == null) {
            return undefined;
          } else {
            return t.name;
          }
        }).filter(Boolean);
        const t = e.length > 3 ? `${e.slice(0, 3).join("、")}+${e.length - 3}` : e.join("、");
        const n = (ma ? "🌙 " : "") + (t || new Date().toLocaleDateString("zh-TW"));
        const s = await Fr.createSession({
          name: n,
          pageName: n,
          sceneName: n,
          participants: [...da],
          spectate: ma === true,
          scenarioOutline: "",
          stylePreset: Vt || "",
          minLength: bt || 100,
          maxLength: Wt || 500,
          contextLength: Zn || 20,
          realTimeAware: Rs !== false
        });
        if (s) {
          await Fr.switchToSession(s);
          Me(false);
        }
      },
      onClose: () => Me(false),
      spectate: ma,
      onSpectateChange: pa,
      recentSessions: Fr.sessions,
      characterMap: Ur,
      onPickSession: async e => {
        await Fr.switchToSession(e._id);
        Me(false);
      },
      modeSegmented: xe.jsx("div", {
        className: "tm-mode-segmented-wrap",
        style: {
          padding: "8px 0 4px"
        },
        children: xe.jsxs("div", {
          className: "tm-mode-segmented",
          role: "tablist",
          "aria-label": C("tmModeSegmentedLabel", "線下模式"),
          children: [xe.jsx("button", {
            role: "tab",
            "aria-selected": false,
            className: "tm-mode-seg-btn",
            onClick: () => {
              ca("single");
            },
            children: C("tmModeSingle", "單人")
          }), xe.jsx("button", {
            role: "tab",
            "aria-selected": true,
            className: "tm-mode-seg-btn active",
            onClick: () => {},
            children: C("tmModeMulti", "多人")
          })]
        })
      }),
      t: C,
      tOr: (e, t) => {
        const n = C(e);
        if (n === e) {
          return t;
        } else {
          return n;
        }
      }
    }), $e && la === "single" && (() => {
      const e = Be.trim().toLowerCase();
      const t = g.filter(e => e.type !== "npc");
      const n = g.filter(e => e.type === "npc");
      const s = {};
      n.forEach(e => {
        (e.boundTo || []).forEach(t => {
          const n = String(t);
          s[n] ||= [];
          s[n].push(e);
        });
      });
      const a = n.filter(e => !e.boundTo || e.boundTo.length === 0);
      const r = t => !e || t.name.toLowerCase().includes(e) || (t.description || "").toLowerCase().includes(e);
      const i = {};
      t.forEach(e => {
        const t = e.group || C("tmDefaultGroup");
        i[t] ||= [];
        i[t].push(e);
      });
      const o = Object.keys(i).sort((e, t) => {
        const n = C("tmDefaultGroup");
        if (e === n) {
          return 1;
        } else if (t === n) {
          return -1;
        } else {
          return e.localeCompare(t, "zh");
        }
      });
      const l = !!e;
      const c = (e, t = false) => {
        const n = g.findIndex(t => t.id === e.id);
        return xe.jsxs("button", {
          className: "tm-char-item " + (n === ve ? "active" : ""),
          style: t ? {
            paddingLeft: 42
          } : undefined,
          onClick: () => {
            var e;
            if ((e = n) !== ve) {
              Sr.current++;
              if (br.current) {
                br.current.abort();
                br.current = null;
              }
              if (yr.current) {
                clearTimeout(yr.current);
                yr.current = null;
              }
              Ae(false);
              wr.current = false;
              Nr.current.forEach(e => e.abort());
              Nr.current = [];
              as([]);
              is(false);
              Ne(Wn);
              be(e);
              Ce([]);
              vr.current = false;
              an("");
              Me(false);
              ht(false);
              yt(false);
            } else {
              Me(false);
            }
          },
          children: [e.image ? xe.jsx("div", {
            className: "tm-char-item-avatar-wrap",
            style: t ? {
              width: 34,
              height: 34
            } : undefined,
            children: xe.jsx("img", {
              decoding: "async",
              src: e.image,
              alt: e.name,
              className: "tm-char-item-avatar",
              style: _e(e)
            })
          }) : xe.jsx(vs, {
            name: e.name,
            size: t ? 34 : 40
          }), xe.jsxs("div", {
            className: "tm-char-item-text",
            children: [xe.jsxs("span", {
              className: "tm-char-item-name",
              style: {
                display: "flex",
                alignItems: "center",
                gap: 6
              },
              children: [e.name, e.type === "npc" && xe.jsx("span", {
                className: "tm-char-npc-badge",
                children: "NPC"
              })]
            }), e.description && xe.jsxs("span", {
              className: "tm-char-item-desc",
              children: [e.description.slice(0, 50), e.description.length > 50 ? "…" : ""]
            })]
          }), n === ve && xe.jsx("span", {
            className: "tm-char-item-check",
            children: "✓"
          })]
        }, e.id);
      };
      return xe.jsxs("div", {
        className: "tm-overlay-panel tm-overlay-centered",
        children: [xe.jsxs("div", {
          className: "tm-panel-title",
          children: [C("tmSelectChar", "選擇角色"), xe.jsx("button", {
            className: "tm-close-btn",
            onClick: () => Me(false),
            children: xe.jsx(ft, {
              size: 16
            })
          })]
        }), xe.jsx("div", {
          className: "tm-mode-segmented-wrap",
          style: {
            padding: "0 0 6px"
          },
          children: xe.jsxs("div", {
            className: "tm-mode-segmented",
            role: "tablist",
            "aria-label": C("tmModeSegmentedLabel", "線下模式"),
            children: [xe.jsx("button", {
              role: "tab",
              "aria-selected": true,
              className: "tm-mode-seg-btn active",
              onClick: () => {},
              children: C("tmModeSingle", "單人")
            }), xe.jsx("button", {
              role: "tab",
              "aria-selected": false,
              className: "tm-mode-seg-btn",
              onClick: () => {
                Fr.switchToSession(null, {
                  keepMemory: true
                });
                ca("multi");
              },
              children: C("tmModeMulti", "多人")
            })]
          })
        }), xe.jsxs("div", {
          className: "tm-char-search-wrap",
          children: [xe.jsx(Ct, {
            size: 14,
            className: "tm-char-search-icon"
          }), xe.jsx("input", {
            className: "tm-char-search-input",
            placeholder: C("tmSearchChar"),
            value: Be,
            onChange: e => We(e.target.value),
            autoFocus: true
          }), Be && xe.jsx("button", {
            className: "tm-close-btn",
            style: {
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)"
            },
            onClick: () => We(""),
            children: xe.jsx(ft, {
              size: 12
            })
          })]
        }), xe.jsx("div", {
          className: "tm-overlay-scroll-list",
          children: g.length === 0 ? xe.jsx("p", {
            className: "tm-panel-empty",
            children: C("tmNoCharsInRoster", "尚無角色，請先在名冊新增")
          }) : l ? (() => {
            const e = g.filter(r);
            if (e.length === 0) {
              return xe.jsx("p", {
                className: "tm-panel-empty",
                children: C("tmNoSearchResult")
              });
            } else {
              return e.map(e => c(e));
            }
          })() : xe.jsxs(xe.Fragment, {
            children: [o.map(e => {
              const t = i[e];
              const n = ut[e];
              const a = o.length > 1;
              return xe.jsxs("div", {
                children: [a && xe.jsxs("div", {
                  className: "tm-char-group-header",
                  onClick: () => mt(t => ({
                    ...t,
                    [e]: !t[e]
                  })),
                  children: [xe.jsx(kt, {
                    size: 14,
                    className: "tm-char-group-arrow",
                    style: {
                      transform: n ? "rotate(0deg)" : "rotate(90deg)"
                    }
                  }), xe.jsx("span", {
                    children: e
                  }), xe.jsx("span", {
                    className: "tm-char-group-count",
                    children: t.length
                  })]
                }), !n && t.map(e => {
                  const t = String(e.id);
                  const n = s[t] || [];
                  const a = ct[t];
                  return xe.jsxs("div", {
                    children: [xe.jsxs("div", {
                      style: {
                        position: "relative",
                        display: "flex",
                        alignItems: "center"
                      },
                      children: [xe.jsx("div", {
                        style: {
                          flex: 1
                        },
                        children: c(e)
                      }), n.length > 0 && xe.jsxs("button", {
                        className: "tm-npc-toggle-btn",
                        onClick: e => {
                          e.stopPropagation();
                          dt(e => ({
                            ...e,
                            [t]: !e[t]
                          }));
                        },
                        children: [xe.jsxs("span", {
                          className: "tm-npc-toggle-label",
                          children: ["NPC ", n.length]
                        }), xe.jsx(Nt, {
                          size: 12,
                          style: {
                            transform: a ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s"
                          }
                        })]
                      })]
                    }), a && n.map(e => c(e, true))]
                  }, e.id);
                })]
              }, e);
            }), a.length > 0 && xe.jsxs("div", {
              children: [xe.jsxs("div", {
                className: "tm-char-group-header",
                onClick: () => mt(e => ({
                  ...e,
                  __unbound_npc: !e.__unbound_npc
                })),
                children: [xe.jsx(kt, {
                  size: 14,
                  className: "tm-char-group-arrow",
                  style: {
                    transform: ut.__unbound_npc ? "rotate(0deg)" : "rotate(90deg)"
                  }
                }), xe.jsx("span", {
                  children: C("tmUnboundNpc")
                }), xe.jsx("span", {
                  className: "tm-char-group-count",
                  children: a.length
                })]
              }), !ut.__unbound_npc && a.map(e => c(e))]
            })]
          })
        })]
      });
    })(), pt && xe.jsxs("div", {
      className: "tm-overlay-panel tm-overlay-centered",
      children: [xe.jsxs("div", {
        className: "tm-panel-title",
        children: [C("tmSelectUser", "選擇使用者"), xe.jsx("button", {
          className: "tm-close-btn",
          onClick: () => ht(false),
          children: xe.jsx(ft, {
            size: 16
          })
        })]
      }), xe.jsx("div", {
        className: "tm-overlay-scroll-list",
        children: f.map((e, t) => xe.jsxs("button", {
          className: "tm-char-item " + (t === Se ? "active" : ""),
          onClick: () => (e => {
            if (e === Se) {
              ht(false);
              return;
            }
            Sr.current++;
            if (br.current) {
              br.current.abort();
              br.current = null;
            }
            if (yr.current) {
              clearTimeout(yr.current);
              yr.current = null;
            }
            Ae(false);
            wr.current = false;
            Nr.current.forEach(e => e.abort());
            Nr.current = [];
            as([]);
            is(false);
            Ne(Wn);
            we(e);
            const t = f[e];
            if (t) {
              const e = t.uid || t.id;
              if (e && e !== y) {
                v(e);
              }
            }
            Ce([]);
            vr.current = false;
            Me(false);
            ht(false);
            yt(false);
          })(t),
          children: [xe.jsx("div", {
            className: "tm-char-item-avatar-wrap",
            children: e.avatar ? e.avatar.startsWith("txt:") ? xe.jsx("div", {
              className: "tm-char-item-avatar",
              style: {
                backgroundColor: "#eee",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#555",
                fontSize: "12px"
              },
              children: e.avatar.substring(4)
            }) : xe.jsx("img", {
              decoding: "async",
              src: e.avatar,
              alt: e.name,
              className: "tm-char-item-avatar"
            }) : xe.jsx("div", {
              className: "tm-char-item-avatar",
              style: {
                backgroundColor: "rgba(128,128,128,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "inherit"
              },
              children: xe.jsxs("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [xe.jsx("path", {
                  d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                }), xe.jsx("circle", {
                  cx: "12",
                  cy: "7",
                  r: "4"
                })]
              })
            })
          }), xe.jsx("div", {
            className: "tm-char-item-text",
            children: xe.jsx("span", {
              className: "tm-char-item-name",
              children: e.name
            })
          }), t === Se && xe.jsx("span", {
            className: "tm-char-item-check",
            children: "✓"
          })]
        }, e.id))
      })]
    }), Ha && xe.jsxs("div", {
      className: "tm-settings-fullscreen",
      style: {
        zIndex: 1100
      },
      children: [xe.jsxs("div", {
        className: "tm-settings-fs-header",
        children: [xe.jsx("button", {
          className: "tm-btn-icon tm-back-icon",
          onClick: () => Va(false),
          children: xe.jsx(gt, {
            size: 20
          })
        }), xe.jsx("div", {
          className: "tm-settings-fs-title",
          children: C("tmCustomCss", "自定義 CSS")
        }), xe.jsx("button", {
          style: {
            fontSize: "14px",
            fontWeight: 600,
            color: "#007aff",
            background: "none",
            border: "none",
            padding: "0 8px",
            cursor: "pointer"
          },
          onClick: async () => {
            Fa(Ga);
            const e = Ja.find(e => e.css === Ga);
            const t = e ? e.name : "";
            Wa(t);
            const n = String(zr == null ? undefined : zr.id);
            if (n) {
              await i.set(`tm_theme_char_${n}`, {
                name: t,
                css: Ga,
                updatedAt: Date.now()
              });
            }
            Va(false);
          },
          children: C("tmCssSave", "套用")
        })]
      }), xe.jsxs("div", {
        className: "tm-settings-fs-content",
        style: {
          padding: "16px",
          paddingBottom: "calc(40px + var(--nuo-safe-bottom, 0px))"
        },
        children: [xe.jsxs("div", {
          style: {
            marginBottom: "24px"
          },
          children: [xe.jsx("div", {
            style: {
              padding: "10px 14px",
              marginBottom: "10px"
            },
            children: xe.jsx("h3", {
              style: {
                margin: 0,
                fontSize: "13px",
                fontWeight: 600,
                color: "#8e8e93",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              },
              children: C("tmCssPresets", "我的預設")
            })
          }), Ja.length === 0 ? xe.jsxs("div", {
            style: {
              background: "#fff",
              borderRadius: "16px",
              padding: "32px 20px",
              textAlign: "center",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
            },
            children: [xe.jsx("div", {
              style: {
                fontSize: "28px",
                marginBottom: "8px"
              },
              children: "🎨"
            }), xe.jsx("div", {
              style: {
                fontSize: "14px",
                color: "#8e8e93"
              },
              children: C("tmCssNoPresets", "還沒有預設")
            }), xe.jsx("div", {
              style: {
                fontSize: "12px",
                color: "#aeaeb2",
                marginTop: "4px"
              },
              children: C("tmCssNoPresetsHint", "編寫 CSS 後可保存為預設")
            })]
          }) : xe.jsx("div", {
            style: {
              background: "#fff",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
            },
            children: Ja.map((e, t) => {
              const n = Ua === e.name;
              const s = Ga === e.css;
              return xe.jsxs("div", {
                style: {
                  padding: "14px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  borderBottom: t < Ja.length - 1 ? "0.5px solid rgba(0,0,0,0.06)" : "none",
                  background: s ? "rgba(0,122,255,0.04)" : "transparent",
                  transition: "background 0.2s"
                },
                children: [xe.jsxs("div", {
                  style: {
                    flex: 1,
                    minWidth: 0
                  },
                  children: [xe.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "6px"
                    },
                    children: [n && xe.jsx("span", {
                      style: {
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#34c759",
                        flexShrink: 0
                      }
                    }), xe.jsx("span", {
                      style: {
                        fontSize: "15px",
                        fontWeight: n ? 600 : 400,
                        color: "#1c1c1e",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                      },
                      children: e.name
                    })]
                  }), xe.jsx("div", {
                    style: {
                      fontSize: "12px",
                      color: "#aeaeb2",
                      marginTop: "2px"
                    },
                    children: new Date(e.updatedAt || e.createdAt).toLocaleDateString()
                  })]
                }), xe.jsxs("div", {
                  style: {
                    display: "flex",
                    gap: "6px",
                    flexShrink: 0
                  },
                  children: [xe.jsx("button", {
                    onClick: () => {
                      Ya(e.css);
                      Wa(e.name);
                      Xa(true);
                    },
                    title: C("tmCssPreview", "預覽"),
                    style: {
                      width: 34,
                      height: 34,
                      borderRadius: "10px",
                      background: "rgba(0,0,0,0.04)",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#8e8e93"
                    },
                    children: xe.jsx(Mt, {
                      size: 15
                    })
                  }), xe.jsx("button", {
                    onClick: () => {
                      Ya(e.css);
                      Wa(e.name);
                      Xa(true);
                    },
                    title: C("tmCssEdit", "編輯"),
                    style: {
                      width: 34,
                      height: 34,
                      borderRadius: "10px",
                      background: s ? "rgba(0,122,255,0.12)" : "rgba(0,0,0,0.04)",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: s ? "#007aff" : "#8e8e93"
                    },
                    children: xe.jsx(At, {
                      size: 15
                    })
                  }), xe.jsx("button", {
                    onClick: async () => {
                      Ya(e.css);
                      Wa(e.name);
                      Fa(e.css);
                      const t = String(zr == null ? undefined : zr.id);
                      if (t) {
                        await i.set(`tm_theme_char_${t}`, {
                          name: e.name,
                          css: e.css,
                          updatedAt: Date.now()
                        });
                      }
                    },
                    title: C("tmCssApply", "啟用"),
                    style: {
                      height: 34,
                      borderRadius: "10px",
                      padding: "0 14px",
                      background: n ? "#34c759" : "#007aff",
                      border: "none",
                      cursor: "pointer",
                      color: "#fff",
                      fontSize: "13px",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px"
                    },
                    children: n ? xe.jsxs(xe.Fragment, {
                      children: [xe.jsx(vt, {
                        size: 13
                      }), " ", C("tmCssInUse", "使用中")]
                    }) : C("tmCssApply", "啟用")
                  }), xe.jsx("button", {
                    onClick: async () => {
                      if (!(await $(C("tmCssDeletePreset", "刪除預設「{name}」？").replace("{name}", e.name)))) {
                        return;
                      }
                      const t = Ja.filter(t => t.id !== e.id);
                      qa(t);
                      await i.set("tm_css_presets", t);
                      if (n) {
                        Wa("");
                      }
                    },
                    title: C("tmCssDeleteBtn", "刪除"),
                    style: {
                      width: 34,
                      height: 34,
                      borderRadius: "10px",
                      background: "rgba(255,59,48,0.08)",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ff3b30"
                    },
                    children: xe.jsx(Et, {
                      size: 14
                    })
                  })]
                })]
              }, e.id);
            })
          })]
        }), xe.jsxs("div", {
          style: {
            marginBottom: "24px"
          },
          children: [xe.jsxs("button", {
            onClick: () => Xa(!Ka),
            style: {
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 18px",
              background: "#fff",
              border: "none",
              borderRadius: "16px",
              cursor: "pointer",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              ...(Ka && {
                borderRadius: "16px 16px 0 0"
              })
            },
            children: [xe.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "10px"
              },
              children: [xe.jsx("span", {
                style: {
                  color: "#007aff",
                  fontSize: "16px"
                },
                children: "<>"
              }), xe.jsx("span", {
                style: {
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#1c1c1e"
                },
                children: C("tmCustomCssCode", "自定義 CSS 代碼")
              })]
            }), xe.jsx("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "#8e8e93",
              strokeWidth: "2.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              style: {
                transform: Ka ? "rotate(180deg)" : "rotate(0)",
                transition: "transform 0.2s"
              },
              children: xe.jsx("polyline", {
                points: "6 9 12 15 18 9"
              })
            })]
          }), Ka && xe.jsxs("div", {
            style: {
              background: "#fff",
              borderRadius: "0 0 16px 16px",
              padding: "0 18px 18px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
            },
            children: [xe.jsx("p", {
              style: {
                margin: "0 0 12px",
                fontSize: "13px",
                color: "#8e8e93"
              },
              children: C("tmCssHint", "修改 :root 變量即可自訂主題外觀")
            }), xe.jsx("textarea", {
              style: {
                width: "100%",
                height: "200px",
                padding: "14px",
                background: "#f8f9fa",
                border: "1.5px solid rgba(0,0,0,0.06)",
                borderRadius: "14px",
                fontSize: "13px",
                fontFamily: "Monaco, Menlo, Consolas, \"Courier New\", monospace",
                resize: "vertical",
                outline: "none",
                color: "#1c1c1e",
                lineHeight: "1.6",
                boxSizing: "border-box",
                tabSize: 2,
                transition: "border-color 0.2s"
              },
              value: Ga,
              onChange: e => Ya(e.target.value),
              placeholder: ":root {\n  --wb-black-bg: #1a1a2e;\n  /* 更多變量見教程 */\n}\n\n.tm-body-char {\n  color: #e0e0e0;\n}",
              spellCheck: false,
              onFocus: e => e.target.style.borderColor = "rgba(0,122,255,0.4)",
              onBlur: e => e.target.style.borderColor = "rgba(0,0,0,0.06)"
            }), xe.jsxs("div", {
              style: {
                display: "flex",
                gap: "8px",
                marginTop: "14px"
              },
              children: [xe.jsxs("button", {
                onClick: () => Fa(Ga),
                style: {
                  flex: 1,
                  padding: "12px",
                  background: "rgba(0,122,255,0.08)",
                  color: "#007aff",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px"
                },
                children: [xe.jsx(Mt, {
                  size: 15
                }), " ", C("tmCssPreviewBtn", "預覽")]
              }), xe.jsxs("button", {
                onClick: async e => {
                  Fa(Ga);
                  const t = Ja.find(e => e.css === Ga);
                  const n = t ? t.name : "";
                  Wa(n);
                  const s = String(zr == null ? undefined : zr.id);
                  if (s) {
                    await i.set(`tm_theme_char_${s}`, {
                      name: n,
                      css: Ga,
                      updatedAt: Date.now()
                    });
                  }
                  const a = e.currentTarget;
                  const r = a.style.background;
                  a.style.background = "#34c759";
                  a.textContent = "✓";
                  setTimeout(() => {
                    a.style.background = r;
                    a.textContent = "";
                  }, 800);
                },
                style: {
                  flex: 1,
                  padding: "12px",
                  background: "linear-gradient(135deg, #007aff, #5856d6)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px"
                },
                children: [xe.jsx(vt, {
                  size: 15
                }), " ", C("tmCssSave", "套用")]
              })]
            }), xe.jsxs("div", {
              style: {
                display: "flex",
                gap: "8px",
                marginTop: "8px"
              },
              children: [xe.jsxs("button", {
                disabled: !(Ga == null ? undefined : Ga.trim()),
                onClick: async () => {
                  const e = await ce(C("tmCssSavePresetName", "預設名稱"), Ua || "");
                  if (!e) {
                    return;
                  }
                  let t;
                  t = Ja.find(t => t.name === e) ? Ja.map(t => t.name === e ? {
                    ...t,
                    css: Ga,
                    updatedAt: Date.now()
                  } : t) : [...Ja, {
                    id: `tmcss_${Date.now()}`,
                    name: e,
                    css: Ga,
                    createdAt: Date.now()
                  }];
                  qa(t);
                  Wa(e);
                  await i.set("tm_css_presets", t);
                  E(C("tmCssPresetSaved", "已保存預設「{name}」").replace("{name}", e));
                },
                style: {
                  flex: 1,
                  padding: "12px",
                  background: "#f5f5f7",
                  color: "#1c1c1e",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  opacity: (Ga == null ? undefined : Ga.trim()) ? 1 : 0.4
                },
                children: [xe.jsx($t, {
                  size: 14
                }), " ", C("tmCssSavePreset", "保存為預設")]
              }), xe.jsxs("button", {
                onClick: () => {
                  const e = document.createElement("input");
                  e.type = "file";
                  e.accept = ".css,.txt,.docx";
                  e.onchange = async e => {
                    var t;
                    const n = (t = e.target.files) == null ? undefined : t[0];
                    if (!n) {
                      return;
                    }
                    const s = n.name.toLowerCase().endsWith(".docx");
                    const a = s ? 2097152 : 102400;
                    if (n.size > a) {
                      E(C("tmCssFileTooLarge", "檔案過大（上限 100KB）"));
                    } else if (s) {
                      try {
                        const e = await n.arrayBuffer();
                        const t = (await o(async () => {
                          const {
                            default: e
                          } = await import("./vendor-mammoth-BGDDh2nq.js").then(e => e.i);
                          return {
                            default: e
                          };
                        }, __vite__mapDeps([12, 3, 5]))).default;
                        const s = await t.extractRawText({
                          arrayBuffer: e
                        });
                        Ya(s.value || "");
                      } catch (r) {
                        console.error("[TM] docx 解析失敗:", r);
                        E(C("tmCssDocxParseFail", "無法解析 .docx 檔案"));
                      }
                    } else {
                      const e = new FileReader();
                      e.onload = () => Ya(e.result);
                      e.readAsText(n);
                    }
                  };
                  e.click();
                },
                style: {
                  flex: 1,
                  padding: "12px",
                  background: "#f5f5f7",
                  color: "#1c1c1e",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px"
                },
                children: [xe.jsx(Pt, {
                  size: 14
                }), " ", C("tmCssImportFile", "導入")]
              }), xe.jsxs("button", {
                disabled: !(Ga == null ? undefined : Ga.trim()) && !(Oa == null ? undefined : Oa.trim()),
                onClick: async () => {
                  const e = (Ga == null ? undefined : Ga.trim()) || (Oa == null ? undefined : Oa.trim());
                  if (!e) {
                    return;
                  }
                  const t = Ua || "此時此刻主題";
                  const n = new Blob([e], {
                    type: "text/css;charset=utf-8"
                  });
                  await pe(n, `${t}.css`);
                },
                style: {
                  flex: 1,
                  padding: "12px",
                  background: "#f5f5f7",
                  color: "#1c1c1e",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  opacity: (Ga == null ? undefined : Ga.trim()) || (Oa == null ? undefined : Oa.trim()) ? 1 : 0.4
                },
                children: [xe.jsx(St, {
                  size: 14
                }), " ", C("tmCssExportFile", "導出")]
              })]
            })]
          })]
        }), xe.jsxs("div", {
          style: {
            borderRadius: "14px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
            border: "1px solid rgba(0,0,0,0.06)",
            marginBottom: "16px"
          },
          children: [xe.jsxs("div", {
            style: {
              padding: "10px 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              borderBottom: "0.5px solid rgba(0,0,0,0.06)"
            },
            children: [xe.jsx("span", {
              style: {
                fontSize: "12px",
                fontWeight: 600,
                color: "#8e8e93",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              },
              children: C("tmCssPreview", "效果預覽")
            }), (Ga == null ? undefined : Ga.trim()) !== (Oa || "").trim() && (Ga == null ? undefined : Ga.trim()) && xe.jsx("span", {
              style: {
                fontSize: "11px",
                color: "#ff9500",
                fontWeight: 500
              },
              children: C("tmCssUnsaved", "未套用")
            })]
          }), xe.jsx("iframe", {
            title: "tm-css-preview",
            sandbox: "",
            style: {
              width: "100%",
              height: "500px",
              border: "none",
              display: "block"
            },
            srcDoc: si
          })]
        }), (Oa == null ? undefined : Oa.trim()) && xe.jsx("button", {
          onClick: async () => {
            Fa("");
            Ya("");
            Wa("");
            const e = String(zr == null ? undefined : zr.id);
            if (e) {
              await i.set(`tm_theme_char_${e}`, null);
            }
          },
          style: {
            width: "100%",
            padding: "15px",
            background: "#fff",
            color: "#ff3b30",
            border: "none",
            borderRadius: "14px",
            fontSize: "15px",
            fontWeight: 500,
            cursor: "pointer",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            marginBottom: "16px"
          },
          children: C("tmCssResetDefault", "恢復預設主題")
        }), xe.jsx("div", {
          style: {
            textAlign: "center",
            padding: "16px"
          },
          children: xe.jsx("p", {
            style: {
              fontSize: "12px",
              color: "#aeaeb2",
              margin: 0
            },
            children: C("tmCssFooterHint", "修改 CSS 變量即可自訂此時此刻外觀")
          })
        })]
      })]
    }), xe.jsx("input", {
      ref: el,
      type: "file",
      accept: "application/json,.json",
      onChange: nl,
      style: {
        display: "none"
      }
    }), ia && la === "multi" && xe.jsx("div", {
      className: "tm-session-browser-overlay",
      onClick: () => {
        oa(false);
        Ko();
      },
      children: xe.jsx("div", {
        className: "tm-session-browser",
        onClick: e => e.stopPropagation(),
        children: xe.jsx(En, {
          sessions: Fr.sessions,
          activeSessionId: Fr.activeSessionId,
          sessionEntryCounts: Gr,
          characterMap: Ur,
          isManageMode: Wo,
          manageSelected: Vo,
          onToggleManage: Yo,
          onEnterManage: () => {
            Ho(true);
            Go(new Set());
          },
          onExitManage: Ko,
          onBatchDelete: Jo,
          onBatchExport: sl,
          onBatchMerge: qo,
          onExportSession: Zo,
          onRenameSession: async e => {
            const t = await ce(C("tmMultiRenamePagePrompt", "分頁名稱（純列表標籤，不影響 AI）"), us(e));
            if (t === null) {
              return;
            }
            const n = (t || "").trim();
            if (n && n !== us(e)) {
              try {
                await Fr.updateSession(e._id, {
                  pageName: n
                });
              } catch (s) {
                console.error("[MultiScene] 重命名分頁失敗:", s);
              }
            }
          },
          onNewSession: () => Xo(false),
          onNewSpectate: () => Xo(true),
          onSwitchSession: e => {
            Fr.switchToSession(e._id);
            oa(false);
            Ko();
          },
          onClose: () => {
            oa(false);
            Ko();
          },
          t: C,
          tOr: (e, t) => {
            const n = C(e);
            if (n === e) {
              return t;
            } else {
              return n;
            }
          }
        })
      })
    }), ia && la === "single" && xe.jsx("div", {
      className: "tm-session-browser-overlay",
      onClick: () => {
        oa(false);
        Ko();
      },
      children: xe.jsxs("div", {
        className: "tm-session-browser",
        onClick: e => e.stopPropagation(),
        children: [xe.jsxs("div", {
          className: "tm-session-browser-header",
          children: [xe.jsx("span", {
            className: "tm-session-browser-title",
            children: Wo ? C("tmManageTitle", "管理分頁") + (Vo.size > 0 ? ` (${Vo.size})` : "") : C("tmSessionBrowserTitle", "分頁記錄")
          }), xe.jsx("button", {
            className: "tm-btn-icon",
            onClick: () => {
              oa(false);
              Ko();
            },
            children: xe.jsx(ft, {
              size: 18
            })
          })]
        }), xe.jsx("div", {
          className: "tm-session-toolbar",
          children: Wo ? xe.jsxs("div", {
            className: "tm-manage-actions",
            children: [xe.jsxs("button", {
              className: "tm-manage-action-btn",
              onClick: pl,
              disabled: Vo.size === 0,
              title: C("tmExport", "導出 TXT"),
              children: [xe.jsx(St, {
                size: 15
              }), xe.jsx("span", {
                children: C("tmExportShort", "導出")
              })]
            }), xe.jsxs("button", {
              className: "tm-manage-action-btn",
              onClick: ul,
              disabled: Vo.size < 2,
              title: C("tmMergeBtn", "合併分頁"),
              children: [xe.jsx(Tt, {
                size: 15
              }), xe.jsx("span", {
                children: C("tmMergeShort", "合併")
              })]
            }), xe.jsxs("button", {
              className: "tm-manage-action-btn tm-manage-delete",
              onClick: ml,
              disabled: Vo.size === 0,
              title: C("tmDelete", "刪除"),
              children: [xe.jsx(Et, {
                size: 15
              }), xe.jsx("span", {
                children: C("tmDelete", "刪除")
              })]
            }), xe.jsx("div", {
              style: {
                flex: 1
              }
            }), xe.jsxs("button", {
              className: "tm-manage-action-btn",
              onClick: Ko,
              children: [xe.jsx(ft, {
                size: 15
              }), xe.jsx("span", {
                children: C("tmDone", "完成")
              })]
            })]
          }) : xe.jsxs(xe.Fragment, {
            children: [xe.jsxs("button", {
              className: "tm-session-new-btn",
              onClick: () => Bo(),
              children: [xe.jsx(jt, {
                size: 14
              }), C("tmNewSession", "新建分頁")]
            }), xe.jsxs("button", {
              className: "tm-session-new-btn",
              onClick: () => Bo({
                spectate: true
              }),
              title: C("tmNewSpectateHint", "旁觀模式：user 不在場，AI 寫 char 一人的小說"),
              children: [xe.jsx("span", {
                style: {
                  fontSize: 14,
                  lineHeight: 1
                },
                children: "🌙"
              }), C("tmNewSpectateSession", "旁觀分頁")]
            }), xe.jsxs("button", {
              className: "tm-session-new-btn",
              onClick: () => {
                Ho(true);
                Go(new Set());
              },
              children: [xe.jsx(It, {
                size: 14
              }), C("tmManageBtn", "管理")]
            })]
          })
        }), xe.jsxs("div", {
          className: "tm-session-list",
          children: [[...ea].reverse().map(e => {
            const t = e._id === na;
            const n = Vo.has(e._id);
            const s = La[e._id];
            const a = e.createdAt ? new Date(e.createdAt).toLocaleDateString("zh-TW") : "";
            return xe.jsxs("div", {
              className: `tm-session-item ${t ? "active" : ""} ${n ? "merge-selected" : ""}`,
              onClick: () => Wo ? Yo(e._id) : Do(e),
              children: [Wo && xe.jsx("div", {
                className: "tm-session-checkbox",
                style: {
                  width: 20,
                  height: 20,
                  borderRadius: 4,
                  border: "2px solid " + (n ? "#4caf50" : "#ccc"),
                  background: n ? "#4caf50" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 10,
                  flexShrink: 0
                },
                children: n && xe.jsx(vt, {
                  size: 14,
                  color: "#fff"
                })
              }), xe.jsxs("div", {
                className: "tm-session-item-main",
                style: {
                  flex: 1
                },
                children: [xe.jsxs("span", {
                  className: "tm-session-item-name",
                  children: [e.spectate === true && xe.jsx("span", {
                    title: C("tmSpectateBadgeHint", "旁觀分頁：user 不在場"),
                    style: {
                      marginRight: 4
                    },
                    children: "🌙"
                  }), e.name || a || C("tmUntitledSession", "未命名")]
                }), xe.jsxs("span", {
                  className: "tm-session-item-meta",
                  children: [s != null ? `${s} ${C("tmSessionEntries", "條")}` : "", a ? ` · ${a}` : ""]
                })]
              }), !Wo && xe.jsxs("div", {
                className: "tm-session-item-actions",
                children: [xe.jsx("button", {
                  className: "tm-session-action-btn",
                  onClick: t => {
                    t.stopPropagation();
                    Uo(e);
                  },
                  title: C("tmExport", "導出 TXT"),
                  children: xe.jsx(St, {
                    size: 13
                  })
                }), xe.jsx("button", {
                  className: "tm-session-action-btn",
                  onClick: t => {
                    t.stopPropagation();
                    Oo(e);
                  },
                  title: C("tmRename", "重命名"),
                  children: xe.jsx(At, {
                    size: 13
                  })
                }), xe.jsx("button", {
                  className: "tm-session-action-btn tm-session-delete-btn",
                  onClick: t => {
                    t.stopPropagation();
                    Fo(e);
                  },
                  title: C("tmDelete", "刪除"),
                  children: xe.jsx(Et, {
                    size: 13
                  })
                })]
              })]
            }, e._id);
          }), ea.length === 0 && xe.jsx("div", {
            className: "tm-session-empty",
            children: C("tmNoSessions", "暫無分頁")
          })]
        })]
      })
    }), xt && xe.jsxs("div", {
      className: "tm-settings-fullscreen",
      children: [xe.jsxs("div", {
        className: "tm-settings-fs-header",
        children: [xe.jsx("button", {
          className: "tm-btn-icon tm-back-icon",
          onClick: async () => {
            if (la === "multi") {
              await Mi();
            }
            yt(false);
          },
          children: xe.jsx(gt, {
            size: 20
          })
        }), xe.jsx("div", {
          className: "tm-settings-fs-title",
          children: la === "multi" ? C("tmMultiSettingsTitle", "多人場景設定") : C("tmSettingsTitle", "故事設定")
        }), xe.jsx("button", {
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            color: "#4caf50",
            background: "none",
            border: "none",
            padding: "0 8px",
            cursor: "pointer"
          },
          onClick: async () => {
            if (la === "multi") {
              await Mi();
            }
            yt(false);
          },
          children: C("btnSave", "保存")
        })]
      }), xe.jsxs("div", {
        className: "tm-settings-fs-content",
        children: [la === "multi" && xe.jsxs("div", {
          className: "tm-settings-section",
          children: [xe.jsxs("div", {
            style: {
              marginBottom: "16px",
              display: "flex",
              alignItems: "flex-start",
              gap: 12
            },
            children: [xe.jsxs("label", {
              style: {
                position: "relative",
                flex: "0 0 auto",
                marginTop: 24,
                width: 56,
                height: 56,
                borderRadius: 12,
                overflow: "hidden",
                background: "var(--tm-bg-soft, #f1f5f9)",
                border: "1px dashed var(--tm-border, rgba(0,0,0,0.15))",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--tm-fg-muted, #9ca3af)",
                fontSize: 11
              },
              title: C("tmMultiSettingsSceneAvatarHint", "點擊上傳場景頭像；長按清除"),
              onContextMenu: e => {
                e.preventDefault();
                if (ya) {
                  va("");
                }
              },
              children: [ya ? xe.jsx("img", {
                src: ya,
                alt: "scene",
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }
              }) : xe.jsx("span", {
                style: {
                  textAlign: "center",
                  lineHeight: 1.3,
                  padding: 4
                },
                children: C("tmMultiSettingsSceneAvatarHint", "場景頭像")
              }), xe.jsx("input", {
                type: "file",
                accept: "image/*",
                style: {
                  display: "none"
                },
                onChange: e => {
                  var t;
                  const n = (t = e.target.files) == null ? undefined : t[0];
                  if (!n) {
                    return;
                  }
                  const s = new FileReader();
                  s.onload = () => {
                    va(String(s.result || ""));
                  };
                  s.readAsDataURL(n);
                  e.target.value = "";
                }
              })]
            }), xe.jsxs("div", {
              style: {
                flex: 1,
                minWidth: 0
              },
              children: [xe.jsx("span", {
                className: "tm-settings-label",
                children: C("tmMultiSettingsSceneName", "場景名稱")
              }), xe.jsx("input", {
                type: "text",
                className: "tm-input",
                value: xa,
                onChange: e => fa(e.target.value),
                placeholder: C("tmMultiSettingsSceneNamePh", "例：暴風雪山莊、初次約會、深夜辦公室"),
                style: {
                  width: "100%",
                  marginTop: "8px"
                }
              }), xe.jsx("div", {
                style: {
                  fontSize: "12px",
                  color: "#999",
                  marginTop: "6px"
                },
                children: C("tmMultiSettingsSceneNameHint", "純展示用，僅幫助你識別這場戲；不影響 AI 敘事（叙事看下方的大綱與文風）")
              })]
            })]
          }), xe.jsxs("div", {
            style: {
              marginBottom: "16px"
            },
            children: [xe.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              },
              children: [xe.jsxs("span", {
                className: "tm-settings-label",
                children: ["🌙 ", C("tmMultiSpectateLabel", "旁觀模式")]
              }), xe.jsxs("label", {
                style: {
                  position: "relative",
                  display: "inline-block",
                  width: "40px",
                  height: "22px"
                },
                children: [xe.jsx("input", {
                  type: "checkbox",
                  style: {
                    opacity: 0,
                    width: 0,
                    height: 0
                  },
                  checked: ha,
                  onChange: e => ga(e.target.checked)
                }), xe.jsx("span", {
                  style: {
                    position: "absolute",
                    cursor: "pointer",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: ha ? "#6366f1" : "#ccc",
                    transition: ".4s",
                    borderRadius: "22px"
                  },
                  children: xe.jsx("span", {
                    style: {
                      position: "absolute",
                      height: "16px",
                      width: "16px",
                      left: "3px",
                      bottom: "3px",
                      backgroundColor: "white",
                      transition: ".4s",
                      borderRadius: "50%",
                      transform: ha ? "translateX(18px)" : "translateX(0)"
                    }
                  })
                })]
              })]
            }), xe.jsx("div", {
              style: {
                fontSize: "12px",
                color: "#999",
                marginTop: "4px"
              },
              children: C("tmMultiSpectateHint", "user 不在場，AI 只寫 NPC 之間的互動")
            })]
          }), xe.jsxs("div", {
            style: {
              marginBottom: "4px"
            },
            children: [xe.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "8px"
              },
              children: [xe.jsxs("span", {
                className: "tm-settings-label",
                children: ["👥 ", C("tmMultiMembersLabel", "場景成員")]
              }), xe.jsxs("button", {
                type: "button",
                onClick: () => De(true),
                style: {
                  fontSize: 12,
                  padding: "4px 10px",
                  background: "#6366f1",
                  color: "#fff",
                  border: "none",
                  borderRadius: 12,
                  cursor: "pointer",
                  fontWeight: 600
                },
                children: ["+ ", C("tmMultiAddMember", "加入成員")]
              })]
            }), xe.jsx("div", {
              style: {
                display: "flex",
                flexWrap: "wrap",
                gap: 6
              },
              children: Wr.map(e => xe.jsxs("div", {
                style: {
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 10px",
                  background: "#f1f5f9",
                  borderRadius: 14,
                  fontSize: 12,
                  color: "#374151"
                },
                children: [xe.jsx("span", {
                  children: e.name
                }), Wr.length > 2 && xe.jsx("button", {
                  type: "button",
                  onClick: () => Li(e),
                  title: C("tmMultiRemoveMember", "移除成員"),
                  style: {
                    background: "transparent",
                    border: "none",
                    color: "#94a3b8",
                    cursor: "pointer",
                    padding: 0,
                    fontSize: 14,
                    lineHeight: 1
                  },
                  children: "✕"
                })]
              }, e.id))
            }), xe.jsx("div", {
              style: {
                fontSize: "12px",
                color: "#999",
                marginTop: "6px"
              },
              children: C("tmMultiMembersHint", "加退人後下一段 AI 會自動寫出入場/離場橋段，前面的故事保留不變")
            })]
          }), xe.jsxs("div", {
            style: {
              marginBottom: "4px"
            },
            children: [xe.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "8px"
              },
              children: [xe.jsxs("span", {
                className: "tm-settings-label",
                children: ["🎬 ", C("tmMultiAutoCastLabel", "AI 自主出入場")]
              }), xe.jsxs("select", {
                value: ba,
                onChange: e => Sa(e.target.value),
                style: {
                  padding: "4px 8px",
                  borderRadius: 8,
                  border: "1px solid var(--tm-border, rgba(0,0,0,0.12))",
                  background: "transparent",
                  fontSize: 13,
                  color: "var(--tm-fg, #374151)",
                  cursor: "pointer"
                },
                children: [xe.jsx("option", {
                  value: "off",
                  children: C("tmMultiAutoCastOff", "關閉")
                }), xe.jsx("option", {
                  value: "suggest",
                  children: C("tmMultiAutoCastSuggest", "建議（需確認）")
                }), xe.jsx("option", {
                  value: "auto",
                  children: C("tmMultiAutoCastAuto", "全自動")
                })]
              })]
            }), xe.jsx("div", {
              style: {
                fontSize: "12px",
                color: "#999",
                marginTop: "4px"
              },
              children: C("tmMultiAutoCastHint", "候選池：當前在場角色綁定的 NPC、跟在場角色同組的主角色。每段最多加 1 人 / 退 1 人。")
            })]
          })]
        }), xe.jsxs("div", {
          className: "tm-settings-section",
          children: [xe.jsxs("div", {
            style: {
              marginBottom: "16px"
            },
            children: [xe.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "8px"
              },
              children: [xe.jsx("span", {
                className: "tm-settings-label",
                children: C("tmScenarioTitle", "當前劇情大綱 (Scenario)")
              }), xe.jsxs("label", {
                style: {
                  position: "relative",
                  display: "inline-block",
                  width: "40px",
                  height: "22px"
                },
                title: C("tmAutoSceneUpdateDesc", "關閉後 AI 不會自動更新劇情大綱（避免 AI 誤改破壞劇情）"),
                children: [xe.jsx("input", {
                  type: "checkbox",
                  style: {
                    opacity: 0,
                    width: 0,
                    height: 0
                  },
                  checked: Pn,
                  onChange: e => Rn(e.target.checked)
                }), xe.jsx("span", {
                  style: {
                    position: "absolute",
                    cursor: "pointer",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: Pn ? "#4caf50" : "#ccc",
                    transition: ".4s",
                    borderRadius: "22px"
                  },
                  children: xe.jsx("span", {
                    style: {
                      position: "absolute",
                      height: "16px",
                      width: "16px",
                      left: "3px",
                      bottom: "3px",
                      backgroundColor: "white",
                      transition: ".4s",
                      borderRadius: "50%",
                      transform: Pn ? "translateX(18px)" : "translateX(0)"
                    }
                  })
                })]
              })]
            }), xe.jsx("div", {
              style: {
                fontSize: "12px",
                color: "#999",
                marginBottom: "8px"
              },
              children: C("tmAutoSceneUpdateDesc", "AI 自動跟新大綱（關閉後 AI 不會修改大綱，避免破壞劇情）")
            }), xe.jsx("textarea", {
              className: "tm-input",
              style: {
                width: "100%",
                minHeight: "80px"
              },
              value: In,
              onChange: e => Mn(e.target.value),
              placeholder: C("tmScenarioPlaceholder", "描述目前所在的場景或強制環境... (例如: 這是暴風雪山莊，你正在替我包紮)")
            })]
          }), la !== "multi" && xe.jsxs("div", {
            style: {
              marginBottom: "16px"
            },
            children: [xe.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "8px"
              },
              children: [xe.jsxs("span", {
                className: "tm-settings-label",
                children: ["🎬 ", C("tmSoloUpgradeLabel", "AI 邀請新角色加入")]
              }), xe.jsxs("select", {
                value: Ta,
                onChange: e => Ea(e.target.value),
                style: {
                  padding: "4px 8px",
                  borderRadius: 8,
                  border: "1px solid var(--tm-border, rgba(0,0,0,0.12))",
                  background: "transparent",
                  fontSize: 13,
                  color: "var(--tm-fg, #374151)",
                  cursor: "pointer"
                },
                children: [xe.jsx("option", {
                  value: "off",
                  children: C("tmSoloUpgradeOff", "關閉")
                }), xe.jsx("option", {
                  value: "suggest",
                  children: C("tmSoloUpgradeSuggest", "建議（需確認）")
                }), xe.jsx("option", {
                  value: "auto",
                  children: C("tmSoloUpgradeAuto", "全自動")
                })]
              })]
            }), xe.jsx("div", {
              style: {
                fontSize: "12px",
                color: "#999",
                marginTop: "4px"
              },
              children: C("tmSoloUpgradeHint", "AI 認為劇情需要另一個角色出場時，會邀請進場並自動升級為多人場景。候選池：本角色綁定的 NPC、跟本角色同組的主角色。")
            })]
          }), la !== "multi" && xe.jsxs("div", {
            style: {
              marginBottom: "16px"
            },
            children: [xe.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "8px"
              },
              children: [xe.jsx("span", {
                className: "tm-settings-label",
                children: C("tmGreetingTitle", "角色開場白")
              }), xe.jsxs("label", {
                style: {
                  position: "relative",
                  display: "inline-block",
                  width: "40px",
                  height: "22px"
                },
                children: [xe.jsx("input", {
                  type: "checkbox",
                  style: {
                    opacity: 0,
                    width: 0,
                    height: 0
                  },
                  checked: Na,
                  onChange: e => Ia(e.target.checked)
                }), xe.jsx("span", {
                  style: {
                    position: "absolute",
                    cursor: "pointer",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: Na ? "#4caf50" : "#ccc",
                    transition: ".4s",
                    borderRadius: "22px"
                  },
                  children: xe.jsx("span", {
                    style: {
                      position: "absolute",
                      height: "16px",
                      width: "16px",
                      left: "3px",
                      bottom: "3px",
                      backgroundColor: "white",
                      transition: ".4s",
                      borderRadius: "50%",
                      transform: Na ? "translateX(18px)" : "translateX(0)"
                    }
                  })
                })]
              })]
            }), xe.jsx("div", {
              style: {
                fontSize: "12px",
                color: "#999",
                marginBottom: "8px"
              },
              children: C("tmAutoGreetingDesc", "關閉後新分頁不會自動出現預設開場白")
            }), xe.jsx("textarea", {
              className: "tm-input",
              style: {
                width: "100%",
                minHeight: "120px",
                opacity: Na ? 1 : 0.5
              },
              value: nn,
              onChange: e => {
                const t = e.target.value;
                an(t);
                Ce(e => {
                  if (e.length > 0 && e[0].id === "greeting") {
                    const n = [...e];
                    n[0] = {
                      ...n[0],
                      content: t
                    };
                    return n;
                  }
                  return e;
                });
              },
              placeholder: C("tmGreetingPlaceholder", "輸入自定義開場白..."),
              disabled: !zr || !Na
            })]
          }), xe.jsxs("div", {
            style: {
              marginBottom: "16px"
            },
            children: [xe.jsx("span", {
              className: "tm-settings-label",
              style: {
                display: "block",
                marginBottom: "8px"
              },
              children: C("tmStylePreset", "文風預設")
            }), xe.jsxs("div", {
              className: "tm-options-row",
              style: {
                marginBottom: "10px"
              },
              children: [ns.map((e, t) => xe.jsx("button", {
                className: "tm-pill-btn " + (Yt === "b" + t ? "active" : ""),
                onClick: () => {
                  Gt(C(e.descKey, e.desc));
                  Kt("b" + t);
                },
                children: C(e.labelKey, e.label)
              }, e.labelKey)), qt.map((e, t) => xe.jsxs("span", {
                className: "tm-pill-custom-wrap",
                children: [xe.jsx("button", {
                  className: "tm-pill-btn tm-pill-custom " + (Yt === "c" + t ? "active" : ""),
                  onClick: () => {
                    Gt(e.desc);
                    Kt("c" + t);
                  },
                  children: e.label
                }), xe.jsx("button", {
                  className: "tm-pill-delete",
                  onClick: () => (e => {
                    const t = qt.filter((t, n) => n !== e);
                    Zt(t);
                    i.set("tm_custom_style_presets", t);
                    if (Yt == null ? undefined : Yt.startsWith("c")) {
                      const t = parseInt(Yt.slice(1), 10);
                      if (t === e) {
                        Kt(null);
                      } else if (t > e) {
                        Kt("c" + (t - 1));
                      }
                    }
                  })(t),
                  children: "×"
                })]
              }, "c" + t)), xe.jsx("button", {
                className: "tm-pill-btn tm-pill-add",
                onClick: async () => {
                  const e = await ce("請輸入新文風名稱：");
                  if (!(e == null ? undefined : e.trim())) {
                    return;
                  }
                  const t = Vt || "";
                  const n = {
                    label: e.trim(),
                    desc: t
                  };
                  const s = [...qt, n];
                  Zt(s);
                  Kt("c" + (s.length - 1));
                  i.set("tm_custom_style_presets", s);
                },
                children: "+"
              })]
            }), xe.jsx("textarea", {
              className: "tm-input",
              style: {
                width: "100%",
                minHeight: "80px"
              },
              value: Vt,
              onChange: e => {
                const t = e.target.value;
                Gt(t);
                if (Yt == null ? undefined : Yt.startsWith("c")) {
                  const e = parseInt(Yt.slice(1), 10);
                  Zt(n => {
                    if (e < 0 || e >= n.length) {
                      return n;
                    }
                    const s = [...n];
                    s[e] = {
                      ...s[e],
                      desc: t
                    };
                    i.set("tm_custom_style_presets", s);
                    return s;
                  });
                } else {
                  Kt(null);
                }
              },
              placeholder: C("tmStylePlaceholder", "輸入自定義文風...")
            }), xe.jsx("div", {
              style: {
                fontSize: "11px",
                color: "#999",
                marginTop: "6px"
              },
              children: C("tmStyleHint", "點擊預設按鈕快速切換，或直接編輯上方文字。點 + 可將當前文風存為新預設。")
            })]
          }), xe.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "16px"
            },
            children: [xe.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column"
              },
              children: [xe.jsx("span", {
                className: "tm-settings-label",
                style: {
                  marginBottom: 0
                },
                children: C("labelRealTime", "即時時間感應")
              }), xe.jsx("span", {
                style: {
                  fontSize: "11px",
                  color: "#999",
                  marginTop: "2px"
                },
                children: C("descRealTime", "感知現實時間與晝夜")
              })]
            }), xe.jsxs("label", {
              style: {
                position: "relative",
                display: "inline-block",
                width: "40px",
                height: "22px",
                flexShrink: 0
              },
              children: [xe.jsx("input", {
                type: "checkbox",
                style: {
                  opacity: 0,
                  width: 0,
                  height: 0
                },
                checked: Rs,
                onChange: () => _s(e => !e)
              }), xe.jsx("span", {
                style: {
                  position: "absolute",
                  cursor: "pointer",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: Rs ? "#4caf50" : "#ccc",
                  transition: ".4s",
                  borderRadius: "22px"
                },
                children: xe.jsx("span", {
                  style: {
                    position: "absolute",
                    height: "16px",
                    width: "16px",
                    left: "3px",
                    bottom: "3px",
                    backgroundColor: "white",
                    transition: ".4s",
                    borderRadius: "50%",
                    transform: Rs ? "translateX(18px)" : "translateX(0)"
                  }
                })
              })]
            })]
          }), xe.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "16px"
            },
            children: [xe.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column"
              },
              children: [xe.jsx("span", {
                className: "tm-settings-label",
                style: {
                  marginBottom: 0
                },
                children: C("labelRerollVariants", "重Roll版本選擇器")
              }), xe.jsx("span", {
                style: {
                  fontSize: "11px",
                  color: "#999",
                  marginTop: "2px"
                },
                children: C("descRerollVariants", "重Roll時保留所有版本，可來回比較後確認")
              })]
            }), xe.jsxs("label", {
              style: {
                position: "relative",
                display: "inline-block",
                width: "40px",
                height: "22px",
                flexShrink: 0
              },
              children: [xe.jsx("input", {
                type: "checkbox",
                style: {
                  opacity: 0,
                  width: 0,
                  height: 0
                },
                checked: Fn,
                onChange: () => Hn(e => !e)
              }), xe.jsx("span", {
                style: {
                  position: "absolute",
                  cursor: "pointer",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: Fn ? "#4caf50" : "#ccc",
                  transition: ".4s",
                  borderRadius: "22px"
                },
                children: xe.jsx("span", {
                  style: {
                    position: "absolute",
                    height: "16px",
                    width: "16px",
                    left: "3px",
                    bottom: "3px",
                    backgroundColor: "white",
                    transition: ".4s",
                    borderRadius: "50%",
                    transform: Fn ? "translateX(18px)" : "translateX(0)"
                  }
                })
              })]
            })]
          }), xe.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [xe.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column"
              },
              children: [xe.jsx("span", {
                className: "tm-settings-label",
                style: {
                  marginBottom: 0
                },
                children: C("tmCgEnabled", "CG 插圖")
              }), xe.jsx("span", {
                style: {
                  fontSize: "11px",
                  color: "#999",
                  marginTop: "2px"
                },
                children: Aa ? Ci ? C("tmCgReady", "已就緒") : C("tmCgNoApi", "未配置生圖 API") : C("tmCgOff", "關閉")
              })]
            }), xe.jsxs("label", {
              style: {
                position: "relative",
                display: "inline-block",
                width: "40px",
                height: "22px",
                flexShrink: 0
              },
              children: [xe.jsx("input", {
                type: "checkbox",
                style: {
                  opacity: 0,
                  width: 0,
                  height: 0
                },
                checked: Aa,
                onChange: () => $a(e => !e)
              }), xe.jsx("span", {
                style: {
                  position: "absolute",
                  cursor: "pointer",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: Aa ? Ci ? "#4caf50" : "#ff9800" : "#ccc",
                  transition: ".4s",
                  borderRadius: "22px"
                },
                children: xe.jsx("span", {
                  style: {
                    position: "absolute",
                    height: "16px",
                    width: "16px",
                    left: "3px",
                    bottom: "3px",
                    backgroundColor: "white",
                    transition: ".4s",
                    borderRadius: "50%",
                    transform: Aa ? "translateX(18px)" : "translateX(0)"
                  }
                })
              })]
            })]
          }), Aa && xe.jsxs("div", {
            style: {
              marginTop: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "8px"
            },
            children: [xe.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                flex: 1
              },
              children: [xe.jsx("span", {
                className: "tm-settings-label",
                style: {
                  marginBottom: 0
                },
                children: C("tmCgModeLabel", "CG 提示詞模式")
              }), xe.jsx("span", {
                style: {
                  fontSize: "11px",
                  color: "#999",
                  marginTop: "2px"
                },
                children: Ma === "combined" ? C("tmCgModeCombinedDesc", "直接用主回覆中的 [CG:] 文字（節省一次 API）") : C("tmCgModeSeparateDesc", "額外請求精修提示詞（使用下方獨立 API，品質更高）")
              })]
            }), xe.jsxs("select", {
              value: Ma,
              onChange: e => Pa(e.target.value),
              style: {
                padding: "6px 8px",
                borderRadius: "6px",
                border: "1px solid #ddd",
                fontSize: "13px",
                backgroundColor: "#fff",
                outline: "none",
                flexShrink: 0
              },
              children: [xe.jsx("option", {
                value: "combined",
                children: C("tmCgModeCombined", "合併")
              }), xe.jsx("option", {
                value: "separate",
                children: C("tmCgModeSeparate", "額外請求")
              })]
            })]
          }), la !== "multi" && xe.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "12px"
            },
            children: [xe.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                flex: 1,
                paddingRight: "12px"
              },
              children: [xe.jsx("span", {
                className: "tm-settings-label",
                style: {
                  marginBottom: 0
                },
                children: C("tmAllowOnlineActsLabel", "線下生成線上內容")
              }), xe.jsx("span", {
                style: {
                  fontSize: "11px",
                  color: "#999",
                  marginTop: "2px",
                  lineHeight: 1.4
                },
                children: C("tmAllowOnlineActsDesc", "關閉時，TM 線下場景不會發朋友圈、便簽、評論等線上行為，只專注散文敘事")
              })]
            }), xe.jsxs("label", {
              style: {
                position: "relative",
                display: "inline-block",
                width: "40px",
                height: "22px",
                flexShrink: 0
              },
              children: [xe.jsx("input", {
                type: "checkbox",
                style: {
                  opacity: 0,
                  width: 0,
                  height: 0
                },
                checked: Ra,
                onChange: () => _a(e => !e)
              }), xe.jsx("span", {
                style: {
                  position: "absolute",
                  cursor: "pointer",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: Ra ? "#4caf50" : "#ccc",
                  transition: ".4s",
                  borderRadius: "22px"
                },
                children: xe.jsx("span", {
                  style: {
                    position: "absolute",
                    height: "16px",
                    width: "16px",
                    left: "3px",
                    bottom: "3px",
                    backgroundColor: "white",
                    transition: ".4s",
                    borderRadius: "50%",
                    transform: Ra ? "translateX(18px)" : "translateX(0)"
                  }
                })
              })]
            })]
          }), xe.jsxs("div", {
            style: {
              marginTop: "16px",
              padding: "12px",
              borderRadius: "8px",
              background: "rgba(0,0,0,0.02)",
              border: "1px solid rgba(0,0,0,0.05)"
            },
            children: [xe.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "8px"
              },
              children: [xe.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column"
                },
                children: [xe.jsx("span", {
                  className: "tm-settings-label",
                  style: {
                    marginBottom: 0
                  },
                  children: C("tmImgPromptApiTitle", "圖片提示詞 AI（獨立 API）")
                }), xe.jsx("span", {
                  style: {
                    fontSize: "11px",
                    color: "#999",
                    marginTop: "2px"
                  },
                  children: C("tmImgPromptApiDesc", "為 拍下此時此刻 與 CG 額外請求 指定獨立 LLM API（全局共用）")
                })]
              }), xe.jsxs("label", {
                style: {
                  position: "relative",
                  display: "inline-block",
                  width: "40px",
                  height: "22px",
                  flexShrink: 0
                },
                children: [xe.jsx("input", {
                  type: "checkbox",
                  style: {
                    opacity: 0,
                    width: 0,
                    height: 0
                  },
                  checked: !!xi.enabled,
                  onChange: e => fi(t => ({
                    ...t,
                    enabled: e.target.checked
                  }))
                }), xe.jsx("span", {
                  style: {
                    position: "absolute",
                    cursor: "pointer",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: xi.enabled ? "#4caf50" : "#ccc",
                    transition: ".4s",
                    borderRadius: "22px"
                  },
                  children: xe.jsx("span", {
                    style: {
                      position: "absolute",
                      height: "16px",
                      width: "16px",
                      left: "3px",
                      bottom: "3px",
                      backgroundColor: "white",
                      transition: ".4s",
                      borderRadius: "50%",
                      transform: xi.enabled ? "translateX(18px)" : "translateX(0)"
                    }
                  })
                })]
              })]
            }), xi.enabled && xe.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginTop: "8px"
              },
              children: [xe.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                },
                children: [xe.jsx("span", {
                  style: {
                    fontSize: "12px",
                    color: "#666",
                    width: "60px",
                    flexShrink: 0
                  },
                  children: C("tmImgPromptApiType", "API 類型")
                }), xe.jsxs("select", {
                  value: xi.apiType || "openai",
                  onChange: e => fi(t => ({
                    ...t,
                    apiType: e.target.value
                  })),
                  style: {
                    flex: 1,
                    padding: "8px 10px",
                    borderRadius: "6px",
                    border: "1px solid #ddd",
                    fontSize: "13px",
                    backgroundColor: "#fff"
                  },
                  children: [xe.jsx("option", {
                    value: "openai",
                    children: "OpenAI"
                  }), xe.jsx("option", {
                    value: "claude",
                    children: "Claude"
                  }), xe.jsx("option", {
                    value: "gemini",
                    children: "Gemini"
                  }), xe.jsx("option", {
                    value: "custom",
                    children: "Custom"
                  })]
                })]
              }), xe.jsx("input", {
                type: "text",
                className: "tm-input",
                placeholder: C("tmImgPromptApiUrlPh", "API URL（如 https://api.openai.com/v1）"),
                value: xi.url || "",
                onChange: e => fi(t => ({
                  ...t,
                  url: e.target.value
                })),
                style: {
                  width: "100%",
                  padding: "10px 12px",
                  fontSize: "13px",
                  borderRadius: "6px"
                }
              }), xe.jsx("input", {
                type: "password",
                className: "tm-input",
                placeholder: C("tmImgPromptApiKeyPh", "API Key"),
                value: xi.key || "",
                onChange: e => fi(t => ({
                  ...t,
                  key: e.target.value
                })),
                style: {
                  width: "100%",
                  padding: "10px 12px",
                  fontSize: "13px",
                  borderRadius: "6px"
                }
              }), xe.jsxs("div", {
                style: {
                  display: "flex",
                  gap: "6px"
                },
                children: [xe.jsx("input", {
                  type: "text",
                  className: "tm-input",
                  placeholder: C("tmImgPromptApiModelPh", "Model（如 gpt-4o-mini）"),
                  value: xi.model || "",
                  onChange: e => fi(t => ({
                    ...t,
                    model: e.target.value
                  })),
                  style: {
                    flex: 1,
                    padding: "10px 12px",
                    fontSize: "13px",
                    borderRadius: "6px"
                  }
                }), xe.jsx("button", {
                  onClick: ji,
                  disabled: bi || !xi.url || !xi.key,
                  style: {
                    padding: "0 14px",
                    fontSize: "12px",
                    borderRadius: "6px",
                    border: "1px solid #4caf50",
                    background: bi ? "#aaa" : "#4caf50",
                    color: "#fff",
                    cursor: bi ? "wait" : "pointer",
                    whiteSpace: "nowrap",
                    flexShrink: 0
                  },
                  children: bi ? C("msgApiFetching", "拉取中...") : C("msgApiFetchModels", "拉取模型")
                })]
              }), yi.length > 0 && xe.jsxs("select", {
                value: xi.model || "",
                onChange: e => fi(t => ({
                  ...t,
                  model: e.target.value
                })),
                style: {
                  width: "100%",
                  padding: "8px 10px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  fontSize: "13px",
                  backgroundColor: "#fff"
                },
                children: [xe.jsx("option", {
                  value: "",
                  children: C("msgApiSelectModel", "選擇模型")
                }), yi.map(e => xe.jsx("option", {
                  value: e,
                  children: e
                }, e))]
              })]
            })]
          }), xe.jsxs("div", {
            style: {
              marginTop: "16px"
            },
            children: [xe.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px"
              },
              children: [xe.jsx("span", {
                className: "tm-settings-label",
                style: {
                  marginBottom: 0
                },
                children: C("tmContextDepth", "上下文深度 (Context Size)")
              }), xe.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                },
                children: [xe.jsx("input", {
                  type: "number",
                  value: es,
                  onChange: e => ts(e.target.value),
                  onBlur: e => {
                    const t = parseInt(e.target.value, 10);
                    if (isNaN(t)) {
                      ts(String(Zn));
                    } else {
                      Qn(t);
                      ts(String(t));
                    }
                  },
                  style: {
                    width: "56px",
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: "#444",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    padding: "2px 6px",
                    textAlign: "center",
                    background: "transparent"
                  }
                }), xe.jsx("span", {
                  style: {
                    fontSize: "13px",
                    color: "#888"
                  },
                  children: C("tmContextRounds", "輪對話")
                })]
              })]
            }), xe.jsx("input", {
              type: "range",
              max: "50",
              step: "1",
              value: Math.min(Zn, 50),
              onChange: e => Qn(Number(e.target.value)),
              style: {
                width: "100%",
                accentColor: "#333"
              }
            })]
          })]
        }), xe.jsxs("div", {
          className: "tm-settings-section",
          children: [xe.jsx("div", {
            className: "tm-settings-label",
            children: C("tmResponseLength", "回應字數")
          }), xe.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "8px"
            },
            children: [xe.jsx("span", {
              style: {
                fontSize: "13px",
                color: "#666",
                fontWeight: 600
              },
              children: C("tmMinChars", "最少字數:")
            }), xe.jsx("input", {
              type: "number",
              className: "tm-input",
              style: {
                width: "90px",
                padding: "10px 14px"
              },
              value: bt,
              onChange: e => wt(e.target.value)
            }), xe.jsx("span", {
              style: {
                fontSize: "13px",
                color: "#666",
                fontWeight: 600,
                marginLeft: "16px"
              },
              children: C("tmMaxChars", "最多字數:")
            }), xe.jsx("input", {
              type: "number",
              className: "tm-input",
              style: {
                width: "90px",
                padding: "10px 14px"
              },
              value: Wt,
              onChange: e => Ht(e.target.value)
            })]
          })]
        }), xe.jsxs("div", {
          className: "tm-settings-section",
          children: [xe.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: rn ? "12px" : 0
            },
            children: [xe.jsx("div", {
              className: "tm-settings-label",
              style: {
                marginBottom: 0
              },
              children: C("tmGenUserOptions", "生成 user 回應選擇")
            }), xe.jsxs("label", {
              style: {
                position: "relative",
                display: "inline-block",
                width: "40px",
                height: "22px"
              },
              children: [xe.jsx("input", {
                type: "checkbox",
                style: {
                  opacity: 0,
                  width: 0,
                  height: 0
                },
                checked: rn,
                onChange: e => {
                  const t = e.target.checked;
                  ln(t);
                  if (!t) {
                    fo();
                  }
                }
              }), xe.jsx("span", {
                style: {
                  position: "absolute",
                  cursor: "pointer",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: rn ? "#4caf50" : "#ccc",
                  transition: ".4s",
                  borderRadius: "22px"
                },
                children: xe.jsx("span", {
                  style: {
                    position: "absolute",
                    content: "\"\"",
                    height: "16px",
                    width: "16px",
                    left: "3px",
                    bottom: "3px",
                    backgroundColor: "white",
                    transition: ".4s",
                    borderRadius: "50%",
                    transform: rn ? "translateX(18px)" : "translateX(0)"
                  }
                })
              })]
            })]
          }), rn && xe.jsxs("div", {
            style: {
              backgroundColor: "rgba(0,0,0,0.02)",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid rgba(0,0,0,0.05)"
            },
            children: [xe.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "12px"
              },
              children: [xe.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column"
                },
                children: [xe.jsx("span", {
                  style: {
                    fontSize: "14px",
                    color: "#555",
                    fontWeight: 500
                  },
                  children: C("tmSugMode", "生成方式")
                }), xe.jsx("span", {
                  style: {
                    fontSize: "11px",
                    color: "#999",
                    marginTop: "2px"
                  },
                  children: la === "multi" ? C("tmSugModeMultiNote", "多人模式僅支援「單獨」生成（劇本式 narration 無法切出 user 回覆段）") : cn === "combined" ? C("tmSugModeCombinedDesc", "與角色回應一起生成，節省一次 API 呼叫") : C("tmSugModeSeparateDesc", "角色回應後單獨 API 生成，品質較穩定")
                })]
              }), xe.jsxs("select", {
                value: la === "multi" ? "separate" : cn,
                onChange: e => un(e.target.value),
                disabled: la === "multi",
                style: {
                  padding: "6px 8px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  fontSize: "13px",
                  backgroundColor: la === "multi" ? "#f5f5f5" : "#fff",
                  color: la === "multi" ? "#999" : "#333",
                  outline: "none",
                  flexShrink: 0,
                  cursor: la === "multi" ? "not-allowed" : "pointer"
                },
                children: [xe.jsx("option", {
                  value: "separate",
                  children: C("tmSugModeSeparate", "單獨")
                }), xe.jsx("option", {
                  value: "combined",
                  children: C("tmSugModeCombined", "合併")
                })]
              })]
            }), la === "multi" && xe.jsx("div", {
              style: {
                fontSize: "11px",
                color: "#888",
                backgroundColor: "rgba(76,175,80,0.06)",
                border: "1px solid rgba(76,175,80,0.2)",
                borderRadius: "6px",
                padding: "8px 10px",
                marginBottom: "12px",
                lineHeight: 1.5
              },
              children: C("tmSugMultiApiNote", "💡 多人 user 建議默認使用副 API（若已啟用），節省主 API 額度；副 API 未配置時自動回退主 API。")
            }), xe.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "12px"
              },
              children: [xe.jsx("span", {
                style: {
                  fontSize: "14px",
                  color: "#555",
                  fontWeight: 500
                },
                children: C("tmGenCount", "生成數量")
              }), xe.jsx("select", {
                value: mn,
                onChange: e => hn(Number(e.target.value)),
                style: {
                  padding: "6px 8px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  fontSize: "13px",
                  backgroundColor: "#fff",
                  outline: "none"
                },
                children: [1, 2, 3, 4].map(e => xe.jsxs("option", {
                  value: e,
                  children: [e, " ", C("tmOptionCount", "個選項")]
                }, e))
              })]
            }), xe.jsx("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "12px"
              },
              children: (() => {
                const e = Jn(C);
                const t = e.map(e => e.name);
                const n = [...e, ...jn.map(e => ({
                  name: e.name,
                  guidance: e.guidance
                }))];
                const s = n.map(e => e.name);
                return Array.from({
                  length: mn
                }).map((e, a) => {
                  const r = xn[a] ?? "";
                  const o = r !== "" && s.includes(r);
                  const l = !o;
                  const c = r !== "" && jn.some(e => e.name === r);
                  const d = n.find(e => e.name === r);
                  const u = (d == null ? undefined : d.guidance) || C("tmGuidancePlaceholder", "詳細描述這個方向的回復要求（選填）");
                  return xe.jsxs("div", {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      padding: "10px",
                      borderRadius: "8px",
                      background: "rgba(0,0,0,0.02)",
                      border: "1px solid rgba(0,0,0,0.04)"
                    },
                    children: [xe.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                      },
                      children: [xe.jsxs("span", {
                        style: {
                          fontSize: "13px",
                          color: "#777",
                          width: "45px",
                          flexShrink: 0
                        },
                        children: [C("tmDirection", "方向"), " ", a + 1]
                      }), xe.jsxs("select", {
                        className: "tm-input",
                        style: {
                          flex: 1,
                          padding: "10px 12px",
                          fontSize: "14px",
                          minHeight: "auto",
                          borderRadius: "8px",
                          appearance: "auto"
                        },
                        value: o ? r : "__custom__",
                        onChange: e => {
                          const t = e.target.value;
                          const n = [...xn];
                          n[a] = t === "__custom__" ? "" : t;
                          vn(n);
                        },
                        children: [xe.jsx("optgroup", {
                          label: C("tmPresetDirections", "預設方向"),
                          children: t.map(e => xe.jsx("option", {
                            value: e,
                            children: e
                          }, e))
                        }), jn.length > 0 && xe.jsx("optgroup", {
                          label: C("tmSavedCustom", "已儲存自定義"),
                          children: jn.map(e => xe.jsx("option", {
                            value: e.name,
                            children: e.name
                          }, e.name))
                        }), xe.jsxs("option", {
                          value: "__custom__",
                          children: ["✏️ ", C("tmCustomDirection", "自定義方向")]
                        })]
                      }), c && xe.jsx("button", {
                        onClick: () => (e => {
                          const t = jn.filter(t => t.name !== e);
                          kn(t);
                          i.set("tm_custom_directions", t);
                        })(r),
                        style: {
                          background: "none",
                          border: "none",
                          color: "#d32f2f",
                          cursor: "pointer",
                          padding: "4px",
                          fontSize: "14px",
                          lineHeight: 1,
                          flexShrink: 0,
                          opacity: 0.6
                        },
                        title: C("tmDeleteCustomDir", "刪除此自定義方向"),
                        children: "✕"
                      })]
                    }), l && xe.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        marginLeft: "53px"
                      },
                      children: [xe.jsx("input", {
                        type: "text",
                        className: "tm-input",
                        style: {
                          flex: 1,
                          padding: "10px 12px",
                          fontSize: "14px",
                          minHeight: "auto",
                          borderRadius: "8px",
                          boxSizing: "border-box"
                        },
                        value: r,
                        placeholder: C("tmCustomDirInput", "輸入自定義方向名稱"),
                        onChange: e => {
                          const t = [...xn];
                          t[a] = e.target.value;
                          vn(t);
                        }
                      }), r.trim() && !s.includes(r.trim()) && xe.jsx("button", {
                        onClick: () => ((e, t) => {
                          if (!(e == null ? undefined : e.trim())) {
                            return;
                          }
                          if (jn.some(t => t.name === e.trim())) {
                            return;
                          }
                          const n = [...jn, {
                            name: e.trim(),
                            guidance: t || ""
                          }];
                          kn(n);
                          i.set("tm_custom_directions", n);
                        })(r, bn[a]),
                        style: {
                          background: "none",
                          border: "1px solid rgba(0,0,0,0.15)",
                          borderRadius: "6px",
                          padding: "6px 10px",
                          fontSize: "12px",
                          color: "#555",
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                          flexShrink: 0
                        },
                        title: C("tmSaveCustomDir", "儲存此方向以便下次使用"),
                        children: C("tmSaveBtn", "儲存")
                      })]
                    }), xe.jsx("div", {
                      style: {
                        marginLeft: "53px"
                      },
                      children: xe.jsx("textarea", {
                        className: "tm-input",
                        style: {
                          width: "100%",
                          padding: "10px 12px",
                          fontSize: "13px",
                          minHeight: "56px",
                          borderRadius: "8px",
                          resize: "vertical",
                          lineHeight: 1.6,
                          color: "#666",
                          boxSizing: "border-box"
                        },
                        value: bn[a] || "",
                        rows: 2,
                        placeholder: u,
                        onChange: e => {
                          const t = [...bn];
                          t[a] = e.target.value;
                          Sn(t);
                        }
                      })
                    })]
                  }, a);
                });
              })()
            })]
          })]
        }), xe.jsxs("div", {
          className: "tm-settings-section",
          children: [xe.jsx("div", {
            className: "tm-settings-label",
            children: C("tmVisualTheme", "畫面美化")
          }), xe.jsxs("div", {
            className: "tm-options-row",
            children: [xe.jsx("button", {
              className: "tm-pill-btn " + (en === "classic" ? "active" : ""),
              onClick: () => tn("classic"),
              children: C("tmThemeClassic", "經典")
            }), xe.jsx("button", {
              className: "tm-pill-btn " + (en === "magazine-dark" ? "active" : ""),
              onClick: () => tn("magazine-dark"),
              children: C("tmThemeNews", "舊報紙風")
            }), xe.jsx("button", {
              className: "tm-pill-btn " + (en === "apple-green" ? "active" : ""),
              onClick: () => tn("apple-green"),
              children: C("tmThemeApple", "青蘋果之丘")
            }), xe.jsx("button", {
              className: "tm-pill-btn " + (en === "winter-snow" ? "active" : ""),
              onClick: () => tn("winter-snow"),
              children: C("tmThemeSnow", "雪國列車")
            })]
          }), en === "classic" && xe.jsxs("div", {
            style: {
              marginTop: "14px"
            },
            children: [xe.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              },
              children: [xe.jsx("span", {
                style: {
                  fontSize: "14px",
                  color: "#555"
                },
                children: C("tmCustomCss", "自定義 CSS")
              }), xe.jsx("button", {
                style: {
                  fontSize: "12px",
                  color: "#4caf50",
                  background: "none",
                  border: "1px solid rgba(76,175,80,0.3)",
                  borderRadius: "6px",
                  padding: "4px 10px",
                  cursor: "pointer",
                  fontFamily: "inherit"
                },
                onClick: () => {
                  Ya(Oa);
                  Va(true);
                },
                children: (Oa == null ? undefined : Oa.trim()) ? C("tmCssEdit", "編輯") : C("tmCssAdd", "添加")
              })]
            }), (Oa == null ? undefined : Oa.trim()) && xe.jsxs("div", {
              style: {
                fontSize: "11px",
                color: "#999",
                marginTop: "4px"
              },
              children: [C("tmCssActive", "已啟用自定義樣式"), " (", Oa.length, " ", C("tmCssChars", "字元"), ")"]
            })]
          }), xe.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "12px"
            },
            children: [xe.jsxs("div", {
              children: [xe.jsx("span", {
                style: {
                  fontSize: "14px",
                  color: "#555"
                },
                children: C("tmNoAnimations", "關閉所有動效")
              }), xe.jsx("div", {
                style: {
                  fontSize: "11px",
                  color: "#999",
                  marginTop: "2px"
                },
                children: C("tmNoAnimationsHint", "減少發熱與耗電")
              })]
            }), xe.jsxs("label", {
              style: {
                position: "relative",
                display: "inline-block",
                width: "40px",
                height: "22px"
              },
              children: [xe.jsx("input", {
                type: "checkbox",
                style: {
                  opacity: 0,
                  width: 0,
                  height: 0
                },
                checked: Ls,
                onChange: e => zs(e.target.checked)
              }), xe.jsx("span", {
                style: {
                  position: "absolute",
                  cursor: "pointer",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: Ls ? "#4caf50" : "#ccc",
                  transition: ".4s",
                  borderRadius: "22px"
                },
                children: xe.jsx("span", {
                  style: {
                    position: "absolute",
                    height: "16px",
                    width: "16px",
                    left: "3px",
                    bottom: "3px",
                    backgroundColor: "white",
                    transition: ".4s",
                    borderRadius: "50%",
                    transform: Ls ? "translateX(18px)" : "translateX(0)"
                  }
                })
              })]
            })]
          })]
        }), xe.jsxs("div", {
          className: "tm-settings-section",
          children: [xe.jsx("div", {
            className: "tm-settings-label",
            children: C("tmPaginationSection", "分頁管理")
          }), xe.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [xe.jsx("span", {
              style: {
                fontSize: "14px",
                color: "#555"
              },
              children: C("tmAutoDatePagination", "按日期自動分頁")
            }), xe.jsxs("label", {
              style: {
                position: "relative",
                display: "inline-block",
                width: "40px",
                height: "22px"
              },
              children: [xe.jsx("input", {
                type: "checkbox",
                style: {
                  opacity: 0,
                  width: 0,
                  height: 0
                },
                checked: Ca,
                onChange: e => ka(e.target.checked)
              }), xe.jsx("span", {
                style: {
                  position: "absolute",
                  cursor: "pointer",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: Ca ? "#4caf50" : "#ccc",
                  transition: ".4s",
                  borderRadius: "22px"
                },
                children: xe.jsx("span", {
                  style: {
                    position: "absolute",
                    height: "16px",
                    width: "16px",
                    left: "3px",
                    bottom: "3px",
                    backgroundColor: "white",
                    transition: ".4s",
                    borderRadius: "50%",
                    transform: Ca ? "translateX(18px)" : "translateX(0)"
                  }
                })
              })]
            })]
          }), xe.jsx("div", {
            style: {
              fontSize: "12px",
              color: "#999",
              marginTop: "4px"
            },
            children: C("tmAutoDatePaginationDesc", "開啟後，跨天發送訊息時會自動創建新分頁")
          })]
        }), xe.jsxs("div", {
          className: "tm-settings-section",
          children: [xe.jsx("div", {
            className: "tm-settings-label",
            children: C("tmSummarySection", "對話總結")
          }), xe.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: os ? "12px" : 0
            },
            children: [xe.jsx("span", {
              style: {
                fontSize: "14px",
                color: "#555"
              },
              children: C("tmAutoSummaryLabel", "自動總結")
            }), xe.jsxs("label", {
              style: {
                position: "relative",
                display: "inline-block",
                width: "40px",
                height: "22px"
              },
              children: [xe.jsx("input", {
                type: "checkbox",
                style: {
                  opacity: 0,
                  width: 0,
                  height: 0
                },
                checked: os,
                onChange: e => ls(e.target.checked)
              }), xe.jsx("span", {
                style: {
                  position: "absolute",
                  cursor: "pointer",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: os ? "#4caf50" : "#ccc",
                  transition: ".4s",
                  borderRadius: "22px"
                },
                children: xe.jsx("span", {
                  style: {
                    position: "absolute",
                    height: "16px",
                    width: "16px",
                    left: "3px",
                    bottom: "3px",
                    backgroundColor: "white",
                    transition: ".4s",
                    borderRadius: "50%",
                    transform: os ? "translateX(18px)" : "translateX(0)"
                  }
                })
              })]
            })]
          }), os && xe.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px"
            },
            children: [xe.jsx("span", {
              style: {
                fontSize: "14px",
                color: "#555"
              },
              children: C("tmAutoSummaryFreqLabel", "每幾輪自動總結")
            }), xe.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "6px"
              },
              children: [xe.jsx("input", {
                type: "number",
                className: "tm-input",
                min: "0",
                style: {
                  width: "70px",
                  padding: "6px 10px",
                  textAlign: "center"
                },
                value: cs || "",
                placeholder: "無",
                onChange: e => {
                  const t = e.target.value;
                  if (t === "") {
                    ds(0);
                    return;
                  }
                  const n = parseInt(t);
                  if (!isNaN(n) && n >= 0) {
                    ds(n);
                  }
                }
              }), xe.jsx("span", {
                style: {
                  fontSize: "13px",
                  color: "#888"
                },
                children: C("tmRounds", "輪")
              })]
            })]
          }), xe.jsx("div", {
            style: {
              marginBottom: "12px"
            },
            children: xe.jsx(Ve, {
              value: hs || "",
              onChange: Ss,
              t: C
            })
          }), xe.jsxs("div", {
            style: {
              display: "flex",
              gap: "8px",
              marginBottom: "12px"
            },
            children: [xe.jsx("button", {
              onClick: async () => {
                if (la === "multi") {
                  if (wa) {
                    return;
                  }
                  if (!Fr.activeSession || Wr.length < 2) {
                    return;
                  }
                  if (Hr.length === 0) {
                    E(C("tmMultiSummaryNoContent", "尚無內容可摘要"));
                    return;
                  }
                  ja(true);
                  try {
                    const e = await gn({
                      userId: y,
                      session: Fr.activeSession,
                      participants: Wr,
                      user: Or,
                      storyEntries: Hr,
                      frequency: 0,
                      language: j || "zh_cn",
                      customSummaryInstructions: hs || "",
                      timeAwareEnabled: Rs !== false
                    });
                    E(e ? C("tmMultiSummaryDone", "摘要已寫入每個角色的記憶") : C("tmMultiSummaryFailed", "摘要生成失敗或無新內容"));
                  } catch (e) {
                    console.error("[MultiScene Summary] 手動觸發失敗:", e);
                    E(C("tmMultiSummaryFailed", "摘要生成失敗或無新內容"));
                  } finally {
                    ja(false);
                  }
                } else {
                  Ro();
                }
              },
              disabled: la === "multi" ? wa || !Fr.activeSession || Hr.length === 0 : ws || je.length === 0,
              style: {
                flex: 1,
                padding: "10px",
                fontSize: "14px",
                fontWeight: "600",
                color: (la === "multi" ? wa : ws) ? "#999" : "#007AFF",
                background: "rgba(0,122,255,0.08)",
                borderRadius: "8px",
                border: "none",
                cursor: (la === "multi" ? wa : ws) ? "default" : "pointer"
              },
              children: (la === "multi" ? wa : ws) ? C("tmSummarizing", "總結中...") : C("btnSummarizeNow", "立即總結")
            }), la !== "multi" && xe.jsx("button", {
              onClick: _o,
              disabled: ws || je.length === 0,
              style: {
                flex: 1,
                padding: "10px",
                fontSize: "14px",
                fontWeight: "600",
                color: ws ? "#999" : "#666",
                background: "rgba(0,0,0,0.04)",
                borderRadius: "8px",
                border: "none",
                cursor: ws ? "default" : "pointer"
              },
              children: C("btnRangeSummary", "選擇範圍")
            })]
          }), xe.jsxs("button", {
            onClick: () => ks(true),
            style: {
              width: "100%",
              padding: "12px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#555",
              background: "rgba(0,0,0,0.03)",
              borderRadius: "8px",
              border: "1px solid rgba(0,0,0,0.06)",
              cursor: "pointer",
              textAlign: "center"
            },
            children: [C("tmViewSummaryRecords", "查看總結記錄"), " →"]
          }), xe.jsx("div", {
            style: {
              fontSize: "11px",
              color: "#999",
              marginTop: "8px"
            },
            children: C("tmSummaryNote", "總結會寫入共享記憶，在線上聊天和群聊中也能看到。")
          })]
        }), xe.jsx(wn, {
          voiceEnabled: er,
          setVoiceEnabled: tr,
          voiceAutoPlay: nr,
          setVoiceAutoPlay: sr,
          voiceMode: ar,
          setVoiceMode: rr
        }), xe.jsx(Cn, {
          noiseOn: ii.noiseOn,
          setNoiseOn: ii.setNoiseOn,
          selectedNoise: ii.selectedNoise,
          setSelectedNoise: ii.setSelectedNoise,
          customNoises: ii.customNoises,
          addCustomNoise: ii.addCustomNoise,
          removeCustomNoise: ii.removeCustomNoise
        }), xe.jsxs("div", {
          className: "tm-settings-section",
          children: [xe.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            },
            children: [xe.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                flex: 1
              },
              children: [xe.jsx("span", {
                className: "tm-settings-label",
                children: C("labelConsolePanel", "控制台上報")
              }), xe.jsx("span", {
                style: {
                  fontSize: "11px",
                  color: "#999",
                  marginTop: "2px"
                },
                children: C("descConsolePanel", "開啟後可在輸入欄上方查看警告與錯誤，便於手機端回報問題")
              })]
            }), xe.jsx("button", {
              type: "button",
              onClick: () => Is(e => !e),
              style: {
                width: "51px",
                height: "31px",
                borderRadius: "15.5px",
                border: "none",
                padding: "2px",
                background: Ns ? "#34c759" : "#e9e9eb",
                cursor: "pointer",
                position: "relative",
                transition: "background 0.2s",
                flexShrink: 0
              },
              children: xe.jsx("span", {
                style: {
                  display: "block",
                  width: "27px",
                  height: "27px",
                  borderRadius: "50%",
                  background: "#fff",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                  transform: Ns ? "translateX(20px)" : "translateX(0)",
                  transition: "transform 0.2s"
                }
              })
            })]
          }), xe.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "14px"
            },
            children: [xe.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                flex: 1
              },
              children: [xe.jsx("span", {
                className: "tm-settings-label",
                children: C("labelThinkingPanel", "顯示思維鏈")
              }), xe.jsx("span", {
                style: {
                  fontSize: "11px",
                  color: "#999",
                  marginTop: "2px"
                },
                children: C("descThinkingPanel", "AI 段落上方顯示「思維鏈」下拉，可查看推理模型的思考過程")
              })]
            }), xe.jsx("button", {
              type: "button",
              onClick: () => Es(e => !e),
              style: {
                width: "51px",
                height: "31px",
                borderRadius: "15.5px",
                border: "none",
                padding: "2px",
                background: Ts ? "#34c759" : "#e9e9eb",
                cursor: "pointer",
                position: "relative",
                transition: "background 0.2s",
                flexShrink: 0
              },
              children: xe.jsx("span", {
                style: {
                  display: "block",
                  width: "27px",
                  height: "27px",
                  borderRadius: "50%",
                  background: "#fff",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                  transform: Ts ? "translateX(20px)" : "translateX(0)",
                  transition: "transform 0.2s"
                }
              })
            })]
          })]
        }), xe.jsx(tt, {
          t: C,
          thinkingPresetId: As,
          setThinkingPresetId: $s,
          customThinkingPrompt: Ms,
          setCustomThinkingPrompt: Ps,
          variant: "tm"
        }), la !== "multi" && xe.jsxs("div", {
          className: "tm-settings-section",
          children: [xe.jsx("span", {
            className: "tm-settings-label",
            style: {
              display: "block",
              marginBottom: "8px"
            },
            children: C("tmRecordIOTitle", "記錄備份")
          }), xe.jsx("div", {
            style: {
              fontSize: "12px",
              color: "#999",
              marginBottom: "12px"
            },
            children: C("tmRecordIODesc", "導出當前角色的全部分頁與條目為 JSON 文件；導入會作為新分頁追加，不會覆蓋已有記錄。")
          }), xe.jsxs("div", {
            style: {
              display: "flex",
              gap: "10px"
            },
            children: [xe.jsxs("button", {
              onClick: ol,
              disabled: !zr || je.length === 0,
              style: {
                flex: 1,
                padding: "10px",
                fontSize: "13px",
                fontWeight: 600,
                color: zr && je.length !== 0 ? "#4caf50" : "#ccc",
                background: zr && je.length !== 0 ? "rgba(76,175,80,0.08)" : "transparent",
                borderRadius: "10px",
                border: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                cursor: zr && je.length !== 0 ? "pointer" : "default"
              },
              children: [xe.jsx(St, {
                size: 14
              }), C("tmExportAllRecords", "導出記錄")]
            }), xe.jsxs("button", {
              onClick: cl,
              disabled: !zr,
              style: {
                flex: 1,
                padding: "10px",
                fontSize: "13px",
                fontWeight: 600,
                color: zr ? "#2196f3" : "#ccc",
                background: zr ? "rgba(33,150,243,0.08)" : "transparent",
                borderRadius: "10px",
                border: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                cursor: zr ? "pointer" : "default"
              },
              children: [xe.jsx(Pt, {
                size: 14
              }), C("tmImportAllRecords", "導入記錄")]
            })]
          }), xe.jsx("input", {
            ref: ll,
            type: "file",
            accept: "application/json,.json",
            onChange: dl,
            style: {
              display: "none"
            }
          })]
        }), la === "multi" && xe.jsx("div", {
          className: "tm-settings-section",
          children: xe.jsxs("div", {
            style: {
              display: "flex",
              gap: "10px"
            },
            children: [xe.jsxs("button", {
              onClick: Qo,
              style: {
                flex: 1,
                padding: "10px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#2196f3",
                background: "rgba(33,150,243,0.08)",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer"
              },
              children: ["⬇️ ", C("tmMultiExportAll", "匯出全部多人場景")]
            }), xe.jsxs("button", {
              onClick: tl,
              style: {
                flex: 1,
                padding: "10px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#2196f3",
                background: "rgba(33,150,243,0.08)",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer"
              },
              children: ["⬆️ ", C("tmMultiImportAll", "匯入多人場景")]
            })]
          })
        }), la === "multi" && xe.jsx("div", {
          className: "tm-settings-section",
          style: {
            borderTop: "1px solid rgba(255,59,48,0.15)",
            paddingTop: "20px"
          },
          children: xe.jsx("button", {
            onClick: async () => {
              if (Fr.activeSession && (await $(C("tmMultiDeleteSceneConfirm", "確定刪除這個多人場景？所有訊息將一併清除，無法復原。")))) {
                await Fr.deleteSession(Fr.activeSession._id);
                yt(false);
              }
            },
            style: {
              width: "100%",
              padding: "12px",
              borderRadius: 10,
              border: "1px solid rgba(239,68,68,0.3)",
              background: "transparent",
              color: "#ef4444",
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer"
            },
            children: C("tmMultiSettingsDelete", "刪除此場景（不可復原）")
          })
        }), la !== "multi" && xe.jsxs("div", {
          className: "tm-settings-section",
          style: {
            borderTop: "1px solid rgba(255,59,48,0.15)",
            paddingTop: "20px"
          },
          children: [xe.jsx("button", {
            onClick: async () => {
              const e = (zr == null ? undefined : zr.name) || "此角色";
              if (!(await $(C("tmConfirmDeleteAll", "確定要刪除與 {name} 的所有線下故事記錄嗎？此操作不可復原。").replace("{name}", e)))) {
                return;
              }
              const t = y;
              const n = String(zr == null ? undefined : zr.id);
              if (t && n) {
                try {
                  await te.deleteByPair(t, n);
                  await i.delete(`tm_settings_${t}_${n}`).catch(() => {});
                  await i.delete(`tm_last_summarized_${t}_${n}`).catch(() => {});
                  Ce([]);
                  yt(false);
                  console.log(`[TM] 已刪除 ${e} 的全部線下記錄`);
                } catch (s) {
                  console.error("[TM] 刪除失敗:", s);
                }
              }
            },
            disabled: !zr || je.length === 0,
            style: {
              width: "100%",
              padding: "12px",
              fontSize: "14px",
              fontWeight: "600",
              color: zr && je.length !== 0 ? "#FF3B30" : "#ccc",
              background: zr && je.length !== 0 ? "rgba(255,59,48,0.06)" : "transparent",
              borderRadius: "10px",
              border: "none",
              cursor: zr && je.length !== 0 ? "pointer" : "default"
            },
            children: C("tmDeleteAllRecords", "刪除全部線下記錄")
          }), xe.jsx("div", {
            style: {
              fontSize: "11px",
              color: "#999",
              marginTop: "6px",
              textAlign: "center"
            },
            children: C("tmDeleteAllNote", "僅刪除與此角色的線下故事，不影響線上聊天記錄。")
          })]
        })]
      })]
    }), xe.jsxs("div", {
      className: "tm-story",
      ref: hr,
      style: !ir || la === "multi" && !lr ? {
        visibility: "hidden"
      } : undefined,
      onScroll: mo,
      onWheel: co,
      onTouchMove: uo,
      onMouseDown: Xi,
      onMouseUp: Ji,
      onMouseLeave: Ji,
      onTouchStart: Xi,
      onTouchEnd: Ji,
      onContextMenu: e => {
        if (Za) {
          e.preventDefault();
        }
      },
      children: [la === "multi" && Fr.activeSession && xe.jsxs(fe.Fragment, {
        children: [Hr.length === 0 && xe.jsx("div", {
          className: "tm-story-empty tm-multi-keep",
          children: C("tmMultiStoryEmpty", "場景已準備好\n發送一句話開始故事")
        }), (() => {
          var e;
          var t;
          var n;
          const s = Hr.filter(e => Ri.isEntryVisible(e));
          const a = s.length;
          const r = new Array(a).fill(false);
          const i = new Array(a).fill(0);
          const o = new Array(a).fill(null);
          {
            let l = 0;
            while (l < a) {
              if ((e = s[l]) == null ? undefined : e.hiddenByUser) {
                let e = l;
                while (e < a && ((t = s[e]) == null ? undefined : t.hiddenByUser)) {
                  e++;
                }
                r[l] = true;
                i[l] = e - l;
                const c = String(((n = s[l]) == null ? undefined : n.id) ?? `idx-${l}`);
                for (let t = l; t < e; t++) {
                  o[t] = c;
                }
                l = e;
              } else {
                l++;
              }
            }
          }
          return s.map((e, t) => {
            var n;
            if (e.hiddenByUser && (e == null ? undefined : e.type) !== "cast_change") {
              const n = o[t];
              const s = n && Zs.has(n);
              const a = () => {
                if (n) {
                  Qs(e => {
                    const t = new Set(e);
                    if (t.has(n)) {
                      t.delete(n);
                    } else {
                      t.add(n);
                    }
                    return t;
                  });
                }
              };
              if (r[t] && !s) {
                const n = i[t] || 1;
                const s = (C("msgHiddenCollapsed") || "— 已隱藏 {count} 條訊息 —").replace("{count}", n).replace(/—\s*$/, "").trim();
                return xe.jsx("div", {
                  onClick: a,
                  className: "tm-multi-keep",
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    padding: "6px 16px",
                    fontSize: "11px",
                    color: "#8e8e8e",
                    opacity: 0.7,
                    fontStyle: "italic",
                    userSelect: "none",
                    cursor: "pointer"
                  },
                  children: xe.jsxs("span", {
                    children: [s, " ▶"]
                  })
                }, `tm-multi-hidden-${e.id}`);
              }
              if (!s) {
                return null;
              }
            }
            if ((e == null ? undefined : e.type) === "cast_change") {
              return xe.jsx(gs, {
                entry: e,
                onDelete: e => {
                  const t = e.id || e._id;
                  const n = Hr.findIndex(e => (e.id || e._id) === t);
                  if (n >= 0) {
                    Di(n);
                  }
                },
                t: C
              }, e.id || e._id);
            }
            const a = t === s.length - 1;
            const l = s[t + 1];
            const c = Ri.getSelectorInfoForEntry(e, l);
            const d = Hr.findIndex(t => t.id === e.id);
            const u = !!e.hiddenByUser;
            const m = u && r[t];
            const p = o[t];
            const h = () => {
              if (p) {
                Qs(e => {
                  const t = new Set(e);
                  if (t.has(p)) {
                    t.delete(p);
                  } else {
                    t.add(p);
                  }
                  return t;
                });
              }
            };
            const g = xe.jsxs(xe.Fragment, {
              children: [xe.jsx("div", {
                className: "tm-multi-keep",
                children: xe.jsx(ys, {
                  entry: e,
                  index: d,
                  floorIndex: t,
                  char: Wr[0] || null,
                  participants: Wr,
                  user: Or,
                  theme: en,
                  isGenerating: Ni.isGenerating && a,
                  onEdit: _i,
                  onDelete: Di,
                  onToggleHide: Bi,
                  multiSelectMode: Ks,
                  isSelected: Js.has(d),
                  onEnterMultiSelect: To,
                  onToggleSelect: Eo,
                  noAnimations: Ls,
                  tmVoiceEnabled: er,
                  onVoicePlay: ri.playEntry,
                  voicePlayingId: ri.playingEntryId,
                  voiceLoadingId: ri.loadingEntryId,
                  autoTranslate: Ds,
                  cgGenerating: li,
                  onCgClick: (e, t) => {
                    var n;
                    return ui({
                      url: e,
                      prompt: (n = t == null ? undefined : t.illustration) == null ? undefined : n.prompt,
                      entryId: t == null ? undefined : t.id
                    });
                  },
                  onHtmlButtonClick: Co,
                  thinkingPanelEnabled: Ts,
                  thinkingKeyResolver: Y.multiKey
                })
              }), c && xe.jsx("div", {
                className: "tm-multi-keep",
                "data-tm-reroll-slot": c.slotId,
                children: xe.jsx(nt, {
                  slotId: c.slotId,
                  totalVariants: c.totalVariants,
                  activeIndex: c.activeIndex,
                  onSwitch: Ri.switchVariant,
                  onConfirm: Ri.confirmVariant,
                  t: C
                })
              }), ((n = e == null ? undefined : e.pendingCastSuggestion) == null ? undefined : n.status) === "pending" && xe.jsx(xs, {
                entry: e,
                t: C,
                onAccept: Ui,
                onDismiss: Wi
              })]
            });
            if (u) {
              const n = i[t] || 1;
              const s = (C("msgHiddenCollapsed") || "— 已隱藏 {count} 條訊息 —").replace("{count}", n).replace(/—\s*$/, "").trim();
              return xe.jsxs(fe.Fragment, {
                children: [m && xe.jsx("div", {
                  onClick: h,
                  className: "tm-multi-keep tm-hidden-prompt-row",
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    padding: "6px 16px",
                    fontSize: "11px",
                    color: "#8e8e8e",
                    opacity: 0.7,
                    fontStyle: "italic",
                    userSelect: "none",
                    cursor: "pointer"
                  },
                  children: xe.jsxs("span", {
                    children: [s, " ▼"]
                  })
                }), xe.jsx("div", {
                  className: "tm-multi-keep",
                  style: {
                    opacity: 0.55
                  },
                  children: g
                })]
              }, e.id);
            }
            return xe.jsx(fe.Fragment, {
              children: g
            }, e.id);
          });
        })()]
      }), la === "multi" && !Fr.activeSession && xe.jsx("div", {
        className: "tm-multi-keep",
        style: {
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--tm-fg-muted, #9ca3af)",
          fontSize: 13,
          padding: 32,
          textAlign: "center",
          whiteSpace: "pre-wrap",
          lineHeight: 1.6
        },
        children: C("tmMultiNoSessionPlaceholder", "尚未選擇多人場景\n點上方頭像挑選角色，或從📖瀏覽歷史場景")
      }), je.length === 0 && !N && null, je.length === 0 && xe.jsx("div", {
        className: "tm-story-empty",
        children: g.length === 0 ? C("tmEmptyRoster", "請先在名冊新增角色") : zr ? C("tmEmptyCharSelected", "點擊下方開始與 {name} 的故事").replace("{name}", zr.name) : C("tmSelectChar", "請選擇角色")
      }), Zr > 0 && xe.jsx("div", {
        className: "tm-load-more",
        children: C("tmAutoLoadEarlierStories", "捲到底自動載入更早 {count} 層").replace("{count}", Zr)
      }), (() => {
        var e;
        var t;
        var n;
        const s = Qr.length;
        const a = new Array(s).fill(false);
        const r = new Array(s).fill(0);
        const i = new Array(s).fill(null);
        {
          let o = 0;
          while (o < s) {
            if ((e = Qr[o]) == null ? undefined : e.hiddenByUser) {
              let e = o;
              while (e < s && ((t = Qr[e]) == null ? undefined : t.hiddenByUser)) {
                e++;
              }
              a[o] = true;
              r[o] = e - o;
              const l = String(((n = Qr[o]) == null ? undefined : n.id) ?? `idx-${o}`);
              for (let t = o; t < e; t++) {
                i[t] = l;
              }
              o = e;
            } else {
              o++;
            }
          }
        }
        return Qr.map((e, t) => {
          var n;
          if (e.hiddenByUser) {
            const n = i[t];
            const s = n && Zs.has(n);
            const o = () => {
              if (n) {
                Qs(e => {
                  const t = new Set(e);
                  if (t.has(n)) {
                    t.delete(n);
                  } else {
                    t.add(n);
                  }
                  return t;
                });
              }
            };
            if (a[t] && !s) {
              const n = r[t] || 1;
              const s = (C("msgHiddenCollapsed") || "— 已隱藏 {count} 條訊息 —").replace("{count}", n).replace(/—\s*$/, "").trim();
              return xe.jsx("div", {
                onClick: o,
                style: {
                  display: "flex",
                  justifyContent: "center",
                  padding: "6px 16px",
                  fontSize: "11px",
                  color: "#8e8e8e",
                  opacity: 0.7,
                  fontStyle: "italic",
                  userSelect: "none",
                  cursor: "pointer"
                },
                children: xe.jsxs("span", {
                  children: [s, " ▶"]
                })
              }, `tm-hidden-${e.id}`);
            }
            if (!s) {
              return null;
            }
          }
          const s = je.findIndex(t => t.id === e.id);
          const o = ei.get(e.id) ?? s;
          const l = Qr[t + 1];
          const c = Kr.getSelectorInfoForEntry(e, l);
          const d = !!e.hiddenByUser;
          const u = d && a[t];
          const m = i[t];
          const p = () => {
            if (m) {
              Qs(e => {
                const t = new Set(e);
                if (t.has(m)) {
                  t.delete(m);
                } else {
                  t.add(m);
                }
                return t;
              });
            }
          };
          const h = xe.jsxs(xe.Fragment, {
            children: [xe.jsx(ys, {
              entry: e,
              index: s,
              floorIndex: o,
              char: zr,
              user: Or,
              theme: en,
              isGenerating: Ee && s === je.length - 1,
              onEdit: No,
              onDelete: Io,
              onToggleHide: Mo,
              multiSelectMode: Ks,
              isSelected: Js.has(s),
              onEnterMultiSelect: To,
              onToggleSelect: Eo,
              noAnimations: Ls,
              tmVoiceEnabled: er,
              onVoicePlay: ai.playEntry,
              voicePlayingId: ai.playingEntryId,
              voiceLoadingId: ai.loadingEntryId,
              autoTranslate: Ds,
              cgGenerating: li,
              onCgClick: (e, t) => {
                var n;
                return ui({
                  url: e,
                  prompt: (n = t == null ? undefined : t.illustration) == null ? undefined : n.prompt,
                  entryId: t == null ? undefined : t.id
                });
              },
              onHtmlButtonClick: Co,
              thinkingPanelEnabled: Ts
            }), c && xe.jsx("div", {
              "data-tm-reroll-slot": c.slotId,
              children: xe.jsx(nt, {
                slotId: c.slotId,
                totalVariants: c.totalVariants,
                activeIndex: c.activeIndex,
                onSwitch: Kr.switchVariant,
                onConfirm: Kr.confirmVariant,
                t: C
              })
            }), ((n = e == null ? undefined : e.pendingSoloUpgrade) == null ? undefined : n.status) === "pending" && xe.jsx(fs, {
              entry: e,
              t: C,
              onAccept: Oi,
              onDismiss: Fi
            })]
          });
          if (d) {
            const n = r[t] || 1;
            const s = (C("msgHiddenCollapsed") || "— 已隱藏 {count} 條訊息 —").replace("{count}", n).replace(/—\s*$/, "").trim();
            return xe.jsxs(fe.Fragment, {
              children: [u && xe.jsx("div", {
                onClick: p,
                style: {
                  display: "flex",
                  justifyContent: "center",
                  padding: "6px 16px",
                  fontSize: "11px",
                  color: "#8e8e8e",
                  opacity: 0.7,
                  fontStyle: "italic",
                  userSelect: "none",
                  cursor: "pointer"
                },
                children: xe.jsxs("span", {
                  children: [s, " ▼"]
                })
              }), xe.jsx("div", {
                style: {
                  opacity: 0.55
                },
                children: h
              })]
            }, e.id);
          }
          return xe.jsx(fe.Fragment, {
            children: h
          }, e.id);
        });
      })(), Ee && xe.jsx(bs, {
        theme: en,
        noAnimations: Ls
      })]
    }), Za && xe.jsx("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "transparent"
      },
      onClick: () => Qa(null),
      onTouchEnd: () => Qa(null),
      children: xe.jsxs("div", {
        style: {
          position: "absolute",
          top: Math.min(Za.y, window.innerHeight - 140),
          left: Math.min(Za.x, window.innerWidth - 180),
          background: "rgba(0,0,0,0.92)",
          backdropFilter: "blur(12px)",
          borderRadius: "12px",
          padding: "6px",
          minWidth: "160px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          animation: "tm-menu-pop 0.15s ease-out"
        },
        onClick: e => e.stopPropagation(),
        onTouchEnd: e => e.stopPropagation(),
        children: [xe.jsxs("button", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "8px",
            width: "100%",
            background: "none",
            border: "none",
            color: "#fff",
            padding: "10px 12px",
            fontSize: "14px",
            cursor: "pointer",
            borderRadius: "8px",
            textAlign: "left"
          },
          onMouseEnter: e => e.currentTarget.style.background = "rgba(255,255,255,0.12)",
          onMouseLeave: e => e.currentTarget.style.background = "none",
          onClick: Zi,
          children: [xe.jsx(Rt, {
            size: 15,
            style: {
              opacity: 0.8
            }
          }), C("tmCssResetBtn", "重置自訂 CSS")]
        }), xe.jsxs("button", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "8px",
            width: "100%",
            background: "none",
            border: "none",
            color: "#fff",
            padding: "10px 12px",
            fontSize: "14px",
            cursor: "pointer",
            borderRadius: "8px",
            textAlign: "left"
          },
          onMouseEnter: e => e.currentTarget.style.background = "rgba(255,255,255,0.12)",
          onMouseLeave: e => e.currentTarget.style.background = "none",
          onClick: Qi,
          children: [xe.jsx(_t, {
            size: 15,
            style: {
              opacity: 0.8
            }
          }), C("tmOpenSettings", "開啟設定")]
        })]
      })
    }), Cs && xe.jsx(yn, {
      userId: y,
      charId: la === "multi" ? Wr[0] ? String(Wr[0].id) : null : zr ? String(zr.id) : null,
      sessionId: la === "multi" ? ((l = Fr.activeSession) == null ? undefined : l._id) || null : undefined,
      onClose: () => ks(false),
      refreshTrigger: la === "multi" ? wa : ws
    }), Ns && xe.jsxs("div", {
      className: "tm-console-shell",
      style: {
        padding: "0 12px",
        marginBottom: "4px",
        position: "relative",
        zIndex: 24,
        isolation: "isolate"
      },
      children: [xe.jsxs("div", {
        style: {
          display: "flex",
          gap: "6px",
          alignItems: "stretch"
        },
        children: [xe.jsxs("button", {
          className: "tm-console-toggle-btn",
          type: "button",
          onClick: () => Fs(e => !e),
          style: {
            flex: 1,
            textAlign: "left",
            borderRadius: "12px",
            padding: "8px 12px",
            background: ao.toggleBg,
            color: ao.toggleText,
            border: `1px solid ${ao.toggleBorder}`,
            fontSize: "13px",
            fontWeight: "600",
            cursor: "pointer"
          },
          children: [C("consoleViewPanel", "控制台"), so.length > 0 ? ` · ${so.length}` : ""]
        }), (() => {
          const e = typeof window != "undefined" ? window.__lastTokenBreakdown : null;
          if (e && e.total) {
            return xe.jsxs("button", {
              type: "button",
              onClick: e => {
                e.stopPropagation();
                Ws(true);
              },
              title: C("tokenBreakdownOpen", "点击查看 token 分类"),
              style: {
                border: "none",
                borderRadius: "12px",
                padding: "8px 12px",
                background: "linear-gradient(135deg, #5B8DEF 0%, #9B51E0 100%)",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 700,
                cursor: "pointer",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                boxShadow: "0 2px 6px rgba(91,141,239,0.25)"
              },
              children: [xe.jsx("span", {
                style: {
                  fontSize: "11px",
                  opacity: 0.9
                },
                children: "◐"
              }), e.total]
            });
          } else {
            return null;
          }
        })()]
      }), xe.jsx(Ge, {
        isOpen: Us,
        onClose: () => Ws(false),
        t: C
      }), Os && xe.jsxs("div", {
        className: "tm-console-panel",
        style: {
          borderRadius: "12px",
          background: ao.panelBg,
          color: ao.panelText,
          border: `1px solid ${ao.lineBorder}`,
          boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
          padding: "12px",
          height: "50vh",
          overflowY: "auto",
          marginTop: "8px"
        },
        children: [xe.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8px"
          },
          children: [xe.jsx("span", {
            style: {
              fontSize: "12px",
              color: ao.subText
            },
            children: Gs ? C("consoleShowAllMsg", "顯示所有訊息") : C("consoleShowWarnMsg", "僅顯示警告和錯誤")
          }), xe.jsxs("div", {
            style: {
              display: "flex",
              gap: "8px"
            },
            children: [xe.jsx("button", {
              type: "button",
              onClick: () => Ys(e => !e),
              style: {
                border: `1px solid ${ao.controlsBorder}`,
                background: ao.controlsBg,
                color: ao.controlsText,
                borderRadius: "8px",
                padding: "4px 8px",
                fontSize: "11px",
                cursor: "pointer"
              },
              children: Gs ? C("consoleBtnWarnOnly", "僅警告") : C("consoleBtnViewAll", "查看全部")
            }), xe.jsx("button", {
              type: "button",
              onClick: () => Vs([]),
              style: {
                border: `1px solid ${ao.controlsBorder}`,
                background: ao.controlsBg,
                color: ao.controlsText,
                borderRadius: "8px",
                padding: "4px 8px",
                fontSize: "11px",
                cursor: "pointer"
              },
              children: C("consoleBtnClear", "清除")
            }), xe.jsx("button", {
              type: "button",
              onClick: async () => {
                const e = so.map(e => `[${e.time}] [${e.level.toUpperCase()}] ${e.text}`).join("\n");
                if (e) {
                  try {
                    await navigator.clipboard.writeText(e);
                    E(C("consoleCopySuccess", "已複製"));
                  } catch {
                    E(C("consoleCopyFail", "複製失敗"));
                  }
                }
              },
              style: {
                border: `1px solid ${ao.controlsBorder}`,
                background: ao.controlsBg,
                color: ao.controlsText,
                borderRadius: "8px",
                padding: "4px 8px",
                fontSize: "11px",
                cursor: "pointer"
              },
              children: C("consoleBtnCopy", "複製")
            })]
          })]
        }), so.length === 0 ? xe.jsx("div", {
          style: {
            fontSize: "12px",
            color: ao.subText
          },
          children: Gs ? C("consoleEmptyAll", "暫無訊息") : C("consoleEmptyWarn", "暫無警告或錯誤")
        }) : xe.jsx("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "6px"
          },
          children: so.slice().reverse().map(e => xe.jsxs("div", {
            style: {
              fontSize: "11px",
              lineHeight: "1.45",
              borderTop: `1px solid ${ao.lineBorder}`,
              paddingTop: "6px",
              overflowWrap: "anywhere",
              wordBreak: "break-word",
              whiteSpace: "pre-wrap"
            },
            children: [xe.jsxs("span", {
              style: {
                color: ro(e.level),
                marginRight: "8px",
                fontWeight: 700
              },
              children: ["[", e.level.toUpperCase(), "]"]
            }), xe.jsx("span", {
              style: {
                color: ao.subText,
                marginRight: "8px"
              },
              children: e.time
            }), xe.jsx("span", {
              style: {
                color: ao.panelText
              },
              children: e.text
            })]
          }, e.id))
        })]
      })]
    }), Ks && xe.jsxs("div", {
      className: "tm-multiselect-bar",
      children: [xe.jsx("button", {
        className: "tm-ms-cancel",
        onClick: Ao,
        children: C("msgCancel", "取消")
      }), xe.jsx("span", {
        className: "tm-ms-count",
        children: `已選 ${Js.size} 項`
      }), xe.jsx("button", {
        className: "tm-ms-hide",
        onClick: la === "multi" ? rl : Po,
        disabled: Js.size === 0,
        style: {
          marginRight: "8px"
        },
        children: C("chatActionHide", "隱藏")
      }), xe.jsx("button", {
        className: "tm-ms-delete",
        onClick: la === "multi" ? al : $o,
        disabled: Js.size === 0,
        children: C("btnDelete", "刪除")
      })]
    }), Da && !Ks && xe.jsxs("div", {
      className: "tm-history-bar",
      children: [xe.jsxs("span", {
        children: [C("tmViewingHistory", "正在瀏覽歷史記錄"), (aa == null ? undefined : aa.name) ? ` — ${aa.name}` : ""]
      }), xe.jsx("button", {
        className: "tm-history-bar-btn",
        onClick: wo,
        children: C("tmBackToLatest", "回到最新")
      })]
    }), xe.jsxs("div", {
      className: "tm-compose",
      style: Ks || Da || !ir || la === "multi" && !lr ? {
        display: "none"
      } : undefined,
      children: [xe.jsxs("div", {
        className: "tm-compose-toolbar",
        children: [xe.jsx("button", {
          className: "tm-regen-btn",
          onClick: () => {
            F(la === "multi" ? e => {
              if (Fn && Ri.beginReroll()) {
                Ni.sendText("", {
                  allowEmpty: true,
                  rerollFeedback: e
                });
              } else {
                Ni.rerollLast(e);
              }
            } : e => (async (e = "") => {
              Sr.current++;
              if (br.current) {
                br.current.abort();
                br.current = null;
              }
              if (yr.current) {
                clearTimeout(yr.current);
                yr.current = null;
              }
              Ae(false);
              wr.current = false;
              fo();
              const t = y;
              const n = String(zr == null ? undefined : zr.id);
              if (Fn) {
                const t = Kr.beginReroll();
                if (t) {
                  if (t.remaining.length > 0) {
                    ho(t.remaining, {
                      rerollFeedback: e
                    });
                  }
                  return;
                }
              }
              const s = [...(Jr() ?? je)];
              while (s.length > 0 && s[s.length - 1].role === "char") {
                const e = s.pop();
                if (t && n && typeof e.id == "number") {
                  te.deleteById(e.id).catch(e => console.error("TmStory delete error:", e));
                }
              }
              Ce(s);
              if (s.length > 0) {
                ho(s, {
                  rerollFeedback: e
                });
              }
            })(e));
          },
          disabled: la === "multi" ? !Fr.activeSession || Hr.length === 0 || Ni.isGenerating : je.length === 0,
          title: C("tmRegenBtn", "重投"),
          style: {
            minWidth: 0,
            padding: "4px 8px"
          },
          children: xe.jsx(Rt, {
            size: 13
          })
        }), xe.jsx("button", {
          className: "tm-regen-btn",
          onClick: () => {
            if (la === "multi") {
              Ni.sendText("", {
                allowEmpty: true
              });
            } else {
              (async () => {
                if (wr.current || !zr) {
                  return;
                }
                if (Da) {
                  await wo();
                }
                wr.current = true;
                fo();
                const e = y;
                const n = String(zr.id);
                const s = (await So(e, n)) || Rr.current;
                const a = Jr() ?? je;
                const r = Date.now();
                const i = {
                  id: r,
                  role: "user",
                  content: "[繼續推進劇情，不需要等待用戶回應]",
                  hidden: true,
                  timestamp: r
                };
                const o = [...a, i];
                Ce(o);
                try {
                  const a = await te.add(e, n, {
                    role: "user",
                    content: i.content,
                    sessionId: s,
                    timestamp: r,
                    hidden: true
                  });
                  Ce(e => e.map(e => e.id === r ? {
                    ...e,
                    id: a
                  } : e));
                  if (s) {
                    t.update(s, {
                      lastActiveAt: Date.now()
                    }).catch(() => {});
                  }
                } catch (l) {
                  console.error("TmStory save error:", l);
                }
                ho(o);
              })();
            }
          },
          disabled: la === "multi" ? !Fr.activeSession || Wr.length < 2 || Ni.isGenerating : je.length === 0 || Ee,
          title: C("tmContinueBtn", "繼續劇情"),
          style: {
            minWidth: 0,
            padding: "4px 8px"
          },
          children: xe.jsx(Dt, {
            size: 13
          })
        }), xe.jsx("button", {
          className: "tm-regen-btn" + (ii.noiseOn ? " active" : ""),
          onClick: ii.toggleNoise,
          title: C("tmWhiteNoiseToggle", "白噪音"),
          style: ii.noiseOn ? {
            minWidth: 0,
            padding: "4px 8px",
            color: "#4caf50",
            borderColor: "rgba(76,175,80,0.3)",
            background: "rgba(76,175,80,0.08)"
          } : {
            minWidth: 0,
            padding: "4px 8px"
          },
          children: ii.noiseOn ? xe.jsx(Bt, {
            size: 13
          }) : xe.jsx(Lt, {
            size: 13
          })
        }), xe.jsx(Nn, {
          activeChar: la === "multi" ? Wr[0] || null : zr,
          activeUser: Or,
          storyEntries: la === "multi" ? Hr : je,
          tmApiSettings: hi,
          safeCurrentProfileUserId: y,
          characters: g,
          scenarioOutline: la === "multi" ? ((c = Fr.activeSession) == null ? undefined : c.scenarioOutline) || "" : In,
          storyTimeStr: la === "multi" ? `${((d = Fr.activeSession) == null ? undefined : d.storyTimeStr) || ""} ${((u = Fr.activeSession) == null ? undefined : u.storyPeriod) || ""}`.trim() : (oi == null ? undefined : oi.hasStoryTime) ? `${oi.storyTimeStr || ""} ${oi.storyPeriod || ""}`.trim() : "",
          participants: la === "multi" ? Wr : null,
          spectate: la === "multi" && ((m = Fr.activeSession) == null ? undefined : m.spectate) === true,
          t: C
        }), (la === "multi" ? Hr : je).filter(e => !e.hidden).length >= 2 && xe.jsx("button", {
          className: "tm-regen-btn",
          onClick: la === "multi" ? zo : Lo,
          title: C("tmCompleteBtn", "完結故事"),
          style: {
            minWidth: 0,
            padding: "4px 8px",
            marginLeft: "auto"
          },
          children: xe.jsx(vt, {
            size: 13
          })
        }), rn && ss.length > 0 && xe.jsxs("button", {
          className: `tm-suggestions-btn ${rs ? "active" : ""} ${ss.some(e => e.status === "loading") ? "loading" : ""}`,
          onClick: () => is(e => !e),
          children: [ss.some(e => e.status === "loading") ? C("tmSugGenerating", "生成中…") : C("tmSugTitle", "建議回應"), xe.jsx(Nt, {
            size: 11,
            className: "tm-suggestions-chevron " + (rs ? "flipped" : "")
          })]
        })]
      }), rn && rs && ss.length > 0 && xe.jsx("div", {
        className: "tm-suggestions-panel",
        children: ss.map((e, n) => xe.jsxs("div", {
          className: `tm-suggestion-item ${e.status}`,
          children: [xe.jsxs("div", {
            className: "tm-suggestion-header",
            children: [xe.jsx("span", {
              className: "tm-suggestion-direction",
              children: e.direction
            }), xe.jsx("button", {
              className: "tm-suggestion-reroll",
              onClick: e => {
                e.stopPropagation();
                if (la === "multi") {
                  bo(n);
                } else {
                  xo(n);
                }
              },
              disabled: e.status === "loading",
              title: C("tmSugReroll", "重新生成此回應"),
              children: xe.jsx(Rt, {
                size: 11,
                className: e.status === "loading" ? "spinning" : ""
              })
            })]
          }), e.status === "loading" && xe.jsxs("span", {
            className: "tm-suggestion-loading",
            children: [xe.jsx("span", {
              className: "tm-suggestion-dot"
            }), xe.jsx("span", {
              className: "tm-suggestion-dot"
            }), xe.jsx("span", {
              className: "tm-suggestion-dot"
            })]
          }), e.status === "done" && xe.jsx("button", {
            className: "tm-suggestion-text-btn",
            onClick: () => (async e => {
              var n;
              if (!e) {
                return;
              }
              if (la === "multi") {
                if ((n = Ni.isGeneratingRef) == null ? undefined : n.current) {
                  return;
                }
                as([]);
                is(false);
                Nr.current.forEach(e => e.abort());
                Nr.current = [];
                Te("");
                if (xr.current) {
                  xr.current.style.height = "auto";
                }
                Ni.sendText(e);
                return;
              }
              if (wr.current || !zr) {
                return;
              }
              wr.current = true;
              as([]);
              is(false);
              Nr.current.forEach(e => e.abort());
              Nr.current = [];
              const s = y;
              const a = String(zr.id);
              const r = Rr.current;
              const i = Jr() ?? je;
              const o = Date.now();
              const l = [...i, {
                id: o,
                role: "user",
                content: e,
                timestamp: o
              }];
              Ce(l);
              Te("");
              if (xr.current) {
                xr.current.style.height = "auto";
              }
              try {
                const n = await te.add(s, a, {
                  role: "user",
                  content: e,
                  sessionId: r,
                  timestamp: o
                });
                Ce(e => e.map(e => e.id === o ? {
                  ...e,
                  id: n
                } : e));
                if (r) {
                  t.update(r, {
                    lastActiveAt: Date.now()
                  }).catch(() => {});
                }
              } catch (c) {
                console.error("TmStory save error:", c);
              }
              ho(l);
            })(e.text),
            children: xe.jsx("span", {
              className: "tm-suggestion-text",
              children: e.text
            })
          }), e.status === "error" && xe.jsx("span", {
            className: "tm-suggestion-error",
            children: C("tmSugError", "生成失敗")
          })]
        }, n))
      }), xe.jsxs("div", {
        className: "tm-compose-row",
        children: [xe.jsx("textarea", {
          ref: xr,
          className: "tm-input",
          placeholder: la === "multi" ? Fr.activeSession ? Fr.activeSession.spectate === true ? C("tmSpectateInputPlaceholder", "留空直接續寫，或輸入導演提示（如：讓他想起小時候的事）……") : C("tmMultiInputPlaceholder", "對在場角色說些什麼，或描述你的行動……") : C("tmMultiInputNoSessionPlaceholder", "請先選擇或建立多人場景") : zr ? (aa == null ? undefined : aa.spectate) === true ? C("tmSpectateInputPlaceholder", "留空直接續寫，或輸入導演提示（如：讓他想起小時候的事）……") : C("tmInputPlaceholder", "對 {name} 說些什麼，或描述行動……").replace("{name}", zr.name) : C("tmUnselectedCharInput", "請先選擇角色"),
          value: Ie,
          rows: 2,
          disabled: la === "multi" ? !Fr.activeSession || Wr.length < 2 : !zr,
          onChange: e => {
            Te(e.target.value);
            e.target.style.height = "auto";
            e.target.style.height = Math.min(e.target.scrollHeight, 140) + "px";
          },
          onKeyDown: e => {}
        }), Ee || la === "multi" && Ni.isGenerating ? xe.jsx("button", {
          className: "tm-send-btn tm-stop-btn ready",
          onClick: ko,
          title: C("tmStopGenerating", "終止生成"),
          "aria-label": C("tmStopGenerating", "終止生成"),
          style: {
            color: "#ff3b30"
          },
          children: xe.jsx(zt, {
            size: 14,
            fill: "#ff3b30"
          })
        }) : (() => {
          var e;
          const t = ((e = Fr.activeSession) == null ? undefined : e.spectate) === true;
          const n = la === "multi" && !!Fr.activeSession && Wr.length >= 2 && (!!Ie.trim() || t);
          const s = Ie.trim() || (aa == null ? undefined : aa.spectate) === true;
          const a = la === "multi" ? n : s;
          const r = la === "multi" ? !n : !zr || !Ie.trim() && (aa == null ? undefined : aa.spectate) !== true;
          const i = la === "multi" ? t && !Ie.trim() ? C("tmSpectateContinueBtn", "繼續續寫場景") : undefined : (aa == null ? undefined : aa.spectate) !== true || Ie.trim() ? undefined : C("tmSpectateContinueBtn", "繼續續寫場景");
          return xe.jsx("button", {
            className: "tm-send-btn " + (a ? "ready" : ""),
            onClick: jo,
            disabled: r,
            title: i,
            children: xe.jsx(Ot, {
              size: 15
            })
          });
        })()]
      })]
    }), di && xe.jsxs("div", {
      className: "tm-cg-fullscreen",
      onClick: () => ui(null),
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.92)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        animation: "tmCgFadeIn 0.3s ease"
      },
      children: [xe.jsx("img", {
        decoding: "async",
        src: di.url,
        style: {
          maxWidth: "95vw",
          maxHeight: "80vh",
          objectFit: "contain",
          borderRadius: "4px"
        },
        alt: "",
        onClick: e => e.stopPropagation()
      }), xe.jsxs("div", {
        onClick: e => e.stopPropagation(),
        style: {
          display: "flex",
          gap: "16px",
          marginTop: "16px"
        },
        children: [xe.jsxs("button", {
          onClick: async () => {
            try {
              await B(di.url, `cg_${Date.now()}.png`);
            } catch {}
          },
          style: {
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "20px",
            padding: "8px 20px",
            color: "#fff",
            fontSize: "13px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px"
          },
          children: [xe.jsx(St, {
            size: 14
          }), C("tmCgDownload", "下載")]
        }), xe.jsxs("button", {
          onClick: async () => {
            if (!di.prompt || li) {
              return;
            }
            const e = di.entryId;
            ui(null);
            await Gi(di.prompt, e);
          },
          disabled: li,
          style: {
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "20px",
            padding: "8px 20px",
            color: "#fff",
            fontSize: "13px",
            cursor: li ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            opacity: li ? 0.5 : 1
          },
          children: [xe.jsx(Rt, {
            size: 14
          }), C("tmCgReroll", "重新生成")]
        }), xe.jsx("button", {
          onClick: () => {
            if (li || !di.prompt || !di.entryId) {
              return;
            }
            const e = {
              entryId: di.entryId,
              prompt: di.prompt
            };
            ui(null);
            pi(e);
          },
          disabled: li,
          style: {
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "20px",
            padding: "8px 20px",
            color: "#fff",
            fontSize: "14px",
            cursor: li ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            opacity: li ? 0.5 : 1,
            fontWeight: 600
          },
          title: "編輯提示詞並重新生圖",
          children: "✎ 編輯重生"
        }), xe.jsxs("button", {
          onClick: async () => {
            if (!li && di.url) {
              await Ki(di.url, di.entryId);
            }
          },
          disabled: li,
          style: {
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "20px",
            padding: "8px 20px",
            color: "#fff",
            fontSize: "13px",
            cursor: li ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            opacity: li ? 0.5 : 1
          },
          title: C("tmCgFavoriteTitle", "收藏到日曆影集"),
          children: ["★ ", C("tmCgFavorite", "收藏")]
        }), xe.jsxs("button", {
          onClick: async () => {
            if (li || !di.entryId) {
              return;
            }
            const e = di.entryId;
            ui(null);
            await Yi(e);
          },
          disabled: li,
          style: {
            background: "rgba(255,59,48,0.18)",
            border: "1px solid rgba(255,59,48,0.35)",
            borderRadius: "20px",
            padding: "8px 20px",
            color: "#ff6b6b",
            fontSize: "13px",
            cursor: li ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            opacity: li ? 0.5 : 1
          },
          title: C("tmCgDeleteTitle", "刪除這張 CG（保留樓層文字）"),
          children: [xe.jsx(Et, {
            size: 14
          }), C("tmCgDelete", "刪除 CG")]
        })]
      }), xe.jsx("button", {
        onClick: () => ui(null),
        style: {
          position: "absolute",
          top: "16px",
          right: "16px",
          background: "rgba(255,255,255,0.15)",
          border: "none",
          borderRadius: "50%",
          width: "36px",
          height: "36px",
          color: "#fff",
          fontSize: "18px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: "✕"
      })]
    }), mi && xe.jsx(Ft, {
      open: true,
      onClose: () => pi(null),
      initialDesc: L(mi.prompt || ""),
      char: la === "multi" && Fr.activeSession ? Wr[0] || null : zr,
      user: Or,
      userId: y,
      characters: la === "multi" && Fr.activeSession ? Wr : g,
      sceneType: "tm",
      busy: !!li,
      onConfirm: async ({
        rawImgDesc: e,
        useRaw: t
      }) => {
        const n = mi.entryId;
        pi(null);
        await Gi(e, n, {
          rawImgDesc: e,
          useRaw: t
        });
      }
    }), xe.jsx(Ue, {
      open: A,
      onClose: U,
      onSubmit: K,
      t: C,
      tOr: k,
      presets: J,
      onAddPreset: q,
      onDeletePreset: Q,
      onUpdatePreset: he
    }), Pe && la === "multi" && Fr.activeSession && ye.createPortal(xe.jsx("div", {
      onClick: () => De(false),
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 98000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16
      },
      children: xe.jsxs("div", {
        onClick: e => e.stopPropagation(),
        style: {
          background: "#fff",
          borderRadius: 14,
          width: "100%",
          maxWidth: 380,
          maxHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 12px 40px rgba(0,0,0,0.3)"
        },
        children: [xe.jsxs("div", {
          style: {
            padding: "14px 16px",
            borderBottom: "1px solid #eee",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          },
          children: [xe.jsx("strong", {
            style: {
              fontSize: 15
            },
            children: C("tmMultiAddMemberTitle", "加入新成員")
          }), xe.jsx("button", {
            onClick: () => De(false),
            style: {
              background: "none",
              border: "none",
              fontSize: 18,
              cursor: "pointer",
              color: "#94a3b8"
            },
            children: "✕"
          })]
        }), xe.jsx("div", {
          style: {
            overflowY: "auto",
            flex: 1,
            padding: "8px 0"
          },
          children: (() => {
            const e = new Set((Fr.activeSession.participants || []).map(String));
            const t = g.filter(t => !e.has(String(t.id)));
            if (t.length === 0) {
              return xe.jsx("div", {
                style: {
                  padding: 24,
                  textAlign: "center",
                  color: "#9ca3af",
                  fontSize: 13
                },
                children: C("tmMultiNoMoreChars", "沒有其他可加入的角色")
              });
            } else {
              return t.map(e => {
                var t;
                return xe.jsxs("button", {
                  type: "button",
                  onClick: () => Hi(e),
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    width: "100%",
                    padding: "10px 16px",
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid #f3f4f6",
                    cursor: "pointer",
                    textAlign: "left"
                  },
                  children: [xe.jsx("div", {
                    style: {
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      overflow: "hidden",
                      background: "#e5e7eb",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#6b7280",
                      fontWeight: 700
                    },
                    children: e.image ? xe.jsx("img", {
                      src: e.image,
                      alt: e.name,
                      style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }
                    }) : ((t = e.name) == null ? undefined : t[0]) || "?"
                  }), xe.jsxs("div", {
                    style: {
                      flex: 1,
                      minWidth: 0
                    },
                    children: [xe.jsx("div", {
                      style: {
                        fontSize: 14,
                        color: "#111827",
                        fontWeight: 500
                      },
                      children: e.name
                    }), e.group && xe.jsx("div", {
                      style: {
                        fontSize: 11,
                        color: "#9ca3af"
                      },
                      children: e.group
                    })]
                  })]
                }, e.id);
              });
            }
          })()
        })]
      })
    }), document.body)]
  });
};
const as = e => {
  if (!e || typeof e != "string") {
    return "";
  }
  let t = e.replace(/\*\*([^*\n]+)\*\*/g, "<strong class=\"tm-bold\">$1</strong>").replace(/~~([^~\n]+)~~/g, "<del class=\"tm-del\">$1</del>").replace(/\*([^*\n]+)\*/g, "<em class=\"tm-action\">$1</em>");
  t = t.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  t = t.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");
  t = t.replace(/<link\b[^>]*rel\s*=\s*["']?stylesheet["']?[^>]*>/gi, "");
  t = t.replace(/\s+on\w+\s*=\s*(["'])[^"']*\1/gi, "");
  t = t.replace(/javascript\s*:/gi, "");
  t = t.replace(/<a\b([^>]*)>/gi, (e, t) => /target\s*=/i.test(t) ? `<a${t}>` : `<a${t} target="_blank" rel="noopener noreferrer">`);
  return t;
};
const rs = /^\s*<(?:!doctype|html|body|head)\b/i;
const is = /<style\b[^>]*>[\s\S]*?<\/style>|<link\b[^>]*rel\s*=\s*["']?stylesheet/i;
const os = e => !!e && typeof e == "string" && (!!is.test(e) || !!rs.test(e.trim()));
const ls = /<(?:!doctype|html|head|body|style)\b|<link\b[^>]*rel\s*=\s*["']?stylesheet/i;
const cs = ({
  content: e,
  entryId: t,
  isGenerating: n,
  onButtonClick: s
}) => {
  const a = ge.useRef(null);
  const r = ge.useRef(false);
  const [i, o] = ge.useState(120);
  const [l, c] = ge.useState(false);
  ge.useEffect(() => {
    if (!s) {
      return;
    }
    const e = e => {
      const n = e == null ? undefined : e.data;
      if (n && typeof n == "object") {
        if (n.type === "tm-btn-click" && n.entryId === t && n.value) {
          s(n.value);
        } else if (n.type === "chat-input-fill" && typeof n.text == "string" && n.text) {
          s(n.text);
        }
      }
    };
    window.addEventListener("message", e);
    return () => window.removeEventListener("message", e);
  }, [s, t]);
  ge.useEffect(() => {
    if (!n) {
      r.current = false;
      c(false);
    }
  }, [e, n]);
  ge.useEffect(() => {
    if (n || r.current) {
      return;
    }
    let s = null;
    let i = null;
    const l = setTimeout(() => {
      var n;
      const l = a.current;
      if (l && !r.current) {
        r.current = true;
        try {
          const a = l.contentDocument || ((n = l.contentWindow) == null ? undefined : n.document);
          if (!a) {
            return;
          }
          const r = JSON.stringify(String(t || ""));
          const d = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
          const u = [];
          let m;
          while ((m = d.exec(e)) !== null) {
            u.push(m[1]);
          }
          const p = e.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
          a.open();
          a.write(p);
          a.close();
          try {
            const e = a.createElement("style");
            e.textContent = "html,body{background:transparent !important;margin:0;padding:0;overflow:hidden}";
            (a.head || a.documentElement).appendChild(e);
          } catch {}
          u.forEach(e => {
            const t = a.createElement("script");
            t.textContent = e;
            (a.body || a.documentElement).appendChild(t);
          });
          const h = a.createElement("script");
          h.textContent = `(function(){var EID=${r};document.addEventListener('click',function(e){var btn=e.target&&(e.target.closest('button')||e.target.closest('[data-tm-action]'));if(!btn)return;var val=btn.getAttribute('data-tm-value')||btn.textContent.trim();if(val)try{parent.postMessage({type:'tm-btn-click',entryId:EID,value:val},'*')}catch(_){}});})();`;
          (a.body || a.documentElement).appendChild(h);
          const g = () => {
            var e;
            var t;
            try {
              const n = Math.max(((e = a.body) == null ? undefined : e.scrollHeight) || 0, ((t = a.documentElement) == null ? undefined : t.scrollHeight) || 0, 120);
              o(e => Math.abs(e - n) > 1 ? n : e);
            } catch {
              o(300);
            }
          };
          setTimeout(() => {
            g();
            c(true);
          }, 60);
          setTimeout(g, 300);
          setTimeout(g, 900);
          try {
            const e = l.contentWindow;
            if (e && typeof e.ResizeObserver == "function") {
              s = new e.ResizeObserver(() => g());
              if (a.body) {
                s.observe(a.body);
              }
              if (a.documentElement) {
                s.observe(a.documentElement);
              }
            }
            if (typeof MutationObserver == "function" && a.body) {
              i = new MutationObserver(() => g());
              i.observe(a.body, {
                childList: true,
                subtree: true,
                attributes: true,
                characterData: true
              });
            }
          } catch {}
        } catch (d) {
          console.error("[TM] iframe write error:", d);
          c(true);
        }
      }
    }, 50);
    return () => {
      clearTimeout(l);
      try {
        if (s != null) {
          s.disconnect();
        }
      } catch {}
      try {
        if (i != null) {
          i.disconnect();
        }
      } catch {}
    };
  }, [e, t, n]);
  if (n) {
    const t = (e || "").replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "").replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    return xe.jsx("div", {
      className: "tm-body tm-body-char",
      children: xe.jsxs("div", {
        className: "tm-para-block",
        style: {
          color: "inherit",
          whiteSpace: "pre-wrap",
          opacity: 0.65,
          fontStyle: "italic"
        },
        children: [xe.jsx("span", {
          children: t
        }), xe.jsx("span", {
          className: "tm-stream-cursor"
        })]
      })
    });
  }
  const d = l ? "" : (e || "").replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "").replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return xe.jsxs(xe.Fragment, {
    children: [!l && xe.jsx("div", {
      className: "tm-body tm-body-char",
      children: xe.jsx("div", {
        className: "tm-para-block",
        style: {
          color: "inherit",
          whiteSpace: "pre-wrap",
          opacity: 0.65,
          fontStyle: "italic"
        },
        children: xe.jsx("span", {
          children: d || "⋯"
        })
      })
    }), xe.jsx("iframe", {
      ref: a,
      style: {
        width: "100%",
        height: l ? i + "px" : "0",
        border: "none",
        display: "block",
        visibility: l ? "visible" : "hidden",
        background: "transparent"
      },
      scrolling: "no",
      allowtransparency: "true"
    })]
  });
};
const ds = ({
  title: e,
  body: t,
  isGenerating: n
}) => {
  const [s, a] = ge.useState(true);
  const r = ge.useMemo(() => ts(t), [t]);
  return xe.jsxs("div", {
    className: "tm-collapsible-section",
    children: [xe.jsxs("div", {
      className: "tm-collapsible-toggle",
      onClick: () => a(e => !e),
      children: [xe.jsx("span", {
        className: "tm-collapsible-title",
        children: e || "…"
      }), xe.jsx("span", {
        className: "tm-translation-arrow " + (s ? "collapsed" : ""),
        children: "▾"
      })]
    }), !s && xe.jsx("div", {
      className: "tm-collapsible-body",
      children: r.map((e, t) => xe.jsxs("div", {
        className: Zn.test(e) ? "tm-para-block tm-quote-block" : "tm-para-block",
        children: [xe.jsx("span", {
          dangerouslySetInnerHTML: {
            __html: as(e)
          }
        }), n && t === r.length - 1 && xe.jsx("span", {
          className: "tm-stream-cursor"
        })]
      }, t))
    })]
  });
};
const us = e => (e == null ? undefined : e.pageName) || (e == null ? undefined : e.name) || "";
const ms = e => (e == null ? undefined : e.sceneName) || (e == null ? undefined : e.name) || "";
const ps = e => ({
  id: e._id,
  role: e.role || "narration",
  content: typeof e.content == "string" ? e.content : String(e.content || ""),
  timestamp: e.timestamp,
  ...(e.type ? {
    type: e.type
  } : {}),
  ...(e.action ? {
    action: e.action
  } : {}),
  ...(Array.isArray(e.charIds) ? {
    charIds: e.charIds
  } : {}),
  ...(Array.isArray(e.charNames) ? {
    charNames: e.charNames
  } : {}),
  ...(e.reason ? {
    reason: e.reason
  } : {}),
  ...(e.rerollSlotId ? {
    rerollSlotId: e.rerollSlotId
  } : {}),
  ...(e.rerollVariantIndex != null ? {
    rerollVariantIndex: e.rerollVariantIndex
  } : {}),
  ...(e.hasThinking ? {
    hasThinking: e.hasThinking
  } : {}),
  ...(e.illustration ? {
    illustration: e.illustration
  } : {}),
  ...(Array.isArray(e.participantsSnapshot) ? {
    participantsSnapshot: e.participantsSnapshot
  } : {}),
  ...(e.pendingCastSuggestion ? {
    pendingCastSuggestion: e.pendingCastSuggestion
  } : {}),
  ...(e.hiddenByUser ? {
    hiddenByUser: true
  } : {})
});
const hs = (e, t, n = false) => {
  const s = (e || []).slice(0, 4);
  if (s.length === 0) {
    return null;
  }
  const a = s.length <= 2 ? `repeat(${Math.max(s.length, 1)}, 1fr)` : "repeat(2, 1fr)";
  return xe.jsx("div", {
    className: "tm-multi-avatar-grid",
    style: {
      width: n ? "100%" : t,
      height: n ? "100%" : t,
      borderRadius: "inherit",
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: a,
      gap: "1px",
      background: "#f0f2f5"
    },
    children: s.map((e, n) => {
      var s;
      return xe.jsx("div", {
        style: {
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: e.image ? "#ccc" : `hsl(${n * 70}, 45%, 58%)`,
          color: "#fff",
          fontWeight: 700,
          fontSize: Math.max(10, Math.round(t * 0.18))
        },
        children: e.image ? xe.jsx("img", {
          decoding: "async",
          src: e.image,
          alt: e.name,
          style: Re(e)
        }) : ((s = e.name) == null ? undefined : s[0]) || "?"
      }, e.id);
    })
  });
};
const gs = fe.memo(({
  entry: e,
  onDelete: t,
  t: n
}) => {
  const s = Array.isArray(e == null ? undefined : e.charNames) ? e.charNames.filter(Boolean) : [];
  const a = s.length > 0 ? s.join("、") : "?";
  const r = (e == null ? undefined : e.action) === "add" ? n("tmCastChangeAdded", "加入了場景") : n("tmCastChangeRemoved", "離開了場景");
  const i = ((e == null ? undefined : e.reason) || "").trim();
  return xe.jsx("div", {
    className: "tm-multi-keep tm-cast-change-notice",
    style: {
      display: "flex",
      justifyContent: "center",
      margin: "12px 0",
      padding: "0 16px"
    },
    children: xe.jsxs("div", {
      style: {
        maxWidth: "85%",
        padding: "8px 14px",
        borderRadius: 14,
        background: "rgba(0,0,0,0.05)",
        color: "var(--tm-fg-muted, #6b7280)",
        fontSize: 12,
        lineHeight: 1.5,
        textAlign: "center",
        position: "relative"
      },
      children: [xe.jsxs("div", {
        children: ["📌 ", xe.jsx("strong", {
          children: a
        }), " ", r]
      }), i && xe.jsxs("div", {
        style: {
          marginTop: 4,
          opacity: 0.8,
          fontSize: 11
        },
        children: ["「", i, "」"]
      }), t && xe.jsx("button", {
        type: "button",
        "aria-label": n("tmDelete", "刪除"),
        onClick: () => t(e),
        style: {
          position: "absolute",
          top: 2,
          right: 4,
          background: "transparent",
          border: "none",
          color: "inherit",
          opacity: 0.5,
          cursor: "pointer",
          fontSize: 11,
          padding: 2,
          lineHeight: 1
        },
        children: "✕"
      })]
    })
  });
});
gs.displayName = "CastChangeNotice";
const xs = fe.memo(({
  entry: e,
  onAccept: t,
  onDismiss: n,
  t: s
}) => {
  var a;
  var r;
  const i = e == null ? undefined : e.pendingCastSuggestion;
  if (!i || i.status !== "pending") {
    return null;
  }
  const o = (a = i.join) == null ? undefined : a.charName;
  const l = (r = i.leave) == null ? undefined : r.charName;
  if (o || l) {
    return xe.jsx("div", {
      className: "tm-multi-keep tm-cast-suggestion",
      style: {
        display: "flex",
        justifyContent: "center",
        margin: "6px 0 12px",
        padding: "0 16px"
      },
      children: xe.jsxs("div", {
        style: {
          maxWidth: "88%",
          padding: "10px 14px",
          borderRadius: 14,
          background: "rgba(99,102,241,0.08)",
          border: "1px solid rgba(99,102,241,0.25)",
          color: "var(--tm-fg, #1f2937)",
          fontSize: 12,
          lineHeight: 1.5
        },
        children: [xe.jsxs("div", {
          style: {
            marginBottom: 6,
            fontWeight: 500
          },
          children: ["💡 ", s("tmMultiAutoCastSuggestTitle", "AI 建議")]
        }), o && xe.jsxs("div", {
          style: {
            marginBottom: 2
          },
          children: ["+ ", s("tmMultiAutoCastSuggestJoin", "{name} 加入場景").replace("{name}", o), i.join.reason && xe.jsxs("span", {
            style: {
              opacity: 0.7
            },
            children: ["「", i.join.reason, "」"]
          })]
        }), l && xe.jsxs("div", {
          style: {
            marginBottom: 2
          },
          children: ["− ", s("tmMultiAutoCastSuggestLeave", "{name} 離開場景").replace("{name}", l), i.leave.reason && xe.jsxs("span", {
            style: {
              opacity: 0.7
            },
            children: ["「", i.leave.reason, "」"]
          })]
        }), xe.jsxs("div", {
          style: {
            display: "flex",
            gap: 8,
            marginTop: 8,
            justifyContent: "flex-end"
          },
          children: [xe.jsx("button", {
            type: "button",
            onClick: () => n == null ? undefined : n(e),
            style: {
              padding: "4px 10px",
              borderRadius: 8,
              border: "1px solid var(--tm-border, rgba(0,0,0,0.12))",
              background: "transparent",
              color: "var(--tm-fg-muted, #6b7280)",
              fontSize: 12,
              cursor: "pointer"
            },
            children: s("tmMultiAutoCastDismiss", "忽略")
          }), xe.jsx("button", {
            type: "button",
            onClick: () => t == null ? undefined : t(e),
            style: {
              padding: "4px 12px",
              borderRadius: 8,
              border: "none",
              background: "#6366f1",
              color: "#fff",
              fontSize: 12,
              fontWeight: 500,
              cursor: "pointer"
            },
            children: s("tmMultiAutoCastAccept", "同意")
          })]
        })]
      })
    });
  } else {
    return null;
  }
});
xs.displayName = "CastSuggestionBubble";
const fs = fe.memo(({
  entry: e,
  onAccept: t,
  onDismiss: n,
  t: s
}) => {
  var a;
  const r = e == null ? undefined : e.pendingSoloUpgrade;
  if (!r || r.status !== "pending") {
    return null;
  }
  const i = (a = r.join) == null ? undefined : a.charName;
  if (i) {
    return xe.jsx("div", {
      className: "tm-solo-upgrade-suggestion",
      style: {
        display: "flex",
        justifyContent: "center",
        margin: "6px 0 12px",
        padding: "0 16px"
      },
      children: xe.jsxs("div", {
        style: {
          maxWidth: "88%",
          padding: "10px 14px",
          borderRadius: 14,
          background: "rgba(99,102,241,0.08)",
          border: "1px solid rgba(99,102,241,0.25)",
          color: "var(--tm-fg, #1f2937)",
          fontSize: 12,
          lineHeight: 1.5
        },
        children: [xe.jsxs("div", {
          style: {
            marginBottom: 6,
            fontWeight: 500
          },
          children: ["🎬 ", s("tmSoloUpgradeSuggestTitle", "AI 想邀請新角色加入")]
        }), xe.jsxs("div", {
          style: {
            marginBottom: 2
          },
          children: ["+ ", s("tmSoloUpgradeSuggestJoin", "{name} 加入並升級為多人場景").replace("{name}", i), r.join.reason && xe.jsxs("span", {
            style: {
              opacity: 0.7
            },
            children: ["「", r.join.reason, "」"]
          })]
        }), xe.jsxs("div", {
          style: {
            display: "flex",
            gap: 8,
            marginTop: 8,
            justifyContent: "flex-end"
          },
          children: [xe.jsx("button", {
            type: "button",
            onClick: () => n == null ? undefined : n(e),
            style: {
              padding: "4px 10px",
              borderRadius: 8,
              border: "1px solid var(--tm-border, rgba(0,0,0,0.12))",
              background: "transparent",
              color: "var(--tm-fg-muted, #6b7280)",
              fontSize: 12,
              cursor: "pointer"
            },
            children: s("tmMultiAutoCastDismiss", "忽略")
          }), xe.jsx("button", {
            type: "button",
            onClick: () => t == null ? undefined : t(e),
            style: {
              padding: "4px 12px",
              borderRadius: 8,
              border: "none",
              background: "#6366f1",
              color: "#fff",
              fontSize: 12,
              fontWeight: 500,
              cursor: "pointer"
            },
            children: s("tmSoloUpgradeAccept", "升級為多人")
          })]
        })]
      })
    });
  } else {
    return null;
  }
});
fs.displayName = "SoloUpgradeBubble";
const ys = fe.memo(({
  entry: e,
  index: t,
  floorIndex: n,
  char: s,
  participants: a,
  user: r,
  theme: i,
  isGenerating: o,
  onEdit: l,
  onDelete: c,
  onToggleHide: d,
  multiSelectMode: u,
  isSelected: m,
  onEnterMultiSelect: p,
  onToggleSelect: h,
  noAnimations: g,
  tmVoiceEnabled: x,
  onVoicePlay: y,
  voicePlayingId: v,
  voiceLoadingId: b,
  autoTranslate: S,
  cgGenerating: w,
  onCgClick: j,
  onHtmlButtonClick: C,
  thinkingPanelEnabled: k,
  thinkingKeyResolver: N
}) => {
  var T;
  const E = N || Y.tmKey;
  const {
    t: A
  } = I();
  const $ = ge.useRef(e.content || "");
  ge.useEffect(() => {
    $.current = e.content || "";
  }, [e.content]);
  const M = ge.useRef(o);
  ge.useEffect(() => {
    M.current = o;
  }, [o]);
  const P = ge.useRef(o && !g ? "" : e.content || "");
  const [R, _] = ge.useState(P.current);
  ge.useEffect(() => {
    if (g) {
      P.current = e.content || "";
      _(P.current);
    }
  }, [g, e.content]);
  const [D, B] = ge.useState(false);
  const [L, z] = ge.useState(() => (e == null ? undefined : e.thinking) || null);
  const [O, F] = ge.useState(false);
  ge.useEffect(() => {
    z((e == null ? undefined : e.thinking) || null);
    B(false);
  }, [e == null ? undefined : e.id]);
  const [U, W] = ge.useState(false);
  const [H, V] = ge.useState({
    x: 0,
    y: 0
  });
  const [G, K] = ge.useState(false);
  const X = ge.useRef(false);
  const [J, q] = ge.useState("");
  const Z = ge.useRef(null);
  const Q = ge.useRef(null);
  const [ee, te] = ge.useState(() => typeof window != "undefined" ? window.innerHeight : 800);
  const [ne, se] = ge.useState(0);
  ge.useEffect(() => {
    if (!G) {
      return;
    }
    const e = typeof window != "undefined" ? window.visualViewport : null;
    const t = () => te(e ? e.height : window.innerHeight);
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
  }, [G]);
  ge.useEffect(() => {
    if (!G || !he()) {
      se(0);
      return;
    }
    const e = () => {
      try {
        const e = document.getElementById("nuo-os-root") || document.documentElement;
        const t = getComputedStyle(e);
        const n = parseFloat(t.getPropertyValue("--apk-kb-h")) || 0;
        const s = n > 0 && parseFloat(t.getPropertyValue("--apk-kb-user-offset")) || 0;
        const a = Math.max(0, n + s);
        se(e => Math.abs(e - a) > 1 ? a : e);
      } catch (e) {}
    };
    e();
    let t = null;
    try {
      t = new MutationObserver(e);
      t.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["style"]
      });
    } catch (s) {}
    const n = setInterval(e, 250);
    return () => {
      try {
        if (t) {
          t.disconnect();
        }
      } catch (s) {}
      clearInterval(n);
    };
  }, [G]);
  const ae = e => {
    if (!o && !G && !u) {
      Z.current = setTimeout(() => {
        var t;
        let n;
        let s;
        if (e.touches) {
          n = e.touches[0].clientX;
          s = e.touches[0].clientY;
        } else {
          n = e.clientX;
          s = e.clientY;
        }
        const a = (t = Q.current) == null ? undefined : t.getBoundingClientRect();
        if (a) {
          V({
            x: n - a.left,
            y: s - a.top
          });
        }
        W(true);
      }, 500);
    }
  };
  const re = () => {
    if (Z.current) {
      clearTimeout(Z.current);
      Z.current = null;
    }
  };
  const ie = e => {
    var t;
    if (o || G) {
      return;
    }
    if (u) {
      return;
    }
    e.preventDefault();
    const n = (t = Q.current) == null ? undefined : t.getBoundingClientRect();
    if (n) {
      V({
        x: e.clientX - n.left,
        y: e.clientY - n.top
      });
    }
    W(true);
  };
  const oe = () => {
    if (u && h) {
      h(t);
    }
  };
  const le = () => {
    W(false);
    if (p) {
      p(t);
    }
  };
  const ce = () => {
    W(false);
    q(e.content || "");
    X.current = true;
    K(true);
  };
  const de = () => {
    X.current = false;
    K(false);
  };
  const ue = () => {
    W(false);
    if (c) {
      c(t);
    }
  };
  const me = () => {
    W(false);
    if (d) {
      d(t);
    }
  };
  const pe = (typeof window != "undefined" ? window.innerHeight : ee) - ne;
  const fe = Math.max(220, Math.min(ee, pe) - 24);
  const ve = G ? ye.createPortal(xe.jsx("div", {
    className: "tm-edit-modal-overlay",
    style: {
      alignItems: "flex-start",
      paddingTop: "max(env(safe-area-inset-top), 12px)"
    },
    onClick: e => {
      if (e.target === e.currentTarget) {
        de();
      }
    },
    children: xe.jsxs("div", {
      className: "tm-edit-modal",
      style: {
        height: `${fe}px`,
        maxHeight: `${fe}px`
      },
      children: [xe.jsxs("div", {
        className: "tm-edit-modal-header",
        children: [xe.jsx("button", {
          className: "tm-edit-modal-cancel",
          onClick: de,
          children: A("msgCancel", "取消")
        }), xe.jsx("div", {
          className: "tm-edit-modal-title",
          children: A("tmEdit", "編輯")
        }), xe.jsx("button", {
          className: "tm-edit-modal-confirm",
          onClick: () => {
            const e = J.trim();
            if (l && e) {
              l(t, e);
              $.current = e;
              P.current = e;
              _(e);
            }
            X.current = false;
            K(false);
          },
          children: A("tmEditConfirm", "確認")
        })]
      }), xe.jsx("textarea", {
        className: "tm-edit-modal-textarea",
        value: J,
        onChange: e => q(e.target.value),
        autoFocus: true
      })]
    })
  }), document.body) : null;
  ge.useEffect(() => {
    if (!U) {
      return;
    }
    const e = () => W(false);
    document.addEventListener("click", e, {
      once: true
    });
    return () => document.removeEventListener("click", e);
  }, [U]);
  ge.useEffect(() => {
    if (g) {
      const e = $.current;
      if (P.current !== e) {
        P.current = e;
        _(e);
      }
      return;
    }
    let e;
    let t = 0;
    const n = s => {
      if (X.current) {
        return;
      }
      const a = $.current;
      const r = P.current;
      if (r === a && !M.current) {
        return;
      }
      e = requestAnimationFrame(n);
      if (r === a) {
        return;
      }
      t ||= s;
      let o = 35;
      o = i === "magazine-dark" ? 75 : i === "apple-green" ? 35 : 55;
      if (s - t < o) {
        return;
      }
      t = s;
      let l = r;
      if (a.startsWith(r)) {
        const e = a.length - r.length;
        let t = 1;
        t = e > 200 ? 5 : e > 100 ? 3 : e > 40 ? 2 : 1;
        if (i === "magazine-dark" && Math.random() < 0.15) {
          t = 0;
        }
        l = a.substring(0, r.length + t);
      } else {
        let e = 0;
        while (e < r.length && e < a.length && r[e] === a[e]) {
          e++;
        }
        l = a.substring(0, e);
      }
      if (l !== r) {
        P.current = l;
        _(l);
      }
    };
    if (P.current !== $.current || M.current) {
      e = requestAnimationFrame(n);
    }
    return () => {
      if (e) {
        cancelAnimationFrame(e);
      }
    };
  }, [i, e.id, g]);
  const {
    rules: be
  } = We();
  const Se = ge.useMemo(() => {
    if (!R || o) {
      return R;
    }
    if (!Array.isArray(be) || be.length === 0) {
      return R;
    }
    try {
      const t = f(R, be, {
        timing: "display",
        scene: "tm",
        characterId: s == null ? undefined : s.id,
        userId: (r == null ? undefined : r.uid) || (r == null ? undefined : r.id),
        role: e.role === "user" ? "user" : "ai",
        userName: (r == null ? undefined : r.name) || "",
        charName: (s == null ? undefined : s.name) || ""
      }).text || R;
      if (t !== R) {
        try {
          console.groupCollapsed(`🧪 [TM] TextAlchemy processed (entry=${e.id}, ${R.length}→${t.length}字)`);
        } catch {}
        console.log("[TM] BEFORE:", R);
        console.log("[TM] AFTER :", t);
        try {
          console.groupEnd();
        } catch {}
      }
      return t;
    } catch (t) {
      console.warn("[TM TextAlchemist] applyRules failed:", t);
      return R;
    }
  }, [R, be, o, s == null ? undefined : s.id, r == null ? undefined : r.uid, r == null ? undefined : r.id, r == null ? undefined : r.name, s == null ? undefined : s.name, e.role, e.id]);
  const {
    original: we,
    translation: je
  } = ge.useMemo(() => {
    const e = Se === "[EMPTY_REROLL]" ? "（此版本 AI 回空或中斷，可切回上個版本或再次重投）" : Se;
    if (S && !os(e)) {
      return qn(e);
    } else {
      return {
        original: e,
        translation: ""
      };
    }
  }, [Se, S]);
  const Ce = ge.useMemo(() => (e => {
    if (!e || typeof e != "string") {
      return [{
        type: "text",
        content: e || ""
      }];
    }
    const t = [];
    let n;
    let s = 0;
    for (Qn.lastIndex = 0; (n = Qn.exec(e)) !== null;) {
      const a = e.slice(s, n.index).trim();
      if (a) {
        t.push({
          type: "text",
          content: a
        });
      }
      const r = n[1];
      const i = r.match(es);
      const o = i ? i[1].trim() : "";
      const l = i ? r.slice(i[0].length).trim() : r.trim();
      t.push({
        type: "collapsible",
        title: o,
        body: l
      });
      s = n.index + n[0].length;
    }
    const a = e.slice(s).trim();
    if (a) {
      t.push({
        type: "text",
        content: a
      });
    }
    if (t.length === 0) {
      t.push({
        type: "text",
        content: e
      });
    }
    return t;
  })(we), [we]);
  const ke = ge.useMemo(() => ts(we), [we]);
  const Ne = ge.useMemo(() => je ? ts(je) : [], [je]);
  const [Ie, Te] = ge.useState(false);
  if (e.role === "user") {
    const t = () => i === "apple-green" ? xe.jsxs("div", {
      className: "tm-user-header-apple",
      children: [xe.jsx("div", {
        className: "tm-user-avatar",
        children: (r == null ? undefined : r.avatar) ? r.avatar.startsWith("txt:") ? xe.jsx("div", {
          style: {
            width: "100%",
            height: "100%",
            borderRadius: "inherit",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#eee",
            color: "#555",
            fontSize: "14px"
          },
          children: r.avatar.substring(4)
        }) : xe.jsx("img", {
          decoding: "async",
          src: r.avatar,
          style: {
            width: "100%",
            height: "100%",
            borderRadius: "inherit",
            objectFit: "cover"
          }
        }) : xe.jsxs("svg", {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [xe.jsx("path", {
            d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
          }), xe.jsx("circle", {
            cx: "12",
            cy: "7",
            r: "4"
          })]
        })
      }), xe.jsxs("div", {
        className: "tm-user-meta-apple",
        children: [xe.jsx("div", {
          className: "tm-user-name",
          children: (r == null ? undefined : r.name) || "你"
        }), xe.jsx("div", {
          className: "tm-apple-user-time",
          children: "剛剛"
        })]
      })]
    }) : i === "winter-snow" ? xe.jsxs("div", {
      className: "tm-user-header-winter",
      children: [xe.jsxs("div", {
        className: "tm-user-meta-winter",
        children: [xe.jsx("span", {
          className: "tm-tb-en",
          children: "PASSENGER"
        }), xe.jsxs("span", {
          className: "tm-tb-zh",
          children: ["旅客 ", xe.jsx("strong", {
            children: (r == null ? undefined : r.name) || "你"
          })]
        })]
      }), xe.jsx("div", {
        className: "tm-winter-dash"
      }), xe.jsx("div", {
        className: "tm-user-avatar",
        children: (r == null ? undefined : r.avatar) ? r.avatar.startsWith("txt:") ? xe.jsx("div", {
          style: {
            width: "100%",
            height: "100%",
            borderRadius: "inherit",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#eee",
            color: "#555",
            fontSize: "14px"
          },
          children: r.avatar.substring(4)
        }) : xe.jsx("img", {
          decoding: "async",
          src: r.avatar,
          style: {
            width: "100%",
            height: "100%",
            borderRadius: "inherit",
            objectFit: "cover"
          }
        }) : xe.jsxs("svg", {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [xe.jsx("path", {
            d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
          }), xe.jsx("circle", {
            cx: "12",
            cy: "7",
            r: "4"
          })]
        })
      })]
    }) : i === "classic" ? xe.jsx("div", {
      className: "tc-header tc-header-user",
      children: xe.jsxs("div", {
        className: "tc-avatar-area",
        children: [xe.jsx("div", {
          className: "tc-avatar-frame tc-avatar-frame-user",
          children: (r == null ? undefined : r.avatar) ? r.avatar.startsWith("txt:") ? xe.jsx("div", {
            className: "tc-avatar-img",
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#eee",
              color: "#555",
              fontSize: "14px",
              width: "100%",
              height: "100%",
              borderRadius: "inherit"
            },
            children: r.avatar.substring(4)
          }) : xe.jsx("img", {
            decoding: "async",
            src: r.avatar,
            className: "tc-avatar-img"
          }) : xe.jsxs("svg", {
            className: "tc-avatar-img",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [xe.jsx("path", {
              d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
            }), xe.jsx("circle", {
              cx: "12",
              cy: "7",
              r: "4"
            })]
          })
        }), xe.jsx("div", {
          className: "tc-avatar-badge tc-avatar-badge-user",
          children: (r == null ? undefined : r.name) || "你"
        })]
      })
    }) : xe.jsxs("div", {
      className: "tm-user-header-magazine",
      children: [xe.jsx("div", {
        className: "tm-user-avatar",
        children: (r == null ? undefined : r.avatar) ? r.avatar.startsWith("txt:") ? xe.jsx("div", {
          style: {
            width: "100%",
            height: "100%",
            borderRadius: "inherit",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#eee",
            color: "#555",
            fontSize: "14px"
          },
          children: r.avatar.substring(4)
        }) : xe.jsx("img", {
          decoding: "async",
          src: r.avatar,
          style: {
            width: "100%",
            height: "100%",
            borderRadius: "inherit",
            objectFit: "cover"
          }
        }) : xe.jsxs("svg", {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [xe.jsx("path", {
            d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
          }), xe.jsx("circle", {
            cx: "12",
            cy: "7",
            r: "4"
          })]
        })
      }), xe.jsxs("div", {
        className: "tm-user-meta",
        children: [xe.jsx("span", {
          className: "tm-user-name",
          children: (r == null ? undefined : r.name) || "你"
        }), xe.jsx("span", {
          className: "tm-user-time",
          children: "剛剛 · READER"
        })]
      })]
    });
    return xe.jsxs("div", {
      className: "tm-para tm-para-user" + (m ? " tm-selected" : ""),
      ref: Q,
      style: {
        position: "relative"
      },
      onTouchStart: ae,
      onTouchEnd: re,
      onTouchMove: re,
      onContextMenu: ie,
      onClick: u ? oe : undefined,
      children: [u && xe.jsx("div", {
        className: "tm-select-checkbox",
        children: m ? "✓" : ""
      }), t(), xe.jsx("div", {
        className: "tm-body tm-body-user",
        children: ke.map((e, t) => xe.jsx("p", {
          children: xe.jsx("span", {
            dangerouslySetInnerHTML: {
              __html: as(e)
            }
          })
        }, t))
      }), U && xe.jsxs("div", {
        className: "tm-context-menu",
        style: {
          top: H.y,
          left: H.x
        },
        children: [xe.jsx("button", {
          onClick: ce,
          children: A("tmEdit", "編輯")
        }), xe.jsx("button", {
          onClick: le,
          children: A("ctxMenuMultiSelect", "多選")
        }), d && xe.jsx("button", {
          onClick: me,
          children: e.hiddenByUser ? A("ctxMenuUnhide", "取消隱藏") : A("ctxMenuHide", "隱藏 (不入 AI 上下文)")
        }), xe.jsx("button", {
          onClick: ue,
          className: "tm-ctx-delete",
          children: A("btnDelete", "刪除")
        })]
      }), ve]
    });
  }
  return xe.jsxs("div", {
    className: "tm-para tm-para-char" + (m ? " tm-selected" : ""),
    ref: Q,
    style: {
      position: "relative"
    },
    onTouchStart: ae,
    onTouchEnd: re,
    onTouchMove: re,
    onContextMenu: ie,
    onClick: u ? oe : undefined,
    children: [u && xe.jsx("div", {
      className: "tm-select-checkbox",
      children: m ? "✓" : ""
    }), (e.thinking || e.hasThinking) && k !== false && xe.jsxs("div", {
      className: "tm-thinking-wrapper " + (D ? "is-open" : ""),
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "4px",
        marginBottom: "8px",
        maxWidth: "100%"
      },
      children: [xe.jsxs("div", {
        className: "tm-thinking-toggle",
        onClick: async t => {
          t.stopPropagation();
          const n = !D;
          if (n && !L && (e == null ? undefined : e.hasThinking) && !O) {
            F(true);
            try {
              const t = await Y.get(E(e.id));
              z((t == null ? undefined : t.content) || "(思維鏈已遺失)");
            } catch (s) {
              console.warn("[TM Thinking] fetch failed:", s);
              z("(載入失敗)");
            } finally {
              F(false);
            }
          }
          B(n);
        },
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          cursor: "pointer",
          fontSize: "12px",
          color: "var(--thinking-btn-color, #888)",
          background: "var(--thinking-btn-bg, rgba(0,0,0,0.04))",
          padding: "3px 9px",
          borderRadius: "11px",
          userSelect: "none"
        },
        children: [xe.jsx("span", {
          className: "tm-thinking-caret",
          style: {
            fontSize: "9px",
            transform: D ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.15s"
          },
          children: "▶"
        }), xe.jsx("span", {
          className: "tm-thinking-icon",
          children: "💭"
        }), xe.jsx("span", {
          className: "tm-thinking-label",
          children: D ? A("msgThinkingHide", "隱藏思維鏈") : A("msgThinkingShow", "思維鏈")
        })]
      }), D && xe.jsx("div", {
        className: "tm-thinking-panel",
        style: {
          fontSize: "13px",
          color: "var(--thinking-text-color, #555)",
          background: "var(--thinking-panel-bg, rgba(0,0,0,0.04))",
          borderLeft: "2px solid var(--thinking-panel-border, rgba(0,0,0,0.18))",
          padding: "8px 10px",
          borderRadius: "6px",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          maxWidth: "100%",
          lineHeight: 1.5
        },
        children: O ? "⏳ 載入中..." : L || "(尚未載入)"
      })]
    }), (() => {
      const r = we.length;
      const o = (n ?? t) + 1;
      const l = Array.isArray(a) && a.length >= 2;
      if (i === "apple-green") {
        const t = e.timestamp ? new Date(e.timestamp) : null;
        const n = t ? `${String(t.getMonth() + 1).padStart(2, "0")}/${String(t.getDate()).padStart(2, "0")}` : "";
        const i = t ? `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}` : "";
        return xe.jsxs(xe.Fragment, {
          children: [xe.jsxs("div", {
            className: "tm-theme-header-apple",
            children: [xe.jsx("div", {
              className: "tm-apple-avatar-section",
              children: xe.jsxs("div", {
                className: "tm-char-avatar-frame",
                children: [l ? xe.jsx("span", {
                  className: "tm-avatar-clip",
                  children: hs(a, 70, true)
                }) : (s == null ? undefined : s.image) ? xe.jsx("span", {
                  className: "tm-avatar-clip",
                  children: xe.jsx("img", {
                    decoding: "async",
                    src: s.image,
                    alt: s == null ? undefined : s.name,
                    className: "tm-char-avatar-img",
                    style: _e(s)
                  })
                }) : xe.jsx(vs, {
                  name: s == null ? undefined : s.name,
                  size: 70
                }), xe.jsx("div", {
                  className: "tm-char-avatar-badge",
                  children: l ? a.map(e => e.name).join("、") : (s == null ? undefined : s.name) || "角色"
                })]
              })
            }), xe.jsxs("div", {
              className: "tm-apple-meta-section tm-char-stats",
              children: [xe.jsx("div", {
                className: "tm-apple-meta-top",
                children: xe.jsx("div", {
                  className: "tm-stat-bubble",
                  children: "Summer Rain / Fresh"
                })
              }), xe.jsx("div", {
                className: "tm-stat-text",
                children: "雨滴落在青草坪上的味道"
              }), xe.jsx("div", {
                className: "tm-stat-text",
                children: "以及酸酸甜甜的青苹果"
              }), xe.jsxs("div", {
                className: "tm-apple-meta-bottom",
                children: [xe.jsxs("span", {
                  className: "tm-apple-meta-tag",
                  children: ["#", o]
                }), xe.jsxs("span", {
                  className: "tm-apple-meta-tag",
                  children: [r, " 字"]
                }), t && xe.jsx("span", {
                  className: "tm-apple-meta-tag",
                  children: n
                }), t && xe.jsx("span", {
                  className: "tm-apple-meta-tag",
                  children: i
                })]
              })]
            })]
          }), xe.jsx("div", {
            className: "tm-char-divider",
            children: xe.jsx("span", {
              className: "tm-char-divider-text",
              children: "ʚ 夏日青苹果日记本 ɞ"
            })
          })]
        });
      }
      if (i === "winter-snow") {
        return xe.jsxs(xe.Fragment, {
          children: [xe.jsxs("div", {
            className: "tm-theme-header-winter",
            children: [xe.jsxs("div", {
              className: "tm-winter-left",
              children: [xe.jsx("div", {
                className: "tm-winter-title-lg",
                children: "初雪駅"
              }), xe.jsx("div", {
                className: "tm-winter-title-sm",
                children: "忘れられない冬の記憶"
              }), xe.jsx("div", {
                className: "tm-winter-season",
                children: "雪"
              })]
            }), xe.jsxs("div", {
              className: "tm-winter-center",
              children: [l ? xe.jsx("span", {
                className: "tm-avatar-clip",
                children: hs(a, 90)
              }) : (s == null ? undefined : s.image) ? xe.jsx("span", {
                className: "tm-avatar-clip",
                children: xe.jsx("img", {
                  decoding: "async",
                  src: s.image,
                  alt: s == null ? undefined : s.name,
                  className: "tm-char-avatar-img",
                  style: _e(s)
                })
              }) : xe.jsx(vs, {
                name: s == null ? undefined : s.name,
                size: 90
              }), xe.jsx("div", {
                className: "tm-winter-center-dec",
                children: "- ✧ - ✧ - ✧ -"
              })]
            }), xe.jsxs("div", {
              className: "tm-winter-right",
              children: [xe.jsxs("div", {
                className: "tm-stat-row-ticket",
                children: [xe.jsx("span", {
                  children: "始发时间"
                }), " ", xe.jsx("span", {
                  children: e.timestamp ? new Date(e.timestamp).toLocaleString("zh", {
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false
                  }) : "--:--"
                })]
              }), xe.jsxs("div", {
                className: "tm-stat-row-ticket",
                children: [xe.jsx("span", {
                  children: "车次楼层"
                }), " ", xe.jsxs("span", {
                  className: "tm-ticket-sub",
                  children: ["RAILWAY NO. ", o]
                })]
              }), xe.jsxs("div", {
                className: "tm-stat-row-ticket",
                children: [xe.jsx("span", {
                  children: "耗费字数"
                }), " ", xe.jsxs("span", {
                  children: [r, " W"]
                })]
              }), xe.jsx("div", {
                className: "tm-stat-row-ticket",
                children: xe.jsx("span", {
                  children: "软席"
                })
              }), xe.jsx("div", {
                className: "tm-ticket-divider"
              }), xe.jsxs("div", {
                className: "tm-ticket-bearer",
                children: [xe.jsx("span", {
                  className: "tm-tb-en",
                  children: "PASSENGER"
                }), xe.jsxs("span", {
                  className: "tm-tb-zh",
                  children: ["持票人 ", xe.jsx("strong", {
                    children: l ? a.map(e => e.name).join("、") : (s == null ? undefined : s.name) || "你"
                  })]
                })]
              })]
            })]
          }), xe.jsx("div", {
            className: "tm-char-divider",
            children: xe.jsx("span", {
              className: "tm-char-divider-text",
              children: A("tmWinterDivider", "雪の特急列車 ❄ 乘车记录")
            })
          })]
        });
      }
      if (i === "classic") {
        const t = e.timestamp ? new Date(e.timestamp) : null;
        const n = t ? `${String(t.getFullYear())}/${String(t.getMonth() + 1).padStart(2, "0")}/${String(t.getDate()).padStart(2, "0")}` : "";
        const i = t ? `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}` : "";
        return xe.jsxs("div", {
          className: "tc-header",
          children: [xe.jsx("div", {
            className: "tc-header-deco tc-header-deco-top"
          }), xe.jsxs("div", {
            className: "tc-header-main",
            children: [xe.jsxs("div", {
              className: "tc-avatar-area",
              children: [xe.jsxs("div", {
                className: "tc-avatar-frame",
                children: [l ? xe.jsx("span", {
                  className: "tm-avatar-clip",
                  children: hs(a, 80, true)
                }) : (s == null ? undefined : s.image) ? xe.jsx("span", {
                  className: "tm-avatar-clip",
                  children: xe.jsx("img", {
                    decoding: "async",
                    src: s.image,
                    alt: s == null ? undefined : s.name,
                    className: "tc-avatar-img",
                    style: _e(s)
                  })
                }) : xe.jsx(vs, {
                  name: s == null ? undefined : s.name,
                  size: 80
                }), xe.jsx("div", {
                  className: "tc-avatar-overlay"
                })]
              }), xe.jsx("div", {
                className: "tc-avatar-badge",
                children: l ? a.map(e => e.name).join("、") : (s == null ? undefined : s.name) || "角色"
              })]
            }), xe.jsxs("div", {
              className: "tc-meta-area",
              children: [xe.jsx("div", {
                className: "tc-meta-title",
                children: l ? a.map(e => e.name).join("、") : (s == null ? undefined : s.name) || "角色"
              }), xe.jsx("div", {
                className: "tc-meta-subtitle"
              }), xe.jsx("div", {
                className: "tc-meta-extra tc-meta-extra-1"
              }), xe.jsx("div", {
                className: "tc-meta-extra tc-meta-extra-2"
              }), xe.jsxs("div", {
                className: "tc-meta-stats",
                children: [xe.jsxs("span", {
                  className: "tc-stat",
                  "data-label": "page",
                  children: ["#", o]
                }), xe.jsx("span", {
                  className: "tc-stat",
                  "data-label": "words",
                  children: r
                }), xe.jsx("span", {
                  className: "tc-stat",
                  "data-label": "date",
                  children: n
                }), xe.jsx("span", {
                  className: "tc-stat",
                  "data-label": "time",
                  children: i
                })]
              })]
            })]
          }), xe.jsx("div", {
            className: "tc-header-deco tc-header-deco-bottom"
          }), xe.jsx("div", {
            className: "tc-divider",
            children: xe.jsx("span", {
              className: "tc-divider-text"
            })
          })]
        });
      }
      {
        const t = e.timestamp ? new Date(e.timestamp) : null;
        const n = t ? t.toLocaleDateString("en-US", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric"
        }).toUpperCase() : "";
        const i = t ? `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}` : "";
        return xe.jsxs(xe.Fragment, {
          children: [xe.jsxs("div", {
            className: "tm-theme-header-magazine",
            children: [xe.jsxs("div", {
              className: "tm-magazine-top-bar",
              children: [xe.jsx("span", {
                className: "tm-mag-small",
                children: "DAILY NEWS"
              }), xe.jsx("span", {
                className: "tm-mag-small-zh",
                children: l ? a.map(e => e.name).join("、") : (s == null ? undefined : s.name) || "特別頭條專訪"
              }), n && xe.jsx("span", {
                className: "tm-mag-small",
                style: {
                  marginLeft: "auto"
                },
                children: n
              })]
            }), xe.jsx("div", {
              className: "tm-magazine-huge-title",
              children: "JOURNAL"
            }), xe.jsxs("div", {
              className: "tm-magazine-content-row",
              children: [xe.jsxs("div", {
                className: "tm-magazine-cover",
                children: [l ? xe.jsx("span", {
                  className: "tm-avatar-clip",
                  children: hs(a, 100)
                }) : (s == null ? undefined : s.image) ? xe.jsx("span", {
                  className: "tm-avatar-clip",
                  children: xe.jsx("img", {
                    decoding: "async",
                    src: s.image,
                    alt: s == null ? undefined : s.name,
                    className: "tm-char-avatar-img",
                    style: _e(s)
                  })
                }) : xe.jsx(vs, {
                  name: s == null ? undefined : s.name,
                  size: 100
                }), xe.jsxs("div", {
                  className: "tm-magazine-badge",
                  children: ["ISSUE #", o]
                })]
              }), xe.jsxs("div", {
                className: "tm-magazine-meta tm-char-stats",
                children: [xe.jsxs("div", {
                  className: "tm-stat-line",
                  children: [xe.jsx("span", {
                    className: "tm-stat-dot"
                  }), "PUBLISHED ", i && `| ${i}`]
                }), xe.jsxs("div", {
                  className: "tm-stat-line",
                  children: [xe.jsx("span", {
                    className: "tm-stat-dot"
                  }), "EXCLUSIVE EDITION"]
                }), xe.jsxs("div", {
                  className: "tm-stat-line",
                  children: ["P · PAGE #", o]
                }), xe.jsxs("div", {
                  className: "tm-stat-line",
                  children: ["W · ", r, " WORDS"]
                }), xe.jsx("div", {
                  className: "tm-stat-line",
                  children: "S · 獨家深度報導"
                })]
              })]
            })]
          }), xe.jsx("div", {
            className: "tm-char-divider",
            children: xe.jsx("span", {
              className: "tm-char-divider-text",
              children: "CHAPTER OF THE HEADLINER"
            })
          })]
        });
      }
    })(), os(we) || o && (Ee = we, Ee && typeof Ee == "string" && ls.test(Ee)) ? (() => {
      const {
        textPart: t,
        htmlPart: n,
        tailPart: s
      } = (e => {
        if (!e || typeof e != "string") {
          return {
            textPart: "",
            htmlPart: "",
            tailPart: ""
          };
        }
        const t = [/<!doctype\b/i, /<html\b/i, /<head\b/i, /<body\b/i, /<style\b/i, /<link\b[^>]*rel\s*=\s*["']?stylesheet/i];
        let n = -1;
        for (const r of t) {
          const t = e.search(r);
          if (t >= 0 && (n < 0 || t < n)) {
            n = t;
          }
        }
        if (n < 0) {
          return {
            textPart: "",
            htmlPart: e,
            tailPart: ""
          };
        }
        let s = -1;
        const a = e.match(/<\/html\s*>/i) || e.match(/<\/body\s*>/i);
        if (a) {
          s = a.index + a[0].length;
        } else {
          const t = e.lastIndexOf(">");
          s = t > n ? t + 1 : e.length;
        }
        return {
          textPart: n > 0 ? e.slice(0, n).trim() : "",
          htmlPart: e.slice(n, s),
          tailPart: s < e.length ? e.slice(s).trim() : ""
        };
      })(we);
      const a = [t, s].filter(Boolean).join("\n\n");
      const r = a ? ts(a) : [];
      return xe.jsxs(xe.Fragment, {
        children: [r.length > 0 && xe.jsx("div", {
          className: "tm-body tm-body-char",
          children: r.map((e, t) => xe.jsx("div", {
            className: Zn.test(e) ? "tm-para-block tm-quote-block" : "tm-para-block",
            children: xe.jsx("span", {
              dangerouslySetInnerHTML: {
                __html: as(e)
              }
            })
          }, t))
        }), xe.jsx(cs, {
          content: n,
          entryId: e.id,
          isGenerating: o,
          onButtonClick: C
        })]
      });
    })() : xe.jsx("div", {
      className: "tm-body tm-body-char",
      children: Ce.map((e, t) => {
        const n = t === Ce.length - 1;
        if (e.type === "collapsible") {
          return xe.jsx(ds, {
            title: e.title,
            body: e.body,
            isGenerating: o && n
          }, t);
        }
        const s = ts(e.content);
        return s.map((e, a) => xe.jsxs("div", {
          className: Zn.test(e) ? "tm-para-block tm-quote-block" : "tm-para-block",
          onClick: C ? e => {
            const t = e.target.closest("button");
            if (!t || t.disabled) {
              return;
            }
            e.stopPropagation();
            const n = t.dataset.tmValue || t.textContent.trim();
            if (n) {
              C(n);
            }
          } : undefined,
          children: [xe.jsx("span", {
            dangerouslySetInnerHTML: {
              __html: as(e)
            }
          }), o && n && a === s.length - 1 && !je && xe.jsx("span", {
            className: "tm-stream-cursor"
          })]
        }, `${t}-${a}`));
      })
    }), ((T = e.illustration) == null ? undefined : T.url) && xe.jsx("div", {
      className: "tm-cg-wrapper",
      onClick: () => j && j(e.illustration.url, e),
      children: xe.jsx(Gt, {
        src: e.illustration.url,
        cgKey: e.id,
        className: "tm-cg-image",
        alt: ""
      })
    }), w === e.id && !e.illustration && xe.jsx("div", {
      className: "tm-cg-loading",
      children: xe.jsx("div", {
        className: "tm-cg-loading-shimmer"
      })
    }), Ne.length > 0 && !G && xe.jsxs("div", {
      className: "tm-translation-section",
      children: [xe.jsxs("div", {
        className: "tm-translation-toggle",
        onClick: () => Te(e => !e),
        children: [xe.jsx("span", {
          className: "tm-translation-label",
          children: A("tmTranslation", "翻譯")
        }), xe.jsx("span", {
          className: "tm-translation-arrow " + (Ie ? "collapsed" : ""),
          children: "▾"
        })]
      }), !Ie && xe.jsx("div", {
        className: "tm-translation-body",
        children: Ne.map((e, t) => xe.jsxs("div", {
          className: Zn.test(e) ? "tm-para-block tm-quote-block" : "tm-para-block",
          children: [xe.jsx("span", {
            dangerouslySetInnerHTML: {
              __html: as(e)
            }
          }), o && t === Ne.length - 1 && xe.jsx("span", {
            className: "tm-stream-cursor"
          })]
        }, t))
      })]
    }), x && !o && !G && e.content && xe.jsx(vn, {
      entryId: e.id,
      content: we,
      isPlaying: v === e.id,
      isLoading: b === e.id,
      onPlay: y
    }), U && xe.jsxs("div", {
      className: "tm-context-menu",
      style: {
        top: H.y,
        left: H.x
      },
      children: [xe.jsx("button", {
        onClick: ce,
        children: A("tmEdit", "編輯")
      }), xe.jsx("button", {
        onClick: le,
        children: A("ctxMenuMultiSelect", "多選")
      }), d && xe.jsx("button", {
        onClick: me,
        children: e.hiddenByUser ? A("ctxMenuUnhide", "取消隱藏") : A("ctxMenuHide", "隱藏 (不入 AI 上下文)")
      }), xe.jsx("button", {
        onClick: ue,
        className: "tm-ctx-delete",
        children: A("btnDelete", "刪除")
      })]
    }), ve]
  });
  var Ee;
}, (e, t) => {
  var n;
  var s;
  var a;
  var r;
  var i;
  var o;
  var l;
  var c;
  var d;
  var u;
  var m;
  var p;
  return e.entry.id === t.entry.id && e.entry.content === t.entry.content && e.entry.role === t.entry.role && e.index === t.index && e.floorIndex === t.floorIndex && e.theme === t.theme && e.isGenerating === t.isGenerating && ((n = e.char) == null ? undefined : n.id) === ((s = t.char) == null ? undefined : s.id) && ((a = e.char) == null ? undefined : a.name) === ((r = t.char) == null ? undefined : r.name) && ((i = e.char) == null ? undefined : i.image) === ((o = t.char) == null ? undefined : o.image) && (((l = e.participants) == null ? undefined : l.length) || 0) === (((c = t.participants) == null ? undefined : c.length) || 0) && (e.participants || []).every((e, n) => {
    var s;
    const a = (s = t.participants) == null ? undefined : s[n];
    return (e == null ? undefined : e.id) === (a == null ? undefined : a.id) && (e == null ? undefined : e.image) === (a == null ? undefined : a.image) && (e == null ? undefined : e.name) === (a == null ? undefined : a.name);
  }) && ((d = e.user) == null ? undefined : d.name) === ((u = t.user) == null ? undefined : u.name) && ((m = e.user) == null ? undefined : m.avatar) === ((p = t.user) == null ? undefined : p.avatar) && e.multiSelectMode === t.multiSelectMode && e.isSelected === t.isSelected && e.noAnimations === t.noAnimations && e.tmVoiceEnabled === t.tmVoiceEnabled && e.voicePlayingId === t.voicePlayingId && e.voiceLoadingId === t.voiceLoadingId && e.autoTranslate === t.autoTranslate && e.entry.thinking === t.entry.thinking && e.entry.hasThinking === t.entry.hasThinking && e.thinkingPanelEnabled === t.thinkingPanelEnabled;
});
const vs = ({
  name: e,
  size: t = 32
}) => xe.jsx("div", {
  className: "tm-avatar-fallback",
  style: {
    width: t,
    height: t,
    fontSize: t * 0.42
  },
  children: (e == null ? undefined : e[0]) || "?"
});
const bs = ({
  theme: e,
  noAnimations: t
}) => {
  const {
    t: n
  } = I();
  if (t) {
    return xe.jsx("div", {
      className: "tm-loading-container",
      children: xe.jsx("div", {
        className: "tm-loading-text",
        children: n("tmLoadingSimple", "生成中...")
      })
    });
  } else if (e === "apple-green") {
    return xe.jsxs("div", {
      className: "tm-loading-container theme-apple",
      children: [xe.jsxs("div", {
        className: "tm-loading-apple-dots",
        children: [xe.jsx("div", {
          className: "tm-apple-dot"
        }), xe.jsx("div", {
          className: "tm-apple-dot"
        }), xe.jsx("div", {
          className: "tm-apple-dot"
        })]
      }), xe.jsx("div", {
        className: "tm-loading-text",
        children: n("tmLoadingApple", "青蘋果日記撰寫中...")
      })]
    });
  } else if (e === "winter-snow") {
    return xe.jsxs("div", {
      className: "tm-loading-container theme-winter",
      children: [xe.jsx("div", {
        className: "tm-loading-winter-spinner",
        children: xe.jsxs("svg", {
          width: "18",
          height: "18",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [xe.jsx("line", {
            x1: "12",
            y1: "2",
            x2: "12",
            y2: "22"
          }), xe.jsx("line", {
            x1: "2",
            y1: "12",
            x2: "22",
            y2: "12"
          }), xe.jsx("line", {
            x1: "4.93",
            y1: "4.93",
            x2: "19.07",
            y2: "19.07"
          }), xe.jsx("line", {
            x1: "4.93",
            y1: "19.07",
            x2: "19.07",
            y2: "4.93"
          })]
        })
      }), xe.jsx("div", {
        className: "tm-loading-text",
        children: n("tmLoadingWinter", "列車前進中...")
      })]
    });
  } else if (e === "classic") {
    return xe.jsx("div", {
      className: "tm-loading-container",
      children: xe.jsx("div", {
        className: "tm-loading-text",
        children: n("tmLoadingSimple", "生成中...")
      })
    });
  } else {
    return xe.jsx("div", {
      className: "tm-loading-container theme-magazine",
      children: xe.jsxs("div", {
        className: "tm-loading-text",
        children: ["[ RECORDING IN PROGRESS ", xe.jsx("span", {
          className: "tm-mag-blink",
          children: "_"
        }), " ]"]
      })
    });
  }
};
class Ss extends ge.Component {
  constructor(e) {
    super(e);
    this.state = {
      hasError: false,
      errorMsg: ""
    };
  }
  static getDerivedStateFromError(e) {
    return {
      hasError: true,
      errorMsg: String(e)
    };
  }
  componentDidCatch(e, t) {
    console.error("[ThisMoment] 渲染錯誤:", e, t);
  }
  componentDidUpdate(e) {
    if (this.state.hasError && this.props.isActive && !e.isActive) {
      this.setState({
        hasError: false,
        errorMsg: ""
      });
    }
  }
  render() {
    if (this.state.hasError) {
      return xe.jsx("div", {
        id: "this-moment-screen",
        className: "screen " + (this.props.isActive ? "active" : ""),
        children: xe.jsxs("div", {
          style: {
            padding: "40px 24px",
            textAlign: "center",
            color: "#888",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%"
          },
          children: [xe.jsx("p", {
            style: {
              fontSize: "16px",
              marginBottom: "12px"
            },
            children: "此時此刻載入時發生錯誤"
          }), xe.jsx("p", {
            style: {
              fontSize: "12px",
              color: "#aaa",
              marginBottom: "16px",
              wordBreak: "break-all",
              maxWidth: "80%"
            },
            children: this.state.errorMsg
          }), xe.jsx("button", {
            style: {
              padding: "8px 20px",
              borderRadius: "8px",
              border: "1px solid #555",
              background: "transparent",
              color: "#ccc",
              cursor: "pointer"
            },
            onClick: () => this.setState({
              hasError: false,
              errorMsg: ""
            }),
            children: "重試"
          })]
        })
      });
    } else {
      return this.props.children;
    }
  }
}
function ws() {
  const {
    currentScreen: e
  } = T();
  const t = e === "this-moment-screen";
  return xe.jsx(Ss, {
    isActive: t,
    children: xe.jsx(ss, {})
  });
}
export { ws as default };