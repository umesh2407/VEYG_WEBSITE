/*! For license information please see main.f6e25bbf.js.LICENSE.txt */
(() => { var e = { 4037: (e, t, n) => { "use strict"; var r = n(2506),
                    i = n(9722),
                    a = i(r("String.prototype.indexOf"));
                e.exports = function(e, t) { var n = r(e, !!t); return "function" === typeof n && a(e, ".prototype.") > -1 ? i(n) : n } }, 9722: (e, t, n) => { "use strict"; var r = n(3350),
                    i = n(2506),
                    a = n(5986),
                    s = i("%TypeError%"),
                    o = i("%Function.prototype.apply%"),
                    l = i("%Function.prototype.call%"),
                    c = i("%Reflect.apply%", !0) || r.call(l, o),
                    u = i("%Object.defineProperty%", !0),
                    d = i("%Math.max%"); if (u) try { u({}, "a", { value: 1 }) } catch (h) { u = null }
                e.exports = function(e) { if ("function" !== typeof e) throw new s("a function is required"); var t = c(r, l, arguments); return a(t, 1 + d(0, e.length - (arguments.length - 1)), !0) }; var f = function() { return c(r, o, arguments) };
                u ? u(e.exports, "apply", { value: f }) : e.exports.apply = f }, 4532: (e, t, n) => { "use strict";
                n.r(t), n.d(t, { addEventListener: () => c }); var r = !("undefined" === typeof window || !window.document || !window.document.createElement); var i = void 0;

                function a() { return void 0 === i && (i = function() { if (!r) return !1; if (!window.addEventListener || !window.removeEventListener || !Object.defineProperty) return !1; var e = !1; try { var t = Object.defineProperty({}, "passive", { get: function() { e = !0 } }),
                                n = function() {};
                            window.addEventListener("testPassiveEventSupport", n, t), window.removeEventListener("testPassiveEventSupport", n, t) } catch (i) {} return e }()), i }

                function s(e) { e.handlers === e.nextHandlers && (e.nextHandlers = e.handlers.slice()) }

                function o(e) { this.target = e, this.events = {} }
                o.prototype.getEventHandlers = function(e, t) { var n, r = String(e) + " " + String((n = t) ? !0 === n ? 100 : (n.capture << 0) + (n.passive << 1) + (n.once << 2) : 0); return this.events[r] || (this.events[r] = { handlers: [], handleEvent: void 0 }, this.events[r].nextHandlers = this.events[r].handlers), this.events[r] }, o.prototype.handleEvent = function(e, t, n) { var r = this.getEventHandlers(e, t);
                    r.handlers = r.nextHandlers, r.handlers.forEach((function(e) { e && e(n) })) }, o.prototype.add = function(e, t, n) { var r = this,
                        i = this.getEventHandlers(e, n);
                    s(i), 0 === i.nextHandlers.length && (i.handleEvent = this.handleEvent.bind(this, e, n), this.target.addEventListener(e, i.handleEvent, n)), i.nextHandlers.push(t); var a = !0; return function() { if (a) { a = !1, s(i); var o = i.nextHandlers.indexOf(t);
                            i.nextHandlers.splice(o, 1), 0 === i.nextHandlers.length && (r.target && r.target.removeEventListener(e, i.handleEvent, n), i.handleEvent = void 0) } } }; var l = "__consolidated_events_handlers__";

                function c(e, t, n, r) { e[l] || (e[l] = new o(e)); var i = function(e) { if (e) return a() ? e : !!e.capture }(r); return e[l].add(t, n, i) } }, 2651: (e, t, n) => { "use strict"; var r = n(4510)(),
                    i = n(2506),
                    a = r && i("%Object.defineProperty%", !0); if (a) try { a({}, "a", { value: 1 }) } catch (c) { a = !1 }
                var s = i("%SyntaxError%"),
                    o = i("%TypeError%"),
                    l = n(3347);
                e.exports = function(e, t, n) { if (!e || "object" !== typeof e && "function" !== typeof e) throw new o("`obj` must be an object or a function`"); if ("string" !== typeof t && "symbol" !== typeof t) throw new o("`property` must be a string or a symbol`"); if (arguments.length > 3 && "boolean" !== typeof arguments[3] && null !== arguments[3]) throw new o("`nonEnumerable`, if provided, must be a boolean or null"); if (arguments.length > 4 && "boolean" !== typeof arguments[4] && null !== arguments[4]) throw new o("`nonWritable`, if provided, must be a boolean or null"); if (arguments.length > 5 && "boolean" !== typeof arguments[5] && null !== arguments[5]) throw new o("`nonConfigurable`, if provided, must be a boolean or null"); if (arguments.length > 6 && "boolean" !== typeof arguments[6]) throw new o("`loose`, if provided, must be a boolean"); var r = arguments.length > 3 ? arguments[3] : null,
                        i = arguments.length > 4 ? arguments[4] : null,
                        c = arguments.length > 5 ? arguments[5] : null,
                        u = arguments.length > 6 && arguments[6],
                        d = !!l && l(e, t); if (a) a(e, t, { configurable: null === c && d ? d.configurable : !c, enumerable: null === r && d ? d.enumerable : !r, value: n, writable: null === i && d ? d.writable : !i });
                    else { if (!u && (r || i || c)) throw new s("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
                        e[t] = n } } }, 9396: (e, t, n) => { "use strict"; var r = n(4892),
                    i = "function" === typeof Symbol && "symbol" === typeof Symbol("foo"),
                    a = Object.prototype.toString,
                    s = Array.prototype.concat,
                    o = n(2651),
                    l = n(4510)(),
                    c = function(e, t, n, r) { if (t in e)
                            if (!0 === r) { if (e[t] === n) return } else if ("function" !== typeof(i = r) || "[object Function]" !== a.call(i) || !r()) return; var i;
                        l ? o(e, t, n, !0) : o(e, t, n) },
                    u = function(e, t) { var n = arguments.length > 2 ? arguments[2] : {},
                            a = r(t);
                        i && (a = s.call(a, Object.getOwnPropertySymbols(t))); for (var o = 0; o < a.length; o += 1) c(e, a[o], t[a[o]], n[a[o]]) };
                u.supportsDescriptors = !!l, e.exports = u }, 6168: e => { "use strict";
                e.exports = function(e) { if (arguments.length < 1) throw new TypeError("1 argument is required"); if ("object" !== typeof e) throw new TypeError("Argument 1 (\u201dother\u201c) to Node.contains must be an instance of Node"); var t = e;
                    do { if (this === t) return !0;
                        t && (t = t.parentNode) } while (t); return !1 } }, 7699: (e, t, n) => { "use strict"; var r = n(9396),
                    i = n(6168),
                    a = n(1809),
                    s = a(),
                    o = function(e, t) { return s.apply(e, [t]) };
                r(o, { getPolyfill: a, implementation: i, shim: n(943) }), e.exports = o }, 1809: (e, t, n) => { "use strict"; var r = n(6168);
                e.exports = function() { if ("undefined" !== typeof document) { if (document.contains) return document.contains; if (document.body && document.body.contains) try { if ("boolean" === typeof document.body.contains.call(document, "")) return document.body.contains } catch (e) {} } return r } }, 943: (e, t, n) => { "use strict"; var r = n(9396),
                    i = n(1809);
                e.exports = function() { var e = i(); return "undefined" !== typeof document && (r(document, { contains: e }, { contains: function() { return document.contains !== e } }), "undefined" !== typeof Element && r(Element.prototype, { contains: e }, { contains: function() { return Element.prototype.contains !== e } })), e } }, 222: e => { "use strict"; var t = Object.prototype.toString,
                    n = Math.max,
                    r = function(e, t) { for (var n = [], r = 0; r < e.length; r += 1) n[r] = e[r]; for (var i = 0; i < t.length; i += 1) n[i + e.length] = t[i]; return n };
                e.exports = function(e) { var i = this; if ("function" !== typeof i || "[object Function]" !== t.apply(i)) throw new TypeError("Function.prototype.bind called on incompatible " + i); for (var a, s = function(e, t) { for (var n = [], r = t || 0, i = 0; r < e.length; r += 1, i += 1) n[i] = e[r]; return n }(arguments, 1), o = n(0, i.length - s.length), l = [], c = 0; c < o; c++) l[c] = "$" + c; if (a = Function("binder", "return function (" + function(e, t) { for (var n = "", r = 0; r < e.length; r += 1) n += e[r], r + 1 < e.length && (n += t); return n }(l, ",") + "){ return binder.apply(this,arguments); }")((function() { if (this instanceof a) { var t = i.apply(this, r(s, arguments)); return Object(t) === t ? t : this } return i.apply(e, r(s, arguments)) })), i.prototype) { var u = function() {};
                        u.prototype = i.prototype, a.prototype = new u, u.prototype = null } return a } }, 3350: (e, t, n) => { "use strict"; var r = n(222);
                e.exports = Function.prototype.bind || r }, 2506: (e, t, n) => { "use strict"; var r, i = SyntaxError,
                    a = Function,
                    s = TypeError,
                    o = function(e) { try { return a('"use strict"; return (' + e + ").constructor;")() } catch (t) {} },
                    l = Object.getOwnPropertyDescriptor; if (l) try { l({}, "") } catch (F) { l = null }
                var c = function() { throw new s },
                    u = l ? function() { try { return c } catch (e) { try { return l(arguments, "callee").get } catch (t) { return c } } }() : c,
                    d = n(697)(),
                    f = n(2203)(),
                    h = Object.getPrototypeOf || (f ? function(e) { return e.__proto__ } : null),
                    p = {},
                    m = "undefined" !== typeof Uint8Array && h ? h(Uint8Array) : r,
                    x = { "%AggregateError%": "undefined" === typeof AggregateError ? r : AggregateError, "%Array%": Array, "%ArrayBuffer%": "undefined" === typeof ArrayBuffer ? r : ArrayBuffer, "%ArrayIteratorPrototype%": d && h ? h([][Symbol.iterator]()) : r, "%AsyncFromSyncIteratorPrototype%": r, "%AsyncFunction%": p, "%AsyncGenerator%": p, "%AsyncGeneratorFunction%": p, "%AsyncIteratorPrototype%": p, "%Atomics%": "undefined" === typeof Atomics ? r : Atomics, "%BigInt%": "undefined" === typeof BigInt ? r : BigInt, "%BigInt64Array%": "undefined" === typeof BigInt64Array ? r : BigInt64Array, "%BigUint64Array%": "undefined" === typeof BigUint64Array ? r : BigUint64Array, "%Boolean%": Boolean, "%DataView%": "undefined" === typeof DataView ? r : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Error, "%eval%": eval, "%EvalError%": EvalError, "%Float32Array%": "undefined" === typeof Float32Array ? r : Float32Array, "%Float64Array%": "undefined" === typeof Float64Array ? r : Float64Array, "%FinalizationRegistry%": "undefined" === typeof FinalizationRegistry ? r : FinalizationRegistry, "%Function%": a, "%GeneratorFunction%": p, "%Int8Array%": "undefined" === typeof Int8Array ? r : Int8Array, "%Int16Array%": "undefined" === typeof Int16Array ? r : Int16Array, "%Int32Array%": "undefined" === typeof Int32Array ? r : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": d && h ? h(h([][Symbol.iterator]())) : r, "%JSON%": "object" === typeof JSON ? JSON : r, "%Map%": "undefined" === typeof Map ? r : Map, "%MapIteratorPrototype%": "undefined" !== typeof Map && d && h ? h((new Map)[Symbol.iterator]()) : r, "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": "undefined" === typeof Promise ? r : Promise, "%Proxy%": "undefined" === typeof Proxy ? r : Proxy, "%RangeError%": RangeError, "%ReferenceError%": ReferenceError, "%Reflect%": "undefined" === typeof Reflect ? r : Reflect, "%RegExp%": RegExp, "%Set%": "undefined" === typeof Set ? r : Set, "%SetIteratorPrototype%": "undefined" !== typeof Set && d && h ? h((new Set)[Symbol.iterator]()) : r, "%SharedArrayBuffer%": "undefined" === typeof SharedArrayBuffer ? r : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": d && h ? h("" [Symbol.iterator]()) : r, "%Symbol%": d ? Symbol : r, "%SyntaxError%": i, "%ThrowTypeError%": u, "%TypedArray%": m, "%TypeError%": s, "%Uint8Array%": "undefined" === typeof Uint8Array ? r : Uint8Array, "%Uint8ClampedArray%": "undefined" === typeof Uint8ClampedArray ? r : Uint8ClampedArray, "%Uint16Array%": "undefined" === typeof Uint16Array ? r : Uint16Array, "%Uint32Array%": "undefined" === typeof Uint32Array ? r : Uint32Array, "%URIError%": URIError, "%WeakMap%": "undefined" === typeof WeakMap ? r : WeakMap, "%WeakRef%": "undefined" === typeof WeakRef ? r : WeakRef, "%WeakSet%": "undefined" === typeof WeakSet ? r : WeakSet }; if (h) try { null.error } catch (F) { var g = h(h(F));
                    x["%Error.prototype%"] = g }
                var v = function e(t) { var n; if ("%AsyncFunction%" === t) n = o("async function () {}");
                        else if ("%GeneratorFunction%" === t) n = o("function* () {}");
                        else if ("%AsyncGeneratorFunction%" === t) n = o("async function* () {}");
                        else if ("%AsyncGenerator%" === t) { var r = e("%AsyncGeneratorFunction%");
                            r && (n = r.prototype) } else if ("%AsyncIteratorPrototype%" === t) { var i = e("%AsyncGenerator%");
                            i && h && (n = h(i.prototype)) } return x[t] = n, n },
                    y = { "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] },
                    C = n(3350),
                    w = n(9670),
                    b = C.call(Function.call, Array.prototype.concat),
                    j = C.call(Function.apply, Array.prototype.splice),
                    k = C.call(Function.call, String.prototype.replace),
                    N = C.call(Function.call, String.prototype.slice),
                    S = C.call(Function.call, RegExp.prototype.exec),
                    E = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                    P = /\\(\\)?/g,
                    M = function(e, t) { var n, r = e; if (w(y, r) && (r = "%" + (n = y[r])[0] + "%"), w(x, r)) { var a = x[r]; if (a === p && (a = v(r)), "undefined" === typeof a && !t) throw new s("intrinsic " + e + " exists, but is not available. Please file an issue!"); return { alias: n, name: r, value: a } } throw new i("intrinsic " + e + " does not exist!") };
                e.exports = function(e, t) { if ("string" !== typeof e || 0 === e.length) throw new s("intrinsic name must be a non-empty string"); if (arguments.length > 1 && "boolean" !== typeof t) throw new s('"allowMissing" argument must be a boolean'); if (null === S(/^%?[^%]*%?$/, e)) throw new i("`%` may not be present anywhere but at the beginning and end of the intrinsic name"); var n = function(e) { var t = N(e, 0, 1),
                                n = N(e, -1); if ("%" === t && "%" !== n) throw new i("invalid intrinsic syntax, expected closing `%`"); if ("%" === n && "%" !== t) throw new i("invalid intrinsic syntax, expected opening `%`"); var r = []; return k(e, E, (function(e, t, n, i) { r[r.length] = n ? k(i, P, "$1") : t || e })), r }(e),
                        r = n.length > 0 ? n[0] : "",
                        a = M("%" + r + "%", t),
                        o = a.name,
                        c = a.value,
                        u = !1,
                        d = a.alias;
                    d && (r = d[0], j(n, b([0, 1], d))); for (var f = 1, h = !0; f < n.length; f += 1) { var p = n[f],
                            m = N(p, 0, 1),
                            g = N(p, -1); if (('"' === m || "'" === m || "`" === m || '"' === g || "'" === g || "`" === g) && m !== g) throw new i("property names with quotes must have matching quotes"); if ("constructor" !== p && h || (u = !0), w(x, o = "%" + (r += "." + p) + "%")) c = x[o];
                        else if (null != c) { if (!(p in c)) { if (!t) throw new s("base intrinsic for " + e + " exists, but the property is not available."); return } if (l && f + 1 >= n.length) { var v = l(c, p);
                                c = (h = !!v) && "get" in v && !("originalValue" in v.get) ? v.get : c[p] } else h = w(c, p), c = c[p];
                            h && !u && (x[o] = c) } } return c } }, 3347: (e, t, n) => { "use strict"; var r = n(2506)("%Object.getOwnPropertyDescriptor%", !0); if (r) try { r([], "length") } catch (i) { r = null }
                e.exports = r }, 4510: (e, t, n) => { "use strict"; var r = n(2506)("%Object.defineProperty%", !0),
                    i = function() { if (r) try { return r({}, "a", { value: 1 }), !0 } catch (e) { return !1 }
                        return !1 };
                i.hasArrayLengthDefineBug = function() { if (!i()) return null; try { return 1 !== r([], "length", { value: 1 }).length } catch (e) { return !0 } }, e.exports = i }, 2203: e => { "use strict"; var t = { foo: {} },
                    n = Object;
                e.exports = function() { return { __proto__: t }.foo === t.foo && !({ __proto__: null }
                        instanceof n) } }, 697: (e, t, n) => { "use strict"; var r = "undefined" !== typeof Symbol && Symbol,
                    i = n(3297);
                e.exports = function() { return "function" === typeof r && ("function" === typeof Symbol && ("symbol" === typeof r("foo") && ("symbol" === typeof Symbol("bar") && i()))) } }, 3297: e => { "use strict";
                e.exports = function() { if ("function" !== typeof Symbol || "function" !== typeof Object.getOwnPropertySymbols) return !1; if ("symbol" === typeof Symbol.iterator) return !0; var e = {},
                        t = Symbol("test"),
                        n = Object(t); if ("string" === typeof t) return !1; if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1; if ("[object Symbol]" !== Object.prototype.toString.call(n)) return !1; for (t in e[t] = 42, e) return !1; if ("function" === typeof Object.keys && 0 !== Object.keys(e).length) return !1; if ("function" === typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1; var r = Object.getOwnPropertySymbols(e); if (1 !== r.length || r[0] !== t) return !1; if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1; if ("function" === typeof Object.getOwnPropertyDescriptor) { var i = Object.getOwnPropertyDescriptor(e, t); if (42 !== i.value || !0 !== i.enumerable) return !1 } return !0 } }, 9670: (e, t, n) => { "use strict"; var r = Function.prototype.call,
                    i = Object.prototype.hasOwnProperty,
                    a = n(3350);
                e.exports = a.call(r, i) }, 1949: (e, t, n) => { "use strict"; var r; if (!Object.keys) { var i = Object.prototype.hasOwnProperty,
                        a = Object.prototype.toString,
                        s = n(7635),
                        o = Object.prototype.propertyIsEnumerable,
                        l = !o.call({ toString: null }, "toString"),
                        c = o.call((function() {}), "prototype"),
                        u = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                        d = function(e) { var t = e.constructor; return t && t.prototype === e },
                        f = { $applicationCache: !0, $console: !0, $external: !0, $frame: !0, $frameElement: !0, $frames: !0, $innerHeight: !0, $innerWidth: !0, $onmozfullscreenchange: !0, $onmozfullscreenerror: !0, $outerHeight: !0, $outerWidth: !0, $pageXOffset: !0, $pageYOffset: !0, $parent: !0, $scrollLeft: !0, $scrollTop: !0, $scrollX: !0, $scrollY: !0, $self: !0, $webkitIndexedDB: !0, $webkitStorageInfo: !0, $window: !0 },
                        h = function() { if ("undefined" === typeof window) return !1; for (var e in window) try { if (!f["$" + e] && i.call(window, e) && null !== window[e] && "object" === typeof window[e]) try { d(window[e]) } catch (t) { return !0 } } catch (t) { return !0 }
                            return !1 }();
                    r = function(e) { var t = null !== e && "object" === typeof e,
                            n = "[object Function]" === a.call(e),
                            r = s(e),
                            o = t && "[object String]" === a.call(e),
                            f = []; if (!t && !n && !r) throw new TypeError("Object.keys called on a non-object"); var p = c && n; if (o && e.length > 0 && !i.call(e, 0))
                            for (var m = 0; m < e.length; ++m) f.push(String(m)); if (r && e.length > 0)
                            for (var x = 0; x < e.length; ++x) f.push(String(x));
                        else
                            for (var g in e) p && "prototype" === g || !i.call(e, g) || f.push(String(g)); if (l)
                            for (var v = function(e) { if ("undefined" === typeof window || !h) return d(e); try { return d(e) } catch (t) { return !1 } }(e), y = 0; y < u.length; ++y) v && "constructor" === u[y] || !i.call(e, u[y]) || f.push(u[y]); return f } }
                e.exports = r }, 4892: (e, t, n) => { "use strict"; var r = Array.prototype.slice,
                    i = n(7635),
                    a = Object.keys,
                    s = a ? function(e) { return a(e) } : n(1949),
                    o = Object.keys;
                s.shim = function() { if (Object.keys) { var e = function() { var e = Object.keys(arguments); return e && e.length === arguments.length }(1, 2);
                        e || (Object.keys = function(e) { return i(e) ? o(r.call(e)) : o(e) }) } else Object.keys = s; return Object.keys || s }, e.exports = s }, 7635: e => { "use strict"; var t = Object.prototype.toString;
                e.exports = function(e) { var n = t.call(e),
                        r = "[object Arguments]" === n; return r || (r = "[object Array]" !== n && null !== e && "object" === typeof e && "number" === typeof e.length && e.length >= 0 && "[object Function]" === t.call(e.callee)), r } }, 7917: (e, t, n) => { "use strict"; var r = n(7724),
                    i = n(4037),
                    a = i("Object.prototype.propertyIsEnumerable"),
                    s = i("Array.prototype.push");
                e.exports = function(e) { var t = r(e),
                        n = []; for (var i in t) a(t, i) && s(n, t[i]); return n } }, 2808: (e, t, n) => { "use strict"; var r = n(9396),
                    i = n(9722),
                    a = n(7917),
                    s = n(570),
                    o = n(2794),
                    l = i(s(), Object);
                r(l, { getPolyfill: s, implementation: a, shim: o }), e.exports = l }, 570: (e, t, n) => { "use strict"; var r = n(7917);
                e.exports = function() { return "function" === typeof Object.values ? Object.values : r } }, 2794: (e, t, n) => { "use strict"; var r = n(570),
                    i = n(9396);
                e.exports = function() { var e = r(); return i(Object, { values: e }, { values: function() { return Object.values !== e } }), e } }, 888: (e, t, n) => { "use strict"; var r = n(9047);

                function i() {}

                function a() {}
                a.resetWarningCache = i, e.exports = function() {
                    function e(e, t, n, i, a, s) { if (s !== r) { var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"); throw o.name = "Invariant Violation", o } }

                    function t() { return e }
                    e.isRequired = e; var n = { array: e, bigint: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, elementType: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: a, resetWarningCache: i }; return n.PropTypes = n, n } }, 2007: (e, t, n) => { e.exports = n(888)() }, 9047: e => { "use strict";
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" }, 4463: (e, t, n) => { "use strict"; var r = n(2791),
                    i = n(5296);

                function a(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." } var s = new Set,
                    o = {};

                function l(e, t) { c(e, t), c(e + "Capture", t) }

                function c(e, t) { for (o[e] = t, e = 0; e < t.length; e++) s.add(t[e]) } var u = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                    d = Object.prototype.hasOwnProperty,
                    f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    h = {},
                    p = {};

                function m(e, t, n, r, i, a, s) { this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = s } var x = {}; "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) { x[e] = new m(e, 0, !1, e, null, !1, !1) })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function(e) { var t = e[0];
                    x[t] = new m(t, 1, !1, e[1], null, !1, !1) })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) { x[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1) })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) { x[e] = new m(e, 2, !1, e, null, !1, !1) })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) { x[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1) })), ["checked", "multiple", "muted", "selected"].forEach((function(e) { x[e] = new m(e, 3, !0, e, null, !1, !1) })), ["capture", "download"].forEach((function(e) { x[e] = new m(e, 4, !1, e, null, !1, !1) })), ["cols", "rows", "size", "span"].forEach((function(e) { x[e] = new m(e, 6, !1, e, null, !1, !1) })), ["rowSpan", "start"].forEach((function(e) { x[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1) })); var g = /[\-:]([a-z])/g;

                function v(e) { return e[1].toUpperCase() }

                function y(e, t, n, r) { var i = x.hasOwnProperty(t) ? x[t] : null;
                    (null !== i ? 0 !== i.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) { if (null === t || "undefined" === typeof t || function(e, t, n, r) { if (null !== n && 0 === n.type) return !1; switch (typeof t) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1 } }(e, t, n, r)) return !0; if (r) return !1; if (null !== n) switch (n.type) {
                            case 3:
                                return !t;
                            case 4:
                                return !1 === t;
                            case 5:
                                return isNaN(t);
                            case 6:
                                return isNaN(t) || 1 > t }
                        return !1 }(t, n, i, r) && (n = null), r || null === i ? function(e) { return !!d.call(p, e) || !d.call(h, e) && (f.test(e) ? p[e] = !0 : (h[e] = !0, !1)) }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = null === n ? 3 !== i.type && "" : n : (t = i.attributeName, r = i.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (i = i.type) || 4 === i && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))) } "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) { var t = e.replace(g, v);
                    x[t] = new m(t, 1, !1, e, null, !1, !1) })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) { var t = e.replace(g, v);
                    x[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1) })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) { var t = e.replace(g, v);
                    x[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1) })), ["tabIndex", "crossOrigin"].forEach((function(e) { x[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1) })), x.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) { x[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0) })); var C = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    w = Symbol.for("react.element"),
                    b = Symbol.for("react.portal"),
                    j = Symbol.for("react.fragment"),
                    k = Symbol.for("react.strict_mode"),
                    N = Symbol.for("react.profiler"),
                    S = Symbol.for("react.provider"),
                    E = Symbol.for("react.context"),
                    P = Symbol.for("react.forward_ref"),
                    M = Symbol.for("react.suspense"),
                    F = Symbol.for("react.suspense_list"),
                    L = Symbol.for("react.memo"),
                    T = Symbol.for("react.lazy");
                Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode"); var A = Symbol.for("react.offscreen");
                Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker"); var V = Symbol.iterator;

                function R(e) { return null === e || "object" !== typeof e ? null : "function" === typeof(e = V && e[V] || e["@@iterator"]) ? e : null } var B, D = Object.assign;

                function z(e) { if (void 0 === B) try { throw Error() } catch (n) { var t = n.stack.trim().match(/\n( *(at )?)/);
                        B = t && t[1] || "" }
                    return "\n" + B + e } var O = !1;

                function _(e, t) { if (!e || O) return "";
                    O = !0; var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0; try { if (t)
                            if (t = function() { throw Error() }, Object.defineProperty(t.prototype, "props", { set: function() { throw Error() } }), "object" === typeof Reflect && Reflect.construct) { try { Reflect.construct(t, []) } catch (c) { var r = c }
                                Reflect.construct(e, [], t) } else { try { t.call() } catch (c) { r = c }
                                e.call(t.prototype) }
                        else { try { throw Error() } catch (c) { r = c }
                            e() } } catch (c) { if (c && r && "string" === typeof c.stack) { for (var i = c.stack.split("\n"), a = r.stack.split("\n"), s = i.length - 1, o = a.length - 1; 1 <= s && 0 <= o && i[s] !== a[o];) o--; for (; 1 <= s && 0 <= o; s--, o--)
                                if (i[s] !== a[o]) { if (1 !== s || 1 !== o)
                                        do { if (s--, 0 > --o || i[s] !== a[o]) { var l = "\n" + i[s].replace(" at new ", " at "); return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l } } while (1 <= s && 0 <= o); break } } } finally { O = !1, Error.prepareStackTrace = n } return (e = e ? e.displayName || e.name : "") ? z(e) : "" }

                function H(e) { switch (e.tag) {
                        case 5:
                            return z(e.type);
                        case 16:
                            return z("Lazy");
                        case 13:
                            return z("Suspense");
                        case 19:
                            return z("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return e = _(e.type, !1);
                        case 11:
                            return e = _(e.type.render, !1);
                        case 1:
                            return e = _(e.type, !0);
                        default:
                            return "" } }

                function I(e) { if (null == e) return null; if ("function" === typeof e) return e.displayName || e.name || null; if ("string" === typeof e) return e; switch (e) {
                        case j:
                            return "Fragment";
                        case b:
                            return "Portal";
                        case N:
                            return "Profiler";
                        case k:
                            return "StrictMode";
                        case M:
                            return "Suspense";
                        case F:
                            return "SuspenseList" } if ("object" === typeof e) switch (e.$$typeof) {
                        case E:
                            return (e.displayName || "Context") + ".Consumer";
                        case S:
                            return (e._context.displayName || "Context") + ".Provider";
                        case P:
                            var t = e.render; return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                        case L:
                            return null !== (t = e.displayName || null) ? t : I(e.type) || "Memo";
                        case T:
                            t = e._payload, e = e._init; try { return I(e(t)) } catch (n) {} }
                    return null }

                function U(e) { var t = e.type; switch (e.tag) {
                        case 24:
                            return "Cache";
                        case 9:
                            return (t.displayName || "Context") + ".Consumer";
                        case 10:
                            return (t._context.displayName || "Context") + ".Provider";
                        case 18:
                            return "DehydratedFragment";
                        case 11:
                            return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                        case 7:
                            return "Fragment";
                        case 5:
                            return t;
                        case 4:
                            return "Portal";
                        case 3:
                            return "Root";
                        case 6:
                            return "Text";
                        case 16:
                            return I(t);
                        case 8:
                            return t === k ? "StrictMode" : "Mode";
                        case 22:
                            return "Offscreen";
                        case 12:
                            return "Profiler";
                        case 21:
                            return "Scope";
                        case 13:
                            return "Suspense";
                        case 19:
                            return "SuspenseList";
                        case 25:
                            return "TracingMarker";
                        case 1:
                        case 0:
                        case 17:
                        case 2:
                        case 14:
                        case 15:
                            if ("function" === typeof t) return t.displayName || t.name || null; if ("string" === typeof t) return t } return null }

                function Z(e) { switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                        case "object":
                            return e;
                        default:
                            return "" } }

                function W(e) { var t = e.type; return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t) }

                function $(e) { e._valueTracker || (e._valueTracker = function(e) { var t = W(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            r = "" + e[t]; if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) { var i = n.get,
                                a = n.set; return Object.defineProperty(e, t, { configurable: !0, get: function() { return i.call(this) }, set: function(e) { r = "" + e, a.call(this, e) } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() { return r }, setValue: function(e) { r = "" + e }, stopTracking: function() { e._valueTracker = null, delete e[t] } } } }(e)) }

                function G(e) { if (!e) return !1; var t = e._valueTracker; if (!t) return !0; var n = t.getValue(),
                        r = ""; return e && (r = W(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0) }

                function Y(e) { if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null; try { return e.activeElement || e.body } catch (t) { return e.body } }

                function q(e, t) { var n = t.checked; return D({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != n ? n : e._wrapperState.initialChecked }) }

                function X(e, t) { var n = null == t.defaultValue ? "" : t.defaultValue,
                        r = null != t.checked ? t.checked : t.defaultChecked;
                    n = Z(null != t.value ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value } }

                function Q(e, t) { null != (t = t.checked) && y(e, "checked", t, !1) }

                function K(e, t) { Q(e, t); var n = Z(t.value),
                        r = t.type; if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                    else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                    t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, Z(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked) }

                function J(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) { var r = t.type; if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t } "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n) }

                function ee(e, t, n) { "number" === t && Y(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)) } var te = Array.isArray;

                function ne(e, t, n, r) { if (e = e.options, t) { t = {}; for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0; for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0) } else { for (n = "" + Z(n), t = null, i = 0; i < e.length; i++) { if (e[i].value === n) return e[i].selected = !0, void(r && (e[i].defaultSelected = !0));
                            null !== t || e[i].disabled || (t = e[i]) }
                        null !== t && (t.selected = !0) } }

                function re(e, t) { if (null != t.dangerouslySetInnerHTML) throw Error(a(91)); return D({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }) }

                function ie(e, t) { var n = t.value; if (null == n) { if (n = t.children, t = t.defaultValue, null != n) { if (null != t) throw Error(a(92)); if (te(n)) { if (1 < n.length) throw Error(a(93));
                                n = n[0] }
                            t = n }
                        null == t && (t = ""), n = t }
                    e._wrapperState = { initialValue: Z(n) } }

                function ae(e, t) { var n = Z(t.value),
                        r = Z(t.defaultValue);
                    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r) }

                function se(e) { var t = e.textContent;
                    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t) }

                function oe(e) { switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml" } }

                function le(e, t) { return null == e || "http://www.w3.org/1999/xhtml" === e ? oe(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e } var ce, ue, de = (ue = function(e, t) { if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
                    else { for ((ce = ce || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ce.firstChild; e.firstChild;) e.removeChild(e.firstChild); for (; t.firstChild;) e.appendChild(t.firstChild) } }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) { MSApp.execUnsafeLocalFunction((function() { return ue(e, t) })) } : ue);

                function fe(e, t) { if (t) { var n = e.firstChild; if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t) }
                    e.textContent = t } var he = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
                    pe = ["Webkit", "ms", "Moz", "O"];

                function me(e, t, n) { return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || he.hasOwnProperty(e) && he[e] ? ("" + t).trim() : t + "px" }

                function xe(e, t) { for (var n in e = e.style, t)
                        if (t.hasOwnProperty(n)) { var r = 0 === n.indexOf("--"),
                                i = me(n, t[n], r); "float" === n && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i } }
                Object.keys(he).forEach((function(e) { pe.forEach((function(t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), he[t] = he[e] })) })); var ge = D({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });

                function ve(e, t) { if (t) { if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(a(137, e)); if (null != t.dangerouslySetInnerHTML) { if (null != t.children) throw Error(a(60)); if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61)) } if (null != t.style && "object" !== typeof t.style) throw Error(a(62)) } }

                function ye(e, t) { if (-1 === e.indexOf("-")) return "string" === typeof t.is; switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0 } } var Ce = null;

                function we(e) { return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e } var be = null,
                    je = null,
                    ke = null;

                function Ne(e) { if (e = yi(e)) { if ("function" !== typeof be) throw Error(a(280)); var t = e.stateNode;
                        t && (t = wi(t), be(e.stateNode, e.type, t)) } }

                function Se(e) { je ? ke ? ke.push(e) : ke = [e] : je = e }

                function Ee() { if (je) { var e = je,
                            t = ke; if (ke = je = null, Ne(e), t)
                            for (e = 0; e < t.length; e++) Ne(t[e]) } }

                function Pe(e, t) { return e(t) }

                function Me() {} var Fe = !1;

                function Le(e, t, n) { if (Fe) return e(t, n);
                    Fe = !0; try { return Pe(e, t, n) } finally { Fe = !1, (null !== je || null !== ke) && (Me(), Ee()) } }

                function Te(e, t) { var n = e.stateNode; if (null === n) return null; var r = wi(n); if (null === r) return null;
                    n = r[t];
                    e: switch (t) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r; break e;
                        default:
                            e = !1 }
                    if (e) return null; if (n && "function" !== typeof n) throw Error(a(231, t, typeof n)); return n } var Ae = !1; if (u) try { var Ve = {};
                    Object.defineProperty(Ve, "passive", { get: function() { Ae = !0 } }), window.addEventListener("test", Ve, Ve), window.removeEventListener("test", Ve, Ve) } catch (ue) { Ae = !1 }

                function Re(e, t, n, r, i, a, s, o, l) { var c = Array.prototype.slice.call(arguments, 3); try { t.apply(n, c) } catch (u) { this.onError(u) } } var Be = !1,
                    De = null,
                    ze = !1,
                    Oe = null,
                    _e = { onError: function(e) { Be = !0, De = e } };

                function He(e, t, n, r, i, a, s, o, l) { Be = !1, De = null, Re.apply(_e, arguments) }

                function Ie(e) { var t = e,
                        n = e; if (e.alternate)
                        for (; t.return;) t = t.return;
                    else { e = t;
                        do { 0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return } while (e) } return 3 === t.tag ? n : null }

                function Ue(e) { if (13 === e.tag) { var t = e.memoizedState; if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated } return null }

                function Ze(e) { if (Ie(e) !== e) throw Error(a(188)) }

                function We(e) { return null !== (e = function(e) { var t = e.alternate; if (!t) { if (null === (t = Ie(e))) throw Error(a(188)); return t !== e ? null : e } for (var n = e, r = t;;) { var i = n.return; if (null === i) break; var s = i.alternate; if (null === s) { if (null !== (r = i.return)) { n = r; continue } break } if (i.child === s.child) { for (s = i.child; s;) { if (s === n) return Ze(i), e; if (s === r) return Ze(i), t;
                                    s = s.sibling } throw Error(a(188)) } if (n.return !== r.return) n = i, r = s;
                            else { for (var o = !1, l = i.child; l;) { if (l === n) { o = !0, n = i, r = s; break } if (l === r) { o = !0, r = i, n = s; break }
                                    l = l.sibling } if (!o) { for (l = s.child; l;) { if (l === n) { o = !0, n = s, r = i; break } if (l === r) { o = !0, r = s, n = i; break }
                                        l = l.sibling } if (!o) throw Error(a(189)) } } if (n.alternate !== r) throw Error(a(190)) } if (3 !== n.tag) throw Error(a(188)); return n.stateNode.current === n ? e : t }(e)) ? $e(e) : null }

                function $e(e) { if (5 === e.tag || 6 === e.tag) return e; for (e = e.child; null !== e;) { var t = $e(e); if (null !== t) return t;
                        e = e.sibling } return null } var Ge = i.unstable_scheduleCallback,
                    Ye = i.unstable_cancelCallback,
                    qe = i.unstable_shouldYield,
                    Xe = i.unstable_requestPaint,
                    Qe = i.unstable_now,
                    Ke = i.unstable_getCurrentPriorityLevel,
                    Je = i.unstable_ImmediatePriority,
                    et = i.unstable_UserBlockingPriority,
                    tt = i.unstable_NormalPriority,
                    nt = i.unstable_LowPriority,
                    rt = i.unstable_IdlePriority,
                    it = null,
                    at = null; var st = Math.clz32 ? Math.clz32 : function(e) { return e >>>= 0, 0 === e ? 32 : 31 - (ot(e) / lt | 0) | 0 },
                    ot = Math.log,
                    lt = Math.LN2; var ct = 64,
                    ut = 4194304;

                function dt(e) { switch (e & -e) {
                        case 1:
                            return 1;
                        case 2:
                            return 2;
                        case 4:
                            return 4;
                        case 8:
                            return 8;
                        case 16:
                            return 16;
                        case 32:
                            return 32;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return 4194240 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            return 130023424 & e;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 1073741824;
                        default:
                            return e } }

                function ft(e, t) { var n = e.pendingLanes; if (0 === n) return 0; var r = 0,
                        i = e.suspendedLanes,
                        a = e.pingedLanes,
                        s = 268435455 & n; if (0 !== s) { var o = s & ~i;
                        0 !== o ? r = dt(o) : 0 !== (a &= s) && (r = dt(a)) } else 0 !== (s = n & ~i) ? r = dt(s) : 0 !== a && (r = dt(a)); if (0 === r) return 0; if (0 !== t && t !== r && 0 === (t & i) && ((i = r & -r) >= (a = t & -t) || 16 === i && 0 !== (4194240 & a))) return t; if (0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
                        for (e = e.entanglements, t &= r; 0 < t;) i = 1 << (n = 31 - st(t)), r |= e[n], t &= ~i; return r }

                function ht(e, t) { switch (e) {
                        case 1:
                        case 2:
                        case 4:
                            return t + 250;
                        case 8:
                        case 16:
                        case 32:
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return t + 5e3;
                        default:
                            return -1 } }

                function pt(e) { return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0 }

                function mt() { var e = ct; return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e }

                function xt(e) { for (var t = [], n = 0; 31 > n; n++) t.push(e); return t }

                function gt(e, t, n) { e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - st(t)] = n }

                function vt(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) { var r = 31 - st(n),
                            i = 1 << r;
                        i & t | e[r] & t && (e[r] |= t), n &= ~i } } var yt = 0;

                function Ct(e) { return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1 } var wt, bt, jt, kt, Nt, St = !1,
                    Et = [],
                    Pt = null,
                    Mt = null,
                    Ft = null,
                    Lt = new Map,
                    Tt = new Map,
                    At = [],
                    Vt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

                function Rt(e, t) { switch (e) {
                        case "focusin":
                        case "focusout":
                            Pt = null; break;
                        case "dragenter":
                        case "dragleave":
                            Mt = null; break;
                        case "mouseover":
                        case "mouseout":
                            Ft = null; break;
                        case "pointerover":
                        case "pointerout":
                            Lt.delete(t.pointerId); break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            Tt.delete(t.pointerId) } }

                function Bt(e, t, n, r, i, a) { return null === e || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }, null !== t && (null !== (t = yi(t)) && bt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== i && -1 === t.indexOf(i) && t.push(i), e) }

                function Dt(e) { var t = vi(e.target); if (null !== t) { var n = Ie(t); if (null !== n)
                            if (13 === (t = n.tag)) { if (null !== (t = Ue(n))) return e.blockedOn = t, void Nt(e.priority, (function() { jt(n) })) } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null) }
                    e.blockedOn = null }

                function zt(e) { if (null !== e.blockedOn) return !1; for (var t = e.targetContainers; 0 < t.length;) { var n = qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent); if (null !== n) return null !== (t = yi(n)) && bt(t), e.blockedOn = n, !1; var r = new(n = e.nativeEvent).constructor(n.type, n);
                        Ce = r, n.target.dispatchEvent(r), Ce = null, t.shift() } return !0 }

                function Ot(e, t, n) { zt(e) && n.delete(t) }

                function _t() { St = !1, null !== Pt && zt(Pt) && (Pt = null), null !== Mt && zt(Mt) && (Mt = null), null !== Ft && zt(Ft) && (Ft = null), Lt.forEach(Ot), Tt.forEach(Ot) }

                function Ht(e, t) { e.blockedOn === t && (e.blockedOn = null, St || (St = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, _t))) }

                function It(e) {
                    function t(t) { return Ht(t, e) } if (0 < Et.length) { Ht(Et[0], e); for (var n = 1; n < Et.length; n++) { var r = Et[n];
                            r.blockedOn === e && (r.blockedOn = null) } } for (null !== Pt && Ht(Pt, e), null !== Mt && Ht(Mt, e), null !== Ft && Ht(Ft, e), Lt.forEach(t), Tt.forEach(t), n = 0; n < At.length; n++)(r = At[n]).blockedOn === e && (r.blockedOn = null); for (; 0 < At.length && null === (n = At[0]).blockedOn;) Dt(n), null === n.blockedOn && At.shift() } var Ut = C.ReactCurrentBatchConfig,
                    Zt = !0;

                function Wt(e, t, n, r) { var i = yt,
                        a = Ut.transition;
                    Ut.transition = null; try { yt = 1, Gt(e, t, n, r) } finally { yt = i, Ut.transition = a } }

                function $t(e, t, n, r) { var i = yt,
                        a = Ut.transition;
                    Ut.transition = null; try { yt = 4, Gt(e, t, n, r) } finally { yt = i, Ut.transition = a } }

                function Gt(e, t, n, r) { if (Zt) { var i = qt(e, t, n, r); if (null === i) Zr(e, t, r, Yt, n), Rt(e, r);
                        else if (function(e, t, n, r, i) { switch (t) {
                                    case "focusin":
                                        return Pt = Bt(Pt, e, t, n, r, i), !0;
                                    case "dragenter":
                                        return Mt = Bt(Mt, e, t, n, r, i), !0;
                                    case "mouseover":
                                        return Ft = Bt(Ft, e, t, n, r, i), !0;
                                    case "pointerover":
                                        var a = i.pointerId; return Lt.set(a, Bt(Lt.get(a) || null, e, t, n, r, i)), !0;
                                    case "gotpointercapture":
                                        return a = i.pointerId, Tt.set(a, Bt(Tt.get(a) || null, e, t, n, r, i)), !0 } return !1 }(i, e, t, n, r)) r.stopPropagation();
                        else if (Rt(e, r), 4 & t && -1 < Vt.indexOf(e)) { for (; null !== i;) { var a = yi(i); if (null !== a && wt(a), null === (a = qt(e, t, n, r)) && Zr(e, t, r, Yt, n), a === i) break;
                                i = a }
                            null !== i && r.stopPropagation() } else Zr(e, t, r, null, n) } } var Yt = null;

                function qt(e, t, n, r) { if (Yt = null, null !== (e = vi(e = we(r))))
                        if (null === (t = Ie(e))) e = null;
                        else if (13 === (n = t.tag)) { if (null !== (e = Ue(t))) return e;
                        e = null } else if (3 === n) { if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                        e = null } else t !== e && (e = null); return Yt = e, null }

                function Xt(e) { switch (e) {
                        case "cancel":
                        case "click":
                        case "close":
                        case "contextmenu":
                        case "copy":
                        case "cut":
                        case "auxclick":
                        case "dblclick":
                        case "dragend":
                        case "dragstart":
                        case "drop":
                        case "focusin":
                        case "focusout":
                        case "input":
                        case "invalid":
                        case "keydown":
                        case "keypress":
                        case "keyup":
                        case "mousedown":
                        case "mouseup":
                        case "paste":
                        case "pause":
                        case "play":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointerup":
                        case "ratechange":
                        case "reset":
                        case "resize":
                        case "seeked":
                        case "submit":
                        case "touchcancel":
                        case "touchend":
                        case "touchstart":
                        case "volumechange":
                        case "change":
                        case "selectionchange":
                        case "textInput":
                        case "compositionstart":
                        case "compositionend":
                        case "compositionupdate":
                        case "beforeblur":
                        case "afterblur":
                        case "beforeinput":
                        case "blur":
                        case "fullscreenchange":
                        case "focus":
                        case "hashchange":
                        case "popstate":
                        case "select":
                        case "selectstart":
                            return 1;
                        case "drag":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "mousemove":
                        case "mouseout":
                        case "mouseover":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "scroll":
                        case "toggle":
                        case "touchmove":
                        case "wheel":
                        case "mouseenter":
                        case "mouseleave":
                        case "pointerenter":
                        case "pointerleave":
                            return 4;
                        case "message":
                            switch (Ke()) {
                                case Je:
                                    return 1;
                                case et:
                                    return 4;
                                case tt:
                                case nt:
                                    return 16;
                                case rt:
                                    return 536870912;
                                default:
                                    return 16 }
                        default:
                            return 16 } } var Qt = null,
                    Kt = null,
                    Jt = null;

                function en() { if (Jt) return Jt; var e, t, n = Kt,
                        r = n.length,
                        i = "value" in Qt ? Qt.value : Qt.textContent,
                        a = i.length; for (e = 0; e < r && n[e] === i[e]; e++); var s = r - e; for (t = 1; t <= s && n[r - t] === i[a - t]; t++); return Jt = i.slice(e, 1 < t ? 1 - t : void 0) }

                function tn(e) { var t = e.keyCode; return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0 }

                function nn() { return !0 }

                function rn() { return !1 }

                function an(e) {
                    function t(t, n, r, i, a) { for (var s in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(s) && (t = e[s], this[s] = t ? t(i) : i[s]); return this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue) ? nn : rn, this.isPropagationStopped = rn, this } return D(t.prototype, { preventDefault: function() { this.defaultPrevented = !0; var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn) }, stopPropagation: function() { var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn) }, persist: function() {}, isPersistent: nn }), t } var sn, on, ln, cn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) { return e.timeStamp || Date.now() }, defaultPrevented: 0, isTrusted: 0 },
                    un = an(cn),
                    dn = D({}, cn, { view: 0, detail: 0 }),
                    fn = an(dn),
                    hn = D({}, dn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Nn, button: 0, buttons: 0, relatedTarget: function(e) { return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget }, movementX: function(e) { return "movementX" in e ? e.movementX : (e !== ln && (ln && "mousemove" === e.type ? (sn = e.screenX - ln.screenX, on = e.screenY - ln.screenY) : on = sn = 0, ln = e), sn) }, movementY: function(e) { return "movementY" in e ? e.movementY : on } }),
                    pn = an(hn),
                    mn = an(D({}, hn, { dataTransfer: 0 })),
                    xn = an(D({}, dn, { relatedTarget: 0 })),
                    gn = an(D({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
                    vn = D({}, cn, { clipboardData: function(e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData } }),
                    yn = an(vn),
                    Cn = an(D({}, cn, { data: 0 })),
                    wn = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
                    bn = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
                    jn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };

                function kn(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : !!(e = jn[e]) && !!t[e] }

                function Nn() { return kn } var Sn = D({}, dn, { key: function(e) { if (e.key) { var t = wn[e.key] || e.key; if ("Unidentified" !== t) return t } return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? bn[e.keyCode] || "Unidentified" : "" }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Nn, charCode: function(e) { return "keypress" === e.type ? tn(e) : 0 }, keyCode: function(e) { return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0 }, which: function(e) { return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0 } }),
                    En = an(Sn),
                    Pn = an(D({}, hn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })),
                    Mn = an(D({}, dn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Nn })),
                    Fn = an(D({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
                    Ln = D({}, hn, { deltaX: function(e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0 }, deltaY: function(e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0 }, deltaZ: 0, deltaMode: 0 }),
                    Tn = an(Ln),
                    An = [9, 13, 27, 32],
                    Vn = u && "CompositionEvent" in window,
                    Rn = null;
                u && "documentMode" in document && (Rn = document.documentMode); var Bn = u && "TextEvent" in window && !Rn,
                    Dn = u && (!Vn || Rn && 8 < Rn && 11 >= Rn),
                    zn = String.fromCharCode(32),
                    On = !1;

                function _n(e, t) { switch (e) {
                        case "keyup":
                            return -1 !== An.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1 } }

                function Hn(e) { return "object" === typeof(e = e.detail) && "data" in e ? e.data : null } var In = !1; var Un = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };

                function Zn(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return "input" === t ? !!Un[e.type] : "textarea" === t }

                function Wn(e, t, n, r) { Se(r), 0 < (t = $r(t, "onChange")).length && (n = new un("onChange", "change", null, n, r), e.push({ event: n, listeners: t })) } var $n = null,
                    Gn = null;

                function Yn(e) { zr(e, 0) }

                function qn(e) { if (G(Ci(e))) return e }

                function Xn(e, t) { if ("change" === e) return t } var Qn = !1; if (u) { var Kn; if (u) { var Jn = "oninput" in document; if (!Jn) { var er = document.createElement("div");
                            er.setAttribute("oninput", "return;"), Jn = "function" === typeof er.oninput }
                        Kn = Jn } else Kn = !1;
                    Qn = Kn && (!document.documentMode || 9 < document.documentMode) }

                function tr() { $n && ($n.detachEvent("onpropertychange", nr), Gn = $n = null) }

                function nr(e) { if ("value" === e.propertyName && qn(Gn)) { var t = [];
                        Wn(t, Gn, e, we(e)), Le(Yn, t) } }

                function rr(e, t, n) { "focusin" === e ? (tr(), Gn = n, ($n = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr() }

                function ir(e) { if ("selectionchange" === e || "keyup" === e || "keydown" === e) return qn(Gn) }

                function ar(e, t) { if ("click" === e) return qn(t) }

                function sr(e, t) { if ("input" === e || "change" === e) return qn(t) } var or = "function" === typeof Object.is ? Object.is : function(e, t) { return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t };

                function lr(e, t) { if (or(e, t)) return !0; if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1; var n = Object.keys(e),
                        r = Object.keys(t); if (n.length !== r.length) return !1; for (r = 0; r < n.length; r++) { var i = n[r]; if (!d.call(t, i) || !or(e[i], t[i])) return !1 } return !0 }

                function cr(e) { for (; e && e.firstChild;) e = e.firstChild; return e }

                function ur(e, t) { var n, r = cr(e); for (e = 0; r;) { if (3 === r.nodeType) { if (n = e + r.textContent.length, e <= t && n >= t) return { node: r, offset: t - e };
                            e = n }
                        e: { for (; r;) { if (r.nextSibling) { r = r.nextSibling; break e }
                                r = r.parentNode }
                            r = void 0 }
                        r = cr(r) } }

                function dr(e, t) { return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))) }

                function fr() { for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement;) { try { var n = "string" === typeof t.contentWindow.location.href } catch (r) { n = !1 } if (!n) break;
                        t = Y((e = t.contentWindow).document) } return t }

                function hr(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable) }

                function pr(e) { var t = fr(),
                        n = e.focusedElem,
                        r = e.selectionRange; if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) { if (null !== r && hr(n))
                            if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                            else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) { e = e.getSelection(); var i = n.textContent.length,
                                a = Math.min(r.start, i);
                            r = void 0 === r.end ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = ur(n, a); var s = ur(n, r);
                            i && s && (1 !== e.rangeCount || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && ((t = t.createRange()).setStart(i.node, i.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t))) } for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop }); for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top } } var mr = u && "documentMode" in document && 11 >= document.documentMode,
                    xr = null,
                    gr = null,
                    vr = null,
                    yr = !1;

                function Cr(e, t, n) { var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    yr || null == xr || xr !== Y(r) || ("selectionStart" in (r = xr) && hr(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : r = { anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }, vr && lr(vr, r) || (vr = r, 0 < (r = $r(gr, "onSelect")).length && (t = new un("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = xr))) }

                function wr(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n } var br = { animationend: wr("Animation", "AnimationEnd"), animationiteration: wr("Animation", "AnimationIteration"), animationstart: wr("Animation", "AnimationStart"), transitionend: wr("Transition", "TransitionEnd") },
                    jr = {},
                    kr = {};

                function Nr(e) { if (jr[e]) return jr[e]; if (!br[e]) return e; var t, n = br[e]; for (t in n)
                        if (n.hasOwnProperty(t) && t in kr) return jr[e] = n[t];
                    return e }
                u && (kr = document.createElement("div").style, "AnimationEvent" in window || (delete br.animationend.animation, delete br.animationiteration.animation, delete br.animationstart.animation), "TransitionEvent" in window || delete br.transitionend.transition); var Sr = Nr("animationend"),
                    Er = Nr("animationiteration"),
                    Pr = Nr("animationstart"),
                    Mr = Nr("transitionend"),
                    Fr = new Map,
                    Lr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

                function Tr(e, t) { Fr.set(e, t), l(t, [e]) } for (var Ar = 0; Ar < Lr.length; Ar++) { var Vr = Lr[Ar];
                    Tr(Vr.toLowerCase(), "on" + (Vr[0].toUpperCase() + Vr.slice(1))) }
                Tr(Sr, "onAnimationEnd"), Tr(Er, "onAnimationIteration"), Tr(Pr, "onAnimationStart"), Tr("dblclick", "onDoubleClick"), Tr("focusin", "onFocus"), Tr("focusout", "onBlur"), Tr(Mr, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")); var Rr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Br = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));

                function Dr(e, t, n) { var r = e.type || "unknown-event";
                    e.currentTarget = n,
                        function(e, t, n, r, i, s, o, l, c) { if (He.apply(this, arguments), Be) { if (!Be) throw Error(a(198)); var u = De;
                                Be = !1, De = null, ze || (ze = !0, Oe = u) } }(r, t, void 0, e), e.currentTarget = null }

                function zr(e, t) { t = 0 !== (4 & t); for (var n = 0; n < e.length; n++) { var r = e[n],
                            i = r.event;
                        r = r.listeners;
                        e: { var a = void 0; if (t)
                                for (var s = r.length - 1; 0 <= s; s--) { var o = r[s],
                                        l = o.instance,
                                        c = o.currentTarget; if (o = o.listener, l !== a && i.isPropagationStopped()) break e;
                                    Dr(i, o, c), a = l } else
                                    for (s = 0; s < r.length; s++) { if (l = (o = r[s]).instance, c = o.currentTarget, o = o.listener, l !== a && i.isPropagationStopped()) break e;
                                        Dr(i, o, c), a = l } } } if (ze) throw e = Oe, ze = !1, Oe = null, e }

                function Or(e, t) { var n = t[mi];
                    void 0 === n && (n = t[mi] = new Set); var r = e + "__bubble";
                    n.has(r) || (Ur(t, e, 2, !1), n.add(r)) }

                function _r(e, t, n) { var r = 0;
                    t && (r |= 4), Ur(n, e, r, t) } var Hr = "_reactListening" + Math.random().toString(36).slice(2);

                function Ir(e) { if (!e[Hr]) { e[Hr] = !0, s.forEach((function(t) { "selectionchange" !== t && (Br.has(t) || _r(t, !1, e), _r(t, !0, e)) })); var t = 9 === e.nodeType ? e : e.ownerDocument;
                        null === t || t[Hr] || (t[Hr] = !0, _r("selectionchange", !1, t)) } }

                function Ur(e, t, n, r) { switch (Xt(t)) {
                        case 1:
                            var i = Wt; break;
                        case 4:
                            i = $t; break;
                        default:
                            i = Gt }
                    n = i.bind(null, t, n, e), i = void 0, !Ae || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (i = !0), r ? void 0 !== i ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : void 0 !== i ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1) }

                function Zr(e, t, n, r, i) { var a = r; if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) { if (null === r) return; var s = r.tag; if (3 === s || 4 === s) { var o = r.stateNode.containerInfo; if (o === i || 8 === o.nodeType && o.parentNode === i) break; if (4 === s)
                                for (s = r.return; null !== s;) { var l = s.tag; if ((3 === l || 4 === l) && ((l = s.stateNode.containerInfo) === i || 8 === l.nodeType && l.parentNode === i)) return;
                                    s = s.return }
                            for (; null !== o;) { if (null === (s = vi(o))) return; if (5 === (l = s.tag) || 6 === l) { r = a = s; continue e }
                                o = o.parentNode } }
                        r = r.return }
                    Le((function() { var r = a,
                            i = we(n),
                            s = [];
                        e: { var o = Fr.get(e); if (void 0 !== o) { var l = un,
                                    c = e; switch (e) {
                                    case "keypress":
                                        if (0 === tn(n)) break e;
                                    case "keydown":
                                    case "keyup":
                                        l = En; break;
                                    case "focusin":
                                        c = "focus", l = xn; break;
                                    case "focusout":
                                        c = "blur", l = xn; break;
                                    case "beforeblur":
                                    case "afterblur":
                                        l = xn; break;
                                    case "click":
                                        if (2 === n.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        l = pn; break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        l = mn; break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        l = Mn; break;
                                    case Sr:
                                    case Er:
                                    case Pr:
                                        l = gn; break;
                                    case Mr:
                                        l = Fn; break;
                                    case "scroll":
                                        l = fn; break;
                                    case "wheel":
                                        l = Tn; break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        l = yn; break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        l = Pn } var u = 0 !== (4 & t),
                                    d = !u && "scroll" === e,
                                    f = u ? null !== o ? o + "Capture" : null : o;
                                u = []; for (var h, p = r; null !== p;) { var m = (h = p).stateNode; if (5 === h.tag && null !== m && (h = m, null !== f && (null != (m = Te(p, f)) && u.push(Wr(p, m, h)))), d) break;
                                    p = p.return }
                                0 < u.length && (o = new l(o, c, null, n, i), s.push({ event: o, listeners: u })) } }
                        if (0 === (7 & t)) { if (l = "mouseout" === e || "pointerout" === e, (!(o = "mouseover" === e || "pointerover" === e) || n === Ce || !(c = n.relatedTarget || n.fromElement) || !vi(c) && !c[pi]) && (l || o) && (o = i.window === i ? i : (o = i.ownerDocument) ? o.defaultView || o.parentWindow : window, l ? (l = r, null !== (c = (c = n.relatedTarget || n.toElement) ? vi(c) : null) && (c !== (d = Ie(c)) || 5 !== c.tag && 6 !== c.tag) && (c = null)) : (l = null, c = r), l !== c)) { if (u = pn, m = "onMouseLeave", f = "onMouseEnter", p = "mouse", "pointerout" !== e && "pointerover" !== e || (u = Pn, m = "onPointerLeave", f = "onPointerEnter", p = "pointer"), d = null == l ? o : Ci(l), h = null == c ? o : Ci(c), (o = new u(m, p + "leave", l, n, i)).target = d, o.relatedTarget = h, m = null, vi(i) === r && ((u = new u(f, p + "enter", c, n, i)).target = h, u.relatedTarget = d, m = u), d = m, l && c) e: { for (f = c, p = 0, h = u = l; h; h = Gr(h)) p++; for (h = 0, m = f; m; m = Gr(m)) h++; for (; 0 < p - h;) u = Gr(u), p--; for (; 0 < h - p;) f = Gr(f), h--; for (; p--;) { if (u === f || null !== f && u === f.alternate) break e;
                                        u = Gr(u), f = Gr(f) }
                                    u = null }
                                else u = null;
                                null !== l && Yr(s, o, l, u, !1), null !== c && null !== d && Yr(s, d, c, u, !0) } if ("select" === (l = (o = r ? Ci(r) : window).nodeName && o.nodeName.toLowerCase()) || "input" === l && "file" === o.type) var x = Xn;
                            else if (Zn(o))
                                if (Qn) x = sr;
                                else { x = ir; var g = rr }
                            else(l = o.nodeName) && "input" === l.toLowerCase() && ("checkbox" === o.type || "radio" === o.type) && (x = ar); switch (x && (x = x(e, r)) ? Wn(s, x, n, i) : (g && g(e, o, r), "focusout" === e && (g = o._wrapperState) && g.controlled && "number" === o.type && ee(o, "number", o.value)), g = r ? Ci(r) : window, e) {
                                case "focusin":
                                    (Zn(g) || "true" === g.contentEditable) && (xr = g, gr = r, vr = null); break;
                                case "focusout":
                                    vr = gr = xr = null; break;
                                case "mousedown":
                                    yr = !0; break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    yr = !1, Cr(s, n, i); break;
                                case "selectionchange":
                                    if (mr) break;
                                case "keydown":
                                case "keyup":
                                    Cr(s, n, i) } var v; if (Vn) e: { switch (e) {
                                    case "compositionstart":
                                        var y = "onCompositionStart"; break e;
                                    case "compositionend":
                                        y = "onCompositionEnd"; break e;
                                    case "compositionupdate":
                                        y = "onCompositionUpdate"; break e }
                                y = void 0 }
                            else In ? _n(e, n) && (y = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (y = "onCompositionStart");
                            y && (Dn && "ko" !== n.locale && (In || "onCompositionStart" !== y ? "onCompositionEnd" === y && In && (v = en()) : (Kt = "value" in (Qt = i) ? Qt.value : Qt.textContent, In = !0)), 0 < (g = $r(r, y)).length && (y = new Cn(y, e, null, n, i), s.push({ event: y, listeners: g }), v ? y.data = v : null !== (v = Hn(n)) && (y.data = v))), (v = Bn ? function(e, t) { switch (e) {
                                    case "compositionend":
                                        return Hn(t);
                                    case "keypress":
                                        return 32 !== t.which ? null : (On = !0, zn);
                                    case "textInput":
                                        return (e = t.data) === zn && On ? null : e;
                                    default:
                                        return null } }(e, n) : function(e, t) { if (In) return "compositionend" === e || !Vn && _n(e, t) ? (e = en(), Jt = Kt = Qt = null, In = !1, e) : null; switch (e) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) { if (t.char && 1 < t.char.length) return t.char; if (t.which) return String.fromCharCode(t.which) } return null;
                                    case "compositionend":
                                        return Dn && "ko" !== t.locale ? null : t.data } }(e, n)) && (0 < (r = $r(r, "onBeforeInput")).length && (i = new Cn("onBeforeInput", "beforeinput", null, n, i), s.push({ event: i, listeners: r }), i.data = v)) }
                        zr(s, t) })) }

                function Wr(e, t, n) { return { instance: e, listener: t, currentTarget: n } }

                function $r(e, t) { for (var n = t + "Capture", r = []; null !== e;) { var i = e,
                            a = i.stateNode;
                        5 === i.tag && null !== a && (i = a, null != (a = Te(e, n)) && r.unshift(Wr(e, a, i)), null != (a = Te(e, t)) && r.push(Wr(e, a, i))), e = e.return } return r }

                function Gr(e) { if (null === e) return null;
                    do { e = e.return } while (e && 5 !== e.tag); return e || null }

                function Yr(e, t, n, r, i) { for (var a = t._reactName, s = []; null !== n && n !== r;) { var o = n,
                            l = o.alternate,
                            c = o.stateNode; if (null !== l && l === r) break;
                        5 === o.tag && null !== c && (o = c, i ? null != (l = Te(n, a)) && s.unshift(Wr(n, l, o)) : i || null != (l = Te(n, a)) && s.push(Wr(n, l, o))), n = n.return }
                    0 !== s.length && e.push({ event: t, listeners: s }) } var qr = /\r\n?/g,
                    Xr = /\u0000|\uFFFD/g;

                function Qr(e) { return ("string" === typeof e ? e : "" + e).replace(qr, "\n").replace(Xr, "") }

                function Kr(e, t, n) { if (t = Qr(t), Qr(e) !== t && n) throw Error(a(425)) }

                function Jr() {} var ei = null,
                    ti = null;

                function ni(e, t) { return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html } var ri = "function" === typeof setTimeout ? setTimeout : void 0,
                    ii = "function" === typeof clearTimeout ? clearTimeout : void 0,
                    ai = "function" === typeof Promise ? Promise : void 0,
                    si = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof ai ? function(e) { return ai.resolve(null).then(e).catch(oi) } : ri;

                function oi(e) { setTimeout((function() { throw e })) }

                function li(e, t) { var n = t,
                        r = 0;
                    do { var i = n.nextSibling; if (e.removeChild(n), i && 8 === i.nodeType)
                            if ("/$" === (n = i.data)) { if (0 === r) return e.removeChild(i), void It(t);
                                r-- } else "$" !== n && "$?" !== n && "$!" !== n || r++;
                        n = i } while (n);
                    It(t) }

                function ci(e) { for (; null != e; e = e.nextSibling) { var t = e.nodeType; if (1 === t || 3 === t) break; if (8 === t) { if ("$" === (t = e.data) || "$!" === t || "$?" === t) break; if ("/$" === t) return null } } return e }

                function ui(e) { e = e.previousSibling; for (var t = 0; e;) { if (8 === e.nodeType) { var n = e.data; if ("$" === n || "$!" === n || "$?" === n) { if (0 === t) return e;
                                t-- } else "/$" === n && t++ }
                        e = e.previousSibling } return null } var di = Math.random().toString(36).slice(2),
                    fi = "__reactFiber$" + di,
                    hi = "__reactProps$" + di,
                    pi = "__reactContainer$" + di,
                    mi = "__reactEvents$" + di,
                    xi = "__reactListeners$" + di,
                    gi = "__reactHandles$" + di;

                function vi(e) { var t = e[fi]; if (t) return t; for (var n = e.parentNode; n;) { if (t = n[pi] || n[fi]) { if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                                for (e = ui(e); null !== e;) { if (n = e[fi]) return n;
                                    e = ui(e) }
                            return t }
                        n = (e = n).parentNode } return null }

                function yi(e) { return !(e = e[fi] || e[pi]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e }

                function Ci(e) { if (5 === e.tag || 6 === e.tag) return e.stateNode; throw Error(a(33)) }

                function wi(e) { return e[hi] || null } var bi = [],
                    ji = -1;

                function ki(e) { return { current: e } }

                function Ni(e) { 0 > ji || (e.current = bi[ji], bi[ji] = null, ji--) }

                function Si(e, t) { ji++, bi[ji] = e.current, e.current = t } var Ei = {},
                    Pi = ki(Ei),
                    Mi = ki(!1),
                    Fi = Ei;

                function Li(e, t) { var n = e.type.contextTypes; if (!n) return Ei; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext; var i, a = {}; for (i in n) a[i] = t[i]; return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a }

                function Ti(e) { return null !== (e = e.childContextTypes) && void 0 !== e }

                function Ai() { Ni(Mi), Ni(Pi) }

                function Vi(e, t, n) { if (Pi.current !== Ei) throw Error(a(168));
                    Si(Pi, t), Si(Mi, n) }

                function Ri(e, t, n) { var r = e.stateNode; if (t = t.childContextTypes, "function" !== typeof r.getChildContext) return n; for (var i in r = r.getChildContext())
                        if (!(i in t)) throw Error(a(108, U(e) || "Unknown", i));
                    return D({}, n, r) }

                function Bi(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ei, Fi = Pi.current, Si(Pi, e), Si(Mi, Mi.current), !0 }

                function Di(e, t, n) { var r = e.stateNode; if (!r) throw Error(a(169));
                    n ? (e = Ri(e, t, Fi), r.__reactInternalMemoizedMergedChildContext = e, Ni(Mi), Ni(Pi), Si(Pi, e)) : Ni(Mi), Si(Mi, n) } var zi = null,
                    Oi = !1,
                    _i = !1;

                function Hi(e) { null === zi ? zi = [e] : zi.push(e) }

                function Ii() { if (!_i && null !== zi) { _i = !0; var e = 0,
                            t = yt; try { var n = zi; for (yt = 1; e < n.length; e++) { var r = n[e];
                                do { r = r(!0) } while (null !== r) }
                            zi = null, Oi = !1 } catch (i) { throw null !== zi && (zi = zi.slice(e + 1)), Ge(Je, Ii), i } finally { yt = t, _i = !1 } } return null } var Ui = [],
                    Zi = 0,
                    Wi = null,
                    $i = 0,
                    Gi = [],
                    Yi = 0,
                    qi = null,
                    Xi = 1,
                    Qi = "";

                function Ki(e, t) { Ui[Zi++] = $i, Ui[Zi++] = Wi, Wi = e, $i = t }

                function Ji(e, t, n) { Gi[Yi++] = Xi, Gi[Yi++] = Qi, Gi[Yi++] = qi, qi = e; var r = Xi;
                    e = Qi; var i = 32 - st(r) - 1;
                    r &= ~(1 << i), n += 1; var a = 32 - st(t) + i; if (30 < a) { var s = i - i % 5;
                        a = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, Xi = 1 << 32 - st(t) + i | n << i | r, Qi = a + e } else Xi = 1 << a | n << i | r, Qi = e }

                function ea(e) { null !== e.return && (Ki(e, 1), Ji(e, 1, 0)) }

                function ta(e) { for (; e === Wi;) Wi = Ui[--Zi], Ui[Zi] = null, $i = Ui[--Zi], Ui[Zi] = null; for (; e === qi;) qi = Gi[--Yi], Gi[Yi] = null, Qi = Gi[--Yi], Gi[Yi] = null, Xi = Gi[--Yi], Gi[Yi] = null } var na = null,
                    ra = null,
                    ia = !1,
                    aa = null;

                function sa(e, t) { var n = Tc(5, null, null, 0);
                    n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n) }

                function oa(e, t) { switch (e.tag) {
                        case 5:
                            var n = e.type; return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, na = e, ra = ci(t.firstChild), !0);
                        case 6:
                            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, na = e, ra = null, !0);
                        case 13:
                            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== qi ? { id: Xi, overflow: Qi } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, (n = Tc(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, na = e, ra = null, !0);
                        default:
                            return !1 } }

                function la(e) { return 0 !== (1 & e.mode) && 0 === (128 & e.flags) }

                function ca(e) { if (ia) { var t = ra; if (t) { var n = t; if (!oa(e, t)) { if (la(e)) throw Error(a(418));
                                t = ci(n.nextSibling); var r = na;
                                t && oa(e, t) ? sa(r, n) : (e.flags = -4097 & e.flags | 2, ia = !1, na = e) } } else { if (la(e)) throw Error(a(418));
                            e.flags = -4097 & e.flags | 2, ia = !1, na = e } } }

                function ua(e) { for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    na = e }

                function da(e) { if (e !== na) return !1; if (!ia) return ua(e), ia = !0, !1; var t; if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !ni(e.type, e.memoizedProps)), t && (t = ra)) { if (la(e)) throw fa(), Error(a(418)); for (; t;) sa(e, t), t = ci(t.nextSibling) } if (ua(e), 13 === e.tag) { if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
                        e: { for (e = e.nextSibling, t = 0; e;) { if (8 === e.nodeType) { var n = e.data; if ("/$" === n) { if (0 === t) { ra = ci(e.nextSibling); break e }
                                        t-- } else "$" !== n && "$!" !== n && "$?" !== n || t++ }
                                e = e.nextSibling }
                            ra = null } } else ra = na ? ci(e.stateNode.nextSibling) : null; return !0 }

                function fa() { for (var e = ra; e;) e = ci(e.nextSibling) }

                function ha() { ra = na = null, ia = !1 }

                function pa(e) { null === aa ? aa = [e] : aa.push(e) } var ma = C.ReactCurrentBatchConfig;

                function xa(e, t) { if (e && e.defaultProps) { for (var n in t = D({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]); return t } return t } var ga = ki(null),
                    va = null,
                    ya = null,
                    Ca = null;

                function wa() { Ca = ya = va = null }

                function ba(e) { var t = ga.current;
                    Ni(ga), e._currentValue = t }

                function ja(e, t, n) { for (; null !== e;) { var r = e.alternate; if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                        e = e.return } }

                function ka(e, t) { va = e, Ca = ya = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (Co = !0), e.firstContext = null) }

                function Na(e) { var t = e._currentValue; if (Ca !== e)
                        if (e = { context: e, memoizedValue: t, next: null }, null === ya) { if (null === va) throw Error(a(308));
                            ya = e, va.dependencies = { lanes: 0, firstContext: e } } else ya = ya.next = e;
                    return t } var Sa = null;

                function Ea(e) { null === Sa ? Sa = [e] : Sa.push(e) }

                function Pa(e, t, n, r) { var i = t.interleaved; return null === i ? (n.next = n, Ea(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Ma(e, r) }

                function Ma(e, t) { e.lanes |= t; var n = e.alternate; for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return; return 3 === n.tag ? n.stateNode : null } var Fa = !1;

                function La(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null } }

                function Ta(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }) }

                function Aa(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null } }

                function Va(e, t, n) { var r = e.updateQueue; if (null === r) return null; if (r = r.shared, 0 !== (2 & Ml)) { var i = r.pending; return null === i ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Ma(e, n) } return null === (i = r.interleaved) ? (t.next = t, Ea(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Ma(e, n) }

                function Ra(e, t, n) { if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) { var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, vt(e, n) } }

                function Ba(e, t) { var n = e.updateQueue,
                        r = e.alternate; if (null !== r && n === (r = r.updateQueue)) { var i = null,
                            a = null; if (null !== (n = n.firstBaseUpdate)) { do { var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                                null === a ? i = a = s : a = a.next = s, n = n.next } while (null !== n);
                            null === a ? i = a = t : a = a.next = t } else i = a = t; return n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: a, shared: r.shared, effects: r.effects }, void(e.updateQueue = n) }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t }

                function Da(e, t, n, r) { var i = e.updateQueue;
                    Fa = !1; var a = i.firstBaseUpdate,
                        s = i.lastBaseUpdate,
                        o = i.shared.pending; if (null !== o) { i.shared.pending = null; var l = o,
                            c = l.next;
                        l.next = null, null === s ? a = c : s.next = c, s = l; var u = e.alternate;
                        null !== u && ((o = (u = u.updateQueue).lastBaseUpdate) !== s && (null === o ? u.firstBaseUpdate = c : o.next = c, u.lastBaseUpdate = l)) } if (null !== a) { var d = i.baseState; for (s = 0, u = c = l = null, o = a;;) { var f = o.lane,
                                h = o.eventTime; if ((r & f) === f) { null !== u && (u = u.next = { eventTime: h, lane: 0, tag: o.tag, payload: o.payload, callback: o.callback, next: null });
                                e: { var p = e,
                                        m = o; switch (f = t, h = n, m.tag) {
                                        case 1:
                                            if ("function" === typeof(p = m.payload)) { d = p.call(h, d, f); break e }
                                            d = p; break e;
                                        case 3:
                                            p.flags = -65537 & p.flags | 128;
                                        case 0:
                                            if (null === (f = "function" === typeof(p = m.payload) ? p.call(h, d, f) : p) || void 0 === f) break e;
                                            d = D({}, d, f); break e;
                                        case 2:
                                            Fa = !0 } }
                                null !== o.callback && 0 !== o.lane && (e.flags |= 64, null === (f = i.effects) ? i.effects = [o] : f.push(o)) } else h = { eventTime: h, lane: f, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, null === u ? (c = u = h, l = d) : u = u.next = h, s |= f; if (null === (o = o.next)) { if (null === (o = i.shared.pending)) break;
                                o = (f = o).next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null } } if (null === u && (l = d), i.baseState = l, i.firstBaseUpdate = c, i.lastBaseUpdate = u, null !== (t = i.shared.interleaved)) { i = t;
                            do { s |= i.lane, i = i.next } while (i !== t) } else null === a && (i.shared.lanes = 0);
                        Dl |= s, e.lanes = s, e.memoizedState = d } }

                function za(e, t, n) { if (e = t.effects, t.effects = null, null !== e)
                        for (t = 0; t < e.length; t++) { var r = e[t],
                                i = r.callback; if (null !== i) { if (r.callback = null, r = n, "function" !== typeof i) throw Error(a(191, i));
                                i.call(r) } } } var Oa = (new r.Component).refs;

                function _a(e, t, n, r) { n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : D({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n) } var Ha = { isMounted: function(e) { return !!(e = e._reactInternals) && Ie(e) === e }, enqueueSetState: function(e, t, n) { e = e._reactInternals; var r = tc(),
                            i = nc(e),
                            a = Aa(r, i);
                        a.payload = t, void 0 !== n && null !== n && (a.callback = n), null !== (t = Va(e, a, i)) && (rc(t, e, i, r), Ra(t, e, i)) }, enqueueReplaceState: function(e, t, n) { e = e._reactInternals; var r = tc(),
                            i = nc(e),
                            a = Aa(r, i);
                        a.tag = 1, a.payload = t, void 0 !== n && null !== n && (a.callback = n), null !== (t = Va(e, a, i)) && (rc(t, e, i, r), Ra(t, e, i)) }, enqueueForceUpdate: function(e, t) { e = e._reactInternals; var n = tc(),
                            r = nc(e),
                            i = Aa(n, r);
                        i.tag = 2, void 0 !== t && null !== t && (i.callback = t), null !== (t = Va(e, i, r)) && (rc(t, e, r, n), Ra(t, e, r)) } };

                function Ia(e, t, n, r, i, a, s) { return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, s) : !t.prototype || !t.prototype.isPureReactComponent || (!lr(n, r) || !lr(i, a)) }

                function Ua(e, t, n) { var r = !1,
                        i = Ei,
                        a = t.contextType; return "object" === typeof a && null !== a ? a = Na(a) : (i = Ti(t) ? Fi : Pi.current, a = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Li(e, i) : Ei), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Ha, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t }

                function Za(e, t, n, r) { e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ha.enqueueReplaceState(t, t.state, null) }

                function Wa(e, t, n, r) { var i = e.stateNode;
                    i.props = n, i.state = e.memoizedState, i.refs = Oa, La(e); var a = t.contextType; "object" === typeof a && null !== a ? i.context = Na(a) : (a = Ti(t) ? Fi : Pi.current, i.context = Li(e, a)), i.state = e.memoizedState, "function" === typeof(a = t.getDerivedStateFromProps) && (_a(e, t, a, n), i.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof i.getSnapshotBeforeUpdate || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || (t = i.state, "function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), t !== i.state && Ha.enqueueReplaceState(i, i.state, null), Da(e, n, i, r), i.state = e.memoizedState), "function" === typeof i.componentDidMount && (e.flags |= 4194308) }

                function $a(e, t, n) { if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) { if (n._owner) { if (n = n._owner) { if (1 !== n.tag) throw Error(a(309)); var r = n.stateNode } if (!r) throw Error(a(147, e)); var i = r,
                                s = "" + e; return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === s ? t.ref : (t = function(e) { var t = i.refs;
                                t === Oa && (t = i.refs = {}), null === e ? delete t[s] : t[s] = e }, t._stringRef = s, t) } if ("string" !== typeof e) throw Error(a(284)); if (!n._owner) throw Error(a(290, e)) } return e }

                function Ga(e, t) { throw e = Object.prototype.toString.call(t), Error(a(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)) }

                function Ya(e) { return (0, e._init)(e._payload) }

                function qa(e) {
                    function t(t, n) { if (e) { var r = t.deletions;
                            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n) } }

                    function n(n, r) { if (!e) return null; for (; null !== r;) t(n, r), r = r.sibling; return null }

                    function r(e, t) { for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling; return e }

                    function i(e, t) { return (e = Vc(e, t)).index = 0, e.sibling = null, e }

                    function s(t, n, r) { return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n) }

                    function o(t) { return e && null === t.alternate && (t.flags |= 2), t }

                    function l(e, t, n, r) { return null === t || 6 !== t.tag ? ((t = zc(n, e.mode, r)).return = e, t) : ((t = i(t, n)).return = e, t) }

                    function c(e, t, n, r) { var a = n.type; return a === j ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === a || "object" === typeof a && null !== a && a.$$typeof === T && Ya(a) === t.type) ? ((r = i(t, n.props)).ref = $a(e, t, n), r.return = e, r) : ((r = Rc(n.type, n.key, n.props, null, e.mode, r)).ref = $a(e, t, n), r.return = e, r) }

                    function u(e, t, n, r) { return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Oc(n, e.mode, r)).return = e, t) : ((t = i(t, n.children || [])).return = e, t) }

                    function d(e, t, n, r, a) { return null === t || 7 !== t.tag ? ((t = Bc(n, e.mode, r, a)).return = e, t) : ((t = i(t, n)).return = e, t) }

                    function f(e, t, n) { if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = zc("" + t, e.mode, n)).return = e, t; if ("object" === typeof t && null !== t) { switch (t.$$typeof) {
                                case w:
                                    return (n = Rc(t.type, t.key, t.props, null, e.mode, n)).ref = $a(e, null, t), n.return = e, n;
                                case b:
                                    return (t = Oc(t, e.mode, n)).return = e, t;
                                case T:
                                    return f(e, (0, t._init)(t._payload), n) } if (te(t) || R(t)) return (t = Bc(t, e.mode, n, null)).return = e, t;
                            Ga(e, t) } return null }

                    function h(e, t, n, r) { var i = null !== t ? t.key : null; if ("string" === typeof n && "" !== n || "number" === typeof n) return null !== i ? null : l(e, t, "" + n, r); if ("object" === typeof n && null !== n) { switch (n.$$typeof) {
                                case w:
                                    return n.key === i ? c(e, t, n, r) : null;
                                case b:
                                    return n.key === i ? u(e, t, n, r) : null;
                                case T:
                                    return h(e, t, (i = n._init)(n._payload), r) } if (te(n) || R(n)) return null !== i ? null : d(e, t, n, r, null);
                            Ga(e, n) } return null }

                    function p(e, t, n, r, i) { if ("string" === typeof r && "" !== r || "number" === typeof r) return l(t, e = e.get(n) || null, "" + r, i); if ("object" === typeof r && null !== r) { switch (r.$$typeof) {
                                case w:
                                    return c(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
                                case b:
                                    return u(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
                                case T:
                                    return p(e, t, n, (0, r._init)(r._payload), i) } if (te(r) || R(r)) return d(t, e = e.get(n) || null, r, i, null);
                            Ga(t, r) } return null }

                    function m(i, a, o, l) { for (var c = null, u = null, d = a, m = a = 0, x = null; null !== d && m < o.length; m++) { d.index > m ? (x = d, d = null) : x = d.sibling; var g = h(i, d, o[m], l); if (null === g) { null === d && (d = x); break }
                            e && d && null === g.alternate && t(i, d), a = s(g, a, m), null === u ? c = g : u.sibling = g, u = g, d = x } if (m === o.length) return n(i, d), ia && Ki(i, m), c; if (null === d) { for (; m < o.length; m++) null !== (d = f(i, o[m], l)) && (a = s(d, a, m), null === u ? c = d : u.sibling = d, u = d); return ia && Ki(i, m), c } for (d = r(i, d); m < o.length; m++) null !== (x = p(d, i, m, o[m], l)) && (e && null !== x.alternate && d.delete(null === x.key ? m : x.key), a = s(x, a, m), null === u ? c = x : u.sibling = x, u = x); return e && d.forEach((function(e) { return t(i, e) })), ia && Ki(i, m), c }

                    function x(i, o, l, c) { var u = R(l); if ("function" !== typeof u) throw Error(a(150)); if (null == (l = u.call(l))) throw Error(a(151)); for (var d = u = null, m = o, x = o = 0, g = null, v = l.next(); null !== m && !v.done; x++, v = l.next()) { m.index > x ? (g = m, m = null) : g = m.sibling; var y = h(i, m, v.value, c); if (null === y) { null === m && (m = g); break }
                            e && m && null === y.alternate && t(i, m), o = s(y, o, x), null === d ? u = y : d.sibling = y, d = y, m = g } if (v.done) return n(i, m), ia && Ki(i, x), u; if (null === m) { for (; !v.done; x++, v = l.next()) null !== (v = f(i, v.value, c)) && (o = s(v, o, x), null === d ? u = v : d.sibling = v, d = v); return ia && Ki(i, x), u } for (m = r(i, m); !v.done; x++, v = l.next()) null !== (v = p(m, i, x, v.value, c)) && (e && null !== v.alternate && m.delete(null === v.key ? x : v.key), o = s(v, o, x), null === d ? u = v : d.sibling = v, d = v); return e && m.forEach((function(e) { return t(i, e) })), ia && Ki(i, x), u } return function e(r, a, s, l) { if ("object" === typeof s && null !== s && s.type === j && null === s.key && (s = s.props.children), "object" === typeof s && null !== s) { switch (s.$$typeof) {
                                case w:
                                    e: { for (var c = s.key, u = a; null !== u;) { if (u.key === c) { if ((c = s.type) === j) { if (7 === u.tag) { n(r, u.sibling), (a = i(u, s.props.children)).return = r, r = a; break e } } else if (u.elementType === c || "object" === typeof c && null !== c && c.$$typeof === T && Ya(c) === u.type) { n(r, u.sibling), (a = i(u, s.props)).ref = $a(r, u, s), a.return = r, r = a; break e }
                                                n(r, u); break }
                                            t(r, u), u = u.sibling }
                                        s.type === j ? ((a = Bc(s.props.children, r.mode, l, s.key)).return = r, r = a) : ((l = Rc(s.type, s.key, s.props, null, r.mode, l)).ref = $a(r, a, s), l.return = r, r = l) }
                                    return o(r);
                                case b:
                                    e: { for (u = s.key; null !== a;) { if (a.key === u) { if (4 === a.tag && a.stateNode.containerInfo === s.containerInfo && a.stateNode.implementation === s.implementation) { n(r, a.sibling), (a = i(a, s.children || [])).return = r, r = a; break e }
                                                n(r, a); break }
                                            t(r, a), a = a.sibling }(a = Oc(s, r.mode, l)).return = r, r = a }
                                    return o(r);
                                case T:
                                    return e(r, a, (u = s._init)(s._payload), l) } if (te(s)) return m(r, a, s, l); if (R(s)) return x(r, a, s, l);
                            Ga(r, s) } return "string" === typeof s && "" !== s || "number" === typeof s ? (s = "" + s, null !== a && 6 === a.tag ? (n(r, a.sibling), (a = i(a, s)).return = r, r = a) : (n(r, a), (a = zc(s, r.mode, l)).return = r, r = a), o(r)) : n(r, a) } } var Xa = qa(!0),
                    Qa = qa(!1),
                    Ka = {},
                    Ja = ki(Ka),
                    es = ki(Ka),
                    ts = ki(Ka);

                function ns(e) { if (e === Ka) throw Error(a(174)); return e }

                function rs(e, t) { switch (Si(ts, t), Si(es, e), Si(Ja, Ka), e = t.nodeType) {
                        case 9:
                        case 11:
                            t = (t = t.documentElement) ? t.namespaceURI : le(null, ""); break;
                        default:
                            t = le(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName) }
                    Ni(Ja), Si(Ja, t) }

                function is() { Ni(Ja), Ni(es), Ni(ts) }

                function as(e) { ns(ts.current); var t = ns(Ja.current),
                        n = le(t, e.type);
                    t !== n && (Si(es, e), Si(Ja, n)) }

                function ss(e) { es.current === e && (Ni(Ja), Ni(es)) } var os = ki(0);

                function ls(e) { for (var t = e; null !== t;) { if (13 === t.tag) { var n = t.memoizedState; if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) { if (0 !== (128 & t.flags)) return t } else if (null !== t.child) { t.child.return = t, t = t.child; continue } if (t === e) break; for (; null === t.sibling;) { if (null === t.return || t.return === e) return null;
                            t = t.return }
                        t.sibling.return = t.return, t = t.sibling } return null } var cs = [];

                function us() { for (var e = 0; e < cs.length; e++) cs[e]._workInProgressVersionPrimary = null;
                    cs.length = 0 } var ds = C.ReactCurrentDispatcher,
                    fs = C.ReactCurrentBatchConfig,
                    hs = 0,
                    ps = null,
                    ms = null,
                    xs = null,
                    gs = !1,
                    vs = !1,
                    ys = 0,
                    Cs = 0;

                function ws() { throw Error(a(321)) }

                function bs(e, t) { if (null === t) return !1; for (var n = 0; n < t.length && n < e.length; n++)
                        if (!or(e[n], t[n])) return !1;
                    return !0 }

                function js(e, t, n, r, i, s) { if (hs = s, ps = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ds.current = null === e || null === e.memoizedState ? so : oo, e = n(r, i), vs) { s = 0;
                        do { if (vs = !1, ys = 0, 25 <= s) throw Error(a(301));
                            s += 1, xs = ms = null, t.updateQueue = null, ds.current = lo, e = n(r, i) } while (vs) } if (ds.current = ao, t = null !== ms && null !== ms.next, hs = 0, xs = ms = ps = null, gs = !1, t) throw Error(a(300)); return e }

                function ks() { var e = 0 !== ys; return ys = 0, e }

                function Ns() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return null === xs ? ps.memoizedState = xs = e : xs = xs.next = e, xs }

                function Ss() { if (null === ms) { var e = ps.alternate;
                        e = null !== e ? e.memoizedState : null } else e = ms.next; var t = null === xs ? ps.memoizedState : xs.next; if (null !== t) xs = t, ms = e;
                    else { if (null === e) throw Error(a(310));
                        e = { memoizedState: (ms = e).memoizedState, baseState: ms.baseState, baseQueue: ms.baseQueue, queue: ms.queue, next: null }, null === xs ? ps.memoizedState = xs = e : xs = xs.next = e } return xs }

                function Es(e, t) { return "function" === typeof t ? t(e) : t }

                function Ps(e) { var t = Ss(),
                        n = t.queue; if (null === n) throw Error(a(311));
                    n.lastRenderedReducer = e; var r = ms,
                        i = r.baseQueue,
                        s = n.pending; if (null !== s) { if (null !== i) { var o = i.next;
                            i.next = s.next, s.next = o }
                        r.baseQueue = i = s, n.pending = null } if (null !== i) { s = i.next, r = r.baseState; var l = o = null,
                            c = null,
                            u = s;
                        do { var d = u.lane; if ((hs & d) === d) null !== c && (c = c.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
                            else { var f = { lane: d, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
                                null === c ? (l = c = f, o = r) : c = c.next = f, ps.lanes |= d, Dl |= d }
                            u = u.next } while (null !== u && u !== s);
                        null === c ? o = r : c.next = l, or(r, t.memoizedState) || (Co = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r } if (null !== (e = n.interleaved)) { i = e;
                        do { s = i.lane, ps.lanes |= s, Dl |= s, i = i.next } while (i !== e) } else null === i && (n.lanes = 0); return [t.memoizedState, n.dispatch] }

                function Ms(e) { var t = Ss(),
                        n = t.queue; if (null === n) throw Error(a(311));
                    n.lastRenderedReducer = e; var r = n.dispatch,
                        i = n.pending,
                        s = t.memoizedState; if (null !== i) { n.pending = null; var o = i = i.next;
                        do { s = e(s, o.action), o = o.next } while (o !== i);
                        or(s, t.memoizedState) || (Co = !0), t.memoizedState = s, null === t.baseQueue && (t.baseState = s), n.lastRenderedState = s } return [s, r] }

                function Fs() {}

                function Ls(e, t) { var n = ps,
                        r = Ss(),
                        i = t(),
                        s = !or(r.memoizedState, i); if (s && (r.memoizedState = i, Co = !0), r = r.queue, Us(Vs.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || null !== xs && 1 & xs.memoizedState.tag) { if (n.flags |= 2048, zs(9, As.bind(null, n, r, i, t), void 0, null), null === Fl) throw Error(a(349));
                        0 !== (30 & hs) || Ts(n, t, i) } return i }

                function Ts(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, null === (t = ps.updateQueue) ? (t = { lastEffect: null, stores: null }, ps.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e) }

                function As(e, t, n, r) { t.value = n, t.getSnapshot = r, Rs(t) && Bs(e) }

                function Vs(e, t, n) { return n((function() { Rs(t) && Bs(e) })) }

                function Rs(e) { var t = e.getSnapshot;
                    e = e.value; try { var n = t(); return !or(e, n) } catch (r) { return !0 } }

                function Bs(e) { var t = Ma(e, 1);
                    null !== t && rc(t, e, 1, -1) }

                function Ds(e) { var t = Ns(); return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Es, lastRenderedState: e }, t.queue = e, e = e.dispatch = to.bind(null, ps, e), [t.memoizedState, e] }

                function zs(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, null === (t = ps.updateQueue) ? (t = { lastEffect: null, stores: null }, ps.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e }

                function Os() { return Ss().memoizedState }

                function _s(e, t, n, r) { var i = Ns();
                    ps.flags |= e, i.memoizedState = zs(1 | t, n, void 0, void 0 === r ? null : r) }

                function Hs(e, t, n, r) { var i = Ss();
                    r = void 0 === r ? null : r; var a = void 0; if (null !== ms) { var s = ms.memoizedState; if (a = s.destroy, null !== r && bs(r, s.deps)) return void(i.memoizedState = zs(t, n, a, r)) }
                    ps.flags |= e, i.memoizedState = zs(1 | t, n, a, r) }

                function Is(e, t) { return _s(8390656, 8, e, t) }

                function Us(e, t) { return Hs(2048, 8, e, t) }

                function Zs(e, t) { return Hs(4, 2, e, t) }

                function Ws(e, t) { return Hs(4, 4, e, t) }

                function $s(e, t) { return "function" === typeof t ? (e = e(), t(e), function() { t(null) }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function() { t.current = null }) : void 0 }

                function Gs(e, t, n) { return n = null !== n && void 0 !== n ? n.concat([e]) : null, Hs(4, 4, $s.bind(null, t, e), n) }

                function Ys() {}

                function qs(e, t) { var n = Ss();
                    t = void 0 === t ? null : t; var r = n.memoizedState; return null !== r && null !== t && bs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e) }

                function Xs(e, t) { var n = Ss();
                    t = void 0 === t ? null : t; var r = n.memoizedState; return null !== r && null !== t && bs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e) }

                function Qs(e, t, n) { return 0 === (21 & hs) ? (e.baseState && (e.baseState = !1, Co = !0), e.memoizedState = n) : (or(n, t) || (n = mt(), ps.lanes |= n, Dl |= n, e.baseState = !0), t) }

                function Ks(e, t) { var n = yt;
                    yt = 0 !== n && 4 > n ? n : 4, e(!0); var r = fs.transition;
                    fs.transition = {}; try { e(!1), t() } finally { yt = n, fs.transition = r } }

                function Js() { return Ss().memoizedState }

                function eo(e, t, n) { var r = nc(e); if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, no(e)) ro(t, n);
                    else if (null !== (n = Pa(e, t, n, r))) { rc(n, e, r, tc()), io(n, t, r) } }

                function to(e, t, n) { var r = nc(e),
                        i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }; if (no(e)) ro(t, i);
                    else { var a = e.alternate; if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer)) try { var s = t.lastRenderedState,
                                o = a(s, n); if (i.hasEagerState = !0, i.eagerState = o, or(o, s)) { var l = t.interleaved; return null === l ? (i.next = i, Ea(t)) : (i.next = l.next, l.next = i), void(t.interleaved = i) } } catch (c) {}
                        null !== (n = Pa(e, t, i, r)) && (rc(n, e, r, i = tc()), io(n, t, r)) } }

                function no(e) { var t = e.alternate; return e === ps || null !== t && t === ps }

                function ro(e, t) { vs = gs = !0; var n = e.pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t }

                function io(e, t, n) { if (0 !== (4194240 & n)) { var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, vt(e, n) } } var ao = { readContext: Na, useCallback: ws, useContext: ws, useEffect: ws, useImperativeHandle: ws, useInsertionEffect: ws, useLayoutEffect: ws, useMemo: ws, useReducer: ws, useRef: ws, useState: ws, useDebugValue: ws, useDeferredValue: ws, useTransition: ws, useMutableSource: ws, useSyncExternalStore: ws, useId: ws, unstable_isNewReconciler: !1 },
                    so = { readContext: Na, useCallback: function(e, t) { return Ns().memoizedState = [e, void 0 === t ? null : t], e }, useContext: Na, useEffect: Is, useImperativeHandle: function(e, t, n) { return n = null !== n && void 0 !== n ? n.concat([e]) : null, _s(4194308, 4, $s.bind(null, t, e), n) }, useLayoutEffect: function(e, t) { return _s(4194308, 4, e, t) }, useInsertionEffect: function(e, t) { return _s(4, 2, e, t) }, useMemo: function(e, t) { var n = Ns(); return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e }, useReducer: function(e, t, n) { var r = Ns(); return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = eo.bind(null, ps, e), [r.memoizedState, e] }, useRef: function(e) { return e = { current: e }, Ns().memoizedState = e }, useState: Ds, useDebugValue: Ys, useDeferredValue: function(e) { return Ns().memoizedState = e }, useTransition: function() { var e = Ds(!1),
                                t = e[0]; return e = Ks.bind(null, e[1]), Ns().memoizedState = e, [t, e] }, useMutableSource: function() {}, useSyncExternalStore: function(e, t, n) { var r = ps,
                                i = Ns(); if (ia) { if (void 0 === n) throw Error(a(407));
                                n = n() } else { if (n = t(), null === Fl) throw Error(a(349));
                                0 !== (30 & hs) || Ts(r, t, n) }
                            i.memoizedState = n; var s = { value: n, getSnapshot: t }; return i.queue = s, Is(Vs.bind(null, r, s, e), [e]), r.flags |= 2048, zs(9, As.bind(null, r, s, n, t), void 0, null), n }, useId: function() { var e = Ns(),
                                t = Fl.identifierPrefix; if (ia) { var n = Qi;
                                t = ":" + t + "R" + (n = (Xi & ~(1 << 32 - st(Xi) - 1)).toString(32) + n), 0 < (n = ys++) && (t += "H" + n.toString(32)), t += ":" } else t = ":" + t + "r" + (n = Cs++).toString(32) + ":"; return e.memoizedState = t }, unstable_isNewReconciler: !1 },
                    oo = { readContext: Na, useCallback: qs, useContext: Na, useEffect: Us, useImperativeHandle: Gs, useInsertionEffect: Zs, useLayoutEffect: Ws, useMemo: Xs, useReducer: Ps, useRef: Os, useState: function() { return Ps(Es) }, useDebugValue: Ys, useDeferredValue: function(e) { return Qs(Ss(), ms.memoizedState, e) }, useTransition: function() { return [Ps(Es)[0], Ss().memoizedState] }, useMutableSource: Fs, useSyncExternalStore: Ls, useId: Js, unstable_isNewReconciler: !1 },
                    lo = { readContext: Na, useCallback: qs, useContext: Na, useEffect: Us, useImperativeHandle: Gs, useInsertionEffect: Zs, useLayoutEffect: Ws, useMemo: Xs, useReducer: Ms, useRef: Os, useState: function() { return Ms(Es) }, useDebugValue: Ys, useDeferredValue: function(e) { var t = Ss(); return null === ms ? t.memoizedState = e : Qs(t, ms.memoizedState, e) }, useTransition: function() { return [Ms(Es)[0], Ss().memoizedState] }, useMutableSource: Fs, useSyncExternalStore: Ls, useId: Js, unstable_isNewReconciler: !1 };

                function co(e, t) { try { var n = "",
                            r = t;
                        do { n += H(r), r = r.return } while (r); var i = n } catch (a) { i = "\nError generating stack: " + a.message + "\n" + a.stack } return { value: e, source: t, stack: i, digest: null } }

                function uo(e, t, n) { return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null } }

                function fo(e, t) { try { console.error(t.value) } catch (n) { setTimeout((function() { throw n })) } } var ho = "function" === typeof WeakMap ? WeakMap : Map;

                function po(e, t, n) {
                    (n = Aa(-1, n)).tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function() { Wl || (Wl = !0, $l = r), fo(0, t) }, n }

                function mo(e, t, n) {
                    (n = Aa(-1, n)).tag = 3; var r = e.type.getDerivedStateFromError; if ("function" === typeof r) { var i = t.value;
                        n.payload = function() { return r(i) }, n.callback = function() { fo(0, t) } } var a = e.stateNode; return null !== a && "function" === typeof a.componentDidCatch && (n.callback = function() { fo(0, t), "function" !== typeof r && (null === Gl ? Gl = new Set([this]) : Gl.add(this)); var e = t.stack;
                        this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" }) }), n }

                function xo(e, t, n) { var r = e.pingCache; if (null === r) { r = e.pingCache = new ho; var i = new Set;
                        r.set(t, i) } else void 0 === (i = r.get(t)) && (i = new Set, r.set(t, i));
                    i.has(n) || (i.add(n), e = Sc.bind(null, e, t, n), t.then(e, e)) }

                function go(e) { do { var t; if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                        e = e.return } while (null !== e); return null }

                function vo(e, t, n, r, i) { return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Aa(-1, 1)).tag = 2, Va(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e) } var yo = C.ReactCurrentOwner,
                    Co = !1;

                function wo(e, t, n, r) { t.child = null === e ? Qa(t, null, n, r) : Xa(t, e.child, n, r) }

                function bo(e, t, n, r, i) { n = n.render; var a = t.ref; return ka(t, i), r = js(e, t, n, r, a, i), n = ks(), null === e || Co ? (ia && n && ea(t), t.flags |= 1, wo(e, t, r, i), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Wo(e, t, i)) }

                function jo(e, t, n, r, i) { if (null === e) { var a = n.type; return "function" !== typeof a || Ac(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Rc(n.type, null, r, t, t.mode, i)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, ko(e, t, a, r, i)) } if (a = e.child, 0 === (e.lanes & i)) { var s = a.memoizedProps; if ((n = null !== (n = n.compare) ? n : lr)(s, r) && e.ref === t.ref) return Wo(e, t, i) } return t.flags |= 1, (e = Vc(a, r)).ref = t.ref, e.return = t, t.child = e }

                function ko(e, t, n, r, i) { if (null !== e) { var a = e.memoizedProps; if (lr(a, r) && e.ref === t.ref) { if (Co = !1, t.pendingProps = r = a, 0 === (e.lanes & i)) return t.lanes = e.lanes, Wo(e, t, i);
                            0 !== (131072 & e.flags) && (Co = !0) } } return Eo(e, t, n, r, i) }

                function No(e, t, n) { var r = t.pendingProps,
                        i = r.children,
                        a = null !== e ? e.memoizedState : null; if ("hidden" === r.mode)
                        if (0 === (1 & t.mode)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Si(Vl, Al), Al |= n;
                        else { if (0 === (1073741824 & n)) return e = null !== a ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Si(Vl, Al), Al |= e, null;
                            t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = null !== a ? a.baseLanes : n, Si(Vl, Al), Al |= r }
                    else null !== a ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, Si(Vl, Al), Al |= r; return wo(e, t, i, n), t.child }

                function So(e, t) { var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152) }

                function Eo(e, t, n, r, i) { var a = Ti(n) ? Fi : Pi.current; return a = Li(t, a), ka(t, i), n = js(e, t, n, r, a, i), r = ks(), null === e || Co ? (ia && r && ea(t), t.flags |= 1, wo(e, t, n, i), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Wo(e, t, i)) }

                function Po(e, t, n, r, i) { if (Ti(n)) { var a = !0;
                        Bi(t) } else a = !1; if (ka(t, i), null === t.stateNode) Zo(e, t), Ua(t, n, r), Wa(t, n, r, i), r = !0;
                    else if (null === e) { var s = t.stateNode,
                            o = t.memoizedProps;
                        s.props = o; var l = s.context,
                            c = n.contextType; "object" === typeof c && null !== c ? c = Na(c) : c = Li(t, c = Ti(n) ? Fi : Pi.current); var u = n.getDerivedStateFromProps,
                            d = "function" === typeof u || "function" === typeof s.getSnapshotBeforeUpdate;
                        d || "function" !== typeof s.UNSAFE_componentWillReceiveProps && "function" !== typeof s.componentWillReceiveProps || (o !== r || l !== c) && Za(t, s, r, c), Fa = !1; var f = t.memoizedState;
                        s.state = f, Da(t, r, s, i), l = t.memoizedState, o !== r || f !== l || Mi.current || Fa ? ("function" === typeof u && (_a(t, n, u, r), l = t.memoizedState), (o = Fa || Ia(t, n, o, r, f, l, c)) ? (d || "function" !== typeof s.UNSAFE_componentWillMount && "function" !== typeof s.componentWillMount || ("function" === typeof s.componentWillMount && s.componentWillMount(), "function" === typeof s.UNSAFE_componentWillMount && s.UNSAFE_componentWillMount()), "function" === typeof s.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof s.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = c, r = o) : ("function" === typeof s.componentDidMount && (t.flags |= 4194308), r = !1) } else { s = t.stateNode, Ta(e, t), o = t.memoizedProps, c = t.type === t.elementType ? o : xa(t.type, o), s.props = c, d = t.pendingProps, f = s.context, "object" === typeof(l = n.contextType) && null !== l ? l = Na(l) : l = Li(t, l = Ti(n) ? Fi : Pi.current); var h = n.getDerivedStateFromProps;
                        (u = "function" === typeof h || "function" === typeof s.getSnapshotBeforeUpdate) || "function" !== typeof s.UNSAFE_componentWillReceiveProps && "function" !== typeof s.componentWillReceiveProps || (o !== d || f !== l) && Za(t, s, r, l), Fa = !1, f = t.memoizedState, s.state = f, Da(t, r, s, i); var p = t.memoizedState;
                        o !== d || f !== p || Mi.current || Fa ? ("function" === typeof h && (_a(t, n, h, r), p = t.memoizedState), (c = Fa || Ia(t, n, c, r, f, p, l) || !1) ? (u || "function" !== typeof s.UNSAFE_componentWillUpdate && "function" !== typeof s.componentWillUpdate || ("function" === typeof s.componentWillUpdate && s.componentWillUpdate(r, p, l), "function" === typeof s.UNSAFE_componentWillUpdate && s.UNSAFE_componentWillUpdate(r, p, l)), "function" === typeof s.componentDidUpdate && (t.flags |= 4), "function" === typeof s.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof s.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof s.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), s.props = r, s.state = p, s.context = l, r = c) : ("function" !== typeof s.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof s.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1) } return Mo(e, t, n, r, a, i) }

                function Mo(e, t, n, r, i, a) { So(e, t); var s = 0 !== (128 & t.flags); if (!r && !s) return i && Di(t, n, !1), Wo(e, t, a);
                    r = t.stateNode, yo.current = t; var o = s && "function" !== typeof n.getDerivedStateFromError ? null : r.render(); return t.flags |= 1, null !== e && s ? (t.child = Xa(t, e.child, null, a), t.child = Xa(t, null, o, a)) : wo(e, t, o, a), t.memoizedState = r.state, i && Di(t, n, !0), t.child }

                function Fo(e) { var t = e.stateNode;
                    t.pendingContext ? Vi(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Vi(0, t.context, !1), rs(e, t.containerInfo) }

                function Lo(e, t, n, r, i) { return ha(), pa(i), t.flags |= 256, wo(e, t, n, r), t.child } var To, Ao, Vo, Ro, Bo = { dehydrated: null, treeContext: null, retryLane: 0 };

                function Do(e) { return { baseLanes: e, cachePool: null, transitions: null } }

                function zo(e, t, n) { var r, i = t.pendingProps,
                        s = os.current,
                        o = !1,
                        l = 0 !== (128 & t.flags); if ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & s)), r ? (o = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (s |= 1), Si(os, 1 & s), null === e) return ca(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = i.children, e = i.fallback, o ? (i = t.mode, o = t.child, l = { mode: "hidden", children: l }, 0 === (1 & i) && null !== o ? (o.childLanes = 0, o.pendingProps = l) : o = Dc(l, i, 0, null), e = Bc(e, i, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Do(n), t.memoizedState = Bo, e) : Oo(t, l)); if (null !== (s = e.memoizedState) && null !== (r = s.dehydrated)) return function(e, t, n, r, i, s, o) { if (n) return 256 & t.flags ? (t.flags &= -257, _o(e, t, o, r = uo(Error(a(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = Dc({ mode: "visible", children: r.children }, i, 0, null), (s = Bc(s, i, o, null)).flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, 0 !== (1 & t.mode) && Xa(t, e.child, null, o), t.child.memoizedState = Do(o), t.memoizedState = Bo, s); if (0 === (1 & t.mode)) return _o(e, t, o, null); if ("$!" === i.data) { if (r = i.nextSibling && i.nextSibling.dataset) var l = r.dgst; return r = l, _o(e, t, o, r = uo(s = Error(a(419)), r, void 0)) } if (l = 0 !== (o & e.childLanes), Co || l) { if (null !== (r = Fl)) { switch (o & -o) {
                                    case 4:
                                        i = 2; break;
                                    case 16:
                                        i = 8; break;
                                    case 64:
                                    case 128:
                                    case 256:
                                    case 512:
                                    case 1024:
                                    case 2048:
                                    case 4096:
                                    case 8192:
                                    case 16384:
                                    case 32768:
                                    case 65536:
                                    case 131072:
                                    case 262144:
                                    case 524288:
                                    case 1048576:
                                    case 2097152:
                                    case 4194304:
                                    case 8388608:
                                    case 16777216:
                                    case 33554432:
                                    case 67108864:
                                        i = 32; break;
                                    case 536870912:
                                        i = 268435456; break;
                                    default:
                                        i = 0 }
                                0 !== (i = 0 !== (i & (r.suspendedLanes | o)) ? 0 : i) && i !== s.retryLane && (s.retryLane = i, Ma(e, i), rc(r, e, i, -1)) } return xc(), _o(e, t, o, r = uo(Error(a(421)))) } return "$?" === i.data ? (t.flags |= 128, t.child = e.child, t = Pc.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, ra = ci(i.nextSibling), na = t, ia = !0, aa = null, null !== e && (Gi[Yi++] = Xi, Gi[Yi++] = Qi, Gi[Yi++] = qi, Xi = e.id, Qi = e.overflow, qi = t), t = Oo(t, r.children), t.flags |= 4096, t) }(e, t, l, i, r, s, n); if (o) { o = i.fallback, l = t.mode, r = (s = e.child).sibling; var c = { mode: "hidden", children: i.children }; return 0 === (1 & l) && t.child !== s ? ((i = t.child).childLanes = 0, i.pendingProps = c, t.deletions = null) : (i = Vc(s, c)).subtreeFlags = 14680064 & s.subtreeFlags, null !== r ? o = Vc(r, o) : (o = Bc(o, l, n, null)).flags |= 2, o.return = t, i.return = t, i.sibling = o, t.child = i, i = o, o = t.child, l = null === (l = e.child.memoizedState) ? Do(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = Bo, i } return e = (o = e.child).sibling, i = Vc(o, { mode: "visible", children: i.children }), 0 === (1 & t.mode) && (i.lanes = n), i.return = t, i.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i }

                function Oo(e, t) { return (t = Dc({ mode: "visible", children: t }, e.mode, 0, null)).return = e, e.child = t }

                function _o(e, t, n, r) { return null !== r && pa(r), Xa(t, e.child, null, n), (e = Oo(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e }

                function Ho(e, t, n) { e.lanes |= t; var r = e.alternate;
                    null !== r && (r.lanes |= t), ja(e.return, t, n) }

                function Io(e, t, n, r, i) { var a = e.memoizedState;
                    null === a ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i) }

                function Uo(e, t, n) { var r = t.pendingProps,
                        i = r.revealOrder,
                        a = r.tail; if (wo(e, t, r.children, n), 0 !== (2 & (r = os.current))) r = 1 & r | 2, t.flags |= 128;
                    else { if (null !== e && 0 !== (128 & e.flags)) e: for (e = t.child; null !== e;) { if (13 === e.tag) null !== e.memoizedState && Ho(e, n, t);
                            else if (19 === e.tag) Ho(e, n, t);
                            else if (null !== e.child) { e.child.return = e, e = e.child; continue } if (e === t) break e; for (; null === e.sibling;) { if (null === e.return || e.return === t) break e;
                                e = e.return }
                            e.sibling.return = e.return, e = e.sibling }
                        r &= 1 } if (Si(os, r), 0 === (1 & t.mode)) t.memoizedState = null;
                    else switch (i) {
                        case "forwards":
                            for (n = t.child, i = null; null !== n;) null !== (e = n.alternate) && null === ls(e) && (i = n), n = n.sibling;
                            null === (n = i) ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Io(t, !1, i, n, a); break;
                        case "backwards":
                            for (n = null, i = t.child, t.child = null; null !== i;) { if (null !== (e = i.alternate) && null === ls(e)) { t.child = i; break }
                                e = i.sibling, i.sibling = n, n = i, i = e }
                            Io(t, !0, n, null, a); break;
                        case "together":
                            Io(t, !1, null, null, void 0); break;
                        default:
                            t.memoizedState = null }
                    return t.child }

                function Zo(e, t) { 0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2) }

                function Wo(e, t, n) { if (null !== e && (t.dependencies = e.dependencies), Dl |= t.lanes, 0 === (n & t.childLanes)) return null; if (null !== e && t.child !== e.child) throw Error(a(153)); if (null !== t.child) { for (n = Vc(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Vc(e, e.pendingProps)).return = t;
                        n.sibling = null } return t.child }

                function $o(e, t) { if (!ia) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail; for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null; break;
                        case "collapsed":
                            n = e.tail; for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null } }

                function Go(e) { var t = null !== e.alternate && e.alternate.child === e.child,
                        n = 0,
                        r = 0; if (t)
                        for (var i = e.child; null !== i;) n |= i.lanes | i.childLanes, r |= 14680064 & i.subtreeFlags, r |= 14680064 & i.flags, i.return = e, i = i.sibling;
                    else
                        for (i = e.child; null !== i;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling; return e.subtreeFlags |= r, e.childLanes = n, t }

                function Yo(e, t, n) { var r = t.pendingProps; switch (ta(t), t.tag) {
                        case 2:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                            return Go(t), null;
                        case 1:
                        case 17:
                            return Ti(t.type) && Ai(), Go(t), null;
                        case 3:
                            return r = t.stateNode, is(), Ni(Mi), Ni(Pi), us(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (da(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== aa && (oc(aa), aa = null))), Ao(e, t), Go(t), null;
                        case 5:
                            ss(t); var i = ns(ts.current); if (n = t.type, null !== e && null != t.stateNode) Vo(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                            else { if (!r) { if (null === t.stateNode) throw Error(a(166)); return Go(t), null } if (e = ns(Ja.current), da(t)) { r = t.stateNode, n = t.type; var s = t.memoizedProps; switch (r[fi] = t, r[hi] = s, e = 0 !== (1 & t.mode), n) {
                                        case "dialog":
                                            Or("cancel", r), Or("close", r); break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Or("load", r); break;
                                        case "video":
                                        case "audio":
                                            for (i = 0; i < Rr.length; i++) Or(Rr[i], r); break;
                                        case "source":
                                            Or("error", r); break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Or("error", r), Or("load", r); break;
                                        case "details":
                                            Or("toggle", r); break;
                                        case "input":
                                            X(r, s), Or("invalid", r); break;
                                        case "select":
                                            r._wrapperState = { wasMultiple: !!s.multiple }, Or("invalid", r); break;
                                        case "textarea":
                                            ie(r, s), Or("invalid", r) } for (var l in ve(n, s), i = null, s)
                                        if (s.hasOwnProperty(l)) { var c = s[l]; "children" === l ? "string" === typeof c ? r.textContent !== c && (!0 !== s.suppressHydrationWarning && Kr(r.textContent, c, e), i = ["children", c]) : "number" === typeof c && r.textContent !== "" + c && (!0 !== s.suppressHydrationWarning && Kr(r.textContent, c, e), i = ["children", "" + c]) : o.hasOwnProperty(l) && null != c && "onScroll" === l && Or("scroll", r) }
                                    switch (n) {
                                        case "input":
                                            $(r), J(r, s, !0); break;
                                        case "textarea":
                                            $(r), se(r); break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" === typeof s.onClick && (r.onclick = Jr) }
                                    r = i, t.updateQueue = r, null !== r && (t.flags |= 4) } else { l = 9 === i.nodeType ? i : i.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = oe(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = l.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), "select" === n && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[fi] = t, e[hi] = r, To(e, t, !1, !1), t.stateNode = e;
                                    e: { switch (l = ye(n, r), n) {
                                            case "dialog":
                                                Or("cancel", e), Or("close", e), i = r; break;
                                            case "iframe":
                                            case "object":
                                            case "embed":
                                                Or("load", e), i = r; break;
                                            case "video":
                                            case "audio":
                                                for (i = 0; i < Rr.length; i++) Or(Rr[i], e);
                                                i = r; break;
                                            case "source":
                                                Or("error", e), i = r; break;
                                            case "img":
                                            case "image":
                                            case "link":
                                                Or("error", e), Or("load", e), i = r; break;
                                            case "details":
                                                Or("toggle", e), i = r; break;
                                            case "input":
                                                X(e, r), i = q(e, r), Or("invalid", e); break;
                                            case "option":
                                            default:
                                                i = r; break;
                                            case "select":
                                                e._wrapperState = { wasMultiple: !!r.multiple }, i = D({}, r, { value: void 0 }), Or("invalid", e); break;
                                            case "textarea":
                                                ie(e, r), i = re(e, r), Or("invalid", e) } for (s in ve(n, i), c = i)
                                            if (c.hasOwnProperty(s)) { var u = c[s]; "style" === s ? xe(e, u) : "dangerouslySetInnerHTML" === s ? null != (u = u ? u.__html : void 0) && de(e, u) : "children" === s ? "string" === typeof u ? ("textarea" !== n || "" !== u) && fe(e, u) : "number" === typeof u && fe(e, "" + u) : "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && "autoFocus" !== s && (o.hasOwnProperty(s) ? null != u && "onScroll" === s && Or("scroll", e) : null != u && y(e, s, u, l)) }
                                        switch (n) {
                                            case "input":
                                                $(e), J(e, r, !1); break;
                                            case "textarea":
                                                $(e), se(e); break;
                                            case "option":
                                                null != r.value && e.setAttribute("value", "" + Z(r.value)); break;
                                            case "select":
                                                e.multiple = !!r.multiple, null != (s = r.value) ? ne(e, !!r.multiple, s, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0); break;
                                            default:
                                                "function" === typeof i.onClick && (e.onclick = Jr) } switch (n) {
                                            case "button":
                                            case "input":
                                            case "select":
                                            case "textarea":
                                                r = !!r.autoFocus; break e;
                                            case "img":
                                                r = !0; break e;
                                            default:
                                                r = !1 } }
                                    r && (t.flags |= 4) }
                                null !== t.ref && (t.flags |= 512, t.flags |= 2097152) } return Go(t), null;
                        case 6:
                            if (e && null != t.stateNode) Ro(e, t, e.memoizedProps, r);
                            else { if ("string" !== typeof r && null === t.stateNode) throw Error(a(166)); if (n = ns(ts.current), ns(Ja.current), da(t)) { if (r = t.stateNode, n = t.memoizedProps, r[fi] = t, (s = r.nodeValue !== n) && null !== (e = na)) switch (e.tag) {
                                        case 3:
                                            Kr(r.nodeValue, n, 0 !== (1 & e.mode)); break;
                                        case 5:
                                            !0 !== e.memoizedProps.suppressHydrationWarning && Kr(r.nodeValue, n, 0 !== (1 & e.mode)) }
                                    s && (t.flags |= 4) } else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fi] = t, t.stateNode = r } return Go(t), null;
                        case 13:
                            if (Ni(os), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) { if (ia && null !== ra && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) fa(), ha(), t.flags |= 98560, s = !1;
                                else if (s = da(t), null !== r && null !== r.dehydrated) { if (null === e) { if (!s) throw Error(a(318)); if (!(s = null !== (s = t.memoizedState) ? s.dehydrated : null)) throw Error(a(317));
                                        s[fi] = t } else ha(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                    Go(t), s = !1 } else null !== aa && (oc(aa), aa = null), s = !0; if (!s) return 65536 & t.flags ? t : null } return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & os.current) ? 0 === Rl && (Rl = 3) : xc())), null !== t.updateQueue && (t.flags |= 4), Go(t), null);
                        case 4:
                            return is(), Ao(e, t), null === e && Ir(t.stateNode.containerInfo), Go(t), null;
                        case 10:
                            return ba(t.type._context), Go(t), null;
                        case 19:
                            if (Ni(os), null === (s = t.memoizedState)) return Go(t), null; if (r = 0 !== (128 & t.flags), null === (l = s.rendering))
                                if (r) $o(s, !1);
                                else { if (0 !== Rl || null !== e && 0 !== (128 & e.flags))
                                        for (e = t.child; null !== e;) { if (null !== (l = ls(e))) { for (t.flags |= 128, $o(s, !1), null !== (r = l.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (s = n).flags &= 14680066, null === (l = s.alternate) ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = l.childLanes, s.lanes = l.lanes, s.child = l.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = l.memoizedProps, s.memoizedState = l.memoizedState, s.updateQueue = l.updateQueue, s.type = l.type, e = l.dependencies, s.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling; return Si(os, 1 & os.current | 2), t.child }
                                            e = e.sibling }
                                    null !== s.tail && Qe() > Ul && (t.flags |= 128, r = !0, $o(s, !1), t.lanes = 4194304) }
                            else { if (!r)
                                    if (null !== (e = ls(l))) { if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), $o(s, !0), null === s.tail && "hidden" === s.tailMode && !l.alternate && !ia) return Go(t), null } else 2 * Qe() - s.renderingStartTime > Ul && 1073741824 !== n && (t.flags |= 128, r = !0, $o(s, !1), t.lanes = 4194304);
                                s.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (n = s.last) ? n.sibling = l : t.child = l, s.last = l) } return null !== s.tail ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = Qe(), t.sibling = null, n = os.current, Si(os, r ? 1 & n | 2 : 1 & n), t) : (Go(t), null);
                        case 22:
                        case 23:
                            return fc(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Al) && (Go(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Go(t), null;
                        case 24:
                        case 25:
                            return null } throw Error(a(156, t.tag)) }

                function qo(e, t) { switch (ta(t), t.tag) {
                        case 1:
                            return Ti(t.type) && Ai(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 3:
                            return is(), Ni(Mi), Ni(Pi), us(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                        case 5:
                            return ss(t), null;
                        case 13:
                            if (Ni(os), null !== (e = t.memoizedState) && null !== e.dehydrated) { if (null === t.alternate) throw Error(a(340));
                                ha() } return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 19:
                            return Ni(os), null;
                        case 4:
                            return is(), null;
                        case 10:
                            return ba(t.type._context), null;
                        case 22:
                        case 23:
                            return fc(), null;
                        default:
                            return null } }
                To = function(e, t) { for (var n = t.child; null !== n;) { if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                        else if (4 !== n.tag && null !== n.child) { n.child.return = n, n = n.child; continue } if (n === t) break; for (; null === n.sibling;) { if (null === n.return || n.return === t) return;
                            n = n.return }
                        n.sibling.return = n.return, n = n.sibling } }, Ao = function() {}, Vo = function(e, t, n, r) { var i = e.memoizedProps; if (i !== r) { e = t.stateNode, ns(Ja.current); var a, s = null; switch (n) {
                            case "input":
                                i = q(e, i), r = q(e, r), s = []; break;
                            case "select":
                                i = D({}, i, { value: void 0 }), r = D({}, r, { value: void 0 }), s = []; break;
                            case "textarea":
                                i = re(e, i), r = re(e, r), s = []; break;
                            default:
                                "function" !== typeof i.onClick && "function" === typeof r.onClick && (e.onclick = Jr) } for (u in ve(n, r), n = null, i)
                            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && null != i[u])
                                if ("style" === u) { var l = i[u]; for (a in l) l.hasOwnProperty(a) && (n || (n = {}), n[a] = "") } else "dangerouslySetInnerHTML" !== u && "children" !== u && "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (o.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
                        for (u in r) { var c = r[u]; if (l = null != i ? i[u] : void 0, r.hasOwnProperty(u) && c !== l && (null != c || null != l))
                                if ("style" === u)
                                    if (l) { for (a in l) !l.hasOwnProperty(a) || c && c.hasOwnProperty(a) || (n || (n = {}), n[a] = ""); for (a in c) c.hasOwnProperty(a) && l[a] !== c[a] && (n || (n = {}), n[a] = c[a]) } else n || (s || (s = []), s.push(u, n)), n = c;
                            else "dangerouslySetInnerHTML" === u ? (c = c ? c.__html : void 0, l = l ? l.__html : void 0, null != c && l !== c && (s = s || []).push(u, c)) : "children" === u ? "string" !== typeof c && "number" !== typeof c || (s = s || []).push(u, "" + c) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && (o.hasOwnProperty(u) ? (null != c && "onScroll" === u && Or("scroll", e), s || l === c || (s = [])) : (s = s || []).push(u, c)) }
                        n && (s = s || []).push("style", n); var u = s;
                        (t.updateQueue = u) && (t.flags |= 4) } }, Ro = function(e, t, n, r) { n !== r && (t.flags |= 4) }; var Xo = !1,
                    Qo = !1,
                    Ko = "function" === typeof WeakSet ? WeakSet : Set,
                    Jo = null;

                function el(e, t) { var n = e.ref; if (null !== n)
                        if ("function" === typeof n) try { n(null) } catch (r) { Nc(e, t, r) } else n.current = null }

                function tl(e, t, n) { try { n() } catch (r) { Nc(e, t, r) } } var nl = !1;

                function rl(e, t, n) { var r = t.updateQueue; if (null !== (r = null !== r ? r.lastEffect : null)) { var i = r = r.next;
                        do { if ((i.tag & e) === e) { var a = i.destroy;
                                i.destroy = void 0, void 0 !== a && tl(t, n, a) }
                            i = i.next } while (i !== r) } }

                function il(e, t) { if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) { var n = t = t.next;
                        do { if ((n.tag & e) === e) { var r = n.create;
                                n.destroy = r() }
                            n = n.next } while (n !== t) } }

                function al(e) { var t = e.ref; if (null !== t) { var n = e.stateNode;
                        e.tag, e = n, "function" === typeof t ? t(e) : t.current = e } }

                function sl(e) { var t = e.alternate;
                    null !== t && (e.alternate = null, sl(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[fi], delete t[hi], delete t[mi], delete t[xi], delete t[gi])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null }

                function ol(e) { return 5 === e.tag || 3 === e.tag || 4 === e.tag }

                function ll(e) { e: for (;;) { for (; null === e.sibling;) { if (null === e.return || ol(e.return)) return null;
                            e = e.return } for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) { if (2 & e.flags) continue e; if (null === e.child || 4 === e.tag) continue e;
                            e.child.return = e, e = e.child } if (!(2 & e.flags)) return e.stateNode } }

                function cl(e, t, n) { var r = e.tag; if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Jr));
                    else if (4 !== r && null !== (e = e.child))
                        for (cl(e, t, n), e = e.sibling; null !== e;) cl(e, t, n), e = e.sibling }

                function ul(e, t, n) { var r = e.tag; if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== r && null !== (e = e.child))
                        for (ul(e, t, n), e = e.sibling; null !== e;) ul(e, t, n), e = e.sibling } var dl = null,
                    fl = !1;

                function hl(e, t, n) { for (n = n.child; null !== n;) pl(e, t, n), n = n.sibling }

                function pl(e, t, n) { if (at && "function" === typeof at.onCommitFiberUnmount) try { at.onCommitFiberUnmount(it, n) } catch (o) {}
                    switch (n.tag) {
                        case 5:
                            Qo || el(n, t);
                        case 6:
                            var r = dl,
                                i = fl;
                            dl = null, hl(e, t, n), fl = i, null !== (dl = r) && (fl ? (e = dl, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : dl.removeChild(n.stateNode)); break;
                        case 18:
                            null !== dl && (fl ? (e = dl, n = n.stateNode, 8 === e.nodeType ? li(e.parentNode, n) : 1 === e.nodeType && li(e, n), It(e)) : li(dl, n.stateNode)); break;
                        case 4:
                            r = dl, i = fl, dl = n.stateNode.containerInfo, fl = !0, hl(e, t, n), dl = r, fl = i; break;
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (!Qo && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) { i = r = r.next;
                                do { var a = i,
                                        s = a.destroy;
                                    a = a.tag, void 0 !== s && (0 !== (2 & a) || 0 !== (4 & a)) && tl(n, t, s), i = i.next } while (i !== r) }
                            hl(e, t, n); break;
                        case 1:
                            if (!Qo && (el(n, t), "function" === typeof(r = n.stateNode).componentWillUnmount)) try { r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount() } catch (o) { Nc(n, t, o) }
                            hl(e, t, n); break;
                        case 21:
                            hl(e, t, n); break;
                        case 22:
                            1 & n.mode ? (Qo = (r = Qo) || null !== n.memoizedState, hl(e, t, n), Qo = r) : hl(e, t, n); break;
                        default:
                            hl(e, t, n) } }

                function ml(e) { var t = e.updateQueue; if (null !== t) { e.updateQueue = null; var n = e.stateNode;
                        null === n && (n = e.stateNode = new Ko), t.forEach((function(t) { var r = Mc.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(r, r)) })) } }

                function xl(e, t) { var n = t.deletions; if (null !== n)
                        for (var r = 0; r < n.length; r++) { var i = n[r]; try { var s = e,
                                    o = t,
                                    l = o;
                                e: for (; null !== l;) { switch (l.tag) {
                                        case 5:
                                            dl = l.stateNode, fl = !1; break e;
                                        case 3:
                                        case 4:
                                            dl = l.stateNode.containerInfo, fl = !0; break e }
                                    l = l.return }
                                if (null === dl) throw Error(a(160));
                                pl(s, o, i), dl = null, fl = !1; var c = i.alternate;
                                null !== c && (c.return = null), i.return = null } catch (u) { Nc(i, t, u) } }
                    if (12854 & t.subtreeFlags)
                        for (t = t.child; null !== t;) gl(t, e), t = t.sibling }

                function gl(e, t) { var n = e.alternate,
                        r = e.flags; switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (xl(t, e), vl(e), 4 & r) { try { rl(3, e, e.return), il(3, e) } catch (x) { Nc(e, e.return, x) } try { rl(5, e, e.return) } catch (x) { Nc(e, e.return, x) } } break;
                        case 1:
                            xl(t, e), vl(e), 512 & r && null !== n && el(n, n.return); break;
                        case 5:
                            if (xl(t, e), vl(e), 512 & r && null !== n && el(n, n.return), 32 & e.flags) { var i = e.stateNode; try { fe(i, "") } catch (x) { Nc(e, e.return, x) } } if (4 & r && null != (i = e.stateNode)) { var s = e.memoizedProps,
                                    o = null !== n ? n.memoizedProps : s,
                                    l = e.type,
                                    c = e.updateQueue; if (e.updateQueue = null, null !== c) try { "input" === l && "radio" === s.type && null != s.name && Q(i, s), ye(l, o); var u = ye(l, s); for (o = 0; o < c.length; o += 2) { var d = c[o],
                                            f = c[o + 1]; "style" === d ? xe(i, f) : "dangerouslySetInnerHTML" === d ? de(i, f) : "children" === d ? fe(i, f) : y(i, d, f, u) } switch (l) {
                                        case "input":
                                            K(i, s); break;
                                        case "textarea":
                                            ae(i, s); break;
                                        case "select":
                                            var h = i._wrapperState.wasMultiple;
                                            i._wrapperState.wasMultiple = !!s.multiple; var p = s.value;
                                            null != p ? ne(i, !!s.multiple, p, !1) : h !== !!s.multiple && (null != s.defaultValue ? ne(i, !!s.multiple, s.defaultValue, !0) : ne(i, !!s.multiple, s.multiple ? [] : "", !1)) }
                                    i[hi] = s } catch (x) { Nc(e, e.return, x) } } break;
                        case 6:
                            if (xl(t, e), vl(e), 4 & r) { if (null === e.stateNode) throw Error(a(162));
                                i = e.stateNode, s = e.memoizedProps; try { i.nodeValue = s } catch (x) { Nc(e, e.return, x) } } break;
                        case 3:
                            if (xl(t, e), vl(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try { It(t.containerInfo) } catch (x) { Nc(e, e.return, x) }
                            break;
                        case 4:
                        default:
                            xl(t, e), vl(e); break;
                        case 13:
                            xl(t, e), vl(e), 8192 & (i = e.child).flags && (s = null !== i.memoizedState, i.stateNode.isHidden = s, !s || null !== i.alternate && null !== i.alternate.memoizedState || (Il = Qe())), 4 & r && ml(e); break;
                        case 22:
                            if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (Qo = (u = Qo) || d, xl(t, e), Qo = u) : xl(t, e), vl(e), 8192 & r) { if (u = null !== e.memoizedState, (e.stateNode.isHidden = u) && !d && 0 !== (1 & e.mode))
                                    for (Jo = e, d = e.child; null !== d;) { for (f = Jo = d; null !== Jo;) { switch (p = (h = Jo).child, h.tag) {
                                                case 0:
                                                case 11:
                                                case 14:
                                                case 15:
                                                    rl(4, h, h.return); break;
                                                case 1:
                                                    el(h, h.return); var m = h.stateNode; if ("function" === typeof m.componentWillUnmount) { r = h, n = h.return; try { t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount() } catch (x) { Nc(r, n, x) } } break;
                                                case 5:
                                                    el(h, h.return); break;
                                                case 22:
                                                    if (null !== h.memoizedState) { bl(f); continue } }
                                            null !== p ? (p.return = h, Jo = p) : bl(f) }
                                        d = d.sibling }
                                e: for (d = null, f = e;;) { if (5 === f.tag) { if (null === d) { d = f; try { i = f.stateNode, u ? "function" === typeof(s = i.style).setProperty ? s.setProperty("display", "none", "important") : s.display = "none" : (l = f.stateNode, o = void 0 !== (c = f.memoizedProps.style) && null !== c && c.hasOwnProperty("display") ? c.display : null, l.style.display = me("display", o)) } catch (x) { Nc(e, e.return, x) } } } else if (6 === f.tag) { if (null === d) try { f.stateNode.nodeValue = u ? "" : f.memoizedProps } catch (x) { Nc(e, e.return, x) } } else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) { f.child.return = f, f = f.child; continue } if (f === e) break e; for (; null === f.sibling;) { if (null === f.return || f.return === e) break e;
                                        d === f && (d = null), f = f.return }
                                    d === f && (d = null), f.sibling.return = f.return, f = f.sibling } } break;
                        case 19:
                            xl(t, e), vl(e), 4 & r && ml(e);
                        case 21:
                    } }

                function vl(e) { var t = e.flags; if (2 & t) { try { e: { for (var n = e.return; null !== n;) { if (ol(n)) { var r = n; break e }
                                    n = n.return } throw Error(a(160)) } switch (r.tag) {
                                case 5:
                                    var i = r.stateNode;
                                    32 & r.flags && (fe(i, ""), r.flags &= -33), ul(e, ll(e), i); break;
                                case 3:
                                case 4:
                                    var s = r.stateNode.containerInfo;
                                    cl(e, ll(e), s); break;
                                default:
                                    throw Error(a(161)) } }
                        catch (o) { Nc(e, e.return, o) }
                        e.flags &= -3 }
                    4096 & t && (e.flags &= -4097) }

                function yl(e, t, n) { Jo = e, Cl(e, t, n) }

                function Cl(e, t, n) { for (var r = 0 !== (1 & e.mode); null !== Jo;) { var i = Jo,
                            a = i.child; if (22 === i.tag && r) { var s = null !== i.memoizedState || Xo; if (!s) { var o = i.alternate,
                                    l = null !== o && null !== o.memoizedState || Qo;
                                o = Xo; var c = Qo; if (Xo = s, (Qo = l) && !c)
                                    for (Jo = i; null !== Jo;) l = (s = Jo).child, 22 === s.tag && null !== s.memoizedState ? jl(i) : null !== l ? (l.return = s, Jo = l) : jl(i); for (; null !== a;) Jo = a, Cl(a, t, n), a = a.sibling;
                                Jo = i, Xo = o, Qo = c }
                            wl(e) } else 0 !== (8772 & i.subtreeFlags) && null !== a ? (a.return = i, Jo = a) : wl(e) } }

                function wl(e) { for (; null !== Jo;) { var t = Jo; if (0 !== (8772 & t.flags)) { var n = t.alternate; try { if (0 !== (8772 & t.flags)) switch (t.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Qo || il(5, t); break;
                                    case 1:
                                        var r = t.stateNode; if (4 & t.flags && !Qo)
                                            if (null === n) r.componentDidMount();
                                            else { var i = t.elementType === t.type ? n.memoizedProps : xa(t.type, n.memoizedProps);
                                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate) }
                                        var s = t.updateQueue;
                                        null !== s && za(t, s, r); break;
                                    case 3:
                                        var o = t.updateQueue; if (null !== o) { if (n = null, null !== t.child) switch (t.child.tag) {
                                                case 5:
                                                case 1:
                                                    n = t.child.stateNode }
                                            za(t, o, n) } break;
                                    case 5:
                                        var l = t.stateNode; if (null === n && 4 & t.flags) { n = l; var c = t.memoizedProps; switch (t.type) {
                                                case "button":
                                                case "input":
                                                case "select":
                                                case "textarea":
                                                    c.autoFocus && n.focus(); break;
                                                case "img":
                                                    c.src && (n.src = c.src) } } break;
                                    case 6:
                                    case 4:
                                    case 12:
                                    case 19:
                                    case 17:
                                    case 21:
                                    case 22:
                                    case 23:
                                    case 25:
                                        break;
                                    case 13:
                                        if (null === t.memoizedState) { var u = t.alternate; if (null !== u) { var d = u.memoizedState; if (null !== d) { var f = d.dehydrated;
                                                    null !== f && It(f) } } } break;
                                    default:
                                        throw Error(a(163)) }
                                Qo || 512 & t.flags && al(t) } catch (h) { Nc(t, t.return, h) } } if (t === e) { Jo = null; break } if (null !== (n = t.sibling)) { n.return = t.return, Jo = n; break }
                        Jo = t.return } }

                function bl(e) { for (; null !== Jo;) { var t = Jo; if (t === e) { Jo = null; break } var n = t.sibling; if (null !== n) { n.return = t.return, Jo = n; break }
                        Jo = t.return } }

                function jl(e) { for (; null !== Jo;) { var t = Jo; try { switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    var n = t.return; try { il(4, t) } catch (l) { Nc(t, n, l) } break;
                                case 1:
                                    var r = t.stateNode; if ("function" === typeof r.componentDidMount) { var i = t.return; try { r.componentDidMount() } catch (l) { Nc(t, i, l) } } var a = t.return; try { al(t) } catch (l) { Nc(t, a, l) } break;
                                case 5:
                                    var s = t.return; try { al(t) } catch (l) { Nc(t, s, l) } } } catch (l) { Nc(t, t.return, l) } if (t === e) { Jo = null; break } var o = t.sibling; if (null !== o) { o.return = t.return, Jo = o; break }
                        Jo = t.return } } var kl, Nl = Math.ceil,
                    Sl = C.ReactCurrentDispatcher,
                    El = C.ReactCurrentOwner,
                    Pl = C.ReactCurrentBatchConfig,
                    Ml = 0,
                    Fl = null,
                    Ll = null,
                    Tl = 0,
                    Al = 0,
                    Vl = ki(0),
                    Rl = 0,
                    Bl = null,
                    Dl = 0,
                    zl = 0,
                    Ol = 0,
                    _l = null,
                    Hl = null,
                    Il = 0,
                    Ul = 1 / 0,
                    Zl = null,
                    Wl = !1,
                    $l = null,
                    Gl = null,
                    Yl = !1,
                    ql = null,
                    Xl = 0,
                    Ql = 0,
                    Kl = null,
                    Jl = -1,
                    ec = 0;

                function tc() { return 0 !== (6 & Ml) ? Qe() : -1 !== Jl ? Jl : Jl = Qe() }

                function nc(e) { return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Ml) && 0 !== Tl ? Tl & -Tl : null !== ma.transition ? (0 === ec && (ec = mt()), ec) : 0 !== (e = yt) ? e : e = void 0 === (e = window.event) ? 16 : Xt(e.type) }

                function rc(e, t, n, r) { if (50 < Ql) throw Ql = 0, Kl = null, Error(a(185));
                    gt(e, n, r), 0 !== (2 & Ml) && e === Fl || (e === Fl && (0 === (2 & Ml) && (zl |= n), 4 === Rl && lc(e, Tl)), ic(e, r), 1 === n && 0 === Ml && 0 === (1 & t.mode) && (Ul = Qe() + 500, Oi && Ii())) }

                function ic(e, t) { var n = e.callbackNode;! function(e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a;) { var s = 31 - st(a),
                                o = 1 << s,
                                l = i[s]; - 1 === l ? 0 !== (o & n) && 0 === (o & r) || (i[s] = ht(o, t)) : l <= t && (e.expiredLanes |= o), a &= ~o } }(e, t); var r = ft(e, e === Fl ? Tl : 0); if (0 === r) null !== n && Ye(n), e.callbackNode = null, e.callbackPriority = 0;
                    else if (t = r & -r, e.callbackPriority !== t) { if (null != n && Ye(n), 1 === t) 0 === e.tag ? function(e) { Oi = !0, Hi(e) }(cc.bind(null, e)) : Hi(cc.bind(null, e)), si((function() { 0 === (6 & Ml) && Ii() })), n = null;
                        else { switch (Ct(r)) {
                                case 1:
                                    n = Je; break;
                                case 4:
                                    n = et; break;
                                case 16:
                                default:
                                    n = tt; break;
                                case 536870912:
                                    n = rt }
                            n = Fc(n, ac.bind(null, e)) }
                        e.callbackPriority = t, e.callbackNode = n } }

                function ac(e, t) { if (Jl = -1, ec = 0, 0 !== (6 & Ml)) throw Error(a(327)); var n = e.callbackNode; if (jc() && e.callbackNode !== n) return null; var r = ft(e, e === Fl ? Tl : 0); if (0 === r) return null; if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gc(e, r);
                    else { t = r; var i = Ml;
                        Ml |= 2; var s = mc(); for (Fl === e && Tl === t || (Zl = null, Ul = Qe() + 500, hc(e, t));;) try { yc(); break } catch (l) { pc(e, l) }
                        wa(), Sl.current = s, Ml = i, null !== Ll ? t = 0 : (Fl = null, Tl = 0, t = Rl) } if (0 !== t) { if (2 === t && (0 !== (i = pt(e)) && (r = i, t = sc(e, i))), 1 === t) throw n = Bl, hc(e, 0), lc(e, r), ic(e, Qe()), n; if (6 === t) lc(e, r);
                        else { if (i = e.current.alternate, 0 === (30 & r) && ! function(e) { for (var t = e;;) { if (16384 & t.flags) { var n = t.updateQueue; if (null !== n && null !== (n = n.stores))
                                                for (var r = 0; r < n.length; r++) { var i = n[r],
                                                        a = i.getSnapshot;
                                                    i = i.value; try { if (!or(a(), i)) return !1 } catch (o) { return !1 } } } if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                                        else { if (t === e) break; for (; null === t.sibling;) { if (null === t.return || t.return === e) return !0;
                                                t = t.return }
                                            t.sibling.return = t.return, t = t.sibling } } return !0 }(i) && (2 === (t = gc(e, r)) && (0 !== (s = pt(e)) && (r = s, t = sc(e, s))), 1 === t)) throw n = Bl, hc(e, 0), lc(e, r), ic(e, Qe()), n; switch (e.finishedWork = i, e.finishedLanes = r, t) {
                                case 0:
                                case 1:
                                    throw Error(a(345));
                                case 2:
                                case 5:
                                    bc(e, Hl, Zl); break;
                                case 3:
                                    if (lc(e, r), (130023424 & r) === r && 10 < (t = Il + 500 - Qe())) { if (0 !== ft(e, 0)) break; if (((i = e.suspendedLanes) & r) !== r) { tc(), e.pingedLanes |= e.suspendedLanes & i; break }
                                        e.timeoutHandle = ri(bc.bind(null, e, Hl, Zl), t); break }
                                    bc(e, Hl, Zl); break;
                                case 4:
                                    if (lc(e, r), (4194240 & r) === r) break; for (t = e.eventTimes, i = -1; 0 < r;) { var o = 31 - st(r);
                                        s = 1 << o, (o = t[o]) > i && (i = o), r &= ~s } if (r = i, 10 < (r = (120 > (r = Qe() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Nl(r / 1960)) - r)) { e.timeoutHandle = ri(bc.bind(null, e, Hl, Zl), r); break }
                                    bc(e, Hl, Zl); break;
                                default:
                                    throw Error(a(329)) } } } return ic(e, Qe()), e.callbackNode === n ? ac.bind(null, e) : null }

                function sc(e, t) { var n = _l; return e.current.memoizedState.isDehydrated && (hc(e, t).flags |= 256), 2 !== (e = gc(e, t)) && (t = Hl, Hl = n, null !== t && oc(t)), e }

                function oc(e) { null === Hl ? Hl = e : Hl.push.apply(Hl, e) }

                function lc(e, t) { for (t &= ~Ol, t &= ~zl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) { var n = 31 - st(t),
                            r = 1 << n;
                        e[n] = -1, t &= ~r } }

                function cc(e) { if (0 !== (6 & Ml)) throw Error(a(327));
                    jc(); var t = ft(e, 0); if (0 === (1 & t)) return ic(e, Qe()), null; var n = gc(e, t); if (0 !== e.tag && 2 === n) { var r = pt(e);
                        0 !== r && (t = r, n = sc(e, r)) } if (1 === n) throw n = Bl, hc(e, 0), lc(e, t), ic(e, Qe()), n; if (6 === n) throw Error(a(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = t, bc(e, Hl, Zl), ic(e, Qe()), null }

                function uc(e, t) { var n = Ml;
                    Ml |= 1; try { return e(t) } finally { 0 === (Ml = n) && (Ul = Qe() + 500, Oi && Ii()) } }

                function dc(e) { null !== ql && 0 === ql.tag && 0 === (6 & Ml) && jc(); var t = Ml;
                    Ml |= 1; var n = Pl.transition,
                        r = yt; try { if (Pl.transition = null, yt = 1, e) return e() } finally { yt = r, Pl.transition = n, 0 === (6 & (Ml = t)) && Ii() } }

                function fc() { Al = Vl.current, Ni(Vl) }

                function hc(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (-1 !== n && (e.timeoutHandle = -1, ii(n)), null !== Ll)
                        for (n = Ll.return; null !== n;) { var r = n; switch (ta(r), r.tag) {
                                case 1:
                                    null !== (r = r.type.childContextTypes) && void 0 !== r && Ai(); break;
                                case 3:
                                    is(), Ni(Mi), Ni(Pi), us(); break;
                                case 5:
                                    ss(r); break;
                                case 4:
                                    is(); break;
                                case 13:
                                case 19:
                                    Ni(os); break;
                                case 10:
                                    ba(r.type._context); break;
                                case 22:
                                case 23:
                                    fc() }
                            n = n.return }
                    if (Fl = e, Ll = e = Vc(e.current, null), Tl = Al = t, Rl = 0, Bl = null, Ol = zl = Dl = 0, Hl = _l = null, null !== Sa) { for (t = 0; t < Sa.length; t++)
                            if (null !== (r = (n = Sa[t]).interleaved)) { n.interleaved = null; var i = r.next,
                                    a = n.pending; if (null !== a) { var s = a.next;
                                    a.next = i, r.next = s }
                                n.pending = r }
                        Sa = null } return e }

                function pc(e, t) { for (;;) { var n = Ll; try { if (wa(), ds.current = ao, gs) { for (var r = ps.memoizedState; null !== r;) { var i = r.queue;
                                    null !== i && (i.pending = null), r = r.next }
                                gs = !1 } if (hs = 0, xs = ms = ps = null, vs = !1, ys = 0, El.current = null, null === n || null === n.return) { Rl = 1, Bl = t, Ll = null; break }
                            e: { var s = e,
                                    o = n.return,
                                    l = n,
                                    c = t; if (t = Tl, l.flags |= 32768, null !== c && "object" === typeof c && "function" === typeof c.then) { var u = c,
                                        d = l,
                                        f = d.tag; if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) { var h = d.alternate;
                                        h ? (d.updateQueue = h.updateQueue, d.memoizedState = h.memoizedState, d.lanes = h.lanes) : (d.updateQueue = null, d.memoizedState = null) } var p = go(o); if (null !== p) { p.flags &= -257, vo(p, o, l, 0, t), 1 & p.mode && xo(s, u, t), c = u; var m = (t = p).updateQueue; if (null === m) { var x = new Set;
                                            x.add(c), t.updateQueue = x } else m.add(c); break e } if (0 === (1 & t)) { xo(s, u, t), xc(); break e }
                                    c = Error(a(426)) } else if (ia && 1 & l.mode) { var g = go(o); if (null !== g) { 0 === (65536 & g.flags) && (g.flags |= 256), vo(g, o, l, 0, t), pa(co(c, l)); break e } }
                                s = c = co(c, l), 4 !== Rl && (Rl = 2), null === _l ? _l = [s] : _l.push(s), s = o;do { switch (s.tag) {
                                        case 3:
                                            s.flags |= 65536, t &= -t, s.lanes |= t, Ba(s, po(0, c, t)); break e;
                                        case 1:
                                            l = c; var v = s.type,
                                                y = s.stateNode; if (0 === (128 & s.flags) && ("function" === typeof v.getDerivedStateFromError || null !== y && "function" === typeof y.componentDidCatch && (null === Gl || !Gl.has(y)))) { s.flags |= 65536, t &= -t, s.lanes |= t, Ba(s, mo(s, l, t)); break e } }
                                    s = s.return } while (null !== s) }
                            wc(n) } catch (C) { t = C, Ll === n && null !== n && (Ll = n = n.return); continue } break } }

                function mc() { var e = Sl.current; return Sl.current = ao, null === e ? ao : e }

                function xc() { 0 !== Rl && 3 !== Rl && 2 !== Rl || (Rl = 4), null === Fl || 0 === (268435455 & Dl) && 0 === (268435455 & zl) || lc(Fl, Tl) }

                function gc(e, t) { var n = Ml;
                    Ml |= 2; var r = mc(); for (Fl === e && Tl === t || (Zl = null, hc(e, t));;) try { vc(); break } catch (i) { pc(e, i) }
                    if (wa(), Ml = n, Sl.current = r, null !== Ll) throw Error(a(261)); return Fl = null, Tl = 0, Rl }

                function vc() { for (; null !== Ll;) Cc(Ll) }

                function yc() { for (; null !== Ll && !qe();) Cc(Ll) }

                function Cc(e) { var t = kl(e.alternate, e, Al);
                    e.memoizedProps = e.pendingProps, null === t ? wc(e) : Ll = t, El.current = null }

                function wc(e) { var t = e;
                    do { var n = t.alternate; if (e = t.return, 0 === (32768 & t.flags)) { if (null !== (n = Yo(n, t, Al))) return void(Ll = n) } else { if (null !== (n = qo(n, t))) return n.flags &= 32767, void(Ll = n); if (null === e) return Rl = 6, void(Ll = null);
                            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null } if (null !== (t = t.sibling)) return void(Ll = t);
                        Ll = t = e } while (null !== t);
                    0 === Rl && (Rl = 5) }

                function bc(e, t, n) { var r = yt,
                        i = Pl.transition; try { Pl.transition = null, yt = 1,
                            function(e, t, n, r) { do { jc() } while (null !== ql); if (0 !== (6 & Ml)) throw Error(a(327));
                                n = e.finishedWork; var i = e.finishedLanes; if (null === n) return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(a(177));
                                e.callbackNode = null, e.callbackPriority = 0; var s = n.lanes | n.childLanes; if (function(e, t) { var n = e.pendingLanes & ~t;
                                        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements; var r = e.eventTimes; for (e = e.expirationTimes; 0 < n;) { var i = 31 - st(n),
                                                a = 1 << i;
                                            t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a } }(e, s), e === Fl && (Ll = Fl = null, Tl = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Yl || (Yl = !0, Fc(tt, (function() { return jc(), null }))), s = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || s) { s = Pl.transition, Pl.transition = null; var o = yt;
                                    yt = 1; var l = Ml;
                                    Ml |= 4, El.current = null,
                                        function(e, t) { if (ei = Zt, hr(e = fr())) { if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
                                                else e: { var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection(); if (r && 0 !== r.rangeCount) { n = r.anchorNode; var i = r.anchorOffset,
                                                            s = r.focusNode;
                                                        r = r.focusOffset; try { n.nodeType, s.nodeType } catch (w) { n = null; break e } var o = 0,
                                                            l = -1,
                                                            c = -1,
                                                            u = 0,
                                                            d = 0,
                                                            f = e,
                                                            h = null;
                                                        t: for (;;) { for (var p; f !== n || 0 !== i && 3 !== f.nodeType || (l = o + i), f !== s || 0 !== r && 3 !== f.nodeType || (c = o + r), 3 === f.nodeType && (o += f.nodeValue.length), null !== (p = f.firstChild);) h = f, f = p; for (;;) { if (f === e) break t; if (h === n && ++u === i && (l = o), h === s && ++d === r && (c = o), null !== (p = f.nextSibling)) break;
                                                                h = (f = h).parentNode }
                                                            f = p }
                                                        n = -1 === l || -1 === c ? null : { start: l, end: c } } else n = null }
                                                n = n || { start: 0, end: 0 } } else n = null; for (ti = { focusedElem: e, selectionRange: n }, Zt = !1, Jo = t; null !== Jo;)
                                                if (e = (t = Jo).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, Jo = e;
                                                else
                                                    for (; null !== Jo;) { t = Jo; try { var m = t.alternate; if (0 !== (1024 & t.flags)) switch (t.tag) {
                                                                case 0:
                                                                case 11:
                                                                case 15:
                                                                case 5:
                                                                case 6:
                                                                case 4:
                                                                case 17:
                                                                    break;
                                                                case 1:
                                                                    if (null !== m) { var x = m.memoizedProps,
                                                                            g = m.memoizedState,
                                                                            v = t.stateNode,
                                                                            y = v.getSnapshotBeforeUpdate(t.elementType === t.type ? x : xa(t.type, x), g);
                                                                        v.__reactInternalSnapshotBeforeUpdate = y } break;
                                                                case 3:
                                                                    var C = t.stateNode.containerInfo;
                                                                    1 === C.nodeType ? C.textContent = "" : 9 === C.nodeType && C.documentElement && C.removeChild(C.documentElement); break;
                                                                default:
                                                                    throw Error(a(163)) } } catch (w) { Nc(t, t.return, w) } if (null !== (e = t.sibling)) { e.return = t.return, Jo = e; break }
                                                        Jo = t.return }
                                                m = nl, nl = !1 }(e, n), gl(n, e), pr(ti), Zt = !!ei, ti = ei = null, e.current = n, yl(n, e, i), Xe(), Ml = l, yt = o, Pl.transition = s } else e.current = n; if (Yl && (Yl = !1, ql = e, Xl = i), s = e.pendingLanes, 0 === s && (Gl = null), function(e) { if (at && "function" === typeof at.onCommitFiberRoot) try { at.onCommitFiberRoot(it, e, void 0, 128 === (128 & e.current.flags)) } catch (t) {} }(n.stateNode), ic(e, Qe()), null !== t)
                                    for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest }); if (Wl) throw Wl = !1, e = $l, $l = null, e;
                                0 !== (1 & Xl) && 0 !== e.tag && jc(), s = e.pendingLanes, 0 !== (1 & s) ? e === Kl ? Ql++ : (Ql = 0, Kl = e) : Ql = 0, Ii() }(e, t, n, r) } finally { Pl.transition = i, yt = r } return null }

                function jc() { if (null !== ql) { var e = Ct(Xl),
                            t = Pl.transition,
                            n = yt; try { if (Pl.transition = null, yt = 16 > e ? 16 : e, null === ql) var r = !1;
                            else { if (e = ql, ql = null, Xl = 0, 0 !== (6 & Ml)) throw Error(a(331)); var i = Ml; for (Ml |= 4, Jo = e.current; null !== Jo;) { var s = Jo,
                                        o = s.child; if (0 !== (16 & Jo.flags)) { var l = s.deletions; if (null !== l) { for (var c = 0; c < l.length; c++) { var u = l[c]; for (Jo = u; null !== Jo;) { var d = Jo; switch (d.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                            rl(8, d, s) } var f = d.child; if (null !== f) f.return = d, Jo = f;
                                                    else
                                                        for (; null !== Jo;) { var h = (d = Jo).sibling,
                                                                p = d.return; if (sl(d), d === u) { Jo = null; break } if (null !== h) { h.return = p, Jo = h; break }
                                                            Jo = p } } } var m = s.alternate; if (null !== m) { var x = m.child; if (null !== x) { m.child = null;
                                                    do { var g = x.sibling;
                                                        x.sibling = null, x = g } while (null !== x) } }
                                            Jo = s } } if (0 !== (2064 & s.subtreeFlags) && null !== o) o.return = s, Jo = o;
                                    else e: for (; null !== Jo;) { if (0 !== (2048 & (s = Jo).flags)) switch (s.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                rl(9, s, s.return) }
                                        var v = s.sibling; if (null !== v) { v.return = s.return, Jo = v; break e }
                                        Jo = s.return } } var y = e.current; for (Jo = y; null !== Jo;) { var C = (o = Jo).child; if (0 !== (2064 & o.subtreeFlags) && null !== C) C.return = o, Jo = C;
                                    else e: for (o = y; null !== Jo;) { if (0 !== (2048 & (l = Jo).flags)) try { switch (l.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    il(9, l) } } catch (b) { Nc(l, l.return, b) }
                                        if (l === o) { Jo = null; break e } var w = l.sibling; if (null !== w) { w.return = l.return, Jo = w; break e }
                                        Jo = l.return } } if (Ml = i, Ii(), at && "function" === typeof at.onPostCommitFiberRoot) try { at.onPostCommitFiberRoot(it, e) } catch (b) {}
                                r = !0 } return r } finally { yt = n, Pl.transition = t } } return !1 }

                function kc(e, t, n) { e = Va(e, t = po(0, t = co(n, t), 1), 1), t = tc(), null !== e && (gt(e, 1, t), ic(e, t)) }

                function Nc(e, t, n) { if (3 === e.tag) kc(e, e, n);
                    else
                        for (; null !== t;) { if (3 === t.tag) { kc(t, e, n); break } if (1 === t.tag) { var r = t.stateNode; if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Gl || !Gl.has(r))) { t = Va(t, e = mo(t, e = co(n, e), 1), 1), e = tc(), null !== t && (gt(t, 1, e), ic(t, e)); break } }
                            t = t.return } }

                function Sc(e, t, n) { var r = e.pingCache;
                    null !== r && r.delete(t), t = tc(), e.pingedLanes |= e.suspendedLanes & n, Fl === e && (Tl & n) === n && (4 === Rl || 3 === Rl && (130023424 & Tl) === Tl && 500 > Qe() - Il ? hc(e, 0) : Ol |= n), ic(e, t) }

                function Ec(e, t) { 0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ut, 0 === (130023424 & (ut <<= 1)) && (ut = 4194304))); var n = tc();
                    null !== (e = Ma(e, t)) && (gt(e, t, n), ic(e, n)) }

                function Pc(e) { var t = e.memoizedState,
                        n = 0;
                    null !== t && (n = t.retryLane), Ec(e, n) }

                function Mc(e, t) { var n = 0; switch (e.tag) {
                        case 13:
                            var r = e.stateNode,
                                i = e.memoizedState;
                            null !== i && (n = i.retryLane); break;
                        case 19:
                            r = e.stateNode; break;
                        default:
                            throw Error(a(314)) }
                    null !== r && r.delete(t), Ec(e, n) }

                function Fc(e, t) { return Ge(e, t) }

                function Lc(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null }

                function Tc(e, t, n, r) { return new Lc(e, t, n, r) }

                function Ac(e) { return !(!(e = e.prototype) || !e.isReactComponent) }

                function Vc(e, t) { var n = e.alternate; return null === n ? ((n = Tc(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n }

                function Rc(e, t, n, r, i, s) { var o = 2; if (r = e, "function" === typeof e) Ac(e) && (o = 1);
                    else if ("string" === typeof e) o = 5;
                    else e: switch (e) {
                        case j:
                            return Bc(n.children, i, s, t);
                        case k:
                            o = 8, i |= 8; break;
                        case N:
                            return (e = Tc(12, n, t, 2 | i)).elementType = N, e.lanes = s, e;
                        case M:
                            return (e = Tc(13, n, t, i)).elementType = M, e.lanes = s, e;
                        case F:
                            return (e = Tc(19, n, t, i)).elementType = F, e.lanes = s, e;
                        case A:
                            return Dc(n, i, s, t);
                        default:
                            if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                                case S:
                                    o = 10; break e;
                                case E:
                                    o = 9; break e;
                                case P:
                                    o = 11; break e;
                                case L:
                                    o = 14; break e;
                                case T:
                                    o = 16, r = null; break e }
                            throw Error(a(130, null == e ? e : typeof e, "")) }
                    return (t = Tc(o, n, t, i)).elementType = e, t.type = r, t.lanes = s, t }

                function Bc(e, t, n, r) { return (e = Tc(7, e, r, t)).lanes = n, e }

                function Dc(e, t, n, r) { return (e = Tc(22, e, r, t)).elementType = A, e.lanes = n, e.stateNode = { isHidden: !1 }, e }

                function zc(e, t, n) { return (e = Tc(6, e, null, t)).lanes = n, e }

                function Oc(e, t, n) { return (t = Tc(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t }

                function _c(e, t, n, r, i) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = xt(0), this.expirationTimes = xt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xt(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null }

                function Hc(e, t, n, r, i, a, s, o, l) { return e = new _c(e, t, n, o, l), 1 === t ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = Tc(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, La(a), e }

                function Ic(e) { if (!e) return Ei;
                    e: { if (Ie(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(a(170)); var t = e;do { switch (t.tag) {
                                case 3:
                                    t = t.stateNode.context; break e;
                                case 1:
                                    if (Ti(t.type)) { t = t.stateNode.__reactInternalMemoizedMergedChildContext; break e } }
                            t = t.return } while (null !== t); throw Error(a(171)) }
                    if (1 === e.tag) { var n = e.type; if (Ti(n)) return Ri(e, n, t) } return t }

                function Uc(e, t, n, r, i, a, s, o, l) { return (e = Hc(n, r, !0, e, 0, a, 0, o, l)).context = Ic(null), n = e.current, (a = Aa(r = tc(), i = nc(n))).callback = void 0 !== t && null !== t ? t : null, Va(n, a, i), e.current.lanes = i, gt(e, i, r), ic(e, r), e }

                function Zc(e, t, n, r) { var i = t.current,
                        a = tc(),
                        s = nc(i); return n = Ic(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Aa(a, s)).payload = { element: e }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Va(i, t, s)) && (rc(e, i, s, a), Ra(e, i, s)), s }

                function Wc(e) { return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null }

                function $c(e, t) { if (null !== (e = e.memoizedState) && null !== e.dehydrated) { var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t } }

                function Gc(e, t) { $c(e, t), (e = e.alternate) && $c(e, t) }
                kl = function(e, t, n) { if (null !== e)
                        if (e.memoizedProps !== t.pendingProps || Mi.current) Co = !0;
                        else { if (0 === (e.lanes & n) && 0 === (128 & t.flags)) return Co = !1,
                                function(e, t, n) { switch (t.tag) {
                                        case 3:
                                            Fo(t), ha(); break;
                                        case 5:
                                            as(t); break;
                                        case 1:
                                            Ti(t.type) && Bi(t); break;
                                        case 4:
                                            rs(t, t.stateNode.containerInfo); break;
                                        case 10:
                                            var r = t.type._context,
                                                i = t.memoizedProps.value;
                                            Si(ga, r._currentValue), r._currentValue = i; break;
                                        case 13:
                                            if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Si(os, 1 & os.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? zo(e, t, n) : (Si(os, 1 & os.current), null !== (e = Wo(e, t, n)) ? e.sibling : null);
                                            Si(os, 1 & os.current); break;
                                        case 19:
                                            if (r = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) { if (r) return Uo(e, t, n);
                                                t.flags |= 128 } if (null !== (i = t.memoizedState) && (i.rendering = null, i.tail = null, i.lastEffect = null), Si(os, os.current), r) break; return null;
                                        case 22:
                                        case 23:
                                            return t.lanes = 0, No(e, t, n) } return Wo(e, t, n) }(e, t, n);
                            Co = 0 !== (131072 & e.flags) }
                    else Co = !1, ia && 0 !== (1048576 & t.flags) && Ji(t, $i, t.index); switch (t.lanes = 0, t.tag) {
                        case 2:
                            var r = t.type;
                            Zo(e, t), e = t.pendingProps; var i = Li(t, Pi.current);
                            ka(t, n), i = js(null, t, r, e, i, n); var s = ks(); return t.flags |= 1, "object" === typeof i && null !== i && "function" === typeof i.render && void 0 === i.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ti(r) ? (s = !0, Bi(t)) : s = !1, t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, La(t), i.updater = Ha, t.stateNode = i, i._reactInternals = t, Wa(t, r, e, n), t = Mo(null, t, r, !0, s, n)) : (t.tag = 0, ia && s && ea(t), wo(null, t, i, n), t = t.child), t;
                        case 16:
                            r = t.elementType;
                            e: { switch (Zo(e, t), e = t.pendingProps, r = (i = r._init)(r._payload), t.type = r, i = t.tag = function(e) { if ("function" === typeof e) return Ac(e) ? 1 : 0; if (void 0 !== e && null !== e) { if ((e = e.$$typeof) === P) return 11; if (e === L) return 14 } return 2 }(r), e = xa(r, e), i) {
                                    case 0:
                                        t = Eo(null, t, r, e, n); break e;
                                    case 1:
                                        t = Po(null, t, r, e, n); break e;
                                    case 11:
                                        t = bo(null, t, r, e, n); break e;
                                    case 14:
                                        t = jo(null, t, r, xa(r.type, e), n); break e } throw Error(a(306, r, "")) }
                            return t;
                        case 0:
                            return r = t.type, i = t.pendingProps, Eo(e, t, r, i = t.elementType === r ? i : xa(r, i), n);
                        case 1:
                            return r = t.type, i = t.pendingProps, Po(e, t, r, i = t.elementType === r ? i : xa(r, i), n);
                        case 3:
                            e: { if (Fo(t), null === e) throw Error(a(387));r = t.pendingProps, i = (s = t.memoizedState).element, Ta(e, t), Da(t, r, null, n); var o = t.memoizedState; if (r = o.element, s.isDehydrated) { if (s = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, 256 & t.flags) { t = Lo(e, t, r, n, i = co(Error(a(423)), t)); break e } if (r !== i) { t = Lo(e, t, r, n, i = co(Error(a(424)), t)); break e } for (ra = ci(t.stateNode.containerInfo.firstChild), na = t, ia = !0, aa = null, n = Qa(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling } else { if (ha(), r === i) { t = Wo(e, t, n); break e }
                                    wo(e, t, r, n) }
                                t = t.child }
                            return t;
                        case 5:
                            return as(t), null === e && ca(t), r = t.type, i = t.pendingProps, s = null !== e ? e.memoizedProps : null, o = i.children, ni(r, i) ? o = null : null !== s && ni(r, s) && (t.flags |= 32), So(e, t), wo(e, t, o, n), t.child;
                        case 6:
                            return null === e && ca(t), null;
                        case 13:
                            return zo(e, t, n);
                        case 4:
                            return rs(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Xa(t, null, r, n) : wo(e, t, r, n), t.child;
                        case 11:
                            return r = t.type, i = t.pendingProps, bo(e, t, r, i = t.elementType === r ? i : xa(r, i), n);
                        case 7:
                            return wo(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return wo(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: { if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, Si(ga, r._currentValue), r._currentValue = o, null !== s)
                                    if (or(s.value, o)) { if (s.children === i.children && !Mi.current) { t = Wo(e, t, n); break e } } else
                                        for (null !== (s = t.child) && (s.return = t); null !== s;) { var l = s.dependencies; if (null !== l) { o = s.child; for (var c = l.firstContext; null !== c;) { if (c.context === r) { if (1 === s.tag) {
                                                            (c = Aa(-1, n & -n)).tag = 2; var u = s.updateQueue; if (null !== u) { var d = (u = u.shared).pending;
                                                                null === d ? c.next = c : (c.next = d.next, d.next = c), u.pending = c } }
                                                        s.lanes |= n, null !== (c = s.alternate) && (c.lanes |= n), ja(s.return, n, t), l.lanes |= n; break }
                                                    c = c.next } } else if (10 === s.tag) o = s.type === t.type ? null : s.child;
                                            else if (18 === s.tag) { if (null === (o = s.return)) throw Error(a(341));
                                                o.lanes |= n, null !== (l = o.alternate) && (l.lanes |= n), ja(o, n, t), o = s.sibling } else o = s.child; if (null !== o) o.return = s;
                                            else
                                                for (o = s; null !== o;) { if (o === t) { o = null; break } if (null !== (s = o.sibling)) { s.return = o.return, o = s; break }
                                                    o = o.return }
                                            s = o }
                                    wo(e, t, i.children, n), t = t.child }
                            return t;
                        case 9:
                            return i = t.type, r = t.pendingProps.children, ka(t, n), r = r(i = Na(i)), t.flags |= 1, wo(e, t, r, n), t.child;
                        case 14:
                            return i = xa(r = t.type, t.pendingProps), jo(e, t, r, i = xa(r.type, i), n);
                        case 15:
                            return ko(e, t, t.type, t.pendingProps, n);
                        case 17:
                            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : xa(r, i), Zo(e, t), t.tag = 1, Ti(r) ? (e = !0, Bi(t)) : e = !1, ka(t, n), Ua(t, r, i), Wa(t, r, i, n), Mo(null, t, r, !0, e, n);
                        case 19:
                            return Uo(e, t, n);
                        case 22:
                            return No(e, t, n) } throw Error(a(156, t.tag)) }; var Yc = "function" === typeof reportError ? reportError : function(e) { console.error(e) };

                function qc(e) { this._internalRoot = e }

                function Xc(e) { this._internalRoot = e }

                function Qc(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType) }

                function Kc(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)) }

                function Jc() {}

                function eu(e, t, n, r, i) { var a = n._reactRootContainer; if (a) { var s = a; if ("function" === typeof i) { var o = i;
                            i = function() { var e = Wc(s);
                                o.call(e) } }
                        Zc(t, s, e, i) } else s = function(e, t, n, r, i) { if (i) { if ("function" === typeof r) { var a = r;
                                r = function() { var e = Wc(s);
                                    a.call(e) } } var s = Uc(t, r, e, 0, null, !1, 0, "", Jc); return e._reactRootContainer = s, e[pi] = s.current, Ir(8 === e.nodeType ? e.parentNode : e), dc(), s } for (; i = e.lastChild;) e.removeChild(i); if ("function" === typeof r) { var o = r;
                            r = function() { var e = Wc(l);
                                o.call(e) } } var l = Hc(e, 0, !1, null, 0, !1, 0, "", Jc); return e._reactRootContainer = l, e[pi] = l.current, Ir(8 === e.nodeType ? e.parentNode : e), dc((function() { Zc(t, l, n, r) })), l }(n, t, e, i, r); return Wc(s) }
                Xc.prototype.render = qc.prototype.render = function(e) { var t = this._internalRoot; if (null === t) throw Error(a(409));
                    Zc(e, t, null, null) }, Xc.prototype.unmount = qc.prototype.unmount = function() { var e = this._internalRoot; if (null !== e) { this._internalRoot = null; var t = e.containerInfo;
                        dc((function() { Zc(null, e, null, null) })), t[pi] = null } }, Xc.prototype.unstable_scheduleHydration = function(e) { if (e) { var t = kt();
                        e = { blockedOn: null, target: e, priority: t }; for (var n = 0; n < At.length && 0 !== t && t < At[n].priority; n++);
                        At.splice(n, 0, e), 0 === n && Dt(e) } }, wt = function(e) { switch (e.tag) {
                        case 3:
                            var t = e.stateNode; if (t.current.memoizedState.isDehydrated) { var n = dt(t.pendingLanes);
                                0 !== n && (vt(t, 1 | n), ic(t, Qe()), 0 === (6 & Ml) && (Ul = Qe() + 500, Ii())) } break;
                        case 13:
                            dc((function() { var t = Ma(e, 1); if (null !== t) { var n = tc();
                                    rc(t, e, 1, n) } })), Gc(e, 1) } }, bt = function(e) { if (13 === e.tag) { var t = Ma(e, 134217728); if (null !== t) rc(t, e, 134217728, tc());
                        Gc(e, 134217728) } }, jt = function(e) { if (13 === e.tag) { var t = nc(e),
                            n = Ma(e, t); if (null !== n) rc(n, e, t, tc());
                        Gc(e, t) } }, kt = function() { return yt }, Nt = function(e, t) { var n = yt; try { return yt = e, t() } finally { yt = n } }, be = function(e, t, n) { switch (t) {
                        case "input":
                            if (K(e, n), t = n.name, "radio" === n.type && null != t) { for (n = e; n.parentNode;) n = n.parentNode; for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) { var r = n[t]; if (r !== e && r.form === e.form) { var i = wi(r); if (!i) throw Error(a(90));
                                        G(r), K(r, i) } } } break;
                        case "textarea":
                            ae(e, n); break;
                        case "select":
                            null != (t = n.value) && ne(e, !!n.multiple, t, !1) } }, Pe = uc, Me = dc; var tu = { usingClientEntryPoint: !1, Events: [yi, Ci, wi, Se, Ee, uc] },
                    nu = { findFiberByHostInstance: vi, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
                    ru = { bundleType: nu.bundleType, version: nu.version, rendererPackageName: nu.rendererPackageName, rendererConfig: nu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: C.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) { return null === (e = We(e)) ? null : e.stateNode }, findFiberByHostInstance: nu.findFiberByHostInstance || function() { return null }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" }; if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) { var iu = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (!iu.isDisabled && iu.supportsFiber) try { it = iu.inject(ru), at = iu } catch (ue) {} }
                t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tu, t.createPortal = function(e, t) { var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null; if (!Qc(t)) throw Error(a(200)); return function(e, t, n) { var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return { $$typeof: b, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n } }(e, t, null, n) }, t.createRoot = function(e, t) { if (!Qc(e)) throw Error(a(299)); var n = !1,
                        r = "",
                        i = Yc; return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (i = t.onRecoverableError)), t = Hc(e, 1, !1, null, 0, n, 0, r, i), e[pi] = t.current, Ir(8 === e.nodeType ? e.parentNode : e), new qc(t) }, t.findDOMNode = function(e) { if (null == e) return null; if (1 === e.nodeType) return e; var t = e._reactInternals; if (void 0 === t) { if ("function" === typeof e.render) throw Error(a(188)); throw e = Object.keys(e).join(","), Error(a(268, e)) } return e = null === (e = We(t)) ? null : e.stateNode }, t.flushSync = function(e) { return dc(e) }, t.hydrate = function(e, t, n) { if (!Kc(t)) throw Error(a(200)); return eu(null, e, t, !0, n) }, t.hydrateRoot = function(e, t, n) { if (!Qc(e)) throw Error(a(405)); var r = null != n && n.hydratedSources || null,
                        i = !1,
                        s = "",
                        o = Yc; if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (i = !0), void 0 !== n.identifierPrefix && (s = n.identifierPrefix), void 0 !== n.onRecoverableError && (o = n.onRecoverableError)), t = Uc(t, null, e, 1, null != n ? n : null, i, 0, s, o), e[pi] = t.current, Ir(e), r)
                        for (e = 0; e < r.length; e++) i = (i = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i); return new Xc(t) }, t.render = function(e, t, n) { if (!Kc(t)) throw Error(a(200)); return eu(null, e, t, !1, n) }, t.unmountComponentAtNode = function(e) { if (!Kc(e)) throw Error(a(40)); return !!e._reactRootContainer && (dc((function() { eu(null, null, e, !1, (function() { e._reactRootContainer = null, e[pi] = null })) })), !0) }, t.unstable_batchedUpdates = uc, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) { if (!Kc(n)) throw Error(a(200)); if (null == e || void 0 === e._reactInternals) throw Error(a(38)); return eu(e, t, n, !1, r) }, t.version = "18.2.0-next-9e3b772b8-20220608" }, 1250: (e, t, n) => { "use strict"; var r = n(4164);
                t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot }, 4164: (e, t, n) => { "use strict";! function e() { if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e) } catch (t) { console.error(t) } }(), e.exports = n(4463) }, 4652: (e, t, n) => { "use strict"; var r = function() {
                        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
                    i = u(n(2791)),
                    a = u(n(2007)),
                    s = n(522),
                    o = n(4532),
                    l = u(n(2808)),
                    c = u(n(7699));

                function u(e) { return e && e.__esModule ? e : { default: e } } var d = { BLOCK: "block", FLEX: "flex", INLINE: "inline", INLINE_BLOCK: "inline-block", CONTENTS: "contents" },
                    f = (0, s.forbidExtraProps)({ children: a.default.node.isRequired, onOutsideClick: a.default.func.isRequired, disabled: a.default.bool, useCapture: a.default.bool, display: a.default.oneOf((0, l.default)(d)) }),
                    h = { disabled: !1, useCapture: !0, display: d.BLOCK },
                    p = function(e) {
                        function t() { var e;! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i]; var a = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" !== typeof t && "function" !== typeof t ? e : t }(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(r))); return a.onMouseDown = a.onMouseDown.bind(a), a.onMouseUp = a.onMouseUp.bind(a), a.setChildNodeRef = a.setChildNodeRef.bind(a), a } return function(e, t) { if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, e), r(t, [{ key: "componentDidMount", value: function() { var e = this.props,
                                    t = e.disabled,
                                    n = e.useCapture;
                                t || this.addMouseDownEventListener(n) } }, { key: "componentDidUpdate", value: function(e) { var t = e.disabled,
                                    n = this.props,
                                    r = n.disabled,
                                    i = n.useCapture;
                                t !== r && (r ? this.removeEventListeners() : this.addMouseDownEventListener(i)) } }, { key: "componentWillUnmount", value: function() { this.removeEventListeners() } }, { key: "onMouseDown", value: function(e) { var t = this.props.useCapture;
                                this.childNode && (0, c.default)(this.childNode, e.target) || (this.removeMouseUp && (this.removeMouseUp(), this.removeMouseUp = null), this.removeMouseUp = (0, o.addEventListener)(document, "mouseup", this.onMouseUp, { capture: t })) } }, { key: "onMouseUp", value: function(e) { var t = this.props.onOutsideClick,
                                    n = this.childNode && (0, c.default)(this.childNode, e.target);
                                this.removeMouseUp && (this.removeMouseUp(), this.removeMouseUp = null), n || t(e) } }, { key: "setChildNodeRef", value: function(e) { this.childNode = e } }, { key: "addMouseDownEventListener", value: function(e) { this.removeMouseDown = (0, o.addEventListener)(document, "mousedown", this.onMouseDown, { capture: e }) } }, { key: "removeEventListeners", value: function() { this.removeMouseDown && this.removeMouseDown(), this.removeMouseUp && this.removeMouseUp() } }, { key: "render", value: function() { var e = this.props,
                                    t = e.children,
                                    n = e.display; return i.default.createElement("div", { ref: this.setChildNodeRef, style: n !== d.BLOCK && (0, l.default)(d).includes(n) ? { display: n } : void 0 }, t) } }]), t }(i.default.Component);
                t.default = p, p.propTypes = f, p.defaultProps = h }, 6211: (e, t, n) => { e.exports = n(4652) }, 9534: e => { "use strict";

                function t() { return null }

                function n() { return t }
                t.isRequired = t, e.exports = { and: n, between: n, booleanSome: n, childrenHavePropXorChildren: n, childrenOf: n, childrenOfType: n, childrenSequenceOf: n, componentWithName: n, disallowedIf: n, elementType: n, empty: n, explicitNull: n, forbidExtraProps: Object, integer: n, keysOf: n, mutuallyExclusiveProps: n, mutuallyExclusiveTrueProps: n, nChildren: n, nonNegativeInteger: t, nonNegativeNumber: n, numericString: n, object: n, or: n, predicate: n, range: n, ref: n, requiredBy: n, restrictedProp: n, sequenceOf: n, shape: n, stringEndsWith: n, stringStartsWith: n, uniqueArray: n, uniqueArrayOf: n, valuesOf: n, withShape: n } }, 522: (e, t, n) => { e.exports = n(9534) }, 6374: (e, t, n) => { "use strict"; var r = n(2791),
                    i = Symbol.for("react.element"),
                    a = Symbol.for("react.fragment"),
                    s = Object.prototype.hasOwnProperty,
                    o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    l = { key: !0, ref: !0, __self: !0, __source: !0 };

                function c(e, t, n) { var r, a = {},
                        c = null,
                        u = null; for (r in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (u = t.ref), t) s.call(t, r) && !l.hasOwnProperty(r) && (a[r] = t[r]); if (e && e.defaultProps)
                        for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]); return { $$typeof: i, type: e, key: c, ref: u, props: a, _owner: o.current } }
                t.Fragment = a, t.jsx = c, t.jsxs = c }, 9117: (e, t) => { "use strict"; var n = Symbol.for("react.element"),
                    r = Symbol.for("react.portal"),
                    i = Symbol.for("react.fragment"),
                    a = Symbol.for("react.strict_mode"),
                    s = Symbol.for("react.profiler"),
                    o = Symbol.for("react.provider"),
                    l = Symbol.for("react.context"),
                    c = Symbol.for("react.forward_ref"),
                    u = Symbol.for("react.suspense"),
                    d = Symbol.for("react.memo"),
                    f = Symbol.for("react.lazy"),
                    h = Symbol.iterator; var p = { isMounted: function() { return !1 }, enqueueForceUpdate: function() {}, enqueueReplaceState: function() {}, enqueueSetState: function() {} },
                    m = Object.assign,
                    x = {};

                function g(e, t, n) { this.props = e, this.context = t, this.refs = x, this.updater = n || p }

                function v() {}

                function y(e, t, n) { this.props = e, this.context = t, this.refs = x, this.updater = n || p }
                g.prototype.isReactComponent = {}, g.prototype.setState = function(e, t) { if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, t, "setState") }, g.prototype.forceUpdate = function(e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate") }, v.prototype = g.prototype; var C = y.prototype = new v;
                C.constructor = y, m(C, g.prototype), C.isPureReactComponent = !0; var w = Array.isArray,
                    b = Object.prototype.hasOwnProperty,
                    j = { current: null },
                    k = { key: !0, ref: !0, __self: !0, __source: !0 };

                function N(e, t, r) { var i, a = {},
                        s = null,
                        o = null; if (null != t)
                        for (i in void 0 !== t.ref && (o = t.ref), void 0 !== t.key && (s = "" + t.key), t) b.call(t, i) && !k.hasOwnProperty(i) && (a[i] = t[i]); var l = arguments.length - 2; if (1 === l) a.children = r;
                    else if (1 < l) { for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
                        a.children = c } if (e && e.defaultProps)
                        for (i in l = e.defaultProps) void 0 === a[i] && (a[i] = l[i]); return { $$typeof: n, type: e, key: s, ref: o, props: a, _owner: j.current } }

                function S(e) { return "object" === typeof e && null !== e && e.$$typeof === n } var E = /\/+/g;

                function P(e, t) { return "object" === typeof e && null !== e && null != e.key ? function(e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, (function(e) { return t[e] })) }("" + e.key) : t.toString(36) }

                function M(e, t, i, a, s) { var o = typeof e; "undefined" !== o && "boolean" !== o || (e = null); var l = !1; if (null === e) l = !0;
                    else switch (o) {
                        case "string":
                        case "number":
                            l = !0; break;
                        case "object":
                            switch (e.$$typeof) {
                                case n:
                                case r:
                                    l = !0 } }
                    if (l) return s = s(l = e), e = "" === a ? "." + P(l, 0) : a, w(s) ? (i = "", null != e && (i = e.replace(E, "$&/") + "/"), M(s, t, i, "", (function(e) { return e }))) : null != s && (S(s) && (s = function(e, t) { return { $$typeof: n, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner } }(s, i + (!s.key || l && l.key === s.key ? "" : ("" + s.key).replace(E, "$&/") + "/") + e)), t.push(s)), 1; if (l = 0, a = "" === a ? "." : a + ":", w(e))
                        for (var c = 0; c < e.length; c++) { var u = a + P(o = e[c], c);
                            l += M(o, t, i, u, s) } else if (u = function(e) { return null === e || "object" !== typeof e ? null : "function" === typeof(e = h && e[h] || e["@@iterator"]) ? e : null }(e), "function" === typeof u)
                            for (e = u.call(e), c = 0; !(o = e.next()).done;) l += M(o = o.value, t, i, u = a + P(o, c++), s);
                        else if ("object" === o) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return l }

                function F(e, t, n) { if (null == e) return e; var r = [],
                        i = 0; return M(e, r, "", "", (function(e) { return t.call(n, e, i++) })), r }

                function L(e) { if (-1 === e._status) { var t = e._result;
                        (t = t()).then((function(t) { 0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t) }), (function(t) { 0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t) })), -1 === e._status && (e._status = 0, e._result = t) } if (1 === e._status) return e._result.default; throw e._result } var T = { current: null },
                    A = { transition: null },
                    V = { ReactCurrentDispatcher: T, ReactCurrentBatchConfig: A, ReactCurrentOwner: j };
                t.Children = { map: F, forEach: function(e, t, n) { F(e, (function() { t.apply(this, arguments) }), n) }, count: function(e) { var t = 0; return F(e, (function() { t++ })), t }, toArray: function(e) { return F(e, (function(e) { return e })) || [] }, only: function(e) { if (!S(e)) throw Error("React.Children.only expected to receive a single React element child."); return e } }, t.Component = g, t.Fragment = i, t.Profiler = s, t.PureComponent = y, t.StrictMode = a, t.Suspense = u, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V, t.cloneElement = function(e, t, r) { if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var i = m({}, e.props),
                        a = e.key,
                        s = e.ref,
                        o = e._owner; if (null != t) { if (void 0 !== t.ref && (s = t.ref, o = j.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps; for (c in t) b.call(t, c) && !k.hasOwnProperty(c) && (i[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c]) } var c = arguments.length - 2; if (1 === c) i.children = r;
                    else if (1 < c) { l = Array(c); for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
                        i.children = l } return { $$typeof: n, type: e.type, key: a, ref: s, props: i, _owner: o } }, t.createContext = function(e) { return (e = { $$typeof: l, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = { $$typeof: o, _context: e }, e.Consumer = e }, t.createElement = N, t.createFactory = function(e) { var t = N.bind(null, e); return t.type = e, t }, t.createRef = function() { return { current: null } }, t.forwardRef = function(e) { return { $$typeof: c, render: e } }, t.isValidElement = S, t.lazy = function(e) { return { $$typeof: f, _payload: { _status: -1, _result: e }, _init: L } }, t.memo = function(e, t) { return { $$typeof: d, type: e, compare: void 0 === t ? null : t } }, t.startTransition = function(e) { var t = A.transition;
                    A.transition = {}; try { e() } finally { A.transition = t } }, t.unstable_act = function() { throw Error("act(...) is not supported in production builds of React.") }, t.useCallback = function(e, t) { return T.current.useCallback(e, t) }, t.useContext = function(e) { return T.current.useContext(e) }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) { return T.current.useDeferredValue(e) }, t.useEffect = function(e, t) { return T.current.useEffect(e, t) }, t.useId = function() { return T.current.useId() }, t.useImperativeHandle = function(e, t, n) { return T.current.useImperativeHandle(e, t, n) }, t.useInsertionEffect = function(e, t) { return T.current.useInsertionEffect(e, t) }, t.useLayoutEffect = function(e, t) { return T.current.useLayoutEffect(e, t) }, t.useMemo = function(e, t) { return T.current.useMemo(e, t) }, t.useReducer = function(e, t, n) { return T.current.useReducer(e, t, n) }, t.useRef = function(e) { return T.current.useRef(e) }, t.useState = function(e) { return T.current.useState(e) }, t.useSyncExternalStore = function(e, t, n) { return T.current.useSyncExternalStore(e, t, n) }, t.useTransition = function() { return T.current.useTransition() }, t.version = "18.2.0" }, 2791: (e, t, n) => { "use strict";
                e.exports = n(9117) }, 184: (e, t, n) => { "use strict";
                e.exports = n(6374) }, 6813: (e, t) => { "use strict";

                function n(e, t) { var n = e.length;
                    e.push(t);
                    e: for (; 0 < n;) { var r = n - 1 >>> 1,
                            i = e[r]; if (!(0 < a(i, t))) break e;
                        e[r] = t, e[n] = i, n = r } }

                function r(e) { return 0 === e.length ? null : e[0] }

                function i(e) { if (0 === e.length) return null; var t = e[0],
                        n = e.pop(); if (n !== t) { e[0] = n;
                        e: for (var r = 0, i = e.length, s = i >>> 1; r < s;) { var o = 2 * (r + 1) - 1,
                                l = e[o],
                                c = o + 1,
                                u = e[c]; if (0 > a(l, n)) c < i && 0 > a(u, l) ? (e[r] = u, e[c] = n, r = c) : (e[r] = l, e[o] = n, r = o);
                            else { if (!(c < i && 0 > a(u, n))) break e;
                                e[r] = u, e[c] = n, r = c } } } return t }

                function a(e, t) { var n = e.sortIndex - t.sortIndex; return 0 !== n ? n : e.id - t.id } if ("object" === typeof performance && "function" === typeof performance.now) { var s = performance;
                    t.unstable_now = function() { return s.now() } } else { var o = Date,
                        l = o.now();
                    t.unstable_now = function() { return o.now() - l } } var c = [],
                    u = [],
                    d = 1,
                    f = null,
                    h = 3,
                    p = !1,
                    m = !1,
                    x = !1,
                    g = "function" === typeof setTimeout ? setTimeout : null,
                    v = "function" === typeof clearTimeout ? clearTimeout : null,
                    y = "undefined" !== typeof setImmediate ? setImmediate : null;

                function C(e) { for (var t = r(u); null !== t;) { if (null === t.callback) i(u);
                        else { if (!(t.startTime <= e)) break;
                            i(u), t.sortIndex = t.expirationTime, n(c, t) }
                        t = r(u) } }

                function w(e) { if (x = !1, C(e), !m)
                        if (null !== r(c)) m = !0, A(b);
                        else { var t = r(u);
                            null !== t && V(w, t.startTime - e) } }

                function b(e, n) { m = !1, x && (x = !1, v(S), S = -1), p = !0; var a = h; try { for (C(n), f = r(c); null !== f && (!(f.expirationTime > n) || e && !M());) { var s = f.callback; if ("function" === typeof s) { f.callback = null, h = f.priorityLevel; var o = s(f.expirationTime <= n);
                                n = t.unstable_now(), "function" === typeof o ? f.callback = o : f === r(c) && i(c), C(n) } else i(c);
                            f = r(c) } if (null !== f) var l = !0;
                        else { var d = r(u);
                            null !== d && V(w, d.startTime - n), l = !1 } return l } finally { f = null, h = a, p = !1 } } "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling); var j, k = !1,
                    N = null,
                    S = -1,
                    E = 5,
                    P = -1;

                function M() { return !(t.unstable_now() - P < E) }

                function F() { if (null !== N) { var e = t.unstable_now();
                        P = e; var n = !0; try { n = N(!0, e) } finally { n ? j() : (k = !1, N = null) } } else k = !1 } if ("function" === typeof y) j = function() { y(F) };
                else if ("undefined" !== typeof MessageChannel) { var L = new MessageChannel,
                        T = L.port2;
                    L.port1.onmessage = F, j = function() { T.postMessage(null) } } else j = function() { g(F, 0) };

                function A(e) { N = e, k || (k = !0, j()) }

                function V(e, n) { S = g((function() { e(t.unstable_now()) }), n) }
                t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) { e.callback = null }, t.unstable_continueExecution = function() { m || p || (m = !0, A(b)) }, t.unstable_forceFrameRate = function(e) { 0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : E = 0 < e ? Math.floor(1e3 / e) : 5 }, t.unstable_getCurrentPriorityLevel = function() { return h }, t.unstable_getFirstCallbackNode = function() { return r(c) }, t.unstable_next = function(e) { switch (h) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3; break;
                        default:
                            t = h } var n = h;
                    h = t; try { return e() } finally { h = n } }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) { switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3 } var n = h;
                    h = e; try { return t() } finally { h = n } }, t.unstable_scheduleCallback = function(e, i, a) { var s = t.unstable_now(); switch ("object" === typeof a && null !== a ? a = "number" === typeof(a = a.delay) && 0 < a ? s + a : s : a = s, e) {
                        case 1:
                            var o = -1; break;
                        case 2:
                            o = 250; break;
                        case 5:
                            o = 1073741823; break;
                        case 4:
                            o = 1e4; break;
                        default:
                            o = 5e3 } return e = { id: d++, callback: i, priorityLevel: e, startTime: a, expirationTime: o = a + o, sortIndex: -1 }, a > s ? (e.sortIndex = a, n(u, e), null === r(c) && e === r(u) && (x ? (v(S), S = -1) : x = !0, V(w, a - s))) : (e.sortIndex = o, n(c, e), m || p || (m = !0, A(b))), e }, t.unstable_shouldYield = M, t.unstable_wrapCallback = function(e) { var t = h; return function() { var n = h;
                        h = t; try { return e.apply(this, arguments) } finally { h = n } } } }, 5296: (e, t, n) => { "use strict";
                e.exports = n(6813) }, 5986: (e, t, n) => { "use strict"; var r = n(2506),
                    i = n(2651),
                    a = n(4510)(),
                    s = n(3347),
                    o = r("%TypeError%"),
                    l = r("%Math.floor%");
                e.exports = function(e, t) { if ("function" !== typeof e) throw new o("`fn` is not a function"); if ("number" !== typeof t || t < 0 || t > 4294967295 || l(t) !== t) throw new o("`length` must be a positive 32-bit integer"); var n = arguments.length > 2 && !!arguments[2],
                        r = !0,
                        c = !0; if ("length" in e && s) { var u = s(e, "length");
                        u && !u.configurable && (r = !1), u && !u.writable && (c = !1) } return (r || c || !n) && (a ? i(e, "length", t, !0, !0) : i(e, "length", t)), e } }, 6186: e => { "use strict"; var t = function() {
                    function e(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), !(t instanceof Node)) throw "Can't initialize VanillaTilt because " + t + " is not a Node.";
                        this.width = null, this.height = null, this.clientWidth = null, this.clientHeight = null, this.left = null, this.top = null, this.gammazero = null, this.betazero = null, this.lastgammazero = null, this.lastbetazero = null, this.transitionTimeout = null, this.updateCall = null, this.event = null, this.updateBind = this.update.bind(this), this.resetBind = this.reset.bind(this), this.element = t, this.settings = this.extendSettings(n), this.reverse = this.settings.reverse ? -1 : 1, this.resetToStart = e.isSettingTrue(this.settings["reset-to-start"]), this.glare = e.isSettingTrue(this.settings.glare), this.glarePrerender = e.isSettingTrue(this.settings["glare-prerender"]), this.fullPageListening = e.isSettingTrue(this.settings["full-page-listening"]), this.gyroscope = e.isSettingTrue(this.settings.gyroscope), this.gyroscopeSamples = this.settings.gyroscopeSamples, this.elementListener = this.getElementListener(), this.glare && this.prepareGlare(), this.fullPageListening && this.updateClientSize(), this.addEventListeners(), this.reset(), !1 === this.resetToStart && (this.settings.startX = 0, this.settings.startY = 0) } return e.isSettingTrue = function(e) { return "" === e || !0 === e || 1 === e }, e.prototype.getElementListener = function() { if (this.fullPageListening) return window.document; if ("string" === typeof this.settings["mouse-event-element"]) { var e = document.querySelector(this.settings["mouse-event-element"]); if (e) return e } return this.settings["mouse-event-element"] instanceof Node ? this.settings["mouse-event-element"] : this.element }, e.prototype.addEventListeners = function() { this.onMouseEnterBind = this.onMouseEnter.bind(this), this.onMouseMoveBind = this.onMouseMove.bind(this), this.onMouseLeaveBind = this.onMouseLeave.bind(this), this.onWindowResizeBind = this.onWindowResize.bind(this), this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this), this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind), this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind), this.elementListener.addEventListener("mousemove", this.onMouseMoveBind), (this.glare || this.fullPageListening) && window.addEventListener("resize", this.onWindowResizeBind), this.gyroscope && window.addEventListener("deviceorientation", this.onDeviceOrientationBind) }, e.prototype.removeEventListeners = function() { this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind), this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind), this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind), this.gyroscope && window.removeEventListener("deviceorientation", this.onDeviceOrientationBind), (this.glare || this.fullPageListening) && window.removeEventListener("resize", this.onWindowResizeBind) }, e.prototype.destroy = function() { clearTimeout(this.transitionTimeout), null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.element.style.willChange = "", this.element.style.transition = "", this.element.style.transform = "", this.resetGlare(), this.removeEventListeners(), this.element.vanillaTilt = null, delete this.element.vanillaTilt, this.element = null }, e.prototype.onDeviceOrientation = function(e) { if (null !== e.gamma && null !== e.beta) { this.updateElementPosition(), this.gyroscopeSamples > 0 && (this.lastgammazero = this.gammazero, this.lastbetazero = this.betazero, null === this.gammazero ? (this.gammazero = e.gamma, this.betazero = e.beta) : (this.gammazero = (e.gamma + this.lastgammazero) / 2, this.betazero = (e.beta + this.lastbetazero) / 2), this.gyroscopeSamples -= 1); var t = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX,
                                n = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY,
                                r = t / this.width,
                                i = n / this.height,
                                a = (e.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero)) / r,
                                s = (e.beta - (this.settings.gyroscopeMinAngleY + this.betazero)) / i;
                            null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.event = { clientX: a + this.left, clientY: s + this.top }, this.updateCall = requestAnimationFrame(this.updateBind) } }, e.prototype.onMouseEnter = function() { this.updateElementPosition(), this.element.style.willChange = "transform", this.setTransition() }, e.prototype.onMouseMove = function(e) { null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.event = e, this.updateCall = requestAnimationFrame(this.updateBind) }, e.prototype.onMouseLeave = function() { this.setTransition(), this.settings.reset && requestAnimationFrame(this.resetBind) }, e.prototype.reset = function() { this.onMouseEnter(), this.fullPageListening ? this.event = { clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth, clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight } : this.event = { clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width, clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height }; var e = this.settings.scale;
                        this.settings.scale = 1, this.update(), this.settings.scale = e, this.resetGlare() }, e.prototype.resetGlare = function() { this.glare && (this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)", this.glareElement.style.opacity = "0") }, e.prototype.getValues = function() { var e = void 0,
                            t = void 0; return this.fullPageListening ? (e = this.event.clientX / this.clientWidth, t = this.event.clientY / this.clientHeight) : (e = (this.event.clientX - this.left) / this.width, t = (this.event.clientY - this.top) / this.height), e = Math.min(Math.max(e, 0), 1), t = Math.min(Math.max(t, 0), 1), { tiltX: (this.reverse * (this.settings.max - e * this.settings.max * 2)).toFixed(2), tiltY: (this.reverse * (t * this.settings.max * 2 - this.settings.max)).toFixed(2), percentageX: 100 * e, percentageY: 100 * t, angle: Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI) } }, e.prototype.updateElementPosition = function() { var e = this.element.getBoundingClientRect();
                        this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.left = e.left, this.top = e.top }, e.prototype.update = function() { var e = this.getValues();
                        this.element.style.transform = "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.axis ? 0 : e.tiltY) + "deg) rotateY(" + ("y" === this.settings.axis ? 0 : e.tiltX) + "deg) scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")", this.glare && (this.glareElement.style.transform = "rotate(" + e.angle + "deg) translate(-50%, -50%)", this.glareElement.style.opacity = "" + e.percentageY * this.settings["max-glare"] / 100), this.element.dispatchEvent(new CustomEvent("tiltChange", { detail: e })), this.updateCall = null }, e.prototype.prepareGlare = function() { if (!this.glarePrerender) { var e = document.createElement("div");
                            e.classList.add("js-tilt-glare"); var t = document.createElement("div");
                            t.classList.add("js-tilt-glare-inner"), e.appendChild(t), this.element.appendChild(e) }
                        this.glareElementWrapper = this.element.querySelector(".js-tilt-glare"), this.glareElement = this.element.querySelector(".js-tilt-glare-inner"), this.glarePrerender || (Object.assign(this.glareElementWrapper.style, { position: "absolute", top: "0", left: "0", width: "100%", height: "100%", overflow: "hidden", "pointer-events": "none", "border-radius": "inherit" }), Object.assign(this.glareElement.style, { position: "absolute", top: "50%", left: "50%", "pointer-events": "none", "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)", transform: "rotate(180deg) translate(-50%, -50%)", "transform-origin": "0% 0%", opacity: "0" }), this.updateGlareSize()) }, e.prototype.updateGlareSize = function() { if (this.glare) { var e = 2 * (this.element.offsetWidth > this.element.offsetHeight ? this.element.offsetWidth : this.element.offsetHeight);
                            Object.assign(this.glareElement.style, { width: e + "px", height: e + "px" }) } }, e.prototype.updateClientSize = function() { this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight }, e.prototype.onWindowResize = function() { this.updateGlareSize(), this.updateClientSize() }, e.prototype.setTransition = function() { var e = this;
                        clearTimeout(this.transitionTimeout), this.element.style.transition = this.settings.speed + "ms " + this.settings.easing, this.glare && (this.glareElement.style.transition = "opacity " + this.settings.speed + "ms " + this.settings.easing), this.transitionTimeout = setTimeout((function() { e.element.style.transition = "", e.glare && (e.glareElement.style.transition = "") }), this.settings.speed) }, e.prototype.extendSettings = function(e) { var t = { reverse: !1, max: 15, startX: 0, startY: 0, perspective: 1e3, easing: "cubic-bezier(.03,.98,.52,.99)", scale: 1, speed: 300, transition: !0, axis: null, glare: !1, "max-glare": 1, "glare-prerender": !1, "full-page-listening": !1, "mouse-event-element": null, reset: !0, "reset-to-start": !0, gyroscope: !0, gyroscopeMinAngleX: -45, gyroscopeMaxAngleX: 45, gyroscopeMinAngleY: -45, gyroscopeMaxAngleY: 45, gyroscopeSamples: 10 },
                            n = {}; for (var r in t)
                            if (r in e) n[r] = e[r];
                            else if (this.element.hasAttribute("data-tilt-" + r)) { var i = this.element.getAttribute("data-tilt-" + r); try { n[r] = JSON.parse(i) } catch (a) { n[r] = i } } else n[r] = t[r]; return n }, e.init = function(t, n) { t instanceof Node && (t = [t]), t instanceof NodeList && (t = [].slice.call(t)), t instanceof Array && t.forEach((function(t) { "vanillaTilt" in t || (t.vanillaTilt = new e(t, n)) })) }, e }(); "undefined" !== typeof document && (window.VanillaTilt = t, t.init(document.querySelectorAll("[data-tilt]"))), e.exports = t }, 7724: (e, t, n) => { "use strict";
                e.exports = n(642) }, 642: (e, t, n) => { "use strict"; var r = n(2506)("%TypeError%");
                e.exports = function(e, t) { if (null == e) throw new r(t || "Cannot call method on " + e); return e } } },
        t = {};

    function n(r) { var i = t[r]; if (void 0 !== i) return i.exports; var a = t[r] = { exports: {} }; return e[r](a, a.exports, n), a.exports }
    n.m = e, n.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return n.d(t, { a: t }), t }, (() => { var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        n.t = function(r, i) { if (1 & i && (r = this(r)), 8 & i) return r; if ("object" === typeof r && r) { if (4 & i && r.__esModule) return r; if (16 & i && "function" === typeof r.then) return r } var a = Object.create(null);
            n.r(a); var s = {};
            e = e || [null, t({}), t([]), t(t)]; for (var o = 2 & i && r;
                "object" == typeof o && !~e.indexOf(o); o = t(o)) Object.getOwnPropertyNames(o).forEach((e => s[e] = () => r[e])); return s.default = () => r, n.d(a, s), a } })(), n.d = (e, t) => { for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }) }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((t, r) => (n.f[r](e, t), t)), [])), n.u = e => "static/js/" + e + ".ebfc83cf.chunk.js", n.miniCssF = e => {}, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => { var e = {},
            t = "ziegers24:";
        n.l = (r, i, a, s) => { if (e[r]) e[r].push(i);
            else { var o, l; if (void 0 !== a)
                    for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) { var d = c[u]; if (d.getAttribute("src") == r || d.getAttribute("data-webpack") == t + a) { o = d; break } }
                o || (l = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, n.nc && o.setAttribute("nonce", n.nc), o.setAttribute("data-webpack", t + a), o.src = r), e[r] = [i]; var f = (t, n) => { o.onerror = o.onload = null, clearTimeout(h); var i = e[r]; if (delete e[r], o.parentNode && o.parentNode.removeChild(o), i && i.forEach((e => e(n))), t) return t(n) },
                    h = setTimeout(f.bind(null, void 0, { type: "timeout", target: o }), 12e4);
                o.onerror = f.bind(null, o.onerror), o.onload = f.bind(null, o.onload), l && document.head.appendChild(o) } } })(), n.r = e => { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.p = "/umesh2407/VEYG_WEBSITE/", (() => { var e = { 179: 0 };
        n.f.j = (t, r) => { var i = n.o(e, t) ? e[t] : void 0; if (0 !== i)
                if (i) r.push(i[2]);
                else { var a = new Promise(((n, r) => i = e[t] = [n, r]));
                    r.push(i[2] = a); var s = n.p + n.u(t),
                        o = new Error;
                    n.l(s, (r => { if (n.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) { var a = r && ("load" === r.type ? "missing" : r.type),
                                s = r && r.target && r.target.src;
                            o.message = "Loading chunk " + t + " failed.\n(" + a + ": " + s + ")", o.name = "ChunkLoadError", o.type = a, o.request = s, i[1](o) } }), "chunk-" + t, t) } }; var t = (t, r) => { var i, a, s = r[0],
                    o = r[1],
                    l = r[2],
                    c = 0; if (s.some((t => 0 !== e[t]))) { for (i in o) n.o(o, i) && (n.m[i] = o[i]); if (l) l(n) } for (t && t(r); c < s.length; c++) a = s[c], n.o(e, a) && e[a] && e[a][0](), e[a] = 0 },
            r = self.webpackChunkziegers24 = self.webpackChunkziegers24 || [];
        r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r)) })(), (() => { "use strict"; var e, t = n(2791),
            r = n.t(t, 2),
            i = n(1250);

        function a() { return a = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, a.apply(this, arguments) }! function(e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE" }(e || (e = {})); const s = "popstate";

        function o(e, t) { if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t) }

        function l(e, t) { if (!e) { "undefined" !== typeof console && console.warn(t); try { throw new Error(t) } catch (n) {} } }

        function c(e, t) { return { usr: e.state, key: e.key, idx: t } }

        function u(e, t, n, r) { return void 0 === n && (n = null), a({ pathname: "string" === typeof e ? e : e.pathname, search: "", hash: "" }, "string" === typeof t ? f(t) : t, { state: n, key: t && t.key || r || Math.random().toString(36).substr(2, 8) }) }

        function d(e) { let { pathname: t = "/", search: n = "", hash: r = "" } = e; return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r), t }

        function f(e) { let t = {}; if (e) { let n = e.indexOf("#");
                n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n)); let r = e.indexOf("?");
                r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e) } return t }

        function h(t, n, r, i) { void 0 === i && (i = {}); let { window: l = document.defaultView, v5Compat: f = !1 } = i, h = l.history, p = e.Pop, m = null, x = g();

            function g() { return (h.state || { idx: null }).idx }

            function v() { p = e.Pop; let t = g(),
                    n = null == t ? null : t - x;
                x = t, m && m({ action: p, location: C.location, delta: n }) }

            function y(e) { let t = "null" !== l.location.origin ? l.location.origin : l.location.href,
                    n = "string" === typeof e ? e : d(e); return o(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t) }
            null == x && (x = 0, h.replaceState(a({}, h.state, { idx: x }), "")); let C = {get action() { return p }, get location() { return t(l, h) }, listen(e) { if (m) throw new Error("A history only accepts one active listener"); return l.addEventListener(s, v), m = e, () => { l.removeEventListener(s, v), m = null } }, createHref: e => n(l, e), createURL: y, encodeLocation(e) { let t = y(e); return { pathname: t.pathname, search: t.search, hash: t.hash } }, push: function(t, n) { p = e.Push; let i = u(C.location, t, n);
                    r && r(i, t), x = g() + 1; let a = c(i, x),
                        s = C.createHref(i); try { h.pushState(a, "", s) } catch (o) { if (o instanceof DOMException && "DataCloneError" === o.name) throw o;
                        l.location.assign(s) }
                    f && m && m({ action: p, location: C.location, delta: 1 }) }, replace: function(t, n) { p = e.Replace; let i = u(C.location, t, n);
                    r && r(i, t), x = g(); let a = c(i, x),
                        s = C.createHref(i);
                    h.replaceState(a, "", s), f && m && m({ action: p, location: C.location, delta: 0 }) }, go: e => h.go(e) }; return C } var p;! function(e) { e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error" }(p || (p = {}));
        new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

        function m(e, t, n) { void 0 === n && (n = "/"); let r = M(("string" === typeof t ? f(t) : t).pathname || "/", n); if (null == r) return null; let i = x(e);! function(e) { e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) { let n = e.length === t.length && e.slice(0, -1).every(((e, n) => e === t[n])); return n ? e[e.length - 1] - t[t.length - 1] : 0 }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex))))) }(i); let a = null; for (let s = 0; null == a && s < i.length; ++s) a = S(i[s], P(r)); return a }

        function x(e, t, n, r) { void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = ""); let i = (e, i, a) => { let s = { relativePath: void 0 === a ? e.path || "" : a, caseSensitive: !0 === e.caseSensitive, childrenIndex: i, route: e };
                s.relativePath.startsWith("/") && (o(s.relativePath.startsWith(r), 'Absolute route path "' + s.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), s.relativePath = s.relativePath.slice(r.length)); let l = V([r, s.relativePath]),
                    c = n.concat(s);
                e.children && e.children.length > 0 && (o(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + l + '".'), x(e.children, t, c, l)), (null != e.path || e.index) && t.push({ path: l, score: N(l, e.index), routesMeta: c }) }; return e.forEach(((e, t) => { var n; if ("" !== e.path && null != (n = e.path) && n.includes("?"))
                    for (let r of g(e.path)) i(e, t, r);
                else i(e, t) })), t }

        function g(e) { let t = e.split("/"); if (0 === t.length) return []; let [n, ...r] = t, i = n.endsWith("?"), a = n.replace(/\?$/, ""); if (0 === r.length) return i ? [a, ""] : [a]; let s = g(r.join("/")),
                o = []; return o.push(...s.map((e => "" === e ? a : [a, e].join("/")))), i && o.push(...s), o.map((t => e.startsWith("/") && "" === t ? "/" : t)) } const v = /^:\w+$/,
            y = 3,
            C = 2,
            w = 1,
            b = 10,
            j = -2,
            k = e => "*" === e;

        function N(e, t) { let n = e.split("/"),
                r = n.length; return n.some(k) && (r += j), t && (r += C), n.filter((e => !k(e))).reduce(((e, t) => e + (v.test(t) ? y : "" === t ? w : b)), r) }

        function S(e, t) { let { routesMeta: n } = e, r = {}, i = "/", a = []; for (let s = 0; s < n.length; ++s) { let e = n[s],
                    o = s === n.length - 1,
                    l = "/" === i ? t : t.slice(i.length) || "/",
                    c = E({ path: e.relativePath, caseSensitive: e.caseSensitive, end: o }, l); if (!c) return null;
                Object.assign(r, c.params); let u = e.route;
                a.push({ params: r, pathname: V([i, c.pathname]), pathnameBase: R(V([i, c.pathnameBase])), route: u }), "/" !== c.pathnameBase && (i = V([i, c.pathnameBase])) } return a }

        function E(e, t) { "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 }); let [n, r] = function(e, t, n) { void 0 === t && (t = !1);
                void 0 === n && (n = !0);
                l("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".'); let r = [],
                    i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:(\w+)(\?)?/g, ((e, t, n) => (r.push({ paramName: t, isOptional: null != n }), n ? "/?([^\\/]+)?" : "/([^\\/]+)")));
                e.endsWith("*") ? (r.push({ paramName: "*" }), i += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : "" !== e && "/" !== e && (i += "(?:(?=\\/|$))"); let a = new RegExp(i, t ? void 0 : "i"); return [a, r] }(e.path, e.caseSensitive, e.end), i = t.match(n); if (!i) return null; let a = i[0],
                s = a.replace(/(.)\/+$/, "$1"),
                o = i.slice(1),
                c = r.reduce(((e, t, n) => { let { paramName: r, isOptional: i } = t; if ("*" === r) { let e = o[n] || "";
                        s = a.slice(0, a.length - e.length).replace(/(.)\/+$/, "$1") } const c = o[n]; return e[r] = i && !c ? void 0 : function(e, t) { try { return decodeURIComponent(e) } catch (n) { return l(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."), e } }(c || "", r), e }), {}); return { params: c, pathname: a, pathnameBase: s, pattern: e } }

        function P(e) { try { return decodeURI(e) } catch (t) { return l(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e } }

        function M(e, t) { if ("/" === t) return e; if (!e.toLowerCase().startsWith(t.toLowerCase())) return null; let n = t.endsWith("/") ? t.length - 1 : t.length,
                r = e.charAt(n); return r && "/" !== r ? null : e.slice(n) || "/" }

        function F(e, t, n, r) { return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.' }

        function L(e) { return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0)) }

        function T(e, t) { let n = L(e); return t ? n.map(((t, n) => n === e.length - 1 ? t.pathname : t.pathnameBase)) : n.map((e => e.pathnameBase)) }

        function A(e, t, n, r) { let i;
            void 0 === r && (r = !1), "string" === typeof e ? i = f(e) : (i = a({}, e), o(!i.pathname || !i.pathname.includes("?"), F("?", "pathname", "search", i)), o(!i.pathname || !i.pathname.includes("#"), F("#", "pathname", "hash", i)), o(!i.search || !i.search.includes("#"), F("#", "search", "hash", i))); let s, l = "" === e || "" === i.pathname,
                c = l ? "/" : i.pathname; if (null == c) s = n;
            else { let e = t.length - 1; if (!r && c.startsWith("..")) { let t = c.split("/"); for (;
                        ".." === t[0];) t.shift(), e -= 1;
                    i.pathname = t.join("/") }
                s = e >= 0 ? t[e] : "/" } let u = function(e, t) { void 0 === t && (t = "/"); let { pathname: n, search: r = "", hash: i = "" } = "string" === typeof e ? f(e) : e, a = n ? n.startsWith("/") ? n : function(e, t) { let n = t.replace(/\/+$/, "").split("/"); return e.split("/").forEach((e => { ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e) })), n.length > 1 ? n.join("/") : "/" }(n, t) : t; return { pathname: a, search: B(r), hash: D(i) } }(i, s),
                d = c && "/" !== c && c.endsWith("/"),
                h = (l || "." === c) && n.endsWith("/"); return u.pathname.endsWith("/") || !d && !h || (u.pathname += "/"), u } const V = e => e.join("/").replace(/\/\/+/g, "/"),
            R = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
            B = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
            D = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";
        Error;

        function z(e) { return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "boolean" === typeof e.internal && "data" in e } const O = ["post", "put", "patch", "delete"],
            _ = (new Set(O), ["get", ...O]);
        new Set(_), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
        Symbol("deferred");

        function H() { return H = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, H.apply(this, arguments) } const I = t.createContext(null); const U = t.createContext(null); const Z = t.createContext(null); const W = t.createContext(null); const $ = t.createContext({ outlet: null, matches: [], isDataRoute: !1 }); const G = t.createContext(null);

        function Y() { return null != t.useContext(W) }

        function q() { return Y() || o(!1), t.useContext(W).location }

        function X(e) { t.useContext(Z).static || t.useLayoutEffect(e) }

        function Q() { let { isDataRoute: e } = t.useContext($); return e ? function() { let { router: e } = se(ie.UseNavigateStable), n = le(ae.UseNavigateStable), r = t.useRef(!1);
                X((() => { r.current = !0 })); let i = t.useCallback((function(t, i) { void 0 === i && (i = {}), r.current && ("number" === typeof t ? e.navigate(t) : e.navigate(t, H({ fromRouteId: n }, i))) }), [e, n]); return i }() : function() { Y() || o(!1); let e = t.useContext(I),
                    { basename: n, future: r, navigator: i } = t.useContext(Z),
                    { matches: a } = t.useContext($),
                    { pathname: s } = q(),
                    l = JSON.stringify(T(a, r.v7_relativeSplatPath)),
                    c = t.useRef(!1); return X((() => { c.current = !0 })), t.useCallback((function(t, r) { if (void 0 === r && (r = {}), !c.current) return; if ("number" === typeof t) return void i.go(t); let a = A(t, JSON.parse(l), s, "path" === r.relative);
                    null == e && "/" !== n && (a.pathname = "/" === a.pathname ? n : V([n, a.pathname])), (r.replace ? i.replace : i.push)(a, r.state, r) }), [n, i, l, s, e]) }() }

        function K(n, r, i, a) { Y() || o(!1); let { navigator: s } = t.useContext(Z), { matches: l } = t.useContext($), c = l[l.length - 1], u = c ? c.params : {}, d = (c && c.pathname, c ? c.pathnameBase : "/");
            c && c.route; let h, p = q(); if (r) { var x; let e = "string" === typeof r ? f(r) : r; "/" === d || (null == (x = e.pathname) ? void 0 : x.startsWith(d)) || o(!1), h = e } else h = p; let g = h.pathname || "/",
                v = m(n, { pathname: "/" === d ? g : g.slice(d.length) || "/" }); let y = re(v && v.map((e => Object.assign({}, e, { params: Object.assign({}, u, e.params), pathname: V([d, s.encodeLocation ? s.encodeLocation(e.pathname).pathname : e.pathname]), pathnameBase: "/" === e.pathnameBase ? d : V([d, s.encodeLocation ? s.encodeLocation(e.pathnameBase).pathname : e.pathnameBase]) }))), l, i, a); return r && y ? t.createElement(W.Provider, { value: { location: H({ pathname: "/", search: "", hash: "", state: null, key: "default" }, h), navigationType: e.Pop } }, y) : y }

        function J() { let e = function() { var e; let n = t.useContext(G),
                        r = oe(ae.UseRouteError),
                        i = le(ae.UseRouteError); if (void 0 !== n) return n; return null == (e = r.errors) ? void 0 : e[i] }(),
                n = z(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
                r = e instanceof Error ? e.stack : null,
                i = "rgba(200,200,200, 0.5)",
                a = { padding: "0.5rem", backgroundColor: i }; return t.createElement(t.Fragment, null, t.createElement("h2", null, "Unexpected Application Error!"), t.createElement("h3", { style: { fontStyle: "italic" } }, n), r ? t.createElement("pre", { style: a }, r) : null, null) } const ee = t.createElement(J, null);
        class te extends t.Component { constructor(e) { super(e), this.state = { location: e.location, revalidation: e.revalidation, error: e.error } }
            static getDerivedStateFromError(e) { return { error: e } }
            static getDerivedStateFromProps(e, t) { return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? { error: e.error, location: e.location, revalidation: e.revalidation } : { error: void 0 !== e.error ? e.error : t.error, location: t.location, revalidation: e.revalidation || t.revalidation } }
            componentDidCatch(e, t) { console.error("React Router caught the following error during render", e, t) }
            render() { return void 0 !== this.state.error ? t.createElement($.Provider, { value: this.props.routeContext }, t.createElement(G.Provider, { value: this.state.error, children: this.props.component })) : this.props.children } }

        function ne(e) { let { routeContext: n, match: r, children: i } = e, a = t.useContext(I); return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), t.createElement($.Provider, { value: n }, i) }

        function re(e, n, r, i) { var a; if (void 0 === n && (n = []), void 0 === r && (r = null), void 0 === i && (i = null), null == e) { var s; if (null == (s = r) || !s.errors) return null;
                e = r.matches } let l = e,
                c = null == (a = r) ? void 0 : a.errors; if (null != c) { let e = l.findIndex((e => e.route.id && (null == c ? void 0 : c[e.route.id])));
                e >= 0 || o(!1), l = l.slice(0, Math.min(l.length, e + 1)) } let u = !1,
                d = -1; if (r && i && i.v7_partialHydration)
                for (let t = 0; t < l.length; t++) { let e = l[t]; if ((e.route.HydrateFallback || e.route.hydrateFallbackElement) && (d = t), e.route.id) { let { loaderData: t, errors: n } = r, i = e.route.loader && void 0 === t[e.route.id] && (!n || void 0 === n[e.route.id]); if (e.route.lazy || i) { u = !0, l = d >= 0 ? l.slice(0, d + 1) : [l[0]]; break } } }
            return l.reduceRight(((e, i, a) => { let s, o = !1,
                    f = null,
                    h = null; var p;
                r && (s = c && i.route.id ? c[i.route.id] : void 0, f = i.route.errorElement || ee, u && (d < 0 && 0 === a ? (p = "route-fallback", !1 || ce[p] || (ce[p] = !0), o = !0, h = null) : d === a && (o = !0, h = i.route.hydrateFallbackElement || null))); let m = n.concat(l.slice(0, a + 1)),
                    x = () => { let n; return n = s ? f : o ? h : i.route.Component ? t.createElement(i.route.Component, null) : i.route.element ? i.route.element : e, t.createElement(ne, { match: i, routeContext: { outlet: e, matches: m, isDataRoute: null != r }, children: n }) }; return r && (i.route.ErrorBoundary || i.route.errorElement || 0 === a) ? t.createElement(te, { location: r.location, revalidation: r.revalidation, component: f, error: s, children: x(), routeContext: { outlet: null, matches: m, isDataRoute: !0 } }) : x() }), null) } var ie = function(e) { return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e }(ie || {}),
            ae = function(e) { return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e }(ae || {});

        function se(e) { let n = t.useContext(I); return n || o(!1), n }

        function oe(e) { let n = t.useContext(U); return n || o(!1), n }

        function le(e) { let n = function(e) { let n = t.useContext($); return n || o(!1), n }(),
                r = n.matches[n.matches.length - 1]; return r.route.id || o(!1), r.route.id } const ce = {};
        r.startTransition;

        function ue(e) { o(!1) }

        function de(n) { let { basename: r = "/", children: i = null, location: a, navigationType: s = e.Pop, navigator: l, static: c = !1, future: u } = n;
            Y() && o(!1); let d = r.replace(/^\/*/, "/"),
                h = t.useMemo((() => ({ basename: d, navigator: l, static: c, future: H({ v7_relativeSplatPath: !1 }, u) })), [d, u, l, c]); "string" === typeof a && (a = f(a)); let { pathname: p = "/", search: m = "", hash: x = "", state: g = null, key: v = "default" } = a, y = t.useMemo((() => { let e = M(p, d); return null == e ? null : { location: { pathname: e, search: m, hash: x, state: g, key: v }, navigationType: s } }), [d, p, m, x, g, v, s]); return null == y ? null : t.createElement(Z.Provider, { value: h }, t.createElement(W.Provider, { children: i, value: y })) }

        function fe(e) { let { children: t, location: n } = e; return K(he(t), n) }
        new Promise((() => {}));
        t.Component;

        function he(e, n) { void 0 === n && (n = []); let r = []; return t.Children.forEach(e, ((e, i) => { if (!t.isValidElement(e)) return; let a = [...n, i]; if (e.type === t.Fragment) return void r.push.apply(r, he(e.props.children, a));
                e.type !== ue && o(!1), e.props.index && e.props.children && o(!1); let s = { id: e.props.id || a.join("-"), caseSensitive: e.props.caseSensitive, element: e.props.element, Component: e.props.Component, index: e.props.index, path: e.props.path, loader: e.props.loader, action: e.props.action, errorElement: e.props.errorElement, ErrorBoundary: e.props.ErrorBoundary, hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement, shouldRevalidate: e.props.shouldRevalidate, handle: e.props.handle, lazy: e.props.lazy };
                e.props.children && (s.children = he(e.props.children, a)), r.push(s) })), r } const pe = "undefined" !== typeof document,
            me = pe ? t.useLayoutEffect : t.useEffect;

        function xe() { const e = (0, t.useRef)(!1); return me((() => (e.current = !0, () => { e.current = !1 })), []), e } const ge = e => e;
        class ve { constructor() { this.order = [], this.scheduled = new Set }
            add(e) { if (!this.scheduled.has(e)) return this.scheduled.add(e), this.order.push(e), !0 }
            remove(e) { const t = this.order.indexOf(e); - 1 !== t && (this.order.splice(t, 1), this.scheduled.delete(e)) }
            clear() { this.order.length = 0, this.scheduled.clear() } } const ye = ["prepare", "read", "update", "preRender", "render", "postRender"]; const { schedule: Ce, cancel: we, state: be, steps: je } = function(e, t) { let n = !1,
                r = !0; const i = { delta: 0, timestamp: 0, isProcessing: !1 },
                a = ye.reduce(((e, t) => (e[t] = function(e) { let t = new ve,
                        n = new ve,
                        r = 0,
                        i = !1,
                        a = !1; const s = new WeakSet,
                        o = { schedule: function(e) { const a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && i,
                                    o = a ? t : n; return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && s.add(e), o.add(e) && a && i && (r = t.order.length), e }, cancel: e => { n.remove(e), s.delete(e) }, process: l => { if (i) a = !0;
                                else { if (i = !0, [t, n] = [n, t], n.clear(), r = t.order.length, r)
                                        for (let n = 0; n < r; n++) { const r = t.order[n];
                                            r(l), s.has(r) && (o.schedule(r), e()) }
                                    i = !1, a && (a = !1, o.process(l)) } } }; return o }((() => n = !0)), e)), {}),
                s = e => a[e].process(i),
                o = () => { const a = performance.now();
                    n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(a - i.timestamp, 40), 1), i.timestamp = a, i.isProcessing = !0, ye.forEach(s), i.isProcessing = !1, n && t && (r = !1, e(o)) },
                l = ye.reduce(((t, s) => { const l = a[s]; return t[s] = function(t) { let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]; return n || (n = !0, r = !0, i.isProcessing || e(o)), l.schedule(t, a, s) }, t }), {}); return { schedule: l, cancel: e => ye.forEach((t => a[t].cancel(e))), state: i, steps: a } }("undefined" !== typeof requestAnimationFrame ? requestAnimationFrame : ge, !0); const ke = (0, t.createContext)(null);

        function Ne(e) { const n = (0, t.useRef)(null); return null === n.current && (n.current = e()), n.current }
        class Se extends t.Component { getSnapshotBeforeUpdate(e) { const t = this.props.childRef.current; if (t && e.isPresent && !this.props.isPresent) { const e = this.props.sizeRef.current;
                    e.height = t.offsetHeight || 0, e.width = t.offsetWidth || 0, e.top = t.offsetTop, e.left = t.offsetLeft } return null }
            componentDidUpdate() {}
            render() { return this.props.children } }

        function Ee(e) { let { children: n, isPresent: r } = e; const i = (0, t.useId)(),
                a = (0, t.useRef)(null),
                s = (0, t.useRef)({ width: 0, height: 0, top: 0, left: 0 }); return (0, t.useInsertionEffect)((() => { const { width: e, height: t, top: n, left: o } = s.current; if (r || !a.current || !e || !t) return;
                a.current.dataset.motionPopId = i; const l = document.createElement("style"); return document.head.appendChild(l), l.sheet && l.sheet.insertRule('\n          [data-motion-pop-id="'.concat(i, '"] {\n            position: absolute !important;\n            width: ').concat(e, "px !important;\n            height: ").concat(t, "px !important;\n            top: ").concat(n, "px !important;\n            left: ").concat(o, "px !important;\n          }\n        ")), () => { document.head.removeChild(l) } }), [r]), t.createElement(Se, { isPresent: r, childRef: a, sizeRef: s }, t.cloneElement(n, { ref: a })) } const Pe = e => { let { children: n, initial: r, isPresent: i, onExitComplete: a, custom: s, presenceAffectsLayout: o, mode: l } = e; const c = Ne(Me),
                u = (0, t.useId)(),
                d = (0, t.useMemo)((() => ({ id: u, initial: r, isPresent: i, custom: s, onExitComplete: e => { c.set(e, !0); for (const t of c.values())
                            if (!t) return;
                        a && a() }, register: e => (c.set(e, !1), () => c.delete(e)) })), o ? void 0 : [i]); return (0, t.useMemo)((() => { c.forEach(((e, t) => c.set(t, !1))) }), [i]), t.useEffect((() => {!i && !c.size && a && a() }), [i]), "popLayout" === l && (n = t.createElement(Ee, { isPresent: i }, n)), t.createElement(ke.Provider, { value: d }, n) };

        function Me() { return new Map } const Fe = (0, t.createContext)({}); let Le = ge,
            Te = ge; const Ae = e => e.key || ""; const Ve = e => { let { children: n, custom: r, initial: i = !0, onExitComplete: a, exitBeforeEnter: s, presenceAffectsLayout: o = !0, mode: l = "sync" } = e;
                Te(!s, "Replace exitBeforeEnter with mode='wait'"); const c = (0, t.useContext)(Fe).forceRender || function() { const e = xe(),
                            [n, r] = (0, t.useState)(0),
                            i = (0, t.useCallback)((() => { e.current && r(n + 1) }), [n]); return [(0, t.useCallback)((() => Ce.postRender(i)), [i]), n] }()[0],
                    u = xe(),
                    d = function(e) { const n = []; return t.Children.forEach(e, (e => {
                            (0, t.isValidElement)(e) && n.push(e) })), n }(n); let f = d; const h = (0, t.useRef)(new Map).current,
                    p = (0, t.useRef)(f),
                    m = (0, t.useRef)(new Map).current,
                    x = (0, t.useRef)(!0); var g; if (me((() => { x.current = !1,
                            function(e, t) { e.forEach((e => { const n = Ae(e);
                                    t.set(n, e) })) }(d, m), p.current = f })), g = () => { x.current = !0, m.clear(), h.clear() }, (0, t.useEffect)((() => () => g()), []), x.current) return t.createElement(t.Fragment, null, f.map((e => t.createElement(Pe, { key: Ae(e), isPresent: !0, initial: !!i && void 0, presenceAffectsLayout: o, mode: l }, e))));
                f = [...f]; const v = p.current.map(Ae),
                    y = d.map(Ae),
                    C = v.length; for (let t = 0; t < C; t++) { const e = v[t]; - 1 !== y.indexOf(e) || h.has(e) || h.set(e, void 0) } return "wait" === l && h.size && (f = []), h.forEach(((e, n) => { if (-1 !== y.indexOf(n)) return; const i = m.get(n); if (!i) return; const s = v.indexOf(n); let x = e; if (!x) { const e = () => { h.delete(n); const e = Array.from(m.keys()).filter((e => !y.includes(e))); if (e.forEach((e => m.delete(e))), p.current = d.filter((t => { const r = Ae(t); return r === n || e.includes(r) })), !h.size) { if (!1 === u.current) return;
                                c(), a && a() } };
                        x = t.createElement(Pe, { key: Ae(i), isPresent: !1, onExitComplete: e, custom: r, presenceAffectsLayout: o, mode: l }, i), h.set(n, x) }
                    f.splice(s, 0, x) })), f = f.map((e => { const n = e.key; return h.has(n) ? e : t.createElement(Pe, { key: Ae(e), isPresent: !0, presenceAffectsLayout: o, mode: l }, e) })), t.createElement(t.Fragment, null, h.size ? f : f.map((e => (0, t.cloneElement)(e)))) },
            Re = n.p + "static/media/ZiegersLogo.4e21822b4228767f2df8.webp",
            Be = n.p + "static/media/stars.6d073c97f2d8073c4216.webp",
            De = n.p + "static/media/planet.573a65f205938247d135.webp"; const ze = n.p + "static/media/planet2.52f1c4b08db3e3d98979ca0436a5656f.svg"; const Oe = n.p + "static/media/planet3.c430c9dbddf9340228da9535d4960210.svg"; var _e = n(6211); const He = n.p + "static/media/menu.f42aaa1b5e76b80ca12af6ae95ea29dc.svg"; var Ie = n(184); const Ue = () => (0, Ie.jsx)("div", { className: "flex justify-center h-screen items-center", children: (0, Ie.jsx)("div", { className: "loader ", children: (0, Ie.jsx)("div", { id: "first", children: (0, Ie.jsx)("div", { id: "second", children: (0, Ie.jsx)("div", { id: "third" }) }) }) }) }); const Ze = function() { return (0, Ie.jsx)("footer", { className: "absolute bottom-1 left-0 right-0", children: (0, Ie.jsxs)("div", { className: "flex flex-row justify-between mx-auto items-center flex-wrap m-footer", children: [(0, Ie.jsx)("div", { className: "text-center pt-2 text-[#6B7280] font-readex text-[12px] ml-16 m-copyright-text select-none", children: "\xa9 2024 Veyg.com. All rights reserved." }), (0, Ie.jsxs)("div", { className: "flex justify-center gap-4 mr-16 m-footer-social", children: [(0, Ie.jsx)("div", { className: "m-copyright-socials", children: (0, Ie.jsx)("a", { href: "https://www.instagram.com/saffronyinstitute/", target: "_blank", rel: "noreferrer", children: (0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 20 20", fill: "none", children: (0, Ie.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10.315 0C12.745 0 13.099 0.0129999 14.123 0.0599999C15.187 0.109 15.914 0.278 16.55 0.525C17.2175 0.775874 17.8222 1.16936 18.322 1.678C18.8306 2.17777 19.2241 2.7825 19.475 3.45C19.722 4.086 19.891 4.813 19.94 5.877C19.988 6.944 20 7.284 20 10V10.08C20 12.723 19.988 13.067 19.94 14.123C19.891 15.187 19.722 15.914 19.475 16.55C19.2241 17.2175 18.8306 17.8222 18.322 18.322C17.8222 18.8306 17.2175 19.2241 16.55 19.475C15.914 19.722 15.187 19.891 14.123 19.94C13.056 19.988 12.716 20 10 20H9.92C7.277 20 6.933 19.988 5.877 19.94C4.813 19.891 4.086 19.722 3.45 19.475C2.7825 19.2241 2.17777 18.8306 1.678 18.322C1.16936 17.8222 0.775874 17.2175 0.525 16.55C0.278 15.914 0.109 15.187 0.0599999 14.123C0.0129999 13.099 0 12.744\r 0 10.315V9.685C0 7.255 0.0129999 6.901 0.0599999 5.877C0.109 4.813 0.278 4.086 0.525 3.45C0.775874 2.7825 1.16936 2.17777 1.678 1.678C2.17777 1.16936 2.7825 0.775874 3.45 0.525C4.086 0.278 4.813 0.109 5.877 0.0599999C6.901 0.0129999 7.256 0 9.685 0H10.315ZM10.234 1.802H9.766C7.31 1.802 6.982 1.813 5.959 1.86C4.984 1.905 4.455 2.067 4.102 2.204C3.635 2.386 3.302 2.602 2.952 2.952C2.602 3.302 2.386 3.635 2.204 4.102C2.067 4.455 1.904 4.984 1.86 5.959C1.813 6.982 1.802 7.31 1.802 9.766V10.234C1.802 12.69 1.813 13.018 1.86 14.041C1.905 15.016 2.067 15.545 2.204 15.898C2.386 16.364 2.603 16.698 2.952 17.048C3.302 17.398 3.635 17.614 4.102 17.796C4.455 17.933 4.984 18.096 5.959 18.14C7.013 18.188 7.329 18.198 10 18.198H10.08C12.677 18.198 12.997 18.188 14.04 18.14C15.016\r 18.095 15.545 17.933 15.898 17.796C16.364 17.614 16.698 17.398 17.048 17.048C17.398 16.698 17.614 16.365 17.796 15.898C17.933 15.545 18.096 15.016 18.14 14.041C18.188 12.986 18.198 12.671 18.198 10V9.92C18.198 7.323 18.188 7.003 18.14 5.96C18.095 4.984 17.933 4.455 17.796 4.102C17.6358 3.66757 17.3802 3.2746 17.048 2.952C16.7254 2.61986 16.3324 2.36426 15.898 2.204C15.545 2.067 15.016 1.904 14.041 1.86C13.018 1.813 12.69 1.802 10.234 1.802ZM10 4.865C10.6743 4.865 11.3421 4.99782 11.9651 5.25588C12.5881 5.51394 13.1542 5.89218 13.631 6.36901C14.1078 6.84584 14.4861 7.41191 14.7441 8.03492C15.0022 8.65793 15.135 9.32566 15.135 10C15.135 10.6743 15.0022 11.3421 14.7441 11.9651C14.4861 12.5881 14.1078 13.1542 13.631 13.631C13.1542 14.1078 12.5881 14.4861 11.9651 14.7441C11.3421 15.0022 10.6743 15.135 10 15.135C8.63811 15.135 7.33201 14.594 6.36901 13.631C5.40601 12.668 4.865 11.3619 4.865 10C4.865 8.63811 5.40601 7.33201 6.36901 6.36901C7.33201\r 5.40601 8.63811 4.865 10 4.865ZM10 6.667C9.11603 6.667 8.26827 7.01815 7.64321 7.64321C7.01815 8.26827 6.667 9.11603 6.667 10C6.667 10.884 7.01815 11.7317 7.64321 12.3568C8.26827 12.9818 9.11603 13.333 10 13.333C10.884 13.333 11.7317 12.9818 12.3568 12.3568C12.9818 11.7317 13.333 10.884 13.333 10C13.333 9.11603 12.9818 8.26827 12.3568 7.64321C11.7317 7.01815 10.884 6.667 10 6.667ZM15.338 3.462C15.6563 3.462 15.9615 3.58843 16.1865 3.81347C16.4116 4.03852 16.538 4.34374 16.538 4.662C16.538 4.98026 16.4116 5.28548 16.1865 5.51053C15.9615 5.73557 15.6563 5.862 15.338 5.862C15.0197 5.862 14.7145 5.73557 14.4895 5.51053C14.2644 5.28548 14.138 4.98026\r 14.138 4.662C14.138 4.34374 14.2644 4.03852 14.4895 3.81347C14.7145 3.58843 15.0197 3.462 15.338 3.462Z", fill: "#9CA3AF" }) }) }) }), (0, Ie.jsx)("div", { className: "m-copyright-socials", children: (0, Ie.jsx)("a", { href: "mailto:info@saffrony.ac.in", target: "_blank", rel: "noreferrer", children: (0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 20 18", fill: "none", children: (0, Ie.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M4 0C1.79086 0 0 1.79086 0 4V14C0 16.2091 1.79086 18 4 18H16C18.2091 18 20 16.2091 20 14V4C20 1.79086 18.2091 0 16 0H4ZM4.41603 4.37592C4.07138 4.14616 3.60573 4.23929 3.37597 4.58393C3.1462 4.92858 3.23933 5.39423 3.58398 5.624L7.36518 8.1448C8.9607 9.20848 11.0393 9.20848 12.6348 8.14479L16.416 5.624C16.7607 5.39423 16.8538 4.92858 16.624 4.58393C16.3943 4.23929 15.9286 4.14616 15.584 4.37592L11.8028 6.89672C10.7111 7.6245 9.2889 7.6245 8.19723 6.89672L4.41603 4.37592Z", fill: "#9CA3AF" }) }) }) }), (0, Ie.jsx)("div", { className: "m-copyright-socials", children: (0, Ie.jsx)("a", { href: "https://www.youtube.com/channel/UCQ7i9BQzrjy2VtRQOpP1UJg", target: "_blank", rel: "noreferrer", children: (0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 14", fill: "none", children: (0, Ie.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M17.812 0.418C18.673 0.648 19.35 1.325 19.58 2.186C19.998 3.746 20 7 20 7C20 7 20 10.255 19.582 11.814C19.4681 12.2378 19.2448 12.6242 18.9345 12.9345C18.6242 13.2448 18.2378 13.4681 17.814 13.582C16.254 14.001 10 14.001 10 14.001C10 14.001 3.745 14.001 2.186 13.582C1.76227 13.468 1.37592 13.2446 1.06564 12.9344C0.75536 12.6241 0.532027 12.2377 0.418 11.814C-2.98023e-08 10.255 0 7 0 7C0 7 5.96046e-08 3.745 0.417 2.186C0.531211 1.76236 0.754606 1.37611 1.06486 1.06586C1.37511 0.755607 1.76136 0.532212 2.185 0.418C3.744 2.08616e-07 9.998 0 9.998 0C9.998 0 16.253 2.08616e-07 17.812 0.418ZM13.194 7L8 10V4L13.194 7Z", fill: "#9CA3AF" }) }) }) })] })] }) }) }; const We = function() { const e = Q(),
                [n, r] = (0, t.useState)(!1),
                [i, a] = (0, t.useState)(!0); return (0, t.useEffect)((() => { document.title = "Ziegers - Fest of Computer Science"; const e = setTimeout((() => { a(!1) }), 3e3); return () => clearTimeout(e) }), []), (0, Ie.jsx)("div", { className: "wrapper overflow-hidden font-varino", children: i ? (0, Ie.jsx)(Ue, {}) : (0, Ie.jsxs)(Ie.Fragment, { children: [(0, Ie.jsxs)("nav", { className: "flex text-[#fff] flex-row  items-center align-middle mx-auto pt-2 pl-10 justify-between  rounded-es-[100px] rounded-br-[100px] absolute m-gaming-nav", style: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 15 }, children: [(0, Ie.jsx)(_e.default, { onOutsideClick: () => { r(!1) }, children: (0, Ie.jsxs)("div", { className: "flex flex-row justify-evenly items-center align-middle h-menus lg:mb-[1rem]", style: (e => { if (document.documentElement.clientWidth <= 800) return { right: !e && "-100%" } })(n), children: [(0, Ie.jsx)("div", { onClick: () => { e("/contact") }, className: "flex justify-center items-center align-middle font-varino text-focus-in navbar-text cursor-pointer", children: "Contact" }), (0, Ie.jsx)("svg", { width: "34", height: "34", viewBox: "0 0 34 34", fill: "none", className: "text-focus-in m-hide", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "Huge-icon/arrows/outline/arrow-down", children: (0, Ie.jsx)("path", { id: "Vector 190", d: "M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425", stroke: "#F3F3F3", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) }), (0, Ie.jsx)("div", { onClick: () => { e("/about") }, className: "cursor-pointer font-varino ml-3 text-focus-in navbar-text", children: "About" }), (0, Ie.jsx)("svg", { width: "34", height: "34", viewBox: "0 0 34 34", fill: "none", className: "text-focus-in m-hide", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "Huge-icon/arrows/outline/arrow-down", children: (0, Ie.jsx)("path", { id: "Vector 190", d: "M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425", stroke: "#F3F3F3", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) }), (0, Ie.jsx)("div", { onClick: () => { e("/events") }, className: "cursor-pointer font-varino ml-3 text-focus-in navbar-text", children: "Events" }), (0, Ie.jsx)("svg", { width: "34", height: "34", className: "text-focus-in m-hide", viewBox: "0 0 34 34", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "Huge-icon/arrows/outline/arrow-down", children: (0, Ie.jsx)("path", { id: "Vector 190", d: "M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425", stroke: "#F3F3F3", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) })] }) }), (0, Ie.jsxs)("a", { href: "/", target: "_blank", className: "w-[150px] m-hide h-[47px] pl-[3px] pr-[13px] mr-[3rem] bg-gradient-to-r from-zinc-950 to-blue-900 rounded-full shadow border border-blue-900 justify-start items-center inline-flex instagram-button mb-[0.5rem]", children: [(0, Ie.jsx)("div", { className: "w-4 h-4 relative flex-col justify-start items-start flex " }), (0, Ie.jsx)("div", { className: "text-center text-slate-50 text-xs font-normal font-['Varino'] flex flex-row justify-center items-center align-middle", children: (0, Ie.jsx)("h1", { className: "ml-2", children: "VEYG 2024" }) })] }), (0, Ie.jsx)("div", { className: "flex menu-icon cursor-pointer flex-row  justify-end mx-auto m-game-menu", onClick: () => r((e => !e)), children: (0, Ie.jsx)("img", { src: He, alt: "menu", width: "50px", className: "flex border border-solid  m-burger border-[#F3F3F3] rounded-lg m-burger2 text-focus-in" }) })] }), (0, Ie.jsx)("div", { className: "bgstyle" }), (0, Ie.jsx)("img", { src: Be, alt: "stars", className: "absolute h-[40rem] w-[90rem] top-[8rem] left-[7rem] stars" }), (0, Ie.jsx)("div", { className: "flex justify-center", children: (0, Ie.jsxs)("div", { className: "flex flex-col lg:gap-3 absolute items-center top-[17%] h-[500px] w-[650px] mx-auto overflow-hidden hero-section", children: [(0, Ie.jsx)("img", { src: Re, alt: "Hello", className: "h-[143px] w-[150px] translate-y-5 m-logo" }), (0, Ie.jsx)("p", { className: "text-black ziegers font-semibold text-[50px] leading-[65px] font-varino max-w-[850px] text-center lg:mt-[10px] ziegers2024", children: "ZIEGERS 2024" }), (0, Ie.jsxs)("p", { className: "lg:mt-3 text-center text-[#080808] font-readex font-light text-[20px] leading-[25px] ziegers-text ", children: ["Ziegers enables participants to discover ", (0, Ie.jsx)("br", {}), " connections that was not possible before."] })] }) }), (0, Ie.jsx)("img", { src: De, alt: "bottomleft", className: "bottomleft blur-[1.3px] bottom-[30px] left-[160px] absolute h-[170px] w-[170px] " }), (0, Ie.jsx)("img", { src: De, alt: "middleleft", className: "middleleft blur-[2px] rotate-[19deg] bottom-[26rem] left-4 absolute h-[40px] w-[40px] " }), (0, Ie.jsx)("img", { src: ze, alt: "topleft", className: "topleft blur-[2px] top-28 left-[190px] absolute h-[80px] w-[80px] " }), (0, Ie.jsx)("img", { src: Oe, alt: "bottomright", className: "bottomright blur-[2px] bottom-20 right-40 absolute h-[80px] w-[80px]  " }), (0, Ie.jsx)("img", { src: De, alt: "middleright", className: "middleright blur-[1.3px] bottom-60 rotate-[-150deg] right-6 absolute h-[40px] w-[40px] " }), (0, Ie.jsx)("img", { src: De, alt: "topright", className: "topright blur-[1.3px] -rotate-[165deg] top-28 right-24 absolute h-[170px] w-[170px] " }), (0, Ie.jsx)(Ze, {})] }) }) }; const $e = function() { const [e, n] = (0, t.useState)(!1), r = Q(); return (0, Ie.jsxs)("nav", { className: "flex text-[#fff] flex-row  items-center align-middle mx-auto pt-2 pl-10 justify-between ", style: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 15 }, children: [(0, Ie.jsx)(_e.default, { onOutsideClick: () => { n(!1) }, children: (0, Ie.jsx)("div", { className: "flex flex-row align-middle  items-center text-[15px] h-menus", style: (e => { if (document.documentElement.clientWidth <= 800) return { right: !e && "-100%" } })(e), children: (0, Ie.jsxs)("div", { className: "flex justify-center items-center m-menu", children: [(0, Ie.jsx)("div", { onClick: () => { r("/contact") }, className: "font-varino cursor-pointer text-focus-in navbar-text", children: "Contact" }), (0, Ie.jsx)("svg", { width: "34", height: "34", viewBox: "0 0 34 34", fill: "none", className: "text-focus-in m-hide", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "Huge-icon/arrows/outline/arrow-down", children: (0, Ie.jsx)("path", { id: "Vector 190", d: "M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425", stroke: "#F3F3F3", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) }), (0, Ie.jsx)("div", { onClick: () => { r("/about") }, className: "cursor-pointer font-varino lg:ml-3 text-focus-in navbar-text ", children: "About" }), (0, Ie.jsx)("svg", { width: "34", height: "34", className: "text-focus-in m-hide", viewBox: "0 0 34 34", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "Huge-icon/arrows/outline/arrow-down", children: (0, Ie.jsx)("path", { id: "Vector 190", d: "M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425", stroke: "#F3F3F3", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) })] }) }) }), (0, Ie.jsx)("a", { href: "/", className: "font-varino font-bold mx-auto text-xl translate-x-[-2.7rem] text-focus-in logo-text", style: { textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }, children: "ZIEGERS" }), (0, Ie.jsxs)("a", { href: "https://www.instagram.com/ziegerscs", target: "_blank", className: "m-hide text-focus-in w-[150px] h-[47px] pl-[3px] pr-[13px] mr-[3rem] bg-gradient-to-r from-zinc-950 to-blue-900 rounded-full shadow border border-blue-900 justify-start items-center inline-flex instagram-button", children: [(0, Ie.jsx)("div", { className: "w-4 h-4 relative flex-col justify-start items-start flex " }), (0, Ie.jsxs)("div", { className: "text-center text-slate-50 text-xs font-normal font-['Varino'] flex flex-row justify-center items-center align-middle", children: [(0, Ie.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "instagram", children: (0, Ie.jsx)("path", { id: "Vector", d: "M11.6188 4.13967C11.4605 4.13967 11.3059 4.18659 11.1743 4.2745C11.0427 4.3624 10.9402 4.48735 10.8797 4.63353C10.8191 4.77971 10.8033 4.94056 10.8341 5.09575C10.865 5.25093 10.9412 5.39348 11.0531 5.50536C11.165 5.61724 11.3075 5.69343 11.4627 5.7243C11.6179 5.75517 11.7787 5.73933 11.9249 5.67878C12.0711 5.61823 12.196 5.51569 12.2839 5.38413C12.3718 5.25257 12.4188 5.0979 12.4188 4.93967C12.4188 4.7275 12.3345 4.52402 12.1844 4.37399C12.0344 4.22396 11.8309 4.13967 11.6188 4.13967ZM14.6854 5.75301C14.6725 5.19987 14.5689 4.65261 14.3788 4.13301C14.2092 3.68843 13.9454 3.28586 13.6054 2.95301C13.2753 2.61129 12.8718 2.34913 12.4254 2.18634C11.9072 1.99045 11.3593 1.88448 10.8054 1.87301C10.0988 1.83301 9.87209 1.83301 8.05876 1.83301C6.24542 1.83301 6.01876 1.83301 5.31209 1.87301C4.75819 1.88448 4.21032 1.99045 3.69209 2.18634C3.24654 2.35077 2.84338 2.61271 2.51209 2.95301C2.17037 3.28313 1.90821 3.68663 1.74542 4.13301C1.54953 4.65124 1.44356 5.19911 1.43209 5.75301C1.39209 6.45967 1.39209 6.68634 1.39209 8.49967C1.39209 10.313 1.39209 10.5397 1.43209 11.2463C1.44356 11.8002 1.54953 12.3481 1.74542 12.8663C1.90821 13.3127 2.17037 13.7162 2.51209 14.0463C2.84338 14.3866 3.24654 14.6486 3.69209 14.813C4.21032 15.0089 4.75819 15.1149 5.31209 15.1263C6.01876 15.1663 6.24542 15.1663 8.05876 15.1663C9.87209 15.1663 10.0988 15.1663 10.8054 15.1263C11.3593 15.1149 11.9072 15.0089 12.4254 14.813C12.8718 14.6502 13.2753 14.3881 13.6054 14.0463C13.9469 13.7147 14.211 13.3118 14.3788 12.8663C14.5689 12.3467 14.6725 11.7995 14.6854 11.2463C14.6854 10.5397 14.7254 10.313 14.7254 8.49967C14.7254 6.68634 14.7254 6.45967 14.6854 5.75301ZM13.4854 11.1663C13.4806 11.5895 13.4039 12.0088 13.2588 12.4063C13.1523 12.6965 12.9813 12.9586 12.7588 13.173C12.5425 13.3933 12.2809 13.564 11.9921 13.673C11.5946 13.8182 11.1753 13.8948 10.7521 13.8997C10.0854 13.933 9.83876 13.9397 8.08542 13.9397C6.33209 13.9397 6.08542 13.9397 5.41876 13.8997C4.97935 13.9079 4.54182 13.8402 4.12542 13.6997C3.84928 13.5851 3.59966 13.4149 3.39209 13.1997C3.17082 12.9855 3.00199 12.7231 2.89876 12.433C2.73599 12.0298 2.64572 11.601 2.63209 11.1663C2.63209 10.4997 2.59209 10.253 2.59209 8.49967C2.59209 6.74634 2.59209 6.49967 2.63209 5.83301C2.63508 5.40038 2.71406 4.97164 2.86542 4.56634C2.98279 4.28495 3.16293 4.03411 3.39209 3.83301C3.59463 3.60379 3.84495 3.42174 4.12542 3.29967C4.53179 3.15304 4.96009 3.07639 5.39209 3.07301C6.05876 3.07301 6.30542 3.03301 8.05876 3.03301C9.81209 3.03301 10.0588 3.03301 10.7254 3.07301C11.1486 3.07786 11.5679 3.15451 11.9654 3.29967C12.2684 3.41211 12.5403 3.59491 12.7588 3.83301C12.9772 4.03779 13.1479 4.28816 13.2588 4.56634C13.4069 4.9723 13.4836 5.40086 13.4854 5.83301C13.5188 6.49967 13.5254 6.74634 13.5254 8.49967C13.5254 10.253 13.5188 10.4997 13.4854 11.1663ZM8.05876 5.07967C7.38263 5.08099 6.72206 5.28269 6.16053 5.65929C5.59899 6.03588 5.16168 6.57047 4.90385 7.19551C4.64602 7.82055 4.57924 8.50799 4.71195 9.17096C4.84467 9.83394 5.17091 10.4427 5.64947 10.9203C6.12803 11.398 6.73743 11.723 7.40066 11.8544C8.06389 11.9859 8.7512 11.9177 9.37574 11.6587C10.0003 11.3997 10.534 10.9613 10.9095 10.399C11.285 9.83676 11.4854 9.1758 11.4854 8.49967C11.4863 8.04974 11.3982 7.60408 11.2262 7.18831C11.0543 6.77254 10.8018 6.39488 10.4833 6.07704C10.1649 5.7592 9.78672 5.50746 9.37062 5.33629C8.95452 5.16513 8.50868 5.07792 8.05876 5.07967ZM8.05876 10.7197C7.61968 10.7197 7.19047 10.5895 6.82539 10.3455C6.46031 10.1016 6.17577 9.75488 6.00774 9.34923C5.83972 8.94358 5.79575 8.49721 5.88141 8.06657C5.96707 7.63594 6.17851 7.24037 6.48898 6.9299C6.79945 6.61942 7.19502 6.40799 7.62566 6.32233C8.05629 6.23667 8.50266 6.28063 8.90831 6.44866C9.31397 6.61669 9.66068 6.90123 9.90462 7.26631C10.1486 7.63139 10.2788 8.0606 10.2788 8.49967C10.2788 8.79121 10.2213 9.07989 10.1098 9.34923C9.9982 9.61857 9.83468 9.86331 9.62853 10.0695C9.42239 10.2756 9.17766 10.4391 8.90831 10.5507C8.63897 10.6623 8.35029 10.7197 8.05876 10.7197Z", fill: "#F3F3F3" }) }) }), (0, Ie.jsx)("h1", { className: "ml-2 m-insta", children: "Instagram" })] })] }), (0, Ie.jsx)("div", { className: "flex menu-icon cursor-pointer flex-row  justify-end mx-auto ", onClick: () => n((e => !e)), children: (0, Ie.jsx)("img", { src: He, alt: "menu", width: "50px", className: "flex border border-solid  m-burger border-[#F3F3F3] rounded-lg m-burger2 text-focus-in" }) })] }) },
            Ge = n.p + "static/media/WebdevCard.445724395fd02f7e610d.webp",
            Ye = n.p + "static/media/gamecard.18fb04fbd237b585e18f.webp",
            qe = n.p + "static/media/technutzcard.593cf7db2b56728f3e37.webp",
            Xe = n.p + "static/media/codexcard.0ca402587038454db9a9.webp"; var Qe = n(6186),
            Ke = n.n(Qe); const Je = (0, t.createContext)({ transformPagePoint: e => e, isStatic: !1, reducedMotion: "never" }),
            et = (0, t.createContext)({}),
            tt = (0, t.createContext)({ strict: !1 }),
            nt = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
            rt = "data-" + nt("framerAppearId");

        function it(e) { return "object" === typeof e && Object.prototype.hasOwnProperty.call(e, "current") }

        function at(e) { return "string" === typeof e || Array.isArray(e) }

        function st(e) { return "object" === typeof e && "function" === typeof e.start } const ot = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
            lt = ["initial", ...ot];

        function ct(e) { return st(e.animate) || lt.some((t => at(e[t]))) }

        function ut(e) { return Boolean(ct(e) || e.variants) }

        function dt(e) { const { initial: n, animate: r } = function(e, t) { if (ct(e)) { const { initial: t, animate: n } = e; return { initial: !1 === t || at(t) ? t : void 0, animate: at(n) ? n : void 0 } } return !1 !== e.inherit ? t : {} }(e, (0, t.useContext)(et)); return (0, t.useMemo)((() => ({ initial: n, animate: r })), [ft(n), ft(r)]) }

        function ft(e) { return Array.isArray(e) ? e.join(" ") : e } const ht = { animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"], exit: ["exit"], drag: ["drag", "dragControls"], focus: ["whileFocus"], hover: ["whileHover", "onHoverStart", "onHoverEnd"], tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"], pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], inView: ["whileInView", "onViewportEnter", "onViewportLeave"], layout: ["layout", "layoutId"] },
            pt = {}; for (const n in ht) pt[n] = { isEnabled: e => ht[n].some((t => !!e[t])) }; const mt = (0, t.createContext)({}),
            xt = Symbol.for("motionComponentSymbol");

        function gt(e) { let { preloadedFeatures: n, createVisualElement: r, useRender: i, useVisualState: a, Component: s } = e;
            n && function(e) { for (const t in e) pt[t] = {...pt[t], ...e[t] } }(n); const o = (0, t.forwardRef)((function(e, o) { let l; const c = {...(0, t.useContext)(Je), ...e, layoutId: vt(e) },
                    { isStatic: u } = c,
                    d = dt(e),
                    f = a(e, u); if (!u && pe) { d.visualElement = function(e, n, r, i) { const { visualElement: a } = (0, t.useContext)(et), s = (0, t.useContext)(tt), o = (0, t.useContext)(ke), l = (0, t.useContext)(Je).reducedMotion, c = (0, t.useRef)();
                        i = i || s.renderer, !c.current && i && (c.current = i(e, { visualState: n, parent: a, props: r, presenceContext: o, blockInitialAnimation: !!o && !1 === o.initial, reducedMotionConfig: l })); const u = c.current;
                        (0, t.useInsertionEffect)((() => { u && u.update(r, o) })); const d = (0, t.useRef)(Boolean(r[rt] && !window.HandoffComplete)); return me((() => { u && (u.render(), d.current && u.animationState && u.animationState.animateChanges()) })), (0, t.useEffect)((() => { u && (u.updateFeatures(), !d.current && u.animationState && u.animationState.animateChanges(), d.current && (d.current = !1, window.HandoffComplete = !0)) })), u }(s, f, c, r); const e = (0, t.useContext)(mt),
                        i = (0, t.useContext)(tt).strict;
                    d.visualElement && (l = d.visualElement.loadFeatures(c, i, n, e)) } return t.createElement(et.Provider, { value: d }, l && d.visualElement ? t.createElement(l, { visualElement: d.visualElement, ...c }) : null, i(s, e, function(e, n, r) { return (0, t.useCallback)((t => { t && e.mount && e.mount(t), n && (t ? n.mount(t) : n.unmount()), r && ("function" === typeof r ? r(t) : it(r) && (r.current = t)) }), [n]) }(f, d.visualElement, o), f, u, d.visualElement)) })); return o[xt] = s, o }

        function vt(e) { let { layoutId: n } = e; const r = (0, t.useContext)(Fe).id; return r && void 0 !== n ? r + "-" + n : n }

        function yt(e) {
            function t(t) { return gt(e(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})) } if ("undefined" === typeof Proxy) return t; const n = new Map; return new Proxy(t, { get: (e, r) => (n.has(r) || n.set(r, t(r)), n.get(r)) }) } const Ct = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

        function wt(e) { return "string" === typeof e && !e.includes("-") && !!(Ct.indexOf(e) > -1 || /[A-Z]/.test(e)) } const bt = {}; const jt = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
            kt = new Set(jt);

        function Nt(e, t) { let { layout: n, layoutId: r } = t; return kt.has(e) || e.startsWith("origin") || (n || void 0 !== r) && (!!bt[e] || "opacity" === e) } const St = e => Boolean(e && e.getVelocity),
            Et = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
            Pt = jt.length; const Mt = e => t => "string" === typeof t && t.startsWith(e),
            Ft = Mt("--"),
            Lt = Mt("var(--"),
            Tt = (e, t) => t && "number" === typeof e ? t.transform(e) : e,
            At = (e, t, n) => Math.min(Math.max(n, e), t),
            Vt = { test: e => "number" === typeof e, parse: parseFloat, transform: e => e },
            Rt = {...Vt, transform: e => At(0, 1, e) },
            Bt = {...Vt, default: 1 },
            Dt = e => Math.round(1e5 * e) / 1e5,
            zt = /(-)?([\d]*\.?[\d])+/g,
            Ot = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
            _t = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

        function Ht(e) { return "string" === typeof e } const It = e => ({ test: t => Ht(t) && t.endsWith(e) && 1 === t.split(" ").length, parse: parseFloat, transform: t => "".concat(t).concat(e) }),
            Ut = It("deg"),
            Zt = It("%"),
            Wt = It("px"),
            $t = It("vh"),
            Gt = It("vw"),
            Yt = {...Zt, parse: e => Zt.parse(e) / 100, transform: e => Zt.transform(100 * e) },
            qt = {...Vt, transform: Math.round },
            Xt = { borderWidth: Wt, borderTopWidth: Wt, borderRightWidth: Wt, borderBottomWidth: Wt, borderLeftWidth: Wt, borderRadius: Wt, radius: Wt, borderTopLeftRadius: Wt, borderTopRightRadius: Wt, borderBottomRightRadius: Wt, borderBottomLeftRadius: Wt, width: Wt, maxWidth: Wt, height: Wt, maxHeight: Wt, size: Wt, top: Wt, right: Wt, bottom: Wt, left: Wt, padding: Wt, paddingTop: Wt, paddingRight: Wt, paddingBottom: Wt, paddingLeft: Wt, margin: Wt, marginTop: Wt, marginRight: Wt, marginBottom: Wt, marginLeft: Wt, rotate: Ut, rotateX: Ut, rotateY: Ut, rotateZ: Ut, scale: Bt, scaleX: Bt, scaleY: Bt, scaleZ: Bt, skew: Ut, skewX: Ut, skewY: Ut, distance: Wt, translateX: Wt, translateY: Wt, translateZ: Wt, x: Wt, y: Wt, z: Wt, perspective: Wt, transformPerspective: Wt, opacity: Rt, originX: Yt, originY: Yt, originZ: Wt, zIndex: qt, fillOpacity: Rt, strokeOpacity: Rt, numOctaves: qt };

        function Qt(e, t, n, r) { const { style: i, vars: a, transform: s, transformOrigin: o } = e; let l = !1,
                c = !1,
                u = !0; for (const d in t) { const e = t[d]; if (Ft(d)) { a[d] = e; continue } const n = Xt[d],
                    r = Tt(e, n); if (kt.has(d)) { if (l = !0, s[d] = r, !u) continue;
                    e !== (n.default || 0) && (u = !1) } else d.startsWith("origin") ? (c = !0, o[d] = r) : i[d] = r } if (t.transform || (l || r ? i.transform = function(e, t, n, r) { let { enableHardwareAcceleration: i = !0, allowTransformNone: a = !0 } = t, s = ""; for (let o = 0; o < Pt; o++) { const t = jt[o]; if (void 0 !== e[t]) { const n = Et[t] || t;
                            s += "".concat(n, "(").concat(e[t], ") ") } } return i && !e.z && (s += "translateZ(0)"), s = s.trim(), r ? s = r(e, n ? "" : s) : a && n && (s = "none"), s }(e.transform, n, u, r) : i.transform && (i.transform = "none")), c) { const { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = o;
                i.transformOrigin = "".concat(e, " ").concat(t, " ").concat(n) } } const Kt = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });

        function Jt(e, t, n) { for (const r in t) St(t[r]) || Nt(r, n) || (e[r] = t[r]) }

        function en(e, n, r) { const i = {}; return Jt(i, e.style || {}, e), Object.assign(i, function(e, n, r) { let { transformTemplate: i } = e; return (0, t.useMemo)((() => { const e = Kt(); return Qt(e, n, { enableHardwareAcceleration: !r }, i), Object.assign({}, e.vars, e.style) }), [n]) }(e, n, r)), e.transformValues ? e.transformValues(i) : i }

        function tn(e, t, n) { const r = {},
                i = en(e, t, n); return e.drag && !1 !== e.dragListener && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = !0 === e.drag ? "none" : "pan-".concat("x" === e.drag ? "y" : "x")), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = i, r } const nn = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

        function rn(e) { return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || nn.has(e) } let an = e => !rn(e); try {
            (sn = require("@emotion/is-prop-valid").default) && (an = e => e.startsWith("on") ? !rn(e) : sn(e)) } catch (wc) {} var sn;

        function on(e, t, n) { return "string" === typeof e ? e : Wt.transform(t + n * e) } const ln = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
            cn = { offset: "strokeDashoffset", array: "strokeDasharray" };

        function un(e, t, n, r, i) { let { attrX: a, attrY: s, attrScale: o, originX: l, originY: c, pathLength: u, pathSpacing: d = 1, pathOffset: f = 0, ...h } = t; if (Qt(e, h, n, i), r) return void(e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
            e.attrs = e.style, e.style = {}; const { attrs: p, style: m, dimensions: x } = e;
            p.transform && (x && (m.transform = p.transform), delete p.transform), x && (void 0 !== l || void 0 !== c || m.transform) && (m.transformOrigin = function(e, t, n) { const r = on(t, e.x, e.width),
                    i = on(n, e.y, e.height); return "".concat(r, " ").concat(i) }(x, void 0 !== l ? l : .5, void 0 !== c ? c : .5)), void 0 !== a && (p.x = a), void 0 !== s && (p.y = s), void 0 !== o && (p.scale = o), void 0 !== u && function(e, t) { let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                e.pathLength = 1; const a = i ? ln : cn;
                e[a.offset] = Wt.transform(-r); const s = Wt.transform(t),
                    o = Wt.transform(n);
                e[a.array] = "".concat(s, " ").concat(o) }(p, u, d, f, !1) } const dn = () => ({...Kt(), attrs: {} }),
            fn = e => "string" === typeof e && "svg" === e.toLowerCase();

        function hn(e, n, r, i) { const a = (0, t.useMemo)((() => { const t = dn(); return un(t, n, { enableHardwareAcceleration: !1 }, fn(i), e.transformTemplate), {...t.attrs, style: {...t.style } } }), [n]); if (e.style) { const t = {};
                Jt(t, e.style, e), a.style = {...t, ...a.style } } return a }

        function pn() { let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; return (n, r, i, a, s) => { let { latestValues: o } = a; const l = (wt(n) ? hn : tn)(r, o, s, n),
                    c = function(e, t, n) { const r = {}; for (const i in e) "values" === i && "object" === typeof e.values || (an(i) || !0 === n && rn(i) || !t && !rn(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]); return r }(r, "string" === typeof n, e),
                    u = {...c, ...l, ref: i },
                    { children: d } = r,
                    f = (0, t.useMemo)((() => St(d) ? d.get() : d), [d]); return (0, t.createElement)(n, {...u, children: f }) } }

        function mn(e, t, n, r) { let { style: i, vars: a } = t;
            Object.assign(e.style, i, r && r.getProjectionStyles(n)); for (const s in a) e.style.setProperty(s, a[s]) } const xn = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

        function gn(e, t, n, r) { mn(e, t, void 0, r); for (const i in t.attrs) e.setAttribute(xn.has(i) ? i : nt(i), t.attrs[i]) }

        function vn(e, t) { const { style: n } = e, r = {}; for (const i in n)(St(n[i]) || t.style && St(t.style[i]) || Nt(i, e)) && (r[i] = n[i]); return r }

        function yn(e, t) { const n = vn(e, t); for (const r in e)
                if (St(e[r]) || St(t[r])) { n[-1 !== jt.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r] = e[r] }
            return n }

        function Cn(e, t, n) { let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}; return "function" === typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)), "string" === typeof t && (t = e.variants && e.variants[t]), "function" === typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)), t } const wn = e => Array.isArray(e),
            bn = e => Boolean(e && "object" === typeof e && e.mix && e.toValue),
            jn = e => wn(e) ? e[e.length - 1] || 0 : e;

        function kn(e) { const t = St(e) ? e.get() : e; return bn(t) ? t.toValue() : t } const Nn = e => (n, r) => { const i = (0, t.useContext)(et),
                a = (0, t.useContext)(ke),
                s = () => function(e, t, n, r) { let { scrapeMotionValuesFromProps: i, createRenderState: a, onMount: s } = e; const o = { latestValues: Sn(t, n, r, i), renderState: a() }; return s && (o.mount = e => s(t, e, o)), o }(e, n, i, a); return r ? s() : Ne(s) };

        function Sn(e, t, n, r) { const i = {},
                a = r(e, {}); for (const f in a) i[f] = kn(a[f]); let { initial: s, animate: o } = e; const l = ct(e),
                c = ut(e);
            t && c && !l && !1 !== e.inherit && (void 0 === s && (s = t.initial), void 0 === o && (o = t.animate)); let u = !!n && !1 === n.initial;
            u = u || !1 === s; const d = u ? o : s; if (d && "boolean" !== typeof d && !st(d)) {
                (Array.isArray(d) ? d : [d]).forEach((t => { const n = Cn(e, t); if (!n) return; const { transitionEnd: r, transition: a, ...s } = n; for (const e in s) { let t = s[e]; if (Array.isArray(t)) { t = t[u ? t.length - 1 : 0] }
                        null !== t && (i[e] = t) } for (const e in r) i[e] = r[e] })) } return i } const En = { useVisualState: Nn({ scrapeMotionValuesFromProps: yn, createRenderState: dn, onMount: (e, t, n) => { let { renderState: r, latestValues: i } = n;
                        Ce.read((() => { try { r.dimensions = "function" === typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect() } catch (e) { r.dimensions = { x: 0, y: 0, width: 0, height: 0 } } })), Ce.render((() => { un(r, i, { enableHardwareAcceleration: !1 }, fn(t.tagName), e.transformTemplate), gn(t, r) })) } }) },
            Pn = { useVisualState: Nn({ scrapeMotionValuesFromProps: vn, createRenderState: Kt }) };

        function Mn(e, t, n) { let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { passive: !0 }; return e.addEventListener(t, n, r), () => e.removeEventListener(t, n) } const Fn = e => "mouse" === e.pointerType ? "number" !== typeof e.button || e.button <= 0 : !1 !== e.isPrimary;

        function Ln(e) { let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "page"; return { point: { x: e[t + "X"], y: e[t + "Y"] } } } const Tn = e => t => Fn(t) && e(t, Ln(t));

        function An(e, t, n, r) { return Mn(e, t, Tn(n), r) } const Vn = (e, t) => n => t(e(n)),
            Rn = function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return t.reduce(Vn) };

        function Bn(e) { let t = null; return () => { const n = () => { t = null }; return null === t && (t = e, n) } } const Dn = Bn("dragHorizontal"),
            zn = Bn("dragVertical");

        function On(e) { let t = !1; if ("y" === e) t = zn();
            else if ("x" === e) t = Dn();
            else { const e = Dn(),
                    n = zn();
                e && n ? t = () => { e(), n() } : (e && e(), n && n()) } return t }

        function _n() { const e = On(!0); return !e || (e(), !1) }
        class Hn { constructor(e) { this.isMounted = !1, this.node = e }
            update() {} }

        function In(e, t) { const n = "pointer" + (t ? "enter" : "leave"),
                r = "onHover" + (t ? "Start" : "End"); return An(e.current, n, ((n, i) => { if ("touch" === n.type || _n()) return; const a = e.getProps();
                e.animationState && a.whileHover && e.animationState.setActive("whileHover", t), a[r] && Ce.update((() => a[r](n, i))) }), { passive: !e.getProps()[r] }) } const Un = (e, t) => !!t && (e === t || Un(e, t.parentElement));

        function Zn(e, t) { if (!t) return; const n = new PointerEvent("pointer" + e);
            t(n, Ln(n)) } const Wn = new WeakMap,
            $n = new WeakMap,
            Gn = e => { const t = Wn.get(e.target);
                t && t(e) },
            Yn = e => { e.forEach(Gn) };

        function qn(e, t, n) { const r = function(e) { let { root: t, ...n } = e; const r = t || document;
                $n.has(r) || $n.set(r, {}); const i = $n.get(r),
                    a = JSON.stringify(n); return i[a] || (i[a] = new IntersectionObserver(Yn, { root: t, ...n })), i[a] }(t); return Wn.set(e, n), r.observe(e), () => { Wn.delete(e), r.unobserve(e) } } const Xn = { some: 0, all: 1 }; const Qn = { inView: { Feature: class extends Hn { constructor() { super(...arguments), this.hasEnteredView = !1, this.isInView = !1 }
                    startObserver() { this.unmount(); const { viewport: e = {} } = this.node.getProps(), { root: t, margin: n, amount: r = "some", once: i } = e, a = { root: t ? t.current : void 0, rootMargin: n, threshold: "number" === typeof r ? r : Xn[r] }; return qn(this.node.current, a, (e => { const { isIntersecting: t } = e; if (this.isInView === t) return; if (this.isInView = t, i && !t && this.hasEnteredView) return;
                            t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t); const { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(), a = t ? n : r;
                            a && a(e) })) }
                    mount() { this.startObserver() }
                    update() { if ("undefined" === typeof IntersectionObserver) return; const { props: e, prevProps: t } = this.node, n = ["amount", "margin", "root"].some(function(e) { let { viewport: t = {} } = e, { viewport: n = {} } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return e => t[e] !== n[e] }(e, t));
                        n && this.startObserver() }
                    unmount() {} } }, tap: { Feature: class extends Hn { constructor() { super(...arguments), this.removeStartListeners = ge, this.removeEndListeners = ge, this.removeAccessibleListeners = ge, this.startPointerPress = (e, t) => { if (this.removeEndListeners(), this.isPressing) return; const n = this.node.getProps(),
                                r = An(window, "pointerup", ((e, t) => { if (!this.checkPressEnd()) return; const { onTap: n, onTapCancel: r } = this.node.getProps();
                                    Ce.update((() => { Un(this.node.current, e.target) ? n && n(e, t) : r && r(e, t) })) }), { passive: !(n.onTap || n.onPointerUp) }),
                                i = An(window, "pointercancel", ((e, t) => this.cancelPress(e, t)), { passive: !(n.onTapCancel || n.onPointerCancel) });
                            this.removeEndListeners = Rn(r, i), this.startPress(e, t) }, this.startAccessiblePress = () => { const e = Mn(this.node.current, "keydown", (e => { if ("Enter" !== e.key || this.isPressing) return;
                                    this.removeEndListeners(), this.removeEndListeners = Mn(this.node.current, "keyup", (e => { "Enter" === e.key && this.checkPressEnd() && Zn("up", ((e, t) => { const { onTap: n } = this.node.getProps();
                                            n && Ce.update((() => n(e, t))) })) })), Zn("down", ((e, t) => { this.startPress(e, t) })) })),
                                t = Mn(this.node.current, "blur", (() => { this.isPressing && Zn("cancel", ((e, t) => this.cancelPress(e, t))) }));
                            this.removeAccessibleListeners = Rn(e, t) } }
                    startPress(e, t) { this.isPressing = !0; const { onTapStart: n, whileTap: r } = this.node.getProps();
                        r && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && Ce.update((() => n(e, t))) }
                    checkPressEnd() { this.removeEndListeners(), this.isPressing = !1; return this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !_n() }
                    cancelPress(e, t) { if (!this.checkPressEnd()) return; const { onTapCancel: n } = this.node.getProps();
                        n && Ce.update((() => n(e, t))) }
                    mount() { const e = this.node.getProps(),
                            t = An(this.node.current, "pointerdown", this.startPointerPress, { passive: !(e.onTapStart || e.onPointerStart) }),
                            n = Mn(this.node.current, "focus", this.startAccessiblePress);
                        this.removeStartListeners = Rn(t, n) }
                    unmount() { this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners() } } }, focus: { Feature: class extends Hn { constructor() { super(...arguments), this.isActive = !1 }
                    onFocus() { let e = !1; try { e = this.node.current.matches(":focus-visible") } catch (t) { e = !0 }
                        e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0) }
                    onBlur() { this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1) }
                    mount() { this.unmount = Rn(Mn(this.node.current, "focus", (() => this.onFocus())), Mn(this.node.current, "blur", (() => this.onBlur()))) }
                    unmount() {} } }, hover: { Feature: class extends Hn { mount() { this.unmount = Rn(In(this.node, !0), In(this.node, !1)) }
                    unmount() {} } } };

        function Kn(e, t) { if (!Array.isArray(t)) return !1; const n = t.length; if (n !== e.length) return !1; for (let r = 0; r < n; r++)
                if (t[r] !== e[r]) return !1;
            return !0 }

        function Jn(e, t, n) { const r = e.getProps(); return Cn(r, t, void 0 !== n ? n : r.custom, function(e) { const t = {}; return e.values.forEach(((e, n) => t[n] = e.get())), t }(e), function(e) { const t = {}; return e.values.forEach(((e, n) => t[n] = e.getVelocity())), t }(e)) } const er = e => 1e3 * e,
            tr = e => e / 1e3,
            nr = !1,
            rr = e => Array.isArray(e) && "number" === typeof e[0];

        function ir(e) { return Boolean(!e || "string" === typeof e && sr[e] || rr(e) || Array.isArray(e) && e.every(ir)) } const ar = e => { let [t, n, r, i] = e; return "cubic-bezier(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(i, ")") },
            sr = { linear: "linear", ease: "ease", easeIn: "ease-in", easeOut: "ease-out", easeInOut: "ease-in-out", circIn: ar([0, .65, .55, 1]), circOut: ar([.55, 0, 1, .45]), backIn: ar([.31, .01, .66, -.59]), backOut: ar([.33, 1.53, .69, .99]) };

        function or(e) { if (e) return rr(e) ? ar(e) : Array.isArray(e) ? e.map(or) : sr[e] } const lr = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
            cr = 1e-7,
            ur = 12;

        function dr(e, t, n, r) { if (e === t && n === r) return ge; const i = t => function(e, t, n, r, i) { let a, s, o = 0;
                do { s = t + (n - t) / 2, a = lr(s, r, i) - e, a > 0 ? n = s : t = s } while (Math.abs(a) > cr && ++o < ur); return s }(t, 0, 1, e, n); return e => 0 === e || 1 === e ? e : lr(i(e), t, r) } const fr = dr(.42, 0, 1, 1),
            hr = dr(0, 0, .58, 1),
            pr = dr(.42, 0, .58, 1),
            mr = e => Array.isArray(e) && "number" !== typeof e[0],
            xr = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
            gr = e => t => 1 - e(1 - t),
            vr = e => 1 - Math.sin(Math.acos(e)),
            yr = gr(vr),
            Cr = xr(vr),
            wr = dr(.33, 1.53, .69, .99),
            br = gr(wr),
            jr = xr(br),
            kr = { linear: ge, easeIn: fr, easeInOut: pr, easeOut: hr, circIn: vr, circInOut: Cr, circOut: yr, backIn: br, backInOut: jr, backOut: wr, anticipate: e => (e *= 2) < 1 ? .5 * br(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))) },
            Nr = e => { if (Array.isArray(e)) { Te(4 === e.length, "Cubic bezier arrays must contain four numerical values."); const [t, n, r, i] = e; return dr(t, n, r, i) } return "string" === typeof e ? (Te(void 0 !== kr[e], "Invalid easing type '".concat(e, "'")), kr[e]) : e },
            Sr = (e, t) => n => Boolean(Ht(n) && _t.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
            Er = (e, t, n) => r => { if (!Ht(r)) return r; const [i, a, s, o] = r.match(zt); return {
                    [e]: parseFloat(i), [t]: parseFloat(a), [n]: parseFloat(s), alpha: void 0 !== o ? parseFloat(o) : 1 } },
            Pr = {...Vt, transform: e => Math.round((e => At(0, 255, e))(e)) },
            Mr = { test: Sr("rgb", "red"), parse: Er("red", "green", "blue"), transform: e => { let { red: t, green: n, blue: r, alpha: i = 1 } = e; return "rgba(" + Pr.transform(t) + ", " + Pr.transform(n) + ", " + Pr.transform(r) + ", " + Dt(Rt.transform(i)) + ")" } }; const Fr = { test: Sr("#"), parse: function(e) { let t = "",
                        n = "",
                        r = "",
                        i = ""; return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), { red: parseInt(t, 16), green: parseInt(n, 16), blue: parseInt(r, 16), alpha: i ? parseInt(i, 16) / 255 : 1 } }, transform: Mr.transform },
            Lr = { test: Sr("hsl", "hue"), parse: Er("hue", "saturation", "lightness"), transform: e => { let { hue: t, saturation: n, lightness: r, alpha: i = 1 } = e; return "hsla(" + Math.round(t) + ", " + Zt.transform(Dt(n)) + ", " + Zt.transform(Dt(r)) + ", " + Dt(Rt.transform(i)) + ")" } },
            Tr = { test: e => Mr.test(e) || Fr.test(e) || Lr.test(e), parse: e => Mr.test(e) ? Mr.parse(e) : Lr.test(e) ? Lr.parse(e) : Fr.parse(e), transform: e => Ht(e) ? e : e.hasOwnProperty("red") ? Mr.transform(e) : Lr.transform(e) },
            Ar = (e, t, n) => -n * e + n * t + e;

        function Vr(e, t, n) { return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e } const Rr = (e, t, n) => { const r = e * e; return Math.sqrt(Math.max(0, n * (t * t - r) + r)) },
            Br = [Fr, Mr, Lr];

        function Dr(e) { const t = (n = e, Br.find((e => e.test(n)))); var n;
            Te(Boolean(t), "'".concat(e, "' is not an animatable color. Use the equivalent color code instead.")); let r = t.parse(e); return t === Lr && (r = function(e) { let { hue: t, saturation: n, lightness: r, alpha: i } = e;
                t /= 360, n /= 100, r /= 100; let a = 0,
                    s = 0,
                    o = 0; if (n) { const e = r < .5 ? r * (1 + n) : r + n - r * n,
                        i = 2 * r - e;
                    a = Vr(i, e, t + 1 / 3), s = Vr(i, e, t), o = Vr(i, e, t - 1 / 3) } else a = s = o = r; return { red: Math.round(255 * a), green: Math.round(255 * s), blue: Math.round(255 * o), alpha: i } }(r)), r } const zr = (e, t) => { const n = Dr(e),
                r = Dr(t),
                i = {...n }; return e => (i.red = Rr(n.red, r.red, e), i.green = Rr(n.green, r.green, e), i.blue = Rr(n.blue, r.blue, e), i.alpha = Ar(n.alpha, r.alpha, e), Mr.transform(i)) }; const Or = { regex: /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, countKey: "Vars", token: "${v}", parse: ge },
            _r = { regex: Ot, countKey: "Colors", token: "${c}", parse: Tr.parse },
            Hr = { regex: zt, countKey: "Numbers", token: "${n}", parse: Vt.parse };

        function Ir(e, t) { let { regex: n, countKey: r, token: i, parse: a } = t; const s = e.tokenised.match(n);
            s && (e["num" + r] = s.length, e.tokenised = e.tokenised.replace(n, i), e.values.push(...s.map(a))) }

        function Ur(e) { const t = e.toString(),
                n = { value: t, tokenised: t, values: [], numVars: 0, numColors: 0, numNumbers: 0 }; return n.value.includes("var(--") && Ir(n, Or), Ir(n, _r), Ir(n, Hr), n }

        function Zr(e) { return Ur(e).values }

        function Wr(e) { const { values: t, numColors: n, numVars: r, tokenised: i } = Ur(e), a = t.length; return e => { let t = i; for (let i = 0; i < a; i++) t = i < r ? t.replace(Or.token, e[i]) : i < r + n ? t.replace(_r.token, Tr.transform(e[i])) : t.replace(Hr.token, Dt(e[i])); return t } } const $r = e => "number" === typeof e ? 0 : e; const Gr = { test: function(e) { var t, n; return isNaN(e) && Ht(e) && ((null === (t = e.match(zt)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (n = e.match(Ot)) || void 0 === n ? void 0 : n.length) || 0) > 0 }, parse: Zr, createTransformer: Wr, getAnimatableNone: function(e) { const t = Zr(e); return Wr(e)(t.map($r)) } },
            Yr = (e, t) => n => "".concat(n > 0 ? t : e);

        function qr(e, t) { return "number" === typeof e ? n => Ar(e, t, n) : Tr.test(e) ? zr(e, t) : e.startsWith("var(") ? Yr(e, t) : Kr(e, t) } const Xr = (e, t) => { const n = [...e],
                    r = n.length,
                    i = e.map(((e, n) => qr(e, t[n]))); return e => { for (let t = 0; t < r; t++) n[t] = i[t](e); return n } },
            Qr = (e, t) => { const n = {...e, ...t },
                    r = {}; for (const i in n) void 0 !== e[i] && void 0 !== t[i] && (r[i] = qr(e[i], t[i])); return e => { for (const t in r) n[t] = r[t](e); return n } },
            Kr = (e, t) => { const n = Gr.createTransformer(t),
                    r = Ur(e),
                    i = Ur(t); return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? Rn(Xr(r.values, i.values), n) : (Le(!0, "Complex values '".concat(e, "' and '").concat(t, "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.")), Yr(e, t)) },
            Jr = (e, t, n) => { const r = t - e; return 0 === r ? 1 : (n - e) / r },
            ei = (e, t) => n => Ar(e, t, n);

        function ti(e, t, n) { const r = [],
                i = n || ("number" === typeof(a = e[0]) ? ei : "string" === typeof a ? Tr.test(a) ? zr : Kr : Array.isArray(a) ? Xr : "object" === typeof a ? Qr : ei); var a; const s = e.length - 1; for (let o = 0; o < s; o++) { let n = i(e[o], e[o + 1]); if (t) { const e = Array.isArray(t) ? t[o] || ge : t;
                    n = Rn(e, n) }
                r.push(n) } return r }

        function ni(e, t) { let { clamp: n = !0, ease: r, mixer: i } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; const a = e.length; if (Te(a === t.length, "Both input and output ranges must be the same length"), 1 === a) return () => t[0];
            e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse()); const s = ti(t, r, i),
                o = s.length,
                l = t => { let n = 0; if (o > 1)
                        for (; n < e.length - 2 && !(t < e[n + 1]); n++); const r = Jr(e[n], e[n + 1], t); return s[n](r) }; return n ? t => l(At(e[0], e[a - 1], t)) : l }

        function ri(e) { const t = [0]; return function(e, t) { const n = e[e.length - 1]; for (let r = 1; r <= t; r++) { const i = Jr(0, t, r);
                    e.push(Ar(n, 1, i)) } }(t, e.length - 1), t }

        function ii(e) { let { duration: t = 300, keyframes: n, times: r, ease: i = "easeInOut" } = e; const a = mr(i) ? i.map(Nr) : Nr(i),
                s = { done: !1, value: n[0] },
                o = function(e, t) { return e.map((e => e * t)) }(r && r.length === n.length ? r : ri(n), t),
                l = ni(o, n, { ease: Array.isArray(a) ? a : (c = n, u = a, c.map((() => u || pr)).splice(0, c.length - 1)) }); var c, u; return { calculatedDuration: t, next: e => (s.value = l(e), s.done = e >= t, s) } }

        function ai(e, t) { return t ? e * (1e3 / t) : 0 } const si = 5;

        function oi(e, t, n) { const r = Math.max(t - si, 0); return ai(n - e(r), t - r) } const li = .001,
            ci = .01,
            ui = 10,
            di = .05,
            fi = 1;

        function hi(e) { let t, n, { duration: r = 800, bounce: i = .25, velocity: a = 0, mass: s = 1 } = e;
            Le(r <= er(ui), "Spring duration must be 10 seconds or less"); let o = 1 - i;
            o = At(di, fi, o), r = At(ci, ui, tr(r)), o < 1 ? (t = e => { const t = e * o,
                    n = t * r,
                    i = t - a,
                    s = mi(e, o),
                    l = Math.exp(-n); return li - i / s * l }, n = e => { const n = e * o * r,
                    i = n * a + a,
                    s = Math.pow(o, 2) * Math.pow(e, 2) * r,
                    l = Math.exp(-n),
                    c = mi(Math.pow(e, 2), o); return (-t(e) + li > 0 ? -1 : 1) * ((i - s) * l) / c }) : (t = e => Math.exp(-e * r) * ((e - a) * r + 1) - li, n = e => Math.exp(-e * r) * (r * r * (a - e))); const l = function(e, t, n) { let r = n; for (let i = 1; i < pi; i++) r -= e(r) / t(r); return r }(t, n, 5 / r); if (r = er(r), isNaN(l)) return { stiffness: 100, damping: 10, duration: r }; { const e = Math.pow(l, 2) * s; return { stiffness: e, damping: 2 * o * Math.sqrt(s * e), duration: r } } } const pi = 12;

        function mi(e, t) { return e * Math.sqrt(1 - t * t) } const xi = ["duration", "bounce"],
            gi = ["stiffness", "damping", "mass"];

        function vi(e, t) { return t.some((t => void 0 !== e[t])) }

        function yi(e) { let { keyframes: t, restDelta: n, restSpeed: r, ...i } = e; const a = t[0],
                s = t[t.length - 1],
                o = { done: !1, value: a },
                { stiffness: l, damping: c, mass: u, velocity: d, duration: f, isResolvedFromDuration: h } = function(e) { let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e }; if (!vi(e, gi) && vi(e, xi)) { const n = hi(e);
                        t = {...t, ...n, velocity: 0, mass: 1 }, t.isResolvedFromDuration = !0 } return t }(i),
                p = d ? -tr(d) : 0,
                m = c / (2 * Math.sqrt(l * u)),
                x = s - a,
                g = tr(Math.sqrt(l / u)),
                v = Math.abs(x) < 5; let y; if (r || (r = v ? .01 : 2), n || (n = v ? .005 : .5), m < 1) { const e = mi(g, m);
                y = t => { const n = Math.exp(-m * g * t); return s - n * ((p + m * g * x) / e * Math.sin(e * t) + x * Math.cos(e * t)) } } else if (1 === m) y = e => s - Math.exp(-g * e) * (x + (p + g * x) * e);
            else { const e = g * Math.sqrt(m * m - 1);
                y = t => { const n = Math.exp(-m * g * t),
                        r = Math.min(e * t, 300); return s - n * ((p + m * g * x) * Math.sinh(r) + e * x * Math.cosh(r)) / e } } return { calculatedDuration: h && f || null, next: e => { const t = y(e); if (h) o.done = e >= f;
                    else { let i = p;
                        0 !== e && (i = m < 1 ? oi(y, e, t) : 0); const a = Math.abs(i) <= r,
                            l = Math.abs(s - t) <= n;
                        o.done = a && l } return o.value = o.done ? s : t, o } } }

        function Ci(e) { let { keyframes: t, velocity: n = 0, power: r = .8, timeConstant: i = 325, bounceDamping: a = 10, bounceStiffness: s = 500, modifyTarget: o, min: l, max: c, restDelta: u = .5, restSpeed: d } = e; const f = t[0],
                h = { done: !1, value: f },
                p = e => void 0 === l ? c : void 0 === c || Math.abs(l - e) < Math.abs(c - e) ? l : c; let m = r * n; const x = f + m,
                g = void 0 === o ? x : o(x);
            g !== x && (m = g - f); const v = e => -m * Math.exp(-e / i),
                y = e => g + v(e),
                C = e => { const t = v(e),
                        n = y(e);
                    h.done = Math.abs(t) <= u, h.value = h.done ? g : n }; let w, b; const j = e => { var t;
                (t = h.value, void 0 !== l && t < l || void 0 !== c && t > c) && (w = e, b = yi({ keyframes: [h.value, p(h.value)], velocity: oi(y, e, h.value), damping: a, stiffness: s, restDelta: u, restSpeed: d })) }; return j(0), { calculatedDuration: null, next: e => { let t = !1; return b || void 0 !== w || (t = !0, C(e), j(e)), void 0 !== w && e > w ? b.next(e - w) : (!t && C(e), h) } } } const wi = e => { const t = t => { let { timestamp: n } = t; return e(n) }; return { start: () => Ce.update(t, !0), stop: () => we(t), now: () => be.isProcessing ? be.timestamp : performance.now() } },
            bi = 2e4;

        function ji(e) { let t = 0; let n = e.next(t); for (; !n.done && t < bi;) t += 50, n = e.next(t); return t >= bi ? 1 / 0 : t } const ki = { decay: Ci, inertia: Ci, tween: ii, keyframes: ii, spring: yi };

        function Ni(e) { let t, n, { autoplay: r = !0, delay: i = 0, driver: a = wi, keyframes: s, type: o = "keyframes", repeat: l = 0, repeatDelay: c = 0, repeatType: u = "loop", onPlay: d, onStop: f, onComplete: h, onUpdate: p, ...m } = e,
                x = 1,
                g = !1; const v = () => { n = new Promise((e => { t = e })) }; let y;
            v(); const C = ki[o] || ii; let w;
            C !== ii && "number" !== typeof s[0] && (w = ni([0, 100], s, { clamp: !1 }), s = [0, 100]); const b = C({...m, keyframes: s }); let j; "mirror" === u && (j = C({...m, keyframes: [...s].reverse(), velocity: -(m.velocity || 0) })); let k = "idle",
                N = null,
                S = null,
                E = null;
            null === b.calculatedDuration && l && (b.calculatedDuration = ji(b)); const { calculatedDuration: P } = b; let M = 1 / 0,
                F = 1 / 0;
            null !== P && (M = P + c, F = M * (l + 1) - c); let L = 0; const T = e => { if (null === S) return;
                    x > 0 && (S = Math.min(S, e)), x < 0 && (S = Math.min(e - F / x, S)), L = null !== N ? N : Math.round(e - S) * x; const t = L - i * (x >= 0 ? 1 : -1),
                        n = x >= 0 ? t < 0 : t > F;
                    L = Math.max(t, 0), "finished" === k && null === N && (L = F); let r = L,
                        a = b; if (l) { const e = L / M; let t = Math.floor(e),
                            n = e % 1;!n && e >= 1 && (n = 1), 1 === n && t--, t = Math.min(t, l + 1); const i = Boolean(t % 2);
                        i && ("reverse" === u ? (n = 1 - n, c && (n -= c / M)) : "mirror" === u && (a = j)); let s = At(0, 1, n);
                        L > F && (s = "reverse" === u && i ? 1 : 0), r = s * M } const o = n ? { done: !1, value: s[0] } : a.next(r);
                    w && (o.value = w(o.value)); let { done: d } = o;
                    n || null === P || (d = x >= 0 ? L >= F : L <= 0); const f = null === N && ("finished" === k || "running" === k && d); return p && p(o.value), f && R(), o },
                A = () => { y && y.stop(), y = void 0 },
                V = () => { k = "idle", A(), t(), v(), S = E = null },
                R = () => { k = "finished", h && h(), A(), t() },
                B = () => { if (g) return;
                    y || (y = a(T)); const e = y.now();
                    d && d(), null !== N ? S = e - N : S && "finished" !== k || (S = e), "finished" === k && v(), E = S, N = null, k = "running", y.start() };
            r && B(); const D = { then: (e, t) => n.then(e, t), get time() { return tr(L) }, set time(e) { e = er(e), L = e, null === N && y && 0 !== x ? S = y.now() - e / x : N = e }, get duration() { const e = null === b.calculatedDuration ? ji(b) : b.calculatedDuration; return tr(e) }, get speed() { return x }, set speed(e) { e !== x && y && (x = e, D.time = tr(L)) }, get state() { return k }, play: B, pause: () => { k = "paused", N = L }, stop: () => { g = !0, "idle" !== k && (k = "idle", f && f(), V()) }, cancel: () => { null !== E && T(E), V() }, complete: () => { k = "finished" }, sample: e => (S = 0, T(e)) }; return D } const Si = function(e) { let t; return () => (void 0 === t && (t = e()), t) }((() => Object.hasOwnProperty.call(Element.prototype, "animate"))),
            Ei = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]);

        function Pi(e, t, n) { let { onUpdate: r, onComplete: i, ...a } = n; if (!(Si() && Ei.has(t) && !a.repeatDelay && "mirror" !== a.repeatType && 0 !== a.damping && "inertia" !== a.type)) return !1; let s, o, l = !1; const c = () => { o = new Promise((e => { s = e })) };
            c(); let { keyframes: u, duration: d = 300, ease: f, times: h } = a; if (((e, t) => "spring" === t.type || "backgroundColor" === e || !ir(t.ease))(t, a)) { const e = Ni({...a, repeat: 0, delay: 0 }); let t = { done: !1, value: u[0] }; const n = []; let r = 0; for (; !t.done && r < 2e4;) t = e.sample(r), n.push(t.value), r += 10;
                h = void 0, u = n, d = r - 10, f = "linear" } const p = function(e, t, n) { let { delay: r = 0, duration: i, repeat: a = 0, repeatType: s = "loop", ease: o, times: l } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}; const c = {
                        [t]: n };
                    l && (c.offset = l); const u = or(o); return Array.isArray(u) && (c.easing = u), e.animate(c, { delay: r, duration: i, easing: Array.isArray(u) ? "linear" : u, fill: "both", iterations: a + 1, direction: "reverse" === s ? "alternate" : "normal" }) }(e.owner.current, t, u, {...a, duration: d, ease: f, times: h }),
                m = () => p.cancel(),
                x = () => { Ce.update(m), s(), c() };
            p.onfinish = () => { e.set(function(e, t) { let { repeat: n, repeatType: r = "loop" } = t; return e[n && "loop" !== r && n % 2 === 1 ? 0 : e.length - 1] }(u, a)), i && i(), x() }; return { then: (e, t) => o.then(e, t), attachTimeline: e => (p.timeline = e, p.onfinish = null, ge), get time() { return tr(p.currentTime || 0) }, set time(e) { p.currentTime = er(e) }, get speed() { return p.playbackRate }, set speed(e) { p.playbackRate = e }, get duration() { return tr(d) }, play: () => { l || (p.play(), we(m)) }, pause: () => p.pause(), stop: () => { if (l = !0, "idle" === p.playState) return; const { currentTime: t } = p; if (t) { const n = Ni({...a, autoplay: !1 });
                        e.setWithVelocity(n.sample(t - 10).value, n.sample(t).value, 10) }
                    x() }, complete: () => p.finish(), cancel: x } } const Mi = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
            Fi = { type: "keyframes", duration: .8 },
            Li = { type: "keyframes", ease: [.25, .1, .35, 1], duration: .3 },
            Ti = (e, t) => { let { keyframes: n } = t; return n.length > 2 ? Fi : kt.has(e) ? e.startsWith("scale") ? { type: "spring", stiffness: 550, damping: 0 === n[1] ? 2 * Math.sqrt(550) : 30, restSpeed: 10 } : Mi : Li },
            Ai = (e, t) => "zIndex" !== e && (!("number" !== typeof t && !Array.isArray(t)) || !("string" !== typeof t || !Gr.test(t) && "0" !== t || t.startsWith("url("))),
            Vi = new Set(["brightness", "contrast", "saturate", "opacity"]);

        function Ri(e) { const [t, n] = e.slice(0, -1).split("("); if ("drop-shadow" === t) return e; const [r] = n.match(zt) || []; if (!r) return e; const i = n.replace(r, ""); let a = Vi.has(t) ? 1 : 0; return r !== n && (a *= 100), t + "(" + a + i + ")" } const Bi = /([a-z-]*)\(.*?\)/g,
            Di = {...Gr, getAnimatableNone: e => { const t = e.match(Bi); return t ? t.map(Ri).join(" ") : e } },
            zi = {...Xt, color: Tr, backgroundColor: Tr, outlineColor: Tr, fill: Tr, stroke: Tr, borderColor: Tr, borderTopColor: Tr, borderRightColor: Tr, borderBottomColor: Tr, borderLeftColor: Tr, filter: Di, WebkitFilter: Di },
            Oi = e => zi[e];

        function _i(e, t) { let n = Oi(e); return n !== Di && (n = Gr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0 } const Hi = e => /^0[^.\s]+$/.test(e);

        function Ii(e) { return "number" === typeof e ? 0 === e : null !== e ? "none" === e || "0" === e || Hi(e) : void 0 }

        function Ui(e, t) { return e[t] || e.default || e } const Zi = function(e, t, n) { let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}; return i => { const a = Ui(r, e) || {},
                    s = a.delay || r.delay || 0; let { elapsed: o = 0 } = r;
                o -= er(s); const l = function(e, t, n, r) { const i = Ai(t, n); let a;
                        a = Array.isArray(n) ? [...n] : [null, n]; const s = void 0 !== r.from ? r.from : e.get(); let o; const l = []; for (let c = 0; c < a.length; c++) null === a[c] && (a[c] = 0 === c ? s : a[c - 1]), Ii(a[c]) && l.push(c), "string" === typeof a[c] && "none" !== a[c] && "0" !== a[c] && (o = a[c]); if (i && l.length && o)
                            for (let c = 0; c < l.length; c++) a[l[c]] = _i(t, o); return a }(t, e, n, a),
                    c = l[0],
                    u = l[l.length - 1],
                    d = Ai(e, c),
                    f = Ai(e, u);
                Le(d === f, "You are trying to animate ".concat(e, ' from "').concat(c, '" to "').concat(u, '". ').concat(c, " is not an animatable value - to enable this animation set ").concat(c, " to a value animatable to ").concat(u, " via the `style` property.")); let h = { keyframes: l, velocity: t.getVelocity(), ease: "easeOut", ...a, delay: -o, onUpdate: e => { t.set(e), a.onUpdate && a.onUpdate(e) }, onComplete: () => { i(), a.onComplete && a.onComplete() } }; if (function(e) { let { when: t, delay: n, delayChildren: r, staggerChildren: i, staggerDirection: a, repeat: s, repeatType: o, repeatDelay: l, from: c, elapsed: u, ...d } = e; return !!Object.keys(d).length }(a) || (h = {...h, ...Ti(e, h) }), h.duration && (h.duration = er(h.duration)), h.repeatDelay && (h.repeatDelay = er(h.repeatDelay)), !d || !f || nr || !1 === a.type) return function(e) { let { keyframes: t, delay: n, onUpdate: r, onComplete: i } = e; const a = () => (r && r(t[t.length - 1]), i && i(), { time: 0, speed: 1, duration: 0, play: ge, pause: ge, stop: ge, then: e => (e(), Promise.resolve()), cancel: ge, complete: ge }); return n ? Ni({ keyframes: [0, 1], duration: 0, delay: n, onComplete: a }) : a() }(nr ? {...h, delay: 0 } : h); if (!r.isHandoff && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) { const n = Pi(t, e, h); if (n) return n } return Ni(h) } };

        function Wi(e) { return Boolean(St(e) && e.add) } const $i = e => /^\-?\d*\.?\d+$/.test(e);

        function Gi(e, t) {-1 === e.indexOf(t) && e.push(t) }

        function Yi(e, t) { const n = e.indexOf(t);
            n > -1 && e.splice(n, 1) }
        class qi { constructor() { this.subscriptions = [] }
            add(e) { return Gi(this.subscriptions, e), () => Yi(this.subscriptions, e) }
            notify(e, t, n) { const r = this.subscriptions.length; if (r)
                    if (1 === r) this.subscriptions[0](e, t, n);
                    else
                        for (let i = 0; i < r; i++) { const r = this.subscriptions[i];
                            r && r(e, t, n) } }
            getSize() { return this.subscriptions.length }
            clear() { this.subscriptions.length = 0 } } const Xi = { current: void 0 };
        class Qi { constructor(e) { var t = this; let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; var r;
                this.version = "10.16.16", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = function(e) { let n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    t.prev = t.current, t.current = e; const { delta: r, timestamp: i } = be;
                    t.lastUpdated !== i && (t.timeDelta = r, t.lastUpdated = i, Ce.postRender(t.scheduleVelocityCheck)), t.prev !== t.current && t.events.change && t.events.change.notify(t.current), t.events.velocityChange && t.events.velocityChange.notify(t.getVelocity()), n && t.events.renderRequest && t.events.renderRequest.notify(t.current) }, this.scheduleVelocityCheck = () => Ce.postRender(this.velocityCheck), this.velocityCheck = e => { let { timestamp: t } = e;
                    t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity())) }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = (r = this.current, !isNaN(parseFloat(r))), this.owner = n.owner }
            onChange(e) { return this.on("change", e) }
            on(e, t) { this.events[e] || (this.events[e] = new qi); const n = this.events[e].add(t); return "change" === e ? () => { n(), Ce.read((() => { this.events.change.getSize() || this.stop() })) } : n }
            clearListeners() { for (const e in this.events) this.events[e].clear() }
            attach(e, t) { this.passiveEffect = e, this.stopPassiveEffect = t }
            set(e) { let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t) }
            setWithVelocity(e, t, n) { this.set(t), this.prev = e, this.timeDelta = n }
            jump(e) { this.updateAndNotify(e), this.prev = e, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect() }
            get() { return Xi.current && Xi.current.push(this), this.current }
            getPrevious() { return this.prev }
            getVelocity() { return this.canTrackVelocity ? ai(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0 }
            start(e) { return this.stop(), new Promise((t => { this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify() })).then((() => { this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation() })) }
            stop() { this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation() }
            isAnimating() { return !!this.animation }
            clearAnimation() { delete this.animation }
            destroy() { this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect() } }

        function Ki(e, t) { return new Qi(e, t) } const Ji = e => t => t.test(e),
            ea = [Vt, Wt, Zt, Ut, Gt, $t, { test: e => "auto" === e, parse: e => e }],
            ta = e => ea.find(Ji(e)),
            na = [...ea, Tr, Gr];

        function ra(e, t, n) { e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ki(n)) }

        function ia(e, t) { const n = Jn(e, t); let { transitionEnd: r = {}, transition: i = {}, ...a } = n ? e.makeTargetAnimatable(n, !1) : {};
            a = {...a, ...r }; for (const s in a) { ra(e, s, jn(a[s])) } }

        function aa(e, t) { if (!t) return; return (t[e] || t.default || t).from }

        function sa(e, t) { let { protectedKeys: n, needsAnimating: r } = e; const i = n.hasOwnProperty(t) && !0 !== r[t]; return r[t] = !1, i }

        function oa(e, t) { const n = e.get(); if (!Array.isArray(t)) return n !== t; for (let r = 0; r < t.length; r++)
                if (t[r] !== n) return !0 }

        function la(e, t) { let { delay: n = 0, transitionOverride: r, type: i } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { transition: a = e.getDefaultTransition(), transitionEnd: s, ...o } = e.makeTargetAnimatable(t); const l = e.getValue("willChange");
            r && (a = r); const c = [],
                u = i && e.animationState && e.animationState.getState()[i]; for (const d in o) { const t = e.getValue(d),
                    r = o[d]; if (!t || void 0 === r || u && sa(u, d)) continue; const i = { delay: n, elapsed: 0, ...Ui(a || {}, d) }; if (window.HandoffAppearAnimations) { const n = e.getProps()[rt]; if (n) { const e = window.HandoffAppearAnimations(n, d, t, Ce);
                        null !== e && (i.elapsed = e, i.isHandoff = !0) } } let s = !i.isHandoff && !oa(t, r); if ("spring" === i.type && (t.getVelocity() || i.velocity) && (s = !1), t.animation && (s = !1), s) continue;
                t.start(Zi(d, t, r, e.shouldReduceMotion && kt.has(d) ? { type: !1 } : i)); const f = t.animation;
                Wi(l) && (l.add(d), f.then((() => l.remove(d)))), c.push(f) } return s && Promise.all(c).then((() => { s && ia(e, s) })), c }

        function ca(e, t) { let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; const r = Jn(e, t, n.custom); let { transition: i = e.getDefaultTransition() || {} } = r || {};
            n.transitionOverride && (i = n.transitionOverride); const a = r ? () => Promise.all(la(e, r, n)) : () => Promise.resolve(),
                s = e.variantChildren && e.variantChildren.size ? function() { let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0; const { delayChildren: a = 0, staggerChildren: s, staggerDirection: o } = i; return function(e, t) { let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                            a = arguments.length > 5 ? arguments[5] : void 0; const s = [],
                            o = (e.variantChildren.size - 1) * r,
                            l = 1 === i ? function() { return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) * r } : function() { return o - (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) * r }; return Array.from(e.variantChildren).sort(ua).forEach(((e, r) => { e.notify("AnimationStart", t), s.push(ca(e, t, {...a, delay: n + l(r) }).then((() => e.notify("AnimationComplete", t)))) })), Promise.all(s) }(e, t, a + r, s, o, n) } : () => Promise.resolve(),
                { when: o } = i; if (o) { const [e, t] = "beforeChildren" === o ? [a, s] : [s, a]; return e().then((() => t())) } return Promise.all([a(), s(n.delay)]) }

        function ua(e, t) { return e.sortNodePosition(t) } const da = [...ot].reverse(),
            fa = ot.length;

        function ha(e) { return t => Promise.all(t.map((t => { let { animation: n, options: r } = t; return function(e, t) { let n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; if (e.notify("AnimationStart", t), Array.isArray(t)) { const i = t.map((t => ca(e, t, r)));
                        n = Promise.all(i) } else if ("string" === typeof t) n = ca(e, t, r);
                    else { const i = "function" === typeof t ? Jn(e, t, r.custom) : t;
                        n = Promise.all(la(e, i, r)) } return n.then((() => e.notify("AnimationComplete", t))) }(e, n, r) }))) }

        function pa(e) { let t = ha(e); const n = { animate: xa(!0), whileInView: xa(), whileHover: xa(), whileTap: xa(), whileDrag: xa(), whileFocus: xa(), exit: xa() }; let r = !0; const i = (t, n) => { const r = Jn(e, n); if (r) { const { transition: e, transitionEnd: n, ...i } = r;
                    t = {...t, ...i, ...n } } return t };

            function a(a, s) { const o = e.getProps(),
                    l = e.getVariantContext(!0) || {},
                    c = [],
                    u = new Set; let d = {},
                    f = 1 / 0; for (let t = 0; t < fa; t++) { const h = da[t],
                        p = n[h],
                        m = void 0 !== o[h] ? o[h] : l[h],
                        x = at(m),
                        g = h === s ? p.isActive : null;!1 === g && (f = t); let v = m === l[h] && m !== o[h] && x; if (v && r && e.manuallyAnimateOnMount && (v = !1), p.protectedKeys = {...d }, !p.isActive && null === g || !m && !p.prevProp || st(m) || "boolean" === typeof m) continue; const y = ma(p.prevProp, m); let C = y || h === s && p.isActive && !v && x || t > f && x; const w = Array.isArray(m) ? m : [m]; let b = w.reduce(i, {});!1 === g && (b = {}); const { prevResolvedValues: j = {} } = p, k = {...j, ...b }, N = e => { C = !0, u.delete(e), p.needsAnimating[e] = !0 }; for (const e in k) { const t = b[e],
                            n = j[e];
                        d.hasOwnProperty(e) || (t !== n ? wn(t) && wn(n) ? !Kn(t, n) || y ? N(e) : p.protectedKeys[e] = !0 : void 0 !== t ? N(e) : u.add(e) : void 0 !== t && u.has(e) ? N(e) : p.protectedKeys[e] = !0) }
                    p.prevProp = m, p.prevResolvedValues = b, p.isActive && (d = {...d, ...b }), r && e.blockInitialAnimation && (C = !1), C && !v && c.push(...w.map((e => ({ animation: e, options: { type: h, ...a } })))) } if (u.size) { const t = {};
                    u.forEach((n => { const r = e.getBaseTarget(n);
                        void 0 !== r && (t[n] = r) })), c.push({ animation: t }) } let h = Boolean(c.length); return !r || !1 !== o.initial && o.initial !== o.animate || e.manuallyAnimateOnMount || (h = !1), r = !1, h ? t(c) : Promise.resolve() } return { animateChanges: a, setActive: function(t, r, i) { var s; if (n[t].isActive === r) return Promise.resolve();
                    null === (s = e.variantChildren) || void 0 === s || s.forEach((e => { var n; return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, r) })), n[t].isActive = r; const o = a(i, t); for (const e in n) n[e].protectedKeys = {}; return o }, setAnimateFunction: function(n) { t = n(e) }, getState: () => n } }

        function ma(e, t) { return "string" === typeof t ? t !== e : !!Array.isArray(t) && !Kn(t, e) }

        function xa() { return { isActive: arguments.length > 0 && void 0 !== arguments[0] && arguments[0], protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} } } let ga = 0; const va = { animation: { Feature: class extends Hn { constructor(e) { super(e), e.animationState || (e.animationState = pa(e)) }
                        updateAnimationControlsSubscription() { const { animate: e } = this.node.getProps();
                            this.unmount(), st(e) && (this.unmount = e.subscribe(this.node)) }
                        mount() { this.updateAnimationControlsSubscription() }
                        update() { const { animate: e } = this.node.getProps(), { animate: t } = this.node.prevProps || {};
                            e !== t && this.updateAnimationControlsSubscription() }
                        unmount() {} } }, exit: { Feature: class extends Hn { constructor() { super(...arguments), this.id = ga++ }
                        update() { if (!this.node.presenceContext) return; const { isPresent: e, onExitComplete: t, custom: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {}; if (!this.node.animationState || e === r) return; const i = this.node.animationState.setActive("exit", !e, { custom: null !== n && void 0 !== n ? n : this.node.getProps().custom });
                            t && !e && i.then((() => t(this.id))) }
                        mount() { const { register: e } = this.node.presenceContext || {};
                            e && (this.unmount = e(this.id)) }
                        unmount() {} } } },
            ya = (e, t) => Math.abs(e - t);
        class Ca { constructor(e, t) { let { transformPagePoint: n, contextWindow: r } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => { if (!this.lastMoveEvent || !this.lastMoveEventInfo) return; const e = ja(this.lastMoveEventInfo, this.history),
                            t = null !== this.startEvent,
                            n = function(e, t) { const n = ya(e.x, t.x),
                                    r = ya(e.y, t.y); return Math.sqrt(n ** 2 + r ** 2) }(e.offset, { x: 0, y: 0 }) >= 3; if (!t && !n) return; const { point: r } = e, { timestamp: i } = be;
                        this.history.push({...r, timestamp: i }); const { onStart: a, onMove: s } = this.handlers;
                        t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), s && s(this.lastMoveEvent, e) }, this.handlePointerMove = (e, t) => { this.lastMoveEvent = e, this.lastMoveEventInfo = wa(t, this.transformPagePoint), Ce.update(this.updatePoint, !0) }, this.handlePointerUp = (e, t) => { if (this.end(), !this.lastMoveEvent || !this.lastMoveEventInfo) return; const { onEnd: n, onSessionEnd: r } = this.handlers, i = ja("pointercancel" === e.type ? this.lastMoveEventInfo : wa(t, this.transformPagePoint), this.history);
                        this.startEvent && n && n(e, i), r && r(e, i) }, !Fn(e)) return;
                this.handlers = t, this.transformPagePoint = n, this.contextWindow = r || window; const i = wa(Ln(e), this.transformPagePoint),
                    { point: a } = i,
                    { timestamp: s } = be;
                this.history = [{...a, timestamp: s }]; const { onSessionStart: o } = t;
                o && o(e, ja(i, this.history)), this.removeListeners = Rn(An(this.contextWindow, "pointermove", this.handlePointerMove), An(this.contextWindow, "pointerup", this.handlePointerUp), An(this.contextWindow, "pointercancel", this.handlePointerUp)) }
            updateHandlers(e) { this.handlers = e }
            end() { this.removeListeners && this.removeListeners(), we(this.updatePoint) } }

        function wa(e, t) { return t ? { point: t(e.point) } : e }

        function ba(e, t) { return { x: e.x - t.x, y: e.y - t.y } }

        function ja(e, t) { let { point: n } = e; return { point: n, delta: ba(n, Na(t)), offset: ba(n, ka(t)), velocity: Sa(t, .1) } }

        function ka(e) { return e[0] }

        function Na(e) { return e[e.length - 1] }

        function Sa(e, t) { if (e.length < 2) return { x: 0, y: 0 }; let n = e.length - 1,
                r = null; const i = Na(e); for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > er(t)));) n--; if (!r) return { x: 0, y: 0 }; const a = tr(i.timestamp - r.timestamp); if (0 === a) return { x: 0, y: 0 }; const s = { x: (i.x - r.x) / a, y: (i.y - r.y) / a }; return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s }

        function Ea(e) { return e.max - e.min }

        function Pa(e) { let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .01; return Math.abs(e - t) <= n }

        function Ma(e, t, n) { let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
            e.origin = r, e.originPoint = Ar(t.min, t.max, e.origin), e.scale = Ea(n) / Ea(t), (Pa(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = Ar(n.min, n.max, e.origin) - e.originPoint, (Pa(e.translate) || isNaN(e.translate)) && (e.translate = 0) }

        function Fa(e, t, n, r) { Ma(e.x, t.x, n.x, r ? r.originX : void 0), Ma(e.y, t.y, n.y, r ? r.originY : void 0) }

        function La(e, t, n) { e.min = n.min + t.min, e.max = e.min + Ea(t) }

        function Ta(e, t, n) { e.min = t.min - n.min, e.max = e.min + Ea(t) }

        function Aa(e, t, n) { Ta(e.x, t.x, n.x), Ta(e.y, t.y, n.y) }

        function Va(e, t, n) { return { min: void 0 !== t ? e.min + t : void 0, max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0 } }

        function Ra(e, t) { let n = t.min - e.min,
                r = t.max - e.max; return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r } } const Ba = .35;

        function Da(e, t, n) { return { min: za(e, t), max: za(e, n) } }

        function za(e, t) { return "number" === typeof e ? e : e[t] || 0 } const Oa = () => ({ x: { translate: 0, scale: 1, origin: 0, originPoint: 0 }, y: { translate: 0, scale: 1, origin: 0, originPoint: 0 } }),
            _a = () => ({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } });

        function Ha(e) { return [e("x"), e("y")] }

        function Ia(e) { let { top: t, left: n, right: r, bottom: i } = e; return { x: { min: n, max: r }, y: { min: t, max: i } } }

        function Ua(e) { return void 0 === e || 1 === e }

        function Za(e) { let { scale: t, scaleX: n, scaleY: r } = e; return !Ua(t) || !Ua(n) || !Ua(r) }

        function Wa(e) { return Za(e) || $a(e) || e.z || e.rotate || e.rotateX || e.rotateY }

        function $a(e) { return Ga(e.x) || Ga(e.y) }

        function Ga(e) { return e && "0%" !== e }

        function Ya(e, t, n) { return n + t * (e - n) }

        function qa(e, t, n, r, i) { return void 0 !== i && (e = Ya(e, i, r)), Ya(e, n, r) + t }

        function Xa(e) { let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                r = arguments.length > 3 ? arguments[3] : void 0,
                i = arguments.length > 4 ? arguments[4] : void 0;
            e.min = qa(e.min, t, n, r, i), e.max = qa(e.max, t, n, r, i) }

        function Qa(e, t) { let { x: n, y: r } = t;
            Xa(e.x, n.translate, n.scale, n.originPoint), Xa(e.y, r.translate, r.scale, r.originPoint) }

        function Ka(e) { return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1 }

        function Ja(e, t) { e.min = e.min + t, e.max = e.max + t }

        function es(e, t, n) { let [r, i, a] = n; const s = void 0 !== t[a] ? t[a] : .5,
                o = Ar(e.min, e.max, s);
            Xa(e, t[r], t[i], o, t.scale) } const ts = ["x", "scaleX", "originX"],
            ns = ["y", "scaleY", "originY"];

        function rs(e, t) { es(e.x, t, ts), es(e.y, t, ns) }

        function is(e, t) { return Ia(function(e, t) { if (!t) return e; const n = t({ x: e.left, y: e.top }),
                    r = t({ x: e.right, y: e.bottom }); return { top: n.y, left: n.x, bottom: r.y, right: r.x } }(e.getBoundingClientRect(), t)) } const as = e => { let { current: t } = e; return t ? t.ownerDocument.defaultView : null },
            ss = new WeakMap;
        class os { constructor(e) { this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = _a(), this.visualElement = e }
            start(e) { let { snapToCursor: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; const { presenceContext: n } = this.visualElement; if (n && !1 === n.isPresent) return;
                this.panSession = new Ca(e, { onSessionStart: e => { this.stopAnimation(), t && this.snapToCursor(Ln(e, "page").point) }, onStart: (e, t) => { const { drag: n, dragPropagation: r, onDragStart: i } = this.getProps(); if (n && !r && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = On(n), !this.openGlobalLock)) return;
                        this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Ha((e => { let t = this.getAxisMotionValue(e).get() || 0; if (Zt.test(t)) { const { projection: n } = this.visualElement; if (n && n.layout) { const r = n.layout.layoutBox[e]; if (r) { t = Ea(r) * (parseFloat(t) / 100) } } }
                            this.originPoint[e] = t })), i && Ce.update((() => i(e, t)), !1, !0); const { animationState: a } = this.visualElement;
                        a && a.setActive("whileDrag", !0) }, onMove: (e, t) => { const { dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: a } = this.getProps(); if (!n && !this.openGlobalLock) return; const { offset: s } = t; if (r && null === this.currentDirection) return this.currentDirection = function(e) { let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                                n = null;
                            Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"); return n }(s), void(null !== this.currentDirection && i && i(this.currentDirection));
                        this.updateAxis("x", t.point, s), this.updateAxis("y", t.point, s), this.visualElement.render(), a && a(e, t) }, onSessionEnd: (e, t) => this.stop(e, t) }, { transformPagePoint: this.visualElement.getTransformPagePoint(), contextWindow: as(this.visualElement) }) }
            stop(e, t) { const n = this.isDragging; if (this.cancel(), !n) return; const { velocity: r } = t;
                this.startAnimation(r); const { onDragEnd: i } = this.getProps();
                i && Ce.update((() => i(e, t))) }
            cancel() { this.isDragging = !1; const { projection: e, animationState: t } = this.visualElement;
                e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0; const { dragPropagation: n } = this.getProps();!n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), t && t.setActive("whileDrag", !1) }
            updateAxis(e, t, n) { const { drag: r } = this.getProps(); if (!n || !ls(e, r, this.currentDirection)) return; const i = this.getAxisMotionValue(e); let a = this.originPoint[e] + n[e];
                this.constraints && this.constraints[e] && (a = function(e, t, n) { let { min: r, max: i } = t; return void 0 !== r && e < r ? e = n ? Ar(r, e, n.min) : Math.max(e, r) : void 0 !== i && e > i && (e = n ? Ar(i, e, n.max) : Math.min(e, i)), e }(a, this.constraints[e], this.elastic[e])), i.set(a) }
            resolveConstraints() { var e; const { dragConstraints: t, dragElastic: n } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout, i = this.constraints;
                t && it(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !r) && function(e, t) { let { top: n, left: r, bottom: i, right: a } = t; return { x: Va(e.x, r, a), y: Va(e.y, n, i) } }(r.layoutBox, t), this.elastic = function() { let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ba; return !1 === e ? e = 0 : !0 === e && (e = Ba), { x: Da(e, "left", "right"), y: Da(e, "top", "bottom") } }(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && Ha((e => { this.getAxisMotionValue(e) && (this.constraints[e] = function(e, t) { const n = {}; return void 0 !== t.min && (n.min = t.min - e.min), void 0 !== t.max && (n.max = t.max - e.min), n }(r.layoutBox[e], this.constraints[e])) })) }
            resolveRefConstraints() { const { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps(); if (!e || !it(e)) return !1; const n = e.current;
                Te(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."); const { projection: r } = this.visualElement; if (!r || !r.layout) return !1; const i = function(e, t, n) { const r = is(e, n),
                        { scroll: i } = t; return i && (Ja(r.x, i.offset.x), Ja(r.y, i.offset.y)), r }(n, r.root, this.visualElement.getTransformPagePoint()); let a = function(e, t) { return { x: Ra(e.x, t.x), y: Ra(e.y, t.y) } }(r.layout.layoutBox, i); if (t) { const e = t(function(e) { let { x: t, y: n } = e; return { top: n.min, right: t.max, bottom: n.max, left: t.min } }(a));
                    this.hasMutatedConstraints = !!e, e && (a = Ia(e)) } return a }
            startAnimation(e) { const { drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), o = this.constraints || {}, l = Ha((s => { if (!ls(s, t, this.currentDirection)) return; let l = o && o[s] || {};
                    a && (l = { min: 0, max: 0 }); const c = r ? 200 : 1e6,
                        u = r ? 40 : 1e7,
                        d = { type: "inertia", velocity: n ? e[s] : 0, bounceStiffness: c, bounceDamping: u, timeConstant: 750, restDelta: 1, restSpeed: 10, ...i, ...l }; return this.startAxisValueAnimation(s, d) })); return Promise.all(l).then(s) }
            startAxisValueAnimation(e, t) { const n = this.getAxisMotionValue(e); return n.start(Zi(e, n, 0, t)) }
            stopAnimation() { Ha((e => this.getAxisMotionValue(e).stop())) }
            getAxisMotionValue(e) { const t = "_drag" + e.toUpperCase(),
                    n = this.visualElement.getProps(),
                    r = n[t]; return r || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0) }
            snapToCursor(e) { Ha((t => { const { drag: n } = this.getProps(); if (!ls(t, n, this.currentDirection)) return; const { projection: r } = this.visualElement, i = this.getAxisMotionValue(t); if (r && r.layout) { const { min: n, max: a } = r.layout.layoutBox[t];
                        i.set(e[t] - Ar(n, a, .5)) } })) }
            scalePositionWithinConstraints() { if (!this.visualElement.current) return; const { drag: e, dragConstraints: t } = this.getProps(), { projection: n } = this.visualElement; if (!it(t) || !n || !this.constraints) return;
                this.stopAnimation(); const r = { x: 0, y: 0 };
                Ha((e => { const t = this.getAxisMotionValue(e); if (t) { const n = t.get();
                        r[e] = function(e, t) { let n = .5; const r = Ea(e),
                                i = Ea(t); return i > r ? n = Jr(t.min, t.max - r, e.min) : r > i && (n = Jr(e.min, e.max - i, t.min)), At(0, 1, n) }({ min: n, max: n }, this.constraints[e]) } })); const { transformTemplate: i } = this.visualElement.getProps();
                this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), Ha((t => { if (!ls(t, e, null)) return; const n = this.getAxisMotionValue(t),
                        { min: i, max: a } = this.constraints[t];
                    n.set(Ar(i, a, r[t])) })) }
            addListeners() { if (!this.visualElement.current) return;
                ss.set(this.visualElement, this); const e = An(this.visualElement.current, "pointerdown", (e => { const { drag: t, dragListener: n = !0 } = this.getProps();
                        t && n && this.start(e) })),
                    t = () => { const { dragConstraints: e } = this.getProps();
                        it(e) && (this.constraints = this.resolveRefConstraints()) },
                    { projection: n } = this.visualElement,
                    r = n.addEventListener("measure", t);
                n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), t(); const i = Mn(window, "resize", (() => this.scalePositionWithinConstraints())),
                    a = n.addEventListener("didUpdate", (e => { let { delta: t, hasLayoutChanged: n } = e;
                        this.isDragging && n && (Ha((e => { const n = this.getAxisMotionValue(e);
                            n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate)) })), this.visualElement.render()) })); return () => { i(), e(), r(), a && a() } }
            getProps() { const e = this.visualElement.getProps(),
                    { drag: t = !1, dragDirectionLock: n = !1, dragPropagation: r = !1, dragConstraints: i = !1, dragElastic: a = Ba, dragMomentum: s = !0 } = e; return {...e, drag: t, dragDirectionLock: n, dragPropagation: r, dragConstraints: i, dragElastic: a, dragMomentum: s } } }

        function ls(e, t, n) { return (!0 === t || t === e) && (null === n || n === e) } const cs = e => (t, n) => { e && Ce.update((() => e(t, n))) }; const us = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };

        function ds(e, t) { return t.max === t.min ? 0 : e / (t.max - t.min) * 100 } const fs = { correct: (e, t) => { if (!t.target) return e; if ("string" === typeof e) { if (!Wt.test(e)) return e;
                        e = parseFloat(e) } const n = ds(e, t.target.x),
                        r = ds(e, t.target.y); return "".concat(n, "% ").concat(r, "%") } },
            hs = { correct: (e, t) => { let { treeScale: n, projectionDelta: r } = t; const i = e,
                        a = Gr.parse(e); if (a.length > 5) return i; const s = Gr.createTransformer(e),
                        o = "number" !== typeof a[0] ? 1 : 0,
                        l = r.x.scale * n.x,
                        c = r.y.scale * n.y;
                    a[0 + o] /= l, a[1 + o] /= c; const u = Ar(l, c, .5); return "number" === typeof a[2 + o] && (a[2 + o] /= u), "number" === typeof a[3 + o] && (a[3 + o] /= u), s(a) } };
        class ps extends t.Component { componentDidMount() { const { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props, { projection: i } = e; var a;
                a = xs, Object.assign(bt, a), i && (t.group && t.group.add(i), n && n.register && r && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", (() => { this.safeToRemove() })), i.setOptions({...i.options, onExitComplete: () => this.safeToRemove() })), us.hasEverUpdated = !0 }
            getSnapshotBeforeUpdate(e) { const { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props, a = n.projection; return a ? (a.isPresent = i, r || e.layoutDependency !== t || void 0 === t ? a.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? a.promote() : a.relegate() || Ce.postRender((() => { const e = a.getStack();
                    e && e.members.length || this.safeToRemove() }))), null) : null }
            componentDidUpdate() { const { projection: e } = this.props.visualElement;
                e && (e.root.didUpdate(), queueMicrotask((() => {!e.currentAnimation && e.isLead() && this.safeToRemove() }))) }
            componentWillUnmount() { const { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props, { projection: r } = e;
                r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r)) }
            safeToRemove() { const { safeToRemove: e } = this.props;
                e && e() }
            render() { return null } }

        function ms(e) { const [n, r] = function() { const e = (0, t.useContext)(ke); if (null === e) return [!0, null]; const { isPresent: n, onExitComplete: r, register: i } = e, a = (0, t.useId)(); return (0, t.useEffect)((() => i(a)), []), !n && r ? [!1, () => r && r(a)] : [!0] }(), i = (0, t.useContext)(Fe); return t.createElement(ps, {...e, layoutGroup: i, switchLayoutGroup: (0, t.useContext)(mt), isPresent: n, safeToRemove: r }) } const xs = { borderRadius: {...fs, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }, borderTopLeftRadius: fs, borderTopRightRadius: fs, borderBottomLeftRadius: fs, borderBottomRightRadius: fs, boxShadow: hs },
            gs = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
            vs = gs.length,
            ys = e => "string" === typeof e ? parseFloat(e) : e,
            Cs = e => "number" === typeof e || Wt.test(e);

        function ws(e, t) { return void 0 !== e[t] ? e[t] : e.borderRadius } const bs = ks(0, .5, yr),
            js = ks(.5, .95, ge);

        function ks(e, t, n) { return r => r < e ? 0 : r > t ? 1 : n(Jr(e, t, r)) }

        function Ns(e, t) { e.min = t.min, e.max = t.max }

        function Ss(e, t) { Ns(e.x, t.x), Ns(e.y, t.y) }

        function Es(e, t, n, r, i) { return e = Ya(e -= t, 1 / n, r), void 0 !== i && (e = Ya(e, 1 / i, r)), e }

        function Ps(e, t, n, r, i) { let [a, s, o] = n;! function(e) { let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5,
                    i = arguments.length > 4 ? arguments[4] : void 0,
                    a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e,
                    s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : e;
                Zt.test(t) && (t = parseFloat(t), t = Ar(s.min, s.max, t / 100) - s.min); if ("number" !== typeof t) return; let o = Ar(a.min, a.max, r);
                e === a && (o -= t), e.min = Es(e.min, t, n, o, i), e.max = Es(e.max, t, n, o, i) }(e, t[a], t[s], t[o], t.scale, r, i) } const Ms = ["x", "scaleX", "originX"],
            Fs = ["y", "scaleY", "originY"];

        function Ls(e, t, n, r) { Ps(e.x, t, Ms, n ? n.x : void 0, r ? r.x : void 0), Ps(e.y, t, Fs, n ? n.y : void 0, r ? r.y : void 0) }

        function Ts(e) { return 0 === e.translate && 1 === e.scale }

        function As(e) { return Ts(e.x) && Ts(e.y) }

        function Vs(e, t) { return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max) }

        function Rs(e) { return Ea(e.x) / Ea(e.y) }
        class Bs { constructor() { this.members = [] }
            add(e) { Gi(this.members, e), e.scheduleRender() }
            remove(e) { if (Yi(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) { const e = this.members[this.members.length - 1];
                    e && this.promote(e) } }
            relegate(e) { const t = this.members.findIndex((t => e === t)); if (0 === t) return !1; let n; for (let r = t; r >= 0; r--) { const e = this.members[r]; if (!1 !== e.isPresent) { n = e; break } } return !!n && (this.promote(n), !0) }
            promote(e, t) { const n = this.lead; if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) { n.instance && n.scheduleRender(), e.scheduleRender(), e.resumeFrom = n, t && (e.resumeFrom.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0); const { crossfade: r } = e.options;!1 === r && n.hide() } }
            exitAnimationComplete() { this.members.forEach((e => { const { options: t, resumingFrom: n } = e;
                    t.onExitComplete && t.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete() })) }
            scheduleRender() { this.members.forEach((e => { e.instance && e.scheduleRender(!1) })) }
            removeLeadSnapshot() { this.lead && this.lead.snapshot && (this.lead.snapshot = void 0) } }

        function Ds(e, t, n) { let r = ""; const i = e.x.translate / t.x,
                a = e.y.translate / t.y; if ((i || a) && (r = "translate3d(".concat(i, "px, ").concat(a, "px, 0) ")), 1 === t.x && 1 === t.y || (r += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") ")), n) { const { rotate: e, rotateX: t, rotateY: i } = n;
                e && (r += "rotate(".concat(e, "deg) ")), t && (r += "rotateX(".concat(t, "deg) ")), i && (r += "rotateY(".concat(i, "deg) ")) } const s = e.x.scale * t.x,
                o = e.y.scale * t.y; return 1 === s && 1 === o || (r += "scale(".concat(s, ", ").concat(o, ")")), r || "none" } const zs = (e, t) => e.depth - t.depth;
        class Os { constructor() { this.children = [], this.isDirty = !1 }
            add(e) { Gi(this.children, e), this.isDirty = !0 }
            remove(e) { Yi(this.children, e), this.isDirty = !0 }
            forEach(e) { this.isDirty && this.children.sort(zs), this.isDirty = !1, this.children.forEach(e) } } const _s = ["", "X", "Y", "Z"],
            Hs = { visibility: "hidden" }; let Is = 0; const Us = { type: "projectionFrame", totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0 };

        function Zs(e) { let { attachResizeListener: t, defaultParent: n, measureScroll: r, checkIsScrollRoot: i, resetTransform: a } = e; return class { constructor() { let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === n || void 0 === n ? void 0 : n();
                    this.id = Is++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => { this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots()) }, this.updateProjection = () => { var e;
                        this.projectionUpdateScheduled = !1, Us.totalNodes = Us.resolvedTargetDeltas = Us.recalculatedProjection = 0, this.nodes.forEach(Gs), this.nodes.forEach(eo), this.nodes.forEach(to), this.nodes.forEach(Ys), e = Us, window.MotionDebug && window.MotionDebug.record(e) }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = e, this.root = t ? t.root || t : this, this.path = t ? [...t.path, t] : [], this.parent = t, this.depth = t ? t.depth + 1 : 0; for (let n = 0; n < this.path.length; n++) this.path[n].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new Os) }
                addEventListener(e, t) { return this.eventHandlers.has(e) || this.eventHandlers.set(e, new qi), this.eventHandlers.get(e).add(t) }
                notifyListeners(e) { const t = this.eventHandlers.get(e); for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                    t && t.notify(...r) }
                hasListeners(e) { return this.eventHandlers.has(e) }
                mount(e) { let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.root.hasTreeAnimated; if (this.instance) return; var r;
                    this.isSVG = (r = e) instanceof SVGElement && "svg" !== r.tagName, this.instance = e; const { layoutId: i, layout: a, visualElement: s } = this.options; if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), n && (a || i) && (this.isLayoutDirty = !0), t) { let n; const r = () => this.root.updateBlockedByResize = !1;
                        t(e, (() => { this.root.updateBlockedByResize = !0, n && n(), n = function(e, t) { const n = performance.now(),
                                    r = i => { let { timestamp: a } = i; const s = a - n;
                                        s >= t && (we(r), e(s - t)) }; return Ce.read(r, !0), () => we(r) }(r, 250), us.hasAnimatedSinceResize && (us.hasAnimatedSinceResize = !1, this.nodes.forEach(Js)) })) }
                    i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && s && (i || a) && this.addEventListener("didUpdate", (e => { let { delta: t, hasLayoutChanged: n, hasRelativeTargetChanged: r, layout: i } = e; if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0); const a = this.options.transition || s.getDefaultTransition() || oo,
                            { onLayoutAnimationStart: o, onLayoutAnimationComplete: l } = s.getProps(),
                            c = !this.targetLayout || !Vs(this.targetLayout, i) || r,
                            u = !n && r; if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || n && (c || !this.currentAnimation)) { this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u); const e = {...Ui(a, "layout"), onPlay: o, onComplete: l };
                            (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e) } else n || Js(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = i })) }
                unmount() { this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this); const e = this.getStack();
                    e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, we(this.updateProjection) }
                blockUpdate() { this.updateManuallyBlocked = !0 }
                unblockUpdate() { this.updateManuallyBlocked = !1 }
                isUpdateBlocked() { return this.updateManuallyBlocked || this.updateBlockedByResize }
                isTreeAnimationBlocked() { return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1 }
                startUpdate() { this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(no), this.animationId++) }
                getTransformTemplate() { const { visualElement: e } = this.options; return e && e.getProps().transformTemplate }
                willUpdate() { let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) return void(this.options.onExitComplete && this.options.onExitComplete()); if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
                    this.isLayoutDirty = !0; for (let i = 0; i < this.path.length; i++) { const e = this.path[i];
                        e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1) } const { layoutId: t, layout: n } = this.options; if (void 0 === t && !n) return; const r = this.getTransformTemplate();
                    this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate") }
                update() { this.updateScheduled = !1; if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(Xs);
                    this.isUpdating || this.nodes.forEach(Qs), this.isUpdating = !1, this.nodes.forEach(Ks), this.nodes.forEach(Ws), this.nodes.forEach($s), this.clearAllSnapshots(); const e = performance.now();
                    be.delta = At(0, 1e3 / 60, e - be.timestamp), be.timestamp = e, be.isProcessing = !0, je.update.process(be), je.preRender.process(be), je.render.process(be), be.isProcessing = !1 }
                didUpdate() { this.updateScheduled || (this.updateScheduled = !0, queueMicrotask((() => this.update()))) }
                clearAllSnapshots() { this.nodes.forEach(qs), this.sharedNodes.forEach(ro) }
                scheduleUpdateProjection() { this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Ce.preRender(this.updateProjection, !1, !0)) }
                scheduleCheckAfterUnmount() { Ce.postRender((() => { this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed() })) }
                updateSnapshot() {!this.snapshot && this.instance && (this.snapshot = this.measure()) }
                updateLayout() { if (!this.instance) return; if (this.updateScroll(), (!this.options.alwaysMeasureLayout || !this.isLead()) && !this.isLayoutDirty) return; if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let n = 0; n < this.path.length; n++) { this.path[n].updateScroll() }
                    const e = this.layout;
                    this.layout = this.measure(!1), this.layoutCorrected = _a(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox); const { visualElement: t } = this.options;
                    t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0) }
                updateScroll() { let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "measure",
                        t = Boolean(this.options.layoutScroll && this.instance);
                    this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && (this.scroll = { animationId: this.root.animationId, phase: e, isRoot: i(this.instance), offset: r(this.instance) }) }
                resetTransform() { if (!a) return; const e = this.isLayoutDirty || this.shouldResetTransform,
                        t = this.projectionDelta && !As(this.projectionDelta),
                        n = this.getTransformTemplate(),
                        r = n ? n(this.latestValues, "") : void 0,
                        i = r !== this.prevTransformTemplateValue;
                    e && (t || Wa(this.latestValues) || i) && (a(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender()) }
                measure() { let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; const t = this.measurePageBox(); let n = this.removeElementScroll(t); var r; return e && (n = this.removeTransform(n)), uo((r = n).x), uo(r.y), { animationId: this.root.animationId, measuredBox: t, layoutBox: n, latestValues: {}, source: this.id } }
                measurePageBox() { const { visualElement: e } = this.options; if (!e) return _a(); const t = e.measureViewportBox(),
                        { scroll: n } = this.root; return n && (Ja(t.x, n.offset.x), Ja(t.y, n.offset.y)), t }
                removeElementScroll(e) { const t = _a();
                    Ss(t, e); for (let n = 0; n < this.path.length; n++) { const r = this.path[n],
                            { scroll: i, options: a } = r; if (r !== this.root && i && a.layoutScroll) { if (i.isRoot) { Ss(t, e); const { scroll: n } = this.root;
                                n && (Ja(t.x, -n.offset.x), Ja(t.y, -n.offset.y)) }
                            Ja(t.x, i.offset.x), Ja(t.y, i.offset.y) } } return t }
                applyTransform(e) { let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; const n = _a();
                    Ss(n, e); for (let r = 0; r < this.path.length; r++) { const e = this.path[r];!t && e.options.layoutScroll && e.scroll && e !== e.root && rs(n, { x: -e.scroll.offset.x, y: -e.scroll.offset.y }), Wa(e.latestValues) && rs(n, e.latestValues) } return Wa(this.latestValues) && rs(n, this.latestValues), n }
                removeTransform(e) { const t = _a();
                    Ss(t, e); for (let n = 0; n < this.path.length; n++) { const e = this.path[n]; if (!e.instance) continue; if (!Wa(e.latestValues)) continue;
                        Za(e.latestValues) && e.updateSnapshot(); const r = _a();
                        Ss(r, e.measurePageBox()), Ls(t, e.latestValues, e.snapshot ? e.snapshot.layoutBox : void 0, r) } return Wa(this.latestValues) && Ls(t, this.latestValues), t }
                setTargetDelta(e) { this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0 }
                setOptions(e) { this.options = {...this.options, ...e, crossfade: void 0 === e.crossfade || e.crossfade } }
                clearMeasurements() { this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1 }
                forceRelativeParentToResolveTarget() { this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== be.timestamp && this.relativeParent.resolveTargetDelta(!0) }
                resolveTargetDelta() { let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; var t; const n = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = n.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = n.isSharedProjectionDirty); const r = Boolean(this.resumingFrom) || this !== n; if (!(e || r && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty) || this.attemptToResolveRelativeTarget)) return; const { layout: i, layoutId: a } = this.options; if (this.layout && (i || a)) { if (this.resolvedRelativeTargetAt = be.timestamp, !this.targetDelta && !this.relativeTarget) { const e = this.getClosestProjectingParent();
                            e && e.layout && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = _a(), this.relativeTargetOrigin = _a(), Aa(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), Ss(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0 } if (this.relativeTarget || this.targetDelta) { var s, o, l; if (this.target || (this.target = _a(), this.targetWithTransforms = _a()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), s = this.target, o = this.relativeTarget, l = this.relativeParent.target, La(s.x, o.x, l.x), La(s.y, o.y, l.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : Ss(this.target, this.layout.layoutBox), Qa(this.target, this.targetDelta)) : Ss(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) { this.attemptToResolveRelativeTarget = !1; const e = this.getClosestProjectingParent();
                                e && Boolean(e.resumingFrom) === Boolean(this.resumingFrom) && !e.options.layoutScroll && e.target && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = _a(), this.relativeTargetOrigin = _a(), Aa(this.relativeTargetOrigin, this.target, e.target), Ss(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0 }
                            Us.resolvedTargetDeltas++ } } }
                getClosestProjectingParent() { if (this.parent && !Za(this.parent.latestValues) && !$a(this.parent.latestValues)) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent() }
                isProjecting() { return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout) }
                calcProjection() { var e; const t = this.getLead(),
                        n = Boolean(this.resumingFrom) || this !== t; let r = !0; if ((this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty)) && (r = !1), n && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1), this.resolvedRelativeTargetAt === be.timestamp && (r = !1), r) return; const { layout: i, layoutId: a } = this.options; if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !i && !a) return;
                    Ss(this.layoutCorrected, this.layout.layoutBox); const s = this.treeScale.x,
                        o = this.treeScale.y;! function(e, t, n) { let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]; const i = n.length; if (!i) return; let a, s;
                        t.x = t.y = 1; for (let o = 0; o < i; o++) { a = n[o], s = a.projectionDelta; const i = a.instance;
                            i && i.style && "contents" === i.style.display || (r && a.options.layoutScroll && a.scroll && a !== a.root && rs(e, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }), s && (t.x *= s.x.scale, t.y *= s.y.scale, Qa(e, s)), r && Wa(a.latestValues) && rs(e, a.latestValues)) }
                        t.x = Ka(t.x), t.y = Ka(t.y) }(this.layoutCorrected, this.treeScale, this.path, n), !t.layout || t.target || 1 === this.treeScale.x && 1 === this.treeScale.y || (t.target = t.layout.layoutBox); const { target: l } = t; if (!l) return void(this.projectionTransform && (this.projectionDelta = Oa(), this.projectionTransform = "none", this.scheduleRender()));
                    this.projectionDelta || (this.projectionDelta = Oa(), this.projectionDeltaWithTransform = Oa()); const c = this.projectionTransform;
                    Fa(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = Ds(this.projectionDelta, this.treeScale), this.projectionTransform === c && this.treeScale.x === s && this.treeScale.y === o || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), Us.recalculatedProjection++ }
                hide() { this.isVisible = !1 }
                show() { this.isVisible = !0 }
                scheduleRender() { let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; if (this.options.scheduleRender && this.options.scheduleRender(), e) { const e = this.getStack();
                        e && e.scheduleRender() }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0) }
                setAnimationOrigin(e) { let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; const n = this.snapshot,
                        r = n ? n.latestValues : {},
                        i = {...this.latestValues },
                        a = Oa();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t; const s = _a(),
                        o = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
                        l = this.getStack(),
                        c = !l || l.members.length <= 1,
                        u = Boolean(o && !c && !0 === this.options.crossfade && !this.path.some(so)); let d;
                    this.animationProgress = 0, this.mixTargetDelta = t => { const n = t / 1e3; var l, f, h, p, m, x;
                        io(a.x, e.x, n), io(a.y, e.y, n), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Aa(s, this.layout.layoutBox, this.relativeParent.layout.layoutBox), h = this.relativeTarget, p = this.relativeTargetOrigin, m = s, x = n, ao(h.x, p.x, m.x, x), ao(h.y, p.y, m.y, x), d && (l = this.relativeTarget, f = d, l.x.min === f.x.min && l.x.max === f.x.max && l.y.min === f.y.min && l.y.max === f.y.max) && (this.isProjectionDirty = !1), d || (d = _a()), Ss(d, this.relativeTarget)), o && (this.animationValues = i, function(e, t, n, r, i, a) { i ? (e.opacity = Ar(0, void 0 !== n.opacity ? n.opacity : 1, bs(r)), e.opacityExit = Ar(void 0 !== t.opacity ? t.opacity : 1, 0, js(r))) : a && (e.opacity = Ar(void 0 !== t.opacity ? t.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r)); for (let s = 0; s < vs; s++) { const i = "border".concat(gs[s], "Radius"); let a = ws(t, i),
                                    o = ws(n, i);
                                void 0 === a && void 0 === o || (a || (a = 0), o || (o = 0), 0 === a || 0 === o || Cs(a) === Cs(o) ? (e[i] = Math.max(Ar(ys(a), ys(o), r), 0), (Zt.test(o) || Zt.test(a)) && (e[i] += "%")) : e[i] = o) }(t.rotate || n.rotate) && (e.rotate = Ar(t.rotate || 0, n.rotate || 0, r)) }(i, r, this.latestValues, n, u, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0) }
                startAnimation(e) { this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (we(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ce.update((() => { us.hasAnimatedSinceResize = !0, this.currentAnimation = function(e, t, n) { const r = St(e) ? e : Ki(e); return r.start(Zi("", r, t, n)), r.animation }(0, 1e3, {...e, onUpdate: t => { this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t) }, onComplete: () => { e.onComplete && e.onComplete(), this.completeAnimation() } }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0 })) }
                completeAnimation() { this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0); const e = this.getStack();
                    e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete") }
                finishAnimation() { this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation() }
                applyTransformsToTarget() { const e = this.getLead(); let { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e; if (t && n && r) { if (this !== e && this.layout && r && fo(this.options.animationType, this.layout.layoutBox, r.layoutBox)) { n = this.target || _a(); const t = Ea(this.layout.layoutBox.x);
                            n.x.min = e.target.x.min, n.x.max = n.x.min + t; const r = Ea(this.layout.layoutBox.y);
                            n.y.min = e.target.y.min, n.y.max = n.y.min + r }
                        Ss(t, n), rs(t, i), Fa(this.projectionDeltaWithTransform, this.layoutCorrected, t, i) } }
                registerSharedNode(e, t) { this.sharedNodes.has(e) || this.sharedNodes.set(e, new Bs);
                    this.sharedNodes.get(e).add(t); const n = t.options.initialPromotionConfig;
                    t.promote({ transition: n ? n.transition : void 0, preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0 }) }
                isLead() { const e = this.getStack(); return !e || e.lead === this }
                getLead() { var e; const { layoutId: t } = this.options; return t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this }
                getPrevLead() { var e; const { layoutId: t } = this.options; return t ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0 }
                getStack() { const { layoutId: e } = this.options; if (e) return this.root.sharedNodes.get(e) }
                promote() { let { needsReset: e, transition: t, preserveFollowOpacity: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; const r = this.getStack();
                    r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({ transition: t }) }
                relegate() { const e = this.getStack(); return !!e && e.relegate(this) }
                resetRotation() { const { visualElement: e } = this.options; if (!e) return; let t = !1; const { latestValues: n } = e; if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (t = !0), !t) return; const r = {}; for (let i = 0; i < _s.length; i++) { const t = "rotate" + _s[i];
                        n[t] && (r[t] = n[t], e.setStaticValue(t, 0)) }
                    e.render(); for (const i in r) e.setStaticValue(i, r[i]);
                    e.scheduleRender() }
                getProjectionStyles(e) { var t, n; if (!this.instance || this.isSVG) return; if (!this.isVisible) return Hs; const r = { visibility: "" },
                        i = this.getTransformTemplate(); if (this.needsReset) return this.needsReset = !1, r.opacity = "", r.pointerEvents = kn(null === e || void 0 === e ? void 0 : e.pointerEvents) || "", r.transform = i ? i(this.latestValues, "") : "none", r; const a = this.getLead(); if (!this.projectionDelta || !this.layout || !a.target) { const t = {}; return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = kn(null === e || void 0 === e ? void 0 : e.pointerEvents) || ""), this.hasProjected && !Wa(this.latestValues) && (t.transform = i ? i({}, "") : "none", this.hasProjected = !1), t } const s = a.animationValues || a.latestValues;
                    this.applyTransformsToTarget(), r.transform = Ds(this.projectionDeltaWithTransform, this.treeScale, s), i && (r.transform = i(s, r.transform)); const { x: o, y: l } = this.projectionDelta;
                    r.transformOrigin = "".concat(100 * o.origin, "% ").concat(100 * l.origin, "% 0"), a.animationValues ? r.opacity = a === this ? null !== (n = null !== (t = s.opacity) && void 0 !== t ? t : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : s.opacityExit : r.opacity = a === this ? void 0 !== s.opacity ? s.opacity : "" : void 0 !== s.opacityExit ? s.opacityExit : 0; for (const c in bt) { if (void 0 === s[c]) continue; const { correct: e, applyTo: t } = bt[c], n = "none" === r.transform ? s[c] : e(s[c], a); if (t) { const e = t.length; for (let i = 0; i < e; i++) r[t[i]] = n } else r[c] = n } return this.options.layoutId && (r.pointerEvents = a === this ? kn(null === e || void 0 === e ? void 0 : e.pointerEvents) || "" : "none"), r }
                clearSnapshot() { this.resumeFrom = this.snapshot = void 0 }
                resetTree() { this.root.nodes.forEach((e => { var t; return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop() })), this.root.nodes.forEach(Xs), this.root.sharedNodes.clear() } } }

        function Ws(e) { e.updateLayout() }

        function $s(e) { var t; const n = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot; if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) { const { layoutBox: t, measuredBox: r } = e.layout, { animationType: i } = e.options, a = n.source !== e.layout.source; "size" === i ? Ha((e => { const r = a ? n.measuredBox[e] : n.layoutBox[e],
                        i = Ea(r);
                    r.min = t[e].min, r.max = r.min + i })) : fo(i, n.layoutBox, t) && Ha((r => { const i = a ? n.measuredBox[r] : n.layoutBox[r],
                        s = Ea(t[r]);
                    i.max = i.min + s, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + s) })); const s = Oa();
                Fa(s, t, n.layoutBox); const o = Oa();
                a ? Fa(o, e.applyTransform(r, !0), n.measuredBox) : Fa(o, t, n.layoutBox); const l = !As(s); let c = !1; if (!e.resumeFrom) { const r = e.getClosestProjectingParent(); if (r && !r.resumeFrom) { const { snapshot: i, layout: a } = r; if (i && a) { const s = _a();
                            Aa(s, n.layoutBox, i.layoutBox); const o = _a();
                            Aa(o, t, a.layoutBox), Vs(s, o) || (c = !0), r.options.layoutRoot && (e.relativeTarget = o, e.relativeTargetOrigin = s, e.relativeParent = r) } } }
                e.notifyListeners("didUpdate", { layout: t, snapshot: n, delta: o, layoutDelta: s, hasLayoutChanged: l, hasRelativeTargetChanged: c }) } else if (e.isLead()) { const { onExitComplete: t } = e.options;
                t && t() }
            e.options.transition = void 0 }

        function Gs(e) { Us.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = Boolean(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)) }

        function Ys(e) { e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1 }

        function qs(e) { e.clearSnapshot() }

        function Xs(e) { e.clearMeasurements() }

        function Qs(e) { e.isLayoutDirty = !1 }

        function Ks(e) { const { visualElement: t } = e.options;
            t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform() }

        function Js(e) { e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0 }

        function eo(e) { e.resolveTargetDelta() }

        function to(e) { e.calcProjection() }

        function no(e) { e.resetRotation() }

        function ro(e) { e.removeLeadSnapshot() }

        function io(e, t, n) { e.translate = Ar(t.translate, 0, n), e.scale = Ar(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint }

        function ao(e, t, n, r) { e.min = Ar(t.min, n.min, r), e.max = Ar(t.max, n.max, r) }

        function so(e) { return e.animationValues && void 0 !== e.animationValues.opacityExit } const oo = { duration: .45, ease: [.4, 0, .1, 1] },
            lo = e => "undefined" !== typeof navigator && navigator.userAgent.toLowerCase().includes(e),
            co = lo("applewebkit/") && !lo("chrome/") ? Math.round : ge;

        function uo(e) { e.min = co(e.min), e.max = co(e.max) }

        function fo(e, t, n) { return "position" === e || "preserve-aspect" === e && !Pa(Rs(t), Rs(n), .2) } const ho = Zs({ attachResizeListener: (e, t) => Mn(e, "resize", t), measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body.scrollLeft, y: document.documentElement.scrollTop || document.body.scrollTop }), checkIsScrollRoot: () => !0 }),
            po = { current: void 0 },
            mo = Zs({ measureScroll: e => ({ x: e.scrollLeft, y: e.scrollTop }), defaultParent: () => { if (!po.current) { const e = new ho({});
                        e.mount(window), e.setOptions({ layoutScroll: !0 }), po.current = e } return po.current }, resetTransform: (e, t) => { e.style.transform = void 0 !== t ? t : "none" }, checkIsScrollRoot: e => Boolean("fixed" === window.getComputedStyle(e).position) }),
            xo = { pan: { Feature: class extends Hn { constructor() { super(...arguments), this.removePointerDownListener = ge }
                        onPointerDown(e) { this.session = new Ca(e, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint(), contextWindow: as(this.node) }) }
                        createPanHandlers() { const { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps(); return { onSessionStart: cs(e), onStart: cs(t), onMove: n, onEnd: (e, t) => { delete this.session, r && Ce.update((() => r(e, t))) } } }
                        mount() { this.removePointerDownListener = An(this.node.current, "pointerdown", (e => this.onPointerDown(e))) }
                        update() { this.session && this.session.updateHandlers(this.createPanHandlers()) }
                        unmount() { this.removePointerDownListener(), this.session && this.session.end() } } }, drag: { Feature: class extends Hn { constructor(e) { super(e), this.removeGroupControls = ge, this.removeListeners = ge, this.controls = new os(e) }
                        mount() { const { dragControls: e } = this.node.getProps();
                            e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ge }
                        unmount() { this.removeGroupControls(), this.removeListeners() } }, ProjectionNode: mo, MeasureLayout: ms } },
            go = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/; const vo = 4;

        function yo(e, t) { let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            Te(n <= vo, 'Max CSS variable fallback depth detected in property "'.concat(e, '". This may indicate a circular fallback dependency.')); const [r, i] = function(e) { const t = go.exec(e); if (!t) return [, ]; const [, n, r] = t; return [n, r] }(e); if (!r) return; const a = window.getComputedStyle(t).getPropertyValue(r); if (a) { const e = a.trim(); return $i(e) ? parseFloat(e) : e } return Lt(i) ? yo(i, t, n + 1) : i } const Co = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
            wo = e => Co.has(e),
            bo = e => e === Vt || e === Wt,
            jo = (e, t) => parseFloat(e.split(", ")[t]),
            ko = (e, t) => (n, r) => { let { transform: i } = r; if ("none" === i || !i) return 0; const a = i.match(/^matrix3d\((.+)\)$/); if (a) return jo(a[1], t); { const t = i.match(/^matrix\((.+)\)$/); return t ? jo(t[1], e) : 0 } },
            No = new Set(["x", "y", "z"]),
            So = jt.filter((e => !No.has(e))); const Eo = { width: (e, t) => { let { x: n } = e, { paddingLeft: r = "0", paddingRight: i = "0" } = t; return n.max - n.min - parseFloat(r) - parseFloat(i) }, height: (e, t) => { let { y: n } = e, { paddingTop: r = "0", paddingBottom: i = "0" } = t; return n.max - n.min - parseFloat(r) - parseFloat(i) }, top: (e, t) => { let { top: n } = t; return parseFloat(n) }, left: (e, t) => { let { left: n } = t; return parseFloat(n) }, bottom: (e, t) => { let { y: n } = e, { top: r } = t; return parseFloat(r) + (n.max - n.min) }, right: (e, t) => { let { x: n } = e, { left: r } = t; return parseFloat(r) + (n.max - n.min) }, x: ko(4, 13), y: ko(5, 14) };
        Eo.translateX = Eo.x, Eo.translateY = Eo.y; const Po = function(e, t) { let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            t = {...t }, r = {...r }; const i = Object.keys(t).filter(wo); let a = [],
                s = !1; const o = []; if (i.forEach((i => { const l = e.getValue(i); if (!e.hasValue(i)) return; let c = n[i],
                        u = ta(c); const d = t[i]; let f; if (wn(d)) { const e = d.length,
                            t = null === d[0] ? 1 : 0;
                        c = d[t], u = ta(c); for (let n = t; n < e && null !== d[n]; n++) f ? Te(ta(d[n]) === f, "All keyframes must be of the same type") : (f = ta(d[n]), Te(f === u || bo(u) && bo(f), "Keyframes must be of the same dimension as the current value")) } else f = ta(d); if (u !== f)
                        if (bo(u) && bo(f)) { const e = l.get(); "string" === typeof e && l.set(parseFloat(e)), "string" === typeof d ? t[i] = parseFloat(d) : Array.isArray(d) && f === Wt && (t[i] = d.map(parseFloat)) } else(null === u || void 0 === u ? void 0 : u.transform) && (null === f || void 0 === f ? void 0 : f.transform) && (0 === c || 0 === d) ? 0 === c ? l.set(f.transform(c)) : t[i] = u.transform(d) : (s || (a = function(e) { const t = []; return So.forEach((n => { const r = e.getValue(n);
                                void 0 !== r && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0)) })), t.length && e.render(), t }(e), s = !0), o.push(i), r[i] = void 0 !== r[i] ? r[i] : t[i], l.jump(d)) })), o.length) { const n = o.indexOf("height") >= 0 ? window.pageYOffset : null,
                    i = ((e, t, n) => { const r = t.measureViewportBox(),
                            i = t.current,
                            a = getComputedStyle(i),
                            { display: s } = a,
                            o = {}; "none" === s && t.setStaticValue("display", e.display || "block"), n.forEach((e => { o[e] = Eo[e](r, a) })), t.render(); const l = t.measureViewportBox(); return n.forEach((n => { const r = t.getValue(n);
                            r && r.jump(o[n]), e[n] = Eo[n](l, a) })), e })(t, e, o); return a.length && a.forEach((t => { let [n, r] = t;
                    e.getValue(n).set(r) })), e.render(), pe && null !== n && window.scrollTo({ top: n }), { target: i, transitionEnd: r } } return { target: t, transitionEnd: r } };

        function Mo(e, t, n, r) { return (e => Object.keys(e).some(wo))(t) ? Po(e, t, n, r) : { target: t, transitionEnd: r } } const Fo = (e, t, n, r) => { const i = function(e, t, n) { let {...r } = t; const i = e.current; if (!(i instanceof Element)) return { target: r, transitionEnd: n };
                    n && (n = {...n }), e.values.forEach((e => { const t = e.get(); if (!Lt(t)) return; const n = yo(t, i);
                        n && e.set(n) })); for (const a in r) { const e = r[a]; if (!Lt(e)) continue; const t = yo(e, i);
                        t && (r[a] = t, n || (n = {}), void 0 === n[a] && (n[a] = e)) } return { target: r, transitionEnd: n } }(e, t, r); return Mo(e, t = i.target, n, r = i.transitionEnd) },
            Lo = { current: null },
            To = { current: !1 }; const Ao = new WeakMap,
            Vo = Object.keys(pt),
            Ro = Vo.length,
            Bo = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
            Do = lt.length;
        class zo { constructor(e) { let { parent: t, props: n, presenceContext: r, reducedMotionConfig: i, visualState: a } = e, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => { this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection)) }, this.scheduleRender = () => Ce.render(this.render, !1, !0); const { latestValues: o, renderState: l } = a;
                this.latestValues = o, this.baseTarget = {...o }, this.initialValues = n.initial ? {...o } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = s, this.isControllingVariants = ct(n), this.isVariantNode = ut(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current); const { willChange: c, ...u } = this.scrapeMotionValuesFromProps(n, {}); for (const d in u) { const e = u[d];
                    void 0 !== o[d] && St(e) && (e.set(o[d], !1), Wi(c) && c.add(d)) } }
            scrapeMotionValuesFromProps(e, t) { return {} }
            mount(e) { this.current = e, Ao.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach(((e, t) => this.bindToMotionValue(t, e))), To.current || function() { if (To.current = !0, pe)
                        if (window.matchMedia) { const e = window.matchMedia("(prefers-reduced-motion)"),
                                t = () => Lo.current = e.matches;
                            e.addListener(t), t() } else Lo.current = !1 }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || Lo.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext) }
            unmount() { Ao.delete(this.current), this.projection && this.projection.unmount(), we(this.notifyUpdate), we(this.render), this.valueSubscriptions.forEach((e => e())), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this); for (const e in this.events) this.events[e].clear(); for (const e in this.features) this.features[e].unmount();
                this.current = null }
            bindToMotionValue(e, t) { const n = kt.has(e),
                    r = t.on("change", (t => { this.latestValues[e] = t, this.props.onUpdate && Ce.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0) })),
                    i = t.on("renderRequest", this.scheduleRender);
                this.valueSubscriptions.set(e, (() => { r(), i() })) }
            sortNodePosition(e) { return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0 }
            loadFeatures(e, t, n, r) { let i, a, { children: s, ...o } = e; for (let l = 0; l < Ro; l++) { const e = Vo[l],
                        { isEnabled: t, Feature: n, ProjectionNode: r, MeasureLayout: s } = pt[e];
                    r && (i = r), t(o) && (!this.features[e] && n && (this.features[e] = new n(this)), s && (a = s)) } if (!this.projection && i) { this.projection = new i(this.latestValues, this.parent && this.parent.projection); const { layoutId: e, layout: t, drag: n, dragConstraints: a, layoutScroll: s, layoutRoot: l } = o;
                    this.projection.setOptions({ layoutId: e, layout: t, alwaysMeasureLayout: Boolean(n) || a && it(a), visualElement: this, scheduleRender: () => this.scheduleRender(), animationType: "string" === typeof t ? t : "both", initialPromotionConfig: r, layoutScroll: s, layoutRoot: l }) } return a }
            updateFeatures() { for (const e in this.features) { const t = this.features[e];
                    t.isMounted ? t.update() : (t.mount(), t.isMounted = !0) } }
            triggerBuild() { this.build(this.renderState, this.latestValues, this.options, this.props) }
            measureViewportBox() { return this.current ? this.measureInstanceViewportBox(this.current, this.props) : _a() }
            getStaticValue(e) { return this.latestValues[e] }
            setStaticValue(e, t) { this.latestValues[e] = t }
            makeTargetAnimatable(e) { let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; return this.makeTargetAnimatableFromInstance(e, this.props, t) }
            update(e, t) {
                (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t; for (let n = 0; n < Bo.length; n++) { const t = Bo[n];
                    this.propEventSubscriptions[t] && (this.propEventSubscriptions[t](), delete this.propEventSubscriptions[t]); const r = e["on" + t];
                    r && (this.propEventSubscriptions[t] = this.on(t, r)) }
                this.prevMotionValues = function(e, t, n) { const { willChange: r } = t; for (const i in t) { const a = t[i],
                            s = n[i]; if (St(a)) e.addValue(i, a), Wi(r) && r.add(i);
                        else if (St(s)) e.addValue(i, Ki(a, { owner: e })), Wi(r) && r.remove(i);
                        else if (s !== a)
                            if (e.hasValue(i)) { const t = e.getValue(i);!t.hasAnimated && t.set(a) } else { const t = e.getStaticValue(i);
                                e.addValue(i, Ki(void 0 !== t ? t : a, { owner: e })) } } for (const i in n) void 0 === t[i] && e.removeValue(i); return t }(this, this.scrapeMotionValuesFromProps(e, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue() }
            getProps() { return this.props }
            getVariant(e) { return this.props.variants ? this.props.variants[e] : void 0 }
            getDefaultTransition() { return this.props.transition }
            getTransformPagePoint() { return this.props.transformPagePoint }
            getClosestVariantNode() { return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0 }
            getVariantContext() { if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) return this.parent ? this.parent.getVariantContext() : void 0; if (!this.isControllingVariants) { const e = this.parent && this.parent.getVariantContext() || {}; return void 0 !== this.props.initial && (e.initial = this.props.initial), e } const e = {}; for (let t = 0; t < Do; t++) { const n = lt[t],
                        r = this.props[n];
                    (at(r) || !1 === r) && (e[n] = r) } return e }
            addVariantChild(e) { const t = this.getClosestVariantNode(); if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e) }
            addValue(e, t) { t !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, t)), this.values.set(e, t), this.latestValues[e] = t.get() }
            removeValue(e) { this.values.delete(e); const t = this.valueSubscriptions.get(e);
                t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState) }
            hasValue(e) { return this.values.has(e) }
            getValue(e, t) { if (this.props.values && this.props.values[e]) return this.props.values[e]; let n = this.values.get(e); return void 0 === n && void 0 !== t && (n = Ki(t, { owner: this }), this.addValue(e, n)), n }
            readValue(e) { var t; return void 0 === this.latestValues[e] && this.current ? null !== (t = this.getBaseTargetFromProps(this.props, e)) && void 0 !== t ? t : this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e] }
            setBaseTarget(e, t) { this.baseTarget[e] = t }
            getBaseTarget(e) { var t; const { initial: n } = this.props, r = "string" === typeof n || "object" === typeof n ? null === (t = Cn(this.props, n)) || void 0 === t ? void 0 : t[e] : void 0; if (n && void 0 !== r) return r; const i = this.getBaseTargetFromProps(this.props, e); return void 0 === i || St(i) ? void 0 !== this.initialValues[e] && void 0 === r ? void 0 : this.baseTarget[e] : i }
            on(e, t) { return this.events[e] || (this.events[e] = new qi), this.events[e].add(t) }
            notify(e) { if (this.events[e]) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    this.events[e].notify(...n) } } }
        class Oo extends zo { sortInstanceNodePosition(e, t) { return 2 & e.compareDocumentPosition(t) ? 1 : -1 }
            getBaseTargetFromProps(e, t) { return e.style ? e.style[t] : void 0 }
            removeValueFromRenderState(e, t) { let { vars: n, style: r } = t;
                delete n[e], delete r[e] }
            makeTargetAnimatableFromInstance(e, t, n) { let { transition: r, transitionEnd: i, ...a } = e, { transformValues: s } = t, o = function(e, t, n) { const r = {}; for (const i in e) { const e = aa(i, t); if (void 0 !== e) r[i] = e;
                        else { const e = n.getValue(i);
                            e && (r[i] = e.get()) } } return r }(a, r || {}, this); if (s && (i && (i = s(i)), a && (a = s(a)), o && (o = s(o))), n) {! function(e, t, n) { var r, i; const a = Object.keys(t).filter((t => !e.hasValue(t))),
                            s = a.length; var o; if (s)
                            for (let l = 0; l < s; l++) { const s = a[l],
                                    c = t[s]; let u = null;
                                Array.isArray(c) && (u = c[0]), null === u && (u = null !== (i = null !== (r = n[s]) && void 0 !== r ? r : e.readValue(s)) && void 0 !== i ? i : t[s]), void 0 !== u && null !== u && ("string" === typeof u && ($i(u) || Hi(u)) ? u = parseFloat(u) : (o = u, !na.find(Ji(o)) && Gr.test(c) && (u = _i(s, c))), e.addValue(s, Ki(u, { owner: e })), void 0 === n[s] && (n[s] = u), null !== u && e.setBaseTarget(s, u)) } }(this, a, o); const e = Fo(this, a, o, i);
                    i = e.transitionEnd, a = e.target } return { transition: r, transitionEnd: i, ...a } } }
        class _o extends Oo { readValueFromInstance(e, t) { if (kt.has(t)) { const e = Oi(t); return e && e.default || 0 } { const r = (n = e, window.getComputedStyle(n)),
                        i = (Ft(t) ? r.getPropertyValue(t) : r[t]) || 0; return "string" === typeof i ? i.trim() : i } var n }
            measureInstanceViewportBox(e, t) { let { transformPagePoint: n } = t; return is(e, n) }
            build(e, t, n, r) { Qt(e, t, n, r.transformTemplate) }
            scrapeMotionValuesFromProps(e, t) { return vn(e, t) }
            handleChildMotionValue() { this.childSubscription && (this.childSubscription(), delete this.childSubscription); const { children: e } = this.props;
                St(e) && (this.childSubscription = e.on("change", (e => { this.current && (this.current.textContent = "".concat(e)) }))) }
            renderInstance(e, t, n, r) { mn(e, t, n, r) } }
        class Ho extends Oo { constructor() { super(...arguments), this.isSVGTag = !1 }
            getBaseTargetFromProps(e, t) { return e[t] }
            readValueFromInstance(e, t) { if (kt.has(t)) { const e = Oi(t); return e && e.default || 0 } return t = xn.has(t) ? t : nt(t), e.getAttribute(t) }
            measureInstanceViewportBox() { return _a() }
            scrapeMotionValuesFromProps(e, t) { return yn(e, t) }
            build(e, t, n, r) { un(e, t, n, this.isSVGTag, r.transformTemplate) }
            renderInstance(e, t, n, r) { gn(e, t, 0, r) }
            mount(e) { this.isSVGTag = fn(e.tagName), super.mount(e) } } const Io = (e, t) => wt(e) ? new Ho(t, { enableHardwareAcceleration: !1 }) : new _o(t, { enableHardwareAcceleration: !0 }),
            Uo = {...va, ...Qn, ...xo, ... { layout: { ProjectionNode: mo, MeasureLayout: ms } } },
            Zo = yt(((e, t) => function(e, t, n, r) { let { forwardMotionProps: i = !1 } = t; return {...wt(e) ? En : Pn, preloadedFeatures: n, useRender: pn(i), createVisualElement: r, Component: e } }(e, t, Uo, Io))); const Wo = e => () => (0, Ie.jsxs)(Ie.Fragment, { children: [(0, Ie.jsx)(e, {}), (0, Ie.jsx)(Zo.div, { className: "slide-in", initial: { scaleY: 0 }, animate: { scaleY: 0 }, exit: { scaleY: 1 }, transition: { duration: 1, ease: [.22, 1, .36, 1] } }), (0, Ie.jsx)(Zo.div, { className: "slide-out", initial: { scaleY: 1 }, animate: { scaleY: 0 }, exit: { scaleY: 0 }, transition: { duration: 1, ease: [.22, 1, .36, 1] } })] }),
            $o = Wo((() => { const [e, n] = (0, t.useState)(!1), [r, i] = (0, t.useState)(!1), [a, s] = (0, t.useState)(!1), [o, l] = (0, t.useState)(!1), [c, u] = (0, t.useState)(!1), d = Q(); return (0, t.useEffect)((() => {
                    (() => { document.title = "Veyg-Events";
                        document.querySelectorAll(".tilt").forEach((e => { Ke().init(e, { max: 25, speed: 400, glare: !0, "max-glare": .5 }) })) })(), setTimeout((() => { n(!0), setTimeout((() => { i(!0) }), 700), setTimeout((() => { s(!0) }), 1400), setTimeout((() => { l(!0) }), 2100), setTimeout((() => { u(!0) }), 2800) }), 500) }), []), (0, Ie.jsxs)("div", { className: "wrapper", children: [e && (0, Ie.jsx)($e, {}), (0, Ie.jsx)("div", { className: "flex flex-row justify-center relative", children: (0, Ie.jsxs)("div", { className: "flex flex-col lg:m-[5rem] absolute z-10", children: [(0, Ie.jsxs)("div", { className: "flex flex-row  items-center justify-between lg:gap-4 m-card1", children: [(0, Ie.jsx)("div", { onClick: () => { d("/events/gaming") }, className: "flex justify-center items-center align-middle  cursor-pointer ", children: (0, Ie.jsx)("img", { src: Ye, alt: "gamecard", className: "w-[33rem]   card1 tilt ".concat(r ? "show" : "") }) }), (0, Ie.jsx)("div", { onClick: () => { d("/events/technutz") }, className: "flex justify-center items-center align-middle cursor-pointer", children: (0, Ie.jsx)("img", { src: qe, alt: "technutzcard", className: "w-[33rem] card2 tilt ".concat(a ? "show" : "") }) })] }), (0, Ie.jsxs)("div", { className: "flex flex-row lg:pt-3 lg:gap-4 justify-between items-center m-card2", children: [(0, Ie.jsx)("div", { onClick: () => { d("/events/codex") }, className: "flex justify-center items-center align-middle cursor-pointer", children: (0, Ie.jsx)("img", { src: Xe, alt: "codexcard", className: "w-[33rem] card3 tilt ".concat(o ? "show" : "") }) }), (0, Ie.jsx)("div", { onClick: () => { d("/events/webdev") }, className: "flex justify-center items-center align-middle cursor-pointer", children: (0, Ie.jsx)("img", { src: Ge, alt: "WebdevCard", className: "w-[33rem] card4  tilt ".concat(c ? "show" : "") }) })] })] }) }), (0, Ie.jsx)(Ze, {})] }) })); const Go = function() { const e = q(); return (0, t.useEffect)((() => { window.scrollTo(0, 0) }), [e.pathname]), null },
            Yo = n.p + "static/media/valorantbanner.211ff9834b4a70f43b0a.webp",
            qo = n.p + "static/media/m-valorantbanner.99bdb5f75af058a4aa82.webp",
            Xo = () => { window.location.href = "https://forms.gle/vWau3jHnnBznNtEU9" },
            Qo = () => { window.location.href = "https://forms.gle/MQ67x9Y2kGP17aSh9" },
            Ko = () => { window.location.href = "https://forms.gle/rttEsFa6cKQ8BLwz7" },
            Jo = () => { window.location.href = "https://forms.gle/RXKk7yRxZNbXRjX38" },
            el = Wo((() => { const [e, n] = (0, t.useState)(!1), r = Q(); return (0, Ie.jsxs)("div", { className: "wrapper ", children: [(0, Ie.jsxs)("nav", { className: "flex text-[#fff] flex-row  items-center align-middle mx-auto pt-2 pl-10 justify-between bg-[#000000CC] rounded-es-[100px] rounded-br-[100px] bg-opacity-80 absolute m-gaming-nav", style: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 15 }, children: [(0, Ie.jsx)(_e.default, { onOutsideClick: () => { n(!1) }, children: (0, Ie.jsxs)("div", { className: "flex flex-row justify-evenly items-center align-middle h-menus lg:mb-[1rem]  ml-[3rem]", style: (e => { if (document.documentElement.clientWidth <= 800) return { right: !e && "-100%" } })(e), children: [(0, Ie.jsx)("div", { onClick: () => { r("/contact") }, className: "flex justify-center cursor-pointer items-center align-middle font-varino text-focus-in navbar-text", children: "Contact" }), (0, Ie.jsx)("svg", { width: "34", height: "34", viewBox: "0 0 34 34", fill: "none", className: "text-focus-in m-hide", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "Huge-icon/arrows/outline/arrow-down", children: (0, Ie.jsx)("path", { id: "Vector 190", d: "M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425", stroke: "#F3F3F3", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) }), (0, Ie.jsx)("div", { onClick: () => { r("/about") }, className: " cursor-pointer font-varino ml-3 text-focus-in navbar-text", children: "About" }), (0, Ie.jsx)("svg", { width: "34", height: "34", className: "text-focus-in m-hide", viewBox: "0 0 34 34", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "Huge-icon/arrows/outline/arrow-down", children: (0, Ie.jsx)("path", { id: "Vector 190", d: "M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425", stroke: "#F3F3F3", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) })] }) }), (0, Ie.jsx)("a", { href: "https://www.instagram.com/ziegerscs", target: "_blank", className: "font-varino font-bold mx-auto text-xl translate-x-[-2.7rem] lg:mb-[1rem] text-focus-in logo-text", style: { textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }, children: "ZIEGERS" }), (0, Ie.jsxs)("a", { href: "h", className: "m-hide text-focus-in w-[150px] h-[47px] pl-[3px] pr-[13px] mr-[5rem] bg-[#B3FF00] from-zinc-950  rounded-full shadow border border-[#B3FF00] justify-start items-center inline-flex instagram-button mb-[0.5rem]", children: [(0, Ie.jsx)("div", { className: "w-4 h-4 relative flex-col justify-start items-start flex " }), (0, Ie.jsxs)("div", { className: "text-center text-neutral-900 text-xs font-normal font-['Varino'] flex flex-row justify-center items-center align-middle", children: [(0, Ie.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "instagram", children: (0, Ie.jsx)("path", { id: "Vector", d: "M11.6188 4.13967C11.4605 4.13967 11.3059 4.18659 11.1743 4.2745C11.0427 4.3624 10.9402 4.48735 10.8797 4.63353C10.8191 4.77971 10.8033 4.94056 10.8341 5.09575C10.865 5.25093 10.9412 5.39348 11.0531 5.50536C11.165 5.61724 11.3075 5.69343 11.4627 5.7243C11.6179 5.75517 11.7787 5.73933 11.9249 5.67878C12.0711 5.61823 12.196 5.51569 12.2839 5.38413C12.3718 5.25257 12.4188 5.0979 12.4188 4.93967C12.4188 4.7275 12.3345 4.52402 12.1844 4.37399C12.0344 4.22396 11.8309 4.13967 11.6188 4.13967ZM14.6854 5.75301C14.6725 5.19987 14.5689 4.65261 14.3788 4.13301C14.2092 3.68843 13.9454 3.28586 13.6054 2.95301C13.2753 2.61129 12.8718 2.34913 12.4254 2.18634C11.9072 1.99045 11.3593 1.88448 10.8054 1.87301C10.0988 1.83301 9.87209 1.83301 8.05876 1.83301C6.24542 1.83301 6.01876 1.83301 5.31209 1.87301C4.75819 1.88448 4.21032 1.99045 3.69209 2.18634C3.24654 2.35077 2.84338 2.61271 2.51209 2.95301C2.17037 3.28313 1.90821 3.68663 1.74542 4.13301C1.54953 4.65124 1.44356 5.19911 1.43209 5.75301C1.39209 6.45967 1.39209 6.68634 1.39209 8.49967C1.39209 10.313 1.39209 10.5397 1.43209 11.2463C1.44356 11.8002 1.54953 12.3481 1.74542 12.8663C1.90821 13.3127 2.17037 13.7162 2.51209 14.0463C2.84338 14.3866 3.24654 14.6486 3.69209 14.813C4.21032 15.0089 4.75819 15.1149 5.31209 15.1263C6.01876 15.1663 6.24542 15.1663 8.05876 15.1663C9.87209 15.1663 10.0988 15.1663 10.8054 15.1263C11.3593 15.1149 11.9072 15.0089 12.4254 14.813C12.8718 14.6502 13.2753 14.3881 13.6054 14.0463C13.9469 13.7147 14.211 13.3118 14.3788 12.8663C14.5689 12.3467 14.6725 11.7995 14.6854 11.2463C14.6854 10.5397 14.7254 10.313 14.7254 8.49967C14.7254 6.68634 14.7254 6.45967 14.6854 5.75301ZM13.4854 11.1663C13.4806 11.5895 13.4039 12.0088 13.2588 12.4063C13.1523 12.6965 12.9813 12.9586 12.7588 13.173C12.5425 13.3933 12.2809 13.564 11.9921 13.673C11.5946 13.8182 11.1753 13.8948 10.7521 13.8997C10.0854 13.933 9.83876 13.9397 8.08542 13.9397C6.33209 13.9397 6.08542 13.9397 5.41876 13.8997C4.97935 13.9079 4.54182 13.8402 4.12542 13.6997C3.84928 13.5851 3.59966 13.4149 3.39209 13.1997C3.17082 12.9855 3.00199 12.7231 2.89876 12.433C2.73599 12.0298 2.64572 11.601 2.63209 11.1663C2.63209 10.4997 2.59209 10.253 2.59209 8.49967C2.59209 6.74634 2.59209 6.49967 2.63209 5.83301C2.63508 5.40038 2.71406 4.97164 2.86542 4.56634C2.98279 4.28495 3.16293 4.03411 3.39209 3.83301C3.59463 3.60379 3.84495 3.42174 4.12542 3.29967C4.53179 3.15304 4.96009 3.07639 5.39209 3.07301C6.05876 3.07301 6.30542 3.03301 8.05876 3.03301C9.81209 3.03301 10.0588 3.03301 10.7254 3.07301C11.1486 3.07786 11.5679 3.15451 11.9654 3.29967C12.2684 3.41211 12.5403 3.59491 12.7588 3.83301C12.9772 4.03779 13.1479 4.28816 13.2588 4.56634C13.4069 4.9723 13.4836 5.40086 13.4854 5.83301C13.5188 6.49967 13.5254 6.74634 13.5254 8.49967C13.5254 10.253 13.5188 10.4997 13.4854 11.1663ZM8.05876 5.07967C7.38263 5.08099 6.72206 5.28269 6.16053 5.65929C5.59899 6.03588 5.16168 6.57047 4.90385 7.19551C4.64602 7.82055 4.57924 8.50799 4.71195 9.17096C4.84467 9.83394 5.17091 10.4427 5.64947 10.9203C6.12803 11.398 6.73743 11.723 7.40066 11.8544C8.06389 11.9859 8.7512 11.9177 9.37574 11.6587C10.0003 11.3997 10.534 10.9613 10.9095 10.399C11.285 9.83676 11.4854 9.1758 11.4854 8.49967C11.4863 8.04974 11.3982 7.60408 11.2262 7.18831C11.0543 6.77254 10.8018 6.39488 10.4833 6.07704C10.1649 5.7592 9.78672 5.50746 9.37062 5.33629C8.95452 5.16513 8.50868 5.07792 8.05876 5.07967ZM8.05876 10.7197C7.61968 10.7197 7.19047 10.5895 6.82539 10.3455C6.46031 10.1016 6.17577 9.75488 6.00774 9.34923C5.83972 8.94358 5.79575 8.49721 5.88141 8.06657C5.96707 7.63594 6.17851 7.24037 6.48898 6.9299C6.79945 6.61942 7.19502 6.40799 7.62566 6.32233C8.05629 6.23667 8.50266 6.28063 8.90831 6.44866C9.31397 6.61669 9.66068 6.90123 9.90462 7.26631C10.1486 7.63139 10.2788 8.0606 10.2788 8.49967C10.2788 8.79121 10.2213 9.07989 10.1098 9.34923C9.9982 9.61857 9.83468 9.86331 9.62853 10.0695C9.42239 10.2756 9.17766 10.4391 8.90831 10.5507C8.63897 10.6623 8.35029 10.7197 8.05876 10.7197Z", fill: "#000000" }) }) }), (0, Ie.jsx)("h1", { className: "ml-2 m-insta", children: "Instagram" })] })] }), (0, Ie.jsx)("div", { className: "flex menu-icon cursor-pointer flex-row  justify-end mx-auto m-game-menu", onClick: () => n((e => !e)), children: (0, Ie.jsx)("img", { src: He, alt: "menu", width: "50px", className: "flex border border-solid  m-burger border-[#F3F3F3] rounded-lg m-burger2 text-focus-in" }) })] }), (0, Ie.jsx)("div", { className: "font-varino", children: (0, Ie.jsxs)("div", { children: [(0, Ie.jsxs)("div", { className: "lg:flex justify-end z-10 hidden", children: [(0, Ie.jsxs)("svg", { width: "300", height: "341", viewBox: "0 0 382 341", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "absolute top-[2rem] right-[5px] z-10", children: [(0, Ie.jsx)("path", { d: "M0 135.107C0 108.981 0 95.9175 2.42664 85.1039C10.8952 47.3661 40.3661 17.8952 78.1039 9.42664C88.9175 7 101.981 7 128.107 7H143.832C151.85 7 159.774 8.72531 167.066 12.0588L168.579 12.7504C182.779 19.2416 199.134 19.0562 213.183 12.2447C220.302 8.79315 228.11 7 236.022 7H253.507C279.993 7 293.236 7 304.192 9.4935C341.69 18.0279 370.972 47.3098 379.507 84.8081C382 95.7639 382 109.007 382 135.493V174C382 236.624 382 267.935 368.471 291.227C359.744 306.252 347.252 318.744 332.227 327.471C308.935 341 277.624 341 215 341H167C104.376 341 73.0647 341 49.7734 327.471C34.7481 318.744 22.2561 306.252 13.5287 291.227C0 267.935 0 236.624 0 174V135.107Z", fill: "#1E1F29" }), (0, Ie.jsx)("path", { d: "M187.598 3.05973C188.96 1.62406 189.64 0.906222 190.5 0.906222C191.36 0.906222 192.04 1.62406 193.402 3.05973L194.054 3.74728C196.794 6.63538 198.163 8.07942 197.643 9.28971C197.123 10.5 195.133 10.5 191.152 10.5H189.848C185.867 10.5 183.877 10.5 183.357 9.28971C182.837 8.07942 184.206 6.63538 186.946 3.74729L187.598 3.05973Z", fill: "#0B0C10" })] }), (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "90", height: "111", viewBox: "0 0 105 111", fill: "none", className: "absolute top-[7rem] mr-[2.5rem] z-10", children: [(0, Ie.jsx)("path", { d: "M47.0275 21.0951L37.38 55.5022C37.0234 56.7732 36.4299 57.9555 35.6346 58.9789C34.8393 60.0024 33.8583 60.8462 32.7498 61.4604C31.6413 62.0746 30.4278 62.4467 29.1812 62.5546C27.9347 62.6626 26.6803 62.5042 25.4925 62.0888L11.2375 57.1057C9.94781 56.655 8.76623 55.9118 7.77497 54.9278C6.78371 53.9438 6.00657 52.7426 5.49761 51.4079C4.98865 50.0731 4.76011 48.6368 4.82787 47.1988C4.89563 45.7609 5.25808 44.3559 5.88999 43.0816L24.6275 5.29765C25.3848 3.77083 26.5049 2.48003 27.8771 1.55292C29.2492 0.6258 30.8258 0.094473 32.451 0.0114781C34.0762 -0.0715169 35.6937 0.296695 37.1435 1.0797C38.5933 1.86271 39.8253 3.03339 40.7175 4.47597L45.8875 12.8359C46.6327 14.0418 47.1207 15.4055 47.3176 16.832C47.5145 18.2585 47.4155 19.7133 47.0275 21.0951Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M80.1525 5.30034L98.8825 43.079C99.5144 44.3535 99.8769 45.7587 99.9446 47.1968C100.012 48.6349 99.7839 50.0714 99.2749 51.4064C98.766 52.7413 97.9889 53.9427 96.9976 54.927C96.0063 55.9113 94.8247 56.6548 93.535 57.1058L79.2875 62.0889C78.0992 62.5046 76.8443 62.6632 75.5971 62.5554C74.3499 62.4475 73.1358 62.0753 72.0268 61.4608C70.9178 60.8463 69.9364 60.0021 69.1408 58.9781C68.3452 57.9541 67.7515 56.7712 67.395 55.4995L57.75 21.0951C57.3625 19.7137 57.2638 18.2594 57.4607 16.8335C57.6575 15.4075 58.1453 14.0442 58.89 12.8386L64.055 4.48132C64.947 3.03742 66.1792 1.8655 67.6297 1.08151C69.0801 0.297532 70.6984 -0.0713408 72.3246 0.0113967C73.9507 0.0941343 75.5283 0.625614 76.9013 1.55325C78.2742 2.48088 79.3949 3.77251 80.1525 5.30034Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M37.9725 64.3481L44.885 37.2248C45.0383 36.6237 45.3741 36.0929 45.8404 35.7144C46.3068 35.3359 46.8777 35.1308 47.465 35.1309H56.96C57.5384 35.1303 58.1013 35.3287 58.5642 35.6962C59.0272 36.0638 59.3652 36.5806 59.5275 37.1692L66.995 64.2925C67.1115 64.715 67.1336 65.1606 67.0594 65.5937C66.9853 66.0269 66.8169 66.4358 66.5677 66.788C66.3185 67.1402 65.9954 67.4259 65.6239 67.6226C65.2524 67.8193 64.8428 67.9215 64.4275 67.9211H40.5525C40.1421 67.9211 39.7371 67.8209 39.3691 67.6282C39.0011 67.4356 38.6799 67.1556 38.4304 66.8101C38.1809 66.4645 38.0098 66.0627 37.9304 65.6358C37.851 65.2088 37.8654 64.7682 37.9725 64.3481Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M0 91.9569V68.5921C0.283333 65.7472 1.39 63.4774 3.32 61.7828C5.38667 59.9681 7.73667 59.2126 10.37 59.5166C11.315 59.6261 12.5867 60.0149 14.185 60.6828C19.5083 62.9093 25.27 65.2577 31.47 67.728C33.3117 68.4631 34.6167 69.1426 35.385 69.7663C37.8825 71.7993 39.345 75.1178 39.0675 78.4788C39.0142 79.1202 38.7833 80.2016 38.375 81.7231C36.4633 88.8496 34.6092 95.7596 32.8125 102.453C32.4842 103.676 31.8225 104.881 30.8275 106.069C28.62 108.703 25.1325 109.843 21.9025 109.101C20.9725 108.887 19.7825 108.362 18.3325 107.526C14.2225 105.155 10.205 102.893 6.28 100.741C4.73833 99.8963 3.595 99.094 2.85 98.3342C1.22 96.6714 0.27 94.5457 0 91.9569Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M105 68.6277V91.913C104.735 94.5159 103.797 96.6425 102.185 98.2929C101.425 99.0704 100.159 99.9469 98.3875 100.922C94.3625 103.14 90.3692 105.389 86.4075 107.668C85.0609 108.442 83.9434 108.923 83.055 109.11C79.115 109.942 75.1925 108.166 73.1225 104.585C72.6225 103.72 72.1542 102.451 71.7175 100.779C70.1092 94.6192 68.4775 88.5388 66.8225 82.5379C66.1842 80.2266 65.875 78.5939 65.895 77.6397C65.9775 73.4412 68.335 69.8629 72.075 68.3494C79.1367 65.4939 85.6783 62.823 91.7 60.3367C92.855 59.8596 93.8775 59.5795 94.7675 59.4965C97.4309 59.2438 99.7775 60.0478 101.808 61.9085C103.671 63.6155 104.735 65.8552 105 68.6277Z", fill: "#B3FF00" }), (0, Ie.jsx)("path", { d: "M66.6125 110.998H38.1875C36.4059 109.001 35.5025 106.729 35.4775 104.181C35.4659 103.052 35.7384 101.435 36.295 99.3304C37.7784 93.7307 39.2584 87.9401 40.735 81.9586C41.29 79.7127 41.7175 78.231 42.0175 77.5136C43.4525 74.0784 46.69 71.7857 50.245 71.6956C51.7767 71.6567 53.185 71.6638 54.47 71.7168C57.475 71.8413 60.185 73.7471 61.7675 76.3818C62.1942 77.0921 62.66 78.3635 63.165 80.196C65.0784 87.1528 66.9959 94.1079 68.9175 101.061C69.9492 104.79 69.1809 108.102 66.6125 110.998Z", fill: "#282A36" })] }), (0, Ie.jsx)("div", { className: "flex flex-row z-10", children: (0, Ie.jsxs)("div", { className: " absolute text-white text-xl font-semibold font-['Outfit'] translate-y-[7.5rem] -translate-x-[16.5rem]", children: ["Registration", (0, Ie.jsx)("br", {}), "Amount", (0, Ie.jsx)("div", { className: "text-slate-400 text-[15px] font-bold mt-[1rem]", children: "Prize Pool 5K" }), (0, Ie.jsx)("div", { className: "text-slate-400 text-[13px] font-medium", children: "No refund" }), (0, Ie.jsxs)("div", { className: "relative justify-center", children: [(0, Ie.jsx)("div", { className: "w-[225px] h-[60px] left-0 top-3 absolute bg-zinc-950 rounded-[100px]" }), (0, Ie.jsx)("div", { className: "w-6 h-5 left-[180px] top-[32px] absolute justify-center items-center inline-flex", children: (0, Ie.jsx)("div", { className: "w-6 h-5 relative", children: (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "22", viewBox: "0 0 24 24", fill: "none", children: [(0, Ie.jsx)("path", { d: "M14.43 5.92969L20.5 11.9997L14.43 18.0697", stroke: "#B3FF00", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" }), (0, Ie.jsx)("path", { d: "M3.5 12H20.33", stroke: "#B3FF00", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" })] }) }) }), (0, Ie.jsx)("div", { className: "left-[30px] top-[30px] absolute text-white text-[20px] font-semibold", children: "\u20b9250/Person" })] })] }) })] }), (0, Ie.jsxs)("div", { className: "relative flex justify-center", children: [(0, Ie.jsx)("div", { className: "flex justify-center valo-btn cursor-pointer absolute z-10 mx-auto bottom-[4.7rem]", children: (0, Ie.jsx)("div", { className: "flex justify-center ", children: (0, Ie.jsxs)("div", { onClick: Xo, className: "w-[235px] h-[65px] text-center flex flex-row justify-center items-center left-0 top-0 bg-[#CFFB25] rounded-[100px] m-valo-btn", children: [(0, Ie.jsx)("div", { className: "left-[2rem] absolute text-neutral-900 text-[22px] font-semibold font-['Outfit'] m-participate-text", children: "Participate" }), (0, Ie.jsx)("div", { children: (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "21", height: "24", viewBox: "0 0 24 24", fill: "none", className: "flex ml-[9.5rem] m-arrow", children: [(0, Ie.jsx)("path", { d: "M14.4301 5.92969L20.5001 11.9997L14.4301 18.0697", stroke: "#000000", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" }), (0, Ie.jsx)("path", { d: "M3.5 12H20.33", stroke: "#000000", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" })] }) })] }) }) }), (0, Ie.jsx)("img", { src: Yo, alt: "webdevbanner", className: "w-screen m-hide" }), (0, Ie.jsx)("img", { src: qo, alt: "webdevbanner", className: "w-screen lg:hidden" }), (0, Ie.jsx)("div", { className: " absolute w-[100vw] h-[300px] valorantbanneroverlay -bottom-32 flex justify-center items-center m-valorant-overlay", children: (0, Ie.jsxs)("div", { className: " inline-flex lg:p-[25px] items-center lg:gap-5 lg:rounded-[22px] webdevvenuecard translate-y-[5rem] justify-center align-middle m-venue-box", children: [(0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-calender", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.61073 0.672852C9.39667 0.672852 10.0338 1.30998 10.0338 2.09593V4.94208H27.1107V2.09593C27.1107 1.30998 27.7479 0.672852 28.5338 0.672852C29.3197 0.672852 29.9569 1.30998 29.9569 2.09593V4.94208H31.38C34.5237 4.94208 37.0723 7.49062 37.0723 10.6344V31.9805C37.0723 35.1243 34.5237 37.6729 31.38 37.6729H5.76457C2.6208 37.6729 0.0722656 35.1243 0.0722656 31.9805V10.6344C0.0722656 7.49062 2.6208 4.94208 5.76457 4.94208H7.18765V2.09593C7.18765 1.30998 7.82478 0.672852 8.61073 0.672852ZM34.2261 17.7498C34.2261 16.1779 32.9518 14.9036 31.38 14.9036H5.76457C4.19269 14.9036 2.91842 16.1779 2.91842 17.7498V31.9805C2.91842 33.5524 4.19269 34.8267 5.76457 34.8267H31.38C32.9518 34.8267 34.2261 33.5524 34.2261 31.9805V17.7498Z", fill: "#F3F3F3" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "18th January" })] }), (0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-time", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { d: "M19.0605 9.92285V19.1729H25.998M32.9355 19.1729C32.9355 26.8358 26.7235 33.0478 19.0605 33.0478C11.3976 33.0478 5.18555 26.8358 5.18555 19.1729C5.18555 11.5099 11.3976 5.29785 19.0605 5.29785C26.7235 5.29785 32.9355 11.5099 32.9355 19.1729Z", stroke: "#F3F3F3", "stroke-width": "2.47513", "stroke-linecap": "round", "stroke-linejoin": "round" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "(TBA) via WhatsApp" })] }), (0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-location", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M17.8383 35.1307C17.8849 35.1577 17.9215 35.1785 17.9474 35.1931L17.9904 35.2171C18.334 35.4057 18.7602 35.4043 19.1041 35.2177L19.1483 35.1931C19.1742 35.1785 19.2108 35.1577 19.2574 35.1307C19.3505 35.0768 19.4836 34.9981 19.6509 34.895C19.9854 34.6891 20.4576 34.3854 21.0216 33.9869C22.1478 33.1914 23.6504 32.011 25.1563 30.4692C28.1535 27.4005 31.2666 22.7898 31.2666 16.8603C31.2666 9.83598 25.5722 4.1416 18.5479 4.1416C11.5235 4.1416 5.8291 9.83598 5.8291 16.8603C5.8291 22.7898 8.94222 27.4005 11.9394 30.4692C13.4453 32.011 14.9479 33.1914 16.0741 33.9869C16.6381 34.3854 17.1103 34.6891 17.4448 34.895C17.6121 34.9981 17.7452 35.0768 17.8383 35.1307ZM18.5479 21.4853C21.1022 21.4853 23.1728 19.4147 23.1728 16.8604C23.1728 14.306 21.1022 12.2354 18.5479 12.2354C15.9935 12.2354 13.9229 14.306 13.9229 16.8604C13.9229 19.4147 15.9935 21.4853 18.5479 21.4853Z", fill: "#F3F3F3" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "CS Lab,4th Floor" })] })] }) })] })] }) }), (0, Ie.jsxs)("div", { className: "flex flex-col justify-center gap-[40px] items-center max-w-[950px] mx-auto lg:mt-40 mb-20", children: [(0, Ie.jsx)("div", { className: "text-[21px] font-inter text-center text-[#D4D4D4] tracking-[1.15px] font-medium z-10 m-bgmi-desc", children: "Valorant LAN tournament is a competitive event featuring some of the best teams competing against each other in the popular first-person shooter game, Valorant. The tournament will be played in a LAN (Local Area Network) setup, where all the participating teams will be physically present in the same location to play their matches. The tournament will feature a prize pool for the winning team. It aims to bring together the best teams and fans of Valorant to showcase their skills and enjoy the game together in a face to face environment which will add an extra layer of excitement and pressure." }), (0, Ie.jsx)("div", { className: "valorantmapselection w-[950px] m-mapselection", children: (0, Ie.jsxs)("div", { className: "p-[10px] flex flex-col gap-3 text-[#D4D4D4] tracking-[1.15px] text-[20px] font-inter text-center m-map-rules", children: [(0, Ie.jsx)("div", { className: "font-medium", children: "Map Selection Process for Best-of-One Matches:" }), (0, Ie.jsxs)("ul", { className: "flex flex-col gap-3 items-center text-center", style: { listStyleType: "disc" }, children: [(0, Ie.jsx)("li", { children: " Team A bans 1 Map" }), (0, Ie.jsx)("li", { children: " Team B bans 1 Map" }), (0, Ie.jsx)("li", { children: " Team A bans 1 Map" }), (0, Ie.jsx)("li", { children: " Team B bans 1 Map" }), (0, Ie.jsx)("li", { children: " Team A bans 1 Map" }), (0, Ie.jsx)("li", { children: " Team B bans 1 Map" }), (0, Ie.jsx)("li", { children: " Map 7 is only Map remaining" }), (0, Ie.jsx)("li", { children: " Teams will be picking sides by toss" })] })] }) }), (0, Ie.jsx)("div", { className: "valorantnote text-[#D05555] text-center text-[20px] font-inter italic font-medium tracking-[1.15px] m-note", children: "*NOTE: Any sort of damage to the property of Ziegers and the concerned authorities will not be tolerated and the one's responsible will be sanctioned with penalties and can also be charged a fine depending on the damage done." })] }), (0, Ie.jsx)(Ze, {})] }) })),
            tl = n.p + "static/media/codbanner.c0e6df2139cae98caddc.webp",
            nl = n.p + "static/media/m-codbanner.eb58e455b5702031a0db.webp",
            rl = Wo((() => { const [e, n] = (0, t.useState)(!1), r = Q(); return (0, Ie.jsxs)("section", { className: "bg-[#0A0A0B] overflow-x-hidden wrapper ", children: [(0, Ie.jsxs)("nav", { className: "flex text-[#fff] flex-row  items-center align-middle mx-auto pt-2 pl-10 justify-between bg-[#000000CC] rounded-es-[100px] rounded-br-[100px] bg-opacity-80 absolute m-gaming-nav", style: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 15 }, children: [(0, Ie.jsx)(_e.default, { onOutsideClick: () => { n(!1) }, children: (0, Ie.jsxs)("div", { className: "flex flex-row justify-evenly items-center align-middle h-menus lg:mb-[1rem]  ml-[3rem]", style: (e => { if (document.documentElement.clientWidth <= 800) return { right: !e && "-100%" } })(e), children: [(0, Ie.jsx)("div", { onClick: () => { r("/contact") }, className: "flex justify-center cursor-pointer items-center align-middle font-varino text-focus-in navbar-text", children: "Contact" }), (0, Ie.jsx)("svg", { width: "34", height: "34", viewBox: "0 0 34 34", fill: "none", className: "text-focus-in m-hide", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "Huge-icon/arrows/outline/arrow-down", children: (0, Ie.jsx)("path", { id: "Vector 190", d: "M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425", stroke: "#F3F3F3", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) }), (0, Ie.jsx)("div", { onClick: () => { r("/about") }, className: "cursor-pointer font-varino ml-3 text-focus-in navbar-text", children: "About" }), (0, Ie.jsx)("svg", { width: "34", height: "34", className: "text-focus-in m-hide", viewBox: "0 0 34 34", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "Huge-icon/arrows/outline/arrow-down", children: (0, Ie.jsx)("path", { id: "Vector 190", d: "M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425", stroke: "#F3F3F3", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) })] }) }), (0, Ie.jsx)("a", { href: "/", className: "font-varino font-bold mx-auto text-xl translate-x-[-2.7rem] lg:mb-[1rem] text-focus-in logo-text", style: { textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }, children: "ZIEGERS" }), (0, Ie.jsxs)("a", { href: "https://www.instagram.com/ziegerscs", target: "_blank", className: "m-hide text-focus-in w-[150px] h-[47px] pl-[3px] pr-[13px] mr-[5rem] bg-[#D6014C] from-zinc-950  rounded-full shadow border border-[#D6014C] justify-start items-center inline-flex instagram-button mb-[0.5rem]", children: [(0, Ie.jsx)("div", { className: "w-4 h-4 relative flex-col justify-start items-start flex " }), (0, Ie.jsxs)("div", { className: "text-center text-white  text-xs font-normal font-['Varino'] flex flex-row justify-center items-center align-middle", children: [(0, Ie.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "instagram", children: (0, Ie.jsx)("path", { id: "Vector", d: "M11.6188 4.13967C11.4605 4.13967 11.3059 4.18659 11.1743 4.2745C11.0427 4.3624 10.9402 4.48735 10.8797 4.63353C10.8191 4.77971 10.8033 4.94056 10.8341 5.09575C10.865 5.25093 10.9412 5.39348 11.0531 5.50536C11.165 5.61724 11.3075 5.69343 11.4627 5.7243C11.6179 5.75517 11.7787 5.73933 11.9249 5.67878C12.0711 5.61823 12.196 5.51569 12.2839 5.38413C12.3718 5.25257 12.4188 5.0979 12.4188 4.93967C12.4188 4.7275 12.3345 4.52402 12.1844 4.37399C12.0344 4.22396 11.8309 4.13967 11.6188 4.13967ZM14.6854 5.75301C14.6725 5.19987 14.5689 4.65261 14.3788 4.13301C14.2092 3.68843 13.9454 3.28586 13.6054 2.95301C13.2753 2.61129 12.8718 2.34913 12.4254 2.18634C11.9072 1.99045 11.3593 1.88448 10.8054 1.87301C10.0988 1.83301 9.87209 1.83301 8.05876 1.83301C6.24542 1.83301 6.01876 1.83301 5.31209 1.87301C4.75819 1.88448 4.21032 1.99045 3.69209 2.18634C3.24654 2.35077 2.84338 2.61271 2.51209 2.95301C2.17037 3.28313 1.90821 3.68663 1.74542 4.13301C1.54953 4.65124 1.44356 5.19911 1.43209 5.75301C1.39209 6.45967 1.39209 6.68634 1.39209 8.49967C1.39209 10.313 1.39209 10.5397 1.43209 11.2463C1.44356 11.8002 1.54953 12.3481 1.74542 12.8663C1.90821 13.3127 2.17037 13.7162 2.51209 14.0463C2.84338 14.3866 3.24654 14.6486 3.69209 14.813C4.21032 15.0089 4.75819 15.1149 5.31209 15.1263C6.01876 15.1663 6.24542 15.1663 8.05876 15.1663C9.87209 15.1663 10.0988 15.1663 10.8054 15.1263C11.3593 15.1149 11.9072 15.0089 12.4254 14.813C12.8718 14.6502 13.2753 14.3881 13.6054 14.0463C13.9469 13.7147 14.211 13.3118 14.3788 12.8663C14.5689 12.3467 14.6725 11.7995 14.6854 11.2463C14.6854 10.5397 14.7254 10.313 14.7254 8.49967C14.7254 6.68634 14.7254 6.45967 14.6854 5.75301ZM13.4854 11.1663C13.4806 11.5895 13.4039 12.0088 13.2588 12.4063C13.1523 12.6965 12.9813 12.9586 12.7588 13.173C12.5425 13.3933 12.2809 13.564 11.9921 13.673C11.5946 13.8182 11.1753 13.8948 10.7521 13.8997C10.0854 13.933 9.83876 13.9397 8.08542 13.9397C6.33209 13.9397 6.08542 13.9397 5.41876 13.8997C4.97935 13.9079 4.54182 13.8402 4.12542 13.6997C3.84928 13.5851 3.59966 13.4149 3.39209 13.1997C3.17082 12.9855 3.00199 12.7231 2.89876 12.433C2.73599 12.0298 2.64572 11.601 2.63209 11.1663C2.63209 10.4997 2.59209 10.253 2.59209 8.49967C2.59209 6.74634 2.59209 6.49967 2.63209 5.83301C2.63508 5.40038 2.71406 4.97164 2.86542 4.56634C2.98279 4.28495 3.16293 4.03411 3.39209 3.83301C3.59463 3.60379 3.84495 3.42174 4.12542 3.29967C4.53179 3.15304 4.96009 3.07639 5.39209 3.07301C6.05876 3.07301 6.30542 3.03301 8.05876 3.03301C9.81209 3.03301 10.0588 3.03301 10.7254 3.07301C11.1486 3.07786 11.5679 3.15451 11.9654 3.29967C12.2684 3.41211 12.5403 3.59491 12.7588 3.83301C12.9772 4.03779 13.1479 4.28816 13.2588 4.56634C13.4069 4.9723 13.4836 5.40086 13.4854 5.83301C13.5188 6.49967 13.5254 6.74634 13.5254 8.49967C13.5254 10.253 13.5188 10.4997 13.4854 11.1663ZM8.05876 5.07967C7.38263 5.08099 6.72206 5.28269 6.16053 5.65929C5.59899 6.03588 5.16168 6.57047 4.90385 7.19551C4.64602 7.82055 4.57924 8.50799 4.71195 9.17096C4.84467 9.83394 5.17091 10.4427 5.64947 10.9203C6.12803 11.398 6.73743 11.723 7.40066 11.8544C8.06389 11.9859 8.7512 11.9177 9.37574 11.6587C10.0003 11.3997 10.534 10.9613 10.9095 10.399C11.285 9.83676 11.4854 9.1758 11.4854 8.49967C11.4863 8.04974 11.3982 7.60408 11.2262 7.18831C11.0543 6.77254 10.8018 6.39488 10.4833 6.07704C10.1649 5.7592 9.78672 5.50746 9.37062 5.33629C8.95452 5.16513 8.50868 5.07792 8.05876 5.07967ZM8.05876 10.7197C7.61968 10.7197 7.19047 10.5895 6.82539 10.3455C6.46031 10.1016 6.17577 9.75488 6.00774 9.34923C5.83972 8.94358 5.79575 8.49721 5.88141 8.06657C5.96707 7.63594 6.17851 7.24037 6.48898 6.9299C6.79945 6.61942 7.19502 6.40799 7.62566 6.32233C8.05629 6.23667 8.50266 6.28063 8.90831 6.44866C9.31397 6.61669 9.66068 6.90123 9.90462 7.26631C10.1486 7.63139 10.2788 8.0606 10.2788 8.49967C10.2788 8.79121 10.2213 9.07989 10.1098 9.34923C9.9982 9.61857 9.83468 9.86331 9.62853 10.0695C9.42239 10.2756 9.17766 10.4391 8.90831 10.5507C8.63897 10.6623 8.35029 10.7197 8.05876 10.7197Z", fill: "#f3f3f3" }) }) }), (0, Ie.jsx)("h1", { className: "ml-2 m-insta", children: "Instagram" })] })] }), (0, Ie.jsx)("div", { className: "flex menu-icon cursor-pointer flex-row  justify-end mx-auto m-game-menu", onClick: () => n((e => !e)), children: (0, Ie.jsx)("img", { src: He, alt: "menu", width: "50px", className: "flex border border-solid  m-burger border-[#F3F3F3] rounded-lg m-burger2 text-focus-in" }) })] }), (0, Ie.jsx)("div", { className: "font-varino", children: (0, Ie.jsxs)("div", { children: [(0, Ie.jsxs)("div", { className: "lg:flex justify-end z-10 hidden", children: [(0, Ie.jsxs)("svg", { width: "300", height: "341", viewBox: "0 0 382 341", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "absolute top-[2rem] right-[5px] z-10", children: [(0, Ie.jsx)("path", { d: "M0 135.107C0 108.981 0 95.9175 2.42664 85.1039C10.8952 47.3661 40.3661 17.8952 78.1039 9.42664C88.9175 7 101.981 7 128.107 7H143.832C151.85 7 159.774 8.72531 167.066 12.0588L168.579 12.7504C182.779 19.2416 199.134 19.0562 213.183 12.2447C220.302 8.79315 228.11 7 236.022 7H253.507C279.993 7 293.236 7 304.192 9.4935C341.69 18.0279 370.972 47.3098 379.507 84.8081C382 95.7639 382 109.007 382 135.493V174C382 236.624 382 267.935 368.471 291.227C359.744 306.252 347.252 318.744 332.227 327.471C308.935 341 277.624 341 215 341H167C104.376 341 73.0647 341 49.7734 327.471C34.7481 318.744 22.2561 306.252 13.5287 291.227C0 267.935 0 236.624 0 174V135.107Z", fill: "#1E1F29" }), (0, Ie.jsx)("path", { d: "M187.598 3.05973C188.96 1.62406 189.64 0.906222 190.5 0.906222C191.36 0.906222 192.04 1.62406 193.402 3.05973L194.054 3.74728C196.794 6.63538 198.163 8.07942 197.643 9.28971C197.123 10.5 195.133 10.5 191.152 10.5H189.848C185.867 10.5 183.877 10.5 183.357 9.28971C182.837 8.07942 184.206 6.63538 186.946 3.74729L187.598 3.05973Z", fill: "#0B0C10" })] }), (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "90", height: "111", viewBox: "0 0 105 111", fill: "none", className: "absolute top-[7rem] mr-[2.5rem] z-10", children: [(0, Ie.jsx)("path", { d: "M47.0275 21.0951L37.38 55.5022C37.0234 56.7732 36.4299 57.9555 35.6346 58.9789C34.8393 60.0024 33.8583 60.8462 32.7498 61.4604C31.6413 62.0746 30.4278 62.4467 29.1812 62.5546C27.9347 62.6626 26.6803 62.5042 25.4925 62.0888L11.2375 57.1057C9.94781 56.655 8.76623 55.9118 7.77497 54.9278C6.78371 53.9438 6.00657 52.7426 5.49761 51.4079C4.98865 50.0731 4.76011 48.6368 4.82787 47.1988C4.89563 45.7609 5.25808 44.3559 5.88999 43.0816L24.6275 5.29765C25.3848 3.77083 26.5049 2.48003 27.8771 1.55292C29.2492 0.6258 30.8258 0.094473 32.451 0.0114781C34.0762 -0.0715169 35.6937 0.296695 37.1435 1.0797C38.5933 1.86271 39.8253 3.03339 40.7175 4.47597L45.8875 12.8359C46.6327 14.0418 47.1207 15.4055 47.3176 16.832C47.5145 18.2585 47.4155 19.7133 47.0275 21.0951Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M80.1525 5.30034L98.8825 43.079C99.5144 44.3535 99.8769 45.7587 99.9446 47.1968C100.012 48.6349 99.7839 50.0714 99.2749 51.4064C98.766 52.7413 97.9889 53.9427 96.9976 54.927C96.0063 55.9113 94.8247 56.6548 93.535 57.1058L79.2875 62.0889C78.0992 62.5046 76.8443 62.6632 75.5971 62.5554C74.3499 62.4475 73.1358 62.0753 72.0268 61.4608C70.9178 60.8463 69.9364 60.0021 69.1408 58.9781C68.3452 57.9541 67.7515 56.7712 67.395 55.4995L57.75 21.0951C57.3625 19.7137 57.2638 18.2594 57.4607 16.8335C57.6575 15.4075 58.1453 14.0442 58.89 12.8386L64.055 4.48132C64.947 3.03742 66.1792 1.8655 67.6297 1.08151C69.0801 0.297532 70.6984 -0.0713408 72.3246 0.0113967C73.9507 0.0941343 75.5283 0.625614 76.9013 1.55325C78.2742 2.48088 79.3949 3.77251 80.1525 5.30034Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M37.9725 64.3481L44.885 37.2248C45.0383 36.6237 45.3741 36.0929 45.8404 35.7144C46.3068 35.3359 46.8777 35.1308 47.465 35.1309H56.96C57.5384 35.1303 58.1013 35.3287 58.5642 35.6962C59.0272 36.0638 59.3652 36.5806 59.5275 37.1692L66.995 64.2925C67.1115 64.715 67.1336 65.1606 67.0594 65.5937C66.9853 66.0269 66.8169 66.4358 66.5677 66.788C66.3185 67.1402 65.9954 67.4259 65.6239 67.6226C65.2524 67.8193 64.8428 67.9215 64.4275 67.9211H40.5525C40.1421 67.9211 39.7371 67.8209 39.3691 67.6282C39.0011 67.4356 38.6799 67.1556 38.4304 66.8101C38.1809 66.4645 38.0098 66.0627 37.9304 65.6358C37.851 65.2088 37.8654 64.7682 37.9725 64.3481Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M0 91.9569V68.5921C0.283333 65.7472 1.39 63.4774 3.32 61.7828C5.38667 59.9681 7.73667 59.2126 10.37 59.5166C11.315 59.6261 12.5867 60.0149 14.185 60.6828C19.5083 62.9093 25.27 65.2577 31.47 67.728C33.3117 68.4631 34.6167 69.1426 35.385 69.7663C37.8825 71.7993 39.345 75.1178 39.0675 78.4788C39.0142 79.1202 38.7833 80.2016 38.375 81.7231C36.4633 88.8496 34.6092 95.7596 32.8125 102.453C32.4842 103.676 31.8225 104.881 30.8275 106.069C28.62 108.703 25.1325 109.843 21.9025 109.101C20.9725 108.887 19.7825 108.362 18.3325 107.526C14.2225 105.155 10.205 102.893 6.28 100.741C4.73833 99.8963 3.595 99.094 2.85 98.3342C1.22 96.6714 0.27 94.5457 0 91.9569Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M105 68.6277V91.913C104.735 94.5159 103.797 96.6425 102.185 98.2929C101.425 99.0704 100.159 99.9469 98.3875 100.922C94.3625 103.14 90.3692 105.389 86.4075 107.668C85.0609 108.442 83.9434 108.923 83.055 109.11C79.115 109.942 75.1925 108.166 73.1225 104.585C72.6225 103.72 72.1542 102.451 71.7175 100.779C70.1092 94.6192 68.4775 88.5388 66.8225 82.5379C66.1842 80.2266 65.875 78.5939 65.895 77.6397C65.9775 73.4412 68.335 69.8629 72.075 68.3494C79.1367 65.4939 85.6783 62.823 91.7 60.3367C92.855 59.8596 93.8775 59.5795 94.7675 59.4965C97.4309 59.2438 99.7775 60.0478 101.808 61.9085C103.671 63.6155 104.735 65.8552 105 68.6277Z", fill: "#D6014C" }), (0, Ie.jsx)("path", { d: "M66.6125 110.998H38.1875C36.4059 109.001 35.5025 106.729 35.4775 104.181C35.4659 103.052 35.7384 101.435 36.295 99.3304C37.7784 93.7307 39.2584 87.9401 40.735 81.9586C41.29 79.7127 41.7175 78.231 42.0175 77.5136C43.4525 74.0784 46.69 71.7857 50.245 71.6956C51.7767 71.6567 53.185 71.6638 54.47 71.7168C57.475 71.8413 60.185 73.7471 61.7675 76.3818C62.1942 77.0921 62.66 78.3635 63.165 80.196C65.0784 87.1528 66.9959 94.1079 68.9175 101.061C69.9492 104.79 69.1809 108.102 66.6125 110.998Z", fill: "#282A36" })] }), (0, Ie.jsx)("div", { className: "flex flex-row z-10", children: (0, Ie.jsxs)("div", { className: " absolute text-white text-xl font-semibold font-['Outfit'] translate-y-[7.5rem] -translate-x-[16.5rem]", children: ["Registration", (0, Ie.jsx)("br", {}), "Amount", (0, Ie.jsx)("div", { className: "text-slate-400 text-[15px] font-medium mt-[1rem]", children: "Prize Pool 1K" }), (0, Ie.jsx)("div", { className: "text-slate-400 text-[13px] font-medium", children: "No refund" }), (0, Ie.jsxs)("div", { className: "relative justify-center", children: [(0, Ie.jsx)("div", { className: "w-[225px] h-[60px] left-0 top-3 absolute bg-zinc-950 rounded-[100px]" }), (0, Ie.jsx)("div", { className: "w-6 h-5 left-[180px] top-[32px] absolute justify-center items-center inline-flex", children: (0, Ie.jsx)("div", { className: "w-6 h-5 relative", children: (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "22", viewBox: "0 0 24 24", fill: "none", children: [(0, Ie.jsx)("path", { d: "M14.43 5.92969L20.5 11.9997L14.43 18.0697", stroke: "#D6014C", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" }), (0, Ie.jsx)("path", { d: "M3.5 12H20.33", stroke: "#D6014C", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" })] }) }) }), (0, Ie.jsx)("div", { className: "left-[30px] top-[30px] absolute text-white text-[20px] font-semibold", children: "\u20b9200/Team" })] })] }) })] }), (0, Ie.jsxs)("div", { className: "relative flex justify-center", children: [(0, Ie.jsx)("div", { className: "flex justify-center cod-btn cursor-pointer absolute z-10 mx-auto bottom-[8.5rem]", children: (0, Ie.jsx)("div", { className: "flex justify-center ", children: (0, Ie.jsxs)("div", { onClick: Xo, className: "w-[235px] h-[65px] text-center flex flex-row items-center  left-0 top-0 bg-[#D6014C] rounded-[100px] m-cod-btn ", children: [(0, Ie.jsx)("div", { className: "left-[2rem] absolute text-white text-[22px] font-semibold font-['Outfit'] m-participate-text", children: "Participate" }), (0, Ie.jsx)("div", { className: "flex align-middle ", children: (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "21", height: "24", viewBox: "0 0 24 24", fill: "none", className: "flex ml-[11.3rem] m-arrow", children: [(0, Ie.jsx)("path", { d: "M14.4301 5.92969L20.5001 11.9997L14.4301 18.0697", stroke: "#fff", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" }), (0, Ie.jsx)("path", { d: "M3.5 12H20.33", stroke: "#fff", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" })] }) })] }) }) }), (0, Ie.jsx)("img", { src: tl, alt: "webdevbanner", className: "w-screen m-hide" }), (0, Ie.jsx)("img", { src: nl, alt: "webdevbanner", className: "w-screen lg:hidden" }), (0, Ie.jsx)("div", { className: " absolute w-[100vw] h-[300px] valorantbanneroverlay -bottom-32 flex justify-center items-center", children: (0, Ie.jsxs)("div", { className: " inline-flex lg:p-[25px] items-center lg:gap-5 lg:rounded-[22px] webdevvenuecard translate-y-[5rem] justify-center align-middle m-venue-box", children: [(0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-calender", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.61073 0.672852C9.39667 0.672852 10.0338 1.30998 10.0338 2.09593V4.94208H27.1107V2.09593C27.1107 1.30998 27.7479 0.672852 28.5338 0.672852C29.3197 0.672852 29.9569 1.30998 29.9569 2.09593V4.94208H31.38C34.5237 4.94208 37.0723 7.49062 37.0723 10.6344V31.9805C37.0723 35.1243 34.5237 37.6729 31.38 37.6729H5.76457C2.6208 37.6729 0.0722656 35.1243 0.0722656 31.9805V10.6344C0.0722656 7.49062 2.6208 4.94208 5.76457 4.94208H7.18765V2.09593C7.18765 1.30998 7.82478 0.672852 8.61073 0.672852ZM34.2261 17.7498C34.2261 16.1779 32.9518 14.9036 31.38 14.9036H5.76457C4.19269 14.9036 2.91842 16.1779 2.91842 17.7498V31.9805C2.91842 33.5524 4.19269 34.8267 5.76457 34.8267H31.38C32.9518 34.8267 34.2261 33.5524 34.2261 31.9805V17.7498Z", fill: "#F3F3F3" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "18th January" })] }), (0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-time", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { d: "M19.0605 9.92285V19.1729H25.998M32.9355 19.1729C32.9355 26.8358 26.7235 33.0478 19.0605 33.0478C11.3976 33.0478 5.18555 26.8358 5.18555 19.1729C5.18555 11.5099 11.3976 5.29785 19.0605 5.29785C26.7235 5.29785 32.9355 11.5099 32.9355 19.1729Z", stroke: "#F3F3F3", "stroke-width": "2.47513", "stroke-linecap": "round", "stroke-linejoin": "round" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "(TBA) via WhatsApp" })] }), (0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-location", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M17.8383 35.1307C17.8849 35.1577 17.9215 35.1785 17.9474 35.1931L17.9904 35.2171C18.334 35.4057 18.7602 35.4043 19.1041 35.2177L19.1483 35.1931C19.1742 35.1785 19.2108 35.1577 19.2574 35.1307C19.3505 35.0768 19.4836 34.9981 19.6509 34.895C19.9854 34.6891 20.4576 34.3854 21.0216 33.9869C22.1478 33.1914 23.6504 32.011 25.1563 30.4692C28.1535 27.4005 31.2666 22.7898 31.2666 16.8603C31.2666 9.83598 25.5722 4.1416 18.5479 4.1416C11.5235 4.1416 5.8291 9.83598 5.8291 16.8603C5.8291 22.7898 8.94222 27.4005 11.9394 30.4692C13.4453 32.011 14.9479 33.1914 16.0741 33.9869C16.6381 34.3854 17.1103 34.6891 17.4448 34.895C17.6121 34.9981 17.7452 35.0768 17.8383 35.1307ZM18.5479 21.4853C21.1022 21.4853 23.1728 19.4147 23.1728 16.8604C23.1728 14.306 21.1022 12.2354 18.5479 12.2354C15.9935 12.2354 13.9229 14.306 13.9229 16.8604C13.9229 19.4147 15.9935 21.4853 18.5479 21.4853Z", fill: "#F3F3F3" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "CS Lab,4th Floor" })] })] }) })] })] }) }), (0, Ie.jsx)("div", { className: "flex flex-col justify-center gap-[40px] items-center max-w-[950px] mx-auto lg:mt-[10rem] mb-20", children: (0, Ie.jsx)("div", { className: "text-[21px] font-inter text-center text-[#D4D4D4] tracking-[1.15px] font-medium z-10 m-bgmi-desc", children: "Call of Duty Mobile is a competitive event for the best teams competing against each other in the popular first-person shooter game, Call of Duty Mobile. The tournament will be played in the Team Deathmatch mode, where teams will battle against each other to get the most kills within a set time limit. The tournament will feature a prize pool for the winning team, and it will be played on mobile devices. It aims to bring together the best teams and fans of Call of Duty Mobile to showcase their skills and enjoy the game together." }) }), (0, Ie.jsxs)("div", { className: "flex flex-col text-center justify-center z-10 lg:pt-[10rem] m-lgsvg", children: [(0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1400", height: "350", viewBox: "0 0 1920 491", fill: "none", className: "relative z-[10rem] mt-[-15.5rem] -mb-[5rem] m-rule-banner", children: [(0, Ie.jsx)("path", { d: "M-21.6252 490.432L-22.2461 308.932L2319.61 0.704816L2221.19 189.569L-21.6252 490.432Z", fill: "url(#paint0_linear_529_185)" }), (0, Ie.jsx)("defs", { children: (0, Ie.jsxs)("linearGradient", { id: "paint0_linear_529_185", x1: "1966.11", y1: "45.1715", x2: "130.911", y2: "512.69", gradientUnits: "userSpaceOnUse", children: [(0, Ie.jsx)("stop", { "stop-color": "#0B0C10" }), (0, Ie.jsx)("stop", { offset: "0.505448", "stop-color": "#D6014C" }), (0, Ie.jsx)("stop", { offset: "0.885415", "stop-color": "#D6014C", "stop-opacity": "0.1582" })] }) })] }), (0, Ie.jsx)("div", { className: "text-zinc-100 text-[80px] font-normal font-['Varino'] translate-y-[-9.7rem] leading-[137.20px] tracking-[4.90px] z-10 m-rule-text", children: "RULES" })] }), (0, Ie.jsx)("div", { className: "flex flex-col items-center text-center m-rules", children: (0, Ie.jsxs)("div", { className: "relative flex text-center flex-col items-center justify-center", children: [(0, Ie.jsx)("div", { className: "text-center text-white text-opacity-10 text-[70px] font-bold font-['Readex Pro'] m-rule-no-1", children: "01" }), (0, Ie.jsx)("div", { className: "text-center z-10 translate-y-[-3rem] text-white text-[30px] font-semibold font-['Readex Pro'] m-codm-rule-1", children: "Finger Sleeves are allowed" }), (0, Ie.jsx)("div", { className: "w-[355px] h-[20px] translate-y-[-4.2rem] bg-gradient-to-r from-zinc-950 to-rose-600 m-rule-underlay-1" }), (0, Ie.jsx)("div", { className: "text-center text-white text-opacity-10 text-[80px] font-bold font-['Readex Pro'] m-rule-no-2", children: "02" }), (0, Ie.jsx)("div", { className: "text-center z-10 max-w-[35rem] translate-y-[-3rem] text-white text-[35px] font-semibold font-['Readex Pro'] lg:leading-[40px] m-codm-rule-2", children: "The match will be conducted in TDM mode" }), (0, Ie.jsx)("div", { className: "w-[493px] h-[20px] translate-y-[-6.4rem] bg-gradient-to-r from-zinc-950 to-rose-600 m-rule-underlay-2" }), (0, Ie.jsx)("div", { className: "text-center  text-white text-opacity-10 text-[90px] font-bold font-['Readex Pro'] m-rule-no-3", children: "03" }), (0, Ie.jsx)("div", { className: "text-center z-10 max-w-[50rem] translate-y-[-3rem] text-white text-[40px] font-semibold font-['Readex Pro'] lg:leading-[40px] m-codm-rule-3", children: "Participants are required to bring their own smartphones." }), (0, Ie.jsx)("div", { className: "w-[780px] h-[20px] translate-y-[-6.4rem] bg-gradient-to-r from-zinc-950 to-rose-600 m-rule-underlay-3" }), (0, Ie.jsx)("div", { className: "text-center  text-white text-opacity-10 text-[100px] font-bold font-['Readex Pro'] m-rule-no-4", children: "04" }), (0, Ie.jsx)("div", { className: "text-center  z-10 max-w-[54rem] translate-y-[-3.5rem] text-white text-[45px] font-semibold font-['Readex Pro'] lg:leading-[45px] m-codm-rule-4", children: "Bracket size and prizes may vary based on the number of eligible teams at the tournament's start." }), (0, Ie.jsx)("div", { className: "w-[720px] h-[20px] translate-y-[-7.3rem] bg-gradient-to-r from-zinc-950 to-rose-600 m-rule-underlay-4" }), (0, Ie.jsx)("div", { className: "w-[850px] h-[20px] translate-y-[-11.5rem] bg-gradient-to-r from-zinc-950 to-rose-600 m-rule-underlay-5" })] }) }), (0, Ie.jsxs)("div", { className: "flex flex-col mx-auto text-center max-w-[950px]", children: [(0, Ie.jsx)("div", { className: "text-zinc-100 text-[68px] font-normal font-['Varino'] tracking-[4.90px] m-5 m-rule-text", children: "IN-Game RULES" }), (0, Ie.jsx)("div", { className: "valorantmapselection w-[950px] mx-auto text-center p-5 m-mapselection", children: (0, Ie.jsx)("div", { className: "p-[10px] flex flex-col gap-3 text-[#D4D4D4] tracking-[1.15px] text-[20px] font-inter text-center m-map-rules", children: (0, Ie.jsxs)("ul", { className: "flex flex-col gap-3 items-center text-center", style: { listStyleType: "disc" }, children: [(0, Ie.jsx)("li", { children: "Trip mines are not allowed" }), (0, Ie.jsx)("li", { children: " Thermite are not allowed" }), (0, Ie.jsx)("li", { children: " No Operator Skills are allowed" }), (0, Ie.jsx)("li", { children: " Persistence Perks Not Allowed" }), (0, Ie.jsx)("li", { children: " No Emotes Are Allowed " }), (0, Ie.jsx)("li", { children: " No New Guns Are Allowed(Such as Groza) " }), (0, Ie.jsxs)("li", { children: [" ", "Download the Ranked Maps (Map will be decided by the Ziegers Teams)"] })] }) }) }), (0, Ie.jsx)("div", { className: "valorantnote text-[#D05555] text-center mx-auto p-5  text-[20px] font-inter italic font-medium tracking-[1.15px] m-note", children: "*NOTE: Any sort of damage to the property of Ziegers and the concerned authorities will not be tolerated and the one's responsible will be sanctioned with penalties and can also be charged a fine depending on the damage done." })] }), (0, Ie.jsx)("div", { className: "flex mt-[5rem]", children: (0, Ie.jsx)(Ze, {}) })] }) })),
            il = n.p + "static/media/bgmibanner.e789e815a08eefc52031.webp",
            al = n.p + "static/media/m-bgmibanner.d803103b9c4855735219.webp",
            sl = n.p + "static/media/eranglemap.5e573eb533ad4849e6cf.webp",
            ol = n.p + "static/media/vikendimap.c9137c6af05f7e3a2a2c.webp",
            ll = n.p + "static/media/miramarmap.6c514c89d06dab9f4923.webp",
            cl = n.p + "static/media/sanhokmap.c84373f1551adc74ac43.webp",
            ul = Wo((() => { const [e, n] = (0, t.useState)(!1);
                (0, t.useEffect)((() => { document.title = "Ziegers-BGMI" }), []); const r = Q(); return (0, Ie.jsxs)("div", { className: "wrapper ", children: [(0, Ie.jsxs)("nav", { className: "flex text-[#fff] flex-row  items-center align-middle mx-auto pt-2 pl-10 justify-between bg-[#000000CC] rounded-es-[100px] rounded-br-[100px] bg-opacity-80 absolute m-gaming-nav", style: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 15 }, children: [(0, Ie.jsx)(_e.default, { onOutsideClick: () => { n(!1) }, children: (0, Ie.jsxs)("div", { className: "flex flex-row justify-evenly items-center align-middle h-menus lg:mb-[1rem]  ml-[3rem]", style: (e => { if (document.documentElement.clientWidth <= 800) return { right: !e && "-100%" } })(e), children: [(0, Ie.jsx)("div", { onClick: () => { r("/contact") }, className: "flex cursor-pointer justify-center items-center align-middle font-varino text-focus-in navbar-text cursor-pointer", children: "Contact" }), (0, Ie.jsx)("svg", { width: "34", height: "34", viewBox: "0 0 34 34", fill: "none", className: "text-focus-in m-hide", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "Huge-icon/arrows/outline/arrow-down", children: (0, Ie.jsx)("path", { id: "Vector 190", d: "M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425", stroke: "#F3F3F3", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) }), (0, Ie.jsx)("div", { onClick: () => { r("/about") }, className: " font-varino ml-3 text-focus-in navbar-text cursor-pointer", children: "About" }), (0, Ie.jsx)("svg", { width: "34", height: "34", className: "text-focus-in m-hide", viewBox: "0 0 34 34", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "Huge-icon/arrows/outline/arrow-down", children: (0, Ie.jsx)("path", { id: "Vector 190", d: "M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425", stroke: "#F3F3F3", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) })] }) }), (0, Ie.jsx)("a", { href: "/", className: "font-varino font-bold mx-auto text-xl translate-x-[-2.7rem] lg:mb-[1rem] text-focus-in logo-text", style: { textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }, children: "ZIEGERS" }), (0, Ie.jsxs)("a", { href: "https://www.instagram.com/ziegerscs", target: "_blank", className: "m-hide text-focus-in w-[150px] h-[47px] pl-[3px] pr-[13px] mr-[5rem] bg-[#B5B5B5] from-zinc-950  rounded-full shadow border border-[#B5B5B5] justify-start items-center inline-flex instagram-button mb-[0.5rem]", children: [(0, Ie.jsx)("div", { className: "w-4 h-4 relative flex-col justify-start items-start flex " }), (0, Ie.jsxs)("div", { className: "text-center text-white  text-xs font-normal font-['Varino'] flex flex-row justify-center items-center align-middle", children: [(0, Ie.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "instagram", children: (0, Ie.jsx)("path", { id: "Vector", d: "M11.6188 4.13967C11.4605 4.13967 11.3059 4.18659 11.1743 4.2745C11.0427 4.3624 10.9402 4.48735 10.8797 4.63353C10.8191 4.77971 10.8033 4.94056 10.8341 5.09575C10.865 5.25093 10.9412 5.39348 11.0531 5.50536C11.165 5.61724 11.3075 5.69343 11.4627 5.7243C11.6179 5.75517 11.7787 5.73933 11.9249 5.67878C12.0711 5.61823 12.196 5.51569 12.2839 5.38413C12.3718 5.25257 12.4188 5.0979 12.4188 4.93967C12.4188 4.7275 12.3345 4.52402 12.1844 4.37399C12.0344 4.22396 11.8309 4.13967 11.6188 4.13967ZM14.6854 5.75301C14.6725 5.19987 14.5689 4.65261 14.3788 4.13301C14.2092 3.68843 13.9454 3.28586 13.6054 2.95301C13.2753 2.61129 12.8718 2.34913 12.4254 2.18634C11.9072 1.99045 11.3593 1.88448 10.8054 1.87301C10.0988 1.83301 9.87209 1.83301 8.05876 1.83301C6.24542 1.83301 6.01876 1.83301 5.31209 1.87301C4.75819 1.88448 4.21032 1.99045 3.69209 2.18634C3.24654 2.35077 2.84338 2.61271 2.51209 2.95301C2.17037 3.28313 1.90821 3.68663 1.74542 4.13301C1.54953 4.65124 1.44356 5.19911 1.43209 5.75301C1.39209 6.45967 1.39209 6.68634 1.39209 8.49967C1.39209 10.313 1.39209 10.5397 1.43209 11.2463C1.44356 11.8002 1.54953 12.3481 1.74542 12.8663C1.90821 13.3127 2.17037 13.7162 2.51209 14.0463C2.84338 14.3866 3.24654 14.6486 3.69209 14.813C4.21032 15.0089 4.75819 15.1149 5.31209 15.1263C6.01876 15.1663 6.24542 15.1663 8.05876 15.1663C9.87209 15.1663 10.0988 15.1663 10.8054 15.1263C11.3593 15.1149 11.9072 15.0089 12.4254 14.813C12.8718 14.6502 13.2753 14.3881 13.6054 14.0463C13.9469 13.7147 14.211 13.3118 14.3788 12.8663C14.5689 12.3467 14.6725 11.7995 14.6854 11.2463C14.6854 10.5397 14.7254 10.313 14.7254 8.49967C14.7254 6.68634 14.7254 6.45967 14.6854 5.75301ZM13.4854 11.1663C13.4806 11.5895 13.4039 12.0088 13.2588 12.4063C13.1523 12.6965 12.9813 12.9586 12.7588 13.173C12.5425 13.3933 12.2809 13.564 11.9921 13.673C11.5946 13.8182 11.1753 13.8948 10.7521 13.8997C10.0854 13.933 9.83876 13.9397 8.08542 13.9397C6.33209 13.9397 6.08542 13.9397 5.41876 13.8997C4.97935 13.9079 4.54182 13.8402 4.12542 13.6997C3.84928 13.5851 3.59966 13.4149 3.39209 13.1997C3.17082 12.9855 3.00199 12.7231 2.89876 12.433C2.73599 12.0298 2.64572 11.601 2.63209 11.1663C2.63209 10.4997 2.59209 10.253 2.59209 8.49967C2.59209 6.74634 2.59209 6.49967 2.63209 5.83301C2.63508 5.40038 2.71406 4.97164 2.86542 4.56634C2.98279 4.28495 3.16293 4.03411 3.39209 3.83301C3.59463 3.60379 3.84495 3.42174 4.12542 3.29967C4.53179 3.15304 4.96009 3.07639 5.39209 3.07301C6.05876 3.07301 6.30542 3.03301 8.05876 3.03301C9.81209 3.03301 10.0588 3.03301 10.7254 3.07301C11.1486 3.07786 11.5679 3.15451 11.9654 3.29967C12.2684 3.41211 12.5403 3.59491 12.7588 3.83301C12.9772 4.03779 13.1479 4.28816 13.2588 4.56634C13.4069 4.9723 13.4836 5.40086 13.4854 5.83301C13.5188 6.49967 13.5254 6.74634 13.5254 8.49967C13.5254 10.253 13.5188 10.4997 13.4854 11.1663ZM8.05876 5.07967C7.38263 5.08099 6.72206 5.28269 6.16053 5.65929C5.59899 6.03588 5.16168 6.57047 4.90385 7.19551C4.64602 7.82055 4.57924 8.50799 4.71195 9.17096C4.84467 9.83394 5.17091 10.4427 5.64947 10.9203C6.12803 11.398 6.73743 11.723 7.40066 11.8544C8.06389 11.9859 8.7512 11.9177 9.37574 11.6587C10.0003 11.3997 10.534 10.9613 10.9095 10.399C11.285 9.83676 11.4854 9.1758 11.4854 8.49967C11.4863 8.04974 11.3982 7.60408 11.2262 7.18831C11.0543 6.77254 10.8018 6.39488 10.4833 6.07704C10.1649 5.7592 9.78672 5.50746 9.37062 5.33629C8.95452 5.16513 8.50868 5.07792 8.05876 5.07967ZM8.05876 10.7197C7.61968 10.7197 7.19047 10.5895 6.82539 10.3455C6.46031 10.1016 6.17577 9.75488 6.00774 9.34923C5.83972 8.94358 5.79575 8.49721 5.88141 8.06657C5.96707 7.63594 6.17851 7.24037 6.48898 6.9299C6.79945 6.61942 7.19502 6.40799 7.62566 6.32233C8.05629 6.23667 8.50266 6.28063 8.90831 6.44866C9.31397 6.61669 9.66068 6.90123 9.90462 7.26631C10.1486 7.63139 10.2788 8.0606 10.2788 8.49967C10.2788 8.79121 10.2213 9.07989 10.1098 9.34923C9.9982 9.61857 9.83468 9.86331 9.62853 10.0695C9.42239 10.2756 9.17766 10.4391 8.90831 10.5507C8.63897 10.6623 8.35029 10.7197 8.05876 10.7197Z", fill: "#f3f3f3" }) }) }), (0, Ie.jsx)("h1", { className: "ml-2 m-insta", children: "Instagram" })] })] }), (0, Ie.jsx)("div", { className: "flex menu-icon cursor-pointer flex-row  justify-end mx-auto m-game-menu", onClick: () => n((e => !e)), children: (0, Ie.jsx)("img", { src: He, alt: "menu", width: "50px", className: "flex border border-solid  m-burger border-[#F3F3F3] rounded-lg m-burger2 text-focus-in" }) })] }), (0, Ie.jsx)("div", { className: "font-varino", children: (0, Ie.jsxs)("div", { className: "", children: [(0, Ie.jsxs)("div", { className: "lg:flex justify-end relative z-10 hidden", children: [(0, Ie.jsxs)("svg", { width: "300", height: "341", viewBox: "0 0 382 341", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "absolute top-[2rem] right-[5px]", children: [(0, Ie.jsx)("path", { d: "M0 135.107C0 108.981 0 95.9175 2.42664 85.1039C10.8952 47.3661 40.3661 17.8952 78.1039 9.42664C88.9175 7 101.981 7 128.107 7H143.832C151.85 7 159.774 8.72531 167.066 12.0588L168.579 12.7504C182.779 19.2416 199.134 19.0562 213.183 12.2447C220.302 8.79315 228.11 7 236.022 7H253.507C279.993 7 293.236 7 304.192 9.4935C341.69 18.0279 370.972 47.3098 379.507 84.8081C382 95.7639 382 109.007 382 135.493V174C382 236.624 382 267.935 368.471 291.227C359.744 306.252 347.252 318.744 332.227 327.471C308.935 341 277.624 341 215 341H167C104.376 341 73.0647 341 49.7734 327.471C34.7481 318.744 22.2561 306.252 13.5287 291.227C0 267.935 0 236.624 0 174V135.107Z", fill: "#1E1F29" }), (0, Ie.jsx)("path", { d: "M187.598 3.05973C188.96 1.62406 189.64 0.906222 190.5 0.906222C191.36 0.906222 192.04 1.62406 193.402 3.05973L194.054 3.74728C196.794 6.63538 198.163 8.07942 197.643 9.28971C197.123 10.5 195.133 10.5 191.152 10.5H189.848C185.867 10.5 183.877 10.5 183.357 9.28971C182.837 8.07942 184.206 6.63538 186.946 3.74729L187.598 3.05973Z", fill: "#0B0C10" })] }), (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "90", height: "111", viewBox: "0 0 105 111", fill: "none", className: "absolute translate-y-[7rem] mr-[2.5rem]", children: [(0, Ie.jsx)("path", { d: "M47.0275 21.0951L37.38 55.5022C37.0234 56.7732 36.4299 57.9555 35.6346 58.9789C34.8393 60.0024 33.8583 60.8462 32.7498 61.4604C31.6413 62.0746 30.4278 62.4467 29.1812 62.5546C27.9347 62.6626 26.6803 62.5042 25.4925 62.0888L11.2375 57.1057C9.94781 56.655 8.76623 55.9118 7.77497 54.9278C6.78371 53.9438 6.00657 52.7426 5.49761 51.4079C4.98865 50.0731 4.76011 48.6368 4.82787 47.1988C4.89563 45.7609 5.25808 44.3559 5.88999 43.0816L24.6275 5.29765C25.3848 3.77083 26.5049 2.48003 27.8771 1.55292C29.2492 0.6258 30.8258 0.094473 32.451 0.0114781C34.0762 -0.0715169 35.6937 0.296695 37.1435 1.0797C38.5933 1.86271 39.8253 3.03339 40.7175 4.47597L45.8875 12.8359C46.6327 14.0418 47.1207 15.4055 47.3176 16.832C47.5145 18.2585 47.4155 19.7133 47.0275 21.0951Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M80.1525 5.30034L98.8825 43.079C99.5144 44.3535 99.8769 45.7587 99.9446 47.1968C100.012 48.6349 99.7839 50.0714 99.2749 51.4064C98.766 52.7413 97.9889 53.9427 96.9976 54.927C96.0063 55.9113 94.8247 56.6548 93.535 57.1058L79.2875 62.0889C78.0992 62.5046 76.8443 62.6632 75.5971 62.5554C74.3499 62.4475 73.1358 62.0753 72.0268 61.4608C70.9178 60.8463 69.9364 60.0021 69.1408 58.9781C68.3452 57.9541 67.7515 56.7712 67.395 55.4995L57.75 21.0951C57.3625 19.7137 57.2638 18.2594 57.4607 16.8335C57.6575 15.4075 58.1453 14.0442 58.89 12.8386L64.055 4.48132C64.947 3.03742 66.1792 1.8655 67.6297 1.08151C69.0801 0.297532 70.6984 -0.0713408 72.3246 0.0113967C73.9507 0.0941343 75.5283 0.625614 76.9013 1.55325C78.2742 2.48088 79.3949 3.77251 80.1525 5.30034Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M37.9725 64.3481L44.885 37.2248C45.0383 36.6237 45.3741 36.0929 45.8404 35.7144C46.3068 35.3359 46.8777 35.1308 47.465 35.1309H56.96C57.5384 35.1303 58.1013 35.3287 58.5642 35.6962C59.0272 36.0638 59.3652 36.5806 59.5275 37.1692L66.995 64.2925C67.1115 64.715 67.1336 65.1606 67.0594 65.5937C66.9853 66.0269 66.8169 66.4358 66.5677 66.788C66.3185 67.1402 65.9954 67.4259 65.6239 67.6226C65.2524 67.8193 64.8428 67.9215 64.4275 67.9211H40.5525C40.1421 67.9211 39.7371 67.8209 39.3691 67.6282C39.0011 67.4356 38.6799 67.1556 38.4304 66.8101C38.1809 66.4645 38.0098 66.0627 37.9304 65.6358C37.851 65.2088 37.8654 64.7682 37.9725 64.3481Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M0 91.9569V68.5921C0.283333 65.7472 1.39 63.4774 3.32 61.7828C5.38667 59.9681 7.73667 59.2126 10.37 59.5166C11.315 59.6261 12.5867 60.0149 14.185 60.6828C19.5083 62.9093 25.27 65.2577 31.47 67.728C33.3117 68.4631 34.6167 69.1426 35.385 69.7663C37.8825 71.7993 39.345 75.1178 39.0675 78.4788C39.0142 79.1202 38.7833 80.2016 38.375 81.7231C36.4633 88.8496 34.6092 95.7596 32.8125 102.453C32.4842 103.676 31.8225 104.881 30.8275 106.069C28.62 108.703 25.1325 109.843 21.9025 109.101C20.9725 108.887 19.7825 108.362 18.3325 107.526C14.2225 105.155 10.205 102.893 6.28 100.741C4.73833 99.8963 3.595 99.094 2.85 98.3342C1.22 96.6714 0.27 94.5457 0 91.9569Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M105 68.6277V91.913C104.735 94.5159 103.797 96.6425 102.185 98.2929C101.425 99.0704 100.159 99.9469 98.3875 100.922C94.3625 103.14 90.3692 105.389 86.4075 107.668C85.0609 108.442 83.9434 108.923 83.055 109.11C79.115 109.942 75.1925 108.166 73.1225 104.585C72.6225 103.72 72.1542 102.451 71.7175 100.779C70.1092 94.6192 68.4775 88.5388 66.8225 82.5379C66.1842 80.2266 65.875 78.5939 65.895 77.6397C65.9775 73.4412 68.335 69.8629 72.075 68.3494C79.1367 65.4939 85.6783 62.823 91.7 60.3367C92.855 59.8596 93.8775 59.5795 94.7675 59.4965C97.4309 59.2438 99.7775 60.0478 101.808 61.9085C103.671 63.6155 104.735 65.8552 105 68.6277Z", fill: "#B5B5B5" }), (0, Ie.jsx)("path", { d: "M66.6125 110.998H38.1875C36.4059 109.001 35.5025 106.729 35.4775 104.181C35.4659 103.052 35.7384 101.435 36.295 99.3304C37.7784 93.7307 39.2584 87.9401 40.735 81.9586C41.29 79.7127 41.7175 78.231 42.0175 77.5136C43.4525 74.0784 46.69 71.7857 50.245 71.6956C51.7767 71.6567 53.185 71.6638 54.47 71.7168C57.475 71.8413 60.185 73.7471 61.7675 76.3818C62.1942 77.0921 62.66 78.3635 63.165 80.196C65.0784 87.1528 66.9959 94.1079 68.9175 101.061C69.9492 104.79 69.1809 108.102 66.6125 110.998Z", fill: "#282A36" })] }), (0, Ie.jsx)("div", { className: "flex flex-row", children: (0, Ie.jsxs)("div", { className: " absolute text-white text-xl font-semibold font-['Outfit'] translate-y-[7.5rem] -translate-x-[16.5rem]", children: ["Registration", (0, Ie.jsx)("br", {}), "Amount", (0, Ie.jsx)("div", { className: "text-slate-400 text-[13px] font-bold mt-[1rem] leading-0", children: "Prize Pool \xa0 \u20b91500" }), (0, Ie.jsx)("div", { className: "text-slate-400 text-[13px] font-medium", children: "No refund" }), (0, Ie.jsxs)("div", { className: "relative justify-center", children: [(0, Ie.jsx)("div", { className: "w-[225px] h-[60px] left-0 top-3 absolute bg-zinc-950 rounded-[100px]" }), (0, Ie.jsx)("div", { className: "w-6 h-5 left-[180px] top-[32px] absolute justify-center items-center inline-flex", children: (0, Ie.jsx)("div", { className: "w-6 h-5 relative", children: (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "22", viewBox: "0 0 24 24", fill: "none", children: [(0, Ie.jsx)("path", { d: "M14.43 5.92969L20.5 11.9997L14.43 18.0697", stroke: "#B5B5B5", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" }), (0, Ie.jsx)("path", { d: "M3.5 12H20.33", stroke: "#B5B5B5", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" })] }) }) }), (0, Ie.jsx)("div", { className: "left-[30px] top-[30px] absolute text-white text-[20px] font-semibold", children: "\u20b9200/Team" })] })] }) })] }), (0, Ie.jsxs)("div", { className: "relative flex justify-center", children: [(0, Ie.jsx)("div", { className: "flex justify-center bgmi-btn cursor-pointer absolute z-10 mx-auto bottom-[5.5rem] ", children: (0, Ie.jsx)("div", { className: "flex justify-center ", children: (0, Ie.jsxs)("div", { onClick: Xo, className: "w-[235px] h-[65px] text-center flex flex-row items-center  left-0 top-0 bg-[#D4C8BD] rounded-[100px] m-bgmi-btn ", children: [(0, Ie.jsx)("div", { className: "left-[2rem] absolute text-neutral-900 text-[22px] font-semibold font-['Outfit'] m-participate-text", children: "Participate" }), (0, Ie.jsx)("div", { children: (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "21", height: "24", viewBox: "0 0 24 24", fill: "none", className: "flex ml-[11.5rem] m-arrow", children: [(0, Ie.jsx)("path", { d: "M14.4301 5.92969L20.5001 11.9997L14.4301 18.0697", stroke: "#0B0C10", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" }), (0, Ie.jsx)("path", { d: "M3.5 12H20.33", stroke: "#0B0C10", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" })] }) })] }) }) }), (0, Ie.jsx)("img", { src: il, alt: "bgmibanner", className: "w-screen m-hide" }), (0, Ie.jsx)("img", { src: al, alt: "bgmibanner", className: "w-screen lg:hidden" }), (0, Ie.jsx)("div", { className: " absolute w-[100vw] h-[300px] valorantbanneroverlay -bottom-32 flex justify-center items-center m-bgmi-overlay", children: (0, Ie.jsxs)("div", { className: " inline-flex lg:p-[25px] items-center lg:gap-5 lg:rounded-[22px] webdevvenuecard translate-y-[5rem] justify-center align-middle m-venue-box", children: [(0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-calender", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.61073 0.672852C9.39667 0.672852 10.0338 1.30998 10.0338 2.09593V4.94208H27.1107V2.09593C27.1107 1.30998 27.7479 0.672852 28.5338 0.672852C29.3197 0.672852 29.9569 1.30998 29.9569 2.09593V4.94208H31.38C34.5237 4.94208 37.0723 7.49062 37.0723 10.6344V31.9805C37.0723 35.1243 34.5237 37.6729 31.38 37.6729H5.76457C2.6208 37.6729 0.0722656 35.1243 0.0722656 31.9805V10.6344C0.0722656 7.49062 2.6208 4.94208 5.76457 4.94208H7.18765V2.09593C7.18765 1.30998 7.82478 0.672852 8.61073 0.672852ZM34.2261 17.7498C34.2261 16.1779 32.9518 14.9036 31.38 14.9036H5.76457C4.19269 14.9036 2.91842 16.1779 2.91842 17.7498V31.9805C2.91842 33.5524 4.19269 34.8267 5.76457 34.8267H31.38C32.9518 34.8267 34.2261 33.5524 34.2261 31.9805V17.7498Z", fill: "#F3F3F3" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "18th January" })] }), (0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-time", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { d: "M19.0605 9.92285V19.1729H25.998M32.9355 19.1729C32.9355 26.8358 26.7235 33.0478 19.0605 33.0478C11.3976 33.0478 5.18555 26.8358 5.18555 19.1729C5.18555 11.5099 11.3976 5.29785 19.0605 5.29785C26.7235 5.29785 32.9355 11.5099 32.9355 19.1729Z", stroke: "#F3F3F3", "stroke-width": "2.47513", "stroke-linecap": "round", "stroke-linejoin": "round" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "(TBA) via WhatsApp" })] }), (0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-location", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M17.8383 35.1307C17.8849 35.1577 17.9215 35.1785 17.9474 35.1931L17.9904 35.2171C18.334 35.4057 18.7602 35.4043 19.1041 35.2177L19.1483 35.1931C19.1742 35.1785 19.2108 35.1577 19.2574 35.1307C19.3505 35.0768 19.4836 34.9981 19.6509 34.895C19.9854 34.6891 20.4576 34.3854 21.0216 33.9869C22.1478 33.1914 23.6504 32.011 25.1563 30.4692C28.1535 27.4005 31.2666 22.7898 31.2666 16.8603C31.2666 9.83598 25.5722 4.1416 18.5479 4.1416C11.5235 4.1416 5.8291 9.83598 5.8291 16.8603C5.8291 22.7898 8.94222 27.4005 11.9394 30.4692C13.4453 32.011 14.9479 33.1914 16.0741 33.9869C16.6381 34.3854 17.1103 34.6891 17.4448 34.895C17.6121 34.9981 17.7452 35.0768 17.8383 35.1307ZM18.5479 21.4853C21.1022 21.4853 23.1728 19.4147 23.1728 16.8604C23.1728 14.306 21.1022 12.2354 18.5479 12.2354C15.9935 12.2354 13.9229 14.306 13.9229 16.8604C13.9229 19.4147 15.9935 21.4853 18.5479 21.4853Z", fill: "#F3F3F3" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "CS Lab,4th Floor" })] })] }) })] })] }) }), (0, Ie.jsxs)("div", { className: "flex flex-col justify-center gap-[40px] items-center max-w-[950px] mx-auto lg:mt-40 mb-20", children: [(0, Ie.jsx)("div", { className: "text-[21px] font-readex text-center text-[#D4D4D4] tracking-[1.15px] font-medium z-10 m-bgmi-desc", children: (0, Ie.jsx)("p", { className: "pb-3", children: "Battlegrounds Mobile India, or BGMI, is a TPP-FPP survival shooter game in which up to 100 players compete in a battle royale, a type of large-scale last man standing deathmatch in which players compete to be the last one standing. A squad match in BGMI is a four-man team mode where you will battle against 24 other teams to secure the coveted chicken dinner." }) }), (0, Ie.jsx)("div", { className: "font-varino text-[90px] tracking-[4.9px] text-center valorantrules m-rule-text", children: "MAPS" }), (0, Ie.jsxs)("div", { className: "bgmimaps flex flex-row justify-center gap-10 flex-wrap px-5", children: [(0, Ie.jsx)("div", { children: (0, Ie.jsx)("img", { src: sl, alt: "erangle", className: "w-[420px] h-[250px] m-bgmi-maps" }) }), (0, Ie.jsx)("div", { children: (0, Ie.jsx)("img", { src: ol, alt: "vikendi", className: "w-[420px] h-[250px] m-bgmi-maps" }) }), (0, Ie.jsx)("div", { children: (0, Ie.jsx)("img", { src: ll, alt: "miramar", className: "w-[420px] h-[250px] m-bgmi-maps" }) }), (0, Ie.jsx)("div", { children: (0, Ie.jsx)("img", { src: cl, alt: "sanhok", className: "w-[420px] h-[250px] m-bgmi-maps" }) })] }), (0, Ie.jsx)("div", { className: "text-[25px] font-readex text-center text-[#D4D4D4] tracking-[1.15px] font-semibold  m-bgmi-rule", children: "There will be 3 matches held. Which ever team gets more points in all three matches will be declared as a winner." }), (0, Ie.jsx)("div", { className: "valorantnote text-[#D05555] text-center text-[20px] font-inter italic font-medium tracking-[1.15px] m-note", children: "*NOTE: Any sort of damage to the property of Ziegers and the concerned authorities will not be tolerated and the one's responsible will be sanctioned with penalties and can also be charged a fine depending on the damage done." })] }), (0, Ie.jsx)(Ze, {})] }) })),
            dl = n.p + "static/media/fifabanner.180920b90113ccc1e5ec.webp",
            fl = n.p + "static/media/m-fifabanner.4665570ddf2115043a64.webp",
            hl = Wo((() => { const [e, n] = (0, t.useState)(!1), r = Q(); return (0, Ie.jsxs)("div", { className: "wrapper ", children: [(0, Ie.jsxs)("nav", { className: "flex text-[#fff] flex-row  items-center align-middle mx-auto pt-2 pl-10 justify-between bg-[#000000CC] rounded-es-[100px] rounded-br-[100px] bg-opacity-80 absolute m-gaming-nav", style: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 15 }, children: [(0, Ie.jsx)(_e.default, { onOutsideClick: () => { n(!1) }, children: (0, Ie.jsxs)("div", { className: "flex flex-row justify-evenly items-center align-middle h-menus lg:mb-[1rem]  ml-[3rem]", style: (e => { if (document.documentElement.clientWidth <= 800) return { right: !e && "-100%" } })(e), children: [(0, Ie.jsx)("div", { onClick: () => { r("/contact") }, className: "flex justify-center cursor-pointer items-center align-middle font-varino text-focus-in navbar-text", children: "Contact" }), (0, Ie.jsx)("svg", { width: "34", height: "34", viewBox: "0 0 34 34", fill: "none", className: "text-focus-in m-hide", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "Huge-icon/arrows/outline/arrow-down", children: (0, Ie.jsx)("path", { id: "Vector 190", d: "M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425", stroke: "#F3F3F3", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) }), (0, Ie.jsx)("div", { onClick: () => { r("/about") }, className: "cursor-pointer font-varino ml-3 text-focus-in navbar-text", children: "About" }), (0, Ie.jsx)("svg", { width: "34", height: "34", className: "text-focus-in m-hide", viewBox: "0 0 34 34", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "Huge-icon/arrows/outline/arrow-down", children: (0, Ie.jsx)("path", { id: "Vector 190", d: "M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425", stroke: "#F3F3F3", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) })] }) }), (0, Ie.jsx)("a", { href: "https://www.instagram.com/ziegerscs", target: "_blank", className: "font-varino font-bold mx-auto text-xl translate-x-[-2.7rem] lg:mb-[1rem] text-focus-in logo-text", style: { textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }, children: "ZIEGERS" }), (0, Ie.jsxs)("a", { href: "https://www.instagram.com/ziegerscs", target: "_blank", className: "m-hide text-focus-in w-[150px] h-[47px] pl-[3px] pr-[13px] mr-[5rem] bg-[#0080D8] from-zinc-950  rounded-full shadow border border-[#0080D8] justify-start items-center inline-flex instagram-button mb-[0.5rem]", children: [(0, Ie.jsx)("div", { className: "w-4 h-4 relative flex-col justify-start items-start flex " }), (0, Ie.jsxs)("div", { className: "text-center text-white  text-xs font-normal font-['Varino'] flex flex-row justify-center items-center align-middle", children: [(0, Ie.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "instagram", children: (0, Ie.jsx)("path", { id: "Vector", d: "M11.6188 4.13967C11.4605 4.13967 11.3059 4.18659 11.1743 4.2745C11.0427 4.3624 10.9402 4.48735 10.8797 4.63353C10.8191 4.77971 10.8033 4.94056 10.8341 5.09575C10.865 5.25093 10.9412 5.39348 11.0531 5.50536C11.165 5.61724 11.3075 5.69343 11.4627 5.7243C11.6179 5.75517 11.7787 5.73933 11.9249 5.67878C12.0711 5.61823 12.196 5.51569 12.2839 5.38413C12.3718 5.25257 12.4188 5.0979 12.4188 4.93967C12.4188 4.7275 12.3345 4.52402 12.1844 4.37399C12.0344 4.22396 11.8309 4.13967 11.6188 4.13967ZM14.6854 5.75301C14.6725 5.19987 14.5689 4.65261 14.3788 4.13301C14.2092 3.68843 13.9454 3.28586 13.6054 2.95301C13.2753 2.61129 12.8718 2.34913 12.4254 2.18634C11.9072 1.99045 11.3593 1.88448 10.8054 1.87301C10.0988 1.83301 9.87209 1.83301 8.05876 1.83301C6.24542 1.83301 6.01876 1.83301 5.31209 1.87301C4.75819 1.88448 4.21032 1.99045 3.69209 2.18634C3.24654 2.35077 2.84338 2.61271 2.51209 2.95301C2.17037 3.28313 1.90821 3.68663 1.74542 4.13301C1.54953 4.65124 1.44356 5.19911 1.43209 5.75301C1.39209 6.45967 1.39209 6.68634 1.39209 8.49967C1.39209 10.313 1.39209 10.5397 1.43209 11.2463C1.44356 11.8002 1.54953 12.3481 1.74542 12.8663C1.90821 13.3127 2.17037 13.7162 2.51209 14.0463C2.84338 14.3866 3.24654 14.6486 3.69209 14.813C4.21032 15.0089 4.75819 15.1149 5.31209 15.1263C6.01876 15.1663 6.24542 15.1663 8.05876 15.1663C9.87209 15.1663 10.0988 15.1663 10.8054 15.1263C11.3593 15.1149 11.9072 15.0089 12.4254 14.813C12.8718 14.6502 13.2753 14.3881 13.6054 14.0463C13.9469 13.7147 14.211 13.3118 14.3788 12.8663C14.5689 12.3467 14.6725 11.7995 14.6854 11.2463C14.6854 10.5397 14.7254 10.313 14.7254 8.49967C14.7254 6.68634 14.7254 6.45967 14.6854 5.75301ZM13.4854 11.1663C13.4806 11.5895 13.4039 12.0088 13.2588 12.4063C13.1523 12.6965 12.9813 12.9586 12.7588 13.173C12.5425 13.3933 12.2809 13.564 11.9921 13.673C11.5946 13.8182 11.1753 13.8948 10.7521 13.8997C10.0854 13.933 9.83876 13.9397 8.08542 13.9397C6.33209 13.9397 6.08542 13.9397 5.41876 13.8997C4.97935 13.9079 4.54182 13.8402 4.12542 13.6997C3.84928 13.5851 3.59966 13.4149 3.39209 13.1997C3.17082 12.9855 3.00199 12.7231 2.89876 12.433C2.73599 12.0298 2.64572 11.601 2.63209 11.1663C2.63209 10.4997 2.59209 10.253 2.59209 8.49967C2.59209 6.74634 2.59209 6.49967 2.63209 5.83301C2.63508 5.40038 2.71406 4.97164 2.86542 4.56634C2.98279 4.28495 3.16293 4.03411 3.39209 3.83301C3.59463 3.60379 3.84495 3.42174 4.12542 3.29967C4.53179 3.15304 4.96009 3.07639 5.39209 3.07301C6.05876 3.07301 6.30542 3.03301 8.05876 3.03301C9.81209 3.03301 10.0588 3.03301 10.7254 3.07301C11.1486 3.07786 11.5679 3.15451 11.9654 3.29967C12.2684 3.41211 12.5403 3.59491 12.7588 3.83301C12.9772 4.03779 13.1479 4.28816 13.2588 4.56634C13.4069 4.9723 13.4836 5.40086 13.4854 5.83301C13.5188 6.49967 13.5254 6.74634 13.5254 8.49967C13.5254 10.253 13.5188 10.4997 13.4854 11.1663ZM8.05876 5.07967C7.38263 5.08099 6.72206 5.28269 6.16053 5.65929C5.59899 6.03588 5.16168 6.57047 4.90385 7.19551C4.64602 7.82055 4.57924 8.50799 4.71195 9.17096C4.84467 9.83394 5.17091 10.4427 5.64947 10.9203C6.12803 11.398 6.73743 11.723 7.40066 11.8544C8.06389 11.9859 8.7512 11.9177 9.37574 11.6587C10.0003 11.3997 10.534 10.9613 10.9095 10.399C11.285 9.83676 11.4854 9.1758 11.4854 8.49967C11.4863 8.04974 11.3982 7.60408 11.2262 7.18831C11.0543 6.77254 10.8018 6.39488 10.4833 6.07704C10.1649 5.7592 9.78672 5.50746 9.37062 5.33629C8.95452 5.16513 8.50868 5.07792 8.05876 5.07967ZM8.05876 10.7197C7.61968 10.7197 7.19047 10.5895 6.82539 10.3455C6.46031 10.1016 6.17577 9.75488 6.00774 9.34923C5.83972 8.94358 5.79575 8.49721 5.88141 8.06657C5.96707 7.63594 6.17851 7.24037 6.48898 6.9299C6.79945 6.61942 7.19502 6.40799 7.62566 6.32233C8.05629 6.23667 8.50266 6.28063 8.90831 6.44866C9.31397 6.61669 9.66068 6.90123 9.90462 7.26631C10.1486 7.63139 10.2788 8.0606 10.2788 8.49967C10.2788 8.79121 10.2213 9.07989 10.1098 9.34923C9.9982 9.61857 9.83468 9.86331 9.62853 10.0695C9.42239 10.2756 9.17766 10.4391 8.90831 10.5507C8.63897 10.6623 8.35029 10.7197 8.05876 10.7197Z", fill: "#f3f3f3" }) }) }), (0, Ie.jsx)("h1", { className: "ml-2 m-insta", children: "Instagram" })] })] }), (0, Ie.jsx)("div", { className: "flex menu-icon cursor-pointer flex-row  justify-end mx-auto m-game-menu", onClick: () => n((e => !e)), children: (0, Ie.jsx)("img", { src: He, alt: "menu", width: "50px", className: "flex border border-solid  m-burger border-[#F3F3F3] rounded-lg m-burger2 text-focus-in " }) })] }), (0, Ie.jsx)("div", { className: "font-varino", children: (0, Ie.jsxs)("div", { className: "", children: [(0, Ie.jsxs)("div", { className: "lg:flex justify-end relative z-10 hidden ", children: [(0, Ie.jsxs)("svg", { width: "300", height: "341", viewBox: "0 0 382 341", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "absolute top-[2rem] right-[5px]", children: [(0, Ie.jsx)("path", { d: "M0 135.107C0 108.981 0 95.9175 2.42664 85.1039C10.8952 47.3661 40.3661 17.8952 78.1039 9.42664C88.9175 7 101.981 7 128.107 7H143.832C151.85 7 159.774 8.72531 167.066 12.0588L168.579 12.7504C182.779 19.2416 199.134 19.0562 213.183 12.2447C220.302 8.79315 228.11 7 236.022 7H253.507C279.993 7 293.236 7 304.192 9.4935C341.69 18.0279 370.972 47.3098 379.507 84.8081C382 95.7639 382 109.007 382 135.493V174C382 236.624 382 267.935 368.471 291.227C359.744 306.252 347.252 318.744 332.227 327.471C308.935 341 277.624 341 215 341H167C104.376 341 73.0647 341 49.7734 327.471C34.7481 318.744 22.2561 306.252 13.5287 291.227C0 267.935 0 236.624 0 174V135.107Z", fill: "#1E1F29" }), (0, Ie.jsx)("path", { d: "M187.598 3.05973C188.96 1.62406 189.64 0.906222 190.5 0.906222C191.36 0.906222 192.04 1.62406 193.402 3.05973L194.054 3.74728C196.794 6.63538 198.163 8.07942 197.643 9.28971C197.123 10.5 195.133 10.5 191.152 10.5H189.848C185.867 10.5 183.877 10.5 183.357 9.28971C182.837 8.07942 184.206 6.63538 186.946 3.74729L187.598 3.05973Z", fill: "#0B0C10" })] }), (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "90", height: "111", viewBox: "0 0 105 111", fill: "none", className: "absolute translate-y-[7rem] mr-[2.5rem]", children: [(0, Ie.jsx)("path", { d: "M47.0275 21.0951L37.38 55.5022C37.0234 56.7732 36.4299 57.9555 35.6346 58.9789C34.8393 60.0024 33.8583 60.8462 32.7498 61.4604C31.6413 62.0746 30.4278 62.4467 29.1812 62.5546C27.9347 62.6626 26.6803 62.5042 25.4925 62.0888L11.2375 57.1057C9.94781 56.655 8.76623 55.9118 7.77497 54.9278C6.78371 53.9438 6.00657 52.7426 5.49761 51.4079C4.98865 50.0731 4.76011 48.6368 4.82787 47.1988C4.89563 45.7609 5.25808 44.3559 5.88999 43.0816L24.6275 5.29765C25.3848 3.77083 26.5049 2.48003 27.8771 1.55292C29.2492 0.6258 30.8258 0.094473 32.451 0.0114781C34.0762 -0.0715169 35.6937 0.296695 37.1435 1.0797C38.5933 1.86271 39.8253 3.03339 40.7175 4.47597L45.8875 12.8359C46.6327 14.0418 47.1207 15.4055 47.3176 16.832C47.5145 18.2585 47.4155 19.7133 47.0275 21.0951Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M80.1525 5.30034L98.8825 43.079C99.5144 44.3535 99.8769 45.7587 99.9446 47.1968C100.012 48.6349 99.7839 50.0714 99.2749 51.4064C98.766 52.7413 97.9889 53.9427 96.9976 54.927C96.0063 55.9113 94.8247 56.6548 93.535 57.1058L79.2875 62.0889C78.0992 62.5046 76.8443 62.6632 75.5971 62.5554C74.3499 62.4475 73.1358 62.0753 72.0268 61.4608C70.9178 60.8463 69.9364 60.0021 69.1408 58.9781C68.3452 57.9541 67.7515 56.7712 67.395 55.4995L57.75 21.0951C57.3625 19.7137 57.2638 18.2594 57.4607 16.8335C57.6575 15.4075 58.1453 14.0442 58.89 12.8386L64.055 4.48132C64.947 3.03742 66.1792 1.8655 67.6297 1.08151C69.0801 0.297532 70.6984 -0.0713408 72.3246 0.0113967C73.9507 0.0941343 75.5283 0.625614 76.9013 1.55325C78.2742 2.48088 79.3949 3.77251 80.1525 5.30034Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M37.9725 64.3481L44.885 37.2248C45.0383 36.6237 45.3741 36.0929 45.8404 35.7144C46.3068 35.3359 46.8777 35.1308 47.465 35.1309H56.96C57.5384 35.1303 58.1013 35.3287 58.5642 35.6962C59.0272 36.0638 59.3652 36.5806 59.5275 37.1692L66.995 64.2925C67.1115 64.715 67.1336 65.1606 67.0594 65.5937C66.9853 66.0269 66.8169 66.4358 66.5677 66.788C66.3185 67.1402 65.9954 67.4259 65.6239 67.6226C65.2524 67.8193 64.8428 67.9215 64.4275 67.9211H40.5525C40.1421 67.9211 39.7371 67.8209 39.3691 67.6282C39.0011 67.4356 38.6799 67.1556 38.4304 66.8101C38.1809 66.4645 38.0098 66.0627 37.9304 65.6358C37.851 65.2088 37.8654 64.7682 37.9725 64.3481Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M0 91.9569V68.5921C0.283333 65.7472 1.39 63.4774 3.32 61.7828C5.38667 59.9681 7.73667 59.2126 10.37 59.5166C11.315 59.6261 12.5867 60.0149 14.185 60.6828C19.5083 62.9093 25.27 65.2577 31.47 67.728C33.3117 68.4631 34.6167 69.1426 35.385 69.7663C37.8825 71.7993 39.345 75.1178 39.0675 78.4788C39.0142 79.1202 38.7833 80.2016 38.375 81.7231C36.4633 88.8496 34.6092 95.7596 32.8125 102.453C32.4842 103.676 31.8225 104.881 30.8275 106.069C28.62 108.703 25.1325 109.843 21.9025 109.101C20.9725 108.887 19.7825 108.362 18.3325 107.526C14.2225 105.155 10.205 102.893 6.28 100.741C4.73833 99.8963 3.595 99.094 2.85 98.3342C1.22 96.6714 0.27 94.5457 0 91.9569Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M105 68.6277V91.913C104.735 94.5159 103.797 96.6425 102.185 98.2929C101.425 99.0704 100.159 99.9469 98.3875 100.922C94.3625 103.14 90.3692 105.389 86.4075 107.668C85.0609 108.442 83.9434 108.923 83.055 109.11C79.115 109.942 75.1925 108.166 73.1225 104.585C72.6225 103.72 72.1542 102.451 71.7175 100.779C70.1092 94.6192 68.4775 88.5388 66.8225 82.5379C66.1842 80.2266 65.875 78.5939 65.895 77.6397C65.9775 73.4412 68.335 69.8629 72.075 68.3494C79.1367 65.4939 85.6783 62.823 91.7 60.3367C92.855 59.8596 93.8775 59.5795 94.7675 59.4965C97.4309 59.2438 99.7775 60.0478 101.808 61.9085C103.671 63.6155 104.735 65.8552 105 68.6277Z", fill: "#0080D8" }), (0, Ie.jsx)("path", { d: "M66.6125 110.998H38.1875C36.4059 109.001 35.5025 106.729 35.4775 104.181C35.4659 103.052 35.7384 101.435 36.295 99.3304C37.7784 93.7307 39.2584 87.9401 40.735 81.9586C41.29 79.7127 41.7175 78.231 42.0175 77.5136C43.4525 74.0784 46.69 71.7857 50.245 71.6956C51.7767 71.6567 53.185 71.6638 54.47 71.7168C57.475 71.8413 60.185 73.7471 61.7675 76.3818C62.1942 77.0921 62.66 78.3635 63.165 80.196C65.0784 87.1528 66.9959 94.1079 68.9175 101.061C69.9492 104.79 69.1809 108.102 66.6125 110.998Z", fill: "#282A36" })] }), (0, Ie.jsx)("div", { className: "flex flex-row", children: (0, Ie.jsxs)("div", { className: " absolute text-white text-xl font-semibold font-['Outfit'] translate-y-[7.5rem] -translate-x-[16.5rem]", children: ["Registration", (0, Ie.jsx)("br", {}), "Amount", (0, Ie.jsx)("div", { className: "text-slate-400 text-[15px] font-medium mt-[1rem]", children: "Prize Pool \u20b9700" }), (0, Ie.jsx)("div", { className: "text-slate-400 text-[13px] font-medium", children: "No refund" }), (0, Ie.jsxs)("div", { className: "relative justify-center", children: [(0, Ie.jsx)("div", { className: "w-[225px] h-[60px] left-0 top-3 absolute bg-zinc-950 rounded-[100px]" }), (0, Ie.jsx)("div", { className: "w-6 h-5 left-[180px] top-[32px] absolute justify-center items-center inline-flex", children: (0, Ie.jsx)("div", { className: "w-6 h-5 relative", children: (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "22", viewBox: "0 0 24 24", fill: "none", children: [(0, Ie.jsx)("path", { d: "M14.43 5.92969L20.5 11.9997L14.43 18.0697", stroke: "#B5B5B5", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" }), (0, Ie.jsx)("path", { d: "M3.5 12H20.33", stroke: "#B5B5B5", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" })] }) }) }), (0, Ie.jsx)("div", { className: "left-[30px] top-[30px] absolute text-white text-[20px] font-semibold", children: "\u20b950/Person" })] })] }) })] }), (0, Ie.jsxs)("div", { className: "relative flex justify-center", children: [(0, Ie.jsx)("div", { className: "flex justify-center fifa-btn cursor-pointer absolute z-10 mx-auto bottom-[5.5rem]", children: (0, Ie.jsx)("div", { className: "flex justify-center", children: (0, Ie.jsxs)("div", { onClick: Xo, className: "w-[235px] h-[65px] text-center flex flex-row justify-center items-center left-0 top-0 bg-[#0080D8] rounded-[100px] m-fifa-btn", children: [(0, Ie.jsx)("div", { className: "left-[2rem] absolute text-white text-[22px] font-semibold font-['Outfit'] m-participate-text", children: "Participate" }), (0, Ie.jsx)("div", { children: (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "21", height: "24", viewBox: "0 0 24 24", fill: "none", className: "flex ml-[9.5rem] m-arrow", children: [(0, Ie.jsx)("path", { d: "M14.4301 5.92969L20.5001 11.9997L14.4301 18.0697", stroke: "#fff", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" }), (0, Ie.jsx)("path", { d: "M3.5 12H20.33", stroke: "#fff", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" })] }) })] }) }) }), (0, Ie.jsx)("img", { src: dl, alt: "webdevbanner", className: "w-screen m-hide" }), (0, Ie.jsx)("img", { src: fl, alt: "webdevbanner", className: "w-screen lg:hidden" }), (0, Ie.jsx)("div", { className: " absolute w-[100vw] h-[300px] valorantbanneroverlay -bottom-32 flex justify-center items-center", children: (0, Ie.jsxs)("div", { className: " inline-flex lg:p-[25px] items-center lg:gap-5 lg:rounded-[22px] webdevvenuecard translate-y-[5rem] justify-center align-middle m-venue-box", children: [(0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-calender", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.61073 0.672852C9.39667 0.672852 10.0338 1.30998 10.0338 2.09593V4.94208H27.1107V2.09593C27.1107 1.30998 27.7479 0.672852 28.5338 0.672852C29.3197 0.672852 29.9569 1.30998 29.9569 2.09593V4.94208H31.38C34.5237 4.94208 37.0723 7.49062 37.0723 10.6344V31.9805C37.0723 35.1243 34.5237 37.6729 31.38 37.6729H5.76457C2.6208 37.6729 0.0722656 35.1243 0.0722656 31.9805V10.6344C0.0722656 7.49062 2.6208 4.94208 5.76457 4.94208H7.18765V2.09593C7.18765 1.30998 7.82478 0.672852 8.61073 0.672852ZM34.2261 17.7498C34.2261 16.1779 32.9518 14.9036 31.38 14.9036H5.76457C4.19269 14.9036 2.91842 16.1779 2.91842 17.7498V31.9805C2.91842 33.5524 4.19269 34.8267 5.76457 34.8267H31.38C32.9518 34.8267 34.2261 33.5524 34.2261 31.9805V17.7498Z", fill: "#F3F3F3" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "18th January" })] }), (0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-time", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { d: "M19.0605 9.92285V19.1729H25.998M32.9355 19.1729C32.9355 26.8358 26.7235 33.0478 19.0605 33.0478C11.3976 33.0478 5.18555 26.8358 5.18555 19.1729C5.18555 11.5099 11.3976 5.29785 19.0605 5.29785C26.7235 5.29785 32.9355 11.5099 32.9355 19.1729Z", stroke: "#F3F3F3", "stroke-width": "2.47513", "stroke-linecap": "round", "stroke-linejoin": "round" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "(TBA) via WhatsApp" })] }), (0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-location", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M17.8383 35.1307C17.8849 35.1577 17.9215 35.1785 17.9474 35.1931L17.9904 35.2171C18.334 35.4057 18.7602 35.4043 19.1041 35.2177L19.1483 35.1931C19.1742 35.1785 19.2108 35.1577 19.2574 35.1307C19.3505 35.0768 19.4836 34.9981 19.6509 34.895C19.9854 34.6891 20.4576 34.3854 21.0216 33.9869C22.1478 33.1914 23.6504 32.011 25.1563 30.4692C28.1535 27.4005 31.2666 22.7898 31.2666 16.8603C31.2666 9.83598 25.5722 4.1416 18.5479 4.1416C11.5235 4.1416 5.8291 9.83598 5.8291 16.8603C5.8291 22.7898 8.94222 27.4005 11.9394 30.4692C13.4453 32.011 14.9479 33.1914 16.0741 33.9869C16.6381 34.3854 17.1103 34.6891 17.4448 34.895C17.6121 34.9981 17.7452 35.0768 17.8383 35.1307ZM18.5479 21.4853C21.1022 21.4853 23.1728 19.4147 23.1728 16.8604C23.1728 14.306 21.1022 12.2354 18.5479 12.2354C15.9935 12.2354 13.9229 14.306 13.9229 16.8604C13.9229 19.4147 15.9935 21.4853 18.5479 21.4853Z", fill: "#F3F3F3" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "CS Lab,4th Floor" })] })] }) })] })] }) }), (0, Ie.jsxs)("div", { className: "flex flex-col justify-center gap-[40px] items-center max-w-[950px] mx-auto lg:mt-40 mb-20", children: [(0, Ie.jsx)("div", { className: "text-[21px] font-readex text-center text-[#D4D4D4] tracking-[1.15px] font-medium z-10 m-bgmi-desc", children: (0, Ie.jsx)("p", { className: "pb-3", children: "FIFA 2023 tournament is a competitive for the best players competing against each other in EA Sports' latest iteration of the popular FIFA series. The tournament will be held on the PlayStation 5 console, utilizing the advanced features and capabilities of the system to provide an immersive and exciting gaming experience. The tournament will feature a variety of teams and players, with a prize pool for the winner. The tournament aims to bring together the best players and fans of FIFA series to showcase their skills and enjoy the game together." }) }), (0, Ie.jsx)("div", { className: "font-varino text-[90px] tracking-[4.9px] text-center valorantrules m-rule-text", children: "RULES" }), (0, Ie.jsx)("div", { className: "valorantmapselection w-[950px] m-mapselection", children: (0, Ie.jsx)("div", { className: "p-[10px] flex flex-col gap-3 text-[#D4D4D4] tracking-[1.15px] text-[20px] font-inter text-center m-map-rules", children: (0, Ie.jsxs)("ul", { className: "flex flex-col gap-3 items-start text-start max-w-[430px] mx-auto p-5", style: { listStyleType: "disc" }, children: [(0, Ie.jsx)("li", { children: " 1v1 between participants will be there" }), (0, Ie.jsx)("li", { children: " 5min half" }), (0, Ie.jsx)("li", { children: " difficulty level : ultimate" }), (0, Ie.jsxs)("li", { children: [" ", "each participant gets to select A single team for the whole tournament", " "] }), (0, Ie.jsx)("li", { children: " only 3 substitute allowed in the whole match" }), (0, Ie.jsx)("li", { children: " if 2 participant select same team coin toss to decide" })] }) }) }), (0, Ie.jsx)("div", { className: "valorantnote text-[#D05555] text-center text-[20px] font-inter italic font-medium tracking-[1.15px] m-note", children: "*NOTE: Any sort of damage to the property of Ziegers and the concerned authorities will not be tolerated and the one's responsible will be sanctioned with penalties and can also be charged a fine depending on the damage done." })] }), (0, Ie.jsx)(Ze, {})] }) })),
            pl = n.p + "static/media/gt7.d8b5ae86ca1761a846c9.webp",
            ml = n.p + "static/media/m-gt7banner.55366fca1c8846925c82.webp",
            xl = Wo((() => { const [e, n] = (0, t.useState)(!1), r = Q(); return (0, Ie.jsxs)("section", { className: "bg-[#0A0A0B] overflow-x-hidden wrapper ", children: [(0, Ie.jsxs)("nav", { className: "flex text-[#fff] flex-row  items-center align-middle mx-auto pt-2 pl-10 justify-between bg-[#000000CC] rounded-es-[100px] rounded-br-[100px] bg-opacity-80 absolute m-gaming-nav", style: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 15 }, children: [(0, Ie.jsx)(_e.default, { onOutsideClick: () => { n(!1) }, children: (0, Ie.jsxs)("div", { className: "flex flex-row justify-evenly items-center align-middle h-menus lg:mb-[1rem]  ml-[3rem]", style: (e => { if (document.documentElement.clientWidth <= 800) return { right: !e && "-100%" } })(e), children: [(0, Ie.jsx)("div", { onClick: () => { r("/contact") }, className: "flex justify-center cursor-pointer items-center align-middle font-varino text-focus-in navbar-text", children: "Contact" }), (0, Ie.jsx)("svg", { width: "34", height: "34", viewBox: "0 0 34 34", fill: "none", className: "text-focus-in m-hide", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "Huge-icon/arrows/outline/arrow-down", children: (0, Ie.jsx)("path", { id: "Vector 190", d: "M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425", stroke: "#F3F3F3", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) }), (0, Ie.jsx)("div", { onClick: () => { r("/about") }, className: " cursor-pointer font-varino ml-3 text-focus-in navbar-text", children: "About" }), (0, Ie.jsx)("svg", { width: "34", height: "34", className: "text-focus-in m-hide", viewBox: "0 0 34 34", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "Huge-icon/arrows/outline/arrow-down", children: (0, Ie.jsx)("path", { id: "Vector 190", d: "M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425", stroke: "#F3F3F3", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) })] }) }), (0, Ie.jsx)("a", { href: "https://www.instagram.com/ziegerscs", target: "_blank", className: "font-varino font-bold mx-auto text-xl translate-x-[-2.7rem] lg:mb-[1rem] text-focus-in logo-text", style: { textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }, children: "ZIEGERS" }), (0, Ie.jsxs)("a", { href: "h", className: "m-hide text-focus-in w-[150px] h-[47px] pl-[3px] pr-[13px] mr-[5rem] bg-[#D60000] from-zinc-950  rounded-full shadow border border-[#D60000] justify-start items-center inline-flex instagram-button mb-[0.5rem]", children: [(0, Ie.jsx)("div", { className: "w-4 h-4 relative flex-col justify-start items-start flex " }), (0, Ie.jsxs)("div", { className: "text-center text-white  text-xs font-normal font-['Varino'] flex flex-row justify-center items-center align-middle", children: [(0, Ie.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "instagram", children: (0, Ie.jsx)("path", { id: "Vector", d: "M11.6188 4.13967C11.4605 4.13967 11.3059 4.18659 11.1743 4.2745C11.0427 4.3624 10.9402 4.48735 10.8797 4.63353C10.8191 4.77971 10.8033 4.94056 10.8341 5.09575C10.865 5.25093 10.9412 5.39348 11.0531 5.50536C11.165 5.61724 11.3075 5.69343 11.4627 5.7243C11.6179 5.75517 11.7787 5.73933 11.9249 5.67878C12.0711 5.61823 12.196 5.51569 12.2839 5.38413C12.3718 5.25257 12.4188 5.0979 12.4188 4.93967C12.4188 4.7275 12.3345 4.52402 12.1844 4.37399C12.0344 4.22396 11.8309 4.13967 11.6188 4.13967ZM14.6854 5.75301C14.6725 5.19987 14.5689 4.65261 14.3788 4.13301C14.2092 3.68843 13.9454 3.28586 13.6054 2.95301C13.2753 2.61129 12.8718 2.34913 12.4254 2.18634C11.9072 1.99045 11.3593 1.88448 10.8054 1.87301C10.0988 1.83301 9.87209 1.83301 8.05876 1.83301C6.24542 1.83301 6.01876 1.83301 5.31209 1.87301C4.75819 1.88448 4.21032 1.99045 3.69209 2.18634C3.24654 2.35077 2.84338 2.61271 2.51209 2.95301C2.17037 3.28313 1.90821 3.68663 1.74542 4.13301C1.54953 4.65124 1.44356 5.19911 1.43209 5.75301C1.39209 6.45967 1.39209 6.68634 1.39209 8.49967C1.39209 10.313 1.39209 10.5397 1.43209 11.2463C1.44356 11.8002 1.54953 12.3481 1.74542 12.8663C1.90821 13.3127 2.17037 13.7162 2.51209 14.0463C2.84338 14.3866 3.24654 14.6486 3.69209 14.813C4.21032 15.0089 4.75819 15.1149 5.31209 15.1263C6.01876 15.1663 6.24542 15.1663 8.05876 15.1663C9.87209 15.1663 10.0988 15.1663 10.8054 15.1263C11.3593 15.1149 11.9072 15.0089 12.4254 14.813C12.8718 14.6502 13.2753 14.3881 13.6054 14.0463C13.9469 13.7147 14.211 13.3118 14.3788 12.8663C14.5689 12.3467 14.6725 11.7995 14.6854 11.2463C14.6854 10.5397 14.7254 10.313 14.7254 8.49967C14.7254 6.68634 14.7254 6.45967 14.6854 5.75301ZM13.4854 11.1663C13.4806 11.5895 13.4039 12.0088 13.2588 12.4063C13.1523 12.6965 12.9813 12.9586 12.7588 13.173C12.5425 13.3933 12.2809 13.564 11.9921 13.673C11.5946 13.8182 11.1753 13.8948 10.7521 13.8997C10.0854 13.933 9.83876 13.9397 8.08542 13.9397C6.33209 13.9397 6.08542 13.9397 5.41876 13.8997C4.97935 13.9079 4.54182 13.8402 4.12542 13.6997C3.84928 13.5851 3.59966 13.4149 3.39209 13.1997C3.17082 12.9855 3.00199 12.7231 2.89876 12.433C2.73599 12.0298 2.64572 11.601 2.63209 11.1663C2.63209 10.4997 2.59209 10.253 2.59209 8.49967C2.59209 6.74634 2.59209 6.49967 2.63209 5.83301C2.63508 5.40038 2.71406 4.97164 2.86542 4.56634C2.98279 4.28495 3.16293 4.03411 3.39209 3.83301C3.59463 3.60379 3.84495 3.42174 4.12542 3.29967C4.53179 3.15304 4.96009 3.07639 5.39209 3.07301C6.05876 3.07301 6.30542 3.03301 8.05876 3.03301C9.81209 3.03301 10.0588 3.03301 10.7254 3.07301C11.1486 3.07786 11.5679 3.15451 11.9654 3.29967C12.2684 3.41211 12.5403 3.59491 12.7588 3.83301C12.9772 4.03779 13.1479 4.28816 13.2588 4.56634C13.4069 4.9723 13.4836 5.40086 13.4854 5.83301C13.5188 6.49967 13.5254 6.74634 13.5254 8.49967C13.5254 10.253 13.5188 10.4997 13.4854 11.1663ZM8.05876 5.07967C7.38263 5.08099 6.72206 5.28269 6.16053 5.65929C5.59899 6.03588 5.16168 6.57047 4.90385 7.19551C4.64602 7.82055 4.57924 8.50799 4.71195 9.17096C4.84467 9.83394 5.17091 10.4427 5.64947 10.9203C6.12803 11.398 6.73743 11.723 7.40066 11.8544C8.06389 11.9859 8.7512 11.9177 9.37574 11.6587C10.0003 11.3997 10.534 10.9613 10.9095 10.399C11.285 9.83676 11.4854 9.1758 11.4854 8.49967C11.4863 8.04974 11.3982 7.60408 11.2262 7.18831C11.0543 6.77254 10.8018 6.39488 10.4833 6.07704C10.1649 5.7592 9.78672 5.50746 9.37062 5.33629C8.95452 5.16513 8.50868 5.07792 8.05876 5.07967ZM8.05876 10.7197C7.61968 10.7197 7.19047 10.5895 6.82539 10.3455C6.46031 10.1016 6.17577 9.75488 6.00774 9.34923C5.83972 8.94358 5.79575 8.49721 5.88141 8.06657C5.96707 7.63594 6.17851 7.24037 6.48898 6.9299C6.79945 6.61942 7.19502 6.40799 7.62566 6.32233C8.05629 6.23667 8.50266 6.28063 8.90831 6.44866C9.31397 6.61669 9.66068 6.90123 9.90462 7.26631C10.1486 7.63139 10.2788 8.0606 10.2788 8.49967C10.2788 8.79121 10.2213 9.07989 10.1098 9.34923C9.9982 9.61857 9.83468 9.86331 9.62853 10.0695C9.42239 10.2756 9.17766 10.4391 8.90831 10.5507C8.63897 10.6623 8.35029 10.7197 8.05876 10.7197Z", fill: "#f3f3f3" }) }) }), (0, Ie.jsx)("h1", { className: "ml-2 m-insta", children: "Instagram" })] })] }), (0, Ie.jsx)("div", { className: "flex menu-icon cursor-pointer flex-row  justify-end mx-auto m-game-menu", onClick: () => n((e => !e)), children: (0, Ie.jsx)("img", { src: He, alt: "menu", width: "50px", className: "flex border border-solid  m-burger border-[#F3F3F3] rounded-lg m-burger2 text-focus-in" }) })] }), (0, Ie.jsx)("div", { className: "font-varino", children: (0, Ie.jsxs)("div", { children: [(0, Ie.jsxs)("div", { className: "lg:flex justify-end hidden ", children: [(0, Ie.jsxs)("svg", { width: "300", height: "341", viewBox: "0 0 382 341", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "absolute top-[2rem] right-[5px] z-10", children: [(0, Ie.jsx)("path", { d: "M0 135.107C0 108.981 0 95.9175 2.42664 85.1039C10.8952 47.3661 40.3661 17.8952 78.1039 9.42664C88.9175 7 101.981 7 128.107 7H143.832C151.85 7 159.774 8.72531 167.066 12.0588L168.579 12.7504C182.779 19.2416 199.134 19.0562 213.183 12.2447C220.302 8.79315 228.11 7 236.022 7H253.507C279.993 7 293.236 7 304.192 9.4935C341.69 18.0279 370.972 47.3098 379.507 84.8081C382 95.7639 382 109.007 382 135.493V174C382 236.624 382 267.935 368.471 291.227C359.744 306.252 347.252 318.744 332.227 327.471C308.935 341 277.624 341 215 341H167C104.376 341 73.0647 341 49.7734 327.471C34.7481 318.744 22.2561 306.252 13.5287 291.227C0 267.935 0 236.624 0 174V135.107Z", fill: "#1E1F29" }), (0, Ie.jsx)("path", { d: "M187.598 3.05973C188.96 1.62406 189.64 0.906222 190.5 0.906222C191.36 0.906222 192.04 1.62406 193.402 3.05973L194.054 3.74728C196.794 6.63538 198.163 8.07942 197.643 9.28971C197.123 10.5 195.133 10.5 191.152 10.5H189.848C185.867 10.5 183.877 10.5 183.357 9.28971C182.837 8.07942 184.206 6.63538 186.946 3.74729L187.598 3.05973Z", fill: "#0B0C10" })] }), (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "90", height: "111", viewBox: "0 0 105 111", fill: "none", className: "absolute translate-y-[7rem] mr-[2.5rem] z-10", children: [(0, Ie.jsx)("path", { d: "M47.0275 21.0951L37.38 55.5022C37.0234 56.7732 36.4299 57.9555 35.6346 58.9789C34.8393 60.0024 33.8583 60.8462 32.7498 61.4604C31.6413 62.0746 30.4278 62.4467 29.1812 62.5546C27.9347 62.6626 26.6803 62.5042 25.4925 62.0888L11.2375 57.1057C9.94781 56.655 8.76623 55.9118 7.77497 54.9278C6.78371 53.9438 6.00657 52.7426 5.49761 51.4079C4.98865 50.0731 4.76011 48.6368 4.82787 47.1988C4.89563 45.7609 5.25808 44.3559 5.88999 43.0816L24.6275 5.29765C25.3848 3.77083 26.5049 2.48003 27.8771 1.55292C29.2492 0.6258 30.8258 0.094473 32.451 0.0114781C34.0762 -0.0715169 35.6937 0.296695 37.1435 1.0797C38.5933 1.86271 39.8253 3.03339 40.7175 4.47597L45.8875 12.8359C46.6327 14.0418 47.1207 15.4055 47.3176 16.832C47.5145 18.2585 47.4155 19.7133 47.0275 21.0951Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M80.1525 5.30034L98.8825 43.079C99.5144 44.3535 99.8769 45.7587 99.9446 47.1968C100.012 48.6349 99.7839 50.0714 99.2749 51.4064C98.766 52.7413 97.9889 53.9427 96.9976 54.927C96.0063 55.9113 94.8247 56.6548 93.535 57.1058L79.2875 62.0889C78.0992 62.5046 76.8443 62.6632 75.5971 62.5554C74.3499 62.4475 73.1358 62.0753 72.0268 61.4608C70.9178 60.8463 69.9364 60.0021 69.1408 58.9781C68.3452 57.9541 67.7515 56.7712 67.395 55.4995L57.75 21.0951C57.3625 19.7137 57.2638 18.2594 57.4607 16.8335C57.6575 15.4075 58.1453 14.0442 58.89 12.8386L64.055 4.48132C64.947 3.03742 66.1792 1.8655 67.6297 1.08151C69.0801 0.297532 70.6984 -0.0713408 72.3246 0.0113967C73.9507 0.0941343 75.5283 0.625614 76.9013 1.55325C78.2742 2.48088 79.3949 3.77251 80.1525 5.30034Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M37.9725 64.3481L44.885 37.2248C45.0383 36.6237 45.3741 36.0929 45.8404 35.7144C46.3068 35.3359 46.8777 35.1308 47.465 35.1309H56.96C57.5384 35.1303 58.1013 35.3287 58.5642 35.6962C59.0272 36.0638 59.3652 36.5806 59.5275 37.1692L66.995 64.2925C67.1115 64.715 67.1336 65.1606 67.0594 65.5937C66.9853 66.0269 66.8169 66.4358 66.5677 66.788C66.3185 67.1402 65.9954 67.4259 65.6239 67.6226C65.2524 67.8193 64.8428 67.9215 64.4275 67.9211H40.5525C40.1421 67.9211 39.7371 67.8209 39.3691 67.6282C39.0011 67.4356 38.6799 67.1556 38.4304 66.8101C38.1809 66.4645 38.0098 66.0627 37.9304 65.6358C37.851 65.2088 37.8654 64.7682 37.9725 64.3481Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M0 91.9569V68.5921C0.283333 65.7472 1.39 63.4774 3.32 61.7828C5.38667 59.9681 7.73667 59.2126 10.37 59.5166C11.315 59.6261 12.5867 60.0149 14.185 60.6828C19.5083 62.9093 25.27 65.2577 31.47 67.728C33.3117 68.4631 34.6167 69.1426 35.385 69.7663C37.8825 71.7993 39.345 75.1178 39.0675 78.4788C39.0142 79.1202 38.7833 80.2016 38.375 81.7231C36.4633 88.8496 34.6092 95.7596 32.8125 102.453C32.4842 103.676 31.8225 104.881 30.8275 106.069C28.62 108.703 25.1325 109.843 21.9025 109.101C20.9725 108.887 19.7825 108.362 18.3325 107.526C14.2225 105.155 10.205 102.893 6.28 100.741C4.73833 99.8963 3.595 99.094 2.85 98.3342C1.22 96.6714 0.27 94.5457 0 91.9569Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M105 68.6277V91.913C104.735 94.5159 103.797 96.6425 102.185 98.2929C101.425 99.0704 100.159 99.9469 98.3875 100.922C94.3625 103.14 90.3692 105.389 86.4075 107.668C85.0609 108.442 83.9434 108.923 83.055 109.11C79.115 109.942 75.1925 108.166 73.1225 104.585C72.6225 103.72 72.1542 102.451 71.7175 100.779C70.1092 94.6192 68.4775 88.5388 66.8225 82.5379C66.1842 80.2266 65.875 78.5939 65.895 77.6397C65.9775 73.4412 68.335 69.8629 72.075 68.3494C79.1367 65.4939 85.6783 62.823 91.7 60.3367C92.855 59.8596 93.8775 59.5795 94.7675 59.4965C97.4309 59.2438 99.7775 60.0478 101.808 61.9085C103.671 63.6155 104.735 65.8552 105 68.6277Z", fill: "#D60000" }), (0, Ie.jsx)("path", { d: "M66.6125 110.998H38.1875C36.4059 109.001 35.5025 106.729 35.4775 104.181C35.4659 103.052 35.7384 101.435 36.295 99.3304C37.7784 93.7307 39.2584 87.9401 40.735 81.9586C41.29 79.7127 41.7175 78.231 42.0175 77.5136C43.4525 74.0784 46.69 71.7857 50.245 71.6956C51.7767 71.6567 53.185 71.6638 54.47 71.7168C57.475 71.8413 60.185 73.7471 61.7675 76.3818C62.1942 77.0921 62.66 78.3635 63.165 80.196C65.0784 87.1528 66.9959 94.1079 68.9175 101.061C69.9492 104.79 69.1809 108.102 66.6125 110.998Z", fill: "#282A36" })] }), (0, Ie.jsx)("div", { className: "flex flex-row z-10", children: (0, Ie.jsxs)("div", { className: " absolute text-white text-xl font-semibold font-['Outfit'] translate-y-[7.5rem] -translate-x-[16.5rem]", children: ["Registration", (0, Ie.jsx)("br", {}), "Amount", (0, Ie.jsx)("div", { className: "text-slate-400 text-[13px] font-medium mt-[1rem]", children: "Prize : Certificate" }), (0, Ie.jsx)("div", { className: "text-slate-400 text-[13px] font-medium", children: "No refund" }), (0, Ie.jsxs)("div", { className: "relative justify-center z-10", children: [(0, Ie.jsx)("div", { className: "w-[225px] h-[60px] left-0 top-3 absolute bg-zinc-950 rounded-[100px]" }), (0, Ie.jsx)("div", { className: "w-6 h-5 left-[180px] top-[32px] absolute justify-center items-center inline-flex", children: (0, Ie.jsx)("div", { className: "w-6 h-5 relative", children: (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "22", viewBox: "0 0 24 24", fill: "none", children: [(0, Ie.jsx)("path", { d: "M14.43 5.92969L20.5 11.9997L14.43 18.0697", stroke: "#D60000", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" }), (0, Ie.jsx)("path", { d: "M3.5 12H20.33", stroke: "#D60000", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" })] }) }) }), (0, Ie.jsx)("div", { className: "left-[30px] top-[30px] absolute text-white text-[20px] font-semibold", children: "\u20b950/Person" })] })] }) })] }), (0, Ie.jsxs)("div", { className: "relative flex justify-center", children: [(0, Ie.jsx)("div", { className: "flex justify-center gt7-btn cursor-pointer absolute z-10 mx-auto bottom-[9.5rem] ", children: (0, Ie.jsx)("div", { className: "flex justify-center ", children: (0, Ie.jsxs)("div", { onClick: Xo, className: "w-[235px] h-[65px] text-center flex flex-row items-center  left-0 top-0 bg-[#D60000] rounded-[100px] m-gt7-btn ", children: [(0, Ie.jsx)("div", { className: "left-[2rem] absolute text-white text-[22px] font-semibold font-['Outfit'] m-participate-text", children: "Participate" }), (0, Ie.jsx)("div", { children: (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "21", height: "24", viewBox: "0 0 24 24", fill: "none", className: "flex ml-[11.5rem] m-arrow", children: [(0, Ie.jsx)("path", { d: "M14.4301 5.92969L20.5001 11.9997L14.4301 18.0697", stroke: "#fff", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" }), (0, Ie.jsx)("path", { d: "M3.5 12H20.33", stroke: "#fff", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" })] }) })] }) }) }), (0, Ie.jsx)("img", { src: pl, alt: "gt7banner", className: "w-screen m-hide" }), (0, Ie.jsx)("img", { src: ml, alt: "gt7banner", className: "w-screen lg:hidden" }), (0, Ie.jsx)("div", { className: " absolute w-[100vw] h-[300px] valorantbanneroverlay -bottom-32 flex justify-center items-center m-bgmi-overlay", children: (0, Ie.jsxs)("div", { className: " inline-flex lg:p-[25px] items-center lg:gap-5 lg:rounded-[22px] webdevvenuecard translate-y-[5rem] justify-center align-middle m-venue-box", children: [(0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-calender", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.61073 0.672852C9.39667 0.672852 10.0338 1.30998 10.0338 2.09593V4.94208H27.1107V2.09593C27.1107 1.30998 27.7479 0.672852 28.5338 0.672852C29.3197 0.672852 29.9569 1.30998 29.9569 2.09593V4.94208H31.38C34.5237 4.94208 37.0723 7.49062 37.0723 10.6344V31.9805C37.0723 35.1243 34.5237 37.6729 31.38 37.6729H5.76457C2.6208 37.6729 0.0722656 35.1243 0.0722656 31.9805V10.6344C0.0722656 7.49062 2.6208 4.94208 5.76457 4.94208H7.18765V2.09593C7.18765 1.30998 7.82478 0.672852 8.61073 0.672852ZM34.2261 17.7498C34.2261 16.1779 32.9518 14.9036 31.38 14.9036H5.76457C4.19269 14.9036 2.91842 16.1779 2.91842 17.7498V31.9805C2.91842 33.5524 4.19269 34.8267 5.76457 34.8267H31.38C32.9518 34.8267 34.2261 33.5524 34.2261 31.9805V17.7498Z", fill: "#F3F3F3" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "18th January" })] }), (0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-time", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { d: "M19.0605 9.92285V19.1729H25.998M32.9355 19.1729C32.9355 26.8358 26.7235 33.0478 19.0605 33.0478C11.3976 33.0478 5.18555 26.8358 5.18555 19.1729C5.18555 11.5099 11.3976 5.29785 19.0605 5.29785C26.7235 5.29785 32.9355 11.5099 32.9355 19.1729Z", stroke: "#F3F3F3", "stroke-width": "2.47513", "stroke-linecap": "round", "stroke-linejoin": "round" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "(TBA) via WhatsApp" })] }), (0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-location", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M17.8383 35.1307C17.8849 35.1577 17.9215 35.1785 17.9474 35.1931L17.9904 35.2171C18.334 35.4057 18.7602 35.4043 19.1041 35.2177L19.1483 35.1931C19.1742 35.1785 19.2108 35.1577 19.2574 35.1307C19.3505 35.0768 19.4836 34.9981 19.6509 34.895C19.9854 34.6891 20.4576 34.3854 21.0216 33.9869C22.1478 33.1914 23.6504 32.011 25.1563 30.4692C28.1535 27.4005 31.2666 22.7898 31.2666 16.8603C31.2666 9.83598 25.5722 4.1416 18.5479 4.1416C11.5235 4.1416 5.8291 9.83598 5.8291 16.8603C5.8291 22.7898 8.94222 27.4005 11.9394 30.4692C13.4453 32.011 14.9479 33.1914 16.0741 33.9869C16.6381 34.3854 17.1103 34.6891 17.4448 34.895C17.6121 34.9981 17.7452 35.0768 17.8383 35.1307ZM18.5479 21.4853C21.1022 21.4853 23.1728 19.4147 23.1728 16.8604C23.1728 14.306 21.1022 12.2354 18.5479 12.2354C15.9935 12.2354 13.9229 14.306 13.9229 16.8604C13.9229 19.4147 15.9935 21.4853 18.5479 21.4853Z", fill: "#F3F3F3" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "CS Lab,4th Floor" })] })] }) })] })] }) }), (0, Ie.jsx)("div", { className: "flex flex-col justify-center gap-[40px] items-center max-w-[1000px] mx-auto lg:mt-40 mb-20", children: (0, Ie.jsx)("div", { className: "text-[21px] font-readex text-center text-[#D4D4D4] tracking-[1.15px] font-medium z-10 bottom-8 m-bgmi-desc", children: "Gran Turismo 7 is a 2022 racing simulation game. The event will be played using the Logitech G29 steering wheel and pedal set, which provides a realistic and immersive driving experience. The tournament will feature a variety of cars and tracks, with a prize pool for the winner. The tournament aims to bring together the best players and fans of Gran Turismo to showcase their skills and enjoy the game together." }) }), (0, Ie.jsxs)("div", { className: "flex flex-col text-center justify-center z-10 lg:pt-[10rem] m-lgsvg", children: [(0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1400", height: "350", viewBox: "0 0 1920 491", fill: "none", className: "relative z-[10rem] mt-[-15.5rem] -mb-[5rem] m-rule-banner", children: [(0, Ie.jsx)("path", { d: "M-21.6252 490.432L-22.2461 308.932L2319.61 0.704816L2221.19 189.569L-21.6252 490.432Z", fill: "url(#paint0_linear_529_185)" }), (0, Ie.jsx)("defs", { children: (0, Ie.jsxs)("linearGradient", { id: "paint0_linear_529_185", x1: "1966.11", y1: "45.1715", x2: "130.911", y2: "512.69", gradientUnits: "userSpaceOnUse", children: [(0, Ie.jsx)("stop", { "stop-color": "#0B0C10" }), (0, Ie.jsx)("stop", { offset: "0.505448", "stop-color": "#D60000" }), (0, Ie.jsx)("stop", { offset: "0.885415", "stop-color": "#D60000", "stop-opacity": "0.1582" })] }) })] }), (0, Ie.jsx)("div", { className: "text-zinc-100 text-[80px] font-normal font-['Varino'] translate-y-[-9.7rem] leading-[137.20px] tracking-[4.90px] z-10 m-rule-text", children: "RULES" })] }), (0, Ie.jsx)("div", { className: "flex flex-col items-center text-center m-rules", children: (0, Ie.jsxs)("div", { className: "relative flex text-start flex-col items-center justify-center", children: [(0, Ie.jsx)("div", { className: "text-center text-white text-opacity-10 text-[70px] font-bold font-['Readex Pro'] m-rule-no-1", children: "01" }), (0, Ie.jsx)("div", { className: "text-center z-10 translate-y-[-3rem] text-white text-[30px] font-semibold font-['Readex Pro'] m-codm-rule-1", children: "Logitech G29 Controller" }), (0, Ie.jsx)("div", { className: "w-[340px] h-[20px] translate-y-[-4.2rem] bg-gradient-to-r from-zinc-950 to-red-600 m-rule-underlay-1" }), (0, Ie.jsx)("div", { className: "text-center text-white text-opacity-10 text-[80px] font-bold font-['Readex Pro'] m-rule-no-2", children: "02" }), (0, Ie.jsx)("div", { className: "text-center z-10 max-w-[35rem] translate-y-[-3rem] text-white text-[35px] font-semibold font-['Readex Pro'] leading-[40px] m-codm-rule-2", children: "If any damages occur during use the user will face the full consequences." }), (0, Ie.jsx)("div", { className: "w-[520px] h-[20px] translate-y-[-9rem] bg-gradient-to-r from-zinc-950 to-red-600 m-rule-underlay-6" }), (0, Ie.jsx)("div", { className: "text-center  text-white text-opacity-10 text-[90px] font-bold font-['Readex Pro'] m-rule-no-3", children: "03" }), (0, Ie.jsx)("div", { className: "text-center z-10 max-w-[50rem] translate-y-[-3rem] text-white text-[40px] font-semibold font-['Readex Pro'] leading-[40px] m-codm-rule-3", children: "The certificate will be given for whoever finishes the game in the shortest time possible." }), (0, Ie.jsx)("div", { className: "w-[680px] h-[20px] translate-y-[-6.3rem] bg-gradient-to-r from-zinc-950 to-red-600 m-rule-underlay-7" }), (0, Ie.jsx)("div", { className: "w-[711px] h-[20px] translate-y-[-10rem] bg-gradient-to-r from-zinc-950 to-red-600 m-rule-underlay-8" })] }) }), (0, Ie.jsx)("div", { className: "valorantnote text-[#D05555] text-center mx-auto lg:p-5 max-w-[950px]  text-[20px] font-inter italic font-medium tracking-[1.15px] m-note", children: "*NOTE: Any sort of damage to the property of Ziegers and the concerned authorities will not be tolerated and the one's responsible will be sanctioned with penalties and can also be charged a fine depending on the damage done." }), (0, Ie.jsx)("div", { className: "flex mt-[5rem]", children: (0, Ie.jsx)(Ze, {}) })] }) })),
            gl = n.p + "static/media/webdevbanner.992eac669d92ad369981.webp",
            vl = n.p + "static/media/m-webdevbanner.d1d395b6e4f04aae0675.webp",
            yl = n.p + "static/media/codecraft.488cd26b5a57799dfe1e.webp",
            Cl = n.p + "static/media/designsprint.7f3fadf94ba0b3f60f31.webp",
            wl = () => (0, Ie.jsx)("div", { className: "flex justify-center h-screen items-center", children: (0, Ie.jsx)("div", { id: "page", children: (0, Ie.jsxs)("div", { id: "container", children: [(0, Ie.jsx)("div", { id: "ring" }), (0, Ie.jsx)("div", { id: "ring" }), (0, Ie.jsx)("div", { id: "ring" }), (0, Ie.jsx)("div", { id: "ring" }), (0, Ie.jsx)("div", { id: "h3" })] }) }) }),
            bl = Wo((() => { const [e, n] = (0, t.useState)(!1), r = Q(), [i, a] = (0, t.useState)(!0), [s, o] = (0, t.useState)(!0); return (0, t.useEffect)((() => { document.title = "Ziegers-Webdev"; const e = setTimeout((() => { o(!1) }), 3e3); return () => clearTimeout(e) }), []), (0, Ie.jsx)("div", { className: "wrapper", children: s ? (0, Ie.jsx)(wl, {}) : (0, Ie.jsxs)(Ie.Fragment, { children: [(0, Ie.jsxs)("nav", { className: "flex text-[#fff] flex-row  items-center align-middle mx-auto pt-2 pl-10 justify-between bg-[#000000CC] rounded-es-[100px] rounded-br-[100px] bg-opacity-80 absolute m-gaming-nav", style: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 15 }, children: [(0, Ie.jsx)(_e.default, { onOutsideClick: () => { n(!1) }, children: (0, Ie.jsxs)("div", { className: "flex flex-row justify-evenly items-center align-middle h-menus lg:mb-[1rem]  ml-[3rem]", style: (e => { if (document.documentElement.clientWidth <= 800) return { right: !e && "-100%" } })(e), children: [(0, Ie.jsx)("div", { onClick: () => { r("/contact") }, className: "flex justify-center cursor-pointer items-center align-middle font-varino text-focus-in navbar-text", children: "Contact" }), (0, Ie.jsx)("svg", { width: "34", height: "34", viewBox: "0 0 34 34", fill: "none", className: "text-focus-in m-hide", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "Huge-icon/arrows/outline/arrow-down", children: (0, Ie.jsx)("path", { id: "Vector 190", d: "M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425", stroke: "#F3F3F3", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) }), (0, Ie.jsx)("div", { onClick: () => { r("/about") }, className: " cursor-pointer font-varino ml-3 text-focus-in navbar-text", children: "About" }), (0, Ie.jsx)("svg", { width: "34", height: "34", className: "text-focus-in m-hide", viewBox: "0 0 34 34", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "Huge-icon/arrows/outline/arrow-down", children: (0, Ie.jsx)("path", { id: "Vector 190", d: "M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425", stroke: "#F3F3F3", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) })] }) }), (0, Ie.jsx)("a", { href: "/", className: "font-varino font-bold mx-auto text-xl translate-x-[-2.7rem] lg:mb-[1rem] text-focus-in logo-text", style: { textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }, children: "ZIEGERS" }), (0, Ie.jsxs)("a", { href: "https://www.instagram.com/ziegerscs", target: "_blank", className: "m-hide text-focus-in w-[150px] h-[47px] pl-[3px] pr-[13px] mr-[5rem] bg-[#246DB6] from-zinc-950  rounded-full shadow border border-[#246DB6] justify-start items-center inline-flex instagram-button mb-[0.5rem]", children: [(0, Ie.jsx)("div", { className: "w-4 h-4 relative flex-col justify-start items-start flex " }), (0, Ie.jsxs)("div", { className: "text-center text-white  text-xs font-normal font-['Varino'] flex flex-row justify-center items-center align-middle", children: [(0, Ie.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "instagram", children: (0, Ie.jsx)("path", { id: "Vector", d: "M11.6188 4.13967C11.4605 4.13967 11.3059 4.18659 11.1743 4.2745C11.0427 4.3624 10.9402 4.48735 10.8797 4.63353C10.8191 4.77971 10.8033 4.94056 10.8341 5.09575C10.865 5.25093 10.9412 5.39348 11.0531 5.50536C11.165 5.61724 11.3075 5.69343 11.4627 5.7243C11.6179 5.75517 11.7787 5.73933 11.9249 5.67878C12.0711 5.61823 12.196 5.51569 12.2839 5.38413C12.3718 5.25257 12.4188 5.0979 12.4188 4.93967C12.4188 4.7275 12.3345 4.52402 12.1844 4.37399C12.0344 4.22396 11.8309 4.13967 11.6188 4.13967ZM14.6854 5.75301C14.6725 5.19987 14.5689 4.65261 14.3788 4.13301C14.2092 3.68843 13.9454 3.28586 13.6054 2.95301C13.2753 2.61129 12.8718 2.34913 12.4254 2.18634C11.9072 1.99045 11.3593 1.88448 10.8054 1.87301C10.0988 1.83301 9.87209 1.83301 8.05876 1.83301C6.24542 1.83301 6.01876 1.83301 5.31209 1.87301C4.75819 1.88448 4.21032 1.99045 3.69209 2.18634C3.24654 2.35077 2.84338 2.61271 2.51209 2.95301C2.17037 3.28313 1.90821 3.68663 1.74542 4.13301C1.54953 4.65124 1.44356 5.19911 1.43209 5.75301C1.39209 6.45967 1.39209 6.68634 1.39209 8.49967C1.39209 10.313 1.39209 10.5397 1.43209 11.2463C1.44356 11.8002 1.54953 12.3481 1.74542 12.8663C1.90821 13.3127 2.17037 13.7162 2.51209 14.0463C2.84338 14.3866 3.24654 14.6486 3.69209 14.813C4.21032 15.0089 4.75819 15.1149 5.31209 15.1263C6.01876 15.1663 6.24542 15.1663 8.05876 15.1663C9.87209 15.1663 10.0988 15.1663 10.8054 15.1263C11.3593 15.1149 11.9072 15.0089 12.4254 14.813C12.8718 14.6502 13.2753 14.3881 13.6054 14.0463C13.9469 13.7147 14.211 13.3118 14.3788 12.8663C14.5689 12.3467 14.6725 11.7995 14.6854 11.2463C14.6854 10.5397 14.7254 10.313 14.7254 8.49967C14.7254 6.68634 14.7254 6.45967 14.6854 5.75301ZM13.4854 11.1663C13.4806 11.5895 13.4039 12.0088 13.2588 12.4063C13.1523 12.6965 12.9813 12.9586 12.7588 13.173C12.5425 13.3933 12.2809 13.564 11.9921 13.673C11.5946 13.8182 11.1753 13.8948 10.7521 13.8997C10.0854 13.933 9.83876 13.9397 8.08542 13.9397C6.33209 13.9397 6.08542 13.9397 5.41876 13.8997C4.97935 13.9079 4.54182 13.8402 4.12542 13.6997C3.84928 13.5851 3.59966 13.4149 3.39209 13.1997C3.17082 12.9855 3.00199 12.7231 2.89876 12.433C2.73599 12.0298 2.64572 11.601 2.63209 11.1663C2.63209 10.4997 2.59209 10.253 2.59209 8.49967C2.59209 6.74634 2.59209 6.49967 2.63209 5.83301C2.63508 5.40038 2.71406 4.97164 2.86542 4.56634C2.98279 4.28495 3.16293 4.03411 3.39209 3.83301C3.59463 3.60379 3.84495 3.42174 4.12542 3.29967C4.53179 3.15304 4.96009 3.07639 5.39209 3.07301C6.05876 3.07301 6.30542 3.03301 8.05876 3.03301C9.81209 3.03301 10.0588 3.03301 10.7254 3.07301C11.1486 3.07786 11.5679 3.15451 11.9654 3.29967C12.2684 3.41211 12.5403 3.59491 12.7588 3.83301C12.9772 4.03779 13.1479 4.28816 13.2588 4.56634C13.4069 4.9723 13.4836 5.40086 13.4854 5.83301C13.5188 6.49967 13.5254 6.74634 13.5254 8.49967C13.5254 10.253 13.5188 10.4997 13.4854 11.1663ZM8.05876 5.07967C7.38263 5.08099 6.72206 5.28269 6.16053 5.65929C5.59899 6.03588 5.16168 6.57047 4.90385 7.19551C4.64602 7.82055 4.57924 8.50799 4.71195 9.17096C4.84467 9.83394 5.17091 10.4427 5.64947 10.9203C6.12803 11.398 6.73743 11.723 7.40066 11.8544C8.06389 11.9859 8.7512 11.9177 9.37574 11.6587C10.0003 11.3997 10.534 10.9613 10.9095 10.399C11.285 9.83676 11.4854 9.1758 11.4854 8.49967C11.4863 8.04974 11.3982 7.60408 11.2262 7.18831C11.0543 6.77254 10.8018 6.39488 10.4833 6.07704C10.1649 5.7592 9.78672 5.50746 9.37062 5.33629C8.95452 5.16513 8.50868 5.07792 8.05876 5.07967ZM8.05876 10.7197C7.61968 10.7197 7.19047 10.5895 6.82539 10.3455C6.46031 10.1016 6.17577 9.75488 6.00774 9.34923C5.83972 8.94358 5.79575 8.49721 5.88141 8.06657C5.96707 7.63594 6.17851 7.24037 6.48898 6.9299C6.79945 6.61942 7.19502 6.40799 7.62566 6.32233C8.05629 6.23667 8.50266 6.28063 8.90831 6.44866C9.31397 6.61669 9.66068 6.90123 9.90462 7.26631C10.1486 7.63139 10.2788 8.0606 10.2788 8.49967C10.2788 8.79121 10.2213 9.07989 10.1098 9.34923C9.9982 9.61857 9.83468 9.86331 9.62853 10.0695C9.42239 10.2756 9.17766 10.4391 8.90831 10.5507C8.63897 10.6623 8.35029 10.7197 8.05876 10.7197Z", fill: "#f3f3f3" }) }) }), (0, Ie.jsx)("h1", { className: "ml-2 m-insta", children: "Instagram" })] })] }), (0, Ie.jsx)("div", { className: "flex menu-icon cursor-pointer flex-row  justify-end mx-auto m-game-menu", onClick: () => n((e => !e)), children: (0, Ie.jsx)("img", { src: He, alt: "menu", width: "50px", className: "flex border border-solid  m-burger border-[#F3F3F3] rounded-lg m-burger2 text-focus-in" }) })] }), (0, Ie.jsx)("div", { className: "font-varino", children: (0, Ie.jsxs)("div", { className: "", children: [(0, Ie.jsxs)("div", { className: "lg:flex justify-end relative z-10 hidden ", children: [(0, Ie.jsxs)("svg", { width: "300", height: "341", viewBox: "0 0 382 341", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "absolute top-[2rem] right-[2px]", children: [(0, Ie.jsx)("path", { d: "M0 135.107C0 108.981 0 95.9175 2.42664 85.1039C10.8952 47.3661 40.3661 17.8952 78.1039 9.42664C88.9175 7 101.981 7 128.107 7H143.832C151.85 7 159.774 8.72531 167.066 12.0588L168.579 12.7504C182.779 19.2416 199.134 19.0562 213.183 12.2447C220.302 8.79315 228.11 7 236.022 7H253.507C279.993 7 293.236 7 304.192 9.4935C341.69 18.0279 370.972 47.3098 379.507 84.8081C382 95.7639 382 109.007 382 135.493V174C382 236.624 382 267.935 368.471 291.227C359.744 306.252 347.252 318.744 332.227 327.471C308.935 341 277.624 341 215 341H167C104.376 341 73.0647 341 49.7734 327.471C34.7481 318.744 22.2561 306.252 13.5287 291.227C0 267.935 0 236.624 0 174V135.107Z", fill: "#1E1F29" }), (0, Ie.jsx)("path", { d: "M187.598 3.05973C188.96 1.62406 189.64 0.906222 190.5 0.906222C191.36 0.906222 192.04 1.62406 193.402 3.05973L194.054 3.74728C196.794 6.63538 198.163 8.07942 197.643 9.28971C197.123 10.5 195.133 10.5 191.152 10.5H189.848C185.867 10.5 183.877 10.5 183.357 9.28971C182.837 8.07942 184.206 6.63538 186.946 3.74729L187.598 3.05973Z", fill: "#0B0C10" })] }), (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "90", height: "111", viewBox: "0 0 105 111", fill: "none", className: "absolute translate-y-[7rem] mr-[2.5rem]", children: [(0, Ie.jsx)("path", { d: "M47.0275 21.0951L37.38 55.5022C37.0234 56.7732 36.4299 57.9555 35.6346 58.9789C34.8393 60.0024 33.8583 60.8462 32.7498 61.4604C31.6413 62.0746 30.4278 62.4467 29.1812 62.5546C27.9347 62.6626 26.6803 62.5042 25.4925 62.0888L11.2375 57.1057C9.94781 56.655 8.76623 55.9118 7.77497 54.9278C6.78371 53.9438 6.00657 52.7426 5.49761 51.4079C4.98865 50.0731 4.76011 48.6368 4.82787 47.1988C4.89563 45.7609 5.25808 44.3559 5.88999 43.0816L24.6275 5.29765C25.3848 3.77083 26.5049 2.48003 27.8771 1.55292C29.2492 0.6258 30.8258 0.094473 32.451 0.0114781C34.0762 -0.0715169 35.6937 0.296695 37.1435 1.0797C38.5933 1.86271 39.8253 3.03339 40.7175 4.47597L45.8875 12.8359C46.6327 14.0418 47.1207 15.4055 47.3176 16.832C47.5145 18.2585 47.4155 19.7133 47.0275 21.0951Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M80.1525 5.30034L98.8825 43.079C99.5144 44.3535 99.8769 45.7587 99.9446 47.1968C100.012 48.6349 99.7839 50.0714 99.2749 51.4064C98.766 52.7413 97.9889 53.9427 96.9976 54.927C96.0063 55.9113 94.8247 56.6548 93.535 57.1058L79.2875 62.0889C78.0992 62.5046 76.8443 62.6632 75.5971 62.5554C74.3499 62.4475 73.1358 62.0753 72.0268 61.4608C70.9178 60.8463 69.9364 60.0021 69.1408 58.9781C68.3452 57.9541 67.7515 56.7712 67.395 55.4995L57.75 21.0951C57.3625 19.7137 57.2638 18.2594 57.4607 16.8335C57.6575 15.4075 58.1453 14.0442 58.89 12.8386L64.055 4.48132C64.947 3.03742 66.1792 1.8655 67.6297 1.08151C69.0801 0.297532 70.6984 -0.0713408 72.3246 0.0113967C73.9507 0.0941343 75.5283 0.625614 76.9013 1.55325C78.2742 2.48088 79.3949 3.77251 80.1525 5.30034Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M37.9725 64.3481L44.885 37.2248C45.0383 36.6237 45.3741 36.0929 45.8404 35.7144C46.3068 35.3359 46.8777 35.1308 47.465 35.1309H56.96C57.5384 35.1303 58.1013 35.3287 58.5642 35.6962C59.0272 36.0638 59.3652 36.5806 59.5275 37.1692L66.995 64.2925C67.1115 64.715 67.1336 65.1606 67.0594 65.5937C66.9853 66.0269 66.8169 66.4358 66.5677 66.788C66.3185 67.1402 65.9954 67.4259 65.6239 67.6226C65.2524 67.8193 64.8428 67.9215 64.4275 67.9211H40.5525C40.1421 67.9211 39.7371 67.8209 39.3691 67.6282C39.0011 67.4356 38.6799 67.1556 38.4304 66.8101C38.1809 66.4645 38.0098 66.0627 37.9304 65.6358C37.851 65.2088 37.8654 64.7682 37.9725 64.3481Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M0 91.9569V68.5921C0.283333 65.7472 1.39 63.4774 3.32 61.7828C5.38667 59.9681 7.73667 59.2126 10.37 59.5166C11.315 59.6261 12.5867 60.0149 14.185 60.6828C19.5083 62.9093 25.27 65.2577 31.47 67.728C33.3117 68.4631 34.6167 69.1426 35.385 69.7663C37.8825 71.7993 39.345 75.1178 39.0675 78.4788C39.0142 79.1202 38.7833 80.2016 38.375 81.7231C36.4633 88.8496 34.6092 95.7596 32.8125 102.453C32.4842 103.676 31.8225 104.881 30.8275 106.069C28.62 108.703 25.1325 109.843 21.9025 109.101C20.9725 108.887 19.7825 108.362 18.3325 107.526C14.2225 105.155 10.205 102.893 6.28 100.741C4.73833 99.8963 3.595 99.094 2.85 98.3342C1.22 96.6714 0.27 94.5457 0 91.9569Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M105 68.6277V91.913C104.735 94.5159 103.797 96.6425 102.185 98.2929C101.425 99.0704 100.159 99.9469 98.3875 100.922C94.3625 103.14 90.3692 105.389 86.4075 107.668C85.0609 108.442 83.9434 108.923 83.055 109.11C79.115 109.942 75.1925 108.166 73.1225 104.585C72.6225 103.72 72.1542 102.451 71.7175 100.779C70.1092 94.6192 68.4775 88.5388 66.8225 82.5379C66.1842 80.2266 65.875 78.5939 65.895 77.6397C65.9775 73.4412 68.335 69.8629 72.075 68.3494C79.1367 65.4939 85.6783 62.823 91.7 60.3367C92.855 59.8596 93.8775 59.5795 94.7675 59.4965C97.4309 59.2438 99.7775 60.0478 101.808 61.9085C103.671 63.6155 104.735 65.8552 105 68.6277Z", fill: "#246DB6" }), (0, Ie.jsx)("path", { d: "M66.6125 110.998H38.1875C36.4059 109.001 35.5025 106.729 35.4775 104.181C35.4659 103.052 35.7384 101.435 36.295 99.3304C37.7784 93.7307 39.2584 87.9401 40.735 81.9586C41.29 79.7127 41.7175 78.231 42.0175 77.5136C43.4525 74.0784 46.69 71.7857 50.245 71.6956C51.7767 71.6567 53.185 71.6638 54.47 71.7168C57.475 71.8413 60.185 73.7471 61.7675 76.3818C62.1942 77.0921 62.66 78.3635 63.165 80.196C65.0784 87.1528 66.9959 94.1079 68.9175 101.061C69.9492 104.79 69.1809 108.102 66.6125 110.998Z", fill: "#282A36" })] }), (0, Ie.jsx)("div", { className: "flex flex-row", children: (0, Ie.jsxs)("div", { className: " absolute text-white text-xl font-semibold font-['Outfit'] translate-y-[7.5rem] -translate-x-[16.5rem]", children: ["Registration", (0, Ie.jsx)("br", {}), "Amount", (0, Ie.jsx)("div", { className: "text-slate-400 text-[13px] font-medium mt-[1rem]", children: "Check in 15:00" }), (0, Ie.jsx)("div", { className: "text-slate-400 text-[13px] font-medium", children: "No refund" }), (0, Ie.jsxs)("div", { className: "relative justify-center", children: [(0, Ie.jsx)("div", { className: "w-[225px] h-[60px] left-0 top-3 absolute bg-zinc-950 rounded-[100px]" }), (0, Ie.jsx)("div", { className: "w-6 h-5 left-[180px] top-[32px] absolute justify-center items-center inline-flex", children: (0, Ie.jsx)("div", { className: "w-6 h-5 relative", children: (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "22", viewBox: "0 0 24 24", fill: "none", children: [(0, Ie.jsx)("path", { d: "M14.43 5.92969L20.5 11.9997L14.43 18.0697", stroke: "#246DB6", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" }), (0, Ie.jsx)("path", { d: "M3.5 12H20.33", stroke: "#246DB6", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" })] }) }) }), (0, Ie.jsx)("div", { className: "left-[30px] top-[30px] absolute text-white text-[25px] font-semibold", children: "\u20b949" })] })] }) })] }), (0, Ie.jsxs)("div", { className: "relative flex justify-center", children: [(0, Ie.jsx)("div", { className: "flex justify-center webdev-btn cursor-pointer absolute z-10 mx-auto bottom-[7.2rem]", children: (0, Ie.jsx)("div", { className: "flex justify-center", children: (0, Ie.jsxs)("div", { onClick: Jo, className: "w-[235px] h-[65px] text-center flex flex-row justify-center items-center left-0 top-0 bg-[#246DB6] rounded-[100px] m-webdev-btn", children: [(0, Ie.jsx)("div", { className: "left-[2rem] absolute text-white text-[22px] font-semibold font-['Outfit'] m-participate-text", children: "Participate" }), (0, Ie.jsx)("div", { children: (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "21", height: "24", viewBox: "0 0 24 24", fill: "none", className: "flex ml-[9.5rem] m-arrow", children: [(0, Ie.jsx)("path", { d: "M14.4301 5.92969L20.5001 11.9997L14.4301 18.0697", stroke: "#fff", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" }), (0, Ie.jsx)("path", { d: "M3.5 12H20.33", stroke: "#fff", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" })] }) })] }) }) }), (0, Ie.jsx)("img", { src: gl, alt: "webdevbanner", className: "w-screen m-hide" }), (0, Ie.jsx)("img", { src: vl, alt: "webdevbanner", className: "w-screen lg:hidden" }), (0, Ie.jsx)("div", { className: " absolute w-[100vw] h-[300px] valorantbanneroverlay -bottom-32 flex justify-center items-center", children: (0, Ie.jsxs)("div", { className: " inline-flex lg:p-[25px] items-center lg:gap-5 lg:rounded-[22px] webdevvenuecard translate-y-[5rem] justify-center align-middle m-venue-box", children: [(0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-calender", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.61073 0.672852C9.39667 0.672852 10.0338 1.30998 10.0338 2.09593V4.94208H27.1107V2.09593C27.1107 1.30998 27.7479 0.672852 28.5338 0.672852C29.3197 0.672852 29.9569 1.30998 29.9569 2.09593V4.94208H31.38C34.5237 4.94208 37.0723 7.49062 37.0723 10.6344V31.9805C37.0723 35.1243 34.5237 37.6729 31.38 37.6729H5.76457C2.6208 37.6729 0.0722656 35.1243 0.0722656 31.9805V10.6344C0.0722656 7.49062 2.6208 4.94208 5.76457 4.94208H7.18765V2.09593C7.18765 1.30998 7.82478 0.672852 8.61073 0.672852ZM34.2261 17.7498C34.2261 16.1779 32.9518 14.9036 31.38 14.9036H5.76457C4.19269 14.9036 2.91842 16.1779 2.91842 17.7498V31.9805C2.91842 33.5524 4.19269 34.8267 5.76457 34.8267H31.38C32.9518 34.8267 34.2261 33.5524 34.2261 31.9805V17.7498Z", fill: "#F3F3F3" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "19th January" })] }), (0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-time", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { d: "M19.0605 9.92285V19.1729H25.998M32.9355 19.1729C32.9355 26.8358 26.7235 33.0478 19.0605 33.0478C11.3976 33.0478 5.18555 26.8358 5.18555 19.1729C5.18555 11.5099 11.3976 5.29785 19.0605 5.29785C26.7235 5.29785 32.9355 11.5099 32.9355 19.1729Z", stroke: "#F3F3F3", "stroke-width": "2.47513", "stroke-linecap": "round", "stroke-linejoin": "round" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "9:00 AM to 11:00 AM" })] }), (0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-location", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M17.8383 35.1307C17.8849 35.1577 17.9215 35.1785 17.9474 35.1931L17.9904 35.2171C18.334 35.4057 18.7602 35.4043 19.1041 35.2177L19.1483 35.1931C19.1742 35.1785 19.2108 35.1577 19.2574 35.1307C19.3505 35.0768 19.4836 34.9981 19.6509 34.895C19.9854 34.6891 20.4576 34.3854 21.0216 33.9869C22.1478 33.1914 23.6504 32.011 25.1563 30.4692C28.1535 27.4005 31.2666 22.7898 31.2666 16.8603C31.2666 9.83598 25.5722 4.1416 18.5479 4.1416C11.5235 4.1416 5.8291 9.83598 5.8291 16.8603C5.8291 22.7898 8.94222 27.4005 11.9394 30.4692C13.4453 32.011 14.9479 33.1914 16.0741 33.9869C16.6381 34.3854 17.1103 34.6891 17.4448 34.895C17.6121 34.9981 17.7452 35.0768 17.8383 35.1307ZM18.5479 21.4853C21.1022 21.4853 23.1728 19.4147 23.1728 16.8604C23.1728 14.306 21.1022 12.2354 18.5479 12.2354C15.9935 12.2354 13.9229 14.306 13.9229 16.8604C13.9229 19.4147 15.9935 21.4853 18.5479 21.4853Z", fill: "#F3F3F3" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "CS Lab,4th Floor" })] })] }) })] })] }) }), (0, Ie.jsxs)("div", { className: "max-w-[1300px] lg:mt-[9rem] mb-20 flex flex-col justify-center items-center mx-auto gap-24 z-10", children: [(0, Ie.jsx)("div", { className: "text-center text-[#D6D6D6E5] font-readex text-[18px] font-medium w-[800px] m-webdev-desc", children: "Join us for an exciting web development competition on the 19th of January 2024, where participants will showcase their skills in either website development using their preferred framework or the fundamentals of HTML and CSS. This single-round event offers a unique challenge for both developers and wireframe designers" }), (0, Ie.jsxs)("div", { className: "flex flex-row justify-center items-center gap-[100px] flex-wrap-reverse m-codecraft", children: [(0, Ie.jsx)("img", { src: yl, alt: "codedraft", className: "w-[600px] h-[350px] rounded-[80px] m-codecraft-img" }), (0, Ie.jsxs)("div", { className: "flex flex-col items-stretch justify-center w-[400px] gap-8", children: [(0, Ie.jsx)("div", { className: "text-[#EEE] font-inter text-center text-[35px] font-[700] mx-auto m-codecraft-heading", children: "CodeCraft" }), (0, Ie.jsx)("div", { children: (0, Ie.jsxs)("ul", { className: "flex flex-col items-center gap-5 text-[#EEE] text-[16px] font-medium m-codecraft-text", style: { listStyleType: "disc" }, children: [(0, Ie.jsx)("div", { children: "Participants in this category will engage in a hands-on coding challenge. They can choose to use their preferred web development framework or stick to the basics of HTML and CSS." }), (0, Ie.jsx)("div", { children: "We will provide pre-made wireframe designs, and participants must clone the given design within a 2-hour time span." })] }) })] })] }), (0, Ie.jsxs)("div", { className: "flex flex-row justify-center items-center gap-[100px] flex-wrap m-designsprint", children: [(0, Ie.jsxs)("div", { className: "flex flex-col items-stretch justify-center w-[400px] gap-8", children: [(0, Ie.jsx)("div", { className: "text-[#EEE] font-inter text-center text-[35px] font-[700] m-designsprint-heading", children: "DesignSprint" }), (0, Ie.jsx)("div", { children: (0, Ie.jsxs)("ul", { className: "flex flex-col items-center gap-5 text-[#EEE] text-[16px] font-medium m-designsprint-text", style: { listStyleType: "disc" }, children: [(0, Ie.jsx)("div", { children: "Designers will embark on a creative journey, given 4 to 5 niche options as inspiration." }), (0, Ie.jsx)("div", { children: "Within the same 2-hour time limit, designers will craft innovative wireframe designs based on their chosen niche using Figma." })] }) })] }), (0, Ie.jsx)("img", { src: Cl, alt: "designsprint", className: "w-[600px] h-[350px] rounded-[80px] m-designsprint-img" })] }), (0, Ie.jsx)("div", { className: "font-varino text-[75px] webdevhighlights text-center font-semibold m-rule-text", children: "EVENT HIGHLIGHTS" }), (0, Ie.jsxs)("div", { className: "flex flex-row justify-center gap-8 flex-wrap", children: [(0, Ie.jsxs)("div", { className: "h-[350px] w-[330px] flex flex-col items-start justify-center gap-5 p-[0_50px] rounded-[40px] webdevhighlighcards m-webdevhighlighcards", children: [(0, Ie.jsxs)("div", { className: "flex flex-col items-start gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "65", height: "65", className: "m-event-icons", viewBox: "0 0 81 81", fill: "none", children: (0, Ie.jsx)("path", { d: "M40.4987 60.5006V43.0006M40.4987 43.0006C42.1853 43.0019 43.8652 42.7902 45.4987 42.3706M40.4987 43.0006C38.8122 43.0019 37.1322 42.7902 35.4987 42.3706M47.9987 67.2973C43.043 68.2384 37.9545 68.2384 32.9987 67.2973M45.4987 75.2406C42.1745 75.5886 38.823 75.5886 35.4987 75.2406M47.9987 60.5006V59.8606C47.9987 56.5839 50.1921 53.7839 53.0254 52.1406C57.7854 49.3841 61.5035 45.1347 63.6034 40.0507C65.7034 34.9668 66.0681 29.3323 64.641 24.0201C63.2139 18.7079 60.0746 14.0146 55.7096 10.6675C51.3446 7.32044 45.9976 5.50635 40.4971 5.50635C34.9965 5.50635 29.6495 7.32044 25.2845 10.6675C20.9196 14.0146 17.7803 18.7079 16.3532 24.0201C14.926 29.3323 15.2907 34.9668 17.3907 40.0507C19.4907 45.1347 23.2087 49.3841 27.9687 52.1406C30.8021 53.7839 32.9987 56.5839 32.9987 59.8606V60.5006", stroke: "#F9F9F9", "stroke-width": "5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }), (0, Ie.jsx)("div", { className: "text-white font-inter text-[26px] font-[700] m-event-heading", children: "Skill Showcase" })] }), (0, Ie.jsx)("div", { className: "text-[#A3A3A3] font-inter text-[18px] m-event-detail", children: "Participants will demonstrate their web development or wireframing expertise in a competitive environment." })] }), (0, Ie.jsxs)("div", { className: "h-[350px] w-[330px] flex flex-col items-start justify-center gap-5 p-[0_50px] rounded-[40px] webdevhighlighcards m-webdevhighlighcards", children: [(0, Ie.jsxs)("div", { className: "flex flex-col items-start gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "65", height: "65", className: "m-event-icons", viewBox: "0 0 81 81", fill: "none", children: (0, Ie.jsx)("path", { d: "M40.5 20.5V40.5H55.5M70.5 40.5C70.5 44.4397 69.724 48.3407 68.2164 51.9805C66.7087 55.6203 64.499 58.9274 61.7132 61.7132C58.9274 64.499 55.6203 66.7087 51.9805 68.2164C48.3407 69.724 44.4397 70.5 40.5 70.5C36.5603 70.5 32.6593 69.724 29.0195 68.2164C25.3797 66.7087 22.0726 64.499 19.2868 61.7132C16.501 58.9274 14.2913 55.6203 12.7836 51.9805C11.276 48.3407 10.5 44.4397 10.5 40.5C10.5 32.5435 13.6607 24.9129 19.2868 19.2868C24.9129 13.6607 32.5435 10.5 40.5 10.5C48.4565 10.5 56.0871 13.6607 61.7132 19.2868C67.3393 24.9129 70.5 32.5435 70.5 40.5Z", stroke: "#F8F8F8", "stroke-width": "5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }), (0, Ie.jsx)("div", { className: "text-white font-inter text-[26px] font-[700] m-event-heading", children: "Time constraints" })] }), (0, Ie.jsx)("div", { className: "text-[#A3A3A3] font-inter text-[18px] m-event-detail", children: "The challenge adds an element of urgency, pushing participants to think on their feet and deliver within a limited time frame." })] }), (0, Ie.jsxs)("div", { className: "h-[350px] w-[330px] flex flex-col items-start justify-center gap-5 p-[0_50px] rounded-[40px] webdevhighlighcards m-webdevhighlighcards", children: [(0, Ie.jsxs)("div", { className: "flex flex-col items-start gap-2", children: [(0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "65", height: "65", className: "m-event-icons", viewBox: "0 0 81 81", fill: "none", children: [(0, Ie.jsx)("path", { d: "M32.3933 10.5H18C16.0109 10.5 14.1032 11.2902 12.6967 12.6967C11.2902 14.1032 10.5 16.0109 10.5 18V32.3933C10.5 34.3833 11.29 36.2933 12.6967 37.6967L44.6333 69.6333C46.9633 71.9633 50.5667 72.54 53.3233 70.7333C60.262 66.1888 66.1888 60.262 70.7333 53.3233C72.54 50.5667 71.9633 46.9633 69.6333 44.6333L37.7 12.7C37.0034 12.0026 36.1762 11.4493 35.2657 11.0718C34.3551 10.6943 33.379 10.5 32.3933 10.5Z", stroke: "#FAFAFA", "stroke-width": "5", "stroke-linecap": "round", "stroke-linejoin": "round" }), (0, Ie.jsx)("path", { d: "M20.5 20.5H20.526V20.526H20.5V20.5Z", stroke: "#FAFAFA", "stroke-width": "5", "stroke-linecap": "round", "stroke-linejoin": "round" })] }), (0, Ie.jsx)("div", { className: "text-white font-inter text-[26px] font-[700] m-event-heading", children: "Diverse Categories" })] }), (0, Ie.jsx)("div", { className: "text-[#A3A3A3] font-inter text-[18px] m-event-detail", children: "Whether you're into coding or design, there's a category tailored to your skills and interests." })] })] })] }), (0, Ie.jsx)(Ze, {})] }) }) })),
            jl = n.p + "static/media/codexbanner.8dc321741468b321ffc3.webp",
            kl = n.p + "static/media/m-codexbanner.3f48d826d02d4b4294e0.webp",
            Nl = () => (0, Ie.jsx)("div", { className: "flex justify-center h-screen items-center", children: (0, Ie.jsxs)("div", { className: "code-loader", children: [(0, Ie.jsx)("span", { children: "{" }), (0, Ie.jsx)("span", { children: "}" })] }) }),
            Sl = Wo((() => { const [e, n] = (0, t.useState)(!1), r = Q();
                (0, t.useEffect)((() => { document.title = "Ziegers-Codex" }), []); const [i, a] = (0, t.useState)(!0), [s, o] = (0, t.useState)(!0); return (0, t.useEffect)((() => { const e = setTimeout((() => { o(!1) }), 2e3); return () => clearTimeout(e) }), []), (0, Ie.jsx)("div", { className: "wrapper", children: s ? (0, Ie.jsx)(Nl, {}) : (0, Ie.jsxs)(Ie.Fragment, { children: [(0, Ie.jsxs)("nav", { className: "flex text-[#fff] flex-row  items-center align-middle mx-auto pt-2 pl-10 justify-between bg-[#000000CC] rounded-es-[100px] rounded-br-[100px] bg-opacity-80 absolute m-gaming-nav", style: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 15 }, children: [(0, Ie.jsx)(_e.default, { onOutsideClick: () => { n(!1) }, children: (0, Ie.jsxs)("div", { className: "flex flex-row justify-evenly items-center align-middle h-menus lg:mb-[1rem]  ml-[3rem]", style: (e => { if (document.documentElement.clientWidth <= 800) return { right: !e && "-100%" } })(e), children: [(0, Ie.jsx)("div", { onClick: () => { r("/contact") }, className: "flex justify-center cursor-pointer items-center align-middle font-varino text-focus-in navbar-text", children: "Contact" }), (0, Ie.jsx)("svg", { width: "34", height: "34", viewBox: "0 0 34 34", fill: "none", className: "text-focus-in m-hide", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "Huge-icon/arrows/outline/arrow-down", children: (0, Ie.jsx)("path", { id: "Vector 190", d: "M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425", stroke: "#F3F3F3", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) }), (0, Ie.jsx)("div", { onClick: () => { r("/about") }, className: "cursor-pointer font-varino ml-3 text-focus-in navbar-text", children: "About" }), (0, Ie.jsx)("svg", { width: "34", height: "34", className: "text-focus-in m-hide", viewBox: "0 0 34 34", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "Huge-icon/arrows/outline/arrow-down", children: (0, Ie.jsx)("path", { id: "Vector 190", d: "M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425", stroke: "#F3F3F3", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) })] }) }), (0, Ie.jsx)("a", { href: "/", className: "font-varino font-bold mx-auto text-xl translate-x-[-2.7rem] lg:mb-[1rem] text-focus-in logo-text", style: { textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }, children: "ZIEGERS" }), (0, Ie.jsxs)("a", { href: "https://www.instagram.com/ziegerscs", target: "_blank", className: "m-hide text-focus-in w-[150px] h-[47px] pl-[3px] pr-[13px] mr-[5rem] bg-[#6C0FE4] from-zinc-950  rounded-full shadow border border-[#6C0FE4] justify-start items-center inline-flex instagram-button mb-[0.5rem]", children: [(0, Ie.jsx)("div", { className: "w-4 h-4 relative flex-col justify-start items-start flex " }), (0, Ie.jsxs)("div", { className: "text-center text-white  text-xs font-normal font-['Varino'] flex flex-row justify-center items-center align-middle", children: [(0, Ie.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "instagram", children: (0, Ie.jsx)("path", { id: "Vector", d: "M11.6188 4.13967C11.4605 4.13967 11.3059 4.18659 11.1743 4.2745C11.0427 4.3624 10.9402 4.48735 10.8797 4.63353C10.8191 4.77971 10.8033 4.94056 10.8341 5.09575C10.865 5.25093 10.9412 5.39348 11.0531 5.50536C11.165 5.61724 11.3075 5.69343 11.4627 5.7243C11.6179 5.75517 11.7787 5.73933 11.9249 5.67878C12.0711 5.61823 12.196 5.51569 12.2839 5.38413C12.3718 5.25257 12.4188 5.0979 12.4188 4.93967C12.4188 4.7275 12.3345 4.52402 12.1844 4.37399C12.0344 4.22396 11.8309 4.13967 11.6188 4.13967ZM14.6854 5.75301C14.6725 5.19987 14.5689 4.65261 14.3788 4.13301C14.2092 3.68843 13.9454 3.28586 13.6054 2.95301C13.2753 2.61129 12.8718 2.34913 12.4254 2.18634C11.9072 1.99045 11.3593 1.88448 10.8054 1.87301C10.0988 1.83301 9.87209 1.83301 8.05876 1.83301C6.24542 1.83301 6.01876 1.83301 5.31209 1.87301C4.75819 1.88448 4.21032 1.99045 3.69209 2.18634C3.24654 2.35077 2.84338 2.61271 2.51209 2.95301C2.17037 3.28313 1.90821 3.68663 1.74542 4.13301C1.54953 4.65124 1.44356 5.19911 1.43209 5.75301C1.39209 6.45967 1.39209 6.68634 1.39209 8.49967C1.39209 10.313 1.39209 10.5397 1.43209 11.2463C1.44356 11.8002 1.54953 12.3481 1.74542 12.8663C1.90821 13.3127 2.17037 13.7162 2.51209 14.0463C2.84338 14.3866 3.24654 14.6486 3.69209 14.813C4.21032 15.0089 4.75819 15.1149 5.31209 15.1263C6.01876 15.1663 6.24542 15.1663 8.05876 15.1663C9.87209 15.1663 10.0988 15.1663 10.8054 15.1263C11.3593 15.1149 11.9072 15.0089 12.4254 14.813C12.8718 14.6502 13.2753 14.3881 13.6054 14.0463C13.9469 13.7147 14.211 13.3118 14.3788 12.8663C14.5689 12.3467 14.6725 11.7995 14.6854 11.2463C14.6854 10.5397 14.7254 10.313 14.7254 8.49967C14.7254 6.68634 14.7254 6.45967 14.6854 5.75301ZM13.4854 11.1663C13.4806 11.5895 13.4039 12.0088 13.2588 12.4063C13.1523 12.6965 12.9813 12.9586 12.7588 13.173C12.5425 13.3933 12.2809 13.564 11.9921 13.673C11.5946 13.8182 11.1753 13.8948 10.7521 13.8997C10.0854 13.933 9.83876 13.9397 8.08542 13.9397C6.33209 13.9397 6.08542 13.9397 5.41876 13.8997C4.97935 13.9079 4.54182 13.8402 4.12542 13.6997C3.84928 13.5851 3.59966 13.4149 3.39209 13.1997C3.17082 12.9855 3.00199 12.7231 2.89876 12.433C2.73599 12.0298 2.64572 11.601 2.63209 11.1663C2.63209 10.4997 2.59209 10.253 2.59209 8.49967C2.59209 6.74634 2.59209 6.49967 2.63209 5.83301C2.63508 5.40038 2.71406 4.97164 2.86542 4.56634C2.98279 4.28495 3.16293 4.03411 3.39209 3.83301C3.59463 3.60379 3.84495 3.42174 4.12542 3.29967C4.53179 3.15304 4.96009 3.07639 5.39209 3.07301C6.05876 3.07301 6.30542 3.03301 8.05876 3.03301C9.81209 3.03301 10.0588 3.03301 10.7254 3.07301C11.1486 3.07786 11.5679 3.15451 11.9654 3.29967C12.2684 3.41211 12.5403 3.59491 12.7588 3.83301C12.9772 4.03779 13.1479 4.28816 13.2588 4.56634C13.4069 4.9723 13.4836 5.40086 13.4854 5.83301C13.5188 6.49967 13.5254 6.74634 13.5254 8.49967C13.5254 10.253 13.5188 10.4997 13.4854 11.1663ZM8.05876 5.07967C7.38263 5.08099 6.72206 5.28269 6.16053 5.65929C5.59899 6.03588 5.16168 6.57047 4.90385 7.19551C4.64602 7.82055 4.57924 8.50799 4.71195 9.17096C4.84467 9.83394 5.17091 10.4427 5.64947 10.9203C6.12803 11.398 6.73743 11.723 7.40066 11.8544C8.06389 11.9859 8.7512 11.9177 9.37574 11.6587C10.0003 11.3997 10.534 10.9613 10.9095 10.399C11.285 9.83676 11.4854 9.1758 11.4854 8.49967C11.4863 8.04974 11.3982 7.60408 11.2262 7.18831C11.0543 6.77254 10.8018 6.39488 10.4833 6.07704C10.1649 5.7592 9.78672 5.50746 9.37062 5.33629C8.95452 5.16513 8.50868 5.07792 8.05876 5.07967ZM8.05876 10.7197C7.61968 10.7197 7.19047 10.5895 6.82539 10.3455C6.46031 10.1016 6.17577 9.75488 6.00774 9.34923C5.83972 8.94358 5.79575 8.49721 5.88141 8.06657C5.96707 7.63594 6.17851 7.24037 6.48898 6.9299C6.79945 6.61942 7.19502 6.40799 7.62566 6.32233C8.05629 6.23667 8.50266 6.28063 8.90831 6.44866C9.31397 6.61669 9.66068 6.90123 9.90462 7.26631C10.1486 7.63139 10.2788 8.0606 10.2788 8.49967C10.2788 8.79121 10.2213 9.07989 10.1098 9.34923C9.9982 9.61857 9.83468 9.86331 9.62853 10.0695C9.42239 10.2756 9.17766 10.4391 8.90831 10.5507C8.63897 10.6623 8.35029 10.7197 8.05876 10.7197Z", fill: "#f3f3f3" }) }) }), (0, Ie.jsx)("h1", { className: "ml-2 m-insta", children: "Instagram" })] })] }), (0, Ie.jsx)("div", { className: "flex menu-icon cursor-pointer flex-row  justify-end mx-auto m-game-menu", onClick: () => n((e => !e)), children: (0, Ie.jsx)("img", { src: He, alt: "menu", width: "50px", className: "flex border border-solid  m-burger border-[#F3F3F3] rounded-lg m-burger2 text-focus-in" }) })] }), (0, Ie.jsx)("div", { className: "font-varino", children: (0, Ie.jsxs)("div", { className: "", children: [(0, Ie.jsxs)("div", { className: "lg:flex justify-end relative z-10 hidden", children: [(0, Ie.jsxs)("svg", { width: "300", height: "341", viewBox: "0 0 382 341", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "absolute top-[2rem] right-[2px]", children: [(0, Ie.jsx)("path", { d: "M0 135.107C0 108.981 0 95.9175 2.42664 85.1039C10.8952 47.3661 40.3661 17.8952 78.1039 9.42664C88.9175 7 101.981 7 128.107 7H143.832C151.85 7 159.774 8.72531 167.066 12.0588L168.579 12.7504C182.779 19.2416 199.134 19.0562 213.183 12.2447C220.302 8.79315 228.11 7 236.022 7H253.507C279.993 7 293.236 7 304.192 9.4935C341.69 18.0279 370.972 47.3098 379.507 84.8081C382 95.7639 382 109.007 382 135.493V174C382 236.624 382 267.935 368.471 291.227C359.744 306.252 347.252 318.744 332.227 327.471C308.935 341 277.624 341 215 341H167C104.376 341 73.0647 341 49.7734 327.471C34.7481 318.744 22.2561 306.252 13.5287 291.227C0 267.935 0 236.624 0 174V135.107Z", fill: "#1E1F29" }), (0, Ie.jsx)("path", { d: "M187.598 3.05973C188.96 1.62406 189.64 0.906222 190.5 0.906222C191.36 0.906222 192.04 1.62406 193.402 3.05973L194.054 3.74728C196.794 6.63538 198.163 8.07942 197.643 9.28971C197.123 10.5 195.133 10.5 191.152 10.5H189.848C185.867 10.5 183.877 10.5 183.357 9.28971C182.837 8.07942 184.206 6.63538 186.946 3.74729L187.598 3.05973Z", fill: "#0B0C10" })] }), (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "90", height: "111", viewBox: "0 0 105 111", fill: "none", className: "absolute translate-y-[7rem] mr-[2.5rem]", children: [(0, Ie.jsx)("path", { d: "M47.0275 21.0951L37.38 55.5022C37.0234 56.7732 36.4299 57.9555 35.6346 58.9789C34.8393 60.0024 33.8583 60.8462 32.7498 61.4604C31.6413 62.0746 30.4278 62.4467 29.1812 62.5546C27.9347 62.6626 26.6803 62.5042 25.4925 62.0888L11.2375 57.1057C9.94781 56.655 8.76623 55.9118 7.77497 54.9278C6.78371 53.9438 6.00657 52.7426 5.49761 51.4079C4.98865 50.0731 4.76011 48.6368 4.82787 47.1988C4.89563 45.7609 5.25808 44.3559 5.88999 43.0816L24.6275 5.29765C25.3848 3.77083 26.5049 2.48003 27.8771 1.55292C29.2492 0.6258 30.8258 0.094473 32.451 0.0114781C34.0762 -0.0715169 35.6937 0.296695 37.1435 1.0797C38.5933 1.86271 39.8253 3.03339 40.7175 4.47597L45.8875 12.8359C46.6327 14.0418 47.1207 15.4055 47.3176 16.832C47.5145 18.2585 47.4155 19.7133 47.0275 21.0951Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M80.1525 5.30034L98.8825 43.079C99.5144 44.3535 99.8769 45.7587 99.9446 47.1968C100.012 48.6349 99.7839 50.0714 99.2749 51.4064C98.766 52.7413 97.9889 53.9427 96.9976 54.927C96.0063 55.9113 94.8247 56.6548 93.535 57.1058L79.2875 62.0889C78.0992 62.5046 76.8443 62.6632 75.5971 62.5554C74.3499 62.4475 73.1358 62.0753 72.0268 61.4608C70.9178 60.8463 69.9364 60.0021 69.1408 58.9781C68.3452 57.9541 67.7515 56.7712 67.395 55.4995L57.75 21.0951C57.3625 19.7137 57.2638 18.2594 57.4607 16.8335C57.6575 15.4075 58.1453 14.0442 58.89 12.8386L64.055 4.48132C64.947 3.03742 66.1792 1.8655 67.6297 1.08151C69.0801 0.297532 70.6984 -0.0713408 72.3246 0.0113967C73.9507 0.0941343 75.5283 0.625614 76.9013 1.55325C78.2742 2.48088 79.3949 3.77251 80.1525 5.30034Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M37.9725 64.3481L44.885 37.2248C45.0383 36.6237 45.3741 36.0929 45.8404 35.7144C46.3068 35.3359 46.8777 35.1308 47.465 35.1309H56.96C57.5384 35.1303 58.1013 35.3287 58.5642 35.6962C59.0272 36.0638 59.3652 36.5806 59.5275 37.1692L66.995 64.2925C67.1115 64.715 67.1336 65.1606 67.0594 65.5937C66.9853 66.0269 66.8169 66.4358 66.5677 66.788C66.3185 67.1402 65.9954 67.4259 65.6239 67.6226C65.2524 67.8193 64.8428 67.9215 64.4275 67.9211H40.5525C40.1421 67.9211 39.7371 67.8209 39.3691 67.6282C39.0011 67.4356 38.6799 67.1556 38.4304 66.8101C38.1809 66.4645 38.0098 66.0627 37.9304 65.6358C37.851 65.2088 37.8654 64.7682 37.9725 64.3481Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M0 91.9569V68.5921C0.283333 65.7472 1.39 63.4774 3.32 61.7828C5.38667 59.9681 7.73667 59.2126 10.37 59.5166C11.315 59.6261 12.5867 60.0149 14.185 60.6828C19.5083 62.9093 25.27 65.2577 31.47 67.728C33.3117 68.4631 34.6167 69.1426 35.385 69.7663C37.8825 71.7993 39.345 75.1178 39.0675 78.4788C39.0142 79.1202 38.7833 80.2016 38.375 81.7231C36.4633 88.8496 34.6092 95.7596 32.8125 102.453C32.4842 103.676 31.8225 104.881 30.8275 106.069C28.62 108.703 25.1325 109.843 21.9025 109.101C20.9725 108.887 19.7825 108.362 18.3325 107.526C14.2225 105.155 10.205 102.893 6.28 100.741C4.73833 99.8963 3.595 99.094 2.85 98.3342C1.22 96.6714 0.27 94.5457 0 91.9569Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M105 68.6277V91.913C104.735 94.5159 103.797 96.6425 102.185 98.2929C101.425 99.0704 100.159 99.9469 98.3875 100.922C94.3625 103.14 90.3692 105.389 86.4075 107.668C85.0609 108.442 83.9434 108.923 83.055 109.11C79.115 109.942 75.1925 108.166 73.1225 104.585C72.6225 103.72 72.1542 102.451 71.7175 100.779C70.1092 94.6192 68.4775 88.5388 66.8225 82.5379C66.1842 80.2266 65.875 78.5939 65.895 77.6397C65.9775 73.4412 68.335 69.8629 72.075 68.3494C79.1367 65.4939 85.6783 62.823 91.7 60.3367C92.855 59.8596 93.8775 59.5795 94.7675 59.4965C97.4309 59.2438 99.7775 60.0478 101.808 61.9085C103.671 63.6155 104.735 65.8552 105 68.6277Z", fill: "#6C0FE4" }), (0, Ie.jsx)("path", { d: "M66.6125 110.998H38.1875C36.4059 109.001 35.5025 106.729 35.4775 104.181C35.4659 103.052 35.7384 101.435 36.295 99.3304C37.7784 93.7307 39.2584 87.9401 40.735 81.9586C41.29 79.7127 41.7175 78.231 42.0175 77.5136C43.4525 74.0784 46.69 71.7857 50.245 71.6956C51.7767 71.6567 53.185 71.6638 54.47 71.7168C57.475 71.8413 60.185 73.7471 61.7675 76.3818C62.1942 77.0921 62.66 78.3635 63.165 80.196C65.0784 87.1528 66.9959 94.1079 68.9175 101.061C69.9492 104.79 69.1809 108.102 66.6125 110.998Z", fill: "#282A36" })] }), (0, Ie.jsx)("div", { className: "flex flex-row", children: (0, Ie.jsxs)("div", { className: " absolute text-white text-xl font-semibold font-['Outfit'] translate-y-[7.5rem] -translate-x-[16.5rem]", children: ["Registration", (0, Ie.jsx)("br", {}), "Amount", (0, Ie.jsx)("div", { className: "text-slate-400 text-[13px] font-medium mt-[1rem]", children: "Check in 15:00" }), (0, Ie.jsx)("div", { className: "text-slate-400 text-[13px] font-medium", children: "No refund" }), (0, Ie.jsxs)("div", { className: "relative justify-center", children: [(0, Ie.jsx)("div", { className: "w-[225px] h-[60px] left-0 top-3 absolute bg-zinc-950 rounded-[100px]" }), (0, Ie.jsx)("div", { className: "w-6 h-5 left-[180px] top-[32px] absolute justify-center items-center inline-flex", children: (0, Ie.jsx)("div", { className: "w-6 h-5 relative", children: (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "22", viewBox: "0 0 24 24", fill: "none", children: [(0, Ie.jsx)("path", { d: "M14.43 5.92969L20.5 11.9997L14.43 18.0697", stroke: "#246DB6", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" }), (0, Ie.jsx)("path", { d: "M3.5 12H20.33", stroke: "#246DB6", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" })] }) }) }), (0, Ie.jsx)("div", { className: "left-[30px] top-[30px] absolute text-white text-[25px] font-semibold", children: "\u20b949" })] })] }) })] }), (0, Ie.jsxs)("div", { className: "relative flex justify-center", children: [(0, Ie.jsx)("div", { className: "flex justify-center codex-btn cursor-pointer absolute z-10 mx-auto bottom-32", children: (0, Ie.jsx)("div", { className: "flex justify-center", children: (0, Ie.jsxs)("div", { onClick: Ko, className: "w-[235px] h-[65px] text-center flex flex-row justify-center items-center left-0 top-0 bg-[#6C0FE4] rounded-[100px] m-codex-btn", children: [(0, Ie.jsx)("div", { className: "left-[2rem] absolute text-white text-[22px] font-semibold font-['Outfit'] m-participate-text", children: "Participate" }), (0, Ie.jsx)("div", { children: (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "21", height: "24", viewBox: "0 0 24 24", fill: "none", className: "flex ml-[9.5rem] m-arrow", children: [(0, Ie.jsx)("path", { d: "M14.4301 5.92969L20.5001 11.9997L14.4301 18.0697", stroke: "#fff", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" }), (0, Ie.jsx)("path", { d: "M3.5 12H20.33", stroke: "#fff", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" })] }) })] }) }) }), (0, Ie.jsx)("img", { src: jl, alt: "webdevbanner", className: "w-screen m-hide" }), (0, Ie.jsx)("img", { src: kl, alt: "webdevbanner", className: "w-screen lg:hidden" }), (0, Ie.jsx)("div", { className: " absolute w-[100vw] h-[300px] valorantbanneroverlay -bottom-32 flex justify-center items-center", children: (0, Ie.jsxs)("div", { className: " inline-flex lg:p-[25px] items-center lg:gap-5 lg:rounded-[22px] webdevvenuecard translate-y-[5rem] justify-center align-middle m-venue-box", children: [(0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-calender", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.61073 0.672852C9.39667 0.672852 10.0338 1.30998 10.0338 2.09593V4.94208H27.1107V2.09593C27.1107 1.30998 27.7479 0.672852 28.5338 0.672852C29.3197 0.672852 29.9569 1.30998 29.9569 2.09593V4.94208H31.38C34.5237 4.94208 37.0723 7.49062 37.0723 10.6344V31.9805C37.0723 35.1243 34.5237 37.6729 31.38 37.6729H5.76457C2.6208 37.6729 0.0722656 35.1243 0.0722656 31.9805V10.6344C0.0722656 7.49062 2.6208 4.94208 5.76457 4.94208H7.18765V2.09593C7.18765 1.30998 7.82478 0.672852 8.61073 0.672852ZM34.2261 17.7498C34.2261 16.1779 32.9518 14.9036 31.38 14.9036H5.76457C4.19269 14.9036 2.91842 16.1779 2.91842 17.7498V31.9805C2.91842 33.5524 4.19269 34.8267 5.76457 34.8267H31.38C32.9518 34.8267 34.2261 33.5524 34.2261 31.9805V17.7498Z", fill: "#F3F3F3" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "19th January" })] }), (0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-time", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { d: "M19.0605 9.92285V19.1729H25.998M32.9355 19.1729C32.9355 26.8358 26.7235 33.0478 19.0605 33.0478C11.3976 33.0478 5.18555 26.8358 5.18555 19.1729C5.18555 11.5099 11.3976 5.29785 19.0605 5.29785C26.7235 5.29785 32.9355 11.5099 32.9355 19.1729Z", stroke: "#F3F3F3", "stroke-width": "2.47513", "stroke-linecap": "round", "stroke-linejoin": "round" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "11:00 AM to 1:00 PM" })] }), (0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-location", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M17.8383 35.1307C17.8849 35.1577 17.9215 35.1785 17.9474 35.1931L17.9904 35.2171C18.334 35.4057 18.7602 35.4043 19.1041 35.2177L19.1483 35.1931C19.1742 35.1785 19.2108 35.1577 19.2574 35.1307C19.3505 35.0768 19.4836 34.9981 19.6509 34.895C19.9854 34.6891 20.4576 34.3854 21.0216 33.9869C22.1478 33.1914 23.6504 32.011 25.1563 30.4692C28.1535 27.4005 31.2666 22.7898 31.2666 16.8603C31.2666 9.83598 25.5722 4.1416 18.5479 4.1416C11.5235 4.1416 5.8291 9.83598 5.8291 16.8603C5.8291 22.7898 8.94222 27.4005 11.9394 30.4692C13.4453 32.011 14.9479 33.1914 16.0741 33.9869C16.6381 34.3854 17.1103 34.6891 17.4448 34.895C17.6121 34.9981 17.7452 35.0768 17.8383 35.1307ZM18.5479 21.4853C21.1022 21.4853 23.1728 19.4147 23.1728 16.8604C23.1728 14.306 21.1022 12.2354 18.5479 12.2354C15.9935 12.2354 13.9229 14.306 13.9229 16.8604C13.9229 19.4147 15.9935 21.4853 18.5479 21.4853Z", fill: "#F3F3F3" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "CS Lab,4th Floor" })] })] }) })] })] }) }), (0, Ie.jsxs)("div", { className: "max-w-[1300px] lg:mt-40 flex flex-col justify-center items-center mx-auto gap-16 mb-20", children: [(0, Ie.jsx)("div", { className: "text-center text-[#D6D6D6E5] font-readex text-[32px] font-medium w-[1000px] m-codex-desc", children: "Get ready for Codex, where the realm of code transforms into a battleground of wit and skill!" }), (0, Ie.jsxs)("section", { className: "flex flex-col justify-center items-center gap-10 max-w-[1300px] lg:mt-[4rem]", children: [(0, Ie.jsxs)("div", { className: "flex flex-row justify-center gap-10 items-center flex-wrap", children: [(0, Ie.jsx)("div", { className: "codexrounds text-center font-varino text-[70px] font-[700] m-codex-round", children: "ROUND 1" }), (0, Ie.jsx)("div", { className: "w-[600px] text-[#EEE] text-[20px] font-readex m-codex-rules", children: "Conquer MCQ questions that test not just your theoretical knowledge but the very essence of coding brilliance." })] }), (0, Ie.jsxs)("div", { className: "flex flex-row justify-center gap-10 items-center flex-wrap", children: [(0, Ie.jsx)("div", { className: "codexrounds text-center font-varino text-[70px] font-[700] m-codex-round", children: "ROUND 2" }), (0, Ie.jsx)("div", { className: "w-[600px] text-[#EEE] text-[20px] font-readex m-codex-rules", children: "Adds a touch of mystery \u2013 engage in a guessing game and unravel the enigmatic outputs." })] }), (0, Ie.jsxs)("div", { className: "flex flex-row justify-center gap-10 items-center flex-wrap", children: [(0, Ie.jsx)("div", { className: "codexrounds text-center font-varino text-[70px] font-[700] m-codex-round", children: "ROUND 3" }), (0, Ie.jsx)("div", { className: "w-[600px] text-[#EEE] text-[20px] font-readex m-codex-rules", children: "Turns you into a coding detective, as you debug your way through challenging questions, proving that every bug has its solution." })] }), (0, Ie.jsxs)("div", { className: "flex flex-row justify-center gap-10 items-center flex-wrap", children: [(0, Ie.jsx)("div", { className: "codexrounds text-center font-varino text-[70px] font-[700] m-codex-round", children: "ROUND 4" }), (0, Ie.jsx)("div", { className: "w-[600px] text-[#EEE] text-[20px] font-readex m-codex-rules", children: "Transforms syntax into a puzzle; rearrange the lines of code to unlock the true power of programming." })] }), (0, Ie.jsxs)("div", { className: "flex flex-row justify-center gap-10 items-center flex-wrap", children: [(0, Ie.jsx)("div", { className: "codexrounds text-center font-varino text-[70px] font-[700] m-codex-round", children: "ROUND 5" }), (0, Ie.jsx)("div", { className: "w-[600px] text-[#EEE] text-[20px] font-readex m-codex-rules", children: "Unleash your coding prowess to solve challenges and stake your claim as the ultimate coding champion!" })] })] }), (0, Ie.jsx)("div", { className: "font-varino text-[90px] tracking-[4.9px] text-center valorantrules font-semibold m-rule-text", children: "RULES" }), (0, Ie.jsx)("div", { className: "valorantmapselection w-[950px] m-mapselection", children: (0, Ie.jsx)("div", { className: "p-[10px] flex flex-col gap-3 text-[#D4D4D4] tracking-[1.15px] text-[20px] font-inter text-center m-map-rules", children: (0, Ie.jsxs)("ul", { className: "flex flex-col gap-3 items-start text-start max-w-[650px] mx-auto p-5", style: { listStyleType: "disc" }, children: [(0, Ie.jsxs)("li", { children: [" ", "Participants will be provided with PC and necessary equipments."] }), (0, Ie.jsxs)("li", { children: [" ", "Participants must not share code or collaborate with others during the event."] }), (0, Ie.jsxs)("li", { children: [" ", "Plagiarism will not be tolerated and will result in disqualification."] }), (0, Ie.jsxs)("li", { children: [" ", "The event organizers reserve the right to disqualify any participant who violates the rules."] }), (0, Ie.jsxs)("li", { children: [" ", "The event organizers reserve the right to make final decisions on any disputes or ambiguities that may arise."] }), (0, Ie.jsxs)("li", { children: [" ", "The event will have a specific time limit and the submission should be done in the given time frame."] }), (0, Ie.jsxs)("li", { children: [" ", "The event organizers will provide the problem statement and the input-output format in which the solution should be written."] }), (0, Ie.jsxs)("li", { children: [" ", "Participants are expected to follow the format provided in the problem statement while submitting their solutions."] }), (0, Ie.jsxs)("li", { children: [" ", "The solutions will be evaluated based on correct output and the time of submission."] })] }) }) })] }), (0, Ie.jsx)(Ze, {})] }) }) })),
            El = n.p + "static/media/gamingPageBanner.14cd1dc8604510c01ed0.webp",
            Pl = n.p + "static/media/m-gamingbanner.063fd22a73b9501dd302.webp",
            Ml = n.p + "static/media/bgmi.97057025919b2b5fc59d.webp",
            Fl = n.p + "static/media/codm.0a1725bf1329b3e9e64b.webp",
            Ll = n.p + "static/media/valorant.e3e8a28962e0d19d366e.webp",
            Tl = n.p + "static/media/fifa2k23.52702df14a8f16af2faf.webp",
            Al = () => (0, Ie.jsx)("div", { className: "flex justify-center h-screen items-center", children: (0, Ie.jsxs)("div", { id: "loader", children: [(0, Ie.jsx)("div", { class: "ls-particles ls-part-1" }), (0, Ie.jsx)("div", { class: "ls-particles ls-part-2" }), (0, Ie.jsx)("div", { class: "ls-particles ls-part-3" }), (0, Ie.jsx)("div", { class: "ls-particles ls-part-4" }), (0, Ie.jsx)("div", { class: "ls-particles ls-part-5" }), (0, Ie.jsx)("div", { class: "lightsaber ls-left ls-green" }), (0, Ie.jsx)("div", { class: "lightsaber ls-right ls-red" })] }) }),
            Vl = Wo((() => { const e = Q(),
                    [n, r] = (0, t.useState)(!0),
                    [i, a] = (0, t.useState)(!0); return (0, t.useEffect)((() => { document.title = "Veyg 2k24"; const e = setTimeout((() => { a(!1) }), 3e3); return () => clearTimeout(e) }), []), (0, Ie.jsx)("div", { className: "wrapper", children: i ? (0, Ie.jsx)(Al, {}) : (0, Ie.jsxs)(Ie.Fragment, { children: [(0, Ie.jsx)($e, {}), (0, Ie.jsxs)("div", { className: "wrapper overflow-x-hidden font-varino mb-5", children: [(0, Ie.jsxs)("div", { className: "relative", children: [(0, Ie.jsx)("img", { src: El, alt: "gamingBanner", className: "m-hide" }), (0, Ie.jsx)("img", { src: Pl, alt: "gamingBanner", className: "lg:hidden" }), (0, Ie.jsx)("div", { className: "flex justify-center", children: (0, Ie.jsx)("div", { className: "gaming font-varino uppercase text-[140px] absolute -bottom-12 z-10 m-gaming", children: "gaming" }) }), (0, Ie.jsx)("div", { className: " absolute w-[100vw] h-[100px] gamingbanneroverlay m-gamingbanneroverlay -bottom-[3rem] flex justify-center items-center" })] }), (0, Ie.jsxs)("div", { className: "text-center text-neutral-300 text-opacity-90 text-[30px] font-medium font-readex mt-[7rem] z-10 m-gaming-desc", children: ["Play a variety of games of different genre, selecting from a", (0, Ie.jsx)("br", { className: "lg:flex hidden" }), "large library of games."] }), (0, Ie.jsxs)("div", { className: "flex flex-col text-white mb-10 flex-wrap m-gamecard gap-16 mt-[7rem]", children: [(0, Ie.jsxs)("div", { className: "flex flex-row justify-center gap-12 game-card-1 ", children: [(0, Ie.jsx)("div", { className: "rounded-[66px] bgmigamingcard bgmi m-bgmi", onClick: () => { e("/events/gaming/bgmi") }, children: (0, Ie.jsxs)("div", { className: "w-[550px] h-[400px] text-center  flex justify-center cursor-pointer relative grayscale hover:grayscale-0 transition-all duration-500 ease-in-out m-bgmi", children: [(0, Ie.jsx)("div", { className: "overlay m-overlay" }), (0, Ie.jsx)("img", { src: Ml, alt: "bgmi", className: "p-4 h-[400px] w-[550px] rounded-[70px] absolute m-bgmi-img " }), (0, Ie.jsx)("div", { className: "flex text-center my-auto mx-auto text-[80px] z-10 bgmitext m-bgmitext", children: "BGMI" })] }) }), (0, Ie.jsx)("div", { className: "rounded-[66px] codmgamingcard codm m-codm ", onClick: () => { e("/events/gaming/callofduty") }, children: (0, Ie.jsxs)("div", { className: "w-[550px] h-[400px] text-center flex justify-center cursor-pointer relative grayscale hover:grayscale-0 transition-all duration-500 ease-in-out m-codm ", children: [(0, Ie.jsx)("div", { className: "overlay m-overlay" }), (0, Ie.jsx)("img", { src: Fl, alt: "codm", className: "p-4 h-[400px] w-[550px] rounded-[70px] absolute m-codm-img " }), (0, Ie.jsx)("div", { className: "flex text-center my-auto mx-auto text-[80px] z-10 codmtext m-codmtext", children: "CODM" })] }) })] }), (0, Ie.jsx)("div", { className: "", children: (0, Ie.jsx)("div", { className: "flex justify-center", children: (0, Ie.jsx)("div", { onClick: () => { e("/events/gaming/valorant") }, className: "rounded-[66px] valorantgamingcard valorant m-valorant", children: (0, Ie.jsxs)("div", { className: " w-[1150px] h-[400px] text-center flex justify-center cursor-pointer relative m-valorant", children: [(0, Ie.jsx)("img", { src: Ll, alt: "valorant", className: "p-4 h-[400px] w-[1250px] rounded-[80px] absolute valorantimg grayscale transition-all duration-500 ease-in-out m-valorant-img lg:grayscale-0" }), (0, Ie.jsx)("div", { className: "flex text-center my-auto mx-auto text-[100px] z-10 valoranttext m-valoranttext", children: "VALORANT" })] }) }) }) }), (0, Ie.jsxs)("div", { className: "flex flex-row justify-center gap-12 game-card-1", children: [(0, Ie.jsx)("div", { onClick: () => { e("/events/gaming/fifa2k23") }, className: "rounded-[66px] fifagamingcard fifa m-fifa", children: (0, Ie.jsxs)("div", { className: "w-[550px] h-[400px] text-center  flex justify-center cursor-pointer  relative grayscale hover:grayscale-0 transition-all duration-[600ms] ease-in-out m-fifa", children: [(0, Ie.jsx)("div", { className: "overlay m-overlay" }), (0, Ie.jsx)("img", { src: Tl, alt: "fifa2k23", className: "p-4 h-[400px] w-[550px] rounded-[80px] absolute m-fifa-img " }), (0, Ie.jsxs)("div", { className: "flex text-center justify-center items-center text-[60px] z-10 fifatext max-w-[35px] m-fifatext", children: ["FIFA", (0, Ie.jsx)("br", {}), "2K23"] })] }) }), (0, Ie.jsx)("div", { onClick: () => { e("/events/gaming/granttruismo7") }, className: "rounded-[66px] assetocorsagamingcard assetocorsa m-assetocorsa", children: (0, Ie.jsxs)("div", { className: "w-[550px] h-[400px] text-center  flex justify-center cursor-pointer  relative grayscale hover:grayscale-0 transition-all duration-500 ease-in-out m-assetocorsa", children: [(0, Ie.jsx)("div", { className: "overlay m-overlay" }), (0, Ie.jsx)("img", { src: pl, alt: "gt7", className: "p-4 h-[400px] w-[550px] rounded-[80px] absolute m-assetocorsa-img " }), (0, Ie.jsx)("div", { className: "flex text-center justify-center items-center text-[60px] z-10 assetotext max-w-[35px] m-assetocorsatext", children: "Grant Truismo 7" })] }) })] })] })] }), (0, Ie.jsx)("div", { className: "flex mt-[2rem] justify-center items-center align-middle mx-auto", children: (0, Ie.jsx)(Ze, {}) })] }) }) })),
            Rl = n.p + "static/media/technutzbanner.0181626ecea4e9034a5e.webp",
            Bl = n.p + "static/media/m-technutzbanner.f2fbcca1359b5e8d9e6b.webp",
            Dl = () => (0, Ie.jsx)("div", { className: "flex justify-center h-screen items-center", children: (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "128px", width: "128px", viewBox: "0 0 128 128", class: "pl", children: [(0, Ie.jsx)("defs", { children: (0, Ie.jsxs)("linearGradient", { y2: "1", x2: "0", y1: "0", x1: "0", id: "pl-grad", children: [(0, Ie.jsx)("stop", { "stop-color": "hsl(193,90%,55%)", offset: "0%" }), (0, Ie.jsx)("stop", { "stop-color": "hsl(223,90%,55%)", offset: "100%" })] }) }), (0, Ie.jsx)("circle", { "stroke-linecap": "round", "stroke-width": "16", stroke: "hsla(0,10%,10%,0.1)", fill: "none", cy: "64", cx: "64", r: "56", class: "pl__ring" }), (0, Ie.jsx)("path", { "stroke-dashoffset": "10", "stroke-dasharray": "44 1111", "stroke-linejoin": "round", "stroke-linecap": "round", "stroke-width": "16", stroke: "url(#pl-grad)", fill: "none", d: "M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z", class: "pl__worm" })] }) }),
            zl = Wo((() => { const [e, n] = (0, t.useState)(!1), r = Q(), [i, a] = (0, t.useState)(!0), [s, o] = (0, t.useState)(!0); return (0, t.useEffect)((() => { document.title = "Ziegers-Technutz"; const e = setTimeout((() => { o(!1) }), 3e3); return () => clearTimeout(e) }), []), (0, Ie.jsx)("div", { className: "wrapper", children: s ? (0, Ie.jsx)(Dl, {}) : (0, Ie.jsxs)(Ie.Fragment, { children: [(0, Ie.jsxs)("nav", { className: "flex text-[#fff] flex-row  items-center align-middle mx-auto pt-2 pl-10 justify-between bg-[#000000CC] rounded-es-[100px] rounded-br-[100px] bg-opacity-80 absolute m-gaming-nav", style: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 15 }, children: [(0, Ie.jsx)(_e.default, { onOutsideClick: () => { n(!1) }, children: (0, Ie.jsxs)("div", { className: "flex flex-row justify-evenly items-center align-middle h-menus lg:mb-[1rem]  ml-[3rem]", style: (e => { if (document.documentElement.clientWidth <= 800) return { right: !e && "-100%" } })(e), children: [(0, Ie.jsx)("div", { onClick: () => { r("/contact") }, className: "flex justify-center cursor-pointer items-center align-middle font-varino text-focus-in navbar-text", children: "Contact" }), (0, Ie.jsx)("svg", { width: "34", height: "34", viewBox: "0 0 34 34", fill: "none", className: "text-focus-in m-hide", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "Huge-icon/arrows/outline/arrow-down", children: (0, Ie.jsx)("path", { id: "Vector 190", d: "M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425", stroke: "#F3F3F3", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) }), (0, Ie.jsx)("div", { onClick: () => { r("/about") }, className: " cursor-pointer font-varino ml-3 text-focus-in navbar-text", children: "About" }), (0, Ie.jsx)("svg", { width: "34", height: "34", className: "text-focus-in m-hide", viewBox: "0 0 34 34", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "Huge-icon/arrows/outline/arrow-down", children: (0, Ie.jsx)("path", { id: "Vector 190", d: "M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425", stroke: "#F3F3F3", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) }) })] }) }), (0, Ie.jsx)("a", { href: "/", className: "font-varino font-bold mx-auto text-xl translate-x-[-2.7rem] lg:mb-[1rem] text-focus-in logo-text", style: { textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }, children: "ZIEGERS" }), (0, Ie.jsxs)("a", { href: "https://www.instagram.com/ziegerscs", target: "_blank", className: "m-hide text-focus-in w-[150px] h-[47px] pl-[3px] pr-[13px] mr-[5rem] bg-[#FA00FF] from-zinc-950  rounded-full shadow border border-[#FA00FF] justify-start items-center inline-flex instagram-button mb-[0.5rem]", children: [(0, Ie.jsx)("div", { className: "w-4 h-4 relative flex-col justify-start items-start flex " }), (0, Ie.jsxs)("div", { className: "text-center text-white  text-xs font-normal font-['Varino'] flex flex-row justify-center items-center align-middle", children: [(0, Ie.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, Ie.jsx)("g", { id: "instagram", children: (0, Ie.jsx)("path", { id: "Vector", d: "M11.6188 4.13967C11.4605 4.13967 11.3059 4.18659 11.1743 4.2745C11.0427 4.3624 10.9402 4.48735 10.8797 4.63353C10.8191 4.77971 10.8033 4.94056 10.8341 5.09575C10.865 5.25093 10.9412 5.39348 11.0531 5.50536C11.165 5.61724 11.3075 5.69343 11.4627 5.7243C11.6179 5.75517 11.7787 5.73933 11.9249 5.67878C12.0711 5.61823 12.196 5.51569 12.2839 5.38413C12.3718 5.25257 12.4188 5.0979 12.4188 4.93967C12.4188 4.7275 12.3345 4.52402 12.1844 4.37399C12.0344 4.22396 11.8309 4.13967 11.6188 4.13967ZM14.6854 5.75301C14.6725 5.19987 14.5689 4.65261 14.3788 4.13301C14.2092 3.68843 13.9454 3.28586 13.6054 2.95301C13.2753 2.61129 12.8718 2.34913 12.4254 2.18634C11.9072 1.99045 11.3593 1.88448 10.8054 1.87301C10.0988 1.83301 9.87209 1.83301 8.05876 1.83301C6.24542 1.83301 6.01876 1.83301 5.31209 1.87301C4.75819 1.88448 4.21032 1.99045 3.69209 2.18634C3.24654 2.35077 2.84338 2.61271 2.51209 2.95301C2.17037 3.28313 1.90821 3.68663 1.74542 4.13301C1.54953 4.65124 1.44356 5.19911 1.43209 5.75301C1.39209 6.45967 1.39209 6.68634 1.39209 8.49967C1.39209 10.313 1.39209 10.5397 1.43209 11.2463C1.44356 11.8002 1.54953 12.3481 1.74542 12.8663C1.90821 13.3127 2.17037 13.7162 2.51209 14.0463C2.84338 14.3866 3.24654 14.6486 3.69209 14.813C4.21032 15.0089 4.75819 15.1149 5.31209 15.1263C6.01876 15.1663 6.24542 15.1663 8.05876 15.1663C9.87209 15.1663 10.0988 15.1663 10.8054 15.1263C11.3593 15.1149 11.9072 15.0089 12.4254 14.813C12.8718 14.6502 13.2753 14.3881 13.6054 14.0463C13.9469 13.7147 14.211 13.3118 14.3788 12.8663C14.5689 12.3467 14.6725 11.7995 14.6854 11.2463C14.6854 10.5397 14.7254 10.313 14.7254 8.49967C14.7254 6.68634 14.7254 6.45967 14.6854 5.75301ZM13.4854 11.1663C13.4806 11.5895 13.4039 12.0088 13.2588 12.4063C13.1523 12.6965 12.9813 12.9586 12.7588 13.173C12.5425 13.3933 12.2809 13.564 11.9921 13.673C11.5946 13.8182 11.1753 13.8948 10.7521 13.8997C10.0854 13.933 9.83876 13.9397 8.08542 13.9397C6.33209 13.9397 6.08542 13.9397 5.41876 13.8997C4.97935 13.9079 4.54182 13.8402 4.12542 13.6997C3.84928 13.5851 3.59966 13.4149 3.39209 13.1997C3.17082 12.9855 3.00199 12.7231 2.89876 12.433C2.73599 12.0298 2.64572 11.601 2.63209 11.1663C2.63209 10.4997 2.59209 10.253 2.59209 8.49967C2.59209 6.74634 2.59209 6.49967 2.63209 5.83301C2.63508 5.40038 2.71406 4.97164 2.86542 4.56634C2.98279 4.28495 3.16293 4.03411 3.39209 3.83301C3.59463 3.60379 3.84495 3.42174 4.12542 3.29967C4.53179 3.15304 4.96009 3.07639 5.39209 3.07301C6.05876 3.07301 6.30542 3.03301 8.05876 3.03301C9.81209 3.03301 10.0588 3.03301 10.7254 3.07301C11.1486 3.07786 11.5679 3.15451 11.9654 3.29967C12.2684 3.41211 12.5403 3.59491 12.7588 3.83301C12.9772 4.03779 13.1479 4.28816 13.2588 4.56634C13.4069 4.9723 13.4836 5.40086 13.4854 5.83301C13.5188 6.49967 13.5254 6.74634 13.5254 8.49967C13.5254 10.253 13.5188 10.4997 13.4854 11.1663ZM8.05876 5.07967C7.38263 5.08099 6.72206 5.28269 6.16053 5.65929C5.59899 6.03588 5.16168 6.57047 4.90385 7.19551C4.64602 7.82055 4.57924 8.50799 4.71195 9.17096C4.84467 9.83394 5.17091 10.4427 5.64947 10.9203C6.12803 11.398 6.73743 11.723 7.40066 11.8544C8.06389 11.9859 8.7512 11.9177 9.37574 11.6587C10.0003 11.3997 10.534 10.9613 10.9095 10.399C11.285 9.83676 11.4854 9.1758 11.4854 8.49967C11.4863 8.04974 11.3982 7.60408 11.2262 7.18831C11.0543 6.77254 10.8018 6.39488 10.4833 6.07704C10.1649 5.7592 9.78672 5.50746 9.37062 5.33629C8.95452 5.16513 8.50868 5.07792 8.05876 5.07967ZM8.05876 10.7197C7.61968 10.7197 7.19047 10.5895 6.82539 10.3455C6.46031 10.1016 6.17577 9.75488 6.00774 9.34923C5.83972 8.94358 5.79575 8.49721 5.88141 8.06657C5.96707 7.63594 6.17851 7.24037 6.48898 6.9299C6.79945 6.61942 7.19502 6.40799 7.62566 6.32233C8.05629 6.23667 8.50266 6.28063 8.90831 6.44866C9.31397 6.61669 9.66068 6.90123 9.90462 7.26631C10.1486 7.63139 10.2788 8.0606 10.2788 8.49967C10.2788 8.79121 10.2213 9.07989 10.1098 9.34923C9.9982 9.61857 9.83468 9.86331 9.62853 10.0695C9.42239 10.2756 9.17766 10.4391 8.90831 10.5507C8.63897 10.6623 8.35029 10.7197 8.05876 10.7197Z", fill: "#f3f3f3" }) }) }), (0, Ie.jsx)("h1", { className: "ml-2 m-insta", children: "Instagram" })] })] }), (0, Ie.jsx)("div", { className: "flex menu-icon cursor-pointer flex-row  justify-end mx-auto m-game-menu", onClick: () => n((e => !e)), children: (0, Ie.jsx)("img", { src: He, alt: "menu", width: "50px", className: "flex border border-solid  m-burger border-[#F3F3F3] rounded-lg m-burger2 text-focus-in" }) })] }), (0, Ie.jsx)("div", { className: "font-varino", children: (0, Ie.jsxs)("div", { className: "", children: [(0, Ie.jsxs)("div", { className: "lg:flex justify-end relative z-10 hidden ", children: [(0, Ie.jsxs)("svg", { width: "300", height: "341", viewBox: "0 0 382 341", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "absolute top-[2rem] right-[2px]", children: [(0, Ie.jsx)("path", { d: "M0 135.107C0 108.981 0 95.9175 2.42664 85.1039C10.8952 47.3661 40.3661 17.8952 78.1039 9.42664C88.9175 7 101.981 7 128.107 7H143.832C151.85 7 159.774 8.72531 167.066 12.0588L168.579 12.7504C182.779 19.2416 199.134 19.0562 213.183 12.2447C220.302 8.79315 228.11 7 236.022 7H253.507C279.993 7 293.236 7 304.192 9.4935C341.69 18.0279 370.972 47.3098 379.507 84.8081C382 95.7639 382 109.007 382 135.493V174C382 236.624 382 267.935 368.471 291.227C359.744 306.252 347.252 318.744 332.227 327.471C308.935 341 277.624 341 215 341H167C104.376 341 73.0647 341 49.7734 327.471C34.7481 318.744 22.2561 306.252 13.5287 291.227C0 267.935 0 236.624 0 174V135.107Z", fill: "#1E1F29" }), (0, Ie.jsx)("path", { d: "M187.598 3.05973C188.96 1.62406 189.64 0.906222 190.5 0.906222C191.36 0.906222 192.04 1.62406 193.402 3.05973L194.054 3.74728C196.794 6.63538 198.163 8.07942 197.643 9.28971C197.123 10.5 195.133 10.5 191.152 10.5H189.848C185.867 10.5 183.877 10.5 183.357 9.28971C182.837 8.07942 184.206 6.63538 186.946 3.74729L187.598 3.05973Z", fill: "#0B0C10" })] }), (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "90", height: "111", viewBox: "0 0 105 111", fill: "none", className: "absolute translate-y-[7rem] mr-[2.5rem]", children: [(0, Ie.jsx)("path", { d: "M47.0275 21.0951L37.38 55.5022C37.0234 56.7732 36.4299 57.9555 35.6346 58.9789C34.8393 60.0024 33.8583 60.8462 32.7498 61.4604C31.6413 62.0746 30.4278 62.4467 29.1812 62.5546C27.9347 62.6626 26.6803 62.5042 25.4925 62.0888L11.2375 57.1057C9.94781 56.655 8.76623 55.9118 7.77497 54.9278C6.78371 53.9438 6.00657 52.7426 5.49761 51.4079C4.98865 50.0731 4.76011 48.6368 4.82787 47.1988C4.89563 45.7609 5.25808 44.3559 5.88999 43.0816L24.6275 5.29765C25.3848 3.77083 26.5049 2.48003 27.8771 1.55292C29.2492 0.6258 30.8258 0.094473 32.451 0.0114781C34.0762 -0.0715169 35.6937 0.296695 37.1435 1.0797C38.5933 1.86271 39.8253 3.03339 40.7175 4.47597L45.8875 12.8359C46.6327 14.0418 47.1207 15.4055 47.3176 16.832C47.5145 18.2585 47.4155 19.7133 47.0275 21.0951Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M80.1525 5.30034L98.8825 43.079C99.5144 44.3535 99.8769 45.7587 99.9446 47.1968C100.012 48.6349 99.7839 50.0714 99.2749 51.4064C98.766 52.7413 97.9889 53.9427 96.9976 54.927C96.0063 55.9113 94.8247 56.6548 93.535 57.1058L79.2875 62.0889C78.0992 62.5046 76.8443 62.6632 75.5971 62.5554C74.3499 62.4475 73.1358 62.0753 72.0268 61.4608C70.9178 60.8463 69.9364 60.0021 69.1408 58.9781C68.3452 57.9541 67.7515 56.7712 67.395 55.4995L57.75 21.0951C57.3625 19.7137 57.2638 18.2594 57.4607 16.8335C57.6575 15.4075 58.1453 14.0442 58.89 12.8386L64.055 4.48132C64.947 3.03742 66.1792 1.8655 67.6297 1.08151C69.0801 0.297532 70.6984 -0.0713408 72.3246 0.0113967C73.9507 0.0941343 75.5283 0.625614 76.9013 1.55325C78.2742 2.48088 79.3949 3.77251 80.1525 5.30034Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M37.9725 64.3481L44.885 37.2248C45.0383 36.6237 45.3741 36.0929 45.8404 35.7144C46.3068 35.3359 46.8777 35.1308 47.465 35.1309H56.96C57.5384 35.1303 58.1013 35.3287 58.5642 35.6962C59.0272 36.0638 59.3652 36.5806 59.5275 37.1692L66.995 64.2925C67.1115 64.715 67.1336 65.1606 67.0594 65.5937C66.9853 66.0269 66.8169 66.4358 66.5677 66.788C66.3185 67.1402 65.9954 67.4259 65.6239 67.6226C65.2524 67.8193 64.8428 67.9215 64.4275 67.9211H40.5525C40.1421 67.9211 39.7371 67.8209 39.3691 67.6282C39.0011 67.4356 38.6799 67.1556 38.4304 66.8101C38.1809 66.4645 38.0098 66.0627 37.9304 65.6358C37.851 65.2088 37.8654 64.7682 37.9725 64.3481Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M0 91.9569V68.5921C0.283333 65.7472 1.39 63.4774 3.32 61.7828C5.38667 59.9681 7.73667 59.2126 10.37 59.5166C11.315 59.6261 12.5867 60.0149 14.185 60.6828C19.5083 62.9093 25.27 65.2577 31.47 67.728C33.3117 68.4631 34.6167 69.1426 35.385 69.7663C37.8825 71.7993 39.345 75.1178 39.0675 78.4788C39.0142 79.1202 38.7833 80.2016 38.375 81.7231C36.4633 88.8496 34.6092 95.7596 32.8125 102.453C32.4842 103.676 31.8225 104.881 30.8275 106.069C28.62 108.703 25.1325 109.843 21.9025 109.101C20.9725 108.887 19.7825 108.362 18.3325 107.526C14.2225 105.155 10.205 102.893 6.28 100.741C4.73833 99.8963 3.595 99.094 2.85 98.3342C1.22 96.6714 0.27 94.5457 0 91.9569Z", fill: "#282A36" }), (0, Ie.jsx)("path", { d: "M105 68.6277V91.913C104.735 94.5159 103.797 96.6425 102.185 98.2929C101.425 99.0704 100.159 99.9469 98.3875 100.922C94.3625 103.14 90.3692 105.389 86.4075 107.668C85.0609 108.442 83.9434 108.923 83.055 109.11C79.115 109.942 75.1925 108.166 73.1225 104.585C72.6225 103.72 72.1542 102.451 71.7175 100.779C70.1092 94.6192 68.4775 88.5388 66.8225 82.5379C66.1842 80.2266 65.875 78.5939 65.895 77.6397C65.9775 73.4412 68.335 69.8629 72.075 68.3494C79.1367 65.4939 85.6783 62.823 91.7 60.3367C92.855 59.8596 93.8775 59.5795 94.7675 59.4965C97.4309 59.2438 99.7775 60.0478 101.808 61.9085C103.671 63.6155 104.735 65.8552 105 68.6277Z", fill: "#FA00FF" }), (0, Ie.jsx)("path", { d: "M66.6125 110.998H38.1875C36.4059 109.001 35.5025 106.729 35.4775 104.181C35.4659 103.052 35.7384 101.435 36.295 99.3304C37.7784 93.7307 39.2584 87.9401 40.735 81.9586C41.29 79.7127 41.7175 78.231 42.0175 77.5136C43.4525 74.0784 46.69 71.7857 50.245 71.6956C51.7767 71.6567 53.185 71.6638 54.47 71.7168C57.475 71.8413 60.185 73.7471 61.7675 76.3818C62.1942 77.0921 62.66 78.3635 63.165 80.196C65.0784 87.1528 66.9959 94.1079 68.9175 101.061C69.9492 104.79 69.1809 108.102 66.6125 110.998Z", fill: "#282A36" })] }), (0, Ie.jsx)("div", { className: "flex flex-row", children: (0, Ie.jsxs)("div", { className: " absolute text-white text-xl font-semibold font-['Outfit'] translate-y-[7.5rem] -translate-x-[16.5rem]", children: ["Registration", (0, Ie.jsx)("br", {}), "Amount", (0, Ie.jsx)("div", { className: "text-slate-400 text-[13px] font-medium mt-[1rem]", children: "Check in 15:00" }), (0, Ie.jsx)("div", { className: "text-slate-400 text-[13px] font-medium", children: "No refund" }), (0, Ie.jsxs)("div", { className: "relative justify-center", children: [(0, Ie.jsx)("div", { className: "w-[225px] h-[60px] left-0 top-3 absolute bg-zinc-950 rounded-[100px]" }), (0, Ie.jsx)("div", { className: "w-6 h-5 left-[180px] top-[32px] absolute justify-center items-center inline-flex", children: (0, Ie.jsx)("div", { className: "w-6 h-5 relative", children: (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "22", viewBox: "0 0 24 24", fill: "none", children: [(0, Ie.jsx)("path", { d: "M14.43 5.92969L20.5 11.9997L14.43 18.0697", stroke: "#246DB6", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" }), (0, Ie.jsx)("path", { d: "M3.5 12H20.33", stroke: "#246DB6", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" })] }) }) }), (0, Ie.jsx)("div", { className: "left-[30px] top-[30px] absolute text-white text-[25px] font-semibold", children: "\u20b949" })] })] }) })] }), (0, Ie.jsxs)("div", { className: "relative flex justify-center", children: [(0, Ie.jsx)("div", { className: "flex justify-center technutz-btn cursor-pointer absolute z-10 mx-auto bottom-32", children: (0, Ie.jsx)("div", { className: "flex justify-center", children: (0, Ie.jsxs)("div", { onClick: Qo, className: "w-[235px] h-[65px] text-center flex flex-row justify-center items-center left-0 top-0 bg-[#FA00FF] rounded-[100px] m-technutz-btn", children: [(0, Ie.jsx)("div", { className: "left-[2rem] absolute text-white text-[22px] font-semibold font-['Outfit'] m-participate-text", children: "Participate" }), (0, Ie.jsx)("div", { children: (0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "21", height: "24", viewBox: "0 0 24 24", fill: "none", className: "flex ml-[9.5rem] m-arrow", children: [(0, Ie.jsx)("path", { d: "M14.4301 5.92969L20.5001 11.9997L14.4301 18.0697", stroke: "#fff", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" }), (0, Ie.jsx)("path", { d: "M3.5 12H20.33", stroke: "#fff", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", "stroke-linejoin": "round" })] }) })] }) }) }), (0, Ie.jsx)("img", { src: Rl, alt: "webdevbanner", className: "w-screen m-hide" }), (0, Ie.jsx)("img", { src: Bl, alt: "webdevbanner", className: "w-screen lg:hidden" }), (0, Ie.jsx)("div", { className: " absolute w-[100vw] h-[300px] valorantbanneroverlay -bottom-32 flex justify-center items-center", children: (0, Ie.jsxs)("div", { className: " inline-flex lg:p-[25px] items-center lg:gap-5 lg:rounded-[22px] webdevvenuecard translate-y-[5rem] justify-center align-middle m-venue-box", children: [(0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-calender", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.61073 0.672852C9.39667 0.672852 10.0338 1.30998 10.0338 2.09593V4.94208H27.1107V2.09593C27.1107 1.30998 27.7479 0.672852 28.5338 0.672852C29.3197 0.672852 29.9569 1.30998 29.9569 2.09593V4.94208H31.38C34.5237 4.94208 37.0723 7.49062 37.0723 10.6344V31.9805C37.0723 35.1243 34.5237 37.6729 31.38 37.6729H5.76457C2.6208 37.6729 0.0722656 35.1243 0.0722656 31.9805V10.6344C0.0722656 7.49062 2.6208 4.94208 5.76457 4.94208H7.18765V2.09593C7.18765 1.30998 7.82478 0.672852 8.61073 0.672852ZM34.2261 17.7498C34.2261 16.1779 32.9518 14.9036 31.38 14.9036H5.76457C4.19269 14.9036 2.91842 16.1779 2.91842 17.7498V31.9805C2.91842 33.5524 4.19269 34.8267 5.76457 34.8267H31.38C32.9518 34.8267 34.2261 33.5524 34.2261 31.9805V17.7498Z", fill: "#F3F3F3" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "18th January" })] }), (0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-time", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { d: "M19.0605 9.92285V19.1729H25.998M32.9355 19.1729C32.9355 26.8358 26.7235 33.0478 19.0605 33.0478C11.3976 33.0478 5.18555 26.8358 5.18555 19.1729C5.18555 11.5099 11.3976 5.29785 19.0605 5.29785C26.7235 5.29785 32.9355 11.5099 32.9355 19.1729Z", stroke: "#F3F3F3", "stroke-width": "2.47513", "stroke-linecap": "round", "stroke-linejoin": "round" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "10:00 AM to 12:00 PM" })] }), (0, Ie.jsxs)("div", { className: "flex items-center lg:gap-2", children: [(0, Ie.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "25", className: "m-venue-location", viewBox: "0 0 38 38", fill: "none", children: (0, Ie.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M17.8383 35.1307C17.8849 35.1577 17.9215 35.1785 17.9474 35.1931L17.9904 35.2171C18.334 35.4057 18.7602 35.4043 19.1041 35.2177L19.1483 35.1931C19.1742 35.1785 19.2108 35.1577 19.2574 35.1307C19.3505 35.0768 19.4836 34.9981 19.6509 34.895C19.9854 34.6891 20.4576 34.3854 21.0216 33.9869C22.1478 33.1914 23.6504 32.011 25.1563 30.4692C28.1535 27.4005 31.2666 22.7898 31.2666 16.8603C31.2666 9.83598 25.5722 4.1416 18.5479 4.1416C11.5235 4.1416 5.8291 9.83598 5.8291 16.8603C5.8291 22.7898 8.94222 27.4005 11.9394 30.4692C13.4453 32.011 14.9479 33.1914 16.0741 33.9869C16.6381 34.3854 17.1103 34.6891 17.4448 34.895C17.6121 34.9981 17.7452 35.0768 17.8383 35.1307ZM18.5479 21.4853C21.1022 21.4853 23.1728 19.4147 23.1728 16.8604C23.1728 14.306 21.1022 12.2354 18.5479 12.2354C15.9935 12.2354 13.9229 14.306 13.9229 16.8604C13.9229 19.4147 15.9935 21.4853 18.5479 21.4853Z", fill: "#F3F3F3" }) }), (0, Ie.jsx)("div", { className: " font-readex text-[#F3F3F3]", children: "CS Lab,4th Floor" })] })] }) })] })] }) }), (0, Ie.jsxs)("div", { className: "max-w-[1300px] lg:mt-40 mb-20 flex flex-col justify-center items-center mx-auto gap-10", children: [(0, Ie.jsx)("div", { className: "text-center text-[#D6D6D6E5] font-readex text-[23px] font-medium w-[1000px] m-technutz-desc", children: "Technutz is a fun event where you can play different games without coding. You can join alone or with friends and compete or relax. Come and enjoy Technutz with us!!" }), (0, Ie.jsx)("div", { className: "font-varino text-[90px] tracking-[4.9px] text-center valorantrules font-semibold m-rule-text", children: "OVERVIEW" }), (0, Ie.jsxs)("section", { className: "w-[1000px] flex flex-col items-center gap-6", children: [(0, Ie.jsx)("div", { className: "font-inter text-[23px] text-white text-center tracking-[0.5px] m-technutz-overview", children: "Technutz is an event with four rounds of fun and simple games. To join, you need to register and pay a fee that is not refundable or transferable. You also need to be healthy, respectful, and follow the rules of each round. The hosts and referees will explain the rules and judge the games." }), (0, Ie.jsx)("div", { className: "font-inter text-[23px] text-white text-center tracking-[0.5px] m-technutz-overview", children: "It is mandatory for every participant to adhere to the rules and regulations of the event. The regulations won't be repeated if you don't comply, and you risk being disqualified. To guarantee that everyone has a fair and good time, it is crucial that participants be aware of the regulations prior to the event." })] })] }), (0, Ie.jsx)(Ze, {})] }) }) })); const Ol = n.p + "static/media/contactbanner.d8c864c0edc1ebbf30aaa30bf62bde9b.svg",
            _l = n.p + "static/media/ZiegersLogo2.963dc1e675cbb40002b2.webp",
            Hl = Wo((() => ((0, t.useEffect)((() => { document.title = "Ziegers-Contact" }), []), (0, Ie.jsxs)("div", { className: "overflow-hidden max-h-screen", children: [(0, Ie.jsxs)("div", { className: "m-contact-page", children: [(0, Ie.jsx)("div", { className: "text-white text-center font-varino text-[70px] lg:mt-10 m-contactus", children: "CONTACT US" }), (0, Ie.jsxs)("div", { className: "flex flex-col justify-center items-center gap-3", children: [(0, Ie.jsx)("div", { className: "", children: (0, Ie.jsx)("img", { src: _l, alt: "contact-logo", className: "w-[150px] m-contact-logo" }) }), (0, Ie.jsx)("div", { className: "w-[400px] text-[#F9F9F9] font-readex text-[22px] font-bold tracking-[1.8px] text-center m-contact-text", children: "We are just a mail away if you want to contact us." }), (0, Ie.jsxs)("div", { className: "flex flex-row justify-around max-w-[800px] gap-20 flex-wrap m-support", children: [(0, Ie.jsxs)("div", { className: "flex flex-col items-center justify-center text-center gap-4 m-support-sec", children: [(0, Ie.jsx)("div", { className: "text-white text-center font-readex text-[17px] font-bold  m-support-text", children: "Support" }), (0, Ie.jsxs)("div", { className: "flex flex-row justify-center items-center gap-2", children: [(0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "40", height: "40", className: "m-contact-mail", viewBox: "0 0 56 56", fill: "none", children: [(0, Ie.jsx)("circle", { cx: "28", cy: "28", r: "28", fill: "#0B0C10" }), (0, Ie.jsx)("path", { d: "M38.8333 18H17.1667C16.592 18 16.0409 18.2479 15.6346 18.6892C15.2283 19.1304 15 19.7289 15 20.3529V35.6471C15 36.2711 15.2283 36.8696 15.6346 37.3108C16.0409 37.7521 16.592 38 17.1667 38H38.8333C39.408 38 39.9591 37.7521 40.3654 37.3108C40.7717 36.8696 41 36.2711 41 35.6471V20.3529C41 19.7289 40.7717 19.1304 40.3654 18.6892C39.9591 18.2479 39.408 18 38.8333 18ZM39.9167 35.6471C39.9167 35.9591 39.8025 36.2583 39.5994 36.479C39.3962 36.6996 39.1207 36.8235 38.8333 36.8235H17.1667C16.8793 36.8235 16.6038 36.6996 16.4006 36.479C16.1975 36.2583 16.0833 35.9591 16.0833 35.6471V20.3529C16.0833 20.0409 16.1975 19.7417 16.4006 19.5211C16.6038 19.3004 16.8793 19.1765 17.1667 19.1765H38.8333C39.1207 19.1765 39.3962 19.3004 39.5994 19.5211C39.8025 19.7417 39.9167 20.0409 39.9167 20.3529V35.6471Z", fill: "white" }), (0, Ie.jsx)("path", { d: "M37.9727 20.9931C37.8775 20.9467 37.7719 20.9311 37.6687 20.9484C37.5654 20.9656 37.469 21.0148 37.391 21.0902L28.0007 30.1543L18.6109 21.0896C18.5328 21.0141 18.4363 20.9648 18.333 20.9475C18.2297 20.9303 18.124 20.9458 18.0287 20.9923C17.9333 21.0388 17.8524 21.1143 17.7957 21.2096C17.739 21.305 17.7089 21.4161 17.709 21.5296V35.6472C17.709 35.8032 17.7661 35.9529 17.8676 36.0632C17.9692 36.1735 18.107 36.2355 18.2507 36.2355C18.3943 36.2355 18.5321 36.1735 18.6337 36.0632C18.7352 35.9529 18.7923 35.8032 18.7923 35.6472V22.8396L27.6404 31.3808C27.7396 31.4765 27.8677 31.5294 28.0004 31.5294C28.1331 31.5294 28.2612 31.4765 28.3603 31.3808L37.209 22.8396V35.059C37.209 35.215 37.2661 35.3646 37.3676 35.4749C37.4692 35.5853 37.607 35.6472 37.7507 35.6472C37.8943 35.6472 38.0321 35.5853 38.1337 35.4749C38.2353 35.3646 38.2923 35.215 38.2923 35.059V21.5296C38.2923 21.4162 38.2621 21.3053 38.2054 21.2101C38.1487 21.115 38.0679 21.0396 37.9727 20.9931Z", fill: "white" }), (0, Ie.jsx)("path", { d: "M27.65 27.8605C27.7478 27.9504 27.8718 27.9997 27.9999 27.9997C28.1281 27.9997 28.2521 27.9504 28.3499 27.8605L35.3915 21.3899C35.4974 21.288 35.5624 21.1451 35.5725 20.9917C35.5826 20.8384 35.5371 20.6869 35.4456 20.5696C35.3542 20.4523 35.2241 20.3786 35.0832 20.3641C34.9423 20.3496 34.8018 20.3956 34.6917 20.4923L27.9999 26.6411L21.3082 20.4923C21.2542 20.4403 21.1912 20.4005 21.1228 20.3754C21.0545 20.3502 20.9822 20.3401 20.9102 20.3457C20.8382 20.3513 20.768 20.3725 20.7036 20.408C20.6393 20.4435 20.5821 20.4926 20.5355 20.5524C20.4889 20.6122 20.4537 20.6815 20.4321 20.7563C20.4105 20.8311 20.4028 20.9098 20.4096 20.9878C20.4164 21.0658 20.4375 21.1416 20.4716 21.2106C20.5057 21.2797 20.5522 21.3407 20.6084 21.3899L27.65 27.8605Z", fill: "white" })] }), (0, Ie.jsx)("div", { className: "text-white text-center font-readex text-[17px] font-bold contact-text m-support-text", children: "support@ziegerscs.com" })] })] }), (0, Ie.jsxs)("div", { className: "flex flex-col items-center gap-4 m-social-sec", children: [(0, Ie.jsx)("div", { className: "text-white text-center font-readex text-[17px] font-bold  m-support-text", children: "Socials" }), (0, Ie.jsxs)("div", { className: "flex flex-row justify-center items-center gap-2", children: [(0, Ie.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "40", height: "40", className: "m-contact-insta", viewBox: "0 0 56 56", fill: "none", children: [(0, Ie.jsx)("circle", { cx: "28", cy: "28", r: "28", fill: "#0B0C10" }), (0, Ie.jsx)("path", { d: "M34.942 19.498C34.6335 19.498 34.3319 19.5895 34.0753 19.7609C33.8188 19.9323 33.6188 20.176 33.5007 20.461C33.3827 20.7461 33.3518 21.0597 33.412 21.3623C33.4722 21.665 33.6207 21.9429 33.8389 22.1611C34.0571 22.3793 34.3351 22.5278 34.6377 22.588C34.9403 22.6482 35.2539 22.6173 35.539 22.4993C35.824 22.3812 36.0677 22.1812 36.2391 21.9247C36.4105 21.6681 36.502 21.3665 36.502 21.058C36.502 20.6443 36.3376 20.2475 36.0451 19.9549C35.7525 19.6624 35.3557 19.498 34.942 19.498ZM40.922 22.644C40.8967 21.5654 40.6947 20.4982 40.324 19.485C39.9935 18.6181 39.479 17.8331 38.816 17.184C38.1723 16.5177 37.3854 16.0064 36.515 15.689C35.5045 15.307 34.4361 15.1004 33.356 15.078C31.978 15 31.536 15 28 15C24.464 15 24.022 15 22.644 15.078C21.5639 15.1004 20.4955 15.307 19.485 15.689C18.6162 16.0096 17.83 16.5204 17.184 17.184C16.5177 17.8277 16.0064 18.6146 15.689 19.485C15.307 20.4955 15.1004 21.5639 15.078 22.644C15 24.022 15 24.464 15 28C15 31.536 15 31.978 15.078 33.356C15.1004 34.4361 15.307 35.5045 15.689 36.515C16.0064 37.3854 16.5177 38.1723 17.184 38.816C17.83 39.4796 18.6162 39.9904 19.485 40.311C20.4955 40.693 21.5639 40.8996 22.644 40.922C24.022 41 24.464 41 28 41C31.536 41 31.978 41 33.356 40.922C34.4361 40.8996 35.5045 40.693 36.515 40.311C37.3854 39.9936 38.1723 39.4823 38.816 38.816C39.4819 38.1694 39.9968 37.3837 40.324 36.515C40.6947 35.5018 40.8967 34.4346 40.922 33.356C40.922 31.978 41 31.536 41 28C41 24.464 41 24.022 40.922 22.644ZM38.582 33.2C38.5725 34.0252 38.4231 34.8428 38.14 35.618C37.9324 36.1838 37.599 36.695 37.165 37.113C36.7433 37.5427 36.2332 37.8754 35.67 38.088C34.8948 38.3711 34.0772 38.5205 33.252 38.53C31.952 38.595 31.471 38.608 28.052 38.608C24.633 38.608 24.152 38.608 22.852 38.53C21.9952 38.546 21.142 38.4141 20.33 38.14C19.7915 37.9165 19.3048 37.5846 18.9 37.165C18.4685 36.7474 18.1393 36.2358 17.938 35.67C17.6206 34.8837 17.4446 34.0475 17.418 33.2C17.418 31.9 17.34 31.419 17.34 28C17.34 24.581 17.34 24.1 17.418 22.8C17.4238 21.9564 17.5778 21.1203 17.873 20.33C18.1019 19.7813 18.4531 19.2922 18.9 18.9C19.295 18.453 19.7831 18.098 20.33 17.86C21.1224 17.5741 21.9576 17.4246 22.8 17.418C24.1 17.418 24.581 17.34 28 17.34C31.419 17.34 31.9 17.34 33.2 17.418C34.0252 17.4275 34.8428 17.5769 35.618 17.86C36.2088 18.0792 36.739 18.4357 37.165 18.9C37.591 19.2993 37.9239 19.7876 38.14 20.33C38.4289 21.1216 38.5785 21.9573 38.582 22.8C38.647 24.1 38.66 24.581 38.66 28C38.66 31.419 38.647 31.9 38.582 33.2ZM28 21.331C26.6816 21.3336 25.3935 21.7269 24.2985 22.4612C23.2035 23.1956 22.3507 24.2381 21.8479 25.4569C21.3452 26.6757 21.2149 28.0162 21.4737 29.309C21.7325 30.6018 22.3687 31.7889 23.3019 32.7203C24.2351 33.6516 25.4234 34.2855 26.7167 34.5418C28.01 34.7981 29.3503 34.6652 30.5681 34.1601C31.786 33.655 32.8267 32.8002 33.559 31.7037C34.2912 30.6073 34.682 29.3184 34.682 28C34.6837 27.1226 34.512 26.2536 34.1766 25.4428C33.8413 24.6321 33.3489 23.8957 32.7279 23.2759C32.1069 22.6561 31.3695 22.1652 30.5581 21.8314C29.7467 21.4976 28.8774 21.3276 28 21.331ZM28 32.329C27.1438 32.329 26.3068 32.0751 25.5949 31.5994C24.883 31.1238 24.3282 30.4477 24.0005 29.6566C23.6729 28.8656 23.5871 27.9952 23.7542 27.1555C23.9212 26.3157 24.3335 25.5444 24.9389 24.9389C25.5444 24.3335 26.3157 23.9212 27.1555 23.7542C27.9952 23.5871 28.8656 23.6729 29.6566 24.0005C30.4477 24.3282 31.1238 24.883 31.5994 25.5949C32.0751 26.3068 32.329 27.1438 32.329 28C32.329 28.5685 32.217 29.1314 31.9995 29.6566C31.7819 30.1819 31.4631 30.6591 31.0611 31.0611C30.6591 31.4631 30.1819 31.7819 29.6566 31.9995C29.1314 32.217 28.5685 32.329 28 32.329Z", fill: "white" })] }), (0, Ie.jsx)("div", { className: "text-white text-center font-readex text-[17px] font-bold contact-text m-support-text", children: "https://www.instagram.com/ziegerscs" })] })] })] })] }), (0, Ie.jsx)("img", { src: Ol, alt: "contactbanner", className: "w-screen translate-y-4 m-contact-banner" })] }), (0, Ie.jsx)(Ze, {})] })))),
            Il = n.p + "static/media/sujal.ae48f64db86d6f10052b.webp",
            Ul = n.p + "static/media/prailin1.288cb534e99dca1d84fc.webp",
            Zl = n.p + "static/media/aneesh1.e7b0a29c57cd9583f728.webp",
            Wl = n.p + "static/media/dinesh1.597f0f83d2dbfc4427cb.webp",
            $l = n.p + "static/media/ganesh1.523ec9ceacf53f81ac0b.webp",
            Gl = n.p + "static/media/hritika1.4259bf7b1840819c56f5.webp",
            Yl = n.p + "static/media/jestin1.906465deab5b2fcc1dcc.webp",
            ql = n.p + "static/media/kushal1.95e8429f9e6c1c5e8382.webp",
            Xl = n.p + "static/media/mayank1.cad56f06ce317feb73b7.webp",
            Ql = n.p + "static/media/mohnish1.b68f69b28e6c427ffe3a.webp",
            Kl = n.p + "static/media/noel1.99c3b0efc6a064a083be.webp",
            Jl = n.p + "static/media/pranav1.68d63a43494d1bdead91.webp",
            ec = n.p + "static/media/ritesh1.9dbb13066642f0e7610b.webp",
            tc = n.p + "static/media/rithend1.e1d4108145b50a33cc19.webp",
            nc = n.p + "static/media/saloni1.ca8bdc8c6923140f5129.webp",
            rc = n.p + "static/media/sanika1.57a58106658a41831818.webp",
            ic = n.p + "static/media/sonal1.47bfbadf3ba9185b1c08.webp",
            ac = n.p + "static/media/sourav1.e1f033da38f41f86e494.webp",
            sc = n.p + "static/media/sulaj1.970f5113af7b8def8123.webp",
            oc = n.p + "static/media/suprith1.ce4a5bade983b8d80ded.webp",
            lc = n.p + "static/media/vinit1.3e01ab071fe603c7dfb5.webp",
            cc = n.p + "static/media/sabee1.90731109854dfc08905b.webp",
            uc = [{ name: "Sujal Jaiswal", role: "ChairPerson", imageUrl: Il }, { name: "Prailin Priyanka", role: "Vice-ChairPerson", imageUrl: Ul }, { name: "Ganesh Udutha", role: "Committee Head", imageUrl: $l }, { name: "Hritika Hanumanthkari", role: "Committee Co-Head", imageUrl: Gl }, { name: "Ritika Pamu", role: "Committee Member", imageUrl: n.p + "static/media/ritika1.013fdc4c7b7990de3b9a.webp" }, { name: "Sethu Balan", role: "Committee Member", imageUrl: n.p + "static/media/sethu1.28422c4e63b28c9203d8.webp" }, { name: "Mohnish Kalaimani", role: "Finance Head", imageUrl: Ql }, { name: "Rithend Sushanth", role: "Finance Co-Head", imageUrl: tc }, { name: "Sonal Gupta", role: "Sponsorship Head", imageUrl: ic }, { name: "Pranav Iyengar", role: "Sponsorship Co-Head", imageUrl: Jl }, { name: "Ritesh Chabarkar", role: "Art & Decor Head", imageUrl: ec }, { name: "Sulaj Acharya", role: "Art & Decor Co-Head", imageUrl: sc }, { name: "Khan Sabeehuddin", role: "Logistics Head", imageUrl: cc }, { name: "Dinesh Rajan", role: "Logistics Co-Head", imageUrl: Wl }, { name: "Sanika Patole", role: "Prh Head", imageUrl: rc }, { name: "Noel James", role: "Prh Co-Head", imageUrl: Kl }, { name: "Mayank Padmakar", role: "Gaming Head", imageUrl: Xl }, { name: "Jestin Oommen", role: "Gaming Co-Head", imageUrl: Yl }, { name: "Vinit Upadhyay", role: "Webdev Head", imageUrl: lc }, { name: "Sourav Mohanty", role: "Webdev Co-Head", imageUrl: ac }, { name: "Kushal Senghani", role: "Codex Head", imageUrl: ql }, { name: "Aneesh Sharma", role: "Codex Co-Head", imageUrl: Zl }, { name: "Saad Ansari", role: "GDSC Lead", imageUrl: n.p + "static/media/saad1.d9c9b17ecff096f99339.webp" }, { name: "Saloni Dalavi", role: "Technutz Head", imageUrl: nc }, { name: "Suprith Shetty", role: "Technutz Co-Head", imageUrl: oc }];

        function dc() { return (0, Ie.jsx)("div", { className: "bg-[#0A0A0B]", children: (0, Ie.jsx)("div", { className: "max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24", children: (0, Ie.jsxs)("div", { className: "space-y-8 sm:space-y-12", children: [(0, Ie.jsxs)("div", { className: "space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl", children: [(0, Ie.jsx)("h2", { className: "text-3xl font-extrabold tracking-tight sm:text-4xl font-readex text-white", children: "Meet Our Team" }), (0, Ie.jsx)("p", { className: "text-xl text-gray-500", children: "Ziegers 2024 Unveils the Brains Behind the Magic. Get to Know Our Visionary Heads and Co-Heads." })] }), (0, Ie.jsx)("ul", { role: "list", className: "mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-4", children: uc.map((e => (0, Ie.jsx)("li", { children: (0, Ie.jsxs)("div", { className: "space-y-4 font-readex", children: [(0, Ie.jsx)("img", { className: "mx-auto h-36 w-36 rounded-full lg:w-52 lg:h-52", src: e.imageUrl, alt: "" }), (0, Ie.jsx)("div", { className: "space-y-2", children: (0, Ie.jsxs)("div", { className: "text-xs font-medium lg:text-xl text-white", children: [(0, Ie.jsx)("h3", { className: "text-[16px] lg:text-2xl", children: e.name }), (0, Ie.jsx)("p", { className: " text-[#267ba3] lg:text-[16px] mt-[5px] lg:mt-0", children: e.role })] }) })] }) }, e.name))) })] }) }) }) } const fc = Wo((() => (0, Ie.jsxs)("div", { className: "wrapper overflow-x-hidden max-w-screen", children: [(0, Ie.jsxs)("div", { children: [(0, Ie.jsx)("div", { className: "text-white text-center font-varino text-[70px] mt-10 m-contactus m-aboutus", children: "ABOUT US" }), (0, Ie.jsx)("img", { src: Ol, alt: "contactbanner", className: "w-screen translate-y-4 m-contact-banner" }), (0, Ie.jsxs)("div", { className: "", children: [(0, Ie.jsxs)("div", { className: "flex flex-col justify-center absolute top-[15rem] items-center gap-7 w-screen", children: [(0, Ie.jsx)("div", { className: "text-white z-1 border border-solid border-[#E5E7EB] font-readex text-[30px] text-center font-bold rounded-full py-1 px-6 m-welcome-zieger", children: "Welcome to Ziegers 2024" }), (0, Ie.jsx)("div", { className: "text-[#C9CACB] text-[20px] font-readex text-center w-[800px] m-welcome-zieger-text", children: "Ziegers is the annual festival of the Computer Science Department. At Ziegers, students are provided with the opportunity to participate and prove their talents and technical skills." })] }), (0, Ie.jsxs)("div", { className: "flex flex-col justify-center absolute top-[31rem] items-center gap-7 w-screen m-mainobjective", children: [(0, Ie.jsx)("div", { className: "text-white top-[15.5rem] z-1 border border-solid border-[#E5E7EB] font-readex text-[30px] text-center font-bold rounded-full py-1 px-6 m-main-objective", children: "Main Objective" }), (0, Ie.jsx)("div", { className: "text-[#C9CACB] top-[21rem] text-[20px] font-readex text-center w-[800px] m-main-objective-text", children: "Ziegers is to help students to explore the practical dimensions of this field. At Ziegers we are here to celebrate a festival which is a perfect blend of fun and technical events to promote talent and provide opportunities to students to develop and enhance their skills. At Ziegers 2024, to celebrate 21 years of Ziegers, we cordially invite you to the universe of Ziegers and join us in resolving the Cosmic Mystery of Alien Invasion." })] }), (0, Ie.jsx)("div", { className: "mt-[35rem] lg:mt-[30rem]", children: (0, Ie.jsx)(dc, {}) })] })] }), (0, Ie.jsx)("div", { className: "flex mt-[5rem]", children: (0, Ie.jsx)(Ze, {}) })] }))); const hc = function() { const e = q(); return (0, Ie.jsxs)(Ie.Fragment, { children: [(0, Ie.jsx)(Go, {}), (0, Ie.jsx)(Ve, { mode: "wait", children: (0, Ie.jsxs)(fe, { location: e, children: [(0, Ie.jsx)(ue, { path: "/*", element: (0, Ie.jsx)(We, {}) }), (0, Ie.jsx)(ue, { path: "/contact*", element: (0, Ie.jsx)(Hl, {}) }), (0, Ie.jsx)(ue, { path: "/about*", element: (0, Ie.jsx)(fc, {}) }), (0, Ie.jsx)(ue, { path: "/events", element: (0, Ie.jsx)($o, {}) }), (0, Ie.jsx)(ue, { path: "/events/gaming", element: (0, Ie.jsx)(Vl, {}) }), (0, Ie.jsx)(ue, { path: "/events/gaming/valorant", element: (0, Ie.jsx)(el, {}) }), (0, Ie.jsx)(ue, { path: "/events/gaming/callofduty", element: (0, Ie.jsx)(rl, {}) }), (0, Ie.jsx)(ue, { path: "/events/gaming/bgmi", element: (0, Ie.jsx)(ul, {}) }), (0, Ie.jsx)(ue, { path: "/events/gaming/fifa2k23", element: (0, Ie.jsx)(hl, {}) }), (0, Ie.jsx)(ue, { path: "/events/gaming/granttruismo7", element: (0, Ie.jsx)(xl, {}) }), (0, Ie.jsx)(ue, { path: "/events/webdev", element: (0, Ie.jsx)(bl, {}) }), (0, Ie.jsx)(ue, { path: "/events/technutz", element: (0, Ie.jsx)(zl, {}) }), (0, Ie.jsx)(ue, { path: "/events/codex", element: (0, Ie.jsx)(Sl, {}) })] }, e.pathname) })] }) },
            pc = e => { e && e instanceof Function && n.e(787).then(n.bind(n, 787)).then((t => { let { getCLS: n, getFID: r, getFCP: i, getLCP: a, getTTFB: s } = t;
                    n(e), r(e), i(e), a(e), s(e) })) }; var mc = n(4164),
            xc = n.t(mc, 2);
        new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
        new Map; const gc = r.startTransition;
        xc.flushSync;

        function vc(e) { let { basename: n, children: r, future: i, window: a } = e, s = t.useRef(); var o;
            null == s.current && (s.current = (void 0 === (o = { window: a, v5Compat: !0 }) && (o = {}), h((function(e, t) { let { pathname: n, search: r, hash: i } = e.location; return u("", { pathname: n, search: r, hash: i }, t.state && t.state.usr || null, t.state && t.state.key || "default") }), (function(e, t) { return "string" === typeof t ? t : d(t) }), null, o))); let l = s.current,
                [c, f] = t.useState({ action: l.action, location: l.location }),
                { v7_startTransition: p } = i || {},
                m = t.useCallback((e => { p && gc ? gc((() => f(e))) : f(e) }), [f, p]); return t.useLayoutEffect((() => l.listen(m)), [l, m]), t.createElement(de, { basename: n, children: r, location: c.location, navigationType: c.action, navigator: l, future: i }) } "undefined" !== typeof window && "undefined" !== typeof window.document && window.document.createElement; var yc, Cc;
        (function(e) { e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState" })(yc || (yc = {})),
        function(e) { e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration" }(Cc || (Cc = {}));
        i.createRoot(document.getElementById("root")).render((0, Ie.jsx)(t.StrictMode, { children: (0, Ie.jsxs)(vc, { children: [(0, Ie.jsx)(Go, {}), (0, Ie.jsxs)(fe, { children: [(0, Ie.jsx)(ue, { path: "/*", element: (0, Ie.jsx)(hc, {}) }), (0, Ie.jsx)(ue, { path: "/events", element: (0, Ie.jsx)($o, {}) }), (0, Ie.jsx)(ue, { path: "/events/gaming", element: (0, Ie.jsx)(Vl, {}) }), (0, Ie.jsx)(ue, { path: "/events/gaming/valorant", element: (0, Ie.jsx)(el, {}) }), (0, Ie.jsx)(ue, { path: "/events/gaming/callofduty", element: (0, Ie.jsx)(rl, {}) }), (0, Ie.jsx)(ue, { path: "/events/gaming/bgmi", element: (0, Ie.jsx)(ul, {}) }), (0, Ie.jsx)(ue, { path: "/events/gaming/fifa2k23", element: (0, Ie.jsx)(hl, {}) }), (0, Ie.jsx)(ue, { path: "/events/gaming/granttruismo7", element: (0, Ie.jsx)(xl, {}) }), (0, Ie.jsx)(ue, { path: "/events/webdev", element: (0, Ie.jsx)(bl, {}) }), (0, Ie.jsx)(ue, { path: "/events/technutz", element: (0, Ie.jsx)(zl, {}) }), (0, Ie.jsx)(ue, { path: "/events/codex", element: (0, Ie.jsx)(Sl, {}) })] })] }) })), pc() })() })();
//# sourceMappingURL=main.f6e25bbf.js.map