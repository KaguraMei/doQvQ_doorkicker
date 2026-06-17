const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["./assets/native-pet-CTNtZgMA.js", "./assets/vendor-react-B2VXkTUV.js", "./assets/vendor-dexie-KLdnSHz2.js", "./assets/vendor-jszip-DU-5YDGO.js", "./assets/vendor-lucide-DBv09HTV.js", "./assets/native-pet-D9YoqRtr.css", "./assets/main-BO9xa-SQ.js", "./assets/modulepreload-polyfill-YP0FEG5d.js", "./assets/vendor-supabase-Bcpm_8qV.js", "./assets/main-C4gkqfD0.css", "./assets/NotificationBar-y-kP9VHv.css", "./assets/vendor-fonts-BglBY6By.css", "./assets/layoutDiagOverlay-CxzWpjbF.js", "./assets/workerSyncService-Bi45Y3S-.js"]) => i.map(i => d[i]);
import { d as e, _ as t, c as a, a as i, j as o, b as n, G as s, Q as l, b8 as r, A as c, i as d, a2 as g, b9 as p, aj as u, y as h, h as m, l as b, aB as x, ba as y, n as f, aE as v, bb as w, a_ as S, bc as j, bd as k, be as C, bf as _, bg as A, bh as I, bi as P, aC as $, bj as z, bk as E } from "./native-pet-CTNtZgMA.js";
import { r as B, j as T, b as D, R as F } from "./vendor-react-B2VXkTUV.js";
import { u as R, r as N, c as M, L as G, A as O, a as H, b as U, e as W, D as L, d as K, f as J, g as V, j as q, k as Y, l as X, m as Q, n as Z } from "./main-BO9xa-SQ.js";
import { F as ee } from "./FrostedGlassBackground-DQPbupYU.js";
import { measureTableSizes as te, measureImageStore as ae, scanGhostUsers as ie, recoverGhostUser as oe, dedupeMomentImages as ne } from "./indexedDBDiagnostics-CN6kNlvG.js";
import { x as se, a7 as le, s as re, a8 as ce, a9 as de, T as ge, aa as pe, ab as ue, ac as he, ad as me, ae as be, L as xe, af as ye, ag as fe, I as ve, ah as we, ai as Se, aj as je, ak as ke, al as Ce, am as _e, A as Ae, an as Ie, ao as Pe, X as $e, ap as ze, P as Ee, a2 as Be, _ as Te, V as De, aq as Fe, ar as Re, U as Ne, u as Me } from "./vendor-lucide-DBv09HTV.js";
import "./vendor-dexie-KLdnSHz2.js";
import "./vendor-jszip-DU-5YDGO.js";
import "./modulepreload-polyfill-YP0FEG5d.js";
/* empty css                        */
import "./vendor-supabase-Bcpm_8qV.js";
/* empty css                     */
const Ge = {
  active: false,
  mode: null,
  phase: "",
  current: 0,
  total: 0,
  detail: ""
};
const Oe = ({
  progress: e,
  t: t
}) => {
  if (!(e == null ? undefined : e.active)) {
    return null;
  }
  const {
    mode: a,
    phase: i,
    current: o,
    total: n,
    detail: s
  } = e;
  const l = n > 0 ? Math.min(100, Math.floor(o / n * 100)) : null;
  const r = t(a === "import" ? "progressImportTitle" : "progressExportTitle");
  return T.jsxs("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.55)",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)",
      zIndex: 99990,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px"
    },
    children: [T.jsxs("div", {
      style: {
        background: "var(--card-bg, #fff)",
        color: "var(--text-primary, #222)",
        borderRadius: "16px",
        padding: "24px 22px",
        width: "100%",
        maxWidth: "360px",
        boxShadow: "0 12px 40px rgba(0,0,0,0.25)"
      },
      children: [T.jsx("div", {
        style: {
          fontSize: "17px",
          fontWeight: 600,
          marginBottom: "6px",
          textAlign: "center"
        },
        children: r
      }), T.jsx("div", {
        style: {
          fontSize: "13px",
          opacity: 0.75,
          textAlign: "center",
          marginBottom: "16px",
          minHeight: "18px"
        },
        children: i
      }), T.jsx("div", {
        style: {
          width: "100%",
          height: "8px",
          background: "rgba(127,127,127,0.18)",
          borderRadius: "999px",
          overflow: "hidden",
          marginBottom: "10px"
        },
        children: T.jsx("div", {
          style: {
            height: "100%",
            width: l == null ? "35%" : `${l}%`,
            background: "linear-gradient(90deg, #6aa8ff, #4c78ff)",
            borderRadius: "999px",
            transition: "width 180ms ease",
            animation: l == null ? "nuojijiProgressIndeterminate 1.4s ease-in-out infinite" : "none"
          }
        })
      }), T.jsxs("div", {
        style: {
          fontSize: "12px",
          opacity: 0.65,
          textAlign: "center",
          minHeight: "16px"
        },
        children: [l != null ? `${l}%` : "", n > 0 ? `  (${o}/${n})` : ""]
      }), s ? T.jsx("div", {
        style: {
          fontSize: "12px",
          opacity: 0.7,
          textAlign: "center",
          marginTop: "6px",
          wordBreak: "break-all",
          maxHeight: "36px",
          overflow: "hidden"
        },
        children: s
      }) : null, T.jsx("div", {
        style: {
          fontSize: "11px",
          opacity: 0.5,
          textAlign: "center",
          marginTop: "14px"
        },
        children: t("progressDoNotClose")
      })]
    }), T.jsx("style", {
      children: "\n                @keyframes nuojijiProgressIndeterminate {\n                    0% { transform: translateX(-100%); }\n                    50% { transform: translateX(50%); }\n                    100% { transform: translateX(250%); }\n                }\n            "
    })]
  });
};
const He = 34;
const Ue = 123;
const We = 125;
const Le = 93;
const Ke = 44;
const Je = e => e === 32 || e === 9 || e === 10 || e === 13;
const Ve = (e, t, a) => new TextDecoder("utf-8").decode(e.subarray(t, a));
class qe {
  constructor(e = 256) {
    this.buf = new Uint8Array(e);
    this.len = 0;
  }
  push(e) {
    if (this.len >= this.buf.length) {
      const e = this.buf.length < 1048576 ? this.buf.length * 2 : Math.floor(this.buf.length * 1.5);
      const t = new Uint8Array(e);
      t.set(this.buf);
      this.buf = t;
    }
    this.buf[this.len++] = e;
  }
  reset() {
    this.len = 0;
    if (this.buf.length > 65536) {
      this.buf = new Uint8Array(256);
    }
  }
  toUint8Array() {
    return this.buf.subarray(0, this.len);
  }
  decodeString() {
    return new TextDecoder("utf-8").decode(this.buf.subarray(0, this.len));
  }
}
class Ye {
  constructor(e, t) {
    this.knownTables = e instanceof Set ? e : new Set(e);
    this.handlers = t || {};
    this.phase = 0;
    this.headerChunks = [];
    this.headerLen = 0;
    this.MAX_HEADER_BYTES = 104857600;
    this.subState = 0;
    this.escape = false;
    this.stack = [];
    this.currentKeyBytes = new qe(64);
    this.lastKeyAtCurrentObj = null;
    this.tableSubState = 0;
    this.tableKeyBuf = new qe(64);
    this.currentTableName = null;
    this.captureCurrentTable = false;
    this.skipDepth = 0;
    this.rowBuf = new qe(1024);
    this.rowDepth = 0;
    this.rowInString = false;
    this.rowEscape = false;
    this.rowOversized = false;
    this.skippedRows = 0;
    this.MAX_ROW_BYTES = 209715200;
    this.footerChunks = [];
    this.footerLen = 0;
  }
  feedSync(e) {
    const t = [];
    const a = e.length;
    let i = 0;
    while (i < a) {
      switch (this.phase) {
        case 0:
          i = this.processHeaderRange(e, i, a);
          break;
        case 1:
          i = this.processTablesRange(e, i, a, t);
          break;
        case 2:
          this.footerChunks.push(e.subarray(i));
          this.footerLen += a - i;
          i = a;
          break;
        case 3:
          return t;
      }
    }
    return t;
  }
  end() {
    if (this.phase === 0) {
      throw new Error("Backup stream 結束時仍在 HEADER 階段（沒看到 structuredDB）");
    }
    if (this.phase === 1) {
      throw new Error("Backup stream 結束時仍在 TABLES 階段（structuredDB 沒正常關閉）");
    }
    let e = Xe(this.headerChunks, this.headerLen);
    this.headerChunks = null;
    let t = Xe(this.footerChunks, this.footerLen);
    this.footerChunks = null;
    const a = e.length + 2 + t.length;
    let i = new Uint8Array(a);
    i.set(e, 0);
    i[e.length] = Ue;
    i[e.length + 1] = We;
    i.set(t, e.length + 2);
    e = null;
    t = null;
    let o = Ve(i, 0, i.length);
    i = null;
    const n = JSON.parse(o);
    o = null;
    if (n.data && n.data.structuredDB) {
      n.data.structuredDB = {};
    }
    this.phase = 3;
    return n;
  }
  processHeaderRange(e, t, a) {
    let i = t;
    const o = i;
    while (i < a) {
      const t = e[i];
      switch (this.subState) {
        case 0:
        case 4:
        case 1:
        case 7:
          if (Je(t)) {
            i++;
            break;
          }
          if (t === He) {
            const e = this.stack[this.stack.length - 1];
            if (e && e.type === "O" && (this.subState === 1 || this.subState === 0 && this.afterCommaInObject())) {
              this.subState = 2;
              this.currentKeyBytes.reset();
            } else {
              this.subState = 6;
            }
            i++;
            break;
          }
          if (t === Ue) {
            this.stack.push({
              type: "O",
              justAfterComma: false
            });
            const t = this.lastKeyAtCurrentObj;
            this.stack[this.stack.length - 1].enteredByKey = t;
            this.lastKeyAtCurrentObj = null;
            this.subState = 1;
            if (this.stack.length >= 2) {
              const t = this.stack[this.stack.length - 1];
              const a = this.stack[this.stack.length - 2];
              if (t.enteredByKey === "structuredDB" && a.enteredByKey === "data") {
                this.flushHeaderRange(e, o, i);
                this.phase = 1;
                this.tableSubState = 0;
                return i + 1;
              }
            }
            i++;
            break;
          }
          if (t === 91) {
            this.stack.push({
              type: "A",
              justAfterComma: false
            });
            this.subState = 7;
            i++;
            break;
          }
          if (t === We) {
            if (this.stack.length === 0) {
              i++;
              break;
            }
            this.stack.pop();
            this.afterValuePopped();
            i++;
            break;
          }
          if (t === Le) {
            if (this.stack.length === 0) {
              i++;
              break;
            }
            this.stack.pop();
            this.afterValuePopped();
            i++;
            break;
          }
          this.subState = 8;
          i++;
          break;
        case 2:
          if (this.escape) {
            this.currentKeyBytes.push(t);
            this.escape = false;
            i++;
            break;
          }
          if (t === 92) {
            this.currentKeyBytes.push(t);
            this.escape = true;
            i++;
            break;
          }
          if (t === He) {
            const e = JSON.parse("\"" + this.currentKeyBytes.decodeString() + "\"");
            this.lastKeyAtCurrentObj = e;
            this.subState = 3;
            this.currentKeyBytes.reset();
            i++;
            break;
          }
          this.currentKeyBytes.push(t);
          i++;
          break;
        case 3:
          if (Je(t)) {
            i++;
            break;
          }
          if (t === 58) {
            this.subState = 4;
            i++;
            break;
          }
          i++;
          break;
        case 6:
          if (this.escape) {
            this.escape = false;
            i++;
            break;
          }
          if (t === 92) {
            this.escape = true;
            i++;
            break;
          }
          if (t === He) {
            this.subState = 5;
            i++;
            break;
          }
          i++;
          break;
        case 8:
          if (t === Ke || t === We || t === Le || Je(t)) {
            this.subState = 5;
            break;
          }
          i++;
          break;
        case 5:
          if (Je(t)) {
            i++;
            break;
          }
          if (t === Ke) {
            const e = this.stack[this.stack.length - 1];
            if (e && e.type === "O") {
              e.justAfterComma = true;
              this.subState = 0;
            } else {
              this.subState = 0;
            }
            i++;
            break;
          }
          if (t === We) {
            if (this.stack.length === 0) {
              i++;
              break;
            }
            this.stack.pop();
            this.afterValuePopped();
            i++;
            break;
          }
          if (t === Le) {
            if (this.stack.length === 0) {
              i++;
              break;
            }
            this.stack.pop();
            this.afterValuePopped();
            i++;
            break;
          }
          i++;
      }
    }
    this.flushHeaderRange(e, o, a);
    return a;
  }
  afterCommaInObject() {
    const e = this.stack[this.stack.length - 1];
    return !!e && e.type === "O" && !!e.justAfterComma && !(e.justAfterComma = false, 0);
  }
  afterValuePopped() {
    this.stack.length;
    this.subState = 5;
    this.lastKeyAtCurrentObj = null;
  }
  _emitRow(e) {
    if (this.rowOversized) {
      this.skippedRows++;
      console.warn(`[streamReadBackup] 表 ${this.currentTableName} 有一筆 row 超過 ${(this.MAX_ROW_BYTES / 1024 / 1024).toFixed(0)}MB，已跳過`);
      this.rowBuf.reset();
      this.rowDepth = 0;
      this.rowInString = false;
      this.rowEscape = false;
      this.rowOversized = false;
      return;
    }
    const t = this.rowBuf.toUint8Array();
    const a = new Uint8Array(t.length);
    a.set(t);
    this.rowBuf.reset();
    this.rowDepth = 0;
    this.rowInString = false;
    this.rowEscape = false;
    e.push({
      type: "row",
      tableName: this.currentTableName,
      rowBytes: a,
      _isUnknown: !this.captureCurrentTable
    });
  }
  flushHeaderRange(e, t, a) {
    if (!(a <= t)) {
      if (this.headerLen + (a - t) > this.MAX_HEADER_BYTES) {
        const e = (this.MAX_HEADER_BYTES / 1024 / 1024).toFixed(0);
        throw new Error(`備份檔頭超過 ${e}MB（localStorage 內含過大殘留資料如桌寵/壁紙/語音快取/舊版未遷移字段），請先在來源裝置清理大型快取後重新匯出`);
      }
      this.headerChunks.push(e.subarray(t, a));
      this.headerLen += a - t;
    }
  }
  processTablesRange(e, t, a, i) {
    let o = t;
    while (o < a) {
      const t = e[o];
      switch (this.tableSubState) {
        case 0:
          if (Je(t) || t === Ke) {
            o++;
            break;
          }
          if (t === We) {
            this.phase = 2;
            return o + 1;
          }
          if (t === He) {
            this.tableSubState = 1;
            this.tableKeyBuf.reset();
            o++;
            break;
          }
          o++;
          break;
        case 1:
          if (this.escape) {
            this.escape = false;
            this.tableKeyBuf.push(t);
            o++;
            break;
          }
          if (t === 92) {
            this.escape = true;
            this.tableKeyBuf.push(t);
            o++;
            break;
          }
          if (t === He) {
            this.currentTableName = JSON.parse("\"" + this.tableKeyBuf.decodeString() + "\"");
            this.captureCurrentTable = this.knownTables.has(this.currentTableName);
            this.tableKeyBuf.reset();
            this.tableSubState = 2;
            o++;
            break;
          }
          this.tableKeyBuf.push(t);
          o++;
          break;
        case 2:
          if (Je(t)) {
            o++;
            break;
          }
          if (t === 58) {
            this.tableSubState = 3;
            o++;
            break;
          }
          o++;
          break;
        case 3:
          if (Je(t)) {
            o++;
            break;
          }
          if (t === 91) {
            this.tableSubState = 4;
            o++;
            break;
          }
          this.tableSubState = 8;
          this.skipDepth = 0;
          this.rowInString = false;
          this.rowEscape = false;
          break;
        case 8:
          if (this.rowEscape) {
            this.rowEscape = false;
            o++;
            break;
          }
          if (this.rowInString) {
            if (t === 92) {
              this.rowEscape = true;
            } else if (t === He) {
              this.rowInString = false;
            }
            o++;
            break;
          }
          if (t === He) {
            this.rowInString = true;
            o++;
            break;
          }
          if (t === Ue || t === 91) {
            this.skipDepth++;
            o++;
            break;
          }
          if (t === We || t === Le) {
            if (this.skipDepth === 0) {
              o++;
              break;
            }
            this.skipDepth--;
            if (this.skipDepth === 0) {
              this.tableSubState = 7;
            }
            o++;
            break;
          }
          if (this.skipDepth === 0 && (t === Ke || Je(t))) {
            this.tableSubState = 7;
            break;
          }
          o++;
          break;
        case 4:
          if (Je(t) || t === Ke) {
            o++;
            break;
          }
          if (t === Le) {
            this.tableSubState = 7;
            o++;
            break;
          }
          this.tableSubState = 5;
          this.rowBuf.reset();
          this.rowDepth = 0;
          this.rowInString = false;
          this.rowEscape = false;
          this.rowOversized = false;
          break;
        case 5:
          {
            const e = !this.rowOversized;
            if (this.rowEscape) {
              if (e) {
                this.rowBuf.push(t);
              }
              this.rowEscape = false;
              o++;
              break;
            }
            if (this.rowInString) {
              if (e) {
                this.rowBuf.push(t);
              }
              if (t === 92) {
                this.rowEscape = true;
              } else if (t === He) {
                this.rowInString = false;
              }
              o++;
              break;
            }
            if (this.rowDepth === 0 && (this.rowBuf.len > 0 || this.rowOversized) && (t === Ke || t === Le || Je(t))) {
              this._emitRow(i);
              this.tableSubState = 6;
              break;
            }
            if (e && this.rowBuf.len >= this.MAX_ROW_BYTES) {
              this.rowOversized = true;
              this.rowBuf.reset();
            }
            if (!this.rowOversized) {
              this.rowBuf.push(t);
            }
            if (t === He) {
              this.rowInString = true;
            } else if (t === Ue || t === 91) {
              this.rowDepth++;
            } else if (t === We || t === Le) {
              this.rowDepth--;
              if (this.rowDepth === 0) {
                this._emitRow(i);
                this.tableSubState = 6;
              }
            }
            o++;
            break;
          }
        case 6:
          if (Je(t)) {
            o++;
            break;
          }
          if (t === Ke) {
            this.tableSubState = 4;
            o++;
            break;
          }
          if (t === Le) {
            this.tableSubState = 7;
            o++;
            break;
          }
          o++;
          break;
        case 7:
          if (Je(t)) {
            o++;
            break;
          }
          if (t === Ke) {
            this.tableSubState = 0;
            o++;
            break;
          }
          if (t === We) {
            this.phase = 2;
            return o + 1;
          }
          o++;
      }
    }
    return a;
  }
}
function Xe(e, t) {
  const a = new Uint8Array(t);
  let i = 0;
  for (const o of e) {
    a.set(o, i);
    i += o.length;
  }
  return a;
}
async function Qe(e, t, a) {
  if (!a || typeof a.onRow != "function") {
    throw new Error("handlers.onRow is required");
  }
  const i = new Ye(t, a);
  const o = e.getReader();
  let n = 0;
  let s = 0;
  let l = Date.now();
  try {
    while (true) {
      const {
        done: e,
        value: t
      } = await o.read();
      if (e) {
        break;
      }
      n += t.length;
      if (t.length > 262144 || Date.now() - l > 16) {
        await new Promise(e => setTimeout(e, 0));
        l = Date.now();
      }
      const r = i.feedSync(t);
      for (const i of r) {
        if (i.type === "row") {
          const e = JSON.parse(Ve(i.rowBytes, 0, i.rowBytes.length));
          await a.onRow(i.tableName, e, i._isUnknown === true);
          s++;
          if (Date.now() - l > 16) {
            await new Promise(e => setTimeout(e, 0));
            l = Date.now();
          }
        }
      }
      if (a.onProgress) {
        a.onProgress(n);
      }
      if (Date.now() - l > 16) {
        await new Promise(e => setTimeout(e, 0));
        l = Date.now();
      }
    }
  } finally {
    try {
      o.releaseLock();
    } catch (r) {}
  }
  return {
    backup: i.end(),
    totalRows: s,
    skippedRows: i.skippedRows || 0
  };
}
async function Ze(e, t, a = 16384) {
  const i = e.stream();
  const o = (t ? i.pipeThrough(new DecompressionStream("gzip")) : i).getReader();
  const n = [];
  let s = 0;
  try {
    while (s < a) {
      const {
        done: e,
        value: t
      } = await o.read();
      if (e) {
        break;
      }
      n.push(t);
      s += t.length;
    }
  } finally {
    try {
      await o.cancel();
    } catch (m) {}
  }
  const l = new Uint8Array(s);
  let r = 0;
  for (const b of n) {
    l.set(b, r);
    r += b.length;
  }
  const c = new TextDecoder("utf-8").decode(l);
  const d = {
    version: undefined,
    timestamp: undefined,
    multiPart: null
  };
  const g = e => {
    try {
      return JSON.parse(e);
    } catch (m) {
      return e;
    }
  };
  const p = c.match(/"version"\s*:\s*(\d+|"[^"]*")/);
  if (p) {
    d.version = g(p[1]);
  }
  const u = c.match(/"timestamp"\s*:\s*(\d+|"[^"]*")/);
  if (u) {
    d.timestamp = g(u[1]);
  }
  const h = c.match(/"multiPart"\s*:\s*\{([^}]*)\}/);
  if (h) {
    try {
      d.multiPart = JSON.parse("{" + h[1] + "}");
    } catch (m) {}
  }
  return d;
}
async function et(e) {
  if (!e || e.size < 2) {
    return false;
  }
  const t = new Uint8Array(await e.slice(0, 2).arrayBuffer());
  return t.length >= 2 && t[0] === 31 && t[1] === 139;
}
function tt() {
  return {
    gzipDecompress: typeof DecompressionStream == "function",
    blobStream: typeof Blob != "undefined" && typeof Blob.prototype.stream == "function"
  };
}
async function at(a = "transfer") {
  let i = null;
  try {
    if ("wakeLock" in navigator) {
      i = await navigator.wakeLock.request("screen");
      console.log(`[nativeTransferGuard] wakeLock acquired for ${a}`);
    }
  } catch (s) {
    console.warn("[nativeTransferGuard] wakeLock failed:", s == null ? undefined : s.message);
  }
  let o = null;
  if (e()) {
    try {
      const {
        App: e
      } = await t(async () => {
        const {
          App: e
        } = await import("./native-pet-CTNtZgMA.js").then(e => e.cM);
        return {
          App: e
        };
      }, __vite__mapDeps([0, 1, 2, 3, 4, 5]));
      const i = await e.addListener("appStateChange", e => {
        if (!(e == null ? undefined : e.isActive)) {
          console.warn(`[nativeTransferGuard] ⚠️ ${a} 期间 APK 切到后台 — 可能被系统杀`);
        }
      });
      o = () => {
        try {
          i.remove();
        } catch (e) {}
      };
    } catch (l) {}
  }
  let n = false;
  return {
    release: async () => {
      if (!n) {
        n = true;
        if (i) {
          try {
            await i.release();
          } catch (l) {}
          i = null;
        }
        if (o) {
          try {
            o();
          } catch (l) {}
          o = null;
        }
        console.log(`[nativeTransferGuard] released for ${a}`);
      }
    }
  };
}
const it = ["api.pisces.ink", "aiapi.qzz.io", "api520.pro", "api521.pro", "api522.pro", "api.yousebaby.com"];
const ot = e => {
  if (!e) {
    return false;
  }
  try {
    const t = new URL(e.startsWith("http") ? e : `https://${e}`).hostname.toLowerCase();
    return it.some(e => t === e || t.endsWith("." + e));
  } catch {
    const t = e.toLowerCase();
    return it.some(e => t.includes(e));
  }
};
const nt = 67108864;
const st = ["characters", "worldBooks", "globalSettings", "stickers", "kaomojis", "users", "userState", "userPosts", "chatSettings", "messages", "favorites", "memory", "summaryEntries", "callLogs", "roleStickers", "tmSessions", "tmStories", "multiSceneSessions", "multiSceneStories", "multiSceneCastSettings", "multiSceneSessionSettings", "multiSceneSummaries", "multiSceneSessionSummaries", "customNoises", "customBgm", "flashMoments", "groupSettings", "userLinks", "userMessages", "ttsAudio", "forumData", "calendarData", "groupChats", "xinsheng", "pomodoroSessions", "couplesData", "imageStore", "stickerStore", "quickReplies", "goingOutState", "goingOutAreas", "mapRasterCache", "customGames", "customWidgetTemplates", "customWidgetState", "wallpapers", "whiteDogData", "isekaiSaves", "pomodoroData", "regexRules", "mcpServers", "thinkingStore", "commitments", "characterLifeState", "chikanPhoneSkins", "healthEntries", "healthProfile", "homelandState", "_migration"];
const lt = {
  app_settings: ["globalSettings", "users", "userState", "regexRules", "_migration"],
  ai_settings: ["globalSettings", "mcpServers"],
  characters: ["characters", "calendarData", "imageStore"],
  world_books: ["worldBooks"],
  chat_history: ["messages", "favorites", "callLogs", "tmSessions", "tmStories", "multiSceneSessions", "multiSceneStories", "multiSceneCastSettings", "multiSceneSessionSettings", "multiSceneSummaries", "multiSceneSessionSummaries", "userMessages", "ttsAudio", "imageStore", "stickerStore", "thinkingStore"],
  white_dog: ["globalSettings", "whiteDogData"],
  chat_settings: ["chatSettings", "xinsheng", "quickReplies", "commitments", "characterLifeState"],
  group_chat: ["groupChats", "groupSettings", "imageStore"],
  memories: ["memory", "summaryEntries"],
  appearance: ["globalSettings", "customWidgetTemplates", "customWidgetState", "wallpapers", "chikanPhoneSkins", "imageStore"],
  moments: ["userPosts", "userLinks", "imageStore"],
  stickers: ["stickers", "kaomojis", "roleStickers", "stickerStore", "imageStore"],
  forum: ["forumData"],
  calendar: ["calendarData"],
  games: ["customGames", "isekaiSaves"],
  pomodoro: ["customNoises", "flashMoments", "pomodoroSessions", "pomodoroData", "imageStore"],
  couples: ["couplesData", "imageStore"],
  music: ["globalSettings"],
  goingOut: ["goingOutAreas", "goingOutState", "mapRasterCache", "customBgm", "imageStore"],
  health: ["healthEntries", "healthProfile"],
  homeland: ["homelandState", "imageStore"]
};
const rt = new Set(["globalSettings", "calendarData", "imageStore", "stickerStore"]);
const ct = new Set(["app_settings", "chat_history", "chat_settings", "group_chat", "memories", "white_dog", "moments", "calendar", "couples", "goingOut", "health"]);
const dt = new Set(["users", "userState", "userPosts", "chatSettings", "messages", "memory", "summaryEntries", "callLogs", "tmSessions", "tmStories", "multiSceneSessions", "multiSceneStories", "multiSceneCastSettings", "multiSceneSessionSettings", "multiSceneSummaries", "multiSceneSessionSummaries", "groupSettings", "userLinks", "userMessages", "calendarData", "groupChats", "xinsheng", "couplesData", "goingOutState", "commitments", "characterLifeState", "healthEntries", "healthProfile", "homelandState"]);
const gt = (e, t, a = "") => {
  if (e == null) {
    return;
  }
  const i = typeof e;
  if (i !== "number") {
    if (i !== "string") {
      if (i === "object") {
        if (Array.isArray(e)) {
          for (const o of e) {
            gt(o, t, a);
          }
        } else {
          for (const o in e) {
            gt(e[o], t, o);
          }
        }
      }
    } else if (/ref/i.test(a) && /^\d{1,15}$/.test(e)) {
      const a = Number(e);
      if (a > 0) {
        t.add(a);
      }
    }
  } else if (/ref/i.test(a) && Number.isInteger(e) && e > 0) {
    t.add(e);
  }
};
const pt = (e, t, a, i = "", o = "") => {
  if (e == null || t.size === 0) {
    return;
  }
  const n = typeof e;
  if (n !== "number") {
    if (n === "object") {
      if (Array.isArray(e)) {
        for (const s of e) {
          pt(s, t, a, i, o);
        }
      } else {
        for (const s in e) {
          pt(e[s], t, a, s, o);
        }
      }
    }
  } else if (!/ref/i.test(i) && Number.isInteger(e) && e > 0 && t.has(e)) {
    a.add(`${o}.${i}=${e}`);
  }
};
const ut = new Set(["multiSceneSummaries"]);
const ht = async (e, t) => {
  if (e === "multiSceneSummaries") {
    const e = await m.table("multiSceneSessions").toArray().catch(() => []);
    const a = P(t, e);
    if (a.length > 0) {
      await m.table("multiSceneSessionSummaries").bulkPut(a);
    }
    return a.length;
  }
  await m.table(e).bulkPut(t);
  return t.length;
};
const mt = e => {
  const t = String(e || "");
  if (/Connection to Indexed Database server lost|DatabaseClosedError|database is closed/i.test(t)) {
    return "資料庫連線中斷（iOS 大檔匯入常見），刷新後重新匯入即可補上";
  }
  if (/QuotaExceeded|quota/i.test(t)) {
    return "儲存空間不足";
  }
  const a = t.split("\n")[0];
  if (a.length > 80) {
    return a.slice(0, 80) + "…";
  } else {
    return a;
  }
};
const bt = ["nuojiji_message_history_", "nuojiji_active_chats_", "nuojiji_pinned_chats_", "nuojiji_unread_chats_", "nuojiji_character_notes_", "nuojiji_chat_wallpaper_", "nuojiji_user_note_", "nuojiji_user_posts_", "nuojiji_liked_notes_", "nuojiji_moments_cover_", "nuojiji_group_chats_", "group_settings_", "xinsheng_", "chat_settings_", "chat_settings_v2_", "chat_theme_character_", "chat_theme_user_", "episodeSummary_", "summaryHistory_", "userFacts_", "whitedog_s_", "whitedog_history_", "calendar_events_user_", "calendar_todos_user_", "calendar_moods_", "calendar_markers_", "calendar_enabledCountries_", "calendar_customHolidays_", "calendar_monthly_message_", "calendar_unlockedAchievements_"];
const xt = {
  app_settings: ["appVersion", "nuojiji_theme", "language", "speechService", "voiceStripEmojiTags", "lockScreenEnabled", "lockPasswordEnabled", "lockPassword", "appCustomizations", /^nuojiji_profile_users$/, /^nuojiji_current_profile_user_id$/, /^nuojiji_active_desktop_pet$/, /^nuojiji_floating_console_position$/, "backgroundModeEnabled", "nuojiji_bg_activity_checks", "nuojiji_browser_notifications_enabled", "nuojiji_push_subscribed", "nuojiji_notif_privacy_enabled", "nuojiji_previous_version", "nuojiji_skip_password_change", "nuojiji_login_logs"],
  ai_settings: [/^api_settings$/, /^api_presets$/, /^apiSettings$/, /^apiPresets$/],
  appearance: ["isDarkMode", "statusBarVisible", "showAppLabels", /^homeWallpaper$/, /^darkMode$/, /^showStatusBar$/, /^textColor$/, /^iconColor$/, /^iconColorIntensity$/, /^lockScreenWallpaper$/, /^lockScreenTextColor$/, /^lockScreenTextSize$/, /^savedFonts$/, /^activeFontId$/, /^appFont$/, /^customFont$/, /^homeScreenLayout$/, "islandDecoHanging", "islandDecoFloating", "islandDecoPhotoRight", "islandDecoStatusPhoto", "islandDecorationType", "islandStatusText", "dynamicIslandAlwaysOn", "dynamicIslandStyle", "activePresetId", "appearancePresets", "disableAppTransition", "fullscreenEnabled", /^nuojiji_haptics_enabled$/, /^nuojiji_status_bar_style$/],
  characters: [/^characters$/, /^character_/, /^nuojiji_roster$/, "nuojiji_roster_settings"],
  world_books: [/^world_book$/, /^worldBook$/, /^world_books$/, /^world_books_/, /^world_book_/, /^worldBooks$/],
  memories: [/^episodeSummary_/, /^summaryHistory_/, /^userFacts_/],
  chat_history: [/^nuojiji_message_history_/, /^nuojiji_active_chats_/, /^nuojiji_pinned_chats_/, /^nuojiji_unread_chats_/, /^nuojiji_character_notes_/, /^tm_last_summarized_/, "tm_last_charId", "tm_last_userId"],
  chat_settings: [/^chat_settings_/, /^chat_settings_v2_/, /^chat_custom_theme$/, /^chat_saved_themes$/, /^chat_theme_character_/, /^chat_theme_user_/, /^messaging_app_custom_theme$/, /^messaging_app_saved_themes$/, /^messaging_app_active_preset_id$/, /^notif_bar_custom_theme$/, /^notif_bar_saved_themes$/, /^notif_bar_active_preset_id$/, /^notif_bar_per_target_map$/, /^forum_custom_theme$/, /^forum_saved_themes$/, /^forum_active_preset_id$/, /^nuojiji_chat_wallpaper_/, /^xinsheng_/, /^xinsheng_presets$/, "tm_no_animations", /^tm_theme_char_/, /^tm_settings_/, /^tm_story_time_/, "tm_css_presets", "tm_img_prompt_api", /^_tc_/, "incomingCallSoundData", "incomingCallSoundEnabled", "outgoingCallSoundData", "outgoingCallSoundEnabled", "notificationSoundData", "notificationSoundEnabled", "userMessageSoundData", "userMessageSoundEnabled", "onlyLastMessageSound", "callAutoPlayEnabled", "callAutoSendEnabled", "callBubbleBreakTimeout", "callSilenceTimeout", "videoCallInputMode", "chat_theme_saved_expanded", "chat_wallpaper_library_expanded", "chat_settings_section_order"],
  group_chat: [/^nuojiji_group_chats_/, /^group_settings_/, /^group_last_summarized_/],
  moments: [/^nuojiji_user_posts_/, /^nuojiji_liked_notes_/, /^nuojiji_moments_cover_/],
  stickers: [/^nuojiji_user_kaomojis$/, /^nuojiji_kaomoji_categories$/, /^nuojiji_user_stickers$/, /^nuojiji_sticker_categories$/, /^nuojiji_role_stickers$/, "nuojiji_fav_cats"],
  forum: [],
  calendar: [/^calendar_events_user_/, /^calendar_events_character$/, /^calendar_todos_user_/, /^calendar_todos_character$/, /^calendar_moods_/, /^calendar_markers_/, /^calendar_weekStartsOn_/, /^calendar_enabledCountries_/, /^calendar_customHolidays_/, /^calendar_character_statuses$/, /^calendar_bg_image$/, /^calendar_monthly_message_/, /^calendar_unlockedAchievements_/, /^calendar_gen_template_/, /^calendar_autogen_/],
  white_dog: [/^whitedog_s_/, "whitedog_session", "whitedog_history_all", "whitedog_history_all_idb", /^whitedog_history_/, "wd_voiceGen", "wd_customCover"],
  games: [/^custom_psych_tests$/, "truth_or_dare_state", "werewolf_v2_state", "custom_game_play_id", "custom_test_action", "pending_game_result", "pending_qa_share", "pending_test_bubble", "nuojiji_tavern_unlocked"],
  pomodoro: [/^pomo_/, "nuojiji_alarms"],
  couples: [/^nuojiji_couples_/, "pending_couples_invite", "date_invite"],
  goingOut: [/^goingOut_/],
  health: [],
  homeland: [],
  music: ["radioCurrentItem", "radioCurrentView", "radioIsPlaying", "radioCustomBg", "radioSongCoverBg", "radioRadioBg", "radioHomeBg", "radioRepeatMode", "radioPlaylists", /^radioPlaylist_/, "radioListenTogether", "radioListenTogether_start", "radioCurrentPlaylistIds", "radioSleepDeadlineMs", "neteaseMusicCookie", "neteaseMusicUser", "aiRadioStations"]
};
const yt = new Set(["lockPassword", "lockPasswordEnabled"]);
const ft = (() => {
  const e = new Set();
  const t = [];
  for (const a of Object.values(xt)) {
    for (const i of a) {
      if (typeof i == "string") {
        if (yt.has(i)) {
          continue;
        }
        if (e.has(i)) {
          continue;
        }
        e.add(i);
        t.push(i);
      } else if (i instanceof RegExp) {
        const a = "RE:" + i.source;
        if (e.has(a)) {
          continue;
        }
        e.add(a);
        t.push(i);
      }
    }
  }
  return t;
})();
const vt = e => [...new Set(e)];
const wt = (() => {
  const t = new Map();
  const a = e();
  [...L, ...K].filter(e => e.screenId).filter(e => a || !e.nativeOnly).forEach(e => {
    if (!t.has(e.id)) {
      t.set(e.id, e);
    }
  });
  return Array.from(t.values());
})();
const St = (e, t = 1280, a = 0.55) => new Promise(i => {
  if (!e || typeof e != "string" || !e.startsWith("data:image/")) {
    return i({
      compressed: e,
      saved: 0
    });
  }
  if (e.startsWith("data:image/gif") || e.startsWith("data:image/svg")) {
    return i({
      compressed: e,
      saved: 0
    });
  }
  if (e.length < 51200) {
    return i({
      compressed: e,
      saved: 0
    });
  }
  const o = e.startsWith("data:image/png");
  const n = e.length;
  const s = new Image();
  s.onload = () => {
    try {
      const l = document.createElement("canvas");
      let r = s.width;
      let c = s.height;
      if (r > t || c > t) {
        if (r > c) {
          c = Math.round(c * t / r);
          r = t;
        } else {
          r = Math.round(r * t / c);
          c = t;
        }
      }
      l.width = r;
      l.height = c;
      const d = l.getContext("2d");
      if (!o) {
        d.fillStyle = "#FFFFFF";
        d.fillRect(0, 0, r, c);
      }
      d.drawImage(s, 0, 0, r, c);
      const g = o ? l.toDataURL("image/png") : l.toDataURL("image/jpeg", a);
      if (g.length < n) {
        i({
          compressed: g,
          saved: n - g.length
        });
      } else {
        i({
          compressed: e,
          saved: 0
        });
      }
    } catch {
      i({
        compressed: e,
        saved: 0
      });
    }
  };
  s.onerror = () => i({
    compressed: e,
    saved: 0
  });
  s.src = e;
});
const jt = ({
  title: e,
  children: t
}) => T.jsxs("div", {
  className: "settings-section",
  children: [e && T.jsx("div", {
    className: "settings-section-header",
    children: e
  }), t]
});
const kt = ({
  icon: e,
  iconBg: t,
  label: a,
  children: i,
  onClick: o,
  className: n = ""
}) => T.jsxs("div", {
  className: `settings-item ${n}`,
  onClick: o,
  children: [T.jsxs("div", {
    className: "settings-item-left",
    children: [T.jsx("div", {
      className: `settings-item-icon ${t}`,
      children: e
    }), T.jsx("span", {
      className: "settings-item-label",
      children: a
    })]
  }), T.jsx("div", {
    className: "settings-item-right",
    children: i
  })]
});
const Ct = ({
  icon: e,
  iconBg: t,
  label: a,
  value: i,
  onChange: o,
  placeholder: n,
  type: s = "text",
  autoComplete: l
}) => {
  const [r, c] = B.useState(i);
  const d = B.useRef(false);
  B.useEffect(() => {
    if (!d.current) {
      c(i);
    }
  }, [i]);
  return T.jsx(kt, {
    icon: e,
    iconBg: t,
    label: a,
    children: T.jsx("input", {
      className: "settings-input",
      type: s,
      value: r,
      onChange: e => c(e.target.value),
      onFocus: e => {
        d.current = true;
        const t = e.target;
        const a = () => {
          let e = t.parentElement;
          while (e) {
            e.scrollLeft &&= 0;
            e = e.parentElement;
          }
          if (document.documentElement && document.documentElement.scrollLeft) {
            document.documentElement.scrollLeft = 0;
          }
          if (document.body && document.body.scrollLeft) {
            document.body.scrollLeft = 0;
          }
          if (window.scrollX) {
            window.scrollTo(0, window.scrollY);
          }
        };
        const i = typeof window != "undefined" && window.__nuoIsFocusFromUserPointer && window.__nuoIsFocusFromUserPointer();
        requestAnimationFrame(() => {
          if (t === document.activeElement && !i) {
            const e = t.value.length;
            t.setSelectionRange(e, e);
          }
          a();
        });
        const o = [50, 150, 350, 600, 1000].map(e => setTimeout(a, e));
        const n = () => a();
        window.addEventListener("scroll", n, {
          passive: true,
          capture: true
        });
        t._nuoScrollCleanup = () => {
          o.forEach(clearTimeout);
          window.removeEventListener("scroll", n, {
            capture: true
          });
          a();
        };
      },
      onBlur: e => {
        d.current = false;
        if (e.target._nuoScrollCleanup) {
          e.target._nuoScrollCleanup();
          e.target._nuoScrollCleanup = null;
        }
        if (e.target.value !== i) {
          F.flushSync(() => o(e.target.value));
        }
      },
      placeholder: n,
      onClick: e => e.stopPropagation(),
      autoComplete: l || (s === "password" ? "new-password" : "off"),
      name: `setting-${a}`,
      spellCheck: false
    })
  });
};
const _t = ({
  icon: e,
  iconBg: t,
  label: a,
  checked: i,
  onChange: o,
  disabled: n
}) => T.jsx(kt, {
  icon: e,
  iconBg: t,
  label: a,
  onClick: () => !n && o(!i),
  children: T.jsxs("label", {
    className: "toggle-switch",
    onClick: e => e.stopPropagation(),
    children: [T.jsx("input", {
      type: "checkbox",
      checked: i,
      disabled: n,
      onChange: e => !n && o(e.target.checked)
    }), T.jsx("span", {
      className: "slider"
    })]
  })
});
const At = ({
  icon: e,
  iconBg: t,
  label: a,
  onClick: o,
  value: n,
  danger: s = false
}) => {
  const {
    t: l
  } = i();
  return T.jsxs(kt, {
    icon: e,
    iconBg: t,
    label: a,
    onClick: o,
    children: [n && T.jsx("span", {
      className: "settings-item-value",
      children: n
    }), T.jsx("span", {
      className: "settings-item-chevron",
      style: {
        color: s ? "#ff3b30" : undefined
      },
      children: s ? l("lockDelete") : "›"
    })]
  });
};
const It = ({
  icon: e,
  iconBg: t,
  label: a,
  onClick: i,
  buttonText: o,
  buttonColor: n = "#007AFF",
  fullWidth: s = false
}) => s ? T.jsx("div", {
  className: "settings-item",
  onClick: i,
  style: {
    justifyContent: "center"
  },
  children: T.jsxs("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      color: n,
      fontWeight: 600
    },
    children: [e && D.cloneElement(e, {
      size: 18,
      color: n
    }), T.jsx("span", {
      children: o
    })]
  })
}) : T.jsx(kt, {
  icon: e,
  iconBg: t,
  label: a,
  children: T.jsx("button", {
    onClick: e => {
      e.stopPropagation();
      i();
    },
    style: {
      backgroundColor: "transparent",
      color: n,
      border: "none",
      fontWeight: 600,
      fontSize: "15px",
      cursor: "pointer"
    },
    children: o
  })
});
const Pt = ({
  icon: e,
  iconBg: t,
  label: a,
  value: i,
  onChange: o,
  min: n = 0,
  max: s = 2,
  step: l = 0.1
}) => T.jsxs("div", {
  className: "settings-item",
  style: {
    flexDirection: "column",
    alignItems: "stretch",
    gap: "8px",
    paddingBottom: "12px"
  },
  children: [T.jsxs("div", {
    className: "settings-item-left",
    style: {
      justifyContent: "space-between",
      width: "100%"
    },
    children: [T.jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "14px"
      },
      children: [T.jsx("div", {
        className: `settings-item-icon ${t}`,
        children: e
      }), T.jsx("span", {
        className: "settings-item-label",
        children: a
      })]
    }), T.jsx("span", {
      className: "settings-item-value",
      children: i
    })]
  }), T.jsx("div", {
    className: "intensity-slider-wrapper",
    style: {
      height: "32px",
      marginTop: "4px",
      paddingLeft: "54px"
    },
    children: T.jsx("input", {
      type: "range",
      min: n,
      max: s,
      step: l,
      value: i,
      onChange: e => o(parseFloat(e.target.value)),
      className: "intensity-slider",
      style: {
        width: "100%"
      },
      onClick: e => e.stopPropagation()
    })
  })]
});
const $t = ({
  icon: e,
  iconBg: t,
  label: a,
  value: i,
  options: o,
  onChange: n
}) => {
  var s;
  const [l, r] = B.useState(false);
  const c = B.useRef(null);
  const [d, g] = B.useState({
    top: 0,
    right: 0
  });
  const p = () => {
    if (c.current) {
      const e = c.current.getBoundingClientRect();
      const t = Math.min(o.length * 40 + 10, window.innerHeight * 0.7);
      const a = window.innerHeight - e.bottom;
      e.top;
      const i = a >= t ? e.bottom + 4 : Math.max(10, e.top - t - 4);
      g({
        top: i,
        right: window.innerWidth - e.right,
        maxHeight: window.innerHeight * 0.7
      });
    }
  };
  B.useEffect(() => {
    const e = e => {
      if (!e.target.closest(".ios-dropdown-menu")) {
        if (c.current && !c.current.contains(e.target)) {
          r(false);
        }
      }
    };
    document.addEventListener("mousedown", e);
    if (l) {
      window.addEventListener("scroll", p, true);
      window.addEventListener("resize", p);
      p();
    }
    return () => {
      document.removeEventListener("mousedown", e);
      window.removeEventListener("scroll", p, true);
      window.removeEventListener("resize", p);
    };
  }, [l]);
  const u = ((s = o.find(e => e.id === i)) == null ? undefined : s.label) || i;
  return T.jsxs("div", {
    className: "settings-item dropdown-container",
    ref: c,
    onClick: () => r(!l),
    children: [T.jsxs("div", {
      className: "settings-item-left",
      children: [T.jsx("div", {
        className: `settings-item-icon ${t}`,
        children: e
      }), T.jsx("span", {
        className: "settings-item-label",
        children: a
      })]
    }), T.jsxs("div", {
      className: "settings-item-right",
      children: [T.jsx("span", {
        className: "settings-item-value",
        children: u
      }), T.jsx("span", {
        className: "settings-item-chevron " + (l ? "rotated" : ""),
        children: "›"
      })]
    }), l && F.createPortal(T.jsx("div", {
      className: "ios-dropdown-menu",
      style: {
        top: d.top,
        right: d.right,
        left: "auto",
        position: "fixed",
        width: "max-content",
        minWidth: "200px",
        maxWidth: "280px",
        maxHeight: d.maxHeight || "auto",
        overflowY: "auto",
        zIndex: 9999
      },
      onClick: e => e.stopPropagation(),
      onMouseDown: e => e.stopPropagation(),
      children: o.map(e => T.jsxs("div", {
        className: "ios-dropdown-item " + (i === e.id ? "active" : ""),
        onClick: t => {
          t.stopPropagation();
          n(e.id);
          r(false);
        },
        children: [T.jsx("span", {
          children: e.label
        }), i === e.id && T.jsx("span", {
          className: "check-mark",
          children: "✓"
        })]
      }, e.id))
    }), document.body)]
  });
};
const zt = {
  novelai: {
    positive: "",
    negative: "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry"
  },
  pollinations: {
    positive: "high quality, 4k, detailed",
    negative: "low quality, blurry, watermark, text, distorted"
  },
  googleimagen: {
    positive: "high quality, detailed, 4k"
  },
  geminiimage: {
    positive: "high quality, detailed",
    negative: "low quality, blurry, watermark, distorted"
  },
  grok: {
    positive: "high quality, detailed, 4k",
    negative: "low quality, blurry, watermark, distorted"
  },
  gptimage: {
    positive: "high quality, detailed, photorealistic",
    negative: "low quality, blurry, watermark, distorted"
  }
};
const Et = [{
  id: "k_euler",
  label: "Euler"
}, {
  id: "k_euler_ancestral",
  label: "Euler Ancestral"
}, {
  id: "k_dpmpp_2s_ancestral",
  label: "DPM++ 2S Ancestral"
}, {
  id: "k_dpmpp_2m",
  label: "DPM++ 2M"
}, {
  id: "k_dpmpp_2m_sde",
  label: "DPM++ 2M SDE"
}, {
  id: "k_dpmpp_sde",
  label: "DPM++ SDE"
}, {
  id: "k_dpm_2",
  label: "DPM2"
}, {
  id: "ddim_v3",
  label: "DDIM (V3 only)"
}];
const Bt = [{
  id: "native",
  label: "Native"
}, {
  id: "karras",
  label: "Karras"
}, {
  id: "exponential",
  label: "Exponential"
}, {
  id: "polyexponential",
  label: "Polyexponential"
}];
const Tt = [{
  id: 0,
  label: "Preset 0 - Heavy"
}, {
  id: 1,
  label: "Preset 1 - Light"
}, {
  id: 2,
  label: "Preset 2 - Human Focus"
}, {
  id: 3,
  label: "Preset 3 - None"
}];
const Dt = {
  display: "block",
  fontWeight: 600,
  fontSize: "14px",
  margin: "14px 0 6px",
  color: "var(--text-primary, #000)"
};
const Ft = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: "10px",
  fontSize: "15px",
  border: "1px solid var(--border-color, #ddd)",
  background: "var(--bg-secondary, #f5f5f5)",
  color: "var(--text-primary, #000)",
  boxSizing: "border-box",
  fontFamily: "inherit"
};
const Rt = {
  ...Ft,
  appearance: "auto",
  WebkitAppearance: "auto"
};
const Nt = {
  fontSize: "12px",
  color: "var(--text-secondary, #888)",
  margin: "4px 0 0",
  lineHeight: 1.4
};
const Mt = ({
  presets: e,
  currentPositive: t,
  currentNegative: a,
  onSelect: i,
  onSave: o,
  onAdd: n,
  onDelete: s,
  t: l
}) => {
  const [r, c] = B.useState(0);
  const [d, g] = B.useState(false);
  const [p, u] = B.useState("");
  B.useEffect(() => {
    if (r >= e.length) {
      c(Math.max(0, e.length - 1));
    }
  }, [e.length]);
  return T.jsxs("div", {
    style: {
      margin: "14px 0 6px",
      padding: "10px 12px",
      borderRadius: "10px",
      background: "var(--bg-tertiary, rgba(0,0,0,0.03))",
      border: "1px solid var(--border-color, #ddd)"
    },
    children: [T.jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        flexWrap: "wrap"
      },
      children: [T.jsx("span", {
        style: {
          fontWeight: 600,
          fontSize: "13px",
          color: "var(--text-primary, #000)",
          whiteSpace: "nowrap"
        },
        children: l("labelPromptPreset")
      }), T.jsx("select", {
        style: {
          flex: 1,
          minWidth: "100px",
          padding: "6px 8px",
          borderRadius: "8px",
          fontSize: "13px",
          border: "1px solid var(--border-color, #ddd)",
          background: "var(--bg-secondary, #f5f5f5)",
          color: "var(--text-primary, #000)",
          fontFamily: "inherit"
        },
        value: r,
        onChange: t => {
          const a = Number(t.target.value);
          c(a);
          if (e[a]) {
            i(e[a]);
          }
        },
        children: e.map((e, t) => T.jsx("option", {
          value: t,
          children: e.name
        }, t))
      }), T.jsx("button", {
        onClick: () => o(r, t, a),
        title: l("btnSavePreset"),
        style: {
          padding: "5px 10px",
          borderRadius: "8px",
          fontSize: "12px",
          fontWeight: 600,
          border: "1px solid var(--border-color, #ddd)",
          background: "var(--bg-secondary, #f5f5f5)",
          color: "var(--text-primary, #000)",
          cursor: "pointer",
          whiteSpace: "nowrap"
        },
        children: l("btnSavePreset")
      }), T.jsx("button", {
        onClick: () => g(!d),
        title: l("btnAddPreset"),
        style: {
          padding: "5px 10px",
          borderRadius: "8px",
          fontSize: "12px",
          fontWeight: 600,
          border: "1px solid var(--border-color, #ddd)",
          background: "var(--bg-secondary, #f5f5f5)",
          color: "var(--text-primary, #000)",
          cursor: "pointer",
          whiteSpace: "nowrap"
        },
        children: l("btnAddPreset")
      }), e.length > 1 && T.jsx("button", {
        onClick: () => {
          s(r);
          c(0);
        },
        title: l("btnDeletePreset"),
        style: {
          padding: "5px 10px",
          borderRadius: "8px",
          fontSize: "12px",
          fontWeight: 600,
          border: "1px solid var(--border-color, #ddd)",
          background: "var(--bg-secondary, #f5f5f5)",
          color: "#e74c3c",
          cursor: "pointer",
          whiteSpace: "nowrap"
        },
        children: l("btnDeletePreset")
      })]
    }), d && T.jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginTop: "8px"
      },
      children: [T.jsx("input", {
        type: "text",
        value: p,
        onChange: e => u(e.target.value),
        placeholder: l("placeholderPresetName"),
        style: {
          flex: 1,
          padding: "6px 10px",
          borderRadius: "8px",
          fontSize: "13px",
          border: "1px solid var(--border-color, #ddd)",
          background: "var(--bg-secondary, #f5f5f5)",
          color: "var(--text-primary, #000)",
          fontFamily: "inherit"
        },
        onKeyDown: i => {
          if (i.key === "Enter" && p.trim()) {
            n(p.trim(), t, a);
            u("");
            g(false);
            c(e.length);
          }
        }
      }), T.jsx("button", {
        onClick: () => {
          if (p.trim()) {
            n(p.trim(), t, a);
            u("");
            g(false);
            c(e.length);
          }
        },
        style: {
          padding: "6px 12px",
          borderRadius: "8px",
          fontSize: "13px",
          fontWeight: 600,
          border: "none",
          background: "var(--accent-color, #007AFF)",
          color: "#fff",
          cursor: "pointer",
          whiteSpace: "nowrap"
        },
        children: l("btnConfirm")
      })]
    })]
  });
};
const Gt = () => {
  const {
    currentScreen: P,
    goHome: D
  } = a();
  const {
    t: L,
    tOr: K
  } = i();
  const {
    safeCurrentProfileUserId: He,
    profileUsers: Ue
  } = o();
  const {
    characters: We
  } = n();
  const {
    user: Le
  } = R();
  const Ke = P === "api-settings-screen";
  const [Je, Ve] = B.useState(false);
  const [qe, Ye] = B.useState(() => {
    try {
      return localStorage.getItem("nuojiji_layout_diag_enabled") === "true";
    } catch (e) {
      return false;
    }
  });
  const [Xe, it] = B.useState(() => {
    try {
      return localStorage.getItem("iosKeepAliveMethod") || "oscillator";
    } catch (e) {
      return "oscillator";
    }
  });
  const [yt, Gt] = B.useState(() => {
    try {
      return localStorage.getItem("androidKeepAliveMethod") || "both";
    } catch (e) {
      return "both";
    }
  });
  const [Ot, Ht] = B.useState(false);
  const [Ut, Wt] = B.useState("");
  const {
    progress: Lt,
    begin: Kt,
    update: Jt,
    setPhase: Vt,
    end: qt
  } = function () {
    const [e, t] = B.useState(Ge);
    const a = B.useRef(0);
    return {
      progress: e,
      begin: B.useCallback((e, i = "", o = 0) => {
        a.current = 0;
        t({
          active: true,
          mode: e,
          phase: i,
          current: 0,
          total: o,
          detail: ""
        });
      }, []),
      update: B.useCallback(e => {
        const i = performance.now();
        if (i - a.current < 80 && !e.__force) {
          return;
        }
        a.current = i;
        const {
          __force: o,
          ...n
        } = e;
        t(e => ({
          ...e,
          ...n
        }));
      }, []),
      setPhase: B.useCallback((e, i = 0) => {
        a.current = 0;
        t(t => ({
          ...t,
          phase: e,
          total: i,
          current: 0,
          detail: ""
        }));
      }, []),
      end: B.useCallback(() => {
        a.current = 0;
        t(Ge);
      }, [])
    };
  }();
  B.useEffect(() => {
    const e = localStorage.getItem("backgroundModeEnabled") === "true";
    Ve(e);
  }, []);
  const [Yt, Xt] = B.useState(() => {
    try {
      const e = localStorage.getItem("nuojiji_pet_console_layout");
      if (e && ["orbit", "fan", "grid", "drawer"].includes(e)) {
        return e;
      }
    } catch (e) {}
    return "orbit";
  });
  const [Qt, Zt] = B.useState("openai");
  const [ea, ta] = B.useState("");
  const [aa, ia] = B.useState("");
  const [oa, na] = B.useState("gpt-3.5-turbo");
  const [sa, la] = B.useState(0.7);
  const [ra, ca] = B.useState("none");
  const [da, ga] = B.useState("");
  const [pa, ua] = B.useState(false);
  const [ha, ma] = B.useState("");
  const [ba, xa] = B.useState("");
  const [ya, fa] = B.useState("gpt-4");
  const [va, wa] = B.useState(0.7);
  const [Sa, ja] = B.useState(false);
  const [ka, Ca] = B.useState(false);
  const [_a, Aa] = B.useState("");
  const [Ia, Pa] = B.useState("");
  const [$a, za] = B.useState("");
  const [Ea, Ba] = B.useState(false);
  const [Ta, Da] = B.useState(true);
  const [Fa, Ra] = B.useState(1);
  const [Na, Ma] = B.useState(true);
  const [Ga, Oa] = B.useState(false);
  const [Ha, Ua] = B.useState("");
  const [Wa, La] = B.useState("");
  const [Ka, Ja] = B.useState("speech-02-hd");
  const [Va, qa] = B.useState("overseas");
  const [Ya, Xa] = B.useState("");
  const [Qa, Za] = B.useState(false);
  const [ei, ti] = B.useState(false);
  const [ai, ii] = B.useState("");
  const [oi, ni] = B.useState("eleven_multilingual_v2");
  const [si, li] = B.useState("");
  const [ri, ci] = B.useState(false);
  const [di, gi] = B.useState("");
  const [pi, ui] = B.useState("v2");
  const [hi, mi] = B.useState("cut0");
  const [bi, xi] = B.useState(true);
  const [yi, fi] = B.useState(false);
  const [vi, wi] = B.useState("nai-diffusion-4-5-full");
  const [Si, ji] = B.useState("");
  const [ki, Ci] = B.useState("none");
  const [_i, Ai] = B.useState("");
  const [Ii, Pi] = B.useState("1024x1024");
  const [$i, zi] = B.useState([]);
  const [Ei, Bi] = B.useState(false);
  const [Ti, Di] = B.useState(28);
  const [Fi, Ri] = B.useState(5);
  const [Ni, Mi] = B.useState("k_euler_ancestral");
  const [Gi, Oi] = B.useState(-1);
  const [Hi, Ui] = B.useState("karras");
  const [Wi, Li] = B.useState(0);
  const [Ki, Ji] = B.useState(false);
  const [Vi, qi] = B.useState(false);
  const [Yi, Xi] = B.useState(0);
  const [Qi, Zi] = B.useState(1);
  const [eo, to] = B.useState(true);
  const [ao, io] = B.useState(false);
  const [oo, no] = B.useState(false);
  const [so, lo] = B.useState(false);
  const [ro, co] = B.useState("");
  const [go, po] = B.useState("none");
  const [uo, ho] = B.useState("");
  const [mo, bo] = B.useState("flux");
  const [xo, yo] = B.useState("1024x1024");
  const [fo, vo] = B.useState([]);
  const [wo, So] = B.useState(false);
  const [jo, ko] = B.useState(-1);
  const [Co, _o] = B.useState(false);
  const [Ao, Io] = B.useState(true);
  const [Po, $o] = B.useState(false);
  const [zo, Eo] = B.useState(false);
  const [Bo, To] = B.useState("");
  const [Do, Fo] = B.useState("imagen-4.0-generate-001");
  const [Ro, No] = B.useState("1024x1024");
  const [Mo, Go] = B.useState([]);
  const [Oo, Ho] = B.useState(false);
  const [Uo, Wo] = B.useState("none");
  const [Lo, Ko] = B.useState("");
  const [Jo, Vo] = B.useState("allow_all");
  const [qo, Yo] = B.useState("1:1");
  const [Xo, Qo] = B.useState(false);
  const [Zo, en] = B.useState("");
  const [tn, an] = B.useState("gemini-2.5-flash-preview-image-generation");
  const [on, nn] = B.useState([]);
  const [sn, ln] = B.useState(false);
  const [rn, cn] = B.useState("none");
  const [dn, gn] = B.useState("");
  const [pn, un] = B.useState(false);
  const [hn, mn] = B.useState("");
  const [bn, xn] = B.useState("grok-2-image");
  const [yn, fn] = B.useState("none");
  const [vn, wn] = B.useState("");
  const [Sn, jn] = B.useState([]);
  const [kn, Cn] = B.useState(false);
  const [_n, An] = B.useState(false);
  const [In, Pn] = B.useState("");
  const [$n, zn] = B.useState("gpt-image-1");
  const [En, Bn] = B.useState("none");
  const [Tn, Dn] = B.useState("");
  const [Fn, Rn] = B.useState("1024x1024");
  const [Nn, Mn] = B.useState("auto");
  const [Gn, On] = B.useState([]);
  const [Hn, Un] = B.useState(false);
  const [Wn, Ln] = B.useState(zt.novelai.positive);
  const [Kn, Jn] = B.useState(zt.novelai.negative);
  const [Vn, qn] = B.useState(zt.pollinations.positive);
  const [Yn, Xn] = B.useState(zt.pollinations.negative);
  const [Qn, Zn] = B.useState(zt.googleimagen.positive);
  const [es, ts] = B.useState(zt.geminiimage.positive);
  const [as, is] = B.useState(zt.geminiimage.negative);
  const [os, ns] = B.useState(zt.grok.positive);
  const [ss, ls] = B.useState(zt.grok.negative);
  const [rs, cs] = B.useState(zt.gptimage.positive);
  const [ds, gs] = B.useState(zt.gptimage.negative);
  const ps = () => Object.fromEntries(Object.entries(zt).map(([e, t]) => [e, [{
    name: L("presetDefault"),
    positive: t.positive,
    negative: t.negative
  }]]));
  const [us, hs] = B.useState(ps);
  const ms = (e, t) => {
    hs(a => {
      const i = {
        ...a,
        [e]: t(a[e] || [])
      };
      s.set("imagePromptPresets", i);
      return i;
    });
  };
  const bs = (e, t, a, i) => {
    ms(e, e => e.map((e, o) => o === t ? {
      ...e,
      positive: a,
      negative: i
    } : e));
  };
  const xs = (e, t, a, i) => {
    ms(e, e => [...e, {
      name: t,
      positive: a,
      negative: i
    }]);
  };
  const ys = (e, t) => {
    ms(e, e => e.filter((e, a) => a !== t));
  };
  const [fs, vs] = B.useState(null);
  const [ws, Ss] = B.useState("auto");
  const [js, ks] = B.useState("auto");
  const [Cs, _s] = B.useState("auto");
  const [As, Is] = B.useState("auto");
  const [Ps, $s] = B.useState("auto");
  const [zs, Es] = B.useState("auto");
  const [Bs, Ts] = B.useState("auto");
  const [Ds, Fs] = B.useState("auto");
  const [Rs, Ns] = B.useState("auto");
  const [Ms, Gs] = B.useState("auto");
  const [Os, Hs] = B.useState("auto");
  const [Us, Ws] = B.useState("auto");
  const [Ls, Ks] = B.useState("auto");
  const [Js, Vs] = B.useState(false);
  const [qs, Ys] = B.useState(false);
  const [Xs, Qs] = B.useState(false);
  const [Zs, el] = B.useState(false);
  const [tl, al] = B.useState(false);
  const [il, ol] = B.useState(false);
  const [nl, sl] = B.useState("");
  const [ll, rl] = B.useState("");
  const [cl, dl] = B.useState(false);
  const [gl, pl] = B.useState(false);
  const [ul, hl] = B.useState(false);
  const [ml, bl] = B.useState(null);
  const [xl, yl] = B.useState("");
  const [fl, vl] = B.useState("");
  const [wl, Sl] = B.useState("");
  const [jl, kl] = B.useState("nuojiji_backup.json");
  const [Cl, _l] = B.useState(false);
  const [Al, Il] = B.useState("full");
  const [Pl, $l] = B.useState(30);
  const [zl, El] = B.useState("minutes");
  const [Bl, Tl] = B.useState(false);
  const [Dl, Fl] = B.useState(false);
  const Rl = B.useRef(0);
  const Nl = async e => {
    const t = E();
    if (t) {
      try {
        await z();
      } catch (a) {}
    } else {
      try {
        await S(true);
      } catch (a) {
        console.warn("[GitHub 備份] 啟用後台保活失敗:", a);
      }
    }
    try {
      return await e();
    } finally {
      if (!t) {
        try {
          await S(false);
        } catch (a) {}
      }
    }
  };
  const [Ml, Gl] = B.useState(true);
  const [Ol, Hl] = B.useState(false);
  const [Ul, Wl] = B.useState(false);
  const [Ll, Kl] = B.useState(false);
  const [Jl, Vl] = B.useState([]);
  const [ql, Yl] = B.useState(null);
  const [Xl, Ql] = B.useState(false);
  const [Zl, er] = B.useState(null);
  const [tr, ar] = B.useState(false);
  const [ir, or] = B.useState(null);
  const [nr, sr] = B.useState(false);
  const [lr, rr] = B.useState([]);
  const [cr, dr] = B.useState("");
  const [gr, pr] = B.useState([]);
  B.useEffect(() => {
    const e = localStorage.getItem("nuojiji_browser_notifications_enabled");
    if (e) {
      Ys(e === "true");
    }
    Qs(localStorage.getItem("nuojiji_notif_privacy_enabled") === "true");
  }, []);
  B.useEffect(() => {
    try {
      const e = typeof window != "undefined" && !!window.Capacitor && !!window.Capacitor.isNativePlatform && !!window.Capacitor.isNativePlatform() && !!window.Capacitor.getPlatform && window.Capacitor.getPlatform() === "android";
      Wl(e);
    } catch (e) {
      Wl(false);
    }
  }, []);
  const [ur, hr] = B.useState(false);
  const [mr, br] = B.useState(60);
  const [xr, yr] = B.useState("minutes");
  const [fr, vr] = B.useState([]);
  const [wr, Sr] = B.useState(false);
  const [jr, kr] = B.useState([{
    start: "23:00",
    end: "07:00"
  }]);
  const [Cr, _r] = B.useState(false);
  B.useEffect(() => {
    const e = setTimeout(async () => {
      try {
        const {
          isPushSubscribed: e,
          isPushSupported: a
        } = await t(async () => {
          const {
            isPushSubscribed: e,
            isPushSupported: t
          } = await import("./pushSubscriptionManager-BzPwLmDo.js");
          return {
            isPushSubscribed: e,
            isPushSupported: t
          };
        }, []);
        if (a() && e()) {
          el(true);
        }
      } catch {}
    }, 500);
    return () => clearTimeout(e);
  }, []);
  const [Ar, Ir] = B.useState([]);
  const [Pr, $r] = B.useState("");
  const zr = B.useRef(false);
  const Er = B.useRef(false);
  B.useEffect(() => {
    if (Ke) {
      if (!zr.current) {
        zr.current = true;
        setTimeout(async () => {
          try {
            await Br();
            Er.current = true;
          } catch (e) {
            console.error("Failed to load settings from DB:", e);
            zr.current = false;
          }
        }, 100);
      }
    }
  }, [Ke]);
  const Br = async () => {
    try {
      const e = await s.get("apiPresets");
      if (e) {
        Ir(Array.isArray(e) ? e : JSON.parse(e));
      }
    } catch (e) {
      console.warn("Failed to load presets:", e);
    }
    try {
      const e = await s.get("apiSettings");
      if (e) {
        const t = typeof e == "string" ? JSON.parse(e) : e;
        if (t.apiType) {
          Zt(t.apiType);
        }
        if (t.mainApiUrl) {
          ta(t.mainApiUrl);
        }
        if (t.mainApiKey) {
          ia(t.mainApiKey);
        }
        if (t.mainApiModel) {
          na(t.mainApiModel);
        }
        if (t.temperature !== undefined) {
          la(t.temperature);
        }
        if (t.reasoningEffort) {
          ca(t.reasoningEffort);
        }
        if (t.secApiEnabled !== undefined) {
          ua(t.secApiEnabled);
        }
        if (t.secApiUrl) {
          ma(t.secApiUrl);
        }
        if (t.secApiKey) {
          xa(t.secApiKey);
        }
        if (t.secApiModel) {
          fa(t.secApiModel);
        }
        if (t.secTemperature !== undefined) {
          wa(t.secTemperature);
        }
        if (t.secApiFollowPreset !== undefined) {
          ja(t.secApiFollowPreset);
        }
        if (t.visionApiEnabled !== undefined) {
          Ca(t.visionApiEnabled);
        }
        if (t.visionApiUrl) {
          Aa(t.visionApiUrl);
        }
        if (t.visionApiKey) {
          Pa(t.visionApiKey);
        }
        if (t.visionApiModel) {
          za(t.visionApiModel);
        }
        if (t.relayUrl) {
          sl(t.relayUrl);
        }
        if (t.relaySecret) {
          rl(t.relaySecret);
        }
        if (t.relayEnabled !== undefined) {
          dl(t.relayEnabled);
        }
        if (t.relayProactiveEnabled !== undefined) {
          pl(t.relayProactiveEnabled);
        }
        if (t.autoRetryEnabled !== undefined) {
          Da(t.autoRetryEnabled);
        }
        if (t.maxRetries !== undefined) {
          Ra(t.maxRetries);
        }
        if (t.secondaryFallbackEnabled !== undefined) {
          Ma(t.secondaryFallbackEnabled);
        }
        if (t.minimaxEnabled !== undefined) {
          Oa(t.minimaxEnabled);
        }
        if (t.minimaxGroupId) {
          Ua(t.minimaxGroupId);
        }
        if (t.minimaxApiKey) {
          La(t.minimaxApiKey);
        }
        if (t.minimaxModel) {
          Ja(t.minimaxModel);
        }
        if (t.minimaxRegion) {
          qa(t.minimaxRegion);
        }
        if (t.minimaxApiUrl) {
          Xa(t.minimaxApiUrl);
        }
        if (t.voiceGenEnabled !== undefined) {
          Za(t.voiceGenEnabled);
        } else if (t.minimaxEnabled || t.minimaxApiKey || t.elevenlabsApiKey || t.sovitsServerUrl) {
          Za(true);
        }
        if (t.elevenlabsEnabled !== undefined) {
          ti(t.elevenlabsEnabled);
        } else if (t.elevenlabsApiKey) {
          ti(true);
        }
        if (t.elevenlabsApiKey) {
          ii(t.elevenlabsApiKey);
        }
        if (t.elevenlabsModel) {
          ni(t.elevenlabsModel);
        }
        if (t.elevenlabsApiUrl) {
          li(t.elevenlabsApiUrl);
        }
        if (t.sovitsEnabled !== undefined) {
          ci(t.sovitsEnabled);
        } else if (t.sovitsServerUrl) {
          ci(true);
        }
        if (t.sovitsServerUrl) {
          gi(t.sovitsServerUrl);
        }
        if (t.sovitsApiVersion) {
          ui(t.sovitsApiVersion);
        }
        if (t.sovitsTextSplit) {
          mi(t.sovitsTextSplit);
        }
        if (t.imageGenUseWorldBook !== undefined) {
          xi(t.imageGenUseWorldBook);
        }
        if (t.novelAiEnabled !== undefined) {
          fi(t.novelAiEnabled);
        }
        if (t.novelAiModel) {
          wi(t.novelAiModel);
        }
        if (t.novelAiKey) {
          ji(t.novelAiKey);
        }
        if (t.novelAiCorsProxy) {
          Ci(t.novelAiCorsProxy);
        }
        if (t.novelAiProxyUrl) {
          Ai(t.novelAiProxyUrl);
        }
        if (t.novelAiImageSize) {
          Pi(t.novelAiImageSize);
        }
        if (t.novelAiSteps !== undefined) {
          Di(t.novelAiSteps);
        }
        if (t.novelAiScale !== undefined) {
          Ri(t.novelAiScale);
        }
        if (t.novelAiSampler) {
          Mi(t.novelAiSampler);
        }
        if (t.novelAiSeed !== undefined) {
          Oi(t.novelAiSeed);
        }
        if (t.novelAiNoiseSchedule) {
          Ui(t.novelAiNoiseSchedule);
        }
        if (t.novelAiUcPreset !== undefined) {
          Li(t.novelAiUcPreset);
        }
        if (t.novelAiSmea !== undefined) {
          Ji(t.novelAiSmea);
        }
        if (t.novelAiSmeaDyn !== undefined) {
          qi(t.novelAiSmeaDyn);
        }
        if (t.novelAiCfgRescale !== undefined) {
          Xi(t.novelAiCfgRescale);
        }
        if (t.novelAiUncondScale !== undefined) {
          Zi(t.novelAiUncondScale);
        }
        if (t.novelAiQualityToggle !== undefined) {
          to(t.novelAiQualityToggle);
        }
        if (t.novelAiDynamicThresholding !== undefined) {
          io(t.novelAiDynamicThresholding);
        }
        if (t.novelAiVarietyPlus !== undefined) {
          no(t.novelAiVarietyPlus);
        }
        if (t.pollinationsEnabled !== undefined) {
          lo(t.pollinationsEnabled);
        }
        if (t.pollinationsKey) {
          co(t.pollinationsKey);
        }
        if (t.pollinationsCorsProxy) {
          po(t.pollinationsCorsProxy);
        }
        if (t.pollinationsProxyUrl) {
          ho(t.pollinationsProxyUrl);
        }
        if (t.pollinationsModel) {
          bo(t.pollinationsModel);
        }
        if (t.pollinationsImageSize) {
          yo(t.pollinationsImageSize);
        }
        if (t.pollinationsSeed !== undefined) {
          ko(t.pollinationsSeed);
        }
        if (t.pollinationsEnhance !== undefined) {
          _o(t.pollinationsEnhance);
        }
        if (t.pollinationsNologo !== undefined) {
          Io(t.pollinationsNologo);
        }
        if (t.pollinationsSafe !== undefined) {
          $o(t.pollinationsSafe);
        }
        if (t.googleImagenEnabled !== undefined) {
          Eo(t.googleImagenEnabled);
        }
        if (t.googleImagenKey) {
          To(t.googleImagenKey);
        }
        if (t.googleImagenCorsProxy) {
          Wo(t.googleImagenCorsProxy);
        }
        if (t.googleImagenProxyUrl !== undefined) {
          Ko(t.googleImagenProxyUrl);
        }
        if (t.googleImagenModel) {
          Fo(t.googleImagenModel);
        }
        if (t.googleImagenImageSize) {
          No(t.googleImagenImageSize);
        }
        if (t.googleImagenPersonGeneration) {
          Vo(t.googleImagenPersonGeneration);
        }
        if (t.googleImagenAspectRatio) {
          Yo(t.googleImagenAspectRatio);
        }
        if (t.novelAiPositivePrompt !== undefined) {
          Ln(t.novelAiPositivePrompt);
        }
        if (t.novelAiNegativePrompt !== undefined) {
          Jn(t.novelAiNegativePrompt);
        }
        if (t.pollinationsPositivePrompt !== undefined) {
          qn(t.pollinationsPositivePrompt);
        }
        if (t.pollinationsNegativePrompt !== undefined) {
          Xn(t.pollinationsNegativePrompt);
        }
        if (t.googleImagenPositivePrompt !== undefined) {
          Zn(t.googleImagenPositivePrompt);
        }
        if (t.geminiImageEnabled !== undefined) {
          Qo(t.geminiImageEnabled);
        }
        if (t.geminiImageKey) {
          en(t.geminiImageKey);
        }
        if (t.geminiImageCorsProxy) {
          cn(t.geminiImageCorsProxy);
        }
        if (t.geminiImageProxyUrl !== undefined) {
          gn(t.geminiImageProxyUrl);
        }
        if (t.geminiImageModel) {
          an(t.geminiImageModel);
        }
        if (t.geminiImagePositivePrompt !== undefined) {
          ts(t.geminiImagePositivePrompt);
        }
        if (t.geminiImageNegativePrompt !== undefined) {
          is(t.geminiImageNegativePrompt);
        }
        if (t.grokEnabled !== undefined) {
          un(t.grokEnabled);
        }
        if (t.grokKey) {
          mn(t.grokKey);
        }
        if (t.grokCorsProxy) {
          fn(t.grokCorsProxy);
        }
        if (t.grokProxyUrl !== undefined) {
          wn(t.grokProxyUrl);
        }
        if (t.grokModel) {
          xn(t.grokModel);
        }
        if (t.grokPositivePrompt !== undefined) {
          ns(t.grokPositivePrompt);
        }
        if (t.grokNegativePrompt !== undefined) {
          ls(t.grokNegativePrompt);
        }
        if (t.gptImageEnabled !== undefined) {
          An(t.gptImageEnabled);
        }
        if (t.gptImageKey) {
          Pn(t.gptImageKey);
        }
        if (t.gptImageCorsProxy) {
          Bn(t.gptImageCorsProxy);
        }
        if (t.gptImageProxyUrl !== undefined) {
          Dn(t.gptImageProxyUrl);
        }
        if (t.gptImageModel) {
          zn(t.gptImageModel);
        }
        if (t.gptImageSize) {
          Rn(t.gptImageSize);
        }
        if (t.gptImageQuality) {
          Mn(t.gptImageQuality);
        }
        if (t.gptImagePositivePrompt !== undefined) {
          cs(t.gptImagePositivePrompt);
        }
        if (t.gptImageNegativePrompt !== undefined) {
          gs(t.gptImageNegativePrompt);
        }
        if (t.chatImageApi) {
          Ss(t.chatImageApi);
        }
        if (t.giftImageApi) {
          ks(t.giftImageApi);
        }
        if (t.momentImageApi) {
          _s(t.momentImageApi);
        }
        if (t.pomodoroImageApi) {
          Is(t.pomodoroImageApi);
        }
        if (t.tmImageApi) {
          $s(t.tmImageApi);
        }
        if (t.touchImageApi) {
          Es(t.touchImageApi);
        }
        if (t.goingOutSceneImageApi) {
          Ts(t.goingOutSceneImageApi);
        }
        if (t.goingOutCGImageApi) {
          Fs(t.goingOutCGImageApi);
        }
        if (t.trackingSceneImageApi) {
          Ns(t.trackingSceneImageApi);
        }
        if (t.keepsakeSceneImageApi) {
          Gs(t.keepsakeSceneImageApi);
        }
        if (t.trackingGameCGImageApi) {
          Hs(t.trackingGameCGImageApi);
        }
        if (t.forumImageApi) {
          Ws(t.forumImageApi);
        }
        if (t.homelandImageApi) {
          Ks(t.homelandImageApi);
        }
        if (t.forumIncludeImages !== undefined) {
          Vs(!!t.forumIncludeImages);
        }
        if (t.floatingConsoleEnabled !== undefined) {
          Gl(t.floatingConsoleEnabled);
        }
        if (Array.isArray(t.floatingConsoleShortcuts)) {
          rr(t.floatingConsoleShortcuts.slice(0, 15));
        }
        if (t.desktopFloatingPetEnabled !== undefined) {
          Hl(!!t.desktopFloatingPetEnabled);
        }
      }
    } catch (e) {
      console.warn("Failed to load API settings:", e);
    }
    try {
      const e = await s.get("imagePromptPresets");
      if (e) {
        const t = typeof e == "string" ? JSON.parse(e) : e;
        const a = {
          ...ps()
        };
        for (const e of Object.keys(t)) {
          if (Array.isArray(t[e]) && t[e].length > 0) {
            a[e] = t[e];
          }
        }
        hs(a);
      }
    } catch (e) {
      console.warn("Failed to load image prompt presets:", e);
    }
    try {
      if (He) {
        pr(l(He));
      }
    } catch (e) {
      console.warn("Failed to load group chats:", e);
    }
    try {
      const e = await s.get("roleActivitySettings");
      console.log("[RoleActivity] load on mount → enabled =", e == null ? undefined : e.enabled, "listLen =", ((e == null ? undefined : e.list) || []).length);
      if (e) {
        if (e.enabled !== undefined) {
          hr(e.enabled);
        }
        if (e.interval !== undefined) {
          br(e.interval);
        }
        if (e.intervalUnit !== undefined) {
          yr(e.intervalUnit);
        }
        if (e.dndEnabled !== undefined) {
          Sr(e.dndEnabled);
        }
        if (e.showCommitmentNotice !== undefined) {
          _r(!!e.showCommitmentNotice);
        }
        if (Array.isArray(e.dndRanges) && e.dndRanges.length > 0) {
          kr(e.dndRanges);
        } else if (e.dndStart || e.dndEnd) {
          kr([{
            start: e.dndStart || "23:00",
            end: e.dndEnd || "07:00"
          }]);
        }
        if (e.list !== undefined) {
          const t = e.list.filter(e => e && e.id).map(e => ({
            ...e,
            userId: e.userId || He,
            type: e.type === "group" ? "group" : undefined
          }));
          vr(t);
        } else if (e.roleId) {
          vr([{
            id: e.roleId,
            probability: e.probability || "medium",
            userId: He
          }]);
        }
      }
    } catch (e) {
      console.warn("Failed to load role activity settings:", e);
    }
    try {
      const e = await s.get("githubBackupSettings");
      if (e) {
        const t = typeof e == "string" ? JSON.parse(e) : e;
        if (t.token) {
          yl(t.token);
        }
        if (t.username) {
          vl(t.username);
        }
        if (t.repo) {
          Sl(t.repo);
        }
        if (t.filename) {
          kl(t.filename);
        }
        if (t.autoBackup !== undefined) {
          _l(t.autoBackup);
        }
        if (t.autoBackupMode) {
          Il(t.autoBackupMode);
        }
        if (t.autoBackupInterval !== undefined) {
          $l(t.autoBackupInterval);
        }
        if (t.autoBackupUnit) {
          El(t.autoBackupUnit);
        }
        if (typeof t.lastBackupTime == "number" && t.lastBackupTime > 0) {
          Rl.current = t.lastBackupTime;
        }
      }
    } catch (e) {
      console.warn("Failed to load GitHub backup settings:", e);
    }
  };
  const Tr = async (e = {}) => {
    const t = {
      token: xl,
      username: fl,
      repo: wl,
      filename: jl,
      autoBackup: Cl,
      autoBackupMode: Al,
      autoBackupInterval: Pl,
      autoBackupUnit: zl,
      lastBackupTime: Rl.current,
      ...e
    };
    await s.set("githubBackupSettings", t);
    try {
      window.dispatchEvent(new CustomEvent("nuojiji:gh-settings-updated"));
    } catch (a) {}
  };
  const Dr = async e => {
    try {
      await Tr({
        lastBackupTime: e
      });
    } catch (t) {
      console.warn("[GitHub 備份] 保存上次備份時間失敗:", t);
    }
  };
  B.useEffect(() => {
    if (!Ar || Ar.length === 0) {
      return;
    }
    const e = ea;
    const t = aa;
    const a = oa;
    const i = sa;
    const o = pa;
    const n = ha;
    const s = ba;
    const l = ya;
    const r = va;
    const c = Ar.find(c => {
      const d = c.mainApi || {};
      const g = c.secApi || {};
      const p = (d.apiUrl || "") === e && (d.apiKey || "") === t && (d.model || "") === a && (d.temperature ?? 0.7) === i;
      const u = !Sa || (g.enabled ?? false) === o && (g.apiUrl || "") === n && (g.apiKey || "") === s && (g.model || "") === l && (g.temperature ?? 0.7) === r;
      return p && u;
    });
    if (c && Pr !== c.id) {
      $r(c.id);
      ga(c.name);
    }
  }, [ea, aa, oa, sa, pa, ha, ba, ya, va, Ar, Sa]);
  const Fr = async (e = false) => {
    if (!da.trim()) {
      await c(L("apiPresetEnterName"));
      return;
    }
    if (ot(ea)) {
      await c(`⚠️ 主 API URL 不允許使用！\n\n「${ea}」已被禁止使用，請更換其他 API 服務。`);
      return;
    }
    if (pa && ot(ha)) {
      await c(`⚠️ 副 API URL 不允許使用！\n\n「${ha}」已被禁止使用，請更換其他 API 服務。`);
      return;
    }
    const t = {
      mainApi: {
        apiUrl: ea,
        apiKey: aa,
        model: oa,
        temperature: sa
      },
      ...(Sa ? {
        secApi: {
          enabled: pa,
          apiUrl: ha,
          apiKey: ba,
          model: ya,
          temperature: va
        }
      } : {})
    };
    let a = [...Ar];
    if (e || !Pr) {
      const e = Date.now().toString();
      const i = {
        id: e,
        name: da,
        ...t
      };
      a.push(i);
      $r(e);
      c(`${L("apiPresetAdded")}: ${da}`);
    } else {
      a = a.map(e => e.id === Pr ? {
        ...e,
        name: da,
        ...t
      } : e);
      c(`${L("apiPresetUpdated")}: ${da}`);
    }
    Ir(a);
    s.set("apiPresets", a);
  };
  const [Rr, Nr] = B.useState([]);
  const [Mr, Gr] = B.useState([]);
  const [Or, Hr] = B.useState([]);
  const [Ur, Wr] = B.useState(false);
  const [Lr, Kr] = B.useState(false);
  const [Jr, Vr] = B.useState(false);
  const qr = async (e, t, a, i) => {
    var o;
    var n;
    if (e && t) {
      if (ot(e)) {
        await c(`⚠️ 此 API URL 不允許使用！\n\n「${e}」已被禁止使用，請更換其他 API 服務。`);
      } else {
        i(true);
        try {
          const i = $(e) ? v(e, t, {
            "anthropic-beta": "models-2025-02-19"
          }) : v(e, t);
          const s = await f(w(e), {
            method: "GET",
            headers: i
          });
          if (!s.ok) {
            throw new Error(`Failed to fetch models: ${s.status}`);
          }
          const l = await s.json();
          const r = ((o = l.data) == null ? undefined : o.map(e => e.id)) || ((n = l.models) == null ? undefined : n.map(e => e.id || e.name)) || [];
          a(r);
          if (r.length > 0) {
            c(`${L("msgApiFetchSuccess")} (${r.length}) \n\n ${r.slice(0, 5).join("\n")}...`);
          } else {
            c(L("msgApiNoModels"));
          }
        } catch (s) {
          console.error("Failed to fetch models:", s);
          c(`${L("msgApiFetchFailed")}: ${s.message}`);
        } finally {
          i(false);
        }
      }
    } else {
      await c(L("msgApiEnterInfo"));
    }
  };
  const [Yr, Xr] = B.useState(false);
  const [Qr, Zr] = B.useState(false);
  const ec = async (e, t) => {
    let a = [];
    let i = "";
    do {
      const o = `${e}/v1beta/models?pageSize=1000${i ? `&pageToken=${i}` : ""}`;
      const n = await f(o, {
        method: "GET",
        headers: {
          "x-goog-api-key": t
        }
      });
      if (!n.ok) {
        throw new Error(`HTTP ${n.status}`);
      }
      const s = await n.json();
      a = a.concat(s.models || []);
      i = s.nextPageToken || "";
    } while (i);
    return a;
  };
  const tc = async (e, t, a, i) => {
    if (e && t) {
      if (ot(e)) {
        await c(`⚠️ 此 API URL 不允許使用！\n\n「${e}」已被禁止使用，請更換其他 API 服務。`);
      } else {
        i(true);
        try {
          const i = x(e);
          const o = y({
            apiUrl: i,
            model: a || "gpt-3.5-turbo",
            messages: [{
              role: "user",
              content: "Test"
            }],
            temperature: 0.7,
            stream: false,
            maxTokens: 5
          });
          const n = await f(i, {
            method: "POST",
            headers: v(i, t),
            body: JSON.stringify(o),
            timeoutMs: 60000
          });
          if (!n.ok) {
            const e = await n.text();
            throw new Error(`HTTP ${n.status}: ${e}`);
          }
          const s = await n.json();
          if (s.choices && s.choices.length > 0) {
            c(L("msgApiTestSuccess"));
          } else {
            c(L("msgApiTestabnormal"));
          }
        } catch (o) {
          console.error("API Test Failed:", o);
          c(`${L("msgApiTestFailed")}:\n${o.message}`);
        } finally {
          i(false);
        }
      }
    } else {
      await c(L("msgApiEnterInfo"));
    }
  };
  const [ac, ic] = B.useState({
    persisted: e(),
    usage: "0",
    quota: "0",
    percent: "0"
  });
  const [oc, nc] = B.useState(false);
  const [sc, lc] = B.useState("");
  const [rc, cc] = B.useState("");
  const [dc, gc] = B.useState(null);
  const [pc, uc] = B.useState(false);
  B.useEffect(() => {
    if (!Ke || !navigator.storage || !navigator.storage.estimate) {
      return;
    }
    const t = setTimeout(async () => {
      try {
        const t = !!e() || (await navigator.storage.persisted());
        const {
          usage: a,
          quota: i
        } = await navigator.storage.estimate();
        ic({
          persisted: t,
          usage: (a / 1048576).toFixed(2),
          quota: (i / 1048576).toFixed(2),
          percent: (a / i * 100).toFixed(2)
        });
      } catch (t) {
        console.error("Failed to get storage info:", t);
      }
    }, 300);
    return () => clearTimeout(t);
  }, [Ke]);
  const hc = async () => {
    try {
      if (!Er.current) {
        console.warn("[SaveAll] aborted — settings not loaded yet");
        await c(K("settingsStillLoading", "設定還在載入中，請稍候一兩秒再保存"));
        return;
      }
      const a = [{
        label: "主 API URL",
        value: ea
      }, {
        label: "副 API URL",
        value: ha
      }];
      for (const {
        label: e,
        value: t
      } of a) {
        if (ot(t)) {
          await c(`⚠️ ${e} 不允許使用！\n\n「${t}」已被禁止使用，請更換其他 API 服務。`);
          return;
        }
      }
      const i = e => typeof e == "string" ? e.trim() : e;
      const o = {
        apiType: Qt,
        mainApiUrl: i(ea),
        mainApiKey: i(aa),
        mainApiModel: i(oa),
        temperature: sa,
        reasoningEffort: ra,
        secApiEnabled: pa,
        secApiUrl: i(ha),
        secApiKey: i(ba),
        secApiModel: i(ya),
        secTemperature: va,
        secApiFollowPreset: Sa,
        visionApiEnabled: ka,
        visionApiUrl: i(_a),
        visionApiKey: i(Ia),
        visionApiModel: i($a),
        autoRetryEnabled: Ta,
        maxRetries: Fa,
        secondaryFallbackEnabled: Na,
        voiceGenEnabled: Qa,
        minimaxEnabled: Ga,
        minimaxGroupId: i(Ha),
        minimaxApiKey: i(Wa),
        minimaxModel: i(Ka),
        minimaxRegion: Va,
        minimaxApiUrl: i(Ya),
        elevenlabsEnabled: ei,
        elevenlabsApiKey: i(ai),
        elevenlabsModel: i(oi),
        elevenlabsApiUrl: i(si),
        sovitsEnabled: ri,
        sovitsServerUrl: i(di),
        sovitsApiVersion: pi,
        sovitsTextSplit: hi,
        imageGenUseWorldBook: bi,
        novelAiEnabled: yi,
        novelAiModel: vi,
        novelAiKey: Si,
        novelAiCorsProxy: ki,
        novelAiProxyUrl: _i,
        novelAiImageSize: Ii,
        novelAiPositivePrompt: Wn,
        novelAiNegativePrompt: Kn,
        novelAiSteps: Ti,
        novelAiScale: Fi,
        novelAiSampler: Ni,
        novelAiSeed: Gi,
        novelAiNoiseSchedule: Hi,
        novelAiUcPreset: Wi,
        novelAiSmea: Ki,
        novelAiSmeaDyn: Vi,
        novelAiCfgRescale: Yi,
        novelAiUncondScale: Qi,
        novelAiQualityToggle: eo,
        novelAiDynamicThresholding: ao,
        novelAiVarietyPlus: oo,
        pollinationsEnabled: so,
        pollinationsKey: ro,
        pollinationsCorsProxy: go,
        pollinationsProxyUrl: uo,
        pollinationsModel: mo,
        pollinationsImageSize: xo,
        pollinationsPositivePrompt: Vn,
        pollinationsNegativePrompt: Yn,
        pollinationsSeed: jo,
        pollinationsEnhance: Co,
        pollinationsNologo: Ao,
        pollinationsSafe: Po,
        googleImagenEnabled: zo,
        googleImagenKey: Bo,
        googleImagenCorsProxy: Uo,
        googleImagenProxyUrl: Lo,
        googleImagenModel: Do,
        googleImagenImageSize: Ro,
        googleImagenPositivePrompt: Qn,
        googleImagenPersonGeneration: Jo,
        googleImagenAspectRatio: qo,
        geminiImageEnabled: Xo,
        geminiImageKey: Zo,
        geminiImageCorsProxy: rn,
        geminiImageProxyUrl: dn,
        geminiImageModel: tn,
        geminiImagePositivePrompt: es,
        geminiImageNegativePrompt: as,
        grokEnabled: pn,
        grokKey: hn,
        grokCorsProxy: yn,
        grokProxyUrl: vn,
        grokModel: bn,
        grokPositivePrompt: os,
        grokNegativePrompt: ss,
        gptImageEnabled: _n,
        gptImageKey: In,
        gptImageCorsProxy: En,
        gptImageProxyUrl: Tn,
        gptImageModel: $n,
        gptImageSize: Fn,
        gptImageQuality: Nn,
        gptImagePositivePrompt: rs,
        gptImageNegativePrompt: ds,
        chatImageApi: ws,
        giftImageApi: js,
        momentImageApi: Cs,
        pomodoroImageApi: As,
        tmImageApi: Ps,
        touchImageApi: zs,
        goingOutSceneImageApi: Bs,
        goingOutCGImageApi: Ds,
        trackingSceneImageApi: Rs,
        keepsakeSceneImageApi: Ms,
        trackingGameCGImageApi: Os,
        forumImageApi: Us,
        homelandImageApi: Ls,
        forumIncludeImages: Js,
        floatingConsoleEnabled: Ml,
        floatingConsoleShortcuts: lr.slice(0, 15),
        desktopFloatingPetEnabled: Ol,
        relayUrl: i(nl),
        relaySecret: i(ll),
        relayEnabled: cl,
        relayProactiveEnabled: gl
      };
      await s.set("apiSettings", o);
      await s.set("imagePromptPresets", us);
      window.dispatchEvent(new CustomEvent("nuojiji:api-settings-updated", {
        detail: o
      }));
      if (!cl) {
        (async () => {
          try {
            const {
              unsubscribeRelayPush: e,
              syncAndroidRelayPoller: a
            } = await t(async () => {
              const {
                unsubscribeRelayPush: e,
                syncAndroidRelayPoller: t
              } = await import("./main-BO9xa-SQ.js").then(e => e.cp);
              return {
                unsubscribeRelayPush: e,
                syncAndroidRelayPoller: t
              };
            }, __vite__mapDeps([6, 7, 0, 1, 2, 3, 4, 5, 8, 9, 10, 11]));
            await e().catch(() => {});
            await a().catch(() => {});
          } catch (e) {}
        })();
      }
      const n = Er.current;
      let l = {};
      try {
        l = (await s.get("roleActivitySettings")) || {};
      } catch (e) {}
      const r = n ? {
        enabled: ur,
        interval: mr,
        intervalUnit: xr,
        list: fr,
        dndEnabled: wr,
        dndRanges: jr,
        showCommitmentNotice: Cr
      } : l;
      const d = l.list || [];
      if (n) {
        await s.set("roleActivitySettings", r);
        window.dispatchEvent(new CustomEvent("nuojiji:role-activity-updated", {
          detail: r
        }));
      }
      try {
        const e = e => `${String(e.userId)}__${String(e.id)}`;
        const a = new Map((fr || []).filter(e => e && e.id && e.userId).map(t => [e(t), t]));
        const i = (d || []).filter(t => {
          if (!t || !t.id || !t.userId) {
            return false;
          }
          const i = a.get(e(t));
          return !i || t.proactiveMode === "on" && i.proactiveMode !== "on";
        });
        if (i.length) {
          const {
            unregisterProactive: e
          } = await t(async () => {
            const {
              unregisterProactive: e
            } = await import("./main-BO9xa-SQ.js").then(e => e.cr);
            return {
              unregisterProactive: e
            };
          }, __vite__mapDeps([6, 7, 0, 1, 2, 3, 4, 5, 8, 9, 10, 11]));
          for (const t of i) {
            await e(t.userId, t.id).catch(() => {});
          }
        }
      } catch (e) {}
      c(L("msgConfigSaved"));
    } catch (a) {
      console.error("[SaveAll] failed:", a);
      try {
        await c(K("saveFailed", "保存失败：") + ((a == null ? undefined : a.name) || "") + " " + ((a == null ? undefined : a.message) || String(a)));
      } catch (e) {}
    }
  };
  const mc = B.useRef(null);
  const bc = B.useRef(null);
  const [xc, yc] = B.useState(false);
  const [fc, vc] = B.useState("export");
  const [wc, Sc] = B.useState(null);
  const [jc, kc] = B.useState([]);
  const [Cc, _c] = B.useState([]);
  const [Ac, Ic] = B.useState([]);
  const Pc = Object.values((Ue || []).reduce((e, t) => {
    const a = (t == null ? undefined : t.uid) || (t == null ? undefined : t.id);
    if (!a) {
      return e;
    }
    const i = String(a);
    e[i] ||= {
      uid: i,
      name: (t == null ? undefined : t.name) || i
    };
    return e;
  }, {}));
  const $c = Pc.map(e => e.uid);
  const zc = fc === "export" && Cc.length > 0 ? Cc : $c;
  const Ec = (() => {
    const e = [];
    const t = new Set();
    for (const o of We || []) {
      const a = o == null ? undefined : o.id;
      if (a == null) {
        continue;
      }
      const i = String(a);
      const n = `char:${i}`;
      if (!t.has(n)) {
        t.add(n);
        e.push({
          id: n,
          targetId: i,
          type: "character",
          label: `👤 ${(o == null ? undefined : o.name) || i}`
        });
      }
    }
    const a = Pc.reduce((e, t) => {
      e[t.uid] = t.name || t.uid;
      return e;
    }, {});
    for (const o of zc) {
      let n = [];
      try {
        n = l(o) || [];
      } catch (i) {
        n = [];
      }
      for (const i of n) {
        const n = i == null ? undefined : i.id;
        if (n == null) {
          continue;
        }
        const s = String(n);
        const l = `group:${s}`;
        if (t.has(l)) {
          continue;
        }
        t.add(l);
        const r = a[String(o)] || String(o);
        e.push({
          id: l,
          targetId: s,
          type: "group",
          label: `👥 ${(i == null ? undefined : i.name) || s} · ${r}`
        });
      }
    }
    return e;
  })();
  const Bc = [{
    id: "app_settings",
    section: "system",
    label: L("catAppSettings"),
    patterns: xt.app_settings
  }, {
    id: "ai_settings",
    section: "system",
    label: L("catAiSettings"),
    patterns: xt.ai_settings
  }, {
    id: "appearance",
    section: "system",
    label: L("catAppearance"),
    patterns: xt.appearance
  }, {
    id: "characters",
    section: "role",
    label: L("catCharacters"),
    patterns: xt.characters
  }, {
    id: "world_books",
    section: "role",
    label: L("catWorldBooks"),
    patterns: xt.world_books
  }, {
    id: "memories",
    section: "role",
    label: L("catMemories"),
    patterns: xt.memories
  }, {
    id: "chat_history",
    section: "chat",
    label: L("catChatHistory"),
    patterns: xt.chat_history
  }, {
    id: "chat_settings",
    section: "chat",
    label: L("catChatSettings"),
    patterns: xt.chat_settings
  }, {
    id: "group_chat",
    section: "chat",
    label: L("catGroupChat"),
    hint: K("catGroupChatHint", "只含群聊設定與成員。群訊息存於「聊天記錄」表，需同時勾選才能完整備份。"),
    patterns: xt.group_chat
  }, {
    id: "moments",
    section: "content",
    label: L("catMoments"),
    patterns: xt.moments
  }, {
    id: "stickers",
    section: "content",
    label: L("catStickers"),
    patterns: xt.stickers
  }, {
    id: "forum",
    section: "content",
    label: L("catForum"),
    patterns: xt.forum
  }, {
    id: "calendar",
    section: "content",
    label: L("catCalendar"),
    patterns: xt.calendar
  }, {
    id: "white_dog",
    section: "app",
    label: L("homeAppWhiteDog"),
    patterns: xt.white_dog
  }, {
    id: "health",
    section: "app",
    label: L("homeAppHealth"),
    patterns: xt.health
  }, {
    id: "games",
    section: "app",
    label: L("catGames"),
    patterns: xt.games
  }, {
    id: "pomodoro",
    section: "app",
    label: L("catPomodoro"),
    patterns: xt.pomodoro
  }, {
    id: "couples",
    section: "app",
    label: L("catCouples"),
    patterns: xt.couples
  }, {
    id: "goingOut",
    section: "app",
    label: L("catGoingOut"),
    patterns: xt.goingOut
  }, {
    id: "music",
    section: "app",
    label: L("catMusic"),
    patterns: xt.music
  }, {
    id: "homeland",
    section: "app",
    label: L("homeAppMonitor"),
    patterns: xt.homeland
  }];
  const Tc = {
    app_settings: "#5B8DEF",
    ai_settings: "#FF6B6B",
    characters: "#4ECDC4",
    world_books: "#45B7D1",
    chat_history: "#FF9F43",
    white_dog: "#FF7A59",
    chat_settings: "#A29BFE",
    group_chat: "#74B9FF",
    memories: "#FECA57",
    appearance: "#FF6B81",
    moments: "#1DD1A1",
    stickers: "#FD79A8",
    forum: "#6C5CE7",
    games: "#5F27CD",
    calendar: "#54A0FF",
    pomodoro: "#F368E0",
    couples: "#E8A0A0",
    music: "#00CEC9",
    goingOut: "#26DE81",
    other: "#AEB6BF"
  };
  const Dc = (e, t) => typeof e == "string" && !!t && (typeof t == "string" ? e === t : t.test(e));
  const Fc = e => {
    if (!e || typeof e != "string") {
      return null;
    }
    const t = {
      apiSettings: "ai_settings",
      apiPresets: "ai_settings",
      imagePromptPresets: "ai_settings",
      githubBackupSettings: "ai_settings",
      userThinkingPresets: "ai_settings",
      defaultThinkingPresetId: "ai_settings",
      defaultCustomThinkingPrompt: "ai_settings",
      roleActivitySettings: "app_settings",
      homeScreenLayout: "appearance",
      appCustomizations: "appearance",
      tm_shared_style: "chat_settings",
      tm_custom_style_presets: "chat_settings",
      tm_custom_directions: "chat_settings",
      bubble_css_presets: "chat_settings",
      xinsheng_presets: "chat_settings",
      desktopPetBlob: "appearance",
      desktopPetIdleLinesCache: "appearance",
      desktopPetConfigCache: "appearance",
      custom_psych_tests: "games",
      nuojiji_sticker_categories: "stickers",
      nuojiji_kaomoji_categories: "stickers",
      nuojiji_current_profile_user_id: "app_settings"
    };
    if (t[e]) {
      return t[e];
    }
    for (const a of Bc) {
      if ((a.patterns || []).some(t => Dc(e, t))) {
        return a.id;
      }
    }
    return null;
  };
  const Rc = async () => {
    if (!pc) {
      uc(true);
      try {
        const t = (e, a = 0, i = new WeakSet()) => {
          if (e == null) {
            return 4;
          }
          if (a > 12) {
            return 0;
          }
          const o = typeof e;
          if (o === "string") {
            return e.length * 2 + 2;
          }
          if (o === "number") {
            return 8;
          }
          if (o === "boolean") {
            return 4;
          }
          if (o !== "object") {
            return 0;
          }
          if (i.has(e)) {
            return 0;
          }
          i.add(e);
          if (Array.isArray(e)) {
            let o = 16;
            for (const n of e) {
              o += t(n, a + 1, i);
            }
            return o;
          }
          let n = 24;
          for (const [s, l] of Object.entries(e)) {
            n += s.length * 2 + 2;
            n += t(l, a + 1, i);
          }
          return n;
        };
        const a = {};
        const i = {};
        let o = 0;
        for (const d of st) {
          if (d !== "_migration") {
            try {
              const e = m.table(d);
              const n = await e.count();
              if (n === 0) {
                a[d] = 0;
                continue;
              }
              if (d === "globalSettings") {
                const s = 50;
                for (let a = 0; a < n; a += s) {
                  const n = await e.offset(a).limit(s).toArray();
                  for (const e of n) {
                    const a = t(e);
                    const n = Fc(e == null ? undefined : e.key);
                    if (n) {
                      i[n] = (i[n] || 0) + a;
                    } else {
                      o += a;
                    }
                  }
                  await new Promise(e => setTimeout(e, 0));
                }
                a[d] = 0;
                continue;
              }
              if (n <= 300 || d === "stickers" || d === "roleStickers" || d === "userPosts" || d === "groupChats") {
                const i = 50;
                let o = 0;
                for (let a = 0; a < n; a += i) {
                  const n = await e.offset(a).limit(i).toArray();
                  for (const e of n) {
                    o += t(e);
                  }
                  await new Promise(e => setTimeout(e, 0));
                }
                a[d] = o;
                continue;
              }
              const s = Math.min(n, 10);
              const l = await e.limit(s).toArray();
              let r = 0;
              for (const a of l) {
                r += t(a);
              }
              a[d] = Math.round(r / s * n);
            } catch (e) {
              a[d] = 0;
            }
          }
        }
        const n = {};
        for (let e = 0; e < localStorage.length; e++) {
          const t = localStorage.key(e);
          const a = localStorage.getItem(t);
          n[t] = (t.length + (a ? a.length : 0)) * 2;
        }
        const s = new Set();
        const l = new Set();
        const r = [];
        for (const e of Bc) {
          const t = lt[e.id] || [];
          let o = i[e.id] || 0;
          for (const e of t) {
            if (e !== "globalSettings") {
              if (!s.has(e)) {
                o += a[e] || 0;
                s.add(e);
              }
            }
          }
          for (const [a, i] of Object.entries(n)) {
            if (!l.has(a)) {
              if (e.patterns.some(e => typeof e == "string" ? a === e : e.test(a))) {
                o += i;
                l.add(a);
              }
            }
          }
          r.push({
            id: e.id,
            label: e.label,
            size: o,
            color: Tc[e.id]
          });
        }
        let c = 0;
        for (const [e, d] of Object.entries(a)) {
          if (!s.has(e)) {
            c += d;
          }
        }
        c += o;
        for (const [e, d] of Object.entries(n)) {
          if (!l.has(e)) {
            c += d;
          }
        }
        if (c > 0) {
          r.push({
            id: "other",
            label: "其他",
            size: c,
            color: Tc.other
          });
        }
        gc(r);
      } catch (e) {
        console.error("Storage analysis failed:", e);
      } finally {
        uc(false);
      }
    }
  };
  B.useEffect(() => {
    if (!Ke) {
      gc(null);
    }
  }, [Ke]);
  const Nc = async e => {
    if (e instanceof Blob || e instanceof ArrayBuffer) {
      const t = e instanceof Blob ? e.size : e.byteLength;
      if (t > 10485760) {
        return {
          _isBlob: true,
          type: e instanceof Blob ? e.type : "font/octet-stream",
          data: null,
          encoding: "base64",
          omittedInExport: true,
          originalSize: t
        };
      }
      const a = e instanceof Blob ? await e.arrayBuffer() : e;
      const i = new Uint8Array(a);
      let o = "";
      const n = 8192;
      for (let e = 0; e < i.length; e += n) {
        o += String.fromCharCode.apply(null, i.subarray(e, e + n));
      }
      return {
        _isBlob: true,
        type: e instanceof Blob ? e.type : "font/octet-stream",
        data: btoa(o),
        encoding: "base64"
      };
    }
    if (Array.isArray(e)) {
      return Promise.all(e.map(e => Nc(e)));
    }
    if (e !== null && typeof e == "object") {
      const t = {};
      for (const [a, i] of Object.entries(e)) {
        t[a] = await Nc(i);
      }
      return t;
    }
    return e;
  };
  const Mc = e => {
    if (e && typeof e == "object") {
      if (e._isBlob) {
        if (e.data == null) {
          const a = new Blob([], {
            type: e.type || "application/octet-stream"
          });
          try {
            a._omittedInExport = true;
          } catch (t) {}
          return a;
        }
        let a;
        if (e.encoding === "base64" || typeof e.data == "string") {
          const t = atob(e.data);
          a = new Uint8Array(t.length);
          for (let e = 0; e < t.length; e++) {
            a[e] = t.charCodeAt(e);
          }
        } else {
          a = new Uint8Array(e.data);
        }
        return new Blob([a], {
          type: e.type
        });
      }
      if (Array.isArray(e)) {
        return e.map(e => Mc(e));
      }
      const a = {};
      for (const [t, i] of Object.entries(e)) {
        a[t] = Mc(i);
      }
      return a;
    }
    return e;
  };
  const Gc = [/^temp_/, /^_test/, /^_health_check/, /^_refresh_test/, /^pwa_/, /^default_user_placeholder/];
  const Oc = ["nuojiji_device_id", "nuojiji-announcement-version", "nuojiji_skip_password_change", "nuojiji_guild_verified", "nuojiji_bg_activity_checks", "nuojiji_maintenance_lock"];
  const Hc = e => /^sb-.+-auth-token$/.test(e);
  const Uc = e => e === "nuojiji_had_data" || typeof e == "string" && e.startsWith("nuojiji_had_userstate_");
  const Wc = () => {
    const e = {};
    for (let a = 0; a < localStorage.length; a++) {
      const t = localStorage.key(a);
      if (Oc.includes(t) || Hc(t) || Uc(t)) {
        e[t] = localStorage.getItem(t);
      }
    }
    localStorage.clear();
    Object.entries(e).forEach(([e, t]) => {
      try {
        if (t != null) {
          localStorage.setItem(e, t);
        }
      } catch (a) {}
    });
    try {
      if (!localStorage.getItem("nuojiji_bg_activity_checks")) {
        localStorage.setItem("nuojiji_bg_activity_checks", JSON.stringify({
          _global_last_check: Date.now()
        }));
      }
    } catch (t) {}
  };
  const Lc = () => {
    const e = {};
    for (let t = 0; t < localStorage.length; t++) {
      const a = localStorage.key(t);
      e[a] = localStorage.getItem(a);
    }
    return e;
  };
  const Kc = (e, t, a = null, i = null) => {
    const o = {};
    const n = ft;
    const s = Yc(i);
    let l = 0;
    let r = 0;
    let c = null;
    if (a && a.length > 0) {
      c = Bc.filter(e => a.includes(e.id)).flatMap(e => e.patterns);
    }
    Object.entries(e).forEach(([e, t]) => {
      if (Gc.some(t => t.test ? t.test(e) : t === e)) {
        console.log(`[导出过滤] 跳过黑名单项: ${e}`);
        r++;
        return;
      }
      let a = false;
      a = c ? c.some(t => t.test ? t.test(e) : t === e) : n.some(t => t.test ? t.test(e) : t === e);
      if (a) {
        if (!id(e, s)) {
          l++;
          return;
        }
        o[e] = t;
      } else {
        console.log(`[导出过滤] 跳过非必要项: ${e}`);
        l++;
      }
    });
    console.log(`[导出过滤 ${t}] 保留: ${Object.keys(o).length}, 跳过: ${l}, 黑名单: ${r}`);
    return o;
  };
  const Jc = (e = null) => {
    if (!e || e.length === 0) {
      return [...st];
    }
    const t = e.flatMap(e => lt[e] || []);
    return vt(t);
  };
  const Vc = (e, t = null) => {
    if (!t || t.length === 0) {
      return true;
    }
    const a = Fc(e == null ? undefined : e.key);
    return !!a && t.includes(a);
  };
  const qc = (e, t, a = null) => !a || a.length === 0 || (e === "globalSettings" ? Vc(t, a) : e !== "calendarData" || ((e, t = null) => {
    if (!t || t.length === 0) {
      return true;
    }
    const a = (e => {
      if (!e || e.userId == null || e.key == null) {
        return null;
      }
      if (e.userId === "__global__") {
        const t = String(e.key);
        if (t === "character_events" || t === "character_todos" || t === "character_statuses" || t.startsWith("gen_template_")) {
          return "characters";
        } else {
          return "calendar";
        }
      }
      return "calendar";
    })(e);
    return !!a && t.includes(a);
  })(t, a));
  const Yc = (e = null) => Array.isArray(e) && e.length !== 0 ? vt(e.map(e => String(e))) : null;
  const Xc = (e = null) => Array.isArray(e) && e.length !== 0 ? vt(e.map(e => String(e || "")).map(e => e.startsWith("char:") ? e.slice(5) : e.startsWith("group:") ? e.slice(6) : e).filter(Boolean)) : null;
  const Qc = ["nuojiji_message_history_", "nuojiji_active_chats_", "nuojiji_pinned_chats_", "nuojiji_unread_chats_", "nuojiji_character_notes_"];
  const Zc = (e, t = null) => !t || t.length === 0 || !Qc.some(t => e.startsWith(t)) || t.some(t => e.includes(`_${t}_`) || e.endsWith(`_${t}`));
  const ed = (e, t = null) => {
    if (!t || t.length === 0) {
      return e;
    }
    const a = {};
    for (const [i, o] of Object.entries(e || {})) {
      if (Zc(i, t)) {
        a[i] = o;
      }
    }
    return a;
  };
  const td = new Set(["messages", "callLogs", "tmSessions", "tmStories"]);
  const ad = (e, t, a = null, i = null) => !a || a.length === 0 || (td.has(e) ? a.includes(String((t == null ? undefined : t.characterId) ?? "")) : e === "favorites" ? a.includes(String((t == null ? undefined : t.charId) ?? "")) : e !== "ttsAudio" || !i || i.size === 0 || i.has(String((t == null ? undefined : t.msgId) ?? "")));
  const id = (e, t = null) => !t || t.length === 0 || !(e => bt.some(t => e.startsWith(t)))(e) || t.some(t => e.endsWith(`_${t}`) || e.includes(`_${t}_`));
  const od = (e, t, a = null) => {
    if (!a || a.length === 0) {
      return true;
    }
    if (!dt.has(e)) {
      return true;
    }
    if (e === "users") {
      const e = (t == null ? undefined : t.uid) != null ? String(t.uid) : null;
      const i = (t == null ? undefined : t.id) != null ? String(t.id) : null;
      return a.includes(e) || a.includes(i);
    }
    if (e === "userLinks") {
      const e = (t == null ? undefined : t.sourceUserId) != null ? String(t.sourceUserId) : null;
      const i = (t == null ? undefined : t.targetUserId) != null ? String(t.targetUserId) : null;
      return a.includes(e) || a.includes(i);
    }
    if (e === "userMessages") {
      const e = (t == null ? undefined : t.user1) != null ? String(t.user1) : null;
      const i = (t == null ? undefined : t.user2) != null ? String(t.user2) : null;
      return a.includes(e) || a.includes(i);
    }
    return String(t == null ? undefined : t.userId) === "__global__" || (t == null ? undefined : t.userId) != null && a.includes(String(t.userId));
  };
  const nd = async (e, t, a = "") => {
    const i = [{
      table: "calendarData",
      lsPrefix: "calendar_"
    }, {
      table: "groupChats",
      lsPrefix: "nuojiji_group_chats_"
    }, {
      table: "xinsheng",
      lsPrefix: "xinsheng_"
    }];
    const o = Object.keys(e);
    for (const {
      table: s,
      lsPrefix: l
    } of i) {
      const e = o.some(e => e.startsWith(l));
      const i = Object.prototype.hasOwnProperty.call(t, s);
      if (e && !i) {
        try {
          await m.table(s).clear();
          console.log(`[${a}] 舊存檔：已清空 Dexie ${s}，將從 localStorage 遷移`);
        } catch (n) {}
      }
    }
  };
  const sd = async () => {
    try {
      const t = await m.table("groupChats").toArray();
      for (const a of t) {
        if ((a == null ? undefined : a.userId) && Array.isArray(a.groups) && a.groups.length > 0) {
          try {
            localStorage.setItem(`nuojiji_group_chats_${a.userId}`, JSON.stringify(a.groups));
          } catch (e) {}
        }
      }
      if (t.length > 0) {
        console.log(`[導入] ✅ groupChats 雙源同步完成（${t.length} 個用戶）`);
      }
    } catch (t) {
      console.warn("[導入] groupChats 同步失敗:", t);
    }
  };
  const ld = e => {
    const t = String((e == null ? undefined : e.message) || "").toLowerCase();
    return t.includes("invalid string length") || t.includes("out of memory") || t.includes("allocation failed");
  };
  const rd = (e, t = {
    removedFields: 0,
    removedLargeStrings: 0,
    removedBlobPayloads: 0
  }) => {
    if (e == null) {
      return e;
    }
    if (Array.isArray(e)) {
      return e.map(e => rd(e, t));
    }
    if (typeof e == "object") {
      if (e._isBlob && typeof e.data == "string") {
        t.removedBlobPayloads += 1;
        return {
          _isBlob: true,
          type: e.type || "application/octet-stream",
          data: null,
          encoding: e.encoding || "base64",
          omittedInExport: true
        };
      }
      const a = {};
      for (const [i, o] of Object.entries(e)) {
        const e = i.toLowerCase();
        if (e === "serializedaudio" || e === "audioblob" || e === "audiourl" || e === "audiobase64") {
          t.removedFields += 1;
        } else if (typeof o == "string" && o.length > 2097152) {
          t.removedLargeStrings += 1;
          a[i] = "[omitted: large string payload]";
        } else {
          a[i] = rd(o, t);
        }
      }
      return a;
    }
    return e;
  };
  const cd = (e, t) => {
    if (!e || typeof e != "object") {
      return {
        row: e,
        dropped: []
      };
    }
    let a = 0;
    try {
      a = JSON.stringify(e).length;
    } catch (s) {
      a = t + 1;
    }
    if (a <= t) {
      return {
        row: e,
        dropped: []
      };
    }
    if (Array.isArray(e)) {
      return {
        row: {
          _recoveredOversized: true,
          _note: `oversized array row (${(a / 1024 / 1024).toFixed(1)}MB) dropped on export`
        },
        dropped: ["<array-row>"]
      };
    }
    const i = Object.keys(e).map(t => {
      var a;
      let i = 0;
      try {
        i = ((a = JSON.stringify(e[t])) == null ? undefined : a.length) || 0;
      } catch (s) {
        i = 0;
      }
      return {
        k: t,
        sz: i
      };
    }).sort((e, t) => t.sz - e.sz);
    const o = {
      ...e
    };
    const n = [];
    for (const {
      k: l,
      sz: r
    } of i) {
      if (a <= t) {
        break;
      }
      if (r < 4096) {
        continue;
      }
      const e = `[recovered: field "${l}" (${(r / 1024 / 1024).toFixed(1)}MB) omitted on export to fit backup]`;
      o[l] = e;
      a -= r - e.length;
      n.push(l);
    }
    if (n.length) {
      o._recoveredOversizedFields = n;
    }
    return {
      row: o,
      dropped: n
    };
  };
  const dd = async (t = null) => {
    var a;
    var i;
    var o;
    var n;
    var s;
    var l;
    var r;
    var d;
    const {
      selectedCategoryIds: g,
      selectedUserIds: p,
      selectedChatEntityIds: u
    } = ((e = null) => {
      if (e && typeof e == "object" && !Array.isArray(e)) {
        if ("selectedCategoryIds" in e || "selectedUserIds" in e || "selectedChatEntityIds" in e) {
          return {
            selectedCategoryIds: Array.isArray(e.selectedCategoryIds) ? e.selectedCategoryIds : null,
            selectedUserIds: Array.isArray(e.selectedUserIds) ? e.selectedUserIds : null,
            selectedChatEntityIds: Array.isArray(e.selectedChatEntityIds) ? e.selectedChatEntityIds : null
          };
        }
        if ("target" in e || "nativeEvent" in e) {
          return {
            selectedCategoryIds: null,
            selectedUserIds: null,
            selectedChatEntityIds: null
          };
        }
      }
      if (Array.isArray(e)) {
        return {
          selectedCategoryIds: e,
          selectedUserIds: null,
          selectedChatEntityIds: null
        };
      } else {
        return {
          selectedCategoryIds: null,
          selectedUserIds: null,
          selectedChatEntityIds: null
        };
      }
    })(t);
    const b = Yc(((e = null) => {
      if (!Array.isArray(e) || e.length === 0) {
        return e;
      }
      const t = new Set(e.map(e => String(e)));
      const a = Ue || [];
      for (const i of e) {
        const e = String(i);
        const o = a.find(t => String((t == null ? undefined : t.uid) ?? "") === e || String((t == null ? undefined : t.id) ?? "") === e);
        if (o && (o.uid != null && t.add(String(o.uid)), o.id != null && String(o.id) !== String(o.uid))) {
          const e = String(o.id);
          if (a.filter(t => String((t == null ? undefined : t.id) ?? "") === e).length === 1) {
            t.add(e);
          }
        }
      }
      return Array.from(t);
    })(p));
    const x = Xc(u);
    const y = Array.isArray(g) && g.includes("chat_history") && x && x.length > 0;
    let f = false;
    let v = null;
    try {
      const t = L("msgConfirmExport");
      const p = e() ? `${t}\n\n⚠️ 导出期间请保持糯叽机在前台,不要切到其他 App,否则可能被系统打断。` : t;
      if (!(await h(p))) {
        return;
      }
      U("export-backup", 2700000);
      f = true;
      v = await at("export");
      Kt("export", L("progressPhasePreparing"));
      console.log("[导出/导入] 🔧 开始导出（v5 分段序列化，防止 OOM 崩潰）...");
      const u = new Date();
      const E = `nuojiji_backup_${u.getFullYear()}${String(u.getMonth() + 1).padStart(2, "0")}${String(u.getDate()).padStart(2, "0")}_${String(u.getHours()).padStart(2, "0")}${String(u.getMinutes()).padStart(2, "0")}.json`;
      let B = null;
      let T = null;
      let D = 0;
      const F = navigator.userAgent;
      if (!/Android|iPhone|iPad|iPod|Mobile/i.test(F) && typeof window.showSaveFilePicker == "function") {
        try {
          const e = await window.showSaveFilePicker({
            suggestedName: E,
            types: [{
              description: "JSON",
              accept: {
                "application/json": [".json"]
              }
            }]
          });
          B = await e.createWritable();
          console.log("[导出/导入] 🚀 使用 File System Access API 流式寫入");
          Vt(L("progressPhasePreparing"));
        } catch (w) {
          if (w.name === "AbortError") {
            return;
          }
          console.warn("[导出/导入] showSaveFilePicker 失敗，回退到 Blob:", w);
        }
      }
      let R = null;
      let N = null;
      let M = null;
      let G = null;
      const W = new TextEncoder();
      if (!B) {
        if (typeof CompressionStream == "function") {
          const e = new CompressionStream("gzip");
          R = e.writable.getWriter();
          const t = e.readable.getReader();
          let a = null;
          try {
            if (navigator.storage && typeof navigator.storage.getDirectory == "function") {
              const e = await navigator.storage.getDirectory();
              try {
                for await (const [t] of e.entries()) {
                  if (t.startsWith("_export_temp_")) {
                    try {
                      await e.removeEntry(t);
                    } catch (S) {}
                  }
                }
              } catch (S) {}
              const t = `_export_temp_${Date.now()}_${Math.random().toString(36).slice(2, 8)}.gz`;
              G = await e.getFileHandle(t, {
                create: true
              });
              a = await G.createWritable();
              console.log("[导出/导入] 🗜️ 流式 gzip + OPFS 暫存（記憶體最低）");
            }
          } catch (_) {
            console.warn("[导出/导入] OPFS 不可用，回退到 JS chunks:", _.message);
            G = null;
          }
          if (!a) {
            N = [];
            console.log("[导出/导入] 🗜️ 流式 gzip（記憶體陣列模式）");
          }
          let i = 0;
          M = (async () => {
            while (true) {
              const {
                done: e,
                value: o
              } = await t.read();
              if (e) {
                break;
              }
              if (a) {
                await a.write(o);
              } else {
                N.push(o);
              }
              i++;
            }
            if (a) {
              await a.close();
            }
          })();
          M.__getHeartbeat = () => i;
        } else {
          T = [];
          console.log("[导出/导入] 使用 Blob 回退模式（無 CompressionStream，舊瀏覽器）");
        }
      }
      const J = async e => {
        D += e.length;
        if (B) {
          await B.write(e);
        } else if (R) {
          try {
            await R.ready;
          } catch (S) {}
          await R.write(W.encode(e));
        } else {
          T.push(e);
        }
      };
      let V = 0;
      let q = false;
      const Y = !B && !R;
      const X = Y ? 125829120 : 524288000;
      const Q = Y ? 230686720 : 2147483648;
      await J("{\"version\":5,\"timestamp\":" + Date.now());
      await J(",\"userAgent\":" + JSON.stringify(navigator.userAgent));
      await J(",\"appVersion\":" + JSON.stringify(`${O} (${H})`));
      await J(",\"data\":{\"indexedDB\":{}");
      Vt(L("progressPhaseLocalStorage"));
      const Z = Lc();
      console.log(`[导出/导入] 获取到 ${Object.keys(Z).length} 个 localStorage 项`);
      const ee = Kc(Z, "localStorage", g, b);
      const te = y ? ed(ee, x) : ee;
      const ae = Object.keys(te).length;
      await J(",\"localStorage\":");
      await J("{");
      {
        const e = Object.keys(te);
        let t = true;
        for (const a of e) {
          const e = te[a];
          if (!t) {
            await J(",");
          }
          t = false;
          await J(JSON.stringify(a) + ":");
          try {
            let t = JSON.stringify(e);
            if (t && t.length > X / 3) {
              t = JSON.stringify(rd(e, {}));
              q = true;
            }
            await J(t === undefined ? "null" : t);
          } catch (A) {
            if (ld(A)) {
              await J(JSON.stringify(rd(e, {})));
              q = true;
            } else {
              console.warn(`[导出] localStorage key "${a}" 序列化失敗，已跳過:`, A);
              await J("null");
            }
          }
          await new Promise(e => setTimeout(e, 0));
        }
      }
      await J("}");
      const ie = new Set(["ttsAudio", "imageStore", "wallpapers", "stickerStore", "customNoises", "customBgm", "pomodoroData", "whiteDogData", "flashMoments", "isekaiSaves", "couplesData", "goingOutAreas", "customWidgetTemplates", "customWidgetState", "groupSettings", "stickers", "roleStickers", "kaomojis", "customGames", "chikanPhoneSkins"]);
      const oe = new Set(["messages", "favorites", "memory", "summaryEntries", "thinkingStore", "tmStories", "multiSceneStories", "userPosts"]);
      const ne = e => ie.has(e) ? 4 : oe.has(e) ? 25 : 80;
      const se = X;
      let le = 0;
      await J(",\"structuredDB\":{");
      let re = Jc(g);
      const ce = Array.isArray(g) && g.length > 0 && re.includes("imageStore");
      if (ce) {
        re = re.filter(e => e !== "imageStore").concat("imageStore");
      }
      const de = ce ? new Set() : null;
      let ge = null;
      const pe = ce ? new Set() : null;
      if (ce) {
        try {
          ge = new Set(await m.table("imageStore").toCollection().primaryKeys());
        } catch (S) {
          ge = new Set();
        }
      }
      let ue = true;
      const he = y ? new Set() : null;
      for (const e of re) {
        if (ut.has(e)) {
          continue;
        }
        let t = false;
        try {
          if (!ue) {
            await J(",");
          }
          ue = false;
          await J(JSON.stringify(e) + ":[");
          t = true;
          const a = m.table(e);
          const i = await a.count();
          Vt(L("progressPhaseReadTable", {
            table: e
          }), i);
          let o = true;
          let n = 0;
          let s = 0;
          const l = ne(e);
          const r = async t => {
            if (!t) {
              return;
            }
            if (e === "globalSettings" && !Vc(t, g)) {
              return;
            }
            if (!od(e, t, b)) {
              return;
            }
            if (!ad(e, t, y ? x : null, he)) {
              return;
            }
            if (y && e === "messages") {
              const e = (t == null ? undefined : t.msgId) ?? (t == null ? undefined : t._id);
              if (e != null) {
                he.add(String(e));
              }
            }
            if (de && e !== "imageStore") {
              gt(t, de);
              if (ge && ge.size > 0) {
                pt(t, ge, pe, "", e);
              }
            }
            if (!o) {
              await J(",");
            }
            o = false;
            const a = e === "imageStore" ? await j(t) : t;
            let i = await Nc(a);
            if (le > se) {
              if (!q) {
                console.warn(`[导出] ⚠️ 累積大小 ${(le / 1024 / 1024).toFixed(0)}MB 超過閾值，自動精簡後續資料`);
                q = true;
              }
              i = rd(i, {
                removedFields: 0,
                removedLargeStrings: 0,
                removedBlobPayloads: 0
              });
            }
            try {
              let t = JSON.stringify(i);
              if (t.length > nt && e !== "imageStore") {
                const a = cd(i, nt);
                if (a.dropped.length > 0) {
                  i = a.row;
                  t = JSON.stringify(i);
                  q = true;
                  console.warn(`[导出] ⚠️ 表 ${e} 單行超 ${64 .toFixed(0)}MB，已瘦身保留骨架，丟棄大字段: ${a.dropped.join(", ")}`);
                }
              }
              le += t.length;
              s += t.length;
              if (le > Q) {
                throw new Error(`导出数据过大（约 ${(le / 1024 / 1024).toFixed(0)}MB），为防止浏览器崩溃已中止。请改用分量导出，或先清理语音/图片缓存后再导出。`);
              }
              await J(t);
            } catch (l) {
              if (!ld(l)) {
                throw l;
              }
              {
                const e = {
                  removedFields: 0,
                  removedLargeStrings: 0,
                  removedBlobPayloads: 0
                };
                const t = JSON.stringify(rd(i, e));
                le += t.length;
                s += t.length;
                if (le > Q) {
                  throw new Error(`导出数据过大（约 ${(le / 1024 / 1024).toFixed(0)}MB），为防止浏览器崩溃已中止。请改用分量导出，或先清理语音/图片缓存后再导出。`);
                }
                await J(t);
                q = true;
              }
            }
            n++;
            Jt({
              current: n
            });
            if (s > 2097152) {
              await new Promise(e => setTimeout(e, 0));
              s = 0;
            }
          };
          let c = null;
          try {
            c = await a.toCollection().primaryKeys();
          } catch (I) {
            console.warn(`[导出] ${e} primaryKeys() 失敗，回退 offset 分批:`, I == null ? undefined : I.message);
          }
          if (c && ce && e === "imageStore") {
            c = c.filter(e => de.has(e));
          }
          if (c) {
            for (let e = 0; e < c.length; e += l) {
              const t = c.slice(e, e + l);
              const i = await a.bulkGet(t);
              s = 0;
              for (const e of i) {
                await r(e);
              }
              await new Promise(e => setTimeout(e, 0));
            }
            c = null;
          } else {
            for (let e = 0; e < i; e += l) {
              const t = await a.offset(e).limit(l).toArray();
              s = 0;
              for (const e of t) {
                await r(e);
              }
              await new Promise(e => setTimeout(e, 0));
            }
          }
          await J("]");
          V += n;
        } catch (P) {
          console.warn(`[导出 structuredDB] 读取表失败: ${e}`, P);
          if (t) {
            await J("]");
          } else {
            if (!ue) {
              await J(",");
            }
            ue = false;
            await J(JSON.stringify(e) + ":[]");
          }
        }
      }
      if (pe && pe.size > 0) {
        console.warn("[导出] ⚠️ 偵測到不符合「imageStore 引用欄位 key 必含 ref」約定的欄位，分量匯出可能漏帶這些圖片（匯入端會圖裂）。請在 collectImageStoreRefs 註解處更新約定，或將欄位改名含 ref：\n" + [...pe].slice(0, 50).join("\n"));
      }
      await J("}");
      await J("}");
      const me = {
        itemCount: {
          indexedDB: 0,
          localStorage: ae,
          structuredDB: V
        },
        exportType: g ? "partial" : "filtered",
        selectedCategories: g,
        selectedUsers: b,
        selectedChatEntities: y ? x : null
      };
      if (q) {
        me.exportReduction = {
          audioAndBinaryPayloadStripped: true
        };
      }
      await J(",\"metadata\":" + JSON.stringify(me));
      await J("}");
      Vt(L("progressPhaseFinalizing"));
      const be = (D / 1024 / 1024).toFixed(2);
      const xe = me.itemCount.localStorage + V;
      let ye = "stream";
      let fe = E;
      if (B) {
        await B.close();
        B = null;
        console.log(`[导出/导入] ✅ 流式导出完成: ${be}MB, ${xe} 项数据`);
      } else if (R) {
        await R.close();
        R = null;
        const t = M.__getHeartbeat || (() => 0);
        await new Promise((e, a) => {
          let i = t();
          let o = Date.now();
          const n = setInterval(() => {
            const e = t();
            if (e !== i) {
              i = e;
              o = Date.now();
            } else if (Date.now() - o > 30000) {
              clearInterval(n);
              a(new Error("压缩流卡住超过 30 秒（iOS Safari + OPFS 已知问题），请重试或先关闭其他 App 释放内存"));
            }
          }, 1000);
          M.then(() => {
            clearInterval(n);
            e();
          }, e => {
            clearInterval(n);
            a(e);
          });
        });
        const s = E.replace(/\.json$/i, ".json.gz");
        fe = s;
        let l = false;
        let r = null;
        if (G && e()) {
          try {
            const e = await k(G, s);
            if (e.success) {
              ye = "native-fs";
              l = true;
              r = e.path;
              console.log(`[导出/导入] ✅ Native 直接搬運完成: ${e.path}`);
            } else {
              console.warn(`[导出/导入] Native 搬運失敗 (${e.error}),fallback web 路徑`);
            }
          } catch ($) {
            console.warn("[导出/导入] Native 路徑異常,fallback web 路徑:", $);
          }
        }
        let c = null;
        let d = "0";
        if (!l) {
          if (G) {
            c = await G.getFile();
          } else {
            c = new Blob(N, {
              type: "application/gzip"
            });
            N = null;
          }
          d = (c.size / 1024 / 1024).toFixed(2);
        }
        console.log(`[导出/导入] 🗜️ 流式 gzip 完成: ${be}MB${l ? " (native-fs)" : ` → ${d}MB${G ? " (via OPFS)" : ""}`}`);
        if (!l) {
          const t = typeof window != "undefined" && (((a = window.matchMedia) == null ? undefined : a.call(window, "(display-mode: standalone)").matches) || ((i = window.matchMedia) == null ? undefined : i.call(window, "(display-mode: fullscreen)").matches) || ((o = window.matchMedia) == null ? undefined : o.call(window, "(display-mode: minimal-ui)").matches) || ((n = window.navigator) == null ? undefined : n.standalone) === true);
          let l = false;
          if (t && typeof navigator != "undefined" && typeof navigator.share == "function") {
            try {
              const e = new File([c], s, {
                type: "application/gzip"
              });
              if (!navigator.canShare || !!navigator.canShare({
                files: [e]
              })) {
                await navigator.share({
                  files: [e],
                  title: K("msgExportShareTitle", s)
                });
                l = true;
                ye = "share";
                console.log(`[导出/导入] ✅ 透過系統分享面板送出: ${d}MB`);
              }
            } catch (z) {
              if ((z == null ? undefined : z.name) === "AbortError") {
                console.log("[导出/导入] 用戶取消分享");
                return;
              }
              console.warn("[导出/导入] Web Share 失敗，回退 <a download>:", z);
            }
          }
          if (!l) {
            let t = false;
            if (e()) {
              const e = await C(c, s);
              if (e.success) {
                ye = "native-fs";
                r = e.path;
                t = true;
              }
            }
            if (!t) {
              ye = "download";
              const e = URL.createObjectURL(c);
              const t = document.createElement("a");
              t.href = e;
              t.download = s;
              document.body.appendChild(t);
              t.click();
              document.body.removeChild(t);
              setTimeout(() => {
                try {
                  URL.revokeObjectURL(e);
                } catch (S) {}
              }, 300000);
            }
          }
        }
        console.log(`[导出/导入] ✅ 导出完成: ${l ? `${be}MB → native-fs` : `${d}MB`}, ${xe} 项数据`);
      } else {
        const t = new Blob(T, {
          type: "application/json"
        });
        T.length = 0;
        T = null;
        const a = typeof window != "undefined" && (((s = window.matchMedia) == null ? undefined : s.call(window, "(display-mode: standalone)").matches) || ((l = window.matchMedia) == null ? undefined : l.call(window, "(display-mode: fullscreen)").matches) || ((r = window.matchMedia) == null ? undefined : r.call(window, "(display-mode: minimal-ui)").matches) || ((d = window.navigator) == null ? undefined : d.standalone) === true);
        let i = false;
        if (a && typeof navigator != "undefined" && typeof navigator.share == "function") {
          try {
            const e = new File([t], E, {
              type: "application/json"
            });
            if (!navigator.canShare || !!navigator.canShare({
              files: [e]
            })) {
              await navigator.share({
                files: [e],
                title: K("msgExportShareTitle", E)
              });
              i = true;
              ye = "share";
              console.log(`[导出/导入] ✅ 透過系統分享面板送出: ${be}MB`);
            }
          } catch (z) {
            if ((z == null ? undefined : z.name) === "AbortError") {
              console.log("[导出/导入] 用戶取消分享");
              return;
            }
            console.warn("[导出/导入] Web Share 失敗，回退 <a download>:", z);
          }
        }
        if (!i) {
          let a = false;
          if (e()) {
            const e = await C(t, E);
            if (e.success) {
              ye = "native-fs";
              nativeExportPath = e.path;
              a = true;
            }
          }
          if (!a) {
            ye = "download";
            const e = URL.createObjectURL(t);
            const a = document.createElement("a");
            a.href = e;
            a.download = E;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(e);
          }
        }
        console.log(`[导出/导入] ✅ 导出完成: ${be}MB, ${xe} 项数据`);
      }
      const ve = q ? "\n\n⚠️ 由于数据量过大，导出文件已自动剔除语音与超大二进制字段（文本聊天与设置仍保留）。" : "";
      let we = "";
      if (ye === "download") {
        we = "\n\n" + L("msgExportLocationDownload", {
          fileName: fe
        });
      } else if (ye === "share") {
        we = "\n\n" + K("msgExportLocationShare", "📤 已開啟系統分享面板，請選擇要保存到的位置。");
      } else if (ye === "native-fs") {
        we = "\n\n" + L("msgExportLocationNative", {
          fileName: fe,
          path: nativeExportPath ? `\n${nativeExportPath}` : ""
        });
      }
      c(`${L("msgExportSuccess")}\n\n${L("msgExportSuccessDetail", {
        size: be,
        count: xe
      })}${we}${ve}`);
    } catch (_) {
      if (fileStream) {
        try {
          await fileStream.abort();
        } catch (S) {}
      }
      if (compressWriter) {
        try {
          await compressWriter.abort();
        } catch (S) {}
      }
      if (opfsTempHandle) {
        try {
          const e = await navigator.storage.getDirectory();
          await e.removeEntry(opfsTempHandle.name);
        } catch (S) {}
      }
      console.error("[导出/导入] ❌ 导出失败:", _);
      c(L("msgExportFailed") + ": " + _.message);
    } finally {
      qt();
      if (v) {
        try {
          await v.release();
        } catch (S) {}
      }
      if (f) {
        W();
      }
    }
  };
  const gd = async (e, a, i, o) => {
    if (typeof window != "undefined" && window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform()) {
      try {
        const {
          CapacitorHttp: n
        } = await t(async () => {
          const {
            CapacitorHttp: e
          } = await import("./native-pet-CTNtZgMA.js").then(e => e.cE);
          return {
            CapacitorHttp: e
          };
        }, __vite__mapDeps([0, 1, 2, 3, 4, 5]));
        if (n) {
          const t = await n.request({
            url: e,
            method: a,
            headers: i,
            data: o,
            connectTimeout: 180000,
            readTimeout: 180000
          });
          let s = t.data;
          if (typeof s == "string") {
            try {
              s = JSON.parse(s);
            } catch (r) {}
          }
          return {
            ok: t.status >= 200 && t.status < 300,
            status: t.status,
            data: s
          };
        }
      } catch (c) {
        console.warn("[ghHttpRequest] CapacitorHttp failed, fallback fetch:", c == null ? undefined : c.message);
      }
    }
    const n = {
      method: a,
      headers: i
    };
    if (o) {
      n.body = JSON.stringify(o);
    }
    const s = await fetch(e, n);
    let l = null;
    try {
      l = await s.json();
    } catch (r) {}
    return {
      ok: s.ok,
      status: s.status,
      data: l
    };
  };
  const pd = async (e, t, a = null) => {
    const i = `https://api.github.com/repos/${fl}/${wl}/contents/${t}`;
    const o = {
      Authorization: `Bearer ${xl}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json"
    };
    const n = await gd(i, e, o, a);
    if (!n.ok) {
      const e = n.data && n.data.message || "";
      throw new Error(e || `GitHub API ${n.status}`);
    }
    return n.data;
  };
  const ud = async (e, t, a = null) => {
    const i = `https://api.github.com/repos/${fl}/${wl}/git/${t}`;
    const o = {
      Authorization: `Bearer ${xl}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json"
    };
    const n = await gd(i, e, o, a);
    if (!n.ok) {
      const e = n.data && n.data.message || "";
      throw new Error(e || `GitHub Git API ${n.status}`);
    }
    return n.data;
  };
  const hd = e => {
    const t = new TextEncoder().encode(e);
    let a = "";
    for (let i = 0; i < t.length; i++) {
      a += String.fromCharCode(t[i]);
    }
    return btoa(a);
  };
  const md = async () => {
    const e = `https://api.github.com/repos/${fl}/${wl}`;
    const t = {
      Authorization: `Bearer ${xl}`,
      Accept: "application/vnd.github.v3+json"
    };
    const a = await gd(e, "GET", t, null);
    if (!a.ok) {
      const e = a.data && a.data.message || "";
      throw new Error(`Failed to get repo info (${a.status}${e ? ": " + e : ""})`);
    }
    return a.data && a.data.default_branch || "main";
  };
  const bd = async e => {
    try {
      const t = await pd("GET", e);
      if (t && t.sha) {
        await pd("DELETE", e, {
          message: `cleanup obsolete ${e}`,
          sha: t.sha
        });
      }
    } catch (t) {}
  };
  const xd = async (e, t, a) => {
    const i = new TextEncoder().encode(t).length;
    if (i > 20971520) {
      console.log(`[GitHub 備份] 文件 ${e} 大小 ${(i / 1024 / 1024).toFixed(1)}MB，壓縮後使用 Git Data API`);
      return (async (e, t, a) => {
        const i = new TextEncoder().encode(t).length;
        console.log(`[GitHub 備份] 壓縮前: ${(i / 1024 / 1024).toFixed(1)}MB`);
        const o = await (async e => {
          const t = new Blob([e]).stream().pipeThrough(new CompressionStream("gzip"));
          const a = await new Response(t).blob();
          return new Promise((e, t) => {
            const i = new FileReader();
            i.onload = () => e(i.result.split(",")[1]);
            i.onerror = t;
            i.readAsDataURL(a);
          });
        })(t);
        const n = o.length * 0.75;
        console.log(`[GitHub 備份] 壓縮後: ${(n / 1024 / 1024).toFixed(1)}MB`);
        const s = await ud("POST", "blobs", {
          content: o,
          encoding: "base64"
        });
        const l = await md();
        const r = (await ud("GET", `ref/heads/${l}`)).object.sha;
        const c = (await ud("GET", `commits/${r}`)).tree.sha;
        const d = e.replace(/\.json$/i, "") + ".json.gz";
        const g = await ud("POST", "trees", {
          base_tree: c,
          tree: [{
            path: d,
            mode: "100644",
            type: "blob",
            sha: s.sha
          }]
        });
        const p = await ud("POST", "commits", {
          message: a,
          tree: g.sha,
          parents: [r]
        });
        await ud("PATCH", `refs/heads/${l}`, {
          sha: p.sha
        });
        await bd(e);
        return p;
      })(e, t, a);
    }
    let o;
    let n = null;
    try {
      const t = await pd("GET", e);
      n = t && t.sha ? t.sha : null;
    } catch {}
    const s = {
      message: a,
      content: hd(t)
    };
    if (n) {
      s.sha = n;
    }
    try {
      o = await pd("PUT", e, s);
    } catch (r) {
      const t = r && r.message ? String(r.message) : "";
      if (!/sha.*(wasn't|was not) supplied|sha.*required|does not match|\b409\b/i.test(t)) {
        throw r;
      }
      {
        const t = await fd(e);
        if (t && t.sha) {
          o = await pd("PUT", e, {
            ...s,
            sha: t.sha
          });
        } else {
          if (!n) {
            throw r;
          }
          {
            const {
              sha: t,
              ...a
            } = s;
            o = await pd("PUT", e, a);
          }
        }
      }
    }
    const l = e.replace(/\.json$/i, "") + ".json.gz";
    await bd(l);
    return o;
  };
  const yd = async (e, t = false) => {
    const a = await ud("GET", `blobs/${e}`);
    if (!a.content) {
      throw new Error("GH_BLOB_EMPTY");
    }
    const i = atob(a.content.replace(/\n/g, ""));
    const o = Uint8Array.from(i, e => e.charCodeAt(0));
    if (t) {
      return (async e => {
        const t = new Blob([e]).stream().pipeThrough(new DecompressionStream("gzip"));
        return new Response(t).text();
      })(o.buffer);
    } else {
      return new TextDecoder().decode(o);
    }
  };
  const fd = async e => {
    const t = await md();
    const a = await ud("GET", `ref/heads/${t}`);
    const i = (await ud("GET", `commits/${a.object.sha}`)).tree.sha;
    return ((await ud("GET", `trees/${i}?recursive=1`)).tree || []).find(t => t.path === e);
  };
  const vd = async e => {
    const t = e.replace(/\.json$/i, "") + ".json.gz";
    try {
      const t = await pd("GET", e);
      if (t.content) {
        const e = Uint8Array.from(atob(t.content.replace(/\n/g, "")), e => e.charCodeAt(0));
        return new TextDecoder().decode(e);
      }
      if (t.sha) {
        console.log("[GitHub 備份] 大文件，透過 Blob API 下載...");
        return yd(t.sha, false);
      }
    } catch (i) {
      console.log(`[GitHub 備份] ${e} 不存在或讀取失敗，嘗試 .gz 版本...`, i.message);
    }
    try {
      const e = await fd(t);
      if (e) {
        console.log(`[GitHub 備份] 找到壓縮檔 ${t} (${(e.size / 1024 / 1024).toFixed(1)}MB)，解壓中...`);
        return yd(e.sha, true);
      }
    } catch (i) {
      console.log("[GitHub 備份] .gz 版本也不存在", i.message);
    }
    const a = await fd(e);
    if (!a) {
      throw new Error(`File not found: ${e}`);
    }
    return yd(a.sha, false);
  };
  const wd = () => !!xl && !!fl && !!wl || (c(L("msgGhMissingConfig")), false);
  const Sd = async e => {
    try {
      const [t, a] = await Promise.all([m.table("characters").count(), m.table("users").count()]);
      if (t === 0 && a === 0) {
        console.warn("[GitHub 備份] 本地庫讀取為空(角色 0 / 用戶 0),疑為連線暫態,已攔截上傳以防毒化雲端備份");
        if (!e) {
          c(K("ghUploadAbortedEmpty", "已攔截上傳：本地資料讀取為空（可能是資料庫連線暫時異常）。為避免空資料覆蓋雲端備份，已取消本次上傳。"));
        }
        return false;
      }
    } catch (t) {
      console.warn("[GitHub 備份] 上傳前空庫檢查讀取失敗,已攔截上傳:", t);
      if (!e) {
        c(K("ghUploadAbortedEmpty", "已攔截上傳：本地資料讀取為空（可能是資料庫連線暫時異常）。為避免空資料覆蓋雲端備份，已取消本次上傳。"));
      }
      return false;
    }
    return true;
  };
  const jd = async () => {
    const e = jl.replace(/\.json$/i, "");
    try {
      const t = await fd(`${e}/_localStorage.json`);
      return Boolean(t);
    } catch (t) {
      return false;
    }
  };
  const kd = new Set(["imageStore", "stickerStore", "wallpapers", "messages", "stickers", "roleStickers", "ttsAudio"]);
  const Cd = async (e, t) => {
    const a = [];
    for (let o = 0; o < e.length; o++) {
      const n = await Nc(e[o]);
      let s = rd(n, {});
      if (t !== "imageStore") {
        let e = 0;
        try {
          e = JSON.stringify(s).length;
        } catch (i) {
          e = 67108865;
        }
        if (e > nt) {
          const e = cd(s, nt);
          s = e.row;
          if (e.dropped.length) {
            console.warn(`[GitHub 備份] ⚠️ 表 ${t} 單行超限，已瘦身保留骨架，丟棄: ${e.dropped.join(", ")}`);
          }
        }
      }
      a.push(s);
      if (o > 0 && o % 10 == 0) {
        await new Promise(e => setTimeout(e, 0));
      }
    }
    return a;
  };
  const _d = async (e = false) => {
    if (!wd()) {
      return;
    }
    if (Bl) {
      return;
    }
    if (!(await Sd(e))) {
      return;
    }
    let t = false;
    Tl(true);
    try {
      U("gh-upload-streaming", 3600000);
      t = true;
      await Nl(async () => {
        console.log("[GitHub 備份] 開始流式上傳...");
        const e = jl.replace(/\.json$/i, "");
        const t = Jc(null);
        const a = Lc();
        const i = Kc(a, "localStorage");
        console.log("[GitHub 備份] 上傳 localStorage");
        await xd(`${e}/_localStorage.json`, JSON.stringify(i), "backup localStorage");
        await new Promise(e => setTimeout(e, 300));
        const o = {};
        const n = {};
        const s = async a => {
          const i = {
            version: 6,
            timestamp: Date.now(),
            appVersion: `${O} (${H})`,
            tables: t,
            chunkedTables: Object.keys(o).length > 0 ? o : undefined,
            completedTables: Object.keys(n).length > 0 ? n : undefined,
            inProgress: a
          };
          await xd(`${e}/_manifest.json`, JSON.stringify(i, null, 2), a ? "backup manifest (in progress)" : "backup manifest");
        };
        try {
          await s(true);
        } catch (p) {
          console.warn("[GitHub 備份] 初始 manifest 寫入失敗（不阻塞上傳）:", p);
        }
        await new Promise(e => setTimeout(e, 300));
        let l = false;
        let r = Date.now();
        const c = async (e = false) => {
          if (!l) {
            return;
          }
          const t = Date.now();
          if (e || !(t - r < 5000)) {
            try {
              await s(true);
              l = false;
              r = t;
            } catch (p) {
              console.warn("[GitHub 備份] manifest 增量更新失敗（不阻塞上傳）:", p);
            }
          }
        };
        const d = [];
        for (let h = 0; h < t.length; h++) {
          const a = t[h];
          if (ut.has(a)) {
            continue;
          }
          let i = 0;
          try {
            const s = m.table(a);
            i = await s.count();
            console.log(`[GitHub 備份] 上傳 ${a} (${h + 1}/${t.length}, ${i} 筆)`);
            const r = kd.has(a) ? 50 : 800;
            if (i > r) {
              const t = Math.ceil(i / r);
              console.log(`[GitHub 備份] ${a} 分 ${t} 片上傳 (每片 ${r} 筆)`);
              for (let i = 0; i < t; i++) {
                const n = await s.offset(i * r).limit(r).toArray();
                const d = await Cd(n, a);
                await xd(`${e}/${a}_chunk_${i}.json`, JSON.stringify(d), `backup ${a} chunk ${i + 1}/${t}`);
                o[a] = i + 1;
                l = true;
                await c();
                await new Promise(e => setTimeout(e, 300));
                console.log(`[GitHub 備份]   片 ${i + 1}/${t} 完成 (${n.length} 筆)`);
              }
            } else {
              const t = await s.toArray();
              const i = await Cd(t, a);
              await xd(`${e}/${a}.json`, JSON.stringify(i), `backup ${a}`);
              n[a] = true;
              l = true;
              await c();
              await new Promise(e => setTimeout(e, 300));
            }
          } catch (u) {
            console.warn(`[GitHub 備份] 表 ${a} 上傳失敗:`, u);
            if (i > 0) {
              d.push(a);
            }
          }
        }
        if (d.length > 0) {
          console.error("[GitHub 備份] ❌ 上傳不完整，以下非空表失敗:", d.join(", "));
          const e = new Error(L("msgGhUploadIncomplete").replace("{tables}", d.slice(0, 5).join(", ") + (d.length > 5 ? `…(+${d.length - 5})` : "")));
          e._ghIncomplete = true;
          throw e;
        }
        await s(false);
        console.log("[GitHub 備份] ✅ 流式上傳完成");
        if (Object.keys(o).length > 0) {
          console.log("[GitHub 備份] 切片表:", Object.entries(o).map(([e, t]) => `${e}(${t}片)`).join(", "));
        }
        const g = Date.now();
        Rl.current = g;
        await Dr(g);
      });
      if (!e) {
        c(L("msgGhUploadSuccess"));
      }
    } catch (a) {
      console.error("[GitHub 備份] ❌ 流式上傳失敗:", a);
      if (!e) {
        c((a == null ? undefined : a._ghIncomplete) ? a.message : L("msgGhUploadFailed") + ": " + a.message);
      }
    } finally {
      if (t) {
        W();
      }
      Tl(false);
    }
  };
  return T.jsxs("div", {
    id: "api-settings-screen",
    className: "screen " + (Ke ? "active" : ""),
    children: [T.jsx(ee, {}), T.jsx(Oe, {
      progress: Lt,
      t: L
    }), T.jsx("input", {
      type: "file",
      ref: mc,
      style: {
        display: "none"
      },
      accept: e() ? undefined : ".json,.gz,.json.gz,application/json,application/gzip,application/x-gzip,application/octet-stream",
      onChange: async t => {
        var a;
        const i = t.target.files[0];
        if (!i) {
          return;
        }
        let o = false;
        let n = null;
        try {
          const t = tt();
          const r = await et(i);
          if (r && !t.gzipDecompress) {
            await c("Browser does not support DecompressionStream (need Safari 16.4+, Chrome 80+, Firefox 113+). Please use a newer browser or import an uncompressed .json backup.");
            return;
          }
          const d = (i.size / 1024 / 1024).toFixed(1);
          let g = {
            version: undefined,
            timestamp: undefined,
            multiPart: null
          };
          try {
            g = await Ze(i, r);
          } catch (s) {
            console.warn("[导出/导入] header peek 失敗（沿用基本資訊）:", s.message);
          }
          const p = g.multiPart;
          const u = !p || p.index === 0;
          const x = p && p.index > 0;
          const y = [`${i.name} (${d}MB)`, g.version != null ? `v${g.version}` : null, g.timestamp != null ? new Date(g.timestamp).toLocaleString() : null].filter(Boolean).join("\n");
          let f = x ? `${L("msgImportContinuationPart", {
            index: p.index + 1,
            total: p.total,
            count: "?"
          })}\n\n${y}` : `${L("msgImportConfirm")}\n\n${y}`;
          if (e()) {
            f += "\n\n⚠️ 导入期间请保持糯叽机在前台,不要切到其他 App,否则数据可能写一半导致损坏。";
          }
          if (!(await h(f))) {
            return;
          }
          U("import-backup", 3600000);
          o = true;
          n = await at("import");
          Kt("import", L("progressPhasePreparing"));
          console.log(`[导出/导入] ${r ? "🗜️ gzip" : "📄 JSON"} 檔 (${d}MB)，流式解析+寫入...`);
          const v = i.stream();
          const w = r ? v.pipeThrough(new DecompressionStream("gzip")) : v;
          const S = 200;
          const j = 16777216;
          const k = 5242880;
          const C = Object.create(null);
          const _ = Object.create(null);
          const A = new Set();
          const I = new Set();
          let P = 0;
          let $ = -1;
          const z = new Map();
          const E = async (e, t) => {
            if (e === "multiSceneSummaries") {
              return await ht(e, t);
            }
            let a = 0;
            await m.transaction("rw", m.table(e), async () => {
              await m.table(e).clear();
              a = await ht(e, t);
            });
            return a;
          };
          const B = async e => {
            const t = C[e];
            if (!t || t.length === 0) {
              return;
            }
            const a = t.length;
            const i = u && !A.has(e) ? () => E(e, t) : () => ht(e, t);
            try {
              P += await i();
              if (u) {
                A.add(e);
              }
            } catch (s) {
              const l = (s == null ? undefined : s.message) || String(s);
              const r = /No such table|not part of database|is not a known/i.test(l);
              if (/Connection to Indexed Database server lost|DatabaseClosedError|database is closed/i.test(l)) {
                let a = false;
                for (let t = 0; t < 3 && !a; t++) {
                  try {
                    await b();
                  } catch (o) {}
                  await new Promise(e => setTimeout(e, 300 + t * 300));
                  try {
                    P += await i();
                    if (u) {
                      A.add(e);
                    }
                    a = true;
                    console.warn(`[导出/导入] ⚠️ ${e} 連線丟失後第 ${t + 1} 次重試成功`);
                  } catch (o) {}
                }
                if (a) {
                  t.length = 0;
                  _[e] = 0;
                  await new Promise(e => setTimeout(e, 0));
                  return;
                }
              }
              if (r) {
                console.warn(`[导出/导入] bulkPut to ${e} 失敗（表可能不存在）:`, l);
                if (z.has(e)) {
                  z.get(e).lostRows += a;
                } else {
                  z.set(e, {
                    reason: "no-table",
                    message: l,
                    lostRows: a
                  });
                }
              } else {
                console.error(`[导出/导入] ❌ bulkPut to ${e} 失敗（資料未寫入）:`, l);
                if (z.has(e)) {
                  z.get(e).lostRows += a;
                } else {
                  z.set(e, {
                    reason: "write-failed",
                    message: l,
                    lostRows: a
                  });
                }
              }
            }
            t.length = 0;
            _[e] = 0;
            await new Promise(e => setTimeout(e, 0));
          };
          const T = await Qe(w, st, {
            onRow: async (e, t, a) => {
              if (a) {
                return;
              }
              I.add(e);
              if (!C[e]) {
                C[e] = [];
                _[e] = 0;
              }
              const i = Mc(t);
              let o;
              try {
                const e = JSON.stringify(i);
                o = e ? e.length : 0;
              } catch (n) {
                o = 0;
              }
              if (o > k) {
                console.warn(`[导出/导入] ⚠️ 超大 row（${(o / 1024 / 1024).toFixed(1)}MB）單獨寫入表 ${e}`);
                await B(e);
                C[e].push(i);
                _[e] = o;
                Vt(L("progressPhaseRestoreTable", {
                  table: e
                }));
                Jt({
                  current: P,
                  total: P + 1,
                  __force: true
                });
                await B(e);
                return;
              }
              C[e].push(i);
              _[e] += o;
              if (C[e].length >= S || _[e] >= j) {
                Vt(L("progressPhaseRestoreTable", {
                  table: e
                }));
                Jt({
                  current: P,
                  total: P + C[e].length,
                  __force: true
                });
                await B(e);
              }
            },
            onProgress: e => {
              const t = Math.floor(e / 1048576);
              if (t !== $) {
                $ = t;
                Vt(`${L("progressPhasePreparing")} ${t}MB`);
              }
            }
          });
          const D = T.backup;
          for (const e of Object.keys(C)) {
            await B(e);
          }
          let F = {};
          if (u && ((a = D.data) == null ? undefined : a.localStorage)) {
            Vt(L("progressPhaseRestoreLocal"));
            F = Kc(D.data.localStorage, "localStorage");
            D.data.localStorage = null;
            Wc();
            const e = Object.entries(F);
            for (let t = 0; t < e.length; t++) {
              const [a, i] = e[t];
              try {
                localStorage.setItem(a, i);
              } catch (l) {}
              if ((t + 1) % 20 == 0) {
                await new Promise(e => setTimeout(e, 0));
              }
            }
          }
          if (u) {
            const e = {};
            for (const t of I) {
              e[t] = true;
            }
            await nd(F, e, "导出/导入");
            await sd();
          }
          console.log("[导出/导入] ✅ 导入完成，准备刷新页面...");
          const R = Object.keys(F).length + P;
          const N = [];
          for (const [e, a] of z.entries()) {
            if (a.reason === "write-failed") {
              N.push(`• ${e}：${a.lostRows} 筆未寫入（${mt(a.message)}）`);
            }
          }
          let M = `${L("msgImportSuccess")}\n\n${L("msgImportedCount", {
            count: R
          })}`;
          if (N.length > 0) {
            M += `\n\n⚠️ ${L("msgImportWriteFailed", {
              tables: N.join("\n")
            })}`;
            console.error("[导出/导入] ⚠️ 部分表寫入失敗:", N);
          }
          if (T.skippedRows > 0) {
            M += `\n\n⚠️ ${L("msgImportSkippedOversized", {
              count: T.skippedRows
            })}`;
            console.warn("[导出/导入] ⚠️ 略過超大 row 數:", T.skippedRows);
          }
          await c(M);
          setTimeout(() => {
            window.location.reload();
          }, 500);
        } catch (r) {
          console.error("[导出/导入] ❌ 导入失败:", r);
          c(L("msgImportFailed") + ": " + r.message);
        } finally {
          qt();
          if (n) {
            try {
              await n.release();
            } catch (l) {}
          }
          if (o) {
            W();
          }
          if (mc.current) {
            mc.current.value = "";
          }
        }
      }
    }), T.jsx("div", {
      className: "floating-back-btn",
      onClick: D,
      style: {
        zIndex: 20
      },
      children: T.jsx(se, {
        size: 24
      })
    }), T.jsx("div", {
      className: "floating-save-btn",
      onClick: hc,
      children: L("btnSave")
    }), T.jsxs("div", {
      className: "settings-scroll-container",
      style: {
        position: "relative",
        zIndex: 10
      },
      children: [T.jsx("h1", {
        className: "large-title",
        children: L("apiSettingsTitle")
      }), T.jsxs(jt, {
        title: L("apiPresetsTitle"),
        children: [T.jsx($t, {
          icon: T.jsx(le, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-blue",
          label: L("apiPresetSelect"),
          value: Pr,
          options: [{
            id: "",
            label: L("apiPresetNone")
          }, ...Ar.map(e => ({
            id: e.id,
            label: e.name
          }))],
          onChange: e => {
            $r(e);
            if (!e) {
              return;
            }
            const t = Ar.find(t => t.id === e);
            if (t) {
              ga(t.name);
              if (t.mainApi) {
                ta(t.mainApi.apiUrl || "");
                ia(t.mainApi.apiKey || "");
                na(t.mainApi.model || "");
                la(t.mainApi.temperature ?? 0.7);
              }
              if (t.secApi && Sa) {
                ua(t.secApi.enabled ?? pa);
                ma(t.secApi.apiUrl || "");
                xa(t.secApi.apiKey || "");
                fa(t.secApi.model || "");
                wa(t.secApi.temperature ?? 0.7);
              }
            }
          }
        }), T.jsx(Ct, {
          icon: T.jsx(re, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-pink",
          label: L("apiPresetName"),
          placeholder: L("apiPresetPlaceholder"),
          value: da,
          onChange: ga
        }), T.jsxs("div", {
          style: {
            display: "flex",
            borderBottom: "1px solid var(--ios-separator)"
          },
          children: [T.jsx("div", {
            style: {
              flex: 1,
              borderRight: "1px solid var(--ios-separator)"
            },
            children: T.jsx(It, {
              icon: T.jsx(ce, {
                size: 18,
                color: "#007AFF"
              }),
              label: "",
              buttonText: L(Pr ? "apiPresetUpdate" : "apiPresetSaveNew"),
              onClick: () => Fr(false)
            })
          }), Pr && T.jsx("div", {
            style: {
              flex: 0.8
            },
            children: T.jsx(It, {
              icon: T.jsx(de, {
                size: 18,
                color: "#007AFF"
              }),
              label: "",
              buttonText: L("apiPresetSaveAsNew"),
              onClick: () => Fr(true)
            })
          })]
        }), Pr && T.jsx(At, {
          icon: T.jsx(ge, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-red",
          label: L("apiPresetDelete"),
          onClick: () => (async e => {
            if (await h(L("apiPresetConfirmDelete"))) {
              const t = Ar.filter(t => t.id !== e);
              Ir(t);
              s.set("apiPresets", t);
              if (Pr === e) {
                $r("");
                ga("");
              }
            }
          })(Pr),
          danger: true
        })]
      }), T.jsxs(jt, {
        title: L("sectionMainApi"),
        children: [T.jsx($t, {
          icon: T.jsx(pe, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-cyan",
          label: L("labelApiType"),
          value: Qt,
          options: [{
            id: "openai",
            label: "OpenAI (GPT-3.5/4/4o)"
          }, {
            id: "gemini",
            label: "Google Gemini"
          }, {
            id: "claude",
            label: "Anthropic Claude"
          }, {
            id: "custom",
            label: L("labelApiTypeCustom")
          }],
          onChange: Zt
        }), T.jsx(Ct, {
          icon: T.jsx(ue, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-blue",
          label: L("labelApiUrl"),
          placeholder: "https://api.openai.com",
          value: ea,
          onChange: ta
        }), T.jsx(Ct, {
          icon: T.jsx(he, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-green",
          label: L("labelApiKey"),
          placeholder: "sk-...",
          type: "password",
          value: aa,
          onChange: ia
        }), Rr.length > 0 ? T.jsx($t, {
          icon: T.jsx(me, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-purple",
          label: L("labelModel"),
          value: oa,
          options: Rr.map(e => ({
            id: e,
            label: e
          })),
          onChange: na
        }) : T.jsx(Ct, {
          icon: T.jsx(me, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-purple",
          label: L("labelModel"),
          placeholder: L("labelModelPlaceholder"),
          value: oa,
          onChange: na
        }), T.jsxs("div", {
          style: {
            display: "flex",
            borderBottom: "1px solid var(--ios-separator)"
          },
          children: [T.jsx("div", {
            style: {
              flex: 1,
              borderRight: "1px solid var(--ios-separator)"
            },
            children: T.jsx(It, {
              icon: T.jsx(be, {
                size: 20
              }),
              buttonText: L(Ur ? "btnFetching" : "btnFetchModels"),
              fullWidth: true,
              onClick: () => {
                qr(ea, aa, Nr, Wr);
              }
            })
          }), T.jsx("div", {
            style: {
              flex: 1
            },
            children: T.jsx(It, {
              icon: T.jsx(xe, {
                size: 20
              }),
              buttonText: L(Yr ? "btnTesting" : "btnTestLink"),
              fullWidth: true,
              onClick: () => tc(ea, aa, oa, Xr)
            })
          })]
        }), T.jsx(It, {
          icon: T.jsx(ye, {
            size: 20
          }),
          buttonText: L("btnResetStreamingBlacklist"),
          fullWidth: true,
          onClick: () => {
            r();
            c(L("msgStreamingBlacklistCleared"));
          }
        }), T.jsx(Pt, {
          icon: T.jsx(fe, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-orange",
          label: L("labelTemperature"),
          value: sa,
          onChange: la,
          min: 0,
          max: 2
        }), T.jsx($t, {
          icon: T.jsx(de, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-purple",
          label: L("labelReasoningEffort"),
          value: ra,
          options: [{
            id: "none",
            label: L("reasoningNone")
          }, {
            id: "low",
            label: L("reasoningLow")
          }, {
            id: "medium",
            label: L("reasoningMedium")
          }, {
            id: "high",
            label: L("reasoningHigh")
          }],
          onChange: ca
        })]
      }), T.jsxs(jt, {
        title: L("sectionSecApi"),
        children: [T.jsx(_t, {
          icon: T.jsx(de, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-teal",
          label: L("labelEnableSecApi"),
          checked: pa,
          onChange: ua
        }), pa && T.jsxs(T.Fragment, {
          children: [T.jsx(_t, {
            icon: T.jsx(be, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelSecApiFollowPreset"),
            checked: Sa,
            onChange: ja
          }), T.jsx("div", {
            style: {
              padding: "4px 16px 8px",
              fontSize: "12px",
              color: "var(--ios-secondary-label)",
              lineHeight: 1.5
            },
            children: L("hintSecApiFollowPreset")
          }), T.jsx(Ct, {
            icon: T.jsx(ue, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-blue",
            label: L("labelSecApiUrl"),
            placeholder: "https://api.openai.com",
            value: ha,
            onChange: ma
          }), T.jsx(Ct, {
            icon: T.jsx(he, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-green",
            label: L("labelSecApiKey"),
            placeholder: "sk-...",
            type: "password",
            value: ba,
            onChange: xa
          }), Mr.length > 0 ? T.jsx($t, {
            icon: T.jsx(me, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-purple",
            label: L("labelSecModel"),
            value: ya,
            options: Mr.map(e => ({
              id: e,
              label: e
            })),
            onChange: fa
          }) : T.jsx(Ct, {
            icon: T.jsx(me, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-purple",
            label: L("labelSecModel"),
            placeholder: L("labelModelPlaceholder"),
            value: ya,
            onChange: fa
          }), T.jsxs("div", {
            style: {
              display: "flex",
              borderBottom: "1px solid var(--ios-separator)"
            },
            children: [T.jsx("div", {
              style: {
                flex: 1,
                borderRight: "1px solid var(--ios-separator)"
              },
              children: T.jsx(It, {
                icon: T.jsx(be, {
                  size: 20
                }),
                buttonText: L(Lr ? "btnFetching" : "btnFetchModels"),
                fullWidth: true,
                onClick: () => {
                  qr(ha, ba, Gr, Kr);
                }
              })
            }), T.jsx("div", {
              style: {
                flex: 1
              },
              children: T.jsx(It, {
                icon: T.jsx(xe, {
                  size: 20
                }),
                buttonText: L(Qr ? "btnTesting" : "btnTestLink"),
                fullWidth: true,
                onClick: () => tc(ha, ba, ya, Zr)
              })
            })]
          }), T.jsx(Pt, {
            icon: T.jsx(fe, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-orange",
            label: L("labelSecTemperature"),
            value: va,
            onChange: wa,
            min: 0,
            max: 2
          })]
        })]
      }), T.jsxs(jt, {
        title: L("sectionVisionApi"),
        children: [T.jsx(_t, {
          icon: T.jsx(ve, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-purple",
          label: L("labelEnableVisionApi"),
          checked: ka,
          onChange: Ca
        }), T.jsx("div", {
          style: {
            padding: "4px 16px 8px",
            fontSize: "12px",
            color: "var(--ios-secondary-label)",
            lineHeight: 1.5
          },
          children: L("hintVisionApi")
        }), ka && T.jsxs(T.Fragment, {
          children: [T.jsx(Ct, {
            icon: T.jsx(ue, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-blue",
            label: L("labelVisionApiUrl"),
            placeholder: "https://api.openai.com",
            value: _a,
            onChange: Aa
          }), T.jsx(Ct, {
            icon: T.jsx(he, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-green",
            label: L("labelVisionApiKey"),
            placeholder: "sk-...",
            type: "password",
            value: Ia,
            onChange: Pa
          }), Or.length > 0 ? T.jsx($t, {
            icon: T.jsx(me, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-purple",
            label: L("labelVisionApiModel"),
            value: $a,
            options: Or.map(e => ({
              id: e,
              label: e
            })),
            onChange: za
          }) : T.jsx(Ct, {
            icon: T.jsx(me, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-purple",
            label: L("labelVisionApiModel"),
            placeholder: L("labelModelPlaceholder"),
            value: $a,
            onChange: za
          }), T.jsxs("div", {
            style: {
              display: "flex",
              borderBottom: "1px solid var(--ios-separator)"
            },
            children: [T.jsx("div", {
              style: {
                flex: 1,
                borderRight: "1px solid var(--ios-separator)"
              },
              children: T.jsx(It, {
                icon: T.jsx(be, {
                  size: 20
                }),
                buttonText: L(Jr ? "btnFetching" : "btnFetchModels"),
                fullWidth: true,
                onClick: () => {
                  qr(_a, Ia, Hr, Vr);
                }
              })
            }), T.jsx("div", {
              style: {
                flex: 1
              },
              children: T.jsx(It, {
                icon: T.jsx(xe, {
                  size: 20
                }),
                buttonText: L(Ea ? "btnTesting" : "btnTestLink"),
                fullWidth: true,
                onClick: () => tc(_a, Ia, $a, Ba)
              })
            })]
          })]
        })]
      }), T.jsxs(jt, {
        title: L("sectionAutoRetry", "自動重試"),
        children: [T.jsx("div", {
          style: {
            padding: "8px 16px",
            fontSize: "12px",
            color: "var(--ios-secondary-label)",
            lineHeight: 1.5
          },
          children: L("autoRetryHint", "付費 API 按 token 計費。關閉自動重試可避免請求失敗時重複扣費，但需要你手動點重試。")
        }), T.jsx(_t, {
          icon: T.jsx(be, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-blue",
          label: L("labelAutoRetryEnabled", "失敗自動重試"),
          checked: Ta,
          onChange: Da
        }), Ta && T.jsx($t, {
          icon: T.jsx(ye, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-orange",
          label: L("labelMaxRetries", "最大重試次數"),
          value: String(Fa),
          options: [{
            id: "0",
            label: L("maxRetries0", "不重試")
          }, {
            id: "1",
            label: L("maxRetries1", "1 次（建議）")
          }, {
            id: "2",
            label: L("maxRetries2", "2 次")
          }, {
            id: "3",
            label: L("maxRetries3", "3 次")
          }],
          onChange: e => Ra(Number(e))
        }), T.jsx(_t, {
          icon: T.jsx(ce, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-teal",
          label: L("labelSecondaryFallbackEnabled", "主 API 失敗時自動切副 API"),
          checked: Na,
          onChange: Ma
        })]
      }), T.jsxs(jt, {
        title: L("sectionVoiceGen", "語音生成"),
        children: [T.jsx(_t, {
          icon: T.jsx(we, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-pink",
          label: L("labelEnableVoiceGen", "啟用語音生成"),
          checked: Qa,
          onChange: Za
        }), Qa && T.jsxs(T.Fragment, {
          children: [T.jsx(_t, {
            icon: T.jsx(Se, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-indigo",
            label: L("labelEnableMinimax"),
            checked: Ga,
            onChange: Oa
          }), Ga && T.jsxs(T.Fragment, {
            children: [T.jsx(Ct, {
              icon: T.jsx(je, {
                size: 20,
                color: "white"
              }),
              iconBg: "bg-indigo",
              label: L("labelGroupId"),
              placeholder: L("labelGroupId"),
              value: Ha,
              onChange: Ua
            }), T.jsx(Ct, {
              icon: T.jsx(he, {
                size: 20,
                color: "white"
              }),
              iconBg: "bg-green",
              label: L("labelApiKey"),
              placeholder: L("placeholderEnterApiKey"),
              type: "password",
              value: Wa,
              onChange: La
            }), T.jsx($t, {
              icon: T.jsx(Se, {
                size: 20,
                color: "white"
              }),
              iconBg: "bg-purple",
              label: L("labelVoiceModel"),
              value: Ka,
              options: [{
                id: "speech-2.8-hd",
                label: L("optMinimaxSpeech28HD")
              }, {
                id: "speech-2.8-turbo",
                label: L("optMinimaxSpeech28Turbo")
              }, {
                id: "speech-2.6-hd",
                label: "Speech-2.6 HD"
              }, {
                id: "speech-2.6-turbo",
                label: "Speech-2.6 Turbo"
              }, {
                id: "speech-02-hd",
                label: "Speech-02 HD"
              }, {
                id: "speech-02-turbo",
                label: "Speech-02 Turbo"
              }, {
                id: "speech-01-hd",
                label: "Speech-01 HD"
              }, {
                id: "speech-01-turbo",
                label: "Speech-01 Turbo"
              }],
              onChange: Ja
            }), T.jsx($t, {
              icon: T.jsx(ke, {
                size: 20,
                color: "white"
              }),
              iconBg: "bg-blue",
              label: L("labelRegion"),
              value: Va,
              options: [{
                id: "overseas",
                label: L("labelRegionOverseas")
              }, {
                id: "china",
                label: L("labelRegionChina")
              }],
              onChange: qa
            }), T.jsx(Ct, {
              icon: T.jsx(ke, {
                size: 20,
                color: "white"
              }),
              iconBg: "bg-teal",
              label: L("labelMinimaxProxyUrl") || "自訂 API URL（代理）",
              placeholder: "https://your-proxy.com/v1/t2a_v2",
              value: Ya,
              onChange: Xa
            })]
          }), T.jsx(_t, {
            icon: T.jsx(Se, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-orange",
            label: L("labelEnableElevenlabs", "啟用 ElevenLabs"),
            checked: ei,
            onChange: ti
          }), ei && T.jsxs(T.Fragment, {
            children: [T.jsx(Ct, {
              icon: T.jsx(he, {
                size: 20,
                color: "white"
              }),
              iconBg: "bg-green",
              label: L("labelApiKey"),
              placeholder: L("placeholderEnterApiKey"),
              type: "password",
              value: ai,
              onChange: ii
            }), T.jsx($t, {
              icon: T.jsx(Se, {
                size: 20,
                color: "white"
              }),
              iconBg: "bg-purple",
              label: L("labelVoiceModel"),
              value: oi,
              options: [{
                id: "eleven_multilingual_v2",
                label: L("optElevenMultilingualV2", "Multilingual v2（多語言）")
              }, {
                id: "eleven_turbo_v2_5",
                label: "Turbo v2.5（快速）"
              }, {
                id: "eleven_flash_v2_5",
                label: "Flash v2.5（最快）"
              }, {
                id: "eleven_v3",
                label: "v3（最自然）"
              }],
              onChange: ni
            }), T.jsx(Ct, {
              icon: T.jsx(ke, {
                size: 20,
                color: "white"
              }),
              iconBg: "bg-teal",
              label: L("labelElevenlabsProxyUrl", "自訂 API URL（代理）"),
              placeholder: "https://api.elevenlabs.io",
              value: si,
              onChange: li
            }), T.jsx("div", {
              style: {
                padding: "8px 16px",
                fontSize: "12px",
                color: "#999"
              },
              children: L("elevenlabsHint", "填入 Key 後，可在「聊天設定 → 語音」為每個角色選擇用 ElevenLabs 或 MiniMax，並填入對應的音色 ID。")
            })]
          }), T.jsx(_t, {
            icon: T.jsx(Se, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-blue",
            label: L("labelEnableSovits", "啟用 GPT-SoVITS"),
            checked: ri,
            onChange: ci
          }), ri && T.jsxs(T.Fragment, {
            children: [T.jsx(Ct, {
              icon: T.jsx(ke, {
                size: 20,
                color: "white"
              }),
              iconBg: "bg-teal",
              label: L("labelSovitsServerUrl", "服務地址"),
              placeholder: "http://192.168.1.10:9880",
              value: di,
              onChange: gi
            }), T.jsx($t, {
              icon: T.jsx(je, {
                size: 20,
                color: "white"
              }),
              iconBg: "bg-indigo",
              label: L("labelSovitsApiVersion", "API 版本"),
              value: pi,
              options: [{
                id: "v2",
                label: L("optSovitsV2", "新版 /tts (api_v2)")
              }, {
                id: "v1",
                label: L("optSovitsV1", "老版 / (api)")
              }, {
                id: "gsvi",
                label: L("optSovitsGsvi", "GSVI 整合包 (/v1/audio/speech)")
              }],
              onChange: ui
            }), pi === "v2" && T.jsx($t, {
              icon: T.jsx(je, {
                size: 20,
                color: "white"
              }),
              iconBg: "bg-purple",
              label: L("labelSovitsTextSplit", "切句方式"),
              value: hi,
              options: [{
                id: "cut0",
                label: L("optSovitsCut0", "不切（整段一次合成）")
              }, {
                id: "cut1",
                label: L("optSovitsCut1", "每四句一切")
              }, {
                id: "cut2",
                label: L("optSovitsCut2", "每 50 字一切")
              }, {
                id: "cut3",
                label: L("optSovitsCut3", "按中文句號。切")
              }, {
                id: "cut4",
                label: L("optSovitsCut4", "按英文句號 . 切")
              }, {
                id: "cut5",
                label: L("optSovitsCut5", "按標點切（逗號等）")
              }],
              onChange: mi
            }), T.jsxs("div", {
              style: {
                padding: "8px 16px",
                fontSize: "12px",
                color: "#999"
              },
              children: [L("sovitsHint", "GPT-SoVITS 是你自己跑的本地服務，無 API Key。手機連不到電腦 localhost，請填【局域網 IP】(如 http://192.168.1.10:9880)。音色靠參考音頻決定，在「聊天設定 → 語音」或角色名片為每個角色填參考音頻路徑與參考文本。"), T.jsx("br", {}), T.jsx("br", {}), L("sovitsVersionHint", "⚠️ API 版本要和你裝的服務對應：官方整合包 api_v2.py 選「新版 /tts」、老 api.py 選「老版 /」、GSVI 整合包（端點 /v1/audio/speech）選「GSVI 整合包」。選錯版本會報 405/404。")]
            })]
          })]
        })]
      }), T.jsxs(jt, {
        title: L("sectionImageGen"),
        children: [T.jsx(_t, {
          icon: T.jsx(Ce, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-blue",
          label: L("apiUseWorldBookForImage", "讀取生圖世界書"),
          checked: bi,
          onChange: xi
        }), T.jsx("div", {
          className: "settings-section-header",
          style: {
            paddingLeft: "54px",
            paddingTop: "10px"
          },
          children: "NovelAI"
        }), T.jsx(_t, {
          icon: T.jsx(ve, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-purple",
          label: L("labelEnableNovelAi"),
          checked: yi,
          onChange: fi
        }), yi && T.jsxs(T.Fragment, {
          children: [T.jsx(Ct, {
            icon: T.jsx(he, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelApiKey"),
            placeholder: L("placeholderEnterApiKey"),
            type: "password",
            value: Si,
            onChange: ji
          }), T.jsx($t, {
            icon: T.jsx(ke, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelCorsProxy"),
            value: ki,
            options: [{
              id: "none",
              label: L("optCorsNone")
            }, {
              id: "builtin",
              label: L("optCorsBuiltin")
            }, {
              id: "custom",
              label: L("optCorsCustom")
            }],
            onChange: Ci
          }), ki === "custom" && T.jsx(Ct, {
            icon: T.jsx(ke, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelCustomProxyUrl"),
            placeholder: "https://your-proxy.com",
            value: _i,
            onChange: Ai
          }), $i.length > 0 ? T.jsx($t, {
            icon: T.jsx(me, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-purple",
            label: L("labelModel"),
            value: vi,
            options: $i.map(e => ({
              id: e,
              label: e
            })),
            onChange: wi
          }) : T.jsx(Ct, {
            icon: T.jsx(me, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelModel"),
            placeholder: "nai-diffusion-4-5-full",
            value: vi,
            onChange: wi
          }), T.jsx(It, {
            icon: T.jsx(be, {
              size: 20
            }),
            buttonText: L(Ei ? "btnFetching" : "btnFetchModels"),
            fullWidth: true,
            onClick: async () => {
              Bi(true);
              try {
                const e = ["nai-diffusion-4-5-full", "nai-diffusion-4-5-curated", "nai-diffusion-4-full", "nai-diffusion-4-curated-preview", "nai-diffusion-3", "nai-diffusion-furry-3"];
                zi(e);
                c(`${L("msgApiFetchSuccess")} (${e.length})`);
              } finally {
                Bi(false);
              }
            }
          }), T.jsx(It, {
            icon: T.jsx(_e, {
              size: 20
            }),
            iconBg: "bg-purple",
            label: L("labelGenSettings"),
            buttonText: `${Ii} ›`,
            onClick: () => vs("novelai")
          })]
        }), T.jsx("div", {
          className: "settings-section-header",
          style: {
            paddingLeft: "54px",
            paddingTop: "10px"
          },
          children: "Pollinations"
        }), T.jsx(_t, {
          icon: T.jsx(ve, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-pink",
          label: L("labelEnablePollinations"),
          checked: so,
          onChange: lo
        }), so && T.jsxs(T.Fragment, {
          children: [T.jsx(Ct, {
            icon: T.jsx(he, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelKeyOptional"),
            placeholder: L("placeholderOptional"),
            value: ro,
            onChange: co
          }), T.jsx($t, {
            icon: T.jsx(ke, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelCorsProxy"),
            value: go,
            options: [{
              id: "none",
              label: L("optCorsNone")
            }, {
              id: "builtin",
              label: L("optCorsBuiltin")
            }, {
              id: "custom",
              label: L("optCorsCustom")
            }],
            onChange: po
          }), go === "custom" && T.jsx(Ct, {
            icon: T.jsx(ke, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelCustomProxyUrl"),
            placeholder: "https://your-proxy.com",
            value: uo,
            onChange: ho
          }), fo.length > 0 ? T.jsx($t, {
            icon: T.jsx(me, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-pink",
            label: L("labelModel"),
            value: mo,
            options: fo.map(e => ({
              id: e,
              label: e
            })),
            onChange: bo
          }) : T.jsx(Ct, {
            icon: T.jsx(me, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelModel"),
            placeholder: "flux",
            value: mo,
            onChange: bo
          }), T.jsx(It, {
            icon: T.jsx(be, {
              size: 20
            }),
            buttonText: L(wo ? "btnFetching" : "btnFetchModels"),
            fullWidth: true,
            onClick: async () => {
              const e = ["flux", "zimage", "imagen-4", "grok-imagine", "klein", "klein-large", "gptimage", "seedream", "kontext", "nanobanana", "seedream-pro", "gptimage-large", "nanobanana-pro", "nanobanana-2", "seedream5"];
              So(true);
              try {
                const t = await f("https://image.pollinations.ai/models", {
                  method: "GET"
                });
                if (!t.ok) {
                  throw new Error(`HTTP ${t.status}`);
                }
                const a = await t.json();
                const i = Array.isArray(a) ? a.map(e => typeof e == "string" ? e : e.id || e.name).filter(Boolean) : [];
                const o = [...e];
                for (const e of i) {
                  if (!o.includes(e)) {
                    o.push(e);
                  }
                }
                vo(o);
                c(`${L("msgApiFetchSuccess")} (${o.length})`);
              } catch (t) {
                console.warn("Pollinations models API 不可用，使用已知清單:", t.message);
                vo(e);
                c(`${L("msgApiFetchSuccess")} (${e.length})`);
              } finally {
                So(false);
              }
            }
          }), T.jsx(It, {
            icon: T.jsx(_e, {
              size: 20
            }),
            iconBg: "bg-pink",
            label: L("labelGenSettings"),
            buttonText: `${xo} ›`,
            onClick: () => vs("pollinations")
          })]
        }), T.jsx("div", {
          className: "settings-section-header",
          style: {
            paddingLeft: "54px",
            paddingTop: "10px"
          },
          children: "Google Imagen"
        }), T.jsx(_t, {
          icon: T.jsx(ve, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-blue",
          label: L("labelEnableGoogleImagen"),
          checked: zo,
          onChange: Eo
        }), zo && T.jsxs(T.Fragment, {
          children: [T.jsx(Ct, {
            icon: T.jsx(he, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelApiKey"),
            placeholder: L("placeholderEnterApiKey"),
            type: "password",
            value: Bo,
            onChange: To
          }), T.jsx($t, {
            icon: T.jsx(ke, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelCorsProxy"),
            value: Uo,
            options: [{
              id: "none",
              label: L("optCorsNone")
            }, {
              id: "builtin",
              label: L("optCorsBuiltin")
            }, {
              id: "custom",
              label: L("optCorsCustom")
            }],
            onChange: Wo
          }), Uo === "custom" && T.jsx(Ct, {
            icon: T.jsx(ke, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelCustomProxyUrl"),
            placeholder: "https://your-proxy.com",
            value: Lo,
            onChange: Ko
          }), Mo.length > 0 ? T.jsx($t, {
            icon: T.jsx(me, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-blue",
            label: L("labelModel"),
            value: Do,
            options: Mo.map(e => ({
              id: e,
              label: e
            })),
            onChange: Fo
          }) : T.jsx(Ct, {
            icon: T.jsx(me, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelModel"),
            placeholder: "imagen-4",
            value: Do,
            onChange: Fo
          }), T.jsx(It, {
            icon: T.jsx(be, {
              size: 20
            }),
            buttonText: L(Oo ? "btnFetching" : "btnFetchModels"),
            fullWidth: true,
            onClick: async () => {
              if (!Bo) {
                await c(L("msgApiEnterInfo"));
                return;
              }
              const e = ["imagen-4.0-generate-001", "imagen-4.0-fast-generate-001", "imagen-4.0-ultra-generate-001"];
              const t = Uo === "custom" && !!Lo;
              Ho(true);
              try {
                if (t) {
                  const t = Lo.replace(/\/+$/, "");
                  const a = await f(w(t), {
                    method: "GET",
                    headers: v(t, Bo)
                  });
                  if (!a.ok) {
                    throw new Error(`HTTP ${a.status}`);
                  }
                  const i = await a.json();
                  const o = (i.data || i.models || []).map(e => typeof e == "string" ? e : e.id || e.name).filter(Boolean);
                  if (o.length > 0) {
                    Go(o);
                    c(`${L("msgApiFetchSuccess")} (${o.length})`);
                  } else {
                    Go(e);
                    c(`${L("msgApiFetchSuccess")} (${e.length})`);
                  }
                } else {
                  const t = (await ec("https://generativelanguage.googleapis.com", Bo)).filter(e => e.name && (e.supportedGenerationMethods && e.supportedGenerationMethods.includes("generateImages") || /imagen/i.test(e.name))).map(e => e.name.replace("models/", ""));
                  if (t.length > 0) {
                    Go(t);
                    c(`${L("msgApiFetchSuccess")} (${t.length})`);
                  } else {
                    Go(e);
                    c(`${L("msgApiFetchSuccess")} (${e.length})`);
                  }
                }
              } catch (a) {
                console.error("Failed to fetch Google Imagen models:", a);
                Go(e);
                c(`${L("msgApiFetchSuccess")} (${e.length})`);
              } finally {
                Ho(false);
              }
            }
          }), T.jsx(It, {
            icon: T.jsx(_e, {
              size: 20
            }),
            iconBg: "bg-blue",
            label: L("labelGenSettings"),
            buttonText: `${qo} ›`,
            onClick: () => vs("googleimagen")
          })]
        }), T.jsx("div", {
          className: "settings-section-header",
          style: {
            paddingLeft: "54px",
            paddingTop: "10px"
          },
          children: "Gemini Image"
        }), T.jsx(_t, {
          icon: T.jsx(ve, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-purple",
          label: L("labelEnableGeminiImage"),
          checked: Xo,
          onChange: Qo
        }), Xo && T.jsxs(T.Fragment, {
          children: [T.jsx(Ct, {
            icon: T.jsx(he, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelApiKey"),
            placeholder: L("placeholderEnterApiKey"),
            type: "password",
            value: Zo,
            onChange: en
          }), T.jsx($t, {
            icon: T.jsx(ke, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelCorsProxy"),
            value: rn,
            options: [{
              id: "none",
              label: L("optCorsNone")
            }, {
              id: "builtin",
              label: L("optCorsBuiltin")
            }, {
              id: "custom",
              label: L("optCorsCustom")
            }],
            onChange: cn
          }), rn === "custom" && T.jsx(Ct, {
            icon: T.jsx(ke, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelCustomProxyUrl"),
            placeholder: "https://your-proxy.com",
            value: dn,
            onChange: gn
          }), on.length > 0 ? T.jsx($t, {
            icon: T.jsx(me, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-purple",
            label: L("labelModel"),
            value: tn,
            options: on.map(e => ({
              id: e,
              label: e
            })),
            onChange: an
          }) : T.jsx(Ct, {
            icon: T.jsx(me, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelModel"),
            placeholder: "gemini-2.5-flash-preview-image-generation",
            value: tn,
            onChange: an
          }), T.jsx(It, {
            icon: T.jsx(be, {
              size: 20
            }),
            buttonText: L(sn ? "btnFetching" : "btnFetchModels"),
            fullWidth: true,
            onClick: async () => {
              if (!Zo) {
                await c(L("msgApiEnterInfo"));
                return;
              }
              const e = ["gemini-2.5-flash-preview-image-generation"];
              const t = rn === "custom" && !!dn;
              ln(true);
              try {
                if (t) {
                  const t = dn.replace(/\/+$/, "");
                  const a = await f(w(t), {
                    method: "GET",
                    headers: v(t, Zo)
                  });
                  if (!a.ok) {
                    throw new Error(`HTTP ${a.status}`);
                  }
                  const i = await a.json();
                  const o = (i.data || i.models || []).map(e => typeof e == "string" ? e : e.id || e.name).filter(Boolean);
                  if (o.length > 0) {
                    nn(o);
                    c(`${L("msgApiFetchSuccess")} (${o.length})`);
                  } else {
                    nn(e);
                    c(`${L("msgApiFetchSuccess")} (${e.length})`);
                  }
                } else {
                  const t = (await ec("https://generativelanguage.googleapis.com", Zo)).filter(e => !!e.name && !/imagen/i.test(e.name) && (!!/image-generation/i.test(e.name) || !!e.supportedGenerationMethods && !!e.supportedGenerationMethods.includes("generateContent") && !!/image/i.test(e.name))).map(e => e.name.replace("models/", ""));
                  if (t.length > 0) {
                    nn(t);
                    c(`${L("msgApiFetchSuccess")} (${t.length})`);
                  } else {
                    nn(e);
                    c(`${L("msgApiFetchSuccess")} (${e.length})`);
                  }
                }
              } catch (a) {
                console.error("Failed to fetch Gemini Image models:", a);
                nn(e);
                c(`${L("msgApiFetchSuccess")} (${e.length})`);
              } finally {
                ln(false);
              }
            }
          }), T.jsx(It, {
            icon: T.jsx(_e, {
              size: 20
            }),
            iconBg: "bg-purple",
            label: L("labelGenSettings"),
            buttonText: `${L("labelGenSettings")} ›`,
            onClick: () => vs("geminiimage")
          })]
        }), T.jsx("div", {
          className: "settings-section-header",
          style: {
            paddingLeft: "54px",
            paddingTop: "10px"
          },
          children: "Grok"
        }), T.jsx(_t, {
          icon: T.jsx(ve, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-purple",
          label: L("labelEnableGrok"),
          checked: pn,
          onChange: un
        }), pn && T.jsxs(T.Fragment, {
          children: [T.jsx(Ct, {
            icon: T.jsx(he, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelApiKey"),
            placeholder: L("placeholderEnterApiKey"),
            type: "password",
            value: hn,
            onChange: mn
          }), T.jsx($t, {
            icon: T.jsx(ke, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelCorsProxy"),
            value: yn,
            options: [{
              id: "none",
              label: L("optCorsNone")
            }, {
              id: "custom",
              label: L("optCorsCustom")
            }],
            onChange: fn
          }), yn === "custom" && T.jsx(Ct, {
            icon: T.jsx(ke, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelCustomProxyUrl"),
            placeholder: "https://your-proxy.com",
            value: vn,
            onChange: wn
          }), Sn.length > 0 ? T.jsx($t, {
            icon: T.jsx(me, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-purple",
            label: L("labelModel"),
            value: bn,
            options: Sn.map(e => ({
              id: e,
              label: e
            })),
            onChange: xn
          }) : T.jsx(Ct, {
            icon: T.jsx(me, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelModel"),
            placeholder: "grok-2-image",
            value: bn,
            onChange: xn
          }), T.jsx(It, {
            icon: T.jsx(be, {
              size: 20
            }),
            buttonText: L(kn ? "btnFetching" : "btnFetchModels"),
            fullWidth: true,
            onClick: async () => {
              if (!hn) {
                await c(L("msgApiEnterInfo"));
                return;
              }
              const e = ["grok-2-image", "grok-2-image-1212", "grok-2-image-latest"];
              const t = yn === "custom" && !!vn;
              Cn(true);
              try {
                const a = t ? vn.replace(/\/+$/, "") : "https://api.x.ai";
                const i = await f(w(a), {
                  method: "GET",
                  headers: v(a, hn)
                });
                if (!i.ok) {
                  throw new Error(`HTTP ${i.status}`);
                }
                const o = await i.json();
                const n = (o.data || o.models || []).map(e => typeof e == "string" ? e : e.id || e.name).filter(Boolean);
                const s = t ? n : n.filter(e => /image/i.test(e) && !/embed|vision/i.test(e));
                if (s.length > 0) {
                  jn(s);
                  c(`${L("msgApiFetchSuccess")} (${s.length})`);
                } else {
                  jn(e);
                  c(`${L("msgApiFetchSuccess")} (${e.length})`);
                }
              } catch (a) {
                console.error("Failed to fetch Grok models:", a);
                jn(e);
                c(`${L("msgApiFetchSuccess")} (${e.length})`);
              } finally {
                Cn(false);
              }
            }
          }), T.jsx(It, {
            icon: T.jsx(_e, {
              size: 20
            }),
            iconBg: "bg-purple",
            label: L("labelGenSettings"),
            buttonText: `${L("labelGenSettings")} ›`,
            onClick: () => vs("grok")
          })]
        }), T.jsx("div", {
          className: "settings-section-header",
          style: {
            paddingLeft: "54px",
            paddingTop: "10px"
          },
          children: "GPT"
        }), T.jsx(_t, {
          icon: T.jsx(ve, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-purple",
          label: L("labelEnableGptImage"),
          checked: _n,
          onChange: An
        }), _n && T.jsxs(T.Fragment, {
          children: [T.jsx(Ct, {
            icon: T.jsx(he, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelApiKey"),
            placeholder: L("placeholderEnterApiKey"),
            type: "password",
            value: In,
            onChange: Pn
          }), T.jsx($t, {
            icon: T.jsx(ke, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelCorsProxy"),
            value: En,
            options: [{
              id: "none",
              label: L("optCorsNone")
            }, {
              id: "custom",
              label: L("optCorsCustom")
            }],
            onChange: Bn
          }), En === "custom" && T.jsx(Ct, {
            icon: T.jsx(ke, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelCustomProxyUrl"),
            placeholder: "https://your-proxy.com",
            value: Tn,
            onChange: Dn
          }), Gn.length > 0 ? T.jsx($t, {
            icon: T.jsx(me, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-purple",
            label: L("labelModel"),
            value: $n,
            options: Gn.map(e => ({
              id: e,
              label: e
            })),
            onChange: zn
          }) : T.jsx(Ct, {
            icon: T.jsx(me, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-gray",
            label: L("labelModel"),
            placeholder: "gpt-image-1",
            value: $n,
            onChange: zn
          }), T.jsx(It, {
            icon: T.jsx(be, {
              size: 20
            }),
            buttonText: L(Hn ? "btnFetching" : "btnFetchModels"),
            fullWidth: true,
            onClick: async () => {
              if (!In) {
                await c(L("msgApiEnterInfo"));
                return;
              }
              const e = ["gpt-image-1", "dall-e-3", "dall-e-2"];
              const t = En === "custom" && !!Tn;
              Un(true);
              try {
                const a = t ? Tn.replace(/\/+$/, "") : "https://api.openai.com";
                const i = await f(w(a), {
                  method: "GET",
                  headers: v(a, In)
                });
                if (!i.ok) {
                  throw new Error(`HTTP ${i.status}`);
                }
                const o = await i.json();
                const n = (o.data || o.models || []).map(e => typeof e == "string" ? e : e.id || e.name).filter(Boolean);
                const s = t ? n : n.filter(e => !/embed|vision|audio|whisper|tts|moderation/i.test(e) && (/^dall-?e/i.test(e) || /^gpt-image/i.test(e) || /image-gen/i.test(e)));
                if (s.length > 0) {
                  On(s);
                  c(`${L("msgApiFetchSuccess")} (${s.length})`);
                } else {
                  On(e);
                  c(`${L("msgApiFetchSuccess")} (${e.length})`);
                }
              } catch (a) {
                console.error("Failed to fetch GPT Image models:", a);
                On(e);
                c(`${L("msgApiFetchSuccess")} (${e.length})`);
              } finally {
                Un(false);
              }
            }
          }), T.jsx(It, {
            icon: T.jsx(_e, {
              size: 20
            }),
            iconBg: "bg-purple",
            label: L("labelGenSettings"),
            buttonText: `${L("labelGenSettings")} ›`,
            onClick: () => vs("gptimage")
          })]
        }), (yi || so || zo || Xo || pn || _n) && T.jsxs(T.Fragment, {
          children: [T.jsx("div", {
            className: "settings-section-header",
            style: {
              paddingLeft: "54px",
              paddingTop: "10px"
            },
            children: L("labelImageSceneSettings")
          }), T.jsx($t, {
            icon: T.jsx(ve, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-indigo",
            label: L("labelChatImage"),
            value: ws,
            options: [{
              id: "auto",
              label: L("labelAutoFirstEnabled")
            }, {
              id: "disabled",
              label: L("labelDisabledImageGen")
            }, ...(yi ? [{
              id: "novelai",
              label: "NovelAI"
            }] : []), ...(so ? [{
              id: "pollinations",
              label: "Pollinations"
            }] : []), ...(zo ? [{
              id: "googleimagen",
              label: "Google Imagen"
            }] : []), ...(Xo ? [{
              id: "geminiimage",
              label: "Gemini Image"
            }] : []), ...(pn ? [{
              id: "grok",
              label: "Grok"
            }] : []), ...(_n ? [{
              id: "gptimage",
              label: "GPT"
            }] : [])],
            onChange: Ss
          }), T.jsx($t, {
            icon: T.jsx(ve, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-orange",
            label: L("labelGiftImage"),
            value: js,
            options: [{
              id: "auto",
              label: L("labelAutoFirstEnabled")
            }, {
              id: "disabled",
              label: L("labelDisabledImageGen")
            }, ...(yi ? [{
              id: "novelai",
              label: "NovelAI"
            }] : []), ...(so ? [{
              id: "pollinations",
              label: "Pollinations"
            }] : []), ...(zo ? [{
              id: "googleimagen",
              label: "Google Imagen"
            }] : []), ...(Xo ? [{
              id: "geminiimage",
              label: "Gemini Image"
            }] : []), ...(pn ? [{
              id: "grok",
              label: "Grok"
            }] : []), ...(_n ? [{
              id: "gptimage",
              label: "GPT"
            }] : [])],
            onChange: ks
          }), T.jsx($t, {
            icon: T.jsx(ve, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-teal",
            label: L("labelMomentImage"),
            value: Cs,
            options: [{
              id: "auto",
              label: L("labelAutoFirstEnabled")
            }, {
              id: "disabled",
              label: L("labelDisabledImageGen")
            }, ...(yi ? [{
              id: "novelai",
              label: "NovelAI"
            }] : []), ...(so ? [{
              id: "pollinations",
              label: "Pollinations"
            }] : []), ...(zo ? [{
              id: "googleimagen",
              label: "Google Imagen"
            }] : []), ...(Xo ? [{
              id: "geminiimage",
              label: "Gemini Image"
            }] : []), ...(pn ? [{
              id: "grok",
              label: "Grok"
            }] : []), ...(_n ? [{
              id: "gptimage",
              label: "GPT"
            }] : [])],
            onChange: _s
          }), T.jsx($t, {
            icon: T.jsx(ve, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-pink",
            label: L("labelPomodoroImage"),
            value: As,
            options: [{
              id: "auto",
              label: L("labelAutoFirstEnabled")
            }, {
              id: "disabled",
              label: L("labelDisabledImageGen")
            }, ...(yi ? [{
              id: "novelai",
              label: "NovelAI"
            }] : []), ...(so ? [{
              id: "pollinations",
              label: "Pollinations"
            }] : []), ...(zo ? [{
              id: "googleimagen",
              label: "Google Imagen"
            }] : []), ...(Xo ? [{
              id: "geminiimage",
              label: "Gemini Image"
            }] : []), ...(pn ? [{
              id: "grok",
              label: "Grok"
            }] : []), ...(_n ? [{
              id: "gptimage",
              label: "GPT"
            }] : [])],
            onChange: Is
          }), T.jsx($t, {
            icon: T.jsx(ve, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-cyan",
            label: L("labelTmImage"),
            value: Ps,
            options: [{
              id: "auto",
              label: L("labelAutoFirstEnabled")
            }, {
              id: "disabled",
              label: L("labelDisabledImageGen")
            }, ...(yi ? [{
              id: "novelai",
              label: "NovelAI"
            }] : []), ...(so ? [{
              id: "pollinations",
              label: "Pollinations"
            }] : []), ...(zo ? [{
              id: "googleimagen",
              label: "Google Imagen"
            }] : []), ...(Xo ? [{
              id: "geminiimage",
              label: "Gemini Image"
            }] : []), ...(pn ? [{
              id: "grok",
              label: "Grok"
            }] : []), ...(_n ? [{
              id: "gptimage",
              label: "GPT"
            }] : [])],
            onChange: $s
          }), T.jsx($t, {
            icon: T.jsx(ve, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-pink",
            label: L("labelTouchImage"),
            value: zs,
            options: [{
              id: "auto",
              label: L("labelAutoFirstEnabled")
            }, {
              id: "disabled",
              label: L("labelDisabledImageGen")
            }, ...(yi ? [{
              id: "novelai",
              label: "NovelAI"
            }] : []), ...(so ? [{
              id: "pollinations",
              label: "Pollinations"
            }] : []), ...(zo ? [{
              id: "googleimagen",
              label: "Google Imagen"
            }] : []), ...(Xo ? [{
              id: "geminiimage",
              label: "Gemini Image"
            }] : []), ...(pn ? [{
              id: "grok",
              label: "Grok"
            }] : []), ...(_n ? [{
              id: "gptimage",
              label: "GPT"
            }] : [])],
            onChange: Es
          }), T.jsx($t, {
            icon: T.jsx(ve, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-purple",
            label: L("labelGoingOutSceneImage"),
            value: Bs,
            options: [{
              id: "auto",
              label: L("labelAutoFirstEnabled")
            }, {
              id: "disabled",
              label: L("labelDisabledImageGen")
            }, ...(yi ? [{
              id: "novelai",
              label: "NovelAI"
            }] : []), ...(so ? [{
              id: "pollinations",
              label: "Pollinations"
            }] : []), ...(zo ? [{
              id: "googleimagen",
              label: "Google Imagen"
            }] : []), ...(Xo ? [{
              id: "geminiimage",
              label: "Gemini Image"
            }] : []), ...(pn ? [{
              id: "grok",
              label: "Grok"
            }] : []), ...(_n ? [{
              id: "gptimage",
              label: "GPT"
            }] : [])],
            onChange: Ts
          }), T.jsx($t, {
            icon: T.jsx(ve, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-purple",
            label: L("labelGoingOutCGImage"),
            value: Ds,
            options: [{
              id: "auto",
              label: L("labelAutoFirstEnabled")
            }, {
              id: "disabled",
              label: L("labelDisabledImageGen")
            }, ...(yi ? [{
              id: "novelai",
              label: "NovelAI"
            }] : []), ...(so ? [{
              id: "pollinations",
              label: "Pollinations"
            }] : []), ...(zo ? [{
              id: "googleimagen",
              label: "Google Imagen"
            }] : []), ...(Xo ? [{
              id: "geminiimage",
              label: "Gemini Image"
            }] : []), ...(pn ? [{
              id: "grok",
              label: "Grok"
            }] : []), ...(_n ? [{
              id: "gptimage",
              label: "GPT"
            }] : [])],
            onChange: Fs
          }), T.jsx($t, {
            icon: T.jsx(ve, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-cyan",
            label: L("labelTrackingSceneImage"),
            value: Rs,
            options: [{
              id: "auto",
              label: L("labelAutoFirstEnabled")
            }, {
              id: "disabled",
              label: L("labelDisabledImageGen")
            }, ...(yi ? [{
              id: "novelai",
              label: "NovelAI"
            }] : []), ...(so ? [{
              id: "pollinations",
              label: "Pollinations"
            }] : []), ...(zo ? [{
              id: "googleimagen",
              label: "Google Imagen"
            }] : []), ...(Xo ? [{
              id: "geminiimage",
              label: "Gemini Image"
            }] : []), ...(pn ? [{
              id: "grok",
              label: "Grok"
            }] : []), ...(_n ? [{
              id: "gptimage",
              label: "GPT"
            }] : [])],
            onChange: Ns
          }), T.jsx($t, {
            icon: T.jsx(ve, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-cyan",
            label: L("labelKeepsakeSceneImage"),
            value: Ms,
            options: [{
              id: "auto",
              label: L("labelAutoFirstEnabled")
            }, {
              id: "disabled",
              label: L("labelDisabledImageGen")
            }, ...(yi ? [{
              id: "novelai",
              label: "NovelAI"
            }] : []), ...(so ? [{
              id: "pollinations",
              label: "Pollinations"
            }] : []), ...(zo ? [{
              id: "googleimagen",
              label: "Google Imagen"
            }] : []), ...(Xo ? [{
              id: "geminiimage",
              label: "Gemini Image"
            }] : []), ...(pn ? [{
              id: "grok",
              label: "Grok"
            }] : []), ...(_n ? [{
              id: "gptimage",
              label: "GPT"
            }] : [])],
            onChange: Gs
          }), T.jsx($t, {
            icon: T.jsx(ve, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-cyan",
            label: L("labelTrackingGameCGImage"),
            value: Os,
            options: [{
              id: "auto",
              label: L("labelAutoFirstEnabled")
            }, {
              id: "disabled",
              label: L("labelDisabledImageGen")
            }, ...(yi ? [{
              id: "novelai",
              label: "NovelAI"
            }] : []), ...(so ? [{
              id: "pollinations",
              label: "Pollinations"
            }] : []), ...(zo ? [{
              id: "googleimagen",
              label: "Google Imagen"
            }] : []), ...(Xo ? [{
              id: "geminiimage",
              label: "Gemini Image"
            }] : []), ...(pn ? [{
              id: "grok",
              label: "Grok"
            }] : []), ...(_n ? [{
              id: "gptimage",
              label: "GPT"
            }] : [])],
            onChange: Hs
          }), T.jsx($t, {
            icon: T.jsx(ve, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-orange",
            label: L("labelForumImage"),
            value: Us,
            options: [{
              id: "auto",
              label: L("labelAutoFirstEnabled")
            }, {
              id: "disabled",
              label: L("labelDisabledImageGen")
            }, ...(yi ? [{
              id: "novelai",
              label: "NovelAI"
            }] : []), ...(so ? [{
              id: "pollinations",
              label: "Pollinations"
            }] : []), ...(zo ? [{
              id: "googleimagen",
              label: "Google Imagen"
            }] : []), ...(Xo ? [{
              id: "geminiimage",
              label: "Gemini Image"
            }] : []), ...(pn ? [{
              id: "grok",
              label: "Grok"
            }] : []), ...(_n ? [{
              id: "gptimage",
              label: "GPT"
            }] : [])],
            onChange: Ws
          }), T.jsx($t, {
            icon: T.jsx(ve, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-purple",
            label: L("labelHomelandImage"),
            value: Ls,
            options: [{
              id: "auto",
              label: L("labelAutoFirstEnabled")
            }, {
              id: "disabled",
              label: L("labelDisabledImageGen")
            }, ...(yi ? [{
              id: "novelai",
              label: "NovelAI"
            }] : []), ...(so ? [{
              id: "pollinations",
              label: "Pollinations"
            }] : []), ...(zo ? [{
              id: "googleimagen",
              label: "Google Imagen"
            }] : []), ...(Xo ? [{
              id: "geminiimage",
              label: "Gemini Image"
            }] : []), ...(pn ? [{
              id: "grok",
              label: "Grok"
            }] : []), ...(_n ? [{
              id: "gptimage",
              label: "GPT"
            }] : [])],
            onChange: Ks
          }), T.jsxs("div", {
            style: {
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12
            },
            children: [T.jsxs("div", {
              style: {
                flex: 1,
                minWidth: 0
              },
              children: [T.jsx("div", {
                style: {
                  fontSize: 15,
                  fontWeight: 500
                },
                children: L("labelForumIncludeImages")
              }), T.jsx("div", {
                style: {
                  fontSize: 12,
                  color: "var(--text-secondary)",
                  marginTop: 2
                },
                children: L("labelForumIncludeImagesDesc")
              })]
            }), T.jsxs("label", {
              className: "toggle-switch",
              children: [T.jsx("input", {
                type: "checkbox",
                checked: Js,
                onChange: e => Vs(e.target.checked)
              }), T.jsx("span", {
                className: "slider"
              })]
            })]
          })]
        })]
      }), T.jsxs(jt, {
        title: L("sectionSystem"),
        children: [T.jsx(_t, {
          icon: T.jsx(Ae, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-green",
          label: L("labelBackgroundMode"),
          checked: Je,
          onChange: async e => {
            if (!e || (await h(L("confirmBackgroundModeBody"), L("confirmBackgroundModeTitle")))) {
              Ve(e);
              localStorage.setItem("backgroundModeEnabled", e);
              try {
                S(e).catch(e => console.error("Failed to toggle background mode:", e));
              } catch (t) {
                console.error("Error calling setBackgroundMode:", t);
              }
            }
          }
        }), T.jsx("div", {
          style: {
            padding: "0 16px 12px 54px",
            fontSize: "12px",
            color: "var(--text-secondary)",
            lineHeight: "1.4"
          },
          children: L("msgBackgroundModeHint")
        }), d() && T.jsxs("div", {
          style: {
            padding: "0 16px 12px 54px"
          },
          children: [T.jsx("div", {
            style: {
              fontSize: 12,
              color: "var(--text-secondary)",
              marginBottom: 6
            },
            children: L("iosKeepAliveMethodLabel")
          }), T.jsx("div", {
            style: {
              display: "flex",
              gap: 8,
              flexWrap: "wrap"
            },
            children: [{
              v: "oscillator",
              label: L("iosKeepAliveOscillator")
            }, {
              v: "audio",
              label: L("iosKeepAliveAudio")
            }, {
              v: "both",
              label: L("iosKeepAliveBoth")
            }].map(e => T.jsx("button", {
              onClick: () => {
                try {
                  localStorage.setItem("iosKeepAliveMethod", e.v);
                } catch (t) {}
                it(e.v);
                try {
                  p();
                } catch (t) {}
              },
              className: "fe-cmd-btn",
              style: {
                fontSize: 12,
                padding: "6px 10px",
                border: Xe === e.v ? "1px solid var(--accent, #4ade80)" : "1px solid var(--border, #444)",
                background: Xe === e.v ? "var(--accent-bg, rgba(74,222,128,0.15))" : "transparent"
              },
              children: e.label
            }, e.v))
          }), T.jsx("div", {
            style: {
              fontSize: 11,
              color: "var(--text-secondary)",
              marginTop: 6,
              lineHeight: 1.4
            },
            children: L("iosKeepAliveMethodHint")
          })]
        }), g() && T.jsxs("div", {
          style: {
            padding: "0 16px 12px 54px"
          },
          children: [T.jsx("div", {
            style: {
              fontSize: 12,
              color: "var(--text-secondary)",
              marginBottom: 6
            },
            children: L("androidKeepAliveMethodLabel")
          }), T.jsx("div", {
            style: {
              display: "flex",
              gap: 8,
              flexWrap: "wrap"
            },
            children: [{
              v: "both",
              label: L("androidKeepAliveBoth")
            }, {
              v: "service",
              label: L("androidKeepAliveService")
            }, {
              v: "audio",
              label: L("androidKeepAliveAudio")
            }].map(e => T.jsx("button", {
              onClick: () => {
                try {
                  localStorage.setItem("androidKeepAliveMethod", e.v);
                } catch (t) {}
                Gt(e.v);
                try {
                  p();
                } catch (t) {}
              },
              className: "fe-cmd-btn",
              style: {
                fontSize: 12,
                padding: "6px 10px",
                border: yt === e.v ? "1px solid var(--accent, #4ade80)" : "1px solid var(--border, #444)",
                background: yt === e.v ? "var(--accent-bg, rgba(74,222,128,0.15))" : "transparent"
              },
              children: e.label
            }, e.v))
          }), T.jsx("div", {
            style: {
              fontSize: 11,
              color: "var(--text-secondary)",
              marginTop: 6,
              lineHeight: 1.4
            },
            children: L("androidKeepAliveMethodHint")
          })]
        }), d() && T.jsx("div", {
          style: {
            padding: "0 16px 12px 54px"
          },
          children: T.jsx("button", {
            onClick: async () => {
              try {
                const {
                  registerPlugin: e
                } = await t(async () => {
                  const {
                    registerPlugin: e
                  } = await import("./native-pet-CTNtZgMA.js").then(e => e.cE);
                  return {
                    registerPlugin: e
                  };
                }, __vite__mapDeps([0, 1, 2, 3, 4, 5]));
                const a = e("AiKeepAlive");
                const i = await a.status();
                window.alert("[后台保活实况]\n\n音频会话运行中: " + ((i == null ? undefined : i.running) ? "✅ 是" : "❌ 否") + "\n常驻模式: " + ((i == null ? undefined : i.persistent) ? "开" : "关") + "\n当前生成占用: " + ((i == null ? undefined : i.activeCount) ?? 0) + "\n\n说明:新方案用原生音频会话保活,不再有锁屏静音播放器(以前那个会冒丑播放条)。「运行中=是」即代表后台保活生效,切后台 TTS/生成不被冻结。");
              } catch (e) {
                window.alert("查询失败:" + ((e == null ? undefined : e.message) || e));
              }
            },
            className: "fe-cmd-btn",
            style: {
              fontSize: 12,
              padding: "6px 10px"
            },
            children: "🔍 查看后台保活是否在运行"
          })
        })]
      }), T.jsxs(jt, {
        title: L("sectionMemoryMonitor"),
        children: [T.jsx(_t, {
          icon: T.jsx(Ae, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-red",
          label: L("labelEnableMemoryMonitor"),
          checked: (() => {
            try {
              return localStorage.getItem("nuojiji_debug_memory_monitor") === "1";
            } catch (e) {
              return false;
            }
          })(),
          onChange: e => {
            try {
              localStorage.setItem("nuojiji_debug_memory_monitor", e ? "1" : "0");
            } catch (t) {}
            window.dispatchEvent(new CustomEvent("nuojiji:memory-monitor-toggle", {
              detail: {
                enabled: e
              }
            }));
          }
        }), T.jsx("div", {
          style: {
            padding: "0 16px 12px 54px",
            fontSize: "12px",
            color: "var(--text-secondary)",
            lineHeight: "1.4"
          },
          children: L("msgMemoryMonitorHint")
        }), T.jsx(_t, {
          icon: T.jsx(Ae, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-blue",
          label: L("labelLayoutDiagOverlay"),
          checked: qe,
          onChange: e => {
            Ye(e);
            t(() => import("./layoutDiagOverlay-CxzWpjbF.js"), __vite__mapDeps([12, 6, 7, 0, 1, 2, 3, 4, 5, 8, 9, 10, 11])).then(t => t.setDiagOverlay(e)).catch(() => {});
          }
        }), T.jsx("div", {
          style: {
            padding: "0 16px 12px 54px",
            fontSize: "12px",
            color: "var(--text-secondary)",
            lineHeight: "1.4"
          },
          children: L("msgLayoutDiagOverlayHint")
        }), T.jsxs("div", {
          className: "settings-item",
          style: {
            cursor: Xl ? "wait" : "pointer"
          },
          onClick: async () => {
            var e;
            if (!Xl) {
              Ql(true);
              try {
                const a = await te();
                const i = await ae();
                let o = null;
                try {
                  if ((e = navigator.storage) == null ? undefined : e.estimate) {
                    const e = await navigator.storage.estimate();
                    if (typeof (e == null ? undefined : e.usage) == "number") {
                      o = +(e.usage / 1024 / 1024).toFixed(1);
                    }
                  }
                } catch (t) {}
                Yl({
                  tables: a,
                  image: i,
                  estimateMB: o
                });
              } catch (a) {
                c(String((a == null ? undefined : a.message) || a));
              } finally {
                Ql(false);
              }
            }
          },
          children: [T.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "12px"
            },
            children: [T.jsx("div", {
              className: "bg-blue",
              style: {
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: T.jsx(Ae, {
                size: 20,
                color: "white"
              })
            }), T.jsx("span", {
              children: L("labelAnalyzeStorage")
            })]
          }), T.jsx("span", {
            style: {
              color: "#007AFF",
              fontWeight: 600,
              fontSize: "15px"
            },
            children: L(Xl ? "btnAnalyzing" : "btnAnalyzeStorage")
          })]
        }), ql && T.jsxs("div", {
          style: {
            padding: "4px 16px 12px",
            fontSize: "12px"
          },
          children: [ql.estimateMB != null && T.jsxs("div", {
            style: {
              marginBottom: "8px",
              color: "var(--text-secondary)"
            },
            children: [L("labelDiskUsage"), "：", T.jsxs("strong", {
              style: {
                color: "#ff3b30"
              },
              children: [ql.estimateMB, " MB"]
            })]
          }), ql.image && !ql.image.error && T.jsxs("div", {
            style: {
              background: "#f5f5f5",
              borderRadius: "8px",
              padding: "8px 10px",
              marginBottom: "8px",
              lineHeight: "1.6"
            },
            children: [T.jsx("div", {
              style: {
                fontWeight: 600,
                marginBottom: "4px"
              },
              children: L("labelImageStoreSummary")
            }), T.jsxs("div", {
              children: [L("labelImageCount"), ": ", ql.image.張數, " · ", L("labelImageTotal"), ": ", ql.image.總大小, " · ", L("labelImageAvg"), ": ", ql.image.平均]
            }), ql.image.分佈 && T.jsx("div", {
              style: {
                marginTop: "4px",
                color: "#666"
              },
              children: Object.entries(ql.image.分佈).map(([e, t]) => `${e}: ${t}`).join(" · ")
            })]
          }), Array.isArray(ql.tables) && T.jsx("div", {
            style: {
              maxHeight: "40vh",
              overflow: "auto",
              background: "#f5f5f5",
              borderRadius: "8px",
              padding: "8px"
            },
            children: ql.tables.filter(e => (e.totalMB || 0) > 0.05).map((e, t) => T.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                padding: "3px 0",
                borderBottom: "1px solid #e5e5e5"
              },
              children: [T.jsx("span", {
                style: {
                  fontFamily: "monospace"
                },
                children: e.table
              }), T.jsxs("span", {
                style: {
                  color: "#c00"
                },
                children: [e.totalMB, " MB ", T.jsxs("span", {
                  style: {
                    color: "#999"
                  },
                  children: ["(", e.rows, ")"]
                })]
              })]
            }, t))
          })]
        }), T.jsxs("div", {
          className: "settings-item",
          style: {
            cursor: tr ? "wait" : "pointer"
          },
          onClick: async () => {
            if (!tr) {
              ar(true);
              try {
                const e = await ie();
                er(e);
              } catch (e) {
                c(String((e == null ? undefined : e.message) || e));
              } finally {
                ar(false);
              }
            }
          },
          children: [T.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "12px"
            },
            children: [T.jsx("div", {
              className: "bg-green",
              style: {
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: T.jsx(Ae, {
                size: 20,
                color: "white"
              })
            }), T.jsx("span", {
              children: L("labelRecoverLostUsers")
            })]
          }), T.jsx("span", {
            style: {
              color: "#34c759",
              fontWeight: 600,
              fontSize: "15px"
            },
            children: L(tr ? "btnScanning" : "btnScanLostUsers")
          })]
        }), Zl && T.jsx("div", {
          style: {
            padding: "4px 16px 12px",
            fontSize: "12px"
          },
          children: Zl.ghosts.length === 0 ? T.jsx("div", {
            style: {
              background: "#f5f5f5",
              borderRadius: "8px",
              padding: "10px",
              color: "var(--text-secondary)",
              lineHeight: "1.5"
            },
            children: L("msgNoLostUsers")
          }) : T.jsxs("div", {
            style: {
              background: "#f0fff4",
              border: "1px solid #b7f5c8",
              borderRadius: "8px",
              padding: "10px"
            },
            children: [T.jsx("div", {
              style: {
                fontWeight: 600,
                marginBottom: "8px",
                color: "#1a7f37"
              },
              children: L("msgFoundLostUsers").replace("{n}", String(Zl.ghosts.length))
            }), Zl.ghosts.map(e => T.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "6px 0",
                borderBottom: "1px solid #d7f5e0"
              },
              children: [T.jsxs("div", {
                style: {
                  lineHeight: "1.4"
                },
                children: [T.jsx("div", {
                  style: {
                    fontFamily: "monospace",
                    fontSize: "11px",
                    color: "#666"
                  },
                  children: e.uid
                }), T.jsx("div", {
                  style: {
                    color: "#444"
                  },
                  children: L("labelLostUserData").replace("{m}", String(e.msgCount)).replace("{p}", String(e.postCount)).replace("{c}", String(e.callCount))
                })]
              }), T.jsx("button", {
                style: {
                  flexShrink: 0,
                  background: "#34c759",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "6px 12px",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer"
                },
                onClick: async () => {
                  const t = window.prompt(L("promptRecoverUserName"), L("defaultRecoveredUserName"));
                  if (t != null) {
                    try {
                      await oe(e.uid, t || L("defaultRecoveredUserName"));
                      c(L("msgRecoverSuccess"));
                      const a = await ie();
                      er(a);
                    } catch (a) {
                      c(String((a == null ? undefined : a.message) || a));
                    }
                  }
                },
                children: L("btnRecover")
              })]
            }, e.uid))]
          })
        }), T.jsxs("div", {
          className: "settings-item",
          style: {
            cursor: nr ? "wait" : "pointer"
          },
          onClick: async () => {
            if (!nr) {
              sr(true);
              try {
                const e = await ne(true);
                or(e);
              } catch (e) {
                c(String((e == null ? undefined : e.message) || e));
              } finally {
                sr(false);
              }
            }
          },
          children: [T.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "12px"
            },
            children: [T.jsx("div", {
              className: "bg-orange",
              style: {
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: T.jsx(ve, {
                size: 20,
                color: "white"
              })
            }), T.jsx("span", {
              children: K("labelCleanupMomentsImages", "清理朋友圈繁殖圖片")
            })]
          }), T.jsx("span", {
            style: {
              color: "#ff9500",
              fontWeight: 600,
              fontSize: "15px"
            },
            children: nr ? L("btnScanning") : K("btnCheckMomentsImages", "掃描")
          })]
        }), ir && T.jsx("div", {
          style: {
            padding: "4px 16px 12px",
            fontSize: "12px"
          },
          children: ir.affected.length === 0 ? T.jsx("div", {
            style: {
              background: "#f5f5f5",
              borderRadius: "8px",
              padding: "10px",
              color: "var(--text-secondary)",
              lineHeight: "1.5"
            },
            children: K("msgNoMomentsImageDuplicate", "沒有繁殖圖片")
          }) : T.jsxs("div", {
            style: {
              background: "#fef3c7",
              border: "1px solid #fcd34d",
              borderRadius: "8px",
              padding: "10px"
            },
            children: [T.jsx("div", {
              style: {
                fontWeight: 600,
                marginBottom: "8px",
                color: "#92400e"
              },
              children: K("msgFoundMomentsImageDuplicate", "找到 {n} 篇繁殖圖片，共 {m} 張多餘").replace("{n}", String(ir.affected.length)).replace("{m}", String(ir.totalRemoved))
            }), T.jsx("div", {
              style: {
                maxHeight: "200px",
                overflowY: "auto",
                marginBottom: "10px"
              },
              children: ir.affected.map(e => T.jsx("div", {
                style: {
                  fontSize: "11px",
                  color: "#78350f",
                  padding: "4px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.05)"
                },
                children: T.jsxs("div", {
                  children: [e.name, " (", e.before, " → ", e.after, ") ", e.removedCount > 0 ? `移除 ${e.removedCount} 張` : ""]
                })
              }, e.id))
            }), T.jsx("button", {
              style: {
                width: "100%",
                background: "#f59e0b",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "8px",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer"
              },
              onClick: async () => {
                try {
                  sr(true);
                  await ne(false);
                  c(K("msgCleanupSuccess", "清理完成"));
                  or(null);
                } catch (e) {
                  c(String((e == null ? undefined : e.message) || e));
                } finally {
                  sr(false);
                }
              },
              children: K("btnConfirmCleanup", "確認清理")
            })]
          })
        })]
      }), T.jsxs(jt, {
        title: L("sectionCrashLog"),
        children: [T.jsxs("div", {
          className: "settings-item",
          style: {
            cursor: "pointer"
          },
          onClick: () => {
            const e = !Ll;
            if (e) {
              Vl(N());
            }
            Kl(e);
          },
          children: [T.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "12px"
            },
            children: [T.jsx("div", {
              className: "bg-red",
              style: {
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: T.jsx(Ie, {
                size: 20,
                color: "white"
              })
            }), T.jsx("span", {
              children: L("labelViewCrashLog")
            })]
          }), T.jsx("span", {
            style: {
              color: "#007AFF",
              fontWeight: 600,
              fontSize: "15px"
            },
            children: L(Ll ? "btnCollapseCrashLog" : "btnExpandCrashLog")
          })]
        }), Ll && T.jsxs("div", {
          style: {
            padding: "8px 16px 12px"
          },
          children: [Jl.length === 0 ? T.jsx("div", {
            style: {
              fontSize: "13px",
              color: "var(--text-secondary)",
              textAlign: "center",
              padding: "12px 0"
            },
            children: L("msgNoCrashLog")
          }) : T.jsxs(T.Fragment, {
            children: [T.jsxs("div", {
              style: {
                display: "flex",
                gap: "8px",
                marginBottom: "10px"
              },
              children: [T.jsx("button", {
                onClick: async () => {
                  const e = Jl.map(e => `[${new Date(e.at).toISOString()}] (${e.scope})\n${e.message}\n${e.stack}\nUA: ${e.ua}\nURL: ${e.url}`).join("\n\n---\n\n");
                  try {
                    await navigator.clipboard.writeText(e);
                    c(L("msgCrashLogCopied"));
                  } catch (t) {
                    const i = document.createElement("textarea");
                    i.value = e;
                    document.body.appendChild(i);
                    i.select();
                    try {
                      document.execCommand("copy");
                      c(L("msgCrashLogCopied"));
                    } catch (a) {}
                    document.body.removeChild(i);
                  }
                },
                style: {
                  flex: 1,
                  padding: "8px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  background: "#fff",
                  color: "#007AFF",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer"
                },
                children: L("btnCopyCrashLog")
              }), T.jsx("button", {
                onClick: () => {
                  M();
                  Vl([]);
                },
                style: {
                  flex: 1,
                  padding: "8px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  background: "#fff",
                  color: "#ff3b30",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer"
                },
                children: L("btnClearCrashLog")
              })]
            }), T.jsx("div", {
              style: {
                maxHeight: "40vh",
                overflow: "auto",
                background: "#f5f5f5",
                borderRadius: "8px",
                padding: "8px"
              },
              children: Jl.map((e, t) => {
                const a = e.scope === "webview-recovered";
                const i = a ? "#b8860b" : "#ff3b30";
                const o = a ? "#8a6d00" : "#c00";
                return T.jsxs("div", {
                  style: {
                    marginBottom: t === Jl.length - 1 ? 0 : "12px",
                    paddingBottom: t === Jl.length - 1 ? 0 : "12px",
                    borderBottom: t === Jl.length - 1 ? "none" : "1px solid #ddd"
                  },
                  children: [T.jsxs("div", {
                    style: {
                      fontSize: "11px",
                      color: "#666",
                      marginBottom: "4px"
                    },
                    children: ["[", new Date(e.at).toLocaleString(), "] ", T.jsx("span", {
                      style: {
                        color: i
                      },
                      children: e.scope
                    })]
                  }), T.jsxs("pre", {
                    style: {
                      margin: 0,
                      fontSize: "11px",
                      color: o,
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-all",
                      fontFamily: "monospace"
                    },
                    children: [e.message, "\n", e.stack]
                  })]
                }, t);
              })
            })]
          }), T.jsx("div", {
            style: {
              fontSize: "12px",
              color: "var(--text-secondary)",
              lineHeight: "1.4",
              marginTop: "8px"
            },
            children: L("msgCrashLogHint")
          })]
        })]
      }), T.jsxs(jt, {
        title: L("sectionFloatingConsole"),
        children: [T.jsx(_t, {
          icon: T.jsx(Pe, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-blue",
          label: L("labelEnableFloatingConsole"),
          checked: Ml,
          onChange: async e => {
            Gl(e);
            window.dispatchEvent(new CustomEvent("nuojiji:floating-console-toggle", {
              detail: {
                enabled: e
              }
            }));
            try {
              const t = {
                ...((await s.get("apiSettings")) || {}),
                floatingConsoleEnabled: e
              };
              await s.set("apiSettings", t);
              window.dispatchEvent(new CustomEvent("nuojiji:api-settings-updated", {
                detail: t
              }));
            } catch (t) {
              console.error("[ApiSettings] 保存懸浮球開關失敗:", t);
            }
          }
        }), Ml && T.jsx($t, {
          icon: T.jsx(_e, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-purple",
          label: "控制台快捷選單佈局",
          value: Yt,
          options: [{
            id: "orbit",
            label: "🪐 星系軌道環繞 (Orbit)"
          }, {
            id: "fan",
            label: "🪭 側邊扇形法陣 (Fan)"
          }, {
            id: "grid",
            label: "🍱 流光雙行網格 (Grid)"
          }, {
            id: "drawer",
            label: "💧 貼邊垂直水滴 (Drawer)"
          }],
          onChange: e => {
            Xt(e);
            try {
              localStorage.setItem("nuojiji_pet_console_layout", e);
              window.dispatchEvent(new CustomEvent("nuojiji:floating-console-layout-change", {
                detail: e
              }));
            } catch (t) {}
          }
        }), T.jsxs("div", {
          className: "settings-item",
          style: {
            cursor: "pointer"
          },
          onClick: () => {
            const e = Math.round(window.innerWidth / 2 - 29);
            const t = Math.round(window.innerHeight / 2 - 29);
            localStorage.setItem("nuojiji_floating_console_position", JSON.stringify({
              x: e,
              y: t
            }));
            window.dispatchEvent(new CustomEvent("nuojiji:floating-console-reset-position"));
            c(L("msgFloatingConsoleResetDone") || "懸浮球已重置到螢幕中央");
          },
          children: [T.jsx("div", {
            className: "settings-item-icon bg-orange",
            children: T.jsx(ye, {
              size: 20,
              color: "white"
            })
          }), T.jsxs("div", {
            className: "settings-item-content",
            children: [T.jsx("div", {
              className: "settings-item-label",
              children: L("labelResetFloatingPosition") || "重置懸浮球位置"
            }), T.jsx("div", {
              style: {
                fontSize: "12px",
                color: "var(--text-secondary)",
                marginTop: "2px"
              },
              children: L("descResetFloatingPosition") || "將懸浮球移回螢幕中央"
            })]
          })]
        }), Ml && T.jsxs(T.Fragment, {
          children: [T.jsx("div", {
            style: {
              padding: "0 16px 10px 54px",
              fontSize: "12px",
              color: "var(--text-secondary)",
              lineHeight: "1.4"
            },
            children: L("msgFloatingConsoleHint")
          }), T.jsxs("div", {
            className: "settings-item",
            style: {
              flexDirection: "column",
              alignItems: "stretch",
              gap: "8px",
              paddingBottom: "12px"
            },
            children: [T.jsx("div", {
              className: "settings-item-header",
              style: {
                fontSize: "13px",
                color: "var(--text-secondary)",
                paddingLeft: "4px",
                marginBottom: "4px"
              },
              children: L("labelSelectedShortcuts", {
                count: lr.length
              })
            }), T.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "rgba(120, 120, 128, 0.08)",
                padding: "8px 12px",
                borderRadius: "10px"
              },
              children: [T.jsx("span", {
                style: {
                  fontSize: "15px",
                  fontWeight: 600
                },
                children: L("labelHomeScreen")
              }), T.jsx("span", {
                style: {
                  fontSize: "12px",
                  color: "#34c759"
                },
                children: L("labelFixed")
              })]
            }), lr.map((e, t) => {
              let a = "";
              let i = null;
              if (e && typeof e == "object") {
                if (e.type === "chat") {
                  a = `💬 ${e.label || e.charId}`;
                  i = e.image || null;
                } else if (e.type === "roster-detail") {
                  a = `📖 ${e.label || e.charId}`;
                  i = e.image || null;
                } else {
                  a = e.type === "group-chat" ? `👥 ${e.label || e.groupId}` : e.label || String(e);
                }
              } else {
                const t = wt.find(t => t.id === e);
                a = t ? t.langKey ? L(t.langKey) : t.name : String(e);
              }
              const o = e && typeof e == "object" && (e.type === "chat" || e.type === "group-chat");
              const n = t => t && typeof t == "object" && t.type === e.type && (e.type === "group-chat" ? String(t.groupId) === String(e.groupId) : String(t.charId) === String(e.charId));
              return T.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: o ? "column" : "row",
                  alignItems: o ? "stretch" : "center",
                  justifyContent: "space-between",
                  background: "rgba(120, 120, 128, 0.08)",
                  padding: "8px 12px",
                  borderRadius: "10px",
                  gap: o ? "8px" : "0"
                },
                children: [T.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "8px"
                  },
                  children: [T.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    },
                    children: [i && T.jsx(G, {
                      src: i,
                      avatarKey: (e == null ? undefined : e.charId) || (e == null ? undefined : e.groupId) || t,
                      alt: "",
                      style: {
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        flexShrink: 0
                      }
                    }), T.jsx("span", {
                      style: {
                        fontSize: "15px",
                        fontWeight: 500
                      },
                      children: a
                    })]
                  }), T.jsx("div", {
                    onClick: () => {
                      rr(lr.filter((e, a) => a !== t));
                    },
                    style: {
                      width: "28px",
                      height: "28px",
                      borderRadius: "14px",
                      background: "rgba(255, 59, 48, 0.1)",
                      cursor: "pointer",
                      color: "#ff3b30",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    },
                    children: T.jsx($e, {
                      size: 16
                    })
                  })]
                }), o && Array.isArray(Ue) && Ue.length > 1 && T.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    paddingLeft: "4px"
                  },
                  children: [T.jsx(ze, {
                    size: 14,
                    style: {
                      color: "#AF52DE",
                      flexShrink: 0
                    }
                  }), T.jsxs("select", {
                    style: {
                      flex: 1,
                      padding: "4px 8px",
                      borderRadius: "6px",
                      border: "1px solid rgba(120, 120, 128, 0.2)",
                      background: "rgba(120, 120, 128, 0.06)",
                      fontSize: "13px",
                      color: "var(--text-primary)",
                      cursor: "pointer"
                    },
                    value: e.userId || "",
                    onChange: e => {
                      const a = e.target.value || null;
                      if (lr.some((e, i) => i !== t && n(e) && String(e.userId || "") === String(a || ""))) {
                        return;
                      }
                      const i = [...lr];
                      i[t] = {
                        ...i[t],
                        userId: a
                      };
                      rr(i);
                    },
                    onClick: e => e.stopPropagation(),
                    children: [T.jsxs("option", {
                      value: "",
                      disabled: true,
                      children: ["— ", L("labelSelectUser"), " —"]
                    }), Ue.map(e => {
                      const a = e.uid || e.id;
                      const i = lr.some((e, i) => i !== t && n(e) && String(e.userId || "") === String(a));
                      return T.jsxs("option", {
                        value: a,
                        disabled: i,
                        children: [e.name || a, i ? " ✓" : ""]
                      }, a);
                    })]
                  })]
                })]
              }, t);
            }), lr.length < 15 && T.jsxs("div", {
              style: {
                position: "relative",
                marginTop: "8px"
              },
              children: [T.jsxs("select", {
                style: {
                  width: "100%",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px dashed #007AFF",
                  background: "rgba(0, 122, 255, 0.05)",
                  color: "#007AFF",
                  fontSize: "15px",
                  cursor: "pointer",
                  appearance: "none",
                  fontWeight: 500
                },
                value: cr,
                onChange: e => {
                  const t = e.target.value;
                  dr(t);
                  if (t && !(lr.length >= 15)) {
                    if (t.startsWith("chat:")) {
                      const e = t.slice(5);
                      const a = We.find(t => String(t.id) === e);
                      if (lr.some(t => t && typeof t == "object" && t.type === "chat" && String(t.charId) === e && String(t.userId || "") === String(He || ""))) {
                        dr("");
                        return;
                      }
                      rr([...lr, {
                        type: "chat",
                        charId: (a == null ? undefined : a.id) ?? e,
                        label: (a == null ? undefined : a.name) || e,
                        image: (a == null ? undefined : a.image) || null,
                        userId: He || null
                      }]);
                    } else if (t.startsWith("roster-detail:")) {
                      const e = t.slice(14);
                      const a = We.find(t => String(t.id) === e);
                      if (lr.some(t => t && typeof t == "object" && t.type === "roster-detail" && String(t.charId) === e && String(t.userId || "") === String(He || ""))) {
                        dr("");
                        return;
                      }
                      rr([...lr, {
                        type: "roster-detail",
                        charId: (a == null ? undefined : a.id) ?? e,
                        label: (a == null ? undefined : a.name) || e,
                        image: (a == null ? undefined : a.image) || null,
                        userId: He || null
                      }]);
                    } else if (t.startsWith("group-chat:")) {
                      const e = t.slice(11);
                      const a = gr.find(t => String(t.id) === e);
                      if (lr.some(t => t && typeof t == "object" && t.type === "group-chat" && String(t.groupId) === e)) {
                        dr("");
                        return;
                      }
                      rr([...lr, {
                        type: "group-chat",
                        groupId: (a == null ? undefined : a.id) ?? e,
                        label: (a == null ? undefined : a.name) || e,
                        userId: He || null
                      }]);
                    } else {
                      if (lr.includes(t)) {
                        dr("");
                        return;
                      }
                      rr([...lr, t]);
                    }
                    dr("");
                  }
                },
                children: [T.jsx("option", {
                  value: "",
                  children: L("labelAddShortcut")
                }), T.jsx("optgroup", {
                  label: L("optgroupAppShortcuts"),
                  children: wt.filter(e => !lr.includes(e.id)).map(e => T.jsx("option", {
                    value: e.id,
                    children: e.langKey ? L(e.langKey) : e.name
                  }, e.id))
                }), We.length > 0 && T.jsx("optgroup", {
                  label: L("optgroupCharChat"),
                  children: We.filter(e => !lr.some(t => t && typeof t == "object" && t.type === "chat" && String(t.charId) === String(e.id) && String(t.userId || "") === String(He || ""))).map(e => T.jsxs("option", {
                    value: `chat:${e.id}`,
                    children: ["💬 ", e.name || e.id]
                  }, e.id))
                }), We.length > 0 && T.jsx("optgroup", {
                  label: L("optgroupRosterDetail"),
                  children: We.filter(e => !lr.some(t => t && typeof t == "object" && t.type === "roster-detail" && String(t.charId) === String(e.id) && String(t.userId || "") === String(He || ""))).map(e => T.jsxs("option", {
                    value: `roster-detail:${e.id}`,
                    children: ["📖 ", e.name || e.id]
                  }, e.id))
                }), gr.length > 0 && T.jsx("optgroup", {
                  label: L("optgroupGroupChat"),
                  children: gr.filter(e => !lr.some(t => t && typeof t == "object" && t.type === "group-chat" && String(t.groupId) === String(e.id))).map(e => T.jsxs("option", {
                    value: `group-chat:${e.id}`,
                    children: ["👥 ", e.name || e.id]
                  }, e.id))
                })]
              }), T.jsx("div", {
                style: {
                  position: "absolute",
                  right: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "#007AFF"
                },
                children: T.jsx(Ee, {
                  size: 18
                })
              })]
            })]
          })]
        })]
      }), T.jsxs(jt, {
        title: L("sectionRoleActivity"),
        children: [T.jsx(_t, {
          icon: T.jsx(de, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-orange",
          label: L("labelEnableRoleActivity"),
          checked: ur,
          onChange: async e => {
            if (!e || (await h(L("confirmRoleActivityBody"), L("confirmRoleActivityTitle")))) {
              hr(e);
              try {
                await (async e => {
                  let t = {};
                  try {
                    t = (await s.get("roleActivitySettings")) || {};
                  } catch (i) {}
                  const a = Er.current ? {
                    ...t,
                    interval: mr,
                    intervalUnit: xr,
                    list: fr,
                    dndEnabled: wr,
                    dndRanges: jr,
                    showCommitmentNotice: Cr,
                    enabled: e
                  } : {
                    ...t,
                    enabled: e
                  };
                  await s.set("roleActivitySettings", a);
                  window.dispatchEvent(new CustomEvent("nuojiji:role-activity-updated", {
                    detail: a
                  }));
                })(e);
              } catch (t) {
                console.warn("[RoleActivity] immediate persist failed:", t == null ? undefined : t.message);
              }
            }
          }
        }), ur && T.jsxs(T.Fragment, {
          children: [T.jsx(kt, {
            icon: T.jsx(Ae, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-blue",
            label: L("labelActivityInterval"),
            children: T.jsxs("div", {
              style: {
                display: "flex",
                gap: "8px",
                alignItems: "center"
              },
              children: [T.jsx("input", {
                className: "settings-input",
                type: "number",
                value: mr,
                onChange: e => br(Number(e.target.value)),
                placeholder: "60",
                onClick: e => e.stopPropagation(),
                style: {
                  width: "80px"
                }
              }), T.jsxs("select", {
                className: "settings-input",
                value: xr,
                onChange: e => yr(e.target.value),
                onClick: e => e.stopPropagation(),
                style: {
                  width: "100px"
                },
                children: [T.jsx("option", {
                  value: "seconds",
                  children: L("unitSeconds")
                }), T.jsx("option", {
                  value: "minutes",
                  children: L("unitMinutes")
                }), T.jsx("option", {
                  value: "hours",
                  children: L("unitHours")
                })]
              })]
            })
          }), T.jsx(_t, {
            icon: T.jsx(Be, {
              size: 20,
              color: "white"
            }),
            iconBg: "bg-purple",
            label: L("labelActivityDnd"),
            checked: wr,
            onChange: Sr
          }), wr && T.jsxs("div", {
            className: "settings-item",
            style: {
              flexDirection: "column",
              alignItems: "stretch",
              gap: "8px",
              paddingBottom: "12px"
            },
            children: [T.jsxs("div", {
              className: "settings-item-header",
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "13px",
                color: "var(--text-secondary)",
                paddingLeft: "4px"
              },
              children: [T.jsx("span", {
                children: L("labelActivityDndTime")
              }), T.jsxs("div", {
                onClick: () => kr([...jr, {
                  start: "12:00",
                  end: "14:00"
                }]),
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "4px 10px",
                  borderRadius: "12px",
                  background: "rgba(0, 122, 255, 0.1)",
                  color: "#007AFF",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: 500,
                  userSelect: "none"
                },
                children: [T.jsx(Ee, {
                  size: 14
                }), T.jsx("span", {
                  children: L("btnAddDndSegment")
                })]
              })]
            }), T.jsx("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              },
              children: jr.map((e, t) => T.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(120, 120, 128, 0.08)",
                  padding: "8px 10px",
                  borderRadius: "10px"
                },
                children: [T.jsx("input", {
                  type: "time",
                  className: "settings-input",
                  value: e.start || "",
                  onChange: e => {
                    const a = [...jr];
                    a[t] = {
                      ...a[t],
                      start: e.target.value
                    };
                    kr(a);
                  },
                  onClick: e => e.stopPropagation(),
                  style: {
                    width: "100px",
                    fontSize: "14px"
                  }
                }), T.jsx("span", {
                  style: {
                    color: "var(--text-secondary)",
                    fontSize: "13px"
                  },
                  children: "~"
                }), T.jsx("input", {
                  type: "time",
                  className: "settings-input",
                  value: e.end || "",
                  onChange: e => {
                    const a = [...jr];
                    a[t] = {
                      ...a[t],
                      end: e.target.value
                    };
                    kr(a);
                  },
                  onClick: e => e.stopPropagation(),
                  style: {
                    width: "100px",
                    fontSize: "14px"
                  }
                }), jr.length > 1 && T.jsx("div", {
                  onClick: () => kr(jr.filter((e, a) => a !== t)),
                  style: {
                    width: "28px",
                    height: "28px",
                    borderRadius: "14px",
                    background: "rgba(255, 59, 48, 0.1)",
                    cursor: "pointer",
                    color: "#ff3b30",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "auto",
                    flexShrink: 0
                  },
                  children: T.jsx($e, {
                    size: 16
                  })
                })]
              }, t))
            })]
          }), T.jsxs("div", {
            className: "settings-item",
            style: {
              flexDirection: "column",
              alignItems: "stretch",
              gap: "4px",
              paddingBottom: "12px"
            },
            children: [T.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px"
              },
              children: [T.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  minWidth: 0
                },
                children: [T.jsx("div", {
                  className: "settings-item-icon bg-orange",
                  children: T.jsx(Ae, {
                    size: 20,
                    color: "white"
                  })
                }), T.jsx("span", {
                  className: "settings-item-label",
                  children: L("labelShowCommitmentNotice") || "顯示活動提示氣泡"
                })]
              }), T.jsxs("label", {
                className: "toggle-switch",
                onClick: e => e.stopPropagation(),
                children: [T.jsx("input", {
                  type: "checkbox",
                  checked: Cr,
                  onChange: e => _r(e.target.checked)
                }), T.jsx("span", {
                  className: "slider"
                })]
              })]
            }), T.jsx("span", {
              style: {
                fontSize: "11px",
                color: "var(--text-secondary)",
                lineHeight: 1.3,
                paddingLeft: "46px"
              },
              children: L("labelShowCommitmentNoticeHint") || "關閉後角色說「去洗澡」不再彈倒數氣泡，到點自然回來給你驚喜"
            })]
          }), T.jsxs("div", {
            className: "settings-item",
            style: {
              flexDirection: "column",
              alignItems: "stretch",
              gap: "8px",
              paddingBottom: "12px"
            },
            children: [T.jsx("div", {
              className: "settings-item-header",
              style: {
                fontSize: "13px",
                color: "var(--text-secondary)",
                paddingLeft: "4px",
                marginBottom: "4px"
              },
              children: L("labelActiveRoles")
            }), T.jsx("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              },
              children: fr.map((e, t) => {
                const a = e.type === "group";
                const i = a ? null : We.find(t => String(t.id) === String(e.id));
                const o = a ? gr.find(t => String(t.id) === String(e.id)) : null;
                const n = a ? o ? `👥 ${o.name}${o.includeUser ? "" : ` (${L("labelSpectator")})`}` : `👥 ${e.id}` : i ? i.name || i.id : e.id;
                const s = Ue.find(t => (t.uid || t.id) === e.userId);
                if (!(s == null ? undefined : s.name)) {
                  e.userId;
                }
                const l = {
                  low: L("optionProbLow"),
                  medium: L("optionProbMedium"),
                  high: L("optionProbHigh")
                };
                return T.jsxs("div", {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    background: "rgba(120, 120, 128, 0.08)",
                    padding: "10px 12px",
                    borderRadius: "10px",
                    gap: "8px"
                  },
                  children: [T.jsxs("div", {
                    style: {
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px"
                    },
                    children: [T.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        minWidth: "80px",
                        flex: "1 1 auto"
                      },
                      children: [T.jsx("div", {
                        style: {
                          width: "28px",
                          height: "28px",
                          borderRadius: a ? "6px" : "50%",
                          background: a ? "#34C759" : "#007AFF",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "14px",
                          overflow: "hidden",
                          flexShrink: 0
                        },
                        children: a ? (o == null ? undefined : o.avatar) ? T.jsx(G, {
                          src: o.avatar,
                          avatarKey: `g:${e.id}`,
                          style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                          },
                          alt: n
                        }) : "👥" : (i == null ? undefined : i.image) ? T.jsx(G, {
                          src: i.image,
                          avatarKey: `c:${e.id}`,
                          style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                          },
                          alt: n
                        }) : String(n).charAt(0)
                      }), T.jsx("span", {
                        style: {
                          fontSize: "15px",
                          fontWeight: 500,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        },
                        children: n
                      })]
                    }), T.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        flexShrink: 0,
                        marginLeft: "auto"
                      },
                      children: [T.jsx("div", {
                        style: {
                          display: "flex",
                          background: "rgba(120, 120, 128, 0.12)",
                          borderRadius: "6px",
                          padding: "2px"
                        },
                        children: ["low", "medium", "high"].map(a => T.jsx("div", {
                          onClick: () => {
                            const e = [...fr];
                            e[t] = {
                              ...e[t],
                              probability: a
                            };
                            vr(e);
                          },
                          style: {
                            padding: "4px 8px",
                            fontSize: "12px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            background: e.probability === a ? "white" : "transparent",
                            color: e.probability === a ? "black" : "var(--text-secondary)",
                            boxShadow: e.probability === a ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
                            transition: "all 0.2s",
                            userSelect: "none"
                          },
                          children: l[a]
                        }, a))
                      }), T.jsx("div", {
                        onClick: () => vr(fr.filter((e, a) => a !== t)),
                        style: {
                          width: "28px",
                          height: "28px",
                          borderRadius: "14px",
                          background: "rgba(255, 59, 48, 0.1)",
                          cursor: "pointer",
                          color: "#ff3b30",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "background 0.2s"
                        },
                        children: T.jsx($e, {
                          size: 16
                        })
                      })]
                    })]
                  }), T.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      paddingLeft: "4px"
                    },
                    children: [T.jsx(ze, {
                      size: 14,
                      style: {
                        color: "#AF52DE",
                        flexShrink: 0
                      }
                    }), T.jsxs("select", {
                      style: {
                        flex: 1,
                        padding: "4px 8px",
                        borderRadius: "6px",
                        border: "1px solid rgba(120, 120, 128, 0.2)",
                        background: "rgba(120, 120, 128, 0.06)",
                        fontSize: "13px",
                        color: "var(--text-primary)",
                        cursor: "pointer"
                      },
                      value: e.userId || "",
                      onChange: a => {
                        const i = a.target.value;
                        if (fr.some((a, o) => o !== t && String(a.id) === String(e.id) && (a.type || "") === (e.type || "") && a.userId === i)) {
                          return;
                        }
                        const o = [...fr];
                        o[t] = {
                          ...o[t],
                          userId: i
                        };
                        vr(o);
                      },
                      onClick: e => e.stopPropagation(),
                      children: [T.jsxs("option", {
                        value: "",
                        disabled: true,
                        children: ["— ", L("labelSelectUser"), " —"]
                      }), Ue.map(a => {
                        const i = a.uid || a.id;
                        const o = fr.some((a, o) => o !== t && String(a.id) === String(e.id) && (a.type || "") === (e.type || "") && a.userId === i);
                        return T.jsxs("option", {
                          value: i,
                          disabled: o,
                          children: [a.name || i, o ? " ✓" : ""]
                        }, i);
                      })]
                    })]
                  }), !a && T.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                      paddingLeft: "4px",
                      paddingRight: "4px",
                      paddingTop: "6px",
                      borderTop: "1px dashed rgba(120, 120, 128, 0.15)"
                    },
                    children: [T.jsxs("div", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "2px",
                        minWidth: 0
                      },
                      children: [T.jsx("span", {
                        style: {
                          fontSize: "13px",
                          fontWeight: 500
                        },
                        children: L("labelProactiveMode") || "真人模式"
                      }), T.jsx("span", {
                        style: {
                          fontSize: "11px",
                          color: "var(--text-secondary)",
                          lineHeight: 1.3
                        },
                        children: L("labelProactiveModeHint") || "依角色人設動態決定何時主動找你；忽略上方間隔設定"
                      })]
                    }), T.jsx("div", {
                      onClick: () => {
                        const a = [...fr];
                        const i = e.proactiveMode === "on" ? "off" : "on";
                        const o = {
                          ...a[t],
                          proactiveMode: i
                        };
                        if (i === "on") {
                          o.proactiveEnabledAt = Date.now();
                        }
                        a[t] = o;
                        vr(a);
                      },
                      style: {
                        width: "40px",
                        height: "22px",
                        borderRadius: "11px",
                        background: e.proactiveMode === "on" ? "#34C759" : "rgba(120, 120, 128, 0.32)",
                        position: "relative",
                        cursor: "pointer",
                        transition: "background 0.2s",
                        flexShrink: 0
                      },
                      children: T.jsx("div", {
                        style: {
                          position: "absolute",
                          top: "2px",
                          left: e.proactiveMode === "on" ? "20px" : "2px",
                          width: "18px",
                          height: "18px",
                          borderRadius: "50%",
                          background: "white",
                          boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
                          transition: "left 0.2s"
                        }
                      })
                    })]
                  }), !a && e.proactiveMode === "on" && T.jsxs("div", {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      paddingLeft: "4px",
                      paddingRight: "4px",
                      paddingTop: "6px"
                    },
                    children: [T.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "8px"
                      },
                      children: [T.jsx("span", {
                        style: {
                          fontSize: "13px",
                          fontWeight: 500
                        },
                        children: L("labelProactiveIntensity") || "主動度"
                      }), T.jsx("div", {
                        style: {
                          display: "flex",
                          borderRadius: "8px",
                          background: "rgba(120, 120, 128, 0.12)",
                          padding: "2px"
                        },
                        children: ["low", "normal", "high"].map(a => {
                          const i = `labelProactiveIntensity${a.charAt(0).toUpperCase() + a.slice(1)}`;
                          const o = a === "low" ? "低調" : a === "high" ? "熱情" : "普通";
                          const n = (e.proactiveIntensity || "normal") === a;
                          return T.jsx("div", {
                            onClick: () => {
                              const e = [...fr];
                              e[t] = {
                                ...e[t],
                                proactiveIntensity: a
                              };
                              vr(e);
                            },
                            style: {
                              padding: "4px 12px",
                              borderRadius: "6px",
                              fontSize: "12px",
                              fontWeight: 500,
                              cursor: "pointer",
                              transition: "background 0.15s",
                              background: n ? "var(--surface, white)" : "transparent",
                              color: n ? "var(--text-primary)" : "var(--text-secondary)",
                              boxShadow: n ? "0 1px 2px rgba(0,0,0,0.08)" : "none"
                            },
                            children: L(i) || o
                          }, a);
                        })
                      })]
                    }), T.jsx("span", {
                      style: {
                        fontSize: "11px",
                        color: "var(--text-secondary)",
                        lineHeight: 1.3,
                        paddingLeft: "2px"
                      },
                      children: L("labelProactiveIntensityHint") || "你不回時的退讓程度；行程分享、突發想法不受影響"
                    }), T.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "8px",
                        marginTop: "4px"
                      },
                      children: [T.jsx("span", {
                        style: {
                          fontSize: "13px",
                          fontWeight: 500
                        },
                        children: L("labelProactiveBias") || "主動度"
                      }), T.jsx("div", {
                        style: {
                          display: "flex",
                          borderRadius: "8px",
                          background: "rgba(120, 120, 128, 0.12)",
                          padding: "2px"
                        },
                        children: [-0.2, -0.1, 0, 0.1, 0.2].map(a => {
                          const i = typeof e.proactiveBias == "number" ? e.proactiveBias : 0;
                          const o = Math.abs(i - a) < 0.001;
                          const n = a === 0 ? "0" : `${a > 0 ? "+" : ""}${Math.round(a * 200)}%`;
                          return T.jsx("div", {
                            onClick: () => {
                              const e = [...fr];
                              e[t] = {
                                ...e[t],
                                proactiveBias: a
                              };
                              vr(e);
                            },
                            style: {
                              padding: "4px 8px",
                              borderRadius: "6px",
                              fontSize: "11px",
                              fontWeight: 500,
                              cursor: "pointer",
                              transition: "background 0.15s",
                              background: o ? "var(--surface, white)" : "transparent",
                              color: o ? "var(--text-primary)" : "var(--text-secondary)",
                              boxShadow: o ? "0 1px 2px rgba(0,0,0,0.08)" : "none",
                              minWidth: "36px",
                              textAlign: "center"
                            },
                            children: n
                          }, a);
                        })
                      })]
                    }), T.jsx("span", {
                      style: {
                        fontSize: "11px",
                        color: "var(--text-secondary)",
                        lineHeight: 1.3,
                        paddingLeft: "2px"
                      },
                      children: L("labelProactiveBiasHint") || "在基於人設的閾值上額外增加或減少。0=完全依角色人設；+ 更容易主動，- 更不容易主動"
                    })]
                  })]
                }, t);
              })
            }), T.jsxs("div", {
              style: {
                position: "relative",
                marginTop: "8px"
              },
              children: [T.jsxs("select", {
                style: {
                  width: "100%",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px dashed #007AFF",
                  background: "rgba(0, 122, 255, 0.05)",
                  color: "#007AFF",
                  fontSize: "15px",
                  textAlign: "center",
                  cursor: "pointer",
                  appearance: "none",
                  fontWeight: 500
                },
                value: "",
                onChange: e => {
                  const t = e.target.value;
                  if (t) {
                    if (t.startsWith("group:")) {
                      const e = t.slice(6);
                      if (!fr.some(t => t.type === "group" && String(t.id) === String(e) && t.userId === He)) {
                        vr([...fr, {
                          id: e,
                          type: "group",
                          probability: "medium",
                          userId: He
                        }]);
                      }
                    } else if (!fr.some(e => !e.type && String(e.id) === String(t) && e.userId === He)) {
                      vr([...fr, {
                        id: t,
                        probability: "medium",
                        userId: He
                      }]);
                    }
                  }
                },
                children: [T.jsxs("option", {
                  value: "",
                  children: ["+ ", L("btnAddRole")]
                }), T.jsx("optgroup", {
                  label: L("labelActiveRoles"),
                  children: We.map(e => T.jsx("option", {
                    value: e.id,
                    children: e.name || e.id
                  }, e.id))
                }), gr.length > 0 && T.jsx("optgroup", {
                  label: L("optgroupGroupChat"),
                  children: gr.filter(e => !fr.some(t => t.type === "group" && String(t.id) === String(e.id) && t.userId === He)).map(e => T.jsxs("option", {
                    value: `group:${e.id}`,
                    children: ["👥 ", e.name || e.id, e.includeUser ? "" : ` (${L("labelSpectator")})`]
                  }, e.id))
                })]
              }), T.jsx("div", {
                style: {
                  position: "absolute",
                  right: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "#007AFF"
                },
                children: T.jsx(Ee, {
                  size: 18
                })
              })]
            })]
          })]
        })]
      }), T.jsxs(jt, {
        title: L("sectionNotifications"),
        children: [T.jsx(_t, {
          icon: T.jsx(Te, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-red",
          label: L("labelBrowserNotifications"),
          checked: qs,
          onChange: async e => {
            if (e) {
              if (!J()) {
                await c("This browser does not support desktop notification");
                return;
              }
              const e = await V();
              if (e === "granted") {
                Ys(true);
                localStorage.setItem("nuojiji_browser_notifications_enabled", "true");
              } else {
                Ys(false);
                localStorage.setItem("nuojiji_browser_notifications_enabled", "false");
                if (e === "denied") {
                  await c(L("msgNotificationPermissionDenied"));
                } else {
                  await c(L("msgNotificationPermissionBlocked"));
                }
              }
            } else {
              Ys(false);
              localStorage.setItem("nuojiji_browser_notifications_enabled", "false");
            }
          }
        }), T.jsx(At, {
          icon: T.jsx(Te, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-gray",
          label: L("labelTestNotification"),
          onClick: async () => {
            if (!J()) {
              await c(L("msgNotificationNotSupported"));
              return;
            }
            let e = await q();
            if (e !== "granted" && e !== "denied") {
              e = await V();
            }
            if (e === "granted") {
              if (!(await Y({
                title: L("titleTestNotification"),
                body: L("msgTestNotificationContent"),
                tag: "test-notification",
                icon: "/pwa-512x512.png",
                vibrate: [200, 100, 200]
              }))) {
                await c(L("msgNotificationFailed") + "showNativeNotification returned false");
              }
            } else {
              await c(L("msgNotificationPermissionDenied"));
            }
          },
          rightElement: T.jsx("span", {
            style: {
              fontSize: "12px",
              color: "var(--text-secondary)"
            },
            children: L("btnTest")
          })
        }), T.jsx("div", {
          style: {
            padding: "0 16px 12px 54px",
            fontSize: "12px",
            color: "var(--text-secondary)",
            lineHeight: "1.4"
          },
          children: L("msgBrowserNotificationsHint")
        }), T.jsx(_t, {
          icon: T.jsx(De, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-gray",
          label: L("labelNotifPrivacy"),
          checked: Xs,
          onChange: e => {
            Qs(e);
            localStorage.setItem("nuojiji_notif_privacy_enabled", e ? "true" : "false");
            try {
              window.dispatchEvent(new CustomEvent("nuojiji:notif-privacy-changed", {
                detail: {
                  enabled: e
                }
              }));
            } catch {}
          }
        }), T.jsx("div", {
          style: {
            padding: "0 16px 12px 54px",
            fontSize: "12px",
            color: "var(--text-secondary)",
            lineHeight: "1.4"
          },
          children: L("msgNotifPrivacyHint")
        })]
      }), !e() && T.jsxs(jt, {
        title: L("sectionCloudPush"),
        children: [T.jsx(_t, {
          icon: Zs ? T.jsx(Fe, {
            size: 20,
            color: "white"
          }) : T.jsx(Re, {
            size: 20,
            color: "white"
          }),
          iconBg: Zs ? "bg-green" : "bg-gray",
          label: L("labelEnableCloudPush"),
          checked: Zs,
          onChange: async e => {
            if (e) {
              try {
                al(true);
                console.log(L("logPushEnableStart") || "[雲端推送] 開始啟用流程...");
                const {
                  subscribeToPush: e,
                  isPushSupported: i,
                  checkWorkerConnectivity: o
                } = await t(async () => {
                  const {
                    subscribeToPush: e,
                    isPushSupported: t,
                    checkWorkerConnectivity: a
                  } = await import("./pushSubscriptionManager-BzPwLmDo.js");
                  return {
                    subscribeToPush: e,
                    isPushSupported: t,
                    checkWorkerConnectivity: a
                  };
                }, []);
                if (!i()) {
                  await c(L("msgPushNotSupported"));
                  return;
                }
                console.log(L("logPushEnvCheckPassed") || "[雲端推送] 環境檢查通過");
                console.log(L("logPushCheckingServer") || "[雲端推送] 預檢伺服器連線...");
                const n = await o();
                if (!n.ok) {
                  const e = n.isNetworkBlock ? L("msgPushServerConnectionFailedChina") : "";
                  await c(L("msgPushServerConnectionFailed") + ": " + n.reason + e);
                  return;
                }
                console.log(L("logPushServerConnected") || "[雲端推送] 伺服器連線正常");
                console.log(L("logPushRefreshingToken") || "[雲端推送] 刷新 token 中...");
                const s = await X();
                if (!s) {
                  console.error(L("logPushTokenFetchFailed") || "[雲端推送] token 取得失敗");
                  await c(L("msgTokenInvalidOrExpired"));
                  return;
                }
                console.log(L("logPushTokenRefreshed") || "[雲端推送] token 刷新成功");
                try {
                  const e = "https://bgxzjwkpxlwvmzxnldlj.supabase.co";
                  const t = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJneHpqd2tweGx3dm16eG5sZGxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwNzAwNDEsImV4cCI6MjA4ODY0NjA0MX0.Caqvt0YmAJPfFYiToVKlGSjwY-qHvonJEepIrJtGLHQ";
                  const a = await f(`${e}/auth/v1/user`, {
                    method: "GET",
                    headers: {
                      Authorization: `Bearer ${s}`,
                      apikey: t
                    }
                  });
                  const i = await a.json();
                  console.log(L("logPushTokenVerify") || "[雲端推送] Token 驗證:", a.status, (i == null ? undefined : i.id) ? `用戶=${i.id}` : JSON.stringify(i));
                } catch (a) {
                  console.warn(L("logPushTokenVerifyFailed") || "[雲端推送] Token 驗證失敗:", a);
                }
                console.log(L("logPushSubscribing") || "[雲端推送] 開始訂閱...");
                await e(s);
                el(true);
                console.log(L("logPushEnableSuccess") || "[雲端推送] 啟用成功！");
              } catch (a) {
                console.error(L("logPushEnableFailed") || "[雲端推送] 啟用失敗:", a);
                await c(L("msgPushEnableFailed") + ": " + (a.message || a));
              } finally {
                al(false);
              }
            } else {
              try {
                al(true);
                try {
                  const {
                    syncAlarms: e
                  } = await t(async () => {
                    const {
                      syncAlarms: e
                    } = await import("./workerSyncService-Bi45Y3S-.js");
                    return {
                      syncAlarms: e
                    };
                  }, __vite__mapDeps([13, 6, 7, 0, 1, 2, 3, 4, 5, 8, 9, 10, 11]));
                  await e([]);
                } catch (i) {
                  console.warn("[雲端推送] 清空雲端鬧鐘失敗（不阻斷退訂）:", i);
                }
                const {
                  unsubscribeFromPush: e
                } = await t(async () => {
                  const {
                    unsubscribeFromPush: e
                  } = await import("./pushSubscriptionManager-BzPwLmDo.js");
                  return {
                    unsubscribeFromPush: e
                  };
                }, []);
                const a = await X().catch(() => null);
                await e(a);
                el(false);
              } catch (a) {
                console.warn(L("logPushUnsubscribeFailed") || "[雲端推送] 退訂失敗:", a);
                el(true);
                await c((L("logPushUnsubscribeFailed") || "[雲端推送] 退訂失敗") + ": " + ((a == null ? undefined : a.message) || a));
              } finally {
                al(false);
              }
            }
          },
          disabled: tl
        }), Zs && T.jsx(At, {
          icon: T.jsx(Fe, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-blue",
          label: L("labelSyncApiToCloud"),
          onClick: async () => {
            try {
              al(true);
              const {
                syncContext: e
              } = await t(async () => {
                const {
                  syncContext: e
                } = await import("./workerSyncService-Bi45Y3S-.js");
                return {
                  syncContext: e
                };
              }, __vite__mapDeps([13, 6, 7, 0, 1, 2, 3, 4, 5, 8, 9, 10, 11]));
              const a = {
                apiType: Qt,
                apiUrl: ea,
                apiKey: aa,
                model: oa,
                temperature: sa
              };
              await e({
                characters: We.map(e => ({
                  id: String(e.id),
                  name: e.name,
                  personality: e.personality || e.description || "",
                  avatar: e.avatar || null
                })),
                apiSettings: a,
                userName: localStorage.getItem("nuojiji_user_name") || L("defaultUserName")
              });
              await c(L("msgApiSyncedSuccess"));
            } catch (e) {
              await c(L("msgSyncFailed") + ": " + (e.message || e));
            } finally {
              al(false);
            }
          },
          rightElement: tl ? T.jsx("span", {
            style: {
              fontSize: "12px",
              color: "var(--text-secondary)"
            },
            children: L("statusSyncing")
          }) : T.jsx("span", {
            style: {
              fontSize: "12px",
              color: "var(--text-secondary)"
            },
            children: L("btnSync")
          })
        }), T.jsx("div", {
          style: {
            padding: "0 16px 12px 54px",
            fontSize: "12px",
            color: "var(--text-secondary)",
            lineHeight: "1.4"
          },
          children: L("msgCloudPushHint")
        }), T.jsxs("div", {
          style: {
            padding: "0 16px 12px 16px"
          },
          children: [T.jsxs("button", {
            onClick: () => ol(e => !e),
            style: {
              display: "flex",
              alignItems: "center",
              gap: "4px",
              background: "none",
              border: "none",
              padding: "4px 0",
              fontSize: "12px",
              color: "var(--text-secondary)",
              cursor: "pointer",
              opacity: 0.75
            },
            children: [T.jsx("span", {
              style: {
                fontSize: "13px"
              },
              children: "ⓘ"
            }), T.jsx("span", {
              children: L("titleCloudPushPrivacy")
            }), T.jsx("span", {
              style: {
                fontSize: "10px",
                marginLeft: "2px"
              },
              children: il ? "▴" : "▾"
            })]
          }), il && T.jsx("div", {
            style: {
              marginTop: "6px",
              padding: "12px 14px",
              background: "var(--bg-secondary, rgba(0,0,0,0.04))",
              borderRadius: "10px",
              fontSize: "12px",
              color: "var(--text-secondary)",
              lineHeight: "1.6",
              borderLeft: "3px solid var(--border-color, rgba(0,0,0,0.12))"
            },
            children: L("msgCloudPushPrivacyDetail").split("\n").map((e, t) => T.jsx("p", {
              style: {
                margin: t === 0 ? "0 0 6px 0" : "6px 0 0 0"
              },
              children: e
            }, t))
          })]
        })]
      }), T.jsxs(jt, {
        title: L("relaySectionTitle"),
        children: [T.jsx(_t, {
          icon: cl ? T.jsx(Fe, {
            size: 20,
            color: "white"
          }) : T.jsx(Re, {
            size: 20,
            color: "white"
          }),
          iconBg: cl ? "bg-green" : "bg-gray",
          label: L("relayEnableToggle"),
          checked: cl,
          onChange: e => {
            dl(e);
            bl(null);
          }
        }), T.jsxs("div", {
          style: {
            padding: "12px 16px"
          },
          children: [[{
            key: "url",
            type: "text",
            label: L("relayUrlLabel"),
            value: nl,
            setter: sl
          }, {
            key: "secret",
            type: "password",
            label: L("relaySecretLabel"),
            value: ll,
            setter: rl
          }].map(({
            key: e,
            type: t,
            label: a,
            value: i,
            setter: o
          }) => T.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "8px"
            },
            children: [T.jsx("span", {
              style: {
                fontSize: "14px",
                color: "var(--text-secondary)",
                minWidth: "64px",
                flexShrink: 0
              },
              children: a
            }), T.jsx("input", {
              type: t,
              placeholder: a,
              value: i,
              onChange: e => {
                o(e.target.value);
                bl(null);
              },
              style: {
                flex: 1,
                padding: "9px 12px",
                border: "1px solid var(--border-color, rgba(0,0,0,0.1))",
                borderRadius: "10px",
                background: "var(--bg-secondary, #f5f5f5)",
                fontSize: "14px",
                color: "var(--text-primary)",
                outline: "none",
                minWidth: 0
              }
            })]
          }, e)), T.jsx("button", {
            onClick: async () => {
              hl(true);
              bl(null);
              try {
                const {
                  testRelayConnectivity: e
                } = await t(async () => {
                  const {
                    testRelayConnectivity: e
                  } = await import("./main-BO9xa-SQ.js").then(e => e.cp);
                  return {
                    testRelayConnectivity: e
                  };
                }, __vite__mapDeps([6, 7, 0, 1, 2, 3, 4, 5, 8, 9, 10, 11]));
                const a = await e(nl.trim(), ll.trim());
                bl(a);
              } catch (e) {
                bl({
                  ok: false,
                  reason: (e == null ? undefined : e.message) || String(e)
                });
              } finally {
                hl(false);
              }
            },
            disabled: ul || !nl.trim(),
            style: {
              marginTop: "4px",
              padding: "9px 16px",
              border: "none",
              borderRadius: "10px",
              background: "var(--accent-color, #4a9eff)",
              color: "white",
              fontSize: "14px",
              cursor: ul ? "default" : "pointer",
              opacity: ul || !nl.trim() ? 0.6 : 1
            },
            children: ul ? L("btnTesting") || "测试中…" : L("relayTestButton")
          }), ml && T.jsx("div", {
            style: {
              marginTop: "8px",
              fontSize: "13px",
              color: ml.ok ? "var(--success-color, #22a06b)" : "var(--danger-color, #e5484d)"
            },
            children: ml.ok ? `${L("relayTestOk")}${ml.version ? ` (v${ml.version})` : ""}` : `${L("relayTestFail")}: ${ml.reason || ""}`
          }), cl && T.jsx("button", {
            onClick: async () => {
              try {
                const {
                  diagnosePush: a,
                  registerApnsToken: i,
                  subscribeRelayPush: o
                } = await t(async () => {
                  const {
                    diagnosePush: e,
                    registerApnsToken: t,
                    subscribeRelayPush: a
                  } = await import("./main-BO9xa-SQ.js").then(e => e.cp);
                  return {
                    diagnosePush: e,
                    registerApnsToken: t,
                    subscribeRelayPush: a
                  };
                }, __vite__mapDeps([6, 7, 0, 1, 2, 3, 4, 5, 8, 9, 10, 11]));
                const n = [];
                const s = typeof window != "undefined" && window.__nuojijiApnsToken || null;
                const l = typeof window != "undefined" && window.__nuojijiApnsStatus || null;
                const r = e();
                n.push("平台：" + (r ? "App(原生)" : "Web/PWA"));
                n.push("APNs token：" + (s ? "有 …" + String(s).slice(-6) : "无"));
                if (r) {
                  n.push(`原生注册状态：${l || "（无——AppDelegate 没注入，可能此版本未带诊断/WebView 时序）"}`);
                }
                let d = await a(false);
                if (!d.ok) {
                  await c("推送链路自检\n\n" + n.join("\n") + "\n\n查询后端失败：" + (d.error || ""));
                  return;
                }
                if ((d.count || 0) === 0) {
                  n.push("\n后端当前订阅：0 → 尝试当场注册…");
                  if (r && s) {
                    const e = await i(s).catch(e => ({
                      ok: false,
                      error: e == null ? undefined : e.message
                    }));
                    n.push("apns 注册：" + ((e == null ? undefined : e.ok) ? "请求成功" : "失败 " + ((e == null ? undefined : e.error) || "")));
                  } else if (r) {
                    n.push("无 token，跳过注册（先去系统设置给本 App 通知权限，再重开 App）");
                  } else {
                    const e = await o().catch(e => ({
                      ok: false,
                      error: e == null ? undefined : e.message
                    }));
                    n.push("web push 订阅：" + ((e == null ? undefined : e.ok) ? "成功" : "失败 " + ((e == null ? undefined : e.error) || "")));
                  }
                  d = await a(true);
                } else {
                  d = await a(true);
                }
                const g = (d.channels || []).map(e => `${e.channel}${e.idTail ? " " + e.idTail : ""}`).join("、") || "（无）";
                const p = (d.dispatch || []).map(e => `${e.channel}: ${e.ok ? "✅" : "❌"}${e.reason ? " " + e.reason : ""}${e.gone ? " (token失效已清)" : ""}`).join("\n");
                let u = "";
                if (Array.isArray(d.avatars) && d.avatars.length) {
                  const e = d.avatars.filter(e => typeof e.kvStatus != "string" || !e.kvStatus.startsWith("present"));
                  const i = [];
                  if (e.length) {
                    const {
                      reuploadCharAvatar: o
                    } = await t(async () => {
                      const {
                        reuploadCharAvatar: e
                      } = await import("./main-BO9xa-SQ.js").then(e => e.cr);
                      return {
                        reuploadCharAvatar: e
                      };
                    }, __vite__mapDeps([6, 7, 0, 1, 2, 3, 4, 5, 8, 9, 10, 11]));
                    for (const t of e) {
                      if (t.charId == null) {
                        continue;
                      }
                      const e = await o(He, t.charId).catch(e => ({
                        ok: false,
                        reason: e == null ? undefined : e.message
                      }));
                      i.push(`${(e == null ? undefined : e.ok) ? "✅ 已补传" : "⚠️ 补传失败"} ${t.charName || t.charId}${(e == null ? undefined : e.ok) ? "" : "：" + ((e == null ? undefined : e.reason) || "")}`);
                    }
                    if (i.some(e => e.startsWith("✅"))) {
                      const e = await a(false).catch(() => null);
                      if ((e == null ? undefined : e.ok) && Array.isArray(e.avatars)) {
                        d.avatars = e.avatars;
                      }
                    }
                  }
                  u = "\n\n角色头像上传状态：\n" + d.avatars.map(e => `${typeof e.kvStatus == "string" && e.kvStatus.startsWith("present") ? "✅" : "❌"} ${e.charName || e.charId}: ${e.kvStatus}`).join("\n");
                  if (i.length) {
                    u += "\n\n本次补传：\n" + i.join("\n");
                  }
                } else {
                  u = d.avatarsError ? "\n\n角色头像状态查询失败：" + d.avatarsError : "\n\n角色头像：（无注册的后台主动角色，先在角色设置开「后台主动消息」并开「后端代理主动消息」总开关）";
                }
                await c(`${"推送链路自检\n\n" + n.join("\n")}\n\n已注册订阅（${d.count || 0}）：${g}${p ? `\n\n测试推送结果：\n${p}` : ""}${u}`);
              } catch (a) {
                await c("推送链路自检出错：" + ((a == null ? undefined : a.message) || a));
              }
            },
            style: {
              marginTop: "8px",
              marginLeft: "8px",
              padding: "9px 16px",
              border: "none",
              borderRadius: "10px",
              background: "var(--bg-secondary, #eee)",
              color: "var(--text-primary)",
              fontSize: "14px",
              cursor: "pointer"
            },
            children: L("relayPushDiagButton") || "检查推送"
          }), cl && !e() && T.jsx("button", {
            onClick: async () => {
              try {
                const {
                  subscribeRelayPush: e
                } = await t(async () => {
                  const {
                    subscribeRelayPush: e
                  } = await import("./main-BO9xa-SQ.js").then(e => e.cp);
                  return {
                    subscribeRelayPush: e
                  };
                }, __vite__mapDeps([6, 7, 0, 1, 2, 3, 4, 5, 8, 9, 10, 11]));
                const a = await e();
                if (a.ok) {
                  await c(L("relayPushEnabledOk") || "已开启推送：App 关闭时也会弹通知");
                } else {
                  await c((L("relayPushEnabledFail") || "开启推送失败") + "：" + (a.error || ""));
                }
              } catch (e) {
                await c("开启推送失败：" + ((e == null ? undefined : e.message) || e));
              }
            },
            style: {
              marginTop: "8px",
              marginLeft: "8px",
              padding: "9px 16px",
              border: "none",
              borderRadius: "10px",
              background: "var(--bg-secondary, #eee)",
              color: "var(--text-primary)",
              fontSize: "14px",
              cursor: "pointer"
            },
            children: L("relayEnablePushButton") || "开启关闭时推送"
          })]
        }), T.jsx("div", {
          style: {
            padding: "0 16px 12px 16px",
            fontSize: "12px",
            color: "var(--text-secondary)",
            lineHeight: "1.5"
          },
          children: L("relayHelpText")
        }), cl && T.jsxs(T.Fragment, {
          children: [T.jsx(_t, {
            icon: gl ? T.jsx(Fe, {
              size: 20,
              color: "white"
            }) : T.jsx(Re, {
              size: 20,
              color: "white"
            }),
            iconBg: gl ? "bg-green" : "bg-gray",
            label: L("relayProactiveToggle"),
            checked: gl,
            onChange: async e => {
              pl(e);
              try {
                const {
                  GlobalSettingsService: a
                } = await t(async () => {
                  const {
                    GlobalSettingsService: e
                  } = await import("./native-pet-CTNtZgMA.js").then(e => e.cz);
                  return {
                    GlobalSettingsService: e
                  };
                }, __vite__mapDeps([0, 1, 2, 3, 4, 5]));
                const i = (await a.get("apiSettings")) || {};
                await a.set("apiSettings", {
                  ...i,
                  relayUrl: nl.trim(),
                  relaySecret: ll.trim(),
                  relayEnabled: cl,
                  relayProactiveEnabled: e
                });
              } catch (i) {}
              const a = (fr || []).filter(e => e && e.id && e.userId);
              try {
                if (e) {
                  const {
                    registerProactive: e
                  } = await t(async () => {
                    const {
                      registerProactive: e
                    } = await import("./main-BO9xa-SQ.js").then(e => e.cr);
                    return {
                      registerProactive: e
                    };
                  }, __vite__mapDeps([6, 7, 0, 1, 2, 3, 4, 5, 8, 9, 10, 11]));
                  let i = 0;
                  let o = 0;
                  let n = "";
                  for (const t of a) {
                    const a = t.proactiveMode === "on" ? "impulse" : "interval";
                    const s = await e(t.userId, t.id, {
                      mode: a,
                      interval: mr,
                      intervalUnit: xr,
                      probability: t.probability
                    }).catch(e => ({
                      ok: false,
                      error: e == null ? undefined : e.message
                    }));
                    if (s == null ? undefined : s.ok) {
                      i++;
                    } else {
                      o++;
                      if (s == null ? undefined : s.error) {
                        n = s.error;
                      }
                    }
                  }
                  await c(`后端代理主动消息已开启\n注册成功 ${i} 个角色${o ? `，失败 ${o} 个` : ""}${n ? `\n错误：${n}` : ""}${a.length === 0 ? "\n（注意：没有角色开「后台主动消息」，先去角色设置开启）" : ""}`);
                } else {
                  const {
                    unregisterProactive: e
                  } = await t(async () => {
                    const {
                      unregisterProactive: e
                    } = await import("./main-BO9xa-SQ.js").then(e => e.cr);
                    return {
                      unregisterProactive: e
                    };
                  }, __vite__mapDeps([6, 7, 0, 1, 2, 3, 4, 5, 8, 9, 10, 11]));
                  for (const t of a) {
                    await e(t.userId, t.id).catch(() => {});
                  }
                }
              } catch (o) {
                await c("后端代理主动消息切换出错：" + ((o == null ? undefined : o.message) || o));
              }
            }
          }), T.jsx("div", {
            style: {
              padding: "0 16px 12px 54px",
              fontSize: "12px",
              color: "var(--text-secondary)",
              lineHeight: "1.5"
            },
            children: L("relayProactiveHelp")
          })]
        })]
      }), T.jsx(jt, {
        title: L("sectionGithubBackup"),
        children: T.jsxs("div", {
          style: {
            padding: "12px 16px"
          },
          children: [[{
            key: "token",
            type: "password",
            placeholder: L("labelGhToken"),
            value: xl,
            setter: yl,
            field: "token"
          }, {
            key: "username",
            type: "text",
            placeholder: L("labelGhUsername"),
            value: fl,
            setter: vl,
            field: "username"
          }, {
            key: "repo",
            type: "text",
            placeholder: L("labelGhRepo"),
            value: wl,
            setter: Sl,
            field: "repo"
          }, {
            key: "filename",
            type: "text",
            placeholder: L("labelGhFilename"),
            value: jl,
            setter: kl,
            field: "filename"
          }].map(({
            key: e,
            type: t,
            placeholder: a,
            value: i,
            setter: o,
            field: n
          }) => T.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "8px"
            },
            children: [T.jsx("span", {
              style: {
                fontSize: "14px",
                color: "var(--text-secondary)",
                minWidth: "52px",
                flexShrink: 0
              },
              children: a
            }), T.jsx("input", {
              type: t,
              placeholder: a,
              value: i,
              onChange: e => {
                o(e.target.value);
                Tr({
                  [n]: e.target.value
                });
              },
              style: {
                flex: 1,
                padding: "9px 12px",
                border: "1px solid var(--border-color, rgba(0,0,0,0.1))",
                borderRadius: "10px",
                background: "var(--bg-secondary, #f5f5f5)",
                fontSize: "14px",
                color: "var(--text-primary)",
                outline: "none",
                minWidth: 0
              }
            })]
          }, e)), T.jsx("div", {
            style: {
              height: "1px",
              background: "var(--border-color, rgba(0,0,0,0.06))",
              margin: "12px 0"
            }
          }), T.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: Cl ? "12px" : "0"
            },
            children: [T.jsx("span", {
              style: {
                fontSize: "15px",
                fontWeight: 500
              },
              children: L("labelGhAutoBackup")
            }), T.jsxs("label", {
              className: "toggle-switch",
              onClick: e => e.stopPropagation(),
              children: [T.jsx("input", {
                type: "checkbox",
                checked: Cl,
                onChange: e => {
                  _l(e.target.checked);
                  Tr({
                    autoBackup: e.target.checked
                  });
                }
              }), T.jsx("span", {
                className: "slider"
              })]
            })]
          }), Cl && T.jsxs("div", {
            style: {
              background: "var(--bg-secondary, #f5f5f5)",
              borderRadius: "12px",
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            },
            children: [T.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              },
              children: [T.jsx("span", {
                style: {
                  fontSize: "13px",
                  color: "var(--text-secondary)"
                },
                children: L("labelGhAutoBackupMode")
              }), T.jsxs("select", {
                value: Al,
                onChange: e => {
                  Il(e.target.value);
                  Tr({
                    autoBackupMode: e.target.value
                  });
                },
                style: {
                  padding: "6px 10px",
                  borderRadius: "8px",
                  border: "1px solid var(--border-color, rgba(0,0,0,0.1))",
                  background: "var(--bg-primary, #fff)",
                  fontSize: "13px",
                  color: "var(--text-primary)",
                  outline: "none"
                },
                children: [T.jsx("option", {
                  value: "full",
                  children: L("labelGhModeFull")
                }), T.jsx("option", {
                  value: "streaming",
                  children: L("labelGhModeStreaming")
                })]
              })]
            }), T.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              },
              children: [T.jsx("span", {
                style: {
                  fontSize: "13px",
                  color: "var(--text-secondary)"
                },
                children: L("labelGhInterval")
              }), T.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                },
                children: [T.jsx("input", {
                  type: "number",
                  value: Pl,
                  onChange: e => {
                    const t = Math.max(1, parseInt(e.target.value) || 1);
                    $l(t);
                    Tr({
                      autoBackupInterval: t
                    });
                  },
                  style: {
                    width: "56px",
                    padding: "6px 8px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-color, rgba(0,0,0,0.1))",
                    background: "var(--bg-primary, #fff)",
                    fontSize: "13px",
                    color: "var(--text-primary)",
                    outline: "none",
                    textAlign: "center"
                  }
                }), T.jsxs("select", {
                  value: zl,
                  onChange: e => {
                    El(e.target.value);
                    Tr({
                      autoBackupUnit: e.target.value
                    });
                  },
                  style: {
                    padding: "6px 10px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-color, rgba(0,0,0,0.1))",
                    background: "var(--bg-primary, #fff)",
                    fontSize: "13px",
                    color: "var(--text-primary)",
                    outline: "none"
                  },
                  children: [T.jsx("option", {
                    value: "minutes",
                    children: L("unitMinutes")
                  }), T.jsx("option", {
                    value: "hours",
                    children: L("unitHours")
                  }), T.jsx("option", {
                    value: "days",
                    children: L("unitDays")
                  })]
                })]
              })]
            }), T.jsx("div", {
              style: {
                fontSize: "12px",
                color: "var(--text-tertiary, #999)",
                lineHeight: 1.5,
                marginTop: "2px"
              },
              children: L("hintGhAutoBackupKeepAlive")
            })]
          }), T.jsx("div", {
            style: {
              height: "1px",
              background: "var(--border-color, rgba(0,0,0,0.06))",
              margin: "12px 0"
            }
          }), T.jsxs("div", {
            style: {
              display: "flex",
              gap: "10px",
              marginBottom: "10px"
            },
            children: [T.jsxs("button", {
              onClick: () => (async (e = false) => {
                if (!wd()) {
                  return;
                }
                if (Bl) {
                  return;
                }
                if (!(await Sd(e))) {
                  return;
                }
                try {
                  const t = await m.table("messages").count();
                  if (t > 2000) {
                    console.log(`[GitHub 備份] 訊息 ${t} 條 > 2000，自動切換流式上傳`);
                    if (!e) {
                      await c(L("msgGhAutoSwitchedStreaming", {
                        count: t
                      }));
                    }
                    return _d(e);
                  }
                } catch (a) {}
                let t = false;
                Tl(true);
                try {
                  U("gh-upload-full", 3600000);
                  t = true;
                  await Nl(async () => {
                    console.log("[GitHub 備份] 開始全量上傳...");
                    const e = await (async () => {
                      let e = [];
                      let t = 0;
                      let a = 0;
                      const i = a => {
                        t += a.length;
                        if (t > 47185920) {
                          throw new Error(`全量備份資料過大（約 ${(t / 1024 / 1024).toFixed(0)}MB），已自動切換流式上傳模式`);
                        }
                        e.push(a);
                      };
                      i("{\"version\":5,\"timestamp\":" + Date.now());
                      i(",\"userAgent\":" + JSON.stringify(navigator.userAgent));
                      i(",\"appVersion\":" + JSON.stringify(`${O} (${H})`));
                      i(",\"data\":{\"indexedDB\":{}");
                      const o = Lc();
                      const n = Kc(o, "localStorage");
                      const s = Object.keys(n).length;
                      i(",\"localStorage\":" + JSON.stringify(n));
                      i(",\"structuredDB\":{");
                      const l = Jc(null);
                      let r = true;
                      for (const p of l) {
                        if (!ut.has(p)) {
                          try {
                            if (!r) {
                              i(",");
                            }
                            r = false;
                            i(JSON.stringify(p) + ":[");
                            const e = m.table(p);
                            const t = await e.count();
                            let o = true;
                            let n = 0;
                            for (let a = 0; a < t; a += 50) {
                              const t = await e.offset(a).limit(50).toArray();
                              for (const e of t) {
                                if (!o) {
                                  i(",");
                                }
                                o = false;
                                let t = await Nc(e);
                                t = rd(t, {});
                                if (p !== "imageStore") {
                                  const e = cd(t, nt);
                                  if (e.dropped.length > 0) {
                                    t = e.row;
                                    console.warn(`[GitHub 備份] ⚠️ 表 ${p} 單行超限，已瘦身保留骨架，丟棄: ${e.dropped.join(", ")}`);
                                  }
                                }
                                i(JSON.stringify(t));
                                n++;
                              }
                              await new Promise(e => setTimeout(e, 0));
                            }
                            i("]");
                            a += n;
                          } catch (g) {
                            if (g.message && g.message.includes("已自動切換流式上傳模式")) {
                              throw g;
                            }
                            console.warn(`[GitHub 備份] 讀取表失敗: ${p}`, g);
                            if (!r) {
                              i(",");
                            }
                            r = false;
                            i(JSON.stringify(p) + ":[]");
                          }
                        }
                      }
                      i("}");
                      i("}");
                      const c = {
                        itemCount: {
                          indexedDB: 0,
                          localStorage: s,
                          structuredDB: a
                        },
                        exportType: "github_full",
                        exportReduction: {
                          audioAndBinaryPayloadStripped: true
                        }
                      };
                      i(",\"metadata\":" + JSON.stringify(c));
                      i("}");
                      const d = e.join("");
                      e.length = 0;
                      e = null;
                      return d;
                    })();
                    const t = (e.length / 1024 / 1024).toFixed(2);
                    console.log(`[GitHub 備份] 數據大小: ${t}MB`);
                    await xd(jl, e, `nuojiji backup ${new Date().toISOString()}`);
                    console.log("[GitHub 備份] ✅ 全量上傳成功");
                    const a = Date.now();
                    Rl.current = a;
                    await Dr(a);
                  });
                  if (!e) {
                    c(L("msgGhUploadSuccess"));
                  }
                } catch (i) {
                  console.error("[GitHub 備份] ❌ 全量上傳失敗:", i);
                  if (!e) {
                    c(L("msgGhUploadFailed") + ": " + i.message);
                  }
                } finally {
                  if (t) {
                    W();
                  }
                  Tl(false);
                }
              })(false),
              disabled: Bl || Dl,
              style: {
                flex: 1,
                padding: "10px",
                borderRadius: "12px",
                border: "1.5px solid #007AFF",
                background: "rgba(0,122,255,0.08)",
                color: "#007AFF",
                fontSize: "14px",
                fontWeight: 600,
                cursor: Bl ? "wait" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                opacity: Bl || Dl ? 0.5 : 1
              },
              children: [T.jsx(Ne, {
                size: 15
              }), L(Bl ? "msgGhUploading" : "labelGhUploadFull")]
            }), T.jsxs("button", {
              onClick: async () => {
                if (!wd()) {
                  return;
                }
                if (Dl) {
                  return;
                }
                if (!(await h(L("msgGhConfirmRestore")))) {
                  return;
                }
                let e = false;
                Fl(true);
                try {
                  U("gh-download-full", 3600000);
                  e = true;
                  await Nl(async () => {
                    let e;
                    let t;
                    console.log("[GitHub 備份] 開始全量恢復...");
                    try {
                      e = await vd(jl);
                    } catch (i) {
                      if (await jd()) {
                        throw new Error(L("msgGhStreamingDetected"));
                      }
                      throw i;
                    }
                    if (!e || e.length < 10) {
                      if (await jd()) {
                        throw new Error(L("msgGhStreamingDetected"));
                      }
                      throw new Error(L("msgGhEmptyBackup"));
                    }
                    try {
                      t = JSON.parse(e);
                    } catch (o) {
                      if (await jd()) {
                        throw new Error(L("msgGhStreamingDetected"));
                      }
                      throw o;
                    }
                    if (!t.data || !t.data.localStorage || !t.data.structuredDB) {
                      throw new Error(L("importError"));
                    }
                    const a = Kc(t.data.localStorage, "localStorage");
                    Wc();
                    Object.entries(a).forEach(([e, t]) => {
                      try {
                        localStorage.setItem(e, t);
                      } catch (a) {}
                    });
                    if (t.data.structuredDB) {
                      const e = {};
                      for (const a of Object.keys(t.data.structuredDB)) {
                        e[a] = true;
                      }
                      await (async (e, t = true, a = null) => {
                        if (!e || typeof e != "object") {
                          return;
                        }
                        const i = Jc(a).filter(t => Object.prototype.hasOwnProperty.call(e, t));
                        for (const n of i) {
                          const i = m.table(n);
                          const o = Mc(e[n]);
                          delete e[n];
                          let s = Array.isArray(o) ? o : [];
                          const l = !!a && !!(a.length > 0);
                          if (l && rt.has(n)) {
                            s = s.filter(e => qc(n, e, a));
                          }
                          const r = t && !l;
                          if (s.length > 0) {
                            if (r) {
                              await i.clear();
                            }
                            await i.bulkPut(s);
                          } else if (r) {
                            console.warn(`[還原] 表 ${n} 備份數據為空,跳過清空以保護本地現有數據`);
                          }
                          await new Promise(e => setTimeout(e, 0));
                        }
                        try {
                          const e = await m.users.toArray().catch(() => []);
                          if (Array.isArray(e) && e.length > 0) {
                            try {
                              localStorage.setItem("nuojiji_had_data", "1");
                            } catch (o) {}
                            for (const t of e) {
                              const e = (t == null ? undefined : t.uid) || (t == null ? undefined : t.id);
                              if (e) {
                                try {
                                  localStorage.setItem(`nuojiji_had_userstate_${e}`, "1");
                                } catch (o) {}
                              }
                            }
                          }
                        } catch (o) {}
                      })(t.data.structuredDB, true);
                      await nd(a, e, "GitHub 備份");
                      await sd();
                    }
                    console.log("[GitHub 備份] ✅ 全量恢復成功");
                  });
                  await c(L("msgGhDownloadSuccess"));
                  setTimeout(() => window.location.reload(), 500);
                } catch (t) {
                  console.error("[GitHub 備份] ❌ 全量恢復失敗:", t);
                  c(L("msgGhDownloadFailed") + ": " + t.message);
                } finally {
                  if (e) {
                    W();
                  }
                  Fl(false);
                }
              },
              disabled: Bl || Dl,
              style: {
                flex: 1,
                padding: "10px",
                borderRadius: "12px",
                border: "1.5px solid #FF3B30",
                background: "rgba(255,59,48,0.08)",
                color: "#FF3B30",
                fontSize: "14px",
                fontWeight: 600,
                cursor: Dl ? "wait" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                opacity: Bl || Dl ? 0.5 : 1
              },
              children: [T.jsx(Me, {
                size: 15
              }), L(Dl ? "msgGhDownloading" : "labelGhDownloadFull")]
            })]
          }), T.jsxs("div", {
            style: {
              display: "flex",
              gap: "10px",
              marginBottom: "12px"
            },
            children: [T.jsxs("button", {
              onClick: () => _d(false),
              disabled: Bl || Dl,
              style: {
                flex: 1,
                padding: "10px",
                borderRadius: "12px",
                border: "1.5px solid #007AFF",
                background: "rgba(0,122,255,0.08)",
                color: "#007AFF",
                fontSize: "14px",
                fontWeight: 600,
                cursor: Bl ? "wait" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                opacity: Bl || Dl ? 0.5 : 1
              },
              children: [T.jsx(Ne, {
                size: 15
              }), L("labelGhUploadStreaming")]
            }), T.jsxs("button", {
              onClick: async () => {
                if (!wd()) {
                  return;
                }
                if (Dl) {
                  return;
                }
                if (!(await h(L("msgGhConfirmRestore")))) {
                  return;
                }
                let e = false;
                Fl(true);
                try {
                  U("gh-download-streaming", 3600000);
                  e = true;
                  await Nl(async () => {
                    console.log("[GitHub 備份] 開始流式導入...");
                    const e = jl.replace(/\.json$/i, "");
                    let t;
                    try {
                      const a = await vd(`${e}/_manifest.json`);
                      t = JSON.parse(a);
                    } catch (s) {
                      console.warn("[GitHub 備份] _manifest.json 不存在，嘗試從目錄結構自動重建...");
                      const a = await (async e => {
                        const t = await md();
                        const a = await ud("GET", `ref/heads/${t}`);
                        const i = (await ud("GET", `commits/${a.object.sha}`)).tree.sha;
                        const o = (await ud("GET", `trees/${i}?recursive=1`)).tree || [];
                        const n = `${e}/`;
                        const s = o.filter(e => e.type === "blob" && e.path && e.path.startsWith(n));
                        if (s.length === 0) {
                          return null;
                        }
                        const l = new Set();
                        const r = {};
                        for (const c of s) {
                          const e = c.path.slice(n.length);
                          if (e === "_manifest.json" || e === "_manifest.json.gz") {
                            continue;
                          }
                          if (e === "_localStorage.json" || e === "_localStorage.json.gz") {
                            continue;
                          }
                          const t = e.replace(/\.json(\.gz)?$/i, "");
                          const a = t.match(/^(.+)_chunk_(\d+)$/);
                          if (a) {
                            const e = a[1];
                            const t = parseInt(a[2], 10);
                            l.add(e);
                            if (!r[e] || t + 1 > r[e]) {
                              r[e] = t + 1;
                            }
                          } else {
                            l.add(t);
                          }
                        }
                        if (l.size === 0) {
                          return null;
                        } else {
                          return {
                            version: 6,
                            timestamp: Date.now(),
                            appVersion: "reconstructed-from-tree",
                            tables: Array.from(l),
                            chunkedTables: Object.keys(r).length > 0 ? r : undefined,
                            source: "reconstructed"
                          };
                        }
                      })(e);
                      if (!a) {
                        throw new Error(L("msgGhNoManifestNoFiles"));
                      }
                      t = a;
                      console.warn(`[GitHub 備份] 自動重建 manifest 成功：${a.tables.length} 表，其中 ${Object.keys(a.chunkedTables || {}).length} 表分片`);
                      c(L("msgGhManifestRebuilt"));
                    }
                    const a = t.tables || [];
                    console.log("[GitHub 備份] 恢復 localStorage...");
                    let i = {};
                    try {
                      const t = await vd(`${e}/_localStorage.json`);
                      i = Kc(JSON.parse(t), "localStorage");
                      Wc();
                      Object.entries(i).forEach(([e, t]) => {
                        try {
                          localStorage.setItem(e, t);
                        } catch (a) {}
                      });
                    } catch (l) {
                      console.warn("[GitHub 備份] _localStorage.json 不存在或讀取失敗，保留本地 localStorage:", l);
                    }
                    const o = t.chunkedTables || {};
                    for (let c = 0; c < a.length; c++) {
                      const t = a[c];
                      const i = o[t];
                      try {
                        const o = t === "multiSceneSummaries" ? {
                          clear: async () => {},
                          bulkPut: async e => {
                            await ht("multiSceneSummaries", e);
                          }
                        } : m.table(t);
                        let n = null;
                        let s = null;
                        let l = 0;
                        if (i && i >= 1) {
                          n = await vd(`${e}/${t}_chunk_0.json`);
                          s = "chunked-known";
                          l = i;
                        } else {
                          try {
                            n = await vd(`${e}/${t}.json`);
                            s = "single";
                          } catch (r) {
                            console.warn(`[GitHub 備份] ${t}.json 不存在，嘗試掃描殘留切片...`);
                            try {
                              n = await vd(`${e}/${t}_chunk_0.json`);
                              s = "chunked-probe";
                            } catch (d) {
                              console.warn(`[GitHub 備份] 表 ${t} 雲端無備份檔，保留本地現有資料（避免清空）`);
                              continue;
                            }
                          }
                        }
                        const u = Mc(JSON.parse(n));
                        if (!Array.isArray(u) || !(u.length > 0)) {
                          console.warn(`[GitHub 備份] 表 ${t} 雲端首片為空,跳過清空以保護本地現有數據`);
                          continue;
                        }
                        await o.clear();
                        await o.bulkPut(u);
                        if (s === "single") {
                          console.log(`[GitHub 備份] 恢復 ${t} (${c + 1}/${a.length})`);
                        } else if (s === "chunked-known") {
                          console.log(`[GitHub 備份] 恢復 ${t} (${c + 1}/${a.length}, ${l} 片)`);
                          console.log(`[GitHub 備份]   片 1/${l} 完成 (${Array.isArray(u) ? u.length : 0} 筆)`);
                          for (let a = 1; a < l; a++) {
                            try {
                              const i = await vd(`${e}/${t}_chunk_${a}.json`);
                              const n = Mc(JSON.parse(i));
                              if (Array.isArray(n) && n.length > 0) {
                                await o.bulkPut(n);
                              }
                              console.log(`[GitHub 備份]   片 ${a + 1}/${l} 完成 (${Array.isArray(n) ? n.length : 0} 筆)`);
                            } catch (g) {
                              console.warn(`[GitHub 備份]   片 ${a + 1}/${l} 失敗，保留已恢復的部分:`, g);
                            }
                            await new Promise(e => setTimeout(e, 0));
                          }
                        } else {
                          console.log(`[GitHub 備份] 恢復 ${t} (${c + 1}/${a.length}, fallback 切片掃描)`);
                          console.log(`[GitHub 備份]   片 1 完成 (${Array.isArray(u) ? u.length : 0} 筆)`);
                          let i = 1;
                          while (true) {
                            try {
                              const a = await vd(`${e}/${t}_chunk_${i}.json`);
                              const n = Mc(JSON.parse(a));
                              if (Array.isArray(n) && n.length > 0) {
                                await o.bulkPut(n);
                              }
                              console.log(`[GitHub 備份]   片 ${i + 1} 完成 (${Array.isArray(n) ? n.length : 0} 筆)`);
                              i++;
                              await new Promise(e => setTimeout(e, 0));
                            } catch (p) {
                              break;
                            }
                          }
                          console.log(`[GitHub 備份] ${t} fallback 共恢復 ${i} 片`);
                        }
                      } catch (u) {
                        console.warn(`[GitHub 備份] 表 ${t} 恢復失敗:`, u);
                      }
                    }
                    const n = {};
                    for (const c of a) {
                      n[c] = true;
                    }
                    await nd(i, n, "GitHub 流式");
                    await sd();
                    console.log("[GitHub 備份] ✅ 流式導入完成");
                  });
                  await c(L("msgGhDownloadSuccess"));
                  setTimeout(() => window.location.reload(), 500);
                } catch (t) {
                  console.error("[GitHub 備份] ❌ 流式導入失敗:", t);
                  c(L("msgGhDownloadFailed") + ": " + t.message);
                } finally {
                  if (e) {
                    W();
                  }
                  Fl(false);
                }
              },
              disabled: Bl || Dl,
              style: {
                flex: 1,
                padding: "10px",
                borderRadius: "12px",
                border: "1.5px solid #007AFF",
                background: "rgba(0,122,255,0.08)",
                color: "#007AFF",
                fontSize: "14px",
                fontWeight: 600,
                cursor: Dl ? "wait" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                opacity: Bl || Dl ? 0.5 : 1
              },
              children: [T.jsx(Me, {
                size: 15
              }), L("labelGhDownloadStreaming")]
            })]
          }), T.jsxs("div", {
            style: {
              fontSize: "11px",
              color: "var(--text-secondary)",
              lineHeight: "1.6",
              display: "flex",
              flexDirection: "column",
              gap: "4px"
            },
            children: [T.jsx("span", {
              children: L("msgGhFullHint")
            }), T.jsx("span", {
              children: L("msgGhStreamingHint")
            })]
          })]
        })
      }), T.jsxs(jt, {
        title: L("sectionDataManage"),
        children: [T.jsx(At, {
          icon: T.jsx(Ne, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-blue",
          label: L("labelImportBackup"),
          onClick: () => mc.current.click()
        }), T.jsx(At, {
          icon: T.jsx(be, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-blue",
          label: L("labelPartialImport"),
          onClick: () => bc.current.click()
        }), T.jsx(At, {
          icon: T.jsx(Me, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-green",
          label: L("labelExportBackup"),
          onClick: dd
        }), T.jsx(At, {
          icon: T.jsx(de, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-green",
          label: L("labelPartialExport"),
          onClick: () => {
            kc(Bc.map(e => e.id));
            _c($c);
            Ic([]);
            vc("export");
            yc(true);
          }
        }), T.jsx(At, {
          icon: T.jsx(ge, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-red",
          label: L("labelClearData"),
          onClick: async () => {
            if ((await h(L("msgConfirmClearData"))) && (await h(L("msgConfirmClearData2")))) {
              try {
                console.log("[Clear Data] Wiping all data...");
                localStorage.clear();
                await _();
                try {
                  await m.delete();
                  console.log("[Clear Data] ✅ Dexie DB deleted entirely");
                  try {
                    localStorage.removeItem("nuojiji_had_data");
                    Object.keys(localStorage).filter(e => e.startsWith("nuojiji_had_userstate_")).forEach(e => localStorage.removeItem(e));
                  } catch (e) {}
                } catch (a) {
                  console.error("[Clear Data] Dexie DB 刪除失敗，嘗試逐表清除:", a);
                  const e = [...st, "ttsAudio"];
                  for (const t of e) {
                    try {
                      await m.table(t).clear();
                    } catch (i) {
                      console.warn(`[Clear Data] 清除表 ${t} 失敗:`, i);
                    }
                  }
                }
                try {
                  const {
                    closeDB: e
                  } = await t(async () => {
                    const {
                      closeDB: e
                    } = await import("./native-pet-CTNtZgMA.js").then(e => e.cw);
                    return {
                      closeDB: e
                    };
                  }, __vite__mapDeps([0, 1, 2, 3, 4, 5]));
                  await e();
                  await new Promise((e, t) => {
                    const a = indexedDB.deleteDatabase("NuojijiAppDB");
                    a.onsuccess = () => {
                      console.log("[Clear Data] ✅ Old NuojijiAppDB deleted");
                      e();
                    };
                    a.onerror = () => {
                      console.warn("[Clear Data] Old DB delete failed");
                      e();
                    };
                    a.onblocked = () => {
                      console.warn("[Clear Data] Old DB delete blocked");
                      e();
                    };
                  });
                } catch (o) {
                  console.warn("[Clear Data] Old DB cleanup error:", o);
                }
                await c(L("msgClearSuccess"));
                setTimeout(() => {
                  window.location.reload();
                }, 500);
              } catch (o) {
                console.error("[Clear Data] Failed:", o);
                c("Failed to clear data: " + o.message);
              }
            }
          },
          danger: true
        }), T.jsx(At, {
          icon: T.jsx(Ae, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-orange",
          label: L("labelClearCache"),
          onClick: async () => {
            var e;
            var a;
            let i = false;
            try {
              if (!(await h(L("msgClearCacheConfirm")))) {
                return;
              }
              U("clear-cache", 1800000);
              i = true;
              let r = 0;
              let d = false;
              let g = 0;
              const p = [/^_cache_/, /^_temp_/, /^_preview_/, /^tmp_/, /^nuojiji_draft_/, /^temp_/, /^_test/, /^_health_check/, /^_refresh_test/, /^pwa_/, /^default_user_placeholder/];
              for (let e = localStorage.length - 1; e >= 0; e--) {
                const t = localStorage.key(e);
                if (t && p.some(e => e.test ? e.test(t) : e === t)) {
                  localStorage.removeItem(t);
                  r++;
                }
              }
              for (let e = localStorage.length - 1; e >= 0; e--) {
                const t = localStorage.key(e);
                if (t && (t.startsWith("calendar_") || t.startsWith("nuojiji_") || t.startsWith("chat_") || t.startsWith("msg_"))) {
                  const e = localStorage.getItem(t);
                  if (e && (e.startsWith("{") || e.startsWith("["))) {
                    try {
                      JSON.parse(e);
                    } catch {
                      localStorage.removeItem(t);
                      r++;
                    }
                  }
                }
              }
              const u = () => {
                const e = "__nuojiji_quota_probe__";
                try {
                  localStorage.setItem(e, "1");
                  localStorage.removeItem(e);
                  return false;
                } catch {
                  return true;
                }
              };
              const b = e => !e || !!Oc.includes(e) || !!Hc(e) || !!ft.some(t => typeof t == "string" ? e === t : t.test(e));
              if (u()) {
                const e = [];
                for (let t = 0; t < localStorage.length; t++) {
                  const a = localStorage.key(t);
                  if (!a || b(a)) {
                    continue;
                  }
                  const i = localStorage.getItem(a);
                  e.push({
                    key: a,
                    size: a.length + (i ? i.length : 0)
                  });
                }
                e.sort((e, t) => t.size - e.size);
                for (const {
                  key: t
                } of e) {
                  try {
                    localStorage.removeItem(t);
                    r++;
                  } catch {}
                  if (!u()) {
                    break;
                  }
                }
              }
              const x = await A();
              const y = Object.keys(x);
              const {
                removeItem: f
              } = await t(async () => {
                const {
                  removeItem: e
                } = await import("./native-pet-CTNtZgMA.js").then(e => e.cw);
                return {
                  removeItem: e
                };
              }, __vite__mapDeps([0, 1, 2, 3, 4, 5]));
              for (const e of y) {
                if (p.some(t => t.test ? t.test(e) : t === e)) {
                  await f(e);
                  r++;
                }
              }
              const v = y.filter(e => /^nuojiji_message_history_/.test(e));
              if (v.length > 0 && (await m.messages.count()) > 0) {
                for (const e of v) {
                  await f(e);
                  r++;
                }
              }
              const w = await m.table("characters").toArray();
              const S = await m.table("users").toArray();
              if (w.length === 0 || S.length === 0) {
                console.warn(`[ClearCache] 角色(${w.length})或用戶(${S.length})讀取為空,可能為暫態連線丟失,中止孤兒清理以保護數據`);
                c(K("clearCacheAbortedEmpty", "為保護資料安全已中止清理：角色或用戶清單讀取為空（可能是資料庫連線暫時異常）。請稍後再試。"));
                return;
              }
              const j = new Set(w.map(e => String(e.id)));
              const k = new Set(S.flatMap(e => [String(e.uid), String(e.id)].filter(Boolean)));
              for (const e of S) {
                const t = e.uid || e.id;
                if (t) {
                  l(t).forEach(e => {
                    if (e.id) {
                      j.add(String(e.id));
                    }
                  });
                }
              }
              const C = await m.table("messages").filter(e => !j.has(String(e.characterId))).primaryKeys();
              if (C.length > 0) {
                await m.table("messages").bulkDelete(C);
                r += C.length;
                console.log(`[ClearCache] 孤立 messages: ${C.length}`);
              }
              try {
                const e = (await m.table("messages").toArray()).filter(e => {
                  try {
                    if (typeof e.content == "string" && e.content.startsWith("[")) {
                      JSON.parse(e.content);
                    }
                    return false;
                  } catch {
                    return true;
                  }
                }).map(e => e._id);
                if (e.length > 0) {
                  await m.table("messages").bulkDelete(e);
                  r += e.length;
                  console.log(`[ClearCache] 損壞 messages: ${e.length}`);
                }
              } catch (o) {
                console.warn("[ClearCache] messages 修復跳過:", o);
              }
              const _ = (await m.table("chatSettings").toArray()).filter(e => !j.has(String(e.characterId))).map(e => [e.userId, e.characterId]);
              if (_.length > 0) {
                await m.table("chatSettings").bulkDelete(_);
                r += _.length;
                console.log(`[ClearCache] 孤立 chatSettings: ${_.length}`);
              }
              const P = (await m.table("memory").toArray()).filter(e => !j.has(String(e.characterId))).map(e => [e.userId, e.characterId]);
              if (P.length > 0) {
                await m.table("memory").bulkDelete(P);
                r += P.length;
                console.log(`[ClearCache] 孤立 memory: ${P.length}`);
              }
              const $ = (await m.table("groupSettings").toArray()).filter(e => !j.has(String(e.groupId))).map(e => [e.userId, e.groupId]);
              if ($.length > 0) {
                await m.table("groupSettings").bulkDelete($);
                r += $.length;
                console.log(`[ClearCache] 孤立 groupSettings: ${$.length}`);
              }
              for (let e = localStorage.length - 1; e >= 0; e--) {
                const t = localStorage.key(e);
                if (!t) {
                  continue;
                }
                const a = t.match(/^group_settings_(.+?)_(.+)$/);
                if (a && !j.has(a[2])) {
                  localStorage.removeItem(t);
                  r++;
                }
              }
              const z = (await m.table("globalSettings").toArray()).filter(e => {
                var t;
                const a = (t = e.key) == null ? undefined : t.match(/^group_last_summarized_.+?_(.+)$/);
                return a && !j.has(a[1]);
              }).map(e => e.key);
              if (z.length > 0) {
                await m.table("globalSettings").bulkDelete(z);
                r += z.length;
                console.log(`[ClearCache] 孤立群聊追蹤: ${z.length}`);
              }
              const E = await m.table("callLogs").filter(e => !j.has(String(e.characterId))).primaryKeys();
              if (E.length > 0) {
                await m.table("callLogs").bulkDelete(E);
                r += E.length;
                console.log(`[ClearCache] 孤立 callLogs: ${E.length}`);
              }
              const B = await m.table("roleStickers").filter(e => String(e.characterId) !== "common" && !j.has(String(e.characterId))).primaryKeys();
              if (B.length > 0) {
                await m.table("roleStickers").bulkDelete(B);
                r += B.length;
                console.log(`[ClearCache] 孤立 roleStickers: ${B.length}`);
              }
              const T = [/^nuojiji_user_stickers(?:_.+)?$/, /^nuojiji_role_stickers(?:_.+)?$/];
              const D = e => {
                const t = String(e || "").toLowerCase();
                return !!t && !!t.includes("sticker") && !t.includes("categorie");
              };
              const F = e => {
                if (!Array.isArray(e) || e.length === 0) {
                  return false;
                }
                const t = e.slice(0, Math.min(8, e.length));
                let a = 0;
                for (const i of t) {
                  if (!i || typeof i != "object") {
                    continue;
                  }
                  const e = typeof i.url == "string" ? i.url : "";
                  if ((e.startsWith("data:image/") || /^https?:\/\//.test(e)) && (typeof i.meaning == "string" || typeof i.id == "string" || typeof i.id == "number")) {
                    a++;
                  }
                }
                return a >= Math.ceil(t.length * 0.6);
              };
              for (let e = localStorage.length - 1; e >= 0; e--) {
                const t = localStorage.key(e);
                if (t) {
                  if (T.some(e => e.test(t))) {
                    localStorage.removeItem(t);
                    r++;
                    g++;
                  } else if (D(t)) {
                    const e = localStorage.getItem(t);
                    if (!e || e.length < 8) {
                      continue;
                    }
                    try {
                      const a = JSON.parse(e);
                      if (F(a)) {
                        localStorage.removeItem(t);
                        r++;
                        g++;
                        console.log(`[ClearCache] localStorage 貼圖殘留(變體鍵): ${t}`);
                      }
                    } catch (n) {}
                  }
                }
              }
              const R = y.filter(e => T.some(t => t.test(e)) || D(e) && F(x[e]));
              for (const e of R) {
                await f(e);
                r++;
                g++;
              }
              const N = await m.table("globalSettings").filter(e => {
                const t = String((e == null ? undefined : e.key) || "");
                return T.some(e => e.test(t)) || D(t) && F(e == null ? undefined : e.value);
              }).primaryKeys();
              if (N.length > 0) {
                await m.table("globalSettings").bulkDelete(N);
                r += N.length;
                g += N.length;
                console.log(`[ClearCache] globalSettings 舊貼圖殘留: ${N.length}`);
              }
              const M = await s.get("nuojiji_sticker_categories");
              const G = new Set((Array.isArray(M) ? M : []).map(e => String(e).trim()).filter(Boolean));
              const O = await m.table("stickers").filter(e => {
                if (typeof (e == null ? undefined : e.url) != "string" || !e.url.trim()) {
                  return true;
                }
                const t = typeof (e == null ? undefined : e.category) == "string" ? e.category.trim() : "";
                return !!t && G.size !== 0 && !G.has(t);
              }).primaryKeys();
              if (O.length > 0) {
                await m.table("stickers").bulkDelete(O);
                r += O.length;
                g += O.length;
                console.log(`[ClearCache] 表情包殘留 stickers: ${O.length}`);
              }
              const H = await m.table("roleStickers").filter(e => typeof (e == null ? undefined : e.url) != "string" || !e.url.trim()).primaryKeys();
              if (H.length > 0) {
                await m.table("roleStickers").bulkDelete(H);
                r += H.length;
                g += H.length;
                console.log(`[ClearCache] 表情包殘留 roleStickers: ${H.length}`);
              }
              if (g > 0) {
                console.log(`[ClearCache] 已刪除表情包殘留記錄: ${g}`);
              }
              const W = await m.table("userPosts").filter(e => !k.has(String(e.userId))).primaryKeys();
              if (W.length > 0) {
                await m.table("userPosts").bulkDelete(W);
                r += W.length;
                console.log(`[ClearCache] 孤立 userPosts (userId): ${W.length}`);
              }
              const J = await m.table("userPosts").filter(e => e.isCharacterPost && e.charUserId && !j.has(String(e.charUserId))).primaryKeys();
              if (J.length > 0) {
                await m.table("userPosts").bulkDelete(J);
                r += J.length;
                console.log(`[ClearCache] 孤立角色朋友圈: ${J.length}`);
              }
              const V = await m.table("userPosts").toArray();
              for (const t of V) {
                let i = false;
                const o = {};
                if ((e = t.likes) == null ? undefined : e.some(e => e.userId && !j.has(String(e.userId)) && !k.has(String(e.userId)) && String(e.userId) !== "me")) {
                  o.likes = t.likes.filter(e => !e.userId || j.has(String(e.userId)) || k.has(String(e.userId)) || String(e.userId) === "me");
                  i = true;
                }
                if ((a = t.comments) == null ? undefined : a.some(e => e.userId && !j.has(String(e.userId)) && !k.has(String(e.userId)) && String(e.userId) !== "me")) {
                  o.comments = t.comments.filter(e => !e.userId || j.has(String(e.userId)) || k.has(String(e.userId)) || String(e.userId) === "me");
                  i = true;
                }
                if (i) {
                  await m.table("userPosts").update(t._id, o);
                  r++;
                }
              }
              const q = await m.table("tmStories").filter(e => !j.has(String(e.characterId))).primaryKeys();
              if (q.length > 0) {
                await m.table("tmStories").bulkDelete(q);
                r += q.length;
                console.log(`[ClearCache] 孤立 tmStories: ${q.length}`);
              }
              try {
                const e = ["calendar_events_character", "calendar_todos_character"];
                for (const t of e) {
                  const e = localStorage.getItem(t);
                  if (!e) {
                    continue;
                  }
                  const a = JSON.parse(e);
                  const i = a.filter(e => !e.characterId || j.has(String(e.characterId)));
                  if (i.length !== a.length) {
                    const e = a.length - i.length;
                    localStorage.setItem(t, JSON.stringify(i));
                    r += e;
                    console.log(`[ClearCache] 孤立行程/代辦 (${t}): ${e}`);
                  }
                }
              } catch (o) {
                console.warn("[ClearCache] 清理行程/代辦失敗:", o);
              }
              try {
                const e = new Set();
                const t = t => {
                  if (t != null) {
                    e.add(String(t));
                  }
                };
                const a = () => new Promise(e => setTimeout(e, 16));
                await m.table("messages").each(e => {
                  t(e.imageRef);
                  t(e.audioRef);
                });
                await m.table("userPosts").each(e => {
                  if (Array.isArray(e.imageRefs)) {
                    e.imageRefs.forEach(t);
                  }
                });
                if (m.tables.some(e => e.name === "flashMoments")) {
                  await m.table("flashMoments").each(e => t(e.imageRef));
                }
                if (m.tables.some(e => e.name === "favorites")) {
                  await m.table("favorites").each(e => {
                    var a;
                    var i;
                    t((a = e == null ? undefined : e.msg) == null ? undefined : a.imageRef);
                    t((i = e == null ? undefined : e.msg) == null ? undefined : i.audioRef);
                  });
                }
                if (m.tables.some(e => e.name === "chikanPhoneSkins")) {
                  await m.table("chikanPhoneSkins").each(e => t(e.wallpaperRef));
                }
                if (m.tables.some(e => e.name === "goingOutAreas")) {
                  await m.table("goingOutAreas").each(e => {
                    t(e.bgImageRef);
                    t(e.customBgRef);
                    t(e.dialogBgRef);
                    t(e.choiceBgRef);
                    t(e.speakerBgRef);
                    t(e.playerAvatarRef);
                    if (Array.isArray(e.locations)) {
                      for (const a of e.locations) {
                        t(a == null ? undefined : a.customBgRef);
                      }
                    }
                  });
                }
                const i = Date.now() - 300000;
                const o = [];
                let n = 0;
                await m.table("imageStore").each(t => {
                  const a = t.createdAt || t.timestamp || 0;
                  if (!e.has(String(t.id)) && a > 0 && a < i) {
                    o.push(t.id);
                    const e = t.data;
                    n += typeof e == "string" ? e.length : 0;
                  }
                });
                if (o.length > 0) {
                  const e = 200;
                  for (let t = 0; t < o.length; t += e) {
                    await I.bulkDelete(o.slice(t, t + e));
                    if (t + e < o.length) {
                      await a();
                    }
                  }
                  r += o.length;
                  console.log(`[ClearCache] 孤立 imageStore: ${o.length} 筆 (${(n / 1024 / 1024).toFixed(1)} MB)`);
                }
              } catch (o) {
                console.warn("[ClearCache] imageStore 孤兒清理失敗:", o);
              }
              if ("caches" in window) {
                const e = await caches.keys();
                for (const t of e) {
                  await caches.delete(t);
                }
                d = e.length > 0;
              }
              if (navigator.storage && navigator.storage.estimate) {
                const {
                  usage: e,
                  quota: t
                } = await navigator.storage.estimate();
                ic(a => ({
                  ...a,
                  usage: (e / 1048576).toFixed(2),
                  quota: (t / 1048576).toFixed(2),
                  percent: (e / t * 100).toFixed(2)
                }));
              }
              c(r !== 0 || d ? L("msgClearCacheSuccess", {
                count: r
              }) + (d ? L("msgClearCachePwa") : "") : L("msgClearCacheNone"));
            } catch (o) {
              console.error("[Clear Cache] Failed:", o);
              const e = String((o == null ? undefined : o.message) || o || "");
              if (/connection to indexed database|unknownerror|database connection is closing/i.test(e)) {
                c(L("msgClearCacheConnLost"));
              } else {
                c(L("msgClearCacheFailed") + e);
              }
            } finally {
              if (i) {
                W();
              }
            }
          },
          rightElement: T.jsx("span", {
            style: {
              fontSize: "12px",
              color: "var(--text-secondary)"
            },
            children: L("labelClearCacheShort")
          })
        }), T.jsx(At, {
          icon: T.jsx(Me, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-cyan",
          label: L(rc === "images" ? "labelCompressingImages" : rc === "audio" ? "labelCompressingAudio" : rc === "stickers" ? "labelCompressingStickers" : rc === "posts" ? "labelCompressingPosts" : "labelCompressMedia"),
          onClick: rc ? undefined : async () => {
            var e;
            var t;
            var a;
            var i;
            var o;
            var n;
            var s;
            let l = false;
            try {
              const r = e => {
                var t;
                var a;
                var i;
                var o;
                var n;
                var s;
                var l;
                const r = [e == null ? undefined : e.imageSummary, (t = e == null ? undefined : e.specialData) == null ? undefined : t.imageSummary, e == null ? undefined : e.imageGenPrompt, (a = e == null ? undefined : e.specialData) == null ? undefined : a.imageGenPrompt, (i = e == null ? undefined : e.imageEditData) == null ? undefined : i.editPrompt, (o = e == null ? undefined : e.imageEditData) == null ? undefined : o.originalContent, (n = e == null ? undefined : e.giftData) == null ? undefined : n.prompt, (s = e == null ? undefined : e.giftData) == null ? undefined : s.description, (l = e == null ? undefined : e.specialData) == null ? undefined : l.prompt];
                for (const c of r) {
                  if (typeof c != "string") {
                    continue;
                  }
                  const e = c.trim();
                  if (e) {
                    if (e.length > 220) {
                      return e.slice(0, 220) + "...";
                    } else {
                      return e;
                    }
                  }
                }
                return "图片已清理（无可用描述）";
              };
              const d = e => typeof e == "string" && e.startsWith("data:");
              const g = await h(L("msgCompressAudioConfirm"));
              const p = await h(L("msgCompressDeleteImagesConfirm"));
              const u = !p && (await h(L("msgCompressImagesConfirm")));
              const b = await h(L("msgCompressStickersConfirm"));
              const x = await h(L("msgCompressStickerCollectionsConfirm"));
              const y = await h(L("msgCompressPostsConfirm"));
              if (!g && !p && !u && !b && !x && !y) {
                return;
              }
              U("compress-media", 2700000);
              l = true;
              let f = 0;
              let v = 0;
              let w = 0;
              let S = 0;
              let j = 0;
              let k = 0;
              let C = 0;
              if (g) {
                cc("audio");
                f = await m.ttsAudio.count();
                if (f > 0) {
                  await m.ttsAudio.clear();
                  console.log(`[CompressMedia] 已清除 ${f} 條 TTS 音頻快取`);
                }
              }
              if (p || u || b) {
                cc("images");
                const l = 50;
                const c = m.table("messages");
                const g = await c.count();
                for (let h = 0; h < g; h += l) {
                  const x = await c.offset(h).limit(l).toArray();
                  const y = [];
                  for (const l of x) {
                    const c = {};
                    let g = 0;
                    let h = false;
                    if (b) {
                      if (d(l.sticker)) {
                        const e = l.stickerMeaning || l.text || "[貼圖]";
                        c.sticker = "";
                        if (!l.stickerMeaning) {
                          c.stickerMeaning = e;
                        }
                        j++;
                      }
                      if (((e = l.specialData) == null ? undefined : e.sticker) && d(l.specialData.sticker)) {
                        const e = {
                          ...l.specialData
                        };
                        delete e.sticker;
                        c.specialData = {
                          ...(c.specialData || l.specialData),
                          ...e
                        };
                        j++;
                      }
                    }
                    if (p) {
                      if (typeof l.image == "string" && l.image) {
                        c.image = "";
                        S++;
                        h = true;
                      }
                      if (typeof l.imageThumbnail == "string" && l.imageThumbnail) {
                        c.imageThumbnail = "";
                        S++;
                        h = true;
                      }
                      if (((t = l.specialData) == null ? undefined : t.image) && typeof l.specialData.image == "string") {
                        const e = {
                          ...(c.specialData || l.specialData)
                        };
                        delete e.image;
                        c.specialData = e;
                        S++;
                        h = true;
                      }
                      if (((a = l.giftData) == null ? undefined : a.image) && typeof l.giftData.image == "string") {
                        const e = {
                          ...l.giftData
                        };
                        delete e.image;
                        c.giftData = e;
                        S++;
                        h = true;
                      }
                      if (((i = l.imageEditData) == null ? undefined : i.originalThumbnail) && typeof l.imageEditData.originalThumbnail == "string") {
                        const e = {
                          ...l.imageEditData
                        };
                        delete e.originalThumbnail;
                        c.imageEditData = e;
                        S++;
                        h = true;
                      }
                      if (h) {
                        if (typeof l.imageSummary != "string" || !l.imageSummary.trim()) {
                          c.imageSummary = r(l);
                        }
                      }
                    } else if (u) {
                      if (l.image && typeof l.image == "string" && l.image.startsWith("data:image/")) {
                        const e = await St(l.image, 1280, 0.55);
                        if (e.saved > 0) {
                          c.image = e.compressed;
                          g += e.saved;
                        }
                      }
                      if (l.imageThumbnail && typeof l.imageThumbnail == "string" && l.imageThumbnail.startsWith("data:image/")) {
                        const e = await St(l.imageThumbnail, 1280, 0.55);
                        if (e.saved > 0) {
                          c.imageThumbnail = e.compressed;
                          g += e.saved;
                        }
                      }
                      if (((o = l.specialData) == null ? undefined : o.image) && typeof l.specialData.image == "string" && l.specialData.image.startsWith("data:image/")) {
                        const e = await St(l.specialData.image, 1280, 0.55);
                        if (e.saved > 0) {
                          c.specialData = {
                            ...(c.specialData || l.specialData),
                            image: e.compressed
                          };
                          g += e.saved;
                        }
                      }
                      if (((n = l.giftData) == null ? undefined : n.image) && typeof l.giftData.image == "string" && l.giftData.image.startsWith("data:image/")) {
                        const e = await St(l.giftData.image, 1280, 0.55);
                        if (e.saved > 0) {
                          c.giftData = {
                            ...l.giftData,
                            image: e.compressed
                          };
                          g += e.saved;
                        }
                      }
                      if (((s = l.imageEditData) == null ? undefined : s.originalThumbnail) && typeof l.imageEditData.originalThumbnail == "string" && l.imageEditData.originalThumbnail.startsWith("data:image/")) {
                        const e = await St(l.imageEditData.originalThumbnail, 1280, 0.55);
                        if (e.saved > 0) {
                          c.imageEditData = {
                            ...l.imageEditData,
                            originalThumbnail: e.compressed
                          };
                          g += e.saved;
                        }
                      }
                    }
                    if (Object.keys(c).length > 0) {
                      y.push({
                        _id: l._id,
                        changes: c
                      });
                      w += g;
                      v++;
                    }
                  }
                  if (y.length > 0) {
                    await m.transaction("rw", m.messages, async () => {
                      for (const {
                        _id: e,
                        changes: t
                      } of y) {
                        await m.messages.update(e, t);
                      }
                    });
                  }
                  if (h + l < g) {
                    await new Promise(e => setTimeout(e, 0));
                  }
                }
              }
              if (x) {
                cc("stickers");
                const e = async (e, t) => {
                  const a = await e.toArray();
                  let i = 0;
                  for (let o = 0; o < a.length; o += 20) {
                    const t = a.slice(o, o + 20);
                    const n = [];
                    for (const e of t) {
                      if (!d(e.url)) {
                        continue;
                      }
                      const t = await St(e.url, 400, 0.6);
                      if (t.saved > 0) {
                        n.push({
                          _id: e._id,
                          url: t.compressed
                        });
                        w += t.saved;
                        i++;
                      }
                    }
                    if (n.length > 0) {
                      await m.transaction("rw", e, async () => {
                        for (const {
                          _id: t,
                          url: a
                        } of n) {
                          await e.update(t, {
                            url: a
                          });
                        }
                      });
                    }
                  }
                  console.log(`[CompressMedia] ${t}: 壓縮了 ${i} 張表情包`);
                  return i;
                };
                k += await e(m.stickers, "stickers");
                k += await e(m.roleStickers, "roleStickers");
              }
              if (y) {
                cc("posts");
                const e = m.table("userPosts");
                const t = await e.toArray();
                const a = 20;
                for (let i = 0; i < t.length; i += a) {
                  const o = t.slice(i, i + a);
                  const n = [];
                  for (const e of o) {
                    if (!Array.isArray(e.images) || e.images.length === 0) {
                      continue;
                    }
                    let t = false;
                    const a = await Promise.all(e.images.map(async e => {
                      if (!d(e)) {
                        return e;
                      }
                      const a = await St(e, 1280, 0.55);
                      if (a.saved > 0) {
                        w += a.saved;
                        t = true;
                        return a.compressed;
                      } else {
                        return e;
                      }
                    }));
                    if (t) {
                      n.push({
                        _id: e._id,
                        images: a
                      });
                      C++;
                    }
                  }
                  if (n.length > 0) {
                    await m.transaction("rw", e, async () => {
                      for (const {
                        _id: t,
                        images: a
                      } of n) {
                        await e.update(t, {
                          images: a
                        });
                      }
                    });
                  }
                }
                console.log(`[CompressMedia] userPosts: 壓縮了 ${C} 條動態的圖片`);
              }
              if (navigator.storage && navigator.storage.estimate) {
                const {
                  usage: e,
                  quota: t
                } = await navigator.storage.estimate();
                ic(a => ({
                  ...a,
                  usage: (e / 1048576).toFixed(2),
                  quota: (t / 1048576).toFixed(2),
                  percent: (e / t * 100).toFixed(2)
                }));
              }
              cc("");
              const _ = (w / 1048576).toFixed(1);
              const A = ["✅ " + L("msgMediaCleanDone")];
              if (f > 0) {
                A.push(L("msgMediaCleanAudio", {
                  count: f
                }));
              }
              if (S > 0) {
                A.push(L("msgMediaCleanDeletedImages", {
                  count: S,
                  msgs: v
                }));
              }
              if (u && v > 0) {
                A.push(L("msgMediaCleanCompressedImages", {
                  count: v,
                  savedMB: _
                }));
              }
              if (j > 0) {
                A.push(L("msgMediaCleanStickers", {
                  count: j
                }));
              }
              if (k > 0) {
                A.push(L("msgMediaCleanStickerCollections", {
                  count: k
                }));
              }
              if (C > 0) {
                A.push(L("msgMediaCleanPosts", {
                  count: C
                }));
              }
              if (w > 0) {
                A.push(L("msgMediaCleanSaved", {
                  savedMB: _
                }));
              }
              if (A.length === 1) {
                A.push(L("msgMediaCleanNothingFound"));
              }
              await c(A.join("\n"));
            } catch (r) {
              console.error("[CompressMedia] Failed:", r);
              cc("");
              await c(L("msgCompressMediaFailed") + r.message);
            } finally {
              if (l) {
                W();
              }
            }
          }
        })]
      }), T.jsxs(jt, {
        title: L("sectionStorage"),
        children: [T.jsx(kt, {
          icon: T.jsx(pe, {
            size: 20,
            color: "white"
          }),
          iconBg: ac.persisted ? "bg-green" : "bg-orange",
          label: L("labelPersisted"),
          onClick: ac.persisted ? undefined : async () => {
            if (ac.persisted) {
              return;
            }
            if (e()) {
              ic(e => ({
                ...e,
                persisted: true
              }));
              return;
            }
            const t = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            const a = window.matchMedia("(display-mode: standalone)").matches;
            if (navigator.storage && navigator.storage.persist) {
              try {
                const e = await navigator.storage.persist();
                console.log(`[Storage] Manual persistence request result: ${e}`);
                if (e) {
                  ic(e => ({
                    ...e,
                    persisted: true
                  }));
                  c(L("msgPersistGranted"));
                } else {
                  if (navigator.permissions && navigator.permissions.query) {
                    try {
                      const e = {
                        name: "persistent-storage"
                      };
                      const t = await navigator.permissions.query(e);
                      console.log(`[Storage] Permission status: ${t.state}`);
                      if (t.state === "granted") {
                        ic(e => ({
                          ...e,
                          persisted: true
                        }));
                        c(L("msgPersistGranted"));
                        return;
                      }
                    } catch (i) {
                      console.warn("[Storage] Permission query failed", i);
                    }
                  }
                  c(L(t && a ? "msgPersistDeniedIOS" : "msgPersistDenied"));
                }
              } catch (i) {
                console.error("Persistence request failed:", i);
                c("Request failed: " + i.message);
              }
            } else {
              c("Your browser does not support persistent storage API.");
            }
          },
          children: T.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "4px"
            },
            children: [T.jsx("span", {
              style: {
                fontSize: "15px",
                fontWeight: 600,
                color: ac.persisted ? "#34c759" : "#ff9500"
              },
              children: ac.persisted ? L("statusProtected") : L("statusTemporary")
            }), !ac.persisted && T.jsx("span", {
              className: "settings-item-chevron",
              children: "›"
            })]
          })
        }), !ac.persisted && T.jsx("div", {
          style: {
            padding: "0 16px 12px",
            fontSize: "12px",
            color: "#ff9500",
            lineHeight: "1.4"
          },
          children: L("msgClickToPersistHint")
        }), T.jsxs("div", {
          style: {
            padding: "12px 16px"
          },
          children: [T.jsxs("div", {
            style: {
              fontSize: "13px",
              color: "var(--text-secondary)",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between"
            },
            children: [T.jsxs("span", {
              children: [L("labelUsedSpace"), " (", ac.percent, "%)"]
            }), T.jsxs("span", {
              children: [ac.usage, " MB / ", ac.quota, " MB"]
            })]
          }), T.jsx("div", {
            style: {
              width: "100%",
              height: "8px",
              background: "rgba(120, 120, 128, 0.16)",
              borderRadius: "4px",
              overflow: "hidden"
            },
            children: T.jsx("div", {
              style: {
                width: `${ac.percent}%`,
                height: "100%",
                background: "linear-gradient(90deg, #007AFF, #5856D6)",
                borderRadius: "4px",
                transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
              }
            })
          }), !ac.persisted && T.jsxs("div", {
            style: {
              marginTop: "14px",
              padding: "10px",
              background: "rgba(255, 149, 0, 0.1)",
              borderRadius: "10px",
              border: "0.5px solid rgba(255, 149, 0, 0.2)"
            },
            children: [T.jsx("p", {
              style: {
                fontSize: "12px",
                color: "#ff9500",
                margin: 0,
                lineHeight: "1.5",
                fontWeight: 500,
                marginBottom: "8px"
              },
              children: L("msgStorageWarning")
            }), T.jsxs("button", {
              onClick: e => {
                e.preventDefault();
                e.stopPropagation();
                dd();
              },
              style: {
                width: "100%",
                padding: "8px",
                background: "rgba(255, 149, 0, 0.15)",
                border: "1px solid rgba(255, 149, 0, 0.3)",
                borderRadius: "6px",
                color: "#ff9500",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px"
              },
              children: [T.jsx(Me, {
                size: 14
              }), L("labelExportBackup")]
            })]
          })]
        }), pc ? T.jsx("div", {
          style: {
            padding: "20px 16px",
            textAlign: "center",
            color: "var(--text-secondary)",
            fontSize: "13px"
          },
          children: "⏳ 分析存儲數據中..."
        }) : dc ? dc && (() => {
          const e = dc.filter(e => e.size > 0).sort((e, t) => t.size - e.size);
          const t = e.reduce((e, t) => e + t.size, 0);
          if (t === 0) {
            return null;
          }
          const a = Number(ac.usage || 0) * 1024 * 1024;
          const i = a > 0;
          const o = i ? a / t : 1;
          const n = i ? a : t;
          const s = Math.PI * 2 * 52;
          let l = 0;
          return T.jsxs("div", {
            style: {
              padding: "4px 20px 12px"
            },
            children: [T.jsx("div", {
              style: {
                display: "flex",
                justifyContent: "center"
              },
              children: T.jsxs("svg", {
                width: "160",
                height: "160",
                viewBox: "0 0 140 140",
                children: [T.jsx("circle", {
                  cx: 70,
                  cy: 70,
                  r: 52,
                  fill: "none",
                  stroke: "rgba(120,120,128,0.08)",
                  strokeWidth: 22
                }), e.map(e => {
                  const a = e.size / t * s;
                  const i = l;
                  l += a;
                  return T.jsx("circle", {
                    cx: 70,
                    cy: 70,
                    r: 52,
                    fill: "none",
                    stroke: e.color,
                    strokeWidth: 22,
                    strokeDasharray: `${a} ${s - a}`,
                    strokeDashoffset: -i,
                    transform: "rotate(-90 70 70)"
                  }, e.id);
                }), T.jsx("text", {
                  x: 70,
                  y: 66,
                  textAnchor: "middle",
                  fontSize: "14",
                  fontWeight: "700",
                  fill: "var(--text-primary)",
                  children: (r = Math.max(0, Math.round(n)), r < 1024 ? `${r} B` : r < 1048576 ? `${(r / 1024).toFixed(1)} KB` : `${(r / 1048576).toFixed(2)} MB`)
                }), T.jsx("text", {
                  x: 70,
                  y: 82,
                  textAnchor: "middle",
                  fontSize: "10",
                  fill: "var(--text-secondary)",
                  children: i ? "校準後數據量" : "估算數據量"
                })]
              })
            }), T.jsx("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "6px 16px",
                marginTop: "4px"
              },
              children: e.map(e => T.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12px",
                  padding: "3px 0"
                },
                children: [T.jsx("span", {
                  style: {
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: e.color,
                    flexShrink: 0
                  }
                }), T.jsx("span", {
                  style: {
                    color: "var(--text-secondary)",
                    flex: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  children: e.label
                }), T.jsxs("span", {
                  style: {
                    color: "var(--text-primary)",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    fontSize: "11px"
                  },
                  children: [(e.size / t * 100).toFixed(1), "%"]
                })]
              }, e.id))
            }), i && T.jsxs("div", {
              style: {
                marginTop: "4px",
                textAlign: "center",
                color: "var(--text-secondary)",
                fontSize: "11px"
              },
              children: ["已按實際已用空間校準（倍率 ", o.toFixed(2), "x）"]
            }), T.jsx("div", {
              style: {
                marginTop: "6px",
                textAlign: "center"
              },
              children: T.jsx("button", {
                onClick: () => {
                  gc(null);
                  Rc();
                },
                style: {
                  background: "none",
                  border: "none",
                  color: "var(--text-secondary)",
                  fontSize: "11px",
                  cursor: "pointer",
                  padding: "4px 8px",
                  opacity: 0.7
                },
                children: "↻ 重新分析"
              })
            })]
          });
          var r;
        })() : T.jsx("div", {
          style: {
            padding: "16px",
            textAlign: "center"
          },
          children: T.jsxs("button", {
            onClick: Rc,
            style: {
              background: "rgba(120,120,128,0.08)",
              border: "none",
              borderRadius: "8px",
              color: "var(--text-secondary)",
              fontSize: "13px",
              cursor: "pointer",
              padding: "8px 16px"
            },
            children: [T.jsx(Ae, {
              size: 14,
              style: {
                verticalAlign: "middle",
                marginRight: "4px"
              }
            }), "分析存儲數據分佈"]
          })
        })]
      }), T.jsxs(jt, {
        title: L("sectionAppUpdate"),
        children: [T.jsx(It, {
          icon: T.jsx(be, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-blue",
          label: L("labelManualUpdate"),
          onClick: async () => {
            if (!oc) {
              if ("serviceWorker" in navigator) {
                nc(true);
                lc(L("statusCheckingUpdate"));
                try {
                  if (!(await Q())) {
                    lc(L("statusUpToDate"));
                    await c(L("msgNoUpdateFound"));
                    return;
                  }
                  if (await Z()) {
                    lc(L("statusApplyingUpdate"));
                    await c(L("msgUpdateApplied"));
                    setTimeout(() => {
                      window.location.reload();
                    }, 2200);
                    return;
                  }
                  lc("");
                  await c(L("msgUpdateReadyRetry"));
                } catch (e) {
                  console.error("[PWA] 手動更新失敗:", e);
                  lc("");
                  c(`${L("msgUpdateFailed")}${(e == null ? undefined : e.message) || ""}`);
                } finally {
                  nc(false);
                  setTimeout(() => lc(""), 2800);
                }
              } else {
                await c(L("msgUpdateUnsupported"));
              }
            }
          },
          buttonText: L(oc ? "statusCheckingUpdate" : "btnUpdateNow")
        }), sc && T.jsx("div", {
          style: {
            padding: "0 16px 12px 54px",
            fontSize: "12px",
            color: "var(--text-secondary)",
            lineHeight: "1.4"
          },
          children: sc
        })]
      }), T.jsxs(jt, {
        title: L("sectionContentReport"),
        children: [T.jsx(At, {
          icon: T.jsx(Ie, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-red",
          label: L("labelContentReport"),
          onClick: () => Ht(true)
        }), T.jsx("div", {
          style: {
            padding: "0 16px 12px 54px",
            fontSize: "12px",
            color: "var(--text-secondary)",
            lineHeight: "1.5"
          },
          children: L("contentReportHint")
        })]
      }), T.jsxs(jt, {
        title: L("sectionLegal"),
        children: [T.jsx(At, {
          icon: T.jsx(Ce, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-gray",
          label: L("labelPrivacyPolicy"),
          onClick: () => {
            try {
              const e = `${window.location.origin}/privacy.html`;
              window.open(e, "_blank", "noopener");
            } catch (e) {}
          }
        }), T.jsx(At, {
          icon: T.jsx(Ce, {
            size: 20,
            color: "white"
          }),
          iconBg: "bg-gray",
          label: L("labelTermsOfService"),
          onClick: () => {
            try {
              const e = `${window.location.origin}/terms.html`;
              window.open(e, "_blank", "noopener");
            } catch (e) {}
          }
        })]
      }), T.jsxs("div", {
        style: {
          marginTop: "20px",
          marginBottom: "40px",
          textAlign: "center",
          color: "var(--text-secondary)",
          fontSize: "13px",
          opacity: 0.6
        },
        children: ["v", O, " (", H, ")"]
      })]
    }), Ot && F.createPortal(T.jsx("div", {
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: "var(--kb-h, 0px)",
        background: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100000,
        padding: "calc(16px + env(safe-area-inset-top, 0px)) 16px calc(16px + env(safe-area-inset-bottom, 0px))",
        boxSizing: "border-box"
      },
      onClick: () => Ht(false),
      children: T.jsxs("div", {
        style: {
          width: "100%",
          maxWidth: "400px",
          maxHeight: "100%",
          background: "var(--bg-primary, #fff)",
          color: "var(--text-primary, #000)",
          borderRadius: "20px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
        },
        onClick: e => e.stopPropagation(),
        children: [T.jsxs("div", {
          style: {
            padding: "18px 20px 14px",
            borderBottom: "0.5px solid var(--border-color, rgba(0,0,0,0.1))",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          },
          children: [T.jsx("h3", {
            style: {
              margin: 0,
              fontSize: "17px",
              fontWeight: 700
            },
            children: L("reportModalTitle")
          }), T.jsx($e, {
            size: 22,
            style: {
              cursor: "pointer",
              opacity: 0.5
            },
            onClick: () => Ht(false)
          })]
        }), T.jsxs("div", {
          style: {
            overflowY: "auto",
            padding: "16px 20px",
            flex: 1
          },
          children: [T.jsx("p", {
            style: {
              margin: "0 0 12px",
              fontSize: "13px",
              lineHeight: 1.6,
              color: "var(--text-secondary)"
            },
            children: L("reportModalDesc")
          }), T.jsx("textarea", {
            style: {
              width: "100%",
              minHeight: "120px",
              borderRadius: "10px",
              border: "1px solid var(--border-color, rgba(0,0,0,0.15))",
              padding: "12px",
              fontSize: "14px",
              fontFamily: "inherit",
              resize: "vertical",
              boxSizing: "border-box",
              background: "var(--bg-secondary, #f7f7f7)",
              color: "inherit"
            },
            placeholder: L("reportModalPlaceholder"),
            value: Ut,
            onChange: e => Wt(e.target.value)
          })]
        }), T.jsxs("div", {
          style: {
            display: "flex",
            borderTop: "0.5px solid var(--border-color, rgba(0,0,0,0.1))"
          },
          children: [T.jsx("button", {
            style: {
              flex: 1,
              padding: "15px",
              border: "none",
              background: "transparent",
              fontSize: "16px",
              color: "var(--text-secondary, #888)",
              cursor: "pointer",
              borderRight: "0.5px solid var(--border-color, rgba(0,0,0,0.1))"
            },
            onClick: () => Ht(false),
            children: L("cancel")
          }), T.jsx("button", {
            style: {
              flex: 1,
              padding: "15px",
              border: "none",
              background: "transparent",
              fontSize: "16px",
              color: "#ff3b30",
              fontWeight: 700,
              cursor: "pointer"
            },
            onClick: () => {
              const e = encodeURIComponent("糯嘰機 内容举报/反馈");
              const t = encodeURIComponent((Ut || "").trim() || "（用户未填写描述）");
              try {
                window.location.href = `mailto:wcl20091007@gmail.com?subject=${e}&body=${t}`;
              } catch (a) {}
              Ht(false);
              Wt("");
            },
            children: L("reportModalSubmit")
          })]
        })]
      })
    }), document.body), T.jsx("input", {
      type: "file",
      ref: bc,
      style: {
        display: "none"
      },
      accept: e() ? undefined : ".json,.gz,.json.gz,application/json,application/gzip,application/x-gzip,application/octet-stream",
      onChange: async e => {
        const t = e.target.files[0];
        if (t) {
          try {
            const e = tt();
            const a = await et(t);
            if (a && !e.gzipDecompress) {
              throw new Error("Browser does not support DecompressionStream");
            }
            const i = await Ze(t, a);
            if (i.version == null) {
              throw new Error(L("importError"));
            }
            Sc({
              __pendingFile: t,
              __isGzip: a,
              __peekMeta: i
            });
            kc(Bc.map(e => e.id));
            _c([]);
            Ic([]);
            vc("import");
            yc(true);
          } catch (a) {
            console.error("[分量导入] 文件读取失败:", a);
            c(L("importError"));
          }
          if (bc.current) {
            bc.current.value = "";
          }
        }
      }
    }), fs && F.createPortal(T.jsx("div", {
      id: "image-gen-settings-modal",
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: "var(--kb-h, 0px)",
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10000,
        padding: "calc(16px + env(safe-area-inset-top, 0px)) 16px calc(16px + env(safe-area-inset-bottom, 0px))",
        boxSizing: "border-box"
      },
      onClick: () => vs(null),
      children: T.jsxs("div", {
        style: {
          width: "100%",
          maxWidth: "400px",
          maxHeight: "100%",
          background: "var(--bg-primary, #fff)",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          color: "var(--text-primary, #000)"
        },
        onClick: e => e.stopPropagation(),
        children: [T.jsxs("div", {
          style: {
            padding: "18px 20px 14px",
            borderBottom: "0.5px solid var(--border-color, rgba(0,0,0,0.1))",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0
          },
          children: [T.jsxs("h3", {
            style: {
              margin: 0,
              fontSize: "18px",
              fontWeight: 700
            },
            children: [fs === "novelai" && L("titleGenSettingsModal").replace("{api}", "NovelAI"), fs === "pollinations" && L("titleGenSettingsModal").replace("{api}", "Pollinations"), fs === "googleimagen" && L("titleGenSettingsModal").replace("{api}", "Google Imagen"), fs === "geminiimage" && L("titleGenSettingsModal").replace("{api}", "Gemini Image"), fs === "grok" && L("titleGenSettingsModal").replace("{api}", "Grok"), fs === "gptimage" && L("titleGenSettingsModal").replace("{api}", "GPT")]
          }), T.jsx($e, {
            size: 22,
            style: {
              cursor: "pointer",
              opacity: 0.5
            },
            onClick: () => vs(null)
          })]
        }), T.jsxs("div", {
          style: {
            overflowY: "auto",
            padding: "16px 20px",
            flex: 1
          },
          children: [fs === "novelai" && T.jsxs(T.Fragment, {
            children: [T.jsx("label", {
              style: Dt,
              children: L("labelNovelAiImageSize")
            }), T.jsxs("select", {
              style: Rt,
              value: Ii,
              onChange: e => Pi(e.target.value),
              children: [T.jsx("option", {
                value: "512x512",
                children: "512x512"
              }), T.jsx("option", {
                value: "512x768",
                children: "512x768"
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
                value: "1216x832",
                children: "1216x832"
              }), T.jsx("option", {
                value: "1024x1024",
                children: "1024x1024"
              }), T.jsx("option", {
                value: "1024x1536",
                children: "1024x1536"
              }), T.jsx("option", {
                value: "1536x1024",
                children: "1536x1024"
              })]
            }), T.jsx("div", {
              style: Nt,
              children: L("hintNovelAiSize")
            }), T.jsx("label", {
              style: Dt,
              children: L("labelSteps")
            }), T.jsx("input", {
              type: "number",
              style: Ft,
              value: Ti,
              onChange: e => Di(Math.max(1, Math.min(50, parseInt(e.target.value) || 1)))
            }), T.jsx("div", {
              style: Nt,
              children: L("hintSteps")
            }), T.jsx("label", {
              style: Dt,
              children: L("labelCfgScale")
            }), T.jsx("input", {
              type: "number",
              style: Ft,
              value: Fi,
              step: "0.5",
              onChange: e => Ri(Math.max(0, Math.min(30, parseFloat(e.target.value) || 0)))
            }), T.jsx("div", {
              style: Nt,
              children: L("hintCfgScale")
            }), T.jsx("label", {
              style: Dt,
              children: L("labelSampler")
            }), T.jsx("select", {
              style: Rt,
              value: Ni,
              onChange: e => Mi(e.target.value),
              children: Et.map(e => T.jsx("option", {
                value: e.id,
                children: e.label
              }, e.id))
            }), T.jsx("label", {
              style: Dt,
              children: L("labelNoiseSchedule")
            }), T.jsx("select", {
              style: Rt,
              value: Hi,
              onChange: e => Ui(e.target.value),
              children: Bt.map(e => T.jsx("option", {
                value: e.id,
                children: e.label
              }, e.id))
            }), T.jsx("label", {
              style: Dt,
              children: L("labelSeed")
            }), T.jsx("input", {
              type: "number",
              style: Ft,
              value: Gi,
              onChange: e => Oi(parseInt(e.target.value) || -1)
            }), T.jsx("div", {
              style: Nt,
              children: L("hintSeed")
            }), T.jsx("label", {
              style: Dt,
              children: L("labelUcPreset")
            }), T.jsx("select", {
              style: Rt,
              value: Wi,
              onChange: e => Li(Number(e.target.value)),
              children: Tt.map(e => T.jsx("option", {
                value: e.id,
                children: e.label
              }, e.id))
            }), T.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "14px 0 6px"
              },
              children: [T.jsx("span", {
                style: {
                  fontWeight: 600,
                  fontSize: "14px"
                },
                children: "SMEA"
              }), T.jsxs("label", {
                className: "toggle-switch",
                children: [T.jsx("input", {
                  type: "checkbox",
                  checked: Ki,
                  onChange: e => Ji(e.target.checked)
                }), T.jsx("span", {
                  className: "slider"
                })]
              })]
            }), T.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "6px 0"
              },
              children: [T.jsx("span", {
                style: {
                  fontWeight: 600,
                  fontSize: "14px"
                },
                children: "SMEA DYN"
              }), T.jsxs("label", {
                className: "toggle-switch",
                children: [T.jsx("input", {
                  type: "checkbox",
                  checked: Vi,
                  onChange: e => qi(e.target.checked)
                }), T.jsx("span", {
                  className: "slider"
                })]
              })]
            }), T.jsx("label", {
              style: Dt,
              children: L("labelCfgRescale")
            }), T.jsx("input", {
              type: "number",
              style: Ft,
              value: Yi,
              step: "0.05",
              min: "0",
              max: "1",
              onChange: e => Xi(Math.max(0, Math.min(1, parseFloat(e.target.value) || 0)))
            }), T.jsx("div", {
              style: Nt,
              children: L("hintCfgRescale")
            }), T.jsx("label", {
              style: Dt,
              children: L("labelUncondScale")
            }), T.jsx("input", {
              type: "number",
              style: Ft,
              value: Qi,
              step: "0.05",
              min: "0",
              max: "1.5",
              onChange: e => Zi(Math.max(0, Math.min(1.5, parseFloat(e.target.value) || 0)))
            }), T.jsx("div", {
              style: Nt,
              children: L("hintUncondScale")
            }), T.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "14px 0 6px"
              },
              children: [T.jsx("span", {
                style: {
                  fontWeight: 600,
                  fontSize: "14px"
                },
                children: "Quality Tags"
              }), T.jsxs("label", {
                className: "toggle-switch",
                children: [T.jsx("input", {
                  type: "checkbox",
                  checked: eo,
                  onChange: e => to(e.target.checked)
                }), T.jsx("span", {
                  className: "slider"
                })]
              })]
            }), T.jsx("div", {
              style: Nt,
              children: L("hintQualityTags")
            }), T.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "14px 0 6px"
              },
              children: [T.jsx("span", {
                style: {
                  fontWeight: 600,
                  fontSize: "14px"
                },
                children: "Variety+"
              }), T.jsxs("label", {
                className: "toggle-switch",
                children: [T.jsx("input", {
                  type: "checkbox",
                  checked: oo,
                  onChange: e => no(e.target.checked)
                }), T.jsx("span", {
                  className: "slider"
                })]
              })]
            }), T.jsx("div", {
              style: Nt,
              children: L("hintVarietyPlus")
            }), T.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "6px 0"
              },
              children: [T.jsx("span", {
                style: {
                  fontWeight: 600,
                  fontSize: "14px"
                },
                children: "Dynamic Thresholding"
              }), T.jsxs("label", {
                className: "toggle-switch",
                children: [T.jsx("input", {
                  type: "checkbox",
                  checked: ao,
                  onChange: e => io(e.target.checked)
                }), T.jsx("span", {
                  className: "slider"
                })]
              })]
            }), T.jsx(Mt, {
              presets: us.novelai || [],
              currentPositive: Wn,
              currentNegative: Kn,
              onSelect: e => F.flushSync(() => {
                Ln(e.positive);
                Jn(e.negative);
              }),
              onSave: (e, t, a) => bs("novelai", e, t, a),
              onAdd: (e, t, a) => xs("novelai", e, t, a),
              onDelete: e => ys("novelai", e),
              t: L
            }), T.jsx("label", {
              style: Dt,
              children: L("labelPositivePrompt")
            }), T.jsx("textarea", {
              style: {
                ...Ft,
                minHeight: "70px",
                resize: "vertical"
              },
              value: Wn,
              onChange: e => Ln(e.target.value),
              placeholder: "masterpiece, best quality, ..."
            }), T.jsx("label", {
              style: Dt,
              children: L("labelNegativePrompt")
            }), T.jsx("textarea", {
              style: {
                ...Ft,
                minHeight: "70px",
                resize: "vertical"
              },
              value: Kn,
              onChange: e => Jn(e.target.value),
              placeholder: "lowres, bad anatomy, ..."
            })]
          }), fs === "pollinations" && T.jsxs(T.Fragment, {
            children: [T.jsx("label", {
              style: Dt,
              children: L("labelImageSizeModal")
            }), T.jsxs("select", {
              style: Rt,
              value: xo,
              onChange: e => yo(e.target.value),
              children: [T.jsx("option", {
                value: "512x512",
                children: "512x512"
              }), T.jsx("option", {
                value: "768x768",
                children: "768x768"
              }), T.jsx("option", {
                value: "1024x1024",
                children: "1024x1024"
              }), T.jsx("option", {
                value: "1024x1536",
                children: "1024x1536"
              }), T.jsx("option", {
                value: "1536x1024",
                children: "1536x1024"
              }), T.jsx("option", {
                value: "1920x1080",
                children: "1920x1080"
              }), T.jsx("option", {
                value: "1080x1920",
                children: "1080x1920"
              })]
            }), T.jsx("label", {
              style: Dt,
              children: L("labelSeed")
            }), T.jsx("input", {
              type: "number",
              style: Ft,
              value: jo,
              onChange: e => ko(parseInt(e.target.value) || -1)
            }), T.jsx("div", {
              style: Nt,
              children: L("hintSeed")
            }), T.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "14px 0 6px"
              },
              children: [T.jsxs("div", {
                children: [T.jsx("span", {
                  style: {
                    fontWeight: 600,
                    fontSize: "14px"
                  },
                  children: "Enhance"
                }), T.jsx("div", {
                  style: Nt,
                  children: L("hintPollinationsEnhance")
                })]
              }), T.jsxs("label", {
                className: "toggle-switch",
                children: [T.jsx("input", {
                  type: "checkbox",
                  checked: Co,
                  onChange: e => _o(e.target.checked)
                }), T.jsx("span", {
                  className: "slider"
                })]
              })]
            }), T.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "10px 0 6px"
              },
              children: [T.jsxs("div", {
                children: [T.jsx("span", {
                  style: {
                    fontWeight: 600,
                    fontSize: "14px"
                  },
                  children: "No Logo"
                }), T.jsx("div", {
                  style: Nt,
                  children: L("hintPollinationsNologo")
                })]
              }), T.jsxs("label", {
                className: "toggle-switch",
                children: [T.jsx("input", {
                  type: "checkbox",
                  checked: Ao,
                  onChange: e => Io(e.target.checked)
                }), T.jsx("span", {
                  className: "slider"
                })]
              })]
            }), T.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "10px 0 6px"
              },
              children: [T.jsxs("div", {
                children: [T.jsx("span", {
                  style: {
                    fontWeight: 600,
                    fontSize: "14px"
                  },
                  children: "Safe Mode"
                }), T.jsx("div", {
                  style: Nt,
                  children: L("hintPollinationsSafe")
                })]
              }), T.jsxs("label", {
                className: "toggle-switch",
                children: [T.jsx("input", {
                  type: "checkbox",
                  checked: Po,
                  onChange: e => $o(e.target.checked)
                }), T.jsx("span", {
                  className: "slider"
                })]
              })]
            }), T.jsx(Mt, {
              presets: us.pollinations || [],
              currentPositive: Vn,
              currentNegative: Yn,
              onSelect: e => F.flushSync(() => {
                qn(e.positive);
                Xn(e.negative);
              }),
              onSave: (e, t, a) => bs("pollinations", e, t, a),
              onAdd: (e, t, a) => xs("pollinations", e, t, a),
              onDelete: e => ys("pollinations", e),
              t: L
            }), T.jsx("label", {
              style: Dt,
              children: L("labelPositivePrompt")
            }), T.jsx("textarea", {
              style: {
                ...Ft,
                minHeight: "70px",
                resize: "vertical"
              },
              value: Vn,
              onChange: e => qn(e.target.value),
              placeholder: "high quality, 4k, ..."
            }), T.jsx("label", {
              style: Dt,
              children: L("labelNegativePrompt")
            }), T.jsx("textarea", {
              style: {
                ...Ft,
                minHeight: "70px",
                resize: "vertical"
              },
              value: Yn,
              onChange: e => Xn(e.target.value),
              placeholder: "low quality, blurry, ..."
            })]
          }), fs === "googleimagen" && T.jsxs(T.Fragment, {
            children: [T.jsx("label", {
              style: Dt,
              children: L("labelAspectRatio")
            }), T.jsxs("select", {
              style: Rt,
              value: qo,
              onChange: e => Yo(e.target.value),
              children: [T.jsx("option", {
                value: "1:1",
                children: L("optAspect1_1")
              }), T.jsx("option", {
                value: "3:4",
                children: L("optAspect3_4")
              }), T.jsx("option", {
                value: "4:3",
                children: L("optAspect4_3")
              }), T.jsx("option", {
                value: "9:16",
                children: L("optAspect9_16")
              }), T.jsx("option", {
                value: "16:9",
                children: L("optAspect16_9")
              })]
            }), T.jsx("div", {
              style: Nt,
              children: L("hintImagenAspectRatio")
            }), T.jsx("label", {
              style: Dt,
              children: L("labelPersonGeneration")
            }), T.jsxs("select", {
              style: Rt,
              value: Jo,
              onChange: e => Vo(e.target.value),
              children: [T.jsx("option", {
                value: "allow_all",
                children: L("optPersonAllowAll")
              }), T.jsx("option", {
                value: "allow_adult",
                children: L("optPersonAllowAdult")
              }), T.jsx("option", {
                value: "dont_allow",
                children: L("optPersonDontAllow")
              })]
            }), T.jsx("div", {
              style: Nt,
              children: L("hintPersonGeneration")
            }), T.jsx(Mt, {
              presets: us.googleimagen || [],
              currentPositive: Qn,
              currentNegative: "",
              onSelect: e => F.flushSync(() => {
                Zn(e.positive);
              }),
              onSave: (e, t) => bs("googleimagen", e, t, ""),
              onAdd: (e, t) => xs("googleimagen", e, t, ""),
              onDelete: e => ys("googleimagen", e),
              t: L
            }), T.jsx("label", {
              style: Dt,
              children: L("labelPositivePrompt")
            }), T.jsx("textarea", {
              style: {
                ...Ft,
                minHeight: "70px",
                resize: "vertical"
              },
              value: Qn,
              onChange: e => Zn(e.target.value),
              placeholder: "high quality, detailed, ..."
            })]
          }), fs === "geminiimage" && T.jsxs(T.Fragment, {
            children: [T.jsx("div", {
              style: Nt,
              children: L("hintGeminiImageEndpoint")
            }), T.jsx(Mt, {
              presets: us.geminiimage || [],
              currentPositive: es,
              currentNegative: as,
              onSelect: e => F.flushSync(() => {
                ts(e.positive);
                is(e.negative);
              }),
              onSave: (e, t, a) => bs("geminiimage", e, t, a),
              onAdd: (e, t, a) => xs("geminiimage", e, t, a),
              onDelete: e => ys("geminiimage", e),
              t: L
            }), T.jsx("label", {
              style: Dt,
              children: L("labelPositivePrompt")
            }), T.jsx("textarea", {
              style: {
                ...Ft,
                minHeight: "70px",
                resize: "vertical"
              },
              value: es,
              onChange: e => ts(e.target.value),
              placeholder: "high quality, detailed, ..."
            }), T.jsx("label", {
              style: Dt,
              children: L("labelNegativePrompt")
            }), T.jsx("textarea", {
              style: {
                ...Ft,
                minHeight: "70px",
                resize: "vertical"
              },
              value: as,
              onChange: e => is(e.target.value),
              placeholder: "low quality, blurry, ..."
            }), T.jsx("div", {
              style: Nt,
              children: L("hintGeminiNegativePrompt")
            })]
          }), fs === "grok" && T.jsxs(T.Fragment, {
            children: [T.jsx(Mt, {
              presets: us.grok || [],
              currentPositive: os,
              currentNegative: ss,
              onSelect: e => F.flushSync(() => {
                ns(e.positive);
                ls(e.negative);
              }),
              onSave: (e, t, a) => bs("grok", e, t, a),
              onAdd: (e, t, a) => xs("grok", e, t, a),
              onDelete: e => ys("grok", e),
              t: L
            }), T.jsx("label", {
              style: Dt,
              children: L("labelPositivePrompt")
            }), T.jsx("textarea", {
              style: {
                ...Ft,
                minHeight: "70px",
                resize: "vertical"
              },
              value: os,
              onChange: e => ns(e.target.value),
              placeholder: "high quality, detailed, ..."
            }), T.jsx("label", {
              style: Dt,
              children: L("labelNegativePrompt")
            }), T.jsx("textarea", {
              style: {
                ...Ft,
                minHeight: "70px",
                resize: "vertical"
              },
              value: ss,
              onChange: e => ls(e.target.value),
              placeholder: "low quality, blurry, ..."
            })]
          }), fs === "gptimage" && T.jsxs(T.Fragment, {
            children: [T.jsx("label", {
              style: Dt,
              children: L("labelImageSize")
            }), T.jsxs("select", {
              style: Rt,
              value: Fn,
              onChange: e => Rn(e.target.value),
              children: [T.jsx("option", {
                value: "1024x1024",
                children: "1024 × 1024 (1:1)"
              }), T.jsx("option", {
                value: "1536x1024",
                children: "1536 × 1024 (3:2 横)"
              }), T.jsx("option", {
                value: "1024x1536",
                children: "1024 × 1536 (2:3 直)"
              }), T.jsx("option", {
                value: "1792x1024",
                children: "1792 × 1024 (DALL·E 3 横)"
              }), T.jsx("option", {
                value: "1024x1792",
                children: "1024 × 1792 (DALL·E 3 直)"
              }), T.jsx("option", {
                value: "512x512",
                children: "512 × 512 (DALL·E 2)"
              }), T.jsx("option", {
                value: "auto",
                children: "auto (gpt-image-1)"
              })]
            }), T.jsx("label", {
              style: Dt,
              children: L("labelImageQuality")
            }), T.jsxs("select", {
              style: Rt,
              value: Nn,
              onChange: e => Mn(e.target.value),
              children: [T.jsx("option", {
                value: "auto",
                children: "auto"
              }), T.jsx("option", {
                value: "low",
                children: "low"
              }), T.jsx("option", {
                value: "medium",
                children: "medium"
              }), T.jsx("option", {
                value: "high",
                children: "high"
              }), T.jsx("option", {
                value: "standard",
                children: "standard (DALL·E 3)"
              }), T.jsx("option", {
                value: "hd",
                children: "hd (DALL·E 3)"
              })]
            }), T.jsx("div", {
              style: Nt,
              children: L("hintGptImageQuality")
            }), T.jsx(Mt, {
              presets: us.gptimage || [],
              currentPositive: rs,
              currentNegative: ds,
              onSelect: e => F.flushSync(() => {
                cs(e.positive);
                gs(e.negative);
              }),
              onSave: (e, t, a) => bs("gptimage", e, t, a),
              onAdd: (e, t, a) => xs("gptimage", e, t, a),
              onDelete: e => ys("gptimage", e),
              t: L
            }), T.jsx("label", {
              style: Dt,
              children: L("labelPositivePrompt")
            }), T.jsx("textarea", {
              style: {
                ...Ft,
                minHeight: "70px",
                resize: "vertical"
              },
              value: rs,
              onChange: e => cs(e.target.value),
              placeholder: "high quality, detailed, ..."
            }), T.jsx("label", {
              style: Dt,
              children: L("labelNegativePrompt")
            }), T.jsx("textarea", {
              style: {
                ...Ft,
                minHeight: "70px",
                resize: "vertical"
              },
              value: ds,
              onChange: e => gs(e.target.value),
              placeholder: "low quality, blurry, ..."
            }), T.jsx("div", {
              style: Nt,
              children: L("hintGptImageNegativePrompt")
            })]
          })]
        }), T.jsxs("div", {
          style: {
            padding: "14px 20px",
            borderTop: "0.5px solid var(--border-color, rgba(0,0,0,0.1))",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            flexShrink: 0
          },
          children: [T.jsxs("div", {
            style: {
              display: "flex",
              gap: "12px"
            },
            children: [T.jsx("button", {
              onClick: () => {
                if (fs === "novelai") {
                  Di(28);
                  Ri(5);
                  Mi("k_euler_ancestral");
                  Oi(-1);
                  Ui("karras");
                  Li(0);
                  Ji(false);
                  qi(false);
                  Xi(0);
                  Zi(1);
                  to(true);
                  io(false);
                  Pi("1024x1024");
                  Ln(zt.novelai.positive);
                  Jn(zt.novelai.negative);
                } else if (fs === "pollinations") {
                  ko(-1);
                  _o(false);
                  Io(true);
                  $o(false);
                  yo("1024x1024");
                  qn(zt.pollinations.positive);
                  Xn(zt.pollinations.negative);
                } else if (fs === "googleimagen") {
                  Vo("allow_all");
                  Yo("1:1");
                  Zn(zt.googleimagen.positive);
                  setGoogleImagenNegativePrompt(zt.googleimagen.negative);
                } else if (fs === "geminiimage") {
                  ts(zt.geminiimage.positive);
                  is(zt.geminiimage.negative);
                } else if (fs === "grok") {
                  ns(zt.grok.positive);
                  ls(zt.grok.negative);
                } else if (fs === "gptimage") {
                  Rn("1024x1024");
                  Mn("auto");
                  cs(zt.gptimage.positive);
                  gs(zt.gptimage.negative);
                }
              },
              style: {
                flex: 1,
                padding: "12px",
                borderRadius: "12px",
                fontSize: "15px",
                fontWeight: 600,
                border: "1.5px solid var(--border-color, #C7C7CC)",
                background: "var(--bg-secondary, rgba(0,0,0,0.04))",
                color: "var(--text-primary, #000)",
                cursor: "pointer"
              },
              children: L("btnResetDefaults")
            }), T.jsx("button", {
              onClick: async () => {
                await hc();
                vs(null);
              },
              style: {
                flex: 1,
                padding: "12px",
                borderRadius: "12px",
                fontSize: "15px",
                fontWeight: 600,
                border: "none",
                background: "#007AFF",
                color: "#fff",
                cursor: "pointer"
              },
              children: L("btnSaveSettings")
            })]
          }), T.jsxs("button", {
            onClick: async () => {
              await hc();
              const e = await s.get("apiSettings");
              try {
                const t = {
                  novelai: {
                    key: e.novelAiKey,
                    proxy: e.novelAiCorsProxy
                  },
                  pollinations: {
                    key: e.pollinationsKey,
                    proxy: e.pollinationsCorsProxy
                  },
                  googleimagen: {
                    key: e.googleImagenKey,
                    proxy: e.googleImagenCorsProxy
                  },
                  geminiimage: {
                    key: e.geminiImageKey,
                    proxy: e.geminiImageCorsProxy
                  },
                  grok: {
                    key: e.grokKey,
                    proxy: e.grokCorsProxy
                  },
                  gptimage: {
                    key: e.gptImageKey,
                    proxy: e.gptImageCorsProxy
                  }
                }[fs] || {};
                const a = t.key ? `${t.key.slice(0, 8)}...${t.key.slice(-4)} (len=${t.key.length})` : "MISSING";
                const i = await u("1girl, upper body, smile, outdoors, blue sky", "chat", {
                  ...e
                }, {
                  forceApi: fs,
                  throwOnError: true
                });
                if (i) {
                  const e = document.createElement("div");
                  e.style.cssText = "position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;cursor:pointer";
                  e.onclick = () => e.remove();
                  const o = document.createElement("img");
                  o.src = i;
                  o.style.cssText = "max-width:90vw;max-height:90vh;object-fit:contain;border-radius:8px";
                  const n = document.createElement("div");
                  n.style.cssText = "position:absolute;bottom:20px;left:50%;transform:translateX(-50%);color:#fff;background:rgba(0,0,0,0.7);padding:8px 16px;border-radius:8px;font-size:12px;max-width:90vw;word-break:break-all";
                  n.textContent = `API: ${fs} | key: ${a} | proxy: ${t.proxy || "none"}`;
                  e.appendChild(n);
                  e.appendChild(o);
                  document.body.appendChild(e);
                } else {
                  c(L("msgImageGenFail"));
                }
              } catch (t) {
                c(`${L("msgImageGenFail")}\n\n${t.message}`);
              }
            },
            style: {
              width: "100%",
              padding: "12px",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: 600,
              border: "1.5px solid #34C759",
              background: "rgba(52, 199, 89, 0.08)",
              color: "#34C759",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px"
            },
            children: [T.jsx(ve, {
              size: 16
            }), " ", L("btnTestImageGen")]
          })]
        })]
      })
    }), document.body), xc && F.createPortal(T.jsx("div", {
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10000,
        padding: "20px"
      },
      onClick: () => yc(false),
      children: T.jsxs("div", {
        style: {
          width: "100%",
          maxWidth: "340px",
          background: "rgba(255, 255, 255, 0.85)",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column"
        },
        onClick: e => e.stopPropagation(),
        children: [T.jsxs("div", {
          style: {
            padding: "20px 20px 16px",
            borderBottom: "0.5px solid rgba(0, 0, 0, 0.1)"
          },
          children: [T.jsx("h3", {
            style: {
              margin: 0,
              fontSize: "18px",
              fontWeight: 700,
              textAlign: "center"
            },
            children: L(fc === "export" ? "labelPartialExport" : "labelPartialImport")
          }), T.jsx("p", {
            style: {
              margin: "6px 0 0",
              fontSize: "13px",
              color: "rgba(0,0,0,0.45)",
              textAlign: "center"
            },
            children: L(fc === "export" ? "labelSelectExportCategories" : "labelSelectImportCategories")
          }), T.jsxs("div", {
            style: {
              display: "flex",
              gap: "8px",
              marginTop: "12px",
              justifyContent: "center"
            },
            children: [T.jsx("button", {
              onClick: () => kc(Bc.map(e => e.id)),
              style: {
                flex: 1,
                padding: "7px 0",
                borderRadius: "10px",
                border: "1.5px solid #007AFF",
                background: "rgba(0,122,255,0.08)",
                color: "#007AFF",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer"
              },
              children: L("btnSelectAll")
            }), T.jsx("button", {
              onClick: () => kc([]),
              style: {
                flex: 1,
                padding: "7px 0",
                borderRadius: "10px",
                border: "1.5px solid #C7C7CC",
                background: "rgba(0,0,0,0.04)",
                color: "rgba(0,0,0,0.45)",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer"
              },
              children: L("btnDeselectAll")
            })]
          }), fc === "export" && Pc.length > 0 && jc.some(e => ct.has(e)) && T.jsxs(T.Fragment, {
            children: [T.jsx("div", {
              style: {
                marginTop: "12px",
                fontSize: "12px",
                color: "rgba(0,0,0,0.55)",
                textAlign: "center"
              },
              children: "按用戶篩選（可導出用戶 A / 用戶 B）"
            }), T.jsxs("div", {
              style: {
                display: "flex",
                gap: "8px",
                marginTop: "8px",
                justifyContent: "center"
              },
              children: [T.jsx("button", {
                onClick: () => _c($c),
                style: {
                  flex: 1,
                  padding: "7px 0",
                  borderRadius: "10px",
                  border: "1.5px solid #34C759",
                  background: "rgba(52,199,89,0.10)",
                  color: "#1B8E3E",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer"
                },
                children: "全選用戶"
              }), T.jsx("button", {
                onClick: () => _c(He ? [String(He)] : []),
                style: {
                  flex: 1,
                  padding: "7px 0",
                  borderRadius: "10px",
                  border: "1.5px solid #AF52DE",
                  background: "rgba(175,82,222,0.10)",
                  color: "#8A38B5",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer"
                },
                children: "只選當前"
              })]
            })]
          })]
        }), T.jsxs("div", {
          style: {
            padding: "4px 0",
            maxHeight: "55vh",
            overflowY: "auto"
          },
          children: [fc === "export" && Pc.length > 0 && jc.some(e => ct.has(e)) && T.jsx("div", {
            style: {
              padding: "6px 14px 8px"
            },
            children: Pc.map(e => {
              const t = Cc.includes(e.uid);
              return T.jsxs("div", {
                onClick: () => {
                  _c(t ? Cc.filter(t => t !== e.uid) : [...Cc, e.uid]);
                },
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "6px",
                  padding: "10px 12px",
                  borderRadius: "12px",
                  border: "1px solid " + (t ? "rgba(52,199,89,0.6)" : "rgba(0,0,0,0.12)"),
                  background: t ? "rgba(52,199,89,0.10)" : "rgba(255,255,255,0.5)",
                  cursor: "pointer"
                },
                children: [T.jsx("div", {
                  style: {
                    width: "18px",
                    height: "18px",
                    borderRadius: "9px",
                    border: "2px solid " + (t ? "#34C759" : "#C7C7CC"),
                    background: t ? "#34C759" : "transparent",
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  },
                  children: t ? "✓" : ""
                }), T.jsx("span", {
                  style: {
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#1C1C1E"
                  },
                  children: e.name
                }), T.jsx("span", {
                  style: {
                    marginLeft: "auto",
                    fontSize: "12px",
                    color: "rgba(0,0,0,0.45)"
                  },
                  children: e.uid
                })]
              }, e.uid);
            })
          }), jc.includes("chat_history") && Ec.length > 0 && T.jsxs("div", {
            style: {
              padding: "6px 14px 8px"
            },
            children: [T.jsx("div", {
              style: {
                marginBottom: "8px",
                fontSize: "12px",
                color: "rgba(0,0,0,0.55)"
              },
              children: "聊天細分（角色/群組，可不選 = 全部）"
            }), T.jsxs("div", {
              style: {
                display: "flex",
                gap: "8px",
                marginBottom: "8px"
              },
              children: [T.jsx("button", {
                onClick: () => Ic(Ec.map(e => e.id)),
                style: {
                  flex: 1,
                  padding: "7px 0",
                  borderRadius: "10px",
                  border: "1.5px solid #007AFF",
                  background: "rgba(0,122,255,0.08)",
                  color: "#007AFF",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer"
                },
                children: "全選聊天"
              }), T.jsx("button", {
                onClick: () => Ic([]),
                style: {
                  flex: 1,
                  padding: "7px 0",
                  borderRadius: "10px",
                  border: "1.5px solid #C7C7CC",
                  background: "rgba(0,0,0,0.04)",
                  color: "rgba(0,0,0,0.45)",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer"
                },
                children: "清空聊天"
              })]
            }), Ec.map(e => {
              const t = Ac.includes(e.id);
              return T.jsxs("div", {
                onClick: () => {
                  Ic(t ? Ac.filter(t => t !== e.id) : [...Ac, e.id]);
                },
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "6px",
                  padding: "8px 10px",
                  borderRadius: "10px",
                  border: "1px solid " + (t ? "rgba(0,122,255,0.55)" : "rgba(0,0,0,0.12)"),
                  background: t ? "rgba(0,122,255,0.08)" : "rgba(255,255,255,0.5)",
                  cursor: "pointer"
                },
                children: [T.jsx("div", {
                  style: {
                    width: "16px",
                    height: "16px",
                    borderRadius: "8px",
                    border: "2px solid " + (t ? "#007AFF" : "#C7C7CC"),
                    background: t ? "#007AFF" : "transparent",
                    color: "#fff",
                    fontSize: "10px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  },
                  children: t ? "✓" : ""
                }), T.jsx("span", {
                  style: {
                    fontSize: "13px",
                    color: "#1C1C1E"
                  },
                  children: e.label
                })]
              }, e.id);
            })]
          }), (() => {
            const e = {
              system: K("catSectionSystem", "系統"),
              role: K("catSectionRole", "角色"),
              chat: K("catSectionChat", "通訊"),
              content: K("catSectionContent", "內容"),
              app: K("catSectionApp", "玩法 App")
            };
            const t = [];
            let a = null;
            Bc.forEach((i, o) => {
              const n = jc.includes(i.id);
              const s = i.section || "app";
              if (s !== a) {
                t.push(T.jsx("div", {
                  style: {
                    padding: "14px 20px 6px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "rgba(0,0,0,0.45)",
                    letterSpacing: "0.5px",
                    background: "rgba(0,0,0,0.02)",
                    borderTop: a ? "0.5px solid rgba(0,0,0,0.08)" : "none"
                  },
                  children: e[s] || s
                }, `__sec_${s}`));
                a = s;
              }
              t.push(T.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  padding: "13px 20px",
                  cursor: "pointer",
                  background: n ? "rgba(0, 122, 255, 0.06)" : "transparent",
                  borderBottom: o < Bc.length - 1 ? "0.5px solid rgba(0,0,0,0.06)" : "none",
                  transition: "background 0.15s"
                },
                onClick: () => {
                  kc(n ? jc.filter(e => e !== i.id) : [...jc, i.id]);
                },
                children: [T.jsx("div", {
                  style: {
                    width: "22px",
                    height: "22px",
                    borderRadius: "11px",
                    border: "2px solid " + (n ? "#007AFF" : "#C7C7CC"),
                    backgroundColor: n ? "#007AFF" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "14px",
                    flexShrink: 0,
                    transition: "all 0.2s"
                  },
                  children: n && T.jsx("span", {
                    style: {
                      color: "white",
                      fontSize: "13px",
                      fontWeight: 700,
                      lineHeight: 1
                    },
                    children: "✓"
                  })
                }), T.jsxs("div", {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    minWidth: 0,
                    flex: 1
                  },
                  children: [T.jsx("span", {
                    style: {
                      fontSize: "15px",
                      fontWeight: n ? 600 : 400,
                      color: n ? "#007AFF" : "#000",
                      transition: "all 0.15s"
                    },
                    children: i.label
                  }), i.hint && T.jsx("span", {
                    style: {
                      marginTop: "3px",
                      fontSize: "11px",
                      lineHeight: 1.4,
                      color: "rgba(0,0,0,0.5)"
                    },
                    children: i.hint
                  })]
                })]
              }, i.id));
            });
            return t;
          })()]
        }), T.jsxs("div", {
          style: {
            display: "flex",
            borderTop: "0.5px solid rgba(0,0,0,0.1)"
          },
          children: [T.jsx("button", {
            style: {
              flex: 1,
              padding: "16px",
              border: "none",
              background: "transparent",
              fontSize: "17px",
              color: "#007AFF",
              cursor: "pointer",
              borderRight: "0.5px solid rgba(0,0,0,0.1)"
            },
            onClick: () => yc(false),
            children: L("chatActionCancel")
          }), (() => {
            const e = fc === "export" && Pc.length > 0 && jc.some(e => ct.has(e));
            const t = jc.length > 0 && (!e || Cc.length > 0);
            return T.jsx("button", {
              style: {
                flex: 1,
                padding: "16px",
                border: "none",
                background: "transparent",
                fontSize: "17px",
                color: t ? "#007AFF" : "#C7C7CC",
                fontWeight: 700,
                cursor: t ? "pointer" : "default"
              },
              disabled: !t,
              onClick: () => {
                if (fc === "export") {
                  dd({
                    selectedCategoryIds: jc,
                    selectedUserIds: e ? Cc : null,
                    selectedChatEntityIds: jc.includes("chat_history") ? Ac : null
                  });
                  yc(false);
                } else {
                  (async () => {
                    var e;
                    if (!wc || jc.length === 0) {
                      return;
                    }
                    const t = wc.__pendingFile;
                    const a = wc.__isGzip;
                    if (!t) {
                      c(L("importError"));
                      return;
                    }
                    let i = false;
                    try {
                      const s = Xc(Ac);
                      const l = jc.includes("chat_history") && s && s.length > 0;
                      const r = `${L("btnConfirmImport")}\n\n${L("msgPartialImportConfirm", {
                        categories: jc.map(e => {
                          var t;
                          if ((t = Bc.find(t => t.id === e)) == null) {
                            return undefined;
                          } else {
                            return t.label;
                          }
                        }).join(", ")
                      })}`;
                      if (!(await h(r))) {
                        return;
                      }
                      U("partial-import", 3600000);
                      i = true;
                      yc(false);
                      Sc(null);
                      Kt("import", L("progressPhasePreparing"));
                      const d = new Set(Jc(jc));
                      const g = t.stream();
                      const p = a ? g.pipeThrough(new DecompressionStream("gzip")) : g;
                      const u = 200;
                      const x = 16777216;
                      const y = 5242880;
                      const f = Object.create(null);
                      const v = Object.create(null);
                      const w = new Set();
                      let S = 0;
                      let j = -1;
                      const k = new Map();
                      const C = new Set();
                      const _ = l && d.has("ttsAudio");
                      const A = [];
                      let I = null;
                      let P = null;
                      const $ = new TextEncoder();
                      if (_) {
                        try {
                          if (navigator.storage && typeof navigator.storage.getDirectory == "function") {
                            const e = await navigator.storage.getDirectory();
                            try {
                              for await (const [t] of e.entries()) {
                                if (t.startsWith("_tts_import_temp_")) {
                                  try {
                                    await e.removeEntry(t);
                                  } catch (o) {}
                                }
                              }
                            } catch (o) {}
                            const t = `_tts_import_temp_${Date.now()}_${Math.random().toString(36).slice(2, 8)}.jsonl`;
                            I = await e.getFileHandle(t, {
                              create: true
                            });
                            P = await I.createWritable();
                          }
                        } catch (n) {
                          console.warn("[分量导入] OPFS 不可用，ttsAudio 改走記憶體 buffer:", n.message);
                          I = null;
                          P = null;
                        }
                      }
                      const z = async e => {
                        const t = f[e];
                        if (!t || t.length === 0) {
                          return;
                        }
                        const a = t.length;
                        try {
                          S += await ht(e, t);
                        } catch (n) {
                          const s = (n == null ? undefined : n.message) || String(n);
                          const l = /No such table|not part of database|is not a known/i.test(s);
                          if (/Connection to Indexed Database server lost|DatabaseClosedError|database is closed/i.test(s)) {
                            let a = false;
                            for (let i = 0; i < 3 && !a; i++) {
                              try {
                                await b();
                              } catch (o) {}
                              await new Promise(e => setTimeout(e, 300 + i * 300));
                              try {
                                S += await ht(e, t);
                                a = true;
                                console.warn(`[分量导入] ⚠️ ${e} 連線丟失後第 ${i + 1} 次重試成功`);
                              } catch (o) {}
                            }
                            if (a) {
                              t.length = 0;
                              v[e] = 0;
                              await new Promise(e => setTimeout(e, 0));
                              return;
                            }
                          }
                          if (l) {
                            console.warn(`[分量导入] bulkPut to ${e} 失敗（表可能不存在）:`, s);
                            if (k.has(e)) {
                              k.get(e).lostRows += a;
                            } else {
                              k.set(e, {
                                reason: "no-table",
                                message: s,
                                lostRows: a
                              });
                            }
                          } else {
                            console.error(`[分量导入] ❌ bulkPut to ${e} 失敗（資料未寫入）:`, s);
                            if (k.has(e)) {
                              k.get(e).lostRows += a;
                            } else {
                              k.set(e, {
                                reason: "write-failed",
                                message: s,
                                lostRows: a
                              });
                            }
                          }
                        }
                        t.length = 0;
                        v[e] = 0;
                        await new Promise(e => setTimeout(e, 0));
                      };
                      const E = await Qe(p, st, {
                        onRow: async (e, t, a) => {
                          if (a) {
                            return;
                          }
                          if (!d.has(e)) {
                            return;
                          }
                          w.add(e);
                          if (rt.has(e) && !qc(e, t, jc)) {
                            return;
                          }
                          if (e === "ttsAudio" && _) {
                            if (P) {
                              await P.write($.encode(JSON.stringify(t) + "\n"));
                            } else {
                              A.push(t);
                            }
                            return;
                          }
                          if (l) {
                            if (!ad(e, t, s, C)) {
                              return;
                            }
                            if (e === "messages") {
                              const e = (t == null ? undefined : t.msgId) ?? (t == null ? undefined : t._id);
                              if (e != null) {
                                C.add(String(e));
                              }
                            }
                          }
                          if (!f[e]) {
                            f[e] = [];
                            v[e] = 0;
                          }
                          const i = Mc(t);
                          let n;
                          try {
                            const e = JSON.stringify(i);
                            n = e ? e.length : 0;
                          } catch (o) {
                            n = 0;
                          }
                          if (n > y) {
                            console.warn(`[分量导入] ⚠️ 超大 row（${(n / 1024 / 1024).toFixed(1)}MB）單獨寫入表 ${e}`);
                            await z(e);
                            f[e].push(i);
                            v[e] = n;
                            Vt(L("progressPhaseRestoreTable", {
                              table: e
                            }));
                            await z(e);
                            return;
                          }
                          f[e].push(i);
                          v[e] += n;
                          if (f[e].length >= u || v[e] >= x) {
                            Vt(L("progressPhaseRestoreTable", {
                              table: e
                            }));
                            await z(e);
                          }
                        },
                        onProgress: e => {
                          const t = Math.floor(e / 1048576);
                          if (t !== j) {
                            j = t;
                            Vt(`${L("progressPhasePreparing")} ${t}MB`);
                          }
                        }
                      });
                      for (const e of Object.keys(f)) {
                        await z(e);
                      }
                      if (_) {
                        Vt(L("progressPhaseRestoreTable", {
                          table: "ttsAudio"
                        }));
                        const e = [];
                        let t = 0;
                        const a = 50;
                        const i = 16777216;
                        const s = async () => {
                          if (e.length === 0) {
                            return;
                          }
                          const a = e.length;
                          try {
                            await m.table("ttsAudio").bulkPut(e);
                            S += a;
                          } catch (n) {
                            const t = (n == null ? undefined : n.message) || String(n);
                            if (/No such table|not part of database|is not a known/i.test(t)) {
                              console.warn("[分量导入] ttsAudio bulkPut 失敗（表可能不存在）:", t);
                              if (k.has("ttsAudio")) {
                                k.get("ttsAudio").lostRows += a;
                              } else {
                                k.set("ttsAudio", {
                                  reason: "no-table",
                                  message: t,
                                  lostRows: a
                                });
                              }
                            } else {
                              console.error("[分量导入] ❌ ttsAudio bulkPut 失敗（資料未寫入）:", t);
                              if (k.has("ttsAudio")) {
                                k.get("ttsAudio").lostRows += a;
                              } else {
                                k.set("ttsAudio", {
                                  reason: "write-failed",
                                  message: t,
                                  lostRows: a
                                });
                              }
                            }
                          }
                          e.length = 0;
                          t = 0;
                          await new Promise(e => setTimeout(e, 0));
                        };
                        const l = a => {
                          if (!C.has(String((a == null ? undefined : a.msgId) ?? ""))) {
                            return;
                          }
                          const i = Mc(a);
                          let n;
                          try {
                            const e = JSON.stringify(i);
                            n = e ? e.length : 0;
                          } catch (o) {
                            n = 0;
                          }
                          e.push(i);
                          t += n;
                        };
                        const r = () => e.length >= a || t >= i;
                        if (P) {
                          try {
                            await P.close();
                          } catch (o) {}
                          P = null;
                          try {
                            const e = (await I.getFile()).stream().getReader();
                            const t = new TextDecoder();
                            let a = "";
                            try {
                              while (true) {
                                const {
                                  done: i,
                                  value: n
                                } = await e.read();
                                if (i) {
                                  break;
                                }
                                let c;
                                for (a += t.decode(n, {
                                  stream: true
                                }); (c = a.indexOf("\n")) >= 0;) {
                                  const e = a.slice(0, c);
                                  a = a.slice(c + 1);
                                  if (e) {
                                    try {
                                      l(JSON.parse(e));
                                      if (r()) {
                                        await s();
                                      }
                                    } catch (o) {}
                                  }
                                }
                              }
                              if (a.trim()) {
                                try {
                                  l(JSON.parse(a));
                                } catch (o) {}
                              }
                            } finally {
                              try {
                                e.releaseLock();
                              } catch (o) {}
                            }
                          } catch (n) {
                            console.warn("[分量导入] 讀取 ttsAudio OPFS 暫存失敗:", n.message);
                          }
                        } else {
                          for (const e of A) {
                            l(e);
                            if (r()) {
                              await s();
                            }
                          }
                          A.length = 0;
                        }
                        await s();
                      }
                      if (I) {
                        try {
                          const e = await navigator.storage.getDirectory();
                          await e.removeEntry(I.name);
                        } catch (o) {}
                      }
                      const B = E.backup;
                      let T = {};
                      if ((e = B.data) == null ? undefined : e.localStorage) {
                        Vt(L("progressPhaseRestoreLocal"));
                        const e = Kc(B.data.localStorage, "localStorage", jc);
                        T = l ? ed(e, s) : e;
                        B.data.localStorage = null;
                        const t = Object.entries(T);
                        for (let a = 0; a < t.length; a++) {
                          const [e, i] = t[a];
                          try {
                            localStorage.setItem(e, i);
                          } catch (o) {}
                          if ((a + 1) % 20 == 0) {
                            await new Promise(e => setTimeout(e, 0));
                          }
                        }
                      }
                      if (w.size > 0 || Object.keys(T).length > 0) {
                        const e = {};
                        for (const t of w) {
                          e[t] = true;
                        }
                        await nd(T, e, "分量导入");
                        await sd();
                      }
                      console.log("[分量导入] ✅ 部分导入完成");
                      const D = [];
                      for (const [e, t] of k.entries()) {
                        if (t.reason === "write-failed") {
                          D.push(`• ${e}：${t.lostRows} 筆未寫入（${mt(t.message)}）`);
                        }
                      }
                      let F = L("msgImportSuccess");
                      if (D.length > 0) {
                        F += `\n\n⚠️ ${L("msgImportWriteFailed", {
                          tables: D.join("\n")
                        })}`;
                        console.error("[分量导入] ⚠️ 部分表寫入失敗:", D);
                      }
                      if (E.skippedRows > 0) {
                        F += `\n\n⚠️ ${L("msgImportSkippedOversized", {
                          count: E.skippedRows
                        })}`;
                        console.warn("[分量导入] ⚠️ 略過超大 row 數:", E.skippedRows);
                      }
                      await c(F);
                      setTimeout(() => {
                        window.location.reload();
                      }, 500);
                    } catch (s) {
                      console.error("[分量导入] ❌ 失败:", s);
                      c(L("msgImportFailed") + ": " + s.message);
                    } finally {
                      qt();
                      if (i) {
                        W();
                      }
                    }
                  })();
                }
              },
              children: jc.length > 0 ? `${L(fc === "export" ? "btnConfirmExport" : "btnConfirmImport")} (${jc.length}${fc === "export" && e ? ` / ${Cc.length}${jc.includes("chat_history") ? ` / ${Ac.length || "ALL"}` : ""}` : ""})` : L("msgDone")
            });
          })()]
        })]
      })
    }), document.body)]
  });
};
class Ot extends D.Component {
  constructor(e) {
    super(e);
    this.state = {
      hasError: false,
      error: null
    };
  }
  static getDerivedStateFromError(e) {
    return {
      hasError: true,
      error: e
    };
  }
  componentDidCatch(e, t) {
    console.error("[ApiSettingsScreen] 渲染崩潰:", e, t);
  }
  render() {
    if (this.state.hasError) {
      return T.jsxs("div", {
        style: {
          padding: "40px 20px",
          textAlign: "center",
          color: "var(--ios-label, #333)",
          fontFamily: "-apple-system, sans-serif"
        },
        children: [T.jsx("div", {
          style: {
            fontSize: "48px",
            marginBottom: "16px"
          },
          children: "⚙️"
        }), T.jsx("h2", {
          style: {
            fontSize: "20px",
            marginBottom: "12px"
          },
          children: "設定頁面載入失敗"
        }), T.jsx("p", {
          style: {
            fontSize: "14px",
            color: "#888",
            marginBottom: "20px"
          },
          children: "可能是記憶體不足，請嘗試關閉其他應用後重試"
        }), T.jsx("button", {
          onClick: () => this.setState({
            hasError: false,
            error: null
          }),
          style: {
            padding: "12px 32px",
            border: "none",
            borderRadius: "12px",
            background: "#007AFF",
            color: "white",
            fontSize: "16px",
            fontWeight: 600,
            cursor: "pointer"
          },
          children: "重試"
        })]
      });
    } else {
      return this.props.children;
    }
  }
}
const Ht = e => T.jsx(Ot, {
  children: T.jsx(Gt, {
    ...e
  })
});
export { Ht as default };