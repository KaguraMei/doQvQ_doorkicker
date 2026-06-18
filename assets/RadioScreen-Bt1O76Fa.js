import { r as e, j as t, b as n, R as r, d as i } from "./vendor-react-B2VXkTUV.js";
import { p as a, G as o, B as s, a5 as l, a4 as c, t as d, k as u, o as g, c as p, a as f, b as x, j as h, u as m, h as b, I as v, v as y } from "./native-pet-CTNtZgMA.js";
import { ay as w, O as j } from "./main-BO9xa-SQ.js";
import { s as k, a as S, l as C, g as I, b as N, c as R, U as _, f as z, F as P, u as A, d as T, e as E, h as L, i as M, j as B, k as U, m as D, n as W, o as F, p as G, q as O, r as H, t as $, v as V, w as q } from "./usePlaylist-1Fnrspon.js";
import { J as Y } from "./vendor-jszip-DU-5YDGO.js";
import { b as J, a as K, d as Q, p as X, c as Z, l as ee, u as te, e as ne } from "./aiRadioService-B2ynJ5ER.js";
import { x as re, I as ie, U as ae, M as oe, T as se, ck as le, d as ce, P as de, aq as ue, H as ge, aX as pe, O as fe, cl as xe, X as he, r as me, ai as be, at as ve, f as ye, ah as we, b9 as je, k as ke, c as Se, G as Ce, Y as Ie, Z as Ne, J as Re, h as _e, q as ze, cm as Pe, e as Ae, u as Te, bs as Ee, cn as Le, ci as Me, R as Be, b as Ue } from "./vendor-lucide-DBv09HTV.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./modulepreload-polyfill-YP0FEG5d.js";
/* empty css                        */
import "./vendor-supabase-Bcpm_8qV.js";
/* empty css                     */
var De = {};
var We = {};
var Fe = {};
let Ge;
const Oe = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
Fe.getSymbolSize = function (e) {
  if (!e) {
    throw new Error("\"version\" cannot be null or undefined");
  }
  if (e < 1 || e > 40) {
    throw new Error("\"version\" should be in range from 1 to 40");
  }
  return e * 4 + 17;
};
Fe.getSymbolTotalCodewords = function (e) {
  return Oe[e];
};
Fe.getBCHDigit = function (e) {
  let t = 0;
  while (e !== 0) {
    t++;
    e >>>= 1;
  }
  return t;
};
Fe.setToSJISFunction = function (e) {
  if (typeof e != "function") {
    throw new Error("\"toSJISFunc\" is not a valid function.");
  }
  Ge = e;
};
Fe.isKanjiModeEnabled = function () {
  return Ge !== undefined;
};
Fe.toSJIS = function (e) {
  return Ge(e);
};
var He;
var $e = {};
function Ve() {
  this.buffer = [];
  this.length = 0;
}
(He = $e).L = {
  bit: 1
};
He.M = {
  bit: 0
};
He.Q = {
  bit: 3
};
He.H = {
  bit: 2
};
He.isValid = function (e) {
  return e && e.bit !== undefined && e.bit >= 0 && e.bit < 4;
};
He.from = function (e, t) {
  if (He.isValid(e)) {
    return e;
  }
  try {
    return function (e) {
      if (typeof e != "string") {
        throw new Error("Param is not a string");
      }
      switch (e.toLowerCase()) {
        case "l":
        case "low":
          return He.L;
        case "m":
        case "medium":
          return He.M;
        case "q":
        case "quartile":
          return He.Q;
        case "h":
        case "high":
          return He.H;
        default:
          throw new Error("Unknown EC Level: " + e);
      }
    }(e);
  } catch (n) {
    return t;
  }
};
Ve.prototype = {
  get: function (e) {
    const t = Math.floor(e / 8);
    return (this.buffer[t] >>> 7 - e % 8 & 1) == 1;
  },
  put: function (e, t) {
    for (let n = 0; n < t; n++) {
      this.putBit((e >>> t - n - 1 & 1) == 1);
    }
  },
  getLengthInBits: function () {
    return this.length;
  },
  putBit: function (e) {
    const t = Math.floor(this.length / 8);
    if (this.buffer.length <= t) {
      this.buffer.push(0);
    }
    if (e) {
      this.buffer[t] |= 128 >>> this.length % 8;
    }
    this.length++;
  }
};
var qe = Ve;
function Ye(e) {
  if (!e || e < 1) {
    throw new Error("BitMatrix size must be defined and greater than 0");
  }
  this.size = e;
  this.data = new Uint8Array(e * e);
  this.reservedBit = new Uint8Array(e * e);
}
Ye.prototype.set = function (e, t, n, r) {
  const i = e * this.size + t;
  this.data[i] = n;
  if (r) {
    this.reservedBit[i] = true;
  }
};
Ye.prototype.get = function (e, t) {
  return this.data[e * this.size + t];
};
Ye.prototype.xor = function (e, t, n) {
  this.data[e * this.size + t] ^= n;
};
Ye.prototype.isReserved = function (e, t) {
  return this.reservedBit[e * this.size + t];
};
var Je = Ye;
var Ke = {};
(function (e) {
  const t = Fe.getSymbolSize;
  e.getRowColCoords = function (e) {
    if (e === 1) {
      return [];
    }
    const n = Math.floor(e / 7) + 2;
    const r = t(e);
    const i = r === 145 ? 26 : Math.ceil((r - 13) / (n * 2 - 2)) * 2;
    const a = [r - 7];
    for (let t = 1; t < n - 1; t++) {
      a[t] = a[t - 1] - i;
    }
    a.push(6);
    return a.reverse();
  };
  e.getPositions = function (t) {
    const n = [];
    const r = e.getRowColCoords(t);
    const i = r.length;
    for (let e = 0; e < i; e++) {
      for (let t = 0; t < i; t++) {
        if ((e !== 0 || t !== 0) && (e !== 0 || t !== i - 1) && (e !== i - 1 || t !== 0)) {
          n.push([r[e], r[t]]);
        }
      }
    }
    return n;
  };
})(Ke);
var Qe = {};
const Xe = Fe.getSymbolSize;
Qe.getPositions = function (e) {
  const t = Xe(e);
  return [[0, 0], [t - 7, 0], [0, t - 7]];
};
var Ze = {};
(function (e) {
  e.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  function t(t, n, r) {
    switch (t) {
      case e.Patterns.PATTERN000:
        return (n + r) % 2 == 0;
      case e.Patterns.PATTERN001:
        return n % 2 == 0;
      case e.Patterns.PATTERN010:
        return r % 3 == 0;
      case e.Patterns.PATTERN011:
        return (n + r) % 3 == 0;
      case e.Patterns.PATTERN100:
        return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
      case e.Patterns.PATTERN101:
        return n * r % 2 + n * r % 3 == 0;
      case e.Patterns.PATTERN110:
        return (n * r % 2 + n * r % 3) % 2 == 0;
      case e.Patterns.PATTERN111:
        return (n * r % 3 + (n + r) % 2) % 2 == 0;
      default:
        throw new Error("bad maskPattern:" + t);
    }
  }
  e.isValid = function (e) {
    return e != null && e !== "" && !isNaN(e) && e >= 0 && e <= 7;
  };
  e.from = function (t) {
    if (e.isValid(t)) {
      return parseInt(t, 10);
    } else {
      return undefined;
    }
  };
  e.getPenaltyN1 = function (e) {
    const t = e.size;
    let n = 0;
    let r = 0;
    let i = 0;
    let a = null;
    let o = null;
    for (let s = 0; s < t; s++) {
      r = i = 0;
      a = o = null;
      for (let l = 0; l < t; l++) {
        let t = e.get(s, l);
        if (t === a) {
          r++;
        } else {
          if (r >= 5) {
            n += r - 5 + 3;
          }
          a = t;
          r = 1;
        }
        t = e.get(l, s);
        if (t === o) {
          i++;
        } else {
          if (i >= 5) {
            n += i - 5 + 3;
          }
          o = t;
          i = 1;
        }
      }
      if (r >= 5) {
        n += r - 5 + 3;
      }
      if (i >= 5) {
        n += i - 5 + 3;
      }
    }
    return n;
  };
  e.getPenaltyN2 = function (e) {
    const t = e.size;
    let n = 0;
    for (let r = 0; r < t - 1; r++) {
      for (let i = 0; i < t - 1; i++) {
        const t = e.get(r, i) + e.get(r, i + 1) + e.get(r + 1, i) + e.get(r + 1, i + 1);
        if (t === 4 || t === 0) {
          n++;
        }
      }
    }
    return n * 3;
  };
  e.getPenaltyN3 = function (e) {
    const t = e.size;
    let n = 0;
    let r = 0;
    let i = 0;
    for (let a = 0; a < t; a++) {
      r = i = 0;
      for (let o = 0; o < t; o++) {
        r = r << 1 & 2047 | e.get(a, o);
        if (o >= 10 && (r === 1488 || r === 93)) {
          n++;
        }
        i = i << 1 & 2047 | e.get(o, a);
        if (o >= 10 && (i === 1488 || i === 93)) {
          n++;
        }
      }
    }
    return n * 40;
  };
  e.getPenaltyN4 = function (e) {
    let t = 0;
    const n = e.data.length;
    for (let r = 0; r < n; r++) {
      t += e.data[r];
    }
    return Math.abs(Math.ceil(t * 100 / n / 5) - 10) * 10;
  };
  e.applyMask = function (e, n) {
    const r = n.size;
    for (let i = 0; i < r; i++) {
      for (let a = 0; a < r; a++) {
        if (!n.isReserved(a, i)) {
          n.xor(a, i, t(e, a, i));
        }
      }
    }
  };
  e.getBestMask = function (t, n) {
    const r = Object.keys(e.Patterns).length;
    let i = 0;
    let a = Infinity;
    for (let o = 0; o < r; o++) {
      n(o);
      e.applyMask(o, t);
      const r = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
      e.applyMask(o, t);
      if (r < a) {
        a = r;
        i = o;
      }
    }
    return i;
  };
})(Ze);
var et = {};
const tt = $e;
const nt = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81];
const rt = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
et.getBlocksCount = function (e, t) {
  switch (t) {
    case tt.L:
      return nt[(e - 1) * 4 + 0];
    case tt.M:
      return nt[(e - 1) * 4 + 1];
    case tt.Q:
      return nt[(e - 1) * 4 + 2];
    case tt.H:
      return nt[(e - 1) * 4 + 3];
    default:
      return;
  }
};
et.getTotalCodewordsCount = function (e, t) {
  switch (t) {
    case tt.L:
      return rt[(e - 1) * 4 + 0];
    case tt.M:
      return rt[(e - 1) * 4 + 1];
    case tt.Q:
      return rt[(e - 1) * 4 + 2];
    case tt.H:
      return rt[(e - 1) * 4 + 3];
    default:
      return;
  }
};
var it = {};
var at = {};
const ot = new Uint8Array(512);
const st = new Uint8Array(256);
(function () {
  let e = 1;
  for (let t = 0; t < 255; t++) {
    ot[t] = e;
    st[e] = t;
    e <<= 1;
    if (e & 256) {
      e ^= 285;
    }
  }
  for (let t = 255; t < 512; t++) {
    ot[t] = ot[t - 255];
  }
})();
at.log = function (e) {
  if (e < 1) {
    throw new Error("log(" + e + ")");
  }
  return st[e];
};
at.exp = function (e) {
  return ot[e];
};
at.mul = function (e, t) {
  if (e === 0 || t === 0) {
    return 0;
  } else {
    return ot[st[e] + st[t]];
  }
};
(function (e) {
  const t = at;
  e.mul = function (e, n) {
    const r = new Uint8Array(e.length + n.length - 1);
    for (let i = 0; i < e.length; i++) {
      for (let a = 0; a < n.length; a++) {
        r[i + a] ^= t.mul(e[i], n[a]);
      }
    }
    return r;
  };
  e.mod = function (e, n) {
    let r = new Uint8Array(e);
    while (r.length - n.length >= 0) {
      const e = r[0];
      for (let a = 0; a < n.length; a++) {
        r[a] ^= t.mul(n[a], e);
      }
      let i = 0;
      while (i < r.length && r[i] === 0) {
        i++;
      }
      r = r.slice(i);
    }
    return r;
  };
  e.generateECPolynomial = function (n) {
    let r = new Uint8Array([1]);
    for (let i = 0; i < n; i++) {
      r = e.mul(r, new Uint8Array([1, t.exp(i)]));
    }
    return r;
  };
})(it);
const lt = it;
function ct(e) {
  this.genPoly = undefined;
  this.degree = e;
  if (this.degree) {
    this.initialize(this.degree);
  }
}
ct.prototype.initialize = function (e) {
  this.degree = e;
  this.genPoly = lt.generateECPolynomial(this.degree);
};
ct.prototype.encode = function (e) {
  if (!this.genPoly) {
    throw new Error("Encoder not initialized");
  }
  const t = new Uint8Array(e.length + this.degree);
  t.set(e);
  const n = lt.mod(t, this.genPoly);
  const r = this.degree - n.length;
  if (r > 0) {
    const e = new Uint8Array(this.degree);
    e.set(n, r);
    return e;
  }
  return n;
};
var dt = ct;
var ut = {};
var gt = {};
var pt = {
  isValid: function (e) {
    return !isNaN(e) && e >= 1 && e <= 40;
  }
};
var ft = {};
const xt = "[0-9]+";
let ht = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
ht = ht.replace(/u/g, "\\u");
const mt = "(?:(?![A-Z0-9 $%*+\\-./:]|" + ht + ")(?:.|[\r\n]))+";
ft.KANJI = new RegExp(ht, "g");
ft.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
ft.BYTE = new RegExp(mt, "g");
ft.NUMERIC = new RegExp(xt, "g");
ft.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
const bt = new RegExp("^" + ht + "$");
const vt = new RegExp("^" + xt + "$");
const yt = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
ft.testKanji = function (e) {
  return bt.test(e);
};
ft.testNumeric = function (e) {
  return vt.test(e);
};
ft.testAlphanumeric = function (e) {
  return yt.test(e);
};
(function (e) {
  const t = pt;
  const n = ft;
  e.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  };
  e.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [9, 11, 13]
  };
  e.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [8, 16, 16]
  };
  e.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [8, 10, 12]
  };
  e.MIXED = {
    bit: -1
  };
  e.getCharCountIndicator = function (e, n) {
    if (!e.ccBits) {
      throw new Error("Invalid mode: " + e);
    }
    if (!t.isValid(n)) {
      throw new Error("Invalid version: " + n);
    }
    if (n >= 1 && n < 10) {
      return e.ccBits[0];
    } else if (n < 27) {
      return e.ccBits[1];
    } else {
      return e.ccBits[2];
    }
  };
  e.getBestModeForData = function (t) {
    if (n.testNumeric(t)) {
      return e.NUMERIC;
    } else if (n.testAlphanumeric(t)) {
      return e.ALPHANUMERIC;
    } else if (n.testKanji(t)) {
      return e.KANJI;
    } else {
      return e.BYTE;
    }
  };
  e.toString = function (e) {
    if (e && e.id) {
      return e.id;
    }
    throw new Error("Invalid mode");
  };
  e.isValid = function (e) {
    return e && e.bit && e.ccBits;
  };
  e.from = function (t, n) {
    if (e.isValid(t)) {
      return t;
    }
    try {
      return function (t) {
        if (typeof t != "string") {
          throw new Error("Param is not a string");
        }
        switch (t.toLowerCase()) {
          case "numeric":
            return e.NUMERIC;
          case "alphanumeric":
            return e.ALPHANUMERIC;
          case "kanji":
            return e.KANJI;
          case "byte":
            return e.BYTE;
          default:
            throw new Error("Unknown mode: " + t);
        }
      }(t);
    } catch (r) {
      return n;
    }
  };
})(gt);
(function (e) {
  const t = Fe;
  const n = et;
  const r = $e;
  const i = gt;
  const a = pt;
  const o = t.getBCHDigit(7973);
  function s(e, t) {
    return i.getCharCountIndicator(e, t) + 4;
  }
  function l(e, t) {
    let n = 0;
    e.forEach(function (e) {
      const r = s(e.mode, t);
      n += r + e.getBitsLength();
    });
    return n;
  }
  e.from = function (e, t) {
    if (a.isValid(e)) {
      return parseInt(e, 10);
    } else {
      return t;
    }
  };
  e.getCapacity = function (e, r, o) {
    if (!a.isValid(e)) {
      throw new Error("Invalid QR Code version");
    }
    if (o === undefined) {
      o = i.BYTE;
    }
    const l = (t.getSymbolTotalCodewords(e) - n.getTotalCodewordsCount(e, r)) * 8;
    if (o === i.MIXED) {
      return l;
    }
    const c = l - s(o, e);
    switch (o) {
      case i.NUMERIC:
        return Math.floor(c / 10 * 3);
      case i.ALPHANUMERIC:
        return Math.floor(c / 11 * 2);
      case i.KANJI:
        return Math.floor(c / 13);
      case i.BYTE:
      default:
        return Math.floor(c / 8);
    }
  };
  e.getBestVersionForData = function (t, n) {
    let a;
    const o = r.from(n, r.M);
    if (Array.isArray(t)) {
      if (t.length > 1) {
        return function (t, n) {
          for (let r = 1; r <= 40; r++) {
            if (l(t, r) <= e.getCapacity(r, n, i.MIXED)) {
              return r;
            }
          }
        }(t, o);
      }
      if (t.length === 0) {
        return 1;
      }
      a = t[0];
    } else {
      a = t;
    }
    return function (t, n, r) {
      for (let i = 1; i <= 40; i++) {
        if (n <= e.getCapacity(i, r, t)) {
          return i;
        }
      }
    }(a.mode, a.getLength(), o);
  };
  e.getEncodedBits = function (e) {
    if (!a.isValid(e) || e < 7) {
      throw new Error("Invalid QR Code version");
    }
    let n = e << 12;
    while (t.getBCHDigit(n) - o >= 0) {
      n ^= 7973 << t.getBCHDigit(n) - o;
    }
    return e << 12 | n;
  };
})(ut);
var wt = {};
const jt = Fe;
const kt = jt.getBCHDigit(1335);
wt.getEncodedBits = function (e, t) {
  const n = e.bit << 3 | t;
  let r = n << 10;
  while (jt.getBCHDigit(r) - kt >= 0) {
    r ^= 1335 << jt.getBCHDigit(r) - kt;
  }
  return (n << 10 | r) ^ 21522;
};
var St = {};
const Ct = gt;
function It(e) {
  this.mode = Ct.NUMERIC;
  this.data = e.toString();
}
It.getBitsLength = function (e) {
  return Math.floor(e / 3) * 10 + (e % 3 ? e % 3 * 3 + 1 : 0);
};
It.prototype.getLength = function () {
  return this.data.length;
};
It.prototype.getBitsLength = function () {
  return It.getBitsLength(this.data.length);
};
It.prototype.write = function (e) {
  let t;
  let n;
  let r;
  for (t = 0; t + 3 <= this.data.length; t += 3) {
    n = this.data.substr(t, 3);
    r = parseInt(n, 10);
    e.put(r, 10);
  }
  const i = this.data.length - t;
  if (i > 0) {
    n = this.data.substr(t);
    r = parseInt(n, 10);
    e.put(r, i * 3 + 1);
  }
};
var Nt = It;
const Rt = gt;
const _t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
function zt(e) {
  this.mode = Rt.ALPHANUMERIC;
  this.data = e;
}
zt.getBitsLength = function (e) {
  return Math.floor(e / 2) * 11 + e % 2 * 6;
};
zt.prototype.getLength = function () {
  return this.data.length;
};
zt.prototype.getBitsLength = function () {
  return zt.getBitsLength(this.data.length);
};
zt.prototype.write = function (e) {
  let t;
  for (t = 0; t + 2 <= this.data.length; t += 2) {
    let n = _t.indexOf(this.data[t]) * 45;
    n += _t.indexOf(this.data[t + 1]);
    e.put(n, 11);
  }
  if (this.data.length % 2) {
    e.put(_t.indexOf(this.data[t]), 6);
  }
};
var Pt = zt;
const At = gt;
function Tt(e) {
  this.mode = At.BYTE;
  this.data = typeof e == "string" ? new TextEncoder().encode(e) : new Uint8Array(e);
}
Tt.getBitsLength = function (e) {
  return e * 8;
};
Tt.prototype.getLength = function () {
  return this.data.length;
};
Tt.prototype.getBitsLength = function () {
  return Tt.getBitsLength(this.data.length);
};
Tt.prototype.write = function (e) {
  for (let t = 0, n = this.data.length; t < n; t++) {
    e.put(this.data[t], 8);
  }
};
var Et = Tt;
const Lt = gt;
const Mt = Fe;
function Bt(e) {
  this.mode = Lt.KANJI;
  this.data = e;
}
Bt.getBitsLength = function (e) {
  return e * 13;
};
Bt.prototype.getLength = function () {
  return this.data.length;
};
Bt.prototype.getBitsLength = function () {
  return Bt.getBitsLength(this.data.length);
};
Bt.prototype.write = function (e) {
  let t;
  for (t = 0; t < this.data.length; t++) {
    let n = Mt.toSJIS(this.data[t]);
    if (n >= 33088 && n <= 40956) {
      n -= 33088;
    } else {
      if (!(n >= 57408) || !(n <= 60351)) {
        throw new Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
      }
      n -= 49472;
    }
    n = (n >>> 8 & 255) * 192 + (n & 255);
    e.put(n, 13);
  }
};
var Ut;
var Dt = Bt;
var Wt = {
  exports: {}
}.exports = Ut = {
  single_source_shortest_paths: function (e, t, n) {
    var r = {};
    var i = {
      [t]: 0
    };
    var a;
    var o;
    var s;
    var l;
    var c;
    var d;
    var u;
    var g = Ut.PriorityQueue.make();
    for (g.push(t, 0); !g.empty();) {
      o = (a = g.pop()).value;
      l = a.cost;
      for (s in c = e[o] || {}) {
        if (c.hasOwnProperty(s)) {
          d = l + c[s];
          u = i[s];
          if (i[s] === undefined || u > d) {
            i[s] = d;
            g.push(s, d);
            r[s] = o;
          }
        }
      }
    }
    if (n !== undefined && i[n] === undefined) {
      var p = ["Could not find a path from ", t, " to ", n, "."].join("");
      throw new Error(p);
    }
    return r;
  },
  extract_shortest_path_from_predecessor_list: function (e, t) {
    var n = [];
    for (var r = t; r;) {
      n.push(r);
      e[r];
      r = e[r];
    }
    n.reverse();
    return n;
  },
  find_path: function (e, t, n) {
    var r = Ut.single_source_shortest_paths(e, t, n);
    return Ut.extract_shortest_path_from_predecessor_list(r, n);
  },
  PriorityQueue: {
    make: function (e) {
      var t;
      var n = Ut.PriorityQueue;
      var r = {};
      e = e || {};
      for (t in n) {
        if (n.hasOwnProperty(t)) {
          r[t] = n[t];
        }
      }
      r.queue = [];
      r.sorter = e.sorter || n.default_sorter;
      return r;
    },
    default_sorter: function (e, t) {
      return e.cost - t.cost;
    },
    push: function (e, t) {
      var n = {
        value: e,
        cost: t
      };
      this.queue.push(n);
      this.queue.sort(this.sorter);
    },
    pop: function () {
      return this.queue.shift();
    },
    empty: function () {
      return this.queue.length === 0;
    }
  }
};
(function (e) {
  const t = gt;
  const n = Nt;
  const r = Pt;
  const i = Et;
  const a = Dt;
  const o = ft;
  const s = Fe;
  const l = Wt;
  function c(e) {
    return unescape(encodeURIComponent(e)).length;
  }
  function d(e, t, n) {
    const r = [];
    let i;
    while ((i = e.exec(n)) !== null) {
      r.push({
        data: i[0],
        index: i.index,
        mode: t,
        length: i[0].length
      });
    }
    return r;
  }
  function u(e) {
    const n = d(o.NUMERIC, t.NUMERIC, e);
    const r = d(o.ALPHANUMERIC, t.ALPHANUMERIC, e);
    let i;
    let a;
    if (s.isKanjiModeEnabled()) {
      i = d(o.BYTE, t.BYTE, e);
      a = d(o.KANJI, t.KANJI, e);
    } else {
      i = d(o.BYTE_KANJI, t.BYTE, e);
      a = [];
    }
    return n.concat(r, i, a).sort(function (e, t) {
      return e.index - t.index;
    }).map(function (e) {
      return {
        data: e.data,
        mode: e.mode,
        length: e.length
      };
    });
  }
  function g(e, o) {
    switch (o) {
      case t.NUMERIC:
        return n.getBitsLength(e);
      case t.ALPHANUMERIC:
        return r.getBitsLength(e);
      case t.KANJI:
        return a.getBitsLength(e);
      case t.BYTE:
        return i.getBitsLength(e);
    }
  }
  function p(e, o) {
    let l;
    const c = t.getBestModeForData(e);
    l = t.from(o, c);
    if (l !== t.BYTE && l.bit < c.bit) {
      throw new Error("\"" + e + "\" cannot be encoded with mode " + t.toString(l) + ".\n Suggested mode is: " + t.toString(c));
    }
    if (l === t.KANJI && !s.isKanjiModeEnabled()) {
      l = t.BYTE;
    }
    switch (l) {
      case t.NUMERIC:
        return new n(e);
      case t.ALPHANUMERIC:
        return new r(e);
      case t.KANJI:
        return new a(e);
      case t.BYTE:
        return new i(e);
    }
  }
  e.fromArray = function (e) {
    return e.reduce(function (e, t) {
      if (typeof t == "string") {
        e.push(p(t, null));
      } else if (t.data) {
        e.push(p(t.data, t.mode));
      }
      return e;
    }, []);
  };
  e.fromString = function (n, r) {
    const i = function (e) {
      const n = [];
      for (let r = 0; r < e.length; r++) {
        const i = e[r];
        switch (i.mode) {
          case t.NUMERIC:
            n.push([i, {
              data: i.data,
              mode: t.ALPHANUMERIC,
              length: i.length
            }, {
              data: i.data,
              mode: t.BYTE,
              length: i.length
            }]);
            break;
          case t.ALPHANUMERIC:
            n.push([i, {
              data: i.data,
              mode: t.BYTE,
              length: i.length
            }]);
            break;
          case t.KANJI:
            n.push([i, {
              data: i.data,
              mode: t.BYTE,
              length: c(i.data)
            }]);
            break;
          case t.BYTE:
            n.push([{
              data: i.data,
              mode: t.BYTE,
              length: c(i.data)
            }]);
        }
      }
      return n;
    }(u(n, s.isKanjiModeEnabled()));
    const a = function (e, n) {
      const r = {};
      const i = {
        start: {}
      };
      let a = ["start"];
      for (let o = 0; o < e.length; o++) {
        const s = e[o];
        const l = [];
        for (let e = 0; e < s.length; e++) {
          const c = s[e];
          const d = "" + o + e;
          l.push(d);
          r[d] = {
            node: c,
            lastCount: 0
          };
          i[d] = {};
          for (let e = 0; e < a.length; e++) {
            const o = a[e];
            if (r[o] && r[o].node.mode === c.mode) {
              i[o][d] = g(r[o].lastCount + c.length, c.mode) - g(r[o].lastCount, c.mode);
              r[o].lastCount += c.length;
            } else {
              if (r[o]) {
                r[o].lastCount = c.length;
              }
              i[o][d] = g(c.length, c.mode) + 4 + t.getCharCountIndicator(c.mode, n);
            }
          }
        }
        a = l;
      }
      for (let t = 0; t < a.length; t++) {
        i[a[t]].end = 0;
      }
      return {
        map: i,
        table: r
      };
    }(i, r);
    const o = l.find_path(a.map, "start", "end");
    const d = [];
    for (let e = 1; e < o.length - 1; e++) {
      d.push(a.table[o[e]].node);
    }
    return e.fromArray(d.reduce(function (e, t) {
      const n = e.length - 1 >= 0 ? e[e.length - 1] : null;
      if (n && n.mode === t.mode) {
        e[e.length - 1].data += t.data;
        return e;
      } else {
        e.push(t);
        return e;
      }
    }, []));
  };
  e.rawSplit = function (t) {
    return e.fromArray(u(t, s.isKanjiModeEnabled()));
  };
})(St);
const Ft = Fe;
const Gt = $e;
const Ot = qe;
const Ht = Je;
const $t = Ke;
const Vt = Qe;
const qt = Ze;
const Yt = et;
const Jt = dt;
const Kt = ut;
const Qt = wt;
const Xt = gt;
const Zt = St;
function en(e, t, n) {
  const r = e.size;
  const i = Qt.getEncodedBits(t, n);
  let a;
  let o;
  for (a = 0; a < 15; a++) {
    o = (i >> a & 1) == 1;
    if (a < 6) {
      e.set(a, 8, o, true);
    } else if (a < 8) {
      e.set(a + 1, 8, o, true);
    } else {
      e.set(r - 15 + a, 8, o, true);
    }
    if (a < 8) {
      e.set(8, r - a - 1, o, true);
    } else if (a < 9) {
      e.set(8, 15 - a - 1 + 1, o, true);
    } else {
      e.set(8, 15 - a - 1, o, true);
    }
  }
  e.set(r - 8, 8, 1, true);
}
function tn(e, t, n, r) {
  let i;
  if (Array.isArray(e)) {
    i = Zt.fromArray(e);
  } else {
    if (typeof e != "string") {
      throw new Error("Invalid data");
    }
    {
      let r = t;
      if (!r) {
        const t = Zt.rawSplit(e);
        r = Kt.getBestVersionForData(t, n);
      }
      i = Zt.fromString(e, r || 40);
    }
  }
  const a = Kt.getBestVersionForData(i, n);
  if (!a) {
    throw new Error("The amount of data is too big to be stored in a QR Code");
  }
  if (t) {
    if (t < a) {
      throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + a + ".\n");
    }
  } else {
    t = a;
  }
  const o = function (e, t, n) {
    const r = new Ot();
    n.forEach(function (t) {
      r.put(t.mode.bit, 4);
      r.put(t.getLength(), Xt.getCharCountIndicator(t.mode, e));
      t.write(r);
    });
    const i = (Ft.getSymbolTotalCodewords(e) - Yt.getTotalCodewordsCount(e, t)) * 8;
    for (r.getLengthInBits() + 4 <= i && r.put(0, 4); r.getLengthInBits() % 8 != 0;) {
      r.putBit(0);
    }
    const a = (i - r.getLengthInBits()) / 8;
    for (let o = 0; o < a; o++) {
      r.put(o % 2 ? 17 : 236, 8);
    }
    return function (e, t, n) {
      const r = Ft.getSymbolTotalCodewords(t);
      const i = r - Yt.getTotalCodewordsCount(t, n);
      const a = Yt.getBlocksCount(t, n);
      const o = a - r % a;
      const s = Math.floor(r / a);
      const l = Math.floor(i / a);
      const c = l + 1;
      const d = s - l;
      const u = new Jt(d);
      let g = 0;
      const p = new Array(a);
      const f = new Array(a);
      let x = 0;
      const h = new Uint8Array(e.buffer);
      for (let w = 0; w < a; w++) {
        const e = w < o ? l : c;
        p[w] = h.slice(g, g + e);
        f[w] = u.encode(p[w]);
        g += e;
        x = Math.max(x, e);
      }
      const m = new Uint8Array(r);
      let b;
      let v;
      let y = 0;
      for (b = 0; b < x; b++) {
        for (v = 0; v < a; v++) {
          if (b < p[v].length) {
            m[y++] = p[v][b];
          }
        }
      }
      for (b = 0; b < d; b++) {
        for (v = 0; v < a; v++) {
          m[y++] = f[v][b];
        }
      }
      return m;
    }(r, e, t);
  }(t, n, i);
  const s = Ft.getSymbolSize(t);
  const l = new Ht(s);
  (function (e, t) {
    const n = e.size;
    const r = Vt.getPositions(t);
    for (let i = 0; i < r.length; i++) {
      const t = r[i][0];
      const a = r[i][1];
      for (let r = -1; r <= 7; r++) {
        if (!(t + r <= -1) && !(n <= t + r)) {
          for (let i = -1; i <= 7; i++) {
            if (!(a + i <= -1) && !(n <= a + i)) {
              if (r >= 0 && r <= 6 && (i === 0 || i === 6) || i >= 0 && i <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && i >= 2 && i <= 4) {
                e.set(t + r, a + i, true, true);
              } else {
                e.set(t + r, a + i, false, true);
              }
            }
          }
        }
      }
    }
  })(l, t);
  (function (e) {
    const t = e.size;
    for (let n = 8; n < t - 8; n++) {
      const t = n % 2 == 0;
      e.set(n, 6, t, true);
      e.set(6, n, t, true);
    }
  })(l);
  (function (e, t) {
    const n = $t.getPositions(t);
    for (let r = 0; r < n.length; r++) {
      const t = n[r][0];
      const i = n[r][1];
      for (let n = -2; n <= 2; n++) {
        for (let r = -2; r <= 2; r++) {
          if (n === -2 || n === 2 || r === -2 || r === 2 || n === 0 && r === 0) {
            e.set(t + n, i + r, true, true);
          } else {
            e.set(t + n, i + r, false, true);
          }
        }
      }
    }
  })(l, t);
  en(l, n, 0);
  if (t >= 7) {
    (function (e, t) {
      const n = e.size;
      const r = Kt.getEncodedBits(t);
      let i;
      let a;
      let o;
      for (let s = 0; s < 18; s++) {
        i = Math.floor(s / 3);
        a = s % 3 + n - 8 - 3;
        o = (r >> s & 1) == 1;
        e.set(i, a, o, true);
        e.set(a, i, o, true);
      }
    })(l, t);
  }
  (function (e, t) {
    const n = e.size;
    let r = -1;
    let i = n - 1;
    let a = 7;
    let o = 0;
    for (let s = n - 1; s > 0; s -= 2) {
      for (s === 6 && s--;;) {
        for (let n = 0; n < 2; n++) {
          if (!e.isReserved(i, s - n)) {
            let r = false;
            if (o < t.length) {
              r = (t[o] >>> a & 1) == 1;
            }
            e.set(i, s - n, r);
            a--;
            if (a === -1) {
              o++;
              a = 7;
            }
          }
        }
        i += r;
        if (i < 0 || n <= i) {
          i -= r;
          r = -r;
          break;
        }
      }
    }
  })(l, o);
  if (isNaN(r)) {
    r = qt.getBestMask(l, en.bind(null, l, n));
  }
  qt.applyMask(r, l);
  en(l, n, r);
  return {
    modules: l,
    version: t,
    errorCorrectionLevel: n,
    maskPattern: r,
    segments: i
  };
}
We.create = function (e, t) {
  if (e === undefined || e === "") {
    throw new Error("No input text");
  }
  let n;
  let r;
  let i = Gt.M;
  if (t !== undefined) {
    i = Gt.from(t.errorCorrectionLevel, Gt.M);
    n = Kt.from(t.version);
    r = qt.from(t.maskPattern);
    if (t.toSJISFunc) {
      Ft.setToSJISFunction(t.toSJISFunc);
    }
  }
  return tn(e, n, i, r);
};
var nn = {};
var rn = {};
(function (e) {
  function t(e) {
    if (typeof e == "number") {
      e = e.toString();
    }
    if (typeof e != "string") {
      throw new Error("Color should be defined as hex string");
    }
    let t = e.slice().replace("#", "").split("");
    if (t.length < 3 || t.length === 5 || t.length > 8) {
      throw new Error("Invalid hex color: " + e);
    }
    if (t.length === 3 || t.length === 4) {
      t = Array.prototype.concat.apply([], t.map(function (e) {
        return [e, e];
      }));
    }
    if (t.length === 6) {
      t.push("F", "F");
    }
    const n = parseInt(t.join(""), 16);
    return {
      r: n >> 24 & 255,
      g: n >> 16 & 255,
      b: n >> 8 & 255,
      a: n & 255,
      hex: "#" + t.slice(0, 6).join("")
    };
  }
  e.getOptions = function (e) {
    e ||= {};
    e.color ||= {};
    const n = e.margin === undefined || e.margin === null || e.margin < 0 ? 4 : e.margin;
    const r = e.width && e.width >= 21 ? e.width : undefined;
    const i = e.scale || 4;
    return {
      width: r,
      scale: r ? 4 : i,
      margin: n,
      color: {
        dark: t(e.color.dark || "#000000ff"),
        light: t(e.color.light || "#ffffffff")
      },
      type: e.type,
      rendererOpts: e.rendererOpts || {}
    };
  };
  e.getScale = function (e, t) {
    if (t.width && t.width >= e + t.margin * 2) {
      return t.width / (e + t.margin * 2);
    } else {
      return t.scale;
    }
  };
  e.getImageWidth = function (t, n) {
    const r = e.getScale(t, n);
    return Math.floor((t + n.margin * 2) * r);
  };
  e.qrToImageData = function (t, n, r) {
    const i = n.modules.size;
    const a = n.modules.data;
    const o = e.getScale(i, r);
    const s = Math.floor((i + r.margin * 2) * o);
    const l = r.margin * o;
    const c = [r.color.light, r.color.dark];
    for (let e = 0; e < s; e++) {
      for (let n = 0; n < s; n++) {
        let d = (e * s + n) * 4;
        let u = r.color.light;
        if (e >= l && n >= l && e < s - l && n < s - l) {
          u = c[a[Math.floor((e - l) / o) * i + Math.floor((n - l) / o)] ? 1 : 0];
        }
        t[d++] = u.r;
        t[d++] = u.g;
        t[d++] = u.b;
        t[d] = u.a;
      }
    }
  };
})(rn);
(function (e) {
  const t = rn;
  e.render = function (e, n, r) {
    let i = r;
    let a = n;
    if (i === undefined && (!n || !n.getContext)) {
      i = n;
      n = undefined;
    }
    if (!n) {
      a = function () {
        try {
          return document.createElement("canvas");
        } catch (e) {
          throw new Error("You need to specify a canvas element");
        }
      }();
    }
    i = t.getOptions(i);
    const o = t.getImageWidth(e.modules.size, i);
    const s = a.getContext("2d");
    const l = s.createImageData(o, o);
    t.qrToImageData(l.data, e, i);
    (function (e, t, n) {
      e.clearRect(0, 0, t.width, t.height);
      t.style ||= {};
      t.height = n;
      t.width = n;
      t.style.height = n + "px";
      t.style.width = n + "px";
    })(s, a, o);
    s.putImageData(l, 0, 0);
    return a;
  };
  e.renderToDataURL = function (t, n, r) {
    let i = r;
    if (i === undefined && (!n || !n.getContext)) {
      i = n;
      n = undefined;
    }
    i ||= {};
    const a = e.render(t, n, i);
    const o = i.type || "image/png";
    const s = i.rendererOpts || {};
    return a.toDataURL(o, s.quality);
  };
})(nn);
var an = {};
const on = rn;
function sn(e, t) {
  const n = e.a / 255;
  const r = t + "=\"" + e.hex + "\"";
  if (n < 1) {
    return r + " " + t + "-opacity=\"" + n.toFixed(2).slice(1) + "\"";
  } else {
    return r;
  }
}
function ln(e, t, n) {
  let r = e + t;
  if (n !== undefined) {
    r += " " + n;
  }
  return r;
}
an.render = function (e, t, n) {
  const r = on.getOptions(t);
  const i = e.modules.size;
  const a = e.modules.data;
  const o = i + r.margin * 2;
  const s = r.color.light.a ? "<path " + sn(r.color.light, "fill") + " d=\"M0 0h" + o + "v" + o + "H0z\"/>" : "";
  const l = "<path " + sn(r.color.dark, "stroke") + " d=\"" + function (e, t, n) {
    let r = "";
    let i = 0;
    let a = false;
    let o = 0;
    for (let s = 0; s < e.length; s++) {
      const l = Math.floor(s % t);
      const c = Math.floor(s / t);
      if (!l && !a) {
        a = true;
      }
      if (e[s]) {
        o++;
        if (!(s > 0) || !(l > 0) || !e[s - 1]) {
          r += a ? ln("M", l + n, 0.5 + c + n) : ln("m", i, 0);
          i = 0;
          a = false;
        }
        if (!(l + 1 < t) || !e[s + 1]) {
          r += ln("h", o);
          o = 0;
        }
      } else {
        i++;
      }
    }
    return r;
  }(a, i, r.margin) + "\"/>";
  const c = "viewBox=\"0 0 " + o + " " + o + "\"";
  const d = "<svg xmlns=\"http://www.w3.org/2000/svg\" " + (r.width ? "width=\"" + r.width + "\" height=\"" + r.width + "\" " : "") + c + " shape-rendering=\"crispEdges\">" + s + l + "</svg>\n";
  if (typeof n == "function") {
    n(null, d);
  }
  return d;
};
const cn = We;
const dn = nn;
const un = an;
function gn(e, t, n, r, i) {
  const a = [].slice.call(arguments, 1);
  const o = a.length;
  const s = typeof a[o - 1] == "function";
  if (!s && (typeof Promise != "function" || !Promise.prototype || !Promise.prototype.then)) {
    throw new Error("Callback required as last argument");
  }
  if (!s) {
    if (o < 1) {
      throw new Error("Too few arguments provided");
    }
    if (o === 1) {
      n = t;
      t = r = undefined;
    } else if (o === 2 && !t.getContext) {
      r = n;
      n = t;
      t = undefined;
    }
    return new Promise(function (i, a) {
      try {
        const a = cn.create(n, r);
        i(e(a, t, r));
      } catch (o) {
        a(o);
      }
    });
  }
  if (o < 2) {
    throw new Error("Too few arguments provided");
  }
  if (o === 2) {
    i = n;
    n = t;
    t = r = undefined;
  } else if (o === 3) {
    if (t.getContext && i === undefined) {
      i = r;
      r = undefined;
    } else {
      i = r;
      r = n;
      n = t;
      t = undefined;
    }
  }
  try {
    const a = cn.create(n, r);
    i(null, e(a, t, r));
  } catch (l) {
    i(l);
  }
}
De.create = cn.create;
De.toCanvas = gn.bind(null, dn.render);
De.toDataURL = gn.bind(null, dn.renderToDataURL);
De.toString = gn.bind(null, function (e, t, n) {
  return un.render(e, n);
});
const pn = /remix|cover|live|翻唱|伴奏|instrumental|acoustic|remaster|karaoke|dj版|加速版|慢速版/i;
function fn(e, t) {
  if (!e.length) {
    return null;
  }
  const n = t.trim().split(/\s+/)[0] || "";
  const r = e => {
    const t = e.name || e.title || "";
    if (pn.test(t)) {
      return false;
    }
    const r = t.replace(n, "").trim();
    return !r || !/[(（]/.test(r) || !pn.test(r);
  };
  const i = e.filter(r);
  const a = e.filter(e => !r(e));
  const o = i.filter(e => e.fee === 0);
  if (o.length > 0) {
    return o[0];
  }
  if (i.length > 0) {
    return i[0];
  }
  const s = a.filter(e => e.fee === 0);
  if (s.length > 0) {
    return s[0];
  } else {
    return e[0];
  }
}
async function xn(e, t = "") {
  if (!e || !e.trim()) {
    return null;
  }
  const n = e.trim();
  try {
    const {
      songs: e
    } = await k(n, {
      limit: 15
    });
    const t = fn(e, n);
    if (t) {
      console.log("[AIRadio] 選歌:", t.name, "| fee:", t.fee, "| 原版:", !pn.test(t.name || ""));
      return hn(t, "netease");
    }
  } catch (i) {
    console.warn("[AIRadio] 網易雲搜歌失敗:", i.message);
  }
  const r = ["kuwo", "kugou", "baidu"];
  for (const a of r) {
    try {
      const {
        songs: e
      } = await S(n, {
        source: a,
        limit: 10
      });
      const t = fn(e, n);
      if (t) {
        console.log("[AIRadio] GD Studio (" + a + ") 選歌:", t.name);
        return hn(t, t.source || a);
      }
    } catch (i) {
      console.warn("[AIRadio] GD Studio (" + a + ") 搜歌失敗:", i.message);
    }
  }
  console.warn("[AIRadio] 所有源都搜不到:", n);
  return null;
}
function hn(e, t = "netease") {
  return {
    id: e.id,
    title: e.name || e.title || "",
    artist: e.artists || e.artist || "",
    cover: e.cover || "",
    duration: e.duration || 0,
    type: "song",
    source: t,
    fromAIRadio: true
  };
}
const mn = "idle";
const bn = "broadcasting";
const vn = "paused";
const yn = "music-playing";
const wn = "generating";
const jn = (() => {
  const e = new ArrayBuffer(8044);
  const t = new DataView(e);
  const n = (e, n) => {
    for (let r = 0; r < n.length; r++) {
      t.setUint8(e + r, n.charCodeAt(r));
    }
  };
  n(0, "RIFF");
  t.setUint32(4, 8036, true);
  n(8, "WAVE");
  n(12, "fmt ");
  t.setUint32(16, 16, true);
  t.setUint16(20, 1, true);
  t.setUint16(22, 1, true);
  t.setUint32(24, 8000, true);
  t.setUint32(28, 16000, true);
  t.setUint16(32, 2, true);
  t.setUint16(34, 16, true);
  n(36, "data");
  t.setUint32(40, 8000, true);
  let r = "";
  const i = new Uint8Array(e);
  for (let a = 0; a < i.length; a++) {
    r += String.fromCharCode(i[a]);
  }
  return "data:audio/wav;base64," + btoa(r);
})();
const kn = (e = true) => {
  const t = window.__radioAudio;
  if (t && (t.__ttsMode || t.__keepAlivePaused) && (e && (t.__ttsMode = false, t.__skipPauseBroadcast = false, t.loop = false), t.__keepAlivePaused)) {
    t.__keepAlivePaused = false;
    try {
      g();
    } catch (n) {}
  }
};
const Sn = () => {
  window.__aiRadioState ||= {
    status: mn,
    station: null,
    segments: [],
    conversationHistory: [],
    segmentsSinceLastMusic: 0,
    lastSong: null,
    segmentId: 0,
    voiceSettings: {},
    translateConfig: null,
    timer: null,
    abortController: null,
    ttsAudio: null,
    prefetchPromise: null,
    prefetchSegmentType: null,
    prefetchOpts: null,
    _pendingSongComment: false,
    _talkCount: 0,
    exportProgress: 0,
    exportInProgress: false,
    onStatusChange: null,
    onSegmentsChange: null,
    onCurrentSegmentChange: null,
    onTtsPlayingChange: null,
    onExportProgressChange: null,
    onExportInProgressChange: null
  };
  return window.__aiRadioState;
};
const Cn = (e, n = 20) => e.id === _ ? t.jsx(ae, {
  size: n,
  color: "#667eea"
}) : e.isDefault ? t.jsx(ge, {
  size: n,
  color: "#ff3b30",
  fill: "#ff3b30"
}) : t.jsx(oe, {
  size: n,
  color: "rgba(255,255,255,0.5)"
});
const In = (e, t) => e.id === _ ? t("playlistUploads") : e.isDefault ? t("playlistFavorites") : e.name;
const Nn = ({
  song: n,
  playlists: r,
  addToPlaylist: i,
  createPlaylist: a,
  onClose: o,
  t: s
}) => {
  const [l, c] = e.useState(false);
  const [d, u] = e.useState("");
  const g = () => {
    if (!d.trim()) {
      return;
    }
    const e = a(d.trim());
    i(e.id, n);
    o("added");
  };
  return t.jsx("div", {
    className: "settings-modal-overlay",
    onClick: () => o(null),
    style: {
      zIndex: 200,
      background: "rgba(0,0,0,0.3)",
      backdropFilter: "none"
    },
    children: t.jsxs("div", {
      onClick: e => e.stopPropagation(),
      style: {
        maxHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        background: "rgba(30, 30, 30, 0.4)",
        backdropFilter: "blur(40px) saturate(180%)",
        WebkitBackdropFilter: "blur(40px) saturate(180%)",
        borderTopLeftRadius: "32px",
        borderTopRightRadius: "32px",
        borderTop: "1px solid rgba(255,255,255,0.15)",
        borderLeft: "1px solid rgba(255,255,255,0.05)",
        borderRight: "1px solid rgba(255,255,255,0.05)",
        boxShadow: "0 -10px 40px rgba(0,0,0,0.4)",
        padding: "12px 24px 40px",
        animation: "slide-up 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)"
      },
      children: [t.jsx("div", {
        className: "settings-handle"
      }), t.jsx("h3", {
        style: {
          color: "#fff",
          fontSize: "20px",
          fontWeight: 800,
          marginBottom: "24px",
          letterSpacing: "0.5px",
          textShadow: "0 2px 4px rgba(0,0,0,0.3)"
        },
        children: s("playlistAddTo")
      }), t.jsxs("div", {
        style: {
          overflowY: "auto",
          maxHeight: "40vh",
          paddingBottom: "20px"
        },
        children: [r.map(e => t.jsxs("button", {
          onClick: () => (e => {
            if (!n) {
              return;
            }
            const t = i(e, n);
            o(t ? "added" : "exists");
          })(e.id),
          style: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "16px",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "20px",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "12px",
            textAlign: "left",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            transition: "background 0.2s, transform 0.2s"
          },
          onMouseDown: e => {
            e.currentTarget.style.transform = "scale(0.98)";
            e.currentTarget.style.background = "rgba(255,255,255,0.15)";
          },
          onMouseUp: e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.background = "rgba(255,255,255,0.1)";
          },
          onMouseLeave: e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.background = "rgba(255,255,255,0.1)";
          },
          children: [t.jsx("div", {
            style: {
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
            },
            children: Cn(e, 24)
          }), t.jsx("span", {
            style: {
              flex: 1,
              fontWeight: 700,
              textShadow: "0 1px 3px rgba(0,0,0,0.3)"
            },
            children: In(e, s)
          })]
        }, e.id)), l ? t.jsxs("div", {
          style: {
            display: "flex",
            gap: "8px",
            marginTop: "4px"
          },
          children: [t.jsx("input", {
            autoFocus: true,
            value: d,
            onChange: e => u(e.target.value),
            onKeyDown: e => e.key === "Enter" && g(),
            placeholder: s("playlistNamePh"),
            style: {
              flex: 1,
              padding: "12px 14px",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "10px",
              color: "#fff",
              fontSize: "14px",
              outline: "none"
            }
          }), t.jsx("button", {
            onClick: g,
            style: {
              padding: "12px 20px",
              background: "linear-gradient(135deg, #ff6b9d, #ff8fab)",
              border: "none",
              borderRadius: "10px",
              color: "#fff",
              fontWeight: 600,
              fontSize: "14px",
              cursor: "pointer"
            },
            children: s("confirm")
          })]
        }) : t.jsxs("button", {
          onClick: () => c(true),
          style: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "14px 16px",
            background: "none",
            border: "1px dashed rgba(255,255,255,0.25)",
            borderRadius: "12px",
            color: "rgba(255,255,255,0.6)",
            fontSize: "15px",
            cursor: "pointer",
            transition: "all 0.2s"
          },
          children: [t.jsx(de, {
            size: 20
          }), t.jsx("span", {
            children: s("playlistCreate")
          })]
        })]
      })]
    })
  });
};
const Rn = ({
  playlists: n,
  getPlaylistSongs: r,
  getPlaylistSongCount: i,
  createPlaylist: a,
  deletePlaylist: o,
  updatePlaylist: s,
  removeFromPlaylist: l,
  addToPlaylist: c,
  addManyToPlaylist: d,
  saveUploadedAudio: u,
  getUploadedCover: g,
  onPlaySong: p,
  onPlayAll: f,
  onClose: x,
  onUploadMusic: h,
  t: m,
  initialCloudImport: b = false
}) => {
  const [v, y] = e.useState(null);
  const [w, j] = e.useState(false);
  const [k, S] = e.useState("");
  const [C, A] = e.useState(null);
  const [T, E] = e.useState(false);
  const [L, M] = e.useState(new Set());
  const [B, U] = e.useState(false);
  const [D, W] = e.useState(b);
  const [F, G] = e.useState([]);
  const [O, H] = e.useState(false);
  const [$, V] = e.useState(null);
  const [q, Y] = e.useState(new Set());
  const J = e.useCallback(async () => {
    const {
      user: e,
      isLoggedIn: t
    } = I();
    if (t && (e == null ? undefined : e.userId)) {
      H(true);
      W(true);
      try {
        const t = await N(e.userId);
        G(t);
      } catch (n) {
        console.warn("[Playlist] 載入雲歌單失敗:", n);
      }
      H(false);
    }
  }, []);
  e.useEffect(() => {
    if (b) {
      J();
    }
  }, []);
  const K = e.useCallback(async e => {
    var t;
    V(e.id);
    try {
      const n = await R(e.id);
      if (!((t = n == null ? undefined : n.tracks) == null ? undefined : t.length)) {
        V(null);
        return;
      }
      const r = a(e.name);
      const i = n.tracks.map(e => ({
        id: e.id,
        title: e.name,
        artist: e.artists,
        cover: e.cover,
        duration: e.duration,
        type: "song",
        source: "netease"
      }));
      d(r.id, i);
      Y(t => new Set([...t, e.id]));
    } catch (n) {
      console.warn("[Playlist] 導入失敗:", n);
    }
    V(null);
  }, [a, d]);
  const Q = e.useMemo(() => n.find(e => e.id === v), [n, v]);
  const X = e.useMemo(() => v ? r(v) : [], [v, r]);
  const [Z, ee] = e.useState({});
  e.useEffect(() => {
    if (!g) {
      return;
    }
    const e = X.filter(e => e.source === "local" && e.hasCover && !e.cover);
    if (!e.length) {
      return;
    }
    let t = false;
    Promise.all(e.map(async e => {
      const t = await g(e.id);
      if (t) {
        return {
          id: e.id,
          cover: t
        };
      } else {
        return null;
      }
    })).then(e => {
      if (t) {
        return;
      }
      const n = {};
      e.forEach(e => {
        if (e) {
          n[e.id] = e.cover;
        }
      });
      if (Object.keys(n).length) {
        ee(e => ({
          ...e,
          ...n
        }));
      }
    });
    return () => {
      t = true;
    };
  }, [X, g]);
  const te = e.useCallback(e => e.cover || Z[e.id] || "", [Z]);
  const ne = e.useCallback(() => {
    if (k.trim()) {
      a(k.trim());
      S("");
      j(false);
    }
  }, [k, a]);
  const xe = e => {
    const t = e.target.files[0];
    if (!t || !s) {
      return;
    }
    const n = URL.createObjectURL(t);
    if (t.type === "image/gif") {
      const e = new FileReader();
      e.onload = e => {
        URL.revokeObjectURL(n);
        s(v, {
          cover: e.target.result
        });
      };
      e.readAsDataURL(t);
      return;
    }
    const r = t.type === "image/png";
    const i = new Image();
    i.onload = () => {
      const e = document.createElement("canvas");
      const t = Math.min(1, 500 / i.width);
      e.width = i.width * t;
      e.height = i.height * t;
      e.getContext("2d").drawImage(i, 0, 0, e.width, e.height);
      const a = r ? e.toDataURL("image/png") : e.toDataURL("image/jpeg", 0.8);
      URL.revokeObjectURL(n);
      s(v, {
        cover: a
      });
    };
    i.src = n;
  };
  const he = () => {
    if (L.size === X.length) {
      M(new Set());
    } else {
      M(new Set(X.map(e => e.id)));
    }
  };
  const me = () => {
    L.forEach(e => l(v, e));
    M(new Set());
    E(false);
  };
  if (Q) {
    const e = v !== P && v !== _;
    return t.jsx("div", {
      className: "settings-modal-overlay",
      onClick: x,
      style: {
        zIndex: 150,
        background: "rgba(0,0,0,0.2)",
        backdropFilter: "none"
      },
      children: t.jsxs("div", {
        onClick: e => e.stopPropagation(),
        style: {
          height: "85vh",
          padding: "12px 0 0 0",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          background: "rgba(30, 30, 30, 0.4)",
          backdropFilter: "blur(50px) saturate(200%)",
          WebkitBackdropFilter: "blur(50px) saturate(200%)",
          borderTopLeftRadius: "32px",
          borderTopRightRadius: "32px",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          borderLeft: "1px solid rgba(255,255,255,0.05)",
          borderRight: "1px solid rgba(255,255,255,0.05)",
          boxShadow: "0 -10px 40px rgba(0,0,0,0.3)",
          animation: "slide-up 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
          marginTop: "auto"
        },
        children: [t.jsx("div", {
          className: "settings-handle",
          style: {
            marginBottom: "16px"
          }
        }), t.jsxs("div", {
          style: {
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            gap: "16px",
            padding: "0 24px 16px 24px",
            borderBottom: "1px solid rgba(255,255,255,0.06)"
          },
          children: [t.jsx("button", {
            onClick: () => {
              y(null);
              E(false);
              M(new Set());
            },
            className: "icon-btn-clean",
            style: {
              background: "rgba(255,255,255,0.08)",
              borderRadius: "50%",
              padding: "6px"
            },
            children: t.jsx(re, {
              size: 24,
              color: "#fff",
              strokeWidth: 2.5
            })
          }), t.jsxs("div", {
            style: {
              position: "relative",
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              flexShrink: 0,
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
            },
            children: [Q.cover ? t.jsx("img", {
              decoding: "async",
              src: Q.cover,
              alt: "cover",
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }
            }) : Cn(Q, 28), T && e && t.jsxs("label", {
              style: {
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.5)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10
              },
              children: [t.jsx(ie, {
                size: 20,
                color: "#fff"
              }), t.jsx("input", {
                type: "file",
                accept: "image/*",
                style: {
                  display: "none"
                },
                onChange: xe
              })]
            })]
          }), t.jsxs("div", {
            style: {
              flex: 1,
              overflow: "hidden"
            },
            children: [t.jsx("div", {
              style: {
                fontSize: "20px",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "0.5px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              },
              children: In(Q, m)
            }), t.jsxs("div", {
              style: {
                fontSize: "13px",
                color: "rgba(255,255,255,0.5)",
                marginTop: "4px",
                fontWeight: 500
              },
              children: [X.length, " ", m("playlistSongUnit")]
            })]
          }), t.jsxs("div", {
            style: {
              display: "flex",
              gap: "8px",
              alignItems: "center"
            },
            children: [v === _ && t.jsxs("button", {
              style: {
                padding: "8px 14px",
                background: "linear-gradient(135deg, #667eea, #5a67d8)",
                border: "none",
                borderRadius: "20px",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                boxShadow: "0 4px 12px rgba(102,126,234,0.3)",
                transition: "all 0.2s"
              },
              onClick: () => h ? h() : null,
              onMouseDown: e => e.currentTarget.style.transform = "scale(0.95)",
              onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
              children: [t.jsx(ae, {
                size: 16,
                color: "#fff"
              }), t.jsx("span", {
                children: m("radioUploadConfirm") || "上傳"
              })]
            }), X.length > 0 && t.jsx("button", {
              onClick: () => {
                E(!T);
                M(new Set());
              },
              style: {
                padding: "8px 16px",
                background: T ? "linear-gradient(135deg, #ff6b9d, #ff8fab)" : "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "20px",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
                boxShadow: T ? "0 4px 12px rgba(255,107,157,0.3)" : "none"
              },
              onMouseDown: e => e.currentTarget.style.transform = "scale(0.95)",
              onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
              children: T ? "完成" : "管理"
            })]
          })]
        }), t.jsxs("div", {
          style: {
            flex: 1,
            overflowY: "auto",
            padding: "12px 24px 100px 24px",
            WebkitOverflowScrolling: "touch"
          },
          children: [T && X.length > 0 && t.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
              cursor: "pointer"
            },
            onClick: he,
            children: [L.size === X.length ? t.jsx("div", {
              style: {
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "#ff6b9d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "14px"
              },
              children: t.jsx("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "#fff",
                strokeWidth: "3",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: t.jsx("polyline", {
                  points: "20 6 9 17 4 12"
                })
              })
            }) : t.jsx("div", {
              style: {
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                border: "2px solid rgba(255,255,255,0.3)",
                marginRight: "14px"
              }
            }), t.jsx("span", {
              style: {
                color: "rgba(255,255,255,0.8)",
                fontSize: "14px",
                fontWeight: 600
              },
              children: "全選"
            })]
          }), X.length === 0 ? t.jsx("div", {
            style: {
              textAlign: "center",
              padding: "60px 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "rgba(255,255,255,0.35)",
              fontSize: "14px"
            },
            children: v === _ ? t.jsxs(t.Fragment, {
              children: [t.jsx("div", {
                style: {
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #667eea, #5a67d8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  marginBottom: "24px",
                  boxShadow: "0 8px 24px rgba(102,126,234,0.4)",
                  transition: "transform 0.2s"
                },
                onClick: () => h ? h() : null,
                onMouseDown: e => e.currentTarget.style.transform = "scale(0.9)",
                onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
                children: t.jsx(ae, {
                  size: 36,
                  color: "#fff",
                  strokeWidth: 2.5
                })
              }), t.jsx("div", {
                style: {
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "#fff",
                  letterSpacing: "0.5px"
                },
                children: m("playlistUploadEmpty") || "還沒有上傳過音樂"
              }), t.jsx("div", {
                style: {
                  marginTop: "8px"
                },
                children: m("playlistUploadEmptyHint") || "點擊上方按鈕上傳音樂"
              })]
            }) : t.jsxs(t.Fragment, {
              children: [t.jsx("div", {
                style: {
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px"
                },
                children: t.jsx(oe, {
                  size: 32,
                  color: "rgba(255,255,255,0.3)"
                })
              }), t.jsx("div", {
                style: {
                  fontWeight: 500,
                  letterSpacing: "0.5px"
                },
                children: m("playlistEmpty")
              })]
            })
          }) : X.map((e, n) => t.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "12px 14px",
              margin: "0 -14px",
              borderRadius: "16px",
              cursor: "pointer",
              transition: "background 0.2s",
              background: L.has(e.id) ? "rgba(255,107,157,0.1)" : "transparent"
            },
            onMouseDown: e => {
              if (!T) {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              }
            },
            onMouseUp: e => {
              if (!T) {
                e.currentTarget.style.background = "transparent";
              }
            },
            onMouseLeave: e => {
              if (!T) {
                e.currentTarget.style.background = "transparent";
              }
            },
            onClick: () => {
              var t;
              if (T) {
                t = e.id;
                M(e => {
                  const n = new Set(e);
                  if (n.has(t)) {
                    n.delete(t);
                  } else {
                    n.add(t);
                  }
                  return n;
                });
              } else {
                p(e, X, v);
              }
            },
            children: [T ? L.has(e.id) ? t.jsx("div", {
              style: {
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "#ff6b9d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              },
              children: t.jsx("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "#fff",
                strokeWidth: "3",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: t.jsx("polyline", {
                  points: "20 6 9 17 4 12"
                })
              })
            }) : t.jsx("div", {
              style: {
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                border: "2px solid rgba(255,255,255,0.3)",
                flexShrink: 0
              }
            }) : t.jsx("span", {
              style: {
                width: "20px",
                fontSize: "14px",
                color: "rgba(255,255,255,0.4)",
                fontWeight: 700,
                fontFamily: "monospace",
                textAlign: "center"
              },
              children: n + 1
            }), te(e) ? t.jsx("img", {
              decoding: "async",
              src: te(e),
              alt: "",
              style: {
                width: "46px",
                height: "46px",
                borderRadius: "12px",
                objectFit: "cover",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
              }
            }) : t.jsx("div", {
              style: {
                width: "46px",
                height: "46px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: t.jsx(oe, {
                size: 20,
                color: "rgba(255,255,255,0.3)"
              })
            }), t.jsxs("div", {
              style: {
                flex: 1,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                gap: "3px"
              },
              children: [t.jsx("div", {
                style: {
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#fff",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                },
                children: e.title
              }), t.jsx("div", {
                style: {
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                },
                children: e.artist
              })]
            }), e.duration > 0 && t.jsx("span", {
              style: {
                fontSize: "12px",
                color: "rgba(255,255,255,0.3)",
                fontWeight: 500
              },
              children: z(e.duration)
            }), !T && t.jsx("button", {
              className: "icon-btn-clean",
              onClick: t => {
                t.stopPropagation();
                l(v, e.id);
              },
              style: {
                padding: "8px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "50%",
                marginLeft: "8px"
              },
              children: t.jsx(se, {
                size: 16,
                color: "rgba(255,255,255,0.4)"
              })
            })]
          }, e.id))]
        }), T ? t.jsxs("div", {
          style: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "16px 24px calc(env(safe-area-inset-bottom, 20px) + 16px)",
            background: "rgba(20, 20, 20, 0.6)",
            backdropFilter: "blur(30px)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            animation: "slide-up 0.2s ease-out"
          },
          children: [t.jsxs("button", {
            onClick: () => U(true),
            disabled: L.size === 0,
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
              background: "none",
              border: "none",
              color: L.size > 0 ? "#fff" : "rgba(255,255,255,0.3)",
              cursor: L.size > 0 ? "pointer" : "not-allowed"
            },
            children: [t.jsx("div", {
              style: {
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: t.jsx(le, {
                size: 22,
                color: "currentColor"
              })
            }), t.jsx("span", {
              style: {
                fontSize: "11px",
                fontWeight: 500
              },
              children: "移動到..."
            })]
          }), t.jsxs("button", {
            onClick: me,
            disabled: L.size === 0,
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
              background: "none",
              border: "none",
              color: L.size > 0 ? "#ff3b30" : "rgba(255,59,48,0.3)",
              cursor: L.size > 0 ? "pointer" : "not-allowed"
            },
            children: [t.jsx("div", {
              style: {
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(255,59,48,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: t.jsx(se, {
                size: 22,
                color: "currentColor"
              })
            }), t.jsx("span", {
              style: {
                fontSize: "11px",
                fontWeight: 500
              },
              children: "刪除"
            })]
          })]
        }) : X.length > 0 && t.jsx("button", {
          onClick: () => f(X, v),
          style: {
            position: "absolute",
            bottom: "calc(env(safe-area-inset-bottom, 20px) + 24px)",
            right: "24px",
            zIndex: 50,
            width: "60px",
            height: "60px",
            borderRadius: "30px",
            background: "linear-gradient(135deg, #ff6b9d, #ff8fab)",
            border: "none",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 24px rgba(255,107,157,0.4)",
            cursor: "pointer",
            transition: "transform 0.2s",
            animation: "fade-in 0.3s ease-out"
          },
          onMouseDown: e => e.currentTarget.style.transform = "scale(0.9)",
          onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
          children: t.jsx(ce, {
            size: 30,
            fill: "#fff",
            style: {
              marginLeft: "4px"
            }
          })
        }), B && t.jsx("div", {
          className: "settings-modal-overlay",
          onClick: () => U(false),
          style: {
            zIndex: 300,
            background: "rgba(0,0,0,0.5)"
          },
          children: t.jsxs("div", {
            className: "settings-modal-content",
            onClick: e => e.stopPropagation(),
            style: {
              background: "rgba(30,30,30,0.95)",
              borderTop: "1px solid rgba(255,255,255,0.1)"
            },
            children: [t.jsx("div", {
              className: "settings-handle"
            }), t.jsx("h3", {
              style: {
                color: "#fff",
                fontSize: "18px",
                fontWeight: 700,
                marginBottom: "20px"
              },
              children: "加入歌單"
            }), t.jsx("div", {
              style: {
                maxHeight: "40vh",
                overflowY: "auto"
              },
              children: n.filter(e => !e.isDefault || e.id === P).map(e => t.jsxs("button", {
                onClick: () => (e => {
                  const t = X.filter(e => L.has(e.id));
                  t.forEach(t => c(e, t));
                  if (v !== P && v !== _) {
                    t.forEach(e => l(v, e.id));
                  }
                  U(false);
                  M(new Set());
                  E(false);
                })(e.id),
                style: {
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "16px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "16px",
                  color: "#fff",
                  fontSize: "15px",
                  cursor: "pointer",
                  marginBottom: "10px",
                  textAlign: "left"
                },
                children: [Cn(e, 22), t.jsx("span", {
                  style: {
                    flex: 1,
                    fontWeight: 600
                  },
                  children: In(e, m)
                })]
              }, e.id))
            })]
          })
        })]
      })
    });
  }
  return t.jsx("div", {
    className: "settings-modal-overlay",
    onClick: x,
    style: {
      zIndex: 150,
      background: "rgba(0,0,0,0.2)",
      backdropFilter: "none"
    },
    children: t.jsxs("div", {
      onClick: e => e.stopPropagation(),
      style: {
        height: "85vh",
        padding: "12px 0 0 0",
        display: "flex",
        flexDirection: "column",
        background: "rgba(30, 30, 30, 0.3)",
        backdropFilter: "blur(50px) saturate(200%)",
        WebkitBackdropFilter: "blur(50px) saturate(200%)",
        borderTopLeftRadius: "32px",
        borderTopRightRadius: "32px",
        borderTop: "1px solid rgba(255,255,255,0.2)",
        borderLeft: "1px solid rgba(255,255,255,0.05)",
        borderRight: "1px solid rgba(255,255,255,0.05)",
        boxShadow: "0 -10px 40px rgba(0,0,0,0.3)",
        animation: "slide-up 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
        marginTop: "auto"
      },
      children: [t.jsx("div", {
        className: "settings-handle",
        style: {
          marginBottom: "16px"
        }
      }), t.jsxs("div", {
        style: {
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "0 24px 16px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.06)"
        },
        children: [t.jsx("span", {
          style: {
            flex: 1,
            fontSize: "20px",
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "0.5px"
          },
          children: m("playlistTitle")
        }), t.jsx("button", {
          onClick: () => j(true),
          className: "icon-btn-clean",
          style: {
            padding: "8px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "50%"
          },
          children: t.jsx(de, {
            size: 22,
            color: "#fff"
          })
        })]
      }), t.jsxs("div", {
        style: {
          flex: 1,
          overflowY: "auto",
          padding: "16px 24px 40px 24px",
          WebkitOverflowScrolling: "touch"
        },
        children: [w && t.jsxs("div", {
          style: {
            marginBottom: "20px",
            background: "rgba(255,255,255,0.06)",
            padding: "20px",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.15)"
          },
          children: [t.jsx("h4", {
            style: {
              margin: 0,
              color: "#fff",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.5px"
            },
            children: "創建新歌單"
          }), t.jsx("input", {
            autoFocus: true,
            value: k,
            onChange: e => S(e.target.value),
            onKeyDown: e => e.key === "Enter" && ne(),
            placeholder: m("playlistNamePh"),
            style: {
              width: "100%",
              padding: "16px",
              background: "rgba(0,0,0,0.25)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              color: "#fff",
              fontSize: "16px",
              outline: "none",
              fontWeight: 500,
              boxSizing: "border-box"
            }
          }), t.jsxs("div", {
            style: {
              display: "flex",
              gap: "12px"
            },
            children: [t.jsx("button", {
              onClick: () => {
                j(false);
                S("");
              },
              style: {
                flex: 1,
                padding: "14px 0",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "14px",
                color: "#fff",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: 600,
                transition: "background 0.2s"
              },
              onMouseDown: e => e.currentTarget.style.background = "rgba(255,255,255,0.15)",
              onMouseUp: e => e.currentTarget.style.background = "rgba(255,255,255,0.1)",
              onMouseLeave: e => e.currentTarget.style.background = "rgba(255,255,255,0.1)",
              children: "取消"
            }), t.jsx("button", {
              onClick: ne,
              style: {
                flex: 1,
                padding: "14px 0",
                background: "linear-gradient(135deg, #ff6b9d, #ff8fab)",
                border: "none",
                borderRadius: "14px",
                color: "#fff",
                fontWeight: 700,
                cursor: "pointer",
                fontSize: "15px",
                boxShadow: "0 4px 12px rgba(255,107,157,0.3)",
                transition: "transform 0.2s"
              },
              onMouseDown: e => e.currentTarget.style.transform = "scale(0.97)",
              onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
              children: "確認"
            })]
          })]
        }), I().isLoggedIn && t.jsxs("button", {
          onClick: J,
          style: {
            width: "100%",
            marginBottom: 16,
            padding: "14px 20px",
            background: "rgba(255,59,48,0.1)",
            border: "1px dashed rgba(255,59,48,0.3)",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#ff3b30",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer"
          },
          children: [t.jsx(ue, {
            size: 18
          }), m("playlistImportCloud")]
        }), t.jsx("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "14px"
          },
          children: n.map(e => {
            const n = i(e.id);
            return t.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "16px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "24px",
                cursor: "pointer",
                transition: "transform 0.2s, background 0.2s",
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)"
              },
              onMouseDown: e => {
                e.currentTarget.style.transform = "scale(0.97)";
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
              },
              onMouseUp: e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              },
              onMouseLeave: e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              },
              onClick: () => y(e.id),
              children: [t.jsx("div", {
                style: {
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  background: e.id === _ ? "linear-gradient(135deg, #667eea, #5a67d8)" : e.isDefault ? "linear-gradient(135deg, #ff6b9d, #ff3b30)" : "linear-gradient(135deg, #4facfe, #00f2fe)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
                },
                children: e.id === _ ? t.jsx(ae, {
                  size: 24,
                  color: "#fff"
                }) : e.isDefault ? t.jsx(ge, {
                  size: 24,
                  color: "#fff",
                  fill: "#fff"
                }) : t.jsx(oe, {
                  size: 24,
                  color: "#fff"
                })
              }), t.jsxs("div", {
                style: {
                  flex: 1,
                  overflow: "hidden"
                },
                children: [t.jsx("div", {
                  style: {
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "0.3px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  },
                  children: In(e, m)
                }), t.jsxs("div", {
                  style: {
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.5)",
                    marginTop: "4px",
                    fontWeight: 500
                  },
                  children: [n, " ", m("playlistSongUnit")]
                })]
              }), !e.isDefault && (C === e.id ? t.jsx("button", {
                onClick: t => {
                  t.stopPropagation();
                  o(e.id);
                  A(null);
                },
                style: {
                  padding: "8px 16px",
                  background: "rgba(255,59,48,0.9)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#fff",
                  fontSize: "13px",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 4px 10px rgba(255,59,48,0.3)"
                },
                children: m("confirmDelete")
              }) : t.jsx("button", {
                className: "icon-btn-clean",
                onClick: t => {
                  t.stopPropagation();
                  A(e.id);
                },
                style: {
                  padding: "8px",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "50%"
                },
                children: t.jsx(se, {
                  size: 18,
                  color: "rgba(255,255,255,0.4)"
                })
              }))]
            }, e.id);
          })
        })]
      }), D && t.jsx("div", {
        style: {
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          zIndex: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end"
        },
        onClick: () => W(false),
        children: t.jsxs("div", {
          onClick: e => e.stopPropagation(),
          style: {
            background: "rgba(30,30,35,0.98)",
            borderRadius: "20px 20px 0 0",
            padding: "16px 0",
            maxHeight: "70vh",
            display: "flex",
            flexDirection: "column",
            animation: "slide-up 0.3s ease-out"
          },
          children: [t.jsxs("div", {
            style: {
              padding: "0 20px 12px",
              display: "flex",
              alignItems: "center",
              gap: 8,
              borderBottom: "1px solid rgba(255,255,255,0.08)"
            },
            children: [t.jsx(ue, {
              size: 18,
              color: "#ff3b30"
            }), t.jsx("span", {
              style: {
                flex: 1,
                fontSize: 17,
                fontWeight: 700,
                color: "#fff"
              },
              children: m("playlistImportCloud")
            }), t.jsx("button", {
              onClick: () => W(false),
              style: {
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.4)",
                fontSize: 13,
                cursor: "pointer"
              },
              children: m("cancel")
            })]
          }), t.jsxs("div", {
            style: {
              flex: 1,
              overflowY: "auto",
              padding: "12px 20px"
            },
            children: [O && t.jsx("div", {
              style: {
                textAlign: "center",
                padding: 30,
                color: "rgba(255,255,255,0.4)"
              },
              children: t.jsx(pe, {
                size: 20,
                className: "spinning"
              })
            }), !O && F.length === 0 && t.jsx("div", {
              style: {
                textAlign: "center",
                padding: 30,
                color: "rgba(255,255,255,0.4)",
                fontSize: 14
              },
              children: m("playlistImportEmpty")
            }), F.map(e => t.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.04)"
              },
              children: [t.jsx("img", {
                decoding: "async",
                src: e.cover,
                alt: "",
                style: {
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  objectFit: "cover",
                  flexShrink: 0,
                  background: "rgba(255,255,255,0.05)"
                }
              }), t.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: 0
                },
                children: [t.jsx("div", {
                  style: {
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#fff",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  },
                  children: e.name
                }), t.jsxs("div", {
                  style: {
                    fontSize: 12,
                    color: "rgba(255,255,255,0.4)",
                    marginTop: 2
                  },
                  children: [e.trackCount, " ", m("playlistSongUnit"), " · ", e.creator]
                })]
              }), q.has(e.id) ? t.jsx(fe, {
                size: 20,
                color: "#34c759"
              }) : $ === e.id ? t.jsx(pe, {
                size: 18,
                color: "rgba(255,255,255,0.5)",
                className: "spinning"
              }) : t.jsx("button", {
                onClick: () => K(e),
                style: {
                  padding: "6px 14px",
                  background: "rgba(255,59,48,0.15)",
                  border: "1px solid rgba(255,59,48,0.3)",
                  borderRadius: 12,
                  color: "#ff3b30",
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                  flexShrink: 0
                },
                children: m("playlistImportBtn")
              })]
            }, e.id))]
          })]
        })
      })]
    })
  });
};
const _n = [{
  id: "emotion",
  icon: "💕",
  nameKey: "aiRadioPresetEmotion",
  name: "情感电台",
  theme: "聊聊恋爱、友情、生活中的温暖与遗憾",
  musicGenre: "华语抒情",
  musicFrequency: 4,
  segmentInterval: 50,
  showStyle: "深夜情感陪伴电台——慢节奏，主播声音压低放轻。聊听众的心事、困惑、未说出口的情绪，主播代入式回应、共情、提出温和视角，但不说教、不灌鸡汤。允许停顿、叹息、沉默感（用「……」表达）。对话带有夜晚特有的脆弱感与坦白感，像两个朋友在深夜长谈。"
}, {
  id: "music",
  icon: "🎵",
  nameKey: "aiRadioPresetMusic",
  name: "音乐分享电台",
  theme: "分享好听的歌曲，聊聊歌曲背后的故事和感受",
  musicGenre: "",
  musicFrequency: 2,
  segmentInterval: 40,
  showStyle: "音乐分享电台——主播以音乐为主线，围绕每首歌的创作背景、歌词、自己第一次听到的情境、想推荐给谁展开。对话节奏轻快但不喧闹，允许主播互相安利或吐槽选歌。每段必须围绕具体的歌或音乐风格，不要泛泛聊「音乐多美好」。"
}, {
  id: "sleep",
  icon: "😴",
  nameKey: "aiRadioPresetSleep",
  name: "哄睡 ASMR 电台",
  theme: "用温柔低沉的声音陪你入睡，讲小故事、聊日常、营造安心的氛围",
  musicGenre: "Lo-fi",
  musicFrequency: 3,
  segmentInterval: 60,
  showStyle: "ASMR 哄睡/温柔陪伴电台——能量很低，语速很慢，声音很轻。内容以引导冥想、讲小故事、描述舒适场景（窗外的雨、暖暖的被窝、海边的风）为主。避免问句和带动情绪起伏的话题。每句话之间有呼吸感，像在床边轻声哄人入睡。多用「……」表达自然停顿。"
}, {
  id: "xiangsheng",
  icon: "🎭",
  nameKey: "aiRadioPresetXiangsheng",
  name: "相声/脱口秀电台",
  theme: "双人相声/脱口秀，聊生活中的荒诞事、职场、奇葩经历",
  musicGenre: "",
  musicFrequency: 6,
  segmentInterval: 30,
  showStyle: "相声/脱口秀风格——两个主播一逗一捧：一个负责抛包袱、起哏、现挂，另一个负责接话、垫话、纠错、吐槽。用三翻四抖结构，前面铺垫两三次相似情境最后翻转。允许谐音梗、双关、自嘲、互损。每段必须至少一个明确的笑点（不是淡淡微笑式的，是让人笑出声的）。不要过度温情、不要客套，毒舌但不恶意。**至少 2 名主播才能跑这个节目**。"
}, {
  id: "horror",
  icon: "👻",
  nameKey: "aiRadioPresetHorror",
  name: "凌晨灵异故事会",
  theme: "主播轮流讲鬼故事、都市传说、无法解释的诡异事件",
  musicGenre: "",
  musicFrequency: 5,
  segmentInterval: 55,
  showStyle: "凌晨灵异节目——主播轮流讲鬼故事、都市传说、无法解释的真实事件。气氛从轻松渐渐转向不对劲，越讲越邪门。允许主播互相接棒、补细节、表示寒意。故事要有具体场景、人物、时间，不要泛泛而谈。可以在故事间穿插「刚才那个让我背脊发凉」「等等，我家窗户刚刚是不是响了」这类氛围对话。避免血腥跳吓，靠细节的诡异感取胜。"
}, {
  id: "mailbox",
  icon: "💌",
  nameKey: "aiRadioPresetMailbox",
  name: "读者来信电台",
  theme: "主播代为朗读听众来信，回应、讨论、给建议",
  musicGenre: "轻音乐",
  musicFrequency: 4,
  segmentInterval: 50,
  showStyle: "读者来信节目——主播每段挑一封「听众来信」朗读（信件由主播即兴编造，要有具体的署名笔名、年龄、职业、处境，故事生动可信），然后展开讨论：分析写信人的处境、给出真诚（可能直白甚至毒舌）的建议、主播间对建议方向有时意见不合。信件主题涵盖恋爱、家庭、职场、学业、人生困惑等。每封信都要有独立故事，不能总是「最近很迷茫」这种空话。读完信主播要明确表态而不是和稀泥。"
}, {
  id: "r18",
  icon: "🌙",
  nameKey: "aiRadioPresetR18",
  name: "成人节目",
  theme: "深夜限定，露骨但不下流地聊聊性、欲望、身体、亲密关系",
  musicGenre: "R&B",
  musicFrequency: 5,
  segmentInterval: 55,
  showStyle: "成人深夜节目——晚上 11 点以后播出，主播放开聊那些白天不能说、但其实大家都好奇的话题：性、欲望、身体、亲密关系、第一次、约炮、性癖、SM、AV、自慰、性教育迷思……都可以。主播语气低、慢、带磁性、带笑意。直白谈论身体和性行为（没有遮掩、没有打马赛克），但不猎奇、不变态、不冒犯。可以讲自己「听说的」或「朋友的」具体经历（细节要真实生动，不是空泛描述）。主播间可以互相打趣调侃对方害羞、互相爆料、轻松色情。允许暧昧、性张力、调情，但不是写黄文——还是电台聊天，只是话题尺度全开。"
}];
const zn = ({
  isOpen: n,
  onClose: r,
  onStartBroadcast: i,
  onSaveStation: a,
  onUpdateLive: o = null,
  characters: s = [],
  editStation: l = null,
  playlists: c = [],
  worldBooks: d = [],
  t: u
}) => {
  const g = !!l;
  const p = !!o;
  const [f, x] = e.useState("");
  const [h, m] = e.useState("");
  const [b, v] = e.useState("");
  const [y, w] = e.useState(45);
  const [j, k] = e.useState(3);
  const [S, C] = e.useState(false);
  const [I, N] = e.useState([]);
  const [R, _] = e.useState([]);
  const [z, P] = e.useState(null);
  const [A, T] = e.useState(null);
  const [E, L] = e.useState(0);
  const [M, B] = e.useState("");
  const [U, D] = e.useState(null);
  const [W, F] = e.useState(false);
  const [G, O] = e.useState([]);
  const [H, $] = e.useState(true);
  const [V, q] = e.useState("");
  e.useEffect(() => {
    if (n && l) {
      x(l.name || "");
      m(l.theme || "");
      v(l.musicGenre || "");
      w(l.segmentInterval ?? 45);
      k(l.musicFrequency ?? 3);
      C(l.ttsEnabled ?? false);
      N(l.hosts || []);
      _(l.guests || []);
      T(l.coverImage ?? null);
      const e = Number(l.sleepTimerMinutes || 0);
      L(Number.isFinite(e) ? e : 0);
      B(e > 0 && ![0, 15, 30, 45, 60].includes(e) ? String(e) : "");
      D(l.playlistId || null);
      F(!!l.jailbreakEnabled);
      $(l.realTimeAware === undefined || !!l.realTimeAware);
      q(l.showStyle || "");
      O(Array.isArray(l.jailbreakEntryIds) ? l.jailbreakEntryIds : []);
    } else if (n && !l) {
      x("");
      m("");
      v("");
      w(45);
      k(3);
      C(false);
      N([]);
      _([]);
      T(null);
      L(0);
      B("");
      D(null);
      F(false);
      O([]);
      $(true);
      q("");
    }
  }, [n, l]);
  const Y = e.useMemo(() => {
    const e = new Set();
    I.forEach(t => e.add(String(t.characterId)));
    R.forEach(t => e.add(String(t.characterId)));
    return e;
  }, [I, R]);
  const J = e.useMemo(() => s.filter(e => !Y.has(String(e.id))), [s, Y]);
  const K = e.useCallback((e, t) => {
    if (t === "main" || t === "co-host") {
      N(n => [...n, {
        characterId: e,
        role: t
      }]);
    } else {
      _(t => [...t, {
        characterId: e,
        role: "guest"
      }]);
    }
    P(null);
  }, []);
  const Q = e.useCallback((e, t) => {
    if (t) {
      N(t => t.filter(t => String(t.characterId) !== String(e)));
    } else {
      _(t => t.filter(t => String(t.characterId) !== String(e)));
    }
  }, []);
  const X = e.useCallback(e => s.find(t => String(t.id) === String(e)), [s]);
  const ee = I.some(e => e.role === "main") && f.trim();
  const te = e.useCallback(() => ({
    id: (l == null ? undefined : l.id) || `station_${Date.now()}`,
    name: f.trim(),
    hosts: I,
    guests: R,
    theme: h.trim(),
    segmentInterval: y,
    musicFrequency: j,
    musicGenre: b.trim(),
    ttsEnabled: S,
    coverImage: A,
    sleepTimerMinutes: E,
    playlistId: U || null,
    jailbreakEnabled: W,
    jailbreakEntryIds: W ? G : [],
    realTimeAware: H,
    showStyle: V.trim()
  }), [l, f, I, R, h, y, j, b, S, A, E, U, W, G, H, V]);
  const ne = e.useMemo(() => Z(d), [d]);
  const re = e.useCallback(e => {
    O(t => {
      const n = new Set(t.map(String));
      const r = String(e);
      if (n.has(r)) {
        n.delete(r);
      } else {
        n.add(r);
      }
      return [...n];
    });
  }, []);
  const ae = e.useCallback(e => {
    L(e);
    if ([0, 15, 30, 45, 60].includes(e)) {
      B("");
    }
  }, []);
  const se = e.useCallback(() => {
    const e = Number(M);
    if (!!Number.isFinite(e) && !(e <= 0) && !(e > 720)) {
      L(Math.round(e));
    }
  }, [M]);
  const le = e.useCallback(() => {
    const e = te();
    if (a != null) {
      a(e);
    }
    if (i != null) {
      i(e);
    }
    if (r != null) {
      r();
    }
  }, [te, i, a, r]);
  const ce = e.useCallback(() => {
    const e = te();
    if (a != null) {
      a(e);
    }
    if (p) {
      if (o != null) {
        o(e);
      }
    }
    if (r != null) {
      r();
    }
  }, [te, a, o, p, r]);
  const ue = e.useCallback(e => {
    x(t => t || e.name);
    m(e.theme);
    v(e.musicGenre);
    k(e.musicFrequency);
    w(e.segmentInterval);
    if (e.showStyle !== undefined) {
      q(e.showStyle || "");
    }
  }, []);
  const ge = e.useCallback(e => {
    var t;
    const n = (t = e.target.files) == null ? undefined : t[0];
    if (!n) {
      return;
    }
    const r = new FileReader();
    r.onload = e => {
      const t = e.target.result;
      if (n.type === "image/gif") {
        T(t);
        return;
      }
      const r = n.type === "image/png";
      const i = new window.Image();
      i.onload = () => {
        const e = document.createElement("canvas");
        const t = 400;
        let n = i.width;
        let a = i.height;
        if (n > t || a > t) {
          const e = Math.min(t / n, t / a);
          n = Math.round(n * e);
          a = Math.round(a * e);
        }
        e.width = n;
        e.height = a;
        e.getContext("2d").drawImage(i, 0, 0, n, a);
        T(r ? e.toDataURL("image/png") : e.toDataURL("image/jpeg", 0.8));
      };
      i.src = t;
    };
    r.readAsDataURL(n);
  }, []);
  if (n) {
    return t.jsxs("div", {
      className: "ai-radio-setup-overlay",
      onClick: r,
      children: [t.jsxs("div", {
        className: "ai-radio-setup-panel",
        onClick: e => e.stopPropagation(),
        children: [t.jsxs("div", {
          className: "ars-header",
          children: [t.jsx(xe, {
            size: 20
          }), t.jsx("span", {
            children: u(p || g ? "aiRadioEditStation" : "aiRadioCreateStation")
          }), t.jsx("button", {
            className: "ars-close",
            onClick: r,
            children: t.jsx(he, {
              size: 20
            })
          })]
        }), t.jsxs("div", {
          className: "ars-body",
          children: [!g && t.jsxs("div", {
            className: "ars-field",
            children: [t.jsxs("label", {
              children: [t.jsx(me, {
                size: 14
              }), " ", u("aiRadioPresets")]
            }), t.jsx("div", {
              className: "ars-presets",
              children: _n.map(e => t.jsxs("button", {
                className: "ars-preset-chip",
                onClick: () => ue(e),
                children: [t.jsx("span", {
                  className: "ars-preset-icon",
                  children: e.icon
                }), t.jsx("span", {
                  children: u(e.nameKey) || e.name
                })]
              }, e.id))
            })]
          }), t.jsxs("div", {
            className: "ars-field",
            children: [t.jsxs("label", {
              children: [t.jsx(ie, {
                size: 14
              }), " ", u("aiRadioCover")]
            }), t.jsx("div", {
              className: "ars-cover-row",
              children: A ? t.jsxs("div", {
                className: "ars-cover-preview",
                children: [t.jsx("img", {
                  decoding: "async",
                  src: A,
                  alt: ""
                }), t.jsx("button", {
                  className: "ars-cover-remove",
                  onClick: () => T(null),
                  children: t.jsx(he, {
                    size: 12
                  })
                })]
              }) : t.jsxs("label", {
                className: "ars-cover-upload",
                children: [t.jsx(de, {
                  size: 20
                }), t.jsx("input", {
                  type: "file",
                  accept: "image/*",
                  onChange: ge,
                  hidden: true
                })]
              })
            })]
          }), t.jsxs("div", {
            className: "ars-field",
            children: [t.jsx("label", {
              children: u("aiRadioStationName")
            }), t.jsx("input", {
              type: "text",
              value: f,
              onChange: e => x(e.target.value),
              placeholder: u("aiRadioStationNamePh"),
              maxLength: 30
            })]
          }), t.jsxs("div", {
            className: "ars-field",
            children: [t.jsx("label", {
              children: u("aiRadioTheme")
            }), t.jsx("textarea", {
              value: h,
              onChange: e => m(e.target.value),
              placeholder: u("aiRadioThemePh"),
              maxLength: 200,
              rows: 3,
              className: "ars-textarea"
            })]
          }), t.jsxs("div", {
            className: "ars-field",
            children: [t.jsx("label", {
              children: u("aiRadioShowStyle")
            }), t.jsx("p", {
              className: "ars-hint",
              children: u("aiRadioShowStyleHint")
            }), t.jsx("textarea", {
              value: V,
              onChange: e => q(e.target.value),
              placeholder: u("aiRadioShowStylePh"),
              maxLength: 500,
              rows: 4,
              className: "ars-textarea"
            })]
          }), t.jsxs("div", {
            className: "ars-field",
            children: [t.jsxs("label", {
              children: [t.jsx(be, {
                size: 14
              }), " ", u("aiRadioHosts")]
            }), t.jsxs("div", {
              className: "ars-char-list",
              children: [I.map(e => {
                const n = X(e.characterId);
                if (n) {
                  return t.jsxs("div", {
                    className: "ars-char-chip",
                    children: [t.jsx("img", {
                      decoding: "async",
                      src: n.image,
                      alt: "",
                      className: "ars-char-avatar"
                    }), t.jsx("span", {
                      className: "ars-char-name",
                      children: n.name
                    }), t.jsx("span", {
                      className: `ars-role-badge ${e.role}`,
                      children: e.role === "main" ? u("aiRadioMainHost") : u("aiRadioCoHost")
                    }), !p && t.jsx("button", {
                      className: "ars-remove",
                      onClick: () => Q(e.characterId, true),
                      children: t.jsx(he, {
                        size: 12
                      })
                    })]
                  }, e.characterId);
                } else {
                  return null;
                }
              }), !I.some(e => e.role === "main") && t.jsxs("button", {
                className: "ars-add-btn",
                onClick: () => P("main"),
                children: [t.jsx(de, {
                  size: 14
                }), " ", u("aiRadioAddMainHost")]
              }), I.some(e => e.role === "main") && I.length < 3 && !p && t.jsxs("button", {
                className: "ars-add-btn secondary",
                onClick: () => P("co-host"),
                children: [t.jsx(de, {
                  size: 14
                }), " ", u("aiRadioAddCoHost")]
              })]
            })]
          }), !p && t.jsxs("div", {
            className: "ars-field",
            children: [t.jsx("label", {
              children: u("aiRadioGuests")
            }), t.jsxs("div", {
              className: "ars-char-list",
              children: [R.map(e => {
                const n = X(e.characterId);
                if (n) {
                  return t.jsxs("div", {
                    className: "ars-char-chip",
                    children: [t.jsx("img", {
                      decoding: "async",
                      src: n.image,
                      alt: "",
                      className: "ars-char-avatar"
                    }), t.jsx("span", {
                      className: "ars-char-name",
                      children: n.name
                    }), t.jsx("span", {
                      className: "ars-role-badge guest",
                      children: u("aiRadioGuest")
                    }), t.jsx("button", {
                      className: "ars-remove",
                      onClick: () => Q(e.characterId, false),
                      children: t.jsx(he, {
                        size: 12
                      })
                    })]
                  }, e.characterId);
                } else {
                  return null;
                }
              }), R.length < 3 && t.jsxs("button", {
                className: "ars-add-btn secondary",
                onClick: () => P("guest"),
                children: [t.jsx(de, {
                  size: 14
                }), " ", u("aiRadioAddGuest")]
              })]
            })]
          }), t.jsxs("div", {
            className: "ars-field",
            children: [t.jsxs("label", {
              children: [t.jsx(ve, {
                size: 14
              }), " ", u("aiRadioInterval"), " — ", y === 0 ? u("aiRadioContinuous") : `${y}${u("aiRadioSeconds")}`]
            }), t.jsx("input", {
              type: "range",
              min: 0,
              max: 120,
              step: 5,
              value: y,
              onChange: e => w(Number(e.target.value)),
              className: "ars-slider"
            }), t.jsxs("div", {
              className: "ars-slider-labels",
              children: [t.jsx("span", {
                children: u("aiRadioContinuous")
              }), t.jsx("span", {
                children: "60s"
              }), t.jsx("span", {
                children: "120s"
              })]
            })]
          }), t.jsxs("div", {
            className: "ars-field",
            children: [t.jsxs("label", {
              children: [t.jsx(oe, {
                size: 14
              }), " ", u("aiRadioMusicFreq")]
            }), t.jsxs("select", {
              value: j,
              onChange: e => k(Number(e.target.value)),
              className: "ars-select",
              children: [t.jsx("option", {
                value: 0,
                children: u("aiRadioNoMusic")
              }), t.jsx("option", {
                value: 1,
                children: u("aiRadioEveryN", {
                  n: 1
                })
              }), t.jsx("option", {
                value: 2,
                children: u("aiRadioEveryN", {
                  n: 2
                })
              }), t.jsx("option", {
                value: 3,
                children: u("aiRadioEveryN", {
                  n: 3
                })
              }), t.jsx("option", {
                value: 5,
                children: u("aiRadioEveryN", {
                  n: 5
                })
              }), t.jsx("option", {
                value: 8,
                children: u("aiRadioEveryN", {
                  n: 8
                })
              })]
            })]
          }), j > 0 && t.jsxs("div", {
            className: "ars-field",
            children: [t.jsx("label", {
              children: u("aiRadioMusicGenre")
            }), t.jsx("input", {
              type: "text",
              value: b,
              onChange: e => v(e.target.value),
              placeholder: u("aiRadioMusicGenrePh"),
              maxLength: 30
            })]
          }), j > 0 && t.jsxs("div", {
            className: "ars-field",
            children: [t.jsxs("label", {
              children: [t.jsx(ye, {
                size: 14
              }), " ", u("aiRadioPlaylist")]
            }), t.jsx("p", {
              className: "ars-hint",
              children: u("aiRadioPlaylistHint")
            }), t.jsxs("select", {
              value: U || "",
              onChange: e => D(e.target.value || null),
              className: "ars-select",
              children: [t.jsx("option", {
                value: "",
                children: u("aiRadioPlaylistNone")
              }), c.map(e => t.jsx("option", {
                value: e.id,
                children: e.name
              }, e.id))]
            })]
          }), t.jsxs("div", {
            className: "ars-field ars-toggle-row",
            children: [t.jsxs("div", {
              children: [t.jsxs("label", {
                children: [t.jsx(we, {
                  size: 14
                }), " ", u("aiRadioTts")]
              }), t.jsx("p", {
                className: "ars-hint",
                children: u("aiRadioTtsHint")
              })]
            }), t.jsx("button", {
              className: "ars-toggle " + (S ? "on" : ""),
              onClick: () => C(e => !e),
              children: t.jsx("div", {
                className: "ars-toggle-thumb"
              })
            })]
          }), t.jsxs("div", {
            className: "ars-field ars-toggle-row",
            children: [t.jsxs("div", {
              children: [t.jsxs("label", {
                children: [t.jsx(ve, {
                  size: 14
                }), " ", u("aiRadioRealTimeAware")]
              }), t.jsx("p", {
                className: "ars-hint",
                children: u("aiRadioRealTimeAwareHint")
              })]
            }), t.jsx("button", {
              className: "ars-toggle " + (H ? "on" : ""),
              onClick: () => $(e => !e),
              children: t.jsx("div", {
                className: "ars-toggle-thumb"
              })
            })]
          }), t.jsxs("div", {
            className: "ars-field ars-toggle-row",
            children: [t.jsxs("div", {
              children: [t.jsxs("label", {
                children: [t.jsx(je, {
                  size: 14
                }), " ", u("aiRadioJailbreakEnabled")]
              }), t.jsx("p", {
                className: "ars-hint",
                children: u("aiRadioJailbreakHint")
              })]
            }), t.jsx("button", {
              className: "ars-toggle " + (W ? "on" : ""),
              onClick: () => F(e => !e),
              children: t.jsx("div", {
                className: "ars-toggle-thumb"
              })
            })]
          }), W && t.jsxs("div", {
            className: "ars-field",
            children: [t.jsx("label", {
              children: u("aiRadioJailbreakSelect")
            }), t.jsx("p", {
              className: "ars-hint",
              children: u("aiRadioJailbreakSelectHint")
            }), ne.length === 0 ? t.jsx("p", {
              className: "ars-empty",
              style: {
                padding: "12px 0"
              },
              children: u("aiRadioJailbreakEmpty")
            }) : t.jsx("div", {
              className: "ars-jailbreak-list",
              children: ne.map(e => {
                const n = G.some(t => String(t) === String(e.id));
                return t.jsxs("label", {
                  className: "ars-jailbreak-item " + (n ? "active" : ""),
                  children: [t.jsx("input", {
                    type: "checkbox",
                    checked: n,
                    onChange: () => re(e.id)
                  }), t.jsxs("div", {
                    className: "ars-jailbreak-meta",
                    children: [t.jsxs("div", {
                      className: "ars-jailbreak-name",
                      children: [e.name || e.keys || "(unnamed)", e.disabled && t.jsxs("span", {
                        className: "ars-jailbreak-disabled",
                        children: ["·", u("aiRadioJailbreakDisabled")]
                      })]
                    }), e.bookTitle && t.jsx("div", {
                      className: "ars-jailbreak-book",
                      children: e.bookTitle
                    })]
                  })]
                }, e.id);
              })
            })]
          }), t.jsxs("div", {
            className: "ars-field",
            children: [t.jsxs("label", {
              children: [t.jsx(ve, {
                size: 14
              }), " ", u("aiRadioSleepTimer")]
            }), t.jsx("div", {
              className: "ars-sleep-chips",
              children: [0, 15, 30, 45, 60].map(e => t.jsx("button", {
                type: "button",
                className: "ars-sleep-chip " + (E === e ? "active" : ""),
                onClick: () => ae(e),
                children: e === 0 ? u("radioSleepOff") || "關閉" : `${e}m`
              }, e))
            }), t.jsxs("div", {
              className: "ars-sleep-custom-row",
              children: [t.jsx("input", {
                type: "number",
                min: 1,
                max: 720,
                value: M,
                onChange: e => B(e.target.value),
                placeholder: u("radioSleepCustomPrompt") || "請輸入睡眠分鐘數（例如 25）"
              }), t.jsx("button", {
                type: "button",
                className: "ars-sleep-apply",
                onClick: se,
                children: u("confirm") || "確定"
              })]
            }), t.jsx("p", {
              className: "ars-hint",
              children: E > 0 ? `${u("radioSleepTimer") || "睡眠計時"}: ${E}m` : u("radioSleepOff") || "關閉"
            })]
          }), S && t.jsx("div", {
            className: "ars-field",
            children: t.jsx("p", {
              className: "ars-hint",
              children: u("aiRadioVoicePerHostHint", "每位主播的音色與供應商（MiniMax / ElevenLabs）跟隨其聊天設定，可在角色名片或聊天設定裡調整。")
            })
          })]
        }), t.jsx("div", {
          className: "ars-footer",
          children: p ? t.jsx("button", {
            className: "ars-btn save",
            onClick: ce,
            style: {
              flex: 1
            },
            children: u("aiRadioSaveChanges")
          }) : t.jsxs(t.Fragment, {
            children: [g && t.jsx("button", {
              className: "ars-btn save",
              onClick: ce,
              children: u("aiRadioSave")
            }), t.jsxs("button", {
              className: "ars-btn start",
              onClick: le,
              disabled: !ee,
              children: [t.jsx(xe, {
                size: 16
              }), u("aiRadioStartBroadcast")]
            })]
          })
        }), z && t.jsx("div", {
          className: "ars-picker-overlay",
          onClick: () => P(null),
          children: t.jsxs("div", {
            className: "ars-picker",
            onClick: e => e.stopPropagation(),
            children: [t.jsx("div", {
              className: "ars-picker-title",
              children: u(z === "main" ? "aiRadioSelectMainHost" : z === "co-host" ? "aiRadioSelectCoHost" : "aiRadioSelectGuest")
            }), t.jsxs("div", {
              className: "ars-picker-list",
              children: [J.length === 0 && t.jsx("p", {
                className: "ars-empty",
                children: u("aiRadioNoCharsAvailable")
              }), J.map(e => t.jsxs("button", {
                className: "ars-picker-item",
                onClick: () => K(e.id, z),
                children: [t.jsx("img", {
                  decoding: "async",
                  src: e.image,
                  alt: "",
                  className: "ars-char-avatar"
                }), t.jsx("span", {
                  children: e.name
                })]
              }, e.id))]
            })]
          })
        })]
      }), t.jsx("style", {
        children: "\n                .ai-radio-setup-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(8px); z-index: 1000; display: flex; align-items: flex-end; justify-content: center; }\n                .ai-radio-setup-panel { width: 100%; max-width: 420px; max-height: 85vh; background: rgba(30,30,35,0.98); border-radius: 20px 20px 0 0; overflow: hidden; display: flex; flex-direction: column; }\n\n                .ars-header { display: flex; align-items: center; gap: 8px; padding: 16px 20px; border-bottom: 1px solid rgba(255,255,255,0.08); color: #fff; font-weight: 700; font-size: 17px; }\n                .ars-close { margin-left: auto; background: none; border: none; color: rgba(255,255,255,0.5); cursor: pointer; padding: 4px; }\n\n                .ars-body { flex: 1; overflow-y: auto; padding: 16px 20px; display: flex; flex-direction: column; gap: 20px; }\n\n                .ars-field label { display: flex; align-items: center; gap: 6px; color: rgba(255,255,255,0.8); font-size: 13px; font-weight: 600; margin-bottom: 8px; }\n                .ars-field input[type=\"text\"], .ars-select, .ars-textarea { width: 100%; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 10px 14px; color: #fff; font-size: 15px; outline: none; box-sizing: border-box; font-family: inherit; }\n                .ars-textarea { resize: vertical; min-height: 60px; line-height: 1.4; }\n                .ars-field input[type=\"text\"]:focus, .ars-select:focus, .ars-textarea:focus { border-color: rgba(255,255,255,0.3); }\n                .ars-field input::placeholder, .ars-textarea::placeholder { color: rgba(255,255,255,0.3); }\n                .ars-select { appearance: none; cursor: pointer; }\n\n                .ars-presets { display: flex; flex-wrap: wrap; gap: 8px; }\n                .ars-preset-chip { display: flex; align-items: center; gap: 6px; padding: 8px 14px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; color: rgba(255,255,255,0.8); font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; }\n                .ars-preset-chip:active { background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.3); }\n                .ars-preset-icon { font-size: 16px; }\n\n                .ars-cover-row { display: flex; gap: 10px; }\n                .ars-cover-preview { position: relative; width: 80px; height: 80px; border-radius: 14px; overflow: hidden; }\n                .ars-cover-preview img { width: 100%; height: 100%; object-fit: cover; }\n                .ars-cover-remove { position: absolute; top: 4px; right: 4px; width: 20px; height: 20px; border-radius: 50%; background: rgba(0,0,0,0.6); border: none; color: #fff; display: flex; align-items: center; justify-content: center; cursor: pointer; }\n                .ars-cover-upload { width: 80px; height: 80px; border-radius: 14px; background: rgba(255,255,255,0.06); border: 1px dashed rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; cursor: pointer; color: rgba(255,255,255,0.3); }\n\n                .ars-slider { width: 100%; -webkit-appearance: none; appearance: none; height: 4px; background: rgba(255,255,255,0.15); border-radius: 2px; outline: none; }\n                .ars-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 18px; height: 18px; border-radius: 50%; background: #fff; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.3); }\n                .ars-slider-labels { display: flex; justify-content: space-between; font-size: 11px; color: rgba(255,255,255,0.3); margin-top: 4px; }\n\n                .ars-char-list { display: flex; flex-wrap: wrap; gap: 8px; }\n                .ars-char-chip { display: flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 6px 10px 6px 6px; }\n                .ars-char-avatar { width: 28px; height: 28px; border-radius: 50%; object-fit: cover; }\n                .ars-char-name { color: #fff; font-size: 13px; font-weight: 600; }\n                .ars-role-badge { font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 8px; }\n                .ars-role-badge.main { background: rgba(255,59,48,0.2); color: #ff3b30; }\n                .ars-role-badge.co-host { background: rgba(52,199,89,0.2); color: #34c759; }\n                .ars-role-badge.guest { background: rgba(0,122,255,0.2); color: #007aff; }\n                .ars-remove { background: none; border: none; color: rgba(255,255,255,0.3); cursor: pointer; padding: 2px; }\n\n                .ars-add-btn { display: flex; align-items: center; gap: 4px; background: rgba(255,59,48,0.15); border: 1px dashed rgba(255,59,48,0.4); border-radius: 20px; padding: 8px 14px; color: #ff3b30; font-size: 13px; font-weight: 600; cursor: pointer; }\n                .ars-add-btn.secondary { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.15); color: rgba(255,255,255,0.6); }\n\n                .ars-toggle-row { display: flex; align-items: center; justify-content: space-between; }\n                .ars-toggle-row > div { flex: 1; }\n                .ars-hint { color: rgba(255,255,255,0.35); font-size: 11px; margin: 2px 0 0; }\n                .ars-toggle { width: 44px; height: 26px; border-radius: 13px; background: rgba(255,255,255,0.15); border: none; cursor: pointer; position: relative; transition: background 0.2s; flex-shrink: 0; }\n                .ars-toggle.on { background: #34c759; }\n                .ars-toggle-thumb { width: 22px; height: 22px; border-radius: 50%; background: #fff; position: absolute; top: 2px; left: 2px; transition: transform 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.2); }\n                .ars-toggle.on .ars-toggle-thumb { transform: translateX(18px); }\n\n                .ars-tone-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }\n                .ars-tone-chip { padding: 6px 14px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; color: rgba(255,255,255,0.7); font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; }\n                .ars-tone-chip.active { background: rgba(255,59,48,0.15); border-color: rgba(255,59,48,0.4); color: #ff3b30; }\n\n\n                .ars-sleep-chips { display: flex; gap: 8px; flex-wrap: wrap; }\n                .ars-sleep-chip { padding: 6px 12px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.8); font-size: 12px; font-weight: 700; cursor: pointer; }\n                .ars-sleep-chip.active { background: rgba(255,59,48,0.2); border-color: rgba(255,59,48,0.45); color: #ff6b6b; }\n                .ars-sleep-custom-row { display: flex; gap: 8px; margin-top: 10px; }\n                .ars-sleep-custom-row input { flex: 1; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 8px 10px; color: #fff; }\n                .ars-sleep-apply { background: rgba(255,255,255,0.14); border: 1px solid rgba(255,255,255,0.2); color: #fff; border-radius: 10px; padding: 8px 12px; font-size: 12px; font-weight: 700; cursor: pointer; }\n\n                .ars-footer { display: flex; gap: 10px; padding: 16px 20px; border-top: 1px solid rgba(255,255,255,0.08); }\n                .ars-btn { flex: 1; display: flex; align-items: center; justify-content: center; gap: 6px; padding: 12px; border-radius: 14px; border: none; font-size: 15px; font-weight: 700; cursor: pointer; transition: opacity 0.2s; }\n                .ars-btn:disabled { opacity: 0.3; cursor: not-allowed; }\n                .ars-btn.start { background: #ff3b30; color: #fff; }\n                .ars-btn.save { background: rgba(255,255,255,0.1); color: #fff; }\n\n                .ars-picker-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10; }\n                .ars-picker { background: rgba(40,40,45,0.98); border-radius: 16px; width: 80%; max-height: 60%; overflow: hidden; }\n                .ars-picker-title { padding: 14px 16px; font-size: 15px; font-weight: 700; color: #fff; border-bottom: 1px solid rgba(255,255,255,0.08); }\n                .ars-picker-list { overflow-y: auto; max-height: 300px; padding: 8px; }\n                .ars-picker-item { display: flex; align-items: center; gap: 10px; width: 100%; background: none; border: none; padding: 10px 12px; border-radius: 12px; color: #fff; font-size: 14px; cursor: pointer; }\n                .ars-picker-item:active { background: rgba(255,255,255,0.1); }\n                .ars-empty { color: rgba(255,255,255,0.3); font-size: 13px; text-align: center; padding: 20px; }\n\n                .ars-jailbreak-list { display: flex; flex-direction: column; gap: 6px; max-height: 220px; overflow-y: auto; padding: 4px; border-radius: 12px; background: rgba(255,255,255,0.04); }\n                .ars-jailbreak-item { display: flex; align-items: center; gap: 10px; padding: 8px 10px; border-radius: 10px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); cursor: pointer; transition: all 0.15s; }\n                .ars-jailbreak-item:active { background: rgba(255,255,255,0.08); }\n                .ars-jailbreak-item.active { background: rgba(255,59,48,0.12); border-color: rgba(255,59,48,0.4); }\n                .ars-jailbreak-item input[type=\"checkbox\"] { accent-color: #ff3b30; width: 16px; height: 16px; flex-shrink: 0; }\n                .ars-jailbreak-meta { display: flex; flex-direction: column; gap: 2px; min-width: 0; flex: 1; }\n                .ars-jailbreak-name { color: #fff; font-size: 13px; font-weight: 600; word-break: break-word; }\n                .ars-jailbreak-book { color: rgba(255,255,255,0.4); font-size: 11px; }\n                .ars-jailbreak-disabled { margin-left: 6px; font-size: 11px; color: rgba(255,255,255,0.35); font-weight: 500; }\n            "
      })]
    });
  } else {
    return null;
  }
};
const Pn = n.memo(({
  comments: n = [],
  isPlaying: r = false
}) => {
  const i = e.useMemo(() => n.map((e, t) => ({
    text: e,
    key: `dm-${t}-${e.substring(0, 6)}`,
    top: (t * 17 + 5) % 65 + "%",
    duration: 12 + t * 3.7 % 8 + "s",
    delay: t * 1.3 % 4 + "s"
  })), [n]);
  if (r) {
    return t.jsx("div", {
      className: "danmaku-layer",
      children: i.map(e => t.jsx("div", {
        className: "danmaku-text",
        style: {
          top: e.top,
          animationDuration: e.duration,
          animationDelay: e.delay
        },
        children: e.text
      }, e.key))
    });
  } else {
    return null;
  }
});
Pn.displayName = "AIRadioDanmaku";
const An = n.memo(({
  isPlaying: n = false,
  count: r = 24
}) => {
  const i = e.useMemo(() => Array.from({
    length: r
  }, (e, t) => ({
    key: `fb-${t}`,
    delay: t * 0.05 + "s"
  })), [r]);
  return t.jsx("div", {
    className: "connection-waves",
    children: i.map(e => t.jsx("div", {
      className: "freq-bar " + (n ? "freq-bar-active" : ""),
      style: {
        animationDelay: e.delay
      }
    }, e.key))
  });
});
An.displayName = "FreqBars";
const Tn = ({
  status: n,
  segments: r = [],
  currentSegment: i,
  station: a,
  characters: o = [],
  currentSong: s = null,
  ttsPlaying: l = false,
  onStop: c,
  onPause: d,
  onResume: u,
  sleepRemainingSec: g = 0,
  t: p
}) => {
  const f = e.useRef(null);
  const x = n !== "idle";
  const h = n === "broadcasting" || n === "generating";
  const m = n === "music-playing";
  e.useEffect(() => {
    if (f.current) {
      f.current.scrollTop = f.current.scrollHeight;
    }
  }, [r.length]);
  const b = e.useMemo(() => [...((a == null ? undefined : a.hosts) || []), ...((a == null ? undefined : a.guests) || [])].map(e => {
    n = e.characterId;
    const t = o.find(e => String(e.id) === String(n));
    var n;
    return {
      id: e.characterId,
      name: (t == null ? undefined : t.name) || "?",
      image: (t == null ? undefined : t.image) || "",
      role: e.role
    };
  }), [a, o]);
  const v = e.useMemo(() => r.filter(e => e.text).slice(-10), [r]);
  return t.jsxs("div", {
    className: "ai-radio-live",
    children: [t.jsxs("div", {
      className: "arl-visual",
      children: [t.jsxs("div", {
        className: `floating-live-badge ${x ? "active" : ""} ${m ? "music" : ""}`,
        children: [t.jsx("div", {
          className: "live-dot"
        }), t.jsx("span", {
          children: m ? "♪ FM MUSIC" : "ON AIR"
        })]
      }), t.jsx("div", {
        className: "arl-hosts",
        children: b.map(e => {
          const n = (i == null ? undefined : i.speakerId) === e.id;
          const r = e.role === "main";
          const a = e.role === "guest";
          let o = p("aiRadioCoHost");
          if (r) {
            o = p("aiRadioMainHost");
          } else if (a) {
            o = p("aiRadioGuest");
          }
          return t.jsxs("div", {
            className: `arl-host-node ${r ? "main" : "guest"} ${n ? "speaking" : ""}`,
            children: [n && x && t.jsx("div", {
              className: "premium-glow-ring"
            }), t.jsx("div", {
              className: "host-img-wrapper",
              children: t.jsx("img", {
                decoding: "async",
                src: e.image,
                alt: e.name
              })
            }), t.jsx("div", {
              className: "host-role-badge " + (r ? "gold" : "white"),
              children: o
            })]
          }, e.id);
        })
      }), t.jsx(An, {
        isPlaying: x
      })]
    }), t.jsxs("div", {
      className: "arl-transcript",
      ref: f,
      children: [v.length === 0 && t.jsx("div", {
        className: "arl-empty",
        children: p(n === "generating" ? "aiRadioGenerating" : "aiRadioWaiting")
      }), v.map((e, n) => {
        const r = n > 0 && v[n - 1].speakerId === e.speakerId;
        const a = b.find(t => String(t.id) === String(e.speakerId));
        const o = (a == null ? undefined : a.role) === "main";
        const s = (a == null ? undefined : a.role) === "guest";
        let l = p("aiRadioCoHost");
        if (o) {
          l = p("aiRadioMainHost");
        } else if (s) {
          l = p("aiRadioGuest");
        }
        return t.jsx("div", {
          className: "arl-seg " + (e.id === (i == null ? undefined : i.id) ? "current" : ""),
          children: t.jsxs("div", {
            className: "arl-seg-content",
            children: [!r && t.jsxs("div", {
              className: "arl-seg-name",
              children: [t.jsx("span", {
                className: "role-tag " + (o ? "gold" : "white"),
                children: l
              }), e.speakerName]
            }), t.jsx("p", {
              className: "arl-seg-text",
              children: e.text
            })]
          })
        }, e.id);
      }), n === "generating" && t.jsx("div", {
        className: "arl-seg generating",
        children: t.jsxs("div", {
          className: "arl-typing-dots",
          children: [t.jsx("span", {}), t.jsx("span", {}), t.jsx("span", {})]
        })
      })]
    }), t.jsxs("div", {
      className: "arl-controls",
      children: [m && s ? t.jsxs("div", {
        className: "arl-now-playing",
        children: [s.cover && t.jsx("img", {
          decoding: "async",
          src: s.cover,
          alt: "",
          className: "arl-np-cover"
        }), t.jsxs("div", {
          className: "arl-np-info",
          children: [t.jsx("div", {
            className: "arl-np-title",
            children: s.title || s.name || ""
          }), t.jsx("div", {
            className: "arl-np-artist",
            children: s.artist || s.artists || ""
          })]
        })]
      }) : t.jsxs("div", {
        className: "arl-status-text",
        children: [n === "generating" && p("aiRadioGenerating"), n === "broadcasting" && p("aiRadioOnAir"), n === "paused" && p("aiRadioPaused")]
      }), t.jsxs("div", {
        className: "arl-btns-wrapper",
        children: [g > 0 && t.jsxs("div", {
          className: "arl-sleep-countdown",
          children: [t.jsx(ke, {
            size: 12
          }), t.jsxs("span", {
            children: [Math.floor(g / 60), ":", String(g % 60).padStart(2, "0")]
          })]
        }), t.jsxs("div", {
          className: "arl-btns",
          children: [(h || m || n === "paused") && t.jsx("button", {
            className: "arl-ctrl-btn",
            onClick: n === "paused" ? u : d,
            children: n === "paused" ? t.jsx(ce, {
              size: 20,
              fill: "#fff"
            }) : t.jsx(Se, {
              size: 20,
              fill: "#fff"
            })
          }), t.jsx("button", {
            className: "arl-ctrl-btn stop",
            onClick: c,
            children: t.jsx(Ce, {
              size: 18,
              fill: "#ff3b30"
            })
          })]
        })]
      }), t.jsx("div", {
        className: "arl-tts-indicator",
        children: l ? t.jsx(we, {
          size: 20,
          color: "#34c759"
        }) : t.jsx(we, {
          size: 20,
          color: "rgba(255,255,255,0.4)"
        })
      })]
    }), t.jsx("style", {
      children: "\n                .ai-radio-live { display: flex; flex-direction: column; height: 100%; position: relative; padding-bottom: 10px; }\n                \n                /* Subtly darken the bottom half so lyrics pop natively, no hard borders */\n                .ai-radio-live::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 50%; background: linear-gradient(transparent, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.6) 100%); pointer-events: none; z-index: 0; }\n\n                .arl-visual { position: relative; width: 100%; height: 260px; margin: 0 auto; flex-shrink: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 10; padding-top: 10px; }\n\n                /* Minimalist ON AIR Badge */\n                .floating-live-badge { position: absolute; top: 12px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.3); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.15); padding: 5px 14px; border-radius: 20px; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); transition: all 0.5s ease; pointer-events: none; z-index: 20; }\n                .floating-live-badge.active { background: rgba(0,0,0,0.5); border-color: rgba(255,59,48,0.4); box-shadow: 0 0 15px rgba(255,59,48,0.3); }\n                .floating-live-badge.music { border-color: rgba(52,199,89,0.5); box-shadow: 0 0 15px rgba(52,199,89,0.3); }\n                .floating-live-badge.music .live-dot { background: #34c759; box-shadow: 0 0 8px #34c759; }\n\n                /* 播歌中歌曲資訊 — 控制列左側 */\n                .arl-now-playing { display: flex; align-items: center; gap: 8px; background: rgba(0,0,0,0.35); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 5px 10px 5px 5px; max-width: 55%; animation: np-fade-in 0.4s ease; position: absolute; left: 16px; }\n                .arl-np-cover { width: 32px; height: 32px; border-radius: 6px; object-fit: cover; flex-shrink: 0; }\n                .arl-np-info { min-width: 0; }\n                .arl-np-title { font-size: 11px; font-weight: 700; color: #fff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-shadow: 0 1px 3px rgba(0,0,0,0.8); }\n                .arl-np-artist { font-size: 9px; color: rgba(255,255,255,0.5); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 1px; }\n                @keyframes np-fade-in { from { opacity: 0; } to { opacity: 1; } }\n                .floating-live-badge span { color: #fff; font-size: 10px; font-weight: 800; letter-spacing: 2.5px; opacity: 0.9; text-transform: uppercase; }\n                .live-dot { width: 5px; height: 5px; background: rgba(255,255,255,0.4); border-radius: 50%; transition: all 0.3s; }\n                .floating-live-badge.active .live-dot { background: #ff3b30; box-shadow: 0 0 8px #ff3b30; animation: pulse-red 1.5s infinite alternate; }\n                @keyframes pulse-red { 0% { opacity: 0.4; } 100% { opacity: 1; transform: scale(1.2); } }\n\n                /* Pristine Linear Layout - NO OVERLAPPING */\n                .arl-hosts { position: relative; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; width: 100%; margin-top: 24px; gap: 18px; padding: 0 16px; z-index: 10; }\n                \n                .arl-host-node { position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); }\n                \n                /* Avatar Styling */\n                .host-img-wrapper { position: relative; border-radius: 50%; overflow: hidden; background: #000; box-shadow: 0 8px 24px rgba(0,0,0,0.25); z-index: 5; }\n                .arl-host-node.main .host-img-wrapper { width: 76px; height: 76px; border: 2.5px solid rgba(255,255,255,0.95); box-shadow: 0 12px 30px rgba(0,0,0,0.4); }\n                .arl-host-node.guest .host-img-wrapper { width: 62px; height: 62px; border: 1.5px solid rgba(255,255,255,0.6); filter: brightness(0.85); transition: filter 0.5s, border-color 0.5s, transform 0.4s; }\n                \n                .arl-host-node img { width: 100%; height: 100%; object-fit: cover; }\n                \n                /* Micro-interaction when speaking */\n                .arl-host-node.speaking { transform: translateY(-6px); z-index: 20; }\n                .arl-host-node.speaking.guest .host-img-wrapper { filter: brightness(1.1); border-color: rgba(255,255,255,1); box-shadow: 0 0 20px rgba(255,255,255,0.4); transform: scale(1.06); }\n                .arl-host-node.speaking.main .host-img-wrapper { border-color: rgba(255,255,255,1); box-shadow: 0 0 30px rgba(255,255,255,0.6); transform: scale(1.04); }\n                \n                /* THE LUXURY 3D GLASS BADGE */\n                .host-role-badge { position: absolute; bottom: -8px; background: rgba(0,0,0,0.65); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.2); font-size: 9px; font-weight: 800; padding: 2px 10px; border-radius: 12px; letter-spacing: 1px; z-index: 10; box-shadow: 0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15); white-space: nowrap; }\n                .host-role-badge.gold { border-color: rgba(255,215,0,0.6); color: #ffd700; box-shadow: 0 4px 12px rgba(0,0,0,0.4), 0 0 10px rgba(255,215,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2); }\n                .host-role-badge.white { border-color: rgba(255,255,255,0.5); color: #ffffff; }\n                \n                /* Majestic Glow Rings */\n                .premium-glow-ring { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 135%; height: 135%; border-radius: 50%; border: 1.5px solid rgba(255,215,0,0.4); z-index: -1; animation: radio-wave 1.8s infinite ease-out; pointer-events: none; }\n                .arl-host-node.guest .premium-glow-ring { border-color: rgba(255,255,255,0.4); animation-duration: 2s; }\n                \n                @keyframes radio-wave {\n                    0% { transform: translate(-50%, -50%) scale(0.9); opacity: 1; border-width: 2px; }\n                    100% { transform: translate(-50%, -50%) scale(1.4); opacity: 0; border-width: 0px; box-shadow: 0 0 20px rgba(255,255,255,0.5); }\n                }\n\n                /* TRUE RADIO FREQUENCY SPECTRUM */\n                .arl-visual .connection-waves { position: relative; margin-top: 35px; align-items: center; justify-content: center; gap: 4px; height: 40px; width: 100%; padding: 0 40px; z-index: 10; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.6)); }\n                .arl-visual .freq-bar { width: 4px; background: #fff; border-radius: 2px; opacity: 0.6; height: 6px; }\n                .arl-visual .freq-bar-active { opacity: 0.9; animation: spectrum-bounce 0.6s ease-in-out infinite alternate; box-shadow: 0 0 8px rgba(255,255,255,0.3); }\n                @keyframes spectrum-bounce { 0% { height: 8px; } 100% { height: 36px; } }\n\n                /* Fullscreen flowing transcript */\n                .arl-transcript { \n                    flex: 1; \n                    overflow-y: auto; \n                    padding: 10px 24px 50px;\n                    mask-image: linear-gradient(transparent, black 15%, black 85%, transparent); \n                    -webkit-mask-image: linear-gradient(transparent, black 15%, black 85%, transparent); \n                    scrollbar-width: none; \n                    z-index: 5;\n                    position: relative;\n                }\n                .arl-transcript::-webkit-scrollbar { display: none; }\n                \n                .arl-empty { color: rgba(255,255,255,0.6); font-size: 13px; text-align: center; padding: 60px 0; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; text-shadow: 0 2px 4px rgba(0,0,0,0.8); }\n\n                /* Cinematic Subtitles Formatting */\n                .arl-seg { display: flex; flex-direction: column; align-items: center; margin-bottom: 24px; animation: seg-fade-in 0.6s cubic-bezier(0.2, 0.8, 0.2, 1); text-align: center; }\n                .arl-seg-content { width: 100%; max-width: 90%; }\n                \n                .arl-seg-name { display: flex; align-items: center; justify-content: center; gap: 6px; font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.9); margin-bottom: 6px; letter-spacing: 0.5px; text-shadow: 0 2px 4px rgba(0,0,0,0.9); }\n                .role-tag { font-size: 9px; padding: 2px 6px; border-radius: 4px; font-weight: 800; letter-spacing: 0.5px; box-shadow: 0 2px 4px rgba(0,0,0,0.4); background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); }\n                .role-tag.gold { background: rgba(255,215,0,0.3); color: #ffd700; border-color: rgba(255,215,0,0.4); }\n                .role-tag.white { color: #fff; }\n\n                .arl-seg-text { font-size: 15px; color: rgba(255,255,255,0.8); line-height: 1.5; margin: 0; word-break: break-word; font-weight: 600; transition: all 0.5s ease; text-shadow: 0 1px 3px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.6); }\n                \n                .arl-seg.current .arl-seg-text { color: #ffffff; font-size: 17px; font-weight: 800; text-shadow: 0 2px 4px rgba(0,0,0,0.9), 0 4px 12px rgba(0,0,0,0.7); transform: scale(1.02); opacity: 1; }\n\n                .arl-seg.generating { justify-content: center; padding: 20px 0; }\n                .arl-typing-dots { display: flex; gap: 6px; }\n                .arl-typing-dots span { width: 6px; height: 6px; border-radius: 50%; background: #fff; opacity: 0.3; animation: typing-bounce 1.4s infinite cubic-bezier(0.2, 0.8, 0.2, 1); }\n                .arl-typing-dots span:nth-child(2) { animation-delay: 0.2s; }\n                .arl-typing-dots span:nth-child(3) { animation-delay: 0.4s; }\n\n                @keyframes typing-bounce {\n                    0%, 100% { transform: translateY(0); opacity: 0.3; box-shadow: none; }\n                    50% { transform: translateY(-8px); opacity: 1; box-shadow: 0 0 8px rgba(255,255,255,0.6); }\n                }\n\n                @keyframes seg-fade-in {\n                    from { opacity: 0; transform: translateY(16px) scale(0.95); }\n                    to { opacity: 1; transform: translateY(0) scale(1); }\n                }\n\n                /* Floating elegant controls */\n                .arl-controls { display: flex; align-items: center; justify-content: center; padding: 20px; gap: 16px; z-index: 10; position: relative; }\n                .arl-status-text { position: absolute; left: 24px; font-size: 11px; font-weight: 800; color: rgba(255,255,255,0.6); letter-spacing: 1.5px; text-transform: uppercase; text-shadow: 0 1px 4px rgba(0,0,0,0.8); }\n                .arl-btns-wrapper { display: flex; flex-direction: column; align-items: center; gap: 6px; }\n                .arl-btns { display: flex; gap: 16px; align-items: center; justify-content: center; }\n\n                .arl-sleep-countdown { display: flex; align-items: center; gap: 5px; font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.85); letter-spacing: 0.5px; text-shadow: 0 1px 4px rgba(0,0,0,0.8); }\n\n                .arl-ctrl-btn { width: 44px; height: 44px; border-radius: 50%; background: rgba(0,0,0,0.4); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); color: #fff; box-shadow: 0 6px 16px rgba(0,0,0,0.3); }\n                .arl-ctrl-btn:active { transform: scale(0.9); background: rgba(0,0,0,0.6); }\n\n                .arl-ctrl-btn.stop { width: 40px; height: 40px; background: rgba(255,59,48,0.2); border-color: rgba(255,59,48,0.4); color: #ff3b30; }\n                .arl-ctrl-btn.stop:active { background: rgba(255,59,48,0.5); }\n\n                .arl-tts-indicator { position: absolute; right: 24px; bottom: 22px; padding: 4px; }\n            "
    })]
  });
};
function En(e) {
  return new Promise(t => {
    const n = new FileReader();
    n.onload = () => t(n.result);
    n.onerror = () => t(null);
    n.readAsDataURL(e);
  });
}
const Ln = ({
  isOpen: n,
  onClose: i,
  onUpload: a,
  onLyricOnly: o,
  currentLocalSong: s,
  t: l
}) => {
  var c;
  const [d, u] = e.useState(null);
  const [g, p] = e.useState(null);
  const [f, x] = e.useState("");
  const [h, m] = e.useState(null);
  const [b, v] = e.useState("");
  const [y, w] = e.useState(false);
  const j = e.useRef(null);
  const k = e.useRef(null);
  const S = e.useRef(null);
  const C = e.useCallback(() => {
    u(null);
    p(null);
    x("");
    m(null);
    v("");
    w(false);
  }, []);
  const I = e.useCallback(() => {
    C();
    i();
  }, [i, C]);
  const N = e.useCallback(async e => {
    var t;
    const n = (t = e.target.files) == null ? undefined : t[0];
    if (n) {
      e.target.value = "";
      u(n);
      w(true);
      try {
        const t = await async function (t) {
          try {
            const e = t.slice(0, 524288);
            const n = await e.arrayBuffer();
            const r = new DataView(n);
            const i = new Uint8Array(n);
            if (i[0] !== 73 || i[1] !== 68 || i[2] !== 51) {
              return null;
            }
            const a = i[3];
            const o = i[6] << 21 | i[7] << 14 | i[8] << 7 | i[9];
            const s = Math.min(o + 10, n.byteLength);
            let l = 10;
            for (i[5] & 64 && (l += r.getUint32(10)); l + 10 < s;) {
              const e = String.fromCharCode(i[l], i[l + 1], i[l + 2], i[l + 3]);
              if (!/^[A-Z0-9]{4}$/.test(e)) {
                break;
              }
              let t;
              t = a === 4 ? i[l + 4] << 21 | i[l + 5] << 14 | i[l + 6] << 7 | i[l + 7] : r.getUint32(l + 4);
              if (t <= 0 || l + 10 + t > s) {
                break;
              }
              if (e === "APIC") {
                const e = l + 10;
                let n = e;
                const r = i[n++];
                let a = "";
                while (n < e + t && i[n] !== 0) {
                  a += String.fromCharCode(i[n++]);
                }
                n++;
                n++;
                if (r === 1 || r === 2) {
                  while (n + 1 < e + t) {
                    if (i[n] === 0 && i[n + 1] === 0) {
                      n += 2;
                      break;
                    }
                    n += 2;
                  }
                } else {
                  while (n < e + t && i[n] !== 0) {
                    n++;
                  }
                  n++;
                }
                const o = i.slice(n, e + t);
                if (o.length < 8) {
                  l += 10 + t;
                  continue;
                }
                return En(new Blob([o], {
                  type: a || "image/jpeg"
                }));
              }
              l += 10 + t;
            }
            return null;
          } catch (e) {
            console.warn("[audioMetadata] 封面提取失敗:", e);
            return null;
          }
        }(n);
        if (t) {
          p(t);
          x("auto");
        }
      } catch {}
      w(false);
    }
  }, []);
  const R = e.useCallback(e => {
    var t;
    const n = (t = e.target.files) == null ? undefined : t[0];
    if (!n) {
      return;
    }
    e.target.value = "";
    const r = new FileReader();
    r.onload = e => {
      p(e.target.result);
      x("manual");
    };
    r.readAsDataURL(n);
  }, []);
  const _ = e.useCallback(async e => {
    var t;
    const n = (t = e.target.files) == null ? undefined : t[0];
    if (!n) {
      return;
    }
    e.target.value = "";
    m(n);
    const r = await n.text();
    v(r.split("\n").slice(0, 3).join("\n"));
  }, []);
  const z = !d && !!h && (s == null ? undefined : s.source) === "local";
  const P = !!d || z;
  const A = e.useCallback(async () => {
    if (!P) {
      return;
    }
    if (z) {
      const e = await h.text();
      if (o) {
        o(e);
      }
      I();
      return;
    }
    let e = null;
    if (h) {
      e = await h.text();
    }
    a({
      audioFile: d,
      coverDataUrl: g,
      lrcText: e
    });
    I();
  }, [P, z, d, g, h, a, o, I]);
  if (n) {
    return r.createPortal(t.jsx("div", {
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(8px)",
        zIndex: 20000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      onClick: I,
      children: t.jsxs("div", {
        onClick: e => e.stopPropagation(),
        style: {
          background: "rgba(30,30,35,0.98)",
          borderRadius: 20,
          padding: "24px 20px",
          width: "88%",
          maxWidth: 340,
          display: "flex",
          flexDirection: "column",
          gap: 16
        },
        children: [t.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          },
          children: [t.jsx("span", {
            style: {
              fontSize: 17,
              fontWeight: 700,
              color: "#fff"
            },
            children: l("radioUploadPanelTitle") || "上傳本地音樂"
          }), t.jsx(he, {
            size: 20,
            color: "rgba(255,255,255,0.5)",
            style: {
              cursor: "pointer"
            },
            onClick: I
          })]
        }), t.jsxs("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: 12
          },
          children: [t.jsxs("div", {
            onClick: () => {
              var e;
              if ((e = j.current) == null) {
                return undefined;
              } else {
                return e.click();
              }
            },
            style: {
              ...Mn,
              border: d ? "1.5px solid rgba(52,199,89,0.5)" : "1.5px dashed rgba(255,255,255,0.2)",
              background: d ? "rgba(52,199,89,0.08)" : "rgba(255,255,255,0.04)"
            },
            children: [t.jsx(oe, {
              size: 22,
              color: d ? "#34c759" : "rgba(255,255,255,0.4)"
            }), t.jsxs("div", {
              style: {
                flex: 1,
                minWidth: 0
              },
              children: [t.jsxs("div", {
                style: {
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#fff"
                },
                children: [l("radioUploadAudioLabel") || "音樂檔案", !(s == null ? undefined : s.source) && t.jsx("span", {
                  style: {
                    color: "#ff6b9d",
                    marginLeft: 4
                  },
                  children: "*"
                })]
              }), t.jsx("div", {
                style: {
                  fontSize: 12,
                  color: "rgba(255,255,255,0.45)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: d ? d.name : l("radioUploadAudioHint") || "點擊選擇 MP3/WAV/FLAC..."
              })]
            }), d && t.jsx("span", {
              style: {
                fontSize: 11,
                color: "rgba(255,255,255,0.35)"
              },
              children: (T = d.size, T < 1024 ? T + "B" : T < 1048576 ? (T / 1024).toFixed(0) + "KB" : (T / 1048576).toFixed(1) + "MB")
            })]
          }), t.jsx("input", {
            ref: j,
            type: "file",
            accept: ".mp3,.m4a,.wav,.flac,.ogg,.aac,.wma,.opus,audio/*",
            style: {
              display: "none"
            },
            onChange: N
          }), t.jsxs("div", {
            onClick: () => {
              var e;
              if ((e = k.current) == null) {
                return undefined;
              } else {
                return e.click();
              }
            },
            style: {
              ...Mn,
              border: g ? "1.5px solid rgba(255,107,157,0.5)" : "1.5px dashed rgba(255,255,255,0.15)",
              background: g ? "rgba(255,107,157,0.06)" : "rgba(255,255,255,0.03)"
            },
            children: [g ? t.jsx("img", {
              decoding: "async",
              src: g,
              alt: "",
              style: {
                width: 40,
                height: 40,
                borderRadius: 6,
                objectFit: "cover"
              }
            }) : y ? t.jsx(pe, {
              size: 22,
              color: "rgba(255,255,255,0.4)",
              className: "spinning"
            }) : t.jsx(ie, {
              size: 22,
              color: "rgba(255,255,255,0.4)"
            }), t.jsxs("div", {
              style: {
                flex: 1,
                minWidth: 0
              },
              children: [t.jsx("div", {
                style: {
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#fff"
                },
                children: l("radioUploadCoverLabel") || "CD 封面"
              }), t.jsx("div", {
                style: {
                  fontSize: 12,
                  color: "rgba(255,255,255,0.45)"
                },
                children: g ? f === "auto" ? l("radioUploadCoverAuto") || "已從 MP3 自動提取（點擊替換）" : l("radioUploadCoverManual") || "已選擇（點擊替換）" : l("radioUploadCoverHint") || "可選，點擊手動上傳"
              })]
            }), g && t.jsx("span", {
              onClick: e => {
                e.stopPropagation();
                p(null);
                x("");
              },
              style: {
                fontSize: 11,
                color: "#ff6b9d",
                cursor: "pointer"
              },
              children: "✕"
            })]
          }), t.jsx("input", {
            ref: k,
            type: "file",
            accept: "image/*",
            style: {
              display: "none"
            },
            onChange: R
          }), t.jsxs("div", {
            onClick: () => {
              var e;
              if ((e = S.current) == null) {
                return undefined;
              } else {
                return e.click();
              }
            },
            style: {
              ...Mn,
              border: h ? "1.5px solid rgba(100,160,255,0.5)" : "1.5px dashed rgba(255,255,255,0.15)",
              background: h ? "rgba(100,160,255,0.06)" : "rgba(255,255,255,0.03)"
            },
            children: [t.jsx(Ie, {
              size: 22,
              color: h ? "#64a0ff" : "rgba(255,255,255,0.4)"
            }), t.jsxs("div", {
              style: {
                flex: 1,
                minWidth: 0
              },
              children: [t.jsx("div", {
                style: {
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#fff"
                },
                children: l("radioUploadLrcLabel") || "歌詞檔案"
              }), t.jsx("div", {
                style: {
                  fontSize: 12,
                  color: "rgba(255,255,255,0.45)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: h ? h.name : l("radioUploadLrcHint") || "可選，.lrc 格式"
              })]
            }), h && t.jsx("span", {
              onClick: e => {
                e.stopPropagation();
                m(null);
                v("");
              },
              style: {
                fontSize: 11,
                color: "#ff6b9d",
                cursor: "pointer"
              },
              children: "✕"
            })]
          }), t.jsx("input", {
            ref: S,
            type: "file",
            accept: ".lrc,.txt,text/*,*/*",
            style: {
              display: "none"
            },
            onChange: _
          })]
        }), b && t.jsx("div", {
          style: {
            fontSize: 11,
            color: "rgba(255,255,255,0.35)",
            background: "rgba(255,255,255,0.04)",
            borderRadius: 8,
            padding: "6px 10px",
            whiteSpace: "pre-wrap",
            maxHeight: 48,
            overflow: "hidden"
          },
          children: b
        }), z && t.jsx("div", {
          style: {
            fontSize: 12,
            color: "#64a0ff",
            background: "rgba(100,160,255,0.08)",
            borderRadius: 8,
            padding: "6px 10px",
            textAlign: "center"
          },
          children: ((c = l("radioUploadLyricOnlyHint")) == null ? undefined : c.replace("{song}", (s == null ? undefined : s.title) || "")) || `歌詞將綁定到「${(s == null ? undefined : s.title) || ""}」`
        }), t.jsxs("button", {
          onClick: A,
          disabled: !P,
          style: {
            padding: "12px 0",
            borderRadius: 12,
            border: "none",
            fontSize: 15,
            fontWeight: 700,
            cursor: P ? "pointer" : "not-allowed",
            background: P ? "linear-gradient(135deg, #ff6b9d, #c084fc)" : "rgba(255,255,255,0.1)",
            color: P ? "#fff" : "rgba(255,255,255,0.3)",
            transition: "all 0.2s"
          },
          children: [t.jsx(ae, {
            size: 16,
            style: {
              verticalAlign: -3,
              marginRight: 6
            }
          }), z ? l("radioUploadLyricOnly") || "綁定歌詞" : l("radioUploadConfirm") || "上傳"]
        })]
      })
    }), document.body);
  } else {
    return null;
  }
  var T;
};
const Mn = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  padding: "12px 14px",
  borderRadius: 12,
  cursor: "pointer",
  transition: "all 0.15s"
};
const Bn = "radioListenTogether";
const Un = (() => {
  const e = new ArrayBuffer(8044);
  const t = new DataView(e);
  const n = (e, n) => {
    for (let r = 0; r < n.length; r++) {
      t.setUint8(e + r, n.charCodeAt(r));
    }
  };
  n(0, "RIFF");
  t.setUint32(4, 8036, true);
  n(8, "WAVE");
  n(12, "fmt ");
  t.setUint32(16, 16, true);
  t.setUint16(20, 1, true);
  t.setUint16(22, 1, true);
  t.setUint32(24, 8000, true);
  t.setUint32(28, 16000, true);
  t.setUint16(32, 2, true);
  t.setUint16(34, 16, true);
  n(36, "data");
  t.setUint32(40, 8000, true);
  let r = "";
  const i = new Uint8Array(e);
  for (let a = 0; a < i.length; a++) {
    r += String.fromCharCode(i[a]);
  }
  return "data:audio/wav;base64," + btoa(r);
})();
const Dn = [{
  id: 3939099,
  title: "TEST",
  artist: "Aperture Science Psychoacoustics Laboratory",
  cover: "https://p2.music.126.net/cnDqZYGJwgaDq1TduTLZIQ==/1687750348643622.jpg",
  duration: 373000,
  type: "song",
  fee: 0
}, {
  id: 1323302662,
  title: "test",
  artist: "fffly",
  cover: "https://p2.music.126.net/rhzsZSNzdgcmhlJ3qkVqSA==/109951163488446312.jpg",
  duration: 194000,
  type: "song",
  fee: 0
}];
const Wn = e => e && typeof e == "string" ? e.startsWith("http://") ? "https://" + e.slice(7) : e.startsWith("//") ? "https:" + e : e : e;
const Fn = () => {
  let e = window.__ltActive;
  if (!e) {
    try {
      const t = localStorage.getItem("radioListenTogether");
      if (t) {
        const n = JSON.parse(t);
        e = {
          charName: (n == null ? undefined : n.name) || "",
          charImage: (n == null ? undefined : n.image) || "",
          userName: (n == null ? undefined : n._userName) || window.__ltUserName || "",
          userImage: (n == null ? undefined : n._userImage) || window.__ltUserImage || ""
        };
        window.__ltActive = e;
      }
    } catch (r) {}
  }
  if (!e) {
    return {
      listenTogether: false
    };
  }
  let t = 0;
  try {
    const e = localStorage.getItem("radioListenTogether_start");
    if (e) {
      t = Math.floor((Date.now() - Number(e)) / 1000);
    }
  } catch (r) {}
  const n = Math.floor(t / 60);
  return {
    listenTogether: true,
    ltCharName: e.charName || "",
    ltCharImage: e.charImage || "",
    ltUserName: e.userName || "",
    ltUserImage: e.userImage || "",
    ltElapsedSec: t,
    ltElapsedText: n > 0 ? `${n}分鐘` : `${t}秒`
  };
};
const Gn = () => {
  var n;
  var r;
  const {
    showScreen: N
  } = p();
  const {
    t: R
  } = f();
  const {
    characters: _
  } = x();
  const {
    safeCurrentProfileUserId: P,
    currentProfileUser: Z
  } = h();
  const se = (t => {
    const [n, r] = e.useState(() => {
      try {
        const e = localStorage.getItem(Bn);
        if (e) {
          return JSON.parse(e);
        }
      } catch (e) {}
      return null;
    });
    const [i, a] = e.useState(() => {
      try {
        const e = localStorage.getItem(Bn + "_start");
        if (e) {
          return Number(e);
        }
      } catch (e) {}
      return null;
    });
    const [o, s] = e.useState(0);
    const l = e.useRef(null);
    e.useEffect(() => {
      if (!n || !i) {
        s(0);
        return;
      }
      const e = () => {
        s(Math.floor((Date.now() - i) / 1000));
      };
      e();
      l.current = setInterval(e, 1000);
      return () => clearInterval(l.current);
    }, [n, i]);
    e.useEffect(() => {
      if (n) {
        try {
          const e = {
            ...n
          };
          if (e.image && e.image.length > 500) {
            e.image = "";
          }
          if (e._userImage && e._userImage.length > 500) {
            e._userImage = "";
          }
          localStorage.setItem(Bn, JSON.stringify(e));
        } catch (e) {
          console.warn("[ListenTogether] 持久化失敗（容量不足）:", e.message);
        }
        window.__ltActive = {
          charName: n.name,
          charImage: n.image,
          userName: n._userName || window.__ltUserName || "",
          userImage: n._userImage || window.__ltUserImage || ""
        };
      } else {
        localStorage.removeItem(Bn);
        window.__ltActive = null;
      }
    }, [n]);
    e.useEffect(() => {
      if (i) {
        localStorage.setItem(Bn + "_start", String(i));
      } else {
        localStorage.removeItem(Bn + "_start");
      }
    }, [i]);
    const c = e.useCallback((e, t) => {
      if (!e) {
        return;
      }
      const n = {
        id: e.id,
        name: String(e.name || ""),
        image: String(e.image || ""),
        _userName: String((t == null ? undefined : t.name) || ""),
        _userImage: String((t == null ? undefined : t.avatar) || "")
      };
      r(n);
      a(Date.now());
      window.__ltActive = {
        charName: n.name,
        charImage: n.image,
        userName: n._userName,
        userImage: n._userImage
      };
    }, []);
    const d = e.useCallback(e => {
      if (!n || n.image) {
        return;
      }
      const t = e == null ? undefined : e.find(e => String(e.id) === String(n.id));
      if (t == null ? undefined : t.image) {
        r(e => e ? {
          ...e,
          image: String(t.image)
        } : e);
      }
    }, [n]);
    const u = e.useCallback(() => {
      r(null);
      a(null);
      window.__ltActive = null;
      if (window.__radioAudio) {
        window.__radioAudio.__ltPlaylistIds = null;
      }
    }, []);
    const g = e.useCallback(e => {
      if (e < 60) {
        if (t) {
          return t("radioListenTogetherSec").replace("{n}", e);
        } else {
          return `${e}秒`;
        }
      }
      const n = Math.floor(e / 60);
      if (n < 60) {
        if (t) {
          return t("radioListenTogetherMin").replace("{n}", n);
        } else {
          return `${n}分鐘`;
        }
      }
      const r = Math.floor(n / 60);
      const i = n % 60;
      if (i > 0) {
        if (t) {
          return t("radioListenTogetherHour").replace("{h}", r).replace("{m}", i);
        } else {
          return `${r}小時${i}分鐘`;
        }
      } else if (t) {
        return t("radioListenTogetherHourOnly").replace("{h}", r);
      } else {
        return `${r}小時`;
      }
    }, [t]);
    return {
      listenChar: n,
      isListening: !!n,
      elapsedSec: o,
      elapsedText: g(o),
      startListenTogether: c,
      stopListenTogether: u,
      patchListenCharImage: d
    };
  })(R);
  const [le, ue] = e.useState(false);
  e.useEffect(() => {
    if (se.isListening && (_ == null ? undefined : _.length)) {
      se.patchListenCharImage(_);
    }
  }, [se.isListening, _]);
  const [fe, xe] = e.useState(false);
  const [me, ve] = e.useState(null);
  const [we, je] = e.useState([]);
  const [Ce, Ie] = e.useState([]);
  const We = e.useRef(null);
  const Fe = function ({
    onPlaySong: t,
    characters: n = [],
    userId: r = ""
  }) {
    const i = Sn();
    const [g, p] = e.useState(i.status);
    const [f, x] = e.useState(i.segments);
    const [h, m] = e.useState(null);
    const [b, v] = e.useState(i.station);
    const [y, k] = e.useState(i.lastSong || null);
    const [S, I] = e.useState(false);
    const [N, R] = e.useState(i.exportProgress || 0);
    const [_, z] = e.useState(!!i.exportInProgress);
    const P = e.useRef(n);
    const A = e.useRef(t);
    e.useEffect(() => {
      P.current = n;
    }, [n]);
    e.useEffect(() => {
      A.current = t;
    }, [t]);
    e.useEffect(() => {
      var e;
      const t = Sn();
      t.onStatusChange = e => {
        p(e);
      };
      t.onSegmentsChange = e => {
        x([...e]);
      };
      t.onCurrentSegmentChange = e => {
        m(e);
      };
      t.onCurrentSongChange = e => {
        k(e);
      };
      t.onTtsPlayingChange = e => {
        I(e);
      };
      t.onExportProgressChange = e => {
        R(e);
      };
      t.onExportInProgressChange = e => {
        z(e);
      };
      p(t.status);
      x([...t.segments]);
      v(t.station);
      if (t.status === yn) {
        k(t.lastSong || null);
      }
      R(t.exportProgress || 0);
      z(!!t.exportInProgress);
      if (t.status === bn && !t.timer) {
        const n = (((e = t.station) == null ? undefined : e.segmentInterval) || 45) * 1000;
        t.timer = setTimeout(() => {
          var e;
          if ((e = ee.current) != null) {
            e.call(ee);
          }
        }, Math.min(n, 3000));
      }
      return () => {
        t.onStatusChange = null;
        t.onSegmentsChange = null;
        t.onCurrentSegmentChange = null;
        t.onCurrentSongChange = null;
        t.onTtsPlayingChange = null;
        t.onExportProgressChange = null;
        t.onExportInProgressChange = null;
      };
    }, []);
    const T = e.useCallback((e, t) => {
      var n;
      var r;
      var i;
      var a;
      var o;
      const s = String(((n = e.station) == null ? undefined : n.name) || "AI Radio");
      const l = (a = (i = (r = e.station) == null ? undefined : r.hosts) == null ? undefined : i[0]) == null ? undefined : a.characterId;
      const c = (Array.isArray(P.current) ? P.current : []).find(e => String(e.id) === String(l));
      const d = e.status !== mn;
      w({
        title: s,
        artist: String((t == null ? undefined : t.speakerName) || (c == null ? undefined : c.name) || ""),
        cover: String(((o = e.station) == null ? undefined : o.coverImage) || (c == null ? undefined : c.image) || ""),
        isPlaying: d,
        type: "ai-radio",
        currentTime: 0,
        duration: 0
      });
      window.dispatchEvent(new CustomEvent("dynamic-island-lyric", {
        detail: {
          text: (t == null ? undefined : t.text) ? `${String(t.speakerName || "")}：${String(t.text)}` : s,
          nextText: String((t == null ? undefined : t.nextText) || "")
        }
      }));
    }, []);
    const E = e.useCallback(e => {
      var t;
      var n;
      var r;
      var i;
      const a = Sn();
      a.status = e;
      if ((t = a.onStatusChange) != null) {
        t.call(a, e);
      }
      if (e === yn) {
        if ((n = a.onCurrentSongChange) != null) {
          n.call(a, a.lastSong || null);
        }
      } else if ((e === bn || e === wn) && (r = a.onCurrentSongChange) != null) {
        r.call(a, null);
      }
      if (e === mn) {
        if ((i = a.onCurrentSongChange) != null) {
          i.call(a, null);
        }
        w({
          isPlaying: false
        });
        window.dispatchEvent(new CustomEvent("dynamic-island-lyric", {
          detail: {
            text: "",
            nextText: ""
          }
        }));
      }
    }, []);
    const L = e.useCallback((e, t) => {
      var n;
      var r;
      const i = (Array.isArray(t == null ? undefined : t.lines) ? t.lines : []).map(e => String((e == null ? undefined : e.text) || "")).join(" ").match(/[《\"“”]([^》\"“”]{1,40})[》\"“”]/);
      if (i == null ? undefined : i[1]) {
        return i[1].trim();
      }
      const a = String(((n = e.station) == null ? undefined : n.musicGenre) || "").trim();
      if (a) {
        return `${a} 热门`;
      }
      const o = String(((r = e.station) == null ? undefined : r.theme) || "").trim();
      if (o) {
        return `${o} 适合的歌`;
      } else {
        return "华语流行 热门";
      }
    }, []);
    const M = e.useCallback(async (e, t, n) => {
      var r;
      const i = ((r = e.station) == null ? undefined : r.musicGenre) || "";
      if (n) {
        try {
          const e = await xn(n, i);
          if (e) {
            console.log("[AIRadio] 搜歌成功:", e.title, e.artist);
            return e;
          }
          console.warn("[AIRadio] 主關鍵詞搜不到，啟用保底:", n);
        } catch (o) {
          console.warn("[AIRadio] 主關鍵詞搜歌異常:", o.message);
        }
      }
      const a = L(e, t);
      if (!a || a === n) {
        return null;
      }
      try {
        const e = await xn(a, i);
        if (e) {
          console.log("[AIRadio] 保底搜歌成功:", e.title, e.artist, "(query:", a, ")");
          return e;
        }
        console.warn("[AIRadio] 保底也搜不到:", a);
      } catch (o) {
        console.warn("[AIRadio] 保底搜歌異常:", o.message);
      }
      return null;
    }, [L]);
    const B = e.useCallback(e => {
      var t;
      const n = (t = e.station) == null ? undefined : t.playlistId;
      if (!n) {
        return null;
      }
      const r = C(n);
      if (!r.length) {
        return null;
      }
      e._playedSongIds ||= new Set();
      const i = r.filter(t => !e._playedSongIds.has(String(t.id)));
      if (!i.length) {
        e._playedSongIds.clear();
        const t = e.lastSong ? String(e.lastSong.id) : null;
        const n = t && r.length > 1 ? r.filter(e => String(e.id) !== t) : r;
        const i = n[Math.floor(Math.random() * n.length)];
        e._playedSongIds.add(String(i.id));
        return {
          ...i,
          type: "song",
          fromAIRadio: true
        };
      }
      const a = i[Math.floor(Math.random() * i.length)];
      e._playedSongIds.add(String(a.id));
      return {
        ...a,
        type: "song",
        fromAIRadio: true
      };
    }, []);
    const U = e.useCallback(e => {
      var t;
      var n;
      const r = Sn();
      const i = {
        ...e,
        id: "seg_" + ++r.segmentId,
        timestamp: Date.now()
      };
      r.segments.push(i);
      if ((t = r.onSegmentsChange) != null) {
        t.call(r, r.segments);
      }
      if ((n = r.onCurrentSegmentChange) != null) {
        n.call(r, i);
      }
      return i;
    }, []);
    const D = e.useCallback(e => new Promise(t => {
      var n;
      var r;
      var i;
      const o = Sn();
      if ((n = o.onTtsPlayingChange) != null) {
        n.call(o, true);
      }
      const s = window.__radioAudio;
      const l = !!s;
      const c = l ? s : o.ttsAudio ||= new Audio();
      const d = URL.createObjectURL(e);
      const u = (e = false) => {
        var t;
        URL.revokeObjectURL(d);
        if ((t = o.onTtsPlayingChange) != null) {
          t.call(o, false);
        }
        o._ttsResolve = null;
        if (l) {
          if (e && c === window.__radioAudio) {
            try {
              c.loop = true;
              c.src = jn;
              c.play().catch(() => {});
            } catch (n) {}
          } else {
            c.__ttsMode = false;
            c.__skipPauseBroadcast = false;
            c.loop = false;
          }
        }
      };
      o._ttsResolve = t;
      if (l && (c.__ttsMode = true, c.__skipPauseBroadcast = true, c.loop = false, "mediaSession" in navigator)) {
        try {
          const e = ((r = o.station) == null ? undefined : r.name) || "AI Radio";
          const t = ((i = o.station) == null ? undefined : i.coverImage) || "";
          navigator.mediaSession.metadata = new MediaMetadata({
            title: e,
            artist: "AI Radio",
            artwork: t ? [{
              src: t,
              sizes: "512x512"
            }] : []
          });
        } catch (g) {}
      }
      c.src = d;
      c.onended = () => {
        const e = o.status !== mn && o.status !== vn;
        u(e);
        t();
      };
      c.onerror = () => {
        u(false);
        t();
      };
      if (l) {
        c.play().catch(() => {
          u();
          t();
        });
      } else {
        const e = a(c, {
          safetyTimeoutMs: 60000
        });
        if (e && typeof e.catch == "function") {
          e.catch(() => {
            u();
            t();
          });
        }
      }
    }), []);
    const W = e.useCallback(async e => {
      const t = Sn();
      const n = {};
      let i = null;
      const a = await o.get("apiSettings").catch(() => null);
      const l = [...(e.hosts || []), ...(e.guests || [])];
      const c = P.current;
      for (const o of l) {
        const e = o.characterId;
        const t = c.find(t => String(t.id) === String(e));
        if (r) {
          try {
            const o = await s.get(r, e);
            if (o) {
              const r = o.voiceProvider || (t == null ? undefined : t.voiceProvider) || "minimax";
              const s = o.sovitsApiVersion || (t == null ? undefined : t.sovitsApiVersion) || (a == null ? undefined : a.sovitsApiVersion) || "v2";
              let l = "";
              l = r === "elevenlabs" ? o.elevenVoiceId || (t == null ? undefined : t.elevenVoiceId) || "" : r === "gptsovits" ? s === "gsvi" ? o.sovitsGsviVoice || (t == null ? undefined : t.sovitsGsviVoice) || (a == null ? undefined : a.sovitsGsviVoice) || "" : o.sovitsRefAudioPath || (t == null ? undefined : t.sovitsRefAudioPath) || "" : o.minimaxTimbreId || (t == null ? undefined : t.minimaxTimbreId) || "";
              n[e] = {
                voiceProvider: r,
                voiceId: l,
                sovitsRefText: o.sovitsRefText || (t == null ? undefined : t.sovitsRefText) || "",
                sovitsGptPath: o.sovitsGptPath || (t == null ? undefined : t.sovitsGptPath) || "",
                sovitsSovitsPath: o.sovitsSovitsPath || (t == null ? undefined : t.sovitsSovitsPath) || "",
                sovitsApiVersion: s,
                sovitsGsviModel: o.sovitsGsviModel || (t == null ? undefined : t.sovitsGsviModel) || (a == null ? undefined : a.sovitsGsviModel) || "",
                sovitsGsviLang: o.sovitsGsviLang || (t == null ? undefined : t.sovitsGsviLang) || (a == null ? undefined : a.sovitsGsviLang) || "",
                sovitsGsviEmotion: o.sovitsGsviEmotion || (t == null ? undefined : t.sovitsGsviEmotion) || (a == null ? undefined : a.sovitsGsviEmotion) || "",
                voiceLanguage: o.voiceLanguage || (t == null ? undefined : t.voiceLanguage) || "auto",
                voiceSpeed: o.voiceSpeed ?? (t == null ? undefined : t.voiceSpeed) ?? 1
              };
              if (o.autoTranslate && !i) {
                i = {
                  autoTranslate: true,
                  charLanguage: o.charLanguage || "Japanese",
                  userLanguage: j(o.userLanguage)
                };
              }
              continue;
            }
          } catch (d) {}
        }
        const l = (t == null ? undefined : t.voiceProvider) || "minimax";
        const u = (t == null ? undefined : t.sovitsApiVersion) || (a == null ? undefined : a.sovitsApiVersion) || "v2";
        let g = "";
        g = l === "elevenlabs" ? (t == null ? undefined : t.elevenVoiceId) || "" : l === "gptsovits" ? u === "gsvi" ? (t == null ? undefined : t.sovitsGsviVoice) || (a == null ? undefined : a.sovitsGsviVoice) || "" : (t == null ? undefined : t.sovitsRefAudioPath) || "" : (t == null ? undefined : t.minimaxTimbreId) || "";
        n[e] = {
          voiceProvider: l,
          voiceId: g,
          sovitsRefText: (t == null ? undefined : t.sovitsRefText) || "",
          sovitsGptPath: (t == null ? undefined : t.sovitsGptPath) || "",
          sovitsSovitsPath: (t == null ? undefined : t.sovitsSovitsPath) || "",
          sovitsApiVersion: u,
          sovitsGsviModel: (t == null ? undefined : t.sovitsGsviModel) || (a == null ? undefined : a.sovitsGsviModel) || "",
          sovitsGsviLang: (t == null ? undefined : t.sovitsGsviLang) || (a == null ? undefined : a.sovitsGsviLang) || "",
          sovitsGsviEmotion: (t == null ? undefined : t.sovitsGsviEmotion) || (a == null ? undefined : a.sovitsGsviEmotion) || "",
          voiceLanguage: (t == null ? undefined : t.voiceLanguage) || "auto",
          voiceSpeed: (t == null ? undefined : t.voiceSpeed) ?? 1
        };
      }
      t.voiceSettings = n;
      t.translateConfig = i;
    }, [r]);
    const F = e.useCallback(async (e = "talk", t = {}) => {
      const n = Sn();
      if (!n.station) {
        return null;
      }
      const r = P.current;
      const i = localStorage.getItem("language") || "zh";
      let a = "";
      if (n.station.jailbreakEnabled && Array.isArray(n.station.jailbreakEntryIds) && n.station.jailbreakEntryIds.length > 0) {
        try {
          const e = Date.now();
          if (!n._jailbreakCache || e - n._jailbreakCache.ts > 60000) {
            const t = await l.getAll().catch(() => []);
            n._jailbreakCache = {
              ts: e,
              books: Array.isArray(t) ? t : []
            };
          }
          a = J(n._jailbreakCache.books, n.station.jailbreakEntryIds);
        } catch (f) {
          console.warn("[AIRadio] 讀取破限世界書失敗:", f == null ? undefined : f.message);
        }
      }
      const s = K({
        station: n.station,
        allCharacters: r,
        segmentType: e,
        lastSong: n.lastSong,
        language: i,
        translateConfig: n.translateConfig || null,
        jailbreakContent: a,
        commentLastSong: !!t.commentLastSong,
        endWithSong: !!t.endWithSong,
        isFirstTalk: !!t.isFirstTalk
      });
      const d = Q(s, n.conversationHistory, 3000, e);
      const u = await o.get("apiSettings");
      if (!(u == null ? undefined : u.mainApiKey)) {
        return null;
      }
      n.abortController = new AbortController();
      const g = await c({
        messages: d,
        settings: u,
        preferStreaming: false,
        signal: n.abortController.signal
      });
      if (n.status === mn) {
        return null;
      }
      const p = X(g, r, n.station);
      if (p.lines.length === 0) {
        return null;
      } else {
        return {
          ...p,
          apiSettings: u
        };
      }
    }, []);
    const G = e.useCallback(async (e, t) => {
      var n;
      var r;
      var i;
      const a = Sn();
      const {
        lines: o,
        fullText: s,
        apiSettings: l
      } = e;
      a.conversationHistory.push({
        role: "assistant",
        content: s
      });
      if (a.conversationHistory.length > 20) {
        a.conversationHistory = a.conversationHistory.slice(-20);
      }
      const c = ((n = a.station) == null ? undefined : n.ttsEnabled) && (l.minimaxApiKey || l.elevenlabsApiKey || l.sovitsServerUrl);
      const u = ((r = a.station) == null ? undefined : r.segmentInterval) === 0;
      const g = Math.max(o.length - 2, 0);
      for (let f = 0; f < o.length && a.status !== mn; f++) {
        while (a.status === vn && (await new Promise(e => setTimeout(e, 200)), a.status !== mn));
        if (a.status === mn) {
          break;
        }
        const n = o[f];
        const r = o[f + 1] || null;
        U({
          type: t,
          speakerId: n.speakerId,
          speakerName: n.speakerName,
          speakerAvatar: n.speakerAvatar,
          text: n.text
        });
        T(a, {
          speakerName: n.speakerName,
          text: n.text,
          nextText: r ? `${r.speakerName}：${r.text}` : ""
        });
        if (u && f === g && !a.prefetchPromise) {
          const t = ((i = a.station) == null ? undefined : i.musicFrequency) || 0;
          const n = !!e.songQuery;
          const r = n ? 0 : a.segmentsSinceLastMusic + 1;
          const s = {
            commentLastSong: n,
            endWithSong: t > 0 && r + 1 >= t
          };
          a.prefetchSegmentType = "talk";
          a.prefetchOpts = s;
          a.prefetchPromise = H.current("talk", s).catch(e => {
            console.warn("[AIRadio] 預取失敗:", e.message);
            return null;
          });
          console.log("[AIRadio] 預取已啟動, opts=%o, 剩餘 %d 句", s, o.length - f);
        }
        if (c) {
          const e = n.text.replace(/（[^）]*）/g, "").replace(/\([^)]*\)/g, "").trim();
          const t = a.voiceSettings[n.speakerId] || {};
          let r = t.voiceLanguage || "auto";
          if (r === "auto" && e) {
            if (/[\u3040-\u30ff]/.test(e)) {
              r = "ja";
            } else if (/[\uac00-\ud7af]/.test(e)) {
              r = "ko";
            } else if (/[\u4e00-\u9fff]/.test(e)) {
              r = "zh-CN";
            } else if (/[a-zA-Z]/.test(e)) {
              r = "en";
            }
          }
          const i = {
            apiSettings: l,
            voiceProvider: t.voiceProvider || "minimax",
            voiceId: t.voiceId,
            sovitsRefText: t.sovitsRefText,
            sovitsGptPath: t.sovitsGptPath,
            sovitsSovitsPath: t.sovitsSovitsPath,
            sovitsApiVersion: t.sovitsApiVersion || "v2",
            sovitsGsviVoice: t.sovitsApiVersion === "gsvi" ? t.voiceId : undefined,
            sovitsGsviModel: t.sovitsGsviModel,
            sovitsGsviLang: t.sovitsGsviLang,
            sovitsGsviEmotion: t.sovitsGsviEmotion,
            language: r,
            speed: t.voiceSpeed || 1
          };
          let o = null;
          let s = null;
          for (let l = 0; l < 2 && a.status !== mn; l++) {
            try {
              o = await d(e, i);
            } catch (p) {
              s = p;
              o = null;
            }
            if (o == null ? undefined : o.audioBlob) {
              break;
            }
            if (l === 0) {
              console.warn("[AIRadio] TTS 失敗，重試:", n.speakerName, "voiceId=", t.voiceId || "(default)", (s == null ? undefined : s.message) || "");
              await new Promise(e => setTimeout(e, 300));
            }
          }
          if ((o == null ? undefined : o.audioBlob) && a.status !== mn) {
            const e = a.segments[a.segments.length - 1];
            if (e) {
              e.audioBlob = o.audioBlob;
            }
            await D(o.audioBlob);
          } else if (a.status !== mn) {
            console.warn("[AIRadio] TTS 最終失敗，跳過音頻保留閱讀時間:", n.speakerName, (s == null ? undefined : s.message) || "(returned null)");
            await new Promise(e => setTimeout(e, Math.min(n.text.length * 80, 4000)));
          }
        } else {
          const e = Math.max(n.text.length * 100, 1500);
          await new Promise(t => setTimeout(t, Math.min(e, 6000)));
        }
      }
    }, [U, D, T]);
    const O = e.useCallback(async (e = "talk", t = {}) => {
      try {
        const n = Sn();
        let r;
        const i = n.prefetchOpts || {};
        const a = !!i.commentLastSong == !!t.commentLastSong && !!i.endWithSong == !!t.endWithSong && !!i.isFirstTalk == !!t.isFirstTalk;
        if (n.prefetchPromise && n.prefetchSegmentType === e && a) {
          console.log("[AIRadio] 使用預取結果, type=%s, opts=%o", e, t);
          r = await n.prefetchPromise;
          n.prefetchPromise = null;
          n.prefetchSegmentType = null;
          n.prefetchOpts = null;
        }
        if (!r) {
          n.prefetchPromise = null;
          n.prefetchSegmentType = null;
          n.prefetchOpts = null;
          r = await H.current(e, t);
        }
        if (r) {
          await $.current(r, e);
          return {
            lines: r.lines,
            songQuery: r.songQuery
          };
        } else {
          return null;
        }
      } catch (n) {
        if (n.name !== "AbortError") {
          console.error("[AIRadio] AI 生成失敗:", n);
        }
        return null;
      }
    }, []);
    const H = e.useRef(F);
    e.useEffect(() => {
      H.current = F;
    }, [F]);
    const $ = e.useRef(G);
    e.useEffect(() => {
      $.current = G;
    }, [G]);
    const V = e.useRef(O);
    e.useEffect(() => {
      V.current = O;
    }, [O]);
    const q = e.useCallback(e => {
      const t = Sn();
      if (t.timer) {
        clearTimeout(t.timer);
      }
      t._nextBroadcastAt = Date.now() + e;
      t.timer = setTimeout(() => {
        var e;
        t._nextBroadcastAt = 0;
        if ((e = ee.current) != null) {
          e.call(ee);
        }
      }, e);
    }, []);
    const Z = e.useCallback(async () => {
      var e;
      var t;
      var n;
      const r = Sn();
      if (r.status !== bn) {
        return;
      }
      E(wn);
      const i = ((e = r.station) == null ? undefined : e.musicFrequency) || 0;
      const a = i > 0 && r.segmentsSinceLastMusic + 1 >= i;
      const o = !!r._pendingSongComment;
      r._pendingSongComment = false;
      const s = (r._talkCount || 0) === 0;
      r._talkCount = (r._talkCount || 0) + 1;
      console.log("[AIRadio] broadcastLoop: type=talk, musicFreq=%d, sinceLastMusic=%d, endWithSong=%s, commentLastSong=%s, isFirstTalk=%s", i, r.segmentsSinceLastMusic, a, o, s);
      const l = await V.current("talk", {
        commentLastSong: o,
        endWithSong: a,
        isFirstTalk: s
      });
      if (r.status === mn) {
        return;
      }
      E(bn);
      const c = () => {
        var e;
        var t;
        if (r.status !== bn) {
          return;
        }
        const n = (e = r.station) == null ? undefined : e.segmentInterval;
        if (n === 0) {
          if ((t = ee.current) != null) {
            t.call(ee);
          }
        } else {
          q((n || 45) * 1000);
        }
      };
      if (!a) {
        r.segmentsSinceLastMusic++;
        c();
        return;
      }
      let d = null;
      if ((t = r.station) == null ? undefined : t.playlistId) {
        d = B(r);
        if (d) {
          console.log("[AIRadio] 歌單選歌:", d.title, d.artist);
        } else {
          console.warn("[AIRadio] 歌單為空或無可用歌曲");
        }
      } else {
        const e = (l == null ? undefined : l.songQuery) || L(r, l);
        if (e) {
          if (l == null ? undefined : l.songQuery) {
            console.log("[AIRadio] 偵測到點歌:", e);
          } else {
            console.warn("[AIRadio] 未偵測到 [SONG:]，使用保底搜歌:", e);
          }
          d = await M(r, l, e);
        }
      }
      if (d && r.status !== mn) {
        r.lastSong = d;
        r.segmentsSinceLastMusic = 0;
        E(yn);
        const e = Math.max((d.duration || 0) + 30000, 300000);
        if (r._musicTimeout) {
          clearTimeout(r._musicTimeout);
        }
        r._musicTimeout = setTimeout(() => {
          var e;
          if (r.status === yn) {
            console.warn("[AIRadio] 播歌超時，自動恢復廣播");
            if ((e = te.current) != null) {
              e.call(te);
            }
          }
        }, e);
        if ((n = A.current) != null) {
          n.call(A, d);
        }
        return;
      }
      console.log("[AIRadio] 播歌失敗，下一段繼續嘗試");
      c();
    }, [E, q, B, L, M]);
    const ee = e.useRef(Z);
    e.useEffect(() => {
      ee.current = Z;
    }, [Z]);
    const te = e.useRef(null);
    e.useEffect(() => {
      const e = () => {
        var e;
        const t = Sn();
        if (t._nextBroadcastAt && Date.now() >= t._nextBroadcastAt) {
          console.log("[AIRadio] Web Worker 心跳補救觸發 broadcastLoop");
          t._nextBroadcastAt = 0;
          if (t.timer) {
            clearTimeout(t.timer);
            t.timer = null;
          }
          if ((e = ee.current) != null) {
            e.call(ee);
          }
        }
      };
      window.addEventListener("bg-heartbeat", e);
      return () => window.removeEventListener("bg-heartbeat", e);
    }, []);
    const ne = e.useCallback(async e => {
      var t;
      var n;
      var r;
      const i = Sn();
      if (((t = i.station) == null ? undefined : t.id) === e.id && i.status !== mn) {
        v(i.station);
        x([...i.segments]);
        p(i.status);
        if (i.status === vn) {
          E(bn);
          if ((n = ee.current) != null) {
            n.call(ee);
          }
        }
        return;
      }
      try {
        if (i.timer) {
          clearTimeout(i.timer);
        }
        if (i.abortController) {
          i.abortController.abort();
        }
        i.prefetchPromise = null;
        i.prefetchSegmentType = null;
        i.prefetchOpts = null;
        i._pendingSongComment = false;
        i._talkCount = 0;
        i.station = e;
        i.segments = [];
        i.conversationHistory = [];
        i.segmentsSinceLastMusic = 0;
        i.lastSong = null;
        i.segmentId = 0;
        i._playedSongIds = new Set();
        i._jailbreakCache = null;
        v(e);
        x([]);
        await W(e);
        E(bn);
        T(i, null);
        E(wn);
        await V.current("opening");
        if (i.status === mn) {
          return;
        }
        E(bn);
        const t = e.segmentInterval;
        if (t === 0) {
          if ((r = ee.current) != null) {
            r.call(ee);
          }
        } else {
          q((t || 45) * 1000);
        }
      } catch (a) {
        console.error("[AIRadio] startBroadcast 失敗:", a);
        E(mn);
        v(null);
      }
    }, [W, E, T, q]);
    const re = e.useCallback(() => {
      const e = Sn();
      if (e.ttsAudio && !e.ttsAudio.paused) {
        e.ttsAudio.pause();
      }
      const t = window.__radioAudio;
      if (t && t.__ttsMode && !t.paused) {
        t.__userPaused = true;
        t.pause();
      }
    }, []);
    const ie = e.useCallback(() => {
      const e = Sn();
      if (e.timer) {
        clearTimeout(e.timer);
      }
      if (e._musicTimeout) {
        clearTimeout(e._musicTimeout);
        e._musicTimeout = null;
      }
      e._nextBroadcastAt = 0;
      if (e.abortController) {
        e.abortController.abort();
      }
      re();
      kn();
      e.prefetchPromise = null;
      e.prefetchSegmentType = null;
      e.prefetchOpts = null;
      e._pendingSongComment = false;
      e._talkCount = 0;
      e.status = mn;
      e.station = null;
      E(mn);
      v(null);
      m(null);
    }, [E]);
    const ae = e.useCallback(() => {
      const e = Sn();
      const t = e.status === yn;
      const n = !!e._ttsResolve;
      if (e.timer) {
        clearTimeout(e.timer);
      }
      e._nextBroadcastAt = 0;
      re();
      if (t) {
        e._pausedDuringMusic = true;
        const t = window.__radioAudio;
        if (t && !t.paused) {
          t.__userPaused = true;
          t.pause();
        }
      }
      kn(!n);
      E(vn);
    }, [E]);
    const oe = e.useCallback(() => {
      var e;
      const t = Sn();
      if (t._pausedDuringMusic) {
        t._pausedDuringMusic = false;
        E(yn);
        const e = window.__radioAudio;
        if (e && e.paused && e.src) {
          e.play().catch(() => {});
        }
        return;
      }
      E(bn);
      const n = window.__radioAudio;
      const r = n && n.__ttsMode && n.paused && n.src;
      const i = t.ttsAudio && t.ttsAudio.paused && t.ttsAudio.src;
      if (t._ttsResolve && (r || i)) {
        if (r) {
          n.play().catch(() => {});
        } else {
          t.ttsAudio.play().catch(() => {});
        }
      } else if (!t._ttsResolve && (e = ee.current) != null) {
        e.call(ee);
      }
    }, [E]);
    const se = e.useCallback(async () => {
      var e;
      var t;
      const n = Sn();
      if (n._musicTimeout) {
        clearTimeout(n._musicTimeout);
        n._musicTimeout = null;
      }
      if (n.status !== yn) {
        return;
      }
      n._pendingSongComment = true;
      E(bn);
      const r = (e = n.station) == null ? undefined : e.segmentInterval;
      if (r === 0) {
        if ((t = ee.current) != null) {
          t.call(ee);
        }
      } else {
        q((r || 45) * 1000);
      }
    }, [E, q]);
    e.useEffect(() => {
      te.current = se;
    }, [se]);
    const le = e.useCallback(e => {
      const t = Sn();
      if (t.station) {
        t.station = {
          ...t.station,
          ...e
        };
        t._jailbreakCache = null;
        v({
          ...t.station
        });
      }
    }, []);
    const ce = e.useCallback(async (e = {}) => {
      var t;
      var n;
      var r;
      var i;
      var a;
      var s;
      const l = Sn();
      const c = (l.segments || []).filter(e => (e == null ? undefined : e.text) && String(e.text).trim());
      if (!c.length) {
        return {
          ok: false,
          reason: "empty"
        };
      }
      const g = e.format === "wav-merged" ? "wav-merged" : "zip-segments";
      const p = Number(e.maxBytes) > 0 ? Number(e.maxBytes) : 83886080;
      const f = await o.get("apiSettings");
      if (!(f == null ? undefined : f.minimaxApiKey) && !(f == null ? undefined : f.elevenlabsApiKey) && !(f == null ? undefined : f.sovitsServerUrl)) {
        return {
          ok: false,
          reason: "no-api-key"
        };
      }
      const x = String(((t = l.station) == null ? undefined : t.name) || "ai_radio").replace(/[\\/:*?"<>|\s]+/g, "_").replace(/^_+|_+$/g, "") || "ai_radio";
      const h = new Date().toISOString().slice(0, 10);
      const m = new Y();
      const b = [];
      const v = [];
      let y = 0;
      let w = 0;
      let j = 32000;
      let k = 1;
      l.exportInProgress = true;
      l.exportProgress = 0;
      if ((n = l.onExportInProgressChange) != null) {
        n.call(l, true);
      }
      if ((r = l.onExportProgressChange) != null) {
        r.call(l, 0);
      }
      try {
        for (let n = 0; n < c.length; n++) {
          const e = c[n];
          const t = String(e.text || "").trim();
          const r = String(e.speakerName || "Host").trim() || "Host";
          b.push(`${r}: ${t}`);
          let o = e.audioBlob || null;
          if (!o) {
            const n = ((i = l.voiceSettings) == null ? undefined : i[e.speakerId]) || {};
            let a = n.voiceLanguage || "auto";
            if (a === "auto" && t) {
              if (/[\u3040-\u30ff]/.test(t)) {
                a = "ja";
              } else if (/[\uac00-\ud7af]/.test(t)) {
                a = "ko";
              } else if (/[\u4e00-\u9fff]/.test(t)) {
                a = "zh-CN";
              } else if (/[a-zA-Z]/.test(t)) {
                a = "en";
              }
            }
            const s = {
              apiSettings: f,
              voiceProvider: n.voiceProvider || "minimax",
              voiceId: n.voiceId,
              sovitsRefText: n.sovitsRefText,
              sovitsGptPath: n.sovitsGptPath,
              sovitsSovitsPath: n.sovitsSovitsPath,
              sovitsApiVersion: n.sovitsApiVersion || "v2",
              sovitsGsviVoice: n.sovitsApiVersion === "gsvi" ? n.voiceId : undefined,
              sovitsGsviModel: n.sovitsGsviModel,
              sovitsGsviLang: n.sovitsGsviLang,
              sovitsGsviEmotion: n.sovitsGsviEmotion,
              language: a,
              speed: n.voiceSpeed || 1
            };
            let c = null;
            for (let e = 0; e < 2; e++) {
              try {
                c = await d(t, s);
              } catch (S) {
                c = null;
              }
              if (c == null ? undefined : c.audioBlob) {
                break;
              }
              if (e === 0) {
                await new Promise(e => setTimeout(e, 300));
              }
            }
            o = (c == null ? undefined : c.audioBlob) || null;
            if (!o) {
              console.warn("[AIRadio] 下載：TTS 失敗，跳過此段", r, t.slice(0, 30));
            }
          }
          if (o) {
            const e = (o.type || "").includes("wav") ? "wav" : "mp3";
            const t = r.replace(/[\\/:*?"<>|\s]+/g, "_").replace(/^_+|_+$/g, "") || "host";
            const i = String(n + 1).padStart(3, "0");
            y += o.size || 0;
            if (y > p) {
              throw new Error("size-limit");
            }
            if (g === "zip-segments") {
              m.file(`${i}_${t}.${e}`, o);
            } else {
              const e = window.AudioContext || window.webkitAudioContext;
              if (!e) {
                throw new Error("audio-context-unavailable");
              }
              const t = await o.arrayBuffer();
              const n = new e();
              const r = await n.decodeAudioData(t);
              await n.close();
              v.push(r);
              j = r.sampleRate || j;
              k = Math.max(k, r.numberOfChannels || 1);
              w += r.length || 0;
              if (w / j > 5400) {
                throw new Error("duration-limit");
              }
            }
          }
          const s = Math.round((n + 1) / c.length * 100);
          l.exportProgress = s;
          if ((a = l.onExportProgressChange) != null) {
            a.call(l, s);
          }
        }
        let e;
        let t;
        m.file("transcript.txt", b.join("\n\n"));
        if (g === "zip-segments") {
          e = await m.generateAsync({
            type: "blob"
          });
          t = `${x}_${h}_voices.zip`;
        } else {
          if (!v.length) {
            throw new Error("empty");
          }
          const n = v.reduce((e, t) => e + t.length, 0);
          const r = new (window.AudioContext || window.webkitAudioContext)();
          const i = r.createBuffer(k, n, j);
          let a = 0;
          for (const e of v) {
            for (let t = 0; t < k; t++) {
              const n = t < e.numberOfChannels ? t : 0;
              i.getChannelData(t).set(e.getChannelData(n), a);
            }
            a += e.length;
          }
          e = function (e) {
            const t = e.numberOfChannels;
            const n = e.sampleRate;
            const r = t * 2;
            const i = e.length * r;
            const a = 44 + i;
            const o = new ArrayBuffer(a);
            const s = new DataView(o);
            const l = (e, t) => {
              for (let n = 0; n < t.length; n++) {
                s.setUint8(e + n, t.charCodeAt(n));
              }
            };
            l(0, "RIFF");
            s.setUint32(4, a - 8, true);
            l(8, "WAVE");
            l(12, "fmt ");
            s.setUint32(16, 16, true);
            s.setUint16(20, 1, true);
            s.setUint16(22, t, true);
            s.setUint32(24, n, true);
            s.setUint32(28, n * r, true);
            s.setUint16(32, r, true);
            s.setUint16(34, 16, true);
            l(36, "data");
            s.setUint32(40, i, true);
            let c = 44;
            for (let d = 0; d < e.length; d++) {
              for (let n = 0; n < t; n++) {
                const t = Math.max(-1, Math.min(1, e.getChannelData(n)[d]));
                s.setInt16(c, t < 0 ? t * 32768 : t * 32767, true);
                c += 2;
              }
            }
            return new Blob([o], {
              type: "audio/wav"
            });
          }(i);
          await r.close();
          if ((e.size || 0) > p) {
            throw new Error("size-limit");
          }
          t = `${x}_${h}_full.wav`;
        }
        await u(e, t);
        return {
          ok: true
        };
      } catch (C) {
        console.error("[AIRadio] 下載全部語音失敗:", C);
        if ((C == null ? undefined : C.message) === "size-limit") {
          return {
            ok: false,
            reason: "size-limit"
          };
        } else if ((C == null ? undefined : C.message) === "duration-limit") {
          return {
            ok: false,
            reason: "duration-limit"
          };
        } else if ((C == null ? undefined : C.message) === "audio-context-unavailable") {
          return {
            ok: false,
            reason: "audio-context-unavailable"
          };
        } else {
          return {
            ok: false,
            reason: "unknown"
          };
        }
      } finally {
        l.exportInProgress = false;
        if ((s = l.onExportInProgressChange) != null) {
          s.call(l, false);
        }
      }
    }, []);
    return {
      status: g,
      segments: f,
      currentSegment: h,
      station: b,
      currentSong: y,
      ttsPlaying: S,
      isActive: g !== mn,
      startBroadcast: ne,
      stopBroadcast: ie,
      pauseBroadcast: ae,
      resumeBroadcast: oe,
      onSongEnded: se,
      updateStationConfig: le,
      downloadAllVoices: ce,
      exportProgress: N,
      exportInProgress: _
    };
  }({
    onPlaySong: e.useCallback(async e => {
      bt(true);
      if (We.current) {
        await We.current(e, {
          skipItemCheck: true,
          autoPlay: true
        });
        const n = window.__radioAudio;
        if (!n || String(n.__currentSongId) !== String(e.id)) {
          console.warn("[AIRadio] 播歌失敗（URL 取得失敗），自動恢復廣播");
          const e = window.__aiRadioState;
          if (e && e.status === "music-playing" && !window.__radioSleepStopped && typeof window.__radioPlayNextFn == "function") {
            try {
              window.__radioPlayNextFn();
            } catch (t) {}
          }
        }
      }
    }, []),
    characters: _,
    userId: P
  });
  const [Ge, Oe] = e.useState("zip-segments");
  const [He, $e] = e.useState(false);
  const [Ve, qe] = e.useState(() => {
    const e = Number(localStorage.getItem("radioSleepDeadlineMs") || 0);
    if (Number.isFinite(e)) {
      return e;
    } else {
      return 0;
    }
  });
  const [Ye, Je] = e.useState(() => {
    const e = Number(localStorage.getItem("radioSleepDeadlineMs") || 0);
    if (e && Number.isFinite(e)) {
      return Math.max(0, Math.floor((e - Date.now()) / 1000));
    } else {
      return 0;
    }
  });
  const [Ke, Qe] = e.useState(false);
  const Xe = e.useCallback(() => {
    window.__radioSleepStopped = true;
    const e = window.__radioAudio;
    if (e) {
      e.__userPaused = true;
      e.__skipPauseBroadcast = true;
      e.pause();
      setTimeout(() => {
        e.__skipPauseBroadcast = false;
      }, 500);
    }
    bt(false);
    if (window.__aiRadioState && window.__aiRadioState.status !== "idle") {
      Fe.stopBroadcast();
    }
    qe(0);
    Je(0);
    Qe(false);
    try {
      localStorage.removeItem("radioSleepDeadlineMs");
    } catch (t) {}
  }, [Fe]);
  e.useEffect(() => {
    if (!Ve || Ve <= Date.now()) {
      if (Ve) {
        Xe();
      }
      return;
    }
    const e = setInterval(() => {
      const e = Math.max(0, Math.floor((Ve - Date.now()) / 1000));
      Je(e);
      if (e <= 0) {
        Xe();
      }
    }, 1000);
    return () => clearInterval(e);
  }, [Ve, Xe]);
  e.useEffect(() => {
    const e = () => {
      const e = Number(localStorage.getItem("radioSleepDeadlineMs") || 0);
      if (e && e <= Date.now()) {
        Xe();
      }
    };
    window.addEventListener("bg-heartbeat", e);
    return () => window.removeEventListener("bg-heartbeat", e);
  }, [Xe]);
  const Ze = e.useCallback(e => {
    if (!e || e <= 0) {
      qe(0);
      Je(0);
      try {
        localStorage.removeItem("radioSleepDeadlineMs");
      } catch (n) {}
      return;
    }
    const t = Date.now() + e * 60 * 1000;
    qe(t);
    Je(e * 60);
    try {
      localStorage.setItem("radioSleepDeadlineMs", String(t));
    } catch (n) {}
  }, []);
  const et = e.useRef("");
  e.useEffect(() => {
    var e;
    var t;
    if (!Fe.isActive || !((e = Fe.station) == null ? undefined : e.id)) {
      return;
    }
    const n = Number(((t = Fe.station) == null ? undefined : t.sleepTimerMinutes) || 0);
    const r = `${Fe.station.id}:${n}`;
    if (et.current !== r) {
      et.current = r;
      Ze(n > 0 ? n : 0);
    }
  }, [Fe.isActive, (n = Fe.station) == null ? undefined : n.id, (r = Fe.station) == null ? undefined : r.sleepTimerMinutes, Ze]);
  const tt = e.useCallback(async e => {
    const t = e || Ge;
    const n = await Fe.downloadAllVoices({
      format: t,
      maxBytes: t === "wav-merged" ? 52428800 : 524288000
    });
    if (n == null ? undefined : n.ok) {
      $e(false);
      alert(R("aiRadioDownloadDone") || "已開始下載");
    } else if ((n == null ? undefined : n.reason) === "empty") {
      alert(R("aiRadioNoSegmentsToDownload") || "目前沒有可下載的語音內容");
    } else if ((n == null ? undefined : n.reason) === "size-limit" || (n == null ? undefined : n.reason) === "duration-limit") {
      alert(R("aiRadioDownloadTooLarge") || "內容過大，請改用分段 ZIP 或縮短節目長度");
    } else {
      alert(R("aiRadioDownloadFailed") || "下載失敗，請稍後再試");
    }
  }, [Fe, Ge, R]);
  e.useEffect(() => {
    ee(o.get).then(je);
  }, []);
  e.useEffect(() => {
    let e = false;
    const t = async () => {
      try {
        const t = await l.getAll();
        if (!e) {
          Ie(Array.isArray(t) ? t : []);
        }
      } catch (t) {
        console.warn("[Radio] 載入世界書失敗:", t == null ? undefined : t.message);
      }
    };
    t();
    if (fe) {
      t();
    }
    return () => {
      e = true;
    };
  }, [fe]);
  const nt = e.useCallback(async e => {
    const t = await te(o.get, o.set, e);
    je(t);
  }, []);
  const [rt, it] = e.useState(null);
  const at = e.useRef(null);
  e.useEffect(() => {
    const e = at.current;
    if (!e) {
      return;
    }
    e.scrollLeft = 0;
    requestAnimationFrame(() => {
      if (at.current) {
        at.current.scrollLeft = 0;
      }
    });
    const t = setTimeout(() => {
      if (at.current) {
        at.current.scrollLeft = 0;
      }
    }, 100);
    return () => clearTimeout(t);
  }, [we]);
  const ot = e.useRef(null);
  const st = e.useRef(false);
  const lt = e.useRef(null);
  const ct = e.useCallback((e, t) => {
    st.current = false;
    if (t.touches) {
      lt.current = {
        x: t.touches[0].clientX,
        y: t.touches[0].clientY
      };
    } else {
      lt.current = {
        x: t.clientX,
        y: t.clientY
      };
    }
    ot.current = setTimeout(() => {
      st.current = true;
      it(e);
      if (navigator.vibrate) {
        navigator.vibrate(30);
      }
    }, 500);
  }, []);
  const dt = e.useCallback(() => {
    if (ot.current) {
      clearTimeout(ot.current);
    }
    lt.current = null;
  }, []);
  const ut = e.useCallback(e => {
    if (!lt.current || !ot.current) {
      return;
    }
    const t = e.touches ? {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    } : {
      x: e.clientX,
      y: e.clientY
    };
    const n = t.x - lt.current.x;
    const r = t.y - lt.current.y;
    if (n * n + r * r > 100) {
      clearTimeout(ot.current);
      ot.current = null;
    }
  }, []);
  const gt = e.useCallback(async e => {
    var t;
    if (((t = Fe.station) == null ? undefined : t.id) === e && Fe.isActive) {
      Fe.stopBroadcast();
    }
    const n = await ne(o.get, o.set, e);
    je(n);
    it(null);
  }, [Fe]);
  const [pt, ft] = e.useState(() => {
    const e = window.__aiRadioState;
    if (e && e.status !== "idle") {
      return "player";
    }
    const t = window.__radioAudio;
    if (t && !t.paused) {
      return "player";
    } else {
      return localStorage.getItem("radioCurrentView") || "home";
    }
  });
  const [xt, ht] = e.useState("");
  const [mt, bt] = e.useState(() => {
    const e = window.__radioAudio;
    return !!e && !e.paused;
  });
  const vt = A();
  const [yt, wt] = e.useState(false);
  const [jt, kt] = e.useState(null);
  const [St, Ct] = e.useState(() => localStorage.getItem("radioRepeatMode") || "list");
  const It = e.useRef(St);
  e.useEffect(() => {
    It.current = St;
  }, [St]);
  const [Nt, Rt] = e.useState(() => {
    try {
      const e = window.__radioAudio;
      const t = e == null ? undefined : e.__currentPlaylistIds;
      if ((t == null ? undefined : t.length) > 0) {
        const e = [];
        for (const n of t) {
          const t = localStorage.getItem(`radioPlaylist_${n}`);
          if (t) {
            e.push(...JSON.parse(t));
          }
        }
        if (e.length > 0) {
          return e;
        }
      }
    } catch (e) {}
    return Dn;
  });
  const [_t, zt] = m("dynamicIslandStyle", "capsule");
  const [Pt, At] = e.useState(() => {
    const e = window.__aiRadioState;
    if (e && e.status !== "idle" && e.station) {
      return {
        ...e.station,
        type: "ai-radio",
        cover: e.station.coverImage || ""
      };
    }
    const t = window.__radioAudio;
    if (t && t.__songInfo && t.__currentSongId && t.src) {
      const e = t.__songInfo;
      return {
        id: t.__currentSongId,
        title: e.title,
        name: e.title,
        artist: e.artist,
        artists: e.artist,
        cover: e.cover || "",
        type: e.type || "song"
      };
    }
    try {
      const e = localStorage.getItem("radioCurrentItem");
      if (e) {
        const t = JSON.parse(e);
        if (t) {
          return t;
        }
      }
    } catch (n) {}
    return Dn[0];
  });
  const [Tt, Et] = e.useState(false);
  const [Lt, Mt] = e.useState(() => I().user);
  const [Bt, Ut] = e.useState(false);
  const [Dt, Wt] = e.useState("");
  const [Ft, Gt] = e.useState("");
  const [Ot, Ht] = e.useState(0);
  const $t = e.useRef(null);
  const Vt = e.useRef(null);
  const qt = e.useRef(0);
  const Yt = e.useRef(null);
  const Jt = e.useCallback(async (e = false) => {
    const t = e === true;
    try {
      if (!t) {
        Et(false);
        Ut(true);
        qt.current = 0;
      }
      Gt("waiting");
      Wt("");
      Ht(0);
      if ($t.current) {
        clearInterval($t.current);
        $t.current = null;
      }
      if (Vt.current) {
        clearInterval(Vt.current);
        Vt.current = null;
      }
      const e = await T();
      console.log("[Radio] QR unikey:", e);
      if (!e) {
        Gt("expired");
        return;
      }
      Yt.current = e;
      const r = E(e);
      try {
        const e = await De.toDataURL(r, {
          width: 200,
          margin: 1
        });
        Wt(e);
      } catch (n) {
        console.warn("[Radio] QR 生成失敗:", n);
        Gt("expired");
        return;
      }
      const i = 300;
      const a = Date.now();
      Ht(i);
      Vt.current = setInterval(() => {
        const e = Math.floor((Date.now() - a) / 1000);
        const t = Math.max(0, i - e);
        Ht(t);
        if (t <= 0) {
          clearInterval(Vt.current);
          Vt.current = null;
        }
      }, 1000);
      if ($t.current) {
        clearInterval($t.current);
      }
      let o = false;
      $t.current = setInterval(async () => {
        var t;
        var r;
        var i;
        if (!o) {
          o = true;
          try {
            const o = await L(e);
            const s = o.code;
            if (s !== 801) {
              console.log("[Radio] QR status code:", s, "full result:", JSON.stringify(o).substring(0, 500));
            }
            if (s === 802) {
              Gt("scanned");
            } else if (s === 803 || s === 200 || o.cookie && o.cookie.includes("MUSIC_U")) {
              clearInterval($t.current);
              $t.current = null;
              if (Vt.current) {
                clearInterval(Vt.current);
                Vt.current = null;
              }
              Gt("success");
              const e = o.cookie || ((t = o.data) == null ? undefined : t.cookie) || "";
              if (e) {
                M(e);
                console.log("[Radio] 已保存 cookie, 長度:", e.length, "含 MUSIC_U:", e.includes("MUSIC_U"));
              }
              try {
                const t = await B();
                console.log("[Radio] loginStatus response:", JSON.stringify(t).substring(0, 500));
                const n = ((r = t == null ? undefined : t.data) == null ? undefined : r.profile) || (t == null ? undefined : t.profile) || null;
                const a = ((i = t == null ? undefined : t.data) == null ? undefined : i.account) || (t == null ? undefined : t.account) || null;
                if (n) {
                  M(e || I().cookie, n);
                  Mt(n);
                } else if (a) {
                  const t = {
                    userId: a.id,
                    nickname: a.userName || `用戶${a.id}`,
                    vipType: a.vipType || 0
                  };
                  M(e || I().cookie, t);
                  Mt(t);
                } else {
                  console.warn("[Radio] loginStatus 未取得 profile/account:", t);
                }
              } catch (n) {
                console.warn("[Radio] getLoginStatus 失敗:", n);
              }
              setTimeout(() => Ut(false), 1500);
            } else if (s === 800) {
              clearInterval($t.current);
              $t.current = null;
              if (Vt.current) {
                clearInterval(Vt.current);
                Vt.current = null;
              }
              Ht(0);
              const e = Math.floor((Date.now() - a) / 1000);
              if (e < 15) {
                console.warn("[Radio] QR 秒過期 (" + e + "秒)，跳過自動刷新");
                Gt("expired");
              } else if (qt.current < 3) {
                qt.current++;
                console.log("[Radio] QR 過期，自動刷新 (第", qt.current, "次)");
                Jt(true);
              } else {
                Gt("expired");
              }
            } else if (s !== 801 && s !== 802) {
              console.warn("[Radio] QR 未知狀態碼:", s, o.message || "");
              clearInterval($t.current);
              $t.current = null;
              if (Vt.current) {
                clearInterval(Vt.current);
                Vt.current = null;
              }
              Gt("expired");
            }
          } catch (n) {
            console.warn("[Radio] QR poll error:", n);
          } finally {
            o = false;
          }
        }
      }, 3000);
    } catch (n) {
      console.warn("[Radio] QR 登錄失敗:", n);
      Gt("expired");
    }
  }, []);
  const Kt = e.useCallback(() => {
    U();
    Mt(null);
  }, []);
  e.useEffect(() => {
    const e = async () => {
      var e;
      var t;
      var n;
      if (document.visibilityState !== "visible") {
        return;
      }
      const r = Yt.current;
      if (r && $t.current) {
        try {
          const a = await L(r);
          const o = a.code;
          console.log("[Radio] QR 回前台補查:", o);
          if (o === 802) {
            Gt("scanned");
          } else if (o === 803 || o === 200 || a.cookie && a.cookie.includes("MUSIC_U")) {
            if ($t.current) {
              clearInterval($t.current);
              $t.current = null;
            }
            if (Vt.current) {
              clearInterval(Vt.current);
              Vt.current = null;
            }
            Gt("success");
            const r = a.cookie || ((e = a.data) == null ? undefined : e.cookie) || "";
            if (r) {
              M(r);
            }
            try {
              const e = await B();
              const i = ((t = e == null ? undefined : e.data) == null ? undefined : t.profile) || (e == null ? undefined : e.profile) || null;
              const a = ((n = e == null ? undefined : e.data) == null ? undefined : n.account) || (e == null ? undefined : e.account) || null;
              if (i) {
                M(r || I().cookie, i);
                Mt(i);
              } else if (a) {
                const e = {
                  userId: a.id,
                  nickname: a.userName || `用戶${a.id}`,
                  vipType: a.vipType || 0
                };
                M(r || I().cookie, e);
                Mt(e);
              }
            } catch (i) {}
            setTimeout(() => Ut(false), 1500);
          } else if (o === 800) {
            if ($t.current) {
              clearInterval($t.current);
              $t.current = null;
            }
            if (Vt.current) {
              clearInterval(Vt.current);
              Vt.current = null;
            }
            if (qt.current < 3) {
              qt.current++;
              Jt(true);
            } else {
              Gt("expired");
            }
          }
        } catch (a) {
          console.warn("[Radio] QR visibility check error:", a);
        }
      }
    };
    document.addEventListener("visibilitychange", e);
    return () => {
      document.removeEventListener("visibilitychange", e);
      if ($t.current) {
        clearInterval($t.current);
      }
      if (Vt.current) {
        clearInterval(Vt.current);
      }
      Yt.current = null;
    };
  }, []);
  const Qt = typeof navigator != "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const [Xt, Zt] = e.useState(null);
  const [en, tn] = e.useState(null);
  const [nn, rn] = e.useState(null);
  const [an, on] = e.useState(null);
  const [sn, ln] = e.useState(null);
  const [cn, dn] = e.useState(false);
  const un = e => `radio_bg_${e}`;
  e.useEffect(() => {
    const e = ["customBg", "songCoverBg", "radioBg", "homeBg"];
    const t = {
      customBg: Zt,
      songCoverBg: tn,
      radioBg: rn,
      homeBg: on
    };
    e.forEach(async e => {
      try {
        const n = await b.ttsAudio.get(un(e));
        if (n == null ? undefined : n.audioBase64) {
          t[e](n.audioBase64);
        }
      } catch {}
    });
    e.forEach(async e => {
      const n = "radio" + e[0].toUpperCase() + e.slice(1);
      try {
        const r = localStorage.getItem(n);
        if (r) {
          await b.ttsAudio.put({
            msgId: un(e),
            audioBase64: r,
            audioDuration: 0,
            audioType: "image/bg"
          });
          localStorage.removeItem(n);
          t[e](r);
        }
      } catch {}
    });
  }, []);
  const gn = e.useRef(null);
  const [pn, fn] = e.useState(0);
  const [hn, Cn] = e.useState(0);
  const [In, _n] = e.useState(false);
  const [En, Mn] = e.useState(null);
  const [Gn, On] = e.useState(false);
  const Hn = e.useRef(0);
  const $n = e.useRef(null);
  const Vn = e.useRef(null);
  const qn = e.useRef(true);
  e.useEffect(() => {
    qn.current = true;
    return () => {
      qn.current = false;
    };
  }, []);
  const [Yn, Jn] = e.useState([]);
  const [Kn, Qn] = e.useState(false);
  const Xn = e.useRef(null);
  const [Zn, er] = e.useState([]);
  const [tr, nr] = e.useState(-1);
  e.useEffect(() => {
    $n.current = Pt;
  }, [Pt]);
  e.useEffect(() => {
    const e = (() => {
      if (window.__radioAudio) {
        return window.__radioAudio;
      }
      const e = new Audio();
      e.preload = "auto";
      e.__songInfo = null;
      e.__currentSongId = null;
      e.__keepAlivePaused = false;
      try {
        const t = localStorage.getItem("radioCurrentPlaylistIds");
        e.__currentPlaylistIds = t ? JSON.parse(t) : null;
      } catch (n) {
        e.__currentPlaylistIds = null;
      }
      window.__radioAudio = e;
      const t = () => {
        const t = e.__songInfo;
        if (t) {
          w({
            ...t,
            ...Fn(),
            isPlaying: !e.paused,
            currentTime: e.currentTime,
            duration: e.duration || 0
          });
        }
      };
      e.addEventListener("play", () => {
        e.__userPaused = false;
        if (!e.__keepAlivePaused) {
          e.__keepAlivePaused = true;
          y();
        }
        (() => {
          if (!("mediaSession" in navigator)) {
            return;
          }
          const t = e.__songInfo;
          if (t) {
            try {
              navigator.mediaSession.metadata = new MediaMetadata({
                title: t.title || "",
                artist: t.artist || "",
                artwork: t.cover ? [{
                  src: Wn(t.cover),
                  sizes: "512x512"
                }] : []
              });
              navigator.mediaSession.setActionHandler("play", () => {
                e.__userPaused = false;
                e.play().catch(() => {});
              });
              navigator.mediaSession.setActionHandler("pause", () => {
                e.__userPaused = true;
                e.pause();
              });
              navigator.mediaSession.setActionHandler("previoustrack", () => window.dispatchEvent(new CustomEvent("dynamic-island-music-prev")));
              navigator.mediaSession.setActionHandler("nexttrack", () => window.dispatchEvent(new CustomEvent("dynamic-island-music-next")));
            } catch (n) {}
          }
        })();
        t();
      });
      e.addEventListener("pause", () => {
        if (e.__keepAlivePaused && !e.__skipPauseBroadcast) {
          e.__keepAlivePaused = false;
          g();
        }
        if (e.__skipPauseBroadcast) {
          return;
        }
        t();
        if (e.__userPaused) {
          return;
        }
        if (e.__ttsMode) {
          return;
        }
        if (e.ended) {
          return;
        }
        if (window.__radioSleepStopped) {
          return;
        }
        if (!e.src) {
          return;
        }
        if (e.__autoResumeInflight) {
          return;
        }
        e.__autoResumeInflight = true;
        const n = [600, 1500, 3500];
        let r = 0;
        const i = () => {
          if (e.__userPaused || e.__ttsMode || window.__radioSleepStopped) {
            e.__autoResumeInflight = false;
            return;
          }
          if (!e.paused) {
            e.__autoResumeInflight = false;
            return;
          }
          const t = e.play();
          if (t && typeof t.then == "function") {
            t.then(() => {
              e.__autoResumeInflight = false;
            }).catch(() => {
              r++;
              if (r < n.length) {
                setTimeout(i, n[r]);
              } else {
                e.__autoResumeInflight = false;
              }
            });
          } else {
            e.__autoResumeInflight = false;
          }
        };
        setTimeout(i, n[0]);
      });
      e.addEventListener("ended", () => {
        var r;
        var i;
        var a;
        if (window.__radioSleepStopped) {
          return;
        }
        if (e.__ttsMode) {
          return;
        }
        const o = localStorage.getItem("radioRepeatMode") || "list";
        const s = window.__aiRadioState && window.__aiRadioState.status !== "idle";
        if (o === "one" && !s) {
          e.currentTime = 0;
          e.play().catch(() => {});
          return;
        }
        e.__skipPauseBroadcast = true;
        setTimeout(() => {
          e.__skipPauseBroadcast = false;
        }, 10000);
        try {
          e.loop = true;
          e.src = Un;
          e.play().catch(() => {});
        } catch (n) {}
        window.dispatchEvent(new CustomEvent("radio-auto-next"));
        const l = () => {
          e.loop = false;
          e.pause();
          e.__skipPauseBroadcast = false;
          if (e.__keepAlivePaused) {
            e.__keepAlivePaused = false;
            g();
          }
          t();
        };
        if (s) {
          if (typeof window.__radioPlayNextFn == "function") {
            try {
              window.__radioPlayNextFn();
            } catch (d) {
              console.warn("[Radio] AI 電台 playNext 失敗:", d);
              l();
            }
          } else {
            l();
          }
          return;
        }
        const c = ((r = e.__ltPlaylistIds) == null ? undefined : r.length) > 0 && localStorage.getItem("radioListenTogether") ? e.__ltPlaylistIds : ((i = e.__currentPlaylistIds) == null ? undefined : i.length) > 0 ? e.__currentPlaylistIds : null;
        if (c) {
          try {
            const t = [];
            for (const e of c) {
              try {
                const n = localStorage.getItem(`radioPlaylist_${e}`);
                if (n) {
                  t.push(...JSON.parse(n));
                }
              } catch (n) {}
            }
            if (t.length > 0) {
              const r = String(e.__currentSongId || "");
              const i = t.findIndex(e => String(e.id) === r);
              let s;
              if (o === "shuffle") {
                if (t.length <= 1) {
                  s = 0;
                } else {
                  do {
                    s = Math.floor(Math.random() * t.length);
                  } while (s === i);
                }
              } else {
                s = (i + 1) % t.length;
              }
              const l = t[s];
              if (((a = e.__ltPlaylistIds) == null ? undefined : a.length) > 0 && localStorage.getItem("radioListenTogether")) {
                const t = `${l.title || l.name} ${l.artist || l.artists || ""}`.trim();
                window.dispatchEvent(new CustomEvent("listen-together-change-song", {
                  detail: {
                    query: t,
                    playlistIds: e.__ltPlaylistIds
                  }
                }));
              } else {
                (async () => {
                  try {
                    const r = l.name || l.title || "";
                    const i = l.artists || l.artist || "";
                    e.__songInfo = {
                      title: r,
                      artist: i,
                      cover: l.cover || "",
                      type: "song"
                    };
                    e.__currentSongId = String(l.id);
                    let a = null;
                    const o = [() => G(l.id), () => W(l.id, "netease", 320000), async () => {
                      const e = await F(r);
                      if (e == null ? undefined : e.music_url) {
                        return {
                          url: e.music_url
                        };
                      } else {
                        return null;
                      }
                    }];
                    for (const e of o) {
                      try {
                        const t = await Promise.race([e(), new Promise((e, t) => setTimeout(() => t("timeout"), 6000))]);
                        if (t == null ? undefined : t.url) {
                          a = t.url;
                          break;
                        }
                      } catch (n) {}
                    }
                    if (a) {
                      t = a;
                      e.loop = false;
                      e.__skipPauseBroadcast = true;
                      e.src = t;
                      e.play().catch(() => {});
                      setTimeout(() => {
                        e.__skipPauseBroadcast = false;
                      }, 3000);
                      w({
                        ...e.__songInfo,
                        ...Fn(),
                        isPlaying: true,
                        currentTime: 0,
                        duration: 0
                      });
                      const o = {
                        ...l,
                        title: r,
                        artist: i,
                        type: "song",
                        cover: l.cover || ""
                      };
                      try {
                        localStorage.setItem("radioCurrentItem", JSON.stringify(o));
                      } catch (n) {}
                      window.dispatchEvent(new CustomEvent("radio-playlist-song-loaded", {
                        detail: o
                      }));
                      try {
                        const e = await H(l.id);
                        if (e == null ? undefined : e.lrc) {
                          window.__radioLyrics = $(e.lrc);
                        }
                      } catch (n) {}
                      console.log("[Radio] 歌單自動下一首:", r);
                    } else {
                      console.warn("[Radio] 歌單歌曲無播放地址，跳過:", r);
                      e.__currentSongId = String(l.id);
                      if (typeof window.__radioPlayNextFn == "function") {
                        window.__radioPlayNextFn();
                      }
                    }
                  } catch (r) {
                    console.warn("[Radio] 歌單自動播放失敗:", r);
                  }
                  var t;
                })();
              }
              return;
            }
          } catch (n) {}
        }
        if (typeof window.__radioPlayNextFn == "function") {
          try {
            window.__radioPlayNextFn();
          } catch (d) {
            console.warn("[Radio] 全局 playNext 失敗:", d);
            l();
          }
        } else {
          l();
        }
      });
      e.addEventListener("timeupdate", () => {
        window.dispatchEvent(new CustomEvent("radio-time-update", {
          detail: {
            currentTime: e.currentTime,
            duration: e.duration || 0
          }
        }));
      });
      window.addEventListener("dynamic-island-music-toggle", () => {
        if (e.paused) {
          e.__userPaused = false;
          if (e.src) {
            e.play().catch(() => {});
          }
        } else {
          e.__userPaused = true;
          e.pause();
        }
      });
      window.addEventListener("bg-heartbeat", () => {
        var t;
        var r;
        const i = Number(localStorage.getItem("radioSleepDeadlineMs") || 0);
        if (i && !(i > Date.now())) {
          window.__radioSleepStopped = true;
          e.__userPaused = true;
          e.__skipPauseBroadcast = true;
          e.pause();
          setTimeout(() => {
            e.__skipPauseBroadcast = false;
          }, 500);
          try {
            localStorage.removeItem("radioSleepDeadlineMs");
          } catch (n) {}
          try {
            localStorage.setItem("radioIsPlaying", "false");
          } catch (n) {}
          if (window.__aiRadioState && window.__aiRadioState.status !== "idle") {
            const e = window.__aiRadioState;
            if (e.timer) {
              clearTimeout(e.timer);
            }
            if (e._musicTimeout) {
              clearTimeout(e._musicTimeout);
              e._musicTimeout = null;
            }
            e._nextBroadcastAt = 0;
            e.status = "idle";
            e.station = null;
            if ((t = e.onStatusChange) != null) {
              t.call(e, "idle");
            }
            if ((r = e.onCurrentSongChange) != null) {
              r.call(e, null);
            }
          }
          w({
            isPlaying: false
          });
          console.log("[Radio] 睡眠計時到期，全局停播");
        }
      });
      return e;
    })();
    gn.current = e;
    if (!e.paused && e.src) {
      bt(true);
      fn(e.currentTime);
      Cn(e.duration || 0);
      On(true);
    }
    const t = () => {
      fn(e.currentTime);
      if (!e.paused && e.currentTime > 0) {
        Mn(e => e ? null : e);
      }
    };
    const n = () => Cn(e.duration || 0);
    const r = () => {
      On(false);
    };
    const i = () => {
      _n(false);
      Mn(null);
    };
    const a = () => _n(true);
    const o = () => {
      bt(true);
      On(true);
      Mn(null);
    };
    const s = () => {
      if (!e.ended) {
        bt(false);
        On(false);
      }
    };
    const l = () => {
      if (!e.paused || e.readyState >= 3) {
        return;
      }
      const t = Vn.current;
      if (t && t.itemId === e.__currentSongId && Array.isArray(t.strategies) && t.strategies.length) {
        console.warn("[Radio] 當前源播放失敗，嘗試換備用源");
        _n(true);
        (async () => {
          while (t.strategies.length) {
            if (e.__currentSongId !== t.itemId) {
              return;
            }
            const r = t.strategies.shift();
            try {
              const n = await Promise.race([r.fetch(), new Promise((e, t) => setTimeout(() => t(new Error("timeout")), 8000))]);
              if (e.__currentSongId !== t.itemId) {
                return;
              }
              if (n == null ? undefined : n.url) {
                console.log("[Radio] ✓ 備用源 " + r.name + " 換源成功");
                e.loop = false;
                e.src = n.url;
                e.play().catch(() => {});
                return;
              }
            } catch (n) {
              console.warn("[Radio] ✗ 備用源 " + r.name + " 失敗:", n.message);
            }
          }
          if (e.__currentSongId === t.itemId) {
            _n(false);
            Mn("loadError");
            bt(false);
            On(false);
          }
        })();
        return;
      }
      _n(false);
      Mn("loadError");
      bt(false);
      On(false);
    };
    e.addEventListener("timeupdate", t);
    e.addEventListener("durationchange", n);
    e.addEventListener("ended", r);
    e.addEventListener("canplay", i);
    e.addEventListener("waiting", a);
    e.addEventListener("play", o);
    e.addEventListener("pause", s);
    e.addEventListener("error", l);
    return () => {
      e.removeEventListener("timeupdate", t);
      e.removeEventListener("durationchange", n);
      e.removeEventListener("ended", r);
      e.removeEventListener("canplay", i);
      e.removeEventListener("waiting", a);
      e.removeEventListener("play", o);
      e.removeEventListener("pause", s);
      e.removeEventListener("error", l);
    };
  }, []);
  e.useEffect(() => {
    const e = gn.current;
    if (e) {
      if (mt) {
        window.__radioSleepStopped = false;
        e.__userPaused = false;
        if (e.src) {
          e.play().catch(() => {});
        }
      } else {
        e.__userPaused = true;
        e.pause();
      }
    }
  }, [mt]);
  const rr = e.useCallback(async (e, {
    skipItemCheck: t,
    autoPlay: n
  } = {}) => {
    if (!e || e.type === "radio" || e.type === "ai-radio") {
      return;
    }
    const r = gn.current;
    if (!r) {
      return;
    }
    const i = n || mt;
    const a = ++Hn.current;
    const o = () => {
      var n;
      const r = a !== Hn.current;
      if (t) {
        return r;
      }
      const i = String(e == null ? undefined : e.id) !== String((n = $n.current) == null ? undefined : n.id);
      return r || i;
    };
    r.__skipPauseBroadcast = true;
    r.__ttsMode = false;
    if (!n) {
      r.pause();
      r.removeAttribute("src");
      r.load();
      r.loop = false;
    }
    setTimeout(() => {
      r.__skipPauseBroadcast = false;
    }, 3000);
    Mn(null);
    if (e.audioUrl) {
      if (o()) {
        return;
      }
      r.loop = false;
      r.src = e.audioUrl;
      if (i) {
        r.play().catch(() => {});
      }
      return;
    }
    if (e.source === "local") {
      _n(true);
      if ((!!e.hasCover || !e.cover) && !!vt.getUploadedCover) {
        vt.getUploadedCover(e.id).then(t => {
          if (t && !o()) {
            e.cover = t;
            At(n => n && String(n.id) === String(e.id) ? {
              ...n,
              cover: t
            } : n);
          }
        }).catch(() => {});
      }
      const t = await vt.restoreUploadedAudio(e.id);
      if (o()) {
        return;
      }
      if (t) {
        e.audioUrl = t;
        r.loop = false;
        r.src = t;
        if (i) {
          r.play().catch(() => {});
        }
        _n(false);
        return;
      } else {
        _n(false);
        Mn("urlNotFound");
        return;
      }
    }
    _n(true);
    Vn.current = null;
    try {
      let t = null;
      let n = [];
      const a = e.id;
      const l = e.title || e.name || "";
      const c = e.artist || e.artists || "";
      if (e.source === "gqb" && e.gqbPlayId) {
        console.log("[Radio] 嘗試歌曲寶:", l);
        try {
          const n = await Promise.race([D(e.gqbPlayId), new Promise((e, t) => setTimeout(() => t(new Error("timeout")), 5000))]);
          t = n == null ? undefined : n.url;
        } catch (s) {
          console.warn("[Radio] 歌曲寶失敗:", s.message);
        }
      } else {
        const r = e.source || "netease";
        const i = r !== "netease" ? [{
          name: "GD Studio (" + r + ")",
          fetch: () => W(a, r, 320000)
        }, {
          name: "千千音樂",
          fetch: async () => {
            const e = await F(l);
            if (e == null ? undefined : e.music_url) {
              return {
                url: e.music_url
              };
            } else {
              return null;
            }
          }
        }] : [{
          name: "網易雲",
          fetch: () => G(a)
        }, {
          name: "GD Studio (NetEase)",
          fetch: () => W(a, "netease", 320000)
        }, {
          name: "千千音樂",
          fetch: async () => {
            const e = await F(l);
            if (e == null ? undefined : e.music_url) {
              return {
                url: e.music_url
              };
            } else {
              return null;
            }
          }
        }, {
          name: "跨源 (KuWo)",
          fetch: () => O(l, c, "kuwo", 320000)
        }, {
          name: "跨源 (KuGou)",
          fetch: () => O(l, c, "kugou", 320000)
        }];
        for (let e = 0; e < i.length; e++) {
          const r = i[e];
          try {
            console.log("[Radio] 嘗試 " + r.name + ":", l);
            const a = await Promise.race([r.fetch(), new Promise((e, t) => setTimeout(() => t(new Error("timeout")), 8000))]);
            if (o()) {
              return;
            }
            if (a == null ? undefined : a.url) {
              t = a.url;
              console.log("[Radio] ✓ " + r.name + " 成功");
              n = i.slice(e + 1);
              break;
            }
          } catch (s) {
            console.warn("[Radio] ✗ " + r.name + " 失敗:", s.message);
            continue;
          }
        }
      }
      if (o()) {
        return;
      }
      if (t) {
        ur.current = 0;
        r.__currentSongId = String(e.id);
        r.loop = false;
        Vn.current = {
          itemId: String(e.id),
          strategies: n
        };
        r.src = t;
        if (i) {
          r.play().catch(() => {});
        }
      } else {
        console.warn("[Radio] 無法取得播放地址（疑版權/無音源）:", l);
        r.loop = false;
        Mn("noSource");
      }
    } catch (s) {
      if (o()) {
        return;
      }
      console.warn("[Radio] loadSongAudio 異常", s);
      r.loop = false;
      Mn("loadFailed");
    } finally {
      if (!o()) {
        _n(false);
      }
    }
    try {
      if (e.id) {
        let t = null;
        if (e.source === "local" || String(e.id).startsWith("local_")) {
          t = await vt.getUploadedLyric(e.id);
        } else {
          const n = await H(e.id);
          if (o()) {
            return;
          }
          t = (n == null ? undefined : n.lrc) || null;
        }
        if (o()) {
          return;
        }
        if (t) {
          const e = $(t);
          window.__radioLyrics = e;
          er(e);
          nr(-1);
        } else {
          window.__radioLyrics = [];
          er([]);
        }
      }
    } catch (s) {
      if (o()) {
        return;
      }
      console.warn("[Radio] 歌詞加載失敗:", s);
      window.__radioLyrics = [];
      er([]);
    }
  }, [mt, Mn, _n, er, nr]);
  e.useEffect(() => {
    We.current = rr;
  }, [rr]);
  e.useEffect(() => {
    if (!Zn.length) {
      return;
    }
    const e = Zn.findLastIndex(e => e.time <= pn);
    if (e !== tr) {
      nr(e);
    }
  }, [pn, Zn, tr]);
  e.useEffect(() => {
    var e;
    if (tr >= 0 && Zn[tr]) {
      window.dispatchEvent(new CustomEvent("dynamic-island-lyric", {
        detail: {
          text: Zn[tr].text,
          nextText: ((e = Zn[tr + 1]) == null ? undefined : e.text) || ""
        }
      }));
    } else {
      window.dispatchEvent(new CustomEvent("dynamic-island-lyric", {
        detail: {
          text: "",
          nextText: ""
        }
      }));
    }
  }, [tr, Zn]);
  const ir = e.useCallback(e => {
    if (!(e == null ? undefined : e.id)) {
      return;
    }
    const t = e => {
      window.__radioLyrics = e;
      er(e);
      nr(-1);
    };
    const n = () => t([]);
    if (e.source === "local" || String(e.id).startsWith("local_")) {
      vt.getUploadedLyric(e.id).then(e => {
        if (e) {
          t($(e));
        } else {
          n();
        }
      }).catch(n);
    } else {
      H(e.id).then(e => {
        if (e == null ? undefined : e.lrc) {
          t($(e.lrc));
        } else {
          n();
        }
      }).catch(n);
    }
  }, [vt, er, nr]);
  const ar = e.useRef(true);
  e.useEffect(() => {
    er([]);
    nr(-1);
    window.__radioLyrics = [];
    Mn(null);
    const e = gn.current;
    if (ar.current && e && e.src && e.__currentSongId) {
      ar.current = false;
      if (String(Pt == null ? undefined : Pt.id) !== e.__currentSongId && e.__songInfo) {
        const t = e.__songInfo;
        At({
          id: e.__currentSongId,
          title: t.title,
          name: t.title,
          artist: t.artist,
          artists: t.artist,
          cover: t.cover || "",
          type: t.type || "song",
          source: t.source
        });
        return;
      }
      if (Zn.length === 0 && (Pt == null ? undefined : Pt.id)) {
        ir(Pt);
      }
    } else {
      ar.current = false;
      if (!e || e.__currentSongId !== String(Pt == null ? undefined : Pt.id) || !e.src && e.paused) {
        if ((Pt == null ? undefined : Pt.type) !== "radio" && (Pt == null ? undefined : Pt.type) !== "ai-radio") {
          const e = gr.current;
          gr.current = false;
          rr(Pt, {
            autoPlay: e
          });
        }
      } else if (Zn.length === 0 && (Pt == null ? undefined : Pt.id)) {
        ir(Pt);
      }
    }
  }, [Pt == null ? undefined : Pt.id]);
  e.useEffect(() => {
    try {
      V().then(e => {
        try {
          if (e && Array.isArray(e) && e.length > 0) {
            const t = e.map(e => e.id).filter(Boolean);
            if (t.length > 0) {
              q(t).then(t => {
                const n = e.map(e => {
                  const n = Array.isArray(t) ? t.find(t => String(t.id) === String(e.id)) : null;
                  return {
                    ...e,
                    title: e.name,
                    artist: e.artists,
                    cover: (n == null ? undefined : n.cover) || e.cover || "",
                    type: "song"
                  };
                });
                Rt(n);
              }).catch(t => {
                console.warn("[Radio] 取封面失敗", t);
                Rt(e.map(e => ({
                  ...e,
                  title: e.name,
                  artist: e.artists,
                  type: "song"
                })));
              });
            }
          }
        } catch (t) {
          console.warn("[Radio] 處理推薦歌曲失敗", t);
        }
      }).catch(e => {
        console.warn("[Radio] 加載推薦歌曲失敗", e);
      });
    } catch (e) {
      console.warn("[Radio] 推薦歌曲致命錯誤", e);
    }
  }, []);
  const or = e.useCallback(e => {
    ht(e);
    if (Xn.current) {
      clearTimeout(Xn.current);
    }
    if (!e.trim()) {
      Jn([]);
      Qn(false);
      return;
    }
    Qn(true);
    Xn.current = setTimeout(async () => {
      const t = e => e.map(e => ({
        ...e,
        title: e.name,
        artist: e.artists,
        type: "song"
      }));
      try {
        const {
          songs: n
        } = await k(e);
        if (n.length > 0) {
          Jn(t(n));
          Qn(false);
          return;
        }
      } catch (r) {
        console.warn("[Radio] 網易雲搜索失敗，嘗試後備源", r);
      }
      const n = ["kuwo", "kugou", "baidu"];
      for (const i of n) {
        try {
          const {
            songs: n
          } = await S(e, {
            source: i
          });
          if (n.length > 0) {
            console.log("[Radio] ✓ GD Studio (" + i + ") 搜索成功");
            Jn(t(n));
            Qn(false);
            return;
          }
        } catch (r) {
          console.warn("[Radio] ✗ GD Studio (" + i + ") 搜索失敗:", r.message);
        }
      }
      Jn([]);
      Qn(false);
    }, 500);
  }, []);
  const sr = e.useRef(null);
  const lr = e.useCallback(e => {
    const t = gn.current;
    const n = sr.current;
    if (!t || !n || !hn) {
      return;
    }
    const r = n.getBoundingClientRect();
    const i = Math.max(0, Math.min(1, (e - r.left) / r.width));
    t.currentTime = i * hn;
    fn(i * hn);
  }, [hn]);
  const cr = e.useCallback(e => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    lr(e.clientX);
  }, [lr]);
  const dr = e.useCallback(e => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      lr(e.clientX);
    }
  }, [lr]);
  const ur = e.useRef(0);
  const gr = e.useRef(false);
  const pr = e.useRef(Nt);
  const fr = e.useRef(Yn);
  const xr = e.useRef(xt);
  e.useEffect(() => {
    pr.current = Nt;
  }, [Nt]);
  e.useEffect(() => {
    fr.current = Yn;
  }, [Yn]);
  e.useEffect(() => {
    xr.current = xt;
  }, [xt]);
  const hr = e.useCallback((e = 1) => {
    var t;
    const n = ((xr.current ? fr.current : pr.current) || []).filter(e => e.type === "song");
    if (!n.length) {
      return;
    }
    ur.current += 1;
    if (ur.current > n.length) {
      console.warn("[Radio] 所有歌曲都無法播放，停止");
      ur.current = 0;
      bt(false);
      return;
    }
    const r = (t = $n.current) == null ? undefined : t.id;
    const i = n.findIndex(e => String(e.id) === String(r));
    let a;
    if (It.current === "shuffle") {
      if (n.length <= 1) {
        a = 0;
      } else {
        do {
          a = Math.floor(Math.random() * n.length);
        } while (a === i);
      }
    } else {
      a = (i + e + n.length) % n.length;
    }
    gr.current = true;
    At(n[a]);
    bt(true);
  }, []);
  const mr = e.useRef(Fe);
  e.useEffect(() => {
    mr.current = Fe;
  }, [Fe]);
  const br = e.useRef(Fe.onSongEnded);
  e.useEffect(() => {
    br.current = Fe.onSongEnded;
  }, [Fe.onSongEnded]);
  e.useEffect(() => {
    window.__radioPlayNextFn = () => {
      var e;
      var t;
      const n = window.__aiRadioState;
      if (n && n.status !== "idle") {
        if ((e = br.current) != null) {
          e.call(br);
        }
        return;
      }
      const r = ((xr.current ? fr.current : pr.current) || []).filter(e => e.type === "song");
      if (!r.length) {
        return;
      }
      ur.current += 1;
      if (ur.current > r.length) {
        console.warn("[Radio] 所有歌曲都無法播放，停止");
        ur.current = 0;
        return;
      }
      const i = (t = $n.current) == null ? undefined : t.id;
      const a = r.findIndex(e => String(e.id) === String(i));
      let o;
      if (It.current === "shuffle") {
        if (r.length <= 1) {
          o = 0;
        } else {
          do {
            o = Math.floor(Math.random() * r.length);
          } while (o === a);
        }
      } else {
        o = (a + 1 + r.length) % r.length;
      }
      const s = r[o];
      $n.current = s;
      if (qn.current) {
        gr.current = true;
        At(s);
        bt(true);
      } else if (We.current) {
        We.current(s, {
          skipItemCheck: true,
          autoPlay: true
        });
      }
    };
  }, [hr]);
  e.useEffect(() => {
    try {
      if (Pt) {
        const e = {
          ...Pt
        };
        if (e.cover && e.cover.length > 500) {
          e.cover = "";
        }
        if (e.coverImage && e.coverImage.length > 500) {
          e.coverImage = "";
        }
        if (e.image && e.image.length > 500) {
          e.image = "";
        }
        localStorage.setItem("radioCurrentItem", JSON.stringify(e));
      }
      localStorage.setItem("radioCurrentView", pt);
      localStorage.setItem("radioIsPlaying", String(mt));
      localStorage.setItem("radioRepeatMode", St);
    } catch (e) {
      console.warn("[Radio] 狀態儲存失敗（容量不足）:", e.message);
    }
  }, [Pt, pt, mt, St]);
  e.useEffect(() => {
    const e = async (e, t) => {
      const n = un(e);
      try {
        if (t) {
          await b.ttsAudio.put({
            msgId: n,
            audioBase64: t,
            audioDuration: 0,
            audioType: "image/bg"
          });
        } else {
          await b.ttsAudio.delete(n);
        }
      } catch (r) {
        console.warn("[Radio] 背景圖儲存失敗:", e, r.message);
      }
    };
    e("customBg", Xt);
    e("songCoverBg", en);
    e("radioBg", nn);
    e("homeBg", an);
  }, [Xt, en, nn, an]);
  e.useEffect(() => {
    const e = {
      title: (Pt == null ? undefined : Pt.title) || (Pt == null ? undefined : Pt.name) || "",
      artist: (Pt == null ? undefined : Pt.artist) || (Pt == null ? undefined : Pt.artists) || "",
      cover: (Pt == null ? undefined : Pt.cover) || "",
      type: (Pt == null ? undefined : Pt.type) || "song",
      source: Pt == null ? undefined : Pt.source
    };
    const t = gn.current;
    if (t) {
      t.__songInfo = e;
    }
    if (Z) {
      window.__ltUserName = Z.name || "";
      window.__ltUserImage = Z.avatar || "";
    }
    const n = se.isListening && se.listenChar ? {
      listenTogether: true,
      ltCharName: String(se.listenChar.name || ""),
      ltCharImage: String(se.listenChar.image || ""),
      ltUserName: String((Z == null ? undefined : Z.name) || ""),
      ltUserImage: String((Z == null ? undefined : Z.avatar) || ""),
      ltElapsedSec: se.elapsedSec,
      ltElapsedText: String(se.elapsedText || "")
    } : {
      listenTogether: false
    };
    w({
      ...e,
      ...n,
      isPlaying: mt,
      currentTime: (t == null ? undefined : t.currentTime) || 0,
      duration: (t == null ? undefined : t.duration) || 0
    });
  }, [mt, Pt, se.isListening, se.elapsedSec]);
  e.useEffect(() => {
    const e = () => hr(1);
    const t = () => hr(-1);
    window.addEventListener("dynamic-island-music-next", e);
    window.addEventListener("dynamic-island-music-prev", t);
    return () => {
      window.removeEventListener("dynamic-island-music-next", e);
      window.removeEventListener("dynamic-island-music-prev", t);
    };
  }, [hr]);
  e.useEffect(() => {
    const e = e => {
      const t = e.detail;
      if (t) {
        At(t);
        bt(true);
      }
    };
    window.addEventListener("listen-together-song-loaded", e);
    window.addEventListener("radio-playlist-song-loaded", e);
    return () => {
      window.removeEventListener("listen-together-song-loaded", e);
      window.removeEventListener("radio-playlist-song-loaded", e);
    };
  }, []);
  const vr = xt ? Yn : Nt;
  const yr = e.useMemo(() => !Ye || Ye <= 0 ? R("radioSleepOff") || "關閉" : `${Math.floor(Ye / 60)}:${String(Ye % 60).padStart(2, "0")}`, [Ye, R]);
  const wr = e.useCallback(() => {
    console.log("[Radio] 重試載入歌曲:", (Pt == null ? undefined : Pt.title) || (Pt == null ? undefined : Pt.name));
    Mn(null);
    if (Pt) {
      rr(Pt);
    }
  }, [Pt, rr]);
  const jr = e.useCallback(async ({
    audioFile: e,
    coverDataUrl: t,
    lrcText: n
  }) => {
    if (!e) {
      return;
    }
    const r = `local_${Date.now()}`;
    const i = await vt.saveUploadedAudio(r, e);
    if (n) {
      await vt.saveUploadedLyric(r, n);
    }
    if (t) {
      await vt.saveUploadedCover(r, t);
    }
    const a = {
      id: r,
      title: e.name.replace(/\.[^/.]+$/, ""),
      artist: R("radioLocalUpload"),
      cover: t || "",
      duration: 0,
      type: "song",
      source: "local",
      audioUrl: i,
      hasLyric: !!n,
      hasCover: !!t
    };
    Rt(e => [a, ...e]);
    const o = {
      ...a,
      cover: ""
    };
    vt.addToPlaylist(vt.UPLOADS_ID, o);
    At(a);
    ft("player");
    bt(true);
    Et(false);
  }, [vt, R]);
  const kr = R("radioDanmakuDefault") || ["這首背景音樂太棒了 ✨", "主播晚上好啊～", "期待很久的專題惹！", "聲音好溫柔 🌙", "陪伴我好幾個難熬的夜晚", "歡迎嘉賓！", "ON AIR!"];
  return t.jsxs("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      backgroundColor: "#000",
      overflow: "hidden"
    },
    children: [t.jsxs("div", {
      className: "global-liquid-bg " + (pt === "player" && Xt || pt === "home" && an || ["radio", "ai-radio"].includes(Pt == null ? undefined : Pt.type) && (nn || (Pt == null ? undefined : Pt.cover)) ? "has-custom-bg" : ""),
      children: [t.jsx("img", {
        decoding: "async",
        src: pt === "home" ? an || (Pt == null ? undefined : Pt.cover) : ["radio", "ai-radio"].includes(Pt == null ? undefined : Pt.type) ? nn || (Pt == null ? undefined : Pt.cover) : Xt || (Pt == null ? undefined : Pt.cover),
        alt: "bg",
        className: "bg-img"
      }), t.jsx("div", {
        className: "bg-overlay",
        style: pt === "player" && en && !["radio", "ai-radio"].includes(Pt == null ? undefined : Pt.type) ? {
          background: "transparent"
        } : undefined
      })]
    }), pt === "home" ? t.jsxs("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        zIndex: 20,
        overflowX: "hidden"
      },
      children: [t.jsxs("div", {
        style: {
          flexShrink: 0,
          paddingTop: "calc(var(--nuo-safe-top) + 24px)",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        },
        children: [t.jsx("button", {
          onClick: () => N("home-screen"),
          className: "icon-btn-clean",
          children: t.jsx(re, {
            size: 30,
            color: "#fff",
            strokeWidth: 2.5
          })
        }), t.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "6px",
            opacity: 0.9
          },
          children: [t.jsx(oe, {
            size: 18,
            color: "#fff"
          }), t.jsx("span", {
            style: {
              fontSize: "16px",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "1px"
            },
            children: R("radioExploreMusic")
          })]
        }), t.jsx("button", {
          onClick: () => Et(true),
          className: "icon-btn-clean",
          children: t.jsx(_e, {
            size: 26,
            color: "#fff",
            strokeWidth: 2.5
          })
        })]
      }), t.jsx("div", {
        style: {
          flexShrink: 0,
          padding: "8px 24px",
          position: "relative",
          zIndex: 20
        },
        children: t.jsxs("div", {
          className: "search-pill",
          children: [t.jsx(ze, {
            size: 20,
            color: "rgba(255,255,255,0.6)"
          }), t.jsx("input", {
            type: "text",
            placeholder: R("radioSearchPlaceholder"),
            value: xt,
            onChange: e => or(e.target.value),
            className: "search-input"
          })]
        })
      }), t.jsxs("div", {
        className: "bulletproof-scroll",
        children: [!xt && t.jsxs("div", {
          style: {
            marginTop: "24px"
          },
          children: [t.jsx("h2", {
            style: {
              fontSize: "18px",
              fontWeight: 800,
              color: "#fff",
              marginLeft: "24px",
              marginBottom: "16px",
              textShadow: "0 1px 4px rgba(0,0,0,0.4)",
              opacity: 0.9
            },
            children: R("radioAiRadioSection")
          }), t.jsxs("div", {
            className: "carousel-container",
            ref: at,
            children: [we.map(e => {
              const n = _.find(t => {
                var n;
                var r;
                return String(t.id) === String((r = (n = e.hosts) == null ? undefined : n[0]) == null ? undefined : r.characterId);
              });
              return t.jsxs("div", {
                className: "radio-card",
                onClick: () => {
                  if (st.current) {
                    st.current = false;
                  } else {
                    Fe.startBroadcast(e);
                    At({
                      ...e,
                      type: "ai-radio",
                      cover: e.coverImage || (n == null ? undefined : n.image)
                    });
                    ft("player");
                  }
                },
                onTouchStart: t => ct(e, t),
                onTouchEnd: dt,
                onTouchMove: ut,
                onMouseDown: t => {
                  if (t.button === 0) {
                    ct(e, t);
                  }
                },
                onMouseUp: dt,
                onMouseLeave: dt,
                onMouseMove: ut,
                onContextMenu: t => {
                  t.preventDefault();
                  it(e);
                },
                children: [t.jsxs("div", {
                  className: "radio-img-wrapper",
                  children: [t.jsx("img", {
                    decoding: "async",
                    src: e.coverImage || (n == null ? undefined : n.image) || "https://images.unsplash.com/photo-1516280440502-39c5369bb966?w=500&q=80",
                    alt: e.name,
                    className: "radio-img"
                  }), t.jsx("div", {
                    className: "radio-gradient-overlay"
                  }), t.jsx("div", {
                    className: "play-icon-overlay",
                    children: t.jsx(Pe, {
                      size: 40,
                      fill: "rgba(255,255,255,0.2)",
                      color: "#fff",
                      strokeWidth: 1
                    })
                  }), t.jsxs("div", {
                    className: "live-pill",
                    children: [t.jsx("div", {
                      className: "live-dot"
                    }), " AI"]
                  })]
                }), t.jsx("span", {
                  className: "radio-title",
                  children: e.name
                }), t.jsx("span", {
                  className: "radio-sub",
                  children: e.theme || (n == null ? undefined : n.name) || ""
                })]
              }, e.id);
            }), t.jsxs("div", {
              className: "radio-card",
              onClick: () => xe(true),
              style: {
                opacity: 0.7
              },
              children: [t.jsx("div", {
                className: "radio-img-wrapper",
                style: {
                  background: "rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: t.jsx(de, {
                  size: 40,
                  color: "rgba(255,255,255,0.4)"
                })
              }), t.jsx("span", {
                className: "radio-title",
                children: R("aiRadioNewStation")
              }), t.jsx("span", {
                className: "radio-sub",
                children: R("aiRadioCreateStation")
              })]
            })]
          })]
        }), t.jsxs("div", {
          style: {
            marginTop: xt ? "16px" : "32px",
            padding: "0 24px"
          },
          children: [t.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "16px"
            },
            children: [t.jsx("h2", {
              style: {
                fontSize: "18px",
                fontWeight: 800,
                color: "#fff",
                textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                opacity: 0.9,
                margin: 0
              },
              children: R(xt ? "radioSearchResults" : "radioRecommended")
            }), Kn && t.jsx(pe, {
              size: 16,
              color: "#fff",
              className: "spinning"
            })]
          }), t.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            },
            children: [(vr || []).map((e, n) => t.jsxs("div", {
              className: "song-row",
              onClick: () => {
                At(e);
                ft("player");
                bt(true);
                const t = window.__radioAudio;
                if (t) {
                  t.__currentPlaylistIds = null;
                }
                try {
                  localStorage.removeItem("radioCurrentPlaylistIds");
                } catch (n) {}
              },
              children: [t.jsx("span", {
                style: {
                  width: "24px",
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.5)",
                  fontWeight: 700,
                  fontFamily: "monospace"
                },
                children: n + 1
              }), e.cover ? t.jsx("img", {
                decoding: "async",
                src: Wn(e.cover),
                alt: "",
                className: "song-cover-small"
              }) : t.jsx("div", {
                className: "song-cover-small",
                style: {
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: t.jsx(oe, {
                  size: 20,
                  color: "rgba(255,255,255,0.3)"
                })
              }), t.jsxs("div", {
                style: {
                  flex: 1,
                  marginLeft: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px"
                },
                children: [t.jsx("span", {
                  style: {
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#fff"
                  },
                  children: e.title || e.name
                }), t.jsx("span", {
                  style: {
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.6)",
                    fontWeight: 500
                  },
                  children: e.artist || e.artists
                })]
              }), e.duration > 0 && t.jsx("span", {
                style: {
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.4)",
                  marginRight: "4px"
                },
                children: z(e.duration)
              }), t.jsx("button", {
                className: "icon-btn-clean",
                style: {
                  padding: "6px"
                },
                onClick: t => {
                  t.stopPropagation();
                  kt(e);
                },
                children: t.jsx(de, {
                  size: 18,
                  color: "rgba(255,255,255,0.45)"
                })
              })]
            }, e.id)), xt && vr.length === 0 && !Kn && t.jsx("div", {
              style: {
                textAlign: "center",
                padding: "32px 0",
                color: "rgba(255,255,255,0.4)",
                fontSize: "14px"
              },
              children: R("radioNoResults")
            })]
          })]
        })]
      }), (Pt || Fe.isActive) && t.jsx("div", {
        className: "apple-music-bottom-bar",
        onClick: () => ft("player"),
        children: t.jsxs("div", {
          className: "am-bar-content",
          children: [t.jsx("img", {
            decoding: "async",
            src: Wn(Fe.isActive && ((Sr = Fe.station) == null ? undefined : Sr.coverImage) || (Pt == null ? undefined : Pt.cover)),
            className: "am-bar-img " + (mt || Fe.isActive ? "" : "dimmed"),
            alt: "cover"
          }), t.jsx("div", {
            style: {
              flex: 1,
              display: "flex",
              alignItems: "center",
              overflow: "hidden"
            },
            children: t.jsx("span", {
              className: "am-bar-title",
              children: Fe.isActive ? `🔴 ${((Cr = Fe.station) == null ? undefined : Cr.name) || "AI Radio"}` : mt ? (Pt == null ? undefined : Pt.title) || (Pt == null ? undefined : Pt.name) : R("dynamicIslandNotPlaying")
            })
          }), Fe.isActive ? t.jsx("button", {
            className: "icon-btn-clean",
            style: {
              padding: "8px"
            },
            onClick: e => {
              e.stopPropagation();
              if (Fe.status === "paused") {
                Fe.resumeBroadcast();
              } else {
                Fe.pauseBroadcast();
              }
            },
            children: Fe.status === "paused" ? t.jsx(ce, {
              size: 24,
              color: "#fff",
              fill: "#fff"
            }) : t.jsx(Se, {
              size: 24,
              color: "#fff",
              fill: "#fff"
            })
          }) : t.jsxs(t.Fragment, {
            children: [t.jsx("button", {
              className: "icon-btn-clean",
              style: {
                padding: "8px"
              },
              onClick: e => {
                e.stopPropagation();
                bt(!mt);
              },
              children: mt ? t.jsx(Se, {
                size: 24,
                color: "#fff",
                fill: "#fff"
              }) : t.jsx(ce, {
                size: 24,
                color: "#fff",
                fill: "#fff"
              })
            }), t.jsx("button", {
              className: "icon-btn-clean",
              style: {
                padding: "8px",
                marginLeft: "4px"
              },
              onClick: e => {
                e.stopPropagation();
                hr(1);
              },
              children: t.jsx(Ae, {
                size: 24,
                color: "#fff",
                fill: "#fff"
              })
            })]
          })]
        })
      })]
    }) : (() => {
      var e;
      var n;
      var r;
      var i;
      var a;
      var o;
      if (!Pt) {
        return null;
      }
      if (Pt.type === "ai-radio" && Fe.isActive) {
        return t.jsxs("div", {
          style: {
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            zIndex: 20
          },
          children: [t.jsx("div", {
            style: {
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              zIndex: 1
            }
          }), t.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              padding: "56px 20px 12px",
              zIndex: 30,
              position: "relative"
            },
            children: [t.jsx("button", {
              onClick: () => {
                ft("home");
              },
              className: "icon-btn-clean",
              children: t.jsx(re, {
                size: 30,
                color: "#fff"
              })
            }), t.jsx("div", {
              style: {
                flex: 1,
                textAlign: "center"
              },
              children: t.jsx("div", {
                style: {
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "1px"
                },
                children: ((e = Fe.station) == null ? undefined : e.name) || "AI Radio"
              })
            }), t.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6
              },
              children: [t.jsx("button", {
                onClick: () => xe(true),
                className: "icon-btn-clean",
                children: t.jsx(_e, {
                  size: 22,
                  color: "rgba(255,255,255,0.7)"
                })
              }), t.jsxs("div", {
                style: {
                  position: "relative"
                },
                children: [t.jsx("button", {
                  className: "icon-btn-clean",
                  onClick: () => $e(e => !e),
                  children: t.jsx(Te, {
                    size: 18,
                    color: "rgba(255,255,255,0.7)"
                  })
                }), He && t.jsxs("div", {
                  style: {
                    position: "absolute",
                    right: 0,
                    top: "100%",
                    marginTop: 6,
                    padding: 10,
                    borderRadius: 14,
                    background: "rgba(30,30,35,0.95)",
                    border: "1px solid rgba(255,255,255,0.16)",
                    minWidth: 180,
                    zIndex: 50
                  },
                  children: [t.jsx("div", {
                    style: {
                      fontSize: 11,
                      color: "rgba(255,255,255,0.65)",
                      marginBottom: 8
                    },
                    children: R("aiRadioDownloadFormat") || "格式"
                  }), t.jsx("button", {
                    className: "icon-btn-clean",
                    style: {
                      width: "100%",
                      justifyContent: "flex-start",
                      padding: "8px 10px",
                      borderRadius: 10,
                      background: Ge === "zip-segments" ? "rgba(255,255,255,0.16)" : "transparent",
                      color: "#fff",
                      fontSize: 12
                    },
                    onClick: () => Oe("zip-segments"),
                    children: R("aiRadioDownloadFormatZip") || "分段 ZIP"
                  }), t.jsx("button", {
                    className: "icon-btn-clean",
                    style: {
                      width: "100%",
                      justifyContent: "flex-start",
                      padding: "8px 10px",
                      borderRadius: 10,
                      background: Ge === "wav-merged" ? "rgba(255,255,255,0.16)" : "transparent",
                      color: "#fff",
                      fontSize: 12
                    },
                    onClick: () => Oe("wav-merged"),
                    children: R("aiRadioDownloadFormatWav") || "合併 WAV"
                  }), t.jsx("button", {
                    className: "icon-btn-clean",
                    style: {
                      marginTop: 6,
                      width: "100%",
                      justifyContent: "center",
                      padding: "8px 10px",
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.14)",
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 700
                    },
                    onClick: () => tt(Ge),
                    disabled: Fe.exportInProgress,
                    children: Fe.exportInProgress ? `${R("aiRadioDownloadPreparing") || "語音整理中"} ${Fe.exportProgress || 0}%` : R("aiRadioDownloadAllVoices") || "下載全部語音"
                  })]
                })]
              })]
            })]
          }), t.jsx("div", {
            style: {
              flex: 1,
              zIndex: 10,
              overflow: "hidden"
            },
            children: t.jsx(Tn, {
              status: Fe.status,
              segments: Fe.segments,
              currentSegment: Fe.currentSegment,
              station: Fe.station,
              characters: _,
              currentSong: Fe.currentSong,
              ttsPlaying: Fe.ttsPlaying,
              onStop: () => {
                Fe.stopBroadcast();
                ft("home");
              },
              onPause: Fe.pauseBroadcast,
              onResume: Fe.resumeBroadcast,
              sleepRemainingSec: Ye,
              t: R
            })
          })]
        });
      }
      const s = Pt.type === "radio";
      return t.jsxs("div", {
        style: {
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          zIndex: 20
        },
        children: [en && !s && t.jsx("div", {
          style: {
            position: "absolute",
            inset: 0,
            zIndex: 2,
            pointerEvents: "none",
            backgroundImage: `url("${en}")`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }
        }), en && !s && t.jsx("div", {
          style: {
            position: "absolute",
            inset: 0,
            zIndex: 2,
            background: "rgba(0,0,0,0.15)",
            pointerEvents: "none"
          }
        }), t.jsxs("div", {
          style: {
            position: "relative",
            zIndex: 3,
            flexShrink: 0,
            paddingTop: `calc(var(--nuo-safe-top) + ${Qt ? 4 : 24}px)`,
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingBottom: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          },
          children: [t.jsx("button", {
            onClick: () => ft("home"),
            className: "icon-btn-clean",
            children: t.jsx(Re, {
              size: 32,
              color: "#fff",
              strokeWidth: 1.5,
              opacity: 0.8
            })
          }), t.jsx("div", {
            style: {
              fontSize: "14px",
              fontWeight: 500,
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "1px"
            },
            children: s ? R("radioOnBroadcast") : (Pt == null ? undefined : Pt.title) || (Pt == null ? undefined : Pt.name) || ""
          }), t.jsx("button", {
            className: "icon-btn-clean",
            onClick: () => {
              if (se.isListening) {
                se.stopListenTogether();
              } else {
                ue(true);
              }
            },
            children: se.isListening ? t.jsx(he, {
              size: 26,
              color: "#ff6b9d",
              strokeWidth: 1.5,
              opacity: 0.8
            }) : t.jsx(Ee, {
              size: 26,
              color: "#fff",
              strokeWidth: 1.5,
              opacity: 0.8
            })
          })]
        }), !s && se.isListening && t.jsxs("div", {
          className: "lt-avatars-section",
          style: {
            position: "absolute",
            left: 0,
            right: 0,
            zIndex: 5
          },
          children: [t.jsxs("div", {
            className: "lt-avatars-row",
            children: [t.jsx("div", {
              className: "lt-avatar-wrapper",
              children: (Z == null ? undefined : Z.avatar) ? t.jsx("img", {
                decoding: "async",
                src: Z.avatar,
                alt: "",
                className: "lt-avatar-img"
              }) : t.jsx("div", {
                className: "lt-avatar-placeholder",
                children: ((n = Z == null ? undefined : Z.name) == null ? undefined : n[0]) || "?"
              })
            }), t.jsx("div", {
              className: "lt-avatar-wrapper",
              children: ((r = se.listenChar) == null ? undefined : r.image) ? t.jsx("img", {
                decoding: "async",
                src: se.listenChar.image,
                alt: "",
                className: "lt-avatar-img"
              }) : t.jsx("div", {
                className: "lt-avatar-placeholder",
                children: ((a = (i = se.listenChar) == null ? undefined : i.name) == null ? undefined : a[0]) || "?"
              })
            })]
          }), t.jsx("div", {
            className: "lt-duration-text",
            children: R("radioListenTogetherDuration").replace("{duration}", se.elapsedText)
          })]
        }), t.jsx("div", {
          style: {
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 32px"
          },
          children: !En || Gn || mt ? s ? t.jsxs("div", {
            className: "radio-live-space",
            children: [t.jsx(Pn, {
              comments: kr,
              isPlaying: mt
            }), t.jsxs("div", {
              className: "floating-live-badge " + (mt ? "glow" : ""),
              children: [t.jsx("div", {
                className: "live-dot " + (mt ? "blinking" : "")
              }), "ON AIR"]
            }), t.jsxs("div", {
              className: "radio-network",
              children: [t.jsxs("div", {
                className: "speaker-node guest-node " + (mt ? "bobbing" : ""),
                style: {
                  left: "10px",
                  top: "70px",
                  animationDelay: "0.2s"
                },
                children: [t.jsx("img", {
                  decoding: "async",
                  src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
                  alt: "guest"
                }), t.jsxs("div", {
                  className: "mic-badge",
                  children: [t.jsx(be, {
                    size: 10
                  }), " ", R("radioMicGuest")]
                })]
              }), t.jsxs("div", {
                className: "speaker-node guest-node " + (mt ? "bobbing" : ""),
                style: {
                  right: "10px",
                  top: "50px",
                  animationDelay: "0.5s"
                },
                children: [t.jsx("img", {
                  decoding: "async",
                  src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
                  alt: "guest"
                }), t.jsxs("div", {
                  className: "mic-badge",
                  children: [t.jsx(be, {
                    size: 10
                  }), " ", R("radioMicPlanner")]
                })]
              }), t.jsxs("div", {
                className: "speaker-node main-node",
                style: {
                  left: "50%",
                  transform: "translateX(-50%)",
                  bottom: "30px"
                },
                children: [mt && t.jsxs(t.Fragment, {
                  children: [t.jsx("div", {
                    className: "sound-ripple r-1"
                  }), t.jsx("div", {
                    className: "sound-ripple r-2"
                  }), t.jsx("div", {
                    className: "sound-ripple r-3"
                  })]
                }), t.jsx("img", {
                  decoding: "async",
                  src: Wn(Pt == null ? undefined : Pt.cover) || "https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&q=80",
                  alt: "host",
                  className: mt ? "pulsing-img" : ""
                }), t.jsxs("div", {
                  className: "mic-badge active",
                  children: [t.jsx(be, {
                    size: 12
                  }), " ", R("radioMicHost")]
                })]
              })]
            }), t.jsx(An, {
              isPlaying: mt
            })]
          }) : t.jsxs("div", {
            style: {
              position: "relative",
              width: "240px",
              height: "240px",
              transform: `translateY(${Qt ? 20 : 58}px)`
            },
            children: [t.jsxs("div", {
              className: "tonearm-container " + (mt ? "playing" : ""),
              children: [t.jsx("div", {
                className: "tonearm-pivot",
                children: t.jsx("div", {
                  className: "tonearm-dot"
                })
              }), t.jsxs("svg", {
                viewBox: "0 0 100 150",
                className: "tonearm-svg",
                children: [t.jsx("path", {
                  d: "M 50 15 Q 10 70 80 130",
                  stroke: "#fff",
                  strokeWidth: "3",
                  fill: "none",
                  strokeLinecap: "round",
                  opacity: 0.9
                }), t.jsx("rect", {
                  x: "72",
                  y: "128",
                  width: "16",
                  height: "24",
                  rx: "2",
                  stroke: "#fff",
                  strokeWidth: "2.5",
                  fill: "none",
                  opacity: 0.9,
                  transform: "rotate(-20 80 130)"
                })]
              })]
            }), t.jsx("div", {
              className: "vinyl-disc " + (mt ? "spinning" : "paused"),
              children: t.jsx("img", {
                decoding: "async",
                src: Wn(Pt.cover),
                alt: "cover",
                className: "circular-img"
              })
            })]
          }) : t.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              textAlign: "center"
            },
            children: [t.jsx("div", {
              style: {
                fontSize: "16px",
                fontWeight: 600,
                color: "#fff"
              },
              children: R("radioLoadError")
            }), t.jsx("div", {
              style: {
                fontSize: "13px",
                color: "rgba(255,255,255,0.6)"
              },
              children: R(En === "noSource" ? "radioNoSource" : En === "urlNotFound" ? "radioUrlNotFound" : "radioLoadFailed")
            }), t.jsxs("div", {
              style: {
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                justifyContent: "center"
              },
              children: [t.jsx("button", {
                onClick: wr,
                style: {
                  padding: "14px 32px",
                  background: "linear-gradient(135deg, #ff6b9d, #ff8fab)",
                  border: "none",
                  borderRadius: "24px",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "transform 0.2s",
                  boxShadow: "0 4px 12px rgba(255,107,157,0.4)"
                },
                onMouseDown: e => e.currentTarget.style.transform = "scale(0.95)",
                onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
                children: R("radioRetryLoad")
              }), t.jsx("button", {
                onClick: () => {
                  Mn(null);
                  hr(1);
                },
                style: {
                  padding: "14px 32px",
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "24px",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "transform 0.2s"
                },
                onMouseDown: e => e.currentTarget.style.transform = "scale(0.95)",
                onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
                children: R("radioSkip")
              })]
            })]
          })
        }), t.jsxs("div", {
          style: {
            position: "relative",
            zIndex: 3,
            flexShrink: 0,
            padding: `0 24px calc(var(--nuo-safe-bottom) + ${Qt ? 8 : 90}px)`
          },
          children: [Qt && t.jsxs("div", {
            style: {
              marginBottom: "12px"
            },
            children: [t.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer"
              },
              onClick: () => Qe(e => !e),
              children: [t.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: Ye > 0 ? "#ff6b9d" : "rgba(255,255,255,0.85)"
                },
                children: [t.jsx(ke, {
                  size: 14
                }), t.jsx("span", {
                  style: {
                    fontSize: "12px",
                    fontWeight: 600
                  },
                  children: `${R("radioSleepTimer") || "睡眠計時"}: ${yr}`
                })]
              }), t.jsx(Re, {
                size: 14,
                color: "rgba(255,255,255,0.6)",
                style: {
                  transform: Ke ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s"
                }
              })]
            }), Ke && t.jsxs("div", {
              style: {
                display: "flex",
                gap: "6px",
                marginTop: "8px",
                justifyContent: "flex-end"
              },
              children: [[15, 30, 45, 60].map(e => t.jsxs("button", {
                className: "icon-btn-clean",
                style: {
                  padding: "4px 8px",
                  borderRadius: "10px",
                  background: Ye > 0 && Math.abs(Ye - e * 60) < 60 ? "rgba(255,107,157,0.3)" : "rgba(255,255,255,0.12)",
                  color: "#fff",
                  fontSize: "11px",
                  fontWeight: 600
                },
                onClick: t => {
                  t.stopPropagation();
                  Ze(e);
                  Qe(false);
                },
                children: [e, "m"]
              }, e)), Ye > 0 && t.jsx("button", {
                className: "icon-btn-clean",
                style: {
                  padding: "4px 8px",
                  borderRadius: "10px",
                  background: "rgba(255,80,80,0.25)",
                  color: "#ff8080",
                  fontSize: "11px",
                  fontWeight: 600
                },
                onClick: e => {
                  e.stopPropagation();
                  Ze(0);
                  Qe(false);
                },
                children: R("radioSleepOff") || "關閉"
              })]
            })]
          }), t.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "20px"
            },
            children: [t.jsxs("div", {
              style: {
                flex: 1,
                paddingRight: "16px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
              },
              children: [t.jsx("h2", {
                style: {
                  fontSize: "20px",
                  fontWeight: 700,
                  margin: "0 0 4px 0",
                  color: "#fff",
                  letterSpacing: "0.5px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                },
                children: (Pt == null ? undefined : Pt.title) || (Pt == null ? undefined : Pt.name)
              }), t.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  opacity: 0.8
                },
                children: [t.jsx("span", {
                  style: {
                    fontSize: "13px",
                    color: "#fff",
                    fontWeight: 400
                  },
                  children: (Pt == null ? undefined : Pt.artist) || (Pt == null ? undefined : Pt.artists)
                }), t.jsx(re, {
                  size: 14,
                  color: "#fff",
                  style: {
                    transform: "rotate(180deg)"
                  }
                })]
              }), t.jsx("div", {
                style: {
                  marginTop: "4px",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.72)"
                },
                children: `${R("radioNowPlaying") || "正在播放"}: ${(Pt == null ? undefined : Pt.title) || (Pt == null ? undefined : Pt.name) || ""}`
              })]
            }), t.jsxs("div", {
              style: {
                display: "flex",
                gap: "16px",
                alignItems: "center"
              },
              children: [t.jsx("button", {
                className: "icon-btn-clean",
                onClick: () => {
                  if (Pt) {
                    vt.toggleFavorite(Pt);
                  }
                },
                children: t.jsx(ge, {
                  size: 26,
                  color: vt.isInFavorites(Pt == null ? undefined : Pt.id) ? "#ff3b30" : "#fff",
                  fill: vt.isInFavorites(Pt == null ? undefined : Pt.id) ? "#ff3b30" : "transparent",
                  strokeWidth: 1.5
                })
              }), t.jsx("button", {
                className: "icon-btn-clean",
                onClick: () => {
                  if (Pt) {
                    kt(Pt);
                  }
                },
                children: t.jsx(de, {
                  size: 26,
                  color: "#fff",
                  strokeWidth: 1.5
                })
              })]
            })]
          }), s ? t.jsx("div", {
            style: {
              marginBottom: "24px",
              height: "14px"
            }
          }) : t.jsxs("div", {
            style: {
              marginBottom: "24px"
            },
            children: [t.jsx("div", {
              ref: sr,
              className: "scrubber-track",
              onPointerDown: cr,
              onPointerMove: dr,
              style: {
                touchAction: "none"
              },
              children: t.jsx("div", {
                className: "scrubber-fill",
                style: {
                  width: hn > 0 ? pn / hn * 100 + "%" : "0%"
                },
                children: t.jsx("div", {
                  className: "scrubber-thumb"
                })
              })
            }), t.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                fontSize: "11px",
                color: "rgba(255,255,255,0.7)",
                marginTop: "10px",
                fontWeight: 500,
                letterSpacing: "1px"
              },
              children: [t.jsx("span", {
                children: z(pn * 1000)
              }), t.jsx("span", {
                children: In ? "⏳" : ""
              }), t.jsx("span", {
                children: z(hn > 0 ? hn * 1000 : Pt.duration || 0)
              })]
            }), Zn.length > 0 && tr >= 0 && t.jsx("div", {
              style: {
                textAlign: "center",
                marginTop: "12px",
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.9)",
                transition: "opacity 0.3s",
                minHeight: "20px"
              },
              children: (o = Zn[tr]) == null ? undefined : o.text
            })]
          }), !Qt && t.jsxs("div", {
            style: {
              marginBottom: "12px"
            },
            children: [t.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer"
              },
              onClick: () => Qe(e => !e),
              children: [t.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: Ye > 0 ? "#ff6b9d" : "rgba(255,255,255,0.85)"
                },
                children: [t.jsx(ke, {
                  size: 14
                }), t.jsx("span", {
                  style: {
                    fontSize: "12px",
                    fontWeight: 600
                  },
                  children: `${R("radioSleepTimer") || "睡眠計時"}: ${yr}`
                })]
              }), t.jsx(Re, {
                size: 14,
                color: "rgba(255,255,255,0.6)",
                style: {
                  transform: Ke ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s"
                }
              })]
            }), Ke && t.jsxs("div", {
              style: {
                display: "flex",
                gap: "6px",
                marginTop: "8px",
                justifyContent: "flex-end"
              },
              children: [[15, 30, 45, 60].map(e => t.jsxs("button", {
                className: "icon-btn-clean",
                style: {
                  padding: "4px 8px",
                  borderRadius: "10px",
                  background: Ye > 0 && Math.abs(Ye - e * 60) < 60 ? "rgba(255,107,157,0.3)" : "rgba(255,255,255,0.12)",
                  color: "#fff",
                  fontSize: "11px",
                  fontWeight: 600
                },
                onClick: t => {
                  t.stopPropagation();
                  Ze(e);
                  Qe(false);
                },
                children: [e, "m"]
              }, e)), Ye > 0 && t.jsx("button", {
                className: "icon-btn-clean",
                style: {
                  padding: "4px 8px",
                  borderRadius: "10px",
                  background: "rgba(255,80,80,0.25)",
                  color: "#ff8080",
                  fontSize: "11px",
                  fontWeight: 600
                },
                onClick: e => {
                  e.stopPropagation();
                  Ze(0);
                  Qe(false);
                },
                children: R("radioSleepOff") || "關閉"
              })]
            })]
          }), t.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "70px",
              margin: "0 -4px"
            },
            children: [t.jsx("button", {
              className: "control-icon-btn",
              onClick: () => Ct(e => e === "list" ? "one" : e === "one" ? "shuffle" : "list"),
              children: St === "one" ? t.jsx(Le, {
                size: 28,
                strokeWidth: 1.5,
                color: "#ff6b9d"
              }) : St === "shuffle" ? t.jsx(Me, {
                size: 28,
                strokeWidth: 1.5,
                color: "#ff6b9d"
              }) : t.jsx(Be, {
                size: 28,
                strokeWidth: 1.5,
                color: "#fff",
                opacity: 0.8
              })
            }), t.jsx("button", {
              className: "control-icon-btn",
              onClick: () => hr(-1),
              children: t.jsx(Ue, {
                size: 32,
                fill: "#fff",
                color: "#fff",
                opacity: 0.9
              })
            }), t.jsx("button", {
              onClick: () => bt(!mt),
              className: "play-btn-transparent",
              children: In ? t.jsx(pe, {
                size: 42,
                color: "#fff",
                className: "spinning"
              }) : mt ? t.jsx(Se, {
                size: 42,
                fill: "#fff",
                color: "#fff"
              }) : t.jsx(ce, {
                size: 42,
                fill: "#fff",
                color: "#fff",
                style: {
                  marginLeft: "4px"
                }
              })
            }), t.jsx("button", {
              className: "control-icon-btn",
              onClick: () => hr(1),
              children: t.jsx(Ae, {
                size: 32,
                fill: "#fff",
                color: "#fff",
                opacity: 0.9
              })
            }), t.jsx("button", {
              className: "control-icon-btn",
              onClick: () => wt(true),
              children: t.jsx(ye, {
                size: 28,
                strokeWidth: 1.5,
                color: "#fff",
                opacity: 0.8
              })
            })]
          })]
        })]
      });
    })(), yt && t.jsx(Rn, {
      ...vt,
      initialCloudImport: yt === "cloud",
      onUploadMusic: () => dn(true),
      onPlaySong: (e, t, n) => {
        ht("");
        Rt(t);
        At(e);
        bt(true);
        wt(false);
        ft("player");
        const r = n ? [n] : null;
        const i = window.__radioAudio;
        if (i) {
          i.__currentPlaylistIds = r;
        }
        try {
          localStorage.setItem("radioCurrentPlaylistIds", JSON.stringify(r));
        } catch (a) {}
      },
      onPlayAll: (e, t) => {
        if (!e.length) {
          return;
        }
        ht("");
        Rt(e);
        At(e[0]);
        bt(true);
        wt(false);
        ft("player");
        const n = t ? [t] : null;
        const r = window.__radioAudio;
        if (r) {
          r.__currentPlaylistIds = n;
        }
        try {
          localStorage.setItem("radioCurrentPlaylistIds", JSON.stringify(n));
        } catch (i) {}
      },
      onClose: () => wt(false),
      t: R
    }), jt && t.jsx(Nn, {
      song: jt,
      playlists: vt.playlists,
      addToPlaylist: vt.addToPlaylist,
      createPlaylist: vt.createPlaylist,
      onClose: () => kt(null),
      t: R
    }), le && t.jsx("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(8px)",
        zIndex: 1100,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center"
      },
      onClick: () => ue(false),
      children: t.jsxs("div", {
        onClick: e => e.stopPropagation(),
        style: {
          background: "rgba(30,30,35,0.98)",
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          padding: "20px 20px 40px",
          width: "100%",
          maxHeight: "60vh",
          display: "flex",
          flexDirection: "column"
        },
        children: [t.jsx("div", {
          style: {
            width: 44,
            height: 5,
            background: "rgba(255,255,255,0.3)",
            borderRadius: 3,
            alignSelf: "center",
            marginBottom: 16
          }
        }), t.jsx("div", {
          style: {
            fontSize: 16,
            fontWeight: 700,
            color: "#fff",
            textAlign: "center",
            marginBottom: 16
          },
          children: R("radioListenTogetherSelect")
        }), t.jsx("div", {
          style: {
            flex: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 4
          },
          children: _.map(e => t.jsxs("div", {
            className: "lt-char-pick-row",
            onClick: () => {
              se.startListenTogether(e, Z);
              ue(false);
            },
            children: [t.jsx("img", {
              decoding: "async",
              src: e.image,
              alt: "",
              className: "lt-char-pick-avatar"
            }), t.jsx("span", {
              style: {
                flex: 1,
                fontSize: 15,
                fontWeight: 600,
                color: "#fff"
              },
              children: e.name
            })]
          }, e.id))
        })]
      })
    }), Tt && t.jsx("div", {
      className: "settings-modal-overlay",
      onClick: () => Et(false),
      children: t.jsxs("div", {
        className: "settings-modal-content",
        onClick: e => e.stopPropagation(),
        children: [t.jsx("div", {
          className: "settings-handle"
        }), Lt ? t.jsxs("div", {
          className: "settings-profile-card",
          children: [Lt.avatarUrl ? t.jsx("img", {
            decoding: "async",
            src: Lt.avatarUrl,
            alt: "",
            className: "settings-profile-avatar"
          }) : t.jsx("div", {
            className: "settings-profile-avatar",
            children: t.jsx(oe, {
              size: 24,
              color: "#fff"
            })
          }), t.jsxs("div", {
            className: "settings-profile-info",
            children: [t.jsxs("div", {
              className: "settings-profile-name",
              children: [Lt.nickname || R("radioNeteaseLoggedIn"), Lt.vipType > 0 && t.jsx("span", {
                className: "settings-vip-badge",
                children: "VIP"
              })]
            }), t.jsx("div", {
              className: "settings-profile-sub",
              children: R("radioNeteaseLoggedInSub")
            })]
          })]
        }) : t.jsxs("div", {
          className: "settings-profile-card",
          onClick: () => Jt(false),
          children: [t.jsx("div", {
            className: "settings-profile-avatar",
            children: t.jsx(oe, {
              size: 24,
              color: "#ff6b9d"
            })
          }), t.jsxs("div", {
            className: "settings-profile-info",
            children: [t.jsx("div", {
              className: "settings-profile-name",
              children: R("radioNeteaseLogin")
            }), t.jsx("div", {
              className: "settings-profile-sub",
              children: R("radioNeteaseLoginHint")
            })]
          })]
        }), t.jsx("div", {
          className: "settings-group-title",
          children: R("radioGroupUiTitle")
        }), t.jsxs("div", {
          className: "settings-group",
          children: [t.jsxs("button", {
            className: "settings-row",
            onClick: () => ln("player"),
            children: [t.jsx(ie, {
              size: 20,
              className: "settings-row-icon"
            }), t.jsx("span", {
              className: "settings-row-text",
              children: R("radioSettingPlayerBg")
            }), t.jsx("span", {
              className: "settings-row-value",
              children: Xt ? R("radioSettingSet") : ""
            })]
          }), t.jsx("div", {
            className: "settings-divider"
          }), t.jsxs("button", {
            className: "settings-row",
            onClick: () => ln("songCover"),
            children: [t.jsx(ie, {
              size: 20,
              className: "settings-row-icon"
            }), t.jsx("span", {
              className: "settings-row-text",
              children: R("radioSettingSongCover")
            }), t.jsx("span", {
              className: "settings-row-value",
              children: en ? R("radioSettingSet") : ""
            })]
          }), t.jsx("div", {
            className: "settings-divider"
          }), t.jsxs("button", {
            className: "settings-row",
            onClick: () => ln("radio"),
            children: [t.jsx(ie, {
              size: 20,
              className: "settings-row-icon"
            }), t.jsx("span", {
              className: "settings-row-text",
              children: R("radioSettingRadioBg")
            }), t.jsx("span", {
              className: "settings-row-value",
              children: nn ? R("radioSettingSet") : ""
            })]
          }), t.jsx("div", {
            className: "settings-divider"
          }), t.jsxs("button", {
            className: "settings-row",
            onClick: () => ln("home"),
            children: [t.jsx(ie, {
              size: 20,
              className: "settings-row-icon"
            }), t.jsx("span", {
              className: "settings-row-text",
              children: R("radioSettingHomeBg")
            }), t.jsx("span", {
              className: "settings-row-value",
              children: an ? R("radioSettingSet") : ""
            })]
          })]
        }), t.jsx("div", {
          className: "settings-group-title",
          children: R("radioGroupPlayback")
        }), t.jsx("div", {
          className: "settings-group",
          children: t.jsxs("div", {
            className: "settings-row",
            onClick: () => {
              const e = ["capsule", "island-lyrics", "lyrics-bar", "off"];
              const t = e[(e.indexOf(_t) + 1) % e.length];
              zt(t);
            },
            children: [t.jsx(Ne, {
              size: 20,
              className: "settings-row-icon"
            }), t.jsx("span", {
              className: "settings-row-text",
              children: R("radioWidgetDisplay")
            }), t.jsxs("span", {
              className: "settings-row-value",
              children: [R(_t === "capsule" ? "radioIslandStd" : _t === "island-lyrics" ? "radioIslandLyrics" : _t === "lyrics-bar" ? "radioLyricsBar" : "radioIslandOff"), t.jsx(Re, {
                size: 14,
                style: {
                  marginLeft: 2
                }
              })]
            })]
          })
        }), t.jsx("div", {
          className: "settings-group-title",
          children: R("radioGroupLibrary")
        }), t.jsxs("div", {
          className: "settings-group",
          children: [Lt && t.jsxs(t.Fragment, {
            children: [t.jsxs("button", {
              className: "settings-row",
              onClick: () => {
                Et(false);
                wt("cloud");
              },
              children: [t.jsx(ye, {
                size: 20,
                className: "settings-row-icon",
                color: "#ff6b9d"
              }), t.jsx("span", {
                className: "settings-row-text",
                children: R("radioNeteaseImportPlaylist")
              })]
            }), t.jsx("div", {
              className: "settings-divider"
            })]
          }), t.jsxs("div", {
            className: "settings-row",
            style: {
              cursor: "pointer"
            },
            onClick: () => dn(true),
            children: [t.jsx(ae, {
              size: 20,
              className: "settings-row-icon"
            }), t.jsx("span", {
              className: "settings-row-text",
              children: R("radioSettingUploadMusic")
            }), t.jsx("span", {
              className: "settings-row-value",
              style: {
                fontSize: 12,
                marginLeft: 8
              },
              children: R("radioSettingUploadMusicHint")
            })]
          })]
        }), t.jsxs("div", {
          style: {
            marginTop: 24,
            paddingBottom: 20
          },
          children: [(Xt || en || nn || an) && t.jsx("button", {
            className: "settings-action-btn neutral",
            onClick: () => {
              Zt(null);
              tn(null);
              rn(null);
              on(null);
            },
            children: R("radioSettingResetAll")
          }), Lt && t.jsx("button", {
            className: "settings-action-btn destructive",
            onClick: Kt,
            children: R("radioNeteaseLogout")
          })]
        })]
      })
    }), Bt && i.createPortal(t.jsx("div", {
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(8px)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      onClick: () => {
        Ut(false);
        if (Vt.current) {
          clearInterval(Vt.current);
          Vt.current = null;
        }
        if (Ft !== "scanned") {
          if ($t.current) {
            clearInterval($t.current);
            $t.current = null;
          }
          Yt.current = null;
        }
      },
      children: t.jsxs("div", {
        onClick: e => e.stopPropagation(),
        style: {
          background: "rgba(30,30,35,0.98)",
          borderRadius: 20,
          padding: "28px 24px",
          width: "85%",
          maxWidth: 320,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16
        },
        children: [t.jsx("div", {
          style: {
            fontSize: 17,
            fontWeight: 700,
            color: "#fff"
          },
          children: R("radioNeteaseQrTitle")
        }), t.jsx("div", {
          style: {
            fontSize: 12,
            color: "rgba(255,255,255,0.4)",
            textAlign: "center"
          },
          children: R("radioNeteaseQrHint")
        }), Ft === "waiting" && !Dt && t.jsx("div", {
          style: {
            padding: 30
          },
          children: t.jsx(pe, {
            size: 24,
            color: "rgba(255,255,255,0.4)",
            className: "spinning"
          })
        }), Dt && Ft !== "expired" && t.jsxs("div", {
          style: {
            position: "relative"
          },
          children: [t.jsx("div", {
            style: {
              background: "#fff",
              borderRadius: 12,
              padding: 12
            },
            children: t.jsx("img", {
              decoding: "async",
              src: Dt,
              alt: "QR",
              style: {
                width: 180,
                height: 180,
                display: "block"
              }
            })
          }), Ot > 0 && Ft === "waiting" && t.jsxs("div", {
            style: {
              position: "absolute",
              top: -8,
              right: -8,
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.75)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: [t.jsxs("svg", {
              width: "36",
              height: "36",
              viewBox: "0 0 36 36",
              style: {
                position: "absolute",
                transform: "rotate(-90deg)"
              },
              children: [t.jsx("circle", {
                cx: "18",
                cy: "18",
                r: "15",
                fill: "none",
                stroke: "rgba(255,255,255,0.1)",
                strokeWidth: "2.5"
              }), t.jsx("circle", {
                cx: "18",
                cy: "18",
                r: "15",
                fill: "none",
                stroke: Ot <= 30 ? "#ff3b30" : Ot <= 60 ? "#ff9500" : "#34c759",
                strokeWidth: "2.5",
                strokeDasharray: "" + Math.PI * 2 * 15,
                strokeDashoffset: "" + Math.PI * 2 * 15 * (1 - Ot / 300),
                strokeLinecap: "round",
                style: {
                  transition: "stroke-dashoffset 1s linear, stroke 0.5s"
                }
              })]
            }), t.jsx("span", {
              style: {
                fontSize: 10,
                fontWeight: 700,
                color: "#fff",
                zIndex: 1
              },
              children: Ot >= 60 ? `${Math.floor(Ot / 60)}m` : `${Ot}s`
            })]
          })]
        }), t.jsxs("div", {
          style: {
            fontSize: 14,
            fontWeight: 600,
            color: Ft === "success" ? "#34c759" : Ft === "scanned" ? "#ff9500" : Ft === "expired" ? "#ff3b30" : "rgba(255,255,255,0.5)"
          },
          children: [Ft === "waiting" && R("radioNeteaseQrWaiting"), Ft === "scanned" && R("radioNeteaseQrScanned"), Ft === "success" && R("radioNeteaseQrSuccess"), Ft === "expired" && R("radioNeteaseQrExpired")]
        }), Ft === "expired" && t.jsx("button", {
          onClick: () => Jt(false),
          style: {
            padding: "8px 24px",
            borderRadius: 12,
            border: "none",
            background: "#ff3b30",
            color: "#fff",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer"
          },
          children: R("radioNeteaseQrRefresh")
        })]
      })
    }), document.body), t.jsx(v, {
      isOpen: !!sn,
      onClose: () => ln(null),
      onImageSelect: e => {
        const t = sn;
        ln(null);
        if (!t) {
          return;
        }
        if (!e) {
          if (t === "player") {
            Zt("");
          } else if (t === "songCover") {
            tn("");
          } else if (t === "radio") {
            rn("");
          } else if (t === "home") {
            on("");
          }
          Et(false);
          return;
        }
        const n = new Image();
        n.onload = () => {
          const e = document.createElement("canvas");
          const r = Math.min(1, 1080 / n.width);
          e.width = n.width * r;
          e.height = n.height * r;
          e.getContext("2d").drawImage(n, 0, 0, e.width, e.height);
          const i = t === "songCover" ? e.toDataURL("image/png") : e.toDataURL("image/jpeg", 0.8);
          if (t === "player") {
            Zt(i);
          } else if (t === "songCover") {
            tn(i);
          } else if (t === "radio") {
            rn(i);
          } else if (t === "home") {
            on(i);
          }
          Et(false);
        };
        n.onerror = () => {
          if (t === "player") {
            Zt(e);
          } else if (t === "songCover") {
            tn(e);
          } else if (t === "radio") {
            rn(e);
          } else if (t === "home") {
            on(e);
          }
          Et(false);
        };
        n.src = e;
      },
      title: R("radioSettingUploadImage")
    }), t.jsx(Ln, {
      isOpen: cn,
      onClose: () => dn(false),
      onUpload: jr,
      currentLocalSong: (Pt == null ? undefined : Pt.source) === "local" ? Pt : null,
      onLyricOnly: async e => {
        if (!(Pt == null ? undefined : Pt.id) || Pt.source !== "local" && !String(Pt.id).startsWith("local_")) {
          return;
        }
        await vt.saveUploadedLyric(Pt.id, e);
        const t = $(e);
        window.__radioLyrics = t;
        er(t);
        nr(-1);
      },
      t: R
    }), t.jsx(zn, {
      isOpen: fe,
      onClose: () => {
        xe(false);
        ve(null);
      },
      onStartBroadcast: e => {
        Fe.startBroadcast(e);
        const t = _.find(t => {
          var n;
          var r;
          return String(t.id) === String((r = (n = e.hosts) == null ? undefined : n[0]) == null ? undefined : r.characterId);
        });
        At({
          ...e,
          type: "ai-radio",
          cover: e.coverImage || (t == null ? undefined : t.image)
        });
        ft("player");
        xe(false);
        ve(null);
      },
      onSaveStation: nt,
      onUpdateLive: Fe.isActive ? Fe.updateStationConfig : null,
      editStation: Fe.isActive ? Fe.station : me,
      characters: _,
      playlists: vt.playlists,
      worldBooks: Ce,
      t: R
    }), rt && t.jsx("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(8px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      onClick: () => it(null),
      children: t.jsxs("div", {
        onClick: e => e.stopPropagation(),
        style: {
          background: "rgba(30,30,35,0.98)",
          borderRadius: 20,
          padding: "24px 20px",
          width: "80%",
          maxWidth: 320,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16
        },
        children: [t.jsx("div", {
          style: {
            fontSize: 13,
            color: "rgba(255,255,255,0.5)",
            textAlign: "center"
          },
          children: rt.name
        }), t.jsxs("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: 8,
            width: "100%"
          },
          children: [t.jsx("button", {
            onClick: () => {
              ve(rt);
              xe(true);
              it(null);
            },
            style: {
              width: "100%",
              padding: "12px",
              borderRadius: 12,
              border: "none",
              background: "rgba(255,255,255,0.12)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer"
            },
            children: R("edit")
          }), t.jsx("button", {
            onClick: () => gt(rt.id),
            style: {
              width: "100%",
              padding: "12px",
              borderRadius: 12,
              border: "none",
              background: "rgba(255,59,48,0.8)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer"
            },
            children: R("confirmDelete")
          }), t.jsx("button", {
            onClick: () => it(null),
            style: {
              width: "100%",
              padding: "12px",
              borderRadius: 12,
              border: "none",
              background: "rgba(255,255,255,0.06)",
              color: "rgba(255,255,255,0.5)",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer"
            },
            children: R("cancel")
          })]
        })]
      })
    }), t.jsx("style", {
      children: "\n                .global-liquid-bg { position: absolute; inset: -100px; zIndex: 0; pointer-events: none; }\n                .has-custom-bg.global-liquid-bg { inset: 0; }\n                .bg-img { width: 100%; height: 100%; object-fit: cover; filter: blur(90px) saturate(220%); transform: scale(1.1); opacity: 0.85; }\n                .bg-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%); }\n\n                /* Custom Wallpaper overrides - ZERO filters, NO dark overlay */\n                .has-custom-bg .bg-img { filter: blur(0px) saturate(100%); transform: scale(1); opacity: 1; object-fit: cover; }\n                .has-custom-bg .bg-overlay { background: rgba(0,0,0,0.15); }\n                \n                /* Subtle text protection for readability without clashing with the wallpaper */\n                .has-custom-bg { text-shadow: 0 1px 3px rgba(0,0,0,0.4); }\n                .has-custom-bg svg { filter: drop-shadow(0 1px 3px rgba(0,0,0,0.4)); }\n                \n                .has-custom-bg .settings-modal-content, .has-custom-bg .settings-modal-content * { text-shadow: none; filter: none; }\n                .has-custom-bg .search-input { text-shadow: none; }\n\n                .icon-btn-clean { background: none; border: none; padding: 0; margin: 0; cursor: pointer; transition: opacity 0.2s, transform 0.2s; display: flex; align-items: center; justify-content: center; touch-action: manipulation; }\n                .icon-btn-clean:active { opacity: 0.5; transform: scale(0.9); }\n                \n                .icon-btn-small { background: none; border: none; padding: 4px; cursor: pointer; touch-action: manipulation; }\n\n                .bulletproof-scroll { flex: 1; height: 100%; overflow-y: auto; overflow-x: hidden; -webkit-overflow-scrolling: touch; padding-bottom: 120px; overscroll-behavior-y: contain; }\n\n                /* Settings Modal */\n                .settings-modal-overlay { position: absolute; inset: 0; z-index: 200; background: rgba(0,0,0,0.4); backdrop-filter: blur(16px); display: flex; flex-direction: column; justify-content: flex-end; animation: fade-in 0.3s ease; }\n                .settings-modal-content { background: rgba(30,30,35,0.65); backdrop-filter: blur(40px) saturate(200%); border-top-left-radius: 36px; border-top-right-radius: 36px; padding: 20px 24px 40px; border-top: 1px solid rgba(255,255,255,0.2); box-shadow: 0 -20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1); animation: slide-up 0.4s cubic-bezier(0.2, 0.8, 0.2, 1); display: flex; flex-direction: column; max-height: 85vh; overflow-y: auto; scrollbar-width: none; }\n                .settings-modal-content::-webkit-scrollbar { display: none; }\n                .settings-handle { width: 44px; height: 5px; background: rgba(255,255,255,0.3); border-radius: 3px; align-self: center; margin-bottom: 24px; flex-shrink: 0; }\n                .settings-title { color: #fff; font-size: 20px; font-weight: 800; margin-bottom: 24px; letter-spacing: 0.5px; text-shadow: 0 1px 4px rgba(0,0,0,0.2); flex-shrink: 0; }\n                \n                /* Profile Card */\n                .settings-profile-card { display: flex; align-items: center; padding: 16px 20px; background: rgba(255,255,255,0.08); border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 24px; cursor: pointer; transition: background 0.2s; flex-shrink: 0; }\n                .settings-profile-card:active { background: rgba(255,255,255,0.12); }\n                .settings-profile-avatar { width: 52px; height: 52px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(255,255,255,0.15); margin-right: 16px; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; }\n                .settings-profile-info { flex: 1; }\n                .settings-profile-name { font-size: 17px; font-weight: 700; color: #fff; margin-bottom: 4px; display: flex; align-items: center; gap: 8px; }\n                .settings-profile-sub { font-size: 13px; color: rgba(255,255,255,0.5); font-weight: 500; white-space: pre-wrap; }\n                .settings-vip-badge { font-size: 10px; font-weight: 800; padding: 2px 6px; border-radius: 6px; background: linear-gradient(135deg, #ff3b30, #ff6b9d); color: #fff; }\n\n                /* Grouped Rows */\n                .settings-group-title { font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.5); margin: 0 0 8px 16px; letter-spacing: 0.5px; }\n                .settings-group { background: rgba(255,255,255,0.06); border-radius: 20px; border: 1px solid rgba(255,255,255,0.08); margin-bottom: 20px; overflow: hidden; flex-shrink: 0; }\n                .settings-row { display: flex; align-items: center; padding: 16px 20px; width: 100%; background: transparent; border: none; color: #fff; font-size: 15px; font-weight: 600; cursor: pointer; transition: background 0.2s; }\n                .settings-row:active { background: rgba(255,255,255,0.08); }\n                .settings-row-icon { margin-right: 14px; opacity: 0.9; }\n                .settings-row-text { flex: 1; text-align: left; }\n                .settings-row-value { color: rgba(255,255,255,0.5); font-size: 13px; display: flex; align-items: center; font-weight: 500; }\n                .settings-divider { height: 1px; background: rgba(255,255,255,0.06); margin: 0 20px; }\n\n                /* Action Buttons */\n                .settings-action-btn { width: 100%; padding: 16px; border-radius: 18px; border: none; font-size: 16px; font-weight: 600; cursor: pointer; margin-bottom: 12px; transition: transform 0.2s, background 0.2s; display: flex; justify-content: center; align-items: center; }\n                .settings-action-btn:active { transform: scale(0.97); }\n                .settings-action-btn.neutral { background: rgba(255,255,255,0.1); color: #fff; border: 1px solid rgba(255,255,255,0.1); }\n                .settings-action-btn.neutral:active { background: rgba(255,255,255,0.15); }\n                .settings-action-btn.destructive { background: rgba(255,59,48,0.15); color: #ff3b30; border: 1px solid rgba(255,59,48,0.2); }\n                .settings-action-btn.destructive:active { background: rgba(255,59,48,0.25); border-color: rgba(255,59,48,0.3); }\n\n                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }\n                @keyframes slide-up { from { transform: translateY(100%); } to { transform: translateY(0); } }\n\n                /* Home */\n                .search-pill { display: flex; align-items: center; background: rgba(255,255,255,0.12); backdrop-filter: blur(24px); border: 1px solid rgba(255,255,255,0.1); padding: 14px 20px; border-radius: 20px; }\n                .search-input { flex: 1; border: none; background: transparent; margin-left: 12px; font-size: 16px; color: #fff; outline: none; font-weight: 600; letter-spacing: 0.5px; }\n                .search-input::placeholder { color: rgba(255,255,255,0.5); font-weight: 500; }\n\n                .carousel-container { display: flex; gap: 16px; overflow-x: auto; scrollbar-width: none; padding: 0 24px 8px; -webkit-overflow-scrolling: touch; }\n                .carousel-container::-webkit-scrollbar { display: none; }\n                \n                .radio-card { flex: 0 0 65vw; max-width: 320px; display: flex; flex-direction: column; cursor: pointer; transition: transform 0.2s; touch-action: pan-x; -webkit-touch-callout: none; user-select: none; -webkit-user-select: none; }\n                .radio-card:active { transform: scale(0.96); }\n                .radio-img-wrapper { width: 100%; aspect-ratio: 1; border-radius: 24px; overflow: hidden; position: relative; margin-bottom: 14px; box-shadow: 0 16px 40px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); }\n                .radio-img { width: 100%; height: 100%; object-fit: cover; pointer-events: none; -webkit-touch-callout: none; }\n                .radio-gradient-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 100%); pointer-events: none; }\n                .play-icon-overlay { position: absolute; bottom: 16px; right: 16px; z-index: 2; border-radius: 50%; box-shadow: 0 4px 12px rgba(0,0,0,0.3); pointer-events: none; }\n                \n                .live-pill { position: absolute; top: 16px; left: 16px; background: rgba(0,0,0,0.6); backdrop-filter: blur(12px); padding: 6px 12px; border-radius: 12px; display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 800; color: #fff; border: 1px solid rgba(255,255,255,0.15); }\n                .live-dot { width: 6px; height: 6px; background: #ff3b30; border-radius: 50%; box-shadow: 0 0 8px #ff3b30; animation: blink 1.5s infinite alternate; }\n                \n                .radio-title { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 4px; padding-left: 2px; }\n                .radio-sub { font-size: 12px; color: rgba(255,255,255,0.6); font-weight: 500; padding-left: 2px; }\n\n                .song-row { display: flex; align-items: center; padding: 12px; border-radius: 20px; transition: background 0.2s; cursor: pointer; border: 1px solid transparent; touch-action: pan-y; }\n                .song-row:active { background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-color: rgba(255,255,255,0.05); }\n                .song-cover-small { width: 50px; height: 50px; border-radius: 10px; object-fit: cover; margin-left: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); }\n\n                /* Apple Music Bottom Bar */\n                .apple-music-bottom-bar { position: absolute; bottom: 20px; left: 16px; right: 16px; z-index: 50; padding: 0 8px; touch-action: manipulation; }\n                .am-bar-content { height: 64px; background: rgba(255,255,255,0.18); backdrop-filter: blur(40px) saturate(200%); border: 1px solid rgba(255,255,255,0.2); border-radius: 20px; display: flex; align-items: center; padding: 0 16px 0 8px; box-shadow: 0 16px 40px rgba(0,0,0,0.4); cursor: pointer; }\n                .am-bar-img { width: 44px; height: 44px; border-radius: 12px; object-fit: cover; box-shadow: 0 4px 12px rgba(0,0,0,0.4); margin-right: 16px; transition: filter 0.3s; }\n                .am-bar-img.dimmed { filter: grayscale(100%) opacity(0.5); }\n                .am-bar-title { font-size: 15px; font-weight: 600; color: #fff; text-shadow: 0 1px 4px rgba(0,0,0,0.3); }\n\n                /* ✨ NEW RADIO LIVE SPACE ✨ */\n                .radio-live-space { position: relative; width: 280px; height: 280px; transform: translateY(45px); }\n                \n                .danmaku-layer { position: absolute; inset: -40px; pointer-events: none; overflow: hidden; z-index: 1; mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent); -webkit-mask-image: linear-gradient(90deg, transparent, black 90%, transparent); }\n                .danmaku-text { position: absolute; left: 100%; white-space: nowrap; color: rgba(255,255,255,0.75); font-size: 14px; font-weight: 700; text-shadow: 0 0 12px rgba(255,255,255,0.3), 0 2px 4px rgba(0,0,0,0.6); padding: 4px 12px; animation: danmaku-slide linear infinite; opacity: 0; will-change: transform, opacity; contain: layout style; letter-spacing: 1px; }\n                \n                .floating-live-badge { position: absolute; top: 0px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.4); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.2); padding: 6px 14px; border-radius: 20px; color: rgba(255,255,255,0.8); font-size: 11px; font-weight: 800; letter-spacing: 2px; display: flex; align-items: center; gap: 8px; z-index: 10; box-shadow: 0 4px 10px rgba(0,0,0,0.3); transition: all 0.5s; }\n                .floating-live-badge.glow { background: rgba(0,0,0,0.6); color: #fff; border-color: rgba(255,59,48,0.4); box-shadow: 0 4px 15px rgba(255,59,48,0.2); }\n                \n                .radio-network { position: absolute; inset: 0; z-index: 5; }\n                .speaker-node { position: absolute; display: flex; flex-direction: column; align-items: center; }\n                .guest-node img { width: 56px; height: 56px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(255,255,255,0.3); box-shadow: 0 6px 16px rgba(0,0,0,0.4); opacity: 0.8; }\n                .main-node img { width: 90px; height: 90px; border-radius: 50%; object-fit: cover; border: 3px solid rgba(255,255,255,0.8); box-shadow: 0 10px 30px rgba(0,0,0,0.5); position: relative; z-index: 2; transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); }\n                \n                .pulsing-img { transform: scale(1.05); border-color: #34c759; box-shadow: 0 10px 30px rgba(52,199,89,0.3); }\n                \n                .mic-badge { position: absolute; bottom: -8px; background: rgba(0,0,0,0.6); padding: 3px 8px; border-radius: 10px; font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.7); display: flex; align-items: center; gap: 4px; border: 1px solid rgba(255,255,255,0.1); z-index: 3; transition: all 0.3s; }\n                .mic-badge.active { background: rgba(52,199,89,0.2); border-color: #34c759; color: #34c759; backdrop-filter: blur(8px); }\n                .mic-badge.active svg { color: #34c759; }\n\n                .sound-ripple { position: absolute; inset: -5px; border-radius: 50%; border: 1px solid #34c759; opacity: 0; will-change: transform, opacity; }\n                .r-1 { animation: ripple-expand 2s infinite cubic-bezier(0.1, 0.8, 0.3, 1); }\n                .r-2 { animation: ripple-expand 2s infinite cubic-bezier(0.1, 0.8, 0.3, 1) 0.6s; }\n                .r-3 { animation: ripple-expand 2s infinite cubic-bezier(0.1, 0.8, 0.3, 1) 1.2s; }\n                \n                @keyframes ripple-expand {\n                    0% { transform: scale(1); opacity: 0.6; border-width: 2px; }\n                    100% { transform: scale(1.6); opacity: 0; border-width: 1px; }\n                }\n                \n                @keyframes danmaku-slide {\n                    0% { transform: translateX(50px); opacity: 0; }\n                    10% { opacity: 1; }\n                    80% { opacity: 1; }\n                    100% { transform: translateX(-350px); opacity: 0; }\n                }\n\n                .bobbing { animation: float-bob 4s ease-in-out infinite alternate; will-change: transform; }\n                @keyframes float-bob { 0% { transform: translateY(0); } 100% { transform: translateY(-8px); } }\n\n                .connection-waves { position: absolute; bottom: -20px; left: 0; width: 100%; display: flex; align-items: flex-end; justify-content: center; gap: 5px; height: 30px; opacity: 0.8; }\n                .freq-bar { width: 3px; border-radius: 2px; height: 4px; background: rgba(255,255,255,0.2); will-change: height; }\n                .freq-bar-active { animation: freq-pulse 0.8s ease-in-out infinite alternate; background: rgba(255,255,255,0.8); }\n                @keyframes freq-pulse { 0% { height: 6px; } 100% { height: 28px; } }\n\n                /* NEW Player Vinyl & Tonearm (Based on user ref) */\n                .tonearm-container { position: absolute; top: -30px; left: 50%; transform-origin: 50px 15px; transform: translateX(-50%) rotate(-25deg); transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); z-index: 1; pointer-events: none; margin-left: 20px; }\n                .tonearm-container.playing { transform: translateX(-50%) rotate(5deg); }\n                .tonearm-pivot { position: absolute; top: 0; left: 35px; width: 30px; height: 30px; background: rgba(255,255,255,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 10px rgba(0,0,0,0.2); backdrop-filter: blur(4px); }\n                .tonearm-dot { width: 10px; height: 10px; background: #fff; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.3); }\n                .tonearm-svg { width: 100px; height: 150px; overflow: visible; filter: drop-shadow(4px 10px 8px rgba(0,0,0,0.4)); }\n\n                .vinyl-disc { width: 240px; height: 240px; background: #181818; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 12px 36px rgba(0,0,0,0.6), inset 0 0 0 8px #222, inset 0 0 0 18px #141414, inset 0 0 0 45px #111; position: relative; margin: 0 auto; border: 1px solid rgba(255,255,255,0.05); }\n                .vinyl-disc::before { content: ''; position: absolute; inset: 25px; border: 1px solid rgba(255,255,255,0.08); border-radius: 50%; pointer-events: none; }\n                .vinyl-disc::after { content: ''; position: absolute; inset: 65px; border: 1px solid rgba(255,255,255,0.04); border-radius: 50%; pointer-events: none; }\n                \n                .circular-img { width: 165px; height: 165px; border-radius: 50%; object-fit: cover; box-shadow: 0 0 0 4px #0a0a0a, inset 0 0 20px rgba(0,0,0,0.5); }\n                \n                .spinning { animation: spin 20s linear infinite; }\n                .paused { animation-play-state: paused; }\n\n                /* NEW Transparent Controls matching hand-drawn bg */\n                .scrubber-track { height: 4px; background: rgba(255,255,255,0.2); border-radius: 2px; position: relative; cursor: pointer; }\n                .scrubber-fill { position: absolute; left: 0; top: 0; bottom: 0; background: #fff; border-radius: 2px; box-shadow: 0 0 10px rgba(255,255,255,0.5); transition: width 0.3s linear; }\n                .scrubber-thumb { position: absolute; right: -4px; top: 50%; transform: translateY(-50%); width: 8px; height: 8px; background: #fff; border-radius: 50%; opacity: 1; transition: transform 0.1s; }\n                .scrubber-track:active .scrubber-thumb { transform: translateY(-50%) scale(1.5); }\n\n                .control-icon-btn { background: none; border: none; padding: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; touch-action: manipulation; transition: transform 0.15s; }\n                .control-icon-btn:active { transform: scale(0.85); }\n                \n                /* Replaces massive solid bg button with elegant transparent icon */\n                .play-btn-transparent { background: none; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; touch-action: manipulation; transition: transform 0.15s; padding: 4px; }\n                .play-btn-transparent:active { transform: scale(0.85); }\n\n                @keyframes blink { 0% { opacity: 1; } 100% { opacity: 0.3; } }\n                @keyframes spin { 100% { transform: rotate(360deg); } }\n                @keyframes sound-wave { 0% { height: 4px; } 100% { height: 32px; } }\n\n                /* === 一起聽 — 播放器頭像區域 === */\n                .lt-avatars-section { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 0 24px; top: calc(var(--nuo-safe-top) + 68px); pointer-events: none; }\n                .lt-avatars-row { display: flex; align-items: center; gap: 16px; }\n                .lt-avatar-wrapper { width: 56px; height: 56px; border-radius: 50%; overflow: hidden; border: 2px solid rgba(255,255,255,0.5); box-shadow: 0 2px 12px rgba(0,0,0,0.3); }\n                .lt-avatar-img { width: 100%; height: 100%; object-fit: cover; }\n                .lt-avatar-placeholder { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.15); color: #fff; font-size: 18px; font-weight: 700; }\n                .lt-duration-text { font-size: 12px; color: rgba(255,255,255,0.7); font-weight: 500; letter-spacing: 0.5px; }\n\n                /* 一起聽角色選擇列表 */\n                .lt-char-pick-row { display: flex; align-items: center; gap: 14px; padding: 12px 16px; border-radius: 14px; cursor: pointer; transition: background 0.2s; }\n                .lt-char-pick-row:active { background: rgba(255,255,255,0.1); }\n                .lt-char-pick-avatar { width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(255,255,255,0.15); }\n                "
    })]
  });
  var Sr;
  var Cr;
};
export { Gn as default, Fn as getListenTogetherBroadcastData };