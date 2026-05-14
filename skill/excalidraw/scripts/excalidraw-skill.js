if (!globalThis.navigator) Object.defineProperty(globalThis, "navigator", { value: { platform: "", userAgent: "" }, configurable: true });

// node_modules/@excalidraw/math/dist/prod/index.js
var y = 1e-4;
var ft = (t, n, o) => Math.min(Math.max(t, n), o);
var C = (t) => t < 0 ? t % (2 * Math.PI) + 2 * Math.PI : t % (2 * Math.PI);
function K(t) {
  return t * Math.PI / 180;
}
function Vt(t, n, o) {
  return t = C(t), n = C(n), o = C(o), n < o ? t >= n && t <= o : t >= n || t <= o;
}
function Ct(t, n) {
  t = C(t), n = C(n);
  let o = t - n;
  return o < -Math.PI ? o = o + 2 * Math.PI : o > Math.PI && (o = o - 2 * Math.PI), Math.abs(o);
}
function L(t, n, o = 0, e4 = 0) {
  return [t - o, n - e4];
}
function h(t, n = [0, 0], o, e4 = [0, 1]) {
  let r = L(t[0] - n[0], t[1] - n[1]);
  return o && U(r) < o * o ? e4 : r;
}
function N(t, n) {
  return t[0] * n[1] - n[0] * t[1];
}
function E(t, n) {
  return t[0] * n[0] + t[1] * n[1];
}
function F(t, n) {
  return [t[0] + n[0], t[1] + n[1]];
}
function M(t, n) {
  return L(t[0] * n, t[1] * n);
}
function U(t) {
  return t[0] * t[0] + t[1] * t[1];
}
function ct(t) {
  return Math.sqrt(U(t));
}
var T = (t) => {
  let n = ct(t);
  return n === 0 ? L(0, 0) : L(t[0] / n, t[1] / n);
};
var O = (t) => L(t[1], -t[0]);
function p(t, n) {
  return [t, n];
}
function Tt(t) {
  return t.length === 2 ? p(t[0], t[1]) : void 0;
}
function I(t, n = p(0, 0)) {
  return p(n[0] + t[0], n[1] + t[1]);
}
function A(t, n, o = 1e-4) {
  let e4 = Math.abs;
  return e4(t[0] - n[0]) < o && e4(t[1] - n[1]) < o;
}
function w([t, n], [o, e4], r) {
  return p((t - o) * Math.cos(r) - (n - e4) * Math.sin(r) + o, (t - o) * Math.sin(r) + (n - e4) * Math.cos(r) + e4);
}
function lt(t, n = [0, 0]) {
  return p(t[0] + n[0], t[1] + n[1]);
}
function z(t, n) {
  return p((t[0] + n[0]) / 2, (t[1] + n[1]) / 2);
}
function _(t, n) {
  return Math.hypot(n[0] - t[0], n[1] - t[1]);
}
function Xt(t, n) {
  let o = n[0] - t[0], e4 = n[1] - t[1];
  return o * o + e4 * e4;
}
var Yt = (t, n, o) => lt(n, M(h(t, n), o));
var X = [-0.06405689286260563, 0.06405689286260563, -0.1911188674736163, 0.1911188674736163, -0.3150426796961634, 0.3150426796961634, -0.4337935076260451, 0.4337935076260451, -0.5454214713888396, 0.5454214713888396, -0.6480936519369755, 0.6480936519369755, -0.7401241915785544, 0.7401241915785544, -0.820001985973903, 0.820001985973903, -0.8864155270044011, 0.8864155270044011, -0.9382745520027328, 0.9382745520027328, -0.9747285559713095, 0.9747285559713095, -0.9951872199970213, 0.9951872199970213];
var Y = [0.12793819534675216, 0.12793819534675216, 0.1258374563468283, 0.1258374563468283, 0.12167047292780339, 0.12167047292780339, 0.1155056680537256, 0.1155056680537256, 0.10744427011596563, 0.10744427011596563, 0.09761865210411388, 0.09761865210411388, 0.08619016153195327, 0.08619016153195327, 0.0733464814110803, 0.0733464814110803, 0.05929858491543678, 0.05929858491543678, 0.04427743881741981, 0.04427743881741981, 0.028531388628933663, 0.028531388628933663, 0.0123412297999872, 0.0123412297999872];
function tt(t, n, o, e4) {
  return [t, n, o, e4];
}
function $(t, n, o, e4 = 1e-6) {
  return [(t(n + e4, o) - t(n - e4, o)) / (2 * e4), (t(n, o + e4) - t(n, o - e4)) / (2 * e4)];
}
function st(t, n, o, e4 = 1e-3, r = 10) {
  let i = 1 / 0, a = 0;
  for (; i >= e4; ) {
    if (a >= r) return null;
    let c2 = t(n, o), l = [$((f2, d) => t(f2, d)[0], n, o), $((f2, d) => t(f2, d)[1], n, o)], P2 = [[-c2[0]], [-c2[1]]], s = l[0][0] * l[1][1] - l[0][1] * l[1][0];
    if (s === 0) return null;
    let u2 = [[l[1][1] / s, -l[0][1] / s], [-l[1][0] / s, l[0][0] / s]], m = [[u2[0][0] * P2[0][0] + u2[0][1] * P2[1][0]], [u2[1][0] * P2[0][0] + u2[1][1] * P2[1][0]]];
    n = n + m[0][0], o = o + m[1][0];
    let [x2, b] = t(n, o);
    i = Math.max(Math.abs(x2), Math.abs(b)), a += 1;
  }
  return [n, o];
}
var R = (t, n) => p((1 - n) ** 3 * t[0][0] + 3 * (1 - n) ** 2 * n * t[1][0] + 3 * (1 - n) * n ** 2 * t[2][0] + n ** 3 * t[3][0], (1 - n) ** 3 * t[0][1] + 3 * (1 - n) ** 2 * n * t[1][1] + 3 * (1 - n) * n ** 2 * t[2][1] + n ** 3 * t[3][1]);
function Kt(t, n) {
  let o = (a) => p(n[0][0] + a * (n[1][0] - n[0][0]), n[0][1] + a * (n[1][1] - n[0][1])), e4 = [[0.5, 0], [0.2, 0], [0.8, 0]], r = ([a, c2]) => {
    let l = st((u2, m) => {
      let x2 = R(t, u2), b = o(m);
      return [x2[0] - b[0], x2[1] - b[1]];
    }, a, c2);
    if (!l) return null;
    let [P2, s] = l;
    return P2 < 0 || P2 > 1 || s < 0 || s > 1 ? null : R(t, P2);
  }, i = r(e4[0]);
  return i ? [i] : (i = r(e4[1]), i ? [i] : (i = r(e4[2]), i ? [i] : []));
}
function Pt(t, n, o = 1e-3) {
  let e4 = (P2, s, u2, m = o) => {
    let x2 = P2, b = s, f2;
    for (; b - x2 > m; ) f2 = (b + x2) / 2, u2(f2 - m) < u2(f2 + m) ? b = f2 : x2 = f2;
    return f2;
  }, i = 0;
  for (let P2 = 1 / 0, s = 0; s < 30; s++) {
    let u2 = _(n, R(t, s / 30));
    u2 < P2 && (P2 = u2, i = s);
  }
  let a = Math.max((i - 1) / 30, 0), c2 = Math.min((i + 1) / 30, 1), l = e4(a, c2, (P2) => _(n, R(t, P2)));
  return l ? R(t, l) : null;
}
function Ut(t, n) {
  let o = Pt(t, n);
  return o ? _(n, o) : 0;
}
function j([t, n, o, e4], r) {
  return L(-3 * (1 - r) * (1 - r) * t[0] + 3 * (1 - r) * (1 - r) * n[0] - 6 * r * (1 - r) * n[0] - 3 * r * r * o[0] + 6 * r * (1 - r) * o[0] + 3 * r * r * e4[0], -3 * (1 - r) * (1 - r) * t[1] + 3 * (1 - r) * (1 - r) * n[1] - 6 * r * (1 - r) * n[1] - 3 * r * r * o[1] + 6 * r * (1 - r) * o[1] + 3 * r * r * e4[1]);
}
function nn(t, n = 0.5) {
  if (t.length < 2) return;
  let o = [];
  for (let e4 = 0; e4 < t.length - 1; e4++) {
    let r = t[e4 - 1 < 0 ? 0 : e4 - 1], i = t[e4], a = t[e4 + 1 >= t.length ? t.length - 1 : e4 + 1], c2 = t[e4 + 2 >= t.length ? t.length - 1 : e4 + 2], l = [(a[0] - r[0]) * n, (a[1] - r[1]) * n], P2 = [(c2[0] - i[0]) * n, (c2[1] - i[1]) * n], s = i[0] + l[0] / 3, u2 = i[1] + l[1] / 3, m = a[0] - P2[0] / 3, x2 = a[1] - P2[1] / 3;
    o.push(tt(p(i[0], i[1]), p(s, u2), p(m, x2), p(a[0], a[1])));
  }
  return o;
}
function on([t, n, o, e4], r, i = 50) {
  let a = [];
  for (let c2 = 0; c2 <= i; c2++) {
    let l = c2 / i, P2 = tt(t, n, o, e4), s = R(P2, l), u2 = T(j(P2, l)), m = O(u2);
    a.push(I(M(m, r), s));
  }
  return a;
}
function nt(t) {
  let o = 0;
  for (let e4 = 0; e4 < 24; e4++) {
    let r = 0.5 * X[e4] + 0.5, i = j(t, r), a = Math.sqrt(i[0] * i[0] + i[1] * i[1]);
    o += Y[e4] * a;
  }
  return 0.5 * o;
}
function ut(t, n) {
  if (n <= 0) return 0;
  if (n >= 1) return nt(t);
  let o = n / 2, e4 = n / 2, r = 0;
  for (let i = 0; i < 24; i++) {
    let a = o * X[i] + e4, c2 = j(t, a), l = Math.sqrt(c2[0] * c2[0] + c2[1] * c2[1]);
    r += Y[i] * l;
  }
  return o * r;
}
function rn(t, n) {
  if (n <= 0) return R(t, 0);
  if (n >= 1) return R(t, 1);
  let o = nt(t), e4 = o * n, r = 0, i = 1, a = n, c2 = 0, l = o * 1e-4, P2 = 20;
  for (let s = 0; s < P2 && (c2 = ut(t, a), !(Math.abs(c2 - e4) < l)); s++) c2 < e4 ? r = a : i = a, a = (r + i) / 2;
  return R(t, a);
}
function un(t, n, o) {
  return { center: t, halfWidth: n, halfHeight: o };
}
var mt = (t, n) => {
  let { halfWidth: o, halfHeight: e4, center: r } = n, i = o, a = e4, c2 = F(h(t), M(h(r), -1)), l = Math.abs(c2[0]), P2 = Math.abs(c2[1]), s = 0.707, u2 = 0.707;
  for (let b = 0; b < 3; b++) {
    let f2 = i * s, d = a * u2, G2 = (i * i - a * a) * s ** 3 / i, V3 = (a * a - i * i) * u2 ** 3 / a, it = f2 - G2, at = d - V3, W = l - G2, H2 = P2 - V3, Q3 = Math.hypot(at, it), J3 = Math.hypot(H2, W);
    s = Math.min(1, Math.max(0, (W * Q3 / J3 + G2) / i)), u2 = Math.min(1, Math.max(0, (H2 * Q3 / J3 + V3) / a));
    let Z3 = Math.hypot(u2, s);
    s /= Z3, u2 /= Z3;
  }
  let [m, x2] = [i * s * Math.sign(c2[0]), a * u2 * Math.sign(c2[1])];
  return _(I(c2), p(m, x2));
};
function xn(t, n) {
  let o = t.halfWidth, e4 = t.halfHeight, r = h(n[1], n[0]), i = L(n[0][0] - t.center[0], n[0][1] - t.center[1]), a = L(r[0] / (o * o), r[1] / (e4 * e4)), c2 = L(i[0] / (o * o), i[1] / (e4 * e4)), l = E(r, a), P2 = E(r, c2), s = E(i, c2) - 1, u2 = P2 * P2 - l * s, m = [];
  if (u2 > 0) {
    let x2 = (-P2 - Math.sqrt(u2)) / l, b = (-P2 + Math.sqrt(u2)) / l;
    0 <= x2 && x2 <= 1 && m.push(p(n[0][0] + (n[1][0] - n[0][0]) * x2, n[0][1] + (n[1][1] - n[0][1]) * x2)), 0 <= b && b <= 1 && m.push(p(n[0][0] + (n[1][0] - n[0][0]) * b, n[0][1] + (n[1][1] - n[0][1]) * b));
  } else if (u2 === 0) {
    let x2 = -P2 / l;
    0 <= x2 && x2 <= 1 && m.push(p(n[0][0] + (n[1][0] - n[0][0]) * x2, n[0][1] + (n[1][1] - n[0][1]) * x2));
  }
  return m;
}
function k(t, n) {
  return [t, n];
}
function ot(t, n) {
  let o = t[1][1] - t[0][1], e4 = t[0][0] - t[1][0], r = n[1][1] - n[0][1], i = n[0][0] - n[1][0], a = o * i - r * e4;
  if (a !== 0) {
    let c2 = o * t[0][0] + e4 * t[0][1], l = r * n[0][0] + i * n[0][1];
    return p((c2 * i - l * e4) / a, (o * l - r * c2) / a);
  }
  return null;
}
function v(t, n) {
  return [t, n];
}
var q = (t, n, o = 1e-4) => {
  let e4 = pt(t, n);
  return e4 === 0 ? true : e4 < o;
};
var pt = (t, n) => {
  let [o, e4] = t, [[r, i], [a, c2]] = n, l = o - r, P2 = e4 - i, s = a - r, u2 = c2 - i, m = l * s + P2 * u2, x2 = s * s + u2 * u2, b = -1;
  x2 !== 0 && (b = m / x2);
  let f2, d;
  b < 0 ? (f2 = r, d = i) : b > 1 ? (f2 = a, d = c2) : (f2 = r + b * s, d = i + b * u2);
  let G2 = o - f2, V3 = e4 - d;
  return Math.sqrt(G2 * G2 + V3 * V3);
};
function et(t, n, o) {
  let e4 = ot(k(t[0], t[1]), k(n[0], n[1]));
  return !e4 || !q(e4, n, o) || !q(e4, t, o) ? null : e4;
}
function bt(t, n) {
  return [t, n];
}
function no([t, n, o], e4) {
  let r = (s, u2, m) => (s[0] - m[0]) * (u2[1] - m[1]) - (u2[0] - m[0]) * (s[1] - m[1]), i = r(e4, t, n), a = r(e4, n, o), c2 = r(e4, o, t), l = i < 0 || a < 0 || c2 < 0, P2 = i > 0 || a > 0 || c2 > 0;
  return !(l && P2);
}

// node_modules/@excalidraw/common/dist/prod/index.js
var he = Object.create;
var Y2 = Object.defineProperty;
var ye = Object.getOwnPropertyDescriptor;
var ge = Object.getOwnPropertyNames;
var Le = Object.getPrototypeOf;
var Se = Object.prototype.hasOwnProperty;
var Oe = (e4, t) => () => (e4 && (t = e4(e4 = 0)), t);
var V = (e4, t) => () => (t || e4((t = { exports: {} }).exports, t), t.exports);
var Re = (e4, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (let s of ge(t)) !Se.call(e4, s) && s !== n && Y2(e4, s, { get: () => t[s], enumerable: !(r = ye(t, s)) || r.enumerable });
  return e4;
};
var X2 = (e4, t, n) => (n = e4 != null ? he(Le(e4)) : {}, Re(t || !e4 || !e4.__esModule ? Y2(n, "default", { value: e4, enumerable: true }) : n, e4));
var f;
var c = Oe(() => {
  f = { PROD: true };
});
var le = V((G2, ae) => {
  c();
  (function(e4, t) {
    typeof define == "function" && define.amd ? define([], t) : typeof G2 == "object" ? ae.exports = t() : (e4.PromisePool = t(), e4.promisePool = e4.PromisePool);
  })(G2, function() {
    "use strict";
    var e4 = function() {
      this._listeners = {};
    };
    e4.prototype.addEventListener = function(o, a) {
      this._listeners[o] = this._listeners[o] || [], this._listeners[o].indexOf(a) < 0 && this._listeners[o].push(a);
    }, e4.prototype.removeEventListener = function(o, a) {
      if (this._listeners[o]) {
        var p2 = this._listeners[o].indexOf(a);
        p2 >= 0 && this._listeners[o].splice(p2, 1);
      }
    }, e4.prototype.dispatchEvent = function(o) {
      if (this._listeners[o.type] && this._listeners[o.type].length) for (var a = this._listeners[o.type].slice(), p2 = 0, m = a.length; p2 < m; ++p2) a[p2].call(this, o);
    };
    var t = function(o) {
      return typeof o.constructor == "function" && o.constructor.name === "GeneratorFunction";
    }, n = function(o) {
      return { next: function() {
        var a = o();
        return a ? { value: a } : { done: true };
      } };
    }, r = function(o) {
      var a = false;
      return { next: function() {
        return a ? { done: true } : (a = true, { value: o });
      } };
    }, s = function(o, a) {
      var p2 = typeof o;
      if (p2 === "object") {
        if (typeof o.next == "function") return o;
        if (typeof o.then == "function") return r(o);
      }
      return p2 === "function" ? t(o) ? o() : n(o) : r(a.resolve(o));
    }, l = function(o, a, p2) {
      this.target = o, this.type = a, this.data = p2;
    }, i = function(o, a, p2) {
      if (e4.call(this), typeof a != "number" || Math.floor(a) !== a || a < 1) throw new Error("Invalid concurrency");
      this._concurrency = a, this._options = p2 || {}, this._options.promise = this._options.promise || Promise, this._iterator = s(o, this._options.promise), this._done = false, this._size = 0, this._promise = null, this._callbacks = null;
    };
    return i.prototype = new e4(), i.prototype.constructor = i, i.prototype.concurrency = function(o) {
      return typeof o < "u" && (this._concurrency = o, this.active() && this._proceed()), this._concurrency;
    }, i.prototype.size = function() {
      return this._size;
    }, i.prototype.active = function() {
      return !!this._promise;
    }, i.prototype.promise = function() {
      return this._promise;
    }, i.prototype.start = function() {
      var o = this, a = this._options.promise;
      return this._promise = new a(function(p2, m) {
        o._callbacks = { reject: m, resolve: p2 }, o._proceed();
      }), this._promise;
    }, i.prototype._fireEvent = function(o, a) {
      this.dispatchEvent(new l(this, o, a));
    }, i.prototype._settle = function(o) {
      o ? this._callbacks.reject(o) : this._callbacks.resolve(), this._promise = null, this._callbacks = null;
    }, i.prototype._onPooledPromiseFulfilled = function(o, a) {
      this._size--, this.active() && (this._fireEvent("fulfilled", { promise: o, result: a }), this._proceed());
    }, i.prototype._onPooledPromiseRejected = function(o, a) {
      this._size--, this.active() && (this._fireEvent("rejected", { promise: o, error: a }), this._settle(a || new Error("Unknown error")));
    }, i.prototype._trackPromise = function(o) {
      var a = this;
      o.then(function(p2) {
        a._onPooledPromiseFulfilled(o, p2);
      }, function(p2) {
        a._onPooledPromiseRejected(o, p2);
      }).catch(function(p2) {
        a._settle(new Error("Promise processing failed: " + p2));
      });
    }, i.prototype._proceed = function() {
      if (!this._done) {
        for (var o = { done: false }; this._size < this._concurrency && !(o = this._iterator.next()).done; ) this._size++, this._trackPromise(o.value);
        this._done = o === null || !!o.done;
      }
      this._done && this._size === 0 && this._settle();
    }, i.PromisePoolEvent = l, i.PromisePool = i, i;
  });
});
var be = V((U3) => {
  "use strict";
  c();
  Object.defineProperty(U3, "__esModule", { value: true });
  U3.sanitizeUrl = void 0;
  var tt3 = /^([^\w]*)(javascript|data|vbscript)/im, nt3 = /&#(\w+)(^\w|;)?/g, rt2 = /&(newline|tab);/gi, ot2 = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, st3 = /^.+(:|&colon;)/gim, it = [".", "/"];
  function at(e4) {
    return it.indexOf(e4[0]) > -1;
  }
  function lt2(e4) {
    return e4.replace(nt3, function(t, n) {
      return String.fromCharCode(n);
    });
  }
  function ct3(e4) {
    var t = lt2(e4 || "").replace(rt2, "").replace(ot2, "").trim();
    if (!t) return "about:blank";
    if (at(t)) return t;
    var n = t.match(st3);
    if (!n) return t;
    var r = n[0];
    return tt3.test(r) ? "about:blank" : t;
  }
  U3.sanitizeUrl = ct3;
});
c();
c();
var $2 = class {
  constructor(t) {
    this.scoreFunction = t;
  }
  content = [];
  sinkDown(t) {
    let n = this.content[t];
    for (; t > 0; ) {
      let r = (t + 1 >> 1) - 1, s = this.content[r];
      if (this.scoreFunction(n) < this.scoreFunction(s)) this.content[r] = n, this.content[t] = s, t = r;
      else break;
    }
  }
  bubbleUp(t) {
    let n = this.content.length, r = this.content[t], s = this.scoreFunction(r);
    for (; ; ) {
      let l = t + 1 << 1, i = l - 1, o = null, a = 0;
      if (i < n) {
        let p2 = this.content[i];
        a = this.scoreFunction(p2), a < s && (o = i);
      }
      if (l < n) {
        let p2 = this.content[l];
        this.scoreFunction(p2) < (o === null ? s : a) && (o = l);
      }
      if (o !== null) this.content[t] = this.content[o], this.content[o] = r, t = o;
      else break;
    }
  }
  push(t) {
    this.content.push(t), this.sinkDown(this.content.length - 1);
  }
  pop() {
    if (this.content.length === 0) return null;
    let t = this.content[0], n = this.content.pop();
    return this.content.length > 0 && (this.content[0] = n, this.bubbleUp(0)), t;
  }
  remove(t) {
    if (this.content.length === 0) return;
    let n = this.content.indexOf(t), r = this.content.pop();
    n < this.content.length && (this.content[n] = r, this.scoreFunction(r) < this.scoreFunction(t) ? this.sinkDown(n) : this.bubbleUp(n));
  }
  size() {
    return this.content.length;
  }
  rescoreElement(t) {
    this.sinkDown(this.content.indexOf(t));
  }
};
c();
var z2 = { white: "#ffffff", black: "#000000", gray: ["#f8f9fa", "#f1f3f5", "#e9ecef", "#dee2e6", "#ced4da", "#adb5bd", "#868e96", "#495057", "#343a40", "#212529"], red: ["#fff5f5", "#ffe3e3", "#ffc9c9", "#ffa8a8", "#ff8787", "#ff6b6b", "#fa5252", "#f03e3e", "#e03131", "#c92a2a"], pink: ["#fff0f6", "#ffdeeb", "#fcc2d7", "#faa2c1", "#f783ac", "#f06595", "#e64980", "#d6336c", "#c2255c", "#a61e4d"], grape: ["#f8f0fc", "#f3d9fa", "#eebefa", "#e599f7", "#da77f2", "#cc5de8", "#be4bdb", "#ae3ec9", "#9c36b5", "#862e9c"], violet: ["#f3f0ff", "#e5dbff", "#d0bfff", "#b197fc", "#9775fa", "#845ef7", "#7950f2", "#7048e8", "#6741d9", "#5f3dc4"], indigo: ["#edf2ff", "#dbe4ff", "#bac8ff", "#91a7ff", "#748ffc", "#5c7cfa", "#4c6ef5", "#4263eb", "#3b5bdb", "#364fc7"], blue: ["#e7f5ff", "#d0ebff", "#a5d8ff", "#74c0fc", "#4dabf7", "#339af0", "#228be6", "#1c7ed6", "#1971c2", "#1864ab"], cyan: ["#e3fafc", "#c5f6fa", "#99e9f2", "#66d9e8", "#3bc9db", "#22b8cf", "#15aabf", "#1098ad", "#0c8599", "#0b7285"], teal: ["#e6fcf5", "#c3fae8", "#96f2d7", "#63e6be", "#38d9a9", "#20c997", "#12b886", "#0ca678", "#099268", "#087f5b"], green: ["#ebfbee", "#d3f9d8", "#b2f2bb", "#8ce99a", "#69db7c", "#51cf66", "#40c057", "#37b24d", "#2f9e44", "#2b8a3e"], lime: ["#f4fce3", "#e9fac8", "#d8f5a2", "#c0eb75", "#a9e34b", "#94d82d", "#82c91e", "#74b816", "#66a80f", "#5c940d"], yellow: ["#fff9db", "#fff3bf", "#ffec99", "#ffe066", "#ffd43b", "#fcc419", "#fab005", "#f59f00", "#f08c00", "#e67700"], orange: ["#fff4e6", "#ffe8cc", "#ffd8a8", "#ffc078", "#ffa94d", "#ff922b", "#fd7e14", "#f76707", "#e8590c", "#d9480f"] };
var Fe = (e4, t) => t.reduce((n, r) => (r in e4 && (n[r] = e4[r]), n), {});
var C2 = 4;
var F2 = 1;
var E2 = [0, 2, 4, 6, 8];
var x = (e4, t) => t.map((n) => z2[e4][n]);
var u = { transparent: "transparent", black: "#1e1e1e", white: "#ffffff", gray: x("gray", E2), red: x("red", E2), pink: x("pink", E2), grape: x("grape", E2), violet: x("violet", E2), blue: x("blue", E2), cyan: x("cyan", E2), teal: x("teal", E2), green: x("green", E2), yellow: x("yellow", E2), orange: x("orange", E2), bronze: ["#f8f1ee", "#eaddd7", "#d2bab0", "#a18072", "#846358"] };
var j2 = Fe(u, ["cyan", "blue", "violet", "grape", "pink", "green", "teal", "yellow", "orange", "red"]);
var yt = [u.black, u.red[C2], u.green[C2], u.blue[C2], u.yellow[C2]];
var gt = [u.transparent, u.red[F2], u.green[F2], u.blue[F2], u.yellow[F2]];
var Lt = [u.white, "#f8f9fa", "#f5faff", "#fffce8", "#fdf8f6"];
var St = { transparent: u.transparent, white: u.white, gray: u.gray, black: u.black, bronze: u.bronze, ...j2 };
var Ot2 = { transparent: u.transparent, white: u.white, gray: u.gray, black: u.black, bronze: u.bronze, ...j2 };
c();
var w2 = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
var It = /^Win/.test(navigator.platform);
var Mt = /\b(android)\b/i.test(navigator.userAgent);
var Pt2 = typeof window < "u" && "netscape" in window && navigator.userAgent.indexOf("rv:") > 1 && navigator.userAgent.indexOf("Gecko") > 1;
var we = navigator.userAgent.indexOf("Chrome") !== -1;
var Dt = !we && navigator.userAgent.indexOf("Safari") !== -1;
var Ut2 = /iPad|iPhone/.test(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
var kt = typeof window < "u" && "ResizeObserver" in window;
var Bt = 10;
var Gt = 8;
var Xt2 = Math.PI / 12;
var Ie = ((d) => (d.COPY = "copy", d.PASTE = "paste", d.CUT = "cut", d.KEYDOWN = "keydown", d.KEYUP = "keyup", d.MOUSE_MOVE = "mousemove", d.RESIZE = "resize", d.UNLOAD = "unload", d.FOCUS = "focus", d.BLUR = "blur", d.DRAG_OVER = "dragover", d.DROP = "drop", d.GESTURE_END = "gestureend", d.BEFORE_UNLOAD = "beforeunload", d.GESTURE_START = "gesturestart", d.GESTURE_CHANGE = "gesturechange", d.POINTER_MOVE = "pointermove", d.POINTER_DOWN = "pointerdown", d.POINTER_UP = "pointerup", d.STATE_CHANGE = "statechange", d.WHEEL = "wheel", d.TOUCH_START = "touchstart", d.TOUCH_END = "touchend", d.HASHCHANGE = "hashchange", d.VISIBILITY_CHANGE = "visibilitychange", d.SCROLL = "scroll", d.EXCALIDRAW_LINK = "excalidraw-link", d.MENU_ITEM_SELECT = "menu.itemSelect", d.MESSAGE = "message", d.FULLSCREENCHANGE = "fullscreenchange", d))(Ie || {});
var I2 = { TEST: "test", DEVELOPMENT: "development", PRODUCTION: "production" };
var q2 = "Xiaolai";
var L2 = "Segoe UI Emoji";
var T2 = { Virgil: 1, Helvetica: 2, Cascadia: 3, Excalifont: 5, Nunito: 6, "Lilita One": 7, "Comic Shanns": 8, "Liberation Sans": 9, Assistant: 10 };
var Q = "sans-serif";
var J = "monospace";
var Me = { [Q]: 998, [J]: 999 };
var B = { [q2]: 100, ...Me, [L2]: 1e3 };
function Pe(e4) {
  switch (e4) {
    case T2.Cascadia:
    case T2["Comic Shanns"]:
      return J;
    default:
      return Q;
  }
}
var ee = (e4) => {
  let t = Pe(e4);
  switch (e4) {
    case T2.Excalifont:
      return [q2, t, L2];
    default:
      return [t, L2];
  }
};
var nn2 = 20;
var rn2 = T2.Excalifont;
var on2 = "left";
var sn = "top";
var De = 2;
var Ue = 2 * De;
var Ne = 1e-5;
var an = 2 * Ue - Ne;
var ne = { svg: "image/svg+xml", png: "image/png", jpg: "image/jpeg", gif: "image/gif", webp: "image/webp", bmp: "image/bmp", ico: "image/x-icon", avif: "image/avif", jfif: "image/jfif" };
var Z = { text: "text/plain", html: "text/html", json: "application/json", excalidraw: "application/vnd.excalidraw+json", excalidrawlib: "application/vnd.excalidrawlib+json", "excalidraw.svg": "image/svg+xml", "excalidraw.png": "image/png", binary: "application/octet-stream", ...ne };
var Tn = [Z.text, Z.html, ...Object.values(ne)];
var Gn = 4 * 1024 * 1024;
var $n = 5;
var zn = 0.7;
var jn = 11;
var Zn = { TOP: "top", MIDDLE: "middle", BOTTOM: "bottom" };
var qn = { LEFT: "left", CENTER: "center", RIGHT: "right" };
var Jn = 0.25;
var er = 32;
var tr = { LEGACY: 1, PROPORTIONAL_RADIUS: 2, ADAPTIVE_RADIUS: 3 };
var ke = { architect: 0, artist: 1, cartoonist: 2 };
var rr = { strokeColor: u.black, backgroundColor: u.transparent, fillStyle: "solid", strokeWidth: 2, strokeStyle: "solid", roughness: ke.artist, opacity: 100, locked: false };
var mr = Symbol.for("__test__originalId__");
var Ke = ((r) => (r.ACTIVE = "active", r.AWAY = "away", r.IDLE = "idle", r))(Ke || {});
var Er = 20;
c();
var M2 = { [T2.Excalifont]: { metrics: { unitsPerEm: 1e3, ascender: 886, descender: -374, lineHeight: 1.25 } }, [T2.Nunito]: { metrics: { unitsPerEm: 1e3, ascender: 1011, descender: -353, lineHeight: 1.25 } }, [T2["Lilita One"]]: { metrics: { unitsPerEm: 1e3, ascender: 923, descender: -220, lineHeight: 1.15 } }, [T2["Comic Shanns"]]: { metrics: { unitsPerEm: 1e3, ascender: 750, descender: -250, lineHeight: 1.25 } }, [T2.Virgil]: { metrics: { unitsPerEm: 1e3, ascender: 886, descender: -374, lineHeight: 1.25 }, deprecated: true }, [T2.Helvetica]: { metrics: { unitsPerEm: 2048, ascender: 1577, descender: -471, lineHeight: 1.15 }, deprecated: true, local: true }, [T2.Cascadia]: { metrics: { unitsPerEm: 2048, ascender: 1900, descender: -480, lineHeight: 1.2 }, deprecated: true }, [T2["Liberation Sans"]]: { metrics: { unitsPerEm: 2048, ascender: 1854, descender: -434, lineHeight: 1.15 }, private: true }, [T2.Assistant]: { metrics: { unitsPerEm: 2048, ascender: 1021, descender: -287, lineHeight: 1.25 }, private: true }, [B.Xiaolai]: { metrics: { unitsPerEm: 1e3, ascender: 880, descender: -144, lineHeight: 1.25 }, fallback: true }, [B["Segoe UI Emoji"]]: { metrics: { unitsPerEm: 1e3, ascender: 886, descender: -374, lineHeight: 1.25 }, local: true, fallback: true } };
var gr = (e4) => {
  let { lineHeight: t } = M2[e4]?.metrics || M2[T2.Excalifont].metrics;
  return t;
};
c();
c();
var ie = { EQUAL: "Equal", MINUS: "Minus", NUM_ADD: "NumpadAdd", NUM_SUBTRACT: "NumpadSubtract", NUM_ZERO: "Numpad0", BRACKET_RIGHT: "BracketRight", BRACKET_LEFT: "BracketLeft", ONE: "Digit1", TWO: "Digit2", THREE: "Digit3", NINE: "Digit9", QUOTE: "Quote", ZERO: "Digit0", SLASH: "Slash", C: "KeyC", D: "KeyD", H: "KeyH", V: "KeyV", Z: "KeyZ", Y: "KeyY", R: "KeyR", S: "KeyS" };
var y2 = { ARROW_DOWN: "ArrowDown", ARROW_LEFT: "ArrowLeft", ARROW_RIGHT: "ArrowRight", ARROW_UP: "ArrowUp", PAGE_UP: "PageUp", PAGE_DOWN: "PageDown", BACKSPACE: "Backspace", ALT: "Alt", CTRL_OR_CMD: w2 ? "metaKey" : "ctrlKey", DELETE: "Delete", ENTER: "Enter", ESCAPE: "Escape", QUESTION_MARK: "?", SPACE: " ", TAB: "Tab", CHEVRON_LEFT: "<", CHEVRON_RIGHT: ">", PERIOD: ".", COMMA: ",", SUBTRACT: "-", SLASH: "/", A: "a", C: "c", D: "d", E: "e", F: "f", G: "g", H: "h", I: "i", L: "l", O: "o", P: "p", Q: "q", R: "r", S: "s", T: "t", V: "v", X: "x", Y: "y", Z: "z", K: "k", W: "w", 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9" };
var Be = /* @__PURE__ */ new Map([[y2.Z, ie.Z], [y2.Y, ie.Y]]);
var Pr = (e4) => e4.shiftKey;
c();
var kr = (e4) => {
  let t = e4.map((r) => r[0]), n = e4.map((r) => r[1]);
  return { width: Math.max(...t) - Math.min(...t), height: Math.max(...n) - Math.min(...n) };
};
var Kr = (e4, t, n) => n ? [Math.round(e4 / n) * n, Math.round(t / n) * n] : [e4, t];
c();
var ue = X2(le(), 1);
c();
c();
c();
var pe = (e4 = 21) => crypto.getRandomValues(new Uint8Array(e4)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
c();
var S = class {
  constructor(t) {
    this.seed = t;
  }
  next() {
    return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
};
c();
var Ve = ({ fontFamily: e4 }) => {
  for (let [t, n] of Object.entries(T2)) if (n === e4) return `${t}${ee(n).map((r) => `, ${r}`).join("")}`;
  return L2;
};
var co = ({ fontSize: e4, fontFamily: t }) => `${e4}px ${Ve({ fontFamily: t })}`;
var go = ({ clientX: e4, clientY: t }, { zoom: n, offsetLeft: r, offsetTop: s, scrollX: l, scrollY: i }) => {
  let o = (e4 - r) / n.value - l, a = (t - s) / n.value - i;
  return { x: o, y: a };
};
var Xe = "A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0800-\u1FFF\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF";
var $e = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";
var ze = new RegExp(`^[^${Xe}]*[${$e}]`);
var Ro = (e4) => {
  let [t, n] = e4;
  return { x: t, y: n };
};
var je = (e4) => {
  let t = e4.length === 5 && e4.substr(4, 1) === "0", n = e4.length === 9 && e4.substr(7, 2) === "00";
  return t || n || e4 === u.transparent;
};
var Io = (e4) => e4.fillStyle !== "solid" || je(e4.backgroundColor);
var Ko = () => D() ? 1 : Date.now();
var Bo = (e4) => e4 instanceof Map ? e4 : e4.reduce((t, n) => (t.set(typeof n == "string" ? n : n.id, n), t), /* @__PURE__ */ new Map());
var Ze = (e4) => Array.isArray(e4) ? e4 : e4.values();
var D = () => f.MODE === I2.TEST;
var Xo = () => f.MODE === I2.DEVELOPMENT;
var fe = (e4, t) => Array.isArray(e4) && Array.isArray(t) && e4.length === 0 && t.length === 0 ? true : e4 === t;
var Qe = (e4, t, n, r = false) => {
  let s = Object.keys(e4), l = Object.keys(t);
  if (s.length !== l.length) return r && console.warn("%cisShallowEqual: objects don't have same properties ->", "color: #8B4000", e4, t), false;
  if (n && Array.isArray(n)) {
    for (let i of n) if (!(e4[i] === t[i] || fe(e4[i], t[i]))) return r && console.warn(`%cisShallowEqual: ${i} not equal ->`, "color: #8B4000", e4[i], t[i]), false;
    return true;
  }
  return s.every((i) => {
    let o = n?.[i], a = o ? o(e4[i], t[i]) : e4[i] === t[i] || fe(e4[i], t[i]);
    return !a && r && console.warn(`%cisShallowEqual: ${i} not equal ->`, "color: #8B4000", e4[i], t[i]), a;
  });
};
var ns = (e4, t, n) => {
  if (!t) return e4;
  if (n) return console.error(t), e4;
  throw new Error(t);
};
function rs(e4, t) {
  if (!e4) throw new Error(t);
}
var us = (e4) => e4.replace(/\r?\n|\r/g, `
`);
var ds = (...e4) => Math.max(...e4.map((t) => t ? 1 : 0)) > 0;
var Je = (e4) => Array.isArray(e4);
var et2 = (e4) => Je(e4) ? e4.length : e4 instanceof Map || e4 instanceof Set ? e4.size : Object.keys(e4).length;
var Ee = new S(Date.now());
var xe = 0;
var hs = () => Math.floor(Ee.next() * 2 ** 31);
var gs = () => D() ? `id${xe++}` : pe();
c();
var _e = X2(be(), 1);
c();

// node_modules/@excalidraw/element/dist/prod/index.js
var cd = Object.create;
var bs = Object.defineProperty;
var dd = Object.getOwnPropertyDescriptor;
var ud = Object.getOwnPropertyNames;
var pd = Object.getPrototypeOf;
var md = Object.prototype.hasOwnProperty;
var fd = (e4, t) => () => (e4 && (t = e4(e4 = 0)), t);
var hd = (e4, t) => () => (t || e4((t = { exports: {} }).exports, t), t.exports);
var Ed = (e4, t, n, i) => {
  if (t && typeof t == "object" || typeof t == "function") for (let o of ud(t)) !md.call(e4, o) && o !== n && bs(e4, o, { get: () => t[o], enumerable: !(i = dd(t, o)) || i.enumerable });
  return e4;
};
var gd = (e4, t, n) => (n = e4 != null ? cd(pd(e4)) : {}, Ed(t || !e4 || !e4.__esModule ? bs(n, "default", { value: e4, enumerable: true }) : n, e4));
var A2;
var P = fd(() => {
  A2 = { PROD: true };
});
var xc = hd((A1, gc) => {
  P();
  var Ec = "Expected a function", fc = NaN, Rf = "[object Symbol]", Ff = /^\s+|\s+$/g, Nf = /^[-+]0x[0-9a-f]+$/i, zf = /^0b[01]+$/i, Hf = /^0o[0-7]+$/i, _f = parseInt, Yf = typeof global == "object" && global && global.Object === Object && global, Xf = typeof self == "object" && self && self.Object === Object && self, Uf = Yf || Xf || Function("return this")(), Wf = Object.prototype, jf = Wf.toString, Vf = Math.max, $f = Math.min, ts = function() {
    return Uf.Date.now();
  };
  function Zf(e4, t, n) {
    var i, o, r, s, a, l, c2 = 0, d = false, u2 = false, p2 = true;
    if (typeof e4 != "function") throw new TypeError(Ec);
    t = hc(t) || 0, Po(n) && (d = !!n.leading, u2 = "maxWait" in n, r = u2 ? Vf(hc(n.maxWait) || 0, t) : r, p2 = "trailing" in n ? !!n.trailing : p2);
    function m(I3) {
      var M3 = i, v2 = o;
      return i = o = void 0, c2 = I3, s = e4.apply(v2, M3), s;
    }
    function f2(I3) {
      return c2 = I3, a = setTimeout(g, t), d ? m(I3) : s;
    }
    function E3(I3) {
      var M3 = I3 - l, v2 = I3 - c2, T3 = t - M3;
      return u2 ? $f(T3, r - v2) : T3;
    }
    function h2(I3) {
      var M3 = I3 - l, v2 = I3 - c2;
      return l === void 0 || M3 >= t || M3 < 0 || u2 && v2 >= r;
    }
    function g() {
      var I3 = ts();
      if (h2(I3)) return x2(I3);
      a = setTimeout(g, E3(I3));
    }
    function x2(I3) {
      return a = void 0, p2 && i ? m(I3) : (i = o = void 0, s);
    }
    function y3() {
      a !== void 0 && clearTimeout(a), c2 = 0, i = l = o = a = void 0;
    }
    function b() {
      return a === void 0 ? s : x2(ts());
    }
    function w3() {
      var I3 = ts(), M3 = h2(I3);
      if (i = arguments, o = this, l = I3, M3) {
        if (a === void 0) return f2(l);
        if (u2) return a = setTimeout(g, t), m(l);
      }
      return a === void 0 && (a = setTimeout(g, t)), s;
    }
    return w3.cancel = y3, w3.flush = b, w3;
  }
  function qf(e4, t, n) {
    var i = true, o = true;
    if (typeof e4 != "function") throw new TypeError(Ec);
    return Po(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), Zf(e4, t, { leading: i, maxWait: t, trailing: o });
  }
  function Po(e4) {
    var t = typeof e4;
    return !!e4 && (t == "object" || t == "function");
  }
  function Kf(e4) {
    return !!e4 && typeof e4 == "object";
  }
  function Qf(e4) {
    return typeof e4 == "symbol" || Kf(e4) && jf.call(e4) == Rf;
  }
  function hc(e4) {
    if (typeof e4 == "number") return e4;
    if (Qf(e4)) return fc;
    if (Po(e4)) {
      var t = typeof e4.valueOf == "function" ? e4.valueOf() : e4;
      e4 = Po(t) ? t + "" : t;
    }
    if (typeof e4 != "string") return e4 === 0 ? e4 : +e4;
    e4 = e4.replace(Ff, "");
    var n = zf.test(e4);
    return n || Hf.test(e4) ? _f(e4.slice(2), n ? 2 : 8) : Nf.test(e4) ? fc : +e4;
  }
  gc.exports = qf;
});
P();
P();
P();
P();
P();
P();
P();
P();
P();
P();
P();
function ko(e4, t, n) {
  if (e4 && e4.length) {
    let [i, o] = t, r = Math.PI / 180 * n, s = Math.cos(r), a = Math.sin(r);
    for (let l of e4) {
      let [c2, d] = l;
      l[0] = (c2 - i) * s - (d - o) * a + i, l[1] = (c2 - i) * a + (d - o) * s + o;
    }
  }
}
function wd(e4, t, n) {
  let i = [];
  e4.forEach((o) => i.push(...o)), ko(i, t, n);
}
function yd(e4, t) {
  return e4[0] === t[0] && e4[1] === t[1];
}
function Ps(e4, t, n, i = 1) {
  let o = n, r = Math.max(t, 0.1), s = e4[0] && e4[0][0] && typeof e4[0][0] == "number" ? [e4] : e4, a = [0, 0];
  if (o) for (let c2 of s) ko(c2, a, o);
  let l = bd(s, r, i);
  if (o) {
    for (let c2 of s) ko(c2, a, -o);
    wd(l, a, -o);
  }
  return l;
}
function bd(e4, t, n) {
  let i = [];
  for (let c2 of e4) {
    let d = [...c2];
    yd(d[0], d[d.length - 1]) || d.push([d[0][0], d[0][1]]), d.length > 2 && i.push(d);
  }
  let o = [];
  t = Math.max(t, 0.1);
  let r = [];
  for (let c2 of i) for (let d = 0; d < c2.length - 1; d++) {
    let u2 = c2[d], p2 = c2[d + 1];
    if (u2[1] !== p2[1]) {
      let m = Math.min(u2[1], p2[1]);
      r.push({ ymin: m, ymax: Math.max(u2[1], p2[1]), x: m === u2[1] ? u2[0] : p2[0], islope: (p2[0] - u2[0]) / (p2[1] - u2[1]) });
    }
  }
  if (r.sort((c2, d) => c2.ymin < d.ymin ? -1 : c2.ymin > d.ymin ? 1 : c2.x < d.x ? -1 : c2.x > d.x ? 1 : c2.ymax === d.ymax ? 0 : (c2.ymax - d.ymax) / Math.abs(c2.ymax - d.ymax)), !r.length) return o;
  let s = [], a = r[0].ymin, l = 0;
  for (; s.length || r.length; ) {
    if (r.length) {
      let c2 = -1;
      for (let u2 = 0; u2 < r.length && !(r[u2].ymin > a); u2++) c2 = u2;
      r.splice(0, c2 + 1).forEach((u2) => {
        s.push({ s: a, edge: u2 });
      });
    }
    if (s = s.filter((c2) => !(c2.edge.ymax <= a)), s.sort((c2, d) => c2.edge.x === d.edge.x ? 0 : (c2.edge.x - d.edge.x) / Math.abs(c2.edge.x - d.edge.x)), (n !== 1 || l % t === 0) && s.length > 1) for (let c2 = 0; c2 < s.length; c2 = c2 + 2) {
      let d = c2 + 1;
      if (d >= s.length) break;
      let u2 = s[c2].edge, p2 = s[d].edge;
      o.push([[Math.round(u2.x), a], [Math.round(p2.x), a]]);
    }
    a += n, s.forEach((c2) => {
      c2.edge.x = c2.edge.x + n * c2.edge.islope;
    }), l++;
  }
  return o;
}
function rt(e4, t) {
  var n;
  let i = t.hachureAngle + 90, o = t.hachureGap;
  o < 0 && (o = t.strokeWidth * 4), o = Math.max(o, 0.1);
  let r = 1;
  return t.roughness >= 1 && (((n = t.randomizer) === null || n === void 0 ? void 0 : n.next()) || Math.random()) > 0.7 && (r = o), Ps(e4, o, i, r || 1);
}
var kt2 = class {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, n) {
    return this._fillPolygons(t, n);
  }
  _fillPolygons(t, n) {
    let i = rt(t, n);
    return { type: "fillSketch", ops: this.renderLines(i, n) };
  }
  renderLines(t, n) {
    let i = [];
    for (let o of t) i.push(...this.helper.doubleLineOps(o[0][0], o[0][1], o[1][0], o[1][1], n));
    return i;
  }
};
P();
P();
function Rt(e4) {
  let t = e4[0], n = e4[1];
  return Math.sqrt(Math.pow(t[0] - n[0], 2) + Math.pow(t[1] - n[1], 2));
}
var fi = class extends kt2 {
  fillPolygons(t, n) {
    let i = n.hachureGap;
    i < 0 && (i = n.strokeWidth * 4), i = Math.max(i, 0.1);
    let o = Object.assign({}, n, { hachureGap: i }), r = rt(t, o), s = Math.PI / 180 * n.hachureAngle, a = [], l = i * 0.5 * Math.cos(s), c2 = i * 0.5 * Math.sin(s);
    for (let [u2, p2] of r) Rt([u2, p2]) && a.push([[u2[0] - l, u2[1] + c2], [...p2]], [[u2[0] + l, u2[1] - c2], [...p2]]);
    return { type: "fillSketch", ops: this.renderLines(a, n) };
  }
};
P();
var hi = class extends kt2 {
  fillPolygons(t, n) {
    let i = this._fillPolygons(t, n), o = Object.assign({}, n, { hachureAngle: n.hachureAngle + 90 }), r = this._fillPolygons(t, o);
    return i.ops = i.ops.concat(r.ops), i;
  }
};
P();
var Ei = class {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, n) {
    n = Object.assign({}, n, { hachureAngle: 0 });
    let i = rt(t, n);
    return this.dotsOnLines(i, n);
  }
  dotsOnLines(t, n) {
    let i = [], o = n.hachureGap;
    o < 0 && (o = n.strokeWidth * 4), o = Math.max(o, 0.1);
    let r = n.fillWeight;
    r < 0 && (r = n.strokeWidth / 2);
    let s = o / 4;
    for (let a of t) {
      let l = Rt(a), c2 = l / o, d = Math.ceil(c2) - 1, u2 = l - d * o, p2 = (a[0][0] + a[1][0]) / 2 - o / 4, m = Math.min(a[0][1], a[1][1]);
      for (let f2 = 0; f2 < d; f2++) {
        let E3 = m + u2 + f2 * o, h2 = p2 - s + Math.random() * 2 * s, g = E3 - s + Math.random() * 2 * s, x2 = this.helper.ellipse(h2, g, r, r, n);
        i.push(...x2.ops);
      }
    }
    return { type: "fillSketch", ops: i };
  }
};
P();
var gi = class {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, n) {
    let i = rt(t, n);
    return { type: "fillSketch", ops: this.dashedLine(i, n) };
  }
  dashedLine(t, n) {
    let i = n.dashOffset < 0 ? n.hachureGap < 0 ? n.strokeWidth * 4 : n.hachureGap : n.dashOffset, o = n.dashGap < 0 ? n.hachureGap < 0 ? n.strokeWidth * 4 : n.hachureGap : n.dashGap, r = [];
    return t.forEach((s) => {
      let a = Rt(s), l = Math.floor(a / (i + o)), c2 = (a + o - l * (i + o)) / 2, d = s[0], u2 = s[1];
      d[0] > u2[0] && (d = s[1], u2 = s[0]);
      let p2 = Math.atan((u2[1] - d[1]) / (u2[0] - d[0]));
      for (let m = 0; m < l; m++) {
        let f2 = m * (i + o), E3 = f2 + i, h2 = [d[0] + f2 * Math.cos(p2) + c2 * Math.cos(p2), d[1] + f2 * Math.sin(p2) + c2 * Math.sin(p2)], g = [d[0] + E3 * Math.cos(p2) + c2 * Math.cos(p2), d[1] + E3 * Math.sin(p2) + c2 * Math.sin(p2)];
        r.push(...this.helper.doubleLineOps(h2[0], h2[1], g[0], g[1], n));
      }
    }), r;
  }
};
P();
var xi = class {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, n) {
    let i = n.hachureGap < 0 ? n.strokeWidth * 4 : n.hachureGap, o = n.zigzagOffset < 0 ? i : n.zigzagOffset;
    n = Object.assign({}, n, { hachureGap: i + o });
    let r = rt(t, n);
    return { type: "fillSketch", ops: this.zigzagLines(r, o, n) };
  }
  zigzagLines(t, n, i) {
    let o = [];
    return t.forEach((r) => {
      let s = Rt(r), a = Math.round(s / (2 * n)), l = r[0], c2 = r[1];
      l[0] > c2[0] && (l = r[1], c2 = r[0]);
      let d = Math.atan((c2[1] - l[1]) / (c2[0] - l[0]));
      for (let u2 = 0; u2 < a; u2++) {
        let p2 = u2 * 2 * n, m = (u2 + 1) * 2 * n, f2 = Math.sqrt(2 * Math.pow(n, 2)), E3 = [l[0] + p2 * Math.cos(d), l[1] + p2 * Math.sin(d)], h2 = [l[0] + m * Math.cos(d), l[1] + m * Math.sin(d)], g = [E3[0] + f2 * Math.cos(d + Math.PI / 4), E3[1] + f2 * Math.sin(d + Math.PI / 4)];
        o.push(...this.helper.doubleLineOps(E3[0], E3[1], g[0], g[1], i), ...this.helper.doubleLineOps(g[0], g[1], h2[0], h2[1], i));
      }
    }), o;
  }
};
var De2 = {};
function Is(e4, t) {
  let n = e4.fillStyle || "hachure";
  if (!De2[n]) switch (n) {
    case "zigzag":
      De2[n] || (De2[n] = new fi(t));
      break;
    case "cross-hatch":
      De2[n] || (De2[n] = new hi(t));
      break;
    case "dots":
      De2[n] || (De2[n] = new Ei(t));
      break;
    case "dashed":
      De2[n] || (De2[n] = new gi(t));
      break;
    case "zigzag-line":
      De2[n] || (De2[n] = new xi(t));
      break;
    case "hachure":
    default:
      n = "hachure", De2[n] || (De2[n] = new kt2(t));
      break;
  }
  return De2[n];
}
P();
function Ss() {
  return Math.floor(Math.random() * 2 ** 31);
}
var wi = class {
  constructor(t) {
    this.seed = t;
  }
  next() {
    return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
};
P();
P();
var yi = { A: 7, a: 7, C: 6, c: 6, H: 1, h: 1, L: 2, l: 2, M: 2, m: 2, Q: 4, q: 4, S: 4, s: 4, T: 2, t: 2, V: 1, v: 1, Z: 0, z: 0 };
function Pd(e4) {
  let t = new Array();
  for (; e4 !== ""; ) if (e4.match(/^([ \t\r\n,]+)/)) e4 = e4.substr(RegExp.$1.length);
  else if (e4.match(/^([aAcChHlLmMqQsStTvVzZ])/)) t[t.length] = { type: 0, text: RegExp.$1 }, e4 = e4.substr(RegExp.$1.length);
  else if (e4.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) t[t.length] = { type: 1, text: `${parseFloat(RegExp.$1)}` }, e4 = e4.substr(RegExp.$1.length);
  else return [];
  return t[t.length] = { type: 2, text: "" }, t;
}
function Ro2(e4, t) {
  return e4.type === t;
}
function xn2(e4) {
  let t = [], n = Pd(e4), i = "BOD", o = 0, r = n[o];
  for (; !Ro2(r, 2); ) {
    let s = 0, a = [];
    if (i === "BOD") if (r.text === "M" || r.text === "m") o++, s = yi[r.text], i = r.text;
    else return xn2("M0,0" + e4);
    else Ro2(r, 1) ? s = yi[i] : (o++, s = yi[r.text], i = r.text);
    if (o + s < n.length) {
      for (let l = o; l < o + s; l++) {
        let c2 = n[l];
        if (Ro2(c2, 1)) a[a.length] = +c2.text;
        else throw new Error("Param not a number: " + i + "," + c2.text);
      }
      if (typeof yi[i] == "number") {
        let l = { key: i, data: a };
        t.push(l), o += s, r = n[o], i === "M" && (i = "L"), i === "m" && (i = "l");
      } else throw new Error("Bad segment: " + i);
    } else throw new Error("Path data ended short");
  }
  return t;
}
P();
function Hn(e4) {
  let t = 0, n = 0, i = 0, o = 0, r = [];
  for (let { key: s, data: a } of e4) switch (s) {
    case "M":
      r.push({ key: "M", data: [...a] }), [t, n] = a, [i, o] = a;
      break;
    case "m":
      t += a[0], n += a[1], r.push({ key: "M", data: [t, n] }), i = t, o = n;
      break;
    case "L":
      r.push({ key: "L", data: [...a] }), [t, n] = a;
      break;
    case "l":
      t += a[0], n += a[1], r.push({ key: "L", data: [t, n] });
      break;
    case "C":
      r.push({ key: "C", data: [...a] }), t = a[4], n = a[5];
      break;
    case "c": {
      let l = a.map((c2, d) => d % 2 ? c2 + n : c2 + t);
      r.push({ key: "C", data: l }), t = l[4], n = l[5];
      break;
    }
    case "Q":
      r.push({ key: "Q", data: [...a] }), t = a[2], n = a[3];
      break;
    case "q": {
      let l = a.map((c2, d) => d % 2 ? c2 + n : c2 + t);
      r.push({ key: "Q", data: l }), t = l[2], n = l[3];
      break;
    }
    case "A":
      r.push({ key: "A", data: [...a] }), t = a[5], n = a[6];
      break;
    case "a":
      t += a[5], n += a[6], r.push({ key: "A", data: [a[0], a[1], a[2], a[3], a[4], t, n] });
      break;
    case "H":
      r.push({ key: "H", data: [...a] }), t = a[0];
      break;
    case "h":
      t += a[0], r.push({ key: "H", data: [t] });
      break;
    case "V":
      r.push({ key: "V", data: [...a] }), n = a[0];
      break;
    case "v":
      n += a[0], r.push({ key: "V", data: [n] });
      break;
    case "S":
      r.push({ key: "S", data: [...a] }), t = a[2], n = a[3];
      break;
    case "s": {
      let l = a.map((c2, d) => d % 2 ? c2 + n : c2 + t);
      r.push({ key: "S", data: l }), t = l[2], n = l[3];
      break;
    }
    case "T":
      r.push({ key: "T", data: [...a] }), t = a[0], n = a[1];
      break;
    case "t":
      t += a[0], n += a[1], r.push({ key: "T", data: [t, n] });
      break;
    case "Z":
    case "z":
      r.push({ key: "Z", data: [] }), t = i, n = o;
      break;
  }
  return r;
}
P();
function Yn(e4) {
  let t = [], n = "", i = 0, o = 0, r = 0, s = 0, a = 0, l = 0;
  for (let { key: c2, data: d } of e4) {
    switch (c2) {
      case "M":
        t.push({ key: "M", data: [...d] }), [i, o] = d, [r, s] = d;
        break;
      case "C":
        t.push({ key: "C", data: [...d] }), i = d[4], o = d[5], a = d[2], l = d[3];
        break;
      case "L":
        t.push({ key: "L", data: [...d] }), [i, o] = d;
        break;
      case "H":
        i = d[0], t.push({ key: "L", data: [i, o] });
        break;
      case "V":
        o = d[0], t.push({ key: "L", data: [i, o] });
        break;
      case "S": {
        let u2 = 0, p2 = 0;
        n === "C" || n === "S" ? (u2 = i + (i - a), p2 = o + (o - l)) : (u2 = i, p2 = o), t.push({ key: "C", data: [u2, p2, ...d] }), a = d[0], l = d[1], i = d[2], o = d[3];
        break;
      }
      case "T": {
        let [u2, p2] = d, m = 0, f2 = 0;
        n === "Q" || n === "T" ? (m = i + (i - a), f2 = o + (o - l)) : (m = i, f2 = o);
        let E3 = i + 2 * (m - i) / 3, h2 = o + 2 * (f2 - o) / 3, g = u2 + 2 * (m - u2) / 3, x2 = p2 + 2 * (f2 - p2) / 3;
        t.push({ key: "C", data: [E3, h2, g, x2, u2, p2] }), a = m, l = f2, i = u2, o = p2;
        break;
      }
      case "Q": {
        let [u2, p2, m, f2] = d, E3 = i + 2 * (u2 - i) / 3, h2 = o + 2 * (p2 - o) / 3, g = m + 2 * (u2 - m) / 3, x2 = f2 + 2 * (p2 - f2) / 3;
        t.push({ key: "C", data: [E3, h2, g, x2, m, f2] }), a = u2, l = p2, i = m, o = f2;
        break;
      }
      case "A": {
        let u2 = Math.abs(d[0]), p2 = Math.abs(d[1]), m = d[2], f2 = d[3], E3 = d[4], h2 = d[5], g = d[6];
        u2 === 0 || p2 === 0 ? (t.push({ key: "C", data: [i, o, h2, g, h2, g] }), i = h2, o = g) : (i !== h2 || o !== g) && (Ms(i, o, h2, g, u2, p2, m, f2, E3).forEach(function(y3) {
          t.push({ key: "C", data: y3 });
        }), i = h2, o = g);
        break;
      }
      case "Z":
        t.push({ key: "Z", data: [] }), i = r, o = s;
        break;
    }
    n = c2;
  }
  return t;
}
function Id(e4) {
  return Math.PI * e4 / 180;
}
function _n(e4, t, n) {
  let i = e4 * Math.cos(n) - t * Math.sin(n), o = e4 * Math.sin(n) + t * Math.cos(n);
  return [i, o];
}
function Ms(e4, t, n, i, o, r, s, a, l, c2) {
  let d = Id(s), u2 = [], p2 = 0, m = 0, f2 = 0, E3 = 0;
  if (c2) [p2, m, f2, E3] = c2;
  else {
    [e4, t] = _n(e4, t, -d), [n, i] = _n(n, i, -d);
    let R2 = (e4 - n) / 2, L3 = (t - i) / 2, W = R2 * R2 / (o * o) + L3 * L3 / (r * r);
    W > 1 && (W = Math.sqrt(W), o = W * o, r = W * r);
    let N2 = a === l ? -1 : 1, ee2 = o * o, S2 = r * r, K2 = ee2 * S2 - ee2 * L3 * L3 - S2 * R2 * R2, j3 = ee2 * L3 * L3 + S2 * R2 * R2, te = N2 * Math.sqrt(Math.abs(K2 / j3));
    f2 = te * o * L3 / r + (e4 + n) / 2, E3 = te * -r * R2 / o + (t + i) / 2, p2 = Math.asin(parseFloat(((t - E3) / r).toFixed(9))), m = Math.asin(parseFloat(((i - E3) / r).toFixed(9))), e4 < f2 && (p2 = Math.PI - p2), n < f2 && (m = Math.PI - m), p2 < 0 && (p2 = Math.PI * 2 + p2), m < 0 && (m = Math.PI * 2 + m), l && p2 > m && (p2 = p2 - Math.PI * 2), !l && m > p2 && (m = m - Math.PI * 2);
  }
  let h2 = m - p2;
  if (Math.abs(h2) > Math.PI * 120 / 180) {
    let R2 = m, L3 = n, W = i;
    l && m > p2 ? m = p2 + Math.PI * 120 / 180 * 1 : m = p2 + Math.PI * 120 / 180 * -1, n = f2 + o * Math.cos(m), i = E3 + r * Math.sin(m), u2 = Ms(n, i, L3, W, o, r, s, 0, l, [m, R2, f2, E3]);
  }
  h2 = m - p2;
  let g = Math.cos(p2), x2 = Math.sin(p2), y3 = Math.cos(m), b = Math.sin(m), w3 = Math.tan(h2 / 4), I3 = 4 / 3 * o * w3, M3 = 4 / 3 * r * w3, v2 = [e4, t], T3 = [e4 + I3 * x2, t - M3 * g], F3 = [n + I3 * b, i - M3 * y3], C3 = [n, i];
  if (T3[0] = 2 * v2[0] - T3[0], T3[1] = 2 * v2[1] - T3[1], c2) return [T3, F3, C3].concat(u2);
  {
    u2 = [T3, F3, C3].concat(u2);
    let R2 = [];
    for (let L3 = 0; L3 < u2.length; L3 += 3) {
      let W = _n(u2[L3][0], u2[L3][1], d), N2 = _n(u2[L3 + 1][0], u2[L3 + 1][1], d), ee2 = _n(u2[L3 + 2][0], u2[L3 + 2][1], d);
      R2.push([W[0], W[1], N2[0], N2[1], ee2[0], ee2[1]]);
    }
    return R2;
  }
}
var Sd = { randOffset: Ad, randOffsetWithRange: vd, ellipse: Td, doubleLineOps: Dd };
function Fo2(e4, t, n, i, o) {
  return { type: "path", ops: ht2(e4, t, n, i, o) };
}
function Xn2(e4, t, n) {
  let i = (e4 || []).length;
  if (i > 2) {
    let o = [];
    for (let r = 0; r < i - 1; r++) o.push(...ht2(e4[r][0], e4[r][1], e4[r + 1][0], e4[r + 1][1], n));
    return t && o.push(...ht2(e4[i - 1][0], e4[i - 1][1], e4[0][0], e4[0][1], n)), { type: "path", ops: o };
  } else if (i === 2) return Fo2(e4[0][0], e4[0][1], e4[1][0], e4[1][1], n);
  return { type: "path", ops: [] };
}
function Md(e4, t) {
  return Xn2(e4, true, t);
}
function Ls(e4, t, n, i, o) {
  let r = [[e4, t], [e4 + n, t], [e4 + n, t + i], [e4, t + i]];
  return Md(r, o);
}
function No(e4, t) {
  let n = As(e4, 1 * (1 + t.roughness * 0.2), t);
  if (!t.disableMultiStroke) {
    let i = As(e4, 1.5 * (1 + t.roughness * 0.22), Ld(t));
    n = n.concat(i);
  }
  return { type: "path", ops: n };
}
function Td(e4, t, n, i, o) {
  let r = zo(n, i, o);
  return Ii(e4, t, o, r).opset;
}
function zo(e4, t, n) {
  let i = Math.sqrt(Math.PI * 2 * Math.sqrt((Math.pow(e4 / 2, 2) + Math.pow(t / 2, 2)) / 2)), o = Math.ceil(Math.max(n.curveStepCount, n.curveStepCount / Math.sqrt(200) * i)), r = Math.PI * 2 / o, s = Math.abs(e4 / 2), a = Math.abs(t / 2), l = 1 - n.curveFitting;
  return s += O2(s * l, n), a += O2(a * l, n), { increment: r, rx: s, ry: a };
}
function Ii(e4, t, n, i) {
  let [o, r] = vs(i.increment, e4, t, i.rx, i.ry, 1, i.increment * bi(0.1, bi(0.4, 1, n), n), n), s = Pi(o, null, n);
  if (!n.disableMultiStroke && n.roughness !== 0) {
    let [a] = vs(i.increment, e4, t, i.rx, i.ry, 1.5, 0, n), l = Pi(a, null, n);
    s = s.concat(l);
  }
  return { estimatedPoints: r, opset: { type: "path", ops: s } };
}
function Ho(e4, t, n, i, o, r, s, a, l) {
  let c2 = e4, d = t, u2 = Math.abs(n / 2), p2 = Math.abs(i / 2);
  u2 += O2(u2 * 0.01, l), p2 += O2(p2 * 0.01, l);
  let m = o, f2 = r;
  for (; m < 0; ) m += Math.PI * 2, f2 += Math.PI * 2;
  f2 - m > Math.PI * 2 && (m = 0, f2 = Math.PI * 2);
  let E3 = Math.PI * 2 / l.curveStepCount, h2 = Math.min(E3 / 2, (f2 - m) / 2), g = Ds(h2, c2, d, u2, p2, m, f2, 1, l);
  if (!l.disableMultiStroke) {
    let x2 = Ds(h2, c2, d, u2, p2, m, f2, 1.5, l);
    g.push(...x2);
  }
  return s && (a ? g.push(...ht2(c2, d, c2 + u2 * Math.cos(m), d + p2 * Math.sin(m), l), ...ht2(c2, d, c2 + u2 * Math.cos(f2), d + p2 * Math.sin(f2), l)) : g.push({ op: "lineTo", data: [c2, d] }, { op: "lineTo", data: [c2 + u2 * Math.cos(m), d + p2 * Math.sin(m)] })), { type: "path", ops: g };
}
function _o(e4, t) {
  let n = Yn(Hn(xn2(e4))), i = [], o = [0, 0], r = [0, 0];
  for (let { key: s, data: a } of n) switch (s) {
    case "M": {
      r = [a[0], a[1]], o = [a[0], a[1]];
      break;
    }
    case "L":
      i.push(...ht2(r[0], r[1], a[0], a[1], t)), r = [a[0], a[1]];
      break;
    case "C": {
      let [l, c2, d, u2, p2, m] = a;
      i.push(...Cd(l, c2, d, u2, p2, m, r, t)), r = [p2, m];
      break;
    }
    case "Z":
      i.push(...ht2(r[0], r[1], o[0], o[1], t)), r = [o[0], o[1]];
      break;
  }
  return { type: "path", ops: i };
}
function Si(e4, t) {
  let n = [];
  for (let i of e4) if (i.length) {
    let o = t.maxRandomnessOffset || 0, r = i.length;
    if (r > 2) {
      n.push({ op: "move", data: [i[0][0] + O2(o, t), i[0][1] + O2(o, t)] });
      for (let s = 1; s < r; s++) n.push({ op: "lineTo", data: [i[s][0] + O2(o, t), i[s][1] + O2(o, t)] });
    }
  }
  return { type: "fillPath", ops: n };
}
function on3(e4, t) {
  return Is(t, Sd).fillPolygons(e4, t);
}
function Cs(e4, t, n, i, o, r, s) {
  let a = e4, l = t, c2 = Math.abs(n / 2), d = Math.abs(i / 2);
  c2 += O2(c2 * 0.01, s), d += O2(d * 0.01, s);
  let u2 = o, p2 = r;
  for (; u2 < 0; ) u2 += Math.PI * 2, p2 += Math.PI * 2;
  p2 - u2 > Math.PI * 2 && (u2 = 0, p2 = Math.PI * 2);
  let m = (p2 - u2) / s.curveStepCount, f2 = [];
  for (let E3 = u2; E3 <= p2; E3 = E3 + m) f2.push([a + c2 * Math.cos(E3), l + d * Math.sin(E3)]);
  return f2.push([a + c2 * Math.cos(p2), l + d * Math.sin(p2)]), f2.push([a, l]), on3([f2], s);
}
function Ad(e4, t) {
  return O2(e4, t);
}
function vd(e4, t, n) {
  return bi(e4, t, n);
}
function Dd(e4, t, n, i, o) {
  return ht2(e4, t, n, i, o, true);
}
function Ld(e4) {
  let t = Object.assign({}, e4);
  return t.randomizer = void 0, e4.seed && (t.seed = e4.seed + 1), t;
}
function Bs(e4) {
  return e4.randomizer || (e4.randomizer = new wi(e4.seed || 0)), e4.randomizer.next();
}
function bi(e4, t, n, i = 1) {
  return n.roughness * i * (Bs(n) * (t - e4) + e4);
}
function O2(e4, t, n = 1) {
  return bi(-e4, e4, t, n);
}
function ht2(e4, t, n, i, o, r = false) {
  let s = r ? o.disableMultiStrokeFill : o.disableMultiStroke, a = Ts2(e4, t, n, i, o, true, false);
  if (s) return a;
  let l = Ts2(e4, t, n, i, o, true, true);
  return a.concat(l);
}
function Ts2(e4, t, n, i, o, r, s) {
  let a = Math.pow(e4 - n, 2) + Math.pow(t - i, 2), l = Math.sqrt(a), c2 = 1;
  l < 200 ? c2 = 1 : l > 500 ? c2 = 0.4 : c2 = -16668e-7 * l + 1.233334;
  let d = o.maxRandomnessOffset || 0;
  d * d * 100 > a && (d = l / 10);
  let u2 = d / 2, p2 = 0.2 + Bs(o) * 0.2, m = o.bowing * o.maxRandomnessOffset * (i - t) / 200, f2 = o.bowing * o.maxRandomnessOffset * (e4 - n) / 200;
  m = O2(m, o, c2), f2 = O2(f2, o, c2);
  let E3 = [], h2 = () => O2(u2, o, c2), g = () => O2(d, o, c2), x2 = o.preserveVertices;
  return r && (s ? E3.push({ op: "move", data: [e4 + (x2 ? 0 : h2()), t + (x2 ? 0 : h2())] }) : E3.push({ op: "move", data: [e4 + (x2 ? 0 : O2(d, o, c2)), t + (x2 ? 0 : O2(d, o, c2))] })), s ? E3.push({ op: "bcurveTo", data: [m + e4 + (n - e4) * p2 + h2(), f2 + t + (i - t) * p2 + h2(), m + e4 + 2 * (n - e4) * p2 + h2(), f2 + t + 2 * (i - t) * p2 + h2(), n + (x2 ? 0 : h2()), i + (x2 ? 0 : h2())] }) : E3.push({ op: "bcurveTo", data: [m + e4 + (n - e4) * p2 + g(), f2 + t + (i - t) * p2 + g(), m + e4 + 2 * (n - e4) * p2 + g(), f2 + t + 2 * (i - t) * p2 + g(), n + (x2 ? 0 : g()), i + (x2 ? 0 : g())] }), E3;
}
function As(e4, t, n) {
  let i = [];
  i.push([e4[0][0] + O2(t, n), e4[0][1] + O2(t, n)]), i.push([e4[0][0] + O2(t, n), e4[0][1] + O2(t, n)]);
  for (let o = 1; o < e4.length; o++) i.push([e4[o][0] + O2(t, n), e4[o][1] + O2(t, n)]), o === e4.length - 1 && i.push([e4[o][0] + O2(t, n), e4[o][1] + O2(t, n)]);
  return Pi(i, null, n);
}
function Pi(e4, t, n) {
  let i = e4.length, o = [];
  if (i > 3) {
    let r = [], s = 1 - n.curveTightness;
    o.push({ op: "move", data: [e4[1][0], e4[1][1]] });
    for (let a = 1; a + 2 < i; a++) {
      let l = e4[a];
      r[0] = [l[0], l[1]], r[1] = [l[0] + (s * e4[a + 1][0] - s * e4[a - 1][0]) / 6, l[1] + (s * e4[a + 1][1] - s * e4[a - 1][1]) / 6], r[2] = [e4[a + 1][0] + (s * e4[a][0] - s * e4[a + 2][0]) / 6, e4[a + 1][1] + (s * e4[a][1] - s * e4[a + 2][1]) / 6], r[3] = [e4[a + 1][0], e4[a + 1][1]], o.push({ op: "bcurveTo", data: [r[1][0], r[1][1], r[2][0], r[2][1], r[3][0], r[3][1]] });
    }
    if (t && t.length === 2) {
      let a = n.maxRandomnessOffset;
      o.push({ op: "lineTo", data: [t[0] + O2(a, n), t[1] + O2(a, n)] });
    }
  } else i === 3 ? (o.push({ op: "move", data: [e4[1][0], e4[1][1]] }), o.push({ op: "bcurveTo", data: [e4[1][0], e4[1][1], e4[2][0], e4[2][1], e4[2][0], e4[2][1]] })) : i === 2 && o.push(...ht2(e4[0][0], e4[0][1], e4[1][0], e4[1][1], n));
  return o;
}
function vs(e4, t, n, i, o, r, s, a) {
  let l = a.roughness === 0, c2 = [], d = [];
  if (l) {
    e4 = e4 / 4, d.push([t + i * Math.cos(-e4), n + o * Math.sin(-e4)]);
    for (let u2 = 0; u2 <= Math.PI * 2; u2 = u2 + e4) {
      let p2 = [t + i * Math.cos(u2), n + o * Math.sin(u2)];
      c2.push(p2), d.push(p2);
    }
    d.push([t + i * Math.cos(0), n + o * Math.sin(0)]), d.push([t + i * Math.cos(e4), n + o * Math.sin(e4)]);
  } else {
    let u2 = O2(0.5, a) - Math.PI / 2;
    d.push([O2(r, a) + t + 0.9 * i * Math.cos(u2 - e4), O2(r, a) + n + 0.9 * o * Math.sin(u2 - e4)]);
    let p2 = Math.PI * 2 + u2 - 0.01;
    for (let m = u2; m < p2; m = m + e4) {
      let f2 = [O2(r, a) + t + i * Math.cos(m), O2(r, a) + n + o * Math.sin(m)];
      c2.push(f2), d.push(f2);
    }
    d.push([O2(r, a) + t + i * Math.cos(u2 + Math.PI * 2 + s * 0.5), O2(r, a) + n + o * Math.sin(u2 + Math.PI * 2 + s * 0.5)]), d.push([O2(r, a) + t + 0.98 * i * Math.cos(u2 + s), O2(r, a) + n + 0.98 * o * Math.sin(u2 + s)]), d.push([O2(r, a) + t + 0.9 * i * Math.cos(u2 + s * 0.5), O2(r, a) + n + 0.9 * o * Math.sin(u2 + s * 0.5)]);
  }
  return [d, c2];
}
function Ds(e4, t, n, i, o, r, s, a, l) {
  let c2 = r + O2(0.1, l), d = [];
  d.push([O2(a, l) + t + 0.9 * i * Math.cos(c2 - e4), O2(a, l) + n + 0.9 * o * Math.sin(c2 - e4)]);
  for (let u2 = c2; u2 <= s; u2 = u2 + e4) d.push([O2(a, l) + t + i * Math.cos(u2), O2(a, l) + n + o * Math.sin(u2)]);
  return d.push([t + i * Math.cos(s), n + o * Math.sin(s)]), d.push([t + i * Math.cos(s), n + o * Math.sin(s)]), Pi(d, null, l);
}
function Cd(e4, t, n, i, o, r, s, a) {
  let l = [], c2 = [a.maxRandomnessOffset || 1, (a.maxRandomnessOffset || 1) + 0.3], d = [0, 0], u2 = a.disableMultiStroke ? 1 : 2, p2 = a.preserveVertices;
  for (let m = 0; m < u2; m++) m === 0 ? l.push({ op: "move", data: [s[0], s[1]] }) : l.push({ op: "move", data: [s[0] + (p2 ? 0 : O2(c2[0], a)), s[1] + (p2 ? 0 : O2(c2[0], a))] }), d = p2 ? [o, r] : [o + O2(c2[m], a), r + O2(c2[m], a)], l.push({ op: "bcurveTo", data: [e4 + O2(c2[m], a), t + O2(c2[m], a), n + O2(c2[m], a), i + O2(c2[m], a), d[0], d[1]] });
  return l;
}
P();
function Un(e4) {
  return [...e4];
}
function Gs(e4, t = 0) {
  let n = e4.length;
  if (n < 3) throw new Error("A curve must have at least three points.");
  let i = [];
  if (n === 3) i.push(Un(e4[0]), Un(e4[1]), Un(e4[2]), Un(e4[2]));
  else {
    let o = [];
    o.push(e4[0], e4[0]);
    for (let a = 1; a < e4.length; a++) o.push(e4[a]), a === e4.length - 1 && o.push(e4[a]);
    let r = [], s = 1 - t;
    i.push(Un(o[0]));
    for (let a = 1; a + 2 < o.length; a++) {
      let l = o[a];
      r[0] = [l[0], l[1]], r[1] = [l[0] + (s * o[a + 1][0] - s * o[a - 1][0]) / 6, l[1] + (s * o[a + 1][1] - s * o[a - 1][1]) / 6], r[2] = [o[a + 1][0] + (s * o[a][0] - s * o[a + 2][0]) / 6, o[a + 1][1] + (s * o[a][1] - s * o[a + 2][1]) / 6], r[3] = [o[a + 1][0], o[a + 1][1]], i.push(r[1], r[2], r[3]);
    }
  }
  return i;
}
P();
function Bd(e4, t) {
  return Math.sqrt(Mi(e4, t));
}
function Mi(e4, t) {
  return Math.pow(e4[0] - t[0], 2) + Math.pow(e4[1] - t[1], 2);
}
function Gd(e4, t, n) {
  let i = Mi(t, n);
  if (i === 0) return Mi(e4, t);
  let o = ((e4[0] - t[0]) * (n[0] - t[0]) + (e4[1] - t[1]) * (n[1] - t[1])) / i;
  return o = Math.max(0, Math.min(1, o)), Mi(e4, rn3(t, n, o));
}
function rn3(e4, t, n) {
  return [e4[0] + (t[0] - e4[0]) * n, e4[1] + (t[1] - e4[1]) * n];
}
function Od(e4, t) {
  let n = e4[t + 0], i = e4[t + 1], o = e4[t + 2], r = e4[t + 3], s = 3 * i[0] - 2 * n[0] - r[0];
  s *= s;
  let a = 3 * i[1] - 2 * n[1] - r[1];
  a *= a;
  let l = 3 * o[0] - 2 * r[0] - n[0];
  l *= l;
  let c2 = 3 * o[1] - 2 * r[1] - n[1];
  return c2 *= c2, s < l && (s = l), a < c2 && (a = c2), s + a;
}
function Yo(e4, t, n, i) {
  let o = i || [];
  if (Od(e4, t) < n) {
    let r = e4[t + 0];
    o.length ? Bd(o[o.length - 1], r) > 1 && o.push(r) : o.push(r), o.push(e4[t + 3]);
  } else {
    let s = e4[t + 0], a = e4[t + 1], l = e4[t + 2], c2 = e4[t + 3], d = rn3(s, a, 0.5), u2 = rn3(a, l, 0.5), p2 = rn3(l, c2, 0.5), m = rn3(d, u2, 0.5), f2 = rn3(u2, p2, 0.5), E3 = rn3(m, f2, 0.5);
    Yo([s, d, m, E3], 0, n, o), Yo([E3, f2, p2, c2], 0, n, o);
  }
  return o;
}
function Wn2(e4, t) {
  return Ti(e4, 0, e4.length, t);
}
function Ti(e4, t, n, i, o) {
  let r = o || [], s = e4[t], a = e4[n - 1], l = 0, c2 = 1;
  for (let d = t + 1; d < n - 1; ++d) {
    let u2 = Gd(e4[d], s, a);
    u2 > l && (l = u2, c2 = d);
  }
  return Math.sqrt(l) > i ? (Ti(e4, t, c2 + 1, i, r), Ti(e4, c2, n, i, r)) : (r.length || r.push(s), r.push(a)), r;
}
function Et(e4, t = 0.15, n) {
  let i = [], o = (e4.length - 1) / 3;
  for (let r = 0; r < o; r++) {
    let s = r * 3;
    Yo(e4, s, t, i);
  }
  return n && n > 0 ? Ti(i, 0, i.length, n) : i;
}
P();
function Os(e4, t, n) {
  let i = xn2(e4), o = Yn(Hn(i)), r = [], s = [], a = [0, 0], l = [], c2 = () => {
    l.length >= 4 && s.push(...Et(l, t)), l = [];
  }, d = () => {
    c2(), s.length && (r.push(s), s = []);
  };
  for (let { key: p2, data: m } of o) switch (p2) {
    case "M":
      d(), a = [m[0], m[1]], s.push(a);
      break;
    case "L":
      c2(), s.push([m[0], m[1]]);
      break;
    case "C":
      if (!l.length) {
        let f2 = s.length ? s[s.length - 1] : a;
        l.push([f2[0], f2[1]]);
      }
      l.push([m[0], m[1]]), l.push([m[2], m[3]]), l.push([m[4], m[5]]);
      break;
    case "Z":
      c2(), s.push([a[0], a[1]]);
      break;
  }
  if (d(), !n) return r;
  let u2 = [];
  for (let p2 of r) {
    let m = Wn2(p2, n);
    m.length && u2.push(m);
  }
  return u2;
}
var Ne2 = "none";
var Ue2 = class {
  constructor(t) {
    this.defaultOptions = { maxRandomnessOffset: 2, roughness: 1, bowing: 1, stroke: "#000", strokeWidth: 1, curveTightness: 0, curveFitting: 0.95, curveStepCount: 9, fillStyle: "hachure", fillWeight: -1, hachureAngle: -41, hachureGap: -1, dashOffset: -1, dashGap: -1, zigzagOffset: -1, seed: 0, disableMultiStroke: false, disableMultiStrokeFill: false, preserveVertices: false, fillShapeRoughnessGain: 0.8 }, this.config = t || {}, this.config.options && (this.defaultOptions = this._o(this.config.options));
  }
  static newSeed() {
    return Ss();
  }
  _o(t) {
    return t ? Object.assign({}, this.defaultOptions, t) : this.defaultOptions;
  }
  _d(t, n, i) {
    return { shape: t, sets: n || [], options: i || this.defaultOptions };
  }
  line(t, n, i, o, r) {
    let s = this._o(r);
    return this._d("line", [Fo2(t, n, i, o, s)], s);
  }
  rectangle(t, n, i, o, r) {
    let s = this._o(r), a = [], l = Ls(t, n, i, o, s);
    if (s.fill) {
      let c2 = [[t, n], [t + i, n], [t + i, n + o], [t, n + o]];
      s.fillStyle === "solid" ? a.push(Si([c2], s)) : a.push(on3([c2], s));
    }
    return s.stroke !== Ne2 && a.push(l), this._d("rectangle", a, s);
  }
  ellipse(t, n, i, o, r) {
    let s = this._o(r), a = [], l = zo(i, o, s), c2 = Ii(t, n, s, l);
    if (s.fill) if (s.fillStyle === "solid") {
      let d = Ii(t, n, s, l).opset;
      d.type = "fillPath", a.push(d);
    } else a.push(on3([c2.estimatedPoints], s));
    return s.stroke !== Ne2 && a.push(c2.opset), this._d("ellipse", a, s);
  }
  circle(t, n, i, o) {
    let r = this.ellipse(t, n, i, i, o);
    return r.shape = "circle", r;
  }
  linearPath(t, n) {
    let i = this._o(n);
    return this._d("linearPath", [Xn2(t, false, i)], i);
  }
  arc(t, n, i, o, r, s, a = false, l) {
    let c2 = this._o(l), d = [], u2 = Ho(t, n, i, o, r, s, a, true, c2);
    if (a && c2.fill) if (c2.fillStyle === "solid") {
      let p2 = Object.assign({}, c2);
      p2.disableMultiStroke = true;
      let m = Ho(t, n, i, o, r, s, true, false, p2);
      m.type = "fillPath", d.push(m);
    } else d.push(Cs(t, n, i, o, r, s, c2));
    return c2.stroke !== Ne2 && d.push(u2), this._d("arc", d, c2);
  }
  curve(t, n) {
    let i = this._o(n), o = [], r = No(t, i);
    if (i.fill && i.fill !== Ne2 && t.length >= 3) if (i.fillStyle === "solid") {
      let s = No(t, Object.assign(Object.assign({}, i), { disableMultiStroke: true, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
      o.push({ type: "fillPath", ops: this._mergedShape(s.ops) });
    } else {
      let s = Gs(t), a = Et(s, 10, (1 + i.roughness) / 2);
      o.push(on3([a], i));
    }
    return i.stroke !== Ne2 && o.push(r), this._d("curve", o, i);
  }
  polygon(t, n) {
    let i = this._o(n), o = [], r = Xn2(t, true, i);
    return i.fill && (i.fillStyle === "solid" ? o.push(Si([t], i)) : o.push(on3([t], i))), i.stroke !== Ne2 && o.push(r), this._d("polygon", o, i);
  }
  path(t, n) {
    let i = this._o(n), o = [];
    if (!t) return this._d("path", o, i);
    t = (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
    let r = i.fill && i.fill !== "transparent" && i.fill !== Ne2, s = i.stroke !== Ne2, a = !!(i.simplification && i.simplification < 1), l = a ? 4 - 4 * (i.simplification || 1) : (1 + i.roughness) / 2, c2 = Os(t, 1, l), d = _o(t, i);
    if (r) if (i.fillStyle === "solid") if (c2.length === 1) {
      let u2 = _o(t, Object.assign(Object.assign({}, i), { disableMultiStroke: true, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
      o.push({ type: "fillPath", ops: this._mergedShape(u2.ops) });
    } else o.push(Si(c2, i));
    else o.push(on3(c2, i));
    return s && (a ? c2.forEach((u2) => {
      o.push(Xn2(u2, false, i));
    }) : o.push(d)), this._d("path", o, i);
  }
  opsToPath(t, n) {
    let i = "";
    for (let o of t.ops) {
      let r = typeof n == "number" && n >= 0 ? o.data.map((s) => +s.toFixed(n)) : o.data;
      switch (o.op) {
        case "move":
          i += `M${r[0]} ${r[1]} `;
          break;
        case "bcurveTo":
          i += `C${r[0]} ${r[1]}, ${r[2]} ${r[3]}, ${r[4]} ${r[5]} `;
          break;
        case "lineTo":
          i += `L${r[0]} ${r[1]} `;
          break;
      }
    }
    return i.trim();
  }
  toPaths(t) {
    let n = t.sets || [], i = t.options || this.defaultOptions, o = [];
    for (let r of n) {
      let s = null;
      switch (r.type) {
        case "path":
          s = { d: this.opsToPath(r), stroke: i.stroke, strokeWidth: i.strokeWidth, fill: Ne2 };
          break;
        case "fillPath":
          s = { d: this.opsToPath(r), stroke: Ne2, strokeWidth: 0, fill: i.fill || Ne2 };
          break;
        case "fillSketch":
          s = this.fillSketch(r, i);
          break;
      }
      s && o.push(s);
    }
    return o;
  }
  fillSketch(t, n) {
    let i = n.fillWeight;
    return i < 0 && (i = n.strokeWidth / 2), { d: this.opsToPath(t), stroke: n.fill || Ne2, strokeWidth: i, fill: Ne2 };
  }
  _mergedShape(t) {
    return t.filter((n, i) => i === 0 ? true : n.op !== "move");
  }
};
var Ai = class {
  constructor(t, n) {
    this.canvas = t, this.ctx = this.canvas.getContext("2d"), this.gen = new Ue2(n);
  }
  draw(t) {
    let n = t.sets || [], i = t.options || this.getDefaultOptions(), o = this.ctx, r = t.options.fixedDecimalPlaceDigits;
    for (let s of n) switch (s.type) {
      case "path":
        o.save(), o.strokeStyle = i.stroke === "none" ? "transparent" : i.stroke, o.lineWidth = i.strokeWidth, i.strokeLineDash && o.setLineDash(i.strokeLineDash), i.strokeLineDashOffset && (o.lineDashOffset = i.strokeLineDashOffset), this._drawToContext(o, s, r), o.restore();
        break;
      case "fillPath": {
        o.save(), o.fillStyle = i.fill || "";
        let a = t.shape === "curve" || t.shape === "polygon" || t.shape === "path" ? "evenodd" : "nonzero";
        this._drawToContext(o, s, r, a), o.restore();
        break;
      }
      case "fillSketch":
        this.fillSketch(o, s, i);
        break;
    }
  }
  fillSketch(t, n, i) {
    let o = i.fillWeight;
    o < 0 && (o = i.strokeWidth / 2), t.save(), i.fillLineDash && t.setLineDash(i.fillLineDash), i.fillLineDashOffset && (t.lineDashOffset = i.fillLineDashOffset), t.strokeStyle = i.fill || "", t.lineWidth = o, this._drawToContext(t, n, i.fixedDecimalPlaceDigits), t.restore();
  }
  _drawToContext(t, n, i, o = "nonzero") {
    t.beginPath();
    for (let r of n.ops) {
      let s = typeof i == "number" && i >= 0 ? r.data.map((a) => +a.toFixed(i)) : r.data;
      switch (r.op) {
        case "move":
          t.moveTo(s[0], s[1]);
          break;
        case "bcurveTo":
          t.bezierCurveTo(s[0], s[1], s[2], s[3], s[4], s[5]);
          break;
        case "lineTo":
          t.lineTo(s[0], s[1]);
          break;
      }
    }
    n.type === "fillPath" ? t.fill(o) : t.stroke();
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(t, n, i, o, r) {
    let s = this.gen.line(t, n, i, o, r);
    return this.draw(s), s;
  }
  rectangle(t, n, i, o, r) {
    let s = this.gen.rectangle(t, n, i, o, r);
    return this.draw(s), s;
  }
  ellipse(t, n, i, o, r) {
    let s = this.gen.ellipse(t, n, i, o, r);
    return this.draw(s), s;
  }
  circle(t, n, i, o) {
    let r = this.gen.circle(t, n, i, o);
    return this.draw(r), r;
  }
  linearPath(t, n) {
    let i = this.gen.linearPath(t, n);
    return this.draw(i), i;
  }
  polygon(t, n) {
    let i = this.gen.polygon(t, n);
    return this.draw(i), i;
  }
  arc(t, n, i, o, r, s, a = false, l) {
    let c2 = this.gen.arc(t, n, i, o, r, s, a, l);
    return this.draw(c2), c2;
  }
  curve(t, n) {
    let i = this.gen.curve(t, n);
    return this.draw(i), i;
  }
  path(t, n) {
    let i = this.gen.path(t, n);
    return this.draw(i), i;
  }
};
P();
P();
var jn2 = "http://www.w3.org/2000/svg";
var vi = class {
  constructor(t, n) {
    this.svg = t, this.gen = new Ue2(n);
  }
  draw(t) {
    let n = t.sets || [], i = t.options || this.getDefaultOptions(), o = this.svg.ownerDocument || window.document, r = o.createElementNS(jn2, "g"), s = t.options.fixedDecimalPlaceDigits;
    for (let a of n) {
      let l = null;
      switch (a.type) {
        case "path": {
          l = o.createElementNS(jn2, "path"), l.setAttribute("d", this.opsToPath(a, s)), l.setAttribute("stroke", i.stroke), l.setAttribute("stroke-width", i.strokeWidth + ""), l.setAttribute("fill", "none"), i.strokeLineDash && l.setAttribute("stroke-dasharray", i.strokeLineDash.join(" ").trim()), i.strokeLineDashOffset && l.setAttribute("stroke-dashoffset", `${i.strokeLineDashOffset}`);
          break;
        }
        case "fillPath": {
          l = o.createElementNS(jn2, "path"), l.setAttribute("d", this.opsToPath(a, s)), l.setAttribute("stroke", "none"), l.setAttribute("stroke-width", "0"), l.setAttribute("fill", i.fill || ""), (t.shape === "curve" || t.shape === "polygon") && l.setAttribute("fill-rule", "evenodd");
          break;
        }
        case "fillSketch": {
          l = this.fillSketch(o, a, i);
          break;
        }
      }
      l && r.appendChild(l);
    }
    return r;
  }
  fillSketch(t, n, i) {
    let o = i.fillWeight;
    o < 0 && (o = i.strokeWidth / 2);
    let r = t.createElementNS(jn2, "path");
    return r.setAttribute("d", this.opsToPath(n, i.fixedDecimalPlaceDigits)), r.setAttribute("stroke", i.fill || ""), r.setAttribute("stroke-width", o + ""), r.setAttribute("fill", "none"), i.fillLineDash && r.setAttribute("stroke-dasharray", i.fillLineDash.join(" ").trim()), i.fillLineDashOffset && r.setAttribute("stroke-dashoffset", `${i.fillLineDashOffset}`), r;
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  opsToPath(t, n) {
    return this.gen.opsToPath(t, n);
  }
  line(t, n, i, o, r) {
    let s = this.gen.line(t, n, i, o, r);
    return this.draw(s);
  }
  rectangle(t, n, i, o, r) {
    let s = this.gen.rectangle(t, n, i, o, r);
    return this.draw(s);
  }
  ellipse(t, n, i, o, r) {
    let s = this.gen.ellipse(t, n, i, o, r);
    return this.draw(s);
  }
  circle(t, n, i, o) {
    let r = this.gen.circle(t, n, i, o);
    return this.draw(r);
  }
  linearPath(t, n) {
    let i = this.gen.linearPath(t, n);
    return this.draw(i);
  }
  polygon(t, n) {
    let i = this.gen.polygon(t, n);
    return this.draw(i);
  }
  arc(t, n, i, o, r, s, a = false, l) {
    let c2 = this.gen.arc(t, n, i, o, r, s, a, l);
    return this.draw(c2);
  }
  curve(t, n) {
    let i = this.gen.curve(t, n);
    return this.draw(i);
  }
  path(t, n) {
    let i = this.gen.path(t, n);
    return this.draw(i);
  }
};
var sn2 = { canvas(e4, t) {
  return new Ai(e4, t);
}, svg(e4, t) {
  return new vi(e4, t);
}, generator(e4) {
  return new Ue2(e4);
}, newSeed() {
  return Ue2.newSeed();
} };
P();
var gt2 = (e4) => {
  if (!e4) return [];
  for (let t of e4.sets) if (t.type === "path") return t.ops;
  return e4.sets[0].ops;
};
P();
P();
P();
function _s(e4, t, n, i = (o) => o) {
  return e4 * i(0.5 - t * (0.5 - n));
}
function Ud(e4) {
  return [-e4[0], -e4[1]];
}
function Ke2(e4, t) {
  return [e4[0] + t[0], e4[1] + t[1]];
}
function We(e4, t) {
  return [e4[0] - t[0], e4[1] - t[1]];
}
function qe(e4, t) {
  return [e4[0] * t, e4[1] * t];
}
function Wd(e4, t) {
  return [e4[0] / t, e4[1] / t];
}
function Vn(e4) {
  return [e4[1], -e4[0]];
}
function Ys(e4, t) {
  return e4[0] * t[0] + e4[1] * t[1];
}
function jd(e4, t) {
  return e4[0] === t[0] && e4[1] === t[1];
}
function Vd(e4) {
  return Math.hypot(e4[0], e4[1]);
}
function $d(e4) {
  return e4[0] * e4[0] + e4[1] * e4[1];
}
function Xs(e4, t) {
  return $d(We(e4, t));
}
function js(e4) {
  return Wd(e4, Vd(e4));
}
function Zd(e4, t) {
  return Math.hypot(e4[1] - t[1], e4[0] - t[0]);
}
function $n2(e4, t, n) {
  let i = Math.sin(n), o = Math.cos(n), r = e4[0] - t[0], s = e4[1] - t[1], a = r * o - s * i, l = r * i + s * o;
  return [a + t[0], l + t[1]];
}
function Uo(e4, t, n) {
  return Ke2(e4, qe(We(t, e4), n));
}
function Us(e4, t, n) {
  return Ke2(e4, qe(t, n));
}
var { min: wn, PI: qd } = Math;
var Ws = 0.275;
var Zn2 = qd + 1e-4;
function Kd(e4, t = {}) {
  let { size: n = 16, smoothing: i = 0.5, thinning: o = 0.5, simulatePressure: r = true, easing: s = (S2) => S2, start: a = {}, end: l = {}, last: c2 = false } = t, { cap: d = true, easing: u2 = (S2) => S2 * (2 - S2) } = a, { cap: p2 = true, easing: m = (S2) => --S2 * S2 * S2 + 1 } = l;
  if (e4.length === 0 || n <= 0) return [];
  let f2 = e4[e4.length - 1].runningLength, E3 = a.taper === false ? 0 : a.taper === true ? Math.max(n, f2) : a.taper, h2 = l.taper === false ? 0 : l.taper === true ? Math.max(n, f2) : l.taper, g = Math.pow(n * i, 2), x2 = [], y3 = [], b = e4.slice(0, 10).reduce((S2, K2) => {
    let j3 = K2.pressure;
    if (r) {
      let te = wn(1, K2.distance / n), en2 = wn(1, 1 - te);
      j3 = wn(1, S2 + (en2 - S2) * (te * Ws));
    }
    return (S2 + j3) / 2;
  }, e4[0].pressure), w3 = _s(n, o, e4[e4.length - 1].pressure, s), I3, M3 = e4[0].vector, v2 = e4[0].point, T3 = v2, F3 = v2, C3 = T3, R2 = false;
  for (let S2 = 0; S2 < e4.length; S2++) {
    let { pressure: K2 } = e4[S2], { point: j3, vector: te, distance: en2, runningLength: ot2 } = e4[S2];
    if (S2 < e4.length - 1 && f2 - ot2 < 3) continue;
    if (o) {
      if (r) {
        let ge2 = wn(1, en2 / n), nn3 = wn(1, 1 - ge2);
        K2 = wn(1, b + (nn3 - b) * (ge2 * Ws));
      }
      w3 = _s(n, o, K2, s);
    } else w3 = n / 2;
    I3 === void 0 && (I3 = w3);
    let gn = ot2 < E3 ? u2(ot2 / E3) : 1, Go2 = f2 - ot2 < h2 ? m((f2 - ot2) / h2) : 1;
    w3 = Math.max(0.01, w3 * Math.min(gn, Go2));
    let pi = (S2 < e4.length - 1 ? e4[S2 + 1] : e4[S2]).vector, zn2 = S2 < e4.length - 1 ? Ys(te, pi) : 1, Oo2 = Ys(te, M3) < 0 && !R2, mi = zn2 !== null && zn2 < 0;
    if (Oo2 || mi) {
      let ge2 = qe(Vn(M3), w3);
      for (let nn3 = 1 / 13, ve = 0; ve <= 1; ve += nn3) F3 = $n2(We(j3, ge2), j3, Zn2 * ve), x2.push(F3), C3 = $n2(Ke2(j3, ge2), j3, Zn2 * -ve), y3.push(C3);
      v2 = F3, T3 = C3, mi && (R2 = true);
      continue;
    }
    if (R2 = false, S2 === e4.length - 1) {
      let ge2 = qe(Vn(te), w3);
      x2.push(We(j3, ge2)), y3.push(Ke2(j3, ge2));
      continue;
    }
    let tn2 = qe(Vn(Uo(pi, te, zn2)), w3);
    F3 = We(j3, tn2), (S2 <= 1 || Xs(v2, F3) > g) && (x2.push(F3), v2 = F3), C3 = Ke2(j3, tn2), (S2 <= 1 || Xs(T3, C3) > g) && (y3.push(C3), T3 = C3), b = K2, M3 = te;
  }
  let L3 = e4[0].point.slice(0, 2), W = e4.length > 1 ? e4[e4.length - 1].point.slice(0, 2) : Ke2(e4[0].point, [1, 1]), N2 = [], ee2 = [];
  if (e4.length === 1) {
    if (!(E3 || h2) || c2) {
      let S2 = Us(L3, js(Vn(We(L3, W))), -(I3 || w3)), K2 = [];
      for (let j3 = 1 / 13, te = j3; te <= 1; te += j3) K2.push($n2(S2, L3, Zn2 * 2 * te));
      return K2;
    }
  } else {
    if (!(E3 || h2 && e4.length === 1)) if (d) for (let K2 = 1 / 13, j3 = K2; j3 <= 1; j3 += K2) {
      let te = $n2(y3[0], L3, Zn2 * j3);
      N2.push(te);
    }
    else {
      let K2 = We(x2[0], y3[0]), j3 = qe(K2, 0.5), te = qe(K2, 0.51);
      N2.push(We(L3, j3), We(L3, te), Ke2(L3, te), Ke2(L3, j3));
    }
    let S2 = Vn(Ud(e4[e4.length - 1].vector));
    if (h2 || E3 && e4.length === 1) ee2.push(W);
    else if (p2) {
      let K2 = Us(W, S2, w3);
      for (let j3 = 1 / 29, te = j3; te < 1; te += j3) ee2.push($n2(K2, W, Zn2 * 3 * te));
    } else ee2.push(Ke2(W, qe(S2, w3)), Ke2(W, qe(S2, w3 * 0.99)), We(W, qe(S2, w3 * 0.99)), We(W, qe(S2, w3)));
  }
  return x2.concat(ee2, y3.reverse(), N2);
}
function Qd(e4, t = {}) {
  var n;
  let { streamline: i = 0.5, size: o = 16, last: r = false } = t;
  if (e4.length === 0) return [];
  let s = 0.15 + (1 - i) * 0.85, a = Array.isArray(e4[0]) ? e4 : e4.map(({ x: m, y: f2, pressure: E3 = 0.5 }) => [m, f2, E3]);
  if (a.length === 2) {
    let m = a[1];
    a = a.slice(0, -1);
    for (let f2 = 1; f2 < 5; f2++) a.push(Uo(a[0], m, f2 / 4));
  }
  a.length === 1 && (a = [...a, [...Ke2(a[0], [1, 1]), ...a[0].slice(2)]]);
  let l = [{ point: [a[0][0], a[0][1]], pressure: a[0][2] >= 0 ? a[0][2] : 0.25, vector: [1, 1], distance: 0, runningLength: 0 }], c2 = false, d = 0, u2 = l[0], p2 = a.length - 1;
  for (let m = 1; m < a.length; m++) {
    let f2 = r && m === p2 ? a[m].slice(0, 2) : Uo(u2.point, a[m], s);
    if (jd(u2.point, f2)) continue;
    let E3 = Zd(f2, u2.point);
    if (d += E3, m < p2 && !c2) {
      if (d < o) continue;
      c2 = true;
    }
    u2 = { point: f2, pressure: a[m][2] >= 0 ? a[m][2] : 0.5, vector: js(We(u2.point, f2)), distance: E3, runningLength: d }, l.push(u2);
  }
  return l[0].vector = ((n = l[1]) == null ? void 0 : n.vector) || [0, 0], l;
}
function Vs(e4, t = {}) {
  return Kd(Qd(e4, t), t);
}
P();
P();
P();
P();
P();
var qn2 = /* @__PURE__ */ new WeakMap();
var Zo = (e4, t) => {
  let n = qn2.get(e4);
  if (!n) return;
  let { version: i, shapes: o } = n;
  if (i !== e4.version) {
    qn2.delete(e4);
    return;
  }
  return o.get(t);
};
var qo = (e4, t, n) => {
  let i = qn2.get(e4);
  if (!i) {
    qn2.set(e4, { version: e4.version, shapes: /* @__PURE__ */ new Map([[n, t]]) });
    return;
  }
  let { version: o, shapes: r } = i;
  if (o !== e4.version) {
    qn2.set(e4, { version: e4.version, shapes: /* @__PURE__ */ new Map([[n, t]]) });
    return;
  }
  r.set(n, t);
};
function Ci(e4) {
  let t = Zo(e4, 0);
  if (t) return t;
  let n = ta(e4), i = [], o = [];
  for (let s = 0; s < n.length; s += 1) {
    let a = n[s], l = n[s - 1] && Tt(n[s - 1].data.slice(-2));
    switch (a.op) {
      case "move":
        continue;
      case "lineTo":
        if (!l) throw new Error("prevPoint is undefined");
        i.push(v(p(e4.x + l[0], e4.y + l[1]), p(e4.x + a.data[0], e4.y + a.data[1])));
        continue;
      case "bcurveTo":
        if (!l) throw new Error("prevPoint is undefined");
        o.push(tt(p(e4.x + l[0], e4.y + l[1]), p(e4.x + a.data[0], e4.y + a.data[1]), p(e4.x + a.data[2], e4.y + a.data[3]), p(e4.x + a.data[4], e4.y + a.data[5])));
        continue;
      default:
        console.error("Unknown op type", a.op);
    }
  }
  let r = [i, o];
  return qo(e4, r, 0), r;
}
function yn(e4, t = 0) {
  let n = Zo(e4, t);
  if (n) return n;
  let i = yt3(Math.min(e4.width, e4.height), e4);
  i === 0 && (i = 0.01);
  let o = bt(p(e4.x, e4.y), p(e4.x + e4.width, e4.y + e4.height)), r = v(p(o[0][0] + i, o[0][1]), p(o[1][0] - i, o[0][1])), s = v(p(o[1][0], o[0][1] + i), p(o[1][0], o[1][1] - i)), a = v(p(o[0][0] + i, o[1][1]), p(o[1][0] - i, o[1][1])), l = v(p(o[0][0], o[1][1] - i), p(o[0][0], o[0][1] + i)), c2 = [tt(l[1], p(l[1][0] + 2 / 3 * (o[0][0] - l[1][0]), l[1][1] + 2 / 3 * (o[0][1] - l[1][1])), p(r[0][0] + 2 / 3 * (o[0][0] - r[0][0]), r[0][1] + 2 / 3 * (o[0][1] - r[0][1])), r[0]), tt(r[1], p(r[1][0] + 2 / 3 * (o[1][0] - r[1][0]), r[1][1] + 2 / 3 * (o[0][1] - r[1][1])), p(s[0][0] + 2 / 3 * (o[1][0] - s[0][0]), s[0][1] + 2 / 3 * (o[0][1] - s[0][1])), s[0]), tt(s[1], p(s[1][0] + 2 / 3 * (o[1][0] - s[1][0]), s[1][1] + 2 / 3 * (o[1][1] - s[1][1])), p(a[1][0] + 2 / 3 * (o[1][0] - a[1][0]), a[1][1] + 2 / 3 * (o[1][1] - a[1][1])), a[1]), tt(a[0], p(a[0][0] + 2 / 3 * (o[0][0] - a[0][0]), a[0][1] + 2 / 3 * (o[1][1] - a[0][1])), p(l[0][0] + 2 / 3 * (o[0][0] - l[0][0]), l[0][1] + 2 / 3 * (o[1][1] - l[0][1])), l[0])], d = t > 0 ? c2.map((m) => nn(on(m, t))) : [[c2[0]], [c2[1]], [c2[2]], [c2[3]]], p2 = [[v(d[0][d[0].length - 1][3], d[1][0][0]), v(d[1][d[1].length - 1][3], d[2][0][0]), v(d[2][d[2].length - 1][3], d[3][0][0]), v(d[3][d[3].length - 1][3], d[0][0][0])], d.flat()];
  return qo(e4, p2, t), p2;
}
function bn(e4, t = 0) {
  let n = Zo(e4, t);
  if (n) return n;
  let [i, o, r, s, a, l, c2, d] = Bi(e4), u2 = e4.roundness ? yt3(Math.abs(i - c2), e4) : (i - c2) * 0.01, p2 = e4.roundness ? yt3(Math.abs(s - o), e4) : (s - o) * 0.01, [m, f2, E3, h2] = [p(e4.x + i, e4.y + o), p(e4.x + r, e4.y + s), p(e4.x + a, e4.y + l), p(e4.x + c2, e4.y + d)], g = [tt(p(f2[0] - u2, f2[1] - p2), f2, f2, p(f2[0] - u2, f2[1] + p2)), tt(p(E3[0] + u2, E3[1] - p2), E3, E3, p(E3[0] - u2, E3[1] - p2)), tt(p(h2[0] + u2, h2[1] + p2), h2, h2, p(h2[0] + u2, h2[1] - p2)), tt(p(m[0] - u2, m[1] + p2), m, m, p(m[0] + u2, m[1] + p2))], x2 = t > 0 ? g.map((w3) => nn(on(w3, t))) : [[g[0]], [g[1]], [g[2]], [g[3]]], b = [[v(x2[0][x2[0].length - 1][3], x2[1][0][0]), v(x2[1][x2[1].length - 1][3], x2[2][0][0]), v(x2[2][x2[2].length - 1][3], x2[3][0][0]), v(x2[3][x2[3].length - 1][3], x2[0][0][0])], x2.flat()];
  return qo(e4, b, t), b;
}
var an2 = (e4, t = 1) => {
  if (e4.length >= 3) {
    let [n, i] = [e4[0], e4[e4.length - 1]];
    return _(n, i) <= Gt / t;
  }
  return false;
};
var yt3 = (e4, t) => {
  if (t.roundness?.type === tr.PROPORTIONAL_RADIUS || t.roundness?.type === tr.LEGACY) return e4 * Jn;
  if (t.roundness?.type === tr.ADAPTIVE_RADIUS) {
    let n = t.roundness?.value ?? er, i = n / Jn;
    return e4 <= i ? e4 * Jn : n;
  }
  return 0;
};
P();
var ia = (e4) => !!e4 && e4.type === "embeddable";
var Gi = (e4) => !!e4 && e4.type === "iframe";
var Oi = (e4) => !!e4 && (e4.type === "iframe" || e4.type === "embeddable");
var ne2 = (e4) => e4 != null && e4.type === "text";
var V2 = (e4) => e4 != null && (e4.type === "frame" || e4.type === "magicframe");
var Se2 = (e4) => e4 != null && lu(e4.type);
var lu = (e4) => e4 === "freedraw";
var U2 = (e4) => e4 != null && Ko2(e4.type);
var ln = (e4) => e4 != null && e4.type === "line";
var _2 = (e4) => e4 != null && e4.type === "arrow";
var G = (e4) => _2(e4) && e4.elbowed;
var Ko2 = (e4) => e4 === "arrow" || e4 === "line";
var Qo = (e4, t = true) => e4 != null && (!e4.locked || t === true) && uu(e4.type);
var uu = (e4) => e4 === "arrow";
var Le2 = (e4, t = true) => e4 != null && (!e4.locked || t === true) && (e4.type === "rectangle" || e4.type === "diamond" || e4.type === "ellipse" || e4.type === "image" || e4.type === "iframe" || e4.type === "embeddable" || e4.type === "frame" || e4.type === "magicframe" || e4.type === "text" && !e4.containerId);
var ra = (e4) => e4 != null && (e4.type === "rectangle" || e4.type === "diamond" || e4.type === "image" || e4.type === "iframe" || e4.type === "embeddable" || e4.type === "frame" || e4.type === "magicframe" || e4.type === "text" && !e4.containerId);
var pu = (e4, t = true) => e4 != null && (!e4.locked || t === true) && (e4.type === "rectangle" || e4.type === "diamond" || e4.type === "ellipse" || _2(e4));
var st2 = (e4) => pu(e4) && !!e4.boundElements?.some(({ type: t }) => t === "text");
var fe2 = (e4) => e4 !== null && "containerId" in e4 && e4.containerId !== null && ne2(e4);
var Qn2 = (e4) => Object.hasOwn(e4, "fixedPoint") && e4.fixedPoint != null;
var la = (e4) => e4.length > 3 || e4.length === 3 && !A(e4[0], e4[e4.length - 1]);
P();
P();
var Jn2 = {};
var da = (e4) => {
  Jn2[e4] && delete Jn2[e4];
};
P();
var Qe2 = (e4, t, n) => {
  let i = e4.split(`
`).map((a) => a || " ").join(`
`), o = parseFloat(t), r = xu(i, o, n);
  return { width: fa(i, t), height: r };
};
var ua = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".toLocaleUpperCase();
var tr2 = (e4) => us(e4).replace(/\t/g, "        ");
var nr = (e4) => tr2(e4).split(`
`);
var zi = (e4, t) => e4 * t;
var Ri;
var Rx = (e4) => {
  Ri = e4;
};
var er2 = class {
  canvas;
  constructor() {
    this.canvas = document.createElement("canvas");
  }
  getLineWidth(t, n) {
    let i = this.canvas.getContext("2d");
    i.font = n;
    let r = i.measureText(t).width;
    return D() ? r * 10 : r;
  }
};
var Ht = (e4, t) => (Ri || (Ri = new er2()), Ri.getLineWidth(e4, t));
var fa = (e4, t) => {
  let n = nr(e4), i = 0;
  return n.forEach((o) => {
    i = Math.max(i, Ht(o, t));
  }), i;
};
var xu = (e4, t, n) => {
  let i = nr(e4).length;
  return zi(t, n) * i;
};
var Pn = /* @__PURE__ */ (() => {
  let e4 = {};
  return { calculate: (o, r) => {
    let s = o.charCodeAt(0);
    if (e4[r] || (e4[r] = []), !e4[r][s]) {
      let a = Ht(o, r);
      e4[r][s] = a;
    }
    return e4[r][s];
  }, getCache: (o) => e4[o], clearCache: (o) => {
    e4[o] = [];
  } };
})();
P();
var Hi;
var or;
var Pu = () => {
  if (!Hi) try {
    Hi = Su();
  } catch {
    Hi = Iu();
  }
  return Hi;
};
var rr2 = () => (or || (or = Mu()), or);
var je2 = { WHITESPACE: /\s/u, HYPHEN: /-/u, OPENING: /<\(\[\{/u, CLOSING: />\)\]\}.,:;!\?…\//u };
var bt2 = { CHAR: /\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}｀＇＾〃〰〆＃＆＊＋－ー／＼＝｜￤〒￢￣/u, OPENING: /（［｛〈《｟｢「『【〖〔〘〚＜〝/u, CLOSING: /）］｝〉》｠｣」』】〗〕〙〛＞。．，、〟‥？！：；・〜〞/u, CURRENCY: /￥￦￡￠＄/u };
var cn = { FLAG: /\p{RI}\p{RI}/u, JOINER: /(?:\p{Emoji_Modifier}|\uFE0F\u20E3?|[\u{E0020}-\u{E007E}]+\u{E007F})?/u, ZWJ: /\u200D/u, ANY: /[\p{Emoji}]/u, MOST: /[\p{Extended_Pictographic}\p{Emoji_Presentation}]/u };
var Iu = () => Q2.or(rr2(), de.On(je2.HYPHEN, je2.WHITESPACE, bt2.CHAR));
var Su = () => Q2.or(rr2(), de.Before(je2.WHITESPACE).Build(), de.After(je2.WHITESPACE, je2.HYPHEN).Build(), de.Before(bt2.CHAR, bt2.CURRENCY).NotPrecededBy(je2.OPENING, bt2.OPENING).Build(), de.After(bt2.CHAR).NotFollowedBy(je2.HYPHEN, je2.CLOSING, bt2.CLOSING).Build(), de.BeforeMany(bt2.OPENING).NotPrecededBy(je2.OPENING).Build(), de.AfterMany(bt2.CLOSING).NotFollowedBy(je2.CLOSING).Build(), de.AfterMany(je2.CLOSING).FollowedBy(je2.OPENING).Build());
var Mu = () => Q2.group(Q2.or(cn.FLAG, Q2.and(cn.MOST, cn.JOINER, Q2.build(`(?:${cn.ZWJ.source}(?:${cn.FLAG.source}|${cn.ANY.source}${cn.JOINER.source}))*`))));
var Q2 = { build: (e4) => new RegExp(e4, "u"), join: (...e4) => e4.map((t) => t.source).join(""), and: (...e4) => Q2.build(Q2.join(...e4)), or: (...e4) => Q2.build(e4.map((t) => t.source).join("|")), group: (...e4) => Q2.build(`(${Q2.join(...e4)})`), class: (...e4) => Q2.build(`[${Q2.join(...e4)}]`) };
var de = { On: (...e4) => {
  let t = Q2.join(...e4);
  return Q2.build(`([${t}])`);
}, Before: (...e4) => {
  let t = Q2.join(...e4), n = () => Q2.build(`(?=[${t}])`);
  return de.Chain(n);
}, After: (...e4) => {
  let t = Q2.join(...e4), n = () => Q2.build(`(?<=[${t}])`);
  return de.Chain(n);
}, BeforeMany: (...e4) => {
  let t = Q2.join(...e4), n = () => Q2.build(`(?<![${t}])(?=[${t}])`);
  return de.Chain(n);
}, AfterMany: (...e4) => {
  let t = Q2.join(...e4), n = () => Q2.build(`(?<=[${t}])(?![${t}])`);
  return de.Chain(n);
}, NotBefore: (...e4) => {
  let t = Q2.join(...e4), n = () => Q2.build(`(?![${t}])`);
  return de.Chain(n);
}, NotAfter: (...e4) => {
  let t = Q2.join(...e4), n = () => Q2.build(`(?<![${t}])`);
  return de.Chain(n);
}, Chain: (e4) => ({ Build: e4, PreceededBy: (...t) => {
  let n = e4(), i = de.After(...t).Build(), o = () => Q2.and(i, n);
  return de.Chain(o);
}, FollowedBy: (...t) => {
  let n = e4(), i = de.Before(...t).Build(), o = () => Q2.and(n, i);
  return de.Chain(o);
}, NotPrecededBy: (...t) => {
  let n = e4(), i = de.NotAfter(...t).Build(), o = () => Q2.and(i, n);
  return de.Chain(o);
}, NotFollowedBy: (...t) => {
  let n = e4(), i = de.NotBefore(...t).Build(), o = () => Q2.and(n, i);
  return de.Chain(o);
} }) };
var Tu = (e4) => {
  let t = Pu();
  return e4.normalize("NFC").split(t).filter(Boolean);
};
var Pt3 = (e4, t, n) => {
  if (!Number.isFinite(n) || n < 0) return e4;
  let i = [], o = e4.split(`
`);
  for (let r of o) {
    if (Ht(r, t) <= n) {
      i.push(r);
      continue;
    }
    let a = Au(r, t, n);
    i.push(...a);
  }
  return i.join(`
`);
};
var Au = (e4, t, n) => {
  let i = [], r = Tu(e4)[Symbol.iterator](), s = "", a = 0, l = r.next();
  for (; !l.done; ) {
    let c2 = l.value, d = s + c2, u2 = Lu(c2) ? a + Pn.calculate(c2, t) : Ht(d, t);
    if (/\s/.test(c2) || u2 <= n) {
      s = d, a = u2, l = r.next();
      continue;
    }
    if (s) i.push(s.trimEnd()), s = "", a = 0;
    else {
      let p2 = vu(c2, t, n), m = p2[p2.length - 1] ?? "", f2 = p2.slice(0, -1);
      i.push(...f2), s = m, a = Ht(m, t), l = r.next();
    }
  }
  if (s) {
    let c2 = Du(s, t, n);
    i.push(c2);
  }
  return i;
};
var vu = (e4, t, n) => {
  if (rr2().test(e4)) return [e4];
  Cu(e4);
  let i = [], o = Array.from(e4), r = "", s = 0;
  for (let a of o) {
    let l = Pn.calculate(a, t), c2 = s + l;
    if (c2 <= n) {
      r = r + a, s = c2;
      continue;
    }
    r && i.push(r), r = a, s = l;
  }
  return r && i.push(r), i;
};
var Du = (e4, t, n) => {
  if (!(Ht(e4, t) > n)) return e4;
  let [, o, r] = e4.match(/^(.+?)(\s+)$/) ?? [e4, e4.trimEnd(), ""], s = Ht(o, t);
  for (let a of Array.from(r)) {
    let l = Pn.calculate(a, t), c2 = s + l;
    if (c2 > n) break;
    o = o + a, s = c2;
  }
  return o;
};
var Lu = (e4) => e4.codePointAt(0) !== void 0 && e4.codePointAt(1) === void 0;
var Cu = (e4) => {
  if ((D() || Xo()) && /\s/.test(e4)) throw new Error("Word should not contain any whitespaces!");
};
var dn = (e4, t, n, i = false) => {
  let o = t.getNonDeletedElementsMap();
  if (!It3(e4)) return;
  da(e4.id);
  let s = Z2(e4, o);
  if (s && s.text) {
    if (!e4) return;
    let a = s.text, l = s.height, c2 = s.width, d = Je2(e4, s), u2 = ei(e4, s), p2 = e4.height;
    if (i || n !== "n" && n !== "s") {
      a && (a = Pt3(s.originalText, co(s), d));
      let m = Qe2(a, co(s), s.lineHeight);
      l = m.height, c2 = m.width;
    }
    if (l > u2) {
      p2 = sr(l, e4.type);
      let m = p2 - e4.height, f2 = !_2(e4) && (n === "ne" || n === "nw" || n === "n") ? e4.y - m : e4.y;
      t.mutateElement(e4, { height: p2, y: f2 });
    }
    t.mutateElement(s, { text: a, width: c2, height: l }), _2(e4) || t.mutateElement(s, xa(e4, s, o));
  }
};
var xa = (e4, t, n) => {
  if (_2(e4)) return Y3.getBoundTextElementPosition(e4, t, n);
  let i = ar(e4), o = ei(e4, t), r = Je2(e4, t), s, a;
  return t.verticalAlign === Zn.TOP ? a = i.y : t.verticalAlign === Zn.BOTTOM ? a = i.y + (o - t.height) : a = i.y + (o / 2 - t.height / 2), t.textAlign === qn.LEFT ? s = i.x : t.textAlign === qn.RIGHT ? s = i.x + (r - t.width) : s = i.x + (r / 2 - t.width / 2), { x: s, y: a };
};
var It3 = (e4) => e4?.boundElements?.length && e4?.boundElements?.find((t) => t.type === "text")?.id || null;
var Z2 = (e4, t) => {
  if (!e4) return null;
  let n = It3(e4);
  return n && t.get(n) || null;
};
var Ce = (e4, t) => e4 && e4.containerId && t.get(e4.containerId) || null;
var ar = (e4) => {
  let t = $n, n = $n;
  return e4.type === "ellipse" && (t += e4.width / 2 * (1 - Math.sqrt(2) / 2), n += e4.height / 2 * (1 - Math.sqrt(2) / 2)), e4.type === "diamond" && (t += e4.width / 4, n += e4.height / 4), { x: e4.x + t, y: e4.y + n };
};
var sr = (e4, t) => {
  e4 = Math.ceil(e4);
  let n = $n * 2;
  return t === "ellipse" ? Math.round((e4 + n) / Math.sqrt(2) * 2) : t === "arrow" ? e4 + n * 8 : t === "diamond" ? 2 * (e4 + n) : e4 + n;
};
var Je2 = (e4, t) => {
  let { width: n } = e4;
  if (_2(e4)) {
    let i = (t?.fontSize ?? nn2) * jn;
    return Math.max(zn * n, i);
  }
  return e4.type === "ellipse" ? Math.round(n / 2 * Math.sqrt(2)) - $n * 2 : e4.type === "diamond" ? Math.round(n / 2) - $n * 2 : n - $n * 2;
};
var ei = (e4, t) => {
  let { height: n } = e4;
  return _2(e4) ? n - $n * 8 * 2 <= 0 ? t.height : n : e4.type === "ellipse" ? Math.round(n / 2 * Math.sqrt(2)) - $n * 2 : e4.type === "diamond" ? Math.round(n / 2) - $n * 2 : n - $n * 2;
};
P();
var _t = (e4, t, n) => {
  switch (e4.type) {
    case "selection":
    case "rectangle":
    case "image":
    case "text":
    case "iframe":
    case "embeddable":
    case "frame":
    case "magicframe":
      return Hu(e4, t, n);
    case "diamond":
      return _u(e4, t, n);
    case "ellipse":
      return Yu(e4, t, n);
    case "line":
    case "arrow":
    case "freedraw":
      return Xu(e4, n);
  }
};
var Hu = (e4, t, n) => {
  let i = me2(e4, t), o = w(n, i, -e4.angle), [r, s] = yn(e4);
  return Math.min(...r.map((a) => pt(o, a)), ...s.map((a) => Ut(a, o)).filter((a) => a !== null));
};
var _u = (e4, t, n) => {
  let i = me2(e4, t), o = w(n, i, -e4.angle), [r, s] = bn(e4);
  return Math.min(...r.map((a) => pt(o, a)), ...s.map((a) => Ut(a, o)).filter((a) => a !== null));
};
var Yu = (e4, t, n) => {
  let i = me2(e4, t);
  return mt(w(n, i, -e4.angle), un(i, e4.width / 2, e4.height / 2));
};
var Xu = (e4, t) => {
  let [n, i] = Ci(e4);
  return Math.min(...n.map((o) => pt(t, o)), ...i.map((o) => Ut(o, t)));
};
var In2 = (e4, t, n, i = 0, o = false) => {
  let r = [Math.min(n[0][0] - i, n[1][0] - i), Math.min(n[0][1] - i, n[1][1] - i), Math.max(n[0][0] + i, n[1][0] + i), Math.max(n[0][1] + i, n[1][1] + i)], s = he2(e4, t);
  if (!un2(r, s)) return [];
  switch (e4.type) {
    case "rectangle":
    case "image":
    case "text":
    case "iframe":
    case "embeddable":
    case "frame":
    case "selection":
    case "magicframe":
      return np(e4, t, n, i, o);
    case "diamond":
      return ip(e4, t, n, i, o);
    case "ellipse":
      return op(e4, t, n, i);
    case "line":
    case "freedraw":
    case "arrow":
      return tp(e4, n, o);
  }
};
var Pa = (e4, t, n, i, o, r = false) => {
  for (let s of e4) {
    let a = Wi(s[0], s[1], s[2], s[3]), l = [Math.min(t[0][0], t[1][0]), Math.min(t[0][1], t[1][1]), Math.max(t[0][0], t[1][0]), Math.max(t[0][1], t[1][1])];
    if (!un2(a, l)) continue;
    let c2 = Kt(s, t);
    if (c2.length > 0) {
      for (let d of c2) n.push(w(d, i, o));
      if (r) return n;
    }
  }
  return n;
};
var Ia = (e4, t, n, i, o, r = false) => {
  for (let s of e4) {
    let a = et(s, t);
    if (a && (n.push(w(a, i, o)), r)) return n;
  }
  return n;
};
var tp = (e4, t, n = false) => {
  let [i, o] = Ci(e4), r = [];
  for (let s of i) {
    let a = et(s, t);
    if (a && (r.push(a), n)) return r;
  }
  for (let s of o) {
    let a = Wi(s[0], s[1], s[2], s[3]), l = [Math.min(t[0][0], t[1][0]), Math.min(t[0][1], t[1][1]), Math.max(t[0][0], t[1][0]), Math.max(t[0][1], t[1][1])];
    if (!un2(a, l)) continue;
    let c2 = Kt(s, t);
    if (c2.length > 0 && (r.push(...c2), n)) return r;
  }
  return r;
};
var np = (e4, t, n, i = 0, o = false) => {
  let r = me2(e4, t), s = w(n[0], r, -e4.angle), a = w(n[1], r, -e4.angle), l = v(s, a), [c2, d] = yn(e4, i), u2 = [];
  return Ia(c2, l, u2, r, e4.angle, o), o && u2.length > 0 || Pa(d, l, u2, r, e4.angle, o), u2;
};
var ip = (e4, t, n, i = 0, o = false) => {
  let r = me2(e4, t), s = w(n[0], r, -e4.angle), a = w(n[1], r, -e4.angle), l = v(s, a), [c2, d] = bn(e4, i), u2 = [];
  return Ia(c2, l, u2, r, e4.angle, o), o && u2.length > 0 || Pa(d, l, u2, r, e4.angle, o), u2;
};
var op = (e4, t, n, i = 0) => {
  let o = me2(e4, t), r = w(n[0], o, -e4.angle), s = w(n[1], o, -e4.angle);
  return xn(un(o, e4.width / 2 + i, e4.height / 2 + i), v(r, s)).map((a) => w(a, o, e4.angle));
};
P();
var pe2 = [1, 0];
var we2 = [0, 1];
var Oe2 = [-1, 0];
var He = [0, -1];
var Mt2 = (e4) => {
  let [t, n] = e4, i = Math.abs(t), o = Math.abs(n);
  return t > o ? pe2 : t <= -o ? Oe2 : n > i ? we2 : He;
};
var Ge = (e4, t) => Mt2(h(e4, t));
var et3 = (e4, t) => ke2(Ge(e4, t));
var ue2 = (e4, t) => e4[0] === t[0] && e4[1] === t[1];
var ke2 = (e4) => ue2(e4, pe2) || ue2(e4, Oe2);
var lp = (e4, t, n) => {
  let i = ct2(t);
  (Xo() || D()) && (rs(e4.width > 0 && e4.height > 0, "Diamond element has no width or height"), rs(!A(i, n), "The point is too close to the element mid point to determine heading"));
  let o = 0.95, r = I(M(h(w(p(e4.x + e4.width / 2, e4.y), i, e4.angle), i), o), i), s = I(M(h(w(p(e4.x + e4.width, e4.y + e4.height / 2), i, e4.angle), i), o), i), a = I(M(h(w(p(e4.x + e4.width / 2, e4.y + e4.height), i, e4.angle), i), o), i), l = I(M(h(w(p(e4.x, e4.y + e4.height / 2), i, e4.angle), i), o), i);
  if (N(h(n, r), h(r, s)) <= 0 && N(h(n, r), h(r, l)) > 0) return Ge(r, i);
  if (N(h(n, s), h(s, a)) <= 0 && N(h(n, s), h(s, r)) > 0) return Ge(s, i);
  if (N(h(n, a), h(a, l)) <= 0 && N(h(n, a), h(a, s)) > 0) return Ge(a, i);
  if (N(h(n, l), h(l, r)) <= 0 && N(h(n, l), h(l, a)) > 0) return Ge(l, i);
  if (N(h(n, i), h(r, i)) <= 0 && N(h(n, i), h(s, i)) > 0) {
    let d = e4.width > e4.height ? r : s;
    return Ge(d, i);
  } else if (N(h(n, i), h(s, i)) <= 0 && N(h(n, i), h(a, i)) > 0) {
    let d = e4.width > e4.height ? a : s;
    return Ge(d, i);
  } else if (N(h(n, i), h(a, i)) <= 0 && N(h(n, i), h(l, i)) > 0) {
    let d = e4.width > e4.height ? a : l;
    return Ge(d, i);
  }
  let c2 = e4.width > e4.height ? r : l;
  return Ge(c2, i);
};
var ti = (e4, t, n) => {
  let o = ct2(t);
  if (e4.type === "diamond") return lp(e4, t, n);
  let r = Yt(p(t[0], t[1]), o, 2), s = Yt(p(t[2], t[1]), o, 2), a = Yt(p(t[0], t[3]), o, 2), l = Yt(p(t[2], t[3]), o, 2);
  return no([r, s, o], n) ? He : no([s, l, o], n) ? pe2 : no([l, a, o], n) ? we2 : Oe2;
};
var pr = (e4) => [e4[0] === 0 ? 0 : e4[0] > 0 ? -1 : 1, e4[1] === 0 ? 0 : e4[1] > 0 ? -1 : 1];
P();
P();
var gr2 = 1;
var J2 = 40;
var Ep = (e4, t) => {
  let n = e4.fixedSegments ? e4.fixedSegments.slice() : null;
  if (n) {
    let i = [];
    e4.points.map((s) => p(e4.x + s[0], e4.y + s[1])).forEach((s, a, l) => {
      if (a < 2) return i.push(s);
      let c2 = Ge(s, l[a - 1]), d = Ge(l[a - 1], l[a - 2]);
      if (ue2(c2, d)) {
        let u2 = n?.findIndex((m) => m.index === a - 1) ?? -1, p2 = n?.findIndex((m) => m.index === a) ?? -1;
        p2 !== -1 && (n[p2].start = p(l[a - 2][0] - e4.x, l[a - 2][1] - e4.y)), u2 !== -1 && n.splice(u2, 1), i.splice(-1, 1), n.forEach((m) => {
          m.index > a - 1 && (m.index -= 1);
        });
      }
      return i.push(s);
    });
    let o = [];
    i.forEach((s, a, l) => {
      if (a < 3) return o.push(s);
      if (_(l[a - 2], l[a - 1]) < gr2) {
        let c2 = n?.findIndex((p2) => p2.index === a - 2) ?? -1, d = n?.findIndex((p2) => p2.index === a - 1) ?? -1;
        d !== -1 && n.splice(d, 1), c2 !== -1 && n.splice(c2, 1), o.splice(-2, 2), n.forEach((p2) => {
          p2.index > a - 2 && (p2.index -= 2);
        });
        let u2 = et3(s, l[a - 1]);
        return o.push(p(u2 ? s[0] : l[a - 2][0], u2 ? l[a - 2][1] : s[1]));
      }
      o.push(s);
    });
    let r = n.filter((s) => s.index !== 1 && s.index !== o.length - 1);
    return r.length === 0 ? Tt2(yr2(br(wr(e4, xr(e4, t, o.map((s) => p(s[0] - e4.x, s[1] - e4.y)))) ?? [])), r, null, null) : (Xo() && rs(Ga(o), "Invalid elbow points with fixed segments"), Tt2(o, r, e4.startIsSpecial, e4.endIsSpecial));
  }
  return { x: e4.x, y: e4.y, points: e4.points, fixedSegments: e4.fixedSegments, startIsSpecial: e4.startIsSpecial, endIsSpecial: e4.endIsSpecial };
};
var gp = (e4, t, n) => {
  let i = t.map((T3) => T3.index), r = (e4.fixedSegments?.map((T3) => T3.index) ?? []).findIndex((T3) => !i.includes(T3));
  if (r === -1 || !e4.fixedSegments?.[r]) return { points: e4.points };
  let s = e4.fixedSegments[r].index, a = e4.fixedSegments[r - 1], l = e4.fixedSegments[r + 1], c2 = e4.x + (a ? a.end[0] : 0), d = e4.y + (a ? a.end[1] : 0), u2 = a ? null : e4.startBinding, p2 = l ? null : e4.endBinding, { startHeading: m, endHeading: f2, startGlobalPoint: E3, endGlobalPoint: h2, hoveredStartElement: g, hoveredEndElement: x2, ...y3 } = xr({ x: c2, y: d, startBinding: u2, endBinding: p2, startArrowhead: null, endArrowhead: null, points: e4.points }, n, [p(0, 0), p(e4.x + (l?.start[0] ?? e4.points[e4.points.length - 1][0]) - c2, e4.y + (l?.start[1] ?? e4.points[e4.points.length - 1][1]) - d)], { isDragging: false }), { points: b } = Tt2(yr2(br(wr(e4, { startHeading: m, endHeading: f2, startGlobalPoint: E3, endGlobalPoint: h2, hoveredStartElement: g, hoveredEndElement: x2, ...y3 }) ?? [])), t, null, null), w3 = [];
  if (a) for (let T3 = 0; T3 < a.index; T3++) w3.push(p(e4.x + e4.points[T3][0], e4.y + e4.points[T3][1]));
  if (b.forEach((T3) => {
    w3.push(p(e4.x + (a ? a.end[0] : 0) + T3[0], e4.y + (a ? a.end[1] : 0) + T3[1]));
  }), l) for (let T3 = l.index; T3 < e4.points.length; T3++) w3.push(p(e4.x + e4.points[T3][0], e4.y + e4.points[T3][1]));
  let I3 = (l?.index ?? e4.points.length) - (a?.index ?? 0) - 1, M3 = t.map((T3) => T3.index > s ? { ...T3, index: T3.index - I3 + (b.length - 1) } : T3), v2 = w3.flatMap((T3, F3) => {
    let C3 = w3[F3 - 1], R2 = w3[F3 + 1];
    if (C3 && R2) {
      let L3 = Ge(T3, C3), W = Ge(R2, T3);
      if (ue2(L3, W)) return M3.forEach((N2) => {
        N2.index > F3 && (N2.index -= 1);
      }), [];
      if (ue2(L3, pr(W))) return M3.forEach((N2) => {
        N2.index > F3 && (N2.index += 1);
      }), [T3, T3];
    }
    return [T3];
  });
  return Tt2(v2, M3, false, false);
};
var xp = (e4, t, n, i, o, r) => {
  let s = t.map((w3, I3) => e4.fixedSegments == null || e4.fixedSegments[I3] === void 0 || e4.fixedSegments[I3].index !== w3.index || (w3.start[0] !== e4.fixedSegments[I3].start[0] && w3.end[0] !== e4.fixedSegments[I3].end[0]) != (w3.start[1] !== e4.fixedSegments[I3].start[1] && w3.end[1] !== e4.fixedSegments[I3].end[1]) ? I3 : null).filter((w3) => w3 !== null).shift();
  if (s == null) return { points: e4.points };
  let a = e4.fixedSegments?.findIndex((w3) => w3.index === 1) ?? -1, l = e4.fixedSegments?.findIndex((w3) => w3.index === e4.points.length - 1) ?? -1, c2 = _(t[s].start, t[s].end), d = c2 < J2 + 5;
  if (a === -1 && t[s].index === 1 && o) {
    let w3 = ke2(n), M3 = (w3 ? ue2(n, pe2) : ue2(n, we2)) ? d ? c2 / 2 : J2 : d ? -c2 / 2 : -J2;
    t[s].start = p(t[s].start[0] + (w3 ? M3 : 0), t[s].start[1] + (w3 ? 0 : M3));
  }
  if (l === -1 && t[s].index === e4.points.length - 1 && r) {
    let w3 = ke2(i), M3 = (w3 ? ue2(i, pe2) : ue2(i, we2)) ? d ? c2 / 2 : J2 : d ? -c2 / 2 : -J2;
    t[s].end = p(t[s].end[0] + (w3 ? M3 : 0), t[s].end[1] + (w3 ? 0 : M3));
  }
  let u2 = t.map((w3) => ({ ...w3, start: p(e4.x + w3.start[0], e4.y + w3.start[1]), end: p(e4.x + w3.end[0], e4.y + w3.end[1]) })), p2 = e4.points.map((w3, I3) => p(e4.x + w3[0], e4.y + w3[1])), m = u2[s].index - 1, f2 = u2[s].index, E3 = u2[s].start, h2 = u2[s].end, g = p2[m - 1] && !A(p2[m], p2[m - 1]) ? et3(p2[m - 1], p2[m]) : void 0, x2 = p2[f2 + 1] && !A(p2[f2], p2[f2 + 1]) ? et3(p2[f2 + 1], p2[f2]) : void 0;
  if (g !== void 0) {
    let w3 = g ? 1 : 0;
    p2[m - 1][w3] = E3[w3];
  }
  if (p2[m] = E3, p2[f2] = h2, x2 !== void 0) {
    let w3 = x2 ? 1 : 0;
    p2[f2 + 1][w3] = h2[w3];
  }
  let y3 = u2.findIndex((w3) => w3.index === m);
  if (y3 !== -1) {
    let w3 = et3(u2[y3].end, u2[y3].start) ? 1 : 0;
    u2[y3].start[w3] = E3[w3], u2[y3].end = E3;
  }
  let b = u2.findIndex((w3) => w3.index === f2 + 1);
  if (b !== -1) {
    let w3 = et3(u2[b].end, u2[b].start) ? 1 : 0;
    u2[b].end[w3] = h2[w3], u2[b].start = h2;
  }
  if (a === -1 && m === 0) {
    let w3 = o ? ke2(n) : et3(p2[1], p2[0]);
    p2.unshift(p(w3 ? E3[0] : e4.x + e4.points[0][0], w3 ? e4.y + e4.points[0][1] : E3[1])), o && p2.unshift(p(e4.x + e4.points[0][0], e4.y + e4.points[0][1]));
    for (let I3 of u2) I3.index += o ? 2 : 1;
  }
  if (l === -1 && f2 === e4.points.length - 1) {
    let w3 = ke2(i);
    p2.push(p(w3 ? h2[0] : e4.x + e4.points[e4.points.length - 1][0], w3 ? e4.y + e4.points[e4.points.length - 1][1] : h2[1])), r && p2.push(p(e4.x + e4.points[e4.points.length - 1][0], e4.y + e4.points[e4.points.length - 1][1]));
  }
  return Tt2(p2, u2.map((w3) => ({ ...w3, start: p(w3.start[0] - e4.x, w3.start[1] - e4.y), end: p(w3.end[0] - e4.x, w3.end[1] - e4.y) })), false, false);
};
var wp = (e4, t, n, i, o, r, s, a, l) => {
  let c2 = e4.startIsSpecial ?? null, d = e4.endIsSpecial ?? null, u2 = t.map((h2, g) => g === 0 ? p(e4.x + h2[0], e4.y + h2[1]) : g === t.length - 1 ? p(e4.x + h2[0], e4.y + h2[1]) : p(e4.x + e4.points[g][0], e4.y + e4.points[g][1])), p2 = n.map((h2) => ({ ...h2, start: p(e4.x + (h2.start[0] - t[0][0]), e4.y + (h2.start[1] - t[0][1])), end: p(e4.x + (h2.end[0] - t[0][0]), e4.y + (h2.end[1] - t[0][1])) })), m = [], f2 = 2 + (c2 ? 1 : 0), E3 = 2 + (d ? 1 : 0);
  for (; m.length + f2 < u2.length - E3; ) m.push(u2[m.length + f2]);
  {
    let h2 = u2[c2 ? 2 : 1], g = u2[c2 ? 3 : 2], x2 = ke2(i), y3 = ke2(Mt2(h(h2, g)));
    if (a && x2 === y3) {
      let b = x2 ? ue2(i, pe2) : ue2(i, we2);
      if (m.unshift(p(y3 ? r[0] + (b ? J2 : -J2) : g[0], y3 ? g[1] : r[1] + (b ? J2 : -J2))), m.unshift(p(x2 ? r[0] + (b ? J2 : -J2) : r[0], x2 ? r[1] : r[1] + (b ? J2 : -J2))), !c2) {
        c2 = true;
        for (let w3 of p2) w3.index > 1 && (w3.index += 1);
      }
    } else if (m.unshift(p(y3 ? r[0] : h2[0], y3 ? h2[1] : r[1])), c2) {
      c2 = false;
      for (let b of p2) b.index > 1 && (b.index -= 1);
    }
    m.unshift(r);
  }
  {
    let h2 = u2[u2.length - (d ? 3 : 2)], g = u2[u2.length - (d ? 4 : 3)], x2 = ke2(o), y3 = et3(g, h2);
    if (l && x2 === y3) {
      let b = x2 ? ue2(o, pe2) : ue2(o, we2);
      m.push(p(y3 ? s[0] + (b ? J2 : -J2) : g[0], y3 ? g[1] : s[1] + (b ? J2 : -J2))), m.push(p(x2 ? s[0] + (b ? J2 : -J2) : s[0], x2 ? s[1] : s[1] + (b ? J2 : -J2))), d || (d = true);
    } else m.push(p(y3 ? s[0] : h2[0], y3 ? h2[1] : s[1])), d && (d = false);
  }
  return m.push(s), Tt2(m, p2.map(({ index: h2 }) => ({ index: h2, start: m[h2 - 1], end: m[h2] })).map((h2) => ({ ...h2, start: p(h2.start[0] - r[0], h2.start[1] - r[1]), end: p(h2.end[0] - r[0], h2.end[1] - r[1]) })), c2, d);
};
var Xt3 = 1e6;
var Tn2 = (e4, t, n, i) => {
  if (e4.points.length < 2) return { points: n.points ?? e4.points };
  A2.PROD || (rs(!n.points || n.points.length >= 2, "Updated point array length must match the arrow point length, contain exactly the new start and end points or not be specified at all (i.e. you can't add new points between start and end manually to elbow arrows)"), rs(!e4.fixedSegments || e4.fixedSegments.map((w3) => w3.start[0] === w3.end[0] || w3.start[1] === w3.end[1]).every(Boolean), "Fixed segments must be either horizontal or vertical"), rs(!n.fixedSegments || n.fixedSegments.map((w3) => w3.start[0] === w3.end[0] || w3.start[1] === w3.end[1]).every(Boolean), "Updates to fixed segments must be either horizontal or vertical"), rs(e4.points.slice(1).map((w3, I3) => w3[0] === e4.points[I3][0] || w3[1] === e4.points[I3][1]), "Elbow arrow segments must be either horizontal or vertical"), rs(n.fixedSegments?.find((w3) => w3.index === 1 && A(w3.start, (n.points ?? e4.points)[0])) == null && n.fixedSegments?.find((w3) => w3.index === (n.points ?? e4.points).length - 1 && A(w3.end, (n.points ?? e4.points)[(n.points ?? e4.points).length - 1])) == null, "The first and last segments cannot be fixed"));
  let o = n.fixedSegments ?? e4.fixedSegments ?? [], r = n.points ? n.points && n.points.length === 2 ? e4.points.map((w3, I3) => I3 === 0 ? n.points[0] : I3 === e4.points.length - 1 ? n.points[1] : w3) : n.points.slice() : e4.points.slice(), { startBinding: s, endBinding: a, ...l } = n, c2 = typeof s < "u" ? s : e4.startBinding, d = typeof a < "u" ? a : e4.endBinding, u2 = c2 && Ji(c2.elementId, t), p2 = d && Ji(d.elementId, t), m = Ga(r);
  if (c2 && !u2 && m || d && !p2 && m || t.size === 0 && m || Object.keys(l).length === 0 && (u2?.id !== c2?.elementId || p2?.id !== d?.elementId)) return Tt2(r.map((w3) => p(e4.x + w3[0], e4.y + w3[1])), e4.fixedSegments, e4.startIsSpecial, e4.endIsSpecial);
  let { startHeading: f2, endHeading: E3, startGlobalPoint: h2, endGlobalPoint: g, hoveredStartElement: x2, hoveredEndElement: y3, ...b } = xr({ x: e4.x, y: e4.y, startBinding: c2, endBinding: d, startArrowhead: e4.startArrowhead, endArrowhead: e4.endArrowhead, points: e4.points }, t, r, i);
  return t.size === 0 && m ? Tt2(r.map((w3) => p(e4.x + w3[0], e4.y + w3[1])), e4.fixedSegments, e4.startIsSpecial, e4.endIsSpecial) : !n.points && !n.fixedSegments && !n.startBinding && !n.endBinding ? Ep(e4, t) : n.startBinding === e4.startBinding && n.endBinding === e4.endBinding && (n.points ?? []).every((w3, I3) => A(w3, e4.points[I3] ?? p(1 / 0, 1 / 0))) && m ? {} : o.length === 0 ? Tt2(yr2(br(wr(e4, { startHeading: f2, endHeading: E3, startGlobalPoint: h2, endGlobalPoint: g, hoveredStartElement: x2, hoveredEndElement: y3, ...b }) ?? [])), o, null, null) : (e4.fixedSegments?.length ?? 0) > o.length ? gp(e4, o, t) : n.points ? n.points && n.fixedSegments ? n : wp(e4, r, o, f2, E3, h2, g, x2, y3) : xp(e4, o, f2, E3, x2, y3);
};
var xr = (e4, t, n, i) => {
  let o = lt(n[0], L(e4.x, e4.y)), r = lt(n[n.length - 1], L(e4.x, e4.y)), s = null, a = null;
  if (i?.isDragging) {
    let w3 = Array.from(t.values());
    s = La(o, t, w3, i?.zoom) || null, a = La(r, t, w3, i?.zoom) || null;
  } else s = e4.startBinding && Ji(e4.startBinding.elementId, t) || null, a = e4.endBinding && Ji(e4.endBinding.elementId, t) || null;
  let l = va({ ...e4, type: "arrow", elbowed: true, points: n }, "start", e4.startBinding?.fixedPoint, o, s, t, i?.isDragging), c2 = va({ ...e4, type: "arrow", elbowed: true, points: n }, "end", e4.endBinding?.fixedPoint, r, a, t, i?.isDragging), d = Da(l, c2, s, o, t), u2 = Da(c2, l, a, r, t), p2 = [l[0] - 2, l[1] - 2, l[0] + 2, l[1] + 2], m = [c2[0] - 2, c2[1] - 2, c2[0] + 2, c2[1] + 2], f2 = s ? Ve2(s, t, Ut3(d, e4.startArrowhead ? oe * 6 : oe * 2, 1)) : p2, E3 = a ? Ve2(a, t, Ut3(u2, e4.endArrowhead ? oe * 6 : oe * 2, 1)) : m, h2 = Mn(l, a ? Ve2(a, t, Ut3(u2, J2, J2)) : m) || Mn(c2, s ? Ve2(s, t, Ut3(d, J2, J2)) : p2), g = Ba(h2 ? [p2, m] : [f2, E3]), x2 = Pp(h2 ? p2 : f2, h2 ? m : E3, g, h2 ? Ut3(d, !s && !a ? 0 : J2, 0) : Ut3(d, !s && !a ? 0 : J2 - (e4.startArrowhead ? oe * 6 : oe * 2), J2), h2 ? Ut3(u2, !s && !a ? 0 : J2, 0) : Ut3(u2, !s && !a ? 0 : J2 - (e4.endArrowhead ? oe * 6 : oe * 2), J2), h2, s && Ve2(s, t), a && Ve2(a, t)), y3 = Aa(x2[0], d, l), b = Aa(x2[1], u2, c2);
  return { dynamicAABBs: x2, startDonglePosition: y3, startGlobalPoint: l, startHeading: d, endDonglePosition: b, endGlobalPoint: c2, endHeading: u2, commonBounds: g, hoveredStartElement: s, hoveredEndElement: a, boundsOverlap: h2, startElementBounds: f2, endElementBounds: E3 };
};
var wr = (e4, t) => {
  let { dynamicAABBs: n, startDonglePosition: i, startGlobalPoint: o, startHeading: r, endDonglePosition: s, endGlobalPoint: a, endHeading: l, commonBounds: c2, hoveredEndElement: d } = t, u2 = Ip(n, i || o, r, s || a, l, c2), p2 = i && Qi(i, u2), m = s && Qi(s, u2), f2 = Qi(a, u2);
  f2 && d && (f2.closed = true);
  let E3 = Qi(o, u2);
  E3 && e4.startBinding && (E3.closed = true);
  let h2 = p2 && m && (Mn(p2.pos, n[1]) || Mn(m.pos, n[0])), g = yp(p2 || E3, m || f2, u2, r || pe2, l || pe2, h2 ? [] : n);
  if (g) {
    let x2 = g.map((y3) => [y3.pos[0], y3.pos[1]]);
    return p2 && x2.unshift(o), m && x2.push(a), x2;
  }
  return null;
};
var Ut3 = (e4, t, n) => {
  switch (e4) {
    case He:
      return [t, n, n, n];
    case pe2:
      return [n, t, n, n];
    case we2:
      return [n, n, t, n];
  }
  return [n, n, n, t];
};
var yp = (e4, t, n, i, o, r) => {
  let s = mr2(e4.pos, t.pos), a = new $2((l) => l.f);
  for (a.push(e4); a.size() > 0; ) {
    let l = a.pop();
    if (!l || l.closed) continue;
    if (l === t) return bp(e4, l);
    l.closed = true;
    let c2 = Mp(l.addr, n);
    for (let d = 0; d < 4; d++) {
      let u2 = c2[d];
      if (!u2 || u2.closed) continue;
      let p2 = Yt(u2.pos, l.pos, 0.5);
      if (ds(...r.map((b) => Mn(p2, b)))) continue;
      let m = Tp(d), f2 = l.parent ? Mt2(h(l.pos, l.parent.pos)) : i, E3 = pr(f2);
      if (ue2(E3, m) || Ca(e4.addr, u2.addr) && ue2(m, i) || Ca(t.addr, u2.addr) && ue2(m, o)) continue;
      let g = f2 !== m, x2 = l.g + mr2(u2.pos, l.pos) + (g ? Math.pow(s, 3) : 0), y3 = u2.visited;
      if (!y3 || x2 < u2.g) {
        let b = Sp(u2, t, m, o);
        u2.visited = true, u2.parent = l, u2.h = mr2(t.pos, u2.pos) + b * Math.pow(s, 2), u2.g = x2, u2.f = u2.g + u2.h, y3 ? a.rescoreElement(u2) : a.push(u2);
      }
    }
  }
  return null;
};
var bp = (e4, t) => {
  let n = t, i = [];
  for (; n.parent; ) i.unshift(n), n = n.parent;
  return i.unshift(e4), i;
};
var mr2 = (e4, t) => Math.abs(e4[0] - t[0]) + Math.abs(e4[1] - t[1]);
var Pp = (e4, t, n, i, o, r, s, a) => {
  let l = s ?? e4, c2 = a ?? t, [d, u2, p2, m] = i ?? [0, 0, 0, 0], [f2, E3, h2, g] = o ?? [0, 0, 0, 0], x2 = [e4[0] > t[2] ? e4[1] > t[3] || e4[3] < t[1] ? Math.min((l[0] + c2[2]) / 2, e4[0] - m) : (l[0] + c2[2]) / 2 : e4[0] > t[0] ? e4[0] - m : n[0] - m, e4[1] > t[3] ? e4[0] > t[2] || e4[2] < t[0] ? Math.min((l[1] + c2[3]) / 2, e4[1] - d) : (l[1] + c2[3]) / 2 : e4[1] > t[1] ? e4[1] - d : n[1] - d, e4[2] < t[0] ? e4[1] > t[3] || e4[3] < t[1] ? Math.max((l[2] + c2[0]) / 2, e4[2] + u2) : (l[2] + c2[0]) / 2 : e4[2] < t[2] ? e4[2] + u2 : n[2] + u2, e4[3] < t[1] ? e4[0] > t[2] || e4[2] < t[0] ? Math.max((l[3] + c2[1]) / 2, e4[3] + p2) : (l[3] + c2[1]) / 2 : e4[3] < t[3] ? e4[3] + p2 : n[3] + p2], y3 = [t[0] > e4[2] ? t[1] > e4[3] || t[3] < e4[1] ? Math.min((c2[0] + l[2]) / 2, t[0] - g) : (c2[0] + l[2]) / 2 : t[0] > e4[0] ? t[0] - g : n[0] - g, t[1] > e4[3] ? t[0] > e4[2] || t[2] < e4[0] ? Math.min((c2[1] + l[3]) / 2, t[1] - f2) : (c2[1] + l[3]) / 2 : t[1] > e4[1] ? t[1] - f2 : n[1] - f2, t[2] < e4[0] ? t[1] > e4[3] || t[3] < e4[1] ? Math.max((c2[2] + l[0]) / 2, t[2] + E3) : (c2[2] + l[0]) / 2 : t[2] < e4[2] ? t[2] + E3 : n[2] + E3, t[3] < e4[1] ? t[0] > e4[2] || t[2] < e4[0] ? Math.max((c2[3] + l[1]) / 2, t[3] + h2) : (c2[3] + l[1]) / 2 : t[3] < e4[3] ? t[3] + h2 : n[3] + h2], b = Ba([x2, y3]);
  if (!r && x2[2] - x2[0] + y3[2] - y3[0] > b[2] - b[0] + 1e-11 && x2[3] - x2[1] + y3[3] - y3[1] > b[3] - b[1] + 1e-11) {
    let [w3, I3] = [(y3[0] + y3[2]) / 2, (y3[1] + y3[3]) / 2];
    if (t[0] > e4[2] && e4[1] > t[3]) {
      let M3 = x2[2] + (y3[0] - x2[2]) / 2, v2 = y3[3] + (x2[1] - y3[3]) / 2;
      return N(L(e4[2] - w3, e4[1] - I3), L(e4[0] - w3, e4[3] - I3)) > 0 ? [[x2[0], x2[1], M3, x2[3]], [M3, y3[1], y3[2], y3[3]]] : [[x2[0], v2, x2[2], x2[3]], [y3[0], y3[1], y3[2], v2]];
    } else if (e4[2] < t[0] && e4[3] < t[1]) {
      let M3 = x2[2] + (y3[0] - x2[2]) / 2, v2 = x2[3] + (y3[1] - x2[3]) / 2;
      return N(L(e4[0] - w3, e4[1] - I3), L(e4[2] - w3, e4[3] - I3)) > 0 ? [[x2[0], x2[1], x2[2], v2], [y3[0], v2, y3[2], y3[3]]] : [[x2[0], x2[1], M3, x2[3]], [M3, y3[1], y3[2], y3[3]]];
    } else if (e4[0] > t[2] && e4[3] < t[1]) {
      let M3 = y3[2] + (x2[0] - y3[2]) / 2, v2 = x2[3] + (y3[1] - x2[3]) / 2;
      return N(L(e4[2] - w3, e4[1] - I3), L(e4[0] - w3, e4[3] - I3)) > 0 ? [[M3, x2[1], x2[2], x2[3]], [y3[0], y3[1], M3, y3[3]]] : [[x2[0], x2[1], x2[2], v2], [y3[0], v2, y3[2], y3[3]]];
    } else if (e4[0] > t[2] && e4[1] > t[3]) {
      let M3 = y3[2] + (x2[0] - y3[2]) / 2, v2 = y3[3] + (x2[1] - y3[3]) / 2;
      return N(L(e4[0] - w3, e4[1] - I3), L(e4[2] - w3, e4[3] - I3)) > 0 ? [[M3, x2[1], x2[2], x2[3]], [y3[0], y3[1], M3, y3[3]]] : [[x2[0], v2, x2[2], x2[3]], [y3[0], y3[1], y3[2], v2]];
    }
  }
  return [x2, y3];
};
var Ip = (e4, t, n, i, o, r) => {
  let s = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
  n === Oe2 || n === pe2 ? a.add(t[1]) : s.add(t[0]), o === Oe2 || o === pe2 ? a.add(i[1]) : s.add(i[0]), e4.forEach((d) => {
    s.add(d[0]), s.add(d[2]), a.add(d[1]), a.add(d[3]);
  }), s.add(r[0]), s.add(r[2]), a.add(r[1]), a.add(r[3]);
  let l = Array.from(a).sort((d, u2) => d - u2), c2 = Array.from(s).sort((d, u2) => d - u2);
  return { row: l.length, col: c2.length, data: l.flatMap((d, u2) => c2.map((p2, m) => ({ f: 0, g: 0, h: 0, closed: false, visited: false, parent: null, addr: [m, u2], pos: [p2, d] }))) };
};
var Aa = (e4, t, n) => {
  switch (t) {
    case He:
      return p(n[0], e4[1]);
    case pe2:
      return p(e4[2], n[1]);
    case we2:
      return p(n[0], e4[3]);
  }
  return p(e4[0], n[1]);
};
var Sp = (e4, t, n, i) => {
  if (i === pe2) switch (n) {
    case pe2:
      return e4.pos[0] >= t.pos[0] ? 4 : e4.pos[1] === t.pos[1] ? 0 : 2;
    case He:
      return e4.pos[1] > t.pos[1] && e4.pos[0] < t.pos[0] ? 1 : 3;
    case we2:
      return e4.pos[1] < t.pos[1] && e4.pos[0] < t.pos[0] ? 1 : 3;
    case Oe2:
      return e4.pos[1] === t.pos[1] ? 4 : 2;
  }
  else if (i === Oe2) switch (n) {
    case pe2:
      return e4.pos[1] === t.pos[1] ? 4 : 2;
    case He:
      return e4.pos[1] > t.pos[1] && e4.pos[0] > t.pos[0] ? 1 : 3;
    case we2:
      return e4.pos[1] < t.pos[1] && e4.pos[0] > t.pos[0] ? 1 : 3;
    case Oe2:
      return e4.pos[0] <= t.pos[0] ? 4 : e4.pos[1] === t.pos[1] ? 0 : 2;
  }
  else if (i === He) switch (n) {
    case pe2:
      return e4.pos[1] > t.pos[1] && e4.pos[0] < t.pos[0] ? 1 : 3;
    case He:
      return e4.pos[1] >= t.pos[1] ? 4 : e4.pos[0] === t.pos[0] ? 0 : 2;
    case we2:
      return e4.pos[0] === t.pos[0] ? 4 : 2;
    case Oe2:
      return e4.pos[1] > t.pos[1] && e4.pos[0] > t.pos[0] ? 1 : 3;
  }
  else if (i === we2) switch (n) {
    case pe2:
      return e4.pos[1] < t.pos[1] && e4.pos[0] < t.pos[0] ? 1 : 3;
    case He:
      return e4.pos[0] === t.pos[0] ? 4 : 2;
    case we2:
      return e4.pos[1] <= t.pos[1] ? 4 : e4.pos[0] === t.pos[0] ? 0 : 2;
    case Oe2:
      return e4.pos[1] < t.pos[1] && e4.pos[0] > t.pos[0] ? 1 : 3;
  }
  return 0;
};
var Mp = ([e4, t], n) => [ni([e4, t - 1], n), ni([e4 + 1, t], n), ni([e4, t + 1], n), ni([e4 - 1, t], n)];
var ni = ([e4, t], n) => e4 < 0 || e4 >= n.col || t < 0 || t >= n.row ? null : n.data[t * n.col + e4] ?? null;
var Qi = (e4, t) => {
  for (let n = 0; n < t.col; n++) for (let i = 0; i < t.row; i++) {
    let o = ni([n, i], t);
    if (o && e4[0] === o.pos[0] && e4[1] === o.pos[1]) return o;
  }
  return null;
};
var Ba = (e4) => [Math.min(...e4.map((t) => t[0])), Math.min(...e4.map((t) => t[1])), Math.max(...e4.map((t) => t[2])), Math.max(...e4.map((t) => t[3]))];
var Ji = (e4, t) => {
  let n = t.get(e4);
  return n && Le2(n) ? n : null;
};
var Tt2 = (e4, t, n, i) => {
  let o = e4[0][0], r = e4[0][1], s = e4.map((a) => lt(a, M(h(e4[0]), -1)));
  return (o < -Xt3 || o > Xt3 || r < -Xt3 || r > Xt3 || o + s[s.length - 1][0] < -Xt3 || r + s[s.length - 1][0] > Xt3 || o + s[s.length - 1][1] < -Xt3 || r + s[s.length - 1][1] > Xt3) && console.error("Elbow arrow normalization is outside reasonable bounds (> 1e6)", { x: o, y: r, points: s, ...kr(s) }), s = s.map(([a, l]) => p(ft(a, -1e6, 1e6), ft(l, -1e6, 1e6))), { points: s, x: ft(o, -1e6, 1e6), y: ft(r, -1e6, 1e6), fixedSegments: (t?.length ?? 0) > 0 ? t : null, ...kr(s), startIsSpecial: n, endIsSpecial: i };
};
var yr2 = (e4) => {
  if (e4.length > 1) {
    let t = Math.abs(e4[0][1] - e4[1][1]) < Math.abs(e4[0][0] - e4[1][0]);
    return e4.filter((n, i) => {
      if (i === 0 || i === e4.length - 1) return true;
      let o = e4[i + 1], r = Math.abs(n[1] - o[1]) < Math.abs(n[0] - o[0]);
      return t === r ? (t = r, false) : (t = r, true);
    });
  }
  return e4;
};
var br = (e4) => e4.length >= 4 ? e4.filter((t, n) => {
  if (n === 0 || n === e4.length - 1) return true;
  let i = e4[n - 1];
  return _(i, t) > gr2;
}) : e4;
var Tp = (e4) => {
  switch (e4) {
    case 0:
      return He;
    case 1:
      return pe2;
    case 2:
      return we2;
  }
  return Oe2;
};
var va = (e4, t, n, i, o, r, s) => s ? o && r ? Pr2(e4, o, t, r) : i : o ? eo(n || [0, 0], o, r ?? Bo([o])) : i;
var Da = (e4, t, n, i, o) => Oa(e4, t, n, n && Ve2(n, o, Array(4).fill(_t(n, o, e4))), i, o);
var La = (e4, t, n, i) => Wt(Ro(e4), n, t, i, true, true);
var Ca = (e4, t) => e4[0] === t[0] && e4[1] === t[1];
var Ga = (e4, t = gr2) => e4.slice(1).map((n, i) => Math.abs(n[0] - e4[i][0]) < t || Math.abs(n[1] - e4[i][1]) < t).every(Boolean);
var ye2 = (e4, t, n, i) => {
  let o = false, { points: r, fixedSegments: s, startBinding: a, endBinding: l, fileId: c2 } = n;
  G(e4) && (Object.keys(n).length === 0 || typeof r < "u" || typeof s < "u" || typeof a < "u" || typeof l < "u") ? n = { ...n, angle: 0, ...Tn2({ ...e4, x: n.x || e4.x, y: n.y || e4.y }, t, n, i) } : typeof r < "u" && (n = { ...kr(r), ...n });
  for (let d in n) {
    let u2 = n[d];
    if (typeof u2 < "u") {
      if (e4[d] === u2 && (typeof u2 != "object" || u2 === null || d === "groupIds" || d === "scale")) continue;
      if (d === "scale") {
        let p2 = e4[d], m = u2;
        if (p2[0] === m[0] && p2[1] === m[1]) continue;
      } else if (d === "points") {
        let p2 = e4[d], m = u2;
        if (p2.length === m.length) {
          let f2 = false, E3 = p2.length;
          for (; --E3; ) {
            let h2 = p2[E3], g = m[E3];
            if (h2[0] !== g[0] || h2[1] !== g[1]) {
              f2 = true;
              break;
            }
          }
          if (!f2) continue;
        }
      }
      e4[d] = u2, o = true;
    }
  }
  return o && ((typeof n.height < "u" || typeof n.width < "u" || typeof c2 < "u" || typeof r < "u") && be2.delete(e4), e4.version = n.version ?? e4.version + 1, e4.versionNonce = n.versionNonce ?? hs(), e4.updated = Ko()), e4;
};
var Me2 = (e4, t, n = false) => {
  let i = false;
  for (let o in t) {
    let r = t[o];
    if (typeof r < "u") {
      if (e4[o] === r && (typeof r != "object" || r === null)) continue;
      i = true;
    }
  }
  return !i && !n ? e4 : { ...e4, ...t, version: t.version ?? e4.version + 1, versionNonce: t.versionNonce ?? hs(), updated: Ko() };
};
var Mr = (e4) => e4.isBindingEnabled;
var oe = 5;
var kp = 10;
var Rp = (e4, t) => {
  let n = [];
  return t.forEach((i) => {
    let o = e4.getNonDeletedElement(i);
    o != null && n.push(o);
  }), n;
};
var Tr2 = (e4, t, n, i) => {
  let o = i.getNonDeletedElementsMap(), r = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
  Na(e4, t, n, "start", r, s, i, o), Na(e4, n, t, "end", r, s, i, o);
  let a = Array.from(s).filter((l) => !r.has(l));
  Rp(i, a).forEach((l) => {
    i.mutateElement(l, { boundElements: l.boundElements?.filter((c2) => c2.type !== "arrow" || c2.id !== e4.id) });
  });
};
var Na = (e4, t, n, i, o, r, s, a) => {
  if (t !== "keep") {
    if (t === null) {
      let l = _p(e4, i, s);
      l != null && r.add(l);
      return;
    }
    Wa(e4) ? (n == null || (n === "keep" ? !Xa(e4, t, i) : i === "start" || n.id !== t.id)) && (pn(e4, t, i, s), o.add(t.id)) : (pn(e4, t, i, s), o.add(t.id));
  }
};
var Ya = (e4, t, n, i, o) => Array.from(t.reduce((r, s) => {
  let a = Wt(s, n.getNonDeletedElements(), n.getNonDeletedElementsMap(), i, G(e4), G(e4));
  return a != null && !Ua(e4, o?.id, a) && r.add(a), r;
}, /* @__PURE__ */ new Set()));
var Hp = (e4, t) => ({ ...e4, gap: Math.min(e4.gap, so(t, t.width, t.height)) });
var pn = (e4, t, n, i) => {
  if (!_2(e4)) return;
  let o = { elementId: t.id, ...Hp(Up(e4, t, n, i.getNonDeletedElementsMap()), t) };
  G(e4) && (o = { ...o, ...ja(e4, t, n, i.getNonDeletedElementsMap()) }), i.mutateElement(e4, { [n === "start" ? "startBinding" : "endBinding"]: o }), Bo(t.boundElements || []).has(e4.id) || i.mutateElement(t, { boundElements: (t.boundElements || []).concat({ id: e4.id, type: "arrow" }) });
};
var Xa = (e4, t, n) => {
  let i = e4[n === "start" ? "endBinding" : "startBinding"];
  return Ua(e4, i?.elementId, t);
};
var Ua = (e4, t, n) => t === n.id && Wa(e4);
var Wa = (e4) => e4.points.length < 3 && !G(e4);
var _p = (e4, t, n) => {
  let i = t === "start" ? "startBinding" : "endBinding", o = e4[i];
  return o == null ? null : (n.mutateElement(e4, { [i]: null }), o.elementId);
};
var Wt = (e4, t, n, i, o, r) => {
  if (r) {
    let a = false, l = Xp(t, (d) => Le2(d, false) && no2(d, e4, n, i, (o || !Io(d)) && !V2(d))).filter((d) => a ? false : (Io(d) || (a = true), true));
    if (!l || l.length === 0) return null;
    if (l.length === 1) return l[0];
    let c2 = l.filter((d) => no2(d, e4, n, i, false));
    return c2.length === 1 ? c2[0] : l.sort((d, u2) => u2.width ** 2 + u2.height ** 2 - (d.width ** 2 + d.height ** 2)).pop();
  }
  return Yp(t, (a) => Le2(a, false) && no2(a, e4, n, i, (o || !Io(a)) && !V2(a)));
};
var Yp = (e4, t) => {
  let n = null;
  for (let i = e4.length - 1; i >= 0; --i) {
    let o = e4[i];
    if (!o.isDeleted && t(o)) {
      n = o;
      break;
    }
  }
  return n;
};
var Xp = (e4, t) => {
  let n = [];
  for (let i = e4.length - 1; i >= 0; --i) {
    let o = e4[i];
    o.isDeleted || t(o) && n.push(o);
  }
  return n;
};
var Up = (e4, t, n, i) => {
  let o = n === "start" ? -1 : 1, r = o === -1 ? 0 : e4.points.length - 1, s = r - o, a = Y3.getPointAtIndexGlobalCoordinates(e4, r, i), l = Y3.getPointAtIndexGlobalCoordinates(e4, s, i);
  return { focus: Kp(t, i, l, a), gap: Math.max(1, _t(t, i, a)) };
};
var Oa = (e4, t, n, i, o, r, s) => {
  let a = Mt2(h(t, e4));
  return !n || !i ? a : Vp(o, n, r, s) ? ti(n, i, e4) : Mt2(h(e4, me2(n, r)));
};
var Vp = (e4, t, n, i) => {
  let o = _t(t, n, e4), r = so(t, t.width, t.height, i);
  return o > r ? null : o;
};
var Pr2 = (e4, t, n, i) => {
  (Xo() || D()) && rs(e4.points.length > 1, "Arrow should have at least 2 points");
  let o = Ve2(t, i), r = e4.points[n === "start" ? 0 : e4.points.length - 1], s = p(e4.x + r[0], e4.y + r[1]), a = ra(t) ? $p(t, i, s) : s, l = G(e4), c2 = ct2(o), d = n === "start" ? 1 : e4.points.length - 2, u2 = w(p(e4.x + e4.points[d][0], e4.y + e4.points[d][1]), c2, e4.angle ?? 0), p2 = null;
  if (l) {
    let m = ke2(ti(t, o, s)), f2 = Zp(t, i, a), E3 = p(m ? c2[0] : f2[0], m ? f2[1] : c2[1]), h2 = v(E3, I(M(T(h(f2, E3)), Math.max(t.width, t.height) * 2), E3));
    p2 = In2(t, i, h2, oe).sort(Xt)[0];
  } else p2 = In2(t, i, v(u2, I(M(T(h(a, u2)), _(a, u2) + Math.max(t.width, t.height) * 2), u2)), oe).sort((m, f2) => Xt(m, u2) - Xt(f2, u2))[0];
  return !p2 || Xt(a, p2) < y ? a : l ? p2 : a;
};
var $p = (e4, t, n) => {
  let i = me2(e4, t), o = w(n, i, -e4.angle);
  return o[0] < e4.x && o[1] < e4.y ? o[1] - e4.y > -oe ? w(p(e4.x - oe, e4.y), i, e4.angle) : w(p(e4.x, e4.y - oe), i, e4.angle) : o[0] < e4.x && o[1] > e4.y + e4.height ? o[0] - e4.x > -oe ? w(p(e4.x, e4.y + e4.height + oe), i, e4.angle) : w(p(e4.x - oe, e4.y + e4.height), i, e4.angle) : o[0] > e4.x + e4.width && o[1] > e4.y + e4.height ? o[0] - e4.x < e4.width + oe ? w(p(e4.x + e4.width, e4.y + e4.height + oe), i, e4.angle) : w(p(e4.x + e4.width + oe, e4.y + e4.height), i, e4.angle) : o[0] > e4.x + e4.width && o[1] < e4.y ? o[0] - e4.x < e4.width + oe ? w(p(e4.x + e4.width, e4.y - oe), i, e4.angle) : w(p(e4.x + e4.width + oe, e4.y), i, e4.angle) : n;
};
var Zp = (e4, t, n, i = 0.05) => {
  let { x: o, y: r, width: s, height: a, angle: l } = e4, c2 = me2(e4, t, -0.1, -0.1), d = w(n, c2, -l), u2 = ft(i * a, 5, 80), p2 = ft(i * s, 5, 80);
  if (d[0] <= o + s / 2 && d[1] > c2[1] - u2 && d[1] < c2[1] + u2) return w(p(o - oe, c2[1]), c2, l);
  if (d[1] <= r + a / 2 && d[0] > c2[0] - p2 && d[0] < c2[0] + p2) return w(p(c2[0], r - oe), c2, l);
  if (d[0] >= o + s / 2 && d[1] > c2[1] - u2 && d[1] < c2[1] + u2) return w(p(o + s + oe, c2[1]), c2, l);
  if (d[1] >= r + a / 2 && d[0] > c2[0] - p2 && d[0] < c2[0] + p2) return w(p(c2[0], r + a + oe), c2, l);
  if (e4.type === "diamond") {
    let m = oe, f2 = p(o + s / 4 - m, r + a / 4 - m), E3 = p(o + 3 * s / 4 + m, r + a / 4 - m), h2 = p(o + s / 4 - m, r + 3 * a / 4 + m), g = p(o + 3 * s / 4 + m, r + 3 * a / 4 + m);
    if (_(f2, d) < Math.max(p2, u2)) return w(f2, c2, l);
    if (_(E3, d) < Math.max(p2, u2)) return w(E3, c2, l);
    if (_(h2, d) < Math.max(p2, u2)) return w(h2, c2, l);
    if (_(g, d) < Math.max(p2, u2)) return w(g, c2, l);
  }
  return n;
};
var ja = (e4, t, n, i) => {
  let o = [t.x, t.y, t.x + t.width, t.y + t.height], r = Pr2(e4, t, n, i), s = p(o[0] + (o[2] - o[0]) / 2, o[1] + (o[3] - o[1]) / 2), a = w(r, s, -t.angle);
  return { fixedPoint: Ar([(a[0] - t.x) / t.width, (a[1] - t.y) / t.height]) };
};
var no2 = (e4, { x: t, y: n }, i, o, r) => {
  let s = p(t, n), a = so(e4, e4.width, e4.height, o), l = (r || !Io(e4)) && !V2(e4), c2 = [t - a, n - a, t + a, n + a], d = he2(e4, i);
  if (!un2(c2, d)) return false;
  let u2 = In2(e4, i, v(me2(e4, i), s)), p2 = _t(e4, i, s);
  return l ? u2.length === 0 || p2 <= a : u2.length > 0 && p2 <= a;
};
var so = (e4, t, n, i) => {
  let o = i?.value && i.value < 1 ? i.value : 1, s = (e4.type === "diamond" ? 1 / Math.sqrt(2) : 1) * Math.min(t, n);
  return Math.max(16, Math.min(0.25 * s, 32), kp / o + oe);
};
var Kp = (e4, t, n, i) => {
  let o = me2(e4, t);
  if (A(n, i)) return 0;
  let r = w(n, o, -e4.angle), s = w(i, o, -e4.angle), a = Math.sign(N(h(s, n), h(s, o))) * -1, l = v(s, I(M(T(h(s, r)), Math.max(e4.width * 2, e4.height * 2)), s)), c2 = e4.type === "diamond" ? [v(p(e4.x + e4.width / 2, e4.y), p(e4.x + e4.width / 2, e4.y + e4.height)), v(p(e4.x, e4.y + e4.height / 2), p(e4.x + e4.width, e4.y + e4.height / 2))] : [v(p(e4.x, e4.y), p(e4.x + e4.width, e4.y + e4.height)), v(p(e4.x + e4.width, e4.y), p(e4.x, e4.y + e4.height))], d = e4.type === "diamond" ? [v(p(e4.x + e4.width / 2, e4.y - e4.height), p(e4.x + e4.width / 2, e4.y + e4.height * 2)), v(p(e4.x - e4.width, e4.y + e4.height / 2), p(e4.x + e4.width * 2, e4.y + e4.height / 2))] : [v(p(e4.x - e4.width, e4.y - e4.height), p(e4.x + e4.width * 2, e4.y + e4.height * 2)), v(p(e4.x + e4.width * 2, e4.y - e4.height), p(e4.x - e4.width, e4.y + e4.height * 2))];
  return [et(l, d[0]), et(l, d[1])].filter((m) => m !== null).sort((m, f2) => Xt(m, i) - Xt(f2, i)).map((m, f2) => a * _(o, m) / (e4.type === "diamond" ? _(c2[f2][0], c2[f2][1]) / 2 : Math.sqrt(e4.width ** 2 + e4.height ** 2) / 2)).sort((m, f2) => Math.abs(m) - Math.abs(f2))[0] ?? 0;
};
var eo = (e4, t, n) => {
  let [i, o] = Ar(e4);
  return w(p(t.x + t.width * i, t.y + t.height * o), me2(t, n), t.angle);
};
var Ar = (e4) => e4 && (Math.abs(e4[0] - 0.5) < 1e-4 || Math.abs(e4[1] - 0.5) < 1e-4) ? e4.map((t) => Math.abs(t - 0.5) < 1e-4 ? 0.5001 : t) : e4;
var Dr = ({ points: e4 }) => {
  let t = e4[0][0], n = e4[0][1];
  return { points: e4.map((i) => p(i[0] - t, i[1] - n)), offsetX: t, offsetY: n };
};
var Y3 = class e {
  elementId;
  selectedPointsIndices;
  pointerDownState;
  isDragging;
  lastUncommittedPoint;
  pointerOffset;
  startBindingElement;
  endBindingElement;
  hoverPointIndex;
  segmentMidPointHoveredCoords;
  elbowed;
  customLineAngle;
  constructor(t, n) {
    this.elementId = t.id, A(t.points[0], p(0, 0)) || (console.error("Linear element is not normalized", Error().stack), ye2(t, n, e.getNormalizeElementPointsAndCoords(t))), this.selectedPointsIndices = null, this.lastUncommittedPoint = null, this.isDragging = false, this.pointerOffset = { x: 0, y: 0 }, this.startBindingElement = "keep", this.endBindingElement = "keep", this.pointerDownState = { prevSelectedPointsIndices: null, lastClickedPoint: -1, lastClickedIsEndPoint: false, origin: null, segmentMidpoint: { value: null, index: null, added: false } }, this.hoverPointIndex = -1, this.segmentMidPointHoveredCoords = null, this.elbowed = G(t) && t.elbowed, this.customLineAngle = null;
  }
  static POINT_HANDLE_SIZE = 10;
  static getElement(t, n) {
    let i = n.get(t);
    return i || null;
  }
  static handleBoxSelection(t, n, i, o) {
    if (!n.editingLinearElement || !n.selectionElement) return false;
    let { editingLinearElement: r } = n, { selectedPointsIndices: s, elementId: a } = r, l = e.getElement(a, o);
    if (!l) return false;
    let [c2, d, u2, p2] = H(n.selectionElement, o), f2 = e.getPointsGlobalCoordinates(l, o).reduce((E3, h2, g) => ((h2[0] >= c2 && h2[0] <= u2 && h2[1] >= d && h2[1] <= p2 || t.shiftKey && s?.includes(g)) && E3.push(g), E3), []).filter((E3) => !(G(l) && E3 !== 0 && E3 !== l.points.length - 1));
    i({ editingLinearElement: { ...r, selectedPointsIndices: f2.length ? f2 : null } });
  }
  static handlePointDragging(t, n, i, o, r) {
    if (!r) return null;
    let { elementId: s } = r, a = n.scene.getNonDeletedElementsMap(), l = e.getElement(s, a), c2 = r.customLineAngle;
    if (!l || G(l) && !r.pointerDownState.lastClickedIsEndPoint && r.pointerDownState.lastClickedPoint !== 0) return null;
    let d = G(l) ? [r.selectedPointsIndices?.includes(0) ? 0 : void 0, r.selectedPointsIndices?.find((m) => m > 0) ? l.points.length - 1 : void 0].filter((m) => m !== void 0) : r.selectedPointsIndices, u2 = G(l) ? r.pointerDownState.lastClickedPoint > 0 ? l.points.length - 1 : 0 : r.pointerDownState.lastClickedPoint, p2 = l.points[u2];
    if (d && p2) {
      if (Pr(t) && d.length === 1 && l.points.length > 1) {
        let h2 = d[0], g = l.points[h2 === 0 ? 1 : h2 - 1];
        c2 = r.customLineAngle ?? Math.atan2(l.points[h2][1] - g[1], l.points[h2][0] - g[0]);
        let [x2, y3] = e._getShiftLockedDelta(l, a, g, p(i, o), t[y2.CTRL_OR_CMD] ? null : n.getEffectiveGridSize(), c2);
        e.movePoints(l, n.scene, /* @__PURE__ */ new Map([[h2, { point: p(x2 + g[0], y3 + g[1]), isDragging: h2 === u2 }]]));
      } else {
        let h2 = e.createPointAt(l, a, i - r.pointerOffset.x, o - r.pointerOffset.y, t[y2.CTRL_OR_CMD] ? null : n.getEffectiveGridSize()), g = h2[0] - p2[0], x2 = h2[1] - p2[1];
        e.movePoints(l, n.scene, new Map(d.map((y3) => {
          let b = y3 === u2 ? e.createPointAt(l, a, i - r.pointerOffset.x, o - r.pointerOffset.y, t[y2.CTRL_OR_CMD] ? null : n.getEffectiveGridSize()) : p(l.points[y3][0] + g, l.points[y3][1] + x2);
          return [y3, { point: b, isDragging: y3 === u2 }];
        })));
      }
      Z2(l, a) && dn(l, n.scene, false);
      let f2 = [];
      if (Qo(l, false)) {
        let h2 = d[0] === 0, g = d[d.length - 1] === l.points.length - 1, x2 = [];
        !h2 != !g ? x2.push({ x: i, y: o }) : (h2 && x2.push(Ro(e.getPointGlobalCoordinates(l, l.points[0], a))), g && x2.push(Ro(e.getPointGlobalCoordinates(l, l.points[d[d.length - 1]], a)))), x2.length && (f2 = Ya(l, x2, n.scene, n.state.zoom));
      }
      let E3 = { ...r, selectedPointsIndices: d, segmentMidPointHoveredCoords: u2 !== 0 && u2 !== l.points.length - 1 ? this.getPointGlobalCoordinates(l, p2, a) : null, hoverPointIndex: u2 === 0 || u2 === l.points.length - 1 ? u2 : -1, isDragging: true, customLineAngle: c2 };
      return { ...n.state, editingLinearElement: n.state.editingLinearElement ? E3 : null, selectedLinearElement: E3, suggestedBindings: f2 };
    }
    return null;
  }
  static handlePointerUp(t, n, i, o) {
    let r = o.getNonDeletedElementsMap(), s = o.getNonDeletedElements(), a = go(t, i), { elementId: l, selectedPointsIndices: c2, isDragging: d, pointerDownState: u2 } = n, p2 = e.getElement(l, r);
    if (!p2) return n;
    let m = {};
    if (d && c2) {
      for (let f2 of c2) if (f2 === 0 || f2 === p2.points.length - 1) {
        an2(p2.points, i.zoom.value) && (ln(p2) && o.mutateElement(p2, { ...nl(p2, true) }, { informMutation: false, isDragging: false }), e.movePoints(p2, o, /* @__PURE__ */ new Map([[f2, { point: f2 === 0 ? p2.points[p2.points.length - 1] : p2.points[0] }]])));
        let E3 = Mr(i) ? Wt((c2?.length ?? 0) > 1 ? Ro(e.getPointAtIndexGlobalCoordinates(p2, f2, r)) : a, s, r, i.zoom, G(p2), G(p2)) : null;
        m[f2 === 0 ? "startBindingElement" : "endBindingElement"] = E3;
      }
    }
    return { ...n, ...m, segmentMidPointHoveredCoords: null, hoverPointIndex: -1, selectedPointsIndices: d || t.shiftKey ? !d && t.shiftKey && u2.prevSelectedPointsIndices?.includes(u2.lastClickedPoint) ? c2 && c2.filter((f2) => f2 !== u2.lastClickedPoint) : c2 : c2?.includes(u2.lastClickedPoint) ? [u2.lastClickedPoint] : c2, isDragging: false, pointerOffset: { x: 0, y: 0 }, customLineAngle: null };
  }
  static getEditorMidPoints = (t, n, i) => {
    let o = Z2(t, n);
    if (!G(t) && !i.editingLinearElement && t.points.length > 2 && !o) return [];
    let r = e.getPointsGlobalCoordinates(t, n), s = 0, a = [];
    for (; s < r.length - 1; ) {
      if (e.isSegmentTooShort(t, t.points[s], t.points[s + 1], s, i.zoom)) {
        a.push(null), s++;
        continue;
      }
      let l = e.getSegmentMidPoint(t, s + 1);
      a.push(l), s++;
    }
    return a;
  };
  static getSegmentMidpointHitCoords = (t, n, i, o) => {
    let { elementId: r } = t, s = e.getElement(r, o);
    if (!s) return null;
    let a = e.getPointIndexUnderCursor(s, o, i.zoom, n.x, n.y);
    if (!G(s) && a >= 0 || e.getPointsGlobalCoordinates(s, o).length >= 3 && !i.editingLinearElement && !G(s)) return null;
    let c2 = (e.POINT_HANDLE_SIZE + 1) / i.zoom.value, d = t.segmentMidPointHoveredCoords;
    if (d && _(p(d[0], d[1]), p(n.x, n.y)) <= c2) return d;
    let u2 = 0, p2 = e.getEditorMidPoints(s, o, i);
    for (; u2 < p2.length; ) {
      if (p2[u2] !== null && _(p2[u2], p(n.x, n.y)) <= c2) return p2[u2];
      u2++;
    }
    return null;
  };
  static isSegmentTooShort(t, n, i, o, r) {
    if (G(t)) return o >= 0 && o < t.points.length ? _(n, i) * r.value < e.POINT_HANDLE_SIZE / 2 : false;
    let s = _(n, i);
    if (t.points.length > 2 && t.roundness) {
      let [a, l] = Ci(t);
      rs(a.length === 0 && l.length > 0, "Only linears built out of curves are supported"), rs(a.length + l.length >= o, "Invalid segment index while calculating mid point"), s = nt(l[o]);
    }
    return s * r.value < e.POINT_HANDLE_SIZE * 4;
  }
  static getSegmentMidPoint(t, n) {
    if (G(t)) {
      rs(t.points.length >= n, "Invalid segment index while calculating elbow arrow mid point");
      let r = z(t.points[n - 1], t.points[n]);
      return p(t.x + r[0], t.y + r[1]);
    }
    let [i, o] = Ci(t);
    if (rs(i.length === 0 && o.length > 0 || i.length > 0 && o.length === 0, "Only linears built out of either segments or curves are supported"), rs(i.length + o.length >= n, "Invalid segment index while calculating mid point"), i.length) {
      let r = i[n - 1];
      return z(r[0], r[1]);
    }
    if (o.length) {
      let r = o[n - 1];
      return rn(r, 0.5);
    }
    rs(false, "Invalid segment type while calculating mid point");
  }
  static getSegmentMidPointIndex(t, n, i, o) {
    let r = e.getElement(t.elementId, o);
    if (!r) return -1;
    let s = e.getEditorMidPoints(r, o, n), a = 0;
    for (; a < s.length; ) {
      if (e.arePointsEqual(i, s[a])) return a + 1;
      a++;
    }
    return -1;
  }
  static handlePointerDown(t, n, i, o, r, s) {
    let a = n.state, l = s.getNonDeletedElementsMap(), c2 = s.getNonDeletedElements(), d = { didAddPoint: false, hitElement: null, linearElementEditor: null };
    if (!r) return d;
    let { elementId: u2 } = r, p2 = e.getElement(u2, l);
    if (!p2) return d;
    let m = e.getSegmentMidpointHitCoords(r, o, a, l), f2 = null;
    if (m) f2 = e.getSegmentMidPointIndex(r, a, m, l);
    else if (t.altKey && a.editingLinearElement) return r.lastUncommittedPoint == null && (s.mutateElement(p2, { points: [...p2.points, e.createPointAt(p2, l, o.x, o.y, t[y2.CTRL_OR_CMD] ? null : n.getEffectiveGridSize())] }), d.didAddPoint = true), i.scheduleCapture(), d.linearElementEditor = { ...r, pointerDownState: { prevSelectedPointsIndices: r.selectedPointsIndices, lastClickedPoint: -1, lastClickedIsEndPoint: false, origin: { x: o.x, y: o.y }, segmentMidpoint: { value: m, index: f2, added: false } }, selectedPointsIndices: [p2.points.length - 1], lastUncommittedPoint: null, endBindingElement: Wt(o, c2, l, n.state.zoom, r.elbowed) }, d.didAddPoint = true, d;
    let E3 = e.getPointIndexUnderCursor(p2, l, a.zoom, o.x, o.y);
    if (E3 >= 0 || m) d.hitElement = p2;
    else {
      let { startBindingElement: v2, endBindingElement: T3 } = r;
      Mr(a) && Qo(p2) && Tr2(p2, v2, T3, s);
    }
    let [h2, g, x2, y3] = H(p2, l), b = (h2 + x2) / 2, w3 = (g + y3) / 2, I3 = E3 > -1 && w(p(p2.x + p2.points[E3][0], p2.y + p2.points[E3][1]), p(b, w3), p2.angle), M3 = E3 > -1 || t.shiftKey ? t.shiftKey || r.selectedPointsIndices?.includes(E3) ? sm([...r.selectedPointsIndices || [], E3]) : [E3] : null;
    return d.linearElementEditor = { ...r, pointerDownState: { prevSelectedPointsIndices: r.selectedPointsIndices, lastClickedPoint: E3, lastClickedIsEndPoint: E3 === p2.points.length - 1, origin: { x: o.x, y: o.y }, segmentMidpoint: { value: m, index: f2, added: false } }, selectedPointsIndices: M3, pointerOffset: I3 ? { x: o.x - I3[0], y: o.y - I3[1] } : { x: 0, y: 0 } }, d;
  }
  static arePointsEqual(t, n) {
    return !t && !n ? true : !t || !n ? false : A(t, n);
  }
  static handlePointerMove(t, n, i, o) {
    let r = o.state;
    if (!r.editingLinearElement) return null;
    let { elementId: s, lastUncommittedPoint: a } = r.editingLinearElement, l = o.scene.getNonDeletedElementsMap(), c2 = e.getElement(s, l);
    if (!c2) return r.editingLinearElement;
    let { points: d } = c2, u2 = d[d.length - 1];
    if (!t.altKey) return u2 === a && e.deletePoints(c2, o, [d.length - 1]), { ...r.editingLinearElement, lastUncommittedPoint: null };
    let p2;
    if (Pr(t) && d.length >= 2) {
      let m = d[d.length - 2], [f2, E3] = e._getShiftLockedDelta(c2, l, m, p(n, i), t[y2.CTRL_OR_CMD] ? null : o.getEffectiveGridSize());
      p2 = p(f2 + m[0], E3 + m[1]);
    } else p2 = e.createPointAt(c2, l, n - r.editingLinearElement.pointerOffset.x, i - r.editingLinearElement.pointerOffset.y, t[y2.CTRL_OR_CMD] || G(c2) ? null : o.getEffectiveGridSize());
    return u2 === a ? e.movePoints(c2, o.scene, /* @__PURE__ */ new Map([[c2.points.length - 1, { point: p2 }]])) : e.addPoints(c2, o.scene, [p2]), { ...r.editingLinearElement, lastUncommittedPoint: c2.points[c2.points.length - 1] };
  }
  static getPointGlobalCoordinates(t, n, i) {
    let [o, r, s, a] = H(t, i), l = (o + s) / 2, c2 = (r + a) / 2, { x: d, y: u2 } = t;
    return w(p(d + n[0], u2 + n[1]), p(l, c2), t.angle);
  }
  static getPointsGlobalCoordinates(t, n) {
    let [i, o, r, s] = H(t, n), a = (i + r) / 2, l = (o + s) / 2;
    return t.points.map((c2) => {
      let { x: d, y: u2 } = t;
      return w(p(d + c2[0], u2 + c2[1]), p(a, l), t.angle);
    });
  }
  static getPointAtIndexGlobalCoordinates(t, n, i) {
    let o = n < 0 ? t.points.length + n : n, [r, s, a, l] = H(t, i), c2 = (r + a) / 2, d = (s + l) / 2, u2 = t.points[o], { x: p2, y: m } = t;
    return u2 ? w(p(p2 + u2[0], m + u2[1]), p(c2, d), t.angle) : w(p(p2, m), p(c2, d), t.angle);
  }
  static pointFromAbsoluteCoords(t, n, i) {
    if (G(t)) return p(n[0] - t.x, n[1] - t.y);
    let [o, r, s, a] = H(t, i), l = (o + s) / 2, c2 = (r + a) / 2, [d, u2] = w(p(n[0], n[1]), p(l, c2), -t.angle);
    return p(d - t.x, u2 - t.y);
  }
  static getPointIndexUnderCursor(t, n, i, o, r) {
    let s = e.getPointsGlobalCoordinates(t, n), a = s.length;
    for (; --a > -1; ) {
      let l = s[a];
      if (_(p(o, r), p(l[0], l[1])) * i.value < e.POINT_HANDLE_SIZE + 1) return a;
    }
    return -1;
  }
  static createPointAt(t, n, i, o, r) {
    let s = Kr(i, o, r), [a, l, c2, d] = H(t, n), u2 = (a + c2) / 2, p2 = (l + d) / 2, [m, f2] = w(p(s[0], s[1]), p(u2, p2), -t.angle);
    return p(m - t.x, f2 - t.y);
  }
  static getNormalizeElementPointsAndCoords(t) {
    let { points: n, offsetX: i, offsetY: o } = Dr(t);
    return { points: n, x: t.x + i, y: t.y + o };
  }
  static duplicateSelectedPoints(t, n) {
    rs(t.editingLinearElement, "Not currently editing a linear element");
    let i = n.getNonDeletedElementsMap(), { selectedPointsIndices: o, elementId: r } = t.editingLinearElement, s = e.getElement(r, i);
    rs(s, "The linear element does not exist in the provided Scene"), rs(o != null, "There are no selected points to duplicate");
    let { points: a } = s, l = [], c2 = false, d = -1, u2 = a.reduce((p2, m, f2) => {
      if (++d, p2.push(m), o.includes(f2)) {
        let h2 = a[f2 + 1];
        h2 || (c2 = true), p2.push(h2 ? p((m[0] + h2[0]) / 2, (m[1] + h2[1]) / 2) : p(m[0], m[1])), l.push(d + 1), ++d;
      }
      return p2;
    }, []);
    if (n.mutateElement(s, { points: u2 }), c2) {
      let p2 = s.points[s.points.length - 1];
      e.movePoints(s, n, /* @__PURE__ */ new Map([[s.points.length - 1, { point: p(p2[0] + 30, p2[1] + 30) }]]));
    }
    return { ...t, editingLinearElement: { ...t.editingLinearElement, selectedPointsIndices: l } };
  }
  static deletePoints(t, n, i) {
    let o = n.state.editingLinearElement?.lastUncommittedPoint === t.points[t.points.length - 1], r = t.points.filter((d, u2) => !i.includes(u2));
    ln(t) && t.polygon && (o || i.includes(0) || i.includes(t.points.length - 1)) && (r[0] = p(r[r.length - 1][0], r[r.length - 1][1]));
    let { points: a, offsetX: l, offsetY: c2 } = Dr({ points: r });
    e._updatePoints(t, n.scene, a, l, c2);
  }
  static addPoints(t, n, i) {
    let o = [...t.points, ...i];
    ln(t) && t.polygon && (o[0] = p(o[o.length - 1][0], o[o.length - 1][1]));
    let { points: r, offsetX: s, offsetY: a } = Dr({ points: o });
    e._updatePoints(t, n, r, s, a);
  }
  static movePoints(t, n, i, o) {
    let { points: r } = t;
    if (ln(t) && t.polygon) {
      let d = i.get(0), u2 = i.get(r.length - 1);
      d ? i.set(r.length - 1, { point: p(d.point[0], d.point[1]), isDragging: d.isDragging }) : u2 && i.set(0, { point: p(u2.point[0], u2.point[1]), isDragging: u2.isDragging });
    }
    let s = i.get(0)?.point ?? p(0, 0), [a, l] = s, c2 = G(t) ? [i.get(0)?.point ?? r[0], i.get(r.length - 1)?.point ?? r[r.length - 1]] : r.map((d, u2) => {
      let p2 = i.get(u2)?.point ?? d;
      return p(p2[0] - a, p2[1] - l);
    });
    e._updatePoints(t, n, c2, a, l, o, { isDragging: Array.from(i.values()).some((d) => d.isDragging) });
  }
  static shouldAddMidpoint(t, n, i, o) {
    let r = e.getElement(t.elementId, o);
    if (r && G(r) || !r) return false;
    let { segmentMidpoint: s } = t.pointerDownState;
    if (s.added || s.value === null || s.index === null || t.pointerDownState.origin === null) return false;
    let a = t.pointerDownState.origin, l = _(p(a.x, a.y), p(n.x, n.y));
    return !(!i.editingLinearElement && l < Bt / i.zoom.value);
  }
  static addMidpoint(t, n, i, o, r) {
    let s = r.getNonDeletedElementsMap(), a = e.getElement(t.elementId, s);
    if (!a) return;
    let { segmentMidpoint: l } = t.pointerDownState, c2 = { pointerDownState: t.pointerDownState, selectedPointsIndices: t.selectedPointsIndices }, d = e.createPointAt(a, s, n.x, n.y, o && !G(a) ? i.getEffectiveGridSize() : null), u2 = [...a.points.slice(0, l.index), d, ...a.points.slice(l.index)];
    return r.mutateElement(a, { points: u2 }), c2.pointerDownState = { ...t.pointerDownState, segmentMidpoint: { ...t.pointerDownState.segmentMidpoint, added: true }, lastClickedPoint: l.index }, c2.selectedPointsIndices = [l.index], c2;
  }
  static _updatePoints(t, n, i, o, r, s, a) {
    if (G(t)) {
      let l = {};
      s?.startBinding !== void 0 && (l.startBinding = s.startBinding !== null && Qn2(s.startBinding) ? s.startBinding : null), s?.endBinding !== void 0 && (l.endBinding = s.endBinding !== null && Qn2(s.endBinding) ? s.endBinding : null), l.points = Array.from(i), n.mutateElement(t, l, { informMutation: true, isDragging: a?.isDragging ?? false });
    } else {
      let l = Lr(t, i), c2 = Lr(t, t.points), d = (l[0] + l[2]) / 2, u2 = (l[1] + l[3]) / 2, p2 = (c2[0] + c2[2]) / 2, m = (c2[1] + c2[3]) / 2, f2 = p2 - d, E3 = m - u2, h2 = w(p(o, r), p(f2, E3), t.angle);
      n.mutateElement(t, { ...s, points: i, x: t.x + h2[0], y: t.y + h2[1] });
    }
  }
  static _getShiftLockedDelta(t, n, i, o, r, s) {
    let a = e.getPointGlobalCoordinates(t, i, n);
    if (G(t)) return [o[0] - a[0], o[1] - a[1]];
    let [l, c2] = Kr(o[0], o[1], r), { width: d, height: u2 } = il(a[0], a[1], l, c2, s);
    return w(p(d, u2), p(0, 0), -t.angle);
  }
  static getBoundTextElementPosition = (t, n, i) => {
    e.getPointsGlobalCoordinates(t, i).length < 2 && ye2(n, i, { isDeleted: true });
    let r = 0, s = 0;
    if (t.points.length % 2 === 1) {
      let a = Math.floor(t.points.length / 2), l = e.getPointGlobalCoordinates(t, t.points[a], i);
      r = l[0] - n.width / 2, s = l[1] - n.height / 2;
    } else {
      let a = t.points.length / 2 - 1, l = e.getSegmentMidPoint(t, a + 1);
      r = l[0] - n.width / 2, s = l[1] - n.height / 2;
    }
    return { x: r, y: s };
  };
  static getMinMaxXYWithBoundText = (t, n, i, o) => {
    let [r, s, a, l] = i, c2 = (r + a) / 2, d = (s + l) / 2, { x: u2, y: p2 } = e.getBoundTextElementPosition(t, o, n), m = u2 + o.width, f2 = p2 + o.height, E3 = p(c2, d), h2 = w(p(r, s), E3, t.angle), g = w(p(a, s), E3, t.angle), x2 = w(p(u2, p2), E3, -t.angle), y3 = w(p(m, p2), E3, -t.angle), b = w(p(u2, f2), E3, -t.angle), w3 = w(p(m, f2), E3, -t.angle);
    return h2[0] < g[0] && h2[1] >= g[1] ? (r = Math.min(r, b[0]), a = Math.max(a, Math.max(y3[0], w3[0])), s = Math.min(s, x2[1]), l = Math.max(l, w3[1])) : h2[0] >= g[0] && h2[1] > g[1] ? (r = Math.min(r, w3[0]), a = Math.max(a, Math.max(x2[0], y3[0])), s = Math.min(s, b[1]), l = Math.max(l, y3[1])) : h2[0] >= g[0] ? (r = Math.min(r, y3[0]), a = Math.max(a, b[0]), s = Math.min(s, w3[1]), l = Math.max(l, x2[1])) : h2[1] <= g[1] && (r = Math.min(r, Math.min(y3[0], x2[0])), a = Math.max(a, w3[0]), s = Math.min(s, y3[1]), l = Math.max(l, b[1])), [r, s, a, l, c2, d];
  };
  static getElementAbsoluteCoords = (t, n, i = false) => {
    let o, r, s, a, l;
    if (t.points.length < 2 || !be2.get(t)) {
      let { minX: p2, minY: m, maxX: f2, maxY: E3 } = t.points.reduce((h2, [g, x2]) => (h2.minY = Math.min(h2.minY, x2), h2.minX = Math.min(h2.minX, g), h2.maxX = Math.max(h2.maxX, g), h2.maxY = Math.max(h2.maxY, x2), h2), { minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 });
      r = p2 + t.x, s = m + t.y, a = f2 + t.x, l = E3 + t.y;
    } else {
      let p2 = be2.generateElementShape(t, null), m = gt2(p2[0]), [f2, E3, h2, g] = si(m);
      r = f2 + t.x, s = E3 + t.y, a = h2 + t.x, l = g + t.y;
    }
    let c2 = (r + a) / 2, d = (s + l) / 2;
    if (o = [r, s, a, l, c2, d], !i) return o;
    let u2 = Z2(t, n);
    return u2 && (o = e.getMinMaxXYWithBoundText(t, n, [r, s, a, l], u2)), o;
  };
  static moveFixedSegment(t, n, i, o, r) {
    let s = r.getNonDeletedElementsMap(), a = e.getElement(t.elementId, s);
    if (!a || !G(a)) return t;
    if (n && n > 0 && n < a.points.length) {
      let l = ke2(Mt2(h(a.points[n], a.points[n - 1]))), c2 = (a.fixedSegments ?? []).reduce((m, f2) => (m[f2.index] = f2, m), {});
      c2[n] = { index: n, start: p(l ? a.points[n - 1][0] : i - a.x, l ? o - a.y : a.points[n - 1][1]), end: p(l ? a.points[n][0] : i - a.x, l ? o - a.y : a.points[n][1]) };
      let d = Object.values(c2).sort((m, f2) => m.index - f2.index), u2 = d.map((m) => m.index).reduce((m, f2) => f2 < n ? m + 1 : m, 0);
      r.mutateElement(a, { fixedSegments: d });
      let p2 = p(a.x + (a.fixedSegments[u2].start[0] + a.fixedSegments[u2].end[0]) / 2, a.y + (a.fixedSegments[u2].start[1] + a.fixedSegments[u2].end[1]) / 2);
      return { ...t, segmentMidPointHoveredCoords: p2, pointerDownState: { ...t.pointerDownState, segmentMidpoint: { added: false, index: a.fixedSegments[u2].index, value: p2 } } };
    }
    return t;
  }
  static deleteFixedSegment(t, n, i) {
    n.mutateElement(t, { fixedSegments: t.fixedSegments?.filter((o) => o.index !== i) });
  }
};
var sm = (e4) => {
  let t = [...new Set(e4.filter((n) => n !== null && n !== -1))];
  return t = t.sort((n, i) => n - i), t.length ? t : null;
};
P();
P();
P();
P();
P();
var ml = (function() {
  let e4 = null, t = null, n = null, i = (r, s, a, l) => {
    if (n !== void 0 && s === t && r === e4 && a.editingGroupId === n?.editingGroupId) return n;
    let c2 = {};
    for (let p2 of r) {
      let m = p2.groupIds;
      if (a.editingGroupId) {
        let f2 = m.indexOf(a.editingGroupId);
        f2 > -1 && (m = m.slice(0, f2));
      }
      if (m.length > 0) {
        let f2 = m[m.length - 1];
        c2[f2] = true;
      }
    }
    let d = {}, u2 = s.reduce((p2, m) => {
      if (m.isDeleted) return p2;
      let f2 = m.groupIds.find((E3) => c2[E3]);
      return f2 && (p2[m.id] = true, Array.isArray(d[f2]) ? d[f2].push(m.id) : d[f2] = [m.id]), p2;
    }, {});
    for (let p2 of Object.keys(d)) d[p2].length < 2 && c2[p2] && (c2[p2] = false);
    return t = s, e4 = r, n = { editingGroupId: a.editingGroupId, selectedGroupIds: c2, selectedElementIds: Br({ ...a.selectedElementIds, ...u2 }, l) }, n;
  }, o = (r, s, a, l) => {
    let c2 = l ? l.scene.getSelectedElements({ selectedElementIds: r.selectedElementIds, elements: s }) : pt2(s, r);
    return c2.length ? i(c2, s, r, a) : { selectedGroupIds: {}, editingGroupId: null, selectedElementIds: Br(r.selectedElementIds, a) };
  };
  return o.clearCache = () => {
    t = null, e4 = null, n = null;
  }, o;
})();
var Jy = (function() {
  let e4 = null, t = null, n = null, i = (o, r) => (n != null && o === e4 && r.selectedElementIds === t || (n = o.some((s) => r.selectedElementIds[s.id]), e4 = o, t = r.selectedElementIds), n);
  return i.clearCache = () => {
    e4 = null, t = null, n = null;
  }, i;
})();
var pt2 = (e4, t, n) => {
  let i = /* @__PURE__ */ new Set(), o = [];
  for (let r of e4.values()) {
    if (t.selectedElementIds[r.id]) {
      o.push(r), i.add(r.id);
      continue;
    }
    if (n?.includeBoundTextElement && fe2(r) && t.selectedElementIds[r?.containerId]) {
      o.push(r), i.add(r.id);
      continue;
    }
  }
  if (n?.includeElementsInFrames) {
    let r = [];
    return o.forEach((s) => {
      V2(s) && qt(e4, s.id).forEach((a) => !i.has(a.id) && r.push(a)), r.push(s);
    }), r;
  }
  return o;
};
var Br = (e4, t) => Qe(t.selectedElementIds, e4) ? t.selectedElementIds : e4;
var qt = (e4, t) => {
  let n = [];
  for (let i of e4.values()) i.frameId === t && n.push(i);
  return n;
};
var Cl = typeof document < "u" ? document.createElement("img") : { src: "" };
Cl.src = `data:${Z.svg},${encodeURIComponent('<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="image" class="svg-inline--fa fa-image fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#888" d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"></path></svg>')}`;
var Bl = typeof document < "u" ? document.createElement("img") : { src: "" };
Bl.src = `data:${Z.svg},${encodeURIComponent('<svg viewBox="0 0 668 668" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48ZM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56ZM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48Z" style="fill:#888;fill-rule:nonzero" transform="matrix(.81709 0 0 .81709 124.825 145.825)"/><path d="M256 8C119.034 8 8 119.033 8 256c0 136.967 111.034 248 248 248s248-111.034 248-248S392.967 8 256 8Zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676ZM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676Z" style="fill:#888;fill-rule:nonzero" transform="matrix(.30366 0 0 .30366 506.822 60.065)"/></svg>')}`;
var Eo = /* @__PURE__ */ new WeakMap();
var Gl = /* @__PURE__ */ new WeakMap([]);
function Ol(e4) {
  let t = Wm(e4), n = new Path2D(t);
  return Gl.set(e4, n), n;
}
function Wm(e4) {
  let t = e4.simulatePressure ? e4.points : e4.points.length ? e4.points.map(([i, o], r) => [i, o, e4.pressures[r]]) : [[0, 0, 0.5]], n = { simulatePressure: e4.simulatePressure, size: e4.strokeWidth * 4.25, thinning: 0.6, smoothing: 0.5, streamline: 0.5, easing: (i) => Math.sin(i * Math.PI / 2), last: !!e4.lastCommittedPoint };
  return Vm(Vs(t, n));
}
function Tl(e4, t) {
  return [(e4[0] + t[0]) / 2, (e4[1] + t[1]) / 2];
}
var jm = /(\s?[A-Z]?,?-?[0-9]*\.[0-9]{0,2})(([0-9]|e|-)*)/g;
function Vm(e4) {
  if (!e4.length) return "";
  let t = e4.length - 1;
  return e4.reduce((n, i, o, r) => (o === t ? n.push(i, Tl(i, r[0]), "L", r[0], "Z") : n.push(i, Tl(i, r[o + 1])), n), ["M", e4[0], "Q"]).join(" ").replace(jm, "$1");
}
P();
var kl = (e4) => e4 === "rectangle" || e4 === "iframe" || e4 === "embeddable" || e4 === "line" || e4 === "diamond" || e4 === "image";
var be2 = class e2 {
  static rg = new Ue2();
  static cache = /* @__PURE__ */ new WeakMap();
  static get = (t) => e2.cache.get(t);
  static set = (t, n) => e2.cache.set(t, n);
  static delete = (t) => e2.cache.delete(t);
  static destroy = () => {
    e2.cache = /* @__PURE__ */ new WeakMap();
  };
  static generateElementShape = (t, n) => {
    let i = n?.isExporting ? void 0 : e2.get(t);
    if (i !== void 0) return i;
    Eo.delete(t);
    let o = ef(t, e2.rg, n || { isExporting: false, canvasBackgroundColor: u.white, embedsValidationStatus: null });
    return e2.cache.set(t, o), o;
  };
};
var Qm = (e4) => [8, 8 + e4];
var zl = (e4) => [1.5, 6 + e4];
function Jm(e4) {
  let t = e4.roughness, n = Math.max(e4.width, e4.height), i = Math.min(e4.width, e4.height);
  return i >= 20 && n >= 50 || i >= 15 && e4.roundness && kl(e4.type) || U2(e4) && n >= 50 ? t : Math.min(t / (n < 10 ? 3 : 2), 2.5);
}
var Re2 = (e4, t = false) => {
  let n = { seed: e4.seed, strokeLineDash: e4.strokeStyle === "dashed" ? Qm(e4.strokeWidth) : e4.strokeStyle === "dotted" ? zl(e4.strokeWidth) : void 0, disableMultiStroke: e4.strokeStyle !== "solid", strokeWidth: e4.strokeStyle !== "solid" ? e4.strokeWidth + 0.5 : e4.strokeWidth, fillWeight: e4.strokeWidth / 2, hachureGap: e4.strokeWidth * 4, roughness: Jm(e4), stroke: e4.strokeColor, preserveVertices: t || e4.roughness < ke.cartoonist };
  switch (e4.type) {
    case "rectangle":
    case "iframe":
    case "embeddable":
    case "diamond":
    case "ellipse":
      return n.fillStyle = e4.fillStyle, n.fill = je(e4.backgroundColor) ? void 0 : e4.backgroundColor, e4.type === "ellipse" && (n.curveFitting = 1), n;
    case "line":
    case "freedraw":
      return an2(e4.points) && (n.fillStyle = e4.fillStyle, n.fill = e4.backgroundColor === "transparent" ? void 0 : e4.backgroundColor), n;
    case "arrow":
      return n;
    default:
      throw new Error(`Unimplemented type ${e4.type}`);
  }
};
var Fl = (e4, t, n) => Oi(e4) && (t || ia(e4) && n?.get(e4.id) !== true) && je(e4.backgroundColor) && je(e4.strokeColor) ? { ...e4, roughness: 0, backgroundColor: "#d3d3d3", fillStyle: "solid" } : Gi(e4) ? { ...e4, strokeColor: je(e4.strokeColor) ? "#000000" : e4.strokeColor, backgroundColor: je(e4.backgroundColor) ? "#f4f4f6" : e4.backgroundColor } : e4;
var Nl = (e4, t, n, i, o, r, s) => {
  let a = Hr2(e4, t, n, i);
  if (a === null) return [];
  let l = (c2, d) => {
    if (c2 === null) return [];
    let [, , u2, p2, m, f2] = c2;
    return [o.line(u2, p2, m, f2, d)];
  };
  switch (i) {
    case "dot":
    case "circle":
    case "circle_outline": {
      let [c2, d, u2] = a;
      return delete r.strokeLineDash, [o.circle(c2, d, u2, { ...r, fill: i === "circle_outline" ? s : e4.strokeColor, fillStyle: "solid", stroke: e4.strokeColor, roughness: Math.min(0.5, r.roughness || 0) })];
    }
    case "triangle":
    case "triangle_outline": {
      let [c2, d, u2, p2, m, f2] = a;
      return delete r.strokeLineDash, [o.polygon([[c2, d], [u2, p2], [m, f2], [c2, d]], { ...r, fill: i === "triangle_outline" ? s : e4.strokeColor, fillStyle: "solid", roughness: Math.min(1, r.roughness || 0) })];
    }
    case "diamond":
    case "diamond_outline": {
      let [c2, d, u2, p2, m, f2, E3, h2] = a;
      return delete r.strokeLineDash, [o.polygon([[c2, d], [u2, p2], [m, f2], [E3, h2], [c2, d]], { ...r, fill: i === "diamond_outline" ? s : e4.strokeColor, fillStyle: "solid", roughness: Math.min(1, r.roughness || 0) })];
    }
    case "crowfoot_one":
      return l(a, r);
    case "bar":
    case "arrow":
    case "crowfoot_many":
    case "crowfoot_one_or_many":
    default: {
      let [c2, d, u2, p2, m, f2] = a;
      if (e4.strokeStyle === "dotted") {
        let E3 = zl(e4.strokeWidth - 1);
        r.strokeLineDash = [E3[0], E3[1] - 1];
      } else delete r.strokeLineDash;
      return r.roughness = Math.min(1, r.roughness || 0), [o.line(u2, p2, c2, d, r), o.line(m, f2, c2, d, r), ...i === "crowfoot_one_or_many" ? l(Hr2(e4, t, n, "crowfoot_one"), r) : []];
    }
  }
};
var ta = (e4) => {
  let t = new Ue2(), n = { seed: e4.seed, disableMultiStroke: true, disableMultiStrokeFill: true, roughness: 0, preserveVertices: true }, i = ct2(e4.points.reduce((o, r) => [Math.min(e4.x + r[0], o[0]), Math.min(e4.y + r[1], o[1]), Math.max(e4.x + r[0], o[2]), Math.max(e4.y + r[1], o[3])], [1 / 0, 1 / 0, -1 / 0, -1 / 0]));
  switch (e4.type) {
    case "line":
    case "arrow": {
      let o = e4.points.length ? e4.points : [p(0, 0)];
      return G(e4) ? t.path(Hl(o, 16), n).sets[0].ops : e4.roundness ? t.curve(o, n).sets[0].ops.slice(0, e4.points.length).map((r, s) => {
        if (s === 0) {
          let a = w(p(e4.x + r.data[0], e4.y + r.data[1]), i, e4.angle);
          return { op: "move", data: p(a[0] - e4.x, a[1] - e4.y) };
        }
        return { op: "bcurveTo", data: [w(p(e4.x + r.data[0], e4.y + r.data[1]), i, e4.angle), w(p(e4.x + r.data[2], e4.y + r.data[3]), i, e4.angle), w(p(e4.x + r.data[4], e4.y + r.data[5]), i, e4.angle)].map((a) => p(a[0] - e4.x, a[1] - e4.y)).flat() };
      }) : o.map((r, s) => {
        let a = w(p(e4.x + r[0], e4.y + r[1]), i, e4.angle);
        return { op: s === 0 ? "move" : "lineTo", data: p(a[0] - e4.x, a[1] - e4.y) };
      });
    }
    case "freedraw": {
      if (e4.points.length < 2) return [];
      let o = Wn2(e4.points, 0.75);
      return t.curve(o, n).sets[0].ops.slice(0, e4.points.length).map((r, s) => {
        if (s === 0) {
          let a = w(p(e4.x + r.data[0], e4.y + r.data[1]), i, e4.angle);
          return { op: "move", data: p(a[0] - e4.x, a[1] - e4.y) };
        }
        return { op: "bcurveTo", data: [w(p(e4.x + r.data[0], e4.y + r.data[1]), i, e4.angle), w(p(e4.x + r.data[2], e4.y + r.data[3]), i, e4.angle), w(p(e4.x + r.data[4], e4.y + r.data[5]), i, e4.angle)].map((a) => p(a[0] - e4.x, a[1] - e4.y)).flat() };
      });
    }
  }
};
var ef = (e4, t, { isExporting: n, canvasBackgroundColor: i, embedsValidationStatus: o }) => {
  switch (e4.type) {
    case "rectangle":
    case "iframe":
    case "embeddable": {
      let r;
      if (e4.roundness) {
        let s = e4.width, a = e4.height, l = yt3(Math.min(s, a), e4);
        r = t.path(`M ${l} 0 L ${s - l} 0 Q ${s} 0, ${s} ${l} L ${s} ${a - l} Q ${s} ${a}, ${s - l} ${a} L ${l} ${a} Q 0 ${a}, 0 ${a - l} L 0 ${l} Q 0 0, ${l} 0`, Re2(Fl(e4, n, o), true));
      } else r = t.rectangle(0, 0, e4.width, e4.height, Re2(Fl(e4, n, o), false));
      return r;
    }
    case "diamond": {
      let r, [s, a, l, c2, d, u2, p2, m] = Bi(e4);
      if (e4.roundness) {
        let f2 = yt3(Math.abs(s - p2), e4), E3 = yt3(Math.abs(c2 - a), e4);
        r = t.path(`M ${s + f2} ${a + E3} L ${l - f2} ${c2 - E3}
            C ${l} ${c2}, ${l} ${c2}, ${l - f2} ${c2 + E3}
            L ${d + f2} ${u2 - E3}
            C ${d} ${u2}, ${d} ${u2}, ${d - f2} ${u2 - E3}
            L ${p2 + f2} ${m + E3}
            C ${p2} ${m}, ${p2} ${m}, ${p2 + f2} ${m - E3}
            L ${s - f2} ${a + E3}
            C ${s} ${a}, ${s} ${a}, ${s + f2} ${a + E3}`, Re2(e4, true));
      } else r = t.polygon([[s, a], [l, c2], [d, u2], [p2, m]], Re2(e4));
      return r;
    }
    case "ellipse":
      return t.ellipse(e4.width / 2, e4.height / 2, e4.width, e4.height, Re2(e4));
    case "line":
    case "arrow": {
      let r, s = Re2(e4), a = e4.points.length ? e4.points : [p(0, 0)];
      if (G(e4) ? a.every((l) => Math.abs(l[0]) <= 1e6 && Math.abs(l[1]) <= 1e6) ? r = [t.path(Hl(a, 16), Re2(e4, true))] : (console.error("Elbow arrow with extreme point positions detected. Arrow not rendered.", e4.id, JSON.stringify(a)), r = []) : e4.roundness ? r = [t.curve(a, s)] : s.fill ? r = [t.polygon(a, s)] : r = [t.linearPath(a, s)], e4.type === "arrow") {
        let { startArrowhead: l = null, endArrowhead: c2 = "arrow" } = e4;
        if (l !== null) {
          let d = Nl(e4, r, "start", l, t, s, i);
          r.push(...d);
        }
        if (c2 !== null) {
          let d = Nl(e4, r, "end", c2, t, s, i);
          r.push(...d);
        }
      }
      return r;
    }
    case "freedraw": {
      let r;
      if (Ol(e4), an2(e4.points)) {
        let s = Wn2(e4.points, 0.75);
        r = t.curve(s, { ...Re2(e4), stroke: "none" });
      } else r = null;
      return r;
    }
    case "frame":
    case "magicframe":
    case "text":
    case "image":
      return null;
    default:
      return ns(e4, `generateElementShape(): Unimplemented type ${e4?.type}`), null;
  }
};
var Hl = (e4, t) => {
  let n = [];
  for (let o = 1; o < e4.length - 1; o += 1) {
    let r = e4[o - 1], s = e4[o + 1], a = e4[o], l = et3(a, r), c2 = et3(s, a), d = Math.min(t, _(e4[o], s) / 2, _(e4[o], r) / 2);
    l ? r[0] < a[0] ? n.push([e4[o][0] - d, e4[o][1]]) : n.push([e4[o][0] + d, e4[o][1]]) : r[1] < a[1] ? n.push([e4[o][0], e4[o][1] - d]) : n.push([e4[o][0], e4[o][1] + d]), n.push(e4[o]), c2 ? s[0] < a[0] ? n.push([e4[o][0] - d, e4[o][1]]) : n.push([e4[o][0] + d, e4[o][1]]) : s[1] < a[1] ? n.push([e4[o][0], e4[o][1] - d]) : n.push([e4[o][0], e4[o][1] + d]);
  }
  let i = [`M ${e4[0][0]} ${e4[0][1]}`];
  for (let o = 0; o < n.length; o += 3) i.push(`L ${n[o][0]} ${n[o][1]}`), i.push(`Q ${n[o + 1][0]} ${n[o + 1][1]}, ${n[o + 2][0]} ${n[o + 2][1]}`);
  return i.push(`L ${e4[e4.length - 1][0]} ${e4[e4.length - 1][1]}`), i.join(" ");
};
var nl = (e4, t) => {
  let n = [...e4.points];
  if (t) {
    if (!la(e4.points)) return null;
    let o = n[0], r = n[n.length - 1];
    Math.hypot(o[0] - r[0], o[1] - r[1]) > Er || n.length < 4 ? n.push(p(o[0], o[1])) : n[n.length - 1] = p(o[0], o[1]);
  }
  return { polygon: t, points: n };
};
var Xr = class e3 {
  static boundsCache = /* @__PURE__ */ new WeakMap();
  static nonRotatedBoundsCache = /* @__PURE__ */ new WeakMap();
  static getBounds(t, n, i = false) {
    let o = i && t.angle !== 0 ? e3.nonRotatedBoundsCache.get(t) : e3.boundsCache.get(t);
    if (o?.version && o.version === t.version && !fe2(t)) return o.bounds;
    if (i && t.angle !== 0) {
      let s = e3.calculateBounds({ ...t, angle: 0 }, n);
      return e3.nonRotatedBoundsCache.set(t, { version: t.version, bounds: s }), s;
    }
    let r = e3.calculateBounds(t, n);
    return e3.boundsCache.set(t, { version: t.version, bounds: r }), r;
  }
  static calculateBounds(t, n) {
    let i, [o, r, s, a, l, c2] = H(t, n);
    if (Se2(t)) {
      let [d, u2, p2, m] = Ur(t.points.map(([f2, E3]) => w(p(f2, E3), p(l - t.x, c2 - t.y), t.angle)));
      return [d + t.x, u2 + t.y, p2 + t.x, m + t.y];
    } else if (U2(t)) i = df(t, l, c2, n);
    else if (t.type === "diamond") {
      let [d, u2] = w(p(l, r), p(l, c2), t.angle), [p2, m] = w(p(l, a), p(l, c2), t.angle), [f2, E3] = w(p(o, c2), p(l, c2), t.angle), [h2, g] = w(p(s, c2), p(l, c2), t.angle), x2 = Math.min(d, p2, f2, h2), y3 = Math.min(u2, m, E3, g), b = Math.max(d, p2, f2, h2), w3 = Math.max(u2, m, E3, g);
      i = [x2, y3, b, w3];
    } else if (t.type === "ellipse") {
      let d = (s - o) / 2, u2 = (a - r) / 2, p2 = Math.cos(t.angle), m = Math.sin(t.angle), f2 = Math.hypot(d * p2, u2 * m), E3 = Math.hypot(u2 * p2, d * m);
      i = [l - f2, c2 - E3, l + f2, c2 + E3];
    } else {
      let [d, u2] = w(p(o, r), p(l, c2), t.angle), [p2, m] = w(p(o, a), p(l, c2), t.angle), [f2, E3] = w(p(s, a), p(l, c2), t.angle), [h2, g] = w(p(s, r), p(l, c2), t.angle), x2 = Math.min(d, p2, f2, h2), y3 = Math.min(u2, m, E3, g), b = Math.max(d, p2, f2, h2), w3 = Math.max(u2, m, E3, g);
      i = [x2, y3, b, w3];
    }
    return i;
  }
};
var H = (e4, t, n = false) => {
  if (Se2(e4)) return sf(e4);
  if (U2(e4)) return Y3.getElementAbsoluteCoords(e4, t, n);
  if (ne2(e4)) {
    let i = t ? Ce(e4, t) : null;
    if (_2(i)) {
      let { x: o, y: r } = Y3.getBoundTextElementPosition(i, e4, t);
      return [o, r, o + e4.width, r + e4.height, o + e4.width / 2, r + e4.height / 2];
    }
  }
  return [e4.x, e4.y, e4.x + e4.width, e4.y + e4.height, e4.x + e4.width / 2, e4.y + e4.height / 2];
};
var Bi = (e4) => {
  let t = Math.floor(e4.width / 2) + 1, n = 0, i = e4.width, o = Math.floor(e4.height / 2) + 1, r = t, s = e4.height;
  return [t, n, i, o, r, s, 0, o];
};
var Wl = (e4, t, n, i, o) => {
  let r = 1 - e4;
  return Math.pow(r, 3) * t + 3 * Math.pow(r, 2) * e4 * n + 3 * r * Math.pow(e4, 2) * i + Math.pow(e4, 3) * o;
};
var jl = (e4, t, n, i) => {
  let o = t - e4, r = n - t, s = i - n, a = 3 * o - 6 * r + 3 * s, l = 6 * r - 6 * o, c2 = 3 * o, d = l * l - 4 * a * c2;
  if (!(d >= 0)) return false;
  let p2 = null, m = null, f2 = 1 / 0, E3 = 1 / 0;
  return a === 0 ? f2 = E3 = -c2 / l : (f2 = (-l + Math.sqrt(d)) / (2 * a), E3 = (-l - Math.sqrt(d)) / (2 * a)), f2 >= 0 && f2 <= 1 && (p2 = Wl(f2, e4, t, n, i)), E3 >= 0 && E3 <= 1 && (m = Wl(E3, e4, t, n, i)), [p2, m];
};
var Wi = (e4, t, n, i) => {
  let o = jl(e4[0], t[0], n[0], i[0]), r = jl(e4[1], t[1], n[1], i[1]), s = Math.min(e4[0], i[0]), a = Math.max(e4[0], i[0]);
  if (o) {
    let d = o.filter((u2) => u2 !== null);
    s = Math.min(s, ...d), a = Math.max(a, ...d);
  }
  let l = Math.min(e4[1], i[1]), c2 = Math.max(e4[1], i[1]);
  if (r) {
    let d = r.filter((u2) => u2 !== null);
    l = Math.min(l, ...d), c2 = Math.max(c2, ...d);
  }
  return [s, l, a, c2];
};
var si = (e4, t) => {
  let n = p(0, 0), { minX: i, minY: o, maxX: r, maxY: s } = e4.reduce((a, { op: l, data: c2 }) => {
    if (l === "move") {
      let d = Tt(c2);
      rs(d != null, "Op data is not a point"), n = d;
    } else if (l === "bcurveTo") {
      let d = p(c2[0], c2[1]), u2 = p(c2[2], c2[3]), p2 = p(c2[4], c2[5]), m = t ? t(d) : d, f2 = t ? t(u2) : u2, E3 = t ? t(p2) : p2, h2 = t ? t(n) : n;
      n = p2;
      let [g, x2, y3, b] = Wi(h2, m, f2, E3);
      a.minX = Math.min(a.minX, g), a.minY = Math.min(a.minY, x2), a.maxX = Math.max(a.maxX, y3), a.maxY = Math.max(a.maxY, b);
    }
    return a;
  }, { minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 });
  return [i, o, r, s];
};
var Ur = (e4) => {
  let t = 1 / 0, n = 1 / 0, i = -1 / 0, o = -1 / 0;
  for (let [r, s] of e4) t = Math.min(t, r), n = Math.min(n, s), i = Math.max(i, r), o = Math.max(o, s);
  return [t, n, i, o];
};
var sf = (e4) => {
  let [t, n, i, o] = Ur(e4.points), r = t + e4.x, s = n + e4.y, a = i + e4.x, l = o + e4.y;
  return [r, s, a, l, (r + a) / 2, (s + l) / 2];
};
var af = (e4) => {
  switch (e4) {
    case "arrow":
      return 25;
    case "diamond":
    case "diamond_outline":
      return 12;
    case "crowfoot_many":
    case "crowfoot_one":
    case "crowfoot_one_or_many":
      return 20;
    default:
      return 15;
  }
};
var lf = (e4) => {
  switch (e4) {
    case "bar":
      return 90;
    case "arrow":
      return 20;
    default:
      return 25;
  }
};
var Hr2 = (e4, t, n, i) => {
  if (t.length < 1) return null;
  let o = gt2(t[0]);
  if (o.length < 1) return null;
  let r = n === "start" ? 1 : o.length - 1, s = o[r].data;
  rs(s.length === 6, "Op data length is not 6");
  let a = p(s[4], s[5]), l = p(s[2], s[3]), c2 = p(s[0], s[1]), d = o[r - 1], u2 = p(0, 0);
  if (d.op === "move") {
    let N2 = Tt(d.data);
    rs(N2 != null, "Op data is not a point"), u2 = N2;
  } else d.op === "bcurveTo" && (u2 = p(d.data[4], d.data[5]));
  let p2 = (N2, ee2) => Math.pow(1 - N2, 3) * a[ee2] + 3 * N2 * Math.pow(1 - N2, 2) * l[ee2] + 3 * Math.pow(N2, 2) * (1 - N2) * c2[ee2] + u2[ee2] * Math.pow(N2, 3), [m, f2] = n === "start" ? u2 : a, [E3, h2] = [p2(0.3, 0), p2(0.3, 1)], g = Math.hypot(m - E3, f2 - h2), x2 = (m - E3) / g, y3 = (f2 - h2) / g, b = af(i), w3 = 0;
  {
    let [N2, ee2] = n === "end" ? e4.points[e4.points.length - 1] : e4.points[0], [S2, K2] = e4.points.length > 1 ? n === "end" ? e4.points[e4.points.length - 2] : e4.points[1] : [0, 0];
    w3 = Math.hypot(N2 - S2, ee2 - K2);
  }
  let M3 = Math.min(b, w3 * (i === "diamond" || i === "diamond_outline" ? 0.25 : 0.5)), v2 = m - x2 * M3, T3 = f2 - y3 * M3;
  if (i === "dot" || i === "circle" || i === "circle_outline") {
    let N2 = Math.hypot(T3 - f2, v2 - m) + e4.strokeWidth - 2;
    return [m, f2, N2];
  }
  let F3 = lf(i);
  if (i === "crowfoot_many" || i === "crowfoot_one_or_many") {
    let [N2, ee2] = w(p(m, f2), p(v2, T3), K(-F3)), [S2, K2] = w(p(m, f2), p(v2, T3), K(F3));
    return [v2, T3, N2, ee2, S2, K2];
  }
  let [C3, R2] = w(p(v2, T3), p(m, f2), -F3 * Math.PI / 180), [L3, W] = w(p(v2, T3), p(m, f2), K(F3));
  if (i === "diamond" || i === "diamond_outline") {
    let N2, ee2;
    if (n === "start") {
      let [S2, K2] = e4.points.length > 1 ? e4.points[1] : [0, 0];
      [N2, ee2] = w(p(m + M3 * 2, f2), p(m, f2), Math.atan2(K2 - f2, S2 - m));
    } else {
      let [S2, K2] = e4.points.length > 1 ? e4.points[e4.points.length - 2] : [0, 0];
      [N2, ee2] = w(p(m - M3 * 2, f2), p(m, f2), Math.atan2(f2 - K2, m - S2));
    }
    return [m, f2, C3, R2, N2, ee2, L3, W];
  }
  return [m, f2, C3, R2, L3, W];
};
var cf = (e4) => {
  let t = sn2.generator(), n = Re2(e4), i = e4.roundness ? "curve" : n.fill ? "polygon" : "linearPath";
  return t[i](e4.points, n);
};
var df = (e4, t, n, i) => {
  let o = Z2(e4, i);
  if (e4.points.length < 2) {
    let [u2, p2] = e4.points[0], [m, f2] = w(p(e4.x + u2, e4.y + p2), p(t, n), e4.angle), E3 = [m, f2, m, f2];
    if (o) {
      let h2 = Y3.getMinMaxXYWithBoundText(e4, i, [m, f2, m, f2], o);
      E3 = [h2[0], h2[1], h2[2], h2[3]];
    }
    return E3;
  }
  let s = be2.get(e4)?.[0] ?? cf(e4), a = gt2(s), c2 = si(a, ([u2, p2]) => w(p(e4.x + u2, e4.y + p2), p(t, n), e4.angle)), d = [c2[0], c2[1], c2[2], c2[3]];
  if (o) {
    let u2 = Y3.getMinMaxXYWithBoundText(e4, i, d, o);
    d = [u2[0], u2[1], u2[2], u2[3]];
  }
  return d;
};
var he2 = (e4, t, n = false) => Xr.getBounds(e4, t, n);
var tt2 = (e4, t) => {
  if (!et2(e4)) return [0, 0, 0, 0];
  let n = 1 / 0, i = -1 / 0, o = 1 / 0, r = -1 / 0, s = t || Bo(e4);
  return e4.forEach((a) => {
    let [l, c2, d, u2] = he2(a, s);
    n = Math.min(n, l), o = Math.min(o, c2), i = Math.max(i, d), r = Math.max(r, u2);
  }), [n, o, i, r];
};
var Lr = (e4, t) => {
  let n = sn2.generator(), i = e4.roundness == null ? n.linearPath(t, Re2(e4)) : n.curve(t, Re2(e4)), o = gt2(i), [r, s, a, l] = si(o);
  return [r + e4.x, s + e4.y, a + e4.x, l + e4.y];
};
var Ct2 = (e4) => {
  let [t, n, i, o] = tt2(e4);
  return { minX: t, minY: n, maxX: i, maxY: o, width: i - t, height: o - n, midX: (t + i) / 2, midY: (n + o) / 2 };
};
var ct2 = (e4) => p(e4[0] + (e4[2] - e4[0]) / 2, e4[1] + (e4[3] - e4[1]) / 2);
var Ve2 = (e4, t, n) => {
  let i = { minX: e4.x, minY: e4.y, maxX: e4.x + e4.width, maxY: e4.y + e4.height, midX: e4.x + e4.width / 2, midY: e4.y + e4.height / 2 }, o = me2(e4, t), [r, s] = w(p(i.minX, i.minY), o, e4.angle), [a, l] = w(p(i.maxX, i.minY), o, e4.angle), [c2, d] = w(p(i.maxX, i.maxY), o, e4.angle), [u2, p2] = w(p(i.minX, i.maxY), o, e4.angle), m = [Math.min(r, a, c2, u2), Math.min(s, l, d, p2), Math.max(r, a, c2, u2), Math.max(s, l, d, p2)];
  if (n) {
    let [f2, E3, h2, g] = n;
    return [m[0] - g, m[1] - f2, m[2] + E3, m[3] + h2];
  }
  return m;
};
var Mn = (e4, t) => e4[0] > t[0] && e4[0] < t[2] && e4[1] > t[1] && e4[1] < t[3];
var un2 = (e4, t) => {
  if (e4 == null || t == null) return false;
  let [n, i, o, r] = e4, [s, a, l, c2] = t;
  return n < l && o > s && i < c2 && r > a;
};
var me2 = (e4, t, n = 0, i = 0) => {
  let [o, r] = ct2(he2(e4, t));
  return p(o + n, r + i);
};
var ff = 0.1;
var ql = (e4) => U2(e4) || Se2(e4) ? e4.points.length < 2 || e4.points.length === 2 && _2(e4) && A(e4.points[0], e4.points[e4.points.length - 1], ff) : e4.width === 0 && e4.height === 0;
var il = (e4, t, n, i, o) => {
  let r = n - e4, s = i - t, a = Math.atan2(s, r), l = Math.round(a / Xt2) * Xt2;
  if (o) {
    let c2 = Math.floor(o / Xt2) * Xt2;
    Vt(a, c2, c2 + Xt2) && (Ct(a, o) < Xt2 / 6 ? l = o : C(a) > C(o) ? l = c2 + Xt2 : l = c2);
  }
  if (l === 0) s = 0;
  else if (l === Math.PI / 2) r = 0;
  else {
    let c2 = Math.tan(l), d = -1, u2 = t - c2 * e4, p2 = -1 / c2, m = -1, f2 = i - p2 * n, E3 = (d * f2 - m * u2) / (c2 * m - p2 * d), h2 = (u2 * p2 - f2 * c2) / (c2 * m - p2 * d);
    r = E3 - e4, s = h2 - t;
  }
  return { width: r, height: s };
};
P();
P();
P();
P();
P();
P();
P();
var Qr = class extends Error {
  code = "ELEMENT_HAS_INVALID_INDEX";
};
var Gf = (e4, { shouldThrow: t = false, includeBoundTextValidation: n = false, ignoreLogs: i, reconciliationContext: o }) => {
  let r = [], s = (l) => `${l?.index}:${l?.id}:${l?.type}:${l?.isDeleted}:${l?.version}:${l?.versionNonce}`, a = e4.map((l) => l.index);
  for (let [l, c2] of a.entries()) {
    let d = a[l - 1], u2 = a[l + 1];
    if (Jr(c2, d, u2) || r.push(`Fractional indices invariant has been compromised: "${s(e4[l - 1])}", "${s(e4[l])}", "${s(e4[l + 1])}"`), n && st2(e4[l])) {
      let p2 = e4[l], m = Z2(p2, Bo(e4));
      m && m.index <= p2.index && r.push(`Fractional indices invariant for bound elements has been compromised: "${s(m)}", "${s(p2)}"`);
    }
  }
  if (r.length) {
    let l = new Qr(), c2 = [];
    if (o && (c2.push("Additional reconciliation context:"), c2.push(o.localElements.map((d) => s(d))), c2.push(o.remoteElements.map((d) => s(d)))), i || console.error(r.join(`

`), l.stack, e4.map((d) => s(d)), ...c2), t) throw l;
  }
};
var Jr = (e4, t, n) => e4 ? t && n ? t < e4 && e4 < n : !t && n ? e4 < n : t && !n ? t < e4 : !!e4 : false;
P();
var Mc = gd(xc(), 1);
var lh = (0, Mc.default)((e4) => {
  (Xo() || D() || window?.DEBUG_FRACTIONAL_INDICES) && Gf(e4, { shouldThrow: Xo() || D(), includeBoundTextValidation: true });
}, 1e3 * 60, { leading: true, trailing: false });
P();
P();
P();
P();
P();
var nt2 = (e4, { x: t, y: n, strokeColor: i = rr.strokeColor, backgroundColor: o = rr.backgroundColor, fillStyle: r = rr.fillStyle, strokeWidth: s = rr.strokeWidth, strokeStyle: a = rr.strokeStyle, roughness: l = rr.roughness, opacity: c2 = rr.opacity, width: d = 0, height: u2 = 0, angle: p2 = 0, groupIds: m = [], frameId: f2 = null, index: E3 = null, roundness: h2 = null, boundElements: g = null, link: x2 = null, locked: y3 = rr.locked, ...b }) => ((t < -1e6 || t > 1e6 || n < -1e6 || n > 1e6 || d < -1e6 || d > 1e6 || u2 < -1e6 || u2 > 1e6) && console.error("New element size or position is too large", { x: t, y: n, width: d, height: u2, points: b.points }), { id: b.id || gs(), type: e4, x: t, y: n, width: d, height: u2, angle: p2, strokeColor: i, backgroundColor: o, fillStyle: r, strokeWidth: s, strokeStyle: a, roughness: l, opacity: c2, groupIds: m, frameId: f2, index: E3, roundness: h2, seed: b.seed ?? hs(), version: b.version || 1, versionNonce: b.versionNonce ?? 0, isDeleted: false, boundElements: g, updated: Ko(), link: x2, locked: y3, customData: b.customData });
var ns2 = (e4) => nt2(e4.type, e4);
var BP = (e4) => Me2({ ...nt2("frame", e4), type: "frame", name: e4?.name || null }, {});
var Cc = (e4, t) => ({ x: e4.textAlign === "center" ? t.width / 2 : e4.textAlign === "right" ? t.width : 0, y: e4.verticalAlign === "middle" ? t.height / 2 : 0 });
var Bc = (e4) => {
  let t = e4.fontFamily || rn2, n = e4.fontSize || nn2, i = e4.lineHeight || gr(t), o = tr2(e4.text), r = Qe2(o, co({ fontFamily: t, fontSize: n }), i), s = e4.textAlign || on2, a = e4.verticalAlign || sn, l = Cc({ textAlign: s, verticalAlign: a }, r), c2 = { ...nt2("text", e4), text: o, fontSize: n, fontFamily: t, textAlign: s, verticalAlign: a, x: e4.x - l.x, y: e4.y - l.y, width: r.width, height: r.height, containerId: e4.containerId || null, originalText: e4.originalText ?? o, autoResize: e4.autoResize ?? true, lineHeight: i };
  return Me2(c2, {});
};
var kP = (e4) => ({ ...nt2(e4.type, e4), points: e4.points || [], pressures: e4.pressures || [], simulatePressure: e4.simulatePressure, lastCommittedPoint: null });
var RP = (e4) => {
  let t = { ...nt2(e4.type, e4), points: e4.points || [], lastCommittedPoint: null, startBinding: null, endBinding: null, startArrowhead: null, endArrowhead: null };
  return ln(t) ? { ...t, polygon: e4.polygon ?? false } : t;
};
var Gc = (e4) => e4.elbowed ? { ...nt2(e4.type, e4), points: e4.points || [], lastCommittedPoint: null, startBinding: null, endBinding: null, startArrowhead: e4.startArrowhead || null, endArrowhead: e4.endArrowhead || null, elbowed: true, fixedSegments: e4.fixedSegments || [], startIsSpecial: false, endIsSpecial: false } : { ...nt2(e4.type, e4), points: e4.points || [], lastCommittedPoint: null, startBinding: null, endBinding: null, startArrowhead: e4.startArrowhead || null, endArrowhead: e4.endArrowhead || null, elbowed: false };
var FP = (e4) => ({ ...nt2("image", e4), strokeColor: "transparent", status: e4.status ?? "pending", fileId: e4.fileId ?? null, scale: e4.scale ?? [1, 1], crop: e4.crop ?? null });
P();
P();
P();
P();
P();
P();
P();
var oc = (e4) => {
  let t = 5381;
  for (let n of Ze(e4)) t = (t << 5) + t + n.versionNonce;
  return t >>> 0;
};
var gS = (e4) => e4.filter((t) => !t.isDeleted && !ql(t));

// src/index.js
var DEFAULT_ELEMENT_LIMIT = 80;
var DEFAULT_TEXT_LIMIT = 120;
var DEFAULT_SOURCE = "excalidraw-skill";
Rx({
  getLineWidth(text, fontString) {
    const fontSize = parseFontSize(fontString);
    let width = 0;
    for (const char of text) {
      width += char.codePointAt(0) > 255 ? fontSize : fontSize * 0.55;
    }
    return width;
  }
});
function parseScene(input) {
  const scene = typeof input === "string" ? JSON.parse(input) : structuredClone(input);
  if (!scene || typeof scene !== "object" || !Array.isArray(scene.elements)) {
    throw new TypeError("Expected an Excalidraw scene object with an elements array.");
  }
  return scene;
}
function createScene(options = {}) {
  return {
    type: "excalidraw",
    version: 2,
    source: options.source ?? DEFAULT_SOURCE,
    elements: options.elements ?? [],
    appState: options.appState ?? {},
    files: options.files ?? {}
  };
}
function summarizeScene(input, options = {}) {
  const scene = parseScene(input);
  const elements = gS(scene.elements);
  const limit = options.limit ?? DEFAULT_ELEMENT_LIMIT;
  const typeCounts = countBy(elements, (element) => element.type || "unknown");
  return pruneUndefined({
    type: scene.type,
    version: scene.version,
    source: scene.source,
    elementCount: scene.elements.length,
    visibleElementCount: elements.length,
    deletedElementCount: scene.elements.length - elements.length,
    versionHash: oc(scene.elements),
    typeCounts,
    bounds: boundsForElements(elements),
    filesCount: scene.files ? Object.keys(scene.files).length : 0,
    sample: elements.slice(0, limit).map((element) => compactElement(element, options)),
    truncated: elements.length > limit
  });
}
function listElements(input, query = {}) {
  const scene = parseScene(input);
  const offset = query.offset ?? 0;
  const limit = query.limit ?? DEFAULT_ELEMENT_LIMIT;
  const elements = gS(scene.elements).filter((element) => matchesQuery(element, query));
  return {
    total: elements.length,
    offset,
    limit,
    elements: elements.slice(offset, offset + limit).map((element) => compactElement(element, query)),
    truncated: offset + limit < elements.length
  };
}
function expandElements(input, ids, options = {}) {
  const scene = parseScene(input);
  const idSet = new Set(ids);
  if (options.includeBoundText) {
    for (const element of scene.elements) {
      if (idSet.has(element.containerId)) {
        idSet.add(element.id);
      }
    }
  }
  if (options.includeGroups) {
    const groupIds = /* @__PURE__ */ new Set();
    for (const element of scene.elements) {
      if (idSet.has(element.id)) {
        for (const groupId of element.groupIds ?? []) {
          groupIds.add(groupId);
        }
      }
    }
    for (const element of scene.elements) {
      if ((element.groupIds ?? []).some((groupId) => groupIds.has(groupId))) {
        idSet.add(element.id);
      }
    }
  }
  return scene.elements.filter((element) => idSet.has(element.id));
}
function describeScene(input, options = {}) {
  const scene = parseScene(input);
  const elements = gS(scene.elements);
  const elementsById = new Map(elements.map((element) => [element.id, element]));
  const labelsByContainerId = collectBoundTextLabels(elements);
  const edges = elements.filter((element) => element.type === "arrow" && (element.startBinding || element.endBinding)).map((element) => describeEdge(element, elementsById)).filter(Boolean);
  const edgeElementIds = new Set(edges.map((edge) => edge.id));
  const labelElementIds = new Set([...labelsByContainerId.values()].flat().map((label) => label.id));
  const nodes = elements.filter((element) => !edgeElementIds.has(element.id) && !labelElementIds.has(element.id)).map((element) => describeNode(element, labelsByContainerId, edges));
  return {
    scene: {
      type: scene.type,
      version: scene.version,
      source: scene.source,
      elements: scene.elements.length,
      visibleElements: elements.length,
      deletedElements: scene.elements.length - elements.length,
      bounds: boundsArray(boundsForElements(elements)),
      files: scene.files ? Object.keys(scene.files).length : 0,
      versionHash: oc(scene.elements)
    },
    nodes: limitItems(nodes, options.nodeLimit ?? options.limit),
    edges: limitItems(edges, options.edgeLimit ?? options.limit)
  };
}
function formatScene(input, options = {}) {
  const description = describeScene(input, options);
  const format = options.format ?? "yaml";
  if (format !== "yaml") {
    throw new Error(`Unsupported scene format: ${format}`);
  }
  return formatYamlLike(description);
}
function applyPatch(input, patch) {
  const scene = parseScene(input);
  const operations = Array.isArray(patch) ? patch : patch.operations;
  if (!Array.isArray(operations)) {
    throw new TypeError("Expected patch operations array.");
  }
  const elements = [...scene.elements];
  const indexById = new Map(elements.map((element, index) => [element.id, index]));
  for (const operation of operations) {
    applyOperation(elements, indexById, operation);
  }
  return {
    ...scene,
    elements
  };
}
function makeElement(type, fields = {}) {
  assertElementType(type);
  if (type === "text") {
    return Bc({
      text: "",
      ...fields,
      type
    });
  }
  if (type === "line") {
    return RP({
      points: [[0, 0], [fields.width ?? 100, fields.height ?? 0]],
      ...fields,
      type
    });
  }
  if (type === "arrow") {
    return Gc({
      points: [[0, 0], [fields.width ?? 100, fields.height ?? 0]],
      ...fields,
      type
    });
  }
  if (type === "freedraw") {
    return kP({
      points: [],
      simulatePressure: true,
      ...fields,
      type
    });
  }
  if (type === "image") {
    return FP({
      status: "pending",
      fileId: null,
      ...fields,
      type
    });
  }
  if (type === "frame") {
    return BP({
      name: null,
      ...fields
    });
  }
  return ns2({
    ...fields,
    type
  });
}
function updateElement(element, fields) {
  return Me2(element, fields);
}
function B2(input = {}) {
  const scene = isScene(input) ? parseScene(input) : createScene(input);
  const operations = [];
  const builder = {
    scene,
    operations,
    add(element) {
      operations.push({ op: "add", element });
      return elementRef(builder, element.id);
    },
    element(type, fields = {}) {
      return builder.add(makeElement(type, fields));
    },
    rect(id, x2, y3, width, height, fields = {}) {
      return builder.element("rectangle", { id, x: x2, y: y3, width, height, ...fields });
    },
    ellipse(id, x2, y3, width, height, fields = {}) {
      return builder.element("ellipse", { id, x: x2, y: y3, width, height, ...fields });
    },
    diamond(id, x2, y3, width, height, fields = {}) {
      return builder.element("diamond", { id, x: x2, y: y3, width, height, ...fields });
    },
    text(id, x2, y3, text, fields = {}) {
      return builder.element("text", { id, x: x2, y: y3, text, originalText: text, ...fields });
    },
    arrow(id, x2, y3, points, fields = {}) {
      return builder.element("arrow", { id, x: x2, y: y3, points, ...fields });
    },
    line(id, x2, y3, points, fields = {}) {
      return builder.element("line", { id, x: x2, y: y3, points, ...fields });
    },
    set(id, fields) {
      operations.push({ op: "update", id, fields });
      return builder;
    },
    del(id) {
      operations.push({ op: "delete", id });
      return builder;
    },
    patch() {
      return { operations: structuredClone(operations) };
    },
    apply() {
      return applyPatch(scene, operations);
    },
    json() {
      return builder.apply();
    },
    ref(id) {
      requireElement(builder, id);
      return elementRef(builder, id);
    },
    get(id) {
      return requireElement(builder, id);
    }
  };
  return builder;
}
function elementRef(builder, id) {
  return {
    id,
    get element() {
      return requireElement(builder, id);
    },
    update(fields) {
      builder.set(id, fields);
      return this;
    },
    delete() {
      builder.del(id);
      return this;
    },
    text(textId, text, fields = {}) {
      const container = requireElement(builder, id);
      const { wrap, fit = !wrap, padding = 16, ...textFields } = fields;
      const textOptions = wrap ? wrapTextOptions(container, text, textFields, padding) : { text, originalText: text };
      const textElement = makeElement("text", {
        id: textId,
        containerId: id,
        textAlign: "center",
        verticalAlign: "middle",
        ...textOptions,
        ...textFields
      });
      const sizedTextElement = wrap ? updateElement(textElement, {
        width: textOptions.width,
        autoResize: false,
        text: textOptions.text,
        originalText: text
      }) : textElement;
      const containerUpdates = fit ? containerFitUpdates(container, sizedTextElement, padding) : {};
      const nextContainer = Object.keys(containerUpdates).length ? updateElement(container, containerUpdates) : container;
      const elementsMap = elementsMapFor(builder, [nextContainer, sizedTextElement]);
      const position = xa(nextContainer, sizedTextElement, elementsMap);
      const positionedText = position ? updateElement(sizedTextElement, position) : sizedTextElement;
      builder.set(id, {
        ...containerUpdates,
        boundElements: appendBoundElement(container.boundElements, {
          id: textId,
          type: "text"
        })
      });
      builder.add(positionedText);
      return elementRef(builder, textId);
    },
    connectTo(target, arrowId, fields = {}) {
      const source = requireElement(builder, id);
      const targetElement = resolveElement(builder, target);
      const {
        from = autoAnchor(source, targetElement),
        to = autoAnchor(targetElement, source),
        ...arrowFields
      } = fields;
      const sourcePoint = anchorPoint(source, from);
      const targetPoint = anchorPoint(targetElement, to);
      const arrow = updateElement(makeElement("arrow", {
        id: arrowId,
        x: sourcePoint.x,
        y: sourcePoint.y,
        points: [
          [0, 0],
          [targetPoint.x - sourcePoint.x, targetPoint.y - sourcePoint.y]
        ],
        endArrowhead: "arrow",
        ...arrowFields
      }), {
        startBinding: {
          elementId: source.id,
          focus: bindingFocus(from),
          gap: 1
        },
        endBinding: {
          elementId: targetElement.id,
          focus: bindingFocus(to),
          gap: 1
        }
      });
      builder.set(source.id, {
        boundElements: appendBoundElement(source.boundElements, {
          id: arrowId,
          type: "arrow"
        })
      });
      builder.set(targetElement.id, {
        boundElements: appendBoundElement(targetElement.boundElements, {
          id: arrowId,
          type: "arrow"
        })
      });
      builder.add(arrow);
      return elementRef(builder, arrowId);
    }
  };
}
function applyOperation(elements, indexById, operation) {
  if (!operation || typeof operation !== "object") {
    throw new TypeError("Patch operation must be an object.");
  }
  if (operation.op === "add") {
    const element = operation.element ?? makeElement(operation.type, operation.fields);
    if (!element.id) {
      throw new Error("Added element must have an id.");
    }
    if (indexById.has(element.id)) {
      throw new Error(`Cannot add duplicate element id: ${element.id}`);
    }
    indexById.set(element.id, elements.length);
    elements.push(element);
    return;
  }
  if (operation.op === "update") {
    const index = requireElementIndex(indexById, operation.id);
    elements[index] = updateElement(elements[index], operation.fields ?? {});
    return;
  }
  if (operation.op === "delete") {
    const index = requireElementIndex(indexById, operation.id);
    elements[index] = updateElement(elements[index], { isDeleted: true });
    return;
  }
  throw new Error(`Unsupported patch operation: ${operation.op}`);
}
function requireElementIndex(indexById, id) {
  if (!indexById.has(id)) {
    throw new Error(`Element not found: ${id}`);
  }
  return indexById.get(id);
}
function matchesQuery(element, query) {
  if (query.ids && !query.ids.includes(element.id)) {
    return false;
  }
  if (query.types && !query.types.includes(element.type)) {
    return false;
  }
  if (query.textIncludes) {
    const haystack = `${element.text ?? ""} ${element.originalText ?? ""}`.toLowerCase();
    if (!haystack.includes(String(query.textIncludes).toLowerCase())) {
      return false;
    }
  }
  if (query.bounds && !intersectsBounds(elementBounds(element), query.bounds)) {
    return false;
  }
  return true;
}
function requireElement(builder, id) {
  const element = builder.apply().elements.find((candidate) => candidate.id === id);
  if (!element) {
    throw new Error(`Element not found: ${id}`);
  }
  return element;
}
function resolveElement(builder, value) {
  if (typeof value === "string") {
    return requireElement(builder, value);
  }
  if (value?.id) {
    return requireElement(builder, value.id);
  }
  throw new TypeError("Expected an element id or element reference.");
}
function elementsMapFor(builder, extraElements = []) {
  return new Map([
    ...builder.apply().elements.map((element) => [element.id, element]),
    ...extraElements.map((element) => [element.id, element])
  ]);
}
function appendBoundElement(boundElements, next) {
  const elements = boundElements ? [...boundElements] : [];
  const existing = elements.find((element) => element.id === next.id);
  return existing ? elements : [...elements, next];
}
function elementCenter(element) {
  return {
    x: (Number(element.x) || 0) + (Number(element.width) || 0) / 2,
    y: (Number(element.y) || 0) + (Number(element.height) || 0) / 2
  };
}
function autoAnchor(source, target) {
  const sourceCenter = elementCenter(source);
  const targetCenter = elementCenter(target);
  const dx = targetCenter.x - sourceCenter.x;
  const dy = targetCenter.y - sourceCenter.y;
  if (Math.abs(dx) >= Math.abs(dy)) {
    return dx >= 0 ? "right-middle" : "left-middle";
  }
  return dy >= 0 ? "middle-bottom" : "middle-top";
}
function anchorPoint(element, anchor) {
  const normalized = normalizeAnchor(anchor);
  const x2 = Number(element.x) || 0;
  const y3 = Number(element.y) || 0;
  const width = Number(element.width) || 0;
  const height = Number(element.height) || 0;
  const [horizontal, vertical] = normalized.split("-");
  return {
    x: x2 + anchorRatio(horizontal) * width,
    y: y3 + anchorRatio(vertical) * height
  };
}
function normalizeAnchor(anchor) {
  const aliases = {
    top: "middle-top",
    right: "right-middle",
    bottom: "middle-bottom",
    left: "left-middle",
    center: "middle-middle",
    middle: "middle-middle"
  };
  const normalized = aliases[anchor] ?? anchor;
  if (!/^(left|middle|right)-(top|middle|bottom)$/.test(normalized)) {
    throw new Error(`Unsupported anchor: ${anchor}`);
  }
  return normalized;
}
function anchorRatio(part) {
  if (part === "left" || part === "top") {
    return 0;
  }
  if (part === "right" || part === "bottom") {
    return 1;
  }
  return 0.5;
}
function bindingFocus(anchor) {
  const normalized = normalizeAnchor(anchor);
  const [horizontal, vertical] = normalized.split("-");
  if (horizontal === "middle") {
    return vertical === "middle" ? 0 : 0;
  }
  return vertical === "middle" ? 0 : anchorRatio(vertical) * 2 - 1;
}
function wrapTextOptions(container, text, fields, padding) {
  const fontSize = fields.fontSize ?? 20;
  const fontFamily = fields.fontFamily ?? 5;
  const maxWidth = Math.max(1, (Number(container.width) || 0) - padding * 2);
  const font = co({ fontSize, fontFamily });
  return {
    text: Pt3(text, font, maxWidth),
    originalText: text,
    width: fields.width ?? maxWidth,
    autoResize: false
  };
}
function containerFitUpdates(container, textElement, padding) {
  const minWidth = (Number(textElement.width) || 0) + padding * 2;
  const minHeight = (Number(textElement.height) || 0) + padding * 2;
  return pruneUndefined({
    width: minWidth > (Number(container.width) || 0) ? minWidth : void 0,
    height: minHeight > (Number(container.height) || 0) ? minHeight : void 0
  });
}
function collectBoundTextLabels(elements) {
  const labels = /* @__PURE__ */ new Map();
  for (const element of elements) {
    if (element.type !== "text" || !element.containerId) {
      continue;
    }
    const current = labels.get(element.containerId) ?? [];
    current.push({
      id: element.id,
      text: element.text ?? "",
      bounds: boundsArray(elementBounds(element))
    });
    labels.set(element.containerId, current);
  }
  return labels;
}
function describeNode(element, labelsByContainerId, edges) {
  const outgoing = edges.filter((edge) => edge.from === element.id).map((edge) => edge.to ?? edge.id);
  const incoming = edges.filter((edge) => edge.to === element.id).map((edge) => edge.from ?? edge.id);
  return pruneEmpty({
    id: element.id,
    type: element.type,
    label: labelsByContainerId.get(element.id)?.map((label) => label.text).join("\n"),
    bounds: boundsArray(elementBounds(element)),
    outgoing,
    incoming
  });
}
function describeEdge(element, elementsById) {
  const from = element.startBinding?.elementId;
  const to = element.endBinding?.elementId;
  return pruneEmpty({
    id: element.id,
    type: element.type,
    from,
    to,
    fromType: from ? elementsById.get(from)?.type : void 0,
    toType: to ? elementsById.get(to)?.type : void 0,
    points: element.points?.map((point) => point.map(round)),
    bounds: boundsArray(elementBounds(element))
  });
}
function limitItems(items, limit) {
  if (!limit || items.length <= limit) {
    return items;
  }
  return items.slice(0, limit);
}
function formatYamlLike(description) {
  const lines = [];
  writeObject(lines, description, 0);
  return `${lines.join("\n")}
`;
}
function writeObject(lines, value, indent) {
  for (const [key, entry] of Object.entries(value)) {
    writeEntry(lines, key, entry, indent);
  }
}
function writeEntry(lines, key, value, indent) {
  const pad = " ".repeat(indent);
  if (Array.isArray(value)) {
    if (!value.length) {
      lines.push(`${pad}${key}: []`);
      return;
    }
    lines.push(`${pad}${key}:`);
    for (const item of value) {
      writeListItem(lines, item, indent + 2);
    }
    return;
  }
  if (value && typeof value === "object") {
    lines.push(`${pad}${key}:`);
    writeObject(lines, value, indent + 2);
    return;
  }
  if (typeof value === "string" && value.includes("\n")) {
    lines.push(`${pad}${key}: |`);
    for (const line of value.split("\n")) {
      lines.push(`${pad}  ${line}`);
    }
    return;
  }
  lines.push(`${pad}${key}: ${formatScalar(value)}`);
}
function writeListItem(lines, item, indent) {
  const pad = " ".repeat(indent);
  if (!item || typeof item !== "object" || Array.isArray(item)) {
    lines.push(`${pad}- ${formatScalar(item)}`);
    return;
  }
  const entries = Object.entries(item);
  const [firstKey, firstValue] = entries[0];
  if (isInlineValue(firstValue)) {
    lines.push(`${pad}- ${firstKey}: ${formatScalar(firstValue)}`);
  } else {
    lines.push(`${pad}- ${firstKey}:`);
    writeValue(lines, firstValue, indent + 4);
  }
  for (const [key, value] of entries.slice(1)) {
    writeEntry(lines, key, value, indent + 2);
  }
}
function writeValue(lines, value, indent) {
  if (Array.isArray(value)) {
    for (const item of value) {
      writeListItem(lines, item, indent);
    }
    return;
  }
  if (value && typeof value === "object") {
    writeObject(lines, value, indent);
    return;
  }
  lines.push(`${" ".repeat(indent)}${formatScalar(value)}`);
}
function isInlineValue(value) {
  return !value || typeof value !== "object" || Array.isArray(value);
}
function formatScalar(value) {
  if (value === null) {
    return "null";
  }
  if (Array.isArray(value)) {
    return `[${value.map(formatScalar).join(", ")}]`;
  }
  if (typeof value === "string") {
    if (!value || /[:#\[\]{},&*?!|>'"%@`]/.test(value) || /^\s|\s$/.test(value)) {
      return JSON.stringify(value);
    }
    return value;
  }
  return String(value);
}
function boundsArray(bounds) {
  if (!bounds) {
    return null;
  }
  return [round(bounds.x), round(bounds.y), round(bounds.width), round(bounds.height)];
}
function pruneEmpty(value) {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => {
      if (entry === void 0 || entry === null) {
        return false;
      }
      return !(Array.isArray(entry) && entry.length === 0);
    })
  );
}
function compactElement(element, options = {}) {
  const textLimit = options.textLimit ?? DEFAULT_TEXT_LIMIT;
  return pruneUndefined({
    id: element.id,
    type: element.type,
    x: round(element.x),
    y: round(element.y),
    width: round(element.width),
    height: round(element.height),
    angle: element.angle ? round(element.angle) : void 0,
    text: element.text ? truncate(element.text, textLimit) : void 0,
    originalText: element.originalText && element.originalText !== element.text ? truncate(element.originalText, textLimit) : void 0,
    strokeColor: element.strokeColor,
    backgroundColor: element.backgroundColor,
    groupIds: element.groupIds?.length ? element.groupIds : void 0,
    frameId: element.frameId ?? void 0,
    containerId: element.containerId ?? void 0,
    boundElementIds: element.boundElements?.map((bound) => bound.id),
    startBinding: compactBinding(element.startBinding),
    endBinding: compactBinding(element.endBinding),
    points: element.points?.map((point) => point.map(round))
  });
}
function compactBinding(binding) {
  if (!binding) {
    return void 0;
  }
  return pruneUndefined({
    elementId: binding.elementId,
    focus: round(binding.focus),
    gap: round(binding.gap)
  });
}
function boundsForElements(elements) {
  if (!elements.length) {
    return null;
  }
  const box = Ct2(elements);
  return {
    x: round(box.minX),
    y: round(box.minY),
    width: round(box.width),
    height: round(box.height)
  };
}
function elementBounds(element) {
  return {
    x: Number(element.x) || 0,
    y: Number(element.y) || 0,
    width: Number(element.width) || 0,
    height: Number(element.height) || 0
  };
}
function intersectsBounds(a, b) {
  return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
}
function countBy(items, keyFn) {
  const counts = {};
  for (const item of items) {
    const key = keyFn(item);
    counts[key] = (counts[key] ?? 0) + 1;
  }
  return counts;
}
function assertElementType(type) {
  const supported = /* @__PURE__ */ new Set([
    "rectangle",
    "diamond",
    "ellipse",
    "text",
    "line",
    "arrow",
    "freedraw",
    "image",
    "frame",
    "selection",
    "embeddable",
    "iframe"
  ]);
  if (!supported.has(type)) {
    throw new Error(`Unsupported element type: ${type}`);
  }
}
function isScene(value) {
  return value && typeof value === "object" && Array.isArray(value.elements);
}
function truncate(value, limit) {
  const text = String(value);
  return text.length > limit ? `${text.slice(0, limit)}...` : text;
}
function round(value) {
  return Math.round((Number(value) || 0) * 100) / 100;
}
function pruneUndefined(value) {
  return Object.fromEntries(Object.entries(value).filter(([, entry]) => entry !== void 0));
}
function parseFontSize(fontString) {
  const match = String(fontString).match(/(\d+(?:\.\d+)?)px/);
  return match ? Number(match[1]) : 20;
}
export {
  B2 as B,
  u as COLOR_PALETTE,
  applyPatch,
  createScene,
  describeScene,
  elementRef,
  expandElements,
  formatScene,
  listElements,
  makeElement,
  parseScene,
  summarizeScene,
  updateElement
};
