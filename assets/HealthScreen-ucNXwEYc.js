const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["./assets/periodReminderScheduler-D5ynboI7.js", "./assets/native-pet-CTNtZgMA.js", "./assets/vendor-react-B2VXkTUV.js", "./assets/vendor-dexie-KLdnSHz2.js", "./assets/vendor-jszip-DU-5YDGO.js", "./assets/vendor-lucide-DBv09HTV.js", "./assets/native-pet-D9YoqRtr.css"]) => i.map(i => d[i]);
import { bP as e, a2 as s, i as a, r as l, c as t, a as n, j as i, d as h, _ as r, bQ as c } from "./native-pet-CTNtZgMA.js";
import { j as o, r as d } from "./vendor-react-B2VXkTUV.js";
import { x as u, c6 as p, c7 as m, w as v, a2 as x, c8 as j, c9 as y, X as N } from "./vendor-lucide-DBv09HTV.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
let g = null;
let b = false;
function S() {
  if (b) {
    return g;
  }
  b = true;
  if (!s() && !a()) {
    g = null;
    return null;
  }
  try {
    g = l("HealthData");
  } catch (e) {
    console.warn("[healthData] registerPlugin 失敗:", e == null ? undefined : e.message);
    g = null;
  }
  return g;
}
const f = {
  isSupported: () => !!S(),
  async checkAvailability() {
    const e = S();
    if (!e) {
      return {
        status: "unavailable"
      };
    }
    try {
      return await e.checkAvailability();
    } catch (s) {
      return {
        status: "not_supported",
        error: s == null ? undefined : s.message
      };
    }
  },
  async checkPermissions() {
    const e = S();
    if (!e) {
      return {
        granted: false,
        available: false
      };
    }
    try {
      return await e.checkHealthPermissions();
    } catch (s) {
      return {
        granted: false,
        error: s == null ? undefined : s.message
      };
    }
  },
  async requestPermissions() {
    const e = S();
    if (!e) {
      return {
        granted: false
      };
    }
    try {
      return await e.requestHealthPermissions();
    } catch (s) {
      return {
        granted: false,
        error: s == null ? undefined : s.message
      };
    }
  },
  async openSettings() {
    const e = S();
    if (e) {
      try {
        await e.openSettings();
      } catch (s) {}
    }
  },
  async syncRange(l, t, n) {
    const i = S();
    const h = a() ? "ios-health" : s() ? "android-health" : null;
    if (!i || !h || !l) {
      return {
        synced: false,
        written: 0,
        skipped: 0
      };
    }
    try {
      const {
        entries: s
      } = await i.readData({
        startDate: t,
        endDate: n
      });
      if (!Array.isArray(s) || s.length === 0) {
        return {
          synced: true,
          written: 0,
          skipped: 0
        };
      }
      const {
        written: a,
        skipped: r
      } = await e.syncFromDevice(l, s, h);
      return {
        synced: true,
        written: a,
        skipped: r
      };
    } catch (r) {
      console.warn("[healthData] syncRange 失敗:", r == null ? undefined : r.message);
      return {
        synced: false,
        written: 0,
        skipped: 0,
        error: r == null ? undefined : r.message
      };
    }
  },
  async syncRecent(e, s = 365) {
    const a = new Date();
    const l = new Date();
    l.setDate(l.getDate() - (s - 1));
    const t = e => `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
    return this.syncRange(e, t(l), t(a));
  }
};
function w({
  series: e,
  goal: s,
  color: a = "steps",
  unit: l = "",
  fmt: t
}) {
  const n = e.filter(e => e.value != null).map(e => e.value);
  if (n.length === 0) {
    return null;
  }
  const i = Math.max(s || 0, ...n);
  const h = i > 0 && s ? s / i * 100 : null;
  return o.jsx("div", {
    className: `nuo-hc-trend ${a}`,
    children: o.jsxs("div", {
      className: "nuo-hc-trend-plot",
      children: [h != null && o.jsx("div", {
        className: "nuo-hc-goalline",
        style: {
          bottom: `${h}%`
        },
        children: o.jsxs("span", {
          className: "nuo-hc-goallabel",
          children: [t ? t(s) : s, l]
        })
      }), e.map(e => {
        const a = e.value != null && i > 0 ? Math.max(3, e.value / i * 100) : 0;
        const n = s && e.value != null && e.value >= s;
        return o.jsx("div", {
          className: "nuo-hc-bar-wrap",
          title: e.value != null ? `${e.day}日 · ${t ? t(e.value) : e.value}${l}` : `${e.day}日`,
          children: o.jsx("div", {
            className: "nuo-hc-bar " + (n ? "hit" : ""),
            style: {
              height: `${a}%`
            }
          })
        }, e.day);
      })]
    })
  });
}
function k({
  types: e,
  labelFn: s
}) {
  var a;
  if (!e || e.length === 0) {
    return null;
  }
  const l = ((a = e[0]) == null ? undefined : a.minutes) || 1;
  return o.jsx("div", {
    className: "nuo-hc-exbars",
    children: e.map(({
      key: e,
      minutes: a
    }) => o.jsxs("div", {
      className: "nuo-hc-exrow",
      children: [o.jsx("span", {
        className: "nuo-hc-exlabel",
        children: s(e)
      }), o.jsx("div", {
        className: "nuo-hc-extrack",
        children: o.jsx("div", {
          className: "nuo-hc-exfill",
          style: {
            width: `${Math.max(8, a / l * 100)}%`
          }
        })
      }), o.jsxs("span", {
        className: "nuo-hc-exmin",
        children: [a, "m"]
      })]
    }, e))
  });
}
const P = {
  good: "#ffd36e",
  calm: "#9be3c4",
  irritable: "#ff9b9b",
  sad: "#a9c4ff",
  anxious: "#c9a9ff",
  tired: "#c7b8a8"
};
function C({
  moodByDay: e,
  moodKeys: s,
  labelFn: a
}) {
  const l = Object.entries(e || {});
  if (l.length === 0) {
    return null;
  }
  const t = l.sort((e, s) => e[0] < s[0] ? -1 : 1).map(([e, s], a) => ({
    date: e,
    mood: s,
    i: a
  }));
  const n = {};
  for (const i of t) {
    n[i.mood] = (n[i.mood] || 0) + 1;
  }
  return o.jsxs("div", {
    className: "nuo-hc-jar-wrap",
    children: [o.jsxs("div", {
      className: "nuo-hc-jar",
      children: [o.jsx("div", {
        className: "nuo-hc-jar-lid"
      }), o.jsx("div", {
        className: "nuo-hc-jar-neck"
      }), o.jsx("div", {
        className: "nuo-hc-jar-body",
        children: o.jsx("div", {
          className: "nuo-hc-jar-candies",
          children: t.map(e => {
            const s = Math.floor(e.i / 5) % 2 * 9;
            return o.jsx("span", {
              className: "nuo-hc-candy",
              title: `${e.date} · ${a(e.mood)}`,
              style: {
                background: P[e.mood] || "#ddd",
                marginLeft: s ? `${s}px` : undefined
              }
            }, e.date);
          })
        })
      })]
    }), o.jsx("div", {
      className: "nuo-hc-jar-legend",
      children: s.filter(e => n[e]).map(e => o.jsxs("span", {
        className: "nuo-hc-jar-legend-item",
        children: [o.jsx("i", {
          className: "nuo-hc-candy sm",
          style: {
            background: P[e] || "#ddd"
          }
        }), a(e), " ×", n[e]]
      }, e))
    })]
  });
}
const D = ["light", "medium", "heavy"];
const M = ["cramps", "headache", "backache", "fatigue", "bloating", "tender", "nausea", "acne"];
const F = ["good", "calm", "irritable", "sad", "anxious", "tired"];
const $ = ["running", "yoga", "gym", "swimming", "cycling", "walking", "dance", "other"];
const A = e => String(e).padStart(2, "0");
const _ = (e, s, a) => `${e}-${A(s)}-${A(a)}`;
const T = () => {
  var s;
  var a;
  var l;
  var g;
  var b;
  var S;
  var P;
  var A;
  var T;
  const {
    currentScreen: z,
    showScreen: E
  } = t();
  const {
    t: I,
    tOr: L
  } = n();
  const {
    safeCurrentProfileUserId: U
  } = i();
  const B = z === "health-screen";
  const R = new Date();
  const [G, H] = d.useState(R.getFullYear());
  const [W, q] = d.useState(R.getMonth() + 1);
  const [O, V] = d.useState({});
  const [Y, K] = d.useState(null);
  const [Q, J] = d.useState(null);
  const [X, Z] = d.useState(null);
  const [ee, se] = d.useState({
    period: true,
    steps: true,
    sleep: true,
    exercise: true
  });
  const [ae, le] = d.useState(true);
  const [te, ne] = d.useState(null);
  const [ie, he] = d.useState(null);
  const [re, ce] = d.useState(false);
  const [oe, de] = d.useState("");
  const [ue, pe] = d.useState("");
  const [me, ve] = d.useState(false);
  const [xe, je] = d.useState("");
  const [ye, Ne] = d.useState("");
  const [ge, be] = d.useState(false);
  const [Se, fe] = d.useState(false);
  const [we] = d.useState(() => f.isSupported());
  const [ke, Pe] = d.useState(null);
  const [Ce, De] = d.useState(false);
  const [Me, Fe] = d.useState("idle");
  const [$e, Ae] = d.useState("");
  const _e = U;
  const Te = h();
  const ze = d.useMemo(() => {
    const e = I("weekdaysShort");
    if (Array.isArray(e)) {
      return e;
    } else {
      return ["日", "一", "二", "三", "四", "五", "六"];
    }
  }, [I]);
  const Ee = d.useMemo(() => {
    const e = I("monthNamesLong");
    if (Array.isArray(e)) {
      return e;
    } else {
      return ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    }
  }, [I]);
  const Ie = d.useCallback(async () => {
    if (_e) {
      le(true);
      try {
        const {
          days: a,
          cycle: l,
          stats: t
        } = await e.getMonthView(_e, G, W);
        V(a || {});
        K(l || null);
        J(t || null);
        try {
          Z(await e.computePhase(_e));
        } catch (s) {
          Z(null);
        }
        try {
          se(await e.getShare(_e));
        } catch (s) {}
        try {
          fe(await e.getAiWrite(_e));
        } catch (s) {}
        try {
          const s = await e.getProfile(_e);
          const a = !!s && !!s.periodNotif;
          be(a);
          const {
            reschedulePeriodReminders: l
          } = await r(async () => {
            const {
              reschedulePeriodReminders: e
            } = await import("./periodReminderScheduler-D5ynboI7.js");
            return {
              reschedulePeriodReminders: e
            };
          }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]));
          l({
            userId: _e,
            enabled: a,
            t: I
          });
        } catch (s) {}
      } catch (a) {
        console.warn("[HealthScreen] month load failed", a);
      } finally {
        le(false);
      }
    }
  }, [_e, G, W, I]);
  d.useEffect(() => {
    if (B) {
      Ie();
    }
  }, [B, Ie]);
  const Le = () => {
    ne(null);
    he(null);
  };
  const Ue = e => he(s => ({
    ...s,
    ...e
  }));
  const Be = async s => {
    const a = {
      flow: ie.flow,
      mood: ie.mood,
      symptoms: ie.symptoms,
      ...s
    };
    Ue(s);
    await e.setForDate(_e, "period_day", te, {
      flow: a.flow,
      mood: a.mood,
      symptoms: a.symptoms
    });
  };
  const Re = async s => {
    const a = (s || []).filter(e => e && e.time && e.value != null);
    const l = a.map(e => parseFloat(e.value)).filter(Number.isFinite);
    const t = l.length > 0 ? Math.round(l.reduce((e, s) => e + s, 0) / l.length * 10) / 10 : 0;
    if (a.length > 0) {
      await e.setForDate(_e, "pressure", te, {
        value: t,
        points: a
      });
    } else {
      const s = (await e.getByDate(_e, te)).find(e => e.type === "pressure");
      if (s) {
        await e.remove(s._id);
      }
    }
  };
  const Ge = (e, s) => {
    const a = (ie.pressurePoints || []).map((a, l) => l === e ? {
      ...a,
      ...s
    } : a);
    const l = a.map(e => parseFloat(e.value)).filter(Number.isFinite);
    const t = l.length > 0 ? Math.round(l.reduce((e, s) => e + s, 0) / l.length * 10) / 10 : 0;
    Ue({
      pressurePoints: a,
      pressure: String(t)
    });
    Re(a);
  };
  const He = async s => {
    const a = (s || []).filter(e => e && e.start && e.end);
    const l = c(a);
    if (a.length) {
      await e.setForDate(_e, "sleep", te, {
        value: l ?? 0,
        segments: a
      });
    } else {
      const s = parseFloat(ie == null ? undefined : ie.sleep);
      if (Number.isFinite(s) && s >= 0 && s <= 24) {
        await e.setForDate(_e, "sleep", te, {
          value: s,
          segments: null
        });
      } else {
        const s = (await e.getByDate(_e, te)).find(e => e.type === "sleep");
        if (s) {
          await e.remove(s._id);
        }
      }
    }
  };
  const We = (e, s) => {
    const a = (ie.sleepSegments || []).map((a, l) => l === e ? {
      ...a,
      ...s
    } : a);
    const l = c(a);
    Ue({
      sleepSegments: a,
      sleep: l != null ? String(l) : ""
    });
    He(a);
  };
  const qe = async s => {
    const a = {
      exType: ie.exType,
      exMin: ie.exMin,
      ...s
    };
    Ue(s);
    const l = parseInt(a.exMin, 10);
    if (a.exType && Number.isFinite(l) && l > 0) {
      await e.setForDate(_e, "exercise", te, {
        value: l,
        notes: a.exType
      });
    }
  };
  const Oe = async () => {
    try {
      const s = await e.getProfile(_e);
      de(String(s && s.stepsGoal != null ? s.stepsGoal : 8000));
      pe(String(s && s.sleepGoal != null ? s.sleepGoal : 8));
    } catch (s) {
      de("8000");
      pe("8");
    }
    ce(true);
  };
  d.useEffect(() => {
    if (!B || !we) {
      return;
    }
    let e = false;
    (async () => {
      try {
        const s = await f.checkAvailability();
        if (e) {
          return;
        }
        Pe((s == null ? undefined : s.status) || "not_supported");
        if ((s == null ? undefined : s.status) === "available") {
          const s = await f.checkPermissions();
          if (!e) {
            De(!!(s == null ? undefined : s.granted));
          }
        }
      } catch (s) {}
    })();
    return () => {
      e = true;
    };
  }, [B, we]);
  const Ve = e => L(`healthFlow_${e}`, e);
  const Ye = e => L(`healthSym_${e}`, e);
  const Ke = e => L(`healthMood_${e}`, e);
  const Qe = e => L(`healthEx_${e}`, e);
  const Je = (e, {
    unit: s = "",
    fmt: a,
    higherIsBetter: l = false,
    neutralIsGood: t = false
  } = {}) => {
    if (e == null || e === 0) {
      if (e === 0) {
        return o.jsx("div", {
          className: "nuo-health-stat-delta flat",
          children: L("healthCompareSame", "与上月持平")
        });
      } else {
        return null;
      }
    }
    const n = e > 0;
    const i = Math.abs(e);
    const h = a ? a(i) : i;
    const r = t ? "neutral" : n === l ? "good" : "bad";
    const c = n ? "↑" : "↓";
    return o.jsxs("div", {
      className: `nuo-health-stat-delta ${r}`,
      children: [c, h, s, " ", o.jsx("span", {
        className: "nuo-health-delta-vs",
        children: L("healthVsLastMonth", "比上月")
      })]
    });
  };
  const Xe = d.useMemo(() => {
    const e = new Date(G, W - 1, 1).getDay();
    const s = new Date(G, W, 0).getDate();
    const a = [];
    for (let l = 0; l < e; l++) {
      a.push(null);
    }
    for (let l = 1; l <= s; l++) {
      a.push(l);
    }
    return a;
  }, [G, W]);
  const Ze = (() => {
    const e = new Date();
    return _(e.getFullYear(), e.getMonth() + 1, e.getDate());
  })();
  return o.jsxs("div", {
    id: "health-screen",
    className: `screen ${B ? "active" : ""} nuo-health-root`,
    children: [o.jsxs("div", {
      className: "screen-header nuo-health-header",
      children: [o.jsx("button", {
        className: "nuo-health-back",
        onClick: () => E("home-screen"),
        "aria-label": "back",
        children: o.jsx(u, {
          size: 26
        })
      }), o.jsx("div", {
        className: "nuo-health-title",
        children: L("homeAppHealth", "健康")
      }), o.jsx("div", {
        style: {
          width: 26
        }
      })]
    }), o.jsxs("div", {
      className: "nuo-health-content",
      children: [o.jsxs("button", {
        className: "nuo-health-summary",
        onClick: async () => {
          try {
            const s = await e.getProfile(_e);
            je(String(s && s.avgCycle != null ? s.avgCycle : 28));
            Ne(String(s && s.avgPeriodLen != null ? s.avgPeriodLen : 5));
          } catch (s) {
            je("28");
            Ne("5");
          }
          ve(true);
        },
        "aria-label": L("healthCycleSettings", "周期设定"),
        children: [o.jsx("div", {
          className: "nuo-health-summary-icon",
          children: o.jsx(p, {
            size: 22
          })
        }), o.jsxs("div", {
          className: "nuo-health-summary-text",
          children: [o.jsx("div", {
            className: "nuo-health-summary-main",
            children: (Y && Y.lastStart ? Y.inPeriod && Y.periodDay ? L("healthInPeriodDay", "经期第 {n} 天").replace("{n}", Y.periodDay) : typeof Y.daysUntilNext == "number" ? Y.daysUntilNext < 0 ? L("healthPeriodLate", "月经晚了 {n} 天").replace("{n}", -Y.daysUntilNext) : Y.daysUntilNext === 0 ? L("healthPeriodToday", "预计今天来月经") : L("healthDaysUntil", "距下次月经约 {n} 天").replace("{n}", Y.daysUntilNext) : "" : L("healthNoPeriodData", "点日历上的某天记录经期，开始追踪")) || L("healthNoPeriodData", "点日历上的某天记录经期，开始追踪")
          }), (Y == null ? undefined : Y.lastStart) && o.jsxs("div", {
            className: "nuo-health-summary-sub",
            children: [L("healthAvgCycle", "平均周期 {n} 天").replace("{n}", Y.avgCycle), Y.nextPredicted ? ` · ${L("healthNextPredicted", "预测 {d}").replace("{d}", Y.nextPredicted)}` : ""]
          })]
        }), o.jsx(m, {
          size: 16,
          className: "nuo-health-summary-edit"
        })]
      }), o.jsx("div", {
        className: "nuo-health-tip",
        children: (Y == null ? undefined : Y.inPeriod) ? L("healthTip_period", "经期注意保暖，多喝热水，别太累 🌸") : typeof (Y == null ? undefined : Y.daysUntilNext) == "number" && Y.daysUntilNext <= 3 && Y.daysUntilNext >= 0 ? L("healthTip_soon", "经期快到了，备好卫生用品，早点休息 🌙") : X === "luteal" ? L("healthTip_luteal", "经期前可能容易累或情绪起伏，对自己温柔点 🍃") : X === "follicular" ? L("healthTip_follicular", "状态回升的时期，适合活动活动 ☀️") : L("healthTip_default", "记得记录今天的身体状态，角色会更懂你 💕")
      }), o.jsxs("div", {
        className: "nuo-health-cal",
        children: [o.jsxs("div", {
          className: "nuo-health-cal-nav",
          children: [o.jsx("button", {
            onClick: () => {
              if (W === 1) {
                H(G - 1);
                q(12);
              } else {
                q(W - 1);
              }
            },
            "aria-label": "prev",
            children: o.jsx(u, {
              size: 20
            })
          }), o.jsxs("div", {
            className: "nuo-health-cal-month",
            children: [G, " · ", Ee[W - 1]]
          }), o.jsx("button", {
            onClick: () => {
              if (W === 12) {
                H(G + 1);
                q(1);
              } else {
                q(W + 1);
              }
            },
            "aria-label": "next",
            children: o.jsx(v, {
              size: 20
            })
          })]
        }), o.jsx("div", {
          className: "nuo-health-cal-weekdays",
          children: ze.map((e, s) => o.jsx("div", {
            className: "nuo-health-wd",
            children: e
          }, s))
        }), o.jsx("div", {
          className: "nuo-health-cal-grid",
          children: Xe.map((s, a) => {
            var l;
            var t;
            if (s == null) {
              return o.jsx("div", {
                className: "nuo-health-cell empty"
              }, `e${a}`);
            }
            const n = _(G, W, s);
            const i = O[n] || {};
            const h = n === Ze;
            const r = i.period ? "period" : i.predicted ? "predicted" : "";
            const c = ["nuo-health-cell", r ? `blk-${r}` : "", h ? "today" : "", te === n ? "sel" : ""].filter(Boolean).join(" ");
            const d = ((l = Q == null ? undefined : Q.goals) == null ? undefined : l.sleep) || 8;
            const u = i.sleep != null ? Math.min(1, i.sleep / d) : null;
            const p = i.steps != null && i.steps >= (((t = Q == null ? undefined : Q.goals) == null ? undefined : t.steps) || 8000);
            return o.jsxs("button", {
              className: c,
              onClick: () => (async s => {
                if (_e) {
                  ne(s);
                  try {
                    const a = await e.getByDate(_e, s);
                    const l = a.find(e => e.type === "period_day");
                    const t = a.find(e => e.type === "steps");
                    const n = a.find(e => e.type === "sleep");
                    const i = a.find(e => e.type === "pressure");
                    const h = a.find(e => e.type === "exercise");
                    const r = a.some(e => e.type === "period_start");
                    const c = a.some(e => e.type === "period_end");
                    he({
                      flow: (l == null ? undefined : l.flow) || null,
                      mood: (l == null ? undefined : l.mood) || null,
                      symptoms: (l == null ? undefined : l.symptoms) || [],
                      steps: (t == null ? undefined : t.value) != null ? String(t.value) : "",
                      sleep: (n == null ? undefined : n.value) != null ? String(n.value) : "",
                      sleepSegments: Array.isArray(n == null ? undefined : n.segments) ? n.segments : [],
                      pressure: (i == null ? undefined : i.value) != null ? String(i.value) : "",
                      pressurePoints: Array.isArray(i == null ? undefined : i.points) ? i.points : (i == null ? undefined : i.value) != null ? [{
                        time: "12:00",
                        value: parseFloat(i.value)
                      }] : [],
                      exType: (h == null ? undefined : h.notes) || null,
                      exMin: (h == null ? undefined : h.value) != null ? String(h.value) : "",
                      isStart: r,
                      isEnd: c
                    });
                  } catch (a) {
                    he({
                      flow: null,
                      mood: null,
                      symptoms: [],
                      steps: "",
                      sleep: "",
                      sleepSegments: [],
                      pressure: "",
                      pressurePoints: [],
                      exType: null,
                      exMin: "",
                      isStart: false,
                      isEnd: false
                    });
                  }
                }
              })(n),
              children: [p && o.jsx("span", {
                className: "nuo-health-cell-check",
                children: "✓"
              }), o.jsx("span", {
                className: "nuo-health-cell-day",
                children: s
              }), i.steps != null && o.jsx("span", {
                className: "nuo-health-cell-steps",
                children: i.steps >= 1000 ? Math.round(i.steps / 100) / 10 + "k" : i.steps
              }), u != null && o.jsx("span", {
                className: "nuo-health-cell-sleepbar",
                style: {
                  height: 3 + u * 5 + "px",
                  opacity: 0.35 + u * 0.65
                },
                title: `${i.sleep}h`
              }), i.hasTags && u == null && o.jsx("i", {
                className: "dot tag"
              })]
            }, n);
          })
        }), o.jsxs("div", {
          className: "nuo-health-legend",
          children: [o.jsxs("span", {
            children: [o.jsx("i", {
              className: "swatch period"
            }), L("healthLegendPeriod", "经期")]
          }), o.jsxs("span", {
            children: [o.jsx("i", {
              className: "swatch predicted"
            }), L("healthLegendPredicted", "预测经期")]
          }), o.jsxs("span", {
            children: [o.jsx("i", {
              className: "swatch sleepbar"
            }), L("healthSleep", "睡眠")]
          }), o.jsxs("span", {
            children: [o.jsx("i", {
              className: "nuo-health-legend-check",
              children: "✓"
            }), L("healthStepsHit", "步数达标")]
          })]
        })]
      }), o.jsxs("div", {
        className: "nuo-health-stats capsule-list",
        children: [o.jsxs("div", {
          className: "nuo-health-stat period",
          children: [o.jsxs("div", {
            className: "nuo-health-stat-period-main",
            children: [o.jsx("div", {
              className: "nuo-health-stat-icon period",
              children: o.jsx(p, {
                size: 18
              })
            }), o.jsxs("div", {
              className: "nuo-health-stat-period-info",
              children: [o.jsxs("div", {
                className: "nuo-health-stat-val",
                children: [(Q == null ? undefined : Q.periodDays) || 0, o.jsx("small", {
                  children: L("healthDaysUnit", "天")
                })]
              }), o.jsx("div", {
                className: "nuo-health-stat-label",
                children: L("healthStatPeriodDays", "经期天数")
              })]
            }), o.jsx("div", {
              className: "nuo-health-stat-period-delta",
              children: ((s = Q == null ? undefined : Q.compare) == null ? undefined : s.periodDays) != null ? Je((a = Q == null ? undefined : Q.compare) == null ? undefined : a.periodDays, {
                unit: L("healthDaysUnit", "天"),
                neutralIsGood: true
              }) : o.jsx("span", {
                className: "nuo-health-stat-desc",
                children: "今天也要元气满满 🌸"
              })
            })]
          }), (Y == null ? undefined : Y.daysUntilNext) != null && o.jsx("div", {
            className: "nuo-micro-cycle-track",
            children: o.jsx("div", {
              className: "nuo-micro-cycle-dot",
              style: {
                left: `${Math.max(0, Math.min(100, (28 - Math.max(0, Y.daysUntilNext)) / 28 * 100))}%`
              }
            })
          })]
        }), o.jsxs("div", {
          className: "nuo-health-stat sleep",
          children: [o.jsxs("div", {
            className: "nuo-health-stat-period-main",
            children: [o.jsx("div", {
              className: "nuo-health-stat-icon sleep",
              children: o.jsx(x, {
                size: 18
              })
            }), o.jsxs("div", {
              className: "nuo-health-stat-period-info",
              children: [o.jsx("div", {
                className: "nuo-health-stat-val",
                children: (Q == null ? undefined : Q.avgSleep) != null ? `${Q.avgSleep}h` : "—"
              }), o.jsx("div", {
                className: "nuo-health-stat-label",
                children: L("healthStatAvgSleep", "日均睡眠")
              })]
            }), o.jsx("div", {
              className: "nuo-health-stat-period-delta",
              children: ((l = Q == null ? undefined : Q.compare) == null ? undefined : l.sleep) != null ? Je((g = Q == null ? undefined : Q.compare) == null ? undefined : g.sleep, {
                unit: "h",
                higherIsBetter: true
              }) : o.jsx("span", {
                className: "nuo-health-stat-desc",
                children: "做个甜甜的梦 💤"
              })
            })]
          }), o.jsxs("div", {
            className: "nuo-micro-sleep-stages",
            children: [o.jsx("span", {
              className: "stage deep",
              style: {
                width: "30%"
              },
              title: "深睡"
            }), o.jsx("span", {
              className: "stage light",
              style: {
                width: "50%"
              },
              title: "浅睡"
            }), o.jsx("span", {
              className: "stage awake",
              style: {
                width: "20%"
              },
              title: "清醒"
            })]
          })]
        }), o.jsxs("div", {
          className: "nuo-health-stat steps",
          children: [o.jsxs("div", {
            className: "nuo-health-stat-top",
            children: [o.jsx("div", {
              className: "nuo-health-stat-icon steps",
              children: o.jsx(j, {
                size: 18
              })
            }), ((b = Q == null ? undefined : Q.compare) == null ? undefined : b.steps) != null ? Je((S = Q == null ? undefined : Q.compare) == null ? undefined : S.steps, {
              fmt: e => e >= 1000 ? Math.round(e / 100) / 10 + "k" : e,
              higherIsBetter: true
            }) : o.jsx("span", {
              className: "nuo-health-stat-desc",
              children: "散步吹吹晚风 🐾"
            })]
          }), o.jsxs("div", {
            className: "nuo-health-stat-bottom",
            children: [o.jsx("div", {
              className: "nuo-health-stat-val",
              children: (Q == null ? undefined : Q.avgSteps) != null ? Q.avgSteps >= 1000 ? Math.round(Q.avgSteps / 100) / 10 + "k" : Q.avgSteps : "—"
            }), o.jsx("div", {
              className: "nuo-health-stat-label",
              children: L("healthStatAvgSteps", "日均步数")
            })]
          }), (Q == null ? undefined : Q.avgSteps) != null && o.jsx("div", {
            className: "nuo-micro-steps-progress",
            children: o.jsx("div", {
              className: "nuo-micro-steps-fill",
              style: {
                width: `${Math.min(100, Q.avgSteps / (((P = Q == null ? undefined : Q.goals) == null ? undefined : P.steps) || 8000) * 100)}%`
              }
            })
          })]
        }), o.jsxs("div", {
          className: "nuo-health-stat pressure",
          children: [o.jsxs("div", {
            className: "nuo-health-stat-top",
            children: [o.jsx("div", {
              className: "nuo-health-stat-icon pressure",
              children: o.jsx(m, {
                size: 18
              })
            }), ((A = Q == null ? undefined : Q.compare) == null ? undefined : A.pressure) != null ? Je((T = Q == null ? undefined : Q.compare) == null ? undefined : T.pressure, {
              unit: "",
              higherIsBetter: false
            }) : o.jsx("span", {
              className: "nuo-health-stat-desc",
              children: "深呼吸，放轻松 🍃"
            })]
          }), o.jsxs("div", {
            className: "nuo-health-stat-bottom",
            children: [o.jsx("div", {
              className: "nuo-health-stat-val",
              children: (Q == null ? undefined : Q.avgPressure) != null ? `${Q.avgPressure}/10` : "—"
            }), o.jsx("div", {
              className: "nuo-health-stat-label",
              children: L("healthStatAvgPressure", "日均压力")
            })]
          }), o.jsxs("div", {
            className: "nuo-micro-pressure-wave",
            children: [o.jsx("div", {
              className: "wave-bar",
              style: {
                "--h": "6px",
                "--d": "0.1s"
              }
            }), o.jsx("div", {
              className: "wave-bar",
              style: {
                "--h": "14px",
                "--d": "0.3s"
              }
            }), o.jsx("div", {
              className: "wave-bar",
              style: {
                "--h": "10px",
                "--d": "0.5s"
              }
            }), o.jsx("div", {
              className: "wave-bar",
              style: {
                "--h": "18px",
                "--d": "0.7s"
              }
            }), o.jsx("div", {
              className: "wave-bar",
              style: {
                "--h": "5px",
                "--d": "0.9s"
              }
            })]
          })]
        })]
      }), (Q == null ? undefined : Q.stepsSeries) && Q.stepsSeries.some(e => e.value != null) && o.jsxs("div", {
        className: "nuo-health-chart-card",
        children: [o.jsxs("div", {
          className: "nuo-health-chart-head",
          children: [o.jsxs("div", {
            className: "nuo-health-chart-title",
            children: [o.jsx(j, {
              size: 15
            }), L("healthSteps", "步数")]
          }), o.jsxs("button", {
            className: "nuo-health-goal-btn",
            onClick: Oe,
            children: [o.jsx(m, {
              size: 13
            }), L("healthGoal", "目标"), " ", Q.goals.steps >= 1000 ? Math.round(Q.goals.steps / 100) / 10 + "k" : Q.goals.steps]
          })]
        }), o.jsx(w, {
          series: Q.stepsSeries,
          goal: Q.goals.steps,
          color: "steps",
          unit: "",
          fmt: e => e >= 1000 ? Math.round(e / 100) / 10 + "k" : e
        }), o.jsxs("div", {
          className: "nuo-health-chart-foot",
          children: [L("healthAvgLabel", "日均"), " ", Q.avgSteps != null ? Q.avgSteps >= 1000 ? Math.round(Q.avgSteps / 100) / 10 + "k" : Q.avgSteps : "—", " · ", L("healthGoalDays", "达标 {n} 天").replace("{n}", Q.stepsGoalDays)]
        })]
      }), (Q == null ? undefined : Q.sleepSeries) && Q.sleepSeries.some(e => e.value != null) && o.jsxs("div", {
        className: "nuo-health-chart-card",
        children: [o.jsxs("div", {
          className: "nuo-health-chart-head",
          children: [o.jsxs("div", {
            className: "nuo-health-chart-title",
            children: [o.jsx(x, {
              size: 15
            }), L("healthSleep", "睡眠")]
          }), o.jsxs("button", {
            className: "nuo-health-goal-btn",
            onClick: Oe,
            children: [o.jsx(m, {
              size: 13
            }), L("healthGoal", "目标"), " ", Q.goals.sleep, "h"]
          })]
        }), o.jsx(w, {
          series: Q.sleepSeries,
          goal: Q.goals.sleep,
          color: "sleep",
          unit: "h"
        }), o.jsxs("div", {
          className: "nuo-health-chart-foot",
          children: [L("healthAvgLabel", "日均"), " ", Q.avgSleep != null ? `${Q.avgSleep}h` : "—", " · ", L("healthGoalDays", "达标 {n} 天").replace("{n}", Q.sleepGoalDays)]
        })]
      }), (Q == null ? undefined : Q.pressureSeries) && Q.pressureSeries.some(e => e.value != null) && o.jsxs("div", {
        className: "nuo-health-chart-card",
        children: [o.jsx("div", {
          className: "nuo-health-chart-head",
          children: o.jsxs("div", {
            className: "nuo-health-chart-title",
            children: [o.jsx(m, {
              size: 15
            }), L("healthPressure", "压力")]
          })
        }), o.jsx(w, {
          series: Q.pressureSeries,
          color: "pressure",
          unit: "",
          fmt: e => `${e}/10`
        }), o.jsxs("div", {
          className: "nuo-health-chart-foot",
          children: [L("healthAvgLabel", "日均"), " ", Q.avgPressure != null ? `${Q.avgPressure}/10` : "—"]
        })]
      }), (Q == null ? undefined : Q.exTypes) && Q.exTypes.length > 0 && o.jsxs("div", {
        className: "nuo-health-chart-card",
        children: [o.jsxs("div", {
          className: "nuo-health-chart-head",
          children: [o.jsxs("div", {
            className: "nuo-health-chart-title",
            children: [o.jsx(y, {
              size: 15
            }), L("healthExercise", "运动")]
          }), o.jsxs("span", {
            className: "nuo-health-ex-total",
            children: [Q.exMinutes, "m · ", Q.exCount, L("healthTimesUnit", "次")]
          })]
        }), o.jsx(k, {
          types: Q.exTypes,
          labelFn: Qe
        })]
      }), (Q == null ? undefined : Q.topSymptoms) && Q.topSymptoms.length > 0 && o.jsxs("div", {
        className: "nuo-health-chart-card",
        children: [o.jsx("div", {
          className: "nuo-health-chart-title",
          children: L("healthSymptomChart", "本月症状")
        }), o.jsx("div", {
          className: "nuo-health-bars",
          children: Q.topSymptoms.map(({
            key: e,
            count: s
          }) => {
            const a = Q.topSymptoms[0].count || 1;
            return o.jsxs("div", {
              className: "nuo-health-bar-row",
              children: [o.jsx("span", {
                className: "nuo-health-bar-label",
                children: Ye(e)
              }), o.jsx("div", {
                className: "nuo-health-bar-track",
                children: o.jsx("div", {
                  className: "nuo-health-bar-fill",
                  style: {
                    width: `${Math.max(8, s / a * 100)}%`
                  }
                })
              }), o.jsx("span", {
                className: "nuo-health-bar-count",
                children: s
              })]
            }, e);
          })
        })]
      }), (Q == null ? undefined : Q.moodByDay) && Object.keys(Q.moodByDay).length > 0 && o.jsxs("div", {
        className: "nuo-health-chart-card",
        children: [o.jsx("div", {
          className: "nuo-health-chart-title",
          children: L("healthMoodChart", "本月心情")
        }), o.jsx(C, {
          moodByDay: Q.moodByDay,
          moodKeys: F,
          labelFn: Ke
        })]
      }), we && o.jsxs("div", {
        className: "nuo-health-chart-card",
        children: [o.jsx("div", {
          className: "nuo-health-chart-title",
          children: L("healthSyncTitle", "联动手机健康数据")
        }), o.jsx("div", {
          className: "nuo-health-share-hint",
          children: L("healthSyncHint", "从手机系统读取真实步数、睡眠、运动、经期（只读取不写回）。同步的数据会自动填入，你手动编辑的记录优先保留。")
        }), o.jsxs("div", {
          className: "nuo-health-sync-row",
          children: [o.jsx("button", {
            className: "nuo-health-sync-btn",
            onClick: async () => {
              if (_e && Me !== "syncing") {
                if (ke === "update_required") {
                  Fe("error");
                  Ae(L("healthSyncUpdateRequired", "请先更新「健康连接」App"));
                  return;
                }
                if (ke && ke !== "available") {
                  Fe("error");
                  Ae(L("healthSyncNotSupported", "此设备不支持健康数据联动"));
                  return;
                }
                Fe("syncing");
                Ae(L("healthSyncing", "同步中…"));
                try {
                  if (!Ce) {
                    const e = await f.requestPermissions();
                    if (!(e == null ? undefined : e.granted)) {
                      Fe("error");
                      Ae(L("healthSyncNeedPerm", "需要授权才能读取健康数据"));
                      return;
                    }
                    De(true);
                  }
                  const e = await f.syncRecent(_e, 365);
                  if (!(e == null ? undefined : e.synced)) {
                    Fe("error");
                    Ae(L("healthSyncFailed", "同步失败，请稍后再试"));
                    return;
                  }
                  Fe("done");
                  Ae(e.written > 0 ? L("healthSyncDone", "已同步 {n} 项").replace("{n}", e.written) : L("healthSyncNone", "没有可同步的新数据"));
                  Ie();
                } catch (e) {
                  Fe("error");
                  Ae(L("healthSyncFailed", "同步失败，请稍后再试"));
                }
              }
            },
            disabled: Me === "syncing",
            children: Me === "syncing" ? L("healthSyncing", "同步中…") : Ce ? L("healthSyncBtn", "立即同步") : L("healthSyncConnect", "连动授权")
          }), Ce && o.jsx("button", {
            className: "nuo-health-sync-manage",
            onClick: () => f.openSettings(),
            children: L("healthSyncManage", "管理权限")
          })]
        }), $e && o.jsx("div", {
          className: "nuo-health-sync-msg " + (Me === "error" ? "err" : ""),
          children: $e
        })]
      }), Te && o.jsx("div", {
        className: "nuo-health-chart-card",
        children: o.jsxs("div", {
          className: "nuo-health-share-row",
          children: [o.jsxs("div", {
            style: {
              flex: 1,
              minWidth: 0
            },
            children: [o.jsx("div", {
              className: "nuo-health-chart-title",
              style: {
                marginBottom: 4
              },
              children: L("healthPeriodNotifTitleSetting", "经期临近提醒")
            }), o.jsx("div", {
              className: "nuo-health-share-hint",
              children: L("healthPeriodNotifHint", "预计来月经前一晚提醒你备好用品、早点休息")
            })]
          }), o.jsx("button", {
            type: "button",
            className: "nuo-health-switch " + (ge ? "on" : ""),
            onClick: async () => {
              const s = !ge;
              be(s);
              try {
                await e.setProfile(_e, {
                  periodNotif: s
                });
              } catch (a) {}
              try {
                const {
                  reschedulePeriodReminders: e
                } = await r(async () => {
                  const {
                    reschedulePeriodReminders: e
                  } = await import("./periodReminderScheduler-D5ynboI7.js");
                  return {
                    reschedulePeriodReminders: e
                  };
                }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]));
                await e({
                  userId: _e,
                  enabled: s,
                  t: I
                });
              } catch (a) {}
            },
            role: "switch",
            "aria-checked": ge,
            children: o.jsx("span", {
              className: "nuo-health-switch-knob"
            })
          })]
        })
      }), o.jsxs("div", {
        className: "nuo-health-chart-card",
        children: [o.jsx("div", {
          className: "nuo-health-chart-title",
          children: L("healthShareTitle", "让角色知道")
        }), o.jsx("div", {
          className: "nuo-health-share-hint",
          children: L("healthShareHint", "开启后，聊天时角色会自然感知并关心你对应的身体状态")
        }), [{
          key: "period",
          label: L("healthMenstrual", "月经")
        }, {
          key: "sleep",
          label: L("healthSleep", "睡眠")
        }, {
          key: "steps",
          label: L("healthSteps", "步数")
        }, {
          key: "pressure",
          label: L("healthPressure", "压力")
        }, {
          key: "exercise",
          label: L("healthExercise", "运动")
        }].map(({
          key: s,
          label: a
        }) => o.jsxs("div", {
          className: "nuo-health-share-row",
          children: [o.jsx("span", {
            className: "nuo-health-share-label",
            children: a
          }), o.jsx("button", {
            type: "button",
            className: "nuo-health-switch " + (ee[s] ? "on" : ""),
            onClick: () => (async s => {
              const a = !ee[s];
              se(e => ({
                ...e,
                [s]: a
              }));
              try {
                await e.setShare(_e, s, a);
              } catch (l) {}
            })(s),
            role: "switch",
            "aria-checked": ee[s],
            children: o.jsx("span", {
              className: "nuo-health-switch-knob"
            })
          })]
        }, s))]
      }), o.jsxs("div", {
        className: "nuo-health-chart-card",
        children: [o.jsx("div", {
          className: "nuo-health-chart-title",
          children: L("healthAiWriteTitle", "让角色帮你记录")
        }), o.jsx("div", {
          className: "nuo-health-share-hint",
          children: L("healthAiWriteHint", "开启后，聊天中你提到的步数／睡眠／运动／经期，角色会自动帮你记进健康 App（会增加少量 token）。默认关闭。")
        }), o.jsxs("div", {
          className: "nuo-health-share-row",
          children: [o.jsx("span", {
            className: "nuo-health-share-label",
            children: L("healthAiWriteLabel", "允许角色记录健康数据")
          }), o.jsx("button", {
            type: "button",
            className: "nuo-health-switch " + (Se ? "on" : ""),
            onClick: async () => {
              const s = !Se;
              fe(s);
              try {
                await e.setAiWrite(_e, s);
              } catch (a) {}
            },
            role: "switch",
            "aria-checked": Se,
            children: o.jsx("span", {
              className: "nuo-health-switch-knob"
            })
          })]
        })]
      }), o.jsx("div", {
        className: "nuo-health-foot-note",
        children: L("healthAiNote", "角色会自然地感知你的身体状态并关心你")
      })]
    }), te && ie && o.jsx("div", {
      className: "nuo-health-sheet-mask",
      onClick: Le,
      children: o.jsxs("div", {
        className: "nuo-health-sheet",
        onClick: e => e.stopPropagation(),
        children: [o.jsxs("div", {
          className: "nuo-health-sheet-head",
          children: [o.jsxs("span", {
            children: [te, te === Ze ? ` · ${L("healthToday", "今天")}` : ""]
          }), o.jsx("button", {
            onClick: Le,
            "aria-label": "close",
            children: o.jsx(N, {
              size: 20
            })
          })]
        }), o.jsxs("div", {
          className: "nuo-health-sheet-body",
          children: [o.jsxs("div", {
            className: "nuo-health-btn-row",
            children: [o.jsx("button", {
              className: "nuo-health-btn " + (ie.isStart ? "primary" : ""),
              onClick: async () => {
                if (te) {
                  if (ie.isStart) {
                    const s = (await e.getByDate(_e, te)).find(e => e.type === "period_start");
                    if (s) {
                      await e.remove(s._id);
                    }
                    Ue({
                      isStart: false
                    });
                  } else {
                    await e.add(_e, {
                      type: "period_start",
                      date: te
                    });
                    Ue({
                      isStart: true
                    });
                  }
                }
              },
              children: ie.isStart ? `✓ ${L("healthPeriodStart", "经期开始")}` : L("healthMarkStartShort", "标记经期开始")
            }), o.jsx("button", {
              className: "nuo-health-btn " + (ie.isEnd ? "primary" : ""),
              onClick: async () => {
                if (te) {
                  if (ie.isEnd) {
                    const s = (await e.getByDate(_e, te)).find(e => e.type === "period_end");
                    if (s) {
                      await e.remove(s._id);
                    }
                    Ue({
                      isEnd: false
                    });
                  } else {
                    await e.add(_e, {
                      type: "period_end",
                      date: te
                    });
                    Ue({
                      isEnd: true
                    });
                  }
                }
              },
              children: ie.isEnd ? `✓ ${L("healthPeriodEnd", "经期结束")}` : L("healthMarkEndShort", "标记经期结束")
            })]
          }), o.jsx("div", {
            className: "nuo-health-tags-label",
            children: L("healthFlow", "流量")
          }), o.jsx("div", {
            className: "nuo-health-chips",
            children: D.map(e => o.jsx("button", {
              className: "nuo-health-chip " + (ie.flow === e ? "on" : ""),
              onClick: () => Be({
                flow: ie.flow === e ? null : e
              }),
              children: Ve(e)
            }, e))
          }), o.jsx("div", {
            className: "nuo-health-tags-label",
            children: L("healthSymptoms", "症状")
          }), o.jsx("div", {
            className: "nuo-health-chips",
            children: M.map(e => o.jsx("button", {
              className: "nuo-health-chip " + ((ie.symptoms || []).includes(e) ? "on" : ""),
              onClick: () => (e => {
                const s = ie.symptoms || [];
                Be({
                  symptoms: s.includes(e) ? s.filter(s => s !== e) : [...s, e]
                });
              })(e),
              children: Ye(e)
            }, e))
          }), o.jsx("div", {
            className: "nuo-health-tags-label",
            children: L("healthMood", "心情")
          }), o.jsx("div", {
            className: "nuo-health-chips",
            children: F.map(e => o.jsx("button", {
              className: "nuo-health-chip " + (ie.mood === e ? "on" : ""),
              onClick: () => Be({
                mood: ie.mood === e ? null : e
              }),
              children: Ke(e)
            }, e))
          }), o.jsxs("div", {
            className: "nuo-health-sheet-inputs",
            children: [o.jsxs("div", {
              className: "nuo-health-input-group",
              children: [o.jsx(j, {
                size: 16
              }), o.jsx("input", {
                type: "number",
                inputMode: "numeric",
                value: ie.steps,
                onChange: s => (async s => {
                  Ue({
                    steps: s
                  });
                  const a = parseInt(s, 10);
                  if (Number.isFinite(a) && a >= 0) {
                    await e.setForDate(_e, "steps", te, {
                      value: a
                    });
                  }
                })(s.target.value),
                placeholder: L("healthSteps", "步数")
              })]
            }), o.jsxs("div", {
              className: "nuo-health-input-group",
              children: [o.jsx(x, {
                size: 16
              }), o.jsx("input", {
                type: "number",
                inputMode: "decimal",
                step: "0.5",
                value: ie.sleep,
                onChange: s => (async s => {
                  Ue({
                    sleep: s
                  });
                  const a = parseFloat(s);
                  if (Number.isFinite(a) && a >= 0 && a <= 24) {
                    await e.setForDate(_e, "sleep", te, {
                      value: a,
                      segments: null
                    });
                  }
                })(s.target.value),
                disabled: (ie.sleepSegments || []).length > 0,
                placeholder: L("healthSleep", "睡眠")
              })]
            })]
          }), o.jsxs("div", {
            className: "nuo-health-sleep-segs",
            children: [(ie.sleepSegments || []).map((e, s) => o.jsxs("div", {
              className: "nuo-health-sleep-seg",
              children: [o.jsx(x, {
                size: 14
              }), o.jsx("input", {
                type: "time",
                value: e.start || "",
                onChange: e => We(s, {
                  start: e.target.value
                })
              }), o.jsx("span", {
                className: "nuo-health-sleep-seg-arrow",
                children: "→"
              }), o.jsx("input", {
                type: "time",
                value: e.end || "",
                onChange: e => We(s, {
                  end: e.target.value
                })
              }), o.jsx("button", {
                className: "nuo-health-sleep-seg-del",
                onClick: () => (e => {
                  const s = (ie.sleepSegments || []).filter((s, a) => a !== e);
                  const a = c(s);
                  Ue({
                    sleepSegments: s,
                    sleep: a != null ? String(a) : ""
                  });
                  He(s);
                })(s),
                "aria-label": L("healthDelete", "删除"),
                children: "×"
              })]
            }, s)), o.jsxs("button", {
              className: "nuo-health-sleep-seg-add",
              onClick: () => {
                const e = [...(ie.sleepSegments || []), {
                  start: "23:00",
                  end: "07:00"
                }];
                const s = c(e);
                Ue({
                  sleepSegments: e,
                  sleep: s != null ? String(s) : ""
                });
                He(e);
              },
              children: ["+ ", L("healthAddSleepSegment", "添加睡眠时段")]
            }), (ie.sleepSegments || []).length > 0 && ie.sleep && o.jsxs("span", {
              className: "nuo-health-sleep-seg-total",
              children: [L("healthSleepTotal", "共"), " ", ie.sleep, "h"]
            })]
          }), o.jsxs("div", {
            className: "nuo-health-tags-label",
            children: [L("healthPressure", "压力指数"), ie.pressure ? ` (${L("healthAvgLabel", "日均")}: ${ie.pressure}/10)` : " —"]
          }), o.jsxs("div", {
            className: "nuo-health-pressure-points",
            children: [(ie.pressurePoints || []).map((e, s) => o.jsxs("div", {
              className: "nuo-health-pressure-point-row",
              children: [o.jsx("input", {
                type: "time",
                value: e.time || "",
                onChange: e => Ge(s, {
                  time: e.target.value
                })
              }), o.jsx("input", {
                type: "range",
                min: "0",
                max: "10",
                step: "0.1",
                value: e.value || 0,
                onChange: e => Ge(s, {
                  value: parseFloat(e.target.value)
                }),
                className: "nuo-health-pressure-slider mini"
              }), o.jsx("span", {
                className: "nuo-health-pt-val",
                children: e.value
              }), o.jsx("button", {
                className: "nuo-health-pt-del",
                onClick: () => (e => {
                  const s = (ie.pressurePoints || []).filter((s, a) => a !== e);
                  const a = s.map(e => parseFloat(e.value)).filter(Number.isFinite);
                  const l = a.length > 0 ? Math.round(a.reduce((e, s) => e + s, 0) / a.length * 10) / 10 : 0;
                  Ue({
                    pressurePoints: s,
                    pressure: s.length > 0 ? String(l) : ""
                  });
                  Re(s);
                })(s),
                "aria-label": "delete",
                children: "×"
              })]
            }, s)), o.jsxs("button", {
              className: "nuo-health-pt-add",
              onClick: () => {
                const e = [...(ie.pressurePoints || []), {
                  time: "12:00",
                  value: 5
                }];
                const s = e.map(e => parseFloat(e.value)).filter(Number.isFinite);
                const a = s.length > 0 ? Math.round(s.reduce((e, s) => e + s, 0) / s.length * 10) / 10 : 0;
                Ue({
                  pressurePoints: e,
                  pressure: String(a)
                });
                Re(e);
              },
              children: ["+ ", L("healthAddPressurePoint", "添加压力时间点")]
            })]
          }), o.jsx("div", {
            className: "nuo-health-tags-label",
            children: L("healthExercise", "运动")
          }), o.jsx("div", {
            className: "nuo-health-chips",
            children: $.map(e => o.jsx("button", {
              className: "nuo-health-chip " + (ie.exType === e ? "on" : ""),
              onClick: () => qe({
                exType: ie.exType === e ? null : e
              }),
              children: Qe(e)
            }, e))
          }), ie.exType && o.jsxs("div", {
            className: "nuo-health-input-group",
            style: {
              marginTop: 10
            },
            children: [o.jsx(y, {
              size: 16
            }), o.jsx("input", {
              type: "number",
              inputMode: "numeric",
              value: ie.exMin,
              onChange: e => qe({
                exMin: e.target.value
              }),
              placeholder: L("healthExMinPh", "运动时长(分钟)")
            })]
          })]
        }), o.jsx("button", {
          className: "nuo-health-sheet-done",
          onClick: () => {
            Le();
            Ie();
          },
          children: L("healthDone", "完成")
        })]
      })
    }), re && o.jsx("div", {
      className: "nuo-health-sheet-mask",
      onClick: () => ce(false),
      children: o.jsxs("div", {
        className: "nuo-health-sheet",
        onClick: e => e.stopPropagation(),
        children: [o.jsxs("div", {
          className: "nuo-health-sheet-head",
          children: [o.jsx("span", {
            children: L("healthGoalTitle", "每日目标")
          }), o.jsx("button", {
            onClick: () => ce(false),
            "aria-label": "close",
            children: o.jsx(N, {
              size: 20
            })
          })]
        }), o.jsxs("div", {
          className: "nuo-health-sheet-body",
          children: [o.jsx("div", {
            className: "nuo-health-tags-label",
            children: L("healthSteps", "步数")
          }), o.jsxs("div", {
            className: "nuo-health-input-group",
            children: [o.jsx(j, {
              size: 16
            }), o.jsx("input", {
              type: "number",
              inputMode: "numeric",
              value: oe,
              onChange: e => de(e.target.value),
              placeholder: "8000"
            })]
          }), o.jsxs("div", {
            className: "nuo-health-tags-label",
            children: [L("healthSleep", "睡眠"), " (h)"]
          }), o.jsxs("div", {
            className: "nuo-health-input-group",
            children: [o.jsx(x, {
              size: 16
            }), o.jsx("input", {
              type: "number",
              inputMode: "decimal",
              step: "0.5",
              value: ue,
              onChange: e => pe(e.target.value),
              placeholder: "8"
            })]
          })]
        }), o.jsx("button", {
          className: "nuo-health-sheet-done",
          onClick: async () => {
            const s = parseInt(oe, 10);
            const a = parseFloat(ue);
            await e.setProfile(_e, {
              stepsGoal: Number.isFinite(s) && s > 0 ? s : 8000,
              sleepGoal: Number.isFinite(a) && a > 0 ? a : 8
            });
            ce(false);
            Ie();
          },
          children: L("healthDone", "完成")
        })]
      })
    }), me && o.jsx("div", {
      className: "nuo-health-sheet-mask",
      onClick: () => ve(false),
      children: o.jsxs("div", {
        className: "nuo-health-sheet",
        onClick: e => e.stopPropagation(),
        children: [o.jsxs("div", {
          className: "nuo-health-sheet-head",
          children: [o.jsx("span", {
            children: L("healthCycleSettings", "周期设定")
          }), o.jsx("button", {
            onClick: () => ve(false),
            "aria-label": "close",
            children: o.jsx(N, {
              size: 20
            })
          })]
        }), o.jsxs("div", {
          className: "nuo-health-sheet-body",
          children: [o.jsx("div", {
            className: "nuo-health-tags-label",
            children: L("healthAvgCycleLabel", "平均周期（两次月经间隔）")
          }), o.jsxs("div", {
            className: "nuo-health-input-group",
            children: [o.jsx(p, {
              size: 16
            }), o.jsx("input", {
              type: "number",
              inputMode: "numeric",
              value: xe,
              onChange: e => je(e.target.value),
              placeholder: "28"
            }), o.jsx("span", {
              className: "nuo-health-input-unit",
              children: L("healthDaysUnit", "天")
            })]
          }), o.jsx("div", {
            className: "nuo-health-tags-label",
            children: L("healthAvgPeriodLenLabel", "平均经期时长（一次持续）")
          }), o.jsxs("div", {
            className: "nuo-health-input-group",
            children: [o.jsx(p, {
              size: 16
            }), o.jsx("input", {
              type: "number",
              inputMode: "numeric",
              value: ye,
              onChange: e => Ne(e.target.value),
              placeholder: "5"
            }), o.jsx("span", {
              className: "nuo-health-input-unit",
              children: L("healthDaysUnit", "天")
            })]
          }), o.jsx("div", {
            className: "nuo-health-cycle-hint",
            children: L("healthCycleHint", "记录满两次经期后，会自动按你的真实数据校正这个周期。")
          })]
        }), o.jsx("button", {
          className: "nuo-health-sheet-done",
          onClick: async () => {
            const s = parseInt(xe, 10);
            const a = parseInt(ye, 10);
            await e.setProfile(_e, {
              avgCycle: Number.isFinite(s) && s >= 15 && s <= 60 ? s : 28,
              avgPeriodLen: Number.isFinite(a) && a >= 1 && a <= 15 ? a : 5
            });
            ve(false);
            Ie();
          },
          children: L("healthDone", "完成")
        })]
      })
    })]
  });
};
export { T as default };