const e = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : global;
const t = Object.keys;
const n = Array.isArray;
function r(e, n) {
  if (typeof n == "object") {
    t(n).forEach(function (t) {
      e[t] = n[t];
    });
  }
  return e;
}
if (typeof Promise != "undefined" && !e.Promise) {
  e.Promise = Promise;
}
const s = Object.getPrototypeOf;
const i = {}.hasOwnProperty;
function o(e, t) {
  return i.call(e, t);
}
function a(e, n) {
  if (typeof n == "function") {
    n = n(s(e));
  }
  (typeof Reflect == "undefined" ? t : Reflect.ownKeys)(n).forEach(t => {
    l(e, t, n[t]);
  });
}
const u = Object.defineProperty;
function l(e, t, n, s) {
  u(e, t, r(n && o(n, "get") && typeof n.get == "function" ? {
    get: n.get,
    set: n.set,
    configurable: true
  } : {
    value: n,
    configurable: true,
    writable: true
  }, s));
}
function c(e) {
  return {
    from: function (t) {
      e.prototype = Object.create(t.prototype);
      l(e.prototype, "constructor", e);
      return {
        extend: a.bind(null, e.prototype)
      };
    }
  };
}
const h = Object.getOwnPropertyDescriptor;
function d(e, t) {
  let n;
  return h(e, t) || (n = s(e)) && d(n, t);
}
const f = [].slice;
function p(e, t, n) {
  return f.call(e, t, n);
}
function y(e, t) {
  return t(e);
}
function m(e) {
  if (!e) {
    throw new Error("Assertion Failed");
  }
}
function v(t) {
  if (e.setImmediate) {
    setImmediate(t);
  } else {
    setTimeout(t, 0);
  }
}
function g(e, t) {
  return e.reduce((e, n, r) => {
    var s = t(n, r);
    if (s) {
      e[s[0]] = s[1];
    }
    return e;
  }, {});
}
function b(e, t) {
  if (typeof t == "string" && o(e, t)) {
    return e[t];
  }
  if (!t) {
    return e;
  }
  if (typeof t != "string") {
    var n = [];
    for (var r = 0, s = t.length; r < s; ++r) {
      var i = b(e, t[r]);
      n.push(i);
    }
    return n;
  }
  var a = t.indexOf(".");
  if (a !== -1) {
    var u = e[t.substr(0, a)];
    if (u == null) {
      return undefined;
    } else {
      return b(u, t.substr(a + 1));
    }
  }
}
function _(e, t, r) {
  if (e && t !== undefined && (!("isFrozen" in Object) || !Object.isFrozen(e))) {
    if (typeof t != "string" && "length" in t) {
      m(typeof r != "string" && "length" in r);
      for (var s = 0, i = t.length; s < i; ++s) {
        _(e, t[s], r[s]);
      }
    } else {
      var a = t.indexOf(".");
      if (a !== -1) {
        var u = t.substr(0, a);
        var l = t.substr(a + 1);
        if (l === "") {
          if (r === undefined) {
            if (n(e) && !isNaN(parseInt(u))) {
              e.splice(u, 1);
            } else {
              delete e[u];
            }
          } else {
            e[u] = r;
          }
        } else {
          var c = e[u];
          if (!c || !o(e, u)) {
            c = e[u] = {};
          }
          _(c, l, r);
        }
      } else if (r === undefined) {
        if (n(e) && !isNaN(parseInt(t))) {
          e.splice(t, 1);
        } else {
          delete e[t];
        }
      } else {
        e[t] = r;
      }
    }
  }
}
function w(e) {
  var t = {};
  for (var n in e) {
    if (o(e, n)) {
      t[n] = e[n];
    }
  }
  return t;
}
const x = [].concat;
function k(e) {
  return x.apply([], e);
}
const E = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(k([8, 16, 32, 64].map(e => ["Int", "Uint", "Float"].map(t => t + e + "Array")))).filter(t => e[t]);
const P = E.map(t => e[t]);
g(E, e => [e, true]);
let K = null;
function O(e) {
  K = typeof WeakMap != "undefined" && new WeakMap();
  const t = S(e);
  K = null;
  return t;
}
function S(e) {
  if (!e || typeof e != "object") {
    return e;
  }
  let t = K && K.get(e);
  if (t) {
    return t;
  }
  if (n(e)) {
    t = [];
    if (K) {
      K.set(e, t);
    }
    for (var r = 0, i = e.length; r < i; ++r) {
      t.push(S(e[r]));
    }
  } else if (P.indexOf(e.constructor) >= 0) {
    t = e;
  } else {
    const n = s(e);
    t = n === Object.prototype ? {} : Object.create(n);
    if (K) {
      K.set(e, t);
    }
    for (var a in e) {
      if (o(e, a)) {
        t[a] = S(e[a]);
      }
    }
  }
  return t;
}
const {
  toString: A
} = {};
function C(e) {
  return A.call(e).slice(8, -1);
}
const j = typeof Symbol != "undefined" ? Symbol.iterator : "@@iterator";
const D = typeof j == "symbol" ? function (e) {
  var t;
  return e != null && (t = e[j]) && t.apply(e);
} : function () {
  return null;
};
const I = {};
function B(e) {
  var t;
  var r;
  var s;
  var i;
  if (arguments.length === 1) {
    if (n(e)) {
      return e.slice();
    }
    if (this === I && typeof e == "string") {
      return [e];
    }
    if (i = D(e)) {
      for (r = []; !(s = i.next()).done;) {
        r.push(s.value);
      }
      return r;
    }
    if (e == null) {
      return [e];
    }
    if (typeof (t = e.length) == "number") {
      for (r = new Array(t); t--;) {
        r[t] = e[t];
      }
      return r;
    }
    return [e];
  }
  t = arguments.length;
  r = new Array(t);
  while (t--) {
    r[t] = arguments[t];
  }
  return r;
}
const T = typeof Symbol != "undefined" ? e => e[Symbol.toStringTag] === "AsyncFunction" : () => false;
var R = typeof location != "undefined" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
function F(e, t) {
  R = e;
  M = t;
}
var M = () => true;
const N = !new Error("").stack;
function q() {
  if (N) {
    try {
      q.arguments;
      throw new Error();
    } catch (e) {
      return e;
    }
  }
  return new Error();
}
function $(e, t) {
  var n = e.stack;
  if (n) {
    t = t || 0;
    if (n.indexOf(e.name) === 0) {
      t += (e.name + e.message).split("\n").length;
    }
    return n.split("\n").slice(t).filter(M).map(e => "\n" + e).join("");
  } else {
    return "";
  }
}
var U = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"];
var L = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(U);
var V = {
  VersionChanged: "Database version changed by other database connection",
  DatabaseClosed: "Database has been closed",
  Abort: "Transaction aborted",
  TransactionInactive: "Transaction has already completed or failed",
  MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
};
function W(e, t) {
  this._e = q();
  this.name = e;
  this.message = t;
}
function Y(e, t) {
  return e + ". Errors: " + Object.keys(t).map(e => t[e].toString()).filter((e, t, n) => n.indexOf(e) === t).join("\n");
}
function z(e, t, n, r) {
  this._e = q();
  this.failures = t;
  this.failedKeys = r;
  this.successCount = n;
  this.message = Y(e, t);
}
function G(e, t) {
  this._e = q();
  this.name = "BulkError";
  this.failures = Object.keys(t).map(e => t[e]);
  this.failuresByPos = t;
  this.message = Y(e, t);
}
c(W).from(Error).extend({
  stack: {
    get: function () {
      return this._stack ||= this.name + ": " + this.message + $(this._e, 2);
    }
  },
  toString: function () {
    return this.name + ": " + this.message;
  }
});
c(z).from(W);
c(G).from(W);
var H = L.reduce((e, t) => {
  e[t] = t + "Error";
  return e;
}, {});
const X = W;
var Q = L.reduce((e, t) => {
  var n = t + "Error";
  function r(e, r) {
    this._e = q();
    this.name = n;
    if (e) {
      if (typeof e == "string") {
        this.message = `${e}${r ? "\n " + r : ""}`;
        this.inner = r || null;
      } else if (typeof e == "object") {
        this.message = `${e.name} ${e.message}`;
        this.inner = e;
      }
    } else {
      this.message = V[t] || n;
      this.inner = null;
    }
  }
  c(r).from(X);
  e[t] = r;
  return e;
}, {});
Q.Syntax = SyntaxError;
Q.Type = TypeError;
Q.Range = RangeError;
var J = U.reduce((e, t) => {
  e[t + "Error"] = Q[t];
  return e;
}, {});
var Z = L.reduce((e, t) => {
  if (["Syntax", "Type", "Range"].indexOf(t) === -1) {
    e[t + "Error"] = Q[t];
  }
  return e;
}, {});
function ee() {}
function te(e) {
  return e;
}
function ne(e, t) {
  if (e == null || e === te) {
    return t;
  } else {
    return function (n) {
      return t(e(n));
    };
  }
}
function re(e, t) {
  return function () {
    e.apply(this, arguments);
    t.apply(this, arguments);
  };
}
function se(e, t) {
  if (e === ee) {
    return t;
  } else {
    return function () {
      var n = e.apply(this, arguments);
      if (n !== undefined) {
        arguments[0] = n;
      }
      var r = this.onsuccess;
      var s = this.onerror;
      this.onsuccess = null;
      this.onerror = null;
      var i = t.apply(this, arguments);
      if (r) {
        this.onsuccess = this.onsuccess ? re(r, this.onsuccess) : r;
      }
      if (s) {
        this.onerror = this.onerror ? re(s, this.onerror) : s;
      }
      if (i !== undefined) {
        return i;
      } else {
        return n;
      }
    };
  }
}
function ie(e, t) {
  if (e === ee) {
    return t;
  } else {
    return function () {
      e.apply(this, arguments);
      var n = this.onsuccess;
      var r = this.onerror;
      this.onsuccess = this.onerror = null;
      t.apply(this, arguments);
      if (n) {
        this.onsuccess = this.onsuccess ? re(n, this.onsuccess) : n;
      }
      if (r) {
        this.onerror = this.onerror ? re(r, this.onerror) : r;
      }
    };
  }
}
function oe(e, t) {
  if (e === ee) {
    return t;
  } else {
    return function (n) {
      var s = e.apply(this, arguments);
      r(n, s);
      var i = this.onsuccess;
      var o = this.onerror;
      this.onsuccess = null;
      this.onerror = null;
      var a = t.apply(this, arguments);
      if (i) {
        this.onsuccess = this.onsuccess ? re(i, this.onsuccess) : i;
      }
      if (o) {
        this.onerror = this.onerror ? re(o, this.onerror) : o;
      }
      if (s === undefined) {
        if (a === undefined) {
          return undefined;
        } else {
          return a;
        }
      } else {
        return r(s, a);
      }
    };
  }
}
function ae(e, t) {
  if (e === ee) {
    return t;
  } else {
    return function () {
      return t.apply(this, arguments) !== false && e.apply(this, arguments);
    };
  }
}
function ue(e, t) {
  if (e === ee) {
    return t;
  } else {
    return function () {
      var n = e.apply(this, arguments);
      if (n && typeof n.then == "function") {
        var r = this;
        for (var s = arguments.length, i = new Array(s); s--;) {
          i[s] = arguments[s];
        }
        return n.then(function () {
          return t.apply(r, i);
        });
      }
      return t.apply(this, arguments);
    };
  }
}
Z.ModifyError = z;
Z.DexieError = W;
Z.BulkError = G;
var le = {};
const [ce, he, de] = typeof Promise == "undefined" ? [] : (() => {
  let e = Promise.resolve();
  if (typeof crypto == "undefined" || !crypto.subtle) {
    return [e, s(e), e];
  }
  const t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
  return [t, s(t), e];
})();
const fe = he && he.then;
const pe = ce && ce.constructor;
const ye = !!de;
var me = false;
var ve = de ? () => {
  de.then(qe);
} : e.setImmediate ? setImmediate.bind(null, qe) : e.MutationObserver ? () => {
  var e = document.createElement("div");
  new MutationObserver(() => {
    qe();
    e = null;
  }).observe(e, {
    attributes: true
  });
  e.setAttribute("i", "1");
} : () => {
  setTimeout(qe, 0);
};
var ge = function (e, t) {
  Oe.push([e, t]);
  if (_e) {
    ve();
    _e = false;
  }
};
var be = true;
var _e = true;
var we = [];
var xe = [];
var ke = null;
var Ee = te;
var Pe = {
  id: "global",
  global: true,
  ref: 0,
  unhandleds: [],
  onunhandled: ht,
  pgp: false,
  env: {},
  finalize: function () {
    this.unhandleds.forEach(e => {
      try {
        ht(e[0], e[1]);
      } catch (t) {}
    });
  }
};
var Ke = Pe;
var Oe = [];
var Se = 0;
var Ae = [];
function Ce(e) {
  if (typeof this != "object") {
    throw new TypeError("Promises must be constructed via new");
  }
  this._listeners = [];
  this.onuncatched = ee;
  this._lib = false;
  var t = this._PSD = Ke;
  if (R) {
    this._stackHolder = q();
    this._prev = null;
    this._numPrev = 0;
  }
  if (typeof e != "function") {
    if (e !== le) {
      throw new TypeError("Not a function");
    }
    this._state = arguments[1];
    this._value = arguments[2];
    if (this._state === false) {
      Be(this, this._value);
    }
    return;
  }
  this._state = null;
  this._value = null;
  ++t.ref;
  Ie(this, e);
}
const je = {
  get: function () {
    var e = Ke;
    var t = Xe;
    function n(n, r) {
      var s = !e.global && (e !== Ke || t !== Xe);
      const i = s && !et();
      var o = new Ce((t, o) => {
        Re(this, new De(ut(n, e, s, i), ut(r, e, s, i), t, o, e));
      });
      if (R) {
        Ne(o, this);
      }
      return o;
    }
    n.prototype = le;
    return n;
  },
  set: function (e) {
    l(this, "then", e && e.prototype === le ? je : {
      get: function () {
        return e;
      },
      set: je.set
    });
  }
};
function De(e, t, n, r, s) {
  this.onFulfilled = typeof e == "function" ? e : null;
  this.onRejected = typeof t == "function" ? t : null;
  this.resolve = n;
  this.reject = r;
  this.psd = s;
}
function Ie(e, t) {
  try {
    t(t => {
      if (e._state === null) {
        if (t === e) {
          throw new TypeError("A promise cannot be resolved with itself.");
        }
        var n = e._lib && $e();
        if (t && typeof t.then == "function") {
          Ie(e, (e, n) => {
            if (t instanceof Ce) {
              t._then(e, n);
            } else {
              t.then(e, n);
            }
          });
        } else {
          e._state = true;
          e._value = t;
          Te(e);
        }
        if (n) {
          Ue();
        }
      }
    }, Be.bind(null, e));
  } catch (n) {
    Be(e, n);
  }
}
function Be(e, t) {
  xe.push(t);
  if (e._state === null) {
    var n = e._lib && $e();
    t = Ee(t);
    e._state = false;
    e._value = t;
    if (R && t !== null && typeof t == "object" && !t._promise) {
      (function () {
        try {
          (() => {
            var n = d(t, "stack");
            t._promise = e;
            l(t, "stack", {
              get: () => me ? n && (n.get ? n.get.apply(t) : n.value) : e.stack
            });
          }).apply(null, undefined);
        } catch (n) {}
      })();
    }
    r = e;
    if (!we.some(e => e._value === r._value)) {
      we.push(r);
    }
    Te(e);
    if (n) {
      Ue();
    }
  }
  var r;
}
function Te(e) {
  var t = e._listeners;
  e._listeners = [];
  for (var n = 0, r = t.length; n < r; ++n) {
    Re(e, t[n]);
  }
  var s = e._PSD;
  if (! --s.ref) {
    s.finalize();
  }
  if (Se === 0) {
    ++Se;
    ge(() => {
      if (--Se == 0) {
        Le();
      }
    }, []);
  }
}
function Re(e, t) {
  if (e._state !== null) {
    var n = e._state ? t.onFulfilled : t.onRejected;
    if (n === null) {
      return (e._state ? t.resolve : t.reject)(e._value);
    }
    ++t.psd.ref;
    ++Se;
    ge(Fe, [n, e, t]);
  } else {
    e._listeners.push(t);
  }
}
function Fe(e, t, n) {
  try {
    ke = t;
    var r;
    var s = t._value;
    if (t._state) {
      r = e(s);
    } else {
      if (xe.length) {
        xe = [];
      }
      r = e(s);
      if (xe.indexOf(s) === -1) {
        (function (e) {
          for (var t = we.length; t;) {
            if (we[--t]._value === e._value) {
              we.splice(t, 1);
              return;
            }
          }
        })(t);
      }
    }
    n.resolve(r);
  } catch (i) {
    n.reject(i);
  } finally {
    ke = null;
    if (--Se == 0) {
      Le();
    }
    if (! --n.psd.ref) {
      n.psd.finalize();
    }
  }
}
function Me(e, t, n) {
  if (t.length === n) {
    return t;
  }
  var r = "";
  if (e._state === false) {
    var s;
    var i;
    var o = e._value;
    if (o != null) {
      s = o.name || "Error";
      i = o.message || o;
      r = $(o, 0);
    } else {
      s = o;
      i = "";
    }
    t.push(s + (i ? ": " + i : "") + r);
  }
  if (R) {
    if ((r = $(e._stackHolder, 2)) && t.indexOf(r) === -1) {
      t.push(r);
    }
    if (e._prev) {
      Me(e._prev, t, n);
    }
  }
  return t;
}
function Ne(e, t) {
  var n = t ? t._numPrev + 1 : 0;
  if (n < 100) {
    e._prev = t;
    e._numPrev = n;
  }
}
function qe() {
  if ($e()) {
    Ue();
  }
}
function $e() {
  var e = be;
  be = false;
  _e = false;
  return e;
}
function Ue() {
  var e;
  var t;
  var n;
  do {
    while (Oe.length > 0) {
      e = Oe;
      Oe = [];
      n = e.length;
      t = 0;
      for (; t < n; ++t) {
        var r = e[t];
        r[0].apply(null, r[1]);
      }
    }
  } while (Oe.length > 0);
  be = true;
  _e = true;
}
function Le() {
  var e = we;
  we = [];
  e.forEach(e => {
    e._PSD.onunhandled.call(null, e._value, e);
  });
  var t = Ae.slice(0);
  for (var n = t.length; n;) {
    t[--n]();
  }
}
function Ve(e) {
  return new Ce(le, false, e);
}
function We(e, t) {
  var n = Ke;
  return function () {
    var r = $e();
    var s = Ke;
    try {
      st(n, true);
      return e.apply(this, arguments);
    } catch (i) {
      if (t) {
        t(i);
      }
    } finally {
      st(s, false);
      if (r) {
        Ue();
      }
    }
  };
}
a(Ce.prototype, {
  then: je,
  _then: function (e, t) {
    Re(this, new De(null, null, e, t, Ke));
  },
  catch: function (e) {
    if (arguments.length === 1) {
      return this.then(null, e);
    }
    var t = arguments[0];
    var n = arguments[1];
    if (typeof t == "function") {
      return this.then(null, e => e instanceof t ? n(e) : Ve(e));
    } else {
      return this.then(null, e => e && e.name === t ? n(e) : Ve(e));
    }
  },
  finally: function (e) {
    return this.then(t => {
      e();
      return t;
    }, t => {
      e();
      return Ve(t);
    });
  },
  stack: {
    get: function () {
      if (this._stack) {
        return this._stack;
      }
      try {
        me = true;
        var e = Me(this, [], 20).join("\nFrom previous: ");
        if (this._state !== null) {
          this._stack = e;
        }
        return e;
      } finally {
        me = false;
      }
    }
  },
  timeout: function (e, t) {
    if (e < Infinity) {
      return new Ce((n, r) => {
        var s = setTimeout(() => r(new Q.Timeout(t)), e);
        this.then(n, r).finally(clearTimeout.bind(null, s));
      });
    } else {
      return this;
    }
  }
});
if (typeof Symbol != "undefined" && Symbol.toStringTag) {
  l(Ce.prototype, Symbol.toStringTag, "Dexie.Promise");
}
Pe.env = it();
a(Ce, {
  all: function () {
    var e = B.apply(null, arguments).map(tt);
    return new Ce(function (t, n) {
      if (e.length === 0) {
        t([]);
      }
      var r = e.length;
      e.forEach((s, i) => Ce.resolve(s).then(n => {
        e[i] = n;
        if (! --r) {
          t(e);
        }
      }, n));
    });
  },
  resolve: e => {
    if (e instanceof Ce) {
      return e;
    }
    if (e && typeof e.then == "function") {
      return new Ce((t, n) => {
        e.then(t, n);
      });
    }
    var t = new Ce(le, true, e);
    Ne(t, ke);
    return t;
  },
  reject: Ve,
  race: function () {
    var e = B.apply(null, arguments).map(tt);
    return new Ce((t, n) => {
      e.map(e => Ce.resolve(e).then(t, n));
    });
  },
  PSD: {
    get: () => Ke,
    set: e => Ke = e
  },
  totalEchoes: {
    get: () => Xe
  },
  newPSD: Je,
  usePSD: ot,
  scheduler: {
    get: () => ge,
    set: e => {
      ge = e;
    }
  },
  rejectionMapper: {
    get: () => Ee,
    set: e => {
      Ee = e;
    }
  },
  follow: (e, t) => new Ce((n, r) => Je((t, n) => {
    var r = Ke;
    r.unhandleds = [];
    r.onunhandled = n;
    r.finalize = re(function () {
      var e;
      e = () => {
        if (this.unhandleds.length === 0) {
          t();
        } else {
          n(this.unhandleds[0]);
        }
      };
      Ae.push(function t() {
        e();
        Ae.splice(Ae.indexOf(t), 1);
      });
      ++Se;
      ge(() => {
        if (--Se == 0) {
          Le();
        }
      }, []);
    }, r.finalize);
    e();
  }, t, n, r))
});
if (pe) {
  if (pe.allSettled) {
    l(Ce, "allSettled", function () {
      const e = B.apply(null, arguments).map(tt);
      return new Ce(t => {
        if (e.length === 0) {
          t([]);
        }
        let n = e.length;
        const r = new Array(n);
        e.forEach((e, s) => Ce.resolve(e).then(e => r[s] = {
          status: "fulfilled",
          value: e
        }, e => r[s] = {
          status: "rejected",
          reason: e
        }).then(() => --n || t(r)));
      });
    });
  }
  if (pe.any && typeof AggregateError != "undefined") {
    l(Ce, "any", function () {
      const e = B.apply(null, arguments).map(tt);
      return new Ce((t, n) => {
        if (e.length === 0) {
          n(new AggregateError([]));
        }
        let r = e.length;
        const s = new Array(r);
        e.forEach((e, i) => Ce.resolve(e).then(e => t(e), e => {
          s[i] = e;
          if (! --r) {
            n(new AggregateError(s));
          }
        }));
      });
    });
  }
}
const Ye = {
  awaits: 0,
  echoes: 0,
  id: 0
};
var ze = 0;
var Ge = [];
var He = 0;
var Xe = 0;
var Qe = 0;
function Je(e, t, n, s) {
  var i = Ke;
  var o = Object.create(i);
  o.parent = i;
  o.ref = 0;
  o.global = false;
  o.id = ++Qe;
  var a = Pe.env;
  o.env = ye ? {
    Promise: Ce,
    PromiseProp: {
      value: Ce,
      configurable: true,
      writable: true
    },
    all: Ce.all,
    race: Ce.race,
    allSettled: Ce.allSettled,
    any: Ce.any,
    resolve: Ce.resolve,
    reject: Ce.reject,
    nthen: lt(a.nthen, o),
    gthen: lt(a.gthen, o)
  } : {};
  if (t) {
    r(o, t);
  }
  ++i.ref;
  o.finalize = function () {
    if (! --this.parent.ref) {
      this.parent.finalize();
    }
  };
  var u = ot(o, e, n, s);
  if (o.ref === 0) {
    o.finalize();
  }
  return u;
}
function Ze() {
  Ye.id ||= ++ze;
  ++Ye.awaits;
  Ye.echoes += 100;
  return Ye.id;
}
function et() {
  return !!Ye.awaits && (--Ye.awaits == 0 && (Ye.id = 0), Ye.echoes = Ye.awaits * 100, true);
}
function tt(e) {
  if (Ye.echoes && e && e.constructor === pe) {
    Ze();
    return e.then(e => {
      et();
      return e;
    }, e => {
      et();
      return dt(e);
    });
  } else {
    return e;
  }
}
function nt(e) {
  ++Xe;
  if (!Ye.echoes || --Ye.echoes == 0) {
    Ye.echoes = Ye.id = 0;
  }
  Ge.push(Ke);
  st(e, true);
}
function rt() {
  var e = Ge[Ge.length - 1];
  Ge.pop();
  st(e, false);
}
function st(t, n) {
  var r = Ke;
  if (!(n ? !Ye.echoes || He++ && t === Ke : !He || --He && t === Ke)) {
    at(n ? nt.bind(null, t) : rt);
  }
  if (t !== Ke && (Ke = t, r === Pe && (Pe.env = it()), ye)) {
    var s = Pe.env.Promise;
    var i = t.env;
    he.then = i.nthen;
    s.prototype.then = i.gthen;
    if (r.global || t.global) {
      Object.defineProperty(e, "Promise", i.PromiseProp);
      s.all = i.all;
      s.race = i.race;
      s.resolve = i.resolve;
      s.reject = i.reject;
      if (i.allSettled) {
        s.allSettled = i.allSettled;
      }
      if (i.any) {
        s.any = i.any;
      }
    }
  }
}
function it() {
  var t = e.Promise;
  if (ye) {
    return {
      Promise: t,
      PromiseProp: Object.getOwnPropertyDescriptor(e, "Promise"),
      all: t.all,
      race: t.race,
      allSettled: t.allSettled,
      any: t.any,
      resolve: t.resolve,
      reject: t.reject,
      nthen: he.then,
      gthen: t.prototype.then
    };
  } else {
    return {};
  }
}
function ot(e, t, n, r, s) {
  var i = Ke;
  try {
    st(e, true);
    return t(n, r, s);
  } finally {
    st(i, false);
  }
}
function at(e) {
  fe.call(ce, e);
}
function ut(e, t, n, r) {
  if (typeof e != "function") {
    return e;
  } else {
    return function () {
      var s = Ke;
      if (n) {
        Ze();
      }
      st(t, true);
      try {
        return e.apply(this, arguments);
      } finally {
        st(s, false);
        if (r) {
          at(et);
        }
      }
    };
  }
}
function lt(e, t) {
  return function (n, r) {
    return e.call(this, ut(n, t), ut(r, t));
  };
}
if (("" + fe).indexOf("[native code]") === -1) {
  Ze = et = ee;
}
const ct = "unhandledrejection";
function ht(t, n) {
  var s;
  try {
    s = n.onuncatched(t);
  } catch (a) {}
  if (s !== false) {
    try {
      var i;
      var o = {
        promise: n,
        reason: t
      };
      if (e.document && document.createEvent) {
        (i = document.createEvent("Event")).initEvent(ct, true, true);
        r(i, o);
      } else if (e.CustomEvent) {
        r(i = new CustomEvent(ct, {
          detail: o
        }), o);
      }
      if (i && e.dispatchEvent && (dispatchEvent(i), !e.PromiseRejectionEvent && e.onunhandledrejection)) {
        try {
          e.onunhandledrejection(i);
        } catch (a) {}
      }
      if (R && i && !i.defaultPrevented) {
        console.warn(`Unhandled rejection: ${t.stack || t}`);
      }
    } catch (a) {}
  }
}
var dt = Ce.reject;
function ft(e, t, n, r) {
  if (e.idbdb && (e._state.openComplete || Ke.letThrough || e._vip)) {
    var s = e._createTransaction(t, n, e._dbSchema);
    try {
      s.create();
      e._state.PR1398_maxLoop = 3;
    } catch (i) {
      if (i.name === H.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0) {
        console.warn("Dexie: Need to reopen db");
        e._close();
        return e.open().then(() => ft(e, t, n, r));
      } else {
        return dt(i);
      }
    }
    return s._promise(t, (e, t) => Je(() => {
      Ke.trans = s;
      return r(e, t, s);
    })).then(e => s._completion.then(() => e));
  }
  if (e._state.openComplete) {
    return dt(new Q.DatabaseClosed(e._state.dbOpenError));
  }
  if (!e._state.isBeingOpened) {
    if (!e._options.autoOpen) {
      return dt(new Q.DatabaseClosed());
    }
    e.open().catch(ee);
  }
  return e._state.dbReadyPromise.then(() => ft(e, t, n, r));
}
const pt = "3.2.7";
const yt = String.fromCharCode(65535);
const mt = -Infinity;
const vt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
const gt = "String expected.";
const bt = [];
const _t = typeof navigator != "undefined" && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
const wt = _t;
const xt = _t;
const kt = e => !/(dexie\.js|dexie\.min\.js)/.test(e);
const Et = "__dbnames";
const Pt = "readonly";
const Kt = "readwrite";
function Ot(e, t) {
  if (e) {
    if (t) {
      return function () {
        return e.apply(this, arguments) && t.apply(this, arguments);
      };
    } else {
      return e;
    }
  } else {
    return t;
  }
}
const St = {
  type: 3,
  lower: -Infinity,
  lowerOpen: false,
  upper: [[]],
  upperOpen: false
};
function At(e) {
  if (typeof e != "string" || /\./.test(e)) {
    return e => e;
  } else {
    return t => {
      if (t[e] === undefined && e in t) {
        delete (t = O(t))[e];
      }
      return t;
    };
  }
}
class Ct {
  _trans(e, t, n) {
    const r = this._tx || Ke.trans;
    const s = this.name;
    function i(e, n, r) {
      if (!r.schema[s]) {
        throw new Q.NotFound("Table " + s + " not part of transaction");
      }
      return t(r.idbtrans, r);
    }
    const o = $e();
    try {
      if (r && r.db === this.db) {
        if (r === Ke.trans) {
          return r._promise(e, i, n);
        } else {
          return Je(() => r._promise(e, i, n), {
            trans: r,
            transless: Ke.transless || Ke
          });
        }
      } else {
        return ft(this.db, e, [this.name], i);
      }
    } finally {
      if (o) {
        Ue();
      }
    }
  }
  get(e, t) {
    if (e && e.constructor === Object) {
      return this.where(e).first(t);
    } else {
      return this._trans("readonly", t => this.core.get({
        trans: t,
        key: e
      }).then(e => this.hook.reading.fire(e))).then(t);
    }
  }
  where(e) {
    if (typeof e == "string") {
      return new this.db.WhereClause(this, e);
    }
    if (n(e)) {
      return new this.db.WhereClause(this, `[${e.join("+")}]`);
    }
    const r = t(e);
    if (r.length === 1) {
      return this.where(r[0]).equals(e[r[0]]);
    }
    const s = this.schema.indexes.concat(this.schema.primKey).filter(e => {
      if (e.compound && r.every(t => e.keyPath.indexOf(t) >= 0)) {
        for (let t = 0; t < r.length; ++t) {
          if (r.indexOf(e.keyPath[t]) === -1) {
            return false;
          }
        }
        return true;
      }
      return false;
    }).sort((e, t) => e.keyPath.length - t.keyPath.length)[0];
    if (s && this.db._maxKey !== yt) {
      const t = s.keyPath.slice(0, r.length);
      return this.where(t).equals(t.map(t => e[t]));
    }
    if (!s && R) {
      console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${r.join("+")}]`);
    }
    const {
      idxByName: i
    } = this.schema;
    const o = this.db._deps.indexedDB;
    function a(e, t) {
      try {
        return o.cmp(e, t) === 0;
      } catch (n) {
        return false;
      }
    }
    const [u, l] = r.reduce(([t, r], s) => {
      const o = i[s];
      const u = e[s];
      return [t || o, t || !o ? Ot(r, o && o.multi ? e => {
        const t = b(e, s);
        return n(t) && t.some(e => a(u, e));
      } : e => a(u, b(e, s))) : r];
    }, [null, null]);
    if (u) {
      return this.where(u.name).equals(e[u.keyPath]).filter(l);
    } else if (s) {
      return this.filter(l);
    } else {
      return this.where(r).equals("");
    }
  }
  filter(e) {
    return this.toCollection().and(e);
  }
  count(e) {
    return this.toCollection().count(e);
  }
  offset(e) {
    return this.toCollection().offset(e);
  }
  limit(e) {
    return this.toCollection().limit(e);
  }
  each(e) {
    return this.toCollection().each(e);
  }
  toArray(e) {
    return this.toCollection().toArray(e);
  }
  toCollection() {
    return new this.db.Collection(new this.db.WhereClause(this));
  }
  orderBy(e) {
    return new this.db.Collection(new this.db.WhereClause(this, n(e) ? `[${e.join("+")}]` : e));
  }
  reverse() {
    return this.toCollection().reverse();
  }
  mapToClass(e) {
    this.schema.mappedClass = e;
    const t = t => {
      if (!t) {
        return t;
      }
      const n = Object.create(e.prototype);
      for (var r in t) {
        if (o(t, r)) {
          try {
            n[r] = t[r];
          } catch (s) {}
        }
      }
      return n;
    };
    if (this.schema.readHook) {
      this.hook.reading.unsubscribe(this.schema.readHook);
    }
    this.schema.readHook = t;
    this.hook("reading", t);
    return e;
  }
  defineClass() {
    return this.mapToClass(function (e) {
      r(this, e);
    });
  }
  add(e, t) {
    const {
      auto: n,
      keyPath: r
    } = this.schema.primKey;
    let s = e;
    if (r && n) {
      s = At(r)(e);
    }
    return this._trans("readwrite", e => this.core.mutate({
      trans: e,
      type: "add",
      keys: t != null ? [t] : null,
      values: [s]
    })).then(e => e.numFailures ? Ce.reject(e.failures[0]) : e.lastResult).then(t => {
      if (r) {
        try {
          _(e, r, t);
        } catch (n) {}
      }
      return t;
    });
  }
  update(e, r) {
    if (typeof e != "object" || n(e)) {
      return this.where(":id").equals(e).modify(r);
    }
    {
      const n = b(e, this.schema.primKey.keyPath);
      if (n === undefined) {
        return dt(new Q.InvalidArgument("Given object does not contain its primary key"));
      }
      try {
        if (typeof r != "function") {
          t(r).forEach(t => {
            _(e, t, r[t]);
          });
        } else {
          r(e, {
            value: e,
            primKey: n
          });
        }
      } catch (s) {}
      return this.where(":id").equals(n).modify(r);
    }
  }
  put(e, t) {
    const {
      auto: n,
      keyPath: r
    } = this.schema.primKey;
    let s = e;
    if (r && n) {
      s = At(r)(e);
    }
    return this._trans("readwrite", e => this.core.mutate({
      trans: e,
      type: "put",
      values: [s],
      keys: t != null ? [t] : null
    })).then(e => e.numFailures ? Ce.reject(e.failures[0]) : e.lastResult).then(t => {
      if (r) {
        try {
          _(e, r, t);
        } catch (n) {}
      }
      return t;
    });
  }
  delete(e) {
    return this._trans("readwrite", t => this.core.mutate({
      trans: t,
      type: "delete",
      keys: [e]
    })).then(e => e.numFailures ? Ce.reject(e.failures[0]) : undefined);
  }
  clear() {
    return this._trans("readwrite", e => this.core.mutate({
      trans: e,
      type: "deleteRange",
      range: St
    })).then(e => e.numFailures ? Ce.reject(e.failures[0]) : undefined);
  }
  bulkGet(e) {
    return this._trans("readonly", t => this.core.getMany({
      keys: e,
      trans: t
    }).then(e => e.map(e => this.hook.reading.fire(e))));
  }
  bulkAdd(e, t, n) {
    const r = Array.isArray(t) ? t : undefined;
    const s = (n = n || (r ? undefined : t)) ? n.allKeys : undefined;
    return this._trans("readwrite", t => {
      const {
        auto: n,
        keyPath: i
      } = this.schema.primKey;
      if (i && r) {
        throw new Q.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
      }
      if (r && r.length !== e.length) {
        throw new Q.InvalidArgument("Arguments objects and keys must have the same length");
      }
      const o = e.length;
      let a = i && n ? e.map(At(i)) : e;
      return this.core.mutate({
        trans: t,
        type: "add",
        keys: r,
        values: a,
        wantResults: s
      }).then(({
        numFailures: e,
        results: t,
        lastResult: n,
        failures: r
      }) => {
        if (e === 0) {
          if (s) {
            return t;
          } else {
            return n;
          }
        }
        throw new G(`${this.name}.bulkAdd(): ${e} of ${o} operations failed`, r);
      });
    });
  }
  bulkPut(e, t, n) {
    const r = Array.isArray(t) ? t : undefined;
    const s = (n = n || (r ? undefined : t)) ? n.allKeys : undefined;
    return this._trans("readwrite", t => {
      const {
        auto: n,
        keyPath: i
      } = this.schema.primKey;
      if (i && r) {
        throw new Q.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
      }
      if (r && r.length !== e.length) {
        throw new Q.InvalidArgument("Arguments objects and keys must have the same length");
      }
      const o = e.length;
      let a = i && n ? e.map(At(i)) : e;
      return this.core.mutate({
        trans: t,
        type: "put",
        keys: r,
        values: a,
        wantResults: s
      }).then(({
        numFailures: e,
        results: t,
        lastResult: n,
        failures: r
      }) => {
        if (e === 0) {
          if (s) {
            return t;
          } else {
            return n;
          }
        }
        throw new G(`${this.name}.bulkPut(): ${e} of ${o} operations failed`, r);
      });
    });
  }
  bulkDelete(e) {
    const t = e.length;
    return this._trans("readwrite", t => this.core.mutate({
      trans: t,
      type: "delete",
      keys: e
    })).then(({
      numFailures: e,
      lastResult: n,
      failures: r
    }) => {
      if (e === 0) {
        return n;
      }
      throw new G(`${this.name}.bulkDelete(): ${e} of ${t} operations failed`, r);
    });
  }
}
function jt(e) {
  var r = {};
  var s = function (t, n) {
    if (n) {
      for (var s = arguments.length, i = new Array(s - 1); --s;) {
        i[s - 1] = arguments[s];
      }
      r[t].subscribe.apply(null, i);
      return e;
    }
    if (typeof t == "string") {
      return r[t];
    }
  };
  s.addEventType = a;
  for (var i = 1, o = arguments.length; i < o; ++i) {
    a(arguments[i]);
  }
  return s;
  function a(e, i, o) {
    if (typeof e != "object") {
      var u;
      i ||= ae;
      o ||= ee;
      var l = {
        subscribers: [],
        fire: o,
        subscribe: function (e) {
          if (l.subscribers.indexOf(e) === -1) {
            l.subscribers.push(e);
            l.fire = i(l.fire, e);
          }
        },
        unsubscribe: function (e) {
          l.subscribers = l.subscribers.filter(function (t) {
            return t !== e;
          });
          l.fire = l.subscribers.reduce(i, o);
        }
      };
      r[e] = s[e] = l;
      return l;
    }
    t(u = e).forEach(function (e) {
      var t = u[e];
      if (n(t)) {
        a(e, u[e][0], u[e][1]);
      } else {
        if (t !== "asap") {
          throw new Q.InvalidArgument("Invalid event config");
        }
        var r = a(e, te, function () {
          for (var e = arguments.length, t = new Array(e); e--;) {
            t[e] = arguments[e];
          }
          r.subscribers.forEach(function (e) {
            v(function () {
              e.apply(null, t);
            });
          });
        });
      }
    });
  }
}
function Dt(e, t) {
  c(t).from({
    prototype: e
  });
  return t;
}
function It(e, t) {
  return !e.filter && !e.algorithm && !e.or && (t ? e.justLimit : !e.replayFilter);
}
function Bt(e, t) {
  e.filter = Ot(e.filter, t);
}
function Tt(e, t, n) {
  var r = e.replayFilter;
  e.replayFilter = r ? () => Ot(r(), t()) : t;
  e.justLimit = n && !r;
}
function Rt(e, t) {
  if (e.isPrimKey) {
    return t.primaryKey;
  }
  const n = t.getIndexByKeyPath(e.index);
  if (!n) {
    throw new Q.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
  }
  return n;
}
function Ft(e, t, n) {
  const r = Rt(e, t.schema);
  return t.openCursor({
    trans: n,
    values: !e.keysOnly,
    reverse: e.dir === "prev",
    unique: !!e.unique,
    query: {
      index: r,
      range: e.range
    }
  });
}
function Mt(e, t, n, r) {
  const s = e.replayFilter ? Ot(e.filter, e.replayFilter()) : e.filter;
  if (e.or) {
    const i = {};
    const a = (e, n, r) => {
      if (!s || s(n, r, e => n.stop(e), e => n.fail(e))) {
        var a = n.primaryKey;
        var u = "" + a;
        if (u === "[object ArrayBuffer]") {
          u = "" + new Uint8Array(a);
        }
        if (!o(i, u)) {
          i[u] = true;
          t(e, n, r);
        }
      }
    };
    return Promise.all([e.or._iterate(a, n), Nt(Ft(e, r, n), e.algorithm, a, !e.keysOnly && e.valueMapper)]);
  }
  return Nt(Ft(e, r, n), Ot(e.algorithm, s), t, !e.keysOnly && e.valueMapper);
}
function Nt(e, t, n, r) {
  var s = We(r ? (e, t, s) => n(r(e), t, s) : n);
  return e.then(e => {
    if (e) {
      return e.start(() => {
        var n = () => e.continue();
        if (!t || !!t(e, e => n = e, t => {
          e.stop(t);
          n = ee;
        }, t => {
          e.fail(t);
          n = ee;
        })) {
          s(e.value, e, e => n = e);
        }
        n();
      });
    }
  });
}
function qt(e, t) {
  try {
    const n = $t(e);
    const r = $t(t);
    if (n !== r) {
      if (n === "Array") {
        return 1;
      } else if (r === "Array") {
        return -1;
      } else if (n === "binary") {
        return 1;
      } else if (r === "binary") {
        return -1;
      } else if (n === "string") {
        return 1;
      } else if (r === "string") {
        return -1;
      } else if (n === "Date") {
        return 1;
      } else if (r !== "Date") {
        return NaN;
      } else {
        return -1;
      }
    }
    switch (n) {
      case "number":
      case "Date":
      case "string":
        if (e > t) {
          return 1;
        } else if (e < t) {
          return -1;
        } else {
          return 0;
        }
      case "binary":
        return function (e, t) {
          const n = e.length;
          const r = t.length;
          const s = n < r ? n : r;
          for (let i = 0; i < s; ++i) {
            if (e[i] !== t[i]) {
              if (e[i] < t[i]) {
                return -1;
              } else {
                return 1;
              }
            }
          }
          if (n === r) {
            return 0;
          } else if (n < r) {
            return -1;
          } else {
            return 1;
          }
        }(Ut(e), Ut(t));
      case "Array":
        return function (e, t) {
          const n = e.length;
          const r = t.length;
          const s = n < r ? n : r;
          for (let i = 0; i < s; ++i) {
            const n = qt(e[i], t[i]);
            if (n !== 0) {
              return n;
            }
          }
          if (n === r) {
            return 0;
          } else if (n < r) {
            return -1;
          } else {
            return 1;
          }
        }(e, t);
    }
  } catch (n) {}
  return NaN;
}
function $t(e) {
  const t = typeof e;
  if (t !== "object") {
    return t;
  }
  if (ArrayBuffer.isView(e)) {
    return "binary";
  }
  const n = C(e);
  if (n === "ArrayBuffer") {
    return "binary";
  } else {
    return n;
  }
}
function Ut(e) {
  if (e instanceof Uint8Array) {
    return e;
  } else if (ArrayBuffer.isView(e)) {
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  } else {
    return new Uint8Array(e);
  }
}
class Lt {
  _read(e, t) {
    var n = this._ctx;
    if (n.error) {
      return n.table._trans(null, dt.bind(null, n.error));
    } else {
      return n.table._trans("readonly", e).then(t);
    }
  }
  _write(e) {
    var t = this._ctx;
    if (t.error) {
      return t.table._trans(null, dt.bind(null, t.error));
    } else {
      return t.table._trans("readwrite", e, "locked");
    }
  }
  _addAlgorithm(e) {
    var t = this._ctx;
    t.algorithm = Ot(t.algorithm, e);
  }
  _iterate(e, t) {
    return Mt(this._ctx, e, t, this._ctx.table.core);
  }
  clone(e) {
    var t = Object.create(this.constructor.prototype);
    var n = Object.create(this._ctx);
    if (e) {
      r(n, e);
    }
    t._ctx = n;
    return t;
  }
  raw() {
    this._ctx.valueMapper = null;
    return this;
  }
  each(e) {
    var t = this._ctx;
    return this._read(n => Mt(t, e, n, t.table.core));
  }
  count(e) {
    return this._read(e => {
      const t = this._ctx;
      const n = t.table.core;
      if (It(t, true)) {
        return n.count({
          trans: e,
          query: {
            index: Rt(t, n.schema),
            range: t.range
          }
        }).then(e => Math.min(e, t.limit));
      }
      var r = 0;
      return Mt(t, () => {
        ++r;
        return false;
      }, e, n).then(() => r);
    }).then(e);
  }
  sortBy(e, t) {
    const n = e.split(".").reverse();
    const r = n[0];
    const s = n.length - 1;
    function i(e, t) {
      if (t) {
        return i(e[n[t]], t - 1);
      } else {
        return e[r];
      }
    }
    var o = this._ctx.dir === "next" ? 1 : -1;
    function a(e, t) {
      var n = i(e, s);
      var r = i(t, s);
      if (n < r) {
        return -o;
      } else if (n > r) {
        return o;
      } else {
        return 0;
      }
    }
    return this.toArray(function (e) {
      return e.sort(a);
    }).then(t);
  }
  toArray(e) {
    return this._read(e => {
      var t = this._ctx;
      if (t.dir === "next" && It(t, true) && t.limit > 0) {
        const {
          valueMapper: n
        } = t;
        const r = Rt(t, t.table.core.schema);
        return t.table.core.query({
          trans: e,
          limit: t.limit,
          values: true,
          query: {
            index: r,
            range: t.range
          }
        }).then(({
          result: e
        }) => n ? e.map(n) : e);
      }
      {
        const n = [];
        return Mt(t, e => n.push(e), e, t.table.core).then(() => n);
      }
    }, e);
  }
  offset(e) {
    var t = this._ctx;
    if (!(e <= 0)) {
      t.offset += e;
      if (It(t)) {
        Tt(t, () => {
          var t = e;
          return (e, n) => t === 0 || (t === 1 ? (--t, false) : (n(() => {
            e.advance(t);
            t = 0;
          }), false));
        });
      } else {
        Tt(t, () => {
          var t = e;
          return () => --t < 0;
        });
      }
    }
    return this;
  }
  limit(e) {
    this._ctx.limit = Math.min(this._ctx.limit, e);
    Tt(this._ctx, () => {
      var t = e;
      return function (e, n, r) {
        if (--t <= 0) {
          n(r);
        }
        return t >= 0;
      };
    }, true);
    return this;
  }
  until(e, t) {
    Bt(this._ctx, function (n, r, s) {
      return !e(n.value) || (r(s), t);
    });
    return this;
  }
  first(e) {
    return this.limit(1).toArray(function (e) {
      return e[0];
    }).then(e);
  }
  last(e) {
    return this.reverse().first(e);
  }
  filter(e) {
    var t;
    var n;
    Bt(this._ctx, function (t) {
      return e(t.value);
    });
    t = this._ctx;
    n = e;
    t.isMatch = Ot(t.isMatch, n);
    return this;
  }
  and(e) {
    return this.filter(e);
  }
  or(e) {
    return new this.db.WhereClause(this._ctx.table, e, this);
  }
  reverse() {
    this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
    if (this._ondirectionchange) {
      this._ondirectionchange(this._ctx.dir);
    }
    return this;
  }
  desc() {
    return this.reverse();
  }
  eachKey(e) {
    var t = this._ctx;
    t.keysOnly = !t.isMatch;
    return this.each(function (t, n) {
      e(n.key, n);
    });
  }
  eachUniqueKey(e) {
    this._ctx.unique = "unique";
    return this.eachKey(e);
  }
  eachPrimaryKey(e) {
    var t = this._ctx;
    t.keysOnly = !t.isMatch;
    return this.each(function (t, n) {
      e(n.primaryKey, n);
    });
  }
  keys(e) {
    var t = this._ctx;
    t.keysOnly = !t.isMatch;
    var n = [];
    return this.each(function (e, t) {
      n.push(t.key);
    }).then(function () {
      return n;
    }).then(e);
  }
  primaryKeys(e) {
    var t = this._ctx;
    if (t.dir === "next" && It(t, true) && t.limit > 0) {
      return this._read(e => {
        var n = Rt(t, t.table.core.schema);
        return t.table.core.query({
          trans: e,
          values: false,
          limit: t.limit,
          query: {
            index: n,
            range: t.range
          }
        });
      }).then(({
        result: e
      }) => e).then(e);
    }
    t.keysOnly = !t.isMatch;
    var n = [];
    return this.each(function (e, t) {
      n.push(t.primaryKey);
    }).then(function () {
      return n;
    }).then(e);
  }
  uniqueKeys(e) {
    this._ctx.unique = "unique";
    return this.keys(e);
  }
  firstKey(e) {
    return this.limit(1).keys(function (e) {
      return e[0];
    }).then(e);
  }
  lastKey(e) {
    return this.reverse().firstKey(e);
  }
  distinct() {
    var e = this._ctx;
    var t = e.index && e.table.schema.idxByName[e.index];
    if (!t || !t.multi) {
      return this;
    }
    var n = {};
    Bt(this._ctx, function (e) {
      var t = e.primaryKey.toString();
      var r = o(n, t);
      n[t] = true;
      return !r;
    });
    return this;
  }
  modify(e) {
    var n = this._ctx;
    return this._write(r => {
      var s;
      if (typeof e == "function") {
        s = e;
      } else {
        var i = t(e);
        var o = i.length;
        s = function (t) {
          var n = false;
          for (var r = 0; r < o; ++r) {
            var s = i[r];
            var a = e[s];
            if (b(t, s) !== a) {
              _(t, s, a);
              n = true;
            }
          }
          return n;
        };
      }
      const a = n.table.core;
      const {
        outbound: u,
        extractKey: l
      } = a.schema.primaryKey;
      const c = this.db._options.modifyChunkSize || 200;
      const h = [];
      let d = 0;
      const f = [];
      const p = (e, n) => {
        const {
          failures: r,
          numFailures: s
        } = n;
        d += e - s;
        for (let i of t(r)) {
          h.push(r[i]);
        }
      };
      return this.clone().primaryKeys().then(t => {
        const i = o => {
          const h = Math.min(c, t.length - o);
          return a.getMany({
            trans: r,
            keys: t.slice(o, o + h),
            cache: "immutable"
          }).then(d => {
            const f = [];
            const y = [];
            const m = u ? [] : null;
            const v = [];
            for (let e = 0; e < h; ++e) {
              const n = d[e];
              const r = {
                value: O(n),
                primKey: t[o + e]
              };
              if (s.call(r, r.value, r) !== false) {
                if (r.value == null) {
                  v.push(t[o + e]);
                } else if (u || qt(l(n), l(r.value)) === 0) {
                  y.push(r.value);
                  if (u) {
                    m.push(t[o + e]);
                  }
                } else {
                  v.push(t[o + e]);
                  f.push(r.value);
                }
              }
            }
            const g = It(n) && n.limit === Infinity && (typeof e != "function" || e === Vt) && {
              index: n.index,
              range: n.range
            };
            return Promise.resolve(f.length > 0 && a.mutate({
              trans: r,
              type: "add",
              values: f
            }).then(e => {
              for (let t in e.failures) {
                v.splice(parseInt(t), 1);
              }
              p(f.length, e);
            })).then(() => (y.length > 0 || g && typeof e == "object") && a.mutate({
              trans: r,
              type: "put",
              keys: m,
              values: y,
              criteria: g,
              changeSpec: typeof e != "function" && e
            }).then(e => p(y.length, e))).then(() => (v.length > 0 || g && e === Vt) && a.mutate({
              trans: r,
              type: "delete",
              keys: v,
              criteria: g
            }).then(e => p(v.length, e))).then(() => t.length > o + h && i(o + c));
          });
        };
        return i(0).then(() => {
          if (h.length > 0) {
            throw new z("Error modifying one or more objects", h, d, f);
          }
          return t.length;
        });
      });
    });
  }
  delete() {
    var e = this._ctx;
    var t = e.range;
    if (It(e) && (e.isPrimKey && !xt || t.type === 3)) {
      return this._write(n => {
        const {
          primaryKey: r
        } = e.table.core.schema;
        const s = t;
        return e.table.core.count({
          trans: n,
          query: {
            index: r,
            range: s
          }
        }).then(t => e.table.core.mutate({
          trans: n,
          type: "deleteRange",
          range: s
        }).then(({
          failures: e,
          lastResult: n,
          results: r,
          numFailures: s
        }) => {
          if (s) {
            throw new z("Could not delete some values", Object.keys(e).map(t => e[t]), t - s);
          }
          return t - s;
        }));
      });
    } else {
      return this.modify(Vt);
    }
  }
}
const Vt = (e, t) => t.value = null;
function Wt(e, t) {
  if (e < t) {
    return -1;
  } else if (e === t) {
    return 0;
  } else {
    return 1;
  }
}
function Yt(e, t) {
  if (e > t) {
    return -1;
  } else if (e === t) {
    return 0;
  } else {
    return 1;
  }
}
function zt(e, t, n) {
  var r = e instanceof Zt ? new e.Collection(e) : e;
  r._ctx.error = n ? new n(t) : new TypeError(t);
  return r;
}
function Gt(e) {
  return new e.Collection(e, () => Jt("")).limit(0);
}
function Ht(e, t, n, r, s, i) {
  for (var o = Math.min(e.length, r.length), a = -1, u = 0; u < o; ++u) {
    var l = t[u];
    if (l !== r[u]) {
      if (s(e[u], n[u]) < 0) {
        return e.substr(0, u) + n[u] + n.substr(u + 1);
      } else if (s(e[u], r[u]) < 0) {
        return e.substr(0, u) + r[u] + n.substr(u + 1);
      } else if (a >= 0) {
        return e.substr(0, a) + t[a] + n.substr(a + 1);
      } else {
        return null;
      }
    }
    if (s(e[u], l) < 0) {
      a = u;
    }
  }
  if (o < r.length && i === "next") {
    return e + n.substr(e.length);
  } else if (o < e.length && i === "prev") {
    return e.substr(0, n.length);
  } else if (a < 0) {
    return null;
  } else {
    return e.substr(0, a) + r[a] + n.substr(a + 1);
  }
}
function Xt(e, t, n, r) {
  var s;
  var i;
  var o;
  var a;
  var u;
  var l;
  var c;
  var h = n.length;
  if (!n.every(e => typeof e == "string")) {
    return zt(e, gt);
  }
  function d(e) {
    s = function (e) {
      if (e === "next") {
        return e => e.toUpperCase();
      } else {
        return e => e.toLowerCase();
      }
    }(e);
    i = function (e) {
      if (e === "next") {
        return e => e.toLowerCase();
      } else {
        return e => e.toUpperCase();
      }
    }(e);
    o = e === "next" ? Wt : Yt;
    var t = n.map(function (e) {
      return {
        lower: i(e),
        upper: s(e)
      };
    }).sort(function (e, t) {
      return o(e.lower, t.lower);
    });
    a = t.map(function (e) {
      return e.upper;
    });
    u = t.map(function (e) {
      return e.lower;
    });
    l = e;
    c = e === "next" ? "" : r;
  }
  d("next");
  var f = new e.Collection(e, () => Qt(a[0], u[h - 1] + r));
  f._ondirectionchange = function (e) {
    d(e);
  };
  var p = 0;
  f._addAlgorithm(function (e, n, r) {
    var s = e.key;
    if (typeof s != "string") {
      return false;
    }
    var d = i(s);
    if (t(d, u, p)) {
      return true;
    }
    var f = null;
    for (var y = p; y < h; ++y) {
      var m = Ht(s, d, a[y], u[y], o, l);
      if (m === null && f === null) {
        p = y + 1;
      } else if (f === null || o(f, m) > 0) {
        f = m;
      }
    }
    n(f !== null ? function () {
      e.continue(f + c);
    } : r);
    return false;
  });
  return f;
}
function Qt(e, t, n, r) {
  return {
    type: 2,
    lower: e,
    upper: t,
    lowerOpen: n,
    upperOpen: r
  };
}
function Jt(e) {
  return {
    type: 1,
    lower: e,
    upper: e
  };
}
class Zt {
  get Collection() {
    return this._ctx.table.db.Collection;
  }
  between(e, t, n, r) {
    n = n !== false;
    r = r === true;
    try {
      if (this._cmp(e, t) > 0 || this._cmp(e, t) === 0 && (n || r) && (!n || !r)) {
        return Gt(this);
      } else {
        return new this.Collection(this, () => Qt(e, t, !n, !r));
      }
    } catch (s) {
      return zt(this, vt);
    }
  }
  equals(e) {
    if (e == null) {
      return zt(this, vt);
    } else {
      return new this.Collection(this, () => Jt(e));
    }
  }
  above(e) {
    if (e == null) {
      return zt(this, vt);
    } else {
      return new this.Collection(this, () => Qt(e, undefined, true));
    }
  }
  aboveOrEqual(e) {
    if (e == null) {
      return zt(this, vt);
    } else {
      return new this.Collection(this, () => Qt(e, undefined, false));
    }
  }
  below(e) {
    if (e == null) {
      return zt(this, vt);
    } else {
      return new this.Collection(this, () => Qt(undefined, e, false, true));
    }
  }
  belowOrEqual(e) {
    if (e == null) {
      return zt(this, vt);
    } else {
      return new this.Collection(this, () => Qt(undefined, e));
    }
  }
  startsWith(e) {
    if (typeof e != "string") {
      return zt(this, gt);
    } else {
      return this.between(e, e + yt, true, true);
    }
  }
  startsWithIgnoreCase(e) {
    if (e === "") {
      return this.startsWith(e);
    } else {
      return Xt(this, (e, t) => e.indexOf(t[0]) === 0, [e], yt);
    }
  }
  equalsIgnoreCase(e) {
    return Xt(this, (e, t) => e === t[0], [e], "");
  }
  anyOfIgnoreCase() {
    var e = B.apply(I, arguments);
    if (e.length === 0) {
      return Gt(this);
    } else {
      return Xt(this, (e, t) => t.indexOf(e) !== -1, e, "");
    }
  }
  startsWithAnyOfIgnoreCase() {
    var e = B.apply(I, arguments);
    if (e.length === 0) {
      return Gt(this);
    } else {
      return Xt(this, (e, t) => t.some(t => e.indexOf(t) === 0), e, yt);
    }
  }
  anyOf() {
    const e = B.apply(I, arguments);
    let t = this._cmp;
    try {
      e.sort(t);
    } catch (s) {
      return zt(this, vt);
    }
    if (e.length === 0) {
      return Gt(this);
    }
    const n = new this.Collection(this, () => Qt(e[0], e[e.length - 1]));
    n._ondirectionchange = n => {
      t = n === "next" ? this._ascending : this._descending;
      e.sort(t);
    };
    let r = 0;
    n._addAlgorithm((n, s, i) => {
      const o = n.key;
      while (t(o, e[r]) > 0) {
        ++r;
        if (r === e.length) {
          s(i);
          return false;
        }
      }
      return t(o, e[r]) === 0 || (s(() => {
        n.continue(e[r]);
      }), false);
    });
    return n;
  }
  notEqual(e) {
    return this.inAnyRange([[mt, e], [e, this.db._maxKey]], {
      includeLowers: false,
      includeUppers: false
    });
  }
  noneOf() {
    const e = B.apply(I, arguments);
    if (e.length === 0) {
      return new this.Collection(this);
    }
    try {
      e.sort(this._ascending);
    } catch (n) {
      return zt(this, vt);
    }
    const t = e.reduce((e, t) => e ? e.concat([[e[e.length - 1][1], t]]) : [[mt, t]], null);
    t.push([e[e.length - 1], this.db._maxKey]);
    return this.inAnyRange(t, {
      includeLowers: false,
      includeUppers: false
    });
  }
  inAnyRange(e, t) {
    const n = this._cmp;
    const r = this._ascending;
    const s = this._descending;
    const i = this._min;
    const o = this._max;
    if (e.length === 0) {
      return Gt(this);
    }
    if (!e.every(e => e[0] !== undefined && e[1] !== undefined && r(e[0], e[1]) <= 0)) {
      return zt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", Q.InvalidArgument);
    }
    const a = !t || t.includeLowers !== false;
    const u = t && t.includeUppers === true;
    let l;
    let c = r;
    function h(e, t) {
      return c(e[0], t[0]);
    }
    try {
      l = e.reduce(function (e, t) {
        let r = 0;
        let s = e.length;
        for (; r < s; ++r) {
          const s = e[r];
          if (n(t[0], s[1]) < 0 && n(t[1], s[0]) > 0) {
            s[0] = i(s[0], t[0]);
            s[1] = o(s[1], t[1]);
            break;
          }
        }
        if (r === s) {
          e.push(t);
        }
        return e;
      }, []);
      l.sort(h);
    } catch (v) {
      return zt(this, vt);
    }
    let d = 0;
    const f = u ? e => r(e, l[d][1]) > 0 : e => r(e, l[d][1]) >= 0;
    const p = a ? e => s(e, l[d][0]) > 0 : e => s(e, l[d][0]) >= 0;
    let y = f;
    const m = new this.Collection(this, () => Qt(l[0][0], l[l.length - 1][1], !a, !u));
    m._ondirectionchange = e => {
      if (e === "next") {
        y = f;
        c = r;
      } else {
        y = p;
        c = s;
      }
      l.sort(h);
    };
    m._addAlgorithm((e, t, n) => {
      for (var s = e.key; y(s);) {
        ++d;
        if (d === l.length) {
          t(n);
          return false;
        }
      }
      return !f(i = s) && !p(i) || !(this._cmp(s, l[d][1]) === 0 || this._cmp(s, l[d][0]) === 0 || t(() => {
        if (c === r) {
          e.continue(l[d][0]);
        } else {
          e.continue(l[d][1]);
        }
      }), 1);
      var i;
    });
    return m;
  }
  startsWithAnyOf() {
    const e = B.apply(I, arguments);
    if (e.every(e => typeof e == "string")) {
      if (e.length === 0) {
        return Gt(this);
      } else {
        return this.inAnyRange(e.map(e => [e, e + yt]));
      }
    } else {
      return zt(this, "startsWithAnyOf() only works with strings");
    }
  }
}
function en(e) {
  return We(function (t) {
    tn(t);
    e(t.target.error);
    return false;
  });
}
function tn(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (e.preventDefault) {
    e.preventDefault();
  }
}
const nn = "storagemutated";
const rn = "x-storagemutated-1";
const sn = jt(null, nn);
class on {
  _lock() {
    m(!Ke.global);
    ++this._reculock;
    if (this._reculock === 1 && !Ke.global) {
      Ke.lockOwnerFor = this;
    }
    return this;
  }
  _unlock() {
    m(!Ke.global);
    if (--this._reculock == 0) {
      for (Ke.global || (Ke.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked();) {
        var e = this._blockedFuncs.shift();
        try {
          ot(e[1], e[0]);
        } catch (t) {}
      }
    }
    return this;
  }
  _locked() {
    return this._reculock && Ke.lockOwnerFor !== this;
  }
  create(e) {
    if (!this.mode) {
      return this;
    }
    const t = this.db.idbdb;
    const n = this.db._state.dbOpenError;
    m(!this.idbtrans);
    if (!e && !t) {
      switch (n && n.name) {
        case "DatabaseClosedError":
          throw new Q.DatabaseClosed(n);
        case "MissingAPIError":
          throw new Q.MissingAPI(n.message, n);
        default:
          throw new Q.OpenFailed(n);
      }
    }
    if (!this.active) {
      throw new Q.TransactionInactive();
    }
    m(this._completion._state === null);
    (e = this.idbtrans = e || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, {
      durability: this.chromeTransactionDurability
    }) : t.transaction(this.storeNames, this.mode, {
      durability: this.chromeTransactionDurability
    }))).onerror = We(t => {
      tn(t);
      this._reject(e.error);
    });
    e.onabort = We(t => {
      tn(t);
      if (this.active) {
        this._reject(new Q.Abort(e.error));
      }
      this.active = false;
      this.on("abort").fire(t);
    });
    e.oncomplete = We(() => {
      this.active = false;
      this._resolve();
      if ("mutatedParts" in e) {
        sn.storagemutated.fire(e.mutatedParts);
      }
    });
    return this;
  }
  _promise(e, t, n) {
    if (e === "readwrite" && this.mode !== "readwrite") {
      return dt(new Q.ReadOnly("Transaction is readonly"));
    }
    if (!this.active) {
      return dt(new Q.TransactionInactive());
    }
    if (this._locked()) {
      return new Ce((r, s) => {
        this._blockedFuncs.push([() => {
          this._promise(e, t, n).then(r, s);
        }, Ke]);
      });
    }
    if (n) {
      return Je(() => {
        var e = new Ce((e, n) => {
          this._lock();
          const r = t(e, n, this);
          if (r && r.then) {
            r.then(e, n);
          }
        });
        e.finally(() => this._unlock());
        e._lib = true;
        return e;
      });
    }
    var r = new Ce((e, n) => {
      var r = t(e, n, this);
      if (r && r.then) {
        r.then(e, n);
      }
    });
    r._lib = true;
    return r;
  }
  _root() {
    if (this.parent) {
      return this.parent._root();
    } else {
      return this;
    }
  }
  waitFor(e) {
    var t = this._root();
    const n = Ce.resolve(e);
    if (t._waitingFor) {
      t._waitingFor = t._waitingFor.then(() => n);
    } else {
      t._waitingFor = n;
      t._waitingQueue = [];
      var r = t.idbtrans.objectStore(t.storeNames[0]);
      (function e() {
        for (++t._spinCount; t._waitingQueue.length;) {
          t._waitingQueue.shift()();
        }
        if (t._waitingFor) {
          r.get(-Infinity).onsuccess = e;
        }
      })();
    }
    var s = t._waitingFor;
    return new Ce((e, r) => {
      n.then(n => t._waitingQueue.push(We(e.bind(null, n))), e => t._waitingQueue.push(We(r.bind(null, e)))).finally(() => {
        if (t._waitingFor === s) {
          t._waitingFor = null;
        }
      });
    });
  }
  abort() {
    if (this.active) {
      this.active = false;
      if (this.idbtrans) {
        this.idbtrans.abort();
      }
      this._reject(new Q.Abort());
    }
  }
  table(e) {
    const t = this._memoizedTables ||= {};
    if (o(t, e)) {
      return t[e];
    }
    const n = this.schema[e];
    if (!n) {
      throw new Q.NotFound("Table " + e + " not part of transaction");
    }
    const r = new this.db.Table(e, n, this);
    r.core = this.db.core.table(e);
    t[e] = r;
    return r;
  }
}
function an(e, t, n, r, s, i, o) {
  return {
    name: e,
    keyPath: t,
    unique: n,
    multi: r,
    auto: s,
    compound: i,
    src: (n && !o ? "&" : "") + (r ? "*" : "") + (s ? "++" : "") + un(t)
  };
}
function un(e) {
  if (typeof e == "string") {
    return e;
  } else if (e) {
    return "[" + [].join.call(e, "+") + "]";
  } else {
    return "";
  }
}
function ln(e, t, n) {
  return {
    name: e,
    primKey: t,
    indexes: n,
    mappedClass: null,
    idxByName: g(n, e => [e.name, e])
  };
}
let cn = e => {
  try {
    e.only([[]]);
    cn = () => [[]];
    return [[]];
  } catch (t) {
    cn = () => yt;
    return yt;
  }
};
function hn(e) {
  if (e == null) {
    return () => {};
  } else if (typeof e == "string") {
    if ((t = e).split(".").length === 1) {
      return e => e[t];
    } else {
      return e => b(e, t);
    }
  } else {
    return t => b(t, e);
  }
  var t;
}
function dn(e) {
  return [].slice.call(e);
}
let fn = 0;
function pn(e) {
  if (e == null) {
    return ":id";
  } else if (typeof e == "string") {
    return e;
  } else {
    return `[${e.join("+")}]`;
  }
}
function yn({
  _novip: e
}, t) {
  const r = t.db;
  const s = function (e, t, {
    IDBKeyRange: r,
    indexedDB: s
  }, i) {
    a = function (e, t, r) {
      function s(e) {
        if (e.type === 3) {
          return null;
        }
        if (e.type === 4) {
          throw new Error("Cannot convert never type to IDBKeyRange");
        }
        const {
          lower: n,
          upper: r,
          lowerOpen: s,
          upperOpen: i
        } = e;
        if (n === undefined) {
          if (r === undefined) {
            return null;
          } else {
            return t.upperBound(r, !!i);
          }
        } else if (r === undefined) {
          return t.lowerBound(n, !!s);
        } else {
          return t.bound(n, r, !!s, !!i);
        }
      }
      const {
        schema: i,
        hasGetAll: o
      } = function (e, t) {
        const r = dn(e.objectStoreNames);
        return {
          schema: {
            name: e.name,
            tables: r.map(e => t.objectStore(e)).map(e => {
              const {
                keyPath: t,
                autoIncrement: r
              } = e;
              const s = n(t);
              const i = t == null;
              const o = {};
              const a = {
                name: e.name,
                primaryKey: {
                  name: null,
                  isPrimaryKey: true,
                  outbound: i,
                  compound: s,
                  keyPath: t,
                  autoIncrement: r,
                  unique: true,
                  extractKey: hn(t)
                },
                indexes: dn(e.indexNames).map(t => e.index(t)).map(e => {
                  const {
                    name: t,
                    unique: r,
                    multiEntry: s,
                    keyPath: i
                  } = e;
                  const a = {
                    name: t,
                    compound: n(i),
                    keyPath: i,
                    unique: r,
                    multiEntry: s,
                    extractKey: hn(i)
                  };
                  o[pn(i)] = a;
                  return a;
                }),
                getIndexByKeyPath: e => o[pn(e)]
              };
              o[":id"] = a.primaryKey;
              if (t != null) {
                o[pn(t)] = a.primaryKey;
              }
              return a;
            })
          },
          hasGetAll: r.length > 0 && "getAll" in t.objectStore(r[0]) && (typeof navigator == "undefined" || !/Safari/.test(navigator.userAgent) || !!/(Chrome\/|Edge\/)/.test(navigator.userAgent) || !([].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604))
        };
      }(e, r);
      const a = i.tables.map(e => function (e) {
        const t = e.name;
        return {
          name: t,
          schema: e,
          mutate: function ({
            trans: e,
            type: n,
            keys: r,
            values: i,
            range: o
          }) {
            return new Promise((a, u) => {
              a = We(a);
              const l = e.objectStore(t);
              const c = l.keyPath == null;
              const h = n === "put" || n === "add";
              if (!h && n !== "delete" && n !== "deleteRange") {
                throw new Error("Invalid operation type: " + n);
              }
              const {
                length: d
              } = r || i || {
                length: 1
              };
              if (r && i && r.length !== i.length) {
                throw new Error("Given keys array must have same length as given values array.");
              }
              if (d === 0) {
                return a({
                  numFailures: 0,
                  failures: {},
                  results: [],
                  lastResult: undefined
                });
              }
              let f;
              const p = [];
              const y = [];
              let m = 0;
              const v = e => {
                ++m;
                tn(e);
              };
              if (n === "deleteRange") {
                if (o.type === 4) {
                  return a({
                    numFailures: m,
                    failures: y,
                    results: [],
                    lastResult: undefined
                  });
                }
                if (o.type === 3) {
                  p.push(f = l.clear());
                } else {
                  p.push(f = l.delete(s(o)));
                }
              } else {
                const [e, t] = h ? c ? [i, r] : [i, null] : [r, null];
                if (h) {
                  for (let r = 0; r < d; ++r) {
                    p.push(f = t && t[r] !== undefined ? l[n](e[r], t[r]) : l[n](e[r]));
                    f.onerror = v;
                  }
                } else {
                  for (let r = 0; r < d; ++r) {
                    p.push(f = l[n](e[r]));
                    f.onerror = v;
                  }
                }
              }
              const g = e => {
                const t = e.target.result;
                p.forEach((e, t) => e.error != null && (y[t] = e.error));
                a({
                  numFailures: m,
                  failures: y,
                  results: n === "delete" ? r : p.map(e => e.result),
                  lastResult: t
                });
              };
              f.onerror = e => {
                v(e);
                g(e);
              };
              f.onsuccess = g;
            });
          },
          getMany: ({
            trans: e,
            keys: n
          }) => new Promise((r, s) => {
            r = We(r);
            const i = e.objectStore(t);
            const o = n.length;
            const a = new Array(o);
            let u;
            let l = 0;
            let c = 0;
            const h = e => {
              const t = e.target;
              a[t._pos] = t.result;
              if (++c === l) {
                r(a);
              }
            };
            const d = en(s);
            for (let e = 0; e < o; ++e) {
              if (n[e] != null) {
                u = i.get(n[e]);
                u._pos = e;
                u.onsuccess = h;
                u.onerror = d;
                ++l;
              }
            }
            if (l === 0) {
              r(a);
            }
          }),
          get: ({
            trans: e,
            key: n
          }) => new Promise((r, s) => {
            r = We(r);
            const i = e.objectStore(t).get(n);
            i.onsuccess = e => r(e.target.result);
            i.onerror = en(s);
          }),
          query: function (e) {
            return n => new Promise((r, i) => {
              r = We(r);
              const {
                trans: o,
                values: a,
                limit: u,
                query: l
              } = n;
              const c = u === Infinity ? undefined : u;
              const {
                index: h,
                range: d
              } = l;
              const f = o.objectStore(t);
              const p = h.isPrimaryKey ? f : f.index(h.name);
              const y = s(d);
              if (u === 0) {
                return r({
                  result: []
                });
              }
              if (e) {
                const e = a ? p.getAll(y, c) : p.getAllKeys(y, c);
                e.onsuccess = e => r({
                  result: e.target.result
                });
                e.onerror = en(i);
              } else {
                let e = 0;
                const t = a || !("openKeyCursor" in p) ? p.openCursor(y) : p.openKeyCursor(y);
                const n = [];
                t.onsuccess = s => {
                  const i = t.result;
                  if (i) {
                    n.push(a ? i.value : i.primaryKey);
                    if (++e === u) {
                      return r({
                        result: n
                      });
                    } else {
                      i.continue();
                      return;
                    }
                  } else {
                    return r({
                      result: n
                    });
                  }
                };
                t.onerror = en(i);
              }
            });
          }(o),
          openCursor: function ({
            trans: e,
            values: n,
            query: r,
            reverse: i,
            unique: o
          }) {
            return new Promise((a, u) => {
              a = We(a);
              const {
                index: l,
                range: c
              } = r;
              const h = e.objectStore(t);
              const d = l.isPrimaryKey ? h : h.index(l.name);
              const f = i ? o ? "prevunique" : "prev" : o ? "nextunique" : "next";
              const p = n || !("openKeyCursor" in d) ? d.openCursor(s(c), f) : d.openKeyCursor(s(c), f);
              p.onerror = en(u);
              p.onsuccess = We(t => {
                const n = p.result;
                if (!n) {
                  a(null);
                  return;
                }
                n.___id = ++fn;
                n.done = false;
                const r = n.continue.bind(n);
                let s = n.continuePrimaryKey;
                s &&= s.bind(n);
                const i = n.advance.bind(n);
                const o = () => {
                  throw new Error("Cursor not stopped");
                };
                n.trans = e;
                n.stop = n.continue = n.continuePrimaryKey = n.advance = () => {
                  throw new Error("Cursor not started");
                };
                n.fail = We(u);
                n.next = function () {
                  let e = 1;
                  return this.start(() => e-- ? this.continue() : this.stop()).then(() => this);
                };
                n.start = e => {
                  const t = new Promise((e, t) => {
                    e = We(e);
                    p.onerror = en(t);
                    n.fail = t;
                    n.stop = t => {
                      n.stop = n.continue = n.continuePrimaryKey = n.advance = o;
                      e(t);
                    };
                  });
                  const a = () => {
                    if (p.result) {
                      try {
                        e();
                      } catch (t) {
                        n.fail(t);
                      }
                    } else {
                      n.done = true;
                      n.start = () => {
                        throw new Error("Cursor behind last entry");
                      };
                      n.stop();
                    }
                  };
                  p.onsuccess = We(e => {
                    p.onsuccess = a;
                    a();
                  });
                  n.continue = r;
                  n.continuePrimaryKey = s;
                  n.advance = i;
                  a();
                  return t;
                };
                a(n);
              }, u);
            });
          },
          count({
            query: e,
            trans: n
          }) {
            const {
              index: r,
              range: i
            } = e;
            return new Promise((e, o) => {
              const a = n.objectStore(t);
              const u = r.isPrimaryKey ? a : a.index(r.name);
              const l = s(i);
              const c = l ? u.count(l) : u.count();
              c.onsuccess = We(t => e(t.target.result));
              c.onerror = en(o);
            });
          }
        };
      }(e));
      const u = {};
      a.forEach(e => u[e.name] = e);
      return {
        stack: "dbcore",
        transaction: e.transaction.bind(e),
        table(e) {
          if (!u[e]) {
            throw new Error(`Table '${e}' not found`);
          }
          return u[e];
        },
        MIN_KEY: -Infinity,
        MAX_KEY: cn(t),
        schema: i
      };
    }(t, r, i);
    const o = e.dbcore.reduce((e, {
      create: t
    }) => ({
      ...e,
      ...t(e)
    }), a);
    var a;
    return {
      dbcore: o
    };
  }(e._middlewares, r, e._deps, t);
  e.core = s.dbcore;
  e.tables.forEach(t => {
    const n = t.name;
    if (e.core.schema.tables.some(e => e.name === n)) {
      t.core = e.core.table(n);
      if (e[n] instanceof e.Table) {
        e[n].core = t.core;
      }
    }
  });
}
function mn({
  _novip: e
}, t, n, r) {
  n.forEach(n => {
    const s = r[n];
    t.forEach(t => {
      const r = d(t, n);
      if (!r || "value" in r && r.value === undefined) {
        if (t === e.Transaction.prototype || t instanceof e.Transaction) {
          l(t, n, {
            get() {
              return this.table(n);
            },
            set(e) {
              u(this, n, {
                value: e,
                writable: true,
                configurable: true,
                enumerable: true
              });
            }
          });
        } else {
          t[n] = new e.Table(n, s);
        }
      }
    });
  });
}
function vn({
  _novip: e
}, t) {
  t.forEach(t => {
    for (let n in t) {
      if (t[n] instanceof e.Table) {
        delete t[n];
      }
    }
  });
}
function gn(e, t) {
  return e._cfg.version - t._cfg.version;
}
function bn(e, t) {
  const n = {
    del: [],
    add: [],
    change: []
  };
  let r;
  for (r in e) {
    if (!t[r]) {
      n.del.push(r);
    }
  }
  for (r in t) {
    const s = e[r];
    const i = t[r];
    if (s) {
      const e = {
        name: r,
        def: i,
        recreate: false,
        del: [],
        add: [],
        change: []
      };
      if ("" + (s.primKey.keyPath || "") != "" + (i.primKey.keyPath || "") || s.primKey.auto !== i.primKey.auto && !_t) {
        e.recreate = true;
        n.change.push(e);
      } else {
        const t = s.idxByName;
        const r = i.idxByName;
        let o;
        for (o in t) {
          if (!r[o]) {
            e.del.push(o);
          }
        }
        for (o in r) {
          const n = t[o];
          const s = r[o];
          if (n) {
            if (n.src !== s.src) {
              e.change.push(s);
            }
          } else {
            e.add.push(s);
          }
        }
        if (e.del.length > 0 || e.add.length > 0 || e.change.length > 0) {
          n.change.push(e);
        }
      }
    } else {
      n.add.push([r, i]);
    }
  }
  return n;
}
function _n(e, t, n, r) {
  const s = e.db.createObjectStore(t, n.keyPath ? {
    keyPath: n.keyPath,
    autoIncrement: n.auto
  } : {
    autoIncrement: n.auto
  });
  r.forEach(e => wn(s, e));
  return s;
}
function wn(e, t) {
  e.createIndex(t.name, t.keyPath, {
    unique: t.unique,
    multiEntry: t.multi
  });
}
function xn(e, t, n) {
  const r = {};
  p(t.objectStoreNames, 0).forEach(e => {
    const t = n.objectStore(e);
    let s = t.keyPath;
    const i = an(un(s), s || "", false, false, !!t.autoIncrement, s && typeof s != "string", true);
    const o = [];
    for (let n = 0; n < t.indexNames.length; ++n) {
      const e = t.index(t.indexNames[n]);
      s = e.keyPath;
      var a = an(e.name, s, !!e.unique, !!e.multiEntry, false, s && typeof s != "string", false);
      o.push(a);
    }
    r[e] = ln(e, i, o);
  });
  return r;
}
function kn({
  _novip: t
}, n, r) {
  const s = r.db.objectStoreNames;
  for (let e = 0; e < s.length; ++e) {
    const i = s[e];
    const o = r.objectStore(i);
    t._hasGetAll = "getAll" in o;
    for (let e = 0; e < o.indexNames.length; ++e) {
      const t = o.indexNames[e];
      const r = o.index(t).keyPath;
      const s = typeof r == "string" ? r : "[" + p(r).join("+") + "]";
      if (n[i]) {
        const e = n[i].idxByName[s];
        if (e) {
          e.name = t;
          delete n[i].idxByName[s];
          n[i].idxByName[t] = e;
        }
      }
    }
  }
  if (typeof navigator != "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && e.WorkerGlobalScope && e instanceof e.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
    t._hasGetAll = false;
  }
}
class En {
  _parseStoresSpec(e, r) {
    t(e).forEach(t => {
      if (e[t] !== null) {
        var s = e[t].split(",").map((e, t) => {
          const r = (e = e.trim()).replace(/([&*]|\+\+)/g, "");
          const s = /^\[/.test(r) ? r.match(/^\[(.*)\]$/)[1].split("+") : r;
          return an(r, s || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), n(s), t === 0);
        });
        var i = s.shift();
        if (i.multi) {
          throw new Q.Schema("Primary key cannot be multi-valued");
        }
        s.forEach(e => {
          if (e.auto) {
            throw new Q.Schema("Only primary key can be marked as autoIncrement (++)");
          }
          if (!e.keyPath) {
            throw new Q.Schema("Index must have a name and cannot be an empty string");
          }
        });
        r[t] = ln(t, i, s);
      }
    });
  }
  stores(e) {
    const n = this.db;
    this._cfg.storesSource = this._cfg.storesSource ? r(this._cfg.storesSource, e) : e;
    const s = n._versions;
    const i = {};
    let o = {};
    s.forEach(e => {
      r(i, e._cfg.storesSource);
      o = e._cfg.dbschema = {};
      e._parseStoresSpec(i, o);
    });
    n._dbSchema = o;
    vn(n, [n._allTables, n, n.Transaction.prototype]);
    mn(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], t(o), o);
    n._storeNames = t(o);
    return this;
  }
  upgrade(e) {
    this._cfg.contentUpgrade = ue(this._cfg.contentUpgrade || ee, e);
    return this;
  }
}
function Pn(e, t) {
  let n = e._dbNamesDB;
  if (!n) {
    n = e._dbNamesDB = new Yn(Et, {
      addons: [],
      indexedDB: e,
      IDBKeyRange: t
    });
    n.version(1).stores({
      dbnames: "name"
    });
  }
  return n.table("dbnames");
}
function Kn(e) {
  return e && typeof e.databases == "function";
}
function On(e) {
  return Je(function () {
    Ke.letThrough = true;
    return e();
  });
}
function Sn() {
  var e;
  if (!navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases) {
    return new Promise(function (t) {
      var n = function () {
        return indexedDB.databases().finally(t);
      };
      e = setInterval(n, 100);
      n();
    }).finally(function () {
      return clearInterval(e);
    });
  } else {
    return Promise.resolve();
  }
}
function An(e) {
  var t = t => e.next(t);
  var r = i(t);
  var s = i(t => e.throw(t));
  function i(e) {
    return t => {
      var i = e(t);
      var o = i.value;
      if (i.done) {
        return o;
      } else if (o && typeof o.then == "function") {
        return o.then(r, s);
      } else if (n(o)) {
        return Promise.all(o).then(r, s);
      } else {
        return r(o);
      }
    };
  }
  return i(t)();
}
function Cn(e, t, n) {
  var r = arguments.length;
  if (r < 2) {
    throw new Q.InvalidArgument("Too few arguments");
  }
  var s = new Array(r - 1);
  for (; --r;) {
    s[r - 1] = arguments[r];
  }
  n = s.pop();
  return [e, k(s), n];
}
function jn(e, t, n, r, s) {
  return Ce.resolve().then(() => {
    const i = Ke.transless || Ke;
    const o = e._createTransaction(t, n, e._dbSchema, r);
    const a = {
      trans: o,
      transless: i
    };
    if (r) {
      o.idbtrans = r.idbtrans;
    } else {
      try {
        o.create();
        e._state.PR1398_maxLoop = 3;
      } catch (h) {
        if (h.name === H.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0) {
          console.warn("Dexie: Need to reopen db");
          e._close();
          return e.open().then(() => jn(e, t, n, null, s));
        } else {
          return dt(h);
        }
      }
    }
    const u = T(s);
    let l;
    if (u) {
      Ze();
    }
    const c = Ce.follow(() => {
      l = s.call(o, o);
      if (l) {
        if (u) {
          var e = et.bind(null, null);
          l.then(e, e);
        } else if (typeof l.next == "function" && typeof l.throw == "function") {
          l = An(l);
        }
      }
    }, a);
    return (l && typeof l.then == "function" ? Ce.resolve(l).then(e => o.active ? e : dt(new Q.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))) : c.then(() => l)).then(e => {
      if (r) {
        o._resolve();
      }
      return o._completion.then(() => e);
    }).catch(e => {
      o._reject(e);
      return dt(e);
    });
  });
}
function Dn(e, t, r) {
  const s = n(e) ? e.slice() : [e];
  for (let n = 0; n < r; ++n) {
    s.push(t);
  }
  return s;
}
const In = {
  stack: "dbcore",
  name: "VirtualIndexMiddleware",
  level: 1,
  create: function (e) {
    return {
      ...e,
      table(t) {
        const n = e.table(t);
        const {
          schema: r
        } = n;
        const s = {};
        const i = [];
        function o(e, t, n) {
          const r = pn(e);
          const a = s[r] = s[r] || [];
          const u = e == null ? 0 : typeof e == "string" ? 1 : e.length;
          const l = t > 0;
          const c = {
            ...n,
            isVirtual: l,
            keyTail: t,
            keyLength: u,
            extractKey: hn(e),
            unique: !l && n.unique
          };
          a.push(c);
          if (!c.isPrimaryKey) {
            i.push(c);
          }
          if (u > 1) {
            o(u === 2 ? e[0] : e.slice(0, u - 1), t + 1, n);
          }
          a.sort((e, t) => e.keyTail - t.keyTail);
          return c;
        }
        const a = o(r.primaryKey.keyPath, 0, r.primaryKey);
        s[":id"] = [a];
        for (const e of r.indexes) {
          o(e.keyPath, 0, e);
        }
        function u(t) {
          const n = t.query.index;
          if (n.isVirtual) {
            return {
              ...t,
              query: {
                index: n,
                range: (r = t.query.range, s = n.keyTail, {
                  type: r.type === 1 ? 2 : r.type,
                  lower: Dn(r.lower, r.lowerOpen ? e.MAX_KEY : e.MIN_KEY, s),
                  lowerOpen: true,
                  upper: Dn(r.upper, r.upperOpen ? e.MIN_KEY : e.MAX_KEY, s),
                  upperOpen: true
                })
              }
            };
          } else {
            return t;
          }
          var r;
          var s;
        }
        return {
          ...n,
          schema: {
            ...r,
            primaryKey: a,
            indexes: i,
            getIndexByKeyPath: function (e) {
              const t = s[pn(e)];
              return t && t[0];
            }
          },
          count: e => n.count(u(e)),
          query: e => n.query(u(e)),
          openCursor(t) {
            const {
              keyTail: r,
              isVirtual: s,
              keyLength: i
            } = t.query.index;
            if (s) {
              return n.openCursor(u(t)).then(n => {
                return n && (s = n, Object.create(s, {
                  continue: {
                    value: function (n) {
                      if (n != null) {
                        s.continue(Dn(n, t.reverse ? e.MAX_KEY : e.MIN_KEY, r));
                      } else if (t.unique) {
                        s.continue(s.key.slice(0, i).concat(t.reverse ? e.MIN_KEY : e.MAX_KEY, r));
                      } else {
                        s.continue();
                      }
                    }
                  },
                  continuePrimaryKey: {
                    value(t, n) {
                      s.continuePrimaryKey(Dn(t, e.MAX_KEY, r), n);
                    }
                  },
                  primaryKey: {
                    get: () => s.primaryKey
                  },
                  key: {
                    get() {
                      const e = s.key;
                      if (i === 1) {
                        return e[0];
                      } else {
                        return e.slice(0, i);
                      }
                    }
                  },
                  value: {
                    get: () => s.value
                  }
                }));
                var s;
              });
            } else {
              return n.openCursor(t);
            }
          }
        };
      }
    };
  }
};
function Bn(e, n, r, s) {
  r = r || {};
  s = s || "";
  t(e).forEach(t => {
    if (o(n, t)) {
      var i = e[t];
      var a = n[t];
      if (typeof i == "object" && typeof a == "object" && i && a) {
        const e = C(i);
        if (e !== C(a)) {
          r[s + t] = n[t];
        } else if (e === "Object") {
          Bn(i, a, r, s + t + ".");
        } else if (i !== a) {
          r[s + t] = n[t];
        }
      } else if (i !== a) {
        r[s + t] = n[t];
      }
    } else {
      r[s + t] = undefined;
    }
  });
  t(n).forEach(t => {
    if (!o(e, t)) {
      r[s + t] = n[t];
    }
  });
  return r;
}
const Tn = {
  stack: "dbcore",
  name: "HooksMiddleware",
  level: 2,
  create: e => ({
    ...e,
    table(t) {
      const n = e.table(t);
      const {
        primaryKey: r
      } = n.schema;
      return {
        ...n,
        mutate(e) {
          const s = Ke.trans;
          const {
            deleting: i,
            creating: a,
            updating: u
          } = s.table(t).hook;
          switch (e.type) {
            case "add":
              if (a.fire === ee) {
                break;
              }
              return s._promise("readwrite", () => l(e), true);
            case "put":
              if (a.fire === ee && u.fire === ee) {
                break;
              }
              return s._promise("readwrite", () => l(e), true);
            case "delete":
              if (i.fire === ee) {
                break;
              }
              return s._promise("readwrite", () => l(e), true);
            case "deleteRange":
              if (i.fire === ee) {
                break;
              }
              return s._promise("readwrite", () => {
                return c((t = e).trans, t.range, 10000);
                var t;
              }, true);
          }
          return n.mutate(e);
          function l(e) {
            const t = Ke.trans;
            const s = e.keys || (l = r, (c = e).type === "delete" ? c.keys : c.keys || c.values.map(l.extractKey));
            var l;
            var c;
            if (!s) {
              throw new Error("Keys missing");
            }
            if ((e = e.type === "add" || e.type === "put" ? {
              ...e,
              keys: s
            } : {
              ...e
            }).type !== "delete") {
              e.values = [...e.values];
            }
            e.keys &&= [...e.keys];
            return function (e, t, n) {
              if (t.type === "add") {
                return Promise.resolve([]);
              } else {
                return e.getMany({
                  trans: t.trans,
                  keys: n,
                  cache: "immutable"
                });
              }
            }(n, e, s).then(l => {
              const c = s.map((n, s) => {
                const c = l[s];
                const h = {
                  onerror: null,
                  onsuccess: null
                };
                if (e.type === "delete") {
                  i.fire.call(h, n, c, t);
                } else if (e.type === "add" || c === undefined) {
                  const i = a.fire.call(h, n, e.values[s], t);
                  if (n == null && i != null) {
                    n = i;
                    e.keys[s] = n;
                    if (!r.outbound) {
                      _(e.values[s], r.keyPath, n);
                    }
                  }
                } else {
                  const r = Bn(c, e.values[s]);
                  const i = u.fire.call(h, r, n, c, t);
                  if (i) {
                    const t = e.values[s];
                    Object.keys(i).forEach(e => {
                      if (o(t, e)) {
                        t[e] = i[e];
                      } else {
                        _(t, e, i[e]);
                      }
                    });
                  }
                }
                return h;
              });
              return n.mutate(e).then(({
                failures: t,
                results: n,
                numFailures: r,
                lastResult: i
              }) => {
                for (let o = 0; o < s.length; ++o) {
                  const r = n ? n[o] : s[o];
                  const i = c[o];
                  if (r == null) {
                    if (i.onerror) {
                      i.onerror(t[o]);
                    }
                  } else if (i.onsuccess) {
                    i.onsuccess(e.type === "put" && l[o] ? e.values[o] : r);
                  }
                }
                return {
                  failures: t,
                  results: n,
                  numFailures: r,
                  lastResult: i
                };
              }).catch(e => {
                c.forEach(t => t.onerror && t.onerror(e));
                return Promise.reject(e);
              });
            });
          }
          function c(e, t, s) {
            return n.query({
              trans: e,
              values: false,
              query: {
                index: r,
                range: t
              },
              limit: s
            }).then(({
              result: n
            }) => l({
              type: "delete",
              keys: n,
              trans: e
            }).then(r => r.numFailures > 0 ? Promise.reject(r.failures[0]) : n.length < s ? {
              failures: [],
              numFailures: 0,
              lastResult: undefined
            } : c(e, {
              ...t,
              lower: n[n.length - 1],
              lowerOpen: true
            }, s)));
          }
        }
      };
    }
  })
};
function Rn(e, t, n) {
  try {
    if (!t) {
      return null;
    }
    if (t.keys.length < e.length) {
      return null;
    }
    const r = [];
    for (let s = 0, i = 0; s < t.keys.length && i < e.length; ++s) {
      if (qt(t.keys[s], e[i]) === 0) {
        r.push(n ? O(t.values[s]) : t.values[s]);
        ++i;
      }
    }
    if (r.length === e.length) {
      return r;
    } else {
      return null;
    }
  } catch (r) {
    return null;
  }
}
const Fn = {
  stack: "dbcore",
  level: -1,
  create: e => ({
    table: t => {
      const n = e.table(t);
      return {
        ...n,
        getMany: e => {
          if (!e.cache) {
            return n.getMany(e);
          }
          const t = Rn(e.keys, e.trans._cache, e.cache === "clone");
          if (t) {
            return Ce.resolve(t);
          } else {
            return n.getMany(e).then(t => {
              e.trans._cache = {
                keys: e.keys,
                values: e.cache === "clone" ? O(t) : t
              };
              return t;
            });
          }
        },
        mutate: e => {
          if (e.type !== "add") {
            e.trans._cache = null;
          }
          return n.mutate(e);
        }
      };
    }
  })
};
function Mn(e) {
  return !("from" in e);
}
const Nn = function (e, t) {
  if (!this) {
    const t = new Nn();
    if (e && "d" in e) {
      r(t, e);
    }
    return t;
  }
  r(this, arguments.length ? {
    d: 1,
    from: e,
    to: arguments.length > 1 ? t : e
  } : {
    d: 0
  });
};
function qn(e, t, n) {
  const s = qt(t, n);
  if (isNaN(s)) {
    return;
  }
  if (s > 0) {
    throw RangeError();
  }
  if (Mn(e)) {
    return r(e, {
      from: t,
      to: n,
      d: 1
    });
  }
  const i = e.l;
  const o = e.r;
  if (qt(n, e.from) < 0) {
    if (i) {
      qn(i, t, n);
    } else {
      e.l = {
        from: t,
        to: n,
        d: 1,
        l: null,
        r: null
      };
    }
    return Ln(e);
  }
  if (qt(t, e.to) > 0) {
    if (o) {
      qn(o, t, n);
    } else {
      e.r = {
        from: t,
        to: n,
        d: 1,
        l: null,
        r: null
      };
    }
    return Ln(e);
  }
  if (qt(t, e.from) < 0) {
    e.from = t;
    e.l = null;
    e.d = o ? o.d + 1 : 1;
  }
  if (qt(n, e.to) > 0) {
    e.to = n;
    e.r = null;
    e.d = e.l ? e.l.d + 1 : 1;
  }
  const a = !e.r;
  if (i && !e.l) {
    $n(e, i);
  }
  if (o && a) {
    $n(e, o);
  }
}
function $n(e, t) {
  if (!Mn(t)) {
    (function e(t, {
      from: n,
      to: r,
      l: s,
      r: i
    }) {
      qn(t, n, r);
      if (s) {
        e(t, s);
      }
      if (i) {
        e(t, i);
      }
    })(e, t);
  }
}
function Un(e) {
  let t = Mn(e) ? null : {
    s: 0,
    n: e
  };
  return {
    next(e) {
      const n = arguments.length > 0;
      while (t) {
        switch (t.s) {
          case 0:
            t.s = 1;
            if (n) {
              while (t.n.l && qt(e, t.n.from) < 0) {
                t = {
                  up: t,
                  n: t.n.l,
                  s: 1
                };
              }
            } else {
              while (t.n.l) {
                t = {
                  up: t,
                  n: t.n.l,
                  s: 1
                };
              }
            }
          case 1:
            t.s = 2;
            if (!n || qt(e, t.n.to) <= 0) {
              return {
                value: t.n,
                done: false
              };
            }
          case 2:
            if (t.n.r) {
              t.s = 3;
              t = {
                up: t,
                n: t.n.r,
                s: 0
              };
              continue;
            }
          case 3:
            t = t.up;
        }
      }
      return {
        done: true
      };
    }
  };
}
function Ln(e) {
  const r = (e.r?.d || 0) - (e.l?.d || 0);
  const s = r > 1 ? "r" : r < -1 ? "l" : "";
  if (s) {
    const t = s === "r" ? "l" : "r";
    const n = {
      ...e
    };
    const r = e[s];
    e.from = r.from;
    e.to = r.to;
    e[s] = r[s];
    n[s] = r[t];
    e[t] = n;
    n.d = Vn(n);
  }
  e.d = Vn(e);
}
function Vn({
  r: e,
  l: t
}) {
  return (e ? t ? Math.max(e.d, t.d) : e.d : t ? t.d : 0) + 1;
}
a(Nn.prototype, {
  add(e) {
    $n(this, e);
    return this;
  },
  addKey(e) {
    qn(this, e, e);
    return this;
  },
  addKeys(e) {
    e.forEach(e => qn(this, e, e));
    return this;
  },
  [j]() {
    return Un(this);
  }
});
const Wn = {
  stack: "dbcore",
  level: 0,
  create: e => {
    const r = e.schema.name;
    const s = new Nn(e.MIN_KEY, e.MAX_KEY);
    return {
      ...e,
      table: i => {
        const o = e.table(i);
        const {
          schema: a
        } = o;
        const {
          primaryKey: u
        } = a;
        const {
          extractKey: l,
          outbound: c
        } = u;
        const h = {
          ...o,
          mutate: e => {
            const t = e.trans;
            const u = t.mutatedParts ||= {};
            const l = e => {
              const t = `idb://${r}/${i}/${e}`;
              return u[t] ||= new Nn();
            };
            const c = l("");
            const h = l(":dels");
            const {
              type: d
            } = e;
            let [f, p] = e.type === "deleteRange" ? [e.range] : e.type === "delete" ? [e.keys] : e.values.length < 50 ? [[], e.values] : [];
            const y = e.trans._cache;
            return o.mutate(e).then(e => {
              if (n(f)) {
                if (d !== "delete") {
                  f = e.results;
                }
                c.addKeys(f);
                const s = Rn(f, y);
                if (!s && d !== "add") {
                  h.addKeys(f);
                }
                if (s || p) {
                  t = l;
                  r = s;
                  i = p;
                  a.indexes.forEach(function (e) {
                    const s = t(e.name || "");
                    function o(t) {
                      if (t != null) {
                        return e.extractKey(t);
                      } else {
                        return null;
                      }
                    }
                    const a = t => e.multiEntry && n(t) ? t.forEach(e => s.addKey(e)) : s.addKey(t);
                    (r || i).forEach((e, t) => {
                      const n = r && o(r[t]);
                      const s = i && o(i[t]);
                      if (qt(n, s) !== 0) {
                        if (n != null) {
                          a(n);
                        }
                        if (s != null) {
                          a(s);
                        }
                      }
                    });
                  });
                }
              } else if (f) {
                const e = {
                  from: f.lower,
                  to: f.upper
                };
                h.add(e);
                c.add(e);
              } else {
                c.add(s);
                h.add(s);
                a.indexes.forEach(e => l(e.name).add(s));
              }
              var t;
              var r;
              var i;
              return e;
            });
          }
        };
        const d = ({
          query: {
            index: t,
            range: n
          }
        }) => {
          return [t, new Nn(n.lower ?? e.MIN_KEY, n.upper ?? e.MAX_KEY)];
        };
        const f = {
          get: e => [u, new Nn(e.key)],
          getMany: e => [u, new Nn().addKeys(e.keys)],
          count: d,
          query: d,
          openCursor: d
        };
        t(f).forEach(e => {
          h[e] = function (t) {
            const {
              subscr: n
            } = Ke;
            if (n) {
              const a = e => {
                const t = `idb://${r}/${i}/${e}`;
                return n[t] ||= new Nn();
              };
              const u = a("");
              const h = a(":dels");
              const [d, p] = f[e](t);
              a(d.name || "").add(p);
              if (!d.isPrimaryKey) {
                if (e !== "count") {
                  const n = e === "query" && c && t.values && o.query({
                    ...t,
                    values: false
                  });
                  return o[e].apply(this, arguments).then(r => {
                    if (e === "query") {
                      if (c && t.values) {
                        return n.then(({
                          result: e
                        }) => {
                          u.addKeys(e);
                          return r;
                        });
                      }
                      const e = t.values ? r.result.map(l) : r.result;
                      if (t.values) {
                        u.addKeys(e);
                      } else {
                        h.addKeys(e);
                      }
                    } else if (e === "openCursor") {
                      const e = r;
                      const n = t.values;
                      return e && Object.create(e, {
                        key: {
                          get: () => {
                            h.addKey(e.primaryKey);
                            return e.key;
                          }
                        },
                        primaryKey: {
                          get() {
                            const t = e.primaryKey;
                            h.addKey(t);
                            return t;
                          }
                        },
                        value: {
                          get: () => {
                            if (n) {
                              u.addKey(e.primaryKey);
                            }
                            return e.value;
                          }
                        }
                      });
                    }
                    return r;
                  });
                }
                h.add(s);
              }
            }
            return o[e].apply(this, arguments);
          };
        });
        return h;
      }
    };
  }
};
class Yn {
  constructor(e, t) {
    this._middlewares = {};
    this.verno = 0;
    const n = Yn.dependencies;
    this._options = t = {
      addons: Yn.addons,
      autoOpen: true,
      indexedDB: n.indexedDB,
      IDBKeyRange: n.IDBKeyRange,
      ...t
    };
    this._deps = {
      indexedDB: t.indexedDB,
      IDBKeyRange: t.IDBKeyRange
    };
    const {
      addons: r
    } = t;
    this._dbSchema = {};
    this._versions = [];
    this._storeNames = [];
    this._allTables = {};
    this.idbdb = null;
    this._novip = this;
    const s = {
      dbOpenError: null,
      isBeingOpened: false,
      onReadyBeingFired: null,
      openComplete: false,
      dbReadyResolve: ee,
      dbReadyPromise: null,
      cancelOpen: ee,
      openCanceller: null,
      autoSchema: true,
      PR1398_maxLoop: 3
    };
    var i;
    var o;
    s.dbReadyPromise = new Ce(e => {
      s.dbReadyResolve = e;
    });
    s.openCanceller = new Ce((e, t) => {
      s.cancelOpen = t;
    });
    this._state = s;
    this.name = e;
    this.on = jt(this, "populate", "blocked", "versionchange", "close", {
      ready: [ue, ee]
    });
    this.on.ready.subscribe = y(this.on.ready.subscribe, e => (t, n) => {
      Yn.vip(() => {
        const r = this._state;
        if (r.openComplete) {
          if (!r.dbOpenError) {
            Ce.resolve().then(t);
          }
          if (n) {
            e(t);
          }
        } else if (r.onReadyBeingFired) {
          r.onReadyBeingFired.push(t);
          if (n) {
            e(t);
          }
        } else {
          e(t);
          const r = this;
          if (!n) {
            e(function e() {
              r.on.ready.unsubscribe(t);
              r.on.ready.unsubscribe(e);
            });
          }
        }
      });
    });
    this.Collection = (i = this, Dt(Lt.prototype, function (e, t) {
      this.db = i;
      let n = St;
      let r = null;
      if (t) {
        try {
          n = t();
        } catch (u) {
          r = u;
        }
      }
      const s = e._ctx;
      const o = s.table;
      const a = o.hook.reading.fire;
      this._ctx = {
        table: o,
        index: s.index,
        isPrimKey: !s.index || o.schema.primKey.keyPath && s.index === o.schema.primKey.name,
        range: n,
        keysOnly: false,
        dir: "next",
        unique: "",
        algorithm: null,
        filter: null,
        replayFilter: null,
        justLimit: true,
        isMatch: null,
        offset: 0,
        limit: Infinity,
        error: r,
        or: s.or,
        valueMapper: a !== te ? a : null
      };
    }));
    this.Table = (o = this, Dt(Ct.prototype, function (e, t, n) {
      this.db = o;
      this._tx = n;
      this.name = e;
      this.schema = t;
      this.hook = o._allTables[e] ? o._allTables[e].hook : jt(null, {
        creating: [se, ee],
        reading: [ne, te],
        updating: [oe, ee],
        deleting: [ie, ee]
      });
    }));
    this.Transaction = function (e) {
      return Dt(on.prototype, function (t, n, r, s, i) {
        this.db = e;
        this.mode = t;
        this.storeNames = n;
        this.schema = r;
        this.chromeTransactionDurability = s;
        this.idbtrans = null;
        this.on = jt(this, "complete", "error", "abort");
        this.parent = i || null;
        this.active = true;
        this._reculock = 0;
        this._blockedFuncs = [];
        this._resolve = null;
        this._reject = null;
        this._waitingFor = null;
        this._waitingQueue = null;
        this._spinCount = 0;
        this._completion = new Ce((e, t) => {
          this._resolve = e;
          this._reject = t;
        });
        this._completion.then(() => {
          this.active = false;
          this.on.complete.fire();
        }, e => {
          var t = this.active;
          this.active = false;
          this.on.error.fire(e);
          if (this.parent) {
            this.parent._reject(e);
          } else if (t && this.idbtrans) {
            this.idbtrans.abort();
          }
          return dt(e);
        });
      });
    }(this);
    this.Version = function (e) {
      return Dt(En.prototype, function (t) {
        this.db = e;
        this._cfg = {
          version: t,
          storesSource: null,
          dbschema: {},
          tables: {},
          contentUpgrade: null
        };
      });
    }(this);
    this.WhereClause = function (e) {
      return Dt(Zt.prototype, function (t, n, r) {
        this.db = e;
        this._ctx = {
          table: t,
          index: n === ":id" ? null : n,
          or: r
        };
        const s = e._deps.indexedDB;
        if (!s) {
          throw new Q.MissingAPI();
        }
        this._cmp = this._ascending = s.cmp.bind(s);
        this._descending = (e, t) => s.cmp(t, e);
        this._max = (e, t) => s.cmp(e, t) > 0 ? e : t;
        this._min = (e, t) => s.cmp(e, t) < 0 ? e : t;
        this._IDBKeyRange = e._deps.IDBKeyRange;
      });
    }(this);
    this.on("versionchange", e => {
      if (e.newVersion > 0) {
        console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`);
      } else {
        console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`);
      }
      this.close();
    });
    this.on("blocked", e => {
      if (!e.newVersion || e.newVersion < e.oldVersion) {
        console.warn(`Dexie.delete('${this.name}') was blocked`);
      } else {
        console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${e.oldVersion / 10}`);
      }
    });
    this._maxKey = cn(t.IDBKeyRange);
    this._createTransaction = (e, t, n, r) => new this.Transaction(e, t, n, this._options.chromeTransactionDurability, r);
    this._fireOnBlocked = e => {
      this.on("blocked").fire(e);
      bt.filter(e => e.name === this.name && e !== this && !e._state.vcFired).map(t => t.on("versionchange").fire(e));
    };
    this.use(In);
    this.use(Tn);
    this.use(Wn);
    this.use(Fn);
    this.vip = Object.create(this, {
      _vip: {
        value: true
      }
    });
    r.forEach(e => e(this));
  }
  version(e) {
    if (isNaN(e) || e < 0.1) {
      throw new Q.Type("Given version is not a positive number");
    }
    e = Math.round(e * 10) / 10;
    if (this.idbdb || this._state.isBeingOpened) {
      throw new Q.Schema("Cannot add version when database is open");
    }
    this.verno = Math.max(this.verno, e);
    const t = this._versions;
    var n = t.filter(t => t._cfg.version === e)[0];
    return n || (n = new this.Version(e), t.push(n), t.sort(gn), n.stores({}), this._state.autoSchema = false, n);
  }
  _whenReady(e) {
    if (this.idbdb && (this._state.openComplete || Ke.letThrough || this._vip)) {
      return e();
    } else {
      return new Ce((e, t) => {
        if (this._state.openComplete) {
          return t(new Q.DatabaseClosed(this._state.dbOpenError));
        }
        if (!this._state.isBeingOpened) {
          if (!this._options.autoOpen) {
            t(new Q.DatabaseClosed());
            return;
          }
          this.open().catch(ee);
        }
        this._state.dbReadyPromise.then(e, t);
      }).then(e);
    }
  }
  use({
    stack: e,
    create: t,
    level: n,
    name: r
  }) {
    if (r) {
      this.unuse({
        stack: e,
        name: r
      });
    }
    const s = this._middlewares[e] ||= [];
    s.push({
      stack: e,
      create: t,
      level: n == null ? 10 : n,
      name: r
    });
    s.sort((e, t) => e.level - t.level);
    return this;
  }
  unuse({
    stack: e,
    name: t,
    create: n
  }) {
    if (e && this._middlewares[e]) {
      this._middlewares[e] = this._middlewares[e].filter(e => n ? e.create !== n : !!t && e.name !== t);
    }
    return this;
  }
  open() {
    return function (e) {
      const n = e._state;
      const {
        indexedDB: r
      } = e._deps;
      if (n.isBeingOpened || e.idbdb) {
        return n.dbReadyPromise.then(() => n.dbOpenError ? dt(n.dbOpenError) : e);
      }
      if (R) {
        n.openCanceller._stackHolder = q();
      }
      n.isBeingOpened = true;
      n.dbOpenError = null;
      n.openComplete = false;
      const s = n.openCanceller;
      function i() {
        if (n.openCanceller !== s) {
          throw new Q.DatabaseClosed("db.open() was cancelled");
        }
      }
      let o = n.dbReadyResolve;
      let a = null;
      let u = false;
      const l = () => new Ce((s, o) => {
        i();
        if (!r) {
          throw new Q.MissingAPI();
        }
        const l = e.name;
        const c = n.autoSchema ? r.open(l) : r.open(l, Math.round(e.verno * 10));
        if (!c) {
          throw new Q.MissingAPI();
        }
        c.onerror = en(o);
        c.onblocked = We(e._fireOnBlocked);
        c.onupgradeneeded = We(s => {
          a = c.transaction;
          if (n.autoSchema && !e._options.allowEmptyDB) {
            c.onerror = tn;
            a.abort();
            c.result.close();
            const e = r.deleteDatabase(l);
            e.onsuccess = e.onerror = We(() => {
              o(new Q.NoSuchDatabase(`Database ${l} doesnt exist`));
            });
          } else {
            a.onerror = en(o);
            var i = s.oldVersion > Math.pow(2, 62) ? 0 : s.oldVersion;
            u = i < 1;
            e._novip.idbdb = c.result;
            (function (e, n, r, s) {
              const i = e._dbSchema;
              const o = e._createTransaction("readwrite", e._storeNames, i);
              o.create(r);
              o._completion.catch(s);
              const a = o._reject.bind(o);
              const u = Ke.transless || Ke;
              Je(() => {
                Ke.trans = o;
                Ke.transless = u;
                if (n === 0) {
                  t(i).forEach(e => {
                    _n(r, e, i[e].primKey, i[e].indexes);
                  });
                  yn(e, r);
                  Ce.follow(() => e.on.populate.fire(o)).catch(a);
                } else {
                  (function ({
                    _novip: e
                  }, n, r, s) {
                    const i = [];
                    const o = e._versions;
                    let a = e._dbSchema = xn(0, e.idbdb, s);
                    let u = false;
                    o.filter(e => e._cfg.version >= n).forEach(o => {
                      i.push(() => {
                        const i = a;
                        const l = o._cfg.dbschema;
                        kn(e, i, s);
                        kn(e, l, s);
                        a = e._dbSchema = l;
                        const c = bn(i, l);
                        c.add.forEach(e => {
                          _n(s, e[0], e[1].primKey, e[1].indexes);
                        });
                        c.change.forEach(e => {
                          if (e.recreate) {
                            throw new Q.Upgrade("Not yet support for changing primary key");
                          }
                          {
                            const t = s.objectStore(e.name);
                            e.add.forEach(e => wn(t, e));
                            e.change.forEach(e => {
                              t.deleteIndex(e.name);
                              wn(t, e);
                            });
                            e.del.forEach(e => t.deleteIndex(e));
                          }
                        });
                        const h = o._cfg.contentUpgrade;
                        if (h && o._cfg.version > n) {
                          yn(e, s);
                          r._memoizedTables = {};
                          u = true;
                          let n = w(l);
                          c.del.forEach(e => {
                            n[e] = i[e];
                          });
                          vn(e, [e.Transaction.prototype]);
                          mn(e, [e.Transaction.prototype], t(n), n);
                          r.schema = n;
                          const o = T(h);
                          let a;
                          if (o) {
                            Ze();
                          }
                          const d = Ce.follow(() => {
                            a = h(r);
                            if (a && o) {
                              var e = et.bind(null, null);
                              a.then(e, e);
                            }
                          });
                          if (a && typeof a.then == "function") {
                            return Ce.resolve(a);
                          } else {
                            return d.then(() => a);
                          }
                        }
                      });
                      i.push(t => {
                        var n;
                        var s;
                        if (!u || !wt) {
                          n = o._cfg.dbschema;
                          s = t;
                          [].slice.call(s.db.objectStoreNames).forEach(e => n[e] == null && s.db.deleteObjectStore(e));
                        }
                        vn(e, [e.Transaction.prototype]);
                        mn(e, [e.Transaction.prototype], e._storeNames, e._dbSchema);
                        r.schema = e._dbSchema;
                      });
                    });
                    return function e() {
                      if (i.length) {
                        return Ce.resolve(i.shift()(r.idbtrans)).then(e);
                      } else {
                        return Ce.resolve();
                      }
                    }().then(() => {
                      var e;
                      var n;
                      n = s;
                      t(e = a).forEach(t => {
                        if (!n.db.objectStoreNames.contains(t)) {
                          _n(n, t, e[t].primKey, e[t].indexes);
                        }
                      });
                    });
                  })(e, n, o, r).catch(a);
                }
              });
            })(e, i / 10, a, o);
          }
        }, o);
        c.onsuccess = We(() => {
          a = null;
          const r = e._novip.idbdb = c.result;
          const i = p(r.objectStoreNames);
          if (i.length > 0) {
            try {
              const s = r.transaction((o = i).length === 1 ? o[0] : o, "readonly");
              if (n.autoSchema) {
                (function ({
                  _novip: e
                }, n, r) {
                  e.verno = n.version / 10;
                  const s = e._dbSchema = xn(0, n, r);
                  e._storeNames = p(n.objectStoreNames, 0);
                  mn(e, [e._allTables], t(s), s);
                })(e, r, s);
              } else {
                kn(e, e._dbSchema, s);
                if (!function (e, t) {
                  const n = bn(xn(0, e.idbdb, t), e._dbSchema);
                  return !n.add.length && !n.change.some(e => e.add.length || e.change.length);
                }(e, s)) {
                  console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.");
                }
              }
              yn(e, s);
            } catch (h) {}
          }
          var o;
          bt.push(e);
          r.onversionchange = We(t => {
            n.vcFired = true;
            e.on("versionchange").fire(t);
          });
          r.onclose = We(t => {
            e.on("close").fire(t);
          });
          if (u) {
            (function ({
              indexedDB: e,
              IDBKeyRange: t
            }, n) {
              if (!Kn(e) && n !== Et) {
                Pn(e, t).put({
                  name: n
                }).catch(ee);
              }
            })(e._deps, l);
          }
          s();
        }, o);
      }).catch(e => e && e.name === "UnknownError" && n.PR1398_maxLoop > 0 ? (n.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), l()) : Ce.reject(e));
      return Ce.race([s, (typeof navigator == "undefined" ? Ce.resolve() : Sn()).then(l)]).then(() => {
        i();
        n.onReadyBeingFired = [];
        return Ce.resolve(On(() => e.on.ready.fire(e.vip))).then(function t() {
          if (n.onReadyBeingFired.length > 0) {
            let r = n.onReadyBeingFired.reduce(ue, ee);
            n.onReadyBeingFired = [];
            return Ce.resolve(On(() => r(e.vip))).then(t);
          }
        });
      }).finally(() => {
        n.onReadyBeingFired = null;
        n.isBeingOpened = false;
      }).then(() => e).catch(t => {
        n.dbOpenError = t;
        try {
          if (a) {
            a.abort();
          }
        } catch (r) {}
        if (s === n.openCanceller) {
          e._close();
        }
        return dt(t);
      }).finally(() => {
        n.openComplete = true;
        o();
      });
    }(this);
  }
  _close() {
    const e = this._state;
    const t = bt.indexOf(this);
    if (t >= 0) {
      bt.splice(t, 1);
    }
    if (this.idbdb) {
      try {
        this.idbdb.close();
      } catch (n) {}
      this._novip.idbdb = null;
    }
    e.dbReadyPromise = new Ce(t => {
      e.dbReadyResolve = t;
    });
    e.openCanceller = new Ce((t, n) => {
      e.cancelOpen = n;
    });
  }
  close() {
    this._close();
    const e = this._state;
    this._options.autoOpen = false;
    e.dbOpenError = new Q.DatabaseClosed();
    if (e.isBeingOpened) {
      e.cancelOpen(e.dbOpenError);
    }
  }
  delete() {
    const e = arguments.length > 0;
    const t = this._state;
    return new Ce((n, r) => {
      const s = () => {
        this.close();
        var e = this._deps.indexedDB.deleteDatabase(this.name);
        e.onsuccess = We(() => {
          (function ({
            indexedDB: e,
            IDBKeyRange: t
          }, n) {
            if (!Kn(e) && n !== Et) {
              Pn(e, t).delete(n).catch(ee);
            }
          })(this._deps, this.name);
          n();
        });
        e.onerror = en(r);
        e.onblocked = this._fireOnBlocked;
      };
      if (e) {
        throw new Q.InvalidArgument("Arguments not allowed in db.delete()");
      }
      if (t.isBeingOpened) {
        t.dbReadyPromise.then(s);
      } else {
        s();
      }
    });
  }
  backendDB() {
    return this.idbdb;
  }
  isOpen() {
    return this.idbdb !== null;
  }
  hasBeenClosed() {
    const e = this._state.dbOpenError;
    return e && e.name === "DatabaseClosed";
  }
  hasFailed() {
    return this._state.dbOpenError !== null;
  }
  dynamicallyOpened() {
    return this._state.autoSchema;
  }
  get tables() {
    return t(this._allTables).map(e => this._allTables[e]);
  }
  transaction() {
    const e = Cn.apply(this, arguments);
    return this._transaction.apply(this, e);
  }
  _transaction(e, t, n) {
    let r = Ke.trans;
    if (!r || r.db !== this || e.indexOf("!") !== -1) {
      r = null;
    }
    const s = e.indexOf("?") !== -1;
    let i;
    let o;
    e = e.replace("!", "").replace("?", "");
    try {
      o = t.map(e => {
        var t = e instanceof this.Table ? e.name : e;
        if (typeof t != "string") {
          throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
        }
        return t;
      });
      if (e == "r" || e === Pt) {
        i = Pt;
      } else {
        if (e != "rw" && e != Kt) {
          throw new Q.InvalidArgument("Invalid transaction mode: " + e);
        }
        i = Kt;
      }
      if (r) {
        if (r.mode === Pt && i === Kt) {
          if (!s) {
            throw new Q.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
          }
          r = null;
        }
        if (r) {
          o.forEach(e => {
            if (r && r.storeNames.indexOf(e) === -1) {
              if (!s) {
                throw new Q.SubTransaction("Table " + e + " not included in parent transaction.");
              }
              r = null;
            }
          });
        }
        if (s && r && !r.active) {
          r = null;
        }
      }
    } catch (u) {
      if (r) {
        return r._promise(null, (e, t) => {
          t(u);
        });
      } else {
        return dt(u);
      }
    }
    const a = jn.bind(null, this, i, o, r, n);
    if (r) {
      return r._promise(i, a, "lock");
    } else if (Ke.trans) {
      return ot(Ke.transless, () => this._whenReady(a));
    } else {
      return this._whenReady(a);
    }
  }
  table(e) {
    if (!o(this._allTables, e)) {
      throw new Q.InvalidTable(`Table ${e} does not exist`);
    }
    return this._allTables[e];
  }
}
const zn = typeof Symbol != "undefined" && "observable" in Symbol ? Symbol.observable : "@@observable";
class Gn {
  constructor(e) {
    this._subscribe = e;
  }
  subscribe(e, t, n) {
    return this._subscribe(e && typeof e != "function" ? e : {
      next: e,
      error: t,
      complete: n
    });
  }
  [zn]() {
    return this;
  }
}
function Hn(e, n) {
  t(n).forEach(t => {
    $n(e[t] ||= new Nn(), n[t]);
  });
  return e;
}
let Xn;
try {
  Xn = {
    indexedDB: e.indexedDB || e.mozIndexedDB || e.webkitIndexedDB || e.msIndexedDB,
    IDBKeyRange: e.IDBKeyRange || e.webkitIDBKeyRange
  };
} catch (er) {
  Xn = {
    indexedDB: null,
    IDBKeyRange: null
  };
}
const Qn = Yn;
function Jn(e) {
  let t = Zn;
  try {
    Zn = true;
    sn.storagemutated.fire(e);
  } finally {
    Zn = t;
  }
}
a(Qn, {
  ...Z,
  delete: e => new Qn(e, {
    addons: []
  }).delete(),
  exists: e => new Qn(e, {
    addons: []
  }).open().then(e => {
    e.close();
    return true;
  }).catch("NoSuchDatabaseError", () => false),
  getDatabaseNames(e) {
    try {
      return function ({
        indexedDB: e,
        IDBKeyRange: t
      }) {
        if (Kn(e)) {
          return Promise.resolve(e.databases()).then(e => e.map(e => e.name).filter(e => e !== Et));
        } else {
          return Pn(e, t).toCollection().primaryKeys();
        }
      }(Qn.dependencies).then(e);
    } catch (t) {
      return dt(new Q.MissingAPI());
    }
  },
  defineClass: () => function (e) {
    r(this, e);
  },
  ignoreTransaction: e => Ke.trans ? ot(Ke.transless, e) : e(),
  vip: On,
  async: function (e) {
    return function () {
      try {
        var t = An(e.apply(this, arguments));
        if (t && typeof t.then == "function") {
          return t;
        } else {
          return Ce.resolve(t);
        }
      } catch (n) {
        return dt(n);
      }
    };
  },
  spawn: function (e, t, n) {
    try {
      var r = An(e.apply(n, t || []));
      if (r && typeof r.then == "function") {
        return r;
      } else {
        return Ce.resolve(r);
      }
    } catch (s) {
      return dt(s);
    }
  },
  currentTransaction: {
    get: () => Ke.trans || null
  },
  waitFor: function (e, t) {
    const n = Ce.resolve(typeof e == "function" ? Qn.ignoreTransaction(e) : e).timeout(t || 60000);
    if (Ke.trans) {
      return Ke.trans.waitFor(n);
    } else {
      return n;
    }
  },
  Promise: Ce,
  debug: {
    get: () => R,
    set: e => {
      F(e, e === "dexie" ? () => true : kt);
    }
  },
  derive: c,
  extend: r,
  props: a,
  override: y,
  Events: jt,
  on: sn,
  liveQuery: function (e) {
    let n;
    let r = false;
    const s = new Gn(s => {
      const i = T(e);
      let o = false;
      let a = {};
      let u = {};
      const l = {
        get closed() {
          return o;
        },
        unsubscribe: () => {
          o = true;
          sn.storagemutated.unsubscribe(f);
        }
      };
      if (s.start) {
        s.start(l);
      }
      let c = false;
      let h = false;
      function d() {
        return t(u).some(e => a[e] && function (e, t) {
          const n = Un(t);
          let r = n.next();
          if (r.done) {
            return false;
          }
          let s = r.value;
          const i = Un(e);
          let o = i.next(s.from);
          let a = o.value;
          while (!r.done && !o.done) {
            if (qt(a.from, s.to) <= 0 && qt(a.to, s.from) >= 0) {
              return true;
            }
            if (qt(s.from, a.from) < 0) {
              s = (r = n.next(a.from)).value;
            } else {
              a = (o = i.next(s.from)).value;
            }
          }
          return false;
        }(a[e], u[e]));
      }
      const f = e => {
        Hn(a, e);
        if (d()) {
          p();
        }
      };
      const p = () => {
        if (c || o) {
          return;
        }
        a = {};
        const t = {};
        const y = function (t) {
          if (i) {
            Ze();
          }
          const n = () => Je(e, {
            subscr: t,
            trans: null
          });
          const r = Ke.trans ? ot(Ke.transless, n) : n();
          if (i) {
            r.then(et, et);
          }
          return r;
        }(t);
        if (!h) {
          sn(nn, f);
          h = true;
        }
        c = true;
        Promise.resolve(y).then(e => {
          r = true;
          n = e;
          c = false;
          if (!o) {
            if (d()) {
              p();
            } else {
              a = {};
              u = t;
              if (s.next) {
                s.next(e);
              }
            }
          }
        }, e => {
          c = false;
          r = false;
          if (s.error) {
            s.error(e);
          }
          l.unsubscribe();
        });
      };
      p();
      return l;
    });
    s.hasValue = () => r;
    s.getValue = () => n;
    return s;
  },
  extendObservabilitySet: Hn,
  getByKeyPath: b,
  setByKeyPath: _,
  delByKeyPath: function (e, t) {
    if (typeof t == "string") {
      _(e, t, undefined);
    } else if ("length" in t) {
      [].map.call(t, function (t) {
        _(e, t, undefined);
      });
    }
  },
  shallowClone: w,
  deepClone: O,
  getObjectDiff: Bn,
  cmp: qt,
  asap: v,
  minKey: mt,
  addons: [],
  connections: bt,
  errnames: H,
  dependencies: Xn,
  semVer: pt,
  version: pt.split(".").map(e => parseInt(e)).reduce((e, t, n) => e + t / Math.pow(10, n * 2))
});
Qn.maxKey = cn(Qn.dependencies.IDBKeyRange);
if (typeof dispatchEvent != "undefined" && typeof addEventListener != "undefined") {
  sn(nn, e => {
    if (!Zn) {
      let t;
      if (_t) {
        t = document.createEvent("CustomEvent");
        t.initCustomEvent(rn, true, true, e);
      } else {
        t = new CustomEvent(rn, {
          detail: e
        });
      }
      Zn = true;
      dispatchEvent(t);
      Zn = false;
    }
  });
  addEventListener(rn, ({
    detail: e
  }) => {
    if (!Zn) {
      Jn(e);
    }
  });
}
let Zn = false;
if (typeof BroadcastChannel != "undefined") {
  const e = new BroadcastChannel(rn);
  if (typeof e.unref == "function") {
    e.unref();
  }
  sn(nn, t => {
    if (!Zn) {
      e.postMessage(t);
    }
  });
  e.onmessage = e => {
    if (e.data) {
      Jn(e.data);
    }
  };
} else if (typeof self != "undefined" && typeof navigator != "undefined") {
  sn(nn, e => {
    try {
      if (!Zn) {
        if (typeof localStorage != "undefined") {
          localStorage.setItem(rn, JSON.stringify({
            trig: Math.random(),
            changedParts: e
          }));
        }
        if (typeof self.clients == "object") {
          [...self.clients.matchAll({
            includeUncontrolled: true
          })].forEach(t => t.postMessage({
            type: rn,
            changedParts: e
          }));
        }
      }
    } catch (t) {}
  });
  if (typeof addEventListener != "undefined") {
    addEventListener("storage", e => {
      if (e.key === rn) {
        const t = JSON.parse(e.newValue);
        if (t) {
          Jn(t.changedParts);
        }
      }
    });
  }
  const e = self.document && navigator.serviceWorker;
  if (e) {
    e.addEventListener("message", function ({
      data: e
    }) {
      if (e && e.type === rn) {
        Jn(e.changedParts);
      }
    });
  }
}
Ce.rejectionMapper = function (e, t) {
  if (!e || e instanceof W || e instanceof TypeError || e instanceof SyntaxError || !e.name || !J[e.name]) {
    return e;
  }
  var n = new J[e.name](t || e.message, e);
  if ("stack" in e) {
    l(n, "stack", {
      get: function () {
        return this.inner.stack;
      }
    });
  }
  return n;
};
F(R, kt);
export { Yn as X };