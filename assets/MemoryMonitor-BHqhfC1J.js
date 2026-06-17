import { r as e, j as t } from "./vendor-react-B2VXkTUV.js";
const n = "nuojiji_debug_memory_monitor_pos";
const i = e => typeof e == "number" && isFinite(e) ? (e / 1048576).toFixed(1) : "—";
const o = () => {
  const [o, r] = e.useState({
    heapUsed: null,
    heapLimit: null,
    domNodes: 0,
    msgCount: 0,
    idbUsage: null,
    idbQuota: null
  });
  const [a, s] = e.useState(false);
  const [d, l] = e.useState(() => {
    try {
      const e = localStorage.getItem(n);
      if (e) {
        return JSON.parse(e);
      }
    } catch (e) {}
    return {
      x: 8,
      y: 60
    };
  });
  const u = e.useRef({
    dragging: false,
    startX: 0,
    startY: 0,
    origX: 0,
    origY: 0
  });
  e.useEffect(() => {
    let e = false;
    let t = 0;
    const n = async () => {
      var n;
      var i;
      var o;
      if (e) {
        return;
      }
      const a = {
        heapUsed: ((n = performance == null ? undefined : performance.memory) == null ? undefined : n.usedJSHeapSize) ?? null,
        heapLimit: ((i = performance == null ? undefined : performance.memory) == null ? undefined : i.jsHeapSizeLimit) ?? null,
        domNodes: document.getElementsByTagName("*").length,
        msgCount: typeof window.__nuojiji_debug_msg_count == "number" ? window.__nuojiji_debug_msg_count : 0
      };
      if (t % 5 == 0 && ((o = navigator.storage) == null ? undefined : o.estimate)) {
        try {
          const e = await navigator.storage.estimate();
          a.idbUsage = e.usage ?? null;
          a.idbQuota = e.quota ?? null;
        } catch (s) {}
      }
      t++;
      if (!e) {
        r(e => ({
          heapUsed: a.heapUsed,
          heapLimit: a.heapLimit,
          domNodes: a.domNodes,
          msgCount: a.msgCount,
          idbUsage: a.idbUsage ?? e.idbUsage,
          idbQuota: a.idbQuota ?? e.idbQuota
        }));
      }
    };
    n();
    const i = setInterval(n, 2000);
    return () => {
      e = true;
      clearInterval(i);
    };
  }, []);
  const c = () => {
    if (u.current.dragging) {
      u.current.dragging = false;
      try {
        localStorage.setItem(n, JSON.stringify(d));
      } catch (e) {}
    }
  };
  const g = o.heapUsed && o.heapLimit ? Math.round(o.heapUsed / o.heapLimit * 100) : null;
  const p = g == null ? "#888" : g > 80 ? "#ff453a" : g > 60 ? "#ff9f0a" : "#30d158";
  return t.jsxs("div", {
    style: {
      position: "fixed",
      left: d.x,
      top: d.y,
      zIndex: 999999,
      background: "rgba(0, 0, 0, 0.78)",
      color: "#fff",
      fontFamily: "ui-monospace, Menlo, monospace",
      fontSize: "11px",
      lineHeight: "1.45",
      padding: a ? "4px 8px" : "6px 10px",
      borderRadius: "8px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
      pointerEvents: "auto",
      userSelect: "none",
      touchAction: "none",
      minWidth: a ? "auto" : "160px",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)"
    },
    onPointerDown: e => {
      var t;
      var n;
      var i;
      var o;
      if (!((n = (t = e.target) == null ? undefined : t.dataset) == null ? undefined : n.nodrag)) {
        u.current = {
          dragging: true,
          startX: e.clientX,
          startY: e.clientY,
          origX: d.x,
          origY: d.y
        };
        if ((o = (i = e.currentTarget).setPointerCapture) != null) {
          o.call(i, e.pointerId);
        }
      }
    },
    onPointerMove: e => {
      if (!u.current.dragging) {
        return;
      }
      const t = e.clientX - u.current.startX;
      const n = e.clientY - u.current.startY;
      const i = Math.max(0, Math.min(window.innerWidth - 60, u.current.origX + t));
      const o = Math.max(0, Math.min(window.innerHeight - 30, u.current.origY + n));
      l({
        x: i,
        y: o
      });
    },
    onPointerUp: c,
    onPointerCancel: c,
    children: [t.jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "8px"
      },
      children: [t.jsx("span", {
        style: {
          color: p,
          fontWeight: 700
        },
        children: a ? `${i(o.heapUsed)}MB` : `MEM ${i(o.heapUsed)}MB`
      }), t.jsx("span", {
        "data-nodrag": "1",
        onClick: e => {
          e.stopPropagation();
          s(e => !e);
        },
        style: {
          cursor: "pointer",
          opacity: 0.6,
          padding: "0 4px"
        },
        children: a ? "▢" : "—"
      })]
    }), !a && t.jsxs(t.Fragment, {
      children: [g != null && t.jsxs("div", {
        style: {
          color: p
        },
        children: ["heap ", g, "% / ", i(o.heapLimit), "MB"]
      }), t.jsxs("div", {
        children: ["DOM ", o.domNodes.toLocaleString()]
      }), t.jsxs("div", {
        children: ["msgs ", o.msgCount]
      }), o.idbUsage != null && t.jsxs("div", {
        style: {
          opacity: 0.8
        },
        children: ["IDB ", i(o.idbUsage), "/", i(o.idbQuota), "MB"]
      })]
    })]
  });
};
export { o as default };