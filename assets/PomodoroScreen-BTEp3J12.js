const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["./assets/main-BO9xa-SQ.js", "./assets/modulepreload-polyfill-YP0FEG5d.js", "./assets/native-pet-CTNtZgMA.js", "./assets/vendor-react-B2VXkTUV.js", "./assets/vendor-dexie-KLdnSHz2.js", "./assets/vendor-jszip-DU-5YDGO.js", "./assets/vendor-lucide-DBv09HTV.js", "./assets/native-pet-D9YoqRtr.css", "./assets/vendor-supabase-Bcpm_8qV.js", "./assets/main-C4gkqfD0.css", "./assets/NotificationBar-y-kP9VHv.css", "./assets/vendor-fonts-BglBY6By.css"]) => i.map(i => d[i]);
import { bo as e, M as t, ap as o, aq as r, a9 as n, bp as a, V as i, a4 as s, c as l, a as d, j as c, bq as p, b as u, _ as g, G as m, aM as h, O as x, B as f, br as b, bs as y, bt as v, t as S, o as w, v as k, ah as j, bu as I, aj as C, bh as $, h as R, I as A } from "./native-pet-CTNtZgMA.js";
import { r as z, j as T } from "./vendor-react-B2VXkTUV.js";
import { N, O as E, P as D, Q as P, R as B, S as F, T as M } from "./main-BO9xa-SQ.js";
import { isWorkerConfigured as _, syncAlarms as L, syncContext as O } from "./workerSyncService-Bi45Y3S-.js";
import { isPushSubscribed as W } from "./pushSubscriptionManager-BzPwLmDo.js";
import { g as U } from "./imageGenWorldBook-BtUaGdHO.js";
import { c as Y, a as G } from "./taskIntegrationService-Cie9qZr7.js";
import { isNativeAlarmEnv as V, rescheduleNativeAlarms as H, consumePastAlarms as J } from "./nativeAlarmScheduler-IH1BZ8wl.js";
import { x as K, k as q, at as X, h as Q, X as Z, q as ee, aq as te, P as oe, T as re, J as ne, ae, M as ie, ah as se, au as le, c as de, d as ce } from "./vendor-lucide-DBv09HTV.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
import "./modulepreload-polyfill-YP0FEG5d.js";
/* empty css                        */
import "./vendor-supabase-Bcpm_8qV.js";
/* empty css                     */
const pe = (e, t) => {
  const o = String((e == null ? undefined : e.label) || "").trim();
  if (o) {
    return `${o} 的時間到了，我來提醒你。`;
  } else {
    return `到時間了。${t ? `我是 ${t}，` : ""}該看一下你的鬧鐘了。`;
  }
};
const ue = () => {
  var ue;
  const {
    currentScreen: ge,
    showScreen: me
  } = l();
  const he = ge === "pomodoro-screen";
  const {
    t: xe
  } = d();
  const {
    safeCurrentProfileUserId: fe,
    currentProfileUser: be
  } = c();
  const {
    activeChatIds: ye
  } = p();
  const {
    characters: ve
  } = u();
  const Se = (ye || []).map(e => ve.find(t => String(t.id) === String(e))).filter(Boolean);
  const [we, ke] = z.useState(Se.length > 0 ? Se[0].id : null);
  const je = Se.find(e => String(e.id) === String(we)) || Se[0];
  const {
    consumeLaunchData: Ie,
    recordSession: Ce,
    completeLinkedTask: $e,
    logToCalendar: Re,
    clearSourceRef: Ae,
    getReturnScreen: ze
  } = function (n) {
    const a = z.useRef(null);
    const i = z.useRef(null);
    const s = z.useRef(false);
    z.useEffect(() => {
      const e = e => {
        const {
          sourceRef: t,
          autoStart: o,
          workMinutes: r,
          sessions: n
        } = e.detail || {};
        if (t) {
          a.current = t;
          i.current = {
            ...t,
            _workMinutes: r,
            _sessions: n
          };
          s.current = !!o;
        }
      };
      window.addEventListener("launch-pomodoro", e);
      return () => window.removeEventListener("launch-pomodoro", e);
    }, []);
    const l = z.useCallback(() => {
      const e = i.current;
      if (!e) {
        return null;
      }
      i.current = null;
      const t = s.current;
      s.current = false;
      return {
        taskName: e.label || "",
        charId: e.charId || null,
        autoStart: t,
        workMinutes: e._workMinutes || null,
        sessions: e._sessions || null
      };
    }, []);
    const d = z.useCallback(async ({
      charId: o,
      taskName: r,
      startedAt: i,
      workDuration: s,
      totalSessions: l,
      completedSessions: d,
      aborted: c = false,
      elapsedSec: p,
      chatNoteText: u
    }) => {
      if (!n) {
        return null;
      }
      const g = {
        id: `pomo_${Date.now()}`,
        userId: n,
        charId: o || "",
        taskName: r || "",
        startedAt: i,
        completedAt: Date.now(),
        workDuration: s,
        totalSessions: l,
        completedSessions: d,
        aborted: c,
        elapsedSec: c ? Number(p) || 0 : s * d,
        sourceRef: a.current || null
      };
      try {
        await e.add(g);
      } catch (m) {
        console.warn("[PomodoroIntegration] 記錄 session 失敗:", m);
      }
      if (o && u) {
        const e = Date.now();
        const a = {
          id: `pomo_note_${e}`,
          sender: "system",
          type: "mode_switch",
          text: u,
          rawContent: u,
          timestamp: e,
          time: new Date(e).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          }),
          fromPomodoroSession: true,
          pomoMeta: {
            taskName: r || "",
            totalSessions: l,
            completedSessions: d,
            aborted: c,
            workMinutes: Math.round((s || 0) / 60),
            elapsedMinutes: Math.round((g.elapsedSec || 0) / 60)
          }
        };
        try {
          await t.upsertByPair(n, o, [a]);
          window.dispatchEvent(new CustomEvent("new-message", {
            detail: {
              charId: String(o),
              userId: n,
              message: a
            }
          }));
        } catch (m) {
          console.warn("[PomodoroIntegration] 注入番茄鐘聊天訊息失敗:", m);
        }
      }
      return g;
    }, [n]);
    const c = z.useCallback((e = true) => {
      const t = a.current;
      if (t && e) {
        if (t.userId && t.userId !== n) {
          console.warn("[PomodoroIntegration] userId 不匹配，拒絕回寫");
        } else if (t.type === "calendar-todo") {
          Y(t.id, n);
        } else if (t.type === "whitedog-task") {
          G({
            type: "whitedog-task",
            parentId: t.parentId,
            taskIndex: t.id,
            userId: n
          });
        }
      }
    }, [n]);
    const p = z.useCallback(({
      taskName: e,
      charName: t,
      totalSessions: a,
      completedSessions: i,
      startTimeStr: s,
      endTimeStr: l,
      sessionId: d,
      startedAt: c
    }) => {
      if (!n) {
        return;
      }
      if (localStorage.getItem("pomo_logToCalendar") !== "true") {
        return;
      }
      const p = c ? new Date(c) : new Date();
      const u = `${p.getFullYear()}-${String(p.getMonth() + 1).padStart(2, "0")}-${String(p.getDate()).padStart(2, "0")}`;
      const g = {
        id: Date.now(),
        title: `🍅 ${e || "專注"}`,
        date: u,
        startTime: s || "",
        endTime: l || "",
        location: "",
        note: `${i}/${a} sessions${t ? ` with ${t}` : ""}`,
        type: "user",
        characterId: null,
        characterName: "",
        characterAvatar: "",
        participants: [],
        icon: "🍅",
        bgColor: "#FFF0F0",
        accentColor: "#FF6B6B",
        createdAt: Date.now(),
        sourceRef: {
          type: "pomodoro-session",
          id: d || `pomo_${Date.now()}`
        }
      };
      const m = `calendar_events_user_${n}`;
      const h = o(m) || [];
      r(m, [...h, g]);
      window.dispatchEvent(new CustomEvent("calendar-data-updated"));
    }, [n]);
    const u = z.useCallback(() => {
      a.current = null;
      i.current = null;
    }, []);
    const g = z.useCallback(() => {
      var e;
      return ((e = a.current) == null ? undefined : e.returnScreen) || null;
    }, []);
    return {
      sourceRefRef: a,
      consumeLaunchData: l,
      recordSession: d,
      completeLinkedTask: c,
      logToCalendar: p,
      clearSourceRef: u,
      getReturnScreen: g
    };
  }(fe);
  const Te = z.useRef(0);
  const Ne = z.useRef(0);
  const [Ee, De] = z.useState("pomodoro");
  const [Pe, Be] = z.useState(() => {
    try {
      const e = localStorage.getItem("nuojiji_alarms");
      if (e) {
        return JSON.parse(e);
      } else {
        return [];
      }
    } catch {
      return [];
    }
  });
  z.useEffect(() => {
    try {
      localStorage.setItem("nuojiji_alarms", JSON.stringify(Pe));
    } catch (e) {}
  }, [Pe]);
  z.useEffect(() => {
    const e = () => {
      try {
        const e = localStorage.getItem("nuojiji_alarms");
        if (e) {
          Be(JSON.parse(e));
        }
      } catch {}
    };
    window.addEventListener("alarms-updated-externally", e);
    return () => window.removeEventListener("alarms-updated-externally", e);
  }, []);
  const Fe = V();
  const Me = !Fe && _() && W();
  const _e = Fe;
  z.useEffect(() => {
    if (!Fe || !fe) {
      return;
    }
    let e = false;
    (async () => {
      try {
        const {
          requestNotificationPermission: e
        } = await g(async () => {
          const {
            requestNotificationPermission: e
          } = await import("./main-BO9xa-SQ.js").then(e => e.ci);
          return {
            requestNotificationPermission: e
          };
        }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
        await e();
      } catch (e) {}
    })();
    const t = async () => {
      try {
        const {
          updatedAlarms: t
        } = await J({
          alarms: Ue.current,
          characters: ve,
          userId: fe
        });
        if (e) {
          return;
        }
        if (t && t !== Ue.current) {
          Be(t);
          H({
            alarms: t,
            characters: ve,
            userId: fe
          });
        } else {
          H({
            alarms: Ue.current,
            characters: ve,
            userId: fe
          });
        }
      } catch (t) {
        console.warn("[PomodoroScreen] native alarm renew failed:", t == null ? undefined : t.message);
      }
    };
    t();
    let o = null;
    (async () => {
      try {
        const {
          App: e
        } = await g(async () => {
          const {
            App: e
          } = await import("./native-pet-CTNtZgMA.js").then(e => e.cM);
          return {
            App: e
          };
        }, __vite__mapDeps([2, 3, 4, 5, 6, 7]));
        o = await e.addListener("appStateChange", ({
          isActive: e
        }) => {
          if (e) {
            t();
          }
        });
      } catch (e) {}
    })();
    return () => {
      e = true;
      try {
        if (o && o.remove) {
          o.remove();
        }
      } catch (t) {}
    };
  }, [Fe, fe, ve]);
  const Le = z.useRef(null);
  const Oe = z.useRef(false);
  const We = z.useRef(null);
  const Ue = z.useRef(Pe);
  z.useEffect(() => {
    Ue.current = Pe;
  }, [Pe]);
  const Ye = z.useRef(Me);
  z.useEffect(() => {
    if (Me && !Ye.current && Pe.length > 0) {
      const e = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const t = [...new Set(Pe.map(e => e.characterId).filter(Boolean))].map(e => Se.find(t => String(t.id) === String(e))).filter(Boolean);
      Promise.all([L(Pe.map(t => ({
        id: String(t.id),
        time: t.time,
        label: t.label,
        enabled: t.enabled,
        characterId: t.characterId || null,
        repeatDays: t.repeatDays || [],
        timezone: e
      }))), t.length > 0 ? Ve(t).then(e => O(e)) : Promise.resolve()]).catch(e => console.error("補同步失敗:", e));
    }
    Ye.current = Me;
  }, [Me, Pe, Se]);
  const Ge = z.useCallback(e => {
    if (Me) {
      if (Le.current) {
        clearTimeout(Le.current);
      }
      Le.current = setTimeout(() => {
        const t = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const o = [...new Set(e.map(e => e.characterId).filter(Boolean))].map(e => Se.find(t => String(t.id) === String(e))).filter(Boolean);
        Promise.all([L(e.map(e => ({
          id: String(e.id),
          time: e.time,
          label: e.label,
          enabled: e.enabled,
          characterId: e.characterId || null,
          repeatDays: e.repeatDays || [],
          timezone: t
        }))), o.length > 0 ? Ve(o).then(e => O(e)) : Promise.resolve()]).catch(e => console.error("sync 失敗:", e));
      }, 60000);
    }
  }, [Me, Se]);
  const Ve = async e => {
    const o = await m.get("apiSettings");
    const r = o ? typeof o == "string" ? JSON.parse(o) : o : {};
    const [n, a] = await Promise.all([h.getAll().catch(() => []), x.getAll().catch(() => [])]);
    return {
      characters: await Promise.all(e.map(async e => {
        const [o, r, s] = await Promise.all([f.get(fe, String(e.id)).catch(() => null), t.getByPair(fe, String(e.id)).catch(() => []), i.get(fe, String(e.id)).catch(() => null)]);
        const l = (r || []).filter(e => !(e == null ? undefined : e.hiddenByUser)).slice(-25).map(e => ({
          sender: e.sender === "them" ? "them" : "me",
          text: e.text || e.rawContent || ""
        }));
        const d = a.filter(t => String(t.characterId) === String(e.id));
        const c = [...new Set([...n.map(e => e.meaning).filter(Boolean), ...d.map(e => e.meaning).filter(Boolean)])];
        const p = ((s == null ? undefined : s.episodeSummary) || "").slice(0, 1500);
        return {
          id: String(e.id),
          name: e.name,
          personality: e.personality || e.description || "",
          relationship: (o == null ? undefined : o.relationship) || "",
          charToUserRelationship: (o == null ? undefined : o.charToUserRelationship) || "",
          episodeSummary: p,
          avatarUrl: e.image || null,
          voice: (o == null ? undefined : o.minimaxTimbreId) || "",
          recentMessages: l,
          stickerMeanings: c
        };
      })),
      apiSettings: {
        apiType: r.apiType || "openai",
        apiUrl: r.mainApiUrl || "",
        apiKey: r.mainApiKey || "",
        model: r.mainApiModel || "gpt-3.5-turbo",
        temperature: r.temperature ?? 0.7
      },
      userName: localStorage.getItem("nuojiji_user_name") || "用戶",
      language: localStorage.getItem("language") || "zh"
    };
  };
  const He = z.useCallback(e => {
    if (Fe) {
      H({
        alarms: e,
        characters: ve,
        userId: fe
      });
    }
  }, [Fe, ve, fe]);
  const Je = z.useCallback(async e => {
    if (!Fe || !(e == null ? undefined : e.characterId)) {
      return;
    }
    const t = ve.find(t => String(t.id) === String(e.characterId));
    if (!t) {
      return;
    }
    const o = localStorage.getItem("language") || "zh_cn";
    const r = function ({
      characterId: e,
      label: t,
      lang: o
    }) {
      return `${e == null ? "" : String(e)}|${String(t || "").trim()}|${o}`;
    }({
      characterId: e.characterId,
      label: e.label,
      lang: o
    });
    if (e.linePoolKey !== r || !Array.isArray(e.linePool) || !(e.linePool.length >= 4)) {
      try {
        const l = b(be);
        const d = (be == null ? undefined : be.name) || localStorage.getItem("nuojiji_user_name") || "你";
        const c = await async function ({
          char: e,
          userId: t,
          userName: o = "你",
          userPersona: r = "",
          alarmLabel: l = "",
          alarmTime: d = "",
          lang: c
        } = {}) {
          if (!(e == null ? undefined : e.name)) {
            throw new Error("char.name required");
          }
          const p = await n();
          const u = await a({
            char: e,
            userId: t
          });
          let g = "";
          try {
            if (t && (e == null ? undefined : e.id)) {
              const o = await i.get(t, String(e.id));
              g = ((o == null ? undefined : o.episodeSummary) || "").trim();
            }
          } catch (w) {}
          const m = c || (typeof localStorage != "undefined" ? localStorage.getItem("language") : null) || "zh_cn";
          const h = m === "en" ? "English" : m === "zh" ? "Traditional Chinese" : "Simplified Chinese";
          const x = String(l || "").trim();
          const f = function (e) {
            const t = /^(\d{1,2}):(\d{2})$/.exec(String(e || "").trim());
            if (!t) {
              return "";
            }
            const o = parseInt(t[1], 10);
            if (o >= 5 && o < 9) {
              return "Early morning — this is a wake-up call. They are probably still in bed; coax/drag them awake.";
            } else if (o >= 9 && o < 12) {
              return "Late morning — a daytime reminder; they are likely already up and busy.";
            } else if (o >= 12 && o < 14) {
              return "Midday — lunch / midday-break reminder.";
            } else if (o >= 14 && o < 18) {
              return "Afternoon — a daytime reminder; keep energy matching a working afternoon.";
            } else if (o >= 18 && o < 22) {
              return "Evening — after-work / dinner-time reminder, more relaxed tone.";
            } else {
              return "Late night — they should probably be sleeping; nudge them toward rest, or it is a deep-night reminder.";
            }
          }(d);
          const b = u.intimacy !== null && u.intimacy !== undefined ? `Intimacy so far: ${u.intimacy}/1000 ${u.intimacy >= 300 ? "(close — can be playful/teasing/familiar)" : u.intimacy >= 100 ? "(getting close — softer than strangers)" : "(still distant — gentle/polite, no fake intimacy)"}` : "";
          const y = Array.isArray(u.recentMessages) && u.recentMessages.length > 0 ? u.recentMessages.map(t => `${t.role === "user" ? o : e.name}: ${t.text}`).join("\n") : `(no recent chat — speak as someone who knows ${o} but don't fabricate shared memories)`;
          const v = `You ARE ${e.name}. You are ${o}'s alarm clock. It just hit ${d || "the set time"} and the alarm is going off.\nWrite 15 different lines you might say to ${o} at this moment — to wake them / remind them${x ? ` about "${x}"` : ""}.\nEach line = one thing ${e.name} would actually say, in their own voice, drawing on the relationship and history below.\n\n[YOUR PERSONA — ${e.name}]\n${u.persona || "(unspecified — stay specific to one coherent voice, do not drift generic)"}\n\n[WHO ${String(o).toUpperCase()} IS — the person you're waking]\n${r.trim() || "(unspecified — treat as someone you know; do NOT fabricate details, do NOT assume their gender)"}\n\n[YOUR RELATIONSHIP WITH ${String(o).toUpperCase()}]\n${u.relationship || "(unspecified — keep distance neutral, do not invent intimacy)"}${b ? "\n" + b : ""}\n\n[LONG-TERM MEMORY — what's happened between you]\n${g || "(none recorded)"}\n\n[RECENT CHAT MEMORY — last few exchanges]\n${y}\n\n[CURRENT SCENE]\nIt's ${d || "the set time"}. You are acting as ${o}'s alarm, going off right now${x ? `, reminding them about "${x}"` : ""}.\n${f}\n\nVOICE LOCK (critical)\nAfter every line, silently ask: "If I deleted ${e.name}'s name, could ANY other character say this exact sentence?"\nIf yes → throw it out, rewrite with something only ${e.name} would say (their voice, slang, what they care about, a callback to the memory/chat above, the way they nag or tease).\nEach line must carry ${e.name}'s fingerprint AND fit waking ${o} at this hour${x ? ` for "${x}"` : ""}.\n\nWHAT TO AVOID\n- Generic alarm-bot ("起床啦" "时间到了") with no fingerprint\n- Listing emotions instead of showing them\n- Trope cosplay (forced tsundere/clingy) unless persona says so\n- ANY meta about being "an alarm app" / "an AI" — you ARE ${e.name}, just woken them up\n- Misgendering ${o} (use their actual gender above)\n\nOUTPUT\n- Language: ${h}.\n- Write 15 lines. As a SET they must feel varied — some gentle, some teasing, some blunt, some sweet, some grumpy — whatever fits ${e.name}. NOT 15 variations of one sentence.\n- Each line ≤ 40 characters, 1-2 short clauses, on its own row.\n- No numbering, no quotes, no headers, no meta, no closing remarks.`;
          const S = `Now write 15 alarm lines as ${e.name}, waking ${o}${x ? ` for "${x}"` : ""} at ${d || "the set time"}. Each a different moment/tone. Voice lock on every line.`;
          return new Promise((e, t) => {
            let o = "";
            s({
              messages: [{
                role: "system",
                content: v
              }, {
                role: "user",
                content: S
              }],
              settings: p,
              preferStreaming: false,
              maxTokens: 65536,
              onStream: e => {
                o += e;
              },
              onComplete: r => {
                const n = (r || o || "").trim();
                const a = function (e) {
                  if (e) {
                    return e.split(/\r?\n|\\n|\s*\|\s*/).map(e => e.replace(/^\s*[-*•·]+\s*/, "")).map(e => e.replace(/^\s*\d+[.、)）:]\s*/, "")).map(e => e.replace(/^\s*["'「『]+|["'」』]+\s*$/g, "")).map(e => e.trim()).filter(e => e.length > 0 && e.length <= 80);
                  } else {
                    return [];
                  }
                }(n);
                if (a.length !== 0) {
                  e(a.slice(0, 15));
                } else {
                  t(new Error(`闹钟台词解析为空 (AI 返回 ${n.length} 字)`));
                }
              },
              onError: e => t(e)
            });
          });
        }({
          char: t,
          userId: fe,
          userName: d,
          userPersona: l,
          alarmLabel: e.label,
          alarmTime: e.time,
          lang: o
        });
        if (!Array.isArray(c) || c.length === 0) {
          return;
        }
        const p = Ue.current.map(t => t.id === e.id ? {
          ...t,
          linePool: c,
          linePoolKey: r,
          linePoolAt: Date.now()
        } : t);
        Be(p);
        He(p);
      } catch (l) {
        console.warn("[PomodoroScreen] 闹钟台词预生成失败(回落硬编码):", l == null ? undefined : l.message);
      }
    }
  }, [Fe, ve, be, fe, He]);
  const Ke = z.useCallback(e => {
    if (Fe) {
      if (We.current) {
        clearTimeout(We.current);
      }
      We.current = setTimeout(() => {
        Je(e);
      }, 1500);
    }
  }, [Fe, Je]);
  const qe = (e, t) => {
    const o = Pe.map(o => o.id === e ? {
      ...o,
      ...t
    } : o);
    Be(o);
    Ge(o);
    if (Fe) {
      He(o);
    }
  };
  const Xe = N();
  z.useEffect(() => {
    if (Me) {
      return;
    }
    if (!fe) {
      return;
    }
    if (!Array.isArray(Pe) || Pe.length === 0) {
      return;
    }
    if (Oe.current) {
      return;
    }
    const e = `${(o = Xe).getFullYear()}-${String(o.getMonth() + 1).padStart(2, "0")}-${String(o.getDate()).padStart(2, "0")}T${String(o.getHours()).padStart(2, "0")}:${String(o.getMinutes()).padStart(2, "0")}`;
    var o;
    const r = Xe.getDay();
    const n = `${String(Xe.getHours()).padStart(2, "0")}:${String(Xe.getMinutes()).padStart(2, "0")}`;
    const a = Pe.filter(t => {
      if (!(t == null ? undefined : t.enabled) || !(t == null ? undefined : t.characterId) || t.time !== n) {
        return false;
      }
      const o = Array.isArray(t.repeatDays) ? t.repeatDays : [];
      return (!(o.length > 0) || !!o.includes(r)) && t.lastTriggeredAt !== e;
    });
    if (a.length !== 0) {
      Oe.current = true;
      (async () => {
        try {
          const r = [];
          for (const e of a) {
            const n = ve.find(t => String(t.id) === String(e.characterId));
            if (!n) {
              continue;
            }
            const a = Date.now();
            const i = pe(e, n.name);
            const s = {
              id: `local_alarm_${e.id}_${a}`,
              text: i,
              rawContent: i,
              sender: "them",
              timestamp: a,
              time: new Date(a).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
              }),
              type: "text",
              fromLocalAlarm: true
            };
            try {
              await t.upsertByPair(fe, n.id, [s]);
              r.push(e.id);
              window.dispatchEvent(new CustomEvent("new-message", {
                detail: {
                  charId: String(n.id),
                  userId: fe,
                  message: s
                }
              }));
            } catch (o) {
              console.warn("[PomodoroScreen] 本地鬧鐘消息寫入失敗:", e.id, o);
            }
          }
          if (r.length > 0) {
            Be(t => t.map(t => {
              if (!r.includes(t.id)) {
                return t;
              }
              const o = Array.isArray(t.repeatDays) ? t.repeatDays : [];
              return {
                ...t,
                lastTriggeredAt: e,
                enabled: o.length > 0 && t.enabled
              };
            }));
          }
        } finally {
          Oe.current = false;
        }
      })();
    }
  }, [Me, fe, Pe, Xe, ve]);
  const [Qe, Ze] = z.useState("学习");
  const [et, tt] = z.useState(true);
  const [ot, rt] = z.useState("work");
  const [nt, at] = z.useState(1);
  const [it, st] = z.useState(1);
  const [lt, dt] = z.useState(25);
  const [ct, pt] = z.useState(1500);
  const [ut, gt] = z.useState(false);
  const [mt, ht] = z.useState("准备好开始了吗？我会一直在你身边。");
  const [xt, ft] = z.useState("");
  const [bt, yt] = z.useState(true);
  const [vt, St] = z.useState(false);
  const [wt, kt] = z.useState(false);
  const jt = z.useRef(false);
  z.useEffect(() => {
    if (!he || !et) {
      return;
    }
    const e = Ie();
    if (e) {
      if (e.taskName) {
        Ze(e.taskName);
      }
      if (e.charId && Se.find(t => String(t.id) === String(e.charId))) {
        ke(e.charId);
      }
      if (e.workMinutes && e.workMinutes > 0) {
        dt(e.workMinutes);
      }
      if (e.sessions && e.sessions > 0) {
        st(e.sessions);
      }
      De("pomodoro");
      if (e.autoStart) {
        jt.current = true;
      }
    }
  }, [he, et]);
  const [It, Ct] = z.useState(null);
  const [$t, Rt] = z.useState(false);
  const At = z.useRef(0);
  const zt = z.useRef(new Set());
  const Tt = z.useRef(null);
  const [Nt, Et] = z.useState(true);
  const Dt = z.useRef(null);
  const Pt = z.useCallback(e => {
    try {
      const t = new Audio(e);
      t.volume = 1;
      if (Dt.current) {
        Dt.current.volume = 0.2;
      }
      t.onended = () => {
        if (Dt.current) {
          Dt.current.volume = 1;
        }
      };
      t.onerror = () => {
        if (Dt.current) {
          Dt.current.volume = 1;
        }
      };
      t.play().catch(() => {
        if (Dt.current) {
          Dt.current.volume = 1;
        }
      });
    } catch (t) {
      console.warn("[Pomo SFX] 播放音效失敗:", t);
    }
  }, []);
  const Bt = z.useCallback(async (e, t) => {
    try {
      const {
        showNativeNotification: o,
        getNotificationPermission: r
      } = await g(async () => {
        const {
          showNativeNotification: e,
          getNotificationPermission: t
        } = await import("./main-BO9xa-SQ.js").then(e => e.ci);
        return {
          showNativeNotification: e,
          getNotificationPermission: t
        };
      }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
      if ((await r()) !== "granted") {
        return;
      }
      const n = je == null ? undefined : je.avatar;
      await o({
        title: e,
        body: t,
        tag: "pomodoro-focus",
        icon: n || "/pwa-512x512.png",
        largeIcon: n || null,
        data: {
          screen: "pomodoro-screen"
        }
      });
    } catch (o) {
      console.warn("[Pomo] sendFocusNotification failed:", o);
    }
  }, [je]);
  const [Ft, Mt] = z.useState(false);
  const [_t, Lt] = z.useState(false);
  const [Ot, Wt] = z.useState("");
  const [Ut, Yt] = z.useState("");
  const [Gt, Vt] = z.useState("");
  const Ht = z.useRef(null);
  const [Jt, Kt] = z.useState(false);
  const [qt, Xt] = z.useState("");
  const [Qt, Zt] = z.useState("all");
  const [eo, to] = z.useState([]);
  const oo = [{
    id: "ocean",
    label: xe("pomodoroNoiseOcean"),
    src: "/audio/ocean.mp3"
  }, {
    id: "cafe",
    label: xe("pomodoroNoiseCafe"),
    src: "/audio/cafe.mp3"
  }, {
    id: "night",
    label: xe("pomodoroNoiseNight"),
    src: "/audio/night.mp3"
  }, {
    id: "market",
    label: xe("pomodoroNoiseMarket"),
    src: "/audio/market.mp3"
  }, {
    id: "birds",
    label: xe("pomodoroNoiseBirds"),
    src: "/audio/birds.mp3"
  }];
  const ro = [...oo, ...eo, {
    id: "none",
    label: xe("pomodoroNoiseNone"),
    src: null
  }];
  const [no, ao] = z.useState(() => localStorage.getItem("pomo_noise") || "none");
  const [io, so] = z.useState(() => localStorage.getItem("pomo_autoSelectNoise") === "true");
  const [lo, co] = z.useState(() => localStorage.getItem("pomo_bgGen") === "true");
  const [po, uo] = z.useState(() => localStorage.getItem("pomo_voiceGen") === "true");
  const [go, mo] = z.useState(() => localStorage.getItem("pomo_imageSize") || "");
  const [ho, xo] = z.useState(() => localStorage.getItem("pomo_logToCalendar") === "true");
  const [fo, bo] = z.useState(() => localStorage.getItem("pomo_countUp") === "true");
  const [yo, vo] = z.useState("");
  const [So, wo] = z.useState("");
  const ko = z.useRef(null);
  const jo = z.useRef(null);
  const [Io, Co] = z.useState("");
  const [$o, Ro] = z.useState(false);
  const Ao = z.useRef(false);
  z.useEffect(() => {
    let e = false;
    (async () => {
      try {
        const [t, o, r] = await Promise.all([y.get("customBg"), y.get("sfxRound"), y.get("sfxAll")]);
        if (e) {
          return;
        }
        if (typeof t == "string") {
          Co(t);
        }
        if (typeof o == "string") {
          vo(o);
        }
        if (typeof r == "string") {
          wo(r);
        }
      } catch (t) {
        console.warn("[Pomo] 載入大型物件失敗:", t);
      } finally {
        if (!e) {
          Ao.current = true;
        }
      }
    })();
    return () => {
      e = true;
    };
  }, []);
  const [zo, To] = z.useState("");
  const [No, Eo] = z.useState(false);
  const Do = z.useRef(0);
  const [Po, Bo] = z.useState(false);
  const [Fo, Mo] = z.useState("");
  const [_o, Lo] = z.useState("");
  const [Oo, Wo] = z.useState(null);
  const Uo = z.useRef(null);
  const Yo = z.useRef(false);
  const Go = z.useRef(false);
  z.useEffect(() => {
    (async () => {
      try {
        const e = localStorage.getItem("pomo_customNoises");
        if (e) {
          const t = JSON.parse(e);
          if (t.length > 0) {
            await v.bulkPutLegacy(t);
          }
          localStorage.removeItem("pomo_customNoises");
        }
        const t = await v.getAll();
        to(t);
      } catch (e) {
        console.warn("載入自訂白噪音失敗:", e);
      }
      Go.current = true;
    })();
  }, []);
  z.useEffect(() => {
    if (Go.current) {
      (async () => {
        try {
          await v.replaceAll(eo);
        } catch (e) {
          console.warn("自訂白噪音存儲失敗:", e);
        }
      })();
    }
  }, [eo]);
  const Vo = (e, t) => {
    try {
      localStorage.setItem(e, t);
    } catch (o) {}
  };
  z.useEffect(() => {
    Vo("pomo_noise", no);
  }, [no]);
  z.useEffect(() => {
    Vo("pomo_autoSelectNoise", io);
  }, [io]);
  z.useEffect(() => {
    Vo("pomo_bgGen", lo);
  }, [lo]);
  z.useEffect(() => {
    Vo("pomo_voiceGen", po);
  }, [po]);
  z.useEffect(() => {
    Vo("pomo_imageSize", go);
  }, [go]);
  z.useEffect(() => {
    Vo("pomo_logToCalendar", ho);
  }, [ho]);
  z.useEffect(() => {
    Vo("pomo_countUp", fo);
  }, [fo]);
  const Ho = z.useCallback(async (e, t) => {
    if (Ao.current) {
      try {
        if (t) {
          await y.set(e, t);
        } else {
          await y.remove(e);
        }
      } catch (o) {
        console.warn(`[Pomo] ${e} 存儲失敗:`, o);
      }
    }
  }, []);
  z.useEffect(() => {
    Ho("customBg", Io);
  }, [Io, Ho]);
  z.useEffect(() => {
    Ho("sfxRound", yo);
  }, [yo, Ho]);
  z.useEffect(() => {
    Ho("sfxAll", So);
  }, [So, Ho]);
  const Jo = z.useRef({});
  const Ko = z.useCallback(async e => {
    ht(e);
    const t = await f.get(fe, String(je == null ? undefined : je.id)).catch(() => null);
    if (!(t == null ? undefined : t.autoTranslate) || !e) {
      ft("");
      return;
    }
    const o = E(t == null ? undefined : t.userLanguage);
    const r = `${e}__${o}`;
    if (Jo.current[r]) {
      ft(Jo.current[r]);
    } else {
      try {
        const t = Tt.current || (await n());
        if (!(t == null ? undefined : t.mainApiKey)) {
          return;
        }
        const a = await s({
          messages: [{
            role: "system",
            content: `You are re-expressing a character's line in ${o}. This is NOT literal translation — rewrite the text as if the character naturally speaks ${o}, keeping their personality, tone, and speech style intact. Output ONLY the rewritten text, nothing else.`
          }, {
            role: "user",
            content: e
          }],
          settings: t,
          preferStreaming: false
        });
        const i = (a == null ? undefined : a.trim()) || "";
        if (i) {
          Jo.current[r] = i;
          ft(i);
        }
      } catch {
        ft("");
      }
    }
  }, [je, fe]);
  const qo = z.useRef(null);
  const Xo = z.useRef(false);
  const Qo = z.useRef(0);
  const Zo = z.useRef(null);
  const er = z.useRef(new Map());
  const tr = z.useCallback(() => {
    const e = qo.current;
    if (e && !e._unlocked) {
      e.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=";
      e.volume = 0;
      e.play().then(() => {
        e.pause();
        e.volume = 1;
        e._unlocked = true;
      }).catch(() => {
        e.volume = 1;
      });
    }
  }, []);
  const or = z.useCallback(() => {
    const e = qo.current;
    if (e && Xo.current) {
      e.onended = null;
      e.onerror = null;
      e.pause();
      e.removeAttribute("src");
      e.load();
      Xo.current = false;
      if (Zo.current) {
        URL.revokeObjectURL(Zo.current);
        Zo.current = null;
      }
      if (Dt.current) {
        Dt.current.volume = 1;
      }
      w();
    }
  }, []);
  const rr = z.useCallback(async e => {
    if (!po || !e) {
      return;
    }
    const t = ++Qo.current;
    or();
    try {
      const o = Tt.current || (await n());
      if (t !== Qo.current) {
        return;
      }
      let r = er.current.get(e);
      if (!r) {
        const n = await f.get(fe, String(je == null ? undefined : je.id)).catch(() => null);
        if (t !== Qo.current) {
          return;
        }
        const a = (n == null ? undefined : n.voiceProvider) || (je == null ? undefined : je.voiceProvider) || "minimax";
        if (!(a === "elevenlabs" ? o == null ? undefined : o.elevenlabsApiKey : a === "gptsovits" ? o == null ? undefined : o.sovitsServerUrl : (o == null ? undefined : o.minimaxEnabled) && (o == null ? undefined : o.minimaxApiKey))) {
          const e = a === "elevenlabs" ? "ElevenLabs" : a === "gptsovits" ? "GPT-SoVITS" : "MiniMax";
          console.warn(`[Pomo TTS] ${e} 未啟用或未配置`);
          return;
        }
        const i = (n == null ? undefined : n.sovitsApiVersion) || (je == null ? undefined : je.sovitsApiVersion) || "v2";
        const s = a === "elevenlabs" ? (n == null ? undefined : n.elevenVoiceId) || (je == null ? undefined : je.elevenVoiceId) || "" : a === "gptsovits" ? i === "gsvi" ? (n == null ? undefined : n.sovitsGsviVoice) || (je == null ? undefined : je.sovitsGsviVoice) || "" : (n == null ? undefined : n.sovitsRefAudioPath) || (je == null ? undefined : je.sovitsRefAudioPath) || "" : (n == null ? undefined : n.minimaxTimbreId) || (je == null ? undefined : je.minimaxTimbreId) || "";
        const l = await S(e, {
          apiSettings: o,
          voiceProvider: a,
          voiceId: s,
          sovitsRefText: (n == null ? undefined : n.sovitsRefText) || (je == null ? undefined : je.sovitsRefText) || "",
          sovitsGptPath: (n == null ? undefined : n.sovitsGptPath) || (je == null ? undefined : je.sovitsGptPath) || "",
          sovitsSovitsPath: (n == null ? undefined : n.sovitsSovitsPath) || (je == null ? undefined : je.sovitsSovitsPath) || "",
          sovitsApiVersion: i,
          sovitsGsviVoice: i === "gsvi" ? s : undefined,
          sovitsGsviModel: (n == null ? undefined : n.sovitsGsviModel) || (je == null ? undefined : je.sovitsGsviModel) || "",
          sovitsGsviLang: (n == null ? undefined : n.sovitsGsviLang) || (je == null ? undefined : je.sovitsGsviLang) || "",
          sovitsGsviEmotion: (n == null ? undefined : n.sovitsGsviEmotion) || (je == null ? undefined : je.sovitsGsviEmotion) || "",
          language: (n == null ? undefined : n.voiceLanguage) || localStorage.getItem("language") || "zh",
          speed: (n == null ? undefined : n.voiceSpeed) ?? 1
        });
        if (t !== Qo.current) {
          return;
        }
        if (!(l == null ? undefined : l.audioBlob)) {
          console.warn("[Pomo TTS] 語音生成返回空結果，text:", e.slice(0, 30));
          return;
        }
        r = l.audioBlob;
        er.current.set(e, r);
        if (er.current.size > 30) {
          const e = er.current.keys().next().value;
          er.current.delete(e);
        }
      }
      if (t !== Qo.current) {
        return;
      }
      const a = qo.current;
      if (!a) {
        return;
      }
      if (Zo.current) {
        URL.revokeObjectURL(Zo.current);
      }
      const i = URL.createObjectURL(r);
      Zo.current = i;
      let s = false;
      const l = () => {
        if (!s) {
          s = true;
          Xo.current = false;
          if (Dt.current) {
            Dt.current.volume = 1;
          }
          w();
        }
      };
      a.onended = l;
      a.onerror = l;
      a.src = i;
      Xo.current = true;
      k();
      if (Dt.current) {
        Dt.current.volume = 0.2;
      }
      a.play().catch(e => {
        console.warn("[Pomo TTS] audio.play() 失敗:", (e == null ? undefined : e.message) || e);
        l();
      });
    } catch (o) {
      console.warn("[Pomo TTS] 語音生成失敗:", o);
      if (Dt.current) {
        Dt.current.volume = 1;
      }
    }
  }, [po, je, fe, or]);
  const nr = z.useRef(false);
  z.useEffect(() => {
    const e = Dt.current;
    if (!e) {
      return;
    }
    const t = ro.find(e => e.id === no);
    if (!(t == null ? undefined : t.src)) {
      if (nr.current) {
        w();
        nr.current = false;
      }
      e.pause();
      e.removeAttribute("src");
      return;
    }
    if (e.getAttribute("src") !== t.src) {
      e.src = t.src;
    }
    if (ut && Nt) {
      if (!nr.current) {
        k();
        nr.current = true;
      }
      e.play().catch(() => {});
    } else {
      if (nr.current) {
        w();
        nr.current = false;
      }
      e.pause();
    }
  }, [no, ut, Nt]);
  const ar = z.useCallback(() => {
    try {
      const e = o("calendar_events_character");
      if (!e || !je) {
        return "";
      }
      const t = new Date();
      const r = t.getFullYear();
      const n = `${r}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
      const a = t.getHours() * 60 + t.getMinutes();
      const i = e => {
        if (!e) {
          return null;
        }
        const t = e.split(":");
        return parseInt(t[0], 10) * 60 + parseInt(t[1] || "0", 10);
      };
      const s = e.filter(e => String(e.characterId) === String(je.id) && e.date === n).sort((e, t) => (e.startTime || "").localeCompare(t.startTime || ""));
      if (s.length === 0) {
        return "";
      }
      const l = [];
      for (const o of s) {
        const e = i(o.startTime);
        const t = i(o.endTime) ?? (e !== null ? e + 60 : null);
        if (e === null) {
          continue;
        }
        let r = "";
        if (t !== null && t <= a) {
          r = "已完成";
        } else if (e <= a) {
          const o = a - e;
          const n = (t || e + 60) - e;
          r = `進行中(${Math.min(100, Math.round(o / n * 100))}%，已${o}分鐘/${n}分鐘)`;
        } else {
          r = e <= a + 120 ? `即將開始(${e - a}分鐘後)` : "稍後";
        }
        l.push(`- ${o.startTime}${o.endTime ? "~" + o.endTime : ""} ${o.title} [${r}]`);
      }
      if (l.length > 0) {
        return `\n【${je.name}的今日行程】\n${l.join("\n")}`;
      } else {
        return "";
      }
    } catch {
      return "";
    }
  }, [je]);
  const ir = z.useCallback(async (e, t) => {
    Rt(true);
    try {
      Tt.current = await n();
      const o = Tt.current;
      if (!(o == null ? undefined : o.mainApiKey)) {
        throw new Error("no api");
      }
      const r = await f.get(fe, String(je == null ? undefined : je.id)).catch(() => null);
      const a = !!(r == null ? undefined : r.autoTranslate);
      const i = (r == null ? undefined : r.charLanguage) || "Japanese";
      const l = E(r == null ? undefined : r.userLanguage);
      let d = "";
      if (a) {
        d = `\nAll output must be written in "${i}". Output the original only, do not append any translation in parentheses.`;
      } else {
        const e = localStorage.getItem("language") || "zh_cn";
        d = e === "zh_cn" ? "\n所有输出必须使用「简体中文」书写。请只使用简体字，不要使用任何繁体字（例如要写\"这\"不写\"這\"，写\"说\"不写\"說\"，写\"现在\"不写\"現在\"）。" : e === "zh" ? "\n所有輸出必須使用「繁體中文」書寫。請只使用繁體字，不要使用任何簡體字（例如要寫「這」不寫「这」，寫「說」不寫「说」，寫「現在」不寫「现在」）。" : "\nAll output must be written in English. Do not use Chinese, Japanese, or any other language.";
      }
      const c = (je == null ? undefined : je.description) || (je == null ? undefined : je.personality) || "";
      const p = ar();
      const u = `You are "${je == null ? undefined : je.name}". ${c}\nYou are accompanying the user during a Pomodoro focus session. Generate encouragement lines that reflect your personality — never generic AI-style cheering.${p ? `\n${p}\nWeave your current schedule state into the lines naturally. E.g., if you're working: "I'm also wrapping up XX on my end, let's grind together"; if you just finished something: "Just got done with XX". Make the user feel you have your own life rhythm.` : ""}${d}\nReturn pure JSON only. No surrounding text, no markdown fences.`;
      const g = [...oo, ...eo];
      const m = g.map(e => e.id).join(", ");
      const h = g.map(e => `${e.id}(${e.label})`).join(", ");
      const x = `Task: ${Qe}\nFocus duration: ${lt} minutes\nSession: round ${e}/${t}\n\nReturn this JSON:\n{\n  "start": "opening encouragement (15-30 chars of target language)",\n  "pause": "what you say when user pauses (≤ 15 chars)",\n  "resume": "what you say when user resumes (≤ 15 chars)",\n  "complete": "what you say when ALL rounds are done (20-30 chars, mention total rounds)",\n  "break": "what you say at break time (≤ 15 chars)",\n  "timed": [{"at": secondsElapsed, "text": "encouragement line (15-25 chars)"}]${io ? ",\n  \"noise\": \"recommended white-noise ID\"" : ""}${lo ? ",\n  \"touch\": {\"hair\":\"reaction to head pat\",\"forehead\":\"reaction to forehead touch\",\"eye\":\"reaction to eye gaze/touch\",\"nose\":\"reaction to nose touch\",\"mouth\":\"reaction to lip touch\",\"ear\":\"reaction to ear touch\",\"cheek\":\"reaction to cheek touch\",\"neck\":\"reaction to neck touch\",\"chest\":\"reaction to chest touch\",\"waist\":\"reaction to waist touch\",\"hand\":\"reaction to hand-hold/touch\",\"arm\":\"reaction to arm touch\",\"shoulder\":\"reaction to shoulder touch\"}\nEach touch reaction MUST match the character's personality and the relationship with the user. Shy characters may blush and flinch; dominant characters may turn the tables; intimate characters may lean in. Each reaction ≤ 15 characters of target language." : ""}\n}\n"timed" should have one line every 5–8 minutes, evenly spread over ${lt} minutes. "at" values must be between 1 and ${lt * 60 - 30}.${io ? `\nAlso include a "noise" field in the JSON — pick the most fitting white-noise ID from: ${h}.${p ? " Match the character's current activity (reading→cafe, outdoors→birds, etc.)." : ""} If nothing fits the character's schedule, pick one that helps the user focus on "${Qe}". Allowed values: ${m}, none` : ""}`;
      const b = (await s({
        messages: [{
          role: "system",
          content: u
        }, {
          role: "user",
          content: x
        }],
        settings: o,
        preferStreaming: false
      })).replace(/```json?\n?/g, "").replace(/```/g, "").trim();
      const y = JSON.parse(b);
      if (y.start && y.timed && Array.isArray(y.timed)) {
        if (a) {
          y._translate = true;
          y._userLang = l;
        }
        Ct(y);
        if (io && y.noise && [...oo.map(e => e.id), ...eo.map(e => e.id), "none"].includes(y.noise)) {
          ao(y.noise);
        }
        return y;
      }
      throw new Error("invalid format");
    } catch (o) {
      console.warn("AI 語句生成失敗:", o);
      Ct(null);
      return null;
    } finally {
      Rt(false);
    }
  }, [je, Qe, lt, io, ar, eo, fe, lo]);
  const sr = z.useCallback(async () => {
    if (!lo || !je) {
      return;
    }
    const e = ++Do.current;
    if (!No) {
      Eo(true);
      try {
        Tt.current = await n();
        const r = Tt.current;
        if (!(r == null ? undefined : r.mainApiKey)) {
          return;
        }
        const a = await f.get(fe, String(je.id)).catch(() => null);
        const i = (je == null ? undefined : je.description) || (je == null ? undefined : je.personality) || "";
        const l = (je == null ? undefined : je.imagePrompt) || (a == null ? undefined : a.charImagePrompt) || j(i);
        console.log("[Pomodoro] 角色外觀來源:", (je == null ? undefined : je.imagePrompt) ? "character.imagePrompt" : (a == null ? undefined : a.charImagePrompt) ? "chatSettings.charImagePrompt" : "extractAppearanceDesc", "內容:", l == null ? undefined : l.slice(0, 80));
        const d = ar();
        let c = "";
        if (d) {
          const e = d.match(/- [\d:~]+ (.+?) \[進行中/);
          if (e) {
            c = e[1];
          }
          if (!c) {
            const e = d.match(/- [\d:~]+ (.+?) \[即將開始/);
            if (e) {
              c = e[1];
            }
          }
        }
        const p = await U({
          char: je,
          mode: "all",
          apiSettings: r
        }).catch(() => "");
        const u = "You are an expert at writing image generation prompts. Generate a single English prompt for an illustration/anime-style image. IMPORTANT: The image is from the USER's first-person POV (viewer's perspective). The viewer is looking at the character. The user/viewer's body should NOT appear in full — at most, the viewer's hands, arms, or partial body (e.g. holding a book, resting on a desk) may be visible at the edges/bottom of the frame. The main focus is the character in front of the viewer.\n\nYou must return ONLY a JSON object with two fields:\n1. \"prompt\": the image generation prompt text (50-120 words)\n2. \"bodyParts\": an array predicting where each visible body part of the CHARACTER will appear in the generated image. Each element: {\"part\":\"<name>\",\"x\":<center_x%>,\"y\":<center_y%>,\"w\":<width%>,\"h\":<height%>}. part must be one of: hair, forehead, eye, nose, mouth, ear, cheek, neck, chest, waist, hand, arm, shoulder. x/y/w/h are percentages (0-100) of image dimensions. Only include parts that would be visible given your prompt's composition. Be accurate based on the framing you describe.\n\nReturn ONLY the JSON, no markdown, no explanation." + I(p);
        let m = "";
        m = c ? `The character "${je.name}" is currently doing: "${c}". The user is doing: "${Qe}". Generate a first-person POV scene: the viewer (user) is looking at the character who is nearby doing their activity. The character may glance at the viewer, smile, or be focused on their own task. Only the viewer's hands or arms may appear at the bottom/edge of the frame (e.g. holding a pen, resting on a table). Do NOT show two full people — the camera IS the user's eyes.` : `The user is focusing on: "${Qe}". Generate a first-person POV scene: the viewer (user) is looking at the character "${je.name}" who is sitting nearby, accompanying them. The character may be reading, drinking tea, or resting beside the viewer. Only the viewer's hands or partial arms may appear at the bottom/edge of frame. Do NOT show the viewer's full body — the camera IS the user's eyes looking at the character.`;
        const h = l ? `\nCharacter appearance: ${l}` : "";
        const x = {
          male: "male",
          female: "female",
          other: ""
        }[(be == null ? undefined : be.gender) || ""] || "";
        const b = (be == null ? undefined : be.intro) || "";
        const y = (be == null ? undefined : be.imageAppearance) || "";
        const v = x || b || y ? `\nViewer (user) info:${x ? ` gender: ${x}` : ""}${y ? `, appearance: ${y}` : ""}${b ? `, profile: ${b}` : ""}. If the viewer's hands/arms are visible, they must match the user's gender and appearance.` : "";
        const S = await s({
          messages: [{
            role: "system",
            content: u
          }, {
            role: "user",
            content: `${m}${h}${v}\n\nGenerate a detailed image prompt (50-120 words). Focus on: first-person POV composition, the character as the main subject, cozy atmosphere, warm lighting, and the specific activity. The viewer's hands/arms may appear at frame edges and MUST match the viewer's gender. Include composition details (e.g. "first-person POV", "looking at character", "soft warm lighting", "cozy interior").\n\nThen predict where each body part will appear in the resulting image based on your prompt's composition.`
          }],
          settings: r,
          preferStreaming: false
        });
        if (!(S == null ? undefined : S.trim())) {
          return;
        }
        let w = "";
        try {
          const e = S.trim().replace(/```json?\n?/g, "").replace(/```/g, "").trim();
          const t = JSON.parse(e);
          w = t.prompt || "";
          if (Array.isArray(t.bodyParts) && t.bodyParts.length > 0) {
            Uo.current = t.bodyParts;
            console.log("[Pomodoro] 身體部位預測:", t.bodyParts.length, "個部位");
          }
        } catch {
          w = S.trim().replace(/^["']|["']$/g, "");
        }
        if (!w) {
          return;
        }
        console.log("[Pomodoro] 生圖 prompt:", w);
        const k = window.innerWidth || 1080;
        const A = (window.innerHeight || 1920) >= k;
        let z = {
          ...r
        };
        if (go) {
          const [e, t] = go.split("x").map(Number);
          const o = A ? e <= t ? go : `${t}x${e}` : e >= t ? go : `${t}x${e}`;
          const [r, n] = o.split("x").map(Number);
          const a = `${r}:${n}`;
          z.novelAiImageSize = o;
          z.pollinationsImageSize = o;
          z.googleImagenAspectRatio = a;
        } else {
          const e = e => {
            if (!e) {
              return e;
            }
            const [t, o] = e.split("x").map(Number);
            if (A && t > o || !A && o > t) {
              return `${o}x${t}`;
            } else {
              return e;
            }
          };
          const t = e => {
            if (!e) {
              return e;
            }
            const [t, o] = e.split(":").map(Number);
            if (A && t > o || !A && o > t) {
              return `${o}:${t}`;
            } else {
              return e;
            }
          };
          z.novelAiImageSize = e(r.novelAiImageSize);
          z.pollinationsImageSize = e(r.pollinationsImageSize);
          z.googleImagenAspectRatio = t(r.googleImagenAspectRatio);
        }
        const T = await C(w, "pomodoro", z, {
          imagePreset: a == null ? undefined : a.imagePreset,
          charSeed: je == null ? undefined : je.imageSeed,
          refImageId: je == null ? undefined : je.refImageRef
        });
        if (e !== Do.current) {
          return;
        }
        if (T) {
          To(T);
          try {
            const e = new Date();
            const o = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
            let r = null;
            try {
              const {
                compressImageForStorage: e
              } = await g(async () => {
                const {
                  compressImageForStorage: e
                } = await import("./imageCompressor-FPWVE1FW.js");
                return {
                  compressImageForStorage: e
                };
              }, []);
              const t = await e(T);
              r = await $.put(t);
            } catch (t) {}
            const n = {
              id: `pomo_${Date.now()}`,
              ...(r ? {
                imageRef: r
              } : {
                image: T
              }),
              title: `${je.name} - ${Qe}`,
              date: o,
              charId: String(je.id),
              charName: je.name,
              task: Qe,
              timestamp: Date.now()
            };
            await R.flashMoments.put(n);
            const a = await R.flashMoments.count();
            if (a > 50) {
              const e = await R.flashMoments.orderBy("timestamp").limit(a - 50).toArray();
              const t = e.map(e => e.imageRef).filter(e => e != null);
              await R.flashMoments.bulkDelete(e.map(e => e.id));
              if (t.length > 0) {
                $.bulkDelete(t).catch(() => {});
              }
            }
          } catch (o) {
            console.warn("儲存閃光時刻失敗:", o);
          }
        }
      } catch (o) {
        console.warn("專注模式生圖失敗:", o);
      } finally {
        Eo(false);
      }
    }
  }, [lo, je, Qe, ar, be, fe]);
  z.useEffect(() => {
    var e;
    let t = null;
    if (ut && ct > 0) {
      t = setInterval(() => {
        const e = Ne.current;
        const t = e > 0 ? Math.max(0, Math.ceil((e - Date.now()) / 1000)) : Math.max(0, ct - 1);
        pt(t);
        if (ot === "work") {
          const e = lt * 60;
          At.current = e - t;
          const o = It == null ? undefined : It.timed;
          if (o) {
            for (let t = 0; t < o.length; t++) {
              if (o[t].at <= At.current && !zt.current.has(t)) {
                zt.current.add(t);
                Ko(o[t].text);
                rr(o[t].text);
                break;
              }
            }
          }
        }
      }, 1000);
    } else if (ut && ct <= 0) {
      if (ot === "work") {
        if (nt >= it) {
          gt(false);
          if ((e = Dt.current) != null) {
            e.pause();
          }
          yt(true);
          kt(true);
          Pt(So || "/steam-achievement.mp3");
          Bt("🎉 專注完成！", "所有番茄都完成了，辛苦啦！可以好好休息了～");
          Ce({
            charId: String((je == null ? undefined : je.id) || ""),
            taskName: Qe,
            startedAt: Te.current,
            workDuration: lt * 60,
            totalSessions: it,
            completedSessions: nt,
            aborted: false,
            chatNoteText: xe("pomoChatNoteCompleted", {
              task: Qe,
              minutes: lt,
              sessions: it
            })
          });
          $e(true);
          B();
          const t = new Date(Te.current);
          const o = new Date();
          Re({
            taskName: Qe,
            charName: (je == null ? undefined : je.name) || "",
            totalSessions: it,
            completedSessions: nt,
            startTimeStr: `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`,
            endTimeStr: `${String(o.getHours()).padStart(2, "0")}:${String(o.getMinutes()).padStart(2, "0")}`,
            sessionId: `pomo_${Date.now()}`,
            startedAt: Te.current
          });
          if (zo && (It == null ? undefined : It.touch)) {
            Ko("辛苦了！來互動一下吧～");
            rr("辛苦了！來互動一下吧～");
            Bo(true);
          } else {
            const e = (It == null ? undefined : It.complete) || `太棒了！${it > 1 ? `完成了全部${it}个番茄` : "完成了一个番茄"}，你真厉害！`;
            Ko(e);
            rr(e);
            Ct(null);
          }
        } else {
          rt("break");
          const e = nt % 4 == 0;
          const t = e ? 900 : 300;
          Ne.current = Date.now() + t * 1000;
          pt(t);
          Pt(yo || "https://z.wiki/u/ehDABXswW");
          Bt("⏰ 一輪專注完成！", e ? "完成一輪了！休息15分鐘吧～" : "這輪結束了，休息5分鐘吧～");
          const o = (It == null ? undefined : It.break) || (e ? "太棒了！完成了一轮(4个)专注，现在进行15分钟的长休息吧～" : "辛苦啦，喝杯水休息5分钟吧！");
          Ko(o);
          rr(o);
          if (zo && (It == null ? undefined : It.touch)) {
            Bo(true);
          }
        }
      } else {
        rt("work");
        Ne.current = Date.now() + lt * 60 * 1000;
        pt(lt * 60);
        at(e => e + 1);
        Bo(false);
        Mo("");
        Lo("");
        At.current = 0;
        zt.current = new Set();
        Ko("休息好了吗？继续专注哦！");
        rr("休息好了吗？继续专注哦！");
        ir(nt + 1, it).then(e => {
          if (e) {
            Ko(e.start);
            rr(e.start);
          }
        });
      }
    }
    return () => clearInterval(t);
  }, [ut, ct, ot, lt, It, Pt, Bt, yo, So]);
  z.useEffect(() => {
    D({
      taskName: Qe,
      timeLeft: ct,
      totalTime: ot === "work" ? lt * 60 : nt % 4 == 0 ? 900 : 300,
      mode: ot === "work" ? "work" : "break",
      isActive: ut,
      countUpMode: fo,
      charName: (je == null ? undefined : je.name) || "",
      charAvatar: (je == null ? undefined : je.avatar) || (je == null ? undefined : je.image) || ""
    });
  }, [ut, ct, ot, Qe, lt, nt, je, fo]);
  z.useEffect(() => {
    const e = () => {
      if (ut) {
        pr();
      }
    };
    window.addEventListener("dynamic-island-timer-toggle", e);
    return () => window.removeEventListener("dynamic-island-timer-toggle", e);
  }, [ut]);
  z.useEffect(() => {
    if (!et) {
      P({
        currentSession: nt,
        paused: !ut
      });
    }
  }, [nt, ut, et]);
  z.useEffect(() => () => B(), []);
  const [lr, dr] = z.useState(false);
  const cr = async () => {
    Te.current = Date.now();
    if (po) {
      tr();
      try {
        const e = new (window.AudioContext || window.webkitAudioContext)();
        if (e.state === "suspended") {
          await e.resume();
        }
        e.close();
      } catch {}
    }
    dr(true);
    To("");
    Uo.current = null;
    const e = await ir(1, it);
    dr(false);
    if (lo) {
      sr();
    }
    const t = !!io && !!(e == null ? undefined : e.noise) && e.noise !== "none" && !!e.noise || no !== "none";
    tt(false);
    rt("work");
    at(1);
    Ne.current = Date.now() + lt * 60 * 1000;
    pt(lt * 60);
    gt(true);
    yt(false);
    kt(false);
    Et(t);
    At.current = 0;
    zt.current = new Set();
    const o = (e == null ? undefined : e.start) || `在专心做”${Qe}”对吧？我会安静陪着你的。`;
    Ko(o);
    rr(o);
    if (fe) {
      M({
        userId: fe,
        charId: (je == null ? undefined : je.id) || "",
        taskName: Qe,
        startedAt: Te.current,
        workMinutes: lt,
        totalSessions: it,
        currentSession: 1
      });
    }
  };
  z.useEffect(() => {
    if (!jt.current || !he || !et || !je) {
      return;
    }
    jt.current = false;
    const e = setTimeout(() => cr(), 100);
    return () => clearTimeout(e);
  }, [he, et, je]);
  const pr = () => {
    var e;
    var t;
    tr();
    const o = !ut;
    if (o) {
      Ne.current = Date.now() + Math.max(0, ct) * 1000;
    }
    gt(o);
    if (o) {
      const t = (It == null ? undefined : It.resume) || "我们继续专注吧！";
      Ko(t);
      rr(t);
      if (Nt) {
        if ((e = Dt.current) != null) {
          e.play().catch(() => {});
        }
      }
    } else {
      const e = (It == null ? undefined : It.pause) || "先暂停一下吗？没关系，我等你。";
      Ko(e);
      rr(e);
      if ((t = Dt.current) != null) {
        t.pause();
      }
    }
  };
  const ur = (e = false) => {
    var t;
    const o = e ? ze() : null;
    if (!e && Te.current) {
      const e = Math.max(0, Math.round((Date.now() - Te.current) / 1000));
      const t = ot === "break" ? nt : Math.max(0, nt - 1);
      const o = Math.max(1, Math.round(e / 60));
      Ce({
        charId: String((je == null ? undefined : je.id) || ""),
        taskName: Qe,
        startedAt: Te.current,
        workDuration: lt * 60,
        totalSessions: it,
        completedSessions: t,
        aborted: true,
        elapsedSec: e,
        chatNoteText: xe("pomoChatNoteAborted", {
          task: Qe,
          elapsed: o,
          completed: t,
          total: it
        })
      });
    }
    gt(false);
    tt(true);
    Bo(false);
    Mo("");
    Lo("");
    Wo(null);
    if ((t = Dt.current) != null) {
      t.pause();
    }
    or();
    const r = (It == null ? undefined : It.complete) || "本次专注结束啦，表现很棒！";
    Ko(r);
    rr(r);
    yt(true);
    Ct(null);
    To("");
    Ae();
    B();
    if (o) {
      me(o);
    }
  };
  const gr = z.useCallback(() => {
    Bo(false);
    Mo("");
    Lo("");
    Wo(null);
    yt(true);
    if (wt) {
      const e = (It == null ? undefined : It.complete) || "太棒了！完成了全部番茄，你真厉害！";
      Ko(e);
      rr(e);
      Ct(null);
    }
  }, [wt, It, Ko, rr]);
  z.useEffect(() => {
    if (Po && zo && !Uo.current && !Yo.current) {
      Yo.current = true;
      (async () => {
        try {
          const e = Tt.current || (await n());
          const t = (await s({
            messages: [{
              role: "system",
              content: "You analyze anime/illustration images. Identify the main character's visible body parts and return their bounding box positions as percentages (0-100) of image dimensions. Return ONLY a JSON array. Each element: {\"part\":\"<name>\",\"x\":<center_x%>,\"y\":<center_y%>,\"w\":<width%>,\"h\":<height%>}. part must be one of: hair, forehead, eye, nose, mouth, ear, cheek, neck, chest, waist, hand, arm, shoulder. Only include body parts of the CHARACTER (not viewer/background). Be precise — boxes should tightly fit each body part without overlapping unrelated areas. No markdown, no explanation."
            }, {
              role: "user",
              content: [{
                type: "text",
                text: "Analyze this anime character image. Return precise bounding boxes for each visible body part as a JSON array. Make boxes tight — do not let body part boxes extend into background or other objects."
              }, {
                type: "image_url",
                image_url: {
                  url: zo,
                  detail: "auto"
                }
              }]
            }],
            settings: e,
            preferStreaming: false
          })).replace(/```json?\n?/g, "").replace(/```/g, "").trim();
          const o = JSON.parse(t);
          if (Array.isArray(o) && o.length > 0) {
            Uo.current = o;
            console.log("[Pomodoro] 身體部位分析完成:", o.map(e => `${e.part}(${e.x},${e.y})`).join(", "));
          }
        } catch (e) {
          console.warn("[Pomodoro] 身體部位分析失敗:", e);
        }
        Yo.current = false;
      })();
    }
  }, [Po, zo]);
  const mr = z.useCallback(e => {
    if (!Po || !(It == null ? undefined : It.touch)) {
      return;
    }
    const t = e.currentTarget.getBoundingClientRect();
    const o = (e.clientX - t.left) / t.width * 100;
    const r = (e.clientY - t.top) / t.height * 100;
    const n = ((e, t) => {
      const o = Uo.current;
      if (o && o.length > 0) {
        let r = null;
        let n = Infinity;
        for (const a of o) {
          if (e >= a.x - a.w / 2 && e <= a.x + a.w / 2 && t >= a.y - a.h / 2 && t <= a.y + a.h / 2) {
            const e = a.w * a.h;
            if (e < n) {
              n = e;
              r = a.part;
            }
          }
        }
        if (r) {
          return r;
        }
      }
      const r = Math.abs(e - 50);
      if (t < 10) {
        return "hair";
      } else if (t < 18 && r < 25) {
        return "forehead";
      } else if (t < 18) {
        return "hair";
      } else if (t >= 18 && t < 32 && r < 30) {
        if (t < 23) {
          if (r < 8) {
            return "nose";
          } else if (r < 22) {
            return "eye";
          } else {
            return "ear";
          }
        } else if (t < 26) {
          if (r < 10) {
            return "nose";
          } else if (r < 22) {
            return "cheek";
          } else {
            return "ear";
          }
        } else if (t < 30) {
          if (r < 10) {
            return "mouth";
          } else if (r < 22) {
            return "cheek";
          } else {
            return "ear";
          }
        } else {
          return "face";
        }
      } else if (t >= 18 && t < 32 && r >= 30) {
        if (t < 25) {
          return "ear";
        } else {
          return "hair";
        }
      } else if (t >= 32 && t < 37 && r < 15) {
        return "neck";
      } else if (t >= 32 && t < 42 && r >= 15) {
        return "shoulder";
      } else if (t >= 37 && t < 52 && r < 25) {
        return "chest";
      } else if (t >= 42 && t < 65 && r >= 25) {
        return "arm";
      } else if (t >= 52 && t < 68 && r < 25) {
        return "waist";
      } else if (t >= 65 && r >= 20 || t >= 68) {
        return "hand";
      } else {
        return "waist";
      }
    })(o, r);
    const a = ({
      hair: ["hair", "head", "face"],
      forehead: ["forehead", "head", "face"],
      eye: ["eye", "face", "cheek"],
      nose: ["nose", "face"],
      mouth: ["mouth", "face"],
      ear: ["ear", "face", "head"],
      cheek: ["cheek", "face"],
      neck: ["neck", "shoulder", "chest"],
      head: ["head", "hair", "face"],
      face: ["face", "cheek", "head"],
      chest: ["chest"],
      waist: ["waist"],
      hand: ["hand", "arm"],
      arm: ["arm", "hand"],
      shoulder: ["shoulder", "arm"]
    }[n] || [n, "arm"]).reduce((e, t) => e || It.touch[t], null) || "嗯？";
    Lo(n);
    Mo(a);
    Wo({
      x: o,
      y: r
    });
    Ko(a);
    rr(a);
    setTimeout(() => Wo(null), 800);
  }, [Po, It, Ko, rr]);
  const hr = e => {
    const t = Math.floor(e / 3600);
    const o = Math.floor(e % 3600 / 60);
    const r = e % 60;
    if (t > 0) {
      return `${String(t).padStart(2, "0")}:${String(o).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
    } else {
      return `${String(o).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
    }
  };
  const xr = `${Xe.getFullYear()}/${String(Xe.getMonth() + 1).padStart(2, "0")}/${String(Xe.getDate()).padStart(2, "0")}(周${["日", "一", "二", "三", "四", "五", "六"][Xe.getDay()]})`;
  const fr = `${String(Xe.getHours() % 12 || 12).padStart(2, "0")}:${String(Xe.getMinutes()).padStart(2, "0")}`;
  const br = Xe.getHours() >= 12 ? "下午" : "上午";
  const yr = zo || Io || (je == null ? undefined : je.chatBackground) || (je == null ? undefined : je.image) || "";
  const vr = Ee === "alarm" ? "" : yr;
  return T.jsxs("div", {
    id: "pomodoro-screen",
    className: "screen " + (he ? "active" : ""),
    style: {
      backgroundColor: "#1a202c",
      color: "#fff",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    },
    children: [T.jsx("audio", {
      ref: Dt,
      loop: true
    }), T.jsx("audio", {
      ref: qo
    }), T.jsx("div", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: vr ? `url(${vr})` : "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: et || Ee === "alarm" ? "brightness(0.5) blur(10px)" : "brightness(0.8)",
        transition: "filter 0.5s",
        zIndex: 0
      }
    }), T.jsxs("div", {
      className: "screen-header",
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        background: "transparent",
        display: Ee !== "pomodoro" || et ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center"
      },
      children: [T.jsx("div", {
        className: "back-btn",
        onClick: () => me("home-screen"),
        style: {
          color: "#fff",
          position: "absolute",
          left: 0
        },
        children: T.jsx(K, {
          size: 24
        })
      }), (et || Ee === "alarm") && T.jsxs("div", {
        style: {
          display: "flex",
          gap: "12px"
        },
        children: [T.jsxs("button", {
          style: {
            padding: "8px 20px",
            borderRadius: "20px",
            border: "none",
            background: Ee === "pomodoro" ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            color: Ee === "pomodoro" ? "#fff" : "rgba(255,255,255,0.6)",
            fontSize: "14px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            transition: "all 0.3s",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
          },
          onClick: () => De("pomodoro"),
          children: [T.jsx(q, {
            size: 16
          }), " ", xe("pomodoroTabFocus")]
        }), T.jsxs("button", {
          style: {
            padding: "8px 20px",
            borderRadius: "20px",
            border: "none",
            background: Ee === "alarm" ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            color: Ee === "alarm" ? "#fff" : "rgba(255,255,255,0.6)",
            fontSize: "14px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            transition: "all 0.3s",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
          },
          onClick: () => De("alarm"),
          children: [T.jsx(X, {
            size: 16
          }), " ", xe("pomodoroTabAlarm")]
        })]
      }), (et || Ee === "alarm") && T.jsx("button", {
        onClick: () => Mt(e => !e),
        style: {
          position: "absolute",
          right: "12px",
          background: Ft ? "rgba(246,135,179,0.2)" : "rgba(255,255,255,0.1)",
          border: "none",
          borderRadius: "50%",
          width: "36px",
          height: "36px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: Ft ? "#F687B3" : "#fff",
          cursor: "pointer",
          transition: "all 0.2s",
          zIndex: 5
        },
        children: T.jsx(Q, {
          size: 18
        })
      })]
    }), Ft && T.jsx("div", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 25
      },
      onClick: () => Mt(false),
      children: T.jsxs("div", {
        style: {
          position: "absolute",
          top: "80px",
          right: "12px",
          width: "260px",
          maxHeight: "calc(100% - 100px - var(--kb-h, 0px))",
          overflowY: "auto",
          background: "rgba(20,20,30,0.95)",
          borderRadius: "20px",
          padding: "20px",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
          animation: "fadeIn 0.2s",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          WebkitOverflowScrolling: "touch"
        },
        onClick: e => e.stopPropagation(),
        children: [T.jsx("div", {
          style: {
            fontSize: "15px",
            fontWeight: "600",
            color: "#fff",
            paddingBottom: "4px",
            borderBottom: "1px solid rgba(255,255,255,0.08)"
          },
          children: xe("pomodoroSettingsTitle")
        }), T.jsxs("div", {
          children: [T.jsx("div", {
            style: {
              fontSize: "13px",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "8px"
            },
            children: xe("pomodoroNoiseLabel")
          }), T.jsx("div", {
            style: {
              display: "flex",
              gap: "6px",
              flexWrap: "wrap"
            },
            children: ro.map(e => T.jsx("button", {
              onClick: () => ao(e.id),
              style: {
                padding: "6px 12px",
                borderRadius: "8px",
                border: "1px solid",
                borderColor: no === e.id ? "#F687B3" : "rgba(255,255,255,0.1)",
                background: no === e.id ? "rgba(246,135,179,0.15)" : "rgba(255,255,255,0.05)",
                color: no === e.id ? "#F687B3" : "rgba(255,255,255,0.7)",
                fontSize: "12px",
                cursor: "pointer",
                transition: "all 0.2s"
              },
              children: e.label
            }, e.id))
          })]
        }), T.jsxs("div", {
          children: [T.jsx("div", {
            style: {
              fontSize: "13px",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "8px"
            },
            children: xe("pomodoroCustomNoise")
          }), eo.length > 0 && T.jsx("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              marginBottom: "10px"
            },
            children: eo.map(e => T.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "6px 10px",
                borderRadius: "8px",
                background: "rgba(255,255,255,0.05)"
              },
              children: [T.jsx("span", {
                style: {
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.7)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  flex: 1
                },
                children: e.label
              }), T.jsx("button", {
                onClick: () => {
                  if (no === e.id) {
                    ao("none");
                  }
                  to(t => t.filter(t => t.id !== e.id));
                },
                style: {
                  background: "none",
                  border: "none",
                  color: "rgba(255,255,255,0.3)",
                  cursor: "pointer",
                  padding: "2px 4px",
                  fontSize: "14px"
                },
                children: "✕"
              })]
            }, e.id))
          }), _t ? T.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              padding: "10px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.05)"
            },
            children: [T.jsx("input", {
              value: Ot,
              onChange: e => Wt(e.target.value),
              placeholder: "名稱",
              maxLength: 10,
              style: {
                padding: "6px 10px",
                borderRadius: "6px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                fontSize: "12px",
                outline: "none"
              }
            }), T.jsx("input", {
              value: Gt || Ut,
              onChange: e => {
                Yt(e.target.value);
                Vt("");
              },
              placeholder: "音頻 URL（可選，或上傳檔案）",
              readOnly: !!Gt,
              style: {
                padding: "6px 10px",
                borderRadius: "6px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                fontSize: "12px",
                outline: "none"
              }
            }), T.jsx("input", {
              ref: Ht,
              type: "file",
              accept: "audio/*",
              style: {
                display: "none"
              },
              onChange: e => {
                var t;
                const o = (t = e.target.files) == null ? undefined : t[0];
                if (!o) {
                  return;
                }
                const r = new FileReader();
                r.onload = () => {
                  Yt(r.result);
                  Vt(o.name);
                };
                r.readAsDataURL(o);
                if (!Ot) {
                  Wt(o.name.replace(/\.[^.]+$/, "").slice(0, 10));
                }
              }
            }), T.jsxs("div", {
              style: {
                display: "flex",
                gap: "6px"
              },
              children: [T.jsx("button", {
                onClick: () => {
                  var e;
                  if ((e = Ht.current) == null) {
                    return undefined;
                  } else {
                    return e.click();
                  }
                },
                style: {
                  flex: 1,
                  padding: "6px",
                  borderRadius: "6px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "11px",
                  cursor: "pointer"
                },
                children: xe("pomodoroUploadFile")
              }), T.jsx("button", {
                onClick: () => {
                  if (!Ot.trim() || !Ut) {
                    return;
                  }
                  const e = "custom_" + Date.now();
                  to(t => [...t, {
                    id: e,
                    label: Ot.trim(),
                    src: Ut
                  }]);
                  Wt("");
                  Yt("");
                  Vt("");
                  Lt(false);
                },
                style: {
                  flex: 1,
                  padding: "6px",
                  borderRadius: "6px",
                  border: "none",
                  background: Ot.trim() && Ut ? "#F687B3" : "rgba(255,255,255,0.1)",
                  color: "#fff",
                  fontSize: "11px",
                  cursor: "pointer",
                  transition: "all 0.2s"
                },
                children: xe("pomodoroConfirmAdd")
              })]
            }), T.jsx("button", {
              onClick: () => {
                Lt(false);
                Wt("");
                Yt("");
                Vt("");
              },
              style: {
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.35)",
                fontSize: "11px",
                cursor: "pointer",
                textAlign: "center"
              },
              children: xe("pomodoroCancel")
            })]
          }) : T.jsx("button", {
            onClick: () => Lt(true),
            style: {
              width: "100%",
              padding: "8px",
              borderRadius: "8px",
              border: "1px dashed rgba(255,255,255,0.2)",
              background: "transparent",
              color: "rgba(255,255,255,0.5)",
              fontSize: "12px",
              cursor: "pointer",
              transition: "all 0.2s"
            },
            children: xe("pomodoroAddCustomSound")
          })]
        }), T.jsxs("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "14px"
          },
          children: [T.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            },
            children: [T.jsxs("div", {
              children: [T.jsx("div", {
                style: {
                  fontSize: "13px",
                  color: "#fff"
                },
                children: xe("pomodoroAutoSelectNoise")
              }), T.jsx("div", {
                style: {
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.35)"
                },
                children: xe("pomodoroAutoSelectNoiseDesc")
              })]
            }), T.jsxs("label", {
              className: "switch-dark",
              style: {
                margin: 0,
                transform: "scale(0.85)"
              },
              children: [T.jsx("input", {
                type: "checkbox",
                checked: io,
                onChange: () => so(e => !e)
              }), T.jsx("span", {
                className: "slider-dark round"
              })]
            })]
          }), T.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            },
            children: [T.jsxs("div", {
              children: [T.jsx("div", {
                style: {
                  fontSize: "13px",
                  color: "#fff"
                },
                children: xe("pomodoroAiCompanionImage")
              }), T.jsx("div", {
                style: {
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.35)"
                },
                children: xe("pomodoroAiCompanionImageDesc")
              })]
            }), T.jsxs("label", {
              className: "switch-dark",
              style: {
                margin: 0,
                transform: "scale(0.85)"
              },
              children: [T.jsx("input", {
                type: "checkbox",
                checked: lo,
                onChange: () => co(e => !e)
              }), T.jsx("span", {
                className: "slider-dark round"
              })]
            })]
          }), lo && T.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            },
            children: [T.jsxs("div", {
              children: [T.jsx("div", {
                style: {
                  fontSize: "13px",
                  color: "#fff"
                },
                children: xe("pomodoroImageSize")
              }), T.jsx("div", {
                style: {
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.35)"
                },
                children: xe("pomodoroImageSizeDesc")
              })]
            }), T.jsxs("select", {
              value: go,
              onChange: e => mo(e.target.value),
              style: {
                padding: "4px 8px",
                borderRadius: "6px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                fontSize: "12px",
                outline: "none"
              },
              children: [T.jsx("option", {
                value: "",
                children: xe("pomodoroImageSizeDefault")
              }), T.jsx("option", {
                value: "384x640",
                children: "384x640 (小)"
              }), T.jsx("option", {
                value: "512x512",
                children: "512x512"
              }), T.jsx("option", {
                value: "512x768",
                children: "512x768"
              }), T.jsx("option", {
                value: "640x384",
                children: "640x384 (小)"
              }), T.jsx("option", {
                value: "768x512",
                children: "768x512"
              }), T.jsx("option", {
                value: "768x768",
                children: "768x768"
              }), T.jsx("option", {
                value: "832x1216",
                children: "832x1216"
              }), T.jsx("option", {
                value: "1024x1024",
                children: "1024x1024"
              }), T.jsx("option", {
                value: "1024x1536",
                children: "1024x1536"
              })]
            })]
          }), T.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            },
            children: [T.jsxs("div", {
              children: [T.jsx("div", {
                style: {
                  fontSize: "13px",
                  color: "#fff"
                },
                children: xe("pomodoroCharacterVoice")
              }), T.jsx("div", {
                style: {
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.35)"
                },
                children: xe("pomodoroCharacterVoiceDesc")
              })]
            }), T.jsxs("label", {
              className: "switch-dark",
              style: {
                margin: 0,
                transform: "scale(0.85)"
              },
              children: [T.jsx("input", {
                type: "checkbox",
                checked: po,
                onChange: () => uo(e => !e)
              }), T.jsx("span", {
                className: "slider-dark round"
              })]
            })]
          }), T.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            },
            children: [T.jsx("div", {
              children: T.jsx("div", {
                style: {
                  fontSize: "13px",
                  color: "#fff"
                },
                children: xe("pomodoroLogToCalendar")
              })
            }), T.jsxs("label", {
              className: "switch-dark",
              style: {
                margin: 0,
                transform: "scale(0.85)"
              },
              children: [T.jsx("input", {
                type: "checkbox",
                checked: ho,
                onChange: () => xo(e => !e)
              }), T.jsx("span", {
                className: "slider-dark round"
              })]
            })]
          }), T.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            },
            children: [T.jsxs("div", {
              children: [T.jsx("div", {
                style: {
                  fontSize: "13px",
                  color: "#fff"
                },
                children: xe("pomodoroCountUpMode")
              }), T.jsx("div", {
                style: {
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.35)"
                },
                children: xe("pomodoroCountUpModeDesc")
              })]
            }), T.jsxs("label", {
              className: "switch-dark",
              style: {
                margin: 0,
                transform: "scale(0.85)"
              },
              children: [T.jsx("input", {
                type: "checkbox",
                checked: fo,
                onChange: () => bo(e => !e)
              }), T.jsx("span", {
                className: "slider-dark round"
              })]
            })]
          })]
        }), T.jsxs("div", {
          children: [T.jsx("div", {
            style: {
              fontSize: "13px",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "8px"
            },
            children: xe("pomodoroSfxLabel")
          }), T.jsxs("div", {
            style: {
              marginBottom: "10px"
            },
            children: [T.jsx("div", {
              style: {
                fontSize: "12px",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "6px"
              },
              children: xe("pomodoroSfxRound")
            }), T.jsxs("div", {
              style: {
                display: "flex",
                gap: "6px",
                alignItems: "center"
              },
              children: [T.jsx("input", {
                value: yo,
                onChange: e => vo(e.target.value),
                placeholder: xe("pomodoroSfxUrlPlaceholder"),
                style: {
                  flex: 1,
                  padding: "6px 10px",
                  borderRadius: "6px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  fontSize: "11px",
                  outline: "none",
                  minWidth: 0
                }
              }), T.jsx("input", {
                ref: ko,
                type: "file",
                accept: "audio/*",
                style: {
                  display: "none"
                },
                onChange: e => {
                  var t;
                  const o = (t = e.target.files) == null ? undefined : t[0];
                  if (!o) {
                    return;
                  }
                  const r = new FileReader();
                  r.onload = () => vo(r.result);
                  r.readAsDataURL(o);
                }
              }), T.jsx("button", {
                onClick: () => {
                  var e;
                  if ((e = ko.current) == null) {
                    return undefined;
                  } else {
                    return e.click();
                  }
                },
                style: {
                  padding: "6px 8px",
                  borderRadius: "6px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "11px",
                  cursor: "pointer",
                  whiteSpace: "nowrap"
                },
                children: xe("pomodoroUploadFile")
              }), yo && T.jsxs(T.Fragment, {
                children: [T.jsx("button", {
                  onClick: () => Pt(yo),
                  style: {
                    padding: "6px",
                    borderRadius: "6px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.08)",
                    color: "#F687B3",
                    fontSize: "11px",
                    cursor: "pointer"
                  },
                  children: "▶"
                }), T.jsx("button", {
                  onClick: () => vo(""),
                  style: {
                    padding: "6px",
                    borderRadius: "6px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.08)",
                    color: "rgba(252,129,129,0.8)",
                    fontSize: "11px",
                    cursor: "pointer"
                  },
                  children: "✕"
                })]
              })]
            }), !yo && T.jsx("div", {
              style: {
                fontSize: "10px",
                color: "rgba(255,255,255,0.25)",
                marginTop: "3px"
              },
              children: xe("pomodoroSfxDefault")
            })]
          }), T.jsxs("div", {
            children: [T.jsx("div", {
              style: {
                fontSize: "12px",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "6px"
              },
              children: xe("pomodoroSfxAll")
            }), T.jsxs("div", {
              style: {
                display: "flex",
                gap: "6px",
                alignItems: "center"
              },
              children: [T.jsx("input", {
                value: So,
                onChange: e => wo(e.target.value),
                placeholder: xe("pomodoroSfxUrlPlaceholder"),
                style: {
                  flex: 1,
                  padding: "6px 10px",
                  borderRadius: "6px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  fontSize: "11px",
                  outline: "none",
                  minWidth: 0
                }
              }), T.jsx("input", {
                ref: jo,
                type: "file",
                accept: "audio/*",
                style: {
                  display: "none"
                },
                onChange: e => {
                  var t;
                  const o = (t = e.target.files) == null ? undefined : t[0];
                  if (!o) {
                    return;
                  }
                  const r = new FileReader();
                  r.onload = () => wo(r.result);
                  r.readAsDataURL(o);
                }
              }), T.jsx("button", {
                onClick: () => {
                  var e;
                  if ((e = jo.current) == null) {
                    return undefined;
                  } else {
                    return e.click();
                  }
                },
                style: {
                  padding: "6px 8px",
                  borderRadius: "6px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "11px",
                  cursor: "pointer",
                  whiteSpace: "nowrap"
                },
                children: xe("pomodoroUploadFile")
              }), So && T.jsxs(T.Fragment, {
                children: [T.jsx("button", {
                  onClick: () => Pt(So),
                  style: {
                    padding: "6px",
                    borderRadius: "6px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.08)",
                    color: "#F687B3",
                    fontSize: "11px",
                    cursor: "pointer"
                  },
                  children: "▶"
                }), T.jsx("button", {
                  onClick: () => wo(""),
                  style: {
                    padding: "6px",
                    borderRadius: "6px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.08)",
                    color: "rgba(252,129,129,0.8)",
                    fontSize: "11px",
                    cursor: "pointer"
                  },
                  children: "✕"
                })]
              })]
            }), !So && T.jsx("div", {
              style: {
                fontSize: "10px",
                color: "rgba(255,255,255,0.25)",
                marginTop: "3px"
              },
              children: xe("pomodoroSfxDefault")
            })]
          })]
        }), T.jsxs("div", {
          children: [T.jsx("div", {
            style: {
              fontSize: "13px",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "8px"
            },
            children: xe("pomodoroFocusBg")
          }), Io ? T.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "10px"
            },
            children: [T.jsx("div", {
              style: {
                width: "60px",
                height: "40px",
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.15)",
                flexShrink: 0
              },
              children: T.jsx("img", {
                decoding: "async",
                src: Io,
                alt: "",
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }
              })
            }), T.jsx("button", {
              onClick: () => Ro(true),
              style: {
                flex: 1,
                padding: "8px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.7)",
                fontSize: "12px",
                cursor: "pointer"
              },
              children: xe("pomodoroChangeBg")
            }), T.jsx("button", {
              onClick: () => Co(""),
              style: {
                padding: "8px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.05)",
                color: "rgba(252,129,129,0.8)",
                fontSize: "12px",
                cursor: "pointer"
              },
              children: xe("pomodoroRemoveBg")
            })]
          }) : T.jsx("button", {
            onClick: () => Ro(true),
            style: {
              width: "100%",
              padding: "8px",
              borderRadius: "8px",
              border: "1px dashed rgba(255,255,255,0.2)",
              background: "transparent",
              color: "rgba(255,255,255,0.5)",
              fontSize: "12px",
              cursor: "pointer",
              transition: "all 0.2s"
            },
            children: xe("pomodoroUploadCustomBg")
          }), T.jsx("div", {
            style: {
              fontSize: "11px",
              color: "rgba(255,255,255,0.3)",
              marginTop: "4px"
            },
            children: xe("pomodoroDefaultCharBg")
          })]
        })]
      })
    }), T.jsx(A, {
      isOpen: $o,
      onClose: () => Ro(false),
      onImageSelect: e => {
        Co(e);
        Ro(false);
      },
      title: "上傳專注背景圖"
    }), Jt && (() => {
      const e = ["all", ...Array.from(new Set(Se.map(e => e.group || xe("pomodoroOther"))))];
      const t = qt.trim().toLowerCase();
      const o = Se.filter(e => !t || e.name.toLowerCase().includes(t) || (e.aliases || "").toLowerCase().includes(t)).filter(e => Qt === "all" || (e.group || xe("pomodoroOther")) === Qt);
      return T.jsx("div", {
        style: {
          position: "absolute",
          inset: 0,
          zIndex: 30,
          background: "rgba(0,0,0,0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "fadeIn 0.2s"
        },
        onClick: () => Kt(false),
        children: T.jsxs("div", {
          style: {
            width: "90%",
            maxWidth: "360px",
            maxHeight: "75vh",
            background: "rgba(20,20,30,0.95)",
            borderRadius: "24px",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
          },
          onClick: e => e.stopPropagation(),
          children: [T.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px 12px"
            },
            children: [T.jsx("span", {
              style: {
                fontSize: "16px",
                fontWeight: "600",
                color: "#fff"
              },
              children: xe("pomodoroSelectChar")
            }), T.jsx("button", {
              onClick: () => Kt(false),
              style: {
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.4)",
                cursor: "pointer",
                padding: "4px"
              },
              children: T.jsx(Z, {
                size: 18
              })
            })]
          }), T.jsxs("div", {
            style: {
              padding: "0 16px 12px",
              position: "relative"
            },
            children: [T.jsx(ee, {
              size: 14,
              style: {
                position: "absolute",
                left: "28px",
                top: "10px",
                color: "rgba(255,255,255,0.3)",
                pointerEvents: "none"
              }
            }), T.jsx("input", {
              value: qt,
              onChange: e => Xt(e.target.value),
              placeholder: xe("pomodoroSearchChar"),
              style: {
                width: "100%",
                padding: "8px 12px 8px 32px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.06)",
                color: "#fff",
                fontSize: "13px",
                outline: "none"
              }
            })]
          }), e.length > 2 && T.jsx("div", {
            style: {
              padding: "0 16px 10px",
              overflowX: "auto",
              scrollbarWidth: "none"
            },
            children: T.jsx("div", {
              style: {
                display: "flex",
                gap: "6px"
              },
              children: e.map(e => T.jsx("button", {
                onClick: () => Zt(e),
                style: {
                  padding: "4px 12px",
                  borderRadius: "8px",
                  border: "1px solid",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  borderColor: Qt === e ? "#F687B3" : "rgba(255,255,255,0.1)",
                  background: Qt === e ? "rgba(246,135,179,0.15)" : "rgba(255,255,255,0.05)",
                  color: Qt === e ? "#F687B3" : "rgba(255,255,255,0.6)",
                  fontSize: "12px",
                  cursor: "pointer",
                  transition: "all 0.2s"
                },
                children: e === "all" ? xe("pomodoroAll") : e
              }, e))
            })
          }), T.jsx("div", {
            style: {
              flex: 1,
              overflowY: "auto",
              padding: "4px 16px 16px",
              scrollbarWidth: "thin"
            },
            children: o.length === 0 ? T.jsx("div", {
              style: {
                textAlign: "center",
                padding: "32px 0",
                color: "rgba(255,255,255,0.35)",
                fontSize: "13px"
              },
              children: xe("pomodoroNoCharFound")
            }) : T.jsx("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px"
              },
              children: o.map(e => {
                const t = String(e.id) === String(we);
                return T.jsxs("button", {
                  onClick: () => {
                    ke(e.id);
                    Kt(false);
                  },
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "6px",
                    padding: "10px 4px",
                    borderRadius: "14px",
                    border: "2px solid",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    borderColor: t ? "#F687B3" : "transparent",
                    background: t ? "rgba(246,135,179,0.1)" : "rgba(255,255,255,0.03)"
                  },
                  children: [T.jsx("div", {
                    style: {
                      width: "52px",
                      height: "52px",
                      borderRadius: "26px",
                      overflow: "hidden",
                      border: "2px solid",
                      borderColor: t ? "#F687B3" : "rgba(255,255,255,0.15)",
                      boxShadow: t ? "0 0 12px rgba(246,135,179,0.4)" : "none"
                    },
                    children: T.jsx("img", {
                      decoding: "async",
                      src: e.image || F(e.name),
                      alt: e.name,
                      style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }
                    })
                  }), T.jsx("span", {
                    style: {
                      fontSize: "11px",
                      fontWeight: t ? "600" : "400",
                      color: t ? "#F687B3" : "rgba(255,255,255,0.7)",
                      maxWidth: "100%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    },
                    children: e.name
                  })]
                }, e.id);
              })
            })
          })]
        })
      });
    })(), T.jsxs("div", {
      style: {
        position: "relative",
        zIndex: 2,
        flex: 1,
        minHeight: 0,
        overflowY: Ee !== "pomodoro" || et ? "auto" : "hidden",
        paddingTop: Ee !== "pomodoro" || et ? "80px" : 0,
        paddingBottom: "var(--kb-h, 0px)",
        transition: "padding-bottom 0.2s ease"
      },
      children: [Ee === "alarm" && T.jsxs("div", {
        style: {
          padding: "20px",
          animation: "fadeIn 0.3s"
        },
        children: [T.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px"
          },
          children: [T.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "10px"
            },
            children: [T.jsx("h2", {
              style: {
                fontSize: "20px",
                margin: 0,
                fontWeight: "500"
              },
              children: xe("pomodoroAlarmList")
            }), Me && T.jsxs("span", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "12px",
                color: "#68D391",
                background: "rgba(104,211,145,0.15)",
                padding: "2px 8px",
                borderRadius: "8px"
              },
              children: [T.jsx(te, {
                size: 12
              }), " ", xe("pomodoroCloud")]
            }), _e && T.jsxs("span", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "12px",
                color: "#68D391",
                background: "rgba(104,211,145,0.15)",
                padding: "2px 8px",
                borderRadius: "8px"
              },
              children: [T.jsx(te, {
                size: 12
              }), " ", xe("pomodoroLocalAlarm")]
            })]
          }), T.jsx("button", {
            onClick: () => {
              const e = new Date();
              e.setMinutes(e.getMinutes() + 1);
              const t = String(e.getHours()).padStart(2, "0");
              const o = String(e.getMinutes()).padStart(2, "0");
              const r = Se.length > 0 ? String(Se[0].id) : null;
              const n = {
                id: Date.now(),
                time: `${t}:${o}`,
                label: "新鬧鐘",
                enabled: true,
                characterId: r,
                repeatDays: []
              };
              const a = [...Pe, n];
              Be(a);
              Ge(a);
              if (Fe) {
                Ke(n);
                He(a);
              }
            },
            style: {
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
              borderRadius: "16px",
              width: "40px",
              height: "40px",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "all 0.2s"
            },
            children: T.jsx(oe, {
              size: 20
            })
          })]
        }), Pe.length === 0 ? T.jsxs("div", {
          style: {
            textAlign: "center",
            padding: "80px 0",
            color: "rgba(255,255,255,0.5)"
          },
          children: [T.jsx(X, {
            size: 48,
            opacity: 0.5,
            style: {
              marginBottom: "16px"
            }
          }), T.jsx("div", {
            children: xe("pomodoroClickAddAlarm")
          })]
        }) : T.jsx("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          },
          children: Pe.map(e => {
            const t = Se.find(t => String(t.id) === String(e.characterId));
            return T.jsxs("div", {
              style: {
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "24px",
                padding: "20px"
              },
              children: [T.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                },
                children: [T.jsxs("div", {
                  style: {
                    flex: 1
                  },
                  children: [T.jsx("input", {
                    type: "time",
                    value: e.time,
                    onChange: t => {
                      o = e.id;
                      r = t.target.value;
                      return qe(o, {
                        time: r
                      });
                      var o;
                      var r;
                    },
                    style: {
                      background: "transparent",
                      border: "none",
                      color: e.enabled ? "#fff" : "rgba(255,255,255,0.3)",
                      fontSize: "36px",
                      fontWeight: "300",
                      outline: "none",
                      width: "100%",
                      fontFamily: "var(--font-family)",
                      transition: "color 0.3s"
                    }
                  }), T.jsx("input", {
                    type: "text",
                    value: e.label,
                    onChange: t => ((e, t) => {
                      qe(e, {
                        label: t
                      });
                      const o = Pe.find(t => t.id === e);
                      if (o) {
                        Ke({
                          ...o,
                          label: t
                        });
                      }
                    })(e.id, t.target.value),
                    placeholder: xe("pomodoroAddLabel"),
                    style: {
                      background: "transparent",
                      border: "none",
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "14px",
                      outline: "none",
                      width: "100%",
                      marginTop: "4px"
                    }
                  })]
                }), T.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "16px"
                  },
                  children: [T.jsxs("label", {
                    className: "switch-dark",
                    style: {
                      margin: 0
                    },
                    children: [T.jsx("input", {
                      type: "checkbox",
                      checked: e.enabled,
                      onChange: () => {
                        t = e.id;
                        return qe(t, {
                          enabled: !((o = Pe.find(e => e.id === t)) == null ? undefined : o.enabled)
                        });
                        var t;
                        var o;
                      }
                    }), T.jsx("span", {
                      className: "slider-dark round"
                    })]
                  }), T.jsx("button", {
                    onClick: () => (e => {
                      const t = Pe.filter(t => t.id !== e);
                      Be(t);
                      Ge(t);
                      if (Fe) {
                        He(t);
                      }
                    })(e.id),
                    style: {
                      background: "transparent",
                      border: "none",
                      color: "rgba(255,255,255,0.4)",
                      cursor: "pointer"
                    },
                    children: T.jsx(re, {
                      size: 20
                    })
                  })]
                })]
              }), Se.length > 0 && T.jsxs("div", {
                style: {
                  marginTop: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                },
                children: [T.jsx("span", {
                  style: {
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.5)",
                    whiteSpace: "nowrap"
                  },
                  children: xe("pomodoroCharLabel")
                }), T.jsxs("div", {
                  style: {
                    position: "relative",
                    flex: 1
                  },
                  children: [T.jsxs("select", {
                    value: e.characterId || "",
                    onChange: t => ((e, t) => {
                      qe(e, {
                        characterId: t
                      });
                      const o = Pe.find(t => t.id === e);
                      if (o) {
                        Ke({
                          ...o,
                          characterId: t
                        });
                      }
                    })(e.id, t.target.value || null),
                    style: {
                      width: "100%",
                      padding: "8px 28px 8px 12px",
                      borderRadius: "12px",
                      border: "1px solid rgba(255,255,255,0.15)",
                      background: "rgba(255,255,255,0.08)",
                      color: "#fff",
                      fontSize: "13px",
                      outline: "none",
                      appearance: "none",
                      cursor: "pointer"
                    },
                    children: [T.jsx("option", {
                      value: "",
                      style: {
                        background: "#2d3748"
                      },
                      children: xe("pomodoroNoBinding")
                    }), Se.map(e => T.jsx("option", {
                      value: String(e.id),
                      style: {
                        background: "#2d3748"
                      },
                      children: e.name
                    }, e.id))]
                  }), T.jsx(ne, {
                    size: 14,
                    style: {
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                      color: "rgba(255,255,255,0.4)"
                    }
                  })]
                }), t && T.jsx("img", {
                  decoding: "async",
                  src: t.image || F(t.name),
                  style: {
                    width: "28px",
                    height: "28px",
                    borderRadius: "14px",
                    objectFit: "cover",
                    border: "1px solid rgba(255,255,255,0.2)"
                  }
                })]
              }), T.jsx("div", {
                style: {
                  marginTop: "10px",
                  display: "flex",
                  gap: "4px"
                },
                children: ["日", "一", "二", "三", "四", "五", "六"].map((t, o) => {
                  const r = (e.repeatDays || []).includes(o);
                  return T.jsx("button", {
                    onClick: () => ((e, t) => {
                      const o = Pe.find(t => t.id === e);
                      if (!o) {
                        return;
                      }
                      const r = o.repeatDays || [];
                      const n = r.includes(t) ? r.filter(e => e !== t) : [...r, t].sort();
                      qe(e, {
                        repeatDays: n
                      });
                    })(e.id, o),
                    style: {
                      flex: 1,
                      padding: "6px 0",
                      borderRadius: "8px",
                      border: "1px solid",
                      borderColor: r ? "#F687B3" : "rgba(255,255,255,0.1)",
                      background: r ? "rgba(246,135,179,0.2)" : "transparent",
                      color: r ? "#F687B3" : "rgba(255,255,255,0.5)",
                      fontSize: "12px",
                      cursor: "pointer",
                      transition: "all 0.2s"
                    },
                    children: t
                  }, o);
                })
              }), (e.repeatDays || []).length === 0 && T.jsx("div", {
                style: {
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.35)",
                  marginTop: "4px"
                },
                children: xe("pomodoroNoRepeat")
              })]
            }, e.id);
          })
        })]
      }), Ee === "pomodoro" && et && T.jsx("div", {
        style: {
          padding: "20px 24px",
          animation: "fadeIn 0.3s"
        },
        children: T.jsxs("div", {
          style: {
            background: "rgba(0,0,0,0.5)",
            borderRadius: "32px",
            padding: "32px 24px",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
          },
          children: [T.jsxs("div", {
            style: {
              textAlign: "center",
              marginBottom: "32px"
            },
            children: [T.jsxs("div", {
              style: {
                position: "relative",
                display: "inline-block",
                cursor: Se.length > 1 ? "pointer" : "default",
                marginBottom: "16px"
              },
              onClick: () => {
                if (Se.length > 1) {
                  Xt("");
                  Zt("all");
                  Kt(true);
                }
              },
              children: [T.jsx("img", {
                decoding: "async",
                src: (je == null ? undefined : je.image) || F(je == null ? undefined : je.name),
                alt: "",
                style: {
                  width: "80px",
                  height: "80px",
                  borderRadius: "40px",
                  objectFit: "cover",
                  border: "3px solid rgba(255,255,255,0.2)"
                }
              }), Se.length > 1 && T.jsx("div", {
                style: {
                  position: "absolute",
                  bottom: "-2px",
                  right: "-2px",
                  width: "26px",
                  height: "26px",
                  borderRadius: "13px",
                  background: "rgba(246,135,179,0.9)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "2px solid rgba(0,0,0,0.5)",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.3)"
                },
                children: T.jsx(ae, {
                  size: 12,
                  color: "#fff"
                })
              })]
            }), T.jsx("h2", {
              style: {
                fontSize: "20px",
                fontWeight: "500",
                margin: "0 0 8px 0"
              },
              children: xe("pomodoroCompanionTitle", {
                name: je == null ? undefined : je.name
              })
            }), T.jsx("p", {
              style: {
                fontSize: "14px",
                color: "rgba(255,255,255,0.6)",
                margin: 0
              },
              children: xe("pomodoroCompanionSubtitle")
            })]
          }), T.jsxs("div", {
            style: {
              marginBottom: "24px"
            },
            children: [T.jsx("label", {
              style: {
                fontSize: "14px",
                color: "rgba(255,255,255,0.7)",
                display: "block",
                marginBottom: "8px",
                fontWeight: "500"
              },
              children: xe("pomodoroTaskLabel")
            }), T.jsx("input", {
              type: "text",
              value: Qe,
              onChange: e => Ze(e.target.value),
              placeholder: xe("pomodoroTaskPlaceholder"),
              style: {
                width: "100%",
                padding: "16px 20px",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.05)",
                color: "#fff",
                fontSize: "16px",
                outline: "none"
              }
            })]
          }), T.jsxs("div", {
            style: {
              marginBottom: "24px"
            },
            children: [T.jsx("label", {
              style: {
                fontSize: "14px",
                color: "rgba(255,255,255,0.7)",
                display: "block",
                marginBottom: "8px",
                fontWeight: "500"
              },
              children: xe("pomodoroSessionCount")
            }), T.jsx("div", {
              style: {
                display: "flex",
                gap: "8px"
              },
              children: [1, 2, 3, 4].map(e => T.jsx("button", {
                onClick: () => st(e),
                style: {
                  flex: 1,
                  padding: "10px 0",
                  borderRadius: "12px",
                  border: "1px solid",
                  borderColor: it === e ? "#F687B3" : "rgba(255,255,255,0.1)",
                  background: it === e ? "rgba(246,135,179,0.2)" : "rgba(255,255,255,0.05)",
                  color: it === e ? "#F687B3" : "#fff",
                  fontSize: "15px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.2s"
                },
                children: e
              }, e))
            })]
          }), T.jsxs("div", {
            style: {
              marginBottom: "32px"
            },
            children: [T.jsx("label", {
              style: {
                fontSize: "14px",
                color: "rgba(255,255,255,0.7)",
                display: "block",
                marginBottom: "8px",
                fontWeight: "500"
              },
              children: xe("pomodoroDuration")
            }), T.jsxs("div", {
              style: {
                display: "flex",
                flexWrap: "wrap",
                gap: "8px"
              },
              children: [[5, 10, 15, 25, 45, 60].map(e => T.jsx("button", {
                onClick: () => dt(e),
                style: {
                  flex: "1 1 calc(33.333% - 8px)",
                  padding: "10px 0",
                  borderRadius: "12px",
                  border: "1px solid",
                  borderColor: lt === e ? "#F687B3" : "rgba(255,255,255,0.1)",
                  background: lt === e ? "rgba(246,135,179,0.2)" : "rgba(255,255,255,0.05)",
                  color: lt === e ? "#F687B3" : "#fff",
                  fontSize: "15px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  minWidth: "60px"
                },
                children: e
              }, e)), T.jsx("div", {
                style: {
                  flex: "1 1 100%",
                  marginTop: "4px",
                  display: "flex",
                  alignItems: "center"
                },
                children: T.jsx("input", {
                  type: "number",
                  min: "1",
                  placeholder: xe("pomodoroCustomMinutes"),
                  onChange: e => {
                    const t = parseInt(e.target.value);
                    if (!isNaN(t) && t > 0) {
                      dt(t);
                    }
                  },
                  style: {
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    border: "1px solid",
                    borderColor: [5, 10, 15, 25, 45, 60].includes(lt) ? "rgba(255,255,255,0.1)" : "#F687B3",
                    background: [5, 10, 15, 25, 45, 60].includes(lt) ? "rgba(255,255,255,0.05)" : "rgba(246,135,179,0.1)",
                    color: "#fff",
                    fontSize: "16px",
                    outline: "none",
                    transition: "all 0.2s"
                  }
                })
              })]
            })]
          }), T.jsx("button", {
            onClick: cr,
            disabled: lr,
            style: {
              width: "100%",
              padding: "18px 0",
              borderRadius: "20px",
              border: "none",
              background: lr ? "rgba(246,135,179,0.5)" : "linear-gradient(135deg, #F687B3 0%, #D53F8C 100%)",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: lr ? "wait" : "pointer",
              boxShadow: "0 8px 24px rgba(213,63,140,0.3)",
              transition: "all 0.2s",
              opacity: lr ? 0.8 : 1
            },
            onMouseDown: e => {
              if (!lr) {
                e.currentTarget.style.transform = "scale(0.97)";
              }
            },
            onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
            children: xe(lr ? "pomodoroGenerating" : "pomodoroStartFocus")
          })]
        })
      })]
    }), Ee === "pomodoro" && !et && !vt && T.jsxs("div", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 5
      },
      onClick: Po ? mr : () => yt(e => !e),
      children: [Po && Oo && T.jsxs(T.Fragment, {
        children: [T.jsx("div", {
          style: {
            position: "absolute",
            left: `${Oo.x}%`,
            top: `${Oo.y}%`,
            transform: "translate(-50%, -50%)",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            border: "2px solid rgba(246,135,179,0.9)",
            animation: "rippleExpand 0.8s ease-out forwards",
            pointerEvents: "none"
          }
        }), T.jsx("div", {
          style: {
            position: "absolute",
            left: `${Oo.x}%`,
            top: Oo.y - 6 + "%",
            transform: "translate(-50%, -100%)",
            background: "rgba(246,135,179,0.85)",
            color: "#fff",
            padding: "4px 14px",
            borderRadius: "14px",
            fontSize: "13px",
            fontWeight: "500",
            pointerEvents: "none",
            animation: "fadeInUp 0.3s ease-out",
            boxShadow: "0 4px 12px rgba(246,135,179,0.4)",
            whiteSpace: "nowrap"
          },
          children: {
            hair: "頭髮",
            forehead: "額頭",
            eye: "眼睛",
            nose: "鼻子",
            mouth: "嘴",
            ear: "耳朵",
            cheek: "臉頰",
            head: "頭",
            face: "臉",
            neck: "脖子",
            chest: "胸口",
            waist: "腰",
            hand: "手",
            arm: "手臂",
            shoulder: "肩膀"
          }[_o] || ""
        })]
      }), Po && !Fo && T.jsx("div", {
        style: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(8px)",
          padding: "12px 24px",
          borderRadius: "20px",
          color: "rgba(255,255,255,0.9)",
          fontSize: "15px",
          pointerEvents: "none",
          animation: "pulse 2s infinite",
          textShadow: "0 2px 8px rgba(0,0,0,0.5)"
        },
        children: xe("pomodoroTouchHint") || "觸碰角色試試看～"
      })]
    }), Ee === "pomodoro" && !et && !Po && T.jsx("div", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: "20px 24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        animation: "fadeIn 0.5s",
        pointerEvents: "none",
        zIndex: 6
      },
      children: T.jsxs("div", {
        style: {
          pointerEvents: "auto"
        },
        children: [T.jsx("div", {
          style: {
            paddingTop: "env(safe-area-inset-top, 12px)",
            marginBottom: "4px"
          },
          children: T.jsx("div", {
            className: "back-btn",
            onClick: e => {
              e.stopPropagation();
              me("home-screen");
            },
            style: {
              color: "#fff",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer"
            },
            children: T.jsx(K, {
              size: 24
            })
          })
        }), T.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start"
          },
          children: [T.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              textShadow: "0 2px 12px rgba(0,0,0,0.8)"
            },
            children: [T.jsx("div", {
              style: {
                fontSize: "16px",
                fontWeight: "500",
                color: "rgba(255,255,255,0.9)"
              },
              children: xr
            }), T.jsxs("div", {
              style: {
                fontSize: "56px",
                fontWeight: "300",
                lineHeight: "1",
                display: "flex",
                alignItems: "baseline",
                gap: "8px"
              },
              children: [T.jsx("span", {
                children: fr
              }), T.jsx("span", {
                style: {
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "rgba(255,255,255,0.8)"
                },
                children: br
              })]
            }), T.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "8px",
                opacity: 0.9
              },
              children: [T.jsx(ie, {
                size: 14,
                color: Nt ? "#fff" : "rgba(255,255,255,0.5)",
                style: {
                  animation: Nt ? "pulse 2s infinite" : "none"
                }
              }), T.jsx("span", {
                style: {
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.9)"
                },
                children: no === "none" ? xe("pomodoroNoSound") : `${((ue = ro.find(e => e.id === no)) == null ? undefined : ue.label) || xe("pomodoroNoiseLabel")}`
              })]
            }), No && T.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginTop: "6px",
                opacity: 0.8
              },
              children: [T.jsx(ae, {
                size: 12,
                color: "#F687B3",
                style: {
                  animation: "spin 1.5s linear infinite"
                }
              }), T.jsx("span", {
                style: {
                  fontSize: "12px",
                  color: "#F687B3"
                },
                children: xe("pomodoroGeneratingBg")
              })]
            })]
          }), T.jsxs("div", {
            style: {
              background: "rgba(0,0,0,0.5)",
              borderRadius: "50%",
              width: "120px",
              height: "120px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 12px 24px rgba(0,0,0,0.4)",
              position: "relative"
            },
            children: [T.jsxs("svg", {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                transform: "rotate(-90deg)"
              },
              children: [T.jsx("circle", {
                cx: "60",
                cy: "60",
                r: "54",
                fill: "none",
                stroke: "rgba(255,255,255,0.05)",
                strokeWidth: "4"
              }), T.jsx("circle", {
                cx: "60",
                cy: "60",
                r: "54",
                fill: "none",
                stroke: ot === "work" ? "#F687B3" : "#68D391",
                strokeWidth: "4",
                strokeDasharray: "339.29",
                strokeDashoffset: 339.29 - ct / (ot === "work" ? lt * 60 : nt % 4 == 0 ? 900 : 300) * 339.29,
                style: {
                  transition: "stroke-dashoffset 1s linear"
                },
                strokeLinecap: "round"
              })]
            }), T.jsx("div", {
              style: {
                fontSize: "12px",
                color: "rgba(255,255,255,0.7)",
                marginBottom: "2px"
              },
              children: xe("pomodoroCountStatus", {
                current: nt,
                total: it
              })
            }), T.jsx("div", {
              style: {
                fontSize: "24px",
                fontWeight: "500",
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "1px",
                textShadow: "0 2px 4px rgba(0,0,0,0.5)"
              },
              children: (() => {
                const e = ot === "work" ? lt * 60 : nt % 4 == 0 ? 900 : 300;
                return hr(fo ? Math.max(0, e - ct) : ct);
              })()
            }), T.jsx("div", {
              style: {
                fontSize: "13px",
                color: ot === "work" ? "#F687B3" : "#68D391",
                marginTop: "2px",
                maxWidth: "80px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              children: ot === "work" ? xe("pomodoroFocusingOn", {
                task: Qe
              }) : xe(nt % 4 == 0 ? "pomodoroLongBreak" : "pomodoroShortBreak")
            })]
          })]
        })]
      })
    }), Ee === "pomodoro" && !et && Po && T.jsxs("div", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        padding: "0 24px 20px",
        zIndex: 8,
        pointerEvents: "none"
      },
      children: [T.jsx("div", {
        style: {
          display: "flex",
          justifyContent: "center",
          marginBottom: "16px",
          pointerEvents: "auto"
        },
        children: T.jsxs("button", {
          onClick: e => {
            e.stopPropagation();
            gr();
          },
          style: {
            padding: "10px 28px",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(10px)",
            color: "#fff",
            fontSize: "14px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            transition: "all 0.2s",
            display: "flex",
            alignItems: "center",
            gap: "6px"
          },
          children: [T.jsx(Z, {
            size: 16
          }), ot === "break" ? `${xe("pomodoroShortBreak")} ${hr(ct)}` : xe("pomodoroComplete")]
        })
      }), Fo && T.jsx("div", {
        style: {
          padding: "0 8px",
          pointerEvents: "auto",
          animation: "fadeIn 0.3s"
        },
        children: T.jsxs("div", {
          style: {
            width: "100%",
            background: "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)",
            borderRadius: "20px",
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            backdropFilter: "blur(8px)",
            borderLeft: "3px solid #F687B3",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)"
          },
          children: [T.jsx("img", {
            decoding: "async",
            src: (je == null ? undefined : je.image) || F(je == null ? undefined : je.name),
            alt: "",
            style: {
              width: "36px",
              height: "36px",
              borderRadius: "18px",
              objectFit: "cover",
              border: "2px solid rgba(246,135,179,0.4)",
              flexShrink: 0
            }
          }), T.jsxs("div", {
            style: {
              fontSize: "15px",
              color: "#fff",
              lineHeight: 1.5,
              fontStyle: "italic"
            },
            children: [mt, xt && T.jsxs("div", {
              style: {
                fontSize: "12px",
                color: "rgba(255,255,255,0.5)",
                marginTop: "2px",
                fontStyle: "normal"
              },
              children: ["(", xt, ")"]
            })]
          })]
        })
      })]
    }), Ee === "pomodoro" && !et && !Po && T.jsxs("div", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        padding: "0 24px 20px",
        zIndex: 6,
        pointerEvents: "none"
      },
      children: [T.jsx("div", {
        style: {
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginBottom: "24px",
          opacity: bt ? 1 : 0,
          transform: bt ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          pointerEvents: bt ? "auto" : "none"
        },
        children: wt ? T.jsx("button", {
          onClick: e => {
            e.stopPropagation();
            ur(true);
          },
          style: {
            padding: "16px 48px",
            borderRadius: "28px",
            border: "none",
            background: "linear-gradient(135deg, #F687B3 0%, #D53F8C 100%)",
            color: "#fff",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(213,63,140,0.4)",
            transition: "transform 0.2s"
          },
          onMouseDown: e => e.currentTarget.style.transform = "scale(0.95)",
          onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
          children: xe("pomodoroComplete")
        }) : T.jsxs(T.Fragment, {
          children: [T.jsx("button", {
            onClick: e => {
              var t;
              var o;
              e.stopPropagation();
              Et(!Nt);
              if (Nt) {
                if ((t = Dt.current) != null) {
                  t.pause();
                }
              } else if ((o = Dt.current) != null) {
                o.play().catch(() => {});
              }
            },
            style: {
              width: "56px",
              height: "56px",
              borderRadius: "28px",
              border: "1px solid rgba(255,255,255,0.2)",
              background: Nt ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.5)",
              backdropFilter: "blur(10px)",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              transition: "all 0.2s",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
            },
            children: Nt ? T.jsx(se, {
              size: 24
            }) : T.jsx(le, {
              size: 24
            })
          }), T.jsx("button", {
            onClick: e => {
              e.stopPropagation();
              pr();
            },
            style: {
              width: "72px",
              height: "72px",
              borderRadius: "36px",
              border: "none",
              background: "#fff",
              color: "#000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              transform: "translateY(-8px)"
            },
            children: ut ? T.jsx(de, {
              size: 32
            }) : T.jsx(ce, {
              size: 32,
              style: {
                marginLeft: "4px"
              }
            })
          }), T.jsx("button", {
            onClick: e => {
              e.stopPropagation();
              St(true);
            },
            style: {
              width: "56px",
              height: "56px",
              borderRadius: "28px",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(10px)",
              color: "#FC8181",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              transition: "all 0.2s",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
            },
            children: T.jsx(Z, {
              size: 24
            })
          })]
        })
      }), T.jsx("div", {
        style: {
          padding: "0 8px",
          pointerEvents: "auto"
        },
        children: T.jsxs("div", {
          style: {
            width: "100%",
            background: "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)",
            borderRadius: "20px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            backdropFilter: "blur(8px)",
            borderLeft: "3px solid #F687B3",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)"
          },
          children: [T.jsxs("div", {
            style: {
              fontSize: "15px",
              fontWeight: "bold",
              color: "#F687B3",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            },
            children: [T.jsx("img", {
              decoding: "async",
              src: (je == null ? undefined : je.image) || F(je == null ? undefined : je.name),
              alt: "",
              style: {
                width: "28px",
                height: "28px",
                borderRadius: "14px",
                objectFit: "cover",
                border: "1px solid rgba(246,135,179,0.4)"
              }
            }), je == null ? undefined : je.name, T.jsx("span", {
              style: {
                fontSize: "11px",
                background: "rgba(246,135,179,0.2)",
                padding: "2px 6px",
                borderRadius: "6px",
                color: "#fff",
                fontWeight: "normal"
              },
              children: xe("pomodoroAccompanying", {
                task: Qe
              })
            })]
          }), T.jsxs("div", {
            style: {
              fontSize: "16px",
              color: "#fff",
              lineHeight: 1.5,
              fontStyle: "italic",
              transition: "opacity 0.3s",
              opacity: $t ? 0.5 : 1
            },
            children: [mt, xt && T.jsxs("div", {
              style: {
                fontSize: "13px",
                color: "rgba(255,255,255,0.55)",
                marginTop: "4px",
                fontStyle: "normal"
              },
              children: ["(", xt, ")"]
            })]
          })]
        })
      })]
    }), vt && T.jsx("div", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(8px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        animation: "fadeIn 0.2s"
      },
      onClick: () => St(false),
      children: T.jsxs("div", {
        style: {
          background: "rgba(30,30,40,0.95)",
          borderRadius: "24px",
          padding: "28px 24px",
          width: "280px",
          textAlign: "center",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
        },
        onClick: e => e.stopPropagation(),
        children: [T.jsx("div", {
          style: {
            fontSize: "18px",
            fontWeight: "600",
            marginBottom: "8px"
          },
          children: xe("pomodoroEndConfirmTitle")
        }), T.jsx("div", {
          style: {
            fontSize: "14px",
            color: "rgba(255,255,255,0.6)",
            marginBottom: "24px",
            lineHeight: 1.5
          },
          children: xe("pomodoroEndConfirmMsg", {
            current: nt,
            total: it,
            remaining: hr(ct)
          })
        }), T.jsxs("div", {
          style: {
            display: "flex",
            gap: "12px"
          },
          children: [T.jsx("button", {
            onClick: () => St(false),
            style: {
              flex: 1,
              padding: "14px 0",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.08)",
              color: "#fff",
              fontSize: "15px",
              fontWeight: "500",
              cursor: "pointer"
            },
            children: xe("pomodoroContinueFocus")
          }), T.jsx("button", {
            onClick: () => {
              St(false);
              ur();
            },
            style: {
              flex: 1,
              padding: "14px 0",
              borderRadius: "14px",
              border: "none",
              background: "rgba(252,129,129,0.2)",
              color: "#FC8181",
              fontSize: "15px",
              fontWeight: "500",
              cursor: "pointer"
            },
            children: xe("pomodoroEnd")
          })]
        })]
      })
    }), T.jsx("style", {
      children: "\n            .switch-dark { position: relative; display: inline-block; width: 50px; height: 28px; }\n            .switch-dark input { opacity: 0; width: 0; height: 0; }\n            .slider-dark { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(255,255,255,0.1); transition: .3s; border-radius: 28px; }\n            .slider-dark:before { position: absolute; content: \"\"; height: 20px; width: 20px; left: 4px; bottom: 4px; background-color: #fff; transition: .3s; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.3); }\n            input:checked + .slider-dark { background-color: #F687B3; }\n            input:checked + .slider-dark:before { transform: translateX(22px); }\n            @keyframes fadeIn { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: translateY(0) } }\n            @keyframes pulse { 0% { opacity: 1; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.1); } 100% { opacity: 1; transform: scale(1); } }\n            @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n            @keyframes rippleExpand { 0% { width: 20px; height: 20px; opacity: 1; } 100% { width: 100px; height: 100px; opacity: 0; } }\n            @keyframes fadeInUp { from { opacity: 0; transform: translate(-50%, -80%); } to { opacity: 1; transform: translate(-50%, -100%); } }\n            input[type=\"time\"]::-webkit-calendar-picker-indicator { filter: invert(1); opacity: 0.5; }\n            "
    })]
  });
};
export { ue as default };