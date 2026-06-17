import { r as e, j as t, b as a } from "./vendor-react-B2VXkTUV.js";
import { M as s, c as n, b as i, a as r, j as l, ca as o, G as d, y as c, B as u, a9 as m, t as h, p as g, a4 as w, A as v } from "./native-pet-CTNtZgMA.js";
import { s as p, p as x } from "./taskIntegrationService-Cie9qZr7.js";
import { G as b } from "./GiftHtmlRenderer-7nTR9M_6.js";
import { O as f, aj as y } from "./main-BO9xa-SQ.js";
import { x as j, H as N, h as k, ae as S, aV as C, ah as T, au as I, d as $, cg as L, T as D, P as A, aC as E, c7 as O, ch as R, r as M, S as z, aY as P, b4 as B, ci as U, cj as G, aK as H, J as _ } from "./vendor-lucide-DBv09HTV.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
import "./modulepreload-polyfill-YP0FEG5d.js";
/* empty css                        */
import "./vendor-supabase-Bcpm_8qV.js";
/* empty css                     */
const F = "whitedog_s_";
const W = (e, t) => `${F}${e}_${t}`;
const Y = "whitedog_history_all";
const J = "whitedog_history_all_idb";
const V = (e, t, a) => {
  try {
    localStorage.setItem(W(e, t), JSON.stringify(a));
  } catch (s) {}
};
const K = (e, t) => {
  localStorage.removeItem(W(e, t));
};
const q = e => {
  const t = [];
  for (let s = 0; s < localStorage.length; s++) {
    const n = localStorage.key(s);
    if (n == null ? undefined : n.startsWith(F + e + "_")) {
      try {
        const e = JSON.parse(localStorage.getItem(n));
        if (e && e.step && e.step !== "summary") {
          t.push(e);
        }
      } catch (a) {}
    }
  }
  return t;
};
const Q = e => Array.isArray(e) ? e.filter(e => e && typeof e == "object") : [];
const X = (...e) => {
  const t = new Map();
  e.flat().forEach(e => {
    if (!e || typeof e != "object") {
      return;
    }
    const a = String(e.id || "");
    if (!a) {
      return;
    }
    const s = t.get(a);
    if (!s) {
      t.set(a, e);
      return;
    }
    const n = Number(s.completedAt || 0);
    const i = Number(e.completedAt || 0);
    t.set(a, i >= n ? {
      ...s,
      ...e
    } : {
      ...e,
      ...s
    });
  });
  return Array.from(t.values()).sort((e, t) => (Number(t.completedAt) || 0) - (Number(e.completedAt) || 0)).slice(0, 50);
};
const Z = () => {
  try {
    return Q(JSON.parse(localStorage.getItem(Y) || "[]"));
  } catch {
    return [];
  }
};
const ee = e => {
  const t = X(Q(e));
  try {
    localStorage.setItem(Y, JSON.stringify(t));
  } catch (a) {}
  return t;
};
const te = (e, t = []) => {
  const a = Q(t);
  const s = a.findIndex(t => String(t == null ? undefined : t.id) === String(e == null ? undefined : e.id));
  let n = [];
  if (s >= 0) {
    n = [...a];
    n[s] = {
      ...n[s],
      ...e
    };
  } else {
    n = [e, ...a];
  }
  return X(n);
};
function ae() {
  const {
    currentScreen: F,
    showScreen: W
  } = n();
  const {
    characters: Y
  } = i();
  const {
    t: ae
  } = r();
  const {
    safeCurrentProfileUserId: se,
    currentProfileUser: ne
  } = l();
  const ie = F === "white-dog-screen";
  const {
    syncToCalendar: re,
    launchPomodoro: le,
    checkCompletionQueue: oe,
    sendCompletionToChat: de
  } = function (t, a) {
    const n = e.useCallback((e, a, s, n, i, r = {}) => t && (e == null ? undefined : e.length) ? p(e, a, t, s, n, i, r) : [], [t]);
    const i = e.useCallback((e, s, n, i, r, l) => {
      if (t) {
        window.dispatchEvent(new CustomEvent("launch-pomodoro", {
          detail: {
            sourceRef: {
              type: "whitedog-task",
              id: String(s),
              parentId: n,
              label: e,
              userId: t,
              charId: i || undefined,
              returnScreen: "white-dog-screen"
            },
            autoStart: true,
            workMinutes: r || undefined,
            sessions: l || undefined
          }
        }));
        a("pomodoro-screen");
      }
    }, [t, a]);
    const r = e.useCallback(async ({
      charId: e,
      charName: a,
      charAvatar: n,
      target: i,
      chatMessages: r,
      rewardData: l,
      runId: o
    }) => {
      if (!t || !e) {
        return;
      }
      const d = String(e);
      const c = Date.now();
      const u = [];
      const m = (Array.isArray(r) ? r : []).map(e => String(e || "").trim()).filter(Boolean);
      const h = m.length > 0 ? m : [`太棒了！你完成了「${i}」～`];
      h.forEach((e, t) => {
        const a = c + t * 800;
        u.push({
          id: `wd_done_msg_${c}_${t}`,
          sender: "them",
          type: "text",
          text: e,
          rawContent: e,
          timestamp: a,
          time: new Date(a).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          }),
          fromWhiteDogCompletion: true,
          wdMeta: {
            runId: o || "",
            target: i || ""
          }
        });
      });
      if (l && (l.name || l.description)) {
        const e = c + h.length * 800;
        const t = l.name || "神秘獎勵";
        u.push({
          id: `wd_done_gift_${c}`,
          sender: "them",
          text: `[送出禮物: ${t}]`,
          giftData: {
            name: t,
            image: "",
            note: l.description || "送給堅持到底的你",
            value: 0,
            isOpened: false,
            status: "sent",
            customHtml: l.giftHtml || ""
          },
          timestamp: e,
          time: new Date(e).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          }),
          fromWhiteDogCompletion: true,
          wdMeta: {
            runId: o || "",
            target: i || "",
            isPrize: true
          }
        });
      }
      try {
        await s.upsertByPair(t, d, u);
        for (const a of u) {
          window.dispatchEvent(new CustomEvent("new-message", {
            detail: {
              charId: d,
              userId: t,
              message: a
            }
          }));
        }
        const e = (h[0] || "").replace(/\[.*?\]/g, "").trim();
        if (a && e) {
          const s = h.length - 1;
          const i = l && (l.name || l.description) ? " 🎁" : "";
          const r = s > 0 ? `${e}${i} (+${s})` : `${e}${i}`;
          window.dispatchEvent(new CustomEvent("show-notification", {
            detail: {
              name: a,
              avatar: n || "",
              message: r.substring(0, 100),
              timestamp: Date.now(),
              charId: d,
              userId: t
            }
          }));
        }
      } catch (g) {
        console.warn("[WhiteDog→Chat] 完成訊息寫入失敗:", g);
      }
    }, [t]);
    return {
      syncToCalendar: n,
      launchPomodoro: i,
      checkCompletionQueue: e.useCallback(e => t ? x(t).filter(t => t.type === "whitedog-task" && t.parentId === e) : [], [t]),
      sendCompletionToChat: r
    };
  }(se, W);
  const [ce, ue] = e.useState(false);
  const [me, he] = e.useState("");
  const [ge, we] = e.useState("");
  const [ve, pe] = e.useState("hub");
  const [xe, be] = e.useState("");
  const [fe, ye] = e.useState("immediate");
  const [je, Ne] = e.useState("");
  const [ke, Se] = e.useState("");
  const [Ce, Te] = e.useState(null);
  const [Ie, $e] = e.useState(false);
  const [Le, De] = e.useState("");
  const [Ae, Ee] = e.useState([]);
  const [Oe, Re] = e.useState([]);
  const [Me, ze] = e.useState([]);
  const [Pe, Be] = e.useState([]);
  const [Ue, Ge] = e.useState([]);
  const [He, _e] = e.useState([]);
  const [Fe, We] = e.useState([]);
  const [Ye, Je] = e.useState("");
  const [Ve, Ke] = e.useState([]);
  const [qe, Qe] = e.useState(null);
  const [Xe, Ze] = e.useState([]);
  const [et, tt] = e.useState(0);
  const [at, st] = e.useState("");
  const [nt, it] = e.useState("");
  const [rt, lt] = e.useState(false);
  const [ot, dt] = e.useState(false);
  const [ct, ut] = e.useState("");
  const [mt, ht] = e.useState("");
  const [gt, wt] = e.useState(false);
  const [vt, pt] = e.useState(false);
  const [xt, bt] = e.useState([]);
  const [ft, yt] = e.useState(false);
  const [jt, Nt] = e.useState("");
  const [kt, St] = e.useState([]);
  const [Ct, Tt] = e.useState("active");
  const [It, $t] = e.useState(null);
  const [Lt, Dt] = e.useState(() => Z());
  const [At, Et] = e.useState(0);
  const [Ot, Rt] = e.useState(false);
  const [Mt, zt] = e.useState(() => localStorage.getItem("wd_voiceGen") === "true");
  const [Pt, Bt] = e.useState("");
  const Ut = e.useRef(false);
  e.useEffect(() => {
    let e = false;
    o.get("customCover").then(t => {
      if (!e && typeof t == "string") {
        Bt(t);
      }
    }).catch(e => console.warn("[WD] cover load failed:", e)).finally(() => {
      if (!e) {
        Ut.current = true;
      }
    });
    return () => {
      e = true;
    };
  }, []);
  const Gt = e.useRef(null);
  const Ht = e.useRef(Date.now());
  const _t = e.useRef(null);
  const Ft = e.useRef({});
  const Wt = e.useRef(null);
  const Yt = e.useRef(0);
  const Jt = e.useCallback(async e => {
    const t = ee(e);
    try {
      await d.set(J, t);
    } catch (a) {
      console.warn("[WhiteDog] history idb write failed:", a);
    }
  }, []);
  const Vt = e.useRef({});
  const Kt = e.useCallback(async e => {
    if (await c(ae("wdHistoryDeleteConfirm", "確定刪除這筆歷史記錄？"))) {
      Dt(t => {
        const a = t.filter(t => String(t.id) !== String(e));
        Jt(a);
        return a;
      });
    }
  }, [Jt, ae]);
  const qt = e.useCallback(e => () => {
    Vt.current[e] = Vt.current[e] || {};
    Vt.current[e].fired = false;
    Vt.current[e].timer = setTimeout(() => {
      Vt.current[e].fired = true;
      Kt(e);
    }, 600);
  }, [Kt]);
  const Qt = e.useCallback(e => () => {
    const t = Vt.current[e];
    if (t == null ? undefined : t.timer) {
      clearTimeout(t.timer);
      t.timer = null;
    }
  }, []);
  const Xt = e.useCallback(e => () => {
    const t = Vt.current[e.id];
    if (t == null ? undefined : t.fired) {
      t.fired = false;
    } else {
      $t(e);
    }
  }, []);
  const Zt = e.useCallback(async () => {
    let e = Z();
    if (se) {
      try {
        const t = Q(JSON.parse(localStorage.getItem(`whitedog_history_${se}`) || "[]"));
        e = X(e, t);
      } catch (t) {}
    }
    try {
      const t = Q(await d.get(J));
      e = X(e, t);
    } catch (a) {
      console.warn("[WhiteDog] history idb read failed:", a);
    }
    Dt(e);
    ee(e);
    try {
      await d.set(J, e);
    } catch (a) {
      console.warn("[WhiteDog] history idb resync failed:", a);
    }
  }, [se]);
  const ea = e.useCallback(() => {
    St(se ? q(se) : []);
    Zt();
    Et(e => e + 1);
  }, [se, Zt]);
  e.useEffect(() => {
    if (!ie) {
      return;
    }
    const e = localStorage.getItem("whitedog_session");
    if (e) {
      try {
        const t = JSON.parse(e);
        if (t.selectedCharId && se) {
          V(se, t.selectedCharId, t);
        }
      } catch (t) {}
      localStorage.removeItem("whitedog_session");
    }
    ea();
    pe("hub");
    if (Y.length > 0 && !ke) {
      Se(Y[0].id);
    }
  }, [ie, Y, se]);
  e.useEffect(() => {
    if (!se || !ke) {
      he("");
      we("");
      return;
    }
    (async () => {
      try {
        const e = await u.get(se, String(ke));
        he((e == null ? undefined : e.relationship) || "");
        we((e == null ? undefined : e.charToUserRelationship) || "");
      } catch {
        he("");
        we("");
      }
    })();
  }, [se, ke]);
  e.useEffect(() => {
    if (!ie || !se || !ke) {
      return;
    }
    if (ve === "hub" || ve === "input") {
      return;
    }
    const e = {
      step: ve,
      target: xe,
      targetType: fe,
      currentStatus: je,
      selectedCharId: ke,
      tasks: Ae,
      allMessages: Oe,
      allTranslations: Me,
      welcomeBackMessages: Pe,
      welcomeBackTranslations: Ue,
      stuckMessages: He,
      stuckTranslations: Fe,
      finalSummary: Ye,
      chatMessages: Ve,
      rewardData: qe,
      taskMeta: Xe,
      currentTaskIndex: et,
      charDialog: at,
      charDialogTranslation: nt,
      prizeInfo: jt,
      runId: ct,
      savedAt: Date.now()
    };
    V(se, ke, e);
  }, [ve, xe, fe, je, ke, Ae, Oe, Me, Pe, Ue, He, Fe, Ye, Ve, qe, et, at, nt, jt, ct, ie, se]);
  e.useEffect(() => {
    if (!ie || ve !== "execution" || !ct) {
      return;
    }
    const e = oe(ct);
    if (e.length > 0) {
      e.sort((e, t) => Number(e.taskIndex) - Number(t.taskIndex)).forEach(e => {
        if (Number(e.taskIndex) === et) {
          ma();
        }
      });
    }
  }, [ie, ve]);
  e.useEffect(() => {
    if (ve === "execution" && ie) {
      Ht.current = Date.now();
      dt(false);
      _t.current = setInterval(() => {
        if (Date.now() - Ht.current >= 180000) {
          dt(true);
          clearInterval(_t.current);
          _t.current = null;
        }
      }, 30000);
      return () => {
        if (_t.current) {
          clearInterval(_t.current);
          _t.current = null;
        }
      };
    }
    if (_t.current) {
      clearInterval(_t.current);
      _t.current = null;
    }
  }, [ve, et, ie]);
  e.useEffect(() => {
    localStorage.setItem("wd_voiceGen", Mt ? "true" : "false");
  }, [Mt]);
  e.useEffect(() => {
    if (Ut.current) {
      (async () => {
        try {
          if (Pt) {
            await o.set("customCover", Pt);
          } else {
            await o.remove("customCover");
          }
        } catch (e) {
          console.warn("[WD] cover save failed:", e);
        }
      })();
    }
  }, [Pt]);
  const ta = e.useCallback(async e => {
    if (!e) {
      return;
    }
    const t = ++Yt.current;
    const a = Y.find(e => String(e.id) === String(ke));
    if (a) {
      try {
        const s = Wt.current || (await m());
        Wt.current = s;
        const n = await u.get(se, String(a.id)).catch(() => null);
        if (t !== Yt.current) {
          return;
        }
        const i = n == null ? undefined : n.voiceLanguage;
        const r = i && i !== "auto" ? i : (n == null ? undefined : n.autoTranslate) && (n == null ? undefined : n.charLanguage) || localStorage.getItem("language") || "zh";
        const l = (n == null ? undefined : n.voiceProvider) || (a == null ? undefined : a.voiceProvider) || "minimax";
        const o = (n == null ? undefined : n.sovitsApiVersion) || (a == null ? undefined : a.sovitsApiVersion) || "v2";
        let d = "";
        d = l === "elevenlabs" ? (n == null ? undefined : n.elevenVoiceId) || (a == null ? undefined : a.elevenVoiceId) || "" : l === "gptsovits" ? o === "gsvi" ? (n == null ? undefined : n.sovitsGsviVoice) || (a == null ? undefined : a.sovitsGsviVoice) || "" : (n == null ? undefined : n.sovitsRefAudioPath) || (a == null ? undefined : a.sovitsRefAudioPath) || "" : (n == null ? undefined : n.minimaxTimbreId) || (a == null ? undefined : a.minimaxTimbreId) || "";
        const c = await h(e, {
          apiSettings: s,
          voiceProvider: l,
          voiceId: d,
          sovitsRefText: (n == null ? undefined : n.sovitsRefText) || (a == null ? undefined : a.sovitsRefText) || "",
          sovitsGptPath: (n == null ? undefined : n.sovitsGptPath) || (a == null ? undefined : a.sovitsGptPath) || "",
          sovitsSovitsPath: (n == null ? undefined : n.sovitsSovitsPath) || (a == null ? undefined : a.sovitsSovitsPath) || "",
          sovitsApiVersion: o,
          sovitsGsviVoice: o === "gsvi" ? d : undefined,
          sovitsGsviModel: (n == null ? undefined : n.sovitsGsviModel) || (a == null ? undefined : a.sovitsGsviModel) || "",
          sovitsGsviLang: (n == null ? undefined : n.sovitsGsviLang) || (a == null ? undefined : a.sovitsGsviLang) || "",
          sovitsGsviEmotion: (n == null ? undefined : n.sovitsGsviEmotion) || (a == null ? undefined : a.sovitsGsviEmotion) || "",
          language: r,
          speed: (n == null ? undefined : n.voiceSpeed) ?? 1
        });
        if (t !== Yt.current || !(c == null ? undefined : c.audioBlob)) {
          return;
        }
        const w = URL.createObjectURL(c.audioBlob);
        const v = new Audio(w);
        v.onended = () => URL.revokeObjectURL(w);
        g(v, {
          safetyTimeoutMs: 30000
        });
      } catch (s) {
        console.warn("[WD TTS] error:", s);
      }
    }
  }, [Y, ke, se]);
  e.useEffect(() => {
    if (Mt && at && ve === "execution") {
      ta(at);
    }
  }, [at, Mt, ve, ta]);
  e.useEffect(() => {
    if (!Mt || !ot || ve !== "execution") {
      return;
    }
    const e = He[et];
    if (e) {
      ta(e);
    }
  }, [ot, Mt, ve, et, He, ta]);
  e.useEffect(() => {
    if (Mt && jt && ve === "summary") {
      ta(jt);
    }
  }, [jt, Mt, ve, ta]);
  const aa = () => Y.find(e => String(e.id) === String(ke));
  const sa = e.useCallback(() => (ne == null ? undefined : ne.name) || "User", [ne]);
  const na = e.useCallback(() => {
    const e = [];
    const t = ne;
    if (!t) {
      return "";
    }
    const a = t.name || "User";
    e.push(`[User Info] Name: ${a}`);
    if (t.gender) {
      e.push(`Gender: ${t.gender}`);
    }
    const s = t.intro || t.signature || "";
    if (s) {
      e.push(`Bio: ${s}`);
    }
    if (Array.isArray(t.hobbies) && t.hobbies.length) {
      e.push(`Hobbies: ${t.hobbies.join("、")}`);
    }
    if (me || ge) {
      const t = [];
      if (me) {
        t.push(`${a}→{charName}: ${me}`);
      }
      if (ge) {
        t.push(`{charName}→${a}: ${ge}`);
      }
      e.push(`[Relationship] ${t.join(" | ")}`);
    }
    return e.join("\n");
  }, [ne, me, ge]);
  const ia = e.useCallback(e => {
    const t = sa();
    const a = na().replace(/{charName}/g, e.name);
    return "\nYou are now {charName}. Your personality and character settings:\n{charPersona}\n\n{userContext}\n\nYou are accompanying {userName} to complete a task in your own personal way.\nYou are NOT an AI assistant, NOT a task manager, NOT a productivity guru. You ARE {charName}.\nYour tone, the way you break down steps, and how you encourage — everything must feel like a real friend sitting right next to them.\n\nStrict rules:\n- NEVER use generic encouragement like \"You can do it!\" or \"I believe in you!\" or \"Keep going!\"\n- NEVER use task-list style language (\"Step 1... Step 2...\")\n- Every sentence must carry your unique personal style and emotion\n- Feel free to insert small things unrelated to the task but fitting your personality (gaming, snacking, chatting, etc.)\n".replace("{charPersona}", e.prompt || "").replace("{userContext}", a).replace(/{charName}/g, e.name).replace(/{userName}/g, t);
  }, [sa, na]);
  const ra = e.useCallback(async (e, t) => {
    if (!e) {
      return "";
    }
    const a = `${e}__${t}`;
    if (Ft.current[a]) {
      return Ft.current[a];
    }
    try {
      const s = Wt.current || (await m());
      Wt.current = s;
      if (!(s == null ? undefined : s.mainApiKey)) {
        return "";
      }
      const n = await w({
        messages: [{
          role: "system",
          content: `You are re-expressing a character's line in ${t}. This is NOT literal translation — rewrite the text as if the character naturally speaks ${t}, keeping their personality, tone, and speech style intact. Output ONLY the rewritten text, nothing else.`
        }, {
          role: "user",
          content: e
        }],
        settings: s,
        preferStreaming: false
      });
      const i = (n == null ? undefined : n.trim()) || "";
      if (i) {
        Ft.current[a] = i;
      }
      return i;
    } catch {
      return "";
    }
  }, []);
  const la = e.useCallback(async () => {
    const e = aa();
    if (!e || !se) {
      return {
        hasTranslate: false,
        charLanguage: "Japanese",
        userLanguage: "Traditional Chinese"
      };
    }
    try {
      const t = await u.get(se, String(e.id));
      return {
        hasTranslate: !!(t == null ? undefined : t.autoTranslate),
        charLanguage: (t == null ? undefined : t.charLanguage) || "Japanese",
        userLanguage: f(t == null ? undefined : t.userLanguage)
      };
    } catch {
      return {
        hasTranslate: false,
        charLanguage: "Japanese",
        userLanguage: y()
      };
    }
  }, [ke, se, Y]);
  const oa = (e, t) => {
    if (e) {
      return `\nAll output must be written in "${t}". Output the original only, do not append any translation in parentheses.`;
    }
    const a = localStorage.getItem("language") || "zh_cn";
    if (a === "zh_cn") {
      return "\n所有输出必须使用「简体中文」书写。请只使用简体字，不要使用任何繁体字（例如要写\"这\"不写\"這\"，写\"说\"不写\"說\"，写\"现在\"不写\"現在\"）。";
    } else if (a === "zh") {
      return "\n所有輸出必須使用「繁體中文」書寫。請只使用繁體字，不要使用任何簡體字（例如要寫「這」不寫「这」，寫「說」不寫「说」，寫「現在」不寫「现在」）。";
    } else {
      return "\nAll output must be written in English. Do not use Chinese, Japanese, or any other language.";
    }
  };
  const da = () => {
    Ee([]);
    Re([]);
    ze([]);
    Be([]);
    Ge([]);
    _e([]);
    We([]);
    Je("");
    Ke([]);
    Qe(null);
    tt(0);
    st("");
    it("");
    Nt("");
    lt(false);
    dt(false);
    ut("");
    bt([]);
    ht("");
    wt(false);
    yt(false);
  };
  const ca = (e, t, a = "") => {
    const s = sa();
    const n = fe === "immediate" ? "immediate short-term goal" : "long-term goal";
    const i = je.trim() ? fe === "immediate" ? `${s}'s current state: "${je}" (this is their starting point before taking action — your steps should naturally flow from this state).` : `${s}'s current progress/foundation: "${je}". Your steps should build from this starting point — do not repeat things already done.` : "";
    const r = fe !== "immediate";
    const l = r ? "6-15 items — break into actionable phases, each phase should be achievable in 1-2 weeks" : "3-6 items";
    const o = r ? "\nFor EACH task, also provide metadata in \"taskMeta\" array (same order as tasks):\n  \"taskMeta\": [{\"minutes\": estimated focus minutes per session (15-60), \"sessions\": recommended pomodoro sessions (1-4), \"frequency\": \"once\"|\"daily\"|\"weekly\", \"usePomodoro\": true/false}]\n  Think carefully: learning/study tasks need daily practice with pomodoro; research tasks might be once; physical tasks don't need pomodoro.\n  For a multi-month goal, the first few steps should be foundational daily habits, middle steps build skills, final steps are milestones." : "";
    return `${s} wants to accomplish: "${xe}" (${n}).\n${i}\n${a}\n\nBreak this down into ${r ? "detailed, actionable phases" : "a few steps"} in YOUR own personal way.\n\nImportant — you are ${e.name}, NOT a task manager:\n- Steps should reflect your personal style. E.g., if you love gaming, you might add "play a round with me first"; if you love food, you might insert "grab some snacks to munch on while doing this"\n- Transitions between steps should feel natural, like a real friend guiding them through it step by step\n- The encouragement for each step should be what you'd actually say sitting right next to them — not generic AI phrases like "You can do it!"\n- You may insert 1 step unrelated to the task itself but fitting your relationship with ${s}\n\nReply in JSON format only. No other text or markdown:\n\n{\n  "tasks": ["step description, with your personal style, ${l}"],\n  "messages": ["what you'd say for each step, like real conversation, 1-3 sentences. Count MUST match tasks"],\n  "welcomeBack": ["what you'd say if ${s} left mid-step and came back later. One per step. Count MUST match tasks"],\n  "stuckMessages": ["what you'd say if ${s} has been stuck on a step for a long time. One per step, gentle and pressure-free. Count MUST match tasks"],\n  "summary": "Ceremonial LETTER content shown on the in-app stationery card (sealed-letter aesthetic). 1-2 sentences ONLY. Formal-ceremonial register, like a brief sign-off note. Tone: reflective, finishing-touch. Example feel: '终于肯放过自己了？这一仗辛苦你了。' — short, peaky, restrained.",\n  "chatMessages": "An ARRAY of 3-5 SHORT casual chat bubbles (NOT a letter) ${s} will receive in chat AFTER completing. EACH element is one message bubble — like real-time texting, not a single block. Style rules — TOTALLY DIFFERENT from 'summary' above: ① casual chat tone (not ceremonial), short bursts, fragmentary, can include mid-thought breaks; ② each bubble 8-30 characters of target language, NOT long sentences; ③ texting feel — natural reactions, side comments, in-character quirks, asking how they feel, mentioning what they're up to right now, hinting at the gift you sent. Example shape (do NOT copy literally): ['终于啊', '我看你最后那一步差点放弃', '不过你撑下来了 ←这个我要记住', '诶送了你点东西，看一下', '别说不喜欢哦']. Each element MUST be a different angle — do not repeat the summary, do not repeat each other.",\n  "reward": {\n    "emoji": "ONE emoji that LITERALLY depicts reward.name. BAD: choosing '🌃' (city night) for an eye mask. GOOD: '😴' (sleeping face) or '🛏️' (bed) for an eye mask. BAD: '✨' (sparkles) for cake. GOOD: '🍰' for cake. Pick the most direct, concrete depiction.",\n    "name": "reward name (something you'd actually give, 2-6 chars)",\n    "description": "reward description, specific and fun, 1-2 sentences",\n    "giftHtml": "Self-contained HTML+inline-CSS that DRAWS the gift item as a recognizable illustrated object using PURE CSS shapes. STRICT RULES:\\n① OUTER element MUST set width:280px;height:200px;position:relative; content MUST NOT overflow.\\n② Inline CSS only — NO <style>, NO <script>, NO external CSS.\\n③ NO <img decoding="async">, NO <svg>, NO url(), NO background-image:url(). Pure CSS shapes only.\\n④ ⛔ ABSOLUTELY NO EMOJI, NO UNICODE PICTOGRAPHS as visual centerpiece. Do NOT use 😴 🎬 🍰 💐 🧸 etc. as the picture. Latin/CJK text labels are fine (e.g. 'TICKET' watermark, store name); pictograph emoji as the object itself is BANNED.\\n⑤ COMPOSE the object from multiple absolutely-positioned <div>s. Use border-radius (including asymmetric like '50% 50% 20% 20%'), linear-gradient, radial-gradient, box-shadow (inset for depth, regular for lift), border for outlines. Layer details: outline → fill → highlights → shadows.\\n⑥ Concrete structural recipes — Eye mask: a wide horizontal capsule (border-radius 50%) as the band, two darker oval inner cups (left + right), a thin strap line on top extending out the sides; very dark navy/purple gradient on band, contrast cups. Movie ticket: rectangular paper card with light cream gradient, dashed vertical line dividing main + stub, large 'TICKET' or 'CINEMA' text, small dotted perforation circles along divider, red/burgundy accent bar at top. Cake: 2-3 stacked rounded rectangles (layers, each smaller and rotated 0deg) with cream-color top layer and chocolate bottom; 2-3 thin vertical lines as candles with small flame circles at top; a few drip shapes along edges. Bouquet: cone-shaped wrapper at bottom (clip-path or rotated trapezoid via border-radius), 5-7 round flower discs (different pastel colors) clustered above, thin green stem hints between. Book: rectangle with thick spine (left 18px darker stripe), title text band horizontally centered, subtle page edges (right side 3-4px lighter stripes). Plushie: rounded body (oval), two small rounded ear bumps on top, two black dot eyes, a curved mouth via border-bottom; warm beige/brown gradient.\\n⑦ Add depth: at least 2 of {gradient, box-shadow, inset shadow, layered borders} per shape. Include reward.name or short Latin label as a small caption under the object (font-size:11-13px, letter-spacing).\\n⑧ Background of the 280×200 area should be a soft thematic gradient (not the object itself).\\n⑨ Output as ONE single-line JSON string with all quotes escaped properly."\n  }${o}\n}\n${t}`;
  };
  const ua = async (e, t, a) => {
    var s;
    let n = null;
    try {
      const t = e.match(/\{[\s\S]*\}/);
      if (t) {
        n = JSON.parse(t[0]);
      }
    } catch (p) {
      console.error("JSON parse error:", p);
    }
    const i = ((s = n == null ? undefined : n.tasks) == null ? undefined : s.filter(e => e == null ? undefined : e.trim())) || [];
    const r = (n == null ? undefined : n.messages) || [];
    const l = (n == null ? undefined : n.welcomeBack) || [];
    const o = (n == null ? undefined : n.stuckMessages) || [];
    const d = (n == null ? undefined : n.summary) || "";
    const c = Array.isArray(n == null ? undefined : n.chatMessages) ? n.chatMessages.map(e => String(e || "").trim()).filter(Boolean) : (n == null ? undefined : n.chatLetter) ? [String(n.chatLetter)] : [];
    const u = (n == null ? undefined : n.reward) || null;
    const m = (n == null ? undefined : n.taskMeta) || [];
    if (i.length === 0) {
      v(ae("wdDecomposeError"));
      pe("status");
      return false;
    }
    let h = [];
    let g = [];
    let w = [];
    if (t) {
      try {
        const e = [...r, ...l, ...o];
        const t = await Promise.all(e.map(e => ra(e, a)));
        const s = r.length;
        const n = l.length;
        h = t.slice(0, s);
        g = t.slice(s, s + n);
        w = t.slice(s + n);
      } catch {
        h = r.map(() => "");
        g = l.map(() => "");
        w = o.map(() => "");
      }
    }
    Ee(i);
    Re(r);
    ze(h);
    Be(l);
    Ge(g);
    _e(o);
    We(w);
    Je(d);
    Ke(c);
    Qe(u);
    Ze(m);
    tt(0);
    st(r[0] || "");
    it(h[0] || "");
    lt(false);
    dt(false);
    return true;
  };
  const ma = () => {
    lt(false);
    dt(false);
    bt([]);
    wt(false);
    ht("");
    Ht.current = Date.now();
    const e = et + 1;
    if (e < Ae.length) {
      tt(e);
      st(Oe[e] || "");
      it(Me[e] || "");
    } else {
      const e = ct || Date.now().toString();
      if (!ct) {
        ut(e);
      }
      const t = aa();
      const a = {
        id: e,
        target: xe,
        targetType: fe,
        tasks: [...Ae],
        charId: ke,
        charName: (t == null ? undefined : t.name) || "",
        charAvatar: (t == null ? undefined : t.image) || (t == null ? undefined : t.avatar) || "",
        summary: Ye,
        rewardData: qe,
        completedAt: Date.now()
      };
      Dt(e => {
        const t = te(a, e);
        Jt(t);
        return t;
      });
      if (ke) {
        const t = aa();
        const a = Ve && Ve.length > 0 ? Ve : [Ye || `太棒了！你完成了「${xe}」～`];
        de({
          charId: ke,
          charName: (t == null ? undefined : t.name) || "",
          charAvatar: (t == null ? undefined : t.image) || (t == null ? undefined : t.avatar) || "",
          target: xe,
          chatMessages: a,
          rewardData: qe,
          runId: e
        });
      }
      Nt(Ye);
      pe("summary");
    }
  };
  const ha = async () => {
    const e = mt.trim();
    if (!e || vt) {
      return;
    }
    ht("");
    pt(true);
    bt(t => [...t, {
      sender: "user",
      text: e
    }]);
    const t = aa();
    if (!t) {
      pt(false);
      return;
    }
    const {
      hasTranslate: a,
      charLanguage: s,
      userLanguage: n
    } = await la();
    const i = oa(a, s);
    const r = Ae[et] || "";
    const l = sa();
    const o = `You are accompanying ${l} who is working on "${xe}".\nCurrently on step ${et + 1}/${Ae.length}: "${r}".\n${l} just said to you: "${e}"\n\nRespond naturally in character. 1-3 sentences. Do not mention step numbers.\n${i}`;
    const d = ia(t);
    try {
      Wt.current = Wt.current || (await m());
      const e = await w({
        messages: [{
          role: "system",
          content: d
        }, {
          role: "user",
          content: o
        }],
        preferStreaming: false
      });
      const t = (e == null ? undefined : e.trim()) || "";
      let s = "";
      if (a && t) {
        s = await ra(t, n);
      }
      bt(e => [...e, {
        sender: "char",
        text: t || "...",
        translation: s
      }]);
      if (Mt && t) {
        ta(t);
      }
    } catch (c) {
      console.error("Chat error:", c);
      bt(e => [...e, {
        sender: "char",
        text: "..."
      }]);
    }
    pt(false);
  };
  const ga = () => {
    const e = se;
    const t = ke;
    const a = aa();
    const s = xe;
    const n = fe;
    const i = [...Ae];
    const r = jt;
    const l = qe;
    const o = {
      id: ct || Date.now().toString(),
      target: s,
      targetType: n,
      tasks: i,
      charId: t,
      charName: (a == null ? undefined : a.name) || "",
      charAvatar: (a == null ? undefined : a.image) || (a == null ? undefined : a.avatar) || "",
      summary: r,
      rewardData: l,
      completedAt: Date.now()
    };
    Dt(e => {
      const t = te(o, e);
      Jt(t);
      return t;
    });
    if (e) {
      K(e, t);
      St(q(e));
    }
    da();
    Et(e => e + 1);
    pe("hub");
    be("");
    Ne("");
  };
  const wa = aa();
  const va = e.useCallback(e => Y.find(t => String(t.id) === String(e)), [Y]);
  const pa = e.useMemo(() => kt.filter(e => e.step === "execution" || e.step === "status" || e.step === "loading").map(e => ({
    ...e,
    char: va(e.selectedCharId)
  })).filter(e => e.char).sort((e, t) => (t.savedAt || 0) - (e.savedAt || 0)), [kt, va]);
  const xa = ot && He[et] || "";
  const ba = ot && Fe[et] || "";
  return t.jsxs("div", {
    id: "white-dog-screen",
    className: "screen whitedog-app-container " + (ie ? "active" : ""),
    children: [t.jsxs("div", {
      className: `whitedog-immersive-bg block-step-${ve}`,
      children: [(ve === "execution" || ve === "loading" || ve === "summary") && ((wa == null ? undefined : wa.image) || (wa == null ? undefined : wa.avatar)) && t.jsx("div", {
        className: "wd-character-aura",
        style: {
          backgroundImage: `url(${wa.image || wa.avatar})`
        }
      }), t.jsxs("div", {
        className: "wd-floating-particles",
        children: [t.jsx("div", {
          className: "wd-particle p1"
        }), t.jsx("div", {
          className: "wd-particle p2"
        }), t.jsx("div", {
          className: "wd-particle p3"
        })]
      })]
    }), t.jsxs("div", {
      className: "whitedog-topbar",
      children: [t.jsx("button", {
        className: "whitedog-icon-btn back",
        onClick: () => {
          if (ve === "hub") {
            W("home-screen");
          } else if (ve === "input") {
            pe("hub");
            ea();
          } else if (ve === "status") {
            pe("input");
          } else if (ve === "summary") {
            ga();
          } else {
            pe("hub");
            ea();
          }
        },
        children: t.jsx(j, {
          size: 28
        })
      }), ve === "execution" ? t.jsxs("div", {
        className: "wd-progress-cute-header",
        children: [t.jsx(N, {
          size: 14,
          className: "wd-progress-icon"
        }), t.jsxs("span", {
          className: "wd-progress-text-cute",
          children: [ae("wdProgressLabel"), " · ", et + 1, " / ", Ae.length]
        }), t.jsx("div", {
          className: "wd-progress-track-cute",
          children: t.jsx("div", {
            className: "wd-progress-fill-cute",
            style: {
              width: (et + 1) / ((Ae == null ? undefined : Ae.length) || 1) * 100 + "%"
            }
          })
        })]
      }) : t.jsx("div", {
        className: "whitedog-topbar-title",
        children: ae(ve === "hub" ? "homeAppWhiteDog" : ve === "input" ? "wdTitle" : "wdTitleAccompanying")
      }), t.jsxs("div", {
        className: "whitedog-topbar-right",
        children: [ve === "hub" && t.jsx("button", {
          className: "whitedog-icon-btn",
          onClick: () => Rt(!Ot),
          children: t.jsx(k, {
            size: 22
          })
        }), ve === "execution" && t.jsx("button", {
          className: "whitedog-icon-btn",
          onClick: () => {
            pe("hub");
            ea();
          },
          children: t.jsx(S, {
            size: 22
          })
        })]
      })]
    }), Ot && t.jsx("div", {
      className: "wd-settings-overlay",
      onClick: () => Rt(false),
      children: t.jsxs("div", {
        className: "wd-settings-panel",
        onClick: e => e.stopPropagation(),
        children: [t.jsx("div", {
          className: "wd-settings-title",
          children: ae("wdSettingsTitle")
        }), t.jsxs("div", {
          className: "wd-settings-item",
          children: [t.jsx("div", {
            className: "wd-settings-label",
            children: ae("wdSettingsCover")
          }), t.jsxs("div", {
            className: "wd-settings-cover-row",
            children: [Pt ? t.jsx("div", {
              className: "wd-settings-cover-preview",
              style: {
                backgroundImage: `url(${Pt})`
              }
            }) : t.jsx("div", {
              className: "wd-settings-cover-empty",
              children: ae("wdSettingsCoverDefault")
            }), t.jsxs("div", {
              className: "wd-settings-cover-actions",
              children: [t.jsxs("button", {
                className: "wd-settings-btn",
                onClick: () => {
                  var e;
                  if ((e = Gt.current) == null) {
                    return undefined;
                  } else {
                    return e.click();
                  }
                },
                children: [t.jsx(C, {
                  size: 14
                }), " ", ae("wdSettingsCoverUpload")]
              }), Pt && t.jsx("button", {
                className: "wd-settings-btn wd-settings-btn-danger",
                onClick: () => Bt(""),
                children: ae("wdSettingsCoverReset")
              })]
            }), t.jsx("input", {
              ref: Gt,
              type: "file",
              accept: "image/*",
              style: {
                display: "none"
              },
              onChange: e => {
                var t;
                const a = (t = e.target.files) == null ? undefined : t[0];
                if (!a) {
                  return;
                }
                e.target.value = "";
                if (a.type === "image/gif") {
                  const e = new FileReader();
                  e.onload = e => Bt(e.target.result);
                  e.readAsDataURL(a);
                  return;
                }
                const s = a.type === "image/png";
                const n = new Image();
                n.onload = () => {
                  const e = 800;
                  let t = n.width;
                  let a = n.height;
                  if (t > e || a > e) {
                    const s = Math.min(e / t, e / a);
                    t = Math.round(t * s);
                    a = Math.round(a * s);
                  }
                  const i = document.createElement("canvas");
                  i.width = t;
                  i.height = a;
                  i.getContext("2d").drawImage(n, 0, 0, t, a);
                  const r = s ? i.toDataURL("image/png") : i.toDataURL("image/jpeg", 0.75);
                  URL.revokeObjectURL(n.src);
                  Bt(r);
                };
                n.onerror = () => URL.revokeObjectURL(n.src);
                n.src = URL.createObjectURL(a);
              }
            })]
          })]
        }), t.jsxs("div", {
          className: "wd-settings-item",
          children: [t.jsx("div", {
            className: "wd-settings-label",
            children: ae("wdSettingsVoice")
          }), t.jsx("p", {
            className: "wd-settings-hint",
            children: ae("wdSettingsVoiceHint")
          }), t.jsxs("button", {
            className: "wd-settings-toggle " + (Mt ? "active" : ""),
            onClick: () => zt(!Mt),
            children: [Mt ? t.jsx(T, {
              size: 16
            }) : t.jsx(I, {
              size: 16
            }), t.jsx("span", {
              children: ae(Mt ? "wdSettingsVoiceOn" : "wdSettingsVoiceOff")
            })]
          })]
        })]
      })
    }), t.jsxs("div", {
      className: "whitedog-main-content",
      children: [ve === "hub" && t.jsxs("div", {
        className: "whitedog-view whitedog-hub-view",
        children: [t.jsxs("div", {
          className: "wd-hub-tabs",
          children: [t.jsxs("button", {
            className: "wd-hub-tab " + (Ct === "active" ? "active" : ""),
            onClick: () => {
              Tt("active");
              $t(null);
            },
            children: [t.jsx($, {
              size: 14
            }), " ", ae("wdHubTabActive")]
          }), t.jsxs("button", {
            className: "wd-hub-tab " + (Ct === "history" ? "active" : ""),
            onClick: () => {
              Tt("history");
              $t(null);
            },
            children: [t.jsx(L, {
              size: 14
            }), " ", ae("wdHubTabHistory")]
          })]
        }), Ct === "active" && t.jsxs(t.Fragment, {
          children: [pa.length > 0 && t.jsxs("div", {
            className: "wd-hub-section",
            children: [t.jsx("div", {
              className: "wd-hub-section-label",
              children: ae("wdHubActiveLabel")
            }), pa.map(e => {
              var a;
              var s;
              var n;
              var i;
              return t.jsxs("div", {
                className: "wd-hub-session-card",
                onClick: () => (e => {
                  be(e.target);
                  ye(e.targetType);
                  Ne(e.currentStatus || "");
                  Se(e.selectedCharId);
                  Ee(e.tasks || []);
                  Re(e.allMessages || []);
                  ze(e.allTranslations || []);
                  Be(e.welcomeBackMessages || []);
                  Ge(e.welcomeBackTranslations || []);
                  _e(e.stuckMessages || []);
                  We(e.stuckTranslations || []);
                  const t = Array.isArray(e.chatMessages) ? e.chatMessages : e.chatLetter ? [e.chatLetter] : [];
                  Je(e.finalSummary || "");
                  Ke(t);
                  Qe(e.rewardData || null);
                  Ze(e.taskMeta || []);
                  tt(e.currentTaskIndex || 0);
                  Nt(e.prizeInfo || "");
                  ut(e.runId || "");
                  bt([]);
                  ht("");
                  wt(false);
                  yt(false);
                  dt(false);
                  const a = e.currentTaskIndex || 0;
                  const s = e.welcomeBackMessages || [];
                  const n = e.welcomeBackTranslations || [];
                  if (s[a]) {
                    st(s[a]);
                    it(n[a] || "");
                    lt(true);
                  } else {
                    st(e.charDialog || (e.allMessages || [])[a] || "");
                    it(e.charDialogTranslation || (e.allTranslations || [])[a] || "");
                    lt(false);
                  }
                  pe(e.step);
                })(e),
                children: [t.jsx("div", {
                  className: "wd-hub-session-avatar",
                  style: {
                    backgroundImage: `url(${((a = e.char) == null ? undefined : a.image) || ((s = e.char) == null ? undefined : s.avatar)})`
                  }
                }), t.jsxs("div", {
                  className: "wd-hub-session-info",
                  children: [t.jsx("div", {
                    className: "wd-hub-session-char",
                    children: (n = e.char) == null ? undefined : n.name
                  }), t.jsx("div", {
                    className: "wd-hub-session-target",
                    children: e.target
                  }), t.jsx("div", {
                    className: "wd-hub-session-progress",
                    children: ((i = e.tasks) == null ? undefined : i.length) > 0 ? `${(e.currentTaskIndex || 0) + 1} / ${e.tasks.length}` : "..."
                  })]
                }), t.jsxs("div", {
                  className: "wd-hub-session-actions",
                  children: [t.jsx("button", {
                    className: "wd-hub-resume-btn",
                    children: t.jsx($, {
                      size: 16
                    })
                  }), t.jsx("button", {
                    className: "wd-hub-delete-btn",
                    onClick: t => ((e, t) => {
                      e.stopPropagation();
                      if (se) {
                        K(se, t.selectedCharId);
                        ea();
                      }
                    })(t, e),
                    children: t.jsx(D, {
                      size: 14
                    })
                  })]
                })]
              }, e.selectedCharId);
            })]
          }), t.jsxs("button", {
            className: "wd-hub-new-btn",
            onClick: () => {
              be("");
              Ne("");
              da();
              if (Y.length > 0 && !ke) {
                Se(Y[0].id);
              }
              pe("input");
            },
            children: [t.jsx(A, {
              size: 20
            }), t.jsx("span", {
              children: ae("wdHubNewBtn")
            })]
          })]
        }), Ct === "history" && (() => {
          var e;
          const a = Lt;
          return t.jsx("div", {
            className: "wd-hub-section",
            children: It ? t.jsxs("div", {
              className: "wd-history-detail",
              children: [t.jsxs("button", {
                className: "wd-history-back-btn",
                onClick: () => $t(null),
                children: [t.jsx(j, {
                  size: 16
                }), " ", ae("wdHistoryBackToList")]
              }), t.jsxs("div", {
                className: "wd-history-detail-header",
                children: [t.jsx("div", {
                  className: "wd-hub-session-avatar",
                  style: {
                    backgroundImage: `url(${It.charAvatar})`
                  }
                }), t.jsxs("div", {
                  children: [t.jsx("div", {
                    className: "wd-hub-session-char",
                    children: It.charName
                  }), t.jsx("div", {
                    className: "wd-history-date",
                    children: new Date(It.completedAt).toLocaleDateString()
                  })]
                })]
              }), t.jsx("div", {
                className: "wd-history-detail-target",
                children: It.target
              }), t.jsx("div", {
                className: "wd-history-steps-list",
                children: (e = It.tasks) == null ? undefined : e.map((e, a) => t.jsxs("div", {
                  className: "wd-history-step-item",
                  children: [t.jsx("div", {
                    className: "wd-history-step-check",
                    children: "✓"
                  }), t.jsx("span", {
                    children: e
                  })]
                }, a))
              }), It.summary && t.jsxs("div", {
                className: "wd-history-letter",
                children: [t.jsx("div", {
                  className: "wd-history-letter-from",
                  children: ae("wdLetterFrom", {
                    name: It.charName
                  })
                }), t.jsx("div", {
                  className: "wd-history-letter-body",
                  children: It.summary
                })]
              }), It.rewardData && t.jsxs("div", {
                className: "wd-history-reward-detail",
                children: [It.rewardData.giftHtml ? t.jsx("div", {
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "8px"
                  },
                  children: t.jsx("div", {
                    style: {
                      width: "280px",
                      height: "200px",
                      borderRadius: "14px",
                      overflow: "hidden"
                    },
                    children: t.jsx(b, {
                      html: It.rewardData.giftHtml,
                      mode: "fixed"
                    })
                  })
                }) : t.jsx("div", {
                  style: {
                    width: "180px",
                    height: "110px",
                    margin: "0 auto 8px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #fce7f3 0%, #fde68a 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#92400e",
                    fontSize: "13px",
                    letterSpacing: "2px",
                    boxShadow: "inset 0 -2px 8px rgba(0,0,0,0.05)"
                  },
                  children: "GIFT"
                }), t.jsx("div", {
                  className: "wd-reward-name",
                  children: It.rewardData.name
                }), t.jsx("div", {
                  className: "wd-reward-desc",
                  children: It.rewardData.description
                })]
              })]
            }) : a.length === 0 ? t.jsx("div", {
              className: "wd-hub-empty",
              children: ae("wdHistoryEmpty")
            }) : a.map(e => {
              var a;
              return t.jsxs("div", {
                className: "wd-hub-session-card wd-history-card",
                onClick: Xt(e),
                onMouseDown: qt(e.id),
                onMouseUp: Qt(e.id),
                onMouseLeave: Qt(e.id),
                onTouchStart: qt(e.id),
                onTouchEnd: Qt(e.id),
                onTouchMove: Qt(e.id),
                onContextMenu: t => {
                  t.preventDefault();
                  Kt(e.id);
                },
                style: {
                  userSelect: "none"
                },
                children: [t.jsx("div", {
                  className: "wd-hub-session-avatar",
                  style: {
                    backgroundImage: `url(${e.charAvatar})`
                  }
                }), t.jsxs("div", {
                  className: "wd-hub-session-info",
                  children: [t.jsx("div", {
                    className: "wd-hub-session-char",
                    children: e.charName
                  }), t.jsx("div", {
                    className: "wd-hub-session-target",
                    children: e.target
                  }), t.jsxs("div", {
                    className: "wd-hub-session-progress wd-history-date",
                    children: [new Date(e.completedAt).toLocaleDateString(), " · ", ((a = e.tasks) == null ? undefined : a.length) || 0, " ", ae("wdHistorySteps")]
                  })]
                }), e.rewardData && (e.rewardData.giftHtml ? t.jsx("div", {
                  className: "wd-history-reward-badge",
                  style: {
                    width: "70px",
                    height: "50px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
                    background: "#fff",
                    flexShrink: 0,
                    pointerEvents: "none"
                  },
                  children: t.jsx(b, {
                    html: e.rewardData.giftHtml,
                    mode: "fit"
                  })
                }) : t.jsx("div", {
                  className: "wd-history-reward-badge",
                  style: {
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, #fce7f3 0%, #fde68a 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#92400e",
                    flexShrink: 0
                  },
                  children: t.jsx(E, {
                    size: 16,
                    strokeWidth: 1.8
                  })
                }))]
              }, e.id);
            })
          });
        })()]
      }), ve === "input" && t.jsxs("div", {
        className: "whitedog-view whitedog-input-view",
        children: [t.jsx("div", {
          className: "wd-target-hero-area",
          children: t.jsxs("div", {
            className: "wd-hero-char-picker",
            onClick: () => $e(true),
            children: [t.jsx("div", {
              className: "wd-hero-picker-bg",
              style: {
                backgroundImage: `url(${(wa == null ? undefined : wa.image) || (wa == null ? undefined : wa.avatar)})`
              },
              children: t.jsx("div", {
                className: "wd-picker-overlay",
                children: t.jsx(S, {
                  size: 24
                })
              })
            }), t.jsxs("div", {
              className: "wd-hero-picker-text",
              children: [t.jsx("span", {
                children: ae("wdCharPickerWith", {
                  name: (wa == null ? undefined : wa.name) || "..."
                })
              }), t.jsx("small", {
                children: ae("wdCharPickerChange")
              })]
            })]
          })
        }), t.jsxs("div", {
          className: "wd-card-gentle wd-target-card",
          children: [t.jsx("label", {
            className: "wd-label-soft",
            children: ae("wdTargetLabel")
          }), t.jsxs("div", {
            className: "wd-segment-control",
            children: [t.jsxs("button", {
              className: "wd-segment-btn-soft " + (fe === "immediate" ? "active" : ""),
              onClick: () => ye("immediate"),
              children: [t.jsx(O, {
                size: 16
              }), " ", ae("wdTypeImmediate")]
            }), t.jsxs("button", {
              className: "wd-segment-btn-soft " + (fe === "longterm" ? "active" : ""),
              onClick: () => ye("longterm"),
              children: [t.jsx(R, {
                size: 18
              }), " ", ae("wdTypeLongterm")]
            })]
          }), t.jsx("textarea", {
            className: "wd-target-textarea-soft",
            placeholder: ae(fe === "immediate" ? "wdImmediatePlaceholder" : "wdLongtermPlaceholder"),
            value: xe,
            onChange: e => be(e.target.value)
          })]
        }), t.jsx("div", {
          className: "wd-spacer"
        }), t.jsxs("button", {
          className: "wd-submit-btn-soft",
          disabled: !xe.trim() || !ke,
          onClick: () => {
            if (xe.trim() && ke) {
              if (!ct) {
                ut(Date.now().toString());
              }
              Ne("");
              pe("status");
            }
          },
          children: [t.jsx(M, {
            size: 18
          }), t.jsx("span", {
            children: ae("wdStartBtn")
          })]
        })]
      }), ve === "status" && t.jsxs("div", {
        className: "whitedog-view whitedog-status-view",
        children: [t.jsxs("div", {
          className: "wd-status-char-peek",
          children: [t.jsx("div", {
            className: "wd-status-char-avatar",
            style: {
              backgroundImage: `url(${(wa == null ? undefined : wa.image) || (wa == null ? undefined : wa.avatar)})`
            }
          }), t.jsx("div", {
            className: "wd-status-char-bubble",
            children: ae(fe === "immediate" ? "wdStatusImmediateQuestion" : "wdStatusLongtermQuestion")
          })]
        }), t.jsxs("div", {
          className: "wd-card-gentle wd-status-card",
          children: [t.jsx("label", {
            className: "wd-label-soft wd-status-label",
            children: ae(fe === "immediate" ? "wdStatusImmediateLabel" : "wdStatusLongtermLabel")
          }), t.jsx("p", {
            className: "wd-status-hint",
            children: ae(fe === "immediate" ? "wdStatusImmediateHint" : "wdStatusLongtermHint")
          }), t.jsx("textarea", {
            className: "wd-target-textarea-soft wd-status-textarea",
            placeholder: ae(fe === "immediate" ? "wdStatusImmediatePlaceholder" : "wdStatusLongtermPlaceholder"),
            value: je,
            onChange: e => Ne(e.target.value),
            autoFocus: true
          })]
        }), t.jsx("div", {
          className: "wd-spacer"
        }), t.jsxs("div", {
          className: "wd-status-actions",
          children: [t.jsx("button", {
            className: "wd-back-soft-btn",
            onClick: () => pe("input"),
            children: ae("wdBackBtn")
          }), t.jsxs("button", {
            className: "wd-submit-btn-soft",
            onClick: async () => {
              pe("loading");
              const e = aa();
              if (!e) {
                pe("status");
                return;
              }
              const {
                hasTranslate: t,
                charLanguage: a,
                userLanguage: s
              } = await la();
              const n = oa(t, a);
              const i = ca(e, n);
              const r = ia(e);
              let l = null;
              try {
                Wt.current = await m();
                l = await w({
                  messages: [{
                    role: "system",
                    content: r
                  }, {
                    role: "user",
                    content: i
                  }],
                  preferStreaming: false
                });
              } catch (o) {
                console.error("AI Error:", o);
              }
              if (!l) {
                v(ae("wdAiError"));
                pe("status");
                return;
              }
              if (await ua(l, t, s)) {
                pe("execution");
              }
            },
            children: [t.jsx(N, {
              size: 16
            }), t.jsx("span", {
              children: ae("wdGoBtn")
            })]
          })]
        })]
      }), ve === "loading" && t.jsxs("div", {
        className: "whitedog-view whitedog-loading-view-soft",
        children: [t.jsx("div", {
          className: "wd-heart-spinner",
          children: t.jsx(N, {
            size: 40,
            className: "wd-heart-pulse"
          })
        }), t.jsx("h3", {
          className: "wd-loading-title-soft",
          children: ae("wdLoadingTitle")
        }), t.jsx("p", {
          className: "wd-loading-desc-soft",
          children: wa ? ae("wdLoadingDesc", {
            name: wa.name
          }) : ae("wdLoadingDescNoChar")
        })]
      }), ve === "execution" && t.jsxs("div", {
        className: "whitedog-view whitedog-execution-view-soft",
        children: [t.jsx("div", {
          className: "wd-hero-banner-pure",
          style: {
            backgroundImage: `url(${Pt || (wa == null ? undefined : wa.image) || (wa == null ? undefined : wa.avatar)})`
          }
        }), t.jsxs("div", {
          className: "wd-love-memo-card",
          children: [t.jsx("div", {
            className: "wd-memo-pin"
          }), t.jsxs("div", {
            className: "wd-memo-content",
            children: [t.jsx("div", {
              className: "wd-memo-subtitle",
              children: ae("wdFocusSubtitle")
            }), t.jsx("h2", {
              className: "wd-memo-task-title",
              children: Ae[et]
            })]
          }), t.jsxs("div", {
            className: "wd-memo-divider-restored",
            children: [t.jsx("div", {
              className: "wd-divider-line"
            }), t.jsx(z, {
              size: 16,
              className: "wd-divider-icon"
            }), t.jsx("div", {
              className: "wd-divider-line"
            })]
          }), t.jsxs("div", {
            className: "wd-memo-companion-restored",
            children: [t.jsx("div", {
              className: "wd-memo-avatar-restored",
              style: {
                backgroundImage: `url(${(wa == null ? undefined : wa.image) || (wa == null ? undefined : wa.avatar)})`
              }
            }), t.jsxs("div", {
              className: "wd-memo-dialog-restored",
              children: [t.jsxs("div", {
                className: "wd-whisper-text",
                children: [at, nt && t.jsxs("div", {
                  className: "wd-dialog-translation",
                  children: ["(", nt, ")"]
                })]
              }), rt && t.jsx("button", {
                className: "wd-welcome-back-dismiss",
                onClick: () => {
                  lt(false);
                  st(Oe[et] || "");
                  it(Me[et] || "");
                },
                children: ae("wdGotItBtn")
              })]
            })]
          }), xa && t.jsxs("div", {
            className: "wd-memo-companion-restored wd-stuck-area",
            children: [t.jsx("div", {
              className: "wd-memo-avatar-restored",
              style: {
                backgroundImage: `url(${(wa == null ? undefined : wa.image) || (wa == null ? undefined : wa.avatar)})`
              }
            }), t.jsxs("div", {
              className: "wd-memo-dialog-restored",
              children: [t.jsxs("div", {
                className: "wd-whisper-text wd-stuck-text",
                children: [xa, ba && t.jsxs("div", {
                  className: "wd-dialog-translation",
                  children: ["(", ba, ")"]
                })]
              }), t.jsx("button", {
                className: "wd-welcome-back-dismiss",
                onClick: () => {
                  dt(false);
                },
                children: ae("wdGotItBtn")
              })]
            })]
          }), xt.length > 0 && t.jsx("div", {
            className: "wd-chat-history-area",
            children: xt.map((e, a) => e.sender === "user" ? t.jsx("div", {
              className: "wd-chat-bubble-user",
              children: t.jsx("div", {
                className: "wd-chat-bubble-user-text",
                children: e.text
              })
            }, a) : t.jsxs("div", {
              className: "wd-memo-companion-restored wd-chat-reply-row",
              children: [t.jsx("div", {
                className: "wd-memo-avatar-restored",
                style: {
                  backgroundImage: `url(${(wa == null ? undefined : wa.image) || (wa == null ? undefined : wa.avatar)})`
                }
              }), t.jsx("div", {
                className: "wd-memo-dialog-restored",
                children: t.jsxs("div", {
                  className: "wd-whisper-text wd-chat-reply-text",
                  children: [e.text, e.translation && t.jsxs("div", {
                    className: "wd-dialog-translation",
                    children: ["(", e.translation, ")"]
                  })]
                })
              })]
            }, a))
          })]
        }, `task-${et}`), t.jsxs("div", {
          className: "wd-action-area-cute",
          children: [gt && t.jsxs("div", {
            className: "wd-chat-input-area",
            children: [t.jsx("input", {
              type: "text",
              className: "wd-chat-input",
              placeholder: ae("wdChatPlaceholder"),
              value: mt,
              onChange: e => ht(e.target.value),
              onKeyDown: e => {
                if (e.key === "Enter") {
                  ha();
                }
              },
              disabled: vt,
              autoFocus: true
            }), t.jsx("button", {
              className: "wd-chat-send-btn",
              onClick: ha,
              disabled: !mt.trim() || vt,
              children: vt ? t.jsx(S, {
                size: 16,
                className: "wd-spin"
              }) : t.jsx(P, {
                size: 16
              })
            })]
          }), t.jsxs("div", {
            className: "wd-action-buttons-row",
            children: [t.jsx("button", {
              className: "wd-chat-toggle-btn",
              onClick: () => wt(!gt),
              children: t.jsx(B, {
                size: 20
              })
            }), t.jsx("button", {
              className: "wd-chat-toggle-btn",
              onClick: async () => {
                if (ft) {
                  return;
                }
                if (!(await c(ae("wdRedecomposeConfirm")))) {
                  return;
                }
                yt(true);
                const e = aa();
                if (!e) {
                  yt(false);
                  return;
                }
                const {
                  hasTranslate: t,
                  charLanguage: a,
                  userLanguage: s
                } = await la();
                const n = oa(t, a);
                const i = Ae.slice(0, et).join("、");
                const r = Ae[et] || "";
                const l = sa();
                const o = ca(e, n, `${l} has already completed these steps: "${i || "not started yet"}".\nCurrently stuck on: "${r}".\nPlease re-split the remaining steps from ${l}'s current position. Do not repeat already completed parts.`);
                const d = ia(e);
                try {
                  Wt.current = Wt.current || (await m());
                  const e = await w({
                    messages: [{
                      role: "system",
                      content: d
                    }, {
                      role: "user",
                      content: o
                    }],
                    preferStreaming: false
                  });
                  if (e) {
                    await ua(e, t, s);
                  } else {
                    v(ae("wdAiError"));
                  }
                } catch (u) {
                  console.error("Redecompose error:", u);
                  v(ae("wdAiError"));
                }
                yt(false);
              },
              disabled: ft,
              title: ae("wdRedecomposeBtn"),
              children: ft ? t.jsx(S, {
                size: 18,
                className: "wd-spin"
              }) : t.jsx(U, {
                size: 18
              })
            }), t.jsx("button", {
              className: "wd-chat-toggle-btn",
              onClick: () => {
                const e = Xe[et];
                le(Ae[et], et, ct, ke, e == null ? undefined : e.minutes, e == null ? undefined : e.sessions);
              },
              title: ae("wdFocusWithPomodoro"),
              style: {
                fontSize: "18px"
              },
              children: "🍅"
            }), t.jsxs("button", {
              className: "wd-love-finish-btn",
              onClick: ma,
              children: [t.jsx(N, {
                size: 22,
                className: "wd-heart-beat",
                fill: "currentColor"
              }), t.jsx("span", {
                children: ae("wdCompleteBtn")
              })]
            })]
          })]
        })]
      }), ve === "summary" && t.jsxs("div", {
        className: "whitedog-view whitedog-summary-view-soft",
        children: [t.jsx("div", {
          className: "wd-celebration-burst",
          children: ["🌸", "✨", "💖", "🎉", "🌸", "✨", "💖"].map((e, a) => t.jsx("div", {
            className: `wd-falling-item wd-fall-${a}`,
            children: e
          }, a))
        }), t.jsxs("div", {
          className: "wd-summary-elegant-header",
          children: [t.jsx("div", {
            className: "wd-elegant-icon-group",
            children: t.jsx(G, {
              size: 36,
              className: "wd-elegant-mail-icon",
              strokeWidth: 1
            })
          }), t.jsx("h1", {
            className: "wd-elegant-title",
            children: ae("wdSummaryTitle")
          }), t.jsx("p", {
            className: "wd-elegant-subtitle",
            children: ae("wdSummarySubtitle")
          })]
        }), t.jsxs("div", {
          className: "wd-stationery-letter-premium",
          children: [t.jsx(H, {
            size: 24,
            className: "wd-letter-corner top-left",
            strokeWidth: 1
          }), t.jsx(H, {
            size: 24,
            className: "wd-letter-corner top-right",
            strokeWidth: 1
          }), t.jsx(H, {
            size: 24,
            className: "wd-letter-corner bottom-left",
            strokeWidth: 1
          }), t.jsx(H, {
            size: 24,
            className: "wd-letter-corner bottom-right",
            strokeWidth: 1
          }), t.jsx("div", {
            className: "wd-wax-seal-organic",
            children: t.jsx("div", {
              className: "wd-wax-seal-avatar-inner",
              style: {
                backgroundImage: `url(${(wa == null ? undefined : wa.image) || (wa == null ? undefined : wa.avatar)})`
              }
            })
          }), t.jsxs("div", {
            className: "wd-stationery-inner",
            children: [t.jsxs("div", {
              className: "wd-stationery-header-elegant",
              children: [t.jsx("span", {
                className: "wd-stamp-line"
              }), t.jsx("span", {
                children: ae("wdLetterFrom", {
                  name: wa == null ? undefined : wa.name
                })
              }), t.jsx("span", {
                className: "wd-stamp-line"
              })]
            }), t.jsx("div", {
              className: "wd-stationery-body-text",
              children: jt
            })]
          })]
        }), qe && t.jsxs("div", {
          className: "wd-reward-showcase",
          children: [qe.giftHtml ? t.jsx("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              marginBottom: "8px"
            },
            children: t.jsx("div", {
              style: {
                width: "280px",
                height: "200px",
                borderRadius: "14px",
                overflow: "hidden"
              },
              children: t.jsx(b, {
                html: qe.giftHtml,
                mode: "fixed"
              })
            })
          }) : t.jsx("div", {
            style: {
              width: "180px",
              height: "110px",
              margin: "0 auto 8px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #fce7f3 0%, #fde68a 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#92400e",
              fontSize: "13px",
              letterSpacing: "2px",
              boxShadow: "inset 0 -2px 8px rgba(0,0,0,0.05)"
            },
            children: "GIFT"
          }), t.jsx("div", {
            className: "wd-reward-showcase-name",
            children: qe.name
          }), t.jsx("div", {
            className: "wd-reward-showcase-desc",
            children: qe.description
          })]
        }), t.jsx("div", {
          className: "wd-spacer"
        }), fe === "longterm" && !ce && t.jsxs("button", {
          className: "wd-submit-btn-soft",
          onClick: () => {
            const e = Y.find(e => String(e.id) === String(ke));
            c(ae("wdSyncCalendarConfirm"), ae("wdSyncCalendarSpreadDays"), ae("wdSyncCalendarAllToday")).then(t => {
              re(Ae, ct, ke, (e == null ? undefined : e.name) || "", (e == null ? undefined : e.image) || (e == null ? undefined : e.avatar) || "", {
                spreadDays: t,
                taskMeta: Xe
              });
              ue(true);
              v(ae("wdSyncCalendarDone"));
            });
          },
          style: {
            marginBottom: "12px"
          },
          children: [t.jsx(R, {
            size: 18
          }), t.jsx("span", {
            children: ae("wdSyncToCalendar")
          })]
        }), ce && t.jsxs("div", {
          style: {
            textAlign: "center",
            fontSize: "13px",
            color: "rgba(255,255,255,0.5)",
            marginBottom: "12px"
          },
          children: ["✅ ", ae("wdSyncCalendarDone")]
        }), t.jsxs("button", {
          className: "wd-submit-btn-soft wd-btn-collect",
          onClick: ga,
          children: [t.jsx(M, {
            size: 18
          }), t.jsx("span", {
            children: ae("wdCollectBtn")
          })]
        })]
      })]
    }), Ie && (() => {
      const e = Y.filter(e => e.type !== "npc" && e.id !== "user");
      const s = Y.filter(e => e.type === "npc");
      const n = s.filter(e => !e.boundTo || e.boundTo.length === 0);
      const i = Le.trim().toLowerCase();
      let r;
      r = i ? Y.filter(e => e.id !== "user" && e.name.toLowerCase().includes(i)).map(e => t.jsxs("div", {
        className: "wd-avatar-node-soft " + (ke === e.id ? "active" : ""),
        onClick: () => {
          Se(e.id);
          $e(false);
        },
        children: [t.jsx("div", {
          className: "wd-avatar-bg",
          style: {
            backgroundImage: `url(${e.image || e.avatar})`
          }
        }), t.jsx("span", {
          children: e.name
        }), e.type === "npc" && t.jsx("div", {
          className: "wd-npc-badge",
          children: "NPC"
        })]
      }, e.id)) : t.jsxs(a.Fragment, {
        children: [e.map(e => {
          const n = s.filter(t => {
            var a;
            if ((a = t.boundTo) == null) {
              return undefined;
            } else {
              return a.includes(e.id);
            }
          });
          const i = n.length > 0;
          const r = Ce === e.id;
          return t.jsxs(a.Fragment, {
            children: [t.jsxs("div", {
              className: "wd-avatar-node-soft " + (ke === e.id ? "active" : ""),
              onClick: () => {
                Se(e.id);
                $e(false);
              },
              children: [t.jsx("div", {
                className: "wd-avatar-bg",
                style: {
                  backgroundImage: `url(${e.image || e.avatar})`
                }
              }), t.jsx("span", {
                children: e.name
              }), i && t.jsx("div", {
                className: "wd-expand-npc-wrapper",
                onClick: t => {
                  t.stopPropagation();
                  Te(r ? null : e.id);
                },
                children: t.jsxs("div", {
                  className: "wd-expand-npc-pill",
                  children: ["NPC ", t.jsx(_, {
                    size: 12,
                    className: r ? "rotated" : ""
                  })]
                })
              })]
            }), r && n.map(e => t.jsxs("div", {
              className: "wd-avatar-node-soft npc-node " + (ke === e.id ? "active" : ""),
              onClick: () => {
                Se(e.id);
                $e(false);
              },
              children: [t.jsx("div", {
                className: "wd-avatar-bg npc-bg",
                style: {
                  backgroundImage: `url(${e.image || e.avatar})`
                }
              }), t.jsx("span", {
                children: e.name
              }), t.jsx("div", {
                className: "wd-npc-badge",
                children: "NPC"
              })]
            }, e.id))]
          }, e.id);
        }), n.length > 0 && t.jsxs(a.Fragment, {
          children: [t.jsxs("div", {
            className: "wd-avatar-node-soft wd-unbound-group-node " + (Ce === "unbound" ? "active" : ""),
            onClick: () => Te(Ce === "unbound" ? null : "unbound"),
            children: [t.jsx("div", {
              className: "wd-avatar-bg unbound-bg",
              children: t.jsx("div", {
                className: "wd-unbound-icon",
                children: t.jsx(_, {
                  size: 20,
                  className: Ce === "unbound" ? "rotated" : ""
                })
              })
            }), t.jsx("span", {
              children: ae("wdOtherNpc")
            })]
          }), Ce === "unbound" && n.map(e => t.jsxs("div", {
            className: "wd-avatar-node-soft npc-node " + (ke === e.id ? "active" : ""),
            onClick: () => {
              Se(e.id);
              $e(false);
            },
            children: [t.jsx("div", {
              className: "wd-avatar-bg npc-bg",
              style: {
                backgroundImage: `url(${e.image || e.avatar})`
              }
            }), t.jsx("span", {
              children: e.name
            }), t.jsx("div", {
              className: "wd-npc-badge",
              children: "NPC"
            })]
          }, e.id))]
        })]
      });
      return t.jsx("div", {
        className: "wd-char-modal-overlay",
        onClick: () => $e(false),
        children: t.jsxs("div", {
          className: "wd-char-modal-content",
          onClick: e => e.stopPropagation(),
          children: [t.jsxs("div", {
            className: "wd-char-modal-header",
            children: [t.jsx("h3", {
              children: ae("wdModalTitle")
            }), t.jsx("input", {
              type: "text",
              className: "wd-char-search",
              placeholder: ae("wdModalSearch"),
              value: Le,
              onChange: e => De(e.target.value)
            })]
          }), t.jsx("div", {
            className: "wd-char-modal-body",
            children: t.jsx("div", {
              className: "wd-char-picker-grid",
              children: (Array.isArray(r) ? r.length === 0 : !r) && i ? t.jsx("div", {
                className: "wd-no-results",
                style: {
                  width: "100%",
                  textAlign: "center",
                  color: "#999",
                  marginTop: 20
                },
                children: ae("wdModalNoResults")
              }) : r
            })
          })]
        })
      });
    })()]
  });
}
export { ae as default };