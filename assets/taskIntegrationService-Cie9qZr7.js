import { ap as e, aq as t } from "./native-pet-CTNtZgMA.js";
const r = "nuojiji_task_completion_queue";
function a(r, a, n, o, s, c, i = {}) {
  const d = `calendar_todos_user_${n}`;
  const u = e(d) || [];
  const l = i.taskMeta || [];
  const p = new Date();
  let m = 0;
  const y = r.map((e, t) => {
    const r = l[t] || {};
    const d = r.frequency || "once";
    let u;
    if (d === "daily") {
      u = {
        type: "daily",
        interval: 1,
        daysOfWeek: [],
        exceptions: []
      };
    } else if (d === "weekly") {
      u = {
        type: "weekly",
        interval: 1,
        daysOfWeek: [p.getDay()],
        exceptions: []
      };
    }
    let y = p.toISOString().split("T")[0];
    if (!u && i.spreadDays) {
      const e = new Date(p);
      e.setDate(e.getDate() + m);
      y = e.toISOString().split("T")[0];
      m++;
    }
    const f = function (e, t, r, a, n, o, s, c = {}) {
      const i = Date.now();
      const d = new Date().toISOString().split("T")[0];
      return {
        id: i + t,
        text: e,
        dueDate: c.dueDate || d,
        completed: false,
        completedAt: null,
        completedDates: {},
        ownerId: r,
        ownerType: "user",
        supervisorId: a || null,
        supervisor: n || "",
        supervisorAvatar: o || "",
        comment: "",
        createdAt: i,
        recurrence: c.recurrence || undefined,
        sourceRef: {
          type: "whitedog-task",
          id: String(t),
          parentId: s,
          label: e,
          userId: r,
          charId: a || undefined
        }
      };
    }(e, t, n, o, s, c, a, {
      dueDate: y,
      recurrence: u
    });
    if (r.usePomodoro) {
      f.usePomodoro = true;
    }
    return f;
  });
  t(d, [...u, ...y]);
  window.dispatchEvent(new CustomEvent("calendar-data-updated"));
  return y.map(e => e.id);
}
function n(r, a) {
  const n = `calendar_todos_user_${a}`;
  const o = e(n);
  if (!Array.isArray(o)) {
    return false;
  }
  let s = false;
  const c = o.map(e => String(e.id) !== String(r) || e.completed ? e : (s = true, {
    ...e,
    completed: true,
    completedAt: Date.now()
  }));
  if (s) {
    t(n, c);
    window.dispatchEvent(new CustomEvent("calendar-data-updated"));
  }
  return s;
}
function o(e) {
  try {
    const t = localStorage.getItem(r);
    const a = t ? JSON.parse(t) : [];
    a.push({
      ...e,
      timestamp: Date.now()
    });
    localStorage.setItem(r, JSON.stringify(a));
  } catch (t) {}
}
function s(e) {
  try {
    const t = localStorage.getItem(r);
    if (!t) {
      return [];
    }
    const a = JSON.parse(t);
    const n = a.filter(t => t.userId === e);
    const o = a.filter(t => t.userId !== e);
    localStorage.setItem(r, JSON.stringify(o));
    return n;
  } catch (t) {
    return [];
  }
}
export { o as a, n as c, s as p, a as s };