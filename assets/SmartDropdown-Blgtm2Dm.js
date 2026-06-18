import { r as e, j as t, R as n } from "./vendor-react-B2VXkTUV.js";
const o = ({
  value: o,
  options: r,
  onChange: s,
  label: a,
  className: i,
  style: d
}) => {
  var l;
  const [c, m] = e.useState(false);
  const p = e.useRef(null);
  const [u, w] = e.useState({
    top: 0,
    right: 0
  });
  const h = () => {
    if (p.current) {
      const e = p.current.getBoundingClientRect();
      const t = Math.min(r.length * 40 + 10, window.innerHeight * 0.7);
      const n = window.innerHeight - e.bottom;
      e.top;
      const o = n >= t ? e.bottom + 4 : Math.max(10, e.top - t - 4);
      w({
        top: o,
        right: window.innerWidth - e.right,
        maxHeight: window.innerHeight * 0.7
      });
    }
  };
  e.useEffect(() => {
    const e = e => {
      if (!e.target.closest(".smart-dropdown-menu")) {
        if (p.current && !p.current.contains(e.target)) {
          m(false);
        }
      }
    };
    document.addEventListener("mousedown", e);
    if (c) {
      window.addEventListener("scroll", h, true);
      window.addEventListener("resize", h);
      h();
    }
    return () => {
      document.removeEventListener("mousedown", e);
      window.removeEventListener("scroll", h, true);
      window.removeEventListener("resize", h);
    };
  }, [c]);
  const v = ((l = r.find(e => e.value === o || e.id === o)) == null ? undefined : l.label) || o;
  const g = o;
  return t.jsxs("div", {
    className: `smart-dropdown-wrapper ${i || ""}`,
    ref: p,
    onClick: () => m(!c),
    style: d,
    children: [t.jsxs("div", {
      className: "smart-dropdown-trigger",
      children: [t.jsx("span", {
        className: "smart-dropdown-label",
        children: v
      }), t.jsx("span", {
        className: "smart-dropdown-chevron " + (c ? "open" : ""),
        children: "›"
      })]
    }), c && n.createPortal(t.jsx("div", {
      className: "smart-dropdown-menu",
      style: {
        top: u.top,
        right: u.right,
        left: "auto",
        position: "fixed",
        width: "auto",
        minWidth: "220px",
        maxWidth: "85vw",
        maxHeight: u.maxHeight || "auto",
        overflowY: "auto",
        zIndex: 9999
      },
      onClick: e => e.stopPropagation(),
      onMouseDown: e => e.stopPropagation(),
      children: r.map(e => t.jsxs("div", {
        className: "smart-dropdown-item " + (g === (e.value || e.id) ? "active" : ""),
        onClick: t => {
          t.stopPropagation();
          s(e.value || e.id);
          m(false);
        },
        children: [t.jsx("span", {
          children: e.label
        }), g === (e.value || e.id) && t.jsx("span", {
          className: "check-mark",
          children: "✓"
        })]
      }, e.id || e.value))
    }), document.body)]
  });
};
export { o as S };