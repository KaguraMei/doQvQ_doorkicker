function e(e, t) {
  var r = {};
  for (var s in e) {
    if (Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0) {
      r[s] = e[s];
    }
  }
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var n = 0;
    for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) {
      if (t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n])) {
        r[s[n]] = e[s[n]];
      }
    }
  }
  return r;
}
if (typeof SuppressedError == "function") {
  SuppressedError;
}
class t extends Error {
  constructor(e, t = "FunctionsError", r) {
    super(e);
    this.name = t;
    this.context = r;
  }
}
class r extends t {
  constructor(e) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
  }
}
class s extends t {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class n extends t {
  constructor(e) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
  }
}
var i;
var a;
(a = i ||= {}).Any = "any";
a.ApNortheast1 = "ap-northeast-1";
a.ApNortheast2 = "ap-northeast-2";
a.ApSouth1 = "ap-south-1";
a.ApSoutheast1 = "ap-southeast-1";
a.ApSoutheast2 = "ap-southeast-2";
a.CaCentral1 = "ca-central-1";
a.EuCentral1 = "eu-central-1";
a.EuWest1 = "eu-west-1";
a.EuWest2 = "eu-west-2";
a.EuWest3 = "eu-west-3";
a.SaEast1 = "sa-east-1";
a.UsEast1 = "us-east-1";
a.UsWest1 = "us-west-1";
a.UsWest2 = "us-west-2";
class o {
  constructor(e, {
    headers: t = {},
    customFetch: r,
    region: s = i.Any
  } = {}) {
    this.url = e;
    this.headers = t;
    this.region = s;
    this.fetch = (e => e ? (...t) => e(...t) : (...e) => fetch(...e))(r);
  }
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  invoke(e) {
    t = this;
    i = arguments;
    o = function* (e, t = {}) {
      let a;
      let o;
      try {
        const {
          headers: l,
          method: c,
          body: u,
          signal: h,
          timeout: d
        } = t;
        let p = {};
        let {
          region: f
        } = t;
        f ||= this.region;
        const g = new URL(`${this.url}/${e}`);
        let y;
        if (f && f !== "any") {
          p["x-region"] = f;
          g.searchParams.set("forceFunctionRegion", f);
        }
        if (u && (l && !Object.prototype.hasOwnProperty.call(l, "Content-Type") || !l)) {
          if (typeof Blob != "undefined" && u instanceof Blob || u instanceof ArrayBuffer) {
            p["Content-Type"] = "application/octet-stream";
            y = u;
          } else if (typeof u == "string") {
            p["Content-Type"] = "text/plain";
            y = u;
          } else if (typeof FormData != "undefined" && u instanceof FormData) {
            y = u;
          } else {
            p["Content-Type"] = "application/json";
            y = JSON.stringify(u);
          }
        } else {
          y = !u || typeof u == "string" || typeof Blob != "undefined" && u instanceof Blob || u instanceof ArrayBuffer || typeof FormData != "undefined" && u instanceof FormData ? u : JSON.stringify(u);
        }
        let m = h;
        if (d) {
          o = new AbortController();
          a = setTimeout(() => o.abort(), d);
          if (h) {
            m = o.signal;
            h.addEventListener("abort", () => o.abort());
          } else {
            m = o.signal;
          }
        }
        const w = yield this.fetch(g.toString(), {
          method: c || "POST",
          headers: Object.assign(Object.assign(Object.assign({}, p), this.headers), l),
          body: y,
          signal: m
        }).catch(e => {
          throw new r(e);
        });
        const v = w.headers.get("x-relay-error");
        if (v && v === "true") {
          throw new s(w);
        }
        if (!w.ok) {
          throw new n(w);
        }
        let b;
        let _ = (w.headers.get("Content-Type") ?? "text/plain").split(";")[0].trim();
        b = _ === "application/json" ? yield w.json() : _ === "application/octet-stream" || _ === "application/pdf" ? yield w.blob() : _ === "text/event-stream" ? w : _ === "multipart/form-data" ? yield w.formData() : yield w.text();
        return {
          data: b,
          error: null,
          response: w
        };
      } catch (l) {
        return {
          data: null,
          error: l,
          response: l instanceof n || l instanceof s ? l.context : undefined
        };
      } finally {
        if (a) {
          clearTimeout(a);
        }
      }
    };
    return new ((a = undefined) || (a = Promise))(function (e, r) {
      function s(e) {
        try {
          l(o.next(e));
        } catch (t) {
          r(t);
        }
      }
      function n(e) {
        try {
          l(o.throw(e));
        } catch (t) {
          r(t);
        }
      }
      function l(t) {
        var r;
        if (t.done) {
          e(t.value);
        } else {
          (r = t.value, r instanceof a ? r : new a(function (e) {
            e(r);
          })).then(s, n);
        }
      }
      l((o = o.apply(t, i || [])).next());
    });
    var t;
    var i;
    var a;
    var o;
  }
}
var l = class extends Error {
  constructor(e) {
    super(e.message);
    this.name = "PostgrestError";
    this.details = e.details;
    this.hint = e.hint;
    this.code = e.code;
  }
};
var c = class {
  constructor(e) {
    var t;
    var r;
    this.shouldThrowOnError = false;
    this.method = e.method;
    this.url = e.url;
    this.headers = new Headers(e.headers);
    this.schema = e.schema;
    this.body = e.body;
    this.shouldThrowOnError = (t = e.shouldThrowOnError) !== null && t !== undefined && t;
    this.signal = e.signal;
    this.isMaybeSingle = (r = e.isMaybeSingle) !== null && r !== undefined && r;
    this.urlLengthLimit = e.urlLengthLimit ?? 8000;
    if (e.fetch) {
      this.fetch = e.fetch;
    } else {
      this.fetch = fetch;
    }
  }
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  setHeader(e, t) {
    this.headers = new Headers(this.headers);
    this.headers.set(e, t);
    return this;
  }
  then(e, t) {
    var r = this;
    if (this.schema !== undefined) {
      if (["GET", "HEAD"].includes(this.method)) {
        this.headers.set("Accept-Profile", this.schema);
      } else {
        this.headers.set("Content-Profile", this.schema);
      }
    }
    if (this.method !== "GET" && this.method !== "HEAD") {
      this.headers.set("Content-Type", "application/json");
    }
    let s = (0, this.fetch)(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal
    }).then(async e => {
      let t = null;
      let s = null;
      let n = null;
      let i = e.status;
      let a = e.statusText;
      if (e.ok) {
        var o;
        var c;
        if (r.method !== "HEAD") {
          var u;
          const t = await e.text();
          if (t !== "") {
            s = r.headers.get("Accept") === "text/csv" || r.headers.get("Accept") && ((u = r.headers.get("Accept")) === null || u === undefined ? undefined : u.includes("application/vnd.pgrst.plan+text")) ? t : JSON.parse(t);
          }
        }
        const l = (o = r.headers.get("Prefer")) === null || o === undefined ? undefined : o.match(/count=(exact|planned|estimated)/);
        const h = (c = e.headers.get("content-range")) === null || c === undefined ? undefined : c.split("/");
        if (l && h && h.length > 1) {
          n = parseInt(h[1]);
        }
        if (r.isMaybeSingle && r.method === "GET" && Array.isArray(s)) {
          if (s.length > 1) {
            t = {
              code: "PGRST116",
              details: `Results contain ${s.length} rows, application/vnd.pgrst.object+json requires 1 row`,
              hint: null,
              message: "JSON object requested, multiple (or no) rows returned"
            };
            s = null;
            n = null;
            i = 406;
            a = "Not Acceptable";
          } else {
            s = s.length === 1 ? s[0] : null;
          }
        }
      } else {
        var h;
        const n = await e.text();
        try {
          t = JSON.parse(n);
          if (Array.isArray(t) && e.status === 404) {
            s = [];
            t = null;
            i = 200;
            a = "OK";
          }
        } catch (d) {
          if (e.status === 404 && n === "") {
            i = 204;
            a = "No Content";
          } else {
            t = {
              message: n
            };
          }
        }
        if (t && r.isMaybeSingle && (t == null || (h = t.details) === null || h === undefined ? undefined : h.includes("0 rows"))) {
          t = null;
          i = 200;
          a = "OK";
        }
        if (t && r.shouldThrowOnError) {
          throw new l(t);
        }
      }
      return {
        error: t,
        data: s,
        count: n,
        status: i,
        statusText: a
      };
    });
    if (!this.shouldThrowOnError) {
      s = s.catch(e => {
        let r = "";
        let s = "";
        let n = "";
        const i = e == null ? undefined : e.cause;
        if (i) {
          const t = (i == null ? undefined : i.message) ?? "";
          const s = (i == null ? undefined : i.code) ?? "";
          r = `${(e == null ? undefined : e.name) ?? "FetchError"}: ${e == null ? undefined : e.message}`;
          r += `\n\nCaused by: ${(i == null ? undefined : i.name) ?? "Error"}: ${t}`;
          if (s) {
            r += ` (${s})`;
          }
          if (i == null ? undefined : i.stack) {
            r += `\n${i.stack}`;
          }
        } else {
          r = (e == null ? undefined : e.stack) ?? "";
        }
        const h = this.url.toString().length;
        if ((e == null ? undefined : e.name) === "AbortError" || (e == null ? undefined : e.code) === "ABORT_ERR") {
          n = "";
          s = "Request was aborted (timeout or manual cancellation)";
          if (h > this.urlLengthLimit) {
            s += `. Note: Your request URL is ${h} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`;
          }
        } else if ((i == null ? undefined : i.name) === "HeadersOverflowError" || (i == null ? undefined : i.code) === "UND_ERR_HEADERS_OVERFLOW") {
          n = "";
          s = "HTTP headers exceeded server limits (typically 16KB)";
          if (h > this.urlLengthLimit) {
            s += `. Your request URL is ${h} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`;
          }
        }
        return {
          error: {
            message: `${(e == null ? undefined : e.name) ?? "FetchError"}: ${e == null ? undefined : e.message}`,
            details: r,
            hint: s,
            code: n
          },
          data: null,
          count: null,
          status: 0,
          statusText: ""
        };
      });
    }
    return s.then(e, t);
  }
  returns() {
    return this;
  }
  overrideTypes() {
    return this;
  }
};
var u = class extends c {
  select(e) {
    let t = false;
    const r = (e ?? "*").split("").map(e => /\s/.test(e) && !t ? "" : (e === "\"" && (t = !t), e)).join("");
    this.url.searchParams.set("select", r);
    this.headers.append("Prefer", "return=representation");
    return this;
  }
  order(e, {
    ascending: t = true,
    nullsFirst: r,
    foreignTable: s,
    referencedTable: n = s
  } = {}) {
    const i = n ? `${n}.order` : "order";
    const a = this.url.searchParams.get(i);
    this.url.searchParams.set(i, `${a ? `${a},` : ""}${e}.${t ? "asc" : "desc"}${r === undefined ? "" : r ? ".nullsfirst" : ".nullslast"}`);
    return this;
  }
  limit(e, {
    foreignTable: t,
    referencedTable: r = t
  } = {}) {
    const s = r === undefined ? "limit" : `${r}.limit`;
    this.url.searchParams.set(s, `${e}`);
    return this;
  }
  range(e, t, {
    foreignTable: r,
    referencedTable: s = r
  } = {}) {
    const n = s === undefined ? "offset" : `${s}.offset`;
    const i = s === undefined ? "limit" : `${s}.limit`;
    this.url.searchParams.set(n, `${e}`);
    this.url.searchParams.set(i, "" + (t - e + 1));
    return this;
  }
  abortSignal(e) {
    this.signal = e;
    return this;
  }
  single() {
    this.headers.set("Accept", "application/vnd.pgrst.object+json");
    return this;
  }
  maybeSingle() {
    if (this.method === "GET") {
      this.headers.set("Accept", "application/json");
    } else {
      this.headers.set("Accept", "application/vnd.pgrst.object+json");
    }
    this.isMaybeSingle = true;
    return this;
  }
  csv() {
    this.headers.set("Accept", "text/csv");
    return this;
  }
  geojson() {
    this.headers.set("Accept", "application/geo+json");
    return this;
  }
  explain({
    analyze: e = false,
    verbose: t = false,
    settings: r = false,
    buffers: s = false,
    wal: n = false,
    format: i = "text"
  } = {}) {
    const o = [e ? "analyze" : null, t ? "verbose" : null, r ? "settings" : null, s ? "buffers" : null, n ? "wal" : null].filter(Boolean).join("|");
    const l = this.headers.get("Accept") ?? "application/json";
    this.headers.set("Accept", `application/vnd.pgrst.plan+${i}; for="${l}"; options=${o};`);
    return this;
  }
  rollback() {
    this.headers.append("Prefer", "tx=rollback");
    return this;
  }
  returns() {
    return this;
  }
  maxAffected(e) {
    this.headers.append("Prefer", "handling=strict");
    this.headers.append("Prefer", `max-affected=${e}`);
    return this;
  }
};
const h = new RegExp("[,()]");
var d = class extends u {
  eq(e, t) {
    this.url.searchParams.append(e, `eq.${t}`);
    return this;
  }
  neq(e, t) {
    this.url.searchParams.append(e, `neq.${t}`);
    return this;
  }
  gt(e, t) {
    this.url.searchParams.append(e, `gt.${t}`);
    return this;
  }
  gte(e, t) {
    this.url.searchParams.append(e, `gte.${t}`);
    return this;
  }
  lt(e, t) {
    this.url.searchParams.append(e, `lt.${t}`);
    return this;
  }
  lte(e, t) {
    this.url.searchParams.append(e, `lte.${t}`);
    return this;
  }
  like(e, t) {
    this.url.searchParams.append(e, `like.${t}`);
    return this;
  }
  likeAllOf(e, t) {
    this.url.searchParams.append(e, `like(all).{${t.join(",")}}`);
    return this;
  }
  likeAnyOf(e, t) {
    this.url.searchParams.append(e, `like(any).{${t.join(",")}}`);
    return this;
  }
  ilike(e, t) {
    this.url.searchParams.append(e, `ilike.${t}`);
    return this;
  }
  ilikeAllOf(e, t) {
    this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`);
    return this;
  }
  ilikeAnyOf(e, t) {
    this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`);
    return this;
  }
  regexMatch(e, t) {
    this.url.searchParams.append(e, `match.${t}`);
    return this;
  }
  regexIMatch(e, t) {
    this.url.searchParams.append(e, `imatch.${t}`);
    return this;
  }
  is(e, t) {
    this.url.searchParams.append(e, `is.${t}`);
    return this;
  }
  isDistinct(e, t) {
    this.url.searchParams.append(e, `isdistinct.${t}`);
    return this;
  }
  in(e, t) {
    const r = Array.from(new Set(t)).map(e => typeof e == "string" && h.test(e) ? `"${e}"` : `${e}`).join(",");
    this.url.searchParams.append(e, `in.(${r})`);
    return this;
  }
  notIn(e, t) {
    const r = Array.from(new Set(t)).map(e => typeof e == "string" && h.test(e) ? `"${e}"` : `${e}`).join(",");
    this.url.searchParams.append(e, `not.in.(${r})`);
    return this;
  }
  contains(e, t) {
    if (typeof t == "string") {
      this.url.searchParams.append(e, `cs.${t}`);
    } else if (Array.isArray(t)) {
      this.url.searchParams.append(e, `cs.{${t.join(",")}}`);
    } else {
      this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`);
    }
    return this;
  }
  containedBy(e, t) {
    if (typeof t == "string") {
      this.url.searchParams.append(e, `cd.${t}`);
    } else if (Array.isArray(t)) {
      this.url.searchParams.append(e, `cd.{${t.join(",")}}`);
    } else {
      this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`);
    }
    return this;
  }
  rangeGt(e, t) {
    this.url.searchParams.append(e, `sr.${t}`);
    return this;
  }
  rangeGte(e, t) {
    this.url.searchParams.append(e, `nxl.${t}`);
    return this;
  }
  rangeLt(e, t) {
    this.url.searchParams.append(e, `sl.${t}`);
    return this;
  }
  rangeLte(e, t) {
    this.url.searchParams.append(e, `nxr.${t}`);
    return this;
  }
  rangeAdjacent(e, t) {
    this.url.searchParams.append(e, `adj.${t}`);
    return this;
  }
  overlaps(e, t) {
    if (typeof t == "string") {
      this.url.searchParams.append(e, `ov.${t}`);
    } else {
      this.url.searchParams.append(e, `ov.{${t.join(",")}}`);
    }
    return this;
  }
  textSearch(e, t, {
    config: r,
    type: s
  } = {}) {
    let n = "";
    if (s === "plain") {
      n = "pl";
    } else if (s === "phrase") {
      n = "ph";
    } else if (s === "websearch") {
      n = "w";
    }
    const i = r === undefined ? "" : `(${r})`;
    this.url.searchParams.append(e, `${n}fts${i}.${t}`);
    return this;
  }
  match(e) {
    Object.entries(e).forEach(([e, t]) => {
      this.url.searchParams.append(e, `eq.${t}`);
    });
    return this;
  }
  not(e, t, r) {
    this.url.searchParams.append(e, `not.${t}.${r}`);
    return this;
  }
  or(e, {
    foreignTable: t,
    referencedTable: r = t
  } = {}) {
    const s = r ? `${r}.or` : "or";
    this.url.searchParams.append(s, `(${e})`);
    return this;
  }
  filter(e, t, r) {
    this.url.searchParams.append(e, `${t}.${r}`);
    return this;
  }
};
var p = class {
  constructor(e, {
    headers: t = {},
    schema: r,
    fetch: s,
    urlLengthLimit: n = 8000
  }) {
    this.url = e;
    this.headers = new Headers(t);
    this.schema = r;
    this.fetch = s;
    this.urlLengthLimit = n;
  }
  cloneRequestState() {
    return {
      url: new URL(this.url.toString()),
      headers: new Headers(this.headers)
    };
  }
  select(e, t) {
    const {
      head: r = false,
      count: s
    } = t ?? {};
    const n = r ? "HEAD" : "GET";
    let i = false;
    const a = (e ?? "*").split("").map(e => /\s/.test(e) && !i ? "" : (e === "\"" && (i = !i), e)).join("");
    const {
      url: o,
      headers: l
    } = this.cloneRequestState();
    o.searchParams.set("select", a);
    if (s) {
      l.append("Prefer", `count=${s}`);
    }
    return new d({
      method: n,
      url: o,
      headers: l,
      schema: this.schema,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  insert(e, {
    count: t,
    defaultToNull: r = true
  } = {}) {
    const {
      url: n,
      headers: i
    } = this.cloneRequestState();
    if (t) {
      i.append("Prefer", `count=${t}`);
    }
    if (!r) {
      i.append("Prefer", "missing=default");
    }
    if (Array.isArray(e)) {
      const t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
      if (t.length > 0) {
        const e = [...new Set(t)].map(e => `"${e}"`);
        n.searchParams.set("columns", e.join(","));
      }
    }
    return new d({
      method: "POST",
      url: n,
      headers: i,
      schema: this.schema,
      body: e,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  upsert(e, {
    onConflict: t,
    ignoreDuplicates: r = false,
    count: s,
    defaultToNull: n = true
  } = {}) {
    const {
      url: a,
      headers: o
    } = this.cloneRequestState();
    o.append("Prefer", `resolution=${r ? "ignore" : "merge"}-duplicates`);
    if (t !== undefined) {
      a.searchParams.set("on_conflict", t);
    }
    if (s) {
      o.append("Prefer", `count=${s}`);
    }
    if (!n) {
      o.append("Prefer", "missing=default");
    }
    if (Array.isArray(e)) {
      const t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
      if (t.length > 0) {
        const e = [...new Set(t)].map(e => `"${e}"`);
        a.searchParams.set("columns", e.join(","));
      }
    }
    return new d({
      method: "POST",
      url: a,
      headers: o,
      schema: this.schema,
      body: e,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  update(e, {
    count: t
  } = {}) {
    const {
      url: s,
      headers: n
    } = this.cloneRequestState();
    if (t) {
      n.append("Prefer", `count=${t}`);
    }
    return new d({
      method: "PATCH",
      url: s,
      headers: n,
      schema: this.schema,
      body: e,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  delete({
    count: e
  } = {}) {
    const {
      url: r,
      headers: s
    } = this.cloneRequestState();
    if (e) {
      s.append("Prefer", `count=${e}`);
    }
    return new d({
      method: "DELETE",
      url: r,
      headers: s,
      schema: this.schema,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
};
function f(e) {
  return (f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
    return typeof e;
  } : function (e) {
    if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof e;
    }
  })(e);
}
function g(e, t, r) {
  if ((t = function (e) {
    var t = function (e, t) {
      if (f(e) != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, t);
        if (f(s) != "object") {
          return s;
        }
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e, "string");
    if (f(t) == "symbol") {
      return t;
    } else {
      return t + "";
    }
  }(t)) in e) {
    Object.defineProperty(e, t, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    e[t] = r;
  }
  return e;
}
function y(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    if (t) {
      s = s.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      });
    }
    r.push.apply(r, s);
  }
  return r;
}
function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] ?? {};
    if (t % 2) {
      y(Object(r), true).forEach(function (t) {
        g(e, t, r[t]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
    } else {
      y(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
  }
  return e;
}
var w = class e {
  constructor(e, {
    headers: t = {},
    schema: r,
    fetch: s,
    timeout: n,
    urlLengthLimit: i = 8000
  } = {}) {
    this.url = e;
    this.headers = new Headers(t);
    this.schemaName = r;
    this.urlLengthLimit = i;
    const a = s ?? globalThis.fetch;
    this.fetch = n !== undefined && n > 0 ? (e, t) => {
      const r = new AbortController();
      const s = setTimeout(() => r.abort(), n);
      const i = t == null ? undefined : t.signal;
      if (i) {
        if (i.aborted) {
          clearTimeout(s);
          return a(e, t);
        }
        const n = () => {
          clearTimeout(s);
          r.abort();
        };
        i.addEventListener("abort", n, {
          once: true
        });
        return a(e, m(m({}, t), {}, {
          signal: r.signal
        })).finally(() => {
          clearTimeout(s);
          i.removeEventListener("abort", n);
        });
      }
      return a(e, m(m({}, t), {}, {
        signal: r.signal
      })).finally(() => clearTimeout(s));
    } : a;
  }
  from(e) {
    if (!e || typeof e != "string" || e.trim() === "") {
      throw new Error("Invalid relation name: relation must be a non-empty string.");
    }
    return new p(new URL(`${this.url}/${e}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  schema(t) {
    return new e(this.url, {
      headers: this.headers,
      schema: t,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
  rpc(e, t = {}, {
    head: r = false,
    get: s = false,
    count: n
  } = {}) {
    let a;
    const o = new URL(`${this.url}/rpc/${e}`);
    let l;
    const c = e => e !== null && typeof e == "object" && (!Array.isArray(e) || e.some(c));
    const u = r && Object.values(t).some(c);
    if (u) {
      a = "POST";
      l = t;
    } else if (r || s) {
      a = r ? "HEAD" : "GET";
      Object.entries(t).filter(([e, t]) => t !== undefined).map(([e, t]) => [e, Array.isArray(t) ? `{${t.join(",")}}` : `${t}`]).forEach(([e, t]) => {
        o.searchParams.append(e, t);
      });
    } else {
      a = "POST";
      l = t;
    }
    const h = new Headers(this.headers);
    if (u) {
      h.set("Prefer", n ? `count=${n},return=minimal` : "return=minimal");
    } else if (n) {
      h.set("Prefer", `count=${n}`);
    }
    return new d({
      method: a,
      url: o,
      headers: h,
      schema: this.schemaName,
      body: l,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit
    });
  }
};
class v {
  constructor() {}
  static detectEnvironment() {
    var e;
    if (typeof WebSocket != "undefined") {
      return {
        type: "native",
        constructor: WebSocket
      };
    }
    if (typeof globalThis != "undefined" && globalThis.WebSocket !== undefined) {
      return {
        type: "native",
        constructor: globalThis.WebSocket
      };
    }
    if (typeof global != "undefined" && global.WebSocket !== undefined) {
      return {
        type: "native",
        constructor: global.WebSocket
      };
    }
    if (typeof globalThis != "undefined" && globalThis.WebSocketPair !== undefined && globalThis.WebSocket === undefined) {
      return {
        type: "cloudflare",
        error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
      };
    }
    if (typeof globalThis != "undefined" && globalThis.EdgeRuntime || typeof navigator != "undefined" && ((e = navigator.userAgent) === null || e === undefined ? undefined : e.includes("Vercel-Edge"))) {
      return {
        type: "unsupported",
        error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
      };
    }
    const t = globalThis.process;
    if (t) {
      const e = t.versions;
      if (e && e.node) {
        const t = e.node;
        const r = parseInt(t.replace(/^v/, "").split(".")[0]);
        if (r >= 22) {
          if (globalThis.WebSocket !== undefined) {
            return {
              type: "native",
              constructor: globalThis.WebSocket
            };
          } else {
            return {
              type: "unsupported",
              error: `Node.js ${r} detected but native WebSocket not found.`,
              workaround: "Provide a WebSocket implementation via the transport option."
            };
          }
        } else {
          return {
            type: "unsupported",
            error: `Node.js ${r} detected without native WebSocket support.`,
            workaround: "For Node.js < 22, install \"ws\" package and provide it via the transport option:\nimport ws from \"ws\"\nnew RealtimeClient(url, { transport: ws })"
          };
        }
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
    };
  }
  static getWebSocketConstructor() {
    const e = this.detectEnvironment();
    if (e.constructor) {
      return e.constructor;
    }
    let t = e.error || "WebSocket not supported in this environment.";
    if (e.workaround) {
      t += `\n\nSuggested solution: ${e.workaround}`;
    }
    throw new Error(t);
  }
  static createWebSocket(e, t) {
    return new (this.getWebSocketConstructor())(e, t);
  }
  static isWebSocketSupported() {
    try {
      const e = this.detectEnvironment();
      return e.type === "native" || e.type === "ws";
    } catch (e) {
      return false;
    }
  }
}
const b = "2.0.0";
const _ = b;
var k;
var S;
var T;
var E;
var O;
var R;
var A;
var j;
var $;
var P;
var I;
(S = k ||= {})[S.connecting = 0] = "connecting";
S[S.open = 1] = "open";
S[S.closing = 2] = "closing";
S[S.closed = 3] = "closed";
(E = T ||= {}).closed = "closed";
E.errored = "errored";
E.joined = "joined";
E.joining = "joining";
E.leaving = "leaving";
(R = O ||= {}).close = "phx_close";
R.error = "phx_error";
R.join = "phx_join";
R.reply = "phx_reply";
R.leave = "phx_leave";
R.access_token = "access_token";
(A ||= {}).websocket = "websocket";
($ = j ||= {}).Connecting = "connecting";
$.Open = "open";
$.Closing = "closing";
$.Closed = "closed";
class C {
  constructor(e) {
    this.HEADER_LENGTH = 1;
    this.USER_BROADCAST_PUSH_META_LENGTH = 6;
    this.KINDS = {
      userBroadcastPush: 3,
      userBroadcast: 4
    };
    this.BINARY_ENCODING = 0;
    this.JSON_ENCODING = 1;
    this.BROADCAST_EVENT = "broadcast";
    this.allowedMetadataKeys = [];
    this.allowedMetadataKeys = e ?? [];
  }
  encode(e, t) {
    if (e.event === this.BROADCAST_EVENT && !(e.payload instanceof ArrayBuffer) && typeof e.payload.event == "string") {
      return t(this._binaryEncodeUserBroadcastPush(e));
    }
    let r = [e.join_ref, e.ref, e.topic, e.event, e.payload];
    return t(JSON.stringify(r));
  }
  _binaryEncodeUserBroadcastPush(e) {
    if (this._isArrayBuffer(e.payload?.payload)) {
      return this._encodeBinaryUserBroadcastPush(e);
    } else {
      return this._encodeJsonUserBroadcastPush(e);
    }
  }
  _encodeBinaryUserBroadcastPush(e) {
    const s = e.payload?.payload ?? new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(e, this.BINARY_ENCODING, s);
  }
  _encodeJsonUserBroadcastPush(e) {
    const s = e.payload?.payload ?? {};
    const n = new TextEncoder().encode(JSON.stringify(s)).buffer;
    return this._encodeUserBroadcastPush(e, this.JSON_ENCODING, n);
  }
  _encodeUserBroadcastPush(e, t, r) {
    const i = e.topic;
    const a = e.ref ?? "";
    const o = e.join_ref ?? "";
    const l = e.payload.event;
    const c = this.allowedMetadataKeys ? this._pick(e.payload, this.allowedMetadataKeys) : {};
    const u = Object.keys(c).length === 0 ? "" : JSON.stringify(c);
    if (o.length > 255) {
      throw new Error(`joinRef length ${o.length} exceeds maximum of 255`);
    }
    if (a.length > 255) {
      throw new Error(`ref length ${a.length} exceeds maximum of 255`);
    }
    if (i.length > 255) {
      throw new Error(`topic length ${i.length} exceeds maximum of 255`);
    }
    if (l.length > 255) {
      throw new Error(`userEvent length ${l.length} exceeds maximum of 255`);
    }
    if (u.length > 255) {
      throw new Error(`metadata length ${u.length} exceeds maximum of 255`);
    }
    const h = this.USER_BROADCAST_PUSH_META_LENGTH + o.length + a.length + i.length + l.length + u.length;
    const d = new ArrayBuffer(this.HEADER_LENGTH + h);
    let p = new DataView(d);
    let f = 0;
    p.setUint8(f++, this.KINDS.userBroadcastPush);
    p.setUint8(f++, o.length);
    p.setUint8(f++, a.length);
    p.setUint8(f++, i.length);
    p.setUint8(f++, l.length);
    p.setUint8(f++, u.length);
    p.setUint8(f++, t);
    Array.from(o, e => p.setUint8(f++, e.charCodeAt(0)));
    Array.from(a, e => p.setUint8(f++, e.charCodeAt(0)));
    Array.from(i, e => p.setUint8(f++, e.charCodeAt(0)));
    Array.from(l, e => p.setUint8(f++, e.charCodeAt(0)));
    Array.from(u, e => p.setUint8(f++, e.charCodeAt(0)));
    var g = new Uint8Array(d.byteLength + r.byteLength);
    g.set(new Uint8Array(d), 0);
    g.set(new Uint8Array(r), d.byteLength);
    return g.buffer;
  }
  decode(e, t) {
    if (this._isArrayBuffer(e)) {
      return t(this._binaryDecode(e));
    }
    if (typeof e == "string") {
      const r = JSON.parse(e);
      const [s, n, i, a, o] = r;
      return t({
        join_ref: s,
        ref: n,
        topic: i,
        event: a,
        payload: o
      });
    }
    return t({});
  }
  _binaryDecode(e) {
    const t = new DataView(e);
    const r = t.getUint8(0);
    const s = new TextDecoder();
    if (r === this.KINDS.userBroadcast) {
      return this._decodeUserBroadcast(e, t, s);
    }
  }
  _decodeUserBroadcast(e, t, r) {
    const s = t.getUint8(1);
    const n = t.getUint8(2);
    const i = t.getUint8(3);
    const a = t.getUint8(4);
    let o = this.HEADER_LENGTH + 4;
    const l = r.decode(e.slice(o, o + s));
    o += s;
    const c = r.decode(e.slice(o, o + n));
    o += n;
    const u = r.decode(e.slice(o, o + i));
    o += i;
    const h = e.slice(o, e.byteLength);
    const d = a === this.JSON_ENCODING ? JSON.parse(r.decode(h)) : h;
    const p = {
      type: this.BROADCAST_EVENT,
      event: c,
      payload: d
    };
    if (i > 0) {
      p.meta = JSON.parse(u);
    }
    return {
      join_ref: null,
      ref: null,
      topic: l,
      event: this.BROADCAST_EVENT,
      payload: p
    };
  }
  _isArrayBuffer(e) {
    return e instanceof ArrayBuffer || (e == null ? undefined : e.constructor)?.name === "ArrayBuffer";
  }
  _pick(e, t) {
    if (e && typeof e == "object") {
      return Object.fromEntries(Object.entries(e).filter(([e]) => t.includes(e)));
    } else {
      return {};
    }
  }
}
class x {
  constructor(e, t) {
    this.callback = e;
    this.timerCalc = t;
    this.timer = undefined;
    this.tries = 0;
    this.callback = e;
    this.timerCalc = t;
  }
  reset() {
    this.tries = 0;
    clearTimeout(this.timer);
    this.timer = undefined;
  }
  scheduleTimeout() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.tries = this.tries + 1;
      this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}
(I = P ||= {}).abstime = "abstime";
I.bool = "bool";
I.date = "date";
I.daterange = "daterange";
I.float4 = "float4";
I.float8 = "float8";
I.int2 = "int2";
I.int4 = "int4";
I.int4range = "int4range";
I.int8 = "int8";
I.int8range = "int8range";
I.json = "json";
I.jsonb = "jsonb";
I.money = "money";
I.numeric = "numeric";
I.oid = "oid";
I.reltime = "reltime";
I.text = "text";
I.time = "time";
I.timestamp = "timestamp";
I.timestamptz = "timestamptz";
I.timetz = "timetz";
I.tsrange = "tsrange";
I.tstzrange = "tstzrange";
const N = (e, t, r = {}) => {
  const n = r.skipTypes ?? [];
  if (t) {
    return Object.keys(t).reduce((r, s) => {
      r[s] = U(s, e, t, n);
      return r;
    }, {});
  } else {
    return {};
  }
};
const U = (e, t, r, s) => {
  const n = t.find(t => t.name === e);
  const i = n == null ? undefined : n.type;
  const a = r[e];
  if (i && !s.includes(i)) {
    return L(i, a);
  } else {
    return D(a);
  }
};
const L = (e, t) => {
  if (e.charAt(0) === "_") {
    const r = e.slice(1, e.length);
    return W(t, r);
  }
  switch (e) {
    case P.bool:
      return B(t);
    case P.float4:
    case P.float8:
    case P.int2:
    case P.int4:
    case P.int8:
    case P.numeric:
    case P.oid:
      return q(t);
    case P.json:
    case P.jsonb:
      return K(t);
    case P.timestamp:
      return M(t);
    case P.abstime:
    case P.date:
    case P.daterange:
    case P.int4range:
    case P.int8range:
    case P.money:
    case P.reltime:
    case P.text:
    case P.time:
    case P.timestamptz:
    case P.timetz:
    case P.tsrange:
    case P.tstzrange:
    default:
      return D(t);
  }
};
const D = e => e;
const B = e => {
  switch (e) {
    case "t":
      return true;
    case "f":
      return false;
    default:
      return e;
  }
};
const q = e => {
  if (typeof e == "string") {
    const t = parseFloat(e);
    if (!Number.isNaN(t)) {
      return t;
    }
  }
  return e;
};
const K = e => {
  if (typeof e == "string") {
    try {
      return JSON.parse(e);
    } catch (t) {
      return e;
    }
  }
  return e;
};
const W = (e, t) => {
  if (typeof e != "string") {
    return e;
  }
  const r = e.length - 1;
  const s = e[r];
  if (e[0] === "{" && s === "}") {
    let s;
    const i = e.slice(1, r);
    try {
      s = JSON.parse("[" + i + "]");
    } catch (n) {
      s = i ? i.split(",") : [];
    }
    return s.map(e => L(t, e));
  }
  return e;
};
const M = e => typeof e == "string" ? e.replace(" ", "T") : e;
const F = e => {
  const t = new URL(e);
  t.protocol = t.protocol.replace(/^ws/i, "http");
  t.pathname = t.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, "");
  if (t.pathname === "" || t.pathname === "/") {
    t.pathname = "/api/broadcast";
  } else {
    t.pathname = t.pathname + "/api/broadcast";
  }
  return t.href;
};
class J {
  constructor(e, t, r = {}, s = 10000) {
    this.channel = e;
    this.event = t;
    this.payload = r;
    this.timeout = s;
    this.sent = false;
    this.timeoutTimer = undefined;
    this.ref = "";
    this.receivedResp = null;
    this.recHooks = [];
    this.refEvent = null;
  }
  resend(e) {
    this.timeout = e;
    this._cancelRefEvent();
    this.ref = "";
    this.refEvent = null;
    this.receivedResp = null;
    this.sent = false;
    this.send();
  }
  send() {
    if (!this._hasReceived("timeout")) {
      this.startTimeout();
      this.sent = true;
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload,
        ref: this.ref,
        join_ref: this.channel._joinRef()
      });
    }
  }
  updatePayload(e) {
    this.payload = Object.assign(Object.assign({}, this.payload), e);
  }
  receive(e, t) {
    if (this._hasReceived(e)) {
      t(this.receivedResp?.response);
    }
    this.recHooks.push({
      status: e,
      callback: t
    });
    return this;
  }
  startTimeout() {
    if (!this.timeoutTimer) {
      this.ref = this.channel.socket._makeRef();
      this.refEvent = this.channel._replyEventName(this.ref);
      this.channel._on(this.refEvent, {}, e => {
        this._cancelRefEvent();
        this._cancelTimeout();
        this.receivedResp = e;
        this._matchReceive(e);
      });
      this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout);
    }
  }
  trigger(e, t) {
    if (this.refEvent) {
      this.channel._trigger(this.refEvent, {
        status: e,
        response: t
      });
    }
  }
  destroy() {
    this._cancelRefEvent();
    this._cancelTimeout();
  }
  _cancelRefEvent() {
    if (this.refEvent) {
      this.channel._off(this.refEvent, {});
    }
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer);
    this.timeoutTimer = undefined;
  }
  _matchReceive({
    status: e,
    response: t
  }) {
    this.recHooks.filter(t => t.status === e).forEach(e => e.callback(t));
  }
  _hasReceived(e) {
    return this.receivedResp && this.receivedResp.status === e;
  }
}
var H;
var V;
var G;
var z;
var Y;
var X;
var Q;
var Z;
(V = H ||= {}).SYNC = "sync";
V.JOIN = "join";
V.LEAVE = "leave";
class ee {
  constructor(e, t) {
    this.channel = e;
    this.state = {};
    this.pendingDiffs = [];
    this.joinRef = null;
    this.enabled = false;
    this.caller = {
      onJoin: () => {},
      onLeave: () => {},
      onSync: () => {}
    };
    const r = (t == null ? undefined : t.events) || {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.channel._on(r.state, {}, e => {
      const {
        onJoin: t,
        onLeave: r,
        onSync: s
      } = this.caller;
      this.joinRef = this.channel._joinRef();
      this.state = ee.syncState(this.state, e, t, r);
      this.pendingDiffs.forEach(e => {
        this.state = ee.syncDiff(this.state, e, t, r);
      });
      this.pendingDiffs = [];
      s();
    });
    this.channel._on(r.diff, {}, e => {
      const {
        onJoin: t,
        onLeave: r,
        onSync: s
      } = this.caller;
      if (this.inPendingSyncState()) {
        this.pendingDiffs.push(e);
      } else {
        this.state = ee.syncDiff(this.state, e, t, r);
        s();
      }
    });
    this.onJoin((e, t, r) => {
      this.channel._trigger("presence", {
        event: "join",
        key: e,
        currentPresences: t,
        newPresences: r
      });
    });
    this.onLeave((e, t, r) => {
      this.channel._trigger("presence", {
        event: "leave",
        key: e,
        currentPresences: t,
        leftPresences: r
      });
    });
    this.onSync(() => {
      this.channel._trigger("presence", {
        event: "sync"
      });
    });
  }
  static syncState(e, t, r, s) {
    const n = this.cloneDeep(e);
    const i = this.transformState(t);
    const a = {};
    const o = {};
    this.map(n, (e, t) => {
      if (!i[e]) {
        o[e] = t;
      }
    });
    this.map(i, (e, t) => {
      const r = n[e];
      if (r) {
        const s = t.map(e => e.presence_ref);
        const n = r.map(e => e.presence_ref);
        const i = t.filter(e => n.indexOf(e.presence_ref) < 0);
        const l = r.filter(e => s.indexOf(e.presence_ref) < 0);
        if (i.length > 0) {
          a[e] = i;
        }
        if (l.length > 0) {
          o[e] = l;
        }
      } else {
        a[e] = t;
      }
    });
    return this.syncDiff(n, {
      joins: a,
      leaves: o
    }, r, s);
  }
  static syncDiff(e, t, r, s) {
    const {
      joins: n,
      leaves: i
    } = {
      joins: this.transformState(t.joins),
      leaves: this.transformState(t.leaves)
    };
    r ||= () => {};
    s ||= () => {};
    this.map(n, (t, s) => {
      const i = e[t] ?? [];
      e[t] = this.cloneDeep(s);
      if (i.length > 0) {
        const r = e[t].map(e => e.presence_ref);
        const s = i.filter(e => r.indexOf(e.presence_ref) < 0);
        e[t].unshift(...s);
      }
      r(t, i, s);
    });
    this.map(i, (t, r) => {
      let n = e[t];
      if (!n) {
        return;
      }
      const i = r.map(e => e.presence_ref);
      n = n.filter(e => i.indexOf(e.presence_ref) < 0);
      e[t] = n;
      s(t, n, r);
      if (n.length === 0) {
        delete e[t];
      }
    });
    return e;
  }
  static map(e, t) {
    return Object.getOwnPropertyNames(e).map(r => t(r, e[r]));
  }
  static transformState(e) {
    e = this.cloneDeep(e);
    return Object.getOwnPropertyNames(e).reduce((t, r) => {
      const s = e[r];
      t[r] = "metas" in s ? s.metas.map(e => {
        e.presence_ref = e.phx_ref;
        delete e.phx_ref;
        delete e.phx_ref_prev;
        return e;
      }) : s;
      return t;
    }, {});
  }
  static cloneDeep(e) {
    return JSON.parse(JSON.stringify(e));
  }
  onJoin(e) {
    this.caller.onJoin = e;
  }
  onLeave(e) {
    this.caller.onLeave = e;
  }
  onSync(e) {
    this.caller.onSync = e;
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
(z = G ||= {}).ALL = "*";
z.INSERT = "INSERT";
z.UPDATE = "UPDATE";
z.DELETE = "DELETE";
(X = Y ||= {}).BROADCAST = "broadcast";
X.PRESENCE = "presence";
X.POSTGRES_CHANGES = "postgres_changes";
X.SYSTEM = "system";
(Z = Q ||= {}).SUBSCRIBED = "SUBSCRIBED";
Z.TIMED_OUT = "TIMED_OUT";
Z.CLOSED = "CLOSED";
Z.CHANNEL_ERROR = "CHANNEL_ERROR";
class te {
  constructor(e, t = {
    config: {}
  }, r) {
    this.topic = e;
    this.params = t;
    this.socket = r;
    this.bindings = {};
    this.state = T.closed;
    this.joinedOnce = false;
    this.pushBuffer = [];
    this.subTopic = e.replace(/^realtime:/i, "");
    this.params.config = Object.assign({
      broadcast: {
        ack: false,
        self: false
      },
      presence: {
        key: "",
        enabled: false
      },
      private: false
    }, t.config);
    this.timeout = this.socket.timeout;
    this.joinPush = new J(this, O.join, this.params, this.timeout);
    this.rejoinTimer = new x(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs);
    this.joinPush.receive("ok", () => {
      this.state = T.joined;
      this.rejoinTimer.reset();
      this.pushBuffer.forEach(e => e.send());
      this.pushBuffer = [];
    });
    this._onClose(() => {
      this.rejoinTimer.reset();
      this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`);
      this.state = T.closed;
      this.socket._remove(this);
    });
    this._onError(e => {
      if (!this._isLeaving() && !this._isClosed()) {
        this.socket.log("channel", `error ${this.topic}`, e);
        this.state = T.errored;
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.joinPush.receive("timeout", () => {
      if (this._isJoining()) {
        this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout);
        this.state = T.errored;
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.joinPush.receive("error", e => {
      if (!this._isLeaving() && !this._isClosed()) {
        this.socket.log("channel", `error ${this.topic}`, e);
        this.state = T.errored;
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this._on(O.reply, {}, (e, t) => {
      this._trigger(this._replyEventName(t), e);
    });
    this.presence = new ee(this);
    this.broadcastEndpointURL = F(this.socket.endPoint);
    this.private = this.params.config.private || false;
    if (!this.private && this.params.config?.broadcast?.replay) {
      throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
    }
  }
  subscribe(e, t = this.timeout) {
    var r;
    if (!this.socket.isConnected()) {
      this.socket.connect();
    }
    if (this.state == T.closed) {
      const {
        config: {
          broadcast: i,
          presence: a,
          private: o
        }
      } = this.params;
      const l = ((r = this.bindings.postgres_changes) === null || r === undefined ? undefined : r.map(e => e.filter)) ?? [];
      const c = !!this.bindings[Y.PRESENCE] && this.bindings[Y.PRESENCE].length > 0 || this.params.config.presence?.enabled === true;
      const u = {};
      const h = {
        broadcast: i,
        presence: Object.assign(Object.assign({}, a), {
          enabled: c
        }),
        postgres_changes: l,
        private: o
      };
      if (this.socket.accessTokenValue) {
        u.access_token = this.socket.accessTokenValue;
      }
      this._onError(t => e == null ? undefined : e(Q.CHANNEL_ERROR, t));
      this._onClose(() => e == null ? undefined : e(Q.CLOSED));
      this.updateJoinPayload(Object.assign({
        config: h
      }, u));
      this.joinedOnce = true;
      this._rejoin(t);
      this.joinPush.receive("ok", async ({
        postgres_changes: t
      }) => {
        if (!this.socket._isManualToken()) {
          this.socket.setAuth();
        }
        if (t !== undefined) {
          const s = this.bindings.postgres_changes;
          const n = (s == null ? undefined : s.length) ?? 0;
          const i = [];
          for (let r = 0; r < n; r++) {
            const n = s[r];
            const {
              filter: {
                event: a,
                schema: o,
                table: l,
                filter: c
              }
            } = n;
            const u = t && t[r];
            if (!u || u.event !== a || !te.isFilterValueEqual(u.schema, o) || !te.isFilterValueEqual(u.table, l) || !te.isFilterValueEqual(u.filter, c)) {
              this.unsubscribe();
              this.state = T.errored;
              if (e != null) {
                e(Q.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
              }
              return;
            }
            i.push(Object.assign(Object.assign({}, n), {
              id: u.id
            }));
          }
          this.bindings.postgres_changes = i;
          if (e) {
            e(Q.SUBSCRIBED);
          }
          return;
        }
        if (e != null) {
          e(Q.SUBSCRIBED);
        }
      }).receive("error", t => {
        this.state = T.errored;
        if (e != null) {
          e(Q.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(t).join(", ") || "error")));
        }
      }).receive("timeout", () => {
        if (e != null) {
          e(Q.TIMED_OUT);
        }
      });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(e, t = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: e
    }, t.timeout || this.timeout);
  }
  async untrack(e = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, e);
  }
  on(e, t, r) {
    if (this.state === T.joined && e === Y.PRESENCE) {
      this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`);
      this.unsubscribe().then(async () => await this.subscribe());
    }
    return this._on(e, t, r);
  }
  async httpSend(e, t, r = {}) {
    if (t == null) {
      return Promise.reject("Payload is required for httpSend()");
    }
    const n = {
      apikey: this.socket.apiKey ? this.socket.apiKey : "",
      "Content-Type": "application/json"
    };
    if (this.socket.accessTokenValue) {
      n.Authorization = `Bearer ${this.socket.accessTokenValue}`;
    }
    const i = {
      method: "POST",
      headers: n,
      body: JSON.stringify({
        messages: [{
          topic: this.subTopic,
          event: e,
          payload: t,
          private: this.private
        }]
      })
    };
    const a = await this._fetchWithTimeout(this.broadcastEndpointURL, i, r.timeout ?? this.timeout);
    if (a.status === 202) {
      return {
        success: true
      };
    }
    let o = a.statusText;
    try {
      const e = await a.json();
      o = e.error || e.message || o;
    } catch (l) {}
    return Promise.reject(new Error(o));
  }
  async send(e, t = {}) {
    var s;
    if (this._canPush() || e.type !== "broadcast") {
      return new Promise(r => {
        const a = this._push(e.type, e, t.timeout || this.timeout);
        if (e.type === "broadcast" && !this.params?.config?.broadcast?.ack) {
          r("ok");
        }
        a.receive("ok", () => r("ok"));
        a.receive("error", () => r("error"));
        a.receive("timeout", () => r("timed out"));
      });
    }
    {
      console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
      const {
        event: i,
        payload: a
      } = e;
      const o = {
        apikey: this.socket.apiKey ? this.socket.apiKey : "",
        "Content-Type": "application/json"
      };
      if (this.socket.accessTokenValue) {
        o.Authorization = `Bearer ${this.socket.accessTokenValue}`;
      }
      const l = {
        method: "POST",
        headers: o,
        body: JSON.stringify({
          messages: [{
            topic: this.subTopic,
            event: i,
            payload: a,
            private: this.private
          }]
        })
      };
      try {
        const e = await this._fetchWithTimeout(this.broadcastEndpointURL, l, t.timeout ?? this.timeout);
        await ((s = e.body) === null || s === undefined ? undefined : s.cancel());
        if (e.ok) {
          return "ok";
        } else {
          return "error";
        }
      } catch (n) {
        if (n.name === "AbortError") {
          return "timed out";
        } else {
          return "error";
        }
      }
    }
  }
  updateJoinPayload(e) {
    this.joinPush.updatePayload(e);
  }
  unsubscribe(e = this.timeout) {
    this.state = T.leaving;
    const t = () => {
      this.socket.log("channel", `leave ${this.topic}`);
      this._trigger(O.close, "leave", this._joinRef());
    };
    this.joinPush.destroy();
    let r = null;
    return new Promise(s => {
      r = new J(this, O.leave, {}, e);
      r.receive("ok", () => {
        t();
        s("ok");
      }).receive("timeout", () => {
        t();
        s("timed out");
      }).receive("error", () => {
        s("error");
      });
      r.send();
      if (!this._canPush()) {
        r.trigger("ok", {});
      }
    }).finally(() => {
      if (r != null) {
        r.destroy();
      }
    });
  }
  teardown() {
    this.pushBuffer.forEach(e => e.destroy());
    this.pushBuffer = [];
    this.rejoinTimer.reset();
    this.joinPush.destroy();
    this.state = T.closed;
    this.bindings = {};
  }
  async _fetchWithTimeout(e, t, r) {
    const s = new AbortController();
    const n = setTimeout(() => s.abort(), r);
    const i = await this.socket.fetch(e, Object.assign(Object.assign({}, t), {
      signal: s.signal
    }));
    clearTimeout(n);
    return i;
  }
  _push(e, t, r = this.timeout) {
    if (!this.joinedOnce) {
      throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    }
    let s = new J(this, e, t, r);
    if (this._canPush()) {
      s.send();
    } else {
      this._addToPushBuffer(s);
    }
    return s;
  }
  _addToPushBuffer(e) {
    e.startTimeout();
    this.pushBuffer.push(e);
    if (this.pushBuffer.length > 100) {
      const e = this.pushBuffer.shift();
      if (e) {
        e.destroy();
        this.socket.log("channel", `discarded push due to buffer overflow: ${e.event}`, e.payload);
      }
    }
  }
  _onMessage(e, t, r) {
    return t;
  }
  _isMember(e) {
    return this.topic === e;
  }
  _joinRef() {
    return this.joinPush.ref;
  }
  _trigger(e, t, r) {
    var s;
    var n;
    const i = e.toLocaleLowerCase();
    const {
      close: a,
      error: o,
      leave: l,
      join: c
    } = O;
    if (r && [a, o, l, c].indexOf(i) >= 0 && r !== this._joinRef()) {
      return;
    }
    let u = this._onMessage(i, t, r);
    if (t && !u) {
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    }
    if (["insert", "update", "delete"].includes(i)) {
      if ((s = this.bindings.postgres_changes) !== null && s !== undefined) {
        s.filter(e => {
          var s;
          return e.filter?.event === "*" || ((s = e.filter?.event) === null || s === undefined ? undefined : s.toLocaleLowerCase()) === i;
        }).map(e => e.callback(u, r));
      }
    } else if ((n = this.bindings[i]) !== null && n !== undefined) {
      n.filter(e => {
        var s;
        var n;
        var o;
        var l;
        if (["broadcast", "presence", "postgres_changes"].includes(i)) {
          if ("id" in e) {
            const i = e.id;
            const a = e.filter?.event;
            return i && ((s = t.ids) === null || s === undefined ? undefined : s.includes(i)) && (a === "*" || (a == null ? undefined : a.toLocaleLowerCase()) === ((n = t.data) === null || n === undefined ? undefined : n.type.toLocaleLowerCase()));
          }
          {
            const r = (o = (e == null ? undefined : e.filter)?.event) === null || o === undefined ? undefined : o.toLocaleLowerCase();
            return r === "*" || r === ((l = t == null ? undefined : t.event) === null || l === undefined ? undefined : l.toLocaleLowerCase());
          }
        }
        return e.type.toLocaleLowerCase() === i;
      }).map(e => {
        if (typeof u == "object" && "ids" in u) {
          const e = u.data;
          const {
            schema: t,
            table: r,
            commit_timestamp: s,
            type: n,
            errors: i
          } = e;
          const a = {
            schema: t,
            table: r,
            commit_timestamp: s,
            eventType: n,
            new: {},
            old: {},
            errors: i
          };
          u = Object.assign(Object.assign({}, a), this._getPayloadRecords(e));
        }
        e.callback(u, r);
      });
    }
  }
  _isClosed() {
    return this.state === T.closed;
  }
  _isJoined() {
    return this.state === T.joined;
  }
  _isJoining() {
    return this.state === T.joining;
  }
  _isLeaving() {
    return this.state === T.leaving;
  }
  _replyEventName(e) {
    return `chan_reply_${e}`;
  }
  _on(e, t, r) {
    const s = e.toLocaleLowerCase();
    const n = {
      type: s,
      filter: t,
      callback: r
    };
    if (this.bindings[s]) {
      this.bindings[s].push(n);
    } else {
      this.bindings[s] = [n];
    }
    return this;
  }
  _off(e, t) {
    const r = e.toLocaleLowerCase();
    this.bindings[r] &&= this.bindings[r].filter(e => {
      var s;
      return ((s = e.type) === null || s === undefined ? undefined : s.toLocaleLowerCase()) !== r || !te.isEqual(e.filter, t);
    });
    return this;
  }
  static isEqual(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) {
      return false;
    }
    for (const r in e) {
      if (e[r] !== t[r]) {
        return false;
      }
    }
    return true;
  }
  static isFilterValueEqual(e, t) {
    return (e ?? undefined) === (t ?? undefined);
  }
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout();
    if (this.socket.isConnected()) {
      this._rejoin();
    }
  }
  _onClose(e) {
    this._on(O.close, {}, e);
  }
  _onError(e) {
    this._on(O.error, {}, t => e(t));
  }
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  _rejoin(e = this.timeout) {
    if (!this._isLeaving()) {
      this.socket._leaveOpenTopic(this.topic);
      this.state = T.joining;
      this.joinPush.resend(e);
    }
  }
  _getPayloadRecords(e) {
    const t = {
      new: {},
      old: {}
    };
    if (e.type === "INSERT" || e.type === "UPDATE") {
      t.new = N(e.columns, e.record);
    }
    if (e.type === "UPDATE" || e.type === "DELETE") {
      t.old = N(e.columns, e.old_record);
    }
    return t;
  }
}
const re = () => {};
const se = [1000, 2000, 5000, 10000];
class ne {
  constructor(e, t) {
    this.accessTokenValue = null;
    this.apiKey = null;
    this._manuallySetToken = false;
    this.channels = new Array();
    this.endPoint = "";
    this.httpEndpoint = "";
    this.headers = {};
    this.params = {};
    this.timeout = 10000;
    this.transport = null;
    this.heartbeatIntervalMs = 25000;
    this.heartbeatTimer = undefined;
    this.pendingHeartbeatRef = null;
    this.heartbeatCallback = re;
    this.ref = 0;
    this.reconnectTimer = null;
    this.vsn = _;
    this.logger = re;
    this.conn = null;
    this.sendBuffer = [];
    this.serializer = new C();
    this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    };
    this.accessToken = null;
    this._connectionState = "disconnected";
    this._wasManualDisconnect = false;
    this._authPromise = null;
    this._heartbeatSentAt = null;
    this._resolveFetch = e => e ? (...t) => e(...t) : (...e) => fetch(...e);
    if (!(t == null ? undefined : t.params)?.apikey) {
      throw new Error("API key is required to connect to Realtime");
    }
    this.apiKey = t.params.apikey;
    this.endPoint = `${e}/${A.websocket}`;
    this.httpEndpoint = F(e);
    this._initializeOptions(t);
    this._setupReconnectionTimer();
    this.fetch = this._resolveFetch(t == null ? undefined : t.fetch);
  }
  connect() {
    if (!this.isConnecting() && !this.isDisconnecting() && (this.conn === null || !this.isConnected())) {
      this._setConnectionState("connecting");
      if (this.accessToken && !this._authPromise) {
        this._setAuthSafely("connect");
      }
      if (this.transport) {
        this.conn = new this.transport(this.endpointURL());
      } else {
        try {
          this.conn = v.createWebSocket(this.endpointURL());
        } catch (e) {
          this._setConnectionState("disconnected");
          const t = e.message;
          if (t.includes("Node.js")) {
            throw new Error(`${t}\n\nTo use Realtime in Node.js, you need to provide a WebSocket implementation:\n\nOption 1: Use Node.js 22+ which has native WebSocket support\nOption 2: Install and provide the "ws" package:\n\n  npm install ws\n\n  import ws from "ws"\n  const client = new RealtimeClient(url, {\n    ...options,\n    transport: ws\n  })`);
          }
          throw new Error(`WebSocket not available: ${t}`);
        }
      }
      this._setupConnectionHandlers();
    }
  }
  endpointURL() {
    return this._appendParams(this.endPoint, Object.assign({}, this.params, {
      vsn: this.vsn
    }));
  }
  disconnect(e, t) {
    if (!this.isDisconnecting()) {
      this._setConnectionState("disconnecting", true);
      if (this.conn) {
        const r = setTimeout(() => {
          this._setConnectionState("disconnected");
        }, 100);
        this.conn.onclose = () => {
          clearTimeout(r);
          this._setConnectionState("disconnected");
        };
        if (typeof this.conn.close == "function") {
          if (e) {
            this.conn.close(e, t ?? "");
          } else {
            this.conn.close();
          }
        }
        this._teardownConnection();
      } else {
        this._setConnectionState("disconnected");
      }
    }
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(e) {
    const t = await e.unsubscribe();
    if (this.channels.length === 0) {
      this.disconnect();
    }
    return t;
  }
  async removeAllChannels() {
    const e = await Promise.all(this.channels.map(e => e.unsubscribe()));
    this.channels = [];
    this.disconnect();
    return e;
  }
  log(e, t, r) {
    this.logger(e, t, r);
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case k.connecting:
        return j.Connecting;
      case k.open:
        return j.Open;
      case k.closing:
        return j.Closing;
      default:
        return j.Closed;
    }
  }
  isConnected() {
    return this.connectionState() === j.Open;
  }
  isConnecting() {
    return this._connectionState === "connecting";
  }
  isDisconnecting() {
    return this._connectionState === "disconnecting";
  }
  channel(e, t = {
    config: {}
  }) {
    const r = `realtime:${e}`;
    const s = this.getChannels().find(e => e.topic === r);
    if (s) {
      return s;
    }
    {
      const r = new te(`realtime:${e}`, t, this);
      this.channels.push(r);
      return r;
    }
  }
  push(e) {
    const {
      topic: t,
      event: r,
      payload: s,
      ref: n
    } = e;
    const i = () => {
      this.encode(e, e => {
        var t;
        if ((t = this.conn) !== null && t !== undefined) {
          t.send(e);
        }
      });
    };
    this.log("push", `${t} ${r} (${n})`, s);
    if (this.isConnected()) {
      i();
    } else {
      this.sendBuffer.push(i);
    }
  }
  async setAuth(e = null) {
    this._authPromise = this._performAuth(e);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  _isManualToken() {
    return this._manuallySetToken;
  }
  async sendHeartbeat() {
    var e;
    if (this.isConnected()) {
      if (this.pendingHeartbeatRef) {
        this.pendingHeartbeatRef = null;
        this._heartbeatSentAt = null;
        this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
        try {
          this.heartbeatCallback("timeout");
        } catch (t) {
          this.log("error", "error in heartbeat callback", t);
        }
        this._wasManualDisconnect = false;
        if ((e = this.conn) !== null && e !== undefined) {
          e.close(1000, "heartbeat timeout");
        }
        setTimeout(() => {
          var e;
          if (!this.isConnected() && (e = this.reconnectTimer) !== null && e !== undefined) {
            e.scheduleTimeout();
          }
        }, 100);
        return;
      }
      this._heartbeatSentAt = Date.now();
      this.pendingHeartbeatRef = this._makeRef();
      this.push({
        topic: "phoenix",
        event: "heartbeat",
        payload: {},
        ref: this.pendingHeartbeatRef
      });
      try {
        this.heartbeatCallback("sent");
      } catch (t) {
        this.log("error", "error in heartbeat callback", t);
      }
      this._setAuthSafely("heartbeat");
    } else {
      try {
        this.heartbeatCallback("disconnected");
      } catch (t) {
        this.log("error", "error in heartbeat callback", t);
      }
    }
  }
  onHeartbeat(e) {
    this.heartbeatCallback = e;
  }
  flushSendBuffer() {
    if (this.isConnected() && this.sendBuffer.length > 0) {
      this.sendBuffer.forEach(e => e());
      this.sendBuffer = [];
    }
  }
  _makeRef() {
    let e = this.ref + 1;
    if (e === this.ref) {
      this.ref = 0;
    } else {
      this.ref = e;
    }
    return this.ref.toString();
  }
  _leaveOpenTopic(e) {
    let t = this.channels.find(t => t.topic === e && (t._isJoined() || t._isJoining()));
    if (t) {
      this.log("transport", `leaving duplicate topic "${e}"`);
      t.unsubscribe();
    }
  }
  _remove(e) {
    this.channels = this.channels.filter(t => t.topic !== e.topic);
  }
  _onConnMessage(e) {
    this.decode(e.data, e => {
      if (e.topic === "phoenix" && e.event === "phx_reply" && e.ref && e.ref === this.pendingHeartbeatRef) {
        const t = this._heartbeatSentAt ? Date.now() - this._heartbeatSentAt : undefined;
        try {
          this.heartbeatCallback(e.payload.status === "ok" ? "ok" : "error", t);
        } catch (o) {
          this.log("error", "error in heartbeat callback", o);
        }
        this._heartbeatSentAt = null;
        this.pendingHeartbeatRef = null;
      }
      const {
        topic: t,
        event: r,
        payload: s,
        ref: n
      } = e;
      const i = n ? `(${n})` : "";
      const a = s.status || "";
      this.log("receive", `${a} ${t} ${r} ${i}`.trim(), s);
      this.channels.filter(e => e._isMember(t)).forEach(e => e._trigger(r, s, n));
      this._triggerStateCallbacks("message", e);
    });
  }
  _clearTimer(e) {
    var t;
    if (e === "heartbeat" && this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = undefined;
    } else if (e === "reconnect") {
      if ((t = this.reconnectTimer) !== null && t !== undefined) {
        t.reset();
      }
    }
  }
  _clearAllTimers() {
    this._clearTimer("heartbeat");
    this._clearTimer("reconnect");
  }
  _setupConnectionHandlers() {
    if (this.conn) {
      if ("binaryType" in this.conn) {
        this.conn.binaryType = "arraybuffer";
      }
      this.conn.onopen = () => this._onConnOpen();
      this.conn.onerror = e => this._onConnError(e);
      this.conn.onmessage = e => this._onConnMessage(e);
      this.conn.onclose = e => this._onConnClose(e);
      if (this.conn.readyState === k.open) {
        this._onConnOpen();
      }
    }
  }
  _teardownConnection() {
    if (this.conn) {
      if (this.conn.readyState === k.open || this.conn.readyState === k.connecting) {
        try {
          this.conn.close();
        } catch (e) {
          this.log("error", "Error closing connection", e);
        }
      }
      this.conn.onopen = null;
      this.conn.onerror = null;
      this.conn.onmessage = null;
      this.conn.onclose = null;
      this.conn = null;
    }
    this._clearAllTimers();
    this._terminateWorker();
    this.channels.forEach(e => e.teardown());
  }
  _onConnOpen() {
    this._setConnectionState("connected");
    this.log("transport", `connected to ${this.endpointURL()}`);
    (this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())).then(() => {
      if (this.accessTokenValue) {
        this.channels.forEach(e => {
          e.updateJoinPayload({
            access_token: this.accessTokenValue
          });
        });
        this.sendBuffer = [];
        this.channels.forEach(e => {
          if (e._isJoining()) {
            e.joinPush.sent = false;
            e.joinPush.send();
          }
        });
      }
      this.flushSendBuffer();
    }).catch(e => {
      this.log("error", "error waiting for auth on connect", e);
      this.flushSendBuffer();
    });
    this._clearTimer("reconnect");
    if (this.worker) {
      if (!this.workerRef) {
        this._startWorkerHeartbeat();
      }
    } else {
      this._startHeartbeat();
    }
    this._triggerStateCallbacks("open");
  }
  _startHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
    }
    this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
  }
  _startWorkerHeartbeat() {
    if (this.workerUrl) {
      this.log("worker", `starting worker for from ${this.workerUrl}`);
    } else {
      this.log("worker", "starting default worker");
    }
    const e = this._workerObjectUrl(this.workerUrl);
    this.workerRef = new Worker(e);
    this.workerRef.onerror = e => {
      this.log("worker", "worker error", e.message);
      this._terminateWorker();
    };
    this.workerRef.onmessage = e => {
      if (e.data.event === "keepAlive") {
        this.sendHeartbeat();
      }
    };
    this.workerRef.postMessage({
      event: "start",
      interval: this.heartbeatIntervalMs
    });
  }
  _terminateWorker() {
    if (this.workerRef) {
      this.log("worker", "terminating worker");
      this.workerRef.terminate();
      this.workerRef = undefined;
    }
  }
  _onConnClose(e) {
    var t;
    this._setConnectionState("disconnected");
    this.log("transport", "close", e);
    this._triggerChanError();
    this._clearTimer("heartbeat");
    if (!this._wasManualDisconnect && (t = this.reconnectTimer) !== null && t !== undefined) {
      t.scheduleTimeout();
    }
    this._triggerStateCallbacks("close", e);
  }
  _onConnError(e) {
    this._setConnectionState("disconnected");
    this.log("transport", `${e}`);
    this._triggerChanError();
    this._triggerStateCallbacks("error", e);
    try {
      this.heartbeatCallback("error");
    } catch (t) {
      this.log("error", "error in heartbeat callback", t);
    }
  }
  _triggerChanError() {
    this.channels.forEach(e => e._trigger(O.error));
  }
  _appendParams(e, t) {
    if (Object.keys(t).length === 0) {
      return e;
    }
    const r = e.match(/\?/) ? "&" : "?";
    return `${e}${r}${new URLSearchParams(t)}`;
  }
  _workerObjectUrl(e) {
    let t;
    if (e) {
      t = e;
    } else {
      const e = new Blob(["\n  addEventListener(\"message\", (e) => {\n    if (e.data.event === \"start\") {\n      setInterval(() => postMessage({ event: \"keepAlive\" }), e.data.interval);\n    }\n  });"], {
        type: "application/javascript"
      });
      t = URL.createObjectURL(e);
    }
    return t;
  }
  _setConnectionState(e, t = false) {
    this._connectionState = e;
    if (e === "connecting") {
      this._wasManualDisconnect = false;
    } else if (e === "disconnecting") {
      this._wasManualDisconnect = t;
    }
  }
  async _performAuth(e = null) {
    let t;
    let r = false;
    if (e) {
      t = e;
      r = true;
    } else if (this.accessToken) {
      try {
        t = await this.accessToken();
      } catch (s) {
        this.log("error", "Error fetching access token from callback", s);
        t = this.accessTokenValue;
      }
    } else {
      t = this.accessTokenValue;
    }
    if (r) {
      this._manuallySetToken = true;
    } else if (this.accessToken) {
      this._manuallySetToken = false;
    }
    if (this.accessTokenValue != t) {
      this.accessTokenValue = t;
      this.channels.forEach(e => {
        const r = {
          access_token: t,
          version: "realtime-js/2.99.0"
        };
        if (t) {
          e.updateJoinPayload(r);
        }
        if (e.joinedOnce && e._isJoined()) {
          e._push(O.access_token, {
            access_token: t
          });
        }
      });
    }
  }
  async _waitForAuthIfNeeded() {
    if (this._authPromise) {
      await this._authPromise;
    }
  }
  _setAuthSafely(e = "general") {
    if (!this._isManualToken()) {
      this.setAuth().catch(t => {
        this.log("error", `Error setting auth in ${e}`, t);
      });
    }
  }
  _triggerStateCallbacks(e, t) {
    try {
      this.stateChangeCallbacks[e].forEach(r => {
        try {
          r(t);
        } catch (s) {
          this.log("error", `error in ${e} callback`, s);
        }
      });
    } catch (r) {
      this.log("error", `error triggering ${e} callbacks`, r);
    }
  }
  _setupReconnectionTimer() {
    this.reconnectTimer = new x(async () => {
      setTimeout(async () => {
        await this._waitForAuthIfNeeded();
        if (!this.isConnected()) {
          this.connect();
        }
      }, 10);
    }, this.reconnectAfterMs);
  }
  _initializeOptions(e) {
    var n;
    this.transport = (e == null ? undefined : e.transport) ?? null;
    this.timeout = (e == null ? undefined : e.timeout) ?? 10000;
    this.heartbeatIntervalMs = (e == null ? undefined : e.heartbeatIntervalMs) ?? 25000;
    this.worker = (n = e == null ? undefined : e.worker) !== null && n !== undefined && n;
    this.accessToken = (e == null ? undefined : e.accessToken) ?? null;
    this.heartbeatCallback = (e == null ? undefined : e.heartbeatCallback) ?? re;
    this.vsn = (e == null ? undefined : e.vsn) ?? _;
    if (e == null ? undefined : e.params) {
      this.params = e.params;
    }
    if (e == null ? undefined : e.logger) {
      this.logger = e.logger;
    }
    if ((e == null ? undefined : e.logLevel) || (e == null ? undefined : e.log_level)) {
      this.logLevel = e.logLevel || e.log_level;
      this.params = Object.assign(Object.assign({}, this.params), {
        log_level: this.logLevel
      });
    }
    this.reconnectAfterMs = (e == null ? undefined : e.reconnectAfterMs) ?? (e => se[e - 1] || 10000);
    switch (this.vsn) {
      case "1.0.0":
        this.encode = (e == null ? undefined : e.encode) ?? ((e, t) => t(JSON.stringify(e)));
        this.decode = (e == null ? undefined : e.decode) ?? ((e, t) => t(JSON.parse(e)));
        break;
      case b:
        this.encode = (e == null ? undefined : e.encode) ?? this.serializer.encode.bind(this.serializer);
        this.decode = (e == null ? undefined : e.decode) ?? this.serializer.decode.bind(this.serializer);
        break;
      default:
        throw new Error(`Unsupported serializer version: ${this.vsn}`);
    }
    if (this.worker) {
      if (typeof window != "undefined" && !window.Worker) {
        throw new Error("Web Worker is not supported");
      }
      this.workerUrl = e == null ? undefined : e.workerUrl;
    }
  }
}
var ie = class extends Error {
  constructor(e, t) {
    var r;
    super(e);
    this.name = "IcebergError";
    this.status = t.status;
    this.icebergType = t.icebergType;
    this.icebergCode = t.icebergCode;
    this.details = t.details;
    this.isCommitStateUnknown = t.icebergType === "CommitStateUnknownException" || [500, 502, 504].includes(t.status) && ((r = t.icebergType) == null ? undefined : r.includes("CommitState")) === true;
  }
  isNotFound() {
    return this.status === 404;
  }
  isConflict() {
    return this.status === 409;
  }
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function ae(e) {
  return e.join("");
}
var oe = class {
  constructor(e, t = "") {
    this.client = e;
    this.prefix = t;
  }
  async listNamespaces(e) {
    const t = e ? {
      parent: ae(e.namespace)
    } : undefined;
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces`,
      query: t
    })).data.namespaces.map(e => ({
      namespace: e
    }));
  }
  async createNamespace(e, t) {
    const r = {
      namespace: e.namespace,
      properties: t == null ? undefined : t.properties
    };
    return (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces`,
      body: r
    })).data;
  }
  async dropNamespace(e) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${ae(e.namespace)}`
    });
  }
  async loadNamespaceMetadata(e) {
    return {
      properties: (await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces/${ae(e.namespace)}`
      })).data.properties
    };
  }
  async namespaceExists(e) {
    try {
      await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${ae(e.namespace)}`
      });
      return true;
    } catch (t) {
      if (t instanceof ie && t.status === 404) {
        return false;
      }
      throw t;
    }
  }
  async createNamespaceIfNotExists(e, t) {
    try {
      return await this.createNamespace(e, t);
    } catch (r) {
      if (r instanceof ie && r.status === 409) {
        return;
      }
      throw r;
    }
  }
};
function le(e) {
  return e.join("");
}
var ce = class {
  constructor(e, t = "", r) {
    this.client = e;
    this.prefix = t;
    this.accessDelegation = r;
  }
  async listTables(e) {
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${le(e.namespace)}/tables`
    })).data.identifiers;
  }
  async createTable(e, t) {
    const r = {};
    if (this.accessDelegation) {
      r["X-Iceberg-Access-Delegation"] = this.accessDelegation;
    }
    return (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${le(e.namespace)}/tables`,
      body: t,
      headers: r
    })).data.metadata;
  }
  async updateTable(e, t) {
    const r = await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${le(e.namespace)}/tables/${e.name}`,
      body: t
    });
    return {
      "metadata-location": r.data["metadata-location"],
      metadata: r.data.metadata
    };
  }
  async dropTable(e, t) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${le(e.namespace)}/tables/${e.name}`,
      query: {
        purgeRequested: String((t == null ? undefined : t.purge) ?? false)
      }
    });
  }
  async loadTable(e) {
    const t = {};
    if (this.accessDelegation) {
      t["X-Iceberg-Access-Delegation"] = this.accessDelegation;
    }
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${le(e.namespace)}/tables/${e.name}`,
      headers: t
    })).data.metadata;
  }
  async tableExists(e) {
    const t = {};
    if (this.accessDelegation) {
      t["X-Iceberg-Access-Delegation"] = this.accessDelegation;
    }
    try {
      await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${le(e.namespace)}/tables/${e.name}`,
        headers: t
      });
      return true;
    } catch (r) {
      if (r instanceof ie && r.status === 404) {
        return false;
      }
      throw r;
    }
  }
  async createTableIfNotExists(e, t) {
    try {
      return await this.createTable(e, t);
    } catch (r) {
      if (r instanceof ie && r.status === 409) {
        return await this.loadTable({
          namespace: e.namespace,
          name: t.name
        });
      }
      throw r;
    }
  }
};
var ue = class {
  constructor(e) {
    var t;
    let r = "v1";
    if (e.catalogName) {
      r += `/${e.catalogName}`;
    }
    const s = e.baseUrl.endsWith("/") ? e.baseUrl : `${e.baseUrl}/`;
    this.client = function (e) {
      const t = e.fetchImpl ?? globalThis.fetch;
      return {
        async request({
          method: r,
          path: s,
          query: n,
          body: i,
          headers: a
        }) {
          const o = function (e, t, r) {
            const s = new URL(t, e);
            if (r) {
              for (const [n, i] of Object.entries(r)) {
                if (i !== undefined) {
                  s.searchParams.set(n, i);
                }
              }
            }
            return s.toString();
          }(e.baseUrl, s, n);
          const l = await async function (e) {
            if (e && e.type !== "none") {
              if (e.type === "bearer") {
                return {
                  Authorization: `Bearer ${e.token}`
                };
              } else if (e.type === "header") {
                return {
                  [e.name]: e.value
                };
              } else if (e.type === "custom") {
                return await e.getHeaders();
              } else {
                return {};
              }
            } else {
              return {};
            }
          }(e.auth);
          const c = await t(o, {
            method: r,
            headers: {
              ...(i ? {
                "Content-Type": "application/json"
              } : {}),
              ...l,
              ...a
            },
            body: i ? JSON.stringify(i) : undefined
          });
          const u = await c.text();
          const h = (c.headers.get("content-type") || "").includes("application/json");
          const d = h && u ? JSON.parse(u) : u;
          if (!c.ok) {
            const e = h ? d : undefined;
            const t = e == null ? undefined : e.error;
            throw new ie((t == null ? undefined : t.message) ?? `Request failed with status ${c.status}`, {
              status: c.status,
              icebergType: t == null ? undefined : t.type,
              icebergCode: t == null ? undefined : t.code,
              details: e
            });
          }
          return {
            status: c.status,
            headers: c.headers,
            data: d
          };
        }
      };
    }({
      baseUrl: s,
      auth: e.auth,
      fetchImpl: e.fetch
    });
    this.accessDelegation = (t = e.accessDelegation) == null ? undefined : t.join(",");
    this.namespaceOps = new oe(this.client, r);
    this.tableOps = new ce(this.client, r, this.accessDelegation);
  }
  async listNamespaces(e) {
    return this.namespaceOps.listNamespaces(e);
  }
  async createNamespace(e, t) {
    return this.namespaceOps.createNamespace(e, t);
  }
  async dropNamespace(e) {
    await this.namespaceOps.dropNamespace(e);
  }
  async loadNamespaceMetadata(e) {
    return this.namespaceOps.loadNamespaceMetadata(e);
  }
  async listTables(e) {
    return this.tableOps.listTables(e);
  }
  async createTable(e, t) {
    return this.tableOps.createTable(e, t);
  }
  async updateTable(e, t) {
    return this.tableOps.updateTable(e, t);
  }
  async dropTable(e, t) {
    await this.tableOps.dropTable(e, t);
  }
  async loadTable(e) {
    return this.tableOps.loadTable(e);
  }
  async namespaceExists(e) {
    return this.namespaceOps.namespaceExists(e);
  }
  async tableExists(e) {
    return this.tableOps.tableExists(e);
  }
  async createNamespaceIfNotExists(e, t) {
    return this.namespaceOps.createNamespaceIfNotExists(e, t);
  }
  async createTableIfNotExists(e, t) {
    return this.tableOps.createTableIfNotExists(e, t);
  }
};
var he = class extends Error {
  constructor(e, t = "storage", r, s) {
    super(e);
    this.__isStorageError = true;
    this.namespace = t;
    this.name = t === "vectors" ? "StorageVectorsError" : "StorageError";
    this.status = r;
    this.statusCode = s;
  }
};
function de(e) {
  return typeof e == "object" && e !== null && "__isStorageError" in e;
}
var pe = class extends he {
  constructor(e, t, r, s = "storage") {
    super(e, s, t, r);
    this.name = s === "vectors" ? "StorageVectorsApiError" : "StorageApiError";
    this.status = t;
    this.statusCode = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
};
var fe = class extends he {
  constructor(e, t, r = "storage") {
    super(e, r);
    this.name = r === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError";
    this.originalError = t;
  }
};
const ge = e => {
  if (Array.isArray(e)) {
    return e.map(e => ge(e));
  }
  if (typeof e == "function" || e !== Object(e)) {
    return e;
  }
  const t = {};
  Object.entries(e).forEach(([e, r]) => {
    const s = e.replace(/([-_][a-z])/gi, e => e.toUpperCase().replace(/[-_]/g, ""));
    t[s] = ge(r);
  });
  return t;
};
function ye(e) {
  return (ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
    return typeof e;
  } : function (e) {
    if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof e;
    }
  })(e);
}
function me(e, t, r) {
  if ((t = function (e) {
    var t = function (e, t) {
      if (ye(e) != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, t);
        if (ye(s) != "object") {
          return s;
        }
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e, "string");
    if (ye(t) == "symbol") {
      return t;
    } else {
      return t + "";
    }
  }(t)) in e) {
    Object.defineProperty(e, t, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    e[t] = r;
  }
  return e;
}
function we(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    if (t) {
      s = s.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      });
    }
    r.push.apply(r, s);
  }
  return r;
}
function ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] ?? {};
    if (t % 2) {
      we(Object(r), true).forEach(function (t) {
        me(e, t, r[t]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
    } else {
      we(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
  }
  return e;
}
const be = e => {
  return e.msg || e.message || e.error_description || (typeof e.error == "string" ? e.error : e.error?.message) || JSON.stringify(e);
};
async function _e(e, t, r, s, n, i, a) {
  return new Promise((o, l) => {
    e(r, ((e, t, r, s) => {
      const n = {
        method: e,
        headers: (t == null ? undefined : t.headers) || {}
      };
      if (e !== "GET" && e !== "HEAD" && s) {
        if ((e => {
          if (typeof e != "object" || e === null) {
            return false;
          }
          const t = Object.getPrototypeOf(e);
          return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
        })(s)) {
          n.headers = ve({
            "Content-Type": "application/json"
          }, t == null ? undefined : t.headers);
          n.body = JSON.stringify(s);
        } else {
          n.body = s;
        }
        if (t == null ? undefined : t.duplex) {
          n.duplex = t.duplex;
        }
        return ve(ve({}, n), r);
      } else {
        return ve(ve({}, n), r);
      }
    })(t, s, n, i)).then(e => {
      if (!e.ok) {
        throw e;
      }
      if (s == null ? undefined : s.noResolveJson) {
        return e;
      }
      if (a === "vectors") {
        const t = e.headers.get("content-type");
        if (e.headers.get("content-length") === "0" || e.status === 204) {
          return {};
        }
        if (!t || !t.includes("application/json")) {
          return {};
        }
      }
      return e.json();
    }).then(e => o(e)).catch(e => (async (e, t, r, s) => {
      if (e && typeof e == "object" && "status" in e && "ok" in e && typeof e.status == "number") {
        const r = e;
        const n = r.status || 500;
        if (typeof r.json == "function") {
          r.json().then(e => {
            const r = (e == null ? undefined : e.statusCode) || (e == null ? undefined : e.code) || n + "";
            t(new pe(be(e), n, r, s));
          }).catch(() => {
            if (s === "vectors") {
              const e = n + "";
              t(new pe(r.statusText || `HTTP ${n} error`, n, e, s));
            } else {
              const e = n + "";
              t(new pe(r.statusText || `HTTP ${n} error`, n, e, s));
            }
          });
        } else {
          const e = n + "";
          t(new pe(r.statusText || `HTTP ${n} error`, n, e, s));
        }
      } else {
        t(new fe(be(e), e, s));
      }
    })(e, l, 0, a));
  });
}
function ke(e = "storage") {
  return {
    get: async (t, r, s, n) => _e(t, "GET", r, s, n, undefined, e),
    post: async (t, r, s, n, i) => _e(t, "POST", r, n, i, s, e),
    put: async (t, r, s, n, i) => _e(t, "PUT", r, n, i, s, e),
    head: async (t, r, s, n) => _e(t, "HEAD", r, ve(ve({}, s), {}, {
      noResolveJson: true
    }), n, undefined, e),
    remove: async (t, r, s, n, i) => _e(t, "DELETE", r, n, i, s, e)
  };
}
const Se = ke("storage");
const {
  get: Te,
  post: Ee,
  put: Oe,
  head: Re,
  remove: Ae
} = Se;
const je = ke("vectors");
var $e = class {
  constructor(e, t = {}, r, s = "storage") {
    var n;
    this.shouldThrowOnError = false;
    this.url = e;
    this.headers = t;
    this.fetch = (n = r) ? (...e) => n(...e) : (...e) => fetch(...e);
    this.namespace = s;
  }
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  setHeader(e, t) {
    this.headers = ve(ve({}, this.headers), {}, {
      [e]: t
    });
    return this;
  }
  async handleOperation(e) {
    try {
      return {
        data: await e(),
        error: null
      };
    } catch (t) {
      if (this.shouldThrowOnError) {
        throw t;
      }
      if (de(t)) {
        return {
          data: null,
          error: t
        };
      }
      throw t;
    }
  }
};
var Pe = class {
  constructor(e, t) {
    this.downloadFn = e;
    this.shouldThrowOnError = t;
  }
  then(e, t) {
    return this.execute().then(e, t);
  }
  async execute() {
    try {
      return {
        data: (await this.downloadFn()).body,
        error: null
      };
    } catch (e) {
      if (this.shouldThrowOnError) {
        throw e;
      }
      if (de(e)) {
        return {
          data: null,
          error: e
        };
      }
      throw e;
    }
  }
};
let Ie;
Ie = Symbol.toStringTag;
var Ce = class {
  constructor(e, t) {
    this.downloadFn = e;
    this.shouldThrowOnError = t;
    this[Ie] = "BlobDownloadBuilder";
    this.promise = null;
  }
  asStream() {
    return new Pe(this.downloadFn, this.shouldThrowOnError);
  }
  then(e, t) {
    return this.getPromise().then(e, t);
  }
  catch(e) {
    return this.getPromise().catch(e);
  }
  finally(e) {
    return this.getPromise().finally(e);
  }
  getPromise() {
    this.promise ||= this.execute();
    return this.promise;
  }
  async execute() {
    try {
      return {
        data: await (await this.downloadFn()).blob(),
        error: null
      };
    } catch (e) {
      if (this.shouldThrowOnError) {
        throw e;
      }
      if (de(e)) {
        return {
          data: null,
          error: e
        };
      }
      throw e;
    }
  }
};
const xe = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
};
const Ne = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: false
};
var Ue = class extends $e {
  constructor(e, t = {}, r, s) {
    super(e, t, s, "storage");
    this.bucketId = r;
  }
  async uploadOrUpdate(e, t, r, s) {
    var n = this;
    return n.handleOperation(async () => {
      let i;
      const a = ve(ve({}, Ne), s);
      let o = ve(ve({}, n.headers), e === "POST" && {
        "x-upsert": String(a.upsert)
      });
      const l = a.metadata;
      if (typeof Blob != "undefined" && r instanceof Blob) {
        i = new FormData();
        i.append("cacheControl", a.cacheControl);
        if (l) {
          i.append("metadata", n.encodeMetadata(l));
        }
        i.append("", r);
      } else if (typeof FormData != "undefined" && r instanceof FormData) {
        i = r;
        if (!i.has("cacheControl")) {
          i.append("cacheControl", a.cacheControl);
        }
        if (l && !i.has("metadata")) {
          i.append("metadata", n.encodeMetadata(l));
        }
      } else {
        i = r;
        o["cache-control"] = `max-age=${a.cacheControl}`;
        o["content-type"] = a.contentType;
        if (l) {
          o["x-metadata"] = n.toBase64(n.encodeMetadata(l));
        }
        if ((typeof ReadableStream != "undefined" && i instanceof ReadableStream || i && typeof i == "object" && "pipe" in i && typeof i.pipe == "function") && !a.duplex) {
          a.duplex = "half";
        }
      }
      if (s == null ? undefined : s.headers) {
        o = ve(ve({}, o), s.headers);
      }
      const c = n._removeEmptyFolders(t);
      const u = n._getFinalPath(c);
      const h = await (e == "PUT" ? Oe : Ee)(n.fetch, `${n.url}/object/${u}`, i, ve({
        headers: o
      }, (a == null ? undefined : a.duplex) ? {
        duplex: a.duplex
      } : {}));
      return {
        path: c,
        id: h.Id,
        fullPath: h.Key
      };
    });
  }
  async upload(e, t, r) {
    return this.uploadOrUpdate("POST", e, t, r);
  }
  async uploadToSignedUrl(e, t, r, s) {
    var n = this;
    const i = n._removeEmptyFolders(e);
    const a = n._getFinalPath(i);
    const o = new URL(`${n.url}/object/upload/sign/${a}`);
    o.searchParams.set("token", t);
    return n.handleOperation(async () => {
      let e;
      const t = ve({
        upsert: Ne.upsert
      }, s);
      const a = ve(ve({}, n.headers), {
        "x-upsert": String(t.upsert)
      });
      if (typeof Blob != "undefined" && r instanceof Blob) {
        e = new FormData();
        e.append("cacheControl", t.cacheControl);
        e.append("", r);
      } else if (typeof FormData != "undefined" && r instanceof FormData) {
        e = r;
        e.append("cacheControl", t.cacheControl);
      } else {
        e = r;
        a["cache-control"] = `max-age=${t.cacheControl}`;
        a["content-type"] = t.contentType;
      }
      return {
        path: i,
        fullPath: (await Oe(n.fetch, o.toString(), e, {
          headers: a
        })).Key
      };
    });
  }
  async createSignedUploadUrl(e, t) {
    var r = this;
    return r.handleOperation(async () => {
      let s = r._getFinalPath(e);
      const n = ve({}, r.headers);
      if (t == null ? undefined : t.upsert) {
        n["x-upsert"] = "true";
      }
      const i = await Ee(r.fetch, `${r.url}/object/upload/sign/${s}`, {}, {
        headers: n
      });
      const a = new URL(r.url + i.url);
      const o = a.searchParams.get("token");
      if (!o) {
        throw new he("No token returned by API");
      }
      return {
        signedUrl: a.toString(),
        path: e,
        token: o
      };
    });
  }
  async update(e, t, r) {
    return this.uploadOrUpdate("PUT", e, t, r);
  }
  async move(e, t, r) {
    var s = this;
    return s.handleOperation(async () => await Ee(s.fetch, `${s.url}/object/move`, {
      bucketId: s.bucketId,
      sourceKey: e,
      destinationKey: t,
      destinationBucket: r == null ? undefined : r.destinationBucket
    }, {
      headers: s.headers
    }));
  }
  async copy(e, t, r) {
    var s = this;
    return s.handleOperation(async () => ({
      path: (await Ee(s.fetch, `${s.url}/object/copy`, {
        bucketId: s.bucketId,
        sourceKey: e,
        destinationKey: t,
        destinationBucket: r == null ? undefined : r.destinationBucket
      }, {
        headers: s.headers
      })).Key
    }));
  }
  async createSignedUrl(e, t, r) {
    var s = this;
    return s.handleOperation(async () => {
      let n = s._getFinalPath(e);
      let i = await Ee(s.fetch, `${s.url}/object/sign/${n}`, ve({
        expiresIn: t
      }, (r == null ? undefined : r.transform) ? {
        transform: r.transform
      } : {}), {
        headers: s.headers
      });
      const a = (r == null ? undefined : r.download) ? `&download=${r.download === true ? "" : r.download}` : "";
      const o = (r == null ? undefined : r.transform) && i.signedURL.includes("/object/sign/") ? i.signedURL.replace("/object/sign/", "/render/image/sign/") : i.signedURL;
      return {
        signedUrl: encodeURI(`${s.url}${o}${a}`)
      };
    });
  }
  async createSignedUrls(e, t, r) {
    var s = this;
    return s.handleOperation(async () => {
      const n = await Ee(s.fetch, `${s.url}/object/sign/${s.bucketId}`, {
        expiresIn: t,
        paths: e
      }, {
        headers: s.headers
      });
      const i = (r == null ? undefined : r.download) ? `&download=${r.download === true ? "" : r.download}` : "";
      return n.map(e => ve(ve({}, e), {}, {
        signedUrl: e.signedURL ? encodeURI(`${s.url}${e.signedURL}${i}`) : null
      }));
    });
  }
  download(e, t, r) {
    const s = (t == null ? undefined : t.transform) !== undefined ? "render/image/authenticated" : "object";
    const n = this.transformOptsToQueryString((t == null ? undefined : t.transform) || {});
    const i = n ? `?${n}` : "";
    const a = this._getFinalPath(e);
    return new Ce(() => Te(this.fetch, `${this.url}/${s}/${a}${i}`, {
      headers: this.headers,
      noResolveJson: true
    }, r), this.shouldThrowOnError);
  }
  async info(e) {
    var t = this;
    const r = t._getFinalPath(e);
    return t.handleOperation(async () => ge(await Te(t.fetch, `${t.url}/object/info/${r}`, {
      headers: t.headers
    })));
  }
  async exists(e) {
    var t = this;
    const r = t._getFinalPath(e);
    try {
      await Re(t.fetch, `${t.url}/object/${r}`, {
        headers: t.headers
      });
      return {
        data: true,
        error: null
      };
    } catch (n) {
      if (t.shouldThrowOnError) {
        throw n;
      }
      if (de(n)) {
        const e = n instanceof pe ? n.status : n instanceof fe ? n.originalError?.status : undefined;
        if (e !== undefined && [400, 404].includes(e)) {
          return {
            data: false,
            error: n
          };
        }
      }
      throw n;
    }
  }
  getPublicUrl(e, t) {
    const r = this._getFinalPath(e);
    const s = [];
    const n = (t == null ? undefined : t.download) ? `download=${t.download === true ? "" : t.download}` : "";
    if (n !== "") {
      s.push(n);
    }
    const i = (t == null ? undefined : t.transform) !== undefined ? "render/image" : "object";
    const a = this.transformOptsToQueryString((t == null ? undefined : t.transform) || {});
    if (a !== "") {
      s.push(a);
    }
    let o = s.join("&");
    if (o !== "") {
      o = `?${o}`;
    }
    return {
      data: {
        publicUrl: encodeURI(`${this.url}/${i}/public/${r}${o}`)
      }
    };
  }
  async remove(e) {
    var t = this;
    return t.handleOperation(async () => await Ae(t.fetch, `${t.url}/object/${t.bucketId}`, {
      prefixes: e
    }, {
      headers: t.headers
    }));
  }
  async list(e, t, r) {
    var s = this;
    return s.handleOperation(async () => {
      const n = ve(ve(ve({}, xe), t), {}, {
        prefix: e || ""
      });
      return await Ee(s.fetch, `${s.url}/object/list/${s.bucketId}`, n, {
        headers: s.headers
      }, r);
    });
  }
  async listV2(e, t) {
    var r = this;
    return r.handleOperation(async () => {
      const s = ve({}, e);
      return await Ee(r.fetch, `${r.url}/object/list-v2/${r.bucketId}`, s, {
        headers: r.headers
      }, t);
    });
  }
  encodeMetadata(e) {
    return JSON.stringify(e);
  }
  toBase64(e) {
    if (typeof Buffer != "undefined") {
      return Buffer.from(e).toString("base64");
    } else {
      return btoa(e);
    }
  }
  _getFinalPath(e) {
    return `${this.bucketId}/${e.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(e) {
    return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(e) {
    const t = [];
    if (e.width) {
      t.push(`width=${e.width}`);
    }
    if (e.height) {
      t.push(`height=${e.height}`);
    }
    if (e.resize) {
      t.push(`resize=${e.resize}`);
    }
    if (e.format) {
      t.push(`format=${e.format}`);
    }
    if (e.quality) {
      t.push(`quality=${e.quality}`);
    }
    return t.join("&");
  }
};
const Le = {
  "X-Client-Info": "storage-js/2.99.0"
};
var De = class extends $e {
  constructor(e, t = {}, r, s) {
    const n = new URL(e);
    if ((s == null ? undefined : s.useNewHostname) && /supabase\.(co|in|red)$/.test(n.hostname) && !n.hostname.includes("storage.supabase.")) {
      n.hostname = n.hostname.replace("supabase.", "storage.supabase.");
    }
    super(n.href.replace(/\/$/, ""), ve(ve({}, Le), t), r, "storage");
  }
  async listBuckets(e) {
    var t = this;
    return t.handleOperation(async () => {
      const r = t.listBucketOptionsToQueryString(e);
      return await Te(t.fetch, `${t.url}/bucket${r}`, {
        headers: t.headers
      });
    });
  }
  async getBucket(e) {
    var t = this;
    return t.handleOperation(async () => await Te(t.fetch, `${t.url}/bucket/${e}`, {
      headers: t.headers
    }));
  }
  async createBucket(e, t = {
    public: false
  }) {
    var r = this;
    return r.handleOperation(async () => await Ee(r.fetch, `${r.url}/bucket`, {
      id: e,
      name: e,
      type: t.type,
      public: t.public,
      file_size_limit: t.fileSizeLimit,
      allowed_mime_types: t.allowedMimeTypes
    }, {
      headers: r.headers
    }));
  }
  async updateBucket(e, t) {
    var r = this;
    return r.handleOperation(async () => await Oe(r.fetch, `${r.url}/bucket/${e}`, {
      id: e,
      name: e,
      public: t.public,
      file_size_limit: t.fileSizeLimit,
      allowed_mime_types: t.allowedMimeTypes
    }, {
      headers: r.headers
    }));
  }
  async emptyBucket(e) {
    var t = this;
    return t.handleOperation(async () => await Ee(t.fetch, `${t.url}/bucket/${e}/empty`, {}, {
      headers: t.headers
    }));
  }
  async deleteBucket(e) {
    var t = this;
    return t.handleOperation(async () => await Ae(t.fetch, `${t.url}/bucket/${e}`, {}, {
      headers: t.headers
    }));
  }
  listBucketOptionsToQueryString(e) {
    const t = {};
    if (e) {
      if ("limit" in e) {
        t.limit = String(e.limit);
      }
      if ("offset" in e) {
        t.offset = String(e.offset);
      }
      if (e.search) {
        t.search = e.search;
      }
      if (e.sortColumn) {
        t.sortColumn = e.sortColumn;
      }
      if (e.sortOrder) {
        t.sortOrder = e.sortOrder;
      }
    }
    if (Object.keys(t).length > 0) {
      return "?" + new URLSearchParams(t).toString();
    } else {
      return "";
    }
  }
};
var Be = class extends $e {
  constructor(e, t = {}, r) {
    super(e.replace(/\/$/, ""), ve(ve({}, Le), t), r, "storage");
  }
  async createBucket(e) {
    var t = this;
    return t.handleOperation(async () => await Ee(t.fetch, `${t.url}/bucket`, {
      name: e
    }, {
      headers: t.headers
    }));
  }
  async listBuckets(e) {
    var t = this;
    return t.handleOperation(async () => {
      const r = new URLSearchParams();
      if ((e == null ? undefined : e.limit) !== undefined) {
        r.set("limit", e.limit.toString());
      }
      if ((e == null ? undefined : e.offset) !== undefined) {
        r.set("offset", e.offset.toString());
      }
      if (e == null ? undefined : e.sortColumn) {
        r.set("sortColumn", e.sortColumn);
      }
      if (e == null ? undefined : e.sortOrder) {
        r.set("sortOrder", e.sortOrder);
      }
      if (e == null ? undefined : e.search) {
        r.set("search", e.search);
      }
      const s = r.toString();
      const n = s ? `${t.url}/bucket?${s}` : `${t.url}/bucket`;
      return await Te(t.fetch, n, {
        headers: t.headers
      });
    });
  }
  async deleteBucket(e) {
    var t = this;
    return t.handleOperation(async () => await Ae(t.fetch, `${t.url}/bucket/${e}`, {}, {
      headers: t.headers
    }));
  }
  from(e) {
    var t = this;
    if (!(e => !!e && typeof e == "string" && e.length !== 0 && !(e.length > 100) && e.trim() === e && !e.includes("/") && !e.includes("\\") && /^[\w!.\*'() &$@=;:+,?-]+$/.test(e))(e)) {
      throw new he("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
    }
    const r = new ue({
      baseUrl: this.url,
      catalogName: e,
      auth: {
        type: "custom",
        getHeaders: async () => t.headers
      },
      fetch: this.fetch
    });
    const s = this.shouldThrowOnError;
    return new Proxy(r, {
      get(e, t) {
        const r = e[t];
        if (typeof r != "function") {
          return r;
        } else {
          return async (...t) => {
            try {
              return {
                data: await r.apply(e, t),
                error: null
              };
            } catch (n) {
              if (s) {
                throw n;
              }
              return {
                data: null,
                error: n
              };
            }
          };
        }
      }
    });
  }
};
var qe = class extends $e {
  constructor(e, t = {}, r) {
    super(e.replace(/\/$/, ""), ve(ve({}, Le), {}, {
      "Content-Type": "application/json"
    }, t), r, "vectors");
  }
  async createIndex(e) {
    var t = this;
    return t.handleOperation(async () => (await je.post(t.fetch, `${t.url}/CreateIndex`, e, {
      headers: t.headers
    })) || {});
  }
  async getIndex(e, t) {
    var r = this;
    return r.handleOperation(async () => await je.post(r.fetch, `${r.url}/GetIndex`, {
      vectorBucketName: e,
      indexName: t
    }, {
      headers: r.headers
    }));
  }
  async listIndexes(e) {
    var t = this;
    return t.handleOperation(async () => await je.post(t.fetch, `${t.url}/ListIndexes`, e, {
      headers: t.headers
    }));
  }
  async deleteIndex(e, t) {
    var r = this;
    return r.handleOperation(async () => (await je.post(r.fetch, `${r.url}/DeleteIndex`, {
      vectorBucketName: e,
      indexName: t
    }, {
      headers: r.headers
    })) || {});
  }
};
var Ke = class extends $e {
  constructor(e, t = {}, r) {
    super(e.replace(/\/$/, ""), ve(ve({}, Le), {}, {
      "Content-Type": "application/json"
    }, t), r, "vectors");
  }
  async putVectors(e) {
    var t = this;
    if (e.vectors.length < 1 || e.vectors.length > 500) {
      throw new Error("Vector batch size must be between 1 and 500 items");
    }
    return t.handleOperation(async () => (await je.post(t.fetch, `${t.url}/PutVectors`, e, {
      headers: t.headers
    })) || {});
  }
  async getVectors(e) {
    var t = this;
    return t.handleOperation(async () => await je.post(t.fetch, `${t.url}/GetVectors`, e, {
      headers: t.headers
    }));
  }
  async listVectors(e) {
    var t = this;
    if (e.segmentCount !== undefined) {
      if (e.segmentCount < 1 || e.segmentCount > 16) {
        throw new Error("segmentCount must be between 1 and 16");
      }
      if (e.segmentIndex !== undefined && (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount)) {
        throw new Error("segmentIndex must be between 0 and " + (e.segmentCount - 1));
      }
    }
    return t.handleOperation(async () => await je.post(t.fetch, `${t.url}/ListVectors`, e, {
      headers: t.headers
    }));
  }
  async queryVectors(e) {
    var t = this;
    return t.handleOperation(async () => await je.post(t.fetch, `${t.url}/QueryVectors`, e, {
      headers: t.headers
    }));
  }
  async deleteVectors(e) {
    var t = this;
    if (e.keys.length < 1 || e.keys.length > 500) {
      throw new Error("Keys batch size must be between 1 and 500 items");
    }
    return t.handleOperation(async () => (await je.post(t.fetch, `${t.url}/DeleteVectors`, e, {
      headers: t.headers
    })) || {});
  }
};
var We = class extends $e {
  constructor(e, t = {}, r) {
    super(e.replace(/\/$/, ""), ve(ve({}, Le), {}, {
      "Content-Type": "application/json"
    }, t), r, "vectors");
  }
  async createBucket(e) {
    var t = this;
    return t.handleOperation(async () => (await je.post(t.fetch, `${t.url}/CreateVectorBucket`, {
      vectorBucketName: e
    }, {
      headers: t.headers
    })) || {});
  }
  async getBucket(e) {
    var t = this;
    return t.handleOperation(async () => await je.post(t.fetch, `${t.url}/GetVectorBucket`, {
      vectorBucketName: e
    }, {
      headers: t.headers
    }));
  }
  async listBuckets(e = {}) {
    var t = this;
    return t.handleOperation(async () => await je.post(t.fetch, `${t.url}/ListVectorBuckets`, e, {
      headers: t.headers
    }));
  }
  async deleteBucket(e) {
    var t = this;
    return t.handleOperation(async () => (await je.post(t.fetch, `${t.url}/DeleteVectorBucket`, {
      vectorBucketName: e
    }, {
      headers: t.headers
    })) || {});
  }
};
var Me = class extends We {
  constructor(e, t = {}) {
    super(e, t.headers || {}, t.fetch);
  }
  from(e) {
    return new Fe(this.url, this.headers, e, this.fetch);
  }
  async createBucket(e) {
    return (() => super.createBucket)().call(this, e);
  }
  async getBucket(e) {
    return (() => super.getBucket)().call(this, e);
  }
  async listBuckets(e = {}) {
    return (() => super.listBuckets)().call(this, e);
  }
  async deleteBucket(e) {
    return (() => super.deleteBucket)().call(this, e);
  }
};
var Fe = class extends qe {
  constructor(e, t, r, s) {
    super(e, t, s);
    this.vectorBucketName = r;
  }
  async createIndex(e) {
    return (() => super.createIndex)().call(this, ve(ve({}, e), {}, {
      vectorBucketName: this.vectorBucketName
    }));
  }
  async listIndexes(e = {}) {
    return (() => super.listIndexes)().call(this, ve(ve({}, e), {}, {
      vectorBucketName: this.vectorBucketName
    }));
  }
  async getIndex(e) {
    return (() => super.getIndex)().call(this, this.vectorBucketName, e);
  }
  async deleteIndex(e) {
    return (() => super.deleteIndex)().call(this, this.vectorBucketName, e);
  }
  index(e) {
    return new Je(this.url, this.headers, this.vectorBucketName, e, this.fetch);
  }
};
var Je = class extends Ke {
  constructor(e, t, r, s, n) {
    super(e, t, n);
    this.vectorBucketName = r;
    this.indexName = s;
  }
  async putVectors(e) {
    var t = this;
    return (() => super.putVectors)().call(t, ve(ve({}, e), {}, {
      vectorBucketName: t.vectorBucketName,
      indexName: t.indexName
    }));
  }
  async getVectors(e) {
    var t = this;
    return (() => super.getVectors)().call(t, ve(ve({}, e), {}, {
      vectorBucketName: t.vectorBucketName,
      indexName: t.indexName
    }));
  }
  async listVectors(e = {}) {
    var t = this;
    return (() => super.listVectors)().call(t, ve(ve({}, e), {}, {
      vectorBucketName: t.vectorBucketName,
      indexName: t.indexName
    }));
  }
  async queryVectors(e) {
    var t = this;
    return (() => super.queryVectors)().call(t, ve(ve({}, e), {}, {
      vectorBucketName: t.vectorBucketName,
      indexName: t.indexName
    }));
  }
  async deleteVectors(e) {
    var t = this;
    return (() => super.deleteVectors)().call(t, ve(ve({}, e), {}, {
      vectorBucketName: t.vectorBucketName,
      indexName: t.indexName
    }));
  }
};
var He = class extends De {
  constructor(e, t = {}, r, s) {
    super(e, t, r, s);
  }
  from(e) {
    return new Ue(this.url, this.headers, e, this.fetch);
  }
  get vectors() {
    return new Me(this.url + "/vector", {
      headers: this.headers,
      fetch: this.fetch
    });
  }
  get analytics() {
    return new Be(this.url + "/iceberg", this.headers, this.fetch);
  }
};
const Ve = "2.99.0";
const Ge = 30000;
const ze = {
  "X-Client-Info": `gotrue-js/${Ve}`
};
const Ye = "X-Supabase-Api-Version";
const Xe = Date.parse("2024-01-01T00:00:00.0Z");
const Qe = "2024-01-01";
const Ze = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i;
class et extends Error {
  constructor(e, t, r) {
    super(e);
    this.__isAuthError = true;
    this.name = "AuthError";
    this.status = t;
    this.code = r;
  }
}
function tt(e) {
  return typeof e == "object" && e !== null && "__isAuthError" in e;
}
class rt extends et {
  constructor(e, t, r) {
    super(e, t, r);
    this.name = "AuthApiError";
    this.status = t;
    this.code = r;
  }
}
class st extends et {
  constructor(e, t) {
    super(e);
    this.name = "AuthUnknownError";
    this.originalError = t;
  }
}
class nt extends et {
  constructor(e, t, r, s) {
    super(e, r, s);
    this.name = t;
    this.status = r;
  }
}
class it extends nt {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, undefined);
  }
}
function at(e) {
  return tt(e) && e.name === "AuthSessionMissingError";
}
class ot extends nt {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, undefined);
  }
}
class lt extends nt {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, undefined);
  }
}
class ct extends nt {
  constructor(e, t = null) {
    super(e, "AuthImplicitGrantRedirectError", 500, undefined);
    this.details = null;
    this.details = t;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
class ut extends nt {
  constructor(e, t = null) {
    super(e, "AuthPKCEGrantCodeExchangeError", 500, undefined);
    this.details = null;
    this.details = t;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
class ht extends nt {
  constructor() {
    super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found");
  }
}
class dt extends nt {
  constructor(e, t) {
    super(e, "AuthRetryableFetchError", t, undefined);
  }
}
function pt(e) {
  return tt(e) && e.name === "AuthRetryableFetchError";
}
class ft extends nt {
  constructor(e, t, r) {
    super(e, "AuthWeakPasswordError", t, "weak_password");
    this.reasons = r;
  }
}
class gt extends nt {
  constructor(e) {
    super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const yt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("");
const mt = " \t\n\r=".split("");
const wt = (() => {
  const e = new Array(128);
  for (let t = 0; t < e.length; t += 1) {
    e[t] = -1;
  }
  for (let t = 0; t < mt.length; t += 1) {
    e[mt[t].charCodeAt(0)] = -2;
  }
  for (let t = 0; t < yt.length; t += 1) {
    e[yt[t].charCodeAt(0)] = t;
  }
  return e;
})();
function vt(e, t, r) {
  if (e !== null) {
    t.queue = t.queue << 8 | e;
    t.queuedBits += 8;
    while (t.queuedBits >= 6) {
      const e = t.queue >> t.queuedBits - 6 & 63;
      r(yt[e]);
      t.queuedBits -= 6;
    }
  } else if (t.queuedBits > 0) {
    t.queue = t.queue << 6 - t.queuedBits;
    t.queuedBits = 6;
    while (t.queuedBits >= 6) {
      const e = t.queue >> t.queuedBits - 6 & 63;
      r(yt[e]);
      t.queuedBits -= 6;
    }
  }
}
function bt(e, t, r) {
  const s = wt[e];
  if (!(s > -1)) {
    if (s === -2) {
      return;
    }
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`);
  }
  t.queue = t.queue << 6 | s;
  t.queuedBits += 6;
  while (t.queuedBits >= 8) {
    r(t.queue >> t.queuedBits - 8 & 255);
    t.queuedBits -= 8;
  }
}
function _t(e) {
  const t = [];
  const r = e => {
    t.push(String.fromCodePoint(e));
  };
  const s = {
    utf8seq: 0,
    codepoint: 0
  };
  const n = {
    queue: 0,
    queuedBits: 0
  };
  const i = e => {
    (function (e, t, r) {
      if (t.utf8seq === 0) {
        if (e <= 127) {
          r(e);
          return;
        }
        for (let r = 1; r < 6; r += 1) {
          if (!(e >> 7 - r & 1)) {
            t.utf8seq = r;
            break;
          }
        }
        if (t.utf8seq === 2) {
          t.codepoint = e & 31;
        } else if (t.utf8seq === 3) {
          t.codepoint = e & 15;
        } else {
          if (t.utf8seq !== 4) {
            throw new Error("Invalid UTF-8 sequence");
          }
          t.codepoint = e & 7;
        }
        t.utf8seq -= 1;
      } else if (t.utf8seq > 0) {
        if (e <= 127) {
          throw new Error("Invalid UTF-8 sequence");
        }
        t.codepoint = t.codepoint << 6 | e & 63;
        t.utf8seq -= 1;
        if (t.utf8seq === 0) {
          r(t.codepoint);
        }
      }
    })(e, s, r);
  };
  for (let a = 0; a < e.length; a += 1) {
    bt(e.charCodeAt(a), n, i);
  }
  return t.join("");
}
function kt(e, t) {
  if (!(e <= 127)) {
    if (e <= 2047) {
      t(e >> 6 | 192);
      t(e & 63 | 128);
      return;
    }
    if (e <= 65535) {
      t(e >> 12 | 224);
      t(e >> 6 & 63 | 128);
      t(e & 63 | 128);
      return;
    }
    if (e <= 1114111) {
      t(e >> 18 | 240);
      t(e >> 12 & 63 | 128);
      t(e >> 6 & 63 | 128);
      t(e & 63 | 128);
      return;
    }
    throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`);
  }
  t(e);
}
function St(e) {
  const t = [];
  const r = {
    queue: 0,
    queuedBits: 0
  };
  const s = e => {
    t.push(e);
  };
  for (let n = 0; n < e.length; n += 1) {
    bt(e.charCodeAt(n), r, s);
  }
  return new Uint8Array(t);
}
function Tt(e) {
  const t = [];
  const r = {
    queue: 0,
    queuedBits: 0
  };
  const s = e => {
    t.push(e);
  };
  e.forEach(e => vt(e, r, s));
  vt(null, r, s);
  return t.join("");
}
const Et = () => typeof window != "undefined" && typeof document != "undefined";
const Ot = {
  tested: false,
  writable: false
};
const Rt = () => {
  if (!Et()) {
    return false;
  }
  try {
    if (typeof globalThis.localStorage != "object") {
      return false;
    }
  } catch (t) {
    return false;
  }
  if (Ot.tested) {
    return Ot.writable;
  }
  const e = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(e, e);
    globalThis.localStorage.removeItem(e);
    Ot.tested = true;
    Ot.writable = true;
  } catch (t) {
    Ot.tested = true;
    Ot.writable = false;
  }
  return Ot.writable;
};
const At = e => e ? (...t) => e(...t) : (...e) => fetch(...e);
const jt = async (e, t, r) => {
  await e.setItem(t, JSON.stringify(r));
};
const $t = async (e, t) => {
  const r = await e.getItem(t);
  if (!r) {
    return null;
  }
  try {
    return JSON.parse(r);
  } catch (s) {
    return r;
  }
};
const Pt = async (e, t) => {
  await e.removeItem(t);
};
class It {
  constructor() {
    this.promise = new It.promiseConstructor((e, t) => {
      this.resolve = e;
      this.reject = t;
    });
  }
}
function Ct(e) {
  const t = e.split(".");
  if (t.length !== 3) {
    throw new gt("Invalid JWT structure");
  }
  for (let r = 0; r < t.length; r++) {
    if (!Ze.test(t[r])) {
      throw new gt("JWT not in base64url format");
    }
  }
  return {
    header: JSON.parse(_t(t[0])),
    payload: JSON.parse(_t(t[1])),
    signature: St(t[2]),
    raw: {
      header: t[0],
      payload: t[1]
    }
  };
}
function xt(e) {
  return ("0" + e.toString(16)).substr(-2);
}
async function Nt(e, t, r = false) {
  const s = function () {
    const e = new Uint32Array(56);
    if (typeof crypto == "undefined") {
      const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
      const t = e.length;
      let r = "";
      for (let s = 0; s < 56; s++) {
        r += e.charAt(Math.floor(Math.random() * t));
      }
      return r;
    }
    crypto.getRandomValues(e);
    return Array.from(e, xt).join("");
  }();
  let n = s;
  if (r) {
    n += "/PASSWORD_RECOVERY";
  }
  await jt(e, `${t}-code-verifier`, n);
  const i = await async function (e) {
    if (typeof crypto == "undefined" || crypto.subtle === undefined || typeof TextEncoder == "undefined") {
      console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.");
      return e;
    }
    const t = await async function (e) {
      const t = new TextEncoder().encode(e);
      const r = await crypto.subtle.digest("SHA-256", t);
      const s = new Uint8Array(r);
      return Array.from(s).map(e => String.fromCharCode(e)).join("");
    }(e);
    return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }(s);
  return [i, s === i ? "plain" : "s256"];
}
It.promiseConstructor = Promise;
const Ut = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
const Lt = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Dt(e) {
  if (!Lt.test(e)) {
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
  }
}
function Bt() {
  return new Proxy({}, {
    get: (e, t) => {
      if (t === "__isUserNotAvailableProxy") {
        return true;
      }
      if (typeof t == "symbol") {
        const e = t.toString();
        if (e === "Symbol(Symbol.toPrimitive)" || e === "Symbol(Symbol.toStringTag)" || e === "Symbol(util.inspect.custom)") {
          return;
        }
      }
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`);
    },
    set: (e, t) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    },
    deleteProperty: (e, t) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    }
  });
}
function qt(e) {
  return JSON.parse(JSON.stringify(e));
}
const Kt = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e);
const Wt = [502, 503, 504];
async function Mt(e) {
  var r;
  if (typeof (r = e) != "object" || r === null || !("status" in r) || !("ok" in r) || !("json" in r) || typeof r.json != "function") {
    throw new dt(Kt(e), 0);
  }
  if (Wt.includes(e.status)) {
    throw new dt(Kt(e), e.status);
  }
  let s;
  let n;
  try {
    s = await e.json();
  } catch (a) {
    throw new st(Kt(a), a);
  }
  const i = function (e) {
    const t = e.headers.get(Ye);
    if (!t) {
      return null;
    }
    if (!t.match(Ut)) {
      return null;
    }
    try {
      return new Date(`${t}T00:00:00.0Z`);
    } catch (a) {
      return null;
    }
  }(e);
  if (i && i.getTime() >= Xe && typeof s == "object" && s && typeof s.code == "string") {
    n = s.code;
  } else if (typeof s == "object" && s && typeof s.error_code == "string") {
    n = s.error_code;
  }
  if (n) {
    if (n === "weak_password") {
      throw new ft(Kt(s), e.status, s.weak_password?.reasons || []);
    }
    if (n === "session_not_found") {
      throw new it();
    }
  } else if (typeof s == "object" && s && typeof s.weak_password == "object" && s.weak_password && Array.isArray(s.weak_password.reasons) && s.weak_password.reasons.length && s.weak_password.reasons.reduce((e, t) => e && typeof t == "string", true)) {
    throw new ft(Kt(s), e.status, s.weak_password.reasons);
  }
  throw new rt(Kt(s), e.status || 500, n);
}
async function Ft(e, t, r, s) {
  const i = Object.assign({}, s == null ? undefined : s.headers);
  i[Ye] ||= Qe;
  if (s == null ? undefined : s.jwt) {
    i.Authorization = `Bearer ${s.jwt}`;
  }
  const a = (s == null ? undefined : s.query) ?? {};
  if (s == null ? undefined : s.redirectTo) {
    a.redirect_to = s.redirectTo;
  }
  const o = Object.keys(a).length ? "?" + new URLSearchParams(a).toString() : "";
  const l = await async function (e, t, r, s, n, i) {
    const a = ((e, t, r, s) => {
      const n = {
        method: e,
        headers: (t == null ? undefined : t.headers) || {}
      };
      if (e === "GET") {
        return n;
      } else {
        n.headers = Object.assign({
          "Content-Type": "application/json;charset=UTF-8"
        }, t == null ? undefined : t.headers);
        n.body = JSON.stringify(s);
        return Object.assign(Object.assign({}, n), r);
      }
    })(t, s, {}, i);
    let o;
    try {
      o = await e(r, Object.assign({}, a));
    } catch (l) {
      console.error(l);
      throw new dt(Kt(l), 0);
    }
    if (!o.ok) {
      await Mt(o);
    }
    if (s == null ? undefined : s.noResolveJson) {
      return o;
    }
    try {
      return await o.json();
    } catch (l) {
      await Mt(l);
    }
  }(e, t, r + o, {
    headers: i,
    noResolveJson: s == null ? undefined : s.noResolveJson
  }, 0, s == null ? undefined : s.body);
  if (s == null ? undefined : s.xform) {
    if (s == null) {
      return undefined;
    } else {
      return s.xform(l);
    }
  } else {
    return {
      data: Object.assign({}, l),
      error: null
    };
  }
}
function Jt(e) {
  let r = null;
  var s;
  if (function (e) {
    return e.access_token && e.refresh_token && e.expires_in;
  }(e)) {
    r = Object.assign({}, e);
    if (!e.expires_at) {
      s = e.expires_in;
      r.expires_at = Math.round(Date.now() / 1000) + s;
    }
  }
  return {
    data: {
      session: r,
      user: e.user ?? e
    },
    error: null
  };
}
function Ht(e) {
  const t = Jt(e);
  if (!t.error && e.weak_password && typeof e.weak_password == "object" && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && typeof e.weak_password.message == "string" && e.weak_password.reasons.reduce((e, t) => e && typeof t == "string", true)) {
    t.data.weak_password = e.weak_password;
  }
  return t;
}
function Vt(e) {
  return {
    data: {
      user: e.user ?? e
    },
    error: null
  };
}
function Gt(e) {
  return {
    data: e,
    error: null
  };
}
function zt(t) {
  const {
    action_link: r,
    email_otp: s,
    hashed_token: n,
    redirect_to: i,
    verification_type: a
  } = t;
  const o = e(t, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]);
  return {
    data: {
      properties: {
        action_link: r,
        email_otp: s,
        hashed_token: n,
        redirect_to: i,
        verification_type: a
      },
      user: Object.assign({}, o)
    },
    error: null
  };
}
function Yt(e) {
  return e;
}
const Xt = ["global", "local", "others"];
class Qt {
  constructor({
    url: e = "",
    headers: t = {},
    fetch: r
  }) {
    this.url = e;
    this.headers = t;
    this.fetch = At(r);
    this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    };
    this.oauth = {
      listClients: this._listOAuthClients.bind(this),
      createClient: this._createOAuthClient.bind(this),
      getClient: this._getOAuthClient.bind(this),
      updateClient: this._updateOAuthClient.bind(this),
      deleteClient: this._deleteOAuthClient.bind(this),
      regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
    };
    this.customProviders = {
      listProviders: this._listCustomProviders.bind(this),
      createProvider: this._createCustomProvider.bind(this),
      getProvider: this._getCustomProvider.bind(this),
      updateProvider: this._updateCustomProvider.bind(this),
      deleteProvider: this._deleteCustomProvider.bind(this)
    };
  }
  async signOut(e, t = Xt[0]) {
    if (Xt.indexOf(t) < 0) {
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Xt.join(", ")}`);
    }
    try {
      await Ft(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
        headers: this.headers,
        jwt: e,
        noResolveJson: true
      });
      return {
        data: null,
        error: null
      };
    } catch (r) {
      if (tt(r)) {
        return {
          data: null,
          error: r
        };
      }
      throw r;
    }
  }
  async inviteUserByEmail(e, t = {}) {
    try {
      return await Ft(this.fetch, "POST", `${this.url}/invite`, {
        body: {
          email: e,
          data: t.data
        },
        headers: this.headers,
        redirectTo: t.redirectTo,
        xform: Vt
      });
    } catch (r) {
      if (tt(r)) {
        return {
          data: {
            user: null
          },
          error: r
        };
      }
      throw r;
    }
  }
  async generateLink(t) {
    try {
      const {
        options: r
      } = t;
      const s = e(t, ["options"]);
      const n = Object.assign(Object.assign({}, s), r);
      if ("newEmail" in s) {
        n.new_email = s == null ? undefined : s.newEmail;
        delete n.newEmail;
      }
      return await Ft(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: n,
        headers: this.headers,
        xform: zt,
        redirectTo: r == null ? undefined : r.redirectTo
      });
    } catch (r) {
      if (tt(r)) {
        return {
          data: {
            properties: null,
            user: null
          },
          error: r
        };
      }
      throw r;
    }
  }
  async createUser(e) {
    try {
      return await Ft(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: Vt
      });
    } catch (t) {
      if (tt(t)) {
        return {
          data: {
            user: null
          },
          error: t
        };
      }
      throw t;
    }
  }
  async listUsers(e) {
    var t;
    var s;
    var a;
    try {
      const l = {
        nextPage: null,
        lastPage: 0,
        total: 0
      };
      const c = await Ft(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: true,
        query: {
          page: ((t = e == null ? undefined : e.page) === null || t === undefined ? undefined : t.toString()) ?? "",
          per_page: ((s = e == null ? undefined : e.perPage) === null || s === undefined ? undefined : s.toString()) ?? ""
        },
        xform: Yt
      });
      if (c.error) {
        throw c.error;
      }
      const u = await c.json();
      const h = c.headers.get("x-total-count") ?? 0;
      const d = ((a = c.headers.get("link")) === null || a === undefined ? undefined : a.split(",")) ?? [];
      if (d.length > 0) {
        d.forEach(e => {
          const t = parseInt(e.split(";")[0].split("=")[1].substring(0, 1));
          const r = JSON.parse(e.split(";")[1].split("=")[1]);
          l[`${r}Page`] = t;
        });
        l.total = parseInt(h);
      }
      return {
        data: Object.assign(Object.assign({}, u), l),
        error: null
      };
    } catch (l) {
      if (tt(l)) {
        return {
          data: {
            users: []
          },
          error: l
        };
      }
      throw l;
    }
  }
  async getUserById(e) {
    Dt(e);
    try {
      return await Ft(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: Vt
      });
    } catch (t) {
      if (tt(t)) {
        return {
          data: {
            user: null
          },
          error: t
        };
      }
      throw t;
    }
  }
  async updateUserById(e, t) {
    Dt(e);
    try {
      return await Ft(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: t,
        headers: this.headers,
        xform: Vt
      });
    } catch (r) {
      if (tt(r)) {
        return {
          data: {
            user: null
          },
          error: r
        };
      }
      throw r;
    }
  }
  async deleteUser(e, t = false) {
    Dt(e);
    try {
      return await Ft(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: {
          should_soft_delete: t
        },
        xform: Vt
      });
    } catch (r) {
      if (tt(r)) {
        return {
          data: {
            user: null
          },
          error: r
        };
      }
      throw r;
    }
  }
  async _listFactors(e) {
    Dt(e.userId);
    try {
      const {
        data: t,
        error: r
      } = await Ft(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
        headers: this.headers,
        xform: e => ({
          data: {
            factors: e
          },
          error: null
        })
      });
      return {
        data: t,
        error: r
      };
    } catch (t) {
      if (tt(t)) {
        return {
          data: null,
          error: t
        };
      }
      throw t;
    }
  }
  async _deleteFactor(e) {
    Dt(e.userId);
    Dt(e.id);
    try {
      return {
        data: await Ft(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
          headers: this.headers
        }),
        error: null
      };
    } catch (t) {
      if (tt(t)) {
        return {
          data: null,
          error: t
        };
      }
      throw t;
    }
  }
  async _listOAuthClients(e) {
    var t;
    var s;
    var a;
    try {
      const l = {
        nextPage: null,
        lastPage: 0,
        total: 0
      };
      const c = await Ft(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
        headers: this.headers,
        noResolveJson: true,
        query: {
          page: ((t = e == null ? undefined : e.page) === null || t === undefined ? undefined : t.toString()) ?? "",
          per_page: ((s = e == null ? undefined : e.perPage) === null || s === undefined ? undefined : s.toString()) ?? ""
        },
        xform: Yt
      });
      if (c.error) {
        throw c.error;
      }
      const u = await c.json();
      const h = c.headers.get("x-total-count") ?? 0;
      const d = ((a = c.headers.get("link")) === null || a === undefined ? undefined : a.split(",")) ?? [];
      if (d.length > 0) {
        d.forEach(e => {
          const t = parseInt(e.split(";")[0].split("=")[1].substring(0, 1));
          const r = JSON.parse(e.split(";")[1].split("=")[1]);
          l[`${r}Page`] = t;
        });
        l.total = parseInt(h);
      }
      return {
        data: Object.assign(Object.assign({}, u), l),
        error: null
      };
    } catch (l) {
      if (tt(l)) {
        return {
          data: {
            clients: []
          },
          error: l
        };
      }
      throw l;
    }
  }
  async _createOAuthClient(e) {
    try {
      return await Ft(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: e,
        headers: this.headers,
        xform: e => ({
          data: e,
          error: null
        })
      });
    } catch (t) {
      if (tt(t)) {
        return {
          data: null,
          error: t
        };
      }
      throw t;
    }
  }
  async _getOAuthClient(e) {
    try {
      return await Ft(this.fetch, "GET", `${this.url}/admin/oauth/clients/${e}`, {
        headers: this.headers,
        xform: e => ({
          data: e,
          error: null
        })
      });
    } catch (t) {
      if (tt(t)) {
        return {
          data: null,
          error: t
        };
      }
      throw t;
    }
  }
  async _updateOAuthClient(e, t) {
    try {
      return await Ft(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${e}`, {
        body: t,
        headers: this.headers,
        xform: e => ({
          data: e,
          error: null
        })
      });
    } catch (r) {
      if (tt(r)) {
        return {
          data: null,
          error: r
        };
      }
      throw r;
    }
  }
  async _deleteOAuthClient(e) {
    try {
      await Ft(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${e}`, {
        headers: this.headers,
        noResolveJson: true
      });
      return {
        data: null,
        error: null
      };
    } catch (t) {
      if (tt(t)) {
        return {
          data: null,
          error: t
        };
      }
      throw t;
    }
  }
  async _regenerateOAuthClientSecret(e) {
    try {
      return await Ft(this.fetch, "POST", `${this.url}/admin/oauth/clients/${e}/regenerate_secret`, {
        headers: this.headers,
        xform: e => ({
          data: e,
          error: null
        })
      });
    } catch (t) {
      if (tt(t)) {
        return {
          data: null,
          error: t
        };
      }
      throw t;
    }
  }
  async _listCustomProviders(e) {
    try {
      const t = {};
      if (e == null ? undefined : e.type) {
        t.type = e.type;
      }
      return await Ft(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
        headers: this.headers,
        query: t,
        xform: e => {
          return {
            data: {
              providers: (e == null ? undefined : e.providers) ?? []
            },
            error: null
          };
        }
      });
    } catch (t) {
      if (tt(t)) {
        return {
          data: {
            providers: []
          },
          error: t
        };
      }
      throw t;
    }
  }
  async _createCustomProvider(e) {
    try {
      return await Ft(this.fetch, "POST", `${this.url}/admin/custom-providers`, {
        body: e,
        headers: this.headers,
        xform: e => ({
          data: e,
          error: null
        })
      });
    } catch (t) {
      if (tt(t)) {
        return {
          data: null,
          error: t
        };
      }
      throw t;
    }
  }
  async _getCustomProvider(e) {
    try {
      return await Ft(this.fetch, "GET", `${this.url}/admin/custom-providers/${e}`, {
        headers: this.headers,
        xform: e => ({
          data: e,
          error: null
        })
      });
    } catch (t) {
      if (tt(t)) {
        return {
          data: null,
          error: t
        };
      }
      throw t;
    }
  }
  async _updateCustomProvider(e, t) {
    try {
      return await Ft(this.fetch, "PUT", `${this.url}/admin/custom-providers/${e}`, {
        body: t,
        headers: this.headers,
        xform: e => ({
          data: e,
          error: null
        })
      });
    } catch (r) {
      if (tt(r)) {
        return {
          data: null,
          error: r
        };
      }
      throw r;
    }
  }
  async _deleteCustomProvider(e) {
    try {
      await Ft(this.fetch, "DELETE", `${this.url}/admin/custom-providers/${e}`, {
        headers: this.headers,
        noResolveJson: true
      });
      return {
        data: null,
        error: null
      };
    } catch (t) {
      if (tt(t)) {
        return {
          data: null,
          error: t
        };
      }
      throw t;
    }
  }
}
function Zt(e = {}) {
  return {
    getItem: t => e[t] || null,
    setItem: (t, r) => {
      e[t] = r;
    },
    removeItem: t => {
      delete e[t];
    }
  };
}
const er = !!globalThis && !!Rt() && !!globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true";
class tr extends Error {
  constructor(e) {
    super(e);
    this.isAcquireTimeout = true;
  }
}
class rr extends tr {}
async function sr(e, t, r) {
  if (er) {
    console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
  }
  const s = new globalThis.AbortController();
  if (t > 0) {
    setTimeout(() => {
      s.abort();
      if (er) {
        console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e);
      }
    }, t);
  }
  await Promise.resolve();
  try {
    return await globalThis.navigator.locks.request(e, t === 0 ? {
      mode: "exclusive",
      ifAvailable: true
    } : {
      mode: "exclusive",
      signal: s.signal
    }, async s => {
      if (!s) {
        if (t === 0) {
          if (er) {
            console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e);
          }
          throw new rr(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
        }
        if (er) {
          try {
            const e = await globalThis.navigator.locks.query();
            console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(e, null, "  "));
          } catch (n) {
            console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", n);
          }
        }
        console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request");
        return await r();
      }
      if (er) {
        console.log("@supabase/gotrue-js: navigatorLock: acquired", e, s.name);
      }
      try {
        return await r();
      } finally {
        if (er) {
          console.log("@supabase/gotrue-js: navigatorLock: released", e, s.name);
        }
      }
    });
  } catch (n) {
    if ((n == null ? undefined : n.name) === "AbortError" && t > 0) {
      if (er) {
        console.log("@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock", e);
      }
      console.warn(`@supabase/gotrue-js: Lock "${e}" was not released within ${t}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`);
      return await Promise.resolve().then(() => globalThis.navigator.locks.request(e, {
        mode: "exclusive",
        steal: true
      }, async t => {
        if (!t) {
          console.warn("@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true");
          return await r();
        }
        if (er) {
          console.log("@supabase/gotrue-js: navigatorLock: recovered (stolen)", e, t.name);
        }
        try {
          return await r();
        } finally {
          if (er) {
            console.log("@supabase/gotrue-js: navigatorLock: released (stolen)", e, t.name);
          }
        }
      }));
    }
    throw n;
  }
}
function nr(e) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(e)) {
    throw new Error(`@supabase/auth-js: Address "${e}" is invalid.`);
  }
  return e.toLowerCase();
}
function ir(e) {
  const t = new TextEncoder().encode(e);
  return "0x" + Array.from(t, e => e.toString(16).padStart(2, "0")).join("");
}
class ar extends Error {
  constructor({
    message: e,
    code: t,
    cause: r,
    name: s
  }) {
    super(e, {
      cause: r
    });
    this.__isWebAuthnError = true;
    this.name = s ?? (r instanceof Error ? r.name : undefined) ?? "Unknown Error";
    this.code = t;
  }
}
class or extends ar {
  constructor(e, t) {
    super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: t,
      message: e
    });
    this.name = "WebAuthnUnknownError";
    this.originalError = t;
  }
}
function lr({
  error: e,
  options: t
}) {
  const {
    publicKey: i
  } = t;
  if (!i) {
    throw Error("options was missing required publicKey property");
  }
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal) {
      return new ar({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e
      });
    }
  } else if (e.name === "ConstraintError") {
    if (i.authenticatorSelection?.requireResidentKey === true) {
      return new ar({
        message: "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: e
      });
    }
    if (t.mediation === "conditional" && i.authenticatorSelection?.userVerification === "required") {
      return new ar({
        message: "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: e
      });
    }
    if (i.authenticatorSelection?.userVerification === "required") {
      return new ar({
        message: "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: e
      });
    }
  } else {
    if (e.name === "InvalidStateError") {
      return new ar({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: e
      });
    }
    if (e.name === "NotAllowedError") {
      return new ar({
        message: e.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e
      });
    }
    if (e.name === "NotSupportedError") {
      if (i.pubKeyCredParams.filter(e => e.type === "public-key").length === 0) {
        return new ar({
          message: "No entry in pubKeyCredParams was of type \"public-key\"",
          code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
          cause: e
        });
      } else {
        return new ar({
          message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
          code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
          cause: e
        });
      }
    }
    if (e.name === "SecurityError") {
      const t = window.location.hostname;
      if (!gr(t)) {
        return new ar({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: e
        });
      }
      if (i.rp.id !== t) {
        return new ar({
          message: `The RP ID "${i.rp.id}" is invalid for this domain`,
          code: "ERROR_INVALID_RP_ID",
          cause: e
        });
      }
    } else if (e.name === "TypeError") {
      if (i.user.id.byteLength < 1 || i.user.id.byteLength > 64) {
        return new ar({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: e
        });
      }
    } else if (e.name === "UnknownError") {
      return new ar({
        message: "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e
      });
    }
  }
  return new ar({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e
  });
}
function cr({
  error: e,
  options: t
}) {
  const {
    publicKey: r
  } = t;
  if (!r) {
    throw Error("options was missing required publicKey property");
  }
  if (e.name === "AbortError") {
    if (t.signal instanceof AbortSignal) {
      return new ar({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: e
      });
    }
  } else {
    if (e.name === "NotAllowedError") {
      return new ar({
        message: e.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: e
      });
    }
    if (e.name === "SecurityError") {
      const t = window.location.hostname;
      if (!gr(t)) {
        return new ar({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: e
        });
      }
      if (r.rpId !== t) {
        return new ar({
          message: `The RP ID "${r.rpId}" is invalid for this domain`,
          code: "ERROR_INVALID_RP_ID",
          cause: e
        });
      }
    } else if (e.name === "UnknownError") {
      return new ar({
        message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: e
      });
    }
  }
  return new ar({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: e
  });
}
const ur = new class {
  createNewAbortSignal() {
    if (this.controller) {
      const e = new Error("Cancelling existing WebAuthn API call for new one");
      e.name = "AbortError";
      this.controller.abort(e);
    }
    const e = new AbortController();
    this.controller = e;
    return e.signal;
  }
  cancelCeremony() {
    if (this.controller) {
      const e = new Error("Manually cancelling existing WebAuthn API call");
      e.name = "AbortError";
      this.controller.abort(e);
      this.controller = undefined;
    }
  }
}();
function hr(t) {
  if (!t) {
    throw new Error("Credential creation options are required");
  }
  if (typeof PublicKeyCredential != "undefined" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function") {
    return PublicKeyCredential.parseCreationOptionsFromJSON(t);
  }
  const {
    challenge: r,
    user: s,
    excludeCredentials: n
  } = t;
  const i = e(t, ["challenge", "user", "excludeCredentials"]);
  const a = St(r).buffer;
  const o = Object.assign(Object.assign({}, s), {
    id: St(s.id).buffer
  });
  const l = Object.assign(Object.assign({}, i), {
    challenge: a,
    user: o
  });
  if (n && n.length > 0) {
    l.excludeCredentials = new Array(n.length);
    for (let e = 0; e < n.length; e++) {
      const t = n[e];
      l.excludeCredentials[e] = Object.assign(Object.assign({}, t), {
        id: St(t.id).buffer,
        type: t.type || "public-key",
        transports: t.transports
      });
    }
  }
  return l;
}
function dr(t) {
  if (!t) {
    throw new Error("Credential request options are required");
  }
  if (typeof PublicKeyCredential != "undefined" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function") {
    return PublicKeyCredential.parseRequestOptionsFromJSON(t);
  }
  const {
    challenge: r,
    allowCredentials: s
  } = t;
  const n = e(t, ["challenge", "allowCredentials"]);
  const i = St(r).buffer;
  const a = Object.assign(Object.assign({}, n), {
    challenge: i
  });
  if (s && s.length > 0) {
    a.allowCredentials = new Array(s.length);
    for (let e = 0; e < s.length; e++) {
      const t = s[e];
      a.allowCredentials[e] = Object.assign(Object.assign({}, t), {
        id: St(t.id).buffer,
        type: t.type || "public-key",
        transports: t.transports
      });
    }
  }
  return a;
}
function pr(e) {
  if ("toJSON" in e && typeof e.toJSON == "function") {
    return e.toJSON();
  }
  const r = e;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      attestationObject: Tt(new Uint8Array(e.response.attestationObject)),
      clientDataJSON: Tt(new Uint8Array(e.response.clientDataJSON))
    },
    type: "public-key",
    clientExtensionResults: e.getClientExtensionResults(),
    authenticatorAttachment: r.authenticatorAttachment ?? undefined
  };
}
function fr(e) {
  if ("toJSON" in e && typeof e.toJSON == "function") {
    return e.toJSON();
  }
  const r = e;
  const s = e.getClientExtensionResults();
  const n = e.response;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      authenticatorData: Tt(new Uint8Array(n.authenticatorData)),
      clientDataJSON: Tt(new Uint8Array(n.clientDataJSON)),
      signature: Tt(new Uint8Array(n.signature)),
      userHandle: n.userHandle ? Tt(new Uint8Array(n.userHandle)) : undefined
    },
    type: "public-key",
    clientExtensionResults: s,
    authenticatorAttachment: r.authenticatorAttachment ?? undefined
  };
}
function gr(e) {
  return e === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e);
}
function yr() {
  return !!Et() && !!("PublicKeyCredential" in window) && !!window.PublicKeyCredential && !!("credentials" in navigator) && typeof navigator?.credentials?.create == "function" && typeof navigator?.credentials?.get == "function";
}
const mr = {
  hints: ["security-key"],
  authenticatorSelection: {
    authenticatorAttachment: "cross-platform",
    requireResidentKey: false,
    userVerification: "preferred",
    residentKey: "discouraged"
  },
  attestation: "direct"
};
const wr = {
  userVerification: "preferred",
  hints: ["security-key"],
  attestation: "direct"
};
function vr(...e) {
  const t = e => e !== null && typeof e == "object" && !Array.isArray(e);
  const r = e => e instanceof ArrayBuffer || ArrayBuffer.isView(e);
  const s = {};
  for (const n of e) {
    if (n) {
      for (const e in n) {
        const i = n[e];
        if (i !== undefined) {
          if (Array.isArray(i)) {
            s[e] = i;
          } else if (r(i)) {
            s[e] = i;
          } else if (t(i)) {
            const r = s[e];
            if (t(r)) {
              s[e] = vr(r, i);
            } else {
              s[e] = vr(i);
            }
          } else {
            s[e] = i;
          }
        }
      }
    }
  }
  return s;
}
class br {
  constructor(e) {
    this.client = e;
    this.enroll = this._enroll.bind(this);
    this.challenge = this._challenge.bind(this);
    this.verify = this._verify.bind(this);
    this.authenticate = this._authenticate.bind(this);
    this.register = this._register.bind(this);
  }
  async _enroll(e) {
    return this.client.mfa.enroll(Object.assign(Object.assign({}, e), {
      factorType: "webauthn"
    }));
  }
  async _challenge({
    factorId: e,
    webauthn: t,
    friendlyName: r,
    signal: s
  }, n) {
    try {
      const {
        data: a,
        error: o
      } = await this.client.mfa.challenge({
        factorId: e,
        webauthn: t
      });
      if (!a) {
        return {
          data: null,
          error: o
        };
      }
      const l = s ?? ur.createNewAbortSignal();
      if (a.webauthn.type === "create") {
        const {
          user: e
        } = a.webauthn.credential_options.publicKey;
        if (!e.name) {
          const t = r;
          if (t) {
            e.name = `${e.id}:${t}`;
          } else {
            const t = (await this.client.getUser()).data.user;
            const r = (t == null ? undefined : t.user_metadata)?.name || (t == null ? undefined : t.email) || (t == null ? undefined : t.id) || "User";
            e.name = `${e.id}:${r}`;
          }
        }
        e.displayName ||= e.name;
      }
      switch (a.webauthn.type) {
        case "create":
          {
            const t = function (e, t) {
              return vr(mr, e, t || {});
            }(a.webauthn.credential_options.publicKey, n == null ? undefined : n.create);
            const {
              data: r,
              error: s
            } = await async function (e) {
              try {
                const t = await navigator.credentials.create(e);
                if (t) {
                  if (t instanceof PublicKeyCredential) {
                    return {
                      data: t,
                      error: null
                    };
                  } else {
                    return {
                      data: null,
                      error: new or("Browser returned unexpected credential type", t)
                    };
                  }
                } else {
                  return {
                    data: null,
                    error: new or("Empty credential response", t)
                  };
                }
              } catch (t) {
                return {
                  data: null,
                  error: lr({
                    error: t,
                    options: e
                  })
                };
              }
            }({
              publicKey: t,
              signal: l
            });
            if (r) {
              return {
                data: {
                  factorId: e,
                  challengeId: a.id,
                  webauthn: {
                    type: a.webauthn.type,
                    credential_response: r
                  }
                },
                error: null
              };
            } else {
              return {
                data: null,
                error: s
              };
            }
          }
        case "request":
          {
            const t = function (e, t) {
              return vr(wr, e, t || {});
            }(a.webauthn.credential_options.publicKey, n == null ? undefined : n.request);
            const {
              data: r,
              error: s
            } = await async function (e) {
              try {
                const t = await navigator.credentials.get(e);
                if (t) {
                  if (t instanceof PublicKeyCredential) {
                    return {
                      data: t,
                      error: null
                    };
                  } else {
                    return {
                      data: null,
                      error: new or("Browser returned unexpected credential type", t)
                    };
                  }
                } else {
                  return {
                    data: null,
                    error: new or("Empty credential response", t)
                  };
                }
              } catch (t) {
                return {
                  data: null,
                  error: cr({
                    error: t,
                    options: e
                  })
                };
              }
            }(Object.assign(Object.assign({}, a.webauthn.credential_options), {
              publicKey: t,
              signal: l
            }));
            if (r) {
              return {
                data: {
                  factorId: e,
                  challengeId: a.id,
                  webauthn: {
                    type: a.webauthn.type,
                    credential_response: r
                  }
                },
                error: null
              };
            } else {
              return {
                data: null,
                error: s
              };
            }
          }
      }
    } catch (a) {
      if (tt(a)) {
        return {
          data: null,
          error: a
        };
      } else {
        return {
          data: null,
          error: new st("Unexpected error in challenge", a)
        };
      }
    }
  }
  async _verify({
    challengeId: e,
    factorId: t,
    webauthn: r
  }) {
    return this.client.mfa.verify({
      factorId: t,
      challengeId: e,
      webauthn: r
    });
  }
  async _authenticate({
    factorId: e,
    webauthn: {
      rpId: t = typeof window != "undefined" ? window.location.hostname : undefined,
      rpOrigins: r = typeof window != "undefined" ? [window.location.origin] : undefined,
      signal: s
    } = {}
  }, n) {
    if (!t) {
      return {
        data: null,
        error: new et("rpId is required for WebAuthn authentication")
      };
    }
    try {
      if (!yr()) {
        return {
          data: null,
          error: new st("Browser does not support WebAuthn", null)
        };
      }
      const {
        data: i,
        error: a
      } = await this.challenge({
        factorId: e,
        webauthn: {
          rpId: t,
          rpOrigins: r
        },
        signal: s
      }, {
        request: n
      });
      if (!i) {
        return {
          data: null,
          error: a
        };
      }
      const {
        webauthn: o
      } = i;
      return this._verify({
        factorId: e,
        challengeId: i.challengeId,
        webauthn: {
          type: o.type,
          rpId: t,
          rpOrigins: r,
          credential_response: o.credential_response
        }
      });
    } catch (i) {
      if (tt(i)) {
        return {
          data: null,
          error: i
        };
      } else {
        return {
          data: null,
          error: new st("Unexpected error in authenticate", i)
        };
      }
    }
  }
  async _register({
    friendlyName: e,
    webauthn: {
      rpId: t = typeof window != "undefined" ? window.location.hostname : undefined,
      rpOrigins: r = typeof window != "undefined" ? [window.location.origin] : undefined,
      signal: s
    } = {}
  }, n) {
    if (!t) {
      return {
        data: null,
        error: new et("rpId is required for WebAuthn registration")
      };
    }
    try {
      if (!yr()) {
        return {
          data: null,
          error: new st("Browser does not support WebAuthn", null)
        };
      }
      const {
        data: i,
        error: a
      } = await this._enroll({
        friendlyName: e
      });
      if (!i) {
        await this.client.mfa.listFactors().then(t => {
          var r;
          if ((r = t.data) === null || r === undefined) {
            return undefined;
          } else {
            return r.all.find(t => t.factor_type === "webauthn" && t.friendly_name === e && t.status !== "unverified");
          }
        }).then(e => e ? this.client.mfa.unenroll({
          factorId: e == null ? undefined : e.id
        }) : undefined);
        return {
          data: null,
          error: a
        };
      }
      const {
        data: o,
        error: l
      } = await this._challenge({
        factorId: i.id,
        friendlyName: i.friendly_name,
        webauthn: {
          rpId: t,
          rpOrigins: r
        },
        signal: s
      }, {
        create: n
      });
      if (o) {
        return this._verify({
          factorId: i.id,
          challengeId: o.challengeId,
          webauthn: {
            rpId: t,
            rpOrigins: r,
            type: o.webauthn.type,
            credential_response: o.webauthn.credential_response
          }
        });
      } else {
        return {
          data: null,
          error: l
        };
      }
    } catch (i) {
      if (tt(i)) {
        return {
          data: null,
          error: i
        };
      } else {
        return {
          data: null,
          error: new st("Unexpected error in register", i)
        };
      }
    }
  }
}
(function () {
  if (typeof globalThis != "object") {
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: true
      });
      __magic__.globalThis = __magic__;
      delete Object.prototype.__magic__;
    } catch (e) {
      if (typeof self != "undefined") {
        self.globalThis = self;
      }
    }
  }
})();
const _r = {
  url: "http://localhost:9999",
  storageKey: "supabase.auth.token",
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
  headers: ze,
  flowType: "implicit",
  debug: false,
  hasCustomAuthorizationHeader: false,
  throwOnError: false,
  lockAcquireTimeout: 5000,
  skipAutoInitialize: false
};
async function kr(e, t, r) {
  return await r();
}
const Sr = {};
class Tr {
  get jwks() {
    return Sr[this.storageKey]?.jwks ?? {
      keys: []
    };
  }
  set jwks(e) {
    Sr[this.storageKey] = Object.assign(Object.assign({}, Sr[this.storageKey]), {
      jwks: e
    });
  }
  get jwks_cached_at() {
    return Sr[this.storageKey]?.cachedAt ?? Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(e) {
    Sr[this.storageKey] = Object.assign(Object.assign({}, Sr[this.storageKey]), {
      cachedAt: e
    });
  }
  constructor(e) {
    var s;
    this.userStorage = null;
    this.memoryStorage = null;
    this.stateChangeEmitters = new Map();
    this.autoRefreshTicker = null;
    this.autoRefreshTickTimeout = null;
    this.visibilityChangedCallback = null;
    this.refreshingDeferred = null;
    this.initializePromise = null;
    this.detectSessionInUrl = true;
    this.hasCustomAuthorizationHeader = false;
    this.suppressGetSessionWarning = false;
    this.lockAcquired = false;
    this.pendingInLock = [];
    this.broadcastChannel = null;
    this.logger = console.log;
    const n = Object.assign(Object.assign({}, _r), e);
    this.storageKey = n.storageKey;
    this.instanceID = Tr.nextInstanceID[this.storageKey] ?? 0;
    Tr.nextInstanceID[this.storageKey] = this.instanceID + 1;
    this.logDebugMessages = !!n.debug;
    if (typeof n.debug == "function") {
      this.logger = n.debug;
    }
    if (this.instanceID > 0 && Et()) {
      const e = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      console.warn(e);
      if (this.logDebugMessages) {
        console.trace(e);
      }
    }
    this.persistSession = n.persistSession;
    this.autoRefreshToken = n.autoRefreshToken;
    this.admin = new Qt({
      url: n.url,
      headers: n.headers,
      fetch: n.fetch
    });
    this.url = n.url;
    this.headers = n.headers;
    this.fetch = At(n.fetch);
    this.lock = n.lock || kr;
    this.detectSessionInUrl = n.detectSessionInUrl;
    this.flowType = n.flowType;
    this.hasCustomAuthorizationHeader = n.hasCustomAuthorizationHeader;
    this.throwOnError = n.throwOnError;
    this.lockAcquireTimeout = n.lockAcquireTimeout;
    if (n.lock) {
      this.lock = n.lock;
    } else if (this.persistSession && Et() && globalThis?.navigator?.locks) {
      this.lock = sr;
    } else {
      this.lock = kr;
    }
    if (!this.jwks) {
      this.jwks = {
        keys: []
      };
      this.jwks_cached_at = Number.MIN_SAFE_INTEGER;
    }
    this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
      webauthn: new br(this)
    };
    this.oauth = {
      getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
      approveAuthorization: this._approveAuthorization.bind(this),
      denyAuthorization: this._denyAuthorization.bind(this),
      listGrants: this._listOAuthGrants.bind(this),
      revokeGrant: this._revokeOAuthGrant.bind(this)
    };
    if (this.persistSession) {
      if (n.storage) {
        this.storage = n.storage;
      } else if (Rt()) {
        this.storage = globalThis.localStorage;
      } else {
        this.memoryStorage = {};
        this.storage = Zt(this.memoryStorage);
      }
      if (n.userStorage) {
        this.userStorage = n.userStorage;
      }
    } else {
      this.memoryStorage = {};
      this.storage = Zt(this.memoryStorage);
    }
    if (Et() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (i) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", i);
      }
      if ((s = this.broadcastChannel) !== null && s !== undefined) {
        s.addEventListener("message", async e => {
          this._debug("received broadcast notification from other tab or client", e);
          try {
            await this._notifyAllSubscribers(e.data.event, e.data.session, false);
          } catch (t) {
            this._debug("#broadcastChannel", "error", t);
          }
        });
      }
    }
    if (!n.skipAutoInitialize) {
      this.initialize().catch(e => {
        this._debug("#initialize()", "error", e);
      });
    }
  }
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  _returnResult(e) {
    if (this.throwOnError && e && e.error) {
      throw e.error;
    }
    return e;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${Ve}) ${new Date().toISOString()}`;
  }
  _debug(...e) {
    if (this.logDebugMessages) {
      this.logger(this._logPrefix(), ...e);
    }
    return this;
  }
  async initialize() {
    this.initializePromise ||= (async () => await this._acquireLock(this.lockAcquireTimeout, async () => await this._initialize()))();
    return await this.initializePromise;
  }
  async _initialize() {
    try {
      let t = {};
      let r = "none";
      if (Et()) {
        t = function (e) {
          const t = {};
          const r = new URL(e);
          if (r.hash && r.hash[0] === "#") {
            try {
              new URLSearchParams(r.hash.substring(1)).forEach((e, r) => {
                t[r] = e;
              });
            } catch (s) {}
          }
          r.searchParams.forEach((e, r) => {
            t[r] = e;
          });
          return t;
        }(window.location.href);
        if (this._isImplicitGrantCallback(t)) {
          r = "implicit";
        } else if (await this._isPKCECallback(t)) {
          r = "pkce";
        }
      }
      if (Et() && this.detectSessionInUrl && r !== "none") {
        const {
          data: s,
          error: n
        } = await this._getSessionFromURL(t, r);
        if (n) {
          this._debug("#_initialize()", "error detecting session from URL", n);
          if (function (e) {
            return tt(e) && e.name === "AuthImplicitGrantRedirectError";
          }(n)) {
            const t = n.details?.code;
            if (t === "identity_already_exists" || t === "identity_not_found" || t === "single_identity_not_deletable") {
              return {
                error: n
              };
            }
          }
          return {
            error: n
          };
        }
        const {
          session: i,
          redirectType: a
        } = s;
        this._debug("#_initialize()", "detected session in URL", i, "redirect type", a);
        await this._saveSession(i);
        setTimeout(async () => {
          if (a === "recovery") {
            await this._notifyAllSubscribers("PASSWORD_RECOVERY", i);
          } else {
            await this._notifyAllSubscribers("SIGNED_IN", i);
          }
        }, 0);
        return {
          error: null
        };
      }
      await this._recoverAndRefresh();
      return {
        error: null
      };
    } catch (t) {
      if (tt(t)) {
        return this._returnResult({
          error: t
        });
      } else {
        return this._returnResult({
          error: new st("Unexpected error during initialization", t)
        });
      }
    } finally {
      await this._handleVisibilityChange();
      this._debug("#_initialize()", "end");
    }
  }
  async signInAnonymously(e) {
    try {
      const n = await Ft(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (e == null ? undefined : e.options)?.data ?? {},
          gotrue_meta_security: {
            captcha_token: (e == null ? undefined : e.options)?.captchaToken
          }
        },
        xform: Jt
      });
      const {
        data: i,
        error: a
      } = n;
      if (a || !i) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: a
        });
      }
      const o = i.session;
      const l = i.user;
      if (i.session) {
        await this._saveSession(i.session);
        await this._notifyAllSubscribers("SIGNED_IN", o);
      }
      return this._returnResult({
        data: {
          user: l,
          session: o
        },
        error: null
      });
    } catch (n) {
      if (tt(n)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: n
        });
      }
      throw n;
    }
  }
  async signUp(e) {
    try {
      let n;
      if ("email" in e) {
        const {
          email: r,
          password: s,
          options: i
        } = e;
        let a = null;
        let o = null;
        if (this.flowType === "pkce") {
          [a, o] = await Nt(this.storage, this.storageKey);
        }
        n = await Ft(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: i == null ? undefined : i.emailRedirectTo,
          body: {
            email: r,
            password: s,
            data: (i == null ? undefined : i.data) ?? {},
            gotrue_meta_security: {
              captcha_token: i == null ? undefined : i.captchaToken
            },
            code_challenge: a,
            code_challenge_method: o
          },
          xform: Jt
        });
      } else {
        if (!("phone" in e)) {
          throw new lt("You must provide either an email or phone number and a password");
        }
        {
          const {
            phone: t,
            password: i,
            options: a
          } = e;
          n = await Ft(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            body: {
              phone: t,
              password: i,
              data: (a == null ? undefined : a.data) ?? {},
              channel: (a == null ? undefined : a.channel) ?? "sms",
              gotrue_meta_security: {
                captcha_token: a == null ? undefined : a.captchaToken
              }
            },
            xform: Jt
          });
        }
      }
      const {
        data: i,
        error: a
      } = n;
      if (a || !i) {
        await Pt(this.storage, `${this.storageKey}-code-verifier`);
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: a
        });
      }
      const o = i.session;
      const l = i.user;
      if (i.session) {
        await this._saveSession(i.session);
        await this._notifyAllSubscribers("SIGNED_IN", o);
      }
      return this._returnResult({
        data: {
          user: l,
          session: o
        },
        error: null
      });
    } catch (n) {
      await Pt(this.storage, `${this.storageKey}-code-verifier`);
      if (tt(n)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: n
        });
      }
      throw n;
    }
  }
  async signInWithPassword(e) {
    try {
      let t;
      if ("email" in e) {
        const {
          email: r,
          password: s,
          options: n
        } = e;
        t = await Ft(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: r,
            password: s,
            gotrue_meta_security: {
              captcha_token: n == null ? undefined : n.captchaToken
            }
          },
          xform: Ht
        });
      } else {
        if (!("phone" in e)) {
          throw new lt("You must provide either an email or phone number and a password");
        }
        {
          const {
            phone: r,
            password: s,
            options: n
          } = e;
          t = await Ft(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
            headers: this.headers,
            body: {
              phone: r,
              password: s,
              gotrue_meta_security: {
                captcha_token: n == null ? undefined : n.captchaToken
              }
            },
            xform: Ht
          });
        }
      }
      const {
        data: r,
        error: s
      } = t;
      if (s) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: s
        });
      }
      if (!r || !r.session || !r.user) {
        const e = new ot();
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: e
        });
      }
      if (r.session) {
        await this._saveSession(r.session);
        await this._notifyAllSubscribers("SIGNED_IN", r.session);
      }
      return this._returnResult({
        data: Object.assign({
          user: r.user,
          session: r.session
        }, r.weak_password ? {
          weakPassword: r.weak_password
        } : null),
        error: s
      });
    } catch (t) {
      if (tt(t)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: t
        });
      }
      throw t;
    }
  }
  async signInWithOAuth(e) {
    return await this._handleProviderSignIn(e.provider, {
      redirectTo: e.options?.redirectTo,
      scopes: e.options?.scopes,
      queryParams: e.options?.queryParams,
      skipBrowserRedirect: e.options?.skipBrowserRedirect
    });
  }
  async exchangeCodeForSession(e) {
    await this.initializePromise;
    return this._acquireLock(this.lockAcquireTimeout, async () => this._exchangeCodeForSession(e));
  }
  async signInWithWeb3(e) {
    const {
      chain: t
    } = e;
    switch (t) {
      case "ethereum":
        return await this.signInWithEthereum(e);
      case "solana":
        return await this.signInWithSolana(e);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${t}"`);
    }
  }
  async signInWithEthereum(e) {
    let d;
    let p;
    if ("message" in e) {
      d = e.message;
      p = e.signature;
    } else {
      const {
        chain: u,
        wallet: h,
        statement: f,
        options: g
      } = e;
      let y;
      if (Et()) {
        if (typeof h == "object") {
          y = h;
        } else {
          const e = window;
          if (!("ethereum" in e) || typeof e.ethereum != "object" || !("request" in e.ethereum) || typeof e.ethereum.request != "function") {
            throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.");
          }
          y = e.ethereum;
        }
      } else {
        if (typeof h != "object" || !(g == null ? undefined : g.url)) {
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        }
        y = h;
      }
      const m = new URL((g == null ? undefined : g.url) ?? window.location.href);
      const w = await y.request({
        method: "eth_requestAccounts"
      }).then(e => e).catch(() => {
        throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid");
      });
      if (!w || w.length === 0) {
        throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
      }
      const v = nr(w[0]);
      let b = (g == null ? undefined : g.signInWithEthereum)?.chainId;
      if (!b) {
        const e = await y.request({
          method: "eth_chainId"
        });
        b = parseInt(e, 16);
      }
      d = function (e) {
        var t;
        const {
          chainId: r,
          domain: s,
          expirationTime: n,
          issuedAt: i = new Date(),
          nonce: a,
          notBefore: o,
          requestId: l,
          resources: c,
          scheme: u,
          uri: h,
          version: d
        } = e;
        if (!Number.isInteger(r)) {
          throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`);
        }
        if (!s) {
          throw new Error("@supabase/auth-js: Invalid SIWE message field \"domain\". Domain must be provided.");
        }
        if (a && a.length < 8) {
          throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);
        }
        if (!h) {
          throw new Error("@supabase/auth-js: Invalid SIWE message field \"uri\". URI must be provided.");
        }
        if (d !== "1") {
          throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);
        }
        if ((t = e.statement) === null || t === undefined ? undefined : t.includes("\n")) {
          throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`);
        }
        const p = `${u ? `${u}://${s}` : s} wants you to sign in with your Ethereum account:\n${nr(e.address)}\n\n${e.statement ? `${e.statement}\n` : ""}`;
        let f = `URI: ${h}\nVersion: ${d}\nChain ID: ${r}${a ? `\nNonce: ${a}` : ""}\nIssued At: ${i.toISOString()}`;
        if (n) {
          f += `\nExpiration Time: ${n.toISOString()}`;
        }
        if (o) {
          f += `\nNot Before: ${o.toISOString()}`;
        }
        if (l) {
          f += `\nRequest ID: ${l}`;
        }
        if (c) {
          let e = "\nResources:";
          for (const t of c) {
            if (!t || typeof t != "string") {
              throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${t}`);
            }
            e += `\n- ${t}`;
          }
          f += e;
        }
        return `${p}\n${f}`;
      }({
        domain: m.host,
        address: v,
        statement: f,
        uri: m.href,
        version: "1",
        chainId: b,
        nonce: (g == null ? undefined : g.signInWithEthereum)?.nonce,
        issuedAt: (g == null ? undefined : g.signInWithEthereum)?.issuedAt ?? new Date(),
        expirationTime: (g == null ? undefined : g.signInWithEthereum)?.expirationTime,
        notBefore: (g == null ? undefined : g.signInWithEthereum)?.notBefore,
        requestId: (g == null ? undefined : g.signInWithEthereum)?.requestId,
        resources: (g == null ? undefined : g.signInWithEthereum)?.resources
      });
      p = await y.request({
        method: "personal_sign",
        params: [ir(d), v]
      });
    }
    try {
      const {
        data: t,
        error: r
      } = await Ft(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({
          chain: "ethereum",
          message: d,
          signature: p
        }, e.options?.captchaToken ? {
          gotrue_meta_security: {
            captcha_token: e.options?.captchaToken
          }
        } : null),
        xform: Jt
      });
      if (r) {
        throw r;
      }
      if (!t || !t.session || !t.user) {
        const e = new ot();
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: e
        });
      }
      if (t.session) {
        await this._saveSession(t.session);
        await this._notifyAllSubscribers("SIGNED_IN", t.session);
      }
      return this._returnResult({
        data: Object.assign({}, t),
        error: r
      });
    } catch (f) {
      if (tt(f)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: f
        });
      }
      throw f;
    }
  }
  async signInWithSolana(e) {
    let p;
    let f;
    if ("message" in e) {
      p = e.message;
      f = e.signature;
    } else {
      const {
        chain: h,
        wallet: d,
        statement: g,
        options: y
      } = e;
      let m;
      if (Et()) {
        if (typeof d == "object") {
          m = d;
        } else {
          const e = window;
          if (!("solana" in e) || typeof e.solana != "object" || (!("signIn" in e.solana) || typeof e.solana.signIn != "function") && (!("signMessage" in e.solana) || typeof e.solana.signMessage != "function")) {
            throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
          }
          m = e.solana;
        }
      } else {
        if (typeof d != "object" || !(y == null ? undefined : y.url)) {
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        }
        m = d;
      }
      const w = new URL((y == null ? undefined : y.url) ?? window.location.href);
      if ("signIn" in m && m.signIn) {
        const e = await m.signIn(Object.assign(Object.assign(Object.assign({
          issuedAt: new Date().toISOString()
        }, y == null ? undefined : y.signInWithSolana), {
          version: "1",
          domain: w.host,
          uri: w.href
        }), g ? {
          statement: g
        } : null));
        let t;
        if (Array.isArray(e) && e[0] && typeof e[0] == "object") {
          t = e[0];
        } else {
          if (!e || typeof e != "object" || !("signedMessage" in e) || !("signature" in e)) {
            throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
          }
          t = e;
        }
        if (!("signedMessage" in t) || !("signature" in t) || typeof t.signedMessage != "string" && !(t.signedMessage instanceof Uint8Array) || !(t.signature instanceof Uint8Array)) {
          throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
        }
        p = typeof t.signedMessage == "string" ? t.signedMessage : new TextDecoder().decode(t.signedMessage);
        f = t.signature;
      } else {
        if (!("signMessage" in m) || typeof m.signMessage != "function" || !("publicKey" in m) || typeof m != "object" || !m.publicKey || !("toBase58" in m.publicKey) || typeof m.publicKey.toBase58 != "function") {
          throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
        }
        p = [`${w.host} wants you to sign in with your Solana account:`, m.publicKey.toBase58(), ...(g ? ["", g, ""] : [""]), "Version: 1", `URI: ${w.href}`, `Issued At: ${(y == null ? undefined : y.signInWithSolana)?.issuedAt ?? new Date().toISOString()}`, ...((y == null ? undefined : y.signInWithSolana)?.notBefore ? [`Not Before: ${y.signInWithSolana.notBefore}`] : []), ...((y == null ? undefined : y.signInWithSolana)?.expirationTime ? [`Expiration Time: ${y.signInWithSolana.expirationTime}`] : []), ...((y == null ? undefined : y.signInWithSolana)?.chainId ? [`Chain ID: ${y.signInWithSolana.chainId}`] : []), ...((y == null ? undefined : y.signInWithSolana)?.nonce ? [`Nonce: ${y.signInWithSolana.nonce}`] : []), ...((y == null ? undefined : y.signInWithSolana)?.requestId ? [`Request ID: ${y.signInWithSolana.requestId}`] : []), ...((y == null ? undefined : y.signInWithSolana)?.resources?.length ? ["Resources", ...y.signInWithSolana.resources.map(e => `- ${e}`)] : [])].join("\n");
        const e = await m.signMessage(new TextEncoder().encode(p), "utf8");
        if (!e || !(e instanceof Uint8Array)) {
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        }
        f = e;
      }
    }
    try {
      const {
        data: t,
        error: r
      } = await Ft(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({
          chain: "solana",
          message: p,
          signature: Tt(f)
        }, e.options?.captchaToken ? {
          gotrue_meta_security: {
            captcha_token: e.options?.captchaToken
          }
        } : null),
        xform: Jt
      });
      if (r) {
        throw r;
      }
      if (!t || !t.session || !t.user) {
        const e = new ot();
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: e
        });
      }
      if (t.session) {
        await this._saveSession(t.session);
        await this._notifyAllSubscribers("SIGNED_IN", t.session);
      }
      return this._returnResult({
        data: Object.assign({}, t),
        error: r
      });
    } catch (g) {
      if (tt(g)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: g
        });
      }
      throw g;
    }
  }
  async _exchangeCodeForSession(e) {
    const t = await $t(this.storage, `${this.storageKey}-code-verifier`);
    const [r, s] = (t ?? "").split("/");
    try {
      if (!r && this.flowType === "pkce") {
        throw new ht();
      }
      const {
        data: t,
        error: n
      } = await Ft(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: e,
          code_verifier: r
        },
        xform: Jt
      });
      await Pt(this.storage, `${this.storageKey}-code-verifier`);
      if (n) {
        throw n;
      }
      if (!t || !t.session || !t.user) {
        const e = new ot();
        return this._returnResult({
          data: {
            user: null,
            session: null,
            redirectType: null
          },
          error: e
        });
      }
      if (t.session) {
        await this._saveSession(t.session);
        await this._notifyAllSubscribers("SIGNED_IN", t.session);
      }
      return this._returnResult({
        data: Object.assign(Object.assign({}, t), {
          redirectType: s ?? null
        }),
        error: n
      });
    } catch (n) {
      await Pt(this.storage, `${this.storageKey}-code-verifier`);
      if (tt(n)) {
        return this._returnResult({
          data: {
            user: null,
            session: null,
            redirectType: null
          },
          error: n
        });
      }
      throw n;
    }
  }
  async signInWithIdToken(e) {
    try {
      const {
        options: t,
        provider: r,
        token: s,
        access_token: n,
        nonce: i
      } = e;
      const a = await Ft(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: r,
          id_token: s,
          access_token: n,
          nonce: i,
          gotrue_meta_security: {
            captcha_token: t == null ? undefined : t.captchaToken
          }
        },
        xform: Jt
      });
      const {
        data: o,
        error: l
      } = a;
      if (l) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: l
        });
      }
      if (!o || !o.session || !o.user) {
        const e = new ot();
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: e
        });
      }
      if (o.session) {
        await this._saveSession(o.session);
        await this._notifyAllSubscribers("SIGNED_IN", o.session);
      }
      return this._returnResult({
        data: o,
        error: l
      });
    } catch (t) {
      if (tt(t)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: t
        });
      }
      throw t;
    }
  }
  async signInWithOtp(e) {
    var r;
    var n;
    try {
      if ("email" in e) {
        const {
          email: s,
          options: n
        } = e;
        let i = null;
        let a = null;
        if (this.flowType === "pkce") {
          [i, a] = await Nt(this.storage, this.storageKey);
        }
        const {
          error: o
        } = await Ft(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: s,
            data: (n == null ? undefined : n.data) ?? {},
            create_user: (r = n == null ? undefined : n.shouldCreateUser) === null || r === undefined || r,
            gotrue_meta_security: {
              captcha_token: n == null ? undefined : n.captchaToken
            },
            code_challenge: i,
            code_challenge_method: a
          },
          redirectTo: n == null ? undefined : n.emailRedirectTo
        });
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: o
        });
      }
      if ("phone" in e) {
        const {
          phone: t,
          options: r
        } = e;
        const {
          data: a,
          error: o
        } = await Ft(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: t,
            data: (r == null ? undefined : r.data) ?? {},
            create_user: (n = r == null ? undefined : r.shouldCreateUser) === null || n === undefined || n,
            gotrue_meta_security: {
              captcha_token: r == null ? undefined : r.captchaToken
            },
            channel: (r == null ? undefined : r.channel) ?? "sms"
          }
        });
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: a == null ? undefined : a.message_id
          },
          error: o
        });
      }
      throw new lt("You must provide either an email or phone number.");
    } catch (a) {
      await Pt(this.storage, `${this.storageKey}-code-verifier`);
      if (tt(a)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: a
        });
      }
      throw a;
    }
  }
  async verifyOtp(e) {
    try {
      let s;
      let n;
      if ("options" in e) {
        s = e.options?.redirectTo;
        n = e.options?.captchaToken;
      }
      const {
        data: i,
        error: a
      } = await Ft(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, e), {
          gotrue_meta_security: {
            captcha_token: n
          }
        }),
        redirectTo: s,
        xform: Jt
      });
      if (a) {
        throw a;
      }
      if (!i) {
        throw new Error("An error occurred on token verification.");
      }
      const o = i.session;
      const l = i.user;
      if (o == null ? undefined : o.access_token) {
        await this._saveSession(o);
        await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", o);
      }
      return this._returnResult({
        data: {
          user: l,
          session: o
        },
        error: null
      });
    } catch (s) {
      if (tt(s)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: s
        });
      }
      throw s;
    }
  }
  async signInWithSSO(e) {
    try {
      let a = null;
      let o = null;
      if (this.flowType === "pkce") {
        [a, o] = await Nt(this.storage, this.storageKey);
      }
      const l = await Ft(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? {
          provider_id: e.providerId
        } : null), "domain" in e ? {
          domain: e.domain
        } : null), {
          redirect_to: e.options?.redirectTo ?? undefined
        }), (e == null ? undefined : e.options)?.captchaToken ? {
          gotrue_meta_security: {
            captcha_token: e.options.captchaToken
          }
        } : null), {
          skip_http_redirect: true,
          code_challenge: a,
          code_challenge_method: o
        }),
        headers: this.headers,
        xform: Gt
      });
      if (l.data?.url && Et() && !e.options?.skipBrowserRedirect) {
        window.location.assign(l.data.url);
      }
      return this._returnResult(l);
    } catch (a) {
      await Pt(this.storage, `${this.storageKey}-code-verifier`);
      if (tt(a)) {
        return this._returnResult({
          data: null,
          error: a
        });
      }
      throw a;
    }
  }
  async reauthenticate() {
    await this.initializePromise;
    return await this._acquireLock(this.lockAcquireTimeout, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async e => {
        const {
          data: {
            session: t
          },
          error: r
        } = e;
        if (r) {
          throw r;
        }
        if (!t) {
          throw new it();
        }
        const {
          error: s
        } = await Ft(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: t.access_token
        });
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: s
        });
      });
    } catch (e) {
      if (tt(e)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: e
        });
      }
      throw e;
    }
  }
  async resend(e) {
    try {
      const t = `${this.url}/resend`;
      if ("email" in e) {
        const {
          email: r,
          type: s,
          options: n
        } = e;
        const {
          error: i
        } = await Ft(this.fetch, "POST", t, {
          headers: this.headers,
          body: {
            email: r,
            type: s,
            gotrue_meta_security: {
              captcha_token: n == null ? undefined : n.captchaToken
            }
          },
          redirectTo: n == null ? undefined : n.emailRedirectTo
        });
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: i
        });
      }
      if ("phone" in e) {
        const {
          phone: r,
          type: s,
          options: n
        } = e;
        const {
          data: i,
          error: a
        } = await Ft(this.fetch, "POST", t, {
          headers: this.headers,
          body: {
            phone: r,
            type: s,
            gotrue_meta_security: {
              captcha_token: n == null ? undefined : n.captchaToken
            }
          }
        });
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: i == null ? undefined : i.message_id
          },
          error: a
        });
      }
      throw new lt("You must provide either an email or phone number and a type");
    } catch (t) {
      if (tt(t)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: t
        });
      }
      throw t;
    }
  }
  async getSession() {
    await this.initializePromise;
    return await this._acquireLock(this.lockAcquireTimeout, async () => this._useSession(async e => e));
  }
  async _acquireLock(e, t) {
    this._debug("#_acquireLock", "begin", e);
    try {
      if (this.lockAcquired) {
        const e = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve();
        const r = (async () => {
          await e;
          return await t();
        })();
        this.pendingInLock.push((async () => {
          try {
            await r;
          } catch (e) {}
        })());
        return r;
      }
      return await this.lock(`lock:${this.storageKey}`, e, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = true;
          const e = t();
          this.pendingInLock.push((async () => {
            try {
              await e;
            } catch (t) {}
          })());
          await e;
          while (this.pendingInLock.length) {
            const e = [...this.pendingInLock];
            await Promise.all(e);
            this.pendingInLock.splice(0, e.length);
          }
          return await e;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey);
          this.lockAcquired = false;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  async _useSession(e) {
    this._debug("#_useSession", "begin");
    try {
      const t = await this.__loadSession();
      return await e(t);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  async __loadSession() {
    this._debug("#__loadSession()", "begin");
    if (!this.lockAcquired) {
      this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    }
    try {
      let e = null;
      const t = await $t(this.storage, this.storageKey);
      this._debug("#getSession()", "session from storage", t);
      if (t !== null) {
        if (this._isValidSession(t)) {
          e = t;
        } else {
          this._debug("#getSession()", "session from storage is not valid");
          await this._removeSession();
        }
      }
      if (!e) {
        return {
          data: {
            session: null
          },
          error: null
        };
      }
      const r = !!e.expires_at && e.expires_at * 1000 - Date.now() < 90000;
      this._debug("#__loadSession()", `session has${r ? "" : " not"} expired`, "expires_at", e.expires_at);
      if (!r) {
        if (this.userStorage) {
          const t = await $t(this.userStorage, this.storageKey + "-user");
          if (t == null ? undefined : t.user) {
            e.user = t.user;
          } else {
            e.user = Bt();
          }
        }
        if (this.storage.isServer && e.user && !e.user.__isUserNotAvailableProxy) {
          const t = {
            value: this.suppressGetSessionWarning
          };
          e.user = function (e, t) {
            return new Proxy(e, {
              get: (e, r, s) => {
                if (r === "__isInsecureUserWarningProxy") {
                  return true;
                }
                if (typeof r == "symbol") {
                  const t = r.toString();
                  if (t === "Symbol(Symbol.toPrimitive)" || t === "Symbol(Symbol.toStringTag)" || t === "Symbol(util.inspect.custom)" || t === "Symbol(nodejs.util.inspect.custom)") {
                    return Reflect.get(e, r, s);
                  }
                }
                if (!t.value && typeof r == "string") {
                  console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.");
                  t.value = true;
                }
                return Reflect.get(e, r, s);
              }
            });
          }(e.user, t);
          if (t.value) {
            this.suppressGetSessionWarning = true;
          }
        }
        return {
          data: {
            session: e
          },
          error: null
        };
      }
      const {
        data: s,
        error: n
      } = await this._callRefreshToken(e.refresh_token);
      if (n) {
        return this._returnResult({
          data: {
            session: null
          },
          error: n
        });
      } else {
        return this._returnResult({
          data: {
            session: s
          },
          error: null
        });
      }
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  async getUser(e) {
    if (e) {
      return await this._getUser(e);
    }
    await this.initializePromise;
    const t = await this._acquireLock(this.lockAcquireTimeout, async () => await this._getUser());
    if (t.data.user) {
      this.suppressGetSessionWarning = true;
    }
    return t;
  }
  async _getUser(e) {
    try {
      if (e) {
        return await Ft(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: e,
          xform: Vt
        });
      } else {
        return await this._useSession(async e => {
          const {
            data: n,
            error: i
          } = e;
          if (i) {
            throw i;
          }
          if (n.session?.access_token || this.hasCustomAuthorizationHeader) {
            return await Ft(this.fetch, "GET", `${this.url}/user`, {
              headers: this.headers,
              jwt: n.session?.access_token ?? undefined,
              xform: Vt
            });
          } else {
            return {
              data: {
                user: null
              },
              error: new it()
            };
          }
        });
      }
    } catch (t) {
      if (tt(t)) {
        if (at(t)) {
          await this._removeSession();
          await Pt(this.storage, `${this.storageKey}-code-verifier`);
        }
        return this._returnResult({
          data: {
            user: null
          },
          error: t
        });
      }
      throw t;
    }
  }
  async updateUser(e, t = {}) {
    await this.initializePromise;
    return await this._acquireLock(this.lockAcquireTimeout, async () => await this._updateUser(e, t));
  }
  async _updateUser(e, t = {}) {
    try {
      return await this._useSession(async r => {
        const {
          data: s,
          error: n
        } = r;
        if (n) {
          throw n;
        }
        if (!s.session) {
          throw new it();
        }
        const i = s.session;
        let a = null;
        let o = null;
        if (this.flowType === "pkce" && e.email != null) {
          [a, o] = await Nt(this.storage, this.storageKey);
        }
        const {
          data: l,
          error: c
        } = await Ft(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: t == null ? undefined : t.emailRedirectTo,
          body: Object.assign(Object.assign({}, e), {
            code_challenge: a,
            code_challenge_method: o
          }),
          jwt: i.access_token,
          xform: Vt
        });
        if (c) {
          throw c;
        }
        i.user = l.user;
        await this._saveSession(i);
        await this._notifyAllSubscribers("USER_UPDATED", i);
        return this._returnResult({
          data: {
            user: i.user
          },
          error: null
        });
      });
    } catch (r) {
      await Pt(this.storage, `${this.storageKey}-code-verifier`);
      if (tt(r)) {
        return this._returnResult({
          data: {
            user: null
          },
          error: r
        });
      }
      throw r;
    }
  }
  async setSession(e) {
    await this.initializePromise;
    return await this._acquireLock(this.lockAcquireTimeout, async () => await this._setSession(e));
  }
  async _setSession(e) {
    try {
      if (!e.access_token || !e.refresh_token) {
        throw new it();
      }
      const t = Date.now() / 1000;
      let r = t;
      let s = true;
      let n = null;
      const {
        payload: i
      } = Ct(e.access_token);
      if (i.exp) {
        r = i.exp;
        s = r <= t;
      }
      if (s) {
        const {
          data: t,
          error: r
        } = await this._callRefreshToken(e.refresh_token);
        if (r) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error: r
          });
        }
        if (!t) {
          return {
            data: {
              user: null,
              session: null
            },
            error: null
          };
        }
        n = t;
      } else {
        const {
          data: s,
          error: i
        } = await this._getUser(e.access_token);
        if (i) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error: i
          });
        }
        n = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: s.user,
          token_type: "bearer",
          expires_in: r - t,
          expires_at: r
        };
        await this._saveSession(n);
        await this._notifyAllSubscribers("SIGNED_IN", n);
      }
      return this._returnResult({
        data: {
          user: n.user,
          session: n
        },
        error: null
      });
    } catch (t) {
      if (tt(t)) {
        return this._returnResult({
          data: {
            session: null,
            user: null
          },
          error: t
        });
      }
      throw t;
    }
  }
  async refreshSession(e) {
    await this.initializePromise;
    return await this._acquireLock(this.lockAcquireTimeout, async () => await this._refreshSession(e));
  }
  async _refreshSession(e) {
    try {
      return await this._useSession(async t => {
        if (!e) {
          const {
            data: s,
            error: n
          } = t;
          if (n) {
            throw n;
          }
          e = s.session ?? undefined;
        }
        if (!(e == null ? undefined : e.refresh_token)) {
          throw new it();
        }
        const {
          data: s,
          error: n
        } = await this._callRefreshToken(e.refresh_token);
        if (n) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error: n
          });
        } else if (s) {
          return this._returnResult({
            data: {
              user: s.user,
              session: s
            },
            error: null
          });
        } else {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error: null
          });
        }
      });
    } catch (t) {
      if (tt(t)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: t
        });
      }
      throw t;
    }
  }
  async _getSessionFromURL(e, t) {
    try {
      if (!Et()) {
        throw new ct("No browser detected.");
      }
      if (e.error || e.error_description || e.error_code) {
        throw new ct(e.error_description || "Error in URL with unspecified error_description", {
          error: e.error || "unspecified_error",
          code: e.error_code || "unspecified_code"
        });
      }
      switch (t) {
        case "implicit":
          if (this.flowType === "pkce") {
            throw new ut("Not a valid PKCE flow url.");
          }
          break;
        case "pkce":
          if (this.flowType === "implicit") {
            throw new ct("Not a valid implicit grant flow url.");
          }
      }
      if (t === "pkce") {
        this._debug("#_initialize()", "begin", "is PKCE flow", true);
        if (!e.code) {
          throw new ut("No code detected.");
        }
        const {
          data: t,
          error: r
        } = await this._exchangeCodeForSession(e.code);
        if (r) {
          throw r;
        }
        const s = new URL(window.location.href);
        s.searchParams.delete("code");
        window.history.replaceState(window.history.state, "", s.toString());
        return {
          data: {
            session: t.session,
            redirectType: null
          },
          error: null
        };
      }
      const {
        provider_token: r,
        provider_refresh_token: s,
        access_token: n,
        refresh_token: i,
        expires_in: a,
        expires_at: o,
        token_type: l
      } = e;
      if (!n || !a || !i || !l) {
        throw new ct("No session defined in URL");
      }
      const c = Math.round(Date.now() / 1000);
      const u = parseInt(a);
      let h = c + u;
      if (o) {
        h = parseInt(o);
      }
      const d = h - c;
      if (d * 1000 <= Ge) {
        console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${d}s, should have been closer to ${u}s`);
      }
      const p = h - u;
      if (c - p >= 120) {
        console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", p, h, c);
      } else if (c - p < 0) {
        console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", p, h, c);
      }
      const {
        data: f,
        error: g
      } = await this._getUser(n);
      if (g) {
        throw g;
      }
      const y = {
        provider_token: r,
        provider_refresh_token: s,
        access_token: n,
        expires_in: u,
        expires_at: h,
        refresh_token: i,
        token_type: l,
        user: f.user
      };
      window.location.hash = "";
      this._debug("#_getSessionFromURL()", "clearing window.location.hash");
      return this._returnResult({
        data: {
          session: y,
          redirectType: e.type
        },
        error: null
      });
    } catch (r) {
      if (tt(r)) {
        return this._returnResult({
          data: {
            session: null,
            redirectType: null
          },
          error: r
        });
      }
      throw r;
    }
  }
  _isImplicitGrantCallback(e) {
    if (typeof this.detectSessionInUrl == "function") {
      return this.detectSessionInUrl(new URL(window.location.href), e);
    } else {
      return Boolean(e.access_token || e.error_description);
    }
  }
  async _isPKCECallback(e) {
    const t = await $t(this.storage, `${this.storageKey}-code-verifier`);
    return !!e.code && !!t;
  }
  async signOut(e = {
    scope: "global"
  }) {
    await this.initializePromise;
    return await this._acquireLock(this.lockAcquireTimeout, async () => await this._signOut(e));
  }
  async _signOut({
    scope: e
  } = {
    scope: "global"
  }) {
    return await this._useSession(async t => {
      const {
        data: s,
        error: n
      } = t;
      if (n && !at(n)) {
        return this._returnResult({
          error: n
        });
      }
      const i = s.session?.access_token;
      if (i) {
        const {
          error: t
        } = await this.admin.signOut(i, e);
        if (t && (!function (e) {
          return tt(e) && e.name === "AuthApiError";
        }(t) || t.status !== 404 && t.status !== 401 && t.status !== 403) && !at(t)) {
          return this._returnResult({
            error: t
          });
        }
      }
      if (e !== "others") {
        await this._removeSession();
        await Pt(this.storage, `${this.storageKey}-code-verifier`);
      }
      return this._returnResult({
        error: null
      });
    });
  }
  onAuthStateChange(e) {
    const t = Symbol("auth-callback");
    const r = {
      id: t,
      callback: e,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", t);
        this.stateChangeEmitters.delete(t);
      }
    };
    this._debug("#onAuthStateChange()", "registered callback with id", t);
    this.stateChangeEmitters.set(t, r);
    (async () => {
      await this.initializePromise;
      await this._acquireLock(this.lockAcquireTimeout, async () => {
        this._emitInitialSession(t);
      });
    })();
    return {
      data: {
        subscription: r
      }
    };
  }
  async _emitInitialSession(e) {
    return await this._useSession(async t => {
      var r;
      var s;
      try {
        const {
          data: {
            session: s
          },
          error: n
        } = t;
        if (n) {
          throw n;
        }
        await ((r = this.stateChangeEmitters.get(e)) === null || r === undefined ? undefined : r.callback("INITIAL_SESSION", s));
        this._debug("INITIAL_SESSION", "callback id", e, "session", s);
      } catch (n) {
        await ((s = this.stateChangeEmitters.get(e)) === null || s === undefined ? undefined : s.callback("INITIAL_SESSION", null));
        this._debug("INITIAL_SESSION", "callback id", e, "error", n);
        console.error(n);
      }
    });
  }
  async resetPasswordForEmail(e, t = {}) {
    let r = null;
    let s = null;
    if (this.flowType === "pkce") {
      [r, s] = await Nt(this.storage, this.storageKey, true);
    }
    try {
      return await Ft(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: r,
          code_challenge_method: s,
          gotrue_meta_security: {
            captcha_token: t.captchaToken
          }
        },
        headers: this.headers,
        redirectTo: t.redirectTo
      });
    } catch (n) {
      await Pt(this.storage, `${this.storageKey}-code-verifier`);
      if (tt(n)) {
        return this._returnResult({
          data: null,
          error: n
        });
      }
      throw n;
    }
  }
  async getUserIdentities() {
    try {
      const {
        data: t,
        error: r
      } = await this.getUser();
      if (r) {
        throw r;
      }
      return this._returnResult({
        data: {
          identities: t.user.identities ?? []
        },
        error: null
      });
    } catch (t) {
      if (tt(t)) {
        return this._returnResult({
          data: null,
          error: t
        });
      }
      throw t;
    }
  }
  async linkIdentity(e) {
    if ("token" in e) {
      return this.linkIdentityIdToken(e);
    } else {
      return this.linkIdentityOAuth(e);
    }
  }
  async linkIdentityOAuth(e) {
    try {
      const {
        data: r,
        error: s
      } = await this._useSession(async t => {
        const {
          data: o,
          error: l
        } = t;
        if (l) {
          throw l;
        }
        const c = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
          redirectTo: e.options?.redirectTo,
          scopes: e.options?.scopes,
          queryParams: e.options?.queryParams,
          skipBrowserRedirect: true
        });
        return await Ft(this.fetch, "GET", c, {
          headers: this.headers,
          jwt: o.session?.access_token ?? undefined
        });
      });
      if (s) {
        throw s;
      }
      if (Et() && !e.options?.skipBrowserRedirect) {
        window.location.assign(r == null ? undefined : r.url);
      }
      return this._returnResult({
        data: {
          provider: e.provider,
          url: r == null ? undefined : r.url
        },
        error: null
      });
    } catch (r) {
      if (tt(r)) {
        return this._returnResult({
          data: {
            provider: e.provider,
            url: null
          },
          error: r
        });
      }
      throw r;
    }
  }
  async linkIdentityIdToken(e) {
    return await this._useSession(async t => {
      try {
        const {
          error: s,
          data: {
            session: n
          }
        } = t;
        if (s) {
          throw s;
        }
        const {
          options: i,
          provider: a,
          token: o,
          access_token: l,
          nonce: c
        } = e;
        const u = await Ft(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
          headers: this.headers,
          jwt: (n == null ? undefined : n.access_token) ?? undefined,
          body: {
            provider: a,
            id_token: o,
            access_token: l,
            nonce: c,
            link_identity: true,
            gotrue_meta_security: {
              captcha_token: i == null ? undefined : i.captchaToken
            }
          },
          xform: Jt
        });
        const {
          data: h,
          error: d
        } = u;
        if (d) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error: d
          });
        } else if (h && h.session && h.user) {
          if (h.session) {
            await this._saveSession(h.session);
            await this._notifyAllSubscribers("USER_UPDATED", h.session);
          }
          return this._returnResult({
            data: h,
            error: d
          });
        } else {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error: new ot()
          });
        }
      } catch (s) {
        await Pt(this.storage, `${this.storageKey}-code-verifier`);
        if (tt(s)) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error: s
          });
        }
        throw s;
      }
    });
  }
  async unlinkIdentity(e) {
    try {
      return await this._useSession(async t => {
        const {
          data: n,
          error: i
        } = t;
        if (i) {
          throw i;
        }
        return await Ft(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
          headers: this.headers,
          jwt: n.session?.access_token ?? undefined
        });
      });
    } catch (t) {
      if (tt(t)) {
        return this._returnResult({
          data: null,
          error: t
        });
      }
      throw t;
    }
  }
  async _refreshAccessToken(e) {
    const t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
    this._debug(t, "begin");
    try {
      const n = Date.now();
      return await (r = async r => {
        if (r > 0) {
          await async function (e) {
            return await new Promise(t => {
              setTimeout(() => t(null), e);
            });
          }(Math.pow(2, r - 1) * 200);
        }
        this._debug(t, "refreshing attempt", r);
        return await Ft(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
          body: {
            refresh_token: e
          },
          headers: this.headers,
          xform: Jt
        });
      }, s = (e, t) => {
        const r = Math.pow(2, e) * 200;
        return t && pt(t) && Date.now() + r - n < Ge;
      }, new Promise((e, t) => {
        (async () => {
          for (let i = 0; i < Infinity; i++) {
            try {
              const t = await r(i);
              if (!s(i, null)) {
                e(t);
                return;
              }
            } catch (n) {
              if (!s(i, n)) {
                t(n);
                return;
              }
            }
          }
        })();
      }));
    } catch (n) {
      this._debug(t, "error", n);
      if (tt(n)) {
        return this._returnResult({
          data: {
            session: null,
            user: null
          },
          error: n
        });
      }
      throw n;
    } finally {
      this._debug(t, "end");
    }
    var r;
    var s;
  }
  _isValidSession(e) {
    return typeof e == "object" && e !== null && "access_token" in e && "refresh_token" in e && "expires_at" in e;
  }
  async _handleProviderSignIn(e, t) {
    const r = await this._getUrlForProvider(`${this.url}/authorize`, e, {
      redirectTo: t.redirectTo,
      scopes: t.scopes,
      queryParams: t.queryParams
    });
    this._debug("#_handleProviderSignIn()", "provider", e, "options", t, "url", r);
    if (Et() && !t.skipBrowserRedirect) {
      window.location.assign(r);
    }
    return {
      data: {
        provider: e,
        url: r
      },
      error: null
    };
  }
  async _recoverAndRefresh() {
    const r = "#_recoverAndRefresh()";
    this._debug(r, "begin");
    try {
      const n = await $t(this.storage, this.storageKey);
      if (n && this.userStorage) {
        let t = await $t(this.userStorage, this.storageKey + "-user");
        if (!this.storage.isServer && !!Object.is(this.storage, this.userStorage) && !t) {
          t = {
            user: n.user
          };
          await jt(this.userStorage, this.storageKey + "-user", t);
        }
        n.user = (t == null ? undefined : t.user) ?? Bt();
      } else if (n && !n.user && !n.user) {
        const e = await $t(this.storage, this.storageKey + "-user");
        if (e && (e == null ? undefined : e.user)) {
          n.user = e.user;
          await Pt(this.storage, this.storageKey + "-user");
          await jt(this.storage, this.storageKey, n);
        } else {
          n.user = Bt();
        }
      }
      this._debug(r, "session from storage", n);
      if (!this._isValidSession(n)) {
        this._debug(r, "session is not valid");
        if (n !== null) {
          await this._removeSession();
        }
        return;
      }
      const i = (n.expires_at ?? Infinity) * 1000 - Date.now() < 90000;
      this._debug(r, `session has${i ? "" : " not"} expired with margin of 90000s`);
      if (i) {
        if (this.autoRefreshToken && n.refresh_token) {
          const {
            error: e
          } = await this._callRefreshToken(n.refresh_token);
          if (e) {
            console.error(e);
            if (!pt(e)) {
              this._debug(r, "refresh failed with a non-retryable error, removing the session", e);
              await this._removeSession();
            }
          }
        }
      } else if (n.user && n.user.__isUserNotAvailableProxy === true) {
        try {
          const {
            data: e,
            error: t
          } = await this._getUser(n.access_token);
          if (!t && (e == null ? undefined : e.user)) {
            n.user = e.user;
            await this._saveSession(n);
            await this._notifyAllSubscribers("SIGNED_IN", n);
          } else {
            this._debug(r, "could not get user data, skipping SIGNED_IN notification");
          }
        } catch (s) {
          console.error("Error getting user data:", s);
          this._debug(r, "error getting user data, skipping SIGNED_IN notification", s);
        }
      } else {
        await this._notifyAllSubscribers("SIGNED_IN", n);
      }
    } catch (n) {
      this._debug(r, "error", n);
      console.error(n);
      return;
    } finally {
      this._debug(r, "end");
    }
  }
  async _callRefreshToken(e) {
    var t;
    var r;
    if (!e) {
      throw new it();
    }
    if (this.refreshingDeferred) {
      return this.refreshingDeferred.promise;
    }
    const s = `#_callRefreshToken(${e.substring(0, 5)}...)`;
    this._debug(s, "begin");
    try {
      this.refreshingDeferred = new It();
      const {
        data: t,
        error: r
      } = await this._refreshAccessToken(e);
      if (r) {
        throw r;
      }
      if (!t.session) {
        throw new it();
      }
      await this._saveSession(t.session);
      await this._notifyAllSubscribers("TOKEN_REFRESHED", t.session);
      const s = {
        data: t.session,
        error: null
      };
      this.refreshingDeferred.resolve(s);
      return s;
    } catch (n) {
      this._debug(s, "error", n);
      if (tt(n)) {
        const e = {
          data: null,
          error: n
        };
        if (!pt(n)) {
          await this._removeSession();
        }
        if ((t = this.refreshingDeferred) !== null && t !== undefined) {
          t.resolve(e);
        }
        return e;
      }
      if ((r = this.refreshingDeferred) !== null && r !== undefined) {
        r.reject(n);
      }
      throw n;
    } finally {
      this.refreshingDeferred = null;
      this._debug(s, "end");
    }
  }
  async _notifyAllSubscribers(e, t, r = true) {
    const s = `#_notifyAllSubscribers(${e})`;
    this._debug(s, "begin", t, `broadcast = ${r}`);
    try {
      if (this.broadcastChannel && r) {
        this.broadcastChannel.postMessage({
          event: e,
          session: t
        });
      }
      const s = [];
      const n = Array.from(this.stateChangeEmitters.values()).map(async r => {
        try {
          await r.callback(e, t);
        } catch (n) {
          s.push(n);
        }
      });
      await Promise.all(n);
      if (s.length > 0) {
        for (let e = 0; e < s.length; e += 1) {
          console.error(s[e]);
        }
        throw s[0];
      }
    } finally {
      this._debug(s, "end");
    }
  }
  async _saveSession(e) {
    this._debug("#_saveSession()", e);
    this.suppressGetSessionWarning = true;
    await Pt(this.storage, `${this.storageKey}-code-verifier`);
    const t = Object.assign({}, e);
    const r = t.user && t.user.__isUserNotAvailableProxy === true;
    if (this.userStorage) {
      if (!r && t.user) {
        await jt(this.userStorage, this.storageKey + "-user", {
          user: t.user
        });
      }
      const e = Object.assign({}, t);
      delete e.user;
      const s = qt(e);
      await jt(this.storage, this.storageKey, s);
    } else {
      const e = qt(t);
      await jt(this.storage, this.storageKey, e);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()");
    this.suppressGetSessionWarning = false;
    await Pt(this.storage, this.storageKey);
    await Pt(this.storage, this.storageKey + "-code-verifier");
    await Pt(this.storage, this.storageKey + "-user");
    if (this.userStorage) {
      await Pt(this.userStorage, this.storageKey + "-user");
    }
    await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const e = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      if (e && Et() && window?.removeEventListener) {
        window.removeEventListener("visibilitychange", e);
      }
    } catch (t) {
      console.error("removing visibilitychange callback failed", t);
    }
  }
  async _startAutoRefresh() {
    await this._stopAutoRefresh();
    this._debug("#_startAutoRefresh()");
    const e = setInterval(() => this._autoRefreshTokenTick(), Ge);
    this.autoRefreshTicker = e;
    if (e && typeof e == "object" && typeof e.unref == "function") {
      e.unref();
    } else if (typeof Deno != "undefined" && typeof Deno.unrefTimer == "function") {
      Deno.unrefTimer(e);
    }
    const t = setTimeout(async () => {
      await this.initializePromise;
      await this._autoRefreshTokenTick();
    }, 0);
    this.autoRefreshTickTimeout = t;
    if (t && typeof t == "object" && typeof t.unref == "function") {
      t.unref();
    } else if (typeof Deno != "undefined" && typeof Deno.unrefTimer == "function") {
      Deno.unrefTimer(t);
    }
  }
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const e = this.autoRefreshTicker;
    this.autoRefreshTicker = null;
    if (e) {
      clearInterval(e);
    }
    const t = this.autoRefreshTickTimeout;
    this.autoRefreshTickTimeout = null;
    if (t) {
      clearTimeout(t);
    }
  }
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback();
    await this._startAutoRefresh();
  }
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback();
    await this._stopAutoRefresh();
  }
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const t = Date.now();
          try {
            return await this._useSession(async e => {
              const {
                data: {
                  session: r
                }
              } = e;
              if (!r || !r.refresh_token || !r.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const s = Math.floor((r.expires_at * 1000 - t) / Ge);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${s} ticks, a tick lasts 30000ms, refresh threshold is 3 ticks`);
              if (s <= 3) {
                await this._callRefreshToken(r.refresh_token);
              }
            });
          } catch (e) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", e);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (!e.isAcquireTimeout && !(e instanceof tr)) {
        throw e;
      }
      this._debug("auto refresh token tick lock not available");
    }
  }
  async _handleVisibilityChange() {
    this._debug("#_handleVisibilityChange()");
    if (!Et() || !window?.addEventListener) {
      if (this.autoRefreshToken) {
        this.startAutoRefresh();
      }
      return false;
    }
    try {
      this.visibilityChangedCallback = async () => {
        try {
          await this._onVisibilityChanged(false);
        } catch (e) {
          this._debug("#visibilityChangedCallback", "error", e);
        }
      };
      if (window !== null && window !== undefined) {
        window.addEventListener("visibilitychange", this.visibilityChangedCallback);
      }
      await this._onVisibilityChanged(true);
    } catch (e) {
      console.error("_handleVisibilityChange", e);
    }
  }
  async _onVisibilityChanged(e) {
    const t = `#_onVisibilityChanged(${e})`;
    this._debug(t, "visibilityState", document.visibilityState);
    if (document.visibilityState === "visible") {
      if (this.autoRefreshToken) {
        this._startAutoRefresh();
      }
      if (!e) {
        await this.initializePromise;
        await this._acquireLock(this.lockAcquireTimeout, async () => {
          if (document.visibilityState === "visible") {
            await this._recoverAndRefresh();
          } else {
            this._debug(t, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
          }
        });
      }
    } else if (document.visibilityState === "hidden" && this.autoRefreshToken) {
      this._stopAutoRefresh();
    }
  }
  async _getUrlForProvider(e, t, r) {
    const s = [`provider=${encodeURIComponent(t)}`];
    if (r == null ? undefined : r.redirectTo) {
      s.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`);
    }
    if (r == null ? undefined : r.scopes) {
      s.push(`scopes=${encodeURIComponent(r.scopes)}`);
    }
    if (this.flowType === "pkce") {
      const [e, t] = await Nt(this.storage, this.storageKey);
      const r = new URLSearchParams({
        code_challenge: `${encodeURIComponent(e)}`,
        code_challenge_method: `${encodeURIComponent(t)}`
      });
      s.push(r.toString());
    }
    if (r == null ? undefined : r.queryParams) {
      const e = new URLSearchParams(r.queryParams);
      s.push(e.toString());
    }
    if (r == null ? undefined : r.skipBrowserRedirect) {
      s.push(`skip_http_redirect=${r.skipBrowserRedirect}`);
    }
    return `${e}?${s.join("&")}`;
  }
  async _unenroll(e) {
    try {
      return await this._useSession(async t => {
        const {
          data: s,
          error: n
        } = t;
        if (n) {
          return this._returnResult({
            data: null,
            error: n
          });
        } else {
          return await Ft(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
            headers: this.headers,
            jwt: (s == null ? undefined : s.session)?.access_token
          });
        }
      });
    } catch (t) {
      if (tt(t)) {
        return this._returnResult({
          data: null,
          error: t
        });
      }
      throw t;
    }
  }
  async _enroll(e) {
    try {
      return await this._useSession(async t => {
        const {
          data: n,
          error: i
        } = t;
        if (i) {
          return this._returnResult({
            data: null,
            error: i
          });
        }
        const a = Object.assign({
          friendly_name: e.friendlyName,
          factor_type: e.factorType
        }, e.factorType === "phone" ? {
          phone: e.phone
        } : e.factorType === "totp" ? {
          issuer: e.issuer
        } : {});
        const {
          data: o,
          error: l
        } = await Ft(this.fetch, "POST", `${this.url}/factors`, {
          body: a,
          headers: this.headers,
          jwt: (n == null ? undefined : n.session)?.access_token
        });
        if (l) {
          return this._returnResult({
            data: null,
            error: l
          });
        } else {
          if (e.factorType === "totp" && o.type === "totp" && (o == null ? undefined : o.totp)?.qr_code) {
            o.totp.qr_code = `data:image/svg+xml;utf-8,${o.totp.qr_code}`;
          }
          return this._returnResult({
            data: o,
            error: null
          });
        }
      });
    } catch (t) {
      if (tt(t)) {
        return this._returnResult({
          data: null,
          error: t
        });
      }
      throw t;
    }
  }
  async _verify(e) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async t => {
          const {
            data: s,
            error: n
          } = t;
          if (n) {
            return this._returnResult({
              data: null,
              error: n
            });
          }
          const i = Object.assign({
            challenge_id: e.challengeId
          }, "webauthn" in e ? {
            webauthn: Object.assign(Object.assign({}, e.webauthn), {
              credential_response: e.webauthn.type === "create" ? pr(e.webauthn.credential_response) : fr(e.webauthn.credential_response)
            })
          } : {
            code: e.code
          });
          const {
            data: a,
            error: o
          } = await Ft(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
            body: i,
            headers: this.headers,
            jwt: (s == null ? undefined : s.session)?.access_token
          });
          if (o) {
            return this._returnResult({
              data: null,
              error: o
            });
          } else {
            await this._saveSession(Object.assign({
              expires_at: Math.round(Date.now() / 1000) + a.expires_in
            }, a));
            await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a);
            return this._returnResult({
              data: a,
              error: o
            });
          }
        });
      } catch (t) {
        if (tt(t)) {
          return this._returnResult({
            data: null,
            error: t
          });
        }
        throw t;
      }
    });
  }
  async _challenge(e) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async t => {
          const {
            data: s,
            error: n
          } = t;
          if (n) {
            return this._returnResult({
              data: null,
              error: n
            });
          }
          const i = await Ft(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
            body: e,
            headers: this.headers,
            jwt: (s == null ? undefined : s.session)?.access_token
          });
          if (i.error) {
            return i;
          }
          const {
            data: a
          } = i;
          if (a.type !== "webauthn") {
            return {
              data: a,
              error: null
            };
          }
          switch (a.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, a), {
                  webauthn: Object.assign(Object.assign({}, a.webauthn), {
                    credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), {
                      publicKey: hr(a.webauthn.credential_options.publicKey)
                    })
                  })
                }),
                error: null
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, a), {
                  webauthn: Object.assign(Object.assign({}, a.webauthn), {
                    credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), {
                      publicKey: dr(a.webauthn.credential_options.publicKey)
                    })
                  })
                }),
                error: null
              };
          }
        });
      } catch (t) {
        if (tt(t)) {
          return this._returnResult({
            data: null,
            error: t
          });
        }
        throw t;
      }
    });
  }
  async _challengeAndVerify(e) {
    const {
      data: t,
      error: r
    } = await this._challenge({
      factorId: e.factorId
    });
    if (r) {
      return this._returnResult({
        data: null,
        error: r
      });
    } else {
      return await this._verify({
        factorId: e.factorId,
        challengeId: t.id,
        code: e.code
      });
    }
  }
  async _listFactors() {
    const {
      data: {
        user: t
      },
      error: r
    } = await this.getUser();
    if (r) {
      return {
        data: null,
        error: r
      };
    }
    const s = {
      all: [],
      phone: [],
      totp: [],
      webauthn: []
    };
    for (const n of (t == null ? undefined : t.factors) ?? []) {
      s.all.push(n);
      if (n.status === "verified") {
        s[n.factor_type].push(n);
      }
    }
    return {
      data: s,
      error: null
    };
  }
  async _getAuthenticatorAssuranceLevel(e) {
    var t;
    var s;
    if (e) {
      try {
        const {
          payload: s
        } = Ct(e);
        let n = null;
        if (s.aal) {
          n = s.aal;
        }
        let i = n;
        const {
          data: {
            user: a
          },
          error: o
        } = await this.getUser(e);
        if (o) {
          return this._returnResult({
            data: null,
            error: o
          });
        } else {
          if ((((t = a == null ? undefined : a.factors) === null || t === undefined ? undefined : t.filter(e => e.status === "verified")) ?? []).length > 0) {
            i = "aal2";
          }
          return {
            data: {
              currentLevel: n,
              nextLevel: i,
              currentAuthenticationMethods: s.amr || []
            },
            error: null
          };
        }
      } catch (u) {
        if (tt(u)) {
          return this._returnResult({
            data: null,
            error: u
          });
        }
        throw u;
      }
    }
    const {
      data: {
        session: i
      },
      error: a
    } = await this.getSession();
    if (a) {
      return this._returnResult({
        data: null,
        error: a
      });
    }
    if (!i) {
      return {
        data: {
          currentLevel: null,
          nextLevel: null,
          currentAuthenticationMethods: []
        },
        error: null
      };
    }
    const {
      payload: o
    } = Ct(i.access_token);
    let l = null;
    if (o.aal) {
      l = o.aal;
    }
    let c = l;
    if ((((s = i.user.factors) === null || s === undefined ? undefined : s.filter(e => e.status === "verified")) ?? []).length > 0) {
      c = "aal2";
    }
    return {
      data: {
        currentLevel: l,
        nextLevel: c,
        currentAuthenticationMethods: o.amr || []
      },
      error: null
    };
  }
  async _getAuthorizationDetails(e) {
    try {
      return await this._useSession(async t => {
        const {
          data: {
            session: r
          },
          error: s
        } = t;
        if (s) {
          return this._returnResult({
            data: null,
            error: s
          });
        } else if (r) {
          return await Ft(this.fetch, "GET", `${this.url}/oauth/authorizations/${e}`, {
            headers: this.headers,
            jwt: r.access_token,
            xform: e => ({
              data: e,
              error: null
            })
          });
        } else {
          return this._returnResult({
            data: null,
            error: new it()
          });
        }
      });
    } catch (t) {
      if (tt(t)) {
        return this._returnResult({
          data: null,
          error: t
        });
      }
      throw t;
    }
  }
  async _approveAuthorization(e, t) {
    try {
      return await this._useSession(async r => {
        const {
          data: {
            session: s
          },
          error: n
        } = r;
        if (n) {
          return this._returnResult({
            data: null,
            error: n
          });
        }
        if (!s) {
          return this._returnResult({
            data: null,
            error: new it()
          });
        }
        const i = await Ft(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
          headers: this.headers,
          jwt: s.access_token,
          body: {
            action: "approve"
          },
          xform: e => ({
            data: e,
            error: null
          })
        });
        if (i.data && i.data.redirect_url && Et() && !(t == null ? undefined : t.skipBrowserRedirect)) {
          window.location.assign(i.data.redirect_url);
        }
        return i;
      });
    } catch (r) {
      if (tt(r)) {
        return this._returnResult({
          data: null,
          error: r
        });
      }
      throw r;
    }
  }
  async _denyAuthorization(e, t) {
    try {
      return await this._useSession(async r => {
        const {
          data: {
            session: s
          },
          error: n
        } = r;
        if (n) {
          return this._returnResult({
            data: null,
            error: n
          });
        }
        if (!s) {
          return this._returnResult({
            data: null,
            error: new it()
          });
        }
        const i = await Ft(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
          headers: this.headers,
          jwt: s.access_token,
          body: {
            action: "deny"
          },
          xform: e => ({
            data: e,
            error: null
          })
        });
        if (i.data && i.data.redirect_url && Et() && !(t == null ? undefined : t.skipBrowserRedirect)) {
          window.location.assign(i.data.redirect_url);
        }
        return i;
      });
    } catch (r) {
      if (tt(r)) {
        return this._returnResult({
          data: null,
          error: r
        });
      }
      throw r;
    }
  }
  async _listOAuthGrants() {
    try {
      return await this._useSession(async e => {
        const {
          data: {
            session: t
          },
          error: r
        } = e;
        if (r) {
          return this._returnResult({
            data: null,
            error: r
          });
        } else if (t) {
          return await Ft(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
            headers: this.headers,
            jwt: t.access_token,
            xform: e => ({
              data: e,
              error: null
            })
          });
        } else {
          return this._returnResult({
            data: null,
            error: new it()
          });
        }
      });
    } catch (e) {
      if (tt(e)) {
        return this._returnResult({
          data: null,
          error: e
        });
      }
      throw e;
    }
  }
  async _revokeOAuthGrant(e) {
    try {
      return await this._useSession(async t => {
        const {
          data: {
            session: r
          },
          error: s
        } = t;
        if (s) {
          return this._returnResult({
            data: null,
            error: s
          });
        } else if (r) {
          await Ft(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
            headers: this.headers,
            jwt: r.access_token,
            query: {
              client_id: e.clientId
            },
            noResolveJson: true
          });
          return {
            data: {},
            error: null
          };
        } else {
          return this._returnResult({
            data: null,
            error: new it()
          });
        }
      });
    } catch (t) {
      if (tt(t)) {
        return this._returnResult({
          data: null,
          error: t
        });
      }
      throw t;
    }
  }
  async fetchJwk(e, t = {
    keys: []
  }) {
    let r = t.keys.find(t => t.kid === e);
    if (r) {
      return r;
    }
    const s = Date.now();
    r = this.jwks.keys.find(t => t.kid === e);
    if (r && this.jwks_cached_at + 600000 > s) {
      return r;
    }
    const {
      data: n,
      error: i
    } = await Ft(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (i) {
      throw i;
    }
    if (n.keys && n.keys.length !== 0) {
      this.jwks = n;
      this.jwks_cached_at = s;
      r = n.keys.find(t => t.kid === e);
      return r || null;
    } else {
      return null;
    }
  }
  async getClaims(e, t = {}) {
    try {
      let r = e;
      if (!r) {
        const {
          data: e,
          error: t
        } = await this.getSession();
        if (t || !e.session) {
          return this._returnResult({
            data: null,
            error: t
          });
        }
        r = e.session.access_token;
      }
      const {
        header: s,
        payload: n,
        signature: i,
        raw: {
          header: a,
          payload: o
        }
      } = Ct(r);
      if (!(t == null ? undefined : t.allowExpired)) {
        (function (e) {
          if (!e) {
            throw new Error("Missing exp claim");
          }
          if (e <= Math.floor(Date.now() / 1000)) {
            throw new Error("JWT has expired");
          }
        })(n.exp);
      }
      const l = s.alg && !s.alg.startsWith("HS") && s.kid && "crypto" in globalThis && "subtle" in globalThis.crypto ? await this.fetchJwk(s.kid, (t == null ? undefined : t.keys) ? {
        keys: t.keys
      } : t == null ? undefined : t.jwks) : null;
      if (!l) {
        const {
          error: e
        } = await this.getUser(r);
        if (e) {
          throw e;
        }
        return {
          data: {
            claims: n,
            header: s,
            signature: i
          },
          error: null
        };
      }
      const c = function (e) {
        switch (e) {
          case "RS256":
            return {
              name: "RSASSA-PKCS1-v1_5",
              hash: {
                name: "SHA-256"
              }
            };
          case "ES256":
            return {
              name: "ECDSA",
              namedCurve: "P-256",
              hash: {
                name: "SHA-256"
              }
            };
          default:
            throw new Error("Invalid alg claim");
        }
      }(s.alg);
      const u = await crypto.subtle.importKey("jwk", l, c, true, ["verify"]);
      if (!(await crypto.subtle.verify(c, u, i, function (e) {
        const t = [];
        (function (e, t) {
          for (let r = 0; r < e.length; r += 1) {
            let s = e.charCodeAt(r);
            if (s > 55295 && s <= 56319) {
              const t = (s - 55296) * 1024 & 65535;
              s = 65536 + (e.charCodeAt(r + 1) - 56320 & 65535 | t);
              r += 1;
            }
            kt(s, t);
          }
        })(e, e => t.push(e));
        return new Uint8Array(t);
      }(`${a}.${o}`)))) {
        throw new gt("Invalid JWT signature");
      }
      return {
        data: {
          claims: n,
          header: s,
          signature: i
        },
        error: null
      };
    } catch (r) {
      if (tt(r)) {
        return this._returnResult({
          data: null,
          error: r
        });
      }
      throw r;
    }
  }
}
Tr.nextInstanceID = {};
const Er = Tr;
let Or = "";
Or = typeof Deno != "undefined" ? "deno" : typeof document != "undefined" ? "web" : typeof navigator != "undefined" && navigator.product === "ReactNative" ? "react-native" : "node";
const Rr = {
  headers: {
    "X-Client-Info": `supabase-js-${Or}/2.99.0`
  }
};
const Ar = {
  schema: "public"
};
const jr = {
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
  flowType: "implicit"
};
const $r = {};
function Pr(e) {
  return (Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
    return typeof e;
  } : function (e) {
    if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof e;
    }
  })(e);
}
function Ir(e, t, r) {
  if ((t = function (e) {
    var t = function (e, t) {
      if (Pr(e) != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, t);
        if (Pr(s) != "object") {
          return s;
        }
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e, "string");
    if (Pr(t) == "symbol") {
      return t;
    } else {
      return t + "";
    }
  }(t)) in e) {
    Object.defineProperty(e, t, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    e[t] = r;
  }
  return e;
}
function Cr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    if (t) {
      s = s.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      });
    }
    r.push.apply(r, s);
  }
  return r;
}
function xr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] ?? {};
    if (t % 2) {
      Cr(Object(r), true).forEach(function (t) {
        Ir(e, t, r[t]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
    } else {
      Cr(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
  }
  return e;
}
var Nr = class extends Er {
  constructor(e) {
    super(e);
  }
};
var Ur = class {
  constructor(e, t, r) {
    this.supabaseUrl = e;
    this.supabaseKey = t;
    const i = function (e) {
      const t = e == null ? undefined : e.trim();
      if (!t) {
        throw new Error("supabaseUrl is required.");
      }
      if (!t.match(/^https?:\/\//i)) {
        throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
      }
      try {
        return new URL((r = t).endsWith("/") ? r : r + "/");
      } catch (s) {
        throw Error("Invalid supabaseUrl: Provided URL is malformed.");
      }
      var r;
    }(e);
    if (!t) {
      throw new Error("supabaseKey is required.");
    }
    this.realtimeUrl = new URL("realtime/v1", i);
    this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws");
    this.authUrl = new URL("auth/v1", i);
    this.storageUrl = new URL("storage/v1", i);
    this.functionsUrl = new URL("functions/v1", i);
    const a = `sb-${i.hostname.split(".")[0]}-auth-token`;
    const o = function (e, t) {
      const {
        db: n,
        auth: i,
        realtime: a,
        global: o
      } = e;
      const {
        db: l,
        auth: c,
        realtime: u,
        global: h
      } = t;
      const d = {
        db: xr(xr({}, l), n),
        auth: xr(xr({}, c), i),
        realtime: xr(xr({}, u), a),
        storage: {},
        global: xr(xr(xr({}, h), o), {}, {
          headers: xr(xr({}, (h == null ? undefined : h.headers) ?? {}), (o == null ? undefined : o.headers) ?? {})
        }),
        accessToken: async () => ""
      };
      if (e.accessToken) {
        d.accessToken = e.accessToken;
      } else {
        delete d.accessToken;
      }
      return d;
    }(r ?? {}, {
      db: Ar,
      realtime: $r,
      auth: xr(xr({}, jr), {}, {
        storageKey: a
      }),
      global: Rr
    });
    this.storageKey = o.auth.storageKey ?? "";
    this.headers = o.global.headers ?? {};
    if (o.accessToken) {
      this.accessToken = o.accessToken;
      this.auth = new Proxy({}, {
        get: (e, t) => {
          throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`);
        }
      });
    } else {
      this.auth = this._initSupabaseAuthClient(o.auth ?? {}, this.headers, o.global.fetch);
    }
    this.fetch = ((e, t, r) => {
      const s = (e => e ? (...t) => e(...t) : (...e) => fetch(...e))(r);
      const n = Headers;
      return async (r, i) => {
        const o = (await t()) ?? e;
        let l = new n(i == null ? undefined : i.headers);
        if (!l.has("apikey")) {
          l.set("apikey", e);
        }
        if (!l.has("Authorization")) {
          l.set("Authorization", `Bearer ${o}`);
        }
        return s(r, xr(xr({}, i), {}, {
          headers: l
        }));
      };
    })(t, this._getAccessToken.bind(this), o.global.fetch);
    this.realtime = this._initRealtimeClient(xr({
      headers: this.headers,
      accessToken: this._getAccessToken.bind(this)
    }, o.realtime));
    if (this.accessToken) {
      Promise.resolve(this.accessToken()).then(e => this.realtime.setAuth(e)).catch(e => console.warn("Failed to set initial Realtime auth token:", e));
    }
    this.rest = new w(new URL("rest/v1", i).href, {
      headers: this.headers,
      schema: o.db.schema,
      fetch: this.fetch,
      timeout: o.db.timeout,
      urlLengthLimit: o.db.urlLengthLimit
    });
    this.storage = new He(this.storageUrl.href, this.headers, this.fetch, r == null ? undefined : r.storage);
    if (!o.accessToken) {
      this._listenForAuthEvents();
    }
  }
  get functions() {
    return new o(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  from(e) {
    return this.rest.from(e);
  }
  schema(e) {
    return this.rest.schema(e);
  }
  rpc(e, t = {}, r = {
    head: false,
    get: false,
    count: undefined
  }) {
    return this.rest.rpc(e, t, r);
  }
  channel(e, t = {
    config: {}
  }) {
    return this.realtime.channel(e, t);
  }
  getChannels() {
    return this.realtime.getChannels();
  }
  removeChannel(e) {
    return this.realtime.removeChannel(e);
  }
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  async _getAccessToken() {
    var r = this;
    if (r.accessToken) {
      return await r.accessToken();
    }
    const {
      data: s
    } = await r.auth.getSession();
    return s.session?.access_token ?? r.supabaseKey;
  }
  _initSupabaseAuthClient({
    autoRefreshToken: e,
    persistSession: t,
    detectSessionInUrl: r,
    storage: s,
    userStorage: n,
    storageKey: i,
    flowType: a,
    lock: o,
    debug: l,
    throwOnError: c
  }, u, h) {
    const d = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new Nr({
      url: this.authUrl.href,
      headers: xr(xr({}, d), u),
      storageKey: i,
      autoRefreshToken: e,
      persistSession: t,
      detectSessionInUrl: r,
      storage: s,
      userStorage: n,
      flowType: a,
      lock: o,
      debug: l,
      throwOnError: c,
      fetch: h,
      hasCustomAuthorizationHeader: Object.keys(this.headers).some(e => e.toLowerCase() === "authorization")
    });
  }
  _initRealtimeClient(e) {
    return new ne(this.realtimeUrl.href, xr(xr({}, e), {}, {
      params: xr(xr({}, {
        apikey: this.supabaseKey
      }), e == null ? undefined : e.params)
    }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((e, t) => {
      this._handleTokenChanged(e, "CLIENT", t == null ? undefined : t.access_token);
    });
  }
  _handleTokenChanged(e, t, r) {
    if (e !== "TOKEN_REFRESHED" && e !== "SIGNED_IN" || this.changedAccessToken === r) {
      if (e === "SIGNED_OUT") {
        this.realtime.setAuth();
        if (t == "STORAGE") {
          this.auth.signOut();
        }
        this.changedAccessToken = undefined;
      }
    } else {
      this.changedAccessToken = r;
      this.realtime.setAuth(r);
    }
  }
};
const Lr = (e, t, r) => new Ur(e, t, r);
if (function () {
  if (typeof window != "undefined") {
    return false;
  }
  const e = globalThis.process;
  if (!e) {
    return false;
  }
  const t = e.version;
  if (t == null) {
    return false;
  }
  const r = t.match(/^v(\d+)\./);
  return !!r && parseInt(r[1], 10) <= 18;
}()) {
  console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
}
export { Lr as c };