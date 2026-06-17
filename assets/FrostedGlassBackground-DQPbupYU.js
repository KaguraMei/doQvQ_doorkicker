import { r as e, j as t } from "./vendor-react-B2VXkTUV.js";
import { u as o, d as a } from "./native-pet-CTNtZgMA.js";
const s = () => {
  const [s, i] = o("homeWallpaper", "");
  e.useEffect(() => {
    const e = e => {
      if (e.detail !== undefined && e.detail !== null) {
        i(e.detail);
      }
    };
    window.addEventListener("wallpaper-changed", e);
    return () => {
      window.removeEventListener("wallpaper-changed", e);
    };
  }, [i]);
  if (s) {
    if (function () {
      if (a()) {
        return true;
      }
      try {
        const e = /iP(hone|ad|od)/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
        const t = window.navigator.standalone === true || window.matchMedia && window.matchMedia("(display-mode: standalone)").matches;
        return e && t;
      } catch (e) {
        return false;
      }
    }()) {
      return t.jsxs("div", {
        className: "frosted-glass-container",
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 0,
          pointerEvents: "none"
        },
        children: [t.jsx("div", {
          style: {
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${s})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }
        }), t.jsx("div", {
          style: {
            position: "absolute",
            inset: 0,
            background: "var(--glass-overlay-color, rgba(255, 255, 255, 0.45))"
          }
        })]
      });
    } else {
      return t.jsxs("div", {
        className: "frosted-glass-container",
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 0,
          pointerEvents: "none"
        },
        children: [t.jsx("div", {
          className: "fg-blur-layer",
          style: {
            position: "absolute",
            top: "-10%",
            left: "-10%",
            width: "120%",
            height: "120%",
            backgroundImage: `url(${s})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(50px) saturate(200%) brightness(1.1)",
            transform: "translate3d(0,0,0)"
          }
        }), t.jsx("div", {
          className: "fg-tint-layer",
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "var(--glass-overlay-color, rgba(255, 255, 255, 0.45))",
            backdropFilter: "brightness(1.1)"
          }
        }), t.jsx("div", {
          className: "fg-noise-layer",
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.03,
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            pointerEvents: "none"
          }
        })]
      });
    }
  } else {
    return t.jsx("div", {
      style: {
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
      }
    });
  }
};
export { s as F };