try {
  if (self["workbox:window:7.3.0"]) {
    _();
  }
} catch (l) {}
function n(n, t) {
  return new Promise(function (e) {
    var r = new MessageChannel();
    r.port1.onmessage = function (n) {
      e(n.data);
    };
    n.postMessage(t, [r.port2]);
  });
}
function t(n, t) {
  if (t == null || t > n.length) {
    t = n.length;
  }
  for (var e = 0, r = Array(t); e < t; e++) {
    r[e] = n[e];
  }
  return r;
}
function e(n, t) {
  return (e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (n, t) {
    n.__proto__ = t;
    return n;
  })(n, t);
}
function r(n) {
  var t = function (n) {
    if (typeof n != "object" || !n) {
      return n;
    }
    var t = n[Symbol.toPrimitive];
    if (t !== undefined) {
      var e = t.call(n, "string");
      if (typeof e != "object") {
        return e;
      }
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(n);
  }(n);
  if (typeof t == "symbol") {
    return t;
  } else {
    return t + "";
  }
}
try {
  if (self["workbox:core:7.3.0"]) {
    _();
  }
} catch (l) {}
var o = function () {
  var n = this;
  this.promise = new Promise(function (t, e) {
    n.resolve = t;
    n.reject = e;
  });
};
function i(n, t) {
  var e = location.href;
  return new URL(n, e).href === new URL(t, e).href;
}
var a = function (n, t) {
  this.type = n;
  Object.assign(this, t);
};
function s(n, t, e) {
  if (e) {
    if (t) {
      return t(n);
    } else {
      return n;
    }
  } else {
    if (!n || !n.then) {
      n = Promise.resolve(n);
    }
    if (t) {
      return n.then(t);
    } else {
      return n;
    }
  }
}
function c() {}
var u = {
  type: "SKIP_WAITING"
};
function f(n, t) {
  if (n && n.then) {
    return n.then(c);
  } else {
    return Promise.resolve();
  }
}
var v = function (t) {
  function c(n, e) {
    var r;
    var c;
    if (e === undefined) {
      e = {};
    }
    (r = t.call(this) || this).nn = {};
    r.tn = 0;
    r.rn = new o();
    r.en = new o();
    r.on = new o();
    r.un = 0;
    r.an = new Set();
    r.cn = function () {
      var n = r.fn;
      var t = n.installing;
      if (r.tn > 0 || !i(t.scriptURL, r.sn.toString()) || performance.now() > r.un + 60000) {
        r.vn = t;
        n.removeEventListener("updatefound", r.cn);
      } else {
        r.hn = t;
        r.an.add(t);
        r.rn.resolve(t);
      }
      ++r.tn;
      t.addEventListener("statechange", r.ln);
    };
    r.ln = function (n) {
      var t = r.fn;
      var e = n.target;
      var o = e.state;
      var i = e === r.vn;
      var s = {
        sw: e,
        isExternal: i,
        originalEvent: n
      };
      if (!i && r.mn) {
        s.isUpdate = true;
      }
      r.dispatchEvent(new a(o, s));
      if (o === "installed") {
        r.wn = self.setTimeout(function () {
          if (o === "installed" && t.waiting === e) {
            r.dispatchEvent(new a("waiting", s));
          }
        }, 200);
      } else if (o === "activating") {
        clearTimeout(r.wn);
        if (!i) {
          r.en.resolve(e);
        }
      }
    };
    r.yn = function (n) {
      var t = r.hn;
      var e = t !== navigator.serviceWorker.controller;
      r.dispatchEvent(new a("controlling", {
        isExternal: e,
        originalEvent: n,
        sw: t,
        isUpdate: r.mn
      }));
      if (!e) {
        r.on.resolve(t);
      }
    };
    c = function (n) {
      var t = n.data;
      var e = n.ports;
      var o = n.source;
      return s(r.getSW(), function () {
        if (r.an.has(o)) {
          r.dispatchEvent(new a("message", {
            data: t,
            originalEvent: n,
            ports: e,
            sw: o
          }));
        }
      });
    };
    r.gn = function () {
      var n = [];
      for (var t = 0; t < arguments.length; t++) {
        n[t] = arguments[t];
      }
      try {
        return Promise.resolve(c.apply(this, n));
      } catch (e) {
        return Promise.reject(e);
      }
    };
    r.sn = n;
    r.nn = e;
    navigator.serviceWorker.addEventListener("message", r.gn);
    return r;
  }
  var v;
  var l;
  l = t;
  (v = c).prototype = Object.create(l.prototype);
  v.prototype.constructor = v;
  e(v, l);
  var h;
  var d;
  var p = c.prototype;
  p.register = function (n) {
    var t;
    var e;
    var r = (n === undefined ? {} : n).immediate;
    var o = r !== undefined && r;
    try {
      var c = this;
      return s((t = function () {
        c.mn = Boolean(navigator.serviceWorker.controller);
        c.dn = c.pn();
        return s(c.bn(), function (n) {
          c.fn = n;
          if (c.dn) {
            c.hn = c.dn;
            c.en.resolve(c.dn);
            c.on.resolve(c.dn);
            c.dn.addEventListener("statechange", c.ln, {
              once: true
            });
          }
          var t = c.fn.waiting;
          if (t && i(t.scriptURL, c.sn.toString())) {
            c.hn = t;
            Promise.resolve().then(function () {
              c.dispatchEvent(new a("waiting", {
                sw: t,
                wasWaitingBeforeRegister: true
              }));
            }).then(function () {});
          }
          if (c.hn) {
            c.rn.resolve(c.hn);
            c.an.add(c.hn);
          }
          c.fn.addEventListener("updatefound", c.cn);
          navigator.serviceWorker.addEventListener("controllerchange", c.yn);
          return c.fn;
        });
      }, (e = function () {
        if (!o && document.readyState !== "complete") {
          return f(new Promise(function (n) {
            return window.addEventListener("load", n);
          }));
        }
      }()) && e.then ? e.then(t) : t()));
    } catch (u) {
      return Promise.reject(u);
    }
  };
  p.update = function () {
    try {
      if (this.fn) {
        return s(f(this.fn.update()));
      } else {
        return s();
      }
    } catch (h) {
      return Promise.reject(h);
    }
  };
  p.getSW = function () {
    if (this.hn !== undefined) {
      return Promise.resolve(this.hn);
    } else {
      return this.rn.promise;
    }
  };
  p.messageSW = function (t) {
    try {
      return s(this.getSW(), function (e) {
        return n(e, t);
      });
    } catch (h) {
      return Promise.reject(h);
    }
  };
  p.messageSkipWaiting = function () {
    if (this.fn && this.fn.waiting) {
      n(this.fn.waiting, u);
    }
  };
  p.pn = function () {
    var n = navigator.serviceWorker.controller;
    if (n && i(n.scriptURL, this.sn.toString())) {
      return n;
    } else {
      return undefined;
    }
  };
  p.bn = function () {
    try {
      var n = this;
      return s(function (t, e) {
        try {
          var r = s(navigator.serviceWorker.register(n.sn, n.nn), function (t) {
            n.un = performance.now();
            return t;
          });
        } catch (o) {
          return e(o);
        }
        if (r && r.then) {
          return r.then(undefined, e);
        } else {
          return r;
        }
      }(0, function (n) {
        throw n;
      }));
    } catch (t) {
      return Promise.reject(t);
    }
  };
  h = c;
  if (d = [{
    key: "active",
    get: function () {
      return this.en.promise;
    }
  }, {
    key: "controlling",
    get: function () {
      return this.on.promise;
    }
  }]) {
    (function (n, t) {
      for (var e = 0; e < t.length; e++) {
        var o = t[e];
        o.enumerable = o.enumerable || false;
        o.configurable = true;
        if ("value" in o) {
          o.writable = true;
        }
        Object.defineProperty(n, r(o.key), o);
      }
    })(h.prototype, d);
  }
  Object.defineProperty(h, "prototype", {
    writable: false
  });
  return h;
}(function () {
  function n() {
    this.Pn = new Map();
  }
  var e = n.prototype;
  e.addEventListener = function (n, t) {
    this.jn(n).add(t);
  };
  e.removeEventListener = function (n, t) {
    this.jn(n).delete(t);
  };
  e.dispatchEvent = function (n) {
    n.target = this;
    for (var e, r = function (n) {
        var e = typeof Symbol != "undefined" && n[Symbol.iterator] || n["@@iterator"];
        if (e) {
          return (e = e.call(n)).next.bind(e);
        }
        if (Array.isArray(n) || (e = function (n, e) {
          if (n) {
            if (typeof n == "string") {
              return t(n, e);
            }
            var r = {}.toString.call(n).slice(8, -1);
            if (r === "Object" && n.constructor) {
              r = n.constructor.name;
            }
            if (r === "Map" || r === "Set") {
              return Array.from(n);
            } else if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) {
              return t(n, e);
            } else {
              return undefined;
            }
          }
        }(n))) {
          if (e) {
            n = e;
          }
          var r = 0;
          return function () {
            if (r >= n.length) {
              return {
                done: true
              };
            } else {
              return {
                done: false,
                value: n[r++]
              };
            }
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }(this.jn(n.type)); !(e = r()).done;) {
      (0, e.value)(n);
    }
  };
  e.jn = function (n) {
    if (!this.Pn.has(n)) {
      this.Pn.set(n, new Set());
    }
    return this.Pn.get(n);
  };
  return n;
}());
export { v as Workbox, a as WorkboxEvent, n as messageSW };