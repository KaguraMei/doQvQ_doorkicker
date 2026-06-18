const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["assets/native-pet-CTNtZgMA.js", "assets/vendor-react-B2VXkTUV.js", "assets/vendor-dexie-KLdnSHz2.js", "assets/vendor-jszip-DU-5YDGO.js", "assets/vendor-lucide-DBv09HTV.js", "assets/native-pet-D9YoqRtr.css"]) => i.map(i => d[i]);
import { bP as e, _ as t, i, a2 as n } from "./native-pet-CTNtZgMA.js";
import "./vendor-react-B2VXkTUV.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
import "./vendor-lucide-DBv09HTV.js";
const r = 940000;
const a = 20;
function o() {
  return i() || n();
}
async function c({
  userId: i,
  enabled: n = true,
  t: a
} = {}) {
  if (!o() || !i) {
    return;
  }
  const c = (e, t) => {
    try {
      const i = a && a(e);
      if (i && i !== e) {
        return i;
      } else {
        return t;
      }
    } catch (i) {
      return t;
    }
  };
  const s = c("healthPeriodNotifTitle", "經期快到了 🌸");
  const l = c("healthPeriodNotifBody", "預計明天可能來月經,記得備好衛生用品,早點休息～");
  let d = [];
  if (n) {
    try {
      d = function (e, t = new Date()) {
        const i = [];
        if (!e || !e.lastStart || !e.nextPredicted) {
          return i;
        }
        const n = e.avgCycle && e.avgCycle > 0 ? e.avgCycle : 28;
        const r = function (e) {
          if (!e || typeof e != "string") {
            return null;
          }
          const [t, i, n] = e.split("-").map(Number);
          if (t && i && n) {
            return new Date(t, i - 1, n, 0, 0, 0, 0);
          } else {
            return null;
          }
        }(e.nextPredicted);
        if (!r) {
          return i;
        }
        for (let a = 0; a < 3; a++) {
          const e = new Date(r);
          e.setDate(e.getDate() + a * n);
          const o = new Date(e);
          o.setDate(o.getDate() - 1);
          o.setHours(20, 0, 0, 0);
          if (o.getTime() <= t.getTime()) {
            continue;
          }
          const c = String(e.getMonth() + 1).padStart(2, "0");
          const s = String(e.getDate()).padStart(2, "0");
          i.push({
            fireAt: o,
            predictedDate: `${e.getFullYear()}-${c}-${s}`,
            cycleIndex: a
          });
        }
        return i;
      }(await e.computeCycle(i));
    } catch (u) {
      console.warn("[periodReminderScheduler] computeCycle failed:", u == null ? undefined : u.message);
    }
  }
  try {
    const {
      LocalNotifications: e
    } = await t(async () => {
      const {
        LocalNotifications: e
      } = await import("./native-pet-CTNtZgMA.js").then(e => e.cK);
      return {
        LocalNotifications: e
      };
    }, __vite__mapDeps([0, 1, 2, 3, 4, 5]));
    const i = [];
    for (let t = 0; t < 20; t++) {
      i.push({
        id: r + t
      });
    }
    try {
      await e.cancel({
        notifications: i
      });
    } catch (p) {}
    if (d.length === 0) {
      return;
    }
    try {
      const t = await e.checkPermissions();
      if ((t == null ? undefined : t.display) !== "granted") {
        await e.requestPermissions();
      }
    } catch (p) {}
    const n = d.map((e, t) => ({
      id: r + t,
      title: s,
      body: l,
      schedule: {
        at: e.fireAt,
        allowWhileIdle: true
      },
      autoCancel: true,
      extra: {
        kind: "period_reminder",
        predictedDate: e.predictedDate,
        screen: "health-screen"
      }
    }));
    await e.schedule({
      notifications: n
    });
  } catch (u) {
    console.warn("[periodReminderScheduler] reschedule failed:", u == null ? undefined : u.message);
  }
}
export { r as PERIOD_REMINDER_ID_BASE, a as PERIOD_REMINDER_ID_RANGE, o as isPeriodReminderEnv, c as reschedulePeriodReminders };