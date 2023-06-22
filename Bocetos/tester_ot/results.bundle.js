!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                n.d(r, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "<%= baseUrl %>",
    n(n.s = 336)
}([function(e, t, n) {
    var r = n(2)
      , o = n(18)
      , i = n(11)
      , s = n(12)
      , a = n(19)
      , u = function(e, t, n) {
        var c, l, f, d, p = e & u.F, h = e & u.G, v = e & u.S, g = e & u.P, m = e & u.B, y = h ? r : v ? r[t] || (r[t] = {}) : (r[t] || {}).prototype, _ = h ? o : o[t] || (o[t] = {}), b = _.prototype || (_.prototype = {});
        for (c in h && (n = t),
        n)
            f = ((l = !p && y && void 0 !== y[c]) ? y : n)[c],
            d = m && l ? a(f, r) : g && "function" == typeof f ? a(Function.call, f) : f,
            y && s(y, c, f, e & u.U),
            _[c] != f && i(_, c, d),
            g && b[c] != f && (b[c] = f)
    };
    r.core = o,
    u.F = 1,
    u.G = 2,
    u.S = 4,
    u.P = 8,
    u.B = 16,
    u.W = 32,
    u.U = 64,
    u.R = 128,
    e.exports = u
}
, function(e, t, n) {
    var r = n(4);
    e.exports = function(e) {
        if (!r(e))
            throw TypeError(e + " is not an object!");
        return e
    }
}
, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}
, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}
, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}
, function(e, t, n) {
    var r = n(47)("wks")
      , o = n(33)
      , i = n(2).Symbol
      , s = "function" == typeof i;
    (e.exports = function(e) {
        return r[e] || (r[e] = s && i[e] || (s ? i : o)("Symbol." + e))
    }
    ).store = r
}
, function(e, t, n) {
    var r = n(21)
      , o = Math.min;
    e.exports = function(e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0
    }
}
, function(e, t, n) {
    e.exports = !n(3)((function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
}
, function(e, t, n) {
    var r = n(1)
      , o = n(95)
      , i = n(23)
      , s = Object.defineProperty;
    t.f = n(7) ? Object.defineProperty : function(e, t, n) {
        if (r(e),
        t = i(t, !0),
        r(n),
        o)
            try {
                return s(e, t, n)
            } catch (e) {}
        if ("get"in n || "set"in n)
            throw TypeError("Accessors not supported!");
        return "value"in n && (e[t] = n.value),
        e
    }
}
, function(e, t, n) {
    var r = n(24);
    e.exports = function(e) {
        return Object(r(e))
    }
}
, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e)
            throw TypeError(e + " is not a function!");
        return e
    }
}
, function(e, t, n) {
    var r = n(8)
      , o = n(32);
    e.exports = n(7) ? function(e, t, n) {
        return r.f(e, t, o(1, n))
    }
    : function(e, t, n) {
        return e[t] = n,
        e
    }
}
, function(e, t, n) {
    var r = n(2)
      , o = n(11)
      , i = n(14)
      , s = n(33)("src")
      , a = n(134)
      , u = ("" + a).split("toString");
    n(18).inspectSource = function(e) {
        return a.call(e)
    }
    ,
    (e.exports = function(e, t, n, a) {
        var c = "function" == typeof n;
        c && (i(n, "name") || o(n, "name", t)),
        e[t] !== n && (c && (i(n, s) || o(n, s, e[t] ? "" + e[t] : u.join(String(t)))),
        e === r ? e[t] = n : a ? e[t] ? e[t] = n : o(e, t, n) : (delete e[t],
        o(e, t, n)))
    }
    )(Function.prototype, "toString", (function() {
        return "function" == typeof this && this[s] || a.call(this)
    }
    ))
}
, function(e, t, n) {
    var r = n(0)
      , o = n(3)
      , i = n(24)
      , s = /"/g
      , a = function(e, t, n, r) {
        var o = String(i(e))
          , a = "<" + t;
        return "" !== n && (a += " " + n + '="' + String(r).replace(s, "&quot;") + '"'),
        a + ">" + o + "</" + t + ">"
    };
    e.exports = function(e, t) {
        var n = {};
        n[e] = t(a),
        r(r.P + r.F * o((function() {
            var t = ""[e]('"');
            return t !== t.toLowerCase() || t.split('"').length > 3
        }
        )), "String", n)
    }
}
, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}
, function(e, t, n) {
    var r = n(48)
      , o = n(24);
    e.exports = function(e) {
        return r(o(e))
    }
}
, function(e, t, n) {
    var r = n(49)
      , o = n(32)
      , i = n(15)
      , s = n(23)
      , a = n(14)
      , u = n(95)
      , c = Object.getOwnPropertyDescriptor;
    t.f = n(7) ? c : function(e, t) {
        if (e = i(e),
        t = s(t, !0),
        u)
            try {
                return c(e, t)
            } catch (e) {}
        if (a(e, t))
            return o(!r.f.call(e, t), e[t])
    }
}
, function(e, t, n) {
    var r = n(14)
      , o = n(9)
      , i = n(68)("IE_PROTO")
      , s = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = o(e),
        r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
    }
}
, function(e, t) {
    var n = e.exports = {
        version: "2.6.12"
    };
    "number" == typeof __e && (__e = n)
}
, function(e, t, n) {
    var r = n(10);
    e.exports = function(e, t, n) {
        if (r(e),
        void 0 === t)
            return e;
        switch (n) {
        case 1:
            return function(n) {
                return e.call(t, n)
            }
            ;
        case 2:
            return function(n, r) {
                return e.call(t, n, r)
            }
            ;
        case 3:
            return function(n, r, o) {
                return e.call(t, n, r, o)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}
, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}
, function(e, t) {
    var n = Math.ceil
      , r = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(3);
    e.exports = function(e, t) {
        return !!e && r((function() {
            t ? e.call(null, (function() {}
            ), 1) : e.call(null)
        }
        ))
    }
}
, function(e, t, n) {
    var r = n(4);
    e.exports = function(e, t) {
        if (!r(e))
            return e;
        var n, o;
        if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
            return o;
        if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e)))
            return o;
        if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
            return o;
        throw TypeError("Can't convert object to primitive value")
    }
}
, function(e, t) {
    e.exports = function(e) {
        if (null == e)
            throw TypeError("Can't call method on  " + e);
        return e
    }
}
, function(e, t, n) {
    var r = n(0)
      , o = n(18)
      , i = n(3);
    e.exports = function(e, t) {
        var n = (o.Object || {})[e] || Object[e]
          , s = {};
        s[e] = t(n),
        r(r.S + r.F * i((function() {
            n(1)
        }
        )), "Object", s)
    }
}
, function(e, t, n) {
    var r = n(19)
      , o = n(48)
      , i = n(9)
      , s = n(6)
      , a = n(84);
    e.exports = function(e, t) {
        var n = 1 == e
          , u = 2 == e
          , c = 3 == e
          , l = 4 == e
          , f = 6 == e
          , d = 5 == e || f
          , p = t || a;
        return function(t, a, h) {
            for (var v, g, m = i(t), y = o(m), _ = r(a, h, 3), b = s(y.length), E = 0, w = n ? p(t, b) : u ? p(t, 0) : void 0; b > E; E++)
                if ((d || E in y) && (g = _(v = y[E], E, m),
                e))
                    if (n)
                        w[E] = g;
                    else if (g)
                        switch (e) {
                        case 3:
                            return !0;
                        case 5:
                            return v;
                        case 6:
                            return E;
                        case 2:
                            w.push(v)
                        }
                    else if (l)
                        return !1;
            return f ? -1 : c || l ? l : w
        }
    }
}
, function(e, t, n) {
    "use strict";
    if (n(7)) {
        var r = n(29)
          , o = n(2)
          , i = n(3)
          , s = n(0)
          , a = n(62)
          , u = n(92)
          , c = n(19)
          , l = n(39)
          , f = n(32)
          , d = n(11)
          , p = n(41)
          , h = n(21)
          , v = n(6)
          , g = n(123)
          , m = n(35)
          , y = n(23)
          , _ = n(14)
          , b = n(44)
          , E = n(4)
          , w = n(9)
          , x = n(81)
          , S = n(36)
          , T = n(17)
          , O = n(37).f
          , N = n(83)
          , C = n(33)
          , I = n(5)
          , R = n(26)
          , k = n(52)
          , A = n(51)
          , P = n(86)
          , M = n(46)
          , j = n(57)
          , L = n(38)
          , D = n(85)
          , F = n(112)
          , U = n(8)
          , q = n(16)
          , $ = U.f
          , B = q.f
          , V = o.RangeError
          , H = o.TypeError
          , W = o.Uint8Array
          , G = Array.prototype
          , z = u.ArrayBuffer
          , X = u.DataView
          , K = R(0)
          , Q = R(2)
          , Y = R(3)
          , J = R(4)
          , Z = R(5)
          , ee = R(6)
          , te = k(!0)
          , ne = k(!1)
          , re = P.values
          , oe = P.keys
          , ie = P.entries
          , se = G.lastIndexOf
          , ae = G.reduce
          , ue = G.reduceRight
          , ce = G.join
          , le = G.sort
          , fe = G.slice
          , de = G.toString
          , pe = G.toLocaleString
          , he = I("iterator")
          , ve = I("toStringTag")
          , ge = C("typed_constructor")
          , me = C("def_constructor")
          , ye = a.CONSTR
          , _e = a.TYPED
          , be = a.VIEW
          , Ee = R(1, (function(e, t) {
            return Oe(A(e, e[me]), t)
        }
        ))
          , we = i((function() {
            return 1 === new W(new Uint16Array([1]).buffer)[0]
        }
        ))
          , xe = !!W && !!W.prototype.set && i((function() {
            new W(1).set({})
        }
        ))
          , Se = function(e, t) {
            var n = h(e);
            if (n < 0 || n % t)
                throw V("Wrong offset!");
            return n
        }
          , Te = function(e) {
            if (E(e) && _e in e)
                return e;
            throw H(e + " is not a typed array!")
        }
          , Oe = function(e, t) {
            if (!E(e) || !(ge in e))
                throw H("It is not a typed array constructor!");
            return new e(t)
        }
          , Ne = function(e, t) {
            return Ce(A(e, e[me]), t)
        }
          , Ce = function(e, t) {
            for (var n = 0, r = t.length, o = Oe(e, r); r > n; )
                o[n] = t[n++];
            return o
        }
          , Ie = function(e, t, n) {
            $(e, t, {
                get: function() {
                    return this._d[n]
                }
            })
        }
          , Re = function(e) {
            var t, n, r, o, i, s, a = w(e), u = arguments.length, l = u > 1 ? arguments[1] : void 0, f = void 0 !== l, d = N(a);
            if (null != d && !x(d)) {
                for (s = d.call(a),
                r = [],
                t = 0; !(i = s.next()).done; t++)
                    r.push(i.value);
                a = r
            }
            for (f && u > 2 && (l = c(l, arguments[2], 2)),
            t = 0,
            n = v(a.length),
            o = Oe(this, n); n > t; t++)
                o[t] = f ? l(a[t], t) : a[t];
            return o
        }
          , ke = function() {
            for (var e = 0, t = arguments.length, n = Oe(this, t); t > e; )
                n[e] = arguments[e++];
            return n
        }
          , Ae = !!W && i((function() {
            pe.call(new W(1))
        }
        ))
          , Pe = function() {
            return pe.apply(Ae ? fe.call(Te(this)) : Te(this), arguments)
        }
          , Me = {
            copyWithin: function(e, t) {
                return F.call(Te(this), e, t, arguments.length > 2 ? arguments[2] : void 0)
            },
            every: function(e) {
                return J(Te(this), e, arguments.length > 1 ? arguments[1] : void 0)
            },
            fill: function(e) {
                return D.apply(Te(this), arguments)
            },
            filter: function(e) {
                return Ne(this, Q(Te(this), e, arguments.length > 1 ? arguments[1] : void 0))
            },
            find: function(e) {
                return Z(Te(this), e, arguments.length > 1 ? arguments[1] : void 0)
            },
            findIndex: function(e) {
                return ee(Te(this), e, arguments.length > 1 ? arguments[1] : void 0)
            },
            forEach: function(e) {
                K(Te(this), e, arguments.length > 1 ? arguments[1] : void 0)
            },
            indexOf: function(e) {
                return ne(Te(this), e, arguments.length > 1 ? arguments[1] : void 0)
            },
            includes: function(e) {
                return te(Te(this), e, arguments.length > 1 ? arguments[1] : void 0)
            },
            join: function(e) {
                return ce.apply(Te(this), arguments)
            },
            lastIndexOf: function(e) {
                return se.apply(Te(this), arguments)
            },
            map: function(e) {
                return Ee(Te(this), e, arguments.length > 1 ? arguments[1] : void 0)
            },
            reduce: function(e) {
                return ae.apply(Te(this), arguments)
            },
            reduceRight: function(e) {
                return ue.apply(Te(this), arguments)
            },
            reverse: function() {
                for (var e, t = Te(this).length, n = Math.floor(t / 2), r = 0; r < n; )
                    e = this[r],
                    this[r++] = this[--t],
                    this[t] = e;
                return this
            },
            some: function(e) {
                return Y(Te(this), e, arguments.length > 1 ? arguments[1] : void 0)
            },
            sort: function(e) {
                return le.call(Te(this), e)
            },
            subarray: function(e, t) {
                var n = Te(this)
                  , r = n.length
                  , o = m(e, r);
                return new (A(n, n[me]))(n.buffer,n.byteOffset + o * n.BYTES_PER_ELEMENT,v((void 0 === t ? r : m(t, r)) - o))
            }
        }
          , je = function(e, t) {
            return Ne(this, fe.call(Te(this), e, t))
        }
          , Le = function(e) {
            Te(this);
            var t = Se(arguments[1], 1)
              , n = this.length
              , r = w(e)
              , o = v(r.length)
              , i = 0;
            if (o + t > n)
                throw V("Wrong length!");
            for (; i < o; )
                this[t + i] = r[i++]
        }
          , De = {
            entries: function() {
                return ie.call(Te(this))
            },
            keys: function() {
                return oe.call(Te(this))
            },
            values: function() {
                return re.call(Te(this))
            }
        }
          , Fe = function(e, t) {
            return E(e) && e[_e] && "symbol" != typeof t && t in e && String(+t) == String(t)
        }
          , Ue = function(e, t) {
            return Fe(e, t = y(t, !0)) ? f(2, e[t]) : B(e, t)
        }
          , qe = function(e, t, n) {
            return !(Fe(e, t = y(t, !0)) && E(n) && _(n, "value")) || _(n, "get") || _(n, "set") || n.configurable || _(n, "writable") && !n.writable || _(n, "enumerable") && !n.enumerable ? $(e, t, n) : (e[t] = n.value,
            e)
        };
        ye || (q.f = Ue,
        U.f = qe),
        s(s.S + s.F * !ye, "Object", {
            getOwnPropertyDescriptor: Ue,
            defineProperty: qe
        }),
        i((function() {
            de.call({})
        }
        )) && (de = pe = function() {
            return ce.call(this)
        }
        );
        var $e = p({}, Me);
        p($e, De),
        d($e, he, De.values),
        p($e, {
            slice: je,
            set: Le,
            constructor: function() {},
            toString: de,
            toLocaleString: Pe
        }),
        Ie($e, "buffer", "b"),
        Ie($e, "byteOffset", "o"),
        Ie($e, "byteLength", "l"),
        Ie($e, "length", "e"),
        $($e, ve, {
            get: function() {
                return this[_e]
            }
        }),
        e.exports = function(e, t, n, u) {
            var c = e + ((u = !!u) ? "Clamped" : "") + "Array"
              , f = "get" + e
              , p = "set" + e
              , h = o[c]
              , m = h || {}
              , y = h && T(h)
              , _ = !h || !a.ABV
              , w = {}
              , x = h && h.prototype
              , N = function(e, n) {
                $(e, n, {
                    get: function() {
                        return function(e, n) {
                            var r = e._d;
                            return r.v[f](n * t + r.o, we)
                        }(this, n)
                    },
                    set: function(e) {
                        return function(e, n, r) {
                            var o = e._d;
                            u && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r),
                            o.v[p](n * t + o.o, r, we)
                        }(this, n, e)
                    },
                    enumerable: !0
                })
            };
            _ ? (h = n((function(e, n, r, o) {
                l(e, h, c, "_d");
                var i, s, a, u, f = 0, p = 0;
                if (E(n)) {
                    if (!(n instanceof z || "ArrayBuffer" == (u = b(n)) || "SharedArrayBuffer" == u))
                        return _e in n ? Ce(h, n) : Re.call(h, n);
                    i = n,
                    p = Se(r, t);
                    var m = n.byteLength;
                    if (void 0 === o) {
                        if (m % t)
                            throw V("Wrong length!");
                        if ((s = m - p) < 0)
                            throw V("Wrong length!")
                    } else if ((s = v(o) * t) + p > m)
                        throw V("Wrong length!");
                    a = s / t
                } else
                    a = g(n),
                    i = new z(s = a * t);
                for (d(e, "_d", {
                    b: i,
                    o: p,
                    l: s,
                    e: a,
                    v: new X(i)
                }); f < a; )
                    N(e, f++)
            }
            )),
            x = h.prototype = S($e),
            d(x, "constructor", h)) : i((function() {
                h(1)
            }
            )) && i((function() {
                new h(-1)
            }
            )) && j((function(e) {
                new h,
                new h(null),
                new h(1.5),
                new h(e)
            }
            ), !0) || (h = n((function(e, n, r, o) {
                var i;
                return l(e, h, c),
                E(n) ? n instanceof z || "ArrayBuffer" == (i = b(n)) || "SharedArrayBuffer" == i ? void 0 !== o ? new m(n,Se(r, t),o) : void 0 !== r ? new m(n,Se(r, t)) : new m(n) : _e in n ? Ce(h, n) : Re.call(h, n) : new m(g(n))
            }
            )),
            K(y !== Function.prototype ? O(m).concat(O(y)) : O(m), (function(e) {
                e in h || d(h, e, m[e])
            }
            )),
            h.prototype = x,
            r || (x.constructor = h));
            var C = x[he]
              , I = !!C && ("values" == C.name || null == C.name)
              , R = De.values;
            d(h, ge, !0),
            d(x, _e, c),
            d(x, be, !0),
            d(x, me, h),
            (u ? new h(1)[ve] == c : ve in x) || $(x, ve, {
                get: function() {
                    return c
                }
            }),
            w[c] = h,
            s(s.G + s.W + s.F * (h != m), w),
            s(s.S, c, {
                BYTES_PER_ELEMENT: t
            }),
            s(s.S + s.F * i((function() {
                m.of.call(h, 1)
            }
            )), c, {
                from: Re,
                of: ke
            }),
            "BYTES_PER_ELEMENT"in x || d(x, "BYTES_PER_ELEMENT", t),
            s(s.P, c, Me),
            L(c),
            s(s.P + s.F * xe, c, {
                set: Le
            }),
            s(s.P + s.F * !I, c, De),
            r || x.toString == de || (x.toString = de),
            s(s.P + s.F * i((function() {
                new h(1).slice()
            }
            )), c, {
                slice: je
            }),
            s(s.P + s.F * (i((function() {
                return [1, 2].toLocaleString() != new h([1, 2]).toLocaleString()
            }
            )) || !i((function() {
                x.toLocaleString.call([1, 2])
            }
            ))), c, {
                toLocaleString: Pe
            }),
            M[c] = I ? C : R,
            r || I || d(x, he, R)
        }
    } else
        e.exports = function() {}
}
, function(e, t, n) {
    var r = n(118)
      , o = n(0)
      , i = n(47)("metadata")
      , s = i.store || (i.store = new (n(121)))
      , a = function(e, t, n) {
        var o = s.get(e);
        if (!o) {
            if (!n)
                return;
            s.set(e, o = new r)
        }
        var i = o.get(t);
        if (!i) {
            if (!n)
                return;
            o.set(t, i = new r)
        }
        return i
    };
    e.exports = {
        store: s,
        map: a,
        has: function(e, t, n) {
            var r = a(t, n, !1);
            return void 0 !== r && r.has(e)
        },
        get: function(e, t, n) {
            var r = a(t, n, !1);
            return void 0 === r ? void 0 : r.get(e)
        },
        set: function(e, t, n, r) {
            a(n, r, !0).set(e, t)
        },
        keys: function(e, t) {
            var n = a(e, t, !1)
              , r = [];
            return n && n.forEach((function(e, t) {
                r.push(t)
            }
            )),
            r
        },
        key: function(e) {
            return void 0 === e || "symbol" == typeof e ? e : String(e)
        },
        exp: function(e) {
            o(o.S, "Reflect", e)
        }
    }
}
, function(e, t) {
    e.exports = !1
}
, function(e, t, n) {
    var r = n(33)("meta")
      , o = n(4)
      , i = n(14)
      , s = n(8).f
      , a = 0
      , u = Object.isExtensible || function() {
        return !0
    }
      , c = !n(3)((function() {
        return u(Object.preventExtensions({}))
    }
    ))
      , l = function(e) {
        s(e, r, {
            value: {
                i: "O" + ++a,
                w: {}
            }
        })
    }
      , f = e.exports = {
        KEY: r,
        NEED: !1,
        fastKey: function(e, t) {
            if (!o(e))
                return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!i(e, r)) {
                if (!u(e))
                    return "F";
                if (!t)
                    return "E";
                l(e)
            }
            return e[r].i
        },
        getWeak: function(e, t) {
            if (!i(e, r)) {
                if (!u(e))
                    return !0;
                if (!t)
                    return !1;
                l(e)
            }
            return e[r].w
        },
        onFreeze: function(e) {
            return c && f.NEED && u(e) && !i(e, r) && l(e),
            e
        }
    }
}
, function(e, t, n) {
    var r = n(5)("unscopables")
      , o = Array.prototype;
    null == o[r] && n(11)(o, r, {}),
    e.exports = function(e) {
        o[r][e] = !0
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}
, function(e, t) {
    var n = 0
      , r = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}
, function(e, t, n) {
    var r = n(97)
      , o = n(69);
    e.exports = Object.keys || function(e) {
        return r(e, o)
    }
}
, function(e, t, n) {
    var r = n(21)
      , o = Math.max
      , i = Math.min;
    e.exports = function(e, t) {
        return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)
    }
}
, function(e, t, n) {
    var r = n(1)
      , o = n(98)
      , i = n(69)
      , s = n(68)("IE_PROTO")
      , a = function() {}
      , u = function() {
        var e, t = n(66)("iframe"), r = i.length;
        for (t.style.display = "none",
        n(70).appendChild(t),
        t.src = "javascript:",
        (e = t.contentWindow.document).open(),
        e.write("<script>document.F=Object<\/script>"),
        e.close(),
        u = e.F; r--; )
            delete u.prototype[i[r]];
        return u()
    };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (a.prototype = r(e),
        n = new a,
        a.prototype = null,
        n[s] = e) : n = u(),
        void 0 === t ? n : o(n, t)
    }
}
, function(e, t, n) {
    var r = n(97)
      , o = n(69).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
        return r(e, o)
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(2)
      , o = n(8)
      , i = n(7)
      , s = n(5)("species");
    e.exports = function(e) {
        var t = r[e];
        i && t && !t[s] && o.f(t, s, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}
, function(e, t) {
    e.exports = function(e, t, n, r) {
        if (!(e instanceof t) || void 0 !== r && r in e)
            throw TypeError(n + ": incorrect invocation!");
        return e
    }
}
, function(e, t, n) {
    var r = n(19)
      , o = n(110)
      , i = n(81)
      , s = n(1)
      , a = n(6)
      , u = n(83)
      , c = {}
      , l = {};
    (t = e.exports = function(e, t, n, f, d) {
        var p, h, v, g, m = d ? function() {
            return e
        }
        : u(e), y = r(n, f, t ? 2 : 1), _ = 0;
        if ("function" != typeof m)
            throw TypeError(e + " is not iterable!");
        if (i(m)) {
            for (p = a(e.length); p > _; _++)
                if ((g = t ? y(s(h = e[_])[0], h[1]) : y(e[_])) === c || g === l)
                    return g
        } else
            for (v = m.call(e); !(h = v.next()).done; )
                if ((g = o(v, y, h.value, t)) === c || g === l)
                    return g
    }
    ).BREAK = c,
    t.RETURN = l
}
, function(e, t, n) {
    var r = n(12);
    e.exports = function(e, t, n) {
        for (var o in t)
            r(e, o, t[o], n);
        return e
    }
}
, function(e, t, n) {
    var r = n(4);
    e.exports = function(e, t) {
        if (!r(e) || e._t !== t)
            throw TypeError("Incompatible receiver, " + t + " required!");
        return e
    }
}
, function(e, t, n) {
    var r = n(8).f
      , o = n(14)
      , i = n(5)("toStringTag");
    e.exports = function(e, t, n) {
        e && !o(e = n ? e : e.prototype, i) && r(e, i, {
            configurable: !0,
            value: t
        })
    }
}
, function(e, t, n) {
    var r = n(20)
      , o = n(5)("toStringTag")
      , i = "Arguments" == r(function() {
        return arguments
    }());
    e.exports = function(e) {
        var t, n, s;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), o)) ? n : i ? r(t) : "Object" == (s = r(t)) && "function" == typeof t.callee ? "Arguments" : s
    }
}
, function(e, t, n) {
    var r = n(0)
      , o = n(24)
      , i = n(3)
      , s = n(72)
      , a = "[" + s + "]"
      , u = RegExp("^" + a + a + "*")
      , c = RegExp(a + a + "*$")
      , l = function(e, t, n) {
        var o = {}
          , a = i((function() {
            return !!s[e]() || "​" != "​"[e]()
        }
        ))
          , u = o[e] = a ? t(f) : s[e];
        n && (o[n] = u),
        r(r.P + r.F * a, "String", o)
    }
      , f = l.trim = function(e, t) {
        return e = String(o(e)),
        1 & t && (e = e.replace(u, "")),
        2 & t && (e = e.replace(c, "")),
        e
    }
    ;
    e.exports = l
}
, function(e, t) {
    e.exports = {}
}
, function(e, t, n) {
    var r = n(18)
      , o = n(2)
      , i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (e.exports = function(e, t) {
        return i[e] || (i[e] = void 0 !== t ? t : {})
    }
    )("versions", []).push({
        version: r.version,
        mode: n(29) ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    })
}
, function(e, t, n) {
    var r = n(20);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}
, function(e, t) {
    t.f = {}.propertyIsEnumerable
}
, function(e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = function() {
        var e = r(this)
          , t = "";
        return e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.unicode && (t += "u"),
        e.sticky && (t += "y"),
        t
    }
}
, function(e, t, n) {
    var r = n(1)
      , o = n(10)
      , i = n(5)("species");
    e.exports = function(e, t) {
        var n, s = r(e).constructor;
        return void 0 === s || null == (n = r(s)[i]) ? t : o(n)
    }
}
, function(e, t, n) {
    var r = n(15)
      , o = n(6)
      , i = n(35);
    e.exports = function(e) {
        return function(t, n, s) {
            var a, u = r(t), c = o(u.length), l = i(s, c);
            if (e && n != n) {
                for (; c > l; )
                    if ((a = u[l++]) != a)
                        return !0
            } else
                for (; c > l; l++)
                    if ((e || l in u) && u[l] === n)
                        return e || l || 0;
            return !e && -1
        }
    }
}
, function(e, t) {
    t.f = Object.getOwnPropertySymbols
}
, function(e, t, n) {
    var r = n(20);
    e.exports = Array.isArray || function(e) {
        return "Array" == r(e)
    }
}
, function(e, t, n) {
    var r = n(21)
      , o = n(24);
    e.exports = function(e) {
        return function(t, n) {
            var i, s, a = String(o(t)), u = r(n), c = a.length;
            return u < 0 || u >= c ? e ? "" : void 0 : (i = a.charCodeAt(u)) < 55296 || i > 56319 || u + 1 === c || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? e ? a.charAt(u) : i : e ? a.slice(u, u + 2) : s - 56320 + (i - 55296 << 10) + 65536
        }
    }
}
, function(e, t, n) {
    var r = n(4)
      , o = n(20)
      , i = n(5)("match");
    e.exports = function(e) {
        var t;
        return r(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == o(e))
    }
}
, function(e, t, n) {
    var r = n(5)("iterator")
      , o = !1;
    try {
        var i = [7][r]();
        i.return = function() {
            o = !0
        }
        ,
        Array.from(i, (function() {
            throw 2
        }
        ))
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !o)
            return !1;
        var n = !1;
        try {
            var i = [7]
              , s = i[r]();
            s.next = function() {
                return {
                    done: n = !0
                }
            }
            ,
            i[r] = function() {
                return s
            }
            ,
            e(i)
        } catch (e) {}
        return n
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(44)
      , o = RegExp.prototype.exec;
    e.exports = function(e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
            var i = n.call(e, t);
            if ("object" != typeof i)
                throw new TypeError("RegExp exec method returned something other than an Object or null");
            return i
        }
        if ("RegExp" !== r(e))
            throw new TypeError("RegExp#exec called on incompatible receiver");
        return o.call(e, t)
    }
}
, function(e, t, n) {
    "use strict";
    n(114);
    var r = n(12)
      , o = n(11)
      , i = n(3)
      , s = n(24)
      , a = n(5)
      , u = n(87)
      , c = a("species")
      , l = !i((function() {
        var e = /./;
        return e.exec = function() {
            var e = [];
            return e.groups = {
                a: "7"
            },
            e
        }
        ,
        "7" !== "".replace(e, "$<a>")
    }
    ))
      , f = function() {
        var e = /(?:)/
          , t = e.exec;
        e.exec = function() {
            return t.apply(this, arguments)
        }
        ;
        var n = "ab".split(e);
        return 2 === n.length && "a" === n[0] && "b" === n[1]
    }();
    e.exports = function(e, t, n) {
        var d = a(e)
          , p = !i((function() {
            var t = {};
            return t[d] = function() {
                return 7
            }
            ,
            7 != ""[e](t)
        }
        ))
          , h = p ? !i((function() {
            var t = !1
              , n = /a/;
            return n.exec = function() {
                return t = !0,
                null
            }
            ,
            "split" === e && (n.constructor = {},
            n.constructor[c] = function() {
                return n
            }
            ),
            n[d](""),
            !t
        }
        )) : void 0;
        if (!p || !h || "replace" === e && !l || "split" === e && !f) {
            var v = /./[d]
              , g = n(s, d, ""[e], (function(e, t, n, r, o) {
                return t.exec === u ? p && !o ? {
                    done: !0,
                    value: v.call(t, n, r)
                } : {
                    done: !0,
                    value: e.call(n, t, r)
                } : {
                    done: !1
                }
            }
            ))
              , m = g[0]
              , y = g[1];
            r(String.prototype, e, m),
            o(RegExp.prototype, d, 2 == t ? function(e, t) {
                return y.call(e, this, t)
            }
            : function(e) {
                return y.call(e, this)
            }
            )
        }
    }
}
, function(e, t, n) {
    var r = n(2).navigator;
    e.exports = r && r.userAgent || ""
}
, function(e, t, n) {
    "use strict";
    var r = n(2)
      , o = n(0)
      , i = n(12)
      , s = n(41)
      , a = n(30)
      , u = n(40)
      , c = n(39)
      , l = n(4)
      , f = n(3)
      , d = n(57)
      , p = n(43)
      , h = n(73);
    e.exports = function(e, t, n, v, g, m) {
        var y = r[e]
          , _ = y
          , b = g ? "set" : "add"
          , E = _ && _.prototype
          , w = {}
          , x = function(e) {
            var t = E[e];
            i(E, e, "delete" == e || "has" == e ? function(e) {
                return !(m && !l(e)) && t.call(this, 0 === e ? 0 : e)
            }
            : "get" == e ? function(e) {
                return m && !l(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
            }
            : "add" == e ? function(e) {
                return t.call(this, 0 === e ? 0 : e),
                this
            }
            : function(e, n) {
                return t.call(this, 0 === e ? 0 : e, n),
                this
            }
            )
        };
        if ("function" == typeof _ && (m || E.forEach && !f((function() {
            (new _).entries().next()
        }
        )))) {
            var S = new _
              , T = S[b](m ? {} : -0, 1) != S
              , O = f((function() {
                S.has(1)
            }
            ))
              , N = d((function(e) {
                new _(e)
            }
            ))
              , C = !m && f((function() {
                for (var e = new _, t = 5; t--; )
                    e[b](t, t);
                return !e.has(-0)
            }
            ));
            N || ((_ = t((function(t, n) {
                c(t, _, e);
                var r = h(new y, t, _);
                return null != n && u(n, g, r[b], r),
                r
            }
            ))).prototype = E,
            E.constructor = _),
            (O || C) && (x("delete"),
            x("has"),
            g && x("get")),
            (C || T) && x(b),
            m && E.clear && delete E.clear
        } else
            _ = v.getConstructor(t, e, g, b),
            s(_.prototype, n),
            a.NEED = !0;
        return p(_, e),
        w[e] = _,
        o(o.G + o.W + o.F * (_ != y), w),
        m || v.setStrong(_, e, g),
        _
    }
}
, function(e, t, n) {
    for (var r, o = n(2), i = n(11), s = n(33), a = s("typed_array"), u = s("view"), c = !(!o.ArrayBuffer || !o.DataView), l = c, f = 0, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9; )
        (r = o[d[f++]]) ? (i(r.prototype, a, !0),
        i(r.prototype, u, !0)) : l = !1;
    e.exports = {
        ABV: c,
        CONSTR: l,
        TYPED: a,
        VIEW: u
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = n(29) || !n(3)((function() {
        var e = Math.random();
        __defineSetter__.call(null, e, (function() {}
        )),
        delete n(2)[e]
    }
    ))
}
, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function(e) {
        r(r.S, e, {
            of: function() {
                for (var e = arguments.length, t = new Array(e); e--; )
                    t[e] = arguments[e];
                return new this(t)
            }
        })
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(10)
      , i = n(19)
      , s = n(40);
    e.exports = function(e) {
        r(r.S, e, {
            from: function(e) {
                var t, n, r, a, u = arguments[1];
                return o(this),
                (t = void 0 !== u) && o(u),
                null == e ? new this : (n = [],
                t ? (r = 0,
                a = i(u, arguments[2], 2),
                s(e, !1, (function(e) {
                    n.push(a(e, r++))
                }
                ))) : s(e, !1, n.push, n),
                new this(n))
            }
        })
    }
}
, function(e, t, n) {
    var r = n(4)
      , o = n(2).document
      , i = r(o) && r(o.createElement);
    e.exports = function(e) {
        return i ? o.createElement(e) : {}
    }
}
, function(e, t, n) {
    var r = n(2)
      , o = n(18)
      , i = n(29)
      , s = n(96)
      , a = n(8).f;
    e.exports = function(e) {
        var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
        "_" == e.charAt(0) || e in t || a(t, e, {
            value: s.f(e)
        })
    }
}
, function(e, t, n) {
    var r = n(47)("keys")
      , o = n(33);
    e.exports = function(e) {
        return r[e] || (r[e] = o(e))
    }
}
, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}
, function(e, t, n) {
    var r = n(2).document;
    e.exports = r && r.documentElement
}
, function(e, t, n) {
    var r = n(4)
      , o = n(1)
      , i = function(e, t) {
        if (o(e),
        !r(t) && null !== t)
            throw TypeError(t + ": can't set as prototype!")
    };
    e.exports = {
        set: Object.setPrototypeOf || ("__proto__"in {} ? function(e, t, r) {
            try {
                (r = n(19)(Function.call, n(16).f(Object.prototype, "__proto__").set, 2))(e, []),
                t = !(e instanceof Array)
            } catch (e) {
                t = !0
            }
            return function(e, n) {
                return i(e, n),
                t ? e.__proto__ = n : r(e, n),
                e
            }
        }({}, !1) : void 0),
        check: i
    }
}
, function(e, t) {
    e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}
, function(e, t, n) {
    var r = n(4)
      , o = n(71).set;
    e.exports = function(e, t, n) {
        var i, s = t.constructor;
        return s !== n && "function" == typeof s && (i = s.prototype) !== n.prototype && r(i) && o && o(e, i),
        e
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(21)
      , o = n(24);
    e.exports = function(e) {
        var t = String(o(this))
          , n = ""
          , i = r(e);
        if (i < 0 || i == 1 / 0)
            throw RangeError("Count can't be negative");
        for (; i > 0; (i >>>= 1) && (t += t))
            1 & i && (n += t);
        return n
    }
}
, function(e, t) {
    e.exports = Math.sign || function(e) {
        return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
    }
}
, function(e, t) {
    var n = Math.expm1;
    e.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function(e) {
        return 0 == (e = +e) ? e : e > -1e-6 && e < 1e-6 ? e + e * e / 2 : Math.exp(e) - 1
    }
    : n
}
, function(e, t, n) {
    "use strict";
    var r = n(29)
      , o = n(0)
      , i = n(12)
      , s = n(11)
      , a = n(46)
      , u = n(78)
      , c = n(43)
      , l = n(17)
      , f = n(5)("iterator")
      , d = !([].keys && "next"in [].keys())
      , p = function() {
        return this
    };
    e.exports = function(e, t, n, h, v, g, m) {
        u(n, t, h);
        var y, _, b, E = function(e) {
            if (!d && e in T)
                return T[e];
            switch (e) {
            case "keys":
            case "values":
                return function() {
                    return new n(this,e)
                }
            }
            return function() {
                return new n(this,e)
            }
        }, w = t + " Iterator", x = "values" == v, S = !1, T = e.prototype, O = T[f] || T["@@iterator"] || v && T[v], N = O || E(v), C = v ? x ? E("entries") : N : void 0, I = "Array" == t && T.entries || O;
        if (I && (b = l(I.call(new e))) !== Object.prototype && b.next && (c(b, w, !0),
        r || "function" == typeof b[f] || s(b, f, p)),
        x && O && "values" !== O.name && (S = !0,
        N = function() {
            return O.call(this)
        }
        ),
        r && !m || !d && !S && T[f] || s(T, f, N),
        a[t] = N,
        a[w] = p,
        v)
            if (y = {
                values: x ? N : E("values"),
                keys: g ? N : E("keys"),
                entries: C
            },
            m)
                for (_ in y)
                    _ in T || i(T, _, y[_]);
            else
                o(o.P + o.F * (d || S), t, y);
        return y
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(36)
      , o = n(32)
      , i = n(43)
      , s = {};
    n(11)(s, n(5)("iterator"), (function() {
        return this
    }
    )),
    e.exports = function(e, t, n) {
        e.prototype = r(s, {
            next: o(1, n)
        }),
        i(e, t + " Iterator")
    }
}
, function(e, t, n) {
    var r = n(56)
      , o = n(24);
    e.exports = function(e, t, n) {
        if (r(t))
            throw TypeError("String#" + n + " doesn't accept regex!");
        return String(o(e))
    }
}
, function(e, t, n) {
    var r = n(5)("match");
    e.exports = function(e) {
        var t = /./;
        try {
            "/./"[e](t)
        } catch (n) {
            try {
                return t[r] = !1,
                !"/./"[e](t)
            } catch (e) {}
        }
        return !0
    }
}
, function(e, t, n) {
    var r = n(46)
      , o = n(5)("iterator")
      , i = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (r.Array === e || i[o] === e)
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(8)
      , o = n(32);
    e.exports = function(e, t, n) {
        t in e ? r.f(e, t, o(0, n)) : e[t] = n
    }
}
, function(e, t, n) {
    var r = n(44)
      , o = n(5)("iterator")
      , i = n(46);
    e.exports = n(18).getIteratorMethod = function(e) {
        if (null != e)
            return e[o] || e["@@iterator"] || i[r(e)]
    }
}
, function(e, t, n) {
    var r = n(223);
    e.exports = function(e, t) {
        return new (r(e))(t)
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(9)
      , o = n(35)
      , i = n(6);
    e.exports = function(e) {
        for (var t = r(this), n = i(t.length), s = arguments.length, a = o(s > 1 ? arguments[1] : void 0, n), u = s > 2 ? arguments[2] : void 0, c = void 0 === u ? n : o(u, n); c > a; )
            t[a++] = e;
        return t
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(31)
      , o = n(113)
      , i = n(46)
      , s = n(15);
    e.exports = n(77)(Array, "Array", (function(e, t) {
        this._t = s(e),
        this._i = 0,
        this._k = t
    }
    ), (function() {
        var e = this._t
          , t = this._k
          , n = this._i++;
        return !e || n >= e.length ? (this._t = void 0,
        o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
    }
    ), "values"),
    i.Arguments = i.Array,
    r("keys"),
    r("values"),
    r("entries")
}
, function(e, t, n) {
    "use strict";
    var r, o, i = n(50), s = RegExp.prototype.exec, a = String.prototype.replace, u = s, c = (r = /a/,
    o = /b*/g,
    s.call(r, "a"),
    s.call(o, "a"),
    0 !== r.lastIndex || 0 !== o.lastIndex), l = void 0 !== /()??/.exec("")[1];
    (c || l) && (u = function(e) {
        var t, n, r, o, u = this;
        return l && (n = new RegExp("^" + u.source + "$(?!\\s)",i.call(u))),
        c && (t = u.lastIndex),
        r = s.call(u, e),
        c && r && (u.lastIndex = u.global ? r.index + r[0].length : t),
        l && r && r.length > 1 && a.call(r[0], n, (function() {
            for (o = 1; o < arguments.length - 2; o++)
                void 0 === arguments[o] && (r[o] = void 0)
        }
        )),
        r
    }
    ),
    e.exports = u
}
, function(e, t, n) {
    "use strict";
    var r = n(55)(!0);
    e.exports = function(e, t, n) {
        return t + (n ? r(e, t).length : 1)
    }
}
, function(e, t, n) {
    var r, o, i, s = n(19), a = n(103), u = n(70), c = n(66), l = n(2), f = l.process, d = l.setImmediate, p = l.clearImmediate, h = l.MessageChannel, v = l.Dispatch, g = 0, m = {}, y = function() {
        var e = +this;
        if (m.hasOwnProperty(e)) {
            var t = m[e];
            delete m[e],
            t()
        }
    }, _ = function(e) {
        y.call(e.data)
    };
    d && p || (d = function(e) {
        for (var t = [], n = 1; arguments.length > n; )
            t.push(arguments[n++]);
        return m[++g] = function() {
            a("function" == typeof e ? e : Function(e), t)
        }
        ,
        r(g),
        g
    }
    ,
    p = function(e) {
        delete m[e]
    }
    ,
    "process" == n(20)(f) ? r = function(e) {
        f.nextTick(s(y, e, 1))
    }
    : v && v.now ? r = function(e) {
        v.now(s(y, e, 1))
    }
    : h ? (i = (o = new h).port2,
    o.port1.onmessage = _,
    r = s(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(e) {
        l.postMessage(e + "", "*")
    }
    ,
    l.addEventListener("message", _, !1)) : r = "onreadystatechange"in c("script") ? function(e) {
        u.appendChild(c("script")).onreadystatechange = function() {
            u.removeChild(this),
            y.call(e)
        }
    }
    : function(e) {
        setTimeout(s(y, e, 1), 0)
    }
    ),
    e.exports = {
        set: d,
        clear: p
    }
}
, function(e, t, n) {
    var r = n(2)
      , o = n(89).set
      , i = r.MutationObserver || r.WebKitMutationObserver
      , s = r.process
      , a = r.Promise
      , u = "process" == n(20)(s);
    e.exports = function() {
        var e, t, n, c = function() {
            var r, o;
            for (u && (r = s.domain) && r.exit(); e; ) {
                o = e.fn,
                e = e.next;
                try {
                    o()
                } catch (r) {
                    throw e ? n() : t = void 0,
                    r
                }
            }
            t = void 0,
            r && r.enter()
        };
        if (u)
            n = function() {
                s.nextTick(c)
            }
            ;
        else if (!i || r.navigator && r.navigator.standalone)
            if (a && a.resolve) {
                var l = a.resolve(void 0);
                n = function() {
                    l.then(c)
                }
            } else
                n = function() {
                    o.call(r, c)
                }
                ;
        else {
            var f = !0
              , d = document.createTextNode("");
            new i(c).observe(d, {
                characterData: !0
            }),
            n = function() {
                d.data = f = !f
            }
        }
        return function(r) {
            var o = {
                fn: r,
                next: void 0
            };
            t && (t.next = o),
            e || (e = o,
            n()),
            t = o
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(10);
    function o(e) {
        var t, n;
        this.promise = new e((function(e, r) {
            if (void 0 !== t || void 0 !== n)
                throw TypeError("Bad Promise constructor");
            t = e,
            n = r
        }
        )),
        this.resolve = r(t),
        this.reject = r(n)
    }
    e.exports.f = function(e) {
        return new o(e)
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(2)
      , o = n(7)
      , i = n(29)
      , s = n(62)
      , a = n(11)
      , u = n(41)
      , c = n(3)
      , l = n(39)
      , f = n(21)
      , d = n(6)
      , p = n(123)
      , h = n(37).f
      , v = n(8).f
      , g = n(85)
      , m = n(43)
      , y = r.ArrayBuffer
      , _ = r.DataView
      , b = r.Math
      , E = r.RangeError
      , w = r.Infinity
      , x = y
      , S = b.abs
      , T = b.pow
      , O = b.floor
      , N = b.log
      , C = b.LN2
      , I = o ? "_b" : "buffer"
      , R = o ? "_l" : "byteLength"
      , k = o ? "_o" : "byteOffset";
    function A(e, t, n) {
        var r, o, i, s = new Array(n), a = 8 * n - t - 1, u = (1 << a) - 1, c = u >> 1, l = 23 === t ? T(2, -24) - T(2, -77) : 0, f = 0, d = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for ((e = S(e)) != e || e === w ? (o = e != e ? 1 : 0,
        r = u) : (r = O(N(e) / C),
        e * (i = T(2, -r)) < 1 && (r--,
        i *= 2),
        (e += r + c >= 1 ? l / i : l * T(2, 1 - c)) * i >= 2 && (r++,
        i /= 2),
        r + c >= u ? (o = 0,
        r = u) : r + c >= 1 ? (o = (e * i - 1) * T(2, t),
        r += c) : (o = e * T(2, c - 1) * T(2, t),
        r = 0)); t >= 8; s[f++] = 255 & o,
        o /= 256,
        t -= 8)
            ;
        for (r = r << t | o,
        a += t; a > 0; s[f++] = 255 & r,
        r /= 256,
        a -= 8)
            ;
        return s[--f] |= 128 * d,
        s
    }
    function P(e, t, n) {
        var r, o = 8 * n - t - 1, i = (1 << o) - 1, s = i >> 1, a = o - 7, u = n - 1, c = e[u--], l = 127 & c;
        for (c >>= 7; a > 0; l = 256 * l + e[u],
        u--,
        a -= 8)
            ;
        for (r = l & (1 << -a) - 1,
        l >>= -a,
        a += t; a > 0; r = 256 * r + e[u],
        u--,
        a -= 8)
            ;
        if (0 === l)
            l = 1 - s;
        else {
            if (l === i)
                return r ? NaN : c ? -w : w;
            r += T(2, t),
            l -= s
        }
        return (c ? -1 : 1) * r * T(2, l - t)
    }
    function M(e) {
        return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
    }
    function j(e) {
        return [255 & e]
    }
    function L(e) {
        return [255 & e, e >> 8 & 255]
    }
    function D(e) {
        return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
    }
    function F(e) {
        return A(e, 52, 8)
    }
    function U(e) {
        return A(e, 23, 4)
    }
    function q(e, t, n) {
        v(e.prototype, t, {
            get: function() {
                return this[n]
            }
        })
    }
    function $(e, t, n, r) {
        var o = p(+n);
        if (o + t > e[R])
            throw E("Wrong index!");
        var i = e[I]._b
          , s = o + e[k]
          , a = i.slice(s, s + t);
        return r ? a : a.reverse()
    }
    function B(e, t, n, r, o, i) {
        var s = p(+n);
        if (s + t > e[R])
            throw E("Wrong index!");
        for (var a = e[I]._b, u = s + e[k], c = r(+o), l = 0; l < t; l++)
            a[u + l] = c[i ? l : t - l - 1]
    }
    if (s.ABV) {
        if (!c((function() {
            y(1)
        }
        )) || !c((function() {
            new y(-1)
        }
        )) || c((function() {
            return new y,
            new y(1.5),
            new y(NaN),
            "ArrayBuffer" != y.name
        }
        ))) {
            for (var V, H = (y = function(e) {
                return l(this, y),
                new x(p(e))
            }
            ).prototype = x.prototype, W = h(x), G = 0; W.length > G; )
                (V = W[G++])in y || a(y, V, x[V]);
            i || (H.constructor = y)
        }
        var z = new _(new y(2))
          , X = _.prototype.setInt8;
        z.setInt8(0, 2147483648),
        z.setInt8(1, 2147483649),
        !z.getInt8(0) && z.getInt8(1) || u(_.prototype, {
            setInt8: function(e, t) {
                X.call(this, e, t << 24 >> 24)
            },
            setUint8: function(e, t) {
                X.call(this, e, t << 24 >> 24)
            }
        }, !0)
    } else
        y = function(e) {
            l(this, y, "ArrayBuffer");
            var t = p(e);
            this._b = g.call(new Array(t), 0),
            this[R] = t
        }
        ,
        _ = function(e, t, n) {
            l(this, _, "DataView"),
            l(e, y, "DataView");
            var r = e[R]
              , o = f(t);
            if (o < 0 || o > r)
                throw E("Wrong offset!");
            if (o + (n = void 0 === n ? r - o : d(n)) > r)
                throw E("Wrong length!");
            this[I] = e,
            this[k] = o,
            this[R] = n
        }
        ,
        o && (q(y, "byteLength", "_l"),
        q(_, "buffer", "_b"),
        q(_, "byteLength", "_l"),
        q(_, "byteOffset", "_o")),
        u(_.prototype, {
            getInt8: function(e) {
                return $(this, 1, e)[0] << 24 >> 24
            },
            getUint8: function(e) {
                return $(this, 1, e)[0]
            },
            getInt16: function(e) {
                var t = $(this, 2, e, arguments[1]);
                return (t[1] << 8 | t[0]) << 16 >> 16
            },
            getUint16: function(e) {
                var t = $(this, 2, e, arguments[1]);
                return t[1] << 8 | t[0]
            },
            getInt32: function(e) {
                return M($(this, 4, e, arguments[1]))
            },
            getUint32: function(e) {
                return M($(this, 4, e, arguments[1])) >>> 0
            },
            getFloat32: function(e) {
                return P($(this, 4, e, arguments[1]), 23, 4)
            },
            getFloat64: function(e) {
                return P($(this, 8, e, arguments[1]), 52, 8)
            },
            setInt8: function(e, t) {
                B(this, 1, e, j, t)
            },
            setUint8: function(e, t) {
                B(this, 1, e, j, t)
            },
            setInt16: function(e, t) {
                B(this, 2, e, L, t, arguments[2])
            },
            setUint16: function(e, t) {
                B(this, 2, e, L, t, arguments[2])
            },
            setInt32: function(e, t) {
                B(this, 4, e, D, t, arguments[2])
            },
            setUint32: function(e, t) {
                B(this, 4, e, D, t, arguments[2])
            },
            setFloat32: function(e, t) {
                B(this, 4, e, U, t, arguments[2])
            },
            setFloat64: function(e, t) {
                B(this, 8, e, F, t, arguments[2])
            }
        });
    m(y, "ArrayBuffer"),
    m(_, "DataView"),
    a(_.prototype, s.VIEW, !0),
    t.ArrayBuffer = y,
    t.DataView = _
}
, function(e, t, n) {
    var r;
    /*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
    !function(t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document)
                throw new Error("jQuery requires a window with a document");
            return n(e)
        }
        : n(t)
    }("undefined" != typeof window ? window : this, (function(n, o) {
        "use strict";
        var i = []
          , s = Object.getPrototypeOf
          , a = i.slice
          , u = i.flat ? function(e) {
            return i.flat.call(e)
        }
        : function(e) {
            return i.concat.apply([], e)
        }
          , c = i.push
          , l = i.indexOf
          , f = {}
          , d = f.toString
          , p = f.hasOwnProperty
          , h = p.toString
          , v = h.call(Object)
          , g = {}
          , m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        }
          , y = function(e) {
            return null != e && e === e.window
        }
          , _ = n.document
          , b = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };
        function E(e, t, n) {
            var r, o, i = (n = n || _).createElement("script");
            if (i.text = e,
            t)
                for (r in b)
                    (o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
            n.head.appendChild(i).parentNode.removeChild(i)
        }
        function w(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[d.call(e)] || "object" : typeof e
        }
        var x = function(e, t) {
            return new x.fn.init(e,t)
        };
        function S(e) {
            var t = !!e && "length"in e && e.length
              , n = w(e);
            return !m(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        x.fn = x.prototype = {
            jquery: "3.6.0",
            constructor: x,
            length: 0,
            toArray: function() {
                return a.call(this)
            },
            get: function(e) {
                return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = x.merge(this.constructor(), e);
                return t.prevObject = this,
                t
            },
            each: function(e) {
                return x.each(this, e)
            },
            map: function(e) {
                return this.pushStack(x.map(this, (function(t, n) {
                    return e.call(t, n, t)
                }
                )))
            },
            slice: function() {
                return this.pushStack(a.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(x.grep(this, (function(e, t) {
                    return (t + 1) % 2
                }
                )))
            },
            odd: function() {
                return this.pushStack(x.grep(this, (function(e, t) {
                    return t % 2
                }
                )))
            },
            eq: function(e) {
                var t = this.length
                  , n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: c,
            sort: i.sort,
            splice: i.splice
        },
        x.extend = x.fn.extend = function() {
            var e, t, n, r, o, i, s = arguments[0] || {}, a = 1, u = arguments.length, c = !1;
            for ("boolean" == typeof s && (c = s,
            s = arguments[a] || {},
            a++),
            "object" == typeof s || m(s) || (s = {}),
            a === u && (s = this,
            a--); a < u; a++)
                if (null != (e = arguments[a]))
                    for (t in e)
                        r = e[t],
                        "__proto__" !== t && s !== r && (c && r && (x.isPlainObject(r) || (o = Array.isArray(r))) ? (n = s[t],
                        i = o && !Array.isArray(n) ? [] : o || x.isPlainObject(n) ? n : {},
                        o = !1,
                        s[t] = x.extend(c, i, r)) : void 0 !== r && (s[t] = r));
            return s
        }
        ,
        x.extend({
            expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== d.call(e)) && (!(t = s(e)) || "function" == typeof (n = p.call(t, "constructor") && t.constructor) && h.call(n) === v)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            globalEval: function(e, t, n) {
                E(e, {
                    nonce: t && t.nonce
                }, n)
            },
            each: function(e, t) {
                var n, r = 0;
                if (S(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                        ;
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r]))
                            break;
                return e
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (S(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)),
                n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : l.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                    e[o++] = t[r];
                return e.length = o,
                e
            },
            grep: function(e, t, n) {
                for (var r = [], o = 0, i = e.length, s = !n; o < i; o++)
                    !t(e[o], o) !== s && r.push(e[o]);
                return r
            },
            map: function(e, t, n) {
                var r, o, i = 0, s = [];
                if (S(e))
                    for (r = e.length; i < r; i++)
                        null != (o = t(e[i], i, n)) && s.push(o);
                else
                    for (i in e)
                        null != (o = t(e[i], i, n)) && s.push(o);
                return u(s)
            },
            guid: 1,
            support: g
        }),
        "function" == typeof Symbol && (x.fn[Symbol.iterator] = i[Symbol.iterator]),
        x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
            f["[object " + t + "]"] = t.toLowerCase()
        }
        ));
        var T = /*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
        function(e) {
            var t, n, r, o, i, s, a, u, c, l, f, d, p, h, v, g, m, y, _, b = "sizzle" + 1 * new Date, E = e.document, w = 0, x = 0, S = ue(), T = ue(), O = ue(), N = ue(), C = function(e, t) {
                return e === t && (f = !0),
                0
            }, I = {}.hasOwnProperty, R = [], k = R.pop, A = R.push, P = R.push, M = R.slice, j = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", D = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\[\\da-fA-F]{1,6}" + D + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", U = "\\[" + D + "*(" + F + ")(?:" + D + "*([*^$|!~]?=)" + D + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + D + "*\\]", q = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + U + ")*)|.*)\\)|)", $ = new RegExp(D + "+","g"), B = new RegExp("^" + D + "+|((?:^|[^\\\\])(?:\\\\.)*)" + D + "+$","g"), V = new RegExp("^" + D + "*," + D + "*"), H = new RegExp("^" + D + "*([>+~]|" + D + ")" + D + "*"), W = new RegExp(D + "|>"), G = new RegExp(q), z = new RegExp("^" + F + "$"), X = {
                ID: new RegExp("^#(" + F + ")"),
                CLASS: new RegExp("^\\.(" + F + ")"),
                TAG: new RegExp("^(" + F + "|[*])"),
                ATTR: new RegExp("^" + U),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + D + "*(even|odd|(([+-]|)(\\d*)n|)" + D + "*(?:([+-]|)" + D + "*(\\d+)|))" + D + "*\\)|)","i"),
                bool: new RegExp("^(?:" + L + ")$","i"),
                needsContext: new RegExp("^" + D + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + D + "*((?:-\\d)?\\d*)" + D + "*\\)|)(?=[^-]|$)","i")
            }, K = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + D + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, ie = function() {
                d()
            }, se = be((function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }
            ), {
                dir: "parentNode",
                next: "legend"
            });
            try {
                P.apply(R = M.call(E.childNodes), E.childNodes),
                R[E.childNodes.length].nodeType
            } catch (e) {
                P = {
                    apply: R.length ? function(e, t) {
                        A.apply(e, M.call(t))
                    }
                    : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++]; )
                            ;
                        e.length = n - 1
                    }
                }
            }
            function ae(e, t, r, o) {
                var i, a, c, l, f, h, m, y = t && t.ownerDocument, E = t ? t.nodeType : 9;
                if (r = r || [],
                "string" != typeof e || !e || 1 !== E && 9 !== E && 11 !== E)
                    return r;
                if (!o && (d(t),
                t = t || p,
                v)) {
                    if (11 !== E && (f = Z.exec(e)))
                        if (i = f[1]) {
                            if (9 === E) {
                                if (!(c = t.getElementById(i)))
                                    return r;
                                if (c.id === i)
                                    return r.push(c),
                                    r
                            } else if (y && (c = y.getElementById(i)) && _(t, c) && c.id === i)
                                return r.push(c),
                                r
                        } else {
                            if (f[2])
                                return P.apply(r, t.getElementsByTagName(e)),
                                r;
                            if ((i = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                                return P.apply(r, t.getElementsByClassName(i)),
                                r
                        }
                    if (n.qsa && !N[e + " "] && (!g || !g.test(e)) && (1 !== E || "object" !== t.nodeName.toLowerCase())) {
                        if (m = e,
                        y = t,
                        1 === E && (W.test(e) || H.test(e))) {
                            for ((y = ee.test(e) && me(t.parentNode) || t) === t && n.scope || ((l = t.getAttribute("id")) ? l = l.replace(re, oe) : t.setAttribute("id", l = b)),
                            a = (h = s(e)).length; a--; )
                                h[a] = (l ? "#" + l : ":scope") + " " + _e(h[a]);
                            m = h.join(",")
                        }
                        try {
                            return P.apply(r, y.querySelectorAll(m)),
                            r
                        } catch (t) {
                            N(e, !0)
                        } finally {
                            l === b && t.removeAttribute("id")
                        }
                    }
                }
                return u(e.replace(B, "$1"), t, r, o)
            }
            function ue() {
                var e = [];
                return function t(n, o) {
                    return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                    t[n + " "] = o
                }
            }
            function ce(e) {
                return e[b] = !0,
                e
            }
            function le(e) {
                var t = p.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                    t = null
                }
            }
            function fe(e, t) {
                for (var n = e.split("|"), o = n.length; o--; )
                    r.attrHandle[n[o]] = t
            }
            function de(e, t) {
                var n = t && e
                  , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r)
                    return r;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === t)
                            return -1;
                return e ? 1 : -1
            }
            function pe(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }
            function he(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }
            function ve(e) {
                return function(t) {
                    return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label"in t && t.disabled === e
                }
            }
            function ge(e) {
                return ce((function(t) {
                    return t = +t,
                    ce((function(n, r) {
                        for (var o, i = e([], n.length, t), s = i.length; s--; )
                            n[o = i[s]] && (n[o] = !(r[o] = n[o]))
                    }
                    ))
                }
                ))
            }
            function me(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (t in n = ae.support = {},
            i = ae.isXML = function(e) {
                var t = e && e.namespaceURI
                  , n = e && (e.ownerDocument || e).documentElement;
                return !K.test(t || n && n.nodeName || "HTML")
            }
            ,
            d = ae.setDocument = function(e) {
                var t, o, s = e ? e.ownerDocument || e : E;
                return s != p && 9 === s.nodeType && s.documentElement ? (h = (p = s).documentElement,
                v = !i(p),
                E != p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)),
                n.scope = le((function(e) {
                    return h.appendChild(e).appendChild(p.createElement("div")),
                    void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }
                )),
                n.attributes = le((function(e) {
                    return e.className = "i",
                    !e.getAttribute("className")
                }
                )),
                n.getElementsByTagName = le((function(e) {
                    return e.appendChild(p.createComment("")),
                    !e.getElementsByTagName("*").length
                }
                )),
                n.getElementsByClassName = J.test(p.getElementsByClassName),
                n.getById = le((function(e) {
                    return h.appendChild(e).id = b,
                    !p.getElementsByName || !p.getElementsByName(b).length
                }
                )),
                n.getById ? (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }
                ,
                r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && v) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }
                ) : (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }
                ,
                r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && v) {
                        var n, r, o, i = t.getElementById(e);
                        if (i) {
                            if ((n = i.getAttributeNode("id")) && n.value === e)
                                return [i];
                            for (o = t.getElementsByName(e),
                            r = 0; i = o[r++]; )
                                if ((n = i.getAttributeNode("id")) && n.value === e)
                                    return [i]
                        }
                        return []
                    }
                }
                ),
                r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                }
                : function(e, t) {
                    var n, r = [], o = 0, i = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = i[o++]; )
                            1 === n.nodeType && r.push(n);
                        return r
                    }
                    return i
                }
                ,
                r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && v)
                        return t.getElementsByClassName(e)
                }
                ,
                m = [],
                g = [],
                (n.qsa = J.test(p.querySelectorAll)) && (le((function(e) {
                    var t;
                    h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + D + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || g.push("\\[" + D + "*(?:value|" + L + ")"),
                    e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="),
                    (t = p.createElement("input")).setAttribute("name", ""),
                    e.appendChild(t),
                    e.querySelectorAll("[name='']").length || g.push("\\[" + D + "*name" + D + "*=" + D + "*(?:''|\"\")"),
                    e.querySelectorAll(":checked").length || g.push(":checked"),
                    e.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]"),
                    e.querySelectorAll("\\\f"),
                    g.push("[\\r\\n\\f]")
                }
                )),
                le((function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && g.push("name" + D + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                    h.appendChild(e).disabled = !0,
                    2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    g.push(",.*:")
                }
                ))),
                (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le((function(e) {
                    n.disconnectedMatch = y.call(e, "*"),
                    y.call(e, "[s!='']:x"),
                    m.push("!=", q)
                }
                )),
                g = g.length && new RegExp(g.join("|")),
                m = m.length && new RegExp(m.join("|")),
                t = J.test(h.compareDocumentPosition),
                _ = t || J.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e
                      , r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                }
                : function(e, t) {
                    if (t)
                        for (; t = t.parentNode; )
                            if (t === e)
                                return !0;
                    return !1
                }
                ,
                C = t ? function(e, t) {
                    if (e === t)
                        return f = !0,
                        0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == p || e.ownerDocument == E && _(E, e) ? -1 : t == p || t.ownerDocument == E && _(E, t) ? 1 : l ? j(l, e) - j(l, t) : 0 : 4 & r ? -1 : 1)
                }
                : function(e, t) {
                    if (e === t)
                        return f = !0,
                        0;
                    var n, r = 0, o = e.parentNode, i = t.parentNode, s = [e], a = [t];
                    if (!o || !i)
                        return e == p ? -1 : t == p ? 1 : o ? -1 : i ? 1 : l ? j(l, e) - j(l, t) : 0;
                    if (o === i)
                        return de(e, t);
                    for (n = e; n = n.parentNode; )
                        s.unshift(n);
                    for (n = t; n = n.parentNode; )
                        a.unshift(n);
                    for (; s[r] === a[r]; )
                        r++;
                    return r ? de(s[r], a[r]) : s[r] == E ? -1 : a[r] == E ? 1 : 0
                }
                ,
                p) : p
            }
            ,
            ae.matches = function(e, t) {
                return ae(e, null, null, t)
            }
            ,
            ae.matchesSelector = function(e, t) {
                if (d(e),
                n.matchesSelector && v && !N[t + " "] && (!m || !m.test(t)) && (!g || !g.test(t)))
                    try {
                        var r = y.call(e, t);
                        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return r
                    } catch (e) {
                        N(t, !0)
                    }
                return ae(t, p, null, [e]).length > 0
            }
            ,
            ae.contains = function(e, t) {
                return (e.ownerDocument || e) != p && d(e),
                _(e, t)
            }
            ,
            ae.attr = function(e, t) {
                (e.ownerDocument || e) != p && d(e);
                var o = r.attrHandle[t.toLowerCase()]
                  , i = o && I.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !v) : void 0;
                return void 0 !== i ? i : n.attributes || !v ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }
            ,
            ae.escape = function(e) {
                return (e + "").replace(re, oe)
            }
            ,
            ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            ae.uniqueSort = function(e) {
                var t, r = [], o = 0, i = 0;
                if (f = !n.detectDuplicates,
                l = !n.sortStable && e.slice(0),
                e.sort(C),
                f) {
                    for (; t = e[i++]; )
                        t === e[i] && (o = r.push(i));
                    for (; o--; )
                        e.splice(r[o], 1)
                }
                return l = null,
                e
            }
            ,
            o = ae.getText = function(e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += o(e)
                    } else if (3 === i || 4 === i)
                        return e.nodeValue
                } else
                    for (; t = e[r++]; )
                        n += o(t);
                return n
            }
            ,
            (r = ae.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: X,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne),
                        e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]),
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                        e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                        e[2] = n.slice(0, t)),
                        e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        }
                        : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = S[e + " "];
                        return t || (t = new RegExp("(^|" + D + ")" + e + "(" + D + "|$)")) && S(e, (function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }
                        ))
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var o = ae.attr(r, e);
                            return null == o ? "!=" === t : !t || (o += "",
                            "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, o) {
                        var i = "nth" !== e.slice(0, 3)
                          , s = "last" !== e.slice(-4)
                          , a = "of-type" === t;
                        return 1 === r && 0 === o ? function(e) {
                            return !!e.parentNode
                        }
                        : function(t, n, u) {
                            var c, l, f, d, p, h, v = i !== s ? "nextSibling" : "previousSibling", g = t.parentNode, m = a && t.nodeName.toLowerCase(), y = !u && !a, _ = !1;
                            if (g) {
                                if (i) {
                                    for (; v; ) {
                                        for (d = t; d = d[v]; )
                                            if (a ? d.nodeName.toLowerCase() === m : 1 === d.nodeType)
                                                return !1;
                                        h = v = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? g.firstChild : g.lastChild],
                                s && y) {
                                    for (_ = (p = (c = (l = (f = (d = g)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === w && c[1]) && c[2],
                                    d = p && g.childNodes[p]; d = ++p && d && d[v] || (_ = p = 0) || h.pop(); )
                                        if (1 === d.nodeType && ++_ && d === t) {
                                            l[e] = [w, p, _];
                                            break
                                        }
                                } else if (y && (_ = p = (c = (l = (f = (d = t)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === w && c[1]),
                                !1 === _)
                                    for (; (d = ++p && d && d[v] || (_ = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++_ || (y && ((l = (f = d[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [w, _]),
                                    d !== t)); )
                                        ;
                                return (_ -= o) === r || _ % r == 0 && _ / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return o[b] ? o(t) : o.length > 1 ? (n = [e, e, "", t],
                        r.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function(e, n) {
                            for (var r, i = o(e, t), s = i.length; s--; )
                                e[r = j(e, i[s])] = !(n[r] = i[s])
                        }
                        )) : function(e) {
                            return o(e, 0, n)
                        }
                        ) : o
                    }
                },
                pseudos: {
                    not: ce((function(e) {
                        var t = []
                          , n = []
                          , r = a(e.replace(B, "$1"));
                        return r[b] ? ce((function(e, t, n, o) {
                            for (var i, s = r(e, null, o, []), a = e.length; a--; )
                                (i = s[a]) && (e[a] = !(t[a] = i))
                        }
                        )) : function(e, o, i) {
                            return t[0] = e,
                            r(t, null, i, n),
                            t[0] = null,
                            !n.pop()
                        }
                    }
                    )),
                    has: ce((function(e) {
                        return function(t) {
                            return ae(e, t).length > 0
                        }
                    }
                    )),
                    contains: ce((function(e) {
                        return e = e.replace(te, ne),
                        function(t) {
                            return (t.textContent || o(t)).indexOf(e) > -1
                        }
                    }
                    )),
                    lang: ce((function(e) {
                        return z.test(e || "") || ae.error("unsupported lang: " + e),
                        e = e.replace(te, ne).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                    return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    }
                    )),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ve(!1),
                    disabled: ve(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Y.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ge((function() {
                        return [0]
                    }
                    )),
                    last: ge((function(e, t) {
                        return [t - 1]
                    }
                    )),
                    eq: ge((function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }
                    )),
                    even: ge((function(e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }
                    )),
                    odd: ge((function(e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }
                    )),
                    lt: ge((function(e, t, n) {
                        for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                            e.push(r);
                        return e
                    }
                    )),
                    gt: ge((function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; )
                            e.push(r);
                        return e
                    }
                    ))
                }
            }).pseudos.nth = r.pseudos.eq,
            {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                r.pseudos[t] = pe(t);
            for (t in {
                submit: !0,
                reset: !0
            })
                r.pseudos[t] = he(t);
            function ye() {}
            function _e(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++)
                    r += e[t].value;
                return r
            }
            function be(e, t, n) {
                var r = t.dir
                  , o = t.next
                  , i = o || r
                  , s = n && "parentNode" === i
                  , a = x++;
                return t.first ? function(t, n, o) {
                    for (; t = t[r]; )
                        if (1 === t.nodeType || s)
                            return e(t, n, o);
                    return !1
                }
                : function(t, n, u) {
                    var c, l, f, d = [w, a];
                    if (u) {
                        for (; t = t[r]; )
                            if ((1 === t.nodeType || s) && e(t, n, u))
                                return !0
                    } else
                        for (; t = t[r]; )
                            if (1 === t.nodeType || s)
                                if (l = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}),
                                o && o === t.nodeName.toLowerCase())
                                    t = t[r] || t;
                                else {
                                    if ((c = l[i]) && c[0] === w && c[1] === a)
                                        return d[2] = c[2];
                                    if (l[i] = d,
                                    d[2] = e(t, n, u))
                                        return !0
                                }
                    return !1
                }
            }
            function Ee(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var o = e.length; o--; )
                        if (!e[o](t, n, r))
                            return !1;
                    return !0
                }
                : e[0]
            }
            function we(e, t, n, r, o) {
                for (var i, s = [], a = 0, u = e.length, c = null != t; a < u; a++)
                    (i = e[a]) && (n && !n(i, r, o) || (s.push(i),
                    c && t.push(a)));
                return s
            }
            function xe(e, t, n, r, o, i) {
                return r && !r[b] && (r = xe(r)),
                o && !o[b] && (o = xe(o, i)),
                ce((function(i, s, a, u) {
                    var c, l, f, d = [], p = [], h = s.length, v = i || function(e, t, n) {
                        for (var r = 0, o = t.length; r < o; r++)
                            ae(e, t[r], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []), g = !e || !i && t ? v : we(v, d, e, a, u), m = n ? o || (i ? e : h || r) ? [] : s : g;
                    if (n && n(g, m, a, u),
                    r)
                        for (c = we(m, p),
                        r(c, [], a, u),
                        l = c.length; l--; )
                            (f = c[l]) && (m[p[l]] = !(g[p[l]] = f));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (c = [],
                                l = m.length; l--; )
                                    (f = m[l]) && c.push(g[l] = f);
                                o(null, m = [], c, u)
                            }
                            for (l = m.length; l--; )
                                (f = m[l]) && (c = o ? j(i, f) : d[l]) > -1 && (i[c] = !(s[c] = f))
                        }
                    } else
                        m = we(m === s ? m.splice(h, m.length) : m),
                        o ? o(null, s, m, u) : P.apply(s, m)
                }
                ))
            }
            function Se(e) {
                for (var t, n, o, i = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], u = s ? 1 : 0, l = be((function(e) {
                    return e === t
                }
                ), a, !0), f = be((function(e) {
                    return j(t, e) > -1
                }
                ), a, !0), d = [function(e, n, r) {
                    var o = !s && (r || n !== c) || ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
                    return t = null,
                    o
                }
                ]; u < i; u++)
                    if (n = r.relative[e[u].type])
                        d = [be(Ee(d), n)];
                    else {
                        if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                            for (o = ++u; o < i && !r.relative[e[o].type]; o++)
                                ;
                            return xe(u > 1 && Ee(d), u > 1 && _e(e.slice(0, u - 1).concat({
                                value: " " === e[u - 2].type ? "*" : ""
                            })).replace(B, "$1"), n, u < o && Se(e.slice(u, o)), o < i && Se(e = e.slice(o)), o < i && _e(e))
                        }
                        d.push(n)
                    }
                return Ee(d)
            }
            return ye.prototype = r.filters = r.pseudos,
            r.setFilters = new ye,
            s = ae.tokenize = function(e, t) {
                var n, o, i, s, a, u, c, l = T[e + " "];
                if (l)
                    return t ? 0 : l.slice(0);
                for (a = e,
                u = [],
                c = r.preFilter; a; ) {
                    for (s in n && !(o = V.exec(a)) || (o && (a = a.slice(o[0].length) || a),
                    u.push(i = [])),
                    n = !1,
                    (o = H.exec(a)) && (n = o.shift(),
                    i.push({
                        value: n,
                        type: o[0].replace(B, " ")
                    }),
                    a = a.slice(n.length)),
                    r.filter)
                        !(o = X[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(),
                        i.push({
                            value: n,
                            type: s,
                            matches: o
                        }),
                        a = a.slice(n.length));
                    if (!n)
                        break
                }
                return t ? a.length : a ? ae.error(e) : T(e, u).slice(0)
            }
            ,
            a = ae.compile = function(e, t) {
                var n, o = [], i = [], a = O[e + " "];
                if (!a) {
                    for (t || (t = s(e)),
                    n = t.length; n--; )
                        (a = Se(t[n]))[b] ? o.push(a) : i.push(a);
                    (a = O(e, function(e, t) {
                        var n = t.length > 0
                          , o = e.length > 0
                          , i = function(i, s, a, u, l) {
                            var f, h, g, m = 0, y = "0", _ = i && [], b = [], E = c, x = i || o && r.find.TAG("*", l), S = w += null == E ? 1 : Math.random() || .1, T = x.length;
                            for (l && (c = s == p || s || l); y !== T && null != (f = x[y]); y++) {
                                if (o && f) {
                                    for (h = 0,
                                    s || f.ownerDocument == p || (d(f),
                                    a = !v); g = e[h++]; )
                                        if (g(f, s || p, a)) {
                                            u.push(f);
                                            break
                                        }
                                    l && (w = S)
                                }
                                n && ((f = !g && f) && m--,
                                i && _.push(f))
                            }
                            if (m += y,
                            n && y !== m) {
                                for (h = 0; g = t[h++]; )
                                    g(_, b, s, a);
                                if (i) {
                                    if (m > 0)
                                        for (; y--; )
                                            _[y] || b[y] || (b[y] = k.call(u));
                                    b = we(b)
                                }
                                P.apply(u, b),
                                l && !i && b.length > 0 && m + t.length > 1 && ae.uniqueSort(u)
                            }
                            return l && (w = S,
                            c = E),
                            _
                        };
                        return n ? ce(i) : i
                    }(i, o))).selector = e
                }
                return a
            }
            ,
            u = ae.select = function(e, t, n, o) {
                var i, u, c, l, f, d = "function" == typeof e && e, p = !o && s(e = d.selector || e);
                if (n = n || [],
                1 === p.length) {
                    if ((u = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = u[0]).type && 9 === t.nodeType && v && r.relative[u[1].type]) {
                        if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
                            return n;
                        d && (t = t.parentNode),
                        e = e.slice(u.shift().value.length)
                    }
                    for (i = X.needsContext.test(e) ? 0 : u.length; i-- && (c = u[i],
                    !r.relative[l = c.type]); )
                        if ((f = r.find[l]) && (o = f(c.matches[0].replace(te, ne), ee.test(u[0].type) && me(t.parentNode) || t))) {
                            if (u.splice(i, 1),
                            !(e = o.length && _e(u)))
                                return P.apply(n, o),
                                n;
                            break
                        }
                }
                return (d || a(e, p))(o, t, !v, n, !t || ee.test(e) && me(t.parentNode) || t),
                n
            }
            ,
            n.sortStable = b.split("").sort(C).join("") === b,
            n.detectDuplicates = !!f,
            d(),
            n.sortDetached = le((function(e) {
                return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
            }
            )),
            le((function(e) {
                return e.innerHTML = "<a href='#'></a>",
                "#" === e.firstChild.getAttribute("href")
            }
            )) || fe("type|href|height|width", (function(e, t, n) {
                if (!n)
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }
            )),
            n.attributes && le((function(e) {
                return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }
            )) || fe("value", (function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue
            }
            )),
            le((function(e) {
                return null == e.getAttribute("disabled")
            }
            )) || fe(L, (function(e, t, n) {
                var r;
                if (!n)
                    return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }
            )),
            ae
        }(n);
        x.find = T,
        x.expr = T.selectors,
        x.expr[":"] = x.expr.pseudos,
        x.uniqueSort = x.unique = T.uniqueSort,
        x.text = T.getText,
        x.isXMLDoc = T.isXML,
        x.contains = T.contains,
        x.escapeSelector = T.escape;
        var O = function(e, t, n) {
            for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (o && x(e).is(n))
                        break;
                    r.push(e)
                }
            return r
        }
          , N = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
          , C = x.expr.match.needsContext;
        function I(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var R = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function k(e, t, n) {
            return m(t) ? x.grep(e, (function(e, r) {
                return !!t.call(e, r, e) !== n
            }
            )) : t.nodeType ? x.grep(e, (function(e) {
                return e === t !== n
            }
            )) : "string" != typeof t ? x.grep(e, (function(e) {
                return l.call(t, e) > -1 !== n
            }
            )) : x.filter(t, e, n)
        }
        x.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, (function(e) {
                return 1 === e.nodeType
            }
            )))
        }
        ,
        x.fn.extend({
            find: function(e) {
                var t, n, r = this.length, o = this;
                if ("string" != typeof e)
                    return this.pushStack(x(e).filter((function() {
                        for (t = 0; t < r; t++)
                            if (x.contains(o[t], this))
                                return !0
                    }
                    )));
                for (n = this.pushStack([]),
                t = 0; t < r; t++)
                    x.find(e, o[t], n);
                return r > 1 ? x.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(k(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(k(this, e || [], !0))
            },
            is: function(e) {
                return !!k(this, "string" == typeof e && C.test(e) ? x(e) : e || [], !1).length
            }
        });
        var A, P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (x.fn.init = function(e, t, n) {
            var r, o;
            if (!e)
                return this;
            if (n = n || A,
            "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : P.exec(e)) || !r[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof x ? t[0] : t,
                    x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : _, !0)),
                    R.test(r[1]) && x.isPlainObject(t))
                        for (r in t)
                            m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (o = _.getElementById(r[2])) && (this[0] = o,
                this.length = 1),
                this
            }
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this)
        }
        ).prototype = x.fn,
        A = x(_);
        var M = /^(?:parents|prev(?:Until|All))/
          , j = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        function L(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; )
                ;
            return e
        }
        x.fn.extend({
            has: function(e) {
                var t = x(e, this)
                  , n = t.length;
                return this.filter((function() {
                    for (var e = 0; e < n; e++)
                        if (x.contains(this, t[e]))
                            return !0
                }
                ))
            },
            closest: function(e, t) {
                var n, r = 0, o = this.length, i = [], s = "string" != typeof e && x(e);
                if (!C.test(e))
                    for (; r < o; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                                i.push(n);
                                break
                            }
                return this.pushStack(i.length > 1 ? x.uniqueSort(i) : i)
            },
            index: function(e) {
                return e ? "string" == typeof e ? l.call(x(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        x.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return O(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return O(e, "parentNode", n)
            },
            next: function(e) {
                return L(e, "nextSibling")
            },
            prev: function(e) {
                return L(e, "previousSibling")
            },
            nextAll: function(e) {
                return O(e, "nextSibling")
            },
            prevAll: function(e) {
                return O(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return O(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return O(e, "previousSibling", n)
            },
            siblings: function(e) {
                return N((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return N(e.firstChild)
            },
            contents: function(e) {
                return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (I(e, "template") && (e = e.content || e),
                x.merge([], e.childNodes))
            }
        }, (function(e, t) {
            x.fn[e] = function(n, r) {
                var o = x.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (o = x.filter(r, o)),
                this.length > 1 && (j[e] || x.uniqueSort(o),
                M.test(e) && o.reverse()),
                this.pushStack(o)
            }
        }
        ));
        var D = /[^\x20\t\r\n\f]+/g;
        function F(e) {
            return e
        }
        function U(e) {
            throw e
        }
        function q(e, t, n, r) {
            var o;
            try {
                e && m(o = e.promise) ? o.call(e).done(t).fail(n) : e && m(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        x.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var t = {};
                return x.each(e.match(D) || [], (function(e, n) {
                    t[n] = !0
                }
                )),
                t
            }(e) : x.extend({}, e);
            var t, n, r, o, i = [], s = [], a = -1, u = function() {
                for (o = o || e.once,
                r = t = !0; s.length; a = -1)
                    for (n = s.shift(); ++a < i.length; )
                        !1 === i[a].apply(n[0], n[1]) && e.stopOnFalse && (a = i.length,
                        n = !1);
                e.memory || (n = !1),
                t = !1,
                o && (i = n ? [] : "")
            }, c = {
                add: function() {
                    return i && (n && !t && (a = i.length - 1,
                    s.push(n)),
                    function t(n) {
                        x.each(n, (function(n, r) {
                            m(r) ? e.unique && c.has(r) || i.push(r) : r && r.length && "string" !== w(r) && t(r)
                        }
                        ))
                    }(arguments),
                    n && !t && u()),
                    this
                },
                remove: function() {
                    return x.each(arguments, (function(e, t) {
                        for (var n; (n = x.inArray(t, i, n)) > -1; )
                            i.splice(n, 1),
                            n <= a && a--
                    }
                    )),
                    this
                },
                has: function(e) {
                    return e ? x.inArray(e, i) > -1 : i.length > 0
                },
                empty: function() {
                    return i && (i = []),
                    this
                },
                disable: function() {
                    return o = s = [],
                    i = n = "",
                    this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return o = s = [],
                    n || t || (i = n = ""),
                    this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, n) {
                    return o || (n = [e, (n = n || []).slice ? n.slice() : n],
                    s.push(n),
                    t || u()),
                    this
                },
                fire: function() {
                    return c.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!r
                }
            };
            return c
        }
        ,
        x.extend({
            Deferred: function(e) {
                var t = [["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2], ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]]
                  , r = "pending"
                  , o = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(e) {
                        return o.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return x.Deferred((function(n) {
                            x.each(t, (function(t, r) {
                                var o = m(e[r[4]]) && e[r[4]];
                                i[r[1]]((function() {
                                    var e = o && o.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [e] : arguments)
                                }
                                ))
                            }
                            )),
                            e = null
                        }
                        )).promise()
                    },
                    then: function(e, r, o) {
                        var i = 0;
                        function s(e, t, r, o) {
                            return function() {
                                var a = this
                                  , u = arguments
                                  , c = function() {
                                    var n, c;
                                    if (!(e < i)) {
                                        if ((n = r.apply(a, u)) === t.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        c = n && ("object" == typeof n || "function" == typeof n) && n.then,
                                        m(c) ? o ? c.call(n, s(i, t, F, o), s(i, t, U, o)) : (i++,
                                        c.call(n, s(i, t, F, o), s(i, t, U, o), s(i, t, F, t.notifyWith))) : (r !== F && (a = void 0,
                                        u = [n]),
                                        (o || t.resolveWith)(a, u))
                                    }
                                }
                                  , l = o ? c : function() {
                                    try {
                                        c()
                                    } catch (n) {
                                        x.Deferred.exceptionHook && x.Deferred.exceptionHook(n, l.stackTrace),
                                        e + 1 >= i && (r !== U && (a = void 0,
                                        u = [n]),
                                        t.rejectWith(a, u))
                                    }
                                }
                                ;
                                e ? l() : (x.Deferred.getStackHook && (l.stackTrace = x.Deferred.getStackHook()),
                                n.setTimeout(l))
                            }
                        }
                        return x.Deferred((function(n) {
                            t[0][3].add(s(0, n, m(o) ? o : F, n.notifyWith)),
                            t[1][3].add(s(0, n, m(e) ? e : F)),
                            t[2][3].add(s(0, n, m(r) ? r : U))
                        }
                        )).promise()
                    },
                    promise: function(e) {
                        return null != e ? x.extend(e, o) : o
                    }
                }
                  , i = {};
                return x.each(t, (function(e, n) {
                    var s = n[2]
                      , a = n[5];
                    o[n[1]] = s.add,
                    a && s.add((function() {
                        r = a
                    }
                    ), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
                    s.add(n[3].fire),
                    i[n[0]] = function() {
                        return i[n[0] + "With"](this === i ? void 0 : this, arguments),
                        this
                    }
                    ,
                    i[n[0] + "With"] = s.fireWith
                }
                )),
                o.promise(i),
                e && e.call(i, i),
                i
            },
            when: function(e) {
                var t = arguments.length
                  , n = t
                  , r = Array(n)
                  , o = a.call(arguments)
                  , i = x.Deferred()
                  , s = function(e) {
                    return function(n) {
                        r[e] = this,
                        o[e] = arguments.length > 1 ? a.call(arguments) : n,
                        --t || i.resolveWith(r, o)
                    }
                };
                if (t <= 1 && (q(e, i.done(s(n)).resolve, i.reject, !t),
                "pending" === i.state() || m(o[n] && o[n].then)))
                    return i.then();
                for (; n--; )
                    q(o[n], s(n), i.reject);
                return i.promise()
            }
        });
        var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        x.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && $.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }
        ,
        x.readyException = function(e) {
            n.setTimeout((function() {
                throw e
            }
            ))
        }
        ;
        var B = x.Deferred();
        function V() {
            _.removeEventListener("DOMContentLoaded", V),
            n.removeEventListener("load", V),
            x.ready()
        }
        x.fn.ready = function(e) {
            return B.then(e).catch((function(e) {
                x.readyException(e)
            }
            )),
            this
        }
        ,
        x.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0,
                !0 !== e && --x.readyWait > 0 || B.resolveWith(_, [x]))
            }
        }),
        x.ready.then = B.then,
        "complete" === _.readyState || "loading" !== _.readyState && !_.documentElement.doScroll ? n.setTimeout(x.ready) : (_.addEventListener("DOMContentLoaded", V),
        n.addEventListener("load", V));
        var H = function(e, t, n, r, o, i, s) {
            var a = 0
              , u = e.length
              , c = null == n;
            if ("object" === w(n))
                for (a in o = !0,
                n)
                    H(e, t, a, n[a], !0, i, s);
            else if (void 0 !== r && (o = !0,
            m(r) || (s = !0),
            c && (s ? (t.call(e, r),
            t = null) : (c = t,
            t = function(e, t, n) {
                return c.call(x(e), n)
            }
            )),
            t))
                for (; a < u; a++)
                    t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return o ? e : c ? t.call(e) : u ? t(e[0], n) : i
        }
          , W = /^-ms-/
          , G = /-([a-z])/g;
        function z(e, t) {
            return t.toUpperCase()
        }
        function X(e) {
            return e.replace(W, "ms-").replace(G, z)
        }
        var K = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
        function Q() {
            this.expando = x.expando + Q.uid++
        }
        Q.uid = 1,
        Q.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {},
                K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))),
                t
            },
            set: function(e, t, n) {
                var r, o = this.cache(e);
                if ("string" == typeof t)
                    o[X(t)] = n;
                else
                    for (r in t)
                        o[X(r)] = t[r];
                return o
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(D) || []).length;
                        for (; n--; )
                            delete r[t[n]]
                    }
                    (void 0 === t || x.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !x.isEmptyObject(t)
            }
        };
        var Y = new Q
          , J = new Q
          , Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , ee = /[A-Z]/g;
        function te(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(ee, "-$&").toLowerCase(),
                "string" == typeof (n = e.getAttribute(r))) {
                    try {
                        n = function(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {}
                    J.set(e, t, n)
                } else
                    n = void 0;
            return n
        }
        x.extend({
            hasData: function(e) {
                return J.hasData(e) || Y.hasData(e)
            },
            data: function(e, t, n) {
                return J.access(e, t, n)
            },
            removeData: function(e, t) {
                J.remove(e, t)
            },
            _data: function(e, t, n) {
                return Y.access(e, t, n)
            },
            _removeData: function(e, t) {
                Y.remove(e, t)
            }
        }),
        x.fn.extend({
            data: function(e, t) {
                var n, r, o, i = this[0], s = i && i.attributes;
                if (void 0 === e) {
                    if (this.length && (o = J.get(i),
                    1 === i.nodeType && !Y.get(i, "hasDataAttrs"))) {
                        for (n = s.length; n--; )
                            s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = X(r.slice(5)),
                            te(i, r, o[r]));
                        Y.set(i, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each((function() {
                    J.set(this, e)
                }
                )) : H(this, (function(t) {
                    var n;
                    if (i && void 0 === t)
                        return void 0 !== (n = J.get(i, e)) || void 0 !== (n = te(i, e)) ? n : void 0;
                    this.each((function() {
                        J.set(this, e, t)
                    }
                    ))
                }
                ), null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each((function() {
                    J.remove(this, e)
                }
                ))
            }
        }),
        x.extend({
            queue: function(e, t, n) {
                var r;
                if (e)
                    return t = (t || "fx") + "queue",
                    r = Y.get(e, t),
                    n && (!r || Array.isArray(n) ? r = Y.access(e, t, x.makeArray(n)) : r.push(n)),
                    r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = x.queue(e, t)
                  , r = n.length
                  , o = n.shift()
                  , i = x._queueHooks(e, t);
                "inprogress" === o && (o = n.shift(),
                r--),
                o && ("fx" === t && n.unshift("inprogress"),
                delete i.stop,
                o.call(e, (function() {
                    x.dequeue(e, t)
                }
                ), i)),
                !r && i && i.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Y.get(e, n) || Y.access(e, n, {
                    empty: x.Callbacks("once memory").add((function() {
                        Y.remove(e, [t + "queue", n])
                    }
                    ))
                })
            }
        }),
        x.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e,
                e = "fx",
                n--),
                arguments.length < n ? x.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                    var n = x.queue(this, e, t);
                    x._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
                }
                ))
            },
            dequeue: function(e) {
                return this.each((function() {
                    x.dequeue(this, e)
                }
                ))
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1, o = x.Deferred(), i = this, s = this.length, a = function() {
                    --r || o.resolveWith(i, [i])
                };
                for ("string" != typeof e && (t = e,
                e = void 0),
                e = e || "fx"; s--; )
                    (n = Y.get(i[s], e + "queueHooks")) && n.empty && (r++,
                    n.empty.add(a));
                return a(),
                o.promise(t)
            }
        });
        var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$","i")
          , oe = ["Top", "Right", "Bottom", "Left"]
          , ie = _.documentElement
          , se = function(e) {
            return x.contains(e.ownerDocument, e)
        }
          , ae = {
            composed: !0
        };
        ie.getRootNode && (se = function(e) {
            return x.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
        }
        );
        var ue = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === x.css(e, "display")
        };
        function ce(e, t, n, r) {
            var o, i, s = 20, a = r ? function() {
                return r.cur()
            }
            : function() {
                return x.css(e, t, "")
            }
            , u = a(), c = n && n[3] || (x.cssNumber[t] ? "" : "px"), l = e.nodeType && (x.cssNumber[t] || "px" !== c && +u) && re.exec(x.css(e, t));
            if (l && l[3] !== c) {
                for (u /= 2,
                c = c || l[3],
                l = +u || 1; s--; )
                    x.style(e, t, l + c),
                    (1 - i) * (1 - (i = a() / u || .5)) <= 0 && (s = 0),
                    l /= i;
                l *= 2,
                x.style(e, t, l + c),
                n = n || []
            }
            return n && (l = +l || +u || 0,
            o = n[1] ? l + (n[1] + 1) * n[2] : +n[2],
            r && (r.unit = c,
            r.start = l,
            r.end = o)),
            o
        }
        var le = {};
        function fe(e) {
            var t, n = e.ownerDocument, r = e.nodeName, o = le[r];
            return o || (t = n.body.appendChild(n.createElement(r)),
            o = x.css(t, "display"),
            t.parentNode.removeChild(t),
            "none" === o && (o = "block"),
            le[r] = o,
            o)
        }
        function de(e, t) {
            for (var n, r, o = [], i = 0, s = e.length; i < s; i++)
                (r = e[i]).style && (n = r.style.display,
                t ? ("none" === n && (o[i] = Y.get(r, "display") || null,
                o[i] || (r.style.display = "")),
                "" === r.style.display && ue(r) && (o[i] = fe(r))) : "none" !== n && (o[i] = "none",
                Y.set(r, "display", n)));
            for (i = 0; i < s; i++)
                null != o[i] && (e[i].style.display = o[i]);
            return e
        }
        x.fn.extend({
            show: function() {
                return de(this, !0)
            },
            hide: function() {
                return de(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                    ue(this) ? x(this).show() : x(this).hide()
                }
                ))
            }
        });
        var pe, he, ve = /^(?:checkbox|radio)$/i, ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, me = /^$|^module$|\/(?:java|ecma)script/i;
        pe = _.createDocumentFragment().appendChild(_.createElement("div")),
        (he = _.createElement("input")).setAttribute("type", "radio"),
        he.setAttribute("checked", "checked"),
        he.setAttribute("name", "t"),
        pe.appendChild(he),
        g.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked,
        pe.innerHTML = "<textarea>x</textarea>",
        g.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue,
        pe.innerHTML = "<option></option>",
        g.option = !!pe.lastChild;
        var ye = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        function _e(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
            void 0 === t || t && I(e, t) ? x.merge([e], n) : n
        }
        function be(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
        }
        ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead,
        ye.th = ye.td,
        g.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
        var Ee = /<|&#?\w+;/;
        function we(e, t, n, r, o) {
            for (var i, s, a, u, c, l, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
                if ((i = e[p]) || 0 === i)
                    if ("object" === w(i))
                        x.merge(d, i.nodeType ? [i] : i);
                    else if (Ee.test(i)) {
                        for (s = s || f.appendChild(t.createElement("div")),
                        a = (ge.exec(i) || ["", ""])[1].toLowerCase(),
                        u = ye[a] || ye._default,
                        s.innerHTML = u[1] + x.htmlPrefilter(i) + u[2],
                        l = u[0]; l--; )
                            s = s.lastChild;
                        x.merge(d, s.childNodes),
                        (s = f.firstChild).textContent = ""
                    } else
                        d.push(t.createTextNode(i));
            for (f.textContent = "",
            p = 0; i = d[p++]; )
                if (r && x.inArray(i, r) > -1)
                    o && o.push(i);
                else if (c = se(i),
                s = _e(f.appendChild(i), "script"),
                c && be(s),
                n)
                    for (l = 0; i = s[l++]; )
                        me.test(i.type || "") && n.push(i);
            return f
        }
        var xe = /^([^.]*)(?:\.(.+)|)/;
        function Se() {
            return !0
        }
        function Te() {
            return !1
        }
        function Oe(e, t) {
            return e === function() {
                try {
                    return _.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }
        function Ne(e, t, n, r, o, i) {
            var s, a;
            if ("object" == typeof t) {
                for (a in "string" != typeof n && (r = r || n,
                n = void 0),
                t)
                    Ne(e, a, n, r, t[a], i);
                return e
            }
            if (null == r && null == o ? (o = n,
            r = n = void 0) : null == o && ("string" == typeof n ? (o = r,
            r = void 0) : (o = r,
            r = n,
            n = void 0)),
            !1 === o)
                o = Te;
            else if (!o)
                return e;
            return 1 === i && (s = o,
            (o = function(e) {
                return x().off(e),
                s.apply(this, arguments)
            }
            ).guid = s.guid || (s.guid = x.guid++)),
            e.each((function() {
                x.event.add(this, t, o, r, n)
            }
            ))
        }
        function Ce(e, t, n) {
            n ? (Y.set(e, t, !1),
            x.event.add(e, t, {
                namespace: !1,
                handler: function(e) {
                    var r, o, i = Y.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (i.length)
                            (x.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (i = a.call(arguments),
                        Y.set(this, t, i),
                        r = n(this, t),
                        this[t](),
                        i !== (o = Y.get(this, t)) || r ? Y.set(this, t, !1) : o = {},
                        i !== o)
                            return e.stopImmediatePropagation(),
                            e.preventDefault(),
                            o && o.value
                    } else
                        i.length && (Y.set(this, t, {
                            value: x.event.trigger(x.extend(i[0], x.Event.prototype), i.slice(1), this)
                        }),
                        e.stopImmediatePropagation())
                }
            })) : void 0 === Y.get(e, t) && x.event.add(e, t, Se)
        }
        x.event = {
            global: {},
            add: function(e, t, n, r, o) {
                var i, s, a, u, c, l, f, d, p, h, v, g = Y.get(e);
                if (K(e))
                    for (n.handler && (n = (i = n).handler,
                    o = i.selector),
                    o && x.find.matchesSelector(ie, o),
                    n.guid || (n.guid = x.guid++),
                    (u = g.events) || (u = g.events = Object.create(null)),
                    (s = g.handle) || (s = g.handle = function(t) {
                        return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0
                    }
                    ),
                    c = (t = (t || "").match(D) || [""]).length; c--; )
                        p = v = (a = xe.exec(t[c]) || [])[1],
                        h = (a[2] || "").split(".").sort(),
                        p && (f = x.event.special[p] || {},
                        p = (o ? f.delegateType : f.bindType) || p,
                        f = x.event.special[p] || {},
                        l = x.extend({
                            type: p,
                            origType: v,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && x.expr.match.needsContext.test(o),
                            namespace: h.join(".")
                        }, i),
                        (d = u[p]) || ((d = u[p] = []).delegateCount = 0,
                        f.setup && !1 !== f.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(p, s)),
                        f.add && (f.add.call(e, l),
                        l.handler.guid || (l.handler.guid = n.guid)),
                        o ? d.splice(d.delegateCount++, 0, l) : d.push(l),
                        x.event.global[p] = !0)
            },
            remove: function(e, t, n, r, o) {
                var i, s, a, u, c, l, f, d, p, h, v, g = Y.hasData(e) && Y.get(e);
                if (g && (u = g.events)) {
                    for (c = (t = (t || "").match(D) || [""]).length; c--; )
                        if (p = v = (a = xe.exec(t[c]) || [])[1],
                        h = (a[2] || "").split(".").sort(),
                        p) {
                            for (f = x.event.special[p] || {},
                            d = u[p = (r ? f.delegateType : f.bindType) || p] || [],
                            a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            s = i = d.length; i--; )
                                l = d[i],
                                !o && v !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (d.splice(i, 1),
                                l.selector && d.delegateCount--,
                                f.remove && f.remove.call(e, l));
                            s && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || x.removeEvent(e, p, g.handle),
                            delete u[p])
                        } else
                            for (p in u)
                                x.event.remove(e, p + t[c], n, r, !0);
                    x.isEmptyObject(u) && Y.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, o, i, s, a = new Array(arguments.length), u = x.event.fix(e), c = (Y.get(this, "events") || Object.create(null))[u.type] || [], l = x.event.special[u.type] || {};
                for (a[0] = u,
                t = 1; t < arguments.length; t++)
                    a[t] = arguments[t];
                if (u.delegateTarget = this,
                !l.preDispatch || !1 !== l.preDispatch.call(this, u)) {
                    for (s = x.event.handlers.call(this, u, c),
                    t = 0; (o = s[t++]) && !u.isPropagationStopped(); )
                        for (u.currentTarget = o.elem,
                        n = 0; (i = o.handlers[n++]) && !u.isImmediatePropagationStopped(); )
                            u.rnamespace && !1 !== i.namespace && !u.rnamespace.test(i.namespace) || (u.handleObj = i,
                            u.data = i.data,
                            void 0 !== (r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a)) && !1 === (u.result = r) && (u.preventDefault(),
                            u.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, u),
                    u.result
                }
            },
            handlers: function(e, t) {
                var n, r, o, i, s, a = [], u = t.delegateCount, c = e.target;
                if (u && c.nodeType && !("click" === e.type && e.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                            for (i = [],
                            s = {},
                            n = 0; n < u; n++)
                                void 0 === s[o = (r = t[n]).selector + " "] && (s[o] = r.needsContext ? x(o, this).index(c) > -1 : x.find(o, this, null, [c]).length),
                                s[o] && i.push(r);
                            i.length && a.push({
                                elem: c,
                                handlers: i
                            })
                        }
                return c = this,
                u < t.length && a.push({
                    elem: c,
                    handlers: t.slice(u)
                }),
                a
            },
            addProp: function(e, t) {
                Object.defineProperty(x.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: m(t) ? function() {
                        if (this.originalEvent)
                            return t(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[e]
                    }
                    ,
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[x.expando] ? e : new x.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return ve.test(t.type) && t.click && I(t, "input") && Ce(t, "click", Se),
                        !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return ve.test(t.type) && t.click && I(t, "input") && Ce(t, "click"),
                        !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return ve.test(t.type) && t.click && I(t, "input") && Y.get(t, "click") || I(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        },
        x.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        x.Event = function(e, t) {
            if (!(this instanceof x.Event))
                return new x.Event(e,t);
            e && e.type ? (this.originalEvent = e,
            this.type = e.type,
            this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Te,
            this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
            this.currentTarget = e.currentTarget,
            this.relatedTarget = e.relatedTarget) : this.type = e,
            t && x.extend(this, t),
            this.timeStamp = e && e.timeStamp || Date.now(),
            this[x.expando] = !0
        }
        ,
        x.Event.prototype = {
            constructor: x.Event,
            isDefaultPrevented: Te,
            isPropagationStopped: Te,
            isImmediatePropagationStopped: Te,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Se,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Se,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Se,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        x.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0
        }, x.event.addProp),
        x.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            x.event.special[e] = {
                setup: function() {
                    return Ce(this, e, Oe),
                    !1
                },
                trigger: function() {
                    return Ce(this, e),
                    !0
                },
                _default: function() {
                    return !0
                },
                delegateType: t
            }
        }
        )),
        x.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function(e, t) {
            x.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this, o = e.relatedTarget, i = e.handleObj;
                    return o && (o === r || x.contains(r, o)) || (e.type = i.origType,
                    n = i.handler.apply(this, arguments),
                    e.type = t),
                    n
                }
            }
        }
        )),
        x.fn.extend({
            on: function(e, t, n, r) {
                return Ne(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return Ne(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                    x(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                    this;
                if ("object" == typeof e) {
                    for (o in e)
                        this.off(o, t, e[o]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = Te),
                this.each((function() {
                    x.event.remove(this, e, n, t)
                }
                ))
            }
        });
        var Ie = /<script|<style|<link/i
          , Re = /checked\s*(?:[^=]|=\s*.checked.)/i
          , ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Ae(e, t) {
            return I(e, "table") && I(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e
        }
        function Pe(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
        }
        function Me(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
            e
        }
        function je(e, t) {
            var n, r, o, i, s, a;
            if (1 === t.nodeType) {
                if (Y.hasData(e) && (a = Y.get(e).events))
                    for (o in Y.remove(t, "handle events"),
                    a)
                        for (n = 0,
                        r = a[o].length; n < r; n++)
                            x.event.add(t, o, a[o][n]);
                J.hasData(e) && (i = J.access(e),
                s = x.extend({}, i),
                J.set(t, s))
            }
        }
        function Le(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ve.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
        function De(e, t, n, r) {
            t = u(t);
            var o, i, s, a, c, l, f = 0, d = e.length, p = d - 1, h = t[0], v = m(h);
            if (v || d > 1 && "string" == typeof h && !g.checkClone && Re.test(h))
                return e.each((function(o) {
                    var i = e.eq(o);
                    v && (t[0] = h.call(this, o, i.html())),
                    De(i, t, n, r)
                }
                ));
            if (d && (i = (o = we(t, e[0].ownerDocument, !1, e, r)).firstChild,
            1 === o.childNodes.length && (o = i),
            i || r)) {
                for (a = (s = x.map(_e(o, "script"), Pe)).length; f < d; f++)
                    c = o,
                    f !== p && (c = x.clone(c, !0, !0),
                    a && x.merge(s, _e(c, "script"))),
                    n.call(e[f], c, f);
                if (a)
                    for (l = s[s.length - 1].ownerDocument,
                    x.map(s, Me),
                    f = 0; f < a; f++)
                        c = s[f],
                        me.test(c.type || "") && !Y.access(c, "globalEval") && x.contains(l, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? x._evalUrl && !c.noModule && x._evalUrl(c.src, {
                            nonce: c.nonce || c.getAttribute("nonce")
                        }, l) : E(c.textContent.replace(ke, ""), c, l))
            }
            return e
        }
        function Fe(e, t, n) {
            for (var r, o = t ? x.filter(t, e) : e, i = 0; null != (r = o[i]); i++)
                n || 1 !== r.nodeType || x.cleanData(_e(r)),
                r.parentNode && (n && se(r) && be(_e(r, "script")),
                r.parentNode.removeChild(r));
            return e
        }
        x.extend({
            htmlPrefilter: function(e) {
                return e
            },
            clone: function(e, t, n) {
                var r, o, i, s, a = e.cloneNode(!0), u = se(e);
                if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                    for (s = _e(a),
                    r = 0,
                    o = (i = _e(e)).length; r < o; r++)
                        Le(i[r], s[r]);
                if (t)
                    if (n)
                        for (i = i || _e(e),
                        s = s || _e(a),
                        r = 0,
                        o = i.length; r < o; r++)
                            je(i[r], s[r]);
                    else
                        je(e, a);
                return (s = _e(a, "script")).length > 0 && be(s, !u && _e(e, "script")),
                a
            },
            cleanData: function(e) {
                for (var t, n, r, o = x.event.special, i = 0; void 0 !== (n = e[i]); i++)
                    if (K(n)) {
                        if (t = n[Y.expando]) {
                            if (t.events)
                                for (r in t.events)
                                    o[r] ? x.event.remove(n, r) : x.removeEvent(n, r, t.handle);
                            n[Y.expando] = void 0
                        }
                        n[J.expando] && (n[J.expando] = void 0)
                    }
            }
        }),
        x.fn.extend({
            detach: function(e) {
                return Fe(this, e, !0)
            },
            remove: function(e) {
                return Fe(this, e)
            },
            text: function(e) {
                return H(this, (function(e) {
                    return void 0 === e ? x.text(this) : this.empty().each((function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    }
                    ))
                }
                ), null, e, arguments.length)
            },
            append: function() {
                return De(this, arguments, (function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
                }
                ))
            },
            prepend: function() {
                return De(this, arguments, (function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Ae(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                }
                ))
            },
            before: function() {
                return De(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                }
                ))
            },
            after: function() {
                return De(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                }
                ))
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (x.cleanData(_e(e, !1)),
                    e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                t = null == t ? e : t,
                this.map((function() {
                    return x.clone(this, e, t)
                }
                ))
            },
            html: function(e) {
                return H(this, (function(e) {
                    var t = this[0] || {}
                      , n = 0
                      , r = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !Ie.test(e) && !ye[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = x.htmlPrefilter(e);
                        try {
                            for (; n < r; n++)
                                1 === (t = this[n] || {}).nodeType && (x.cleanData(_e(t, !1)),
                                t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }
                ), null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return De(this, arguments, (function(t) {
                    var n = this.parentNode;
                    x.inArray(this, e) < 0 && (x.cleanData(_e(this)),
                    n && n.replaceChild(t, this))
                }
                ), e)
            }
        }),
        x.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function(e, t) {
            x.fn[e] = function(e) {
                for (var n, r = [], o = x(e), i = o.length - 1, s = 0; s <= i; s++)
                    n = s === i ? this : this.clone(!0),
                    x(o[s])[t](n),
                    c.apply(r, n.get());
                return this.pushStack(r)
            }
        }
        ));
        var Ue = new RegExp("^(" + ne + ")(?!px)[a-z%]+$","i")
          , qe = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n),
            t.getComputedStyle(e)
        }
          , $e = function(e, t, n) {
            var r, o, i = {};
            for (o in t)
                i[o] = e.style[o],
                e.style[o] = t[o];
            for (o in r = n.call(e),
            t)
                e.style[o] = i[o];
            return r
        }
          , Be = new RegExp(oe.join("|"),"i");
        function Ve(e, t, n) {
            var r, o, i, s, a = e.style;
            return (n = n || qe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || se(e) || (s = x.style(e, t)),
            !g.pixelBoxStyles() && Ue.test(s) && Be.test(t) && (r = a.width,
            o = a.minWidth,
            i = a.maxWidth,
            a.minWidth = a.maxWidth = a.width = s,
            s = n.width,
            a.width = r,
            a.minWidth = o,
            a.maxWidth = i)),
            void 0 !== s ? s + "" : s
        }
        function He(e, t) {
            return {
                get: function() {
                    if (!e())
                        return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }
        !function() {
            function e() {
                if (l) {
                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    ie.appendChild(c).appendChild(l);
                    var e = n.getComputedStyle(l);
                    r = "1%" !== e.top,
                    u = 12 === t(e.marginLeft),
                    l.style.right = "60%",
                    s = 36 === t(e.right),
                    o = 36 === t(e.width),
                    l.style.position = "absolute",
                    i = 12 === t(l.offsetWidth / 3),
                    ie.removeChild(c),
                    l = null
                }
            }
            function t(e) {
                return Math.round(parseFloat(e))
            }
            var r, o, i, s, a, u, c = _.createElement("div"), l = _.createElement("div");
            l.style && (l.style.backgroundClip = "content-box",
            l.cloneNode(!0).style.backgroundClip = "",
            g.clearCloneStyle = "content-box" === l.style.backgroundClip,
            x.extend(g, {
                boxSizingReliable: function() {
                    return e(),
                    o
                },
                pixelBoxStyles: function() {
                    return e(),
                    s
                },
                pixelPosition: function() {
                    return e(),
                    r
                },
                reliableMarginLeft: function() {
                    return e(),
                    u
                },
                scrollboxSize: function() {
                    return e(),
                    i
                },
                reliableTrDimensions: function() {
                    var e, t, r, o;
                    return null == a && (e = _.createElement("table"),
                    t = _.createElement("tr"),
                    r = _.createElement("div"),
                    e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                    t.style.cssText = "border:1px solid",
                    t.style.height = "1px",
                    r.style.height = "9px",
                    r.style.display = "block",
                    ie.appendChild(e).appendChild(t).appendChild(r),
                    o = n.getComputedStyle(t),
                    a = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === t.offsetHeight,
                    ie.removeChild(e)),
                    a
                }
            }))
        }();
        var We = ["Webkit", "Moz", "ms"]
          , Ge = _.createElement("div").style
          , ze = {};
        function Xe(e) {
            var t = x.cssProps[e] || ze[e];
            return t || (e in Ge ? e : ze[e] = function(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = We.length; n--; )
                    if ((e = We[n] + t)in Ge)
                        return e
            }(e) || e)
        }
        var Ke = /^(none|table(?!-c[ea]).+)/
          , Qe = /^--/
          , Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , Je = {
            letterSpacing: "0",
            fontWeight: "400"
        };
        function Ze(e, t, n) {
            var r = re.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }
        function et(e, t, n, r, o, i) {
            var s = "width" === t ? 1 : 0
              , a = 0
              , u = 0;
            if (n === (r ? "border" : "content"))
                return 0;
            for (; s < 4; s += 2)
                "margin" === n && (u += x.css(e, n + oe[s], !0, o)),
                r ? ("content" === n && (u -= x.css(e, "padding" + oe[s], !0, o)),
                "margin" !== n && (u -= x.css(e, "border" + oe[s] + "Width", !0, o))) : (u += x.css(e, "padding" + oe[s], !0, o),
                "padding" !== n ? u += x.css(e, "border" + oe[s] + "Width", !0, o) : a += x.css(e, "border" + oe[s] + "Width", !0, o));
            return !r && i >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - a - .5)) || 0),
            u
        }
        function tt(e, t, n) {
            var r = qe(e)
              , o = (!g.boxSizingReliable() || n) && "border-box" === x.css(e, "boxSizing", !1, r)
              , i = o
              , s = Ve(e, t, r)
              , a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Ue.test(s)) {
                if (!n)
                    return s;
                s = "auto"
            }
            return (!g.boxSizingReliable() && o || !g.reliableTrDimensions() && I(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === x.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === x.css(e, "boxSizing", !1, r),
            (i = a in e) && (s = e[a])),
            (s = parseFloat(s) || 0) + et(e, t, n || (o ? "border" : "content"), i, r, s) + "px"
        }
        function nt(e, t, n, r, o) {
            return new nt.prototype.init(e,t,n,r,o)
        }
        x.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Ve(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, i, s, a = X(t), u = Qe.test(t), c = e.style;
                    if (u || (t = Xe(a)),
                    s = x.cssHooks[t] || x.cssHooks[a],
                    void 0 === n)
                        return s && "get"in s && void 0 !== (o = s.get(e, !1, r)) ? o : c[t];
                    "string" === (i = typeof n) && (o = re.exec(n)) && o[1] && (n = ce(e, t, o),
                    i = "number"),
                    null != n && n == n && ("number" !== i || u || (n += o && o[3] || (x.cssNumber[a] ? "" : "px")),
                    g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                    s && "set"in s && void 0 === (n = s.set(e, n, r)) || (u ? c.setProperty(t, n) : c[t] = n))
                }
            },
            css: function(e, t, n, r) {
                var o, i, s, a = X(t);
                return Qe.test(t) || (t = Xe(a)),
                (s = x.cssHooks[t] || x.cssHooks[a]) && "get"in s && (o = s.get(e, !0, n)),
                void 0 === o && (o = Ve(e, t, r)),
                "normal" === o && t in Je && (o = Je[t]),
                "" === n || n ? (i = parseFloat(o),
                !0 === n || isFinite(i) ? i || 0 : o) : o
            }
        }),
        x.each(["height", "width"], (function(e, t) {
            x.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n)
                        return !Ke.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, r) : $e(e, Ye, (function() {
                            return tt(e, t, r)
                        }
                        ))
                },
                set: function(e, n, r) {
                    var o, i = qe(e), s = !g.scrollboxSize() && "absolute" === i.position, a = (s || r) && "border-box" === x.css(e, "boxSizing", !1, i), u = r ? et(e, t, r, a, i) : 0;
                    return a && s && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - et(e, t, "border", !1, i) - .5)),
                    u && (o = re.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n,
                    n = x.css(e, t)),
                    Ze(0, n, u)
                }
            }
        }
        )),
        x.cssHooks.marginLeft = He(g.reliableMarginLeft, (function(e, t) {
            if (t)
                return (parseFloat(Ve(e, "marginLeft")) || e.getBoundingClientRect().left - $e(e, {
                    marginLeft: 0
                }, (function() {
                    return e.getBoundingClientRect().left
                }
                ))) + "px"
        }
        )),
        x.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function(e, t) {
            x.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                        o[e + oe[r] + t] = i[r] || i[r - 2] || i[0];
                    return o
                }
            },
            "margin" !== e && (x.cssHooks[e + t].set = Ze)
        }
        )),
        x.fn.extend({
            css: function(e, t) {
                return H(this, (function(e, t, n) {
                    var r, o, i = {}, s = 0;
                    if (Array.isArray(t)) {
                        for (r = qe(e),
                        o = t.length; s < o; s++)
                            i[t[s]] = x.css(e, t[s], !1, r);
                        return i
                    }
                    return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
                }
                ), e, t, arguments.length > 1)
            }
        }),
        x.Tween = nt,
        nt.prototype = {
            constructor: nt,
            init: function(e, t, n, r, o, i) {
                this.elem = e,
                this.prop = n,
                this.easing = o || x.easing._default,
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = r,
                this.unit = i || (x.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = nt.propHooks[this.prop];
                return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = nt.propHooks[this.prop];
                return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : nt.propHooks._default.set(this),
                this
            }
        },
        nt.prototype.init.prototype = nt.prototype,
        nt.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !x.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        nt.propHooks.scrollTop = nt.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        x.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        x.fx = nt.prototype.init,
        x.fx.step = {};
        var rt, ot, it = /^(?:toggle|show|hide)$/, st = /queueHooks$/;
        function at() {
            ot && (!1 === _.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(at) : n.setTimeout(at, x.fx.interval),
            x.fx.tick())
        }
        function ut() {
            return n.setTimeout((function() {
                rt = void 0
            }
            )),
            rt = Date.now()
        }
        function ct(e, t) {
            var n, r = 0, o = {
                height: e
            };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
                o["margin" + (n = oe[r])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e),
            o
        }
        function lt(e, t, n) {
            for (var r, o = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), i = 0, s = o.length; i < s; i++)
                if (r = o[i].call(n, t, e))
                    return r
        }
        function ft(e, t, n) {
            var r, o, i = 0, s = ft.prefilters.length, a = x.Deferred().always((function() {
                delete u.elem
            }
            )), u = function() {
                if (o)
                    return !1;
                for (var t = rt || ut(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), i = 0, s = c.tweens.length; i < s; i++)
                    c.tweens[i].run(r);
                return a.notifyWith(e, [c, r, n]),
                r < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]),
                a.resolveWith(e, [c]),
                !1)
            }, c = a.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, {
                    specialEasing: {},
                    easing: x.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: rt || ut(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = x.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r),
                    r
                },
                stop: function(t) {
                    var n = 0
                      , r = t ? c.tweens.length : 0;
                    if (o)
                        return this;
                    for (o = !0; n < r; n++)
                        c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]),
                    a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]),
                    this
                }
            }), l = c.props;
            for (!function(e, t) {
                var n, r, o, i, s;
                for (n in e)
                    if (o = t[r = X(n)],
                    i = e[n],
                    Array.isArray(i) && (o = i[1],
                    i = e[n] = i[0]),
                    n !== r && (e[r] = i,
                    delete e[n]),
                    (s = x.cssHooks[r]) && "expand"in s)
                        for (n in i = s.expand(i),
                        delete e[r],
                        i)
                            n in e || (e[n] = i[n],
                            t[n] = o);
                    else
                        t[r] = o
            }(l, c.opts.specialEasing); i < s; i++)
                if (r = ft.prefilters[i].call(c, e, l, c.opts))
                    return m(r.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
                    r;
            return x.map(l, lt, c),
            m(c.opts.start) && c.opts.start.call(e, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            x.fx.timer(x.extend(u, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })),
            c
        }
        x.Animation = x.extend(ft, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return ce(n.elem, e, re.exec(t), n),
                    n
                }
                ]
            },
            tweener: function(e, t) {
                m(e) ? (t = e,
                e = ["*"]) : e = e.match(D);
                for (var n, r = 0, o = e.length; r < o; r++)
                    n = e[r],
                    ft.tweeners[n] = ft.tweeners[n] || [],
                    ft.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var r, o, i, s, a, u, c, l, f = "width"in t || "height"in t, d = this, p = {}, h = e.style, v = e.nodeType && ue(e), g = Y.get(e, "fxshow");
                for (r in n.queue || (null == (s = x._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
                a = s.empty.fire,
                s.empty.fire = function() {
                    s.unqueued || a()
                }
                ),
                s.unqueued++,
                d.always((function() {
                    d.always((function() {
                        s.unqueued--,
                        x.queue(e, "fx").length || s.empty.fire()
                    }
                    ))
                }
                ))),
                t)
                    if (o = t[r],
                    it.test(o)) {
                        if (delete t[r],
                        i = i || "toggle" === o,
                        o === (v ? "hide" : "show")) {
                            if ("show" !== o || !g || void 0 === g[r])
                                continue;
                            v = !0
                        }
                        p[r] = g && g[r] || x.style(e, r)
                    }
                if ((u = !x.isEmptyObject(t)) || !x.isEmptyObject(p))
                    for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                    null == (c = g && g.display) && (c = Y.get(e, "display")),
                    "none" === (l = x.css(e, "display")) && (c ? l = c : (de([e], !0),
                    c = e.style.display || c,
                    l = x.css(e, "display"),
                    de([e]))),
                    ("inline" === l || "inline-block" === l && null != c) && "none" === x.css(e, "float") && (u || (d.done((function() {
                        h.display = c
                    }
                    )),
                    null == c && (l = h.display,
                    c = "none" === l ? "" : l)),
                    h.display = "inline-block")),
                    n.overflow && (h.overflow = "hidden",
                    d.always((function() {
                        h.overflow = n.overflow[0],
                        h.overflowX = n.overflow[1],
                        h.overflowY = n.overflow[2]
                    }
                    ))),
                    u = !1,
                    p)
                        u || (g ? "hidden"in g && (v = g.hidden) : g = Y.access(e, "fxshow", {
                            display: c
                        }),
                        i && (g.hidden = !v),
                        v && de([e], !0),
                        d.done((function() {
                            for (r in v || de([e]),
                            Y.remove(e, "fxshow"),
                            p)
                                x.style(e, r, p[r])
                        }
                        ))),
                        u = lt(v ? g[r] : 0, r, d),
                        r in g || (g[r] = u.start,
                        v && (u.end = u.start,
                        u.start = 0))
            }
            ],
            prefilter: function(e, t) {
                t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
            }
        }),
        x.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? x.extend({}, e) : {
                complete: n || !n && t || m(e) && e,
                duration: e,
                easing: n && t || t && !m(t) && t
            };
            return x.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in x.fx.speeds ? r.duration = x.fx.speeds[r.duration] : r.duration = x.fx.speeds._default),
            null != r.queue && !0 !== r.queue || (r.queue = "fx"),
            r.old = r.complete,
            r.complete = function() {
                m(r.old) && r.old.call(this),
                r.queue && x.dequeue(this, r.queue)
            }
            ,
            r
        }
        ,
        x.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ue).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var o = x.isEmptyObject(e)
                  , i = x.speed(t, n, r)
                  , s = function() {
                    var t = ft(this, x.extend({}, e), i);
                    (o || Y.get(this, "finish")) && t.stop(!0)
                };
                return s.finish = s,
                o || !1 === i.queue ? this.each(s) : this.queue(i.queue, s)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(n)
                };
                return "string" != typeof e && (n = t,
                t = e,
                e = void 0),
                t && this.queue(e || "fx", []),
                this.each((function() {
                    var t = !0
                      , o = null != e && e + "queueHooks"
                      , i = x.timers
                      , s = Y.get(this);
                    if (o)
                        s[o] && s[o].stop && r(s[o]);
                    else
                        for (o in s)
                            s[o] && s[o].stop && st.test(o) && r(s[o]);
                    for (o = i.length; o--; )
                        i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n),
                        t = !1,
                        i.splice(o, 1));
                    !t && n || x.dequeue(this, e)
                }
                ))
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"),
                this.each((function() {
                    var t, n = Y.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = x.timers, s = r ? r.length : 0;
                    for (n.finish = !0,
                    x.queue(this, e, []),
                    o && o.stop && o.stop.call(this, !0),
                    t = i.length; t--; )
                        i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0),
                        i.splice(t, 1));
                    for (t = 0; t < s; t++)
                        r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                }
                ))
            }
        }),
        x.each(["toggle", "show", "hide"], (function(e, t) {
            var n = x.fn[t];
            x.fn[t] = function(e, r, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, r, o)
            }
        }
        )),
        x.each({
            slideDown: ct("show"),
            slideUp: ct("hide"),
            slideToggle: ct("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function(e, t) {
            x.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }
        )),
        x.timers = [],
        x.fx.tick = function() {
            var e, t = 0, n = x.timers;
            for (rt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || x.fx.stop(),
            rt = void 0
        }
        ,
        x.fx.timer = function(e) {
            x.timers.push(e),
            x.fx.start()
        }
        ,
        x.fx.interval = 13,
        x.fx.start = function() {
            ot || (ot = !0,
            at())
        }
        ,
        x.fx.stop = function() {
            ot = null
        }
        ,
        x.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        x.fn.delay = function(e, t) {
            return e = x.fx && x.fx.speeds[e] || e,
            t = t || "fx",
            this.queue(t, (function(t, r) {
                var o = n.setTimeout(t, e);
                r.stop = function() {
                    n.clearTimeout(o)
                }
            }
            ))
        }
        ,
        function() {
            var e = _.createElement("input")
              , t = _.createElement("select").appendChild(_.createElement("option"));
            e.type = "checkbox",
            g.checkOn = "" !== e.value,
            g.optSelected = t.selected,
            (e = _.createElement("input")).value = "t",
            e.type = "radio",
            g.radioValue = "t" === e.value
        }();
        var dt, pt = x.expr.attrHandle;
        x.fn.extend({
            attr: function(e, t) {
                return H(this, x.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each((function() {
                    x.removeAttr(this, e)
                }
                ))
            }
        }),
        x.extend({
            attr: function(e, t, n) {
                var r, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                    return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === i && x.isXMLDoc(e) || (o = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? dt : void 0)),
                    void 0 !== n ? null === n ? void x.removeAttr(e, t) : o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                    n) : o && "get"in o && null !== (r = o.get(e, t)) ? r : null == (r = x.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!g.radioValue && "radio" === t && I(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0, o = t && t.match(D);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++]; )
                        e.removeAttribute(n)
            }
        }),
        dt = {
            set: function(e, t, n) {
                return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n),
                n
            }
        },
        x.each(x.expr.match.bool.source.match(/\w+/g), (function(e, t) {
            var n = pt[t] || x.find.attr;
            pt[t] = function(e, t, r) {
                var o, i, s = t.toLowerCase();
                return r || (i = pt[s],
                pt[s] = o,
                o = null != n(e, t, r) ? s : null,
                pt[s] = i),
                o
            }
        }
        ));
        var ht = /^(?:input|select|textarea|button)$/i
          , vt = /^(?:a|area)$/i;
        function gt(e) {
            return (e.match(D) || []).join(" ")
        }
        function mt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        function yt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(D) || []
        }
        x.fn.extend({
            prop: function(e, t) {
                return H(this, x.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each((function() {
                    delete this[x.propFix[e] || e]
                }
                ))
            }
        }),
        x.extend({
            prop: function(e, t, n) {
                var r, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                    return 1 === i && x.isXMLDoc(e) || (t = x.propFix[t] || t,
                    o = x.propHooks[t]),
                    void 0 !== n ? o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get"in o && null !== (r = o.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = x.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ht.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        g.optSelected || (x.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex,
                t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
            x.propFix[this.toLowerCase()] = this
        }
        )),
        x.fn.extend({
            addClass: function(e) {
                var t, n, r, o, i, s, a, u = 0;
                if (m(e))
                    return this.each((function(t) {
                        x(this).addClass(e.call(this, t, mt(this)))
                    }
                    ));
                if ((t = yt(e)).length)
                    for (; n = this[u++]; )
                        if (o = mt(n),
                        r = 1 === n.nodeType && " " + gt(o) + " ") {
                            for (s = 0; i = t[s++]; )
                                r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            o !== (a = gt(r)) && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, r, o, i, s, a, u = 0;
                if (m(e))
                    return this.each((function(t) {
                        x(this).removeClass(e.call(this, t, mt(this)))
                    }
                    ));
                if (!arguments.length)
                    return this.attr("class", "");
                if ((t = yt(e)).length)
                    for (; n = this[u++]; )
                        if (o = mt(n),
                        r = 1 === n.nodeType && " " + gt(o) + " ") {
                            for (s = 0; i = t[s++]; )
                                for (; r.indexOf(" " + i + " ") > -1; )
                                    r = r.replace(" " + i + " ", " ");
                            o !== (a = gt(r)) && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e
                  , r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each((function(n) {
                    x(this).toggleClass(e.call(this, n, mt(this), t), t)
                }
                )) : this.each((function() {
                    var t, o, i, s;
                    if (r)
                        for (o = 0,
                        i = x(this),
                        s = yt(e); t = s[o++]; )
                            i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else
                        void 0 !== e && "boolean" !== n || ((t = mt(this)) && Y.set(this, "__className__", t),
                        this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""))
                }
                ))
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++]; )
                    if (1 === n.nodeType && (" " + gt(mt(n)) + " ").indexOf(t) > -1)
                        return !0;
                return !1
            }
        });
        var _t = /\r/g;
        x.fn.extend({
            val: function(e) {
                var t, n, r, o = this[0];
                return arguments.length ? (r = m(e),
                this.each((function(n) {
                    var o;
                    1 === this.nodeType && (null == (o = r ? e.call(this, n, x(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = x.map(o, (function(e) {
                        return null == e ? "" : e + ""
                    }
                    ))),
                    (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                }
                ))) : o ? (t = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(_t, "") : null == n ? "" : n : void 0
            }
        }),
        x.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = x.find.attr(e, "value");
                        return null != t ? t : gt(x.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, o = e.options, i = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], u = s ? i + 1 : o.length;
                        for (r = i < 0 ? u : s ? i : 0; r < u; r++)
                            if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !I(n.parentNode, "optgroup"))) {
                                if (t = x(n).val(),
                                s)
                                    return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, r, o = e.options, i = x.makeArray(t), s = o.length; s--; )
                            ((r = o[s]).selected = x.inArray(x.valHooks.option.get(r), i) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1),
                        i
                    }
                }
            }
        }),
        x.each(["radio", "checkbox"], (function() {
            x.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t))
                        return e.checked = x.inArray(x(e).val(), t) > -1
                }
            },
            g.checkOn || (x.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
            )
        }
        )),
        g.focusin = "onfocusin"in n;
        var bt = /^(?:focusinfocus|focusoutblur)$/
          , Et = function(e) {
            e.stopPropagation()
        };
        x.extend(x.event, {
            trigger: function(e, t, r, o) {
                var i, s, a, u, c, l, f, d, h = [r || _], v = p.call(e, "type") ? e.type : e, g = p.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = d = a = r = r || _,
                3 !== r.nodeType && 8 !== r.nodeType && !bt.test(v + x.event.triggered) && (v.indexOf(".") > -1 && (g = v.split("."),
                v = g.shift(),
                g.sort()),
                c = v.indexOf(":") < 0 && "on" + v,
                (e = e[x.expando] ? e : new x.Event(v,"object" == typeof e && e)).isTrigger = o ? 2 : 3,
                e.namespace = g.join("."),
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                e.result = void 0,
                e.target || (e.target = r),
                t = null == t ? [e] : x.makeArray(t, [e]),
                f = x.event.special[v] || {},
                o || !f.trigger || !1 !== f.trigger.apply(r, t))) {
                    if (!o && !f.noBubble && !y(r)) {
                        for (u = f.delegateType || v,
                        bt.test(u + v) || (s = s.parentNode); s; s = s.parentNode)
                            h.push(s),
                            a = s;
                        a === (r.ownerDocument || _) && h.push(a.defaultView || a.parentWindow || n)
                    }
                    for (i = 0; (s = h[i++]) && !e.isPropagationStopped(); )
                        d = s,
                        e.type = i > 1 ? u : f.bindType || v,
                        (l = (Y.get(s, "events") || Object.create(null))[e.type] && Y.get(s, "handle")) && l.apply(s, t),
                        (l = c && s[c]) && l.apply && K(s) && (e.result = l.apply(s, t),
                        !1 === e.result && e.preventDefault());
                    return e.type = v,
                    o || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), t) || !K(r) || c && m(r[v]) && !y(r) && ((a = r[c]) && (r[c] = null),
                    x.event.triggered = v,
                    e.isPropagationStopped() && d.addEventListener(v, Et),
                    r[v](),
                    e.isPropagationStopped() && d.removeEventListener(v, Et),
                    x.event.triggered = void 0,
                    a && (r[c] = a)),
                    e.result
                }
            },
            simulate: function(e, t, n) {
                var r = x.extend(new x.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                x.event.trigger(r, null, t)
            }
        }),
        x.fn.extend({
            trigger: function(e, t) {
                return this.each((function() {
                    x.event.trigger(e, t, this)
                }
                ))
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n)
                    return x.event.trigger(e, t, n, !0)
            }
        }),
        g.focusin || x.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            var n = function(e) {
                x.event.simulate(t, e.target, x.event.fix(e))
            };
            x.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this.document || this
                      , o = Y.access(r, t);
                    o || r.addEventListener(e, n, !0),
                    Y.access(r, t, (o || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this.document || this
                      , o = Y.access(r, t) - 1;
                    o ? Y.access(r, t, o) : (r.removeEventListener(e, n, !0),
                    Y.remove(r, t))
                }
            }
        }
        ));
        var wt = n.location
          , xt = {
            guid: Date.now()
        }
          , St = /\?/;
        x.parseXML = function(e) {
            var t, r;
            if (!e || "string" != typeof e)
                return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {}
            return r = t && t.getElementsByTagName("parsererror")[0],
            t && !r || x.error("Invalid XML: " + (r ? x.map(r.childNodes, (function(e) {
                return e.textContent
            }
            )).join("\n") : e)),
            t
        }
        ;
        var Tt = /\[\]$/
          , Ot = /\r?\n/g
          , Nt = /^(?:submit|button|image|reset|file)$/i
          , Ct = /^(?:input|select|textarea|keygen)/i;
        function It(e, t, n, r) {
            var o;
            if (Array.isArray(t))
                x.each(t, (function(t, o) {
                    n || Tt.test(e) ? r(e, o) : It(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
                }
                ));
            else if (n || "object" !== w(t))
                r(e, t);
            else
                for (o in t)
                    It(e + "[" + o + "]", t[o], n, r)
        }
        x.param = function(e, t) {
            var n, r = [], o = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (null == e)
                return "";
            if (Array.isArray(e) || e.jquery && !x.isPlainObject(e))
                x.each(e, (function() {
                    o(this.name, this.value)
                }
                ));
            else
                for (n in e)
                    It(n, e[n], t, o);
            return r.join("&")
        }
        ,
        x.fn.extend({
            serialize: function() {
                return x.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map((function() {
                    var e = x.prop(this, "elements");
                    return e ? x.makeArray(e) : this
                }
                )).filter((function() {
                    var e = this.type;
                    return this.name && !x(this).is(":disabled") && Ct.test(this.nodeName) && !Nt.test(e) && (this.checked || !ve.test(e))
                }
                )).map((function(e, t) {
                    var n = x(this).val();
                    return null == n ? null : Array.isArray(n) ? x.map(n, (function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Ot, "\r\n")
                        }
                    }
                    )) : {
                        name: t.name,
                        value: n.replace(Ot, "\r\n")
                    }
                }
                )).get()
            }
        });
        var Rt = /%20/g
          , kt = /#.*$/
          , At = /([?&])_=[^&]*/
          , Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , Mt = /^(?:GET|HEAD)$/
          , jt = /^\/\//
          , Lt = {}
          , Dt = {}
          , Ft = "*/".concat("*")
          , Ut = _.createElement("a");
        function qt(e) {
            return function(t, n) {
                "string" != typeof t && (n = t,
                t = "*");
                var r, o = 0, i = t.toLowerCase().match(D) || [];
                if (m(n))
                    for (; r = i[o++]; )
                        "+" === r[0] ? (r = r.slice(1) || "*",
                        (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }
        function $t(e, t, n, r) {
            var o = {}
              , i = e === Dt;
            function s(a) {
                var u;
                return o[a] = !0,
                x.each(e[a] || [], (function(e, a) {
                    var c = a(t, n, r);
                    return "string" != typeof c || i || o[c] ? i ? !(u = c) : void 0 : (t.dataTypes.unshift(c),
                    s(c),
                    !1)
                }
                )),
                u
            }
            return s(t.dataTypes[0]) || !o["*"] && s("*")
        }
        function Bt(e, t) {
            var n, r, o = x.ajaxSettings.flatOptions || {};
            for (n in t)
                void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && x.extend(!0, e, r),
            e
        }
        Ut.href = wt.href,
        x.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: wt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ft,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": x.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Bt(Bt(e, x.ajaxSettings), t) : Bt(x.ajaxSettings, e)
            },
            ajaxPrefilter: qt(Lt),
            ajaxTransport: qt(Dt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e,
                e = void 0),
                t = t || {};
                var r, o, i, s, a, u, c, l, f, d, p = x.ajaxSetup({}, t), h = p.context || p, v = p.context && (h.nodeType || h.jquery) ? x(h) : x.event, g = x.Deferred(), m = x.Callbacks("once memory"), y = p.statusCode || {}, b = {}, E = {}, w = "canceled", S = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = Pt.exec(i); )
                                    s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = s[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return c ? i : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e,
                        b[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (p.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c)
                                S.always(e[S.status]);
                            else
                                for (t in e)
                                    y[t] = [y[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return r && r.abort(t),
                        T(0, t),
                        this
                    }
                };
                if (g.promise(S),
                p.url = ((e || p.url || wt.href) + "").replace(jt, wt.protocol + "//"),
                p.type = t.method || t.type || p.method || p.type,
                p.dataTypes = (p.dataType || "*").toLowerCase().match(D) || [""],
                null == p.crossDomain) {
                    u = _.createElement("a");
                    try {
                        u.href = p.url,
                        u.href = u.href,
                        p.crossDomain = Ut.protocol + "//" + Ut.host != u.protocol + "//" + u.host
                    } catch (e) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)),
                $t(Lt, p, t, S),
                c)
                    return S;
                for (f in (l = x.event && p.global) && 0 == x.active++ && x.event.trigger("ajaxStart"),
                p.type = p.type.toUpperCase(),
                p.hasContent = !Mt.test(p.type),
                o = p.url.replace(kt, ""),
                p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Rt, "+")) : (d = p.url.slice(o.length),
                p.data && (p.processData || "string" == typeof p.data) && (o += (St.test(o) ? "&" : "?") + p.data,
                delete p.data),
                !1 === p.cache && (o = o.replace(At, "$1"),
                d = (St.test(o) ? "&" : "?") + "_=" + xt.guid++ + d),
                p.url = o + d),
                p.ifModified && (x.lastModified[o] && S.setRequestHeader("If-Modified-Since", x.lastModified[o]),
                x.etag[o] && S.setRequestHeader("If-None-Match", x.etag[o])),
                (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && S.setRequestHeader("Content-Type", p.contentType),
                S.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : p.accepts["*"]),
                p.headers)
                    S.setRequestHeader(f, p.headers[f]);
                if (p.beforeSend && (!1 === p.beforeSend.call(h, S, p) || c))
                    return S.abort();
                if (w = "abort",
                m.add(p.complete),
                S.done(p.success),
                S.fail(p.error),
                r = $t(Dt, p, t, S)) {
                    if (S.readyState = 1,
                    l && v.trigger("ajaxSend", [S, p]),
                    c)
                        return S;
                    p.async && p.timeout > 0 && (a = n.setTimeout((function() {
                        S.abort("timeout")
                    }
                    ), p.timeout));
                    try {
                        c = !1,
                        r.send(b, T)
                    } catch (e) {
                        if (c)
                            throw e;
                        T(-1, e)
                    }
                } else
                    T(-1, "No Transport");
                function T(e, t, s, u) {
                    var f, d, _, b, E, w = t;
                    c || (c = !0,
                    a && n.clearTimeout(a),
                    r = void 0,
                    i = u || "",
                    S.readyState = e > 0 ? 4 : 0,
                    f = e >= 200 && e < 300 || 304 === e,
                    s && (b = function(e, t, n) {
                        for (var r, o, i, s, a = e.contents, u = e.dataTypes; "*" === u[0]; )
                            u.shift(),
                            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (o in a)
                                if (a[o] && a[o].test(r)) {
                                    u.unshift(o);
                                    break
                                }
                        if (u[0]in n)
                            i = u[0];
                        else {
                            for (o in n) {
                                if (!u[0] || e.converters[o + " " + u[0]]) {
                                    i = o;
                                    break
                                }
                                s || (s = o)
                            }
                            i = i || s
                        }
                        if (i)
                            return i !== u[0] && u.unshift(i),
                            n[i]
                    }(p, S, s)),
                    !f && x.inArray("script", p.dataTypes) > -1 && x.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function() {}
                    ),
                    b = function(e, t, n, r) {
                        var o, i, s, a, u, c = {}, l = e.dataTypes.slice();
                        if (l[1])
                            for (s in e.converters)
                                c[s.toLowerCase()] = e.converters[s];
                        for (i = l.shift(); i; )
                            if (e.responseFields[i] && (n[e.responseFields[i]] = t),
                            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                            u = i,
                            i = l.shift())
                                if ("*" === i)
                                    i = u;
                                else if ("*" !== u && u !== i) {
                                    if (!(s = c[u + " " + i] || c["* " + i]))
                                        for (o in c)
                                            if ((a = o.split(" "))[1] === i && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                                                !0 === s ? s = c[o] : !0 !== c[o] && (i = a[0],
                                                l.unshift(a[1]));
                                                break
                                            }
                                    if (!0 !== s)
                                        if (s && e.throws)
                                            t = s(t);
                                        else
                                            try {
                                                t = s(t)
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: s ? e : "No conversion from " + u + " to " + i
                                                }
                                            }
                                }
                        return {
                            state: "success",
                            data: t
                        }
                    }(p, b, S, f),
                    f ? (p.ifModified && ((E = S.getResponseHeader("Last-Modified")) && (x.lastModified[o] = E),
                    (E = S.getResponseHeader("etag")) && (x.etag[o] = E)),
                    204 === e || "HEAD" === p.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = b.state,
                    d = b.data,
                    f = !(_ = b.error))) : (_ = w,
                    !e && w || (w = "error",
                    e < 0 && (e = 0))),
                    S.status = e,
                    S.statusText = (t || w) + "",
                    f ? g.resolveWith(h, [d, w, S]) : g.rejectWith(h, [S, w, _]),
                    S.statusCode(y),
                    y = void 0,
                    l && v.trigger(f ? "ajaxSuccess" : "ajaxError", [S, p, f ? d : _]),
                    m.fireWith(h, [S, w]),
                    l && (v.trigger("ajaxComplete", [S, p]),
                    --x.active || x.event.trigger("ajaxStop")))
                }
                return S
            },
            getJSON: function(e, t, n) {
                return x.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return x.get(e, void 0, t, "script")
            }
        }),
        x.each(["get", "post"], (function(e, t) {
            x[t] = function(e, n, r, o) {
                return m(n) && (o = o || r,
                r = n,
                n = void 0),
                x.ajax(x.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: r
                }, x.isPlainObject(e) && e))
            }
        }
        )),
        x.ajaxPrefilter((function(e) {
            var t;
            for (t in e.headers)
                "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
        }
        )),
        x._evalUrl = function(e, t, n) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    x.globalEval(e, t, n)
                }
            })
        }
        ,
        x.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (m(e) && (e = e.call(this[0])),
                t = x(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && t.insertBefore(this[0]),
                t.map((function() {
                    for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                    return e
                }
                )).append(this)),
                this
            },
            wrapInner: function(e) {
                return m(e) ? this.each((function(t) {
                    x(this).wrapInner(e.call(this, t))
                }
                )) : this.each((function() {
                    var t = x(this)
                      , n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                }
                ))
            },
            wrap: function(e) {
                var t = m(e);
                return this.each((function(n) {
                    x(this).wrapAll(t ? e.call(this, n) : e)
                }
                ))
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each((function() {
                    x(this).replaceWith(this.childNodes)
                }
                )),
                this
            }
        }),
        x.expr.pseudos.hidden = function(e) {
            return !x.expr.pseudos.visible(e)
        }
        ,
        x.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        x.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        }
        ;
        var Vt = {
            0: 200,
            1223: 204
        }
          , Ht = x.ajaxSettings.xhr();
        g.cors = !!Ht && "withCredentials"in Ht,
        g.ajax = Ht = !!Ht,
        x.ajaxTransport((function(e) {
            var t, r;
            if (g.cors || Ht && !e.crossDomain)
                return {
                    send: function(o, i) {
                        var s, a = e.xhr();
                        if (a.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                            for (s in e.xhrFields)
                                a[s] = e.xhrFields[s];
                        for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                        e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
                        o)
                            a.setRequestHeader(s, o[s]);
                        t = function(e) {
                            return function() {
                                t && (t = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                                "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? i(0, "error") : i(a.status, a.statusText) : i(Vt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                    binary: a.response
                                } : {
                                    text: a.responseText
                                }, a.getAllResponseHeaders()))
                            }
                        }
                        ,
                        a.onload = t(),
                        r = a.onerror = a.ontimeout = t("error"),
                        void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                            4 === a.readyState && n.setTimeout((function() {
                                t && r()
                            }
                            ))
                        }
                        ,
                        t = t("abort");
                        try {
                            a.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t)
                                throw e
                        }
                    },
                    abort: function() {
                        t && t()
                    }
                }
        }
        )),
        x.ajaxPrefilter((function(e) {
            e.crossDomain && (e.contents.script = !1)
        }
        )),
        x.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return x.globalEval(e),
                    e
                }
            }
        }),
        x.ajaxPrefilter("script", (function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }
        )),
        x.ajaxTransport("script", (function(e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs)
                return {
                    send: function(r, o) {
                        t = x("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(),
                            n = null,
                            e && o("error" === e.type ? 404 : 200, e.type)
                        }
                        ),
                        _.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
        }
        ));
        var Wt, Gt = [], zt = /(=)\?(?=&|$)|\?\?/;
        x.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Gt.pop() || x.expando + "_" + xt.guid++;
                return this[e] = !0,
                e
            }
        }),
        x.ajaxPrefilter("json jsonp", (function(e, t, r) {
            var o, i, s, a = !1 !== e.jsonp && (zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return o = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                a ? e[a] = e[a].replace(zt, "$1" + o) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                e.converters["script json"] = function() {
                    return s || x.error(o + " was not called"),
                    s[0]
                }
                ,
                e.dataTypes[0] = "json",
                i = n[o],
                n[o] = function() {
                    s = arguments
                }
                ,
                r.always((function() {
                    void 0 === i ? x(n).removeProp(o) : n[o] = i,
                    e[o] && (e.jsonpCallback = t.jsonpCallback,
                    Gt.push(o)),
                    s && m(i) && i(s[0]),
                    s = i = void 0
                }
                )),
                "script"
        }
        )),
        g.createHTMLDocument = ((Wt = _.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
        2 === Wt.childNodes.length),
        x.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
            t = !1),
            t || (g.createHTMLDocument ? ((r = (t = _.implementation.createHTMLDocument("")).createElement("base")).href = _.location.href,
            t.head.appendChild(r)) : t = _),
            i = !n && [],
            (o = R.exec(e)) ? [t.createElement(o[1])] : (o = we([e], t, i),
            i && i.length && x(i).remove(),
            x.merge([], o.childNodes)));
            var r, o, i
        }
        ,
        x.fn.load = function(e, t, n) {
            var r, o, i, s = this, a = e.indexOf(" ");
            return a > -1 && (r = gt(e.slice(a)),
            e = e.slice(0, a)),
            m(t) ? (n = t,
            t = void 0) : t && "object" == typeof t && (o = "POST"),
            s.length > 0 && x.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done((function(e) {
                i = arguments,
                s.html(r ? x("<div>").append(x.parseHTML(e)).find(r) : e)
            }
            )).always(n && function(e, t) {
                s.each((function() {
                    n.apply(this, i || [e.responseText, t, e])
                }
                ))
            }
            ),
            this
        }
        ,
        x.expr.pseudos.animated = function(e) {
            return x.grep(x.timers, (function(t) {
                return e === t.elem
            }
            )).length
        }
        ,
        x.offset = {
            setOffset: function(e, t, n) {
                var r, o, i, s, a, u, c = x.css(e, "position"), l = x(e), f = {};
                "static" === c && (e.style.position = "relative"),
                a = l.offset(),
                i = x.css(e, "top"),
                u = x.css(e, "left"),
                ("absolute" === c || "fixed" === c) && (i + u).indexOf("auto") > -1 ? (s = (r = l.position()).top,
                o = r.left) : (s = parseFloat(i) || 0,
                o = parseFloat(u) || 0),
                m(t) && (t = t.call(e, n, x.extend({}, a))),
                null != t.top && (f.top = t.top - a.top + s),
                null != t.left && (f.left = t.left - a.left + o),
                "using"in t ? t.using.call(e, f) : l.css(f)
            }
        },
        x.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each((function(t) {
                        x.offset.setOffset(this, e, t)
                    }
                    ));
                var t, n, r = this[0];
                return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
                n = r.ownerDocument.defaultView,
                {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0], o = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === x.css(r, "position"))
                        t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === x.css(e, "position"); )
                            e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((o = x(e).offset()).top += x.css(e, "borderTopWidth", !0),
                        o.left += x.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - x.css(r, "marginTop", !0),
                        left: t.left - o.left - x.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map((function() {
                    for (var e = this.offsetParent; e && "static" === x.css(e, "position"); )
                        e = e.offsetParent;
                    return e || ie
                }
                ))
            }
        }),
        x.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function(e, t) {
            var n = "pageYOffset" === t;
            x.fn[e] = function(r) {
                return H(this, (function(e, r, o) {
                    var i;
                    if (y(e) ? i = e : 9 === e.nodeType && (i = e.defaultView),
                    void 0 === o)
                        return i ? i[t] : e[r];
                    i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o
                }
                ), e, r, arguments.length)
            }
        }
        )),
        x.each(["top", "left"], (function(e, t) {
            x.cssHooks[t] = He(g.pixelPosition, (function(e, n) {
                if (n)
                    return n = Ve(e, t),
                    Ue.test(n) ? x(e).position()[t] + "px" : n
            }
            ))
        }
        )),
        x.each({
            Height: "height",
            Width: "width"
        }, (function(e, t) {
            x.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, (function(n, r) {
                x.fn[r] = function(o, i) {
                    var s = arguments.length && (n || "boolean" != typeof o)
                      , a = n || (!0 === o || !0 === i ? "margin" : "border");
                    return H(this, (function(t, n, o) {
                        var i;
                        return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                        Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? x.css(t, n, a) : x.style(t, n, o, a)
                    }
                    ), t, s ? o : void 0, s)
                }
            }
            ))
        }
        )),
        x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
            x.fn[t] = function(e) {
                return this.on(t, e)
            }
        }
        )),
        x.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
            x.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }
        ));
        var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        x.proxy = function(e, t) {
            var n, r, o;
            if ("string" == typeof t && (n = e[t],
            t = e,
            e = n),
            m(e))
                return r = a.call(arguments, 2),
                (o = function() {
                    return e.apply(t || this, r.concat(a.call(arguments)))
                }
                ).guid = e.guid = e.guid || x.guid++,
                o
        }
        ,
        x.holdReady = function(e) {
            e ? x.readyWait++ : x.ready(!0)
        }
        ,
        x.isArray = Array.isArray,
        x.parseJSON = JSON.parse,
        x.nodeName = I,
        x.isFunction = m,
        x.isWindow = y,
        x.camelCase = X,
        x.type = w,
        x.now = Date.now,
        x.isNumeric = function(e) {
            var t = x.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }
        ,
        x.trim = function(e) {
            return null == e ? "" : (e + "").replace(Xt, "")
        }
        ,
        void 0 === (r = function() {
            return x
        }
        .apply(t, [])) || (e.exports = r);
        var Kt = n.jQuery
          , Qt = n.$;
        return x.noConflict = function(e) {
            return n.$ === x && (n.$ = Qt),
            e && n.jQuery === x && (n.jQuery = Kt),
            x
        }
        ,
        void 0 === o && (n.jQuery = n.$ = x),
        x
    }
    ))
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t, n) {
    e.exports = !n(7) && !n(3)((function() {
        return 7 != Object.defineProperty(n(66)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
}
, function(e, t, n) {
    t.f = n(5)
}
, function(e, t, n) {
    var r = n(14)
      , o = n(15)
      , i = n(52)(!1)
      , s = n(68)("IE_PROTO");
    e.exports = function(e, t) {
        var n, a = o(e), u = 0, c = [];
        for (n in a)
            n != s && r(a, n) && c.push(n);
        for (; t.length > u; )
            r(a, n = t[u++]) && (~i(c, n) || c.push(n));
        return c
    }
}
, function(e, t, n) {
    var r = n(8)
      , o = n(1)
      , i = n(34);
    e.exports = n(7) ? Object.defineProperties : function(e, t) {
        o(e);
        for (var n, s = i(t), a = s.length, u = 0; a > u; )
            r.f(e, n = s[u++], t[n]);
        return e
    }
}
, function(e, t, n) {
    var r = n(15)
      , o = n(37).f
      , i = {}.toString
      , s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    e.exports.f = function(e) {
        return s && "[object Window]" == i.call(e) ? function(e) {
            try {
                return o(e)
            } catch (e) {
                return s.slice()
            }
        }(e) : o(r(e))
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(7)
      , o = n(34)
      , i = n(53)
      , s = n(49)
      , a = n(9)
      , u = n(48)
      , c = Object.assign;
    e.exports = !c || n(3)((function() {
        var e = {}
          , t = {}
          , n = Symbol()
          , r = "abcdefghijklmnopqrst";
        return e[n] = 7,
        r.split("").forEach((function(e) {
            t[e] = e
        }
        )),
        7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != r
    }
    )) ? function(e, t) {
        for (var n = a(e), c = arguments.length, l = 1, f = i.f, d = s.f; c > l; )
            for (var p, h = u(arguments[l++]), v = f ? o(h).concat(f(h)) : o(h), g = v.length, m = 0; g > m; )
                p = v[m++],
                r && !d.call(h, p) || (n[p] = h[p]);
        return n
    }
    : c
}
, function(e, t) {
    e.exports = Object.is || function(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(10)
      , o = n(4)
      , i = n(103)
      , s = [].slice
      , a = {}
      , u = function(e, t, n) {
        if (!(t in a)) {
            for (var r = [], o = 0; o < t; o++)
                r[o] = "a[" + o + "]";
            a[t] = Function("F,a", "return new F(" + r.join(",") + ")")
        }
        return a[t](e, n)
    };
    e.exports = Function.bind || function(e) {
        var t = r(this)
          , n = s.call(arguments, 1)
          , a = function() {
            var r = n.concat(s.call(arguments));
            return this instanceof a ? u(t, r.length, r) : i(t, r, e)
        };
        return o(t.prototype) && (a.prototype = t.prototype),
        a
    }
}
, function(e, t) {
    e.exports = function(e, t, n) {
        var r = void 0 === n;
        switch (t.length) {
        case 0:
            return r ? e() : e.call(n);
        case 1:
            return r ? e(t[0]) : e.call(n, t[0]);
        case 2:
            return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
        case 3:
            return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
        case 4:
            return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    }
}
, function(e, t, n) {
    var r = n(2).parseInt
      , o = n(45).trim
      , i = n(72)
      , s = /^[-+]?0[xX]/;
    e.exports = 8 !== r(i + "08") || 22 !== r(i + "0x16") ? function(e, t) {
        var n = o(String(e), 3);
        return r(n, t >>> 0 || (s.test(n) ? 16 : 10))
    }
    : r
}
, function(e, t, n) {
    var r = n(2).parseFloat
      , o = n(45).trim;
    e.exports = 1 / r(n(72) + "-0") != -1 / 0 ? function(e) {
        var t = o(String(e), 3)
          , n = r(t);
        return 0 === n && "-" == t.charAt(0) ? -0 : n
    }
    : r
}
, function(e, t, n) {
    var r = n(20);
    e.exports = function(e, t) {
        if ("number" != typeof e && "Number" != r(e))
            throw TypeError(t);
        return +e
    }
}
, function(e, t, n) {
    var r = n(4)
      , o = Math.floor;
    e.exports = function(e) {
        return !r(e) && isFinite(e) && o(e) === e
    }
}
, function(e, t) {
    e.exports = Math.log1p || function(e) {
        return (e = +e) > -1e-8 && e < 1e-8 ? e - e * e / 2 : Math.log(1 + e)
    }
}
, function(e, t, n) {
    var r = n(75)
      , o = Math.pow
      , i = o(2, -52)
      , s = o(2, -23)
      , a = o(2, 127) * (2 - s)
      , u = o(2, -126);
    e.exports = Math.fround || function(e) {
        var t, n, o = Math.abs(e), c = r(e);
        return o < u ? c * (o / u / s + 1 / i - 1 / i) * u * s : (n = (t = (1 + s / i) * o) - (t - o)) > a || n != n ? c * (1 / 0) : c * n
    }
}
, function(e, t, n) {
    var r = n(1);
    e.exports = function(e, t, n, o) {
        try {
            return o ? t(r(n)[0], n[1]) : t(n)
        } catch (t) {
            var i = e.return;
            throw void 0 !== i && r(i.call(e)),
            t
        }
    }
}
, function(e, t, n) {
    var r = n(10)
      , o = n(9)
      , i = n(48)
      , s = n(6);
    e.exports = function(e, t, n, a, u) {
        r(t);
        var c = o(e)
          , l = i(c)
          , f = s(c.length)
          , d = u ? f - 1 : 0
          , p = u ? -1 : 1;
        if (n < 2)
            for (; ; ) {
                if (d in l) {
                    a = l[d],
                    d += p;
                    break
                }
                if (d += p,
                u ? d < 0 : f <= d)
                    throw TypeError("Reduce of empty array with no initial value")
            }
        for (; u ? d >= 0 : f > d; d += p)
            d in l && (a = t(a, l[d], d, c));
        return a
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(9)
      , o = n(35)
      , i = n(6);
    e.exports = [].copyWithin || function(e, t) {
        var n = r(this)
          , s = i(n.length)
          , a = o(e, s)
          , u = o(t, s)
          , c = arguments.length > 2 ? arguments[2] : void 0
          , l = Math.min((void 0 === c ? s : o(c, s)) - u, s - a)
          , f = 1;
        for (u < a && a < u + l && (f = -1,
        u += l - 1,
        a += l - 1); l-- > 0; )
            u in n ? n[a] = n[u] : delete n[a],
            a += f,
            u += f;
        return n
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(87);
    n(0)({
        target: "RegExp",
        proto: !0,
        forced: r !== /./.exec
    }, {
        exec: r
    })
}
, function(e, t, n) {
    n(7) && "g" != /./g.flags && n(8).f(RegExp.prototype, "flags", {
        configurable: !0,
        get: n(50)
    })
}
, function(e, t) {
    e.exports = function(e) {
        try {
            return {
                e: !1,
                v: e()
            }
        } catch (e) {
            return {
                e: !0,
                v: e
            }
        }
    }
}
, function(e, t, n) {
    var r = n(1)
      , o = n(4)
      , i = n(91);
    e.exports = function(e, t) {
        if (r(e),
        o(t) && t.constructor === e)
            return t;
        var n = i.f(e);
        return (0,
        n.resolve)(t),
        n.promise
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(119)
      , o = n(42);
    e.exports = n(61)("Map", (function(e) {
        return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }
    ), {
        get: function(e) {
            var t = r.getEntry(o(this, "Map"), e);
            return t && t.v
        },
        set: function(e, t) {
            return r.def(o(this, "Map"), 0 === e ? 0 : e, t)
        }
    }, r, !0)
}
, function(e, t, n) {
    "use strict";
    var r = n(8).f
      , o = n(36)
      , i = n(41)
      , s = n(19)
      , a = n(39)
      , u = n(40)
      , c = n(77)
      , l = n(113)
      , f = n(38)
      , d = n(7)
      , p = n(30).fastKey
      , h = n(42)
      , v = d ? "_s" : "size"
      , g = function(e, t) {
        var n, r = p(t);
        if ("F" !== r)
            return e._i[r];
        for (n = e._f; n; n = n.n)
            if (n.k == t)
                return n
    };
    e.exports = {
        getConstructor: function(e, t, n, c) {
            var l = e((function(e, r) {
                a(e, l, t, "_i"),
                e._t = t,
                e._i = o(null),
                e._f = void 0,
                e._l = void 0,
                e[v] = 0,
                null != r && u(r, n, e[c], e)
            }
            ));
            return i(l.prototype, {
                clear: function() {
                    for (var e = h(this, t), n = e._i, r = e._f; r; r = r.n)
                        r.r = !0,
                        r.p && (r.p = r.p.n = void 0),
                        delete n[r.i];
                    e._f = e._l = void 0,
                    e[v] = 0
                },
                delete: function(e) {
                    var n = h(this, t)
                      , r = g(n, e);
                    if (r) {
                        var o = r.n
                          , i = r.p;
                        delete n._i[r.i],
                        r.r = !0,
                        i && (i.n = o),
                        o && (o.p = i),
                        n._f == r && (n._f = o),
                        n._l == r && (n._l = i),
                        n[v]--
                    }
                    return !!r
                },
                forEach: function(e) {
                    h(this, t);
                    for (var n, r = s(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f; )
                        for (r(n.v, n.k, this); n && n.r; )
                            n = n.p
                },
                has: function(e) {
                    return !!g(h(this, t), e)
                }
            }),
            d && r(l.prototype, "size", {
                get: function() {
                    return h(this, t)[v]
                }
            }),
            l
        },
        def: function(e, t, n) {
            var r, o, i = g(e, t);
            return i ? i.v = n : (e._l = i = {
                i: o = p(t, !0),
                k: t,
                v: n,
                p: r = e._l,
                n: void 0,
                r: !1
            },
            e._f || (e._f = i),
            r && (r.n = i),
            e[v]++,
            "F" !== o && (e._i[o] = i)),
            e
        },
        getEntry: g,
        setStrong: function(e, t, n) {
            c(e, t, (function(e, n) {
                this._t = h(e, t),
                this._k = n,
                this._l = void 0
            }
            ), (function() {
                for (var e = this._k, t = this._l; t && t.r; )
                    t = t.p;
                return this._t && (this._l = t = t ? t.n : this._t._f) ? l(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0,
                l(1))
            }
            ), n ? "entries" : "values", !n, !0),
            f(t)
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(119)
      , o = n(42);
    e.exports = n(61)("Set", (function(e) {
        return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }
    ), {
        add: function(e) {
            return r.def(o(this, "Set"), e = 0 === e ? 0 : e, e)
        }
    }, r)
}
, function(e, t, n) {
    "use strict";
    var r, o = n(2), i = n(26)(0), s = n(12), a = n(30), u = n(100), c = n(122), l = n(4), f = n(42), d = n(42), p = !o.ActiveXObject && "ActiveXObject"in o, h = a.getWeak, v = Object.isExtensible, g = c.ufstore, m = function(e) {
        return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, y = {
        get: function(e) {
            if (l(e)) {
                var t = h(e);
                return !0 === t ? g(f(this, "WeakMap")).get(e) : t ? t[this._i] : void 0
            }
        },
        set: function(e, t) {
            return c.def(f(this, "WeakMap"), e, t)
        }
    }, _ = e.exports = n(61)("WeakMap", m, y, c, !0, !0);
    d && p && (u((r = c.getConstructor(m, "WeakMap")).prototype, y),
    a.NEED = !0,
    i(["delete", "has", "get", "set"], (function(e) {
        var t = _.prototype
          , n = t[e];
        s(t, e, (function(t, o) {
            if (l(t) && !v(t)) {
                this._f || (this._f = new r);
                var i = this._f[e](t, o);
                return "set" == e ? this : i
            }
            return n.call(this, t, o)
        }
        ))
    }
    )))
}
, function(e, t, n) {
    "use strict";
    var r = n(41)
      , o = n(30).getWeak
      , i = n(1)
      , s = n(4)
      , a = n(39)
      , u = n(40)
      , c = n(26)
      , l = n(14)
      , f = n(42)
      , d = c(5)
      , p = c(6)
      , h = 0
      , v = function(e) {
        return e._l || (e._l = new g)
    }
      , g = function() {
        this.a = []
    }
      , m = function(e, t) {
        return d(e.a, (function(e) {
            return e[0] === t
        }
        ))
    };
    g.prototype = {
        get: function(e) {
            var t = m(this, e);
            if (t)
                return t[1]
        },
        has: function(e) {
            return !!m(this, e)
        },
        set: function(e, t) {
            var n = m(this, e);
            n ? n[1] = t : this.a.push([e, t])
        },
        delete: function(e) {
            var t = p(this.a, (function(t) {
                return t[0] === e
            }
            ));
            return ~t && this.a.splice(t, 1),
            !!~t
        }
    },
    e.exports = {
        getConstructor: function(e, t, n, i) {
            var c = e((function(e, r) {
                a(e, c, t, "_i"),
                e._t = t,
                e._i = h++,
                e._l = void 0,
                null != r && u(r, n, e[i], e)
            }
            ));
            return r(c.prototype, {
                delete: function(e) {
                    if (!s(e))
                        return !1;
                    var n = o(e);
                    return !0 === n ? v(f(this, t)).delete(e) : n && l(n, this._i) && delete n[this._i]
                },
                has: function(e) {
                    if (!s(e))
                        return !1;
                    var n = o(e);
                    return !0 === n ? v(f(this, t)).has(e) : n && l(n, this._i)
                }
            }),
            c
        },
        def: function(e, t, n) {
            var r = o(i(t), !0);
            return !0 === r ? v(e).set(t, n) : r[e._i] = n,
            e
        },
        ufstore: v
    }
}
, function(e, t, n) {
    var r = n(21)
      , o = n(6);
    e.exports = function(e) {
        if (void 0 === e)
            return 0;
        var t = r(e)
          , n = o(t);
        if (t !== n)
            throw RangeError("Wrong length!");
        return n
    }
}
, function(e, t, n) {
    var r = n(37)
      , o = n(53)
      , i = n(1)
      , s = n(2).Reflect;
    e.exports = s && s.ownKeys || function(e) {
        var t = r.f(i(e))
          , n = o.f;
        return n ? t.concat(n(e)) : t
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(54)
      , o = n(4)
      , i = n(6)
      , s = n(19)
      , a = n(5)("isConcatSpreadable");
    e.exports = function e(t, n, u, c, l, f, d, p) {
        for (var h, v, g = l, m = 0, y = !!d && s(d, p, 3); m < c; ) {
            if (m in u) {
                if (h = y ? y(u[m], m, n) : u[m],
                v = !1,
                o(h) && (v = void 0 !== (v = h[a]) ? !!v : r(h)),
                v && f > 0)
                    g = e(t, n, h, i(h.length), g, f - 1) - 1;
                else {
                    if (g >= 9007199254740991)
                        throw TypeError();
                    t[g] = h
                }
                g++
            }
            m++
        }
        return g
    }
}
, function(e, t, n) {
    var r = n(6)
      , o = n(74)
      , i = n(24);
    e.exports = function(e, t, n, s) {
        var a = String(i(e))
          , u = a.length
          , c = void 0 === n ? " " : String(n)
          , l = r(t);
        if (l <= u || "" == c)
            return a;
        var f = l - u
          , d = o.call(c, Math.ceil(f / c.length));
        return d.length > f && (d = d.slice(0, f)),
        s ? d + a : a + d
    }
}
, function(e, t, n) {
    var r = n(7)
      , o = n(34)
      , i = n(15)
      , s = n(49).f;
    e.exports = function(e) {
        return function(t) {
            for (var n, a = i(t), u = o(a), c = u.length, l = 0, f = []; c > l; )
                n = u[l++],
                r && !s.call(a, n) || f.push(e ? [n, a[n]] : a[n]);
            return f
        }
    }
}
, function(e, t, n) {
    var r = n(44)
      , o = n(129);
    e.exports = function(e) {
        return function() {
            if (r(this) != e)
                throw TypeError(e + "#toJSON isn't generic");
            return o(this)
        }
    }
}
, function(e, t, n) {
    var r = n(40);
    e.exports = function(e, t) {
        var n = [];
        return r(e, !1, n.push, n, t),
        n
    }
}
, function(e, t) {
    e.exports = Math.scale || function(e, t, n, r, o) {
        return 0 === arguments.length || e != e || t != t || n != n || r != r || o != o ? NaN : e === 1 / 0 || e === -1 / 0 ? e : (e - t) * (o - r) / (n - t) + r
    }
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        if (n(132),
        n(329),
        n(330),
        e._babelPolyfill)
            throw new Error("only one instance of babel-polyfill is allowed");
        e._babelPolyfill = !0;
        function t(e, t, n) {
            e[t] || Object.defineProperty(e, t, {
                writable: !0,
                configurable: !0,
                value: n
            })
        }
        t(String.prototype, "padLeft", "".padStart),
        t(String.prototype, "padRight", "".padEnd),
        "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach((function(e) {
            [][e] && t(Array, e, Function.call.bind([][e]))
        }
        ))
    }
    ).call(this, n(94))
}
, function(e, t, n) {
    n(133),
    n(136),
    n(137),
    n(138),
    n(139),
    n(140),
    n(141),
    n(142),
    n(143),
    n(144),
    n(145),
    n(146),
    n(147),
    n(148),
    n(149),
    n(150),
    n(151),
    n(152),
    n(153),
    n(154),
    n(155),
    n(156),
    n(157),
    n(158),
    n(159),
    n(160),
    n(161),
    n(162),
    n(163),
    n(164),
    n(165),
    n(166),
    n(167),
    n(168),
    n(169),
    n(170),
    n(171),
    n(172),
    n(173),
    n(174),
    n(175),
    n(176),
    n(177),
    n(178),
    n(179),
    n(180),
    n(181),
    n(182),
    n(183),
    n(184),
    n(185),
    n(186),
    n(187),
    n(188),
    n(189),
    n(190),
    n(191),
    n(192),
    n(193),
    n(194),
    n(195),
    n(196),
    n(197),
    n(198),
    n(199),
    n(200),
    n(201),
    n(202),
    n(203),
    n(204),
    n(205),
    n(206),
    n(207),
    n(208),
    n(209),
    n(210),
    n(211),
    n(213),
    n(214),
    n(216),
    n(217),
    n(218),
    n(219),
    n(220),
    n(221),
    n(222),
    n(224),
    n(225),
    n(226),
    n(227),
    n(228),
    n(229),
    n(230),
    n(231),
    n(232),
    n(233),
    n(234),
    n(235),
    n(236),
    n(86),
    n(237),
    n(114),
    n(238),
    n(115),
    n(239),
    n(240),
    n(241),
    n(242),
    n(243),
    n(118),
    n(120),
    n(121),
    n(244),
    n(245),
    n(246),
    n(247),
    n(248),
    n(249),
    n(250),
    n(251),
    n(252),
    n(253),
    n(254),
    n(255),
    n(256),
    n(257),
    n(258),
    n(259),
    n(260),
    n(261),
    n(262),
    n(263),
    n(264),
    n(265),
    n(266),
    n(267),
    n(268),
    n(269),
    n(270),
    n(271),
    n(272),
    n(273),
    n(274),
    n(275),
    n(276),
    n(277),
    n(278),
    n(279),
    n(280),
    n(281),
    n(282),
    n(283),
    n(284),
    n(285),
    n(286),
    n(287),
    n(288),
    n(289),
    n(290),
    n(291),
    n(292),
    n(293),
    n(294),
    n(295),
    n(296),
    n(297),
    n(298),
    n(299),
    n(300),
    n(301),
    n(302),
    n(303),
    n(304),
    n(305),
    n(306),
    n(307),
    n(308),
    n(309),
    n(310),
    n(311),
    n(312),
    n(313),
    n(314),
    n(315),
    n(316),
    n(317),
    n(318),
    n(319),
    n(320),
    n(321),
    n(322),
    n(323),
    n(324),
    n(325),
    n(326),
    n(327),
    n(328),
    e.exports = n(18)
}
, function(e, t, n) {
    "use strict";
    var r = n(2)
      , o = n(14)
      , i = n(7)
      , s = n(0)
      , a = n(12)
      , u = n(30).KEY
      , c = n(3)
      , l = n(47)
      , f = n(43)
      , d = n(33)
      , p = n(5)
      , h = n(96)
      , v = n(67)
      , g = n(135)
      , m = n(54)
      , y = n(1)
      , _ = n(4)
      , b = n(9)
      , E = n(15)
      , w = n(23)
      , x = n(32)
      , S = n(36)
      , T = n(99)
      , O = n(16)
      , N = n(53)
      , C = n(8)
      , I = n(34)
      , R = O.f
      , k = C.f
      , A = T.f
      , P = r.Symbol
      , M = r.JSON
      , j = M && M.stringify
      , L = p("_hidden")
      , D = p("toPrimitive")
      , F = {}.propertyIsEnumerable
      , U = l("symbol-registry")
      , q = l("symbols")
      , $ = l("op-symbols")
      , B = Object.prototype
      , V = "function" == typeof P && !!N.f
      , H = r.QObject
      , W = !H || !H.prototype || !H.prototype.findChild
      , G = i && c((function() {
        return 7 != S(k({}, "a", {
            get: function() {
                return k(this, "a", {
                    value: 7
                }).a
            }
        })).a
    }
    )) ? function(e, t, n) {
        var r = R(B, t);
        r && delete B[t],
        k(e, t, n),
        r && e !== B && k(B, t, r)
    }
    : k
      , z = function(e) {
        var t = q[e] = S(P.prototype);
        return t._k = e,
        t
    }
      , X = V && "symbol" == typeof P.iterator ? function(e) {
        return "symbol" == typeof e
    }
    : function(e) {
        return e instanceof P
    }
      , K = function(e, t, n) {
        return e === B && K($, t, n),
        y(e),
        t = w(t, !0),
        y(n),
        o(q, t) ? (n.enumerable ? (o(e, L) && e[L][t] && (e[L][t] = !1),
        n = S(n, {
            enumerable: x(0, !1)
        })) : (o(e, L) || k(e, L, x(1, {})),
        e[L][t] = !0),
        G(e, t, n)) : k(e, t, n)
    }
      , Q = function(e, t) {
        y(e);
        for (var n, r = g(t = E(t)), o = 0, i = r.length; i > o; )
            K(e, n = r[o++], t[n]);
        return e
    }
      , Y = function(e) {
        var t = F.call(this, e = w(e, !0));
        return !(this === B && o(q, e) && !o($, e)) && (!(t || !o(this, e) || !o(q, e) || o(this, L) && this[L][e]) || t)
    }
      , J = function(e, t) {
        if (e = E(e),
        t = w(t, !0),
        e !== B || !o(q, t) || o($, t)) {
            var n = R(e, t);
            return !n || !o(q, t) || o(e, L) && e[L][t] || (n.enumerable = !0),
            n
        }
    }
      , Z = function(e) {
        for (var t, n = A(E(e)), r = [], i = 0; n.length > i; )
            o(q, t = n[i++]) || t == L || t == u || r.push(t);
        return r
    }
      , ee = function(e) {
        for (var t, n = e === B, r = A(n ? $ : E(e)), i = [], s = 0; r.length > s; )
            !o(q, t = r[s++]) || n && !o(B, t) || i.push(q[t]);
        return i
    };
    V || (a((P = function() {
        if (this instanceof P)
            throw TypeError("Symbol is not a constructor!");
        var e = d(arguments.length > 0 ? arguments[0] : void 0)
          , t = function(n) {
            this === B && t.call($, n),
            o(this, L) && o(this[L], e) && (this[L][e] = !1),
            G(this, e, x(1, n))
        };
        return i && W && G(B, e, {
            configurable: !0,
            set: t
        }),
        z(e)
    }
    ).prototype, "toString", (function() {
        return this._k
    }
    )),
    O.f = J,
    C.f = K,
    n(37).f = T.f = Z,
    n(49).f = Y,
    N.f = ee,
    i && !n(29) && a(B, "propertyIsEnumerable", Y, !0),
    h.f = function(e) {
        return z(p(e))
    }
    ),
    s(s.G + s.W + s.F * !V, {
        Symbol: P
    });
    for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne; )
        p(te[ne++]);
    for (var re = I(p.store), oe = 0; re.length > oe; )
        v(re[oe++]);
    s(s.S + s.F * !V, "Symbol", {
        for: function(e) {
            return o(U, e += "") ? U[e] : U[e] = P(e)
        },
        keyFor: function(e) {
            if (!X(e))
                throw TypeError(e + " is not a symbol!");
            for (var t in U)
                if (U[t] === e)
                    return t
        },
        useSetter: function() {
            W = !0
        },
        useSimple: function() {
            W = !1
        }
    }),
    s(s.S + s.F * !V, "Object", {
        create: function(e, t) {
            return void 0 === t ? S(e) : Q(S(e), t)
        },
        defineProperty: K,
        defineProperties: Q,
        getOwnPropertyDescriptor: J,
        getOwnPropertyNames: Z,
        getOwnPropertySymbols: ee
    });
    var ie = c((function() {
        N.f(1)
    }
    ));
    s(s.S + s.F * ie, "Object", {
        getOwnPropertySymbols: function(e) {
            return N.f(b(e))
        }
    }),
    M && s(s.S + s.F * (!V || c((function() {
        var e = P();
        return "[null]" != j([e]) || "{}" != j({
            a: e
        }) || "{}" != j(Object(e))
    }
    ))), "JSON", {
        stringify: function(e) {
            for (var t, n, r = [e], o = 1; arguments.length > o; )
                r.push(arguments[o++]);
            if (n = t = r[1],
            (_(t) || void 0 !== e) && !X(e))
                return m(t) || (t = function(e, t) {
                    if ("function" == typeof n && (t = n.call(this, e, t)),
                    !X(t))
                        return t
                }
                ),
                r[1] = t,
                j.apply(M, r)
        }
    }),
    P.prototype[D] || n(11)(P.prototype, D, P.prototype.valueOf),
    f(P, "Symbol"),
    f(Math, "Math", !0),
    f(r.JSON, "JSON", !0)
}
, function(e, t, n) {
    e.exports = n(47)("native-function-to-string", Function.toString)
}
, function(e, t, n) {
    var r = n(34)
      , o = n(53)
      , i = n(49);
    e.exports = function(e) {
        var t = r(e)
          , n = o.f;
        if (n)
            for (var s, a = n(e), u = i.f, c = 0; a.length > c; )
                u.call(e, s = a[c++]) && t.push(s);
        return t
    }
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Object", {
        create: n(36)
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S + r.F * !n(7), "Object", {
        defineProperty: n(8).f
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S + r.F * !n(7), "Object", {
        defineProperties: n(98)
    })
}
, function(e, t, n) {
    var r = n(15)
      , o = n(16).f;
    n(25)("getOwnPropertyDescriptor", (function() {
        return function(e, t) {
            return o(r(e), t)
        }
    }
    ))
}
, function(e, t, n) {
    var r = n(9)
      , o = n(17);
    n(25)("getPrototypeOf", (function() {
        return function(e) {
            return o(r(e))
        }
    }
    ))
}
, function(e, t, n) {
    var r = n(9)
      , o = n(34);
    n(25)("keys", (function() {
        return function(e) {
            return o(r(e))
        }
    }
    ))
}
, function(e, t, n) {
    n(25)("getOwnPropertyNames", (function() {
        return n(99).f
    }
    ))
}
, function(e, t, n) {
    var r = n(4)
      , o = n(30).onFreeze;
    n(25)("freeze", (function(e) {
        return function(t) {
            return e && r(t) ? e(o(t)) : t
        }
    }
    ))
}
, function(e, t, n) {
    var r = n(4)
      , o = n(30).onFreeze;
    n(25)("seal", (function(e) {
        return function(t) {
            return e && r(t) ? e(o(t)) : t
        }
    }
    ))
}
, function(e, t, n) {
    var r = n(4)
      , o = n(30).onFreeze;
    n(25)("preventExtensions", (function(e) {
        return function(t) {
            return e && r(t) ? e(o(t)) : t
        }
    }
    ))
}
, function(e, t, n) {
    var r = n(4);
    n(25)("isFrozen", (function(e) {
        return function(t) {
            return !r(t) || !!e && e(t)
        }
    }
    ))
}
, function(e, t, n) {
    var r = n(4);
    n(25)("isSealed", (function(e) {
        return function(t) {
            return !r(t) || !!e && e(t)
        }
    }
    ))
}
, function(e, t, n) {
    var r = n(4);
    n(25)("isExtensible", (function(e) {
        return function(t) {
            return !!r(t) && (!e || e(t))
        }
    }
    ))
}
, function(e, t, n) {
    var r = n(0);
    r(r.S + r.F, "Object", {
        assign: n(100)
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Object", {
        is: n(101)
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Object", {
        setPrototypeOf: n(71).set
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(44)
      , o = {};
    o[n(5)("toStringTag")] = "z",
    o + "" != "[object z]" && n(12)(Object.prototype, "toString", (function() {
        return "[object " + r(this) + "]"
    }
    ), !0)
}
, function(e, t, n) {
    var r = n(0);
    r(r.P, "Function", {
        bind: n(102)
    })
}
, function(e, t, n) {
    var r = n(8).f
      , o = Function.prototype
      , i = /^\s*function ([^ (]*)/;
    "name"in o || n(7) && r(o, "name", {
        configurable: !0,
        get: function() {
            try {
                return ("" + this).match(i)[1]
            } catch (e) {
                return ""
            }
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(4)
      , o = n(17)
      , i = n(5)("hasInstance")
      , s = Function.prototype;
    i in s || n(8).f(s, i, {
        value: function(e) {
            if ("function" != typeof this || !r(e))
                return !1;
            if (!r(this.prototype))
                return e instanceof this;
            for (; e = o(e); )
                if (this.prototype === e)
                    return !0;
            return !1
        }
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(104);
    r(r.G + r.F * (parseInt != o), {
        parseInt: o
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(105);
    r(r.G + r.F * (parseFloat != o), {
        parseFloat: o
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(2)
      , o = n(14)
      , i = n(20)
      , s = n(73)
      , a = n(23)
      , u = n(3)
      , c = n(37).f
      , l = n(16).f
      , f = n(8).f
      , d = n(45).trim
      , p = r.Number
      , h = p
      , v = p.prototype
      , g = "Number" == i(n(36)(v))
      , m = "trim"in String.prototype
      , y = function(e) {
        var t = a(e, !1);
        if ("string" == typeof t && t.length > 2) {
            var n, r, o, i = (t = m ? t.trim() : d(t, 3)).charCodeAt(0);
            if (43 === i || 45 === i) {
                if (88 === (n = t.charCodeAt(2)) || 120 === n)
                    return NaN
            } else if (48 === i) {
                switch (t.charCodeAt(1)) {
                case 66:
                case 98:
                    r = 2,
                    o = 49;
                    break;
                case 79:
                case 111:
                    r = 8,
                    o = 55;
                    break;
                default:
                    return +t
                }
                for (var s, u = t.slice(2), c = 0, l = u.length; c < l; c++)
                    if ((s = u.charCodeAt(c)) < 48 || s > o)
                        return NaN;
                return parseInt(u, r)
            }
        }
        return +t
    };
    if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
        p = function(e) {
            var t = arguments.length < 1 ? 0 : e
              , n = this;
            return n instanceof p && (g ? u((function() {
                v.valueOf.call(n)
            }
            )) : "Number" != i(n)) ? s(new h(y(t)), n, p) : y(t)
        }
        ;
        for (var _, b = n(7) ? c(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), E = 0; b.length > E; E++)
            o(h, _ = b[E]) && !o(p, _) && f(p, _, l(h, _));
        p.prototype = v,
        v.constructor = p,
        n(12)(r, "Number", p)
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(21)
      , i = n(106)
      , s = n(74)
      , a = 1..toFixed
      , u = Math.floor
      , c = [0, 0, 0, 0, 0, 0]
      , l = "Number.toFixed: incorrect invocation!"
      , f = function(e, t) {
        for (var n = -1, r = t; ++n < 6; )
            r += e * c[n],
            c[n] = r % 1e7,
            r = u(r / 1e7)
    }
      , d = function(e) {
        for (var t = 6, n = 0; --t >= 0; )
            n += c[t],
            c[t] = u(n / e),
            n = n % e * 1e7
    }
      , p = function() {
        for (var e = 6, t = ""; --e >= 0; )
            if ("" !== t || 0 === e || 0 !== c[e]) {
                var n = String(c[e]);
                t = "" === t ? n : t + s.call("0", 7 - n.length) + n
            }
        return t
    }
      , h = function(e, t, n) {
        return 0 === t ? n : t % 2 == 1 ? h(e, t - 1, n * e) : h(e * e, t / 2, n)
    };
    r(r.P + r.F * (!!a && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !n(3)((function() {
        a.call({})
    }
    ))), "Number", {
        toFixed: function(e) {
            var t, n, r, a, u = i(this, l), c = o(e), v = "", g = "0";
            if (c < 0 || c > 20)
                throw RangeError(l);
            if (u != u)
                return "NaN";
            if (u <= -1e21 || u >= 1e21)
                return String(u);
            if (u < 0 && (v = "-",
            u = -u),
            u > 1e-21)
                if (n = (t = function(e) {
                    for (var t = 0, n = e; n >= 4096; )
                        t += 12,
                        n /= 4096;
                    for (; n >= 2; )
                        t += 1,
                        n /= 2;
                    return t
                }(u * h(2, 69, 1)) - 69) < 0 ? u * h(2, -t, 1) : u / h(2, t, 1),
                n *= 4503599627370496,
                (t = 52 - t) > 0) {
                    for (f(0, n),
                    r = c; r >= 7; )
                        f(1e7, 0),
                        r -= 7;
                    for (f(h(10, r, 1), 0),
                    r = t - 1; r >= 23; )
                        d(1 << 23),
                        r -= 23;
                    d(1 << r),
                    f(1, 1),
                    d(2),
                    g = p()
                } else
                    f(0, n),
                    f(1 << -t, 0),
                    g = p() + s.call("0", c);
            return g = c > 0 ? v + ((a = g.length) <= c ? "0." + s.call("0", c - a) + g : g.slice(0, a - c) + "." + g.slice(a - c)) : v + g
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(3)
      , i = n(106)
      , s = 1..toPrecision;
    r(r.P + r.F * (o((function() {
        return "1" !== s.call(1, void 0)
    }
    )) || !o((function() {
        s.call({})
    }
    ))), "Number", {
        toPrecision: function(e) {
            var t = i(this, "Number#toPrecision: incorrect invocation!");
            return void 0 === e ? s.call(t) : s.call(t, e)
        }
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Number", {
        EPSILON: Math.pow(2, -52)
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(2).isFinite;
    r(r.S, "Number", {
        isFinite: function(e) {
            return "number" == typeof e && o(e)
        }
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Number", {
        isInteger: n(107)
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Number", {
        isNaN: function(e) {
            return e != e
        }
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(107)
      , i = Math.abs;
    r(r.S, "Number", {
        isSafeInteger: function(e) {
            return o(e) && i(e) <= 9007199254740991
        }
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Number", {
        MAX_SAFE_INTEGER: 9007199254740991
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Number", {
        MIN_SAFE_INTEGER: -9007199254740991
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(105);
    r(r.S + r.F * (Number.parseFloat != o), "Number", {
        parseFloat: o
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(104);
    r(r.S + r.F * (Number.parseInt != o), "Number", {
        parseInt: o
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(108)
      , i = Math.sqrt
      , s = Math.acosh;
    r(r.S + r.F * !(s && 710 == Math.floor(s(Number.MAX_VALUE)) && s(1 / 0) == 1 / 0), "Math", {
        acosh: function(e) {
            return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? Math.log(e) + Math.LN2 : o(e - 1 + i(e - 1) * i(e + 1))
        }
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = Math.asinh;
    r(r.S + r.F * !(o && 1 / o(0) > 0), "Math", {
        asinh: function e(t) {
            return isFinite(t = +t) && 0 != t ? t < 0 ? -e(-t) : Math.log(t + Math.sqrt(t * t + 1)) : t
        }
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = Math.atanh;
    r(r.S + r.F * !(o && 1 / o(-0) < 0), "Math", {
        atanh: function(e) {
            return 0 == (e = +e) ? e : Math.log((1 + e) / (1 - e)) / 2
        }
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(75);
    r(r.S, "Math", {
        cbrt: function(e) {
            return o(e = +e) * Math.pow(Math.abs(e), 1 / 3)
        }
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Math", {
        clz32: function(e) {
            return (e >>>= 0) ? 31 - Math.floor(Math.log(e + .5) * Math.LOG2E) : 32
        }
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = Math.exp;
    r(r.S, "Math", {
        cosh: function(e) {
            return (o(e = +e) + o(-e)) / 2
        }
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(76);
    r(r.S + r.F * (o != Math.expm1), "Math", {
        expm1: o
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Math", {
        fround: n(109)
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = Math.abs;
    r(r.S, "Math", {
        hypot: function(e, t) {
            for (var n, r, i = 0, s = 0, a = arguments.length, u = 0; s < a; )
                u < (n = o(arguments[s++])) ? (i = i * (r = u / n) * r + 1,
                u = n) : i += n > 0 ? (r = n / u) * r : n;
            return u === 1 / 0 ? 1 / 0 : u * Math.sqrt(i)
        }
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = Math.imul;
    r(r.S + r.F * n(3)((function() {
        return -5 != o(4294967295, 5) || 2 != o.length
    }
    )), "Math", {
        imul: function(e, t) {
            var n = +e
              , r = +t
              , o = 65535 & n
              , i = 65535 & r;
            return 0 | o * i + ((65535 & n >>> 16) * i + o * (65535 & r >>> 16) << 16 >>> 0)
        }
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Math", {
        log10: function(e) {
            return Math.log(e) * Math.LOG10E
        }
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Math", {
        log1p: n(108)
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Math", {
        log2: function(e) {
            return Math.log(e) / Math.LN2
        }
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Math", {
        sign: n(75)
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(76)
      , i = Math.exp;
    r(r.S + r.F * n(3)((function() {
        return -2e-17 != !Math.sinh(-2e-17)
    }
    )), "Math", {
        sinh: function(e) {
            return Math.abs(e = +e) < 1 ? (o(e) - o(-e)) / 2 : (i(e - 1) - i(-e - 1)) * (Math.E / 2)
        }
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(76)
      , i = Math.exp;
    r(r.S, "Math", {
        tanh: function(e) {
            var t = o(e = +e)
              , n = o(-e);
            return t == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t - n) / (i(e) + i(-e))
        }
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Math", {
        trunc: function(e) {
            return (e > 0 ? Math.floor : Math.ceil)(e)
        }
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(35)
      , i = String.fromCharCode
      , s = String.fromCodePoint;
    r(r.S + r.F * (!!s && 1 != s.length), "String", {
        fromCodePoint: function(e) {
            for (var t, n = [], r = arguments.length, s = 0; r > s; ) {
                if (t = +arguments[s++],
                o(t, 1114111) !== t)
                    throw RangeError(t + " is not a valid code point");
                n.push(t < 65536 ? i(t) : i(55296 + ((t -= 65536) >> 10), t % 1024 + 56320))
            }
            return n.join("")
        }
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(15)
      , i = n(6);
    r(r.S, "String", {
        raw: function(e) {
            for (var t = o(e.raw), n = i(t.length), r = arguments.length, s = [], a = 0; n > a; )
                s.push(String(t[a++])),
                a < r && s.push(String(arguments[a]));
            return s.join("")
        }
    })
}
, function(e, t, n) {
    "use strict";
    n(45)("trim", (function(e) {
        return function() {
            return e(this, 3)
        }
    }
    ))
}
, function(e, t, n) {
    "use strict";
    var r = n(55)(!0);
    n(77)(String, "String", (function(e) {
        this._t = String(e),
        this._i = 0
    }
    ), (function() {
        var e, t = this._t, n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = r(t, n),
        this._i += e.length,
        {
            value: e,
            done: !1
        })
    }
    ))
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(55)(!1);
    r(r.P, "String", {
        codePointAt: function(e) {
            return o(this, e)
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(6)
      , i = n(79)
      , s = "".endsWith;
    r(r.P + r.F * n(80)("endsWith"), "String", {
        endsWith: function(e) {
            var t = i(this, e, "endsWith")
              , n = arguments.length > 1 ? arguments[1] : void 0
              , r = o(t.length)
              , a = void 0 === n ? r : Math.min(o(n), r)
              , u = String(e);
            return s ? s.call(t, u, a) : t.slice(a - u.length, a) === u
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(79);
    r(r.P + r.F * n(80)("includes"), "String", {
        includes: function(e) {
            return !!~o(this, e, "includes").indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.P, "String", {
        repeat: n(74)
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(6)
      , i = n(79)
      , s = "".startsWith;
    r(r.P + r.F * n(80)("startsWith"), "String", {
        startsWith: function(e) {
            var t = i(this, e, "startsWith")
              , n = o(Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length))
              , r = String(e);
            return s ? s.call(t, r, n) : t.slice(n, n + r.length) === r
        }
    })
}
, function(e, t, n) {
    "use strict";
    n(13)("anchor", (function(e) {
        return function(t) {
            return e(this, "a", "name", t)
        }
    }
    ))
}
, function(e, t, n) {
    "use strict";
    n(13)("big", (function(e) {
        return function() {
            return e(this, "big", "", "")
        }
    }
    ))
}
, function(e, t, n) {
    "use strict";
    n(13)("blink", (function(e) {
        return function() {
            return e(this, "blink", "", "")
        }
    }
    ))
}
, function(e, t, n) {
    "use strict";
    n(13)("bold", (function(e) {
        return function() {
            return e(this, "b", "", "")
        }
    }
    ))
}
, function(e, t, n) {
    "use strict";
    n(13)("fixed", (function(e) {
        return function() {
            return e(this, "tt", "", "")
        }
    }
    ))
}
, function(e, t, n) {
    "use strict";
    n(13)("fontcolor", (function(e) {
        return function(t) {
            return e(this, "font", "color", t)
        }
    }
    ))
}
, function(e, t, n) {
    "use strict";
    n(13)("fontsize", (function(e) {
        return function(t) {
            return e(this, "font", "size", t)
        }
    }
    ))
}
, function(e, t, n) {
    "use strict";
    n(13)("italics", (function(e) {
        return function() {
            return e(this, "i", "", "")
        }
    }
    ))
}
, function(e, t, n) {
    "use strict";
    n(13)("link", (function(e) {
        return function(t) {
            return e(this, "a", "href", t)
        }
    }
    ))
}
, function(e, t, n) {
    "use strict";
    n(13)("small", (function(e) {
        return function() {
            return e(this, "small", "", "")
        }
    }
    ))
}
, function(e, t, n) {
    "use strict";
    n(13)("strike", (function(e) {
        return function() {
            return e(this, "strike", "", "")
        }
    }
    ))
}
, function(e, t, n) {
    "use strict";
    n(13)("sub", (function(e) {
        return function() {
            return e(this, "sub", "", "")
        }
    }
    ))
}
, function(e, t, n) {
    "use strict";
    n(13)("sup", (function(e) {
        return function() {
            return e(this, "sup", "", "")
        }
    }
    ))
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Date", {
        now: function() {
            return (new Date).getTime()
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(9)
      , i = n(23);
    r(r.P + r.F * n(3)((function() {
        return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
            toISOString: function() {
                return 1
            }
        })
    }
    )), "Date", {
        toJSON: function(e) {
            var t = o(this)
              , n = i(t);
            return "number" != typeof n || isFinite(n) ? t.toISOString() : null
        }
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(212);
    r(r.P + r.F * (Date.prototype.toISOString !== o), "Date", {
        toISOString: o
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(3)
      , o = Date.prototype.getTime
      , i = Date.prototype.toISOString
      , s = function(e) {
        return e > 9 ? e : "0" + e
    };
    e.exports = r((function() {
        return "0385-07-25T07:06:39.999Z" != i.call(new Date(-50000000000001))
    }
    )) || !r((function() {
        i.call(new Date(NaN))
    }
    )) ? function() {
        if (!isFinite(o.call(this)))
            throw RangeError("Invalid time value");
        var e = this
          , t = e.getUTCFullYear()
          , n = e.getUTCMilliseconds()
          , r = t < 0 ? "-" : t > 9999 ? "+" : "";
        return r + ("00000" + Math.abs(t)).slice(r ? -6 : -4) + "-" + s(e.getUTCMonth() + 1) + "-" + s(e.getUTCDate()) + "T" + s(e.getUTCHours()) + ":" + s(e.getUTCMinutes()) + ":" + s(e.getUTCSeconds()) + "." + (n > 99 ? n : "0" + s(n)) + "Z"
    }
    : i
}
, function(e, t, n) {
    var r = Date.prototype
      , o = r.toString
      , i = r.getTime;
    new Date(NaN) + "" != "Invalid Date" && n(12)(r, "toString", (function() {
        var e = i.call(this);
        return e == e ? o.call(this) : "Invalid Date"
    }
    ))
}
, function(e, t, n) {
    var r = n(5)("toPrimitive")
      , o = Date.prototype;
    r in o || n(11)(o, r, n(215))
}
, function(e, t, n) {
    "use strict";
    var r = n(1)
      , o = n(23);
    e.exports = function(e) {
        if ("string" !== e && "number" !== e && "default" !== e)
            throw TypeError("Incorrect hint");
        return o(r(this), "number" != e)
    }
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Array", {
        isArray: n(54)
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(19)
      , o = n(0)
      , i = n(9)
      , s = n(110)
      , a = n(81)
      , u = n(6)
      , c = n(82)
      , l = n(83);
    o(o.S + o.F * !n(57)((function(e) {
        Array.from(e)
    }
    )), "Array", {
        from: function(e) {
            var t, n, o, f, d = i(e), p = "function" == typeof this ? this : Array, h = arguments.length, v = h > 1 ? arguments[1] : void 0, g = void 0 !== v, m = 0, y = l(d);
            if (g && (v = r(v, h > 2 ? arguments[2] : void 0, 2)),
            null == y || p == Array && a(y))
                for (n = new p(t = u(d.length)); t > m; m++)
                    c(n, m, g ? v(d[m], m) : d[m]);
            else
                for (f = y.call(d),
                n = new p; !(o = f.next()).done; m++)
                    c(n, m, g ? s(f, v, [o.value, m], !0) : o.value);
            return n.length = m,
            n
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(82);
    r(r.S + r.F * n(3)((function() {
        function e() {}
        return !(Array.of.call(e)instanceof e)
    }
    )), "Array", {
        of: function() {
            for (var e = 0, t = arguments.length, n = new ("function" == typeof this ? this : Array)(t); t > e; )
                o(n, e, arguments[e++]);
            return n.length = t,
            n
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(15)
      , i = [].join;
    r(r.P + r.F * (n(48) != Object || !n(22)(i)), "Array", {
        join: function(e) {
            return i.call(o(this), void 0 === e ? "," : e)
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(70)
      , i = n(20)
      , s = n(35)
      , a = n(6)
      , u = [].slice;
    r(r.P + r.F * n(3)((function() {
        o && u.call(o)
    }
    )), "Array", {
        slice: function(e, t) {
            var n = a(this.length)
              , r = i(this);
            if (t = void 0 === t ? n : t,
            "Array" == r)
                return u.call(this, e, t);
            for (var o = s(e, n), c = s(t, n), l = a(c - o), f = new Array(l), d = 0; d < l; d++)
                f[d] = "String" == r ? this.charAt(o + d) : this[o + d];
            return f
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(10)
      , i = n(9)
      , s = n(3)
      , a = [].sort
      , u = [1, 2, 3];
    r(r.P + r.F * (s((function() {
        u.sort(void 0)
    }
    )) || !s((function() {
        u.sort(null)
    }
    )) || !n(22)(a)), "Array", {
        sort: function(e) {
            return void 0 === e ? a.call(i(this)) : a.call(i(this), o(e))
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(26)(0)
      , i = n(22)([].forEach, !0);
    r(r.P + r.F * !i, "Array", {
        forEach: function(e) {
            return o(this, e, arguments[1])
        }
    })
}
, function(e, t, n) {
    var r = n(4)
      , o = n(54)
      , i = n(5)("species");
    e.exports = function(e) {
        var t;
        return o(e) && ("function" != typeof (t = e.constructor) || t !== Array && !o(t.prototype) || (t = void 0),
        r(t) && null === (t = t[i]) && (t = void 0)),
        void 0 === t ? Array : t
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(26)(1);
    r(r.P + r.F * !n(22)([].map, !0), "Array", {
        map: function(e) {
            return o(this, e, arguments[1])
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(26)(2);
    r(r.P + r.F * !n(22)([].filter, !0), "Array", {
        filter: function(e) {
            return o(this, e, arguments[1])
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(26)(3);
    r(r.P + r.F * !n(22)([].some, !0), "Array", {
        some: function(e) {
            return o(this, e, arguments[1])
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(26)(4);
    r(r.P + r.F * !n(22)([].every, !0), "Array", {
        every: function(e) {
            return o(this, e, arguments[1])
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(111);
    r(r.P + r.F * !n(22)([].reduce, !0), "Array", {
        reduce: function(e) {
            return o(this, e, arguments.length, arguments[1], !1)
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(111);
    r(r.P + r.F * !n(22)([].reduceRight, !0), "Array", {
        reduceRight: function(e) {
            return o(this, e, arguments.length, arguments[1], !0)
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(52)(!1)
      , i = [].indexOf
      , s = !!i && 1 / [1].indexOf(1, -0) < 0;
    r(r.P + r.F * (s || !n(22)(i)), "Array", {
        indexOf: function(e) {
            return s ? i.apply(this, arguments) || 0 : o(this, e, arguments[1])
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(15)
      , i = n(21)
      , s = n(6)
      , a = [].lastIndexOf
      , u = !!a && 1 / [1].lastIndexOf(1, -0) < 0;
    r(r.P + r.F * (u || !n(22)(a)), "Array", {
        lastIndexOf: function(e) {
            if (u)
                return a.apply(this, arguments) || 0;
            var t = o(this)
              , n = s(t.length)
              , r = n - 1;
            for (arguments.length > 1 && (r = Math.min(r, i(arguments[1]))),
            r < 0 && (r = n + r); r >= 0; r--)
                if (r in t && t[r] === e)
                    return r || 0;
            return -1
        }
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.P, "Array", {
        copyWithin: n(112)
    }),
    n(31)("copyWithin")
}
, function(e, t, n) {
    var r = n(0);
    r(r.P, "Array", {
        fill: n(85)
    }),
    n(31)("fill")
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(26)(5)
      , i = !0;
    "find"in [] && Array(1).find((function() {
        i = !1
    }
    )),
    r(r.P + r.F * i, "Array", {
        find: function(e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    n(31)("find")
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(26)(6)
      , i = "findIndex"
      , s = !0;
    i in [] && Array(1)[i]((function() {
        s = !1
    }
    )),
    r(r.P + r.F * s, "Array", {
        findIndex: function(e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    n(31)(i)
}
, function(e, t, n) {
    n(38)("Array")
}
, function(e, t, n) {
    var r = n(2)
      , o = n(73)
      , i = n(8).f
      , s = n(37).f
      , a = n(56)
      , u = n(50)
      , c = r.RegExp
      , l = c
      , f = c.prototype
      , d = /a/g
      , p = /a/g
      , h = new c(d) !== d;
    if (n(7) && (!h || n(3)((function() {
        return p[n(5)("match")] = !1,
        c(d) != d || c(p) == p || "/a/i" != c(d, "i")
    }
    )))) {
        c = function(e, t) {
            var n = this instanceof c
              , r = a(e)
              , i = void 0 === t;
            return !n && r && e.constructor === c && i ? e : o(h ? new l(r && !i ? e.source : e,t) : l((r = e instanceof c) ? e.source : e, r && i ? u.call(e) : t), n ? this : f, c)
        }
        ;
        for (var v = function(e) {
            e in c || i(c, e, {
                configurable: !0,
                get: function() {
                    return l[e]
                },
                set: function(t) {
                    l[e] = t
                }
            })
        }, g = s(l), m = 0; g.length > m; )
            v(g[m++]);
        f.constructor = c,
        c.prototype = f,
        n(12)(r, "RegExp", c)
    }
    n(38)("RegExp")
}
, function(e, t, n) {
    "use strict";
    n(115);
    var r = n(1)
      , o = n(50)
      , i = n(7)
      , s = /./.toString
      , a = function(e) {
        n(12)(RegExp.prototype, "toString", e, !0)
    };
    n(3)((function() {
        return "/a/b" != s.call({
            source: "a",
            flags: "b"
        })
    }
    )) ? a((function() {
        var e = r(this);
        return "/".concat(e.source, "/", "flags"in e ? e.flags : !i && e instanceof RegExp ? o.call(e) : void 0)
    }
    )) : "toString" != s.name && a((function() {
        return s.call(this)
    }
    ))
}
, function(e, t, n) {
    "use strict";
    var r = n(1)
      , o = n(6)
      , i = n(88)
      , s = n(58);
    n(59)("match", 1, (function(e, t, n, a) {
        return [function(n) {
            var r = e(this)
              , o = null == n ? void 0 : n[t];
            return void 0 !== o ? o.call(n, r) : new RegExp(n)[t](String(r))
        }
        , function(e) {
            var t = a(n, e, this);
            if (t.done)
                return t.value;
            var u = r(e)
              , c = String(this);
            if (!u.global)
                return s(u, c);
            var l = u.unicode;
            u.lastIndex = 0;
            for (var f, d = [], p = 0; null !== (f = s(u, c)); ) {
                var h = String(f[0]);
                d[p] = h,
                "" === h && (u.lastIndex = i(c, o(u.lastIndex), l)),
                p++
            }
            return 0 === p ? null : d
        }
        ]
    }
    ))
}
, function(e, t, n) {
    "use strict";
    var r = n(1)
      , o = n(9)
      , i = n(6)
      , s = n(21)
      , a = n(88)
      , u = n(58)
      , c = Math.max
      , l = Math.min
      , f = Math.floor
      , d = /\$([$&`']|\d\d?|<[^>]*>)/g
      , p = /\$([$&`']|\d\d?)/g;
    n(59)("replace", 2, (function(e, t, n, h) {
        return [function(r, o) {
            var i = e(this)
              , s = null == r ? void 0 : r[t];
            return void 0 !== s ? s.call(r, i, o) : n.call(String(i), r, o)
        }
        , function(e, t) {
            var o = h(n, e, this, t);
            if (o.done)
                return o.value;
            var f = r(e)
              , d = String(this)
              , p = "function" == typeof t;
            p || (t = String(t));
            var g = f.global;
            if (g) {
                var m = f.unicode;
                f.lastIndex = 0
            }
            for (var y = []; ; ) {
                var _ = u(f, d);
                if (null === _)
                    break;
                if (y.push(_),
                !g)
                    break;
                "" === String(_[0]) && (f.lastIndex = a(d, i(f.lastIndex), m))
            }
            for (var b, E = "", w = 0, x = 0; x < y.length; x++) {
                _ = y[x];
                for (var S = String(_[0]), T = c(l(s(_.index), d.length), 0), O = [], N = 1; N < _.length; N++)
                    O.push(void 0 === (b = _[N]) ? b : String(b));
                var C = _.groups;
                if (p) {
                    var I = [S].concat(O, T, d);
                    void 0 !== C && I.push(C);
                    var R = String(t.apply(void 0, I))
                } else
                    R = v(S, d, T, O, C, t);
                T >= w && (E += d.slice(w, T) + R,
                w = T + S.length)
            }
            return E + d.slice(w)
        }
        ];
        function v(e, t, r, i, s, a) {
            var u = r + e.length
              , c = i.length
              , l = p;
            return void 0 !== s && (s = o(s),
            l = d),
            n.call(a, l, (function(n, o) {
                var a;
                switch (o.charAt(0)) {
                case "$":
                    return "$";
                case "&":
                    return e;
                case "`":
                    return t.slice(0, r);
                case "'":
                    return t.slice(u);
                case "<":
                    a = s[o.slice(1, -1)];
                    break;
                default:
                    var l = +o;
                    if (0 === l)
                        return n;
                    if (l > c) {
                        var d = f(l / 10);
                        return 0 === d ? n : d <= c ? void 0 === i[d - 1] ? o.charAt(1) : i[d - 1] + o.charAt(1) : n
                    }
                    a = i[l - 1]
                }
                return void 0 === a ? "" : a
            }
            ))
        }
    }
    ))
}
, function(e, t, n) {
    "use strict";
    var r = n(1)
      , o = n(101)
      , i = n(58);
    n(59)("search", 1, (function(e, t, n, s) {
        return [function(n) {
            var r = e(this)
              , o = null == n ? void 0 : n[t];
            return void 0 !== o ? o.call(n, r) : new RegExp(n)[t](String(r))
        }
        , function(e) {
            var t = s(n, e, this);
            if (t.done)
                return t.value;
            var a = r(e)
              , u = String(this)
              , c = a.lastIndex;
            o(c, 0) || (a.lastIndex = 0);
            var l = i(a, u);
            return o(a.lastIndex, c) || (a.lastIndex = c),
            null === l ? -1 : l.index
        }
        ]
    }
    ))
}
, function(e, t, n) {
    "use strict";
    var r = n(56)
      , o = n(1)
      , i = n(51)
      , s = n(88)
      , a = n(6)
      , u = n(58)
      , c = n(87)
      , l = n(3)
      , f = Math.min
      , d = [].push
      , p = "length"
      , h = !l((function() {
        RegExp(4294967295, "y")
    }
    ));
    n(59)("split", 2, (function(e, t, n, l) {
        var v;
        return v = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[p] || 2 != "ab".split(/(?:ab)*/)[p] || 4 != ".".split(/(.?)(.?)/)[p] || ".".split(/()()/)[p] > 1 || "".split(/.?/)[p] ? function(e, t) {
            var o = String(this);
            if (void 0 === e && 0 === t)
                return [];
            if (!r(e))
                return n.call(o, e, t);
            for (var i, s, a, u = [], l = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), f = 0, h = void 0 === t ? 4294967295 : t >>> 0, v = new RegExp(e.source,l + "g"); (i = c.call(v, o)) && !((s = v.lastIndex) > f && (u.push(o.slice(f, i.index)),
            i[p] > 1 && i.index < o[p] && d.apply(u, i.slice(1)),
            a = i[0][p],
            f = s,
            u[p] >= h)); )
                v.lastIndex === i.index && v.lastIndex++;
            return f === o[p] ? !a && v.test("") || u.push("") : u.push(o.slice(f)),
            u[p] > h ? u.slice(0, h) : u
        }
        : "0".split(void 0, 0)[p] ? function(e, t) {
            return void 0 === e && 0 === t ? [] : n.call(this, e, t)
        }
        : n,
        [function(n, r) {
            var o = e(this)
              , i = null == n ? void 0 : n[t];
            return void 0 !== i ? i.call(n, o, r) : v.call(String(o), n, r)
        }
        , function(e, t) {
            var r = l(v, e, this, t, v !== n);
            if (r.done)
                return r.value;
            var c = o(e)
              , d = String(this)
              , p = i(c, RegExp)
              , g = c.unicode
              , m = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (h ? "y" : "g")
              , y = new p(h ? c : "^(?:" + c.source + ")",m)
              , _ = void 0 === t ? 4294967295 : t >>> 0;
            if (0 === _)
                return [];
            if (0 === d.length)
                return null === u(y, d) ? [d] : [];
            for (var b = 0, E = 0, w = []; E < d.length; ) {
                y.lastIndex = h ? E : 0;
                var x, S = u(y, h ? d : d.slice(E));
                if (null === S || (x = f(a(y.lastIndex + (h ? 0 : E)), d.length)) === b)
                    E = s(d, E, g);
                else {
                    if (w.push(d.slice(b, E)),
                    w.length === _)
                        return w;
                    for (var T = 1; T <= S.length - 1; T++)
                        if (w.push(S[T]),
                        w.length === _)
                            return w;
                    E = b = x
                }
            }
            return w.push(d.slice(b)),
            w
        }
        ]
    }
    ))
}
, function(e, t, n) {
    "use strict";
    var r, o, i, s, a = n(29), u = n(2), c = n(19), l = n(44), f = n(0), d = n(4), p = n(10), h = n(39), v = n(40), g = n(51), m = n(89).set, y = n(90)(), _ = n(91), b = n(116), E = n(60), w = n(117), x = u.TypeError, S = u.process, T = S && S.versions, O = T && T.v8 || "", N = u.Promise, C = "process" == l(S), I = function() {}, R = o = _.f, k = !!function() {
        try {
            var e = N.resolve(1)
              , t = (e.constructor = {})[n(5)("species")] = function(e) {
                e(I, I)
            }
            ;
            return (C || "function" == typeof PromiseRejectionEvent) && e.then(I)instanceof t && 0 !== O.indexOf("6.6") && -1 === E.indexOf("Chrome/66")
        } catch (e) {}
    }(), A = function(e) {
        var t;
        return !(!d(e) || "function" != typeof (t = e.then)) && t
    }, P = function(e, t) {
        if (!e._n) {
            e._n = !0;
            var n = e._c;
            y((function() {
                for (var r = e._v, o = 1 == e._s, i = 0, s = function(t) {
                    var n, i, s, a = o ? t.ok : t.fail, u = t.resolve, c = t.reject, l = t.domain;
                    try {
                        a ? (o || (2 == e._h && L(e),
                        e._h = 1),
                        !0 === a ? n = r : (l && l.enter(),
                        n = a(r),
                        l && (l.exit(),
                        s = !0)),
                        n === t.promise ? c(x("Promise-chain cycle")) : (i = A(n)) ? i.call(n, u, c) : u(n)) : c(r)
                    } catch (e) {
                        l && !s && l.exit(),
                        c(e)
                    }
                }; n.length > i; )
                    s(n[i++]);
                e._c = [],
                e._n = !1,
                t && !e._h && M(e)
            }
            ))
        }
    }, M = function(e) {
        m.call(u, (function() {
            var t, n, r, o = e._v, i = j(e);
            if (i && (t = b((function() {
                C ? S.emit("unhandledRejection", o, e) : (n = u.onunhandledrejection) ? n({
                    promise: e,
                    reason: o
                }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", o)
            }
            )),
            e._h = C || j(e) ? 2 : 1),
            e._a = void 0,
            i && t.e)
                throw t.v
        }
        ))
    }, j = function(e) {
        return 1 !== e._h && 0 === (e._a || e._c).length
    }, L = function(e) {
        m.call(u, (function() {
            var t;
            C ? S.emit("rejectionHandled", e) : (t = u.onrejectionhandled) && t({
                promise: e,
                reason: e._v
            })
        }
        ))
    }, D = function(e) {
        var t = this;
        t._d || (t._d = !0,
        (t = t._w || t)._v = e,
        t._s = 2,
        t._a || (t._a = t._c.slice()),
        P(t, !0))
    }, F = function(e) {
        var t, n = this;
        if (!n._d) {
            n._d = !0,
            n = n._w || n;
            try {
                if (n === e)
                    throw x("Promise can't be resolved itself");
                (t = A(e)) ? y((function() {
                    var r = {
                        _w: n,
                        _d: !1
                    };
                    try {
                        t.call(e, c(F, r, 1), c(D, r, 1))
                    } catch (e) {
                        D.call(r, e)
                    }
                }
                )) : (n._v = e,
                n._s = 1,
                P(n, !1))
            } catch (e) {
                D.call({
                    _w: n,
                    _d: !1
                }, e)
            }
        }
    };
    k || (N = function(e) {
        h(this, N, "Promise", "_h"),
        p(e),
        r.call(this);
        try {
            e(c(F, this, 1), c(D, this, 1))
        } catch (e) {
            D.call(this, e)
        }
    }
    ,
    (r = function(e) {
        this._c = [],
        this._a = void 0,
        this._s = 0,
        this._d = !1,
        this._v = void 0,
        this._h = 0,
        this._n = !1
    }
    ).prototype = n(41)(N.prototype, {
        then: function(e, t) {
            var n = R(g(this, N));
            return n.ok = "function" != typeof e || e,
            n.fail = "function" == typeof t && t,
            n.domain = C ? S.domain : void 0,
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && P(this, !1),
            n.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }),
    i = function() {
        var e = new r;
        this.promise = e,
        this.resolve = c(F, e, 1),
        this.reject = c(D, e, 1)
    }
    ,
    _.f = R = function(e) {
        return e === N || e === s ? new i(e) : o(e)
    }
    ),
    f(f.G + f.W + f.F * !k, {
        Promise: N
    }),
    n(43)(N, "Promise"),
    n(38)("Promise"),
    s = n(18).Promise,
    f(f.S + f.F * !k, "Promise", {
        reject: function(e) {
            var t = R(this);
            return (0,
            t.reject)(e),
            t.promise
        }
    }),
    f(f.S + f.F * (a || !k), "Promise", {
        resolve: function(e) {
            return w(a && this === s ? N : this, e)
        }
    }),
    f(f.S + f.F * !(k && n(57)((function(e) {
        N.all(e).catch(I)
    }
    ))), "Promise", {
        all: function(e) {
            var t = this
              , n = R(t)
              , r = n.resolve
              , o = n.reject
              , i = b((function() {
                var n = []
                  , i = 0
                  , s = 1;
                v(e, !1, (function(e) {
                    var a = i++
                      , u = !1;
                    n.push(void 0),
                    s++,
                    t.resolve(e).then((function(e) {
                        u || (u = !0,
                        n[a] = e,
                        --s || r(n))
                    }
                    ), o)
                }
                )),
                --s || r(n)
            }
            ));
            return i.e && o(i.v),
            n.promise
        },
        race: function(e) {
            var t = this
              , n = R(t)
              , r = n.reject
              , o = b((function() {
                v(e, !1, (function(e) {
                    t.resolve(e).then(n.resolve, r)
                }
                ))
            }
            ));
            return o.e && r(o.v),
            n.promise
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(122)
      , o = n(42);
    n(61)("WeakSet", (function(e) {
        return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }
    ), {
        add: function(e) {
            return r.def(o(this, "WeakSet"), e, !0)
        }
    }, r, !1, !0)
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(62)
      , i = n(92)
      , s = n(1)
      , a = n(35)
      , u = n(6)
      , c = n(4)
      , l = n(2).ArrayBuffer
      , f = n(51)
      , d = i.ArrayBuffer
      , p = i.DataView
      , h = o.ABV && l.isView
      , v = d.prototype.slice
      , g = o.VIEW;
    r(r.G + r.W + r.F * (l !== d), {
        ArrayBuffer: d
    }),
    r(r.S + r.F * !o.CONSTR, "ArrayBuffer", {
        isView: function(e) {
            return h && h(e) || c(e) && g in e
        }
    }),
    r(r.P + r.U + r.F * n(3)((function() {
        return !new d(2).slice(1, void 0).byteLength
    }
    )), "ArrayBuffer", {
        slice: function(e, t) {
            if (void 0 !== v && void 0 === t)
                return v.call(s(this), e);
            for (var n = s(this).byteLength, r = a(e, n), o = a(void 0 === t ? n : t, n), i = new (f(this, d))(u(o - r)), c = new p(this), l = new p(i), h = 0; r < o; )
                l.setUint8(h++, c.getUint8(r++));
            return i
        }
    }),
    n(38)("ArrayBuffer")
}
, function(e, t, n) {
    var r = n(0);
    r(r.G + r.W + r.F * !n(62).ABV, {
        DataView: n(92).DataView
    })
}
, function(e, t, n) {
    n(27)("Int8", 1, (function(e) {
        return function(t, n, r) {
            return e(this, t, n, r)
        }
    }
    ))
}
, function(e, t, n) {
    n(27)("Uint8", 1, (function(e) {
        return function(t, n, r) {
            return e(this, t, n, r)
        }
    }
    ))
}
, function(e, t, n) {
    n(27)("Uint8", 1, (function(e) {
        return function(t, n, r) {
            return e(this, t, n, r)
        }
    }
    ), !0)
}
, function(e, t, n) {
    n(27)("Int16", 2, (function(e) {
        return function(t, n, r) {
            return e(this, t, n, r)
        }
    }
    ))
}
, function(e, t, n) {
    n(27)("Uint16", 2, (function(e) {
        return function(t, n, r) {
            return e(this, t, n, r)
        }
    }
    ))
}
, function(e, t, n) {
    n(27)("Int32", 4, (function(e) {
        return function(t, n, r) {
            return e(this, t, n, r)
        }
    }
    ))
}
, function(e, t, n) {
    n(27)("Uint32", 4, (function(e) {
        return function(t, n, r) {
            return e(this, t, n, r)
        }
    }
    ))
}
, function(e, t, n) {
    n(27)("Float32", 4, (function(e) {
        return function(t, n, r) {
            return e(this, t, n, r)
        }
    }
    ))
}
, function(e, t, n) {
    n(27)("Float64", 8, (function(e) {
        return function(t, n, r) {
            return e(this, t, n, r)
        }
    }
    ))
}
, function(e, t, n) {
    var r = n(0)
      , o = n(10)
      , i = n(1)
      , s = (n(2).Reflect || {}).apply
      , a = Function.apply;
    r(r.S + r.F * !n(3)((function() {
        s((function() {}
        ))
    }
    )), "Reflect", {
        apply: function(e, t, n) {
            var r = o(e)
              , u = i(n);
            return s ? s(r, t, u) : a.call(r, t, u)
        }
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(36)
      , i = n(10)
      , s = n(1)
      , a = n(4)
      , u = n(3)
      , c = n(102)
      , l = (n(2).Reflect || {}).construct
      , f = u((function() {
        function e() {}
        return !(l((function() {}
        ), [], e)instanceof e)
    }
    ))
      , d = !u((function() {
        l((function() {}
        ))
    }
    ));
    r(r.S + r.F * (f || d), "Reflect", {
        construct: function(e, t) {
            i(e),
            s(t);
            var n = arguments.length < 3 ? e : i(arguments[2]);
            if (d && !f)
                return l(e, t, n);
            if (e == n) {
                switch (t.length) {
                case 0:
                    return new e;
                case 1:
                    return new e(t[0]);
                case 2:
                    return new e(t[0],t[1]);
                case 3:
                    return new e(t[0],t[1],t[2]);
                case 4:
                    return new e(t[0],t[1],t[2],t[3])
                }
                var r = [null];
                return r.push.apply(r, t),
                new (c.apply(e, r))
            }
            var u = n.prototype
              , p = o(a(u) ? u : Object.prototype)
              , h = Function.apply.call(e, p, t);
            return a(h) ? h : p
        }
    })
}
, function(e, t, n) {
    var r = n(8)
      , o = n(0)
      , i = n(1)
      , s = n(23);
    o(o.S + o.F * n(3)((function() {
        Reflect.defineProperty(r.f({}, 1, {
            value: 1
        }), 1, {
            value: 2
        })
    }
    )), "Reflect", {
        defineProperty: function(e, t, n) {
            i(e),
            t = s(t, !0),
            i(n);
            try {
                return r.f(e, t, n),
                !0
            } catch (e) {
                return !1
            }
        }
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(16).f
      , i = n(1);
    r(r.S, "Reflect", {
        deleteProperty: function(e, t) {
            var n = o(i(e), t);
            return !(n && !n.configurable) && delete e[t]
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(1)
      , i = function(e) {
        this._t = o(e),
        this._i = 0;
        var t, n = this._k = [];
        for (t in e)
            n.push(t)
    };
    n(78)(i, "Object", (function() {
        var e, t = this._k;
        do {
            if (this._i >= t.length)
                return {
                    value: void 0,
                    done: !0
                }
        } while (!((e = t[this._i++])in this._t));
        return {
            value: e,
            done: !1
        }
    }
    )),
    r(r.S, "Reflect", {
        enumerate: function(e) {
            return new i(e)
        }
    })
}
, function(e, t, n) {
    var r = n(16)
      , o = n(17)
      , i = n(14)
      , s = n(0)
      , a = n(4)
      , u = n(1);
    s(s.S, "Reflect", {
        get: function e(t, n) {
            var s, c, l = arguments.length < 3 ? t : arguments[2];
            return u(t) === l ? t[n] : (s = r.f(t, n)) ? i(s, "value") ? s.value : void 0 !== s.get ? s.get.call(l) : void 0 : a(c = o(t)) ? e(c, n, l) : void 0
        }
    })
}
, function(e, t, n) {
    var r = n(16)
      , o = n(0)
      , i = n(1);
    o(o.S, "Reflect", {
        getOwnPropertyDescriptor: function(e, t) {
            return r.f(i(e), t)
        }
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(17)
      , i = n(1);
    r(r.S, "Reflect", {
        getPrototypeOf: function(e) {
            return o(i(e))
        }
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Reflect", {
        has: function(e, t) {
            return t in e
        }
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(1)
      , i = Object.isExtensible;
    r(r.S, "Reflect", {
        isExtensible: function(e) {
            return o(e),
            !i || i(e)
        }
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Reflect", {
        ownKeys: n(124)
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(1)
      , i = Object.preventExtensions;
    r(r.S, "Reflect", {
        preventExtensions: function(e) {
            o(e);
            try {
                return i && i(e),
                !0
            } catch (e) {
                return !1
            }
        }
    })
}
, function(e, t, n) {
    var r = n(8)
      , o = n(16)
      , i = n(17)
      , s = n(14)
      , a = n(0)
      , u = n(32)
      , c = n(1)
      , l = n(4);
    a(a.S, "Reflect", {
        set: function e(t, n, a) {
            var f, d, p = arguments.length < 4 ? t : arguments[3], h = o.f(c(t), n);
            if (!h) {
                if (l(d = i(t)))
                    return e(d, n, a, p);
                h = u(0)
            }
            if (s(h, "value")) {
                if (!1 === h.writable || !l(p))
                    return !1;
                if (f = o.f(p, n)) {
                    if (f.get || f.set || !1 === f.writable)
                        return !1;
                    f.value = a,
                    r.f(p, n, f)
                } else
                    r.f(p, n, u(0, a));
                return !0
            }
            return void 0 !== h.set && (h.set.call(p, a),
            !0)
        }
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(71);
    o && r(r.S, "Reflect", {
        setPrototypeOf: function(e, t) {
            o.check(e, t);
            try {
                return o.set(e, t),
                !0
            } catch (e) {
                return !1
            }
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(52)(!0);
    r(r.P, "Array", {
        includes: function(e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    n(31)("includes")
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(125)
      , i = n(9)
      , s = n(6)
      , a = n(10)
      , u = n(84);
    r(r.P, "Array", {
        flatMap: function(e) {
            var t, n, r = i(this);
            return a(e),
            t = s(r.length),
            n = u(r, 0),
            o(n, r, r, t, 0, 1, e, arguments[1]),
            n
        }
    }),
    n(31)("flatMap")
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(125)
      , i = n(9)
      , s = n(6)
      , a = n(21)
      , u = n(84);
    r(r.P, "Array", {
        flatten: function() {
            var e = arguments[0]
              , t = i(this)
              , n = s(t.length)
              , r = u(t, 0);
            return o(r, t, t, n, 0, void 0 === e ? 1 : a(e)),
            r
        }
    }),
    n(31)("flatten")
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(55)(!0)
      , i = n(3)((function() {
        return "𠮷" !== "𠮷".at(0)
    }
    ));
    r(r.P + r.F * i, "String", {
        at: function(e) {
            return o(this, e)
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(126)
      , i = n(60)
      , s = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
    r(r.P + r.F * s, "String", {
        padStart: function(e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0, !0)
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(126)
      , i = n(60)
      , s = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
    r(r.P + r.F * s, "String", {
        padEnd: function(e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0, !1)
        }
    })
}
, function(e, t, n) {
    "use strict";
    n(45)("trimLeft", (function(e) {
        return function() {
            return e(this, 1)
        }
    }
    ), "trimStart")
}
, function(e, t, n) {
    "use strict";
    n(45)("trimRight", (function(e) {
        return function() {
            return e(this, 2)
        }
    }
    ), "trimEnd")
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(24)
      , i = n(6)
      , s = n(56)
      , a = n(50)
      , u = RegExp.prototype
      , c = function(e, t) {
        this._r = e,
        this._s = t
    };
    n(78)(c, "RegExp String", (function() {
        var e = this._r.exec(this._s);
        return {
            value: e,
            done: null === e
        }
    }
    )),
    r(r.P, "String", {
        matchAll: function(e) {
            if (o(this),
            !s(e))
                throw TypeError(e + " is not a regexp!");
            var t = String(this)
              , n = "flags"in u ? String(e.flags) : a.call(e)
              , r = new RegExp(e.source,~n.indexOf("g") ? n : "g" + n);
            return r.lastIndex = i(e.lastIndex),
            new c(r,t)
        }
    })
}
, function(e, t, n) {
    n(67)("asyncIterator")
}
, function(e, t, n) {
    n(67)("observable")
}
, function(e, t, n) {
    var r = n(0)
      , o = n(124)
      , i = n(15)
      , s = n(16)
      , a = n(82);
    r(r.S, "Object", {
        getOwnPropertyDescriptors: function(e) {
            for (var t, n, r = i(e), u = s.f, c = o(r), l = {}, f = 0; c.length > f; )
                void 0 !== (n = u(r, t = c[f++])) && a(l, t, n);
            return l
        }
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(127)(!1);
    r(r.S, "Object", {
        values: function(e) {
            return o(e)
        }
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(127)(!0);
    r(r.S, "Object", {
        entries: function(e) {
            return o(e)
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(9)
      , i = n(10)
      , s = n(8);
    n(7) && r(r.P + n(63), "Object", {
        __defineGetter__: function(e, t) {
            s.f(o(this), e, {
                get: i(t),
                enumerable: !0,
                configurable: !0
            })
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(9)
      , i = n(10)
      , s = n(8);
    n(7) && r(r.P + n(63), "Object", {
        __defineSetter__: function(e, t) {
            s.f(o(this), e, {
                set: i(t),
                enumerable: !0,
                configurable: !0
            })
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(9)
      , i = n(23)
      , s = n(17)
      , a = n(16).f;
    n(7) && r(r.P + n(63), "Object", {
        __lookupGetter__: function(e) {
            var t, n = o(this), r = i(e, !0);
            do {
                if (t = a(n, r))
                    return t.get
            } while (n = s(n))
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(9)
      , i = n(23)
      , s = n(17)
      , a = n(16).f;
    n(7) && r(r.P + n(63), "Object", {
        __lookupSetter__: function(e) {
            var t, n = o(this), r = i(e, !0);
            do {
                if (t = a(n, r))
                    return t.set
            } while (n = s(n))
        }
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.P + r.R, "Map", {
        toJSON: n(128)("Map")
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.P + r.R, "Set", {
        toJSON: n(128)("Set")
    })
}
, function(e, t, n) {
    n(64)("Map")
}
, function(e, t, n) {
    n(64)("Set")
}
, function(e, t, n) {
    n(64)("WeakMap")
}
, function(e, t, n) {
    n(64)("WeakSet")
}
, function(e, t, n) {
    n(65)("Map")
}
, function(e, t, n) {
    n(65)("Set")
}
, function(e, t, n) {
    n(65)("WeakMap")
}
, function(e, t, n) {
    n(65)("WeakSet")
}
, function(e, t, n) {
    var r = n(0);
    r(r.G, {
        global: n(2)
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "System", {
        global: n(2)
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(20);
    r(r.S, "Error", {
        isError: function(e) {
            return "Error" === o(e)
        }
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Math", {
        clamp: function(e, t, n) {
            return Math.min(n, Math.max(t, e))
        }
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Math", {
        DEG_PER_RAD: Math.PI / 180
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = 180 / Math.PI;
    r(r.S, "Math", {
        degrees: function(e) {
            return e * o
        }
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(130)
      , i = n(109);
    r(r.S, "Math", {
        fscale: function(e, t, n, r, s) {
            return i(o(e, t, n, r, s))
        }
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Math", {
        iaddh: function(e, t, n, r) {
            var o = e >>> 0
              , i = n >>> 0;
            return (t >>> 0) + (r >>> 0) + ((o & i | (o | i) & ~(o + i >>> 0)) >>> 31) | 0
        }
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Math", {
        isubh: function(e, t, n, r) {
            var o = e >>> 0
              , i = n >>> 0;
            return (t >>> 0) - (r >>> 0) - ((~o & i | ~(o ^ i) & o - i >>> 0) >>> 31) | 0
        }
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Math", {
        imulh: function(e, t) {
            var n = +e
              , r = +t
              , o = 65535 & n
              , i = 65535 & r
              , s = n >> 16
              , a = r >> 16
              , u = (s * i >>> 0) + (o * i >>> 16);
            return s * a + (u >> 16) + ((o * a >>> 0) + (65535 & u) >> 16)
        }
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Math", {
        RAD_PER_DEG: 180 / Math.PI
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = Math.PI / 180;
    r(r.S, "Math", {
        radians: function(e) {
            return e * o
        }
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Math", {
        scale: n(130)
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Math", {
        umulh: function(e, t) {
            var n = +e
              , r = +t
              , o = 65535 & n
              , i = 65535 & r
              , s = n >>> 16
              , a = r >>> 16
              , u = (s * i >>> 0) + (o * i >>> 16);
            return s * a + (u >>> 16) + ((o * a >>> 0) + (65535 & u) >>> 16)
        }
    })
}
, function(e, t, n) {
    var r = n(0);
    r(r.S, "Math", {
        signbit: function(e) {
            return (e = +e) != e ? e : 0 == e ? 1 / e == 1 / 0 : e > 0
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(18)
      , i = n(2)
      , s = n(51)
      , a = n(117);
    r(r.P + r.R, "Promise", {
        finally: function(e) {
            var t = s(this, o.Promise || i.Promise)
              , n = "function" == typeof e;
            return this.then(n ? function(n) {
                return a(t, e()).then((function() {
                    return n
                }
                ))
            }
            : e, n ? function(n) {
                return a(t, e()).then((function() {
                    throw n
                }
                ))
            }
            : e)
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(91)
      , i = n(116);
    r(r.S, "Promise", {
        try: function(e) {
            var t = o.f(this)
              , n = i(e);
            return (n.e ? t.reject : t.resolve)(n.v),
            t.promise
        }
    })
}
, function(e, t, n) {
    var r = n(28)
      , o = n(1)
      , i = r.key
      , s = r.set;
    r.exp({
        defineMetadata: function(e, t, n, r) {
            s(e, t, o(n), i(r))
        }
    })
}
, function(e, t, n) {
    var r = n(28)
      , o = n(1)
      , i = r.key
      , s = r.map
      , a = r.store;
    r.exp({
        deleteMetadata: function(e, t) {
            var n = arguments.length < 3 ? void 0 : i(arguments[2])
              , r = s(o(t), n, !1);
            if (void 0 === r || !r.delete(e))
                return !1;
            if (r.size)
                return !0;
            var u = a.get(t);
            return u.delete(n),
            !!u.size || a.delete(t)
        }
    })
}
, function(e, t, n) {
    var r = n(28)
      , o = n(1)
      , i = n(17)
      , s = r.has
      , a = r.get
      , u = r.key
      , c = function(e, t, n) {
        if (s(e, t, n))
            return a(e, t, n);
        var r = i(t);
        return null !== r ? c(e, r, n) : void 0
    };
    r.exp({
        getMetadata: function(e, t) {
            return c(e, o(t), arguments.length < 3 ? void 0 : u(arguments[2]))
        }
    })
}
, function(e, t, n) {
    var r = n(120)
      , o = n(129)
      , i = n(28)
      , s = n(1)
      , a = n(17)
      , u = i.keys
      , c = i.key
      , l = function(e, t) {
        var n = u(e, t)
          , i = a(e);
        if (null === i)
            return n;
        var s = l(i, t);
        return s.length ? n.length ? o(new r(n.concat(s))) : s : n
    };
    i.exp({
        getMetadataKeys: function(e) {
            return l(s(e), arguments.length < 2 ? void 0 : c(arguments[1]))
        }
    })
}
, function(e, t, n) {
    var r = n(28)
      , o = n(1)
      , i = r.get
      , s = r.key;
    r.exp({
        getOwnMetadata: function(e, t) {
            return i(e, o(t), arguments.length < 3 ? void 0 : s(arguments[2]))
        }
    })
}
, function(e, t, n) {
    var r = n(28)
      , o = n(1)
      , i = r.keys
      , s = r.key;
    r.exp({
        getOwnMetadataKeys: function(e) {
            return i(o(e), arguments.length < 2 ? void 0 : s(arguments[1]))
        }
    })
}
, function(e, t, n) {
    var r = n(28)
      , o = n(1)
      , i = n(17)
      , s = r.has
      , a = r.key
      , u = function(e, t, n) {
        if (s(e, t, n))
            return !0;
        var r = i(t);
        return null !== r && u(e, r, n)
    };
    r.exp({
        hasMetadata: function(e, t) {
            return u(e, o(t), arguments.length < 3 ? void 0 : a(arguments[2]))
        }
    })
}
, function(e, t, n) {
    var r = n(28)
      , o = n(1)
      , i = r.has
      , s = r.key;
    r.exp({
        hasOwnMetadata: function(e, t) {
            return i(e, o(t), arguments.length < 3 ? void 0 : s(arguments[2]))
        }
    })
}
, function(e, t, n) {
    var r = n(28)
      , o = n(1)
      , i = n(10)
      , s = r.key
      , a = r.set;
    r.exp({
        metadata: function(e, t) {
            return function(n, r) {
                a(e, t, (void 0 !== r ? o : i)(n), s(r))
            }
        }
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(90)()
      , i = n(2).process
      , s = "process" == n(20)(i);
    r(r.G, {
        asap: function(e) {
            var t = s && i.domain;
            o(t ? t.bind(e) : e)
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(2)
      , i = n(18)
      , s = n(90)()
      , a = n(5)("observable")
      , u = n(10)
      , c = n(1)
      , l = n(39)
      , f = n(41)
      , d = n(11)
      , p = n(40)
      , h = p.RETURN
      , v = function(e) {
        return null == e ? void 0 : u(e)
    }
      , g = function(e) {
        var t = e._c;
        t && (e._c = void 0,
        t())
    }
      , m = function(e) {
        return void 0 === e._o
    }
      , y = function(e) {
        m(e) || (e._o = void 0,
        g(e))
    }
      , _ = function(e, t) {
        c(e),
        this._c = void 0,
        this._o = e,
        e = new b(this);
        try {
            var n = t(e)
              , r = n;
            null != n && ("function" == typeof n.unsubscribe ? n = function() {
                r.unsubscribe()
            }
            : u(n),
            this._c = n)
        } catch (t) {
            return void e.error(t)
        }
        m(this) && g(this)
    };
    _.prototype = f({}, {
        unsubscribe: function() {
            y(this)
        }
    });
    var b = function(e) {
        this._s = e
    };
    b.prototype = f({}, {
        next: function(e) {
            var t = this._s;
            if (!m(t)) {
                var n = t._o;
                try {
                    var r = v(n.next);
                    if (r)
                        return r.call(n, e)
                } catch (e) {
                    try {
                        y(t)
                    } finally {
                        throw e
                    }
                }
            }
        },
        error: function(e) {
            var t = this._s;
            if (m(t))
                throw e;
            var n = t._o;
            t._o = void 0;
            try {
                var r = v(n.error);
                if (!r)
                    throw e;
                e = r.call(n, e)
            } catch (e) {
                try {
                    g(t)
                } finally {
                    throw e
                }
            }
            return g(t),
            e
        },
        complete: function(e) {
            var t = this._s;
            if (!m(t)) {
                var n = t._o;
                t._o = void 0;
                try {
                    var r = v(n.complete);
                    e = r ? r.call(n, e) : void 0
                } catch (e) {
                    try {
                        g(t)
                    } finally {
                        throw e
                    }
                }
                return g(t),
                e
            }
        }
    });
    var E = function(e) {
        l(this, E, "Observable", "_f")._f = u(e)
    };
    f(E.prototype, {
        subscribe: function(e) {
            return new _(e,this._f)
        },
        forEach: function(e) {
            var t = this;
            return new (i.Promise || o.Promise)((function(n, r) {
                u(e);
                var o = t.subscribe({
                    next: function(t) {
                        try {
                            return e(t)
                        } catch (e) {
                            r(e),
                            o.unsubscribe()
                        }
                    },
                    error: r,
                    complete: n
                })
            }
            ))
        }
    }),
    f(E, {
        from: function(e) {
            var t = "function" == typeof this ? this : E
              , n = v(c(e)[a]);
            if (n) {
                var r = c(n.call(e));
                return r.constructor === t ? r : new t((function(e) {
                    return r.subscribe(e)
                }
                ))
            }
            return new t((function(t) {
                var n = !1;
                return s((function() {
                    if (!n) {
                        try {
                            if (p(e, !1, (function(e) {
                                if (t.next(e),
                                n)
                                    return h
                            }
                            )) === h)
                                return
                        } catch (e) {
                            if (n)
                                throw e;
                            return void t.error(e)
                        }
                        t.complete()
                    }
                }
                )),
                function() {
                    n = !0
                }
            }
            ))
        },
        of: function() {
            for (var e = 0, t = arguments.length, n = new Array(t); e < t; )
                n[e] = arguments[e++];
            return new ("function" == typeof this ? this : E)((function(e) {
                var t = !1;
                return s((function() {
                    if (!t) {
                        for (var r = 0; r < n.length; ++r)
                            if (e.next(n[r]),
                            t)
                                return;
                        e.complete()
                    }
                }
                )),
                function() {
                    t = !0
                }
            }
            ))
        }
    }),
    d(E.prototype, a, (function() {
        return this
    }
    )),
    r(r.G, {
        Observable: E
    }),
    n(38)("Observable")
}
, function(e, t, n) {
    var r = n(2)
      , o = n(0)
      , i = n(60)
      , s = [].slice
      , a = /MSIE .\./.test(i)
      , u = function(e) {
        return function(t, n) {
            var r = arguments.length > 2
              , o = !!r && s.call(arguments, 2);
            return e(r ? function() {
                ("function" == typeof t ? t : Function(t)).apply(this, o)
            }
            : t, n)
        }
    };
    o(o.G + o.B + o.F * a, {
        setTimeout: u(r.setTimeout),
        setInterval: u(r.setInterval)
    })
}
, function(e, t, n) {
    var r = n(0)
      , o = n(89);
    r(r.G + r.B, {
        setImmediate: o.set,
        clearImmediate: o.clear
    })
}
, function(e, t, n) {
    for (var r = n(86), o = n(34), i = n(12), s = n(2), a = n(11), u = n(46), c = n(5), l = c("iterator"), f = c("toStringTag"), d = u.Array, p = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
    }, h = o(p), v = 0; v < h.length; v++) {
        var g, m = h[v], y = p[m], _ = s[m], b = _ && _.prototype;
        if (b && (b[l] || a(b, l, d),
        b[f] || a(b, f, m),
        u[m] = d,
        y))
            for (g in r)
                b[g] || i(b, g, r[g], !0)
    }
}
, function(e, t, n) {
    (function(t) {
        !function(t) {
            "use strict";
            var n = Object.prototype
              , r = n.hasOwnProperty
              , o = "function" == typeof Symbol ? Symbol : {}
              , i = o.iterator || "@@iterator"
              , s = o.asyncIterator || "@@asyncIterator"
              , a = o.toStringTag || "@@toStringTag"
              , u = "object" == typeof e
              , c = t.regeneratorRuntime;
            if (c)
                u && (e.exports = c);
            else {
                (c = t.regeneratorRuntime = u ? e.exports : {}).wrap = v;
                var l = {}
                  , f = {};
                f[i] = function() {
                    return this
                }
                ;
                var d = Object.getPrototypeOf
                  , p = d && d(d(O([])));
                p && p !== n && r.call(p, i) && (f = p);
                var h = _.prototype = m.prototype = Object.create(f);
                y.prototype = h.constructor = _,
                _.constructor = y,
                _[a] = y.displayName = "GeneratorFunction",
                c.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === y || "GeneratorFunction" === (t.displayName || t.name))
                }
                ,
                c.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, _) : (e.__proto__ = _,
                    a in e || (e[a] = "GeneratorFunction")),
                    e.prototype = Object.create(h),
                    e
                }
                ,
                c.awrap = function(e) {
                    return {
                        __await: e
                    }
                }
                ,
                b(E.prototype),
                E.prototype[s] = function() {
                    return this
                }
                ,
                c.AsyncIterator = E,
                c.async = function(e, t, n, r) {
                    var o = new E(v(e, t, n, r));
                    return c.isGeneratorFunction(t) ? o : o.next().then((function(e) {
                        return e.done ? e.value : o.next()
                    }
                    ))
                }
                ,
                b(h),
                h[a] = "Generator",
                h[i] = function() {
                    return this
                }
                ,
                h.toString = function() {
                    return "[object Generator]"
                }
                ,
                c.keys = function(e) {
                    var t = [];
                    for (var n in e)
                        t.push(n);
                    return t.reverse(),
                    function n() {
                        for (; t.length; ) {
                            var r = t.pop();
                            if (r in e)
                                return n.value = r,
                                n.done = !1,
                                n
                        }
                        return n.done = !0,
                        n
                    }
                }
                ,
                c.values = O,
                T.prototype = {
                    constructor: T,
                    reset: function(e) {
                        if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = void 0,
                        this.done = !1,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = void 0,
                        this.tryEntries.forEach(S),
                        !e)
                            for (var t in this)
                                "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type)
                            throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done)
                            throw e;
                        var t = this;
                        function n(n, r) {
                            return s.type = "throw",
                            s.arg = e,
                            t.next = n,
                            r && (t.method = "next",
                            t.arg = void 0),
                            !!r
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o]
                              , s = i.completion;
                            if ("root" === i.tryLoc)
                                return n("end");
                            if (i.tryLoc <= this.prev) {
                                var a = r.call(i, "catchLoc")
                                  , u = r.call(i, "finallyLoc");
                                if (a && u) {
                                    if (this.prev < i.catchLoc)
                                        return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc)
                                        return n(i.finallyLoc)
                                } else if (a) {
                                    if (this.prev < i.catchLoc)
                                        return n(i.catchLoc, !0)
                                } else {
                                    if (!u)
                                        throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc)
                                        return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var s = i ? i.completion : {};
                        return s.type = e,
                        s.arg = t,
                        i ? (this.method = "next",
                        this.next = i.finallyLoc,
                        l) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type)
                            throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                        this.method = "return",
                        this.next = "end") : "normal" === e.type && t && (this.next = t),
                        l
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e)
                                return this.complete(n.completion, n.afterLoc),
                                S(n),
                                l
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    S(n)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: n
                        },
                        "next" === this.method && (this.arg = void 0),
                        l
                    }
                }
            }
            function v(e, t, n, r) {
                var o = t && t.prototype instanceof m ? t : m
                  , i = Object.create(o.prototype)
                  , s = new T(r || []);
                return i._invoke = function(e, t, n) {
                    var r = "suspendedStart";
                    return function(o, i) {
                        if ("executing" === r)
                            throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === o)
                                throw i;
                            return N()
                        }
                        for (n.method = o,
                        n.arg = i; ; ) {
                            var s = n.delegate;
                            if (s) {
                                var a = w(s, n);
                                if (a) {
                                    if (a === l)
                                        continue;
                                    return a
                                }
                            }
                            if ("next" === n.method)
                                n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === r)
                                    throw r = "completed",
                                    n.arg;
                                n.dispatchException(n.arg)
                            } else
                                "return" === n.method && n.abrupt("return", n.arg);
                            r = "executing";
                            var u = g(e, t, n);
                            if ("normal" === u.type) {
                                if (r = n.done ? "completed" : "suspendedYield",
                                u.arg === l)
                                    continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (r = "completed",
                            n.method = "throw",
                            n.arg = u.arg)
                        }
                    }
                }(e, n, s),
                i
            }
            function g(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            function m() {}
            function y() {}
            function _() {}
            function b(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    e[t] = function(e) {
                        return this._invoke(t, e)
                    }
                }
                ))
            }
            function E(e) {
                function n(t, o, i, s) {
                    var a = g(e[t], e, o);
                    if ("throw" !== a.type) {
                        var u = a.arg
                          , c = u.value;
                        return c && "object" == typeof c && r.call(c, "__await") ? Promise.resolve(c.__await).then((function(e) {
                            n("next", e, i, s)
                        }
                        ), (function(e) {
                            n("throw", e, i, s)
                        }
                        )) : Promise.resolve(c).then((function(e) {
                            u.value = e,
                            i(u)
                        }
                        ), s)
                    }
                    s(a.arg)
                }
                var o;
                "object" == typeof t.process && t.process.domain && (n = t.process.domain.bind(n)),
                this._invoke = function(e, t) {
                    function r() {
                        return new Promise((function(r, o) {
                            n(e, t, r, o)
                        }
                        ))
                    }
                    return o = o ? o.then(r, r) : r()
                }
            }
            function w(e, t) {
                var n = e.iterator[t.method];
                if (void 0 === n) {
                    if (t.delegate = null,
                    "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return",
                        t.arg = void 0,
                        w(e, t),
                        "throw" === t.method))
                            return l;
                        t.method = "throw",
                        t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return l
                }
                var r = g(n, e.iterator, t.arg);
                if ("throw" === r.type)
                    return t.method = "throw",
                    t.arg = r.arg,
                    t.delegate = null,
                    l;
                var o = r.arg;
                return o ? o.done ? (t[e.resultName] = o.value,
                t.next = e.nextLoc,
                "return" !== t.method && (t.method = "next",
                t.arg = void 0),
                t.delegate = null,
                l) : o : (t.method = "throw",
                t.arg = new TypeError("iterator result is not an object"),
                t.delegate = null,
                l)
            }
            function x(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function S(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function T(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(x, this),
                this.reset(!0)
            }
            function O(e) {
                if (e) {
                    var t = e[i];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var n = -1
                          , o = function t() {
                            for (; ++n < e.length; )
                                if (r.call(e, n))
                                    return t.value = e[n],
                                    t.done = !1,
                                    t;
                            return t.value = void 0,
                            t.done = !0,
                            t
                        };
                        return o.next = o
                    }
                }
                return {
                    next: N
                }
            }
            function N() {
                return {
                    value: void 0,
                    done: !0
                }
            }
        }("object" == typeof t ? t : "object" == typeof window ? window : "object" == typeof self ? self : this)
    }
    ).call(this, n(94))
}
, function(e, t, n) {
    n(331),
    e.exports = n(18).RegExp.escape
}
, function(e, t, n) {
    var r = n(0)
      , o = n(332)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
    r(r.S, "RegExp", {
        escape: function(e) {
            return o(e)
        }
    })
}
, function(e, t) {
    e.exports = function(e, t) {
        var n = t === Object(t) ? function(e) {
            return t[e]
        }
        : t;
        return function(t) {
            return String(t).replace(e, n)
        }
    }
}
, function(e, t, n) {}
, function(e, t) {
    e.exports = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    ,
    e.exports.__esModule = !0,
    e.exports.default = e.exports
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function() {
        var e = {
            browserName: void 0,
            isSupported: !1
        };
        window.opr && window.opr.addons || window.opera || navigator.userAgent.indexOf(" OPR/") >= 0 ? (e.browserName = "Opera",
        e.isSupported = !0) : "undefined" != typeof InstallTrigger ? (e.browserName = "Firefox",
        e.isSupported = !0) : /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? navigator.userAgent.match("CriOS") ? (e.browserName = "iOS Chrome",
        e.isSupported = !0) : (e.browserName = "Safari",
        e.isSupported = !0) : document.documentMode ? (e.browserName = "Internet Explorer",
        e.isSupported = !1) : /Chrome/.test(navigator.userAgent) && /Edg/.test(navigator.userAgent) ? (e.browserName = "Microsoft Edge",
        e.isSupported = !0) : window.StyleMedia ? (e.browserName = "Microsoft Edge",
        e.isSupported = !0,
        e.isOldEdge = !0) : /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor) && (e.browserName = "Chrome",
        e.isSupported = !0);
        return e
    }
}
, function(e, t, n) {
    n(131),
    e.exports = n(337)
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        n(333),
        n(338);
        var t, r = n(339).default, o = n(340).default, i = !1;
        window.$ = window.jQuery = n(93),
        function() {
            var n;
            if (!e)
                throw new Error("jQuery isn't loaded!");
            if (!baseUrl)
                throw new Error("The baseURL config isn't loaded! Check server setting.");
            if (!o)
                throw new Error("OTPrecall.js is not loaded!");
            if (!r)
                throw new Error("PrecallUI.js is not loaded!");
            !function() {
                var s, a, u, c, l, f, d = location.search.substring(1).split("&");
                for (s = 0; s < d.length; s++)
                    a = d[s].split("="),
                    "apiKey" === decodeURIComponent(a[0]) && (u = decodeURIComponent(a[1])),
                    "audioOnly" === decodeURIComponent(a[0]) && (c = "true" === decodeURIComponent(a[1]));
                l = u ? baseUrl + "/config/apiKey/" + u : baseUrl + "/config",
                (f = new o({
                    configUrl: l,
                    audioOnly: c
                })).on("getConfigFailure", (function(e) {
                    f.logger.error(e),
                    f.logger.alert("Error: Failed to load settings! Please refresh and/or check your internet connection."),
                    f.destroy()
                }
                )).on("getConfigSuccess", (function() {
                    (t = new r("precall_container",baseUrl,f.config,OT,e,c)).init(),
                    t.addSessionIdToSummary(f.config.qualityTestConfig.credentials.sessionId),
                    f.checkBrowser()
                }
                )).on("browserChecked", (function(e) {
                    t.browserUI(e.isSupported, e),
                    n = e.isSupported,
                    i = e.isOldEdge,
                    f.testConnectivity(f.config.qualityTestConfig.credentials)
                }
                )).on("cameraChecked", (function(e) {
                    t.videoUI(e.hasDevice, e),
                    f.checkMicrophone()
                }
                )).on("microphoneChecked", (function(e) {
                    t.micUI(e.hasDevice, e)
                }
                )).on("connectivityTestCompleted", (function(e) {
                    return t.apiServerUI(e.testStatus.api),
                    t.routedServerUI(e.testStatus.media),
                    t.messagingSocketUI(e.testStatus.messaging),
                    t.loggingServerUI(e.testStatus.logging),
                    i ? (c ? f.checkMicrophone() : f.checkCamera(),
                    t.showResults(!0)) : f.testQuality()
                }
                )).on("qosTestStarted", (function(e) {
                    return t.startQosProgressBar(e.timeout),
                    null
                }
                )).on("qosStatsUpdate", (function(e) {
                    t.qosStatsUpdateUI(e)
                }
                )).on("qosTestCompleted", (function(e) {
                    var r = e;
                    t.showResults(),
                    r.audioOnly = c,
                    t.qosTestUI(r),
                    n && (c ? f.checkMicrophone() : f.checkCamera())
                }
                )).on("qosTestError", (function(e) {
                    return this.logger.error(e.error),
                    t.qosTestUI(e),
                    n && (c ? f.checkMicrophone() : f.checkCamera()),
                    e.preventDefault ? (t.showResults(),
                    null) : f.destroy()
                }
                ))
            }()
        }(),
        e(document).ready((function() {
            e("#cancel_button").click((function() {
                history.back()
            }
            )),
            e("#start_new_test").click((function() {
                location.reload()
            }
            ))
        }
        ))
    }
    ).call(this, n(93))
}
, function(e, t, n) {}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function n(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            e.find(t).addClass("precall_panel_error"),
            "" !== n && e.find(n).addClass("precall_panel_header_error")
        }
        function r(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            e.find(t).removeClass("precall_panel_error"),
            "" !== n && e.find(n).removeClass("precall_panel_header_error")
        }
        function o(e, t, n) {
            e.find("".concat(t, " svg use")).attr("xlink:href", n)
        }
        function i(e) {
            return e.toString().match(/^-?\d+(?:\.\d{0,1})?/)[0]
        }
        function s(e, t, n, r, o, i) {
            return this.$ = o,
            this.$el = this.$("#" + e),
            this.charts = {},
            this.config = n,
            this.statusMessages = n.messages,
            this.baseUrl = t,
            this.modalCycleInterval = 3e3,
            this.modalStatusIndex = 0,
            this.$hardwareUI = this.$el.find(".hardware_software_setup"),
            this.$connectivityUI = this.$el.find(".connectivity_tests"),
            this.$qosUI = this.$el.find(".qos_results"),
            this.audioOnly = i,
            this.iconsPath = "".concat(t, "/images/volta-icons.svg"),
            this
        }
        function a(e, t) {
            var n = t[0].toUpperCase() + t.substr(1)
              , r = {}
              , o = []
              , i = -1;
            e.config.qualityTestConfig.qualityThresholds[t].forEach((function(e) {
                r[e.qualityEvaluation] = r[e.qualityEvaluation] || {
                    low: 999999,
                    high: 0
                },
                r[e.qualityEvaluation].low = Math.min(r[e.qualityEvaluation].low, e[t + " kbps"]),
                r[e.qualityEvaluation].high = Math.max(r[e.qualityEvaluation].high, e[t + " kbps"])
            }
            )),
            Object.keys(r).forEach((function(t) {
                o.push({
                    from: 1e3 * r[t].low,
                    to: 1e3 * r[t].high,
                    color: e.config.qualityTestConfig.plotBandColors[++i % e.config.qualityTestConfig.plotBandColors.length],
                    label: {
                        text: t,
                        style: {
                            color: e.config.qualityTestConfig.plotLabelColor,
                            fontSize: "8px"
                        }
                    }
                })
            }
            )),
            i = 0,
            o = o.sort((function(e, t) {
                return e.from - t.from
            }
            )),
            e.$el.find("#" + t + "_bitrate_graph").empty(),
            e.charts[t] = new Highcharts.Chart({
                chart: {
                    type: "spline",
                    renderTo: t + "_bitrate_graph"
                },
                title: {
                    text: n + " Bitrate Stability",
                    style: {
                        fontSize: "14px"
                    }
                },
                subtitle: {
                    text: "Bitrate over seconds",
                    style: {
                        fontSize: "12px"
                    }
                },
                xAxis: {
                    title: {
                        text: "Time elapsed (sec)",
                        style: {
                            fontSize: "8px"
                        }
                    },
                    labels: {
                        formatter: function() {
                            return Math.floor(this.value) + "s"
                        },
                        style: {
                            fontSize: "8px"
                        }
                    }
                },
                yAxis: {
                    title: {
                        text: "Bitrate (bps)",
                        style: {
                            fontSize: "8px"
                        }
                    },
                    min: 0,
                    minorGridLineWidth: 0,
                    gridLineWidth: 0,
                    alternateGridColor: null,
                    plotBands: o,
                    labels: {
                        style: {
                            fontSize: "8px"
                        }
                    }
                },
                tooltip: {
                    headerFormat: "<b>{series.name}</b><br>",
                    pointFormat: "{point.y:.2f} bps"
                },
                plotOptions: {
                    spline: {
                        lineWidth: 2,
                        states: {
                            hover: {
                                lineWidth: 3
                            }
                        },
                        marker: {
                            enabled: !1
                        },
                        pointInterval: 1e3,
                        color: "#0099CC"
                    }
                },
                height: 400,
                legend: !1,
                series: [{
                    name: "bitrate",
                    data: [0],
                    animation: !1
                }]
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = s,
        s.prototype.init = function() {
            this.cycleModal(),
            this.initTooltips(),
            this.setupSummaryNavigator.bind(this)(),
            this.audioOnly && (this.$("#video_check").hide(),
            this.$("#video_bitrate_graph").parent().hide(),
            this.$("#audio_bitrate_graph").parent().css({
                "margin-left": "25%"
            }),
            this.$(".modal_footer, .modal_status text").text((function(e, t) {
                return t.replace("audio/video", "audio")
            }
            ))),
            this.$(".modal_footer").show()
        }
        ,
        s.prototype.cycleModal = function() {
            var e = this;
            this.modalStatusCycler = setInterval((function() {
                e.modalStatusIndex < e.$(".modal_status").children().length ? (e.$(".modal_status text").eq(e.modalStatusIndex++).slideUp((function() {
                    e.$(".modal_status text").eq(e.modalStatusIndex).slideDown()
                }
                )),
                e.modalStatusIndex === e.$(".modal_status").children().length && (e.audioOnly && e.$("#precall_progress_container text").text((function(e, t) {
                    return t.replace("audio/video", "audio")
                }
                )),
                e.$("#precall_progress_container").slideDown())) : clearInterval(e.modalStatusCycler)
            }
            ), this.modalCycleInterval)
        }
        ,
        s.prototype.initTooltips = function() {
            e(".results_tooltip").each((function() {
                e(this).attr("title", "A MOS (mean opinion score) rating is a measure of audio or\n    video quality. In subjective scoring, a user is asked to rate\n    quality from 1 (bad) to 5 (excellent). This precall test uses\n    an objective test, calculating the MOS scores based on bitrate,\n    packet loss ratio, and (for video) resolution. Objective tests\n    limit the range of scores from 1.0 (poor) to 4.5 (excellent).")
            }
            ))
        }
        ,
        s.prototype.setupSummaryNavigator = function() {
            var e = this;
            this.$el.find(".precall_summary_navigation").hover((function() {
                e.$(this).find("div").css("opacity", "0.8")
            }
            ), (function() {
                e.$(this).find("div").css("opacity", "1")
            }
            )),
            this.$el.find(".precall_summary_navigation:nth-child(1)").click((function() {
                e.$(document).find("html, body").animate({
                    scrollTop: e.$el.find(".hardware_software_setup").offset().top
                }, 1e3)
            }
            )),
            this.$el.find(".precall_summary_navigation:nth-child(2)").click((function() {
                e.$(document).find("html, body").animate({
                    scrollTop: e.$el.find(".connectivity_tests").offset().top
                }, 1e3)
            }
            )),
            this.$el.find(".precall_summary_navigation:nth-child(3)").click((function() {
                e.$(document).find("html, body").animate({
                    scrollTop: e.$el.find(".qos_results").offset().top
                }, 1e3)
            }
            ))
        }
        ,
        s.prototype.videoUI = function(e, t) {
            var o, i, s = this;
            function a() {
                (s.cameraPublisher.getImgData() === s.config.hardwareTestConfig.camera.blankGetImgDataString || i === s.cameraPublisher.getImgData()) && (n(s.$el, "#video_check", ".hardware_software_setup"),
                s.$el.find("#video_check .section_name").addClass("section_name_error").text(s.statusMessages.hardwareTest.camera.noData.sectionTitle),
                s.$el.find("#camera_preview img").attr("src", this.baseUrl + "/images/icon-camera-off.png"),
                s.$el.find("#video_check .section_details text").text(s.statusMessages.hardwareTest.camera.noData.sectionMessage),
                s.$el.find("#results_hardware_cam").append("<ul>" + s.statusMessages.hardwareTest.camera.noData.summaryMessage + "</ul>"))
            }
            e ? (this.$el.find("#results_hardware_cam").text(this.statusMessages.hardwareTest.camera.found.summaryMessage),
            this.$el.find("#video_check .section_name").addClass("section_name_success"),
            t.deviceList.forEach((function(e) {
                var t = s.$("<option></option");
                t.text(e.label || "Camera: " + e.deviceId).data("deviceId", e.deviceId),
                s.$el.find("#cam_dropdown").append(t)
            }
            )),
            this.$el.find("#cam_dropdown").on("change", (function() {
                var e = s.$el.find("#cam_dropdown :selected").data("deviceId");
                s.cameraPublisher && (s.cameraPublisher.destroy(),
                null),
                r(s.$el, "#video_check", ".hardware_software_setup"),
                s.$el.find("#video_check .section_name").removeClass("section_name_error").text(s.statusMessages.hardwareTest.camera.init.sectionTitle),
                s.$el.find("#video_check .section_details text").text(s.statusMessages.hardwareTest.camera.init.sectionMessage),
                s.cameraPublisher = OT.initPublisher("camera_preview", {
                    videoSource: e,
                    audioSource: !1,
                    width: "100%",
                    height: "100%",
                    insertMode: "append",
                    style: {
                        buttonDisplayMode: "off"
                    }
                }, (function() {
                    i = s.cameraPublisher.getImgData(),
                    setTimeout(a, s.config.hardwareTestConfig.camera.validationWaitPeriod)
                }
                ))
            }
            )),
            o = this.$el.find("#cam_dropdown :selected").data("deviceId"),
            s.cameraPublisher = OT.initPublisher("camera_preview", {
                videoSource: o,
                audioSource: !1,
                width: "100%",
                height: "100%",
                insertMode: "append"
            }, (function() {
                i = s.cameraPublisher.getImgData(),
                setTimeout(a, s.config.hardwareTestConfig.camera.validationWaitPeriod)
            }
            ))) : (n(s.$el, "#video_check", ".hardware_software_setup"),
            this.$el.find("#camera_preview").prepend("<img src=" + this.baseUrl + "/images/icon-camera-off.png></img>"),
            this.$el.find("#video_check .section_name").addClass("section_name_error").text(this.statusMessages.hardwareTest.camera.missing.sectionTitle),
            this.$el.find("#results_hardware_cam").text(this.statusMessages.hardwareTest.camera.missing.summaryMessage))
        }
        ,
        s.prototype.browserUI = function(e, t) {
            var r, o = this.$("<div></div>");
            e || 1 === OT.checkSystemRequirements() ? (this.$el.find("#browser_test_results").text(this.statusMessages.hardwareTest.browser.supported.sectionMessage.replace("%detectedBrowser%", t.browserName)),
            this.$el.find("#results_hardware_browser").text(this.statusMessages.hardwareTest.browser.supported.summaryMessage.replace("%detectedBrowser%", t.browserName)),
            this.$el.find("#browser_check .section_name").addClass("section_name_success"),
            "Chrome" === t.browserName ? this.$el.find("#browser_preview").prepend("<img src=" + this.baseUrl + "/images/chrome.svg>") : "Firefox" === t.browserName ? this.$el.find("#browser_preview").prepend("<img src=" + this.baseUrl + "/images/firefox.svg>") : "Opera" === t.browserName ? this.$el.find("#browser_preview").prepend("<img src=" + this.baseUrl + "/images/opera.svg>") : "Safari" === t.browserName ? this.$el.find("#browser_preview").prepend("<img src=" + this.baseUrl + "/images/safari.svg>") : "Internet Explorer" === t.browserName ? (this.$el.find("#browser_preview").prepend("<img src=" + this.baseUrl + "/images/browser-ie@2x.png>"),
            t.otPluginInstalled && !0 === t.otPluginInstalled ? r = this.statusMessages.hardwareTest.browser.pluginInstalled.sectionMessage.replace("%detectedBrowser%", t.browserName) : !1 === t.otPluginInstalled && (r = this.statusMessages.hardwareTest.browser.pluginNotInstalled.sectionMessage.replace("%detectedBrowser%", t.browserName),
            n(this.$el, "#browser_check"),
            this.$el.find("#browser_check .section_name").removeClass("section_name_success").addClass("section_name_error").text(this.statusMessages.hardwareTest.browser.pluginNotInstalled.sectionTitle.replace("%detectedBrowser%", t.browserName))),
            o.text(r),
            this.$el.find("#browser_test_results").append(o)) : "Microsoft Edge" === t.browserName && (this.$el.find("#browser_preview").prepend('<img class="edge-logo" src=' + this.baseUrl + "/images/microsoft-edge.svg>"),
            t.isOldEdge && this.$el.find(".edge_note").show())) : (n(this.$el, "#browser_check", ".hardware_software_setup"),
            this.$el.find("#browser_test_results").text(this.statusMessages.hardwareTest.browser.notSupported.sectionTitle.replace("%detectedBrowser%", t.browserName)),
            this.$el.find("#results_hardware_browser").text(this.statusMessages.hardwareTest.browser.notSupported.summaryMessage.replace("%detectedBrowser%", t.browserName)),
            this.$el.find("#browser_preview").prepend("<img src=" + this.baseUrl + "/images/circle-cross.png>"),
            this.$el.find("#browser_check").addClass("setup_error"),
            this.$el.find("#browser_check .section_name").addClass("section_name_error").text(this.statusMessages.hardwareTest.browser.notSupported.sectionMessage.replace("%detectedBrowser%", t.browserName)))
        }
        ,
        s.prototype.micUI = function(e, t) {
            var i, s, a, u = this;
            function c() {
                a || (n(u.$el, "#audio_check", ".hardware_software_setup"),
                u.$el.find("#audio_check .section_name").addClass("section_name_error").text(u.statusMessages.hardwareTest.microphone.noData.sectionTitle),
                u.$el.find("#audio_check .section_details text").text(u.statusMessages.hardwareTest.microphone.noData.sectionMessage),
                u.$el.find("#results_hardware_mic").append("<ul>" + u.statusMessages.hardwareTest.microphone.noData.summaryMessage + "</ul>"),
                o(u.$el, "#mic_preview", "".concat(u.iconsPath, "#Vlt-icon-microphone-mute")))
            }
            t.hasDevice ? (u.$el.find("#results_hardware_mic").text(u.statusMessages.hardwareTest.microphone.found.summaryMessage),
            u.$el.find("#audio_check .section_name").addClass("section_name_success"),
            t.deviceList.forEach((function(e) {
                var t = u.$("<option></option");
                t.text(e.label || "Microphone: " + e.deviceId).data("deviceId", e.deviceId),
                u.$el.find("#mic_dropdown").append(t)
            }
            )),
            u.$el.find("#mic_dropdown").on("change", (function() {
                u.micPublisher && (u.micPublisher.destroy(),
                a = !1),
                r(u.$el, "#audio_check", ".hardware_software_setup"),
                u.$el.find("#audio_check .section_name").removeClass("section_name_error").text(u.statusMessages.hardwareTest.microphone.init.sectionTitle),
                u.$el.find("#audio_check .section_details text").text(u.statusMessages.hardwareTest.microphone.init.sectionMessage),
                o(u.$el, "#mic_preview", "".concat(u.iconsPath, "#Vlt-icon-microphone")),
                s = u.$el.find("#mic_dropdown :selected").data("deviceId"),
                u.micPublisher = OT.initPublisher("mic_preview", {
                    audioSource: s,
                    videoSource: !1,
                    width: "100%",
                    height: "100%",
                    insertMode: "append"
                }, (function() {
                    u.micPublisher.on("audioLevelUpdated", (function(e) {
                        u.$el.find("#volume_level_meter")[0].value = e.audioLevel,
                        u.$(u.$el.find("#volume_level_meter-ie span")[0]).css("width", Math.floor(100 * e.audioLevel) + "%"),
                        a || (a = !0)
                    }
                    )),
                    setTimeout(c, u.config.hardwareTestConfig.mic.validationWaitPeriod)
                }
                ))
            }
            )),
            i = this.$("#mic_dropdown").find("#mic_dropdown :selected").data("deviceId"),
            this.micPublisher = OT.initPublisher("mic_preview", {
                audioSource: i,
                videoSource: !1,
                width: "100%",
                height: "100%",
                insertMode: "append"
            }, (function() {
                u.micPublisher.on("audioLevelUpdated", (function(e) {
                    u.$el.find("#volume_level_meter")[0].value = e.audioLevel,
                    u.$(u.$el.find("#volume_level_meter-ie span")[0]).css("width", Math.floor(100 * e.audioLevel) + "%"),
                    a || (a = !0)
                }
                )),
                setTimeout(c, u.config.hardwareTestConfig.mic.validationWaitPeriod)
            }
            )),
            o(u.$el, "#mic_preview", "".concat(u.iconsPath, "#Vlt-icon-microphone"))) : (o(u.$el, "#mic_preview", "".concat(u.iconsPath, "#Vlt-icon-microphone-mute")),
            n(u.$el, "#audio_check", ".hardware_software_setup"),
            u.$el.find("#audio_check .section_name").addClass("section_name_error").text(u.statusMessages.hardwareTest.microphone.missing.sectionTitle),
            u.$el.find("#results_hardware_mic").text(u.statusMessages.hardwareTest.microphone.missing.summaryMessage))
        }
        ,
        s.prototype.apiServerUI = function(e) {
            "failure" === e ? (n(this.$el, "#api_server_test", ".connectivity_tests"),
            o(this.$el, "#api_server_status", "".concat(this.iconsPath, "#Vlt-icon-cross-circle-negative")),
            this.$el.find("#api_server_status").removeClass("connectivity_test_stopped").addClass("connectivity_test_fail"),
            this.$el.find("#api_results").hide()) : "success" === e && (this.$el.find("#api_server_status").removeClass("connectivity_test_stopped").addClass("connectivity_test_success"),
            this.$el.find("#api_server_test .section_name").addClass("section_name_success").text(this.statusMessages.connectivityTest.api.connected.sectionTitle),
            o(this.$el, "#api_server_status", "".concat(this.iconsPath, "#Vlt-icon-check-circle-negative")),
            this.$el.find("#api_results").text(this.statusMessages.connectivityTest.api.connected.sectionMessage),
            this.$el.find("#results_connectivity_api").text(this.statusMessages.connectivityTest.api.connected.summaryMessage))
        }
        ,
        s.prototype.routedServerUI = function(t) {
            "failure" === t ? (n(this.$el, "#media_server_test", ".connectivity_tests"),
            o(this.$el, "#media_server_status", "".concat(this.iconsPath, "#Vlt-icon-cross-circle-negative")),
            this.$el.find("#media_server_status").removeClass("connectivity_test_stopped").addClass("connectivity_test_fail"),
            this.$el.find("#media_server_test .section_name").addClass("section_name_error"),
            this.$el.find("#routed_results").hide()) : "success" === t ? (this.$el.find("#media_server_status").removeClass("connectivity_test_stopped").addClass("connectivity_test_success"),
            this.$el.find("#media_server_test .section_name").addClass("section_name_success").text(this.statusMessages.connectivityTest.routed.connected.sectionTitle),
            o(this.$el, "#media_server_status", "".concat(this.iconsPath, "#Vlt-icon-check-circle-negative")),
            this.$el.find("#routed_results").text(this.statusMessages.connectivityTest.routed.connected.sectionMessage),
            this.$el.find("#results_connectivity_media").text(this.statusMessages.connectivityTest.routed.connected.summaryMessage)) : "incomplete" === t && (e("#media_test_status").text("Incomplete"),
            e("#routed_results").text("Failed to run test due to API Server connection failure"))
        }
        ,
        s.prototype.messagingSocketUI = function(t) {
            "failure" === t ? (n(this.$el, "#messaging_socket_test", ".connectivity_tests"),
            o(this.$el, "#messaging_socket_status", "".concat(this.iconsPath, "#Vlt-icon-cross-circle-negative")),
            this.$el.find("#messaging_socket_status").removeClass("connectivity_test_stopped").addClass("connectivity_test_fail"),
            this.$el.find("#messaging_socket_test .section_name").addClass("section_name_error"),
            this.$el.find("#messaging_results").hide()) : "success" === t ? (this.$el.find("#messaging_socket_status").removeClass("connectivity_test_stopped").addClass("connectivity_test_success"),
            this.$el.find("#messaging_socket_test .section_name").addClass("section_name_success").text(this.statusMessages.connectivityTest.messaging.connected.sectionTitle),
            o(this.$el, "#messaging_socket_status", "".concat(this.iconsPath, "#Vlt-icon-check-circle-negative")),
            this.$el.find("#messaging_results").text(this.statusMessages.connectivityTest.messaging.connected.sectionMessage),
            this.$el.find("#results_connectivity_media").text(this.statusMessages.connectivityTest.messaging.connected.summaryMessage)) : "incomplete" === t && e("#messaging_results").text("Failed to run test due to API Server connection failure.")
        }
        ,
        s.prototype.loggingServerUI = function(e) {
            var t, r, i = this, s = 0, a = i.$el.find("#precall_progress_bar");
            "failure" === e ? (n(i.$el, "#logging_server_test", ".connectivity_tests"),
            o(i.$el, "#logging_server_status", "".concat(i.iconsPath, "#Vlt-icon-cross-circle-negative")),
            this.$el.find("#logging_server_status").removeClass("connectivity_test_stopped").addClass("connectivity_test_fail"),
            this.$el.find("#logging_server_test .section_name").addClass("section_name_error"),
            this.$el.find("#logging_results").hide()) : "success" === e && (this.$el.find("#logging_server_status").removeClass("connectivity_test_stopped").addClass("connectivity_test_success"),
            o(i.$el, "#logging_server_status", "".concat(i.iconsPath, "#Vlt-icon-check-circle-negative")),
            this.$el.find("#logging_server_test .section_name").addClass("section_name_success").text(this.statusMessages.connectivityTest.logging.connected.sectionTitle),
            this.$el.find("#logging_results").text(this.statusMessages.connectivityTest.logging.connected.sectionMessage),
            this.$el.find("#results_connectivity_logging").text(this.statusMessages.connectivityTest.logging.connected.summaryMessage)),
            t = setInterval((function() {
                ++s <= i.config.qualityTestConfig.testTimeout / 1e3 ? (r = s / (i.config.qualityTestConfig.testTimeout / 1e3) * 100,
                a.attr("value", r)) : clearTimeout(t)
            }
            ), 1e3)
        }
        ,
        s.prototype.qosStatsUpdateUI = function(t) {
            var n, r, o = t[t.length - 1];
            for (n in o)
                o[n] && (e("#" + n + "_bitrate_graph").show(),
                this.charts[n] || a(this, n),
                this.charts[n].series[0].addPoint({
                    x: t.length,
                    y: 8 * o[n].bytesReceived
                }, !0, !1),
                r = "audio-only" === t.phase && "video" === n ? "Testing audio-only stream" : "Bitrate over " + t.length + "sec",
                this.charts[n].setTitle(null, {
                    text: r
                }))
        }
        ,
        s.prototype.qosTestUI = function(t) {
            var r, o, s, a, u, c, l, f, d;
            if (t.error)
                return this.$el.find(".qos_results > Vlt-card__content > :not(.quality_error)").hide(),
                this.$el.find(".quality_error").show(),
                void this.$el.find(".qos_error_message").text(t.error);
            function p(e) {
                return e >= 3.8 ? "Excellent" : e >= 3.1 ? "Good" : e >= 2.4 ? "Fair" : e >= 1.7 ? "Poor" : "Bad"
            }
            for (var h in s = t.video.mos ? i(t.video.mos) + " / 4.5 (" + p(t.video.mos) + ")" : "",
            o = t.audio.mos ? i(t.audio.mos) + " / 4.5 (" + p(t.audio.mos) + ")" : "",
            this.charts)
                (r = document.querySelector("#qos_" + h + " .graph_results_container")).appendChild(document.getElementById(h + "_bitrate_graph")),
                this.charts[h].setSize(r.offsetWidth - 10, 300);
            f = t.video.packetLossRatio > 0 ? (100 * t.video.packetLossRatio).toFixed(2) : 0,
            c = t.audio.packetLossRatio > 0 ? (100 * t.audio.packetLossRatio).toFixed(2) : 0,
            l = t.audio.bitrate > 0 ? Math.round(t.audio.bitrate / 1e3) : 0,
            d = t.video.bitrate > 0 ? Math.round(t.video.bitrate / 1e3) : 0,
            t.video.supported || t.video.bitrate || t.video.packetLossRatio || (this.$el.find("#results_qos_audio_plr").text("Audio Packet loss: ".concat(c, "%")),
            this.$el.find("#results_qos_audio_bitrate").text("Audio Bitrate: ".concat(l, " kbps")),
            this.$el.find("#audio_plr").text("Audio Packet loss: ".concat(c, "%")),
            this.$el.find("#audio_bitrate").text("Audio Bitrate: ".concat(l, " kbps")),
            n(this.$el, "#qos_video"),
            a = t.audioOnly ? this.config.messages.qualityTest.audioOnly.video.sectionTitle : this.config.messages.qualityTest.audioFallback.video.sectionTitle,
            this.$el.find("#qos_video .section_name").addClass("section_name_error").text(a),
            u = t.audioOnly ? this.config.messages.qualityTest.audioOnly.video.sectionMessage : this.config.messages.qualityTest.audioFallback.video.sectionMessage,
            this.$el.find("#video_resolution").text(u),
            this.$el.find("#video_plr").parent().remove(),
            this.$el.find("#video_bitrate").parent().remove(),
            this.$el.find("#results_qos_video_resolution").text(this.config.messages.qualityTest.audioFallback.video.summaryMessage),
            this.$el.find("#qos_audio .section_name").addClass("section_name_success").text("Audio Quality: " + o),
            e("#audio_mos_tooltip").show(),
            this.$el.find("#results_qos_audio_quality").text("Audio Quality: " + o)),
            t.video.supported || t.audio.supported || (this.$el.find("#qos_video .section_name").text(this.config.messages.qualityTest.audioFallback.video.sectionTitle),
            this.$el.find("#video_resolution").text(this.config.messages.qualityTest.audioFallback.video.sectionMessage),
            this.$el.find("#video_plr").parent().remove(),
            this.$el.find("#video_bitrate").parent().remove(),
            this.$el.find("#results_qos_video_resolution").text(this.config.messages.qualityTest.audioFallback.video.summaryMessage),
            n(this.$el, "#qos_audio"),
            this.$el.find("#qos_audio .section_name").addClass("section_name_error").text(this.config.messages.qualityTest.unsupportedAudio),
            this.$el.find("#audio_plr").text("Audio Packet loss: ".concat(c, "%")),
            this.$el.find("#audio_bitrate").text("Audio Bitrate: ".concat(l, " kbps")),
            this.$el.find("#results_qos_audio_plr").text("Audio Packet loss: ".concat(c, "%")),
            this.$el.find("#results_qos_audio_bitrate").text("Audio Bitrate: ".concat(l, " kbps")),
            this.$el.find("#results_qos_audio_quality").text(this.config.messages.qualityTest.unsupportedAudio)),
            this.$el.find("#results_qos_video_plr").text("Video Packet loss: ".concat(f, "%")),
            this.$el.find("#results_qos_video_bitrate").text("Video Bitrate: ".concat(d, " kbps")),
            this.$el.find("#video_plr").text("Video Packet loss: ".concat(f, "%")),
            this.$el.find("#video_bitrate").text("Video Bitrate: ".concat(d, " kbps")),
            t.video.supported ? (this.$el.find("#qos_video .section_name").addClass("section_name_success").text("Video Quality: " + s),
            e("#video_mos_tooltip").show(),
            this.$el.find("#results_qos_video_quality").text("Video Quality: " + s),
            this.$el.find("#video_resolution").text("Supported Resolution: " + t.video.recommendedResolution + " @ " + t.video.recommendedFrameRate + " fps"),
            this.$el.find("#results_qos_video_resolution").text("Recommended Resolution: " + t.video.recommendedResolution + " @ " + t.video.recommendedFrameRate + " fps")) : (n(this.$el, "#qos_video", ".qos_results"),
            this.$el.find("#qos_video .section_name").addClass("section_name_error").text("Video: Unsupported, bandwidth too low"),
            this.$el.find("#video_resolution").text("Video Resolution: " + this.config.messages.qualityTest.recommendedVideoResolution.unsupported),
            this.$el.find("#results_qos_video_resolution").text(this.config.messages.qualityTest.unsupportedVideo)),
            this.$el.find("#results_qos_audio_plr").text("Audio Packet loss: ".concat(c, "%")),
            this.$el.find("#results_qos_audio_bitrate").text("Audio Bitrate: ".concat(l, " kbps")),
            this.$el.find("#audio_plr").text("Audio Packet loss: ".concat(c, "%")),
            this.$el.find("#audio_bitrate").text("Audio Bitrate: ".concat(l, " kbps")),
            t.audio.supported ? t.audio.supported && !t.video.supported ? (this.$el.find("#qos_audio .section_name").text("Audio Quality (audio-only mode): " + o),
            e("#audio_mos_tooltip").show(),
            this.$el.find("#results_qos_audio_quality").text("Audio Quality (audio-only mode): " + o)) : (this.$el.find("#qos_audio .section_name").addClass("section_name_success").text("Audio Quality: " + o),
            e("#audio_mos_tooltip").show(),
            this.$el.find("#results_qos_audio_quality").text("Audio Quality: " + o)) : (n(this.$el, "#qos_audio", ".qos_results"),
            this.$el.find("#qos_audio .section_name").addClass("section_name_error").text("Audio: Unsupported, bandwidth too low"),
            this.$el.find("#results_qos_audio_quality").text("Audio: Unsupported, bandwidth too low")),
            t.audioOnly && (this.$el.find("#qos_video .section_name").addClass("section_name_error").text(this.config.messages.qualityTest.audioOnly.video.sectionTitle),
            this.$el.find("#results_qos_video_quality").text(""),
            this.$el.find("#results_qos_video_resolution").text(""),
            this.$el.find("#results_qos_video_plr").text(""),
            this.$el.find("#results_qos_video_bitrate").text(""),
            this.$el.find("#video_resolution").text(this.config.messages.qualityTest.audioOnly.video.summaryMessage))
        }
        ,
        s.prototype.addSessionIdToSummary = function(e) {
            this.$el.find("#results_sessionid").text("Session ID: " + e)
        }
        ,
        s.prototype.startQosProgressBar = function(e) {
            var t, n, r = 0, o = Math.ceil(e / 1e3), i = this.$el.find("#precall_progress_bar");
            t = setInterval((function() {
                return r > o ? clearInterval(t) : (n = Math.floor(++r / o * 100),
                i.attr("value", n),
                null)
            }
            ), 1e3)
        }
        ,
        s.prototype.showResults = function(e) {
            e && (this.$el.find(".qos_results_row").hide(),
            this.$el.find("#results_qos").hide(),
            this.$el.find(".quality_unsupported").show()),
            this.$el.find(".modal_background").fadeOut(500),
            this.$el.find(".coversheet").fadeOut(500),
            this.$el.find(".main_container").show()
        }
    }
    ).call(this, n(93))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(334);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = c;
        var o, i, s = r(n(341)), a = n(342).default, u = n(335).default;
        function c(e) {
            var t = this;
            return i = e.audioOnly,
            window.$ ? (this.$ = window.$,
            this.window = window,
            this.events = {},
            this.config = {},
            this.cameraPublisher = null,
            this.audioPublisher = null,
            this.qosStats = [],
            this.attempedSubscribe = !1,
            this.completedSubscribe = !1,
            this.ieSubscriberError = !1,
            this.$.ajax({
                url: e.configUrl,
                success: function(e) {
                    e.otClientLibrary || (t.logger.error("Received empty OT client library url."),
                    t.emit("getConfigFailure", {
                        error: "Received empty OT client library url.",
                        response: e
                    })),
                    e.connectivityTestConfig && !t.$.isEmptyObject(e.connectivityTestConfig) || (t.logger.error("Received empty connectivity URL config"),
                    t.emit("getConfigFailure", {
                        error: "Received empty connectivity test URL config",
                        response: e
                    })),
                    e.qualityTestConfig && e.qualityTestConfig.credentials && !t.$.isEmptyObject(e.qualityTestConfig.credentials) || (t.logger.error("Received empty quality test config credentials"),
                    t.emit("getConfigFailure", {
                        error: "Received empty quality test config credentials",
                        response: e
                    })),
                    e.qualityTestConfig && e.qualityTestConfig.testTimeout && !t.$.isEmptyObject(e.qualityTestConfig.testTimeout) || (t.logger.error("Missing quality test config test duration settings"),
                    t.emit("getConfigFailure", {
                        error: "Missing quality test config test duration settings",
                        response: e
                    })),
                    e.qualityTestConfig && e.qualityTestConfig.qualityThresholds && !t.$.isEmptyObject(e.qualityTestConfig.qualityThresholds) || (t.logger.error("Received empty quality test config thresholds list"),
                    t.emit("getConfigFailure", {
                        error: "Received empty quality test config thresholds list",
                        response: e
                    })),
                    t.loadScript(e.otClientLibrary, (function() {
                        t.config = e,
                        t.emit("getConfigSuccess")
                    }
                    ), (function() {
                        this.logger.alert("Failed to load OpenTok"),
                        t.emit("getConfigFailure", {
                            error: "Failed to load OpenTok client library.",
                            response: e
                        })
                    }
                    ))
                },
                error: function(e, n, r) {
                    t.logger.error(r, n),
                    t.emit("getConfigFailure", {
                        error: r,
                        response: n
                    })
                }
            }),
            this) : (this.logger.alert("jQuery isn't loaded!"),
            null)
        }
        c.prototype.logger = {
            error: function() {
                for (var e = 0; e < arguments.length; e++)
                    console.error(arguments[e])
            },
            info: function() {
                for (var e = 0; e < arguments.length; e++)
                    console.info(arguments[e])
            },
            log: function() {
                for (var e = 0; e < arguments.length; e++)
                    console.log(arguments[e])
            },
            dir: function() {
                for (var e = 0; e < arguments.length; e++)
                    console.dir(arguments[e])
            },
            alert: function(e) {
                function t(t) {
                    return e.apply(this, arguments)
                }
                return t.toString = function() {
                    return e.toString()
                }
                ,
                t
            }((function(e) {
                "string" == typeof e && alert(e)
            }
            ))
        },
        c.prototype.loadScript = function(e, t, n) {
            var r = document.createElement("script");
            r.src = e,
            t && r.addEventListener("load", t),
            n && r.addEventListener("error", n),
            document.head.appendChild(r)
        }
        ,
        c.prototype.on = function(e, t) {
            return "string" == typeof e && (this.events[e] = this.events[e] || [],
            this.events[e].push(t),
            this)
        }
        ,
        c.prototype.off = function(e) {
            e ? "string" == typeof e && (this.events[e] = []) : this.events = {}
        }
        ,
        c.prototype.emit = function(e, t) {
            var n = this;
            this.events[e] && this.events[e].forEach((function(e) {
                e.call(n, t)
            }
            ))
        }
        ,
        c.prototype.destroy = function() {
            var e = this;
            Object.keys(this.events).forEach((function(t) {
                e.off(t)
            }
            )),
            this.publisher && this.publisher.destroy(),
            this.subscriber && this.subscriber.destroy(),
            this.session && this.session.destroy()
        }
        ,
        c.prototype.checkCamera = function() {
            var e, t = this;
            this.checkedVideo = !1,
            t.hasVideo = !1,
            OT.getDevices((function(n, r) {
                n ? t.logger.error(n) : (e = r.filter((function(e) {
                    return "videoInput" === e.kind
                }
                )),
                t.hasVideo = 0 !== e.length,
                t.checkedVideo = !0,
                t.emit("cameraChecked", {
                    testType: "video",
                    hasDevice: 0 !== e.length,
                    deviceList: e
                }))
            }
            ))
        }
        ,
        c.prototype.checkMicrophone = function() {
            var e, t = this;
            t.checkedAudio = !1,
            t.hasAudio = !1,
            OT.getDevices((function(n, r) {
                n ? t.logger.error(n) : (e = r.filter((function(e) {
                    return "audioInput" === e.kind
                }
                )),
                t.hasAudio = 0 !== e.length,
                t.checkedAudio = !0,
                t.emit("microphoneChecked", {
                    testType: "audio",
                    hasDevice: 0 !== e.length,
                    deviceList: e
                }))
            }
            ))
        }
        ,
        c.prototype.checkBrowser = function() {
            var e = u();
            this.browserName = e.browserName,
            this.otPluginInstalled = e.otPluginInstalled,
            this.emit("browserChecked", e)
        }
        ,
        c.prototype.startHardwareTests = function() {
            i || this.checkCamera(),
            this.checkMicrophone(),
            this.checkBrowser()
        }
        ,
        c.prototype.testConnectivity = function(t) {
            var n = this;
            o = new a(OT,t,{
                audioOnly: i
            }),
            n.emit("connectivityTestStarted", {
                timeout: n.config.qualityTestConfig.testTimeout.video
            }),
            o.testConnectivity().then((function(t) {
                var r = t;
                r.testStatus = r.failedTests.reduce((function(t, n) {
                    var r = "api" === n.type ? {
                        media: "incomplete",
                        messaging: "incomplete"
                    } : {};
                    return e.extend({}, t, (0,
                    s.default)({}, n.type, "failure"), r)
                }
                ), {
                    api: "success",
                    messaging: "success",
                    media: "success",
                    logging: "success"
                }),
                n.emit("connectivityTestCompleted", r)
            }
            ))
        }
        ,
        c.prototype.testQuality = function() {
            var e = this
              , t = []
              , n = {
                audio: {
                    bytesReceived: 0
                },
                video: {
                    bytesReceived: 0
                }
            };
            e.emit("qosTestStarted", {
                timeout: e.config.qualityTestConfig.testTimeout.video
            }),
            o.testQuality((function(r) {
                var o = {
                    audio: {
                        bytesReceived: r.audio.bytesReceived - n.audio.bytesReceived
                    },
                    video: r.video ? {
                        bytesReceived: r.video.bytesReceived - n.video.bytesReceived
                    } : void 0
                };
                t.push(o),
                n = r,
                e.emit("qosStatsUpdate", t)
            }
            )).then((function(t) {
                e.emit("qosTestCompleted", t)
            }
            )).catch((function(t) {
                var n;
                n = t.message ? t.message.indexOf("Permission Denied") > -1 ? "You must grant the test permission to use the camera and microphone." : t.message : "Error",
                e.emit("qosTestError", {
                    error: n,
                    preventDefault: !0
                })
            }
            ))
        }
        ,
        Array.prototype.forEach || (Array.prototype.forEach = function(e, t) {
            for (var n = 0, r = this.length; n < r; ++n)
                e.call(t, this[n], n, this)
        }
        )
    }
    ).call(this, n(93))
}
, function(e, t) {
    e.exports = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    ,
    e.exports.__esModule = !0,
    e.exports.default = e.exports
}
, function(e, t, n) {
    window,
    e.exports = function(e) {
        var t = {};
        function n(r) {
            if (t[r])
                return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n),
            o.l = !0,
            o.exports
        }
        return n.m = e,
        n.c = t,
        n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }
        ,
        n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        n.t = function(e, t) {
            if (1 & t && (e = n(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var r = Object.create(null);
            if (n.r(r),
            Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }),
            2 & t && "string" != typeof e)
                for (var o in e)
                    n.d(r, o, function(t) {
                        return e[t]
                    }
                    .bind(null, o));
            return r
        }
        ,
        n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return n.d(t, "a", t),
            t
        }
        ,
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        n.p = "",
        n(n.s = 21)
    }([function(e, t, n) {
        "use strict";
        var r = n(8)
          , o = Object.prototype.toString;
        function i(e) {
            return "[object Array]" === o.call(e)
        }
        function s(e) {
            return void 0 === e
        }
        function a(e) {
            return null !== e && "object" == typeof e
        }
        function u(e) {
            if ("[object Object]" !== o.call(e))
                return !1;
            var t = Object.getPrototypeOf(e);
            return null === t || t === Object.prototype
        }
        function c(e) {
            return "[object Function]" === o.call(e)
        }
        function l(e, t) {
            if (null != e)
                if ("object" != typeof e && (e = [e]),
                i(e))
                    for (var n = 0, r = e.length; n < r; n++)
                        t.call(null, e[n], n, e);
                else
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
        }
        e.exports = {
            isArray: i,
            isArrayBuffer: function(e) {
                return "[object ArrayBuffer]" === o.call(e)
            },
            isBuffer: function(e) {
                return null !== e && !s(e) && null !== e.constructor && !s(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            },
            isFormData: function(e) {
                return "undefined" != typeof FormData && e instanceof FormData
            },
            isArrayBufferView: function(e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
            },
            isString: function(e) {
                return "string" == typeof e
            },
            isNumber: function(e) {
                return "number" == typeof e
            },
            isObject: a,
            isPlainObject: u,
            isUndefined: s,
            isDate: function(e) {
                return "[object Date]" === o.call(e)
            },
            isFile: function(e) {
                return "[object File]" === o.call(e)
            },
            isBlob: function(e) {
                return "[object Blob]" === o.call(e)
            },
            isFunction: c,
            isStream: function(e) {
                return a(e) && c(e.pipe)
            },
            isURLSearchParams: function(e) {
                return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
            },
            isStandardBrowserEnv: function() {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
            },
            forEach: l,
            merge: function e() {
                var t = {};
                function n(n, r) {
                    u(t[r]) && u(n) ? t[r] = e(t[r], n) : u(n) ? t[r] = e({}, n) : i(n) ? t[r] = n.slice() : t[r] = n
                }
                for (var r = 0, o = arguments.length; r < o; r++)
                    l(arguments[r], n);
                return t
            },
            extend: function(e, t, n) {
                return l(t, (function(t, o) {
                    e[o] = n && "function" == typeof t ? r(t, n) : t
                }
                )),
                e
            },
            trim: function(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
            },
            stripBOM: function(e) {
                return 65279 === e.charCodeAt(0) && (e = e.slice(1)),
                e
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.assoc = (e,t,n)=>Object.assign({}, n, {
            [e]: t
        }),
        t.assocPath = (e,n,r)=>{
            const o = e.split(".")
              , i = o[0];
            if (!o.length)
                return r;
            if (1 === o.length)
                return t.assoc(i, n, r);
            const s = t.get(i, r)
              , a = s && "object" == typeof s ? s : Object.assign({}, r, {
                [i]: {}
            })
              , u = t.assoc(i, t.assocPath(o.slice(1).join("."), n, t.get(i, a)), r);
            return Object.assign({}, r, u)
        }
        ,
        t.get = (e,n)=>{
            if (!n)
                return n;
            const [r,...o] = e.split(".")
              , i = n[r];
            return null == i ? i : o.length ? t.get(o.join("."), i) : i
        }
        ,
        t.getOr = (e,n,r)=>t.get(n, r) || e,
        t.pick = (e,t,n=!1)=>e.reduce((e,r)=>void 0 !== t[r] || n ? Object.assign({}, e, {
            [r]: t[r]
        }) : e, {}),
        t.pickAll = (e,n)=>t.pick(e, n, !0),
        t.last = e=>e[e.length - 1],
        t.nth = (e,t)=>e < 0 ? t[t.length + e] : t[e],
        t.head = e=>t.nth(0, e)
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = n(1);
        !function(e) {
            e.NETWORK_TEST_ERROR = "NetworkTestError",
            e.MISSING_OPENTOK_INSTANCE = "MissingOpenTokInstanceError",
            e.INCOMPLETE_SESSON_CREDENTIALS = "IncompleteSessionCredentialsError",
            e.MISSING_SESSON_CREDENTIALS = "MissingSessionCredentialsError",
            e.INVALID_ON_UPDATE_CALLBACK = "InvalidOnUpdateCallback",
            e.CONNECTIVITY_ERROR = "ConnectivityError",
            e.API_CONNECTIVITY_ERROR = "APIConnectivityError",
            e.CONNECT_TO_SESSION_ERROR = "ConnectToSessionError",
            e.CONNECT_TO_SESSION_TOKEN_ERROR = "ConnectToSessionTokenError",
            e.CONNECT_TO_SESSION_ID_ERROR = "ConnectToSessionSessionIdError",
            e.CONNECT_TO_SESSION_NETWORK_ERROR = "ConnectToSessionNetworkError",
            e.MEDIA_DEVICE_ERROR = "MediaDeviceError",
            e.FAILED_TO_OBTAIN_MEDIA_DEVICES = "FailedToObtainMediaDevices",
            e.NO_VIDEO_CAPTURE_DEVICES = "NoVideoCaptureDevicesError",
            e.NO_AUDIO_CAPTURE_DEVICES = "NoAudioCaptureDevicesError",
            e.PUBLISH_TO_SESSION_ERROR = "PublishToSessionError",
            e.INIT_PUBLISHER_ERROR = "InitPublisherError",
            e.FAILED_MESSAGING_SERVER_TEST = "FailedMessagingServerTestError",
            e.FAILED_TO_CREATE_LOCAL_PUBLISHER = "FailedToCreateLocalPublisher",
            e.PUBLISH_TO_SESSION_NOT_CONNECTED = "PublishToSessionNotConnectedError",
            e.PUBLISH_TO_SESSION_PERMISSION_OR_TIMEOUT_ERROR = "PublishToSessionPermissionOrTimeoutError",
            e.PUBLISH_TO_SESSION_NETWORK_ERROR = "PublishToSessionNetworkError",
            e.SUBSCRIBE_TO_SESSION_ERROR = "SubscribeToSessionError",
            e.LOGGING_SERVER_CONNECTION_ERROR = "LoggingServerConnectionError",
            e.QUALITY_TEST_ERROR = "QualityTestError",
            e.UNSUPPORTED_BROWSER = "UnsupportedBrowser",
            e.SUBSCRIBER_GET_STATS_ERROR = "SubscriberGetStatsError",
            e.MISSING_SUBSCRIBER_ERROR = "MissingSubscriberError"
        }(t.ErrorNames || (t.ErrorNames = {})),
        function(e) {
            e.JS_EXCEPTION = "JS_EXCEPTION",
            e.OT_AUTHENTICATION_ERROR = "OT_AUTHENTICATION_ERROR",
            e.OT_INVALID_HTTP_STATUS = "OT_INVALID_HTTP_STATUS",
            e.OT_CONNECT_FAILED = "OT_CONNECT_FAILED",
            e.OT_INVALID_SESSION_ID = "OT_INVALID_SESSION_ID",
            e.CONNECT_FAILED = "CONNECT_FAILED",
            e.CONNECT_REJECTED = "CONNECT_REJECTED",
            e.CONNECTION_TIMEOUT = "CONNECTION_TIMEOUT",
            e.NOT_CONNECTED = "NOT_CONNECTED",
            e.INVALID_PARAMETER = "INVALID_PARAMETER",
            e.P2P_CONNECTION_FAILED = "P2P_CONNECTION_FAILED",
            e.API_RESPONSE_FAILURE = "API_RESPONSE_FAILURE",
            e.TERMS_OF_SERVICE_FAILURE = "TERMS_OF_SERVICE_FAILURE",
            e.CONNECTION_LIMIT_EXCEEDED = "CONNECTION_LIMIT_EXCEEDED",
            e.UNABLE_TO_PUBLISH = "UNABLE_TO_PUBLISH",
            e.UNABLE_TO_SUBSCRIBE = "UNABLE_TO_SUBSCRIBE",
            e.UNSUPPORTED_VIDEO_CODEC = "UNSUPPORTED_VIDEO_CODEC",
            e.UNABLE_TO_FORCE_DISCONNECT = "UNABLE_TO_FORCE_DISCONNECT",
            e.UNABLE_TO_FORCE_UNPUBLISH = "UNABLE_TO_FORCE_UNPUBLISH",
            e.PUBLISHER_ICE_WORKFLOW_FAILED = "PUBLISHER_ICE_WORKFLOW_FAILED",
            e.SUBSCRIBER_ICE_WORKFLOW_FAILED = "SUBSCRIBER_ICE_WORKFLOW_FAILED",
            e.STREAM_LIMIT_EXCEEDED = "STREAM_LIMIT_EXCEEDED",
            e.UNEXPECTED_SERVER_RESPONSE = "UNEXPECTED_SERVER_RESPONSE",
            e.REPORT_ISSUE_ERROR = "REPORT_ISSUE_ERROR",
            e.ANVIL_BADLY_FORMED_RESPONSE = "ANVIL_BADLY_FORMED_RESPONSE",
            e.ANVIL_INVALID_HTTP_STATUS = "ANVIL_INVALID_HTTP_STATUS",
            e.ANVIL_XDOMAIN_OR_PARSING_ERROR = "ANVIL_XDOMAIN_OR_PARSING_ERROR",
            e.ANVIL_UNKNOWN_HTTP_ERROR = "ANVIL_UNKNOWN_HTTP_ERROR",
            e.ANVIL_UNEXPECTED_ERROR_CODE = "ANVIL_UNEXPECTED_ERROR_CODE",
            e.ANVIL_EMPTY_RESPONSE_BODY = "ANVIL_EMPTY_RESPONSE_BODY",
            e.ANVIL_CONNECT_FAILED = "ANVIL_CONNECT_FAILED"
        }(t.OTErrorType || (t.OTErrorType = {})),
        t.errorHasName = (e=null,t)=>r.get("name", e) === t
    }
    , function(e, t, n) {
        "use strict";
        var r = n(17);
        function o() {}
        var i = null
          , s = {};
        function a(e) {
            if ("object" != typeof this)
                throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e)
                throw new TypeError("Promise constructor's argument is not a function");
            this._U = 0,
            this._V = 0,
            this._W = null,
            this._X = null,
            e !== o && p(e, this)
        }
        function u(e, t) {
            for (; 3 === e._V; )
                e = e._W;
            if (a._Y && a._Y(e),
            0 === e._V)
                return 0 === e._U ? (e._U = 1,
                void (e._X = t)) : 1 === e._U ? (e._U = 2,
                void (e._X = [e._X, t])) : void e._X.push(t);
            !function(e, t) {
                r((function() {
                    var n = 1 === e._V ? t.onFulfilled : t.onRejected;
                    if (null !== n) {
                        var r = function(e, t) {
                            try {
                                return e(t)
                            } catch (e) {
                                return i = e,
                                s
                            }
                        }(n, e._W);
                        r === s ? l(t.promise, i) : c(t.promise, r)
                    } else
                        1 === e._V ? c(t.promise, e._W) : l(t.promise, e._W)
                }
                ))
            }(e, t)
        }
        function c(e, t) {
            if (t === e)
                return l(e, new TypeError("A promise cannot be resolved with itself."));
            if (t && ("object" == typeof t || "function" == typeof t)) {
                var n = function(e) {
                    try {
                        return e.then
                    } catch (e) {
                        return i = e,
                        s
                    }
                }(t);
                if (n === s)
                    return l(e, i);
                if (n === e.then && t instanceof a)
                    return e._V = 3,
                    e._W = t,
                    void f(e);
                if ("function" == typeof n)
                    return void p(n.bind(t), e)
            }
            e._V = 1,
            e._W = t,
            f(e)
        }
        function l(e, t) {
            e._V = 2,
            e._W = t,
            a._Z && a._Z(e, t),
            f(e)
        }
        function f(e) {
            if (1 === e._U && (u(e, e._X),
            e._X = null),
            2 === e._U) {
                for (var t = 0; t < e._X.length; t++)
                    u(e, e._X[t]);
                e._X = null
            }
        }
        function d(e, t, n) {
            this.onFulfilled = "function" == typeof e ? e : null,
            this.onRejected = "function" == typeof t ? t : null,
            this.promise = n
        }
        function p(e, t) {
            var n = !1
              , r = function(e, t, n) {
                try {
                    e(t, n)
                } catch (e) {
                    return i = e,
                    s
                }
            }(e, (function(e) {
                n || (n = !0,
                c(t, e))
            }
            ), (function(e) {
                n || (n = !0,
                l(t, e))
            }
            ));
            n || r !== s || (n = !0,
            l(t, i))
        }
        e.exports = a,
        a._Y = null,
        a._Z = null,
        a._0 = o,
        a.prototype.then = function(e, t) {
            if (this.constructor !== a)
                return function(e, t, n) {
                    return new e.constructor((function(r, i) {
                        var s = new a(o);
                        s.then(r, i),
                        u(e, new d(t,n,s))
                    }
                    ))
                }(this, e, t);
            var n = new a(o);
            return u(this, new d(e,t,n)),
            n
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            getStatsInterval: 1e3,
            getStatsVideoAndAudioTestDuration: 3e4,
            getStatsAudioOnlyDuration: 1e4,
            subscribeOptions: {
                testNetwork: !0,
                audioVolume: 0
            },
            minimumVideoAndAudioTestSampleSize: 5,
            steadyStateSampleWindow: 5e3,
            steadyStateAllowedDelta: .05,
            qualityThresholds: {
                video: [{
                    bps: 1e6,
                    plr: .005,
                    recommendedSetting: "1280x720 @ 30FPS"
                }, {
                    bps: 6e5,
                    plr: .005,
                    recommendedSetting: "640x480 @ 30FPS"
                }, {
                    bps: 3e5,
                    plr: .005,
                    recommendedSetting: "320x240 @ 30FPS"
                }, {
                    bps: 35e4,
                    plr: .03,
                    recommendedSetting: "1280x720 @ 30FPS"
                }, {
                    bps: 25e4,
                    plr: .03,
                    recommendedSetting: "640x480 @ 30FPS"
                }, {
                    bps: 15e4,
                    plr: .03,
                    recommendedSetting: "320x240 @ 30FPS"
                }],
                audio: [{
                    minMos: 2.4
                }]
            },
            strings: {
                bandwidthLow: "Bandwidth too low.",
                noCam: "No camera was found.",
                noMic: "No microphone was found."
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        (function(t) {
            var r = n(0)
              , o = n(30)
              , i = n(10)
              , s = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
            function a(e, t) {
                !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }
            var u, c = {
                transitional: {
                    silentJSONParsing: !0,
                    forcedJSONParsing: !0,
                    clarifyTimeoutError: !1
                },
                adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== t && "[object process]" === Object.prototype.toString.call(t)) && (u = n(11)),
                u),
                transformRequest: [function(e, t) {
                    return o(t, "Accept"),
                    o(t, "Content-Type"),
                    r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString()) : r.isObject(e) || t && "application/json" === t["Content-Type"] ? (a(t, "application/json"),
                    JSON.stringify(e)) : e
                }
                ],
                transformResponse: [function(e) {
                    var t = this.transitional
                      , n = t && t.silentJSONParsing
                      , o = t && t.forcedJSONParsing
                      , s = !n && "json" === this.responseType;
                    if (s || o && r.isString(e) && e.length)
                        try {
                            return JSON.parse(e)
                        } catch (e) {
                            if (s) {
                                if ("SyntaxError" === e.name)
                                    throw i(e, this, "E_JSON_PARSE");
                                throw e
                            }
                        }
                    return e
                }
                ],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                validateStatus: function(e) {
                    return e >= 200 && e < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }
            };
            r.forEach(["delete", "get", "head"], (function(e) {
                c.headers[e] = {}
            }
            )),
            r.forEach(["post", "put", "patch"], (function(e) {
                c.headers[e] = r.merge(s)
            }
            )),
            e.exports = c
        }
        ).call(this, n(29))
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = n(2);
        class o extends Error {
            constructor(e, t) {
                super(e),
                this.name = t || r.ErrorNames.NETWORK_TEST_ERROR,
                this.stack = new Error(e).stack
            }
        }
        t.NetworkTestError = o,
        t.MissingOpenTokInstanceError = class extends o {
            constructor() {
                super("An instance of OT, the OpenTok.js client SDK, is required."),
                this.name = r.ErrorNames.MISSING_OPENTOK_INSTANCE
            }
        }
        ,
        t.IncompleteSessionCredentialsError = class extends o {
            constructor() {
                super("NetworkConnectivity requires an apiKey, sessionId, and token.", r.ErrorNames.INCOMPLETE_SESSON_CREDENTIALS)
            }
        }
        ,
        t.MissingSessionCredentialsError = class extends o {
            constructor() {
                super("NetworkConnectivity requires OpenTok session credentials.", r.ErrorNames.MISSING_SESSON_CREDENTIALS)
            }
        }
        ,
        t.InvalidOnUpdateCallback = class extends o {
            constructor() {
                super("The onUpdate callback must be a function that accepts a single parameter.", r.ErrorNames.INVALID_ON_UPDATE_CALLBACK)
            }
        }
    }
    , function(e, t, n) {
        e.exports = n(24)
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            return function() {
                for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
                    n[r] = arguments[r];
                return e.apply(t, n)
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0);
        function o(e) {
            return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        e.exports = function(e, t, n) {
            if (!t)
                return e;
            var i;
            if (n)
                i = n(t);
            else if (r.isURLSearchParams(t))
                i = t.toString();
            else {
                var s = [];
                r.forEach(t, (function(e, t) {
                    null != e && (r.isArray(e) ? t += "[]" : e = [e],
                    r.forEach(e, (function(e) {
                        r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)),
                        s.push(o(t) + "=" + o(e))
                    }
                    )))
                }
                )),
                i = s.join("&")
            }
            if (i) {
                var a = e.indexOf("#");
                -1 !== a && (e = e.slice(0, a)),
                e += (-1 === e.indexOf("?") ? "?" : "&") + i
            }
            return e
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e, t, n, r, o) {
            return e.config = t,
            n && (e.code = n),
            e.request = r,
            e.response = o,
            e.isAxiosError = !0,
            e.toJSON = function() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code
                }
            }
            ,
            e
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , o = n(31)
          , i = n(32)
          , s = n(9)
          , a = n(33)
          , u = n(36)
          , c = n(37)
          , l = n(12);
        e.exports = function(e) {
            return new Promise((function(t, n) {
                var f = e.data
                  , d = e.headers
                  , p = e.responseType;
                r.isFormData(f) && delete d["Content-Type"];
                var h = new XMLHttpRequest;
                if (e.auth) {
                    var v = e.auth.username || ""
                      , g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                    d.Authorization = "Basic " + btoa(v + ":" + g)
                }
                var m = a(e.baseURL, e.url);
                function y() {
                    if (h) {
                        var r = "getAllResponseHeaders"in h ? u(h.getAllResponseHeaders()) : null
                          , i = {
                            data: p && "text" !== p && "json" !== p ? h.response : h.responseText,
                            status: h.status,
                            statusText: h.statusText,
                            headers: r,
                            config: e,
                            request: h
                        };
                        o(t, n, i),
                        h = null
                    }
                }
                if (h.open(e.method.toUpperCase(), s(m, e.params, e.paramsSerializer), !0),
                h.timeout = e.timeout,
                "onloadend"in h ? h.onloadend = y : h.onreadystatechange = function() {
                    h && 4 === h.readyState && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:")) && setTimeout(y)
                }
                ,
                h.onabort = function() {
                    h && (n(l("Request aborted", e, "ECONNABORTED", h)),
                    h = null)
                }
                ,
                h.onerror = function() {
                    n(l("Network Error", e, null, h)),
                    h = null
                }
                ,
                h.ontimeout = function() {
                    var t = "timeout of " + e.timeout + "ms exceeded";
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                    n(l(t, e, e.transitional && e.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", h)),
                    h = null
                }
                ,
                r.isStandardBrowserEnv()) {
                    var _ = (e.withCredentials || c(m)) && e.xsrfCookieName ? i.read(e.xsrfCookieName) : void 0;
                    _ && (d[e.xsrfHeaderName] = _)
                }
                "setRequestHeader"in h && r.forEach(d, (function(e, t) {
                    void 0 === f && "content-type" === t.toLowerCase() ? delete d[t] : h.setRequestHeader(t, e)
                }
                )),
                r.isUndefined(e.withCredentials) || (h.withCredentials = !!e.withCredentials),
                p && "json" !== p && (h.responseType = e.responseType),
                "function" == typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress),
                "function" == typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress),
                e.cancelToken && e.cancelToken.promise.then((function(e) {
                    h && (h.abort(),
                    n(e),
                    h = null)
                }
                )),
                f || (f = null),
                h.send(f)
            }
            ))
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(10);
        e.exports = function(e, t, n, o, i) {
            var s = new Error(e);
            return r(s, t, n, o, i)
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return !(!e || !e.__CANCEL__)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = function(e, t) {
            t = t || {};
            var n = {}
              , o = ["url", "method", "data"]
              , i = ["headers", "auth", "proxy", "params"]
              , s = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"]
              , a = ["validateStatus"];
            function u(e, t) {
                return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t
            }
            function c(o) {
                r.isUndefined(t[o]) ? r.isUndefined(e[o]) || (n[o] = u(void 0, e[o])) : n[o] = u(e[o], t[o])
            }
            r.forEach(o, (function(e) {
                r.isUndefined(t[e]) || (n[e] = u(void 0, t[e]))
            }
            )),
            r.forEach(i, c),
            r.forEach(s, (function(o) {
                r.isUndefined(t[o]) ? r.isUndefined(e[o]) || (n[o] = u(void 0, e[o])) : n[o] = u(void 0, t[o])
            }
            )),
            r.forEach(a, (function(r) {
                r in t ? n[r] = u(e[r], t[r]) : r in e && (n[r] = u(void 0, e[r]))
            }
            ));
            var l = o.concat(i).concat(s).concat(a)
              , f = Object.keys(e).concat(Object.keys(t)).filter((function(e) {
                return -1 === l.indexOf(e)
            }
            ));
            return r.forEach(f, c),
            n
        }
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {
            this.message = e
        }
        r.prototype.toString = function() {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }
        ,
        r.prototype.__CANCEL__ = !0,
        e.exports = r
    }
    , function(e, t, n) {
        "use strict";
        e.exports = n(43)
    }
    , function(e, t, n) {
        "use strict";
        (function(t) {
            function n(e) {
                o.length || r(),
                o[o.length] = e
            }
            e.exports = n;
            var r, o = [], i = 0;
            function s() {
                for (; i < o.length; ) {
                    var e = i;
                    if (i += 1,
                    o[e].call(),
                    i > 1024) {
                        for (var t = 0, n = o.length - i; t < n; t++)
                            o[t] = o[t + i];
                        o.length -= i,
                        i = 0
                    }
                }
                o.length = 0,
                i = 0
            }
            var a, u, c, l = void 0 !== t ? t : self, f = l.MutationObserver || l.WebKitMutationObserver;
            function d(e) {
                return function() {
                    var t = setTimeout(r, 0)
                      , n = setInterval(r, 50);
                    function r() {
                        clearTimeout(t),
                        clearInterval(n),
                        e()
                    }
                }
            }
            "function" == typeof f ? (a = 1,
            u = new f(s),
            c = document.createTextNode(""),
            u.observe(c, {
                characterData: !0
            }),
            r = function() {
                a = -a,
                c.data = a
            }
            ) : r = d(s),
            n.requestFlush = r,
            n.makeRequestCallFromTimer = d
        }
        ).call(this, n(44))
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = n(4)
          , o = n(1);
        t.default = function(e) {
            const t = o.getOr(0, "timestamp", o.last(e)) - r.default.steadyStateSampleWindow;
            return e.filter(e=>e.timestamp >= t)
        }
    }
    , function(e, t, n) {
        "use strict";
        function r(e, t) {
            const n = [];
            for (let r = 1; r < t.length; r += 1) {
                const o = t[r]
                  , i = t[r - 1];
                if (o[e] && i[e]) {
                    const t = 8 * (o[e].bytesReceived ? o[e].bytesReceived - i[e].bytesReceived : 0) / ((o.timestamp - i.timestamp) / 1e3)
                      , r = o[e].packetsReceived
                      , s = o[e].packetsLost
                      , a = s + r;
                    let u = 0;
                    a > 0 && s > 0 && (u = s / a);
                    const c = "video" === e ? {
                        frameRate: o[e].frameRate
                    } : {};
                    n.push(Object.assign({
                        averageBitrate: t,
                        packetLossRatio: u
                    }, c))
                }
            }
            return n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            if (e.length < 2)
                throw new Error("Cannot calculate bitrate with less than two data points.");
            return {
                audio: r("audio", e),
                video: r("video", e)
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        class r {
            constructor(e) {
                this.stats = {
                    audio: {},
                    video: {}
                },
                this.bandwidth = {
                    audio: 0,
                    video: 0
                },
                this.hasAudioTrack = ()=>this.statsLog[0] && !!this.statsLog[0].audio,
                this.hasVideoTrack = ()=>this.statsLog[0] && !!this.statsLog[0].video,
                this.statsLog = [],
                this.audioScoresLog = [],
                this.videoScoresLog = [],
                this.audioOnlyFallback = !!e
            }
            audioScore() {
                return this.audioScoresLog.reduce((e,t)=>e + t, 0) / this.audioScoresLog.length
            }
            videoScore() {
                return this.videoScoresLog.reduce((e,t)=>e + t, 0) / this.videoScoresLog.length
            }
            clearInterval() {
                this.intervalId && window.clearInterval(this.intervalId),
                this.intervalId = void 0
            }
            pruneAudioScores() {
                const e = this.audioScoresLog;
                for (; e.length > r.maxLogLength; )
                    e.shift();
                this.audioScoresLog = e
            }
            pruneVideoScores() {
                const e = this.videoScoresLog;
                for (; e.length > r.maxLogLength; )
                    e.shift();
                this.videoScoresLog = e
            }
            pruneScores() {
                this.pruneAudioScores(),
                this.pruneVideoScores()
            }
            audioQualityScore() {
                return this.hasAudioTrack() ? this.audioScore() : 1
            }
            videoQualityScore() {
                return this.hasVideoTrack() ? this.videoScore() : 1
            }
        }
        r.maxLogLength = 1e3,
        r.scoreInterval = 1e3,
        t.default = r
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = n(22).version
          , o = n(23)
          , i = n(53)
          , s = n(6)
          , a = n(61);
        t.default = class {
            constructor(e, t, n) {
                this.validateOT(e),
                this.validateCredentials(t);
                const r = this.validateProxyUrl(n);
                this.otLogging = this.startLoggingEngine(t.apiKey, t.sessionId, r),
                this.OT = e,
                this.credentials = t,
                this.options = n,
                this.setProxyUrl(r)
            }
            validateOT(e) {
                if (!e || "object" != typeof e || !e.initSession)
                    throw new s.MissingOpenTokInstanceError
            }
            validateCredentials(e) {
                if (!e)
                    throw new s.MissingSessionCredentialsError;
                if (!e.apiKey || !e.sessionId || !e.token)
                    throw new s.IncompleteSessionCredentialsError
            }
            validateProxyUrl(e) {
                return e && e.proxyServerUrl ? e.proxyServerUrl : ""
            }
            setProxyUrl(e) {
                this.OT.setProxyUrl && "function" == typeof this.OT.setProxyUrl && e && this.OT.setProxyUrl(e)
            }
            startLoggingEngine(e, t, n) {
                return new a({
                    sessionId: t,
                    partnerId: e,
                    source: window.location.href,
                    clientVersion: "js-network-test-" + r,
                    name: "opentok-network-test",
                    componentId: "opentok-network-test"
                },{
                    proxyUrl: n
                })
            }
            testConnectivity() {
                return this.otLogging.logEvent({
                    action: "testConnectivity",
                    variation: "Attempt"
                }),
                o.testConnectivity(this.OT, this.credentials, this.otLogging, this.options)
            }
            testQuality(e) {
                if (this.otLogging.logEvent({
                    action: "testQuality",
                    variation: "Attempt"
                }),
                e && ("function" != typeof e || 1 !== e.length))
                    throw this.otLogging.logEvent({
                        action: "testQuality",
                        variation: "Failure"
                    }),
                    new s.InvalidOnUpdateCallback;
                return i.testQuality(this.OT, this.credentials, this.otLogging, this.options, e)
            }
            stop() {
                i.stopQualityTest()
            }
        }
        ;
        var u = n(2);
        t.ErrorNames = u.ErrorNames
    }
    , function(e) {
        e.exports = JSON.parse('{"name":"opentok-network-test-js","version":"2.5.0","description":"Precall network test for applications using the OpenTok platform.","main":"dist/NetworkTest/index.js","types":"dist/NetworkTest/index.d.ts","scripts":{"build":"rm -rf dist && webpack --config webpack.config.js","test-setup":"node test/setup/setup.js","test-teardown":"rm test/credentials.json","karma":"karma start","test":"npm run test-setup && npm run karma && npm run test-teardown","example":"npm run build && cd sample && npm run build && python -m SimpleHTTPServer","tslint":"./node_modules/tslint/bin/tslint -p tsconfig.json"},"repository":{"type":"git","url":"git+https://github.com/opentok/opentok-network-test-js.git"},"keywords":["tokbox","opentok","network test","connectivity","webrtc"],"author":{"name":"TokBox","email":"contact@tokbox.com"},"license":"MIT","bugs":{"url":"https://github.com/opentok/network-connectivity-js/issues"},"homepage":"https://github.com/opentok/network-connectivity-js#readme","dependencies":{"axios":"^0.21.1","opentok-solutions-logging":"^1.1.1","promise":"^8.0.1"},"devDependencies":{"@opentok/client":"^2.18.0","@types/expect.js":"^0.3.29","@types/jasmine":"^2.8.8","@types/jasmine-matchers":"^0.2.30","@types/mocha":"^5.2.2","@types/node":"^10.3.2","@types/opentok":"^2.3.4","@types/promise":"^7.1.30","@types/webrtc":"0.0.22","dotenv":"^4.0.0","fs-extra":"^4.0.3","jasmine":"^2.99.0","jasmine-core":"^2.99.1","karma":"^5.1.1","karma-chrome-launcher":"^2.2.0","karma-cli":"^1.0.1","karma-firefox-launcher":"^1.1.0","karma-jasmine":"^1.1.2","karma-mocha-reporter":"^2.2.5","karma-safari-launcher":"^1.0.0","karma-safaritechpreview-launcher":"0.0.6","karma-sauce-launcher":"^1.2.0","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^2.0.13","opentok":"^2.9.1","terser-webpack-plugin":"^2.3.3","ts-loader":"^4.4.1","tslint":"^5.10.0","tslint-config-airbnb":"^5.9.2","typescript":"2.9.2","webpack":"^4.12.0","webpack-cli":"^3.0.4","webpack-node-externals":"^1.7.2"}}')
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = n(7)
          , o = n(16)
          , i = n(51)
          , s = n(2)
          , a = n(52)
          , u = n(1);
        function c(e) {
            return new o((t,n)=>{
                e.on("sessionDisconnected", ()=>{
                    e.off(),
                    t()
                }
                ),
                e.disconnect()
            }
            )
        }
        function l(e) {
            return new o((t,n)=>{
                e.on("destroyed", ()=>{
                    t()
                }
                ),
                e || t(),
                e.destroy()
            }
            )
        }
        function f(e, t) {
            return new o((n,r)=>{
                (function(e) {
                    return new o((t,n)=>{
                        e.getDevices((e,r=[])=>{
                            if (e)
                                n(new i.FailedToObtainMediaDevices);
                            else {
                                const e = r.reduce((e,t)=>{
                                    const n = "audioInput" === t.kind ? "audio" : "video";
                                    return Object.assign({}, e, {
                                        [n]: Object.assign({}, e[n], {
                                            [t.deviceId]: t
                                        })
                                    })
                                }
                                , {
                                    audio: {},
                                    video: {}
                                });
                                Object.keys(e.audio).length || Object.keys(e.video).length ? t(e) : n(new i.FailedToObtainMediaDevices)
                            }
                        }
                        )
                    }
                    )
                }
                )(e).then(o=>{
                    const s = document.createElement("div");
                    s.style.position = "fixed",
                    s.style.bottom = "-1px",
                    s.style.width = "1px",
                    s.style.height = "1px",
                    s.style.opacity = "0.01",
                    document.body.appendChild(s);
                    const a = {
                        width: "100%",
                        height: "100%",
                        insertMode: "append",
                        showControls: !1,
                        scalableVideo: !1
                    };
                    t && t.audioSource && (a.audioSource = t.audioSource),
                    t && t.videoSource && (a.videoSource = t.videoSource),
                    t && t.audioOnly && (a.videoSource = null),
                    Object.keys(o.audio).length || (a.audioSource = null),
                    Object.keys(o.video).length || (a.videoSource = null),
                    t && t.scalableVideo && (a.scalableVideo = t.scalableVideo);
                    const u = e.initPublisher(s, a, e=>{
                        e ? r(new i.FailedToCreateLocalPublisher) : n({
                            publisher: u
                        })
                    }
                    );
                    u.on("streamCreated", ()=>{
                        s.style.visibility = "hidden"
                    }
                    )
                }
                ).catch(r)
            }
            )
        }
        function d({session: e, publisher: t}) {
            return new o((n,r)=>{
                const o = {
                    testNetwork: !0,
                    audioVolume: 0
                }
                  , s = n=>{
                    l(t).then(()=>c(e)).then(()=>{
                        r(n)
                    }
                    )
                }
                ;
                if (t.stream) {
                    const r = document.createElement("div")
                      , a = e.subscribe(t.stream, r, o, r=>{
                        r ? s(new i.SubscribeToSessionError) : n(Object.assign({
                            session: e
                        }, {
                            publisher: t
                        }, {
                            subscriber: a
                        }))
                    }
                    )
                } else
                    s(new i.SubscribeToSessionError)
            }
            )
        }
        function p(e, t, n) {
            return new o((o,s)=>{
                const a = u.getOr("", "properties.loggingURL", e) + "/logging/ClientEvent"
                  , c = t && t.proxyServerUrl && `${t.proxyServerUrl}/${a.replace("https://", "")}` || a
                  , l = ()=>s(new i.LoggingServerConnectionError);
                r.default.post(c).then(e=>200 === e.status ? o(n) : l()).catch(l)
            }
            )
        }
        t.testConnectivity = function(e, t, n, r) {
            return new o((u,h)=>{
                (function(e, {apiKey: t, sessionId: n, token: r}, a) {
                    return new o((o,u)=>{
                        let c = {};
                        a && a.initSessionOptions && (c = a.initSessionOptions),
                        a && a.proxyServerUrl && (e.hasOwnProperty("setProxyUrl") || (c.proxyUrl = a.proxyServerUrl));
                        const l = e.initSession(t, n, c);
                        l.connect(r, e=>{
                            s.errorHasName(e, s.OTErrorType.OT_AUTHENTICATION_ERROR) ? u(new i.ConnectToSessionTokenError) : s.errorHasName(e, s.OTErrorType.OT_INVALID_SESSION_ID) ? u(new i.ConnectToSessionSessionIdError) : s.errorHasName(e, s.OTErrorType.OT_CONNECT_FAILED) ? u(new i.ConnectToSessionNetworkError) : s.errorHasName(e, s.OTErrorType.OT_INVALID_HTTP_STATUS) ? u(new i.APIConnectivityError) : e ? u(new i.ConnectToSessionError) : o(l)
                        }
                        )
                    }
                    )
                }
                )(e, t, r).then(t=>function(e, t, n) {
                    return new o((r,o)=>{
                        const a = e=>{
                            c(t).then(()=>{
                                o(e)
                            }
                            )
                        }
                        ;
                        f(e, n).then(({publisher: e})=>{
                            t.publish(e, n=>{
                                n ? s.errorHasName(n, s.OTErrorType.NOT_CONNECTED) ? a(new i.PublishToSessionNotConnectedError) : s.errorHasName(n, s.OTErrorType.UNABLE_TO_PUBLISH) ? a(new i.PublishToSessionPermissionOrTimeoutError) : n && a(new i.PublishToSessionError) : r(Object.assign({
                                    session: t
                                }, {
                                    publisher: e
                                }))
                            }
                            )
                        }
                        ).catch(e=>{
                            a(e)
                        }
                        )
                    }
                    )
                }(e, t, r)).then(d).then(t=>p(e, r, t)).then(e=>{
                    const t = {
                        success: !0,
                        failedTests: []
                    };
                    return n.logEvent({
                        action: "testConnectivity",
                        variation: "Success"
                    }),
                    (r = e.session,
                    i = e.subscriber,
                    new o((e,t)=>{
                        i.on("destroyed", ()=>{
                            e()
                        }
                        ),
                        i || e(),
                        r.unsubscribe(i)
                    }
                    )).then(()=>l(e.publisher)).then(()=>c(e.session)).then(()=>u(t));
                    var r, i
                }
                ).catch(t=>{
                    const o = (...e)=>{
                        const t = a.mapErrors(...e)
                          , r = t.find(e=>"messaging" === e.type)
                          , o = {
                            failedTests: [...t, ...r ? a.mapErrors(new i.FailedMessagingServerTestError) : []],
                            success: !1
                        };
                        n.logEvent({
                            action: "testConnectivity",
                            variation: "Success"
                        }),
                        u(o)
                    }
                    ;
                    "LoggingServerConnectionError" === t.name ? o(t) : p(e, r).then(()=>o(t)).catch(e=>o(t, e))
                }
                )
            }
            )
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , o = n(8)
          , i = n(25)
          , s = n(14);
        function a(e) {
            var t = new i(e)
              , n = o(i.prototype.request, t);
            return r.extend(n, i.prototype, t),
            r.extend(n, t),
            n
        }
        var u = a(n(5));
        u.Axios = i,
        u.create = function(e) {
            return a(s(u.defaults, e))
        }
        ,
        u.Cancel = n(15),
        u.CancelToken = n(40),
        u.isCancel = n(13),
        u.all = function(e) {
            return Promise.all(e)
        }
        ,
        u.spread = n(41),
        u.isAxiosError = n(42),
        e.exports = u,
        e.exports.default = u
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , o = n(9)
          , i = n(26)
          , s = n(27)
          , a = n(14)
          , u = n(38)
          , c = u.validators;
        function l(e) {
            this.defaults = e,
            this.interceptors = {
                request: new i,
                response: new i
            }
        }
        l.prototype.request = function(e) {
            "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {},
            (e = a(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
            var t = e.transitional;
            void 0 !== t && u.assertOptions(t, {
                silentJSONParsing: c.transitional(c.boolean, "1.0.0"),
                forcedJSONParsing: c.transitional(c.boolean, "1.0.0"),
                clarifyTimeoutError: c.transitional(c.boolean, "1.0.0")
            }, !1);
            var n = []
              , r = !0;
            this.interceptors.request.forEach((function(t) {
                "function" == typeof t.runWhen && !1 === t.runWhen(e) || (r = r && t.synchronous,
                n.unshift(t.fulfilled, t.rejected))
            }
            ));
            var o, i = [];
            if (this.interceptors.response.forEach((function(e) {
                i.push(e.fulfilled, e.rejected)
            }
            )),
            !r) {
                var l = [s, void 0];
                for (Array.prototype.unshift.apply(l, n),
                l.concat(i),
                o = Promise.resolve(e); l.length; )
                    o = o.then(l.shift(), l.shift());
                return o
            }
            for (var f = e; n.length; ) {
                var d = n.shift()
                  , p = n.shift();
                try {
                    f = d(f)
                } catch (e) {
                    p(e);
                    break
                }
            }
            try {
                o = s(f)
            } catch (e) {
                return Promise.reject(e)
            }
            for (; i.length; )
                o = o.then(i.shift(), i.shift());
            return o
        }
        ,
        l.prototype.getUri = function(e) {
            return e = a(this.defaults, e),
            o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        }
        ,
        r.forEach(["delete", "get", "head", "options"], (function(e) {
            l.prototype[e] = function(t, n) {
                return this.request(a(n || {}, {
                    method: e,
                    url: t,
                    data: (n || {}).data
                }))
            }
        }
        )),
        r.forEach(["post", "put", "patch"], (function(e) {
            l.prototype[e] = function(t, n, r) {
                return this.request(a(r || {}, {
                    method: e,
                    url: t,
                    data: n
                }))
            }
        }
        )),
        e.exports = l
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0);
        function o() {
            this.handlers = []
        }
        o.prototype.use = function(e, t, n) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t,
                synchronous: !!n && n.synchronous,
                runWhen: n ? n.runWhen : null
            }),
            this.handlers.length - 1
        }
        ,
        o.prototype.eject = function(e) {
            this.handlers[e] && (this.handlers[e] = null)
        }
        ,
        o.prototype.forEach = function(e) {
            r.forEach(this.handlers, (function(t) {
                null !== t && e(t)
            }
            ))
        }
        ,
        e.exports = o
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , o = n(28)
          , i = n(13)
          , s = n(5);
        function a(e) {
            e.cancelToken && e.cancelToken.throwIfRequested()
        }
        e.exports = function(e) {
            return a(e),
            e.headers = e.headers || {},
            e.data = o.call(e, e.data, e.headers, e.transformRequest),
            e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers),
            r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                delete e.headers[t]
            }
            )),
            (e.adapter || s.adapter)(e).then((function(t) {
                return a(e),
                t.data = o.call(e, t.data, t.headers, e.transformResponse),
                t
            }
            ), (function(t) {
                return i(t) || (a(e),
                t && t.response && (t.response.data = o.call(e, t.response.data, t.response.headers, e.transformResponse))),
                Promise.reject(t)
            }
            ))
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , o = n(5);
        e.exports = function(e, t, n) {
            var i = this || o;
            return r.forEach(n, (function(n) {
                e = n.call(i, e, t)
            }
            )),
            e
        }
    }
    , function(e, t) {
        var n, r, o = e.exports = {};
        function i() {
            throw new Error("setTimeout has not been defined")
        }
        function s() {
            throw new Error("clearTimeout has not been defined")
        }
        function a(e) {
            if (n === setTimeout)
                return setTimeout(e, 0);
            if ((n === i || !n) && setTimeout)
                return n = setTimeout,
                setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }
        !function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : i
            } catch (e) {
                n = i
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (e) {
                r = s
            }
        }();
        var u, c = [], l = !1, f = -1;
        function d() {
            l && u && (l = !1,
            u.length ? c = u.concat(c) : f = -1,
            c.length && p())
        }
        function p() {
            if (!l) {
                var e = a(d);
                l = !0;
                for (var t = c.length; t; ) {
                    for (u = c,
                    c = []; ++f < t; )
                        u && u[f].run();
                    f = -1,
                    t = c.length
                }
                u = null,
                l = !1,
                function(e) {
                    if (r === clearTimeout)
                        return clearTimeout(e);
                    if ((r === s || !r) && clearTimeout)
                        return r = clearTimeout,
                        clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
            }
        }
        function h(e, t) {
            this.fun = e,
            this.array = t
        }
        function v() {}
        o.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            c.push(new h(e,t)),
            1 !== c.length || l || a(p)
        }
        ,
        h.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        o.title = "browser",
        o.browser = !0,
        o.env = {},
        o.argv = [],
        o.version = "",
        o.versions = {},
        o.on = v,
        o.addListener = v,
        o.once = v,
        o.off = v,
        o.removeListener = v,
        o.removeAllListeners = v,
        o.emit = v,
        o.prependListener = v,
        o.prependOnceListener = v,
        o.listeners = function(e) {
            return []
        }
        ,
        o.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        o.cwd = function() {
            return "/"
        }
        ,
        o.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        o.umask = function() {
            return 0
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = function(e, t) {
            r.forEach(e, (function(n, r) {
                r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n,
                delete e[r])
            }
            ))
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(12);
        e.exports = function(e, t, n) {
            var o = n.config.validateStatus;
            n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = r.isStandardBrowserEnv() ? {
            write: function(e, t, n, o, i, s) {
                var a = [];
                a.push(e + "=" + encodeURIComponent(t)),
                r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
                r.isString(o) && a.push("path=" + o),
                r.isString(i) && a.push("domain=" + i),
                !0 === s && a.push("secure"),
                document.cookie = a.join("; ")
            },
            read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(34)
          , o = n(35);
        e.exports = function(e, t) {
            return e && !r(t) ? o(e, t) : t
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0)
          , o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        e.exports = function(e) {
            var t, n, i, s = {};
            return e ? (r.forEach(e.split("\n"), (function(e) {
                if (i = e.indexOf(":"),
                t = r.trim(e.substr(0, i)).toLowerCase(),
                n = r.trim(e.substr(i + 1)),
                t) {
                    if (s[t] && o.indexOf(t) >= 0)
                        return;
                    s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n
                }
            }
            )),
            s) : s
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = r.isStandardBrowserEnv() ? function() {
            var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
            function o(e) {
                var r = e;
                return t && (n.setAttribute("href", r),
                r = n.href),
                n.setAttribute("href", r),
                {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                }
            }
            return e = o(window.location.href),
            function(t) {
                var n = r.isString(t) ? o(t) : t;
                return n.protocol === e.protocol && n.host === e.host
            }
        }() : function() {
            return !0
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(39)
          , o = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(e, t) {
            o[e] = function(n) {
                return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
            }
        }
        ));
        var i = {}
          , s = r.version.split(".");
        function a(e, t) {
            for (var n = t ? t.split(".") : s, r = e.split("."), o = 0; o < 3; o++) {
                if (n[o] > r[o])
                    return !0;
                if (n[o] < r[o])
                    return !1
            }
            return !1
        }
        o.transitional = function(e, t, n) {
            var o = t && a(t);
            function s(e, t) {
                return "[Axios v" + r.version + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
            }
            return function(n, r, a) {
                if (!1 === e)
                    throw new Error(s(r, " has been removed in " + t));
                return o && !i[r] && (i[r] = !0,
                console.warn(s(r, " has been deprecated since v" + t + " and will be removed in the near future"))),
                !e || e(n, r, a)
            }
        }
        ,
        e.exports = {
            isOlderVersion: a,
            assertOptions: function(e, t, n) {
                if ("object" != typeof e)
                    throw new TypeError("options must be an object");
                for (var r = Object.keys(e), o = r.length; o-- > 0; ) {
                    var i = r[o]
                      , s = t[i];
                    if (s) {
                        var a = e[i]
                          , u = void 0 === a || s(a, i, e);
                        if (!0 !== u)
                            throw new TypeError("option " + i + " must be " + u)
                    } else if (!0 !== n)
                        throw Error("Unknown option " + i)
                }
            },
            validators: o
        }
    }
    , function(e) {
        e.exports = JSON.parse('{"_args":[["axios@0.21.2","/Users/jswartz_1/src/opentok-network-test-js"]],"_from":"axios@0.21.2","_id":"axios@0.21.2","_inBundle":false,"_integrity":"sha512-87otirqUw3e8CzHTMO+/9kh/FSgXt/eVDvipijwDtEuwbkySWZ9SBm6VEubmJ/kLKEoLQV/POhxXFb66bfekfg==","_location":"/axios","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"axios@0.21.2","name":"axios","escapedName":"axios","rawSpec":"0.21.2","saveSpec":null,"fetchSpec":"0.21.2"},"_requiredBy":["/","/opentok-solutions-logging"],"_resolved":"https://registry.npmjs.org/axios/-/axios-0.21.2.tgz","_spec":"0.21.2","_where":"/Users/jswartz_1/src/opentok-network-test-js","author":{"name":"Matt Zabriskie"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"bugs":{"url":"https://github.com/axios/axios/issues"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}],"dependencies":{"follow-redirects":"^1.14.0"},"description":"Promise based HTTP client for the browser and node.js","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"homepage":"https://axios-http.com","jsdelivr":"dist/axios.min.js","keywords":["xhr","http","ajax","promise","node"],"license":"MIT","main":"index.js","name":"axios","repository":{"type":"git","url":"git+https://github.com/axios/axios.git"},"scripts":{"build":"NODE_ENV=production grunt build","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","examples":"node ./examples/server.js","fix":"eslint --fix lib/**/*.js","postversion":"git push && git push --tags","preversion":"npm test","start":"node ./sandbox/server.js","test":"grunt test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"},"typings":"./index.d.ts","unpkg":"dist/axios.min.js","version":"0.21.2"}')
    }
    , function(e, t, n) {
        "use strict";
        var r = n(15);
        function o(e) {
            if ("function" != typeof e)
                throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise((function(e) {
                t = e
            }
            ));
            var n = this;
            e((function(e) {
                n.reason || (n.reason = new r(e),
                t(n.reason))
            }
            ))
        }
        o.prototype.throwIfRequested = function() {
            if (this.reason)
                throw this.reason
        }
        ,
        o.source = function() {
            var e;
            return {
                token: new o((function(t) {
                    e = t
                }
                )),
                cancel: e
            }
        }
        ,
        e.exports = o
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return function(t) {
                return e.apply(null, t)
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return "object" == typeof e && !0 === e.isAxiosError
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = n(3),
        n(45),
        n(46),
        n(47),
        n(48),
        n(50)
    }
    , function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }
    , function(e, t, n) {
        "use strict";
        var r = n(3);
        e.exports = r,
        r.prototype.done = function(e, t) {
            var n = arguments.length ? this.then.apply(this, arguments) : this;
            n.then(null, (function(e) {
                setTimeout((function() {
                    throw e
                }
                ), 0)
            }
            ))
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(3);
        e.exports = r,
        r.prototype.finally = function(e) {
            return this.then((function(t) {
                return r.resolve(e()).then((function() {
                    return t
                }
                ))
            }
            ), (function(t) {
                return r.resolve(e()).then((function() {
                    throw t
                }
                ))
            }
            ))
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(3);
        e.exports = r;
        var o = l(!0)
          , i = l(!1)
          , s = l(null)
          , a = l(void 0)
          , u = l(0)
          , c = l("");
        function l(e) {
            var t = new r(r._0);
            return t._V = 1,
            t._W = e,
            t
        }
        r.resolve = function(e) {
            if (e instanceof r)
                return e;
            if (null === e)
                return s;
            if (void 0 === e)
                return a;
            if (!0 === e)
                return o;
            if (!1 === e)
                return i;
            if (0 === e)
                return u;
            if ("" === e)
                return c;
            if ("object" == typeof e || "function" == typeof e)
                try {
                    var t = e.then;
                    if ("function" == typeof t)
                        return new r(t.bind(e))
                } catch (e) {
                    return new r((function(t, n) {
                        n(e)
                    }
                    ))
                }
            return l(e)
        }
        ;
        var f = function(e) {
            return "function" == typeof Array.from ? (f = Array.from,
            Array.from(e)) : (f = function(e) {
                return Array.prototype.slice.call(e)
            }
            ,
            Array.prototype.slice.call(e))
        };
        r.all = function(e) {
            var t = f(e);
            return new r((function(e, n) {
                if (0 === t.length)
                    return e([]);
                var o = t.length;
                function i(s, a) {
                    if (a && ("object" == typeof a || "function" == typeof a)) {
                        if (a instanceof r && a.then === r.prototype.then) {
                            for (; 3 === a._V; )
                                a = a._W;
                            return 1 === a._V ? i(s, a._W) : (2 === a._V && n(a._W),
                            void a.then((function(e) {
                                i(s, e)
                            }
                            ), n))
                        }
                        var u = a.then;
                        if ("function" == typeof u)
                            return void new r(u.bind(a)).then((function(e) {
                                i(s, e)
                            }
                            ), n)
                    }
                    t[s] = a,
                    0 == --o && e(t)
                }
                for (var s = 0; s < t.length; s++)
                    i(s, t[s])
            }
            ))
        }
        ,
        r.reject = function(e) {
            return new r((function(t, n) {
                n(e)
            }
            ))
        }
        ,
        r.race = function(e) {
            return new r((function(t, n) {
                f(e).forEach((function(e) {
                    r.resolve(e).then(t, n)
                }
                ))
            }
            ))
        }
        ,
        r.prototype.catch = function(e) {
            return this.then(null, e)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(3)
          , o = n(49);
        e.exports = r,
        r.denodeify = function(e, t) {
            return "number" == typeof t && t !== 1 / 0 ? function(e, t) {
                for (var n = [], o = 0; o < t; o++)
                    n.push("a" + o);
                var s = ["return function (" + n.join(",") + ") {", "var self = this;", "return new Promise(function (rs, rj) {", "var res = fn.call(", ["self"].concat(n).concat([i]).join(","), ");", "if (res &&", '(typeof res === "object" || typeof res === "function") &&', 'typeof res.then === "function"', ") {rs(res);}", "});", "};"].join("");
                return Function(["Promise", "fn"], s)(r, e)
            }(e, t) : function(e) {
                for (var t = Math.max(e.length - 1, 3), n = [], o = 0; o < t; o++)
                    n.push("a" + o);
                var s = ["return function (" + n.join(",") + ") {", "var self = this;", "var args;", "var argLength = arguments.length;", "if (arguments.length > " + t + ") {", "args = new Array(arguments.length + 1);", "for (var i = 0; i < arguments.length; i++) {", "args[i] = arguments[i];", "}", "}", "return new Promise(function (rs, rj) {", "var cb = " + i + ";", "var res;", "switch (argLength) {", n.concat(["extra"]).map((function(e, t) {
                    return "case " + t + ":res = fn.call(" + ["self"].concat(n.slice(0, t)).concat("cb").join(",") + ");break;"
                }
                )).join(""), "default:", "args[argLength] = cb;", "res = fn.apply(self, args);", "}", "if (res &&", '(typeof res === "object" || typeof res === "function") &&', 'typeof res.then === "function"', ") {rs(res);}", "});", "};"].join("");
                return Function(["Promise", "fn"], s)(r, e)
            }(e)
        }
        ;
        var i = "function (err, res) {if (err) { rj(err); } else { rs(res); }}";
        r.nodeify = function(e) {
            return function() {
                var t = Array.prototype.slice.call(arguments)
                  , n = "function" == typeof t[t.length - 1] ? t.pop() : null
                  , i = this;
                try {
                    return e.apply(this, arguments).nodeify(n, i)
                } catch (e) {
                    if (null == n)
                        return new r((function(t, n) {
                            n(e)
                        }
                        ));
                    o((function() {
                        n.call(i, e)
                    }
                    ))
                }
            }
        }
        ,
        r.prototype.nodeify = function(e, t) {
            if ("function" != typeof e)
                return this;
            this.then((function(n) {
                o((function() {
                    e.call(t, null, n)
                }
                ))
            }
            ), (function(n) {
                o((function() {
                    e.call(t, n)
                }
                ))
            }
            ))
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(17)
          , o = []
          , i = []
          , s = r.makeRequestCallFromTimer((function() {
            if (i.length)
                throw i.shift()
        }
        ));
        function a(e) {
            var t;
            (t = o.length ? o.pop() : new u).task = e,
            r(t)
        }
        function u() {
            this.task = null
        }
        e.exports = a,
        u.prototype.call = function() {
            try {
                this.task.call()
            } catch (e) {
                a.onerror ? a.onerror(e) : (i.push(e),
                s())
            } finally {
                this.task = null,
                o[o.length] = this
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(3);
        e.exports = r,
        r.enableSynchronous = function() {
            r.prototype.isPending = function() {
                return 0 == this.getState()
            }
            ,
            r.prototype.isFulfilled = function() {
                return 1 == this.getState()
            }
            ,
            r.prototype.isRejected = function() {
                return 2 == this.getState()
            }
            ,
            r.prototype.getValue = function() {
                if (3 === this._V)
                    return this._W.getValue();
                if (!this.isFulfilled())
                    throw new Error("Cannot get a value of an unfulfilled promise.");
                return this._W
            }
            ,
            r.prototype.getReason = function() {
                if (3 === this._V)
                    return this._W.getReason();
                if (!this.isRejected())
                    throw new Error("Cannot get a rejection reason of a non-rejected promise.");
                return this._W
            }
            ,
            r.prototype.getState = function() {
                return 3 === this._V ? this._W.getState() : -1 === this._V || -2 === this._V ? 0 : this._V
            }
        }
        ,
        r.disableSynchronous = function() {
            r.prototype.isPending = void 0,
            r.prototype.isFulfilled = void 0,
            r.prototype.isRejected = void 0,
            r.prototype.getValue = void 0,
            r.prototype.getReason = void 0,
            r.prototype.getState = void 0
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = n(6)
          , o = n(2);
        class i extends r.NetworkTestError {
            constructor(e, t) {
                super(e, t || o.ErrorNames.CONNECTIVITY_ERROR)
            }
        }
        t.ConnectivityError = i,
        t.APIConnectivityError = class extends i {
            constructor() {
                super("Failed to connect to OpenTOK API Server", o.ErrorNames.API_CONNECTIVITY_ERROR)
            }
        }
        ;
        class s extends i {
            constructor(e, t) {
                super(e || "Failed to connect to the session due to a network error.", t || o.ErrorNames.CONNECT_TO_SESSION_ERROR)
            }
        }
        t.ConnectToSessionError = s,
        t.ConnectToSessionTokenError = class extends s {
            constructor() {
                super("Failed to connect to the session due to an invalid token.", o.ErrorNames.CONNECT_TO_SESSION_TOKEN_ERROR)
            }
        }
        ,
        t.ConnectToSessionSessionIdError = class extends s {
            constructor() {
                super("Failed to connect to the session due to an invalid session ID.", o.ErrorNames.CONNECT_TO_SESSION_ID_ERROR)
            }
        }
        ,
        t.ConnectToSessionNetworkError = class extends s {
            constructor() {
                super("Failed to connect to the session due to a network error.", o.ErrorNames.CONNECT_TO_SESSION_NETWORK_ERROR)
            }
        }
        ;
        class a extends i {
            constructor(e, t) {
                super(e || "OpenTok failed to find media devices for this browser.", t || o.ErrorNames.MEDIA_DEVICE_ERROR)
            }
        }
        t.MediaDeviceError = a,
        t.FailedToObtainMediaDevices = class extends a {
            constructor() {
                super("Failed to obtain media devices.", o.ErrorNames.FAILED_TO_OBTAIN_MEDIA_DEVICES)
            }
        }
        ,
        t.NoVideoCaptureDevicesError = class extends a {
            constructor() {
                super("This browser has no video capture devices", o.ErrorNames.NO_VIDEO_CAPTURE_DEVICES)
            }
        }
        ,
        t.NoAudioCaptureDevicesError = class extends a {
            constructor() {
                super("This browser has no audio capture devices.", o.ErrorNames.NO_AUDIO_CAPTURE_DEVICES)
            }
        }
        ;
        class u extends i {
            constructor(e, t) {
                super(e || "Encountered an unknown error while attempting to publish to a session.", t || o.ErrorNames.PUBLISH_TO_SESSION_ERROR)
            }
        }
        t.PublishToSessionError = u,
        t.FailedMessagingServerTestError = class extends u {
            constructor() {
                super("Failed to connect to media server due to messaging server connection failure", o.ErrorNames.FAILED_MESSAGING_SERVER_TEST)
            }
        }
        ,
        t.FailedToCreateLocalPublisher = class extends u {
            constructor() {
                super("Failed to create a local publisher object.", o.ErrorNames.FAILED_TO_CREATE_LOCAL_PUBLISHER)
            }
        }
        ,
        t.PublishToSessionNotConnectedError = class extends u {
            constructor() {
                super("Precall failed to publish to the session because it was not connected.", o.ErrorNames.PUBLISH_TO_SESSION_NOT_CONNECTED)
            }
        }
        ,
        t.PublishToSessionPermissionOrTimeoutError = class extends u {
            constructor() {
                super("Precall failed to publish to the session due a permissions error or timeout.", o.ErrorNames.PUBLISH_TO_SESSION_PERMISSION_OR_TIMEOUT_ERROR)
            }
        }
        ,
        t.PublishToSessionNetworkError = class extends u {
            constructor() {
                super("Precall failed to publish to the session due a network error.", o.ErrorNames.PUBLISH_TO_SESSION_NETWORK_ERROR)
            }
        }
        ,
        t.SubscribeToSessionError = class extends i {
            constructor(e) {
                super(e || "Encountered an unknown error while attempting to subscribe to a session.", o.ErrorNames.SUBSCRIBE_TO_SESSION_ERROR)
            }
        }
        ,
        t.LoggingServerConnectionError = class extends i {
            constructor() {
                super("Failed to connect to the OpenTok logging server.", o.ErrorNames.LOGGING_SERVER_CONNECTION_ERROR)
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = n(2);
        var o;
        !function(e) {
            e.Api = "api",
            e.Messaging = "messaging",
            e.OpentokJs = "OpenTok.js",
            e.Media = "media",
            e.Logging = "logging",
            e.ConnectivityError = "OpenTok.js"
        }(o = t.FailureType || (t.FailureType = {}));
        const i = e=>({
            error: e,
            type: (()=>{
                switch (e.name) {
                case r.ErrorNames.API_CONNECTIVITY_ERROR:
                case r.ErrorNames.CONNECT_TO_SESSION_NETWORK_ERROR:
                    return o.Api;
                case r.ErrorNames.CONNECT_TO_SESSION_ERROR:
                case r.ErrorNames.CONNECT_TO_SESSION_TOKEN_ERROR:
                case r.ErrorNames.CONNECT_TO_SESSION_ID_ERROR:
                    return o.Messaging;
                case r.ErrorNames.MEDIA_DEVICE_ERROR:
                case r.ErrorNames.FAILED_TO_OBTAIN_MEDIA_DEVICES:
                case r.ErrorNames.NO_VIDEO_CAPTURE_DEVICES:
                case r.ErrorNames.NO_AUDIO_CAPTURE_DEVICES:
                case r.ErrorNames.FAILED_TO_CREATE_LOCAL_PUBLISHER:
                case r.ErrorNames.PUBLISH_TO_SESSION_NOT_CONNECTED:
                case r.ErrorNames.PUBLISH_TO_SESSION_PERMISSION_OR_TIMEOUT_ERROR:
                case r.ErrorNames.PUBLISH_TO_SESSION_NETWORK_ERROR:
                    return o.OpentokJs;
                case r.ErrorNames.PUBLISH_TO_SESSION_ERROR:
                case r.ErrorNames.SUBSCRIBE_TO_SESSION_ERROR:
                case r.ErrorNames.FAILED_MESSAGING_SERVER_TEST:
                    return o.Media;
                case r.ErrorNames.LOGGING_SERVER_CONNECTION_ERROR:
                    return o.Logging;
                default:
                    return o.OpentokJs
                }
            }
            )()
        });
        t.mapErrors = (...e)=>e.map(i)
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = n(16)
          , o = n(1)
          , i = n(54)
          , s = n(2)
          , a = n(55)
          , u = n(20)
          , c = n(4)
          , l = n(60);
        let f, d, p, h = !1, v = !1, g = !1;
        function m(e, t, n, o) {
            return new r((a,u)=>{
                (function(e, t) {
                    return new r((n,r)=>{
                        e.connection ? n(e) : e.connect(t, t=>{
                            t && (s.errorHasName(t, s.OTErrorType.OT_AUTHENTICATION_ERROR) ? r(new i.ConnectToSessionTokenError) : s.errorHasName(t, s.OTErrorType.OT_INVALID_SESSION_ID) ? r(new i.ConnectToSessionSessionIdError) : s.errorHasName(t, s.OTErrorType.OT_CONNECT_FAILED) ? r(new i.ConnectToSessionNetworkError) : r(new i.ConnectToSessionError)),
                            n(e)
                        }
                        )
                    }
                    )
                }
                )(t, n.token).then(function(e, t) {
                    return n=>new r((o,a)=>{
                        const u = document.createElement("div");
                        u.style.position = "fixed",
                        u.style.bottom = "-1px",
                        u.style.width = "1px",
                        u.style.height = "1px",
                        u.style.opacity = "0",
                        document.body.appendChild(u),
                        function(e) {
                            return new r((t,n)=>{
                                e.getDevices((e,r=[])=>{
                                    if (e)
                                        n(new i.FailedToObtainMediaDevices);
                                    else {
                                        const e = r.reduce((e,t)=>{
                                            const n = "audioInput" === t.kind ? "audio" : "video";
                                            return Object.assign({}, e, {
                                                [n]: Object.assign({}, e[n], {
                                                    [t.deviceId]: t
                                                })
                                            })
                                        }
                                        , {
                                            audio: {},
                                            video: {}
                                        });
                                        Object.keys(e.audio).length ? t(e) : n(new i.NoAudioCaptureDevicesError)
                                    }
                                }
                                )
                            }
                            )
                        }(e).then(r=>{
                            Object.keys(r.video).length || (h = !0);
                            const c = {
                                resolution: "1280x720",
                                width: "100%",
                                height: "100%",
                                insertMode: "append",
                                showControls: !1
                            };
                            t && t.audioSource && (c.audioSource = t.audioSource),
                            t && t.videoSource && (c.videoSource = t.videoSource),
                            h && (c.videoSource = null);
                            const l = e.initPublisher(u, c, e=>{
                                e ? a(new i.InitPublisherError(e.message)) : n.publish(l, e=>{
                                    if (e)
                                        return s.errorHasName(e, s.OTErrorType.NOT_CONNECTED) ? a(new i.PublishToSessionNotConnectedError) : s.errorHasName(e, s.OTErrorType.UNABLE_TO_PUBLISH) ? a(new i.PublishToSessionPermissionOrTimeoutError) : a(new i.PublishToSessionError)
                                }
                                )
                            }
                            );
                            l.on("streamCreated", e=>{
                                const t = n.subscribe(e.stream, u, {
                                    testNetwork: !0,
                                    insertMode: "append"
                                }, e=>e ? a(new i.SubscribeToSessionError(e.message)) : o({
                                    publisher: l,
                                    subscriber: t
                                }))
                            }
                            )
                        }
                        ).catch(a)
                    }
                    )
                }(e, o)).then(a).catch(u)
            }
            )
        }
        function y(e, t, n, s, l, _) {
            let b;
            return new r((E,w)=>{
                m(e, t, n, s).then(({publisher: m, subscriber: x})=>{
                    if (x)
                        try {
                            const i = Object.assign({
                                state: new u.default(_)
                            }, {
                                subscriber: x
                            }, {
                                credentials: n
                            })
                              , w = (e,t)=>{
                                var n;
                                t && l && l((n = t,
                                Object.assign({}, n, {
                                    phase: h ? "audio-only" : "audio-video"
                                })))
                            }
                              , S = ()=>{
                                const a = function(e) {
                                    const t = ["bitrate", "packetLossRatio", "supported", "reason", "mos"];
                                    return e.state.stats.audio.mos = e.state.audioQualityScore(),
                                    e.state.stats.video.mos = e.state.videoQualityScore(),
                                    e.state.stats.audio.mos >= c.default.qualityThresholds.audio[0].minMos ? e.state.stats.audio.supported = !0 : (e.state.stats.audio.supported = !1,
                                    e.state.stats.audio.reason = c.default.strings.bandwidthLow),
                                    {
                                        audio: o.pick(t, e.state.stats.audio),
                                        video: o.pick(t.concat(["frameRate", "recommendedResolution", "recommendedFrameRate"]), e.state.stats.video)
                                    }
                                }(i);
                                if (h || (u = a).audio.mos && u.audio.mos >= c.default.qualityThresholds.audio[0].minMos || g)
                                    t.on("sessionDisconnected", ()=>{
                                        E(a),
                                        t.off()
                                    }
                                    ),
                                    function(e, t) {
                                        return new r((n,r)=>{
                                            t.on("destroyed", ()=>{
                                                n()
                                            }
                                            ),
                                            t || n(),
                                            e.unsubscribe(t)
                                        }
                                        )
                                    }(t, x).then(()=>function(e) {
                                        return new r((t,n)=>{
                                            e.on("destroyed", ()=>{
                                                t()
                                            }
                                            ),
                                            e || t(),
                                            e.destroy()
                                        }
                                        )
                                    }(m)).then(()=>t.disconnect());
                                else {
                                    h = !0;
                                    const r = a.video;
                                    y(e, t, n, s, l, !0).then(e=>{
                                        e.video = r,
                                        E(e)
                                    }
                                    )
                                }
                                var u
                            }
                            ;
                            d = ()=>{
                                S()
                            }
                            ;
                            const T = e=>{
                                clearTimeout(b),
                                S()
                            }
                            ;
                            a.default(i.state, x, m, w, T),
                            b = window.setTimeout(S, f + 1),
                            window.clearTimeout(p),
                            p = window.setTimeout(()=>{
                                v = !0,
                                g && d && d()
                            }
                            , 5e3)
                        } catch (e) {
                            w(new i.SubscriberGetStatsError)
                        }
                    else
                        w(new i.MissingSubscriberError)
                }
                ).catch(w)
            }
            )
        }
        t.testQuality = function(e, t, n, o, s) {
            return v = !1,
            g = !1,
            new r((a,u)=>{
                h = !(!o || !o.audioOnly),
                f = h ? c.default.getStatsAudioOnlyDuration : c.default.getStatsVideoAndAudioTestDuration,
                o && o.timeout && (f = Math.min(f, o.timeout, 3e4));
                const p = e=>{
                    d = void 0,
                    n.logEvent({
                        action: "testQuality",
                        variation: "Success"
                    }),
                    a(e)
                }
                  , v = e=>{
                    d = void 0,
                    n.logEvent({
                        action: "testQuality",
                        variation: "Failure"
                    }),
                    u(e)
                }
                ;
                new r((e,t)=>{
                    const {supported: n, browser: r} = l.default();
                    return n ? e() : t(new i.UnsupportedBrowserError(r))
                }
                ).then(()=>{
                    let n = {};
                    o && o.initSessionOptions && (n = o.initSessionOptions),
                    o && o.proxyServerUrl && (e.hasOwnProperty("setProxyUrl") || (n.proxyUrl = o.proxyServerUrl));
                    const r = e.initSession(t.apiKey, t.sessionId, n);
                    y(e, r, t, o, s).then(p).catch(v)
                }
                ).catch(v)
            }
            )
        }
        ,
        t.stopQualityTest = function() {
            g = !0,
            v && d && d()
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = n(6)
          , o = n(2);
        class i extends r.NetworkTestError {
            constructor(e, t) {
                super(e, t || o.ErrorNames.QUALITY_TEST_ERROR)
            }
        }
        t.QualityTestError = i,
        t.UnsupportedBrowserError = class extends i {
            constructor(e) {
                super(`Your current browser (${e}) does not support the audio-video quality test. Please run the test in a supported browser.`, o.ErrorNames.UNSUPPORTED_BROWSER)
            }
        }
        ;
        class s extends i {
            constructor(e, t) {
                super(e || "Failed to connect to the session due to a network error.", t || o.ErrorNames.CONNECT_TO_SESSION_ERROR)
            }
        }
        t.ConnectToSessionError = s,
        t.ConnectToSessionTokenError = class extends s {
            constructor() {
                super("Failed to connect to the session due to an invalid token.", o.ErrorNames.CONNECT_TO_SESSION_TOKEN_ERROR)
            }
        }
        ,
        t.ConnectToSessionSessionIdError = class extends s {
            constructor() {
                super("Failed to connect to the session due to an invalid session ID.", o.ErrorNames.CONNECT_TO_SESSION_ID_ERROR)
            }
        }
        ,
        t.ConnectToSessionNetworkError = class extends s {
            constructor() {
                super("Failed to connect to the session due to a network error.", o.ErrorNames.CONNECT_TO_SESSION_NETWORK_ERROR)
            }
        }
        ,
        t.MediaDeviceError = class extends i {
            constructor(e, t) {
                super(e || "OpenTok failed to find media devices for this browser.", t || o.ErrorNames.MEDIA_DEVICE_ERROR)
            }
        }
        ,
        t.FailedToObtainMediaDevices = class extends i {
            constructor() {
                super("Failed to obtain media devices.", o.ErrorNames.FAILED_TO_OBTAIN_MEDIA_DEVICES)
            }
        }
        ,
        t.NoVideoCaptureDevicesError = class extends i {
            constructor() {
                super("This browser has no video capture devices", o.ErrorNames.NO_VIDEO_CAPTURE_DEVICES)
            }
        }
        ,
        t.NoAudioCaptureDevicesError = class extends i {
            constructor() {
                super("This browser has no audio capture devices.", o.ErrorNames.NO_AUDIO_CAPTURE_DEVICES)
            }
        }
        ;
        class a extends i {
            constructor(e, t) {
                super(e || "Encountered an unknown error while attempting to publish to a session.", t || o.ErrorNames.PUBLISH_TO_SESSION_ERROR)
            }
        }
        t.PublishToSessionError = a,
        t.InitPublisherError = class extends a {
            constructor(e) {
                super(e || "Failed to initialize publisher.", o.ErrorNames.INIT_PUBLISHER_ERROR)
            }
        }
        ,
        t.PublishToSessionNotConnectedError = class extends a {
            constructor() {
                super("Precall failed to publish to the session because it was not connected.", o.ErrorNames.PUBLISH_TO_SESSION_NOT_CONNECTED)
            }
        }
        ,
        t.PublishToSessionPermissionOrTimeoutError = class extends a {
            constructor() {
                super("Precall failed to publish to the session due a permissions error or timeout.", o.ErrorNames.PUBLISH_TO_SESSION_PERMISSION_OR_TIMEOUT_ERROR)
            }
        }
        ;
        class u extends i {
            constructor(e, t) {
                super(e || "Encountered an unknown error while attempting to publish to a session.", t || o.ErrorNames.SUBSCRIBE_TO_SESSION_ERROR)
            }
        }
        t.SubscribeToSessionError = u,
        t.SubscriberGetStatsError = class extends u {
            constructor() {
                super("Failed to get network stats for a subscriber.", o.ErrorNames.SUBSCRIBER_GET_STATS_ERROR)
            }
        }
        ,
        t.MissingSubscriberError = class extends u {
            constructor() {
                super("Call checkSubscribeToSession before calling checkSubscriberQuality.", o.ErrorNames.MISSING_SUBSCRIBER_ERROR)
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, i) {
                function s(e) {
                    try {
                        u(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function a(e) {
                    try {
                        u(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function u(e) {
                    e.done ? o(e.value) : new n((function(t) {
                        t(e.value)
                    }
                    )).then(s, a)
                }
                u((r = r.apply(e, t || [])).next())
            }
            ))
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const o = n(56)
          , i = n(57)
          , s = n(20)
          , a = n(1)
          , u = n(59)
          , c = e=>a.getOr(0, "packetsLost", e)
          , l = e=>c(e) + (e=>a.getOr(0, "packetsReceived", e))(e);
        function f(e, t, n) {
            const r = ()=>1e3 * (()=>{
                if (t) {
                    const {rtcStatsReport: e} = t[0];
                    let n = 0;
                    e.forEach(e=>{
                        "remote-inbound-rtp" === e.type && "audio" === e.kind && (n = isNaN(e.roundTripTime) ? 0 : e.roundTripTime)
                    }
                    )
                }
                return 0
            }
            )() / 2 || 150
              , o = a.last(n)
              , i = a.nth(-2, n);
            if (!o || !i || !e.stream)
                return 1;
            const s = (u = i,
            l(o.audio) - l(u.audio));
            var u;
            if (0 === s)
                return 1;
            let f = (c(o.audio) - c(i.audio)) / s;
            return f < 0 && (f = 0),
            (e=>{
                const t = r();
                return (n = (()=>{
                    const n = t + 30;
                    return 93.2 - (.024 * n + .11 * (n - 177.3) * (n - 177.3 < 0 ? 0 : 1)) - (0 + 19.8 * Math.log(1 + 29.7 * e))
                }
                )()) < 0 ? 1 : n > 100 ? 4.5 : 1 + .035 * n + n * (n - 60) * (100 - n) * 7e-6;
                var n
            }
            )(f)
        }
        t.default = function(e, t, n, c, l) {
            return e.intervalId = window.setInterval(()=>{
                t.getStats((s,d)=>r(this, void 0, void 0, (function*() {
                    if (!d)
                        return null;
                    let r = null;
                    try {
                        r = yield u.default(n)
                    } catch (e) {}
                    if (d.audio.bytesReceived < 0 || a.getOr(1, "video.bytesReceived", d) < 0)
                        return e.clearInterval(),
                        l(e);
                    if (d && e.statsLog.push(d),
                    c && "function" == typeof c && c(s, d),
                    e.statsLog.length < 2)
                        return null;
                    e.stats = i.default(e);
                    const p = function(e, t) {
                        const n = a.last(t)
                          , r = a.nth(-2, t);
                        if (!n || !r || !e.stream)
                            return 1;
                        const o = ((e,t,n)=>{
                            const r = t.timestamp - n.timestamp;
                            return t[e] && t[e].bytesReceived ? 8 * (t[e].bytesReceived - n[e].bytesReceived) / (r / 1e3) : 0
                        }
                        )("video", n, r)
                          , i = (e=>{
                            const t = 2.069924867 * Math.pow(Math.log10(e), .6250223771);
                            return Math.pow(10, t)
                        }
                        )(e.stream.videoDimensions.width * e.stream.videoDimensions.height);
                        if (o < 3e4)
                            return 1;
                        const s = Math.min(o, i);
                        let u = Math.log(s / 3e4) / Math.log(i / 3e4) * 4 + 1;
                        return u = Math.min(u, 4.5),
                        u
                    }(t, e.statsLog);
                    e.videoScoresLog.push(p);
                    const h = f(t, r, e.statsLog);
                    return e.audioScoresLog.push(h),
                    e.pruneScores(),
                    o.default(e.statsLog) ? (e.clearInterval(),
                    l(e)) : null
                }
                )))
            }
            , s.default.scoreInterval),
            t.on("destroyed", e.clearInterval.bind(e)),
            e
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = n(18)
          , o = n(19)
          , i = n(4);
        t.default = function(e) {
            const t = r.default(e)
              , n = i.default.steadyStateAllowedDelta;
            let s = !0;
            if (t.length < i.default.minimumVideoAndAudioTestSampleSize)
                return !1;
            const a = o.default(t);
            return ["video", "audio"].forEach(e=>{
                for (let t = 1; t < a[e].length; t += 1) {
                    const r = a[e][t].averageBitrate
                      , o = a[e][t - 1].averageBitrate;
                    r - o > o * n && (s = !1)
                }
            }
            ),
            s
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = n(18)
          , o = n(19)
          , i = n(58)
          , s = n(4)
          , a = n(1);
        function u(e, t) {
            let n = 0
              , r = 0
              , o = 0;
            t.forEach(t=>{
                n += t.averageBitrate,
                r += t.packetLossRatio,
                "video" === e && (o += Number(a.getOr(0, "frameRate", t)))
            }
            );
            const s = {
                bitrate: n / t.length,
                packetLossRatio: r / t.length
            };
            if ("video" === e) {
                const {supported: n, reason: r, recommendedResolution: a, recommendedFrameRate: u} = i.default(s)
                  , c = "video" === e ? {
                    recommendedResolution: a,
                    recommendedFrameRate: u,
                    frameRate: o / t.length
                } : {};
                return Object.assign({}, s, {
                    supported: n,
                    reason: r
                }, c)
            }
            return Object.assign({}, s)
        }
        t.default = function(e) {
            const t = r.default(e.statsLog)
              , n = o.default(t);
            return {
                audio: e.hasAudioTrack() ? u("audio", n.audio) : {
                    supported: !1,
                    reason: s.default.strings.noMic
                },
                video: e.audioOnlyFallback ? {
                    supported: !1,
                    reason: s.default.strings.bandwidthLow
                } : e.hasVideoTrack() ? u("video", n.video) : {
                    supported: !1,
                    reason: s.default.strings.noCam
                }
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = n(4)
          , o = n(1);
        t.default = function(e) {
            const t = r.default.qualityThresholds.video
              , n = e.bitrate
              , i = e.packetLossRatio;
            let s, a = !1, u = 30, c = "";
            for (let e = 0; e < t.length; e += 1) {
                const r = t[e];
                if (n >= r.bps && i <= r.plr) {
                    a = !0,
                    s = o.get("recommendedSetting", r),
                    u = Number(s.substring(s.indexOf("@") + 1).replace("FPS", "")),
                    c = s.substring(0, s.indexOf("@") - 1);
                    break
                }
            }
            const l = {
                supported: a,
                recommendedFrameRate: u,
                recommendedResolution: c
            };
            return a ? (l.recommendedFrameRate = u,
            l.recommendedResolution = c) : l.reason = r.default.strings.bandwidthLow,
            l
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = e=>new Promise(t=>{
            if ("function" != typeof e.getRtcStatsReport)
                return t(null);
            const n = e.getRtcStatsReport();
            n ? n.then(t).catch(()=>t(null)) : e.getRtcStatsReport((e,n)=>{
                t(n)
            }
            )
        }
        )
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = n(1);
        t.default = function() {
            const e = function() {
                const e = window && window.navigator;
                return "undefined" != typeof window && window.navigator ? r.get("mozGetUserMedia", e) ? "Firefox" : r.get("webkitGetUserMedia", e) ? window.hasOwnProperty("webkitRTCPeerConnection") ? e.userAgent.match(/Edg/) ? "Edge" : e.userAgent.match(/Opera|OPR\//) ? "Opera" : "Chrome" : e.userAgent.match(/Version\/(\d+).(\d+)/) ? "Safari" : "WebKit browser without WebRTC support" : e.mediaDevices && e.userAgent.match(/Edge\/(\d+).(\d+)$/) ? "non-Chromium Edge" : e.userAgent.indexOf("MSIE ") > 0 || e.userAgent.match(/Trident.*rv\:11\./) ? "Internet Explorer" : e.mediaDevices && e.userAgent.match(/AppleWebKit\/(\d+)\./) ? "Safari" : "unsupported browser" : "not a browser"
            }();
            return {
                browser: e,
                supported: ["Chrome", "Firefox", "Safari", "Edge", "Opera"].indexOf(e) > -1
            }
        }
    }
    , function(e, t, n) {
        var r, o, i, s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }(), a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ;
        "function" == typeof Symbol && Symbol.iterator,
        o = [n(7)],
        void 0 === (i = "function" == typeof (r = function(e) {
            var t = !1
              , n = void 0
              , r = function(r) {
                var o = function(e) {
                    if (!e.clientVersion)
                        throw console.log("Error. The clientVersion field cannot be null in the log entry"),
                        new Error("The clientVersion field cannot be null in the log entry");
                    if (!e.source)
                        throw console.log("Error. The source field cannot be null in the log entry"),
                        new Error("The source field cannot be null in the log entry");
                    if (!e.componentId)
                        throw console.log("Error. The componentId field cannot be null in the log entry"),
                        new Error("The componentId field cannot be null in the log entry");
                    if (!e.name)
                        throw console.log("Error. The name field cannot be null in the log entry"),
                        new Error("The guid field cannot be null in the log entry");
                    var t = e.logVersion || "2"
                      , n = e.clientSystemTime || (new Date).getTime();
                    return a({}, e, {
                        logVersion: t,
                        clientSystemTime: n
                    })
                }(r);
                if (t)
                    e.post(n, o);
                else {
                    var i = new XMLHttpRequest;
                    i.open("POST", n, !0),
                    i.setRequestHeader("Content-type", "application/json"),
                    i.send(JSON.stringify(o))
                }
            };
            return function() {
                function e(r, o) {
                    (function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    )(this, e),
                    this.analyticsData = r,
                    t = o && o.server;
                    var i = "hlg.tokbox.com/prod/logging/ClientEvent";
                    n = o && o.proxyUrl && o.proxyUrl + "/" + i || "https://" + i,
                    this.analyticsData.guid = function(e) {
                        return function(e) {
                            if (t)
                                return null;
                            for (var n = e + "=", r = document.cookie.split(";"), o = void 0, i = 0; i < r.length; i++) {
                                for (o = r[i]; " " === o.charAt(0); )
                                    o = o.substring(1, o.length);
                                if (0 === o.indexOf(n))
                                    return o.substring(n.length, o.length)
                            }
                            return null
                        }(e) || function(e, n, r) {
                            if (t)
                                return n;
                            var o = void 0;
                            (o = new Date).setTime(o.getTime() + 6048e5);
                            var i = [e, "=", n, ["; expires=", o.toGMTString()].join(""), "; path=/"].join("");
                            return document.cookie = i,
                            n
                        }(e, function() {
                            for (var e = [], t = "0123456789abcdef", n = 0; n < 36; n++)
                                e.push(t.substr(Math.floor(16 * Math.random()), 1));
                            return e[14] = "4",
                            e[19] = t.substr(3 & e[19] | 8, 1),
                            e[8] = e[13] = e[18] = e[23] = "-",
                            e.join("")
                        }())
                    }(r.name)
                }
                return s(e, [{
                    key: "addSessionInfo",
                    value: function(e) {
                        if (!e.sessionId)
                            throw console.log("Error. The sessionId field cannot be null in the log entry"),
                            new Error("The sessionId field cannot be null in the log entry");
                        if (this.analyticsData.sessionId = e.sessionId,
                        !e.connectionId)
                            throw console.log("Error. The connectionId field cannot be null in the log entry"),
                            new Error("The connectionId field cannot be null in the log entry");
                        if (this.analyticsData.connectionId = e.connectionId,
                        0 === e.partnerId)
                            throw console.log("Error. The partnerId field cannot be null in the log entry"),
                            new Error("The partnerId field cannot be null in the log entry");
                        this.analyticsData.partnerId = e.partnerId
                    }
                }, {
                    key: "logEvent",
                    value: function(e) {
                        this.analyticsData = a({}, this.analyticsData, e, {
                            clientSystemTime: (new Date).getTime()
                        }),
                        r(this.analyticsData)
                    }
                }]),
                e
            }()
        }
        ) ? r.apply(t, o) : r) || (e.exports = i)
    }
    ])
}
]);
